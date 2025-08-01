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
};

export interface productData {
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

export const productReset: productData = {
  FrontId: 0,
  Name: "",
  Code: "",
  Barcode: "",
  SellPrice: 0,
  Quantity: 0,
  Tax: 0,
  SubTotal: 0,
  NetTotal: 0,
};

export interface pay {
  key: number;
  Name: string;
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
