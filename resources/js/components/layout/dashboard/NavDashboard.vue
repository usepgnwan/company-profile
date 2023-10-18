<template>
<aside id="sidebar" class="sidebar"> 
  <ul class="sidebar-nav" id="sidebar-nav">
    <li class="nav-item">
      <router-link class="nav-link collapsed alink-click" to="/account/dashboard">
        <i class="bi bi-grid"></i>
        <span>Dashboard</span>
      </router-link>
    </li>
    <!-- End Dashboard Nav -->

    <li class="nav-item">
      <a
        class="nav-link collapsed multi-link"
        data-bs-target="#components-nav"
        data-bs-toggle="collapse"
        href="#"
      >
        <i class="bi bi-menu-button-wide"></i><span>Components</span
        ><i class="bi bi-chevron-down ms-auto"></i>
      </a>
      <ul
        id="components-nav"
        class="nav-content collapse"
        data-bs-parent="#sidebar-nav"
      >
        <li>
          <router-link to="/account/blog" class="alink-click">
            <i class="bi bi-circle"></i><span>Blog</span>
          </router-link>
          <router-link to="/account/service" class="alink-click">
            <i class="bi bi-circle"></i><span>Service</span>
          </router-link>
          <router-link to="/account/benefit" class="alink-click">
            <i class="bi bi-circle"></i><span>Benefit</span>
          </router-link>
          <router-link to="/account/client" class="alink-click">
            <i class="bi bi-circle"></i><span>Client</span>
          </router-link>
          <router-link to="/account/testimoni" class="alink-click">
            <i class="bi bi-circle"></i><span>Testimoni</span>
          </router-link>
          <router-link to="/account/team" class="alink-click">
            <i class="bi bi-circle"></i><span>Teams</span>
          </router-link>
          <router-link to="/account/faq" class="alink-click">
            <i class="bi bi-circle"></i><span>Faq</span>
          </router-link>
          <router-link to="/account/social_media" class="alink-click">
            <i class="bi bi-circle"></i><span>Social Media</span>
          </router-link>
        </li>
      </ul>
    </li>

    <li class="nav-heading">Pages</li>
 
    <li class="nav-item">
      <router-link to="/account/resume" class="nav-link collapsed alink-click" >
        <i class="bi bi-card-list"></i>
        <span>Resume</span>
      </router-link>
    </li>
  </ul>
</aside>
</template>

<script>
import $ from 'jquery';
export default {
  name: "NavDashboard",
  
methods: {
        getSelect(el, all = false){
            // console.log(el)
            el = el.trim()
            if (all) {
                return [...document.querySelectorAll(el)]
            } else {
                return document.querySelector(el)
            }
        }, 
        /**
         * Easy event listener function
         */
        on(type, el, listener, all = false)  {
            if (all) {
                document.querySelector(el, all).forEach(e => e.addEventListener(type, listener))
            } else {
                document.querySelector(el, all).addEventListener(type, listener)
            }
        }
    },
    mounted() { 
        this.on('click', '.toggle-sidebar-btn', function() { 
            document.querySelector('body').classList.toggle('toggle-sidebar')
        }); 
        this.on('click', '.search-bar-toggle', function() {
            document.querySelector('.search-bar').classList.toggle('search-bar-show')
        }); 
         let a = $('.alink-click'); 
        let thisPath =this.$router.currentRoute.path;
        console.log(this.$router.currentRoute.path)
        // if(this.$router.currentRoute._rawValue.href != 'undefined'){
        //   alert('bangsat')
        //   thisPath = this.$router.currentRoute._rawValue.href;
        //   console.log(thisPath)
        // } 
        $.each(a,function(i,val){
          let v =$(val);
          v.removeClass('active');
          if(v.attr("href") == thisPath){
              if(v.closest("li.nav-item").find("a.multi-link") != undefined) {
                v.closest("li.nav-item").find("a.multi-link").removeClass("collapsed").attr("aria-expanded", true)
                v.closest("li.nav-item").find("ul.nav-content ").addClass("show")
              }
              v.addClass('router-link-exact-active');
          }
        }); 
    } 
};
</script>

<style></style>
