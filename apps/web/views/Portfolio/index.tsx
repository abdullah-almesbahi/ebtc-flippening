'use client'
import Image from 'next/image'
import { useState } from 'react'
import SharesTab from './components/SharesTab'
import TradesTab from './components/TradesTab'
import HoldersTab from './components/HoldersTab'
import HoldingTab from './components/HoldingTab'
import RewardsTab from './components/RewardsTab'
import { leaderboard as fakeDataLeaderboards } from '@/data/leaderboard'

const tabs = ['SHARES', 'TRADES', 'HOLDERS', 'HOLDING', 'REWARDS']

export default function Portofolio({ address }: { address?: string }): JSX.Element {
  const user = fakeDataLeaderboards.find((item) => item.address === address)
  const [getCurrentTab, setCurrentTab] = useState<string>('shares')

  // tab handler
  const tabHandler = (select: string) => {
    setCurrentTab(select)
  }

  const getTabInfo = () => {
    switch (getCurrentTab) {
      case 'shares':
        return <SharesTab />
      case 'trades':
        return <TradesTab />
      case 'holders':
        return <HoldersTab />
      case 'holding':
        return <HoldingTab />
      case 'rewards':
        return <RewardsTab />
      default:
        return <SharesTab />
    }
  }

  return (
    <section className="tf-section authors">
      <div className="ibthemes-container">
        <div className="flat-tabs tab-authors">
          <div className="author-profile flex">
            {user?.avatar ? (
              <div className="avatar-container">
                <Image
                  alt="Image"
                  className="avatar"
                  height={500}
                  src={user.avatar}
                  // style={{ height: '276px', width: '276px' }}
                  width={500}
                />
              </div>
            ) : null}
            <div className="infor-profile d-flex">
              <div className="profile-header">
                <p className="content">Rank: #344</p>
                {user?.username ? <h2 className="title"> {user.username}</h2> : null}
                <p className="content">Holding: 5</p>
                <p className="content">Holders: 3</p>
                <p className="content">Rewards:</p>
                <form>
                  <input className="inputcopy" defaultValue={user?.address} readOnly type="text" />
                  <button className="btn-copycode" type="button">
                    <i className="icon-fl-file-1" />
                  </button>
                </form>
              </div>
              <div className="profile-header">
                <p className="content">Portfolio: 8</p>
                <p className="content">Claimed rewards: 4</p>
                <p className="content">Points: 432</p>
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
