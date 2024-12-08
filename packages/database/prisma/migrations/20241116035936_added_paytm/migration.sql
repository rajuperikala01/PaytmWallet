/*
  Warnings:

  - You are about to drop the `Balance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Merchant` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `customerId` to the `paytmTransactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Balance" DROP CONSTRAINT "Balance_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Balance" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "paytmTransactions" ADD COLUMN     "customerId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Balance";

-- DropTable
DROP TABLE "Merchant";

-- AddForeignKey
ALTER TABLE "paytmTransactions" ADD CONSTRAINT "paytmTransactions_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("customerId") ON DELETE CASCADE ON UPDATE CASCADE;
