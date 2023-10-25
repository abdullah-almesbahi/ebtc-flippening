-- CreateEnum
CREATE TYPE "BetPosition" AS ENUM ('BULL', 'BEAR');

-- CreateEnum
CREATE TYPE "ActivityType" AS ENUM ('BET_PLACED', 'SHARE_BOUGHT', 'REWARD_EARNED');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "username" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserStats" (
    "id" TEXT NOT NULL,
    "lastTransactionBlock" INTEGER NOT NULL DEFAULT 0,
    "totalBets" INTEGER NOT NULL DEFAULT 0,
    "totalBetsBull" INTEGER NOT NULL DEFAULT 0,
    "totalBetsBear" INTEGER NOT NULL DEFAULT 0,
    "totalSTETH" BIGINT NOT NULL DEFAULT 0,
    "totalSTETHBull" BIGINT NOT NULL DEFAULT 0,
    "totalSTETHBear" BIGINT NOT NULL DEFAULT 0,
    "totalBetsClaimed" INTEGER NOT NULL DEFAULT 0,
    "totalSTETHClaimed" BIGINT NOT NULL DEFAULT 0,
    "winRate" BIGINT NOT NULL DEFAULT 0,
    "averageSTETH" BIGINT NOT NULL DEFAULT 0,
    "netSTETH" BIGINT NOT NULL DEFAULT 0,
    "totalSharesHeld" INTEGER NOT NULL DEFAULT 0,
    "totalShareHolders" INTEGER NOT NULL DEFAULT 0,
    "totalRewards" BIGINT NOT NULL DEFAULT 0,
    "shareValue" BIGINT NOT NULL DEFAULT 0,
    "rank" INTEGER NOT NULL DEFAULT 0,
    "points" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bet" (
    "id" TEXT NOT NULL,
    "hash" TEXT,
    "block" INTEGER,
    "amount" BIGINT NOT NULL,
    "position" "BetPosition" NOT NULL,
    "claimed" BOOLEAN NOT NULL,
    "claimedAt" TIMESTAMP(3),
    "claimedBlock" INTEGER,
    "claimedHash" TEXT,
    "claimedSTETH" BIGINT,
    "claimedNetSTETH" BIGINT,
    "outcome" TEXT,
    "pnl" BIGINT,
    "openedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "closedAt" TIMESTAMP(3),
    "userId" TEXT NOT NULL,
    "roundId" TEXT NOT NULL,

    CONSTRAINT "Bet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Round" (
    "id" TEXT NOT NULL,
    "epoch" INTEGER NOT NULL,
    "position" "BetPosition" NOT NULL,
    "failed" BOOLEAN NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL,
    "startBlock" INTEGER NOT NULL,
    "startHash" TEXT NOT NULL,
    "lockAt" TIMESTAMP(3) NOT NULL,
    "lockBlock" INTEGER NOT NULL,
    "lockHash" TEXT NOT NULL,
    "lockPrice" BIGINT NOT NULL,
    "lockRoundId" TEXT NOT NULL,
    "closeAt" TIMESTAMP(3) NOT NULL,
    "closeBlock" INTEGER NOT NULL,
    "closeHash" TEXT NOT NULL,
    "closePrice" BIGINT NOT NULL,
    "closeRoundId" TEXT NOT NULL,
    "totalBets" INTEGER NOT NULL,
    "totalAmount" BIGINT NOT NULL,
    "bullBets" INTEGER NOT NULL,
    "bullAmount" BIGINT NOT NULL,
    "bearBets" INTEGER NOT NULL,
    "bearAmount" BIGINT NOT NULL,

    CONSTRAINT "Round_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reward" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "amount" BIGINT NOT NULL,
    "epoch" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reward_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Referral" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "referralCode" TEXT NOT NULL,
    "used" BOOLEAN NOT NULL,

    CONSTRAINT "Referral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Share" (
    "id" TEXT NOT NULL,
    "isBuy" BOOLEAN NOT NULL,
    "shareAmount" BIGINT NOT NULL,
    "stethAmount" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "traderId" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Share_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "activityType" "ActivityType" NOT NULL,
    "points" INTEGER NOT NULL,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ActivityLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_address_key" ON "User"("address");

-- CreateIndex
CREATE UNIQUE INDEX "UserStats_userId_key" ON "UserStats"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Bet_hash_key" ON "Bet"("hash");

-- CreateIndex
CREATE UNIQUE INDEX "Bet_block_key" ON "Bet"("block");

-- CreateIndex
CREATE UNIQUE INDEX "Referral_referralCode_key" ON "Referral"("referralCode");
