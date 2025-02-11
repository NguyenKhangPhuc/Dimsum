import React from 'react'
import Navbar from '../Components/Navbar'
import { PagesList } from './Introduction'
import { Explore, Poster } from './Home'
import Footer from '../Components/Footer'
function Policy_1() {
    return (
        <div>
            <Navbar />
            <div className='w-full h-auto bg-gray-100 flex justify-center pb-20 pt-20'>
                <PagesList />
                <div className='w-2/3 h-auto bg-yellow-100 flex flex-col items-center'>
                    <div className='w-11/12 text-[27px] bg-red-100 text-green-800 pb-7 font-bold'>Chính sách đổi trả</div>
                    <div className='w-11/12 font-bold bg-green-100 pb-4'>1. Điều kiện đổi trả</div>
                    <div className='w-11/12'>Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/ trả lại hàng ngay tại thời điểm giao/nhận hàng trong những trường hợp sau:</div>
                    <li className='w-11/12'>Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như trên website tại thời điểm đặt hàng.</li>
                    <li className='w-11/12'>Không đủ số lượng, không đủ bộ như trong đơn hàng.</li>
                    <li className='w-11/12 pb-5'>Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ…</li>
                    <div className='w-11/12 pb-7'>Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự thiếu sót trên để hoàn thành việc hoàn trả/đổi trả hàng hóa. </div>
                    <div className='w-11/12 font-bold bg-green-100 pb-4'>2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả</div>
                    <li className='w-11/12'>Thời gian thông báo đổi trả: trong vòng 48h kể từ khi nhận sản phẩm đối với trường hợp sản phẩm thiếu phụ kiện, quà tặng hoặc bể vỡ.</li>
                    <li className='w-11/12'>Thời gian gửi chuyển trả sản phẩm: trong vòng 14 ngày kể từ khi nhận sản phẩm.</li>
                    <li className='w-11/12 pb-5'>Địa điểm đổi trả sản phẩm: Khách hàng có thể mang hàng trực tiếp đến văn phòng/ cửa hàng của chúng tôi hoặc chuyển qua đường bưu điện.</li>
                    <div className='w-11/12'>Trong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên quan đến chất lượng sản phẩm, Quý Khách hàng vui lòng liên hệ đường dây chăm sóc khách hàng của chúng tôi.</div>
                </div>
            </div>
            <Explore />
            <Poster />
            <Footer />
        </div>
    )
}

export default Policy_1