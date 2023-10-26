/*
  Warnings:

  - A unique constraint covering the columns `[referredUserId]` on the table `Referral` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[referredByReferralId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Referral" ADD COLUMN     "referredUserId" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "referredByReferralId" TEXT,
ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "Referral_referredUserId_key" ON "Referral"("referredUserId");

-- CreateIndex
CREATE UNIQUE INDEX "User_referredByReferralId_key" ON "User"("referredByReferralId");
