import { getServerSession } from "next-auth";
import PersontoPerson from "../../components/P2pCard";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";
import prisma from "@repo/database/client";
import SuccessIcon from "../../components/SuccessIcon";
import FailedIcon from "../../components/FailedIcon";
import Processing from "../../components/Processing";
import { Card } from "@repo/ui/card";

interface TransactionSender {
  role: string;
  id: number;
  receiverName: string;
  receiverId: number;
  amount: number;
  createdAt: Date;
  tranStatus: string;
  senderName: undefined;
}

// Define the interface for the second shape of `tx`
interface TransactionReceiver {
  role: string;
  id: number;
  amount: number;
  createdAt: Date;
  tranStatus: string;
  senderName: string; // Exclude senderName
  senderId: number; // Exclude senderId
  receiverName: undefined;
}

// Union type for `tx`, combining the two interfaces
type Transaction = TransactionSender | TransactionReceiver;

interface TransactionType {
  amount: number;
  createdAt: Date;
  id: number;
  receiver: {
    id: number;
    name: string;
  };
  sender: {
    id: number;
    name: string;
  };
  senderId: number;
  reciverId: number;
  status: string;
}
export default async function () {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth/signin");
  }
  const response = await prisma.walletTransactions.findMany({
    where: {
      OR: [
        { senderId: Number(session.user.id) },
        { reciverId: Number(session.user.id) },
      ],
    },
    include: {
      sender: {
        select: {
          id: true,
          name: true,
        },
      },
      receiver: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    take: 6,
    orderBy: {
      createdAt: "desc",
    },
  });

  const transactions = response.map((tx: TransactionType) => {
    const sender = tx.senderId === parseInt(session.user.id);
    if (sender) {
      return {
        role: "sender",
        id: tx.id,
        receiverName: tx.receiver.name,
        receiverId: tx.reciverId,
        amount: tx.amount / 100,
        createdAt: tx.createdAt,
        tranStatus: tx.status,
      };
    }
    return {
      role: "receiver",
      senderName: tx.sender.name,
      id: tx.id,
      senderId: tx.senderId,
      amount: tx.amount / 100,
      createdAt: tx.createdAt,
      tranStatus: tx.status,
    };
  });
  return (
    <div
      className="absolute top-10 md:top-20 left-0 right-0 flex md:px-10
      lg:px-20 lg:gap-2 px-1 pt-10 flex-wrap"
    >
      <div className="basis-full md:basis-1/2">
        <PersontoPerson />
      </div>
      <div className="basis-full md:basis-[48%]">
        <Card title="Recent Transactions">
          <div className="flex flex-col gap-2">
            {transactions ? (
              transactions.map((tx: Transaction) => {
                if (tx.role === "receiver" && tx.tranStatus === "Failed") {
                  return;
                }
                return (
                  <div
                    className="flex justify-between bg-stone-50
                rounded-lg shadow-sm shadow-gray-400 items-center px-2 py-4 lg:p-4"
                    key={tx.id}
                  >
                    <div>
                      {tx.role === "sender" ? (
                        <div className="text-xs text-gray-500 flex items-center tracking-widest">
                          Sent to
                        </div>
                      ) : (
                        <div className="text-xs text-gray-500 tracking-widest">
                          Received from
                        </div>
                      )}
                      <div className="flex font-medium text-gray-700 text-sm lg:text-base">
                        {tx.role === "sender" ? tx.receiverName : tx.senderName}
                        {tx.tranStatus === "Success" && <SuccessIcon />}
                        {tx.tranStatus === "Failed" && <FailedIcon />}
                        {tx.tranStatus === "Processing" && <Processing />}
                      </div>
                    </div>
                    <div className="text-end text-gray-500">
                      <div
                        className={`${
                          tx.role === "sender" &&
                          tx.tranStatus !== "Failed" &&
                          tx.tranStatus !== "Processing" &&
                          "text-red-500"
                        } font-medium text-sm lg:text-base ${
                          tx.role === "receiver" &&
                          tx.tranStatus !== "Failed" &&
                          tx.tranStatus !== "Processing" &&
                          "text-green-500"
                        }`}
                      >
                        {tx.role === "sender" ? -tx.amount : `+${tx.amount}`}
                      </div>
                      <div className="text-slate-600 text-xs">
                        {new Date(tx.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}{" "}
                        {new Date(tx.createdAt).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center">No transactions yet</div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
