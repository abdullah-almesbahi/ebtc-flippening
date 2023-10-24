import type { Metadata } from 'next'
import Dashboard from '@/views/Dashbaord'

export const metadata: Metadata = {
  title: 'eBTC | dapp ',
}

export default function Page(): JSX.Element {
  return <Dashboard />
}
