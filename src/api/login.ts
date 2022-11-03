import http from '@utils/http'
import { userInfo } from '@/types/login'

export function getLogin(data: userInfo) {
 return http({
   url: '/api/login',
   method: 'POST',
   data
 })
}
