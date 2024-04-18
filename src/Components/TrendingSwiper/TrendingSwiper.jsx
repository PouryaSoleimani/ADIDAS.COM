import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import { NavLink } from 'react-router-dom';

const TrendingSwiper = () => {
 return (
  <section className=' py-2 px-12'>
   {/* 2 BUTTONS */}
   <div className='mt-0 flex w-full items-center justify-start px-10 space-x-2'>
    <h1 className='text-center text-4xl font-extrabold w-full'>AVAILABE ONLY ON <span className='bg-black text-slate-100 px-4 py-2 cursor-pointer'>ADIDAS.COM</span> </h1>
   </div>
   {/* SWIPER */}
   <div className='px-2 py-1'>
    <Swiper
     style={{
      '--swiper-navigation-color': '#000',
      '--swiper-pagination-color': '#000',
      'padding': '2px'
     }}
     modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
     spaceBetween={10}
     slidesPerView={3}
     navigation
     keyboard
     loop={true}
     pagination={{ clickable: true }}
     scrollbar={{ draggable: true }}
    >
     <SwiperSlide className='py-24 px-2'><img src="/images/TrendingSwiper/Trending_Swiper_1.jpg" className='hover:border-2 border-black' /><NavLink to='/products/all'><h1 className='font-extrabold hidden md:flex text-2xl mt-2 cursor-pointer'>ADIDAS X ATMOS</h1></NavLink></SwiperSlide>
     <SwiperSlide className='py-24 px-2'><img src="/images/TrendingSwiper/Trending_Swiper_2.jpg" className='hover:border-2 border-black' /><NavLink to='/products/all'><h1 className='font-extrabold hidden md:flex text-2xl mt-2'>ADIDAS DISNEY COLLECTION</h1></NavLink></SwiperSlide>
     <SwiperSlide className='py-24 px-2'><img src="/images/TrendingSwiper/Trending_Swiper_3.jpg" className='hover:border-2 border-black' /><NavLink to='/products/all'><h1 className='font-extrabold hidden md:flex text-2xl mt-2'>GAZELLE GASTIN</h1></NavLink></SwiperSlide>
     <SwiperSlide className='py-24 px-2'><img src="/images/TrendingSwiper/Trending_Swiper_4.jpg" className='hover:border-2 border-black' /><NavLink to='/products/all'><h1 className='font-extrabold hidden md:flex text-2xl mt-2'>MAN UTD x STONE ROSES</h1></NavLink></SwiperSlide>
     <SwiperSlide className='py-24 px-2'><img src="/images/TrendingSwiper/Trending_Swiper_5.jpg" className='hover:border-2 border-black' /><NavLink to='/products/all'><h1 className='font-extrabold hidden md:flex text-2xl mt-2'>UCL PRO BALL LONDON</h1></NavLink></SwiperSlide>
     <SwiperSlide className='py-24 px-2'><img src="/images/TrendingSwiper/Trending_Swiper_6.jpg" className='hover:border-2 border-black' /><NavLink to='/products/all'><h1 className='font-extrabold hidden md:flex text-2xl mt-2'>ADIDAS ORIGINALS X BAD BUNNY</h1></NavLink></SwiperSlide>
     <SwiperSlide className='py-24 px-2'><img src="/images/TrendingSwiper/Trending_Swiper_7.jpg" className='hover:border-2 border-black' /><NavLink to='/products/all'><h1 className='font-extrabold hidden md:flex text-2xl mt-2'>AE1 VELOCITY BLUE</h1></NavLink></SwiperSlide>
     <SwiperSlide className='py-24 px-2'><img src="/images/TrendingSwiper/Trending_Swiper_8.jpg" className='hover:border-2 border-black' /><NavLink to='/products/all'><h1 className='font-extrabold hidden md:flex text-2xl mt-2'>ADIFOAM</h1></NavLink></SwiperSlide>
     <SwiperSlide className='py-24 px-2'><img src="/images/TrendingSwiper/Trending_Swiper_9.jpg" className='hover:border-2 border-black' /><NavLink to='/products/all'><h1 className='font-extrabold hidden md:flex text-2xl mt-2'>SUPERCOMFORT - SUPERNOVA</h1></NavLink></SwiperSlide>


    </Swiper>
   </div>
  </section>
 )
}

export default TrendingSwiper