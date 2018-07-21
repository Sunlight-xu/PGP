import axios from 'axios'
import { Message, Loading } from 'element-ui'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(config => {
  // Loading.service({
  //   lock: true,
  //   text: 'Loading',
  //   spinner: 'el-icon-loading',
  //   background: 'rgba(0, 0, 0, 0.7)'
  // })
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
  /**
  * code为非200是抛错 可结合自己业务进行修改
  */
    // Loading.service().close()
    const code = response.status
    if (code !== 200) {
      Message.error('请求失败,请检查网络问题')
    } else {
      if (response.data.header.responseCode == 'M') {
        return response.data
      } else {
        Message.error('请求失败,请联系管理员')
        // return response.data
      }
    }
  },
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    // Loading.service().close()
    return Promise.reject(error)
  }
)

export default service
