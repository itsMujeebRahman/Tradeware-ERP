import React, { SetStateAction, useState } from "react";
import {
  headerData,
  pay,
  person,
  product,
  productData,
} from "@/app/types/MainTypes";

const changeValue: Record<string, keyof headerData> = {
  Name: "Name",
  "Payment Method": "PaymentMethod",
};

type data1 = person | pay | product;
type one = headerData | productData;

interface props {
  data: data1[];
  inputFieldName?: any;
  setSelected: React.Dispatch<SetStateAction<data1 | null>>;
  className: string;
  valueName?: one;
  editMode?: boolean;
}

const Dropdown = ({
  data,
  inputFieldName,
  className,
  setSelected,
  valueName,
  editMode,
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

  if (!valueName) {
    return;
  }
  const dropdownvalue =
    "InvoiceNo" in valueName
      ? valueName[changeValue[inputFieldName.name]]
      : (valueName.Name as keyof productData);

  return (
    <div className={`relative ${className}`}>
      <input
        className={`w-full h-full px-[0.4vw] ${!editMode && "text-gray-500" }`}
        name={inputFieldName ? changeValue[inputFieldName.name] : ""}
        value={dropdownvalue}
        onKeyDown={(e) => handleEnableList(e)}
        disabled={!editMode}
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
