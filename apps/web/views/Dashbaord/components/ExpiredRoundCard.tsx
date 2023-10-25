import Card from './Card'
import CardHeader from './RoundCard/CardHeader'
import RoundResult from './RoundResult/RoundResult'
import type { DashboardDataQuery } from '@/server/graphql/gen/graphql-types'

interface ExpiredRoundCardProps {
  data: DashboardDataQuery['rounds'][0]
}

export default function ExpiredRoundCard({ data }: ExpiredRoundCardProps): JSX.Element {
  return (
    <Card>
      <CardHeader epoch={data.epoch} icon={<i className="fa fa-ban text-down" />} status="expired" title="Expired" />

      <RoundResult data={data} hasFailed={false} />
    </Card>
  )
}
