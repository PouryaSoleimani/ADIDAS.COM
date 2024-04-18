// ^ SWIPER _____________________________________________________________________________________________
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import { NavLink } from 'react-router-dom';

const SwipeR = () => {

 return (
  <section className=' py-4'>
   {/* 2 BUTTONS */}
   <div className='mt-0 flex w-full items-center justify-center md:justify-start px-10 space-x-6'>
    <button className='button h-[3.3rem] justify-center flex-shrink  flex items-center leading-3 font-bold'>Trending Now <span>Trendings</span></button>
    <button className='button h-[3.3rem] justify-center flex-shrink  flex items-center leading-3 font-bold'>Best Sellers <span>Bests</span></button>
   </div>
   {/* SWIPER */}
   <div className='px-7 py-2'>
    <Swiper
     style={{
      '--swiper-navigation-color': '#000',
      '--swiper-pagination-color': '#000',
      'padding': '5px'
     }}
     modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
     spaceBetween={5}
     slidesPerView={5}
     navigation
     keyboard
     loop={true}
     pagination={{ clickable: true }}
     scrollbar={{ draggable: true }}
    >
     <SwiperSlide className=' py-8 md:py-16 px-2'><NavLink to='/products/all'><img src="/images/Swiper_Home/Swipe_Home_1.avif" className='hover:border-2 border-black' /></NavLink><h1 className='font-bold hidden md:flex mt-2'>Real Madrid 2024-2025 Home Kit</h1></SwiperSlide>
     <SwiperSlide className=' py-8 md:py-16 px-2'><NavLink to='/products/all'><img src="/images/Swiper_Home/Swipe_Home_2.avif" className='hover:border-2 border-black' /></NavLink><h1 className='font-bold hidden md:flex mt-2'>Argentina 2024 Away Kit</h1></SwiperSlide>
     <SwiperSlide className=' py-8 md:py-16 px-2'><NavLink to='/products/all'><img src="/images/Swiper_Home/Swipe_Home_3.avif" className='hover:border-2 border-black' /></NavLink><h1 className='font-bold hidden md:flex mt-2'>Inter Miami 2024-2025 Away kit</h1></SwiperSlide>
     <SwiperSlide className=' py-8 md:py-16 px-2'><NavLink to='/products/all'><img src="/images/Swiper_Home/Swipe_Home_4.avif" className='hover:border-2 border-black' /></NavLink><h1 className='font-bold hidden md:flex mt-2'>Germany 2024 Away Kit</h1></SwiperSlide>
     <SwiperSlide className=' py-8 md:py-16 px-2'><NavLink to='/products/all'><img src="/images/Swiper_Home/Swipe_Home_5.avif" className='hover:border-2 border-black' /></NavLink><h1 className='font-bold hidden md:flex mt-2'>Italy 2024 Home Kit</h1></SwiperSlide>
     <SwiperSlide className=' py-8 md:py-16 px-2'><NavLink to='/products/all'><img src="/images/Swiper_Home/Swipe_Home_6.avif" className='hover:border-2 border-black' /></NavLink><h1 className='font-bold hidden md:flex mt-2'>Germany 2024 Hotel Jacket</h1></SwiperSlide>
     <SwiperSlide className=' py-8 md:py-16 px-2'><NavLink to='/products/all'><img src="/images/Swiper_Home/Swipe_Home_7.avif" className='hover:border-2 border-black' /></NavLink><h1 className='font-bold hidden md:flex mt-2'>Adidas Cusion 3 New</h1></SwiperSlide>
     <SwiperSlide className=' py-8 md:py-16 px-2'><NavLink to='/products/all'><img src="/images/Swiper_Home/Swipe_Home_8.avif" className='hover:border-2 border-black' /></NavLink><h1 className='font-bold hidden md:flex mt-2'>Argentina 2024 Away Kit</h1></SwiperSlide>
     <SwiperSlide className=' py-8 md:py-16 px-2'><NavLink to='/products/all'><img src="/images/Swiper_Home/Swipe_Home_9.avif" className='hover:border-2 border-black' /></NavLink><h1 className='font-bold hidden md:flex mt-2'>Mexico 2024 Home Kit</h1></SwiperSlide>
     <SwiperSlide className=' py-8 md:py-16 px-2'><NavLink to='/products/all'><img src="/images/Swiper_Home/Swipe_Home_10.avif" className='hover:border-2 border-black' /></NavLink><h1 className='font-bold hidden md:flex mt-2'>Peru 2024 Home Kit</h1></SwiperSlide>
     <SwiperSlide className=' py-8 md:py-16 px-2'><NavLink to='/products/all'><img src="/images/Swiper_Home/Swipe_Home_11.avif" className='hover:border-2 border-black' /></NavLink><h1 className='font-bold hidden md:flex mt-2'>Belgium 2024 Home Kit</h1></SwiperSlide>
     <SwiperSlide className=' py-8 md:py-16 px-2'><NavLink to='/products/all'><img src="/images/Swiper_Home/Swipe_Home_12.avif" className='hover:border-2 border-black' /></NavLink><h1 className='font-bold hidden md:flex mt-2'>AE 1 Velocity Special Edition</h1></SwiperSlide>
     <SwiperSlide className=' py-8 md:py-16 px-2'><NavLink to='/products/all'><img src="/images/Swiper_Home/Swipe_Home_13.avif" className='hover:border-2 border-black' /></NavLink><h1 className='font-bold hidden md:flex mt-2'>D.O.N Issue 5 Medusa Edition</h1></SwiperSlide>
     <SwiperSlide className=' py-8 md:py-16 px-2'><NavLink to='/products/all'><img src="/images/Swiper_Home/Swipe_Home_14.avif" className='hover:border-2 border-black' /></NavLink><h1 className='font-bold hidden md:flex mt-2'>TRAE YOUNG 3D Printed</h1></SwiperSlide>
     <SwiperSlide className=' py-8 md:py-16 px-2'><NavLink to='/products/all'><img src="/images/Swiper_Home/Swipe_Home_15.avif" className='hover:border-2 border-black' /></NavLink><h1 className='font-bold hidden md:flex mt-2'>Real Madrid 2024-2025 Away Kit</h1></SwiperSlide>
    </Swiper>
   </div>
  </section>
 )
}

export default SwipeR