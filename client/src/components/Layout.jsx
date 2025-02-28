import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div id="app" style={{ height: "100%", overflow: "hidden" }}>
            <Navbar />
            <main id='content'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;