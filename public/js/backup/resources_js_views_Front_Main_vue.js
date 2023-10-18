"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Front_Main_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Main.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Main.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Main',
  data: function data() {
    return {
      isLoading: false,
      baseurl: baseurl,
      testimoni: [],
      client: [],
      faq: [],
      services: [],
      benefits: [],
      posts: [],
      company: [],
      bgbanner: {},
      portofolio_banner: {},
      faq_banner: {}
    };
  },
  methods: {
    swiperTestimoni: function swiperTestimoni() {
      /**
       * Testimonials slider
       */
      // setTimeout(function(){
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
      // },1500)
    },
    swiperClient: function swiperClient() {
      /**
       * Clients Slider
       */

      new PureCounter();
      var glightbox = GLightbox({
        selector: '.glightbox'
      });
      // setTimeout(function(){
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
      // },1500) 
    },
    counterRun: function counterRun() {
      /**
       * Initiate Pure Counter 
       */
      setTimeout(function () {}, 1500);
    },
    readyContent: function readyContent($this, state) {
      if (state == 'complete') {
        // setTimeout(function(){
        $this.isLoading = true;
        // },1200);
      }

      setTimeout(function () {
        if ($this.isLoading) {
          // GETDATA END
          //setTimeout(function(){
          /**
           * Mobile nav active
           */
          $this.$onEvent('click', 'li > .nav-link', function (e) {
            $this.$selectEvent('.nav-link', true).forEach(function (e) {
              return e.classList.remove("active");
            });
            this.classList.add("active");
          }, true);
          /**
           * Mobile nav toggle
           */
          $this.$onEvent('click', '.mobile-nav-toggle', function (e) {
            $this.$selectEvent('#navbar').classList.toggle('navbar-mobile');
            this.classList.toggle('bi-list');
            this.classList.toggle('bi-x');
          });
          /**
           * Mobile nav dropdowns activate
           */

          $this.$onEvent('click', '.navbar  .dropdown > a', function (e) {
            console.log(this);
            if ($this.$selectEvent('#navbar').classList.contains('navbar-mobile')) {
              e.preventDefault();
              this.nextElementSibling.classList.toggle('dropdown-active');
            }
          }, true);

          /**
           * Toggle .header-scrolled class to #header when page is scrolled
           */
          var selectHeader = $this.$selectEvent('#header');
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
          //},1000);
        }
      }, 1300);
    }
  },
  mounted: function mounted() {
    var _this = this;
    var $this = this;
    $this.readyContent($this, document.readyState);
    document.onreadystatechange = function () {
      $this.readyContent($this, document.readyState);
    };
    // document.onreadystatechange = () =>{ 
    //     if(document.readyState == 'complete'){
    //       setTimeout(function(){
    //           $this.isLoading = true;
    //       },1200);
    //       setTimeout(function(){
    //         if($this.isLoading){
    //         // GETDATA END
    //         //setTimeout(function(){
    //             /**
    //              * Mobile nav active
    //              */ 
    //             $this.$onEvent('click', 'li > .nav-link', function(e) { 
    //                 $this.$selectEvent('.nav-link',true).forEach(e => e.classList.remove("active"));
    //                 this.classList.add("active");
    //             },true);
    //             /**
    //              * Mobile nav toggle
    //              */ 
    //             $this.$onEvent('click', '.mobile-nav-toggle', function(e) {
    //             $this.$selectEvent('#navbar').classList.toggle('navbar-mobile')
    //             this.classList.toggle('bi-list')
    //             this.classList.toggle('bi-x')
    //             })
    //             /**
    //              * Mobile nav dropdowns activate
    //              */

    //             $this.$onEvent('click', '.navbar  .dropdown > a', function(e) {
    //             console.log(this);
    //             if ($this.$selectEvent('#navbar').classList.contains('navbar-mobile')) {
    //                 e.preventDefault()
    //                 this.nextElementSibling.classList.toggle('dropdown-active')
    //             }
    //             }, true);

    //             /**
    //              * Toggle .header-scrolled class to #header when page is scrolled
    //              */
    //             let selectHeader = $this.$selectEvent('#header')
    //             if (selectHeader) {
    //             const headerScrolled = () => {
    //                 if (window.scrollY > 100) {
    //                 selectHeader.classList.add('header-scrolled')
    //                 } else {
    //                 selectHeader.classList.remove('header-scrolled')
    //                 }
    //             }
    //             window.addEventListener('load', headerScrolled)
    //             $this.$onscrollEvent(document, headerScrolled)
    //             }
    //         //},1000);

    //         }
    //       },1300);
    //     }
    // }
    this.$axios.get('/api/social_media').then(function (response) {
      _this.contacts = response.data;
    })["catch"](function (err) {
      console.log(err);
    });
    this.$axios.get('/api/company').then(function (response) {
      _this.company = response.data;
      _this.bgbanner = {
        background: 'url("' + _this.company.data.banner + '") no-repeat',
        "background-attachment": "fixed"
      };
      _this.portofolio_banner = {
        background: 'url("' + _this.company.data.portofolio_banner + '") no-repeat',
        "background-attachment": "fixed"
      };
      _this.faq_banner = {
        "background-image": 'url("' + _this.company.data.faq_banner + '")'
      };
      $this.counterRun();
    })["catch"](function (err) {
      console.log(err);
    });
    this.$axios.get('/api/testimoni/all/data').then(function (response) {
      _this.testimoni = response.data;
      // if(this.testimoni.length >0 ){
      setTimeout(function () {
        $this.swiperTestimoni();
      }, 1400);
      // }
    })["catch"](function (err) {
      console.log(err);
    });
    this.$axios.get('/api/client/all/data').then(function (response) {
      _this.client = response.data;
      // if(this.testimoni.length >0 ){
      setTimeout(function () {
        $this.swiperClient();
      }, 1400);
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
  }
});

