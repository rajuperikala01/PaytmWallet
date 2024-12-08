-- CreateEnum
CREATE TYPE "accType" AS ENUM ('savings', 'current', 'loan');

-- CreateEnum
CREATE TYPE "transType" AS ENUM ('withdrawl', 'deposit', 'transfer');

-- CreateEnum
CREATE TYPE "transStat" AS ENUM ('Success', 'Failed', 'Processing');

-- CreateTable
CREATE TABLE "Customer" (
    "customerId" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customerId")
);

-- CreateTable
CREATE TABLE "Transactions" (
    "id" SERIAL NOT NULL,
    "transType" "transType" NOT NULL,
    "execBy" INTEGER NOT NULL,
    "transStatus" "transStat" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_execBy_fkey" FOREIGN KEY ("execBy") REFERENCES "Customer"("customerId") ON DELETE CASCADE ON UPDATE CASCADE;
