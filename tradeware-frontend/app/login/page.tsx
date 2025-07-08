"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Page = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const handleUserDetails = async () => {
    if (username.trim() === "" || password.trim() === "") {
      return toast.error("Fill your Crdentials");
    }
    try {
      const response = await axios.put("http://localhost:3001/user", {
        username,
        password,
      });
      toast.success(response?.data?.message);
      const token = response.data.token;

      Cookies.set("token", token, {
        expires: 1,
        path: "/",
      });

      router.push("../protected/");
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="w-screen h-screen bg-white rounded-xl flex flex-col items-center justify-center">
      <div className=" p-5 flex flex-col items-center 0 gap-3 w-[30vw] rounded-xl border border-gray-300 shadow">
        <div className="flex item-center w-full justify-start">
          <h1 className="font-bold text-xl">Login to Tradeware.</h1>
        </div>
        <input
          className=" border border-gray-400 p-2 focus:outline-gray-400  rounded bg-white w-full"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className=" border border-gray-400 p-2 focus:outline-gray-400  rounded bg-white w-full"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex gap-3 w-full mt-5">
          <button className="border w-full p-2" onClick={handleUserDetails}>
            Login
          </button>
          <button className="border w-full p-2">Clear</button>
        </div>
        <div className="w-full bg-black/5">
          <Link href="/signUp">
            <button className="border w-full p-2">SignUp</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
