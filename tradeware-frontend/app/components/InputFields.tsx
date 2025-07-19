import React from "react"

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
  inputName: string;
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
    <div>
      {["Name", "Phone", "Email", "TaxNo"].includes(inputName) ? (
        <div className="flex flex-col ">
          <p className="text-sm ">{inputName}</p>
          <input
            className={`border focus:outline-gray-400 p-1 rounded bg-white ${
              editData ? " border-gray-500" : "  border-gray-300"
            }`}
            name={changeValue[inputName]}
            onChange={handleCollectDetails}
            value={personDetails[changeValue[inputName]] || ""}
            disabled={!editData}
          />
        </div>
      ) : inputName === "Address" ? (
        <div className="flex flex-col gap-1">
          <p className="text-sm">{inputName}</p>
          <input
            className={`border focus:outline-gray-400 p-1 rounded bg-white ${
              editData ? " border-gray-500" : "  border-gray-300"
            }`}
            name={changeValue[inputName + 1]}
            onChange={handleCollectDetails}
            value={personDetails[changeValue[inputName + 1]] || ""}
            disabled={!editData}
          />
          <input
            className={`border focus:outline-gray-400 p-1 rounded bg-white ${
              editData ? " border-gray-500" : "  border-gray-300"
            }`}
            name={changeValue[inputName + 2]}
            onChange={handleCollectDetails}
            value={personDetails[changeValue[inputName + 2]] || ""}
            disabled={!editData}
          />
          <input
            className={`border focus:outline-gray-400 p-1 rounded bg-white ${
              editData ? " border-gray-500" : "  border-gray-300"
            }`}
            name={changeValue[inputName + 3]}
            onChange={handleCollectDetails}
            value={personDetails[changeValue[inputName + 3]] || ""}
            disabled={!editData}
          />
        </div>
      ) : ["Notes"].includes(inputName) ? (
        <div className="flex flex-col">
          <p className="text-sm">{inputName}</p>
          <textarea
            className={` border focus:outline-gray-400 p-1 rounded bg-white 
          h-[20vh] resize-none ${
            editData ? " border-gray-500" : " border-gray-300"
          }`}
            name={changeValue[inputName]}
            onChange={handleCollectDetails}
            value={personDetails[changeValue[inputName]] || ""}
            disabled={!editData}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputFields;
