import { ChevronDown } from "lucide-react";
import React from "react";

const Overview = () => {
  return (
    <div className=" col-span-4 bg-[#e9e8eb]/70 rounded-xl p-2 flex flex-col gap-3 border border-white">
      <div className=" flex items-center justify-between px-3">
        <h1 className="font-bold text-2xl">Overview</h1>
        <div className="bg-white flex items-center justify-center pr-3 gap-1 p-2 rounded-2xl">
          <ChevronDown size={18} />
          <p className="text-xs">Last Month</p>
        </div>
      </div>
      <div className=" h-full grid grid-rows-2 gap-2">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white rounded-xl"></div>
          <div className="bg-white rounded-xl"> </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white rounded-xl"></div>
          <div className="bg-white rounded-xl"> </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
