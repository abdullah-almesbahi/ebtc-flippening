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
    <section className="tf-login tf-section">
      <div className="ibthemes-container">
        <div className="row">
          <div className="col-12">
            <h2 className="tf-title-heading ct style-1">Signup To Flippening dApp</h2>
            {Boolean(props.error) && (
              <p className="alert alert-danger" role="alert">
                Authentication Failed
              </p>
            )}
            <div className="flat-form box-login-email">
              <div className="form-inner">
                <button
                  className="button"
                  onClick={() => {
                    onSubmit()
                  }}
                >
                  Sign up with Twitter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
