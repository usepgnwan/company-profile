<template>
  <div>
    <editor  
    v-model="content" 
    :init="!this.inlineEditor ? editorConfig: inlineConfig" 
    @input="handleEditorChange"
    />    
    <!-- <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"> -->
  </div>
</template>

<script>
// import { defineProps, defineEmits } from 'vue';
import  Editor from '@tinymce/tinymce-vue';
// defineProps(['modelValue'])
// defineEmits(['update:modelValue'])
export default {
  components: {
    Editor,
  },
  props: ['modelValue', 'inlineEditor'],
  data() {
    return {
      content: this.modelValue,
      inlineType: this.inlineEditor,
      editorConfig: {
        // TinyMCE configurations, customize as needed
        plugins: 'image table preview media paste_block_drop',
        toolbar: 'undo redo | image | table | preview| media | foto',
        images_upload_url :  this.$baseUrl + "/api/post/upload/image",
        paste_data_images: false, // Disable pasting of images
        // images_upload_handler: this.image_upload_handler
        inline: false
      },
      inlineConfig: {
        menubar: true,
        inline: true, 
          plugins: [
              "advlist autolink lists link charmap print preview anchor textcolor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime table contextmenu paste textcolor"
          ],
          toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | forecolor backcolor"
        
      }
    };
  },
  methods: { 
    handleEditorChange(editorContent) {
      // alert("kontolodon") 
      // if(editorContent.level.fragments != null){
      //   // console.log(editorContent);
      //   // editorContent.level.fragments.forEach((i, val)=>{
      //   //   this.content += val;
      //   // }); 
      //   this.contet = editorContent.lastLevel.content;
      //   if(editorContent.originalEvent != undefined) this.contet += editorContent.originalEvent.value;
      // }else{
      //   this.content = editorContent.level.content;
      // }
     
     
      // // Handle the editor content change here
      // // this.content = editorContent; 
      this.$emit('input', editorContent); 
    },
    image_upload_handler (blobInfo, progress){new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.open('POST', this.$baseUrl + "/api/post/upload/image");
          var token = document.head.querySelector("[name=csrf-token]").content;
            xhr.setRequestHeader("X-CSRF-Token", token);
          xhr.upload.onprogress = (e) => {
            progress(e.loaded / e.total * 100);
          };

          xhr.onload = () => {
            // if (xhr.status === 403 || xhr.status === 500) {
            //   reject({ message: 'HTTP Error: ' + xhr.status, remove: true });
            //   return;
            // } 
            let json = JSON.parse(xhr.responseText);

            if( 200 >= xhr.status <= 300 ){
              return resolve(json.location);
            }else{
              reject({ message: 'HTTP Error: ' + xhr.status, remove: true });
              return;
            }
            
          };

          xhr.onerror = () => {
            reject({ message: 'Image upload failed due to a XHR Transport error. Code: ' + xhr.status, remove: true });
          };
          // var token = document.head.querySelector("[name=csrf-token]").content;
          const formData = new FormData();
          formData.append('file', blobInfo.blob(), blobInfo.filename());
          formData.append("_token", token);
          xhr.send(formData);
    })} ,
    handleImageUpload(blobInfo, success, failure, progress) {
      const xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.open('POST', this.$baseUrl + "/api/post/upload/image");

          // xhr.upload.onprogress = (e) => {
          //   progress(e.loaded / e.total * 100);
          // };

          xhr.onload = () => {
            if (xhr.status === 403 || xhr.status === 500) {
              failure({ message: 'HTTP Error: ' + xhr.status, remove: true });
              return;
            }

            if (xhr.status < 200 || xhr.status >= 300) {
              failure('HTTP Error: ' + xhr.status);
              return;
            }

            let json = JSON.parse(xhr.responseText);
            console.log(json)
            if (!json || typeof json.location != 'string') {
              failure('Invalid JSON: ' + xhr.responseText);
              return;
            }

            return success(json.location);
            
          };

          xhr.onerror = () => {
            failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
          };
          var token = document.head.querySelector("[name=csrf-token]").content;
          const formData = new FormData();
          formData.append('file', blobInfo.blob(), blobInfo.filename());
          formData.append("_token", token);
          xhr.send(formData);
    }
  }, 
};
</script>

<style>
/* Add any custom styles for the editor here */
</style>