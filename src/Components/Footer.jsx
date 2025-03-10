import React from 'react'
import { navBar, policy } from '../constants'
import { handleNavBarNavigation } from './Navbar'
import { useNavigate } from 'react-router-dom'
import { fb_logo, ins_logo, youtube_logo } from '../assets'

function Footer() {
    const navigate = useNavigate()
    return (
        <div className='mt-5 max-w-full h-auto border border-gray-200 pt-10 flex-col'>
            <div className='ipad:flex-col w-full h-auto flex border-b border-gray-200 pb-10'>
                <div className='ipad:w-full ipad:pb-10 w-1/2 h-auto flex flex-col items-center'>
                    <div className='ipad:w-full w-11/12 text-[23px] font-bold pb-5'>Quick Dimsum</div>
                    <div className='ipad:w-full w-11/12'>
                        Quick Food phục vụ các món ăn truyền thống và sáng tạo của Nhật Bản.
                        Bầu không khí bình dị trong khi thiết kế hiện đại và cao cấp góp phần mang đến trải nghiệm ăn uống thư giãn và thú vị.
                    </div>
                </div>
                <div className='ipad:w-full w-1/2 flex'>
                    <div className='w-1/3'>
                        <div className='w-full font-bold pb-3'>Chính sách</div>
                        <div className='flex flex-col gap-4'>
                            {policy?.map((ele, index) => {
                                return (
                                    <div
                                        className='text-[15px] font-light hover:text-red-700 duration-300 cursor-pointer'
                                        onClick={() => handleNavBarNavigation(ele.link, navigate)}
                                    >
                                        {ele.title}
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                    <div className='w-1/3'>
                        <div className='w-full font-bold pb-3'>Sản Phẩm</div>
                        <div
                            className='text-[15px] font-light hover:text-red-700 duration-300 cursor-pointer'
                            onClick={() => navigate("/san-pham")}
                        >
                            Tất cả sản phẩm
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <div className='w-full font-bold pb-3'>Menu</div>
                        <div className='flex flex-col gap-4'>
                            {navBar?.map((ele, index) => {
                                return (
                                    <div
                                        className='text-[15px] font-light hover:text-red-700 duration-300 cursor-pointer'
                                        onClick={() => handleNavBarNavigation(ele.link, navigate)}
                                    >{ele.title}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='ipad:p-0 w-100 flex justify-center items-center p-6 gap-3'>
                <div>KẾT NÓI VỚI CHÚNG TÔI:</div>
                <div className='flex gap-2 items-center'>
                    <img
                        src={fb_logo}
                        className='w-[35px] h-[35px] hover:w-[35px] hover:pb-1 duration-300 cursor-pointer'
                    />
                    <img
                        src={ins_logo}
                        className='w-[35px] h-[35px] hover:w-[35px] hover:pb-1 duration-300 cursor-pointer'
                    />
                    <img
                        src={youtube_logo}
                        className='w-[35px] h-[35px] hover:w-[35px] hover:pb-1 duration-300 cursor-pointer'
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer