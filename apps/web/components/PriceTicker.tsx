import type { BetPosition } from '@/store/types'

interface PriceTickerProps {
  betPosition: BetPosition | null
  amount: string
}

export default function PriceTicker({ betPosition, amount }: PriceTickerProps): JSX.Element {
  if (!betPosition) return <></>
  return (
    <button
      className={`btn btn-sm rounded-10 fw-bold ${betPosition === 'Bull' ? 'btn-success' : ''} ${
        betPosition === 'Bear' ? 'btn-danger' : ''
      } `}
      type="button"
    >
      {betPosition === 'Bull' ? <i className="fa fa-arrow-up fa-1x" /> : ''}
      {betPosition === 'Bear' ? <i className="fa fa-arrow-down fa-1x" /> : ''} {amount}
    </button>
  )
}
