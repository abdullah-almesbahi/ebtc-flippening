export const rewardTokenSymbol = 'fiBTC'
console.log('process.env', process.env)
interface NavigationType {
  id: number
  name: string
  path: string
  dropdown?: {
    id: number
    name: string
    path?: string | undefined
    dropdown?: {
      id: number
      name: string
      path: string
    }[]
  }[]
}

if (!process.env.NEXT_PUBLIC_RPC_URL) {
  throw new Error('NEXT_PUBLIC_RPC_URL env variable is required')
}

export const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL

export const navigation: NavigationType[] = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'Leaderboard',
    path: '/leaderboard',
  },
  {
    id: 3,
    name: 'Shares',
    path: '/shares',
  },
]

export const contractAddress: Record<string, Record<string, `0x${string}`>> = {
  Sepolia: {
    zap: '0x74e495b3d3077bac66a6c93f47dfd4c789c907bf',
    borrowerOperations: '0x606bC21c399cBBA0c0d427047cDB2b50B1E05087',
    steth: '0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015',
    usdc: '0x8267cF9254734C6Eb452a7bb9AAF97B392258b21',
    ebtc: '0x2459a79d406256030d339379592ae2ff639ba324',
    vault: '0xba12222222228d8ba445958a75a0704d566bf2c8',
  },
  Ethereum: {
    zap: '0x74e495b3d3077bac66a6c93f47dfd4c789c907bf',
    borrowerOperations: '0x606bC21c399cBBA0c0d427047cDB2b50B1E05087',
    steth: '0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015',
    usdc: '0x8267cF9254734C6Eb452a7bb9AAF97B392258b21',
    ebtc: '0x2459a79d406256030d339379592ae2ff639ba324',
    vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
  },
}

export const poolIds = {
  Sepolia: {
    steth_ebtc: '0x7b6febae7a97189d4aeca25a2c658a11ef77d4ef00020000000000000000003a',
  },
  Ethereum: {
    steth_ebtc: '0x7b6febae7a97189d4aeca25a2c658a11ef77d4ef00020000000000000000003a',
  },
}
