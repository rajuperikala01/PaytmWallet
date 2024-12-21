"use client";
import axios, { AxiosError } from "axios";
import { FormEvent, useEffect, useRef, useState } from "react";
import PopUp from "./overlay";
import Loading2 from "./Loading2";
import Refresh from "./Refresh";
import PlusIcon from "./PlusIcon";
import Minus from "./Minus";
import dotenv from "dotenv";

function BankCard({ userId }: { userId: number }) {
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [deposit, setDeposit] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>();
  const [loading2, setLoading2] = useState<boolean>(false);
  const input = useRef();

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
        console.log(error);
        if (error.code === "ERR_NETWORK") {
          setError("Cannot able to connect with the Server");
          setShowPopUp(true);
          return;
        }
        setError(error.response?.data.error);
        setShowPopUp(true);
        return;
      }
      setError("Can't Able to fetch the Balance");
      setShowPopUp(true);
    } finally {
      setLoading(false);
      setAmount(0);
    }
  }

  async function Deposit(e: FormEvent) {
    e.preventDefault();
    if (!amount || amount < 1) {
      setError("Please enter a valid number");
      setShowPopUp(true);
      return;
    }
    try {
      setLoading2(true);

      await new Promise((resolve) => setTimeout(resolve, 1500));
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BANK_URL}/deposit`,
        {
          id: userId,
          amount: amount,
        }
      );

      if (response.status === 200) {
        setError(`Successfully deposited ${amount} to your account`);
        setShowPopUp(true);

        return;
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
        if (error.code === "ERR_NETWORK") {
          setError("Cannot able to connect with the Server");
          setShowPopUp(true);
          return;
        }

        setError(error.response?.data.error);
        setShowPopUp(true);
        return;
      }
      setError("An unexpected error occurred");
      setShowPopUp(true);
      return;
    } finally {
      setLoading2(false);
      setAmount(0);
    }
  }
  return (
    <div
      className="bg-stone-50 w-[97%] lg:w-full px-3 mt-2 py-4 rounded-sm sm:px-4
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

      <div className="text-lg font-semibold mb-1 text-blue-500">
        Your Accounts
      </div>

      <div className="flex justify-between items-center bg-stone-50 px-1 w-full">
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
            onSubmit={Deposit}
            className="flex justify-center items-center mt-5 w-11/12 gap-2"
          >
            <input
              type="number"
              className="basis-10/12 outline-none text-xs font-normal px-2 h-10 border focus:border-blue-500"
              placeholder="Enter amount to deposit in your account"
              required
              onChange={(e) => setAmount(parseInt(e.target.value))}
              value={amount}
            />
            <button
              type="submit"
              className="basis-1/6 bg-blue-950 px-3 py-2 text-stone-50 font-normal"
            >
              {loading2 ? <Loading2 bg="stone-50" /> : "Deposit"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default BankCard;
