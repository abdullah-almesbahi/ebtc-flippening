import { useMetaMask } from 'metamask-react'

function ConnectWallet2({ onNext }) {
  const { status, connect } = useMetaMask()

  let walletStatus

  if (status === 'initializing') walletStatus = 'Synchronisation with MetaMask ongoing...'

  if (status === 'unavailable') {
    walletStatus = 'MetaMask not available'
  }

  if (status === 'notConnected') {
    walletStatus = (
      <button className="btn btn-primary" onClick={connect}>
        Connect to MetaMask
      </button>
    )
  }

  if (status === 'connecting') {
    walletStatus = 'Connecting...'
  }

  if (status === 'connected') {
    walletStatus = 'MetaMask Connected'
  }

  return <div>{walletStatus}</div>
}

export default ConnectWallet2
