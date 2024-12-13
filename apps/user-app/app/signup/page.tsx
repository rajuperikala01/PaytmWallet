"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import GradientBackground from "../components/GradientMotion";
import { useSession } from "next-auth/react";

function page() {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    mobile: "",
  });
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("password");
  const session = useSession();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/dashboard");
    }
  }, [session.status]);
  return (
    <div className="flex min-h-screen w-screen relative">
      <form
        className="basis-full px-4
         lg:basis-2/5 bg-stone-50 text-start
        sm:flex sm:flex-col sm:px-32
        md:px-48 lg:px-20"
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);
          const res = await axios.post("/api/signup", {
            email: data.email,
            mobile: data.mobile,
            password: data.password,
            username: data.username,
          });
          setLoading(false);
          if (res.status === 201 || 200) {
            router.push("/auth/signin");
          }
        }}
      >
        <div className="mb-2 text-3xl text-blue-950 font-bold pt-10">
          Pay<span className="text-blue-500">TM</span>
        </div>
        <div
          className="text-md font-medium 
        tracking-wide text-blue-950 mb-8"
        >
          Welcome to PayTM! <br />
          Create your account
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <br />
          <input
            type="email"
            placeholder="jhony@yahoo"
            className="w-full mt-1 h-10 mb-4 p-2
           placeholder:text-slate-500 border-gray-300 border  outline-none
           text-slate-800 rounded-sm text-sm focus:border-blue-500"
            required
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="">Mobile:</label>
          <br />
          <input
            className="w-full mt-1 h-10 mb-4 p-2
           placeholder:text-slate-500 border-gray-300 border  outline-none
           text-slate-800 rounded-sm text-sm focus:border-blue-500"
            type="tel"
            placeholder="Mobile"
            maxLength={10}
            required
            onChange={(e) =>
              setData({
                ...data,
                mobile: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="">Username:</label>
          <br />
          <input
            className="w-full mt-1 h-10 mb-4 p-2
           placeholder:text-slate-500 border-gray-300 border  outline-none
           text-slate-800 rounded-sm text-sm focus:border-blue-500"
            type="text"
            placeholder="Enter your Name"
            required
            onChange={(e) =>
              setData({
                ...data,
                username: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label htmlFor="">Password:</label>
          <div className="w-full">
            <div className="w-full h-10 flex mb-4 mt-1 focus-within:border-blue-500 border-gray-300 border">
              <input
                className="sm:basis-11/12 basis-10/12  text-gray-800 outline-none px-2 h-full text-sm"
                type={type}
                placeholder="Password"
                required
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              <div
                className="sm:basis-1/12 basis-2/12 h-full flex
             justify-center items-center cursor-pointer text-sm bg-stone-50"
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
        </div>

        <button
          className="w-full mt-6 h-10 mb-4 p-2 bg-[#172554] 
            placeholder:text-slate-500 border-gray-600 border  outline-none
            text-gray-200 rounded-sm text-sm hover:bg-blue-900"
          type="submit"
        >
          {loading ? "Signing you" : "Create account"}
        </button>
        <div className="w-full text-center text-sm">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-blue-800 font-semibold">
            Login
          </Link>
        </div>
      </form>
      <div
        className="hidden lg:block
       basis-3/5 bg-gradient-to-br from-blue-950 to-blue-500 relative
      "
      >
        <div className="absolute top-5 right-20 text-stone-50 text-3xl tracking-wide font-bold">
          Pay<span className="">TM</span>
        </div>
      </div>
    </div>
  );
}

export default page;

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
