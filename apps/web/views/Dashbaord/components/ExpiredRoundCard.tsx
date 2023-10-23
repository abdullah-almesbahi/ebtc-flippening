import Card from './Card'
import CardHeader from './RoundCard/CardHeader'
import RoundResult from './RoundResult/RoundResult'
import type { NodeRound } from '@/store/types'

interface ExpiredRoundCardProps {
  round: NodeRound
}

export default function ExpiredRoundCard({ round }: ExpiredRoundCardProps): JSX.Element {
  return (
    <Card>
      <CardHeader epoch={round.epoch} icon={<i className="fa fa-ban text-down" />} status="expired" title="Expired" />

      <RoundResult hasFailed={false} round={round} />
    </Card>
  )
}
