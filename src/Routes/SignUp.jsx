// ^ LOGIN PAGE =====================================================================================================================
import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom'
import { isLoggedin, token, userInfos } from "../Recoil/Atoms.jsx";
import { useRecoilState } from 'recoil';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup';
import axios from 'axios'
import '../../css/Signup.css'
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

//& ICONS ====================================================================================================================================
import { BsGoogle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { CgAdidas } from "react-icons/cg";
//& IMPORTING COMPONENTS =====================================================================================================================
import Header from '../Components/Header/Header'
import InfoBar from '../Components/InfoBar/InfoBar'
import JoinBanner from '../Components/JoinBanner/JoinBanner'
import Footer from '../Components/Footer/Footer'

//YUP SCHEMA ==============================================================================================================================
const YupSchema = yup.object().shape({
  email: yup.string().email(<p className='text-red-800 text-sm px-1 py-[2px] rounded-md w-full font-bold'>Invalid Email </p>).required(<p className='text-red-800 text-sm  px-2 w-full py-[2px] rounded-md font-bold'>Email is Required</p>),
  password: yup.string().min(8, <p className='text-red-800 text-sm font-bold px-1 py-[2px] rounded-md w-full'>Password Must be Longer</p>).max(20).required(<p className='text-red-800 font-bold text-sm px-1 py-[2px] rounded-md w-full'>Password is Required</p>)
})

const SignUp = () => {
  // VARIBLES & STATES ===============================================================================================================================
  const [IsLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedin)
  const [Token, setToken] = useRecoilState(token)
  const [UserInfos, setUserInfos] = useRecoilState(userInfos)

  // FUNCTIONS
  const notify = () => toast.success('Signed Up Successfully ')
  const navigate = useNavigate()
  useEffect(() => {
    const localStorageData = localStorage.getItem('user')
    if (localStorageData) { console.log(localStorageData) }
  }, [])


  //^RETURN =================================================================================================================================================================================
  return (
    <section id='container' className='flex flex-col items-center'>
      <Header />

      {/*MOTO*/}
      <div id="allInMoto">
        <img src="/images/LoginMoto.png" className='w-screen' />
      </div>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" transition:Bounce />

      {/*SIGN UP FORM*/}
      <Formik
        initialValues={{ email: '', password: '' }}
        //^ SIGN UP FUNCTON 
        onSubmit={(values, { setSubmitting }) => {

          let userInfos = { email: values.email, password: values.password, }

          axios.post('http://localhost:5000/signup', userInfos)
            .then(response => {
              console.log(response)
              if (!response.status === 201) {
                return response.text().then(text => { throw new Error })
              } else {
                console.log(response);
                const _Token = response.data.accessToken
                const _UserInfos = response.data.user
                setToken(_Token)
                setUserInfos(_UserInfos)
                localStorage.setItem('user', _Token)
                notify()
                setTimeout(() => {
                  setSubmitting(false);
                  navigate('/login')
                }, 3000)
              }
            }
            )
            .catch(error => {
              console.log(error.response.status, error.response.data);
              const notify3 = () => toast.error(error.response.data)
              notify3()
              setTimeout(() => {
                setSubmitting(false);
              }, 2500)
            })

        }}
        validationSchema={YupSchema}
      >

        {({ isSubmitting }) => (
          <Form className="form mt-20">
            <div className='flex justify-between w-full'>
              <h1 className='text-4xl font-bold tracking-tighter formText'>SIGN UP</h1>
              <CgAdidas className='w-10 h-10' />
            </div>
            <div className="title">Welcome,
              <br />
              <span>Sign up to continue</span>
            </div>
            {/*// INPUTS ============================================================================================================== */}
            <Field type="email" placeholder="Email" name="email" className="input" />
            <ErrorMessage name='email' />
            <Field type="password" placeholder="Password" name="password" className="input" />
            <ErrorMessage name='password' />
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
            <p className='mt-4'>Already Have an Account? <Link to='/login' className='text-blue-600 font-bold hover:underline'> Log in</Link></p>
            <button disabled={isSubmitting} type='submit' className={`button-confirm ${isSubmitting ? 'button-confirm-disabled' : 'button-confirm'}`}>Sign Up →</button>
          </Form>
        )}

      </Formik>
      {/* // FOOTER =============================================================================================================== */}
      <div className='translate-y-[8rem]'>
        <InfoBar />
        <JoinBanner />
        <Footer topCount={1000} />
      </div>


    </section >
  )
}

export default SignUp