import Image from "next/image";
import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
 
} from "@heroicons/react/outline";
import {UsersIcon} from "@heroicons/react/solid";




import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1)

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput('')
  }

  const router = useRouter();
  const { redirect } = router.query;
  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Nav */}
      <div className=" items-center bg-amazon_blue p-1 flex-grow py-2 grid grid-cols-3">
        <div className="mt-0 mr-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="/eleganza.jpg"
            alt=""
            width={180}
            height={50}
            style={{ objectFit: "cover" }}
            className="cursor-pointer rounded-md"
          />
        </div>
        {/* Search: Middle*/}
        <div className="flex items-center bg-red-400 hover:bg-red-500 h-10 rounded-sm cursor-pointer">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            className="bg-white p-2 h-full w-8/12 flex-grow flex-shrink focus:outline-none px-4 text-center placeholder-gray-400"
            placeholder="Search"
          />

          <div className="flex items-center justify-center h-full w-10 sm:w-12">
            <SearchIcon className="h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9" />
          </div>
        </div>

        {/* Right */}
        <div className="text-red-50 items-center text-xs font-bold flex space-x-4 mx-2 whitespace-nowrap justify-end lg:justify-end">
          <Link href="/">
            <div className="link cursor-pointer justify-end">
              <p className="hover:underline">Hello ...</p>
              <p className="font-extrabold md:text-sm">Become a host</p>
            </div>
          </Link>

          <div className="link cursor-pointer hidden lg:block">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-red-600 text-center rounded-full text-red-50 font-bold">
              4
            </span>
            <GlobeAltIcon className="h-10" />
            <p className="hidden sm:inline font-extrabold mt-2 md:text-sm">-</p>
          </div>
        </div>
        
      </div>

      {/* Bottom Nav */}

      <div className="flex items-center space-x-3 p-2 bg-gray-800 text-white text-sm shadow-md">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Rooms</p>
        <p className="link">Cabins</p>
        <p className="link">Today&apos;s Deals</p>

        <p className="link hidden lg:inline-flex">Amazing Views</p>
        <p className="link hidden lg:inline-flex">Off-the-grid</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Countryside</p>
        <p className="link hidden lg:inline-flex">Africa</p>
        <p className="link hidden lg:inline-flex">Europe</p>
        <p className="link hidden lg:inline-flex">South America</p>
        <p className="link hidden lg:inline-flex">Amazon</p>
      </div>

      {searchInput && (
          <div className="flex col-span-3 flex-col mx-auto justify-center items-center mt-0 bg-white">
            
                <DateRangePicker
                  ranges={[selectionRange]}
                  minDate={new Date()}
                  rangeColors={["#FD5B61"]}
                  onChange={handleSelect}
                />
                <div className="flex py-1 items-center border-b mb-4">

                    <h2 className="text-xl px-10 font-bold flex-grow  pl-2 text-amazon_blue">Number Of Guests</h2>
                    <UsersIcon className="h-6 "/>
                    <input value={noOfGuests} min={1} onChange={(e) => setNoOfGuests(e.target.value) } type="number" className="w-12 pl-2 text-lg outline-0 text-green-600 font-semibold a"/>
                </div>
                <div className="flex space-x-5 py-2">
                  <button onClick={resetInput}  className="w-15 rounded-md bg-blue-400 px-5 shadow-md text-gray-700">Cancel</button>
                  <button className="w-15 px-5 rounded-md border-yellow-200 bg-gray-300 hover:scale-90 hover:font-bold hover:text-green-600 shadow-md text-red-400">Search</button>

                </div>
                
              
          </div>
        )}
    </header>
  );
}

export default Header;
