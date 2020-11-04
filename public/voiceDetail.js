(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["voiceDetail"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/VoiceDetail.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/VoiceDetail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./resources/js/util.js");
/* harmony import */ var _mixins_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/mixin */ "./resources/js/mixins/mixin.js");
/* harmony import */ var _components_BottomNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BottomNavigation */ "./resources/js/components/BottomNavigation.vue");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_mixin__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {
    BottomNavigation: _components_BottomNavigation__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      voice: null,
      // ボイス取得用
      commentContent: "",
      // コメント投稿用
      commentErrors: null // エラー用

    };
  },
  computed: {
    isLogin: function isLogin() {
      return this.$store.getters["auth/check"];
    }
  },
  methods: {
    fetchVoice: function fetchVoice() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("/api/voices/".concat(_this.id));

              case 2:
                response = _context.sent;
                // if (response.status !== OK) {
                //     this.$store.commit("error/setCode", response.status);
                //     return false;
                // }
                _this.voice = response.data;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    addComment: function addComment() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.post("/api/voices/".concat(_this2.id, "/comments"), {
                  content: _this2.commentContent
                });

              case 2:
                response = _context2.sent;

                if (!(response.status === _util__WEBPACK_IMPORTED_MODULE_1__["UNPROCESSABLE_ENTITY"])) {
                  _context2.next = 6;
                  break;
                }

                _this2.commentErrors = response.data.errors;
                return _context2.abrupt("return", false);

              case 6:
                _this2.commentContent = "";
                _this2.commentErrors = null; // その他のエラー

                if (!(response.status !== _util__WEBPACK_IMPORTED_MODULE_1__["CREATED"])) {
                  _context2.next = 11;
                  break;
                }

                _this2.$store.commit("error/setCode", response.status);

                return _context2.abrupt("return", false);

              case 11:
                _this2.voice.comments = [response.data].concat(_toConsumableArray(_this2.voice.comments));

                _this2.fetchVoice();

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  watch: {
    $route: {
      handler: function handler() {
        var _this3 = this;

        return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _this3.fetchVoice();

                case 2:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }))();
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/VoiceDetail.vue?vue&type=style&index=0&id=06ad10ac&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/VoiceDetail.vue?vue&type=style&index=0&id=06ad10ac&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li[data-v-06ad10ac] {\n  list-style: none;\n}\n.ul[data-v-06ad10ac] {\n  padding-left: 0;\n}\n.wrapper-1[data-v-06ad10ac] {\n  background-color: #eee;\n  padding-top: 40px;\n  height: 100%;\n}\n.audio[data-v-06ad10ac] {\n  margin-left: 20px;\n}\n.errors[data-v-06ad10ac] {\n  color: red;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/VoiceDetail.vue?vue&type=style&index=0&id=06ad10ac&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/VoiceDetail.vue?vue&type=style&index=0&id=06ad10ac&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./VoiceDetail.vue?vue&type=style&index=0&id=06ad10ac&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/VoiceDetail.vue?vue&type=style&index=0&id=06ad10ac&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/VoiceDetail.vue?vue&type=template&id=06ad10ac&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/VoiceDetail.vue?vue&type=template&id=06ad10ac&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "wrapper-1" },
    [
      _c(
        "v-card",
        {
          staticClass: "mx-auto",
          attrs: {
            to: "/voices/" + _vm.voice.id,
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
            { staticClass: "px-4", attrs: { "three-line": "" } },
            [
              _c(
                "v-list-item-avatar",
                { attrs: { tile: "", size: "80", color: "grey" } },
                [
                  _c("v-img", {
                    staticClass: "elevation-6",
                    attrs: { alt: "", src: _vm.voice.owner.img_url }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item-content",
                [
                  _c("div", { staticClass: "mb-0" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm._f("moment")(_vm.voice.created_at)) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.voice.owner.name) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-list-item-title", { staticClass: "mb-1" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.voice.title) +
                        "\n                "
                    )
                  ])
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
          _c(
            "v-card-actions",
            [
              _c(
                "v-row",
                { staticClass: "px-10", attrs: { justify: "space-between" } },
                [
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
                        _vm._v(_vm._s(_vm.voice.likes_count))
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
                          return _vm.unlike($event)
                        }
                      }
                    },
                    [
                      _c("v-icon", [_vm._v("mdi-thumb-down-outline")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "subheading ml-1" }, [
                        _vm._v(_vm._s(_vm.voice.unlikes_count))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { attrs: { icon: "", color: "grey darken-3" } },
                    [
                      _c("v-icon", [_vm._v("mdi-comment-multiple-outline")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "subheading ml-1" }, [
                        _vm._v(_vm._s(_vm.voice.comments_count))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { attrs: { icon: "", color: "grey darken-3" } },
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
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "commet_container" },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "12" } },
                [
                  _vm.isLogin
                    ? _c(
                        "v-form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.addComment($event)
                            }
                          }
                        },
                        [
                          _vm.commentErrors
                            ? _c("div", { staticClass: "errors" }, [
                                _vm.commentErrors.content
                                  ? _c(
                                      "ul",
                                      _vm._l(
                                        _vm.commentErrors.content,
                                        function(msg) {
                                          return _c("li", { key: msg }, [
                                            _vm._v(
                                              "\n                                " +
                                                _vm._s(msg) +
                                                "\n                            "
                                            )
                                          ])
                                        }
                                      ),
                                      0
                                    )
                                  : _vm._e()
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("v-textarea", {
                            attrs: {
                              "background-color": "grey lighten-2",
                              label: "コメントを入力",
                              rows: "3",
                              outlined: ""
                            },
                            model: {
                              value: _vm.commentContent,
                              callback: function($$v) {
                                _vm.commentContent = $$v
                              },
                              expression: "commentContent"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "text-center" },
                            [
                              _c(
                                "v-btn",
                                { attrs: { type: "submit", color: "#F26101" } },
                                [
                                  _c("span", { staticClass: "white--text" }, [
                                    _c("strong", [_vm._v("投稿する")])
                                  ])
                                ]
                              )
                            ],
                            1
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-row",
            [
              _c("v-col", { attrs: { cols: "12", sm: "12" } }, [
                _vm.voice.comments.length > 0
                  ? _c(
                      "ul",
                      { staticClass: "ul" },
                      _vm._l(_vm.voice.comments, function(comment) {
                        return _c(
                          "li",
                          { key: comment.content },
                          [
                            _c(
                              "v-card",
                              {
                                staticClass: "mx-auto mb-2",
                                attrs: {
                                  width: "340px",
                                  height: "100px",
                                  tile: ""
                                }
                              },
                              [
                                _c(
                                  "v-list-item-content",
                                  [
                                    _c("div", { staticClass: "mb-0" }, [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(
                                            _vm._f("moment")(comment.created_at)
                                          ) +
                                          "\n                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item-title",
                                      { staticClass: "mb-1" },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(comment.author.name) +
                                            "\n                                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(comment.content) +
                                          "\n                                "
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      }),
                      0
                    )
                  : _vm._e()
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("BottomNavigation")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/VoiceDetail.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/VoiceDetail.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VoiceDetail_vue_vue_type_template_id_06ad10ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VoiceDetail.vue?vue&type=template&id=06ad10ac&scoped=true& */ "./resources/js/pages/VoiceDetail.vue?vue&type=template&id=06ad10ac&scoped=true&");
/* harmony import */ var _VoiceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VoiceDetail.vue?vue&type=script&lang=js& */ "./resources/js/pages/VoiceDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VoiceDetail_vue_vue_type_style_index_0_id_06ad10ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VoiceDetail.vue?vue&type=style&index=0&id=06ad10ac&lang=scss&scoped=true& */ "./resources/js/pages/VoiceDetail.vue?vue&type=style&index=0&id=06ad10ac&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VoiceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VoiceDetail_vue_vue_type_template_id_06ad10ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VoiceDetail_vue_vue_type_template_id_06ad10ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "06ad10ac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/VoiceDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/VoiceDetail.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/VoiceDetail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VoiceDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/VoiceDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/VoiceDetail.vue?vue&type=style&index=0&id=06ad10ac&lang=scss&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/pages/VoiceDetail.vue?vue&type=style&index=0&id=06ad10ac&lang=scss&scoped=true& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceDetail_vue_vue_type_style_index_0_id_06ad10ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./VoiceDetail.vue?vue&type=style&index=0&id=06ad10ac&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/VoiceDetail.vue?vue&type=style&index=0&id=06ad10ac&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceDetail_vue_vue_type_style_index_0_id_06ad10ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceDetail_vue_vue_type_style_index_0_id_06ad10ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceDetail_vue_vue_type_style_index_0_id_06ad10ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceDetail_vue_vue_type_style_index_0_id_06ad10ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceDetail_vue_vue_type_style_index_0_id_06ad10ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/VoiceDetail.vue?vue&type=template&id=06ad10ac&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/VoiceDetail.vue?vue&type=template&id=06ad10ac&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceDetail_vue_vue_type_template_id_06ad10ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./VoiceDetail.vue?vue&type=template&id=06ad10ac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/VoiceDetail.vue?vue&type=template&id=06ad10ac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceDetail_vue_vue_type_template_id_06ad10ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceDetail_vue_vue_type_template_id_06ad10ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);