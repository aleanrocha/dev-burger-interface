import { Navigate, createBrowserRouter } from 'react-router-dom'

import { Home, Menu, Cart, Login, Register } from '../containers'
import { Layout } from '../containers/layout'
import { PrivateRoute } from './PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/',
        element: <Navigate to={'/home'} />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/cardapio',
        element: <Menu />,
      },
      {
        path: '/carrinho',
        element: <Cart />,
      },
    ],
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
