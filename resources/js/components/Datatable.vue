<template>
    <div class="row">
      
      	<!-- BLOCK INI AKAN MENGHANDLE LOAD DATA PERPAGE, DENGAN DEFAULT ADALAH 10 DATA -->
        <div class="col-md-4 mb-2">
            <div class="form-inline">
                <label class="mr-2">Showing</label>
                <!-- KETIKA SELECT BOXNYA DIGANTI, MAKA AKAN MENJALANKAN FUNGSI loadPerPage -->
                <select class="form-control" v-model="meta.per_page" @change="loadPerPage">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <label class="ml-2">Entries</label>
            </div>
        </div>
      
        <!-- BLOCK INI AKAN MENG-HANDLE PENCARIAN DATA -->
        <div class="col-md-4 offset-md-4">
            <div class="form-inline float-right">
                <label class="mr-2">Search</label>
                <!-- KETIKA ADA INPUTAN PADA KOLOM PENCARIAN, MAKA AKAN MENJALANKAN FUNGSI SEARCH -->
                <input type="text" class="form-control" @input="search">
            </div>
        </div>
      
      	<!-- BLOCK INI AKAN MENGHASILKAN LIST DATA DALAM BENTUK TABLE MENGGUNAKAN COMPONENT TABLE DARI BOOTSTRAP VUE -->
        <div class="col-md-12">
            <!-- :ITEMS ADALAH DATA YANG AKAN DITAMPILKAN -->
            <!-- :FIELDS AKAN MENJADI HEADER DARI TABLE, MAKA BERISI FIELD YANG SALING BERKORELASI DENGAN ITEMS -->
            <!-- :sort-by.sync & :sort-desc.sync AKAN MENGHANDLE FITUR SORTING -->                
            <!-- <div  v-if="isBusy" class="text-center  ">
                <span class="paytm-loader" style="z-index: 99999 !important;position: absolute;"></span>
            </div> -->
            <b-table striped hover :items="items" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" show-empty :busy.sync="isBusy">
                <template v-slot:cell(#)="row" >
                     {{ row.item.inCrement }}
                </template>
                <template v-slot:cell(thumbnail)="row" >
                        <span v-if="isicon" :class="row.item.image" style="font-size: 80px !important; color: rgb(166, 198, 241);"></span>
                        <img v-else :src="row.item.image" width="125" alt="no found image">
                </template>
                <template v-slot:cell(actions)="row">
                    <!-- TOMBOL EDIT HANYA AKAN DITAMPILKAN, JIKA PROPS DARI editUrl ADA VALUENYA -->
                    <a :href="editUrl + (!isid ? row.item.slug : row.item.id)" v-if="editUrl" class="btn btn-warning btn-sm mt-1"><i class="ri-edit-box-line"></i></a>
                    <!-- TOMBOL DELETE AKAN MEMBUKA MODAL KONFIRMASI -->
                    <button class="btn btn-danger btn-sm mt-1" @click="deleteModalButton(row)"><i class="bx bxs-trash"></i></button>

                    <span  v-if="row.item.pinned" >
                        <button @click="buttonUnsetPinned(row, 'Pinned')" v-if="row.item.pinned" class="btn btn-success btn-sm mt-1" v-b-tooltip.hover :title="pinned"><i class="ri-pushpin-2-fill"></i></button><br>
                        <small class="text-danger">Pinned</small>
                    </span>
                    <span v-if="row.item.highlight" >
                        <button @click="buttonUnsetPinned(row, 'Highlight')" v-if="row.item.highlight" class="btn btn-success btn-sm mt-1" v-b-tooltip.hover :title="highlight"><i class="ri-pushpin-2-fill"></i></button><br>
                        <small class="text-danger">highlight</small>
                    </span>

                    <button @click="buttonPined(row)" v-if="!row.item.highlight && !row.item.pinned " class="btn btn-outline-success btn-sm mt-1"><i class="ri-pushpin-2-fill"></i></button>
                </template>
            </b-table>   
        </div>
      
      	<!-- BAGIAN INI AKAN MENAMPILKAN JUMLAH DATA YANG DI-LOAD -->
        <div class="col-md-6">
            <p>Showing {{ meta.from }} to {{ meta.to }} of {{ meta.total }} items</p>
        </div>
      
      	<!-- BLOCK INI AKAN MENJADI PAGINATION DARI DATA YANG DITAMPILKAN -->
        <div class="col-md-6">
          	<!-- DAN KETIKA TERJADI PERGANTIAN PAGE, MAKA AKAN MENJALANKAN FUNGSI changePage -->
            <b-pagination
                v-model="meta.current_page"
                :total-rows="meta.total"
                :per-page="meta.per_page"
                align="right"
                @change="changePage"
                aria-controls="dw-datatable"
            ></b-pagination>
        </div>
        
        <!-- TITLE MODAL AKAN MENYESUAIKAN DENGAN VALUE PROPS TITLE -->
        <b-modal v-model="deleted" :title="title">
            <template v-slot:modal-header>
                 <h5 class="modal-title">Delete Modal</h5><button @click="deleted=false" class="btn btn-sm"><i class="ri-close-line"></i></button>
            </template>
            <p>Kamu yakin ingin menghapus data ini?</p>
            <template v-slot:modal-footer>
                <div>
                    <b-button
                        variant="secondary"
                        size="sm"
                        @click="deleted=false"
                    >
                        Close
                    </b-button>
                    <!-- JIKA TOMBOL DELETE DITEKAN, MAKA FUNGSI deleteModalButton AKAN DIJALANKAN -->
                    <button-proses :smbtn="true" v-if="proses"/>
                    <b-button
                        v-else
                        variant="primary"
                        size="sm"
                        @click="deleteModalButton"
                    >
                        Delete
                    </b-button>
                </div>
            </template>
        </b-modal>
    </div> 
</template>

<script>
import _ from 'lodash' //IMPORT LODASH, DIMANA AKAN DIGUNAKAN UNTUK MEMBUAT DELAY KETIKA KOLOM PENCARIAN DIISI
import ButtonProses from './ButtonProses.vue'

export default {
  components: { ButtonProses },
    //PROPS INI ADALAH DATA YANG AKAN DIMINTA DARI PENGGUNA COMPONENT DATATABLE YANG KITA BUAT
    props: {
        //ITEMS STRUKTURNYA ADALAH ARRAY, KARENA BAGIAN INI BERISI DATA YANG AKAN DITAMPILKAN DAN SIFATNYA WAJIB DIKIRIMKAN KETIKA COMPONENT INI DIGUNAKAN
        items: {
            type: Array,
            required: true
        },
        //FIELDS JUGA SAMA DENGAN ITEMS
        fields: {
            type: Array,
            required: true
        },
        //ADAPUN META, TYPENYA ADALAH OBJECT YANG BERISI INFORMASI MENGENAL CURRENT PAGE, LOAD PERPAGE, TOTAL DATA, DAN LAIN SEBAGAINYA.
        meta: {
            required: true
        },
        title: {
            type: String,
            default: "Delete Modal"
        },
        pinned: {
            type: String,
            default: null
        },
        highlight: {
            type: String,
            default: null
        }, 
        editUrl: {
            type: String,
            default: null
        }, 
        deleteModal:{
            type : Boolean
        },
        isicon:{
            type : Boolean
        },
        isid:{
            type : Boolean
        }
    },
    data() {
        return {
            //VARIABLE INI AKAN MENGHADLE SORTING DATA
            sortBy: null, //FIELD YANG AKAN DISORT AKAN OTOMATIS DISIMPAN DISINI
            sortDesc: false, //SEDANGKAN JENISNYA ASCENDING ATAU DESC AKAN DISIMPAN DISINI
            autoInt : 1,
            isBusy: false,
            deleted : this.deleteModal,
            proses: false 
        }
    },
    watch: {
        //KETIKA VALUE DARI VARIABLE sortBy BERUBAH
        sortBy(val) {
            //MAKA KITA EMIT DENGAN NAMA SORT DAN DATANYA ADALAH OBJECT BERUPA VALUE DARI SORTBY DAN SORTDESC
            //EMIT BERARTI MENGIRIMKAN DATA KEPADA PARENT ATAU YANG MEMANGGIL COMPONENT INI
            //SEHINGGA DARI PARENT TERSEBUT, KITA BISA MENGGUNAKAN VALUE YANG DIKIRIMKAN
            this.$emit('sort', {
                sortBy: this.sortBy,
                sortDesc: this.sortDesc
            })
        },
        //KETIKA VALUE DARI SORTDESC BERUBAH
        sortDesc(val) {
            //MAKA CARA YANG SAMA AKAN DIKERJAKAN
            this.$emit('sort', {
                sortBy: this.sortBy,
                sortDesc: this.sortDesc
            })
        }
    },
    methods: {
        //JIKA SELECT BOX DIGANTI, MAKA FUNGSI INI AKAN DIJALANKAN
        loadPerPage(val) {
            //DAN KITA EMIT LAGI DENGAN NAMA per_page DAN VALUE SESUAI PER_PAGE YANG DIPILIH
            this.$emit('per_page', this.meta.per_page)
        },
        //KETIKA PAGINATION BERUBAH, MAKA FUNGSI INI AKAN DIJALANKAN
        changePage(val) {
            //KIRIM EMIT DENGAN NAMA PAGINATION DAN VALUENYA ADALAH HALAMAN YANG DIPILIH OLEH USER
            this.$emit('pagination', val)
        },
        //KETIKA KOTAK PENCARIAN DIISI, MAKA FUNGSI INI AKAN DIJALANKAN
        //KITA GUNAKAN DEBOUNCE UNTUK MEMBUAT DELAY, DIMANA FUNGSI INI AKAN DIJALANKAN
        //500 MIL SECOND SETELAH USER BERHENTI MENGETIK
        search: _.debounce(function (e) {
            //KIRIM EMIT DENGAN NAMA SEARCH DAN VALUE SESUAI YANG DIKETIKKAN OLEH USER
            this.$emit('search', e.target.value)
        }, 500),
        openDeleteModal(row) {
            this.deleted = true;
            this.selected = row.item
            this.proses = false
        },
        deleteModalButton(row) {
            this.$emit('delete', row.item)
            // this.proses = true
            // this.deleted = this.deleteModal
        },
        buttonPined(row) {
            this.$emit('pinned', row.item) 
        },
        buttonUnsetPinned(row, type){
            this.$emit('unset', row.item, type)
        }
    }
}
</script>

<style scoped>
.table-container  {
  position: relative;
  width: 100%;
}
.b-table[aria-busy="true"] + .table-spinner {
  /* this assumes that the spinner component has a width and height */
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10; /* make sure spinner is over table */
    margin-top: 100px; 
    text-align: center;
    width: 100%;
    opacity: 100%;
}

.table[aria-busy="true"] + .paytm-loader {
  top: 50%;
  color: #002e6e;
  width: 3px;
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
  transform: translateX(-38px);
  animation: loader 0.5s infinite alternate linear;
  -webkit-box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
  -webkit-transform: translateX(-38px);
  -webkit-animation: loader 0.5s infinite alternate linear;
}

@keyframes loader {
  50% {
    box-shadow: 19px 0 0 3px, 38px 0 0 7px, 57px 0 0 3px;
  }
  100% {
    box-shadow: 19px 0 0 0, 38px 0 0 3px, 57px 0 0 7px;
  }
}

@-webkit-keyframes loader {
  50% {
    box-shadow: 19px 0 0 3px, 38px 0 0 7px, 57px 0 0 3px;
  }
  100% {
    box-shadow: 19px 0 0 0, 38px 0 0 3px, 57px 0 0 7px;
  }
}

</style>