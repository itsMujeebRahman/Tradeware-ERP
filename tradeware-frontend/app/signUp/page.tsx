"use client";
import axios from "axios";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface user {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

const dataReset: user = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
};

const page = () => {
  const [userDetails, setUserDetails] = useState<user>(dataReset);
  const router = useRouter();

  const handleClearButton = () => {
    setUserDetails(dataReset);
  };

  const handleGetUserDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((Prev) => ({ ...Prev, [name]: value }));
  };

  const handleCustomerData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/user",
        userDetails
      );
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Something went wrong");
    }
    setUserDetails(dataReset);
    router.push("/login");
  };

  return (
    <div className="w-screen h-screen bg-white rounded-xl flex flex-col items-center justify-between p-5">
      <div className="w-full">
        <div className="flex items-center justify-start p-10 ">
          <h1 className="font-bold text-8xl">
            <pre>Welcome to Tradeware.</pre>
          </h1>
        </div>
      </div>
      <div className="flex w-full gap-5 items-center justify-between p-10">
        <div className="flex flex-col gap-5 justify-start h-full pt-10">
          <h1 className="font-bold text-2xl">
            {" "}
            Your All in One Solution for Managing all of your Trading Headaches
          </h1>
          <div className="flex flex-col gap-3 w-[8vw]">
            <div className="flex items-center gap-3 justify-between">
              <h1>Customers</h1>
              <CheckCircleIcon className="text-green-400" />
            </div>
            <div className="flex items-center gap-3 justify-between">
              <h1>Suppliers</h1>
              <CheckCircleIcon className="text-green-400" />
            </div>
            <div className="flex items-center gap-3 justify-between">
              <h1>Purchase</h1>
              <CheckCircleIcon className="text-green-400" />
            </div>
            <div className="flex items-center gap-3 justify-between">
              <h1>Sales</h1>
              <CheckCircleIcon className="text-green-400" />
            </div>
            <div className="flex items-center gap-3 justify-between">
              <h1>Inventory</h1>
              <CheckCircleIcon className="text-green-400" />
            </div>
            <div className="flex items-center gap-3 justify-between">
              <h1>Reports</h1>
              <CheckCircleIcon className="text-green-400" />
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <h1 className="text-xl">Already Have Account ?</h1>
            <Link href="/login">
              <button className="border p-2 w-[10vw] bg-black/5">Login</button>
            </Link>
          </div>
        </div>
        <div className=" p-5 flex flex-col items-center 0 gap-3 w-[30vw] rounded-xl border border-gray-300 shadow">
          <div className="flex item-center w-full justify-start">
            <h1 className="font-bold text-xl">Register here</h1>
          </div>
          <input
            className=" border border-gray-400 p-2 focus:outline-gray-400  rounded bg-white w-full"
            placeholder="First Name"
            name="firstName"
            value={userDetails.firstName}
            onChange={handleGetUserDetails}
          />
          <input
            className=" border border-gray-400 p-2 focus:outline-gray-400  rounded bg-white w-full"
            placeholder="Last Name"
            name="lastName"
            value={userDetails.lastName}
            onChange={handleGetUserDetails}
          />
          <input
            className=" border border-gray-400 p-2 focus:outline-gray-400  rounded bg-white w-full"
            placeholder="Email"
            name="email"
            value={userDetails.email}
            onChange={handleGetUserDetails}
          />
          <input
            className=" border border-gray-400 p-2 focus:outline-gray-400  rounded bg-white w-full"
            placeholder="Username"
            name="username"
            value={userDetails.username}
            onChange={handleGetUserDetails}
          />
          <input
            className=" border border-gray-400 p-2 focus:outline-gray-400  rounded bg-white w-full"
            placeholder="Password"
            name="password"
            value={userDetails.password}
            onChange={handleGetUserDetails}
          />
          <div className="flex gap-3 w-full mt-5">
            <button className="border w-full p-2" onClick={handleCustomerData}>
              Register
            </button>
            <button className="border w-full p-2" onClick={handleClearButton}>
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
