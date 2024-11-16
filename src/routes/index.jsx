import { Navigate, createBrowserRouter } from 'react-router-dom'

import { Home, Menu, Cart, Login, Register } from '../containers'
import { Header, Footer } from '../components'

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
        <Footer />
      </>
    ),
  },
  {
    path: '/cardapio',
    element: (
      <>
        <Header />
        <Menu />
        <Footer />
      </>
    ),
  },
  
  {
    path: '/carrinho',
    element: <Cart />,
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
