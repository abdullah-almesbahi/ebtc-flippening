'use client'
import Image from 'next/image'
import { useState } from 'react'
import SharesTab from './components/SharesTab'
import TradesTab from './components/TradesTab'
import HoldersTab from './components/HoldersTab'
import HoldingTab from './components/HoldingTab'
import RewardsTab from './components/RewardsTab'
import { usePortfolioDataQuery } from '@/server/graphql/gen/graphql-types'
import { weiToEth } from '@/utils/format'
import { rewardTokenSymbol } from '@/utils/constants'

const tabs = ['SHARES', 'TRADES', 'HOLDERS', 'HOLDING', 'REWARDS']

export default function Portfolio({ address }: { address?: string }): JSX.Element {
  const { data } = usePortfolioDataQuery({
    variables: {
      address,
    },
  })

  const [getCurrentTab, setCurrentTab] = useState<string>('shares')

  // tab handler
  const tabHandler = (select: string) => {
    setCurrentTab(select)
  }

  const getTabInfo = () => {
    switch (getCurrentTab) {
      case 'shares':
        return <SharesTab data={data?.shares} />
      case 'trades':
        return <TradesTab data={data?.bets} />
      case 'holders':
        return <HoldersTab data={data?.holders} />
      case 'holding':
        return <HoldingTab data={data?.holding} />
      case 'rewards':
        return <RewardsTab data={data?.rewards} />
      default:
        return <SharesTab />
    }
  }

  console.log('eee', typeof data?.portfolio?.stats?.totalRewards)

  return (
    <section className="tf-section authors">
      <div className="ibthemes-container">
        <div className="flat-tabs tab-authors">
          <div className="author-profile flex">
            {data?.portfolio?.image ? (
              <div className="avatar-container">
                <Image
                  alt="Image"
                  className="avatar"
                  height={500}
                  src={data.portfolio.image}
                  // style={{ height: '276px', width: '276px' }}
                  width={500}
                />
              </div>
            ) : null}
            <div className="infor-profile d-flex">
              <div className="profile-header">
                <p className="content">Rank: #{data?.portfolio?.stats?.rank}</p>
                {data?.portfolio?.username ? <h2 className="title">@{data?.portfolio?.username}</h2> : null}
                <p className="content">Holding: {data?.portfolio?.stats?.totalSharesHeld}</p>
                <p className="content">Holders: {data?.portfolio?.stats?.totalShareHolders}</p>
                <p className="content">
                  Rewards: {weiToEth(data?.portfolio?.stats?.totalRewards).toString()} {rewardTokenSymbol}
                </p>
                <form>
                  <input className="inputcopy" defaultValue={data?.portfolio?.address || ''} readOnly type="text" />
                  <button className="btn-copycode" type="button">
                    <i className="icon-fl-file-1" />
                  </button>
                </form>
              </div>
              <div className="profile-header">
                <p className="content">Share Value: {weiToEth(data?.portfolio?.stats?.shareValue).toString()} ETH</p>
                <p className="content">
                  Claimed rewards: {weiToEth(data?.portfolio?.stats?.totalRewards).toString()} {rewardTokenSymbol}
                </p>
                <p className="content">Points: {data?.portfolio?.stats?.points}</p>
                <p className="content">Shares: 1</p>
                <p className="content">Market price: 666</p>
              </div>
            </div>
            <div className="widget-social style-3 flex-column">
              <div className="social-icons">
                <ul>
                  <li>
                    <a>
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="style-2">
                    <a>
                      <i className="fab fa-telegram-plane" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="btn-profile">
                <button
                  className="btn btn-success rounded-pill"
                  data-bs-target="#popup_buy_share"
                  data-bs-toggle="modal"
                >
                  Buy Shares
                </button>
                <button
                  className="btn btn-danger rounded-pill ml-10"
                  data-bs-target="#popup_sell_share"
                  data-bs-toggle="modal"
                >
                  Sell Shares
                </button>
              </div>
            </div>
          </div>
          <ul className="menu-tab flex">
            {tabs.map((tab, index) => (
              <li
                className={`tablinks ${tab.toLocaleLowerCase().includes(getCurrentTab) ? 'active' : ''}`}
                key={index}
                onClick={() => {
                  tabHandler(tab.toLocaleLowerCase())
                }}
              >
                {tab}
              </li>
            ))}
          </ul>
          {getTabInfo()}
        </div>
      </div>
    </section>
  )
}
