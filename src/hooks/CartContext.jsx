import { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])
  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id)
    let newProductsInCart = [...cartProducts]
    if (cartIndex >= 0) {
      newProductsInCart = newProductsInCart.map((prd) =>
        prd.id === product.id ? { ...prd, quantity: prd.quantity + 1 } : prd
      )
    } else {
      newProductsInCart = [...cartProducts, { ...product, quantity: 1 }]
    }
    setCartProducts(newProductsInCart)
    saveCartToLocalStorage(newProductsInCart)
  }
  const clearCart = () => {
    setCartProducts([])
    localStorage.removeItem('devburger:cartData')
  }
  const deleteProduct = (productId) => {
    const newCart = cartProducts.filter((prd) => prd.id !== productId)
    setCartProducts(newCart)
    saveCartToLocalStorage(newCart)
  }
  const increaseProduct = (productId) => {
    const newCart = cartProducts.map((prd) => {
      return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd
    })
    setCartProducts(newCart)
    saveCartToLocalStorage(newCart)
  }
  const decreaseProduct = (productId) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId)
    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((prd) => {
        return prd.id === productId
          ? { ...prd, quantity: prd.quantity - 1 }
          : prd
      })
      setCartProducts(newCart)
      saveCartToLocalStorage(newCart)
    } else {
      deleteProduct(productId)
    }
  }
  const saveCartToLocalStorage = (cartData) => {
    localStorage.setItem('devburger:cartData', JSON.stringify(cartData))
  }
  useEffect(() => {
    const cartData = localStorage.getItem('devburger:cartData')
    if (cartData) {
      setCartProducts(JSON.parse(cartData))
    }
  }, [])
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
  children: PropTypes.node.isRequired,
}
