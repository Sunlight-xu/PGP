// 订单管理api
import request from '@/utils/request'
import url from './url'
import store from '@/store'
// 数据结构定义
const data = {
  body: store.getters.user.requestData
}
// 订单查询
export function searchOrder(keyword) {
  const _data = JSON.parse(JSON.stringify(data))
  keyword.memberid = _data.body.header.usercode
  _data.body.body = keyword
  _data.body.body.page = keyword.page
  return request({
    url: url.orders,
    params: _data
  })
}

// 订单详情
export function detailsOrder(keyword) {
  const _data = JSON.parse(JSON.stringify(data))
  _data.body.body = keyword
  return request({
    url: url.orderDetails,
    params: _data
  })
}

