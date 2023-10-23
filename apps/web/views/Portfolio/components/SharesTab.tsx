import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useFlippeningStore } from '@/store/flippening'
import { shares as fakeData } from '@/data/shares'

export default function SharesTab(): JSX.Element {
  const { shares } = useFlippeningStore()

  useEffect(() => {
    useFlippeningStore.setState({ shares: { ...shares, results: fakeData } })
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

  const sharesInfo = ({ item, index }) =>
    index < countOfItemsShown * 6 ? (
      <li className="box-recent-post" key={item.address}>
        <div className="avatar">
          <Image alt="image" className="rounded" height={70} src={item?.subject?.pfpUrl} width={70} />
          <Image alt="image" className="rounded m-2" height={50} src={item?.trader?.pfpUrl} width={50} />
        </div>
        <div className="box-content">
          <p className="m-0">{`${item?.trader?.address.slice(0, 4)}...${item?.trader?.address.slice(-4) || ''} ${
            item.isBuy ? 'bought' : 'sold'
          } ${item.shareAmount || ''} shares`}</p>
          <p className="m-0">{`${item?.ethAmount / 10 ** 18} stETH, ${timeAgo(item?.createdAt)}`}</p>
        </div>
      </li>
    ) : null

  return (
    <div className="side-bar details list-items col-lg-6 m-auto">
      <div className="widget widget-recent-post mg-bt-43">
        <ul>{shares.results?.map((item, index) => sharesInfo({ item, index }))}</ul>
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
