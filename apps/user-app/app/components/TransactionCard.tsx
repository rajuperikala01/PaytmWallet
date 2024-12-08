interface SenderTransaction {
  role: "sender";
  receiverName: string;
  receiverId: number;
  amount: number;
  createdAt: Date;
  tranStatus: string;
  id: number;
}

interface ReceiverTransaction {
  role: "receiver";
  senderName: string;
  senderId: number;
  amount: number;
  createdAt: Date;
  tranStatus: string;
  id: number;
}

type TransactionType = SenderTransaction | ReceiverTransaction;

interface TransactionCardProps {
  transaction: TransactionType;
}

const TransactionCard = ({ transaction }: any) => {
  console.log();

  // Type narrowing based on 'role'
  if (transaction.role === "sender") {
    // Here, TypeScript knows `transaction` is of type `SenderTransaction`
    const { receiverName, receiverId, amount, createdAt, tranStatus } =
      transaction;
    return (
      <div className="flex justify-between px-2 py-4 rounded-lg bg-stone-50">
        <div>
          <div>Sent To: {receiverName}</div>
          <div>{amount}</div>
          <div>{tranStatus}</div>
          <div>{new Date(createdAt).toLocaleString()}</div>
        </div>
      </div>
    );
  } else {
    // Here, TypeScript knows `transaction` is of type `ReceiverTransaction`
    const { senderName, senderId, amount, createdAt, tranStatus } = transaction;
    return (
      <div className="flex justify-between px-2 py-4 rounded-lg bg-stone-50">
        <div>
          <div>Received From: {senderName}</div>
          <div>{amount}</div>
          <div>{tranStatus}</div>
          <div>{new Date(createdAt).toLocaleString()}</div>
        </div>
      </div>
    );
  }
};

export default TransactionCard;
