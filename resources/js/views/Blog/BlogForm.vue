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
                        <label for="title" class="form-label">Title</label>
                        <input type="text" class="form-control" :class="`${ jsonResp.title ? 'is-invalid' : ''}`" v-model="jsonData.title"  >
                        <div class="vinvalid-feedback text-danger" v-if="jsonResp.title">
                          {{ jsonResp.title }}
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="foto" class="form-label">Foto / Cover</label>
                        <div v-if="imagePrev" class="pt-1 pb-1" style="position: relative; max-width: 300px;">
                          <button style="position:absolute;column-rule: none;border: none; right: 0px; margin:5px;" class="badge rounded-pill bg-danger" v-on:click="removeImg($event)"> x </button>
                          <img :src="imagePrev" alt="" width="300">
                        </div>
                        <input type="file" class="form-control"  v-on:change="inputFile($event)"  accept="image/x-png,image/gif,image/jpeg" id="uploadCaptureInputFile" :class="`${ jsonResp.image ? 'is-invalid' : ''}`">
                        <div class="vinvalid-feedback text-danger" v-if="jsonResp.image">
                        </div>
                      </div>
                      <!-- <div class="col-12">
                        <UploadFile :UploadFile="jsonData.image"/>
                      </div> -->
                      <div class="col-12">
                        <label for="body" class="form-label">Body</label>
                         <TinyMCEEditor :modelValue="jsonData.body" v-model="jsonData.body" v-if="editor" :class="`${ jsonResp.body ? 'is-invalid' : ''}`"/>
                        <div class="vinvalid-feedback text-danger" v-if="jsonResp.body">
                          {{ jsonResp.body }}
                        </div>
                      </div> 
                      <div class="text-end">
                        <button v-if="!proses" type="submit" class="btn btn-primary" v-on:click="saveBlog($event)">Submit</button>
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
      </div>
</template>

<script>
  // import viewErr from "../404/404View.vue" 
  import BreadCumbs from "@components/layout/dashboard/BreadCumbs.vue" 
  import TinyMCEEditor from '../../components/TinyMCEEditor.vue';
  // import UploadFile from '../../components/UploadFile.vue';
  
const token = document.head.querySelector("[name=csrf-token]").content;
export default {
  name: "BlogForm",
  data(){
    return { 
      content:"",
      breadcumbs: {
        title : "Add New Blog",
        data : [
          {
            name : "Dashboard",
            link : "/account/dashboard",
            status : false
          },
          {
            name : "Blog",
            link : "/account/blog",
            status : false
          },
          {
            name : "form",
            link : "/account/blog",
            status : true
          }
        ], 
      },
      jsonData : {
        title :"",
        body : "",
        image : ""
      },
      cantReload: true,
      editor: false,
      imagePrev : "", 
      jsonResp : {
        title :"",
        body : "",
        image : ""
      },
      proses : false,
      isAdd : true,
      thisId : 0
    }
  },
  components:{
      BreadCumbs,
      TinyMCEEditor
  }, 
  mounted(){ 
    if(this.$route.params.id != undefined){
        this.isAdd = false;
        this.getPost(this.$route.params.id)
    } else{
      this.editor = true
    }
    
  },
  methods:{
    getPost(id){
      this.$axios.get("api/post/" + id)
        .then((response) => {
          this.thisId = response.data.data.id;
          if(response.data.data.image) this.imagePrev = response.data.data.image;
          this.breadcumbs.title = 'Edit Blog';
          //  let data = response.data.data;
           this.jsonData.title = response.data.data.title; 
           this.jsonData.body = response.data.data.body;
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
    saveBlog(e){
      e.preventDefault();
      this.proses = true;
      let formData = new FormData();
      formData.append('title', this.jsonData.title);
      formData.append('body', this.jsonData.body);
      formData.append('image', this.jsonData.image);
      formData.append("_token", token);
      if(this.isAdd){
        let msg = 'Failed add blog';
        this.$axios.post("api/post/", formData)
          .then((response) => {
            this.proses = false;
            let stat = 'error';
                this.$validation(response.data.msg,this.jsonResp)
                if(response.data.status){
                  stat = 'success',
                  msg = 'Success add blog'; 
                  this.$router.push({ name : "blog"});
                }  
                this.$isAlert(this,msg, stat)
          })
          .catch(() => {
            this.$isAlert(this,msg, stat)
              this.proses = false;
          });
      }else{
       let msg = 'Failed Update blog';
        formData.append('_method', 'PATCH');
        this.$axios.post("api/post/" + this.thisId, formData)
          .then((response) => {
            this.proses = false;
            let stat = 'error';
                this.$validation(response.data.msg,this.jsonResp)
                if(response.data.status){
                  stat = 'success',
                  msg = 'Success Update blog'; 
                  this.$router.push({ name : "blog"});
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