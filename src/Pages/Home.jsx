import React from 'react'
import Navbar from '../Components/Navbar'
import { useState } from 'react'
import axios from 'axios'
import Slide from '../Components/Slide'
import Menu from '../Components/Menu'
function Home() {
    return (
        <div className=''>
            <Navbar />
            <Slide />
            <Menu />
        </div>
    )
}

export default Home