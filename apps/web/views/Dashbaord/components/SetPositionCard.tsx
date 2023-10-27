import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import type { UsePrepareContractWriteConfig } from 'wagmi'
import { useAccount, useContractWrite, useNetwork, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { formatUnits, parseUnits } from 'viem'
import BigNumber from 'bignumber.js'
import { readContract } from '@wagmi/core'
import { fetchZapData } from '../helpers/fetchZapData'
import { BetPosition } from '@/store/types'
import { useUserStore } from '@/store/user'
import borrowerOperationsContractAbi from '@/abi/borrowerOperations.json'
import flippenZapABI from '@/abi/zap.json'
import stethABI from '@/abi/steth.json'
import vaultABI from '@/abi/vault.json'
import { contractAddress, poolIds } from '@/utils/constants'
import { chainName } from '@/utils/getChianName'
import { useToast } from '@/contexts/ToastsContext'

interface SetPositionCardProps {
  position: BetPosition
  togglePosition: () => void
  epoch: number
  onBack: () => void
  onSuccess: (hash: string) => Promise<void>
}

interface FormDataType {
  amount: string
  symbol: string
  ratio: string
  leverage: string
}

/**
 *
 *
 * @param {*} {
 *   position,
 *   togglePosition,
 *   epoch,
 *   onBack,
 *   onSuccess,
 * }
 * @return {*}
 */
const SetPositionCard: React.FC<React.PropsWithChildren<SetPositionCardProps>> = ({
  position,
  togglePosition,
  epoch,
  onBack,
  onSuccess,
}) => {
  const [data, setData] = useState<{ token: Token; PMAAmount: number; zapAllownce: bigint }>({
    token: {
      symbol: 'stETH',
      balanceOf: 0n,
      decimals: 18,
    },
    PMAAmount: 0,
    zapAllownce: 0n,
  })
  const { token, PMAAmount, zapAllownce } = data
  const { chain } = useNetwork()
  const { isUserLoggedIn } = useUserStore()
  const [prepareContractConfig, setPrepareContractConfig] = useState<UsePrepareContractWriteConfig>({ enabled: false })
  const { toastSuccess } = useToast()

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    watch,
  } = useForm<FormDataType>({
    mode: 'all',
  })
  useEffect(() => {
    const fetchData = async () => {
      const config = await getPrepareContractWrite()
      setPrepareContractConfig(config)
    }

    fetchData()
  }, [getValues('amount'), getValues('symbol'), /*getValues('ratio'),*/ getValues('leverage'), data])

  const { address, isConnected } = useAccount()

  useEffect(() => {
    //  set it to be called every 5 seconds
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const interval = setInterval(async () => {
      const rs = await fetchZapData({ symbol: getValues('symbol'), address, chain })
      setData(rs)
    }, 5000)

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval)
    }
  }, [])
  const modal = useWeb3Modal()

  useEffect(() => {
    if (isConnected) {
      // TODO: temp solution
      useUserStore.setState({ isUserLoggedIn: true })
    } else {
      useUserStore.setState({ isUserLoggedIn: false })
    }
  }, [isConnected])

  const shouldDisableButton = () => {
    if (['wait', 'connect', 'enter_amount', 'valid_amount', 'insufficient_balance'].includes(getNextStep())) {
      return true
    }
    return false
  }

  const onSubmit = async (formData: FormDataType) => {
    write?.()
  }

  const getNextStep = () => {
    if (!isConnected) {
      return 'connect'
    } else if (!getValues('amount')) {
      return 'enter_amount'
    } else if (!/^[+-]?(\d*\.\d+|\d+)$/.test(getValues('amount'))) {
      return 'valid_amount'
    } else if (Number(getValues('amount')) < 2.2) {
      return 'min_required'
    } else if (Number(getValues('amount')) > Number(formatUnits(token.balanceOf || 0n, token.decimals))) {
      return 'insufficient_balance'
    }
    if (getValues('symbol') === 'USDC') {
      return 'submit'
    }
    // ETC beat BTC
    if (position === BetPosition.BEAR) {
      // if the user hasn't allowed approve the position manager contract for zap contract
      if (!PMAAmount) {
        return 'approve_position_manager'
      }

      // if the user hasn't allowed the zap contract to spend their stETH
      if (!zapAllownce || BigNumber(zapAllownce.toString()).isZero()) {
        return 'approve_zap'
      }

      // if the allowance is less than the amount
      if (BigNumber(zapAllownce.toString()).isLessThan(getValues('amount'))) {
        return 'increase_zap_allowance'
      }

      return 'call_zap'
      // BTC beat ETC
    } else if (position === BetPosition.BULL) {
      return 'swap_steth_to_ebtc'
    }
    return 'submit'
  }

  const getButtonText = () => {
    switch (getNextStep()) {
      // case 'wait':
      //   return <span aria-hidden="true" className="spinner-border spinner-border-sm" role="status" />
      case 'enter_amount':
        return 'Enter amount'
      case 'valid_amount':
        return 'Enter valid amount'
      case 'min_required':
        return 'Minimum 2.2 steth required'
      case 'insufficient_balance':
        return 'Insufficient Balance'
      case 'approve_position_manager':
        return 'Approve Position Manager'
      case 'approve_zap':
        return 'Approve Zap'
      case 'increase_zap_allowance':
        return 'Increase Zap Allowance'
      case 'call_zap':
        return 'Call Zap'
      case 'swap_steth_to_ebtc':
        return 'Swap stETH to eBTC'
      default:
        return 'submit'
    }
  }

  const getPrepareContractWrite = async (): Promise<UsePrepareContractWriteConfig> => {
    const next = getNextStep()
    console.log('xxxxxxxxxxxxxxxx', next)
    switch (getNextStep()) {
      case 'approve_position_manager': {
        const positionManager = { none: 1, oneTime: 2, persistent: 3 }
        return {
          // @ts-expect-error
          abi: borrowerOperationsContractAbi,
          address: contractAddress[chainName(chain)].borrowerOperations,
          functionName: 'setPositionManagerApproval',
          args: [contractAddress[chainName(chain)].zap, positionManager.persistent],
          enabled: true,
        }
      }
      case 'approve_zap':
        return {
          // @ts-expect-error
          abi: stethABI,
          address: contractAddress[chainName(chain)].steth,
          functionName: 'approve',
          args: [contractAddress[chainName(chain)].zap, parseUnits(getValues('amount'), token.decimals)],
          enabled: true,
        }
      case 'increase_zap_allowance':
        return {
          // @ts-expect-error
          abi: stethABI,
          address: contractAddress[chainName(chain)].steth,
          functionName: 'increaseAllowance',
          args: [contractAddress[chainName(chain)].zap, parseUnits(getValues('amount'), token.decimals)],
          enabled: true,
        }
      case 'call_zap':
        return {
          // @ts-expect-error
          abi: flippenZapABI,
          address: contractAddress[chainName(chain)].zap,
          functionName: 'enterLongEth',
          args: [parseUnits(getValues('amount'), token.decimals), Number(getValues('leverage'))],
          enabled: true,
        }
      case 'swap_steth_to_ebtc': {
        const batchSwap = {
          kind: 0,
          swaps: [
            {
              poolId: poolIds?.[chainName(chain)].steth_ebtc,
              // stETH
              assetInIndex: 0,
              // eBTC
              assetOutIndex: 1,
              amount: String(parseUnits(getValues('amount'), token.decimals)),
              userData: '0x',
            },
          ],
          assets: [contractAddress[chainName(chain)].steth, contractAddress[chainName(chain)].ebtc],
          funds: {
            fromInternalBalance: false,
            recipient: address as string,
            sender: address as string,
            toInternalBalance: false,
          },
          limit: [],
          deadline: `${Math.ceil(Date.now() / 1000) + 60}`, //  // 60 seconds from now
        }

        const deltas = await readContract({
          address: contractAddress[chainName(chain)].vault,
          abi: vaultABI,
          functionName: 'queryBatchSwap',
          args: [batchSwap.kind, batchSwap.swaps, batchSwap.assets, batchSwap.funds],
        })

        return {
          // @ts-expect-error
          abi: vaultABI,
          address: contractAddress[chainName(chain)].vault,
          functionName: 'batchSwap',
          args: [
            batchSwap.kind,
            batchSwap.swaps,
            batchSwap.assets,
            batchSwap.funds,
            deltas, // +ve for max to send, -ve for min to receive
            batchSwap.deadline,
          ],
          enabled: true,
        }
      }
      default:
        return {
          enabled: false,
        }
    }
  }

  // console.log('token', token)
  const { config, error: prepareError, isError: prepareIsError } = usePrepareContractWrite(prepareContractConfig)
  const {
    data: writeData,
    error: writeError,
    isError: writeIsError,
    write,
  } = useContractWrite({
    ...config,
    onSuccess: async (d) => {
      if (['call_zap', 'swap_steth_to_ebtc'].includes(getNextStep())) {
        await onSuccess(d.hash)
      } else {
        toastSuccess('Success', <div>Transaction submitted successfully</div>)
      }
      console.log('onSuccess', d)
    },
  })
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: writeData?.hash,
  })

  watch('amount')
  watch('symbol')

  // if ((prepareError || writeError)?.message) console.log('prepareError', (prepareError || writeError)?.message)
  return (
    <div className="p-3 d-flex flex-column justify-content-between" style={{ minHeight: 380 }}>
      <div className="pb-3">
        <button className="btn link-underline-success" onClick={onBack} type="button">
          <i className={`fa fa-arrow-left text-${position === BetPosition.BULL ? 'up' : 'down'}`} />
        </button>
        <span
          className={`fw-bolder fs-6 ml-5 text-${position === BetPosition.BULL ? 'up' : 'down'}`}
          style={{ marginLeft: 10 }}
        >
          Back
        </span>
      </div>

      <div className="d-flex justify-content-between mb-1">
        <input
          className="form-control rounded-0 rounded-start"
          placeholder="00.00"
          style={{ padding: '5px 0 5px 5px' }}
          type="text"
          {...register('amount', { required: true })}
        />
        <select
          className="form-select rounded-0 rounded-end"
          id="inputGroupSelect02"
          style={{
            width: 50,
            backgroundColor: 'transparent',
            color: 'white',
            border: '1px solid rgba(138, 138, 160, 0.3)',
          }}
          {...register('symbol', { required: true })}
        >
          <option value="stETH">stETH</option>
          {/* <option value="ETH">ETH</option>
          <option value="USDC">USDC</option> */}
        </select>
      </div>
      <div className="mb-3 text-end">
        Balance: {formatUnits(token.balanceOf || 0n, token.decimals)} {getValues('symbol')}
      </div>

      {/* <div className="d-flex flex-row justify-content-between mb-3">
        <span className="mt-10 fw-6"> Ratio</span>
        <div aria-label="Basic radio toggle button group" className="btn-group" role="group">
          <input
            autoComplete="off"
            className="btn-check"
            defaultChecked
            id="ratio1"
            type="radio"
            value="125"
            {...register('ratio', { required: true })}
          />
          <label className="btn btn-dark btn-sm px-2" htmlFor="ratio1">
            125%
          </label>

          <input
            autoComplete="off"
            className="btn-check"
            id="ratio2"
            type="radio"
            value="150"
            {...register('ratio', { required: true })}
          />
          <label className="btn btn-dark btn-sm px-2" htmlFor="ratio2">
            150%
          </label>

          <input
            autoComplete="off"
            className="btn-check"
            id="ratio3"
            type="radio"
            value="175"
            {...register('ratio', { required: true })}
          />
          <label className="btn btn-dark btn-sm px-2" htmlFor="ratio3">
            175%
          </label>

          <input
            autoComplete="off"
            className="btn-check"
            id="ratio4"
            type="radio"
            value="200"
            {...register('ratio', { required: true })}
          />
          <label className="btn btn-dark btn-sm px-2" htmlFor="ratio4">
            200%
          </label>
        </div>
      </div> */}

      <div className="d-flex flex-row justify-content-between mb-3">
        <span className="fw-6 mt-10">Leverage</span>
        <div aria-label="Basic radio toggle button group" className="btn-group" role="group">
          <input
            autoComplete="off"
            className="btn-check"
            defaultChecked
            id="leverage1"
            type="radio"
            value="1"
            {...register('leverage', { required: true })}
          />
          <label className="btn btn-dark btn-sm px-2" htmlFor="leverage1">
            1x
          </label>

          <input
            autoComplete="off"
            className="btn-check"
            id="leverage2"
            type="radio"
            value="2"
            {...register('leverage', { required: true })}
          />
          <label className="btn btn-dark btn-sm px-2" htmlFor="leverage2">
            2x
          </label>

          <input
            autoComplete="off"
            className="btn-check"
            id="leverage3"
            type="radio"
            value="3"
            {...register('leverage', { required: true })}
          />
          <label className="btn btn-dark btn-sm px-2" htmlFor="leverage3">
            3x
          </label>
          <input
            autoComplete="off"
            className="btn-check"
            id="leverage4"
            type="radio"
            value="4"
            {...register('leverage', { required: true })}
          />
          <label className="btn btn-dark btn-sm px-2" htmlFor="leverage4">
            4x
          </label>
          <input
            autoComplete="off"
            className="btn-check"
            id="leverage5"
            type="radio"
            value="5"
            {...register('leverage', { required: true })}
          />
          <label className="btn btn-dark btn-sm px-2" htmlFor="leverage5">
            5x
          </label>
        </div>
      </div>

      <div className="d-grid gap-2 mt-2">
        <span className="m-auto fs-5 fw-bold mb-3">
          {position === BetPosition.BULL ? 'BTC beat ETH' : 'ETH beat BTC'}
        </span>
      </div>

      <div className="flex-fill" style={{ overflow: 'hidden' }}>
        {/* errors will return when field validation fails  */}
        {errors.amount ? <span className="text-danger">Amount field is required</span> : null}
        {prepareIsError || writeIsError ? (
          <div className="alert alert-danger" role="alert" style={{ maxWidth: 300 }}>
            Error:{' '}
            {(prepareError || writeError)?.message.substring(0, 300) +
              (((prepareError || writeError)?.message || '').length > 300 ? '...' : '')}
          </div>
        ) : null}
        {isSuccess ? (
          <div>
            <div className="text-success">
              <a href={`https://sepolia.etherscan.io/tx/${writeData?.hash}`}>Sepolia Etherscan</a>
            </div>
          </div>
        ) : null}
      </div>

      <div className="d-grid gap-2 mt-2">
        {!isUserLoggedIn ? (
          <button
            className="btn btn-danger"
            onClick={() => {
              modal.open()
            }}
            type="button"
          >
            Connect Wallet
          </button>
        ) : (
          <button
            className={`btn btn-${position === BetPosition.BULL ? 'success' : 'danger'} mt-10 `}
            disabled={shouldDisableButton() || isLoading}
            onClick={handleSubmit(onSubmit)}
            type="button"
          >
            {isLoading ? (
              <span aria-hidden="true" className="spinner-border spinner-border-sm" role="status" />
            ) : (
              getButtonText()
            )}
          </button>
        )}
      </div>
    </div>
  )
}

export default SetPositionCard
