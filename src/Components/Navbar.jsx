import React from 'react'
import { useNavigate } from 'react-router-dom'
import { navBar } from '../constants'
import { profile, search } from '../assets'
export const handleNavBarNavigation = (link, navigate) => {
    navigate(`/${link}`)
}
function Navbar() {
    const navigate = useNavigate()
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
                            <div
                                className='text-[17px] font-medium hover:text-green-700 duration-300'
                                onClick={() => handleNavBarNavigation(ele.link, navigate)}
                            >
                                {ele.title}
                            </div>
                        )
                    })}
                </div>
                <div className='w-1/3 flex justify-center gap-3 '>
                    <img
                        src={search}
                        className='w-[30px] h-[30px] ml-4 hover:w-[35px] hover:h-[35px] duration-300 cursor-pointer'
                    />
                    <img
                        src={profile}
                        className='w-[30px] h-[30px] ml-4 hover:w-[35px] hover:h-[35px] duration-300 cursor-pointer'
                        onClick={() => handleNavBarNavigation("dang-nhap", navigate)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar