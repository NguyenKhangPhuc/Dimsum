import React, { useContext, useState } from 'react'
import Navbar from '../Components/Navbar'
import "../App.css"
import { Container, url } from '../App'
import { Explore, Poster } from './Home'
import Footer from '../Components/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Payment() {
    const navigate = useNavigate()
    let { cart, setCart } = useContext(Container)
    let { totalPrice, setTotalPrice } = useContext(Container)
    let { userID, setUserID } = useContext(Container)
    let [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        pay_method: "credit_card",
    })
    const handleInputChange = (data) => {
        formData = { ...formData, [data.name]: data.value }
        setFormData(formData)
    }
    const handleSubmit = async () => {
        if (formData.name == "" || formData.address == "" || formData.phone == "") {
            alert("Cannot continue with no information payment")
        } else {
            formData = { ...formData, userID, totalPrice }
            setFormData(formData)
            console.log("Hello")
            await axios.post(url + "add-order", formData)
                .then((result) => {
                    console.log(result)
                    if (result.data.mssg == "add order successfully") {
                        const new_cart = cart.map((ele, index) => {
                            return { ...ele, cartOwner: result.data.order.cartID }
                        })
                        axios.post(url + "add-order-detail", new_cart)
                            .then((result) => {
                                console.log(result)
                            })
                            .catch((err) => console.log(err))
                        navigate("/dang-nhap")
                        window.location.reload()
                    }
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <div className=''>
            <Navbar />
            <div className='w-full flex p-20 bg-gray-100'>
                <div className='w-1/2 flex flex-col items-center'>
                    <div className='w-5/6 text-[27px] bg-red-100 text-green-800 font-bold border-b border-gray-300'>
                        Thông tin thanh toán
                    </div>
                    <form className='w-5/6 mt-5 flex flex-col gap-5'>
                        <div className='w-full flex flex-col gap-2'>
                            <label className='w-full' for='name'>Họ và tên</label>
                            <input
                                type='text'
                                id='name'
                                value={formData.name}
                                name='name'
                                className='border border-gray-300 w-11/12 h-[40px] focus:outline-none pl-4 bg-gray-200 focus:bg-white border focus:border-gray-400 duration-300'
                                placeholder='Họ và Tên'
                                onChange={(e) => handleInputChange(e.target)}
                            />
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <label className='w-full' for='phone'>Số điện thoại</label>
                            <input
                                type='text'
                                id='phone'
                                value={formData.phone}
                                name='phone'
                                className='border border-gray-300 w-11/12 h-[40px] focus:outline-none pl-4 bg-gray-200 focus:bg-white border focus:border-gray-400 duration-300'
                                placeholder='Số điện thoại'
                                onChange={(e) => handleInputChange(e.target)}
                            />
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <label className='w-full' for='address'>Địa chỉ</label>
                            <input
                                type='text'
                                id='address'
                                value={formData.address}
                                name='address'
                                className='border border-gray-300 w-11/12 h-[40px] focus:outline-none pl-4 bg-gray-200 focus:bg-white border focus:border-gray-400 duration-300'
                                placeholder='Địa chỉ'
                                onChange={(e) => handleInputChange(e.target)}
                            />
                        </div>
                        <div className='w-full flex gap-5'>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="pay_method"
                                    value="credit_card"
                                    checked={formData.pay_method === "credit_card"}
                                    onChange={(e) => handleInputChange(e.target)}
                                    className="w-[15px] h-[15px]"
                                />
                                Thẻ Tín Dụng
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="pay_method"
                                    value="cash"
                                    checked={formData.pay_method === "cash"}
                                    onChange={(e) => handleInputChange(e.target)}
                                    className="w-[15px] h-[15px]"
                                />
                                Tiền mặt
                            </label>
                        </div>
                        <div class="container" onClick={() => handleSubmit()}>
                            <div class="left-side">
                                <div class="card">
                                    <div class="card-line"></div>
                                    <div class="buttons"></div>
                                </div>
                                <div class="post">
                                    <div class="post-line"></div>
                                    <div class="screen">
                                        <div class="dollar">$</div>
                                    </div>
                                    <div class="numbers"></div>
                                    <div class="numbers-line2"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='w-1/2 flex flex-col items-center text-[27px] bg-red-100 text-green-800 font-bold border-b border-gray-300'>
                    <OrdersComponent ordersDetail={cart} totalPrice={totalPrice} />
                    <div className='w-5/6 mt-5 text-[18px] text-red-600 font-bold flex justify-end pb-4'>Tổng cộng: {totalPrice.toFixed(3)}đ</div>
                </div>
            </div>
            <Explore />
            <Poster />
            <Footer />
        </div>
    )
}

export const OrdersComponent = ({ ordersDetail, totalPrice }) => {
    return (
        <div className='w-5/6'>
            {ordersDetail?.map((ele, index) => {
                return (
                    <div className='w-full min-h-[110px] flex flex-col border-b border-gray-300 justify-center'>
                        <div className='w-full h-auto flex justify-between'>
                            <div className='text-[16px] text-green-700 font-bold pb-1'>{ele.title}</div>
                            <div className='text-[14px] text-red-600 font-bold'>{ele.price}₫</div>
                        </div>
                        <div className='text-[14px] font-light'>{ele.size}</div>
                        <div className="w-1/2 flex flex-wrap text-red-400 break-all ">
                            {ele.note}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Payment