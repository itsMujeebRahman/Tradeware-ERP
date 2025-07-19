import { Trash2 } from "lucide-react";

interface productData {
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
  handleCollectProductData: any;
  productData: productData;
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
}: props) => {
  return (
    <div className="grid grid-cols-34 shadow bg-white rounded items-center">
      {fieldData.map((data, index) => (
        <input
          className={`text-[1vw] h-[4vh] focus:outline-gray-400 col-span-${data.Span} pl-[0.3vw]`}
          name={changeValue[data.Name]}
          value={productData[changeValue[data.Name]]}
          onChange={handleCollectProductData}
          key={index}
        />
      ))}

      <span className="col-span-1 pl-[0.3vw] flex item-center justify-center">
        <Trash2 className="text-red-400 h-[2vh] w-[2vw]" />
      </span>
    </div>
  );
};

export default SingleTransactionObject;
