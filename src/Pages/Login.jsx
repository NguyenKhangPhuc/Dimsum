import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Explore, Poster } from './Home'
import Footer from '../Components/Footer'
import axios from 'axios'
import { url } from '../App'
import { Container } from '../App'
import { useNavigate } from 'react-router-dom'
import { x_icon } from '../assets'

function Login() {
    //Recieve userID,setUserId from Container in App.jsx
    let { userID, setUserID } = useContext(Container)
    const navigate = useNavigate()
    let [expandRegister, setExpandRegister] = useState(false)
    let [registerEmail, setRegisterEmail] = useState("")
    let [registerPassword, setRegisterPassword] = useState("")
    let [loginEmail, setLoginEmail] = useState("")
    let [loginPassword, setLoginPassword] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const handleRegister = async () => {
        //Check if the input for email and password has been given
        //in the correct way. If yes ==> send the email and password to the back-end server.
        //If message == "Account has been already created" meaning this account is already created.
        //==> alert the user. If not ==> register successfully.
        if (registerEmail == "" || registerPassword == "") {
            alert("Cannot register an emtpy account!")
        } else {
            if (!registerEmail.includes("@gmail.com")) {
                alert("Account need @gmail.com part")
            } else {
                await axios.post(url + "register", { registerEmail, registerPassword })
                    .then((result) => {
                        if (result.data.message == "Account has been already created") {
                            alert("Account with this email has been already created")
                        } else {
                            alert("Create successfully")
                            setExpandRegister(false)
                        }
                    })
                    .catch((err) => console.log(err))
            }
        }

    }

    const handleLogin = async () => {
        //Check if the given email and password are given in the correct way.
        //If yes ==> send them to back-end server.
        //Recieve mssg == "Login successfully" meaning that we are logged in.
        //set the userID of the container to the id that logged in.
        //set the userID in the local storage to current userID then reload.
        //If not ==> Wrong password or email or both.

        if (loginEmail == "" || loginPassword == "") {
            alert("Cannot sign in with empty account")
        } else {
            if (!loginEmail.includes("@gmail.com")) {
                alert("Account need @gmail.com part")
            } else {
                await axios.post(url + "login", { loginEmail, loginPassword })
                    .then((result) => {
                        if (result.data.mssg == "Login successfully") {
                            userID = result?.data.info.userID
                            setUserID(userID)
                            window.localStorage.setItem("userID", userID)
                            window.location.reload()
                        } else {
                            alert("Please check the email or the password.")
                        }
                    })
                    .catch(err => console.log(err))
            }
        }
    }
    return (
        <div>
            <Navbar />
            <div className='ipad:flex-col w-full h-auto bg-gray-200 flex pt-20 pb-20'>
                <div className='ipad:w-full w-1/2 flex justify-center items-center text-[30px] text-green-700 border-r border-dotted border-gray-500 font-bold underline'>Đăng Nhập / Đăng ký</div>
                <div className='ipad:w-full w-1/2 flex flex-col items-center'>

                    <div className='ipad:pt-5 w-5/6 font-bold text-green-700 pb-3'>Đăng nhập bằng:</div>
                    <div className='w-5/6 pb-[45px]'><button className='w-[150px] h-[50px] bg-red-600 rounded-full text-white'>Email</button></div>
                    <div className="w-5/6 pb-4">
                        <input
                            className="w-11/12 h-[50px] focus:outline-none pl-4 bg-gray-300 focus:bg-white border focus:border-gray-400 duration-300"
                            placeholder="Email"
                            onChange={(e) => setLoginEmail(e.target.value)}
                        />
                    </div>

                    <div className="w-5/6 pb-2">
                        <input
                            className="w-11/12 h-[50px] focus:outline-none pl-4 bg-gray-300 focus:bg-white border focus:border-gray-400 duration-300"
                            placeholder="Mật khẩu"
                            type='password'
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                    </div>

                    <div
                        className='w-5/6 text-[12px] pb-5 underline'
                    >
                        <a onClick={() => navigate("/doi-mat-khau")} className='cursor-pointer'>Bạn muốn đổi mật khẩu?</a>
                    </div>

                    <div className='w-5/6 pb-2'>
                        <button
                            className='w-1/3 bg-green-800 h-[50px] text-white hover:bg-red-600 duration-300'
                            onClick={() => handleLogin()}
                        >
                            Đăng nhập
                        </button>
                    </div>

                    {expandRegister == false ?
                        <div className='w-5/6 text-[12px] text-green-700 underline cursor-pointer' onClick={() => setExpandRegister(true)}>Đăng ký?</div>
                        :
                        <div
                            className='rounded-lg p-2 w-[40px] bg-gray-300 hover:bg-green-700 hover:text-white flex items-center justify-center text-[18px] font-light cursor-pointer'
                            onClick={() => setExpandRegister(false)}
                        >
                            <img src={x_icon} className='w-1/2' />
                        </div>
                    }

                    {expandRegister == true &&
                        <div className='w-full flex flex-col items-center pt-5'>
                            <div className='w-5/6 font-bold text-green-700 pb-3'>Đăng ký bằng:</div>
                            <div className='w-5/6 pb-[45px]'><button className='w-[150px] h-[50px] bg-red-600 rounded-full text-white'>Email</button></div>
                            <div className="w-5/6 pb-4">
                                <input
                                    className="w-11/12 h-[50px] focus:outline-none pl-4 bg-gray-300 focus:bg-white border focus:border-gray-400 duration-300"
                                    placeholder="Email"
                                    onChange={(e) => setRegisterEmail(e.target.value)}
                                />
                            </div>
                            <div className="w-5/6 pb-5">
                                <input
                                    className="w-11/12 h-[50px] focus:outline-none pl-4 bg-gray-300 focus:bg-white border focus:border-gray-400 duration-300"
                                    placeholder="Mật khẩu"
                                    type='password'
                                    onChange={(e) => setRegisterPassword(e.target.value)}
                                />
                            </div>
                            <div className='w-5/6 pb-2'>
                                <button
                                    className='w-1/3 bg-green-800 h-[50px] text-white hover:bg-red-600 duration-300'
                                    onClick={() => handleRegister()}
                                >
                                    Đăng ký
                                </button>
                            </div>
                        </div>
                    }

                </div>
            </div>
            <Explore />
            <Poster />
            <Footer />
        </div>
    )
}

export default Login