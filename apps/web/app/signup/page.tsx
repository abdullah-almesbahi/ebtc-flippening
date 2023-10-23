'use client'
import { SessionProvider } from 'next-auth/react'
import Twitter from '@/views/Auth/components/Twitter'
import Breadcrumb from '@/components/breadcrumb'

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

export default function Signup(): JSX.Element {
  return (
    <SessionProvider>
      <Breadcrumb data={item} />
      <Twitter />
    </SessionProvider>
  )
}
