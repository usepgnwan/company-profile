(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Resume_Resume_vue"],{

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScriptLoader: () => (/* binding */ ScriptLoader)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var createState = function () {
    return {
        listeners: [],
        scriptId: (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.uuid)('tiny-script'),
        scriptLoaded: false
    };
};
var CreateScriptLoader = function () {
    var state = createState();
    var injectScriptTag = function (scriptId, doc, url, callback) {
        var scriptTag = doc.createElement('script');
        scriptTag.referrerPolicy = 'origin';
        scriptTag.type = 'application/javascript';
        scriptTag.id = scriptId;
        scriptTag.src = url;
        var handler = function () {
            scriptTag.removeEventListener('load', handler);
            callback();
        };
        scriptTag.addEventListener('load', handler);
        if (doc.head) {
            doc.head.appendChild(scriptTag);
        }
    };
    var load = function (doc, url, callback) {
        if (state.scriptLoaded) {
            callback();
        }
        else {
            state.listeners.push(callback);
            if (!doc.getElementById(state.scriptId)) {
                injectScriptTag(state.scriptId, doc, url, function () {
                    state.listeners.forEach(function (fn) { return fn(); });
                    state.scriptLoaded = true;
                });
            }
        }
    };
    // Only to be used by tests.
    var reinitialize = function () {
        state = createState();
    };
    return {
        load: load,
        reinitialize: reinitialize
    };
};
var ScriptLoader = CreateScriptLoader();



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTinymce: () => (/* binding */ getTinymce)
/* harmony export */ });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var getGlobal = function () { return (typeof window !== 'undefined' ? window : __webpack_require__.g); };
var getTinymce = function () {
    var global = getGlobal();
    return global && global.tinymce ? global.tinymce : null;
};



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindHandlers: () => (/* binding */ bindHandlers),
/* harmony export */   bindModelHandlers: () => (/* binding */ bindModelHandlers),
/* harmony export */   initEditor: () => (/* binding */ initEditor),
/* harmony export */   isNullOrUndefined: () => (/* binding */ isNullOrUndefined),
/* harmony export */   isTextarea: () => (/* binding */ isTextarea),
/* harmony export */   isValidKey: () => (/* binding */ isValidKey),
/* harmony export */   mergePlugins: () => (/* binding */ mergePlugins),
/* harmony export */   uuid: () => (/* binding */ uuid)
/* harmony export */ });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];
var isValidKey = function (key) { return validEvents.map(function (event) { return event.toLowerCase(); }).indexOf(key.toLowerCase()) !== -1; };
var bindHandlers = function (initEvent, listeners, editor) {
    Object.keys(listeners)
        .filter(isValidKey)
        .forEach(function (key) {
        var handler = listeners[key];
        if (typeof handler === 'function') {
            if (key === 'onInit') {
                handler(initEvent, editor);
            }
            else {
                editor.on(key.substring(2), function (e) { return handler(e, editor); });
            }
        }
    });
};
var bindModelHandlers = function (ctx, editor) {
    var modelEvents = ctx.$props.modelEvents ? ctx.$props.modelEvents : null;
    var normalizedEvents = Array.isArray(modelEvents) ? modelEvents.join(' ') : modelEvents;
    editor.on(normalizedEvents ? normalizedEvents : 'change input undo redo', function () {
        ctx.$emit('input', editor.getContent({ format: ctx.$props.outputFormat }));
    });
};
var initEditor = function (initEvent, ctx, editor) {
    var value = ctx.$props.value ? ctx.$props.value : '';
    var initialValue = ctx.$props.initialValue ? ctx.$props.initialValue : '';
    editor.setContent(value || (ctx.initialized ? ctx.cache : initialValue));
    // Always bind the value listener in case users use :value instead of v-model
    ctx.$watch('value', function (val, prevVal) {
        if (editor && typeof val === 'string' && val !== prevVal && val !== editor.getContent({ format: ctx.$props.outputFormat })) {
            editor.setContent(val);
        }
    });
    // checks if the v-model shorthand is used (which sets an v-on:input listener) and then binds either
    // specified the events or defaults to "change keyup" event and emits the editor content on that event
    if (ctx.$listeners.input) {
        bindModelHandlers(ctx, editor);
    }
    bindHandlers(initEvent, ctx.$listeners, editor);
    ctx.initialized = true;
};
var unique = 0;
var uuid = function (prefix) {
    var time = Date.now();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextarea = function (element) {
    return element !== null && element.tagName.toLowerCase() === 'textarea';
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var mergePlugins = function (initPlugins, inputPlugins) {
    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};
var isNullOrUndefined = function (value) { return value === null || value === undefined; };



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Editor: () => (/* binding */ Editor)
/* harmony export */ });
/* harmony import */ var _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ScriptLoader */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js");
/* harmony import */ var _TinyMCE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TinyMCE */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js");
/* harmony import */ var _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditorPropTypes */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var renderInline = function (h, id, tagName) {
    return h(tagName ? tagName : 'div', {
        attrs: { id: id }
    });
};
var renderIframe = function (h, id) {
    return h('textarea', {
        attrs: { id: id },
        style: { visibility: 'hidden' }
    });
};
var initialise = function (ctx) { return function () {
    var finalInit = __assign(__assign({}, ctx.$props.init), { readonly: ctx.$props.disabled, selector: "#" + ctx.elementId, plugins: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.mergePlugins)(ctx.$props.init && ctx.$props.init.plugins, ctx.$props.plugins), toolbar: ctx.$props.toolbar || (ctx.$props.init && ctx.$props.init.toolbar), inline: ctx.inlineEditor, setup: function (editor) {
            ctx.editor = editor;
            editor.on('init', function (e) { return (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.initEditor)(e, ctx, editor); });
            if (ctx.$props.init && typeof ctx.$props.init.setup === 'function') {
                ctx.$props.init.setup(editor);
            }
        } });
    if ((0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isTextarea)(ctx.element)) {
        ctx.element.style.visibility = '';
        ctx.element.style.display = '';
    }
    (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)().init(finalInit);
}; };
var Editor = {
    props: _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__.editorProps,
    created: function () {
        this.elementId = this.$props.id || (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.uuid)('tiny-vue');
        this.inlineEditor = (this.$props.init && this.$props.init.inline) || this.$props.inline;
        this.initialized = false;
    },
    watch: {
        disabled: function () {
            this.editor.setMode(this.disabled ? 'readonly' : 'design');
        }
    },
    mounted: function () {
        this.element = this.$el;
        if ((0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)() !== null) {
            initialise(this)();
        }
        else if (this.element && this.element.ownerDocument) {
            var channel = this.$props.cloudChannel ? this.$props.cloudChannel : '5';
            var apiKey = this.$props.apiKey ? this.$props.apiKey : 'no-api-key';
            var scriptSrc = (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(this.$props.tinymceScriptSrc) ?
                "https://cdn.tiny.cloud/1/" + apiKey + "/tinymce/" + channel + "/tinymce.min.js" :
                this.$props.tinymceScriptSrc;
            _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__.ScriptLoader.load(this.element.ownerDocument, scriptSrc, initialise(this));
        }
    },
    beforeDestroy: function () {
        if ((0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)() !== null) {
            (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)().remove(this.editor);
        }
    },
    deactivated: function () {
        var _a;
        if (!this.inlineEditor) {
            this.cache = this.editor.getContent();
            (_a = (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)()) === null || _a === void 0 ? void 0 : _a.remove(this.editor);
        }
    },
    activated: function () {
        if (!this.inlineEditor && this.initialized) {
            initialise(this)();
        }
    },
    render: function (h) {
        return this.inlineEditor ? renderInline(h, this.elementId, this.$props.tagName) : renderIframe(h, this.elementId);
    }
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editorProps: () => (/* binding */ editorProps)
/* harmony export */ });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var editorProps = {
    apiKey: String,
    cloudChannel: String,
    id: String,
    init: Object,
    initialValue: String,
    inline: Boolean,
    modelEvents: [String, Array],
    plugins: [String, Array],
    tagName: String,
    toolbar: [String, Array],
    value: String,
    disabled: Boolean,
    tinymceScriptSrc: String,
    outputFormat: {
        type: String,
        validator: function (prop) { return prop === 'html' || prop === 'text'; }
    },
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Editor */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_Editor__WEBPACK_IMPORTED_MODULE_0__.Editor);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TinyMCEEditor.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TinyMCEEditor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
//
//
//
//
//
//
//
//
//
//
//

// import { defineProps, defineEmits } from 'vue';

// defineProps(['modelValue'])
// defineEmits(['update:modelValue'])
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Editor: _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['modelValue', 'inlineEditor', 'height'],
  data: function data() {
    return {
      content: this.modelValue,
      inlineType: this.inlineEditor,
      height: this.height,
      editorConfig: {
        // TinyMCE configurations, customize as needed
        plugins: 'image table preview media paste_block_drop emoticons',
        toolbar: 'undo redo | image | table | preview| media | foto | outdent indent | numlist bullist | emoticons',
        images_upload_url: this.$baseUrl + "/api/post/upload/image",
        paste_data_images: false,
        // Disable pasting of images
        // images_upload_handler: this.image_upload_handler
        inline: false,
        emoticons_append: {
          custom_mind_explode: {
            keywords: ['brain', 'mind', 'explode', 'blown'],
            "char": '🤯'
          }
        }
      },
      inlineConfig: {
        menubar: true,
        min_height: 200,
        inline: true,
        plugins: ["advlist autolink lists link charmap print preview anchor textcolor", "searchreplace visualblocks code fullscreen", "insertdatetime table contextmenu paste textcolor", "emoticons"],
        emoticons_append: {
          custom_mind_explode: {
            keywords: ['brain', 'mind', 'explode', 'blown'],
            "char": '🤯'
          }
        },
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | forecolor backcolor | outdent indent | numlist bullist | emoticons"
      }
    };
  },
  methods: {
    handleEditorChange: function handleEditorChange(editorContent) {
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
    image_upload_handler: function image_upload_handler(blobInfo, progress) {
      var _this = this;
      new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open('POST', _this.$baseUrl + "/api/post/upload/image");
        var token = document.head.querySelector("[name=csrf-token]").content;
        xhr.setRequestHeader("X-CSRF-Token", token);
        xhr.upload.onprogress = function (e) {
          progress(e.loaded / e.total * 100);
        };
        xhr.onload = function () {
          // if (xhr.status === 403 || xhr.status === 500) {
          //   reject({ message: 'HTTP Error: ' + xhr.status, remove: true });
          //   return;
          // } 
          var json = JSON.parse(xhr.responseText);
          if (200 >= xhr.status <= 300) {
            return resolve(json.location);
          } else {
            reject({
              message: 'HTTP Error: ' + xhr.status,
              remove: true
            });
            return;
          }
        };
        xhr.onerror = function () {
          reject({
            message: 'Image upload failed due to a XHR Transport error. Code: ' + xhr.status,
            remove: true
          });
        };
        // var token = document.head.querySelector("[name=csrf-token]").content;
        var formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());
        formData.append("_token", token);
        xhr.send(formData);
      });
    },
    handleImageUpload: function handleImageUpload(blobInfo, success, failure, progress) {
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open('POST', this.$baseUrl + "/api/post/upload/image");

      // xhr.upload.onprogress = (e) => {
      //   progress(e.loaded / e.total * 100);
      // };

      xhr.onload = function () {
        if (xhr.status === 403 || xhr.status === 500) {
          failure({
            message: 'HTTP Error: ' + xhr.status,
            remove: true
          });
          return;
        }
        if (xhr.status < 200 || xhr.status >= 300) {
          failure('HTTP Error: ' + xhr.status);
          return;
        }
        var json = JSON.parse(xhr.responseText);
        console.log(json);
        if (!json || typeof json.location != 'string') {
          failure('Invalid JSON: ' + xhr.responseText);
          return;
        }
        return success(json.location);
      };
      xhr.onerror = function () {
        failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
      };
      var token = document.head.querySelector("[name=csrf-token]").content;
      var formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());
      formData.append("_token", token);
      xhr.send(formData);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Resume/Resume.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Resume/Resume.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_TinyMCEEditor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/TinyMCEEditor.vue */ "./resources/js/components/TinyMCEEditor.vue");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var stat = 'error',
  msg = 'Failed Update data';


