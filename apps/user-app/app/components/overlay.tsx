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
        <div className="fixed inset-0 bg-black bg-opacity-50 h-screen backdrop-blur-sm z-20" />
      )}
      <dialog
        className="fixed top-[280px] bg-stone-100 p-5 shadow-md w-[95%] lg:w-1/4
    shadow-gray-500 border-1 rounded-lg backdrop-blur animate-moveUp2
    flex  flex-col gap-2 items-center z-30 "
        open={open}
      >
        <div
          className="text-md
       font-medium text-gray-900 text-center"
        >
          {error}
        </div>
        <div
          onClick={Closed}
          className="bg-blue-950 text-center text-white py-2 px-5 cursor-pointer
        inline rounded-sm text-sm hover:bg-blue-800"
        >
          close
        </div>
      </dialog>
    </>
  );
}
