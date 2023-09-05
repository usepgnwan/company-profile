<template>
  <div>
    <div class="d-flex"> 
        <div class="pagetitle">
            <h1>List Of Blog</h1>
            <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/account/dashboard">Dashboard</router-link></li>
                <li class="breadcrumb-item active">Blog</li>
            </ol>
            </nav>
        </div> 
        <div class="ms-auto">
            <button class="btn btn-primary" @click="formBlog"><i class="bi bi-plus"></i> Add Blog</button>
        </div>
    </div>
    
    <section class="section">
        <div class="row">
          <div class="col-lg-12">
  
            <div class="card">
              <div class="card-body mt-4 d-tbale">
  
                <app-datatable 
                    :items="items" 
                    :fields="fields" 
                    :meta="meta" 
                    :editUrl="editUrl"
                    :pinned="pinned"
                    :highlight="highlight"
                    :busy="loading"
                    :deleteModal = "deleted"
                    @per_page="handlePerPage" 
                    @pagination="handlePagination" 
                    @search="handleSearch" 
                    @sort="handleSort"
                    @delete="handleDelete"
                    @pinned="handlePinned"
                    @unset="handleUnset"
                />
              </div>
            </div> 
          </div>
        </div>
    </section>
    <!-- modal pinned / highlight -->
    <b-modal v-model="ispinned">
            <template v-slot:modal-header>
                 <h5 class="modal-title">Pinned / Highligh</h5><button @click="ispinned=false" class="btn btn-sm"><i class="ri-close-line"></i></button>
            </template>
            <select class="form-select" v-model="selectpin">
              <option value="0">-- Pilih --</option>
              <option value="pinned">Pinned</option>
              <option value="highligt">Highlight</option>
            </select>
            <template v-slot:modal-footer>
                <div>
                    <b-button
                        variant="secondary"
                        size="sm"
                        @click="ispinned=false"
                    >
                        Close
                    </b-button>
                    <button-proses :smbtn="true" v-if="proses"/>
                    <b-button
                        v-else
                        variant="primary"
                        size="sm"
                        @click="savePin"
                    >
                        Submit
                    </b-button>
                </div>
            </template>
        </b-modal>
  </div>
</template>

<script>

