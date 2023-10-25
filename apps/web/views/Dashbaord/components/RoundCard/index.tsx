'use client'
import ExpiredRoundCard from '../ExpiredRoundCard'
import LiveRoundCard from '../LiveRoundCard'
import OpenRoundCard from '../OpenRoundCard'
import SoonRoundCard from '../SoonRoundCard'
import type { DashboardDataQuery } from '@/server/graphql/gen/graphql-types'

interface RoundCardProps {
  data: DashboardDataQuery['rounds'][0]
  isActive?: boolean
  currentEpoch: number
}

export default function RoundCard({ data, currentEpoch }: RoundCardProps): JSX.Element {
  const { epoch, lockPrice, closePrice } = data

  // Fake future rounds
  if (epoch > currentEpoch) {
    return <SoonRoundCard data={data} />
  }

  // Next (open) round
  if (epoch === currentEpoch && lockPrice === '0') {
    return <OpenRoundCard data={data} />
  }

  // Live round
  if (closePrice === '0' && epoch === currentEpoch - 1) {
    return <LiveRoundCard data={data} />
  }

  // Past rounds
  return <ExpiredRoundCard data={data} />
}
