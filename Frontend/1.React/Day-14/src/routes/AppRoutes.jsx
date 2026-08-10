import React from 'react'
import { Route,Routes } from 'react-router'
import Home from "../Pages/Home";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import ProductDetails from '../Pages/ProductDetails';

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/detail/:id' element={<ProductDetails/>}/>
        </Routes>
    </div>
  )
}

export default AppRoutes