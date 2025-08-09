import { SetStateAction } from "react";

export type data1 = person | pay | product;

export interface contextType {
  selected: data1 | null;
  setSelected: React.Dispatch<SetStateAction<data1 | null>>;
}

//PURCHASE TYPES
export interface headerData {
  Name: string;
  Address1: string;
  Address2: string;
  InvoiceNo: string;
  ReferenceNo: string;
  Date: string;
  PaymentMethod: string;
  Notes: string;
  TotalQty: string;
  GrandSubTotal: string;
  TotalTax: string;
  GrandNetTotal: string;
  _id: string;
  isCancelled: boolean;
}

export const headReset: headerData = {
  Name: "",
  Address1: "",
  Address2: "",
  InvoiceNo: "",
  ReferenceNo: "",
  Date: "",
  PaymentMethod: "",
  Notes: "",
  TotalQty: "",
  GrandSubTotal: "",
  TotalTax: "",
  GrandNetTotal: "",
  _id: "",
  isCancelled: false,
};

export interface productData {
  FrontId: number;
  Name: string;
  Code: string;
  Barcode: string;
  SellPrice: string;
  Quantity: string;
  Tax: string;
  SubTotal: string;
  NetTotal: string;
}

export const productReset: productData = {
  FrontId: 0,
  Name: "",
  Code: "",
  Barcode: "",
  SellPrice: "",
  Quantity: "",
  Tax: "",
  SubTotal: "",
  NetTotal: "",
};

export interface pay {
  key: number;
  Name: string;
}

export interface purchase {
  headerData: headerData;
  productData: productData[];
}

//CATEGORY TYPES
export interface category {
  Name: string;
  Code: string;
  Description: string;
}

export const categoryRest: category = {
  Name: "",
  Code: "",
  Description: "",
};

//UNIT TYPES
export interface unit {
  Name: string;
  Code: string;
  Symbol: string;
}

export const unitReset: unit = {
  Name: "",
  Code: "",
  Symbol: "",
};

//CUSTOMER AND SUPPLIER TYPES
export interface person {
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

export const personReset: person = {
  Name: "",
  Address1: "",
  Address2: "",
  Address3: "",
  Phone: "",
  Email: "",
  TaxNo: "",
  Notes: "",
  _id: "",
};

//PRODUCT TYPES
export interface product {
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
  _id: string;
}

export const productDataRest: product = {
  Name: "",
  Code: "",
  Barcode: "",
  Category: "",
  Unit: "",
  Cost: "",
  SellPrice: 0,
  MaxSellPrice: 0,
  Quantity: 0,
  TaxPercentage: "",
  Description: "",
  _id: "",
};

export interface productAdd {
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

export const productAddDataRest: productAdd = {
  Name: "",
  Code: "",
  Barcode: "",
  Category: "",
  Unit: "",
  Cost: "",
  SellPrice: 0,
  MaxSellPrice: 0,
  Quantity: 0,
  TaxPercentage: "",
  Description: "",
};

export interface ListType {
  name: string;
  key: number;
}
