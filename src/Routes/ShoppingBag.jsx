import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Header from './../Components/Header/Header'
import ShoppingBagBreadCrumb from '../Components/ShoppingBagBreadCrumb/ShoppingBagBreadCrumb'
import { Link, NavLink, ScrollRestoration } from 'react-router-dom'
import InfoBar from '../Components/InfoBar/InfoBar';
import JoinBanner from '../Components/JoinBanner/JoinBanner';
import Footer from '../Components/Footer/Footer';
import { useRecoilState } from 'recoil';
import { shoppingBag } from '../Recoil/Atoms';
import toast, { Toaster } from 'react-hot-toast';
import ImageZoom from "react-image-zooom";
// ICONS
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineDoneOutline } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaApplePay } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa6";
import { SiTether } from "react-icons/si";
import { TbBrandCashapp } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { CgAdidas } from "react-icons/cg";
import 'animate.css';
import './../../css/ShoppingBag.css'
import { IoLogoApple } from 'react-icons/io5';
import { BsGooglePlay } from 'react-icons/bs';

const ShoppingBag = () => {
 // STATES
 const [BAG, setBAG] = useRecoilState(shoppingBag)
 const [isButtonDisabled, setIsButtonDisabled] = useState(false)
 const [totalCheck, setTotalCheck] = useState(0)
 const [isShowCount, setisShowCount] = useState(false)

 // FUNCTIONS
 useEffect(() => { setBAG(BAG) }, [BAG])
 const notify = () => toast.success('Product Confirmed');
 const notify2 = () => toast.error('Product Removed');

 const deleteHandler = (product) => {
  const id = product.id
  let price = product.price
  const copy = [...BAG]
  const filteredCopy = copy.filter(product => { return product.id !== id })
  setTotalCheck(prev => prev - price)
  setBAG(filteredCopy)
  notify2()
 }
 useEffect(() => {
  let prices = BAG.map(item => item.price)
  if (prices.length) {
   let sum = prices.reduce((a, b) => a + b)
   setTotalCheck(sum)
  }
 }, [])

 useLayoutEffect(() => { document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }, []);
 useLayoutEffect(() => { document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }, [BAG]);

 // RETURN ======================================================================================================================================
 return (
  <div>
   <Header />
   <ShoppingBagBreadCrumb />
   {/* <SideBar /> */}
   <Toaster position="top-right" reverseOrder={true} />
   {/* MAIN DIV */}
   {BAG.length === 0 ? (
    <div id='emptyBag' className='flex flex-col space-y-4 items-start py-20 mb-[10rem] px-4 ml-[10rem] mt-[3rem] animate__animated animate__flash'>
     <h1 className='emptyBag text-4xl tracking-tighter'>YOUR BAG IS EMPTY</h1>
     <p className='tracking-tight'>Once you add something to your bag, it will appear here. Ready to get started?</p>
     <NavLink to='/products/all'>
      <button className='button w-[10rem]'>GET STARTED <span>START</span></button>
     </NavLink>
    </div>
   ) : (
    <>
     <h1 className='emptyBag text-4xl text-center mt-10 underline decoration-8 decoration-[#ede734]'>YOUR SHOPPING BAG</h1>
     <div className='flex mt-10'>
      {/*//! LEFT DIV !//*/}
      <div className='w-2/3 h-fit grid sm:grid-cols-1 lg:grid-cols-2 place-items-start justify-items-center px-4 gap-y-4 gap-x-4 pb-4'>
       {BAG.map((product) => (
        <div key={product.id} className='hover:border-2 hover:border-black border border-gray-500 pb-2 sm:w-[20rem] md:w-[22rem] lg:w-[27rem] h-[15rem] flex space-y-0 animate__animated animate__pulse'>

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

             <button className='px-5 py-2 text-xl hover:bg-red-700 hover:text-white duration-500 border bg-zinc-100 border-black' onClick={() => deleteHandler({ ...product })}><RiDeleteBin5Line className='w-5 h-5' /></button>

            </div>
           </div>
          </div>

         </div>
        </div>
       ))}
      </div >

      {/*//? RIGHT DIV ?//*/}
      <div className='w-1/3 h-inherit border-l-2 pb-4 border-black bg-zinc-200 '>

       <div id='orderSummary'>
        <h2 className='emptyBag text-center pt-2 text-2xl'>ORDER SUMMARY</h2>
        <div className='flex flex-col space-y-2 px-8 text-md mt-4'>
         <p>Total Items: <span className='font-bold'> {BAG.length} Items</span></p>
         <p>Items Prices : <span className='emptyBag'>$ {totalCheck}</span> </p>
         <p>Tax :  <span className='emptyBag'>5%</span></p>
         <p className='text-xl font-semibold tracking-wider underline'>Total Check :  <span className='emptyBag'>$ {(totalCheck * 1.05).toFixed(2)}</span></p>
        </div>

        <div id='promoCode' className='px-6 mt-10'>
         <a className='underline text-sm hover:bg-black hover:text-white px-1 py-1 w-fit cursor-pointer duration-500 flex space-x-4 items-center justify-start'><BiSolidOffer className='w-5 h-5 mr-2' /> USE A PROMO CODE</a>
        </div>

        <h4 className='text-start px-8 mt-16 emptyBag tracking-wider'>Accepted Payment Methods</h4>
        <div id="acceptedMethods" className='flex mt-2 items-center justify-evenly px-4'>
         <FaApplePay className='w-16 h-10 p-1 bg-zinc-100 hover:bg-black hover:text-white duration-500 rounded-md cursor-pointer' />
         <FaAmazonPay className='w-16 h-10 p-1 bg-zinc-100 hover:bg-yellow-300 hover:text-black duration-500 rounded-md cursor-pointer' />
         <FaGooglePay className='w-16 h-10 p-1 bg-zinc-100 hover:bg-red-600 hover:text-white duration-500 rounded-md cursor-pointer' />
         <FaPaypal className='w-16 h-10 p-1 bg-zinc-100 hover:bg-blue-700 hover:text-white duration-500 rounded-md cursor-pointer' />
         <SiTether className='w-16 h-10 p-1 bg-zinc-100 hover:bg-emerald-500 hover:text-white duration-500 rounded-md cursor-pointer' />
        </div>

        <div id="klara" className='px-8 mt-16 text-sm duration-500  w-fit flex flex-col space-y-2'>
         <h3 className='hover:bg-black hover:text-white cursor-pointer duration-500 flex items-center justify-start space-x-1'><TbBrandCashapp className='w-4 h-5 mr-1' />Pay Over Time with <span className='emptyBag'>KLARA</span></h3>
         <p className='flex'><TbTruckDelivery className='w-5 h-4 mr-1' />Free-Delivery 24/7 All over the Europe</p>
         <p className='flex'><FaMoneyCheckDollar className='w-5 h-4 mr-1' />CashBack Warranty Up to 7 Days</p>
        </div>

        <div className='flex items-center justify-center mt-10'>
         <div id="masterCard">
          <div className="flip-card">
           <div className="flip-card-inner">
            <div className="flip-card-front">
             <p className="heading_8264">MASTERCARD</p>
             <svg className="logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
              <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path><path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path><path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"></path>
             </svg>
             <svg version="1.1" className="chip" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 50 50" xmlSpace="preserve">  <image id="image0" width="50" height="50" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
              AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOY
              fEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSW
              ekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GS
              e0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOW
              ekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bf
              u3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWua
              fUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1
              lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrb
              tnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOh
              g0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU
              /f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dE
              orDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2Ng
              GAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVg
              OkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3d
              I2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6a
              lKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkI
              JVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0F
              qBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM
              1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGm
              BSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCET
              amiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdC
              S24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpj
              cmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIw
              MjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAy
              LTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="></image>
             </svg>
             <svg version="1.1" className="contactless" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 50 50" xmlSpace="preserve">  <image id="image0" width="50" height="50" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
              AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ
              cwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IEzgIwaKTAAADDklEQVRYw+1XS0iUURQ+f5qPyjQf
              lGRFEEFK76koKGxRbWyVVLSOgsCgwjZBJJYuKogSIoOonUK4q3U0WVBWFPZYiIE6kuArG3VGzK/F
              fPeMM/MLt99/NuHdfPd888/57jn3nvsQWWj/VcMlvMMd5KRTogqx9iCdIjUUmcGR9ImUYowyP3xN
              GQJoRLVaZ2DaZf8kyjEJALhI28ELioyiwC+Rc3QZwRYyO/DH51hQgWm6DMIh10KmD4u9O16K49it
              VoPOAmcGAWWOepXIRScAoJZ2Frro8oN+EyTT6lWkkg6msZfMSR35QTJmjU0g15tIGSJ08ZZMJkJk
              HpNZgSkyXosS13TkJpZ62mPIJvOSzC1bp8vRhhCakEk7G9/o4gmZdbpsTcKu0m63FbnBP9Qrc15z
              bkbemfgNDtEOI8NO5L5O9VYyRYgmJayZ9nPaxZrSjW4+F6Uw9yQqIiIZwhp2huQTf6OIvCZyGM6g
              DJBZbyXifJXr7FZjGXsdxADxI7HUJFB6iWvsIhFpkoiIiGTJfjJfiCuJg2ZEspq9EHGVpYgzKqwJ
              qSAOEwuJQ/pxPvE3cYltJCLdxBLiSKKIE5HxJKcTRNeadxfhDiuYw44zVs1dxKwRk/uCxIiQkxKB
              sSctRVAge9g1E15EHE6yRUaJecRxcWlukdRIbGFOSZCMWQA/iWauIP3slREHXPyliqBcrrD71Amz
              Z+rD1Mt2Yr8TZc/UR4/YtFnbijnHi3UrN9vKQ9rPaJf867ZiaqDB+czeKYmd3pNa6fuI75MiC0uX
              XSR5aEMf7s7a6r/PudVXkjFb/SsrCRfROk0Fx6+H1i9kkTGn/E1vEmt1m089fh+RKdQ5O+xNJPUi
              cUIjO0Dm7HwvErEr0YxeibL1StSh37STafE4I7zcBdRq1DiOkdmlTJVnkQTBTS7X1FYyvfO4piaI
              nKbDCDaT2anLudYXCRFsQBgAcIF2/Okwgvz5+Z4tsw118dzruvIvjhTB+HOuWy8UvovEH6beitBK
              xDyxm9MmISKCWrzB7bSlaqGlsf0FC0gMjzTg6GgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDIt
              MTNUMDg6MTk6NTYrMDA6MDCjlq7LAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTEzVDA4OjE5
              OjU2KzAwOjAw0ssWdwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xM1QwODoxOTo1Nisw
              MDowMIXeN6gAAAAASUVORK5CYII="></image>
             </svg>
             <p className="number">9759 2484 5269 6576</p>
             <p className="valid_thru">VALID THRU</p>
             <p className="date_8264">1 2 / 2 4</p>
             <p className="name">POURYA SOLEIMANI</p>
            </div>
            <div className="flip-card-back">
             <div className="strip"></div>
             <div className="mstrip"></div>
             <div className="sstrip">
              <p className="code">***</p>
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>


        <div id='checkOut' className='flex flex-col items-center justify-center mt-10'>
         <button className='button w-[68%] mt-4 mx-auto '><NavLink to='/checkout'>CHECKOUT <span>CONTINUE</span></NavLink></button>
         <button className='button button2 w-[68%] mt-4 mx-auto after:text-black' onClick={() => { setBAG([]); window.screenTop = -100 }}>EMPTY BAG <span>EMPTY BAG</span></button>
        </div>

        <div id="nearbyStores" className='pl-2 pr-6'>
         <h1 className='flex space-x-2 items-center justify-start px-2 mt-10 emptyBag text-md'>Dont Want to Buy Online ? Check Out Nearby <span><CgAdidas className='w-5 h-8 mx-1' /></span> Stores </h1>
         <ImageZoom src="/images/Map/Map.png" zoom="200" width='100%' height='100%' />
        </div>


        <div id="downloadApps">
         <div className='pt-2 w-full flex cursor-pointer'>
          <div className='flex items-center justify-center py-2 space-x-6 w-full'>
           <a className="playstore-button">
            <IoLogoApple className='text-white w-8 h-8 appleLogo' />
            <span className="icon">
            </span>
            <span className="texts">
             <span className="text-1">Download form</span>
             <span className="text-2">App store</span>
            </span>
           </a>
           {/* GOOGLE */}
           <a className="playstore-button">
            <BsGooglePlay className='text-white w-8 h-8 appleLogo' />
            <span className="icon">
            </span>
            <span className="texts">
             <span className="text-1">Get it on</span>
             <span className="text-2">Google Play</span>
            </span>
           </a>
          </div>
         </div>
        </div>
       </div>
      </div>

     </div>
    </>
   )

   }

   <ScrollRestoration />
   < InfoBar />
   <JoinBanner />
   <Footer topCount={800} />
  </div>
 )
}

export default ShoppingBag