// 公共api
import request from '@/utils/request'
import url from './url'
import store from '@/store'
// 数据结构定义
const data = {
  body: store.getters.user.requestData
}
// 省市县查询
export function getArea(keyword) {
  const _data = JSON.parse(JSON.stringify(data))
  _data.body.body = keyword
  return request({
    url: url.area,
    params: _data
  })
}

// 坐标查询
export function searchCoordinate() {
  const _data = JSON.parse(JSON.stringify(data))
  _data.body.body = { strIP: '' }
  return request({
    url: url.coordinate,
    params: _data
  })
}

// 货柜下拉查询
export function searchPcLstContainers() {
  const _data = JSON.parse(JSON.stringify(data))
  _data.body.body = { memberid: _data.body.header.usercode }
  return request({
    url: url.selectPcLstContainers,
    params: _data
  })
}
