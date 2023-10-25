import NetWinningsView from '@/components/NetWinningsView'
import { BetPosition, type PortfolioDataQuery } from '@/server/graphql/gen/graphql-types'

interface TradeTableRowProps {
  index: number
  data: PortfolioDataQuery['bets'][0]
}

function TradeTableRow({ data, index }: TradeTableRowProps) {
  if (!data) return <></>
  return (
    <tr className="rows">
      <td>
        <div className="column">
          <span>{data?.round?.epoch}</span>
        </div>
      </td>
      <td>
        <div className="column">
          <button
            className={`btn btn-sm rounded-10 fw-bold ${data.position === BetPosition.Bull ? 'btn-success' : ''} ${
              data.position === BetPosition.Bear ? 'btn-danger' : ''
            } `}
            type="button"
          >
            {data.position === BetPosition.Bull ? <i className="fa fa-arrow-up fa-1x" /> : ''}
            {data.position === BetPosition.Bear ? <i className="fa fa-arrow-down fa-1x" /> : ''}{' '}
            {data.position === BetPosition.Bull ? 'BTC beat ETH' : 'ETH beat BTC'}
          </button>
        </div>
      </td>
      <td>
        {/** @ts-expect-error */}
        <NetWinningsView data={data.user} />
      </td>
    </tr>
  )
}

export default TradeTableRow
