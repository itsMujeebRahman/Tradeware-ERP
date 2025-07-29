import React, { SetStateAction, useState } from "react";

interface person {
  Name: string;
  Address1: string;
  Address2: string;
}

interface pay {
  key: number;
  Name: string;
}

type data1 = person | pay;

interface props {
  data: data1[];
  handlecollectHeaderData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputName: string;
}
const Dropdown = ({ data, handlecollectHeaderData, inputName }: props) => {
  const [enableList, setEnableList] = useState<boolean>(false);
  const [selected, setSelected] = useState<person | pay>();

  const handleDropList = (item: data1) => {
    setEnableList(false);
    setSelected(item);

    handlecollectHeaderData({
      target: { name: "Address1", value: item?.Address1 },
    } as any);

    handlecollectHeaderData({
      target: { name: "Address2", value: item?.Address2 },
    } as any);
  };

  const handleEnableList = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      setEnableList(!enableList);
    }
  };
  return (
    <div className="flex flex-col gap-[0.5vw]">
      <input
        className={`border border-gray-300 focus:outline-gray-300 h-[2vw] p-[0.3vw] 
                      rounded-lg bg-gray-50 w-full relative`}
        name={inputName}
        value={selected?.Name || ""}
        onChange={handlecollectHeaderData}
        onKeyDown={(e) => handleEnableList(e)}
      />
      {enableList && (
        <div
          className="flex flex-col absolute gap-[0.5vw] top-[9.5vw] h-[20vw] 
      overflow-y-auto backdrop-blur-lg rounded-lg"
        >
          {data?.map((item, i) => (
            <div
              className="border border-gray-300 focus:outline-gray-300 h-[2vw] p-[0.3vw] 
                rounded-lg bg-gray-50 w-[18.5vw] flex items-center"
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
