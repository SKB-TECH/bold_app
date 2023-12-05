
import Navbar from '../Navbar';
import Footer from '../Footer';
import {Outlet} from 'react-router-dom'
import { scrollToTop } from '../../utils/index';
import { FaArrowUp } from 'react-icons/fa';
function Layout() {
    return (
        <div className='relative'>
            <Navbar />
                <main className="relative overflow-hidden">
                    <Outlet />
                </main>
            <Footer />
            <button className='w-10 h-10 rounded-full text-white bg-rouge flex flexCenter fixed right-8  bottom-3 drop-shadow-2xl' onClick={scrollToTop}>
                <FaArrowUp size={15} className="animate-bounce"/>
            </button>
        </div>
    );
}

export default Layout;