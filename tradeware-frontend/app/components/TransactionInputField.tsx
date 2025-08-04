import React, { useEffect, useState } from "react";
import Dropdown from "./elements/Dropdown";
import { pay, person, product, headerData } from "../types/MainTypes";
import { payment } from "../constants/MainConstants";

interface head {
  name: string;
  type: string;
}

interface props {
  inputName: head;
  supplier1: person[];
  handlecollectHeaderData: any;
  headerData: headerData;
}

const changeValue: Record<string, keyof headerData> = {
  Name: "Name",
  "Address 1": "Address1",
  "Address 2": "Address2",
  "Invoice No": "InvoiceNo",
  "Reference No": "ReferenceNo",
  Date: "Date",
  "Payment Method": "PaymentMethod",
  Notes: "Notes",
};

const TransactionInputField = ({
  inputName,
  supplier1,
  handlecollectHeaderData,
  headerData,
}: props) => {
  const [selectHead, setSelectHead] = useState<person | pay | product | null>(
    null
  );

  useEffect(() => {
    if (!selectHead) return;
    if ("Address1" in selectHead) {
      handlecollectHeaderData({
        target: { name: "Name", value: selectHead.Name },
      } as any);

      handlecollectHeaderData({
        target: { name: "Address1", value: selectHead.Address1 },
      } as any);

      handlecollectHeaderData({
        target: { name: "Address2", value: selectHead.Address2 },
      } as any);
    } else {
      handlecollectHeaderData({
        target: { name: "PaymentMethod", value: selectHead.Name },
      } as any);
    }
  }, [selectHead]);

  const dropdownData =
    inputName.name === "Name"
      ? supplier1
      : inputName.name === "Payment Method"
      ? payment
      : [];

  return (
    <div className="w-[20vw] relative ">
      <p
        className="text-txtone absolute top-0 left-0 -translate-y-1/2 translate-x-2 bg-white 
      px-[0.3vw] z-10"
      >
        {inputName.name}
      </p>

      {inputName.type === "dropdown" ? (
        <Dropdown
          className="border border-gray-300 h-[2.5vw] rounded w-[20vw]"
          data={dropdownData}
          selected={selectHead}
          setSelected={setSelectHead}
          inputFieldName={inputName}
        />
      ) : inputName.type === "textarea" ? (
        <textarea
          className="border border-gray-300 w-full h-[6.5vw] p-[0.5vw] rounded resize-none"
          name={changeValue[inputName.name]}
          value={headerData[changeValue[inputName.name]]}
          onChange={handlecollectHeaderData}
        />
      ) : inputName.type === "date" ? (
        <input
          className="border border-gray-300 w-full h-[2.5vw] px-[0.5vw] rounded "
          type="Date"
          name={changeValue[inputName.name]}
          value={headerData[changeValue[inputName.name]]}
          onChange={handlecollectHeaderData}
        />
      ) : (
        <input
          className="border border-gray-300 w-full h-[2.5vw] px-[0.5vw] rounded "
          name={changeValue[inputName.name]}
          value={headerData[changeValue[inputName.name]]}
          onChange={handlecollectHeaderData}
        />
      )}
    </div>
  );
};

export default TransactionInputField;
