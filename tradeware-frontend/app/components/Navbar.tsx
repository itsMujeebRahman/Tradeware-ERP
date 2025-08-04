"use client";
import {
  CherryIcon,
  ChevronRight,
  LayoutDashboard,
  Receipt,
  ShoppingBag,
  ShoppingCart,
  Users,
} from "lucide-react";
import Link from "next/link";
import { SetStateAction, useState } from "react";

interface props {
  setNavClose: React.Dispatch<SetStateAction<boolean>>;
  navClose: boolean;
}

const NavbarLinks = [
  { Link: "../protected", Icon: <LayoutDashboard />, Name: "Dashboard" },
  { Link: "../protected/customers", Icon: <Users />, Name: "Customers" },
  { Link: "../protected/suppliers", Icon: <Users />, Name: "Suppliers" },
  { Link: "../protected/products", Icon: <CherryIcon />, Name: "Products" },
  { Link: "../protected/purchase", Icon: <ShoppingCart />, Name: "Purchase" },
  { Link: "../protected/sales", Icon: <Receipt />, Name: "Sales" },
  { Link: "../protected/inventory", Icon: <ShoppingBag />, Name: "Inventory" },
  { Link: "../protected/reports", Icon: <Receipt />, Name: "Reports" },
];

const Navbar = ({ navClose, setNavClose }: props) => {
  const [buttonBg, setButtonBg] = useState<any>();

  const handleButtonBackground = (index: any) => {
    setButtonBg(index);
  };

  return (
    <div
      className={`shadow bg-[#212023] h-full p-3 flex flex-col gap-3 ${
        navClose ? "w-[5vw]" : "w-[15vw]"
      }`}
    >
      <div className="p-2 flex items-center justify-between">
        {navClose ? (
          ""
        ) : (
          <h1 className="font-bold text-xl text-white/95">TRADE WARE</h1>
        )}

        <ChevronRight
          className="text-white p-1"
          size={28}
          onClick={() => setNavClose(!navClose)}
        />
      </div>
      <div className="flex flex-col gap-2 ">
        {NavbarLinks.map((links, index) => (
          <Link href={links.Link} key={index}>
            <button
              className={`p-3 w-full flex items-center justify-start gap-3 hover:bg-[#363538] rounded-xl 
                ${buttonBg === index ? "bg-[#363538]" : ""}`}
              onClick={() => handleButtonBackground(index)}
            >
              <span className="text-white">{links.Icon}</span>
              {navClose ? "" : <p className="text-white ">{links.Name}</p>}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
