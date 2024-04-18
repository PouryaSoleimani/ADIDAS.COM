import React from 'react'
import { Link } from 'react-router-dom'

const BayernMunichBanner = () => {
 return (
  <div className='pt-20 pb-0 mb-0 h-fit relative'>
   <img src="/images/Others/Bayern_Munich_2.jpg" className='w-screen relative z-0 h-[49rem] mb-[4rem]' />
   <div className='flex justify-end h-fit flex-col pl-8 md:px-10 py-4 z-30 -translate-y-[8rem]  sm:-translate-y-[8rem] md:-translate-y-[18rem] space-y-4'>
    <h1 id='newCollection' className='text text-black bg-white w-fit pr-2 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter leading-tight  z-30' ><span className='bg-[#6e3b58] text-black px-2'>BAYERN MUNICH</span> EXCLUSIVE 2024 COLLECTION </h1>
    <button className='button text-5xl font-extrabold tracking-tighter leading-tight  w-[10rem] z-30'><Link to='/products/jerseys'>LET'S GO ! <span>LET'S GO !</span></Link></button>
   </div>
   {/* <img src="/images/LoginMoto.png" className='py-0 absolute left-0 bottom-0' /> */}
  </div>
 )
}

export default BayernMunichBanner