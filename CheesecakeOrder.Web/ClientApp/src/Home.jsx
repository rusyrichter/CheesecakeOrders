﻿import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';


const Home = () => {

   
    return (
        <div >
            <div className="container" style={{ marginTop: "80 px" }} >
                <div className="d-flex align-items-center justify-content-center" style={{height: "100vh", backgroundColor: "rgb(238, 238, 238)"}}>
                    <div className="text-center">
                        <h1 className="display-4">Welcome to the Cheesecake Factory</h1>
                        <p className="lead">                       
                            <Link to='/order' className='nav-link text-light'>
                                <button className="btn btn-dark btn-lg">Click here to order your own custom cheesecake</button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;