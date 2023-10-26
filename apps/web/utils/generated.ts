// @ts-nocheck
import type {
  UseContractReadConfig,
  Address,
  UseContractWriteConfig,
  UsePrepareContractWriteConfig,
  UseContractEventConfig,
} from 'wagmi'
import { useContractRead, useContractWrite, usePrepareContractWrite, useContractEvent } from 'wagmi'
import type { ReadContractResult, WriteContractMode, PrepareWriteContractResult } from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FlippenZap
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export const flippenZapABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_borrowerOperations', internalType: 'address', type: 'address' },
      { name: '_priceFeed', internalType: 'address', type: 'address' },
      { name: '_cdpManager', internalType: 'address', type: 'address' },
      { name: '_collToken', internalType: 'address', type: 'address' },
      { name: '_ebtcToken', internalType: 'address', type: 'address' },
      { name: '_balancerVault', internalType: 'address', type: 'address' },
      { name: '_balancerPoolId', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'CCR',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MAX_REASONABLE_LEVERAGE',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MAX_SLIPPAGE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MCR',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MIN_NET_STETH_BALANCE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'balancerPoolId',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'balancerVault',
    outputs: [{ name: '', internalType: 'contract IBalancerV2Vault', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'ebtcBorrowerOperations',
    outputs: [{ name: '', internalType: 'contract IBorrowerOperations', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'ebtcCdpManager',
    outputs: [{ name: '', internalType: 'contract ICdpManager', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'ebtcCollToken',
    outputs: [{ name: '', internalType: 'contract ICollateralToken', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'ebtcPriceFeed',
    outputs: [{ name: '', internalType: 'contract IPriceFeed', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'ebtcToken',
    outputs: [{ name: '', internalType: 'contract IEBTCToken', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_initialStETH', internalType: 'uint256', type: 'uint256' },
      { name: '_leverage', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'enterLongEth',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'initiator', internalType: 'address', type: 'address' },
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'fee', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onFlashLoan',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  { stateMutability: 'nonpayable', type: 'function', inputs: [], name: 'renounceOwnership', outputs: [] },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_newPoolID', internalType: 'bytes32', type: 'bytes32' }],
    name: 'setBalancerPoolID',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_slippage', internalType: 'uint256', type: 'uint256' }],
    name: 'setSlippage',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'slippage',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export const flippenZapAddress = {
  11155111: '0x74e495b3d3077bac66A6C93f47dfd4c789C907bF',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export const flippenZapConfig = { address: flippenZapAddress, abi: flippenZapABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Steth
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export const stethABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'spender', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'dst', internalType: 'address', type: 'address', indexed: true },
      { name: 'wad', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: '_share', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Deposit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'newCap', internalType: 'uint256', type: 'uint256', indexed: true }],
    name: 'MintCapSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'newCooldown', internalType: 'uint256', type: 'uint256', indexed: true }],
    name: 'MintCooldownSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'sharesValue', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'TransferShares',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'account', internalType: 'address', type: 'address', indexed: true }],
    name: 'UncappedMinterAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'account', internalType: 'address', type: 'address', indexed: true }],
    name: 'UncappedMinterRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'src', internalType: 'address', type: 'address', indexed: true },
      { name: 'wad', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: '_share', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Withdrawal',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'addUncappedMinter',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'guy', internalType: 'address', type: 'address' },
      { name: 'wad', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'authority',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_usr', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  { stateMutability: 'payable', type: 'function', inputs: [], name: 'deposit', outputs: [] },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'feeRecipientAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'ethToDeposit', internalType: 'uint256', type: 'uint256' }],
    name: 'forceDeposit',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getBeaconSpec',
    outputs: [
      { name: '', internalType: 'uint64', type: 'uint64' },
      { name: '', internalType: 'uint64', type: 'uint64' },
      { name: '', internalType: 'uint64', type: 'uint64' },
      { name: '', internalType: 'uint64', type: 'uint64' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getEthPerShare',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getOracle',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_sharesAmount', internalType: 'uint256', type: 'uint256' }],
    name: 'getPooledEthByShares',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_ethAmount', internalType: 'uint256', type: 'uint256' }],
    name: 'getSharesByPooledEth',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'isUncappedMinter',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'lastMintTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'mintCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'mintCooldown',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'guy', internalType: 'address', type: 'address' },
      { name: 'wad', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'nonStandardSetApproval',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'removeUncappedMinter',
    outputs: [],
  },
  { stateMutability: 'nonpayable', type: 'function', inputs: [], name: 'renounceOwnership', outputs: [] },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_epochsPerFrame', internalType: 'uint64', type: 'uint64' },
      { name: '_slotsPerEpoch', internalType: 'uint64', type: 'uint64' },
      { name: '_secondsPerSlot', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setBeaconSpec',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_ePerS', internalType: 'uint256', type: 'uint256' }],
    name: 'setEthPerShare',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newCap', internalType: 'uint256', type: 'uint256' }],
    name: 'setMintCap',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newCooldown', internalType: 'uint256', type: 'uint256' }],
    name: 'setMintCooldown',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'sharesOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'dst', internalType: 'address', type: 'address' },
      { name: 'wad', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'src', internalType: 'address', type: 'address' },
      { name: 'dst', internalType: 'address', type: 'address' },
      { name: 'wad', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_recipient', internalType: 'address', type: 'address' },
      { name: '_sharesAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferShares',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'wad', internalType: 'uint256', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
  },
  { stateMutability: 'payable', type: 'receive' },
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export const stethAddress = {
  11155111: '0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export const stethConfig = { address: stethAddress, abi: stethABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20ABI = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
  },
  { stateMutability: 'view', type: 'function', inputs: [], name: 'decimals', outputs: [{ name: '', type: 'uint8' }] },
  { stateMutability: 'view', type: 'function', inputs: [], name: 'name', outputs: [{ name: '', type: 'string' }] },
  { stateMutability: 'view', type: 'function', inputs: [], name: 'symbol', outputs: [{ name: '', type: 'string' }] },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link flippenZapABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof flippenZapABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>, 'abi' | 'address'> & {
    chainId?: keyof typeof flippenZapAddress
  } = {} as any,
) {
  return useContractRead({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    ...config,
  } as UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"CCR"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapCcr<
  TFunctionName extends 'CCR',
  TSelectData = ReadContractResult<typeof flippenZapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof flippenZapAddress } = {} as any,
) {
  return useContractRead({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'CCR',
    ...config,
  } as UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"MAX_REASONABLE_LEVERAGE"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapMaxReasonableLeverage<
  TFunctionName extends 'MAX_REASONABLE_LEVERAGE',
  TSelectData = ReadContractResult<typeof flippenZapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof flippenZapAddress } = {} as any,
) {
  return useContractRead({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'MAX_REASONABLE_LEVERAGE',
    ...config,
  } as UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"MAX_SLIPPAGE"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapMaxSlippage<
  TFunctionName extends 'MAX_SLIPPAGE',
  TSelectData = ReadContractResult<typeof flippenZapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof flippenZapAddress } = {} as any,
) {
  return useContractRead({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'MAX_SLIPPAGE',
    ...config,
  } as UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"MCR"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapMcr<
  TFunctionName extends 'MCR',
  TSelectData = ReadContractResult<typeof flippenZapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof flippenZapAddress } = {} as any,
) {
  return useContractRead({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'MCR',
    ...config,
  } as UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"MIN_NET_STETH_BALANCE"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapMinNetStethBalance<
  TFunctionName extends 'MIN_NET_STETH_BALANCE',
  TSelectData = ReadContractResult<typeof flippenZapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof flippenZapAddress } = {} as any,
) {
  return useContractRead({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'MIN_NET_STETH_BALANCE',
    ...config,
  } as UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"balancerPoolId"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapBalancerPoolId<
  TFunctionName extends 'balancerPoolId',
  TSelectData = ReadContractResult<typeof flippenZapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof flippenZapAddress } = {} as any,
) {
  return useContractRead({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'balancerPoolId',
    ...config,
  } as UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"balancerVault"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapBalancerVault<
  TFunctionName extends 'balancerVault',
  TSelectData = ReadContractResult<typeof flippenZapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof flippenZapAddress } = {} as any,
) {
  return useContractRead({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'balancerVault',
    ...config,
  } as UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"ebtcBorrowerOperations"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapEbtcBorrowerOperations<
  TFunctionName extends 'ebtcBorrowerOperations',
  TSelectData = ReadContractResult<typeof flippenZapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof flippenZapAddress } = {} as any,
) {
  return useContractRead({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'ebtcBorrowerOperations',
    ...config,
  } as UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"ebtcCdpManager"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapEbtcCdpManager<
  TFunctionName extends 'ebtcCdpManager',
  TSelectData = ReadContractResult<typeof flippenZapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof flippenZapAddress } = {} as any,
) {
  return useContractRead({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'ebtcCdpManager',
    ...config,
  } as UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"ebtcCollToken"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapEbtcCollToken<
  TFunctionName extends 'ebtcCollToken',
  TSelectData = ReadContractResult<typeof flippenZapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof flippenZapAddress } = {} as any,
) {
  return useContractRead({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'ebtcCollToken',
    ...config,
  } as UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"ebtcPriceFeed"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapEbtcPriceFeed<
  TFunctionName extends 'ebtcPriceFeed',
  TSelectData = ReadContractResult<typeof flippenZapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof flippenZapAddress } = {} as any,
) {
  return useContractRead({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'ebtcPriceFeed',
    ...config,
  } as UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"ebtcToken"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapEbtcToken<
  TFunctionName extends 'ebtcToken',
  TSelectData = ReadContractResult<typeof flippenZapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof flippenZapAddress } = {} as any,
) {
  return useContractRead({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'ebtcToken',
    ...config,
  } as UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"owner"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof flippenZapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof flippenZapAddress } = {} as any,
) {
  return useContractRead({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"slippage"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapSlippage<
  TFunctionName extends 'slippage',
  TSelectData = ReadContractResult<typeof flippenZapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof flippenZapAddress } = {} as any,
) {
  return useContractRead({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'slippage',
    ...config,
  } as UseContractReadConfig<typeof flippenZapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link flippenZapABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof flippenZapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof flippenZapABI>['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof flippenZapABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  return useContractWrite<typeof flippenZapABI, TFunctionName, TMode>({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"enterLongEth"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapEnterLongEth<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof flippenZapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof flippenZapABI, 'enterLongEth'>['request']['abi'],
        'enterLongEth',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'enterLongEth' }
    : UseContractWriteConfig<typeof flippenZapABI, 'enterLongEth', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'enterLongEth'
      } = {} as any,
) {
  return useContractWrite<typeof flippenZapABI, 'enterLongEth', TMode>({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'enterLongEth',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"onFlashLoan"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapOnFlashLoan<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof flippenZapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof flippenZapABI, 'onFlashLoan'>['request']['abi'],
        'onFlashLoan',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'onFlashLoan' }
    : UseContractWriteConfig<typeof flippenZapABI, 'onFlashLoan', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'onFlashLoan'
      } = {} as any,
) {
  return useContractWrite<typeof flippenZapABI, 'onFlashLoan', TMode>({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'onFlashLoan',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"renounceOwnership"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapRenounceOwnership<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof flippenZapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof flippenZapABI, 'renounceOwnership'>['request']['abi'],
        'renounceOwnership',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'renounceOwnership' }
    : UseContractWriteConfig<typeof flippenZapABI, 'renounceOwnership', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof flippenZapABI, 'renounceOwnership', TMode>({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"setBalancerPoolID"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapSetBalancerPoolId<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof flippenZapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof flippenZapABI, 'setBalancerPoolID'>['request']['abi'],
        'setBalancerPoolID',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setBalancerPoolID' }
    : UseContractWriteConfig<typeof flippenZapABI, 'setBalancerPoolID', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setBalancerPoolID'
      } = {} as any,
) {
  return useContractWrite<typeof flippenZapABI, 'setBalancerPoolID', TMode>({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'setBalancerPoolID',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"setSlippage"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapSetSlippage<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof flippenZapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof flippenZapABI, 'setSlippage'>['request']['abi'],
        'setSlippage',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setSlippage' }
    : UseContractWriteConfig<typeof flippenZapABI, 'setSlippage', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setSlippage'
      } = {} as any,
) {
  return useContractWrite<typeof flippenZapABI, 'setSlippage', TMode>({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'setSlippage',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"transferOwnership"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapTransferOwnership<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof flippenZapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof flippenZapABI, 'transferOwnership'>['request']['abi'],
        'transferOwnership',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'transferOwnership' }
    : UseContractWriteConfig<typeof flippenZapABI, 'transferOwnership', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof flippenZapABI, 'transferOwnership', TMode>({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link flippenZapABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function usePrepareFlippenZapWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof flippenZapABI, TFunctionName>, 'abi' | 'address'> & {
    chainId?: keyof typeof flippenZapAddress
  } = {} as any,
) {
  return usePrepareContractWrite({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    ...config,
  } as UsePrepareContractWriteConfig<typeof flippenZapABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"enterLongEth"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function usePrepareFlippenZapEnterLongEth(
  config: Omit<
    UsePrepareContractWriteConfig<typeof flippenZapABI, 'enterLongEth'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof flippenZapAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'enterLongEth',
    ...config,
  } as UsePrepareContractWriteConfig<typeof flippenZapABI, 'enterLongEth'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"onFlashLoan"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function usePrepareFlippenZapOnFlashLoan(
  config: Omit<
    UsePrepareContractWriteConfig<typeof flippenZapABI, 'onFlashLoan'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof flippenZapAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'onFlashLoan',
    ...config,
  } as UsePrepareContractWriteConfig<typeof flippenZapABI, 'onFlashLoan'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"renounceOwnership"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function usePrepareFlippenZapRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof flippenZapABI, 'renounceOwnership'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof flippenZapAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof flippenZapABI, 'renounceOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"setBalancerPoolID"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function usePrepareFlippenZapSetBalancerPoolId(
  config: Omit<
    UsePrepareContractWriteConfig<typeof flippenZapABI, 'setBalancerPoolID'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof flippenZapAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'setBalancerPoolID',
    ...config,
  } as UsePrepareContractWriteConfig<typeof flippenZapABI, 'setBalancerPoolID'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"setSlippage"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function usePrepareFlippenZapSetSlippage(
  config: Omit<
    UsePrepareContractWriteConfig<typeof flippenZapABI, 'setSlippage'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof flippenZapAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'setSlippage',
    ...config,
  } as UsePrepareContractWriteConfig<typeof flippenZapABI, 'setSlippage'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link flippenZapABI}__ and `functionName` set to `"transferOwnership"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function usePrepareFlippenZapTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof flippenZapABI, 'transferOwnership'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof flippenZapAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof flippenZapABI, 'transferOwnership'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link flippenZapABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof flippenZapABI, TEventName>, 'abi' | 'address'> & {
    chainId?: keyof typeof flippenZapAddress
  } = {} as any,
) {
  return useContractEvent({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    ...config,
  } as UseContractEventConfig<typeof flippenZapABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link flippenZapABI}__ and `eventName` set to `"OwnershipTransferred"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x74e495b3d3077bac66a6c93f47dfd4c789c907bf)
 */
export function useFlippenZapOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof flippenZapABI, 'OwnershipTransferred'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof flippenZapAddress } = {} as any,
) {
  return useContractEvent({
    abi: flippenZapABI,
    address: flippenZapAddress[11155111],
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<typeof flippenZapABI, 'OwnershipTransferred'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stethABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof stethABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>, 'abi' | 'address'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return useContractRead({ abi: stethABI, address: stethAddress[11155111], ...config } as UseContractReadConfig<
    typeof stethABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"allowance"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethAllowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof stethABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return useContractRead({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"authority"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethAuthority<
  TFunctionName extends 'authority',
  TSelectData = ReadContractResult<typeof stethABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return useContractRead({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'authority',
    ...config,
  } as UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"balanceOf"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof stethABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return useContractRead({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"decimals"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethDecimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof stethABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return useContractRead({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"feeRecipientAddress"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethFeeRecipientAddress<
  TFunctionName extends 'feeRecipientAddress',
  TSelectData = ReadContractResult<typeof stethABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return useContractRead({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'feeRecipientAddress',
    ...config,
  } as UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"getBeaconSpec"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethGetBeaconSpec<
  TFunctionName extends 'getBeaconSpec',
  TSelectData = ReadContractResult<typeof stethABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return useContractRead({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'getBeaconSpec',
    ...config,
  } as UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"getEthPerShare"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethGetEthPerShare<
  TFunctionName extends 'getEthPerShare',
  TSelectData = ReadContractResult<typeof stethABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return useContractRead({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'getEthPerShare',
    ...config,
  } as UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"getOracle"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethGetOracle<
  TFunctionName extends 'getOracle',
  TSelectData = ReadContractResult<typeof stethABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return useContractRead({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'getOracle',
    ...config,
  } as UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"getPooledEthByShares"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethGetPooledEthByShares<
  TFunctionName extends 'getPooledEthByShares',
  TSelectData = ReadContractResult<typeof stethABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return useContractRead({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'getPooledEthByShares',
    ...config,
  } as UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"getSharesByPooledEth"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethGetSharesByPooledEth<
  TFunctionName extends 'getSharesByPooledEth',
  TSelectData = ReadContractResult<typeof stethABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return useContractRead({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'getSharesByPooledEth',
    ...config,
  } as UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"isUncappedMinter"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethIsUncappedMinter<
  TFunctionName extends 'isUncappedMinter',
  TSelectData = ReadContractResult<typeof stethABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return useContractRead({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'isUncappedMinter',
    ...config,
  } as UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"lastMintTime"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethLastMintTime<
  TFunctionName extends 'lastMintTime',
  TSelectData = ReadContractResult<typeof stethABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return useContractRead({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'lastMintTime',
    ...config,
  } as UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"mintCap"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethMintCap<
  TFunctionName extends 'mintCap',
  TSelectData = ReadContractResult<typeof stethABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return useContractRead({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'mintCap',
    ...config,
  } as UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"mintCooldown"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethMintCooldown<
  TFunctionName extends 'mintCooldown',
  TSelectData = ReadContractResult<typeof stethABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return useContractRead({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'mintCooldown',
    ...config,
  } as UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"name"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof stethABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return useContractRead({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"owner"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof stethABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return useContractRead({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"sharesOf"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethSharesOf<
  TFunctionName extends 'sharesOf',
  TSelectData = ReadContractResult<typeof stethABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return useContractRead({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'sharesOf',
    ...config,
  } as UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"symbol"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof stethABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return useContractRead({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"totalSupply"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethTotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof stethABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return useContractRead({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof stethABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stethABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stethAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<PrepareWriteContractResult<typeof stethABI>['request']['abi'], TFunctionName, TMode> & {
        address?: Address
        chainId?: TChainId
      }
    : UseContractWriteConfig<typeof stethABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  return useContractWrite<typeof stethABI, TFunctionName, TMode>({
    abi: stethABI,
    address: stethAddress[11155111],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"addUncappedMinter"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethAddUncappedMinter<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stethAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof stethABI, 'addUncappedMinter'>['request']['abi'],
        'addUncappedMinter',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'addUncappedMinter' }
    : UseContractWriteConfig<typeof stethABI, 'addUncappedMinter', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'addUncappedMinter'
      } = {} as any,
) {
  return useContractWrite<typeof stethABI, 'addUncappedMinter', TMode>({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'addUncappedMinter',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"approve"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethApprove<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stethAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof stethABI, 'approve'>['request']['abi'],
        'approve',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'approve' }
    : UseContractWriteConfig<typeof stethABI, 'approve', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof stethABI, 'approve', TMode>({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"decreaseAllowance"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethDecreaseAllowance<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stethAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof stethABI, 'decreaseAllowance'>['request']['abi'],
        'decreaseAllowance',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'decreaseAllowance' }
    : UseContractWriteConfig<typeof stethABI, 'decreaseAllowance', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'decreaseAllowance'
      } = {} as any,
) {
  return useContractWrite<typeof stethABI, 'decreaseAllowance', TMode>({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'decreaseAllowance',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"deposit"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethDeposit<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stethAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof stethABI, 'deposit'>['request']['abi'],
        'deposit',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'deposit' }
    : UseContractWriteConfig<typeof stethABI, 'deposit', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'deposit'
      } = {} as any,
) {
  return useContractWrite<typeof stethABI, 'deposit', TMode>({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'deposit',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"forceDeposit"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethForceDeposit<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stethAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof stethABI, 'forceDeposit'>['request']['abi'],
        'forceDeposit',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'forceDeposit' }
    : UseContractWriteConfig<typeof stethABI, 'forceDeposit', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'forceDeposit'
      } = {} as any,
) {
  return useContractWrite<typeof stethABI, 'forceDeposit', TMode>({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'forceDeposit',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"increaseAllowance"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethIncreaseAllowance<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stethAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof stethABI, 'increaseAllowance'>['request']['abi'],
        'increaseAllowance',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'increaseAllowance' }
    : UseContractWriteConfig<typeof stethABI, 'increaseAllowance', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'increaseAllowance'
      } = {} as any,
) {
  return useContractWrite<typeof stethABI, 'increaseAllowance', TMode>({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'increaseAllowance',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"nonStandardSetApproval"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethNonStandardSetApproval<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stethAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof stethABI, 'nonStandardSetApproval'>['request']['abi'],
        'nonStandardSetApproval',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'nonStandardSetApproval' }
    : UseContractWriteConfig<typeof stethABI, 'nonStandardSetApproval', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'nonStandardSetApproval'
      } = {} as any,
) {
  return useContractWrite<typeof stethABI, 'nonStandardSetApproval', TMode>({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'nonStandardSetApproval',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"removeUncappedMinter"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethRemoveUncappedMinter<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stethAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof stethABI, 'removeUncappedMinter'>['request']['abi'],
        'removeUncappedMinter',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'removeUncappedMinter' }
    : UseContractWriteConfig<typeof stethABI, 'removeUncappedMinter', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'removeUncappedMinter'
      } = {} as any,
) {
  return useContractWrite<typeof stethABI, 'removeUncappedMinter', TMode>({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'removeUncappedMinter',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"renounceOwnership"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethRenounceOwnership<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stethAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof stethABI, 'renounceOwnership'>['request']['abi'],
        'renounceOwnership',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'renounceOwnership' }
    : UseContractWriteConfig<typeof stethABI, 'renounceOwnership', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof stethABI, 'renounceOwnership', TMode>({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"setBeaconSpec"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethSetBeaconSpec<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stethAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof stethABI, 'setBeaconSpec'>['request']['abi'],
        'setBeaconSpec',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setBeaconSpec' }
    : UseContractWriteConfig<typeof stethABI, 'setBeaconSpec', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setBeaconSpec'
      } = {} as any,
) {
  return useContractWrite<typeof stethABI, 'setBeaconSpec', TMode>({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'setBeaconSpec',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"setEthPerShare"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethSetEthPerShare<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stethAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof stethABI, 'setEthPerShare'>['request']['abi'],
        'setEthPerShare',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setEthPerShare' }
    : UseContractWriteConfig<typeof stethABI, 'setEthPerShare', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setEthPerShare'
      } = {} as any,
) {
  return useContractWrite<typeof stethABI, 'setEthPerShare', TMode>({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'setEthPerShare',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"setMintCap"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethSetMintCap<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stethAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof stethABI, 'setMintCap'>['request']['abi'],
        'setMintCap',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setMintCap' }
    : UseContractWriteConfig<typeof stethABI, 'setMintCap', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setMintCap'
      } = {} as any,
) {
  return useContractWrite<typeof stethABI, 'setMintCap', TMode>({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'setMintCap',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"setMintCooldown"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethSetMintCooldown<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stethAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof stethABI, 'setMintCooldown'>['request']['abi'],
        'setMintCooldown',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setMintCooldown' }
    : UseContractWriteConfig<typeof stethABI, 'setMintCooldown', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setMintCooldown'
      } = {} as any,
) {
  return useContractWrite<typeof stethABI, 'setMintCooldown', TMode>({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'setMintCooldown',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"transfer"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethTransfer<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stethAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof stethABI, 'transfer'>['request']['abi'],
        'transfer',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'transfer' }
    : UseContractWriteConfig<typeof stethABI, 'transfer', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof stethABI, 'transfer', TMode>({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"transferFrom"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethTransferFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stethAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof stethABI, 'transferFrom'>['request']['abi'],
        'transferFrom',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof stethABI, 'transferFrom', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof stethABI, 'transferFrom', TMode>({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"transferOwnership"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethTransferOwnership<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stethAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof stethABI, 'transferOwnership'>['request']['abi'],
        'transferOwnership',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'transferOwnership' }
    : UseContractWriteConfig<typeof stethABI, 'transferOwnership', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof stethABI, 'transferOwnership', TMode>({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"transferShares"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethTransferShares<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stethAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof stethABI, 'transferShares'>['request']['abi'],
        'transferShares',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'transferShares' }
    : UseContractWriteConfig<typeof stethABI, 'transferShares', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transferShares'
      } = {} as any,
) {
  return useContractWrite<typeof stethABI, 'transferShares', TMode>({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'transferShares',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"withdraw"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethWithdraw<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stethAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof stethABI, 'withdraw'>['request']['abi'],
        'withdraw',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'withdraw' }
    : UseContractWriteConfig<typeof stethABI, 'withdraw', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'withdraw'
      } = {} as any,
) {
  return useContractWrite<typeof stethABI, 'withdraw', TMode>({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'withdraw',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stethABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function usePrepareStethWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof stethABI, TFunctionName>, 'abi' | 'address'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return usePrepareContractWrite({
    abi: stethABI,
    address: stethAddress[11155111],
    ...config,
  } as UsePrepareContractWriteConfig<typeof stethABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"addUncappedMinter"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function usePrepareStethAddUncappedMinter(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stethABI, 'addUncappedMinter'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'addUncappedMinter',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stethABI, 'addUncappedMinter'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"approve"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function usePrepareStethApprove(
  config: Omit<UsePrepareContractWriteConfig<typeof stethABI, 'approve'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return usePrepareContractWrite({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stethABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"decreaseAllowance"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function usePrepareStethDecreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stethABI, 'decreaseAllowance'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'decreaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stethABI, 'decreaseAllowance'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"deposit"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function usePrepareStethDeposit(
  config: Omit<UsePrepareContractWriteConfig<typeof stethABI, 'deposit'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return usePrepareContractWrite({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'deposit',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stethABI, 'deposit'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"forceDeposit"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function usePrepareStethForceDeposit(
  config: Omit<UsePrepareContractWriteConfig<typeof stethABI, 'forceDeposit'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return usePrepareContractWrite({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'forceDeposit',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stethABI, 'forceDeposit'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"increaseAllowance"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function usePrepareStethIncreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stethABI, 'increaseAllowance'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'increaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stethABI, 'increaseAllowance'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"nonStandardSetApproval"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function usePrepareStethNonStandardSetApproval(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stethABI, 'nonStandardSetApproval'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'nonStandardSetApproval',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stethABI, 'nonStandardSetApproval'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"removeUncappedMinter"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function usePrepareStethRemoveUncappedMinter(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stethABI, 'removeUncappedMinter'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'removeUncappedMinter',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stethABI, 'removeUncappedMinter'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"renounceOwnership"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function usePrepareStethRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stethABI, 'renounceOwnership'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stethABI, 'renounceOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"setBeaconSpec"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function usePrepareStethSetBeaconSpec(
  config: Omit<UsePrepareContractWriteConfig<typeof stethABI, 'setBeaconSpec'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return usePrepareContractWrite({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'setBeaconSpec',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stethABI, 'setBeaconSpec'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"setEthPerShare"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function usePrepareStethSetEthPerShare(
  config: Omit<UsePrepareContractWriteConfig<typeof stethABI, 'setEthPerShare'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return usePrepareContractWrite({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'setEthPerShare',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stethABI, 'setEthPerShare'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"setMintCap"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function usePrepareStethSetMintCap(
  config: Omit<UsePrepareContractWriteConfig<typeof stethABI, 'setMintCap'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return usePrepareContractWrite({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'setMintCap',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stethABI, 'setMintCap'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"setMintCooldown"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function usePrepareStethSetMintCooldown(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stethABI, 'setMintCooldown'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'setMintCooldown',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stethABI, 'setMintCooldown'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"transfer"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function usePrepareStethTransfer(
  config: Omit<UsePrepareContractWriteConfig<typeof stethABI, 'transfer'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return usePrepareContractWrite({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stethABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"transferFrom"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function usePrepareStethTransferFrom(
  config: Omit<UsePrepareContractWriteConfig<typeof stethABI, 'transferFrom'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return usePrepareContractWrite({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stethABI, 'transferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"transferOwnership"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function usePrepareStethTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stethABI, 'transferOwnership'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stethAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stethABI, 'transferOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"transferShares"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function usePrepareStethTransferShares(
  config: Omit<UsePrepareContractWriteConfig<typeof stethABI, 'transferShares'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return usePrepareContractWrite({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'transferShares',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stethABI, 'transferShares'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stethABI}__ and `functionName` set to `"withdraw"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function usePrepareStethWithdraw(
  config: Omit<UsePrepareContractWriteConfig<typeof stethABI, 'withdraw'>, 'abi' | 'address' | 'functionName'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return usePrepareContractWrite({
    abi: stethABI,
    address: stethAddress[11155111],
    functionName: 'withdraw',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stethABI, 'withdraw'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stethABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof stethABI, TEventName>, 'abi' | 'address'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return useContractEvent({ abi: stethABI, address: stethAddress[11155111], ...config } as UseContractEventConfig<
    typeof stethABI,
    TEventName
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stethABI}__ and `eventName` set to `"Approval"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethApprovalEvent(
  config: Omit<UseContractEventConfig<typeof stethABI, 'Approval'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return useContractEvent({
    abi: stethABI,
    address: stethAddress[11155111],
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof stethABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stethABI}__ and `eventName` set to `"Deposit"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethDepositEvent(
  config: Omit<UseContractEventConfig<typeof stethABI, 'Deposit'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return useContractEvent({
    abi: stethABI,
    address: stethAddress[11155111],
    eventName: 'Deposit',
    ...config,
  } as UseContractEventConfig<typeof stethABI, 'Deposit'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stethABI}__ and `eventName` set to `"MintCapSet"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethMintCapSetEvent(
  config: Omit<UseContractEventConfig<typeof stethABI, 'MintCapSet'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return useContractEvent({
    abi: stethABI,
    address: stethAddress[11155111],
    eventName: 'MintCapSet',
    ...config,
  } as UseContractEventConfig<typeof stethABI, 'MintCapSet'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stethABI}__ and `eventName` set to `"MintCooldownSet"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethMintCooldownSetEvent(
  config: Omit<UseContractEventConfig<typeof stethABI, 'MintCooldownSet'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return useContractEvent({
    abi: stethABI,
    address: stethAddress[11155111],
    eventName: 'MintCooldownSet',
    ...config,
  } as UseContractEventConfig<typeof stethABI, 'MintCooldownSet'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stethABI}__ and `eventName` set to `"OwnershipTransferred"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethOwnershipTransferredEvent(
  config: Omit<UseContractEventConfig<typeof stethABI, 'OwnershipTransferred'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return useContractEvent({
    abi: stethABI,
    address: stethAddress[11155111],
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<typeof stethABI, 'OwnershipTransferred'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stethABI}__ and `eventName` set to `"Transfer"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethTransferEvent(
  config: Omit<UseContractEventConfig<typeof stethABI, 'Transfer'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return useContractEvent({
    abi: stethABI,
    address: stethAddress[11155111],
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof stethABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stethABI}__ and `eventName` set to `"TransferShares"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethTransferSharesEvent(
  config: Omit<UseContractEventConfig<typeof stethABI, 'TransferShares'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return useContractEvent({
    abi: stethABI,
    address: stethAddress[11155111],
    eventName: 'TransferShares',
    ...config,
  } as UseContractEventConfig<typeof stethABI, 'TransferShares'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stethABI}__ and `eventName` set to `"UncappedMinterAdded"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethUncappedMinterAddedEvent(
  config: Omit<UseContractEventConfig<typeof stethABI, 'UncappedMinterAdded'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return useContractEvent({
    abi: stethABI,
    address: stethAddress[11155111],
    eventName: 'UncappedMinterAdded',
    ...config,
  } as UseContractEventConfig<typeof stethABI, 'UncappedMinterAdded'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stethABI}__ and `eventName` set to `"UncappedMinterRemoved"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethUncappedMinterRemovedEvent(
  config: Omit<UseContractEventConfig<typeof stethABI, 'UncappedMinterRemoved'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return useContractEvent({
    abi: stethABI,
    address: stethAddress[11155111],
    eventName: 'UncappedMinterRemoved',
    ...config,
  } as UseContractEventConfig<typeof stethABI, 'UncappedMinterRemoved'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stethABI}__ and `eventName` set to `"Withdrawal"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015)
 */
export function useStethWithdrawalEvent(
  config: Omit<UseContractEventConfig<typeof stethABI, 'Withdrawal'>, 'abi' | 'address' | 'eventName'> & {
    chainId?: keyof typeof stethAddress
  } = {} as any,
) {
  return useContractEvent({
    abi: stethABI,
    address: stethAddress[11155111],
    eventName: 'Withdrawal',
    ...config,
  } as UseContractEventConfig<typeof stethABI, 'Withdrawal'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: erc20ABI, ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"allowance"`.
 */
export function useErc20Allowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: 'allowance', ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc20BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: 'balanceOf', ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decimals"`.
 */
export function useErc20Decimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: 'decimals', ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"name"`.
 */
export function useErc20Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: 'name', ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc20Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: 'symbol', ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useErc20TotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: 'totalSupply', ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Write<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc20ABI>['request']['abi'], TFunctionName, TMode>
    : UseContractWriteConfig<typeof erc20ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, TFunctionName, TMode>({ abi: erc20ABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc20Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc20ABI, 'approve'>['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof erc20ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'approve', TMode>({
    abi: erc20ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useErc20Transfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc20ABI, 'transfer'>['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof erc20ABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'transfer', TMode>({
    abi: erc20ABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc20TransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc20ABI, 'transferFrom'>['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof erc20ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'transferFrom', TMode>({
    abi: erc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function usePrepareErc20Write<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>, 'abi'> = {} as any,
) {
  return usePrepareContractWrite({ abi: erc20ABI, ...config } as UsePrepareContractWriteConfig<
    typeof erc20ABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc20Approve(
  config: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, 'approve'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({ abi: erc20ABI, functionName: 'approve', ...config } as UsePrepareContractWriteConfig<
    typeof erc20ABI,
    'approve'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareErc20Transfer(
  config: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, 'transfer'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc20TransferFrom(
  config: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, 'transferFrom'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Event<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof erc20ABI, TEventName>, 'abi'> = {} as any,
) {
  return useContractEvent({ abi: erc20ABI, ...config } as UseContractEventConfig<typeof erc20ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc20ApprovalEvent(
  config: Omit<UseContractEventConfig<typeof erc20ABI, 'Approval'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: erc20ABI, eventName: 'Approval', ...config } as UseContractEventConfig<
    typeof erc20ABI,
    'Approval'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc20TransferEvent(
  config: Omit<UseContractEventConfig<typeof erc20ABI, 'Transfer'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: erc20ABI, eventName: 'Transfer', ...config } as UseContractEventConfig<
    typeof erc20ABI,
    'Transfer'
  >)
}