var token = document.head.querySelector("[name=csrf-token]").content;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Resume",
  data: function data() {
    return {
      inlineEditor: true,
      isLoading: false,
      company: [],
      service: "<h1>OUR SERVICES</h1>\n                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise</p>",
      baseUrl: baseurl,
      testimoni: [],
      client: [],
      faq: [],
      services: [],
      benefits: [],
      posts: [],
      contacts: [],
      typingTimeout: null,
      bgbanner: {},
      portofolio_banner: {},
      faq_banner: {},
      states: ''
    };
  },
  methods: {
    add_link: function () {
      var _add_link = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(link) {
        var _this = this;
        var text, _yield$this$$swal, formValues, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              text = this.company.data[link];
              _context.next = 3;
              return this.$swal({
                title: 'Add Link',
                showCancelButton: true,
                html: '<input id="swal-input1" class="swal2-input" value="' + text + '">',
                focusConfirm: false,
                preConfirm: function preConfirm() {
                  return document.getElementById('swal-input1').value;
                }
              });
            case 3:
              _yield$this$$swal = _context.sent;
              formValues = _yield$this$$swal.value;
              console.log(formValues == undefined);
              if (formValues == null || formValues == undefined) {
                //  alert('link kosong')
              } else {
                data = {};
                data._method = 'POST';
                data.field = formValues;
                data.targetid = link;
                this.$axios.post("api/company/patch", data).then(function (response) {
                  if (response.data.status) {
                    stat = 'success', msg = 'Success change link';
                    _this.company.data[link] = response.data.data[link];
                  }
                  _this.$swal('Success', msg, stat);
                })["catch"](function () {
                  _this.$swal('Failed', 'Failed change link', stat);
                });
              }
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function add_link(_x) {
        return _add_link.apply(this, arguments);
      }
      return add_link;
    }(),
    changeCompany: function changeCompany(id) {
      var _this2 = this;
      clearTimeout(this.typingTimeout);
      // Set a new timeout to trigger the action after a brief pause (e.g., 500ms)
      this.typingTimeout = setTimeout(function () {
        var data = {};
        data._method = 'PATCH';
        data.text = _this2.company.data[id];
        _this2.$axios.post("api/company/" + id, data).then(function (response) {
          if (response.data.status) {
            _this2.$isAlert(_this2, response.data.msg, 'success');
          } else {
            _this2.$isAlert(_this2, msg, stat);
          }
        })["catch"](function () {
          _this2.$isAlert(_this2, msg, stat);
          _this2.proses = false;
        });
      }, 1500); // Adjust the duration as needed
    },

    swiperTestimoni: function swiperTestimoni() {
      /**
       * Testimonials slider
       */
      setTimeout(function () {
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
      }, 1500);
    },
    swiperClient: function swiperClient() {
      /**
       * Clients Slider
       */
      setTimeout(function () {
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
      }, 1500);
    },
    filesChange: function filesChange(fieldName, fileList, targetid, type) {
      var _this3 = this;
      this.$swal({
        title: 'Are you sure?',
        text: "Change picture " + type,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then(function (result) {
        if (result.value) {
          // handle file changes
          var formData = new FormData();
          if (!fileList.length) return;
          // append the files to FormData
          console.log(fieldName);
          Array.from(Array(fileList.length).keys()).map(function (x) {
            formData.append(fieldName, fileList[x], fileList[x].name);
          });
          var field = '';
          if (targetid == '#testimonials') {
            field = 'portofolio_banner';
          } else if (targetid == '#hero') {
            field = 'banner';
          } else {
            field = targetid.replaceAll('#', '').replaceAll('.', '');
          }
          formData.append('targetid', field);
          // formData.append('_method', 'POST');
          formData.append("_token", token);
          var uri = URL.createObjectURL(fileList[0]);
          var pattern = /image-*/;
          if (!fileList[0].type.match(pattern)) {
            alert('Invalid format');
            return;
          }
          _this3.$axios.post("api/company/patch", formData).then(function (response) {
            if (response.data.status) {
              stat = 'success', msg = 'Success change picture ' + type;
              if (type == 'banner' || type == 'banner testimoni') {
                jquery__WEBPACK_IMPORTED_MODULE_1___default()(targetid).css({
                  "background": 'url("' + uri + '") no-repeat',
                  "background-attachment": "fixed"
                });
              } else if (type == 'cta banner' || type == 'blog baner') {
                jquery__WEBPACK_IMPORTED_MODULE_1___default()(targetid).find('img').attr('src', uri);
              } else if (type == 'faq banner') {
                jquery__WEBPACK_IMPORTED_MODULE_1___default()(targetid).css({
                  "background-image": 'url("' + uri + '")'
                });
              }
            }
            _this3.$swal('Success', msg, stat);
          })["catch"](function () {
            _this3.$swal('Failed', 'Failed change picture' + type, stat);
          });
        }
      });
    },
    tes: function tes($this, state) {
      if (state == 'complete') {
        setTimeout(function () {
          $this.isLoading = true;
        }, 1200);
      }
      setTimeout(function () {
        // GETDATA END
        var glightbox = GLightbox({
          selector: '.glightbox'
        });
        /**
         * Initiate Pure Counter 
         */
        new PureCounter();
      }, 1300);
    }
  },
  mounted: function mounted() {
    var _this4 = this;
    var $this = this;
    $this.tes($this, document.readyState);
    document.onreadystatechange = function () {
      $this.tes($this, document.readyState);
    };
    this.$axios.get('/api/company').then(function (response) {
      _this4.company = response.data;
      _this4.bgbanner = {
        background: 'url("' + _this4.company.data.banner + '") no-repeat',
        "background-attachment": "fixed"
      };
      _this4.portofolio_banner = {
        background: 'url("' + _this4.company.data.portofolio_banner + '") no-repeat',
        "background-attachment": "fixed"
      };
      _this4.faq_banner = {
        "background-image": 'url("' + _this4.company.data.faq_banner + '")'
      };
    })["catch"](function (err) {
      console.log(err);
    });
    this.$axios.get('/api/social_media').then(function (response) {
      _this4.contacts = response.data;
    })["catch"](function (err) {
      console.log(err);
    });
    this.$axios.get('/api/testimoni/all/data').then(function (response) {
      _this4.testimoni = response.data;
      // if(this.testimoni.length >0 ){
      setTimeout(function () {
        $this.swiperTestimoni();
      }, 1000);
      // }
    })["catch"](function (err) {
      console.log(err);
    });
    this.$axios.get('/api/client/all/data').then(function (response) {
      _this4.client = response.data;
      // if(this.testimoni.length >0 ){
      setTimeout(function () {
        $this.swiperClient();
      }, 1000);
      // }
    })["catch"](function (err) {
      console.log(err);
    });
    this.$axios.get('/api/faq/all/data').then(function (response) {
      _this4.faq = response.data;
    })["catch"](function (err) {
      console.log(err);
    });
    this.$axios.get('/api/services/all/data').then(function (response) {
      _this4.services = response.data;
    })["catch"](function (err) {
      console.log(err);
    });
    this.$axios.get('/api/benefits/all/data').then(function (response) {
      _this4.benefits = response.data;
    })["catch"](function (err) {
      console.log(err);
    });
    this.$axios.get('/api/post/all/data').then(function (response) {
      _this4.posts = response.data;
    })["catch"](function (err) {
      console.log(err);
    });
  },
  components: {
    TinyMCEEditor: _components_TinyMCEEditor_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TinyMCEEditor.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TinyMCEEditor.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* Add any custom styles for the editor here */\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Resume/Resume.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Resume/Resume.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-white{\r\n    background: white;\n}\n.input-file {\r\n    opacity: 0; /* invisible but it's there! */\r\n    width: 100%;\r\n    height: 30px;\r\n    position: absolute;\r\n    cursor: pointer;\n}\n#price_list .card-body p{\r\nline-height: 2;\n}\n#hero .mce-content-body h1{\r\n    margin: 0 0 10px 0;\r\n    font-size: 48px !important;\r\n    font-weight: 700 !important;\r\n    line-height: 56px !important;\r\n    color: #fff !important;\r\n    text-align: start !important;\n}\n#hero .mce-content-body h2{\r\n    color: rgba(255, 255, 255, 0.6) !important;\r\n    margin-bottom: 50px !important;\r\n    font-size: 24px !important;\n}\n#projects input{\r\n  width: 166px !important;\r\n  border-color: transparent !important;  \r\n  background: transparent !important;\r\n  color: #0d6efd;\n}\n#price_list .card-body{\r\n  line-height: 2; min-height:756px !important;\r\n  /* overflow: auto; */\n}\r\n", ""]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/**\r\n* Template Name: Arsha\r\n* Updated: Jul 05 2023 with Bootstrap v5.3.0\r\n* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/\r\n* Author: BootstrapMade.com\r\n* License: https://bootstrapmade.com/license/\r\n*/\r\n\r\n/*--------------------------------------------------------------\r\n# General\r\n--------------------------------------------------------------*/\r\nbody {\r\n    font-family: \"Open Sans\", sans-serif;\r\n    color: #444444;\r\n  }\r\n  \r\n  a {\r\n    color: #47b2e4;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  a:hover {\r\n    color: #73c5eb;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  h1,\r\n  h2,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6 {\r\n    font-family: \"Jost\", sans-serif;\r\n  }\r\n  p{\r\n    text-align: left !important;\r\n  }\r\n\r\n \r\n\r\n/*--------------------------------------------------------------\r\n# setloading\r\n--------------------------------------------------------------*/\r\n#setloading {\r\n  position: absolute;\r\n  inset: 0;\r\n  z-index: 999999;\r\n  overflow: hidden;\r\n  background: #61a0fd; \r\n}\r\n\r\n#setloading span {\r\n  content: \"\";\r\n  position: fixed;\r\n  top: calc(50% - 30px);\r\n  left: calc(50% - 30px); \r\n}\r\n \r\n\r\n  /*--------------------------------------------------------------\r\n  # Preloader\r\n  --------------------------------------------------------------*/\r\n  #preloader {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: 9999;\r\n    overflow: hidden;\r\n    background: #37517e;\r\n  }\r\n  \r\n  #preloader:before {\r\n    content: \"\";\r\n    position: fixed;\r\n    top: calc(50% - 30px);\r\n    left: calc(50% - 30px);\r\n    border: 6px solid #37517e;\r\n    border-top-color: #fff;\r\n    border-bottom-color: #fff;\r\n    border-radius: 50%;\r\n    width: 60px;\r\n    height: 60px;\r\n    animation: animate-preloader 1s linear infinite;\r\n  }\r\n  \r\n  @keyframes animate-preloader {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n  \r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Back to top button\r\n  --------------------------------------------------------------*/\r\n  .back-to-top {\r\n    position: fixed;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    right: 15px;\r\n    bottom: 15px;\r\n    z-index: 996;\r\n    background: #47b2e4;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50px;\r\n    transition: all 0.4s;\r\n  }\r\n  \r\n  .back-to-top i {\r\n    font-size: 24px;\r\n    color: #fff;\r\n    line-height: 0;\r\n  }\r\n  \r\n  .back-to-top:hover {\r\n    background: #6bc1e9;\r\n    color: #fff;\r\n  }\r\n  \r\n  .back-to-top.active {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Header\r\n  --------------------------------------------------------------*/\r\n  #header {\r\n    transition: all 0.5s;\r\n    z-index: 997;\r\n    padding: 15px 0;\r\n  }\r\n  \r\n  #header.header-scrolled,\r\n  #header.header-inner-pages {\r\n    background: #4256c9;\r\n  }\r\n  \r\n  #header .logo {\r\n    font-size: 30px;\r\n    margin: 0;\r\n    padding: 0;\r\n    line-height: 1;\r\n    font-weight: 500;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  #header .logo a {\r\n    color: #fff;\r\n  }\r\n  \r\n  #header .logo img {\r\n    max-height: 40px;\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Navigation Menu\r\n  --------------------------------------------------------------*/\r\n  /**\r\n  * Desktop Navigation \r\n  */\r\n  .navbar {\r\n    padding: 0;\r\n  }\r\n  \r\n  .navbar ul {\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    list-style: none;\r\n    align-items: center;\r\n  }\r\n  \r\n  .navbar li {\r\n    position: relative;\r\n  }\r\n  \r\n  .navbar a,\r\n  .navbar a:focus {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 10px 0 10px 30px;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    color: #fff;\r\n    white-space: nowrap;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .navbar a i,\r\n  .navbar a:focus i {\r\n    font-size: 12px;\r\n    line-height: 0;\r\n    margin-left: 5px;\r\n  }\r\n  \r\n  .navbar a:hover,\r\n  .navbar .active,\r\n  .navbar .active:focus,\r\n  .navbar li:hover>a {\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  .navbar .getstarted,\r\n  .navbar .getstarted:focus {\r\n    padding: 8px 20px;\r\n    margin-left: 30px;\r\n    border-radius: 50px;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    border: 2px solid #47b2e4;\r\n    font-weight: 600;\r\n  }\r\n  \r\n  .navbar .getstarted:hover,\r\n  .navbar .getstarted:focus:hover {\r\n    color: #fff;\r\n    background: #31a9e1;\r\n  }\r\n  \r\n  .navbar .dropdown ul {\r\n    display: block;\r\n    position: absolute;\r\n    left: 14px;\r\n    top: calc(100% + 30px);\r\n    margin: 0;\r\n    padding: 10px 0;\r\n    z-index: 99;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    background: #fff;\r\n    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);\r\n    transition: 0.3s;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .navbar .dropdown ul li {\r\n    min-width: 200px;\r\n  }\r\n  \r\n  .navbar .dropdown ul a {\r\n    padding: 10px 20px;\r\n    font-size: 14px;\r\n    text-transform: none;\r\n    font-weight: 500;\r\n    color: #0c3c53;\r\n  }\r\n  \r\n  .navbar .dropdown ul a i {\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .navbar .dropdown ul a:hover,\r\n  .navbar .dropdown ul .active:hover,\r\n  .navbar .dropdown ul li:hover>a {\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  .navbar .dropdown:hover>ul {\r\n    opacity: 1;\r\n    top: 100%;\r\n    visibility: visible;\r\n  }\r\n  \r\n  .navbar .dropdown .dropdown ul {\r\n    top: 0;\r\n    left: calc(100% - 30px);\r\n    visibility: hidden;\r\n  }\r\n  \r\n  .navbar .dropdown .dropdown:hover>ul {\r\n    opacity: 1;\r\n    top: 0;\r\n    left: 100%;\r\n    visibility: visible;\r\n  }\r\n  \r\n  @media (max-width: 1366px) {\r\n    .navbar .dropdown .dropdown ul {\r\n      left: -90%;\r\n    }\r\n  \r\n    .navbar .dropdown .dropdown:hover>ul {\r\n      left: -100%;\r\n    }\r\n  }\r\n  \r\n  /**\r\n  * Mobile Navigation \r\n  */\r\n  .mobile-nav-toggle {\r\n    color: #fff;\r\n    font-size: 28px;\r\n    cursor: pointer;\r\n    display: none;\r\n    line-height: 0;\r\n    transition: 0.5s;\r\n  }\r\n  \r\n  .mobile-nav-toggle.bi-x {\r\n    color: #fff;\r\n  }\r\n  \r\n  @media (max-width: 991px) {\r\n    .mobile-nav-toggle {\r\n      display: block;\r\n    }\r\n  \r\n    .navbar ul {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  .navbar-mobile {\r\n    position: fixed;\r\n    overflow: hidden;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    background: rgba(40, 58, 90, 0.9);\r\n    transition: 0.3s;\r\n    z-index: 999;\r\n  }\r\n  \r\n  .navbar-mobile .mobile-nav-toggle {\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 15px;\r\n  }\r\n  \r\n  .navbar-mobile ul {\r\n    display: block;\r\n    position: absolute;\r\n    top: 55px;\r\n    right: 15px;\r\n    bottom: 15px;\r\n    left: 15px;\r\n    padding: 10px 0;\r\n    border-radius: 10px;\r\n    background-color: #fff;\r\n    overflow-y: auto;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .navbar-mobile a,\r\n  .navbar-mobile a:focus {\r\n    padding: 10px 20px;\r\n    font-size: 15px;\r\n    color: #37517e;\r\n  }\r\n  \r\n  .navbar-mobile a:hover,\r\n  .navbar-mobile .active,\r\n  .navbar-mobile li:hover>a {\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  .navbar-mobile .getstarted,\r\n  .navbar-mobile .getstarted:focus {\r\n    margin: 15px;\r\n    color: #37517e;\r\n  }\r\n  \r\n  .navbar-mobile .dropdown ul {\r\n    position: static;\r\n    display: none;\r\n    margin: 10px 20px;\r\n    padding: 10px 0;\r\n    z-index: 99;\r\n    opacity: 1;\r\n    visibility: visible;\r\n    background: #fff;\r\n    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);\r\n  }\r\n  \r\n  .navbar-mobile .dropdown ul li {\r\n    min-width: 200px;\r\n  }\r\n  \r\n  .navbar-mobile .dropdown ul a {\r\n    padding: 10px 20px;\r\n  }\r\n  \r\n  .navbar-mobile .dropdown ul a i {\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .navbar-mobile .dropdown ul a:hover,\r\n  .navbar-mobile .dropdown ul .active:hover,\r\n  .navbar-mobile .dropdown ul li:hover>a {\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  .navbar-mobile .dropdown>.dropdown-active {\r\n    display: block;\r\n    visibility: visible !important;\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Hero Section\r\n  --------------------------------------------------------------*/\r\n  #hero {\r\n    padding: 80px 0;\r\n    //background: url(\"/images/cta-bg.jpg\") no-repeat;\r\n    background-position: center center;\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n  .hero-button {\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 5vh;\r\n    width: 30px;\r\n    z-index: 99;\r\n  }\r\n\r\n.hero-button > a {text-decoration: none;} \r\n.hero-button .icon{\r\n  padding: 5px 10px;\r\n  margin: 10px auto;\r\n  color: #c0c0c0;\r\n  font-size: 1.5em;\r\n}\r\n#file-upload {\r\n  margin: 0 auto;\r\n  padding: 0px;\r\n}\r\n.upload {\r\n  border: 2px dashed silver;\r\n  border-radius: 5px;\r\n  width: 50px;\r\n  height: 50px;\r\n  margin: 10px auto;\r\n  padding: 5px 10px;\r\n  position: relative;\r\n  overflow: hidden;\r\n  text-align: center;\r\n   color: silver;\r\n}\r\n.upload:hover {opacity: 0.75;}\r\n.upload:active {opacity: 1;}\r\n.upload > a {\r\n  color: #blue;\r\n  cursor: pointer;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 24px;\r\n  font-weight: 400;\r\n  height: 40px;\r\n  width: 40px;\r\n  outline-offset: -5px;\r\n}\r\n.upload > a > span .fa {padding: 8px;}\r\n.upload > a > span {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n.upload > a > .files {\r\n  height: 100%;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n.upload > a > .files > #files {\r\n  bottom: 0;\r\n  cursor: inherit;\r\n  font-size: 1000px !important;\r\n  height: 300px;\r\n  margin: 0;\r\n  opacity: 0;\r\n  outline: none;\r\n  padding: 0;\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n  #hero::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    background: #5d6fd625;\r\n  }\r\n\r\n/* \r\n#hero {\r\n  width: 100%;\r\n  height: 80vh;\r\n  background: #5d70d6; \r\n}\r\n*/\r\n  #hero .container {\r\n    padding-top: 72px;\r\n  }\r\n  \r\n  #hero h1 {\r\n    margin: 0 0 10px 0;\r\n    font-size: 48px;\r\n    font-weight: 700;\r\n    line-height: 56px;\r\n    color: #fff;\r\n    text-align: start !important;\r\n  }\r\n  \r\n  #hero h2 {\r\n    color: rgba(255, 255, 255, 0.6);\r\n    margin-bottom: 50px;\r\n    font-size: 24px;\r\n  }\r\n  \r\n  #hero .btn-get-started {\r\n    font-family: \"Jost\", sans-serif;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    letter-spacing: 1px;\r\n    display: inline-block;\r\n    padding: 10px 28px 11px 28px;\r\n    border-radius: 50px;\r\n    transition: 0.5s;\r\n    margin: 10px 0 0 0;\r\n    color: #fff;\r\n    background: #47b2e4;\r\n  }\r\n  \r\n  #hero .btn-get-started:hover {\r\n    background: #209dd8;\r\n  }\r\n  \r\n  #hero .btn-watch-video {\r\n    font-size: 16px;\r\n    display: flex;\r\n    align-items: center;\r\n    transition: 0.5s;\r\n    margin: 10px 0 0 25px;\r\n    color: #fff;\r\n    line-height: 1;\r\n  }\r\n  \r\n  #hero .btn-watch-video i {\r\n    line-height: 0;\r\n    color: #fff;\r\n    font-size: 32px;\r\n    transition: 0.3s;\r\n    margin-right: 8px;\r\n  }\r\n  \r\n  #hero .btn-watch-video:hover i {\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  #hero .animated {\r\n    animation: up-down 2s ease-in-out infinite alternate-reverse both;\r\n  }\r\n    \r\n  @media (min-width: 1024px) {\r\n    #hero {\r\n      background-attachment: fixed;\r\n    }\r\n  }\r\n \r\n \r\n  @media (max-width: 991px) {\r\n    #hero {\r\n      height: 100vh;\r\n      text-align: center;\r\n    }\r\n  \r\n    #hero .animated {\r\n      //animation: none;\r\n      animation: up-down 2s ease-in-out infinite alternate-reverse both;\r\n    }\r\n  \r\n    #hero .hero-img {\r\n      text-align: center;\r\n    }\r\n  \r\n    #hero .hero-img img {\r\n      width: 50%;\r\n    }\r\n  }\r\n  @media (max-width: 768px) { \r\n    #hero h1 { \r\n      font-size: 28px;\r\n      line-height: 36px;\r\n      text-align: center !important;\r\n    }\r\n  \r\n    #hero h2 {\r\n      font-size: 18px;\r\n      line-height: 24px;\r\n      margin-bottom: 30px;\r\n    }\r\n  \r\n    #hero .hero-img img {\r\n      width: 90%;\r\n    }\r\n    \r\n    .icon-benefit{\r\n      margin-left: 0px !important;\r\n    }\r\n    #hero .animated {\r\n      //animation: none;\r\n      animation: up-down 2s ease-in-out infinite alternate-reverse both;\r\n    }\r\n  }\r\n/*    \r\n  @media (max-width: 575px) {\r\n    #hero {\r\n      background-attachment: inherit !important;\r\n    }\r\n    #hero .hero-img img {\r\n      width: 80%;\r\n    }\r\n  \r\n    .icon-benefit{\r\n      margin-left: 0px !important;\r\n    }\r\n    #hero .btn-get-started {\r\n      font-size: 16px;\r\n      padding: 10px 24px 11px 24px;\r\n    }\r\n  }\r\n   */\r\n  @keyframes up-down {\r\n    0% {\r\n      transform: translateY(10px);\r\n    }\r\n  \r\n    100% {\r\n      transform: translateY(-10px);\r\n    }\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Sections General\r\n  --------------------------------------------------------------*/\r\n  section {\r\n    padding: 45px 0;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  /* .section-bg {\r\n    background-color: #f3f5fa;\r\n  } */\r\n  .section-title2 {\r\n    text-align: left !important;\r\n    padding-bottom: 30px;\r\n  }\r\n  .section-title2 p {\r\n    text-align: justify !important; \r\n  }\r\n \r\n  .section-title2 h2 {\r\n    font-size: 32px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    margin-bottom: 20px;\r\n    padding-bottom: 20px;\r\n    position: relative;\r\n    color: #37517e;\r\n  }\r\n  \r\n  .section-title {\r\n    text-align: center;\r\n    padding-bottom: 30px;\r\n  }\r\n  \r\n  .section-title h2 {\r\n    font-size: 32px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    margin-bottom: 20px;\r\n    padding-bottom: 20px;\r\n    position: relative;\r\n    color: #37517e;\r\n  }\r\n  \r\n  .section-title h2::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: block;\r\n    width: 120px;\r\n    height: 1px;\r\n    background: #ddd;\r\n    bottom: 1px;\r\n    left: calc(50% - 60px);\r\n  }\r\n  \r\n  .section-title h2::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: block;\r\n    width: 40px;\r\n    height: 3px;\r\n    background: #47b2e4;\r\n    bottom: 0;\r\n    left: calc(50% - 20px);\r\n  }\r\n  \r\n  .section-title p {\r\n    margin-bottom: 0;\r\n    text-align: center !important; \r\n\r\n  }\r\n  \r\n  @media (max-width: 768px) {\r\n    .section-title p {\r\n      text-align: center !important; \r\n    }\r\n  }\r\n  @media (max-width: 575px) {\r\n    .section-title p {\r\n      text-align: center !important; \r\n    }\r\n  }\r\n  /*--------------------------------------------------------------\r\n  # Clients\r\n  --------------------------------------------------------------*/\r\n  .clients {\r\n    padding-top: 20px;\r\n  }\r\n  \r\n  .clients .swiper-slide img {\r\n    opacity: 0.5;\r\n    transition: 0.3s;\r\n    /* filter: grayscale(100); */\r\n  }\r\n  \r\n  .clients .swiper-slide img:hover {\r\n    filter: none;\r\n    opacity: 1;\r\n  }\r\n  \r\n  .clients .swiper-pagination {\r\n    margin-top: 20px;\r\n    position: relative;\r\n  }\r\n  \r\n  .clients .swiper-pagination .swiper-pagination-bullet {\r\n    width: 12px;\r\n    height: 12px;\r\n    background-color: #fff;\r\n    opacity: 1;\r\n    background-color: #ddd;\r\n  }\r\n  \r\n  .clients .swiper-pagination .swiper-pagination-bullet-active {\r\n    background-color: #ffc451;\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # About Us\r\n  --------------------------------------------------------------*/\r\n  .about .content h3 {\r\n    font-weight: 600;\r\n    font-size: 26px;\r\n  }\r\n  \r\n  .about .content ul {\r\n    list-style: none;\r\n    padding: 0;\r\n  }\r\n  \r\n  .about .content ul li {\r\n    padding-left: 28px;\r\n    position: relative;\r\n  }\r\n  \r\n  .about .content ul li+li {\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .about .content ul i {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 2px;\r\n    font-size: 20px;\r\n    color: #47b2e4;\r\n    line-height: 1;\r\n  }\r\n  \r\n  .about .content p:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .about .content .btn-learn-more {\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    display: inline-block;\r\n    padding: 12px 32px;\r\n    border-radius: 4px;\r\n    transition: 0.3s;\r\n    line-height: 1;\r\n    color: #47b2e4;\r\n    animation-delay: 0.8s;\r\n    margin-top: 6px;\r\n    border: 2px solid #47b2e4;\r\n  }\r\n  \r\n  .about .content .btn-learn-more:hover {\r\n    background: #47b2e4;\r\n    color: #fff;\r\n    text-decoration: none;\r\n  }\r\n  .about .p{\r\n    text-align: justify !important;\r\n  }\r\n  /*--------------------------------------------------------------\r\n  # Why Us\r\n  --------------------------------------------------------------*/\r\n  .why-us .content {\r\n    padding: 60px 100px 0 100px;\r\n  }\r\n  \r\n  .why-us .content h3 {\r\n    font-weight: 400;\r\n    font-size: 34px;\r\n    color: #37517e;\r\n  }\r\n  \r\n  .why-us .content h4 {\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    margin-top: 5px;\r\n  }\r\n  \r\n  .why-us .content p {\r\n    font-size: 15px;\r\n    color: #848484;\r\n  }\r\n  \r\n  .why-us .img {\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n  }\r\n  \r\n  .why-us .accordion-list {\r\n    padding: 0 100px 60px 100px;\r\n  }\r\n  \r\n  .why-us .accordion-list ul {\r\n    padding: 0;\r\n    list-style: none;\r\n  }\r\n  \r\n  .why-us .accordion-list li+li {\r\n    margin-top: 15px;\r\n  }\r\n  \r\n  .why-us .accordion-list li {\r\n    padding: 20px;\r\n    background: #fff;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .why-us .accordion-list a {\r\n    display: block;\r\n    position: relative;\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    font-weight: 500;\r\n    padding-right: 30px;\r\n    outline: none;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .why-us .accordion-list span {\r\n    color: #47b2e4;\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n    padding-right: 10px;\r\n  }\r\n  \r\n  .why-us .accordion-list i {\r\n    font-size: 24px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n  \r\n  .why-us .accordion-list p {\r\n    margin-bottom: 0;\r\n    padding: 10px 0 0 0;\r\n  }\r\n  \r\n  .why-us .accordion-list .icon-show {\r\n    display: none;\r\n  }\r\n  \r\n  .why-us .accordion-list a.collapsed {\r\n    color: #343a40;\r\n  }\r\n  \r\n  .why-us .accordion-list a.collapsed:hover {\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  .why-us .accordion-list a.collapsed .icon-show {\r\n    display: inline-block;\r\n  }\r\n  \r\n  .why-us .accordion-list a.collapsed .icon-close {\r\n    display: none;\r\n  }\r\n  \r\n  @media (max-width: 1024px) {\r\n  \r\n    .why-us .content,\r\n    .why-us .accordion-list {\r\n      padding-left: 0;\r\n      padding-right: 0;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 992px) {\r\n    .why-us .img {\r\n      min-height: 400px;\r\n    }\r\n  \r\n    .why-us .content {\r\n      padding-top: 30px;\r\n    }\r\n  \r\n    .why-us .accordion-list {\r\n      padding-bottom: 30px;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 575px) {\r\n    .why-us .img {\r\n      min-height: 200px;\r\n    }\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Skills\r\n  --------------------------------------------------------------*/\r\n  .skills .content h3 {\r\n    font-weight: 700;\r\n    font-size: 32px;\r\n    color: #37517e;\r\n    font-family: \"Poppins\", sans-serif;\r\n  }\r\n  \r\n  .skills .content ul {\r\n    list-style: none;\r\n    padding: 0;\r\n  }\r\n  \r\n  .skills .content ul li {\r\n    padding-bottom: 10px;\r\n  }\r\n  \r\n  .skills .content ul i {\r\n    font-size: 20px;\r\n    padding-right: 4px;\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  .skills .content p:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .skills .progress {\r\n    height: 60px;\r\n    display: block;\r\n    background: none;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .skills .progress .skill {\r\n    padding: 0;\r\n    margin: 0 0 6px 0;\r\n    text-transform: uppercase;\r\n    display: block;\r\n    font-weight: 600;\r\n    font-family: \"Poppins\", sans-serif;\r\n    color: #37517e;\r\n  }\r\n  \r\n  .skills .progress .skill .val {\r\n    float: right;\r\n    font-style: normal;\r\n  }\r\n  \r\n  .skills .progress-bar-wrap {\r\n    background: #e8edf5;\r\n    height: 10px;\r\n  }\r\n  \r\n  .skills .progress-bar {\r\n    width: 1px;\r\n    height: 10px;\r\n    transition: 0.9s;\r\n    background-color: #4668a2;\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Services\r\n  --------------------------------------------------------------*/\r\n  .services .icon-box {\r\n    box-shadow: 0px 0 25px 0 rgba(0, 0, 0, 0.1);\r\n    padding: 50px 30px;\r\n    transition: all ease-in-out 0.4s;\r\n    background: #fff;\r\n  }\r\n  \r\n  .services .icon-box .icon {\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .services .icon-box .icon i {\r\n    color: #47b2e4;\r\n    font-size: 36px;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .services .icon-box h4 {\r\n    font-weight: 500;\r\n    margin-bottom: 15px;\r\n    font-size: 24px;\r\n  }\r\n  \r\n  .services .icon-box h4 a {\r\n    color: #37517e;\r\n    transition: ease-in-out 0.3s;\r\n  }\r\n  \r\n  .services .icon-box p {\r\n    line-height: 24px;\r\n    font-size: 14px;\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .services .icon-box:hover {\r\n    transform: translateY(-10px);\r\n  }\r\n  \r\n  .services .icon-box:hover h4 a {\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Cta\r\n  --------------------------------------------------------------*/\r\n  .cta {\r\n    background: linear-gradient(rgba(40, 58, 90, 0.9), rgba(40, 58, 90, 0.9)), url(\"/images/cta-bg.jpg\") fixed center center;\r\n    background-size: cover;\r\n    padding: 120px 0;\r\n    \r\n  } \r\n  .cta h3 {\r\n    color: #fff;\r\n    font-size: 28px;\r\n    font-weight: 700;\r\n  }\r\n  \r\n  .cta p {\r\n    color: #fff;\r\n    text-align: left !important\r\n  }\r\n  \r\n  .cta .cta-btn {\r\n    font-family: \"Jost\", sans-serif;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    letter-spacing: 1px;\r\n    display: inline-block;\r\n    padding: 12px 40px;\r\n    border-radius: 50px;\r\n    transition: 0.5s;\r\n    margin: 10px;\r\n    border: 2px solid #fff;\r\n    color: #fff;\r\n  }\r\n  \r\n  .cta .cta-btn:hover {\r\n    background: #47b2e4;\r\n    border: 2px solid #47b2e4;\r\n  }\r\n  \r\n  @media (max-width: 1024px) {\r\n    .cta {\r\n      background-attachment: scroll;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 769px) {\r\n    .cta .cta-btn-container {\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: flex-end;\r\n    }\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Portfolio\r\n  --------------------------------------------------------------*/\r\n  .portfolio #portfolio-flters {\r\n    list-style: none;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .portfolio #portfolio-flters li {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    margin: 10px 5px;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    line-height: 1;\r\n    color: #444444;\r\n    transition: all 0.3s;\r\n    padding: 8px 20px;\r\n    border-radius: 50px;\r\n    font-family: \"Poppins\", sans-serif;\r\n  }\r\n  \r\n  .portfolio #portfolio-flters li:hover,\r\n  .portfolio #portfolio-flters li.filter-active {\r\n    background: #47b2e4;\r\n    color: #fff;\r\n  }\r\n  \r\n  .portfolio .portfolio-item {\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  .portfolio .portfolio-item .portfolio-img {\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .portfolio .portfolio-item .portfolio-img img {\r\n    transition: all 0.6s;\r\n  }\r\n  \r\n  .portfolio .portfolio-item .portfolio-info {\r\n    opacity: 0;\r\n    position: absolute;\r\n    left: 15px;\r\n    bottom: 0;\r\n    z-index: 3;\r\n    right: 15px;\r\n    transition: all 0.3s;\r\n    background: rgba(55, 81, 126, 0.8);\r\n    padding: 10px 15px;\r\n  }\r\n  \r\n  .portfolio .portfolio-item .portfolio-info h4 {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    margin-bottom: 0px;\r\n  }\r\n  \r\n  .portfolio .portfolio-item .portfolio-info p {\r\n    color: #f9fcfe;\r\n    font-size: 14px;\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .portfolio .portfolio-item .portfolio-info .preview-link,\r\n  .portfolio .portfolio-item .portfolio-info .details-link {\r\n    position: absolute;\r\n    right: 40px;\r\n    font-size: 24px;\r\n    top: calc(50% - 18px);\r\n    color: #fff;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .portfolio .portfolio-item .portfolio-info .preview-link:hover,\r\n  .portfolio .portfolio-item .portfolio-info .details-link:hover {\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  .portfolio .portfolio-item .portfolio-info .details-link {\r\n    right: 10px;\r\n  }\r\n  \r\n  .portfolio .portfolio-item:hover .portfolio-img img {\r\n    transform: scale(1.15);\r\n  }\r\n  \r\n  .portfolio .portfolio-item:hover .portfolio-info {\r\n    opacity: 1;\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Portfolio Details\r\n  --------------------------------------------------------------*/\r\n  .portfolio-details {\r\n    padding-top: 40px;\r\n  }\r\n  \r\n  .portfolio-details .portfolio-details-slider img {\r\n    width: 100%;\r\n  }\r\n  \r\n  .portfolio-details .portfolio-details-slider .swiper-pagination {\r\n    margin-top: 20px;\r\n    position: relative;\r\n  }\r\n  \r\n  .portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet {\r\n    width: 12px;\r\n    height: 12px;\r\n    background-color: #fff;\r\n    opacity: 1;\r\n    border: 1px solid #47b2e4;\r\n  }\r\n  \r\n  .portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet-active {\r\n    background-color: #47b2e4;\r\n  }\r\n  \r\n  .portfolio-details .portfolio-info {\r\n    padding: 30px;\r\n    box-shadow: 0px 0 30px rgba(55, 81, 126, 0.08);\r\n  }\r\n  \r\n  .portfolio-details .portfolio-info h3 {\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    margin-bottom: 20px;\r\n    padding-bottom: 20px;\r\n    border-bottom: 1px solid #eee;\r\n  }\r\n  \r\n  .portfolio-details .portfolio-info ul {\r\n    list-style: none;\r\n    padding: 0;\r\n    font-size: 15px;\r\n  }\r\n  \r\n  .portfolio-details .portfolio-info ul li+li {\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .portfolio-details .portfolio-description {\r\n    padding-top: 30px;\r\n  }\r\n  \r\n  .portfolio-details .portfolio-description h2 {\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .portfolio-details .portfolio-description p {\r\n    padding: 0;\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Team\r\n  --------------------------------------------------------------*/\r\n  .team .member {\r\n    position: relative;\r\n    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);\r\n    padding: 30px;\r\n    border-radius: 5px;\r\n    background: #fff;\r\n    transition: 0.5s;\r\n    height: 100%;\r\n  }\r\n  \r\n  .team .member .pic {\r\n    overflow: hidden;\r\n    width: 180px;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .team .member .pic img {\r\n    transition: ease-in-out 0.3s;\r\n  }\r\n  \r\n  .team .member:hover {\r\n    transform: translateY(-10px);\r\n  }\r\n  \r\n  .team .member .member-info {\r\n    padding-left: 30px;\r\n  }\r\n  \r\n  .team .member h4 {\r\n    font-weight: 700;\r\n    margin-bottom: 5px;\r\n    font-size: 20px;\r\n    color: #37517e;\r\n  }\r\n  \r\n  .team .member span {\r\n    display: block;\r\n    font-size: 15px;\r\n    padding-bottom: 10px;\r\n    position: relative;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  .team .member span::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: block;\r\n    width: 50px;\r\n    height: 1px;\r\n    background: #cbd6e9;\r\n    bottom: 0;\r\n    left: 0;\r\n  }\r\n  \r\n  .team .member p {\r\n    margin: 10px 0 0 0;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .team .member .social {\r\n    margin-top: 12px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n  }\r\n  \r\n  .team .member .social a {\r\n    transition: ease-in-out 0.3s;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 50px;\r\n    width: 32px;\r\n    height: 32px;\r\n    background: #eff2f8;\r\n  }\r\n  \r\n  .team .member .social a i {\r\n    color: #37517e;\r\n    font-size: 16px;\r\n    margin: 0 2px;\r\n  }\r\n  \r\n  .team .member .social a:hover {\r\n    background: #47b2e4;\r\n  }\r\n  \r\n  .team .member .social a:hover i {\r\n    color: #fff;\r\n  }\r\n  \r\n  .team .member .social a+a {\r\n    margin-left: 8px;\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Pricing\r\n  --------------------------------------------------------------*/\r\n  .pricing .row {\r\n    padding-top: 40px;\r\n  }\r\n  \r\n  .pricing .box {\r\n    padding: 60px 40px;\r\n    box-shadow: 0 3px 20px -2px rgba(20, 45, 100, 0.1);\r\n    background: #fff;\r\n    height: 100%;\r\n    border-top: 4px solid #fff;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  .pricing h3 {\r\n    font-weight: 500;\r\n    margin-bottom: 15px;\r\n    font-size: 20px;\r\n    color: #37517e;\r\n  }\r\n  \r\n  .pricing h4 {\r\n    font-size: 48px;\r\n    color: #37517e;\r\n    font-weight: 400;\r\n    font-family: \"Jost\", sans-serif;\r\n    margin-bottom: 25px;\r\n  }\r\n  \r\n  .pricing h4 sup {\r\n    font-size: 28px;\r\n  }\r\n  \r\n  .pricing h4 span {\r\n    color: #47b2e4;\r\n    font-size: 18px;\r\n    display: block;\r\n  }\r\n  \r\n  .pricing ul {\r\n    padding: 20px 0;\r\n    list-style: none;\r\n    color: #999;\r\n    text-align: left;\r\n    line-height: 20px;\r\n  }\r\n  \r\n  .pricing ul li {\r\n    padding: 10px 0 10px 30px;\r\n    position: relative;\r\n  }\r\n  \r\n  .pricing ul i {\r\n    color: #28a745;\r\n    font-size: 24px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 6px;\r\n  }\r\n  \r\n  .pricing ul .na {\r\n    color: #ccc;\r\n  }\r\n  \r\n  .pricing ul .na i {\r\n    color: #ccc;\r\n  }\r\n  \r\n  .pricing ul .na span {\r\n    text-decoration: line-through;\r\n  }\r\n  \r\n  .pricing .buy-btn {\r\n    display: inline-block;\r\n    padding: 12px 35px;\r\n    border-radius: 50px;\r\n    color: #47b2e4;\r\n    transition: none;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    font-family: \"Jost\", sans-serif;\r\n    transition: 0.3s;\r\n    border: 1px solid #47b2e4;\r\n  }\r\n  \r\n  .pricing .buy-btn:hover {\r\n    background: #47b2e4;\r\n    color: #fff;\r\n  }\r\n  \r\n  .pricing .featured {\r\n    border-top-color: #47b2e4;\r\n  }\r\n  \r\n  .pricing .featured .buy-btn {\r\n    background: #47b2e4;\r\n    color: #fff;\r\n  }\r\n  \r\n  .pricing .featured .buy-btn:hover {\r\n    background: #23a3df;\r\n  }\r\n  \r\n  @media (max-width: 992px) {\r\n    .pricing .box {\r\n      max-width: 60%;\r\n      margin: 0 auto 30px auto;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 767px) {\r\n    .pricing .box {\r\n      max-width: 80%;\r\n      margin: 0 auto 30px auto;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 420px) {\r\n    .pricing .box {\r\n      max-width: 100%;\r\n      margin: 0 auto 30px auto;\r\n    }\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Frequently Asked Questions\r\n  --------------------------------------------------------------*/\r\n  .faq .faq-list {\r\n    padding: 0 100px;\r\n  }\r\n  \r\n  .faq .faq-list ul {\r\n    padding: 0;\r\n    list-style: none;\r\n  }\r\n  \r\n  .faq .faq-list li+li {\r\n    margin-top: 15px;\r\n  }\r\n  \r\n  .faq .faq-list li {\r\n    padding: 20px;\r\n    background: #fff;\r\n    border-radius: 4px;\r\n    position: relative;\r\n  }\r\n  \r\n  .faq .faq-list a {\r\n    display: block;\r\n    position: relative;\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    font-weight: 500;\r\n    padding: 0 30px;\r\n    outline: none;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .faq .faq-list .icon-help {\r\n    font-size: 24px;\r\n    position: absolute;\r\n    right: 0;\r\n    left: 20px;\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  .faq .faq-list .icon-show,\r\n  .faq .faq-list .icon-close {\r\n    font-size: 24px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n  \r\n  .faq .faq-list p {\r\n    margin-bottom: 0;\r\n    padding: 10px 0 0 0;\r\n  }\r\n  \r\n  .faq .faq-list .icon-show {\r\n    display: none;\r\n  }\r\n  \r\n  .faq .faq-list a.collapsed {\r\n    color: #37517e;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .faq .faq-list a.collapsed:hover {\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  .faq .faq-list a.collapsed .icon-show {\r\n    display: inline-block;\r\n  }\r\n  \r\n  .faq .faq-list a.collapsed .icon-close {\r\n    display: none;\r\n  }\r\n  \r\n  @media (max-width: 1200px) {\r\n    .faq .faq-list {\r\n      padding: 0;\r\n    }\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Contact\r\n  --------------------------------------------------------------*/\r\n  .contact .info {\r\n    border-top: 3px solid #47b2e4;\r\n    border-bottom: 3px solid #47b2e4;\r\n    padding: 30px;\r\n    background: #fff;\r\n    width: 100%;\r\n    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  .contact .info i {\r\n    font-size: 20px;\r\n    color: #47b2e4;\r\n    float: left;\r\n    width: 44px;\r\n    height: 44px;\r\n    background: #e7f5fb;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 50px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n  \r\n  .contact .info h4 {\r\n    padding: 0 0 0 60px;\r\n    font-size: 22px;\r\n    font-weight: 600;\r\n    margin-bottom: 5px;\r\n    color: #37517e;\r\n  }\r\n  \r\n  .contact .info p {\r\n    padding: 0 0 10px 60px;\r\n    margin-bottom: 20px;\r\n    font-size: 14px;\r\n    color: #6182ba;\r\n  }\r\n  \r\n  .contact .info .email p {\r\n    padding-top: 5px;\r\n  }\r\n  \r\n  .contact .info .social-links {\r\n    padding-left: 60px;\r\n  }\r\n  \r\n  .contact .info .social-links a {\r\n    font-size: 18px;\r\n    display: inline-block;\r\n    background: #333;\r\n    color: #fff;\r\n    line-height: 1;\r\n    padding: 8px 0;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    width: 36px;\r\n    height: 36px;\r\n    transition: 0.3s;\r\n    margin-right: 10px;\r\n  }\r\n  \r\n  .contact .info .social-links a:hover {\r\n    background: #47b2e4;\r\n    color: #fff;\r\n  }\r\n  \r\n  .contact .info .email:hover i,\r\n  .contact .info .address:hover i,\r\n  .contact .info .phone:hover i {\r\n    background: #47b2e4;\r\n    color: #fff;\r\n  }\r\n  \r\n  .contact .php-email-form {\r\n    width: 100%;\r\n    border-top: 3px solid #47b2e4;\r\n    border-bottom: 3px solid #47b2e4;\r\n    padding: 30px;\r\n    background: #fff;\r\n    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);\r\n  }\r\n  \r\n  .contact .php-email-form .form-group {\r\n    padding-bottom: 8px;\r\n  }\r\n  \r\n  .contact .php-email-form .validate {\r\n    display: none;\r\n    color: red;\r\n    margin: 0 0 15px 0;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n  }\r\n  \r\n  .contact .php-email-form .error-message {\r\n    display: none;\r\n    color: #fff;\r\n    background: #ed3c0d;\r\n    text-align: left;\r\n    padding: 15px;\r\n    font-weight: 600;\r\n  }\r\n  \r\n  .contact .php-email-form .error-message br+br {\r\n    margin-top: 25px;\r\n  }\r\n  \r\n  .contact .php-email-form .sent-message {\r\n    display: none;\r\n    color: #fff;\r\n    background: #18d26e;\r\n    text-align: center;\r\n    padding: 15px;\r\n    font-weight: 600;\r\n  }\r\n  \r\n  .contact .php-email-form .loading {\r\n    display: none;\r\n    background: #fff;\r\n    text-align: center;\r\n    padding: 15px;\r\n  }\r\n  \r\n  .contact .php-email-form .loading:before {\r\n    content: \"\";\r\n    display: inline-block;\r\n    border-radius: 50%;\r\n    width: 24px;\r\n    height: 24px;\r\n    margin: 0 10px -6px 0;\r\n    border: 3px solid #18d26e;\r\n    border-top-color: #eee;\r\n    animation: animate-loading 1s linear infinite;\r\n  }\r\n  \r\n  .contact .php-email-form .form-group {\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .contact .php-email-form label {\r\n    padding-bottom: 8px;\r\n  }\r\n  \r\n  .contact .php-email-form input,\r\n  .contact .php-email-form textarea {\r\n    border-radius: 0;\r\n    box-shadow: none;\r\n    font-size: 14px;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .contact .php-email-form input:focus,\r\n  .contact .php-email-form textarea:focus {\r\n    border-color: #47b2e4;\r\n  }\r\n  \r\n  .contact .php-email-form input {\r\n    height: 44px;\r\n  }\r\n  \r\n  .contact .php-email-form textarea {\r\n    padding: 10px 12px;\r\n  }\r\n  \r\n  .contact .php-email-form button[type=submit] {\r\n    background: #47b2e4;\r\n    border: 0;\r\n    padding: 12px 34px;\r\n    color: #fff;\r\n    transition: 0.4s;\r\n    border-radius: 50px;\r\n  }\r\n  \r\n  .contact .php-email-form button[type=submit]:hover {\r\n    background: #209dd8;\r\n  }\r\n  \r\n  @keyframes animate-loading {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n  \r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Breadcrumbs\r\n  --------------------------------------------------------------*/\r\n  .breadcrumbs {\r\n    padding: 15px 0;\r\n    background: #f3f5fa;\r\n    min-height: 40px;\r\n    margin-top: 72px;\r\n  }\r\n  \r\n  @media (max-width: 992px) {\r\n    .breadcrumbs {\r\n      margin-top: 68px;\r\n    }\r\n  }\r\n  \r\n  .breadcrumbs h2 {\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    color: #37517e;\r\n  }\r\n  \r\n  .breadcrumbs ol {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    list-style: none;\r\n    padding: 0 0 10px 0;\r\n    margin: 0;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .breadcrumbs ol li+li {\r\n    padding-left: 10px;\r\n  }\r\n  \r\n  .breadcrumbs ol li+li::before {\r\n    display: inline-block;\r\n    padding-right: 10px;\r\n    color: #4668a2;\r\n    content: \"/\";\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n  # Footer\r\n  --------------------------------------------------------------*/\r\n  #footer-front {\r\n    font-size: 14px;\r\n    background: #37517e;\r\n  }\r\n  \r\n  #footer-front .footer-newsletter {\r\n    padding: 50px 0;\r\n    background: #f3f5fa;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    color: #444444;\r\n  }\r\n  \r\n  #footer-front .footer-newsletter h4 {\r\n    font-size: 24px;\r\n    margin: 0 0 20px 0;\r\n    padding: 0;\r\n    line-height: 1;\r\n    font-weight: 600;\r\n    color: #37517e;\r\n  }\r\n  \r\n  #footer-front .footer-newsletter form {\r\n    margin-top: 30px;\r\n    background: #fff;\r\n    padding: 6px 10px;\r\n    position: relative;\r\n    border-radius: 50px;\r\n    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.06);\r\n    text-align: left;\r\n  }\r\n  \r\n  #footer-front .footer-newsletter form input[type=email] {\r\n    border: 0;\r\n    padding: 4px 8px;\r\n    width: calc(100% - 100px);\r\n  }\r\n  \r\n  #footer-front .footer-newsletter form input[type=submit] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    border: 0;\r\n    background: none;\r\n    font-size: 16px;\r\n    padding: 0 20px;\r\n    background: #47b2e4;\r\n    color: #fff;\r\n    transition: 0.3s;\r\n    border-radius: 50px;\r\n    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  #footer-front .footer-newsletter form input[type=submit]:hover {\r\n    background: #209dd8;\r\n  }\r\n  \r\n  #footer-front .footer-top {\r\n    padding: 60px 0 30px 0;\r\n    background: #fff;\r\n  }\r\n  \r\n  #footer-front .footer-top .footer-contact {\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  #footer-front .footer-top .footer-contact h3 {\r\n    font-size: 28px;\r\n    margin: 0 0 10px 0;\r\n    padding: 2px 0 2px 0;\r\n    line-height: 1;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    color: #37517e;\r\n  }\r\n  \r\n  #footer-front .footer-top .footer-contact p {\r\n    font-size: 14px;\r\n    line-height: 24px;\r\n    margin-bottom: 0;\r\n    font-family: \"Jost\", sans-serif;\r\n    color: #5e5e5e;\r\n  }\r\n  \r\n  #footer-front .footer-top h4 {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    color: #37517e;\r\n    position: relative;\r\n    padding-bottom: 12px;\r\n  }\r\n  \r\n  #footer-front .footer-top .footer-links {\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  #footer-front .footer-top .footer-links ul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  #footer-front .footer-top .footer-links ul i {\r\n    padding-right: 2px;\r\n    color: #47b2e4;\r\n    font-size: 18px;\r\n    line-height: 1;\r\n  }\r\n  \r\n  #footer-front .footer-top .footer-links ul li {\r\n    padding: 10px 0;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  #footer-front .footer-top .footer-links ul li:first-child {\r\n    padding-top: 0;\r\n  }\r\n  \r\n  #footer-front .footer-top .footer-links ul a {\r\n    color: #777777;\r\n    transition: 0.3s;\r\n    display: inline-block;\r\n    line-height: 1;\r\n  }\r\n  \r\n  #footer-front .footer-top .footer-links ul a:hover {\r\n    text-decoration: none;\r\n    color: #47b2e4;\r\n  }\r\n  \r\n  #footer-front .footer-top .social-links a {\r\n    font-size: 18px;\r\n    display: inline-block;\r\n    background: #47b2e4;\r\n    color: #fff;\r\n    line-height: 1;\r\n    padding: 8px 0;\r\n    margin-right: 4px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    width: 36px;\r\n    height: 36px;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  #footer-front .footer-top .social-links a:hover {\r\n    background: #209dd8;\r\n    color: #fff;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  #footer-front .footer-bottom {\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n    color: #fff;\r\n  }\r\n  \r\n  #footer-front .copyright {\r\n    float: left;\r\n  }\r\n  \r\n  #footer-front .credits {\r\n    float: right;\r\n    font-size: 13px;\r\n  }\r\n  \r\n  #footer-front .credits a {\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  @media (max-width: 768px) {\r\n    #footer-front .footer-bottom {\r\n      padding-top: 20px;\r\n      padding-bottom: 20px;\r\n    }\r\n  \r\n    #footer-front .copyright,\r\n    #footer-front .credits {\r\n      text-align: center;\r\n      float: none;\r\n    }\r\n  \r\n    #footer-front .credits {\r\n      padding-top: 4px;\r\n    }\r\n  }\r\n\r\n  /* section benefit */\r\n#benefit {\r\n    background-color: #f3f5fa !important;\r\n}\r\n#benefit .d-flex p{\r\n    text-align: left !important;\r\n}\r\n.price_list .icon-box2  {  \r\ntransition: all ease-in-out 0.4s;\r\n}\r\n.price_list .icon-box2:hover {\r\ntransform: translateY(-10px);\r\n}\r\n#price_list .card-body{\r\n  line-height: 2; \r\n  min-height:636px !important;\r\n}\r\n#price_list .card-body p{\r\nline-height: 2; \r\n}\r\n#price_list .container-fluid{\r\n  padding: 100px !important;\r\n}\r\n#price_list .label-price {\r\n  background: rgb(162, 118, 255); color: white; border-radius: 48px; padding: 15px; font-weight: bold;\r\n}\r\n#price_list  .label-price-active{\r\n  background-color: transparent !important;\r\n  background-image: linear-gradient(-35deg, #ffffff 0%, #ffffff 100%) !important;\r\n  border-color: rgba(0,0,0,0) !important;\r\n  border-radius: 48px 48px 48px 48px !important; \r\n  color: black !important;\r\n  padding:15px !important; \r\n  font-weight:bold !important;\r\n}\r\n#price_list .container-fluid{\r\n  padding: 100px !important;\r\n}\r\n#price_list .label-price h2{\r\n  font-weight: bold !important;\r\n  /* font-size: 5em !important; */\r\n}\r\n#price_list  .label-price-active h2{\r\n  font-weight: bold !important;\r\n  /* font-size: 5em !important;   */\r\n}\r\n@media (max-width: 767px) {\r\n  #price_list .container-fluid{\r\n    padding: 8px !important;\r\n  }\r\n}\r\n@media (max-width: 420px) {\r\n  #price_list .container-fluid{\r\n    padding: 8px !important;\r\n  }\r\n}\r\n/* section projects */\r\n#projects{\r\n  background-color: #edf0f7 !important;\r\n}\r\n#projects .d-flex h1 {\r\n  font-weight: bold;\r\n  font-weight: bold;\r\n  font-size: 3.7em; \r\n}\r\n#projects .d-flex p {\r\n  font-weight: bold;\r\n  text-align: center !important;\r\n    line-height: 0px;\r\n}\r\n  \r\n@media (max-width: 767px) {\r\n  #projects .d-flex h1 { \r\n    font-size: 2.7em !important; \r\n  }\r\n  #projects .d-flex p { \r\n    line-height: 1 !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 420px) {\r\n  #projects .d-flex h1 { \r\n    font-size: 1.8em !important; \r\n  }\r\n  #projects .d-flex p {  \r\n    line-height: 1 !important;\r\n  }\r\n}\r\n\r\n  /* section faq */\r\n#faq {\r\n    background-color: #edf0f7 !important;\r\n}\r\n#faq .d-flex p{\r\n    text-align: left !important;\r\n}\r\n\r\n/* content card */\r\n.content_card {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 400px;\r\n  margin: auto;\r\n  overflow: hidden;\r\n}\r\n\r\n.content_card .content_card-overlay {\r\n  background: rgba(0,0,0,0.7);\r\n  position: absolute;\r\n  height: 99%;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  opacity: 0;\r\n  -webkit-transition: all 0.4s ease-in-out 0s;\r\n  -moz-transition: all 0.4s ease-in-out 0s;\r\n  transition: all 0.4s ease-in-out 0s;\r\n}\r\n\r\n.content_card:hover .content_card-overlay{\r\n  opacity: 1;\r\n}\r\n\r\n.content_card-image{\r\n  width: 100%;\r\n}\r\n\r\n.content_card-details {\r\n  position: absolute;\r\n  text-align: center;\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  width: 100%;\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 0;\r\n  -webkit-transform: translate(-50%, -50%);\r\n  -moz-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n  -webkit-transition: all 0.3s ease-in-out 0s;\r\n  -moz-transition: all 0.3s ease-in-out 0s;\r\n  transition: all 0.3s ease-in-out 0s;\r\n}\r\n\r\n.content_card:hover .content_card-details{\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 1;\r\n}\r\n\r\n.content_card-details h3{\r\n  color: #fff;\r\n  font-weight: 500;\r\n  /* letter-spacing: 0.15em; */\r\n  margin-bottom: 0.5em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.content_card-details p{\r\n  color: #fff;\r\n  font-size: 0.8em;\r\n  text-align: center !important;\r\n  line-height: 0px;\r\n}\r\n\r\n.fadeIn-bottom{\r\n  top: 80%;\r\n}\r\n\r\n.fadeIn-top{\r\n  top: 20%;\r\n}\r\n.fadeIn-bottom{\r\n  top: 80%;\r\n}\r\n\r\n.fadeIn-top{\r\n  top: 20%;\r\n}\r\n\r\n.fadeIn-left{\r\n  left: 20%;\r\n}\r\n\r\n.fadeIn-right{\r\n  left: 80%;\r\n}\r\n.content_card  .flex-container {\r\n  display: flex;\r\n  color: #fff;\r\n  flex-wrap: revert;  \r\n  justify-content: center;\r\n} \r\n.content_card  .flex-container  .flex-item {\r\n  background: transparent;\r\n  font-size: 2.5em;\r\n  margin-right: 10px;\r\n}\r\n\r\n\r\n/*--------------------------------------------------------------\r\n# Testimonials\r\n--------------------------------------------------------------*/\r\n.testimonials {\r\n  padding: 80px 0;\r\n  //background: url(\"/images/cta-bg.jpg\") no-repeat;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n.testimonials::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  background: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.testimonials .section-header {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.testimonials .testimonials-carousel,\r\n.testimonials .testimonials-slider {\r\n  overflow: hidden;\r\n}\r\n\r\n.testimonials .testimonial-item {\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n.testimonials p {\r\n  text-align: center !important; \r\n}\r\n\r\n.testimonials .testimonial-item .testimonial-img {\r\n  width: 100px;\r\n  border-radius: 50%;\r\n  border: 6px solid rgba(255, 255, 255, 0.15);\r\n  margin: 0 auto;\r\n}\r\n\r\n.testimonials .testimonial-item h3 {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  margin: 10px 0 5px 0;\r\n  color: #fff;\r\n}\r\n\r\n.testimonials .testimonial-item h4 {\r\n  font-size: 14px;\r\n  color: #ddd;\r\n  margin: 0 0 15px 0;\r\n}\r\n\r\n.testimonials .testimonial-item .quote-icon-left,\r\n.testimonials .testimonial-item .quote-icon-right {\r\n  color: rgba(255, 255, 255, 0.6);\r\n  font-size: 26px;\r\n}\r\n\r\n.testimonials .testimonial-item .quote-icon-left {\r\n  display: inline-block;\r\n  left: -5px;\r\n  position: relative;\r\n}\r\n\r\n.testimonials .testimonial-item .quote-icon-right {\r\n  display: inline-block;\r\n  right: -5px;\r\n  position: relative;\r\n  top: 10px;\r\n}\r\n\r\n.testimonials .testimonial-item p {\r\n  font-style: italic;\r\n  margin: 0 auto 15px auto;\r\n  color: #eee;\r\n}\r\n\r\n.testimonials .swiper-pagination {\r\n  margin-top: 20px;\r\n  position: relative;\r\n}\r\n\r\n.testimonials .swiper-pagination .swiper-pagination-bullet {\r\n  width: 12px;\r\n  height: 12px;\r\n  background-color: rgba(255, 255, 255, 0.4);\r\n  opacity: 0.5;\r\n}\r\n\r\n.testimonials .swiper-pagination .swiper-pagination-bullet-active {\r\n  background-color: #ffc451;\r\n  opacity: 1;\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  .testimonials {\r\n    background-attachment: fixed;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .testimonials .testimonial-item p {\r\n    width: 80%;\r\n  }\r\n}\r\n\r\n\r\n\r\n/* CONTETNT BLOG */\r\n/* content card */\r\n.content_blog {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 400px;\r\n  min-height: 310px !important;\r\n  max-height: 310px !important;\r\n  margin: auto;\r\n  overflow: hidden;\r\n} \r\n.content_blog img {\r\n  object-fit: cover;\r\n  height: 310px;\r\n}\r\n.content_blog-details {\r\n  padding: 15vh 10px;\r\n  position: absolute;\r\n  overflow: hidden;\r\n  top: 0; \r\n  background: linear-gradient(to bottom, rgba(0, 47, 75, 0.02) 0%,rgba(0, 0, 0, 0.6) 100%);\r\n  color: white;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0 auto;\r\n  text-align: center !important;\r\n}\r\n.content_blog-details:hover {\r\n \r\n  background: linear-gradient(to bottom, rgba(0, 123, 195, 0.02) 0%,rgba(98, 81, 173, 0.6) 100%);\r\n \r\n}\r\n.content_blog-details p{\r\n  /* line-height: 0 !important; */\r\n  color: white;\r\n  text-align: center !important;\r\n  text-align: justify !important;\r\n  padding: 10px;\r\n} \r\n\r\n\r\n#whatsapp {\r\n  background: #fff;\r\n  color: #404040;\r\n  position: fixed;\r\n  display: flex;\r\n  font-weight: 400;\r\n  justify-content: space-between;\r\n  z-index: 98;\r\n  bottom: 25px;\r\n  right: 30px;\r\n  font-size: 15px;\r\n  padding: 10px 20px;\r\n  border-radius: 30px;\r\n  box-shadow: 0 1px 15px rgba(32, 33, 36, 0.28);\r\n  cursor: pointer;\r\n  border: 0;\r\n}\r\n#whatsapp a{\r\n  padding-top: -100px;\r\n  text-decoration: none;\r\n}\r\n#whatsapp a:hover{\r\n  text-decoration: none;\r\n}\r\n#whatsapp i{\r\n  font-size: 2.5em;\r\n  color: #30a83f;\r\n  padding-right: 4px; \r\n}\r\n#whatsapp span {\r\n  padding-top: 10px !important;\r\n}\r\n\r\n  \r\n@media (max-width: 767px) {\r\n #whatsapp {\r\n    bottom: 15px !important;\r\n }\r\n}\r\n\r\n@media (max-width: 420px) {\r\n #whatsapp {\r\n    right: 10px !important;\r\n }\r\n}\r\n\r\n#nprogress .bar {\r\n  background: #FFBB00 !important;\r\n}\r\n\r\n#nprogress .peg {\r\n  box-shadow: 0 0 10px #FFBB00, 0 0 5px #FFBB00;\r\n}\r\n\r\n#nprogress .spinner-icon {\r\n  border-top-color: #FFBB00;\r\n  border-left-color: #FFBB00;\r\n}\r\n\r\n\r\n.elementskit-info-box-icon{\r\n  min-height: 350px;\r\n  /* padding-top: 10%; */\r\n  border: none !important;\r\n  padding: 50px;\r\n  color: black !important;\r\n}\r\n.elementskit-info-box-icon h2{\r\n  font-weight: 700; \r\n}\r\n\r\n.elementskit-info-box-icon .icons img{\r\n  border-radius: 50%;\r\n    background-color: #f2f9ff;\r\n    color: #5778f2;\r\n    width: 160px;\r\n    height: 160px;\r\n    line-height: 168px;\r\n    margin: 0px auto 0px;\r\n} \r\n.active-box{\r\n  background-color: #5d70d6 !important;\r\n  color: white !important; \r\n}\r\n.active-box  p{  \r\n    color: #f2f9ff !important; \r\n}\r\n.ekit-wid-con .elementskit-border-divider {\r\nwidth: 77px !important;\r\n}", ""]);
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

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.7.0
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-05-11T18:29Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket trac-14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var version = "3.7.0",

	rhtmlSuffix = /HTML$/i,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},


	// Retrieve the text value of an array of DOM nodes
	text: function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {

			// If no nodeType, this is expected to be an array
			while ( ( node = elem[ i++ ] ) ) {

				// Do not traverse comment nodes
				ret += jQuery.text( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			return elem.textContent;
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}

		// Do not include comment or processing instruction nodes

		return ret;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	isXMLDoc: function( elem ) {
		var namespace = elem && elem.namespaceURI,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Assume HTML when documentElement doesn't yet exist, such as inside
		// document fragments.
		return !rhtmlSuffix.test( namespace || docElem && docElem.nodeName || "HTML" );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}


function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var pop = arr.pop;


var sort = arr.sort;


var splice = arr.splice;


var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
	"g"
);




// Note: an element does not contain itself
jQuery.contains = function( a, b ) {
	var bup = b && b.parentNode;

	return a === bup || !!( bup && bup.nodeType === 1 && (

		// Support: IE 9 - 11+
		// IE doesn't have `contains` on SVG.
		a.contains ?
			a.contains( bup ) :
			a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
	) );
};




// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

function fcssescape( ch, asCodePoint ) {
	if ( asCodePoint ) {

		// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
		if ( ch === "\0" ) {
			return "\uFFFD";
		}

		// Control characters and (dependent upon position) numbers get escaped as code points
		return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
	}

	// Other potentially-special ASCII characters get backslash-escaped
	return "\\" + ch;
}

jQuery.escapeSelector = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};




var preferredDoc = document,
	pushNative = push;

( function() {

var i,
	Expr,
	outermostContext,
	sortInput,
	hasDuplicate,
	push = pushNative,

	// Local document vars
	document,
	documentElement,
	documentIsHTML,
	rbuggyQSA,
	matches,

	// Instance-specific data
	expando = jQuery.expando,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" +
		"loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rleadingCombinator = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" +
		whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		ID: new RegExp( "^#(" + identifier + ")" ),
		CLASS: new RegExp( "^\\.(" + identifier + ")" ),
		TAG: new RegExp( "^(" + identifier + "|[*])" ),
		ATTR: new RegExp( "^" + attributes ),
		PSEUDO: new RegExp( "^" + pseudos ),
		CHILD: new RegExp(
			"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
				whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
				whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		bool: new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		needsContext: new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		if ( nonHex ) {

			// Strip the backslash prefix from a non-hex escape sequence
			return nonHex;
		}

		// Replace a hexadecimal escape sequence with the encoded Unicode code point
		// Support: IE <=11+
		// For values outside the Basic Multilingual Plane (BMP), manually construct a
		// surrogate pair
		return high < 0 ?
			String.fromCharCode( high + 0x10000 ) :
			String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes; see `setDocument`.
	// Support: IE 9 - 11+, Edge 12 - 18+
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE/Edge.
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && nodeName( elem, "fieldset" );
		},
		{ dir: "parentNode", next: "legend" }
	);

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android <=4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = {
		apply: function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		},
		call: function( target ) {
			pushNative.apply( target, slice.call( arguments, 1 ) );
		}
	};
}

function find( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE 9 only
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								push.call( results, elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE 9 only
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							find.contains( context, elem ) &&
							elem.id === m ) {

							push.call( results, elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && context.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( !nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rleadingCombinator.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when
					// strict-comparing two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( newContext != context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = jQuery.escapeSelector( nid );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrimCSS, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties
		// (see https://github.com/jquery/sizzle/issues/157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		return nodeName( elem, "input" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		return ( nodeName( elem, "input" ) || nodeName( elem, "button" ) ) &&
			elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11+
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
function setDocument( node ) {
	var subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	documentElement = document.documentElement;
	documentIsHTML = !jQuery.isXMLDoc( document );

	// Support: iOS 7 only, IE 9 - 11+
	// Older browsers didn't support unprefixed `matches`.
	matches = documentElement.matches ||
		documentElement.webkitMatchesSelector ||
		documentElement.msMatchesSelector;

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (see trac-13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 9 - 11+, Edge 12 - 18+
		subWindow.addEventListener( "unload", unloadHandler );
	}

	// Support: IE <10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		documentElement.appendChild( el ).id = jQuery.expando;
		return !document.getElementsByName ||
			!document.getElementsByName( jQuery.expando ).length;
	} );

	// Support: IE 9 only
	// Check to see if it's possible to do matchesSelector
	// on a disconnected node.
	support.disconnectedMatch = assert( function( el ) {
		return matches.call( el, "*" );
	} );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// IE/Edge don't support the :scope pseudo-class.
	support.scope = assert( function() {
		return document.querySelectorAll( ":scope" );
	} );

	// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
	// Make sure the `:has()` argument is parsed unforgivingly.
	// We include `*` in the test to detect buggy implementations that are
	// _selectively_ forgiving (specifically when the list includes at least
	// one valid selector).
	// Note that we treat complete lack of support for `:has()` as if it were
	// spec-compliant support, which is fine because use of `:has()` in such
	// environments will fail in the qSA path and fall back to jQuery traversal
	// anyway.
	support.cssHas = assert( function() {
		try {
			document.querySelector( ":has(*,:jqfake)" );
			return false;
		} catch ( e ) {
			return true;
		}
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter.ID = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter.ID =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find.TAG = function( tag, context ) {
		if ( typeof context.getElementsByTagName !== "undefined" ) {
			return context.getElementsByTagName( tag );

		// DocumentFragment nodes don't have gEBTN
		} else {
			return context.querySelectorAll( tag );
		}
	};

	// Class
	Expr.find.CLASS = function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	rbuggyQSA = [];

	// Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert( function( el ) {

		var input;

		documentElement.appendChild( el ).innerHTML =
			"<a id='" + expando + "' href='' disabled='disabled'></a>" +
			"<select id='" + expando + "-\r\\' disabled='disabled'>" +
			"<option selected=''></option></select>";

		// Support: iOS <=7 - 8 only
		// Boolean attributes and "value" are not treated correctly in some XML documents
		if ( !el.querySelectorAll( "[selected]" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
		}

		// Support: iOS <=7 - 8 only
		if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
			rbuggyQSA.push( "~=" );
		}

		// Support: iOS 8 only
		// https://bugs.webkit.org/show_bug.cgi?id=136851
		// In-page `selector#id sibling-combinator selector` fails
		if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
			rbuggyQSA.push( ".#.+[+~]" );
		}

		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		if ( !el.querySelectorAll( ":checked" ).length ) {
			rbuggyQSA.push( ":checked" );
		}

		// Support: Windows 8 Native Apps
		// The type and name attributes are restricted during .innerHTML assignment
		input = document.createElement( "input" );
		input.setAttribute( "type", "hidden" );
		el.appendChild( input ).setAttribute( "name", "D" );

		// Support: IE 9 - 11+
		// IE's :disabled selector does not pick up the children of disabled fieldsets
		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		documentElement.appendChild( el ).disabled = true;
		if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
			rbuggyQSA.push( ":enabled", ":disabled" );
		}

		// Support: IE 11+, Edge 15 - 18+
		// IE 11/Edge don't find elements on a `[name='']` query in some cases.
		// Adding a temporary attribute to the document before the selection works
		// around the issue.
		// Interestingly, IE 10 & older don't seem to have the issue.
		input = document.createElement( "input" );
		input.setAttribute( "name", "" );
		el.appendChild( input );
		if ( !el.querySelectorAll( "[name='']" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
				whitespace + "*(?:''|\"\")" );
		}
	} );

	if ( !support.cssHas ) {

		// Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
		// Our regular `try-catch` mechanism fails to detect natively-unsupported
		// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
		// in browsers that parse the `:has()` argument as a forgiving selector list.
		// https://drafts.csswg.org/selectors/#relational now requires the argument
		// to be parsed unforgivingly, but browsers have not yet fully adjusted.
		rbuggyQSA.push( ":has" );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a === document || a.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b === document || b.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	};

	return document;
}

find.matches = function( expr, elements ) {
	return find( expr, null, null, elements );
};

find.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return find( expr, document, null, [ elem ] ).length > 0;
};

find.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return jQuery.contains( context, elem );
};


