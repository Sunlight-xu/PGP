import request from '@/utils/request'
import url from './url'
export function login(name, pass) {
  var data = {
    body: {
      body: {
        accountValue: name,
        password: pass
      },
      header: {
        askSerialNo: '',
        dealCode: '',
        loginComCode: '',
        passWord: '',
        requestType: '',
        sendTime: '',
        systemCode: 'PC',
        userCode: ''
      }
    }
  }
  return request({
    url: url.login,
    params: data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
