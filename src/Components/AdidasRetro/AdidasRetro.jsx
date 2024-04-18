import React from 'react'
import { Link } from 'react-router-dom'

const AdidasRetro = () => {
 return (
  <div className='mt-32 border-b-8 border-red-600'>
   <img src="/images/AdidasRetro.jpg" className='w-screen relative z-0' />
   <div className='flex justify-end h-full flex-col px-10 py-4 z-30 -translate-y-[10rem] sm:-translate-y-[13rem] md:-translate-y-[13rem] space-y-2 md:space-y-4'>
    <h1 id='newCollection' className='text text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight  z-30' >GET BACK TO <span className='bg-cyan-600'>RETRO</span> AGAIN </h1>
    <button className='button text-5xl font-extrabold tracking-tighter leading-tight w-[10rem] z-30'><Link to='/products/all'>LET'S GO ! <span>LET'S GO !</span></Link></button>
   </div>
  </div>
 )
}

export default AdidasRetro