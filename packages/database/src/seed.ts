import 'reflect-metadata'
import { prisma } from '.'
import { faker } from '@faker-js/faker'

const NUM_RECORDS = 10
const blockOptions = { min: 10000, max: 100000 }
function generateDecimalInWei() {
  // Generate a float between 0.002 and 100
  const floatVal = faker.number.float({
    min: 0.002,
    max: 100,
    precision: 0.001, // This ensures values like 0.002 can be generated
  })

  // Convert the float value from ETH to wei (1 ETH = 10^18 wei)
  const weiVal = BigInt(Math.round(floatVal * 1e18))

  // Return the value in wei as a string
  return parseFloat(weiVal.toString()).toFixed(0)
}

;(async () => {
  try {
    // Seeding Users
    const users = []

    for (let i = 0; i < NUM_RECORDS; i++) {
      const fullName = faker.person.fullName()
      users.push({
        id: faker.string.uuid(),
        name: fullName,
        email: faker.internet.email(),
        emailVerified: faker.date.recent(),
        image: faker.image.avatar(),
        username: faker.internet.userName({ firstName: fullName.split(' ')[0], lastName: fullName.split(' ')[1] }),
        address: faker.finance.ethereumAddress(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      })
    }
    await prisma.user.createMany({ data: users })

    // User stats
    const userStats = users.map((user) => ({
      userId: user.id,
      lastTransactionBlock: faker.number.int(blockOptions),
      totalBets: faker.number.int({ min: 0, max: 1000 }),
      totalBetsBull: faker.number.int({ min: 0, max: 1000 }),
      totalBetsBear: faker.number.int({ min: 0, max: 1000 }),
      totalSTETH: generateDecimalInWei(),
      totalSTETHBull: generateDecimalInWei(),
      totalSTETHBear: generateDecimalInWei(),
      totalBetsClaimed: faker.number.int({ min: 0, max: 1000 }),
      totalSTETHClaimed: generateDecimalInWei(),
      winRate: faker.number.float({ min: 0, max: 1 }),
      averageSTETH: generateDecimalInWei(),
      netSTETH: generateDecimalInWei(),
      totalSharesHeld: faker.number.int({ min: 0, max: 1000 }),
      totalShareHolders: faker.number.int({ min: 0, max: 1000 }),
      totalRewards: generateDecimalInWei(),
      shareValue: generateDecimalInWei(),
      rank: faker.number.int({ min: 0, max: 1000 }),
      points: faker.number.int({ min: 0, max: 1000 }),
    }))

    await prisma.userStats.createMany({ data: userStats })

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
    let epoch = 9999
    const rounds = Array.from({ length: NUM_RECORDS }).map(() => {
      epoch++
      return {
        id: faker.string.uuid(),
        epoch: epoch,
        position: faker.helpers.arrayElement(['BULL', 'BEAR']),
        failed: faker.datatype.boolean(),
        startAt: faker.date.recent(),
        startBlock: faker.number.int(blockOptions),
        startHash: faker.string.sample(64),
        lockAt: faker.date.future(),
        lockBlock: faker.number.int(blockOptions),
        lockHash: faker.string.sample(64),
        lockPrice: epoch >= 10003 ? '0.0' : generateDecimalInWei(),
        lockRoundId: faker.string.uuid(),
        closeAt: faker.date.future(),
        closeBlock: faker.number.int(blockOptions),
        closeHash: faker.string.sample(64),
        closePrice: epoch >= 10002 ? '0.0' : generateDecimalInWei(),
        closeRoundId: faker.string.uuid(),
        totalBets: faker.number.int({ min: 0, max: 1000 }),
        totalAmount: generateDecimalInWei(),
        bullBets: faker.number.int({ min: 0, max: 1000 }),
        bullAmount: generateDecimalInWei(),
        bearBets: faker.number.int({ min: 0, max: 1000 }),
        bearAmount: generateDecimalInWei(),
      }
    })
    await prisma.round.createMany({ data: rounds })

    // model Bet {
    //   id              String      @id @default(cuid())
    //   hash            String?     @unique // Transaction hash
    //   block           Int?        @unique // Block number
    //   amount          BigInt // Amount of stSTETH
    //   position        BetPosition // Position of the bet
    //   claimed         Boolean // Whether the bet is claimed
    //   claimedAt       DateTime? // Date of the claim
    //   claimedBlock    Int? // Block number of the claim
    //   claimedHash     String? // Transaction hash of the claim
    //   claimedSTETH    BigInt? // Amount of stSTETH claimed
    //   claimedNetSTETH BigInt? // Net stSTETH claimed
    //   outcome         String? // can be "win", "loss", or "ongoing"
    //   pnl             BigInt? // Profit and loss
    //   openedAt        DateTime    @default(now())
    //   updatedAt       DateTime    @updatedAt
    //   closedAt        DateTime? // Date of the close
    //   userId          String
    //   roundId         String
    //   user            User        @relation(fields: [userId], references: [id])
    //   round           Round       @relation(fields: [roundId], references: [id])
    // }

    // Seeding Bets
    const bets = users.map((user, index) => {
      const claimed = faker.datatype.boolean()
      return {
        id: faker.string.uuid(),
        hash: faker.string.sample(64),
        block: faker.number.int(blockOptions),
        amount: generateDecimalInWei(),
        position: rounds[index].position,
        claimed: claimed,
        claimedAt: claimed ? faker.date.recent() : null,
        claimedBlock: claimed ? faker.number.int(blockOptions) : null,
        claimedHash: claimed ? faker.string.sample(64) : null,
        claimedSTETH: claimed ? generateDecimalInWei() : null,
        claimedNetSTETH: claimed ? generateDecimalInWei() : null,
        outcome: faker.helpers.arrayElement(['win', 'loss', 'ongoing']),
        pnl: generateDecimalInWei(),
        openedAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        closedAt: faker.date.recent(),
        userId: user.id,
        roundId: rounds[index].id,
      }
    })

    await prisma.bet.createMany({ data: bets })

    // Seeding Reward
    const rewards = users.map((user) => ({
      userId: user.id,
      points: faker.number.int({ min: 0, max: 1000 }),
      amount: generateDecimalInWei(),
      block: faker.number.int(blockOptions),
      hash: faker.string.sample(64),
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
        shareAmount: generateDecimalInWei(),
        stethAmount: generateDecimalInWei(),
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
