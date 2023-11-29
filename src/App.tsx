import { RouterProvider } from 'react-router-dom';
import rootApp from './roots/rooter';
import { Toaster } from 'react-hot-toast';
import AppContexProvider from './contexts/AppContext';


const App = () => {
  return (
    <AppContexProvider>
      <div>
        <RouterProvider router={rootApp} />
        <Toaster />
      </div>
    </AppContexProvider>
  )
}

export default App