(self["webpackChunktravel_site"] = self["webpackChunktravel_site"] || []).push([[582],{

/***/ 963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Modal = /*#__PURE__*/function () {
  function Modal() {
    _classCallCheck(this, Modal);

    this.injectHTML();
    this.modal = document.querySelector('.modal');
    this.closeIcon = document.querySelector('.modal__close');
    this.events();
  }

  _createClass(Modal, [{
    key: "events",
    value: function events() {
      var _this = this;

      // listen for close click
      this.closeIcon.addEventListener('click', function (e) {
        return _this.closeTheModal(e);
      }); // listen for and key press

      document.addEventListener('keyup', function (e) {
        return _this.keyPressHandler(e);
      });
    }
  }, {
    key: "openTheModal",
    value: function openTheModal() {
      this.modal.classList.add('modal--is-visible');
    }
  }, {
    key: "closeTheModal",
    value: function closeTheModal(e) {
      e.preventDefault();
      this.modal.classList.remove('modal--is-visible');
    }
  }, {
    key: "keyPressHandler",
    value: function keyPressHandler(e) {
      if (e.keyCode == 27) {
        this.closeTheModal(e);
      }
    }
  }, {
    key: "injectHTML",
    value: function injectHTML() {
      document.body.insertAdjacentHTML("beforeend", "\n        <div class=\"modal\">\n            <div class=\"modal__inner\">\n                <h2 class=\"section-title section-title--blue section-title--less-margin\"><img src=\"assets/images/icons/mail.svg\" class=\"section-title__icon\"> Get in <strong>Touch</strong></h2>\n                <div class=\"wrapper wrapper--narrow\">\n                    <p class=\"modal__description\">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>\n                </div>\n            \n                <div class=\"social-icons\">\n                    <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/facebook.svg\" alt=\"Facebook\"></a>\n                    <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/twitter.svg\" alt=\"Twitter\"></a>\n                    <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/instagram.svg\" alt=\"Instagram\"></a>\n                    <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/youtube.svg\" alt=\"YouTube\"></a>\n                </div>\n            </div>\n            <div class=\"modal__close\">X</div>\n        </div>\n        ");
    }
  }]);

  return Modal;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ })

}]);