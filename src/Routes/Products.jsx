import React from 'react'
import { Outlet } from 'react-router-dom'
import InfoBar from '../Components/InfoBar/InfoBar'
import JoinBanner from '../Components/JoinBanner/JoinBanner'
import Footer from '../Components/Footer/Footer'
import axios from 'axios'
import Header from '../Components/Header/Header'
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb'
axios.defaults.baseURL = 'http://localhost:4000'

const Products = () => {
  return (
    <div>
      <Header />
      <BreadCrumb />
      <div className="flex">
        <Outlet />
      </div>
      <InfoBar />
      <JoinBanner />
      <Footer topCount={1800} />
    </div>
  );
}

export default Products
