"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkIcon({
  icon,
  link,
  title,
}: {
  icon: React.ReactNode;
  title: string;
  link: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === link;
  return (
    <Link
      href={link}
      className="group h-full w-[45%] px-4 flex items-start gap-0 hover:gap-2
      rounded-3xl bg-stone-50 justify-center flex-col sm:w-[22%] md:w-[22%] 
      transition-all duration-300 ease-out hover:bg-blue-950
      shadow-md hover:shadow-md shadow-gray-400"
    >
      <div className="bg-stone-50 rounded-2xl p-4 flex justify-center">
        {icon}
      </div>
      <div className="text-lg pt-2 text-start whitespace-nowrap group-hover:text-white">
        {title} {">"}
      </div>
    </Link>
  );
}
