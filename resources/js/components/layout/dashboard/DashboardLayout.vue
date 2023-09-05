
<template> 
  <main>
    
  <!-- ======= Header ======= -->
  <TopDashboard />
  <!-- End Header -->

<!-- ======= Sidebar ======= -->
    <NavDashboard />
<!-- End Sidebar-->

  <main id="main" class="main"> 
    <router-view></router-view>
  </main><!-- End #main -->

<!-- ======= Footer ======= -->
    <FooterDashboard />
<!-- End Footer -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
 
  </main>
</template>

<script>  
// import "../../../../../public/vendor/bootstrap/js/bootstrap.bundle.min.js";

import NavDashboard from './NavDashboard.vue';
import TopDashboard from './TopDashboard.vue';
import FooterDashboard from './FooterDashboard.vue';
export default {
    components:{
      NavDashboard,
      TopDashboard,
      FooterDashboard
    }
}
</script>

<style lang="css"> 
@import 'https://fonts.gstatic.com';
@import 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i';
@import '@public/vendor/bootstrap/css/bootstrap.min.css';
@import '@public/vendor/bootstrap-icons/bootstrap-icons.css';
@import '@public/vendor/boxicons/css/boxicons.min.css';
@import '@public/vendor/quill/quill.snow.css';
@import '@public/vendor/quill/quill.bubble.css';
@import '@public/vendor/remixicon/remixicon.css';
@import '@public/css/adminstyle.css';
/* @import 'https://anaslawoffice.dakreativ.com/wp-content/plugins/elementskit-lite/widgets/init/assets/css/widget-styles.css?ver=2.9.0'; */
</style>