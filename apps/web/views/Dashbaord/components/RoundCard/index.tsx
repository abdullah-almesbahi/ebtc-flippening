'use client'
import ExpiredRoundCard from '../ExpiredRoundCard'
import LiveRoundCard from '../LiveRoundCard'
import OpenRoundCard from '../OpenRoundCard'
import SoonRoundCard from '../SoonRoundCard'
import { type NodeRound } from '@/store/types'
import { useFlippeningStore } from '@/store/flippening'

interface RoundCardProps {
  round: NodeRound
  isActive?: boolean
}

export default function RoundCard({ round }: RoundCardProps): JSX.Element {
  const { epoch, lockPrice, closePrice } = round
  const { currentEpoch } = useFlippeningStore()

  // Fake future rounds
  if (epoch > currentEpoch) {
    return <SoonRoundCard round={round} />
  }

  // Next (open) round
  if (epoch === currentEpoch && lockPrice === null) {
    return <OpenRoundCard round={round} />
  }

  // Live round
  if (closePrice === null && epoch === currentEpoch - 1) {
    return <LiveRoundCard round={round} />
  }

  // Past rounds
  return <ExpiredRoundCard round={round} />
}
