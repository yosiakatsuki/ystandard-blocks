/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps}                                 props icon is the SVG component to render
 *                                                          size is a number specifiying the icon size in pixels
 *                                                          Other props will be passed to wrapped SVG component
 * @param {import('react').ForwardedRef<HTMLElement>} ref   The forwarded ref to the SVG element.
 *
 * @return {JSX.Element}  Icon component
 */
function Icon({
  icon,
  size = 24,
  ...props
}, ref) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props,
    ref
  });
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Icon));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/desktop.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/desktop.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const desktop = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (desktop);
//# sourceMappingURL=desktop.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/download.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/download.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const download = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (download);
//# sourceMappingURL=download.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/mobile.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/mobile.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const mobile = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (mobile);
//# sourceMappingURL=mobile.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/plus-circle.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/plus-circle.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const plusCircle = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (plusCircle);
//# sourceMappingURL=plus-circle.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/tablet.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/tablet.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const tablet = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tablet);
//# sourceMappingURL=tablet.js.map

/***/ }),

/***/ "./src/js/admin-menu/components/button/button.js":
/*!*******************************************************!*\
  !*** ./src/js/admin-menu/components/button/button.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancelButton: function() { return /* binding */ CancelButton; },
/* harmony export */   DeleteButton: function() { return /* binding */ DeleteButton; },
/* harmony export */   UpdateButton: function() { return /* binding */ UpdateButton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_button.scss */ "./src/js/admin-menu/components/button/_button.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




const UpdateButton = props => {
  const buttonClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()('ystdb-component-admin-menu-button', 'is-update', props.className);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: buttonClassName,
    ...props
  }, props.children);
};
const CancelButton = props => {
  const buttonClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()('ystdb-component-admin-menu-button', 'is-cancel', props.className);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: buttonClassName,
    ...props
  }, props.children);
};
const DeleteButton = props => {
  const buttonClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()('ystdb-component-admin-menu-button', 'is-delete', props.className);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: buttonClassName,
    ...props
  }, props.children);
};

/***/ }),

/***/ "./src/js/admin-menu/components/color-palette/color-palette.js":
/*!*********************************************************************!*\
  !*** ./src/js/admin-menu/components/color-palette/color-palette.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aktk_helper_admin_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aktk/helper/admin-menu */ "./src/js/helper/admin-menu.js");





const ColorPalette = props => {
  const editorColors = (0,_aktk_helper_admin_menu__WEBPACK_IMPORTED_MODULE_4__.getConfig)('editorColors');
  const {
    colors
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)('core/block-editor').getSettings();
  const paletteColor = editorColors !== null && editorColors !== void 0 ? editorColors : colors;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    colors: paletteColor,
    ...props
  });
};
/* harmony default export */ __webpack_exports__["default"] = (ColorPalette);

/***/ }),

/***/ "./src/js/admin-menu/components/manual-link/index.js":
/*!***********************************************************!*\
  !*** ./src/js/admin-menu/components/manual-link/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/book.js");
/* harmony import */ var _manual_link_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_manual-link.scss */ "./src/js/admin-menu/components/manual-link/_manual-link.scss");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




const ManualLink = props => {
  const {
    url,
    target,
    text,
    topRight
  } = props;
  const linkText = text || 'マニュアルを見る';
  const linkTarget = target || '_blank';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-component-manual-link', {
      'is-top-right': topRight
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: url,
    target: linkTarget
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ystdb-component-manual-link__icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_feather__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 12
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ystdb-component-manual-link__text"
  }, linkText)));
};
/* harmony default export */ __webpack_exports__["default"] = (ManualLink);

/***/ }),

/***/ "./src/js/admin-menu/components/message/index.js":
/*!*******************************************************!*\
  !*** ./src/js/admin-menu/components/message/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorMessage: function() { return /* binding */ ErrorMessage; },
/* harmony export */   HelpMessage: function() { return /* binding */ HelpMessage; },
/* harmony export */   WarningMessage: function() { return /* binding */ WarningMessage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _message_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_message.scss */ "./src/js/admin-menu/components/message/_message.scss");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



const Message = props => {
  const {
    children,
    type,
    isShow
  } = props;
  const className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-component-message', `is-${type}`, {
    'is-hide': false === isShow
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, children);
};
const HelpMessage = props => {
  const {
    children
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Message, {
    type: 'help',
    ...props
  }, children);
};
const ErrorMessage = props => {
  const {
    children
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Message, {
    type: 'error',
    ...props
  }, children);
};
const WarningMessage = props => {
  const {
    children
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Message, {
    type: 'warning',
    ...props
  }, children);
};

/***/ }),

/***/ "./src/js/admin-menu/components/notification/notification.js":
/*!*******************************************************************!*\
  !*** ./src/js/admin-menu/components/notification/notification.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationContainer: function() { return /* binding */ NotificationContainer; },
/* harmony export */   notifyError: function() { return /* binding */ notifyError; },
/* harmony export */   notifySuccess: function() { return /* binding */ notifySuccess; },
/* harmony export */   notifyWarning: function() { return /* binding */ notifyWarning; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ "./node_modules/react-toastify/dist/ReactToastify.min.css");



const NotificationContainer = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    ...props
  });
};
const notificationOption = {
  position: 'bottom-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
};
const notifySuccess = (message = undefined) => {
  const showMessage = message !== null && message !== void 0 ? message : '更新しました。';
  react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(showMessage, notificationOption);
};
const notifyWarning = (message = undefined) => {
  const showMessage = message !== null && message !== void 0 ? message : '問題が発生しました。';
  react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.warn(showMessage, notificationOption);
};
const notifyError = (message = undefined) => {
  const showMessage = message !== null && message !== void 0 ? message : '問題が発生しました。';
  react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(showMessage, notificationOption);
};

/***/ }),

/***/ "./src/js/admin-menu/components/preview/index.js":
/*!*******************************************************!*\
  !*** ./src/js/admin-menu/components/preview/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _preview_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_preview.scss */ "./src/js/admin-menu/components/preview/_preview.scss");


const Preview = ({
  children
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-component-preview"
  }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (Preview);

/***/ }),

/***/ "./src/js/admin-menu/inline-style/button-items.js":
/*!********************************************************!*\
  !*** ./src/js/admin-menu/inline-style/button-items.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/js/admin-menu/inline-style/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/download.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/plus-circle.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/desktop.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/tablet.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/mobile.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aktk_helper_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aktk/helper/config */ "./src/js/helper/config.js");
/* harmony import */ var _components_preview_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/preview/index */ "./src/js/admin-menu/components/preview/index.js");
/* harmony import */ var _components_color_palette_color_palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/color-palette/color-palette */ "./src/js/admin-menu/components/color-palette/color-palette.js");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/button/button */ "./src/js/admin-menu/components/button/button.js");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./function */ "./src/js/admin-menu/inline-style/function.js");
/* harmony import */ var _components_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/message */ "./src/js/admin-menu/components/message/index.js");
/* harmony import */ var _aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @aktk/helper/object */ "./src/js/helper/object.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/save.js");










const schema = {
  inlineStyle: {
    buttons: [{
      enable: true,
      style: {
        "font-size": "",
        "font-weight": "",
        color: "",
        "@markerColor": "#f2d9db",
        "@markerOpacity": 60,
        "@markerWeight": 30,
        background: "linear-gradient(transparent 75%, rgba(218,98,114, 0.3) 75%)"
      },
      tabletStyle: {},
      mobileStyle: {},
      customCss: "",
      lock: false
    }, {
      enable: true,
      style: {
        "font-size": "",
        "font-weight": "",
        color: "",
        "@markerColor": "#ceecfd",
        "@markerOpacity": 60,
        "@markerWeight": 30,
        background: "linear-gradient(transparent 75%, rgba(69,161,207, 0.3) 75%)"
      },
      tabletStyle: {},
      mobileStyle: {},
      customCss: "",
      lock: false
    }, {
      enable: true,
      style: {
        "font-size": "",
        "font-weight": "",
        color: "",
        "@markerColor": "#ffedcc",
        "@markerOpacity": 60,
        "@markerWeight": 30,
        background: "linear-gradient(transparent 75%, rgba(255,238,85, 0.3) 75%)"
      },
      tabletStyle: {},
      mobileStyle: {},
      customCss: "",
      lock: false
    }],
    items: {
      schema: {
        name: "",
        label: "",
        enable: true,
        style: {},
        tabletStyle: {},
        mobileStyle: {},
        customCss: "",
        lock: false
      },
      larger: {
        name: "larger",
        label: "\u5C11\u3057\u5927\u304D\u304F",
        enable: true,
        style: {
          "font-size": "1.2em"
        },
        tabletStyle: {},
        mobileStyle: {},
        customCss: "",
        lock: false
      },
      smaller: {
        name: "smaller",
        label: "\u5C11\u3057\u5C0F\u3055\u304F",
        enable: true,
        style: {
          "font-size": "0.8em"
        },
        tabletStyle: {},
        mobileStyle: {},
        customCss: "",
        lock: false
      },
      "larger-sp": {
        name: "larger-sp",
        label: "\u5C11\u3057\u5927\u304D\u304F(SP)",
        enable: true,
        style: {},
        tabletStyle: {},
        mobileStyle: {
          "font-size": "1.2em"
        },
        customCss: "",
        lock: false
      },
      "smaller-sp": {
        name: "smaller-sp",
        label: "\u5C11\u3057\u5C0F\u3055\u304F(SP)",
        enable: true,
        style: {},
        tabletStyle: {},
        mobileStyle: {
          "font-size": "0.8em"
        },
        customCss: "",
        lock: false
      },
      nowrap: {
        name: "nowrap",
        label: "\u6539\u884C\u3057\u306A\u3044",
        enable: true,
        style: {
          "white-space": "nowrap"
        },
        tabletStyle: {},
        mobileStyle: {},
        customCss: "",
        lock: false
      }
    }
  }
};



