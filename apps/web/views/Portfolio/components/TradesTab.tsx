import TradeTableRow from './TradeTableRow'
import type { PortfolioDataQuery } from '@/server/graphql/gen/graphql-types'
import SharesPlaceholder from '@/views/Shares/components/SharesPlacehoder'

export default function TradesTab({ data }: { data?: PortfolioDataQuery['bets'] }): JSX.Element {
  return (
    <div className="side-bar details list-items col-lg-6 m-auto">
      <div className="widget widget-recent-post mg-bt-43">
        <table cellPadding="20" className="table rankingTable">
          <thead>
            <tr>
              <th scope="col">ROUND</th>
              <th scope="col">DIRECTION</th>
              <th scope="col" style={{ width: 300 }}>
                WINNINGS (fiBTC)
              </th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data?.map((item, index) => <TradeTableRow data={item} index={index} key={item.id} />)
            ) : (
              <SharesPlaceholder />
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
