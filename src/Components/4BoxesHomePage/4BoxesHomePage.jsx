import React from 'react'
import { NavLink } from 'react-router-dom'

const BoxesHomePage = () => {
 return (
  <div className='flex items-center flex-wrap lg:flex-wrap xl:flex-nowrap justify-center mt-0 px-16 space-x-4 xl:pb-16 will-change-auto '>

   <div className='flex flex-col space-y-4 px-1 py-2'>
    <img src="/images/HomeBox_1.avif" className='w-[20rem] hover:shadow-lg hover:shadow-current duration-500' />
    <h1 className='font-bold text-[16px] tracking-tighter leading-tight font-sans boxTitle'>SUPERSTAR</h1>
    <p>Celebrating a Legacy</p>
    <NavLink to='/products/men' className='underline hover:bg-black hover:text-white px-2 w-[6rem] duration-300 font-sans font-bold'>Shop Now</NavLink>
   </div>


   <div className='flex flex-col space-y-4 px-1 py-2'>
    <img src="/images/HomeBox_2.avif" className='w-[20rem] hover:shadow-lg hover:shadow-current duration-500' />
    <h1 className='font-bold text-[16px] tracking-tighter leading-tight font-sans boxTitle'>START YOUR LEGACY</h1>
    <p>Celebrating a Legacy</p>
    <NavLink to='/products/jerseys' className='underline hover:bg-black hover:text-white px-2 w-[6rem] duration-300 font-sans font-bold'>Shop Now</NavLink>
   </div>


   <div className='flex flex-col space-y-4 px-1 py-2'>
    <img src="/images/HomeBox_3.avif" className='w-[20rem] hover:shadow-lg hover:shadow-current duration-500' />
    <h1 className='font-bold text-[16px] tracking-tighter leading-tight font-sans boxTitle'>THE 2024 COLLEGIATE COLLECTION</h1>
    <p>Time to cheer up with Colors</p>
    <NavLink to='/products/sale' className='underline hover:bg-black hover:text-white px-2 w-[6rem] duration-300 font-sans font-bold'>Shop Now</NavLink>
   </div>


   <div className='flex flex-col space-y-4 px-1 py-2'>
    <img src="/images/HomeBox_4.avif" className='w-[20rem] hover:shadow-lg hover:shadow-current duration-500' />
    <h1 className='font-bold text-[16px] tracking-tighter leading-tight font-sans boxTitle'>PRINT LOVER'S PARADISE</h1>
    <p>New Adicolor 2024 has just Arrived</p>
    <NavLink to='/products/women' className='underline hover:bg-black hover:text-white px-2 w-[6rem] duration-300 font-sans font-bold'>Shop Now</NavLink>
   </div>

  </div>
 )
}

export default BoxesHomePage