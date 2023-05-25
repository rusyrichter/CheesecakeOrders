import React, { useState, useEffect } from 'react';
import axios from 'axios'
import OrderDetails from './OrderDetails'
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";


const Order = () => {

    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [baseFlavor, setbaseFlavor] = useState('');
    const [specialRequest, setSpecialRequests] = useState('');
    const [toppings, setToppings] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [date, setDate] = useState('');


    const onFlavorChange = (e) => {
        setbaseFlavor(e.target.value);
        console.log(baseFlavor);
    }

    const onToppingsChange = e => {

        if (toppings.includes(e.target.name)) {
            setToppings(toppings.filter(t => t !== e.target.name));
        } else {
            setToppings([...toppings, e.target.name]);
        }
    }
    const onSubmitClick = async () => {
        await axios.post('/api/cheesecake/addorder', {
            name,
            email,
            baseFlavor,
            toppings: toppings.join(', '),
            specialRequest,
            quantity,
            date,
            total: getTotal(),
        });
        navigate('/Success');  
    }

    const getTotal = () => {
      return (49.99 + (toppings.length * 3.95)) * quantity;
    }

    const enableButton = !!name && !!email && !!baseFlavor && !!toppings && !!quantity && !!date;

    return (
            <div>
                <div className="container" style={{ marginTop: "80px" }} >
                    <h1 className="text-center my-4">Cheesecake Factory Order Form</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Cheesecake Base Flavor ($49.99)</label>
                                <select value={baseFlavor} className="form-select" onChange={onFlavorChange} name="baseFlavor">
                                    <option> Choose...</option>
                                    <option>Classic</option>
                                    <option>Chocolate</option>
                                    <option>Red Velvet</option>
                                    <option>Brownie</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Toppings (each topping adds an additional $3.95)</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="Chocolate Chips" onChange={onToppingsChange} />
                                    <label className="form-check-label">Chocolate Chips</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="Caramel Drizzle" onChange={onToppingsChange} />
                                    <label className="form-check-label">Caramel Drizzle</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="Whipped Cream" onChange={onToppingsChange} />
                                    <label className="form-check-label">Whipped Cream</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="Pecans" onChange={onToppingsChange} />
                                    <label className="form-check-label">Pecans</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="Almonds" value="Almonds" onChange={onToppingsChange} />
                                    <label className="form-check-label">Almonds</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="Toasted Coconut" onChange={onToppingsChange} />
                                    <label className="form-check-label">Toasted Coconut</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="Graham Cracker Crumble" onChange={onToppingsChange} />
                                    <label className="form-check-label">Graham Cracker Crumble</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="Cookie Dough" onChange={onToppingsChange} />
                                    <label className="form-check-label">Cookie Dough</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="Mint Chocolate Chips" onChange={onToppingsChange} />
                                    <label className="form-check-label">Mint Chocolate Chips</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="Caramelized Bananas" onChange={onToppingsChange} />
                                    <label className="form-check-label">Caramelized Bananas</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="Rainbow Sprinkles" onChange={onToppingsChange} />
                                    <label className="form-check-label">Rainbow Sprinkles</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="Powdered Sugar" onChange={onToppingsChange} />
                                    <label className="form-check-label">Powdered Sugar</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="White Chocolate Shavings" onChange={onToppingsChange} />
                                    <label className="form-check-label">White Chocolate Shavings</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="Peanut Butter Drizzle" onChange={onToppingsChange} />
                                    <label className="form-check-label">Peanut Butter Drizzle</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="Dark Chocolate Drizzle" onChange={onToppingsChange} />
                                    <label className="form-check-label">Dark Chocolate Drizzle</label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className
                                    ="form-label">Special Requests</label>
                                <textarea
                                    className="form-control" rows="3" name="specialRequests" value={specialRequest} onChange={e => setSpecialRequests(e.target.value)}>
                                </textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Quantity</label>
                                <input type="number" className="form-control" min="1" name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Delivery Date</label>
                                <input type="date" className="form-control" value={date} onChange={e => setDate(e.target.value)} name="date" />
                            </div>
                        <button type="submit" className="btn btn-primary" onClick={onSubmitClick} disabled={!enableButton}>Submit Order</button>
                        </div>
                        <div className="col-md-6 position-sticky">
                            <h2 className="mb-4">Live Preview</h2>
                            <div className="card">                              
                                <div className="card-body">
                                    <h5 className="card-title"> {name}'s Custom Cheesecake</h5>
                                    <p className="card-text">Base: {baseFlavor}</p>
                                    <p className="card-text">Toppings: {toppings.join(', ')}</p>
                                    <p className="card-text">Special Requests: {specialRequest}</p>
                                    <p className="card-text">Quantity: {quantity}</p>
                                    <p className="card-text">Delivery Date: {dayjs(date).format("MM/DD/YYYY")}</p>
                                <p className="card-text fw-bold">Total: {getTotal()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
       

    )

}
export default Order;

