<template>
        <header id="header" class="fixed-top ">
        <div class="container d-flex align-items-center">

          <h1 class="logo me-auto" v-if="this.contacts.data">
            <img v-if="contacts.data" :src="this.contacts.data.image" alt=""> <router-link to="/"> {{ this.contacts.data.name }}</router-link>
          </h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

          <nav id="navbar" class="navbar">
            <ul>
              <li><router-link class="nav-link scrollto active" router-link to="/">Home</router-link></li>
              <li><a class="nav-link scrollto" href="#services">Services</a></li>
              <li><a class="nav-link scrollto" href="#about">About</a></li>
              <li><a class="nav-link scrollto" href="#benefit">Benefit</a></li>
              <li><a class="nav-link scrollto" href="#projects">Portfolio</a></li>
              <li><a class="nav-link scrollto" href="#price_list">Price</a></li>
              <li><a class="nav-link scrollto" href="#blog">Blog</a></li>
              <li><a class="nav-link scrollto" href="#faq">Faq</a></li>
              <!-- <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li> -->
              <!-- <li><a class="nav-link scrollto" href="#contact">Contact</a></li> -->
              <li><a class="getstarted scrollto" href="#about">Get Started</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav><!-- .navbar -->

        </div>
      </header><!-- End Header -->
</template>

<script>
export default {
name:'Navigation',
props:['contacts'],
mounted(){
  // if($this.isLoading){
    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let $this = this;
    let selectHeader = $this.$selectEvent('#header')
    if (selectHeader) {
          const headerScrolled = () => {
              if (window.scrollY > 100) {
              selectHeader.classList.add('header-scrolled')
              } else {
              selectHeader.classList.remove('header-scrolled')
              }
          }
          window.addEventListener('load', headerScrolled)
          $this.$onscrollEvent(document, headerScrolled)
        }
        $this.$onEvent('click', 'li > .nav-link', function(e) { 
            $this.$selectEvent('.nav-link',true).forEach(e => e.classList.remove("active"));
            this.classList.add("active");
        },true);
        /**
          * Mobile nav toggle
          */ 
        $this.$onEvent('click', '.mobile-nav-toggle', function(e) {
        $this.$selectEvent('#navbar').classList.toggle('navbar-mobile')
          this.classList.toggle('bi-list')
          this.classList.toggle('bi-x')
        })
        /**
          * Mobile nav dropdowns activate
          */
        
        $this.$onEvent('click', '.navbar  .dropdown > a', function(e) {
        console.log(this);
        if ($this.$selectEvent('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault()
            this.nextElementSibling.classList.toggle('dropdown-active')
        }
        }, true);
      }
// }
}
</script>

<style>

</style>