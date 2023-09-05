<template>
    <main>
      <header id="header" class="fixed-top ">
        <div class="container d-flex align-items-center">

          <h1 class="logo me-auto"><a href="index.html">NewPage</a></h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a class="nav-link scrollto" href="#about">About</a></li>
              <li><a class="nav-link scrollto" href="#services">Services</a></li>
              <li><a class="nav-link   scrollto" href="#portfolio">Portfolio</a></li>
              <li><a class="nav-link scrollto" href="#team">Team</a></li>
              <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
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
              </li>
              <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
              <li><a class="getstarted scrollto" href="#about">Get Started</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav><!-- .navbar -->

        </div>
      </header><!-- End Header -->
      <!-- ======= Hero Section ======= -->
      <section id="hero" class="d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"  data-aos="fade-up" data-aos-delay="200">
                <h1>Better Solutions For Your Business</h1>
                <h2>We are team of talented designers making websites with Bootstrap</h2>
                <div class="d-flex justify-content-center justify-content-lg-start">
                  <a href="#about" class="btn-get-started scrollto">Get Started</a>
                  <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
                </div>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                <img :src="baseUrl + 'images/hero.png'" class="img-fluid animated" alt="">
              </div>
            </div>
          </div>
      </section>
    <!-- End Hero -->
      <main id="main">
          <!-- ======= About Us Section ======= -->
            <section id="service" class="service">
              <div class="container" data-aos="fade-up"> 
                <div class="section-title">
                  <h2>Our Service</h2>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise</p>
                </div>
                <div class="content">
                    <div class="row mt-5 mb-5">
                      <div class="pt-3" :class="services.data.length >= 3 ? 'col-md-4' :'col-md-6'"  data-aos="fade-right" data-aos-delay="300" v-for="v in services.data" :key="v.id">
                          <div class="card elementskit-info-box-icon" :class="v.pinned == 1 ? 'active-box' :''"> 
                              <div class="card-body text-center">
                                  <div class="icons">
                                      <i :class="v.image" style="font-size: 75px !important;"></i>
                                  </div> 
                              </div>
                              <div class="text-center pt-2">
                                <h2>{{ v.title }}</h2>
                                <p>{{ v.body }}</p>
                              </div>

                          </div>
                      </div>
                      <!-- <div class="col-md-6 pt-3"  data-aos="fade-left" data-aos-delay="400">
                          <div class="card  elementskit-info-box-icon active-box">
                              <div class="card-body text-center">
                                  <div class="icons">
                                      <i class="bi bi-gem" style="font-size: 75px !important;"></i>
                                  </div> 
                                  <div class="text-center pt-2">
                                    <h2>Lorem ipsum dolor sit amet</h2>
                                    <p>consectetur adipisicing elit. Incidunt adipisci architecto repellendus molestias quasi, ipsam, pariatur, minima obcaecati a sed repudiandae tenetur rerum. Aspernatur maxime ipsum dolore odit fugiat provident.</p>
                                  </div>
                              </div>
                          </div>
                      </div> -->
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
                  <div class="col-md-6" style="text-align: left !important;"> 
                    <div class="section-title2">
                      <h2>Penjelasan Singkat Tentang Agency</h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                      <img decoding="async" :src="baseUrl + 'images/skills.png'" class="img-fluid" title="left_image.png" alt="left_image.png" loading="lazy" >
                  </div>
                </div> 
              </div>
            </section>
            <!-- section benefit -->
            <section id="benefit" class="benefit">
              <div class="container">
                <div class="section-title"  data-aos="fade-up" data-aos-delay="200">
                  <h2>Benefit</h2>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise</p>
                </div>
                <div class="row"> 
                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
                      <div class="d-flex">
                          <div class="col-3">
                              <div class="" style="border-radius: 50%; color: rgb(255, 255, 255); -webkit-text-stroke: 2px rgb(125, 174, 228); width: 100px; height: 100px; line-height: 100px;  text-align: center;margin-left:40px"><i class="bi bi-stack" style="font-size: 50px !important; "></i></div>
                          </div>
                          <div class="col-9">
                              <h2>Lorem, ipsum dolor sit </h2>
                              <p>
                                amet consectetur adipisicing elit. Praesentium veritatis voluptatibus exercitationem repudiandae quos, voluptas explicabo velit consequuntur alias totam amet officiis sunt iusto libero temporibus error maxime, dicta voluptatem.
                              </p>
                          </div>
                      </div>
                  </div> 
                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
                      <div class="d-flex">
                          <div class="col-3">
                              <div class="" style="border-radius: 50%; color: rgb(255, 255, 255); -webkit-text-stroke: 2px rgb(125, 174, 228); width: 100px; height: 100px; line-height: 100px;  text-align: center;margin-left:40px"><i class="bi bi-stack" style="font-size: 50px !important; "></i></div>
                          </div>
                          <div class="col-9">
                              <h2>Lorem, ipsum dolor sit </h2>
                              <p>
                                amet consectetur adipisicing elit. Praesentium veritatis voluptatibus exercitationem repudiandae quos, voluptas explicabo velit consequuntur alias totam amet officiis sunt iusto libero temporibus error maxime, dicta voluptatem.
                              </p>
                          </div>
                      </div>
                  </div> 
                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
                      <div class="d-flex">
                          <div class="col-3">
                              <div class="" style="border-radius: 50%; color: rgb(255, 255, 255); -webkit-text-stroke: 2px rgb(125, 174, 228); width: 100px; height: 100px; line-height: 100px;  text-align: center;margin-left:40px"><i class="bi bi-stack" style="font-size: 50px !important; "></i></div>
                          </div>
                          <div class="col-9">
                              <h2>Lorem, ipsum dolor sit </h2>
                              <p>
                                amet consectetur adipisicing elit. Praesentium veritatis voluptatibus exercitationem repudiandae quos, voluptas explicabo velit consequuntur alias totam amet officiis sunt iusto libero temporibus error maxime, dicta voluptatem.
                              </p>
                          </div>
                      </div>
                  </div> 
                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
                      <div class="d-flex">
                          <div class="col-3">
                              <div class="" style="border-radius: 50%; color: rgb(255, 255, 255); -webkit-text-stroke: 2px rgb(125, 174, 228); width: 100px; height: 100px; line-height: 100px;  text-align: center;margin-left:40px"><i class="bi bi-stack" style="font-size: 50px !important; "></i></div>
                          </div>
                          <div class="col-9">
                              <h2>Lorem, ipsum dolor sit </h2>
                              <p>
                                amet consectetur adipisicing elit. Praesentium veritatis voluptatibus exercitationem repudiandae quos, voluptas explicabo velit consequuntur alias totam amet officiis sunt iusto libero temporibus error maxime, dicta voluptatem.
                              </p>
                          </div>
                      </div>
                  </div> 
                </div>
              </div>
            </section>
            <!-- section Pricelist -->
            <section class="price_list" id="price_list">
              <div class="container mt-3"> 
                  <div class="section-title" data-aos="fade-up" data-aos-delay="200">
                    <h2>Price List</h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise</p>
                  </div>
                  <!-- service -->
                  <div class="row mt-5 mb-5">
                      <div class="col-md-4 pt-3 icon-box2" data-aos="fade-up" data-aos-delay="200">
                          <div class="card" style="border: 0.5px groove #0000001c;box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);">
                              <div class="card-body text-center" style="min-height: 470px !important;  padding: 10%;">
                                  
                                  <h3>Starter</h3>
                                  <div class="mt-2 mb-4  " style=" background: #a276ff; color:white;border-radius: 48px 48px 48px 48px; color: black;padding:15px;color: white; font-weight:bold;">
                                      <h2>
                                          $ 5.99 Month 
                                      </h2>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita veritatis sit a laudantium incidunt, ut adipisci aliquam et voluptas molestiae, animi provident quis! Rem facere id modi velit cumque.</p>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4 pt-3 icon-box2" data-aos="fade-up" data-aos-delay="200">
                          <div class="card" style="min-height: 100px; background-color: #a276ff !important; color: white; !important;box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);">
                              <div class="card-body text-center" style="min-height: 470px !important; padding: 10%;">
                                  <h3>Basic</h3>
                                  <div class="mt-2 mb-4  " style="background-color: transparent;background-image: linear-gradient(-35deg, #ffffff 0%, #ffffff 100%);border-color: rgba(0,0,0,0);border-radius: 48px 48px 48px 48px; color: black;padding:15px; font-weight:bold;">
                                      <h2>
                                          $ 5.99 Month 
                                      </h2>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita veritatis sit a laudantium incidunt, ut adipisci aliquam et voluptas molestiae, animi provident quis! Rem facere id modi velit cumque.</p> 
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4 pt-3 icon-box2" data-aos="fade-up" data-aos-delay="200">
                          <div class="card" style="border: 0.5px groove #0000001c;box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);">
                              <div class="card-body text-center" style="min-height: 470px !important;  padding: 10%;">
                                  <h3>Pro</h3>
                                  <div class="mt-2 mb-4 " style=" background: #a276ff; color:white;border-radius: 48px 48px 48px 48px; color: black;padding:15px; color: white; font-weight:bold;">
                                      <h2>
                                          $ 5.99 Month 
                                      </h2>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita veritatis sit a laudantium incidunt, ut adipisci aliquam et voluptas molestiae, animi provident quis! Rem facere id modi velit cumque.</p> 
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </section> 
            <!-- ======= Testimonials Section ======= -->
            <section id="testimonials" class="testimonials">
              <div class="container" data-aos="zoom-in">
                <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                  <div class="swiper-wrapper"> 
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
                        <div class="swiper-wrapper align-items-center">
                          <div class="swiper-slide" v-for="v in client.data" :key="v.id"><img  :src="v.image" class="img-fluid" alt=""></div>
                        </div>
                        <!-- <div class="swiper-pagination"></div> -->
                      </div>

                    </div>
                  </section><!-- End Clients Section -->
 
            <!-- section TEAMS -->
            <section class="price_list" id="price_list">
              <div class="container mt-3"> 
                  <div class="section-title" data-aos="fade-up" data-aos-delay="200">
                    <h2>Our Teams</h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise</p>
                  </div>
                  <div class="row">
                    <div class="col-md-4"> 
                        <div class="content_card"> 
                            <div class="content_card-overlay"></div>
                            <img class="content_card-image" src="https://source.unsplash.com/HkTMcmlMOUQ" alt="">
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
                            <img class="content_card-image" src="https://source.unsplash.com/HkTMcmlMOUQ" alt="">
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
                            <img class="content_card-image" src="https://source.unsplash.com/HkTMcmlMOUQ" alt="">
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
            <!-- ======= Why Us Section ======= -->
            <section id="why-us" class="why-us section-bg">
              <div class="container-fluid" data-aos="fade-up"> 
                <div class="row"> 
                  <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                    <div class="section-title">
                      <h2>Faq <span class="text-primary">Pertanyaan</span></h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise</p>
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

                  <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img" style='background-image: url("images/hero-img.png");' data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
                </div>

              </div>
            </section><!-- End Why Us Section -->
            
      </main>
      
  <!-- ======= Footer ======= -->
  <footer id="footer-front">  
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>Arsha</h3>
            <p>
              A108 Adam Street <br>
              New York, NY 535022<br>
              United States <br><br>
              <strong>Phone:</strong> +1 5589 55488 55<br>
              <strong>Email:</strong> info@example.com<br>
            </p>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div class="social-links mt-3">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div> 
    </footer><!-- End Footer --> 
    </main>
