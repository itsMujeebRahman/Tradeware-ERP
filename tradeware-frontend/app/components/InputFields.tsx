import { Phone } from "lucide-react";
import React from "react";

interface supplier {
  supplierName: string;
  supplierAddress1: string;
  supplierAddress2: string;
  supplierAddress3: string;
  supplierPhone: string;
  supplierEmail: string;
  supplierTaxNo: string;
  supplierNotes: string;
}

interface props {
  inputName: string;
  handleSupplierData: any;
  supplierData: supplier;
}

const changeValue: Record<string, keyof supplier> = {
  Name: "supplierName",
  Address1: "supplierAddress1",
  Address2: "supplierAddress2",
  Address3: "supplierAddress3",
  Phone: "supplierPhone",
  Email: "supplierEmail",
  TaxNo: "supplierTaxNo",
  Notes: "supplierNotes",
};

const InputFields = ({
  inputName,
  handleSupplierData,
  supplierData,
}: props) => {
  return (
    <div>
      {["Name", "Phone", "Email", "TaxNo"].includes(inputName) ? (
        <div className="flex flex-col gap-1">
          <p className="text-sm ">{inputName}</p>
          <input
            className=" border border-gray-400 focus:outline-gray-400 p-1 rounded bg-white "
            name={changeValue[inputName]}
            onChange={handleSupplierData}
            value={supplierData[changeValue[inputName]]}
          />
        </div>
      ) : inputName === "Address" ? (
        <div className="flex flex-col gap-1">
          <p className="text-sm">{inputName}</p>
          <input
            className=" border border-gray-400 focus:outline-gray-400 p-1 rounded bg-white "
            name={changeValue[inputName+1]}
            onChange={handleSupplierData}
            value={supplierData[changeValue[inputName+1]]}
          />
          <input
            className=" border border-gray-400 focus:outline-gray-400 p-1 rounded bg-white "
            name={changeValue[inputName+2]}
            onChange={handleSupplierData}
            value={supplierData[changeValue[inputName+2]]}
          />
          <input
            className=" border border-gray-400 focus:outline-gray-400 p-1 rounded bg-white "
            name={changeValue[inputName+3]}
            onChange={handleSupplierData}
            value={supplierData[changeValue[inputName+3]]}
          />
        </div>
      ) : inputName === "Notes" ? (
        <div className="flex flex-col gap-1">
          <p className="text-sm">{inputName}</p>
          <textarea
            className=" border border-gray-400 focus:outline-gray-400 p-1 rounded bg-white 
          h-[20vh] resize-none"
            name={changeValue[inputName]}
            onChange={handleSupplierData}
            value={supplierData[changeValue[inputName]]}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputFields;
