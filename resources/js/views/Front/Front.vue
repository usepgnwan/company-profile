<template>
    <main>
      <Navigation :contacts="this.contacts" />
      <!-- End Header -->
      <!-- ======= Hero Section ======= -->
      <main> 
        <router-view></router-view>
      </main>
      
      <!-- ======= Footer ======= -->
      <Footer :contacts="contacts" :services="serv"></Footer>
      <!-- whatsapp -->
      <section id="whatsapp" @click="whatsapp()">
        <i class="bx bxl-whatsapp"></i> 
          <span>Whatsapp Kami</span> 
      </section>
    </main>
</template> 
<script>
    import Footer from '@components/front/Footer.vue';
    import Navigation from '@components/front/Navigation.vue';
    export default {
        name:"Front",
        data(){
          return{  
            contacts : [],
            serv : [] 
          }
        },
        components:{
          Footer,
          Navigation
        }, 
        methods:{
          whatsapp : function(){
            let whatsapp = this.contacts.data.wa;
            // let whatsapp = ''; 
            if(whatsapp !='' || whatsapp != 'null'){
              var walink = 'https://web.whatsapp.com/send',
                                phone = whatsapp,
                                text = '%2AHai space digital%2A';
                            /* Smartphone Support */
                            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                                var walink = 'whatsapp://send';
                            }
                            // var checkout_whatsapp = walink + '?phone=' + phone + '&text=' + text + '%0A%0A' +
                            var checkout_whatsapp = walink + '?phone=62'+ phone + '&text=' + text;
                            /* Whatsapp Window Open */
                            window.open(checkout_whatsapp, '_blank');
            }
          }
        },
        beforeCreate(){
          let $this = this; 
          this.$axios.get('/api/social_media').then((response) => {this.contacts = response.data; }).catch ((err) => {console.log(err)});
          this.$axios.get('/api/services/all/data').then((response) => {this.serv = response.data;}).catch ((err) => {console.log(err)});
        }, 
    };
</script>

<style> 
@import '@public/css/style.css';
@import '@public/css/glightbox.min.css';
@import '@public/js/swiper/swiper-bundle.min.css';
@import '@public/vendor/bootstrap-icons/bootstrap-icons.css';
@import '@public/vendor/boxicons/css/boxicons.min.css';   
</style>