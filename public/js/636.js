"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[636],{7581:(t,e,n)=>{n.d(e,{Z:()=>a});var o=n(3645),i=n.n(o)()((function(t){return t[1]}));i.push([t.id,"",""]);const a=i},3730:(t,e,n)=>{n.d(e,{Z:()=>_});var o,i=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],a=function(t){return-1!==i.map((function(t){return t.toLowerCase()})).indexOf(t.toLowerCase())},s=function(t,e,n){var o=e.$props.value?e.$props.value:"",i=e.$props.initialValue?e.$props.initialValue:"";n.setContent(o||(e.initialized?e.cache:i)),e.$watch("value",(function(t,o){n&&"string"==typeof t&&t!==o&&t!==n.getContent({format:e.$props.outputFormat})&&n.setContent(t)})),e.$listeners.input&&function(t,e){var n=t.$props.modelEvents?t.$props.modelEvents:null,o=Array.isArray(n)?n.join(" "):n;e.on(o||"change input undo redo",(function(){t.$emit("input",e.getContent({format:t.$props.outputFormat}))}))}(e,n),function(t,e,n){Object.keys(e).filter(a).forEach((function(o){var i=e[o];"function"==typeof i&&("onInit"===o?i(t,n):n.on(o.substring(2),(function(t){return i(t,n)})))}))}(t,e.$listeners,n),e.initialized=!0},r=0,l=function(t){var e=Date.now();return t+"_"+Math.floor(1e9*Math.random())+ ++r+String(e)},d=function(t){return void 0===t||""===t?[]:Array.isArray(t)?t:t.split(" ")},c=function(){return{listeners:[],scriptId:l("tiny-script"),scriptLoaded:!1}},u=(o=c(),{load:function(t,e,n){o.scriptLoaded?n():(o.listeners.push(n),t.getElementById(o.scriptId)||function(t,e,n,o){var i=e.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=t,i.src=n;var a=function(){i.removeEventListener("load",a),o()};i.addEventListener("load",a),e.head&&e.head.appendChild(i)}(o.scriptId,t,e,(function(){o.listeners.forEach((function(t){return t()})),o.scriptLoaded=!0})))},reinitialize:function(){o=c()}}),p=function(){var t="undefined"!=typeof window?window:n.g;return t&&t.tinymce?t.tinymce:null},m={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(t){return"html"===t||"text"===t}}},v=function(){return v=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},v.apply(this,arguments)},h=function(t){return function(){var e,n,o,i=v(v({},t.$props.init),{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:(e=t.$props.init&&t.$props.init.plugins,n=t.$props.plugins,d(e).concat(d(n))),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(e){t.editor=e,e.on("init",(function(n){return s(n,t,e)})),t.$props.init&&"function"==typeof t.$props.init.setup&&t.$props.init.setup(e)}});null!==(o=t.element)&&"textarea"===o.tagName.toLowerCase()&&(t.element.style.visibility="",t.element.style.display=""),p().init(i)}};const f={components:{Editor:{props:m,created:function(){this.elementId=this.$props.id||l("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline,this.initialized=!1},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==p())h(this)();else if(this.element&&this.element.ownerDocument){var t=this.$props.cloudChannel?this.$props.cloudChannel:"5",e=this.$props.apiKey?this.$props.apiKey:"no-api-key",n=null==this.$props.tinymceScriptSrc?"https://cdn.tiny.cloud/1/"+e+"/tinymce/"+t+"/tinymce.min.js":this.$props.tinymceScriptSrc;u.load(this.element.ownerDocument,n,h(this))}},beforeDestroy:function(){null!==p()&&p().remove(this.editor)},deactivated:function(){var t;this.inlineEditor||(this.cache=this.editor.getContent(),null===(t=p())||void 0===t||t.remove(this.editor))},activated:function(){!this.inlineEditor&&this.initialized&&h(this)()},render:function(t){return this.inlineEditor?function(t,e,n){return t(n||"div",{attrs:{id:e}})}(t,this.elementId,this.$props.tagName):function(t,e){return t("textarea",{attrs:{id:e},style:{visibility:"hidden"}})}(t,this.elementId)}}},props:["modelValue","inlineEditor","height"],data:function(){return{content:this.modelValue,inlineType:this.inlineEditor,height:this.height,editorConfig:{plugins:"image table preview media paste_block_drop emoticons",toolbar:"undo redo | image | table | preview| media | foto | outdent indent | numlist bullist | emoticons",images_upload_url:this.$baseUrl+"/api/post/upload/image",paste_data_images:!1,inline:!1,emoticons_append:{custom_mind_explode:{keywords:["brain","mind","explode","blown"],char:"🤯"}}},inlineConfig:{menubar:!0,min_height:200,inline:!0,plugins:["advlist autolink lists link charmap print preview anchor textcolor","searchreplace visualblocks code fullscreen","insertdatetime table contextmenu paste textcolor","emoticons"],emoticons_append:{custom_mind_explode:{keywords:["brain","mind","explode","blown"],char:"🤯"}},toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | forecolor backcolor | outdent indent | numlist bullist | emoticons"}}},methods:{handleEditorChange:function(t){this.$emit("input",t)},image_upload_handler:function(t,e){var n=this;new Promise((function(o,i){var a=new XMLHttpRequest;a.withCredentials=!1,a.open("POST",n.$baseUrl+"/api/post/upload/image");var s=document.head.querySelector("[name=csrf-token]").content;a.setRequestHeader("X-CSRF-Token",s),a.upload.onprogress=function(t){e(t.loaded/t.total*100)},a.onload=function(){var t=JSON.parse(a.responseText);return 200>=a.status<=300?o(t.location):void i({message:"HTTP Error: "+a.status,remove:!0})},a.onerror=function(){i({message:"Image upload failed due to a XHR Transport error. Code: "+a.status,remove:!0})};var r=new FormData;r.append("file",t.blob(),t.filename()),r.append("_token",s),a.send(r)}))},handleImageUpload:function(t,e,n,o){var i=new XMLHttpRequest;i.withCredentials=!1,i.open("POST",this.$baseUrl+"/api/post/upload/image"),i.onload=function(){if(403!==i.status&&500!==i.status)if(i.status<200||i.status>=300)n("HTTP Error: "+i.status);else{var t=JSON.parse(i.responseText);if(console.log(t),t&&"string"==typeof t.location)return e(t.location);n("Invalid JSON: "+i.responseText)}else n({message:"HTTP Error: "+i.status,remove:!0})},i.onerror=function(){n("Image upload failed due to a XHR Transport error. Code: "+i.status)};var a=document.head.querySelector("[name=csrf-token]").content,s=new FormData;s.append("file",t.blob(),t.filename()),s.append("_token",a),i.send(s)}}};var g=n(3379),b=n.n(g),y=n(7581),C={insert:"head",singleton:!1};b()(y.Z,C);y.Z.locals;const _=(0,n(1900).Z)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("editor",{attrs:{init:this.inlineEditor?t.inlineConfig:t.editorConfig},on:{input:t.handleEditorChange},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)}),[],!1,null,null,null).exports},7712:(t,e,n)=>{n.d(e,{Z:()=>i});const o={name:"BreadCumbs",props:["breadcumbs"]};const i=(0,n(1900).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex"},[n("div",{staticClass:"pagetitle"},[n("h1",[t._v(t._s(this.breadcumbs.title))]),t._v(" "),n("nav",[n("ol",{staticClass:"breadcrumb"},t._l(t.breadcumbs.data,(function(e){return n("li",{key:e.name,staticClass:"breadcrumb-item",class:{active:e.status}},[e.status?n("span",[t._v(t._s(e.name))]):n("router-link",{attrs:{to:e.link}},[t._v(t._s(e.name))])],1)})),0)])])])}),[],!1,null,null,null).exports},636:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r});var o=n(7712),i=n(3730),a=document.head.querySelector("[name=csrf-token]").content;const s={name:"BlogForm",data:function(){return{content:"",breadcumbs:{title:"Add New Blog",data:[{name:"Dashboard",link:"/account/dashboard",status:!1},{name:"Blog",link:"/account/blog",status:!1},{name:"form",link:"/account/blog",status:!0}]},jsonData:{title:"",body:"",image:""},cantReload:!0,editor:!1,imagePrev:"",jsonResp:{title:"",body:"",image:""},proses:!1,isAdd:!0,thisId:0}},components:{BreadCumbs:o.Z,TinyMCEEditor:i.Z},mounted:function(){null!=this.$route.params.id?(this.isAdd=!1,this.getPost(this.$route.params.id)):this.editor=!0},methods:{getPost:function(t){var e=this;this.$axios.get("api/post/"+t).then((function(t){e.thisId=t.data.data.id,t.data.data.image&&(e.imagePrev=t.data.data.image),e.breadcumbs.title="Edit Blog",e.jsonData.title=t.data.data.title,e.jsonData.body=t.data.data.body,e.editor=!0})).catch((function(){e.cantReload=!1}))},inputFile:function(t){this.jsonData.image=t.target.files[0],this.imagePrev=URL.createObjectURL(this.jsonData.image)},removeImg:function(t){t.preventDefault(),this.jsonData.image="",this.imagePrev="",document.getElementById("uploadCaptureInputFile").value=""},saveBlog:function(t){var e=this;t.preventDefault(),this.proses=!0;var n=new FormData;if(n.append("title",this.jsonData.title),n.append("body",this.jsonData.body),n.append("image",this.jsonData.image),n.append("_token",a),this.isAdd){var o="Failed add blog";this.$axios.post("api/post/",n).then((function(t){e.proses=!1;var n="error";e.$validation(t.data.msg,e.jsonResp),t.data.status&&(n="success",o="Success add blog",e.$router.push({name:"account/blog"})),e.$isAlert(e,o,n)})).catch((function(){e.$isAlert(e,o,stat),e.proses=!1}))}else{var i="Failed Update blog";n.append("_method","PATCH"),this.$axios.post("api/post/"+this.thisId,n).then((function(t){e.proses=!1;var n="error";e.$validation(t.data.msg,e.jsonResp),t.data.status&&(n="success",i="Success Update blog",e.$router.push({name:"account/blog"})),e.$isAlert(e,i,n)})).catch((function(){e.$isAlert(e,i,stat),e.proses=!1}))}}}};const r=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("BreadCumbs",{attrs:{breadcumbs:this.breadcumbs}}),t._v(" "),n("section",{staticClass:"section"},[n("div",{staticClass:"row"},[t.cantReload?n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(t.breadcumbs.title))]),t._v(" "),n("form",{staticClass:"row g-3"},[n("div",{staticClass:"col-12"},[n("label",{staticClass:"form-label",attrs:{for:"title"}},[t._v("Title")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.jsonData.title,expression:"jsonData.title"}],staticClass:"form-control",class:t.jsonResp.title?"is-invalid":"",attrs:{type:"text"},domProps:{value:t.jsonData.title},on:{input:function(e){e.target.composing||t.$set(t.jsonData,"title",e.target.value)}}}),t._v(" "),t.jsonResp.title?n("div",{staticClass:"vinvalid-feedback text-danger"},[t._v("\n                      "+t._s(t.jsonResp.title)+"\n                    ")]):t._e()]),t._v(" "),n("div",{staticClass:"col-12"},[n("label",{staticClass:"form-label",attrs:{for:"foto"}},[t._v("Foto / Cover")]),t._v(" "),t.imagePrev?n("div",{staticClass:"pt-1 pb-1",staticStyle:{position:"relative","max-width":"300px"}},[n("button",{staticClass:"badge rounded-pill bg-danger",staticStyle:{position:"absolute","column-rule":"none",border:"none",right:"0px",margin:"5px"},on:{click:function(e){return t.removeImg(e)}}},[t._v(" x ")]),t._v(" "),n("img",{attrs:{src:t.imagePrev,alt:"",width:"300"}})]):t._e(),t._v(" "),n("input",{staticClass:"form-control",class:t.jsonResp.image?"is-invalid":"",attrs:{type:"file",accept:"image/x-png,image/gif,image/jpeg",id:"uploadCaptureInputFile"},on:{change:function(e){return t.inputFile(e)}}}),t._v(" "),t.jsonResp.image?n("div",{staticClass:"vinvalid-feedback text-danger"}):t._e()]),t._v(" "),n("div",{staticClass:"col-12"},[n("label",{staticClass:"form-label",attrs:{for:"body"}},[t._v("Body")]),t._v(" "),t.editor?n("TinyMCEEditor",{class:t.jsonResp.body?"is-invalid":"",attrs:{modelValue:t.jsonData.body},model:{value:t.jsonData.body,callback:function(e){t.$set(t.jsonData,"body",e)},expression:"jsonData.body"}}):t._e(),t._v(" "),t.jsonResp.body?n("div",{staticClass:"vinvalid-feedback text-danger"},[t._v("\n                      "+t._s(t.jsonResp.body)+"\n                    ")]):t._e()],1),t._v(" "),n("div",{staticClass:"text-end"},[t.proses?n("ButtonProses"):n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return t.saveBlog(e)}}},[t._v("Submit")]),t._v("\n                      \n                    ")],1)])])])]):n("div",{staticClass:"col-md-12"},[n("viewErr")],1)])])],1)}),[],!1,null,null,null).exports}}]);