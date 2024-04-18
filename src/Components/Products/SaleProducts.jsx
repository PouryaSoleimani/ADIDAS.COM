import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ShimmerPostList } from "react-shimmer-effects";
import ProductsSideBar from './ProductsSideBar';
import { useRecoilState } from 'recoil';
import { allProducts_atom, shoppingBag, wishList } from '../../Recoil/Atoms';
import 'animate.css';
import { Link } from 'react-router-dom';
import { GrShop } from 'react-icons/gr';
import { FaRegHeart } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';


const SaleProducts = () => {
  //STATES
  const [allAtomProducts, setAllAtomProducts] = useRecoilState(allProducts_atom)
  const [BAG, setBAG] = useRecoilState(shoppingBag)
  const [WISHLIST, setWISHLIST] = useRecoilState(wishList)
  const [showShimmer, setShowShimmer] = useState(true)
  const [isFavourite, setIsFavourite] = useState(false)
  //FUNCTIONS
  const getAllproducts = () => { axios.get('http://localhost:4000/products?_start=10&_end=30').then(response => setAllAtomProducts(response.data)) }
  console.log(allAtomProducts)
  useEffect(() => { getAllproducts() }, [])
  setTimeout(() => { setShowShimmer(false) }, 1000)
  const notify = () => toast.success('Product is Added To Your Bag')
  const notify3 = () => toast.success('Product is Added To Your Wishlist')
  const notify5 = () => toast('This Product is Already in Your Bag', { icon: '📛', })

  const buyHandler = (product) => {
    const id = product.id
    let copy = [...BAG]
    let repeatedProduct = copy.filter(item => item.id == id)
    if (repeatedProduct.length) { setIsButtonDisabled(true); notify5(); return }
    copy.push(product)
    setBAG(copy)
    notify()
  }
  const wishlistHandler = (product) => {
    let copy = [...WISHLIST]
    copy.push(product)
    setWISHLIST(copy)
    notify3()
  }

  // RETURN ===================================================================================================================
  return (
    <>
      <ProductsSideBar gender={'off'} />
      <div className='py-[2.5rem] relative w-full flex justify-around overflow-auto pr-8'>
        <Toaster position="top-right" reverseOrder={true} />
        {showShimmer ? (
          <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} className='w-full pr-10' />
        ) : (
          <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 min-[1580px]:grid-cols-4 place-items-center px-12 gap-x-4 gap-y-4 w-full'>
            {allAtomProducts.map(product => (
              <div key={product.id} className='hover:border-2 hover:border-red-400 border-2 border-red-700 pb-2 min-w-full min-h-full flex flex-col space-y-0 animate__animated animate__pulse'>
                <span className='bg-red-700 absolute top-2 left-2 px-3 py-.5 text-ms emptyBag flex items-center text-zinc-100'>SALE</span>
                <Link to='/products/productpage' state={{ ...product }} className='cursor-pointer'>
                  <img src={product.img} className='h-[21rem] w-full cursor-pointer' />
                  <p className='px-2 flex justify-between tracking-wide font-bold productTitle items-center text-lg hover:underline'>{product.title}</p>
                  <p className='px-2'>{product.type === 'T_SHIRT' ? 'Sports Wear' : product.type === 'PANTS' ? 'Comfort' : product.type === 'SHOES' ? 'Performance' : product.type === 'KITS' ? 'Football Clothing' : product.type === 'JACKETS' ? 'Stylish Winter' : product.type === 'HOODIES' ? 'Stylish Winter' : 'Everyday'}</p>
                </Link>

                <span className='flex flex-col w-full px-2 space-y-3'>
                  <span className='flex justify-end items-center space-x-2'>
                    <h2 className='text-xl leading-3 priceTag font-bold tracking-normal w-fit bg-zinc-200 px-2 py-2 line-through opacity-40'>${product.price}</h2>
                    <h2 className='text-3xl leading-3 text-red-800 priceTag font-bold tracking-normal w-fit bg-red-200 px-2 py-3'>${product.price / 2}</h2>
                  </span>

                  <div className='flex justify-between items-center'>
                    <p className='text-zinc-500 tracking-widest text-sm emptyBag font-bold'>{product.gender.toUpperCase()} {product.type}</p>
                    <div className='-translate-y-1 space-x-2'>
                      <button className='px-5 py-2 text-xl hover:bg-black hover:text-white duration-500 border bg-zinc-100 border-black ' onClick={() => buyHandler({ ...product })}><GrShop className='w-5 h-5' /></button>
                      <button className='px-5 py-2 text-xl hover:bg-red-700 hover:text-white duration-500 border bg-zinc-100 border-black' onClick={() => wishlistHandler({ ...product })}><FaRegHeart className='w-5 h-5' /></button>
                    </div>
                  </div>
                </span>

              </div>
            ))}
          </div >
        )
        }
      </div>
    </>
  )
}

export default SaleProducts