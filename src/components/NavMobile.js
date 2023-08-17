import React,{useState} from 'react';
import {BiMenu} from 'react-icons/bi';
import {navigation} from '../data'

export default function NavMobile() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <nav>
    <div onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer text-4xl text-heading ml-[10px] lg:hidden'>
    <BiMenu/>
    </div>
    <ul className={`${isOpen ? 'max-h-60' : 'max-h-0 p-0'} flex flex-col absolute w-full bg-white top-24 left-0 shadow-primary space-y-6 overflow-hidden transition-all lg:hidden`}>
    {navigation.map((item,i)=>{
      return(
        <li key={i}>
        <a href={item.href}>{item.name}</a>
        </li>
      )
    })}
    </ul>
    </nav>
  )
}

