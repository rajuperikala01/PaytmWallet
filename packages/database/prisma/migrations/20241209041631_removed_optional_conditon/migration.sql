/*
  Warnings:

  - Made the column `reciverId` on table `WalletTransactions` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "WalletTransactions" ALTER COLUMN "reciverId" SET NOT NULL;
