import type { Metadata } from 'next'
import Breadcrumb from '@/components/breadcrumb'
import Portofolio from '@/views/Portfolio'

const item = {
  title: 'Portofolio',
  breadcrumb: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Leaderboard',
      path: '/leaderboard',
    },
    {
      name: 'Portofolio',
    },
  ],
}

export const metadata: Metadata = {
  title: 'eBTC | dapp  | Portofolio',
}

export default function page({ params }: any): JSX.Element {
  const { address } = params
  return (
    <>
      <Breadcrumb data={item} />
      <Portofolio address={address} />
    </>
  )
}
