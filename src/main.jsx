import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ToastContainer } from 'react-toastify'
import { GlobalStyles } from './styles/GlobalStyles'

import { Login } from './containers/Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Login />
    <ToastContainer autoClose={2000} theme='dark' />
  </StrictMode>
)
