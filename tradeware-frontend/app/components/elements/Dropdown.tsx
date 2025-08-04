import React, { SetStateAction, useState } from "react";
import { headerData, pay, person, product } from "@/app/types/MainTypes";

const changeValue: Record<string, keyof headerData> = {
  Name: "Name",
  "Payment Method": "PaymentMethod",
};

interface inputNameType {
  name: string;
}

type data1 = person | pay | product;

interface props {
  data: data1[];
  inputFieldName?: inputNameType;
  setSelected: React.Dispatch<SetStateAction<data1 | null>>;
  selected: data1 | null;
  className: string;
}

const Dropdown = ({
  data,
  inputFieldName,
  className,
  setSelected,
  selected,
}: props) => {
  const [enableList, setEnableList] = useState<boolean>(false);
  const handleEnableList = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      setEnableList(!enableList);
    }
  };

  const handleDropDown = (item: data1) => {
    setSelected(item);
    setEnableList(false);
  };

  return (
    <div className={`relative ${className}`}>
      <input
        className={`w-full h-full px-[0.4vw]`}
        name={inputFieldName ? changeValue[inputFieldName.name] : ""}
        value={selected?.Name || ""}
        onKeyDown={(e) => handleEnableList(e)}
        readOnly
      />
      {enableList && (
        <div
          className="flex flex-col absolute gap-[0.5vw] top-[3vw] left-0 max-h-[20vw] 
      overflow-y-auto bg-white h-fit rounded overflow-x-hidden z-50 w-full"
        >
          {data?.map((item, i) => (
            <div
              className="border border-gray-300 w-full py-[0.3vw] px-[0.5vw] rounded "
              key={i}
            >
              <div onClick={() => handleDropDown(item)}>{item?.Name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
