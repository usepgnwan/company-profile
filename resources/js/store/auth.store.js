import $http from '../api'

const state = () => ({

})

const mutations = {

}

const actions = {
  login,
  logout
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

function login({ commit }, payload) {
  return new Promise(async (resolve, reject) => {
    try {
      let network = await $http.post('auth/login', payload)
      if(network.data.status){
        localStorage.setItem('access_token', network.data.token)
        localStorage.setItem('name', network.data.data.name)
        commit('_set_token', network.data.token, { root: true })
      }
      resolve(network)
    } catch (e) {
      reject(e)
    }
  })
}
function logout({ commit }) {
  return new Promise(async (resolve, reject) => {
    try {
      let network = await $http.post('auth/logout') 
      if(network.data.status){
        commit('_set_token', null , { root: true })
        localStorage.removeItem('access_token')
        localStorage.removeItem('name')
      }
      resolve(network)
    } catch (e) {
      reject(e)
    }
  })
}