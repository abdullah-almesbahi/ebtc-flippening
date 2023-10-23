import type { User } from '@/store/types'

interface NetWinningsViewProps {
  data?: User
}

export default function NetWinningsView({ data }: NetWinningsViewProps): JSX.Element {
  if (!data) return <></>
  const netWinnings = `${data?.netSTETH > 0 ? '+' : ''}${data?.netSTETH?.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })}`
  const isPositive = data.netSTETH > 0
  const tokenPrice = 2.0
  return (
    <>
      <div className="text-end">
        <span className={`fs-6 fw-bold ${isPositive ? 'text-success' : 'text-danger'}`}>{netWinnings}</span>
      </div>
      <div className=" fs-6 text-end">
        <span className="text-xs text-end">
          {' '}
          {`~$${(tokenPrice * data?.netSTETH).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
        </span>
      </div>
    </>
  )
}
