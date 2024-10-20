import { Navigate, createBrowserRouter } from 'react-router-dom'

import { Login } from '../containers/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/login'} />
  },
  {
    path: '/login',
    element: <Login />
  }
]) 