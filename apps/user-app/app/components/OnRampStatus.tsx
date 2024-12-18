import { Card } from "@repo/ui/card";

export const OnRampTransactions = ({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
    status: string;
    provider: string;
    id: number;
  }[];
}) => {
  if (!transactions.length) {
    return (
      <Card title="Recent Transactions">
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </Card>
    );
  }
  return (
    <Card title="Recent Transactions">
      <div className="md:px-4">
        {transactions.map((t) => (
          <div
            className="group flex justify-between bg-stone-100 p-4 mt-2 sm:mt-4 rounded-lg shadow-md items-center"
            key={t.id}
          >
            <div>
              <div className="text-sm">From Paytm Payments Bank</div>
              <div className="text-slate-600 text-xs">
                {new Date(t.time).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}{" "}
                {new Date(t.time).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>

            <div className="flex flex-col justify-center text-end text-sm md:text-mdfont-medium">
              +{t.amount / 100} INR
              <div>
                {t.status === "Success" && (
                  <div
                    className="text-xs sm:text-sm text-green-600 
                  sm:font-medium flex justify-end gap-1 items-center"
                  >
                    success
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 group-hover:transform group-hover:scale-110"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div>
                {t.status === "Processing" && (
                  <div
                    className="text-xs sm:text-sm text-orange-400 
                   sm:font-medium flex justify-end items-center gap-1"
                  >
                    Processing
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6 text-yellow-500 group-hover:scale-110"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="12"
                        y1="4"
                        x2="12"
                        y2="4"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div>
                {t.status === "Failed" && (
                  <div
                    className="text-xs sm:text-sm text-red-600 text-end
                   flex gap-1 justify-end sm:font-medium items-center"
                  >
                    Failed
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 group-hover:scale-110"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
