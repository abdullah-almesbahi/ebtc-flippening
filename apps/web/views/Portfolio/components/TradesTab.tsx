import { useEffect } from 'react'
import TradeTableRow from './TradeTableRow'
import { useFlippeningStore } from '@/store/flippening'
import { bets as fakeData } from '@/data/bets'

export default function TradesTab(): JSX.Element {
  const { history } = useFlippeningStore()

  useEffect(() => {
    useFlippeningStore.setState({ history: fakeData })
  }, [])

  return (
    <div className="side-bar details list-items col-lg-6 m-auto">
      <div className="widget widget-recent-post mg-bt-43">
        <table cellPadding="20" className="table rankingTable">
          <thead>
            <tr>
              <th scope="col">ROUND</th>
              <th scope="col">DIRECTION</th>
              <th scope="col" style={{ width: 300 }}>
                WINNINGS (fiBTC)
              </th>
            </tr>
          </thead>
          <tbody>{history?.map((item, index) => <TradeTableRow data={item} index={index} key={item.id} />)}</tbody>
        </table>
      </div>
    </div>
  )
}
