import React from 'react'
import Navbar from '../Components/Navbar'
import { useState } from 'react'
import axios from 'axios'
import Slide from '../Components/Slide'
import Menu from '../Components/Menu'
import { poster, explore } from '../assets'
import Footer from '../Components/Footer'
function Home() {
    return (
        <div className=''>
            <Navbar />
            <Slide />
            <Menu />
            <Explore />
            <Poster />
            <Footer />
        </div>
    )
}

export const Explore = () => {
    return (
        <div className='w-full min-h-[850px] flex items-center justify-center bg-gray-200'>
            <div className='w-1/2 h-auto flex flex-col bg-yellow-200 items-center'>
                <div className='w-11/12 bg-red-200 text-[23px] text-green-700'>KHÁM PHÁ</div>
                <div className='w-11/12 bg-red-200 text-[20px] text-green-700 pb-10'>CÂU CHUYỆN CỦA QUICK DIMSUM</div>
                <div className='w-11/12 bg-red-200 pb-5 text-[17px]'>
                    Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn.
                    Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng, thông tin liên hệ.
                    Điều này sẽ giúp khách hàng cảm thấy tin tưởng khi mua hàng trên website của bạn.
                </div>
                <div className='w-11/12 bg-red-200 text-[17px] pb-5'>Một vài gợi ý cho nội dung trang Giới thiệu:</div>
                <li className='w-11/12 bg-red-200 pb-5 text-[17px]'>Bạn là ai</li>
                <li className='w-11/12 bg-red-200 pb-5 text-[17px]'>Giá trị kinh doanh của bạn là gì</li>
                <li className='w-11/12 bg-red-200 pb-5 text-[17px]'>Địa chỉ cửa hàng</li>
                <li className='w-11/12 bg-red-200 pb-5 text-[17px]'>Bạn đã kinh doanh trong ngành hàng này bao lâu rồi</li>
                <li className='w-11/12 bg-red-200 pb-5 text-[17px]'>Bạn kinh doanh ngành hàng online được bao lâu</li>
                <li className='w-11/12 bg-red-200 pb-5 text-[17px]'>Đội ngũ của bạn gồm những ai</li>
                <li className='w-11/12 bg-red-200 pb-5 text-[17px]'>Thông tin liên hệ</li>
                <li className='w-11/12 bg-red-200 pb-5 text-[17px]'>Liên kết đến các trang mạng xã hội (Twitter, Facebook)</li>
                <div className='w-11/12 bg-red-200 text-[17px]'>Bạn có thể chỉnh sửa hoặc xoá bài viết
                    này tại đây hoặc thêm những bài viết mới trong phần quản lý Trang nội dung.</div>
            </div>
            <div
                className="w-[650px] h-[600px] rounded-lg"
                style={{
                    backgroundImage: `url(${explore})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                }}
            >
            </div>
        </div>
    )
}

export const Poster = () => {
    return (
        <div
            className="w-full "
            style={{
                backgroundImage: `url(${poster})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px',
            }}
        >
        </div>
    )
}



export default Home