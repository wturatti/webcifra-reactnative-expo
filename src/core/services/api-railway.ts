import axios from 'axios'

const apiRailWay = axios.create({
  // baseURL: 'https://nest-auth-default-production.up.railway.app/',
  // baseURL: 'http://192.168.1.4:3000/',
  baseURL: 'http://192.168.15.7:3000/',
})

export default apiRailWay
