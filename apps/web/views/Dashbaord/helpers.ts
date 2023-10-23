import { BetPosition } from '@/store/types'

export const getRoundPosition = (lockPrice: string | null, closePrice: string | null): BetPosition | null => {
  if (!closePrice || !lockPrice) {
    return null
  }

  if (closePrice === lockPrice) {
    return BetPosition.HOUSE
  }

  return closePrice > lockPrice ? BetPosition.BULL : BetPosition.BEAR
}

export const CHART_DOT_CLICK_EVENT = 'CHART_DOT_CLICK_EVENT'
