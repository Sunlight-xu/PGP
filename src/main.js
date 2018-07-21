import 'babel-polyfill'
import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'

import '@/styles/index.scss' // global css
import '@/assets/icon/styleFont.css';


import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control
import '@/utils/filter' // 过滤器
// import Toast from './components/message/index.js'
// import CircleMenu from 'vue-circle-menu'
// Vue.component('CircleMenu', CircleMenu)
Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
