import type { Round, User } from '@/server/graphql/gen/graphql-types'

export enum BetPosition {
  BULL = 'Bull',
  BEAR = 'Bear',
  HOUSE = 'House',
}

export enum FlippeningStatus {
  INITIAL = 'initial',
  LIVE = 'live',
  PAUSED = 'paused',
  ERROR = 'error',
}

export enum FlippeningChartView {
  TradingView = 'TradingView',
  Chainlink = 'Chainlink Oracle',
}

export enum HistoryFilter {
  ALL = 'all',
  COLLECTED = 'collected',
  UNCOLLECTED = 'uncollected',
}

export type LedgerData = Record<string, Record<string, ReduxNodeLedger>>
export interface ReduxNodeLedger {
  position: BetPosition
  amount: string
  claimed: boolean
}

export type LeaderboardFilterTimePeriod = '1d' | '7d' | '1m' | 'all'

export interface LeaderboardFilter {
  address?: null | string
  orderBy?: string
  timePeriod?: LeaderboardFilterTimePeriod
}

export interface NodeRound {
  epoch: number
  startTimestamp: number | null
  lockTimestamp: number | null
  closeTimestamp: number | null
  lockPrice: string | null
  closePrice: string | null
  totalAmount: string | null
  bullAmount: string | null
  bearAmount: string | null
  rewardBaseCalAmount: string | null
  rewardAmount: string | null
  oracleCalled: boolean
  closeOracleId: string | null
  lockOracleId: string | null
}

export interface FlippeningStore {
  rounds: NodeRound[]
  status: FlippeningStatus
  isLoading: boolean
  isHistoryPaneOpen: boolean
  chartView: FlippeningChartView
  isChartPaneOpen: boolean
  isFetchingHistory: boolean
  historyFilter: HistoryFilter
  currentEpoch: number
  intervalSeconds: number
  minBetAmount: string
  bufferSeconds: number
  totalHistory: number
  currentHistoryPage: number
  hasHistoryLoaded: boolean
  ledgers?: LedgerData
  claimableStatuses: Record<string, boolean>
  setRounds: (data: NodeRound[]) => void
  resetRounds: () => void
}

export interface RoundStore {
  rounds: Round[]
  loading: string
  setRounds: (data: Round[]) => void
  resetRounds: () => void
}
export interface UserStore {
  user?: User
  isUserLoggedIn: boolean
  setUser: (data: User) => void
  resetUser: () => void
}
