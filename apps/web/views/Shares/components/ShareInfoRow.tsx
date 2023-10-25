import Image from 'next/image'
import type { ShareDataQuery } from '@/server/graphql/gen/graphql-types'
import { timeAgo } from '@/utils/timeAgo'

export default function ShareInfoRow({ item, index }: { item: ShareDataQuery['me'][0]; index: number }) {
  return (
    <li className="box-recent-post">
      <div className="avatar">
        {item?.subject?.image ? (
          <Image alt="image" className="rounded" height={70} src={item?.subject?.image} width={70} />
        ) : null}
        {item?.trader?.image ? (
          <Image alt="image" className="rounded m-2" height={50} src={item?.trader?.image} width={50} />
        ) : null}
      </div>
      <div className="box-content">
        <p className="m-0">{`${item?.trader?.address?.slice(0, 4)}...${item?.trader?.address?.slice(-4) || ''} ${
          item.isBuy ? 'bought' : 'sold'
        } ${item.shareAmount || ''} shares`}</p>
        <p className="m-0">{`${item?.stethAmount / 10 ** 18} stETH, ${timeAgo(item?.createdAt)}`}</p>
      </div>
    </li>
  )
}
