import React from 'react'
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className='flex justify-between	items-center	'>
        <div>
           <Image src={'/logo.png'} alt = "Not supported" width={100} height={100}/>
        </div>
        <div className='flex gap-2	items-center '>
           <div className='hover:bg-gray-700	p-1 rounded cursor-pointer'>
           <FaHome fontSize={30}/>
           </div>
            <input className = "p-2 rounded	bg-slate-700	border-slate-600 cursor-pointer" type='search' placeholder='search'/>
        </div>
        <div className='flex gap-2	items-center '>
            <button type='button' >Sign up</button>
            <button type='button' className='btn-primary'>Login</button>

        </div>
    </div>
  )
}
