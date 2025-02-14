import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Introduction from './Pages/Introduction'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Policy_1 from './Pages/Policy_1'
import Policy_2 from './Pages/Policy_2'
import Policy_3 from './Pages/Policy_3'
import { createContext } from 'react'
export const Container = createContext()
export const url = "http://localhost:4000/"
import { useEffect } from 'react'
import Account from './Pages/Account'
import axios from 'axios'
import Menu_2 from './Pages/Menu_2'


function App() {
  let [totalPrice, setTotalPrice] = useState(0)
  let [userID, setUserID] = useState(null)
  let [cart, setCart] = useState([])

  useEffect(() => {
    userID = window.localStorage.getItem("userID")
    setUserID(userID)
    console.log(userID)

    if (userID) {
      axios.post(url + "get-cart", { userID })
        .then((result) => {
          console.log(result)
          if (result.data.mssg == "get successfully") {
            cart = result.data.info
            setCart(cart)
            console.log(cart)
            for (var i = 0; i < cart.length; i++) {
              totalPrice += parseFloat(cart[i].price)
              setTotalPrice(totalPrice)
            }
          }
        })
        .catch((err) => console.log(err))
    }
  }, [])

  return (
    <Container.Provider value={{ userID, setUserID, cart, setCart, totalPrice, setTotalPrice }}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/gioi-thieu' element={<Introduction />}></Route>
          <Route path='/lien-he' element={<Contact />}></Route>
          <Route path='/dang-nhap' element={userID ? <Account /> : <Login />}></Route>
          <Route path='/chinh-sach-doi-tra' element={<Policy_1 />}></Route>
          <Route path='/chinh-sach-bao-mat' element={<Policy_2 />}></Route>
          <Route path='/dieu-khoan-dich-vu' element={<Policy_3 />}></Route>
          <Route path='/san-pham' element={<Menu_2 />}></Route>
        </Routes>
      </BrowserRouter>
    </Container.Provider>
  )
}

export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null;
}

export default App
