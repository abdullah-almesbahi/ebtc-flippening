'use client'
import { useState } from 'react'
import HolderRow from './HolderRow'
import type { PortfolioDataQuery } from '@/server/graphql/gen/graphql-types'
import SharesPlaceholder from '@/views/Shares/components/SharesPlacehoder'

export default function HoldingTab({ data }: { data?: PortfolioDataQuery['holding'] }): JSX.Element {
  const [countOfItemsShown, setCountOfItemsShown] = useState(1)

  return (
    <div className="side-bar details list-items col-lg-6 m-auto">
      <div className="widget widget-recent-post mg-bt-43">
        {data ? (
          <ul>{data?.map((item, index) => <HolderRow index={index} item={item} key={item.id} />)}</ul>
        ) : (
          <SharesPlaceholder />
        )}
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
  )
}
