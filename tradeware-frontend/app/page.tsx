"use client";
import React from "react";

import TitleBar from "./components/TitleBar";
import Overview from "./components/Overview";
import Statistics from "./components/Statistics";
import Calender from "./components/Calender";
import Graphs from "./components/Graphs";

const page = () => {
  return (
    <div className=" col-span-5 flex flex-col bg-white/90 
     bg-gradient-to-br from-[#cfd6e6] to-[#ffffff] 
     gap-1 rounded-xl p-1.5 ">
      <TitleBar />
      <div className=" col-span-5 grid grid-cols-8 h-full gap-1.5">
        <div className=" col-span-6  grid grid-rows-2 gap-1.5">
          <div className=" row-span-1 grid grid-cols-6 gap-1.5">
            <Overview />
            <Calender />
          </div>
          <div className=" row-span-1">
            <Graphs />
          </div>
        </div>
        <Statistics />
      </div>
    </div>
  );
};

export default page;
