import Link from "next/link";

export default function () {
  return (
    <div
      className=" h-screen bg-gradient-to-r
       from-blue-950 to-blue-800"
    >
      <header className="hidden sm:block text-stone-50">
        {/* <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="text-2xl font-bold">
            Paytm
            <br /> Payments <br />
            Bank
          </div>
        </div> */}
      </header>
      <div className="text-2xl text-stone-50 font-bold absolute top-5 left-5 sm:top-10 sm:left-10">
        PayTM <br />
        Payments <br />
        Bank
      </div>
      <section className=" text-stone-50 py-20">
        <div className="container mx-auto mt-16 text-center flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-6">
            Simplify Your Banking Experience
          </h1>
          <p className="text-sm md:text-lg mb-8 w-10/12">
            Your gateway to secure, fast, and seamless digital banking.
          </p>
          <Link
            href="/PaymentsBank/createAcc"
            className="bg-white text-blue-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg text-sm font-semibold hover:bg-gray-100"
          >
            Open a savings account
          </Link>
        </div>
      </section>
    </div>
  );
}
