import React, { useLayoutEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, ScrollRestoration } from 'react-router-dom'
import ImageZoom from "react-image-zooom";
//ICONS
import { FaRulerVertical } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { RiEmotionUnhappyFill } from "react-icons/ri";
import { RiEmotionHappyFill } from "react-icons/ri";
import { HiBuildingStorefront } from "react-icons/hi2";
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import { IoLogoApple } from "react-icons/io5";
import { BsGooglePlay } from "react-icons/bs";
//
import { Rating } from "flowbite-react";
import { Blockquote } from "flowbite-react";
import toast, { Toaster } from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import { shoppingBag } from '../../Recoil/Atoms';
import './css/ProductPage.css'
axios.defaults.baseURL = 'http://localhost:4000'


const ProductPage = (props) => {
  //STATES
  const location = useLocation()
  const [BAG, setBAG] = useRecoilState(shoppingBag)
  const [count, setCount] = useState(0)
  const notify = () => toast.success('Product is Added To Your Bag');

  //FUNCTIONS
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 150, left: 0, behavior: "smooth" });
  }, [location.pathname]);


  const buyHandler = (product) => {
    let copy = [...BAG]
    copy.push(product)
    setBAG(copy)
    notify()
  }

  // RETURN =================================================================================================================
  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      
      <div className='w-screen flex h-full justify-between'>

        {/*//^ LEFT DIV //*/}
        <div id="left" className='w-3/5 bg-zinc-100 h-full flex flex-col space-y-10 items-center justify-center my-0 p-[2rem]'>
          <ImageZoom src={location.state.img} zoom="200" />
          <div className='flex items-center justify-between w-full h-full'>
            <span className='bg-black w-full font-bold text-white text-center py-2 hover:bg-zinc-700 duration-300 cursor-pointer'>Availables Stores Near you</span>
          </div>
          <ImageZoom src="/images/Map/Map.png" zoom="200" width='100%' height='100%' />
          <img src="/images/How to Care.png" className='border-4 border-black' />
        </div>

        {/*//! RIGHT DIV //*/}
        <div id="right" className='w-2/5 bg-zinc-200 h-inherit py-4 flex flex-col space-y-2 items-start px-10 justify-start'>
          <p className='text-lg font-bold pt-6 text-zinc-700 '>{location.state.gender.toUpperCase()}   {location.state.type}</p>
          <p className='productPageTitle text-5xl py-2 font-extrabold tracking-wid mt-4'>{location.state.title}</p>
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400 cursor-pointer hover:underline">4.95 out of 5 , 173 Reviews</p>
          </Rating>
          <h2 className='productPagePrice text-4xl bg-zinc-300 px-2 pt-4 pb-2 hover:bg-black hover:text-white cursor-pointer duration-500  shadow-inner shadow-current leading-10 flex items-center justify-center rounded-md'>${location.state.price}</h2>
          <div className='space-y-4'>
            <h2 className='text-xl tracking-tighter font-extrabold ulMyAdidas'>GET $30 OFF ORDERS OF $100+</h2>
            <p className='text-zinc-600 text-lg w-[25rem] tracking-wide'>Spring savings are on! Stock up on 3-Stripes styles for less by using code SAVE30.</p>
            <h3 className='font-bold text-xl mt-2 whitespace-pre productTitle'>COLORS :    ---   ,   ---</h3>
            <div className='mt-2 flex space-x-6'>
              <h1 className='text-2xl productTitle leading-10'>SIZES :</h1>
              <p className='productTitle cursor-pointer duration-500 px-4 leading-10 flex items-center justify-center rounded-md  bg-zinc-300 hover:bg-black hover:text-white'>XS</p>
              <p className='productTitle cursor-pointer duration-500 px-4 leading-10 flex items-center justify-center rounded-md  bg-zinc-300 hover:bg-black hover:text-white'>S</p>
              <p className='productTitle cursor-pointer duration-500 px-4 leading-10 flex items-center justify-center rounded-md  bg-zinc-300 hover:bg-black hover:text-white'>M</p>
              <p className='productTitle cursor-pointer duration-500 px-4 leading-10 flex items-center justify-center rounded-md  bg-zinc-300 hover:bg-black hover:text-white'>L</p>
              <p className='productTitle cursor-pointer duration-500 px-4 leading-10 flex items-center justify-center rounded-md  bg-zinc-300 hover:bg-black hover:text-white'>XL</p>
            </div>
            <p className='flex mt-2 underline text-lg items-center hover:bg-black hover:text-white w-28 cursor-pointer duration-500'><FaRulerVertical />Size Guide</p>

            <form className="max-w-sm my-4">
              <label htmlFor="countries" className="block text-sm font-medium text-gray-900 dark:text-white">Select Your Country</label>
              <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-zinc-800 focus:border-zinc-800 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option >Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>

            <form className="max-w-xs ">
              <div className="relative flex items-center max-w-[8rem]">
                <button type="button" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300  p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" onClick={() => { setCount(prev => prev - 1) }}>
                  <TiMinus />
                </button>
                <input type="text" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required value={count} onChange={(e) => setCount(e.target.value)} />
                <button type="button" onClick={() => { setCount(prev => prev + 1) }} className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                  <TiPlus />
                </button>
              </div>
              <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">Please select a number from 1 to 10.</p>
            </form>

            <div className='mt-2 flex items-center justify-start space-x-2'>
              <button onClick={() => buyHandler(location.state)} className='button w-[23rem]'>ADD TO BAG <span>ADD</span></button>
              <button className='px-4 py-4 text-xl hover:bg-red-700 hover:text-white duration-500 border border-black'><FaRegHeart /></button>
            </div>
            <p>4 interest-free payments of $14.75 with <span className='font-extrabold'>Klarna</span>. <span className='underline cursor-pointer hover:bg-black hover:text-white'>Learn More</span></p>
            <p className='flex gap-x-2 underline cursor-pointer'><HiBuildingStorefront />Check Availabe Stores Nearby</p>
            <Blockquote>
              "Adidas.com is just awesome. It contains tons of Fashionable Clothings and Styles starting from 10$ to
              higher Values. Perfect choice for your next Styling Design. No Matter how the Weather is ..."
            </Blockquote>

            {/* RED VOUCHER */}
            <div className='flex items-start justify-between flex-col space-y-4'>
              <div className=' bg-red-700 w-[23rem] py-2 px-4 h-[14rem] rounded-lg hover:scale-105 duration-500'>
                <div className='flex  items-start justify-between'>
                  <h2 className='voucherText font-extrabold text-4xl w-1/2 tracking-tighter text-zinc-950 py-2 '>FIRST BUY OFFER CODE</h2>
                  <img src="/images/Community/adiClubLogo.png" alt="" className='w-16 h-8' />
                </div>
                <div>
                  <p className='text-zinc-950 font-semibold'>WE-EU3T-JJ85</p>
                </div>
                <div className='flex items-end justify-between mt-12 font-bold text-white'>
                  <a href="#" className='underline text-zinc-950 mt-1 tracking-tighter hover:bg-black hover:text-white py-1 cursor-pointer'>COPY CODE</a>
                  <p className='text-zinc-950'>3/27/2024</p>
                </div>
              </div>
            </div>
            {/* RATINGS */}
            <h1 className='text-md bg-black text-white px-2 py-1 w-[14rem]  productTitle tracking-wide'>SHARE YOUR EXPERIENCE : </h1>
            <div className="rating flex items-center justify-center py-4 scale-125">
              <input type="radio" id="star-1" name="star-radio" value="star-1" className='hidden' />
              <label htmlFor="star-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
              </label>
              <input type="radio" id="star-2" name="star-radio" value="star-1" className='hidden' />
              <label htmlFor="star-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
              </label>
              <input type="radio" id="star-3" name="star-radio" value="star-1" className='hidden' />
              <label htmlFor="star-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
              </label>
              <input type="radio" id="star-4" name="star-radio" value="star-1" className='hidden' />
              <label htmlFor="star-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
              </label>
              <input type="radio" id="star-5" name="star-radio" value="star-1" className='hidden' />
              <label htmlFor="star-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
              </label>
            </div>
            {/* FEEDBACK  */}
            <div className='pt-6'>
              <div className="bg-white border w-full flex-shrink border-slate-100 grid grid-cols-6 gap-2 rounded-lg p-2 text-sm h-[20rem]">
                <h1 className="text-center text-slate-500 text-xl font-bold col-span-6">Send Feedback</h1>
                <textarea placeholder="Your feedback..." className="bg-zinc-100 text-slate-600 h-[12rem] placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"></textarea>
                <button className="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-zinc-100 hover:border-zinc-600 hover:bg-emerald-400 focus:fill-blue-200 focus:bg-blue-400 border border-zinc-200">
                  <RiEmotionHappyFill className='w-7 h-7' />
                </button>
                <button className="fill-zinc-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-zinc-100 hover:border-slate-600 hover:bg-rose-400 focus:fill-blue-200 focus:bg-blue-400 border border-zinc-200">
                  <RiEmotionUnhappyFill className='w-7 h-7' />
                </button>
                <span className="col-span-2"></span>
                <button className="bg-slate-100 stroke-slate-600 border hover:bg-blue-300 items-center border-slate-200 col-span-2 flex justify-center rounded-lg p-2 duration-300 hover:border-slate-600 hover:text-white focus:stroke-blue-200 focus:bg-blue-400">
                  <svg fill="none" viewBox="0 0 24 24" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"></path>
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M10.11 13.6501L13.69 10.0601"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* DOWNLOAD APP ICONS  */}
          {/* APPLE */}
          <div className='pt-10 w-full flex'>
            <div className='flex items-center justify-center py-2 space-x-6 w-full'>
              <a className="playstore-button">
                <IoLogoApple className='text-white w-8 h-8 appleLogo' />
                <span className="icon">
                </span>
                <span className="texts">
                  <span className="text-1">Download form</span>
                  <span className="text-2">App store</span>
                </span>
              </a>
              {/* GOOGLE */}
              <a className="playstore-button">
                <BsGooglePlay className='text-white w-8 h-8 appleLogo' />
                <span className="icon">
                </span>
                <span className="texts">
                  <span className="text-1">Get it on</span>
                  <span className="text-2">Google Play</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        
      </div>
      <ScrollRestoration />
    </>
  )
}

export default ProductPage