<template>
     <div class="bg-white" style="position: relative;"> 
        <main v-if="!isLoading"> 
            <div id="setloading" style="background:white !important;z-index: 100;min-height: 60vh;">
                <span class="spinner-grow text-primary" style="width: 50px; height: 50px;"></span>
            </div>
        </main>
        <main v-else>
        <!-- ======= Hero Section ======= -->
        <section id="hero" class="d-flex align-items-center" v-bind:style="[styles, bgbanner]">
                <div class="hero-button mx-5">
                    <div class="d-flex">
                        <div class="col"> 
                            <div id="file-upload">
                                <div class="upload"><a>
                                <span title="change picture"><i class="bi bi-camera-fill"></i></span>
                                <div class="files"><input type="file" id="files"  accept="image/*"  @change="filesChange('file', $event.target.files,'#hero','banner','banner');" ></div></a>
                                </div>
                            </div>
                        </div>
                        <div class="col icon d-none">
                            <span class="ri-refresh-line" title="set default picture"></span>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                    <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"  data-aos="fade-up" data-aos-delay="200">
                        <!-- <h1>Better Solutions For Your Business</h1>
                        <h2>We are team of talented designers making websites with Bootstrap</h2> -->
                        <TinyMCEEditor v-if="company.data" :inlineEditor="inlineEditor" v-model="company.data.title" :modelValue="company.data.title" @input="changeCompany('title')" />
                        <div class="d-flex justify-content-center justify-content-lg-start">
                        <a href="#about" class="btn-get-started scrollto">Get Started</a>
                        <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
                        </div>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 hero-img cta_banner" data-aos="zoom-in" data-aos-delay="200">
                        <div class="hero-button mx-5 animated">
                            <div class="d-flex">
                                <div class="col"> 
                                    <div id="file-upload">
                                        <div class="upload"><a>
                                        <span><i class="bi bi-camera-fill"></i></span>
                                        <div class="files"><input type="file" id="files"  accept="image/*"   @change="filesChange('file', $event.target.files,'.cta_banner','cta banner');"></div></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col icon d-none">
                                    <span class="ri-refresh-line" title="set default picture"></span>
                                </div>
                            </div>
                        </div>
                        <img :src="company.data.cta_banner" class="img-fluid animated" alt="">
                    </div>
                    </div>
                </div>
            </section>
                <!-- End Hero -->
                <main>
                    <!-- ======= About Us Section ======= -->
                        <section id="services" class="services">
                        <div class="container" data-aos="fade-up"> 
                            <div class="section-title">
                                <TinyMCEEditor v-if="company.data" :inlineEditor="inlineEditor" v-model="company.data.service" :modelValue="company.data.service" @input="changeCompany('service')" />
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
                            <div class="col-md-6" style="text-align: left !important;"> 
                                <div class="section-title2">
                                <TinyMCEEditor v-if="company.data" :inlineEditor="inlineEditor" v-model="company.data.about" :modelValue="company.data.about" @input="changeCompany('about')" />
                                </div>
                            </div>
                            <div class="col-md-6 blog_baner">
                                <div class="hero-button mx-5">
                                    <div class="d-flex">
                                        <div class="col"> 
                                            <div id="file-upload">
                                                <div class="upload"><a>
                                                <span><i class="bi bi-camera-fill"></i></span>
                                                <div class="files"><input type="file" id="files"  accept="image/*"  @change="filesChange('file', $event.target.files,'.blog_baner','blog baner');"></div></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col icon d-none">
                                            <span class="ri-refresh-line"></span>
                                        </div>
                                    </div>
                                </div>
                                <img decoding="async" :src="company.data.blog_baner" class="img-fluid" title="left_image.png" alt="left_image.png" loading="lazy" >
                            </div>
                            </div> 
                        </div>
                        </section>
                        <!-- section benefit -->
                        <section id="benefit" class="benefit">
                        <div class="container">
                            <div class="section-title"  data-aos="fade-up" data-aos-delay="200">
                                <TinyMCEEditor v-if="company.data" :inlineEditor="inlineEditor" v-model="company.data.benefit" :modelValue="company.data.benefit" @input="changeCompany('benefit')" />
                            </div>
                            <div class="row"> 
                            <div class="col-md-6" data-aos="fade-up" v-for="(v,k) in benefits.data" :key="v.id" :data-aos-delay="300 * (k+1)">
                                <div class="d-flex">
                                    <div class="col-3">
                                        <div class="icon-benefit" style="color: rgb(166, 198, 241); width: 100px; height: 100px; line-height: 100px;  text-align: center;margin-left:40px"><i :class="v.image" style="font-size: 50px !important; "></i></div>
                                    </div>
                                    <div class="col-9">
                                        <h2>{{ v.title }}</h2>
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
                                <TinyMCEEditor v-if="company.data" :inlineEditor="inlineEditor" v-model="company.data.price_list" :modelValue="company.data.price_list" @input="changeCompany('price_list')" />
                            </div>
                            <!-- service -->
                            <div class="row mt-5 mb-5">
                                <div class="col-md-3 pt-3 icon-box2" data-aos="fade-up" data-aos-delay="200">
                                    <div class="card" style="border: 0.5px groove #0000001c;box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);">
                                        <div class="d-flex justify-content-end">
                                            <button class="btn btn-outline-primary btn-sm mt-2 mx-2" @click="add_link('link_1')">add link</button>
                                        </div>
                                        <div class="card-body text-center pt-4">
                                            <TinyMCEEditor v-if="company.data" :height="150" :inlineEditor="inlineEditor" v-model="company.data.title_harga_1" :modelValue="company.data.title_harga_1" @input="changeCompany('title_harga_1')" />
                                            <div class="mt-2 mb-4 label-price">
                                                <TinyMCEEditor v-if="company.data" :height="150" :inlineEditor="inlineEditor" v-model="company.data.harga_1" :modelValue="company.data.harga_1" @input="changeCompany('harga_1')" />
                                            </div>
                                            <TinyMCEEditor v-if="company.data" :height="150" :inlineEditor="inlineEditor" v-model="company.data.body_harga_1" :modelValue="company.data.body_harga_1" @input="changeCompany('body_harga_1')" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 pt-3 icon-box2" data-aos="fade-up" data-aos-delay="200">
                                    <div class="card" style="min-height: 100px; background-color: #a276ff !important; color: white; !important;box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);">
                                        <div class="d-flex justify-content-end">
                                            <button class="btn btn-outline-primary btn-sm mt-2 mx-2" @click="add_link('link_2')">add link</button>
                                        </div>
                                        <div class="card-body text-center pt-4">
                                            <TinyMCEEditor v-if="company.data" :height="150" :inlineEditor="inlineEditor" v-model="company.data.title_harga_2" :modelValue="company.data.title_harga_2" @input="changeCompany('title_harga_2')" />
                                            <div class="mt-2 mb-4 label-price-active" >
                                                <TinyMCEEditor v-if="company.data" :height="150" :inlineEditor="inlineEditor" v-model="company.data.harga_2" :modelValue="company.data.harga_2" @input="changeCompany('harga_2')" />
                                            </div>
                                            <TinyMCEEditor v-if="company.data" :height="150" :inlineEditor="inlineEditor" v-model="company.data.body_harga_2" :modelValue="company.data.body_harga_2" @input="changeCompany('body_harga_2')" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 pt-3 icon-box2" data-aos="fade-up" data-aos-delay="200">
                                    <div class="card" style="border: 0.5px groove #0000001c;box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);">
                                        <div class="d-flex justify-content-end">
                                            <button class="btn btn-outline-primary btn-sm mt-2 mx-2" @click="add_link('link_3')">add link</button>
                                        </div>
                                        <div class="card-body text-center pt-4">
                                            <TinyMCEEditor v-if="company.data" :height="150" :inlineEditor="inlineEditor" v-model="company.data.title_harga_3" :modelValue="company.data.title_harga_3" @input="changeCompany('title_harga_3')" />
                                            <div class="mt-2 mb-4 label-price">
                                                <TinyMCEEditor v-if="company.data" :height="150" :inlineEditor="inlineEditor" v-model="company.data.harga_3" :modelValue="company.data.harga_3" @input="changeCompany('harga_3')" />
                                            </div>
                                            <TinyMCEEditor v-if="company.data" :height="150" :inlineEditor="inlineEditor" v-model="company.data.body_harga_3" :modelValue="company.data.body_harga_3" @input="changeCompany('body_harga_3')" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 pt-3 icon-box2" data-aos="fade-up" data-aos-delay="200">
                                    <div class="card" style="border: 0.5px groove #0000001c;box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);">
                                        <div class="d-flex justify-content-end">
                                            <button class="btn btn-outline-primary btn-sm" @click="add_link('link_4')">add link</button>
                                        </div>
                                        <div class="card-body text-center pt-4">
                                            <TinyMCEEditor v-if="company.data" :height="150" :inlineEditor="inlineEditor" v-model="company.data.title_harga_4" :modelValue="company.data.title_harga_4" @input="changeCompany('title_harga_4')" />
                                            <div class="mt-2 mb-4 label-price">
                                                <TinyMCEEditor v-if="company.data" :height="150" :inlineEditor="inlineEditor" v-model="company.data.harga_4" :modelValue="company.data.harga_4" @input="changeCompany('harga_4')" />
                                            </div>
                                            <TinyMCEEditor v-if="company.data" :height="150" :inlineEditor="inlineEditor" v-model="company.data.body_harga_4" :modelValue="company.data.body_harga_4" @input="changeCompany('body_harga_4')" />
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
                                <TinyMCEEditor v-if="company.data" :inlineEditor="inlineEditor" v-model="company.data.project" :modelValue="company.data.project" @input="changeCompany('project')" />
                            </div>
                            <div class="d-flex text-center">
                            <div data-aos="fade-up" data-aos-delay="200" class="col-4">
                                <h1 class="text-primary" v-if="company.data">+ <input type="text" v-model="company.data.count_client" @input="changeCompany('count_client')"> </h1>
                                <p>WorlWide CLient</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200" class="col-4">
                                <h1 class="text-primary" v-if="company.data">+ <input type="text" v-model="company.data.count_client1" @input="changeCompany('count_client1')"> </h1>
                                <p>Team Member</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200" class="col-4">
                                <h1 class="text-primary" v-if="company.data">+ <input type="text" v-model="company.data.count_client2" @input="changeCompany('count_client2')"> </h1>
                                <p>Adversting Spend</p>
                            </div>
                            </div>
                        </div>
                        </section>
                        <!-- ======= Testimonials Section ======= -->
                        <section id="testimonials" class="testimonials" v-bind:style="[styles, portofolio_banner]">
                        <div class="hero-button">
                            <div class="hero-button mx-3">
                                <div class="d-flex">
                                    <div class="col"> 
                                        <div id="file-upload">
                                            <div class="upload"><a>
                                            <span><i class="bi bi-camera-fill"></i></span>
                                            <div class="files"><input type="file" id="files"   accept="image/*"  @change="filesChange('file', $event.target.files,'#testimonials','banner testimoni');"></div></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col icon d-none">
                                        <span class="ri-refresh-line" title="set default picture"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                <TinyMCEEditor v-if="company.data" :inlineEditor="inlineEditor" v-model="company.data.blog" :modelValue="company.data.blog" @input="changeCompany('blog')" />
                            </div>
                            <div class="row">
                                <div class="col-md-4" data-aos="fade-left"  v-for="(v,k) in posts.data" :key="v.id" :data-aos-delay="300 * (k+1)"> 
                                <div class="content_blog pt-2">
                                    <a href=""> 
                                        <div class="content_blog-overlay fadeIn-bottom"></div>
                                        <img class="content_card-image" :src="v.image" alt="">
                                        <div class="content_blog-details">
                                        <h3 class="content_card-title">{{ v.title }} </h3>
                                        <p v-html="v.body"> </p>
                                        </div> 
                                    </a>
                                </div> 
                                </div>  
                                <div class="d-flex justify-content-end pt-2 px-3 text-white" :class="posts.count >= 4 ? '' : 'd-none'">
                                <a href="" class="btn btn-sm btn-warning text-white">More &nbsp; <span class="bi bi-arrow-right"></span></a>
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
                                        <TinyMCEEditor v-if="company.data" :inlineEditor="inlineEditor" v-model="company.data.faq" :modelValue="company.data.faq" @input="changeCompany('faq')" />
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

                                <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img faq_banner" v-bind:style="[styles, faq_banner]" data-aos="zoom-in" data-aos-delay="150">&nbsp;
                                    <div class="hero-button mx-5 ">
                                        <div class="d-flex">
                                            <div class="col"> 
                                                <div id="file-upload">
                                                    <div class="upload"><a>
                                                    <span><i class="bi bi-camera-fill"></i></span>
                                                    <div class="files"><input type="file" id="files"  accept="image/*"  @change="filesChange('file', $event.target.files,'.faq_banner','faq banner');"></div></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col icon d-none">
                                                <span class="ri-refresh-line" title="set default picture"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        </section><!-- End Why Us Section -->
                        <!-- whatsapp -->
                        <section id="whatsapp">
                        <i class="bx bxl-whatsapp"></i> 
                            <span>Whatsapp Kami</span> 
                        </section>
                </main>
                
                <!-- ======= Footer ======= -->
                <footer id="footer-front">  
                    <div class="footer-top">
                    <div class="container">
                        <div class="row">
                        <div class="col-lg-3 col-md-6 footer-contact">
                            <h3 v-if="contacts.data">{{ contacts.data.name }}</h3>
                            <p v-if="contacts.data"> {{ contacts.data.alamat }}<br><br>
                            <strong v-if="contacts.data">Phone:</strong> {{ contacts.data.wa }}<br>
                            <strong v-if="contacts.data">Email:</strong> {{ contacts.data.email }}<br>
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
                            <li v-for="v  in services.data" :key="v.id"><i class="bx bx-chevron-right"></i> <a href="#service">{{ v.title }}</a></li> 
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Our Social Networks</h4>
                            <p>cari kami di sosial media</p>
                            <div class="social-links mt-3">
                            <a v-if="contacts.data && contacts.data.linkedin" :href="contacts.data.linkedin" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                            <a v-if="contacts.data && contacts.data.fb" :href="contacts.data.fb" class="facebook"><i class="bx bxl-facebook"></i></a>
                            <a v-if="contacts.data && contacts.data.instagram" :href="contacts.data.instagram" class="instagram"><i class="bx bxl-instagram"></i></a>
                            <a v-if="contacts.data && contacts.data.tiktok" :href="contacts.data.tiktok" class="twitter"><i class="bx bxl-tiktok"></i></a>
                            <a v-if="contacts.data && contacts.data.twitter" :href="contacts.data.twitter" class="twitter"><i class="bx bxl-twitter"></i></a>
                            </div>
                        </div>

                        </div>
                    </div>
                    </div> 
                </footer><!-- End Footer -->  
        </main>
    </div>
