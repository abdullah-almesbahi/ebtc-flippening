'use client'
import { useEffect } from 'react'
import TraderCard from './TraderCard'
import { useFlippeningStore } from '@/store/flippening'
import { leaderboard as fakeDataLeaderboards } from '@/data/leaderboard'

export default function TopTrader(): JSX.Element {
  const { leaderboard } = useFlippeningStore()

  useEffect(() => {
    useFlippeningStore.setState({ leaderboard: { ...leaderboard, results: fakeDataLeaderboards } })
  }, [])

  return (
    <section className="tf-section top-seller ">
      <div className="ibthemes-container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="tf-title style2">Top Trader</h2>
            <div className="heading-line s2" />
          </div>
          {leaderboard.results.slice(0, 12).map((item, index) => (
            <TraderCard data={item} index={index} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
