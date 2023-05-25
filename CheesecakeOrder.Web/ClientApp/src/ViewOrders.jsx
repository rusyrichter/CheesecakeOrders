import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from 'dayjs';
import { Link } from "react-router-dom";





const ViewOrders = () => {
    const [orders, setOrder] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const { data } = await axios.get('/api/cheesecake/getAll')
            setOrder(data);
        }
        getOrders();

    }, []);


    return (
        <div className="d-flex justify-content-center">
            <table className="table text-center shadow-lg" style={{ borderCollapse: 'separate', borderSpacing: '0px 15px', maxWidth: '80%' }}>
                <thead>
                    <tr style={{ backgroundColor: 'rgb(33, 37, 41)', color: 'white', borderRadius: '15px' }}>
                        <th>Name/Email</th>
                        <th>Base Flavor</th>
                        <th>Toppings</th>
                        <th>Special Requests</th>
                        <th>Quantity</th>
                        <th>Delivery Date</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order =>
                        <tr
                            style={{ backgroundColor: 'rgb(248, 249, 250)', borderRadius: '15px' }}
                            key={order.id}>
                            <Link to={`/OrderDetails/${order.id}`} className="btn btn-success btn-lg w-100">
                                <td>
                                    {order.name} - {order.email}
                                </td>
                            </Link>
                            
                            <td>
                                {order.baseFlavor}
                            </td>
                            <td>
                                {order.toppings}
                            </td>
                            <td>
                                {order.specialRequest}
                            </td>
                            <td>
                                {order.quantity}
                            </td>
                            <td>
                                {order.date}
                            </td>
                            <td>
                                {dayjs(order.date).format("MM/DD/YYYY")}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ViewOrders;