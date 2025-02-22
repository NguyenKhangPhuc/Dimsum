import React from 'react'
import Navbar from '../Components/Navbar'
import { PagesList } from './Introduction'
import { Explore, Poster } from './Home'
import Footer from '../Components/Footer'

function Policy_2() {
    return (
        <div>
            <Navbar />
            <div className='w-full h-auto bg-gray-200 flex justify-center pb-20 pt-20'>
                <PagesList />
                <div className='ipad:w-full w-2/3 h-auto flex flex-col items-center'>
                    <div className='w-11/12 text-[27px] text-green-800 pb-7 font-bold'>Chính sách bảo mật</div>
                    <div className='w-11/12 pb-3'>
                        Chính sách bảo mật này nhằm giúp Quý khách hiểu về cách website thu thập và sử dụng thông tin cá nhân của mình thông qua việc sử dụng trang web,
                        bao gồm mọi thông tin có thể cung cấp thông qua trang web khi Quý khách đăng ký tài khoản, đăng ký nhận thông tin liên lạc từ chúng tôi, hoặc khi Quý khách mua sản phẩm, dịch vụ, yêu cầu thêm thông tin dịch vụ từ chúng tôi.
                    </div>
                    <div className='w-11/12 pb-3'>
                        Chúng tôi sử dụng thông tin cá nhân của Quý khách để liên lạc khi cần thiết liên quan đến việc Quý khách sử dụng website của chúng tôi,
                        để trả lời các câu hỏi hoặc gửi tài liệu và thông tin Quý khách yêu cầu.
                    </div>
                    <div className='w-11/12 pb-3'>
                        Trang web của chúng tôi coi trọng việc bảo mật thông tin và sử dụng các biện pháp tốt nhất để bảo vệ thông tin cũng như việc thanh toán của khách hàng.
                    </div>
                    <div className='w-11/12 pb-3'>Mọi thông tin giao dịch sẽ được bảo mật ngoại trừ trong trường hợp cơ quan pháp luật yêu cầu.</div>
                </div>
            </div>
            <Explore />
            <Poster />
            <Footer />
        </div>
    )
}

export default Policy_2