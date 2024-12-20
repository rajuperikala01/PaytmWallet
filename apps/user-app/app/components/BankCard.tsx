"use client";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import PopUp from "./overlay";
import Loading2 from "./Loading2";
import Refresh from "./Refresh";
import { div } from "framer-motion/client";

function BankCard({ userId }: { userId: number }) {
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function getBalance() {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await axios.get(
        "http://localhost:3010/api/v1/getBalance",
        {
          params: { id: userId },
        }
      );
      if (response.status === 200) {
        setBalance(response.data.balance);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.error);
        setShowPopUp(true);
        return;
      }
      setError("Can't Able to fetch the Balance");
      setShowPopUp(true);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div
      className="bg-stone-50 w-[97%] lg:w-full px-3 mt-2 py-4 rounded-sm
     shadow-sm shadow-gray-500 text-lg font-semibold"
    >
      {showPopUp && (
        <PopUp
          message={error}
          open={showPopUp}
          Closed={() => {
            setShowPopUp(false);
          }}
          textSize="text-sm"
        />
      )}

      <div className="text-lg font-semibold mb-4">Your Accounts</div>

      <div className="flex justify-between items-center bg-stone-50 px-4 w-full">
        <div className="text-sm font-semibold">
          Paytm <br />
          Payments Bank
        </div>

        {!balance ? (
          <button
            className={`bg-blue-950 text-xs text-stone-50 ${loading ? "px-6 py-3" : "px-4 py-2"}`}
            onClick={getBalance}
          >
            {loading ? <Loading2 bg="white" /> : "Get Balance"}
          </button>
        ) : (
          <div>
            <div className="text-base font-medium flex gap-2 h-full">
              {balance}.00 INR
              <div onClick={getBalance} className="cursor-pointer">
                <Refresh />
              </div>
            </div>
            {loading && <Loading2 bg="blue-950" />}
          </div>
        )}
      </div>
    </div>
  );
}

export default BankCard;
