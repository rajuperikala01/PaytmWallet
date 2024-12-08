"use client";

import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { useState, useEffect } from "react";
import { p2pTransfer } from "@repo/validation/bankschemas";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
interface objectP2p {
  to: string;
  amount: number;
}
function PersontoPerson() {
  const [data, setData] = useState<objectP2p>({
    to: "",
    amount: 0,
  });
  const [error, setError] = useState<string>("");
  const [processing, setProcessing] = useState<boolean>(false);
  const router = useRouter();

  async function Transfer(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const validatedData = p2pTransfer.safeParse(data);
    if (validatedData.error) {
      console.log(validatedData.error.issues[0]?.message);
      setError(validatedData.error.issues[0]?.message || "Validation Error");
      return;
    }

    setProcessing(true);
    try {
      const response = await axios.post("/api/payments/send", {
        to: data.to,
        amount: data.amount,
      });
      if (response.status === 200) {
        router.push("/success");
      }
      setProcessing(false);
    } catch (error: any) {
      if (error instanceof AxiosError) {
        if (error.code === "ECONNREFUSED" || error.code === "ENOTFOUND") {
          setError("An unexpected error occurred. Please try again.");
        }
        if (error.status === 401) {
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
        return;
      }
      setError(
        error.response?.data?.error ||
          "An unexpected error occurred. Please try again."
      );
    } finally {
      setProcessing(false);
    }
  }
  async function getTransactions() {
    const response = await axios,gt
  }
  
  
  return (
    <div className="absolute top-20 left-0 right-0 grid grid-cols-1 md:grid-cols-3 md:px-10 lg:grid-cols-3 lg:px-20 lg:gap-5 px-1 pt-10">
      <form
        className="md:col-start-1 md:col-end-3 lg:col-start-1 lg:col-end-3 lg:px-20"
        onSubmit={Transfer}
      >
        <Card title="Transfer">
          {error.length > 0 && <div className="text-red-700">{error}</div>}

          <div>
            <TextInput
              label="Mobile"
              placeholder="Enter Mobile"
              onChange={(val) =>
                setData({
                  ...data,
                  to: val,
                })
              }
              type="text"
              required={true}
            />
          </div>
          <div>
            <TextInput
              label="Amount"
              placeholder="Enter Amount"
              onChange={(val) =>
                setData({
                  ...data,
                  amount: parseInt(val),
                })
              }
              type="number"
              required={true}
            />
          </div>

          <div className="mt-10 md:mt-5">
            <button
              type="submit"
              className="text-white bg-gray-800 whitespace-nowrap text-sm font-medium hover:bg-gray-900 focus:outline-none focus:ring-4 w-full focus:ring-gray-300 rounded-sm px-5 py-2"
            >
              {processing ? "Processing" : "Send"}
            </button>
          </div>
        </Card>
      </form>
      <div className="md:col-start-3 md:col-end-4 hidden md:grid lg:col-start-3 lg:col-end-4">
        <Card title="Recent transactions"></Card>
      </div>
    </div>
  );
}

export default PersontoPerson;
