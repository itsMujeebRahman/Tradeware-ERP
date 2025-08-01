import React, { SetStateAction, useEffect, useState } from "react";
import { headerData, pay, person } from "@/app/types/MainTypes";

const changeValue: Record<string, keyof headerData> = {
  Name: "Name",
  "Payment Method": "PaymentMethod",
};

type data1 = person | pay;

const isPerson = (item: data1): item is person => {
  return "Address1" in item;
};

interface props {
  data: data1[];
  handlecollectHeaderData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputName: string;
  className: string;
}
const Dropdown = ({
  data,
  handlecollectHeaderData,
  inputName,
  className,
}: props) => {
  const [enableList, setEnableList] = useState<boolean>(false);
  const [selected, setSelected] = useState<person | pay>();

  const handleDropList = (item: data1) => {
    setEnableList(false);
    setSelected(item);

    if (isPerson(item)) {
      handlecollectHeaderData({
        target: { name: "Address1", value: item?.Address1 },
      } as any);

      handlecollectHeaderData({
        target: { name: "Address2", value: item?.Address2 },
      } as any);

      handlecollectHeaderData({
        target: { name: "Name", value: item?.Name },
      } as any);
    } else {
      handlecollectHeaderData({
        target: { name: "PaymentMethod", value: item.Name },
      } as any);
    }
  };

  const handleEnableList = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      setEnableList(!enableList);
    }
  };

  return (
    <div className="flex flex-col gap-[0.5vw] relative">
      <input
        className={`${className}`}
        name={changeValue[inputName]}
        value={selected?.Name || ""}
        onChange={handlecollectHeaderData}
        onKeyDown={(e) => handleEnableList(e)}
      />
      {enableList && (
        <div
          className="flex flex-col absolute gap-[0.5vw] top-[2.5vw] left-0 max-h-[20vw] 
      overflow-y-auto backdrop-blur-lg h-fit rounded-lg overflow-x-hidden"
        >
          {data?.map((item, i) => (
            <div
              className="border border-gray-300 focus:outline-gray-300 h-[2vw] p-[0.3vw] 
                rounded-lg bg-gray-50 w-[18.5vw] "
              key={i}
            >
              <div onClick={() => handleDropList(item)}>
                {typeof item === "object" ? item?.Name : item}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
