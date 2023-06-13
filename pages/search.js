import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import React from "react";
import { format } from "date-fns";
import InfoCard from "@/components/InfoCard";
import info_data from "@/components/info_data";
import Map from "@/components/Map";

export default function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  // ...
  const startDateObj = startDate ? new Date(startDate) : null;
  const endDateObj = endDate ? new Date(endDate) : null;

  const formattedStartDate = startDateObj
    ? format(startDateObj, "dd MMMM yy")
    : "";
  const formattedEndDate = endDateObj ? format(endDateObj, "dd MMMM yy") : "";
  const range =
    formattedStartDate && formattedEndDate
      ? `${formattedStartDate} - ${formattedEndDate}`
      : "";
  // ...

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <main className="flex">
        <section className="flex-grow pt-10 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} Guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button_">Cancellation Flexibility</p>
            <p className="button_">Type of Place</p>
            <p className="button_">Price</p>
            <p className="button_">Rooms and Beds</p>
            <p className="button_">More Filters</p>
          </div>

          <div className="flex flex-col">
            {info_data &&
              info_data.map(
                ({ img, location, title, description, star, price, total }) => (
                  <InfoCard
                    key={img}
                    img={img}
                    location={location}
                    title={title}
                    description={description}
                    star={star}
                    price={price}
                    total={total}
                  />
                )
              )}
          </div>
        </section>
        <section className="hidden xl:inline-flex md:min-w-[600px]">
          <Map info_data={info_data} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
