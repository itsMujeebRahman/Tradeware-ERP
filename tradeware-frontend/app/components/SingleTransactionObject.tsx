import { Trash } from "lucide-react";

interface productData {
  FrontId: number;
  Name: string;
  Code: string;
  Barcode: string;
  SellPrice: number;
  Quantity: number;
  Tax: number;
  SubTotal: number;
  NetTotal: number;
}

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
const fieldData = [
  {
    Name: "Code",
    Span: 4,
  },
  {
    Name: "Barcode",
    Span: 4,
  },
  {
    Name: "Name",
    Span: 11,
  },
  {
    Name: "Quantity",
    Span: 2,
  },
  {
    Name: "Rate",
    Span: 2,
  },
  {
    Name: "Sub Total",
    Span: 4,
  },
  {
    Name: "Tax",
    Span: 2,
  },
  {
    Name: "Net Total",
    Span: 4,
  },
];

const SingleTransactionObject = ({
  productData,
  handleCollectProductData,
  handleNextLine,
  handlDeleteProduct,
}: props) => {
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
      {handlDeleteProduct && (
        <div className="col-span-1 flex justify-center">
          <Trash
            className="text-red-400"
            size={18}
            onClick={() => handlDeleteProduct(productData.FrontId)}
          />
        </div>
      )}
    </div>
  );
};

export default SingleTransactionObject;
