import React from "react";

interface customer {
  customerName: string;
  customerAddress1: string;
  customerAddress2: string;
  customerAddress3: string;
  customerPhone: string;
  customerEmail: string;
  customerTaxNo: string;
  _id: string;
}

interface props {
  customer: customer;
  fullScreen: boolean;
  handleEditMode: (id: string) => void;
}

const SingleCustomer = ({ customer, fullScreen, handleEditMode }: props) => {
  return (
    <div
      className="w-full shadow rounded p-1 px-2 bg-white "
      onClick={() => handleEditMode(customer._id)}
    >
      {fullScreen ? (
        <div className="grid grid-cols-6 gap-5">
          <span className="border-r border-gray-300">
            {customer.customerName}
          </span>
          <span className="border-r border-gray-300">
            {customer.customerPhone}
          </span>
          <span className="border-r border-gray-300">
            {customer.customerAddress1}
          </span>
          <span className="border-r border-gray-300">
            {customer.customerEmail}
          </span>
          <span className="border-r border-gray-300">
            {customer.customerTaxNo}
          </span>
          <span>{customer.customerAddress3}</span>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          <span className="border-r border-gray-300">
            {customer.customerName}
          </span>
          <span className="border-r border-gray-300">
            {customer.customerPhone}
          </span>
          <span>{customer.customerAddress1}</span>
        </div>
      )}
    </div>
  );
};

export default SingleCustomer;
