import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import { FaRegHeart } from 'react-icons/fa';
import { GrShop } from "react-icons/gr";
import "./Pagination.css"
import 'animate.css';
import { shoppingBag, wishList } from '../../Recoil/Atoms';

const Pagination = (props) => {
    //^STATES
    const { data } = props
    const [BAG, setBAG] = useRecoilState(shoppingBag)
    const [WISHLIST, setWISHLIST] = useRecoilState(wishList)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    const itemsPerPage = 12
    const [itemOffset, setItemOffset] = useState([]);
    const endOffset = itemOffset + itemsPerPage;
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const currentItems = data.slice(itemOffset, endOffset);

    const notify = () => toast.success('Product is Added To Your Bag')
    const notify3 = () => toast.success('Product is Added To Your Wishlist')
    const notify5 = () => toast('This Product is Already in Your Bag', { icon: '📛', })
    //^FUNCITONS
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    }

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

    //^RETURN =================================================================================================================================
    return (
        <>
            <Toaster position="top-right" reverseOrder={true} />
            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 min-[1580px]:grid-cols-4 place-items-center px-12 gap-x-4 gap-y-4 w-full'>
                {currentItems.map(product => (
                    <div key={product.id} className='hover:border-2 hover:border-black border border-gray-500 pb-2 min-w-full max-h-full flex flex-col space-y-0 animate__animated animate__pulse'>
                        <Link to='/products/productpage' state={{ ...product }} className='cursor-pointer'>
                            <img src={product.img} className='h-[21rem] w-full cursor-pointer' />
                            <p className='px-2 flex justify-between tracking-wide font-bold productTitle items-center text-lg hover:underline'>{product.title}</p>
                            <p className='px-2'>{product.type === 'T_SHIRT' ? 'Sports Wear' : product.type === 'PANTS' ? 'Comfort' : product.type === 'SHOES' ? 'Performance' : product.type === 'KITS' ? 'Football Clothing' : product.type === 'JACKETS' ? 'Stylish Winter' : product.type === 'HOODIES' ? 'Stylish Winter' : 'Everyday'}</p>
                        </Link>

                        <span className='flex flex-col w-full px-2 space-y-3'>
                            <span className='flex justify-end items-center'>
                                <h2 className='text-3xl leading-3 priceTag font-bold tracking-normal w-fit bg-zinc-200 px-2 py-3'>${product.price}</h2>
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
            <ReactPaginate
                breakLabel="..."
                nextLabel="next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={10}
                pageCount={pageCount}
                previousLabel="previous"
                renderOnZeroPageCount={null}
                containerClassName='paginationContainer'
            />
        </>
    );
}

export default Pagination