const ButtonItems = () => {
  const {
    items,
    setItems,
    selectedItem,
    setSelectedItem,
    isUpdating,
    updateOption
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useContext)(_index__WEBPACK_IMPORTED_MODULE_1__.InlineStyleContext);
  const fontUnit = (0,_aktk_helper_config__WEBPACK_IMPORTED_MODULE_4__.getComponentConfig)('fontUnit');
  const [isAddStyleModalOpen, setIsAddStyleModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [newStyleSlugErrorMessage, setNewStyleSlugErrorMessage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const [newStyleLabelErrorMessage, setNewStyleLabelErrorMessage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const [disableAddStyle, setDisableAddStyle] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [newStyleSlug, setNewStyleSlug] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const [newStyleLabel, setNewStyleLabel] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const openAddStyleModal = () => setIsAddStyleModalOpen(true);
  const closeAddStyleModal = () => setIsAddStyleModalOpen(false);
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);
  const isNothingItems = 0 >= (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__.object2Array)(items).length;
  const getItemList = () => {
    const _items = Object.entries({
      ...items
    }).map(value => {
      return {
        ...value[1],
        key: value[0]
      };
    });
    const newItemList = _items.map(value => {
      return {
        ...value,
        ...{
          value: value.key
        }
      };
    });
    return [...[{
      label: '-- 選択してください --',
      value: '',
      name: ''
    }], ...newItemList];
  };
  const searchItem = search => {
    if ('' === search) {
      return undefined;
    }
    return (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__.getProperty)(items, search);
  };
  const checkSlug = (text, allowEmpty = false) => {
    if (allowEmpty && !text) {
      setNewStyleSlugErrorMessage('');
      setDisableAddStyle(false);
      return true;
    }
    const match = text.match(/^[A-Za-z0-9\-]+$/);
    const hyphenLength = (text.match(/\-/g) || []).length;
    const deleteHyphen = text.replace(/\-/g, '');
    const check = match && hyphenLength <= 1 && deleteHyphen;
    let message = '';
    if (!check) {
      message = 'IDは英数字のみ、ハイフンは1つまでで入力してください。';
    }
    const search = text ? searchItem(text) : undefined;
    if (!!search) {
      message = 'すでに登録されているIDです。';
    }
    setNewStyleSlugErrorMessage(message);
    setDisableAddStyle(!check || !!search);
    return check && !search;
  };
  const getCurrentOption = (name, defaultValue = undefined) => {
    const currentOption = (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__.getProperty)(items, selectedItem);
    return (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__.getProperty)(currentOption, name, defaultValue);
  };
  const addInlineItem = (slug, label) => {
    const newValue = {
      ...items,
      [slug]: {
        ...schema.inlineStyle.items.schema,
        ...{
          name: slug,
          label
        }
      }
    };
    setItems(newValue);
  };
  const deleteItem = name => {
    const newValue = {
      ...items
    };
    delete newValue[name];
    setItems(newValue);
    return newValue;
  };
  const updateInlineItem = value => {
    const newValue = {
      ...items
    };
    if ((0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__.hasKey)(newValue, selectedItem)) {
      newValue[selectedItem] = {
        ...(0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__.getProperty)(items, selectedItem),
        ...value
      };
    }
    setItems(newValue);
  };
  const updateInlineItemStyle = (value, device = 'style') => {
    const currentStyle = (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__.getProperty)((0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__.getProperty)(items, selectedItem), device);
    updateInlineItem({
      [device]: {
        ...currentStyle,
        ...value
      }
    });
  };
  const importInitialItems = () => {
    const newValue = schema.inlineStyle.items;
    delete newValue.schema;
    setItems(newValue);
    updateOption({
      items: newValue
    }, '初期設定をインポートしました。');
  };
  const previewStyle = {
    ...getCurrentOption('style', {})
  };
  const previewClassName = `ystdb-inline--${selectedItem}`;
  const previewText = `インラインスタイル${selectedItem}`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-components-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-menu-component-columns is-reverse"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-menu-component-columns__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: 'スタイル選択'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, null, isNothingItems && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "\u30B9\u30BF\u30A4\u30EB\u8A2D\u5B9A\u304C\u3042\u308A\u307E\u305B\u3093\u3002"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "\u521D\u671F\u8A2D\u5B9A\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3059\u308B\u304B\u3001\u300C\u30B9\u30BF\u30A4\u30EB\u8FFD\u52A0\u300D\u304B\u3089\u30B9\u30BF\u30A4\u30EB\u3092\u8FFD\u52A0\u3057\u3066\u304F\u3060\u3055\u3044\u3002")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-menu-inline-items__header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, isNothingItems && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-menu-inline-items__no-items"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isPrimary: true,
    disabled: isUpdating,
    onClick: importInitialItems
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: 'ystdb-button-icon',
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"]
  }), ' ', "\u521D\u671F\u8A2D\u5B9A\u3092\u30A4\u30F3\u30DD\u30FC\u30C8")), !isNothingItems && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "\u30B9\u30BF\u30A4\u30EB",
    value: selectedItem,
    options: getItemList(),
    onChange: value => {
      setSelectedItem(value);
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isPrimary: true,
    disabled: !!selectedItem || isUpdating,
    onClick: openAddStyleModal
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: 'ystdb-button-icon',
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__["default"]
  }), ' ', "\u30B9\u30BF\u30A4\u30EB\u8FFD\u52A0"))))), selectedItem && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: '基本設定'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: 'button-name',
    label: 'ボタン名'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: `表示名 (ID:${getCurrentOption('name', '')})`,
    value: getCurrentOption('label', ''),
    onChange: value => {
      updateInlineItem({
        label: value
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: 'enable',
    label: 'ボタンの有効化'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: 'ボタンを有効にする',
    checked: getCurrentOption('enable', true),
    onChange: value => {
      updateInlineItem({
        enable: value
      });
    }
  }))), selectedItem && getCurrentOption('enable', true) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: '大きさ・スタイル'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: 'item-font-size',
    label: 'サイズ'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-component-responsive__container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-component-responsive__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__["default"]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
    value: (0,_function__WEBPACK_IMPORTED_MODULE_8__.getStyle)(getCurrentOption('style', {}), 'font-size'),
    onChange: value => {
      updateInlineItemStyle({
        'font-size': value
      });
    },
    units: fontUnit
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-component-responsive__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_15__["default"]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
    value: (0,_function__WEBPACK_IMPORTED_MODULE_8__.getStyle)(getCurrentOption('tabletStyle', {}), 'font-size'),
    onChange: value => {
      updateInlineItemStyle({
        'font-size': value
      }, 'tabletStyle');
    },
    units: fontUnit
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-component-responsive__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_16__["default"]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
    value: (0,_function__WEBPACK_IMPORTED_MODULE_8__.getStyle)(getCurrentOption('mobileStyle', {}), 'font-size'),
    onChange: value => {
      updateInlineItemStyle({
        'font-size': value
      }, 'mobileStyle');
    },
    units: fontUnit
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: 'font-weight',
    label: '太さ'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    value: (0,_function__WEBPACK_IMPORTED_MODULE_8__.getStyle)(getCurrentOption('style', {}), 'font-weight'),
    options: (0,_aktk_helper_config__WEBPACK_IMPORTED_MODULE_4__.getComponentConfig)('fontWeight'),
    onChange: value => {
      updateInlineItemStyle({
        'font-weight': value
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: 'font-style',
    label: 'スタイル'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    value: (0,_function__WEBPACK_IMPORTED_MODULE_8__.getStyle)(getCurrentOption('style', {}), 'font-style'),
    options: (0,_aktk_helper_config__WEBPACK_IMPORTED_MODULE_4__.getComponentConfig)('fontStyle'),
    onChange: value => {
      updateInlineItemStyle({
        'font-style': value
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: 'white-space',
    label: '改行しない'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: '改行しない',
    checked: 'nowrap' === (0,_function__WEBPACK_IMPORTED_MODULE_8__.getStyle)(getCurrentOption('style', {}), 'white-space'),
    onChange: value => {
      updateInlineItemStyle({
        'white-space': value ? 'nowrap' : undefined
      });
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: '色'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: 'font-color',
    label: '文字色'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_color_palette_color_palette__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: color => {
      updateInlineItemStyle({
        color
      });
    },
    value: (0,_function__WEBPACK_IMPORTED_MODULE_8__.getStyle)(getCurrentOption('style', {}), 'color')
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: '上級者向け設定',
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: 'font-family',
    label: 'フォント(font-family)'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    placeholder: 'sans-serif',
    value: (0,_function__WEBPACK_IMPORTED_MODULE_8__.getStyle)(getCurrentOption('style', {}), 'font-family'),
    onChange: value => updateInlineItemStyle({
      'font-family': value
    })
  })))), selectedItem && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-components-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_button_button__WEBPACK_IMPORTED_MODULE_7__.UpdateButton, {
    key: 'update',
    onClick: () => {
      updateOption({
        items
      });
    },
    disabled: isUpdating
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_feather__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: 'ystdb-button-icon',
    style: {
      fill: 'none'
    }
  }), ' ', "\u8A2D\u5B9A\u3092\u4FDD\u5B58"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-components-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_button_button__WEBPACK_IMPORTED_MODULE_7__.DeleteButton, {
    isSmall: true,
    onClick: () => {
      openDeleteModal();
    },
    disabled: isUpdating
  }, "\u8A2D\u5B9A\u3092\u524A\u9664")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-menu-component-columns__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_preview_index__WEBPACK_IMPORTED_MODULE_5__["default"], null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: previewClassName,
    style: previewStyle,
    contentEditable: "true"
  }, previewText))), isAddStyleModalOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    title: "\u30B9\u30BF\u30A4\u30EB\u306E\u8FFD\u52A0",
    onRequestClose: closeAddStyleModal,
    shouldCloseOnClickOutside: false,
    isDismissible: false,
    focusOnMount: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "ID (\u82F1\u6570\u5B57)",
    value: newStyleSlug,
    onChange: value => {
      checkSlug(value, true);
      setNewStyleSlug(value);
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_message__WEBPACK_IMPORTED_MODULE_9__.ErrorMessage, {
    isShow: !!newStyleSlugErrorMessage
  }, newStyleSlugErrorMessage), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "\u8868\u793A\u540D",
    value: newStyleLabel,
    onChange: value => {
      setNewStyleLabel(value);
      setNewStyleLabelErrorMessage('');
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_message__WEBPACK_IMPORTED_MODULE_9__.ErrorMessage, {
    isShow: !!newStyleLabelErrorMessage
  }, newStyleLabelErrorMessage)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-components-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-menu-component-columns"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-menu-component-columns__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_button_button__WEBPACK_IMPORTED_MODULE_7__.UpdateButton, {
    isPrimary: true,
    onClick: () => {
      const check = checkSlug(newStyleSlug);
      if (!newStyleLabel) {
        setNewStyleLabelErrorMessage('表示名を入力してください。');
      }
      if (!check || !newStyleLabel) {
        return;
      }
      addInlineItem(newStyleSlug, newStyleLabel);
      setNewStyleSlug('');
      setNewStyleLabel('');
      setNewStyleSlugErrorMessage('');
      setNewStyleLabelErrorMessage('');
      setSelectedItem(newStyleSlug);
      closeAddStyleModal();
    },
    disabled: disableAddStyle
  }, "\u8FFD\u52A0")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-menu-component-columns__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_button_button__WEBPACK_IMPORTED_MODULE_7__.CancelButton, {
    isSecondary: true,
    onClick: closeAddStyleModal
  }, "\u30AD\u30E3\u30F3\u30BB\u30EB"))))), isDeleteModalOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    title: "\u78BA\u8A8D",
    onRequestClose: closeDeleteModal,
    shouldCloseOnClickOutside: false,
    isDismissible: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, searchItem(selectedItem)?.label, ' ', "\u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-components-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-menu-component-columns"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-menu-component-columns__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_button_button__WEBPACK_IMPORTED_MODULE_7__.DeleteButton, {
    isPrimary: true,
    onClick: () => {
      updateOption({
        items: deleteItem(selectedItem)
      }, '設定を削除しました。');
      setSelectedItem('');
      closeDeleteModal();
    },
    disabled: isUpdating
  }, "\u524A\u9664")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-menu-component-columns__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_button_button__WEBPACK_IMPORTED_MODULE_7__.CancelButton, {
    isSecondary: true,
    onClick: closeDeleteModal
  }, "\u30AD\u30E3\u30F3\u30BB\u30EB"))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonItems);

