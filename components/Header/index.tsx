import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import logo from "../../public/logo.png"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="grid grid-cols-12 h-20 px-4 items-center">

        {/* LOGO */}
        <div className="col-span-3  ml-30">
          <div className="p-3 w-fit rounded-full hover:bg-[#181919] cursor-pointer">
            <Link href="/">
              <Image src={logo} alt="logo" width={55}/>
            </Link>
          </div>
        </div>

        {/* TABS */}
        <div className="col-span-6 flex justify-center gap-10">
          <button className="font-semibold relative">
            For you
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-[#1d9bf0] rounded-full"></span>
          </button>
          <button className="text-gray-500 hover:text-white">
            Following
          </button>
        </div>

        {/* SEARCH */}
        <div className="col-span-3 hidden lg:flex justify-end">
          <div className="relative w-full max-w-70">
            <BiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="search"
              placeholder="Search"
              className="w-full bg-[#16181c] pl-11 pr-4 py-2 rounded-full text-sm outline-none focus:ring-2 focus:ring-[#1d9bf0]"
            />
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
