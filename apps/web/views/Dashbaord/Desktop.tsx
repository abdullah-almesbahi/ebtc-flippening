import Positions from './components/Positions'
import type { DashboardDataQuery } from '@/server/graphql/gen/graphql-types'

export default function Desktop({ data }: { data: DashboardDataQuery['rounds'] }): JSX.Element {
  return <Positions data={data} />
}
