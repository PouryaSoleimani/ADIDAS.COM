import React, { useEffect, useMemo, useState } from 'react'
import AllProductsSideBar from './AllProductsSideBar.jsx';
import Pagination from '../Pagination/Pagination';
import { useRecoilState } from 'recoil';
import { ShimmerPostList } from "react-shimmer-effects";
import { allProducts_atom } from './../../Recoil/Atoms'
import axios from 'axios'


const AllProducts = () => {
  //^STATES
  const [showShimmer, setShowShimmer] = useState(true)
  const [allAtomProducts, setAllAtomProducts] = useRecoilState(allProducts_atom)
  //^FUNCTIONS
  const getAllProducts = () => { axios.get('/products').then(response => { setAllAtomProducts(response.data) }) }
  useEffect(() => { getAllProducts() }, [])
  setTimeout(() => { setShowShimmer(false) }, 1500)
  
  //RETURN =========================================================================================================
  return (
    <>
      <AllProductsSideBar gender={'men'} />
      <div className='py-[2.5rem] relative w-full flex justify-around overflow-auto flex-col'>
        {showShimmer ? (
          <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} className='w-full pr-10' />
        ) : (
          <Pagination data={allAtomProducts} />
        )
        }
      </div>
    </>
  )
}
export default AllProducts
