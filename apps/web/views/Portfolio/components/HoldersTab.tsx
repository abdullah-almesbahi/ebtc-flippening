import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useFlippeningStore } from '@/store/flippening'
import { holders as fakeData } from '@/data/holders'

export default function HoldersTab(): JSX.Element {
  const { holders } = useFlippeningStore()

  useEffect(() => {
    useFlippeningStore.setState({ holders: { ...holders, results: fakeData } })
  }, [])

  const [countOfItemsShown, setCountOfItemsShown] = useState(1)

  const holdersInfo = ({ item, index }) =>
    index < countOfItemsShown * 6 ? (
      <li className="box-recent-post" key={index + 1}>
        <div>
          <Image alt="image" className="rounded m-2" height={50} src={item?.pfpUrl} width={50} />
        </div>
        <div className="d-flex justify-content-between w-100">
          <div className="box-content">
            <p className="m-0">{`${item?.address.slice(0, 4)}...${item?.username.slice(-4) || ''}`}</p>
          </div>
          <div className="box-content">
            <p className="m-0">{`${item?.shareAmount} ${item?.shareAmount === '1' ? 'Share' : 'Shares'}`}</p>
          </div>
        </div>
      </li>
    ) : null

  return (
    <div className="side-bar details list-items col-lg-6 m-auto">
      <div className="widget widget-recent-post mg-bt-43">
        <ul>{holders?.results?.map((item, index) => holdersInfo({ item, index }))}</ul>
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
