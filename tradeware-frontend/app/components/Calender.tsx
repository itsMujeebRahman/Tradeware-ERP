"use client";
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs, { Dayjs } from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  return (
    <div className=" col-span-2 shadow flex flex-col items-center justify-center rounded-2xl bg-white  ">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoItem >
          <DateCalendar
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="!h-[40vh] !w-fit  rounded-2xl "
          />
        </DemoItem>
      </LocalizationProvider>
    </div>
  );
};

export default Calender;
