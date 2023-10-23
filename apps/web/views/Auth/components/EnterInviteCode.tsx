import { useState } from 'react'

function EnterInviteCode({ onNext }) {
  const [inviteCode, setInviteCode] = useState('')

  const handleSubmit = () => {
    // TODO: Validate invite code
    onNext()
  }

  return (
    <div>
      <input
        className="form-control"
        onChange={(e) => {
          setInviteCode(e.target.value)
        }}
        placeholder="Enter Invite Code"
        type="text"
        value={inviteCode}
      />
      <button className="btn btn-primary mt-2" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}

export default EnterInviteCode
