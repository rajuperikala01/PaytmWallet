import prisma from "@repo/database/client";
import { AddMoney } from "../../components/AddmoneyCard";
import BalanceCard from "../../components/BalanceCard";
import { OnRampTransactions } from "../../components/OnRampStatus";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";
import PopUp from "../../components/overlay";
import BankLink from "../../components/BankLink";

async function getBalance() {
  const session = await getServerSession(authOptions);
  if (session) {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(session?.user?.id),
      },
    });
    return {
      amount: (user?.Balance || 0) / 100,
    };
  } else {
    redirect("/auth/signin");
  }
}

async function getOnRampTransactions() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(session?.user?.id),
    },
    orderBy: {
      startTime: "desc",
    },
    take: 5,
  });
  return txns.map((t) => ({
    time: t.startTime,
    amount: t.amount,
    status: t.status,
    provider: t.provider,
    id: t.id,
  }));
}

export default async function () {
  const transactions = await getOnRampTransactions();
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth/signin");
  }
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(session?.user?.id),
    },
  });

  const balance = user && user?.Balance / 100;
  return (
    <div className="md:px-10 absolute top-20 left-0 right-0 pt-5">
      {/* <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
        Add to Wallet
      </div> */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4 p-2 md:mt-4">
        <div className="md:col-start-1 md:col-end-3 sm:pt-10">
          <AddMoney />
        </div>
        <div className="md:col-start-3 md:col-end-6">
          <div className="lg:hidden">
            <BankLink userId={Number(session.user.id)} />
          </div>
          <BalanceCard amount={balance || 0} />

          <div className="">
            <OnRampTransactions transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
}
