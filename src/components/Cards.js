import React from 'react';
import card1 from '../assets/img/cards/card-1.png'
import card2 from '../assets/img/cards/card-2.png'
import card3 from '../assets/img/cards/card-3.png'

export default function Cards() {
  return (
    <section className='bg-cardsBg min-h-[260px] pb-[55px] lg:-mt-24'>
    <div className='container mx-auto flex flex-col lg:flex-row gap-x-[32px]'>
    <div className='flex-1 flex gap-x-[15px] lg:gap-x-[32px] -mt-[32px] z-10 lg:-mt-[77px] mx-auto'>
    <div className='bg-white w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md max-h-[282px]'>
    <div className='flex items-center mb-[18px] lg:mb-[28px]'>
    <h4 className='text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8'>Make your Own Paln for Yoga</h4>
    <h2 className='h2 text-stroke-2'>1</h2>
    </div>
    <div><img src={card1} alt='' /></div>
    </div>
    
    <div className='bg-white w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md max-h-[282px]'>
    <div className='flex items-center mb-[18px] lg:mb-[28px]'>
    <h4 className='text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8'>Find a Yoga mentor for You.</h4>
    <h2 className='h2 text-stroke-2'>2</h2>
    </div>
    <div><img src={card2} alt='' /></div>
    </div>
    </div>
    <div className='bg-white w-full max-w-[542px] flex-1 mx-auto p-[14px] lg:p-[26px] mt-4 lg:-mt-[77px] z-10 shadow-2xl rounded-md flex justify-between items-start'>
    <div className='max-w-[240px]'>
    <div className='flex items-center mb-4 lg:mb-8'>
    <h4 className='text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8'>Every-Day Open Master Classes.</h4>
    <h2 className='h2 text-stroke-2'>3</h2>
    </div>
    <p className='mb-4 lg:mb-3'>We're boosting online yoga by enabling anyone in the world to learn from the best</p>
    <a href='#' className='text-xs lg:text-sm font-bold uppercase text-heading'>Read more</a>
    </div>
    <div><img src={card3} alt='' /></div>
    
    </div>
    </div>
    </section>
  )
}

