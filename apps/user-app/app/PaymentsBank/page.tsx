export default function () {
  return (
    <div className="h-screen w-screen flex items-center justify-center gap-1">
      {/* <div className="flex">
        <div className="text-4xl h-full font-bold lg:w-3/4">
          Welcome to PayTM Payments Bank
        </div>
        <div className="w-1/4">
          <div>Open your account with payTM</div>
          <div>Login</div>
        </div>
      </div> */}
      <div
        className="bg-blue-500 h-4 w-4 
    rounded-full animate-loading "
      ></div>
      <div
        className="bg-blue-500 h-5 w-5  
    rounded-full animate-loading "
      ></div>
      <div
        className="bg-blue-500 h-6 w-6 
    rounded-full animate-loading "
      ></div>
      <div
        className="bg-blue-950 h-7 w-7 
    rounded-full animate-loading "
      ></div>
      <div
        className="bg-blue-950 h-8 w-8 
    rounded-full animate-loading "
      ></div>
    </div>
  );
}
