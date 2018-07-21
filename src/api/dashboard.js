// 主页面api
import request from '@/utils/request'
import {getNowFormatDate1,getNowFormatDate} from '@/utils/date'
import url from './url'
import store from '@/store'
// 数据结构定义
const data = store.getters.user.requestData

// 3d拓补图
export function topological(keyword) {
  const _data = JSON.parse(JSON.stringify(data))
  _data.body = {
    datetime:getNowFormatDate1()
  }
  return request({
    url: url.topological,
    method: 'post',
    data: _data
  })
}
// 实时天气
export function weatherlive(keyword) {
  const _data = JSON.parse(JSON.stringify(data))
  _data.body = {
    datetime:getNowFormatDate1()
  }
  return request({
    url: url.weatherlive,
    method: 'post',
    data: _data
  })
}
// 辐照度
export function radiance(keyword) {
  const _data = JSON.parse(JSON.stringify(data))
  _data.body = {
    datetime:getNowFormatDate1()
  }
  return request({
    url: url.radiance,
    method: 'post',
    data: _data
  })
}
// 功率曲线
export function powercurve(keyword) {
  const _data = JSON.parse(JSON.stringify(data))
  _data.body = {
    datetime:getNowFormatDate1()
  }
  return request({
    url: url.powercurve,
    method: 'post',
    data: _data
  })
}

// 发电预测 4小时  24小时  72小时  7天预测数据
export function generationforecast(keyword) {
  const _data = JSON.parse(JSON.stringify(data))
  _data.body = {
    datetime:getNowFormatDate()
  }
  console.log(url.generationforecast)
  return request({
    url: url.generationforecast,
    method: 'post',
    data: _data
  })
}

// 微气象
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

// 气象预测
export function weatherforecast(keyword) {
  const _data = JSON.parse(JSON.stringify(data))
  _data.body = {
    datetime:getNowFormatDate1(),
    type:keyword
  }
  return request({
    url: url.weatherforecast,
    method: 'post',
    data: _data
  })
}

