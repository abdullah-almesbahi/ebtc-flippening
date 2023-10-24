/*
  Warnings:

  - You are about to alter the column `amount` on the `Bet` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to alter the column `claimedSTETH` on the `Bet` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to alter the column `claimedNetSTETH` on the `Bet` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to alter the column `pnl` on the `Bet` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to alter the column `amount` on the `Reward` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to alter the column `lockPrice` on the `Round` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to alter the column `closePrice` on the `Round` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to alter the column `totalAmount` on the `Round` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to alter the column `bullAmount` on the `Round` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to alter the column `bearAmount` on the `Round` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to alter the column `shareAmount` on the `Share` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to alter the column `stethAmount` on the `Share` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to drop the column `averageSTETH` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastTransactionBlock` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `netSTETH` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `points` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `rank` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `shareValue` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `totalBets` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `totalBetsBear` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `totalBetsBull` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `totalBetsClaimed` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `totalRewards` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `totalSTETH` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `totalSTETHBear` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `totalSTETHBull` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `totalSTETHClaimed` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `totalShareHolders` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `totalSharesHeld` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `winRate` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[block]` on the table `Bet` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Bet" ADD COLUMN     "block" INTEGER,
ALTER COLUMN "amount" SET DATA TYPE BIGINT,
ALTER COLUMN "claimedSTETH" SET DATA TYPE BIGINT,
ALTER COLUMN "claimedNetSTETH" SET DATA TYPE BIGINT,
ALTER COLUMN "pnl" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "Reward" ALTER COLUMN "amount" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "Round" ALTER COLUMN "lockPrice" SET DATA TYPE BIGINT,
ALTER COLUMN "closePrice" SET DATA TYPE BIGINT,
ALTER COLUMN "totalAmount" SET DATA TYPE BIGINT,
ALTER COLUMN "bullAmount" SET DATA TYPE BIGINT,
ALTER COLUMN "bearAmount" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "Share" ALTER COLUMN "shareAmount" SET DATA TYPE BIGINT,
ALTER COLUMN "stethAmount" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "averageSTETH",
DROP COLUMN "lastTransactionBlock",
DROP COLUMN "netSTETH",
DROP COLUMN "points",
DROP COLUMN "rank",
DROP COLUMN "shareValue",
DROP COLUMN "totalBets",
DROP COLUMN "totalBetsBear",
DROP COLUMN "totalBetsBull",
DROP COLUMN "totalBetsClaimed",
DROP COLUMN "totalRewards",
DROP COLUMN "totalSTETH",
DROP COLUMN "totalSTETHBear",
DROP COLUMN "totalSTETHBull",
DROP COLUMN "totalSTETHClaimed",
DROP COLUMN "totalShareHolders",
DROP COLUMN "totalSharesHeld",
DROP COLUMN "winRate";

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
    "totalRewards" INTEGER NOT NULL DEFAULT 0,
    "shareValue" BIGINT NOT NULL DEFAULT 0,
    "rank" INTEGER NOT NULL DEFAULT 0,
    "points" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserStats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserStats_userId_key" ON "UserStats"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Bet_block_key" ON "Bet"("block");
