import axios from 'axios'
import qs from 'qs'
const req = axios.create({
  baseURL:'http://172.16.14.73:666',
  // baseURL:'http://192.168.43.8:666',
  timeout:10000
})
export const IP = 'http://172.16.14.73:666' //服务器
// export const IP = 'http://192.168.43.8:666' //服务器
// php后台必须把post参数使用qs转换一次才可以接收到，否则不接受参数
// 登录接口函数：参数acc：用户名  pwd：密码
export function login(acc,pwd){
 return req.post('./login.php',qs.stringify({acc,pwd}))
}
export function gethouselist(){
  return req.get('./gethouselist.php')
 }
 export function reg(acc,pwd){
  return req.post('./reg.php',qs.stringify({acc,pwd}))
 }
 export function valitecode(){
  return req.get('./valitecode.php')
 }