'use client'
import { useState } from 'react'
import SignupWithTwitter from './components/SignupWithTwitter'
import EnterInviteCode from './components/EnterInviteCode'
import ConnectWallet from './components/ConnectWallet'

function SignupWizard() {
  const [step, setStep] = useState(1)

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  return (
    <div className="container mt-5">
      {step === 1 && <SignupWithTwitter onNext={nextStep} />}
      {step === 2 && <EnterInviteCode onNext={nextStep} />}
      {step === 3 && <ConnectWallet onNext={nextStep} />}

      <div className="mt-4">
        <p>Step {step} of 3</p>
      </div>
    </div>
  )
}

export default SignupWizard
