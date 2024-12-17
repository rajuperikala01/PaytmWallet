"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authOptions } from "../../lib/auth";

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [type, setType] = useState<string>("password");
  const router = useRouter();
  const sesssion = useSession();

  useEffect(() => {
    if (sesssion.status === "authenticated") {
      router.push("/dashboard");
    }
  }, [sesssion.status]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    setLoading(false);

    if (result?.ok) {
      router.push("/dashboard");
    }
    if (result?.error) {
      setError("Invalid email or password. Please try again.");
    }
  }

  return (
    <div className="flex sm:items-center h-screen w-full bg-stone-50">
      <div
        className="basis-1/2 bg-[#e0f5fd] h-full hidden
       lg:flex items-center justify-center text-3xl px-16 font-bold leading-normal text-blue-950"
      >
        "Welcome back!
        <br /> Every great journey starts with a single step forward."
      </div>
      <form
        className="lg:basis-1/2 basis-full flex flex-col
         sm:items-start sm:px-32 p-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-2 text-3xl text-blue-950 font-bold pt-10">
          Pay<span className="text-blue-500">TM</span>
        </div>
        <div
          className="text-md font-medium 
        tracking-wide text-blue-950 mb-8"
        >
          Welcome back to PayTM! <br />
          Login to your account
        </div>
        <div className="h-5">
          {error && (
            <div className="mb-4 text-red-600 text-sm">{error}</div> // Error message
          )}
        </div>
        <div className="w-full">
          <label htmlFor="">Email:</label>
          <br />
          <input
            type="email"
            placeholder="jhony@yahoo"
            className="sm:w-11/12 w-full mt-1 h-10 mb-4 p-2 focus:border-blue-500
           placeholder:text-slate-500 border-gray-300 border  outline-none
           text-slate-800 rounded-sm required:marker:bg-black text-sm"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <label htmlFor="">Password:</label>
        <div className="w-full">
          <div className="sm:w-11/12 w-full h-10 flex mb-4 mt-1 focus-within:border-blue-500 border-gray-300 border">
            <input
              className="sm:basis-11/12 basis-10/12 text-gray-800 outline-none px-2 h-full text-sm"
              type={type}
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="sm:basis-1/12 basis-2/12 h-full flex
             justify-center items-center cursor-pointer text-sm"
              onClick={() => {
                if (type === "password") {
                  setType("string");
                  return;
                }
                setType("password");
              }}
            >
              {type !== "password" ? <ClosedEye /> : <Eye />}
            </div>
          </div>
        </div>
        <button
          className="sm:w-11/12 w-full mt-6 h-10 mb-4 p-2 bg-[#172554] 
            placeholder:text-slate-500 border-gray-600 border  outline-none
            text-gray-200 rounded-sm text-sm"
          type="submit"
        >
          {loading ? "Signing you in..." : "Sign In"}
        </button>
        <p className="text-sm text-center w-full text-gray-800">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-800 font-semibold">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

function Eye() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-5 text-gray-700"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
}

function ClosedEye() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-5 text-gray-700"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );
}
