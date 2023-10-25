import { gql } from '@apollo/client'

export const DASBOARD_QUERY = gql`
  query DashboardData {
    rounds(take: 7, orderBy: { epoch: asc }) {
      id
      epoch
      closePrice
      lockPrice
    }
    topTraders: users(take: 12) {
      id
      image
      username
      address
      stats {
        netSTETH
        winRate
        totalBetsClaimed
        totalBets
      }
    }
  }
`

export const SHARE_QUERY = gql`
  query ShareData {
    me: shares(take: 10) {
      id
      isBuy
      shareAmount
      stethAmount
      createdAt
      subject {
        id
        address
        image
      }
      trader {
        id
        address
        image
      }
    }
    holders: shares(take: 10) {
      id
      isBuy
      shareAmount
      stethAmount
      createdAt
      subject {
        id
        address
        image
      }
      trader {
        id
        address
        image
      }
    }
    global: shares(take: 10) {
      id
      isBuy
      shareAmount
      stethAmount
      createdAt
      subject {
        id
        address
        image
      }
      trader {
        id
        address
        image
      }
    }
  }
`

export const PORTFOLIO_QUERY = gql`
  query PortfolioData($address: String) {
    portfolio: user(where: { address: $address }) {
      id
      username
      image
      address
      stats {
        id
        lastTransactionBlock
        totalBets
        totalBetsBull
        totalBetsBear
        totalSTETH
        totalSTETHBull
        totalSTETHBear
        totalBetsClaimed
        totalSTETHClaimed
        winRate
        averageSTETH
        netSTETH
        totalSharesHeld
        totalShareHolders
        totalRewards
        shareValue
        rank
        points
      }
    }
    shares(take: 10) {
      id
      isBuy
      shareAmount
      stethAmount
      createdAt
      subject {
        id
        address
        image
      }
      trader {
        id
        address
        image
      }
    }
    bets(take: 10) {
      id
      position
      round {
        id
        epoch
      }
      user {
        id
        stats {
          id
          netSTETH
        }
      }
    }
    holders: shares(take: 10) {
      id
      isBuy
      shareAmount
      stethAmount
      createdAt
      subject {
        id
        address
        image
      }
      trader {
        id
        address
        image
      }
    }
    holding: shares(take: 10, orderBy: { createdAt: desc }) {
      id
      isBuy
      shareAmount
      stethAmount
      createdAt
      subject {
        id
        address
        image
      }
      trader {
        id
        address
        image
      }
    }
    rewards {
      id
      amount
      createdAt
      user {
        id
        image
      }
    }
  }
`

export const REFERRAL_QUERY = gql`
  query ReferralData($userId: String) {
    referrals(where: { userId: { equals: $userId } }) {
      id
      used
      referralCode
    }
  }
`
