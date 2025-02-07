import React from 'react'
import { useNavigate } from 'react-router-dom'
import { navBar } from '../constants'

function Navbar() {
    return (
        <div className='w-full h-auto'>
            <div
                className='w-full p-2.5 bg-green-700 flex justify-center text-[20px] text-white'>
                Ưu đãi nhất năm - chọn món nhé
            </div>
            <div className='w-full flex items-center'>
                <div className='w-1/4 ml-5 text-green-700 font-bold text-[30px] flex justify-center'>QUICK DIMSUM</div>
                <div className='w-2/5 flex gap-5 cursor-pointer justify-center'>
                    {navBar?.map((ele, index) => {
                        return (
                            <div className='text-[17px] font-medium hover:text-green-700 duration-300'>{ele.title}</div>
                        )
                    })}
                </div>
                <div className='w-1/3 flex justify-center gap-3 '>
                    <div className=''>icon1</div>
                    <div className=''>icon1</div>
                    <div className=''>icon1</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar