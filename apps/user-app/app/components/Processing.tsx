function Processing() {
  return (
    <div
      className="text-xs sm:text-sm text-orange-400 
                   sm:font-medium flex justify-end items-center gap-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-4 w-4 text-yellow-500 group-hover:scale-110"
      >
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="12"
          y1="8"
          x2="12"
          y2="16"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <line
          x1="12"
          y1="4"
          x2="12"
          y2="4"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default Processing;
