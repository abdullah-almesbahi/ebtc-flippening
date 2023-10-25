'use client'
import { useState } from 'react'
import SharesPlaceholder from './components/SharesPlacehoder'
import ShareInfoRow from './components/ShareInfoRow'
import { useShareDataQuery } from '@/server/graphql/gen/graphql-types'

export default function Shares(): JSX.Element {
  const { data } = useShareDataQuery()

  const [countOfItemsShown, setCountOfItemsShown] = useState(1)

  return (
    <section className="tf-section tf-rank">
      <div className="container-fluid">
        <div className="row">
          <div className="widget widget-recent-post mg-bt-43">
            <ul>
              {data?.me ? (
                data.me?.map((item, index) => <ShareInfoRow index={index} item={item} key={item.id} />)
              ) : (
                <SharesPlaceholder />
              )}
            </ul>
          </div>
        </div>
        <div className="col-md-12 wrap-inner load-more text-center">
          <button
            className="sc-button loadmore fl-button pri-3"
            onClick={() => {
              setCountOfItemsShown(countOfItemsShown + 1)
            }}
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  )
}
