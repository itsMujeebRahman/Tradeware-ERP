"use client";
import React, { useState } from "react";
import InputFields from "./InputFields";
import axios from "axios";
import toast from "react-hot-toast";
import List from "./List";
import useSWR from "swr";

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

const dataReset: supplier = {
  supplierName: "",
  supplierAddress1: "",
  supplierAddress2: "",
  supplierAddress3: "",
  supplierPhone: "",
  supplierEmail: "",
  supplierTaxNo: "",
  supplierNotes: "",
};

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Supplier = () => {
  const [supplierData, setSupplierData] = useState<supplier>(dataReset);
  const [enableList, setEnableList] = useState<boolean>(false);

  const { data, mutate } = useSWR("http://localhost:3001/supplier", fetcher);

  const handleSupplierData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSupplierData((Prev) => ({ ...Prev, [name]: value }));
    console.log(supplierData);
  };

  const handleSendSupplierData = async () => {
    try {
      await axios.post("http://localhost:3001/supplier", supplierData);
      toast.success(`${supplierData.supplierName}'s Data Saved`);
    } catch {
      toast.error(`Error while Saving ${supplierData.supplierName}'s Data `);
    }
    setSupplierData(dataReset);
    mutate();
  };

  return (
    <div className="h-full flex flex-col gap-2 ">
      {enableList ? <List setEnableList={setEnableList} data={data} /> : ""}
      <div className=" flex items-center justify-between p-5 rounded-xl ">
        <h1 className="font-bold text-2xl">Supplier Creation</h1>
        <div className="flex gap-2">
          <button className="bg-gray-600  p-2 w-20 text-white rounded">
            Edit
          </button>
          <button
            className="bg-gray-600  p-2 w-20 text-white rounded"
            onClick={() => setEnableList(true)}
          >
            List
          </button>
          <button
            className="bg-gray-600  p-2 w-20 text-white rounded"
            onClick={handleSendSupplierData}
          >
            Save
          </button>
          <button className="bg-gray-600  p-2 w-20 text-white rounded">
            Cancel
          </button>
        </div>
      </div>
      <div className=" rounded-xl h-[84vh] columns-3 backdrop-blur-xl bg-white border border-gray-300 py-5 ">
        <div className="px-5 flex flex-col gap-2 break-inside-avoid ">
          {["Name", "Address", "Phone", "Email", "TaxNo", "Notes"].map(
            (inputName, index) => (
              <InputFields
                key={index}
                inputName={inputName}
                handleSupplierData={handleSupplierData}
                supplierData={supplierData}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Supplier;
