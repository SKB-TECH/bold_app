import {createBrowserRouter} from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import { Home, About, Contacts, Programme, Blogue, Don } from '../pages';
import Processus from '../pages/Processus';
import LayoutBlogue from '../components/layouts/LayoutBlogue';


const rootApp=createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            
            {
                path: '/apropos',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contacts/>
            },
            {
                path: '/programme',
                element: <Programme/>
            },
            {
                path: '/don',
                element: <Don />
            },
            {
                path: '/process',
                element: <Processus/>
            }
        ]
    } ,
    {
        path:'/blogue',
        element: <LayoutBlogue/>,
        children: [
            {
                path: '/blogue',
                element: <Blogue/>
            }
        ]
        
    }
])


export default rootApp;