"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SidebarItem } from "./Sidebaritem";
import { Button } from "@repo/ui/button";

function AppbarClient() {
  const session = useSession();
  const router = useRouter();

  return (
    <div
      className="flex justify-between px-2 h-14 bg-stone-50 items-center
      border rounded-sm fixed top-2 left-2 right-2 z-50 text-2xl md:h-16 lg:h-20 lg:px-20
      lg:top-5 lg:right-3 lg:left-3"
    >
      <div className="text-blue-950 font-bold md:text-4xl">
        Pay
        <span className="text-blue-500">TM</span>
      </div>
      <div className="hidden lg:flex">
        <div className="items-center justify-end  lg:flex">
          <SidebarItem href="/dashboard" title="Home" />
          <SidebarItem href="/transfer" title="AddtoWallet" />
          <SidebarItem href="/transactions" title="History" />
          <SidebarItem href="/p2p" title="p2p" />
          <SidebarItem href="/PaymentsBank" title="Payments Bank" />
        </div>
      </div>

      <div>
        <Button
          onClick={
            !session
              ? () => {
                  router.push("/auth/signin");
                }
              : async () => {
                  await signOut();
                  router.push("/auth/signin");
                }
          }
        >
          {session ? "Sign out" : "Sign In"}
        </Button>
      </div>
    </div>
  );
}

function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}
function TransferIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
      />
    </svg>
  );
}

function TransactionsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function P2PTransferIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}

export default AppbarClient;
