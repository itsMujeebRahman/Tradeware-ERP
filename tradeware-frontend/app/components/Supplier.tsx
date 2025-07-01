import React from "react";
import InputFields from "./InputFields";

const Supplier = () => { 

  return (
    <div className="h-full flex flex-col gap-2 ">
      <div
        className=" flex items-center justify-between p-5 rounded-xl bg-black/5"
      >
        <h1 className="font-bold text-2xl">Supplier Creation</h1>
        <div className="flex gap-2">
          <button className="bg-gray-600  p-2 w-20 text-white rounded">
            Edit
          </button>
          <button className="bg-gray-600  p-2 w-20 text-white rounded">
            List
          </button>
          <button className="bg-gray-600  p-2 w-20 text-white rounded">
            Save
          </button>
          <button className="bg-gray-600  p-2 w-20 text-white rounded">
            Cancel
          </button>
        </div>
      </div>
      <div className=" rounded-xl h-[84vh] columns-3 backdrop-blur-xl bg-white  py-5 ">
        <div className="px-5 flex flex-col gap-2 break-inside-avoid ">
          {["Name", "Address", "Phone", "Email", "Tax", "Notes"].map(
            (inputName, index) => (
              <InputFields key={index} inputName={inputName} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Supplier;
