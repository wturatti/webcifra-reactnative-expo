import axios from 'axios'

const api = axios.create({
  baseURL: 'http://siao.webcifra.com.br/index.php?r=',
})

export default api
