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

interface props {
  person: person;
  windowSize: boolean;
  handleEditPersonData: (id: string) => void;
}

const SinglePerson = ({ person, windowSize, handleEditPersonData }: props) => {
  return (
    <div>
      {windowSize ? (
        <div
          className="grid grid-cols-7 p-2 gap-2 shadow rounded-xl bg-white"
          onClick={() => handleEditPersonData(person._id)}
        >
          <span className="border-r border-r-gray-300">{person.Name}</span>
          <span className="border-r border-r-gray-300">{person.Address1}</span>
          <span className="border-r border-r-gray-300">{person.Address2}</span>
          <span className="border-r border-r-gray-300">{person.Phone}</span>
          <span className="border-r border-r-gray-300">{person.Email}</span>
          <span className="border-r border-r-gray-300">{person.TaxNo}</span>
          <span className="break-all">{person.Notes}</span>
        </div>
      ) : (
        <div
          className="grid grid-cols-4 p-2 gap-2 shadow rounded-xl bg-white"
          onClick={() => handleEditPersonData(person._id)}
        >
          <span className="border-r border-r-gray-300">{person.Name}</span>
          <span className="border-r border-r-gray-300">{person.Address1}</span>
          <span className="border-r border-r-gray-300">{person.Phone}</span>
          <span>{person.Email}</span>
        </div>
      )}
    </div>
  );
};

export default SinglePerson;
