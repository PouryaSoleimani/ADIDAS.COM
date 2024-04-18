// ^ MY ADIDAS =====================================================================================================================
import React from 'react'
import { userInfos, token, isLoggedin } from '../Recoil/Atoms';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Header from '../Components/Header/Header'
import InfoBar from '../Components/InfoBar/InfoBar'
import Footer from '../Components/Footer/Footer'
import CommunityHeader from '../Components/Community/CommunityHeader';
//& ICONS
import { IoMdCart } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";
import { MdSupport } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { RiSettings2Fill } from "react-icons/ri";
import { FaQuestion } from "react-icons/fa";
import { CgAdidas } from "react-icons/cg";
import { RiLogoutCircleFill } from "react-icons/ri";
import { useEffect } from 'react';
import 'animate.css';



const MyAdidas = () => {

  const [USERINFOS, setUSERINFOS] = useRecoilState(userInfos)
  const [TOKEN, setTOKEN] = useRecoilState(token)
  const [ISLOGGEDIN, setISLOGGEDIN] = useRecoilState(isLoggedin)
  const navigate = useNavigate()
  const notify3 = () => toast('Logged Out Successfully ')
  useEffect(() => {
    localStorage.setItem('user', TOKEN)
    setISLOGGEDIN(true)
  }, [])
  //! LOGOUT
  const logout = () => {
    setTOKEN(null)
    setUSERINFOS({})
    localStorage.removeItem('user')
    setISLOGGEDIN(false)
    notify3()
    setTimeout(() => {
      navigate('/')
    }, 2500);
  }

  return (
    <div>
      <Header />
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" transition:Bounce />
      {/* LOGO */}

      <div className='flex  items-center justify-center w-full'>
        <img src="/images/Community/CommunityLogo.png" alt="" />
      </div>

      <CommunityHeader />

      {/* LINK TABLES  */}
      <ul className='flex flex-row items-center justify-around text-center flex-wrap ulMyAdidas animate__animated animate__fadeInUp  px-6'>
        <li className='bg-zinc-200 px-2 py-4 w-[20rem] my-4 font-bold hover:bg-black hover:text-zinc-100 cursor-pointer flex items-center justify-around'><IoMdCart className='w-6 h-6' />SHOPPING CART</li>
        <li className='bg-zinc-200 px-2 py-4 w-[20rem] my-4 font-bold hover:bg-black hover:text-zinc-100 cursor-pointer flex items-center justify-around'><GoHeartFill className='w-6 h-6' />WISHLIST</li>
        <li className='bg-zinc-200 px-2 py-4 w-[20rem] my-4 font-bold hover:bg-black hover:text-zinc-100 cursor-pointer flex items-center justify-around'><MdSupport className='w-6 h-6' />SUPPORT</li>
        <li className='bg-zinc-200 px-2 py-4 w-[20rem] my-4 font-bold hover:bg-black hover:text-zinc-100 cursor-pointer flex items-center justify-around'><FaSquarePhone className='w-6 h-6' />CONTACT US</li>
      </ul>
      <ul className='flex flex-row items-center justify-around text-center flex-wrap ulMyAdidas animate__animated animate__fadeInUp px-6'>
        <li className='bg-zinc-200 px-2 py-4 w-[20rem] my-4 font-bold hover:bg-black hover:text-zinc-100 cursor-pointer flex items-center justify-around'><RiSettings2Fill className='w-6 h-6 mr-4' />SETTINGS</li>
        <li className='bg-zinc-200 px-2 py-4 w-[20rem] my-4 font-bold hover:bg-black hover:text-zinc-100 cursor-pointer flex items-center justify-around'><CgAdidas className='w-6 h-6 mr-6' />ABOUT</li>
        <li className='bg-zinc-200 px-2 py-4 w-[20rem] my-4 font-bold hover:bg-black hover:text-zinc-100 cursor-pointer flex items-center justify-around'><FaQuestion className='w-6 h-6 mr-6' />FAQ</li>
        <li onClick={() => logout()} className='bg-zinc-200 px-2 py-4 w-[20rem] my-4 font-bold hover:bg-red-700 hover:text-zinc-100 cursor-pointer flex items-center justify-around'><RiLogoutCircleFill className='w-6 h-6' /><button>LOGOUT</button></li>
      </ul>

      {/* VOUCHER */}
      <h1 className='text-center font-bold text-4xl  tracking-tighter my-4 border-b borer-zinc-500 py-4 animate__animated animate__fadeInUp'>YOUR VOUCHERS</h1>
      <div className='flex flex-wrap items-start justify-center sm:justify-start sm:pl-10 sm:space-x-10 space-y-10 md:space-y-0 animate__animated animate__fadeInUp'>
        <div>
          <div className=' bg-[#0081c7] w-[22rem] py-2 px-4 h-[13rem]  rounded-lg hover:scale-105 duration-500'>
            <div className='flex  items-start justify-between'>
              <h2 className='voucherText text-4xl w-1/2 tracking-tighter text-zinc-100 py-2 '>ADI CLUB WELCOME OFFER</h2>
              <img src="/images/Community/adiClubLogo.png" alt="" className='w-16 h-8' />
            </div>
            <div>
              <p className='text-slate-100 font-semibold'>WE-EU3T-JJ85</p>
            </div>
            <div className='flex items-center justify-between'>
              <a href="#" className='underline text-slate-100 mt-1 tracking-tighter hover:bg-black py-1 cursor-pointer'>COPY CODE</a>
              <p className='text-slate-100'>3/27/2024</p>
            </div>
          </div>
        </div>

        {/* VOUCHER 2 */}
        <div>
          <div className=' bg-black w-[22rem] py-2 px-4 h-[13rem] rounded-lg hover:scale-105 duration-500'>
            <div className='flex  items-start justify-between'>
              <h2 className='voucherText text-4xl w-[8.4rem] tracking-tighter text-zinc-100 py-2'>BLACK FRIDAY SPECIAL OFFER</h2>
              <img src="/images/Community/adiClubLogo.png" alt="" className='w-16 h-8' />
            </div>
            <div>
              <p className='text-slate-100 font-semibold'>LK-OR3T-QS64</p>
            </div>
            <div className='flex items-center justify-between'>
              <a href="#" className='underline text-slate-100 mt-1 tracking-tighter hover:text-black hover:bg-white py-1 cursor-pointer'>COPY CODE</a>
              <p className='text-slate-100'>4/12/2024</p>
            </div>
          </div>
        </div>
      </div>
      {/* TEXTS */}
      <div className='flex flex-col items-start justify-center my-10 px-[4rem]'>
        <h4 className='my-2 text-start text-md'>You currently don’t have enough adiClub points to unlock discount vouchers.</h4>
        <p className='underline text-xl font-bold tracking-tighter cursor-pointer leading-tight hover:bg-black hover:text-slate-100'>HOW TO EARN MORE POINTS</p>
      </div>
      {/* INVITE FRIENDS */}
      <h1 className='font-bold tracking-tighter text-3xl md:px-10 text-center md:text-start underline decoration-8 decoration-yellow-400 animate__animated animate__headShake'>EXCLUSIVELY FOR YOU</h1>

      <div className='my-10 flex flex-col items-center justify-center flex-wrap sm:flex-row sm:justify-around'>

        <div className='flex items-center justify-around my-10 '>
          <div id="left" className='bg-zinc-100 w-[30rem] h-[33rem]'>
            <h1 className='text-center py-4 text-xl font-bold offerText'>INVITE A FRIEND , GET 10% OFF</h1>
            <img src="/images/Community/inviteAfriend.webp" alt="" />
            <p className='text-lg px-4 my-6'>Invite a friend to join adiClub and you both get $10 off. You’ll receive a discount voucher for every friend who signs up.</p>
            <button className='border ml-4 border-black px-2 py-4 hover:bg-black hover:text-slate-100 hover:font-bold'>INVITE FRIENDS</button>
          </div>
        </div>


        <div id="right" className='bg-zinc-100 w-[30rem] h-[33rem]'>
          <h1 className='text-center py-4 text-xl font-bold offerText'>COMPLETE YOUR PROFILE</h1>
          <img src="/images/Community/completeProfile.jpeg" alt="" />
          <p className='text-lg px-4 my-6'>Complete your profile for a more personalised shopping experience and earn additional 50 points to get closer to the next adiClub level.</p>
          <button className='border ml-4 border-black px-2 pr-10 py-4 hover:bg-black hover:text-slate-100 hover:font-bold'>START NOW     </button>
        </div>


      </div>


      {/* FOOTER */}
      <InfoBar />
      <Footer topCount={1250} />
    </div>
  )
}

export default MyAdidas