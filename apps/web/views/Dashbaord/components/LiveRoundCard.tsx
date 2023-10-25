import CardHeader from './RoundCard/CardHeader'
import Card from './Card'
import { BetPosition } from '@/store/types'
import type { DashboardDataQuery } from '@/server/graphql/gen/graphql-types'

interface LiveRoundCardProps {
  data: DashboardDataQuery['rounds'][0]
}

export default function LiveRoundCard({ data }: LiveRoundCardProps): JSX.Element {
  const { lockPrice } = data
  const price = 213.1658

  const isBull = lockPrice && price > Number(lockPrice)

  const betPosition = isBull ? BetPosition.BULL : BetPosition.BEAR

  return (
    <Card>
      <CardHeader epoch={data.epoch} icon={<i className="fa fa-podcast text-up" />} status="live" title="LIVE" />

      <div className="p-4">
        <div className="text-grey-50 mt-20 fs-7">LAST PRICE</div>

        <div className="d-flex justify-content-between align-items-center mt-20">
          <span
            className={`fs-4 fw-bold ${betPosition === 'Bull' ? 'text-up' : ''} ${
              betPosition === 'Bear' ? 'text-down' : ''
            }`}
          >
            $213.1658
          </span>
          {betPosition ? (
            <button
              className={`btn btn-sm rounded-10 fw-bold ${betPosition === 'Bull' ? 'btn-success' : ''} ${
                betPosition === 'Bear' ? 'btn-danger' : ''
              } `}
              type="button"
            >
              {betPosition === 'Bull' ? <i className="fa fa-arrow-up fa-1x" /> : ''}
              {betPosition === 'Bear' ? <i className="fa fa-arrow-down fa-1x" /> : ''} $-0.3289
            </button>
          ) : null}
        </div>
        {betPosition ? (
          <div className="d-flex justify-content-center align-items-center mt-20 ">
            <span
              className={`fs-3 fw-bold ${betPosition === 'Bull' ? 'text-up' : ''} ${
                betPosition === 'Bear' ? 'text-down' : ''
              }`}
            >
              {betPosition === 'Bull' ? 'BTC beat ETH' : ''}
              {betPosition === 'Bear' ? 'ETH beat BTC' : ''}
            </span>
          </div>
        ) : null}
      </div>
    </Card>
  )
}
