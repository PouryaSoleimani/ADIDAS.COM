import React, { useEffect, useLayoutEffect, useState } from 'react'
import axios from 'axios'
import { ShimmerPostList } from "react-shimmer-effects";
import ProductsSideBar from './ProductsSideBar';
import { useRecoilState } from 'recoil';
import { allProducts_atom } from '../../Recoil/Atoms';
import Pagination from '../Pagination/Pagination';
import { ScrollRestoration } from 'react-router-dom';


const KitsProducts = () => {

  const [allAtomProducts, setAllAtomProducts] = useRecoilState(allProducts_atom)

  const [showShimmer, setShowShimmer] = useState(true)

  const getAllproducts = () => { axios.get('/products?type=KITS').then(response => setAllAtomProducts(response.data)) }

  useEffect(() => { getAllproducts() }, [])

  setTimeout(() => { setShowShimmer(false) }, 1000)

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // RETURN ===================================================================================================================
  return (
    <>
      <ProductsSideBar />
      <div className='py-[2.5rem] relative w-full flex justify-around overflow-auto flex-col'>
        {showShimmer ? (
          <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} className='w-full pr-10' />
        ) : (
          <Pagination data={allAtomProducts} />
        )
        }
      </div>
      <ScrollRestoration />
    </>
  )
}

export default KitsProducts

