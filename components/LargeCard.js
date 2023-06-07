import Image from "next/image";
import React from "react";

function LargeCard({ img, title, description, buttonText }) {
  return <section className="relative cursor-pointer">
    <div className="relative h-96 min-w-[300px]">

        <Image src={img} layout='fill' objectFit="cover" alt="alt" className="rounded-2xl py-3"/>
    </div>

    <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64 font-semibold">{title}</h3>
        <p>Wishlists curated by Eleganza BnB</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">Get Inspired</button>


    </div>



  </section>;
}

export default LargeCard;
