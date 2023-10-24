import { prisma } from '.'
import { faker } from '@faker-js/faker'

const NUM_RECORDS = 10

;(async () => {
  try {
    // Seeding Users
    const users = []
    for (let i = 0; i < NUM_RECORDS; i++) {
      users.push({
        id: faker.string.uuid(),
        name: faker.internet.displayName(),
        email: faker.internet.email(),
        image: faker.image.avatar(),
        username: faker.internet.userName(),
        address: faker.finance.bitcoinAddress(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      })
    }
    await prisma.user.createMany({ data: users })

    // Seeding Account
    const accounts = users.map((user) => ({
      userId: user.id,
      type: faker.lorem.word(),
      provider: faker.company.buzzVerb(),
      providerAccountId: faker.string.uuid(),
    }))
    await prisma.account.createMany({ data: accounts })

    // Seeding Session
    const sessions = users.map((user) => ({
      userId: user.id,
      sessionToken: faker.string.alphanumeric(10),
      expires: faker.date.future(),
    }))
    await prisma.session.createMany({ data: sessions })

    // Seeding VerificationToken
    const verificationTokens = Array.from({ length: NUM_RECORDS }).map(() => ({
      identifier: faker.string.alphanumeric(8),
      token: faker.string.alphanumeric(15),
      expires: faker.date.future(),
    }))
    await prisma.verificationToken.createMany({ data: verificationTokens })

    // Seeding Rounds
    const rounds = Array.from({ length: NUM_RECORDS }).map(() => ({
      id: faker.string.uuid(),
      epoch: faker.number.int({ min: 0, max: 1000 }),
      position: faker.helpers.arrayElement(['BULL', 'BEAR']),
      failed: faker.datatype.boolean(),
      startAt: faker.date.recent(),
      startBlock: faker.number.int({ min: 0, max: 1000 }),
      startHash: faker.finance.bitcoinAddress(),
      lockAt: faker.date.future(),
      lockBlock: faker.number.int({ min: 0, max: 1000 }),
      lockHash: faker.finance.bitcoinAddress(),
      lockPrice: parseFloat(faker.finance.amount()),
      lockRoundId: faker.string.uuid(),
      closeAt: faker.date.future(),
      closeBlock: faker.number.int({ min: 0, max: 1000 }),
      closeHash: faker.finance.bitcoinAddress(),
      closePrice: parseFloat(faker.finance.amount()),
      closeRoundId: faker.string.uuid(),
      totalBets: faker.number.int({ min: 0, max: 1000 }),
      totalAmount: parseFloat(faker.finance.amount()),
      bullBets: faker.number.int({ min: 0, max: 1000 }),
      bullAmount: parseFloat(faker.finance.amount()),
      bearBets: faker.number.int({ min: 0, max: 1000 }),
      bearAmount: parseFloat(faker.finance.amount()),
    }))
    await prisma.round.createMany({ data: rounds })

    // Seeding Bets
    const bets = users.map((user, index) => ({
      userId: user.id,
      roundId: rounds[index].id,
      hash: faker.finance.bitcoinAddress(),
      amount: parseFloat(faker.finance.amount()),
      position: rounds[index].position,
      claimed: faker.datatype.boolean(),
      openedAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }))
    await prisma.bet.createMany({ data: bets })

    // Seeding Reward
    const rewards = users.map((user) => ({
      userId: user.id,
      points: faker.number.int({ min: 0, max: 1000 }),
      amount: parseFloat(faker.finance.amount()),
      epoch: faker.number.int({ min: 0, max: 1000 }),
      createdAt: faker.date.recent(),
    }))
    await prisma.reward.createMany({ data: rewards })

    // Seeding Referral
    const referrals = users.map((user) => ({
      userId: user.id,
      referralCode: faker.string.alphanumeric(10),
      used: faker.datatype.boolean(),
    }))
    await prisma.referral.createMany({ data: referrals })

    // Seeding Share
    const shares = users.map((user, index) => {
      const isBuy = faker.datatype.boolean()
      return {
        isBuy: isBuy,
        shareAmount: parseFloat(faker.finance.amount()),
        stethAmount: parseFloat(faker.finance.amount()),
        createdAt: faker.date.recent(),
        traderId: isBuy ? user.id : users[(index + 1) % NUM_RECORDS].id, // For demonstration
        subjectId: isBuy ? users[(index + 1) % NUM_RECORDS].id : user.id, // For demonstration
      }
    })
    await prisma.share.createMany({ data: shares })

    // Seeding ActivityLog
    const activityLogs = users.map((user) => ({
      userId: user.id,
      activityType: faker.helpers.arrayElement(['BET_PLACED', 'SHARE_BOUGHT', 'REWARD_EARNED']),
      points: faker.number.int(1000),
      occurredAt: faker.date.recent(),
    }))
    await prisma.activityLog.createMany({ data: activityLogs })
  } catch (error) {
    console.error(error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
})()
