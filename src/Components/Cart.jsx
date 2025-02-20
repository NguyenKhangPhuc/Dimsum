import React, { useContext, useState } from 'react'
import { Container, url } from '../App'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Cart() {
    const navigate = useNavigate()
    let { totalPrice, setTotalPrice } = useContext(Container)
    let { userID, setUserID } = useContext(Container)
    let { cart, setCart } = useContext(Container)

    const handleDeleteCartProduct = async (i) => {
        //Delete the chosen product with Filter method
        //return the product that do not have the same index
        //as the chosen product. Calculate the total price.
        totalPrice -= parseFloat(cart[i].price)
        setTotalPrice(totalPrice)
        if (userID) {
            await axios.post(url + "delete-product", { productIndex: i, userID })
                .then((result) => {
                    console.log(result)
                })
                .catch(err => console.log(err))
        }
        const deletedCart = cart.filter((ele, index) => {
            return index != i
        })
        setCart(deletedCart)
    }

    return (
        <div className='sticky top-20 z-1000 w-full auto flex flex-col items-center border border-gray-300 rounded-lg'>
            {cart.length != 0 ? cart?.map((ele, index) => {
                return (
                    <div className='w-11/12 min-h-[120px] flex flex-col border-b border-gray-500 justify-center'>
                        <div className='w-full h-auto flex justify-between'>
                            <div className='text-[20px] text-green-700 font-bold pb-1'>{ele.title}</div>
                            <div className='text-[18px] text-red-600 font-bold'>{ele.price}₫</div>
                        </div>
                        <div className='text-[18px] font-light'>{ele.size}</div>
                        <div className="w-1/2 flex flex-wrap text-red-400 break-all ">
                            {ele.note}
                        </div>
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
                    onClick={() => navigate("/thanh-toan")}
                >
                    Thanh toán
                </button>
            </div>
        </div>
    )
}

export default Cart