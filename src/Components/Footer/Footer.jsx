import React from 'react'
import './Footer.css'
import ScrollToTop from "react-scroll-to-top";
import Social from '../Social/Social.jsx';

const Footer = ({ topCount }) => {
 return (
   <>
     <div className="w-screen grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 place-items-center justify-items-around gap-y-4 pb-4 h-[30rem] bg-zinc-200 pt-10 overflow-x-hidden overflow-y-scroll ">
       <ul className="ulFooter">
         <h1 className="font-bold ulTitleFooter">PRODUCTS</h1>
         <li>Shoes</li>
         <li>Clothing</li>
         <li>Accessories</li>
         <li>Gift Cards</li>
         <li>New Arrivals</li>
         <li>Best Sellers</li>
         <li>Release Dates</li>
         <li>Sale</li>
         <li>Kids</li>
         <li>Socks</li>
       </ul>

       <ul className="ulFooter">
         <h1 className="font-bold ulTitleFooter">SPORTS</h1>
         <li>Soccer</li>
         <li>Running</li>
         <li>Basketball</li>
         <li>Football</li>
         <li>Outdoor</li>
         <li>Golf</li>
         <li>Baseball</li>
         <li>Tennis</li>
         <li>Skateboarding</li>
         <li>Training</li>
       </ul>

       <ul className="ulFooter">
         <h1 className="font-bold ulTitleFooter">COLLECTIONS</h1>
         <li>Adicolor</li>
         <li>Ultraboost</li>
         <li>NMD</li>
         <li>Forum</li>
         <li>Superstar</li>
         <li>Running Shoes</li>
         <li>adillete</li>
         <li>Cloudfoam Pure</li>
         <li>Leo Messi</li>
         <li>Jude Bellingham</li>
       </ul>

       <ul className="ulFooter sm:ml-6">
         <h1 className="font-bold ulTitleFooter">SUPPORT</h1>
         <li>Help</li>
         <li>Shipping</li>
         <li>Order Tracker</li>
         <li>Store Locator</li>
         <li>Size Charts</li>
         <li>Gift Card Balance</li>
         <li>How to Clean Shoes</li>
         <li>Running Shoe Finder</li>
         <li>Sports Bra Finder</li>
         <li>Promotions</li>
       </ul>

       <ul className="ulFooter ml-8 sm:ml-16 md:ml-4 md:-translate-y-2 ">
         <h1 className="font-bold ulTitleFooter tracking-tighter">
           COMPANY INFO
         </h1>
         <li>About us</li>
         <li>Student Discount</li>
         <li>Healthcare Discount</li>
         <li>adidas Apps</li>
         <li>adiClub</li>
         <li>Donations</li>
         <li>California Transparency</li>
         <li>Careers</li>
         <li>Retro Players</li>
         <li>Country Selector</li>
       </ul>
     </div>
     <Social />
     <ScrollToTop smooth top={topCount} width="36" />
     <div className="bg-black text-center text-zinc-50 font-bold tracking-widest">
       <h1>MADE WITH 🤍 BY POURYA SOLEIMANI</h1>
     </div>
   </>
 );
}

export default Footer
