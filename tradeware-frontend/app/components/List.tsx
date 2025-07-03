import { FullscreenIcon, X } from "lucide-react";
import React, { useState } from "react";
import SinglePerson from "./SinglePerson";

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

interface props {
  setEnableList: React.Dispatch<React.SetStateAction<boolean>>;
  data: person[];
  handleEditPersonData: (id: string) => void;
}

const List = ({ setEnableList, data, handleEditPersonData }: props) => {
  const [windowSize, setWindowSize] = useState<boolean>(false);
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-black/30 z-50 p-4">
      <div
        className={`${
          windowSize ? "w-full h-full" : "w-[60vw] h-[70vh]"
        } bg-white rounded-xl p-4 flex flex-col gap-4`}
      >
        <div className=" flex items-center justify-between  w-full px-1">
          <h1 className="font-bold text-2xl">Supplier List</h1>
          <div className=" flex items-center justify-between gap-3">
            <div>
              <input
                className="border border-gray-400 focus:outline-gray-600 rounded-xl p-2 w-[30vw] "
                placeholder="Enter the Supplier Name"
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
            <div className="grid grid-cols-7 p-3 bg-black/5 border border-gray-300 pr-7 rounded-t-xl font-bold">
              <span>Name</span>
              <span>Address1</span>
              <span>Address2</span>
              <span>Phone</span>
              <span>Email</span>
              <span>TaxNo</span>
              <span>Notes</span>
            </div>
          ) : (
            <div className="grid grid-cols-4 p-3 bg-black/5 border border-gray-300 pr-7 rounded-t-xl font-bold">
              <span>Name</span>
              <span>Address1</span>
              <span>Phone</span>
              <span>Email</span>
            </div>
          )}

          <div
            className=" h-full  flex flex-col gap-1 p-1 bg-black/2 border border-gray-300 
          overflow-y-scroll rounded-b-xl"
          >
            {data.map((person, index) => (
              <SinglePerson
                person={person}
                key={index}
                windowSize={windowSize}
                handleEditPersonData={handleEditPersonData}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
