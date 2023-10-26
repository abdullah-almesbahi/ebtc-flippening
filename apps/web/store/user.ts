import type { StateCreator } from 'zustand'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type UserStore } from './types'

const initialState: UserStore = {
  user: undefined,
  isUserLoggedIn: false,
  setUser: () => {},
  resetUser: () => {},
}

export const useUserStore = create<UserStore>(
  persist(
    (set): UserStore => ({
      ...initialState,
      setUser: (data) => {
        set(() => ({
          user: data,
          isUserLoggedIn: data.address !== undefined && data.username !== null,
        }))
      },
      resetUser: () => {
        set(() => initialState)
      },
    }),
    {
      name: `user`,
      version: 0,
    },
  ) as StateCreator<UserStore, [], [], UserStore>,
)
