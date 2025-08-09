import React from "react";
import { headerData, ListType, purchase } from "../types/MainTypes";

interface props {
  object: headerData;
  display: ListType[];
  handleEditDetails: (id: string) => void;
}

const changeValue: Record<string, keyof headerData> = {
  Name: "Name",
  "Invoice No": "InvoiceNo",
  "Reference No": "ReferenceNo",
  Date: "Date",
  "Payment Method": "PaymentMethod",
  "Total Qty": "TotalQty",
  "Net Total": "GrandNetTotal",
};

const SingleListPurchaseObject = ({
  object,
  display,
  handleEditDetails,
}: props) => {
  return (
    <div>
      <div
        className={`grid grid-cols-${display?.length} p-2 gap-2 shadow rounded-xl bg-white`}
        onClick={() => handleEditDetails(object._id)}
      >
        <>
          {display?.map((item) => (
            <span className="border-r border-r-gray-300" key={item.key}>
              {object[changeValue[item?.name]]}
            </span>
          ))}
        </>
      </div>
    </div>
  );
};

export default SingleListPurchaseObject;
