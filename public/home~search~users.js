(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home~search~users"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Voice.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Voice.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/mixin */ "./resources/js/mixins/mixin.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = (Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["defineComponent"])({
  mixins: [_mixins_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    voice: {
      type: Object,
      required: true
    }
  },
  setup: function setup(prop, context) {
    var _this = this;

    var state = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["reactive"])({
      isLogin: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
        return context.root.$store.getters["auth/check"];
      })
    });

    var like = function like() {
      _this.$emit("like", {
        id: props.voice.id,
        liked: props.voice.liked_by_user,
        unliked: props.voice.unliked_by_user
      });
    };

    var unlike = function unlike() {
      _this.$emit("unlike", {
        id: props.voice.id,
        liked: props.voice.liked_by_user,
        unliked: props.voice.unliked_by_user
      });
    };

    return _objectSpread(_objectSpread({}, Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["toRefs"])(state)), {}, {
      like: like,
      unlike: unlike
    });
  }
}));

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Voice.vue?vue&type=style&index=0&id=d4cd1e52&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Voice.vue?vue&type=style&index=0&id=d4cd1e52&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a[data-v-d4cd1e52] {\n  color: #000;\n}\n.created_at-text[data-v-d4cd1e52] {\n  color: #424242;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Voice.vue?vue&type=style&index=0&id=d4cd1e52&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Voice.vue?vue&type=style&index=0&id=d4cd1e52&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Voice.vue?vue&type=style&index=0&id=d4cd1e52&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Voice.vue?vue&type=style&index=0&id=d4cd1e52&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Voice.vue?vue&type=template&id=d4cd1e52&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Voice.vue?vue&type=template&id=d4cd1e52&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-col",
    { attrs: { cols: "12", lg: "12", md: "12", xs: "12" } },
    [
      _c(
        "v-card",
        {
          staticClass: "mx-auto",
          attrs: {
            width: "340px",
            color: "#FFFFFF",
            height: "220px",
            outlined: "",
            ripple: false
          }
        },
        [
          _c(
            "v-list-item",
            { staticClass: "px-0 pb-0", attrs: { "three-line": "" } },
            [
              _c(
                "v-list-item-avatar",
                { attrs: { tile: "", size: "80", color: "grey" } },
                [
                  _c("v-img", {
                    attrs: { alt: "", src: _vm.voice.owner.img_url }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Router-link",
                {
                  attrs: {
                    to: { name: "voiceDetail", params: { id: _vm.voice.id } }
                  }
                },
                [
                  _c(
                    "v-list-item-content",
                    { staticClass: "pt-0 pb-4" },
                    [
                      _c(
                        "div",
                        { staticClass: "d-flex justify-space-between" },
                        [
                          _c("div", { staticClass: "pt-3" }, [
                            _c("span", { staticClass: "created_at-text" }, [
                              _vm._v(
                                _vm._s(_vm._f("moment")(_vm.voice.created_at))
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mr-2",
                                  attrs: { icon: "" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.test($event)
                                    }
                                  }
                                },
                                [
                                  _c("v-icon", { staticClass: "mx-3" }, [
                                    _vm._v("mdi-chevron-down")
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "black--text" }, [
                        _vm._v(_vm._s(_vm.voice.owner.name))
                      ]),
                      _vm._v(" "),
                      _c("v-list-item-title", [
                        _c("span", { staticClass: "title black--text" }, [
                          _vm._v(_vm._s(_vm.voice.title))
                        ])
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-list-item-content", { staticClass: "px-4 py-0" }, [
            _c("audio", {
              attrs: {
                src: _vm.voice.url,
                controls: "",
                controlslist: "nodownload"
              }
            })
          ]),
          _vm._v(" "),
          _vm.isLogin
            ? _c(
                "v-card-actions",
                [
                  _c(
                    "v-row",
                    {
                      staticClass: "px-10",
                      attrs: { justify: "space-between" }
                    },
                    [
                      this.voice.liked_by_user
                        ? [
                            _c(
                              "v-btn",
                              {
                                attrs: { icon: "", color: "#F26101" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.like($event)
                                  }
                                }
                              },
                              [
                                _c("v-icon", [_vm._v("mdi-thumb-up")]),
                                _vm._v(" "),
                                _c("span", { staticClass: "subheading ml-1" }, [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.voice.likes_count) +
                                      "\n                        "
                                  )
                                ])
                              ],
                              1
                            )
                          ]
                        : [
                            _c(
                              "v-btn",
                              {
                                attrs: { icon: "", color: "grey darken-3" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.like($event)
                                  }
                                }
                              },
                              [
                                _c("v-icon", [_vm._v("mdi-thumb-up-outline")]),
                                _vm._v(" "),
                                _c("span", { staticClass: "subheading ml-1" }, [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.voice.likes_count) +
                                      "\n                        "
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                      _vm._v(" "),
                      this.voice.unliked_by_user
                        ? [
                            _c(
                              "v-btn",
                              {
                                attrs: { icon: "", color: "#F26101" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.unlike($event)
                                  }
                                }
                              },
                              [
                                _c("v-icon", [_vm._v("mdi-thumb-down")]),
                                _vm._v(" "),
                                _c("span", { staticClass: "subheading ml-1" }, [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.voice.unlikes_count) +
                                      "\n                        "
                                  )
                                ])
                              ],
                              1
                            )
                          ]
                        : [
                            _c(
                              "v-btn",
                              {
                                attrs: { icon: "", color: "grey darken-3" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.unlike($event)
                                  }
                                }
                              },
                              [
                                _c("v-icon", [
                                  _vm._v("mdi-thumb-down-outline")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "subheading ml-1" }, [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.voice.unlikes_count) +
                                      "\n                        "
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { icon: "", color: "grey darken-3" } },
                        [
                          _c("v-icon", [_vm._v("mdi-comment-outline")]),
                          _vm._v(" "),
                          _c("span", { staticClass: "subheading ml-1" }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.voice.comments_count) +
                                "\n                    "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "", color: "grey darken-3" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.$emit("favorite-click")
                            }
                          }
                        },
                        [
                          _c("v-icon", [_vm._v("mdi-heart-outline")]),
                          _vm._v(" "),
                          _c("span", { staticClass: "subheading ml-1" }, [
                            _vm._v("0")
                          ])
                        ],
                        1
                      )
                    ],
                    2
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Voice.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Voice.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Voice_vue_vue_type_template_id_d4cd1e52_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Voice.vue?vue&type=template&id=d4cd1e52&scoped=true& */ "./resources/js/components/Voice.vue?vue&type=template&id=d4cd1e52&scoped=true&");
/* harmony import */ var _Voice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Voice.vue?vue&type=script&lang=js& */ "./resources/js/components/Voice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Voice_vue_vue_type_style_index_0_id_d4cd1e52_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Voice.vue?vue&type=style&index=0&id=d4cd1e52&lang=scss&scoped=true& */ "./resources/js/components/Voice.vue?vue&type=style&index=0&id=d4cd1e52&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Voice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Voice_vue_vue_type_template_id_d4cd1e52_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Voice_vue_vue_type_template_id_d4cd1e52_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d4cd1e52",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Voice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Voice.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Voice.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Voice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Voice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Voice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Voice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Voice.vue?vue&type=style&index=0&id=d4cd1e52&lang=scss&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Voice.vue?vue&type=style&index=0&id=d4cd1e52&lang=scss&scoped=true& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Voice_vue_vue_type_style_index_0_id_d4cd1e52_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Voice.vue?vue&type=style&index=0&id=d4cd1e52&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Voice.vue?vue&type=style&index=0&id=d4cd1e52&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Voice_vue_vue_type_style_index_0_id_d4cd1e52_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Voice_vue_vue_type_style_index_0_id_d4cd1e52_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Voice_vue_vue_type_style_index_0_id_d4cd1e52_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Voice_vue_vue_type_style_index_0_id_d4cd1e52_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Voice_vue_vue_type_style_index_0_id_d4cd1e52_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Voice.vue?vue&type=template&id=d4cd1e52&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Voice.vue?vue&type=template&id=d4cd1e52&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Voice_vue_vue_type_template_id_d4cd1e52_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Voice.vue?vue&type=template&id=d4cd1e52&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Voice.vue?vue&type=template&id=d4cd1e52&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Voice_vue_vue_type_template_id_d4cd1e52_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Voice_vue_vue_type_template_id_d4cd1e52_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);