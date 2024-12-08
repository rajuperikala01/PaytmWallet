-- AddForeignKey
ALTER TABLE "WalletTransactions" ADD CONSTRAINT "WalletTransactions_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WalletTransactions" ADD CONSTRAINT "WalletTransactions_reciverId_fkey" FOREIGN KEY ("reciverId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