</template> 
<script>
let stat = 'error',
    msg = 'Failed Update data';
import TinyMCEEditor from '@components/TinyMCEEditor.vue';
import $ from 'jquery'; 
const token = document.head.querySelector("[name=csrf-token]").content;

export default {
name:"Resume",
data(){
    return{
            inlineEditor:true,
            isLoading : false,
            company:[],
            service: `<h1>OUR SERVICES</h1>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise</p>`,
            baseUrl : baseurl,
            testimoni : [],
            client : [],
            faq : [],
            services : [],
            benefits : [],
            posts : [],
            contacts : [],
            typingTimeout:null,
            bgbanner:{}, 
            portofolio_banner :{},
            faq_banner:{},
            states: ''
          }
        },
        methods: {
            add_link: async function(link){
                let text = this.company.data[link];
                const { value: formValues } = await this.$swal({
                title: 'Add Link',
                showCancelButton: true,
                html:
                    '<input id="swal-input1" class="swal2-input" value="'+text+'">',
                focusConfirm: false,
                preConfirm: () => {
                    return  document.getElementById('swal-input1').value;
                }
                });
                console.log(formValues == undefined);
                if(formValues == null || formValues == undefined ){
                    //  alert('link kosong')
                }else{
                    let data = {};
                    data._method = 'POST';
                    data.field = formValues;
                    data.targetid = link;
                    this.$axios.post("api/company/patch", data)
                      .then((response) => { 
                            if(response.data.status){ 
                                stat = 'success',
                                msg = 'Success change link'; 
                                this.company.data[link] = response.data.data[link];
                            }  
                            this.$swal('Success', msg, stat)
                      })
                      .catch(() => {
                        this.$swal('Failed', 'Failed change link', stat) 
                      }); 
                }
                
               
            },
            changeCompany: function(id){
                clearTimeout(this.typingTimeout); 
                // Set a new timeout to trigger the action after a brief pause (e.g., 500ms)
                this.typingTimeout = setTimeout(() => {
                    let data = {};
                    data._method = 'PATCH';
                    data.text = this.company.data[id];
                    this.$axios.post("api/company/" + id, data)
                            .then((response) => { 
                               if(response.data.status){
                                    this.$isAlert(this,response.data.msg,'success')
                               }else{ 
                                    this.$isAlert(this,msg, stat)
                               }
                            })
                            .catch(() => {
                                this.$isAlert(this,msg, stat)
                                this.proses = false;
                            });
                }, 1500); // Adjust the duration as needed
            },
            swiperTestimoni : function(){
                /**
                 * Testimonials slider
                 */
                 setTimeout(function(){
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
                },1500) 
                
            },
            swiperClient : function(){
                /**
                 * Clients Slider
                 */
                 setTimeout(function(){
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
                },1500) 
                
            },
            filesChange : function(fieldName,fileList, targetid,type){
            this.$swal({
                title: 'Are you sure?',
                text: "Change picture " + type,
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
              }).then((result) => {
                if (result.value) { 
                    // handle file changes
                    const formData = new FormData(); 
                    if (!fileList.length) return; 
                    // append the files to FormData
                    console.log(fieldName);
                    Array
                    .from(Array(fileList.length).keys())
                    .map(x => {
                        formData.append(fieldName, fileList[x], fileList[x].name);
                    }); 
                    let field='';
                    if(targetid == '#testimonials'){
                        field = 'portofolio_banner';
                    }else if(targetid == '#hero'){
                        field = 'banner';
                    }else{
                        field = targetid.replaceAll('#','').replaceAll('.','');
                    }
                    formData.append('targetid', field); 
                    // formData.append('_method', 'POST');
                    formData.append("_token", token);  
                    let uri = URL.createObjectURL(fileList[0]); 
                    var pattern = /image-*/; 

                    if (!fileList[0].type.match(pattern)) {
                        alert('Invalid format');
                        return;
                    }
               
                    this.$axios.post("api/company/patch", formData)
                      .then((response) => { 
                            if(response.data.status){ 
                                stat = 'success',
                                msg = 'Success change picture ' + type;
                                if(type == 'banner' || type =='banner testimoni' ){ 
                                    $(targetid).css({"background":'url("'+ uri+'") no-repeat',"background-attachment":"fixed"});
                                }else if(type == 'cta banner' || type == 'blog baner'){ 
                                    $(targetid).find('img').attr('src',uri);
                                }else if( type == 'faq banner'){
                                    $(targetid).css({"background-image":'url("'+ uri+'")'});
                                }
                            }  
                            this.$swal('Success', msg, stat)
                      })
                      .catch(() => {
                        this.$swal('Failed', 'Failed change picture'+ type, stat) 
                      });
                }
              });
            },
            tes: function($this, state){
                if(state == 'complete'){
                  
                  setTimeout(function(){
                      $this.isLoading = true;
                  },1200);
              }
              setTimeout(function(){
                  // GETDATA END
                  const glightbox = GLightbox({
                      selector: '.glightbox'
                  });
                  /**
                   * Initiate Pure Counter 
                   */
                  new PureCounter();
              },1300);
            }
        },
        mounted(){ 
          let $this = this;
                $this.tes($this, document.readyState)
                document.onreadystatechange = () =>{ 
                    $this.tes($this, document.readyState)
                   
                }
            
          this.$axios.get('/api/company').then((response) => {
            this.company = response.data;
            this.bgbanner = {background: 'url("'+ this.company.data.banner+'") no-repeat',"background-attachment":"fixed"};
            this.portofolio_banner = {background: 'url("'+ this.company.data.portofolio_banner+'") no-repeat',"background-attachment":"fixed"};
            this.faq_banner = {"background-image": 'url("'+ this.company.data.faq_banner+'")'};
          }).catch ((err) => {console.log(err)});
          this.$axios.get('/api/social_media').then((response) => {this.contacts = response.data;}).catch ((err) => {console.log(err)});
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

          this.$axios.get('/api/faq/all/data').then((response) => { this.faq = response.data; }).catch ((err) => {console.log(err);});
          this.$axios.get('/api/services/all/data').then((response) => {this.services = response.data;}).catch ((err) => {console.log(err)});
          this.$axios.get('/api/benefits/all/data').then((response) => {this.benefits = response.data;}).catch ((err) => {console.log(err)});
          this.$axios.get('/api/post/all/data').then((response) => {this.posts = response.data;}).catch ((err) => {console.log(err)});


        },
        components:{
            TinyMCEEditor
        }
}
</script>

<style>
.bg-white{
    background: white;
}
.input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 30px;
    position: absolute;
    cursor: pointer;
  }
@import '@public/css/style.css';
@import '@public/css/glightbox.min.css';
@import '@public/js/swiper/swiper-bundle.min.css';
@import '@public/vendor/bootstrap-icons/bootstrap-icons.css';
@import '@public/vendor/boxicons/css/boxicons.min.css';  
#price_list .card-body p{
line-height: 2;
}

#hero .mce-content-body h1{
    margin: 0 0 10px 0;
    font-size: 48px !important;
    font-weight: 700 !important;
    line-height: 56px !important;
    color: #fff !important;
    text-align: start !important;
}
#hero .mce-content-body h2{
    color: rgba(255, 255, 255, 0.6) !important;
    margin-bottom: 50px !important;
    font-size: 24px !important;
}
#projects input{
  width: 166px !important;
  border-color: transparent !important;  
  background: transparent !important;
  color: #0d6efd;
}
#price_list .card-body{
  line-height: 2; min-height:756px !important;
  /* overflow: auto; */
}
</style>