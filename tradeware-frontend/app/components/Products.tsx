"use client";
import ProductInputFields from "./ProductInputFields";
import Category from "./Category";
import Unit from "./Unit";
import axios from "axios";
import useSWR from "swr";
import React, { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import List from "./List";
import {
  product,
  productDataRest,
  productAdd,
  productAddDataRest,
} from "../types/MainTypes";
import { ProductBigList, ProductSmallList } from "../constants/ListConstants";

const Products = () => {
  const [enableCategory, setEnableCategory] = useState<boolean>(false);
  const [enableUnit, setEnableUnit] = useState<boolean>(false);
  const [editDetails, setEditDetails] = useState<boolean>(true);
  const [productDetails, setProductDetails] =
    useState<productAdd>(productAddDataRest);
  const [enableList, setEnableList] = useState<boolean>(false);
  const [addDetails, setAddDetails] = useState<boolean>(true);
  const [productId, setProductId] = useState<string>("");

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data: cat } = useSWR("http://localhost:3001/category", fetcher);
  const { data: uni } = useSWR("http://localhost:3001/unit", fetcher);
  const { data, mutate } = useSWR("http://localhost:3001/product", fetcher);

  const noData = Object.values(productDetails).every(
    (val) => val === "" || val === 0
  );

  const handleCancelButton = () => {
    setProductDetails(productDataRest);
    setAddDetails(true);
    setEditDetails(true);
    console.log(productDetails);
  };

  const handleCollectProductDetails = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductDetails((Prev) => ({ ...Prev, [name]: value }));
  };

  const handleEditProductDetails = (id: string) => {
    setEnableList(false);
    setEditDetails(false);
    setAddDetails(false);
    setProductDetails(data.find((pro: product) => pro._id === id));
    setProductId(id);
  };

  const handleSendProductDetails = async () => {
    if (addDetails) {
      if (productDetails.Name.trim() === "") {
        toast.error("Product Name Needed");
      }
      try {
        const response = await axios.post(
          "http://localhost:3001/product",
          productDetails
        );
        toast.success(response.data.message);
      } catch (error: any) {
        toast.error(error.resposne?.data?.error);
      }
      console.log("productDetails", productDetails);
      mutate();
      setProductDetails(productDataRest);
    } else {
      try {
        const response = await axios.post(
          `http://localhost:3001/product/${productId}`,
          productDetails
        );
        toast.success(response.data.message);
      } catch (error: any) {
        toast.error(error.resposne?.data?.error);
      }
      mutate();
      setProductDetails(productDataRest);
    }
  };

  return (
    <div className="h-full flex flex-col gap-2 ">
      {enableList ? (
        <List
          data={data}
          setEnableList={setEnableList}
          handleEditDetails={handleEditProductDetails}
          BigList={ProductBigList}
          SmallList={ProductSmallList}
        />
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
              onClick={() => setEditDetails(true)}
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
              className={`${
                noData ? "bg-gray-500" : "bg-gray-600"
              }  p-2 w-20 text-white rounded`}
              onClick={handleSendProductDetails}
              disabled={noData}
            >
              Save
            </button>
            <button
              className="bg-gray-600  p-2 w-20 text-white rounded"
              onClick={handleCancelButton}
            >
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
              handleCollectDetails={handleCollectProductDetails}
              productDetails={productDetails}
              editDetails={editDetails}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
