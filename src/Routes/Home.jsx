// ^ HOME __________________________________________________________________________________________________________
import React, { useEffect } from 'react'
import Header from '../Components/Header/Header'
import Yeezy from '../Components/Yeezy/Yeezy'
import HomePageVideo from '../Components/HomePageVideo/HomePageVideo'
import BoxesHomePage from '../Components/4BoxesHomePage/4BoxesHomePage'
import Populars from '../Components/Populars/Populars'
import AllinVideoPart from '../Components/AllinVideoPart/AllinVideoPart'
import SwipeR from '../Components/Swiper/Swiper'
import JoinBanner from '../Components/JoinBanner/JoinBanner'
import Footer from '../Components/Footer/Footer'
import AdidasRetro from '../Components/AdidasRetro/AdidasRetro'
import NationalKits from '../Components/NationalKits/NationalKits'
import TrendingSwiper from '../Components/TrendingSwiper/TrendingSwiper'
import InfoBar from '../Components/InfoBar/InfoBar'
import TopFooter from '../Components/TopFooter/TopFooter'
import { token, isLoggedin } from '../Recoil/Atoms'
import { useRecoilState } from 'recoil'
import axios from 'axios'
import BayernMunichBanner from '../Components/BayernMunichBanner/BayernMunichBanner'
axios.defaults.baseURL = 'http://localhost:4000'

const Home = () => {
 const [TOKEN, setTOKEN] = useRecoilState(token)
 const [ISLOGGEDIN, setISLOGGEDIN] = useRecoilState(isLoggedin)
 useEffect(() => {
  if (TOKEN) { setISLOGGEDIN(true) }
 }, [])

 return (
  <div className='overflow-hidden pr-2'>
   <Header />
   <AllinVideoPart />
   <BoxesHomePage />
   <Yeezy />
   <Populars />
   <HomePageVideo />
   <SwipeR />
   <AdidasRetro />
   <NationalKits />
   <TrendingSwiper />
   {/* <BayernMunichBanner /> */}
   <TopFooter />
   <InfoBar />
   <JoinBanner />
   <Footer topCount={7000} />
  </div>
 )
}

export default Home