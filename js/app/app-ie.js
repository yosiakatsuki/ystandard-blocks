/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/js/app/app-ie.js ***!
  \******************************/
document.addEventListener('DOMContentLoaded', function () {
  parseResponsiveProperties();
});

/**
 * レスポンシブ用スタイル処理
 */
function parseResponsiveProperties() {
  var dataList = document.querySelectorAll('[data-responsive-clamp]');
  var data = Array.prototype.slice.call(dataList, 0);
  data.forEach(function (el) {
    var attr = el.getAttribute('data-responsive-clamp');
    var styles = JSON.parse(attr);
    if (styles) {
      for (var key in styles) {
        el.style[key] = styles[key];
      }
    }
  });
  var propertyList = document.querySelectorAll('[data-ys-responsive-property]');
  var property = Array.prototype.slice.call(propertyList, 0);
  property.forEach(function (el) {
    var attr = el.getAttribute('data-ys-responsive-property');
    var styles = JSON.parse(attr);
    if (styles) {
      for (var key in styles) {
        el.style[key] = styles[key];
      }
    }
  });
}
/******/ })()
;
//# sourceMappingURL=app-ie.js.map