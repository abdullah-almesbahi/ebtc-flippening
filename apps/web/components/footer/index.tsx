import Image from 'next/image'
import Link from 'next/link'
import FooterItems from './FooterItems'
import Social from './Social'
import SubscribeForm from './SubscribeForm'

export default function Footer() {
  const data = { id: 1, avatar: 'avatar.png', name: 'John Doe', eth: 5 }

  return (
    <footer className="footer-light-style clearfix" id="footer">
      <div className="ibthemes-container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-12">
            <div className="widget widget-logo">
              <div className="logo-footer" id="logo-footer">
                <Link href="/">
                  <Image
                    alt="nft-gaming"
                    data-retina="assets/images/logo/logo_dark@2x.png"
                    height={56}
                    width={135}
                    id="logo_footer"
                    // src="/assets/images/logo/logo_dark.png"
                    src={`/assets/images/logo/${'logo_dark'}.png`}
                  />
                </Link>
              </div>
              <p className="sub-widget-logo">
                Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.
              </p>
              <p>© {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>
          {/* End col */}

          <FooterItems data={data} />

          <div className="col-lg-3 col-md-6 col-sm-7 col-12">
            <div className="widget widget-subcribe">
              <h5 className="title-widget">Subscribe Us</h5>
              <div className="form-subcribe">
                <SubscribeForm />
              </div>
              <div className="widget-social style-1 mg-t32">
                <ul>
                  <Social />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
