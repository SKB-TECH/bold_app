
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../contexts/UserContext';
import { useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import toast from 'react-hot-toast';
import { removeLocalStorageItem } from '../../utils';

function LayoutDashboard() {
    // @ts-ignore
    const { token, userConnected, setUserConnected } = useUserContext();
    const navigate = useNavigate();

    // useEffect(() => {
    //     setTimeout(() => {
    //         const { exp } = jwtDecode(token);

    //         // @ts-ignore
    //         if (Date.now() >= exp * 1000) {
    //             toast.error('Votre session a expirée !');
    //             removeLocalStorageItem("user");
    //             removeLocalStorageItem("token");
    //             setUserConnected(null);
    //             navigate("/bold/login");
    //         }
    //     }, 3000);
    // });

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