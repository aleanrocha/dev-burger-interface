import axios from 'axios'

export const api = axios.create({
  //baseURL: 'https://dev-burger-api-v1.onrender.com'
  baseURL: 'http://localhost:3001'
})

api.interceptors.request.use((config) => {
  const userInfo = localStorage.getItem('devburger:userData')
  const token = userInfo && JSON.parse(userInfo).token
  config.headers.authorization = `bearer ${token}`
  return config
})