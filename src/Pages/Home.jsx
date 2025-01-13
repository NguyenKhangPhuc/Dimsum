import React from 'react'
import Navbar from '../Components/Navbar'
import { useState } from 'react'
import axios from 'axios'
function Home() {
    const [urlValue, setUrlValue] = useState("")
    const handleSubmit = () => {

    }
    return (
        <div className='w-full flex flex-col items-center'>
            <Navbar />
            <div className='w-1/2 p-5 shadow-gray-500 shadow-lg mt-20 flex flex-col items-center gap-1'>
                <div className='w-5/6 h-[60px] border-gray-500 border-2 rounded-xl flex justify-center'>
                    <input
                        type='text'
                        placeholder='Enter your url'
                        className='w-11/12 outline-none h-full placeholder:font-bold placeholder:italic placeholder:text-indigo-400'
                        onChange={(e) => setUrlValue(e.target.value)}
                    />
                </div>
                <button class="mt-3 relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
                    <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                    <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                    <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                    <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                    <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                    <p class="z-10">Submit</p>
                </button>



                <p className='mt-2 font-serif italic text-[14px]'>URL SHORTENER is a free tool to shorten URLs and generate short links</p>
                <p className='font-serif italic text-[14px]'>URL SHORTENER allows to create a shortened link making it easy to share</p>
            </div>
        </div>
    )
}

export default Home