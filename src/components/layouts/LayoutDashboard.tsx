
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../contexts/UserContext';
import { useEffect } from 'react';

function LayoutDashboard() {
    // @ts-ignore
    const { userConnected} = useUserContext();
    const navigate = useNavigate();



    useEffect(() => {
        if (userConnected == null || userConnected == undefined)
            navigate('/bold/login');
    }, [navigate, userConnected]);

    useEffect(() => {
        if (userConnected == null || userConnected == undefined)
            navigate('/bold/login');
    }, [navigate, userConnected])

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

export default LayoutDashboard;