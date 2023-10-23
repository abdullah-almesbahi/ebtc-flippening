'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Keyboard, Mousewheel, FreeMode } from 'swiper'
import { useEffect, useState } from 'react'
import useSwiper from '../hooks/useSwiper'
import RoundCard from './RoundCard'
import { rounds as fakeDataRounds } from '@/data/rounds'
import { useFlippeningStore } from '@/store/flippening'

export default function Positions(): JSX.Element {
  const [isChangeTransition, setIsChangeTransition] = useState(false)
  const { rounds, setRounds, currentEpoch } = useFlippeningStore()
  const { setSwiper, swiper } = useSwiper()

  const previousEpoch = currentEpoch > 0 ? currentEpoch - 1 : currentEpoch
  const swiperIndex = rounds.findIndex((round) => round.epoch === previousEpoch)

  useEffect(() => {
    setRounds(fakeDataRounds)
    useFlippeningStore.setState({ currentEpoch: 138619 })
  }, [])

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
              {rounds.map((round) => (
                <SwiperSlide key={round.epoch}>
                  {({ isActive }) => <RoundCard isActive={isChangeTransition ? isActive : null} round={round} />}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
