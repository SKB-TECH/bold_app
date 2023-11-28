import { NavbarBlogue, Footer, HomeSectionFive} from '..';
import {Outlet} from 'react-router-dom'

function LayoutBlogue() {
    return (
        <div>
            <NavbarBlogue/>
            <main className="relative overflow-hidden">
            <Outlet />
            </main>
            <HomeSectionFive/>
            <Footer />
        </div>
    );
}

export default LayoutBlogue;