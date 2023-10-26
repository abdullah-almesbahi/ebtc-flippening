import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import type { UsePrepareContractWriteConfig } from 'wagmi'
import {
  erc20ABI,
  useAccount,
  useContractReads,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { formatUnits, parseUnits } from 'viem'
import BigNumber from 'bignumber.js'
import { BetPosition } from '@/store/types'
import { useUserStore } from '@/store/user'
import borrowerOperationsContractAbi from '@/abi/borrowerOperations.json'
import flippenZapABI from '@/abi/zap.json'
import stethABI from '@/abi/steth.json'
import { contractAddress } from '@/utils/constants'

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

interface Token {
  symbol: string
  balanceOf: bigint
  decimals: number
}

// PMA = Position Manager Approval
const SetPositionCard: React.FC<React.PropsWithChildren<SetPositionCardProps>> = ({
  position,
  togglePosition,
  epoch,
  onBack,
  onSuccess,
}) => {
  const [token, setToken] = useState<Token>({
    symbol: 'stETH',
    balanceOf: 0n,
    decimals: 18,
  })
  const [PMAAmount, setPMAAmount] = useState<number>(0)
  const [zapAllownce, setZapAllownce] = useState<bigint>(0n)
  const { isUserLoggedIn } = useUserStore()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    watch,
  } = useForm<FormDataType>({
    mode: 'all',
  })
  const { address, isConnected } = useAccount()
  const modal = useWeb3Modal()
  useContractReads({
    contracts: [
      {
        abi: erc20ABI,
        address: getValues('symbol') === 'stETH' ? contractAddress.steth : contractAddress.usdc,
        functionName: 'balanceOf',
        args: [address!],
      },
      {
        abi: erc20ABI,
        address: getValues('symbol') === 'stETH' ? contractAddress.steth : contractAddress.usdc,
        functionName: 'decimals',
      },
      {
        // @ts-expect-error
        abi: borrowerOperationsContractAbi,
        address: contractAddress.borrowerOperations,
        functionName: 'getPositionManagerApproval',
        args: [address!, contractAddress.zap],
      },
      {
        // @ts-expect-error
        abi: stethABI,
        address: contractAddress.steth,
        functionName: 'allowance',
        args: [address!, contractAddress.zap],
      },
    ],
    onSuccess(data) {
      console.log('success', data)
      const [
        { result: balanceOf },
        { result: decimals },
        { result: getPositionManagerApprovalAmount, status: getPositionManagerApprovalStatus },
        { result: allowance },
      ] = data
      setToken({
        symbol: getValues('symbol'),
        balanceOf: balanceOf as unknown as bigint,
        decimals: decimals as unknown as number,
      })
      console.log(getPositionManagerApprovalAmount, getPositionManagerApprovalStatus)
      setPMAAmount(getPositionManagerApprovalAmount as unknown as number)
      setZapAllownce(allowance as unknown as bigint)
    },
    onError(err) {
      console.log('onError', err)
    },
    onSettled(data, error) {
      console.log('onSettled', data, error)
    },
    // watch: true,
    // staleTime: 160_000,
    enabled: address && Number(getValues('amount')) > 0,
  })
  console.log('enabled', address && Number(getValues('amount')) > 0)

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

  const onSubmit = async (formData: any) => {
    console.log('formData', formData)
    try {
      setLoading(true)
      write?.()
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  const getNextStep = () => {
    if (loading) {
      return 'wait'
    } else if (!isConnected) {
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
    if (position === BetPosition.BULL) {
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
    }
    return 'submit'
  }

  const getButtonText = () => {
    switch (getNextStep()) {
      case 'wait':
        return <span aria-hidden="true" className="spinner-border spinner-border-sm" role="status" />
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
      default:
        return 'submit'
    }
  }

  const getPrepareContractWrite = (): UsePrepareContractWriteConfig => {
    switch (getNextStep()) {
      case 'approve_position_manager':
        const positionManager = { none: 1, oneTime: 2, persistent: 3 }
        return {
          // @ts-expect-error
          abi: borrowerOperationsContractAbi,
          address: contractAddress.borrowerOperations,
          functionName: 'setPositionManagerApproval',
          args: [contractAddress.zap, positionManager.persistent],
          enabled: true,
        }
      case 'approve_zap':
        return {
          // @ts-expect-error
          abi: stethABI,
          address: contractAddress.steth,
          functionName: 'approve',
          args: [contractAddress.zap, parseUnits(getValues('amount'), token.decimals)],
          enabled: true,
        }
      case 'increase_zap_allowance':
        return {
          // @ts-expect-error
          abi: stethABI,
          address: contractAddress.steth,
          functionName: 'increaseAllowance',
          args: [contractAddress.zap, parseUnits(getValues('amount'), token.decimals)],
          enabled: true,
        }
      case 'submit':
        return {
          // @ts-expect-error
          abi: flippenZapABI,
          address: contractAddress.zap,
          functionName: 'enterLongEth',
          args: [parseUnits(getValues('amount'), token.decimals), Number(getValues('leverage'))],
          enabled: true,
        }
      default:
        return {
          enabled: false,
        }
    }
  }

  console.log('token', token)
  console.log(getNextStep(), getPrepareContractWrite())
  const { config, error: prepareError, isError: prepareIsError } = usePrepareContractWrite(getPrepareContractWrite())
  const { data: writeData, error: writeError, isError: writeIsError, write } = useContractWrite(config)
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: writeData?.hash,
  })

  watch('amount')
  watch('symbol')

  if ((prepareError || writeError)?.message) console.log('prepareError', (prepareError || writeError)?.message)
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
          <option value="ETH">ETH</option>
          <option value="USDC">USDC</option>
        </select>
      </div>
      <div className="mb-3 text-end">
        Balance: {formatUnits(token.balanceOf || 0n, token.decimals)} {getValues('symbol')}
      </div>

      <div className="d-flex flex-row justify-content-between mb-3">
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
      </div>

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
