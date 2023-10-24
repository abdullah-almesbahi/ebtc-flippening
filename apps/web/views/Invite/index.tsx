'use client'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useReferralDataQuery } from '@/server/graphql/gen/graphql-types'

function Invite() {
  const { data } = useReferralDataQuery({
    variables: {
      userId: '0x0',
    },
  })
  const [copiedCode, setCopiedCode] = useState(null)

  const handleCopy = (code) => {
    setCopiedCode(code)
  }

  return (
    <div className="tf-section">
      <div className="ibthemes-container">
        <ul className="list-group">
          {data
            ? data.referrals.map((item, index) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                  <span className={`${item.used ? 'text-decoration-line-through' : ''} fw-bold`}>
                    {item.referralCode}
                  </span>
                  <div>
                    {!item.used ? (
                      <>
                        <CopyToClipboard
                          onCopy={() => {
                            handleCopy(item.referralCode)
                          }}
                          text={item.referralCode}
                        >
                          <button className="btn" type="button">
                            <i className="fa fa-copy" />
                          </button>
                        </CopyToClipboard>
                        {copiedCode === item.referralCode && <span style={{ marginLeft: '10px' }}>Copied!</span>}
                      </>
                    ) : null}
                  </div>
                </li>
              ))
            : null}
        </ul>
        {copiedCode ? <div className="alert alert-success mt-3">Code '{copiedCode}' copied to clipboard!</div> : null}
      </div>
    </div>
  )
}

export default Invite
