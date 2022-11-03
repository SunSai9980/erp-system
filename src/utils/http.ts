import axios  from 'axios'
import { code, message } from '@/types/http'
import { Alert } from 'antd';

const http = axios.create({
  baseURL: 'http://127.0.0.1:5173',
  timeout: 20 * 1000
})

http.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.token = sessionStorage.getItem('token')
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

http.interceptors.response.use((response) => {
  let res = response.data
  let {data, code, msg} = res.data
  const {result, callback} = verify(code)
  if (result) {
    return data || msg
  } else {
    alert({data, msg})
  }
  return data
}, (error) => {
  return Promise.reject(error)
})

// 检查code
const verify = (code: code) => {
  let obj
  const success = [0,1]
  const goLogin = [404, 401]

  if (success.includes(code)) {
    obj = {result: true}
  } else if (goLogin.includes(code)) {
    obj = {result: false, callback: () => {
      // 返回登录页
      }}
  } else {
    obj = { result: false, callback() {} }
  }

  return obj
}

// 提示
const alert = (param: message) => {
  const { msg, data } = param
  Alert(data || msg)
}

export default http
