import { NavbarBlogue, Footer } from '..';
import {Outlet} from 'react-router-dom'

function LayoutBlogue() {
    return (
        <div>
            <NavbarBlogue/>
            <main className="relative overflow-hidden">
            <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default LayoutBlogue;