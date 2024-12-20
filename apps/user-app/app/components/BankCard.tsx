"use client";

import { Button } from "@repo/ui/button";
import { useState } from "react";

function BankCard() {
  const [balance, setBalance] = useState<number | null>(null);
  return (
    <div
      className="bg-stone-50 w-[97%] lg:w-full px-3 mt-2 py-4 rounded-sm
     shadow-sm shadow-gray-500 flex justify-between items-center"
    >
      <div>
        Paytm <br />
        Payments Bank
      </div>
      {!balance ? (
        <button className="bg-blue-950 text-sm text-stone-50 py-2 px-4">
          get Balance
        </button>
      ) : (
        <div>Balance: {balance}</div>
      )}
    </div>
  );
}

export default BankCard;
