<template>
    <div>
      <main v-if="!isLoading"> 
            <div id="setloading" style="background:white !important;z-index: 100;min-height: 60vh;">
                <span class="spinner-grow text-primary" style="width: 50px; height: 50px;"></span>
            </div>
        </main>
        <main v-else id="main">

        <!-- ======= Breadcrumbs ======= -->
        <section id="breadcrumbs" class="breadcrumbs" v-if="content.data">
          <div class="container">
            <ol>
              <li><a href="/">Home</a></li>
              <li> <router-link to="/blogs">blog</router-link> </li>
              <li> {{  content.data.slug }}  </li>
            </ol>
            <h2>{{  content.data.title }}</h2> 
          </div>
        </section><!-- End Breadcrumbs -->

        <section class="inner-page">
          <div class="container">
            <div class="row">
              <div class="col-md-12 page-image"  v-if="content.data && content.data.image != null" v-bind:style="[styles, bgbanner]"> 
                <!-- <img :src="content.data.image" alt=""> -->
              </div>
              <div class="col-lg-12"  v-if="content.data">
                <main v-if="cantReload" v-html="content.data.body"></main>
              </div>
              <div class="col-md-12 pt-4" v-else>
              <viewErr />
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  </template>
  
  <script>
  export default {
      name:'Blog',
      data(){
        return{ 
            isLoading : false,
            cantReload: true,
            content : [],
            bgbanner:{}, 
          }
      },
      methods:{
        readyContent($this, state){ 
            if(state == 'complete'){ 
                setTimeout(function(){
                    $this.isLoading = true;
                },1200);
            }
        }
      },
      mounted(){
        let $this = this;
          $this.readyContent($this, document.readyState)
          document.onreadystatechange = () =>{ 
              $this.readyContent($this, document.readyState)
              
          }
        document.getElementById("header").classList.add('header-inner-pages');
        let id = this.$route.params.id; 
        this.$axios.get('api/post/' + id).then((response) => { this.content = response.data; this.bgbanner = {
          background: 'url("'+ this.content.data.image+'")    no-repeat center center fixed', 
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
          '-o-background-size': 'cover',
          'background-size': 'cover',
        };
         }).catch ((err) => {this.cantReload = false;}); 
      },
  }
  </script>
  
  <style scoped>
  .inner-page {
    border-bottom: 1px solid #dce8ff;
  }
  .container p{
    margin: 0px !important;
  }

  .page-image {
    padding: 80px 0; 
    background-position: center center;
    background-size: cover;
    position: relative;
    min-height: 50vh;
  }
  </style>>
   