/*
  Warnings:

  - Changed the type of `status` on the `OnRampTransaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Success', 'Failed', 'Processing');

-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('sent', 'received');

-- AlterTable
ALTER TABLE "OnRampTransaction" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL;

-- DropEnum
DROP TYPE "OnRampStatus";

-- CreateTable
CREATE TABLE "WalletTransactions" (
    "id" SERIAL NOT NULL,
    "status" "Status" NOT NULL,
    "senderId" INTEGER NOT NULL,
    "reciverId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WalletTransactions_pkey" PRIMARY KEY ("id")
);
