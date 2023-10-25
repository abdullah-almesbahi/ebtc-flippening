import { getRoundPosition } from '../../helpers'
import PriceTicker from '@/components/PriceTicker'
import type { DashboardDataQuery } from '@/server/graphql/gen/graphql-types'

interface RoundResultProps {
  data: DashboardDataQuery['rounds'][0]
  hasFailed?: boolean
}

const RoundResult: React.FC<React.PropsWithChildren<RoundResultProps>> = ({
  data,
  hasFailed = false,
  children,
  ...props
}) => {
  const { lockPrice, closePrice } = data

  const betPosition = getRoundPosition(lockPrice, closePrice)

  return (
    <div className="p-4" {...props}>
      <div className="text-grey-50 fs-7  mt-20">CLOSED PRICE</div>

      {hasFailed ? (
        <span>Cancelled</span>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center mt-20">
            <span
              className={`fs-4 fw-bold ${betPosition === 'Bull' ? 'text-up' : ''} ${
                betPosition === 'Bear' ? 'text-down' : ''
              }`}
            >
              $213.1658
            </span>
            <PriceTicker amount="$-0.3289" betPosition={betPosition} />
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
        </>
      )}

      {children}
    </div>
  )
}

export default RoundResult
