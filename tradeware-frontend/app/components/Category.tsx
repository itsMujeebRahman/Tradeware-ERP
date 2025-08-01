import axios from "axios";
import { X } from "lucide-react";
import React, { SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { mutate } from "swr";
import { category, categoryRest } from "../types/MainTypes";

interface props {
  setEnableCategory: React.Dispatch<SetStateAction<boolean>>;
  cat: category[];
}

const Category = ({ setEnableCategory, cat }: props) => {
  const [categoryDetails, setCategoryDtails] = useState<category>(categoryRest);
  const [enableList, setEnableList] = useState<boolean>(false);

  const handleCategoryDetails = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCategoryDtails((Prev) => ({ ...Prev, [name]: value }));
  };

  const handleSendCategory = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/category",
        categoryDetails
      );
      toast.success(response?.data?.message);
    } catch (error: any) {
      toast.error(error.response?.data?.error);
    }
    mutate("http://localhost:3001/category");
  };

  return (
    <div className="fixed top-0 left-0 z-50 bg-black/30 flex items-center justify-center h-screen w-screen">
      {!enableList ? (
        <div className="bg-white rounded-xl shadow w-[30vw] h-[50vh] p-5  flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-xl">Create Catgory</h1>
            <X onClick={() => setEnableCategory(false)} />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col ">
              <h1 className="text-sm">Name</h1>
              <input
                className="border focus:outline-gray-400 p-1 rounded bg-white border-gray-400"
                name="Name"
                value={categoryDetails.Name}
                onChange={handleCategoryDetails}
              />
            </div>
            <div className="flex flex-col ">
              <h1 className="text-sm">Code</h1>
              <input
                className="border focus:outline-gray-400 p-1 rounded bg-white border-gray-400"
                name="Code"
                value={categoryDetails.Code}
                onChange={handleCategoryDetails}
              />
            </div>
            <div>
              <h1 className="text-sm">Description</h1>
              <textarea
                className="border focus:outline-gray-400 p-1 rounded bg-white w-full border-gray-400"
                name="Description"
                value={categoryDetails.Description}
                onChange={handleCategoryDetails}
              />
            </div>
          </div>
          <div className=" flex items-center justify-end gap-2">
            <button
              className="bg-gray-600  p-2 w-20 text-white rounded"
              onClick={() => setEnableList(true)}
            >
              List
            </button>
            <button
              className="bg-gray-600  p-2 w-20 text-white rounded"
              onClick={handleSendCategory}
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow w-[30vw] h-[50vh] p-4 gap-3 flex flex-col">
          <div className="flex items-center justify-between px-1 gap-5">
            <h1 className="font-bold text-xl">Category List</h1>
            <div className="flex items-center gap-2 flex-grow">
              <input className="border border-gray-400 focus:outline-gray-600 rounded-xl p-1 px-2 w-full" />
              <X onClick={() => setEnableList(false)} />
            </div>
          </div>
          <div className="flex flex-col h-full">
            <div className="grid grid-cols-8 p-2  border border-gray-300 bg-black/5 rounded-t-xl">
              <span className="col-span-2 font-bold">Code</span>
              <span className="col-span-6 font-bold">Name</span>
            </div>
            <div
              className=" h-full p-1 gap-1 flex flex-col overflow-y-scroll bg-black/2 border
                  border-gray-300 rounded-b-xl "
            >
              {cat?.map((c: category, index: number) => (
                <div
                  key={index}
                  className="grid grid-cols-8 p-2 gap-2 shadow rounded-xl bg-white"
                >
                  <span className="col-span-2 border-r border-r-gray-300">
                    {c.Code}
                  </span>
                  <span className="col-span-6">{c.Name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
