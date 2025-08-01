import { pay } from "../types/MainTypes";

export const fieldData = [
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