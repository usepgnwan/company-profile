<template> 
    <div>
        <BreadCumbs :breadcumbs="this.breadcumbs" />
        <section class="section">
            <div class="row">
              <div class="col-lg-12"  v-if="cantReload">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{{ breadcumbs.title }}</h5> 
                    <form class="row g-3">
                      <div class="col-12">
                        <label for="title" class="form-label">Name</label>
                        <input type="text" class="form-control" :class="`${ jsonResp.name ? 'is-invalid' : ''}`" v-model="jsonData.name"  >
                        <div class="vinvalid-feedback text-danger" v-if="jsonResp.name">
                          {{ jsonResp.name }}
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="body" class="form-label">Description</label>
                         <textarea  class="form-control" v-model="jsonData.description" :class="`${ jsonResp.description ? 'is-invalid' : ''}`"/>
                        <div class="vinvalid-feedback text-danger" v-if="jsonResp.description">
                          {{ jsonResp.body }}
                        </div>
                      </div> 
                      <div class="col-12">
                        <label for="title" class="form-label">Address</label>
                        <textarea  class="form-control" v-model="jsonData.address" :class="`${ jsonResp.address ? 'is-invalid' : ''}`"/>
                        <div class="vinvalid-feedback text-danger" v-if="jsonResp.address">
                          {{ jsonResp.address }}
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="title" class="form-label">Email</label>
                        <input type="text" class="form-control" :class="`${ jsonResp.email ? 'is-invalid' : ''}`" v-model="jsonData.email"  >
                        <div class="vinvalid-feedback text-danger" v-if="jsonResp.email">
                          {{ jsonResp.email }}
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="foto" class="form-label">Foto</label>
                        <div v-if="imagePrev" class="pt-1 pb-1" style="position: relative; max-width: 300px;">
                          <button style="position:absolute;column-rule: none;border: none; right: 0px; margin:5px;" class="badge rounded-pill bg-danger" v-on:click="removeImg($event)"> x </button>
                          <img :src="imagePrev" alt="" width="300">
                        </div>
                        <div v-if="jsonData.image" class="pt-1 pb-1" style="position: relative; max-width: 300px;">
                          <i :class="jsonData.image" style="font-size: 130px !important;color:#a6c6f1;"></i>
                        </div>
                        <input type="file" class="form-control"  v-on:change="inputFile($event)"  accept="image/x-png,image/gif,image/jpeg" id="uploadCaptureInputFile" :class="`${ jsonResp.image ? 'is-invalid' : ''}`">
                        <div class="vinvalid-feedback text-danger" v-if="jsonResp.image">
                            {{ jsonResp.image }}
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="title" class="form-label">Youtube</label>
                        <input type="text" class="form-control" :class="`${ jsonResp.youtube ? 'is-invalid' : ''}`" v-model="jsonData.youtube"  >
                        <div class="vinvalid-feedback text-danger" v-if="jsonResp.youtube">
                          {{ jsonResp.youtube }}
                        </div>
                      </div>
                      <div class="col-6">
                        <label for="title" class="form-label">Whatsapp</label>
                        <input type="text" class="form-control" :class="`${ jsonResp.wa ? 'is-invalid' : ''}`" v-model="jsonData.wa"  >
                        <div class="vinvalid-feedback text-danger" v-if="jsonResp.wa">
                          {{ jsonResp.wa }}
                        </div>
                      </div>
                      <div class="col-6">
                        <label for="title" class="form-label">IG</label>
                        <input type="text" class="form-control" :class="`${ jsonResp.ig ? 'is-invalid' : ''}`" v-model="jsonData.ig"  >
                        <div class="vinvalid-feedback text-danger" v-if="jsonResp.ig">
                          {{ jsonResp.ig }}
                        </div>
                      </div>
                      <div class="col-6">
                        <label for="title" class="form-label">FB</label>
                        <input type="text" class="form-control" :class="`${ jsonResp.fb ? 'is-invalid' : ''}`" v-model="jsonData.fb"  >
                        <div class="vinvalid-feedback text-danger" v-if="jsonResp.fb">
                          {{ jsonResp.fb }}
                        </div>
                      </div>
                      <div class="col-6">
                        <label for="title" class="form-label">Linkedin</label>
                        <input type="text" class="form-control" :class="`${ jsonResp.linkedin ? 'is-invalid' : ''}`" v-model="jsonData.linkedin"  >
                        <div class="vinvalid-feedback text-danger" v-if="jsonResp.linkedin">
                          {{ jsonResp.linkedin }}
                        </div>
                      </div>
                      <div class="col-6">
                        <label for="title" class="form-label">Twitter</label>
                        <input type="text" class="form-control" :class="`${ jsonResp.twitter ? 'is-invalid' : ''}`" v-model="jsonData.twitter"  >
                        <div class="vinvalid-feedback text-danger" v-if="jsonResp.twitter">
                          {{ jsonResp.twitter }}
                        </div>
                      </div>
                      <div class="col-6">
                        <label for="title" class="form-label">Tiktok</label>
                        <input type="text" class="form-control" :class="`${ jsonResp.tiktok ? 'is-invalid' : ''}`" v-model="jsonData.tiktok"  >
                        <div class="vinvalid-feedback text-danger" v-if="jsonResp.tiktok">
                          {{ jsonResp.tiktok }}
                        </div>
                      </div>
                      <div class="text-end">
                        <button v-if="!proses" type="submit" class="btn btn-primary" v-on:click="savebenefits($event)">Submit</button>
                        <ButtonProses v-else />
                         &nbsp;
                        <!-- <button type="reset" class="btn btn-secondary">Preview</button> -->
                      </div>
                    </form>
                  </div>
                </div> 
              </div>
              <div class="col-md-12" v-else>
              <viewErr />
              </div>
            </div>
        </section>
        <!-- modal pinned / highlight --> 
        <b-modal v-model="isIcon" id="modal-xl" size="xl"  scrollable>
              <template v-slot:modal-header>
                   <h5 class="modal-title">Select Icon</h5><button @click="isIcon=false" class="btn btn-sm"><i class="ri-close-line"></i></button>
              </template>
              <IconBootstrap @icon="handleIcon"/>
              <template v-slot:modal-footer>
                  <div>
                      <b-button
                          variant="secondary"
                          size="sm"
                          @click="isIcon=false"
                      >
                          Close
                      </b-button>
                  </div>
              </template>
        </b-modal>
      </div>
