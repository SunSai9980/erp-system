import { MockMethod } from 'vite-plugin-mock'

interface userInfo {
  userName: string,
  passWord: string
}
const root = {
  userName: '袁子涵',
  passWord: 'sy923621'
}

let mock: MockMethod[] = [
  {
    url: '/api/login',
    method: 'post',
    timeout: 2000,
    response(data: userInfo) {
      console.log(data)
      if (data.userName === root.userName) {
        return {data:{code: 1, data: '用户名错误'}}
      }
      if (data.passWord === root.passWord) {
        return {data:{code: 1, data: '密码错误'}}
      }
      return {data:{code: 0, msg: '登录成功'}}
    }
  }
]


export default mock
