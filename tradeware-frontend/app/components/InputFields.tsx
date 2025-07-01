import React from "react";

interface props {
  inputName: string;
}

const InputFields = ({ inputName }: props) => {
  return (
    <div>
      {["Name", "Phone", "Email", "Tax"].includes(inputName) ? (
        <div className="flex flex-col gap-1">
          <p className="text-sm ">{inputName}</p>
          <input className=" border border-gray-400 focus:outline-gray-400 p-1 rounded bg-white " />
        </div>
      ) : inputName === "Address" ? (
        <div className="flex flex-col gap-1">
          <p className="text-sm">{inputName}</p>
          <input className=" border border-gray-400 focus:outline-gray-400 p-1 rounded bg-white " />
          <input className=" border border-gray-400 focus:outline-gray-400 p-1 rounded bg-white " />
          <input className=" border border-gray-400 focus:outline-gray-400 p-1 rounded bg-white " />
        </div>
      ) : inputName === "Notes" ? (
        <div className="flex flex-col gap-1">
          <p className="text-sm">{inputName}</p>
          <textarea className=" border border-gray-400 focus:outline-gray-400 p-1 rounded bg-white 
          h-[20vh] resize-none" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputFields;
