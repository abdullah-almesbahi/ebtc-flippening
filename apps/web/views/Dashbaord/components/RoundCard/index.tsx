'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Countdown from 'react-countdown'
import ExpiredRoundCard from '../ExpiredRoundCard'
import LiveRoundCard from '../LiveRoundCard'
import OpenRoundCard from '../OpenRoundCard'
import SoonRoundCard from '../SoonRoundCard'
import { BetPosition, type NodeRound } from '@/store/types'
import { useFlippeningStore } from '@/store/flippening'

interface RoundCardProps {
  round: NodeRound
  isActive?: boolean
}

const renderer = ({ days, hours, minutes, seconds, completed }: any): JSX.Element | string => {
  if (completed) {
    return 'Completed'
  }
  return (
    <span>
      {days} : {hours} : {minutes} : {seconds}
    </span>
  )
}

export default function RoundCard({ round, isActive }: RoundCardProps): JSX.Element {
  const { epoch, lockPrice, closePrice, totalAmount, bullAmount, bearAmount } = round
  const currentEpoch = useFlippeningStore((state) => state.currentEpoch)
  // const { address: account } = useAccount()
  // const ledger = useGetBetByEpoch(account, epoch)
  // const hasEntered = ledger ? ledger.amount > 0n : false
  // const hasEnteredUp = hasEntered && ledger.position === BetPosition.BULL
  // const hasEnteredDown = hasEntered && ledger.position === BetPosition.BEAR
  // const hasClaimedUp = hasEntered && ledger.claimed && ledger.position === BetPosition.BULL
  // const hasClaimedDown = hasEntered && ledger.claimed && ledger.position === BetPosition.BEAR

  // Fake future rounds
  if (epoch > currentEpoch) {
    return <SoonRoundCard round={round} />
  }

  // const bullMultiplier = getMultiplierV2(totalAmount, bullAmount)
  // const bearMultiplier = getMultiplierV2(totalAmount, bearAmount)

  // const formattedBullMultiplier = bullMultiplier.toFixed(bullMultiplier.isZero() ? 0 : 2)
  // const formattedBearMultiplier = bearMultiplier.toFixed(bearMultiplier.isZero() ? 0 : 2)

  // Next (open) round
  if (epoch === currentEpoch && lockPrice === null) {
    return (
      <OpenRoundCard
        round={round}
        // hasEnteredDown={hasEnteredDown}
        // hasEnteredUp={hasEnteredUp}
        // betAmount={ledger?.amount}
        // bullMultiplier={formattedBullMultiplier}
        // bearMultiplier={formattedBearMultiplier}
      />
    )
  }

  // Live round
  if (closePrice === null && epoch === currentEpoch - 1) {
    return (
      <LiveRoundCard
        // bearMultiplier={formattedBearMultiplier}
        // betAmount={ledger?.amount}
        // bullMultiplier={formattedBullMultiplier}
        // hasEnteredDown={hasEnteredDown}
        // hasEnteredUp={hasEnteredUp}
        round={round}
      />
    )
  }

  // Past rounds
  return (
    <ExpiredRoundCard
      isActive={isActive}
      round={round}
      // hasEnteredDown={hasEnteredDown}
      // hasEnteredUp={hasEnteredUp}
      // hasClaimedDown={hasClaimedDown}
      // hasClaimedUp={hasClaimedUp}
      // betAmount={ledger?.amount}
      // bullMultiplier={formattedBullMultiplier}
      // bearMultiplier={formattedBearMultiplier}
    />
  )
}