/***/ }),

/***/ "./src/js/admin-menu/inline-style/function.js":
/*!****************************************************!*\
  !*** ./src/js/admin-menu/inline-style/function.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentMobileStyle: function() { return /* binding */ getCurrentMobileStyle; },
/* harmony export */   getCurrentStyle: function() { return /* binding */ getCurrentStyle; },
/* harmony export */   getCurrentTabletStyle: function() { return /* binding */ getCurrentTabletStyle; },
/* harmony export */   getMobileStyleUpdateValue: function() { return /* binding */ getMobileStyleUpdateValue; },
/* harmony export */   getStyle: function() { return /* binding */ getStyle; },
/* harmony export */   getStyleUpdateValue: function() { return /* binding */ getStyleUpdateValue; },
/* harmony export */   getTabletStyleUpdateValue: function() { return /* binding */ getTabletStyleUpdateValue; }
/* harmony export */ });
/* harmony import */ var _aktk_helper_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aktk/helper/object */ "./src/js/helper/object.js");

const getStyle = (styles, name, defaultStyle = undefined) => {
  return (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_0__.getProperty)(styles, name, defaultStyle);
};
const getCurrentStyle = (option, name) => {
  const current = (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_0__.getProperty)(option, name);
  return (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_0__.getProperty)(current, 'style');
};
const getCurrentTabletStyle = (option, name) => {
  const current = (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_0__.getProperty)(option, name);
  return (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_0__.getProperty)(current, 'tabletStyle');
};
const getCurrentMobileStyle = (option, name) => {
  const current = (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_0__.getProperty)(option, name);
  return (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_0__.getProperty)(current, 'mobileStyle');
};
const getStyleUpdateValue = (option, name, value, type = 'style') => {
  const current = (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_0__.getProperty)(option, name);
  return {
    ...option,
    ...{
      [name]: {
        ...current,
        ...{
          ...(0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_0__.getProperty)(current, type),
          [type]: value
        }
      }
    }
  };
};
const getTabletStyleUpdateValue = (option, name, value) => {
  return getStyleUpdateValue(option, name, value, 'tabletStyle');
};
const getMobileStyleUpdateValue = (option, name, value) => {
  return getStyleUpdateValue(option, name, value, 'mobileStyle');
};

/***/ }),

/***/ "./src/js/admin-menu/inline-style/index.js":
/*!*************************************************!*\
  !*** ./src/js/admin-menu/inline-style/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineStyleContext: function() { return /* binding */ InlineStyleContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inline_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_inline-style.scss */ "./src/js/admin-menu/inline-style/_inline-style.scss");
/* harmony import */ var _components_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/_index.scss */ "./src/js/admin-menu/components/_index.scss");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_notification_notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/notification/notification */ "./src/js/admin-menu/components/notification/notification.js");
/* harmony import */ var _toolbar_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toolbar-buttons */ "./src/js/admin-menu/inline-style/toolbar-buttons.js");
/* harmony import */ var _button_items__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./button-items */ "./src/js/admin-menu/inline-style/button-items.js");
/* harmony import */ var _aktk_helper_admin_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @aktk/helper/admin-menu */ "./src/js/helper/admin-menu.js");
/* harmony import */ var _aktk_components_notice_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @aktk/components/notice/index */ "./src/js/components/notice/index.js");
/* harmony import */ var _components_manual_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/manual-link */ "./src/js/admin-menu/components/manual-link/index.js");
/* harmony import */ var _aktk_helper_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @aktk/helper/config */ "./src/js/helper/config.js");







const schema = {
  inlineStyle: {
    buttons: [{
      enable: true,
      style: {
        "font-size": "",
        "font-weight": "",
        color: "",
        "@markerColor": "#f2d9db",
        "@markerOpacity": 60,
        "@markerWeight": 30,
        background: "linear-gradient(transparent 75%, rgba(218,98,114, 0.3) 75%)"
      },
      tabletStyle: {},
      mobileStyle: {},
      customCss: "",
      lock: false
    }, {
      enable: true,
      style: {
        "font-size": "",
        "font-weight": "",
        color: "",
        "@markerColor": "#ceecfd",
        "@markerOpacity": 60,
        "@markerWeight": 30,
        background: "linear-gradient(transparent 75%, rgba(69,161,207, 0.3) 75%)"
      },
      tabletStyle: {},
      mobileStyle: {},
      customCss: "",
      lock: false
    }, {
      enable: true,
      style: {
        "font-size": "",
        "font-weight": "",
        color: "",
        "@markerColor": "#ffedcc",
        "@markerOpacity": 60,
        "@markerWeight": 30,
        background: "linear-gradient(transparent 75%, rgba(255,238,85, 0.3) 75%)"
      },
      tabletStyle: {},
      mobileStyle: {},
      customCss: "",
      lock: false
    }],
    items: {
      schema: {
        name: "",
        label: "",
        enable: true,
        style: {},
        tabletStyle: {},
        mobileStyle: {},
        customCss: "",
        lock: false
      },
      larger: {
        name: "larger",
        label: "\u5C11\u3057\u5927\u304D\u304F",
        enable: true,
        style: {
          "font-size": "1.2em"
        },
        tabletStyle: {},
        mobileStyle: {},
        customCss: "",
        lock: false
      },
      smaller: {
        name: "smaller",
        label: "\u5C11\u3057\u5C0F\u3055\u304F",
        enable: true,
        style: {
          "font-size": "0.8em"
        },
        tabletStyle: {},
        mobileStyle: {},
        customCss: "",
        lock: false
      },
      "larger-sp": {
        name: "larger-sp",
        label: "\u5C11\u3057\u5927\u304D\u304F(SP)",
        enable: true,
        style: {},
        tabletStyle: {},
        mobileStyle: {
          "font-size": "1.2em"
        },
        customCss: "",
        lock: false
      },
      "smaller-sp": {
        name: "smaller-sp",
        label: "\u5C11\u3057\u5C0F\u3055\u304F(SP)",
        enable: true,
        style: {},
        tabletStyle: {},
        mobileStyle: {
          "font-size": "0.8em"
        },
        customCss: "",
        lock: false
      },
      nowrap: {
        name: "nowrap",
        label: "\u6539\u884C\u3057\u306A\u3044",
        enable: true,
        style: {
          "white-space": "nowrap"
        },
        tabletStyle: {},
        mobileStyle: {},
        customCss: "",
        lock: false
      }
    }
  }
};






const InlineStyleContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createContext)();
const InlineStyle = () => {
  const tabs = {
    toolbarButtons: {
      name: 'toolbar-buttons',
      title: 'マーカーボタン'
    },
    toolbarItems: {
      name: 'toolbar-items',
      title: 'その他スタイル'
    }
  };
  const options = (0,_aktk_helper_admin_menu__WEBPACK_IMPORTED_MODULE_9__.getOption)('inlineStyle', false, (0,_aktk_helper_config__WEBPACK_IMPORTED_MODULE_12__.getBlockEditorConfig)('inlineStyle', schema.inlineStyle));
  const needMigration = (0,_aktk_helper_admin_menu__WEBPACK_IMPORTED_MODULE_9__.getConfig)('needMigration', false);
  const migrationPage = (0,_aktk_helper_admin_menu__WEBPACK_IMPORTED_MODULE_9__.getConfig)('migrationPage', '#');
  const [buttons, setButtons] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(options.buttons);
  const [items, setItems] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(options.items);
  const [isUpdating, setIsUpdating] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [selectedItem, setSelectedItem] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [activeTabName, setActiveTabName] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('toolbar-buttons');
  const updateOption = (updateData = undefined, message = undefined) => {
    if (isUpdating) {
      return;
    }
    setIsUpdating(true);
    const data = {
      ...options,
      ...{
        buttons,
        items
      },
      ...updateData
    };
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
      path: (0,_aktk_helper_admin_menu__WEBPACK_IMPORTED_MODULE_9__.getEndpoint)('update'),
      method: 'POST',
      data
    }).then(response => {
      if ((0,_aktk_helper_admin_menu__WEBPACK_IMPORTED_MODULE_9__.isApiSuccess)(response.status)) {
        (0,_components_notification_notification__WEBPACK_IMPORTED_MODULE_6__.notifySuccess)(message);
      } else {
        /* eslint-disable no-console */
        console.error('設定の更新に失敗しました。');
        console.log(response);
        /* eslint-enable */
        (0,_components_notification_notification__WEBPACK_IMPORTED_MODULE_6__.notifyError)('設定の更新に失敗しました。');
      }
    }).catch(error => {
      /* eslint-disable no-console */
      console.error('エラーが発生しました。');
      console.log(error);
      /* eslint-enable */
      (0,_components_notification_notification__WEBPACK_IMPORTED_MODULE_6__.notifyError)('設定の更新に失敗しました。');
    });
    setTimeout(() => {
      setIsUpdating(false);
    }, 500);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-menu__wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_manual_link__WEBPACK_IMPORTED_MODULE_11__["default"], {
    url: 'https://wp-ystandard.com/manual/ystdb-inline-style/',
    topRight: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "ystdb-menu__content-title"
  }, "\u30A4\u30F3\u30E9\u30A4\u30F3\u30B9\u30BF\u30A4\u30EB"), needMigration && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_notice_index__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: "warning"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "\u65E7\u8A2D\u5B9A\u304C\u898B\u3064\u304B\u308A\u307E\u3057\u305F\u3002\u300C", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: migrationPage
  }, "v2 -> v3 \u8A2D\u5B9A\u79FB\u884C"), "\u300D\u753B\u9762\u304B\u3089\u8A2D\u5B9A\u3092\u79FB\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002")), needMigration ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Disabled, {
    className: 'ystdb-menu-inline-style__disable'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'ystdb-menu-inline-style__cover'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "\u65E7\u8A2D\u5B9A\u304B\u3089\u65B0\u8A2D\u5B9A\u3078\u8A2D\u5B9A\u3092\u79FB\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002")))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TabPanel, {
    className: "ystdb-menu-component__tab",
    tabs: [tabs.toolbarButtons, tabs.toolbarItems],
    onSelect: tabName => {
      setActiveTabName(tabName);
    },
    initialTabName: activeTabName
  }, tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-menu-inline-style__tab-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_notification_notification__WEBPACK_IMPORTED_MODULE_6__.NotificationContainer, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InlineStyleContext.Provider, {
    value: {
      options,
      buttons,
      setButtons,
      items,
      setItems,
      selectedItem,
      setSelectedItem,
      isUpdating,
      setIsUpdating,
      updateOption
    }
  }, tabs.toolbarButtons.name === tab.name && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_toolbar_buttons__WEBPACK_IMPORTED_MODULE_7__["default"], null), tabs.toolbarItems.name === tab.name && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_button_items__WEBPACK_IMPORTED_MODULE_8__["default"], null))))));
};
(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.render)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InlineStyle, null), document.getElementById((0,_aktk_helper_admin_menu__WEBPACK_IMPORTED_MODULE_9__.getConfig)('pageId')));

/***/ }),

/***/ "./src/js/admin-menu/inline-style/toolbar-buttons.js":
/*!***********************************************************!*\
  !*** ./src/js/admin-menu/inline-style/toolbar-buttons.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/js/admin-menu/inline-style/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/desktop.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/tablet.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/mobile.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aktk_helper_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aktk/helper/config */ "./src/js/helper/config.js");
/* harmony import */ var _aktk_helper_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aktk/helper/color */ "./src/js/helper/color.js");
/* harmony import */ var _components_preview_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/preview/index */ "./src/js/admin-menu/components/preview/index.js");
/* harmony import */ var _components_color_palette_color_palette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/color-palette/color-palette */ "./src/js/admin-menu/components/color-palette/color-palette.js");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/button/button */ "./src/js/admin-menu/components/button/button.js");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./function */ "./src/js/admin-menu/inline-style/function.js");
/* harmony import */ var _aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @aktk/helper/object */ "./src/js/helper/object.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/save.js");










const schema = {
  inlineStyle: {
    buttons: [{
      enable: true,
      style: {
        "font-size": "",
        "font-weight": "",
        color: "",
        "@markerColor": "#f2d9db",
        "@markerOpacity": 60,
        "@markerWeight": 30,
        background: "linear-gradient(transparent 75%, rgba(218,98,114, 0.3) 75%)"
      },
      tabletStyle: {},
      mobileStyle: {},
      customCss: "",
      lock: false
    }, {
      enable: true,
      style: {
        "font-size": "",
        "font-weight": "",
        color: "",
        "@markerColor": "#ceecfd",
        "@markerOpacity": 60,
        "@markerWeight": 30,
        background: "linear-gradient(transparent 75%, rgba(69,161,207, 0.3) 75%)"
      },
      tabletStyle: {},
      mobileStyle: {},
      customCss: "",
      lock: false
    }, {
      enable: true,
      style: {
        "font-size": "",
        "font-weight": "",
        color: "",
        "@markerColor": "#ffedcc",
        "@markerOpacity": 60,
        "@markerWeight": 30,
        background: "linear-gradient(transparent 75%, rgba(255,238,85, 0.3) 75%)"
      },
      tabletStyle: {},
      mobileStyle: {},
      customCss: "",
      lock: false
    }],
    items: {
      schema: {
        name: "",
        label: "",
        enable: true,
        style: {},
        tabletStyle: {},
        mobileStyle: {},
        customCss: "",
        lock: false
      },
      larger: {
        name: "larger",
        label: "\u5C11\u3057\u5927\u304D\u304F",
        enable: true,
        style: {
          "font-size": "1.2em"
        },
        tabletStyle: {},
        mobileStyle: {},
        customCss: "",
        lock: false
      },
      smaller: {
        name: "smaller",
        label: "\u5C11\u3057\u5C0F\u3055\u304F",
        enable: true,
        style: {
          "font-size": "0.8em"
        },
        tabletStyle: {},
        mobileStyle: {},
        customCss: "",
        lock: false
      },
      "larger-sp": {
        name: "larger-sp",
        label: "\u5C11\u3057\u5927\u304D\u304F(SP)",
        enable: true,
        style: {},
        tabletStyle: {},
        mobileStyle: {
          "font-size": "1.2em"
        },
        customCss: "",
        lock: false
      },
      "smaller-sp": {
        name: "smaller-sp",
        label: "\u5C11\u3057\u5C0F\u3055\u304F(SP)",
        enable: true,
        style: {},
        tabletStyle: {},
        mobileStyle: {
          "font-size": "0.8em"
        },
        customCss: "",
        lock: false
      },
      nowrap: {
        name: "nowrap",
        label: "\u6539\u884C\u3057\u306A\u3044",
        enable: true,
        style: {
          "white-space": "nowrap"
        },
        tabletStyle: {},
        mobileStyle: {},
        customCss: "",
        lock: false
      }
    }
  }
};



