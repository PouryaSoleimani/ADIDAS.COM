import React, { useState, memo } from 'react'
import { ImSearch } from "react-icons/im";
import { allProducts_atom } from '../../Recoil/Atoms';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const SearchBox = () => {
 const [ALLPRODUCTS, setALLPRODUCTS] = useRecoilState(allProducts_atom)
 const [ALLPRODUCTSCOPY, setALLPRODUCTSCOPY] = useRecoilState(allProducts_atom)
 const [searchVal, setSearchVal] = useState('')
 const navigate = useNavigate()

 // HANDLERS
 const searchHandler = (event) => {
  event.preventDefault()
  if (searchVal === "") { setALLPRODUCTS(ALLPRODUCTSCOPY); }

  const filteredData = ALLPRODUCTS.filter((item) => { if (item.title.toLowerCase().includes(searchVal.toLowerCase())) { return item; } })
  if (filteredData.length === 0) {
   Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "No Products Found",
   }).then(
    navigate('/products/all')
   )
  }
  setALLPRODUCTS(filteredData)
  setSearchVal('')
 }
 return (
  <>
   <div>
    <div className="relative translate-x-2 translate-y-2">
     <input type="search" placeholder="SEARCH ..." className="block w-full border border-neutral-300 bg-transparent py-1 pl-2 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5" value={searchVal} onChange={(event) => setSearchVal(event.target.value)} />
     <div className="absolute inset-y-1 right-1 flex justify-end">
      <button aria-label="Submit" className="flex aspect-square h-full items-center justify-center  bg-neutral-950 text-white transition hover:bg-neutral-800" onClick={searchHandler}>
       <ImSearch />
      </button>
     </div>
    </div>
   </div >
  </>
 )
}

export default SearchBox
