"use client";
import { TextInput } from "@repo/ui/textinput";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { createAccountSchema } from "@repo/validation/bankschemas";
import PopUp from "../../components/overlay";
import Loading2 from "../../components/Loading2";
import { useRouter } from "next/navigation";

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
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  async function createACC(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const validate = createAccountSchema.safeParse(customerDetails);

    if (!validate.success) {
      setError(validate.error.errors[0]?.message || "Invalid Fields");
      setLoading(false);
      return;
    }
    try {
      const customer = await axios.post(
        `${process.env.NEXT_PUBLIC_BANK_URL}/createAccount`,
        {
          email: customerDetails.email,
          mobile: customerDetails.mobile,
          name: customerDetails.name,
          initialBalance: customerDetails.initialBalance,
        }
      );

      if (customer.status === 201) {
        setLoading(false);
        setError(
          `successfully created with Account number ${customer.data.customer.accNumber} goto dashboard and link your account`
        );
        setShowPopUp(true);
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
          setLoading(false);
          return;
        } else if (error.response?.data?.error?.error?.name === "ZodError") {
          setError(error.response?.data.error.error.issues[0].message);
          setLoading(false);
          return;
        } else {
          setError(error.response?.data.error);
          setLoading(false);
          return;
        }
      }
      setError("An error Occurred.. please try again after some time");
      setLoading(false);
      return;
    } finally {
      setLoading(false);
    }
  }

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
      </div>

      <form
        className="px-4 sm:pt-2 basis-full sm:basis-3/4
         md:basis-3/5 lg:basis-2/5 lg:px-20"
        onSubmit={createACC}
      >
        <div
          className="text-center text-xl font-medium
         sm:text-2xl text-blue-950"
        >
          Open your Account with <br />
          <span className="text-blue-500 text-xl font-bold sm:text-2xl">
            Pay
          </span>
          <span className="text-blue-950 text-xl font-bold sm:text-2xl">
            TM
          </span>
        </div>

        <div className="h-4">
          {error && <div className="text-red-500 text-sm">{error}</div>}
          {showPopUp && error && (
            <PopUp
              message={error}
              Closed={() => {
                setShowPopUp(false);
                router.push("/dashboard");
              }}
              open={showPopUp}
            />
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
           hover:bg-blue-900 text-white
           text-sm font-normal tracking-wider"
        >
          {loading ? <Loading2 bg="white" /> : "Create Account"}
        </button>
      </form>
    </div>
  );
}

export default CreateAcc;
