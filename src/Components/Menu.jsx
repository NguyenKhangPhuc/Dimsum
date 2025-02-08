import React from 'react'
import { main_topic, small_meals, noodles_meals, rice_meals, vegetarian_meals, drinks } from '../constants'
import Product from './Product'
function Menu() {
    return (
        <div className='w-full h-auto bg-red-100 mt-20 flex-col'>
            <div className='w-full h-[100px] flex justify-center items-center font-bold text-[25px] text-green-800 bg-red-300'>
                Thực Đơn
            </div>
            <div className='w-full h-auto flex justify-center gap-10'>
                <div className='w-1/5 h-[300px] bg-green-200 border border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2'>
                    {main_topic?.map((ele, index) => {
                        return (
                            <div className='w-5/6 h-1/6 flex items-center rounded-lg border-b border-dotted border-gray-300 pl-3 hover:text-red-700 hover:border-red-900 duration-300 cursor-pointer'>
                                {ele.title}
                            </div>
                        )
                    })}
                </div>
                <div className='w-2/5 h-auto bg-violet-100 border border-gray-300 rounded-lg flex flex-col gap-10'>
                    <Product title={"Điểm Tâm"} product={small_meals} />
                    <Product title={"Cháo - Hủ Tiếu - Mì"} product={noodles_meals} />
                    <Product title={"Cơm"} product={rice_meals} />
                    <Product title={"Món Chay"} product={vegetarian_meals} />
                    <Product title={"Nước uống"} product={drinks} />
                </div>
                <div className='w-1/4 h-[300px] bg-orange-100'>

                </div>
            </div>
        </div>
    )
}

export default Menu