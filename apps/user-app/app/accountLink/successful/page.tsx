"use client";

import Link from "next/link";

export default function () {
  return (
    <div className="text-center pt-10">
      <div className="text-xl font-semibold md:text-2xl text-blue-500 mb-10">
        Successfully linked with bank
      </div>
      <Link
        href={"/dashboard"}
        className="bg-blue-950 py-2 px-4 text-white rounded-sm
        hover:bg-blue-800 text-sm"
        prefetch={true}
      >
        Home
      </Link>
    </div>
  );
}
