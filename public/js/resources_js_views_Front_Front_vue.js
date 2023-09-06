(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Front_Front_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Front.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Front.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Front",
  data: function data() {
    return {
      baseUrl: baseurl,
      testimoni: [],
      client: [],
      faq: [],
      services: [],
      benefits: [],
      posts: []
    };
  },
  methods: {
    swiperTestimoni: function swiperTestimoni() {
      /**
       * Testimonials slider
       */
      new Swiper('.testimonials-slider', {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      });
    },
    swiperClient: function swiperClient() {
      /**
       * Clients Slider
       */
      new Swiper('.clients-slider', {
        speed: 400,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        // pagination: {
        //   el: '.swiper-pagination',
        //   type: 'bullets',
        //   clickable: true
        // },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30
          }
        }
      });
    }
  },
  mounted: function mounted() {
    var _this = this;
    var $this = this;
    this.$axios.get('/api/testimoni/all/data').then(function (response) {
      _this.testimoni = response.data;
      // if(this.testimoni.length >0 ){
      setTimeout(function () {
        $this.swiperTestimoni();
      }, 1000);
      // }
    })["catch"](function (err) {
      console.log(err);
    });
    this.$axios.get('/api/client/all/data').then(function (response) {
      _this.client = response.data;
      // if(this.testimoni.length >0 ){
      setTimeout(function () {
        $this.swiperClient();
      }, 1000);
      // }
    })["catch"](function (err) {
      console.log(err);
    });
    this.$axios.get('/api/faq/all/data').then(function (response) {
      _this.faq = response.data;
    })["catch"](function (err) {
      console.log(err);
    });
    this.$axios.get('/api/services/all/data').then(function (response) {
      _this.services = response.data;
    })["catch"](function (err) {
      console.log(err);
    });
    this.$axios.get('/api/benefits/all/data').then(function (response) {
      _this.benefits = response.data;
    })["catch"](function (err) {
      console.log(err);
    });
    this.$axios.get('/api/post/all/data').then(function (response) {
      _this.posts = response.data;
    })["catch"](function (err) {
      console.log(err);
    });
    // GETDATA END
    var glightbox = GLightbox({
      selector: '.glightbox'
    });
    /**
    * Mobile nav active
    */
    this.$onEvent('click', 'li > .nav-link', function (e) {
      $this.$selectEvent('.nav-link', true).forEach(function (e) {
        return e.classList.remove("active");
      });
      this.classList.add("active");
    }, true);
    /**
    * Mobile nav toggle
    */
    this.$onEvent('click', '.mobile-nav-toggle', function (e) {
      $this.$selectEvent('#navbar').classList.toggle('navbar-mobile');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });
    /**
     * Mobile nav dropdowns activate
     */

    this.$onEvent('click', '.navbar  .dropdown > a', function (e) {
      console.log(this);
      if ($this.$selectEvent('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle('dropdown-active');
      }
    }, true);

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    var selectHeader = this.$selectEvent('#header');
    if (selectHeader) {
      var headerScrolled = function headerScrolled() {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled');
        } else {
          selectHeader.classList.remove('header-scrolled');
        }
      };
      window.addEventListener('load', headerScrolled);
      $this.$onscrollEvent(document, headerScrolled);
    }

    /**
     * Initiate Pure Counter 
     */
    new PureCounter();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Front.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Front.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_public_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../public/css/style.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/css/style.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_public_css_glightbox_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../public/css/glightbox.min.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/css/glightbox.min.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_public_js_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../public/js/swiper/swiper-bundle.min.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/js/swiper/swiper-bundle.min.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_public_vendor_bootstrap_icons_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../public/vendor/bootstrap-icons/bootstrap-icons.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/vendor/bootstrap-icons/bootstrap-icons.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_public_vendor_boxicons_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../public/vendor/boxicons/css/boxicons.min.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/vendor/boxicons/css/boxicons.min.css");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_public_css_style_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_public_css_glightbox_min_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_public_js_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_public_vendor_bootstrap_icons_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_public_vendor_boxicons_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://anaslawoffice.dakreativ.com/wp-content/plugins/elementskit-lite/widgets/init/assets/css/widget-styles.css?ver=2.9.0);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.elementskit-info-box-icon{\r\n  min-height: 350px;\r\n  /* padding-top: 10%; */\r\n  border: none !important;\r\n  padding: 50px;\r\n  color: black !important;\n}\n.elementskit-info-box-icon h2{\r\n  font-weight: 700;\n}\n.elementskit-info-box-icon .icons{\r\n  border-radius: 50%;\r\n    background-color: #f2f9ff;\r\n    color: #5778f2;\r\n    width: 160px;\r\n    height: 160px;\r\n    line-height: 168px;\r\n    margin: 0px auto 0px;\n}\n.active-box{\r\n  background-color: #5d70d6 !important;\r\n  color: white !important;\n}\n.active-box  p{  \r\n    color: #f2f9ff !important;\n}\n.ekit-wid-con .elementskit-border-divider {\r\nwidth: 77px !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/css/glightbox.min.css":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/css/glightbox.min.css ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".glightbox-container{width:100%;height:100%;position:fixed;top:0;left:0;z-index:999999!important;overflow:hidden;-ms-touch-action:none;touch-action:none;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;outline:0}.glightbox-container.inactive{display:none}.glightbox-container .gcontainer{position:relative;width:100%;height:100%;z-index:9999;overflow:hidden}.glightbox-container .gslider{-webkit-transition:-webkit-transform .4s ease;transition:-webkit-transform .4s ease;transition:transform .4s ease;transition:transform .4s ease,-webkit-transform .4s ease;height:100%;left:0;top:0;width:100%;position:relative;overflow:hidden;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.glightbox-container .gslide{width:100%;position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;opacity:0}.glightbox-container .gslide.current{opacity:1;z-index:99999;position:relative}.glightbox-container .gslide.prev{opacity:1;z-index:9999}.glightbox-container .gslide-inner-content{width:100%}.glightbox-container .ginner-container{position:relative;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-width:100%;margin:auto;height:100vh}.glightbox-container .ginner-container.gvideo-container{width:100%}.glightbox-container .ginner-container.desc-bottom,.glightbox-container .ginner-container.desc-top{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.glightbox-container .ginner-container.desc-left,.glightbox-container .ginner-container.desc-right{max-width:100%!important}.gslide iframe,.gslide video{outline:0!important;border:none;min-height:165px;-webkit-overflow-scrolling:touch;-ms-touch-action:auto;touch-action:auto}.gslide:not(.current){pointer-events:none}.gslide-image{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.gslide-image img{max-height:100vh;display:block;padding:0;float:none;outline:0;border:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;max-width:100vw;width:auto;height:auto;-o-object-fit:cover;object-fit:cover;-ms-touch-action:none;touch-action:none;margin:auto;min-width:200px}.desc-bottom .gslide-image img,.desc-top .gslide-image img{width:auto}.desc-left .gslide-image img,.desc-right .gslide-image img{width:auto;max-width:100%}.gslide-image img.zoomable{position:relative}.gslide-image img.dragging{cursor:-webkit-grabbing!important;cursor:grabbing!important;-webkit-transition:none;transition:none}.gslide-video{position:relative;max-width:100vh;width:100%!important}.gslide-video .plyr__poster-enabled.plyr--loading .plyr__poster{display:none}.gslide-video .gvideo-wrapper{width:100%;margin:auto}.gslide-video::before{content:'';position:absolute;width:100%;height:100%;background:rgba(255,0,0,.34);display:none}.gslide-video.playing::before{display:none}.gslide-video.fullscreen{max-width:100%!important;min-width:100%;height:75vh}.gslide-video.fullscreen video{max-width:100%!important;width:100%!important}.gslide-inline{background:#fff;text-align:left;max-height:calc(100vh - 40px);overflow:auto;max-width:100%;margin:auto}.gslide-inline .ginlined-content{padding:20px;width:100%}.gslide-inline .dragging{cursor:-webkit-grabbing!important;cursor:grabbing!important;-webkit-transition:none;transition:none}.ginlined-content{overflow:auto;display:block!important;opacity:1}.gslide-external{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;min-width:100%;background:#fff;padding:0;overflow:auto;max-height:75vh;height:100%}.gslide-media{display:-webkit-box;display:-ms-flexbox;display:flex;width:auto}.zoomed .gslide-media{-webkit-box-shadow:none!important;box-shadow:none!important}.desc-bottom .gslide-media,.desc-top .gslide-media{margin:0 auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.gslide-description{position:relative;-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%}.gslide-description.description-left,.gslide-description.description-right{max-width:100%}.gslide-description.description-bottom,.gslide-description.description-top{margin:0 auto;width:100%}.gslide-description p{margin-bottom:12px}.gslide-description p:last-child{margin-bottom:0}.zoomed .gslide-description{display:none}.glightbox-button-hidden{display:none}.glightbox-mobile .glightbox-container .gslide-description{height:auto!important;width:100%;position:absolute;bottom:0;padding:19px 11px;max-width:100vw!important;-webkit-box-ordinal-group:3!important;-ms-flex-order:2!important;order:2!important;max-height:78vh;overflow:auto!important;background:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0)),to(rgba(0,0,0,.75)));background:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.75) 100%);-webkit-transition:opacity .3s linear;transition:opacity .3s linear;padding-bottom:50px}.glightbox-mobile .glightbox-container .gslide-title{color:#fff;font-size:1em}.glightbox-mobile .glightbox-container .gslide-desc{color:#a1a1a1}.glightbox-mobile .glightbox-container .gslide-desc a{color:#fff;font-weight:700}.glightbox-mobile .glightbox-container .gslide-desc *{color:inherit}.glightbox-mobile .glightbox-container .gslide-desc .desc-more{color:#fff;opacity:.4}.gdesc-open .gslide-media{-webkit-transition:opacity .5s ease;transition:opacity .5s ease;opacity:.4}.gdesc-open .gdesc-inner{padding-bottom:30px}.gdesc-closed .gslide-media{-webkit-transition:opacity .5s ease;transition:opacity .5s ease;opacity:1}.greset{-webkit-transition:all .3s ease;transition:all .3s ease}.gabsolute{position:absolute}.grelative{position:relative}.glightbox-desc{display:none!important}.glightbox-open{overflow:hidden}.gloader{height:25px;width:25px;-webkit-animation:lightboxLoader .8s infinite linear;animation:lightboxLoader .8s infinite linear;border:2px solid #fff;border-right-color:transparent;border-radius:50%;position:absolute;display:block;z-index:9999;left:0;right:0;margin:0 auto;top:47%}.goverlay{width:100%;height:calc(100vh + 1px);position:fixed;top:-1px;left:0;background:#000;will-change:opacity}.glightbox-mobile .goverlay{background:#000}.gclose,.gnext,.gprev{z-index:99999;cursor:pointer;width:26px;height:44px;border:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.gclose svg,.gnext svg,.gprev svg{display:block;width:25px;height:auto;margin:0;padding:0}.gclose.disabled,.gnext.disabled,.gprev.disabled{opacity:.1}.gclose .garrow,.gnext .garrow,.gprev .garrow{stroke:#fff}.gbtn.focused{outline:2px solid #0f3d81}iframe.wait-autoplay{opacity:0}.glightbox-closing .gclose,.glightbox-closing .gnext,.glightbox-closing .gprev{opacity:0!important}.glightbox-clean .gslide-description{background:#fff}.glightbox-clean .gdesc-inner{padding:22px 20px}.glightbox-clean .gslide-title{font-size:1em;font-weight:400;font-family:arial;color:#000;margin-bottom:19px;line-height:1.4em}.glightbox-clean .gslide-desc{font-size:.86em;margin-bottom:0;font-family:arial;line-height:1.4em}.glightbox-clean .gslide-video{background:#000}.glightbox-clean .gclose,.glightbox-clean .gnext,.glightbox-clean .gprev{background-color:rgba(0,0,0,.75);border-radius:4px}.glightbox-clean .gclose path,.glightbox-clean .gnext path,.glightbox-clean .gprev path{fill:#fff}.glightbox-clean .gprev{position:absolute;top:-100%;left:30px;width:40px;height:50px}.glightbox-clean .gnext{position:absolute;top:-100%;right:30px;width:40px;height:50px}.glightbox-clean .gclose{width:35px;height:35px;top:15px;right:10px;position:absolute}.glightbox-clean .gclose svg{width:18px;height:auto}.glightbox-clean .gclose:hover{opacity:1}.gfadeIn{-webkit-animation:gfadeIn .5s ease;animation:gfadeIn .5s ease}.gfadeOut{-webkit-animation:gfadeOut .5s ease;animation:gfadeOut .5s ease}.gslideOutLeft{-webkit-animation:gslideOutLeft .3s ease;animation:gslideOutLeft .3s ease}.gslideInLeft{-webkit-animation:gslideInLeft .3s ease;animation:gslideInLeft .3s ease}.gslideOutRight{-webkit-animation:gslideOutRight .3s ease;animation:gslideOutRight .3s ease}.gslideInRight{-webkit-animation:gslideInRight .3s ease;animation:gslideInRight .3s ease}.gzoomIn{-webkit-animation:gzoomIn .5s ease;animation:gzoomIn .5s ease}.gzoomOut{-webkit-animation:gzoomOut .5s ease;animation:gzoomOut .5s ease}@-webkit-keyframes lightboxLoader{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes lightboxLoader{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes gfadeIn{from{opacity:0}to{opacity:1}}@keyframes gfadeIn{from{opacity:0}to{opacity:1}}@-webkit-keyframes gfadeOut{from{opacity:1}to{opacity:0}}@keyframes gfadeOut{from{opacity:1}to{opacity:0}}@-webkit-keyframes gslideInLeft{from{opacity:0;-webkit-transform:translate3d(-60%,0,0);transform:translate3d(-60%,0,0)}to{visibility:visible;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@keyframes gslideInLeft{from{opacity:0;-webkit-transform:translate3d(-60%,0,0);transform:translate3d(-60%,0,0)}to{visibility:visible;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@-webkit-keyframes gslideOutLeft{from{opacity:1;visibility:visible;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}to{-webkit-transform:translate3d(-60%,0,0);transform:translate3d(-60%,0,0);opacity:0;visibility:hidden}}@keyframes gslideOutLeft{from{opacity:1;visibility:visible;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}to{-webkit-transform:translate3d(-60%,0,0);transform:translate3d(-60%,0,0);opacity:0;visibility:hidden}}@-webkit-keyframes gslideInRight{from{opacity:0;visibility:visible;-webkit-transform:translate3d(60%,0,0);transform:translate3d(60%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@keyframes gslideInRight{from{opacity:0;visibility:visible;-webkit-transform:translate3d(60%,0,0);transform:translate3d(60%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@-webkit-keyframes gslideOutRight{from{opacity:1;visibility:visible;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}to{-webkit-transform:translate3d(60%,0,0);transform:translate3d(60%,0,0);opacity:0}}@keyframes gslideOutRight{from{opacity:1;visibility:visible;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}to{-webkit-transform:translate3d(60%,0,0);transform:translate3d(60%,0,0);opacity:0}}@-webkit-keyframes gzoomIn{from{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}to{opacity:1}}@keyframes gzoomIn{from{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}to{opacity:1}}@-webkit-keyframes gzoomOut{from{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}to{opacity:0}}@keyframes gzoomOut{from{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}to{opacity:0}}@media (min-width:769px){.glightbox-container .ginner-container{width:auto;height:auto;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.glightbox-container .ginner-container.desc-top .gslide-description{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.glightbox-container .ginner-container.desc-top .gslide-image,.glightbox-container .ginner-container.desc-top .gslide-image img{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.glightbox-container .ginner-container.desc-left .gslide-description{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.glightbox-container .ginner-container.desc-left .gslide-image{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.gslide-image img{max-height:97vh;max-width:100%}.gslide-image img.zoomable{cursor:-webkit-zoom-in;cursor:zoom-in}.zoomed .gslide-image img.zoomable{cursor:-webkit-grab;cursor:grab}.gslide-inline{max-height:95vh}.gslide-external{max-height:100vh}.gslide-description.description-left,.gslide-description.description-right{max-width:275px}.glightbox-open{height:auto}.goverlay{background:rgba(0,0,0,.92)}.glightbox-clean .gslide-media{-webkit-box-shadow:1px 2px 9px 0 rgba(0,0,0,.65);box-shadow:1px 2px 9px 0 rgba(0,0,0,.65)}.glightbox-clean .description-left .gdesc-inner,.glightbox-clean .description-right .gdesc-inner{position:absolute;height:100%;overflow-y:auto}.glightbox-clean .gclose,.glightbox-clean .gnext,.glightbox-clean .gprev{background-color:rgba(0,0,0,.32)}.glightbox-clean .gclose:hover,.glightbox-clean .gnext:hover,.glightbox-clean .gprev:hover{background-color:rgba(0,0,0,.7)}.glightbox-clean .gprev{top:45%}.glightbox-clean .gnext{top:45%}}@media (min-width:992px){.glightbox-clean .gclose{opacity:.7;right:20px}}@media screen and (max-height:420px){.goverlay{background:#000}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/css/style.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/css/style.css ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\r\n* Template Name: Arsha\r\n* Updated: Jul 05 2023 with Bootstrap v5.3.0\r\n* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/\r\n* Author: BootstrapMade.com\r\n* License: https://bootstrapmade.com/license/\r\n*/\r\n\r\n/*--------------------------------------------------------------\r\n# General\r\n--------------------------------------------------------------*/\r\nbody {\r\n    font-family: \"Open Sans\", sans-serif;\r\n    color: #444444;\r\n  }\r\n  \r\n  a {\r\n    color: #47b2e4;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  a:hover {\r\n    color: #73c5eb;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  h1,\r\n  h2,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6 {\r\n    font-family: \"Jost\", sans-serif;\r\n  }\r\n  p{\r\n    text-align: left !important;\r\n  }\r\n  /*--------------------------------------------------------------\r\n  # Preloader\r\n  --------------------------------------------------------------*/\r\n  #preloader {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: 9999;\r\n    overflow: hidden;\r\n    background: #37517e;\r\n  }\r\n  \r\n  #preloader:before {\r\n    content: \"\";\r\n    position: fixed;\r\n    top: calc(50% - 30px);\r\n    left: calc(50% - 30px);\r\n    border: 6px solid #37517e;\r\n    border-top-color: #fff;\r\n    border-bottom-color: #fff;\r\n    border-radius: 50%;\r\n    width: 60px;\r\n    height: 60px;\r\n    animation: animate-preloader 1s linear infinite;\r\n  }\r\n  \r\n  @keyframes animate-preloader {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n  \r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Back to top button\r\n  --------------------------------------------------------------*/\r\n  .back-to-top {\r\n    position: fixed;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    right: 15px;\r\n    bottom: 15px;\r\n    z-index: 996;\r\n    background: #47b2e4;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50px;\r\n    transition: all 0.4s;\r\n  }\r\n  \r\n  .back-to-top i {\r\n    font-size: 24px;\r\n    color: #fff;\r\n    line-height: 0;\r\n  }\r\n  \r\n  .back-to-top:hover {\r\n    background: #6bc1e9;\r\n    color: #fff;\r\n  }\r\n  \r\n  .back-to-top.active {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Header\r\n  --------------------------------------------------------------*/\r\n  #header {\r\n    transition: all 0.5s;\r\n    z-index: 997;\r\n    padding: 15px 0;\r\n  }\r\n  \r\n  #header.header-scrolled,\r\n  #header.header-inner-pages {\r\n    background: #4256c9;\r\n  }\r\n  \r\n  #header .logo {\r\n    font-size: 30px;\r\n    margin: 0;\r\n    padding: 0;\r\n    line-height: 1;\r\n    font-weight: 500;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  #header .logo a {\r\n    color: #fff;\r\n  }\r\n  \r\n  #header .logo img {\r\n    max-height: 40px;\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Navigation Menu\r\n  --------------------------------------------------------------*/\r\n  /**\r\n  * Desktop Navigation \r\n  */\r\n  .navbar {\r\n    padding: 0;\r\n  }\r\n  \r\n  .navbar ul {\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    list-style: none;\r\n    align-items: center;\r\n  }\r\n  \r\n  .navbar li {\r\n    position: relative;\r\n  }\r\n  \r\n  .navbar a,\r\n  .navbar a:focus {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 10px 0 10px 30px;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    color: #fff;\r\n    white-space: nowrap;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .navbar a i,\r\n  .navbar a:focus i {\r\n    font-size: 12px;\r\n    line-height: 0;\r\n    margin-left: 5px;\r\n  }\r\n  \r\n  .navbar a:hover,\r\n  .navbar .active,\r\n  .navbar .active:focus,\r\n  .navbar li:hover>a {\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  .navbar .getstarted,\r\n  .navbar .getstarted:focus {\r\n    padding: 8px 20px;\r\n    margin-left: 30px;\r\n    border-radius: 50px;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    border: 2px solid #47b2e4;\r\n    font-weight: 600;\r\n  }\r\n  \r\n  .navbar .getstarted:hover,\r\n  .navbar .getstarted:focus:hover {\r\n    color: #fff;\r\n    background: #31a9e1;\r\n  }\r\n  \r\n  .navbar .dropdown ul {\r\n    display: block;\r\n    position: absolute;\r\n    left: 14px;\r\n    top: calc(100% + 30px);\r\n    margin: 0;\r\n    padding: 10px 0;\r\n    z-index: 99;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    background: #fff;\r\n    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);\r\n    transition: 0.3s;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .navbar .dropdown ul li {\r\n    min-width: 200px;\r\n  }\r\n  \r\n  .navbar .dropdown ul a {\r\n    padding: 10px 20px;\r\n    font-size: 14px;\r\n    text-transform: none;\r\n    font-weight: 500;\r\n    color: #0c3c53;\r\n  }\r\n  \r\n  .navbar .dropdown ul a i {\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .navbar .dropdown ul a:hover,\r\n  .navbar .dropdown ul .active:hover,\r\n  .navbar .dropdown ul li:hover>a {\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  .navbar .dropdown:hover>ul {\r\n    opacity: 1;\r\n    top: 100%;\r\n    visibility: visible;\r\n  }\r\n  \r\n  .navbar .dropdown .dropdown ul {\r\n    top: 0;\r\n    left: calc(100% - 30px);\r\n    visibility: hidden;\r\n  }\r\n  \r\n  .navbar .dropdown .dropdown:hover>ul {\r\n    opacity: 1;\r\n    top: 0;\r\n    left: 100%;\r\n    visibility: visible;\r\n  }\r\n  \r\n  @media (max-width: 1366px) {\r\n    .navbar .dropdown .dropdown ul {\r\n      left: -90%;\r\n    }\r\n  \r\n    .navbar .dropdown .dropdown:hover>ul {\r\n      left: -100%;\r\n    }\r\n  }\r\n  \r\n  /**\r\n  * Mobile Navigation \r\n  */\r\n  .mobile-nav-toggle {\r\n    color: #fff;\r\n    font-size: 28px;\r\n    cursor: pointer;\r\n    display: none;\r\n    line-height: 0;\r\n    transition: 0.5s;\r\n  }\r\n  \r\n  .mobile-nav-toggle.bi-x {\r\n    color: #fff;\r\n  }\r\n  \r\n  @media (max-width: 991px) {\r\n    .mobile-nav-toggle {\r\n      display: block;\r\n    }\r\n  \r\n    .navbar ul {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  .navbar-mobile {\r\n    position: fixed;\r\n    overflow: hidden;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    background: rgba(40, 58, 90, 0.9);\r\n    transition: 0.3s;\r\n    z-index: 999;\r\n  }\r\n  \r\n  .navbar-mobile .mobile-nav-toggle {\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 15px;\r\n  }\r\n  \r\n  .navbar-mobile ul {\r\n    display: block;\r\n    position: absolute;\r\n    top: 55px;\r\n    right: 15px;\r\n    bottom: 15px;\r\n    left: 15px;\r\n    padding: 10px 0;\r\n    border-radius: 10px;\r\n    background-color: #fff;\r\n    overflow-y: auto;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .navbar-mobile a,\r\n  .navbar-mobile a:focus {\r\n    padding: 10px 20px;\r\n    font-size: 15px;\r\n    color: #37517e;\r\n  }\r\n  \r\n  .navbar-mobile a:hover,\r\n  .navbar-mobile .active,\r\n  .navbar-mobile li:hover>a {\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  .navbar-mobile .getstarted,\r\n  .navbar-mobile .getstarted:focus {\r\n    margin: 15px;\r\n    color: #37517e;\r\n  }\r\n  \r\n  .navbar-mobile .dropdown ul {\r\n    position: static;\r\n    display: none;\r\n    margin: 10px 20px;\r\n    padding: 10px 0;\r\n    z-index: 99;\r\n    opacity: 1;\r\n    visibility: visible;\r\n    background: #fff;\r\n    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);\r\n  }\r\n  \r\n  .navbar-mobile .dropdown ul li {\r\n    min-width: 200px;\r\n  }\r\n  \r\n  .navbar-mobile .dropdown ul a {\r\n    padding: 10px 20px;\r\n  }\r\n  \r\n  .navbar-mobile .dropdown ul a i {\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .navbar-mobile .dropdown ul a:hover,\r\n  .navbar-mobile .dropdown ul .active:hover,\r\n  .navbar-mobile .dropdown ul li:hover>a {\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  .navbar-mobile .dropdown>.dropdown-active {\r\n    display: block;\r\n    visibility: visible !important;\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Hero Section\r\n  --------------------------------------------------------------*/\r\n  #hero {\r\n    width: 100%;\r\n    height: 80vh;\r\n    background: #5d70d6;\r\n  }\r\n  \r\n  #hero .container {\r\n    padding-top: 72px;\r\n  }\r\n  \r\n  #hero h1 {\r\n    margin: 0 0 10px 0;\r\n    font-size: 48px;\r\n    font-weight: 700;\r\n    line-height: 56px;\r\n    color: #fff;\r\n    text-align: start !important;\r\n  }\r\n  \r\n  #hero h2 {\r\n    color: rgba(255, 255, 255, 0.6);\r\n    margin-bottom: 50px;\r\n    font-size: 24px;\r\n  }\r\n  \r\n  #hero .btn-get-started {\r\n    font-family: \"Jost\", sans-serif;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    letter-spacing: 1px;\r\n    display: inline-block;\r\n    padding: 10px 28px 11px 28px;\r\n    border-radius: 50px;\r\n    transition: 0.5s;\r\n    margin: 10px 0 0 0;\r\n    color: #fff;\r\n    background: #47b2e4;\r\n  }\r\n  \r\n  #hero .btn-get-started:hover {\r\n    background: #209dd8;\r\n  }\r\n  \r\n  #hero .btn-watch-video {\r\n    font-size: 16px;\r\n    display: flex;\r\n    align-items: center;\r\n    transition: 0.5s;\r\n    margin: 10px 0 0 25px;\r\n    color: #fff;\r\n    line-height: 1;\r\n  }\r\n  \r\n  #hero .btn-watch-video i {\r\n    line-height: 0;\r\n    color: #fff;\r\n    font-size: 32px;\r\n    transition: 0.3s;\r\n    margin-right: 8px;\r\n  }\r\n  \r\n  #hero .btn-watch-video:hover i {\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  #hero .animated {\r\n    animation: up-down 2s ease-in-out infinite alternate-reverse both;\r\n  }\r\n  \r\n  @media (max-width: 991px) {\r\n    #hero {\r\n      height: 100vh;\r\n      text-align: center;\r\n    }\r\n  \r\n    #hero .animated {\r\n      animation: none;\r\n    }\r\n  \r\n    #hero .hero-img {\r\n      text-align: center;\r\n    }\r\n  \r\n    #hero .hero-img img {\r\n      width: 50%;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 768px) {\r\n    #hero h1 {\r\n      font-size: 28px;\r\n      line-height: 36px;\r\n      text-align: center !important;\r\n    }\r\n  \r\n    #hero h2 {\r\n      font-size: 18px;\r\n      line-height: 24px;\r\n      margin-bottom: 30px;\r\n    }\r\n  \r\n    #hero .hero-img img {\r\n      width: 70%;\r\n    }\r\n    \r\n    .icon-benefit{\r\n      margin-left: 0px !important;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 575px) {\r\n    #hero .hero-img img {\r\n      width: 80%;\r\n    }\r\n  \r\n    .icon-benefit{\r\n      margin-left: 0px !important;\r\n    }\r\n    #hero .btn-get-started {\r\n      font-size: 16px;\r\n      padding: 10px 24px 11px 24px;\r\n    }\r\n  }\r\n  \r\n  @keyframes up-down {\r\n    0% {\r\n      transform: translateY(10px);\r\n    }\r\n  \r\n    100% {\r\n      transform: translateY(-10px);\r\n    }\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Sections General\r\n  --------------------------------------------------------------*/\r\n  section {\r\n    padding: 45px 0;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .section-bg {\r\n    background-color: #f3f5fa;\r\n  }\r\n  .section-title2 {\r\n    text-align: left !important;\r\n    padding-bottom: 30px;\r\n  }\r\n  .section-title2 p {\r\n    text-align: left !important; \r\n  }\r\n  \r\n  .section-title2 h2 {\r\n    font-size: 32px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    margin-bottom: 20px;\r\n    padding-bottom: 20px;\r\n    position: relative;\r\n    color: #37517e;\r\n  }\r\n  \r\n  .section-title {\r\n    text-align: center;\r\n    padding-bottom: 30px;\r\n  }\r\n  \r\n  .section-title h2 {\r\n    font-size: 32px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    margin-bottom: 20px;\r\n    padding-bottom: 20px;\r\n    position: relative;\r\n    color: #37517e;\r\n  }\r\n  \r\n  .section-title h2::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: block;\r\n    width: 120px;\r\n    height: 1px;\r\n    background: #ddd;\r\n    bottom: 1px;\r\n    left: calc(50% - 60px);\r\n  }\r\n  \r\n  .section-title h2::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: block;\r\n    width: 40px;\r\n    height: 3px;\r\n    background: #47b2e4;\r\n    bottom: 0;\r\n    left: calc(50% - 20px);\r\n  }\r\n  \r\n  .section-title p {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Clients\r\n  --------------------------------------------------------------*/\r\n  .clients {\r\n    padding-top: 20px;\r\n  }\r\n  \r\n  .clients .swiper-slide img {\r\n    opacity: 0.5;\r\n    transition: 0.3s;\r\n    /* filter: grayscale(100); */\r\n  }\r\n  \r\n  .clients .swiper-slide img:hover {\r\n    filter: none;\r\n    opacity: 1;\r\n  }\r\n  \r\n  .clients .swiper-pagination {\r\n    margin-top: 20px;\r\n    position: relative;\r\n  }\r\n  \r\n  .clients .swiper-pagination .swiper-pagination-bullet {\r\n    width: 12px;\r\n    height: 12px;\r\n    background-color: #fff;\r\n    opacity: 1;\r\n    background-color: #ddd;\r\n  }\r\n  \r\n  .clients .swiper-pagination .swiper-pagination-bullet-active {\r\n    background-color: #ffc451;\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # About Us\r\n  --------------------------------------------------------------*/\r\n  .about .content h3 {\r\n    font-weight: 600;\r\n    font-size: 26px;\r\n  }\r\n  \r\n  .about .content ul {\r\n    list-style: none;\r\n    padding: 0;\r\n  }\r\n  \r\n  .about .content ul li {\r\n    padding-left: 28px;\r\n    position: relative;\r\n  }\r\n  \r\n  .about .content ul li+li {\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .about .content ul i {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 2px;\r\n    font-size: 20px;\r\n    color: #47b2e4;\r\n    line-height: 1;\r\n  }\r\n  \r\n  .about .content p:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .about .content .btn-learn-more {\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    display: inline-block;\r\n    padding: 12px 32px;\r\n    border-radius: 4px;\r\n    transition: 0.3s;\r\n    line-height: 1;\r\n    color: #47b2e4;\r\n    animation-delay: 0.8s;\r\n    margin-top: 6px;\r\n    border: 2px solid #47b2e4;\r\n  }\r\n  \r\n  .about .content .btn-learn-more:hover {\r\n    background: #47b2e4;\r\n    color: #fff;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Why Us\r\n  --------------------------------------------------------------*/\r\n  .why-us .content {\r\n    padding: 60px 100px 0 100px;\r\n  }\r\n  \r\n  .why-us .content h3 {\r\n    font-weight: 400;\r\n    font-size: 34px;\r\n    color: #37517e;\r\n  }\r\n  \r\n  .why-us .content h4 {\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    margin-top: 5px;\r\n  }\r\n  \r\n  .why-us .content p {\r\n    font-size: 15px;\r\n    color: #848484;\r\n  }\r\n  \r\n  .why-us .img {\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n  }\r\n  \r\n  .why-us .accordion-list {\r\n    padding: 0 100px 60px 100px;\r\n  }\r\n  \r\n  .why-us .accordion-list ul {\r\n    padding: 0;\r\n    list-style: none;\r\n  }\r\n  \r\n  .why-us .accordion-list li+li {\r\n    margin-top: 15px;\r\n  }\r\n  \r\n  .why-us .accordion-list li {\r\n    padding: 20px;\r\n    background: #fff;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .why-us .accordion-list a {\r\n    display: block;\r\n    position: relative;\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    font-weight: 500;\r\n    padding-right: 30px;\r\n    outline: none;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .why-us .accordion-list span {\r\n    color: #47b2e4;\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n    padding-right: 10px;\r\n  }\r\n  \r\n  .why-us .accordion-list i {\r\n    font-size: 24px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n  \r\n  .why-us .accordion-list p {\r\n    margin-bottom: 0;\r\n    padding: 10px 0 0 0;\r\n  }\r\n  \r\n  .why-us .accordion-list .icon-show {\r\n    display: none;\r\n  }\r\n  \r\n  .why-us .accordion-list a.collapsed {\r\n    color: #343a40;\r\n  }\r\n  \r\n  .why-us .accordion-list a.collapsed:hover {\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  .why-us .accordion-list a.collapsed .icon-show {\r\n    display: inline-block;\r\n  }\r\n  \r\n  .why-us .accordion-list a.collapsed .icon-close {\r\n    display: none;\r\n  }\r\n  \r\n  @media (max-width: 1024px) {\r\n  \r\n    .why-us .content,\r\n    .why-us .accordion-list {\r\n      padding-left: 0;\r\n      padding-right: 0;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 992px) {\r\n    .why-us .img {\r\n      min-height: 400px;\r\n    }\r\n  \r\n    .why-us .content {\r\n      padding-top: 30px;\r\n    }\r\n  \r\n    .why-us .accordion-list {\r\n      padding-bottom: 30px;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 575px) {\r\n    .why-us .img {\r\n      min-height: 200px;\r\n    }\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Skills\r\n  --------------------------------------------------------------*/\r\n  .skills .content h3 {\r\n    font-weight: 700;\r\n    font-size: 32px;\r\n    color: #37517e;\r\n    font-family: \"Poppins\", sans-serif;\r\n  }\r\n  \r\n  .skills .content ul {\r\n    list-style: none;\r\n    padding: 0;\r\n  }\r\n  \r\n  .skills .content ul li {\r\n    padding-bottom: 10px;\r\n  }\r\n  \r\n  .skills .content ul i {\r\n    font-size: 20px;\r\n    padding-right: 4px;\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  .skills .content p:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .skills .progress {\r\n    height: 60px;\r\n    display: block;\r\n    background: none;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .skills .progress .skill {\r\n    padding: 0;\r\n    margin: 0 0 6px 0;\r\n    text-transform: uppercase;\r\n    display: block;\r\n    font-weight: 600;\r\n    font-family: \"Poppins\", sans-serif;\r\n    color: #37517e;\r\n  }\r\n  \r\n  .skills .progress .skill .val {\r\n    float: right;\r\n    font-style: normal;\r\n  }\r\n  \r\n  .skills .progress-bar-wrap {\r\n    background: #e8edf5;\r\n    height: 10px;\r\n  }\r\n  \r\n  .skills .progress-bar {\r\n    width: 1px;\r\n    height: 10px;\r\n    transition: 0.9s;\r\n    background-color: #4668a2;\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Services\r\n  --------------------------------------------------------------*/\r\n  .services .icon-box {\r\n    box-shadow: 0px 0 25px 0 rgba(0, 0, 0, 0.1);\r\n    padding: 50px 30px;\r\n    transition: all ease-in-out 0.4s;\r\n    background: #fff;\r\n  }\r\n  \r\n  .services .icon-box .icon {\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .services .icon-box .icon i {\r\n    color: #47b2e4;\r\n    font-size: 36px;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .services .icon-box h4 {\r\n    font-weight: 500;\r\n    margin-bottom: 15px;\r\n    font-size: 24px;\r\n  }\r\n  \r\n  .services .icon-box h4 a {\r\n    color: #37517e;\r\n    transition: ease-in-out 0.3s;\r\n  }\r\n  \r\n  .services .icon-box p {\r\n    line-height: 24px;\r\n    font-size: 14px;\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .services .icon-box:hover {\r\n    transform: translateY(-10px);\r\n  }\r\n  \r\n  .services .icon-box:hover h4 a {\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Cta\r\n  --------------------------------------------------------------*/\r\n  .cta {\r\n    background: linear-gradient(rgba(40, 58, 90, 0.9), rgba(40, 58, 90, 0.9)), url(\"/images/cta-bg.jpg\") fixed center center;\r\n    background-size: cover;\r\n    padding: 120px 0;\r\n    \r\n  } \r\n  .cta h3 {\r\n    color: #fff;\r\n    font-size: 28px;\r\n    font-weight: 700;\r\n  }\r\n  \r\n  .cta p {\r\n    color: #fff;\r\n    text-align: left !important\r\n  }\r\n  \r\n  .cta .cta-btn {\r\n    font-family: \"Jost\", sans-serif;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    letter-spacing: 1px;\r\n    display: inline-block;\r\n    padding: 12px 40px;\r\n    border-radius: 50px;\r\n    transition: 0.5s;\r\n    margin: 10px;\r\n    border: 2px solid #fff;\r\n    color: #fff;\r\n  }\r\n  \r\n  .cta .cta-btn:hover {\r\n    background: #47b2e4;\r\n    border: 2px solid #47b2e4;\r\n  }\r\n  \r\n  @media (max-width: 1024px) {\r\n    .cta {\r\n      background-attachment: scroll;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 769px) {\r\n    .cta .cta-btn-container {\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: flex-end;\r\n    }\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Portfolio\r\n  --------------------------------------------------------------*/\r\n  .portfolio #portfolio-flters {\r\n    list-style: none;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .portfolio #portfolio-flters li {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    margin: 10px 5px;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    line-height: 1;\r\n    color: #444444;\r\n    transition: all 0.3s;\r\n    padding: 8px 20px;\r\n    border-radius: 50px;\r\n    font-family: \"Poppins\", sans-serif;\r\n  }\r\n  \r\n  .portfolio #portfolio-flters li:hover,\r\n  .portfolio #portfolio-flters li.filter-active {\r\n    background: #47b2e4;\r\n    color: #fff;\r\n  }\r\n  \r\n  .portfolio .portfolio-item {\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  .portfolio .portfolio-item .portfolio-img {\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .portfolio .portfolio-item .portfolio-img img {\r\n    transition: all 0.6s;\r\n  }\r\n  \r\n  .portfolio .portfolio-item .portfolio-info {\r\n    opacity: 0;\r\n    position: absolute;\r\n    left: 15px;\r\n    bottom: 0;\r\n    z-index: 3;\r\n    right: 15px;\r\n    transition: all 0.3s;\r\n    background: rgba(55, 81, 126, 0.8);\r\n    padding: 10px 15px;\r\n  }\r\n  \r\n  .portfolio .portfolio-item .portfolio-info h4 {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    margin-bottom: 0px;\r\n  }\r\n  \r\n  .portfolio .portfolio-item .portfolio-info p {\r\n    color: #f9fcfe;\r\n    font-size: 14px;\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .portfolio .portfolio-item .portfolio-info .preview-link,\r\n  .portfolio .portfolio-item .portfolio-info .details-link {\r\n    position: absolute;\r\n    right: 40px;\r\n    font-size: 24px;\r\n    top: calc(50% - 18px);\r\n    color: #fff;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .portfolio .portfolio-item .portfolio-info .preview-link:hover,\r\n  .portfolio .portfolio-item .portfolio-info .details-link:hover {\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  .portfolio .portfolio-item .portfolio-info .details-link {\r\n    right: 10px;\r\n  }\r\n  \r\n  .portfolio .portfolio-item:hover .portfolio-img img {\r\n    transform: scale(1.15);\r\n  }\r\n  \r\n  .portfolio .portfolio-item:hover .portfolio-info {\r\n    opacity: 1;\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Portfolio Details\r\n  --------------------------------------------------------------*/\r\n  .portfolio-details {\r\n    padding-top: 40px;\r\n  }\r\n  \r\n  .portfolio-details .portfolio-details-slider img {\r\n    width: 100%;\r\n  }\r\n  \r\n  .portfolio-details .portfolio-details-slider .swiper-pagination {\r\n    margin-top: 20px;\r\n    position: relative;\r\n  }\r\n  \r\n  .portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet {\r\n    width: 12px;\r\n    height: 12px;\r\n    background-color: #fff;\r\n    opacity: 1;\r\n    border: 1px solid #47b2e4;\r\n  }\r\n  \r\n  .portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet-active {\r\n    background-color: #47b2e4;\r\n  }\r\n  \r\n  .portfolio-details .portfolio-info {\r\n    padding: 30px;\r\n    box-shadow: 0px 0 30px rgba(55, 81, 126, 0.08);\r\n  }\r\n  \r\n  .portfolio-details .portfolio-info h3 {\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    margin-bottom: 20px;\r\n    padding-bottom: 20px;\r\n    border-bottom: 1px solid #eee;\r\n  }\r\n  \r\n  .portfolio-details .portfolio-info ul {\r\n    list-style: none;\r\n    padding: 0;\r\n    font-size: 15px;\r\n  }\r\n  \r\n  .portfolio-details .portfolio-info ul li+li {\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .portfolio-details .portfolio-description {\r\n    padding-top: 30px;\r\n  }\r\n  \r\n  .portfolio-details .portfolio-description h2 {\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .portfolio-details .portfolio-description p {\r\n    padding: 0;\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Team\r\n  --------------------------------------------------------------*/\r\n  .team .member {\r\n    position: relative;\r\n    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);\r\n    padding: 30px;\r\n    border-radius: 5px;\r\n    background: #fff;\r\n    transition: 0.5s;\r\n    height: 100%;\r\n  }\r\n  \r\n  .team .member .pic {\r\n    overflow: hidden;\r\n    width: 180px;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .team .member .pic img {\r\n    transition: ease-in-out 0.3s;\r\n  }\r\n  \r\n  .team .member:hover {\r\n    transform: translateY(-10px);\r\n  }\r\n  \r\n  .team .member .member-info {\r\n    padding-left: 30px;\r\n  }\r\n  \r\n  .team .member h4 {\r\n    font-weight: 700;\r\n    margin-bottom: 5px;\r\n    font-size: 20px;\r\n    color: #37517e;\r\n  }\r\n  \r\n  .team .member span {\r\n    display: block;\r\n    font-size: 15px;\r\n    padding-bottom: 10px;\r\n    position: relative;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  .team .member span::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: block;\r\n    width: 50px;\r\n    height: 1px;\r\n    background: #cbd6e9;\r\n    bottom: 0;\r\n    left: 0;\r\n  }\r\n  \r\n  .team .member p {\r\n    margin: 10px 0 0 0;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .team .member .social {\r\n    margin-top: 12px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n  }\r\n  \r\n  .team .member .social a {\r\n    transition: ease-in-out 0.3s;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 50px;\r\n    width: 32px;\r\n    height: 32px;\r\n    background: #eff2f8;\r\n  }\r\n  \r\n  .team .member .social a i {\r\n    color: #37517e;\r\n    font-size: 16px;\r\n    margin: 0 2px;\r\n  }\r\n  \r\n  .team .member .social a:hover {\r\n    background: #47b2e4;\r\n  }\r\n  \r\n  .team .member .social a:hover i {\r\n    color: #fff;\r\n  }\r\n  \r\n  .team .member .social a+a {\r\n    margin-left: 8px;\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Pricing\r\n  --------------------------------------------------------------*/\r\n  .pricing .row {\r\n    padding-top: 40px;\r\n  }\r\n  \r\n  .pricing .box {\r\n    padding: 60px 40px;\r\n    box-shadow: 0 3px 20px -2px rgba(20, 45, 100, 0.1);\r\n    background: #fff;\r\n    height: 100%;\r\n    border-top: 4px solid #fff;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  .pricing h3 {\r\n    font-weight: 500;\r\n    margin-bottom: 15px;\r\n    font-size: 20px;\r\n    color: #37517e;\r\n  }\r\n  \r\n  .pricing h4 {\r\n    font-size: 48px;\r\n    color: #37517e;\r\n    font-weight: 400;\r\n    font-family: \"Jost\", sans-serif;\r\n    margin-bottom: 25px;\r\n  }\r\n  \r\n  .pricing h4 sup {\r\n    font-size: 28px;\r\n  }\r\n  \r\n  .pricing h4 span {\r\n    color: #47b2e4;\r\n    font-size: 18px;\r\n    display: block;\r\n  }\r\n  \r\n  .pricing ul {\r\n    padding: 20px 0;\r\n    list-style: none;\r\n    color: #999;\r\n    text-align: left;\r\n    line-height: 20px;\r\n  }\r\n  \r\n  .pricing ul li {\r\n    padding: 10px 0 10px 30px;\r\n    position: relative;\r\n  }\r\n  \r\n  .pricing ul i {\r\n    color: #28a745;\r\n    font-size: 24px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 6px;\r\n  }\r\n  \r\n  .pricing ul .na {\r\n    color: #ccc;\r\n  }\r\n  \r\n  .pricing ul .na i {\r\n    color: #ccc;\r\n  }\r\n  \r\n  .pricing ul .na span {\r\n    text-decoration: line-through;\r\n  }\r\n  \r\n  .pricing .buy-btn {\r\n    display: inline-block;\r\n    padding: 12px 35px;\r\n    border-radius: 50px;\r\n    color: #47b2e4;\r\n    transition: none;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    font-family: \"Jost\", sans-serif;\r\n    transition: 0.3s;\r\n    border: 1px solid #47b2e4;\r\n  }\r\n  \r\n  .pricing .buy-btn:hover {\r\n    background: #47b2e4;\r\n    color: #fff;\r\n  }\r\n  \r\n  .pricing .featured {\r\n    border-top-color: #47b2e4;\r\n  }\r\n  \r\n  .pricing .featured .buy-btn {\r\n    background: #47b2e4;\r\n    color: #fff;\r\n  }\r\n  \r\n  .pricing .featured .buy-btn:hover {\r\n    background: #23a3df;\r\n  }\r\n  \r\n  @media (max-width: 992px) {\r\n    .pricing .box {\r\n      max-width: 60%;\r\n      margin: 0 auto 30px auto;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 767px) {\r\n    .pricing .box {\r\n      max-width: 80%;\r\n      margin: 0 auto 30px auto;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 420px) {\r\n    .pricing .box {\r\n      max-width: 100%;\r\n      margin: 0 auto 30px auto;\r\n    }\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Frequently Asked Questions\r\n  --------------------------------------------------------------*/\r\n  .faq .faq-list {\r\n    padding: 0 100px;\r\n  }\r\n  \r\n  .faq .faq-list ul {\r\n    padding: 0;\r\n    list-style: none;\r\n  }\r\n  \r\n  .faq .faq-list li+li {\r\n    margin-top: 15px;\r\n  }\r\n  \r\n  .faq .faq-list li {\r\n    padding: 20px;\r\n    background: #fff;\r\n    border-radius: 4px;\r\n    position: relative;\r\n  }\r\n  \r\n  .faq .faq-list a {\r\n    display: block;\r\n    position: relative;\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    font-weight: 500;\r\n    padding: 0 30px;\r\n    outline: none;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .faq .faq-list .icon-help {\r\n    font-size: 24px;\r\n    position: absolute;\r\n    right: 0;\r\n    left: 20px;\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  .faq .faq-list .icon-show,\r\n  .faq .faq-list .icon-close {\r\n    font-size: 24px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n  \r\n  .faq .faq-list p {\r\n    margin-bottom: 0;\r\n    padding: 10px 0 0 0;\r\n  }\r\n  \r\n  .faq .faq-list .icon-show {\r\n    display: none;\r\n  }\r\n  \r\n  .faq .faq-list a.collapsed {\r\n    color: #37517e;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .faq .faq-list a.collapsed:hover {\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  .faq .faq-list a.collapsed .icon-show {\r\n    display: inline-block;\r\n  }\r\n  \r\n  .faq .faq-list a.collapsed .icon-close {\r\n    display: none;\r\n  }\r\n  \r\n  @media (max-width: 1200px) {\r\n    .faq .faq-list {\r\n      padding: 0;\r\n    }\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Contact\r\n  --------------------------------------------------------------*/\r\n  .contact .info {\r\n    border-top: 3px solid #47b2e4;\r\n    border-bottom: 3px solid #47b2e4;\r\n    padding: 30px;\r\n    background: #fff;\r\n    width: 100%;\r\n    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  .contact .info i {\r\n    font-size: 20px;\r\n    color: #47b2e4;\r\n    float: left;\r\n    width: 44px;\r\n    height: 44px;\r\n    background: #e7f5fb;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 50px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n  \r\n  .contact .info h4 {\r\n    padding: 0 0 0 60px;\r\n    font-size: 22px;\r\n    font-weight: 600;\r\n    margin-bottom: 5px;\r\n    color: #37517e;\r\n  }\r\n  \r\n  .contact .info p {\r\n    padding: 0 0 10px 60px;\r\n    margin-bottom: 20px;\r\n    font-size: 14px;\r\n    color: #6182ba;\r\n  }\r\n  \r\n  .contact .info .email p {\r\n    padding-top: 5px;\r\n  }\r\n  \r\n  .contact .info .social-links {\r\n    padding-left: 60px;\r\n  }\r\n  \r\n  .contact .info .social-links a {\r\n    font-size: 18px;\r\n    display: inline-block;\r\n    background: #333;\r\n    color: #fff;\r\n    line-height: 1;\r\n    padding: 8px 0;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    width: 36px;\r\n    height: 36px;\r\n    transition: 0.3s;\r\n    margin-right: 10px;\r\n  }\r\n  \r\n  .contact .info .social-links a:hover {\r\n    background: #47b2e4;\r\n    color: #fff;\r\n  }\r\n  \r\n  .contact .info .email:hover i,\r\n  .contact .info .address:hover i,\r\n  .contact .info .phone:hover i {\r\n    background: #47b2e4;\r\n    color: #fff;\r\n  }\r\n  \r\n  .contact .php-email-form {\r\n    width: 100%;\r\n    border-top: 3px solid #47b2e4;\r\n    border-bottom: 3px solid #47b2e4;\r\n    padding: 30px;\r\n    background: #fff;\r\n    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);\r\n  }\r\n  \r\n  .contact .php-email-form .form-group {\r\n    padding-bottom: 8px;\r\n  }\r\n  \r\n  .contact .php-email-form .validate {\r\n    display: none;\r\n    color: red;\r\n    margin: 0 0 15px 0;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n  }\r\n  \r\n  .contact .php-email-form .error-message {\r\n    display: none;\r\n    color: #fff;\r\n    background: #ed3c0d;\r\n    text-align: left;\r\n    padding: 15px;\r\n    font-weight: 600;\r\n  }\r\n  \r\n  .contact .php-email-form .error-message br+br {\r\n    margin-top: 25px;\r\n  }\r\n  \r\n  .contact .php-email-form .sent-message {\r\n    display: none;\r\n    color: #fff;\r\n    background: #18d26e;\r\n    text-align: center;\r\n    padding: 15px;\r\n    font-weight: 600;\r\n  }\r\n  \r\n  .contact .php-email-form .loading {\r\n    display: none;\r\n    background: #fff;\r\n    text-align: center;\r\n    padding: 15px;\r\n  }\r\n  \r\n  .contact .php-email-form .loading:before {\r\n    content: \"\";\r\n    display: inline-block;\r\n    border-radius: 50%;\r\n    width: 24px;\r\n    height: 24px;\r\n    margin: 0 10px -6px 0;\r\n    border: 3px solid #18d26e;\r\n    border-top-color: #eee;\r\n    animation: animate-loading 1s linear infinite;\r\n  }\r\n  \r\n  .contact .php-email-form .form-group {\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .contact .php-email-form label {\r\n    padding-bottom: 8px;\r\n  }\r\n  \r\n  .contact .php-email-form input,\r\n  .contact .php-email-form textarea {\r\n    border-radius: 0;\r\n    box-shadow: none;\r\n    font-size: 14px;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .contact .php-email-form input:focus,\r\n  .contact .php-email-form textarea:focus {\r\n    border-color: #47b2e4;\r\n  }\r\n  \r\n  .contact .php-email-form input {\r\n    height: 44px;\r\n  }\r\n  \r\n  .contact .php-email-form textarea {\r\n    padding: 10px 12px;\r\n  }\r\n  \r\n  .contact .php-email-form button[type=submit] {\r\n    background: #47b2e4;\r\n    border: 0;\r\n    padding: 12px 34px;\r\n    color: #fff;\r\n    transition: 0.4s;\r\n    border-radius: 50px;\r\n  }\r\n  \r\n  .contact .php-email-form button[type=submit]:hover {\r\n    background: #209dd8;\r\n  }\r\n  \r\n  @keyframes animate-loading {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n  \r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Breadcrumbs\r\n  --------------------------------------------------------------*/\r\n  .breadcrumbs {\r\n    padding: 15px 0;\r\n    background: #f3f5fa;\r\n    min-height: 40px;\r\n    margin-top: 72px;\r\n  }\r\n  \r\n  @media (max-width: 992px) {\r\n    .breadcrumbs {\r\n      margin-top: 68px;\r\n    }\r\n  }\r\n  \r\n  .breadcrumbs h2 {\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    color: #37517e;\r\n  }\r\n  \r\n  .breadcrumbs ol {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    list-style: none;\r\n    padding: 0 0 10px 0;\r\n    margin: 0;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .breadcrumbs ol li+li {\r\n    padding-left: 10px;\r\n  }\r\n  \r\n  .breadcrumbs ol li+li::before {\r\n    display: inline-block;\r\n    padding-right: 10px;\r\n    color: #4668a2;\r\n    content: \"/\";\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Footer\r\n  --------------------------------------------------------------*/\r\n  #footer-front {\r\n    font-size: 14px;\r\n    background: #37517e;\r\n  }\r\n  \r\n  #footer-front .footer-newsletter {\r\n    padding: 50px 0;\r\n    background: #f3f5fa;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    color: #444444;\r\n  }\r\n  \r\n  #footer-front .footer-newsletter h4 {\r\n    font-size: 24px;\r\n    margin: 0 0 20px 0;\r\n    padding: 0;\r\n    line-height: 1;\r\n    font-weight: 600;\r\n    color: #37517e;\r\n  }\r\n  \r\n  #footer-front .footer-newsletter form {\r\n    margin-top: 30px;\r\n    background: #fff;\r\n    padding: 6px 10px;\r\n    position: relative;\r\n    border-radius: 50px;\r\n    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.06);\r\n    text-align: left;\r\n  }\r\n  \r\n  #footer-front .footer-newsletter form input[type=email] {\r\n    border: 0;\r\n    padding: 4px 8px;\r\n    width: calc(100% - 100px);\r\n  }\r\n  \r\n  #footer-front .footer-newsletter form input[type=submit] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    border: 0;\r\n    background: none;\r\n    font-size: 16px;\r\n    padding: 0 20px;\r\n    background: #47b2e4;\r\n    color: #fff;\r\n    transition: 0.3s;\r\n    border-radius: 50px;\r\n    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  #footer-front .footer-newsletter form input[type=submit]:hover {\r\n    background: #209dd8;\r\n  }\r\n  \r\n  #footer-front .footer-top {\r\n    padding: 60px 0 30px 0;\r\n    background: #fff;\r\n  }\r\n  \r\n  #footer-front .footer-top .footer-contact {\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  #footer-front .footer-top .footer-contact h3 {\r\n    font-size: 28px;\r\n    margin: 0 0 10px 0;\r\n    padding: 2px 0 2px 0;\r\n    line-height: 1;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    color: #37517e;\r\n  }\r\n  \r\n  #footer-front .footer-top .footer-contact p {\r\n    font-size: 14px;\r\n    line-height: 24px;\r\n    margin-bottom: 0;\r\n    font-family: \"Jost\", sans-serif;\r\n    color: #5e5e5e;\r\n  }\r\n  \r\n  #footer-front .footer-top h4 {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    color: #37517e;\r\n    position: relative;\r\n    padding-bottom: 12px;\r\n  }\r\n  \r\n  #footer-front .footer-top .footer-links {\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  #footer-front .footer-top .footer-links ul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  #footer-front .footer-top .footer-links ul i {\r\n    padding-right: 2px;\r\n    color: #47b2e4;\r\n    font-size: 18px;\r\n    line-height: 1;\r\n  }\r\n  \r\n  #footer-front .footer-top .footer-links ul li {\r\n    padding: 10px 0;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  #footer-front .footer-top .footer-links ul li:first-child {\r\n    padding-top: 0;\r\n  }\r\n  \r\n  #footer-front .footer-top .footer-links ul a {\r\n    color: #777777;\r\n    transition: 0.3s;\r\n    display: inline-block;\r\n    line-height: 1;\r\n  }\r\n  \r\n  #footer-front .footer-top .footer-links ul a:hover {\r\n    text-decoration: none;\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  #footer-front .footer-top .social-links a {\r\n    font-size: 18px;\r\n    display: inline-block;\r\n    background: #47b2e4;\r\n    color: #fff;\r\n    line-height: 1;\r\n    padding: 8px 0;\r\n    margin-right: 4px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    width: 36px;\r\n    height: 36px;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  #footer-front .footer-top .social-links a:hover {\r\n    background: #209dd8;\r\n    color: #fff;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  #footer-front .footer-bottom {\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n    color: #fff;\r\n  }\r\n  \r\n  #footer-front .copyright {\r\n    float: left;\r\n  }\r\n  \r\n  #footer-front .credits {\r\n    float: right;\r\n    font-size: 13px;\r\n  }\r\n  \r\n  #footer-front .credits a {\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  @media (max-width: 768px) {\r\n    #footer-front .footer-bottom {\r\n      padding-top: 20px;\r\n      padding-bottom: 20px;\r\n    }\r\n  \r\n    #footer-front .copyright,\r\n    #footer-front .credits {\r\n      text-align: center;\r\n      float: none;\r\n    }\r\n  \r\n    #footer-front .credits {\r\n      padding-top: 4px;\r\n    }\r\n  }\r\n\r\n  /* section benefit */\r\n#benefit {\r\n    background-color: #f3f5fa !important;\r\n}\r\n#benefit .d-flex p{\r\n    text-align: left !important;\r\n}\r\n.price_list .icon-box2  {  \r\ntransition: all ease-in-out 0.4s;\r\n}\r\n.price_list .icon-box2:hover {\r\ntransform: translateY(-10px);\r\n}\r\n\r\n/* section projects */\r\n#projects{\r\n  background-color: #f3f5fa !important;\r\n}\r\n#projects .d-flex h1 {\r\n  font-weight: bold;\r\n  font-weight: bold;\r\n  font-size: 3.7em; \r\n}\r\n#projects .d-flex p {\r\n  font-weight: bold;\r\n  text-align: center !important;\r\n    line-height: 0px;\r\n}\r\n  \r\n@media (max-width: 767px) {\r\n  #projects .d-flex h1 { \r\n    font-size: 2.7em !important; \r\n  }\r\n  #projects .d-flex p { \r\n    line-height: 1 !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 420px) {\r\n  #projects .d-flex h1 { \r\n    font-size: 1.8em !important; \r\n  }\r\n  #projects .d-flex p {  \r\n    line-height: 1 !important;\r\n  }\r\n}\r\n\r\n  /* section faq */\r\n#faq {\r\n    background-color: #f3f5fa !important;\r\n}\r\n#faq .d-flex p{\r\n    text-align: left !important;\r\n}\r\n\r\n/* content card */\r\n.content_card {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 400px;\r\n  margin: auto;\r\n  overflow: hidden;\r\n}\r\n\r\n.content_card .content_card-overlay {\r\n  background: rgba(0,0,0,0.7);\r\n  position: absolute;\r\n  height: 99%;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  opacity: 0;\r\n  -webkit-transition: all 0.4s ease-in-out 0s;\r\n  -moz-transition: all 0.4s ease-in-out 0s;\r\n  transition: all 0.4s ease-in-out 0s;\r\n}\r\n\r\n.content_card:hover .content_card-overlay{\r\n  opacity: 1;\r\n}\r\n\r\n.content_card-image{\r\n  width: 100%;\r\n}\r\n\r\n.content_card-details {\r\n  position: absolute;\r\n  text-align: center;\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  width: 100%;\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 0;\r\n  -webkit-transform: translate(-50%, -50%);\r\n  -moz-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n  -webkit-transition: all 0.3s ease-in-out 0s;\r\n  -moz-transition: all 0.3s ease-in-out 0s;\r\n  transition: all 0.3s ease-in-out 0s;\r\n}\r\n\r\n.content_card:hover .content_card-details{\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 1;\r\n}\r\n\r\n.content_card-details h3{\r\n  color: #fff;\r\n  font-weight: 500;\r\n  /* letter-spacing: 0.15em; */\r\n  margin-bottom: 0.5em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.content_card-details p{\r\n  color: #fff;\r\n  font-size: 0.8em;\r\n  text-align: center !important;\r\n  line-height: 0px;\r\n}\r\n\r\n.fadeIn-bottom{\r\n  top: 80%;\r\n}\r\n\r\n.fadeIn-top{\r\n  top: 20%;\r\n}\r\n.fadeIn-bottom{\r\n  top: 80%;\r\n}\r\n\r\n.fadeIn-top{\r\n  top: 20%;\r\n}\r\n\r\n.fadeIn-left{\r\n  left: 20%;\r\n}\r\n\r\n.fadeIn-right{\r\n  left: 80%;\r\n}\r\n.content_card  .flex-container {\r\n  display: flex;\r\n  color: #fff;\r\n  flex-wrap: revert;  \r\n  justify-content: center;\r\n} \r\n.content_card  .flex-container  .flex-item {\r\n  background: transparent;\r\n  font-size: 2.5em;\r\n  margin-right: 10px;\r\n}\r\n\r\n\r\n/*--------------------------------------------------------------\r\n# Testimonials\r\n--------------------------------------------------------------*/\r\n.testimonials {\r\n  padding: 80px 0;\r\n  background: url(\"/images/cta-bg.jpg\") no-repeat;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n.testimonials::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  background: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.testimonials .section-header {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.testimonials .testimonials-carousel,\r\n.testimonials .testimonials-slider {\r\n  overflow: hidden;\r\n}\r\n\r\n.testimonials .testimonial-item {\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n.testimonials p {\r\n  text-align: center !important; \r\n}\r\n\r\n.testimonials .testimonial-item .testimonial-img {\r\n  width: 100px;\r\n  border-radius: 50%;\r\n  border: 6px solid rgba(255, 255, 255, 0.15);\r\n  margin: 0 auto;\r\n}\r\n\r\n.testimonials .testimonial-item h3 {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  margin: 10px 0 5px 0;\r\n  color: #fff;\r\n}\r\n\r\n.testimonials .testimonial-item h4 {\r\n  font-size: 14px;\r\n  color: #ddd;\r\n  margin: 0 0 15px 0;\r\n}\r\n\r\n.testimonials .testimonial-item .quote-icon-left,\r\n.testimonials .testimonial-item .quote-icon-right {\r\n  color: rgba(255, 255, 255, 0.6);\r\n  font-size: 26px;\r\n}\r\n\r\n.testimonials .testimonial-item .quote-icon-left {\r\n  display: inline-block;\r\n  left: -5px;\r\n  position: relative;\r\n}\r\n\r\n.testimonials .testimonial-item .quote-icon-right {\r\n  display: inline-block;\r\n  right: -5px;\r\n  position: relative;\r\n  top: 10px;\r\n}\r\n\r\n.testimonials .testimonial-item p {\r\n  font-style: italic;\r\n  margin: 0 auto 15px auto;\r\n  color: #eee;\r\n}\r\n\r\n.testimonials .swiper-pagination {\r\n  margin-top: 20px;\r\n  position: relative;\r\n}\r\n\r\n.testimonials .swiper-pagination .swiper-pagination-bullet {\r\n  width: 12px;\r\n  height: 12px;\r\n  background-color: rgba(255, 255, 255, 0.4);\r\n  opacity: 0.5;\r\n}\r\n\r\n.testimonials .swiper-pagination .swiper-pagination-bullet-active {\r\n  background-color: #ffc451;\r\n  opacity: 1;\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  .testimonials {\r\n    background-attachment: fixed;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .testimonials .testimonial-item p {\r\n    width: 80%;\r\n  }\r\n}\r\n\r\n\r\n\r\n/* CONTETNT BLOG */\r\n/* content card */\r\n.content_blog {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 400px;\r\n  min-height: 310px !important;\r\n  max-height: 310px !important;\r\n  margin: auto;\r\n  overflow: hidden;\r\n} \r\n.content_blog img {\r\n  object-fit: cover;\r\n  height: 310px;\r\n}\r\n.content_blog-details {\r\n  padding: 15vh 10px;\r\n  position: absolute;\r\n  overflow: hidden;\r\n  top: 0; \r\n  background: linear-gradient(to bottom, rgba(0, 47, 75, 0.02) 0%,rgba(0, 0, 0, 0.6) 100%);\r\n  color: white;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0 auto;\r\n  text-align: center !important;\r\n}\r\n.content_blog-details:hover {\r\n \r\n  background: linear-gradient(to bottom, rgba(0, 123, 195, 0.02) 0%,rgba(98, 81, 173, 0.6) 100%);\r\n \r\n}\r\n.content_blog-details p{\r\n  /* line-height: 0 !important; */\r\n  color: white;\r\n  text-align: center !important;\r\n  text-align: justify !important;\r\n  padding: 0px 20px;\r\n} \r\n\r\n\r\n#whatsapp {\r\n  background: #fff;\r\n  color: #404040;\r\n  position: fixed;\r\n  display: flex;\r\n  font-weight: 400;\r\n  justify-content: space-between;\r\n  z-index: 98;\r\n  bottom: 25px;\r\n  right: 30px;\r\n  font-size: 15px;\r\n  padding: 10px 20px;\r\n  border-radius: 30px;\r\n  box-shadow: 0 1px 15px rgba(32, 33, 36, 0.28);\r\n  cursor: pointer;\r\n  border: 0;\r\n}\r\n#whatsapp a{\r\n  padding-top: -100px;\r\n  text-decoration: none;\r\n}\r\n#whatsapp a:hover{\r\n  text-decoration: none;\r\n}\r\n#whatsapp i{\r\n  font-size: 2.5em;\r\n  color: #30a83f;\r\n  padding-right: 4px; \r\n}\r\n#whatsapp a {\r\n  padding-top: 10px !important;\r\n}\r\n\r\n  \r\n@media (max-width: 767px) {\r\n #whatsapp {\r\n    bottom: 15px !important;\r\n }\r\n}\r\n\r\n@media (max-width: 420px) {\r\n #whatsapp {\r\n    right: 10px !important;\r\n }\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/js/swiper/swiper-bundle.min.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/js/swiper/swiper-bundle.min.css ***!
  \**************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Swiper 8.4.7\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2023 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: January 30, 2023\n */\n\n@font-face{font-family:swiper-icons;src:url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA');font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-android .swiper-slide,.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-pointer-events{touch-action:pan-y}.swiper-pointer-events.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-virtual .swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:'prev'}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:'next'}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:50%;background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader,.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-next+.swiper-slide,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-right,.swiper-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-flip{overflow:visible}.swiper-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-right,.swiper-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-creative .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/vendor/bootstrap-icons/bootstrap-icons.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/vendor/bootstrap-icons/bootstrap-icons.css ***!
  \*************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_bootstrap_icons_woff2_1fa40e8900654d2863d011707b9fb6f2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts/bootstrap-icons.woff2?1fa40e8900654d2863d011707b9fb6f2 */ "./public/vendor/bootstrap-icons/fonts/bootstrap-icons.woff2?1fa40e8900654d2863d011707b9fb6f2");
/* harmony import */ var _fonts_bootstrap_icons_woff2_1fa40e8900654d2863d011707b9fb6f2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fonts_bootstrap_icons_woff2_1fa40e8900654d2863d011707b9fb6f2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fonts_bootstrap_icons_woff_1fa40e8900654d2863d011707b9fb6f2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts/bootstrap-icons.woff?1fa40e8900654d2863d011707b9fb6f2 */ "./public/vendor/bootstrap-icons/fonts/bootstrap-icons.woff?1fa40e8900654d2863d011707b9fb6f2");
/* harmony import */ var _fonts_bootstrap_icons_woff_1fa40e8900654d2863d011707b9fb6f2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fonts_bootstrap_icons_woff_1fa40e8900654d2863d011707b9fb6f2__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()((_fonts_bootstrap_icons_woff2_1fa40e8900654d2863d011707b9fb6f2__WEBPACK_IMPORTED_MODULE_2___default()));
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()((_fonts_bootstrap_icons_woff_1fa40e8900654d2863d011707b9fb6f2__WEBPACK_IMPORTED_MODULE_3___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Bootstrap Icons v1.10.5 (https://icons.getbootstrap.com/)\n * Copyright 2019-2023 The Bootstrap Authors\n * Licensed under MIT (https://github.com/twbs/icons/blob/main/LICENSE)\n */\n\n@font-face {\n  font-display: block;\n  font-family: \"bootstrap-icons\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\nurl(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\n\n.bi::before,\n[class^=\"bi-\"]::before,\n[class*=\" bi-\"]::before {\n  display: inline-block;\n  font-family: bootstrap-icons !important;\n  font-style: normal;\n  font-weight: normal !important;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  vertical-align: -.125em;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.bi-123::before { content: \"\\f67f\"; }\n.bi-alarm-fill::before { content: \"\\f101\"; }\n.bi-alarm::before { content: \"\\f102\"; }\n.bi-align-bottom::before { content: \"\\f103\"; }\n.bi-align-center::before { content: \"\\f104\"; }\n.bi-align-end::before { content: \"\\f105\"; }\n.bi-align-middle::before { content: \"\\f106\"; }\n.bi-align-start::before { content: \"\\f107\"; }\n.bi-align-top::before { content: \"\\f108\"; }\n.bi-alt::before { content: \"\\f109\"; }\n.bi-app-indicator::before { content: \"\\f10a\"; }\n.bi-app::before { content: \"\\f10b\"; }\n.bi-archive-fill::before { content: \"\\f10c\"; }\n.bi-archive::before { content: \"\\f10d\"; }\n.bi-arrow-90deg-down::before { content: \"\\f10e\"; }\n.bi-arrow-90deg-left::before { content: \"\\f10f\"; }\n.bi-arrow-90deg-right::before { content: \"\\f110\"; }\n.bi-arrow-90deg-up::before { content: \"\\f111\"; }\n.bi-arrow-bar-down::before { content: \"\\f112\"; }\n.bi-arrow-bar-left::before { content: \"\\f113\"; }\n.bi-arrow-bar-right::before { content: \"\\f114\"; }\n.bi-arrow-bar-up::before { content: \"\\f115\"; }\n.bi-arrow-clockwise::before { content: \"\\f116\"; }\n.bi-arrow-counterclockwise::before { content: \"\\f117\"; }\n.bi-arrow-down-circle-fill::before { content: \"\\f118\"; }\n.bi-arrow-down-circle::before { content: \"\\f119\"; }\n.bi-arrow-down-left-circle-fill::before { content: \"\\f11a\"; }\n.bi-arrow-down-left-circle::before { content: \"\\f11b\"; }\n.bi-arrow-down-left-square-fill::before { content: \"\\f11c\"; }\n.bi-arrow-down-left-square::before { content: \"\\f11d\"; }\n.bi-arrow-down-left::before { content: \"\\f11e\"; }\n.bi-arrow-down-right-circle-fill::before { content: \"\\f11f\"; }\n.bi-arrow-down-right-circle::before { content: \"\\f120\"; }\n.bi-arrow-down-right-square-fill::before { content: \"\\f121\"; }\n.bi-arrow-down-right-square::before { content: \"\\f122\"; }\n.bi-arrow-down-right::before { content: \"\\f123\"; }\n.bi-arrow-down-short::before { content: \"\\f124\"; }\n.bi-arrow-down-square-fill::before { content: \"\\f125\"; }\n.bi-arrow-down-square::before { content: \"\\f126\"; }\n.bi-arrow-down-up::before { content: \"\\f127\"; }\n.bi-arrow-down::before { content: \"\\f128\"; }\n.bi-arrow-left-circle-fill::before { content: \"\\f129\"; }\n.bi-arrow-left-circle::before { content: \"\\f12a\"; }\n.bi-arrow-left-right::before { content: \"\\f12b\"; }\n.bi-arrow-left-short::before { content: \"\\f12c\"; }\n.bi-arrow-left-square-fill::before { content: \"\\f12d\"; }\n.bi-arrow-left-square::before { content: \"\\f12e\"; }\n.bi-arrow-left::before { content: \"\\f12f\"; }\n.bi-arrow-repeat::before { content: \"\\f130\"; }\n.bi-arrow-return-left::before { content: \"\\f131\"; }\n.bi-arrow-return-right::before { content: \"\\f132\"; }\n.bi-arrow-right-circle-fill::before { content: \"\\f133\"; }\n.bi-arrow-right-circle::before { content: \"\\f134\"; }\n.bi-arrow-right-short::before { content: \"\\f135\"; }\n.bi-arrow-right-square-fill::before { content: \"\\f136\"; }\n.bi-arrow-right-square::before { content: \"\\f137\"; }\n.bi-arrow-right::before { content: \"\\f138\"; }\n.bi-arrow-up-circle-fill::before { content: \"\\f139\"; }\n.bi-arrow-up-circle::before { content: \"\\f13a\"; }\n.bi-arrow-up-left-circle-fill::before { content: \"\\f13b\"; }\n.bi-arrow-up-left-circle::before { content: \"\\f13c\"; }\n.bi-arrow-up-left-square-fill::before { content: \"\\f13d\"; }\n.bi-arrow-up-left-square::before { content: \"\\f13e\"; }\n.bi-arrow-up-left::before { content: \"\\f13f\"; }\n.bi-arrow-up-right-circle-fill::before { content: \"\\f140\"; }\n.bi-arrow-up-right-circle::before { content: \"\\f141\"; }\n.bi-arrow-up-right-square-fill::before { content: \"\\f142\"; }\n.bi-arrow-up-right-square::before { content: \"\\f143\"; }\n.bi-arrow-up-right::before { content: \"\\f144\"; }\n.bi-arrow-up-short::before { content: \"\\f145\"; }\n.bi-arrow-up-square-fill::before { content: \"\\f146\"; }\n.bi-arrow-up-square::before { content: \"\\f147\"; }\n.bi-arrow-up::before { content: \"\\f148\"; }\n.bi-arrows-angle-contract::before { content: \"\\f149\"; }\n.bi-arrows-angle-expand::before { content: \"\\f14a\"; }\n.bi-arrows-collapse::before { content: \"\\f14b\"; }\n.bi-arrows-expand::before { content: \"\\f14c\"; }\n.bi-arrows-fullscreen::before { content: \"\\f14d\"; }\n.bi-arrows-move::before { content: \"\\f14e\"; }\n.bi-aspect-ratio-fill::before { content: \"\\f14f\"; }\n.bi-aspect-ratio::before { content: \"\\f150\"; }\n.bi-asterisk::before { content: \"\\f151\"; }\n.bi-at::before { content: \"\\f152\"; }\n.bi-award-fill::before { content: \"\\f153\"; }\n.bi-award::before { content: \"\\f154\"; }\n.bi-back::before { content: \"\\f155\"; }\n.bi-backspace-fill::before { content: \"\\f156\"; }\n.bi-backspace-reverse-fill::before { content: \"\\f157\"; }\n.bi-backspace-reverse::before { content: \"\\f158\"; }\n.bi-backspace::before { content: \"\\f159\"; }\n.bi-badge-3d-fill::before { content: \"\\f15a\"; }\n.bi-badge-3d::before { content: \"\\f15b\"; }\n.bi-badge-4k-fill::before { content: \"\\f15c\"; }\n.bi-badge-4k::before { content: \"\\f15d\"; }\n.bi-badge-8k-fill::before { content: \"\\f15e\"; }\n.bi-badge-8k::before { content: \"\\f15f\"; }\n.bi-badge-ad-fill::before { content: \"\\f160\"; }\n.bi-badge-ad::before { content: \"\\f161\"; }\n.bi-badge-ar-fill::before { content: \"\\f162\"; }\n.bi-badge-ar::before { content: \"\\f163\"; }\n.bi-badge-cc-fill::before { content: \"\\f164\"; }\n.bi-badge-cc::before { content: \"\\f165\"; }\n.bi-badge-hd-fill::before { content: \"\\f166\"; }\n.bi-badge-hd::before { content: \"\\f167\"; }\n.bi-badge-tm-fill::before { content: \"\\f168\"; }\n.bi-badge-tm::before { content: \"\\f169\"; }\n.bi-badge-vo-fill::before { content: \"\\f16a\"; }\n.bi-badge-vo::before { content: \"\\f16b\"; }\n.bi-badge-vr-fill::before { content: \"\\f16c\"; }\n.bi-badge-vr::before { content: \"\\f16d\"; }\n.bi-badge-wc-fill::before { content: \"\\f16e\"; }\n.bi-badge-wc::before { content: \"\\f16f\"; }\n.bi-bag-check-fill::before { content: \"\\f170\"; }\n.bi-bag-check::before { content: \"\\f171\"; }\n.bi-bag-dash-fill::before { content: \"\\f172\"; }\n.bi-bag-dash::before { content: \"\\f173\"; }\n.bi-bag-fill::before { content: \"\\f174\"; }\n.bi-bag-plus-fill::before { content: \"\\f175\"; }\n.bi-bag-plus::before { content: \"\\f176\"; }\n.bi-bag-x-fill::before { content: \"\\f177\"; }\n.bi-bag-x::before { content: \"\\f178\"; }\n.bi-bag::before { content: \"\\f179\"; }\n.bi-bar-chart-fill::before { content: \"\\f17a\"; }\n.bi-bar-chart-line-fill::before { content: \"\\f17b\"; }\n.bi-bar-chart-line::before { content: \"\\f17c\"; }\n.bi-bar-chart-steps::before { content: \"\\f17d\"; }\n.bi-bar-chart::before { content: \"\\f17e\"; }\n.bi-basket-fill::before { content: \"\\f17f\"; }\n.bi-basket::before { content: \"\\f180\"; }\n.bi-basket2-fill::before { content: \"\\f181\"; }\n.bi-basket2::before { content: \"\\f182\"; }\n.bi-basket3-fill::before { content: \"\\f183\"; }\n.bi-basket3::before { content: \"\\f184\"; }\n.bi-battery-charging::before { content: \"\\f185\"; }\n.bi-battery-full::before { content: \"\\f186\"; }\n.bi-battery-half::before { content: \"\\f187\"; }\n.bi-battery::before { content: \"\\f188\"; }\n.bi-bell-fill::before { content: \"\\f189\"; }\n.bi-bell::before { content: \"\\f18a\"; }\n.bi-bezier::before { content: \"\\f18b\"; }\n.bi-bezier2::before { content: \"\\f18c\"; }\n.bi-bicycle::before { content: \"\\f18d\"; }\n.bi-binoculars-fill::before { content: \"\\f18e\"; }\n.bi-binoculars::before { content: \"\\f18f\"; }\n.bi-blockquote-left::before { content: \"\\f190\"; }\n.bi-blockquote-right::before { content: \"\\f191\"; }\n.bi-book-fill::before { content: \"\\f192\"; }\n.bi-book-half::before { content: \"\\f193\"; }\n.bi-book::before { content: \"\\f194\"; }\n.bi-bookmark-check-fill::before { content: \"\\f195\"; }\n.bi-bookmark-check::before { content: \"\\f196\"; }\n.bi-bookmark-dash-fill::before { content: \"\\f197\"; }\n.bi-bookmark-dash::before { content: \"\\f198\"; }\n.bi-bookmark-fill::before { content: \"\\f199\"; }\n.bi-bookmark-heart-fill::before { content: \"\\f19a\"; }\n.bi-bookmark-heart::before { content: \"\\f19b\"; }\n.bi-bookmark-plus-fill::before { content: \"\\f19c\"; }\n.bi-bookmark-plus::before { content: \"\\f19d\"; }\n.bi-bookmark-star-fill::before { content: \"\\f19e\"; }\n.bi-bookmark-star::before { content: \"\\f19f\"; }\n.bi-bookmark-x-fill::before { content: \"\\f1a0\"; }\n.bi-bookmark-x::before { content: \"\\f1a1\"; }\n.bi-bookmark::before { content: \"\\f1a2\"; }\n.bi-bookmarks-fill::before { content: \"\\f1a3\"; }\n.bi-bookmarks::before { content: \"\\f1a4\"; }\n.bi-bookshelf::before { content: \"\\f1a5\"; }\n.bi-bootstrap-fill::before { content: \"\\f1a6\"; }\n.bi-bootstrap-reboot::before { content: \"\\f1a7\"; }\n.bi-bootstrap::before { content: \"\\f1a8\"; }\n.bi-border-all::before { content: \"\\f1a9\"; }\n.bi-border-bottom::before { content: \"\\f1aa\"; }\n.bi-border-center::before { content: \"\\f1ab\"; }\n.bi-border-inner::before { content: \"\\f1ac\"; }\n.bi-border-left::before { content: \"\\f1ad\"; }\n.bi-border-middle::before { content: \"\\f1ae\"; }\n.bi-border-outer::before { content: \"\\f1af\"; }\n.bi-border-right::before { content: \"\\f1b0\"; }\n.bi-border-style::before { content: \"\\f1b1\"; }\n.bi-border-top::before { content: \"\\f1b2\"; }\n.bi-border-width::before { content: \"\\f1b3\"; }\n.bi-border::before { content: \"\\f1b4\"; }\n.bi-bounding-box-circles::before { content: \"\\f1b5\"; }\n.bi-bounding-box::before { content: \"\\f1b6\"; }\n.bi-box-arrow-down-left::before { content: \"\\f1b7\"; }\n.bi-box-arrow-down-right::before { content: \"\\f1b8\"; }\n.bi-box-arrow-down::before { content: \"\\f1b9\"; }\n.bi-box-arrow-in-down-left::before { content: \"\\f1ba\"; }\n.bi-box-arrow-in-down-right::before { content: \"\\f1bb\"; }\n.bi-box-arrow-in-down::before { content: \"\\f1bc\"; }\n.bi-box-arrow-in-left::before { content: \"\\f1bd\"; }\n.bi-box-arrow-in-right::before { content: \"\\f1be\"; }\n.bi-box-arrow-in-up-left::before { content: \"\\f1bf\"; }\n.bi-box-arrow-in-up-right::before { content: \"\\f1c0\"; }\n.bi-box-arrow-in-up::before { content: \"\\f1c1\"; }\n.bi-box-arrow-left::before { content: \"\\f1c2\"; }\n.bi-box-arrow-right::before { content: \"\\f1c3\"; }\n.bi-box-arrow-up-left::before { content: \"\\f1c4\"; }\n.bi-box-arrow-up-right::before { content: \"\\f1c5\"; }\n.bi-box-arrow-up::before { content: \"\\f1c6\"; }\n.bi-box-seam::before { content: \"\\f1c7\"; }\n.bi-box::before { content: \"\\f1c8\"; }\n.bi-braces::before { content: \"\\f1c9\"; }\n.bi-bricks::before { content: \"\\f1ca\"; }\n.bi-briefcase-fill::before { content: \"\\f1cb\"; }\n.bi-briefcase::before { content: \"\\f1cc\"; }\n.bi-brightness-alt-high-fill::before { content: \"\\f1cd\"; }\n.bi-brightness-alt-high::before { content: \"\\f1ce\"; }\n.bi-brightness-alt-low-fill::before { content: \"\\f1cf\"; }\n.bi-brightness-alt-low::before { content: \"\\f1d0\"; }\n.bi-brightness-high-fill::before { content: \"\\f1d1\"; }\n.bi-brightness-high::before { content: \"\\f1d2\"; }\n.bi-brightness-low-fill::before { content: \"\\f1d3\"; }\n.bi-brightness-low::before { content: \"\\f1d4\"; }\n.bi-broadcast-pin::before { content: \"\\f1d5\"; }\n.bi-broadcast::before { content: \"\\f1d6\"; }\n.bi-brush-fill::before { content: \"\\f1d7\"; }\n.bi-brush::before { content: \"\\f1d8\"; }\n.bi-bucket-fill::before { content: \"\\f1d9\"; }\n.bi-bucket::before { content: \"\\f1da\"; }\n.bi-bug-fill::before { content: \"\\f1db\"; }\n.bi-bug::before { content: \"\\f1dc\"; }\n.bi-building::before { content: \"\\f1dd\"; }\n.bi-bullseye::before { content: \"\\f1de\"; }\n.bi-calculator-fill::before { content: \"\\f1df\"; }\n.bi-calculator::before { content: \"\\f1e0\"; }\n.bi-calendar-check-fill::before { content: \"\\f1e1\"; }\n.bi-calendar-check::before { content: \"\\f1e2\"; }\n.bi-calendar-date-fill::before { content: \"\\f1e3\"; }\n.bi-calendar-date::before { content: \"\\f1e4\"; }\n.bi-calendar-day-fill::before { content: \"\\f1e5\"; }\n.bi-calendar-day::before { content: \"\\f1e6\"; }\n.bi-calendar-event-fill::before { content: \"\\f1e7\"; }\n.bi-calendar-event::before { content: \"\\f1e8\"; }\n.bi-calendar-fill::before { content: \"\\f1e9\"; }\n.bi-calendar-minus-fill::before { content: \"\\f1ea\"; }\n.bi-calendar-minus::before { content: \"\\f1eb\"; }\n.bi-calendar-month-fill::before { content: \"\\f1ec\"; }\n.bi-calendar-month::before { content: \"\\f1ed\"; }\n.bi-calendar-plus-fill::before { content: \"\\f1ee\"; }\n.bi-calendar-plus::before { content: \"\\f1ef\"; }\n.bi-calendar-range-fill::before { content: \"\\f1f0\"; }\n.bi-calendar-range::before { content: \"\\f1f1\"; }\n.bi-calendar-week-fill::before { content: \"\\f1f2\"; }\n.bi-calendar-week::before { content: \"\\f1f3\"; }\n.bi-calendar-x-fill::before { content: \"\\f1f4\"; }\n.bi-calendar-x::before { content: \"\\f1f5\"; }\n.bi-calendar::before { content: \"\\f1f6\"; }\n.bi-calendar2-check-fill::before { content: \"\\f1f7\"; }\n.bi-calendar2-check::before { content: \"\\f1f8\"; }\n.bi-calendar2-date-fill::before { content: \"\\f1f9\"; }\n.bi-calendar2-date::before { content: \"\\f1fa\"; }\n.bi-calendar2-day-fill::before { content: \"\\f1fb\"; }\n.bi-calendar2-day::before { content: \"\\f1fc\"; }\n.bi-calendar2-event-fill::before { content: \"\\f1fd\"; }\n.bi-calendar2-event::before { content: \"\\f1fe\"; }\n.bi-calendar2-fill::before { content: \"\\f1ff\"; }\n.bi-calendar2-minus-fill::before { content: \"\\f200\"; }\n.bi-calendar2-minus::before { content: \"\\f201\"; }\n.bi-calendar2-month-fill::before { content: \"\\f202\"; }\n.bi-calendar2-month::before { content: \"\\f203\"; }\n.bi-calendar2-plus-fill::before { content: \"\\f204\"; }\n.bi-calendar2-plus::before { content: \"\\f205\"; }\n.bi-calendar2-range-fill::before { content: \"\\f206\"; }\n.bi-calendar2-range::before { content: \"\\f207\"; }\n.bi-calendar2-week-fill::before { content: \"\\f208\"; }\n.bi-calendar2-week::before { content: \"\\f209\"; }\n.bi-calendar2-x-fill::before { content: \"\\f20a\"; }\n.bi-calendar2-x::before { content: \"\\f20b\"; }\n.bi-calendar2::before { content: \"\\f20c\"; }\n.bi-calendar3-event-fill::before { content: \"\\f20d\"; }\n.bi-calendar3-event::before { content: \"\\f20e\"; }\n.bi-calendar3-fill::before { content: \"\\f20f\"; }\n.bi-calendar3-range-fill::before { content: \"\\f210\"; }\n.bi-calendar3-range::before { content: \"\\f211\"; }\n.bi-calendar3-week-fill::before { content: \"\\f212\"; }\n.bi-calendar3-week::before { content: \"\\f213\"; }\n.bi-calendar3::before { content: \"\\f214\"; }\n.bi-calendar4-event::before { content: \"\\f215\"; }\n.bi-calendar4-range::before { content: \"\\f216\"; }\n.bi-calendar4-week::before { content: \"\\f217\"; }\n.bi-calendar4::before { content: \"\\f218\"; }\n.bi-camera-fill::before { content: \"\\f219\"; }\n.bi-camera-reels-fill::before { content: \"\\f21a\"; }\n.bi-camera-reels::before { content: \"\\f21b\"; }\n.bi-camera-video-fill::before { content: \"\\f21c\"; }\n.bi-camera-video-off-fill::before { content: \"\\f21d\"; }\n.bi-camera-video-off::before { content: \"\\f21e\"; }\n.bi-camera-video::before { content: \"\\f21f\"; }\n.bi-camera::before { content: \"\\f220\"; }\n.bi-camera2::before { content: \"\\f221\"; }\n.bi-capslock-fill::before { content: \"\\f222\"; }\n.bi-capslock::before { content: \"\\f223\"; }\n.bi-card-checklist::before { content: \"\\f224\"; }\n.bi-card-heading::before { content: \"\\f225\"; }\n.bi-card-image::before { content: \"\\f226\"; }\n.bi-card-list::before { content: \"\\f227\"; }\n.bi-card-text::before { content: \"\\f228\"; }\n.bi-caret-down-fill::before { content: \"\\f229\"; }\n.bi-caret-down-square-fill::before { content: \"\\f22a\"; }\n.bi-caret-down-square::before { content: \"\\f22b\"; }\n.bi-caret-down::before { content: \"\\f22c\"; }\n.bi-caret-left-fill::before { content: \"\\f22d\"; }\n.bi-caret-left-square-fill::before { content: \"\\f22e\"; }\n.bi-caret-left-square::before { content: \"\\f22f\"; }\n.bi-caret-left::before { content: \"\\f230\"; }\n.bi-caret-right-fill::before { content: \"\\f231\"; }\n.bi-caret-right-square-fill::before { content: \"\\f232\"; }\n.bi-caret-right-square::before { content: \"\\f233\"; }\n.bi-caret-right::before { content: \"\\f234\"; }\n.bi-caret-up-fill::before { content: \"\\f235\"; }\n.bi-caret-up-square-fill::before { content: \"\\f236\"; }\n.bi-caret-up-square::before { content: \"\\f237\"; }\n.bi-caret-up::before { content: \"\\f238\"; }\n.bi-cart-check-fill::before { content: \"\\f239\"; }\n.bi-cart-check::before { content: \"\\f23a\"; }\n.bi-cart-dash-fill::before { content: \"\\f23b\"; }\n.bi-cart-dash::before { content: \"\\f23c\"; }\n.bi-cart-fill::before { content: \"\\f23d\"; }\n.bi-cart-plus-fill::before { content: \"\\f23e\"; }\n.bi-cart-plus::before { content: \"\\f23f\"; }\n.bi-cart-x-fill::before { content: \"\\f240\"; }\n.bi-cart-x::before { content: \"\\f241\"; }\n.bi-cart::before { content: \"\\f242\"; }\n.bi-cart2::before { content: \"\\f243\"; }\n.bi-cart3::before { content: \"\\f244\"; }\n.bi-cart4::before { content: \"\\f245\"; }\n.bi-cash-stack::before { content: \"\\f246\"; }\n.bi-cash::before { content: \"\\f247\"; }\n.bi-cast::before { content: \"\\f248\"; }\n.bi-chat-dots-fill::before { content: \"\\f249\"; }\n.bi-chat-dots::before { content: \"\\f24a\"; }\n.bi-chat-fill::before { content: \"\\f24b\"; }\n.bi-chat-left-dots-fill::before { content: \"\\f24c\"; }\n.bi-chat-left-dots::before { content: \"\\f24d\"; }\n.bi-chat-left-fill::before { content: \"\\f24e\"; }\n.bi-chat-left-quote-fill::before { content: \"\\f24f\"; }\n.bi-chat-left-quote::before { content: \"\\f250\"; }\n.bi-chat-left-text-fill::before { content: \"\\f251\"; }\n.bi-chat-left-text::before { content: \"\\f252\"; }\n.bi-chat-left::before { content: \"\\f253\"; }\n.bi-chat-quote-fill::before { content: \"\\f254\"; }\n.bi-chat-quote::before { content: \"\\f255\"; }\n.bi-chat-right-dots-fill::before { content: \"\\f256\"; }\n.bi-chat-right-dots::before { content: \"\\f257\"; }\n.bi-chat-right-fill::before { content: \"\\f258\"; }\n.bi-chat-right-quote-fill::before { content: \"\\f259\"; }\n.bi-chat-right-quote::before { content: \"\\f25a\"; }\n.bi-chat-right-text-fill::before { content: \"\\f25b\"; }\n.bi-chat-right-text::before { content: \"\\f25c\"; }\n.bi-chat-right::before { content: \"\\f25d\"; }\n.bi-chat-square-dots-fill::before { content: \"\\f25e\"; }\n.bi-chat-square-dots::before { content: \"\\f25f\"; }\n.bi-chat-square-fill::before { content: \"\\f260\"; }\n.bi-chat-square-quote-fill::before { content: \"\\f261\"; }\n.bi-chat-square-quote::before { content: \"\\f262\"; }\n.bi-chat-square-text-fill::before { content: \"\\f263\"; }\n.bi-chat-square-text::before { content: \"\\f264\"; }\n.bi-chat-square::before { content: \"\\f265\"; }\n.bi-chat-text-fill::before { content: \"\\f266\"; }\n.bi-chat-text::before { content: \"\\f267\"; }\n.bi-chat::before { content: \"\\f268\"; }\n.bi-check-all::before { content: \"\\f269\"; }\n.bi-check-circle-fill::before { content: \"\\f26a\"; }\n.bi-check-circle::before { content: \"\\f26b\"; }\n.bi-check-square-fill::before { content: \"\\f26c\"; }\n.bi-check-square::before { content: \"\\f26d\"; }\n.bi-check::before { content: \"\\f26e\"; }\n.bi-check2-all::before { content: \"\\f26f\"; }\n.bi-check2-circle::before { content: \"\\f270\"; }\n.bi-check2-square::before { content: \"\\f271\"; }\n.bi-check2::before { content: \"\\f272\"; }\n.bi-chevron-bar-contract::before { content: \"\\f273\"; }\n.bi-chevron-bar-down::before { content: \"\\f274\"; }\n.bi-chevron-bar-expand::before { content: \"\\f275\"; }\n.bi-chevron-bar-left::before { content: \"\\f276\"; }\n.bi-chevron-bar-right::before { content: \"\\f277\"; }\n.bi-chevron-bar-up::before { content: \"\\f278\"; }\n.bi-chevron-compact-down::before { content: \"\\f279\"; }\n.bi-chevron-compact-left::before { content: \"\\f27a\"; }\n.bi-chevron-compact-right::before { content: \"\\f27b\"; }\n.bi-chevron-compact-up::before { content: \"\\f27c\"; }\n.bi-chevron-contract::before { content: \"\\f27d\"; }\n.bi-chevron-double-down::before { content: \"\\f27e\"; }\n.bi-chevron-double-left::before { content: \"\\f27f\"; }\n.bi-chevron-double-right::before { content: \"\\f280\"; }\n.bi-chevron-double-up::before { content: \"\\f281\"; }\n.bi-chevron-down::before { content: \"\\f282\"; }\n.bi-chevron-expand::before { content: \"\\f283\"; }\n.bi-chevron-left::before { content: \"\\f284\"; }\n.bi-chevron-right::before { content: \"\\f285\"; }\n.bi-chevron-up::before { content: \"\\f286\"; }\n.bi-circle-fill::before { content: \"\\f287\"; }\n.bi-circle-half::before { content: \"\\f288\"; }\n.bi-circle-square::before { content: \"\\f289\"; }\n.bi-circle::before { content: \"\\f28a\"; }\n.bi-clipboard-check::before { content: \"\\f28b\"; }\n.bi-clipboard-data::before { content: \"\\f28c\"; }\n.bi-clipboard-minus::before { content: \"\\f28d\"; }\n.bi-clipboard-plus::before { content: \"\\f28e\"; }\n.bi-clipboard-x::before { content: \"\\f28f\"; }\n.bi-clipboard::before { content: \"\\f290\"; }\n.bi-clock-fill::before { content: \"\\f291\"; }\n.bi-clock-history::before { content: \"\\f292\"; }\n.bi-clock::before { content: \"\\f293\"; }\n.bi-cloud-arrow-down-fill::before { content: \"\\f294\"; }\n.bi-cloud-arrow-down::before { content: \"\\f295\"; }\n.bi-cloud-arrow-up-fill::before { content: \"\\f296\"; }\n.bi-cloud-arrow-up::before { content: \"\\f297\"; }\n.bi-cloud-check-fill::before { content: \"\\f298\"; }\n.bi-cloud-check::before { content: \"\\f299\"; }\n.bi-cloud-download-fill::before { content: \"\\f29a\"; }\n.bi-cloud-download::before { content: \"\\f29b\"; }\n.bi-cloud-drizzle-fill::before { content: \"\\f29c\"; }\n.bi-cloud-drizzle::before { content: \"\\f29d\"; }\n.bi-cloud-fill::before { content: \"\\f29e\"; }\n.bi-cloud-fog-fill::before { content: \"\\f29f\"; }\n.bi-cloud-fog::before { content: \"\\f2a0\"; }\n.bi-cloud-fog2-fill::before { content: \"\\f2a1\"; }\n.bi-cloud-fog2::before { content: \"\\f2a2\"; }\n.bi-cloud-hail-fill::before { content: \"\\f2a3\"; }\n.bi-cloud-hail::before { content: \"\\f2a4\"; }\n.bi-cloud-haze-fill::before { content: \"\\f2a6\"; }\n.bi-cloud-haze::before { content: \"\\f2a7\"; }\n.bi-cloud-haze2-fill::before { content: \"\\f2a8\"; }\n.bi-cloud-lightning-fill::before { content: \"\\f2a9\"; }\n.bi-cloud-lightning-rain-fill::before { content: \"\\f2aa\"; }\n.bi-cloud-lightning-rain::before { content: \"\\f2ab\"; }\n.bi-cloud-lightning::before { content: \"\\f2ac\"; }\n.bi-cloud-minus-fill::before { content: \"\\f2ad\"; }\n.bi-cloud-minus::before { content: \"\\f2ae\"; }\n.bi-cloud-moon-fill::before { content: \"\\f2af\"; }\n.bi-cloud-moon::before { content: \"\\f2b0\"; }\n.bi-cloud-plus-fill::before { content: \"\\f2b1\"; }\n.bi-cloud-plus::before { content: \"\\f2b2\"; }\n.bi-cloud-rain-fill::before { content: \"\\f2b3\"; }\n.bi-cloud-rain-heavy-fill::before { content: \"\\f2b4\"; }\n.bi-cloud-rain-heavy::before { content: \"\\f2b5\"; }\n.bi-cloud-rain::before { content: \"\\f2b6\"; }\n.bi-cloud-slash-fill::before { content: \"\\f2b7\"; }\n.bi-cloud-slash::before { content: \"\\f2b8\"; }\n.bi-cloud-sleet-fill::before { content: \"\\f2b9\"; }\n.bi-cloud-sleet::before { content: \"\\f2ba\"; }\n.bi-cloud-snow-fill::before { content: \"\\f2bb\"; }\n.bi-cloud-snow::before { content: \"\\f2bc\"; }\n.bi-cloud-sun-fill::before { content: \"\\f2bd\"; }\n.bi-cloud-sun::before { content: \"\\f2be\"; }\n.bi-cloud-upload-fill::before { content: \"\\f2bf\"; }\n.bi-cloud-upload::before { content: \"\\f2c0\"; }\n.bi-cloud::before { content: \"\\f2c1\"; }\n.bi-clouds-fill::before { content: \"\\f2c2\"; }\n.bi-clouds::before { content: \"\\f2c3\"; }\n.bi-cloudy-fill::before { content: \"\\f2c4\"; }\n.bi-cloudy::before { content: \"\\f2c5\"; }\n.bi-code-slash::before { content: \"\\f2c6\"; }\n.bi-code-square::before { content: \"\\f2c7\"; }\n.bi-code::before { content: \"\\f2c8\"; }\n.bi-collection-fill::before { content: \"\\f2c9\"; }\n.bi-collection-play-fill::before { content: \"\\f2ca\"; }\n.bi-collection-play::before { content: \"\\f2cb\"; }\n.bi-collection::before { content: \"\\f2cc\"; }\n.bi-columns-gap::before { content: \"\\f2cd\"; }\n.bi-columns::before { content: \"\\f2ce\"; }\n.bi-command::before { content: \"\\f2cf\"; }\n.bi-compass-fill::before { content: \"\\f2d0\"; }\n.bi-compass::before { content: \"\\f2d1\"; }\n.bi-cone-striped::before { content: \"\\f2d2\"; }\n.bi-cone::before { content: \"\\f2d3\"; }\n.bi-controller::before { content: \"\\f2d4\"; }\n.bi-cpu-fill::before { content: \"\\f2d5\"; }\n.bi-cpu::before { content: \"\\f2d6\"; }\n.bi-credit-card-2-back-fill::before { content: \"\\f2d7\"; }\n.bi-credit-card-2-back::before { content: \"\\f2d8\"; }\n.bi-credit-card-2-front-fill::before { content: \"\\f2d9\"; }\n.bi-credit-card-2-front::before { content: \"\\f2da\"; }\n.bi-credit-card-fill::before { content: \"\\f2db\"; }\n.bi-credit-card::before { content: \"\\f2dc\"; }\n.bi-crop::before { content: \"\\f2dd\"; }\n.bi-cup-fill::before { content: \"\\f2de\"; }\n.bi-cup-straw::before { content: \"\\f2df\"; }\n.bi-cup::before { content: \"\\f2e0\"; }\n.bi-cursor-fill::before { content: \"\\f2e1\"; }\n.bi-cursor-text::before { content: \"\\f2e2\"; }\n.bi-cursor::before { content: \"\\f2e3\"; }\n.bi-dash-circle-dotted::before { content: \"\\f2e4\"; }\n.bi-dash-circle-fill::before { content: \"\\f2e5\"; }\n.bi-dash-circle::before { content: \"\\f2e6\"; }\n.bi-dash-square-dotted::before { content: \"\\f2e7\"; }\n.bi-dash-square-fill::before { content: \"\\f2e8\"; }\n.bi-dash-square::before { content: \"\\f2e9\"; }\n.bi-dash::before { content: \"\\f2ea\"; }\n.bi-diagram-2-fill::before { content: \"\\f2eb\"; }\n.bi-diagram-2::before { content: \"\\f2ec\"; }\n.bi-diagram-3-fill::before { content: \"\\f2ed\"; }\n.bi-diagram-3::before { content: \"\\f2ee\"; }\n.bi-diamond-fill::before { content: \"\\f2ef\"; }\n.bi-diamond-half::before { content: \"\\f2f0\"; }\n.bi-diamond::before { content: \"\\f2f1\"; }\n.bi-dice-1-fill::before { content: \"\\f2f2\"; }\n.bi-dice-1::before { content: \"\\f2f3\"; }\n.bi-dice-2-fill::before { content: \"\\f2f4\"; }\n.bi-dice-2::before { content: \"\\f2f5\"; }\n.bi-dice-3-fill::before { content: \"\\f2f6\"; }\n.bi-dice-3::before { content: \"\\f2f7\"; }\n.bi-dice-4-fill::before { content: \"\\f2f8\"; }\n.bi-dice-4::before { content: \"\\f2f9\"; }\n.bi-dice-5-fill::before { content: \"\\f2fa\"; }\n.bi-dice-5::before { content: \"\\f2fb\"; }\n.bi-dice-6-fill::before { content: \"\\f2fc\"; }\n.bi-dice-6::before { content: \"\\f2fd\"; }\n.bi-disc-fill::before { content: \"\\f2fe\"; }\n.bi-disc::before { content: \"\\f2ff\"; }\n.bi-discord::before { content: \"\\f300\"; }\n.bi-display-fill::before { content: \"\\f301\"; }\n.bi-display::before { content: \"\\f302\"; }\n.bi-distribute-horizontal::before { content: \"\\f303\"; }\n.bi-distribute-vertical::before { content: \"\\f304\"; }\n.bi-door-closed-fill::before { content: \"\\f305\"; }\n.bi-door-closed::before { content: \"\\f306\"; }\n.bi-door-open-fill::before { content: \"\\f307\"; }\n.bi-door-open::before { content: \"\\f308\"; }\n.bi-dot::before { content: \"\\f309\"; }\n.bi-download::before { content: \"\\f30a\"; }\n.bi-droplet-fill::before { content: \"\\f30b\"; }\n.bi-droplet-half::before { content: \"\\f30c\"; }\n.bi-droplet::before { content: \"\\f30d\"; }\n.bi-earbuds::before { content: \"\\f30e\"; }\n.bi-easel-fill::before { content: \"\\f30f\"; }\n.bi-easel::before { content: \"\\f310\"; }\n.bi-egg-fill::before { content: \"\\f311\"; }\n.bi-egg-fried::before { content: \"\\f312\"; }\n.bi-egg::before { content: \"\\f313\"; }\n.bi-eject-fill::before { content: \"\\f314\"; }\n.bi-eject::before { content: \"\\f315\"; }\n.bi-emoji-angry-fill::before { content: \"\\f316\"; }\n.bi-emoji-angry::before { content: \"\\f317\"; }\n.bi-emoji-dizzy-fill::before { content: \"\\f318\"; }\n.bi-emoji-dizzy::before { content: \"\\f319\"; }\n.bi-emoji-expressionless-fill::before { content: \"\\f31a\"; }\n.bi-emoji-expressionless::before { content: \"\\f31b\"; }\n.bi-emoji-frown-fill::before { content: \"\\f31c\"; }\n.bi-emoji-frown::before { content: \"\\f31d\"; }\n.bi-emoji-heart-eyes-fill::before { content: \"\\f31e\"; }\n.bi-emoji-heart-eyes::before { content: \"\\f31f\"; }\n.bi-emoji-laughing-fill::before { content: \"\\f320\"; }\n.bi-emoji-laughing::before { content: \"\\f321\"; }\n.bi-emoji-neutral-fill::before { content: \"\\f322\"; }\n.bi-emoji-neutral::before { content: \"\\f323\"; }\n.bi-emoji-smile-fill::before { content: \"\\f324\"; }\n.bi-emoji-smile-upside-down-fill::before { content: \"\\f325\"; }\n.bi-emoji-smile-upside-down::before { content: \"\\f326\"; }\n.bi-emoji-smile::before { content: \"\\f327\"; }\n.bi-emoji-sunglasses-fill::before { content: \"\\f328\"; }\n.bi-emoji-sunglasses::before { content: \"\\f329\"; }\n.bi-emoji-wink-fill::before { content: \"\\f32a\"; }\n.bi-emoji-wink::before { content: \"\\f32b\"; }\n.bi-envelope-fill::before { content: \"\\f32c\"; }\n.bi-envelope-open-fill::before { content: \"\\f32d\"; }\n.bi-envelope-open::before { content: \"\\f32e\"; }\n.bi-envelope::before { content: \"\\f32f\"; }\n.bi-eraser-fill::before { content: \"\\f330\"; }\n.bi-eraser::before { content: \"\\f331\"; }\n.bi-exclamation-circle-fill::before { content: \"\\f332\"; }\n.bi-exclamation-circle::before { content: \"\\f333\"; }\n.bi-exclamation-diamond-fill::before { content: \"\\f334\"; }\n.bi-exclamation-diamond::before { content: \"\\f335\"; }\n.bi-exclamation-octagon-fill::before { content: \"\\f336\"; }\n.bi-exclamation-octagon::before { content: \"\\f337\"; }\n.bi-exclamation-square-fill::before { content: \"\\f338\"; }\n.bi-exclamation-square::before { content: \"\\f339\"; }\n.bi-exclamation-triangle-fill::before { content: \"\\f33a\"; }\n.bi-exclamation-triangle::before { content: \"\\f33b\"; }\n.bi-exclamation::before { content: \"\\f33c\"; }\n.bi-exclude::before { content: \"\\f33d\"; }\n.bi-eye-fill::before { content: \"\\f33e\"; }\n.bi-eye-slash-fill::before { content: \"\\f33f\"; }\n.bi-eye-slash::before { content: \"\\f340\"; }\n.bi-eye::before { content: \"\\f341\"; }\n.bi-eyedropper::before { content: \"\\f342\"; }\n.bi-eyeglasses::before { content: \"\\f343\"; }\n.bi-facebook::before { content: \"\\f344\"; }\n.bi-file-arrow-down-fill::before { content: \"\\f345\"; }\n.bi-file-arrow-down::before { content: \"\\f346\"; }\n.bi-file-arrow-up-fill::before { content: \"\\f347\"; }\n.bi-file-arrow-up::before { content: \"\\f348\"; }\n.bi-file-bar-graph-fill::before { content: \"\\f349\"; }\n.bi-file-bar-graph::before { content: \"\\f34a\"; }\n.bi-file-binary-fill::before { content: \"\\f34b\"; }\n.bi-file-binary::before { content: \"\\f34c\"; }\n.bi-file-break-fill::before { content: \"\\f34d\"; }\n.bi-file-break::before { content: \"\\f34e\"; }\n.bi-file-check-fill::before { content: \"\\f34f\"; }\n.bi-file-check::before { content: \"\\f350\"; }\n.bi-file-code-fill::before { content: \"\\f351\"; }\n.bi-file-code::before { content: \"\\f352\"; }\n.bi-file-diff-fill::before { content: \"\\f353\"; }\n.bi-file-diff::before { content: \"\\f354\"; }\n.bi-file-earmark-arrow-down-fill::before { content: \"\\f355\"; }\n.bi-file-earmark-arrow-down::before { content: \"\\f356\"; }\n.bi-file-earmark-arrow-up-fill::before { content: \"\\f357\"; }\n.bi-file-earmark-arrow-up::before { content: \"\\f358\"; }\n.bi-file-earmark-bar-graph-fill::before { content: \"\\f359\"; }\n.bi-file-earmark-bar-graph::before { content: \"\\f35a\"; }\n.bi-file-earmark-binary-fill::before { content: \"\\f35b\"; }\n.bi-file-earmark-binary::before { content: \"\\f35c\"; }\n.bi-file-earmark-break-fill::before { content: \"\\f35d\"; }\n.bi-file-earmark-break::before { content: \"\\f35e\"; }\n.bi-file-earmark-check-fill::before { content: \"\\f35f\"; }\n.bi-file-earmark-check::before { content: \"\\f360\"; }\n.bi-file-earmark-code-fill::before { content: \"\\f361\"; }\n.bi-file-earmark-code::before { content: \"\\f362\"; }\n.bi-file-earmark-diff-fill::before { content: \"\\f363\"; }\n.bi-file-earmark-diff::before { content: \"\\f364\"; }\n.bi-file-earmark-easel-fill::before { content: \"\\f365\"; }\n.bi-file-earmark-easel::before { content: \"\\f366\"; }\n.bi-file-earmark-excel-fill::before { content: \"\\f367\"; }\n.bi-file-earmark-excel::before { content: \"\\f368\"; }\n.bi-file-earmark-fill::before { content: \"\\f369\"; }\n.bi-file-earmark-font-fill::before { content: \"\\f36a\"; }\n.bi-file-earmark-font::before { content: \"\\f36b\"; }\n.bi-file-earmark-image-fill::before { content: \"\\f36c\"; }\n.bi-file-earmark-image::before { content: \"\\f36d\"; }\n.bi-file-earmark-lock-fill::before { content: \"\\f36e\"; }\n.bi-file-earmark-lock::before { content: \"\\f36f\"; }\n.bi-file-earmark-lock2-fill::before { content: \"\\f370\"; }\n.bi-file-earmark-lock2::before { content: \"\\f371\"; }\n.bi-file-earmark-medical-fill::before { content: \"\\f372\"; }\n.bi-file-earmark-medical::before { content: \"\\f373\"; }\n.bi-file-earmark-minus-fill::before { content: \"\\f374\"; }\n.bi-file-earmark-minus::before { content: \"\\f375\"; }\n.bi-file-earmark-music-fill::before { content: \"\\f376\"; }\n.bi-file-earmark-music::before { content: \"\\f377\"; }\n.bi-file-earmark-person-fill::before { content: \"\\f378\"; }\n.bi-file-earmark-person::before { content: \"\\f379\"; }\n.bi-file-earmark-play-fill::before { content: \"\\f37a\"; }\n.bi-file-earmark-play::before { content: \"\\f37b\"; }\n.bi-file-earmark-plus-fill::before { content: \"\\f37c\"; }\n.bi-file-earmark-plus::before { content: \"\\f37d\"; }\n.bi-file-earmark-post-fill::before { content: \"\\f37e\"; }\n.bi-file-earmark-post::before { content: \"\\f37f\"; }\n.bi-file-earmark-ppt-fill::before { content: \"\\f380\"; }\n.bi-file-earmark-ppt::before { content: \"\\f381\"; }\n.bi-file-earmark-richtext-fill::before { content: \"\\f382\"; }\n.bi-file-earmark-richtext::before { content: \"\\f383\"; }\n.bi-file-earmark-ruled-fill::before { content: \"\\f384\"; }\n.bi-file-earmark-ruled::before { content: \"\\f385\"; }\n.bi-file-earmark-slides-fill::before { content: \"\\f386\"; }\n.bi-file-earmark-slides::before { content: \"\\f387\"; }\n.bi-file-earmark-spreadsheet-fill::before { content: \"\\f388\"; }\n.bi-file-earmark-spreadsheet::before { content: \"\\f389\"; }\n.bi-file-earmark-text-fill::before { content: \"\\f38a\"; }\n.bi-file-earmark-text::before { content: \"\\f38b\"; }\n.bi-file-earmark-word-fill::before { content: \"\\f38c\"; }\n.bi-file-earmark-word::before { content: \"\\f38d\"; }\n.bi-file-earmark-x-fill::before { content: \"\\f38e\"; }\n.bi-file-earmark-x::before { content: \"\\f38f\"; }\n.bi-file-earmark-zip-fill::before { content: \"\\f390\"; }\n.bi-file-earmark-zip::before { content: \"\\f391\"; }\n.bi-file-earmark::before { content: \"\\f392\"; }\n.bi-file-easel-fill::before { content: \"\\f393\"; }\n.bi-file-easel::before { content: \"\\f394\"; }\n.bi-file-excel-fill::before { content: \"\\f395\"; }\n.bi-file-excel::before { content: \"\\f396\"; }\n.bi-file-fill::before { content: \"\\f397\"; }\n.bi-file-font-fill::before { content: \"\\f398\"; }\n.bi-file-font::before { content: \"\\f399\"; }\n.bi-file-image-fill::before { content: \"\\f39a\"; }\n.bi-file-image::before { content: \"\\f39b\"; }\n.bi-file-lock-fill::before { content: \"\\f39c\"; }\n.bi-file-lock::before { content: \"\\f39d\"; }\n.bi-file-lock2-fill::before { content: \"\\f39e\"; }\n.bi-file-lock2::before { content: \"\\f39f\"; }\n.bi-file-medical-fill::before { content: \"\\f3a0\"; }\n.bi-file-medical::before { content: \"\\f3a1\"; }\n.bi-file-minus-fill::before { content: \"\\f3a2\"; }\n.bi-file-minus::before { content: \"\\f3a3\"; }\n.bi-file-music-fill::before { content: \"\\f3a4\"; }\n.bi-file-music::before { content: \"\\f3a5\"; }\n.bi-file-person-fill::before { content: \"\\f3a6\"; }\n.bi-file-person::before { content: \"\\f3a7\"; }\n.bi-file-play-fill::before { content: \"\\f3a8\"; }\n.bi-file-play::before { content: \"\\f3a9\"; }\n.bi-file-plus-fill::before { content: \"\\f3aa\"; }\n.bi-file-plus::before { content: \"\\f3ab\"; }\n.bi-file-post-fill::before { content: \"\\f3ac\"; }\n.bi-file-post::before { content: \"\\f3ad\"; }\n.bi-file-ppt-fill::before { content: \"\\f3ae\"; }\n.bi-file-ppt::before { content: \"\\f3af\"; }\n.bi-file-richtext-fill::before { content: \"\\f3b0\"; }\n.bi-file-richtext::before { content: \"\\f3b1\"; }\n.bi-file-ruled-fill::before { content: \"\\f3b2\"; }\n.bi-file-ruled::before { content: \"\\f3b3\"; }\n.bi-file-slides-fill::before { content: \"\\f3b4\"; }\n.bi-file-slides::before { content: \"\\f3b5\"; }\n.bi-file-spreadsheet-fill::before { content: \"\\f3b6\"; }\n.bi-file-spreadsheet::before { content: \"\\f3b7\"; }\n.bi-file-text-fill::before { content: \"\\f3b8\"; }\n.bi-file-text::before { content: \"\\f3b9\"; }\n.bi-file-word-fill::before { content: \"\\f3ba\"; }\n.bi-file-word::before { content: \"\\f3bb\"; }\n.bi-file-x-fill::before { content: \"\\f3bc\"; }\n.bi-file-x::before { content: \"\\f3bd\"; }\n.bi-file-zip-fill::before { content: \"\\f3be\"; }\n.bi-file-zip::before { content: \"\\f3bf\"; }\n.bi-file::before { content: \"\\f3c0\"; }\n.bi-files-alt::before { content: \"\\f3c1\"; }\n.bi-files::before { content: \"\\f3c2\"; }\n.bi-film::before { content: \"\\f3c3\"; }\n.bi-filter-circle-fill::before { content: \"\\f3c4\"; }\n.bi-filter-circle::before { content: \"\\f3c5\"; }\n.bi-filter-left::before { content: \"\\f3c6\"; }\n.bi-filter-right::before { content: \"\\f3c7\"; }\n.bi-filter-square-fill::before { content: \"\\f3c8\"; }\n.bi-filter-square::before { content: \"\\f3c9\"; }\n.bi-filter::before { content: \"\\f3ca\"; }\n.bi-flag-fill::before { content: \"\\f3cb\"; }\n.bi-flag::before { content: \"\\f3cc\"; }\n.bi-flower1::before { content: \"\\f3cd\"; }\n.bi-flower2::before { content: \"\\f3ce\"; }\n.bi-flower3::before { content: \"\\f3cf\"; }\n.bi-folder-check::before { content: \"\\f3d0\"; }\n.bi-folder-fill::before { content: \"\\f3d1\"; }\n.bi-folder-minus::before { content: \"\\f3d2\"; }\n.bi-folder-plus::before { content: \"\\f3d3\"; }\n.bi-folder-symlink-fill::before { content: \"\\f3d4\"; }\n.bi-folder-symlink::before { content: \"\\f3d5\"; }\n.bi-folder-x::before { content: \"\\f3d6\"; }\n.bi-folder::before { content: \"\\f3d7\"; }\n.bi-folder2-open::before { content: \"\\f3d8\"; }\n.bi-folder2::before { content: \"\\f3d9\"; }\n.bi-fonts::before { content: \"\\f3da\"; }\n.bi-forward-fill::before { content: \"\\f3db\"; }\n.bi-forward::before { content: \"\\f3dc\"; }\n.bi-front::before { content: \"\\f3dd\"; }\n.bi-fullscreen-exit::before { content: \"\\f3de\"; }\n.bi-fullscreen::before { content: \"\\f3df\"; }\n.bi-funnel-fill::before { content: \"\\f3e0\"; }\n.bi-funnel::before { content: \"\\f3e1\"; }\n.bi-gear-fill::before { content: \"\\f3e2\"; }\n.bi-gear-wide-connected::before { content: \"\\f3e3\"; }\n.bi-gear-wide::before { content: \"\\f3e4\"; }\n.bi-gear::before { content: \"\\f3e5\"; }\n.bi-gem::before { content: \"\\f3e6\"; }\n.bi-geo-alt-fill::before { content: \"\\f3e7\"; }\n.bi-geo-alt::before { content: \"\\f3e8\"; }\n.bi-geo-fill::before { content: \"\\f3e9\"; }\n.bi-geo::before { content: \"\\f3ea\"; }\n.bi-gift-fill::before { content: \"\\f3eb\"; }\n.bi-gift::before { content: \"\\f3ec\"; }\n.bi-github::before { content: \"\\f3ed\"; }\n.bi-globe::before { content: \"\\f3ee\"; }\n.bi-globe2::before { content: \"\\f3ef\"; }\n.bi-google::before { content: \"\\f3f0\"; }\n.bi-graph-down::before { content: \"\\f3f1\"; }\n.bi-graph-up::before { content: \"\\f3f2\"; }\n.bi-grid-1x2-fill::before { content: \"\\f3f3\"; }\n.bi-grid-1x2::before { content: \"\\f3f4\"; }\n.bi-grid-3x2-gap-fill::before { content: \"\\f3f5\"; }\n.bi-grid-3x2-gap::before { content: \"\\f3f6\"; }\n.bi-grid-3x2::before { content: \"\\f3f7\"; }\n.bi-grid-3x3-gap-fill::before { content: \"\\f3f8\"; }\n.bi-grid-3x3-gap::before { content: \"\\f3f9\"; }\n.bi-grid-3x3::before { content: \"\\f3fa\"; }\n.bi-grid-fill::before { content: \"\\f3fb\"; }\n.bi-grid::before { content: \"\\f3fc\"; }\n.bi-grip-horizontal::before { content: \"\\f3fd\"; }\n.bi-grip-vertical::before { content: \"\\f3fe\"; }\n.bi-hammer::before { content: \"\\f3ff\"; }\n.bi-hand-index-fill::before { content: \"\\f400\"; }\n.bi-hand-index-thumb-fill::before { content: \"\\f401\"; }\n.bi-hand-index-thumb::before { content: \"\\f402\"; }\n.bi-hand-index::before { content: \"\\f403\"; }\n.bi-hand-thumbs-down-fill::before { content: \"\\f404\"; }\n.bi-hand-thumbs-down::before { content: \"\\f405\"; }\n.bi-hand-thumbs-up-fill::before { content: \"\\f406\"; }\n.bi-hand-thumbs-up::before { content: \"\\f407\"; }\n.bi-handbag-fill::before { content: \"\\f408\"; }\n.bi-handbag::before { content: \"\\f409\"; }\n.bi-hash::before { content: \"\\f40a\"; }\n.bi-hdd-fill::before { content: \"\\f40b\"; }\n.bi-hdd-network-fill::before { content: \"\\f40c\"; }\n.bi-hdd-network::before { content: \"\\f40d\"; }\n.bi-hdd-rack-fill::before { content: \"\\f40e\"; }\n.bi-hdd-rack::before { content: \"\\f40f\"; }\n.bi-hdd-stack-fill::before { content: \"\\f410\"; }\n.bi-hdd-stack::before { content: \"\\f411\"; }\n.bi-hdd::before { content: \"\\f412\"; }\n.bi-headphones::before { content: \"\\f413\"; }\n.bi-headset::before { content: \"\\f414\"; }\n.bi-heart-fill::before { content: \"\\f415\"; }\n.bi-heart-half::before { content: \"\\f416\"; }\n.bi-heart::before { content: \"\\f417\"; }\n.bi-heptagon-fill::before { content: \"\\f418\"; }\n.bi-heptagon-half::before { content: \"\\f419\"; }\n.bi-heptagon::before { content: \"\\f41a\"; }\n.bi-hexagon-fill::before { content: \"\\f41b\"; }\n.bi-hexagon-half::before { content: \"\\f41c\"; }\n.bi-hexagon::before { content: \"\\f41d\"; }\n.bi-hourglass-bottom::before { content: \"\\f41e\"; }\n.bi-hourglass-split::before { content: \"\\f41f\"; }\n.bi-hourglass-top::before { content: \"\\f420\"; }\n.bi-hourglass::before { content: \"\\f421\"; }\n.bi-house-door-fill::before { content: \"\\f422\"; }\n.bi-house-door::before { content: \"\\f423\"; }\n.bi-house-fill::before { content: \"\\f424\"; }\n.bi-house::before { content: \"\\f425\"; }\n.bi-hr::before { content: \"\\f426\"; }\n.bi-hurricane::before { content: \"\\f427\"; }\n.bi-image-alt::before { content: \"\\f428\"; }\n.bi-image-fill::before { content: \"\\f429\"; }\n.bi-image::before { content: \"\\f42a\"; }\n.bi-images::before { content: \"\\f42b\"; }\n.bi-inbox-fill::before { content: \"\\f42c\"; }\n.bi-inbox::before { content: \"\\f42d\"; }\n.bi-inboxes-fill::before { content: \"\\f42e\"; }\n.bi-inboxes::before { content: \"\\f42f\"; }\n.bi-info-circle-fill::before { content: \"\\f430\"; }\n.bi-info-circle::before { content: \"\\f431\"; }\n.bi-info-square-fill::before { content: \"\\f432\"; }\n.bi-info-square::before { content: \"\\f433\"; }\n.bi-info::before { content: \"\\f434\"; }\n.bi-input-cursor-text::before { content: \"\\f435\"; }\n.bi-input-cursor::before { content: \"\\f436\"; }\n.bi-instagram::before { content: \"\\f437\"; }\n.bi-intersect::before { content: \"\\f438\"; }\n.bi-journal-album::before { content: \"\\f439\"; }\n.bi-journal-arrow-down::before { content: \"\\f43a\"; }\n.bi-journal-arrow-up::before { content: \"\\f43b\"; }\n.bi-journal-bookmark-fill::before { content: \"\\f43c\"; }\n.bi-journal-bookmark::before { content: \"\\f43d\"; }\n.bi-journal-check::before { content: \"\\f43e\"; }\n.bi-journal-code::before { content: \"\\f43f\"; }\n.bi-journal-medical::before { content: \"\\f440\"; }\n.bi-journal-minus::before { content: \"\\f441\"; }\n.bi-journal-plus::before { content: \"\\f442\"; }\n.bi-journal-richtext::before { content: \"\\f443\"; }\n.bi-journal-text::before { content: \"\\f444\"; }\n.bi-journal-x::before { content: \"\\f445\"; }\n.bi-journal::before { content: \"\\f446\"; }\n.bi-journals::before { content: \"\\f447\"; }\n.bi-joystick::before { content: \"\\f448\"; }\n.bi-justify-left::before { content: \"\\f449\"; }\n.bi-justify-right::before { content: \"\\f44a\"; }\n.bi-justify::before { content: \"\\f44b\"; }\n.bi-kanban-fill::before { content: \"\\f44c\"; }\n.bi-kanban::before { content: \"\\f44d\"; }\n.bi-key-fill::before { content: \"\\f44e\"; }\n.bi-key::before { content: \"\\f44f\"; }\n.bi-keyboard-fill::before { content: \"\\f450\"; }\n.bi-keyboard::before { content: \"\\f451\"; }\n.bi-ladder::before { content: \"\\f452\"; }\n.bi-lamp-fill::before { content: \"\\f453\"; }\n.bi-lamp::before { content: \"\\f454\"; }\n.bi-laptop-fill::before { content: \"\\f455\"; }\n.bi-laptop::before { content: \"\\f456\"; }\n.bi-layer-backward::before { content: \"\\f457\"; }\n.bi-layer-forward::before { content: \"\\f458\"; }\n.bi-layers-fill::before { content: \"\\f459\"; }\n.bi-layers-half::before { content: \"\\f45a\"; }\n.bi-layers::before { content: \"\\f45b\"; }\n.bi-layout-sidebar-inset-reverse::before { content: \"\\f45c\"; }\n.bi-layout-sidebar-inset::before { content: \"\\f45d\"; }\n.bi-layout-sidebar-reverse::before { content: \"\\f45e\"; }\n.bi-layout-sidebar::before { content: \"\\f45f\"; }\n.bi-layout-split::before { content: \"\\f460\"; }\n.bi-layout-text-sidebar-reverse::before { content: \"\\f461\"; }\n.bi-layout-text-sidebar::before { content: \"\\f462\"; }\n.bi-layout-text-window-reverse::before { content: \"\\f463\"; }\n.bi-layout-text-window::before { content: \"\\f464\"; }\n.bi-layout-three-columns::before { content: \"\\f465\"; }\n.bi-layout-wtf::before { content: \"\\f466\"; }\n.bi-life-preserver::before { content: \"\\f467\"; }\n.bi-lightbulb-fill::before { content: \"\\f468\"; }\n.bi-lightbulb-off-fill::before { content: \"\\f469\"; }\n.bi-lightbulb-off::before { content: \"\\f46a\"; }\n.bi-lightbulb::before { content: \"\\f46b\"; }\n.bi-lightning-charge-fill::before { content: \"\\f46c\"; }\n.bi-lightning-charge::before { content: \"\\f46d\"; }\n.bi-lightning-fill::before { content: \"\\f46e\"; }\n.bi-lightning::before { content: \"\\f46f\"; }\n.bi-link-45deg::before { content: \"\\f470\"; }\n.bi-link::before { content: \"\\f471\"; }\n.bi-linkedin::before { content: \"\\f472\"; }\n.bi-list-check::before { content: \"\\f473\"; }\n.bi-list-nested::before { content: \"\\f474\"; }\n.bi-list-ol::before { content: \"\\f475\"; }\n.bi-list-stars::before { content: \"\\f476\"; }\n.bi-list-task::before { content: \"\\f477\"; }\n.bi-list-ul::before { content: \"\\f478\"; }\n.bi-list::before { content: \"\\f479\"; }\n.bi-lock-fill::before { content: \"\\f47a\"; }\n.bi-lock::before { content: \"\\f47b\"; }\n.bi-mailbox::before { content: \"\\f47c\"; }\n.bi-mailbox2::before { content: \"\\f47d\"; }\n.bi-map-fill::before { content: \"\\f47e\"; }\n.bi-map::before { content: \"\\f47f\"; }\n.bi-markdown-fill::before { content: \"\\f480\"; }\n.bi-markdown::before { content: \"\\f481\"; }\n.bi-mask::before { content: \"\\f482\"; }\n.bi-megaphone-fill::before { content: \"\\f483\"; }\n.bi-megaphone::before { content: \"\\f484\"; }\n.bi-menu-app-fill::before { content: \"\\f485\"; }\n.bi-menu-app::before { content: \"\\f486\"; }\n.bi-menu-button-fill::before { content: \"\\f487\"; }\n.bi-menu-button-wide-fill::before { content: \"\\f488\"; }\n.bi-menu-button-wide::before { content: \"\\f489\"; }\n.bi-menu-button::before { content: \"\\f48a\"; }\n.bi-menu-down::before { content: \"\\f48b\"; }\n.bi-menu-up::before { content: \"\\f48c\"; }\n.bi-mic-fill::before { content: \"\\f48d\"; }\n.bi-mic-mute-fill::before { content: \"\\f48e\"; }\n.bi-mic-mute::before { content: \"\\f48f\"; }\n.bi-mic::before { content: \"\\f490\"; }\n.bi-minecart-loaded::before { content: \"\\f491\"; }\n.bi-minecart::before { content: \"\\f492\"; }\n.bi-moisture::before { content: \"\\f493\"; }\n.bi-moon-fill::before { content: \"\\f494\"; }\n.bi-moon-stars-fill::before { content: \"\\f495\"; }\n.bi-moon-stars::before { content: \"\\f496\"; }\n.bi-moon::before { content: \"\\f497\"; }\n.bi-mouse-fill::before { content: \"\\f498\"; }\n.bi-mouse::before { content: \"\\f499\"; }\n.bi-mouse2-fill::before { content: \"\\f49a\"; }\n.bi-mouse2::before { content: \"\\f49b\"; }\n.bi-mouse3-fill::before { content: \"\\f49c\"; }\n.bi-mouse3::before { content: \"\\f49d\"; }\n.bi-music-note-beamed::before { content: \"\\f49e\"; }\n.bi-music-note-list::before { content: \"\\f49f\"; }\n.bi-music-note::before { content: \"\\f4a0\"; }\n.bi-music-player-fill::before { content: \"\\f4a1\"; }\n.bi-music-player::before { content: \"\\f4a2\"; }\n.bi-newspaper::before { content: \"\\f4a3\"; }\n.bi-node-minus-fill::before { content: \"\\f4a4\"; }\n.bi-node-minus::before { content: \"\\f4a5\"; }\n.bi-node-plus-fill::before { content: \"\\f4a6\"; }\n.bi-node-plus::before { content: \"\\f4a7\"; }\n.bi-nut-fill::before { content: \"\\f4a8\"; }\n.bi-nut::before { content: \"\\f4a9\"; }\n.bi-octagon-fill::before { content: \"\\f4aa\"; }\n.bi-octagon-half::before { content: \"\\f4ab\"; }\n.bi-octagon::before { content: \"\\f4ac\"; }\n.bi-option::before { content: \"\\f4ad\"; }\n.bi-outlet::before { content: \"\\f4ae\"; }\n.bi-paint-bucket::before { content: \"\\f4af\"; }\n.bi-palette-fill::before { content: \"\\f4b0\"; }\n.bi-palette::before { content: \"\\f4b1\"; }\n.bi-palette2::before { content: \"\\f4b2\"; }\n.bi-paperclip::before { content: \"\\f4b3\"; }\n.bi-paragraph::before { content: \"\\f4b4\"; }\n.bi-patch-check-fill::before { content: \"\\f4b5\"; }\n.bi-patch-check::before { content: \"\\f4b6\"; }\n.bi-patch-exclamation-fill::before { content: \"\\f4b7\"; }\n.bi-patch-exclamation::before { content: \"\\f4b8\"; }\n.bi-patch-minus-fill::before { content: \"\\f4b9\"; }\n.bi-patch-minus::before { content: \"\\f4ba\"; }\n.bi-patch-plus-fill::before { content: \"\\f4bb\"; }\n.bi-patch-plus::before { content: \"\\f4bc\"; }\n.bi-patch-question-fill::before { content: \"\\f4bd\"; }\n.bi-patch-question::before { content: \"\\f4be\"; }\n.bi-pause-btn-fill::before { content: \"\\f4bf\"; }\n.bi-pause-btn::before { content: \"\\f4c0\"; }\n.bi-pause-circle-fill::before { content: \"\\f4c1\"; }\n.bi-pause-circle::before { content: \"\\f4c2\"; }\n.bi-pause-fill::before { content: \"\\f4c3\"; }\n.bi-pause::before { content: \"\\f4c4\"; }\n.bi-peace-fill::before { content: \"\\f4c5\"; }\n.bi-peace::before { content: \"\\f4c6\"; }\n.bi-pen-fill::before { content: \"\\f4c7\"; }\n.bi-pen::before { content: \"\\f4c8\"; }\n.bi-pencil-fill::before { content: \"\\f4c9\"; }\n.bi-pencil-square::before { content: \"\\f4ca\"; }\n.bi-pencil::before { content: \"\\f4cb\"; }\n.bi-pentagon-fill::before { content: \"\\f4cc\"; }\n.bi-pentagon-half::before { content: \"\\f4cd\"; }\n.bi-pentagon::before { content: \"\\f4ce\"; }\n.bi-people-fill::before { content: \"\\f4cf\"; }\n.bi-people::before { content: \"\\f4d0\"; }\n.bi-percent::before { content: \"\\f4d1\"; }\n.bi-person-badge-fill::before { content: \"\\f4d2\"; }\n.bi-person-badge::before { content: \"\\f4d3\"; }\n.bi-person-bounding-box::before { content: \"\\f4d4\"; }\n.bi-person-check-fill::before { content: \"\\f4d5\"; }\n.bi-person-check::before { content: \"\\f4d6\"; }\n.bi-person-circle::before { content: \"\\f4d7\"; }\n.bi-person-dash-fill::before { content: \"\\f4d8\"; }\n.bi-person-dash::before { content: \"\\f4d9\"; }\n.bi-person-fill::before { content: \"\\f4da\"; }\n.bi-person-lines-fill::before { content: \"\\f4db\"; }\n.bi-person-plus-fill::before { content: \"\\f4dc\"; }\n.bi-person-plus::before { content: \"\\f4dd\"; }\n.bi-person-square::before { content: \"\\f4de\"; }\n.bi-person-x-fill::before { content: \"\\f4df\"; }\n.bi-person-x::before { content: \"\\f4e0\"; }\n.bi-person::before { content: \"\\f4e1\"; }\n.bi-phone-fill::before { content: \"\\f4e2\"; }\n.bi-phone-landscape-fill::before { content: \"\\f4e3\"; }\n.bi-phone-landscape::before { content: \"\\f4e4\"; }\n.bi-phone-vibrate-fill::before { content: \"\\f4e5\"; }\n.bi-phone-vibrate::before { content: \"\\f4e6\"; }\n.bi-phone::before { content: \"\\f4e7\"; }\n.bi-pie-chart-fill::before { content: \"\\f4e8\"; }\n.bi-pie-chart::before { content: \"\\f4e9\"; }\n.bi-pin-angle-fill::before { content: \"\\f4ea\"; }\n.bi-pin-angle::before { content: \"\\f4eb\"; }\n.bi-pin-fill::before { content: \"\\f4ec\"; }\n.bi-pin::before { content: \"\\f4ed\"; }\n.bi-pip-fill::before { content: \"\\f4ee\"; }\n.bi-pip::before { content: \"\\f4ef\"; }\n.bi-play-btn-fill::before { content: \"\\f4f0\"; }\n.bi-play-btn::before { content: \"\\f4f1\"; }\n.bi-play-circle-fill::before { content: \"\\f4f2\"; }\n.bi-play-circle::before { content: \"\\f4f3\"; }\n.bi-play-fill::before { content: \"\\f4f4\"; }\n.bi-play::before { content: \"\\f4f5\"; }\n.bi-plug-fill::before { content: \"\\f4f6\"; }\n.bi-plug::before { content: \"\\f4f7\"; }\n.bi-plus-circle-dotted::before { content: \"\\f4f8\"; }\n.bi-plus-circle-fill::before { content: \"\\f4f9\"; }\n.bi-plus-circle::before { content: \"\\f4fa\"; }\n.bi-plus-square-dotted::before { content: \"\\f4fb\"; }\n.bi-plus-square-fill::before { content: \"\\f4fc\"; }\n.bi-plus-square::before { content: \"\\f4fd\"; }\n.bi-plus::before { content: \"\\f4fe\"; }\n.bi-power::before { content: \"\\f4ff\"; }\n.bi-printer-fill::before { content: \"\\f500\"; }\n.bi-printer::before { content: \"\\f501\"; }\n.bi-puzzle-fill::before { content: \"\\f502\"; }\n.bi-puzzle::before { content: \"\\f503\"; }\n.bi-question-circle-fill::before { content: \"\\f504\"; }\n.bi-question-circle::before { content: \"\\f505\"; }\n.bi-question-diamond-fill::before { content: \"\\f506\"; }\n.bi-question-diamond::before { content: \"\\f507\"; }\n.bi-question-octagon-fill::before { content: \"\\f508\"; }\n.bi-question-octagon::before { content: \"\\f509\"; }\n.bi-question-square-fill::before { content: \"\\f50a\"; }\n.bi-question-square::before { content: \"\\f50b\"; }\n.bi-question::before { content: \"\\f50c\"; }\n.bi-rainbow::before { content: \"\\f50d\"; }\n.bi-receipt-cutoff::before { content: \"\\f50e\"; }\n.bi-receipt::before { content: \"\\f50f\"; }\n.bi-reception-0::before { content: \"\\f510\"; }\n.bi-reception-1::before { content: \"\\f511\"; }\n.bi-reception-2::before { content: \"\\f512\"; }\n.bi-reception-3::before { content: \"\\f513\"; }\n.bi-reception-4::before { content: \"\\f514\"; }\n.bi-record-btn-fill::before { content: \"\\f515\"; }\n.bi-record-btn::before { content: \"\\f516\"; }\n.bi-record-circle-fill::before { content: \"\\f517\"; }\n.bi-record-circle::before { content: \"\\f518\"; }\n.bi-record-fill::before { content: \"\\f519\"; }\n.bi-record::before { content: \"\\f51a\"; }\n.bi-record2-fill::before { content: \"\\f51b\"; }\n.bi-record2::before { content: \"\\f51c\"; }\n.bi-reply-all-fill::before { content: \"\\f51d\"; }\n.bi-reply-all::before { content: \"\\f51e\"; }\n.bi-reply-fill::before { content: \"\\f51f\"; }\n.bi-reply::before { content: \"\\f520\"; }\n.bi-rss-fill::before { content: \"\\f521\"; }\n.bi-rss::before { content: \"\\f522\"; }\n.bi-rulers::before { content: \"\\f523\"; }\n.bi-save-fill::before { content: \"\\f524\"; }\n.bi-save::before { content: \"\\f525\"; }\n.bi-save2-fill::before { content: \"\\f526\"; }\n.bi-save2::before { content: \"\\f527\"; }\n.bi-scissors::before { content: \"\\f528\"; }\n.bi-screwdriver::before { content: \"\\f529\"; }\n.bi-search::before { content: \"\\f52a\"; }\n.bi-segmented-nav::before { content: \"\\f52b\"; }\n.bi-server::before { content: \"\\f52c\"; }\n.bi-share-fill::before { content: \"\\f52d\"; }\n.bi-share::before { content: \"\\f52e\"; }\n.bi-shield-check::before { content: \"\\f52f\"; }\n.bi-shield-exclamation::before { content: \"\\f530\"; }\n.bi-shield-fill-check::before { content: \"\\f531\"; }\n.bi-shield-fill-exclamation::before { content: \"\\f532\"; }\n.bi-shield-fill-minus::before { content: \"\\f533\"; }\n.bi-shield-fill-plus::before { content: \"\\f534\"; }\n.bi-shield-fill-x::before { content: \"\\f535\"; }\n.bi-shield-fill::before { content: \"\\f536\"; }\n.bi-shield-lock-fill::before { content: \"\\f537\"; }\n.bi-shield-lock::before { content: \"\\f538\"; }\n.bi-shield-minus::before { content: \"\\f539\"; }\n.bi-shield-plus::before { content: \"\\f53a\"; }\n.bi-shield-shaded::before { content: \"\\f53b\"; }\n.bi-shield-slash-fill::before { content: \"\\f53c\"; }\n.bi-shield-slash::before { content: \"\\f53d\"; }\n.bi-shield-x::before { content: \"\\f53e\"; }\n.bi-shield::before { content: \"\\f53f\"; }\n.bi-shift-fill::before { content: \"\\f540\"; }\n.bi-shift::before { content: \"\\f541\"; }\n.bi-shop-window::before { content: \"\\f542\"; }\n.bi-shop::before { content: \"\\f543\"; }\n.bi-shuffle::before { content: \"\\f544\"; }\n.bi-signpost-2-fill::before { content: \"\\f545\"; }\n.bi-signpost-2::before { content: \"\\f546\"; }\n.bi-signpost-fill::before { content: \"\\f547\"; }\n.bi-signpost-split-fill::before { content: \"\\f548\"; }\n.bi-signpost-split::before { content: \"\\f549\"; }\n.bi-signpost::before { content: \"\\f54a\"; }\n.bi-sim-fill::before { content: \"\\f54b\"; }\n.bi-sim::before { content: \"\\f54c\"; }\n.bi-skip-backward-btn-fill::before { content: \"\\f54d\"; }\n.bi-skip-backward-btn::before { content: \"\\f54e\"; }\n.bi-skip-backward-circle-fill::before { content: \"\\f54f\"; }\n.bi-skip-backward-circle::before { content: \"\\f550\"; }\n.bi-skip-backward-fill::before { content: \"\\f551\"; }\n.bi-skip-backward::before { content: \"\\f552\"; }\n.bi-skip-end-btn-fill::before { content: \"\\f553\"; }\n.bi-skip-end-btn::before { content: \"\\f554\"; }\n.bi-skip-end-circle-fill::before { content: \"\\f555\"; }\n.bi-skip-end-circle::before { content: \"\\f556\"; }\n.bi-skip-end-fill::before { content: \"\\f557\"; }\n.bi-skip-end::before { content: \"\\f558\"; }\n.bi-skip-forward-btn-fill::before { content: \"\\f559\"; }\n.bi-skip-forward-btn::before { content: \"\\f55a\"; }\n.bi-skip-forward-circle-fill::before { content: \"\\f55b\"; }\n.bi-skip-forward-circle::before { content: \"\\f55c\"; }\n.bi-skip-forward-fill::before { content: \"\\f55d\"; }\n.bi-skip-forward::before { content: \"\\f55e\"; }\n.bi-skip-start-btn-fill::before { content: \"\\f55f\"; }\n.bi-skip-start-btn::before { content: \"\\f560\"; }\n.bi-skip-start-circle-fill::before { content: \"\\f561\"; }\n.bi-skip-start-circle::before { content: \"\\f562\"; }\n.bi-skip-start-fill::before { content: \"\\f563\"; }\n.bi-skip-start::before { content: \"\\f564\"; }\n.bi-slack::before { content: \"\\f565\"; }\n.bi-slash-circle-fill::before { content: \"\\f566\"; }\n.bi-slash-circle::before { content: \"\\f567\"; }\n.bi-slash-square-fill::before { content: \"\\f568\"; }\n.bi-slash-square::before { content: \"\\f569\"; }\n.bi-slash::before { content: \"\\f56a\"; }\n.bi-sliders::before { content: \"\\f56b\"; }\n.bi-smartwatch::before { content: \"\\f56c\"; }\n.bi-snow::before { content: \"\\f56d\"; }\n.bi-snow2::before { content: \"\\f56e\"; }\n.bi-snow3::before { content: \"\\f56f\"; }\n.bi-sort-alpha-down-alt::before { content: \"\\f570\"; }\n.bi-sort-alpha-down::before { content: \"\\f571\"; }\n.bi-sort-alpha-up-alt::before { content: \"\\f572\"; }\n.bi-sort-alpha-up::before { content: \"\\f573\"; }\n.bi-sort-down-alt::before { content: \"\\f574\"; }\n.bi-sort-down::before { content: \"\\f575\"; }\n.bi-sort-numeric-down-alt::before { content: \"\\f576\"; }\n.bi-sort-numeric-down::before { content: \"\\f577\"; }\n.bi-sort-numeric-up-alt::before { content: \"\\f578\"; }\n.bi-sort-numeric-up::before { content: \"\\f579\"; }\n.bi-sort-up-alt::before { content: \"\\f57a\"; }\n.bi-sort-up::before { content: \"\\f57b\"; }\n.bi-soundwave::before { content: \"\\f57c\"; }\n.bi-speaker-fill::before { content: \"\\f57d\"; }\n.bi-speaker::before { content: \"\\f57e\"; }\n.bi-speedometer::before { content: \"\\f57f\"; }\n.bi-speedometer2::before { content: \"\\f580\"; }\n.bi-spellcheck::before { content: \"\\f581\"; }\n.bi-square-fill::before { content: \"\\f582\"; }\n.bi-square-half::before { content: \"\\f583\"; }\n.bi-square::before { content: \"\\f584\"; }\n.bi-stack::before { content: \"\\f585\"; }\n.bi-star-fill::before { content: \"\\f586\"; }\n.bi-star-half::before { content: \"\\f587\"; }\n.bi-star::before { content: \"\\f588\"; }\n.bi-stars::before { content: \"\\f589\"; }\n.bi-stickies-fill::before { content: \"\\f58a\"; }\n.bi-stickies::before { content: \"\\f58b\"; }\n.bi-sticky-fill::before { content: \"\\f58c\"; }\n.bi-sticky::before { content: \"\\f58d\"; }\n.bi-stop-btn-fill::before { content: \"\\f58e\"; }\n.bi-stop-btn::before { content: \"\\f58f\"; }\n.bi-stop-circle-fill::before { content: \"\\f590\"; }\n.bi-stop-circle::before { content: \"\\f591\"; }\n.bi-stop-fill::before { content: \"\\f592\"; }\n.bi-stop::before { content: \"\\f593\"; }\n.bi-stoplights-fill::before { content: \"\\f594\"; }\n.bi-stoplights::before { content: \"\\f595\"; }\n.bi-stopwatch-fill::before { content: \"\\f596\"; }\n.bi-stopwatch::before { content: \"\\f597\"; }\n.bi-subtract::before { content: \"\\f598\"; }\n.bi-suit-club-fill::before { content: \"\\f599\"; }\n.bi-suit-club::before { content: \"\\f59a\"; }\n.bi-suit-diamond-fill::before { content: \"\\f59b\"; }\n.bi-suit-diamond::before { content: \"\\f59c\"; }\n.bi-suit-heart-fill::before { content: \"\\f59d\"; }\n.bi-suit-heart::before { content: \"\\f59e\"; }\n.bi-suit-spade-fill::before { content: \"\\f59f\"; }\n.bi-suit-spade::before { content: \"\\f5a0\"; }\n.bi-sun-fill::before { content: \"\\f5a1\"; }\n.bi-sun::before { content: \"\\f5a2\"; }\n.bi-sunglasses::before { content: \"\\f5a3\"; }\n.bi-sunrise-fill::before { content: \"\\f5a4\"; }\n.bi-sunrise::before { content: \"\\f5a5\"; }\n.bi-sunset-fill::before { content: \"\\f5a6\"; }\n.bi-sunset::before { content: \"\\f5a7\"; }\n.bi-symmetry-horizontal::before { content: \"\\f5a8\"; }\n.bi-symmetry-vertical::before { content: \"\\f5a9\"; }\n.bi-table::before { content: \"\\f5aa\"; }\n.bi-tablet-fill::before { content: \"\\f5ab\"; }\n.bi-tablet-landscape-fill::before { content: \"\\f5ac\"; }\n.bi-tablet-landscape::before { content: \"\\f5ad\"; }\n.bi-tablet::before { content: \"\\f5ae\"; }\n.bi-tag-fill::before { content: \"\\f5af\"; }\n.bi-tag::before { content: \"\\f5b0\"; }\n.bi-tags-fill::before { content: \"\\f5b1\"; }\n.bi-tags::before { content: \"\\f5b2\"; }\n.bi-telegram::before { content: \"\\f5b3\"; }\n.bi-telephone-fill::before { content: \"\\f5b4\"; }\n.bi-telephone-forward-fill::before { content: \"\\f5b5\"; }\n.bi-telephone-forward::before { content: \"\\f5b6\"; }\n.bi-telephone-inbound-fill::before { content: \"\\f5b7\"; }\n.bi-telephone-inbound::before { content: \"\\f5b8\"; }\n.bi-telephone-minus-fill::before { content: \"\\f5b9\"; }\n.bi-telephone-minus::before { content: \"\\f5ba\"; }\n.bi-telephone-outbound-fill::before { content: \"\\f5bb\"; }\n.bi-telephone-outbound::before { content: \"\\f5bc\"; }\n.bi-telephone-plus-fill::before { content: \"\\f5bd\"; }\n.bi-telephone-plus::before { content: \"\\f5be\"; }\n.bi-telephone-x-fill::before { content: \"\\f5bf\"; }\n.bi-telephone-x::before { content: \"\\f5c0\"; }\n.bi-telephone::before { content: \"\\f5c1\"; }\n.bi-terminal-fill::before { content: \"\\f5c2\"; }\n.bi-terminal::before { content: \"\\f5c3\"; }\n.bi-text-center::before { content: \"\\f5c4\"; }\n.bi-text-indent-left::before { content: \"\\f5c5\"; }\n.bi-text-indent-right::before { content: \"\\f5c6\"; }\n.bi-text-left::before { content: \"\\f5c7\"; }\n.bi-text-paragraph::before { content: \"\\f5c8\"; }\n.bi-text-right::before { content: \"\\f5c9\"; }\n.bi-textarea-resize::before { content: \"\\f5ca\"; }\n.bi-textarea-t::before { content: \"\\f5cb\"; }\n.bi-textarea::before { content: \"\\f5cc\"; }\n.bi-thermometer-half::before { content: \"\\f5cd\"; }\n.bi-thermometer-high::before { content: \"\\f5ce\"; }\n.bi-thermometer-low::before { content: \"\\f5cf\"; }\n.bi-thermometer-snow::before { content: \"\\f5d0\"; }\n.bi-thermometer-sun::before { content: \"\\f5d1\"; }\n.bi-thermometer::before { content: \"\\f5d2\"; }\n.bi-three-dots-vertical::before { content: \"\\f5d3\"; }\n.bi-three-dots::before { content: \"\\f5d4\"; }\n.bi-toggle-off::before { content: \"\\f5d5\"; }\n.bi-toggle-on::before { content: \"\\f5d6\"; }\n.bi-toggle2-off::before { content: \"\\f5d7\"; }\n.bi-toggle2-on::before { content: \"\\f5d8\"; }\n.bi-toggles::before { content: \"\\f5d9\"; }\n.bi-toggles2::before { content: \"\\f5da\"; }\n.bi-tools::before { content: \"\\f5db\"; }\n.bi-tornado::before { content: \"\\f5dc\"; }\n.bi-trash-fill::before { content: \"\\f5dd\"; }\n.bi-trash::before { content: \"\\f5de\"; }\n.bi-trash2-fill::before { content: \"\\f5df\"; }\n.bi-trash2::before { content: \"\\f5e0\"; }\n.bi-tree-fill::before { content: \"\\f5e1\"; }\n.bi-tree::before { content: \"\\f5e2\"; }\n.bi-triangle-fill::before { content: \"\\f5e3\"; }\n.bi-triangle-half::before { content: \"\\f5e4\"; }\n.bi-triangle::before { content: \"\\f5e5\"; }\n.bi-trophy-fill::before { content: \"\\f5e6\"; }\n.bi-trophy::before { content: \"\\f5e7\"; }\n.bi-tropical-storm::before { content: \"\\f5e8\"; }\n.bi-truck-flatbed::before { content: \"\\f5e9\"; }\n.bi-truck::before { content: \"\\f5ea\"; }\n.bi-tsunami::before { content: \"\\f5eb\"; }\n.bi-tv-fill::before { content: \"\\f5ec\"; }\n.bi-tv::before { content: \"\\f5ed\"; }\n.bi-twitch::before { content: \"\\f5ee\"; }\n.bi-twitter::before { content: \"\\f5ef\"; }\n.bi-type-bold::before { content: \"\\f5f0\"; }\n.bi-type-h1::before { content: \"\\f5f1\"; }\n.bi-type-h2::before { content: \"\\f5f2\"; }\n.bi-type-h3::before { content: \"\\f5f3\"; }\n.bi-type-italic::before { content: \"\\f5f4\"; }\n.bi-type-strikethrough::before { content: \"\\f5f5\"; }\n.bi-type-underline::before { content: \"\\f5f6\"; }\n.bi-type::before { content: \"\\f5f7\"; }\n.bi-ui-checks-grid::before { content: \"\\f5f8\"; }\n.bi-ui-checks::before { content: \"\\f5f9\"; }\n.bi-ui-radios-grid::before { content: \"\\f5fa\"; }\n.bi-ui-radios::before { content: \"\\f5fb\"; }\n.bi-umbrella-fill::before { content: \"\\f5fc\"; }\n.bi-umbrella::before { content: \"\\f5fd\"; }\n.bi-union::before { content: \"\\f5fe\"; }\n.bi-unlock-fill::before { content: \"\\f5ff\"; }\n.bi-unlock::before { content: \"\\f600\"; }\n.bi-upc-scan::before { content: \"\\f601\"; }\n.bi-upc::before { content: \"\\f602\"; }\n.bi-upload::before { content: \"\\f603\"; }\n.bi-vector-pen::before { content: \"\\f604\"; }\n.bi-view-list::before { content: \"\\f605\"; }\n.bi-view-stacked::before { content: \"\\f606\"; }\n.bi-vinyl-fill::before { content: \"\\f607\"; }\n.bi-vinyl::before { content: \"\\f608\"; }\n.bi-voicemail::before { content: \"\\f609\"; }\n.bi-volume-down-fill::before { content: \"\\f60a\"; }\n.bi-volume-down::before { content: \"\\f60b\"; }\n.bi-volume-mute-fill::before { content: \"\\f60c\"; }\n.bi-volume-mute::before { content: \"\\f60d\"; }\n.bi-volume-off-fill::before { content: \"\\f60e\"; }\n.bi-volume-off::before { content: \"\\f60f\"; }\n.bi-volume-up-fill::before { content: \"\\f610\"; }\n.bi-volume-up::before { content: \"\\f611\"; }\n.bi-vr::before { content: \"\\f612\"; }\n.bi-wallet-fill::before { content: \"\\f613\"; }\n.bi-wallet::before { content: \"\\f614\"; }\n.bi-wallet2::before { content: \"\\f615\"; }\n.bi-watch::before { content: \"\\f616\"; }\n.bi-water::before { content: \"\\f617\"; }\n.bi-whatsapp::before { content: \"\\f618\"; }\n.bi-wifi-1::before { content: \"\\f619\"; }\n.bi-wifi-2::before { content: \"\\f61a\"; }\n.bi-wifi-off::before { content: \"\\f61b\"; }\n.bi-wifi::before { content: \"\\f61c\"; }\n.bi-wind::before { content: \"\\f61d\"; }\n.bi-window-dock::before { content: \"\\f61e\"; }\n.bi-window-sidebar::before { content: \"\\f61f\"; }\n.bi-window::before { content: \"\\f620\"; }\n.bi-wrench::before { content: \"\\f621\"; }\n.bi-x-circle-fill::before { content: \"\\f622\"; }\n.bi-x-circle::before { content: \"\\f623\"; }\n.bi-x-diamond-fill::before { content: \"\\f624\"; }\n.bi-x-diamond::before { content: \"\\f625\"; }\n.bi-x-octagon-fill::before { content: \"\\f626\"; }\n.bi-x-octagon::before { content: \"\\f627\"; }\n.bi-x-square-fill::before { content: \"\\f628\"; }\n.bi-x-square::before { content: \"\\f629\"; }\n.bi-x::before { content: \"\\f62a\"; }\n.bi-youtube::before { content: \"\\f62b\"; }\n.bi-zoom-in::before { content: \"\\f62c\"; }\n.bi-zoom-out::before { content: \"\\f62d\"; }\n.bi-bank::before { content: \"\\f62e\"; }\n.bi-bank2::before { content: \"\\f62f\"; }\n.bi-bell-slash-fill::before { content: \"\\f630\"; }\n.bi-bell-slash::before { content: \"\\f631\"; }\n.bi-cash-coin::before { content: \"\\f632\"; }\n.bi-check-lg::before { content: \"\\f633\"; }\n.bi-coin::before { content: \"\\f634\"; }\n.bi-currency-bitcoin::before { content: \"\\f635\"; }\n.bi-currency-dollar::before { content: \"\\f636\"; }\n.bi-currency-euro::before { content: \"\\f637\"; }\n.bi-currency-exchange::before { content: \"\\f638\"; }\n.bi-currency-pound::before { content: \"\\f639\"; }\n.bi-currency-yen::before { content: \"\\f63a\"; }\n.bi-dash-lg::before { content: \"\\f63b\"; }\n.bi-exclamation-lg::before { content: \"\\f63c\"; }\n.bi-file-earmark-pdf-fill::before { content: \"\\f63d\"; }\n.bi-file-earmark-pdf::before { content: \"\\f63e\"; }\n.bi-file-pdf-fill::before { content: \"\\f63f\"; }\n.bi-file-pdf::before { content: \"\\f640\"; }\n.bi-gender-ambiguous::before { content: \"\\f641\"; }\n.bi-gender-female::before { content: \"\\f642\"; }\n.bi-gender-male::before { content: \"\\f643\"; }\n.bi-gender-trans::before { content: \"\\f644\"; }\n.bi-headset-vr::before { content: \"\\f645\"; }\n.bi-info-lg::before { content: \"\\f646\"; }\n.bi-mastodon::before { content: \"\\f647\"; }\n.bi-messenger::before { content: \"\\f648\"; }\n.bi-piggy-bank-fill::before { content: \"\\f649\"; }\n.bi-piggy-bank::before { content: \"\\f64a\"; }\n.bi-pin-map-fill::before { content: \"\\f64b\"; }\n.bi-pin-map::before { content: \"\\f64c\"; }\n.bi-plus-lg::before { content: \"\\f64d\"; }\n.bi-question-lg::before { content: \"\\f64e\"; }\n.bi-recycle::before { content: \"\\f64f\"; }\n.bi-reddit::before { content: \"\\f650\"; }\n.bi-safe-fill::before { content: \"\\f651\"; }\n.bi-safe2-fill::before { content: \"\\f652\"; }\n.bi-safe2::before { content: \"\\f653\"; }\n.bi-sd-card-fill::before { content: \"\\f654\"; }\n.bi-sd-card::before { content: \"\\f655\"; }\n.bi-skype::before { content: \"\\f656\"; }\n.bi-slash-lg::before { content: \"\\f657\"; }\n.bi-translate::before { content: \"\\f658\"; }\n.bi-x-lg::before { content: \"\\f659\"; }\n.bi-safe::before { content: \"\\f65a\"; }\n.bi-apple::before { content: \"\\f65b\"; }\n.bi-microsoft::before { content: \"\\f65d\"; }\n.bi-windows::before { content: \"\\f65e\"; }\n.bi-behance::before { content: \"\\f65c\"; }\n.bi-dribbble::before { content: \"\\f65f\"; }\n.bi-line::before { content: \"\\f660\"; }\n.bi-medium::before { content: \"\\f661\"; }\n.bi-paypal::before { content: \"\\f662\"; }\n.bi-pinterest::before { content: \"\\f663\"; }\n.bi-signal::before { content: \"\\f664\"; }\n.bi-snapchat::before { content: \"\\f665\"; }\n.bi-spotify::before { content: \"\\f666\"; }\n.bi-stack-overflow::before { content: \"\\f667\"; }\n.bi-strava::before { content: \"\\f668\"; }\n.bi-wordpress::before { content: \"\\f669\"; }\n.bi-vimeo::before { content: \"\\f66a\"; }\n.bi-activity::before { content: \"\\f66b\"; }\n.bi-easel2-fill::before { content: \"\\f66c\"; }\n.bi-easel2::before { content: \"\\f66d\"; }\n.bi-easel3-fill::before { content: \"\\f66e\"; }\n.bi-easel3::before { content: \"\\f66f\"; }\n.bi-fan::before { content: \"\\f670\"; }\n.bi-fingerprint::before { content: \"\\f671\"; }\n.bi-graph-down-arrow::before { content: \"\\f672\"; }\n.bi-graph-up-arrow::before { content: \"\\f673\"; }\n.bi-hypnotize::before { content: \"\\f674\"; }\n.bi-magic::before { content: \"\\f675\"; }\n.bi-person-rolodex::before { content: \"\\f676\"; }\n.bi-person-video::before { content: \"\\f677\"; }\n.bi-person-video2::before { content: \"\\f678\"; }\n.bi-person-video3::before { content: \"\\f679\"; }\n.bi-person-workspace::before { content: \"\\f67a\"; }\n.bi-radioactive::before { content: \"\\f67b\"; }\n.bi-webcam-fill::before { content: \"\\f67c\"; }\n.bi-webcam::before { content: \"\\f67d\"; }\n.bi-yin-yang::before { content: \"\\f67e\"; }\n.bi-bandaid-fill::before { content: \"\\f680\"; }\n.bi-bandaid::before { content: \"\\f681\"; }\n.bi-bluetooth::before { content: \"\\f682\"; }\n.bi-body-text::before { content: \"\\f683\"; }\n.bi-boombox::before { content: \"\\f684\"; }\n.bi-boxes::before { content: \"\\f685\"; }\n.bi-dpad-fill::before { content: \"\\f686\"; }\n.bi-dpad::before { content: \"\\f687\"; }\n.bi-ear-fill::before { content: \"\\f688\"; }\n.bi-ear::before { content: \"\\f689\"; }\n.bi-envelope-check-fill::before { content: \"\\f68b\"; }\n.bi-envelope-check::before { content: \"\\f68c\"; }\n.bi-envelope-dash-fill::before { content: \"\\f68e\"; }\n.bi-envelope-dash::before { content: \"\\f68f\"; }\n.bi-envelope-exclamation-fill::before { content: \"\\f691\"; }\n.bi-envelope-exclamation::before { content: \"\\f692\"; }\n.bi-envelope-plus-fill::before { content: \"\\f693\"; }\n.bi-envelope-plus::before { content: \"\\f694\"; }\n.bi-envelope-slash-fill::before { content: \"\\f696\"; }\n.bi-envelope-slash::before { content: \"\\f697\"; }\n.bi-envelope-x-fill::before { content: \"\\f699\"; }\n.bi-envelope-x::before { content: \"\\f69a\"; }\n.bi-explicit-fill::before { content: \"\\f69b\"; }\n.bi-explicit::before { content: \"\\f69c\"; }\n.bi-git::before { content: \"\\f69d\"; }\n.bi-infinity::before { content: \"\\f69e\"; }\n.bi-list-columns-reverse::before { content: \"\\f69f\"; }\n.bi-list-columns::before { content: \"\\f6a0\"; }\n.bi-meta::before { content: \"\\f6a1\"; }\n.bi-nintendo-switch::before { content: \"\\f6a4\"; }\n.bi-pc-display-horizontal::before { content: \"\\f6a5\"; }\n.bi-pc-display::before { content: \"\\f6a6\"; }\n.bi-pc-horizontal::before { content: \"\\f6a7\"; }\n.bi-pc::before { content: \"\\f6a8\"; }\n.bi-playstation::before { content: \"\\f6a9\"; }\n.bi-plus-slash-minus::before { content: \"\\f6aa\"; }\n.bi-projector-fill::before { content: \"\\f6ab\"; }\n.bi-projector::before { content: \"\\f6ac\"; }\n.bi-qr-code-scan::before { content: \"\\f6ad\"; }\n.bi-qr-code::before { content: \"\\f6ae\"; }\n.bi-quora::before { content: \"\\f6af\"; }\n.bi-quote::before { content: \"\\f6b0\"; }\n.bi-robot::before { content: \"\\f6b1\"; }\n.bi-send-check-fill::before { content: \"\\f6b2\"; }\n.bi-send-check::before { content: \"\\f6b3\"; }\n.bi-send-dash-fill::before { content: \"\\f6b4\"; }\n.bi-send-dash::before { content: \"\\f6b5\"; }\n.bi-send-exclamation-fill::before { content: \"\\f6b7\"; }\n.bi-send-exclamation::before { content: \"\\f6b8\"; }\n.bi-send-fill::before { content: \"\\f6b9\"; }\n.bi-send-plus-fill::before { content: \"\\f6ba\"; }\n.bi-send-plus::before { content: \"\\f6bb\"; }\n.bi-send-slash-fill::before { content: \"\\f6bc\"; }\n.bi-send-slash::before { content: \"\\f6bd\"; }\n.bi-send-x-fill::before { content: \"\\f6be\"; }\n.bi-send-x::before { content: \"\\f6bf\"; }\n.bi-send::before { content: \"\\f6c0\"; }\n.bi-steam::before { content: \"\\f6c1\"; }\n.bi-terminal-dash::before { content: \"\\f6c3\"; }\n.bi-terminal-plus::before { content: \"\\f6c4\"; }\n.bi-terminal-split::before { content: \"\\f6c5\"; }\n.bi-ticket-detailed-fill::before { content: \"\\f6c6\"; }\n.bi-ticket-detailed::before { content: \"\\f6c7\"; }\n.bi-ticket-fill::before { content: \"\\f6c8\"; }\n.bi-ticket-perforated-fill::before { content: \"\\f6c9\"; }\n.bi-ticket-perforated::before { content: \"\\f6ca\"; }\n.bi-ticket::before { content: \"\\f6cb\"; }\n.bi-tiktok::before { content: \"\\f6cc\"; }\n.bi-window-dash::before { content: \"\\f6cd\"; }\n.bi-window-desktop::before { content: \"\\f6ce\"; }\n.bi-window-fullscreen::before { content: \"\\f6cf\"; }\n.bi-window-plus::before { content: \"\\f6d0\"; }\n.bi-window-split::before { content: \"\\f6d1\"; }\n.bi-window-stack::before { content: \"\\f6d2\"; }\n.bi-window-x::before { content: \"\\f6d3\"; }\n.bi-xbox::before { content: \"\\f6d4\"; }\n.bi-ethernet::before { content: \"\\f6d5\"; }\n.bi-hdmi-fill::before { content: \"\\f6d6\"; }\n.bi-hdmi::before { content: \"\\f6d7\"; }\n.bi-usb-c-fill::before { content: \"\\f6d8\"; }\n.bi-usb-c::before { content: \"\\f6d9\"; }\n.bi-usb-fill::before { content: \"\\f6da\"; }\n.bi-usb-plug-fill::before { content: \"\\f6db\"; }\n.bi-usb-plug::before { content: \"\\f6dc\"; }\n.bi-usb-symbol::before { content: \"\\f6dd\"; }\n.bi-usb::before { content: \"\\f6de\"; }\n.bi-boombox-fill::before { content: \"\\f6df\"; }\n.bi-displayport::before { content: \"\\f6e1\"; }\n.bi-gpu-card::before { content: \"\\f6e2\"; }\n.bi-memory::before { content: \"\\f6e3\"; }\n.bi-modem-fill::before { content: \"\\f6e4\"; }\n.bi-modem::before { content: \"\\f6e5\"; }\n.bi-motherboard-fill::before { content: \"\\f6e6\"; }\n.bi-motherboard::before { content: \"\\f6e7\"; }\n.bi-optical-audio-fill::before { content: \"\\f6e8\"; }\n.bi-optical-audio::before { content: \"\\f6e9\"; }\n.bi-pci-card::before { content: \"\\f6ea\"; }\n.bi-router-fill::before { content: \"\\f6eb\"; }\n.bi-router::before { content: \"\\f6ec\"; }\n.bi-thunderbolt-fill::before { content: \"\\f6ef\"; }\n.bi-thunderbolt::before { content: \"\\f6f0\"; }\n.bi-usb-drive-fill::before { content: \"\\f6f1\"; }\n.bi-usb-drive::before { content: \"\\f6f2\"; }\n.bi-usb-micro-fill::before { content: \"\\f6f3\"; }\n.bi-usb-micro::before { content: \"\\f6f4\"; }\n.bi-usb-mini-fill::before { content: \"\\f6f5\"; }\n.bi-usb-mini::before { content: \"\\f6f6\"; }\n.bi-cloud-haze2::before { content: \"\\f6f7\"; }\n.bi-device-hdd-fill::before { content: \"\\f6f8\"; }\n.bi-device-hdd::before { content: \"\\f6f9\"; }\n.bi-device-ssd-fill::before { content: \"\\f6fa\"; }\n.bi-device-ssd::before { content: \"\\f6fb\"; }\n.bi-displayport-fill::before { content: \"\\f6fc\"; }\n.bi-mortarboard-fill::before { content: \"\\f6fd\"; }\n.bi-mortarboard::before { content: \"\\f6fe\"; }\n.bi-terminal-x::before { content: \"\\f6ff\"; }\n.bi-arrow-through-heart-fill::before { content: \"\\f700\"; }\n.bi-arrow-through-heart::before { content: \"\\f701\"; }\n.bi-badge-sd-fill::before { content: \"\\f702\"; }\n.bi-badge-sd::before { content: \"\\f703\"; }\n.bi-bag-heart-fill::before { content: \"\\f704\"; }\n.bi-bag-heart::before { content: \"\\f705\"; }\n.bi-balloon-fill::before { content: \"\\f706\"; }\n.bi-balloon-heart-fill::before { content: \"\\f707\"; }\n.bi-balloon-heart::before { content: \"\\f708\"; }\n.bi-balloon::before { content: \"\\f709\"; }\n.bi-box2-fill::before { content: \"\\f70a\"; }\n.bi-box2-heart-fill::before { content: \"\\f70b\"; }\n.bi-box2-heart::before { content: \"\\f70c\"; }\n.bi-box2::before { content: \"\\f70d\"; }\n.bi-braces-asterisk::before { content: \"\\f70e\"; }\n.bi-calendar-heart-fill::before { content: \"\\f70f\"; }\n.bi-calendar-heart::before { content: \"\\f710\"; }\n.bi-calendar2-heart-fill::before { content: \"\\f711\"; }\n.bi-calendar2-heart::before { content: \"\\f712\"; }\n.bi-chat-heart-fill::before { content: \"\\f713\"; }\n.bi-chat-heart::before { content: \"\\f714\"; }\n.bi-chat-left-heart-fill::before { content: \"\\f715\"; }\n.bi-chat-left-heart::before { content: \"\\f716\"; }\n.bi-chat-right-heart-fill::before { content: \"\\f717\"; }\n.bi-chat-right-heart::before { content: \"\\f718\"; }\n.bi-chat-square-heart-fill::before { content: \"\\f719\"; }\n.bi-chat-square-heart::before { content: \"\\f71a\"; }\n.bi-clipboard-check-fill::before { content: \"\\f71b\"; }\n.bi-clipboard-data-fill::before { content: \"\\f71c\"; }\n.bi-clipboard-fill::before { content: \"\\f71d\"; }\n.bi-clipboard-heart-fill::before { content: \"\\f71e\"; }\n.bi-clipboard-heart::before { content: \"\\f71f\"; }\n.bi-clipboard-minus-fill::before { content: \"\\f720\"; }\n.bi-clipboard-plus-fill::before { content: \"\\f721\"; }\n.bi-clipboard-pulse::before { content: \"\\f722\"; }\n.bi-clipboard-x-fill::before { content: \"\\f723\"; }\n.bi-clipboard2-check-fill::before { content: \"\\f724\"; }\n.bi-clipboard2-check::before { content: \"\\f725\"; }\n.bi-clipboard2-data-fill::before { content: \"\\f726\"; }\n.bi-clipboard2-data::before { content: \"\\f727\"; }\n.bi-clipboard2-fill::before { content: \"\\f728\"; }\n.bi-clipboard2-heart-fill::before { content: \"\\f729\"; }\n.bi-clipboard2-heart::before { content: \"\\f72a\"; }\n.bi-clipboard2-minus-fill::before { content: \"\\f72b\"; }\n.bi-clipboard2-minus::before { content: \"\\f72c\"; }\n.bi-clipboard2-plus-fill::before { content: \"\\f72d\"; }\n.bi-clipboard2-plus::before { content: \"\\f72e\"; }\n.bi-clipboard2-pulse-fill::before { content: \"\\f72f\"; }\n.bi-clipboard2-pulse::before { content: \"\\f730\"; }\n.bi-clipboard2-x-fill::before { content: \"\\f731\"; }\n.bi-clipboard2-x::before { content: \"\\f732\"; }\n.bi-clipboard2::before { content: \"\\f733\"; }\n.bi-emoji-kiss-fill::before { content: \"\\f734\"; }\n.bi-emoji-kiss::before { content: \"\\f735\"; }\n.bi-envelope-heart-fill::before { content: \"\\f736\"; }\n.bi-envelope-heart::before { content: \"\\f737\"; }\n.bi-envelope-open-heart-fill::before { content: \"\\f738\"; }\n.bi-envelope-open-heart::before { content: \"\\f739\"; }\n.bi-envelope-paper-fill::before { content: \"\\f73a\"; }\n.bi-envelope-paper-heart-fill::before { content: \"\\f73b\"; }\n.bi-envelope-paper-heart::before { content: \"\\f73c\"; }\n.bi-envelope-paper::before { content: \"\\f73d\"; }\n.bi-filetype-aac::before { content: \"\\f73e\"; }\n.bi-filetype-ai::before { content: \"\\f73f\"; }\n.bi-filetype-bmp::before { content: \"\\f740\"; }\n.bi-filetype-cs::before { content: \"\\f741\"; }\n.bi-filetype-css::before { content: \"\\f742\"; }\n.bi-filetype-csv::before { content: \"\\f743\"; }\n.bi-filetype-doc::before { content: \"\\f744\"; }\n.bi-filetype-docx::before { content: \"\\f745\"; }\n.bi-filetype-exe::before { content: \"\\f746\"; }\n.bi-filetype-gif::before { content: \"\\f747\"; }\n.bi-filetype-heic::before { content: \"\\f748\"; }\n.bi-filetype-html::before { content: \"\\f749\"; }\n.bi-filetype-java::before { content: \"\\f74a\"; }\n.bi-filetype-jpg::before { content: \"\\f74b\"; }\n.bi-filetype-js::before { content: \"\\f74c\"; }\n.bi-filetype-jsx::before { content: \"\\f74d\"; }\n.bi-filetype-key::before { content: \"\\f74e\"; }\n.bi-filetype-m4p::before { content: \"\\f74f\"; }\n.bi-filetype-md::before { content: \"\\f750\"; }\n.bi-filetype-mdx::before { content: \"\\f751\"; }\n.bi-filetype-mov::before { content: \"\\f752\"; }\n.bi-filetype-mp3::before { content: \"\\f753\"; }\n.bi-filetype-mp4::before { content: \"\\f754\"; }\n.bi-filetype-otf::before { content: \"\\f755\"; }\n.bi-filetype-pdf::before { content: \"\\f756\"; }\n.bi-filetype-php::before { content: \"\\f757\"; }\n.bi-filetype-png::before { content: \"\\f758\"; }\n.bi-filetype-ppt::before { content: \"\\f75a\"; }\n.bi-filetype-psd::before { content: \"\\f75b\"; }\n.bi-filetype-py::before { content: \"\\f75c\"; }\n.bi-filetype-raw::before { content: \"\\f75d\"; }\n.bi-filetype-rb::before { content: \"\\f75e\"; }\n.bi-filetype-sass::before { content: \"\\f75f\"; }\n.bi-filetype-scss::before { content: \"\\f760\"; }\n.bi-filetype-sh::before { content: \"\\f761\"; }\n.bi-filetype-svg::before { content: \"\\f762\"; }\n.bi-filetype-tiff::before { content: \"\\f763\"; }\n.bi-filetype-tsx::before { content: \"\\f764\"; }\n.bi-filetype-ttf::before { content: \"\\f765\"; }\n.bi-filetype-txt::before { content: \"\\f766\"; }\n.bi-filetype-wav::before { content: \"\\f767\"; }\n.bi-filetype-woff::before { content: \"\\f768\"; }\n.bi-filetype-xls::before { content: \"\\f76a\"; }\n.bi-filetype-xml::before { content: \"\\f76b\"; }\n.bi-filetype-yml::before { content: \"\\f76c\"; }\n.bi-heart-arrow::before { content: \"\\f76d\"; }\n.bi-heart-pulse-fill::before { content: \"\\f76e\"; }\n.bi-heart-pulse::before { content: \"\\f76f\"; }\n.bi-heartbreak-fill::before { content: \"\\f770\"; }\n.bi-heartbreak::before { content: \"\\f771\"; }\n.bi-hearts::before { content: \"\\f772\"; }\n.bi-hospital-fill::before { content: \"\\f773\"; }\n.bi-hospital::before { content: \"\\f774\"; }\n.bi-house-heart-fill::before { content: \"\\f775\"; }\n.bi-house-heart::before { content: \"\\f776\"; }\n.bi-incognito::before { content: \"\\f777\"; }\n.bi-magnet-fill::before { content: \"\\f778\"; }\n.bi-magnet::before { content: \"\\f779\"; }\n.bi-person-heart::before { content: \"\\f77a\"; }\n.bi-person-hearts::before { content: \"\\f77b\"; }\n.bi-phone-flip::before { content: \"\\f77c\"; }\n.bi-plugin::before { content: \"\\f77d\"; }\n.bi-postage-fill::before { content: \"\\f77e\"; }\n.bi-postage-heart-fill::before { content: \"\\f77f\"; }\n.bi-postage-heart::before { content: \"\\f780\"; }\n.bi-postage::before { content: \"\\f781\"; }\n.bi-postcard-fill::before { content: \"\\f782\"; }\n.bi-postcard-heart-fill::before { content: \"\\f783\"; }\n.bi-postcard-heart::before { content: \"\\f784\"; }\n.bi-postcard::before { content: \"\\f785\"; }\n.bi-search-heart-fill::before { content: \"\\f786\"; }\n.bi-search-heart::before { content: \"\\f787\"; }\n.bi-sliders2-vertical::before { content: \"\\f788\"; }\n.bi-sliders2::before { content: \"\\f789\"; }\n.bi-trash3-fill::before { content: \"\\f78a\"; }\n.bi-trash3::before { content: \"\\f78b\"; }\n.bi-valentine::before { content: \"\\f78c\"; }\n.bi-valentine2::before { content: \"\\f78d\"; }\n.bi-wrench-adjustable-circle-fill::before { content: \"\\f78e\"; }\n.bi-wrench-adjustable-circle::before { content: \"\\f78f\"; }\n.bi-wrench-adjustable::before { content: \"\\f790\"; }\n.bi-filetype-json::before { content: \"\\f791\"; }\n.bi-filetype-pptx::before { content: \"\\f792\"; }\n.bi-filetype-xlsx::before { content: \"\\f793\"; }\n.bi-1-circle-fill::before { content: \"\\f796\"; }\n.bi-1-circle::before { content: \"\\f797\"; }\n.bi-1-square-fill::before { content: \"\\f798\"; }\n.bi-1-square::before { content: \"\\f799\"; }\n.bi-2-circle-fill::before { content: \"\\f79c\"; }\n.bi-2-circle::before { content: \"\\f79d\"; }\n.bi-2-square-fill::before { content: \"\\f79e\"; }\n.bi-2-square::before { content: \"\\f79f\"; }\n.bi-3-circle-fill::before { content: \"\\f7a2\"; }\n.bi-3-circle::before { content: \"\\f7a3\"; }\n.bi-3-square-fill::before { content: \"\\f7a4\"; }\n.bi-3-square::before { content: \"\\f7a5\"; }\n.bi-4-circle-fill::before { content: \"\\f7a8\"; }\n.bi-4-circle::before { content: \"\\f7a9\"; }\n.bi-4-square-fill::before { content: \"\\f7aa\"; }\n.bi-4-square::before { content: \"\\f7ab\"; }\n.bi-5-circle-fill::before { content: \"\\f7ae\"; }\n.bi-5-circle::before { content: \"\\f7af\"; }\n.bi-5-square-fill::before { content: \"\\f7b0\"; }\n.bi-5-square::before { content: \"\\f7b1\"; }\n.bi-6-circle-fill::before { content: \"\\f7b4\"; }\n.bi-6-circle::before { content: \"\\f7b5\"; }\n.bi-6-square-fill::before { content: \"\\f7b6\"; }\n.bi-6-square::before { content: \"\\f7b7\"; }\n.bi-7-circle-fill::before { content: \"\\f7ba\"; }\n.bi-7-circle::before { content: \"\\f7bb\"; }\n.bi-7-square-fill::before { content: \"\\f7bc\"; }\n.bi-7-square::before { content: \"\\f7bd\"; }\n.bi-8-circle-fill::before { content: \"\\f7c0\"; }\n.bi-8-circle::before { content: \"\\f7c1\"; }\n.bi-8-square-fill::before { content: \"\\f7c2\"; }\n.bi-8-square::before { content: \"\\f7c3\"; }\n.bi-9-circle-fill::before { content: \"\\f7c6\"; }\n.bi-9-circle::before { content: \"\\f7c7\"; }\n.bi-9-square-fill::before { content: \"\\f7c8\"; }\n.bi-9-square::before { content: \"\\f7c9\"; }\n.bi-airplane-engines-fill::before { content: \"\\f7ca\"; }\n.bi-airplane-engines::before { content: \"\\f7cb\"; }\n.bi-airplane-fill::before { content: \"\\f7cc\"; }\n.bi-airplane::before { content: \"\\f7cd\"; }\n.bi-alexa::before { content: \"\\f7ce\"; }\n.bi-alipay::before { content: \"\\f7cf\"; }\n.bi-android::before { content: \"\\f7d0\"; }\n.bi-android2::before { content: \"\\f7d1\"; }\n.bi-box-fill::before { content: \"\\f7d2\"; }\n.bi-box-seam-fill::before { content: \"\\f7d3\"; }\n.bi-browser-chrome::before { content: \"\\f7d4\"; }\n.bi-browser-edge::before { content: \"\\f7d5\"; }\n.bi-browser-firefox::before { content: \"\\f7d6\"; }\n.bi-browser-safari::before { content: \"\\f7d7\"; }\n.bi-c-circle-fill::before { content: \"\\f7da\"; }\n.bi-c-circle::before { content: \"\\f7db\"; }\n.bi-c-square-fill::before { content: \"\\f7dc\"; }\n.bi-c-square::before { content: \"\\f7dd\"; }\n.bi-capsule-pill::before { content: \"\\f7de\"; }\n.bi-capsule::before { content: \"\\f7df\"; }\n.bi-car-front-fill::before { content: \"\\f7e0\"; }\n.bi-car-front::before { content: \"\\f7e1\"; }\n.bi-cassette-fill::before { content: \"\\f7e2\"; }\n.bi-cassette::before { content: \"\\f7e3\"; }\n.bi-cc-circle-fill::before { content: \"\\f7e6\"; }\n.bi-cc-circle::before { content: \"\\f7e7\"; }\n.bi-cc-square-fill::before { content: \"\\f7e8\"; }\n.bi-cc-square::before { content: \"\\f7e9\"; }\n.bi-cup-hot-fill::before { content: \"\\f7ea\"; }\n.bi-cup-hot::before { content: \"\\f7eb\"; }\n.bi-currency-rupee::before { content: \"\\f7ec\"; }\n.bi-dropbox::before { content: \"\\f7ed\"; }\n.bi-escape::before { content: \"\\f7ee\"; }\n.bi-fast-forward-btn-fill::before { content: \"\\f7ef\"; }\n.bi-fast-forward-btn::before { content: \"\\f7f0\"; }\n.bi-fast-forward-circle-fill::before { content: \"\\f7f1\"; }\n.bi-fast-forward-circle::before { content: \"\\f7f2\"; }\n.bi-fast-forward-fill::before { content: \"\\f7f3\"; }\n.bi-fast-forward::before { content: \"\\f7f4\"; }\n.bi-filetype-sql::before { content: \"\\f7f5\"; }\n.bi-fire::before { content: \"\\f7f6\"; }\n.bi-google-play::before { content: \"\\f7f7\"; }\n.bi-h-circle-fill::before { content: \"\\f7fa\"; }\n.bi-h-circle::before { content: \"\\f7fb\"; }\n.bi-h-square-fill::before { content: \"\\f7fc\"; }\n.bi-h-square::before { content: \"\\f7fd\"; }\n.bi-indent::before { content: \"\\f7fe\"; }\n.bi-lungs-fill::before { content: \"\\f7ff\"; }\n.bi-lungs::before { content: \"\\f800\"; }\n.bi-microsoft-teams::before { content: \"\\f801\"; }\n.bi-p-circle-fill::before { content: \"\\f804\"; }\n.bi-p-circle::before { content: \"\\f805\"; }\n.bi-p-square-fill::before { content: \"\\f806\"; }\n.bi-p-square::before { content: \"\\f807\"; }\n.bi-pass-fill::before { content: \"\\f808\"; }\n.bi-pass::before { content: \"\\f809\"; }\n.bi-prescription::before { content: \"\\f80a\"; }\n.bi-prescription2::before { content: \"\\f80b\"; }\n.bi-r-circle-fill::before { content: \"\\f80e\"; }\n.bi-r-circle::before { content: \"\\f80f\"; }\n.bi-r-square-fill::before { content: \"\\f810\"; }\n.bi-r-square::before { content: \"\\f811\"; }\n.bi-repeat-1::before { content: \"\\f812\"; }\n.bi-repeat::before { content: \"\\f813\"; }\n.bi-rewind-btn-fill::before { content: \"\\f814\"; }\n.bi-rewind-btn::before { content: \"\\f815\"; }\n.bi-rewind-circle-fill::before { content: \"\\f816\"; }\n.bi-rewind-circle::before { content: \"\\f817\"; }\n.bi-rewind-fill::before { content: \"\\f818\"; }\n.bi-rewind::before { content: \"\\f819\"; }\n.bi-train-freight-front-fill::before { content: \"\\f81a\"; }\n.bi-train-freight-front::before { content: \"\\f81b\"; }\n.bi-train-front-fill::before { content: \"\\f81c\"; }\n.bi-train-front::before { content: \"\\f81d\"; }\n.bi-train-lightrail-front-fill::before { content: \"\\f81e\"; }\n.bi-train-lightrail-front::before { content: \"\\f81f\"; }\n.bi-truck-front-fill::before { content: \"\\f820\"; }\n.bi-truck-front::before { content: \"\\f821\"; }\n.bi-ubuntu::before { content: \"\\f822\"; }\n.bi-unindent::before { content: \"\\f823\"; }\n.bi-unity::before { content: \"\\f824\"; }\n.bi-universal-access-circle::before { content: \"\\f825\"; }\n.bi-universal-access::before { content: \"\\f826\"; }\n.bi-virus::before { content: \"\\f827\"; }\n.bi-virus2::before { content: \"\\f828\"; }\n.bi-wechat::before { content: \"\\f829\"; }\n.bi-yelp::before { content: \"\\f82a\"; }\n.bi-sign-stop-fill::before { content: \"\\f82b\"; }\n.bi-sign-stop-lights-fill::before { content: \"\\f82c\"; }\n.bi-sign-stop-lights::before { content: \"\\f82d\"; }\n.bi-sign-stop::before { content: \"\\f82e\"; }\n.bi-sign-turn-left-fill::before { content: \"\\f82f\"; }\n.bi-sign-turn-left::before { content: \"\\f830\"; }\n.bi-sign-turn-right-fill::before { content: \"\\f831\"; }\n.bi-sign-turn-right::before { content: \"\\f832\"; }\n.bi-sign-turn-slight-left-fill::before { content: \"\\f833\"; }\n.bi-sign-turn-slight-left::before { content: \"\\f834\"; }\n.bi-sign-turn-slight-right-fill::before { content: \"\\f835\"; }\n.bi-sign-turn-slight-right::before { content: \"\\f836\"; }\n.bi-sign-yield-fill::before { content: \"\\f837\"; }\n.bi-sign-yield::before { content: \"\\f838\"; }\n.bi-ev-station-fill::before { content: \"\\f839\"; }\n.bi-ev-station::before { content: \"\\f83a\"; }\n.bi-fuel-pump-diesel-fill::before { content: \"\\f83b\"; }\n.bi-fuel-pump-diesel::before { content: \"\\f83c\"; }\n.bi-fuel-pump-fill::before { content: \"\\f83d\"; }\n.bi-fuel-pump::before { content: \"\\f83e\"; }\n.bi-0-circle-fill::before { content: \"\\f83f\"; }\n.bi-0-circle::before { content: \"\\f840\"; }\n.bi-0-square-fill::before { content: \"\\f841\"; }\n.bi-0-square::before { content: \"\\f842\"; }\n.bi-rocket-fill::before { content: \"\\f843\"; }\n.bi-rocket-takeoff-fill::before { content: \"\\f844\"; }\n.bi-rocket-takeoff::before { content: \"\\f845\"; }\n.bi-rocket::before { content: \"\\f846\"; }\n.bi-stripe::before { content: \"\\f847\"; }\n.bi-subscript::before { content: \"\\f848\"; }\n.bi-superscript::before { content: \"\\f849\"; }\n.bi-trello::before { content: \"\\f84a\"; }\n.bi-envelope-at-fill::before { content: \"\\f84b\"; }\n.bi-envelope-at::before { content: \"\\f84c\"; }\n.bi-regex::before { content: \"\\f84d\"; }\n.bi-text-wrap::before { content: \"\\f84e\"; }\n.bi-sign-dead-end-fill::before { content: \"\\f84f\"; }\n.bi-sign-dead-end::before { content: \"\\f850\"; }\n.bi-sign-do-not-enter-fill::before { content: \"\\f851\"; }\n.bi-sign-do-not-enter::before { content: \"\\f852\"; }\n.bi-sign-intersection-fill::before { content: \"\\f853\"; }\n.bi-sign-intersection-side-fill::before { content: \"\\f854\"; }\n.bi-sign-intersection-side::before { content: \"\\f855\"; }\n.bi-sign-intersection-t-fill::before { content: \"\\f856\"; }\n.bi-sign-intersection-t::before { content: \"\\f857\"; }\n.bi-sign-intersection-y-fill::before { content: \"\\f858\"; }\n.bi-sign-intersection-y::before { content: \"\\f859\"; }\n.bi-sign-intersection::before { content: \"\\f85a\"; }\n.bi-sign-merge-left-fill::before { content: \"\\f85b\"; }\n.bi-sign-merge-left::before { content: \"\\f85c\"; }\n.bi-sign-merge-right-fill::before { content: \"\\f85d\"; }\n.bi-sign-merge-right::before { content: \"\\f85e\"; }\n.bi-sign-no-left-turn-fill::before { content: \"\\f85f\"; }\n.bi-sign-no-left-turn::before { content: \"\\f860\"; }\n.bi-sign-no-parking-fill::before { content: \"\\f861\"; }\n.bi-sign-no-parking::before { content: \"\\f862\"; }\n.bi-sign-no-right-turn-fill::before { content: \"\\f863\"; }\n.bi-sign-no-right-turn::before { content: \"\\f864\"; }\n.bi-sign-railroad-fill::before { content: \"\\f865\"; }\n.bi-sign-railroad::before { content: \"\\f866\"; }\n.bi-building-add::before { content: \"\\f867\"; }\n.bi-building-check::before { content: \"\\f868\"; }\n.bi-building-dash::before { content: \"\\f869\"; }\n.bi-building-down::before { content: \"\\f86a\"; }\n.bi-building-exclamation::before { content: \"\\f86b\"; }\n.bi-building-fill-add::before { content: \"\\f86c\"; }\n.bi-building-fill-check::before { content: \"\\f86d\"; }\n.bi-building-fill-dash::before { content: \"\\f86e\"; }\n.bi-building-fill-down::before { content: \"\\f86f\"; }\n.bi-building-fill-exclamation::before { content: \"\\f870\"; }\n.bi-building-fill-gear::before { content: \"\\f871\"; }\n.bi-building-fill-lock::before { content: \"\\f872\"; }\n.bi-building-fill-slash::before { content: \"\\f873\"; }\n.bi-building-fill-up::before { content: \"\\f874\"; }\n.bi-building-fill-x::before { content: \"\\f875\"; }\n.bi-building-fill::before { content: \"\\f876\"; }\n.bi-building-gear::before { content: \"\\f877\"; }\n.bi-building-lock::before { content: \"\\f878\"; }\n.bi-building-slash::before { content: \"\\f879\"; }\n.bi-building-up::before { content: \"\\f87a\"; }\n.bi-building-x::before { content: \"\\f87b\"; }\n.bi-buildings-fill::before { content: \"\\f87c\"; }\n.bi-buildings::before { content: \"\\f87d\"; }\n.bi-bus-front-fill::before { content: \"\\f87e\"; }\n.bi-bus-front::before { content: \"\\f87f\"; }\n.bi-ev-front-fill::before { content: \"\\f880\"; }\n.bi-ev-front::before { content: \"\\f881\"; }\n.bi-globe-americas::before { content: \"\\f882\"; }\n.bi-globe-asia-australia::before { content: \"\\f883\"; }\n.bi-globe-central-south-asia::before { content: \"\\f884\"; }\n.bi-globe-europe-africa::before { content: \"\\f885\"; }\n.bi-house-add-fill::before { content: \"\\f886\"; }\n.bi-house-add::before { content: \"\\f887\"; }\n.bi-house-check-fill::before { content: \"\\f888\"; }\n.bi-house-check::before { content: \"\\f889\"; }\n.bi-house-dash-fill::before { content: \"\\f88a\"; }\n.bi-house-dash::before { content: \"\\f88b\"; }\n.bi-house-down-fill::before { content: \"\\f88c\"; }\n.bi-house-down::before { content: \"\\f88d\"; }\n.bi-house-exclamation-fill::before { content: \"\\f88e\"; }\n.bi-house-exclamation::before { content: \"\\f88f\"; }\n.bi-house-gear-fill::before { content: \"\\f890\"; }\n.bi-house-gear::before { content: \"\\f891\"; }\n.bi-house-lock-fill::before { content: \"\\f892\"; }\n.bi-house-lock::before { content: \"\\f893\"; }\n.bi-house-slash-fill::before { content: \"\\f894\"; }\n.bi-house-slash::before { content: \"\\f895\"; }\n.bi-house-up-fill::before { content: \"\\f896\"; }\n.bi-house-up::before { content: \"\\f897\"; }\n.bi-house-x-fill::before { content: \"\\f898\"; }\n.bi-house-x::before { content: \"\\f899\"; }\n.bi-person-add::before { content: \"\\f89a\"; }\n.bi-person-down::before { content: \"\\f89b\"; }\n.bi-person-exclamation::before { content: \"\\f89c\"; }\n.bi-person-fill-add::before { content: \"\\f89d\"; }\n.bi-person-fill-check::before { content: \"\\f89e\"; }\n.bi-person-fill-dash::before { content: \"\\f89f\"; }\n.bi-person-fill-down::before { content: \"\\f8a0\"; }\n.bi-person-fill-exclamation::before { content: \"\\f8a1\"; }\n.bi-person-fill-gear::before { content: \"\\f8a2\"; }\n.bi-person-fill-lock::before { content: \"\\f8a3\"; }\n.bi-person-fill-slash::before { content: \"\\f8a4\"; }\n.bi-person-fill-up::before { content: \"\\f8a5\"; }\n.bi-person-fill-x::before { content: \"\\f8a6\"; }\n.bi-person-gear::before { content: \"\\f8a7\"; }\n.bi-person-lock::before { content: \"\\f8a8\"; }\n.bi-person-slash::before { content: \"\\f8a9\"; }\n.bi-person-up::before { content: \"\\f8aa\"; }\n.bi-scooter::before { content: \"\\f8ab\"; }\n.bi-taxi-front-fill::before { content: \"\\f8ac\"; }\n.bi-taxi-front::before { content: \"\\f8ad\"; }\n.bi-amd::before { content: \"\\f8ae\"; }\n.bi-database-add::before { content: \"\\f8af\"; }\n.bi-database-check::before { content: \"\\f8b0\"; }\n.bi-database-dash::before { content: \"\\f8b1\"; }\n.bi-database-down::before { content: \"\\f8b2\"; }\n.bi-database-exclamation::before { content: \"\\f8b3\"; }\n.bi-database-fill-add::before { content: \"\\f8b4\"; }\n.bi-database-fill-check::before { content: \"\\f8b5\"; }\n.bi-database-fill-dash::before { content: \"\\f8b6\"; }\n.bi-database-fill-down::before { content: \"\\f8b7\"; }\n.bi-database-fill-exclamation::before { content: \"\\f8b8\"; }\n.bi-database-fill-gear::before { content: \"\\f8b9\"; }\n.bi-database-fill-lock::before { content: \"\\f8ba\"; }\n.bi-database-fill-slash::before { content: \"\\f8bb\"; }\n.bi-database-fill-up::before { content: \"\\f8bc\"; }\n.bi-database-fill-x::before { content: \"\\f8bd\"; }\n.bi-database-fill::before { content: \"\\f8be\"; }\n.bi-database-gear::before { content: \"\\f8bf\"; }\n.bi-database-lock::before { content: \"\\f8c0\"; }\n.bi-database-slash::before { content: \"\\f8c1\"; }\n.bi-database-up::before { content: \"\\f8c2\"; }\n.bi-database-x::before { content: \"\\f8c3\"; }\n.bi-database::before { content: \"\\f8c4\"; }\n.bi-houses-fill::before { content: \"\\f8c5\"; }\n.bi-houses::before { content: \"\\f8c6\"; }\n.bi-nvidia::before { content: \"\\f8c7\"; }\n.bi-person-vcard-fill::before { content: \"\\f8c8\"; }\n.bi-person-vcard::before { content: \"\\f8c9\"; }\n.bi-sina-weibo::before { content: \"\\f8ca\"; }\n.bi-tencent-qq::before { content: \"\\f8cb\"; }\n.bi-wikipedia::before { content: \"\\f8cc\"; }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/vendor/boxicons/css/boxicons.min.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./public/vendor/boxicons/css/boxicons.min.css ***!
  \*******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_boxicons_eot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/boxicons.eot */ "./public/vendor/boxicons/fonts/boxicons.eot");
/* harmony import */ var _fonts_boxicons_eot__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fonts_boxicons_eot__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fonts_boxicons_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts/boxicons.woff2 */ "./public/vendor/boxicons/fonts/boxicons.woff2");
/* harmony import */ var _fonts_boxicons_woff2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fonts_boxicons_woff2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fonts_boxicons_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/boxicons.woff */ "./public/vendor/boxicons/fonts/boxicons.woff");
/* harmony import */ var _fonts_boxicons_woff__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fonts_boxicons_woff__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fonts_boxicons_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/boxicons.ttf */ "./public/vendor/boxicons/fonts/boxicons.ttf");
/* harmony import */ var _fonts_boxicons_ttf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fonts_boxicons_ttf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fonts_boxicons_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fonts/boxicons.svg */ "./public/vendor/boxicons/fonts/boxicons.svg");
/* harmony import */ var _fonts_boxicons_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fonts_boxicons_svg__WEBPACK_IMPORTED_MODULE_6__);
// Imports







var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()((_fonts_boxicons_eot__WEBPACK_IMPORTED_MODULE_2___default()));
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()((_fonts_boxicons_woff2__WEBPACK_IMPORTED_MODULE_3___default()));
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()((_fonts_boxicons_woff__WEBPACK_IMPORTED_MODULE_4___default()));
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()((_fonts_boxicons_ttf__WEBPACK_IMPORTED_MODULE_5___default()));
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()((_fonts_boxicons_svg__WEBPACK_IMPORTED_MODULE_6___default()), { hash: "?#boxicons" });
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face{font-family:boxicons;font-weight:400;font-style:normal;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('embedded-opentype'),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff2'),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff'),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('truetype'),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('svg')}.bx{font-family:boxicons!important;font-weight:400;font-style:normal;font-variant:normal;line-height:1;text-rendering:auto;display:inline-block;text-transform:none;speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bx-ul{margin-left:2em;padding-left:0;list-style:none}.bx-ul>li{position:relative}.bx-ul .bx{font-size:inherit;line-height:inherit;position:absolute;left:-2em;width:2em;text-align:center}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate3d(0,0,1,-10deg);transform:scale3d(.95,.95,.95) rotate3d(0,0,1,-10deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1,1,1) rotate3d(0,0,1,10deg);transform:scale3d(1,1,1) rotate3d(0,0,1,10deg)}40%,60%,80%{-webkit-transform:scale3d(1,1,1) rotate3d(0,0,1,-10deg);transform:scale3d(1,1,1) rotate3d(0,0,1,-10deg)}to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes tada{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate3d(0,0,1,-10deg);transform:scale3d(.95,.95,.95) rotate3d(0,0,1,-10deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1,1,1) rotate3d(0,0,1,10deg);transform:scale3d(1,1,1) rotate3d(0,0,1,10deg)}40%,60%,80%{-webkit-transform:rotate3d(0,0,1,-10deg);transform:rotate3d(0,0,1,-10deg)}to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}.bx-spin{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}.bx-xs{font-size:1rem!important}.bx-sm{font-size:1.55rem!important}.bx-md{font-size:2.25rem!important}.bx-lg{font-size:3rem!important}.bx-fw{font-size:1.2857142857em;line-height:.8em;width:1.2857142857em;height:.8em;margin-top:-.2em!important;vertical-align:middle}.bx-pull-left{float:left;margin-right:.3em!important}.bx-pull-right{float:right;margin-left:.3em!important}.bx-rotate-90{transform:rotate(90deg)}.bx-rotate-180{transform:rotate(180deg)}.bx-rotate-270{transform:rotate(270deg)}.bx-flip-horizontal{transform:scaleX(-1)}.bx-flip-vertical{transform:scaleY(-1)}.bx-border{padding:.25em;border:.07em solid rgba(0,0,0,.1);border-radius:.25em}.bx-border-circle{padding:.25em;border:.07em solid rgba(0,0,0,.1);border-radius:50%}.bxs-balloon:before{content:\"\\eb60\"}.bxs-castle:before{content:\"\\eb79\"}.bxs-coffee-bean:before{content:\"\\eb92\"}.bxs-objects-horizontal-center:before{content:\"\\ebab\"}.bxs-objects-horizontal-left:before{content:\"\\ebc4\"}.bxs-objects-horizontal-right:before{content:\"\\ebdd\"}.bxs-objects-vertical-bottom:before{content:\"\\ebf6\"}.bxs-objects-vertical-center:before{content:\"\\ef40\"}.bxs-objects-vertical-top:before{content:\"\\ef41\"}.bxs-pear:before{content:\"\\ef42\"}.bxs-shield-minus:before{content:\"\\ef43\"}.bxs-shield-plus:before{content:\"\\ef44\"}.bxs-shower:before{content:\"\\ef45\"}.bxs-sushi:before{content:\"\\ef46\"}.bxs-universal-access:before{content:\"\\ef47\"}.bx-child:before{content:\"\\ef48\"}.bx-horizontal-left:before{content:\"\\ef49\"}.bx-horizontal-right:before{content:\"\\ef4a\"}.bx-objects-horizontal-center:before{content:\"\\ef4b\"}.bx-objects-horizontal-left:before{content:\"\\ef4c\"}.bx-objects-horizontal-right:before{content:\"\\ef4d\"}.bx-objects-vertical-bottom:before{content:\"\\ef4e\"}.bx-objects-vertical-center:before{content:\"\\ef4f\"}.bx-objects-vertical-top:before{content:\"\\ef50\"}.bx-rfid:before{content:\"\\ef51\"}.bx-shield-minus:before{content:\"\\ef52\"}.bx-shield-plus:before{content:\"\\ef53\"}.bx-shower:before{content:\"\\ef54\"}.bx-sushi:before{content:\"\\ef55\"}.bx-universal-access:before{content:\"\\ef56\"}.bx-vertical-bottom:before{content:\"\\ef57\"}.bx-vertical-top:before{content:\"\\ef58\"}.bxl-graphql:before{content:\"\\ef59\"}.bxl-typescript:before{content:\"\\ef5a\"}.bxs-color:before{content:\"\\ef39\"}.bx-reflect-horizontal:before{content:\"\\ef3a\"}.bx-reflect-vertical:before{content:\"\\ef3b\"}.bx-color:before{content:\"\\ef3c\"}.bxl-mongodb:before{content:\"\\ef3d\"}.bxl-postgresql:before{content:\"\\ef3e\"}.bxl-deezer:before{content:\"\\ef3f\"}.bxs-hard-hat:before{content:\"\\ef2a\"}.bxs-home-alt-2:before{content:\"\\ef2b\"}.bxs-cheese:before{content:\"\\ef2c\"}.bx-home-alt-2:before{content:\"\\ef2d\"}.bx-hard-hat:before{content:\"\\ef2e\"}.bx-cheese:before{content:\"\\ef2f\"}.bx-cart-add:before{content:\"\\ef30\"}.bx-cart-download:before{content:\"\\ef31\"}.bx-no-signal:before{content:\"\\ef32\"}.bx-signal-1:before{content:\"\\ef33\"}.bx-signal-2:before{content:\"\\ef34\"}.bx-signal-3:before{content:\"\\ef35\"}.bx-signal-4:before{content:\"\\ef36\"}.bx-signal-5:before{content:\"\\ef37\"}.bxl-xing:before{content:\"\\ef38\"}.bxl-meta:before{content:\"\\ef27\"}.bx-lemon:before{content:\"\\ef28\"}.bxs-lemon:before{content:\"\\ef29\"}.bx-cricket-ball:before{content:\"\\ef0c\"}.bx-baguette:before{content:\"\\ef0d\"}.bx-bowl-hot:before{content:\"\\ef0e\"}.bx-bowl-rice:before{content:\"\\ef0f\"}.bx-cable-car:before{content:\"\\ef10\"}.bx-candles:before{content:\"\\ef11\"}.bx-circle-half:before{content:\"\\ef12\"}.bx-circle-quarter:before{content:\"\\ef13\"}.bx-circle-three-quarter:before{content:\"\\ef14\"}.bx-cross:before{content:\"\\ef15\"}.bx-fork:before{content:\"\\ef16\"}.bx-knife:before{content:\"\\ef17\"}.bx-money-withdraw:before{content:\"\\ef18\"}.bx-popsicle:before{content:\"\\ef19\"}.bx-scatter-chart:before{content:\"\\ef1a\"}.bxs-baguette:before{content:\"\\ef1b\"}.bxs-bowl-hot:before{content:\"\\ef1c\"}.bxs-bowl-rice:before{content:\"\\ef1d\"}.bxs-cable-car:before{content:\"\\ef1e\"}.bxs-circle-half:before{content:\"\\ef1f\"}.bxs-circle-quarter:before{content:\"\\ef20\"}.bxs-circle-three-quarter:before{content:\"\\ef21\"}.bxs-cricket-ball:before{content:\"\\ef22\"}.bxs-invader:before{content:\"\\ef23\"}.bx-male-female:before{content:\"\\ef24\"}.bxs-popsicle:before{content:\"\\ef25\"}.bxs-tree-alt:before{content:\"\\ef26\"}.bxl-venmo:before{content:\"\\e900\"}.bxl-upwork:before{content:\"\\e901\"}.bxl-netlify:before{content:\"\\e902\"}.bxl-java:before{content:\"\\e903\"}.bxl-heroku:before{content:\"\\e904\"}.bxl-go-lang:before{content:\"\\e905\"}.bxl-gmail:before{content:\"\\e906\"}.bxl-flask:before{content:\"\\e907\"}.bxl-99designs:before{content:\"\\e908\"}.bxl-500px:before{content:\"\\e909\"}.bxl-adobe:before{content:\"\\e90a\"}.bxl-airbnb:before{content:\"\\e90b\"}.bxl-algolia:before{content:\"\\e90c\"}.bxl-amazon:before{content:\"\\e90d\"}.bxl-android:before{content:\"\\e90e\"}.bxl-angular:before{content:\"\\e90f\"}.bxl-apple:before{content:\"\\e910\"}.bxl-audible:before{content:\"\\e911\"}.bxl-aws:before{content:\"\\e912\"}.bxl-baidu:before{content:\"\\e913\"}.bxl-behance:before{content:\"\\e914\"}.bxl-bing:before{content:\"\\e915\"}.bxl-bitcoin:before{content:\"\\e916\"}.bxl-blender:before{content:\"\\e917\"}.bxl-blogger:before{content:\"\\e918\"}.bxl-bootstrap:before{content:\"\\e919\"}.bxl-chrome:before{content:\"\\e91a\"}.bxl-codepen:before{content:\"\\e91b\"}.bxl-c-plus-plus:before{content:\"\\e91c\"}.bxl-creative-commons:before{content:\"\\e91d\"}.bxl-css3:before{content:\"\\e91e\"}.bxl-dailymotion:before{content:\"\\e91f\"}.bxl-deviantart:before{content:\"\\e920\"}.bxl-dev-to:before{content:\"\\e921\"}.bxl-digg:before{content:\"\\e922\"}.bxl-digitalocean:before{content:\"\\e923\"}.bxl-discord:before{content:\"\\e924\"}.bxl-discord-alt:before{content:\"\\e925\"}.bxl-discourse:before{content:\"\\e926\"}.bxl-django:before{content:\"\\e927\"}.bxl-docker:before{content:\"\\e928\"}.bxl-dribbble:before{content:\"\\e929\"}.bxl-dropbox:before{content:\"\\e92a\"}.bxl-drupal:before{content:\"\\e92b\"}.bxl-ebay:before{content:\"\\e92c\"}.bxl-edge:before{content:\"\\e92d\"}.bxl-etsy:before{content:\"\\e92e\"}.bxl-facebook:before{content:\"\\e92f\"}.bxl-facebook-circle:before{content:\"\\e930\"}.bxl-facebook-square:before{content:\"\\e931\"}.bxl-figma:before{content:\"\\e932\"}.bxl-firebase:before{content:\"\\e933\"}.bxl-firefox:before{content:\"\\e934\"}.bxl-flickr:before{content:\"\\e935\"}.bxl-flickr-square:before{content:\"\\e936\"}.bxl-flutter:before{content:\"\\e937\"}.bxl-foursquare:before{content:\"\\e938\"}.bxl-git:before{content:\"\\e939\"}.bxl-github:before{content:\"\\e93a\"}.bxl-gitlab:before{content:\"\\e93b\"}.bxl-google:before{content:\"\\e93c\"}.bxl-google-cloud:before{content:\"\\e93d\"}.bxl-google-plus:before{content:\"\\e93e\"}.bxl-google-plus-circle:before{content:\"\\e93f\"}.bxl-html5:before{content:\"\\e940\"}.bxl-imdb:before{content:\"\\e941\"}.bxl-instagram:before{content:\"\\e942\"}.bxl-instagram-alt:before{content:\"\\e943\"}.bxl-internet-explorer:before{content:\"\\e944\"}.bxl-invision:before{content:\"\\e945\"}.bxl-javascript:before{content:\"\\e946\"}.bxl-joomla:before{content:\"\\e947\"}.bxl-jquery:before{content:\"\\e948\"}.bxl-jsfiddle:before{content:\"\\e949\"}.bxl-kickstarter:before{content:\"\\e94a\"}.bxl-kubernetes:before{content:\"\\e94b\"}.bxl-less:before{content:\"\\e94c\"}.bxl-linkedin:before{content:\"\\e94d\"}.bxl-linkedin-square:before{content:\"\\e94e\"}.bxl-magento:before{content:\"\\e94f\"}.bxl-mailchimp:before{content:\"\\e950\"}.bxl-markdown:before{content:\"\\e951\"}.bxl-mastercard:before{content:\"\\e952\"}.bxl-mastodon:before{content:\"\\e953\"}.bxl-medium:before{content:\"\\e954\"}.bxl-medium-old:before{content:\"\\e955\"}.bxl-medium-square:before{content:\"\\e956\"}.bxl-messenger:before{content:\"\\e957\"}.bxl-microsoft:before{content:\"\\e958\"}.bxl-microsoft-teams:before{content:\"\\e959\"}.bxl-nodejs:before{content:\"\\e95a\"}.bxl-ok-ru:before{content:\"\\e95b\"}.bxl-opera:before{content:\"\\e95c\"}.bxl-patreon:before{content:\"\\e95d\"}.bxl-paypal:before{content:\"\\e95e\"}.bxl-periscope:before{content:\"\\e95f\"}.bxl-php:before{content:\"\\e960\"}.bxl-pinterest:before{content:\"\\e961\"}.bxl-pinterest-alt:before{content:\"\\e962\"}.bxl-play-store:before{content:\"\\e963\"}.bxl-pocket:before{content:\"\\e964\"}.bxl-product-hunt:before{content:\"\\e965\"}.bxl-python:before{content:\"\\e966\"}.bxl-quora:before{content:\"\\e967\"}.bxl-react:before{content:\"\\e968\"}.bxl-redbubble:before{content:\"\\e969\"}.bxl-reddit:before{content:\"\\e96a\"}.bxl-redux:before{content:\"\\e96b\"}.bxl-sass:before{content:\"\\e96c\"}.bxl-shopify:before{content:\"\\e96d\"}.bxl-sketch:before{content:\"\\e96e\"}.bxl-skype:before{content:\"\\e96f\"}.bxl-slack:before{content:\"\\e970\"}.bxl-slack-old:before{content:\"\\e971\"}.bxl-snapchat:before{content:\"\\e972\"}.bxl-soundcloud:before{content:\"\\e973\"}.bxl-spotify:before{content:\"\\e974\"}.bxl-spring-boot:before{content:\"\\e975\"}.bxl-squarespace:before{content:\"\\e976\"}.bxl-stack-overflow:before{content:\"\\e977\"}.bxl-steam:before{content:\"\\e978\"}.bxl-stripe:before{content:\"\\e979\"}.bxl-tailwind-css:before{content:\"\\e97a\"}.bxl-telegram:before{content:\"\\e97b\"}.bxl-tiktok:before{content:\"\\e97c\"}.bxl-trello:before{content:\"\\e97d\"}.bxl-trip-advisor:before{content:\"\\e97e\"}.bxl-tumblr:before{content:\"\\e97f\"}.bxl-tux:before{content:\"\\e980\"}.bxl-twitch:before{content:\"\\e981\"}.bxl-twitter:before{content:\"\\e982\"}.bxl-unity:before{content:\"\\e983\"}.bxl-unsplash:before{content:\"\\e984\"}.bxl-vimeo:before{content:\"\\e985\"}.bxl-visa:before{content:\"\\e986\"}.bxl-visual-studio:before{content:\"\\e987\"}.bxl-vk:before{content:\"\\e988\"}.bxl-vuejs:before{content:\"\\e989\"}.bxl-whatsapp:before{content:\"\\e98a\"}.bxl-whatsapp-square:before{content:\"\\e98b\"}.bxl-wikipedia:before{content:\"\\e98c\"}.bxl-windows:before{content:\"\\e98d\"}.bxl-wix:before{content:\"\\e98e\"}.bxl-wordpress:before{content:\"\\e98f\"}.bxl-yahoo:before{content:\"\\e990\"}.bxl-yelp:before{content:\"\\e991\"}.bxl-youtube:before{content:\"\\e992\"}.bxl-zoom:before{content:\"\\e993\"}.bx-collapse-alt:before{content:\"\\e994\"}.bx-collapse-horizontal:before{content:\"\\e995\"}.bx-collapse-vertical:before{content:\"\\e996\"}.bx-expand-horizontal:before{content:\"\\e997\"}.bx-expand-vertical:before{content:\"\\e998\"}.bx-injection:before{content:\"\\e999\"}.bx-leaf:before{content:\"\\e99a\"}.bx-math:before{content:\"\\e99b\"}.bx-party:before{content:\"\\e99c\"}.bx-abacus:before{content:\"\\e99d\"}.bx-accessibility:before{content:\"\\e99e\"}.bx-add-to-queue:before{content:\"\\e99f\"}.bx-adjust:before{content:\"\\e9a0\"}.bx-alarm:before{content:\"\\e9a1\"}.bx-alarm-add:before{content:\"\\e9a2\"}.bx-alarm-exclamation:before{content:\"\\e9a3\"}.bx-alarm-off:before{content:\"\\e9a4\"}.bx-alarm-snooze:before{content:\"\\e9a5\"}.bx-album:before{content:\"\\e9a6\"}.bx-align-justify:before{content:\"\\e9a7\"}.bx-align-left:before{content:\"\\e9a8\"}.bx-align-middle:before{content:\"\\e9a9\"}.bx-align-right:before{content:\"\\e9aa\"}.bx-analyse:before{content:\"\\e9ab\"}.bx-anchor:before{content:\"\\e9ac\"}.bx-angry:before{content:\"\\e9ad\"}.bx-aperture:before{content:\"\\e9ae\"}.bx-arch:before{content:\"\\e9af\"}.bx-archive:before{content:\"\\e9b0\"}.bx-archive-in:before{content:\"\\e9b1\"}.bx-archive-out:before{content:\"\\e9b2\"}.bx-area:before{content:\"\\e9b3\"}.bx-arrow-back:before{content:\"\\e9b4\"}.bx-arrow-from-bottom:before{content:\"\\e9b5\"}.bx-arrow-from-left:before{content:\"\\e9b6\"}.bx-arrow-from-right:before{content:\"\\e9b7\"}.bx-arrow-from-top:before{content:\"\\e9b8\"}.bx-arrow-to-bottom:before{content:\"\\e9b9\"}.bx-arrow-to-left:before{content:\"\\e9ba\"}.bx-arrow-to-right:before{content:\"\\e9bb\"}.bx-arrow-to-top:before{content:\"\\e9bc\"}.bx-at:before{content:\"\\e9bd\"}.bx-atom:before{content:\"\\e9be\"}.bx-award:before{content:\"\\e9bf\"}.bx-badge:before{content:\"\\e9c0\"}.bx-badge-check:before{content:\"\\e9c1\"}.bx-ball:before{content:\"\\e9c2\"}.bx-band-aid:before{content:\"\\e9c3\"}.bx-bar-chart:before{content:\"\\e9c4\"}.bx-bar-chart-alt:before{content:\"\\e9c5\"}.bx-bar-chart-alt-2:before{content:\"\\e9c6\"}.bx-bar-chart-square:before{content:\"\\e9c7\"}.bx-barcode:before{content:\"\\e9c8\"}.bx-barcode-reader:before{content:\"\\e9c9\"}.bx-baseball:before{content:\"\\e9ca\"}.bx-basket:before{content:\"\\e9cb\"}.bx-basketball:before{content:\"\\e9cc\"}.bx-bath:before{content:\"\\e9cd\"}.bx-battery:before{content:\"\\e9ce\"}.bx-bed:before{content:\"\\e9cf\"}.bx-been-here:before{content:\"\\e9d0\"}.bx-beer:before{content:\"\\e9d1\"}.bx-bell:before{content:\"\\e9d2\"}.bx-bell-minus:before{content:\"\\e9d3\"}.bx-bell-off:before{content:\"\\e9d4\"}.bx-bell-plus:before{content:\"\\e9d5\"}.bx-bible:before{content:\"\\e9d6\"}.bx-bitcoin:before{content:\"\\e9d7\"}.bx-blanket:before{content:\"\\e9d8\"}.bx-block:before{content:\"\\e9d9\"}.bx-bluetooth:before{content:\"\\e9da\"}.bx-body:before{content:\"\\e9db\"}.bx-bold:before{content:\"\\e9dc\"}.bx-bolt-circle:before{content:\"\\e9dd\"}.bx-bomb:before{content:\"\\e9de\"}.bx-bone:before{content:\"\\e9df\"}.bx-bong:before{content:\"\\e9e0\"}.bx-book:before{content:\"\\e9e1\"}.bx-book-add:before{content:\"\\e9e2\"}.bx-book-alt:before{content:\"\\e9e3\"}.bx-book-bookmark:before{content:\"\\e9e4\"}.bx-book-content:before{content:\"\\e9e5\"}.bx-book-heart:before{content:\"\\e9e6\"}.bx-bookmark:before{content:\"\\e9e7\"}.bx-bookmark-alt:before{content:\"\\e9e8\"}.bx-bookmark-alt-minus:before{content:\"\\e9e9\"}.bx-bookmark-alt-plus:before{content:\"\\e9ea\"}.bx-bookmark-heart:before{content:\"\\e9eb\"}.bx-bookmark-minus:before{content:\"\\e9ec\"}.bx-bookmark-plus:before{content:\"\\e9ed\"}.bx-bookmarks:before{content:\"\\e9ee\"}.bx-book-open:before{content:\"\\e9ef\"}.bx-book-reader:before{content:\"\\e9f0\"}.bx-border-all:before{content:\"\\e9f1\"}.bx-border-bottom:before{content:\"\\e9f2\"}.bx-border-inner:before{content:\"\\e9f3\"}.bx-border-left:before{content:\"\\e9f4\"}.bx-border-none:before{content:\"\\e9f5\"}.bx-border-outer:before{content:\"\\e9f6\"}.bx-border-radius:before{content:\"\\e9f7\"}.bx-border-right:before{content:\"\\e9f8\"}.bx-border-top:before{content:\"\\e9f9\"}.bx-bot:before{content:\"\\e9fa\"}.bx-bowling-ball:before{content:\"\\e9fb\"}.bx-box:before{content:\"\\e9fc\"}.bx-bracket:before{content:\"\\e9fd\"}.bx-braille:before{content:\"\\e9fe\"}.bx-brain:before{content:\"\\e9ff\"}.bx-briefcase:before{content:\"\\ea00\"}.bx-briefcase-alt:before{content:\"\\ea01\"}.bx-briefcase-alt-2:before{content:\"\\ea02\"}.bx-brightness:before{content:\"\\ea03\"}.bx-brightness-half:before{content:\"\\ea04\"}.bx-broadcast:before{content:\"\\ea05\"}.bx-brush:before{content:\"\\ea06\"}.bx-brush-alt:before{content:\"\\ea07\"}.bx-bug:before{content:\"\\ea08\"}.bx-bug-alt:before{content:\"\\ea09\"}.bx-building:before{content:\"\\ea0a\"}.bx-building-house:before{content:\"\\ea0b\"}.bx-buildings:before{content:\"\\ea0c\"}.bx-bulb:before{content:\"\\ea0d\"}.bx-bullseye:before{content:\"\\ea0e\"}.bx-buoy:before{content:\"\\ea0f\"}.bx-bus:before{content:\"\\ea10\"}.bx-bus-school:before{content:\"\\ea11\"}.bx-cabinet:before{content:\"\\ea12\"}.bx-cake:before{content:\"\\ea13\"}.bx-calculator:before{content:\"\\ea14\"}.bx-calendar:before{content:\"\\ea15\"}.bx-calendar-alt:before{content:\"\\ea16\"}.bx-calendar-check:before{content:\"\\ea17\"}.bx-calendar-edit:before{content:\"\\ea18\"}.bx-calendar-event:before{content:\"\\ea19\"}.bx-calendar-exclamation:before{content:\"\\ea1a\"}.bx-calendar-heart:before{content:\"\\ea1b\"}.bx-calendar-minus:before{content:\"\\ea1c\"}.bx-calendar-plus:before{content:\"\\ea1d\"}.bx-calendar-star:before{content:\"\\ea1e\"}.bx-calendar-week:before{content:\"\\ea1f\"}.bx-calendar-x:before{content:\"\\ea20\"}.bx-camera:before{content:\"\\ea21\"}.bx-camera-home:before{content:\"\\ea22\"}.bx-camera-movie:before{content:\"\\ea23\"}.bx-camera-off:before{content:\"\\ea24\"}.bx-capsule:before{content:\"\\ea25\"}.bx-captions:before{content:\"\\ea26\"}.bx-car:before{content:\"\\ea27\"}.bx-card:before{content:\"\\ea28\"}.bx-caret-down:before{content:\"\\ea29\"}.bx-caret-down-circle:before{content:\"\\ea2a\"}.bx-caret-down-square:before{content:\"\\ea2b\"}.bx-caret-left:before{content:\"\\ea2c\"}.bx-caret-left-circle:before{content:\"\\ea2d\"}.bx-caret-left-square:before{content:\"\\ea2e\"}.bx-caret-right:before{content:\"\\ea2f\"}.bx-caret-right-circle:before{content:\"\\ea30\"}.bx-caret-right-square:before{content:\"\\ea31\"}.bx-caret-up:before{content:\"\\ea32\"}.bx-caret-up-circle:before{content:\"\\ea33\"}.bx-caret-up-square:before{content:\"\\ea34\"}.bx-carousel:before{content:\"\\ea35\"}.bx-cart:before{content:\"\\ea36\"}.bx-cart-alt:before{content:\"\\ea37\"}.bx-cast:before{content:\"\\ea38\"}.bx-category:before{content:\"\\ea39\"}.bx-category-alt:before{content:\"\\ea3a\"}.bx-cctv:before{content:\"\\ea3b\"}.bx-certification:before{content:\"\\ea3c\"}.bx-chair:before{content:\"\\ea3d\"}.bx-chalkboard:before{content:\"\\ea3e\"}.bx-chart:before{content:\"\\ea3f\"}.bx-chat:before{content:\"\\ea40\"}.bx-check:before{content:\"\\ea41\"}.bx-checkbox:before{content:\"\\ea42\"}.bx-checkbox-checked:before{content:\"\\ea43\"}.bx-checkbox-minus:before{content:\"\\ea44\"}.bx-checkbox-square:before{content:\"\\ea45\"}.bx-check-circle:before{content:\"\\ea46\"}.bx-check-double:before{content:\"\\ea47\"}.bx-check-shield:before{content:\"\\ea48\"}.bx-check-square:before{content:\"\\ea49\"}.bx-chevron-down:before{content:\"\\ea4a\"}.bx-chevron-down-circle:before{content:\"\\ea4b\"}.bx-chevron-down-square:before{content:\"\\ea4c\"}.bx-chevron-left:before{content:\"\\ea4d\"}.bx-chevron-left-circle:before{content:\"\\ea4e\"}.bx-chevron-left-square:before{content:\"\\ea4f\"}.bx-chevron-right:before{content:\"\\ea50\"}.bx-chevron-right-circle:before{content:\"\\ea51\"}.bx-chevron-right-square:before{content:\"\\ea52\"}.bx-chevrons-down:before{content:\"\\ea53\"}.bx-chevrons-left:before{content:\"\\ea54\"}.bx-chevrons-right:before{content:\"\\ea55\"}.bx-chevrons-up:before{content:\"\\ea56\"}.bx-chevron-up:before{content:\"\\ea57\"}.bx-chevron-up-circle:before{content:\"\\ea58\"}.bx-chevron-up-square:before{content:\"\\ea59\"}.bx-chip:before{content:\"\\ea5a\"}.bx-church:before{content:\"\\ea5b\"}.bx-circle:before{content:\"\\ea5c\"}.bx-clinic:before{content:\"\\ea5d\"}.bx-clipboard:before{content:\"\\ea5e\"}.bx-closet:before{content:\"\\ea5f\"}.bx-cloud:before{content:\"\\ea60\"}.bx-cloud-download:before{content:\"\\ea61\"}.bx-cloud-drizzle:before{content:\"\\ea62\"}.bx-cloud-lightning:before{content:\"\\ea63\"}.bx-cloud-light-rain:before{content:\"\\ea64\"}.bx-cloud-rain:before{content:\"\\ea65\"}.bx-cloud-snow:before{content:\"\\ea66\"}.bx-cloud-upload:before{content:\"\\ea67\"}.bx-code:before{content:\"\\ea68\"}.bx-code-alt:before{content:\"\\ea69\"}.bx-code-block:before{content:\"\\ea6a\"}.bx-code-curly:before{content:\"\\ea6b\"}.bx-coffee:before{content:\"\\ea6c\"}.bx-coffee-togo:before{content:\"\\ea6d\"}.bx-cog:before{content:\"\\ea6e\"}.bx-coin:before{content:\"\\ea6f\"}.bx-coin-stack:before{content:\"\\ea70\"}.bx-collapse:before{content:\"\\ea71\"}.bx-collection:before{content:\"\\ea72\"}.bx-color-fill:before{content:\"\\ea73\"}.bx-columns:before{content:\"\\ea74\"}.bx-command:before{content:\"\\ea75\"}.bx-comment:before{content:\"\\ea76\"}.bx-comment-add:before{content:\"\\ea77\"}.bx-comment-check:before{content:\"\\ea78\"}.bx-comment-detail:before{content:\"\\ea79\"}.bx-comment-dots:before{content:\"\\ea7a\"}.bx-comment-edit:before{content:\"\\ea7b\"}.bx-comment-error:before{content:\"\\ea7c\"}.bx-comment-minus:before{content:\"\\ea7d\"}.bx-comment-x:before{content:\"\\ea7e\"}.bx-compass:before{content:\"\\ea7f\"}.bx-confused:before{content:\"\\ea80\"}.bx-conversation:before{content:\"\\ea81\"}.bx-cookie:before{content:\"\\ea82\"}.bx-cool:before{content:\"\\ea83\"}.bx-copy:before{content:\"\\ea84\"}.bx-copy-alt:before{content:\"\\ea85\"}.bx-copyright:before{content:\"\\ea86\"}.bx-credit-card:before{content:\"\\ea87\"}.bx-credit-card-alt:before{content:\"\\ea88\"}.bx-credit-card-front:before{content:\"\\ea89\"}.bx-crop:before{content:\"\\ea8a\"}.bx-crosshair:before{content:\"\\ea8b\"}.bx-crown:before{content:\"\\ea8c\"}.bx-cube:before{content:\"\\ea8d\"}.bx-cube-alt:before{content:\"\\ea8e\"}.bx-cuboid:before{content:\"\\ea8f\"}.bx-current-location:before{content:\"\\ea90\"}.bx-customize:before{content:\"\\ea91\"}.bx-cut:before{content:\"\\ea92\"}.bx-cycling:before{content:\"\\ea93\"}.bx-cylinder:before{content:\"\\ea94\"}.bx-data:before{content:\"\\ea95\"}.bx-desktop:before{content:\"\\ea96\"}.bx-detail:before{content:\"\\ea97\"}.bx-devices:before{content:\"\\ea98\"}.bx-dialpad:before{content:\"\\ea99\"}.bx-dialpad-alt:before{content:\"\\ea9a\"}.bx-diamond:before{content:\"\\ea9b\"}.bx-dice-1:before{content:\"\\ea9c\"}.bx-dice-2:before{content:\"\\ea9d\"}.bx-dice-3:before{content:\"\\ea9e\"}.bx-dice-4:before{content:\"\\ea9f\"}.bx-dice-5:before{content:\"\\eaa0\"}.bx-dice-6:before{content:\"\\eaa1\"}.bx-directions:before{content:\"\\eaa2\"}.bx-disc:before{content:\"\\eaa3\"}.bx-dish:before{content:\"\\eaa4\"}.bx-dislike:before{content:\"\\eaa5\"}.bx-dizzy:before{content:\"\\eaa6\"}.bx-dna:before{content:\"\\eaa7\"}.bx-dock-bottom:before{content:\"\\eaa8\"}.bx-dock-left:before{content:\"\\eaa9\"}.bx-dock-right:before{content:\"\\eaaa\"}.bx-dock-top:before{content:\"\\eaab\"}.bx-dollar:before{content:\"\\eaac\"}.bx-dollar-circle:before{content:\"\\eaad\"}.bx-donate-blood:before{content:\"\\eaae\"}.bx-donate-heart:before{content:\"\\eaaf\"}.bx-door-open:before{content:\"\\eab0\"}.bx-dots-horizontal:before{content:\"\\eab1\"}.bx-dots-horizontal-rounded:before{content:\"\\eab2\"}.bx-dots-vertical:before{content:\"\\eab3\"}.bx-dots-vertical-rounded:before{content:\"\\eab4\"}.bx-doughnut-chart:before{content:\"\\eab5\"}.bx-down-arrow:before{content:\"\\eab6\"}.bx-down-arrow-alt:before{content:\"\\eab7\"}.bx-down-arrow-circle:before{content:\"\\eab8\"}.bx-download:before{content:\"\\eab9\"}.bx-downvote:before{content:\"\\eaba\"}.bx-drink:before{content:\"\\eabb\"}.bx-droplet:before{content:\"\\eabc\"}.bx-dumbbell:before{content:\"\\eabd\"}.bx-duplicate:before{content:\"\\eabe\"}.bx-edit:before{content:\"\\eabf\"}.bx-edit-alt:before{content:\"\\eac0\"}.bx-envelope:before{content:\"\\eac1\"}.bx-envelope-open:before{content:\"\\eac2\"}.bx-equalizer:before{content:\"\\eac3\"}.bx-eraser:before{content:\"\\eac4\"}.bx-error:before{content:\"\\eac5\"}.bx-error-alt:before{content:\"\\eac6\"}.bx-error-circle:before{content:\"\\eac7\"}.bx-euro:before{content:\"\\eac8\"}.bx-exclude:before{content:\"\\eac9\"}.bx-exit:before{content:\"\\eaca\"}.bx-exit-fullscreen:before{content:\"\\eacb\"}.bx-expand:before{content:\"\\eacc\"}.bx-expand-alt:before{content:\"\\eacd\"}.bx-export:before{content:\"\\eace\"}.bx-extension:before{content:\"\\eacf\"}.bx-face:before{content:\"\\ead0\"}.bx-fast-forward:before{content:\"\\ead1\"}.bx-fast-forward-circle:before{content:\"\\ead2\"}.bx-female:before{content:\"\\ead3\"}.bx-female-sign:before{content:\"\\ead4\"}.bx-file:before{content:\"\\ead5\"}.bx-file-blank:before{content:\"\\ead6\"}.bx-file-find:before{content:\"\\ead7\"}.bx-film:before{content:\"\\ead8\"}.bx-filter:before{content:\"\\ead9\"}.bx-filter-alt:before{content:\"\\eada\"}.bx-fingerprint:before{content:\"\\eadb\"}.bx-first-aid:before{content:\"\\eadc\"}.bx-first-page:before{content:\"\\eadd\"}.bx-flag:before{content:\"\\eade\"}.bx-folder:before{content:\"\\eadf\"}.bx-folder-minus:before{content:\"\\eae0\"}.bx-folder-open:before{content:\"\\eae1\"}.bx-folder-plus:before{content:\"\\eae2\"}.bx-font:before{content:\"\\eae3\"}.bx-font-color:before{content:\"\\eae4\"}.bx-font-family:before{content:\"\\eae5\"}.bx-font-size:before{content:\"\\eae6\"}.bx-food-menu:before{content:\"\\eae7\"}.bx-food-tag:before{content:\"\\eae8\"}.bx-football:before{content:\"\\eae9\"}.bx-fridge:before{content:\"\\eaea\"}.bx-fullscreen:before{content:\"\\eaeb\"}.bx-game:before{content:\"\\eaec\"}.bx-gas-pump:before{content:\"\\eaed\"}.bx-ghost:before{content:\"\\eaee\"}.bx-gift:before{content:\"\\eaef\"}.bx-git-branch:before{content:\"\\eaf0\"}.bx-git-commit:before{content:\"\\eaf1\"}.bx-git-compare:before{content:\"\\eaf2\"}.bx-git-merge:before{content:\"\\eaf3\"}.bx-git-pull-request:before{content:\"\\eaf4\"}.bx-git-repo-forked:before{content:\"\\eaf5\"}.bx-glasses:before{content:\"\\eaf6\"}.bx-glasses-alt:before{content:\"\\eaf7\"}.bx-globe:before{content:\"\\eaf8\"}.bx-globe-alt:before{content:\"\\eaf9\"}.bx-grid:before{content:\"\\eafa\"}.bx-grid-alt:before{content:\"\\eafb\"}.bx-grid-horizontal:before{content:\"\\eafc\"}.bx-grid-small:before{content:\"\\eafd\"}.bx-grid-vertical:before{content:\"\\eafe\"}.bx-group:before{content:\"\\eaff\"}.bx-handicap:before{content:\"\\eb00\"}.bx-happy:before{content:\"\\eb01\"}.bx-happy-alt:before{content:\"\\eb02\"}.bx-happy-beaming:before{content:\"\\eb03\"}.bx-happy-heart-eyes:before{content:\"\\eb04\"}.bx-hash:before{content:\"\\eb05\"}.bx-hdd:before{content:\"\\eb06\"}.bx-heading:before{content:\"\\eb07\"}.bx-headphone:before{content:\"\\eb08\"}.bx-health:before{content:\"\\eb09\"}.bx-heart:before{content:\"\\eb0a\"}.bx-heart-circle:before{content:\"\\eb0b\"}.bx-heart-square:before{content:\"\\eb0c\"}.bx-help-circle:before{content:\"\\eb0d\"}.bx-hide:before{content:\"\\eb0e\"}.bx-highlight:before{content:\"\\eb0f\"}.bx-history:before{content:\"\\eb10\"}.bx-hive:before{content:\"\\eb11\"}.bx-home:before{content:\"\\eb12\"}.bx-home-alt:before{content:\"\\eb13\"}.bx-home-circle:before{content:\"\\eb14\"}.bx-home-heart:before{content:\"\\eb15\"}.bx-home-smile:before{content:\"\\eb16\"}.bx-horizontal-center:before{content:\"\\eb17\"}.bx-hotel:before{content:\"\\eb18\"}.bx-hourglass:before{content:\"\\eb19\"}.bx-id-card:before{content:\"\\eb1a\"}.bx-image:before{content:\"\\eb1b\"}.bx-image-add:before{content:\"\\eb1c\"}.bx-image-alt:before{content:\"\\eb1d\"}.bx-images:before{content:\"\\eb1e\"}.bx-import:before{content:\"\\eb1f\"}.bx-infinite:before{content:\"\\eb20\"}.bx-info-circle:before{content:\"\\eb21\"}.bx-info-square:before{content:\"\\eb22\"}.bx-intersect:before{content:\"\\eb23\"}.bx-italic:before{content:\"\\eb24\"}.bx-joystick:before{content:\"\\eb25\"}.bx-joystick-alt:before{content:\"\\eb26\"}.bx-joystick-button:before{content:\"\\eb27\"}.bx-key:before{content:\"\\eb28\"}.bx-label:before{content:\"\\eb29\"}.bx-landscape:before{content:\"\\eb2a\"}.bx-laptop:before{content:\"\\eb2b\"}.bx-last-page:before{content:\"\\eb2c\"}.bx-laugh:before{content:\"\\eb2d\"}.bx-layer:before{content:\"\\eb2e\"}.bx-layer-minus:before{content:\"\\eb2f\"}.bx-layer-plus:before{content:\"\\eb30\"}.bx-layout:before{content:\"\\eb31\"}.bx-left-arrow:before{content:\"\\eb32\"}.bx-left-arrow-alt:before{content:\"\\eb33\"}.bx-left-arrow-circle:before{content:\"\\eb34\"}.bx-left-down-arrow-circle:before{content:\"\\eb35\"}.bx-left-indent:before{content:\"\\eb36\"}.bx-left-top-arrow-circle:before{content:\"\\eb37\"}.bx-library:before{content:\"\\eb38\"}.bx-like:before{content:\"\\eb39\"}.bx-line-chart:before{content:\"\\eb3a\"}.bx-line-chart-down:before{content:\"\\eb3b\"}.bx-link:before{content:\"\\eb3c\"}.bx-link-alt:before{content:\"\\eb3d\"}.bx-link-external:before{content:\"\\eb3e\"}.bx-lira:before{content:\"\\eb3f\"}.bx-list-check:before{content:\"\\eb40\"}.bx-list-minus:before{content:\"\\eb41\"}.bx-list-ol:before{content:\"\\eb42\"}.bx-list-plus:before{content:\"\\eb43\"}.bx-list-ul:before{content:\"\\eb44\"}.bx-loader:before{content:\"\\eb45\"}.bx-loader-alt:before{content:\"\\eb46\"}.bx-loader-circle:before{content:\"\\eb47\"}.bx-location-plus:before{content:\"\\eb48\"}.bx-lock:before{content:\"\\eb49\"}.bx-lock-alt:before{content:\"\\eb4a\"}.bx-lock-open:before{content:\"\\eb4b\"}.bx-lock-open-alt:before{content:\"\\eb4c\"}.bx-log-in:before{content:\"\\eb4d\"}.bx-log-in-circle:before{content:\"\\eb4e\"}.bx-log-out:before{content:\"\\eb4f\"}.bx-log-out-circle:before{content:\"\\eb50\"}.bx-low-vision:before{content:\"\\eb51\"}.bx-magnet:before{content:\"\\eb52\"}.bx-mail-send:before{content:\"\\eb53\"}.bx-male:before{content:\"\\eb54\"}.bx-male-sign:before{content:\"\\eb55\"}.bx-map:before{content:\"\\eb56\"}.bx-map-alt:before{content:\"\\eb57\"}.bx-map-pin:before{content:\"\\eb58\"}.bx-mask:before{content:\"\\eb59\"}.bx-medal:before{content:\"\\eb5a\"}.bx-meh:before{content:\"\\eb5b\"}.bx-meh-alt:before{content:\"\\eb5c\"}.bx-meh-blank:before{content:\"\\eb5d\"}.bx-memory-card:before{content:\"\\eb5e\"}.bx-menu:before{content:\"\\eb5f\"}.bx-menu-alt-left:before{content:\"\\ef5b\"}.bx-menu-alt-right:before{content:\"\\eb61\"}.bx-merge:before{content:\"\\eb62\"}.bx-message:before{content:\"\\eb63\"}.bx-message-add:before{content:\"\\eb64\"}.bx-message-alt:before{content:\"\\eb65\"}.bx-message-alt-add:before{content:\"\\eb66\"}.bx-message-alt-check:before{content:\"\\eb67\"}.bx-message-alt-detail:before{content:\"\\eb68\"}.bx-message-alt-dots:before{content:\"\\eb69\"}.bx-message-alt-edit:before{content:\"\\eb6a\"}.bx-message-alt-error:before{content:\"\\eb6b\"}.bx-message-alt-minus:before{content:\"\\eb6c\"}.bx-message-alt-x:before{content:\"\\eb6d\"}.bx-message-check:before{content:\"\\eb6e\"}.bx-message-detail:before{content:\"\\eb6f\"}.bx-message-dots:before{content:\"\\eb70\"}.bx-message-edit:before{content:\"\\eb71\"}.bx-message-error:before{content:\"\\eb72\"}.bx-message-minus:before{content:\"\\eb73\"}.bx-message-rounded:before{content:\"\\eb74\"}.bx-message-rounded-add:before{content:\"\\eb75\"}.bx-message-rounded-check:before{content:\"\\eb76\"}.bx-message-rounded-detail:before{content:\"\\eb77\"}.bx-message-rounded-dots:before{content:\"\\eb78\"}.bx-message-rounded-edit:before{content:\"\\ef5c\"}.bx-message-rounded-error:before{content:\"\\eb7a\"}.bx-message-rounded-minus:before{content:\"\\eb7b\"}.bx-message-rounded-x:before{content:\"\\eb7c\"}.bx-message-square:before{content:\"\\eb7d\"}.bx-message-square-add:before{content:\"\\eb7e\"}.bx-message-square-check:before{content:\"\\eb7f\"}.bx-message-square-detail:before{content:\"\\eb80\"}.bx-message-square-dots:before{content:\"\\eb81\"}.bx-message-square-edit:before{content:\"\\eb82\"}.bx-message-square-error:before{content:\"\\eb83\"}.bx-message-square-minus:before{content:\"\\eb84\"}.bx-message-square-x:before{content:\"\\eb85\"}.bx-message-x:before{content:\"\\eb86\"}.bx-meteor:before{content:\"\\eb87\"}.bx-microchip:before{content:\"\\eb88\"}.bx-microphone:before{content:\"\\eb89\"}.bx-microphone-off:before{content:\"\\eb8a\"}.bx-minus:before{content:\"\\eb8b\"}.bx-minus-back:before{content:\"\\eb8c\"}.bx-minus-circle:before{content:\"\\eb8d\"}.bx-minus-front:before{content:\"\\eb8e\"}.bx-mobile:before{content:\"\\eb8f\"}.bx-mobile-alt:before{content:\"\\eb90\"}.bx-mobile-landscape:before{content:\"\\eb91\"}.bx-mobile-vibration:before{content:\"\\ef5d\"}.bx-money:before{content:\"\\eb93\"}.bx-moon:before{content:\"\\eb94\"}.bx-mouse:before{content:\"\\eb95\"}.bx-mouse-alt:before{content:\"\\eb96\"}.bx-move:before{content:\"\\eb97\"}.bx-move-horizontal:before{content:\"\\eb98\"}.bx-move-vertical:before{content:\"\\eb99\"}.bx-movie:before{content:\"\\eb9a\"}.bx-movie-play:before{content:\"\\eb9b\"}.bx-music:before{content:\"\\eb9c\"}.bx-navigation:before{content:\"\\eb9d\"}.bx-network-chart:before{content:\"\\eb9e\"}.bx-news:before{content:\"\\eb9f\"}.bx-no-entry:before{content:\"\\eba0\"}.bx-note:before{content:\"\\eba1\"}.bx-notepad:before{content:\"\\eba2\"}.bx-notification:before{content:\"\\eba3\"}.bx-notification-off:before{content:\"\\eba4\"}.bx-outline:before{content:\"\\eba5\"}.bx-package:before{content:\"\\eba6\"}.bx-paint:before{content:\"\\eba7\"}.bx-paint-roll:before{content:\"\\eba8\"}.bx-palette:before{content:\"\\eba9\"}.bx-paperclip:before{content:\"\\ebaa\"}.bx-paper-plane:before{content:\"\\ef61\"}.bx-paragraph:before{content:\"\\ebac\"}.bx-paste:before{content:\"\\ebad\"}.bx-pause:before{content:\"\\ebae\"}.bx-pause-circle:before{content:\"\\ebaf\"}.bx-pen:before{content:\"\\ebb0\"}.bx-pencil:before{content:\"\\ebb1\"}.bx-phone:before{content:\"\\ebb2\"}.bx-phone-call:before{content:\"\\ebb3\"}.bx-phone-incoming:before{content:\"\\ebb4\"}.bx-phone-off:before{content:\"\\ebb5\"}.bx-phone-outgoing:before{content:\"\\ebb6\"}.bx-photo-album:before{content:\"\\ebb7\"}.bx-pie-chart:before{content:\"\\ebb8\"}.bx-pie-chart-alt:before{content:\"\\ebb9\"}.bx-pie-chart-alt-2:before{content:\"\\ebba\"}.bx-pin:before{content:\"\\ebbb\"}.bx-planet:before{content:\"\\ebbc\"}.bx-play:before{content:\"\\ebbd\"}.bx-play-circle:before{content:\"\\ebbe\"}.bx-plug:before{content:\"\\ebbf\"}.bx-plus:before{content:\"\\ebc0\"}.bx-plus-circle:before{content:\"\\ebc1\"}.bx-plus-medical:before{content:\"\\ebc2\"}.bx-podcast:before{content:\"\\ebc3\"}.bx-pointer:before{content:\"\\ef5e\"}.bx-poll:before{content:\"\\ebc5\"}.bx-polygon:before{content:\"\\ebc6\"}.bx-pound:before{content:\"\\ebc7\"}.bx-power-off:before{content:\"\\ebc8\"}.bx-printer:before{content:\"\\ebc9\"}.bx-pulse:before{content:\"\\ebca\"}.bx-purchase-tag:before{content:\"\\ebcb\"}.bx-purchase-tag-alt:before{content:\"\\ebcc\"}.bx-pyramid:before{content:\"\\ebcd\"}.bx-qr:before{content:\"\\ebce\"}.bx-qr-scan:before{content:\"\\ebcf\"}.bx-question-mark:before{content:\"\\ebd0\"}.bx-radar:before{content:\"\\ebd1\"}.bx-radio:before{content:\"\\ebd2\"}.bx-radio-circle:before{content:\"\\ebd3\"}.bx-radio-circle-marked:before{content:\"\\ebd4\"}.bx-receipt:before{content:\"\\ebd5\"}.bx-rectangle:before{content:\"\\ebd6\"}.bx-recycle:before{content:\"\\ebd7\"}.bx-redo:before{content:\"\\ebd8\"}.bx-refresh:before{content:\"\\ebd9\"}.bx-registered:before{content:\"\\ebda\"}.bx-rename:before{content:\"\\ebdb\"}.bx-repeat:before{content:\"\\ebdc\"}.bx-reply:before{content:\"\\ef5f\"}.bx-reply-all:before{content:\"\\ebde\"}.bx-repost:before{content:\"\\ebdf\"}.bx-reset:before{content:\"\\ebe0\"}.bx-restaurant:before{content:\"\\ebe1\"}.bx-revision:before{content:\"\\ebe2\"}.bx-rewind:before{content:\"\\ebe3\"}.bx-rewind-circle:before{content:\"\\ebe4\"}.bx-right-arrow:before{content:\"\\ebe5\"}.bx-right-arrow-alt:before{content:\"\\ebe6\"}.bx-right-arrow-circle:before{content:\"\\ebe7\"}.bx-right-down-arrow-circle:before{content:\"\\ebe8\"}.bx-right-indent:before{content:\"\\ebe9\"}.bx-right-top-arrow-circle:before{content:\"\\ebea\"}.bx-rocket:before{content:\"\\ebeb\"}.bx-rotate-left:before{content:\"\\ebec\"}.bx-rotate-right:before{content:\"\\ebed\"}.bx-rss:before{content:\"\\ebee\"}.bx-ruble:before{content:\"\\ebef\"}.bx-ruler:before{content:\"\\ebf0\"}.bx-run:before{content:\"\\ebf1\"}.bx-rupee:before{content:\"\\ebf2\"}.bx-sad:before{content:\"\\ebf3\"}.bx-save:before{content:\"\\ebf4\"}.bx-scan:before{content:\"\\ebf5\"}.bx-screenshot:before{content:\"\\ef60\"}.bx-search:before{content:\"\\ebf7\"}.bx-search-alt:before{content:\"\\ebf8\"}.bx-search-alt-2:before{content:\"\\ebf9\"}.bx-selection:before{content:\"\\ebfa\"}.bx-select-multiple:before{content:\"\\ebfb\"}.bx-send:before{content:\"\\ebfc\"}.bx-server:before{content:\"\\ebfd\"}.bx-shape-circle:before{content:\"\\ebfe\"}.bx-shape-polygon:before{content:\"\\ebff\"}.bx-shape-square:before{content:\"\\ec00\"}.bx-shape-triangle:before{content:\"\\ec01\"}.bx-share:before{content:\"\\ec02\"}.bx-share-alt:before{content:\"\\ec03\"}.bx-shekel:before{content:\"\\ec04\"}.bx-shield:before{content:\"\\ec05\"}.bx-shield-alt:before{content:\"\\ec06\"}.bx-shield-alt-2:before{content:\"\\ec07\"}.bx-shield-quarter:before{content:\"\\ec08\"}.bx-shield-x:before{content:\"\\ec09\"}.bx-shocked:before{content:\"\\ec0a\"}.bx-shopping-bag:before{content:\"\\ec0b\"}.bx-show:before{content:\"\\ec0c\"}.bx-show-alt:before{content:\"\\ec0d\"}.bx-shuffle:before{content:\"\\ec0e\"}.bx-sidebar:before{content:\"\\ec0f\"}.bx-sitemap:before{content:\"\\ec10\"}.bx-skip-next:before{content:\"\\ec11\"}.bx-skip-next-circle:before{content:\"\\ec12\"}.bx-skip-previous:before{content:\"\\ec13\"}.bx-skip-previous-circle:before{content:\"\\ec14\"}.bx-sleepy:before{content:\"\\ec15\"}.bx-slider:before{content:\"\\ec16\"}.bx-slider-alt:before{content:\"\\ec17\"}.bx-slideshow:before{content:\"\\ec18\"}.bx-smile:before{content:\"\\ec19\"}.bx-sort:before{content:\"\\ec1a\"}.bx-sort-alt-2:before{content:\"\\ec1b\"}.bx-sort-a-z:before{content:\"\\ec1c\"}.bx-sort-down:before{content:\"\\ec1d\"}.bx-sort-up:before{content:\"\\ec1e\"}.bx-sort-z-a:before{content:\"\\ec1f\"}.bx-spa:before{content:\"\\ec20\"}.bx-space-bar:before{content:\"\\ec21\"}.bx-speaker:before{content:\"\\ec22\"}.bx-spray-can:before{content:\"\\ec23\"}.bx-spreadsheet:before{content:\"\\ec24\"}.bx-square:before{content:\"\\ec25\"}.bx-square-rounded:before{content:\"\\ec26\"}.bx-star:before{content:\"\\ec27\"}.bx-station:before{content:\"\\ec28\"}.bx-stats:before{content:\"\\ec29\"}.bx-sticker:before{content:\"\\ec2a\"}.bx-stop:before{content:\"\\ec2b\"}.bx-stop-circle:before{content:\"\\ec2c\"}.bx-stopwatch:before{content:\"\\ec2d\"}.bx-store:before{content:\"\\ec2e\"}.bx-store-alt:before{content:\"\\ec2f\"}.bx-street-view:before{content:\"\\ec30\"}.bx-strikethrough:before{content:\"\\ec31\"}.bx-subdirectory-left:before{content:\"\\ec32\"}.bx-subdirectory-right:before{content:\"\\ec33\"}.bx-sun:before{content:\"\\ec34\"}.bx-support:before{content:\"\\ec35\"}.bx-swim:before{content:\"\\ec36\"}.bx-sync:before{content:\"\\ec37\"}.bx-tab:before{content:\"\\ec38\"}.bx-table:before{content:\"\\ec39\"}.bx-tachometer:before{content:\"\\ec3a\"}.bx-tag:before{content:\"\\ec3b\"}.bx-tag-alt:before{content:\"\\ec3c\"}.bx-target-lock:before{content:\"\\ec3d\"}.bx-task:before{content:\"\\ec3e\"}.bx-task-x:before{content:\"\\ec3f\"}.bx-taxi:before{content:\"\\ec40\"}.bx-tennis-ball:before{content:\"\\ec41\"}.bx-terminal:before{content:\"\\ec42\"}.bx-test-tube:before{content:\"\\ec43\"}.bx-text:before{content:\"\\ec44\"}.bx-time:before{content:\"\\ec45\"}.bx-time-five:before{content:\"\\ec46\"}.bx-timer:before{content:\"\\ec47\"}.bx-tired:before{content:\"\\ec48\"}.bx-toggle-left:before{content:\"\\ec49\"}.bx-toggle-right:before{content:\"\\ec4a\"}.bx-tone:before{content:\"\\ec4b\"}.bx-traffic-cone:before{content:\"\\ec4c\"}.bx-train:before{content:\"\\ec4d\"}.bx-transfer:before{content:\"\\ec4e\"}.bx-transfer-alt:before{content:\"\\ec4f\"}.bx-trash:before{content:\"\\ec50\"}.bx-trash-alt:before{content:\"\\ec51\"}.bx-trending-down:before{content:\"\\ec52\"}.bx-trending-up:before{content:\"\\ec53\"}.bx-trim:before{content:\"\\ec54\"}.bx-trip:before{content:\"\\ec55\"}.bx-trophy:before{content:\"\\ec56\"}.bx-tv:before{content:\"\\ec57\"}.bx-underline:before{content:\"\\ec58\"}.bx-undo:before{content:\"\\ec59\"}.bx-unite:before{content:\"\\ec5a\"}.bx-unlink:before{content:\"\\ec5b\"}.bx-up-arrow:before{content:\"\\ec5c\"}.bx-up-arrow-alt:before{content:\"\\ec5d\"}.bx-up-arrow-circle:before{content:\"\\ec5e\"}.bx-upload:before{content:\"\\ec5f\"}.bx-upside-down:before{content:\"\\ec60\"}.bx-upvote:before{content:\"\\ec61\"}.bx-usb:before{content:\"\\ec62\"}.bx-user:before{content:\"\\ec63\"}.bx-user-check:before{content:\"\\ec64\"}.bx-user-circle:before{content:\"\\ec65\"}.bx-user-minus:before{content:\"\\ec66\"}.bx-user-pin:before{content:\"\\ec67\"}.bx-user-plus:before{content:\"\\ec68\"}.bx-user-voice:before{content:\"\\ec69\"}.bx-user-x:before{content:\"\\ec6a\"}.bx-vector:before{content:\"\\ec6b\"}.bx-vertical-center:before{content:\"\\ec6c\"}.bx-vial:before{content:\"\\ec6d\"}.bx-video:before{content:\"\\ec6e\"}.bx-video-off:before{content:\"\\ec6f\"}.bx-video-plus:before{content:\"\\ec70\"}.bx-video-recording:before{content:\"\\ec71\"}.bx-voicemail:before{content:\"\\ec72\"}.bx-volume:before{content:\"\\ec73\"}.bx-volume-full:before{content:\"\\ec74\"}.bx-volume-low:before{content:\"\\ec75\"}.bx-volume-mute:before{content:\"\\ec76\"}.bx-walk:before{content:\"\\ec77\"}.bx-wallet:before{content:\"\\ec78\"}.bx-wallet-alt:before{content:\"\\ec79\"}.bx-water:before{content:\"\\ec7a\"}.bx-webcam:before{content:\"\\ec7b\"}.bx-wifi:before{content:\"\\ec7c\"}.bx-wifi-0:before{content:\"\\ec7d\"}.bx-wifi-1:before{content:\"\\ec7e\"}.bx-wifi-2:before{content:\"\\ec7f\"}.bx-wifi-off:before{content:\"\\ec80\"}.bx-wind:before{content:\"\\ec81\"}.bx-window:before{content:\"\\ec82\"}.bx-window-alt:before{content:\"\\ec83\"}.bx-window-close:before{content:\"\\ec84\"}.bx-window-open:before{content:\"\\ec85\"}.bx-windows:before{content:\"\\ec86\"}.bx-wine:before{content:\"\\ec87\"}.bx-wink-smile:before{content:\"\\ec88\"}.bx-wink-tongue:before{content:\"\\ec89\"}.bx-won:before{content:\"\\ec8a\"}.bx-world:before{content:\"\\ec8b\"}.bx-wrench:before{content:\"\\ec8c\"}.bx-x:before{content:\"\\ec8d\"}.bx-x-circle:before{content:\"\\ec8e\"}.bx-yen:before{content:\"\\ec8f\"}.bx-zoom-in:before{content:\"\\ec90\"}.bx-zoom-out:before{content:\"\\ec91\"}.bxs-party:before{content:\"\\ec92\"}.bxs-hot:before{content:\"\\ec93\"}.bxs-droplet:before{content:\"\\ec94\"}.bxs-cat:before{content:\"\\ec95\"}.bxs-dog:before{content:\"\\ec96\"}.bxs-injection:before{content:\"\\ec97\"}.bxs-leaf:before{content:\"\\ec98\"}.bxs-add-to-queue:before{content:\"\\ec99\"}.bxs-adjust:before{content:\"\\ec9a\"}.bxs-adjust-alt:before{content:\"\\ec9b\"}.bxs-alarm:before{content:\"\\ec9c\"}.bxs-alarm-add:before{content:\"\\ec9d\"}.bxs-alarm-exclamation:before{content:\"\\ec9e\"}.bxs-alarm-off:before{content:\"\\ec9f\"}.bxs-alarm-snooze:before{content:\"\\eca0\"}.bxs-album:before{content:\"\\eca1\"}.bxs-ambulance:before{content:\"\\eca2\"}.bxs-analyse:before{content:\"\\eca3\"}.bxs-angry:before{content:\"\\eca4\"}.bxs-arch:before{content:\"\\eca5\"}.bxs-archive:before{content:\"\\eca6\"}.bxs-archive-in:before{content:\"\\eca7\"}.bxs-archive-out:before{content:\"\\eca8\"}.bxs-area:before{content:\"\\eca9\"}.bxs-arrow-from-bottom:before{content:\"\\ecaa\"}.bxs-arrow-from-left:before{content:\"\\ecab\"}.bxs-arrow-from-right:before{content:\"\\ecac\"}.bxs-arrow-from-top:before{content:\"\\ecad\"}.bxs-arrow-to-bottom:before{content:\"\\ecae\"}.bxs-arrow-to-left:before{content:\"\\ecaf\"}.bxs-arrow-to-right:before{content:\"\\ecb0\"}.bxs-arrow-to-top:before{content:\"\\ecb1\"}.bxs-award:before{content:\"\\ecb2\"}.bxs-baby-carriage:before{content:\"\\ecb3\"}.bxs-backpack:before{content:\"\\ecb4\"}.bxs-badge:before{content:\"\\ecb5\"}.bxs-badge-check:before{content:\"\\ecb6\"}.bxs-badge-dollar:before{content:\"\\ecb7\"}.bxs-ball:before{content:\"\\ecb8\"}.bxs-band-aid:before{content:\"\\ecb9\"}.bxs-bank:before{content:\"\\ecba\"}.bxs-bar-chart-alt-2:before{content:\"\\ecbb\"}.bxs-bar-chart-square:before{content:\"\\ecbc\"}.bxs-barcode:before{content:\"\\ecbd\"}.bxs-baseball:before{content:\"\\ecbe\"}.bxs-basket:before{content:\"\\ecbf\"}.bxs-basketball:before{content:\"\\ecc0\"}.bxs-bath:before{content:\"\\ecc1\"}.bxs-battery:before{content:\"\\ecc2\"}.bxs-battery-charging:before{content:\"\\ecc3\"}.bxs-battery-full:before{content:\"\\ecc4\"}.bxs-battery-low:before{content:\"\\ecc5\"}.bxs-bed:before{content:\"\\ecc6\"}.bxs-been-here:before{content:\"\\ecc7\"}.bxs-beer:before{content:\"\\ecc8\"}.bxs-bell:before{content:\"\\ecc9\"}.bxs-bell-minus:before{content:\"\\ecca\"}.bxs-bell-off:before{content:\"\\eccb\"}.bxs-bell-plus:before{content:\"\\eccc\"}.bxs-bell-ring:before{content:\"\\eccd\"}.bxs-bible:before{content:\"\\ecce\"}.bxs-binoculars:before{content:\"\\eccf\"}.bxs-blanket:before{content:\"\\ecd0\"}.bxs-bolt:before{content:\"\\ecd1\"}.bxs-bolt-circle:before{content:\"\\ecd2\"}.bxs-bomb:before{content:\"\\ecd3\"}.bxs-bone:before{content:\"\\ecd4\"}.bxs-bong:before{content:\"\\ecd5\"}.bxs-book:before{content:\"\\ecd6\"}.bxs-book-add:before{content:\"\\ecd7\"}.bxs-book-alt:before{content:\"\\ecd8\"}.bxs-book-bookmark:before{content:\"\\ecd9\"}.bxs-book-content:before{content:\"\\ecda\"}.bxs-book-heart:before{content:\"\\ecdb\"}.bxs-bookmark:before{content:\"\\ecdc\"}.bxs-bookmark-alt:before{content:\"\\ecdd\"}.bxs-bookmark-alt-minus:before{content:\"\\ecde\"}.bxs-bookmark-alt-plus:before{content:\"\\ecdf\"}.bxs-bookmark-heart:before{content:\"\\ece0\"}.bxs-bookmark-minus:before{content:\"\\ece1\"}.bxs-bookmark-plus:before{content:\"\\ece2\"}.bxs-bookmarks:before{content:\"\\ece3\"}.bxs-bookmark-star:before{content:\"\\ece4\"}.bxs-book-open:before{content:\"\\ece5\"}.bxs-book-reader:before{content:\"\\ece6\"}.bxs-bot:before{content:\"\\ece7\"}.bxs-bowling-ball:before{content:\"\\ece8\"}.bxs-box:before{content:\"\\ece9\"}.bxs-brain:before{content:\"\\ecea\"}.bxs-briefcase:before{content:\"\\eceb\"}.bxs-briefcase-alt:before{content:\"\\ecec\"}.bxs-briefcase-alt-2:before{content:\"\\eced\"}.bxs-brightness:before{content:\"\\ecee\"}.bxs-brightness-half:before{content:\"\\ecef\"}.bxs-brush:before{content:\"\\ecf0\"}.bxs-brush-alt:before{content:\"\\ecf1\"}.bxs-bug:before{content:\"\\ecf2\"}.bxs-bug-alt:before{content:\"\\ecf3\"}.bxs-building:before{content:\"\\ecf4\"}.bxs-building-house:before{content:\"\\ecf5\"}.bxs-buildings:before{content:\"\\ecf6\"}.bxs-bulb:before{content:\"\\ecf7\"}.bxs-bullseye:before{content:\"\\ecf8\"}.bxs-buoy:before{content:\"\\ecf9\"}.bxs-bus:before{content:\"\\ecfa\"}.bxs-business:before{content:\"\\ecfb\"}.bxs-bus-school:before{content:\"\\ecfc\"}.bxs-cabinet:before{content:\"\\ecfd\"}.bxs-cake:before{content:\"\\ecfe\"}.bxs-calculator:before{content:\"\\ecff\"}.bxs-calendar:before{content:\"\\ed00\"}.bxs-calendar-alt:before{content:\"\\ed01\"}.bxs-calendar-check:before{content:\"\\ed02\"}.bxs-calendar-edit:before{content:\"\\ed03\"}.bxs-calendar-event:before{content:\"\\ed04\"}.bxs-calendar-exclamation:before{content:\"\\ed05\"}.bxs-calendar-heart:before{content:\"\\ed06\"}.bxs-calendar-minus:before{content:\"\\ed07\"}.bxs-calendar-plus:before{content:\"\\ed08\"}.bxs-calendar-star:before{content:\"\\ed09\"}.bxs-calendar-week:before{content:\"\\ed0a\"}.bxs-calendar-x:before{content:\"\\ed0b\"}.bxs-camera:before{content:\"\\ed0c\"}.bxs-camera-home:before{content:\"\\ed0d\"}.bxs-camera-movie:before{content:\"\\ed0e\"}.bxs-camera-off:before{content:\"\\ed0f\"}.bxs-camera-plus:before{content:\"\\ed10\"}.bxs-capsule:before{content:\"\\ed11\"}.bxs-captions:before{content:\"\\ed12\"}.bxs-car:before{content:\"\\ed13\"}.bxs-car-battery:before{content:\"\\ed14\"}.bxs-car-crash:before{content:\"\\ed15\"}.bxs-card:before{content:\"\\ed16\"}.bxs-caret-down-circle:before{content:\"\\ed17\"}.bxs-caret-down-square:before{content:\"\\ed18\"}.bxs-caret-left-circle:before{content:\"\\ed19\"}.bxs-caret-left-square:before{content:\"\\ed1a\"}.bxs-caret-right-circle:before{content:\"\\ed1b\"}.bxs-caret-right-square:before{content:\"\\ed1c\"}.bxs-caret-up-circle:before{content:\"\\ed1d\"}.bxs-caret-up-square:before{content:\"\\ed1e\"}.bxs-car-garage:before{content:\"\\ed1f\"}.bxs-car-mechanic:before{content:\"\\ed20\"}.bxs-carousel:before{content:\"\\ed21\"}.bxs-cart:before{content:\"\\ed22\"}.bxs-cart-add:before{content:\"\\ed23\"}.bxs-cart-alt:before{content:\"\\ed24\"}.bxs-cart-download:before{content:\"\\ed25\"}.bxs-car-wash:before{content:\"\\ed26\"}.bxs-category:before{content:\"\\ed27\"}.bxs-category-alt:before{content:\"\\ed28\"}.bxs-cctv:before{content:\"\\ed29\"}.bxs-certification:before{content:\"\\ed2a\"}.bxs-chalkboard:before{content:\"\\ed2b\"}.bxs-chart:before{content:\"\\ed2c\"}.bxs-chat:before{content:\"\\ed2d\"}.bxs-checkbox:before{content:\"\\ed2e\"}.bxs-checkbox-checked:before{content:\"\\ed2f\"}.bxs-checkbox-minus:before{content:\"\\ed30\"}.bxs-check-circle:before{content:\"\\ed31\"}.bxs-check-shield:before{content:\"\\ed32\"}.bxs-check-square:before{content:\"\\ed33\"}.bxs-chess:before{content:\"\\ed34\"}.bxs-chevron-down:before{content:\"\\ed35\"}.bxs-chevron-down-circle:before{content:\"\\ed36\"}.bxs-chevron-down-square:before{content:\"\\ed37\"}.bxs-chevron-left:before{content:\"\\ed38\"}.bxs-chevron-left-circle:before{content:\"\\ed39\"}.bxs-chevron-left-square:before{content:\"\\ed3a\"}.bxs-chevron-right:before{content:\"\\ed3b\"}.bxs-chevron-right-circle:before{content:\"\\ed3c\"}.bxs-chevron-right-square:before{content:\"\\ed3d\"}.bxs-chevrons-down:before{content:\"\\ed3e\"}.bxs-chevrons-left:before{content:\"\\ed3f\"}.bxs-chevrons-right:before{content:\"\\ed40\"}.bxs-chevrons-up:before{content:\"\\ed41\"}.bxs-chevron-up:before{content:\"\\ed42\"}.bxs-chevron-up-circle:before{content:\"\\ed43\"}.bxs-chevron-up-square:before{content:\"\\ed44\"}.bxs-chip:before{content:\"\\ed45\"}.bxs-church:before{content:\"\\ed46\"}.bxs-circle:before{content:\"\\ed47\"}.bxs-city:before{content:\"\\ed48\"}.bxs-clinic:before{content:\"\\ed49\"}.bxs-cloud:before{content:\"\\ed4a\"}.bxs-cloud-download:before{content:\"\\ed4b\"}.bxs-cloud-lightning:before{content:\"\\ed4c\"}.bxs-cloud-rain:before{content:\"\\ed4d\"}.bxs-cloud-upload:before{content:\"\\ed4e\"}.bxs-coffee:before{content:\"\\ed4f\"}.bxs-coffee-alt:before{content:\"\\ed50\"}.bxs-coffee-togo:before{content:\"\\ed51\"}.bxs-cog:before{content:\"\\ed52\"}.bxs-coin:before{content:\"\\ed53\"}.bxs-coin-stack:before{content:\"\\ed54\"}.bxs-collection:before{content:\"\\ed55\"}.bxs-color-fill:before{content:\"\\ed56\"}.bxs-comment:before{content:\"\\ed57\"}.bxs-comment-add:before{content:\"\\ed58\"}.bxs-comment-check:before{content:\"\\ed59\"}.bxs-comment-detail:before{content:\"\\ed5a\"}.bxs-comment-dots:before{content:\"\\ed5b\"}.bxs-comment-edit:before{content:\"\\ed5c\"}.bxs-comment-error:before{content:\"\\ed5d\"}.bxs-comment-minus:before{content:\"\\ed5e\"}.bxs-comment-x:before{content:\"\\ed5f\"}.bxs-compass:before{content:\"\\ed60\"}.bxs-component:before{content:\"\\ed61\"}.bxs-confused:before{content:\"\\ed62\"}.bxs-contact:before{content:\"\\ed63\"}.bxs-conversation:before{content:\"\\ed64\"}.bxs-cookie:before{content:\"\\ed65\"}.bxs-cool:before{content:\"\\ed66\"}.bxs-copy:before{content:\"\\ed67\"}.bxs-copy-alt:before{content:\"\\ed68\"}.bxs-copyright:before{content:\"\\ed69\"}.bxs-coupon:before{content:\"\\ed6a\"}.bxs-credit-card:before{content:\"\\ed6b\"}.bxs-credit-card-alt:before{content:\"\\ed6c\"}.bxs-credit-card-front:before{content:\"\\ed6d\"}.bxs-crop:before{content:\"\\ed6e\"}.bxs-crown:before{content:\"\\ed6f\"}.bxs-cube:before{content:\"\\ed70\"}.bxs-cube-alt:before{content:\"\\ed71\"}.bxs-cuboid:before{content:\"\\ed72\"}.bxs-customize:before{content:\"\\ed73\"}.bxs-cylinder:before{content:\"\\ed74\"}.bxs-dashboard:before{content:\"\\ed75\"}.bxs-data:before{content:\"\\ed76\"}.bxs-detail:before{content:\"\\ed77\"}.bxs-devices:before{content:\"\\ed78\"}.bxs-diamond:before{content:\"\\ed79\"}.bxs-dice-1:before{content:\"\\ed7a\"}.bxs-dice-2:before{content:\"\\ed7b\"}.bxs-dice-3:before{content:\"\\ed7c\"}.bxs-dice-4:before{content:\"\\ed7d\"}.bxs-dice-5:before{content:\"\\ed7e\"}.bxs-dice-6:before{content:\"\\ed7f\"}.bxs-direction-left:before{content:\"\\ed80\"}.bxs-direction-right:before{content:\"\\ed81\"}.bxs-directions:before{content:\"\\ed82\"}.bxs-disc:before{content:\"\\ed83\"}.bxs-discount:before{content:\"\\ed84\"}.bxs-dish:before{content:\"\\ed85\"}.bxs-dislike:before{content:\"\\ed86\"}.bxs-dizzy:before{content:\"\\ed87\"}.bxs-dock-bottom:before{content:\"\\ed88\"}.bxs-dock-left:before{content:\"\\ed89\"}.bxs-dock-right:before{content:\"\\ed8a\"}.bxs-dock-top:before{content:\"\\ed8b\"}.bxs-dollar-circle:before{content:\"\\ed8c\"}.bxs-donate-blood:before{content:\"\\ed8d\"}.bxs-donate-heart:before{content:\"\\ed8e\"}.bxs-door-open:before{content:\"\\ed8f\"}.bxs-doughnut-chart:before{content:\"\\ed90\"}.bxs-down-arrow:before{content:\"\\ed91\"}.bxs-down-arrow-alt:before{content:\"\\ed92\"}.bxs-down-arrow-circle:before{content:\"\\ed93\"}.bxs-down-arrow-square:before{content:\"\\ed94\"}.bxs-download:before{content:\"\\ed95\"}.bxs-downvote:before{content:\"\\ed96\"}.bxs-drink:before{content:\"\\ed97\"}.bxs-droplet-half:before{content:\"\\ed98\"}.bxs-dryer:before{content:\"\\ed99\"}.bxs-duplicate:before{content:\"\\ed9a\"}.bxs-edit:before{content:\"\\ed9b\"}.bxs-edit-alt:before{content:\"\\ed9c\"}.bxs-edit-location:before{content:\"\\ed9d\"}.bxs-eject:before{content:\"\\ed9e\"}.bxs-envelope:before{content:\"\\ed9f\"}.bxs-envelope-open:before{content:\"\\eda0\"}.bxs-eraser:before{content:\"\\eda1\"}.bxs-error:before{content:\"\\eda2\"}.bxs-error-alt:before{content:\"\\eda3\"}.bxs-error-circle:before{content:\"\\eda4\"}.bxs-ev-station:before{content:\"\\eda5\"}.bxs-exit:before{content:\"\\eda6\"}.bxs-extension:before{content:\"\\eda7\"}.bxs-eyedropper:before{content:\"\\eda8\"}.bxs-face:before{content:\"\\eda9\"}.bxs-face-mask:before{content:\"\\edaa\"}.bxs-factory:before{content:\"\\edab\"}.bxs-fast-forward-circle:before{content:\"\\edac\"}.bxs-file:before{content:\"\\edad\"}.bxs-file-archive:before{content:\"\\edae\"}.bxs-file-blank:before{content:\"\\edaf\"}.bxs-file-css:before{content:\"\\edb0\"}.bxs-file-doc:before{content:\"\\edb1\"}.bxs-file-export:before{content:\"\\edb2\"}.bxs-file-find:before{content:\"\\edb3\"}.bxs-file-gif:before{content:\"\\edb4\"}.bxs-file-html:before{content:\"\\edb5\"}.bxs-file-image:before{content:\"\\edb6\"}.bxs-file-import:before{content:\"\\edb7\"}.bxs-file-jpg:before{content:\"\\edb8\"}.bxs-file-js:before{content:\"\\edb9\"}.bxs-file-json:before{content:\"\\edba\"}.bxs-file-md:before{content:\"\\edbb\"}.bxs-file-pdf:before{content:\"\\edbc\"}.bxs-file-plus:before{content:\"\\edbd\"}.bxs-file-png:before{content:\"\\edbe\"}.bxs-file-txt:before{content:\"\\edbf\"}.bxs-film:before{content:\"\\edc0\"}.bxs-filter-alt:before{content:\"\\edc1\"}.bxs-first-aid:before{content:\"\\edc2\"}.bxs-flag:before{content:\"\\edc3\"}.bxs-flag-alt:before{content:\"\\edc4\"}.bxs-flag-checkered:before{content:\"\\edc5\"}.bxs-flame:before{content:\"\\edc6\"}.bxs-flask:before{content:\"\\edc7\"}.bxs-florist:before{content:\"\\edc8\"}.bxs-folder:before{content:\"\\edc9\"}.bxs-folder-minus:before{content:\"\\edca\"}.bxs-folder-open:before{content:\"\\edcb\"}.bxs-folder-plus:before{content:\"\\edcc\"}.bxs-food-menu:before{content:\"\\edcd\"}.bxs-fridge:before{content:\"\\edce\"}.bxs-game:before{content:\"\\edcf\"}.bxs-gas-pump:before{content:\"\\edd0\"}.bxs-ghost:before{content:\"\\edd1\"}.bxs-gift:before{content:\"\\edd2\"}.bxs-graduation:before{content:\"\\edd3\"}.bxs-grid:before{content:\"\\edd4\"}.bxs-grid-alt:before{content:\"\\edd5\"}.bxs-group:before{content:\"\\edd6\"}.bxs-guitar-amp:before{content:\"\\edd7\"}.bxs-hand:before{content:\"\\edd8\"}.bxs-hand-down:before{content:\"\\edd9\"}.bxs-hand-left:before{content:\"\\edda\"}.bxs-hand-right:before{content:\"\\eddb\"}.bxs-hand-up:before{content:\"\\eddc\"}.bxs-happy:before{content:\"\\eddd\"}.bxs-happy-alt:before{content:\"\\edde\"}.bxs-happy-beaming:before{content:\"\\eddf\"}.bxs-happy-heart-eyes:before{content:\"\\ede0\"}.bxs-hdd:before{content:\"\\ede1\"}.bxs-heart:before{content:\"\\ede2\"}.bxs-heart-circle:before{content:\"\\ede3\"}.bxs-heart-square:before{content:\"\\ede4\"}.bxs-help-circle:before{content:\"\\ede5\"}.bxs-hide:before{content:\"\\ede6\"}.bxs-home:before{content:\"\\ede7\"}.bxs-home-circle:before{content:\"\\ede8\"}.bxs-home-heart:before{content:\"\\ede9\"}.bxs-home-smile:before{content:\"\\edea\"}.bxs-hotel:before{content:\"\\edeb\"}.bxs-hourglass:before{content:\"\\edec\"}.bxs-hourglass-bottom:before{content:\"\\eded\"}.bxs-hourglass-top:before{content:\"\\edee\"}.bxs-id-card:before{content:\"\\edef\"}.bxs-image:before{content:\"\\edf0\"}.bxs-image-add:before{content:\"\\edf1\"}.bxs-image-alt:before{content:\"\\edf2\"}.bxs-inbox:before{content:\"\\edf3\"}.bxs-info-circle:before{content:\"\\edf4\"}.bxs-info-square:before{content:\"\\edf5\"}.bxs-institution:before{content:\"\\edf6\"}.bxs-joystick:before{content:\"\\edf7\"}.bxs-joystick-alt:before{content:\"\\edf8\"}.bxs-joystick-button:before{content:\"\\edf9\"}.bxs-key:before{content:\"\\edfa\"}.bxs-keyboard:before{content:\"\\edfb\"}.bxs-label:before{content:\"\\edfc\"}.bxs-landmark:before{content:\"\\edfd\"}.bxs-landscape:before{content:\"\\edfe\"}.bxs-laugh:before{content:\"\\edff\"}.bxs-layer:before{content:\"\\ee00\"}.bxs-layer-minus:before{content:\"\\ee01\"}.bxs-layer-plus:before{content:\"\\ee02\"}.bxs-layout:before{content:\"\\ee03\"}.bxs-left-arrow:before{content:\"\\ee04\"}.bxs-left-arrow-alt:before{content:\"\\ee05\"}.bxs-left-arrow-circle:before{content:\"\\ee06\"}.bxs-left-arrow-square:before{content:\"\\ee07\"}.bxs-left-down-arrow-circle:before{content:\"\\ee08\"}.bxs-left-top-arrow-circle:before{content:\"\\ee09\"}.bxs-like:before{content:\"\\ee0a\"}.bxs-location-plus:before{content:\"\\ee0b\"}.bxs-lock:before{content:\"\\ee0c\"}.bxs-lock-alt:before{content:\"\\ee0d\"}.bxs-lock-open:before{content:\"\\ee0e\"}.bxs-lock-open-alt:before{content:\"\\ee0f\"}.bxs-log-in:before{content:\"\\ee10\"}.bxs-log-in-circle:before{content:\"\\ee11\"}.bxs-log-out:before{content:\"\\ee12\"}.bxs-log-out-circle:before{content:\"\\ee13\"}.bxs-low-vision:before{content:\"\\ee14\"}.bxs-magic-wand:before{content:\"\\ee15\"}.bxs-magnet:before{content:\"\\ee16\"}.bxs-map:before{content:\"\\ee17\"}.bxs-map-alt:before{content:\"\\ee18\"}.bxs-map-pin:before{content:\"\\ee19\"}.bxs-mask:before{content:\"\\ee1a\"}.bxs-medal:before{content:\"\\ee1b\"}.bxs-megaphone:before{content:\"\\ee1c\"}.bxs-meh:before{content:\"\\ee1d\"}.bxs-meh-alt:before{content:\"\\ee1e\"}.bxs-meh-blank:before{content:\"\\ee1f\"}.bxs-memory-card:before{content:\"\\ee20\"}.bxs-message:before{content:\"\\ee21\"}.bxs-message-add:before{content:\"\\ee22\"}.bxs-message-alt:before{content:\"\\ee23\"}.bxs-message-alt-add:before{content:\"\\ee24\"}.bxs-message-alt-check:before{content:\"\\ee25\"}.bxs-message-alt-detail:before{content:\"\\ee26\"}.bxs-message-alt-dots:before{content:\"\\ee27\"}.bxs-message-alt-edit:before{content:\"\\ee28\"}.bxs-message-alt-error:before{content:\"\\ee29\"}.bxs-message-alt-minus:before{content:\"\\ee2a\"}.bxs-message-alt-x:before{content:\"\\ee2b\"}.bxs-message-check:before{content:\"\\ee2c\"}.bxs-message-detail:before{content:\"\\ee2d\"}.bxs-message-dots:before{content:\"\\ee2e\"}.bxs-message-edit:before{content:\"\\ee2f\"}.bxs-message-error:before{content:\"\\ee30\"}.bxs-message-minus:before{content:\"\\ee31\"}.bxs-message-rounded:before{content:\"\\ee32\"}.bxs-message-rounded-add:before{content:\"\\ee33\"}.bxs-message-rounded-check:before{content:\"\\ee34\"}.bxs-message-rounded-detail:before{content:\"\\ee35\"}.bxs-message-rounded-dots:before{content:\"\\ee36\"}.bxs-message-rounded-edit:before{content:\"\\ee37\"}.bxs-message-rounded-error:before{content:\"\\ee38\"}.bxs-message-rounded-minus:before{content:\"\\ee39\"}.bxs-message-rounded-x:before{content:\"\\ee3a\"}.bxs-message-square:before{content:\"\\ee3b\"}.bxs-message-square-add:before{content:\"\\ee3c\"}.bxs-message-square-check:before{content:\"\\ee3d\"}.bxs-message-square-detail:before{content:\"\\ee3e\"}.bxs-message-square-dots:before{content:\"\\ee3f\"}.bxs-message-square-edit:before{content:\"\\ee40\"}.bxs-message-square-error:before{content:\"\\ee41\"}.bxs-message-square-minus:before{content:\"\\ee42\"}.bxs-message-square-x:before{content:\"\\ee43\"}.bxs-message-x:before{content:\"\\ee44\"}.bxs-meteor:before{content:\"\\ee45\"}.bxs-microchip:before{content:\"\\ee46\"}.bxs-microphone:before{content:\"\\ee47\"}.bxs-microphone-alt:before{content:\"\\ee48\"}.bxs-microphone-off:before{content:\"\\ee49\"}.bxs-minus-circle:before{content:\"\\ee4a\"}.bxs-minus-square:before{content:\"\\ee4b\"}.bxs-mobile:before{content:\"\\ee4c\"}.bxs-mobile-vibration:before{content:\"\\ee4d\"}.bxs-moon:before{content:\"\\ee4e\"}.bxs-mouse:before{content:\"\\ee4f\"}.bxs-mouse-alt:before{content:\"\\ee50\"}.bxs-movie:before{content:\"\\ee51\"}.bxs-movie-play:before{content:\"\\ee52\"}.bxs-music:before{content:\"\\ee53\"}.bxs-navigation:before{content:\"\\ee54\"}.bxs-network-chart:before{content:\"\\ee55\"}.bxs-news:before{content:\"\\ee56\"}.bxs-no-entry:before{content:\"\\ee57\"}.bxs-note:before{content:\"\\ee58\"}.bxs-notepad:before{content:\"\\ee59\"}.bxs-notification:before{content:\"\\ee5a\"}.bxs-notification-off:before{content:\"\\ee5b\"}.bxs-offer:before{content:\"\\ee5c\"}.bxs-package:before{content:\"\\ee5d\"}.bxs-paint:before{content:\"\\ee5e\"}.bxs-paint-roll:before{content:\"\\ee5f\"}.bxs-palette:before{content:\"\\ee60\"}.bxs-paper-plane:before{content:\"\\ee61\"}.bxs-parking:before{content:\"\\ee62\"}.bxs-paste:before{content:\"\\ee63\"}.bxs-pen:before{content:\"\\ee64\"}.bxs-pencil:before{content:\"\\ee65\"}.bxs-phone:before{content:\"\\ee66\"}.bxs-phone-call:before{content:\"\\ee67\"}.bxs-phone-incoming:before{content:\"\\ee68\"}.bxs-phone-off:before{content:\"\\ee69\"}.bxs-phone-outgoing:before{content:\"\\ee6a\"}.bxs-photo-album:before{content:\"\\ee6b\"}.bxs-piano:before{content:\"\\ee6c\"}.bxs-pie-chart:before{content:\"\\ee6d\"}.bxs-pie-chart-alt:before{content:\"\\ee6e\"}.bxs-pie-chart-alt-2:before{content:\"\\ee6f\"}.bxs-pin:before{content:\"\\ee70\"}.bxs-pizza:before{content:\"\\ee71\"}.bxs-plane:before{content:\"\\ee72\"}.bxs-plane-alt:before{content:\"\\ee73\"}.bxs-plane-land:before{content:\"\\ee74\"}.bxs-planet:before{content:\"\\ee75\"}.bxs-plane-take-off:before{content:\"\\ee76\"}.bxs-playlist:before{content:\"\\ee77\"}.bxs-plug:before{content:\"\\ee78\"}.bxs-plus-circle:before{content:\"\\ee79\"}.bxs-plus-square:before{content:\"\\ee7a\"}.bxs-pointer:before{content:\"\\ee7b\"}.bxs-polygon:before{content:\"\\ee7c\"}.bxs-printer:before{content:\"\\ee7d\"}.bxs-purchase-tag:before{content:\"\\ee7e\"}.bxs-purchase-tag-alt:before{content:\"\\ee7f\"}.bxs-pyramid:before{content:\"\\ee80\"}.bxs-quote-alt-left:before{content:\"\\ee81\"}.bxs-quote-alt-right:before{content:\"\\ee82\"}.bxs-quote-left:before{content:\"\\ee83\"}.bxs-quote-right:before{content:\"\\ee84\"}.bxs-quote-single-left:before{content:\"\\ee85\"}.bxs-quote-single-right:before{content:\"\\ee86\"}.bxs-radiation:before{content:\"\\ee87\"}.bxs-radio:before{content:\"\\ee88\"}.bxs-receipt:before{content:\"\\ee89\"}.bxs-rectangle:before{content:\"\\ee8a\"}.bxs-registered:before{content:\"\\ee8b\"}.bxs-rename:before{content:\"\\ee8c\"}.bxs-report:before{content:\"\\ee8d\"}.bxs-rewind-circle:before{content:\"\\ee8e\"}.bxs-right-arrow:before{content:\"\\ee8f\"}.bxs-right-arrow-alt:before{content:\"\\ee90\"}.bxs-right-arrow-circle:before{content:\"\\ee91\"}.bxs-right-arrow-square:before{content:\"\\ee92\"}.bxs-right-down-arrow-circle:before{content:\"\\ee93\"}.bxs-right-top-arrow-circle:before{content:\"\\ee94\"}.bxs-rocket:before{content:\"\\ee95\"}.bxs-ruler:before{content:\"\\ee96\"}.bxs-sad:before{content:\"\\ee97\"}.bxs-save:before{content:\"\\ee98\"}.bxs-school:before{content:\"\\ee99\"}.bxs-search:before{content:\"\\ee9a\"}.bxs-search-alt-2:before{content:\"\\ee9b\"}.bxs-select-multiple:before{content:\"\\ee9c\"}.bxs-send:before{content:\"\\ee9d\"}.bxs-server:before{content:\"\\ee9e\"}.bxs-shapes:before{content:\"\\ee9f\"}.bxs-share:before{content:\"\\eea0\"}.bxs-share-alt:before{content:\"\\eea1\"}.bxs-shield:before{content:\"\\eea2\"}.bxs-shield-alt-2:before{content:\"\\eea3\"}.bxs-shield-x:before{content:\"\\eea4\"}.bxs-ship:before{content:\"\\eea5\"}.bxs-shocked:before{content:\"\\eea6\"}.bxs-shopping-bag:before{content:\"\\eea7\"}.bxs-shopping-bag-alt:before{content:\"\\eea8\"}.bxs-shopping-bags:before{content:\"\\eea9\"}.bxs-show:before{content:\"\\eeaa\"}.bxs-skip-next-circle:before{content:\"\\eeab\"}.bxs-skip-previous-circle:before{content:\"\\eeac\"}.bxs-skull:before{content:\"\\eead\"}.bxs-sleepy:before{content:\"\\eeae\"}.bxs-slideshow:before{content:\"\\eeaf\"}.bxs-smile:before{content:\"\\eeb0\"}.bxs-sort-alt:before{content:\"\\eeb1\"}.bxs-spa:before{content:\"\\eeb2\"}.bxs-speaker:before{content:\"\\eeb3\"}.bxs-spray-can:before{content:\"\\eeb4\"}.bxs-spreadsheet:before{content:\"\\eeb5\"}.bxs-square:before{content:\"\\eeb6\"}.bxs-square-rounded:before{content:\"\\eeb7\"}.bxs-star:before{content:\"\\eeb8\"}.bxs-star-half:before{content:\"\\eeb9\"}.bxs-sticker:before{content:\"\\eeba\"}.bxs-stopwatch:before{content:\"\\eebb\"}.bxs-store:before{content:\"\\eebc\"}.bxs-store-alt:before{content:\"\\eebd\"}.bxs-sun:before{content:\"\\eebe\"}.bxs-tachometer:before{content:\"\\eebf\"}.bxs-tag:before{content:\"\\eec0\"}.bxs-tag-alt:before{content:\"\\eec1\"}.bxs-tag-x:before{content:\"\\eec2\"}.bxs-taxi:before{content:\"\\eec3\"}.bxs-tennis-ball:before{content:\"\\eec4\"}.bxs-terminal:before{content:\"\\eec5\"}.bxs-thermometer:before{content:\"\\eec6\"}.bxs-time:before{content:\"\\eec7\"}.bxs-time-five:before{content:\"\\eec8\"}.bxs-timer:before{content:\"\\eec9\"}.bxs-tired:before{content:\"\\eeca\"}.bxs-toggle-left:before{content:\"\\eecb\"}.bxs-toggle-right:before{content:\"\\eecc\"}.bxs-tone:before{content:\"\\eecd\"}.bxs-torch:before{content:\"\\eece\"}.bxs-to-top:before{content:\"\\eecf\"}.bxs-traffic:before{content:\"\\eed0\"}.bxs-traffic-barrier:before{content:\"\\eed1\"}.bxs-traffic-cone:before{content:\"\\eed2\"}.bxs-train:before{content:\"\\eed3\"}.bxs-trash:before{content:\"\\eed4\"}.bxs-trash-alt:before{content:\"\\eed5\"}.bxs-tree:before{content:\"\\eed6\"}.bxs-trophy:before{content:\"\\eed7\"}.bxs-truck:before{content:\"\\eed8\"}.bxs-t-shirt:before{content:\"\\eed9\"}.bxs-tv:before{content:\"\\eeda\"}.bxs-up-arrow:before{content:\"\\eedb\"}.bxs-up-arrow-alt:before{content:\"\\eedc\"}.bxs-up-arrow-circle:before{content:\"\\eedd\"}.bxs-up-arrow-square:before{content:\"\\eede\"}.bxs-upside-down:before{content:\"\\eedf\"}.bxs-upvote:before{content:\"\\eee0\"}.bxs-user:before{content:\"\\eee1\"}.bxs-user-account:before{content:\"\\eee2\"}.bxs-user-badge:before{content:\"\\eee3\"}.bxs-user-check:before{content:\"\\eee4\"}.bxs-user-circle:before{content:\"\\eee5\"}.bxs-user-detail:before{content:\"\\eee6\"}.bxs-user-minus:before{content:\"\\eee7\"}.bxs-user-pin:before{content:\"\\eee8\"}.bxs-user-plus:before{content:\"\\eee9\"}.bxs-user-rectangle:before{content:\"\\eeea\"}.bxs-user-voice:before{content:\"\\eeeb\"}.bxs-user-x:before{content:\"\\eeec\"}.bxs-vector:before{content:\"\\eeed\"}.bxs-vial:before{content:\"\\eeee\"}.bxs-video:before{content:\"\\eeef\"}.bxs-video-off:before{content:\"\\eef0\"}.bxs-video-plus:before{content:\"\\eef1\"}.bxs-video-recording:before{content:\"\\eef2\"}.bxs-videos:before{content:\"\\eef3\"}.bxs-virus:before{content:\"\\eef4\"}.bxs-virus-block:before{content:\"\\eef5\"}.bxs-volume:before{content:\"\\eef6\"}.bxs-volume-full:before{content:\"\\eef7\"}.bxs-volume-low:before{content:\"\\eef8\"}.bxs-volume-mute:before{content:\"\\eef9\"}.bxs-wallet:before{content:\"\\eefa\"}.bxs-wallet-alt:before{content:\"\\eefb\"}.bxs-washer:before{content:\"\\eefc\"}.bxs-watch:before{content:\"\\eefd\"}.bxs-watch-alt:before{content:\"\\eefe\"}.bxs-webcam:before{content:\"\\eeff\"}.bxs-widget:before{content:\"\\ef00\"}.bxs-window-alt:before{content:\"\\ef01\"}.bxs-wine:before{content:\"\\ef02\"}.bxs-wink-smile:before{content:\"\\ef03\"}.bxs-wink-tongue:before{content:\"\\ef04\"}.bxs-wrench:before{content:\"\\ef05\"}.bxs-x-circle:before{content:\"\\ef06\"}.bxs-x-square:before{content:\"\\ef07\"}.bxs-yin-yang:before{content:\"\\ef08\"}.bxs-zap:before{content:\"\\ef09\"}.bxs-zoom-in:before{content:\"\\ef0a\"}.bxs-zoom-out:before{content:\"\\ef0b\"}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./public/vendor/bootstrap-icons/fonts/bootstrap-icons.woff2?1fa40e8900654d2863d011707b9fb6f2":
/*!****************************************************************************************************!*\
  !*** ./public/vendor/bootstrap-icons/fonts/bootstrap-icons.woff2?1fa40e8900654d2863d011707b9fb6f2 ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "/fonts/bootstrap-icons.woff2?6d63d0501e5ed7b79dab993a344e5676";

/***/ }),

/***/ "./public/vendor/bootstrap-icons/fonts/bootstrap-icons.woff?1fa40e8900654d2863d011707b9fb6f2":
/*!***************************************************************************************************!*\
  !*** ./public/vendor/bootstrap-icons/fonts/bootstrap-icons.woff?1fa40e8900654d2863d011707b9fb6f2 ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "/fonts/bootstrap-icons.woff?4753c5ba57962b4d7bf8248a65c8e909";

/***/ }),

/***/ "./public/vendor/boxicons/fonts/boxicons.eot":
/*!***************************************************!*\
  !*** ./public/vendor/boxicons/fonts/boxicons.eot ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/fonts/boxicons.eot?65a8ce52fc5427e8f94dcc5845d439ec";

/***/ }),

/***/ "./public/vendor/boxicons/fonts/boxicons.svg":
/*!***************************************************!*\
  !*** ./public/vendor/boxicons/fonts/boxicons.svg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/fonts/boxicons.svg?9e2b21b135bc7d4c803f4f6defbdd91e";

/***/ }),

/***/ "./public/vendor/boxicons/fonts/boxicons.ttf":
/*!***************************************************!*\
  !*** ./public/vendor/boxicons/fonts/boxicons.ttf ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/fonts/boxicons.ttf?db9ddb1898dbd76badca2274342644cc";

/***/ }),

/***/ "./public/vendor/boxicons/fonts/boxicons.woff":
/*!****************************************************!*\
  !*** ./public/vendor/boxicons/fonts/boxicons.woff ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "/fonts/boxicons.woff?d12afc36557395143e4b7f5bd3d60ae6";

/***/ }),

/***/ "./public/vendor/boxicons/fonts/boxicons.woff2":
/*!*****************************************************!*\
  !*** ./public/vendor/boxicons/fonts/boxicons.woff2 ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/fonts/boxicons.woff2?df635aaf04cd75132f620e37ada9247c";

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Front.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Front.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Front.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Front.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/Front/Front.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Front/Front.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Front_vue_vue_type_template_id_ee92b658___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Front.vue?vue&type=template&id=ee92b658& */ "./resources/js/views/Front/Front.vue?vue&type=template&id=ee92b658&");
/* harmony import */ var _Front_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Front.vue?vue&type=script&lang=js& */ "./resources/js/views/Front/Front.vue?vue&type=script&lang=js&");
/* harmony import */ var _Front_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Front.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Front/Front.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Front_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Front_vue_vue_type_template_id_ee92b658___WEBPACK_IMPORTED_MODULE_0__.render,
  _Front_vue_vue_type_template_id_ee92b658___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Front/Front.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Front/Front.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Front/Front.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Front.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Front.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Front/Front.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Front/Front.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Front.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Front.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/Front/Front.vue?vue&type=template&id=ee92b658&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Front/Front.vue?vue&type=template&id=ee92b658& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_template_id_ee92b658___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_template_id_ee92b658___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_template_id_ee92b658___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Front.vue?vue&type=template&id=ee92b658& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Front.vue?vue&type=template&id=ee92b658&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Front.vue?vue&type=template&id=ee92b658&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Front.vue?vue&type=template&id=ee92b658& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "d-flex align-items-center", attrs: { id: "hero" } },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-lg-6 order-1 order-lg-2 hero-img",
                attrs: { "data-aos": "zoom-in", "data-aos-delay": "200" },
              },
              [
                _c("img", {
                  staticClass: "img-fluid animated",
                  attrs: { src: _vm.baseUrl + "images/hero.png", alt: "" },
                }),
              ]
            ),
          ]),
        ]),
      ]
    ),
    _vm._v(" "),
    _c("main", { attrs: { id: "main" } }, [
      _c("section", { staticClass: "services", attrs: { id: "services" } }, [
        _c(
          "div",
          { staticClass: "container", attrs: { "data-aos": "fade-up" } },
          [
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "content" }, [
              _c(
                "div",
                { staticClass: "row mt-5 mb-5" },
                _vm._l(_vm.services.data, function (v, k) {
                  return _c(
                    "div",
                    {
                      key: v.id,
                      staticClass: "pt-3",
                      class:
                        _vm.services.data.length >= 3 ? "col-md-4" : "col-md-6",
                      attrs: {
                        "data-aos": "fade-right",
                        "data-aos-delay": 100 * (k + 1),
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "card elementskit-info-box-icon",
                          class: v.pinned == 1 ? "active-box" : "",
                        },
                        [
                          _c("div", { staticClass: "card-body text-center" }, [
                            _c("div", { staticClass: "icons" }, [
                              _c("i", {
                                class: v.image,
                                staticStyle: { "font-size": "75px !important" },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "text-center pt-2" }, [
                            _c("h2", [_vm._v(_vm._s(v.title))]),
                            _vm._v(" "),
                            _c("p", [_vm._v(_vm._s(v.body))]),
                          ]),
                        ]
                      ),
                    ]
                  )
                }),
                0
              ),
            ]),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "about", attrs: { id: "about" } }, [
        _c(
          "div",
          { staticClass: "container", attrs: { "data-aos": "fade-up" } },
          [
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "row mb-2" }, [
              _vm._m(4),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: {
                    decoding: "async",
                    src: _vm.baseUrl + "images/skills.png",
                    title: "left_image.png",
                    alt: "left_image.png",
                    loading: "lazy",
                  },
                }),
              ]),
            ]),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "benefit", attrs: { id: "benefit" } }, [
        _c("div", { staticClass: "container" }, [
          _vm._m(5),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.benefits.data, function (v, k) {
              return _c(
                "div",
                {
                  key: v.id,
                  staticClass: "col-md-6",
                  attrs: {
                    "data-aos": "fade-up",
                    "data-aos-delay": 300 * (k + 1),
                  },
                },
                [
                  _c("div", { staticClass: "d-flex" }, [
                    _c("div", { staticClass: "col-3" }, [
                      _c(
                        "div",
                        {
                          staticClass: "icon-benefit",
                          staticStyle: {
                            "border-radius": "50%",
                            color: "rgb(255, 255, 255)",
                            "-webkit-text-stroke": "2px rgb(125, 174, 228)",
                            width: "100px",
                            height: "100px",
                            "line-height": "100px",
                            "text-align": "center",
                            "margin-left": "40px",
                          },
                        },
                        [
                          _c("i", {
                            class: v.image,
                            staticStyle: { "font-size": "50px !important" },
                          }),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-9" }, [
                      _c("h2", [_vm._v(_vm._s(v.title))]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                              " +
                            _vm._s(v.body) +
                            "\n                            "
                        ),
                      ]),
                    ]),
                  ]),
                ]
              )
            }),
            0
          ),
        ]),
      ]),
      _vm._v(" "),
      _vm._m(6),
      _vm._v(" "),
      _vm._m(7),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "testimonials", attrs: { id: "testimonials" } },
        [
          _c(
            "div",
            { staticClass: "container", attrs: { "data-aos": "zoom-in" } },
            [
              _c(
                "div",
                {
                  staticClass: "testimonials-slider swiper",
                  attrs: { "data-aos": "fade-up", "data-aos-delay": "100" },
                },
                [
                  _c(
                    "div",
                    { staticClass: "swiper-wrapper" },
                    _vm._l(_vm.testimoni.data, function (v) {
                      return _c(
                        "div",
                        { key: v.id, staticClass: "swiper-slide" },
                        [
                          _c("div", { staticClass: "testimonial-item" }, [
                            _c("img", {
                              staticClass: "testimonial-img",
                              attrs: { src: v.image, alt: "" },
                            }),
                            _vm._v(" "),
                            _c("h3", [_vm._v(_vm._s(v.name))]),
                            _vm._v(" "),
                            _c("h4", [_vm._v(_vm._s(v.title))]),
                            _vm._v(" "),
                            _c("p", [
                              _c("i", {
                                staticClass:
                                  "bx bxs-quote-alt-left quote-icon-left",
                              }),
                              _vm._v(
                                "\n                        " +
                                  _vm._s(v.body) +
                                  "\n                        "
                              ),
                              _c("i", {
                                staticClass:
                                  "bx bxs-quote-alt-right quote-icon-right",
                              }),
                            ]),
                          ]),
                        ]
                      )
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "swiper-pagination" }),
                ]
              ),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c("section", { staticClass: "clients", attrs: { id: "clients" } }, [
        _c(
          "div",
          { staticClass: "container", attrs: { "data-aos": "zoom-in" } },
          [
            _c("div", { staticClass: "clients-slider swiper" }, [
              _c(
                "div",
                { staticClass: "swiper-wrapper align-items-center" },
                _vm._l(_vm.client.data, function (v) {
                  return _c("div", { key: v.id, staticClass: "swiper-slide" }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: { src: v.image, alt: "" },
                    }),
                  ])
                }),
                0
              ),
            ]),
          ]
        ),
      ]),
      _vm._v(" "),
      _vm._m(8),
      _vm._v(" "),
      _c("section", { staticClass: "blog", attrs: { id: "blog" } }, [
        _c("div", { staticClass: "container mt-3" }, [
          _vm._m(9),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row" },
            [
              _vm._l(_vm.posts.data, function (v, k) {
                return _c(
                  "div",
                  {
                    key: v.id,
                    staticClass: "col-md-4",
                    attrs: {
                      "data-aos": "fade-left",
                      "data-aos-delay": 300 * (k + 1),
                    },
                  },
                  [
                    _c("div", { staticClass: "content_blog pt-2" }, [
                      _c("a", { attrs: { href: "" } }, [
                        _c("div", {
                          staticClass: "content_blog-overlay fadeIn-bottom",
                        }),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "content_card-image",
                          attrs: { src: v.image, alt: "" },
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "content_blog-details" }, [
                          _c("h3", { staticClass: "content_card-title" }, [
                            _vm._v(_vm._s(v.title) + " "),
                          ]),
                          _vm._v(" "),
                          _c("p", { domProps: { innerHTML: _vm._s(v.body) } }),
                        ]),
                      ]),
                    ]),
                  ]
                )
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "d-flex justify-content-end pt-2 px-3 text-white",
                  class: _vm.posts.count >= 4 ? "" : "d-none",
                },
                [_vm._m(10)]
              ),
            ],
            2
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "why-us section-bg", attrs: { id: "faq" } },
        [
          _c(
            "div",
            {
              staticClass: "container-fluid",
              attrs: { "data-aos": "fade-up" },
            },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1",
                  },
                  [
                    _vm._m(11),
                    _vm._v(" "),
                    _c("div", { staticClass: "accordion-list" }, [
                      _c(
                        "ul",
                        _vm._l(_vm.faq.data, function (v) {
                          return _c("li", { key: v.id }, [
                            _c(
                              "a",
                              {
                                staticClass: "collapse",
                                class: v.id == 1 ? "collapse" : "collapsed",
                                attrs: {
                                  "data-bs-toggle": "collapse",
                                  "data-bs-target": "#accordion-list-" + v.id,
                                },
                              },
                              [
                                _c("span", [_vm._v(_vm._s(v.id))]),
                                _vm._v(
                                  " " +
                                    _vm._s(v.title) +
                                    " \n                          "
                                ),
                                _c("i", {
                                  staticClass: "bx bx-chevron-down icon-show",
                                }),
                                _vm._v(" "),
                                _c("i", {
                                  staticClass: "bx bx-chevron-up icon-close",
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "collapse",
                                class: v.id == 1 ? "show" : "",
                                attrs: {
                                  id: "accordion-list-" + v.id,
                                  "data-bs-parent": ".accordion-list",
                                },
                              },
                              [
                                _c("p", [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(v.body) +
                                      " \n                          "
                                  ),
                                ]),
                              ]
                            ),
                          ])
                        }),
                        0
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-lg-5 align-items-stretch order-1 order-lg-2 img",
                    staticStyle: {
                      "background-image": 'url("images/hero-img.png")',
                    },
                    attrs: { "data-aos": "zoom-in", "data-aos-delay": "150" },
                  },
                  [_vm._v(" ")]
                ),
              ]),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _vm._m(12),
    ]),
    _vm._v(" "),
    _c("footer", { attrs: { id: "footer-front" } }, [
      _c("div", { staticClass: "footer-top" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _vm._m(13),
            _vm._v(" "),
            _vm._m(14),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3 col-md-6 footer-links" }, [
              _c("h4", [_vm._v("Our Services")]),
              _vm._v(" "),
              _c(
                "ul",
                _vm._l(_vm.services.data, function (v) {
                  return _c("li", { key: v.id }, [
                    _c("i", { staticClass: "bx bx-chevron-right" }),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "#service" } }, [
                      _vm._v(_vm._s(v.title)),
                    ]),
                  ])
                }),
                0
              ),
            ]),
            _vm._v(" "),
            _vm._m(15),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "fixed-top", attrs: { id: "header" } }, [
      _c("div", { staticClass: "container d-flex align-items-center" }, [
        _c("h1", { staticClass: "logo me-auto" }, [
          _c("a", { attrs: { href: "index.html" } }, [_vm._v("NewPage")]),
        ]),
        _vm._v(" "),
        _c("nav", { staticClass: "navbar", attrs: { id: "navbar" } }, [
          _c("ul", [
            _c("li", [
              _c(
                "a",
                {
                  staticClass: "nav-link scrollto active",
                  attrs: { href: "#hero" },
                },
                [_vm._v("Home")]
              ),
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  staticClass: "nav-link scrollto",
                  attrs: { href: "#services" },
                },
                [_vm._v("Services")]
              ),
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                { staticClass: "nav-link scrollto", attrs: { href: "#about" } },
                [_vm._v("About")]
              ),
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  staticClass: "nav-link scrollto",
                  attrs: { href: "#benefit" },
                },
                [_vm._v("Benefit")]
              ),
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  staticClass: "nav-link scrollto",
                  attrs: { href: "#projects" },
                },
                [_vm._v("Portfolio")]
              ),
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  staticClass: "nav-link scrollto",
                  attrs: { href: "#price_list" },
                },
                [_vm._v("Price")]
              ),
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                { staticClass: "nav-link scrollto", attrs: { href: "#blog" } },
                [_vm._v("Blog")]
              ),
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                { staticClass: "nav-link scrollto", attrs: { href: "#faq" } },
                [_vm._v("Faq")]
              ),
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  staticClass: "getstarted scrollto",
                  attrs: { href: "#about" },
                },
                [_vm._v("Get Started")]
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("i", { staticClass: "bi bi-list mobile-nav-toggle" }),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1",
        attrs: { "data-aos": "fade-up", "data-aos-delay": "200" },
      },
      [
        _c("h1", [_vm._v("Better Solutions For Your Business")]),
        _vm._v(" "),
        _c("h2", [
          _vm._v(
            "We are team of talented designers making websites with Bootstrap"
          ),
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "d-flex justify-content-center justify-content-lg-start",
          },
          [
            _c(
              "a",
              {
                staticClass: "btn-get-started scrollto",
                attrs: { href: "#about" },
              },
              [_vm._v("Get Started")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "glightbox btn-watch-video",
                attrs: { href: "https://www.youtube.com/watch?v=jDDaplaOz7Q" },
              },
              [
                _c("i", { staticClass: "bi bi-play-circle" }),
                _c("span", [_vm._v("Watch Video")]),
              ]
            ),
          ]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title" }, [
      _c("h2", [_vm._v("Our Service")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise"
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ekit-wid-con mb-4" }, [
      _c("div", { staticClass: "elementskit-border-divider" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-md-6",
        staticStyle: { "text-align": "left !important" },
      },
      [
        _c("div", { staticClass: "section-title2" }, [
          _c("h2", [_vm._v("Penjelasan Singkat Tentang Agency")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise"
            ),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "section-title",
        attrs: { "data-aos": "fade-up", "data-aos-delay": "200" },
      },
      [
        _c("h2", [_vm._v("Benefit")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise"
          ),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      { staticClass: "price_list", attrs: { id: "price_list" } },
      [
        _c("div", { staticClass: "container mt-3" }, [
          _c(
            "div",
            {
              staticClass: "section-title",
              attrs: { "data-aos": "fade-up", "data-aos-delay": "200" },
            },
            [
              _c("h2", [_vm._v("Price List")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise"
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-5 mb-5" }, [
            _c(
              "div",
              {
                staticClass: "col-md-4 pt-3 icon-box2",
                attrs: { "data-aos": "fade-up", "data-aos-delay": "200" },
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "card",
                    staticStyle: {
                      border: "0.5px groove #0000001c",
                      "box-shadow": "0px 0 30px rgba(1, 41, 112, 0.1)",
                    },
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "card-body text-center",
                        staticStyle: {
                          "min-height": "470px !important",
                          padding: "10%",
                        },
                      },
                      [
                        _c("h3", [_vm._v("Starter")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "mt-2 mb-4",
                            staticStyle: {
                              background: "#a276ff",
                              color: "white",
                              "border-radius": "48px 48px 48px 48px",
                              padding: "15px",
                              "font-weight": "bold",
                            },
                          },
                          [
                            _c("h2", [
                              _vm._v(
                                "\n                                        $ 5.99 Month \n                                    "
                              ),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita veritatis sit a laudantium incidunt, ut adipisci aliquam et voluptas molestiae, animi provident quis! Rem facere id modi velit cumque."
                          ),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-md-4 pt-3 icon-box2",
                attrs: { "data-aos": "fade-up", "data-aos-delay": "200" },
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "card",
                    staticStyle: {
                      "min-height": "100px",
                      "background-color": "#a276ff !important",
                      color: "white",
                      "box-shadow": "0px 0 30px rgba(1, 41, 112, 0.1)",
                    },
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "card-body text-center",
                        staticStyle: {
                          "min-height": "470px !important",
                          padding: "10%",
                        },
                      },
                      [
                        _c("h3", [_vm._v("Basic")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "mt-2 mb-4",
                            staticStyle: {
                              "background-color": "transparent",
                              "background-image":
                                "linear-gradient(-35deg, #ffffff 0%, #ffffff 100%)",
                              "border-color": "rgba(0,0,0,0)",
                              "border-radius": "48px 48px 48px 48px",
                              color: "black",
                              padding: "15px",
                              "font-weight": "bold",
                            },
                          },
                          [
                            _c("h2", [
                              _vm._v(
                                "\n                                        $ 5.99 Month \n                                    "
                              ),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita veritatis sit a laudantium incidunt, ut adipisci aliquam et voluptas molestiae, animi provident quis! Rem facere id modi velit cumque."
                          ),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-md-4 pt-3 icon-box2",
                attrs: { "data-aos": "fade-up", "data-aos-delay": "200" },
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "card",
                    staticStyle: {
                      border: "0.5px groove #0000001c",
                      "box-shadow": "0px 0 30px rgba(1, 41, 112, 0.1)",
                    },
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "card-body text-center",
                        staticStyle: {
                          "min-height": "470px !important",
                          padding: "10%",
                        },
                      },
                      [
                        _c("h3", [_vm._v("Pro")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "mt-2 mb-4",
                            staticStyle: {
                              background: "#a276ff",
                              color: "white",
                              "border-radius": "48px 48px 48px 48px",
                              padding: "15px",
                              "font-weight": "bold",
                            },
                          },
                          [
                            _c("h2", [
                              _vm._v(
                                "\n                                        $ 5.99 Month \n                                    "
                              ),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita veritatis sit a laudantium incidunt, ut adipisci aliquam et voluptas molestiae, animi provident quis! Rem facere id modi velit cumque."
                          ),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      { staticClass: "projects", attrs: { id: "projects" } },
      [
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            {
              staticClass: "section-title aos-init aos-animate",
              attrs: { "data-aos": "fade-up", "data-aos-delay": "200" },
            },
            [
              _c("h2", [
                _vm._v("Our "),
                _c("span", { staticClass: "text-primary" }, [
                  _vm._v("Project"),
                ]),
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise"
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex text-center" }, [
            _c(
              "div",
              {
                staticClass: "col-4",
                attrs: { "data-aos": "fade-up", "data-aos-delay": "200" },
              },
              [
                _c("h1", { staticClass: "text-primary" }, [
                  _vm._v("+ "),
                  _c("span", {
                    staticClass: "purecounter",
                    attrs: {
                      "data-purecounter-start": "0",
                      "data-purecounter-end": "35",
                      "data-purecounter-duration": "4",
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("p", [_vm._v("WorlWide CLient")]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-4",
                attrs: { "data-aos": "fade-up", "data-aos-delay": "200" },
              },
              [
                _c("h1", { staticClass: "text-primary" }, [
                  _vm._v("+ "),
                  _c("span", {
                    staticClass: "purecounter",
                    attrs: {
                      "data-purecounter-start": "0",
                      "data-purecounter-end": "350",
                      "data-purecounter-duration": "4",
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("p", [_vm._v("Team Member")]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-4",
                attrs: { "data-aos": "fade-up", "data-aos-delay": "200" },
              },
              [
                _c("h1", { staticClass: "text-primary" }, [
                  _vm._v("+ "),
                  _c("span", {
                    staticClass: "purecounter",
                    attrs: {
                      "data-purecounter-start": "0",
                      "data-purecounter-end": "30",
                      "data-purecounter-duration": "4",
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("p", [_vm._v("Adversting Spend")]),
              ]
            ),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      { staticClass: "team d-none", attrs: { id: "team" } },
      [
        _c("div", { staticClass: "container mt-3" }, [
          _c(
            "div",
            {
              staticClass: "section-title",
              attrs: { "data-aos": "fade-up", "data-aos-delay": "200" },
            },
            [
              _c("h2", [_vm._v("Our Teams")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise"
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "content_card" }, [
                _c("div", { staticClass: "content_card-overlay" }),
                _vm._v(" "),
                _c("img", {
                  staticClass: "content_card-image",
                  attrs: {
                    src: "https://source.unsplash.com/HkTMcmlMOUQ",
                    alt: "",
                  },
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "content_card-details fadeIn-bottom" },
                  [
                    _c("h3", { staticClass: "content_card-title" }, [
                      _vm._v("This is a title"),
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v("Manager specialis")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-container" }, [
                      _c("div", { staticClass: "flex-item" }, [
                        _c("a", { attrs: { href: "" } }, [
                          _c("span", { staticClass: "bi bi-instagram" }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex-item" }, [
                        _c("a", { attrs: { href: "" } }, [
                          _c("span", { staticClass: "bi bi-linkedin" }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex-item" }, [
                        _c("a", { attrs: { href: "" } }, [
                          _c("span", { staticClass: "bi bi-twitter" }),
                        ]),
                      ]),
                    ]),
                  ]
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "content_card" }, [
                _c("div", { staticClass: "content_card-overlay" }),
                _vm._v(" "),
                _c("img", {
                  staticClass: "content_card-image",
                  attrs: {
                    src: "https://source.unsplash.com/HkTMcmlMOUQ",
                    alt: "",
                  },
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "content_card-details fadeIn-bottom" },
                  [
                    _c("h3", { staticClass: "content_card-title" }, [
                      _vm._v("This is a title"),
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v("Manager specialis")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-container" }, [
                      _c("div", { staticClass: "flex-item" }, [
                        _c("a", { attrs: { href: "" } }, [
                          _c("span", { staticClass: "bi bi-instagram" }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex-item" }, [
                        _c("a", { attrs: { href: "" } }, [
                          _c("span", { staticClass: "bi bi-linkedin" }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex-item" }, [
                        _c("a", { attrs: { href: "" } }, [
                          _c("span", { staticClass: "bi bi-twitter" }),
                        ]),
                      ]),
                    ]),
                  ]
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "content_card" }, [
                _c("div", { staticClass: "content_card-overlay" }),
                _vm._v(" "),
                _c("img", {
                  staticClass: "content_card-image",
                  attrs: {
                    src: "https://source.unsplash.com/HkTMcmlMOUQ",
                    alt: "",
                  },
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "content_card-details fadeIn-bottom" },
                  [
                    _c("h3", { staticClass: "content_card-title" }, [
                      _vm._v("This is a title"),
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v("Manager specialis")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-container" }, [
                      _c("div", { staticClass: "flex-item" }, [
                        _c("a", { attrs: { href: "" } }, [
                          _c("span", { staticClass: "bi bi-instagram" }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex-item" }, [
                        _c("a", { attrs: { href: "" } }, [
                          _c("span", { staticClass: "bi bi-linkedin" }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex-item" }, [
                        _c("a", { attrs: { href: "" } }, [
                          _c("span", { staticClass: "bi bi-twitter" }),
                        ]),
                      ]),
                    ]),
                  ]
                ),
              ]),
            ]),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "section-title",
        attrs: { "data-aos": "fade-up", "data-aos-delay": "200" },
      },
      [
        _c("h2", [_vm._v("Our Blog")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise"
          ),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "btn btn-sm btn-warning text-white", attrs: { href: "" } },
      [_vm._v("More   "), _c("span", { staticClass: "bi bi-arrow-right" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title" }, [
      _c("h2", [
        _vm._v("Faq "),
        _c("span", { staticClass: "text-primary" }, [_vm._v("Pertanyaan")]),
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise"
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { attrs: { id: "whatsapp" } }, [
      _c("i", { staticClass: "bx bxl-whatsapp" }),
      _vm._v(" "),
      _c("a", { attrs: { href: "" } }, [_c("span", [_vm._v("Whatsapp Kami")])]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-6 footer-contact" }, [
      _c("h3", [_vm._v("Arsha")]),
      _vm._v(" "),
      _c("p", [
        _vm._v("\n            A108 Adam Street "),
        _c("br"),
        _vm._v("\n            New York, NY 535022"),
        _c("br"),
        _vm._v("\n            United States "),
        _c("br"),
        _c("br"),
        _vm._v(" "),
        _c("strong", [_vm._v("Phone:")]),
        _vm._v(" +1 5589 55488 55"),
        _c("br"),
        _vm._v(" "),
        _c("strong", [_vm._v("Email:")]),
        _vm._v(" info@example.com"),
        _c("br"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-6 footer-links" }, [
      _c("h4", [_vm._v("Useful Links")]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("i", { staticClass: "bx bx-chevron-right" }),
          _vm._v(" "),
          _c("a", { attrs: { href: "#" } }, [_vm._v("Home")]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("i", { staticClass: "bx bx-chevron-right" }),
          _vm._v(" "),
          _c("a", { attrs: { href: "#" } }, [_vm._v("About us")]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("i", { staticClass: "bx bx-chevron-right" }),
          _vm._v(" "),
          _c("a", { attrs: { href: "#" } }, [_vm._v("Services")]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("i", { staticClass: "bx bx-chevron-right" }),
          _vm._v(" "),
          _c("a", { attrs: { href: "#" } }, [_vm._v("Terms of service")]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("i", { staticClass: "bx bx-chevron-right" }),
          _vm._v(" "),
          _c("a", { attrs: { href: "#" } }, [_vm._v("Privacy policy")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-6 footer-links" }, [
      _c("h4", [_vm._v("Our Social Networks")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies"
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "social-links mt-3" }, [
        _c("a", { staticClass: "twitter", attrs: { href: "#" } }, [
          _c("i", { staticClass: "bx bxl-tiktok" }),
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "twitter", attrs: { href: "#" } }, [
          _c("i", { staticClass: "bx bxl-twitter" }),
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "facebook", attrs: { href: "#" } }, [
          _c("i", { staticClass: "bx bxl-facebook" }),
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "instagram", attrs: { href: "#" } }, [
          _c("i", { staticClass: "bx bxl-instagram" }),
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "linkedin", attrs: { href: "#" } }, [
          _c("i", { staticClass: "bx bxl-linkedin" }),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);