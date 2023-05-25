import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import Order from './order';
import OrderDetails from './OrderDetails';
import Success from './Success';
import ViewOrders from './ViewOrders'

class App extends React.Component {
    render() {
        return (
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />    
                    <Route exact path='/order' element={<Order />} /> 
                    <Route exact path='/viewOrders' element={<ViewOrders />} />
                    <Route exact path='/Success' element={<Success />} />
                    <Route exact path='/OrderDetails/:id' element={<OrderDetails />} />
                </Routes>
            </Layout>
        );
    }
};

export default App;