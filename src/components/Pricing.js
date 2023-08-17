import React, { useState } from 'react';
// import {} from 'react-icons/ai'
import { pricing } from '../data';

export default function Pricing() {
  const [index,setIndex] = useState(0)
  return (
    <section className='section-sm lg:section-lg bg-section'>
    <div className='container mx-auto'>
    <div className='text-center mb-7 lg:mb-[70px]'>
    <h2 className='h2 mb-3 lg:mb-[18px]'>Pick a Pricing Plan</h2>
    <p className='max-w-[398px] mx-auto'>Pick a pricing plan and get started your jourey with us for build your body and mind</p>
    </div>
    <div className='flex flex-col mx-auto items-center gap-y-5 lg:flex-row lg:gap-x-[33px]'>
    {pricing.map((card,i)=>{
      const {title, price, list, buttonIcon, buttonText, delay} = card;
      return(
       <div onClick={()=>setIndex(i)} key={i} className='bg-white w-full max-w-[368px] min-h-[668px] h-full cursor-pointer relative'>
       <div className={`${index === i ? 'bg-orange' :'bg-white'} text-center pt-[70px] pb-[34px] border-b border-stroke-3 transition`}>
       <div className='text-[24px] font-medium mb-[10px] '>{title}</div>
       <div className='text-[34px] font-semibold'>{price}</div>
       </div>
       <div className='px-[30px] pt-[18px] pb-[30px]'>
       <p className='text-center mb-6 text-sm'>Discover your favorite class!</p>
       <ul className=' flex flex-col gap-3 mb-10'>
       {list.map((item,cur)=>{
        const {icon,name} = item;
        return(
          <li key={cur} className='border border-r-green border-stroke-3 p-4 rounded-md flex items-center gaap-4'>
          <div className='flex justify-center bg-green-100 w-7 h-7 textx-2xl text-green-300 rounded-full items-center'>{icon}</div>{name}
          </li>
        )
       })}</ul>
       <div className='absolute bottom-[30px] w-full left-0 right-0 px-[30px]'>
       <button className={`${index === i ?'bg-orange text-white': 'bg-white'} w-full h-[50px] rounded border border-orange flex items-center justify-center text-orange font-medium transition relative`}>{buttonText}
       <div className={`${index === i ? 'bg-orange-200' : 'bg-orange'} w-[50px] h-[50px] flex justify-center items-center absolute right-0 rounded text-white`}>{buttonIcon}</div>
       </button>
       </div>
       </div>
       </div>
      )

    })}
    </div>
    </div>
    
    </section>
  )
}

