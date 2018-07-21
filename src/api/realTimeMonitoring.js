// 实时监测api
import request from '@/utils/request'
import {getNowFormatDate1} from '@/utils/date'
import url from './url'
import store from '@/store'
// 数据结构定义
const data = {
  body: store.getters.user.requestData
}
// 拓补图
export function topology(keyword) {
  const _data = JSON.parse(JSON.stringify(data))
  _data.body = {
    datetime:getNowFormatDate1()
  }
  return request({
    url: url.topology,
    method: 'post',
    data: _data
  })
}
// 设备状态
export function devicestatus(keyword) {
  const _data = JSON.parse(JSON.stringify(data))
  _data.body = {
    datetime:getNowFormatDate1()
  }
  return request({
    url: url.devicestatus,
    method: 'post',
    data: _data
  })
}
// 天气
export function weathercurve(keyword) {
  const _data = JSON.parse(JSON.stringify(data))
  _data.body = {
    datetime:getNowFormatDate1(),
    type:keyword
  }
  return request({
    url: url.weathercurve,
    method: 'post',
    data: _data
  })
}
// 功率曲线
export function realtimepower(keyword) {
  const _data = JSON.parse(JSON.stringify(data))
  _data.body = {
    datetime:getNowFormatDate1()
  }
  return request({
    url: url.realtimepower,
    method: 'post',
    data: _data
  })
}

