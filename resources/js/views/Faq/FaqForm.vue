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
                        <label for="body" class="form-label">Body</label>
                         <textarea  class="form-control" v-model="jsonData.body" :class="`${ jsonResp.body ? 'is-invalid' : ''}`"/>
                        <div class="vinvalid-feedback text-danger" v-if="jsonResp.body">
                          {{ jsonResp.body }}
                        </div>
                      </div> 
                      <div class="text-end">
                        <button v-if="!proses" type="submit" class="btn btn-primary" v-on:click="saveServices($event)">Submit</button>
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
  name: "ServiceForm",
  data(){
    return { 
      content:"",
      breadcumbs: {
        title : "Add New Faq",
        data : [
          {
            name : "Dashboard",
            link : "/account/dashboard",
            status : false
          },
          {
            name : "Faq",
            link : "/account/faq",
            status : false
          },
          {
            name : "form",
            link : "/account/faq",
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
        this.getservice(this.$route.params.id)
    } else{
      this.editor = true
    }
  },
  methods:{
    handleIcon(v){
        this.jsonData.image = v;
        this.isIcon = false;
    },
    getservice(id){
      this.$axios.get("api/faq/" + id)
        .then((response) => {
          this.thisId = response.data.data.id;
          if(response.data.data.image) this.imagePrev = response.data.data.image;
          this.breadcumbs.title = 'Edit Faq';
          //  let data = response.data.data;
           this.jsonData.title = response.data.data.title; 
           this.jsonData.body = response.data.data.body;
           this.jsonData.image = response.data.data.image;
           this.editor = true
            // console.log(breadcumbs)
        })
        .catch(() => {
             this.cantReload = false;
        });
    },
    inputFile() {
        this.isIcon = true;
    },
    removeImg(e){
      e.preventDefault();
      this.jsonData.image = "";
      this.imagePrev = "";
      document.getElementById("uploadCaptureInputFile").value = "";
    },
    saveServices(e){
      e.preventDefault();
      this.proses = true;
      let formData = new FormData();
      formData.append('title', this.jsonData.title);
      formData.append('body', this.jsonData.body);
      formData.append('image', this.jsonData.image);
      formData.append("_token", token);
        let stat = 'error',
            msg = 'Failed add Faq';
      if(this.isAdd){
        this.$axios.post("api/faq/", formData)
          .then((response) => {
            this.proses = false;
                this.$validation(response.data.msg,this.jsonResp)
                if(response.data.status){
                  stat = 'success',
                  msg = 'Success add Faq'; 
                  this.$router.push({ name : "faq"});
                }  
                this.$isAlert(this,msg, stat)
          })
          .catch(() => {
            this.$isAlert(this,msg, stat)
              this.proses = false;
          });
      }else{
        formData.append('_method', 'PATCH');
        this.$axios.post("api/faq/" + this.thisId, formData)
          .then((response) => {
            this.proses = false;
            let stat = 'error',
                msg = 'Failed Update Faq';
                this.$validation(response.data.msg,this.jsonResp)
                if(response.data.status){
                  stat = 'success',
                  msg = 'Success Update Faq'; 
                  this.$router.push({ name : "faq"});
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