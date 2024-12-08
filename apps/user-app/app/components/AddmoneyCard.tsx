"use client";

import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { useState } from "react";
import { TextInput } from "@repo/ui/textinput";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { Select } from "@repo/ui/select";

const SUPPORTED_BANK = {
  name: "PayTM Wallet",
  id: 100,
};

export const AddMoney = () => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [bank, setBank] = useState<number | null>(SUPPORTED_BANK.id);
  // Added loading state
  const router = useRouter();

  const handleTransaction = async () => {
    if (amount <= 0) {
      setError("Amount must be greater than zero");
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
      }
    } catch (error: any) {
      if (error instanceof AxiosError) {
        if (error.code === "ECONNREFUSED" || error.code === "ENOTFOUND") {
          setError("An unexpected error occurred. Please try again.");
        }
        if (error.status === 401) {
          setError(
            error.response?.data?.error.error.issues[0].message ||
              "An unexpected error occurred. Please try again."
          );
          return;
        }
        setError(
          error.response?.data?.error ||
            "An unexpected error occurred. Please try again."
        );
        return;
      }
      setError(
        error.response?.data?.error ||
          "An unexpected error occurred. Please try again."
      );
    }
  };

  return (
    <Card title="Add Money">
      {error && <div className="text-xl text-red-600">{error}</div>}
      <div className="w-full">
        <TextInput
          label="Amount"
          placeholder="Transaction Amount"
          onChange={(val) => setAmount(parseInt(val))}
          type="number"
          required={true}
        />
        <div className="py-2 text-left">Provider Bank</div>
        <select
          className="w-full outline-none p-2 text-gray-600 bg-stone-50"
          onChange={(val) => {
            setBank(parseInt(val.target.value));
          }}
        >
          <option value={SUPPORTED_BANK.id}>Paytm Payments Bank</option>
        </select>
        <div className="flex justify-center pt-4">
          <Button onClick={handleTransaction}>
            {loading ? "Processing..." : "Proceed"}
          </Button>
        </div>
      </div>
    </Card>
  );
};
