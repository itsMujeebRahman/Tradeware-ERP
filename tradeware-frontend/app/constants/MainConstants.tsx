import { pay } from "../types/MainTypes";

export const fieldData = [
  {
    Name: "Code",
    Span: 4,
    type: "text",
  },
  {
    Name: "Barcode",
    Span: 4,
    type: "text",
  },
  {
    Name: "Name",
    Span: 11,
    type: "dropdown",
  },
  {
    Name: "Quantity",
    Span: 2,
    type: "text",
  },
  {
    Name: "Rate",
    Span: 2,
    type: "text",
  },
  {
    Name: "Sub Total",
    Span: 4,
    type: "text",
  },
  {
    Name: "Tax",
    Span: 2,
    type: "text",
  },
  {
    Name: "Net Total",
    Span: 4,
    type: "text",
  },
];

export const payment: pay[] = [
  {
    key: 1,
    Name: "Google Pay",
  },
  {
    key: 2,
    Name: "Debit Cart",
  },
  {
    key: 3,
    Name: "Crdit Card",
  },
  {
    key: 4,
    Name: "Cash",
  },
  {
    key: 5,
    Name: "Credit",
  },
];

//PURCHASE BODY HEADING
export const tableHeading = [
  {
    Name: "Code",
    span: 4,
  },
  {
    Name: "Barcode",
    span: 4,
  },
  {
    Name: "Name",
    span: 11,
  },
  {
    Name: "Qty",
    span: 2,
  },
  {
    Name: "Rate",
    span: 2,
  },
  {
    Name: "Sub Total",
    span: 4,
  },
  {
    Name: "Tax",
    span: 2,
  },
  {
    Name: "Net Total",
    span: 4,
  },
];

export const headerField = [
  {
    name: "Name",
    type: "dropdown",
  },
  {
    name: "Address 1",
    type: "text",
  },
  {
    name: "Address 2",
    type: "text",
  },
  {
    name: "Reference No",
    type: "text",
  },
  {
    name: "Date",
    type: "date",
  },
  {
    name: "Payment Method",
    type: "dropdown",
  },
  {
    name: "Notes",
    type: "textarea",
  },
];
