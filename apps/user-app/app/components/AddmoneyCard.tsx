"use client";
import { Card } from "@repo/ui/card";
import { useState } from "react";
import { TextInput } from "@repo/ui/textinput";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import PopUp from "./overlay";

const SUPPORTED_BANK = {
  name: "PayTM Wallet",
  id: 100,
};

export const AddMoney = () => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [bank, setBank] = useState<number | null>(SUPPORTED_BANK.id);
  const [showPopUp, setShowPopUP] = useState<boolean>(false);
  const router = useRouter();

  const handleTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
    if (amount <= 0) {
      setError("Amount must be greater than zero");
      setShowPopUP(true);
      return;
    }

    setLoading(true);
    setError(""); // Clear any previous errors

    try {
      const response = await axios.post("/api/addtoWallet", {
        amount,
        providerId: bank,
      });

      if (response.status === 200) {
        router.push("/dashboard");
      } else {
        setError("Transaction Failed. Please try again.");
        setShowPopUP(true);
      }
    } catch (error: any) {
      if (error instanceof AxiosError) {
        if (error.code === "ECONNREFUSED" || error.code === "ENOTFOUND") {
          setError("An unexpected error occurred. Please try again.");
        }
        setShowPopUP(true);
        if (error.status === 401) {
          setError(
            error.response?.data?.error.error.issues[0].message ||
              "An unexpected error occurred. Please try again."
          );
          setShowPopUP(true);
          return;
        }
        setError(
          error.response?.data?.error ||
            "An unexpected error occurred. Please try again."
        );
        setShowPopUP(true);
        return;
      }
      setError(
        error.response?.data?.error ||
          "An unexpected error occurred. Please try again."
      );
      setShowPopUP(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card title="Add Money">
      <div className="h-4">
        {showPopUp && (
          <div className="text-md text-red-600">
            <PopUp
              error={error}
              Closed={() => setShowPopUP(false)}
              open={showPopUp}
            />
          </div>
        )}
      </div>

      <form className="w-full" onSubmit={handleTransaction}>
        <TextInput
          label="Amount"
          placeholder="Transaction Amount"
          onChange={(val) => setAmount(parseInt(val))}
          type="number"
          required={true}
          disabled={showPopUp}
        />
        <div className="py-2 text-left font-semibold text-sm">
          Provider Bank
        </div>
        <select
          className="w-full outline-none p-2 text-gray-600 bg-stone-50"
          onChange={(val) => {
            setBank(parseInt(val.target.value));
          }}
        >
          <option value={SUPPORTED_BANK.id}>Paytm Payments Bank</option>
        </select>
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={showPopUp}
            className={`text-white bg-gray-800 whitespace-nowrap text-sm
            font-medium hover:bg-gray-900 focus:outline-none
            focus:ring-4 w-full focus:ring-gray-300 rounded-sm
            px-5 py-2 ${showPopUp ? "opacity-90" : "opacity-100"}`}
          >
            {loading ? "Processing..." : "Proceed"}
          </button>
        </div>
      </form>
    </Card>
  );
};
