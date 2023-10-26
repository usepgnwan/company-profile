<template>
  <div class="container">

    <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

            <div class="d-flex justify-content-center py-4">
              <a href="index.html" class="logo d-flex align-items-center w-auto">
                <!-- <img v-if="contacts.data" :src="this.contacts.data.image" alt=""> <router-link to="/"> </router-link>
                <span class="d-none d-lg-block">NiceAdmin</span> -->
              </a>
            </div><!-- End Logo -->

            <div class="card mb-3">

              <div class="card-body">

                <div class="pt-4 pb-2" v-if="contacts.data">
                  <h5 class="card-title text-center pb-0 fs-4"><img v-if="contacts.data" :src="this.contacts.data.image" alt=""></h5>
                  <p class="text-center small">Welcome {{ this.contacts.data.name }} <br>Login to Your Account</p>
                </div>

                <form class="row g-3 needs-validation" novalidate @submit.prevent="_login">

                  <div class="col-12">
                    <label for="yourUsername" class="form-label">Email</label>
                      <input type="text" name="email" class="form-control" v-model="data.email"  :class="`${ jsonResp.email ? 'is-invalid' : ''}`">
                      <div class="vinvalid-feedback text-danger" v-if="jsonResp.email">
                        {{ jsonResp.email }}
                      </div> 
                  </div>

                  <div class="col-12">
                    <label for="yourPassword" class="form-label">Password</label>
                    <input type="password" name="password" class="form-control" v-model="data.password" id="yourPassword" :class="`${ jsonResp.password ? 'is-invalid' : ''}`">
                    <div class="vinvalid-feedback text-danger" v-if="jsonResp.password">
                        {{ jsonResp.password }}
                    </div>
                  </div>

                  <!-- <div class="col-12">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe">
                      <label class="form-check-label" for="rememberMe">Remember me</label>
                    </div>
                  </div> -->
                  <div class="col-12">
                    <button  class="btn btn-primary w-100" type="submit" >Login</button>
                  </div>
                  <!-- <div class="col-12">
                    <p class="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
                  </div> -->
                </form>

              </div>
            </div>

            <!-- <div class="credits"> -->
              <!-- All the links in the footer should remain intact. -->
              <!-- You can delete the links only if you purchased the pro version. -->
              <!-- Licensing information: https://bootstrapmade.com/license/ -->
              <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
              <!-- Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> -->
            <!-- </div> -->

          </div>
        </div>
      </div>

    </section>

  </div>
</template>

<script>
import { mapGetters,  mapActions } from 'vuex'
export default {
    name:"LoginLayout",
    data(){
        return{
          contacts: [],
          data:{},
          jsonResp : {
            email :"",
            password : "", 
          },
        }
    },
    mounted(){ 
      this.$axios.get('/api/social_media').then((response) => {this.contacts = response.data;}).catch ((err) => {console.log(err)});
    },
    computed: {
      ...mapGetters(['isAuth']),
    },
    methods: {
      ...mapActions('auth', ['login']),
      async _login() {
        try {
          let resp = await this.login(this.data)
          if(!resp.data.status){
            this.$validation(resp.data.message,this.jsonResp)
          }else{
            this.$router.replace({ name: 'dashboard' })
          }
        } catch (e) {
          console.log(e)
        }
      }
    },
    // created() {
    //   if(this.isAuth) {
    //     this.$router.replace({ name: 'dashboard' })
    //   }
    // }
}
</script>

<style>
@import '../../../../../public/vendor/bootstrap/css/bootstrap.min.css';
@import '../../../../../public/vendor/bootstrap-icons/bootstrap-icons.css';
@import '../../../../../public/vendor/boxicons/css/boxicons.min.css';
@import '../../../../../public/css/adminstyle.css';
</style>