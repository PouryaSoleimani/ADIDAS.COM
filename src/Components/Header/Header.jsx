// ^ HEADER ________________________________________________________________________________________________________
import React, { Fragment, useState } from 'react'
import { FaChevronDown, FaLongArrowAltRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { TiHeartOutline } from "react-icons/ti";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CgAdidas } from "react-icons/cg";
import { ImMenu } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import 'flowbite-react';
import './Header.css'
import { Menu, Transition } from '@headlessui/react';
import { Link, NavLink } from 'react-router-dom';
import { isLoggedin, token, allProducts_atom, shoppingBag, wishList } from '../../Recoil/Atoms';
import { useRecoilState } from 'recoil';
import SearchBox from '../SearchBox/SearchBox';


const Header = () => {
    const [isMenuShow, setIsMenuShow] = useState(false)
    const [isHamburgerShow, setIsHamburgerShow] = useState(false)
    const [TOKEN, setTOKEN] = useRecoilState(token)
    const [ISLOGGEDIN, setISLOGGEDIN] = useRecoilState(isLoggedin)
    const [searchValue, setSearchValue] = useState('')
    const [allAtomProducts, setAllAtomProducts] = useRecoilState(allProducts_atom)
    const [BAG, setBAG] = useRecoilState(shoppingBag)
    const [WISHLIST, setWISHLIST] = useRecoilState(wishList)

    //^ SEARCH HANDLER
    const searchValueChangeHandler = (event) => {
        setSearchValue(event.target.value)
        console.log(searchValue);
        const filteredProducts = allAtomProducts.filter(product => product.title.includes(`${event.target.value}`))
        if (event.target.value === '') {
            setAllAtomProducts(allAtomProducts)
        } else {
            setAllAtomProducts(filteredProducts)
        }
    }

    //^ RETURN ===============================================================================================================================================================
    return (
        <>
            {/* TOP BLACK BAR AND ACCORDION ______________________________________________________________________________________________________________________ */}
            <div className='bg-black h-[2rem] text-zinc-50 flex items-center justify-center font-bold text-[9px] w-full overflow-hidden'>
                <button className="text-white font-medium rounded-lg text-[11px] tracking-tighter px-5 py-2.5 gap-x-1 text-center flex items-center" type="button" onClick={() => setIsMenuShow(prevState => !prevState)}>MID-SEASON SALE: UP TO 50% OFF<FaChevronDown className='w-2 h-2 translate-y-.5 flex' /> </button>

                {/* DROP DOWN MENU */}
                {isMenuShow && (
                    <div id="dropdown" className='w-full h-screen md:h-[14rem] border-b-2 border-black z-50 bg-white absolute top-9 left-0 text-black'>

                        {/* //Close Button */}
                        <div className='flex flex-end items-center w-10 h-10 border border-black px-2 py-2 absolute right-4 top-2 cursor-pointer hover:bg-black hover:text-white transition-all duration-200' onClick={() => setIsMenuShow(false)}><IoClose className='text-black w-full h-full hover:text-white' /></div>

                        {/* // 2 COMMERCIAL PARTS */}
                        <div className='flex flex-col justify-center space-y-10 items-center md:flex-row sm:justify-around mt-4 px-4'>

                            {/* //LEFT */}
                            <div className='space-y-6'>
                                <h1 className='font-semibold text-[14px] tracking-tighter leading-tight'>MID-SEASON SALE: UP TO 50% OFF</h1>
                                <p className='font-thin text-[12px]'>SPRING SAVINGS: SAVE UP TO 50% DURING OUR MID-SEASON SALE</p>
                                <button className='button'>Explore More <span>Explore</span></button>
                            </div>

                            {/* // RIGHT */}
                            <div className='space-y-6'>
                                <h1 className='font-semibold tracking-tighter leading-tight text-[14px]'>FREE STANDARD SHIPPING WITH ADICLUB</h1>
                                <p className='font-thin text-[12px]'>Sign up for adiClub to enjoy free standard shipping and earn points on every order. </p>
                                <div className=''>
                                    <button className='button'>JOIN ADICLUB FOR FREE<span>JOIN</span></button>
                                    <button className='button'>RETURNS & EXCHANGES<span>LETS'GO</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* HELP PART _______________________________________________________________________________________________________________________ */}
            <div className='w-screen flex-shrink h-[2rem] flex justify-end bg-zinc-50 px-6 flex-nowrap'>
                <div className='flex'>
                    <ul className='flex text-[11px] justify-around w-full space-x-4 items-center px-2'>
                        <li className='cursor-pointer hover:underline'>Help </li>
                        <li className='cursor-pointer hover:underline'>Orders and Returns </li>
                        <li className='cursor-pointer hover:underline'>Join AdiClub</li>
                        <li className='cursor-pointer hover:underline'><img src="/images/Flag.png" className='w-4 h-4' /></li>
                    </ul>
                </div>
            </div>

            {/* LOGO PART _______________________________________________________________________________________________________________________ */}

            <div className='flex z-10 bg-white items-center justify-start md:justify-between px-1 md:px-6 py-2 font-sans w-full'>
                {/* LEFT */}
                <div className='flex justify-start items-center '>
                    <Link to='/'><CgAdidas className='w-[6rem] h-[3rem] cursor-pointer ' /></Link>
                </div>

                {/* MIDDLE */}
                <div className='hidden md:flex'>
                    <ul className=' tracking-tighter leading-tight flex space-x-6'>
                        <li className='cursor-pointer hover:underline decoration-8 text-sm font-sans font-bold'> <Link to='/products/all'>ALL</Link> </li>
                        <li className='cursor-pointer hover:underline decoration-8 text-sm font-sans font-bold'> <Link to='/products/men'>MEN</Link> </li>
                        <li className='cursor-pointer hover:underline decoration-8 text-sm font-sans font-bold'> <Link to='/products/women'>WOMEN</Link> </li>
                        <li className='cursor-pointer hover:underline decoration-8 text-sm font-sans font-bold'> <Link to='/products/kids'>KIDS</Link> </li>
                        <li className='cursor-pointer hover:underline decoration-8 text-sm font-sans font-bold text-red-700 '> <Link to='/products/sale'>SALE</Link> </li>
                        <li className='cursor-pointer hover:underline decoration-8 text-sm font-sans font-bold '> <Link to='/products/jerseys'>JERSEYS</Link> </li>
                    </ul>
                </div>

                {/* RIGHT */}
                <div className='flex space-x-4 flex-shrink '>
                    <div className="input-container -translate-x-4 -translate-y-1">
                        <SearchBox />
                    </div>

                    <ul className='flex space-x-4 px-2 translate-y-2'>
                        {ISLOGGEDIN ? (
                            <Link to='/myadidas' className='w-5 h-5 hidden md:inline'><FaUserAlt className='w-5 h-5 translate-y-1 font-bold cursor-pointer text-emerald-500 hover:text-emerald-700' /></Link>
                        ) : (
                            <Link to='/signup' className='w-5 h-5 hidden md:inline'><FaRegUser className='w-6 h-6 font-bold cursor-pointer hover:text-emerald-500' /></Link>
                        )}

                        <li className='w-5 h-5 hidden md:inline'><NavLink to='/wishlist'><TiHeartOutline className='w-6 h-6 font-extrabold cursor-pointer hover:text-red-600' />{WISHLIST.length ? (<span className='bg-red-700 rounded-xl text-xs px-1 text-white -translate-y-8 -translate-x-1 absolute'>{WISHLIST.length}</span>) : null}</NavLink></li>
                        <li className='w-5 h-5 hidden md:inline'><NavLink to='/shoppingbag'><MdOutlineShoppingBag className='w-6 h-6 font-bold cursor-pointer hover:text-blue-500' />{BAG.length ? (<span className='bg-sky-700 rounded-xl text-xs px-1 text-white -translate-y-8 -translate-x-1 absolute'>{BAG.length}</span>) : null}</NavLink></li>
                    </ul>
                </div>
                {/* HAMBURGER MENU =========================================================================================================*/}
                <Menu as={'div'} className={'absolute flex items-center justify-start w-full left-0  -translate-x-0 md:-translate-x-full z-40'}>

                    <Menu.Button>
                        <ImMenu className='w-[2rem] h-[2rem] mr-4 absolute right-0 top-[-10px] text-black md:hidden' onClick={() => setIsHamburgerShow(prevState => !prevState)} />
                    </Menu.Button>

                    <Transition as={Fragment}
                        show={isHamburgerShow}
                        enter='duration-500'
                        enterFrom='-translate-x-full'
                        enterTo='-translate-x-0'
                        leave='duration-500'
                        leaveFrom='-translate-x-0'
                        leaveTo='-translate-x-full'
                    >
                        <Menu.Items className={'flex flex-col items-start px-4 space-y-4 pt-16 justify-center w-[14rem]  h-[90rem] absolute border-b-4 border-gray-300 bg-white z-50'}>

                            <Menu.Item>
                                <h1 className='border-b-2 border-zinc-600 mt-[10rem]'><CgAdidas className='text-6xl' /></h1>
                            </Menu.Item>

                            <Menu.Item>
                                <Link to='/products/all'><h1 className='font-bold cursor-pointer hover:text-gray-700 '>ALL</h1></Link>
                            </Menu.Item>

                            <Menu.Item>
                                <Link to='/products/men'> <h1 className='font-bold cursor-pointer hover:text-gray-700 '>MEN</h1></Link>
                            </Menu.Item>

                            <Menu.Item>
                                <Link to='/products/women'> <h1 className='font-bold cursor-pointer hover:text-gray-700 '>WOMEN</h1></Link>
                            </Menu.Item>

                            <Menu.Item>
                                <Link to='/products/kids'> <h1 className='font-bold cursor-pointer hover:text-gray-700 '>KIDS</h1></Link>
                            </Menu.Item>

                            <Menu.Item>
                                <Link to='/products/sale'> <h1 className='font-bold cursor-pointer hover:text-gray-700 '>SALE</h1></Link>
                            </Menu.Item>

                            <Menu.Item>
                                <Link to='/products/jerseys'> <h1 className='font-bold cursor-pointer hover:text-gray-700 '>JERSEYS</h1></Link>
                            </Menu.Item>

                            <Menu.Item>
                                <div>
                                    <input type="text" placeholder='Search...' className='w-full outline-none' />
                                </div>
                            </Menu.Item>

                            <Menu.Item>
                                <ul className='flex justify-center items-center space-x-6 px-2'>

                                    <li className='w-5 h-5'><TiHeartOutline className='w-6 h-6 font-bold cursor-pointer hover:text-zinc-500' /></li>
                                    <li className='w-5 h-5'><MdOutlineShoppingBag className='w-6 h-6 font-bold cursor-pointer hover:text-zinc-500' /></li>
                                    <li>
                                        {ISLOGGEDIN ? (
                                            <Link to='/myadidas'><FaUserAlt className='w-5 h-5 translate-y-1 font-bold cursor-pointer text-emerald-500 hover:text-emerald-700' /></Link>
                                        ) : (
                                            <Link to='/signup' className='w-2 h-2'><FaRegUser className='w-6 h-6 font-bold cursor-pointer hover:text-zinc-500' /></Link>
                                        )}
                                    </li>

                                </ul>
                            </Menu.Item>


                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>

        </>
    )
}

export default Header


