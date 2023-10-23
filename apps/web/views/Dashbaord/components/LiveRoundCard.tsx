import { useMemo } from 'react'
import CardHeader from './RoundCard/CardHeader'
import Card from './Card'
import { BetPosition } from '@/store/types'
import type { NodeRound, ReduxNodeLedger } from '@/store/types'
import { getNowInSeconds } from '@/utils/getNowInSeconds'

interface LiveRoundCardProps {
  round: NodeRound
  betAmount?: ReduxNodeLedger['amount']
  hasEnteredUp: boolean
  hasEnteredDown: boolean
  hasClaimedUp: boolean
  hasClaimedDown: boolean
  bullMultiplier: string
  bearMultiplier: string
  isActive?: boolean
}

export default function LiveRoundCard({ round }: LiveRoundCardProps): JSX.Element {
  const { lockPrice, closeTimestamp } = round
  // const { price, refresh } = usePollOraclePrice()
  const price = 213.1658

  const isHouse = useMemo(() => {
    const secondsToClose = closeTimestamp ? closeTimestamp - getNowInSeconds() : 0
    return lockPrice && price === lockPrice && secondsToClose <= SHOW_HOUSE_BEFORE_SECONDS_TO_CLOSE
  }, [closeTimestamp, lockPrice, price])

  const isBull = lockPrice && price > lockPrice

  const betPosition = isHouse ? BetPosition.HOUSE : isBull ? BetPosition.BULL : BetPosition.BEAR

  return (
    <Card>
      <CardHeader epoch={round.epoch} icon={<i className="fa fa-podcast text-up" />} status="live" title="LIVE" />

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