const ToolbarButtons = () => {
  const {
    options,
    buttons,
    setButtons,
    isUpdating,
    updateOption
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useContext)(_index__WEBPACK_IMPORTED_MODULE_1__.InlineStyleContext);
  const fontUnit = (0,_aktk_helper_config__WEBPACK_IMPORTED_MODULE_4__.getComponentConfig)('fontUnit');
  const [currentButtonIndex, setCurrentButtonIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const previewText = `インラインスタイル${currentButtonIndex + 1}`;
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);
  const getDefaultStyle = (name, defaultValue = undefined, device = 'style') => {
    const style = schema.inlineStyle.buttons[currentButtonIndex][device];
    if (!style || !style.hasOwnProperty(name)) {
      return defaultValue;
    }
    return style[name];
  };
  const getCurrentValue = key => {
    const current = (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__.getProperty)(buttons, currentButtonIndex);
    return (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__.getProperty)(current, key);
  };
  const updateButtonsOption = value => {
    setButtons({
      ...buttons,
      ...{
        [currentButtonIndex]: {
          ...(0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__.getProperty)(buttons, currentButtonIndex),
          ...value
        }
      }
    });
  };
  const updateButtonsStyle = (value, device = 'style') => {
    const currentStyle = getCurrentValue(device);
    updateButtonsOption({
      [device]: {
        ...currentStyle,
        ...value
      }
    });
  };
  const resetOption = () => {
    const newValue = {
      ...buttons,
      ...{
        [currentButtonIndex]: {
          ...schema.inlineStyle.buttons[currentButtonIndex]
        }
      }
    };
    setButtons(newValue);
    return newValue;
  };
  const getMarkerStyle = () => {
    const style = getCurrentValue('style');
    let weight = (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__.getProperty)(style, '@markerWeight', 30);
    weight = weight ? 100 - weight : '';
    let opacity = (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__.getProperty)(style, '@markerOpacity', 60);
    opacity = opacity ? opacity / 100 : '';
    let color = (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__.getProperty)(style, '@markerColor');
    color = color ? (0,_aktk_helper_color__WEBPACK_IMPORTED_MODULE_5__.hex2rgb)(color) : '';
    if (!weight || !opacity || !color) {
      return {
        background: undefined
      };
    }
    const rgb = `${color[0]},${color[1]},${color[2]}`;
    return {
      background: `linear-gradient(transparent ${weight}%, rgba(${rgb}, ${opacity}) ${weight}%)`
    };
  };
  const previewStyle = getCurrentValue('enable') ? {
    ...getCurrentValue('style'),
    ...getMarkerStyle()
  } : {};
  const previewClassName = `ystdb-inline--${currentButtonIndex + 1}`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-menu-toolbar-buttons__select"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb__horizon-buttons"
  }, options.buttons.map((item, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      key: index,
      isSecondary: currentButtonIndex !== index,
      isPrimary: currentButtonIndex === index,
      onClick: () => {
        setCurrentButtonIndex(index);
      }
    }, `ボタン ${index + 1}`);
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-components-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-menu-component-columns is-reverse"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-menu-component-columns__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: '基本設定'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: 'enable',
    label: 'ボタンの有効化'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: 'ボタンを有効にする',
    checked: getCurrentValue('enable'),
    onChange: value => {
      updateButtonsOption({
        enable: value
      });
    }
  }))), getCurrentValue('enable') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: '大きさ・スタイル'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: 'font-size',
    label: 'サイズ'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-component-responsive__container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-component-responsive__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
    value: (0,_function__WEBPACK_IMPORTED_MODULE_9__.getStyle)(getCurrentValue('style'), 'font-size', getDefaultStyle('font-size')),
    onChange: value => {
      updateButtonsStyle({
        'font-size': value
      });
    },
    units: fontUnit
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-component-responsive__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__["default"]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
    value: (0,_function__WEBPACK_IMPORTED_MODULE_9__.getStyle)(getCurrentValue('tabletStyle'), 'font-size', getDefaultStyle('font-size', undefined, 'tabletStyle')),
    onChange: value => {
      updateButtonsStyle({
        'font-size': value
      }, 'tabletStyle');
    },
    units: fontUnit
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-component-responsive__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__["default"]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
    value: (0,_function__WEBPACK_IMPORTED_MODULE_9__.getStyle)(getCurrentValue('mobileStyle'), 'font-size', getDefaultStyle('font-size', undefined, 'mobileStyle')),
    onChange: value => {
      updateButtonsStyle({
        'font-size': value
      }, 'mobileStyle');
    },
    units: fontUnit
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: 'font-weight',
    label: '太さ'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    value: (0,_function__WEBPACK_IMPORTED_MODULE_9__.getStyle)(getCurrentValue('style'), 'font-weight', getDefaultStyle('font-weight')),
    options: (0,_aktk_helper_config__WEBPACK_IMPORTED_MODULE_4__.getComponentConfig)('fontWeight'),
    onChange: value => {
      updateButtonsStyle({
        'font-weight': value
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: 'font-style',
    label: 'スタイル'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    value: (0,_function__WEBPACK_IMPORTED_MODULE_9__.getStyle)(getCurrentValue('style'), 'font-style', getDefaultStyle('font-style')),
    options: (0,_aktk_helper_config__WEBPACK_IMPORTED_MODULE_4__.getComponentConfig)('fontStyle'),
    onChange: value => {
      updateButtonsStyle({
        'font-style': value
      });
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: '色'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: 'font-color',
    label: '文字色'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_color_palette_color_palette__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onChange: color => {
      updateButtonsStyle({
        color
      });
    },
    value: (0,_function__WEBPACK_IMPORTED_MODULE_9__.getStyle)(getCurrentValue('style'), 'color', getDefaultStyle('color'))
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: 'マーカー'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: 'marker-color',
    label: '色'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_color_palette_color_palette__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onChange: color => {
      updateButtonsStyle({
        '@markerColor': color,
        ...getMarkerStyle()
      });
    },
    value: (0,_function__WEBPACK_IMPORTED_MODULE_9__.getStyle)(getCurrentValue('style'), '@markerColor', getDefaultStyle('@markerColor'))
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: 'marker-opacity',
    label: '濃さ(%)'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    value: (0,_function__WEBPACK_IMPORTED_MODULE_9__.getStyle)(getCurrentValue('style'), '@markerOpacity', getDefaultStyle('@markerOpacity')),
    onChange: value => {
      updateButtonsStyle({
        '@markerOpacity': value,
        ...getMarkerStyle()
      });
    },
    min: 10,
    max: 100
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: 'marker-weight',
    label: '太さ(%)'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    value: (0,_function__WEBPACK_IMPORTED_MODULE_9__.getStyle)(getCurrentValue('style'), '@markerWeight', getDefaultStyle('@markerWeight')),
    onChange: value => {
      updateButtonsStyle({
        '@markerWeight': value,
        ...getMarkerStyle()
      });
    },
    min: 5,
    max: 95
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: '上級者向け設定',
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: 'font-family',
    label: 'フォント(font-family)'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    placeholder: 'sans-serif',
    value: (0,_function__WEBPACK_IMPORTED_MODULE_9__.getStyle)(getCurrentValue('style'), 'font-family', getDefaultStyle('font-family')),
    onChange: value => {
      updateButtonsStyle({
        'font-family': value
      });
    }
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-components-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_button_button__WEBPACK_IMPORTED_MODULE_8__.UpdateButton, {
    key: 'update',
    onClick: () => {
      updateOption();
    },
    disabled: isUpdating
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_feather__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: 'ystdb-button-icon',
    style: {
      fill: 'none'
    }
  }), ' ', "\u8A2D\u5B9A\u3092\u4FDD\u5B58")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-components-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_button_button__WEBPACK_IMPORTED_MODULE_8__.DeleteButton, {
    isSmall: true,
    onClick: () => {
      openDeleteModal();
    },
    disabled: isUpdating
  }, "\u8A2D\u5B9A\u3092\u521D\u671F\u5316")), isDeleteModalOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    title: "\u78BA\u8A8D",
    onRequestClose: closeDeleteModal,
    shouldCloseOnClickOutside: false,
    isDismissible: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, `ボタン ${currentButtonIndex + 1} を初期化しますか？`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-components-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-menu-component-columns"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-menu-component-columns__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_button_button__WEBPACK_IMPORTED_MODULE_8__.DeleteButton, {
    isPrimary: true,
    onClick: () => {
      updateOption({
        buttons: resetOption()
      }, '設定を初期化しました。');
      closeDeleteModal();
    },
    disabled: isUpdating
  }, "\u521D\u671F\u5316")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-menu-component-columns__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_button_button__WEBPACK_IMPORTED_MODULE_8__.CancelButton, {
    isSecondary: true,
    onClick: closeDeleteModal
  }, "\u30AD\u30E3\u30F3\u30BB\u30EB")))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-menu-component-columns__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_preview_index__WEBPACK_IMPORTED_MODULE_6__["default"], null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: previewClassName,
    style: previewStyle,
    contentEditable: "true"
  }, previewText)))))));
};
/* harmony default export */ __webpack_exports__["default"] = (ToolbarButtons);

