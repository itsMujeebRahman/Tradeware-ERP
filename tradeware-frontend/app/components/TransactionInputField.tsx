import Dropdown from "./elements/Dropdown";
import { Input } from "@/components/ui/input";
import { headerData, pay } from "../types/MainTypes";
import { person } from "../types/MainTypes";
import { payment } from "../constants/MainConstants";

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

const TransactionInputField = ({
  inputName,
  className,
  handlecollectHeaderData,
  headerData,
  data,
}: props) => {
  return (
    <div className={`break-inside-avoid ${className}`}>
      {["Reference No", "Date"].includes(inputName) ? (
        <div className="flex flex-col w-full gap-[0.1vw]">
          <p className="text-[0.8vw] ">{inputName}</p>
          <Input
            type={inputName === "Date" ? "Date" : "text"}
            className={`border border-gray-300 focus:outline-gray-300 h-[2vw] p-[0.3vw]
                rounded-lg bg-gray-50 w-full `}
            name={changeValue[inputName]}
            value={
              inputName === "Date"
                ? new Date().toISOString().split("T")[0]
                : headerData[changeValue[inputName]]
            }
            onChange={handlecollectHeaderData}
          />
        </div>
      ) : ["Notes"].includes(inputName) ? (
        <div className="flex flex-col w-full gap-[0.1vw]">
          <p className="text-[0.8vw]">{inputName}</p>
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
          <p className="text-[0.8vw]  ">{inputName}</p>
          {inputName === "Name" ? (
            <Dropdown
              data={data}
              handlecollectHeaderData={handlecollectHeaderData}
              inputName={inputName}
              className="border border-gray-300 focus:outline-gray-300 h-[2vw] p-[0.3vw] 
                      rounded-lg bg-gray-50 w-full"
            />
          ) : (
            <Dropdown
              data={payment}
              handlecollectHeaderData={handlecollectHeaderData}
              inputName={inputName}
              className="border border-gray-300 focus:outline-gray-300 h-[2vw] p-[0.3vw] 
                      rounded-lg bg-gray-50 w-full"
            />
          )}
        </div>
      ) : ["Address 1", "Address 2"].includes(inputName) ? (
        <div className="flex flex-col w-full gap-[0.1vw]">
          <p className="text-[0.8vw]  ">{inputName}</p>
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
