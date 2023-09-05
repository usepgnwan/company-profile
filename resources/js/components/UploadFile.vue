<template> 
    <div>
        <div class="dropbox" v-if="isInitial">
            <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
            accept="image/*" class="input-file">
            <p v-if="isInitial">
                Drag your file(s) here to begin<br> or click to browse
            </p>
            <p v-if="isSaving">
                Uploading {{ fileCount }} files...
            </p>  
        </div>
        <!--SUCCESS-->
        <div v-if="isSuccess">
            <!-- {{ uploadedFiles }} -->
            <h2>Uploaded {{ uploadedFiles.length }} file(s) successfully.</h2>
            <p>
            <a href="javascript:void(0)" @click="reset()">Upload again</a>
            </p>
            <ul class="list-unstyled">
            <li v-for="item in uploadedFiles">
                <img :src="item" class="img-responsive img-thumbnail" :alt="item.originalName">
            </li>
            </ul>
        </div>
    </div> 
</template>

<script>

const token = document.head.querySelector("[name=csrf-token]").content;
const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;
export default {
    name:"UploadFile",
    props: [
        'isMultiple',
        'filesUpload',
        // 'isSaving',
        // 'isInitial',
        // 'fileCount',
        'accepted'
    ],
    data() {
      return {
        uploadedFiles: [],
        uploadError: null,
        currentStatus: null,
        uploadFieldName: 'file'
      }
    },
    computed: {
        isInitial() {
            return this.currentStatus === STATUS_INITIAL;
        },
        isSaving() {
            return this.currentStatus === STATUS_SAVING;
        },
        isSuccess() {
            return this.currentStatus === STATUS_SUCCESS;
        },
        isFailed() {
            return this.currentStatus === STATUS_FAILED;
        }
    },
    methods: {
        reset() {
        if(this.uploadedFiles.length > 0){
            alert('ok')
                const formDatas = new FormData();
                formDatas.append('nameFile',  JSON.stringify(this.uploadedFiles));
                formDatas.append("_token", token);
                this.$axios.post("/api/post/delete/image", formDatas).then((x) => {
                })
                .catch ((err) => {
                    // console.log(err)
                    // this.uploadedFiles =  err.response;
                    // this.currentStatus = STATUS_SUCCESS;
                });
            }
            this.currentStatus = STATUS_INITIAL;
            this.uploadedFiles = [];
            this.uploadError = null; 

        },
        save(formData) {
            // upload data to the server
            this.currentStatus = STATUS_SAVING; 
            const formDatas = new FormData();
            formDatas.append('file', formData);
            formDatas.append("_token", token); 
            this.$axios.post("/api/post/upload/image", formData).then((x) => {
                this.uploadedFiles = [].concat(x.data.location);
                this.currentStatus = STATUS_SUCCESS;
                console.log(this.uploadedFiles)
            })
            .catch ((err) => {
                // console.log(err)
                this.uploadedFiles =  err.response;
                this.currentStatus = STATUS_SUCCESS;
            });

        },
        filesChange(fieldName, fileList) {
            // handle file changes
            const formData = new FormData();

            if (!fileList.length) return;

            // append the files to FormData
            Array
            .from(Array(fileList.length).keys())
            .map(x => {
                formData.append(fieldName, fileList[x], fileList[x].name);
            });

            // save it
            this.save(formData);
        },
        leaving: function () {
                alert("Leaving...");
        },
    },
    mounted() {  
        this.reset()
    
    },
    ready: function () {
        Vue.util.on(window, 'beforeunload',
            this.leaving,
            false);
        //window.onmouseout = this.leaving;

    } 
}
</script>


<style scope>
  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }
  
  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }
  
  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }
  
  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>