import PropTypes from 'prop-types'

import { UserProvider } from './UserContext'
import { CartProvider } from './CartContext'

export const AppProvider = ({ children }) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.array,
}