/***/ }),

/***/ "./src/js/components/notice/index.js":
/*!*******************************************!*\
  !*** ./src/js/components/notice/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noticeType: function() { return /* binding */ noticeType; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



/**
 * 通知タイプ
 *
 * @type {{help: string, warning: string, error: string, info: string}}
 * @deprecated
 */
const noticeType = {
  info: 'info',
  warning: 'warning',
  error: 'error',
  help: 'help'
};

/**
 * 通知コンポーネント
 *
 * @param {Object}      props
 * @param {JSX.Element} props.children
 * @param {string}      props.type
 * @param {string}      props.className
 * @return {JSX.Element}
 * @class
 * @deprecated
 */
const Notice = ({
  children,
  type,
  className,
  ...props
}) => {
  const _noticeType = type || 'info';
  const wrapProps = {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystd-component-notice', className, `is-${_noticeType}`),
    ...props
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...wrapProps
  }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (Notice);

/***/ }),

/***/ "./src/js/config/config.js":
/*!*********************************!*\
  !*** ./src/js/config/config.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ystdbConfig: function() { return /* reexport safe */ _index__WEBPACK_IMPORTED_MODULE_0__.ystdbConfig; }
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/js/config/index.js");
//TODO: 直接このファイルを参照している部分を ./index.jsを参照するように変更する.


/***/ }),

/***/ "./src/js/config/index.js":
/*!********************************!*\
  !*** ./src/js/config/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ystdbConfig: function() { return /* binding */ ystdbConfig; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);


/**
 * 設定
 */
const ystdbConfig = {
  category: {
    common: 'ystdb',
    beta: 'ystdb_beta',
    deprecated: 'ystdb_deprecated'
  },
  color: {
    iconForeground: '#4190be',
    iconDeprecatedForeground: '#be4141'
  },
  button: {
    newTabRel: 'noreferrer noopener',
    borderRadiusMin: 0,
    borderRadiusMax: 50,
    borderRadiusInitialPosition: 4,
    paddingTypes: [{
      value: 'is-small',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('小', 'ystandard-blocks')
    }, {
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('中', 'ystandard-blocks')
    }, {
      value: 'is-large',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('大', 'ystandard-blocks')
    }],
    animationTypes: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('なし', 'ystandard-blocks'),
      value: 'none'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('キラキラ', 'ystandard-blocks'),
      value: 'shine'
    }]
  },
  icon: {
    size: [{
      value: 'is-small',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('小', 'ystandard-blocks')
    }, {
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('中', 'ystandard-blocks')
    }, {
      value: 'is-large',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('大', 'ystandard-blocks')
    }]
  },
  component: {
    defaultAvatar: {
      url: 'https://www.gravatar.com/avatar/000000000000000000000000000000?s=128&r=g&d=mp'
    },
    fontWeight: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('指定無し', 'component-config', 'ystandard-blocks')
    }, {
      value: 'normal',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('通常(normal)', 'component-config', 'ystandard-blocks')
    }, {
      value: 'bold',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('太字(bold)', 'component-config', 'ystandard-blocks')
    }, {
      value: '100',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('100', 'component-config', 'ystandard-blocks')
    }, {
      value: '200',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('200', 'component-config', 'ystandard-blocks')
    }, {
      value: '300',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('300', 'component-config', 'ystandard-blocks')
    }, {
      value: '400',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('400', 'component-config', 'ystandard-blocks')
    }, {
      value: '500',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('500', 'component-config', 'ystandard-blocks')
    }, {
      value: '600',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('600', 'component-config', 'ystandard-blocks')
    }, {
      value: '700',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('700', 'component-config', 'ystandard-blocks')
    }, {
      value: '800',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('800', 'component-config', 'ystandard-blocks')
    }, {
      value: '900',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('900', 'component-config', 'ystandard-blocks')
    }],
    fontUnit: [{
      value: 'px',
      label: 'px'
    }, {
      value: 'em',
      label: 'em'
    }, {
      value: 'rem',
      label: 'rem'
    }, {
      value: '%',
      label: '%'
    }],
    fontStyle: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('指定無し', 'component-config', 'ystandard-blocks')
    }, {
      value: 'italic',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('イタリック体', 'component-config', 'ystandard-blocks')
    }],
    borderStyles: [{
      value: 'solid',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('直線', 'component-config', 'ystandard-blocks')
    }, {
      value: 'dotted',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('点線', 'component-config', 'ystandard-blocks')
    }, {
      value: 'dashed',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('破線', 'component-config', 'ystandard-blocks')
    }, {
      value: 'double',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('二重線', 'component-config', 'ystandard-blocks')
    }]
  }
};

/***/ }),

/***/ "./src/js/helper/admin-menu.js":
/*!*************************************!*\
  !*** ./src/js/helper/admin-menu.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ERROR: function() { return /* binding */ ERROR; },
/* harmony export */   SUCCESS: function() { return /* binding */ SUCCESS; },
/* harmony export */   getApiRoute: function() { return /* binding */ getApiRoute; },
/* harmony export */   getConfig: function() { return /* binding */ getConfig; },
/* harmony export */   getEndpoint: function() { return /* binding */ getEndpoint; },
/* harmony export */   getOption: function() { return /* binding */ getOption; },
/* harmony export */   isApiError: function() { return /* binding */ isApiError; },
/* harmony export */   isApiSuccess: function() { return /* binding */ isApiSuccess; }
/* harmony export */ });
function getConfig(name, defaultValue = undefined) {
  if (!window.ystdbAdminMenuConfig) {
    return defaultValue;
  }
  if (!window.ystdbAdminMenuConfig.hasOwnProperty('config')) {
    return defaultValue;
  }
  const config = window.ystdbAdminMenuConfig.config;
  if (!config.hasOwnProperty(name)) {
    return defaultValue;
  }
  return config[name];
}
function getOption(section, name, defaultValue = undefined) {
  if (!window.ystdbAdminMenuOptions) {
    return defaultValue;
  }
  if (!window.ystdbAdminMenuOptions.hasOwnProperty('options')) {
    return defaultValue;
  }
  const options = window.ystdbAdminMenuOptions.options;
  if (!options.hasOwnProperty(section)) {
    return defaultValue;
  }
  // 設定名指定あり・なし.
  if (name) {
    if (!options[section].hasOwnProperty(name)) {
      return defaultValue;
    }
  } else {
    // 設定名の指定がなければセクションまとめて.
    return options[section];
  }
  return options[section][name];
}
const SUCCESS = 'success';
const ERROR = 'error';
function isApiSuccess(status) {
  return SUCCESS === status;
}
function isApiError(status) {
  return ERROR === status;
}
function getApiRoute(name) {
  const route = getConfig('route');
  if (!route.hasOwnProperty(name)) {
    return undefined;
  }
  return route[name];
}
function getEndpoint(name) {
  const namespace = getConfig('endpointNamespace');
  if (!namespace) {
    /* eslint-disable no-console */
    console.error('Namespaceが見つかりません');
    /* eslint-enable */
    return undefined;
  }
  const route = getApiRoute(name);
  return namespace + '/' + route;
}

/***/ }),

/***/ "./src/js/helper/color.js":
/*!********************************!*\
  !*** ./src/js/helper/color.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBackGroundStyle: function() { return /* binding */ getBackGroundStyle; },
/* harmony export */   getColorSetting: function() { return /* binding */ getColorSetting; },
/* harmony export */   getColorSlug: function() { return /* binding */ getColorSlug; },
/* harmony export */   hex2rgb: function() { return /* binding */ hex2rgb; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const getColorSetting = () => {
  const {
    colors
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/block-editor').getSettings();
  return colors;
};
const getColorSlug = (color, colors = undefined) => {
  const _colors = colors ? colors : getColorSetting();
  const selected = _colors.filter(data => data.color === color);
  if (0 < selected.length) {
    return selected[0].slug;
  }
  return undefined;
};
const hex2rgb = hex => {
  if (hex.slice(0, 1) === '#') hex = hex.slice(1);
  if (hex.length === 3) hex = hex.slice(0, 1) + hex.slice(0, 1) + hex.slice(1, 2) + hex.slice(1, 2) + hex.slice(2, 3) + hex.slice(2, 3);
  return [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map(str => {
    return parseInt(str, 16);
  });
};
const getBackGroundStyle = (backgroundColor, gradient = undefined) => {
  if (gradient) {
    return gradient;
  }
  if (backgroundColor?.color) {
    return backgroundColor.color;
  }
  if ('object' !== typeof backgroundColor && backgroundColor) {
    return backgroundColor;
  }
  return undefined;
};

/***/ }),

/***/ "./src/js/helper/config.js":
/*!*********************************!*\
  !*** ./src/js/helper/config.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBlockEditorConfig: function() { return /* binding */ getBlockEditorConfig; },
