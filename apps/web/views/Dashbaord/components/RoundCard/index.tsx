'use client'
import ExpiredRoundCard from '../ExpiredRoundCard'
import LiveRoundCard from '../LiveRoundCard'
import OpenRoundCard from '../OpenRoundCard'
import SoonRoundCard from '../SoonRoundCard'
import { useFlippeningStore } from '@/store/flippening'
import type { DashboardDataQuery } from '@/server/graphql/gen/graphql-types'

interface RoundCardProps {
  data: DashboardDataQuery['rounds'][0]
  isActive?: boolean
}

export default function RoundCard({ data }: RoundCardProps): JSX.Element {
  const { epoch, lockPrice, closePrice } = data
  const { currentEpoch } = useFlippeningStore()

  // Fake future rounds
  if (epoch > currentEpoch) {
    return <SoonRoundCard data={data} />
  }

  // Next (open) round
  if (epoch === currentEpoch && lockPrice === null) {
    return <OpenRoundCard data={data} />
  }

  // Live round
  if (closePrice === null && epoch === currentEpoch - 1) {
    return <LiveRoundCard data={data} />
  }

  // Past rounds
  return <ExpiredRoundCard data={data} />
}
