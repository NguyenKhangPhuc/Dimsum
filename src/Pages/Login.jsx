import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { Explore, Poster } from './Home'
import Footer from '../Components/Footer'

function Login() {
    let [expandRegister, setExpandRegister] = useState(false)
    return (
        <div>
            <Navbar />
            <div className='w-full h-auto bg-gray-300 flex p-20'>
                <div className='w-1/2 flex justify-center items-center text-[30px] text-green-700 border-r border-dotted border-gray-500 font-bold'>Đăng Nhập</div>
                <div className='w-1/2 flex flex-col items-center'>

                    <div className='w-5/6 font-bold text-green-700 pb-3'>Đăng nhập bằng:</div>
                    <div className='w-5/6 pb-[45px]'><button className='w-[150px] h-[50px] bg-red-600 rounded-full text-white'>Email</button></div>
                    <div className="w-5/6 pb-4">
                        <input
                            className="w-11/12 h-[50px] focus:outline-none pl-4 bg-gray-200 focus:bg-white border focus:border-gray-400 duration-300"
                            placeholder="Email"
                        />
                    </div>

                    <div className="w-5/6 pb-2">
                        <input
                            className="w-11/12 h-[50px] focus:outline-none pl-4 bg-gray-200 focus:bg-white border focus:border-gray-400 duration-300"
                            placeholder="Mật khẩu"
                        />
                    </div>

                    <div className='w-5/6 text-[12px] pb-5 underline cursor-pointer'>Quên mật khẩu?</div>

                    <div className='w-5/6 pb-2'>
                        <button className='w-1/3 bg-green-800 h-[50px] text-white hover:bg-red-600 duration-300'>Đăng nhập</button>
                    </div>

                    {expandRegister == false ?
                        <div className='w-5/6 text-[12px] text-green-700 underline cursor-pointer' onClick={() => setExpandRegister(true)}>Đăng ký?</div>
                        :
                        <div
                            className='w-[40px]  bg-gray-200 hover:bg-green-700 hover:text-white duration-300 flex items-center justify-center text-[18px] font-light cursor-pointer'
                            onClick={() => setExpandRegister(false)}
                        >
                            X
                        </div>
                    }

                    {expandRegister == true &&
                        <div className='w-full flex flex-col items-center bg-yellow-300 pt-5'>
                            <div className='w-5/6 font-bold text-green-700 pb-3'>Đăng ký bằng:</div>
                            <div className='w-5/6 pb-[45px]'><button className='w-[150px] h-[50px] bg-red-600 rounded-full text-white'>Email</button></div>
                            <div className="w-5/6 pb-4">
                                <input
                                    className="w-11/12 h-[50px] focus:outline-none pl-4 bg-gray-200 focus:bg-white border focus:border-gray-400 duration-300"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="w-5/6 pb-5">
                                <input
                                    className="w-11/12 h-[50px] focus:outline-none pl-4 bg-gray-200 focus:bg-white border focus:border-gray-400 duration-300"
                                    placeholder="Mật khẩu"
                                />
                            </div>
                            <div className='w-5/6 pb-2'>
                                <button className='w-1/3 bg-green-800 h-[50px] text-white hover:bg-red-600 duration-300'>
                                    Đăng ký
                                </button>
                            </div>
                        </div>
                    }

                </div>
            </div>
            <Explore />
            <Poster />
            <Footer />
        </div>
    )
}

export default Login