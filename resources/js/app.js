/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

try {
    require('bootstrap');
} catch (e) {}

import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = 'http://127.0.0.1:8000';
import router from './router' //setting vue roter
import {validationerr, isAlert} from './router/validationerr.js';
import {onEvent, selectEvent,onscrollEvent} from './custom';
// require('./bootstrap');
import store from './store'
window.Vue = require('vue').default; 
Vue.component('ButtonProses', require('./components/ButtonProses.vue').default); 
Vue.component('viewErr', require('./views/404/404View.vue').default); 
 

Object.defineProperty(Vue.prototype, '$axios', { value: axios });
Object.defineProperty(Vue.prototype, '$validation', { value: validationerr });
Object.defineProperty(Vue.prototype, '$isAlert', { value: isAlert });
Object.defineProperty(Vue.prototype, '$baseUrl', { value: 'http://127.0.0.1:8000' });
Object.defineProperty(Vue.prototype, '$onEvent', { value: onEvent });
Object.defineProperty(Vue.prototype, '$selectEvent', { value: selectEvent });
Object.defineProperty(Vue.prototype, '$onscrollEvent', { value: onscrollEvent });
const app = new Vue({
    el: '#app-ug',
    router,
    store,
    mounted() {
        AOS.init()
    },
});