find.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (see trac-13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	if ( val !== undefined ) {
		return val;
	}

	return elem.getAttribute( name );
};

find.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
jQuery.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	//
	// Support: Android <=4.0+
	// Testing for detecting duplicates is unpredictable so instead assume we can't
	// depend on duplicate detection in all browsers without a stable sort.
	hasDuplicate = !support.sortStable;
	sortInput = !support.sortStable && slice.call( results, 0 );
	sort.call( results, sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			splice.call( results, duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

jQuery.fn.uniqueSort = function() {
	return this.pushStack( jQuery.uniqueSort( slice.apply( this ) ) );
};

Expr = jQuery.expr = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		ATTR: function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] || match[ 5 ] || "" )
				.replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		CHILD: function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					find.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" )
				);
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

			// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				find.error( match[ 0 ] );
			}

			return match;
		},

		PSEUDO: function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr.CHILD.test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		TAG: function( nodeNameSelector ) {
			var expectedNodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return nodeName( elem, expectedNodeName );
				};
		},

		CLASS: function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace + ")" + className +
					"(" + whitespace + "|$)" ) ) &&
				classCache( className, function( elem ) {
					return pattern.test(
						typeof elem.className === "string" && elem.className ||
							typeof elem.getAttribute !== "undefined" &&
								elem.getAttribute( "class" ) ||
							""
					);
				} );
		},

		ATTR: function( name, operator, check ) {
			return function( elem ) {
				var result = find.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				if ( operator === "=" ) {
					return result === check;
				}
				if ( operator === "!=" ) {
					return result !== check;
				}
				if ( operator === "^=" ) {
					return check && result.indexOf( check ) === 0;
				}
				if ( operator === "*=" ) {
					return check && result.indexOf( check ) > -1;
				}
				if ( operator === "$=" ) {
					return check && result.slice( -check.length ) === check;
				}
				if ( operator === "~=" ) {
					return ( " " + result.replace( rwhitespace, " " ) + " " )
						.indexOf( check ) > -1;
				}
				if ( operator === "|=" ) {
					return result === check || result.slice( 0, check.length + 1 ) === check + "-";
				}

				return false;
			};
		},

		CHILD: function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || ( parent[ expando ] = {} );
							cache = outerCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {
								outerCache = elem[ expando ] || ( elem[ expando ] = {} );
								cache = outerCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );
											outerCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		PSEUDO: function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// https://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					find.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as jQuery does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		not: markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrimCSS, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element
					// (see https://github.com/jquery/sizzle/issues/299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		has: markFunction( function( selector ) {
			return function( elem ) {
				return find( selector, elem ).length > 0;
			};
		} ),

		contains: markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || jQuery.text( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// https://www.w3.org/TR/selectors/#lang-pseudo
		lang: markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				find.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		target: function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		root: function( elem ) {
			return elem === documentElement;
		},

		focus: function( elem ) {
			return elem === safeActiveElement() &&
				document.hasFocus() &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		enabled: createDisabledPseudo( false ),
		disabled: createDisabledPseudo( true ),

		checked: function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			return ( nodeName( elem, "input" ) && !!elem.checked ) ||
				( nodeName( elem, "option" ) && !!elem.selected );
		},

		selected: function( elem ) {

			// Support: IE <=11+
			// Accessing the selectedIndex property
			// forces the browser to treat the default option as
			// selected when in an optgroup.
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		empty: function( elem ) {

			// https://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		parent: function( elem ) {
			return !Expr.pseudos.empty( elem );
		},

		// Element/input types
		header: function( elem ) {
			return rheader.test( elem.nodeName );
		},

		input: function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		button: function( elem ) {
			return nodeName( elem, "input" ) && elem.type === "button" ||
				nodeName( elem, "button" );
		},

		text: function( elem ) {
			var attr;
			return nodeName( elem, "input" ) && elem.type === "text" &&

				// Support: IE <10 only
				// New HTML5 attribute values (e.g., "search") appear
				// with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		first: createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		last: createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		eq: createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		even: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		odd: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		lt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i;

			if ( argument < 0 ) {
				i = argument + length;
			} else if ( argument > length ) {
				i = length;
			} else {
				i = argument;
			}

			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		gt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos.nth = Expr.pseudos.eq;

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rleadingCombinator.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrimCSS, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	if ( parseOnly ) {
		return soFar.length;
	}

	return soFar ?
		find.error( selector ) :

		// Cache the tokens
		tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						if ( skip && nodeName( elem, skip ) ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = outerCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							outerCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		find( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem, matcherOut,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed ||
				multipleContexts( selector || "*",
					context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems;

		if ( matcher ) {

			// If we have a postFinder, or filtered seed, or non-seed postFilter
			// or preexisting results,
			matcherOut = postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results;

			// Find primary matches
			matcher( matcherIn, matcherOut, context, xml );
		} else {
			matcherOut = matcherIn;
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf.call( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			var ret = ( !leadingRelative && ( xml || context != outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element
			// (see https://github.com/jquery/sizzle/issues/299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 )
							.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrimCSS, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find.TAG( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: iOS <=7 - 9 only
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
			// elements by id. (see trac-14142)
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							push.call( results, elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					jQuery.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

function compile( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
}

/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find.ID(
				token.matches[ 0 ].replace( runescape, funescape ),
				context
			) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr.needsContext.test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) &&
						testContext( context.parentNode ) || context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
}

// One-time assignments

// Support: Android <=4.0 - 4.1+
// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Initialize against the default document
setDocument();

// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

jQuery.find = find;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.unique = jQuery.uniqueSort;

// These have always been private, but they used to be documented
// as part of Sizzle so let's maintain them in the 3.x line
// for backwards compatibility purposes.
find.compile = compile;
find.select = select;
find.setDocument = setDocument;

find.escape = jQuery.escapeSelector;
find.getText = jQuery.text;
find.isXML = jQuery.isXMLDoc;
find.selectors = jQuery.expr;
find.support = jQuery.support;
find.uniqueSort = jQuery.uniqueSort;

	/* eslint-enable */

} )();


var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
	// Strict HTML recognition (trac-11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to jQuery#find
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.error );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the error, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getErrorHook ) {
									process.error = jQuery.Deferred.getErrorHook();

								// The deprecated alias of the above. While the name suggests
								// returning the stack, not an error instance, jQuery just passes
								// it directly to `console.warn` so both will work; an instance
								// just better cooperates with source maps.
								} else if ( jQuery.Deferred.getStackHook ) {
									process.error = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
jQuery.Deferred.exceptionHook = function( error, asyncError ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message,
			error.stack, asyncError );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See trac-6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see trac-8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (trac-14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (trac-11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (trac-13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (trac-13208)
				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", true );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, isSetup ) {

	// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
	if ( !isSetup ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				if ( !saved ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					this[ type ]();
					result = dataPriv.get( this, type );
					dataPriv.set( this, type, false );

					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						return result;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering
				// the native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved ) {

				// ...and capture the result
				dataPriv.set( this, type, jQuery.event.trigger(
					saved[ 0 ],
					saved.slice( 1 ),
					this
				) );

				// Abort handling of the native event by all jQuery handlers while allowing
				// native handlers on the same element to run. On target, this is achieved
				// by stopping immediate propagation just on the jQuery event. However,
				// the native event is re-wrapped by a jQuery one on each level of the
				// propagation so the only way to stop it for jQuery is to stop it for
				// everyone via native `stopPropagation()`. This is not a problem for
				// focus/blur which don't bubble, but it does also stop click on checkboxes
				// and radios. We accept this limitation.
				event.stopPropagation();
				event.isImmediatePropagationStopped = returnTrue;
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {

	function focusMappedHandler( nativeEvent ) {
		if ( document.documentMode ) {

			// Support: IE 11+
			// Attach a single focusin/focusout handler on the document while someone wants
			// focus/blur. This is because the former are synchronous in IE while the latter
			// are async. In other browsers, all those handlers are invoked synchronously.

			// `handle` from private data would already wrap the event, but we need
			// to change the `type` here.
			var handle = dataPriv.get( this, "handle" ),
				event = jQuery.event.fix( nativeEvent );
			event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
			event.isSimulated = true;

			// First, handle focusin/focusout
			handle( nativeEvent );

			// ...then, handle focus/blur
			//
			// focus/blur don't bubble while focusin/focusout do; simulate the former by only
			// invoking the handler at the lower level.
			if ( event.target === event.currentTarget ) {

				// The setup part calls `leverageNative`, which, in turn, calls
				// `jQuery.event.add`, so event handle will already have been set
				// by this point.
				handle( event );
			}
		} else {

			// For non-IE browsers, attach a single capturing handler on the document
			// while someone wants focusin/focusout.
			jQuery.event.simulate( delegateType, nativeEvent.target,
				jQuery.event.fix( nativeEvent ) );
		}
	}

	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			var attaches;

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, true );

			if ( document.documentMode ) {

				// Support: IE 9 - 11+
				// We use the same native handler for focusin & focus (and focusout & blur)
				// so we need to coordinate setup & teardown parts between those events.
				// Use `delegateType` as the key as `type` is already used by `leverageNative`.
				attaches = dataPriv.get( this, delegateType );
				if ( !attaches ) {
					this.addEventListener( delegateType, focusMappedHandler );
				}
				dataPriv.set( this, delegateType, ( attaches || 0 ) + 1 );
			} else {

				// Return false to allow normal processing in the caller
				return false;
			}
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		teardown: function() {
			var attaches;

			if ( document.documentMode ) {
				attaches = dataPriv.get( this, delegateType ) - 1;
				if ( !attaches ) {
					this.removeEventListener( delegateType, focusMappedHandler );
					dataPriv.remove( this, delegateType );
				} else {
					dataPriv.set( this, delegateType, attaches );
				}
			} else {

				// Return false to indicate standard teardown should be applied
				return false;
			}
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};

	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	//
	// Support: IE 9 - 11+
	// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
	// attach a single handler for both events in IE.
	jQuery.event.special[ delegateType ] = {
		setup: function() {

			// Handle: regular nodes (via `this.ownerDocument`), window
			// (via `this.document`) & document (via `this`).
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType );

			// Support: IE 9 - 11+
			// We use the same native handler for focusin & focus (and focusout & blur)
			// so we need to coordinate setup & teardown parts between those events.
			// Use `delegateType` as the key as `type` is already used by `leverageNative`.
			if ( !attaches ) {
				if ( document.documentMode ) {
					this.addEventListener( delegateType, focusMappedHandler );
				} else {
					doc.addEventListener( type, focusMappedHandler, true );
				}
			}
			dataPriv.set( dataHolder, delegateType, ( attaches || 0 ) + 1 );
		},
		teardown: function() {
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType ) - 1;

			if ( !attaches ) {
				if ( document.documentMode ) {
					this.removeEventListener( delegateType, focusMappedHandler );
				} else {
					doc.removeEventListener( type, focusMappedHandler, true );
				}
				dataPriv.remove( dataHolder, delegateType );
			} else {
				dataPriv.set( dataHolder, delegateType, attaches );
			}
		}
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew jQuery#find here for performance reasons:
			// https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {

		// Support: IE <=9 - 11+
		// IE only supports `"float"` in `getPropertyValue`; in computed styles
		// it's only available as `"cssFloat"`. We no longer modify properties
		// sent to `.css()` apart from camelCasing, so we need to check both.
		// Normally, this would create difference in behavior: if
		// `getPropertyValue` returns an empty string, the value returned
		// by `.css()` would be `undefined`. This is usually the case for
		// disconnected elements. However, in IE even disconnected elements
		// with no styles return `"none"` for `getPropertyValue( "float" )`
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( isCustomProp && ret ) {

			// Support: Firefox 105+, Chrome <=105+
			// Spec requires trimming whitespace for custom properties (gh-4926).
			// Firefox only trims leading whitespace. Chrome just collapses
			// both leading & trailing whitespace to a single space.
			//
			// Fall back to `undefined` if empty string returned.
			// This collapses a missing definition with property defined
			// and set to an empty string but there's no standard API
			// allowing us to differentiate them without a performance penalty
			// and returning `undefined` aligns with older jQuery.
			//
			// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || undefined;
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0,
		marginDelta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		// Count margin delta separately to only add it after scroll gutter adjustment.
		// This is needed to make negative margins work with `outerHeight( true )` (gh-3982).
		if ( box === "margin" ) {
			marginDelta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta + marginDelta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		animationIterationCount: true,
		aspectRatio: true,
		borderImageSlice: true,
		columnCount: true,
		flexGrow: true,
		flexShrink: true,
		fontWeight: true,
		gridArea: true,
		gridColumn: true,
		gridColumnEnd: true,
		gridColumnStart: true,
		gridRow: true,
		gridRowEnd: true,
		gridRowStart: true,
		lineHeight: true,
		opacity: true,
		order: true,
		orphans: true,
		scale: true,
		widows: true,
		zIndex: true,
		zoom: true,

		// SVG-related
		fillOpacity: true,
		floodOpacity: true,
		stopOpacity: true,
		strokeMiterlimit: true,
		strokeOpacity: true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TinyMCEEditor.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TinyMCEEditor.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyMCEEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TinyMCEEditor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TinyMCEEditor.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyMCEEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyMCEEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Resume/Resume.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Resume/Resume.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resume_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Resume.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Resume/Resume.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resume_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resume_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/TinyMCEEditor.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/TinyMCEEditor.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TinyMCEEditor_vue_vue_type_template_id_5d2b9261___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TinyMCEEditor.vue?vue&type=template&id=5d2b9261& */ "./resources/js/components/TinyMCEEditor.vue?vue&type=template&id=5d2b9261&");
/* harmony import */ var _TinyMCEEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TinyMCEEditor.vue?vue&type=script&lang=js& */ "./resources/js/components/TinyMCEEditor.vue?vue&type=script&lang=js&");
/* harmony import */ var _TinyMCEEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TinyMCEEditor.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/TinyMCEEditor.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TinyMCEEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TinyMCEEditor_vue_vue_type_template_id_5d2b9261___WEBPACK_IMPORTED_MODULE_0__.render,
  _TinyMCEEditor_vue_vue_type_template_id_5d2b9261___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TinyMCEEditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Resume/Resume.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Resume/Resume.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Resume_vue_vue_type_template_id_29e81e60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resume.vue?vue&type=template&id=29e81e60& */ "./resources/js/views/Resume/Resume.vue?vue&type=template&id=29e81e60&");
/* harmony import */ var _Resume_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resume.vue?vue&type=script&lang=js& */ "./resources/js/views/Resume/Resume.vue?vue&type=script&lang=js&");
/* harmony import */ var _Resume_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Resume.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Resume/Resume.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Resume_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Resume_vue_vue_type_template_id_29e81e60___WEBPACK_IMPORTED_MODULE_0__.render,
  _Resume_vue_vue_type_template_id_29e81e60___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Resume/Resume.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/TinyMCEEditor.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/TinyMCEEditor.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyMCEEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TinyMCEEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TinyMCEEditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyMCEEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Resume/Resume.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Resume/Resume.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resume_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Resume.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Resume/Resume.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resume_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TinyMCEEditor.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/TinyMCEEditor.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyMCEEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TinyMCEEditor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TinyMCEEditor.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/Resume/Resume.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/Resume/Resume.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resume_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Resume.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Resume/Resume.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/TinyMCEEditor.vue?vue&type=template&id=5d2b9261&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/TinyMCEEditor.vue?vue&type=template&id=5d2b9261& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyMCEEditor_vue_vue_type_template_id_5d2b9261___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyMCEEditor_vue_vue_type_template_id_5d2b9261___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyMCEEditor_vue_vue_type_template_id_5d2b9261___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TinyMCEEditor.vue?vue&type=template&id=5d2b9261& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TinyMCEEditor.vue?vue&type=template&id=5d2b9261&");


/***/ }),

/***/ "./resources/js/views/Resume/Resume.vue?vue&type=template&id=29e81e60&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Resume/Resume.vue?vue&type=template&id=29e81e60& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resume_vue_vue_type_template_id_29e81e60___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resume_vue_vue_type_template_id_29e81e60___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resume_vue_vue_type_template_id_29e81e60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Resume.vue?vue&type=template&id=29e81e60& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Resume/Resume.vue?vue&type=template&id=29e81e60&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TinyMCEEditor.vue?vue&type=template&id=5d2b9261&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TinyMCEEditor.vue?vue&type=template&id=5d2b9261& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("editor", {
        attrs: {
          init: !this.inlineEditor ? _vm.editorConfig : _vm.inlineConfig,
        },
        on: { input: _vm.handleEditorChange },
        model: {
          value: _vm.content,
          callback: function ($$v) {
            _vm.content = $$v
          },
          expression: "content",
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Resume/Resume.vue?vue&type=template&id=29e81e60&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Resume/Resume.vue?vue&type=template&id=29e81e60& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "bg-white", staticStyle: { position: "relative" } },
    [
      !_vm.isLoading
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
                _c("div", { staticClass: "hero-button mx-5" }, [
                  _c("div", { staticClass: "d-flex" }, [
                    _c("div", { staticClass: "col" }, [
                      _c("div", { attrs: { id: "file-upload" } }, [
                        _c("div", { staticClass: "upload" }, [
                          _c("a", [
                            _vm._m(1),
                            _vm._v(" "),
                            _c("div", { staticClass: "files" }, [
                              _c("input", {
                                attrs: {
                                  type: "file",
                                  id: "files",
                                  accept: "image/*",
                                },
                                on: {
                                  change: function ($event) {
                                    return _vm.filesChange(
                                      "file",
                                      $event.target.files,
                                      "#hero",
                                      "banner",
                                      "banner"
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm._m(2),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "container" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1",
                        attrs: {
                          "data-aos": "fade-up",
                          "data-aos-delay": "200",
                        },
                      },
                      [
                        _vm.company.data
                          ? _c("TinyMCEEditor", {
                              attrs: {
                                inlineEditor: _vm.inlineEditor,
                                modelValue: _vm.company.data.title,
                              },
                              on: {
                                input: function ($event) {
                                  return _vm.changeCompany("title")
                                },
                              },
                              model: {
                                value: _vm.company.data.title,
                                callback: function ($$v) {
                                  _vm.$set(_vm.company.data, "title", $$v)
                                },
                                expression: "company.data.title",
                              },
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _vm._m(3),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-lg-6 order-1 order-lg-2 hero-img cta_banner",
                        attrs: {
                          "data-aos": "zoom-in",
                          "data-aos-delay": "200",
                        },
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "hero-button mx-5 animated" },
                          [
                            _c("div", { staticClass: "d-flex" }, [
                              _c("div", { staticClass: "col" }, [
                                _c("div", { attrs: { id: "file-upload" } }, [
                                  _c("div", { staticClass: "upload" }, [
                                    _c("a", [
                                      _vm._m(4),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "files" }, [
                                        _c("input", {
                                          attrs: {
                                            type: "file",
                                            id: "files",
                                            accept: "image/*",
                                          },
                                          on: {
                                            change: function ($event) {
                                              return _vm.filesChange(
                                                "file",
                                                $event.target.files,
                                                ".cta_banner",
                                                "cta banner"
                                              )
                                            },
                                          },
                                        }),
                                      ]),
                                    ]),
                                  ]),
                                ]),
                              ]),
                              _vm._v(" "),
                              _vm._m(5),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
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
            _c("main", [
              _c(
                "section",
                { staticClass: "services", attrs: { id: "services" } },
                [
                  _c(
                    "div",
                    {
                      staticClass: "container",
                      attrs: { "data-aos": "fade-up" },
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "section-title" },
                        [
                          _vm.company.data
                            ? _c("TinyMCEEditor", {
                                attrs: {
                                  inlineEditor: _vm.inlineEditor,
                                  modelValue: _vm.company.data.service,
                                },
                                on: {
                                  input: function ($event) {
                                    return _vm.changeCompany("service")
                                  },
                                },
                                model: {
                                  value: _vm.company.data.service,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.company.data, "service", $$v)
                                  },
                                  expression: "company.data.service",
                                },
                              })
                            : _vm._e(),
                        ],
                        1
                      ),
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
                                    staticClass:
                                      "card elementskit-info-box-icon",
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
                                    _c(
                                      "div",
                                      { staticClass: "text-center pt-2" },
                                      [
                                        _c("h2", [_vm._v(_vm._s(v.title))]),
                                        _vm._v(" "),
                                        _c("p", [_vm._v(_vm._s(v.body))]),
                                      ]
                                    ),
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
                  {
                    staticClass: "container",
                    attrs: { "data-aos": "fade-up" },
                  },
                  [
                    _vm._m(6),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mb-2" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-md-6",
                          staticStyle: { "text-align": "left !important" },
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "section-title2" },
                            [
                              _vm.company.data
                                ? _c("TinyMCEEditor", {
                                    attrs: {
                                      inlineEditor: _vm.inlineEditor,
                                      modelValue: _vm.company.data.about,
                                    },
                                    on: {
                                      input: function ($event) {
                                        return _vm.changeCompany("about")
                                      },
                                    },
                                    model: {
                                      value: _vm.company.data.about,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.company.data, "about", $$v)
                                      },
                                      expression: "company.data.about",
                                    },
                                  })
                                : _vm._e(),
                            ],
                            1
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6 blog_baner" }, [
                        _c("div", { staticClass: "hero-button mx-5" }, [
                          _c("div", { staticClass: "d-flex" }, [
                            _c("div", { staticClass: "col" }, [
                              _c("div", { attrs: { id: "file-upload" } }, [
                                _c("div", { staticClass: "upload" }, [
                                  _c("a", [
                                    _vm._m(7),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "files" }, [
                                      _c("input", {
                                        attrs: {
                                          type: "file",
                                          id: "files",
                                          accept: "image/*",
                                        },
                                        on: {
                                          change: function ($event) {
                                            return _vm.filesChange(
                                              "file",
                                              $event.target.files,
                                              ".blog_baner",
                                              "blog baner"
                                            )
                                          },
                                        },
                                      }),
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]),
                            _vm._v(" "),
                            _vm._m(8),
                          ]),
                        ]),
                        _vm._v(" "),
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
              _c(
                "section",
                { staticClass: "benefit", attrs: { id: "benefit" } },
                [
                  _c("div", { staticClass: "container" }, [
                    _c(
                      "div",
                      {
                        staticClass: "section-title",
                        attrs: {
                          "data-aos": "fade-up",
                          "data-aos-delay": "200",
                        },
                      },
                      [
                        _vm.company.data
                          ? _c("TinyMCEEditor", {
                              attrs: {
                                inlineEditor: _vm.inlineEditor,
                                modelValue: _vm.company.data.benefit,
                              },
                              on: {
                                input: function ($event) {
                                  return _vm.changeCompany("benefit")
                                },
                              },
                              model: {
                                value: _vm.company.data.benefit,
                                callback: function ($$v) {
                                  _vm.$set(_vm.company.data, "benefit", $$v)
                                },
                                expression: "company.data.benefit",
                              },
                            })
                          : _vm._e(),
                      ],
                      1
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
                                      staticStyle: {
                                        "font-size": "50px !important",
                                      },
                                    }),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-9" }, [
                                _c("h2", [_vm._v(_vm._s(v.title))]),
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
                                      "\n                                        " +
                                        _vm._s(v.body) +
                                        "\n                                    "
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
                ]
              ),
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
                        attrs: {
                          "data-aos": "fade-up",
                          "data-aos-delay": "200",
                        },
                      },
                      [
                        _vm.company.data
                          ? _c("TinyMCEEditor", {
                              attrs: {
                                inlineEditor: _vm.inlineEditor,
                                modelValue: _vm.company.data.price_list,
                              },
                              on: {
                                input: function ($event) {
                                  return _vm.changeCompany("price_list")
                                },
                              },
                              model: {
                                value: _vm.company.data.price_list,
                                callback: function ($$v) {
                                  _vm.$set(_vm.company.data, "price_list", $$v)
                                },
                                expression: "company.data.price_list",
                              },
                            })
                          : _vm._e(),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mt-5 mb-5" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-md-3 pt-3 icon-box2",
                          attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "200",
                          },
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "card",
                              staticStyle: {
                                border: "0.5px groove #0000001c",
                                "box-shadow":
                                  "0px 0 30px rgba(1, 41, 112, 0.1)",
                              },
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "d-flex justify-content-end" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-outline-primary btn-sm mt-2 mx-2",
                                      on: {
                                        click: function ($event) {
                                          return _vm.add_link("link_1")
                                        },
                                      },
                                    },
                                    [_vm._v("add link")]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "card-body text-center pt-4" },
                                [
                                  _vm.company.data
                                    ? _c("TinyMCEEditor", {
                                        attrs: {
                                          height: 150,
                                          inlineEditor: _vm.inlineEditor,
                                          modelValue:
                                            _vm.company.data.title_harga_1,
                                        },
                                        on: {
                                          input: function ($event) {
                                            return _vm.changeCompany(
                                              "title_harga_1"
                                            )
                                          },
                                        },
                                        model: {
                                          value: _vm.company.data.title_harga_1,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.company.data,
                                              "title_harga_1",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "company.data.title_harga_1",
                                        },
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mt-2 mb-4 label-price" },
                                    [
                                      _vm.company.data
                                        ? _c("TinyMCEEditor", {
                                            attrs: {
                                              height: 150,
                                              inlineEditor: _vm.inlineEditor,
                                              modelValue:
                                                _vm.company.data.harga_1,
                                            },
                                            on: {
                                              input: function ($event) {
                                                return _vm.changeCompany(
                                                  "harga_1"
                                                )
                                              },
                                            },
                                            model: {
                                              value: _vm.company.data.harga_1,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.company.data,
                                                  "harga_1",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "company.data.harga_1",
                                            },
                                          })
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.company.data
                                    ? _c("TinyMCEEditor", {
                                        attrs: {
                                          height: 150,
                                          inlineEditor: _vm.inlineEditor,
                                          modelValue:
                                            _vm.company.data.body_harga_1,
                                        },
                                        on: {
                                          input: function ($event) {
                                            return _vm.changeCompany(
                                              "body_harga_1"
                                            )
                                          },
                                        },
                                        model: {
                                          value: _vm.company.data.body_harga_1,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.company.data,
                                              "body_harga_1",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "company.data.body_harga_1",
                                        },
                                      })
                                    : _vm._e(),
                                ],
                                1
                              ),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-md-3 pt-3 icon-box2",
                          attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "200",
                          },
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
                                "box-shadow":
                                  "0px 0 30px rgba(1, 41, 112, 0.1)",
                              },
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "d-flex justify-content-end" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-outline-primary btn-sm mt-2 mx-2",
                                      on: {
                                        click: function ($event) {
                                          return _vm.add_link("link_2")
                                        },
                                      },
                                    },
                                    [_vm._v("add link")]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "card-body text-center pt-4" },
                                [
                                  _vm.company.data
                                    ? _c("TinyMCEEditor", {
                                        attrs: {
                                          height: 150,
                                          inlineEditor: _vm.inlineEditor,
                                          modelValue:
                                            _vm.company.data.title_harga_2,
                                        },
                                        on: {
                                          input: function ($event) {
                                            return _vm.changeCompany(
                                              "title_harga_2"
                                            )
                                          },
                                        },
                                        model: {
                                          value: _vm.company.data.title_harga_2,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.company.data,
                                              "title_harga_2",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "company.data.title_harga_2",
                                        },
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "mt-2 mb-4 label-price-active",
                                    },
                                    [
                                      _vm.company.data
                                        ? _c("TinyMCEEditor", {
                                            attrs: {
                                              height: 150,
                                              inlineEditor: _vm.inlineEditor,
                                              modelValue:
                                                _vm.company.data.harga_2,
                                            },
                                            on: {
                                              input: function ($event) {
                                                return _vm.changeCompany(
                                                  "harga_2"
                                                )
                                              },
                                            },
                                            model: {
                                              value: _vm.company.data.harga_2,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.company.data,
                                                  "harga_2",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "company.data.harga_2",
                                            },
                                          })
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.company.data
                                    ? _c("TinyMCEEditor", {
                                        attrs: {
                                          height: 150,
                                          inlineEditor: _vm.inlineEditor,
                                          modelValue:
                                            _vm.company.data.body_harga_2,
                                        },
                                        on: {
                                          input: function ($event) {
                                            return _vm.changeCompany(
                                              "body_harga_2"
                                            )
                                          },
                                        },
                                        model: {
                                          value: _vm.company.data.body_harga_2,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.company.data,
                                              "body_harga_2",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "company.data.body_harga_2",
                                        },
                                      })
                                    : _vm._e(),
                                ],
                                1
                              ),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-md-3 pt-3 icon-box2",
                          attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "200",
                          },
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "card",
                              staticStyle: {
                                border: "0.5px groove #0000001c",
                                "box-shadow":
                                  "0px 0 30px rgba(1, 41, 112, 0.1)",
                              },
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "d-flex justify-content-end" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-outline-primary btn-sm mt-2 mx-2",
                                      on: {
                                        click: function ($event) {
                                          return _vm.add_link("link_3")
                                        },
                                      },
                                    },
                                    [_vm._v("add link")]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "card-body text-center pt-4" },
                                [
                                  _vm.company.data
                                    ? _c("TinyMCEEditor", {
                                        attrs: {
                                          height: 150,
                                          inlineEditor: _vm.inlineEditor,
                                          modelValue:
                                            _vm.company.data.title_harga_3,
                                        },
                                        on: {
                                          input: function ($event) {
                                            return _vm.changeCompany(
                                              "title_harga_3"
                                            )
                                          },
                                        },
                                        model: {
                                          value: _vm.company.data.title_harga_3,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.company.data,
                                              "title_harga_3",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "company.data.title_harga_3",
                                        },
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mt-2 mb-4 label-price" },
                                    [
                                      _vm.company.data
                                        ? _c("TinyMCEEditor", {
                                            attrs: {
                                              height: 150,
                                              inlineEditor: _vm.inlineEditor,
                                              modelValue:
                                                _vm.company.data.harga_3,
                                            },
                                            on: {
                                              input: function ($event) {
                                                return _vm.changeCompany(
                                                  "harga_3"
                                                )
                                              },
                                            },
                                            model: {
                                              value: _vm.company.data.harga_3,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.company.data,
                                                  "harga_3",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "company.data.harga_3",
                                            },
                                          })
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.company.data
                                    ? _c("TinyMCEEditor", {
                                        attrs: {
                                          height: 150,
                                          inlineEditor: _vm.inlineEditor,
                                          modelValue:
                                            _vm.company.data.body_harga_3,
                                        },
                                        on: {
                                          input: function ($event) {
                                            return _vm.changeCompany(
                                              "body_harga_3"
                                            )
                                          },
                                        },
                                        model: {
                                          value: _vm.company.data.body_harga_3,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.company.data,
                                              "body_harga_3",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "company.data.body_harga_3",
                                        },
                                      })
                                    : _vm._e(),
                                ],
                                1
                              ),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-md-3 pt-3 icon-box2",
                          attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "200",
                          },
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "card",
                              staticStyle: {
                                border: "0.5px groove #0000001c",
                                "box-shadow":
                                  "0px 0 30px rgba(1, 41, 112, 0.1)",
                              },
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "d-flex justify-content-end" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-outline-primary btn-sm",
                                      on: {
                                        click: function ($event) {
                                          return _vm.add_link("link_4")
                                        },
                                      },
                                    },
                                    [_vm._v("add link")]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "card-body text-center pt-4" },
                                [
                                  _vm.company.data
                                    ? _c("TinyMCEEditor", {
                                        attrs: {
                                          height: 150,
                                          inlineEditor: _vm.inlineEditor,
                                          modelValue:
                                            _vm.company.data.title_harga_4,
                                        },
                                        on: {
                                          input: function ($event) {
                                            return _vm.changeCompany(
                                              "title_harga_4"
                                            )
                                          },
                                        },
                                        model: {
                                          value: _vm.company.data.title_harga_4,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.company.data,
                                              "title_harga_4",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "company.data.title_harga_4",
                                        },
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mt-2 mb-4 label-price" },
                                    [
                                      _vm.company.data
                                        ? _c("TinyMCEEditor", {
                                            attrs: {
                                              height: 150,
                                              inlineEditor: _vm.inlineEditor,
                                              modelValue:
                                                _vm.company.data.harga_4,
                                            },
                                            on: {
                                              input: function ($event) {
                                                return _vm.changeCompany(
                                                  "harga_4"
                                                )
                                              },
                                            },
                                            model: {
                                              value: _vm.company.data.harga_4,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.company.data,
                                                  "harga_4",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "company.data.harga_4",
                                            },
                                          })
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.company.data
                                    ? _c("TinyMCEEditor", {
                                        attrs: {
                                          height: 150,
                                          inlineEditor: _vm.inlineEditor,
                                          modelValue:
                                            _vm.company.data.body_harga_4,
                                        },
                                        on: {
                                          input: function ($event) {
                                            return _vm.changeCompany(
                                              "body_harga_4"
                                            )
                                          },
                                        },
                                        model: {
                                          value: _vm.company.data.body_harga_4,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.company.data,
                                              "body_harga_4",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "company.data.body_harga_4",
                                        },
                                      })
                                    : _vm._e(),
                                ],
                                1
                              ),
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
                        attrs: {
                          "data-aos": "fade-up",
                          "data-aos-delay": "200",
                        },
                      },
                      [
                        _vm.company.data
                          ? _c("TinyMCEEditor", {
                              attrs: {
                                inlineEditor: _vm.inlineEditor,
                                modelValue: _vm.company.data.project,
                              },
                              on: {
                                input: function ($event) {
                                  return _vm.changeCompany("project")
                                },
                              },
                              model: {
                                value: _vm.company.data.project,
                                callback: function ($$v) {
                                  _vm.$set(_vm.company.data, "project", $$v)
                                },
                                expression: "company.data.project",
                              },
                            })
                          : _vm._e(),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-flex text-center" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-4",
                          attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "200",
                          },
                        },
                        [
                          _vm.company.data
                            ? _c("h1", { staticClass: "text-primary" }, [
                                _vm._v("+ "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.company.data.count_client,
                                      expression: "company.data.count_client",
                                    },
                                  ],
                                  attrs: { type: "text" },
                                  domProps: {
                                    value: _vm.company.data.count_client,
                                  },
                                  on: {
                                    input: [
                                      function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.company.data,
                                          "count_client",
                                          $event.target.value
                                        )
                                      },
                                      function ($event) {
                                        return _vm.changeCompany("count_client")
                                      },
                                    ],
                                  },
                                }),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("p", [_vm._v("WorlWide CLient")]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-4",
                          attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "200",
                          },
                        },
                        [
                          _vm.company.data
                            ? _c("h1", { staticClass: "text-primary" }, [
                                _vm._v("+ "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.company.data.count_client1,
                                      expression: "company.data.count_client1",
                                    },
                                  ],
                                  attrs: { type: "text" },
                                  domProps: {
                                    value: _vm.company.data.count_client1,
                                  },
                                  on: {
                                    input: [
                                      function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.company.data,
                                          "count_client1",
                                          $event.target.value
                                        )
                                      },
                                      function ($event) {
                                        return _vm.changeCompany(
                                          "count_client1"
                                        )
                                      },
                                    ],
                                  },
                                }),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("p", [_vm._v("Team Member")]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-4",
                          attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "200",
                          },
                        },
                        [
                          _vm.company.data
                            ? _c("h1", { staticClass: "text-primary" }, [
                                _vm._v("+ "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.company.data.count_client2,
                                      expression: "company.data.count_client2",
                                    },
                                  ],
                                  attrs: { type: "text" },
                                  domProps: {
                                    value: _vm.company.data.count_client2,
                                  },
                                  on: {
                                    input: [
                                      function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.company.data,
                                          "count_client2",
                                          $event.target.value
                                        )
                                      },
                                      function ($event) {
                                        return _vm.changeCompany(
                                          "count_client2"
                                        )
                                      },
                                    ],
                                  },
                                }),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("p", [_vm._v("Adversting Spend")]),
                        ]
                      ),
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
                  _c("div", { staticClass: "hero-button" }, [
                    _c("div", { staticClass: "hero-button mx-3" }, [
                      _c("div", { staticClass: "d-flex" }, [
                        _c("div", { staticClass: "col" }, [
                          _c("div", { attrs: { id: "file-upload" } }, [
                            _c("div", { staticClass: "upload" }, [
                              _c("a", [
                                _vm._m(9),
                                _vm._v(" "),
                                _c("div", { staticClass: "files" }, [
                                  _c("input", {
                                    attrs: {
                                      type: "file",
                                      id: "files",
                                      accept: "image/*",
                                    },
                                    on: {
                                      change: function ($event) {
                                        return _vm.filesChange(
                                          "file",
                                          $event.target.files,
                                          "#testimonials",
                                          "banner testimoni"
                                        )
                                      },
                                    },
                                  }),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _vm._m(10),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "container",
                      attrs: { "data-aos": "zoom-in" },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "testimonials-slider swiper",
                          attrs: {
                            "data-aos": "fade-up",
                            "data-aos-delay": "100",
                          },
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
                                  _c(
                                    "div",
                                    { staticClass: "testimonial-item" },
                                    [
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
                                          "\n                                " +
                                            _vm._s(v.body) +
                                            "\n                                "
                                        ),
                                        _c("i", {
                                          staticClass:
                                            "bx bxs-quote-alt-right quote-icon-right",
                                        }),
                                      ]),
                                    ]
                                  ),
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
              _c(
                "section",
                { staticClass: "clients", attrs: { id: "clients" } },
                [
                  _c(
                    "div",
                    {
                      staticClass: "container",
                      attrs: { "data-aos": "zoom-in" },
                    },
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
                ]
              ),
              _vm._v(" "),
              _vm._m(11),
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
                        ? _c("TinyMCEEditor", {
                            attrs: {
                              inlineEditor: _vm.inlineEditor,
                              modelValue: _vm.company.data.blog,
                            },
                            on: {
                              input: function ($event) {
                                return _vm.changeCompany("blog")
                              },
                            },
                            model: {
                              value: _vm.company.data.blog,
                              callback: function ($$v) {
                                _vm.$set(_vm.company.data, "blog", $$v)
                              },
                              expression: "company.data.blog",
                            },
                          })
                        : _vm._e(),
                    ],
                    1
                  ),
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
                                  staticClass:
                                    "content_blog-overlay fadeIn-bottom",
                                }),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass: "content_card-image",
                                  attrs: { src: v.image, alt: "" },
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "content_blog-details" },
                                  [
                                    _c(
                                      "h3",
                                      { staticClass: "content_card-title" },
                                      [_vm._v(_vm._s(v.title) + " ")]
                                    ),
                                    _vm._v(" "),
                                    _c("p", {
                                      domProps: { innerHTML: _vm._s(v.body) },
                                    }),
                                  ]
                                ),
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
                        [_vm._m(12)]
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
                            _c(
                              "div",
                              { staticClass: "section-title" },
                              [
                                _vm.company.data
                                  ? _c("TinyMCEEditor", {
                                      attrs: {
                                        inlineEditor: _vm.inlineEditor,
                                        modelValue: _vm.company.data.faq,
                                      },
                                      on: {
                                        input: function ($event) {
                                          return _vm.changeCompany("faq")
                                        },
                                      },
                                      model: {
                                        value: _vm.company.data.faq,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.company.data, "faq", $$v)
                                        },
                                        expression: "company.data.faq",
                                      },
                                    })
                                  : _vm._e(),
                              ],
                              1
                            ),
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
                                        class:
                                          v.id == 1 ? "collapse" : "collapsed",
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
                                            " \n                                        "
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
                                            "\n                                        " +
                                              _vm._s(v.body) +
                                              " \n                                        "
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
                              "col-lg-5 align-items-stretch order-1 order-lg-2 img faq_banner",
                            style: [_vm.styles, _vm.faq_banner],
                            attrs: {
                              "data-aos": "zoom-in",
                              "data-aos-delay": "150",
                            },
                          },
                          [
                            _vm._v(" \n                                "),
                            _c("div", { staticClass: "hero-button mx-5" }, [
                              _c("div", { staticClass: "d-flex" }, [
                                _c("div", { staticClass: "col" }, [
                                  _c("div", { attrs: { id: "file-upload" } }, [
                                    _c("div", { staticClass: "upload" }, [
                                      _c("a", [
                                        _vm._m(13),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "files" }, [
                                          _c("input", {
                                            attrs: {
                                              type: "file",
                                              id: "files",
                                              accept: "image/*",
                                            },
                                            on: {
                                              change: function ($event) {
                                                return _vm.filesChange(
                                                  "file",
                                                  $event.target.files,
                                                  ".faq_banner",
                                                  "faq banner"
                                                )
                                              },
                                            },
                                          }),
                                        ]),
                                      ]),
                                    ]),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _vm._m(14),
                              ]),
                            ]),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _vm._m(15),
            ]),
            _vm._v(" "),
            _c("footer", { attrs: { id: "footer-front" } }, [
              _c("div", { staticClass: "footer-top" }, [
                _c("div", { staticClass: "container" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-lg-3 col-md-6 footer-contact" },
                      [
                        _vm.contacts.data
                          ? _c("h3", [_vm._v(_vm._s(_vm.contacts.data.name))])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.contacts.data
                          ? _c("p", [
                              _vm._v(" " + _vm._s(_vm.contacts.data.alamat)),
                              _c("br"),
                              _c("br"),
                              _vm._v(" "),
                              _vm.contacts.data
                                ? _c("strong", [_vm._v("Phone:")])
                                : _vm._e(),
                              _vm._v(" " + _vm._s(_vm.contacts.data.wa)),
                              _c("br"),
                              _vm._v(" "),
                              _vm.contacts.data
                                ? _c("strong", [_vm._v("Email:")])
                                : _vm._e(),
                              _vm._v(" " + _vm._s(_vm.contacts.data.email)),
                              _c("br"),
                            ])
                          : _vm._e(),
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(16),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-lg-3 col-md-6 footer-links" },
                      [
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
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-lg-3 col-md-6 footer-links" },
                      [
                        _c("h4", [_vm._v("Our Social Networks")]),
                        _vm._v(" "),
                        _c("p", [_vm._v("cari kami di sosial media")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "social-links mt-3" }, [
                          _vm.contacts.data && _vm.contacts.data.linkedin
                            ? _c(
                                "a",
                                {
                                  staticClass: "linkedin",
                                  attrs: { href: _vm.contacts.data.linkedin },
                                },
                                [_c("i", { staticClass: "bx bxl-linkedin" })]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.contacts.data && _vm.contacts.data.fb
                            ? _c(
                                "a",
                                {
                                  staticClass: "facebook",
                                  attrs: { href: _vm.contacts.data.fb },
                                },
                                [_c("i", { staticClass: "bx bxl-facebook" })]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.contacts.data && _vm.contacts.data.instagram
                            ? _c(
                                "a",
                                {
                                  staticClass: "instagram",
                                  attrs: { href: _vm.contacts.data.instagram },
                                },
                                [_c("i", { staticClass: "bx bxl-instagram" })]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.contacts.data && _vm.contacts.data.tiktok
                            ? _c(
                                "a",
                                {
                                  staticClass: "twitter",
                                  attrs: { href: _vm.contacts.data.tiktok },
                                },
                                [_c("i", { staticClass: "bx bxl-tiktok" })]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.contacts.data && _vm.contacts.data.twitter
                            ? _c(
                                "a",
                                {
                                  staticClass: "twitter",
                                  attrs: { href: _vm.contacts.data.twitter },
                                },
                                [_c("i", { staticClass: "bx bxl-twitter" })]
                              )
                            : _vm._e(),
                        ]),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
    ]
  )
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
    return _c("span", { attrs: { title: "change picture" } }, [
      _c("i", { staticClass: "bi bi-camera-fill" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col icon d-none" }, [
      _c("span", {
        staticClass: "ri-refresh-line",
        attrs: { title: "set default picture" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-flex justify-content-center justify-content-lg-start" },
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
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "bi bi-camera-fill" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col icon d-none" }, [
      _c("span", {
        staticClass: "ri-refresh-line",
        attrs: { title: "set default picture" },
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
    return _c("span", [_c("i", { staticClass: "bi bi-camera-fill" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col icon d-none" }, [
      _c("span", { staticClass: "ri-refresh-line" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "bi bi-camera-fill" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col icon d-none" }, [
      _c("span", {
        staticClass: "ri-refresh-line",
        attrs: { title: "set default picture" },
      }),
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
    return _c("span", [_c("i", { staticClass: "bi bi-camera-fill" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col icon d-none" }, [
      _c("span", {
        staticClass: "ri-refresh-line",
        attrs: { title: "set default picture" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { attrs: { id: "whatsapp" } }, [
      _c("i", { staticClass: "bx bxl-whatsapp" }),
      _vm._v(" "),
      _c("span", [_vm._v("Whatsapp Kami")]),
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
          _c("a", { attrs: { href: "#hero" } }, [_vm._v("Home")]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("i", { staticClass: "bx bx-chevron-right" }),
          _vm._v(" "),
          _c("a", { attrs: { href: "#about" } }, [_vm._v("About us")]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("i", { staticClass: "bx bx-chevron-right" }),
          _vm._v(" "),
          _c("a", { attrs: { href: "#service" } }, [_vm._v("Services")]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("i", { staticClass: "bx bx-chevron-right" }),
          _vm._v(" "),
          _c("a", { attrs: { href: "#projects" } }, [_vm._v("Portofolio")]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("i", { staticClass: "bx bx-chevron-right" }),
          _vm._v(" "),
          _c("a", { attrs: { href: "#faq" } }, [_vm._v("Faq")]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);