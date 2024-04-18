// ^ LOGIN PAGE =====================================================================================================================
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
// & ICONS ==========================================================================================================================
import { BsGoogle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { CgAdidas } from "react-icons/cg";
// & IMPORTING COMPONENTS ============================================================================================================
import Header from '../Components/Header/Header'
import InfoBar from '../Components/InfoBar/InfoBar'
import JoinBanner from '../Components/JoinBanner/JoinBanner'
import Footer from '../Components/Footer/Footer'
import { useRecoilState } from 'recoil';
import { userInfos, token, isLoggedin } from '../Recoil/Atoms';



const Login = () => {
  const notify2 = () => toast.success('Logged in Successfully ')
  const notify3 = () => toast.error('Account Not Found ... ')
  const navigate = useNavigate()
  // STATES
  const [USERINFOS, setUSERINFOS] = useRecoilState(userInfos)
  const [TOKEN, setTOKEN] = useRecoilState(token)
  const [ISLOGGEDIN, setISLOGGEDIN] = useRecoilState(isLoggedin)
  const [userLoginEmail, setUserLoginEmail] = useState('')
  const [userLoginPassword, setUserLoginPassword] = useState('')

  // LOGIN HANDLER
  const loginHandler = (e) => {
    e.preventDefault()

    const _userinfos = {
      email: userLoginEmail,
      password: userLoginPassword
    }

    axios.post('http://localhost:5000/login', _userinfos)
      .then((response) => {
        console.log(response);
        const _Token = response.data.accessToken
        const _UserInfos = response.data.user
        setTOKEN(_Token)
        setUSERINFOS(_UserInfos)
        setISLOGGEDIN(true)
        localStorage.setItem('user', _Token)
        notify2();
        setTimeout(() => {
          navigate('/')
        }, 3000)
      }).catch(error => {
        console.log(error);
        notify3()
      })
  }


  return (
    <section id='container' className='flex flex-col items-center'>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" transition:Bounce />
      <div className="container">
      </div>
      <Header />

      {/*! // MOTO ==============================================================================================================*/}
      <div id="allInMoto">
        <img src="/images/LoginMoto.png" className='w-screen' />
      </div>

      {/*// LOGIN FORM ========================================================================================================== */}
      <form className="form mt-20">
        <div className='flex justify-between w-full'>
          <h1 className='text-4xl font-bold tracking-tighter formText'>LOGIN</h1>
          <CgAdidas className='w-10 h-10' />
        </div>
        <div className="title">You're All in !
          <br />
          <span>Log in to continue</span>
        </div>
        {/*// INPUTS ============================================================================================================== */}
        <input className="input" value={userLoginEmail} onChange={(e) => setUserLoginEmail(e.target.value)} name="email" placeholder="Email" type="email" />
        <input className="input" value={userLoginPassword} onChange={(e) => setUserLoginPassword(e.target.value)} name="password" placeholder="Password" type="password" />

        {/* // LOGOS ============================================================================================================= */}
        <div className="login-with">

          <div className="button-log">
            <FaFacebook />
          </div>

          <div className="button-log">
            <BsGoogle />
          </div>

          <div className="button-log">
            <BsApple />
          </div>

        </div>

        {/* // BUTTON ============================================================================================================= */}
        <p className='mt-4'> Don't have an Account?  <Link to='/signup' className='text-blue-600 font-bold hover:underline'> Sign Up</Link></p>
        <button type='submit' onClick={loginHandler} className="button-confirm">Login →</button>
      </form>


      {/* // FOOTER =============================================================================================================== */}
      <div className='translate-y-[8rem]'>
        <InfoBar />
        <JoinBanner />
        <Footer topCount={1000} />
      </div>


    </section >
  )
}

export default Login