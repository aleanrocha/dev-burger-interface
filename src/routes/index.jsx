import { Navigate, createBrowserRouter } from 'react-router-dom'

import { Login } from '../containers/Login'
import { Register } from '../containers/Register'
import { Home } from '../containers/Home'
import { Menu } from '../containers/Menu'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/entrar'} />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/cardapio',
    element: <Menu />
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