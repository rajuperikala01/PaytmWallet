import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/database/client";
import LinkIcon from "../../components/MobileBox";
import { redirect } from "next/navigation";
import { div } from "framer-motion/client";
import { title } from "process";

export default async function () {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth/signin");
  }
  console.log(session);
  const color = "text-[#6a51a6]";
  const time = new Date().getHours();
  let greet = `Good morning ${session.user.name}`;
  if (time >= 12 && time < 18) {
    greet = `Good afternoon, ${session.user.name}`;
  }
  if (time >= 18) {
    greet = `Good evening ${session.user.name}`;
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(session.user.id),
      },
    });

    const accountbalance = (user?.Balance || 0) / 100;

    return (
      <div>
        <div
          className="absolute top-20 left-2 right-2
         gap-4 block sm:top-24 sm:left-5 sm:right-3 md:top-28 md:right-5 md:left-5 lg:flex lg:top-36 lg:right-24 lg:left-24"
        >
          <div
            className=" text-blue-950 text-3xl lg:leading-relaxed
            mb-4 font-bold basis-3/4 pl-2 sm:leading-snug  md:text-4xl md:leading-normal lg:text-5xl"
          >
            Welcome...
            <br /> {greet}
            <div>
              <div>
                <div className="basis-1/4 pt-2 text-blue-950 lg:hidden">
                  <div className="text-2xl  font-semibold">Wallet</div>
                  <div className="text-lg mt-2 font-medium">
                    Balance: <span className="font-bold">{accountbalance}</span>{" "}
                    INR
                  </div>
                </div>
                <div
                  className="w-full flex flex-wrap gap-6 h-[150px]
                    justify-start
                    mt-5 lg:h-[180px] md:mt-12"
                >
                  <LinkIcon
                    icon={<TransferIcon />}
                    title="Wallet"
                    link="/transfer"
                  />
                  <LinkIcon
                    icon={<P2PTransferIcon />}
                    title="Send"
                    link="/p2p"
                  />
                  <LinkIcon
                    icon={<TransactionsIcon />}
                    title="History"
                    link="/transactions"
                  />
                  <LinkIcon
                    icon={<BankIcon />}
                    title="GoToBank"
                    link="/PaymentsBank"
                  />
                  {/* {!session.user.bankCustomerId && (
                    <LinkIcon
                      icon={<BankIcon />}
                      title="Add Account"
                      link="/"
                    />
                  )} */}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:basis-1/4 pt-2 text-blue-950 hidden lg:block">
            <div className="text-2xl  font-semibold">Wallet</div>
            <div className="text-lg mt-2 font-medium">
              Balance: <span className="font-semibold">{accountbalance}</span>{" "}
              INR
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    // return (
    //   <div className="flex w-full h-screen items-center justify-center bg-gray-700">
    //     An Unexpected Error Occurred. <br />
    //     Please check your Internet
    //   </div>
    // );
  }
}

function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}

function BankIcon() {
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
        d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
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
      className="w-8 h-8"
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
      className="w-8 h-8"
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
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}
