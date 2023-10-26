<template>
  <div class="container-fluid">
    <BreadCumbs :breadcumbs="this.breadcumbs" />
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body text-center p-4">
             Hello {{ name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCumbs from "../components/layout/dashboard/BreadCumbs.vue" 
export default {
  name: "Home",
  data() {
    return { 
        breadcumbs: {
                title : "Dashboard",
                data : [
                {
                    name : "Dashboard",
                    link : "/",
                    status : true
                } 
                ]
        },
        name : localStorage.getItem('name')
    }
  },
  components:{
    BreadCumbs
  }
};
</script>
