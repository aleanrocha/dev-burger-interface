import { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])
  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id == product.id)
    let newProductsInCart = []
    if (cartIndex >= 0) {
      newProductsInCart = cartProducts
      newProductsInCart[cartIndex].quantity++
      setCartProducts(newProductsInCart)
      updateLocalStorage(newProductsInCart)
    } else {
      product.quantity = 1
      newProductsInCart = [...cartProducts, product]
      setCartProducts(newProductsInCart)
    }
  }
  const clearCart = () => {
    localStorage.removeItem('devburger:cartData')
  }
  const deleteProduct = (productId) => {
    const newCart = cartProducts.filter((prd) => prd.id !== productId)
    setCartProducts(newCart)
    updateLocalStorage(newCart)
  }
  const increaseProduct = (productId) => {
    const newCart = cartProducts.map((prd) => {
      return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd
    })
    setCartProducts(newCart)
    updateLocalStorage(newCart)
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
      updateLocalStorage(newCart)
    } else {
      deleteProduct(productId)
    }
  }
  const updateLocalStorage = (cartData) => {
    localStorage.setItem('devburger:cartData', JSON.stringify(cartData))
  }
  useEffect(() => {
    const cartData = localStorage.getItem('devburger:cartData')
    setCartProducts(cartData)
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
  children: PropTypes.array,
}
