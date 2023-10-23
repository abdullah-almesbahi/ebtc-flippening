'use client'
import { signIn, useSession } from 'next-auth/react'

export default function Twitter(): JSX.Element {
  const { data: session, status } = useSession()
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          signIn()
        }}
      >
        Sign up with Twitter
      </button>
    </div>
  )
}