/***/ }),

/***/ "./resources/js/views/Front/Main.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Front/Main.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Main_vue_vue_type_template_id_cf83f644___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=cf83f644& */ "./resources/js/views/Front/Main.vue?vue&type=template&id=cf83f644&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/views/Front/Main.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_cf83f644___WEBPACK_IMPORTED_MODULE_0__.render,
  _Main_vue_vue_type_template_id_cf83f644___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Front/Main.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Front/Main.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Front/Main.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Main.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Front/Main.vue?vue&type=template&id=cf83f644&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Front/Main.vue?vue&type=template&id=cf83f644& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_cf83f644___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_cf83f644___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_cf83f644___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=template&id=cf83f644& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Main.vue?vue&type=template&id=cf83f644&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Main.vue?vue&type=template&id=cf83f644&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Main.vue?vue&type=template&id=cf83f644& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.isLoading
    ? _c("main", [_vm._m(0)])
    : _c("main", [
        _c(
          "section",
          {
            staticClass: "d-flex align-items-center",
            style: [_vm.styles, _vm.bgbanner],
            attrs: { id: "hero" },
          },
          [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1",
                    attrs: { "data-aos": "fade-up", "data-aos-delay": "200" },
                  },
                  [
                    _vm.company.data
                      ? _c("div", {
                          domProps: {
                            innerHTML: _vm._s(_vm.company.data.title),
                          },
                        })
                      : _vm._e(),
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
                            attrs: { href: _vm.contacts.data.youtube },
                          },
                          [
                            _c("i", { staticClass: "bi bi-play-circle" }),
                            _c("span", [_vm._v("Watch Video")]),
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
                    staticClass: "col-lg-6 order-1 order-lg-2 hero-img",
                    attrs: { "data-aos": "zoom-in", "data-aos-delay": "200" },
                  },
                  [
                    _c("img", {
                      staticClass: "img-fluid animated",
                      attrs: { src: _vm.company.data.cta_banner, alt: "" },
                    }),
                  ]
                ),
              ]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c("main", { attrs: { id: "main" } }, [
          _c(
            "section",
            { staticClass: "services", attrs: { id: "services" } },
            [
              _c(
                "div",
                { staticClass: "container", attrs: { "data-aos": "fade-up" } },
                [
                  _c("div", { staticClass: "section-title" }, [
                    _vm.company.data
                      ? _c("div", {
                          domProps: {
                            innerHTML: _vm._s(_vm.company.data.service),
                          },
                        })
                      : _vm._e(),
                  ]),
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
                              _vm.services.data.length >= 3
                                ? "col-md-4"
                                : "col-md-6",
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
                                _c(
                                  "div",
                                  { staticClass: "card-body text-center" },
                                  [
                                    _c("div", { staticClass: "icons" }, [
                                      _c("img", {
                                        staticStyle: {
                                          "font-size": "75px !important",
                                        },
                                        attrs: { src: v.image },
                                      }),
                                    ]),
                                  ]
                                ),
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
            ]
          ),
          _vm._v(" "),
          _c("section", { staticClass: "about", attrs: { id: "about" } }, [
            _c(
              "div",
              { staticClass: "container", attrs: { "data-aos": "fade-up" } },
              [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "row mb-2" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "section-title2" }, [
                      _vm.company.data
                        ? _c("div", {
                            domProps: {
                              innerHTML: _vm._s(_vm.company.data.about),
                            },
                          })
                        : _vm._e(),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: {
                        decoding: "async",
                        src: _vm.company.data.blog_baner,
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
              _c(
                "div",
                {
                  staticClass: "section-title",
                  attrs: { "data-aos": "fade-up", "data-aos-delay": "200" },
                },
                [
                  _vm.company.data
                    ? _c("div", {
                        domProps: {
                          innerHTML: _vm._s(_vm.company.data.benefit),
                        },
                      })
                    : _vm._e(),
                ]
              ),
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
                                color: "rgb(166, 198, 241)",
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
                          _c("h4", [_vm._v(_vm._s(v.title))]),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticStyle: {
                                "text-align": "justify !important",
                              },
                            },
                            [
                              _vm._v(
                                "\r\n                                  " +
                                  _vm._s(v.body) +
                                  "\r\n                                "
                              ),
                            ]
                          ),
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
          _c(
            "section",
            { staticClass: "price_list", attrs: { id: "price_list" } },
            [
              _c("div", { staticClass: "container-fluid mt-3" }, [
                _c(
                  "div",
                  {
                    staticClass: "section-title",
                    attrs: { "data-aos": "fade-up", "data-aos-delay": "200" },
                  },
                  [
                    _vm.company.data
                      ? _c("div", {
                          domProps: {
                            innerHTML: _vm._s(_vm.company.data.price_list),
                          },
                        })
                      : _vm._e(),
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-5 mb-5" }, [
                  _c(
                    "div",
                    {
                      staticClass: "col-md-6 col-lg-3 pt-3 icon-box2",
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
                          _c("div", { staticClass: "card-body text-center" }, [
                            _vm.company.data
                              ? _c("div", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.company.data.title_harga_1
                                    ),
                                  },
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: _vm.company.data.link_1,
                                  target: "_blank",
                                },
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "mt-2 mb-4 label-price" },
                                  [
                                    _vm.company.data
                                      ? _c("div", {
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.company.data.harga_1
                                            ),
                                          },
                                        })
                                      : _vm._e(),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _vm.company.data
                              ? _c("div", {
                                  staticClass: "px-4",
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.company.data.body_harga_1
                                    ),
                                  },
                                })
                              : _vm._e(),
                          ]),
                        ]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-md-6 col-lg-3 pt-3 icon-box2",
                      attrs: { "data-aos": "fade-up", "data-aos-delay": "300" },
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
                          _c("div", { staticClass: "card-body text-center" }, [
                            _vm.company.data
                              ? _c("div", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.company.data.title_harga_2
                                    ),
                                  },
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: _vm.company.data.link_2,
                                  target: "_blank",
                                },
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "mt-2 mb-4 label-price-active",
                                  },
                                  [
                                    _vm.company.data
                                      ? _c("div", {
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.company.data.harga_2
                                            ),
                                          },
                                        })
                                      : _vm._e(),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _vm.company.data
                              ? _c("div", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.company.data.body_harga_2
                                    ),
                                  },
                                })
                              : _vm._e(),
                          ]),
                        ]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-md-6 col-lg-3 pt-3 icon-box2",
                      attrs: { "data-aos": "fade-up", "data-aos-delay": "400" },
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
                          _c("div", { staticClass: "card-body text-center" }, [
                            _vm.company.data
                              ? _c("div", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.company.data.title_harga_3
                                    ),
                                  },
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: _vm.company.data.link_3,
                                  target: "_blank",
                                },
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "mt-2 mb-4 label-price" },
                                  [
                                    _vm.company.data
                                      ? _c("div", {
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.company.data.harga_3
                                            ),
                                          },
                                        })
                                      : _vm._e(),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _vm.company.data
                              ? _c("div", {
                                  staticClass: "px-4",
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.company.data.body_harga_3
                                    ),
                                  },
                                })
                              : _vm._e(),
                          ]),
                        ]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-md-6 col-lg-3 pt-3 icon-box2",
                      attrs: { "data-aos": "fade-up", "data-aos-delay": "500" },
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
                          _c("div", { staticClass: "card-body text-center" }, [
                            _vm.company.data
                              ? _c("div", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.company.data.title_harga_4
                                    ),
                                  },
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: _vm.company.data.link_4,
                                  target: "_blank",
                                },
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "mt-2 mb-4 label-price" },
                                  [
                                    _vm.company.data
                                      ? _c("div", {
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.company.data.harga_4
                                            ),
                                          },
                                        })
                                      : _vm._e(),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _vm.company.data
                              ? _c("div", {
                                  staticClass: "px-4",
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.company.data.body_harga_4
                                    ),
                                  },
                                })
                              : _vm._e(),
                          ]),
                        ]
                      ),
                    ]
                  ),
                ]),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
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
                    _vm.company.data
                      ? _c("div", {
                          domProps: {
                            innerHTML: _vm._s(_vm.company.data.project),
                          },
                        })
                      : _vm._e(),
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "d-flex text-center" }, [
                  _vm.company.data
                    ? _c(
                        "div",
                        {
                          staticClass: "col-4",
                          attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "200",
                          },
                        },
                        [
                          _c("h1", { staticClass: "text-primary" }, [
                            _vm._v("+ "),
                            _c("span", {
                              staticClass: "purecounter",
                              attrs: {
                                "data-purecounter-start": "0",
                                "data-purecounter-end":
                                  _vm.company.data.count_client,
                                "data-purecounter-duration": "4",
                              },
                            }),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("WorlWide CLient")]),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.company.data
                    ? _c(
                        "div",
                        {
                          staticClass: "col-4",
                          attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "200",
                          },
                        },
                        [
                          _c("h1", { staticClass: "text-primary" }, [
                            _vm._v("+ "),
                            _c("span", {
                              staticClass: "purecounter",
                              attrs: {
                                "data-purecounter-start": "0",
                                "data-purecounter-end":
                                  _vm.company.data.count_client1,
                                "data-purecounter-duration": "4",
                              },
                            }),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("Team Member")]),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.company.data
                    ? _c(
                        "div",
                        {
                          staticClass: "col-4",
                          attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "200",
                          },
                        },
                        [
                          _c("h1", { staticClass: "text-primary" }, [
                            _vm._v("+ "),
                            _c("span", {
                              staticClass: "purecounter",
                              attrs: {
                                "data-purecounter-start": "0",
                                "data-purecounter-end":
                                  _vm.company.data.count_client2,
                                "data-purecounter-duration": "4",
                              },
                            }),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("Adversting Spend")]),
                        ]
                      )
                    : _vm._e(),
                ]),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "section",
            {
              staticClass: "testimonials",
              style: [_vm.styles, _vm.portofolio_banner],
              attrs: { id: "testimonials" },
            },
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
                                    "\r\n                            " +
                                      _vm._s(v.body) +
                                      "\r\n                            "
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
                      return _c(
                        "div",
                        { key: v.id, staticClass: "swiper-slide" },
                        [
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: { src: v.image, alt: "" },
                          }),
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
          _vm._m(2),
          _vm._v(" "),
          _c("section", { staticClass: "blog", attrs: { id: "blog" } }, [
            _c("div", { staticClass: "container mt-3" }, [
              _c(
                "div",
                {
                  staticClass: "section-title",
                  attrs: { "data-aos": "fade-up", "data-aos-delay": "200" },
                },
                [
                  _vm.company.data
                    ? _c("div", {
                        domProps: { innerHTML: _vm._s(_vm.company.data.blog) },
                      })
                    : _vm._e(),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row" },
                _vm._l(_vm.posts.data, function (v, k) {
                  return _c(
                    "div",
                    { key: v.id, staticClass: "col-md-4 mt-2" },
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: { name: "blog", params: { id: v.slug } },
                          },
                        },
                        [
                          _c("div", { staticClass: "card" }, [
                            _c("img", {
                              staticClass: "content_card-image",
                              attrs: {
                                "data-v-87445088": "",
                                src: v.image
                                  ? v.image
                                  : _vm.baseurl + "images/nofile.jpg",
                                height: "300px",
                              },
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "card-body" }, [
                              _c("h5", { staticClass: "card-title" }, [
                                _vm._v(_vm._s(v.title) + " cd "),
                              ]),
                              _vm._v(" "),
                              _c("p", {
                                staticClass: "card-text",
                                staticStyle: {
                                  overflow: "hidden",
                                  display: "-webkit-box",
                                  "-webkit-line-clamp": "3",
                                  "-webkit-box-orient": "vertical",
                                },
                                domProps: { innerHTML: _vm._s(v.body) },
                              }),
                            ]),
                          ]),
                        ]
                      ),
                    ],
                    1
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "d-flex justify-content-end pt-2 px-3 text-white",
                  class: _vm.posts.count >= 4 ? "" : "d-none",
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-sm btn-warning text-white",
                      attrs: { to: "blogs" },
                    },
                    [
                      _vm._v("More   "),
                      _c("span", { staticClass: "bi bi-arrow-right" }),
                    ]
                  ),
                ],
                1
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
                        _c("div", { staticClass: "section-title" }, [
                          _vm.company.data
                            ? _c("div", {
                                domProps: {
                                  innerHTML: _vm._s(_vm.company.data.faq),
                                },
                              })
                            : _vm._e(),
                        ]),
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
                                      "data-bs-target":
                                        "#accordion-list-" + v.id,
                                    },
                                  },
                                  [
                                    _c("span", [_vm._v(_vm._s(v.id))]),
                                    _vm._v(
                                      " " +
                                        _vm._s(v.title) +
                                        " \r\n                              "
                                    ),
                                    _c("i", {
                                      staticClass:
                                        "bx bx-chevron-down icon-show",
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass:
                                        "bx bx-chevron-up icon-close",
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
                                        "\r\n                                " +
                                          _vm._s(v.body) +
                                          " \r\n                              "
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
                        style: [_vm.styles, _vm.faq_banner],
                        attrs: {
                          "data-aos": "zoom-in",
                          "data-aos-delay": "150",
                        },
                      },
                      [_vm._v(" ")]
                    ),
                  ]),
                ]
              ),
            ]
          ),
        ]),
      ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "setloading" } }, [
      _c("span", {
        staticClass: "spinner-grow text-white",
        staticStyle: { width: "50px", height: "50px" },
      }),
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
]
render._withStripped = true



/***/ })

}]);