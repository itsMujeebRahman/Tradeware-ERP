import { Bell, Settings, User2 } from "lucide-react";
import React from "react";

const TitleBar = () => {
  return (
    <div
      className=" w-full h-fit shadow bg-[#e9e8eb]/50 border border-white flex items-center 
    justify-between rounded-xl p-1.5 col-span-7 pl-3"
    >
      <div className="font-bold text-2xl">Hello Mujeeb!</div>
      <div className="flex gap-2">
        <input className="border w-[40vw] rounded-xl shadow border-none focus:outline-gray-300 px-3 bg-white" />
        <div className=" flex gap-2">
          <div className="rounded-xl shadow p-2 bg-white">
            <Settings size={26} />
          </div>
          <div className="rounded-xl shadow p-2 bg-white">
            <Bell size={26} />
          </div>
          <div className="rounded-xl shadow p-2 bg-white">
            <User2 size={26} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
