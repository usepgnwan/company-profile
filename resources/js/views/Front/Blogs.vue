<template>
    <div>
      <main v-if="!isLoading"> 
            <div id="setloading" style="background:white !important;z-index: 100;min-height: 60vh;">
                <span class="spinner-grow text-primary" style="width: 50px; height: 50px;"></span>
            </div>
        </main>
        <main v-else id="main">

        <!-- ======= Breadcrumbs ======= -->
        <section id="breadcrumbs" class="breadcrumbs">
          <div class="container">
            <ol>
              <li><a href="/">Home</a></li>
              <li>blog </li> 
            </ol>
            <h2>Blog</h2> 
          </div>
        </section><!-- End Breadcrumbs -->

        <section class="inner-page">
          <div class="container">
            <div class="row">
              <div class="col-lg-12"  v-if="content">
                <main v-if="cantReload">
                    <div class="row">
                        <div class="col-md-4 mt-2"   v-for="(v,k) in content" :key="v.id" >  
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
                        <div class="col-md-12">
                            <div class="d-flex justify-content-center pt-2 px-3 text-white" v-if="loading">
                                <span class="spinner-grow text-primary" style="width: 50px; height: 50px;"></span>
                            </div>  
                            <div class="d-flex justify-content-center pt-2 px-3 text-white" v-else>
                                <button v-if="loadmore" @click="loadData(page, per_page)" class="btn btn-primary">load more</button>
                            </div> 
                        </div>
                    </div>
                </main>
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
            baseurl:baseurl,
            isLoading : false,
            cantReload: true,
            content : [],
            bgbanner:{}, 
            page : 1,
            per_page : 6,
            loadmore : true, 
            loading : false
          }
      },
      methods:{
        readyContent($this, state){ 
            if(state == 'complete'){ 
                setTimeout(function(){
                    $this.isLoading = true;
                },1200);
            }
        },
        loadData : function(page, perpage) { 
            this.loading = true;
            this.$axios.get('api/post?page='+page+ '&per_page='+perpage).then((response) => {
                for ( var i=0; i<response.data.data.data.length; i++ ) {
                    this.loading = false;
                    this.content.push( response.data.data.data[i] );
                }
                this.page = this.page + 1; 
                if( response.data.data.current_page == response.data.data.last_page){
                    this.loadmore = false;
                }
            }).catch ((err) => {this.cantReload = false;}); 
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
        $this.loadData(this.page, this.per_page);
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
   