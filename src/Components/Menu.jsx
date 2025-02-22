import React, { useContext, useState } from 'react'
import { main_topic, small_meals, noodles_meals, rice_meals, vegetarian_meals, drinks } from '../constants'
import Product from './Product'
import { Container, url } from '../App'
import Cart_2 from './Cart'
function Menu() {
    let { totalPrice, setTotalPrice } = useContext(Container)
    let { userID, setUserID } = useContext(Container)
    let { cart, setCart } = useContext(Container)

    return (
        <div className='ipad:m-0 w-full h-auto bg-red-100 mt-20 flex-col pb-20'>
            <div className='w-full h-[100px] flex justify-center items-center font-bold text-[25px] text-green-800 bg-red-300'>
                Thực Đơn
            </div>
            <div className='ipad:flex-col w-full h-auto flex justify-center gap-10 relative'>
                <div className='ipad:flex-row ipad:top-0 ipad:w-full ipad:h-auto ipad:p-2 top-20 sticky w-1/5 h-[300px] bg-green-200 border border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2'>
                    {main_topic?.map((ele, index) => {
                        return (
                            <div
                                className='ipad:justify-center ipad:border-none w-5/6 h-1/6 flex items-center rounded-lg border-b border-dotted border-gray-300 pl-3 hover:text-red-700 hover:border-red-900 duration-300 cursor-pointer'

                            >
                                <a href={`#${ele.link}`} className='iphone:text-[9px]'>{ele.title}</a>
                            </div>
                        )
                    })}
                </div>
                <div className='ipad:w-full w-2/5 h-auto bg-violet-100 border border-gray-300 rounded-lg flex flex-col gap-10'>
                    <Product title={"Điểm Tâm"} product={small_meals} id={"small_meals"} cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
                    <Product title={"Cháo - Hủ Tiếu - Mì"} product={noodles_meals} id={"noodles_meals"} cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
                    <Product title={"Cơm"} product={rice_meals} id={"rices"} cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
                    <Product title={"Món Chay"} product={vegetarian_meals} id={"vegetarian_meals"} cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
                    <Product title={"Nước uống"} product={drinks} id={"drinks"} cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
                </div>
                <div className=' w-1/4 h-auto ipad:hidden'>
                    <Cart_2 />
                </div>
            </div>
        </div>
    )
}

export default Menu