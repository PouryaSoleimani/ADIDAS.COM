import React from 'react'
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";


const BreadCrumb = () => {
 const location = useLocation()
 const path = location.pathname.slice(10).toUpperCase()

 return (
  <Breadcrumb className="px-8 py-1 my-0">
   <Breadcrumb.Item icon={HiHome}>
    <NavLink to='/' className={(link) => link.isActive ? 'text-black underline hover:text-black' : "hover:text-black"}>
     HOME
    </NavLink>
   </Breadcrumb.Item>
   <Breadcrumb.Item>
    <NavLink to='/products/all' className={(link) => link.isActive ? 'text-black hover:text-black' : "hover:text-black"}>
     PRODUCTS
    </NavLink>
   </Breadcrumb.Item>
   <Breadcrumb.Item className='cursor-pointer hover:font-bold'>
    <NavLink to={path} className={(link) => link.isActive ? 'text-black hover:text-black' : "hover:text-black"}>
     {path}
    </NavLink>
   </Breadcrumb.Item>
  </Breadcrumb>
 )
}

export default BreadCrumb