import { pay } from "../types/MainTypes";

export const fieldData = [
  {
    Name: "Code",
    Span: "col-span-4",
    type: "text",
  },
  {
    Name: "Barcode",
    Span: "col-span-4",
    type: "text",
  },
  {
    Name: "Name",
    Span: "col-span-11",
    type: "dropdown",
  },
  {
    Name: "Qty",
    Span: "col-span-2",
    type: "text",
  },
  {
    Name: "Rate",
    Span: "col-span-2",
    type: "text",
  },
  {
    Name: "Sub Total",
    Span: "col-span-4",
    type: "text",
  },
  {
    Name: "Tax",
    Span: "col-span-2",
    type: "text",
  },
  {
    Name: "Net Total",
    Span: "col-span-4",
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

export const footerFields = [
  {
    name: "Total Qty",
  },
  {
    name: "Total Sub",
  },
  {
    name: "Total Tax",
  },
  {
    name: "Total Net",
  },
];
