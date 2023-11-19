import React, { PropsWithChildren} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import {Outlet} from 'react-router-dom'

function Layout() {
    return (
        <div>
            <Navbar />
            <main className="relative overflow-hidden">
            <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;