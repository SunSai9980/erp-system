import { MockMethod } from 'vite-plugin-mock'

interface userInfo {
  username: string,
  password: string
}

interface data {
  body: userInfo,
  headers: {},
  query: {},
  url: string
}

const root = {
  username: '袁子涵',
  password: 'sy923621'
}

let mock: MockMethod[] = [
  {
    url: '/api/login',
    method: 'post',
    timeout: 2000,
    response: ({body}: data) =>  {
      if (body.username !== root.username) {
        return {data:{code: 2, data: '用户名错误'}}
      }
      if (body.password !== root.password) {
        return {data:{code: 2, data: '密码错误'}}
      }
      return {data:{code: 0, msg: '登录成功'}}
    }
  }
]


export default mock
