export const rewardTokenSymbol = 'fiBTC'

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

export const contractAddress: Record<string, `0x${string}`> = {
  zap: '0x74e495b3d3077bac66a6c93f47dfd4c789c907bf',
  borrowerOperations: '0x606bC21c399cBBA0c0d427047cDB2b50B1E05087',
  steth: '0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015',
  usdc: '0x8267cF9254734C6Eb452a7bb9AAF97B392258b21',
}
