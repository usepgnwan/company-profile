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
                        <label for="title" class="form-label">Title</label>
                        <input type="text" class="form-control" :class="`${ jsonResp.title ? 'is-invalid' : ''}`" v-model="jsonData.title"  >
                        <div class="vinvalid-feedback text-danger" v-if="jsonResp.title">
                          {{ jsonResp.title }}
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
                        <label for="body" class="form-label">Body</label>
                         <textarea  class="form-control" v-model="jsonData.body" :class="`${ jsonResp.body ? 'is-invalid' : ''}`"/>
                        <div class="vinvalid-feedback text-danger" v-if="jsonResp.body">
                          {{ jsonResp.body }}
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
  name: "TestimoniForm",
  data(){
    return { 
      content:"",
      breadcumbs: {
        title : "Add New Testimoni",
        data : [
          {
            name : "Dashboard",
            link : "/account/dashboard",
            status : false
          },
          {
            name : "testimoni",
            link : "/account/testimoni",
            status : false
          },
          {
            name : "form",
            link : "/account/testimoni",
            status : true
          }
        ], 
      },
      jsonData : {
        name :"",
        title :"",
        body : "",
        image : ""
      },
      cantReload: true,
      editor: false,
      imagePrev : "", 
      jsonResp : {
        name :"",
        title :"",
        body : "",
        image : ""
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
    if(this.$route.params.id != undefined){
        this.isAdd = false;
        this.getbenefit(this.$route.params.id)
    } else{
      this.editor = true
    }
  },
  methods:{
    handleIcon(v){
        this.jsonData.image = v;
        this.isIcon = false;
    },
    getbenefit(id){
      this.$axios.get("api/testimoni/" + id)
        .then((response) => {
          this.thisId = response.data.data.id;
          if(response.data.data.image) this.imagePrev = response.data.data.image;
          this.breadcumbs.title = 'Edit testimoni';
          //  let data = response.data.data;
           this.jsonData.name = response.data.data.name; 
           this.jsonData.title = response.data.data.title;name 
           this.jsonData.body = response.data.data.body;
           this.jsonData.image = response.data.data.image;
           this.editor = true
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
      formData.append('title', this.jsonData.title);
      formData.append('body', this.jsonData.body);
      formData.append('image', this.jsonData.image);
      formData.append("_token", token);
        let stat = 'error',
            msg = 'Failed add testimoni';
      if(this.isAdd){
        this.$axios.post("api/testimoni/", formData)
          .then((response) => {
            this.proses = false;
                this.$validation(response.data.msg,this.jsonResp)
                if(response.data.status){
                  stat = 'success',
                  msg = 'Success add testimoni'; 
                  this.$router.push({ name : "testimoni"});
                }  
                this.$isAlert(this,msg, stat)
          })
          .catch(() => {
            this.$isAlert(this,msg, stat)
              this.proses = false;
          });
      }else{
        formData.append('_method', 'PATCH');
        this.$axios.post("api/testimoni/" + this.thisId, formData)
          .then((response) => {
            this.proses = false;
            let stat = 'error',
                msg = 'Failed Update testimoni';
                this.$validation(response.data.msg,this.jsonResp)
                if(response.data.status){
                  stat = 'success',
                  msg = 'Success Update testimoni'; 
                  this.$router.push({ name : "testimoni"});
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