import { Trash } from "lucide-react";
import { pay, person, product, productData } from "../types/MainTypes";
import { fieldData } from "../constants/PurchaseConstants";
import Dropdown from "./elements/Dropdown";
import { useEffect, useState } from "react";

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
  product1: product[];
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
  product1,
}: props) => {
  const [selectProduct, setSelectProduct] = useState<
    product | pay | person | null
  >(null);

  const handleQuantity = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    if (!selectProduct) return;
    if ("Quantity" in selectProduct) {
      const { value } = e.target;

      const subTotal = Number(value) * Number(selectProduct.SellPrice);

      const netTotal =
        Number(value) * Number(selectProduct.SellPrice) +
        Number(value) * Number(selectProduct.TaxPercentage);

      handleCollectProductData(
        {
          target: {
            name: "Quantity",
            value: value,
          },
        } as any,
        id
      );

      handleCollectProductData(
        {
          target: {
            name: "SubTotal",
            value: subTotal,
          },
        } as any,
        id
      );

      handleCollectProductData(
        {
          target: {
            name: "NetTotal",
            value: netTotal,
          },
        } as any,
        id
      );
    }
  };

  useEffect(() => {
    if (!selectProduct) return;
    if ("Quantity" in selectProduct) {
      const id = productData?.FrontId!;

      handleCollectProductData(
        {
          target: { name: "Name", value: selectProduct.Name },
        } as any,
        id
      );
      handleCollectProductData(
        {
          target: { name: "Code", value: selectProduct.Code },
        } as any,
        id
      );
      handleCollectProductData(
        {
          target: { name: "Barcode", value: selectProduct.Barcode },
        } as any,
        id
      );
      handleCollectProductData(
        {
          target: { name: "SellPrice", value: selectProduct.SellPrice },
        } as any,
        id
      );
      handleCollectProductData(
        {
          target: { name: "Tax", value: selectProduct.TaxPercentage },
        } as any,
        id
      );
    }
  }, [selectProduct]);

  const largest = Math.max(...productDetails?.map((item) => item.FrontId));

  if (!productData) {
    return null;
  }
  return (
    <div className={`grid grid-cols-34 shadow bg-white rounded items-center`}>
      {fieldData.map((data, index) => {
        return data.type === "dropdown" ? (
          <Dropdown
            className={`text-[1vw] h-[4vh] focus:outline-gray-400 col-span-${data.Span}`}
            key={index}
            data={product1}
            setSelected={setSelectProduct}
            selected={selectProduct}
          />
        ) : (
          <input
            className={`text-[1vw] h-[4vh] focus:outline-gray-400 col-span-${data.Span} pl-[0.4vw] `}
            key={index}
            name={changeValue[data.Name]}
            value={productData[changeValue[data.Name]]}
            onChange={
              data.Name === "Quantity"
                ? (e) => handleQuantity(e, productData.FrontId)
                : (e) => handleCollectProductData(e, productData.FrontId)
            }
            onKeyDown={(e) => handleNextLine(e, changeValue[data.Name])}
          />
        );
      })}
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
