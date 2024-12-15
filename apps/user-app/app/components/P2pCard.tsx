"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { p2pTransfer } from "@repo/validation/bankschemas";
import axios, { AxiosError } from "axios";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import PopUp from "./overlay";

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
  const [transactions, setTransactions] = useState([]);
  const [showPopUp, setShowPopUP] = useState<boolean>(false);
  const router = useRouter();

  async function Transfer(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const validatedData = p2pTransfer.safeParse(data);
    if (validatedData.error) {
      console.log(validatedData.error.issues[0]?.message);
      setError(validatedData.error.issues[0]?.message || "Validation Error");
      setShowPopUP(true);
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
          setShowPopUP(true);
        }
        if (error.status === 401) {
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
        return;
      }
      setError(
        error.response?.data?.error ||
          "An unexpected error occurred. Please try again."
      );
      setShowPopUP(true);
    } finally {
      setProcessing(false);
    }
  }
  async function getTransactions() {
    const response = await axios.get("/api/getTransactions");
    console.log(response);
  }
  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <div>
      {showPopUp && (
        <PopUp
          error={error}
          Closed={() => setShowPopUP(false)}
          open={showPopUp}
        />
      )}
      <form className="basis-full md:basis-1/2" onSubmit={Transfer}>
        <Card title="Transfer">
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
              disabled={showPopUp}
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
              disabled={showPopUp}
            />
          </div>

          <div className="mt-10 md:mt-5">
            <button
              type="submit"
              disabled={showPopUp}
              className={`text-white bg-gray-800 whitespace-nowrap text-sm
               font-medium hover:bg-gray-900 focus:outline-none
                focus:ring-4 w-full focus:ring-gray-300 rounded-sm 
                 px-5 py-2 ${showPopUp ? "opacity-90" : "opacity-100"}`}
            >
              {processing ? "Processing" : "Send"}
            </button>
          </div>
        </Card>
      </form>
    </div>
  );
}

export default PersontoPerson;
