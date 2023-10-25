'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Keyboard, Mousewheel, FreeMode } from 'swiper'
import { useState } from 'react'
import useSwiper from '../hooks/useSwiper'
import RoundCard from './RoundCard'
import PostitionsPlaceholder from './PositionsPlaceholder'
import type { DashboardDataQuery } from '@/server/graphql/gen/graphql-types'

export default function Positions({ data }: { data?: DashboardDataQuery['rounds'] }): JSX.Element {
  const [isChangeTransition, setIsChangeTransition] = useState(false)
  // TODO: get current epoch from blockchain
  const currentEpoch = 10003
  const { setSwiper, swiper } = useSwiper()

  const previousEpoch = currentEpoch > 0 ? currentEpoch - 1 : currentEpoch
  const swiperIndex = data?.findIndex((round) => round.epoch === previousEpoch)

  return (
    <section className="tf-section live-bets home3 bg-style " style={{ paddingTop: 150 }}>
      <div className="ibthemes-container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-live-bets">
              <h2 className="tf-title text-left pb-15">Flippening Trade</h2>
            </div>
          </div>
          <div className="col-md-12">
            {data ? (
              <Swiper
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1300: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
                centeredSlides
                className="swiper-container carousel-overflow pt-24 auctions"
                freeMode={{ enabled: true, sticky: true, momentumRatio: 0.25, momentumVelocityRatio: 0.5 }}
                initialSlide={swiperIndex}
                keyboard
                modules={[Keyboard, Mousewheel, FreeMode, Pagination, Navigation]}
                mousewheel
                navigation={{
                  prevEl: '.live-bet-next',
                  nextEl: '.live-bet-right',
                }}
                onBeforeDestroy={() => {
                  // @ts-expect-error
                  setSwiper(null)
                }}
                onSwiper={setSwiper}
                resizeObserver
                slidesPerView="auto"
                spaceBetween={30}
              >
                <div className="swiper-pagination mg-t-6" />
                <div className="swiper-button-next live-bet-next btn-slide-next active" />
                <div className="swiper-button-prev live-bet-right btn-slide-prev" />
                {data.map((round) => (
                  <SwiperSlide key={round.epoch}>
                    {({ isActive }) => (
                      <RoundCard
                        currentEpoch={currentEpoch}
                        data={round}
                        isActive={isChangeTransition ? isActive : undefined}
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <PostitionsPlaceholder />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
