import { Card } from "@repo/ui/card";

export default async function ({ amount }: { amount: number }) {
  return (
    <Card title={"Wallet"}>
      <div className="flex  gap-4 pt-6 border-b border-gray-400">
        <div>Available Balance: </div>{" "}
        <div>
          <span className="font-medium">{amount}</span> INR
        </div>
      </div>

      <div className="flex  pt-6 gap-4 border-b border-gray-400">
        <div>Total Balance:</div>
        <div>
          <span className="font-medium">{amount}</span> INR
        </div>
      </div>
    </Card>
  );
}
