'use client'
import type { Dispatch } from 'react'
import { memo, createContext, useState, useMemo, useCallback } from 'react'
import type SwiperCore from 'swiper'

interface Context {
  swiper: SwiperCore
  setSwiper: Dispatch<React.SetStateAction<SwiperCore>>
  destroySwiper: () => void
}

export const SwiperContext = createContext<Context>(undefined)

function SwiperProvider({ children }) {
  const [swiper, setSwiper] = useState<SwiperCore>(null)

  const destroySwiper = useCallback(() => {
    if (swiper) {
      swiper.destroy()
      setSwiper(null)
    }
  }, [swiper])

  const providerValue = useMemo(() => ({ swiper, setSwiper, destroySwiper }), [swiper, destroySwiper])

  return <SwiperContext.Provider value={providerValue}>{children}</SwiperContext.Provider>
}

export default memo(SwiperProvider)
