"use client";
import React, { useState } from "react";
import InputFields from "./InputFields";

interface supplier {
  supplierName: string;
  supplierAddress1: string;
  supplierAddress2: string;
  supplierAddress3: string;
  supplierPhone: string;
  supplierEmail: string;
  supplierTaxNo: string;
}

const dataReset: supplier = {
  supplierName: "",
  supplierAddress1: "",
  supplierAddress2: "",
  supplierAddress3: "",
  supplierPhone: "",
  supplierEmail: "",
  supplierTaxNo: "",
};

const Supplier = () => {
  const [supplierData, setSupplierData] = useState<supplier>(dataReset);

  const handlSupplierData = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSupplierData((Prev) => ({ ...Prev, [name]: value }));
  };
  
  return (
    <div className="h-full flex flex-col gap-2 ">
      <div className=" flex items-center justify-between p-5 rounded-xl ">
        <h1 className="font-bold text-2xl">Supplier Creation</h1>
        <div className="flex gap-2">
          <button className="bg-gray-600  p-2 w-20 text-white rounded ">
            Add
          </button>
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
      <div className=" rounded-xl h-[84vh] columns-3 backdrop-blur-xl bg-white border border-gray-300 py-5 ">
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
