import React from "react";

interface props {
  inputName: string;
  className: string;
}

const TransactionInputField = ({ inputName, className }: props) => {
  return (
    <div className={`break-inside-avoid ${className}`}>
      {[
        "Name",
        "Invoice No",
        "Address",
        "Reference No",
        "Payment Method",
        "Date",
      ].includes(inputName) ? (
        <div className="flex flex-col w-full gap-[0.1vw]">
          <p className="text-[1vw] ">{inputName}</p>
          <input
            className={`border border-gray-300 focus:outline-gray-300 h-[2vw] p-[0.3vw] 
                rounded-lg bg-gray-50 w-full `}
          />
        </div>
      ) : ["Notes"].includes(inputName) ? (
        <div className="flex flex-col w-full gap-[0.1vw]">
          <p className="text-[1vw] ">{inputName}</p>
          <textarea
            className={`border border-gray-300 focus:outline-gray-300 h-[6vw] p-[0.3vw] 
                rounded-lg bg-gray-50 w-full resize-none`}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TransactionInputField;
