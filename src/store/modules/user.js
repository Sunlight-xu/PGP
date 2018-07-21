import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { Message } from 'element-ui'
const localUser = JSON.parse(sessionStorage.getItem('local.user')) || ''
const user = {
  state: {
    token: getToken(),
    requestData: {
      body: {

      },
      header: {
        askserialno: '',
        dealcode: '',
        logincomcode: '',
        requesttype: '',
        sendtime: '',
        systemcode: 'PC',
        password: localUser.password,
        verificationcode: '',
        logintype: '01',
        usercode: localUser.memberid
      }
    },
    userData: localUser,
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_REQUESTDATA: (state, requestData) => {
      state.requestData.header.password = requestData.password
      state.requestData.header.usercode = requestData.memberid
    },
    SET_USERDATA: (state, userData) => {
      state.userData = userData
      sessionStorage.setItem('local.user', JSON.stringify(userData))
    }
  },

  actions: {
    Login({
      commit
    }, {
      username,
      password
    }) {
      return login(username, password).then(res => {
        if (res.header.ResponseCode === 'M') {
          commit('SET_TOKEN', res.body.logininfo.memberid)
          commit('SET_REQUESTDATA', res.body.logininfo)
          commit('SET_USERDATA', res.body.logininfo)
          // sessionStorage.setItem('local.user', JSON.stringify(res.body.logininfo))
          setToken(res.body.logininfo.memberid)
        } else {
          Message.error('验证失败，请再次登录')
          return false
        }
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data
          commit('SET_ROLES', data.roles)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_REQUESTDATA', '')
        commit('SET_USERDATA', '')
        removeToken()
        sessionStorage.removeItem('local.user')
        resolve()
      })
    }
  }
}

export default user
