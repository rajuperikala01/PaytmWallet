"use client";
import axios, { AxiosError } from "axios";
import { useSession } from "next-auth/react";

function BankLink({ userId }: { userId: string }) {
  const session = useSession();
  async function handleLinking() {
    try {
      const linked = await axios.post("/api/bank/accountLink", {
        id: parseInt(userId),
      });
      if (linked.status === 200) {
        alert("successfully linked your account with PayTm");
      }
    } catch (error: any) {
      if (error instanceof AxiosError) {
        if (error.code === "ECONNREFUSED" || error.code === "ENOTFOUND") {
          return alert("Cannot connect with the server");
        }
        if (error.status === 401) {
          return alert(error.response?.data.error || "Validation Error");
        }
        return alert(
          error.response?.data.error ||
            "An unexpected error Occurred.. Please try again"
        );
      }
      alert(error.response.data.error || "Unexpected Error");
    }
  }
  return (
    <div className="text-lg w-1/2">
      <button onClick={handleLinking}>Add Account</button>
    </div>
  );
}

export default BankLink;
