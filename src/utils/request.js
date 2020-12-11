/**
 * axios request module
 */
import axios from 'axios'

// create a axios object
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn' // request base url
})

// 请求拦截器

// 响应拦截器

// export requst method
export default request
