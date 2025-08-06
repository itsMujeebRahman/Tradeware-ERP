"use client";
import React, { useEffect, useState } from "react";
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
import {
  footerFields,
  headerField,
  tableHeading,
} from "../constants/PurchaseConstants";
import List from "./List";
import { PurchaseBigList, PurchaseSmallList } from "../constants/ListConstants";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const changeValue: Record<string, keyof headerData> = {
  "Total Qty": "TotalQty",
  "Total Sub": "GrandSubTotal",
  "Total Tax": "TotalTax",
  "Total Net": "GrandNetTotal",
};

const Purchase = () => {
  const { data: supplier1, mutate } = useSWR(
    "http://localhost:3001/supplier",
    fetcher
  );
  const { data: purchase1, mutate: pulse } = useSWR(
    "http://localhost:3001/purchase",
    fetcher
  );
  const { data: product1 } = useSWR("http://localhost:3001/product", fetcher);

  const [productDetails, setProductDetails] = useState<productData[]>([
    { ...productReset, FrontId: 1 },
  ]);

  const [headerData, setHeaderData] = useState<headerData>(headReset);
  const [enableList, setEnableList] = useState<boolean>(false);

  useEffect(() => {
    setHeaderData((Prev) => ({
      ...Prev,
      InvoiceNo: purchase1?.length + 1,
      Date: new Date().toISOString().split("T")[0],
    }));
  }, [product1]);

  const handleSendInvoiceData = async () => {
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

  const handleFooterData = () => {
    const totalQty = productDetails.reduce(
      (sum, item) => sum + Number(item.Quantity),
      0
    );
    handlecollectHeaderData({
      target: { name: "TotalQty", value: totalQty },
    } as any);

    const GrandSubTotal = productDetails.reduce(
      (sum, item) => sum + Number(item.SubTotal),
      0
    );
    handlecollectHeaderData({
      target: { name: "GrandSubTotal", value: GrandSubTotal },
    } as any);

    const TotalTax = productDetails.reduce(
      (sum, item) => sum + Number(item.Tax),
      0
    );
    handlecollectHeaderData({
      target: { name: "TotalTax", value: TotalTax },
    } as any);

    const GrandNetTotal = productDetails.reduce(
      (sum, item) => sum + Number(item.NetTotal),
      0
    );
    handlecollectHeaderData({
      target: { name: "GrandNetTotal", value: GrandNetTotal },
    } as any);
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

  useEffect(() => {
    handleFooterData();
  }, [productDetails]);

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

  const handleEditPurchase = () => {};
  return (
    <div className=" flex flex-col gap-[0.2vw] h-full">
      {enableList ? (
        <List
          setEnableList={setEnableList}
          data={purchase1}
          handleEditDetails={handleEditPurchase}
          BigList={PurchaseBigList}
          SmallList={PurchaseSmallList}
        />
      ) : (
        ""
      )}
      <div className=" flex items-center justify-between p-[0.7vw] rounded-xl h-3/40">
        <h1 className="font-bold text-[1.5vw]">
          Purchase Invoice / {purchase1?.length + 1}
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
      <div className="flex flex-col gap-[0.2vw] h-33/40">
        <div
          className=" rounded-xl h-33/100 bg-white border border-gray-300 p-[1.5vw]
        flex flex-col !items-start content-start gap-[1vw] justify-start flex-wrap"
        >
          {headerField.map((inputName, index) => (
            <TransactionInputField
              inputName={inputName}
              key={index}
              supplier1={supplier1}
              handlecollectHeaderData={handlecollectHeaderData}
              headerData={headerData}
            />
          ))}
        </div>
        <div className=" rounded-xl h-66/100 flex-grow bg-white border-gray-300 ">
          <div
            className="rounded-t-xl  grid grid-cols-34 h-5/50 items-center border border-gray-300 
          pr-[1vw] pl-[0.5vw] bg-gray-100"
          >
            {tableHeading.map((item) => (
              <span
                className={`text-[1.1vw] col-span-${item.span} border-r border-gray-300 pl-[0.3vw]`}
              >
                {item.Name}
              </span>
            ))}
          </div>
          <div
            className="rounded-b-xl  border border-gray-300 h-45/50 p-[0.3vw] bg-gray-100 
          flex flex-col gap-[0.3vw] overflow-y-scroll"
          >
            {productDetails.map((productData, index) => (
              <SingleTransactionObject
                key={index}
                product1={product1}
                handlDeleteProduct={handlDeleteProduct}
                handleNextLine={handleNextLine}
                handleCollectProductData={handleCollectProductData}
                productDetails={productDetails}
                productData={productData}
              />
            ))}

            <SingleTransactionObject
              product1={product1}
              handlDeleteProduct={handlDeleteProduct}
              handleNextLine={handleNextLine}
              handleCollectProductData={handleCollectProductData}
              productDetails={productDetails}
            />
          </div>
        </div>
      </div>
      <div className="border h-4/40 rounded-xl grid grid-cols-34 items-center bg-white gap-[0.5vw]">
        {footerFields.map((item, index) => (
          <div
            className={`col-span-4 relative ${
              item.name === "Total Qty" ? "col-start-18" : ""
            }`}
            key={index}
          >
            <p
              className="text-txtone absolute top-0 left-0 -translate-y-1/2 
              translate-x-2 bg-white px-[0.3vw] z-10 font-semibold"
            >
              {item.name}
            </p>
            <input
              className="border border-gray-300 w-full h-[2.7vw] px-[0.5vw] rounded focus:outline-0"
              value={headerData[changeValue[item.name]]}
              readOnly
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchase;
