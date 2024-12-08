"use client";

import { usePathname, useRouter } from "next/navigation";

export const SidebarItem = ({
  href,
  title,
}: {
  href: string;
  title: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const selected = pathname === href;

  return (
    <div
      className={`flex cursor-pointer p-2 pl-8`}
      onClick={() => {
        router.push(href);
      }}
    >
      <div
        className={`font-semibold whitespace-nowrap text-[18px] ${selected ? "text-blue-500" : "text-slate-800"}`}
      >
        {title}
      </div>
    </div>
  );
};
