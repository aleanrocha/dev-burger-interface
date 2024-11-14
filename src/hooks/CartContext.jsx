import { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState({})
  const putProductInCart = (product) => {}
  const clearCart = () => {}
  const deleteProduct = (productId) => {}
  const increaseProduct = (productId) => {}
  const decreaseProduct = (productId) => {}
  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        clearCart,
        deleteProduct,
        increaseProduct,
        decreaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart Must be a valid context ')
  }
  return context
}

CartProvider.propTypes = {
  children: PropTypes.array,
}
