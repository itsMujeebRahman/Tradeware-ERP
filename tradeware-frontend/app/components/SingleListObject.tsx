import React from "react";
import { person, ListType, product } from "../types/MainTypes";

type lister = person | product;

interface props {
  object: lister;
  display: ListType[];
  handleEditDetails: (id: string) => void;
}

const SingleListObject = ({ object, display, handleEditDetails }: props) => {
  return (
    <div>
      <div
        className={`grid grid-cols-${display?.length} p-2 gap-2 shadow rounded-xl bg-white`}
        onClick={() => handleEditDetails(object._id)}
      >
        <>
          {display?.map((item) => (
            <span className="border-r border-r-gray-300" key={item.key}>
              {object[item.name as keyof typeof object]}
            </span>
          ))}
        </>
      </div>
    </div>
  );
};

export default SingleListObject;
