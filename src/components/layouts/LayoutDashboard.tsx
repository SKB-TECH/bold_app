import { Outlet, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../contexts/UserContext';
import { useEffect } from 'react';
import {SidebarDash } from '..';

function LayoutDashboard() {
    // @ts-ignore
    const { userConnected} = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (userConnected === null || userConnected === undefined)
            navigate('/bold/login');
    }, [navigate, userConnected]);

    useEffect(() => {
        if (userConnected === null || userConnected === undefined)
            navigate('/bold/login');
    }, [navigate, userConnected])

    return (
        <div>
         {/* <NavbarDash /> */}
            <SidebarDash/>
           
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default LayoutDashboard;