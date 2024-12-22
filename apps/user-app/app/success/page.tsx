"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function () {
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="flex flex-col h-screen pt-10
     items-center gap-10"
    >
      {loading ? <Loading /> : <Success />}
    </div>
  );
}

function Success() {
  const router = useRouter();
  const handleRefresh = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default behavior of Link
    router.push("/dashboard?refresh=true"); // Navigate to the same path to trigger refresh
  };
  return (
    <div className="flex flex-col animate-moveUp items-center justify-center">
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

      <div className="text-xl font-bold text-blue-500">Sent</div>
      <div
        className="text-sm py-2 px-14 bg-stone-50 mt-5
           text-black text-center inline-flex justify-center
            items-center animate-moveUp rounded-lg font-semibold border-2 border-gray-200
            hover:text-white transition-all duration-300 ease-out hover:bg-blue-950
      shadow-md 
        "
        onClick={handleRefresh}
      >
        Dashboard
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="flex animate-moveUp transition-all duration-300 ease-in">
      <div className="h-28 w-28 rounded-full bg-blue-500 flex items-center">
        <div
          className="h-24 w-24 rounded-full border-8 bg-blue-500
       border-t-white border-blue-500 animate-payment-loading m-4 box-border"
        ></div>
      </div>
    </div>
  );
}
