import React, { useEffect, useRef } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import './HomePageVideo.css'
import { Link } from 'react-router-dom'




const HomePageVideo = () => {
 const vid = useRef()
 useEffect(() => { vid.current.play() }, [])
 return (
  <div className='mt-8'>
   <div>
    <video autoPlay loop muted src="/videos/homepage_video.mp4" className='relative left-0 top-0 w-full' ref={vid}></video>
    <div className='-translate-y-[9.6rem]  sm:-translate-y-[10rem]  md:-translate-y-[15rem] flex flex-col space-y-2 md:space-y-4 px-2 md:px-8'>
     <h1 className=' z-10   text-slate-100 font-bold text-2xl md:text-5xl tracking-tighter font-sans'>2024 NATIONAL TEAMS SOCCER KITS</h1>
     <h3 className=' z-10  text-slate-100 text-md  md:text-2xl font-semibold tracking-tighter font-sans'>Time to show your Colors and gear up for a summer of colors</h3>
     <button className='button z-10 w-[10rem] font-bold h-12 md:h-16 px-6 md:py-3'><Link to='/products'> <span className="text flex items-center gap-x-2 ">Shop Now<FaLongArrowAltRight /></span> <span className='text flex items-center gap-x-1'>SHOP</span>   </Link> </button>
    </div>
   </div>
  </div>
 )
}

export default HomePageVideo

