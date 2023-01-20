import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import SingleCate from '../Pages/SingleCate'
import Cart from '../Pages/Cart'
import SingleProd from '../Pages/SingleProd'
import Checkout from '../Pages/Checkout'
import Payment from '../Pages/Payment'
function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' component={<Home />} />
                <Route path='/:item' component={<SingleCate />} />
                <Route path='/SingleCate/:id' component={<SingleProd />} />
                <Route path='/Cart' component={<Cart />} />
                <Route path='/Checkout' component={<Checkout />} />
                <Route path='/Payment' component={<Payment />} />
            </Routes>
        </div>
    )
}

export default AllRoutes