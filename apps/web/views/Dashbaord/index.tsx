import Desktop from './Desktop'
import TopTrader from './components/TopTrader'
import SwiperProvider from './context/SwiperProvider'

function Dashboard() {
  return (
    <SwiperProvider>
      <Desktop />
      <TopTrader />
    </SwiperProvider>
  )
}

export default Dashboard
