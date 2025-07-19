interface Unit {
  Name: string;
  Code: string;
  Symbol: string;
}

interface Category {
  Name: string;
  Code: string;
  Description: string;
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
}

interface props {
  inputName: string;
  cat: Category[];
  uni: Unit[];
  productDetails: product;
  handleCollectDetails: any;
  editDetails: boolean;
}

const changeValue: Record<string, keyof product> = {
  Name: "Name",
  Code: "Code",
  Barcode: "Barcode",
  Category: "Category",
  Unit: "Unit",
  Cost: "Cost",
  SellPrice: "SellPrice",
  MaxSellPrice: "MaxSellPrice",
  Quantity: "Quantity",
  Description: "Description",
  "Tax Percentage": "TaxPercentage",
};

const ProductInputFields = ({
  inputName,
  uni,
  cat,
  productDetails,
  handleCollectDetails,
  editDetails,
}: props) => {
  return (
    <div>
      {[
        "Name",
        "Code",
        "Barcode",
        "Cost",
        "SellPrice",
        "MaxSellPrice",
        "Quantity",
        "Tax Percentage",
      ].includes(inputName) ? (
        <div className="flex flex-col ">
          <p className="text-sm ">{inputName}</p>
          <input
            className={`border border-gray-300 focus:outline-gray-400 p-1 rounded bg-white 
              ${editDetails ? " border-gray-500" : "  border-gray-300"}`}
            name={changeValue[inputName]}
            value={productDetails[changeValue[inputName]]}
            onChange={handleCollectDetails}
            disabled={!editDetails}
          />
        </div>
      ) : ["Category"].includes(inputName) ? (
        <div className="flex flex-col ">
          <p className="text-sm ">{inputName}</p>
          <select
            className={`border border-gray-300 focus:outline-gray-400 p-2 rounded bg-white 
              ${editDetails ? " border-gray-500" : "  border-gray-300"}`}
            name={changeValue[inputName]}
            value={productDetails[changeValue[inputName]]}
            onChange={handleCollectDetails}
            disabled={!editDetails}
          >
            {cat?.map((c, index) => (
              <option key={index}>{c.Name}</option>
            ))}
          </select>
        </div>
      ) : ["Unit"].includes(inputName) ? (
        <div className="flex flex-col ">
          <p className="text-sm ">{inputName}</p>
          <select
            className={`border border-gray-300 focus:outline-gray-400 p-2 rounded bg-white 
              ${editDetails ? " border-gray-500" : "  border-gray-300"}`}
            name={changeValue[inputName]}
            value={productDetails[changeValue[inputName]]}
            onChange={handleCollectDetails}
            disabled={!editDetails}
          >
            {uni?.map((u, index) => (
              <option key={index}>{u.Name}</option>
            ))}
          </select>
        </div>
      ) : "Description" === inputName ? (
        <div className="flex flex-col ">
          <p className="text-sm ">{inputName}</p>
          <textarea
            className={`border focus:outline-gray-400 p-1 rounded bg-white 
          h-[20vh] w-full resize-none border-gray-300 
          ${editDetails ? " border-gray-500" : "  border-gray-300"}`}
            name={changeValue[inputName]}
            value={productDetails[changeValue[inputName]]}
            onChange={handleCollectDetails}
            disabled={!editDetails}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductInputFields;
