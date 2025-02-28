import React, { useContext, useState } from 'react'
import { pencil } from '../assets'
import { Container, url } from '../App'
import axios from 'axios'
import { handleNavBarNavigation } from './Navbar'
import { useNavigate } from 'react-router-dom'
import ProductDetail from './ProductDetail'

export const handleExpanded = (index, isExpanded, setIsExpanded, setProductIndex) => {
    //Parameters:
    // -index = the index of the chosen product.
    // -isExpanded/setIsExpanded = boolean var to check if the product detail is expanded or not.
    // setProductIndex = set this to the index of the chosen product.

    //Set the product index to the chosen product.
    //and set isExpanded to true to pop up a product detail window.
    //Exported for resuability purpose.
    isExpanded = true
    setIsExpanded(isExpanded)
    setProductIndex(index)
}

function Product({ title, product, id, cart, setCart, totalPrice, setTotalPrice }) {

    const MAXLENGTH = 120
    let [productView, setProductView] = useState(2)
    let [isExpanded, setIsExpanded] = useState(false)
    let [productIndex, setProductIndex] = useState(0)
    let [expandProduct, setExpandProduct] = useState(false)

    const handleExpandProduct = () => {
        //Set the product view to the size of the product (maybe 9 or 3 or,...)
        //Set expand product to true to hide the "Xem thêm" button.
        setProductView(product.length)
        setExpandProduct(true)
    }

    return (
        <div className='w-full h-auto flex flex-col items-center' >
            <div className='bg-gray-100 w-full h-[70px] text-[20px] flex items-center justify-center border-b border-t border-gray-300' id={id}>{title}</div>
            {/*slice the product to two product (productView = 2) each type */}
            {product?.slice(0, productView).map((ele, index) => {
                return (
                    <>
                        <div className='p-5 w-full min-h-[150px] flex justify-center items-center gap-2 border-b border-gray-300 cursor-pointer' onClick={() => handleExpanded(index, isExpanded, setIsExpanded, setProductIndex)}>
                            <img src={ele.image} className='w-1/6 '></img>
                            <div className='w-3/4 '>
                                <div className='w-auto h-1/4 text-[18px] text-green-600 font-light'>
                                    {ele.title}
                                </div>
                                <div className='h-1/2 text-[16px] font-light'>
                                    {ele.description.slice(0, MAXLENGTH)}...
                                </div>
                                <div className='w-full flex justify-between items-center'>
                                    <div className='font-lighter text-[16px] text-red-800'>
                                        {ele.price}₫
                                    </div>
                                    <button
                                        title="Add New"
                                        class="group cursor-pointer outline-none hover:rotate-90 duration-300"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30px"
                                            height="30px"
                                            viewBox="0 0 24 24"
                                            class="stroke-zinc-500 fill-none group-hover:fill-green-800 group-active:stroke-zinc-100 group-hover:stroke-zinc-100 group-active:fill-zinc-600 group-active:duration-0 duration-300"
                                        >
                                            <path
                                                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                                stroke-width="1.5"
                                            ></path>
                                            <path d="M8 12H16" stroke-width="1.5"></path>
                                            <path d="M12 16V8" stroke-width="1.5"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {isExpanded == true && productIndex == index ?
                            <ProductDetail
                                item={ele}
                                isExpanded={isExpanded}
                                setIsExpanded={setIsExpanded}
                                cart={cart}
                                setCart={setCart}
                                totalPrice={totalPrice}
                                setTotalPrice={setTotalPrice}
                            />
                            :
                            <></>
                        }
                    </>

                )
            })}
            {expandProduct == false && <button className='mt-5 w-[120px] h-[40px] bg-red-600 text-white hover:bg-green-700 duration-300' onClick={() => handleExpandProduct()}>Xem thêm</button>}
        </div>
    )
}

export default Product