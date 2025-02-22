import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { banner, search, x_icon } from '../assets'
import { full_menu } from '../constants'
import { Explore, Poster } from './Home'
import Footer from '../Components/Footer'
import ProductDetail from '../Components/ProductDetail'
import { handleExpanded } from '../Components/Product'
import { useContext } from 'react'
import { Container } from '../App'
import "../App.css"

function Menu_2() {
    let maxLength = 18
    let [checkPages, setCheckPages] = useState(false)
    let [fullMenu, setFullMenu] = useState(full_menu)
    let [searchValue, setSearchValue] = useState("")
    const handleSearching = (value) => {
        setSearchValue(value)
        if (value == "") {
            setFullMenu(full_menu)
        }
        const searchFilter = full_menu.filter((ele, index) => {
            return ele.title.toLowerCase().includes(value.toLowerCase())
        })
        setFullMenu(searchFilter)
        console.log(searchFilter)
    }
    const handleClearSearch = () => {
        setSearchValue("")
        setFullMenu(full_menu)
    }
    return (
        <div className='w-full h-auto flex flex-col items-center'>
            <Navbar />
            <div
                className="w-full h-[300px] rounded-lg"
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                }}
            >
            </div>
            <div className='p-2 mt-5 flex items-center justify-center gap-2 border border-gray-300 rounded-lg'>
                <img
                    src={search}
                    className='w-[30px] h-[30px] duration-300 cursor-pointer'
                />
                <input
                    type='text'
                    value={searchValue}
                    className='h-[40px] w-[500px] focus:outline-none'
                    placeholder='Tìm kiếm'
                    onChange={(e) => handleSearching(e.target.value)}
                />
                <img
                    src={x_icon}
                    className='w-[20px] h-[20px] hover:w-[22px] hover:h-[22px] duration-300 cursor-pointer'
                    onClick={() => handleClearSearch()}
                />
            </div>
            <div className='w-full text-[27px] bg-red-100 text-green-800 p-7 font-bold flex justify-center'>Tất cả sản phẩm</div>
            {checkPages == false ?
                <div className='w-full flex flex-wrap justify-center gap-6 cursor-pointer mt-2'>
                    <Product_2 product={fullMenu.slice(0, maxLength)} />
                </div>
                :
                <div className='w-full flex flex-wrap justify-center gap-6 cursor-pointer mt-2'>
                    <Product_2 product={fullMenu.slice(maxLength, full_menu.length)} />
                </div>
            }
            <div className='p-5 w-full flex justify-center '>
                {checkPages == false ?
                    <div className='p-3 text-black text-[20px]'>1</div> :
                    <div
                        className='p-3 text-gray-400 text-[20px] hover:text-red-400 duration-300 cursor-pointer'
                        onClick={() => {
                            setCheckPages(false)
                            window.scrollTo(0, 0)
                        }}
                    >1
                    </div>
                }
                {checkPages == true ?
                    <div className='p-3 text-black text-[20px]'>2</div> :
                    <div
                        className='p-3 text-gray-400 text-[20px] hover:text-red-400 duration-300 cursor-pointer'
                        onClick={() => {
                            setCheckPages(true)
                            window.scrollTo(0, 0)
                        }}
                    >2
                    </div>
                }
            </div>
            <Explore />
            <Poster />
            <Footer />
        </div>
    )
}

export const Product_2 = ({ product }) => {
    let { cart, setCart } = useContext(Container)
    let { totalPrice, setTotalPrice } = useContext(Container)
    let [productIndex, setProductIndex] = useState(0)
    let [isExpanded, setIsExpanded] = useState(false)
    return (
        <>
            {
                product?.map((ele, index) => {
                    return (
                        <>
                            <div
                                className='relative p-5 w-[200px] hover:shadow-2xl border border-gray-200 rounded-lg duration-300'
                                onClick={() => handleExpanded(index, isExpanded, setIsExpanded, setProductIndex)}
                            >
                                <img src={ele.image} />
                                <div>{ele.title.length > 18 ? <div>{ele.title.slice(0, 18)}...</div> : <div>{ele.title}</div>}</div>
                                <div>{ele.price}</div>
                                <div className='w-full mt-2'>
                                    <button className="pay-btn">
                                        <span className="btn-text">Đặt món</span>
                                        <div className="icon-container">
                                            <svg viewBox="0 0 24 24" className="icon card-icon">
                                                <path
                                                    d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18C2,19.11 2.89,20 4,20H20C21.11,20 22,19.11 22,18V6C22,4.89 21.11,4 20,4Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                            <svg viewBox="0 0 24 24" className="icon payment-icon">
                                                <path
                                                    d="M2,17H22V21H2V17M6.25,7H9V6H6V3H18V6H15V7H17.75L19,17H5L6.25,7M9,10H15V8H9V10M9,13H15V11H9V13Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                            <svg viewBox="0 0 24 24" className="icon dollar-icon">
                                                <path
                                                    d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>

                                            <svg viewBox="0 0 24 24" className="icon wallet-icon default-icon">
                                                <path
                                                    d="M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>

                                            <svg viewBox="0 0 24 24" className="icon check-icon">
                                                <path
                                                    d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>

                            </div>
                            {productIndex == index && isExpanded == true &&
                                <ProductDetail
                                    item={ele}
                                    isExpanded={isExpanded}
                                    setIsExpanded={setIsExpanded}
                                    cart={cart}
                                    setCart={setCart}
                                    totalPrice={totalPrice}
                                    setTotalPrice={setTotalPrice}
                                />
                            }
                        </>
                    )
                })
            }
        </>
    )

}

export default Menu_2