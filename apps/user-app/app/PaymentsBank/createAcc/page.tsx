"use client";
import { TextInput } from "@repo/ui/textinput";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { createAccountSchema } from "@repo/validation/bankschemas";

interface customer {
  email: string;
  name: string;
  mobile: string;
  initialBalance: number;
}

function CreateAcc() {
  const [error, setError] = useState<string | null>(null);
  const [customerDetails, setcustomerDetails] = useState<customer>({
    email: "",
    name: "",
    mobile: "",
    initialBalance: 0,
  });

  async function createACC(e: React.FormEvent<HTMLFormElement>) {
    setError("");
    e.preventDefault();
    const validate = createAccountSchema.safeParse(customerDetails);

    if (!validate.success) {
      console.log(validate);
      setError(validate.error.errors[0]?.message || "Invalid Fields");
      return;
    }
    try {
      console.log(customerDetails);

      const customer = await axios.post(
        "http://localhost:3010/api/v1/createAccount",
        {
          email: customerDetails.email,
          mobile: customerDetails.mobile,
          name: customerDetails.name,
          initialBalance: customerDetails.initialBalance,
        }
      );

      if (customer.status === 201) {
        alert(
          `Created Successfully ${customerDetails.name} with Acc Number ${customer.data.customer.accNumber}`
        );
        return;
      }
    } catch (error: any) {
      if (error instanceof AxiosError) {
        console.log(error);

        if (error.code === "ECONNREFUSED" || error.code === "ENOTFOUND") {
          setError(
            "Can't connect with the server... please try after some time"
          );
          return;
        } else if (error.response?.data?.error?.error?.name === "ZodError") {
          setError(error.response?.data.error.error.issues[0].message);
          return;
        } else {
          setError(error.response?.data.error);
          return;
        }
      }
      setError("An error Occurred.. please try again after some time");
      return;
    }
  }

  return (
    <div className="w-full flex justify-center h-screen">
      <form
        className="w-full px-6 sm:w-3/4 md:w-1/2 lg:w-2/5"
        onSubmit={createACC}
      >
        <div className="text-center text-xl pt-10 pb-2 sm:text-2xl">
          Open your Account with{" "}
          <span className="text-blue-500 text-xl font-bold sm:text-2xl">
            Pay
          </span>
          <span className="text-blue-950 text-xl font-bold sm:text-2xl">
            TM
          </span>
        </div>
        {error && (
          <div className="text-red-600 text-sm text-center">{error}</div>
        )}
        <TextInput
          type="string"
          placeholder="Enter your FullName"
          label="FullName *"
          onChange={(e) => {
            setcustomerDetails({
              ...customerDetails,
              name: e,
            });
          }}
          required={true}
        />
        <TextInput
          type="email"
          placeholder="Enter Your Email"
          label="Email *"
          onChange={(e) => {
            setcustomerDetails({
              ...customerDetails,
              email: e,
            });
          }}
          required={true}
        />
        <TextInput
          type="tel"
          placeholder="Mobile"
          label="Mobile *"
          onChange={(e) => {
            setcustomerDetails({
              ...customerDetails,
              mobile: e,
            });
          }}
          required={true}
        />
        <TextInput
          type="number"
          placeholder="Enter what ever you Want"
          label="Initial Balance *"
          onChange={(e) => {
            setcustomerDetails({
              ...customerDetails,
              initialBalance: parseInt(e),
            });
          }}
          required={true}
        />
        <button
          type="submit"
          className="w-full h-10 mt-10 rounded bg-blue-500 text-white"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAcc;
