import Link from 'next/link'

interface BreadcrumbProps {
  data: {
    title: string
    breadcrumb: {
      name: string
      path?: string
    }[]
  }
}

export default function Breadcrumb({ data }: BreadcrumbProps): JSX.Element {
  return (
    <section className="flat-title-page inner">
      <div className="overlay" />
      <div className="ibthemes-container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-title-heading mg-bt-12 mt-5">
              <h1 className="heading text-center">{data.title}</h1>
            </div>
            <div className="breadcrumbs style2">
              <ul>
                {data.breadcrumb.map((item, index) => (
                  <li key={index}>{item.path ? <Link href={item.path}>{item.name}</Link> : item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
