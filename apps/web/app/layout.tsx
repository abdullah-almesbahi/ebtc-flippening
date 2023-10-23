'use client'
import { Rubik, Urbanist } from 'next/font/google'
import { Providers } from './providers'
import Header from '@/components/header'
import Footer from '@/components/footer'
import BackToTop from '@/components/button/BackToTop'
import '../public/assets/css/style.css'
import MobileNavigation from '@/components/header/MobileNavigation'
import SignupModal from '@/views/Auth/SignupModal'
import BuyShareModal from '@/components/BuyShareModal'
import SellShareModal from '@/components/SellShareModal'

if (typeof window !== 'undefined') {
  import('bootstrap')
}

// rubic font
const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--rubik-font',
})

// urbanist font
const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--urbanist-font',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="dark is_dark" lang="en">
      <body className={`body  ${rubik.className} ${urbanist.className}`}>
        <Providers>
          <div id="wrapper">
            <div className="clearfix" id="page">
              <Header />
              {/* mobile sidebar navigation */}
              <MobileNavigation />
              {children}
              <Footer />
            </div>
          </div>
          <BackToTop />
          <SignupModal />
          <BuyShareModal />
          <SellShareModal />
        </Providers>
      </body>
    </html>
  )
}
