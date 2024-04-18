import React from 'react'
import { Link } from 'react-router-dom'

const Yeezy = () => {
  return (
    <div>
      <img src="/images/Yeezy.avif" className='w-screen relative left-0 top-0' />
      <div className='flex flex-col justify-between relative top-[33rem] md:top-[30rem] left-[1rem] md:left-[4rem] space-y-6'>
        <h1 className='yeezy text-xl md:text-5xl w-14 inline-block font-extrabold tracking-tighter leading-tight -translate-y-[42rem] md:-translate-y-[42rem]  z-30'>
          YEEZY
        </h1>
        <span className='yeezy text-xl md:text-4xl text-zinc-700  font-extrabold tracking-wide leading-tight -translate-y-[43rem] md:-translate-y-[43rem] w-38 z-30'>Discover This Legend</span>
        <button className='button text-5xl font-extrabold tracking-tighter leading-tight w-[10rem]  -translate-y-[44rem]  z-30'><Link to='/products/men'>Explore More <span>Explore</span></Link></button>
      </div>

    </div>
  )
}

export default Yeezy
