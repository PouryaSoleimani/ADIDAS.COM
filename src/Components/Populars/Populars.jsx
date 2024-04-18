import React from 'react'
import 'animate.css';
import { Link } from 'react-router-dom';
import './Populars.css'

const Populars = () => {
 return (
  <>
   <h1 className='text-[40px] mx-0 md:text-[52px] leading-8 tracking-tight text-center popularText'>Popular Right <span className='underline decoration-8 decoration-[#ede734]'>Now</span></h1>

   <ul id='popularsDiv' className='px-4 md:grid md:grid-cols-3 justify-items-center py-12 text-[40px] space-x-4 space-y-8 w-screen my-10 gap-y-4 box-border'>
    <li className='w-[85%] box-border place-self-end justify-self-start ml-4' ><Link to='/products'>yeezy</Link></li>
    <li className='w-[85%] box-border place-self-end justify-self-start' ><Link to='/products'>campus</Link></li>
    <li className='w-[85%] box-border place-self-end justify-self-start' ><Link to='/products'>gazelle</Link></li>
    <li className='w-[85%] box-border place-self-end justify-self-start' ><Link to='/products'>messi</Link></li>
    <li className=' w-[85%] box-border place-self-end justify-self-start' ><Link to='/products'>ultraboost</Link></li>
    <li className=' w-[85%] box-border place-self-end justify-self-start' ><Link to='/products'>nmd</Link></li>
   </ul>

  </>
 )
}

export default Populars