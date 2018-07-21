import Vue from 'vue'

Vue.filter('containerState', function(code) {
  if (!code) return ''
  var value = ''
  if ('0' == code) {
    value = '上架准备中'
  } else if ('1' == code) {
    value = '营业中'
  } else if ('2' == code) {
    value = '暂停营业'
  } else if ('3' == code) {
    value = '下架处理'
  }
  return value
})
