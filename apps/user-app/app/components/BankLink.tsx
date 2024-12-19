"use client";
import axios, { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loading2 from "./Loading2";
import PopUp from "./overlay";

function BankLink({ userId }: { userId: number }) {
  const session = useSession();
  const router = useRouter();
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  if (!session) {
    router.push("/auth/signin");
  }
  async function handleLinking() {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const linked = await axios.post("/api/bank/accountLink", {
        id: userId,
      });

      if (linked.status === 200) {
        setLoading(false);
        setError("successfully Linked your account with paytm");
        setShowPopUp(true);
      }
    } catch (error: any) {
      setLoading(false);
      if (error instanceof AxiosError) {
        if (error.code === "ECONNREFUSED" || error.code === "ENOTFOUND") {
          setError("Cannot connect with the server");
          setShowPopUp(true);
          return;
        }
        if (error.status === 401) {
          setError(error.response?.data.error || "Validation Error");
          setLoading(false);
          return;
        }
        setError(
          error.response?.data.error ||
            "An unexpected error Occurred.. Please try again"
        );
        setShowPopUp(true);
        return;
      }
      setError(error.response.data.error || "Unexpected Error");
      setShowPopUp(true);
    }
  }
  return (
    <div className="w-full">
      {loading && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 h-screen backdrop-blur-sm z-20"></div>
          <dialog
            className="fixed top-[280px] bg-stone-100 p-5 shadow-md w-[90%] lg:w-1/4
          shadow-gray-500 border-1 rounded-lg backdrop-blur animate-moveUp
            flex  flex-col gap-2 items-center z-30 text-xs lg:text-sm font-medium"
          >
            Please wait while we fetch your details <Loading2 bg="blue-950" />
          </dialog>
        </>
      )}
      {showPopUp && (
        <PopUp
          message={error}
          open={showPopUp}
          Closed={() => {
            setShowPopUp(false);
            router.refresh();
          }}
          textSize="text-sm"
        />
      )}
      <div
        className="flex justify-between w-[97%] lg:w-full
              mt-5 mb-5 items-center bg-stone-50 px-4 py-2 shadow-sm shadow-blue-950 rounded-md
              cursor-pointer hover:bg-blue-950 hover:text-stone-50 group text-blue-950
              transition-all duration-300 ease-out"
        onClick={handleLinking}
      >
        <div
          className="flex items-center justify-start basis-3/4 gap-2 
                font-medium text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 font-medium"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Add account
        </div>
        <div>
          <svg
            fill="none"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            className="size-8 group-hover:bg-stone-50 rounded-sm"
          >
            <path
              d="M10.0006 5.8751C10.4608 5.8751 10.8339 5.50201 10.8339 5.04177C10.8339 4.58153 10.4608 4.20844 10.0006 4.20844C9.54033 4.20844 9.16724 4.58153 9.16724 5.04177C9.16724 5.50201 9.54033 5.8751 10.0006 5.8751Z"
              fill="#3d3d3d"
            />
            <path
              d="M16.0002 13.3407V8.00007H16.0932C16.9865 8.00007 17.3522 6.85264 16.6236 6.33577L10.772 2.18435C10.31 1.85652 9.69115 1.85652 9.22906 2.18434L3.37727 6.33576C2.64871 6.85263 3.01439 8.00007 3.90767 8.00007H4.00024V13.3407C3.39886 13.7257 3.00024 14.3997 3.00024 15.1667V16.5001C3.00024 16.7762 3.2241 17.0001 3.50024 17.0001H16.5002C16.7764 17.0001 17.0002 16.7762 17.0002 16.5001V15.1667C17.0002 14.3997 16.6016 13.7257 16.0002 13.3407ZM9.80767 2.99994C9.92319 2.91799 10.0779 2.91799 10.1934 2.99995L15.8317 7.00007H12.5023L12.5002 7.00006L12.4981 7.00007H4.16915L9.80767 2.99994ZM15.0002 8.00007V13.0064C14.9452 13.0022 14.8897 13.0001 14.8336 13.0001H13.0002L13.0002 8.00007H15.0002ZM5.00024 13.0064V8.00007H7.00024L7.00024 13.0001H5.16691C5.11083 13.0001 5.05525 13.0022 5.00024 13.0064ZM5.16691 14.0001H14.8336C15.4779 14.0001 16.0002 14.5224 16.0002 15.1667V16.0001H4.00024V15.1667C4.00024 14.5224 4.52258 14.0001 5.16691 14.0001ZM9.50024 13.0001H8.00024L8.00024 8.00007H9.50024L9.50024 13.0001ZM10.5002 13.0001L10.5002 8.00007H12.0002L12.0002 13.0001H10.5002Z"
              fill="#3d3d3d"
            />
          </svg>
        </div>
      </div>
      {/* <div
        className="lg:hidden flex items-center mt-4
       justify-end gap-1 rounded-sm text-xs bg-stone-50
        cursor-pointer hover:bg-blue-800 text-blue-950"
        onClick={handleLinking}
      >
        Add Account
        <div>
          <svg
            fill="none"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            className="size-8 group-hover:bg-stone-50 rounded-sm"
          >
            <path
              d="M10.0006 5.8751C10.4608 5.8751 10.8339 5.50201 10.8339 5.04177C10.8339 4.58153 10.4608 4.20844 10.0006 4.20844C9.54033 4.20844 9.16724 4.58153 9.16724 5.04177C9.16724 5.50201 9.54033 5.8751 10.0006 5.8751Z"
              fill=""
            />
            <path
              d="M16.0002 13.3407V8.00007H16.0932C16.9865 8.00007 17.3522 6.85264 16.6236 6.33577L10.772 2.18435C10.31 1.85652 9.69115 1.85652 9.22906 2.18434L3.37727 6.33576C2.64871 6.85263 3.01439 8.00007 3.90767 8.00007H4.00024V13.3407C3.39886 13.7257 3.00024 14.3997 3.00024 15.1667V16.5001C3.00024 16.7762 3.2241 17.0001 3.50024 17.0001H16.5002C16.7764 17.0001 17.0002 16.7762 17.0002 16.5001V15.1667C17.0002 14.3997 16.6016 13.7257 16.0002 13.3407ZM9.80767 2.99994C9.92319 2.91799 10.0779 2.91799 10.1934 2.99995L15.8317 7.00007H12.5023L12.5002 7.00006L12.4981 7.00007H4.16915L9.80767 2.99994ZM15.0002 8.00007V13.0064C14.9452 13.0022 14.8897 13.0001 14.8336 13.0001H13.0002L13.0002 8.00007H15.0002ZM5.00024 13.0064V8.00007H7.00024L7.00024 13.0001H5.16691C5.11083 13.0001 5.05525 13.0022 5.00024 13.0064ZM5.16691 14.0001H14.8336C15.4779 14.0001 16.0002 14.5224 16.0002 15.1667V16.0001H4.00024V15.1667C4.00024 14.5224 4.52258 14.0001 5.16691 14.0001ZM9.50024 13.0001H8.00024L8.00024 8.00007H9.50024L9.50024 13.0001ZM10.5002 13.0001L10.5002 8.00007H12.0002L12.0002 13.0001H10.5002Z"
              fill="#efefef"
            />
          </svg>
        </div>
      </div> */}
    </div>
  );
}

export default BankLink;
