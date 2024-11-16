import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import { Header, Footer } from '../../components'

export const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  )
}
