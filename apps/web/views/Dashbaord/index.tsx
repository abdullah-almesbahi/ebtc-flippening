'use client'
import Desktop from './Desktop'
import TopTrader from './components/TopTrader'
import SwiperProvider from './context/SwiperProvider'
import { useDashboardDataQuery } from '@/server/graphql/gen/graphql-types'

function Dashboard() {
  const { data, loading } = useDashboardDataQuery()

  return (
    <SwiperProvider>
      <Desktop data={data?.rounds} />
      <TopTrader data={data?.topTraders} />
    </SwiperProvider>
  )
}

export default Dashboard
