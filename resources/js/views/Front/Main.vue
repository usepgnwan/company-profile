<template>
<main v-if="!isLoading">
    <div id="setloading">
    <span class="spinner-grow text-white" style="width: 50px; height: 50px;"></span>
    </div>
</main>
<main v-else>
        <section id="hero" class="d-flex align-items-center" v-bind:style="[styles, bgbanner]">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"  data-aos="fade-up" data-aos-delay="200">
                  <div v-if="company.data" v-html="company.data.title"></div>
                  <div class="d-flex justify-content-center justify-content-lg-start">
                    <a href="#about" class="btn-get-started scrollto">Get Started</a>
                    <a v-if="contacts1.data" :href="contacts1.data.youtube" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
                  </div>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                  <img v-if="company.data" :src="company.data.cta_banner" class="img-fluid animated" alt="">
                </div>
              </div>
            </div>
        </section>
        <!-- End Hero -->
        <main id="main">
            <!-- ======= About Us Section ======= -->
              <section id="services" class="services">
                <div class="container" data-aos="fade-up"> 
                  <div class="section-title">
                    <div v-if="company.data" v-html="company.data.service"></div>
                  </div>
                  <div class="content">
                      <div class="row mt-5 mb-5">
                        <div class="pt-3" :class="services.data.length >= 3 ? 'col-md-4' :'col-md-6'"  data-aos="fade-right"  v-for="(v,k) in services.data" :key="v.id" :data-aos-delay="100 * (k+1)">
                            <div class="card elementskit-info-box-icon" :class="v.pinned == 1 ? 'active-box' :''" > 
                                <div class="card-body text-center">
                                    <div class="icons">
                                        <img :src="v.image" style="font-size: 75px !important;"> 
                                    </div> 
                                </div>
                                <div class="text-center pt-2">
                                  <h2>{{ v.title }}</h2>
                                  <p>{{ v.body }}</p>
                                </div>

                            </div>
                        </div>
                      </div>
                  </div> 
                </div>
              </section>
              <!-- End About Us Section -->
              <section id="about" class="about">
                <div class="container" data-aos="fade-up"> 
                  <div class="ekit-wid-con mb-4">
                      <div class="elementskit-border-divider"></div>
                  </div>
                  <div class="row mb-2">
                    <div class="col-md-6"> 
                      <div class="section-title2"> 
                          <div v-if="company.data" v-html="company.data.about"></div>
                      </div>
                    </div>
                    <div class="col-md-6">
                        <img decoding="async" v-if="company.data" :src="company.data.blog_baner" class="img-fluid" title="left_image.png" alt="left_image.png" loading="lazy" >
                    </div>
                  </div> 
                </div>
              </section>
              <!-- section benefit -->
              <section id="benefit" class="benefit">
                <div class="container">
                  <div class="section-title"  data-aos="fade-up" data-aos-delay="200">
                    <div v-if="company.data" v-html="company.data.benefit"></div>
                  </div>
                  <div class="row"> 
                    <div class="col-md-6" data-aos="fade-up" v-for="(v,k) in benefits.data" :key="v.id" :data-aos-delay="300 * (k+1)">
                        <div class="d-flex">
                            <div class="col-3">
                                <div class="icon-benefit" style=" color: rgb(166, 198, 241); width: 100px; height: 100px; line-height: 100px;  text-align: center;margin-left:40px"><i :class="v.image" style="font-size: 50px !important; "></i></div>
                            </div>
                            <div class="col-9">
                                <h4>{{ v.title }}</h4>
                                <p style="text-align: justify !important;">
                                  {{ v.body }}
                                </p>
                            </div>
                        </div>
                    </div> 
                  </div>
                </div>
              </section>
              <!-- section Pricelist -->
              <section class="price_list" id="price_list">
                <div class="container-fluid mt-3"> 
                    <div class="section-title" data-aos="fade-up" data-aos-delay="200">
                      <div v-if="company.data" v-html="company.data.price_list"></div>
                    </div>
                    <!-- service -->
                    <div class="row mt-5 mb-5">
                        <div class="col-md-6 col-lg-3 pt-3 icon-box2" data-aos="fade-up" data-aos-delay="200">
                            <div class="card" style="border: 0.5px groove #0000001c;box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);">
                                <div class="card-body text-center"> 
                                    <div v-if="company.data" v-html="company.data.title_harga_1"></div>
                                    <a v-if="company.data" :href="company.data.link_1" target="_blank">
                                      <div class="mt-2 mb-4 label-price">
                                        <div v-if="company.data" v-html="company.data.harga_1"></div>
                                      </div>
                                    </a>
                                    <div class="px-4" v-if="company.data" v-html="company.data.body_harga_1"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 pt-3 icon-box2" data-aos="fade-up" data-aos-delay="300">
                            <div class="card" style="min-height: 100px; background-color: #a276ff !important; color: white; !important;box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);">
                                <div class="card-body text-center">
                                    <div v-if="company.data" v-html="company.data.title_harga_2"></div>
                                    <a v-if="company.data" :href="company.data.link_2" target="_blank">
                                      <div class="mt-2 mb-4 label-price-active" >
                                        <div v-if="company.data" v-html="company.data.harga_2"></div>
                                      </div>
                                    </a>
                                    <div v-if="company.data" v-html="company.data.body_harga_2"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 pt-3 icon-box2" data-aos="fade-up" data-aos-delay="400">
                            <div class="card" style="border: 0.5px groove #0000001c;box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);">
                              <div class="card-body text-center"> 
                                    <div v-if="company.data" v-html="company.data.title_harga_3"></div>
                                    <a v-if="company.data" :href="company.data.link_3" target="_blank">
                                      <div class="mt-2 mb-4 label-price">
                                        <div v-if="company.data" v-html="company.data.harga_3"></div>
                                      </div>
                                    </a>
                                    <div class="px-4" v-if="company.data" v-html="company.data.body_harga_3"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 pt-3 icon-box2" data-aos="fade-up" data-aos-delay="500">
                            <div class="card" style="border: 0.5px groove #0000001c;box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);">
                                <div class="card-body text-center"> 
                                    <div v-if="company.data" v-html="company.data.title_harga_4"></div>
                                    <a v-if="company.data" :href="company.data.link_4" target="_blank">
                                        <div class="mt-2 mb-4 label-price">
                                          <div v-if="company.data" v-html="company.data.harga_4"></div>
                                        </div>
                                    </a>
                                    <div class="px-4" v-if="company.data" v-html="company.data.body_harga_4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </section> 
              <!-- section project -->
              <section id="projects" class="projects">
                <div class="container">
                  <div data-aos="fade-up" data-aos-delay="200" class="section-title aos-init aos-animate">
                    <div v-if="company.data" v-html="company.data.project"></div>  
                  </div>
                  <div class="d-flex text-center">
                    <div data-aos="fade-up" data-aos-delay="200" class="col-4" v-if="company.data">
                      <h1 class="text-primary">+ <span data-purecounter-start="0" :data-purecounter-end="company.data.count_client" data-purecounter-duration="4" class="purecounter"></span> </h1>
                      <p>WorlWide CLient</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200" class="col-4" v-if="company.data">
                      <h1 class="text-primary">+ <span data-purecounter-start="0" :data-purecounter-end="company.data.count_client1" data-purecounter-duration="4" class="purecounter"></span> </h1>
                      <p>Team Member</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200" class="col-4" v-if="company.data">
                      <h1 class="text-primary">+ <span data-purecounter-start="0" :data-purecounter-end="company.data.count_client2" data-purecounter-duration="4" class="purecounter"></span> </h1>
                      <p>Adversting Spend</p>
                    </div>
                  </div>
                </div>
              </section>
              <!-- ======= Testimonials Section ======= -->
              <section id="testimonials" class="testimonials"  v-bind:style="[styles, portofolio_banner]">
                <div class="container" data-aos="zoom-in">
                  <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div class="swiper-wrapper" v-if="testimoni.data"> 
                      <div class="swiper-slide" v-for="v in testimoni.data" :key="v.id">
                        <div class="testimonial-item">
                          <img :src="v.image" class="testimonial-img" alt="">
                          <h3>{{ v.name }}</h3>
                          <h4>{{ v.title }}</h4>
                          <p>
                            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                            {{ v.body }}
                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                          </p>
                        </div>
                      </div><!-- End testimonial item -->
                    </div>
                    <div class="swiper-pagination"></div>
                  </div>

                </div>
              </section><!-- End Testimonials Section -->

              <!-- ======= Clients Section ======= -->
              <!-- ======= Clients Section ======= -->
                <section id="clients" class="clients">
                  <div class="container" data-aos="zoom-in"> 
                    <div class="clients-slider swiper">
                      <div class="swiper-wrapper align-items-center" v-if="client.data">
                        <div class="swiper-slide" v-for="v in client.data" :key="v.id"><img  :src="v.image" class="img-fluid" alt=""></div>
                      </div>
                      <!-- <div class="swiper-pagination"></div> -->
                    </div>

                  </div>
                </section><!-- End Clients Section -->
  
              <!-- section TEAMS -->
              <section class="team d-none" id="team">
                <div class="container mt-3"> 
                    <div class="section-title" data-aos="fade-up" data-aos-delay="200">
                      <h2>Our Teams</h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise</p>
                    </div>
                    <div class="row">
                      <div class="col-md-4"> 
                          <div class="content_card"> 
                              <div class="content_card-overlay"></div>
                              <!-- <img class="content_card-image" src="https://source.unsplash.com/HkTMcmlMOUQ" alt=""> -->
                              <div class="content_card-details fadeIn-bottom">
                                <h3 class="content_card-title">This is a title</h3>
                                <p>Manager specialis</p>
                                <div class="flex-container">
                                  <div class="flex-item"><a href=""><span class="bi bi-instagram"></span></a></div> 
                                  <div class="flex-item"><a href=""><span class="bi bi-linkedin"></span></a></div> 
                                  <div class="flex-item"><a href=""><span class="bi bi-twitter"></span></a></div> 
                                </div>
                              </div> 
                          </div> 
                      </div> 
                      <div class="col-md-4"> 
                          <div class="content_card"> 
                              <div class="content_card-overlay"></div>
                              <!-- <img class="content_card-image" src="https://source.unsplash.com/HkTMcmlMOUQ" alt=""> -->
                              <div class="content_card-details fadeIn-bottom">
                                <h3 class="content_card-title">This is a title</h3>
                                <p>Manager specialis</p>
                                <div class="flex-container">
                                  <div class="flex-item"><a href=""><span class="bi bi-instagram"></span></a></div> 
                                  <div class="flex-item"><a href=""><span class="bi bi-linkedin"></span></a></div> 
                                  <div class="flex-item"><a href=""><span class="bi bi-twitter"></span></a></div> 
                                </div>
                              </div> 
                          </div> 
                      </div> 
                      <div class="col-md-4"> 
                          <div class="content_card"> 
                              <div class="content_card-overlay"></div>
                              <!-- <img class="content_card-image" src="https://source.unsplash.com/HkTMcmlMOUQ" alt=""> -->
                              <div class="content_card-details fadeIn-bottom">
                                <h3 class="content_card-title">This is a title</h3>
                                <p>Manager specialis</p>
                                <div class="flex-container">
                                  <div class="flex-item"><a href=""><span class="bi bi-instagram"></span></a></div> 
                                  <div class="flex-item"><a href=""><span class="bi bi-linkedin"></span></a></div> 
                                  <div class="flex-item"><a href=""><span class="bi bi-twitter"></span></a></div> 
                                </div>
                              </div> 
                          </div> 
                      </div> 
                    </div>
                </div>
              </section> 
              <!-- section BLOGS -->
              <section class="blog" id="blog">
                <div class="container mt-3"> 
                    <div class="section-title" data-aos="fade-up" data-aos-delay="200">
                      <div v-if="company.data" v-html="company.data.blog"></div>
                    </div>
                    <div class="row">
                      <!-- <div class="col-md-4" data-aos="fade-left"  v-for="(v,k) in posts.data" :key="v.id" :data-aos-delay="300 * (k+1)"> 
                        <div class="content_blog pt-2"> 
                          <router-link :to="{ name: 'blog', params: { id: v.slug }}"> 
                              <div class="content_blog-overlay fadeIn-bottom"></div>
                              <img class="content_card-image" :src="v.image" alt="">
                              <div class="content_blog-details">
                                <h5 class="content_card-title">{{ v.title }} </h5>
                                <p v-html="v.body"> </p>
                              </div> 
                          </router-link>
                        </div>  -->
                        <div class="col-md-4 mt-2"   v-for="(v,k) in posts.data" :key="v.id" >  
                            <router-link :to="{ name: 'blog', params: { id: v.slug }}"> 
                                <div  class="card">
                                    <img data-v-87445088="" :src="v.image ? v.image  :  baseurl + 'images/nofile.jpg'" class="content_card-image" height="300px">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ v.title }} cd </h5>
                                        <p class="card-text" v-html="v.body" style=" overflow: hidden; display: -webkit-box;  -webkit-line-clamp: 3; -webkit-box-orient: vertical;"></p>
                                    </div>
                                </div>
                            </router-link>
                     
                        </div> 
                      </div>  
                      <div class="d-flex justify-content-end pt-2 px-3 text-white" :class="posts.count >= 4 ? '' : 'd-none'">
                        <router-link to="blogs" class="btn btn-sm btn-warning text-white">More &nbsp; <span class="bi bi-arrow-right"></span></router-link>
                      </div>
                    </div>

                </div>
              </section> 
              <!-- ======= Why Us Section ======= -->
              <section id="faq" class="why-us section-bg">
                <div class="container-fluid" data-aos="fade-up"> 
                  <div class="row"> 
                    <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                      <div class="section-title">
                        <div v-if="company.data" v-html="company.data.faq"></div>
                      </div> 
                      <div class="accordion-list">
                        <ul>
                          <li v-for="v in faq.data" :key="v.id">
                            <a data-bs-toggle="collapse" :class="v.id == 1? 'collapse' : 'collapsed'" class="collapse" :data-bs-target="'#accordion-list-'+ v.id"><span>{{ v.id }}</span> {{ v.title }} 
                              <i class="bx bx-chevron-down icon-show"></i>
                              <i class="bx bx-chevron-up icon-close"></i>
                            </a>
                            <div :id="'accordion-list-' + v.id" class="collapse" :class="v.id == 1? 'show' : ''" data-bs-parent=".accordion-list">
                              <p>
                                {{ v.body }} 
                              </p>
                            </div>
                          </li> 
                        </ul>
                      </div>

                    </div>

                    <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img" v-bind:style="[styles, faq_banner]" data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
                  </div> 
                </div>
              </section><!-- End Why Us Section --> 
        </main>
