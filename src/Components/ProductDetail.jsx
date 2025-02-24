import React, { useContext, useState } from 'react'
import { pencil } from '../assets'
import { Container, url } from '../App'
import axios from 'axios'
import { handleNavBarNavigation } from './Navbar'
import { useNavigate } from 'react-router-dom'

const ProductDetail = ({ item, isExpanded, setIsExpanded, cart, setCart, totalPrice, setTotalPrice }) => {
    const navigate = useNavigate()
    let { userID, setUserID } = useContext(Container)
    let [customerNote, setCustomerNote] = useState("")

    const handleTurnOffExpanded = () => {
        //Set isExpanded to false to delete the popped up 
        //product detail window.
        isExpanded = false
        setIsExpanded(isExpanded)
    }

    const handleAddProduct = async (singleProduct, note) => {
        //Parameters:
        // -singleProduct: The chosen product
        // -note: the note of the customer

        //Get the product that the user has chosen, and add it
        //into the cart while calculate the totalprice of the products the cart.
        if (userID) {
            totalPrice += parseFloat(singleProduct.price)
            setTotalPrice(totalPrice)
            const new_product = { ...singleProduct, note: note, ownerID: userID }
            await axios.post(url + "add-product", new_product)
                .then((result) => {
                    console.log(result)
                })
                .catch((err) => console.log(err))
            cart = [...cart, new_product]
            setCart(cart)
            console.log(cart)
            setCustomerNote("")
            handleTurnOffExpanded()
        } else {
            handleNavBarNavigation("dang-nhap", navigate)
        }
    }


    return (
        <div className='z-10 w-full h-full bg-opacity-40 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black flex items-center justify-center'>
            <div className='p-5 ipad:w-full ipad:h-full w-2/3 min-h-[300px] max-h-[600px] bg-white flex flex-col items-center relative rounded-lg'>

                <button class="absolute left cursor-pointer duration-200 hover:scale-125 active:scale-100 absolute top-2 right-4" title="Go Back" onClick={() => handleTurnOffExpanded()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" class="stroke-green-600">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
                    </svg>
                </button>

                <div className='w-11/12 h-1/4  flex items-center mt-5 gap-2 border-b border-gray-300 pb-3'>
                    <img src={item?.image} className='w-[100px] h-full' />
                    <div className='w-2/3 h-full flex flex-col'>
                        <div className='text-[20px] text-green-700 font-bold pb-1'>{item.title}</div>
                        <div className='text-[18px] font-light'>{item.size}</div>
                        <div className='text-[16px] text-red-600 font-light'>{item.price}₫</div>
                    </div>
                </div>

                <div className='w-11/12 mt-4 text-[18px] font-light '>{item.description}</div>

                <div className='mt-5 ipad:h-[50px] w-11/12 h-auto flex items-center border border-gray-500 gap-4'>
                    <img src={pencil} className='w-[25px] h-[25px] ml-4 ' />
                    <input type='text' placeholder='Thêm ghi chú' className=' w-5/6 h-[40px] focus:outline-none' onChange={(e) => setCustomerNote(e.target.value)} />
                </div>

                <div className='w-11/12 mt-5 flex justify-end'>
                    <button
                        class="cursor-pointer bg-gradient-to-r from-green-900 to-green-700 hover:scale-105 duration-700 hover:duration-1000 font-semibold transition-all text-white px-10 py-4 rounded-e relative after:[clip-path:polygon(50%_0%,_100%_0,_100%_34%,_100%_100%,_77%_87%,_88%_62%,_64%_75%,_67%_50%,_48%_32%,_82%_18%)] after:hover:duration-700 after:duration-500 after:absolute after:inset-0 after:z-20 after:bg-pink-600 after:translate-x-0 after:hover:-translate-x-1 after:hover:rotate-[100deg] after:origin-bottom-right after:transition-all after:hover:transition-all after:rounded-e after:hover:skew-y-6 after:content-['Đặt_món'] after:hover:content-['Đặt_món'] after:flex after:items-center after:justify-center after:bg-gradient-to-r after:from-green-700 after:to-green-600 after:hover:scale-x-50 before:[clip-path:polygon(26%_0,_38%_17%,_25%_32%,_41%_66%,_27%_81%,_50%_100%,_0_100%,_0%_70%,_0%_35%,_0_0)] before:hover:duration-700 before:duration-500 before:absolute before:inset-0 before:z-20 before:bg-pink-600 before:translate-x-0 before:hover:translate-x-0 before:hover:-rotate-[45deg] before:origin-bottom-left before:transition-all before:hover:transition-all before:rounded-e before:hover:skew-y-6 before:content-['Đặt_món'] before:hover:content-['Đặt_món'] before:flex before:items-center before:justify-center before:bg-gradient-to-l before:from-green-700 before:to-green-600"
                        onClick={() => handleAddProduct(item, customerNote)}
                    >
                        Đặt món
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ProductDetail