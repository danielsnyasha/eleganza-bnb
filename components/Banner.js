import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
      src='/mountains.jpg'
      layout='fill'
      objectFit="cover"
      loading="eager"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-bold text-yellow-300">Not sure where to go? Perfect.</p>

        <button className=" transition duration-150 text-purple-500 active:scale-90 hover:shadow-xl bg-white px-10 py-4 shadow-md rounded-full my-3 font-extrabold "> I'm flexible</button>
      </div> 
      
    </div>
    
  );
}

export default Banner;
