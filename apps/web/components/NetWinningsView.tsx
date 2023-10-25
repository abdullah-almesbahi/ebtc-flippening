import type { DashboardDataQuery } from '@/server/graphql/gen/graphql-types'
import { formatBigNumber, weiToEth } from '@/utils/format'

interface NetWinningsViewProps {
  data?: DashboardDataQuery['topTraders'][0]
}

export default function NetWinningsView({ data }: NetWinningsViewProps): JSX.Element {
  if (!data) return <></>

  const net = weiToEth(data.stats?.netSTETH)

  const netWinnings = `${net.isGreaterThan(0) ? '+' : ''}${formatBigNumber(net)}`
  const isPositive = net.isGreaterThan(0)
  const tokenPrice = 2.0
  return (
    <>
      <div className="text-end">
        <span className={`fs-6 fw-bold ${isPositive ? 'text-success' : 'text-danger'}`}>{netWinnings}</span>
      </div>
      <div className=" fs-6 text-end">
        <span className="text-xs text-end"> {`~$${formatBigNumber(net.multipliedBy(tokenPrice))}`}</span>
      </div>
    </>
  )
}
