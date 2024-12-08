"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function () {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="flex justify-center h-screen pt-5 text-center">
      <div className="rounded-3xl w-1/2 h-4/5 bg-stone-50">
        {loading ? <Loading /> : <Success />}
        <Link
          href={"/dashboard"}
          className="h-1/6 text-2xl font-bold bg-blue-950 p-4 rounded-lg text-white"
        >
          Goto Home
        </Link>
      </div>
    </div>
  );
}

function Success() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-5/6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-40 w-40 text-blue-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg>

      <div className="text-xl font-bold">Payment Success</div>
    </div>
  );
}

function Loading() {
  return (
    <div className="flex justify-center items-center h-5/6">
      <div className="h-36 w-36 rounded-full bg-blue-500 flex items-center">
        <div
          className="h-32 w-32 rounded-full border-[10px] bg-blue-500
       border-t-white border-blue-500 animate-payment-loading m-4 box-border"
        ></div>
      </div>
    </div>
  );
}
