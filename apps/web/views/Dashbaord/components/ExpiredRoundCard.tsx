import Card from './Card'
import CardHeader from './RoundCard/CardHeader'
import RoundResult from './RoundResult/RoundResult'
import type { NodeRound, ReduxNodeLedger } from '@/store/types'

interface ExpiredRoundCardProps {
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

export default function ExpiredRoundCard({ round }: ExpiredRoundCardProps): JSX.Element {
  return (
    <Card>
      <CardHeader epoch={round.epoch} icon={<i className="fa fa-ban text-down" />} status="expired" title="Expired" />

      <RoundResult hasFailed={false} round={round} />
    </Card>
  )
}
