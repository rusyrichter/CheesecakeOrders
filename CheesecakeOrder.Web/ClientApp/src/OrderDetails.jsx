
import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
    const [order, setOrder] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getOrderbyId = async () => {
            const { data } = await axios.get(`/api/Cheesecake/getbyId?id=${id}`);
            setOrder(data);
        }
        getOrderbyId();

    }, []);
   
    return (
          
            <div className="container" style={{ marginTop: '80px' }}>
                <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
                    <div className="card text-center shadow p-3 mb-5 bg-body rounded" style={{ width: '30rem', backgroundColor: 'rgb(248, 249, 250)' }}>
                        <div className="card-body">
                        <h3 className="card-title fw-bold">{order.name}</h3>
                        <p className="card-text fs-5">{order.email}</p>
                        <p className="card-text fs-5">{order.baseFlavor}</p>
                        <p className="card-text fs-5">{order.toppings}</p>
                        <p className="card-text fs-5">{order.specialRequest}</p>
                        <p className="card-text fs-5">{order.quantity}</p>
                        <p className="card-text fs-5">{order.date}</p>
                        <p className="card-text fs-5">{order.total}</p>
                        </div>
                        
                    <Link to={"/ViewOrders"} >
                        <button className="btn btn-primary w-100">Back to Orders</button>
                    </Link>
                    </div>
                </div>
            </div>
        );
    }

    export default OrderDetails;





  