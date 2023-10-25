import Link from 'next/link'
import { usePathname } from 'next/navigation'
import useMatchMedia from '@/hooks/useMatchMedia'
import isActiveMenu from '@/utils/isActiveMenu'
import { navigation } from '@/utils/constants'

export default function Navigation(): JSX.Element {
  const path = usePathname()

  // checking media query
  const isMatch = useMatchMedia('(max-width: 991px)')

  return (
    <>
      {isMatch !== null ? (
        <nav
          className="main-nav"
          id={isMatch ? 'main-nav-mobi' : 'main-nav'}
          style={isMatch ? { display: 'none' } : { display: 'block' }}
        >
          <ul className="menu" id="menu-primary-menu">
            {navigation?.map((item) => (
              <li className="menu-item current-menu-item " key={item.id}>
                <Link className={isActiveMenu(item.path, path) ? 'active' : ''} href={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        ''
      )}
    </>
  )
}
