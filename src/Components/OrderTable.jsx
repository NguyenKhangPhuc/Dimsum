import React, { useContext, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { Container } from '../App';
import OrdersDetail from './OrdersDetail';
function OrderTable() {
    let { orders, setOrders } = useContext(Container)
    let { ordersDetail, setOrdersDetail } = useContext(Container)
    let [isExpanded, setIsExpanded] = useState(false)
    let [filteredOrders, setFilteredOrders] = useState([])
    let [orderTotal, setOrderTotal] = useState(0);
    const handleFilterOrders = (id, total) => {
        //Parameters:
        // -id: the id of the order (not order detail).
        // -total: the total price of that order.

        //Set isExpanded = true to show the order detail.
        //Then filter the orders details base on the id of the chosen order.
        //Set the filteredOrders to the one above.
        //Get the order total
        setIsExpanded(true)
        const filtered = ordersDetail.filter((ele, index) => {
            return ele.cartOwner == id
        })
        filteredOrders = filtered
        setFilteredOrders(filteredOrders)
        console.log(filteredOrders)
        orderTotal = total
        setOrderTotal(orderTotal)
    }
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Mã đơn hàng</TableCell>
                        <TableCell>Người đặt</TableCell>
                        <TableCell>Số điện thoại</TableCell>
                        <TableCell>Địa chỉ</TableCell>
                        <TableCell>Phương thức</TableCell>
                        <TableCell>Tổng số tiền</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders?.map((order) => (
                        <TableRow key={order.id} className='hover:bg-gray-200 cursor-pointer duration-300' onClick={() => handleFilterOrders(order.cartID, order.totalPrice)}>
                            <TableCell>{order.cartID.slice(0, 8)}</TableCell>
                            <TableCell>{order.name}</TableCell>
                            <TableCell>{order.phone}</TableCell>
                            <TableCell>{order.address}</TableCell>
                            <TableCell>{order.pay_method == "credit_card" ? "Thẻ ngân hàng" : "Tiền mặt"}</TableCell>
                            <TableCell>{order.totalPrice.toFixed(3)} VND</TableCell>
                        </TableRow>
                    ))}
                    {isExpanded == true && <OrdersDetail ordersDetail={filteredOrders} totalPrice={orderTotal} setIsExpanded={setIsExpanded} />}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default OrderTable