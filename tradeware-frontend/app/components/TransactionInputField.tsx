import React, { useEffect, useState } from "react";
import Dropdown from "./elements/Dropdown";
import { Input } from "@/components/ui/input";

interface headerData {
  Name: string;
  Address1: string;
  Address2: string;
  InvoiceNo: string;
  ReferenceNo: string;
  Date: string;
  PaymentMethod: string;
  Notes: string;
}

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

interface pay {
  key: number;
  Name: string;
}

interface props {
  inputName: string;
  className: string;
  handlecollectHeaderData: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  headerData: headerData;
  data: person[];
}

const changeValue: Record<string, keyof headerData> = {
  Name: "Name",
  "Invoice No": "InvoiceNo",
  "Address 1": "Address1",
  "Address 2": "Address2",
  "Reference No": "ReferenceNo",
  "Payment Method": "PaymentMethod",
  Date: "Date",
  Notes: "Notes",
};

const paymentMethod: pay[] = [
  {
    key: 1,
    Name: "Google Pay",
  },
  {
    key: 2,
    Name: "Debit Cart",
  },
  {
    key: 3,
    Name: "Crdit Card",
  },
  {
    key: 4,
    Name: "Cash",
  },
  {
    key: 5,
    Name: "Credit",
  },
];

const TransactionInputField = ({
  inputName,
  className,
  handlecollectHeaderData,
  headerData,
  data,
}: props) => {
  const handleInvoiceNo_Date = (inputName: string) => {
    if (inputName === "Invoice No") {
      return "PI / " + data?.length;
    } else if (inputName === "Date") {
      return new Date().toISOString().split("T")[0];
    } else {
      return headerData[changeValue[inputName]];
    }
  };

  return (
    <div className={`break-inside-avoid ${className}`}>
      {["Invoice No", "Reference No", "Date"].includes(inputName) ? (
        <div className="flex flex-col w-full gap-[0.1vw]">
          <p className="text-[1vw] ">{inputName}</p>
          <Input
            type={inputName === "Date" ? "Date" : "text"}
            className={`border border-gray-300 focus:outline-gray-300 h-[2vw] p-[0.3vw]
                rounded-lg bg-gray-50 w-full `}
            name={changeValue[inputName]}
            value={handleInvoiceNo_Date(inputName)}
            onChange={handlecollectHeaderData}
          />
        </div>
      ) : ["Notes"].includes(inputName) ? (
        <div className="flex flex-col w-full gap-[0.1vw]">
          <p className="text-[1vw] ">{inputName}</p>
          <textarea
            className={`border border-gray-300 focus:outline-gray-300 h-[6vw] p-[0.3vw]
                rounded-lg bg-gray-50 w-full resize-none`}
            name={changeValue[inputName]}
            value={headerData[changeValue[inputName]]}
            onChange={handlecollectHeaderData}
          />
        </div>
      ) : ["Name", "Payment Method"].includes(inputName) ? (
        <div className="flex flex-col w-full gap-[0.1vw]">
          <p className="text-[1vw] ">{inputName}</p>
          {inputName === "Name" ? (
            <Dropdown
              data={data}
              handlecollectHeaderData={handlecollectHeaderData}
              inputName={inputName}
            />
          ) : (
            <Dropdown
              data={paymentMethod}
              handlecollectHeaderData={handlecollectHeaderData}
              inputName={inputName}
            />
          )}
        </div>
      ) : ["Address 1", "Address 2"].includes(inputName) ? (
        <div className="flex flex-col w-full gap-[0.1vw]">
          <p className="text-[1vw] ">{inputName}</p>
          <input
            className={`border border-gray-300 focus:outline-gray-300 h-[2vw] p-[0.3vw]
                rounded-lg bg-gray-50 w-full `}
            name={changeValue[inputName]}
            value={headerData[changeValue[inputName]]}
            onChange={handlecollectHeaderData}
            readOnly
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TransactionInputField;
