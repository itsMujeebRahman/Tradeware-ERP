"use client";
import React, { useState } from "react";
import InputFields from "./InputFields";
import axios from "axios";
import toast from "react-hot-toast";
import List from "./List";
import useSWR from "swr";
import { person, personReset } from "../types/MainTypes";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Supplier = () => {
  const [supplierDetails, setSupplierDetails] = useState<person>(personReset);
  const [enableList, setEnableList] = useState<boolean>(false);
  const [editData, setEditData] = useState<boolean>(true);
  const [addData, setAddData] = useState<boolean>(true);
  const [supplierId, setSupplierId] = useState<string>("");

  const { data, mutate } = useSWR("http://localhost:3001/supplier", fetcher);

  const handleCollectSupplierDetails = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setSupplierDetails((Prev) => ({ ...Prev, [name]: value }));
  };

  const handleEditSupplierDetails = (id: string) => {
    setEnableList(false);
    setSupplierDetails(data.find((sup: person) => sup._id === id));
    setAddData(false);
    setEditData(false);
    setSupplierId(id);
  };

  const handleSendSupplierDetails = async () => {
    console.log("id reachd here", supplierId);
    if (addData) {
      const { _id, ...supplierPayload } = supplierDetails;
      try {
        await axios.post("http://localhost:3001/supplier", supplierPayload);
        toast.success(`${supplierDetails.Name}'s Data Saved`);
      } catch {
        toast.error(`Error while Saving ${supplierDetails.Name}'s Data `);
      }
      setSupplierDetails(personReset);
      mutate();
    } else {
      try {
        await axios.post(
          `http://localhost:3001/supplier/${supplierId}`,
          supplierDetails
        );
        toast.success(`${supplierDetails.Name}'s Data Saved`);
      } catch {
        toast.error(`Error while Saving ${supplierDetails.Name}'s Data `);
      }
    }
    setSupplierDetails(personReset);
    setAddData(true);
    mutate();
  };

  return (
    <div className="h-full flex flex-col gap-2 ">
      {enableList ? (
        <List
          setEnableList={setEnableList}
          data={data}
          handleEditDetails={handleEditSupplierDetails}
        />
      ) : (
        ""
      )}
      <div className=" flex items-center justify-between p-4 rounded-xl ">
        <h1 className="font-bold text-2xl">Supplier Creation</h1>
        <div className="flex gap-2">
          <button
            className="bg-gray-600  p-2 w-20 text-white rounded"
            onClick={() => setEditData(true)}
          >
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
            onClick={handleSendSupplierDetails}
          >
            Save
          </button>
          <button className="bg-gray-600  p-2 w-20 text-white rounded">
            Cancel
          </button>
        </div>
      </div>
      <div className=" rounded-xl h-[84vh] columns-3 backdrop-blur-xl bg-white border border-gray-300 py-5 ">
        <div className="px-5 flex flex-col gap-3 break-inside-avoid ">
          {["Name", "Address", "Phone", "Email", "TaxNo", "Notes"].map(
            (inputName, index) => (
              <InputFields
                key={index}
                inputName={inputName}
                handleCollectDetails={handleCollectSupplierDetails}
                personDetails={supplierDetails}
                editData={editData}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Supplier;
