import React from 'react'
import { navBar, policy } from '../constants'
import { handleNavBarNavigation } from './Navbar'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()
    return (
        <div className='w-full h-auto bg-gray-200 pt-10 flex-col'>
            <div className='w-full h-auto flex'>
                <div className='w-1/2 min-h-[300px] flex flex-col items-center'>
                    <div className='w-11/12 text-[23px] font-bold pb-5'>Quick Dimsum</div>
                    <div className='w-11/12'>
                        Quick Food phục vụ các món ăn truyền thống và sáng tạo của Nhật Bản.
                        Bầu không khí bình dị trong khi thiết kế hiện đại và cao cấp góp phần mang đến trải nghiệm ăn uống thư giãn và thú vị.
                    </div>
                </div>
                <div className='w-1/2 flex bg-red-200'>
                    <div className='w-1/3 bg-yellow-200'>
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
                        <div className='text-[15px] font-light hover:text-red-700 duration-300 cursor-pointer'>Tất cả sản phẩm</div>
                    </div>
                    <div className='w-1/3'>
                        <div className='w-full font-bold pb-3'>Menu</div>
                        <div className='flex flex-col gap-4'>
                            {navBar?.map((ele, index) => {
                                return (
                                    <div className='text-[15px] font-light hover:text-red-700 duration-300 cursor-pointer'>{ele.title}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-100 flex justify-center gap-10 items-center p-6'>
                <div>KẾT NÓI VỚI CHÚNG TÔI:</div>
                <div className='flex gap-5'>
                    <div>FaceBook icon</div>
                    <div>Instagram icon</div>
                    <div>Youtube icon</div>
                </div>
            </div>
        </div>
    )
}

export default Footer