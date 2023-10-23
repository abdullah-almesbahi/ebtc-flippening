import NetWinningsView from '@/components/NetWinningsView'
import type { Bet } from '@/store/types'

interface Props {
  index: number
  data: Bet
}

function TradeTableRow({ data, index }: Props) {
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
            className={`btn btn-sm rounded-10 fw-bold ${data.position === 'Bull' ? 'btn-success' : ''} ${
              data.position === 'Bear' ? 'btn-danger' : ''
            } `}
            type="button"
          >
            {data.position === 'Bull' ? <i className="fa fa-arrow-up fa-1x" /> : ''}
            {data.position === 'Bear' ? <i className="fa fa-arrow-down fa-1x" /> : ''}{' '}
            {data.position === 'Bull' ? 'BTC beat ETH' : 'ETH beat BTC'}
          </button>
        </div>
      </td>
      <td>
        <NetWinningsView data={data.user} />
      </td>
    </tr>
  )
}

export default TradeTableRow
