/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import Header from './../Components/Header/Header'
import ShoppingBagBreadCrumb from '../Components/ShoppingBagBreadCrumb/ShoppingBagBreadCrumb'
import { Link, NavLink } from 'react-router-dom'
import InfoBar from '../Components/InfoBar/InfoBar';
import JoinBanner from '../Components/JoinBanner/JoinBanner';
import Footer from '../Components/Footer/Footer';
import { useRecoilState } from 'recoil';
import { shoppingBag, wishList } from '../Recoil/Atoms';
import toast, { Toaster } from 'react-hot-toast';
//ICONS
import { RiDeleteBin5Line } from 'react-icons/ri';
import { GrShop } from 'react-icons/gr';

import SwipeR from '../Components/Swiper/Swiper';
import 'animate.css';


const WishList = () => {
 //STATES
 const [WISHLIST, setWISHLIST] = useRecoilState(wishList)
 const [BAG, setBAG] = useRecoilState(shoppingBag)
 const [isButtonDisabled, setIsButtonDisabled] = useState(false)

 //FUNCTIONS
 const notify = () => toast.success('Product is Added To Your Bag');
 const notify2 = () => toast.error('Product is Removed From Your Wishlist');
 const notify5 = () => toast('This Product is Already in Your Bag', { icon: '📛', })

 const buyHandler = (product) => {
  const id = product.id
  let copy = [...BAG]
  let repeatedProduct = copy.filter(item => item.id == id)
  if (repeatedProduct.length) { setIsButtonDisabled(true); notify5(); return }
  copy.push(product)
  setBAG(copy)
  notify()
 }

 const deleteHandler = (product) => {
  const id = product.id
  let price = product.price
  const copy = [...WISHLIST]
  const filteredCopy = copy.filter(product => { return product.id !== id })
  setWISHLIST(filteredCopy)
  notify2()
 }

 // RETURN ==============================================================================================================
 return (
  <div className='h-fit'>
   <Header />
   <ShoppingBagBreadCrumb />
   <Toaster position="top-right" reverseOrder={true} />
   {/* MAIN DIV */}

   {!WISHLIST.length ? (
    <div id='emptyBag' className='flex flex-col space-y-4 items-start py-20 mb-[10rem] px-4 ml-[10rem] mt-[3rem] animate__animated animate__flash'>
     <h1 className='emptyBag text-4xl tracking-tighter'>YOUR <span className='bg-red-700 px-1 py-1 text-white'>WISHLIST</span> IS EMPTY</h1>
     <p className='tracking-tight'>Once you add something to your wishlift, it will appear here. Ready to get started?</p>
     <NavLink to='/products/all'>
      <button className='button w-[10rem] whitespace-nowrap flex items-center justify-center'>GET STARTED <span>START</span></button>
     </NavLink>
    </div>

   ) : (

    <>
     <h1 className='emptyBag text-4xl text-center mt-10 underline decoration-8 decoration-red-700'>YOUR WISHLIST</h1>
     <div className='w-full h-fit flex flex-wrap place-items-start justify-items-center px-6 gap-y-4 gap-x-4 pb-10 mt-10'>
      {WISHLIST.map((product) => (
       <div key={product.id} className='hover:border-2 hover:border-black border border-gray-500 pb-2 sm:w-[17rem] md:w-[22rem] lg:w-[25rem] xl:w-[26.5rem] h-[15rem] flex space-y-0 animate__animated animate__pulse'>

        <Link to='/products/productpage' state={{ ...product }} className='cursor-pointer w-1/2 h-full'>
         <img src={product.img} className='h-[14.75rem] w-full cursor-pointer' />
        </Link>
        <div className='flex flex-col justify-start items-start w-1/2'>

         <div className='flex flex-col py-2 px-2 w-full'>
          <p className='flex justify-between tracking-wide font-bold productTitle items-center text-lg hover:underline'>{product.title}</p>
          <p>{product.type === 'T_SHIRT' ? 'Sports Wear' : product.type === 'PANTS' ? 'Comfort' : product.type === 'SHOES' ? 'Performance' : product.type === 'KITS' ? 'Football Clothing' : product.type === 'JACKETS' ? 'Stylish Winter' : product.type === 'HOODIES' ? 'Stylish Winter' : 'Everyday'}</p>
          <p className='text-zinc-500 tracking-widest text-sm emptyBag font-bold'>{product.gender.toUpperCase()} {product.type}</p>
         </div>

         <div className='flex flex-col items-end space-y-4 justify-end h-full w-full'>

          <span className='flex justify-end items-center pr-2'>
           <h2 className='text-3xl leading-3 priceTag font-bold tracking-normal w-fit bg-zinc-200 px-2 py-3'>${product.price}</h2>
          </span>

          <div className='flex space-x-2 sm:space-x-  md:space-x-6 px-2 justify-center items-end'>
           <div className='space-x-2'>
            <button className='px-5 py-2 text-xl hover:bg-black hover:text-white duration-500 border bg-zinc-100 border-black ' onClick={() => buyHandler({ ...product })}><GrShop className='w-5 h-5' /></button>
            <button className='px-5 py-2 text-xl hover:bg-red-700 hover:text-white duration-500 border bg-zinc-100 border-black' onClick={() => deleteHandler({ ...product })}><RiDeleteBin5Line className='w-5 h-5' /></button>
           </div>
          </div>
         </div>

        </div>
       </div>
      ))}
     </div >
    </>
   )}

   {!WISHLIST.length && (
    <div id="suggestedProducts" className='pb-20'>
     <h2 className='emptyBag pt-8 text-center text-4xl underline decoration-8 decoration-cyan-400 underline-offset-8 '> SUGGESTED PRODUCTS FOR YOU</h2>
     <SwipeR />
    </div>
   )}

   <InfoBar />
   <JoinBanner />
   <Footer topCount={800} />
  </div>
 )
}

export default WishList