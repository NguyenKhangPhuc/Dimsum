import React from 'react'
import Navbar from '../Components/Navbar'
import { navBar } from '../constants'
import { handleNavBarNavigation } from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import { Explore, Poster } from "./Home"
import Footer from '../Components/Footer'
function Introduction() {
    const navigate = useNavigate()
    return (
        <div className=''>
            <Navbar />
            <div className='w-full h-auto bg-gray-100 flex justify-center pb-20 pt-20'>
                <PagesList />
                <div className='w-2/3 h-auto bg-yellow-100 flex flex-col items-center'>
                    <div className='w-11/12 text-[27px] bg-red-100 text-green-800 pb-7 font-bold'>Giới thiệu</div>
                    <div className='w-11/12 font-bold bg-green-100 pb-4'>
                        Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn.
                        Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng, thông tin liên hệ.
                        Điều này sẽ giúp khách hàng cảm thấy tin tưởng khi mua hàng trên website của bạn.

                    </div>
                    <div className='w-11/12 pb-2'>Một vài gợi ý cho nội dung trang Giới thiệu:</div>
                    <li className='w-11/12'>Bạn là ai</li>
                    <li className='w-11/12'>Giá trị kinh doanh của bạn là gì</li>
                    <li className='w-11/12'>Địa chỉ cửa hàng</li>
                    <li className='w-11/12'>Bạn đã kinh doanh trong ngành hàng này bao lâu rồi</li>
                    <li className='w-11/12'>Bạn kinh doanh ngành hàng online được bao lâu</li>
                    <li className='w-11/12'>Đội ngũ của bạn gồm những ai</li>
                    <li className='w-11/12'>Thông tin liên hệ</li>
                    <li className='w-11/12 pb-5'>Liên kết đến các trang mạng xã hội (Twitter, Facebook)</li>
                    <div className='w-11/12'> Bạn có thể chỉnh sửa hoặc xoá bài viết này tại đây hoặc thêm những bài viết mới trong phần quản lý Trang nội dung.</div>
                </div>
            </div>
            <Explore />
            <Poster />
            <Footer />
        </div>
    )
}

export const PagesList = () => {
    return (
        <div className='w-1/5 h-[340px] border border-gray-300 rounded-lg flex flex-col items-center'>
            <div className='w-11/12 h-[60px] flex items-center justify-center border-b-[2px] border-gray-800 font-bold text-green-700'>DANH MỤC TRANG</div>
            {navBar.map((ele, index) => {
                return (
                    <div
                        className='w-11/12 h-[60px] flex items-center border-b border-dotted border-gray-300 hover:text-red-700 hover:border-red-900 duration-300 cursor-pointer'
                        onClick={() => handleNavBarNavigation(ele.link, navigate)}
                    >
                        {ele.title}
                    </div>
                )
            })}
        </div>
    )
}

export default Introduction