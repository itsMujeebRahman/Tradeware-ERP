import React, { SetStateAction } from "react";

interface props {
  setNewFieldlabel: React.Dispatch<React.SetStateAction<string>>;
  setNewFieldType: React.Dispatch<React.SetStateAction<string>>;
}
const AddField = ({ setNewFieldlabel, setNewFieldType }: props) => {
  return (
    <div className="border fixed mt-12 mr-20 z-50">
      <div>
        <p>Label</p>
        <input onChange={(e) => setNewFieldlabel(e.target.value)} />
      </div>
      <div>
        <p>Field Type</p>
        <select onChange={(e) => setNewFieldType(e.target.value)}>
          <option>Normal</option>
          <option>Multiple</option>
          <option>Paragraph</option>
        </select>
      </div>
      <button> Add</button>
    </div>
  );
};

export default AddField;
