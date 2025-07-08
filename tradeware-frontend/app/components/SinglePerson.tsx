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
      person: product;
      windowSize: boolean;
      handleEditPersonData: (id: string) => void;
    }
  | {
      isProduct: false;
      person: person;
      windowSize: boolean;
      handleEditPersonData: (id: string) => void;
    };

const SinglePerson = ({
  person,
  windowSize,
  handleEditPersonData,
  isProduct,
}: props) => {
  return (
    <div>
      {windowSize ? (
        <div
          className={`${
            isProduct ? "grid grid-cols-8" : "grid grid-cols-7"
          } p-2 gap-2 shadow rounded-xl bg-white`}
          onClick={() => handleEditPersonData(person._id)}
        >
          {isProduct ? (
            <>
              <span className="border-r border-r-gray-300">{person.Name}</span>
              <span className="border-r border-r-gray-300">{person.Code}</span>
              <span className="border-r border-r-gray-300">
                {person.Category}
              </span>
              <span className="border-r border-r-gray-300">{person.Unit}</span>
              <span className="border-r border-r-gray-300">
                {person.Quantity}
              </span>
              <span className="border-r border-r-gray-300">{person.Cost}</span>
              <span className="border-r border-r-gray-300">
                {person.SellPrice}
              </span>
              <span className="break-all">{person.TaxPercentage}</span>
            </>
          ) : (
            <>
              <span className="border-r border-r-gray-300">{person.Name}</span>
              <span className="border-r border-r-gray-300">
                {person.Address1}
              </span>
              <span className="border-r border-r-gray-300">
                {person.Address2}
              </span>
              <span className="border-r border-r-gray-300">{person.Phone}</span>
              <span className="border-r border-r-gray-300">{person.Email}</span>
              <span className="border-r border-r-gray-300">{person.TaxNo}</span>
              <span className="break-all">{person.Notes}</span>
            </>
          )}
        </div>
      ) : (
        <div
          className={`${
            isProduct ? "grid grid-cols-5" : "grid grid-cols-4"
          } p-2 gap-2 shadow rounded-xl bg-white`}
          onClick={() => handleEditPersonData(person._id)}
        >
          {isProduct ? (
            <>
              <span className="border-r border-r-gray-300">{person.Name}</span>
              <span className="border-r border-r-gray-300">
                {person.Category}
              </span>
              <span className="border-r border-r-gray-300">
                {person.Quantity}
              </span>
              <span className="border-r border-r-gray-300">{person.Cost}</span>
              <span>{person.SellPrice}</span>
            </>
          ) : (
            <>
              <span className="border-r border-r-gray-300">{person.Name}</span>
              <span className="border-r border-r-gray-300">
                {person.Address1}
              </span>
              <span className="border-r border-r-gray-300">{person.Phone}</span>
              <span>{person.Email}</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SinglePerson;
