import React from 'react';
import { RouterProvider } from 'react-router-dom';
import rootApp from './roots/rooter';


const App = () => {
  return (
    <div>
      <RouterProvider router={rootApp} />
    </div>
  )
}

export default App