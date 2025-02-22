import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import "../App.css"
import { Container } from '../App'
import OrderTable from '../Components/OrderTable'
import { Explore, Poster } from './Home'
import Footer from '../Components/Footer'

function Account() {
    let { userEmail, setUserEmail } = useContext(Container)
    const handleLogout = () => {
        window.localStorage.removeItem("userID")
        window.location.reload()
    }

    return (
        <div className=''>
            <Navbar />
            <div className='w-full flex flex-col pb-10'>
                <div className='p-7 w-full flex justify-center bg-gray-200 items-center text-[27px] text-green-800 font-bold border-b border-gray-300'>
                    Tài Khoản của bạn
                </div>
                <div className='ipad:flex-col w-full mt-5 flex'>

                    <div className='ipad:w-full w-1/4 flex flex-col items-center gap-2'>
                        <div className='w-3/4 text-[18px] font-bold text-green-700'>TÀI KHOẢN</div>
                        <div className='w-3/4'>
                            <button class="Btn" onClick={() => handleLogout()}>
                                <div class="sign">
                                    <svg viewBox="0 0 512 512">
                                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z">
                                        </path>
                                    </svg></div>
                                <div class="text">Đăng xuất</div>
                            </button>
                        </div>
                    </div>

                    <div className='ipad:w-full w-3/4 flex flex-col items-center'>
                        <div className='w-3/4 p-2 border-b border-gray-300'>Thông tin tài khoản</div>
                        <div className='ipad:text-[15px] w-3/4 p-2 font-bold text-[18px] text-green-700'>{userEmail}</div>
                        <div className='ipad:w-full w-3/4 p-2'>
                            <div className='w-full text-[25px] font-bold'>Đơn hàng của bạn</div>
                            <OrderTable />
                        </div>
                    </div>
                </div>
            </div>
            <Explore />
            <Poster />
            <Footer />
        </div>
    )
}

export default Account