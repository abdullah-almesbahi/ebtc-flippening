import Link from 'next/link'

interface MenuItem {
  href: string
  label: string
}

interface Props {
  data: { id: number; avatar: string; name: string; eth: number }
}

const menuItems: MenuItem[][] = [
  [
    { href: '/#', label: 'Authors' },
    { href: '/#', label: 'Collection' },
    { href: '/#', label: 'Author Profile' },
    { href: '/create-item', label: 'Create Item' },
  ],
  [
    { href: '/#', label: 'Help & Support' },
    { href: '/#', label: 'Live Auctions' },
    { href: '/#', label: 'Item Details' },
    { href: '/#', label: 'Activity' },
  ],
  [
    { href: '/#', label: 'Explore' },
    { href: '/#', label: 'Contact Us' },
    { href: '/#', label: 'Our Blog' },
    { href: '/#', label: 'FAQ' },
  ],
]

export default function FooterItems({ data }: Props) {
  return (
    <>
      {menuItems.map((menu, index) => (
        <div className={`col-lg-2 col-md-4 col-sm-${index === 1 ? 7 : 5} col-5`} key={index}>
          <div className={`widget widget-menu style-${index + 1}`}>
            <h5 className="title-widget">{index === 0 ? 'My Account' : index === 1 ? 'Resources' : 'Company'}</h5>
            <ul>
              {menu.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  )
}
