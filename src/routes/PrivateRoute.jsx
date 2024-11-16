import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { paths } from '../constants/paths'

const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem('devburger:userData'))
  if (!user || !user.token) {
    return false
  }
  const token = user.token
  try {
    // 1 - Decodifica o token para acessar o payload (dados)
    const decodedToken = JSON.parse(atob(token.split('.')[1]))
    // 2 - Verifica se o token expirou
    // 2/1 - converte exp de minutos para milissegundos
    // 2/2 - multiplica pela data atual em millissegundos
    const isExpired = decodedToken.exp * 1000 < Date.now()
    // 3 - Se o token expirou, retorna false
    if (isExpired) {
      return false
    }
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    // 4 - Se ocorrer um erro (por exemplo, na decodificação), o token é inválido
    return false
  }
  // 5 Se o token não expirou, retorna true
  return true
}

export const PrivateRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to={paths.Login} />
  }
  return children
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
}
