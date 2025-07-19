import React from "react";

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

interface product {
  Name: string;
  Code: string;
  Barcode: string;
  Category: string;
  Unit: string;
  Cost: string;
  SellPrice: number;
  MaxSellPrice: number;
  Quantity: number;
  TaxPercentage: string;
  Description: string;
  _id: string;
}

//another method of using for defining type for dynamic type change
type props =
  | {
      isProduct: true;
      object: product;
      windowSize: boolean;
      handleEditDetails: (id: string) => void;
    }
  | {
      isProduct: false;
      object: person;
      windowSize: boolean;
      handleEditDetails: (id: string) => void;
    };

const SingleListObject = ({
  object,
  windowSize,
  handleEditDetails,
  isProduct,
}: props) => {
  return (
    <div>
      {windowSize ? (
        <div
          className={`${
            isProduct ? "grid grid-cols-8" : "grid grid-cols-7"
          } p-2 gap-2 shadow rounded-xl bg-white`}
          onClick={() => handleEditDetails(object._id)}
        >
          {isProduct ? (
            <>
              <span className="border-r border-r-gray-300">{object.Name}</span>
              <span className="border-r border-r-gray-300">{object.Code}</span>
              <span className="border-r border-r-gray-300">
                {object.Category}
              </span>
              <span className="border-r border-r-gray-300">{object.Unit}</span>
              <span className="border-r border-r-gray-300">
                {object.Quantity}
              </span>
              <span className="border-r border-r-gray-300">{object.Cost}</span>
              <span className="border-r border-r-gray-300">
                {object.SellPrice}
              </span>
              <span className="break-all">{object.TaxPercentage}</span>
            </>
          ) : (
            <>
              <span className="border-r border-r-gray-300">{object.Name}</span>
              <span className="border-r border-r-gray-300">
                {object.Address1}
              </span>
              <span className="border-r border-r-gray-300">
                {object.Address2}
              </span>
              <span className="border-r border-r-gray-300">{object.Phone}</span>
              <span className="border-r border-r-gray-300">{object.Email}</span>
              <span className="border-r border-r-gray-300">{object.TaxNo}</span>
              <span className="break-all">{object.Notes}</span>
            </>
          )}
        </div>
      ) : (
        <div
          className={`${
            isProduct ? "grid grid-cols-5" : "grid grid-cols-4"
          } p-2 gap-2 shadow rounded-xl bg-white`}
          onClick={() => handleEditDetails(object._id)}
        >
          {isProduct ? (
            <>
              <span className="border-r border-r-gray-300">{object.Name}</span>
              <span className="border-r border-r-gray-300">
                {object.Category}
              </span>
              <span className="border-r border-r-gray-300">
                {object.Quantity}
              </span>
              <span className="border-r border-r-gray-300">{object.Cost}</span>
              <span>{object.SellPrice}</span>
            </>
          ) : (
            <>
              <span className="border-r border-r-gray-300">{object.Name}</span>
              <span className="border-r border-r-gray-300">
                {object.Address1}
              </span>
              <span className="border-r border-r-gray-300">{object.Phone}</span>
              <span>{object.Email}</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SingleListObject;
