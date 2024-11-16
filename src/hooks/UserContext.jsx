import PropTypes from 'prop-types'

import { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({})
  const putUserData = (userData) => {
    setUserInfo(userData)
    localStorage.setItem('devburger:userData', JSON.stringify(userData))
  }
  const logout = () => {
    setUserInfo([])
    localStorage.removeItem('devburger:userData')
  }
  useEffect(() => {
    const userDataLocalStorage = JSON.parse(
      localStorage.getItem('devburger:userData')
    )
    setUserInfo(userDataLocalStorage)
  }, [])
  return (
    <UserContext.Provider value={{ userInfo, logout, putUserData }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be a valid context')
  }
  return context
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
