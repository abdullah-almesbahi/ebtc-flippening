'use client'
import { useAccount } from 'wagmi'
import useMatchMedia from '@/hooks/useMatchMedia'

export default function SignUp(): JSX.Element {
  const { status } = useAccount()

  // checking media query
  const isMatch = useMatchMedia('(max-width: 991px)')

  if (status === 'connected') {
    return <></>
  }

  return (
    <>
      {isMatch !== null ? (
        <div className="row">
          <a className=" fw-bold me-5" data-bs-target="#popup_signup" data-bs-toggle="modal" href="#">
            Sign up
          </a>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
