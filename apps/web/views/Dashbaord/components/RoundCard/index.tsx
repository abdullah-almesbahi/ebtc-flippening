'use client'
import ExpiredRoundCard from '../ExpiredRoundCard'
import LiveRoundCard from '../LiveRoundCard'
import OpenRoundCard from '../OpenRoundCard'
import SoonRoundCard from '../SoonRoundCard'
import { useUserStore } from '@/store/user'
import { BetPosition, type DashboardDataQuery } from '@/server/graphql/gen/graphql-types'

interface RoundCardProps {
  data: DashboardDataQuery['rounds'][0]
  isActive?: boolean
  currentEpoch: number
}

export default function RoundCard({ data, currentEpoch }: RoundCardProps): JSX.Element {
  const { epoch, lockPrice, closePrice, bets } = data
  const { user } = useUserStore()

  const ledger =
    bets && bets.length > 0 ? bets.find((bet) => bet.userId === user?.id && data.id === bet.roundId) : undefined
  const hasEntered = ledger ? ledger.amount > 0n : false
  const hasEnteredUp = Boolean(hasEntered && ledger?.position === BetPosition.Bull)
  const hasEnteredDown = Boolean(hasEntered && ledger?.position === BetPosition.Bear)
  const hasClaimedUp = Boolean(hasEntered && ledger?.claimed && ledger.position === BetPosition.Bull)
  const hasClaimedDown = Boolean(hasEntered && ledger?.claimed && ledger.position === BetPosition.Bear)

  // Fake future rounds
  if (epoch > currentEpoch) {
    return <SoonRoundCard data={data} />
  }

  // Next (open) round
  if (epoch === currentEpoch && lockPrice === '0') {
    return (
      <OpenRoundCard
        betAmount={ledger?.amount}
        data={data}
        hasEnteredDown={hasEnteredDown}
        hasEnteredUp={hasEnteredUp}
      />
    )
  }

  // Live round
  if (closePrice === '0' && epoch === currentEpoch - 1) {
    return (
      <LiveRoundCard
        betAmount={ledger?.amount}
        data={data}
        hasEnteredDown={hasEnteredDown}
        hasEnteredUp={hasEnteredUp}
      />
    )
  }

  // Past rounds
  return (
    <ExpiredRoundCard
      betAmount={ledger?.amount}
      data={data}
      hasClaimedDown={hasClaimedDown}
      hasClaimedUp={hasClaimedUp}
      hasEnteredDown={hasEnteredDown}
      hasEnteredUp={hasEnteredUp}
    />
  )
}
