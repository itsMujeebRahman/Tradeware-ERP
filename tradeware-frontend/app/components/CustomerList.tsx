import { Fullscreen, X } from "lucide-react";
import React, { SetStateAction, useState } from "react";
import SingleCustomer from "./SingleCustomer";

interface customer {
  customerName: string;
  customerAddress1: string;
  customerAddress2: string;
  customerAddress3: string;
  customerPhone: string;
  customerEmail: string;
  customerTaxNo: string;
  _id: string;
}

interface props {
  setEnableList: React.Dispatch<React.SetStateAction<boolean>>;
  customer: customer[];
  handleEditMode: (id: string) => void;
}

const CustomerList = ({ setEnableList, customer, handleEditMode }: props) => {
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  return (
    <div className="fixed top-0 left-0 bg-black/30 w-screen h-screen z-50 flex items-center justify-center p-5">
      <div
        className={`${fullScreen ? "  w-full h-full " : "w-[50vw] h-[60vh] "}`}
      >
        <div className="bg-white p-5 flex flex-col h-full rounded gap-5 ">
          <div className=" w-full flex items-center justify-between">
            <h1 className="font-bold text-2xl">Customer List</h1>
            <div className="flex items-center justify-between gap-3 ">
              <div>
                <input className="border p-1 w-100" placeholder="search" />
              </div>
              <div className="flex items-center justify-between gap-4 border border-gray-300 rounded-2xl py-2 px-2 ">
                <Fullscreen
                  onClick={() => setFullScreen(!fullScreen)}
                  className="text-gray-400 hover:text-gray-600"
                />
                <X
                  onClick={() => setEnableList(false)}
                  className="text-gray-400 hover:text-gray-600"
                />
              </div>
            </div>
          </div>
          <div className="border border-gray-300 rounded flex flex-col flex-grow h-0">
            {fullScreen ? (
              <div className="grid grid-cols-6 p-2 font-bold border-b bg-gray-100">
                <h1>Name</h1>
                <h1>Phone</h1>
                <h1>Address1</h1>
                <h1>Address2</h1>
                <h1>Email</h1>
                <h1>Tax</h1>
              </div>
            ) : (
              <div className="grid grid-cols-3 p-2 font-bold border-b bg-gray-100">
                <h1>Name</h1>
                <h1>Phone</h1>
                <h1>Address1</h1>
              </div>
            )}

            <div className=" flex flex-col gap-2  overflow-y-scroll py-2">
              {customer?.map((customer: customer, index: number) => {
                return (
                  <SingleCustomer
                    customer={customer}
                    key={index}
                    fullScreen={fullScreen}
                    handleEditMode={handleEditMode}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
