"use client";
import ProductInputFields from "./ProductInputFields";
import Category from "./Category";
import Unit from "./Unit";
import axios from "axios";
import useSWR from "swr";
import React, { ChangeEvent, ReactElement, useState } from "react";
import toast from "react-hot-toast";
import List from "./List";

interface product {
  Name: string;
  Code: string;
  Barcode: string;
  Category: string;
  Unit: string;
  Cost: string;
  SellPrice: number;
  MaxSellPrice: number;
  Quantity: number;
  TaxPercentage: string;
  Description: string;
}

const dataRest: product = {
  Name: "",
  Code: "",
  Barcode: "",
  Category: "",
  Unit: "",
  Cost: "",
  SellPrice: 0,
  MaxSellPrice: 0,
  Quantity: 0,
  TaxPercentage: "",
  Description: "",
};

const Customer = () => {
  const [enableCategory, setEnableCategory] = useState<boolean>(false);
  const [enableUnit, setEnableUnit] = useState<boolean>(false);
  const [editData, setEditData] = useState<boolean>(false);
  const [productDetails, setproductDetails] = useState<product>(dataRest);
  const [enableList, setEnableList] = useState<boolean>(false);
  const [isProduct, setIsProduct] = useState<boolean>(false);

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data: cat } = useSWR("http://localhost:3001/category", fetcher);
  const { data: uni } = useSWR("http://localhost:3001/unit", fetcher);
  const { data } = useSWR("http://localhost:3001/product", fetcher);

  const handleProductList = () => {
    setIsProduct(true);
    setEnableList(true);
  };

  const handleProductsData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setproductDetails((Prev) => ({ ...Prev, [name]: value }));
  };

  const handleSendProductDetails = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/product",
        productDetails
      );
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(error.resposne?.data?.error);
    }
  };

  return (
    <div className="h-full flex flex-col gap-2 ">
      {enableList ? (
        <List data={data} isProduct={isProduct} setEnableList={setEnableList} />
      ) : (
        ""
      )}
      {enableCategory ? (
        <Category setEnableCategory={setEnableCategory} cat={cat} />
      ) : (
        ""
      )}
      {enableUnit ? <Unit setEnableUnit={setEnableUnit} uni={uni} /> : ""}
      <div className=" flex items-center justify-between p-4 rounded-xl ">
        <h1 className="font-bold text-2xl">Product Creation</h1>
        <div className=" flex">
          <div className="flex gap-2 pr-5">
            <button
              className="bg-gray-600 p-2 w-25 text-white rounded"
              onClick={() => setEnableCategory(true)}
            >
              Category
            </button>
            <button
              className="bg-gray-600  p-2 w-25 text-white rounded"
              onClick={() => setEnableUnit(true)}
            >
              Unit
            </button>
          </div>
          <div className="flex gap-2 border-l border-gray-400 pl-5">
            <button
              className="bg-gray-600  p-2 w-20 text-white rounded"
              onClick={() => setEditData(!editData)}
            >
              Edit
            </button>
            <button
              className="bg-gray-600  p-2 w-20 text-white rounded"
              onClick={handleProductList}
            >
              List
            </button>
            <button
              className="bg-gray-600  p-2 w-20 text-white rounded"
              onClick={handleSendProductDetails}
            >
              Save
            </button>
            <button className="bg-gray-600  p-2 w-20 text-white rounded">
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div className=" rounded-xl h-[84vh] columns-3 backdrop-blur-xl bg-white border border-gray-300 py-5 ">
        <div className="px-5 flex flex-col gap-4 break-inside-avoid ">
          {[
            "Name",
            "Code",
            "Barcode",
            "Category",
            "Unit",
            "Cost",
            "SellPrice",
            "MaxSellPrice",
            "Quantity",
            "Tax Percentage",
            "Description",
          ].map((inputName, index) => (
            <ProductInputFields
              key={index}
              inputName={inputName}
              cat={cat}
              uni={uni}
              handleProductsData={handleProductsData}
              productDetails={productDetails}
              editData={editData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customer;
