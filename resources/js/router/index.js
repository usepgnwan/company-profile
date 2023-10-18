import Vue from 'vue'
import VueRouter from 'vue-router' 
import VueNprogress from 'vue-nprogress';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);
Vue.use(BootstrapVue) 
Vue.use(BootstrapVueIcons) 
Vue.use(VueRouter)
Vue.use(VueNprogress)
Vue.use(NProgress)
Vue.use(VueToast)

const page = (path) => import(`../views/${path}.vue`);

const routes = [ 
                {
                  path: '*',
                  name : "404",
                  component: () => page('404/404View'),
                },
                {
                  path: '/',
                  name : "/",
                  component: () => import (`../views/Front/Front.vue`),
                  children:[
                    {
                        path: '/',
                        name: 'front',
                        component: () => page('Front/Main'),
                    },
                    ,
                    {
                        path: '/blogs',
                        name : "blogs",
                        component: () => page('Front/Blogs'),
                    },
                    {
                        path: '/blog/:id?',
                        name : "blog",
                        component: () => page('Front/Blog'),
                    },
                  ]
                }, 
                {
                  path: '/login',
                  name: 'login',
                  component: () =>
                      import (`../components/layout/login/Loginlayout.vue`)
                },
                {
                  path: '/account',
                  name: 'account',
                  component: () =>  import (`../components/layout/dashboard/DashboardLayout.vue`),
                  children: [{
                          path: 'dashboard',
                          name: 'dashboard',
                          component: () => page('Home')
                      },
                      {
                          path: 'about',
                          name: 'about',
                          component: () => page('AboutView')
                      },
                      {
                          path: 'blog',
                          name: 'account/blog',
                          component: () => page('Blog/BlogView'),
                      },
                      {
                          path: 'blog/form/:id?',
                          name: 'account/blog/form',
                          component: () => page('Blog/BlogForm'),
                      },
                      {
                          path: 'service',
                          name: 'service',
                          component: () => page('Service/Service'),
                      },
                      {
                          path: 'service/form/:id?',
                          name: 'service/form',
                          component: () => page('Service/ServiceForm'),
                      },
                      {
                          path: 'benefit',
                          name: 'benefit',
                          component: () => page('Benefit/Benefit'),
                      },
                      {
                          path: 'benefit/form/:id?',
                          name: 'benefit/form',
                          component: () => page('Benefit/BenefitForm'),
                      },
                      {
                          path: 'testimoni',
                          name: 'testimoni',
                          component: () => page('Testimoni/Testimoni'),
                      },
                      {
                          path: 'testimoni/form/:id?',
                          name: 'testimoni/form',
                          component: () => page('Testimoni/TestimoniForm'),
                      },
                      {
                          path: 'faq',
                          name: 'faq',
                          component: () => page('Faq/Faq'),
                      },
                      {
                          path: 'faq/form/:id?',
                          name: 'faq/form',
                          component: () => page('Faq/FaqForm'),
                      },
                      {
                          path: 'client',
                          name: 'client',
                          component: () => page('Client/Client'),
                      },
                      {
                          path: 'client/form/:id?',
                          name: 'client/form',
                          component: () => page('Client/ClientForm'),
                      },
                      {
                          path: 'team',
                          name: 'team',
                          component: () => page('Team/Team'),
                      },
                      {
                          path: 'team/form/:id?',
                          name: 'team/form',
                          component: () => page('Team/TeamForm'),
                      },
                      {
                        path: 'social_media',
                        name: 'social_media',
                        component: () => page('SocialMedia/SocialMedia'),
                    },
                    {
                        path: 'resume',
                        name: 'resume',
                        component: () => page('Resume/Resume'),
                    }, 
                  ]
                }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})
export default router