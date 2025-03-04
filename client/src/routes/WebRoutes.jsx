import React from 'react';
import ScrollOnTop from '../utils/ScrollOnTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Content from '../components/Content';
import AboutPage from '../pages/AboutPage';
import Shop from '../pages/Shop';
import ContactPage from '../pages/ContactPage';
import Cart from '../pages/Cart';
import CheckoutPage from '../pages/CheckoutPage';

const WebRoutes = () => {
    return (
        <Router>
            <ScrollOnTop />
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Content />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/checkout' element={<CheckoutPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default WebRoutes;