"use client";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

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

const Customer = () => {
  const [supplierData, setSupplierData] = useState<supplier>(dataReset);

  const handleSupplierData = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSupplierData((Prev) => ({
      ...Prev,
      [name]: value,
    }));
  };

  const handleSendSupplierData = async () => {
    try {
      await axios.post("http://localhost:3001/addSupplier", supplierData);
      toast.success(`${supplierData.supplierName}'s Data Saved`);
    } catch (error) {
      toast.success(`Unable to Save ${supplierData.supplierName}'s Data `);
    }
    setSupplierData(dataReset);
  };

  return (
    <div className=" border-l-4 border-gray-600 h-full flex flex-col gap-10 py-5">
      <div className=" w-full pl-5">
        <h1 className="font-bold text-4xl">Supplier Creation</h1>
      </div>
      <div className=" pl-5 flex flex-col gap-5 w-[50vw]">
        <div className="flex flex-col">
          Supplier Name
          <input
            name="supplierName"
            value={supplierData.supplierName}
            onChange={handleSupplierData}
            className="border p-2 "
          />
        </div>
        <div className="flex flex-col border border-gray-300 rounded-2xl p-5">
          Address-1
          <input
            className="border p-1"
            onChange={handleSupplierData}
            name="supplierAddress1"
            value={supplierData.supplierAddress1}
          />
          Address-2
          <input
            className="border p-1"
            onChange={handleSupplierData}
            name="supplierAddress2"
            value={supplierData.supplierAddress2}
          />
          Address-3
          <input
            className="border p-1"
            onChange={handleSupplierData}
            name="supplierAddress3"
            value={supplierData.supplierAddress3}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-5">
            Contact
            <input
              className="border p-1 w-full"
              onChange={handleSupplierData}
              name="supplierPhone"
              value={supplierData.supplierPhone}
            />
          </div>
          <div className="flex items-center gap-9">
            Email
            <input
              className="border p-1 w-full"
              onChange={handleSupplierData}
              name="supplierEmail"
              value={supplierData.supplierEmail}
            />
          </div>
          <div className="flex items-center gap-13">
            Tax
            <input
              className="border p-1 w-full"
              onChange={handleSupplierData}
              name="supplierTaxNo"
              value={supplierData.supplierTaxNo}
            />
          </div>
        </div>
      </div>
      <div className=" p-2 px-10 flex items-center justify-end gap-2">
        <button className="bg-gray-600  p-2 w-20 text-white rounded-xl">
          Edit
        </button>
        <button
          onClick={handleSendSupplierData}
          className="bg-gray-600  p-2 w-20 text-white rounded-xl"
        >
          Save
        </button>
        <button className="bg-gray-600  p-2 w-20 text-white rounded-xl">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Customer;
