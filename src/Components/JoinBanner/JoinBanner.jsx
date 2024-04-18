import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isLoggedin } from '../../Recoil/Atoms';
const JoinBanner = () => {

 const [IsLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedin)
 return (
  // ^ YELLOW PART
  <div className='w-screen bg-[#ede734] h-[10rem] mt-0 flex items-center justify-center flex-wrap'>
   {/* TEXT AND BUTTON */}
   <div className='flex flex-col md:flex-row space-y-2 items-center justify-center space-x-4 md:space-x-10 my-auto'>
    <h1 className='text-lg sm:text-xl md:text-3xl tracking-tighter sm:tracking-normal md:tracking-wider font-bold joinText'>JOIN OUR ADICLUB AND GET 25% OFF</h1>
    <button className='button flex items-center justify-center w-[12rem] font-extrabold text-md h-[3.3rem] tracking-tighter'><Link to={IsLoggedIn ? '/myadidas' : '/signup'}>SIGN UP FOR FREE <span>I'M IN</span></Link></button>
   </div>
  </div>
 )
}

export default JoinBanner