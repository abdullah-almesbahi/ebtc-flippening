import type { Metadata } from 'next'
import Breadcrumb from '@/components/breadcrumb'
import SignupWizard from '@/views/Auth'

const item = {
  title: 'Sign Up',
  breadcrumb: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Page',
      path: '/signup',
    },
    {
      name: 'Sign Up',
    },
  ],
}

export const metadata: Metadata = {
  title: 'Axies | NFT Marketplace React/Next Js Template | Sign Up',
}

export default function page(): JSX.Element {
  return (
    <>
      <Breadcrumb data={item} />
      <SignupWizard />
    </>
  )
}
