import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url } from '../App'

function ResetPassword() {
    const navigate = useNavigate()
    let [loginEmail, setLoginEmail] = useState("")
    let [loginPassword, setLoginPassword] = useState("")
    let [changedPassword, setChangedPassword] = useState("")

    const handleChangePassword = async () => {
        //Check if the given email, password, and the changed password are given in the correct way.
        //If yes ==> send them to back-end server.
        //If receive the mssg = "Change password successfully" ==> change successfully.
        //If receive the mssg = "Wrong password" => The given password was wrong.
        //Else ==> Email not found.
        if (loginEmail == "" || loginPassword == "" || changedPassword == "") {
            alert("Please dont leave empty field")
        } else if (!loginEmail.includes("@gmail.com")) {
            alert("Account need @gmail.com part")
        } else {
            await axios.post(url + "change-password", { loginEmail, loginPassword, changedPassword })
                .then((res) => {
                    console.log(res)
                    if (res.data.mssg == "Change password successfully") {
                        alert("Change password successfully")
                        navigate("/dang-nhap")
                    } else if (res.data.mssg == "Wrong password") {
                        alert("Old password was wrong")
                    } else {
                        alert("Email not found")
                    }
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <div>
            <Navbar />
            <div className='ipad:flex-col w-full h-auto bg-gray-200 flex pt-20 pb-20'>
                <div className='ipad:w-full w-1/2 flex justify-center items-center text-[30px] text-green-700 border-r border-dotted border-gray-500 font-bold underline'>Đăng Nhập / Đăng ký</div>
                <div className='ipad:w-full w-1/2 flex flex-col items-center'>

                    <div className='ipad:pt-5 w-5/6 font-bold text-green-700 pb-3'>Đổi mật khẩu:</div>
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
                            placeholder="Mật khẩu cũ"
                            type='password'
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                    </div>

                    <div className="w-5/6 pb-2">
                        <input
                            className="w-11/12 h-[50px] focus:outline-none pl-4 bg-gray-300 focus:bg-white border focus:border-gray-400 duration-300"
                            placeholder="Mật khẩu mới"
                            type='password'
                            onChange={(e) => setChangedPassword(e.target.value)}
                        />
                    </div>

                    <div className='w-5/6 text-[12px] pb-5 underline'><a onClick={() => navigate("/dang-nhap")} className='cursor-pointer'>Đăng nhập?</a></div>

                    <div className='w-5/6 pb-2'>
                        <button
                            className='w-1/3 bg-green-800 h-[50px] text-white hover:bg-red-600 duration-300'
                            onClick={() => handleChangePassword()}
                        >
                            Đổi mật khẩu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword