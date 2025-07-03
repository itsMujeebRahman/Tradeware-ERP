import React from "react";

interface supplier {
  supplierName: string;
  supplierAddress1: string;
  supplierAddress2: string;
  supplierAddress3: string;
  supplierPhone: string;
  supplierEmail: string;
  supplierTaxNo: string;
  supplierNotes: string;
}

interface props {
  person: supplier;
  windowSize: boolean;
}

const SinglePerson = ({ person, windowSize }: props) => {
  return (
    <div>
      {windowSize ? (
        <div className="grid grid-cols-7 p-2 gap-2 shadow rounded-xl bg-white">
          <span className="border-r border-r-gray-300">
            {person.supplierName}
          </span>
          <span className="border-r border-r-gray-300">
            {person.supplierAddress1}
          </span>
          <span className="border-r border-r-gray-300">
            {person.supplierAddress2}
          </span>
          <span className="border-r border-r-gray-300">
            {person.supplierPhone}
          </span>
          <span className="border-r border-r-gray-300">
            {person.supplierEmail}
          </span>
          <span className="border-r border-r-gray-300">
            {person.supplierTaxNo}
          </span>
          <span className="break-all">{person.supplierNotes}</span>
        </div>
      ) : (
        <div className="grid grid-cols-4 p-2 gap-2 shadow rounded-xl bg-white">
          <span className="border-r border-r-gray-300">
            {person.supplierName}
          </span>
          <span className="border-r border-r-gray-300">
            {person.supplierAddress1}
          </span>
          <span className="border-r border-r-gray-300">
            {person.supplierPhone}
          </span>
          <span >
            {person.supplierEmail}
          </span>
        </div>
      )}
    </div>
  );
};

export default SinglePerson;
