import Image from 'next/image'
import { useEffect, useState } from 'react'
import Countdown from 'react-countdown'
import { useFlippeningStore } from '@/store/flippening'
import { rewards as fakeData } from '@/data/rewards'

export default function RewardsTab(): JSX.Element {
  const { rewards } = useFlippeningStore()

  useEffect(() => {
    useFlippeningStore.setState({ rewards: fakeData })
  }, [])

  const [countOfItemsShown, setCountOfItemsShown] = useState(1)

  function timeAgo(timestamp) {
    const currentTime = Date.now()
    const timeDifference = currentTime - Number(timestamp) // Difference in milliseconds

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    if (timeDifference < minute) {
      return 'just now'
    } else if (timeDifference < hour) {
      const mins = Math.floor(timeDifference / minute)
      return mins > 1 ? `${mins} minutes ago` : 'a minute ago'
    } else if (timeDifference < day) {
      const hrs = Math.floor(timeDifference / hour)
      return hrs > 1 ? `${hrs} hours ago` : 'an hour ago'
    }
    const days = Math.floor(timeDifference / day)
    return days > 1 ? `${days} days ago` : 'a day ago'
  }

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

  const rewardsInfo = ({ item, index }) =>
    index < countOfItemsShown * 6 ? (
      <li className="box-recent-post" key={index + 1}>
        <div className="">
          <Image alt="image" className="rounded m-2" height={50} src={item?.pfpUrl} width={50} />
        </div>
        <div className="d-flex justify-content-between w-100">
          <div className="box-content">
            <p className="m-0">got {item?.rewardsAmount} ifBTC rewards</p>
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
        {rewards.length > 0 && <ul>{rewards?.map((item, index) => rewardsInfo({ item, index }))}</ul>}
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
