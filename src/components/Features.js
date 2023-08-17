import React, { useState } from 'react';
import  ModalVideo from 'react-modal-video';
import '../video.scss';
import {BsPlayCircleFill} from 'react-icons/bs'

export default function Features() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <section className='bg-section min-h-[428px] pt-8 pb-[38px] lg:pb-[150px] mt-[120px] lg:mt-[130px]'>
    <div className='container mx-auto'>
    <div className='bg-video h-[310px] bg-cover bg-center bg-no-repeat lg:h-[622px] w-full flex justify-center items-center rounded-md -mt-[150px] mb-[28px] lg:mb-20'>
    <div onClick={()=>setIsOpen(!isOpen)} className='tetx-6xl lg:text-[120px] cursor-pointer hover:scale-100 transition-all text-orange'>
    <BsPlayCircleFill/>
    </div>
    </div>
    <div className='flex flex-col lg:flex-row lg:gap-x-8'>
    <div className='flex-1'>
    <div className='w-9 h-[2px] bg-orange mb-2 lg:w-[70px] rounded-full'></div>
    <h2 className='h2 mb-3 lg:mb-0'>The Better Way to <br/> Start Yoga</h2>
    </div>
    <div className='flex-1'>
    <p className='max-w-[360px] mb-[18px] lg:mb-[38px]'>Practice anywhere, anytime. Explore way to excertise and learn more about yourself.W are providing the best.</p>
    <button className='btn btn-sm btn-orange'>Get Started</button>
    </div>
    </div>
    </div>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId='klmBssEYkdU' onClose={()=>setIsOpen(false)}/>
    </section>
  )
}

