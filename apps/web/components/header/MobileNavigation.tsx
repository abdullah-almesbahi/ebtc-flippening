'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sidebar, Menu, SubMenu } from 'react-pro-sidebar'
import isActiveMenu from '@/utils/isActiveMenu'
import { navigation } from '@/data/navigation'

export default function MobileNavigation() {
  const path = usePathname()
  return (
    <div aria-labelledby="menu" className="offcanvas offcanvas-start" id="menu" tabIndex={-1}>
      <Sidebar className="mobile__menu">
        <Menu className="mobile__menu__item">
          <div className="mobile__menu__logo">
            <Link href="/">
              <Image alt="logo" height={100} src="/assets/images/logo/logo_dark.png" width={100} />
            </Link>
          </div>

          {navigation.map((item) => (
            <SubMenu
              className={isActiveMenu(item?.dropdown, path) ? 'active' : ''}
              component={<Link href={item.path} />}
              key={item.id}
              label={item.name}
            />
          ))}
        </Menu>
      </Sidebar>
    </div>
  )
}
