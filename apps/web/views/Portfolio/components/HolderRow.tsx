import Image from 'next/image'
import type { PortfolioDataQuery } from '@/server/graphql/gen/graphql-types'

interface HolderRowProps {
  item: PortfolioDataQuery['holders'][0]
  index: number
}
function HolderRow({ item, index }: HolderRowProps) {
  return (
    <li className="box-recent-post" key={index + 1}>
      <div>
        <Image alt="image" className="rounded m-2" height={50} src={item?.trader.image} width={50} />
      </div>
      <div className="d-flex justify-content-between w-100">
        <div className="box-content">
          <p className="m-0">{`${item?.trader.address?.slice(0, 4)}...${item?.trader.address?.slice(-4) || ''}`}</p>
        </div>
        <div className="box-content">
          <p className="m-0">{`${item?.shareAmount} ${item?.shareAmount === '1' ? 'Share' : 'Shares'}`}</p>
        </div>
      </div>
    </li>
  )
}

export default HolderRow
