import { Navigate, createBrowserRouter } from 'react-router-dom'

import { Home, Menu, Cart, Login, Register } from '../containers'
import { Layout } from '../containers/layout'
import { paths } from '../constants/paths'
import { PrivateRoute } from './PrivateRoute'

export const router = createBrowserRouter([
  {
    path: paths.Index,
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: paths.Index,
        element: <Navigate to={paths.Home} />,
      },
      {
        path: paths.Home,
        element: <Home />,
      },
      {
        path: paths.Menu,
        element: <Menu />,
      },
      {
        path: paths.Cart,
        element: <Cart />,
      },
    ],
  },
  {
    path: paths.Login,
    element: <Login />,
  },
  {
    path: paths.Register,
    element: <Register />,
  },
])
