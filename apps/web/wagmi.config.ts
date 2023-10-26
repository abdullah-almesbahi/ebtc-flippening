import { defineConfig } from '@wagmi/cli'
import { etherscan, react } from '@wagmi/cli/plugins'
import { erc20ABI } from 'wagmi'
import { sepolia } from 'wagmi/chains'

if (!process.env.ETHERSCAN_API_KEY) throw new Error('Missing ETHERSCAN_API_KEY env variable')

export default defineConfig({
  out: 'utils/generated.ts',
  contracts: [
    {
      name: 'erc20',
      abi: erc20ABI,
    },
  ],
  plugins: [
    etherscan({
      apiKey: process.env.ETHERSCAN_API_KEY!,
      // chainId: mainnet.id,
      chainId: sepolia.id,
      contracts: [
        {
          name: 'FlippenZap',
          address: {
            [sepolia.id]: '0x74e495b3d3077bac66a6c93f47dfd4c789c907bf',
          },
        },
        // {
        //   name: 'BorrowerOperations',
        //   address: {
        //     [sepolia.id]: '0x606bC21c399cBBA0c0d427047cDB2b50B1E05087',
        //   },
        // },
        {
          name: 'Steth',
          // name: 'CollateralTokenTester',
          address: {
            [sepolia.id]: '0x97BA9AA7B7DC74f7a74864A62c4fF93b2b22f015',
          },
        },
      ],
    }),
    react(),
  ],
})
