"use client";
import { useEffect, useState } from "react";

export default function PopUp({
  error,
  Closed,
}: {
  error: string;
  Closed: () => void;
}) {
  const [close, setClose] = useState<boolean>(true);

  return (
    close && (
      <dialog
        className="fixed top-[220px] bg-stone-100 p-5 shadow-md w-[95%] lg:w-1/3
    shadow-gray-500 border-1 rounded-lg backdrop-blur animate-moveUp2
    flex flex-col gap-2 items-end"
        open={close}
        onClick={() => {
          setClose(false);
          Closed();
        }}
      >
        <p
          className="text-md
       font-medium text-gray-600"
        >
          {error}
        </p>
        <div
          onClick={() => {
            setClose(false);
            Closed();
          }}
          className="bg-blue-950 text-center text-white py-2 px-3 cursor-pointer
        inline rounded-sm text-sm"
        >
          close
        </div>
      </dialog>
    )
  );
}
