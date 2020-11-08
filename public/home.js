(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/VoiceList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/VoiceList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./resources/js/util.js");
/* harmony import */ var _components_Voice_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Voice.vue */ "./resources/js/components/Voice.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Voice: _components_Voice_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BottomNavigation: _components_BottomNavigation__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      // ボイス投稿フォームダイアログ
      uploading: false,
      // アップロード中ローディング
      voice: null,
      // 投稿用
      voices: [],
      // 一覧表示用
      title: "",
      // タイトル投稿用
      snackbar: false,
      // スナックバー表示用（投稿が完了）
      timeout: 3000,
      // スナックバー表示時間（投稿が完了）
      snackbar2: false,
      // スナックバー表示用（お気に入り機能）
      timeout2: 3000,
      // スナックバー表示時間（お気に入り機能）
      page: 1,
      // 無限スクロール用
      status: "ready",
      // 状況（init:ページ読み込んだ時, ready:録音ができる状態, recording:録音中）
      recorder: null,
      // 音声にアクセスする "MediaRecorder" のインスタンス
      audioData: [],
      // 入力された音声データ
      audioExtension: "",
      // 音声ファイルの拡張子
      recording: null,
      // 録音中か判定する
      localstream: null,
      voice_veri: false // 録音後の音声確認

    };
  },
  computed: {
    isLogin: function isLogin() {
      return this.$store.getters["auth/check"];
    },
    voicePostErrors: function voicePostErrors() {
      return this.$store.state.voicePost.voicePostErrorMessages;
    }
  },
  methods: {
    // フォームでファイルが選択されたら実行される
    onFileChange: function onFileChange(event) {
      this.voice = event.target.files[0];
    },
    reset: function reset() {
      this.title = "";
      this.voice = null; // this.$el.querySelector('input[type="file"]').value = null; なぜかエラーでる
    },
    clearError: function clearError() {
      this.$store.commit("voicePost/setVoicePostErrorMessages", null);
    },
    submit: function submit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                formData = new FormData();
                formData.append("title", _this.title);
                formData.append("voice", _this.voice);
                _this.dialog = false;
                _this.uploading = true;
                _this.voice_veri = false;
                _context.next = 8;
                return axios.post("/api/voices", formData);

              case 8:
                response = _context.sent;

                if (!(response.status === _util__WEBPACK_IMPORTED_MODULE_1__["UNPROCESSABLE_ENTITY"])) {
                  _context.next = 14;
                  break;
                }

                _this.$store.commit("voicePost/setVoicePostErrorMessages", response.data.errors);

                _this.dialog = true;
                _this.uploading = false;
                return _context.abrupt("return", false);

              case 14:
                _this.reset();

                _this.snackbar = true;
                _this.uploading = false;

                _this.fetchVoices();

                _this.moveToTop();

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    clickCloseButton: function clickCloseButton() {
      this.dialog = false;
      this.recording = false;
      this.uploading = false;
      this.voice_veri = false;
      this.clearError();
    },
    fetchVoices: function fetchVoices() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("/api/voices");

              case 2:
                response = _context2.sent;

                if (!(response.status !== _util__WEBPACK_IMPORTED_MODULE_1__["OK"])) {
                  _context2.next = 6;
                  break;
                }

                _this2.$store.commit("error/setCode", response.status);

                return _context2.abrupt("return", false);

              case 6:
                _this2.voices = response.data.data;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    // 録音開始
    rec_start: function rec_start() {
      var self = this;
      this.recording = true;
      navigator.mediaDevices.getUserMedia({
        audio: true
      }).then(function (stream) {
        self.localstream = stream;
        self.recorder = new MediaRecorder(stream);
        self.recorder.start();
      })["catch"](function (e) {
        console.log(e);
      });
    },
    // 録音停止
    rec_stop: function rec_stop() {
      this.recorder.stop();
      var self = this;

      this.recorder.ondataavailable = function (e) {
        self.audioData.push(e.data);
        var audioBlob = new Blob(self.audioData);
        self.voice = audioBlob;
        document.getElementById("player").src = URL.createObjectURL(e.data);
      };

      this.localstream.getTracks().forEach(function (track) {
        return track.stop();
      });
      this.recording = false;
      this.voice_veri = true;
    },
    // 音声ファイルの拡張子取得メソッド
    getExtension: function getExtension(audioType) {
      var extension = "wav";
      var matches = audioType.match(/audio\/([^;]+)/);

      if (matches) {
        extension = matches[1];
      }

      return "." + extension;
    },
    // いいねクリックメソッド（子コンポーネントから$emit）
    onLikeClick: function onLikeClick(_ref) {
      var id = _ref.id,
          liked = _ref.liked,
          unliked = _ref.unliked;

      if (liked) {
        // Goodしている
        this.notlike(id);
      } else if (!liked && !unliked) {
        // Goodしてない かつ Badしてない
        this.like(id);
      } else if (!liked && unliked) {
        // Goodしてない かつ Badしている
        this.like(id);
        this.notUnlike(id);
      }
    },
    // unlikeクリックメソッド（子コンポーネントから$emit）
    onUnLikeClick: function onUnLikeClick(_ref2) {
      var id = _ref2.id,
          liked = _ref2.liked,
          unliked = _ref2.unliked;

      if (unliked) {
        // Badしている
        this.notUnlike(id);
      } else if (!unliked && !liked) {
        // Badしてない かつ Goodしてない
        this.unlike(id);
      } else if (!unliked && liked) {
        // Badしてない かつ Goodしている
        this.unlike(id);
        this.notlike(id);
      }
    },
    onFavoriteClick: function onFavoriteClick() {
      this.snackbar2 = true;
    },
    like: function like(id) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.put("/api/voices/".concat(id, "/like"));

              case 2:
                response = _context3.sent;

                if (!(response.status !== _util__WEBPACK_IMPORTED_MODULE_1__["OK"])) {
                  _context3.next = 6;
                  break;
                }

                _this3.$store.commit("error/setCode", response.status);

                return _context3.abrupt("return", false);

              case 6:
                _this3.voices = _this3.voices.map(function (voice) {
                  if (voice.id === response.data.voice_id) {
                    voice.likes_count += 1;
                    voice.liked_by_user = true;
                  }

                  return voice;
                });

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    notlike: function notlike(id) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios["delete"]("/api/voices/".concat(id, "/like"));

              case 2:
                response = _context4.sent;

                if (!(response.status !== _util__WEBPACK_IMPORTED_MODULE_1__["OK"])) {
                  _context4.next = 6;
                  break;
                }

                _this4.$store.commit("error/setCode", response.status);

                return _context4.abrupt("return", false);

              case 6:
                _this4.voices = _this4.voices.map(function (voice) {
                  if (voice.id === response.data.voice_id) {
                    voice.likes_count -= 1;
                    voice.liked_by_user = false;
                  }

                  return voice;
                });

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    unlike: function unlike(id) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios.put("/api/voices/".concat(id, "/unlike"));

              case 2:
                response = _context5.sent;

                if (!(response.status !== _util__WEBPACK_IMPORTED_MODULE_1__["OK"])) {
                  _context5.next = 6;
                  break;
                }

                _this5.$store.commit("error/setCode", response.status);

                return _context5.abrupt("return", false);

              case 6:
                _this5.voices = _this5.voices.map(function (voice) {
                  if (voice.id === response.data.voice_id) {
                    voice.unlikes_count += 1;
                    voice.unliked_by_user = true;
                  }

                  return voice;
                });

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    notUnlike: function notUnlike(id) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return axios["delete"]("/api/voices/".concat(id, "/notunlike"));

              case 2:
                response = _context6.sent;

                if (!(response.status !== _util__WEBPACK_IMPORTED_MODULE_1__["OK"])) {
                  _context6.next = 6;
                  break;
                }

                _this6.$store.commit("error/setCode", response.status);

                return _context6.abrupt("return", false);

              case 6:
                _this6.voices = _this6.voices.map(function (voice) {
                  if (voice.id === response.data.voice_id) {
                    voice.unlikes_count -= 1;
                    voice.unliked_by_user = false;
                  }

                  return voice;
                });

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    moveToTop: function moveToTop() {
      window.scrollTo({
        top: 0,
        behavior: "instant"
      });
    },
    infiniteHandler: function infiniteHandler($state) {
      var _this7 = this;

      axios.get("/api/voices", {
        params: {
          page: this.page + 1,
          per_page: 1
        }
      }).then(function (_ref3) {
        var data = _ref3.data;
        setTimeout(function () {
          if (_this7.page * 10 < data.total) {
            var _this7$voices;

            _this7.page += 1;

            (_this7$voices = _this7.voices).push.apply(_this7$voices, _toConsumableArray(data.data));

            console.log(data);
            $state.loaded();
          } else {
            $state.complete();
          }
        }, 1500);
      })["catch"](function (err) {
        $state.complete();
      });
    }
  },
  watch: {
    $route: {
      handler: function handler() {
        var _this8 = this;

        return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return _this8.fetchVoices();

                case 2:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }))();
      },
      immediate: true
    }
  },
  created: function created() {
    this.clearError();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/VoiceList.vue?vue&type=style&index=0&id=e7b90492&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/VoiceList.vue?vue&type=style&index=0&id=e7b90492&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "audio[data-v-e7b90492] {\n  height: 30px;\n}\n.wrapper-1[data-v-e7b90492] {\n  padding-top: 16px;\n  padding-bottom: 20px;\n  height: 100%;\n  background-color: #eee;\n}\n.plus-button[data-v-e7b90492] {\n  position: fixed;\n  bottom: 80px;\n  right: 20px;\n}\n.progress-circular[data-v-e7b90492] {\n  position: fixed;\n  bottom: 79px;\n  right: 19px;\n}\n.title-error-message[data-v-e7b90492] {\n  color: red;\n  list-style: none;\n  padding: 0;\n}\n.file-error-message[data-v-e7b90492] {\n  color: red;\n  list-style: none;\n  padding: 0;\n}\n.infinite-loading[data-v-e7b90492] {\n  margin: 0 auto;\n}\n.custom-loader[data-v-e7b90492] {\n  -webkit-animation: loader-data-v-e7b90492 1s infinite;\n          animation: loader-data-v-e7b90492 1s infinite;\n  display: flex;\n}\n@-webkit-keyframes loader-data-v-e7b90492 {\nfrom {\n    transform: rotate(0);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n@keyframes loader-data-v-e7b90492 {\nfrom {\n    transform: rotate(0);\n}\nto {\n    transform: rotate(360deg);\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/VoiceList.vue?vue&type=style&index=0&id=e7b90492&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/VoiceList.vue?vue&type=style&index=0&id=e7b90492&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./VoiceList.vue?vue&type=style&index=0&id=e7b90492&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/VoiceList.vue?vue&type=style&index=0&id=e7b90492&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/VoiceList.vue?vue&type=template&id=e7b90492&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/VoiceList.vue?vue&type=template&id=e7b90492&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
        "v-container",
        [
          _c(
            "v-row",
            [
              _vm._l(_vm.voices, function(voice) {
                return _c("Voice", {
                  key: voice.filename,
                  attrs: { voice: voice },
                  on: {
                    like: _vm.onLikeClick,
                    unlike: _vm.onUnLikeClick,
                    "favorite-click": _vm.onFavoriteClick
                  }
                })
              }),
              _vm._v(" "),
              _c(
                "infinite-loading",
                {
                  ref: "infiniteLoading",
                  staticClass: "infinite-loading",
                  attrs: { spinner: "spiral" },
                  on: { infinite: _vm.infiniteHandler }
                },
                [
                  _c("span", { attrs: { slot: "no-more" }, slot: "no-more" }),
                  _vm._v(" "),
                  _c("span", {
                    attrs: { slot: "no-results" },
                    slot: "no-results"
                  })
                ]
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600px" },
          scopedSlots: _vm._u([
            {
              key: "activator",
              fn: function(ref) {
                var on = ref.on
                var attrs = ref.attrs
                return [
                  _vm.isLogin
                    ? _c(
                        "v-btn",
                        _vm._g(
                          _vm._b(
                            {
                              staticClass: "plus-button d-flex d-sm-none",
                              attrs: {
                                color: "#F26101",
                                fab: "",
                                dark: "",
                                loading: _vm.uploading
                              }
                            },
                            "v-btn",
                            attrs,
                            false
                          ),
                          on
                        ),
                        [
                          _c("v-icon", { attrs: { dark: "" } }, [
                            _vm._v("mdi-plus")
                          ])
                        ],
                        1
                      )
                    : _vm._e()
                ]
              }
            }
          ]),
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _vm._v(" "),
          _c(
            "v-form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submit($event)
                }
              }
            },
            [
              _c(
                "v-card",
                { attrs: { color: "#FFFFFF" } },
                [
                  _c("v-card-title", { staticClass: "pb-0" }, [
                    _c("span", { staticClass: "headline mx-auto mt-4" }, [
                      _vm._v("ボイスを投稿する")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    { staticClass: "pb-0" },
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "pb-0",
                                  attrs: { cols: "12", sm: "6", md: "4" }
                                },
                                [
                                  _c("h4", [_vm._v("＊タイトルは12文字以内")]),
                                  _vm._v(" "),
                                  _vm.voicePostErrors
                                    ? _c("div", [
                                        _vm.voicePostErrors.title
                                          ? _c(
                                              "ul",
                                              {
                                                staticClass:
                                                  "title-error-message"
                                              },
                                              _vm._l(
                                                _vm.voicePostErrors.title,
                                                function(msg) {
                                                  return _c(
                                                    "li",
                                                    { key: msg },
                                                    [
                                                      _vm._v(
                                                        "\n                                            " +
                                                          _vm._s(msg) +
                                                          "\n                                        "
                                                      )
                                                    ]
                                                  )
                                                }
                                              ),
                                              0
                                            )
                                          : _vm._e()
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: { label: "タイトル", required: "" },
                                    model: {
                                      value: _vm.title,
                                      callback: function($$v) {
                                        _vm.title = $$v
                                      },
                                      expression: "title"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "4" } },
                                [
                                  _vm.voicePostErrors
                                    ? _c("div", [
                                        _vm.voicePostErrors.voice
                                          ? _c(
                                              "ul",
                                              {
                                                staticClass:
                                                  "file-error-message"
                                              },
                                              _vm._l(
                                                _vm.voicePostErrors.voice,
                                                function(msg) {
                                                  return _c(
                                                    "li",
                                                    { key: msg },
                                                    [
                                                      _vm._v(
                                                        "\n                                            " +
                                                          _vm._s(msg) +
                                                          "\n                                        "
                                                      )
                                                    ]
                                                  )
                                                }
                                              ),
                                              0
                                            )
                                          : _vm._e()
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "text-center mb-7" },
                                    [
                                      !_vm.recording
                                        ? _c(
                                            "v-btn",
                                            {
                                              staticStyle: {
                                                width: "60px",
                                                height: "60px"
                                              },
                                              attrs: {
                                                color: "grey darken-2",
                                                fab: "",
                                                outlined: ""
                                              },
                                              on: { click: _vm.rec_start }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  attrs: {
                                                    size: "58",
                                                    color: "red"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                            mdi-circle\n                                        "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      !_vm.recording
                                        ? _c("p", [_vm._v("録音する")])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.recording
                                        ? _c(
                                            "v-btn",
                                            {
                                              staticStyle: {
                                                width: "60px",
                                                height: "60px"
                                              },
                                              attrs: {
                                                color: "grey darken-2",
                                                fab: "",
                                                outlined: ""
                                              },
                                              on: { click: _vm.rec_stop }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  attrs: {
                                                    size: "38",
                                                    color: "red"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                            mdi-square-rounded\n                                        "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.recording
                                        ? _c(
                                            "p",
                                            {
                                              staticClass:
                                                "red--text font-weight-bold"
                                            },
                                            [_vm._v("録音中")]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.voice_veri && !_vm.recording
                                    ? _c("audio", {
                                        staticClass: "mt-0 pr-6",
                                        attrs: { id: "player", controls: "" }
                                      })
                                    : _vm._e()
                                ]
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
                    "v-card-actions",
                    { staticClass: "pt-0" },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "#F26101", rounded: "" },
                          on: { click: _vm.submit }
                        },
                        [
                          _c("span", { staticClass: "white--text" }, [
                            _c("strong", [_vm._v("投稿する")])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "px-4",
                          attrs: { rounded: "" },
                          on: { click: _vm.clickCloseButton }
                        },
                        [_vm._v("閉じる")]
                      )
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
        "v-snackbar",
        {
          attrs: { timeout: _vm.timeout, centered: "" },
          scopedSlots: _vm._u([
            {
              key: "action",
              fn: function(ref) {
                var attrs = ref.attrs
                return [
                  _c(
                    "v-btn",
                    _vm._b(
                      {
                        attrs: { color: "blue", text: "" },
                        on: {
                          click: function($event) {
                            _vm.snackbar = false
                          }
                        }
                      },
                      "v-btn",
                      attrs,
                      false
                    ),
                    [_vm._v("\n                閉じる\n            ")]
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [_vm._v("\n        投稿が完了しました\n        ")]
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { timeout: _vm.timeout2, centered: "" },
          scopedSlots: _vm._u([
            {
              key: "action",
              fn: function(ref) {
                var attrs = ref.attrs
                return [
                  _c(
                    "v-btn",
                    _vm._b(
                      {
                        attrs: { color: "blue", text: "" },
                        on: {
                          click: function($event) {
                            _vm.snackbar2 = false
                          }
                        }
                      },
                      "v-btn",
                      attrs,
                      false
                    ),
                    [_vm._v("\n                閉じる\n            ")]
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.snackbar2,
            callback: function($$v) {
              _vm.snackbar2 = $$v
            },
            expression: "snackbar2"
          }
        },
        [_vm._v("\n        お気に入り機能は未実装です\n        ")]
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

/***/ "./resources/js/pages/VoiceList.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/VoiceList.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VoiceList_vue_vue_type_template_id_e7b90492_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VoiceList.vue?vue&type=template&id=e7b90492&scoped=true& */ "./resources/js/pages/VoiceList.vue?vue&type=template&id=e7b90492&scoped=true&");
/* harmony import */ var _VoiceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VoiceList.vue?vue&type=script&lang=js& */ "./resources/js/pages/VoiceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VoiceList_vue_vue_type_style_index_0_id_e7b90492_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VoiceList.vue?vue&type=style&index=0&id=e7b90492&lang=scss&scoped=true& */ "./resources/js/pages/VoiceList.vue?vue&type=style&index=0&id=e7b90492&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VoiceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VoiceList_vue_vue_type_template_id_e7b90492_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VoiceList_vue_vue_type_template_id_e7b90492_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e7b90492",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/VoiceList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/VoiceList.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/VoiceList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VoiceList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/VoiceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/VoiceList.vue?vue&type=style&index=0&id=e7b90492&lang=scss&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/pages/VoiceList.vue?vue&type=style&index=0&id=e7b90492&lang=scss&scoped=true& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceList_vue_vue_type_style_index_0_id_e7b90492_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./VoiceList.vue?vue&type=style&index=0&id=e7b90492&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/VoiceList.vue?vue&type=style&index=0&id=e7b90492&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceList_vue_vue_type_style_index_0_id_e7b90492_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceList_vue_vue_type_style_index_0_id_e7b90492_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceList_vue_vue_type_style_index_0_id_e7b90492_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceList_vue_vue_type_style_index_0_id_e7b90492_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceList_vue_vue_type_style_index_0_id_e7b90492_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/VoiceList.vue?vue&type=template&id=e7b90492&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/VoiceList.vue?vue&type=template&id=e7b90492&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceList_vue_vue_type_template_id_e7b90492_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./VoiceList.vue?vue&type=template&id=e7b90492&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/VoiceList.vue?vue&type=template&id=e7b90492&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceList_vue_vue_type_template_id_e7b90492_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VoiceList_vue_vue_type_template_id_e7b90492_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);