import type { Metadata } from 'next'
import Breadcrumb from '@/components/breadcrumb'
import Invite from '@/views/Invite'

const item = {
  title: 'Invite Codes',
  breadcrumb: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Invite Codes',
    },
  ],
}

export const metadata: Metadata = {
  title: 'eBTC | dapp | Invite Codes',
}

export default function page(): JSX.Element {
  return (
    <>
      <Breadcrumb data={item} />
      <Invite />
    </>
  )
}
