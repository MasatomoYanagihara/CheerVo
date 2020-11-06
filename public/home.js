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
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = (Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["defineComponent"])({
  components: {
    Voice: _components_Voice_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BottomNavigation: _components_BottomNavigation__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  setup: function setup(prop, context) {
    var _this = this;

    var state = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["reactive"])({
      dialog: false,
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
      fileUploading: false,
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
      voice_veri: false,
      // 録音後の音声確認
      isLogin: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["computed"])(function () {
        return context.root.$store.state.voicePost;
      }),
      voicePostErrors: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["computed"])(function () {
        return context.root.$store.state.voicePost.voicePostErrorMessages;
      })
    }); // フォームでファイルが選択されたら実行される

    var onFileChange = function onFileChange(event) {
      return state.voice = event.target.files[0];
    };

    var reset = function reset() {
      state.title = "";
      state.voce = null;
    };

    var clearError = function clearError() {
      context.root.$store.commit("voicePost/setVoicePostErrorMessages", null);
    };

    var submit = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                formData = new FormData();
                formData.append("title", state.title);
                formData.append("voice", state.voice);
                state.dialog = false;
                state.fileUploading = true;
                state.voice_veri = false;
                _context.next = 8;
                return axios.post("/api/voices", formData);

              case 8:
                response = _context.sent;

                if (!(response.status === _util__WEBPACK_IMPORTED_MODULE_1__["UNPROCESSABLE_ENTITY"])) {
                  _context.next = 14;
                  break;
                }

                context.root.$store.commit("voicePost/setVoicePostErrorMessages", response.data.errors);
                state.dialog = true;
                state.fileUploading = false;
                return _context.abrupt("return", false);

              case 14:
                state.snackbar = true;
                state.fileUploading = false;
                reset();
                fetchVoices();

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function submit() {
        return _ref.apply(this, arguments);
      };
    }();

    var clickCloseButton = function clickCloseButton() {
      state.dialog = false;
      state.recording = false;
      state.voice_veri = false;
      clearError();
    };

    var fetchVoices = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
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

                context.root.$store.commit("error/setCode", response.status);
                return _context2.abrupt("return", false);

              case 6:
                state.voices = response.data.data;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function fetchVoices() {
        return _ref2.apply(this, arguments);
      };
    }();

    var rec_start = function rec_start() {
      state.recording = true;
      navigator.mediaDevices.getUserMedia({
        audio: true
      }).then(function (stream) {
        state.localstream = stream;
        staet.recorder = new MediaRecorder(stream);
        state.recorder.start();
      })["catch"](function (e) {
        console.log(e);
      });
    };

    var rec_stop = function rec_stop() {
      state.recorder.stop();

      state.recorder.ondataavailable = function (e) {
        state.audioData.push(e.data);
        var audioBlob = new Blob(state.audioData);
        state.voice = audioBlob;
        document.getElementById("player").src = URL.createObjectURL(e.data);
      };

      state.localstream.getTracks().forEach(function (track) {
        return track.stop();
      });
      state.recording = false;
      state.voice_veri = true;
    };

    var getExtension = function getExtension(audioType) {
      var extension = "wav";
      var matches = audioType.match(/audio\/([^;]+)/);

      if (matches) {
        extension = matches[1];
      }

      return "." + extension;
    };

    var onLikeClick = function onLikeClick(_ref3) {
      var id = _ref3.id,
          liked = _ref3.liked,
          unliked = _ref3.unliked;

      if (liked) {
        // Goodしている
        notlike(id);
      } else if (!liked && !unliked) {
        // Goodしてない かつ Badしてない
        like(id);
      } else if (!liked && unliked) {
        // Goodしてない かつ Badしている
        like(id);
        notUnlike(id);
      }
    };

    var onUnLikeClick = function onUnLikeClick(_ref4) {
      var id = _ref4.id,
          liked = _ref4.liked,
          unliked = _ref4.unliked;

      if (unliked) {
        // Badしている
        notUnlike(id);
      } else if (!unliked && !liked) {
        // Badしてない かつ Goodしてない
        unlike(id);
      } else if (!unliked && liked) {
        // Badしてない かつ Goodしている
        unlike(id);
        notlike(id);
      }
    };

    var onFavoriteClick = function onFavoriteClick() {
      state.snackbar2 = true;
    };

    var like = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
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

                context.root.$store.commit("error/setCode", response.status);
                return _context3.abrupt("return", false);

              case 6:
                state.voices = state.voices.map(function (voice) {
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
      }));

      return function like(_x) {
        return _ref5.apply(this, arguments);
      };
    }();

    var notlike = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id) {
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

                context.root.$store.commit("error/setCode", response.status);
                return _context4.abrupt("return", false);

              case 6:
                state.voices = state.voices.map(function (voice) {
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
      }));

      return function notlike(_x2) {
        return _ref6.apply(this, arguments);
      };
    }();

    var unlike = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id) {
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

                context.root.$store.commit("error/setCode", response.status);
                return _context5.abrupt("return", false);

              case 6:
                state.voices = state.voices.map(function (voice) {
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
      }));

      return function unlike(_x3) {
        return _ref7.apply(this, arguments);
      };
    }();

    var notUnlike = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(id) {
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

                context.root.$store.commit("error/setCode", response.status);
                return _context6.abrupt("return", false);

              case 6:
                state.voices = state.voices.map(function (voice) {
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
      }));

      return function notUnlike(_x4) {
        return _ref8.apply(this, arguments);
      };
    }();

    var infiniteHandler = function infiniteHandler($state) {
      axios.get("/api/voices", {
        params: {
          page: _this.page + 1,
          per_page: 1
        }
      }).then(function (_ref9) {
        var data = _ref9.data;
        setTimeout(function () {
          if (_this.page * 10 < data.total) {
            var _state$voices;

            _this.page += 1;

            (_state$voices = state.voices).push.apply(_state$voices, _toConsumableArray(data.data));

            console.log(data);
            $state.loaded();
          } else {
            $state.complete();
          }
        }, 1500);
      })["catch"](function (err) {
        $state.complete();
      });
    };

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["onMounted"])(function () {
      fetchVoices(), clearError();
    });
    return _objectSpread(_objectSpread({}, Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["toRefs"])(state)), {}, {
      onFileChange: onFileChange,
      reset: reset,
      clearError: clearError,
      submit: submit,
      clickCloseButton: clickCloseButton,
      fetchVoices: fetchVoices,
      rec_start: rec_start,
      rec_stop: rec_stop,
      getExtension: getExtension,
      onLikeClick: onLikeClick,
      onUnLikeClick: onUnLikeClick,
      onFavoriteClick: onFavoriteClick,
      notlike: notlike,
      unlike: unlike,
      notUnlike: notUnlike,
      infiniteHandler: infiniteHandler
    });
  }
}));

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
exports.push([module.i, ".wrapper-1[data-v-e7b90492] {\n  padding-top: 16px;\n  padding-bottom: 20px;\n  height: 100%;\n  background-color: #eee;\n}\n.plus-button[data-v-e7b90492] {\n  position: fixed;\n  bottom: 80px;\n  right: 20px;\n}\n.progress-circular[data-v-e7b90492] {\n  position: fixed;\n  bottom: 79px;\n  right: 19px;\n}\n.title-error-message[data-v-e7b90492] {\n  color: red;\n  list-style: none;\n  padding: 0;\n}\n.file-error-message[data-v-e7b90492] {\n  color: red;\n  list-style: none;\n  padding: 0;\n}\n.infinite-loading[data-v-e7b90492] {\n  margin: 0 auto;\n}", ""]);

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
                  _vm.isLogin && !_vm.fileUploading
                    ? _c(
                        "v-btn",
                        _vm._g(
                          _vm._b(
                            {
                              staticClass: "plus-button d-flex d-sm-none",
                              attrs: { color: "#F26101", fab: "", dark: "" }
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
                    : _vm._e(),
                  _vm._v(" "),
                  _c("v-progress-circular", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.fileUploading,
                        expression: "fileUploading"
                      }
                    ],
                    staticClass: "progress-circular",
                    attrs: {
                      indeterminate: "",
                      color: "#F26101",
                      size: "58",
                      width: "5"
                    }
                  })
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
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline mx-auto mt-4" }, [
                      _vm._v("ボイスを投稿する")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "4" } },
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
                                    { staticClass: "text-center" },
                                    [
                                      !_vm.recording
                                        ? _c(
                                            "v-btn",
                                            { on: { click: _vm.rec_start } },
                                            [
                                              _vm._v(
                                                "\n                                        録音開始\n                                    "
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.recording
                                        ? _c(
                                            "v-btn",
                                            { on: { click: _vm.rec_stop } },
                                            [
                                              _vm._v(
                                                "\n                                        録音停止\n                                    "
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.voice_veri
                                    ? _c("audio", {
                                        staticClass: "mt-5 pr-6",
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
        [_vm._v("\n        お気に入り機能は近日リリース予定です\n        ")]
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