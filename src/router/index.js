import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'index',
      component: () => import('@/views/dashboard/index'),
      name: '主页面',
      meta: { title: '主页面', icon: 'home', noCache: true }
    }]
  },

  {
    path: '/realTimeMonitoring',
    component: Layout,
    redirect: '/realTimeMonitoring/index',
    alwaysShow: false,
    children: [
      {
        path: 'index',
        name: '实时监测',
        component: () => import('@/views/realTimeMonitoring/index'),
        meta: { title: '实时监测', icon: 'jc', noCache: true }
      }
    ]
  },

  // {
  //   path: '/weatherForecast',
  //   component: Layout,
  //   redirect: '/weatherForecast/index',
  //   meta: {
  //     title: '气象预报',
  //     icon: 'weather'
  //   },
  //   children: [{
  //     path: 'index',
  //     component: () => import('@/views/weatherForecast/index'),
  //     name: '辐照度',
  //     meta: { title: '辐照度', noCache: true }
  //   },{
  //     path: 'temperature',
  //     component: () => import('@/views/weatherForecast/temperature'),
  //     name: '气温',
  //     meta: { title: '气温', noCache: true }
  //   },
  //     {
  //       path: 'speedAndDirection',
  //       component: () => import('@/views/weatherForecast/wind'),
  //       name: '风速/风向',
  //       meta: { title: '风速/风向', noCache: true }
  //     },{
  //       path: 'humidity',
  //       component: () => import('@/views/weatherForecast/humidity'),
  //       name: '相对湿度',
  //       meta: { title: '相对湿度', noCache: true }
  //     },{
  //       path: 'pressure',
  //       component: () => import('@/views/weatherForecast/pressure'),
  //       name: '气压',
  //       meta: { title: '气压', noCache: true }
  //     },{
  //       path: 'precipitation',
  //       component: () => import('@/views/weatherForecast/water'),
  //       name: '降水量',
  //       meta: { title: '降水量', noCache: true }
  //     },{
  //       path: 'cloud',
  //       component: () => import('@/views/weatherForecast/cloud'),
  //       name: '云高/云量',
  //       meta: { title: '云高/云量', noCache: true }
  //     }]
  // },

  {
    path: '/electricity',
    component: Layout,
    redirect: '/electricity/index',
    children: [{
      path: 'index',
      component: () => import('@/views/electricity/index'),
      name: '发电预测',
      meta: { title: '发电预测', icon: 'fadian', noCache: true }
    }]
  },

  {
    path: '/powerStationManagement',
    component: Layout,
    redirect: '/powerStationManagement/index',
    meta: { title: '电站管理', icon: 'cog' },
    children: [{
      path: 'index',
      component: () => import('@/views/powerStationManagement/index'),
      name: '基础信息',
      meta: { title: '基础信息'}
    },
      {
        path: 'index',
        hidden: true,
        component: () => import('@/views/powerStationManagement/index'),
        name: '电站管理',
        meta: { title: '电站管理' }
      }
    ]
  },
  {
    path: '/plan',
    component: Layout,
    redirect: '/plan/index',
    children: [{
      path: 'index',
      component: () => import('@/views/plan/index'),
      name: '检修计划',
      meta: { title: '检修计划', icon: 'home', noCache: true }
    }]
  },

  { path: '*', redirect: '/404', hidden: true },

  {
    path: '/demo',
    component: Layout,
    redirect: '/demo',
    children: [{
      path: 'index',
      component: () => import('@/views/demo/index'),
      name: '测试',
      meta: { title: '测试', icon: 'home', noCache: true }
    }]
  },
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

