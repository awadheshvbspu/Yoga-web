import React from 'react';
import { navigation } from '../data';

export default function Nav() {
  return (
    <nav className='ml-[70px]'>
    <ul className='flex gap-x-[42px]'>
    {navigation.map((item,i)=>{

      return(
        <li>
        <a href={item.href}>{item.name}</a>
        </li>
      )
    })}
    </ul>
    </nav>
  )
}

