"use client";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import PopUp from "./overlay";
import Loading2 from "./Loading2";
import Refresh from "./Refresh";
import PlusIcon from "./PlusIcon";
import Minus from "./Minus";

function BankCard({ userId }: { userId: number }) {
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [deposit, setDeposit] = useState<boolean>(false);

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
     shadow-sm shadow-gray-500"
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
        <div className="flex justify-center items-center gap-2">
          <div onClick={() => setDeposit(!deposit)} className="cursor-pointer">
            {deposit ? <Minus /> : <PlusIcon />}
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
      {deposit && (
        <div className="flex justify-center items-center text-sm">
          <form
            action=""
            className="flex justify-center items-center mt-5 w-11/12 gap-2"
          >
            <input
              type="number"
              className="basis-10/12 outline-none text-xs font-normal px-2 h-10 border focus:border-blue-500"
              placeholder="Enter amount to deposit in your account"
            />
            <button className="basis-1/6 bg-blue-950 px-3 py-2 text-stone-50 font-normal">
              Add
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default BankCard;
