import React from 'react'
import { Link } from 'react-router-dom'

const NationalKits = () => {
  return (
    <div>
      <img src="/images/NationalKitsGif.gif" className='w-screen relative z-0' />
      <div className='flex justify-end h-full flex-col pl-8 md:px-10 py-4 z-30 -translate-y-[8rem]  sm:-translate-y-[8rem]   md:-translate-y-[10rem] space-y-2'>
        <h1 id='newCollection' className='text  text-black text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter leading-tight  z-30' >NATIONAL GAMES ARE ABOUT TO<span className='bg-red-600 text-white ml-2'>START</span> </h1>
        <button className='button text-5xl font-extrabold tracking-tighter leading-tight  w-[10rem] z-30'><Link to='/products/jerseys'>LET'S GO ! <span>LET'S GO !</span></Link></button>
      </div>
    </div>
  )
}

export default NationalKits