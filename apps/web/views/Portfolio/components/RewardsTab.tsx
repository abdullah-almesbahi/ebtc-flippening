import Image from 'next/image'
import { useState } from 'react'
import Countdown from 'react-countdown'
import type { PortfolioDataQuery } from '@/server/graphql/gen/graphql-types'
import SharesPlaceholder from '@/views/Shares/components/SharesPlacehoder'
import { timeAgo } from '@/utils/timeAgo'
import { rewardTokenSymbol } from '@/utils/constants'
import { weiToEth } from '@/utils/format'

export default function RewardsTab({ data }: { data?: PortfolioDataQuery['rewards'] }): JSX.Element {
  const [countOfItemsShown, setCountOfItemsShown] = useState(1)

  const renderer = ({ days, hours, minutes, seconds, completed }: any): JSX.Element | string => {
    if (completed) {
      return 'Completed'
    }
    return (
      <p className="js-countdown">
        <span className="countdown__value">{days}d</span>
        <span className="countdown__label">:</span>
        <span className="countdown__value">{hours}h</span>
        <span className="countdown__label">:</span>
        <span className="countdown__value">{minutes}m</span>
        <span className="countdown__label">:</span>
        <span className="countdown__value">{seconds}s</span>
      </p>
    )
  }

  const rewardsInfo = ({ item, index }: { item: PortfolioDataQuery['rewards'][0]; index: number }) =>
    index < countOfItemsShown * 6 ? (
      <li className="box-recent-post" key={index + 1}>
        <div className="">
          {item?.user.image ? (
            <Image alt="image" className="rounded m-2" height={50} src={item?.user.image} width={50} />
          ) : null}
        </div>
        <div className="d-flex justify-content-between w-100">
          <div className="box-content">
            <p className="m-0">
              got {weiToEth(item?.amount).toString()} {rewardTokenSymbol} rewards
            </p>
          </div>
          <div className="box-content">
            <p className="m-0">{timeAgo(item?.createdAt)}</p>
          </div>
        </div>
      </li>
    ) : null

  return (
    <div className="side-bar details list-items col-lg-6 m-auto">
      <div className="tf-item-details style-2">
        <div className="content-right">
          <div className="meta-item-details">
            <p className="mt-3 text-white fs-1">New airdrop will be after</p>
          </div>
          <div className="meta-item-details">
            <Countdown date={Date.now() + 1000 * 60 * 60 * 24 * 4.343} renderer={renderer} />
          </div>
        </div>
      </div>
      <div className="widget widget-recent-post mg-bt-43">
        {data ? <ul>{data?.map((item, index) => rewardsInfo({ item, index }))}</ul> : <SharesPlaceholder />}
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
