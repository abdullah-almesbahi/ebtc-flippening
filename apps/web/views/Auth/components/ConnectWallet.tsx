import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'

function ConnectWallet2({ onNext }) {
  const { status } = useAccount()
  const { open } = useWeb3Modal()

  let walletStatus

  if (status === 'connecting') walletStatus = 'Synchronisation with MetaMask ongoing...'

  if (status === 'disconnected') {
    walletStatus = (
      <button
        className="btn btn-primary"
        data-bs-dismiss="modal"
        onClick={() => {
          return open()
        }}
        type="button"
      >
        Connect to MetaMask
      </button>
    )
  }

  if (status === 'connecting') {
    walletStatus = 'Connecting...'
  }

  if (status === 'connected') {
    walletStatus = 'Wallet Connected'
  }

  return <div>{walletStatus}</div>
}

export default ConnectWallet2
