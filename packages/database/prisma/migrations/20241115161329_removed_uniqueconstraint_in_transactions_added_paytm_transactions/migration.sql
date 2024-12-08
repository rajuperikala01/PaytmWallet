-- DropIndex
DROP INDEX "Transactions_execBy_key";

-- CreateTable
CREATE TABLE "paytmTransactions" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "paytmTransactions_pkey" PRIMARY KEY ("id")
);
