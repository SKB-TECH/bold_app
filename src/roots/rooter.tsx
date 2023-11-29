import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import { Home, About, Contacts, Programme, Blogue, Don, Ready, Dashbord, Login } from '../pages';
import Processus from '../pages/Processus';
import LayoutBlogue from '../components/layouts/LayoutBlogue';
import LayoutDashboard from '../components/layouts/LayoutDashboard';


const rootApp = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            {
                path: '/apropos',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contacts />
            },
            {
                path: '/programme',
                element: <Programme />
            },
            {
                path: '/don',
                element: <Don />
            },
            {
                path: '/process',
                element: <Processus />
            }
        ]
    },
    {
        path: '/',
        element: <LayoutBlogue />,
        children: [
            {
                path: '/blogue',
                element: <Blogue />
            },
            {
                path: '/article/:id',
                element: <Ready />
            }
        ]

    },

    {
        path: '/bold/login',
        element: <Login />
    },
    {
        path: '/bold',
        element: <LayoutDashboard />,
        children: [
            {
                path: '/bold/dashboard',
                element: <Dashbord />
            },
        ]
    }
])

export default rootApp;