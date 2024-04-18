import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
 return (
  <div className='w-screen h-screen flex'>
   <img src="/images/notfound.png" className='w-screen h-screen z-10 relative top-0 left-0' />
   <div className='absolute z-50 top-[30rem] left-0 px-[4.4rem]'>
    <Link to='/'>
     <button className='bg-white px-4 py-2 duration-300 hover:bg-black hover:text-white box-border border border-white hover:scale-105'>BACK TO HOMEPAGE</button>
    </Link>   
   </div>
  </div>
 )
}

export default NotFound