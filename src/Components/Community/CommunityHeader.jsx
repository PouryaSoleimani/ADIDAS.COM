import React, { useEffect } from 'react'
import { RiCopperCoinFill } from "react-icons/ri";
import { isLoggedin, token } from '../../Recoil/Atoms';
import { useRecoilState } from 'recoil';




const CommunityHeader = () => {
  const [ISLOGGEDIN, setISLOGGEDIN] = useRecoilState(isLoggedin)
  const [TOKEN, setTOKEN] = useRecoilState(token)
  useEffect(() => {
    localStorage.setItem('user', TOKEN)
    setISLOGGEDIN(true)
  }, [])

  return (
    <div className='w-full space-y-10 my-10 flex-col sm:flex-row flex items-center justify-between px-10 md:px-16 flex-wrap'>

      <div id="left">
        <h2 className='level1 text-4xl mb-4 duration-500 animate__animated animate__fadeInUp '>HELLO  LEVEL 1</h2>
        <p className='flex items-center justify-center space-x-2 text-lg tracking-tighter whitespace-pre animate__animated animate__fadeInUp '><RiCopperCoinFill className='text-yellow-400 w-10 h-10' /><span className='underline font-bold'>50</span> points to Spend</p>
      </div>

      <div id="right">
        <img src="/images/Community/adiclub-level-1-badge-DT-SVG.svg" className='animate__animated animate__fadeInUp ' />
      </div>

    </div>
  )
}

export default CommunityHeader