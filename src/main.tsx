import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AppContexProvider from './contexts/AppContext.tsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContexProvider>
      <App />
      <Toaster />
    </AppContexProvider>
  </React.StrictMode>,
)
