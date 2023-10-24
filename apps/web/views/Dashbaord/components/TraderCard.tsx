import Image from 'next/image'
import Link from 'next/link'
import type { DashboardDataQuery } from '@/server/graphql/gen/graphql-types'

interface TraderCardProps {
  data: DashboardDataQuery['topTraders'][0]
  index: number
}

export default function TraderCard({ data, index }: TraderCardProps): JSX.Element {
  const tokenPrice = 2.000000000000000001
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
      <div className="sc-author-box">
        <div className="author-avatar">
          <a>
            <Image alt="Image" className="avatar" height={100} priority src={data.image} width={100} />
          </a>
          <div className="badge">{index + 1}</div>
        </div>
        <div className="author-infor d-flex flex-column w-100">
          <h5 className="style2">
            <Link href={`/portfolio/${data.address}`}>@{data.username}</Link>
          </h5>
          <div className="d-flex justify-content-between align-items-center" style={{ marginRight: 10 }}>
            <span className="price">
              PNL:
              {`$${(tokenPrice * data.stats?.netSTETH).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`}
            </span>
            <a
              className="sc-button btn-sm fl-button pri-3 mr-5"
              data-bs-target="#popup_buy_share"
              data-bs-toggle="modal"
              href="#"
              style={{ borderRadius: 20 }}
            >
              <span>Buy Shares</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
