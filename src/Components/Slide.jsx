import React, { useState } from 'react'
import { slide_imgs } from '../constants'
function Slide() {
    // Receive an array of objects of slide images from '../constants'
    let [slideNumber, setSlideNumber] = useState(0)
    const handleChangeSlide = (mssg) => {
        //Parameters:
        // -mssg: mssg is "forward"/"back".

        //When mssg equal "forward" ==> move slide forward, if reach the end ==> back to the first.
        //Same idea for when mssg equal "back"(minus).
        if (mssg == "forward") {
            slideNumber += 1
            setSlideNumber(slideNumber)
            if (slideNumber >= slide_imgs.length) {
                setSlideNumber(0)
            }
        } else if (mssg == "back") {
            slideNumber -= 1
            setSlideNumber(slideNumber)
            if (slideNumber < 0) {
                setSlideNumber(3)
            }
        }
    }
    return (
        <div className='w-full h-auto bg-red-200 overflow-hidden relative'>
            <div className='flex w-full '>
                <img src={slide_imgs[slideNumber]?.image} className='w-full h-full object-cover transition-1000 ' />
            </div>
            <div className='ipad:top-1/3 ipad:w-[30px] ipad:h-[30px] mr-5 absolute top-1/2 w-[50px] h-[40px] flex justify-center items-center bg-white right-0 rounded-full cursor-pointer hover:bg-green-300 duration-300' onClick={() => handleChangeSlide("forward")}>
                🡢
            </div>
            <div className='ipad:top-1/3 ipad:w-[30px] ipad:h-[30px] ml-5 absolute top-1/2 w-[50px] h-[40px] flex justify-center items-center bg-white left-0 rounded-full cursor-pointer hover:bg-green-300 duration-300' onClick={() => handleChangeSlide("back")}>
                🡠
            </div>
        </div>
    )
}

export default Slide