</template>

<script>
    // import viewErr from "../404/404View.vue" 
    import BreadCumbs from "../../components/layout/dashboard/BreadCumbs.vue"  
    import IconBootstrap from "../../components/IconBootstrap.vue"  
   
    const token = document.head.querySelector("[name=csrf-token]").content;
export default {
  name: "SocialMediaForm",
  data(){
    return { 
      content:"",
      breadcumbs: {
        title : "Add New Social Media",
        data : [
          {
            name : "Dashboard",
            link : "/account/dashboard",
            status : false
          },
          {
            name : "social_media",
            link : "/account/social_media",
            status : false
          },
          {
            name : "form",
            link : "/account/social_media",
            status : true
          }
        ], 
      },
      jsonData : {
        name :"", 
        description :"", 
        address :"", 
        wa :"", 
        email :"", 
        fb :"", 
        ig :"", 
        linkedin :"", 
        twitter :"", 
        tiktok :"", 
        youtube :"", 
        image :"", 
      },
      cantReload: true,
      editor: false,
      imagePrev : "", 
      jsonResp : {
        name :"", 
        description :"", 
        address :"", 
        wa :"", 
        email :"", 
        fb :"", 
        ig :"", 
        linkedin :"", 
        twitter :"", 
        tiktok :"", 
        image :"", 
      },
      proses : false,
      isAdd : true,
      thisId : 0,
      isIcon : false 
    }
  },
  components:{
      BreadCumbs,
      IconBootstrap
  }, 
  mounted(){ 
   
        this.getbenefit()
   
  },
  methods:{
    handleIcon(v){
        this.jsonData.image = v;
        this.isIcon = false;
    },
    getbenefit(){
      this.$axios.get("api/social_media/")
        .then((response) => {
          this.thisId = response.data.data.id;
          if(response.data.data.image) this.imagePrev = response.data.data.image;
          this.breadcumbs.title = 'Edit social media';
          //  let data = response.data.data;
           this.jsonData.name = response.data.data.name;  
           this.jsonData.description = response.data.data.description;  
           this.jsonData.address = response.data.data.alamat;  
           this.jsonData.wa = response.data.data.wa;  
           this.jsonData.email = response.data.data.email;  
           this.jsonData.fb = response.data.data.fb;  
           this.jsonData.ig = response.data.data.ig;  
           this.jsonData.linkedin = response.data.data.linkedin;  
           this.jsonData.twitter = response.data.data.twitter;  
           this.jsonData.tiktok = response.data.data.tiktok;  
           this.jsonData.youtube = response.data.data.youtube;  
           this.jsonData.image = response.data.data.image; 
            // console.log(breadcumbs)
        })
        .catch(() => {
             this.cantReload = false;
        });
    },
    inputFile(event) {
        this.jsonData.image = event.target.files[0];
        this.imagePrev = URL.createObjectURL( this.jsonData.image);
    },
    removeImg(e){
      e.preventDefault();
      this.jsonData.image = "";
      this.imagePrev = "";
      document.getElementById("uploadCaptureInputFile").value = "";
    },
    savebenefits(e){
      e.preventDefault();
      this.proses = true;
      let formData = new FormData();
      formData.append('name', this.jsonData.name); 
      formData.append('description', this.jsonData.description); 
      formData.append('address', this.jsonData.address); 
      formData.append('wa', this.jsonData.wa); 
      formData.append('email', this.jsonData.email); 
      formData.append('fb', this.jsonData.fb); 
      formData.append('ig', this.jsonData.ig); 
      formData.append('linkedin', this.jsonData.linkedin); 
      formData.append('twitter', this.jsonData.twitter); 
      formData.append('tiktok', this.jsonData.tiktok); 
      formData.append('youtube', this.jsonData.youtube); 
      formData.append('image', this.jsonData.image); 
      formData.append("_token", token);
        let stat = 'error',
            msg = 'Failed add social media';
      if(this.isAdd){
        this.$axios.post("api/social_media/", formData)
          .then((response) => {
            this.proses = false;
                this.$validation(response.data.msg,this.jsonResp)
                if(response.data.status){
                  stat = 'success',
                  msg = 'Success add social_media'; 
                  this.$router.push({ name : "social_media"});
                }  
                this.$isAlert(this,msg, stat)
          })
          .catch(() => {
            this.$isAlert(this,msg, stat)
              this.proses = false;
          });
      }else{
        formData.append('_method', 'PATCH');
        this.$axios.post("api/social_media/" + this.thisId, formData)
          .then((response) => {
            this.proses = false;
            let stat = 'error',
                msg = 'Failed Update social media';
                this.$validation(response.data.msg,this.jsonResp)
                if(response.data.status){
                  stat = 'success',
                  msg = 'Success Update social_media'; 
                  this.$router.push({ name : "social_media"});
                }  
                this.$isAlert(this,msg, stat)
          })
          .catch(() => {
            this.$isAlert(this,msg, stat)
              this.proses = false;
          });
      }
    }
  }
}
</script>

<style>
</style>