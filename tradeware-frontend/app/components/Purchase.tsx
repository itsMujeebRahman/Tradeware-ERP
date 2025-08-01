"use client";
import React, { useState } from "react";
import TransactionInputField from "./TransactionInputField";
import SingleTransactionObject from "./SingleTransactionObject";
import axios from "axios";
import toast from "react-hot-toast";
import useSWR from "swr";
import { Button } from "@/components/ui/button";
import {
  headerData,
  productData,
  headReset,
  productReset,
} from "../types/MainTypes";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Purchase = () => {
  const { data, mutate } = useSWR("http://localhost:3001/supplier", fetcher);
  const { data: purchase1, mutate: pulse } = useSWR(
    "http://localhost:3001/purchase",
    fetcher
  );

  const [productDetails, setProductDetails] = useState<productData[]>([
    { ...productReset, FrontId: 1 },
  ]);

  const [headerData, setHeaderData] = useState<headerData>({
    ...headReset,
    Date: new Date().toISOString().split("T")[0],
    InvoiceNo: purchase1?.length + 1,
  });

  const handleSendInvoiceData = async () => {
    setHeaderData((prev) => ({
      ...prev,
    }));
    try {
      const response = await axios.post("http://localhost:3001/purchase", {
        productDetails,
        headerData,
      });
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(error.resposne?.data?.error);
    }
    setProductDetails([{ ...productReset, FrontId: 1 }]);
    setHeaderData(headReset);
    pulse();
  };

  const handlecollectHeaderData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setHeaderData((Prev) => ({ ...Prev, [name]: value }));
  };

  const handleCollectProductData = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const { name, value } = e.target;
    setProductDetails((Prev) =>
      Prev.map((item, i) => (i + 1 === id ? { ...item, [name]: value } : item))
    );
  };

  const handleNextLine = (
    e: React.KeyboardEvent<HTMLInputElement>,
    name: string
  ) => {
    if (e.key === "Enter" && name === "NetTotal") {
      setProductDetails((Prev) => [
        ...Prev,
        {
          ...productReset,
          FrontId: productDetails.length + 1,
        },
      ]);
    }
  };

  const handlDeleteProduct = (id: number) => {
    setProductDetails((Prev: productData[]) =>
      Prev.filter((item) => item.FrontId !== id)
    );
  };
  return (
    <div className=" flex flex-col gap-[0.2] h-full">
      <div className=" flex items-center justify-between p-[0.7vw] rounded-xl h-3/40">
        <h1 className="font-bold text-[1.5vw]">
          Purchase Invoice / {purchase1?.length}
        </h1>
        <div className="flex gap-[0.4vw]">
          <Button className="w-[5vw] h-[5vh] text-white text-[1vw]">
            Edit
          </Button>
          <Button className="w-[5vw] h-[5vh] text-white text-[1vw]">
            List
          </Button>
          <Button
            className="w-[5vw] h-[5vh] text-white text-[1vw]"
            onClick={handleSendInvoiceData}
          >
            Save
          </Button>
          <Button className="w-[5vw] h-[5vh] text-white text-[1vw]">
            Cancel
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-[0.2vw] h-37/40">
        <div
          className=" rounded-xl h-33/100 bg-white border border-gray-300 p-[0.9vw]
        flex flex-col !items-start content-start gap-[0.7vw] justify-start flex-wrap"
        >
          {[
            "Name",
            "Address 1",
            "Address 2",
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
              handlecollectHeaderData={handlecollectHeaderData}
              headerData={headerData}
              data={data}
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
            {productDetails.map((product, index) => (
              <SingleTransactionObject
                productDetails={productDetails}
                handlDeleteProduct={handlDeleteProduct}
                handleCollectProductData={handleCollectProductData}
                handleNextLine={handleNextLine}
                productData={product}
                key={index}
              />
            ))}

            <SingleTransactionObject
              handleCollectProductData={handleCollectProductData}
              handleNextLine={handleNextLine}
              productDetails={productDetails}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
