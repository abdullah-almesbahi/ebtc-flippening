import type { Metadata } from 'next'
import Breadcrumb from '@/components/breadcrumb'
import Shares from '@/views/Shares'
import FilterAndSearch from '@/views/Shares/components/FilterAndSearch'

const item = {
  title: 'Shares',
  breadcrumb: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Shares',
    },
  ],
}

export const metadata: Metadata = {
  title: 'eBTC | dapp  | Shares',
}

export default function page(): JSX.Element {
  return (
    <>
      <Breadcrumb data={item} />
      <FilterAndSearch filter="global" />
      <Shares />
    </>
  )
}
