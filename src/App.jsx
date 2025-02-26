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
import Menu_2 from './Pages/Menu_2'
import Payment from './Pages/Payment'
import Account from './Pages/Account'
import ResetPassword from './Pages/ResetPassword'
import { createContext } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
export const Container = createContext()
export const url = import.meta.env.MODE === "development" ? "http://localhost:5000/" : "/";

function App() {

  let [totalPrice, setTotalPrice] = useState(0)
  let [userID, setUserID] = useState(null)
  let [cart, setCart] = useState([])
  let [userEmail, setUserEmail] = useState("")
  let [orders, setOrders] = useState(null)
  let [ordersDetail, setOrderDetail] = useState(null)

  useEffect(() => {
    // Using useEffect to get the ID if the user signed in before.
    // If there are the userID ===> 1. Get the user cart and send it with useContext
    // 2. Calculate the total price of the cart using a loop over it, then send it with useContext
    // 3. Get the user email and send it to the with useContext.
    // 4. Get the previous orders and its detail then send it with useContext
    userID = window.localStorage.getItem("userID")
    setUserID(userID)
    console.log(userID)
    //------------------------------------------
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
      //------------------------------------------
      axios.post(url + "get-user", { userID })
        .then((result) => {
          if (result.data.mssg == "get user successfully") {
            setUserEmail(result.data.email)
            console.log(result)
          }
        })
        .catch((err) => console.log(err))
      //------------------------------------------
      axios.post(url + "get-orders", { userID })
        .then((result) => {
          if (result.data.mssg == "get orders successfully") {
            orders = result.data.orders
            setOrders(orders)
            ordersDetail = result.data.ordersDetail
            setOrderDetail(ordersDetail)
            console.log(result)
          }
        })
        .catch(err => console.log(err))
    }
  }, [])

  return (
    <Container.Provider value=
      {
        {
          userID,
          setUserID,
          cart,
          setCart,
          totalPrice,
          setTotalPrice,
          userEmail,
          setUserEmail,
          orders,
          setOrders,
          ordersDetail,
          setOrderDetail,
        }
      }
    >
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
          <Route path='/thanh-toan' element={<Payment />}></Route>
          <Route path='/doi-mat-khau' element={<ResetPassword />}></Route>
        </Routes>
      </BrowserRouter>
    </Container.Provider>
  )
}

export const ScrollToTop = () => {
  //This component will scroll to top each time the pathname or the location change!
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null;
}

export default App
