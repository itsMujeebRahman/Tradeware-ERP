"use client";
import React, { useState } from "react";
import InputFields from "./InputFields";
import axios from "axios";
import toast from "react-hot-toast";
import List from "./List";
import useSWR from "swr";

interface person {
  Name: string;
  Address1: string;
  Address2: string;
  Address3: string;
  Phone: string;
  Email: string;
  TaxNo: string;
  Notes: string;
  _id: string;
}

const dataReset: person = {
  Name: "",
  Address1: "",
  Address2: "",
  Address3: "",
  Phone: "",
  Email: "",
  TaxNo: "",
  Notes: "",
  _id: "",
};

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Customer = () => {
  const [personData, setPersonData] = useState<person>(dataReset);
  const [enableList, setEnableList] = useState<boolean>(false);
  const [editData, setEditData] = useState<boolean>(true);
  const [addData, setAddData] = useState<boolean>(true);
  const [customerId, setCustomerId] = useState<string>();

  const { data, mutate } = useSWR("http://localhost:3001/customer", fetcher);

  const handleFetchPersonData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonData((Prev) => ({ ...Prev, [name]: value }));
  };

  const handleEditPersonData = (id: string) => {
    setEnableList(false);
    setPersonData(data.find((sup: person) => sup._id === id));
    setAddData(false);
    setEditData(false);
    setCustomerId(id);
  };

  const handleSendCustomerData = async (customerId: string) => {
    if (addData) {
      const { _id, ...customerPayload } = personData;
      try {
        await axios.post("http://localhost:3001/customer", customerPayload);
        toast.success(`${personData.Name}'s Data Saved`);
      } catch {
        toast.error(`Error while Saving ${personData.Name}'s Data `);
      }
      setPersonData(dataReset);
      mutate();
    } else {
      try {
        await axios.post(
          `http://localhost:3001/customer/${customerId}`,
          personData
        );
        toast.success(`${personData.Name}'s Data Saved`);
      } catch {
        toast.error(`Error while Saving ${personData.Name}'s Data `);
      }
    }
    setPersonData(dataReset);
    setAddData(true);
    mutate();
  };

  return (
    <div className="h-full flex flex-col gap-2 ">
      {enableList ? (
        <List
          setEnableList={setEnableList}
          data={data}
          handleEditPersonData={handleEditPersonData}
        />
      ) : (
        ""
      )}
      <div className=" flex items-center justify-between p-5 rounded-xl ">
        <h1 className="font-bold text-2xl">Customer Creation</h1>
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
            onClick={() => handleSendCustomerData(data._id)}
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
                handleFetchPersonData={handleFetchPersonData}
                personData={personData}
                editData={editData}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Customer;