</main>
</template>

<script>
export default {
    name:'Main',
    data(){
        return{
            isLoading : false,
            baseurl : baseurl,
            testimoni : [],
            client : [],
            faq : [],
            services : [],
            benefits : [],
            posts : [], 
            company : [],
            bgbanner:{}, 
            portofolio_banner :{},
            faq_banner:{},
            contacts1: []
        }
    },
    methods: {
        
        swiperTestimoni(){
        /**
         * Testimonials slider
         */
            // setTimeout(function(){
                new Swiper('.testimonials-slider', {
                    speed: 600,
                    loop: true,
                    autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                    },
                    slidesPerView: 'auto',
                    pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                    }
                });
            // },1500)
        },
        swiperClient(){
        /**
         * Clients Slider
         */
            const glightbox = GLightbox({
                    selector: '.glightbox'
                  });
            new PureCounter(); 
            // setTimeout(function(){
                new Swiper('.clients-slider', {
                    speed: 400,
                    loop: true,
                    autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                    },
                    slidesPerView: 'auto',
                    // pagination: {
                    //   el: '.swiper-pagination',
                    //   type: 'bullets',
                    //   clickable: true
                    // },
                    breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                    }
                }); 
            // },1500) 
        },
        counterRun(){
          let $this = this;
        /**
         * Initiate Pure Counter 
         */ 
            // setTimeout(function(){
              
              
            // },1500)
            
            
        },
        readyContent($this, state){ 
            if(state == 'complete'){
                  
                setTimeout(function(){
                    // $this.isLoading = true;
                    $this.$axios.get('/api/company').then((response) => {$this.company = response.data; 
                          $this.isLoading = true;
                          $this.bgbanner = {background: 'url("'+ $this.company.data.banner+'") no-repeat',"background-attachment":"fixed"};
                          $this.portofolio_banner = {background: 'url("'+ $this.company.data.portofolio_banner+'") no-repeat',"background-attachment":"fixed"};
                          $this.faq_banner = {"background-image": 'url("'+ $this.company.data.faq_banner+'")'};
                          // $this.counterRun(); 
                          // if($this.isLoading){
                          //     /**
                          //      * Toggle .header-scrolled class to #header when page is scrolled
                          //      */
                          //     let selectHeader = $this.$selectEvent('#header')
                          //     if (selectHeader) {
                          //       const headerScrolled = () => {
                          //           if (window.scrollY > 100) {
                          //           selectHeader.classList.add('header-scrolled')
                          //           } else {
                          //           selectHeader.classList.remove('header-scrolled')
                          //           }
                          //       }
                          //       window.addEventListener('load', headerScrolled)
                          //       $this.$onscrollEvent(document, headerScrolled)
                          //     }
                          //     $this.$onEvent('click', 'li > .nav-link', function(e) { 
                          //         $this.$selectEvent('.nav-link',true).forEach(e => e.classList.remove("active"));
                          //         this.classList.add("active");
                          //     },true);
                          //     /**
                          //      * Mobile nav toggle
                          //      */ 
                          //     $this.$onEvent('click', '.mobile-nav-toggle', function(e) {
                          //     $this.$selectEvent('#navbar').classList.toggle('navbar-mobile')
                          //       this.classList.toggle('bi-list')
                          //       this.classList.toggle('bi-x')
                          //     })
                          //     /**
                          //      * Mobile nav dropdowns activate
                          //      */
                              
                          //     $this.$onEvent('click', '.navbar  .dropdown > a', function(e) {
                          //     console.log(this);
                          //     if ($this.$selectEvent('#navbar').classList.contains('navbar-mobile')) {
                          //         e.preventDefault()
                          //         this.nextElementSibling.classList.toggle('dropdown-active')
                          //     }
                          //     }, true);
                          //   }
                    }).catch ((err) => {console.log(err)}); 
                },1500);
            }
            // setTimeout(function(){
            //     if($this.isLoading){
            //     // GETDATA END
            //     setTimeout(function(){
            //         /**
            //          * Mobile nav active
            //          */ 
                    
            //     },1000);
                
            //     }
            // },1600);
          }
    },
    mounted(){ 
        let $this = this;
        document.getElementById("header").classList.remove('header-inner-pages');
          $this.readyContent($this, document.readyState)
          document.onreadystatechange = () =>{ 
              $this.readyContent($this, document.readyState)
              
          }
        this.$axios.get('/api/social_media').then((response) => {this.contacts1 = response.data;}).catch ((err) => {console.log(err)});
        this.$axios.get('/api/company').then((response) => {this.company = response.data; 
              this.bgbanner = {background: 'url("'+ this.company.data.banner+'") no-repeat',"background-attachment":"fixed"};
              this.portofolio_banner = {background: 'url("'+ this.company.data.portofolio_banner+'") no-repeat',"background-attachment":"fixed"};
              this.faq_banner = {"background-image": 'url("'+ this.company.data.faq_banner+'")'};
                $this.counterRun();
                
        }).catch ((err) => {console.log(err)}); 
        this.$axios.get('/api/testimoni/all/data')
            .then((response) => {
                this.testimoni = response.data;  
                // if(this.testimoni.length >0 ){
                  setTimeout(function(){
                    $this.swiperTestimoni();
                  },1800) 
                // }
            })
            .catch ((err) => {
                console.log(err); 
            });

        this.$axios.get('/api/client/all/data')
        .then((response) => {
            this.client = response.data;  
            // if(this.testimoni.length >0 ){
                setTimeout(function(){
                $this.swiperClient();
                },1800)
            // }
        })
        .catch ((err) => {
            console.log(err); 
        });

        this.$axios.get('/api/faq/all/data').then((response) => { this.faq = response.data; }).catch ((err) => {console.log(err);});
        this.$axios.get('/api/services/all/data').then((response) => {this.services = response.data;}).catch ((err) => {console.log(err)});
        this.$axios.get('/api/benefits/all/data').then((response) => {this.benefits = response.data;}).catch ((err) => {console.log(err)});
        this.$axios.get('/api/post/all/data').then((response) => {this.posts = response.data;}).catch ((err) => {console.log(err)}); 
  }, 
}
</script>

<style>

</style>