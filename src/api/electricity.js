// 发电预测
import request from '@/utils/request'
import {getNowFormatDate} from '@/utils/date'
import url from './url'
import store from '@/store'
const data = store.getters.user.requestData

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
