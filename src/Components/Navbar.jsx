import React from 'react'
import { useNavigate } from 'react-router-dom'
function Navbar() {
    const navigate = useNavigate()
    const navLinks = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Sign in",
            link: "/sign-in"
        }
    ]
    const handleNavigate = (link) => {
        navigate(`${link}`)
    }
    return (
        <div className='w-5/6 h-20 bg-indigo-200 flex flex-row justify-between font-mono rounded-xl mt-5 shadow-gray-500 shadow-lg'>
            <div className='w-1/4 h-full flex items-center ml-10 font-bold text-3xl text-indigo-600'>URL SHORTENED</div>
            <div className='w-1/4 h-full flex items-center justify-center gap-5'>
                {navLinks.map((ele) => {
                    return (
                        <button
                            class="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
                            onClick={() => handleNavigate(ele.link)}
                        >
                            {ele.title}
                        </button>

                    )
                })}
            </div>
        </div>
    )
}

export default Navbar