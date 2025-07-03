import React from "react";

interface props {
  inputName: string;
}

const ProductInputFields = ({ inputName }: props) => {
  return (
    <div>
      {[
        "Name",
        "Code",
        "Barcode",
        "Cost",
        "SellPrice",
        "MaxSellPrice",
        "Quantity",
        "TaxPercentage",
      ].includes(inputName) ? (
        <div className="flex flex-col gap-1">
          <p className="text-sm ">{inputName}</p>
          <input
            className={`border border-gray-300 focus:outline-gray-400 p-1 rounded bg-white `}
          />
        </div>
      ) : ["category", "Unit"].includes(inputName) ? (
        <div>category</div>
      ) : "Description" === inputName ? (
        <textarea className="border h-[20vh]" />
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductInputFields;
