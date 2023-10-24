import Image from 'next/image'
import Link from 'next/link'
import NetWinningsView from '@/components/NetWinningsView'
import type { DashboardDataQuery } from '@/server/graphql/gen/graphql-types'

interface LeaderboardRowProps {
  index: number
  data: DashboardDataQuery['topTraders'][0]
}

export default function LeaderboardRow({ data, index }: LeaderboardRowProps): JSX.Element {
  return (
    <tr className="rows">
      <td>
        <div className="column">
          <span>#{index + 1}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <div className="media ">
            <Image alt="Images" height={80} src={data.image} width={80} />
          </div>
          <div className="infor-item flex column1 align-items-center">
            <div className="content-collection">
              <h5 className="title">
                <Link href={`/portfolio/${data.address}`}>@{data.username}</Link>
              </h5>
            </div>
          </div>
        </div>
      </td>
      <td>
        <NetWinningsView data={data} />
      </td>
      <td>
        <div className="column">
          <span>
            {data.stats?.winRate.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}%
          </span>
        </div>
      </td>
      <td>
        <div className="column">
          <span>{data.stats?.totalBetsClaimed}</span>
        </div>
      </td>
      <td>
        <div className="column">
          <span>{data.stats?.totalBets}</span>
        </div>
      </td>
      <td>
        <div>
          <Link className="sc-button fl-button pri-3" href={`/portfolio/${data.address}`}>
            <span>View</span>
          </Link>
        </div>
        <div className="mt-4">
          <a
            className="sc-button fl-button pri-3"
            data-bs-target="#popup_buy_share"
            data-bs-toggle="modal"
            href="#"
            style={{ borderRadius: 20 }}
          >
            <span>Buy Shares</span>
          </a>
        </div>
      </td>
    </tr>
  )
}
