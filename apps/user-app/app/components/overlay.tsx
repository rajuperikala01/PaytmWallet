"use client";
import { useEffect, useState } from "react";

export default function PopUp({ error }: { error: string }) {
  const [close, setClose] = useState<boolean>(true);

  return (
    <dialog
      className="fixed top-1/2 bg-stone-50 p-10 shadow-md
    shadow-black border-1 rounded-lg backdrop-blur-3xl text-end"
      open={close}
    >
      <h1
        className="text-lg
       font-medium "
      >
        {error}
      </h1>
      <div
        onClick={() => setClose(false)}
        className="bg-blue-950 text-white p-2 cursor-pointer"
      >
        close
      </div>
    </dialog>
  );
}
