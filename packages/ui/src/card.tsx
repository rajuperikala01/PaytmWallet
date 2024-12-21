import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div className="px-4 pt-2">
      <h1 className="text-lg md:text-xl border-b pb-2 font-semibold text-blue-950">
        {title}
      </h1>
      <div>{children}</div>
    </div>
  );
}
