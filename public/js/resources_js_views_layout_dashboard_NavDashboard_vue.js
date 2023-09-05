"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_layout_dashboard_NavDashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/dashboard/NavDashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/dashboard/NavDashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "NavDashboard",
  methods: {
    getSelect: function getSelect(el) {
      var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      console.log(el);
      el = el.trim();
      if (all) {
        return _toConsumableArray(document.querySelectorAll(el));
      } else {
        return document.querySelector(el);
      }
    },
    /**
     * Easy event listener function
     */
    on: function on(type, el, listener) {
      var all = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      if (all) {
        document.querySelector(el, all).forEach(function (e) {
          return e.addEventListener(type, listener);
        });
      } else {
        document.querySelector(el, all).addEventListener(type, listener);
      }
    }
  },
  mounted: function mounted() {
    this.on('click', '.toggle-sidebar-btn', function () {
      document.querySelector('body').classList.toggle('toggle-sidebar');
    });
    this.on('click', '.search-bar-toggle', function () {
      document.querySelector('.search-bar').classList.toggle('search-bar-show');
    });
    var a = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.alink-click');
    var thisPath = this.$router.currentRoute._rawValue.href;
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(a, function (i, val) {
      var v = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(val);
      v.removeClass('active');
      if (v.attr("href") == thisPath) {
        if (v.closest("li.nav-item").find("a.multi-link") != undefined) {
          v.closest("li.nav-item").find("a.multi-link").removeClass("collapsed").attr("aria-expanded", true);
          v.closest("li.nav-item").find("ul.nav-content ").addClass("show");
        }
        v.addClass('router-link-exact-active');
      }
    });
  }
});

/***/ }),

