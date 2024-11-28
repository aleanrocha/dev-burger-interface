import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from './config/stripeConfig'
import { GlobalStyles } from './styles/GlobalStyles'

import { router } from './routes'
import { AppProvider } from './hooks'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <GlobalStyles />
      <ToastContainer autoClose={2000} theme="dark" />
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} />
      </Elements>
    </AppProvider>
  </StrictMode>
)
