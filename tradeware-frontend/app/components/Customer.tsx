"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import CustomerList from "./CustomerList";
import useSWR from "swr";

interface customer {
  customerName: string;
  customerAddress1: string;
  customerAddress2: string;
  customerAddress3: string;
  customerPhone: string;
  customerEmail: string;
  customerTaxNo: string;
  _id: string;
}

const dataReset: customer = {
  customerName: "",
  customerAddress1: "",
  customerAddress2: "",
  customerAddress3: "",
  customerPhone: "",
  customerEmail: "",
  customerTaxNo: "",
  _id: "",
};

const Customer = () => {
  const [customerData, setCustomerData] = useState<customer>(dataReset);
  const [enableList, setEnableList] = useState<boolean>(false);
  const [editCustomerData, setEditCustomerData] = useState<boolean>(true);
  const [addCustomerData, setAddCustomerData] = useState<boolean>(true);
  const [fetchId, setFetchId] = useState<string>("");

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data: customer, mutate } = useSWR(
    "http://localhost:3001/getCustomer",
    fetcher
  );

  const handleCustomerData = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCustomerData((Prev) => ({
      ...Prev,
      [name]: value,
    }));
  };

  const handleEditMode = (id: string) => {
    setEnableList(false);
    setAddCustomerData(false);
    setEditCustomerData(false);
    setFetchId(id);
    setCustomerData(customer.find((cust: customer) => cust._id === id));
  };

  const handleSendCustomerData = async (fetchId: string) => {
    if (addCustomerData) {
      try {
        const { _id, ...customerPayload } = customerData; // removd id and send all othr data to back
        await axios.post("http://localhost:3001/addCustomer", customerPayload);
        toast.success(`${customerData.customerName}'s Data Saved`);
      } catch (error) {
        toast.success(`Unable to Save ${customerData.customerName}'s Data `);
      }
      mutate();
      setCustomerData(dataReset);
    } else {
      try {
        await axios.post(
          `http://localhost:3001/addCustomer/${fetchId}`,
          customerData
        );

        toast.success(`${customerData.customerName}'s Data Saved`);
      } catch (error) {
        toast.success(`Unable to Save ${customerData.customerName}'s Data `);
      }
      mutate();
      setCustomerData(dataReset);
    }
  };

  const handleCancel = () => {
    setCustomerData(dataReset);
    setAddCustomerData(true);
  };

  return (
    <div className="flex h-full">
      <div className=" border-l-4 border-gray-600 h-full flex flex-col gap-10 py-10 ">
        {enableList ? (
          <CustomerList
            setEnableList={setEnableList}
            customer={customer}
            handleEditMode={handleEditMode}
          />
        ) : (
          ""
        )}

        <div className=" w-full pl-5">
          <h1 className="font-bold text-4xl">Customer Creation</h1>
        </div>
        <div className=" pl-5 flex flex-col gap-5 w-[50vw]">
          <div className=" flex flex-col ">
            Customer Name
            <input
              name="customerName"
              value={customerData?.customerName}
              onChange={handleCustomerData}
              className={`border p-2 text-black ${
                !editCustomerData ? "text-gray-500 border-gray-300" : ""
              }`}
              disabled={!editCustomerData}
            />
          </div>
          <div className="flex flex-col border border-gray-300 rounded-2xl p-5">
            Address-1
            <input
              className={`border p-1 ${
                !editCustomerData ? "text-gray-500 border-gray-300" : ""
              }`}
              onChange={handleCustomerData}
              name="customerAddress1"
              value={customerData?.customerAddress1}
              disabled={!editCustomerData}
            />
            Address-2
            <input
              className={`border p-1 ${
                !editCustomerData ? "text-gray-500 border-gray-300" : ""
              }`}
              onChange={handleCustomerData}
              name="customerAddress2"
              value={customerData?.customerAddress2}
              disabled={!editCustomerData}
            />
            Address-3
            <input
              className={`border p-1 ${
                !editCustomerData ? "text-gray-500 border-gray-300" : ""
              }`}
              onChange={handleCustomerData}
              name="customerAddress3"
              value={customerData?.customerAddress3}
              disabled={!editCustomerData}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-5">
              Contact
              <input
                className={`border p-1 w-full ${
                  !editCustomerData ? "text-gray-500 border-gray-300" : ""
                }`}
                onChange={handleCustomerData}
                name="customerPhone"
                value={customerData?.customerPhone}
                disabled={!editCustomerData}
              />
            </div>
            <div className="flex items-center gap-9">
              Email
              <input
                className={`border p-1 w-full ${
                  !editCustomerData ? "text-gray-500 border-gray-300" : ""
                }`}
                onChange={handleCustomerData}
                name="customerEmail"
                value={customerData?.customerEmail}
                disabled={!editCustomerData}
              />
            </div>
            <div className="flex items-center gap-13">
              Tax
              <input
                className={`border p-1 w-full ${
                  !editCustomerData ? "text-gray-500 border-gray-300" : ""
                }`}
                onChange={handleCustomerData}
                name="customerTaxNo"
                value={customerData?.customerTaxNo}
                disabled={!editCustomerData}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" p-2 px-10 flex flex-col items-center justify-between  py-10 pt-25">
        <div className=" w-full h-[30vh] flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Notes</h1>
          <textarea className="border h-full w-full" />
        </div>
        <div className=" flex items-center gap-2">
          <button
            className="bg-gray-600  p-2 w-20 text-white rounded-xl"
            onClick={() => setEnableList(true)}
          >
            List
          </button>
          <button
            className="bg-gray-600  p-2 w-20 text-white rounded-xl"
            onClick={() => setEditCustomerData(true)}
          >
            Edit
          </button>
          <button
            onClick={() => handleSendCustomerData(fetchId)}
            className={`  p-2 w-20 text-white rounded-xl ${
              !editCustomerData ? "bg-gray-300" : "bg-gray-600"
            } `}
            disabled={!editCustomerData}
          >
            Save
          </button>
          <button
            className="bg-gray-600  p-2 w-20 text-white rounded-xl"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customer;
