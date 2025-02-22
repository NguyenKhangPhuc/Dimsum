import React from 'react'
import Navbar from '../Components/Navbar'
import { Explore, Poster } from './Home'
import Footer from '../Components/Footer'

function Contact() {
    return (
        <div>
            <Navbar />
            <div className='ipad:max-w-full ipad:gap-5 ipad:flex-col ipad:items-center w-full h-auto flex pt-20 bg-gray-300 justify-center pb-20'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7361.156553170279!2d106.62314107855937!3d10.737024964905643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d6175076c41%3A0xb2c3cda79864aa3b!2sNha%CC%80%20ha%CC%80ng%20Dimsum%20Chi%20Tao%20Bao!5e0!3m2!1svi!2sfi!4v1739265543542!5m2!1svi!2sfi"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className='ipad:w-11/12 ipad:h-[300px] w-[500px] h-[600px] border-0'
                >
                </iframe>
                <div className='ipad:w-full w-1/2 h-auto bg-yellow-200 flex flex-col items-center'>
                    <div className='w-11/12 text-[27px] bg-red-100 text-green-800 pb-10 font-bold'>Liên hệ</div>
                    <div className='w-11/12'>Địa chỉ chúng tôi</div>
                    <div className='w-11/12 font-bold text-[18px] pb-10'>
                        Tầng 1000, tòa nhà landmark, số 30000, đường Lê Đại Hành, phường 20, quận 35, Tp. Hồ Chí Minh.
                    </div>
                    <div className='w-11/12'>Email chúng tôi</div>
                    <div className='w-11/12 font-bold text-[18px] pb-10'>nguyenkhangphuc012024@gmail.com</div>
                    <div className='w-11/12'>Email hỗ trợ khách hàng</div>
                    <div className='w-11/12 font-bold text-[18px] pb-10'>nguyenkhangphuc012024@gmail.com</div>
                    <div className='w-11/12'>Email hợp tác & kinh doanh</div>
                    <div className='w-11/12 font-bold text-[18px] pb-10'>nguyenkhangphuc012024@gmail.com</div>
                    <div className='w-11/12'>Số điện thoại tổng đài (Hotline)</div>
                    <div className='w-11/12 font-bold text-[18px] pb-10'>1800-XXXX-XXXX</div>
                    <div className='w-11/12'>Thời gian làm việc</div>
                    <div className='w-11/12 font-bold text-[18px] pb-10'>Thứ 2 đến Thứ 6 từ 8h đến 18h; Thứ 7 và Chủ nhật từ 8h00 đến 17h00</div>
                </div>
            </div>
            <Explore />
            <Poster />
            <Footer />
        </div>
    )
}

export default Contact