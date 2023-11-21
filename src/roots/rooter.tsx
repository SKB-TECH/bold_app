import {createBrowserRouter} from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import { Home, About, Contact, Programme, Blogue } from '../pages';


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
                element: <Contact/>
            },
            {
                path: '/programme',
                element: <Programme/>
            }
        ]
    } ,
    {
        path:'/blogue',
        element: <Blogue/>
    }
])


export default rootApp;