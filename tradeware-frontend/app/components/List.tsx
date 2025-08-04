import { FullscreenIcon, X } from "lucide-react";
import React, { useState } from "react";
import SingleListObject from "./SingleListObject";
import { person, product } from "../types/MainTypes";

type props = {
      isProduct: true;
      setEnableList: React.Dispatch<React.SetStateAction<boolean>>;
      data: product[];
      handleEditDetails: (id: string) => void;
    }
  | {
      isProduct: false;
      setEnableList: React.Dispatch<React.SetStateAction<boolean>>;
      data: person[];
      handleEditDetails: (id: string) => void;
    };

const List = ({ setEnableList, data, handleEditDetails, isProduct }: props) => {
  const [windowSize, setWindowSize] = useState<boolean>(false);
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-black/30 z-50 p-4">
      <div
        className={`${
          windowSize ? "w-full h-full" : "w-[60vw] h-[70vh]"
        } bg-white rounded-xl p-4 flex flex-col gap-4`}
      >
        <div className=" flex items-center justify-between  w-full px-1">
          <h1 className="font-bold text-2xl">Party List</h1>
          <div className=" flex items-center justify-between gap-3">
            <div>
              <input
                className="border border-gray-400 focus:outline-gray-600 rounded-xl p-2 w-[30vw] "
                placeholder="Type to Search..."
              />
            </div>
            <div className="flex items-center justify-between gap-4 border border-gray-300 rounded-xl p-2">
              <FullscreenIcon
                onClick={() => setWindowSize(!windowSize)}
                className="text-gray-600 hover:text-gray-800"
              />
              <X
                onClick={() => setEnableList(false)}
                className="text-gray-600 hover:text-gray-800"
              />
            </div>
          </div>
        </div>
        <div className=" h-0 flex-grow flex flex-col">
          {windowSize ? (
            <div
              className={`${
                isProduct ? "grid grid-cols-8" : "grid grid-cols-7"
              } p-3 bg-black/5 border border-gray-300 pr-7 rounded-t-xl font-bold`}
            >
              {isProduct ? (
                <>
                  <span>Name</span>
                  <span>Code</span>
                  <span>Category</span>
                  <span>Unit</span>
                  <span>Quantity</span>
                  <span>Cost</span>
                  <span>Sell Price</span>
                  <span>Tax</span>
                </>
              ) : (
                <>
                  <span>Name</span>
                  <span>Address1</span>
                  <span>Address2</span>
                  <span>Phone</span>
                  <span>Email</span>
                  <span>TaxNo</span>
                  <span>Notes</span>
                </>
              )}
            </div>
          ) : (
            <div
              className={`${
                isProduct ? "grid grid-cols-5" : "grid grid-cols-4"
              } p-3 bg-black/5 border border-gray-300 pr-7 rounded-t-xl font-bold`}
            >
              {isProduct ? (
                <>
                  {" "}
                  <span>Name</span>
                  <span>Category</span>
                  <span>Quantity</span>
                  <span>Cost</span>
                  <span>Sell Price</span>
                </>
              ) : (
                <>
                  {" "}
                  <span>Name</span>
                  <span>Address1</span>
                  <span>Phone</span>
                  <span>Email</span>
                </>
              )}
            </div>
          )}

          <div
            className=" h-full  flex flex-col gap-1 p-1 bg-black/2 border border-gray-300 
          overflow-y-scroll rounded-b-xl"
          >
            {isProduct ? (
              <>
                {" "}
                {data?.map((object, index) => (
                  <SingleListObject
                    object={object}
                    key={index}
                    windowSize={windowSize}
                    handleEditDetails={handleEditDetails}
                    isProduct={true}
                  />
                ))}
              </>
            ) : (
              <>
                {" "}
                {data?.map((object, index) => (
                  <SingleListObject
                    object={object}
                    key={index}
                    windowSize={windowSize}
                    handleEditDetails={handleEditDetails}
                    isProduct={false}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
