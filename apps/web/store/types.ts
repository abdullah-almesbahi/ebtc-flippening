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

export interface User {
  id: string
  address: string
  username: string
  avatar: string
  createdAt: number
  updatedAt: number
  block: number
  totalBets: number
  totalBetsBull: number
  totalBetsBear: number
  totalSTETH: number
  totalSTETHBull: number
  totalSTETHBear: number
  totalBetsClaimed: number
  totalSTETHClaimed: number
  winRate: number
  averageSTETH: number
  netSTETH: number
  bets?: Bet[]
}

export interface Bet {
  id?: string
  hash?: string
  amount: number
  position: BetPosition
  claimed: boolean
  claimedAt: number
  claimedBlock: number
  claimedHash: string
  claimedBNB: number
  claimedNetBNB: number
  createdAt: number
  updatedAt: number
  user?: User
  round?: Round
}

export interface Round {
  id: string
  epoch: number
  position: BetPosition
  failed: boolean
  startAt: number
  startBlock: number
  startHash: string
  lockAt: number
  lockBlock: number
  lockHash: string
  lockPrice: number
  lockRoundId: string
  closeAt: number
  closeBlock: number
  closeHash: string
  closePrice: number
  closeRoundId: string
  totalBets: number
  totalAmount: number
  bullBets: number
  bullAmount: number
  bearBets: number
  bearAmount: number
  bets?: Bet[]
}

export interface Reward {
  pfpUrl: string
  createdAt: number
  rewardsAmount: string
}
export interface Holders {
  username: string
  address: string
  pfpUrl: string
  shareAmount: string
  createdAt: number
}

interface TraderSubject {
  address: string
  pfpUrl: string
  username: string
  name: string
}

export interface Share {
  trader: TraderSubject
  subject: TraderSubject
  isBuy: boolean
  shareAmount: string
  ethAmount: string
  createdAt: number
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
  history: Bet[]
  holders: Holders[]
  holding: Holders[]
  rewards: Reward[]
  shares: Share[]
  totalHistory: number
  currentHistoryPage: number
  hasHistoryLoaded: boolean
  ledgers?: LedgerData
  claimableStatuses: Record<string, boolean>
  leaderboard: {
    selectedAddress: null | string
    loadingState: string
    filters: LeaderboardFilter
    skip: number
    hasMoreResults: boolean
    addressResults: Record<string, null | User>
    results: User[]
  }
  setRounds: (data: NodeRound[]) => void
  resetRounds: () => void
}
