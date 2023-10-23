'use client'
import { MetaMaskProvider } from 'metamask-react'

export function Providers({ children }: { children: React.ReactNode }) {
  return <MetaMaskProvider>{children}</MetaMaskProvider>
}
