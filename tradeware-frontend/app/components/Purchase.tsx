"use client";
import React, { useState } from "react";
import TransactionInputField from "./TransactionInputField";
import SingleTransactionObject from "./SingleTransactionObject";

interface invoiceDetails {
  Name: string;
  Address1: string;
  Address2: string;
  InvoiceNo: string;
  ReferenceNo: string;
  Date: string;
  PaymentMthod: string;
  Notes: string;
  productDetails: productData[];
}

interface productData {
  Name: string;
  Code: string;
  Barcode: string;
  SellPrice: number;
  Quantity: number;
  Tax: number;
  SubTotal: number;
  NetTotal: number;
}

const DataReset: productData = {
  Name: "",
  Code: "",
  Barcode: "",
  SellPrice: 0,
  Quantity: 0,
  Tax: 0,
  SubTotal: 0,
  NetTotal: 0,
};

const Purchase = () => {
  const [addField, setAddField] = useState<number[]>([1]);
  const [productData, setproductData] = useState<productData>(DataReset);
  const [productDetails, setProductDetails] = useState<productData[]>();
  const [invoiceData, setInvoiceData] = useState<invoiceDetails>();

  const handleCollectProductData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setproductData((Prev) => ({ ...Prev, [name]: value }));

    if (productData.NetTotal.toString().length === 2) {
      setAddField((Prev) => [...Prev, Prev.length]);
    }
  };

  const handleAddProductToCollection = () => {
    setProductDetails((Prev) => [...(Prev || []), productData]);
    setproductData(DataReset);
  };

  return (
    <div className=" flex flex-col gap-[0.2] h-full">
      <div className=" flex items-center justify-between p-[0.7vw] rounded-xl h-3/40">
        <h1 className="font-bold text-[1.5vw]">Purchase Invoice</h1>
        <div className="flex gap-[0.4vw]">
          <button className="bg-gray-600  w-[5vw] h-[5vh] text-white rounded text-[1vw]">
            Edit
          </button>
          <button className="bg-gray-600  w-[5vw] h-[5vh] text-white rounded text-[1vw]">
            List
          </button>
          <button
            className="bg-gray-600  w-[5vw] h-[5vh] text-white rounded text-[1vw]"
            onClick={handleAddProductToCollection}
          >
            Save
          </button>
          <button className="bg-gray-600  w-[5vw] h-[5vh] text-white rounded text-[1vw]">
            Cancel
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[0.2vw] h-37/40">
        <div
          className=" rounded-xl h-34/100 bg-white border border-gray-300 p-[1vw]
        flex flex-col !items-start content-start gap-[0.7vw] justify-start flex-wrap"
        >
          {[
            "Name",
            "Address",
            "Invoice No",
            "Reference No",
            "Date",
            "Payment Method",
            "Notes",
          ].map((inputName, index) => (
            <TransactionInputField
              inputName={inputName}
              className="w-4/17"
              key={index}
            />
          ))}
        </div>
        <div className=" rounded-xl h-66/100 flex-grow bg-white border-gray-300 ">
          <div
            className="rounded-t-xl  grid grid-cols-34 h-5/50 items-center border border-gray-300 
          pr-[1vw] pl-[0.5vw] bg-gray-100"
          >
            <span className="text-[1.1vw] col-span-4 border-r border-gray-300 pl-[0.3vw]">
              Code
            </span>
            <span className="text-[1.1vw] col-span-4 border-r border-gray-300 pl-[0.3vw]">
              Barcode
            </span>
            <span className="text-[1.1vw] col-span-11 border-r border-gray-300 pl-[0.3vw]">
              Name
            </span>
            <span className="text-[1.1vw] col-span-2 border-r border-gray-300 pl-[0.3vw]">
              Qty
            </span>
            <span className="text-[1.1vw] col-span-2 border-r border-gray-300 pl-[0.3vw]">
              Rate
            </span>
            <span className="text-[1.1vw] col-span-4 border-r border-gray-300 pl-[0.3vw]">
              Sub Total
            </span>
            <span className="text-[1.1vw] col-span-2 border-r border-gray-300 pl-[0.3vw]">
              Tax
            </span>
            <span className="text-[1.1vw] col-span-4 pl-2">Net Total</span>
          </div>
          <div
            className="rounded-b-xl  border border-gray-300 h-45/50 p-[0.3vw] bg-gray-100 
          flex flex-col gap-[0.3vw] overflow-y-scroll"
          >
            {addField.map((num, index) => (
              <SingleTransactionObject
                key={index}
                handleCollectProductData={handleCollectProductData}
                productData={productData}
              />
            ))}

            {addField.map((num, index) => (
              <SingleTransactionObject
                key={index}
                handleCollectProductData={handleCollectProductData}
                productData={productData}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
