import React from 'react';
import { courses } from '../data';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

export default function Courses() {
  return (
    <section className='section-sm lg:section-lg'>
      <div className='container mx-auto'>
        <div className='text-center mb-16 lg:mb-32'>
          <h2 className='h2 mb-3 lg:mb-[18px]'>Popular Courses</h2>
          <p className='max-w-[480px] mx-auto'>Practice anywhere, anytime. Explore way to excertise and learn more about yourself.W are providing the best.</p>
        </div>
        <div className='flex flex-col lg:flex-row lg:gap-x-[33px] gap-y-24 mb-7 lg:mb-14'>
          {courses.map((item, i) => {
            const { image, title, desc, link, delay } = item;
            return (
              <div key={i} className='w-full bg-white shadow-primary max-w-[368px] px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] flex flex-col rounded-[14px] mx-auto transition hover:shadow-xl'>
                <div className='-mt-[38px] lg:-mt-12 mb-4 lg:mb-6'>
                  <img src={image} alt='' />
                </div>
                <div >
                  <h4 className='text-lg lg:text-xl font-semibold mb-2 lg:mb-4'>{title}</h4>
                  <p>{desc}</p>
                </div>
                <div className=' flex items-center justify-between mt-8 mb-2 lg:mb-0'>
                  <div className='flex text-orange gap-x-2'>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill/>
                  </div>
                  <a href='#' className='font-medium'>{link}</a>
                </div>
              </div>
            )
          })}
        </div>
        <div className='flex justify-center'>
          <button className='btn btn-sm btn-orange'>Browse All</button>
        </div>
      </div>
    </section>
  )
}

