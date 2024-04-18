import React from 'react'
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";


const ShoppingBagBreadCrumb = () => {

 const location = useLocation()
 const path = location.pathname.slice(1).toUpperCase()


 return (
  <Breadcrumb className="px-8 py-1 my-0">

   <Breadcrumb.Item icon={HiHome}>
    <NavLink to='/' className={(link) => link.isActive ? 'text-black underline hover:text-black' : "hover:text-black"}>
     HOME
    </NavLink>
   </Breadcrumb.Item>

   <Breadcrumb.Item className='cursor-pointer hover:font-bold'>
    <NavLink to={location.pathname} className={(link) => link.isActive ? 'text-black hover:text-black' : "hover:text-black"}>
     {path}
    </NavLink>
   </Breadcrumb.Item>
  </Breadcrumb>
 )
}

export default ShoppingBagBreadCrumb