/***/ "./resources/js/views/layout/dashboard/NavDashboard.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/layout/dashboard/NavDashboard.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavDashboard_vue_vue_type_template_id_5e28affc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavDashboard.vue?vue&type=template&id=5e28affc& */ "./resources/js/views/layout/dashboard/NavDashboard.vue?vue&type=template&id=5e28affc&");
/* harmony import */ var _NavDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavDashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/layout/dashboard/NavDashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavDashboard_vue_vue_type_template_id_5e28affc___WEBPACK_IMPORTED_MODULE_0__.render,
  _NavDashboard_vue_vue_type_template_id_5e28affc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layout/dashboard/NavDashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/layout/dashboard/NavDashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/layout/dashboard/NavDashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/dashboard/NavDashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layout/dashboard/NavDashboard.vue?vue&type=template&id=5e28affc&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/layout/dashboard/NavDashboard.vue?vue&type=template&id=5e28affc& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavDashboard_vue_vue_type_template_id_5e28affc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavDashboard_vue_vue_type_template_id_5e28affc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavDashboard_vue_vue_type_template_id_5e28affc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavDashboard.vue?vue&type=template&id=5e28affc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/dashboard/NavDashboard.vue?vue&type=template&id=5e28affc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/dashboard/NavDashboard.vue?vue&type=template&id=5e28affc&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/dashboard/NavDashboard.vue?vue&type=template&id=5e28affc& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "ul",
    { staticClass: "sidebar-nav", attrs: { id: "sidebar-nav" } },
    [
      _c(
        "li",
        { staticClass: "nav-item" },
        [
          _c(
            "router-link",
            {
              staticClass: "nav-link collapsed alink-click",
              attrs: { to: "/" },
            },
            [
              _c("i", { staticClass: "bi bi-grid" }),
              _vm._v(" "),
              _c("span", [_vm._v("Dashboard")]),
            ]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "ul",
          {
            staticClass: "nav-content collapse",
            attrs: { id: "components-nav", "data-bs-parent": "#sidebar-nav" },
          },
          [
            _c(
              "li",
              [
                _c(
                  "router-link",
                  { staticClass: "alink-click", attrs: { to: "/about" } },
                  [
                    _c("i", { staticClass: "bi bi-circle" }),
                    _c("span", [_vm._v("Alerts")]),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _vm._m(5),
            _vm._v(" "),
            _vm._m(6),
            _vm._v(" "),
            _vm._m(7),
            _vm._v(" "),
            _vm._m(8),
            _vm._v(" "),
            _vm._m(9),
            _vm._v(" "),
            _vm._m(10),
            _vm._v(" "),
            _vm._m(11),
            _vm._v(" "),
            _vm._m(12),
            _vm._v(" "),
            _vm._m(13),
          ]
        ),
      ]),
      _vm._v(" "),
      _vm._m(14),
      _vm._v(" "),
      _vm._m(15),
      _vm._v(" "),
      _vm._m(16),
      _vm._v(" "),
      _vm._m(17),
      _vm._v(" "),
      _c("li", { staticClass: "nav-heading" }, [_vm._v("Pages")]),
      _vm._v(" "),
      _vm._m(18),
      _vm._v(" "),
      _vm._m(19),
      _vm._v(" "),
      _vm._m(20),
      _vm._v(" "),
      _vm._m(21),
      _vm._v(" "),
      _vm._m(22),
      _vm._v(" "),
      _vm._m(23),
      _vm._v(" "),
      _vm._m(24),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "nav-link collapsed multi-link",
        attrs: {
          "data-bs-target": "#components-nav",
          "data-bs-toggle": "collapse",
          href: "#",
        },
      },
      [
        _c("i", { staticClass: "bi bi-menu-button-wide" }),
        _c("span", [_vm._v("Components")]),
        _c("i", { staticClass: "bi bi-chevron-down ms-auto" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "components-accordion.html" } }, [
        _c("i", { staticClass: "bi bi-circle" }),
        _c("span", [_vm._v("Accordion")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "components-badges.html" } }, [
        _c("i", { staticClass: "bi bi-circle" }),
        _c("span", [_vm._v("Badges")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "components-breadcrumbs.html" } }, [
        _c("i", { staticClass: "bi bi-circle" }),
        _c("span", [_vm._v("Breadcrumbs")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "components-buttons.html" } }, [
        _c("i", { staticClass: "bi bi-circle" }),
        _c("span", [_vm._v("Buttons")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "components-cards.html" } }, [
        _c("i", { staticClass: "bi bi-circle" }),
        _c("span", [_vm._v("Cards")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "components-carousel.html" } }, [
        _c("i", { staticClass: "bi bi-circle" }),
        _c("span", [_vm._v("Carousel")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "components-list-group.html" } }, [
        _c("i", { staticClass: "bi bi-circle" }),
        _c("span", [_vm._v("List group")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "components-modal.html" } }, [
        _c("i", { staticClass: "bi bi-circle" }),
        _c("span", [_vm._v("Modal")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "components-tabs.html" } }, [
        _c("i", { staticClass: "bi bi-circle" }),
        _c("span", [_vm._v("Tabs")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "components-pagination.html" } }, [
        _c("i", { staticClass: "bi bi-circle" }),
        _c("span", [_vm._v("Pagination")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "components-progress.html" } }, [
        _c("i", { staticClass: "bi bi-circle" }),
        _c("span", [_vm._v("Progress")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "components-spinners.html" } }, [
        _c("i", { staticClass: "bi bi-circle" }),
        _c("span", [_vm._v("Spinners")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "components-tooltips.html" } }, [
        _c("i", { staticClass: "bi bi-circle" }),
        _c("span", [_vm._v("Tooltips")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link collapsed",
          attrs: {
            "data-bs-target": "#forms-nav",
            "data-bs-toggle": "collapse",
            href: "#",
          },
        },
        [
          _c("i", { staticClass: "bi bi-journal-text" }),
          _c("span", [_vm._v("Forms")]),
          _c("i", { staticClass: "bi bi-chevron-down ms-auto" }),
        ]
      ),
      _vm._v(" "),
      _c(
        "ul",
        {
          staticClass: "nav-content collapse",
          attrs: { id: "forms-nav", "data-bs-parent": "#sidebar-nav" },
        },
        [
          _c("li", [
            _c("a", { attrs: { href: "forms-elements.html" } }, [
              _c("i", { staticClass: "bi bi-circle" }),
              _c("span", [_vm._v("Form Elements")]),
            ]),
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "forms-layouts.html" } }, [
              _c("i", { staticClass: "bi bi-circle" }),
              _c("span", [_vm._v("Form Layouts")]),
            ]),
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "forms-editors.html" } }, [
              _c("i", { staticClass: "bi bi-circle" }),
              _c("span", [_vm._v("Form Editors")]),
            ]),
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "forms-validation.html" } }, [
              _c("i", { staticClass: "bi bi-circle" }),
              _c("span", [_vm._v("Form Validation")]),
            ]),
          ]),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link collapsed",
          attrs: {
            "data-bs-target": "#tables-nav",
            "data-bs-toggle": "collapse",
            href: "#",
          },
        },
        [
          _c("i", { staticClass: "bi bi-layout-text-window-reverse" }),
          _c("span", [_vm._v("Tables")]),
          _c("i", { staticClass: "bi bi-chevron-down ms-auto" }),
        ]
      ),
      _vm._v(" "),
      _c(
        "ul",
        {
          staticClass: "nav-content collapse",
          attrs: { id: "tables-nav", "data-bs-parent": "#sidebar-nav" },
        },
        [
          _c("li", [
            _c("a", { attrs: { href: "tables-general.html" } }, [
              _c("i", { staticClass: "bi bi-circle" }),
              _c("span", [_vm._v("General Tables")]),
            ]),
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "tables-data.html" } }, [
              _c("i", { staticClass: "bi bi-circle" }),
              _c("span", [_vm._v("Data Tables")]),
            ]),
          ]),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link collapsed",
          attrs: {
            "data-bs-target": "#charts-nav",
            "data-bs-toggle": "collapse",
            href: "#",
          },
        },
        [
          _c("i", { staticClass: "bi bi-bar-chart" }),
          _c("span", [_vm._v("Charts")]),
          _c("i", { staticClass: "bi bi-chevron-down ms-auto" }),
        ]
      ),
      _vm._v(" "),
      _c(
        "ul",
        {
          staticClass: "nav-content collapse",
          attrs: { id: "charts-nav", "data-bs-parent": "#sidebar-nav" },
        },
        [
          _c("li", [
            _c("a", { attrs: { href: "charts-chartjs.html" } }, [
              _c("i", { staticClass: "bi bi-circle" }),
              _c("span", [_vm._v("Chart.js")]),
            ]),
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "charts-apexcharts.html" } }, [
              _c("i", { staticClass: "bi bi-circle" }),
              _c("span", [_vm._v("ApexCharts")]),
            ]),
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "charts-echarts.html" } }, [
              _c("i", { staticClass: "bi bi-circle" }),
              _c("span", [_vm._v("ECharts")]),
            ]),
          ]),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link collapsed",
          attrs: {
            "data-bs-target": "#icons-nav",
            "data-bs-toggle": "collapse",
            href: "#",
          },
        },
        [
          _c("i", { staticClass: "bi bi-gem" }),
          _c("span", [_vm._v("Icons")]),
          _c("i", { staticClass: "bi bi-chevron-down ms-auto" }),
        ]
      ),
      _vm._v(" "),
      _c(
        "ul",
        {
          staticClass: "nav-content collapse",
          attrs: { id: "icons-nav", "data-bs-parent": "#sidebar-nav" },
        },
        [
          _c("li", [
            _c("a", { attrs: { href: "icons-bootstrap.html" } }, [
              _c("i", { staticClass: "bi bi-circle" }),
              _c("span", [_vm._v("Bootstrap Icons")]),
            ]),
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "icons-remix.html" } }, [
              _c("i", { staticClass: "bi bi-circle" }),
              _c("span", [_vm._v("Remix Icons")]),
            ]),
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "icons-boxicons.html" } }, [
              _c("i", { staticClass: "bi bi-circle" }),
              _c("span", [_vm._v("Boxicons")]),
            ]),
          ]),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link collapsed",
          attrs: { href: "users-profile.html" },
        },
        [
          _c("i", { staticClass: "bi bi-person" }),
          _vm._v(" "),
          _c("span", [_vm._v("Profile")]),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link collapsed",
          attrs: { href: "pages-faq.html" },
        },
        [
          _c("i", { staticClass: "bi bi-question-circle" }),
          _vm._v(" "),
          _c("span", [_vm._v("F.A.Q")]),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link collapsed",
          attrs: { href: "pages-contact.html" },
        },
        [
          _c("i", { staticClass: "bi bi-envelope" }),
          _vm._v(" "),
          _c("span", [_vm._v("Contact")]),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link collapsed",
          attrs: { href: "pages-register.html" },
        },
        [
          _c("i", { staticClass: "bi bi-card-list" }),
          _vm._v(" "),
          _c("span", [_vm._v("Register")]),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link collapsed",
          attrs: { href: "pages-login.html" },
        },
        [
          _c("i", { staticClass: "bi bi-box-arrow-in-right" }),
          _vm._v(" "),
          _c("span", [_vm._v("Login")]),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link collapsed",
          attrs: { href: "pages-error-404.html" },
        },
        [
          _c("i", { staticClass: "bi bi-dash-circle" }),
          _vm._v(" "),
          _c("span", [_vm._v("Error 404")]),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link collapsed",
          attrs: { href: "pages-blank.html" },
        },
        [
          _c("i", { staticClass: "bi bi-file-earmark" }),
          _vm._v(" "),
          _c("span", [_vm._v("Blank")]),
        ]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);