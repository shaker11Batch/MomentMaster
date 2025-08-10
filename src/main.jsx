import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';

import { RouterProvider } from 'react-router'
import { router } from './router/Router.jsx'
import AuthProvider from './Context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>

  </StrictMode>,
)
