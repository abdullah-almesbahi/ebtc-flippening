'use client'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { SessionProvider } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { WagmiConfig } from 'wagmi'
import { sepolia, mainnet } from 'wagmi/chains'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ToastListener, ToastsProvider } from '@/contexts/ToastsContext'

// 1. Get projectId
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || ''

// 2. Create wagmiConfig
const metadata = {
  name: 'Next Starter Template',
  description: 'A Next.js starter template with Web3Modal v3 + Wagmi',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
}

const chains = [sepolia, mainnet]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

export const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
})

export function Providers({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])
  return (
    <>
      {ready ? (
        <WagmiConfig config={wagmiConfig}>
          <ApolloProvider client={client}>
            <ToastsProvider>
              <>
                <SessionProvider>{children}</SessionProvider>
                <ToastListener />
              </>
            </ToastsProvider>
          </ApolloProvider>
        </WagmiConfig>
      ) : null}
    </>
  )
}
