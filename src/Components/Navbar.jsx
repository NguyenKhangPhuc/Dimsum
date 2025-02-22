import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { navBar } from '../constants'
import { profile, search, cart, x_icon, hamburger } from '../assets'
import Cart_2 from './Cart'
export const handleNavBarNavigation = (link, navigate) => {
    navigate(`/${link}`)
}
function Navbar() {
    let [isExpanded, setIsExpanded] = useState(false)
    let [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    return (
        <div className='w-full h-auto relative flex flex-col items-center'>
            <div
                className='w-full bg-green-700 flex justify-center text-[20px] text-white'>
                Ưu đãi nhất năm - chọn món nhé
            </div>
            <div className=' w-full flex items-center relative'>
                <img
                    src={isOpen ? x_icon : hamburger}
                    className="ipad:block hidden w-[20px] h-[20px] cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                />
                <div className='ipad:w-1/2 ipad:text-[20px] w-1/4 ml-5 text-green-700 font-bold text-[30px] flex justify-center'>
                    QUICK DIMSUM
                </div>
                <div className='ipad:hidden w-2/5 flex gap-5 cursor-pointer justify-center'>
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
                {isOpen == true && <MobileHeader navigate={navigate} />}
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
                </div>
            </div>
            {isExpanded &&
                <div className='ipad:w-5/6 ipad:right-0 mt-2 absolute top-full right-20 bg-white z-50 duration-300 rounded-lg border-2 border-green-500'>
                    <Cart_2 />
                </div>
            }
        </div>
    )
}

export const MobileHeader = ({ navigate }) => {

    return (
        <div className='absolute w-full h-screen bg-white bg-opacity-[95%] top-full left-0 right-0 z-[40] flex flex-col items-center'>
            {navBar?.map((ele, index) => {
                return (
                    <div
                        className='text-[17px] font-medium hover:text-green-700 duration-300 cursor-pointer mt-3'
                        onClick={() => handleNavBarNavigation(ele.link, navigate)}
                    >
                        {ele.title}
                    </div>
                )
            })}
        </div>
    )
}

export default Navbar