export default function PopUp({
  error,
  Closed,
  open,
}: {
  error: string;
  Closed: () => void;
  open: boolean;
}) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-70 h-screen backdrop-blur-sm z-20" />
      )}
      <dialog
        className="fixed top-[220px] bg-stone-100 p-5 shadow-md w-[95%] lg:w-1/3
    shadow-gray-500 border-1 rounded-lg backdrop-blur animate-moveUp2
    flex flex-col gap-2 items-end z-30"
        open={open}
      >
        <p
          className="text-md
       font-medium text-gray-600"
        >
          {error}
        </p>
        <div
          onClick={Closed}
          className="bg-blue-950 text-center text-white py-2 px-3 cursor-pointer
        inline rounded-sm text-sm"
        >
          close
        </div>
      </dialog>
    </>
  );
}
