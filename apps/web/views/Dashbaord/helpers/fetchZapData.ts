import { erc20ABI } from 'wagmi'
import { publicClient } from '@/utils/publicClient'
import borrowerOperationsContractAbi from '@/abi/borrowerOperations.json'
import stethABI from '@/abi/steth.json'
import { contractAddress } from '@/utils/constants'
import { chainName } from '@/utils/getChianName'

export interface Token {
  symbol: string
  balanceOf: bigint
  decimals: number
}

export interface FetchZapDataType {
  token: Token
  PMAAmount: number
  zapAllownce: bigint
}

export async function fetchZapData({ symbol, address, chain }): Promise<FetchZapDataType | undefined> {
  try {
    if (!symbol || !address || !chain) return undefined
    const data = await publicClient.multicall({
      contracts: [
        {
          abi: erc20ABI,
          address:
            symbol === 'stETH' ? contractAddress[chainName(chain)].steth : contractAddress[chainName(chain)].usdc,
          functionName: 'balanceOf',
          args: [address],
        },
        {
          abi: erc20ABI,
          address:
            symbol === 'stETH' ? contractAddress[chainName(chain)].steth : contractAddress[chainName(chain)].usdc,
          functionName: 'decimals',
        },
        {
          // @ts-expect-error
          abi: borrowerOperationsContractAbi,
          address: contractAddress[chainName(chain)].borrowerOperations,
          functionName: 'getPositionManagerApproval',
          args: [address, contractAddress[chainName(chain)].zap],
        },
        {
          // @ts-expect-error
          abi: stethABI,
          address: contractAddress[chainName(chain)].steth,
          functionName: 'allowance',
          args: [address, contractAddress[chainName(chain)].zap],
        },
      ],
    })
    const [
      { result: balanceOf },
      { result: decimals },
      { result: getPositionManagerApprovalAmount },
      { result: allowance },
    ] = data
    return {
      token: {
        symbol,
        balanceOf: balanceOf as unknown as bigint,
        decimals: decimals as unknown as number,
      },
      PMAAmount: getPositionManagerApprovalAmount as unknown as number,
      zapAllownce: allowance as unknown as bigint,
    }
  } catch (e) {
    console.log(e)
    return undefined
  }
}
