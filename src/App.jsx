import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Introduction from './Pages/Introduction'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Policy_1 from './Pages/Policy_1'
export const url = "http://localhost:4000/"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/gioi-thieu' element={<Introduction />}></Route>
        <Route path='/lien-he' element={<Contact />}></Route>
        <Route path='/dang-nhap' element={<Login />}></Route>
        <Route path='/dang-ky' element={<Register />}></Route>
        <Route path='/chinh-sach-doi-tra' element={<Policy_1 />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
