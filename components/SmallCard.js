import React from 'react';
import Image from 'next/image';

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* Left */}
      <div className="relative h-16 w-16 rounded-lg">
        <Image src={img} alt={location} layout="fill" objectFit="cover" objectPosition="center" className='rounded-lg'/>
      </div>

      {/* Right */}
      <div className="ml-4">
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
