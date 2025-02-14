import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { banner } from '../assets'
import { drinks, noodles_meals, rice_meals, small_meals, vegetarian_meals } from '../constants'
import { Explore, Poster } from './Home'
import Footer from '../Components/Footer'
import ProductDetail from '../Components/ProductDetail'
import { handleExpanded } from '../Components/Product'
import { useContext } from 'react'
import { Container } from '../App'
function Menu_2() {
    let [checkPages, setCheckPages] = useState(false)
    return (
        <div className=''>
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
            <div className='w-full text-[27px] bg-red-100 text-green-800 p-7 font-bold flex justify-center'>Tất cả sản phẩm</div>
            {checkPages == false ?
                <div className='w-full flex flex-wrap justify-center gap-6 cursor-pointer mt-2'>
                    <Product_2 product={small_meals} />
                    <Product_2 product={noodles_meals} />
                </div>
                :
                <div className='w-full flex flex-wrap justify-center gap-6 cursor-pointer mt-2'>
                    <Product_2 product={rice_meals} />
                    <Product_2 product={vegetarian_meals} />
                    <Product_2 product={drinks} />
                </div>
            }
            <div className='p-5 w-full flex justify-center '>
                <div
                    className={checkPages == false ? 'p-3 text-black text-[20px]' : 'p-3 text-gray-400 text-[20px] hover:text-red-400 duration-300 cursor-pointer'}
                    onClick={() => {
                        setCheckPages(false)
                        window.scrollTo(0, 0)
                    }}
                >1</div>
                <div
                    className={checkPages == true ? 'p-3 text-black text-[20px]' : 'p-3 text-[20px] text-gray-400 hover:text-red-400 duration-300 cursor-pointer'}
                    onClick={() => {
                        setCheckPages(true)
                        window.scrollTo(0, 0)
                    }}
                >2</div>
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
                                className='p-5 w-[200px] hover:shadow-2xl border border-gray-200 rounded-lg duration-300'
                                onClick={() => handleExpanded(index, isExpanded, setIsExpanded, setProductIndex)}
                            >
                                <img src={ele.image} />
                                <div>{ele.title}</div>
                                <div>{ele.price}</div>
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