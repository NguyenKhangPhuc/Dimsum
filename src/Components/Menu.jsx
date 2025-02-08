import React, { useState } from 'react'
import { main_topic, small_meals, noodles_meals, rice_meals, vegetarian_meals, drinks } from '../constants'
import Product from './Product'
function Menu() {
    let [totalPrice, setTotalPrice] = useState(0)
    let [cart, setCart] = useState([])
    const handleDeleteCartProduct = (i) => {
        totalPrice -= parseFloat(cart[i].price)
        setTotalPrice(totalPrice)
        const deletedCart = cart.filter((ele, index) => {
            return index != i
        })
        setCart(deletedCart)
    }
    return (
        <div className='w-full h-auto bg-red-100 mt-20 flex-col'>
            <div className='w-full h-[100px] flex justify-center items-center font-bold text-[25px] text-green-800 bg-red-300'>
                Thực Đơn
            </div>
            <div className='w-full h-auto flex justify-center gap-10 relative'>
                <div className='top-20 sticky w-1/5 h-[300px] bg-green-200 border border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2'>
                    {main_topic?.map((ele, index) => {
                        return (
                            <div
                                className='w-5/6 h-1/6 flex items-center rounded-lg border-b border-dotted border-gray-300 pl-3 hover:text-red-700 hover:border-red-900 duration-300 cursor-pointer'

                            >
                                <a href={`#${ele.link}`}>{ele.title}</a>
                            </div>
                        )
                    })}
                </div>
                <div className='w-2/5 h-auto bg-violet-100 border border-gray-300 rounded-lg flex flex-col gap-10'>
                    <Product title={"Điểm Tâm"} product={small_meals} id={"small_meals"} cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
                    <Product title={"Cháo - Hủ Tiếu - Mì"} product={noodles_meals} id={"noodles_meals"} cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
                    <Product title={"Cơm"} product={rice_meals} id={"rices"} cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
                    <Product title={"Món Chay"} product={vegetarian_meals} id={"vegetarian_meals"} cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
                    <Product title={"Nước uống"} product={drinks} id={"drinks"} cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
                </div>
                <div className=' w-1/4 h-auto '>
                    <div className='sticky top-20 z-0 w-full auto flex flex-col items-center border border-gray-300 rounded-lg'>
                        {cart.length != 0 ? cart?.map((ele, index) => {
                            return (
                                <div className='w-11/12 min-h-[130px] flex flex-col border-b border-gray-500'>
                                    <div className='w-full h-auto flex justify-between'>
                                        <div className='text-[20px] text-green-700 font-bold pb-1'>{ele.title}</div>
                                        <div className='text-[18px] text-red-600 font-bold'>{ele.price}₫</div>
                                    </div>
                                    <div className='text-[18px] font-light'>{ele.size}</div>
                                    <div className='w-1/2 flex flex-wrap text-red-400'>{ele.note}</div>
                                    <div className='w-full flex justify-end'>
                                        <button
                                            class="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
                                            onClick={() => handleDeleteCartProduct(index)}
                                        >
                                            <svg
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                class="h-5 w-5 mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    stroke-width="2"
                                                    stroke-linejoin="round"
                                                    stroke-linecap="round"
                                                ></path>
                                            </svg>

                                            Delete
                                        </button>
                                    </div>

                                </div>
                            )
                        })
                            :
                            <div className='mt-5 pb-5 font-bold'>Giỏ hàng của bạn đang trống</div>
                        }
                        <div className='w-full  h-[130px] bg-gray-200 flex flex-col justify-center items-center gap-3' >
                            <div className='w-11/12  flex justify-between'>
                                <div className='text-[18px]'>Tổng Cộng:</div>
                                {cart.length != 0 ? <div className='text-[20px] text-red-600 font-bold'>{totalPrice.toFixed(3)}đ</div> : "0.0đ"}
                            </div>
                            <button
                                className='w-11/12 mt-2 bg-red-500 h-1/3 text-[20px] font-bold text-white hover:bg-green-600 duration-300'
                                disabled={cart.length == 0 ? true : false}
                            >
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu