import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import React from "react";
import {format} from 'date-fns'

export default function Search() {
    const router = useRouter();
    const {location, startDate, endDate, noOfGuests} =  router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`
  return (
    <div className>
      <Header placeholder= {`${location} | ${range} | ${noOfGuests}`}/>
      <main className="flex">
        <section className="flex-grow pt-10 px-6">
            <p className='text-xs'>300+ Stays - {range} - for {noOfGuests} Guests</p>

            <h1 className="text-3xl font-semibold mt-2 mb-6 ">Stays in {location}</h1>

            <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                <p className="button_">Cancellation Flexibility</p>
                <p className="button_"> Type of Place </p>
                <p className="button_">Price</p>
                <p className="button_">Rooms and Beds</p>
                <p className="button_">More Filters</p>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
