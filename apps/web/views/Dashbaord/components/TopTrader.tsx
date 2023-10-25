import TopTraderPlaceholder from './TopTraderPlacehoder'
import TraderCard from './TraderCard'
import type { DashboardDataQuery } from '@/server/graphql/gen/graphql-types'

export default function TopTrader({ data }: { data?: DashboardDataQuery['topTraders'] }): JSX.Element {
  if (!data) return <TopTraderPlaceholder />

  return (
    <section className="tf-section top-seller ">
      <div className="ibthemes-container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="tf-title style2">Top Trader</h2>
            <div className="heading-line s2" />
          </div>
          {data.map((item, index) => (
            <TraderCard data={item} index={index} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
