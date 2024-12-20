"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function WalletCard({ id, amount }: { id: string; amount: number }) {
  const [balance, setBalance] = useState<number>(amount);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  async function getBalance() {
    const response = await axios.get(`/api/getBalance?id=${id}`);
    if (response.status === 200) {
      return setBalance(response.data.Balance);
    }
    return;
  }
  useEffect(() => {
    getBalance();
  }, []);

  return (
    <div
      className="bg-stone-50 w-[97%] lg:w-full px-3 sm:px-6 mt-2 py-4 rounded-sm
     shadow-sm shadow-gray-500"
    >
      <div
        className="basis-1/4 text-blue-950
                 flex justify-between items-center"
      >
        <div className="text-xl font-semibold basis-3/5 sm:basis-4/5">
          Wallet
          <div className="text-sm font-medium flex items-center gap-2 whitespace-nowrap">
            Available Balance:{" "}
            <span className="font-medium text-base">{balance}.00</span> INR
          </div>
          <div className="text-sm font-medium flex items-center gap-2 whitespace-nowrap">
            Total Balance:{" "}
            <span className="font-medium text-base">{balance}.00</span> INR
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletCard;
