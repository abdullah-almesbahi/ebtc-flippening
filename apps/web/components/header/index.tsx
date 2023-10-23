'use client'
import Link from 'next/link'
import Image from 'next/image'
import WalletConnectButton from '../button/WalletConnectButton'
import Navigation from './Navigation'
import SignUp from './SignUp'
import AdminBar from './AdminBar'
import useStickyMenu from '@/hooks/useStickyMenu'

export default function Header(): JSX.Element {
  // sticky menu
  const isSticky1 = useStickyMenu(200)
  const isSticky2 = useStickyMenu(250)

  const test1 = `header_1 js-header style ${isSticky1 ? 'is-fixed' : ''} ${isSticky2 ? 'is-small' : ''}`

  return (
    <header className={test1} id="header_main">
      <div className="ibthemes-container">
        <div className="row">
          <div className="col-md-12">
            <div id="site-header-inner">
              <div className="wrap-box flex">
                <div className="clearfix" id="site-logo">
                  <div id="site-logo-inner">
                    <Link className="main-logo" href="/" rel="home">
                      <Image
                        alt="nft-gaming"
                        height={56}
                        id="logo_header"
                        src="/assets/images/logo/logo_dark.png"
                        width={133}
                      />
                    </Link>
                  </div>
                </div>
                <div aria-controls="menu" className="mobile-button " data-bs-target="#menu" data-bs-toggle="offcanvas">
                  <span />
                </div>

                <Navigation />
                <div className="flat-search-btn flex">
                  <SignUp />
                  {/* wallet */}
                  <WalletConnectButton />

                  <AdminBar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
