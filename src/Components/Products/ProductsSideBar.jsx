
import React, { useEffect, useState } from 'react'
import { Sidebar } from "flowbite-react";
//ICONS
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiTable, HiViewBoards } from "react-icons/hi";
import { RiTShirt2Fill } from "react-icons/ri";
import { PiPantsFill } from "react-icons/pi";
import { PiSneakerFill } from "react-icons/pi";
import { GiSleevelessJacket } from "react-icons/gi";
import { GiHoodie } from "react-icons/gi";
import { GiBasketballJersey } from "react-icons/gi";
import { GiBilledCap } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import 'animate.css';
import { allProducts_atom, isLoggedin } from './../../Recoil/Atoms'
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import axios from 'axios'
import 'animate.css';


//========================================================================================================================================================================================================

const ProductsSideBar = ({ gender }) => {
 useEffect(() => { getAllProducts(); }, [])
 //STATES
 const [isShowSmallSideBar, setisShowSmallSideBar] = useState(false)
 const [allAtomProducts, setAllAtomProducts] = useRecoilState(allProducts_atom)
 const [ISLOGGEDIN, setISLOGGEDIN] = useRecoilState(isLoggedin)
 //FUNCTIONS
 const sideBarToggler = () => { setisShowSmallSideBar(prev => !prev) }
 const getAllProducts = (type, gender) => { axios.get(`/products?type=${type}&gender=${gender}`).then(response => setAllAtomProducts(response.data)) }
 const getAllProductsFull = (gender) => { axios.get(`/products?gender=${gender}`).then(response => setAllAtomProducts(response.data)) }

 // =============================================================================================================================================================================
 return (
  <>
   <button onClick={sideBarToggler} className='absolute z-10 top-[7.5rem] left-[1rem] text-lg sm:hidden border border-black cursor-pointer '><FaArrowRight className='animate__animated animate__heartBeat' /></button>

   {isShowSmallSideBar ? (
    <div className='absolute left-0 top-0 w-[10rem]  py-4 px-2 bg-zinc-200 z-20 h-[50rem] '>

     <div className='flex py-2 items-center justify-end px-1 text-xl'>
      <FaWindowClose onClick={sideBarToggler} className='cursor-pointer hover:scale-110' />
     </div>
     <hr />

     <div className='my-2' >
      <span className='flex items-center tracking-tighter space-x-2 py-1' onClick={() => { setWantedType("T-SHIRT"), typeFilter(wantedType) }}>
       <RiTShirt2Fill className='w-5 h-5 -translate-y-[1px]' />
       <p>T-SHIRTS</p>
      </span>
     </div>


     <div className='my-2'>
      <span className='flex items-center tracking-tighter space-x-2 py-1'>
       <PiPantsFill className='w-5 h-5 -translate-y-[1px]' />
       <p >PANTS</p>
      </span>
     </div>


     <div className='my-2'>
      <span className='flex items-center tracking-tighter space-x-2 py-1'>
       <PiSneakerFill className='w-5 h-5 -translate-y-[1px]' />
       <p >SHOES</p>
      </span>
     </div>

     <div className='my-2'>
      <span className='flex items-center tracking-tighter space-x-2 py-1'>
       <GiSleevelessJacket className='w-5 h-5 -translate-y-[1px]' />
       <p >JACKETS</p>
      </span>
     </div>

     <div className='my-2'>
      <span className='flex items-center tracking-tighter space-x-2 py-1'>
       <GiHoodie className='w-5 h-5 -translate-y-[1px]' />
       <p >HOODIES</p>
      </span>
     </div>

     <div className='my-2'>
      <span className='flex items-center tracking-tighter space-x-2 py-1'>
       <GiBasketballJersey className='w-5 h-5 -translate-y-[1px]' />
       <p >KITS</p>
      </span>
     </div>

     <div className='my-2'>
      <span className='flex items-center tracking-tighter space-x-2 py-1'>
       <GiBilledCap className='w-5 h-5 -translate-y-[1px]' />
       <p >ACCESSORIES</p>
      </span>
     </div>

     <hr />

     <div className='my-2'>
      <span className='flex items-center tracking-tighter space-x-2 py-1'>
       <HiArrowSmRight className='w-5 h-5 -translate-y-[1px]' />
       <p >LOGIN</p>
      </span>
     </div>

     <div className='my-2'>
      <span className='flex items-center tracking-tighter space-x-2 py-1'>
       <HiTable className='w-5 h-5 -translate-y-[1px]' />
       <p >SIGN UP</p>
      </span>
     </div>

     <div className='my-2'>
      <span className='flex items-center tracking-tighter space-x-2 py-1'>
       <HiChartPie className='w-5 h-5 -translate-y-[1px]' />
       <p >UPGRADE</p>
      </span>
     </div>

     <div className='my-2'>
      <span className='flex items-center tracking-tighter space-x-2 py-1'>
       <HiViewBoards className='w-5 h-5 -translate-y-[1px]' />
       <p >DOCUMENTS</p>
      </span>
     </div>

     <div className='my-2'>
      <span className='flex items-center tracking-tighter space-x-2 py-1'>
       <BiBuoy className='w-5 h-5 -translate-y-[1px]' />
       <p >HELP</p>
      </span>
     </div>


    </div>

   ) : null}
   <Sidebar aria-label="Sidebar with content separator example" className='py-2 sticky left-0 top-0 z-10 hidden sm:block h-full cursor-pointer animate__animated animate__fadeInUpBig'>
    <Sidebar.Items className='sidebarText tracking-wider'>
     <Sidebar.ItemGroup>
      <Sidebar.Item href='#' icon={RiTShirt2Fill} onClick={() => getAllProducts('T_SHIRT', gender)}>
       <p>T-SHIRTS</p>
      </Sidebar.Item>
      <Sidebar.Item href='#' icon={PiPantsFill} onClick={() => getAllProducts('PANTS', gender)}>
       <p>PANTS</p>
      </Sidebar.Item>
      <Sidebar.Item href='#' icon={PiSneakerFill} onClick={() => getAllProducts('SHOES', gender)}>
       <p>SHOES</p>
      </Sidebar.Item>
      <Sidebar.Item href='#' icon={GiSleevelessJacket} onClick={() => getAllProducts('JACKETS', gender)}>
       <p>JACKETS</p>
      </Sidebar.Item>
      <Sidebar.Item href='#' icon={GiHoodie} onClick={() => getAllProducts('HOODIES', gender)}>
       <p>HOODIES</p>
      </Sidebar.Item>
      <Sidebar.Item href='#'icon={GiBasketballJersey} onClick={() => getAllProducts('KITS', gender)}>
       <p>KITS</p>
      </Sidebar.Item>
      <Sidebar.Item href='#' icon={GiBilledCap} onClick={() => getAllProducts('ACCESSORIES', gender)}>
       <p>ACCESSORIES</p>
      </Sidebar.Item>
     </Sidebar.ItemGroup>

     <Sidebar.ItemGroup>
      <Sidebar.Item href='#' icon={HiArrowSmRight}>
       <Link to={ISLOGGEDIN ? '/myadidas' : '/login'}>Sign In</Link>
      </Sidebar.Item>
      <Sidebar.Item href='#' icon={HiTable}>
       <Link to={ISLOGGEDIN ? '/myadidas' : '/signup'}>Sign Up</Link>
      </Sidebar.Item>
      <Sidebar.Item href='#' icon={HiChartPie}>
       <span>Upgrade to Pro</span>
      </Sidebar.Item>
      <Sidebar.Item href='#' icon={HiViewBoards}>
       <span>Documentation</span>
      </Sidebar.Item>
      <Sidebar.Item href='#' icon={BiBuoy}>
       <span>Help</span>
      </Sidebar.Item>
     </Sidebar.ItemGroup>
    </Sidebar.Items>
   </Sidebar>
  </>
 )
}

export default ProductsSideBar