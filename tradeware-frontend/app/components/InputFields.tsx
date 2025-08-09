import React from "react";
import { person } from "../types/MainTypes";

interface PersonInputTypes {
  name: string;
  type: string;
}

interface props {
  inputName: PersonInputTypes;
  handleCollectDetails: any;
  personDetails: person;
  editData: boolean;
}

const changeValue: Record<string, keyof person> = {
  Name: "Name",
  Address1: "Address1",
  Address2: "Address2",
  Address3: "Address3",
  Phone: "Phone",
  Email: "Email",
  TaxNo: "TaxNo",
  Notes: "Notes",
};

const InputFields = ({
  inputName,
  handleCollectDetails,
  personDetails,
  editData,
}: props) => {
  return (
    <div className="relative ">
      <p
        className="text-txtone absolute top-0 left-0 -translate-y-1/2 translate-x-2 bg-white 
      px-[0.3vw] z-10"
      >
        {inputName.name}
      </p>

      {inputName.type === "text" ? (
        <input
          className={`border focus:outline-gray-400 p-[0.5vw] rounded bg-white w-full ${
            editData ? " border-gray-500" : "  border-gray-300"
          }`}
          name={changeValue[inputName.name]}
          onChange={handleCollectDetails}
          value={personDetails[changeValue[inputName.name]] || ""}
          disabled={!editData}
        />
      ) : (
        <textarea
          className={` border focus:outline-gray-400 p-1 rounded bg-white 
          h-[20vh] resize-none w-full ${
            editData ? " border-gray-500" : " border-gray-300"
          }`}
          name={changeValue[inputName.name]}
          onChange={handleCollectDetails}
          value={personDetails[changeValue[inputName.name]] || ""}
          disabled={!editData}
        />
      )}
    </div>
  );
};

export default InputFields;
