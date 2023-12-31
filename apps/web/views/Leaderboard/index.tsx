'use client'
import Link from 'next/link'
import LeaderboardPlacehoder from './components/LeaderboardPlacehoder'
import LeaderboardRow from './components/LeaderboardRow'
import { useDashboardDataQuery } from '@/server/graphql/gen/graphql-types'

export default function Leaderboard(): JSX.Element {
  const { data, loading } = useDashboardDataQuery()

  return (
    <section className="tf-section tf-rank">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table cellPadding="20" className="table rankingTable">
                <thead>
                  <tr style={{ marginLeft: '100px' }}>
                    <th scope="col" style={{ width: '40px' }}>
                      #
                    </th>
                    <th scope="col" style={{ width: '400px' }}>
                      User
                    </th>
                    <th scope="col">Net Winnings (stETH)</th>
                    <th scope="col">Win Rate</th>
                    <th scope="col">Rounds Won</th>
                    <th scope="col">Rounds Played</th>
                  </tr>
                </thead>
                <tbody>
                  {data ? (
                    data?.topTraders?.map((item, index) => <LeaderboardRow data={item} index={index} key={item.id} />)
                  ) : (
                    <LeaderboardPlacehoder />
                  )}
                </tbody>
              </table>
            </div>
            <div className="col-md-12 wrap-inner load-more text-center mg-t16">
              <Link className="sc-button loadmore fl-button pri-3" href="/authors-1" id="loadmore">
                <span>Load More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
