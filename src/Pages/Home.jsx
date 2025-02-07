import React from 'react'
import Navbar from '../Components/Navbar'
import { useState } from 'react'
import axios from 'axios'
import Slide from '../Components/Slide'
import { main_topic } from '../constants'
import { small_meals } from '../constants'
function Home() {
    const maxLength = 120
    return (
        <div className=''>
            <Navbar />
            <Slide />
            <div className='w-full h-auto bg-red-100 mt-20 flex-col'>
                <div className='w-full h-[100px] flex justify-center items-center font-bold text-[25px] text-green-800 bg-red-300'>
                    Thực Đơn
                </div>
                <div className='w-full h-auto flex justify-center gap-10'>
                    <div className='w-1/5 h-[300px] bg-green-200 border border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2'>
                        {main_topic?.map((ele, index) => {
                            return (
                                <div className='w-5/6 h-1/6 flex items-center rounded-lg border-b border-dotted border-gray-300 pl-3 hover:text-red-700 hover:border-red-900 duration-300 cursor-pointer'>
                                    {ele.title}
                                </div>
                            )
                        })}
                    </div>
                    <div className='w-2/5 h-auto bg-violet-100 border border-gray-300 rounded-lg'>
                        <div>
                            <div className='w-full h-[70px] bg-gray-400 text-[20px] flex items-center justify-center border-b border-gray-300'>Điểm Tâm</div>
                            {small_meals?.map((ele, index) => {
                                return (
                                    <div className='w-full h-[150px] bg-orange-300 flex justify-center items-center gap-2 border-b border-gray-300'>
                                        <img src={ele.image} className='w-1/6 h-3/4'></img>
                                        <div className='w-3/4 bg-gray-300 h-3/4'>
                                            <div className='w-auto h-1/4 text-[18px] text-green-600 font-light'>
                                                {ele.title}
                                            </div>
                                            <div className='h-1/2 text-[16px] font-light'>
                                                {ele.description.slice(0, maxLength)}...
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
                                )
                            })}
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='w-1/4 h-[300px] bg-orange-100'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home