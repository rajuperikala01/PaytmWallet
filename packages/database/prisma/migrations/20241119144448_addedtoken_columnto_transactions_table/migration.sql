/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `Transactions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `token` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transactions" ADD COLUMN     "token" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Transactions_token_key" ON "Transactions"("token");
