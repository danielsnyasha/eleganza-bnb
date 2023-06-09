import React from 'react'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

export default function InfoCard({img, location, title, description, star, price, total}) {
  return (
    <div className='flex py-7 px-2 my-1 border-b cursor-pointer hover:opacity-70 hover:bg-blue-50 hover:shadow-md pr-4 transition duration-200 ease-out first:border-t'>
        <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
            <Image src={img} className='rounded-md' layout='fill' objectFit='cover' alt='image' />
        </div>

        <div className='flex flex-col flex-grow pl-5'>
            <div className='flex justify-between'>
                <p>{location}</p>
                <HeartIcon className='h-7 cursor-pointer'/>
            </div>

            <h4 className='text-xl'>{title}</h4>
            <div className='border-b w-10 pt-2'></div>

            <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
            <div className='flex justify-between items-end pt-5'>
                <p className='flex items-center'>
                    <StarIcon className='h-5 text-red-400'/>{star}
                </p>

            <div className=''>
                <p className='text-lg lg:text-2xl pb-2 font-semibold'>{price}</p>
                <p className='text-right font-extralight'>{total}</p>
            </div>
            </div>
        </div>


    </div>
  )
}
