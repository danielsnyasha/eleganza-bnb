import Image from 'next/image'
import React from 'react'

function MediumCard({title, img}) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-in'>
    <div className='relative h-60 w-60'>
          <Image src={img} alt={title} layout="fill" objectFit="cover" objectPosition="center" className='rounded-xl shadow-md'>

        </Image>
    </div>
    <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  )
}

export default MediumCard