</template> 
<script>
    export default {
        name:"Front",
        data(){
          return{
            baseUrl : baseurl,
            testimoni : [],
            client : [],
            faq : [],
            services : [],
          }
        },
        methods: {
          swiperTestimoni(){
            /**
             * Testimonials slider
             */
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
          },
          swiperClient(){
            /**
             * Clients Slider
             */
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
          }
        },
        mounted(){ 
          let $this = this;
          this.$axios.get('/api/testimoni/all/data')
              .then((response) => {
                  this.testimoni = response.data;  
                  // if(this.testimoni.length >0 ){
                    setTimeout(function(){
                      $this.swiperTestimoni();
                    },1000)
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
                },1000)
              // }
          })
          .catch ((err) => {
              console.log(err); 
          });
          this.$axios.get('/api/faq/all/data')
          .then((response) => {
              this.faq = response.data;   
          })
          .catch ((err) => {
              console.log(err); 
          });
          this.$axios.get('/api/services/all/data')
          .then((response) => {
              this.services = response.data;   
          })
          .catch ((err) => {
              console.log(err); 
          });
          // GETDATA END
          const glightbox = GLightbox({
            selector: '.glightbox'
          });
           /**
           * Mobile nav toggle
           */ 
          this.$onEvent('click', '.mobile-nav-toggle', function(e) {
            $this.$selectEvent('#navbar').classList.toggle('navbar-mobile')
            this.classList.toggle('bi-list')
            this.classList.toggle('bi-x')
          })
          /**
           * Mobile nav dropdowns activate
           */
           
           this.$onEvent('click', '.navbar  .dropdown > a', function(e) {
            console.log(this);
            if ($this.$selectEvent('#navbar').classList.contains('navbar-mobile')) {
              e.preventDefault()
              this.nextElementSibling.classList.toggle('dropdown-active')
            }
          }, true);
          
          /**
           * Toggle .header-scrolled class to #header when page is scrolled
           */
          let selectHeader = this.$selectEvent('#header')
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

        
         
        }
    };
</script>

<style> 
@import '@public/css/style.css';
@import '@public/css/glightbox.min.css';
@import '@public/js/swiper/swiper-bundle.min.css';
@import '@public/vendor/bootstrap-icons/bootstrap-icons.css';
@import '@public/vendor/boxicons/css/boxicons.min.css'; 
@import 'https://anaslawoffice.dakreativ.com/wp-content/plugins/elementskit-lite/widgets/init/assets/css/widget-styles.css?ver=2.9.0';
.elementskit-info-box-icon{
  min-height: 350px;
  /* padding-top: 10%; */
  border: none !important;
  padding: 50px;
  color: black !important;
}
.elementskit-info-box-icon h2{
  font-weight: 700; 
}

.elementskit-info-box-icon .icons{
  border-radius: 50%;
    background-color: #f2f9ff;
    color: #5778f2;
    width: 160px;
    height: 160px;
    line-height: 168px;
    margin: 0px auto 0px;
} 
.active-box{
  background-color: #5d70d6 !important;
  color: white !important; 
}
.active-box  p{  
    color: #f2f9ff !important; 
}
.ekit-wid-con .elementskit-border-divider {
width: 77px !important;
}
</style>