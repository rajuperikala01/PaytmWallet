import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function () {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div>
      <section
        className="flex w-full bg-gradient-to-br animate-gradient-diagonal
      from-blue-950 to-blue-500 text-stone-50 h-screen justify-center items-center"
      >
        <div className="">
          <div
            className="bg-stone-50 inline px-2 absolute
          left-10 top-10 text-4xl"
          >
            <span className="text-blue-500 font-bold">Pay</span>
            <span className="text-blue-950 font-bold">TM</span>
          </div>
          <div className="text-center flex justify-center flex-col items-center">
            <h1 className="text-3xl font-bold mb-6 text-center md:text-left leading-relaxed">
              Tap, pay, done <br /> - it's that simple
            </h1>
            <p className="text-xs md:text-lg mb-6 opacity-90 flex justify-center w-10/12 text-center">
              From shopping to savings, everything in one secure wallet.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <Link
                href={"/signup"}
                className="text-blue-500 px-6 py-3 rounded-lg 
                font-semibold bg-stone-50 text-sm sm:text-md
                 shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