/* harmony export */   getComponentConfig: function() { return /* binding */ getComponentConfig; },
/* harmony export */   getConfig: function() { return /* binding */ getConfig; }
/* harmony export */ });
/* harmony import */ var _aktk_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aktk/config/config */ "./src/js/config/config.js");
// @ts-ignore


// @ts-ignore
const getConfig = name => {
  return _aktk_config_config__WEBPACK_IMPORTED_MODULE_0__.ystdbConfig[name];
};

// @ts-ignore
const getComponentConfig = name => {
  return _aktk_config_config__WEBPACK_IMPORTED_MODULE_0__.ystdbConfig.component[name];
};

/**
 * ブロックエディター設定取得
 *
 * @param {string} name
 * @param {any}    defaultValue
 * @return {any}
 * @deprecated
 */
const getBlockEditorConfig = (name, defaultValue = undefined) => {
  if (!window.ystdb || 'object' !== typeof window.ystdb) {
    return defaultValue;
  }
  if (!window.ystdb.hasOwnProperty(name)) {
    return defaultValue;
  }
  return window.ystdb[name];
};

/***/ }),

/***/ "./src/js/helper/object.js":
/*!*********************************!*\
  !*** ./src/js/helper/object.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProperty: function() { return /* binding */ getProperty; },
/* harmony export */   hasKey: function() { return /* binding */ hasKey; },
/* harmony export */   hasObjectKey: function() { return /* binding */ hasObjectKey; },
/* harmony export */   isObject: function() { return /* binding */ isObject; },
/* harmony export */   object2Array: function() { return /* binding */ object2Array; },
/* harmony export */   objectCopy: function() { return /* binding */ objectCopy; },
/* harmony export */   parseObject: function() { return /* binding */ parseObject; }
/* harmony export */ });
const isObject = value => {
  return 'object' === typeof value;
};
const parseObject = value => {
  if (!value || !isObject(value)) {
    return undefined;
  }
  return 0 < Object.keys(value).length ? {
    ...value
  } : undefined;
};
const hasObjectKey = (value, key) => {
  if (!isObject(value)) {
    return false;
  }
  return value.hasOwnProperty(key);
};
const object2Array = obj => {
  let result = {
    ...obj
  };
  if (isObject(result)) {
    result = Object.entries(result).map(value => {
      return value[1];
    });
  }
  return result;
};

