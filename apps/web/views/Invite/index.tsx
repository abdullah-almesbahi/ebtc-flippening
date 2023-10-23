'use client'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { inviteCode } from '@/data/inviteCode'

function Invite() {
  const [copiedCode, setCopiedCode] = useState(null)

  const handleCopy = (code) => {
    setCopiedCode(code)
  }

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Invite Codes</h2>
      <ul className="list-group">
        {inviteCode.map((item, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            <span className={`${item.isUsed ? 'text-decoration-line-through' : ''} fw-bold`}>{item.code}</span>
            <div>
              {!item.isUsed ? (
                <>
                  <CopyToClipboard
                    onCopy={() => {
                      handleCopy(item.code)
                    }}
                    text={item.code}
                  >
                    <button className="btn" type="button">
                      <i className="fa fa-copy" />
                    </button>
                  </CopyToClipboard>
                  {copiedCode === item.code && <span style={{ marginLeft: '10px' }}>Copied!</span>}
                </>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
      {copiedCode ? <div className="alert alert-success mt-3">Code '{copiedCode}' copied to clipboard!</div> : null}
    </div>
  )
}

export default Invite
