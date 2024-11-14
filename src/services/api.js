import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3001'
})

api.interceptors.request.use((config) => {
  const userInfo = localStorage.getItem('devburger:userData')
  const token = userInfo && JSON.parse(userInfo).token
  config.headers.authorization = `bearer ${token}`
  return config
})