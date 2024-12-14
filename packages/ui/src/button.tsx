import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  disabled: boolean;
}

export const Button = ({ onClick, children, disabled }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-white bg-gray-800 whitespace-nowrap text-sm font-medium hover:bg-gray-900 focus:outline-none focus:ring-4 w-full focus:ring-gray-300 rounded-sm px-5 py-2"
    >
      {children}
    </button>
  );
};
