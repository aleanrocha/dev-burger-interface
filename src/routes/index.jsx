import { Navigate, createBrowserRouter } from 'react-router-dom'

import { Login } from '../containers/Login'
import { Register } from '../containers/Register'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/entrar'} />
  },
  {
    path: '/entrar',
    element: <Login />
  },
  {
    path: '/registrar',
    element: <Register />
  }
]) 