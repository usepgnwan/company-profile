import axios from 'axios';
import store from './store';
axios.defaults.baseURL = 'http://127.0.0.1:8000';
const $axios = axios.create({
  headers: {
    'Accept': 'application/json'
  }
})

$axios.interceptors.request.use(
  function(config) {
    config.url = `/api/${config.url}`
    config.headers.Authorization = `Bearer ${store.state.access_token}`
    return config;
  },
  function(error) {
    return Promise.reject(error)
  }
)

export default $axios;