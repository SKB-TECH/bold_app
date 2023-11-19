import {createBrowserRouter} from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import { Home, About, Contact, Team } from '../pages';


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
        ]
    } 
])


export default rootApp;