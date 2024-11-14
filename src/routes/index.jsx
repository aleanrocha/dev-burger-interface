import { Navigate, createBrowserRouter } from 'react-router-dom'

import { Login } from '../containers/Login'
import { Register } from '../containers/Register'
import { Home } from '../containers/Home'
import { Menu } from '../containers/Menu'
import { Header } from '../components/Header'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/entrar'} />,
  },
  {
    path: '/home',
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: '/cardapio',
    element: (
      <>
        <Header />
        <Menu />
      </>
    ),
  },
  {
    path: '/entrar',
    element: <Login />,
  },
  {
    path: '/registrar',
    element: <Register />,
  },
])
