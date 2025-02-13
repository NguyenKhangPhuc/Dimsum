import React from 'react'

function Account() {
    return (
        <div onClick={() => window.localStorage.removeItem("userID")}>đăng xuất</div>
    )
}

export default Account