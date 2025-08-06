import { FullscreenIcon, X } from "lucide-react";
import React, { useState } from "react";
import SingleListObject from "./SingleListObject";
import { headerData, ListType, person, product } from "../types/MainTypes";

type Lister = person[] | product[];

interface props {
  setEnableList: React.Dispatch<React.SetStateAction<boolean>>;
  data: Lister;
  handleEditDetails: (id: string) => void;
  BigList: ListType[];
  SmallList: ListType[];
}

const List = ({
  setEnableList,
  data,
  handleEditDetails,
  BigList,
  SmallList,
}: props) => {
  const [windowSize, setWindowSize] = useState<boolean>(false);
  const display = windowSize ? BigList : SmallList;
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-black/30 z-50 p-4">
      <div
        className={`${
          windowSize ? "w-full h-full" : "w-[60vw] h-[70vh]"
        } bg-white rounded-xl p-4 flex flex-col gap-4`}
      >
        <div className=" flex items-center justify-between  w-full px-1">
          <h1 className="font-bold text-2xl">List</h1>
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
          <div
            className={`grid grid-cols-${display?.length}
              p-3 bg-black/5 border border-gray-300 pr-7 rounded-t-xl font-bold`}
          >
            <>
              {display?.map((item) => (
                <span key={item.key}>{item.name}</span>
              ))}
            </>
          </div>

          <div
            className=" h-full flex flex-col gap-1 p-1 bg-black/2 border border-gray-300 
          overflow-y-scroll rounded-b-xl"
          >
            <>
              {" "}
              {data?.map((object, index) => (
                <SingleListObject
                  object={object}
                  key={index}
                  display={display}
                  handleEditDetails={handleEditDetails}
                />
              ))}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
