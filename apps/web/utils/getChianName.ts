import type { Chain } from 'wagmi'

export function chainName(chain: Chain | undefined) {
  switch (chain?.name) {
    case 'Ethereum':
      return 'Ethereum'
    case 'Sepolia':
      return 'Sepolia'
    default:
      return 'Ethereum'
  }
}
