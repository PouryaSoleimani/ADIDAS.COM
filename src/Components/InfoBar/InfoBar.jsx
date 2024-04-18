import React from 'react'
import { TiLocationOutline } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { TiPhoneOutline } from "react-icons/ti";
import { TiMessage } from "react-icons/ti";
import { RiTimeLine } from "react-icons/ri";

const InfoBar = () => {
 return (
  <div className='bg-black w-full  flex-wrap justify-around h-[5rem] my-0 hidden md:flex text-slate-100 items-center font-bold px-8 mt-0'>
   <h1 className='flex items-center gap-x-1 cursor-pointer'> <TiLocationOutline className='w-6 h-6 -translate-y-1' />USA , NEWYORK , 56th Street , #546 </h1>
   <h1 className='flex items-center gap-x-1 cursor-pointer'> <MdOutlineEmail className='w-6 h-6 -translate-y-1' />adidasUS@gmail.com</h1>
   <h1 className='flex items-center gap-x-1 cursor-pointer'> <TiPhoneOutline className='w-6 h-6 -translate-y-1' />001-5467898642</h1>
   <h1 className='flex items-center gap-x-1 cursor-pointer'> <TiMessage className='w-6 h-6 -translate-y-1' />t.me/@adidasSupport</h1>
   <h1 className='flex items-center gap-x-1 '> <RiTimeLine className='w-6 h-6 -translate-y-1' />10:00 - 22:00</h1>

  </div>
 )
}

export default InfoBar