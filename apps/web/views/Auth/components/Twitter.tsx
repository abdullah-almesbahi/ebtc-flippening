'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface TwitterProps {
  className?: string
  callbackUrl?: string
  error?: string
}

export default function Twitter(props: TwitterProps): JSX.Element {
  const { data: session, status } = useSession()
  const router = useRouter()

  const onSubmit = async () => {
    const res = await signIn('twitter')

    if (!res?.error) {
      router.push(props.callbackUrl ?? 'http://localhost:3000')
    }
  }

  return (
    <div>
      {Boolean(props.error) && <p className="bg-red-100 text-red-600 text-center p-2">Authentication Failed</p>}
      <button
        className="btn btn-primary"
        onClick={() => {
          onSubmit()
        }}
        type="button"
      >
        Sign up with Twitter
      </button>
    </div>
  )
}