// --- 移植前 ---.
const hasKey = (obj, key) => {
  if (!obj || 'object' !== typeof obj) {
    return false;
  }
  return obj.hasOwnProperty(key);
};
const getProperty = (obj, key, defaultValue = undefined) => {
  if (!hasKey(obj, key)) {
    return defaultValue;
  }
  return obj[key];
};
const objectCopy = obj => {
  return JSON.parse(JSON.stringify(obj));
};

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: function() { return /* binding */ clsx; }
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ __webpack_exports__["default"] = (clsx);

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.min.css ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/admin-menu/components/_index.scss":
/*!**************************************************!*\
  !*** ./src/js/admin-menu/components/_index.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/admin-menu/components/button/_button.scss":
/*!**********************************************************!*\
  !*** ./src/js/admin-menu/components/button/_button.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/admin-menu/components/manual-link/_manual-link.scss":
/*!********************************************************************!*\
  !*** ./src/js/admin-menu/components/manual-link/_manual-link.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/admin-menu/components/message/_message.scss":
/*!************************************************************!*\
  !*** ./src/js/admin-menu/components/message/_message.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/admin-menu/components/preview/_preview.scss":
/*!************************************************************!*\
  !*** ./src/js/admin-menu/components/preview/_preview.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/admin-menu/inline-style/_inline-style.scss":
/*!***********************************************************!*\
  !*** ./src/js/admin-menu/inline-style/_inline-style.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-feather/dist/icons/book.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/book.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Book = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
  }));
});
Book.propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])
};
Book.displayName = 'Book';
/* harmony default export */ __webpack_exports__["default"] = (Book);

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/save.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/save.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Save = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "17 21 17 13 7 13 7 21"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "7 3 7 8 15 8"
  }));
});
Save.propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])
};
Save.displayName = 'Save';
/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./node_modules/react-toastify/dist/react-toastify.esm.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/react-toastify.esm.mjs ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bounce: function() { return /* binding */ R; },
/* harmony export */   Flip: function() { return /* binding */ $; },
/* harmony export */   Icons: function() { return /* binding */ E; },
/* harmony export */   Slide: function() { return /* binding */ w; },
/* harmony export */   ToastContainer: function() { return /* binding */ k; },
/* harmony export */   Zoom: function() { return /* binding */ x; },
/* harmony export */   collapseToast: function() { return /* binding */ g; },
/* harmony export */   cssTransition: function() { return /* binding */ h; },
/* harmony export */   toast: function() { return /* binding */ Q; },
/* harmony export */   useToast: function() { return /* binding */ _; },
/* harmony export */   useToastContainer: function() { return /* binding */ C; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
'use client';
const u=t=>"number"==typeof t&&!isNaN(t),d=t=>"string"==typeof t,p=t=>"function"==typeof t,m=t=>d(t)||p(t)?t:null,f=t=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(t)||d(t)||p(t)||u(t);function g(t,e,n){void 0===n&&(n=300);const{scrollHeight:o,style:s}=t;requestAnimationFrame(()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${n}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(e,n)})})}function h(e){let{enter:a,exit:r,appendPosition:i=!1,collapse:l=!0,collapseDuration:c=300}=e;return function(e){let{children:u,position:d,preventExitTransition:p,done:m,nodeRef:f,isIn:h}=e;const y=i?`${a}--${d}`:a,v=i?`${r}--${d}`:r,T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{const t=f.current,e=y.split(" "),n=o=>{o.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",n),t.removeEventListener("animationcancel",n),0===T.current&&"animationcancel"!==o.type&&t.classList.remove(...e))};t.classList.add(...e),t.addEventListener("animationend",n),t.addEventListener("animationcancel",n)},[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const t=f.current,e=()=>{t.removeEventListener("animationend",e),l?g(t,m,c):m()};h||(p?e():(T.current=1,t.className+=` ${v}`,t.addEventListener("animationend",e)))},[h]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,u)}}function y(t,e){return null!=t?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const v={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(t=>t!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},T=e=>{let{theme:n,type:o,...s}=e;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===n?"currentColor":`var(--toastify-icon-color-${o})`,...s})},E={info:function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(T,{...e},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(T,{...e},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(T,{...e},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(T,{...e},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"Toastify__spinner"})}};function C(t){const[,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(t=>t+1,0),[l,c]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),h=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map).current,T=t=>-1!==l.indexOf(t),C=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:T,getToast:t=>h.get(t)}).current;function b(t){let{containerId:e}=t;const{limit:n}=C.props;!n||e&&C.containerId!==e||(C.count-=C.queue.length,C.queue=[])}function I(t){c(e=>null==t?[]:e.filter(e=>e!==t))}function _(){const{toastContent:t,toastProps:e,staleId:n}=C.queue.shift();O(t,e,n)}function L(t,n){let{delay:s,staleId:r,...i}=n;if(!f(t)||function(t){return!g.current||C.props.enableMultiContainer&&t.containerId!==C.props.containerId||h.has(t.toastId)&&null==t.updateId}(i))return;const{toastId:l,updateId:c,data:T}=i,{props:b}=C,L=()=>I(l),N=null==c;N&&C.count++;const M={...b,style:b.toastStyle,key:C.toastKey++,...Object.fromEntries(Object.entries(i).filter(t=>{let[e,n]=t;return null!=n})),toastId:l,updateId:c,data:T,closeToast:L,isIn:!1,className:m(i.className||b.toastClassName),bodyClassName:m(i.bodyClassName||b.bodyClassName),progressClassName:m(i.progressClassName||b.progressClassName),autoClose:!i.isLoading&&(R=i.autoClose,w=b.autoClose,!1===R||u(R)&&R>0?R:w),deleteToast(){const t=y(h.get(l),"removed");h.delete(l),v.emit(4,t);const e=C.queue.length;if(C.count=null==l?C.count-C.displayedToast:C.count-1,C.count<0&&(C.count=0),e>0){const t=null==l?C.props.limit:1;if(1===e||1===t)C.displayedToast++,_();else{const n=t>e?e:t;C.displayedToast=n;for(let t=0;t<n;t++)_()}}else o()}};var R,w;M.iconOut=function(t){let{theme:n,type:o,isLoading:s,icon:r}=t,i=null;const l={theme:n,type:o};return!1===r||(p(r)?i=r(l):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(r)?i=(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(r,l):d(r)||u(r)?i=r:s?i=E.spinner():(t=>t in E)(o)&&(i=E[o](l))),i}(M),p(i.onOpen)&&(M.onOpen=i.onOpen),p(i.onClose)&&(M.onClose=i.onClose),M.closeButton=b.closeButton,!1===i.closeButton||f(i.closeButton)?M.closeButton=i.closeButton:!0===i.closeButton&&(M.closeButton=!f(b.closeButton)||b.closeButton);let x=t;(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(t)&&!d(t.type)?x=(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(t,{closeToast:L,toastProps:M,data:T}):p(t)&&(x=t({closeToast:L,toastProps:M,data:T})),b.limit&&b.limit>0&&C.count>b.limit&&N?C.queue.push({toastContent:x,toastProps:M,staleId:r}):u(s)?setTimeout(()=>{O(x,M,r)},s):O(x,M,r)}function O(t,e,n){const{toastId:o}=e;n&&h.delete(n);const s={content:t,props:e};h.set(o,s),c(t=>[...t,o].filter(t=>t!==n)),v.emit(4,y(s,null==s.props.updateId?"added":"updated"))}return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(C.containerId=t.containerId,v.cancelEmit(3).on(0,L).on(1,t=>g.current&&I(t)).on(5,b).emit(2,C),()=>{h.clear(),v.emit(3,C)}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{C.props=t,C.isToastActive=T,C.displayedToast=l.length}),{getToastToRender:function(e){const n=new Map,o=Array.from(h.values());return t.newestOnTop&&o.reverse(),o.forEach(t=>{const{position:e}=t.props;n.has(e)||n.set(e,[]),n.get(e).push(t)}),Array.from(n,t=>e(t[0],t[1]))},containerRef:g,isToastActive:T}}function b(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function I(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function _(t){const[o,a]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[r,l]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t),{autoClose:m,pauseOnHover:f,closeToast:g,onClick:h,closeOnClick:y}=t;function v(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),u.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",L),document.addEventListener("touchmove",_),document.addEventListener("touchend",L);const n=c.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.x=b(e.nativeEvent),u.y=I(e.nativeEvent),"x"===t.draggableDirection?(u.start=u.x,u.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(u.start=u.y,u.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function T(e){if(u.boundingRect){const{top:n,bottom:o,left:s,right:a}=u.boundingRect;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&u.x>=s&&u.x<=a&&u.y>=n&&u.y<=o?C():E()}}function E(){a(!0)}function C(){a(!1)}function _(e){const n=c.current;u.canDrag&&n&&(u.didMove=!0,o&&C(),u.x=b(e),u.y=I(e),u.delta="x"===t.draggableDirection?u.x-u.start:u.y-u.start,u.start!==u.x&&(u.canCloseOnClick=!1),n.style.transform=`translate${t.draggableDirection}(${u.delta}px)`,n.style.opacity=""+(1-Math.abs(u.delta/u.removalDistance)))}function L(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",L),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",L);const e=c.current;if(u.canDrag&&u.didMove&&e){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance)return l(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform=`translate${t.draggableDirection}(0)`,e.style.opacity="1"}}(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{d.current=t}),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(c.current&&c.current.addEventListener("d",E,{once:!0}),p(t.onOpen)&&t.onOpen((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(t.children)&&t.children.props),()=>{const t=d.current;p(t.onClose)&&t.onClose((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(t.children)&&t.children.props)}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",E),window.addEventListener("blur",C)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",C))}),[t.pauseOnFocusLoss]);const O={onMouseDown:v,onTouchStart:v,onMouseUp:T,onTouchEnd:T};return m&&f&&(O.onMouseEnter=C,O.onMouseLeave=E),y&&(O.onClick=t=>{h&&h(t),u.canCloseOnClick&&g()}),{playToast:E,pauseToast:C,isRunning:o,preventExitTransition:r,toastRef:c,eventHandlers:O}}function L(e){let{closeToast:n,theme:o,ariaLabel:s="close"}=e;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:t=>{t.stopPropagation(),n(t)},"aria-label":s},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function O(e){let{delay:n,isRunning:o,closeToast:s,type:a="default",hide:r,className:i,style:l,controlledProgress:u,progress:d,rtl:m,isIn:f,theme:g}=e;const h=r||u&&0===d,y={...l,animationDuration:`${n}ms`,animationPlayState:o?"running":"paused",opacity:h?0:1};u&&(y.transform=`scaleX(${d})`);const v=(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":m}),T=p(i)?i({rtl:m,type:a,defaultClassName:v}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(v,i);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:T,style:y,[u&&d>=1?"onTransitionEnd":"onAnimationEnd"]:u&&d<1?null:()=>{f&&s()}})}const N=n=>{const{isRunning:o,preventExitTransition:s,toastRef:r,eventHandlers:i}=_(n),{closeButton:l,children:u,autoClose:d,onClick:m,type:f,hideProgressBar:g,closeToast:h,transition:y,position:v,className:T,style:E,bodyClassName:C,bodyStyle:b,progressClassName:I,progressStyle:N,updateId:M,role:R,progress:w,rtl:x,toastId:$,deleteToast:k,isIn:P,isLoading:B,iconOut:D,closeOnClick:A,theme:z}=n,F=(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast",`Toastify__toast-theme--${z}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":x},{"Toastify__toast--close-on-click":A}),H=p(T)?T({rtl:x,position:v,type:f,defaultClassName:F}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(F,T),S=!!w||!d,q={closeToast:h,type:f,theme:z};let Q=null;return!1===l||(Q=p(l)?l(q):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(l)?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(l,q):L(q)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(y,{isIn:P,done:k,position:v,preventExitTransition:s,nodeRef:r},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:$,onClick:m,className:H,...i,style:E,ref:r},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{...P&&{role:R},className:p(C)?C({type:f}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast-body",C),style:b},null!=D&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!B})},D),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,u)),Q,react__WEBPACK_IMPORTED_MODULE_0__.createElement(O,{...M&&!S?{key:`pb-${M}`}:{},rtl:x,theme:z,delay:d,isRunning:o,isIn:P,closeToast:h,hide:g,type:f,style:N,className:I,controlledProgress:S,progress:w||0})))},M=function(t,e){return void 0===e&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},R=h(M("bounce",!0)),w=h(M("slide",!0)),x=h(M("zoom")),$=h(M("flip")),k=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((e,n)=>{const{getToastToRender:o,containerRef:a,isToastActive:r}=C(e),{className:i,style:l,rtl:u,containerId:d}=e;function f(t){const e=(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast-container",`Toastify__toast-container--${t}`,{"Toastify__toast-container--rtl":u});return p(i)?i({position:t,rtl:u,defaultClassName:e}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(e,m(i))}return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n&&(n.current=a.current)},[]),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:a,className:"Toastify",id:d},o((e,n)=>{const o=n.length?{...l}:{...l,pointerEvents:"none"};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:f(e),style:o,key:`container-${e}`},n.map((e,o)=>{let{content:s,props:a}=e;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(N,{...a,isIn:r(a.toastId),style:{...a.style,"--nth":o+1,"--len":n.length},key:`toast-${a.key}`},s)}))}))});k.displayName="ToastContainer",k.defaultProps={position:"top-right",transition:R,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let P,B=new Map,D=[],A=1;function z(){return""+A++}function F(t){return t&&(d(t.toastId)||u(t.toastId))?t.toastId:z()}function H(t,e){return B.size>0?v.emit(0,t,e):D.push({content:t,options:e}),e.toastId}function S(t,e){return{...e,type:e&&e.type||t,toastId:F(e)}}function q(t){return(e,n)=>H(e,S(t,n))}function Q(t,e){return H(t,S("default",e))}Q.loading=(t,e)=>H(t,S("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),Q.promise=function(t,e,n){let o,{pending:s,error:a,success:r}=e;s&&(o=d(s)?Q.loading(s,n):Q.loading(s.render,{...n,...s}));const i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(t,e,s)=>{if(null==e)return void Q.dismiss(o);const a={type:t,...i,...n,data:s},r=d(e)?{render:e}:e;return o?Q.update(o,{...a,...r}):Q(r.render,{...a,...r}),s},c=p(t)?t():t;return c.then(t=>l("success",r,t)).catch(t=>l("error",a,t)),c},Q.success=q("success"),Q.info=q("info"),Q.error=q("error"),Q.warning=q("warning"),Q.warn=Q.warning,Q.dark=(t,e)=>H(t,S("default",{theme:"dark",...e})),Q.dismiss=t=>{B.size>0?v.emit(1,t):D=D.filter(e=>null!=t&&e.options.toastId!==t)},Q.clearWaitingQueue=function(t){return void 0===t&&(t={}),v.emit(5,t)},Q.isActive=t=>{let e=!1;return B.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},Q.update=function(t,e){void 0===e&&(e={}),setTimeout(()=>{const n=function(t,e){let{containerId:n}=e;const o=B.get(n||P);return o&&o.getToast(t)}(t,e);if(n){const{props:o,content:s}=n,a={delay:100,...o,...e,toastId:e.toastId||t,updateId:z()};a.toastId!==t&&(a.staleId=t);const r=a.render||s;delete a.render,H(r,a)}},0)},Q.done=t=>{Q.update(t,{progress:1})},Q.onChange=t=>(v.on(4,t),()=>{v.off(4,t)}),Q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},v.on(2,t=>{P=t.containerId||t,B.set(P,t),D.forEach(t=>{v.emit(0,t.content,t.options)}),D=[]}).on(3,t=>{B.delete(t.containerId||t),0===B.size&&v.off(0).off(1).off(5)});
//# sourceMappingURL=react-toastify.esm.mjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/admin-menu/inline-style/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=inline-style.js.map