"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[757],{2207:(t,a,e)=>{e.d(a,{Z:()=>s});var i=e(3645),n=e.n(i)()((function(t){return t[1]}));n.push([t.id,".inner-page[data-v-cdfb17dc]{border-bottom:1px solid #dce8ff}.container p[data-v-cdfb17dc]{margin:0!important}.page-image[data-v-cdfb17dc]{background-position:50%;background-size:cover;min-height:50vh;padding:80px 0;position:relative}",""]);const s=n},8757:(t,a,e)=>{e.r(a),e.d(a,{default:()=>r});const i={name:"Blog",data:function(){return{baseurl,isLoading:!1,cantReload:!0,content:[],bgbanner:{},page:1,per_page:6,loadmore:!0,loading:!1}},methods:{readyContent:function(t,a){"complete"==a&&setTimeout((function(){t.isLoading=!0}),1200)},loadData:function(t,a){var e=this;this.loading=!0,this.$axios.get("api/post?page="+t+"&per_page="+a).then((function(t){for(var a=0;a<t.data.data.data.length;a++)e.loading=!1,e.content.push(t.data.data.data[a]);e.page=e.page+1,t.data.data.current_page==t.data.data.last_page&&(e.loadmore=!1)})).catch((function(t){e.cantReload=!1}))}},mounted:function(){var t=this;t.readyContent(t,document.readyState),document.onreadystatechange=function(){t.readyContent(t,document.readyState)},document.getElementById("header").classList.add("header-inner-pages");this.$route.params.id;t.loadData(this.page,this.per_page)}};var n=e(3379),s=e.n(n),d=e(2207),o={insert:"head",singleton:!1};s()(d.Z,o);d.Z.locals;const r=(0,e(1900).Z)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.isLoading?e("main",{attrs:{id:"main"}},[t._m(1),t._v(" "),e("section",{staticClass:"inner-page"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t.content?e("div",{staticClass:"col-lg-12"},[t.cantReload?e("main",[e("div",{staticClass:"row"},[t._l(t.content,(function(a,i){return e("div",{key:a.id,staticClass:"col-md-4 mt-2"},[e("router-link",{attrs:{to:{name:"blog",params:{id:a.slug}}}},[e("div",{staticClass:"card"},[e("img",{staticClass:"content_card-image",attrs:{"data-v-87445088":"",src:a.image?a.image:t.baseurl+"images/nofile.jpg",height:"300px"}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(a.title)+" cd ")]),t._v(" "),e("p",{staticClass:"card-text",staticStyle:{overflow:"hidden",display:"-webkit-box","-webkit-line-clamp":"3","-webkit-box-orient":"vertical"},domProps:{innerHTML:t._s(a.body)}})])])])],1)})),t._v(" "),e("div",{staticClass:"col-md-12"},[t.loading?e("div",{staticClass:"d-flex justify-content-center pt-2 px-3 text-white"},[e("span",{staticClass:"spinner-grow text-primary",staticStyle:{width:"50px",height:"50px"}})]):e("div",{staticClass:"d-flex justify-content-center pt-2 px-3 text-white"},[t.loadmore?e("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.loadData(t.page,t.per_page)}}},[t._v("load more")]):t._e()])])],2)]):t._e()]):e("div",{staticClass:"col-md-12 pt-4"},[e("viewErr")],1)])])])]):e("main",[t._m(0)])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticStyle:{background:"white !important","z-index":"100","min-height":"60vh"},attrs:{id:"setloading"}},[a("span",{staticClass:"spinner-grow text-primary",staticStyle:{width:"50px",height:"50px"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"breadcrumbs",attrs:{id:"breadcrumbs"}},[e("div",{staticClass:"container"},[e("ol",[e("li",[e("a",{attrs:{href:"/"}},[t._v("Home")])]),t._v(" "),e("li",[t._v("blog ")])]),t._v(" "),e("h2",[t._v("Blog")])])])}],!1,null,"cdfb17dc",null).exports}}]);