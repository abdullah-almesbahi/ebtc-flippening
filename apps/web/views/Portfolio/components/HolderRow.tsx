import Image from 'next/image'
import type { PortfolioDataQuery } from '@/server/graphql/gen/graphql-types'
import { weiToEth } from '@/utils/format'

interface HolderRowProps {
  item: PortfolioDataQuery['holders'][0]
  index: number
}
function HolderRow({ item, index }: HolderRowProps) {
  return (
    <li className="box-recent-post" key={index + 1}>
      <div>
        {item?.trader.image ? (
          <Image alt="image" className="rounded m-2" height={50} src={item?.trader.image} width={50} />
        ) : null}
      </div>
      <div className="d-flex justify-content-between w-100">
        <div className="box-content">
          <p className="m-0">{`${item?.trader.address?.slice(0, 4)}...${item?.trader.address?.slice(-4) || ''}`}</p>
        </div>
        <div className="box-content">
          <p className="m-0">{`${weiToEth(item?.shareAmount).toString()} ${'Shares'}`}</p>
        </div>
      </div>
    </li>
  )
}

export default HolderRow
