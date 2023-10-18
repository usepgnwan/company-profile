<template>
   <!-- ======= Footer ======= -->
   <footer id="footer-front">  
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-contact">
            <h3 v-if="this.contacts.data">{{ this.contacts.data.name }}</h3>
            <p v-if="this.contacts.data"> {{ this.contacts.data.alamat }}<br><br>
              <strong v-if="this.contacts.data">Phone:</strong> {{ this.contacts.data.wa }}<br>
              <strong v-if="this.contacts.data">Email:</strong> {{ this.contacts.data.email }}<br>
            </p>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#hero">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#service">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#projects">Portofolio</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#faq">Faq</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li v-for="v in this.services.data" :key="v.id"><i class="bx bx-chevron-right"></i> <a href="#service">{{ v.title }}</a></li> 
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>cari kami di sosial media</p>
            <div class="social-links mt-3">
              <a v-if="this.contacts.data && this.contacts.data.linkedin" :href="this.contacts.data.linkedin" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              <a v-if="this.contacts.data && this.contacts.data.fb" :href="this.contacts.data.fb" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a v-if="this.contacts.data && this.contacts.data.ig" :href="this.contacts.data.ig" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a v-if="this.contacts.data && this.contacts.data.tiktok" :href="this.contacts.data.tiktok" class="twitter"><i class="bx bxl-tiktok"></i></a>
              <a v-if="this.contacts.data && this.contacts.data.twitter" :href="this.contacts.data.twitter" class="twitter"><i class="bx bxl-twitter"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div> 
    </footer><!-- End Footer --> 
</template>

<script>
export default {
name:'Footer',
props:['contacts','services'],
mounted(){
    // console.log(this.contacts)
}
}
</script>

<style>

</style>