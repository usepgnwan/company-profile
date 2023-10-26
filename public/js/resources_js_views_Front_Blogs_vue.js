"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Front_Blogs_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Blogs.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Blogs.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Blog',
  data: function data() {
    return {
      baseurl: baseurl,
      isLoading: false,
      cantReload: true,
      content: [],
      bgbanner: {},
      page: 1,
      per_page: 6,
      loadmore: true,
      loading: false
    };
  },
  methods: {
    readyContent: function readyContent($this, state) {
      if (state == 'complete') {
        setTimeout(function () {
          $this.isLoading = true;
        }, 1200);
      }
    },
    loadData: function loadData(page, perpage) {
      var _this = this;
      this.loading = true;
      this.$axios.get('api/post?page=' + page + '&per_page=' + perpage).then(function (response) {
        for (var i = 0; i < response.data.data.data.length; i++) {
          _this.loading = false;
          _this.content.push(response.data.data.data[i]);
        }
        _this.page = _this.page + 1;
        if (response.data.data.current_page == response.data.data.last_page) {
          _this.loadmore = false;
        }
      })["catch"](function (err) {
        _this.cantReload = false;
      });
    }
  },
  mounted: function mounted() {
    var $this = this;
    $this.readyContent($this, document.readyState);
    document.onreadystatechange = function () {
      $this.readyContent($this, document.readyState);
    };
    document.getElementById("header").classList.add('header-inner-pages');
    var id = this.$route.params.id;
    $this.loadData(this.page, this.per_page);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Blogs.vue?vue&type=style&index=0&id=87445088&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Blogs.vue?vue&type=style&index=0&id=87445088&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.inner-page[data-v-87445088] {\n  border-bottom: 1px solid #dce8ff;\n}\n.container p[data-v-87445088]{\n  margin: 0px !important;\n}\n.page-image[data-v-87445088] {\n  padding: 80px 0; \n  background-position: center center;\n  background-size: cover;\n  position: relative;\n  min-height: 50vh;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Blogs.vue?vue&type=style&index=0&id=87445088&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Blogs.vue?vue&type=style&index=0&id=87445088&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_style_index_0_id_87445088_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Blogs.vue?vue&type=style&index=0&id=87445088&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Blogs.vue?vue&type=style&index=0&id=87445088&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_style_index_0_id_87445088_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_style_index_0_id_87445088_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/Front/Blogs.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Front/Blogs.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Blogs_vue_vue_type_template_id_87445088_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blogs.vue?vue&type=template&id=87445088&scoped=true& */ "./resources/js/views/Front/Blogs.vue?vue&type=template&id=87445088&scoped=true&");
/* harmony import */ var _Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blogs.vue?vue&type=script&lang=js& */ "./resources/js/views/Front/Blogs.vue?vue&type=script&lang=js&");
/* harmony import */ var _Blogs_vue_vue_type_style_index_0_id_87445088_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Blogs.vue?vue&type=style&index=0&id=87445088&scoped=true&lang=css& */ "./resources/js/views/Front/Blogs.vue?vue&type=style&index=0&id=87445088&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Blogs_vue_vue_type_template_id_87445088_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Blogs_vue_vue_type_template_id_87445088_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "87445088",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Front/Blogs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Front/Blogs.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Front/Blogs.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Blogs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Blogs.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Front/Blogs.vue?vue&type=style&index=0&id=87445088&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/Front/Blogs.vue?vue&type=style&index=0&id=87445088&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_style_index_0_id_87445088_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Blogs.vue?vue&type=style&index=0&id=87445088&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Blogs.vue?vue&type=style&index=0&id=87445088&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/Front/Blogs.vue?vue&type=template&id=87445088&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/Front/Blogs.vue?vue&type=template&id=87445088&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_template_id_87445088_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_template_id_87445088_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_template_id_87445088_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Blogs.vue?vue&type=template&id=87445088&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Blogs.vue?vue&type=template&id=87445088&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Blogs.vue?vue&type=template&id=87445088&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Front/Blogs.vue?vue&type=template&id=87445088&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    !_vm.isLoading
      ? _c("main", [_vm._m(0)])
      : _c("main", { attrs: { id: "main" } }, [
          _vm._m(1),
          _vm._v(" "),
          _c("section", { staticClass: "inner-page" }, [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "row" }, [
                _vm.content
                  ? _c("div", { staticClass: "col-lg-12" }, [
                      _vm.cantReload
                        ? _c("main", [
                            _c(
                              "div",
                              { staticClass: "row" },
                              [
                                _vm._l(_vm.content, function (v, k) {
                                  return _c(
                                    "div",
                                    { key: v.id, staticClass: "col-md-4 mt-2" },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          attrs: {
                                            to: {
                                              name: "blog",
                                              params: { id: v.slug },
                                            },
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
                                                  : _vm.baseurl +
                                                    "images/nofile.jpg",
                                                height: "300px",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "card-body" },
                                              [
                                                _c(
                                                  "h5",
                                                  { staticClass: "card-title" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(v.title) + " cd "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("p", {
                                                  staticClass: "card-text",
                                                  staticStyle: {
                                                    overflow: "hidden",
                                                    display: "-webkit-box",
                                                    "-webkit-line-clamp": "3",
                                                    "-webkit-box-orient":
                                                      "vertical",
                                                  },
                                                  domProps: {
                                                    innerHTML: _vm._s(v.body),
                                                  },
                                                }),
                                              ]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ],
                                    1
                                  )
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-12" }, [
                                  _vm.loading
                                    ? _c(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex justify-content-center pt-2 px-3 text-white",
                                        },
                                        [
                                          _c("span", {
                                            staticClass:
                                              "spinner-grow text-primary",
                                            staticStyle: {
                                              width: "50px",
                                              height: "50px",
                                            },
                                          }),
                                        ]
                                      )
                                    : _c(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex justify-content-center pt-2 px-3 text-white",
                                        },
                                        [
                                          _vm.loadmore
                                            ? _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-primary",
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.loadData(
                                                        _vm.page,
                                                        _vm.per_page
                                                      )
                                                    },
                                                  },
                                                },
                                                [
                                                  _c("span", {
                                                    staticClass:
                                                      "bi bi-arrow-repeat",
                                                  }),
                                                  _vm._v(" load more"),
                                                ]
                                              )
                                            : _vm._e(),
                                        ]
                                      ),
                                ]),
                              ],
                              2
                            ),
                          ])
                        : _vm._e(),
                    ])
                  : _c(
                      "div",
                      { staticClass: "col-md-12 pt-4" },
                      [_c("viewErr")],
                      1
                    ),
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
    return _c(
      "div",
      {
        staticStyle: {
          background: "white !important",
          "z-index": "100",
          "min-height": "60vh",
        },
        attrs: { id: "setloading" },
      },
      [
        _c("span", {
          staticClass: "spinner-grow text-primary",
          staticStyle: { width: "50px", height: "50px" },
        }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      { staticClass: "breadcrumbs", attrs: { id: "breadcrumbs" } },
      [
        _c("div", { staticClass: "container" }, [
          _c("ol", [
            _c("li", [_c("a", { attrs: { href: "/" } }, [_vm._v("Home")])]),
            _vm._v(" "),
            _c("li", [_vm._v("blog ")]),
          ]),
          _vm._v(" "),
          _c("h2", [_vm._v("Blog")]),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);