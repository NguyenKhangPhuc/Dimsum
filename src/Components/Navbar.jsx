import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { navBar } from '../constants'
import { profile, search, cart, x_icon } from '../assets'
import Cart_2 from './Cart'
export const handleNavBarNavigation = (link, navigate) => {
    navigate(`/${link}`)
}
function Navbar() {
    let [isExpanded, setIsExpanded] = useState(false)
    const navigate = useNavigate()
    return (
        <div className='w-full h-auto relative flex flex-col items-center'>
            <div
                className='w-full p-2.5 bg-green-700 flex justify-center text-[20px] text-white'>
                Ưu đãi nhất năm - chọn món nhé
            </div>
            <div className='w-full flex items-center'>
                <div className='w-1/4 ml-5 text-green-700 font-bold text-[30px] flex justify-center'>QUICK DIMSUM</div>
                <div className='w-2/5 flex gap-5 cursor-pointer justify-center'>
                    {navBar?.map((ele, index) => {
                        return (
                            <div
                                className='text-[17px] font-medium hover:text-green-700 duration-300'
                                onClick={() => handleNavBarNavigation(ele.link, navigate)}
                            >
                                {ele.title}
                            </div>
                        )
                    })}
                </div>
                <div className='w-1/3 flex justify-center gap-7 relative items-center'> {/* Thêm relative vào đây */}
                    <img
                        src={isExpanded == false ? cart : x_icon}
                        className='w-[20px] h-[20px] hover:w-[22px] hover:h-[22px] duration-300 cursor-pointer'
                        onClick={() => setIsExpanded(!isExpanded)}
                    />
                    <img
                        src={profile}
                        className='w-[30px] h-[30px] hover:w-[32px] hover:h-[32px] duration-300 cursor-pointer'
                        onClick={() => handleNavBarNavigation("dang-nhap", navigate)}
                    />
                    {isExpanded &&
                        <div className='w-5/6 mt-2 absolute top-full mr-20 bg-white z-50 duration-300 rounded-lg border-2 border-green-500'>
                            <Cart_2 />
                        </div>
                    }
                </div>

            </div>

        </div>
    )
}

export default Navbar