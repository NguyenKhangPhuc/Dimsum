import React from 'react'
import Navbar from '../Components/Navbar'
import { PagesList } from './Introduction'
import { Explore, Poster } from './Home'
import Footer from '../Components/Footer'

function Policy_3() {
    return (
        <div>
            <Navbar />
            <div className='w-full h-auto bg-gray-100 flex justify-center pb-20 pt-20'>
                <PagesList />
                <div className='ipad:w-full w-2/3 h-auto bg-yellow-100 flex flex-col items-center'>
                    <div className='w-11/12 text-[27px] bg-red-100 text-green-800 pb-7 font-bold'>Điều khoản dịch vụ</div>
                    <div className='w-11/12 font-bold bg-green-100 pb-4'>1. Giới thiệu</div>
                    <div className='w-11/12 pb-2'>Chào mừng quý khách hàng đến với website chúng tôi.</div>
                    <div className='w-11/12 pb-2'>
                        Khi quý khách hàng truy cập vào trang website của chúng tôi có nghĩa là quý khách đồng ý với các điều khoản này.
                        Trang web có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào trong Điều khoản mua bán hàng hóa này, vào bất cứ lúc nào. Các thay đổi có hiệu lực ngay khi được đăng trên trang web mà không cần thông báo trước.
                        Và khi quý khách tiếp tục sử dụng trang web, sau khi các thay đổi về Điều khoản này được đăng tải,
                        có nghĩa là quý khách chấp nhận với những thay đổi đó.
                    </div>
                    <div className='w-11/12 pb-2'>
                        Quý khách hàng vui lòng kiểm tra thường xuyên để cập nhật những thay đổi của chúng tôi.
                    </div>
                    <div className='w-11/12 font-bold bg-green-100 pb-4'>2. Hướng dẫn sử dụng website</div>
                    <div className='w-11/12 pb-2'>
                        Khi vào web của chúng tôi, khách hàng phải đảm bảo đủ 18 tuổi, hoặc truy cập dưới sự giám sát của cha mẹ hay người giám hộ hợp pháp.
                        Khách hàng đảm bảo có đầy đủ hành vi dân sự để thực hiện các giao dịch mua bán hàng hóa theo quy định hiện hành của pháp luật Việt Nam.
                    </div>
                    <div className='w-11/12 pb-2'>
                        Trong suốt quá trình đăng ký, quý khách đồng ý nhận email quảng cáo từ website.
                        Nếu không muốn tiếp tục nhận mail, quý khách có thể từ chối bằng cách nhấp vào đường link ở dưới cùng trong mọi email quảng cáo.
                    </div>
                    <div className='w-11/12 font-bold bg-green-100 pb-4'>3. Thanh toán an toàn và tiện lợi</div>
                    <div className='w-11/12 pb-2'>
                        Người mua có thể tham khảo các phương thức thanh toán sau đây và lựa chọn áp dụng phương thức phù hợp:
                    </div>
                    <div className='w-11/12 flex gap-x-1'>
                        <div className='font-bold '>Cách 1:</div>Thanh toán trực tiếp (người mua nhận hàng tại địa chỉ người bán)
                    </div>
                    <div className='w-11/12 flex gap-x-1'>
                        <div className='font-bold '>Cách 2:</div>Thanh toán sau (COD – giao hàng và thu tiền tận nơi)
                    </div>
                    <div className='w-11/12 flex gap-x-1'>
                        <div className='font-bold '>Cách 3:</div>Thanh toán online qua thẻ tín dụng, chuyển khoản
                    </div>
                </div>
            </div>
            <Explore />
            <Poster />
            <Footer />
        </div>
    )
}

export default Policy_3