const token = document.head.querySelector("[name=csrf-token]").content;
import Datatable from '../../components/Datatable.vue' 
import $ from 'jquery';
export default { 
    name:"BlogView",
    data() {
      return {
        datas : [], 
        maxLength: 25,
        fields: [
                    {key: '#', sortable: false},
                    {key: 'title', sortable: true},
                    {key: 'thumbnail', sortable: false},
                    {key: 'body', sortable: false},
                    {key: 'actions', sortable: false}
                ],
        items: [], //DEFAULT VALUE DARI ITEMS ADALAH KOSONG
        meta: [], //JUGA BERLAKU UNTUK META
        current_page: 1, //DEFAULT PAGE YANG AKTIF ADA PAGE 1
        per_page: 10, //DEFAULT LOAD PERPAGE ADALAH 10
        search: '',
        sortBy: 'id', //DEFAULT SORTNYA ADALAH CREATED_AT
        sortByDesc: false,//ASCEDING,
        editUrl: 'blog/form/',
        pinned: 'Pinned on top Blog',
        highlight: 'Highlight on Body',
        loading: true,
        deleted:false,
        ispinned:false,
        selectpin:0,
        proses : false,
        row: {}
      }
    },
    methods: {  
        loadPostsData(filter = 'first') {
            let current_page = this.current_page 
            //LAKUKAN REQUEST KE API UNTUK MENGAMBIL DATA POSTINGAN
            this.loading = true;
            this.loading_tables();
            // setTimeout(() => { 
              this.$axios.get('/api/post', {
                  //KIRIMKAN PARAMETER BERUPA PAGE YANG SEDANG DILOAD, PENCARIAN, LOAD PERPAGE DAN SORTING.
                  params: {
                      page: current_page,
                      per_page: this.per_page,
                      q: this.search,
                      sortby: 'id',
                      // sortby: this.sortBy,
                      sortbydesc: this.sortByDesc ? 'DESC':'ASC'
                  }
              })
              .then((response) => {
                  this.loading = false;
                  this.loading_tables();
                  //JIKA RESPONSENYA DITERIMA
                  let getData = response.data.data 
                  let data = this.insertColumn(getData.data,getData.from);
                  let c = data = this.truncatedText(data);
                  
                  this.items = data; //MAKA ASSIGN DATA POSTINGAN KE DALAM VARIABLE ITEMS
                  //DAN ASSIGN INFORMASI LAINNYA KE DALAM VARIABLE META
                  // if(filter == 'perpage'){
                    if(this.current_page > getData.last_page ) {
                      this.page = getData.last_page; 
                      this.current_page = 1;
                      this.loadPostsData();
                      return;
                    };
                  // }
                  this.meta = {
                      total: getData.total,
                      current_page: getData.current_page,
                      per_page: getData.per_page,
                      from: getData.from,
                      to: getData.to
                  }
              })
              .catch ((err) => {
                  alert('Error fetching data');
                  $('.d-tbale').find('table').find('tbody').html(`
                      <tr class="text-center loading-tr">
                        <td colspan='5'>Error fetching data ${err.message} </span></td>
                      </tr>
                    `);
              })
            // }, 1000); // Simulated delay of 1 second
            
        },
        //JIKA ADA EMIT TERKAIT LOAD PERPAGE, MAKA FUNGSI INI AKAN DIJALANKAN
        handlePerPage(val) {
            this.page = 1; 
            this.per_page = val //SET PER_PAGE DENGAN VALUE YANG DIKIRIM DARI EMIT
            this.loadPostsData('perpage') //DAN REQUEST DATA BARU KE SERVER
        },
        //JIKA ADA EMIT PAGINATION YANG DIKIRIM, MAKA FUNGSI INI AKAN DIEKSEKUSI
        handlePagination(val) {
            this.current_page = val //SET CURRENT PAGE YANG AKTIF
            this.loadPostsData()
        },
        //JIKA ADA DATA PENCARIAN
        handleSearch(val) {
            this.search = val //SET VALUE PENCARIAN KE VARIABLE SEARCH
            this.loadPostsData() //REQUEST DATA BARU
        },
        //JIKA ADA EMIT SORT
        handleSort(val) {
            //MAKA SET SORT-NYA
            this.sortBy = 'id'
            // this.sortBy = val.sortBy
            this.sortByDesc = val.sortDesc
            this.loadPostsData() //DAN LOAD DATA BARU BERDASARKAN SORT
        },
        insertColumn(arr, page) {
            for (var i = 0; i < arr.length; i++) { 
              arr[i].inCrement = page++;
            }  
            return arr;
        },
        formBlog(){
            this.$router.push({ path : "blog/form"});
        },
        truncatedText(arr) {
           
          return arr.map((val,i)=>{ 
                    let x = val;
                    if (x.body.length >= this.maxLength) {
                       x.body = val.body.substring(0, this.maxLength) + '...';
                    } 
                    return x;
                  });
        },
        loading_tables(){
          if(this.loading){
            $('.d-tbale').find('table').find('tbody').addClass('loading-table').prepend(`
              <tr class="text-center loading-tr">
                <td colspan='5'><span class="spinner-grow text-primary" style="width: 30px; height: 30px;"></span></td>
              </tr>
            `);
          }else{
            $('.d-tbale').find('table').find('tbody').removeClass('loading-table').find('tr.loading-tr').remove();
          }
        },
        handleDelete(val){ 
           /**
             let formData = new FormData();
                  formData.append('_method', 'delete'); 
                  formData.append("_token", token);  
                  let stat = 'error',
                        msg = 'Failed delete blog';
                    this.$axios.post("api/post/" + val.id, formData)
                      .then((response) => { 
                            if(response.data.status){
                              this.deleted = false; 
                              this.loadPostsData();
                              stat = 'success',
                              msg = 'Success delete blog';
                            }  
                            this.$isAlert(this,msg, stat)
                      })
                      .catch(() => {
                        this.$isAlert(this,msg, stat)
                          this.proses = false;
                      }); 
            */
          let formData = new FormData();
          formData.append('_method', 'delete'); 
          formData.append("_token", token);
          this.$swal({
              title: 'Are you sure?',
              text: "Delete data",
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes'
            }).then((result) => {
              if (result.value) { 
                this.loadPostsData() 
                let stat = 'error',
                    msg = 'Failed delete blog';
                  this.$axios.post("api/post/" + val.id, formData)
                    .then((response) => { 
                          if(response.data.status){
                            this.deleted = false; 
                            this.loadPostsData();
                            stat = 'success',
                            msg = 'Success delete blog';
                          }  
                          this.$swal('Success', msg, stat)
                    })
                    .catch(() => {
                      this.$swal('Success',' has been deleted.', stat) 
                    });
              }
            }); 
        },
        handlePinned(val){ 
          this.ispinned = true;
          this.row = val;
          this.proses = false;
          this.selectpin = 0;
        },
        savePin(){ 
          if(this.selectpin == 0) {
            this.$swal('Warning', "pilih terlebih dahulu.", "warning");
            return;
          }
          this.proses = true;
          let stat = 'error',
              msg = 'Failed ' + this.selectpin;
          let formData = new FormData();
                formData.append('_method', 'PUT'); 
                this.$axios.post("api/post/pinned/" + this.row.id + '/' + this.selectpin, formData)
                .then((response) => { 
                    this.ispinned = false; 
                    if(response.data.status){
                      this.deleted = false; 
                      this.loadPostsData();
                      stat = 'success',
                      msg = 'Success ' + this.selectpin;
                    }  
                    this.$swal('Success', msg, stat)
                })
                .catch(() => {
                  this.$swal('Success', this.selectpin +' has been deleted.', stat) 
                });
        },
        handleUnset(val, type){
          this.$swal({
              title: 'Are you sure?',
              text: "Unpin " + type,
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes'
            }).then((result) => {
              if (result.value) { 
                this.loadPostsData()
                let formData = new FormData();
                formData.append('_method', 'PUT'); 
                formData.append("_token", token);  
                let stat = 'error',
                      msg = 'Failed unpin ' + type;
                  this.$axios.post("api/post/unset/" + val.id, formData)
                    .then((response) => { 
                          if(response.data.status){
                            this.deleted = false; 
                            this.loadPostsData();
                            stat = 'success',
                            msg = 'Success unpin ' + type;
                          }  
                          this.$swal('Success', msg, stat)
                    })
                    .catch(() => {
                      this.$swal('Success', type +' has been deleted.', stat) 
                    });
              }
            });
        }
    },
    created(){ 
      this.loadPostsData();
    },
    mounted(){
      this.loading_tables()
    },
    components:{ 
      'app-datatable': Datatable //REGISTER COMPONENT DATATABLE
    }
}
</script>

<style scope>
/* .loading-table {
  opacity: 0% !important;
} */
.loading-table > tr, td, th {
  border-style: none !important;
} 

.loading-table tr [role]{
  display: none;
}
</style>