import { Trash } from "lucide-react";
import { productData } from "../types/MainTypes";
import { fieldData } from "../constants/MainConstants";

const changeValue: Record<string, keyof productData> = {
  FrontId: "FrontId",
  Name: "Name",
  Code: "Code",
  Barcode: "Barcode",
  Rate: "SellPrice",
  Quantity: "Quantity",
  Tax: "Tax",
  "Sub Total": "SubTotal",
  "Net Total": "NetTotal",
};

interface props {
  productData?: productData;
  productDetails: productData[];
  handlDeleteProduct?: (id: number) => void;
  handleCollectProductData: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;

  handleNextLine: (
    e: React.KeyboardEvent<HTMLInputElement>,
    name: string
  ) => void;
}


const SingleTransactionObject = ({
  productData,
  handleCollectProductData,
  handleNextLine,
  handlDeleteProduct,
  productDetails,
}: props) => {
  const largest = Math.max(...productDetails?.map((item) => item.FrontId));

  if (!productData) {
    return null;
  }
  return (
    <div className={`grid grid-cols-34 shadow bg-white rounded items-center`}>
      {fieldData.map((data, index) => (
        <input
          className={`text-[1vw] h-[4vh] focus:outline-gray-400 col-span-${data.Span} pl-[0.3vw]`}
          key={index}
          name={changeValue[data.Name]}
          value={productData[changeValue[data.Name]]}
          onChange={(e) => handleCollectProductData(e, productData.FrontId)}
          onKeyDown={(e) => handleNextLine(e, changeValue[data.Name])}
        />
      ))}
      {handlDeleteProduct && largest !== productData.FrontId ? (
        <div className="col-span-1 flex justify-center">
          <Trash
            className="text-red-400"
            size={18}
            onClick={() => handlDeleteProduct(productData.FrontId)}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleTransactionObject;
