"use client";
import { TextInput } from "@repo/ui/textinput";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { createAccountSchema } from "@repo/validation/bankschemas";
import PopUp from "../../components/overlay";

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
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  async function createACC(e: React.FormEvent<HTMLFormElement>) {
    setError("");
    e.preventDefault();
    const validate = createAccountSchema.safeParse(customerDetails);

    if (!validate.success) {
      setError(validate.error.errors[0]?.message || "Invalid Fields");
      return;
    }
    try {
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
        <PopUp
          message={`Created Successfully ${customerDetails.name} with Acc Number ${customer.data.customer.accNumber}`}
          open={showPopUp}
          Closed={() => setShowPopUp(false)}
        />;
        return;
      }
    } catch (error: any) {
      if (error instanceof AxiosError) {
        if (
          error.code === "ECONNREFUSED" ||
          error.code === "ENOTFOUND" ||
          error.code === "ERR_NETWORK"
        ) {
          setError("Can't connect with the server.");
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

  console.log();

  return (
    <div className="w-full flex h-screen bg-stone-50 items-center justify-center">
      <div
        className="basis-3/5 text-white w-full h-full relative overflow-clip hidden
       bg-gradient-to-br from-blue-950 to-blue-500 lg:flex"
      >
        <div>
          <div className="animate-moveUp absolute top-44 left-40">
            <img src="/landingpage4.svg" alt="" />
          </div>

          <div
            className="absolute top-52 exmd:top-48 left-[350px] text-5xl font-bold text-black
           leading-relaxed animate-moveUp2 whitespace-nowrap"
          >
            Payments Made <br />
            Easy With <br />
            <div className="bg-stone-50 inline pr-8">
              <span className="text-blue-500 font-bold">Pay</span>
              <span className="text-blue-950 font-bold">TM</span>
            </div>
          </div>
        </div>
        <div className="absolute top-10 left-10 text-3xl font-bold text-white">
          PayTM <br />
          Payments <br />
          Bank
        </div>
        {/* <div className="h-40 w-40 bg-white">
          <img src="/landingpage2.svg" alt="" />
        </div> */}
      </div>
      <form
        className="px-4 pt-2 basis-full sm:basis-3/4 md:basis-3/5 lg:basis-2/5 lg:px-20"
        onSubmit={createACC}
      >
        <div className="text-center text-xl sm:text-2xl">
          Open your Account with{" "}
          <span className="text-blue-500 text-xl font-bold sm:text-2xl">
            Pay
          </span>
          <span className="text-blue-950 text-xl font-bold sm:text-2xl">
            TM
          </span>
        </div>
        <div className="h-4">
          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}
        </div>

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
          disabled={showPopUp}
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
          disabled={showPopUp}
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
          disabled={showPopUp}
          required={true}
        />
        <TextInput
          type="number"
          placeholder="Enter an Amount"
          label="Initial Balance *"
          onChange={(e) => {
            setcustomerDetails({
              ...customerDetails,
              initialBalance: parseInt(e),
            });
          }}
          disabled={showPopUp}
          required={true}
        />
        <button
          type="submit"
          className="w-full h-10 mt-10 rounded bg-blue-950
           hover:bg-blue-800 text-white
           text-sm font-normal tracking-wider"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAcc;
