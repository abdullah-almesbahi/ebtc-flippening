import type { StateCreator } from 'zustand'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type FlippeningStore, HistoryFilter, FlippeningStatus, FlippeningChartView } from './types'

const initialState: FlippeningStore = {
  status: FlippeningStatus.INITIAL,
  chartView: FlippeningChartView.Chainlink,
  isLoading: false,
  isHistoryPaneOpen: false,
  isChartPaneOpen: false,
  isFetchingHistory: false,
  historyFilter: HistoryFilter.ALL,
  currentEpoch: 0,
  intervalSeconds: 300,
  minBetAmount: '10000000000000',
  bufferSeconds: 60,
  rounds: [],
  totalHistory: 0,
  currentHistoryPage: 1,
  hasHistoryLoaded: false,
  ledgers: {},
  claimableStatuses: {},
  setRounds: () => {},
  resetRounds: () => {},
}

export const useFlippeningStore = create<FlippeningStore>(
  persist(
    (set): FlippeningStore => ({
      ...initialState,
      setRounds: (data) => {
        set(() => ({
          rounds: data,
        }))
      },
      resetRounds: () => {
        set(() => initialState)
      },
    }),
    {
      name: `flippening`,
      // getStorage: () => localStorage,
      version: 0,
    },
  ) as StateCreator<FlippeningStore, [], [], FlippeningStore>,
)
