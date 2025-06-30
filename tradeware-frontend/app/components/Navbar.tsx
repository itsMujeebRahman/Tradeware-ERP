import {
  ChevronRight,
  LayoutDashboard,
  Receipt,
  ShoppingBag,
  ShoppingCart,
  Users,
} from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="shadow bg-[#212023] h-full p-3 flex flex-col gap-3 rounded-2xl">
      <div className="p-2 flex items-center justify-between">
        <h1 className="font-bold text-2xl text-white/95">TRADE WARE</h1>
        <ChevronRight className="text-white bg-[#363538] p-1 rounded-xl" size={28} />
      </div>
      <div className="flex flex-col gap-2 ">
        <Link href="/">
          <button className="p-3 w-full flex items-center justify-start gap-3 hover:bg-[#363538] rounded-xl ">
            <LayoutDashboard className="text-white " />
            <p className="text-white ">Dashboard</p>
          </button>
        </Link>
        <Link href="/customers">
          <button className="p-3 w-full flex items-center justify-start gap-3 hover:bg-[#363538] rounded-xl ">
            <Users className="text-white" />
            <p className="text-white ">Customers</p>
          </button>
        </Link>
        <Link href="/suppliers">
          <button className="p-3 w-full flex items-center justify-start gap-3 hover:bg-[#363538] rounded-xl ">
            <Users className="text-white" />
            <p className="text-white ">Suppliers</p>
          </button>
        </Link>
        <Link href="/purchase">
          <button className="p-3 w-full flex items-center justify-start gap-3 hover:bg-[#363538] rounded-xl ">
            <ShoppingCart className="text-white" />
            <p className="text-white ">Purchse</p>
          </button>
        </Link>
        <Link href="/sales">
          <button className="p-3 w-full flex items-center justify-start gap-3 hover:bg-[#363538] rounded-xl ">
            <Receipt className="text-white" />
            <p className="text-white ">Sales</p>
          </button>
        </Link>
        <Link href="/inventory">
          <button className="p-3 w-full flex items-center justify-start gap-3 hover:bg-[#363538] rounded-xl ">
            <ShoppingBag className="text-white" />
            <p className="text-white ">Inventory</p>
          </button>
        </Link>
        <Link href="/reports">
          <button className="p-3 w-full flex items-center justify-start gap-3 hover:bg-[#363538] rounded-xl ">
            <Receipt className="text-white" />
            <p className="text-white ">Reports</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
