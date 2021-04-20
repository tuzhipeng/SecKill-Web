import axios from 'axios'
import router from '@/router'

export function request(config) {
  // 创建axios的实例
  const instance = axios.create({
    // baseURL : 'http://123.207.32.32:8000',
    // baseURL : 'http://152.136.185.210:7878/api/m5',
    baseURL : 'http://127.0.0.1:9999/api',
    // baseURL : 'http://47.93.12.71:9999/api',
    // baseURL:'https://result.eolinker.com/lNBWVUu47b7acfa48fd1570f77b90642cba9e01a60b69f5?uri=',
    timeout : 15000
  })

  // 请求拦截
  instance.interceptors.request.use( config => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.headers['Authorization'] = localStorage.getItem('token')
    console.log(config)
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    // config.headers['Authorization'] = localStorage.getItem('token')
    return config
  }, err => {
    console.log(err);
    return Promise.reject(err)
  })

  // 响应拦截
  instance.interceptors.response.use( res => {
    return res.data
  }, err => {
    if (err.response.status === 401) {
      // 未登录，说明token过期或者为空，则跳转至登录界面
      localStorage.removeItem('token');
      router.replace({
        path: '/profile',
        query: {redirect : router.currentRoute.fullPath}
      })
    }

    console.log(err)
    return Promise.reject(err)
  })
  // 发送真正的网络请求
  return instance(config)
}
