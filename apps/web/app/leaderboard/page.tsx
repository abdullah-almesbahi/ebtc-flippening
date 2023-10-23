import type { Metadata } from 'next'
import FilterAndSearch from '../../components/block/FilterAndSearch'
import Breadcrumb from '@/components/breadcrumb'
import Leaderboard from '@/views/Leaderboard'

const item = {
  title: 'Leaderboard',
  breadcrumb: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Leaderboard',
    },
  ],
}

export const metadata: Metadata = {
  title: 'eBTC | dapp | Leaderboard',
}

export default function page(): JSX.Element {
  return (
    <>
      <Breadcrumb data={item} />
      <FilterAndSearch />
      <Leaderboard />
    </>
  )
}
