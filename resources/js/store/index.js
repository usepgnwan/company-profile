import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth.store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    access_token: localStorage.getItem('access_token')
  },
  mutations: {
    _set_token(state, payload) {
      state.access_token = payload
    }
  },
  actions: {
  },
  getters: {
    isAuth: state => {
      if(state.access_token != "" && state.access_token != null || state.access_token != undefined ) {
        return true
      }
      return false
    }
  },
  modules: {
    auth
  }
})