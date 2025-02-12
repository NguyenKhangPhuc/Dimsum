import React, { useState } from 'react'
import { pencil } from '../assets'

function Product({ title, product, id, cart, setCart, totalPrice, setTotalPrice }) {
    const MAXLENGTH = 120

    let [isExpanded, setIsExpanded] = useState(false)
    let [productIndex, setProductIndex] = useState(0)

    const handleTurnOffExpanded = () => {
        //Set isExpanded to false to delete the popped up 
        //product detail window.
        isExpanded = false
        setIsExpanded(isExpanded)
        console.log(isExpanded)
    }

    const ProductDetail = ({ item }) => {
        let [customerNote, setCustomerNote] = useState("")
        const handleAddProduct = (product, note) => {
            //Get the product that the user has chosen, and add it
            //into the cart while calculate the totalprice of the products the cart.
            totalPrice += parseFloat(product.price)
            setTotalPrice(totalPrice)
            const new_product = { ...product, note: note }
            setCart([...cart, new_product])
            setCustomerNote("")
        }
        return (
            <div className='z-10 w-full h-full bg-opacity-40 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black flex items-center justify-center' id>
                <div className='w-2/3 h-1/2 bg-white flex flex-col items-center relative'>

                    <button class="absolute left cursor-pointer duration-200 hover:scale-125 active:scale-100 absolute top-2 right-4" title="Go Back" onClick={() => handleTurnOffExpanded()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" class="stroke-green-600">
                            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
                        </svg>
                    </button>

                    <div className='w-11/12 h-1/4  flex items-center mt-5 gap-2 border-b border-gray-300 pb-3'>
                        <img src={item?.image} className='w-1/7 h-full' />
                        <div className='w-2/3 h-full flex flex-col'>
                            <div className='text-[20px] text-green-700 font-bold pb-1'>{item.title}</div>
                            <div className='text-[18px] font-light'>{item.size}</div>
                            <div className='text-[16px] text-red-600 font-light'>{item.price}₫</div>
                        </div>
                    </div>

                    <div className='w-11/12 mt-4 text-[18px] font-light '>{item.description}</div>

                    <div className='w-11/12 h-1/6  mt-10 flex items-center border border-gray-500 gap-4'>
                        <img src={pencil} className='w-[25px] h-[25px] ml-4 opacity-50' />
                        <input type='text' placeholder='Thêm ghi chú' className='w-5/6 h-full focus:outline-none' onChange={(e) => setCustomerNote(e.target.value)} />
                    </div>

                    <div className='w-11/12 mt-5 flex justify-end'>
                        <button
                            class="cursor-pointer bg-gradient-to-r from-green-900 to-green-700 hover:scale-105 duration-700 hover:duration-1000 font-semibold transition-all text-white px-10 py-4 rounded-e relative after:[clip-path:polygon(50%_0%,_100%_0,_100%_34%,_100%_100%,_77%_87%,_88%_62%,_64%_75%,_67%_50%,_48%_32%,_82%_18%)] after:hover:duration-700 after:duration-500 after:absolute after:inset-0 after:z-20 after:bg-pink-600 after:translate-x-0 after:hover:-translate-x-1 after:hover:rotate-[100deg] after:origin-bottom-right after:transition-all after:hover:transition-all after:rounded-e after:hover:skew-y-6 after:content-['Đặt_món'] after:hover:content-['Đặt_món'] after:flex after:items-center after:justify-center after:bg-gradient-to-r after:from-green-700 after:to-green-600 after:hover:scale-x-50 before:[clip-path:polygon(26%_0,_38%_17%,_25%_32%,_41%_66%,_27%_81%,_50%_100%,_0_100%,_0%_70%,_0%_35%,_0_0)] before:hover:duration-700 before:duration-500 before:absolute before:inset-0 before:z-20 before:bg-pink-600 before:translate-x-0 before:hover:translate-x-0 before:hover:-rotate-[45deg] before:origin-bottom-left before:transition-all before:hover:transition-all before:rounded-e before:hover:skew-y-6 before:content-['Đặt_món'] before:hover:content-['Đặt_món'] before:flex before:items-center before:justify-center before:bg-gradient-to-l before:from-green-700 before:to-green-600"
                            onClick={() => handleAddProduct(item, customerNote)}
                        >
                            Đặt món
                        </button>
                    </div>

                </div>
            </div>
        )
    }

    const handleExpanded = (index) => {
        //Set the chosen product's index
        //and set isExpanded to true to pop up a product detail window.
        isExpanded = true
        setIsExpanded(isExpanded)
        setProductIndex(index)
        console.log(isExpanded)
    }


    return (
        <div className='w-full h-auto flex flex-col' onClick={() => console.log(id)}>
            <div className='w-full h-[70px] bg-gray-400 text-[20px] flex items-center justify-center border-b border-gray-300' id={id}>{title}</div>
            {product?.map((ele, index) => {
                return (
                    <>
                        <div className='w-full min-h-[150px] bg-orange-300 flex justify-center items-center gap-2 border-b border-gray-300 cursor-pointer' onClick={() => handleExpanded(index)}>
                            <img src={ele.image} className='w-1/6 '></img>
                            <div className='w-3/4 bg-gray-300 '>
                                <div className='w-auto h-1/4 text-[18px] text-green-600 font-light'>
                                    {ele.title}
                                </div>
                                <div className='h-1/2 text-[16px] font-light'>
                                    {ele.description.slice(0, MAXLENGTH)}...
                                </div>
                                <div className='w-full bg-red-200 flex justify-between items-center'>
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
                        {isExpanded == true && productIndex == index ? <ProductDetail item={ele} /> : <></>}
                    </>

                )
            })}
        </div>
    )
}

export default Product