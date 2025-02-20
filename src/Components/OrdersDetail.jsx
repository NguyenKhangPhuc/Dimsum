import React from 'react'
import { OrdersComponent } from '../Pages/Payment'

function OrdersDetail({ ordersDetail, totalPrice, setIsExpanded }) {
    const handleTurnOffExpanded = () => {
        setIsExpanded(false);
    }
    return (
        <div className='z-10 w-full h-full bg-opacity-40 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black flex items-center justify-center' >
            <div className='w-1/3 min-h-[110px] bg-white flex flex-col items-center relative'>
                <button class="absolute left cursor-pointer duration-200 hover:scale-125 active:scale-100 absolute top-1 right-2" title="Go Back" onClick={() => handleTurnOffExpanded()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" class="stroke-green-600">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
                    </svg>
                </button>
                <OrdersComponent ordersDetail={ordersDetail} totalPrice={totalPrice} />
                <div className='w-5/6 mt-5 text-[18px] text-red-600 font-bold flex justify-end pb-4'>Tổng cộng: {totalPrice.toFixed(3)}đ</div>
            </div>

        </div>
    )
}

export default OrdersDetail