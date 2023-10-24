'use client'
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

interface SignupProps {
  searchParams?: Record<'callbackUrl' | 'error', string>
}

export default function Signup(props: SignupProps): JSX.Element {
  // <Login

  //     />
  return (
    <>
      <Breadcrumb data={item} />
      <Twitter callbackUrl={props.searchParams?.callbackUrl} error={props.searchParams?.error} />
    </>
  )
}
