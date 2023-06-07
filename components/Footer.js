import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-2 bg-gray-100 md:grid-cols-4  gap-y-10 ml-10 px-5 mr-10'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p>How Eleganza Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Eleganza Plus</p>
        <p>Eleganza Luxe</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
      <h5 className='font-bold'>COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is my special site</p>
        <p>It's a pretty awesome attempt</p>
        <p>Referrals accepted</p>
        <p>Eleganza</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
      <h5 className='font-bold'>HOST</h5>
        <p>Nyasha Design</p>
        <p>Presents</p>
        <p>Zero to Hero</p>
        <p>Hundreds of People</p>
        <p>Join Now</p>

      </div>

      <div className='space-y-4 text-xs text-gray-800'>
      <h5 className='font-bold'>SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Say Hi People</p>
        <p>Holiday Season</p>
        <p>For the win</p>

      </div>

      
    </div>
  )
}

export default Footer