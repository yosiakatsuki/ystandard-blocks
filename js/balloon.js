/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/balloon/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/balloon/_deprecated.js":
/*!***************************************!*\
  !*** ./blocks/balloon/_deprecated.js ***!
  \***************************************/
/*! exports provided: deprecated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecated", function() { return deprecated; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./blocks/balloon/config.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var blockAttributes = {
  avatarName: {
    type: 'string',
    source: 'html',
    selector: '.ystdb-balloon__name'
  },
  avatarNameColor: {
    type: 'string'
  },
  customAvatarNameColor: {
    type: 'string'
  },
  avatarURL: {
    type: 'string',
    source: 'attribute',
    selector: '.ystdb-balloon__avatar-image',
    attribute: 'src',
    default: _config__WEBPACK_IMPORTED_MODULE_4__["defaultAvatar"]
  },
  avatarAlt: {
    type: 'string',
    source: 'attribute',
    selector: '.ystdb-balloon__avatar-image',
    attribute: 'alt'
  },
  avatarID: {
    type: 'integer',
    default: 0
  },
  avatarSize: {
    type: 'string',
    default: 'large'
  },
  avatarBorderColor: {
    type: 'string'
  },
  customAvatarBorderColor: {
    type: 'string'
  },
  avatarBorderWidth: {
    type: 'integer',
    default: 0
  },
  avatarBorderRadius: {
    type: 'integer'
  },
  text: {
    type: 'string',
    source: 'html',
    selector: '.ystdb-balloon__text'
  },
  balloonPosition: {
    type: 'string',
    default: 'right'
  },
  backgroundColor: {
    type: 'string'
  },
  customBackgroundColor: {
    type: 'string'
  },
  balloonBorderColor: {
    type: 'string'
  },
  customBalloonBorderColor: {
    type: 'string'
  },
  textColor: {
    type: 'string'
  },
  customTextColor: {
    type: 'string'
  },
  fontSize: {
    type: 'string'
  },
  customFontSize: {
    type: 'number'
  },
  balloonType: {
    type: 'string',
    default: 'serif'
  },
  verticalAlign: {
    type: 'string',
    default: 'top'
  }
};
var deprecated = [{
  attributes: _objectSpread({}, blockAttributes),
  supports: {
    align: false,
    className: false
  },
  save: function save(_ref) {
    var _classnames, _classnames3, _classnames4, _classnames5, _classnames6;

    var attributes = _ref.attributes;
    var className = attributes.className,
        textColor = attributes.textColor,
        customTextColor = attributes.customTextColor,
        backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        balloonBorderColor = attributes.balloonBorderColor,
        customBalloonBorderColor = attributes.customBalloonBorderColor,
        avatarNameColor = attributes.avatarNameColor,
        customAvatarNameColor = attributes.customAvatarNameColor,
        avatarBorderColor = attributes.avatarBorderColor,
        customAvatarBorderColor = attributes.customAvatarBorderColor,
        fontSize = attributes.fontSize,
        customFontSize = attributes.customFontSize,
        avatarName = attributes.avatarName,
        avatarURL = attributes.avatarURL,
        avatarAlt = attributes.avatarAlt,
        avatarSize = attributes.avatarSize,
        avatarBorderWidth = attributes.avatarBorderWidth,
        avatarBorderRadius = attributes.avatarBorderRadius,
        text = attributes.text,
        balloonPosition = attributes.balloonPosition,
        balloonType = attributes.balloonType,
        verticalAlign = attributes.verticalAlign;
    var avatarNameColorClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('color', avatarNameColor);
    var avatarBorderColorClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('border-color', avatarBorderColor);
    var textClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('color', textColor);
    var fontSizeClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getFontSizeClass"])(fontSize);
    var backgroundColorClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('background-color', backgroundColor);
    var balloonBorderColorClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('border-color', balloonBorderColor);
    /**
     * 大枠
     *
     * @type {string}
     */

    var wrapClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'ystdb-balloon', (_classnames = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "is-vertically-aligned-".concat(verticalAlign), verticalAlign), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "is-balloon-position-".concat(balloonPosition), balloonPosition), _classnames));
    /**
     * アバター画像カラムクラス
     *
     * @type {string}
     */

    var avatarWrapClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-balloon__avatar', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "is-size-".concat(avatarSize), avatarSize));
    /**
     * アバター画像クラス
     *
     * @type {string}
     */

    var avatarClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-balloon__avatar-image', (_classnames3 = {
      'has-border-color': avatarBorderColorClass || customAvatarBorderColor
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames3, avatarBorderColorClass, avatarBorderColorClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames3, 'has-border', 0 < avatarBorderWidth), _classnames3));
    /**
     * アバター画像スタイル
     *
     * @type {{borderColor: *}}
     */

    var avatarStyle = {
      borderColor: customAvatarBorderColor,
      borderWidth: 0 < avatarBorderWidth ? avatarBorderWidth : undefined,
      borderRadius: avatarBorderRadius
    };
    /**
     * アバター画像ALT
     */

    var avatarAltText = avatarAlt ? avatarAlt : avatarName;
    /**
     * アバター名クラス
     *
     * @type {string}
     */

    var avatarNameClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-balloon__name', (_classnames4 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames4, avatarNameColorClass, avatarNameColorClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames4, 'has-text-color', customAvatarNameColor || avatarNameColorClass), _classnames4));
    /**
     * アバター名スタイル
     *
     * @type {{color: *}}
     */

    var avatarNameStyles = {
      color: customAvatarNameColor
    };
    /**
     * 吹き出しクラス
     *
     * @type {string}
     */

    var balloonBodyClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-balloon__body', (_classnames5 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames5, backgroundColorClass, backgroundColorClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames5, 'has-background', backgroundColorClass || customBackgroundColor), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames5, 'has-border-color', balloonBorderColorClass || customBalloonBorderColor), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames5, "is-".concat(verticalAlign), verticalAlign), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames5, "is-".concat(balloonPosition), balloonPosition), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames5, "is-".concat(balloonType), balloonType), _classnames5));
    /**
     * 吹き出しスタイル
     *
     * @type {{backgroundColor: *}}
     */

    var balloonBodyStyles = {
      backgroundColor: customBackgroundColor,
      borderColor: customBalloonBorderColor
    };
    /**
     * 吹き出しテキストクラス
     *
     * @type {string}
     */

    var textClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-balloon__text', (_classnames6 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames6, textClass, textClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames6, 'has-text-color', textColor || customTextColor), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames6, fontSizeClass, fontSizeClass), _classnames6));
    /**
     * 吹き出しテキストスタイル
     *
     * @type {{color: (*), fontSize: (string|*)}}
     */

    var textStyles = {
      color: textClass ? undefined : customTextColor,
      fontSize: !fontSizeClass && customFontSize ? customFontSize + 'px' : undefined
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: wrapClasses
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", {
      className: avatarWrapClasses
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      className: avatarClasses,
      style: avatarStyle,
      src: avatarURL,
      alt: avatarAltText
    }), avatarName && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figcaption", {
      className: avatarNameClass,
      style: avatarNameStyles
    }, avatarName)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: balloonBodyClass,
      style: balloonBodyStyles
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: 'p',
      className: textClasses,
      style: textStyles,
      value: text
    })));
  }
}];

/***/ }),

/***/ "./blocks/balloon/config.js":
/*!**********************************!*\
  !*** ./blocks/balloon/config.js ***!
  \**********************************/
/*! exports provided: defaultAvatar, attributes, supports, balloonTypes, balloonPositions, avatarSizes, alignBottom, alignCenter, alignTop, alignmentsControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultAvatar", function() { return defaultAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supports", function() { return supports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "balloonTypes", function() { return balloonTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "balloonPositions", function() { return balloonPositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avatarSizes", function() { return avatarSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignBottom", function() { return alignBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignCenter", function() { return alignCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignTop", function() { return alignTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignmentsControls", function() { return alignmentsControls; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



var defaultAvatar = 'https://www.gravatar.com/avatar/000000000000000000000000000000?s=128&r=g&d=mp';
/**
 * attributes
 */

var attributes = {
  avatarName: {
    type: 'string',
    source: 'html',
    selector: '.ystdb-balloon__name'
  },
  avatarNameColor: {
    type: 'string'
  },
  customAvatarNameColor: {
    type: 'string'
  },
  avatarURL: {
    type: 'string',
    source: 'attribute',
    selector: '.ystdb-balloon__avatar-image',
    attribute: 'src',
    default: defaultAvatar
  },
  avatarAlt: {
    type: 'string',
    source: 'attribute',
    selector: '.ystdb-balloon__avatar-image',
    attribute: 'alt'
  },
  avatarID: {
    type: 'integer',
    default: 0
  },
  avatarSize: {
    type: 'string',
    default: 'large'
  },
  avatarBorderColor: {
    type: 'string'
  },
  customAvatarBorderColor: {
    type: 'string'
  },
  avatarBorderWidth: {
    type: 'integer',
    default: 0
  },
  avatarBorderRadius: {
    type: 'integer'
  },
  text: {
    type: 'string',
    source: 'html',
    selector: '.ystdb-balloon__text'
  },
  balloonPosition: {
    type: 'string',
    default: 'right'
  },
  backgroundColor: {
    type: 'string'
  },
  customBackgroundColor: {
    type: 'string'
  },
  balloonBorderColor: {
    type: 'string'
  },
  customBalloonBorderColor: {
    type: 'string'
  },
  textColor: {
    type: 'string'
  },
  customTextColor: {
    type: 'string'
  },
  fontSize: {
    type: 'string'
  },
  customFontSize: {
    type: 'number'
  },
  balloonType: {
    type: 'string',
    default: 'serif'
  },
  verticalAlign: {
    type: 'string',
    default: 'top'
  }
};
var supports = {
  align: false,
  className: false
};
var balloonTypes = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('会話', 'ystandard-blocks'),
  value: 'serif'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('考え中', 'ystandard-blocks'),
  value: 'think'
}];
var balloonPositions = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('右', 'ystandard-blocks'),
  value: 'right'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('左', 'ystandard-blocks'),
  value: 'left'
}];
var avatarSizes = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('小', 'ystandard-blocks'),
  value: 'small'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('大', 'ystandard-blocks'),
  value: 'large'
}];
var alignBottom = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"
}));
var alignCenter = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"
}));
var alignTop = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"
}));
var alignmentsControls = {
  top: {
    icon: alignTop,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])('Vertically Align Top', 'Block vertical alignment setting')
  },
  center: {
    icon: alignCenter,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])('Vertically Align Middle', 'Block vertical alignment setting')
  },
  bottom: {
    icon: alignBottom,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])('Vertically Align Bottom', 'Block vertical alignment setting')
  }
};

/***/ }),

/***/ "./blocks/balloon/edit.js":
/*!********************************!*\
  !*** ./blocks/balloon/edit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./blocks/balloon/config.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function ysBalloon(props) {
  var _classnames, _classnames4, _classnames5, _classnames6;

  var textColor = props.textColor,
      backgroundColor = props.backgroundColor,
      balloonBorderColor = props.balloonBorderColor,
      avatarNameColor = props.avatarNameColor,
      avatarBorderColor = props.avatarBorderColor,
      setTextColor = props.setTextColor,
      setBackgroundColor = props.setBackgroundColor,
      setBalloonBorderColor = props.setBalloonBorderColor,
      setAvatarNameColor = props.setAvatarNameColor,
      setAvatarBorderColor = props.setAvatarBorderColor,
      attributes = props.attributes,
      setAttributes = props.setAttributes,
      fontSize = props.fontSize,
      setFontSize = props.setFontSize,
      className = props.className,
      isSelected = props.isSelected;
  var avatarName = attributes.avatarName,
      avatarURL = attributes.avatarURL,
      avatarAlt = attributes.avatarAlt,
      avatarID = attributes.avatarID,
      avatarSize = attributes.avatarSize,
      avatarBorderWidth = attributes.avatarBorderWidth,
      avatarBorderRadius = attributes.avatarBorderRadius,
      text = attributes.text,
      balloonPosition = attributes.balloonPosition,
      balloonType = attributes.balloonType,
      verticalAlign = attributes.verticalAlign;
  var ALLOWED_MEDIA_TYPES = ['image'];
  var DEFAULT_CONTROLS = ['top', 'center', 'bottom'];
  var DEFAULT_CONTROL = 'top';
  var activeAlignment = _config__WEBPACK_IMPORTED_MODULE_3__["alignmentsControls"][verticalAlign];
  var defaultAlignmentControl = _config__WEBPACK_IMPORTED_MODULE_3__["alignmentsControls"][DEFAULT_CONTROL];

  var _select$getSettings = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["select"])('core/block-editor').getSettings(),
      colors = _select$getSettings.colors;

  var wrapClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'ystdb-balloon', (_classnames = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "is-vertically-aligned-".concat(verticalAlign), verticalAlign), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "is-balloon-position-".concat(balloonPosition), balloonPosition), _classnames));
  /**
   * アバター画像カラムクラス
   *
   * @type {string}
   */

  var avatarWrapClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-balloon__avatar', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "is-size-".concat(avatarSize), avatarSize));
  /**
   * アバター名クラス
   *
   * @type {string}
   */

  var avatarNameClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-balloon__name', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
    'has-text-color': avatarNameColor.color
  }, avatarNameColor.class, avatarNameColor.class));
  /**
   * アバター名スタイル
   *
   * @type {{color: *}}
   */

  var avatarNameStyles = {
    color: avatarNameColor.color
  };
  /**
   * アバター画像クラス
   *
   * @type {string}
   */

  var avatarClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-balloon__avatar-image', (_classnames4 = {
    'has-border-color': avatarBorderColor.color
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames4, avatarBorderColor.class, avatarBorderColor.class), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames4, 'has-border', 0 < avatarBorderWidth), _classnames4));
  /**
   * アバター画像スタイル
   *
   * @type {{borderColor: *}}
   */

  var avatarStyle = {
    borderColor: avatarBorderColor.color,
    borderWidth: 0 < avatarBorderWidth ? avatarBorderWidth : undefined,
    borderRadius: avatarBorderRadius
  };
  /**
   * 吹き出しクラス
   *
   * @type {string}
   */

  var balloonBodyClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-balloon__body', (_classnames5 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames5, backgroundColor.class, backgroundColor.class), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames5, balloonBorderColor.class, balloonBorderColor.class), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames5, 'has-background', backgroundColor.color), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames5, "is-".concat(verticalAlign), verticalAlign), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames5, "is-".concat(balloonPosition), balloonPosition), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames5, "is-".concat(balloonType), balloonType), _classnames5));
  /**
   * 吹き出しスタイル
   *
   * @type {{backgroundColor: *}}
   */

  var balloonBodyStyles = {
    backgroundColor: backgroundColor.color,
    borderColor: balloonBorderColor.color
  };
  /**
   * 吹き出しテキストクラス
   *
   * @type {string}
   */

  var textClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-ystdb-balloon__text', (_classnames6 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames6, textColor.class, textColor.class), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames6, 'has-text-color', textColor.color), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames6, fontSize.class, fontSize.class), _classnames6));
  /**
   * 吹き出しテキストスタイル
   *
   * @type {{color: (*), fontSize: (string|*)}}
   */

  var textStyles = {
    color: textColor.color,
    fontSize: fontSize.size ? fontSize.size + 'px' : undefined
  };
  /**
   * 画像設定コントロール
   *
   * @param {Object} obj
   */

  var mediaUploadRender = function mediaUploadRender(obj) {
    if (!avatarURL || _config__WEBPACK_IMPORTED_MODULE_3__["defaultAvatar"] === avatarURL) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: avatarClasses,
        style: avatarStyle
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        onClick: obj.open,
        className: 'ystdb-mediaupload__preview is-no-image'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        src: _config__WEBPACK_IMPORTED_MODULE_3__["defaultAvatar"],
        alt: ''
      })));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: avatarClasses,
      style: avatarStyle
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onClick: function onClick() {
        setAttributes({
          avatarID: 0,
          avatarURL: '',
          avatarAlt: ''
        });
      },
      className: 'ystdb-mediaupload__preview is-show-text',
      style: {
        padding: 0
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: avatarURL,
      alt: avatarAlt
    })));
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Toolbar"], {
    isCollapsed: true,
    icon: activeAlignment ? activeAlignment.icon : defaultAlignmentControl.icon,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["_x"])('Change vertical alignment', 'Block vertical alignment setting label'),
    controls: DEFAULT_CONTROLS.map(function (control) {
      return _objectSpread({}, _config__WEBPACK_IMPORTED_MODULE_3__["alignmentsControls"][control], {
        isActive: verticalAlign === control,
        onClick: function onClick() {
          return setAttributes({
            verticalAlign: verticalAlign === control ? undefined : control
          });
        }
      });
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('吹き出し設定', 'ystandard-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('吹き出しの位置', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'ystdb-balloon-selector'
  }, _config__WEBPACK_IMPORTED_MODULE_3__["balloonPositions"].map(function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      key: item.value,
      isDefault: true,
      isPrimary: balloonPosition === item.value,
      onClick: function onClick() {
        setAttributes({
          balloonPosition: item.value
        });
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      className: "ystdb-balloon-selector__container is-".concat(item.value, " is-").concat(balloonType)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      className: 'ystdb-balloon-selector__image'
    }, ' '), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      className: 'ystdb-balloon-selector__body'
    }, item.label)));
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('吹き出しタイプ', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'ystdb-balloon-selector'
  }, _config__WEBPACK_IMPORTED_MODULE_3__["balloonTypes"].map(function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      key: item.value,
      isDefault: true,
      isPrimary: balloonType === item.value,
      onClick: function onClick() {
        setAttributes({
          balloonType: item.value
        });
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      className: "ystdb-balloon-selector__container is-".concat(item.value, " is-").concat(balloonPosition)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      className: 'ystdb-balloon-selector__image'
    }, ' '), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      className: 'ystdb-balloon-selector__body'
    }, item.label)));
  })))), '1' === ystdb.yStandard && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('登録済みアバター画像', 'ystandard-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], null, 0 >= ystdb.balloonImages.length ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "\u767B\u9332\u6E08\u307F\u306E\u30A2\u30D0\u30BF\u30FC\u753B\u50CF\u306F\u3042\u308A\u307E\u305B\u3093\u3002"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "\u30AB\u30B9\u30BF\u30DE\u30A4\u30B6\u30FC\u306E\u300C[ys]\u62E1\u5F35\u6A5F\u80FD\u8A2D\u5B9A\u300D\u2192\u300C[ys blocks]\u5439\u304D\u51FA\u3057\u30D6\u30ED\u30C3\u30AF\u753B\u50CF\u8A2D\u5B9A\u300D\u304B\u3089\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044\u3002")) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'ystdb-avatar-list'
  }, ystdb.balloonImages.map(function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      key: item.id,
      isPrimary: avatarID === item.id && avatarName === item.name,
      onClick: function onClick() {
        setAttributes({
          avatarID: item.id,
          avatarName: item.name,
          avatarURL: item.url,
          avatarAlt: item.name
        });
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      className: 'ystdb-avatar-list__image',
      src: item.url,
      alt: item.name
    }), !!item.name && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      className: 'ystdb-avatar-list__name'
    }, item.name)));
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('アバター設定', 'ystandard-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('アバターサイズ', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'ystdb-btn-selector components-base-control'
  }, _config__WEBPACK_IMPORTED_MODULE_3__["avatarSizes"].map(function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      key: item.value,
      isDefault: true,
      isPrimary: avatarSize === item.value,
      onClick: function onClick() {
        setAttributes({
          avatarSize: item.value
        });
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, item.label));
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    value: avatarBorderRadius,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('アバター画像の角丸', 'ystandard-blocks'),
    min: 0,
    max: 40,
    initialPosition: 40,
    allowReset: true,
    onChange: function onChange(value) {
      setAttributes({
        avatarBorderRadius: value
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    value: avatarBorderWidth,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('アバター画像の枠線太さ', 'ystandard-blocks'),
    min: 0,
    max: 10,
    initialPosition: 0,
    allowReset: true,
    onChange: function onChange(value) {
      setAttributes({
        avatarBorderWidth: value
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('アバター画像枠色', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    colors: colors,
    disableCustomColors: false,
    onChange: function onChange(color) {
      setAvatarBorderColor(color);
    },
    value: avatarBorderColor.color
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('アバター名文字色', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    colors: colors,
    disableCustomColors: false,
    onChange: function onChange(color) {
      setAvatarNameColor(color);
    },
    value: avatarNameColor.color
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('テキスト設定', 'ystandard-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('文字サイズ', 'ystandard-blocks'),
    value: fontSize.size,
    onChange: function onChange(font) {
      setFontSize(font);
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('吹き出し背景色', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    colors: colors,
    disableCustomColors: false,
    onChange: function onChange(color) {
      setBackgroundColor(color);
      setBalloonBorderColor(color);
    },
    value: backgroundColor.color
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('吹き出し文字色', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    colors: colors,
    disableCustomColors: false,
    onChange: function onChange(color) {
      setTextColor(color);
    },
    value: textColor.color
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ContrastChecker"], {
    backgroundColor: backgroundColor.color,
    textColor: textColor.color
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: wrapClasses
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", {
    className: avatarWrapClasses
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["MediaUpload"], {
    onSelect: function onSelect(media) {
      setAttributes({
        avatarURL: media.url,
        avatarID: media.id,
        avatarAlt: media.alt
      });
    },
    type: ALLOWED_MEDIA_TYPES,
    value: avatarID,
    render: mediaUploadRender
  }), (isSelected || avatarName) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figcaption", {
    className: avatarNameClass
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["PlainText"], {
    value: avatarName,
    className: 'ystdb-balloon__name--edit',
    onChange: function onChange(value) {
      setAttributes({
        avatarName: value
      });
    },
    style: avatarNameStyles,
    placeholder: '名前...',
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Name')
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: balloonBodyClass,
    style: balloonBodyStyles
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
    tagName: 'p',
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Add text…'),
    value: text,
    onChange: function onChange(value) {
      return setAttributes({
        text: value
      });
    },
    withoutInteractiveFormatting: true,
    className: textClasses,
    style: textStyles
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__["compose"])([Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["withColors"])('backgroundColor', {
  textColor: 'color',
  avatarNameColor: 'color',
  avatarBorderColor: 'borderColor',
  balloonBorderColor: 'borderColor'
}), Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["withFontSizes"])('fontSize')])(ysBalloon));

/***/ }),

/***/ "./blocks/balloon/index.js":
/*!*********************************!*\
  !*** ./blocks/balloon/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_js_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/js/config/config */ "./src/js/config/config.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/balloon/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./blocks/balloon/save.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./blocks/balloon/config.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_deprecated */ "./blocks/balloon/_deprecated.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);







Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__["registerBlockType"])('ystdb/balloon', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('[ys]吹き出し', 'ystandard-blocks'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('yStandard Blocks 吹き出しブロック', 'ystandard-blocks'),
  icon: {
    src: 'format-chat',
    foreground: _src_js_config_config__WEBPACK_IMPORTED_MODULE_0__["ystdbConfig"].color.iconForeground
  },
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('balloon'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('吹き出し'), 'balloon'],
  category: _src_js_config_config__WEBPACK_IMPORTED_MODULE_0__["ystdbConfig"].category.common,
  attributes: _config__WEBPACK_IMPORTED_MODULE_3__["attributes"],
  supports: _config__WEBPACK_IMPORTED_MODULE_3__["supports"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_4__["deprecated"]
});

/***/ }),

/***/ "./blocks/balloon/save.js":
/*!********************************!*\
  !*** ./blocks/balloon/save.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




function save(_ref) {
  var _classnames, _classnames3, _classnames4, _classnames5, _classnames6;

  var attributes = _ref.attributes;
  var className = attributes.className,
      textColor = attributes.textColor,
      customTextColor = attributes.customTextColor,
      backgroundColor = attributes.backgroundColor,
      customBackgroundColor = attributes.customBackgroundColor,
      balloonBorderColor = attributes.balloonBorderColor,
      customBalloonBorderColor = attributes.customBalloonBorderColor,
      avatarNameColor = attributes.avatarNameColor,
      customAvatarNameColor = attributes.customAvatarNameColor,
      avatarBorderColor = attributes.avatarBorderColor,
      customAvatarBorderColor = attributes.customAvatarBorderColor,
      fontSize = attributes.fontSize,
      customFontSize = attributes.customFontSize,
      avatarName = attributes.avatarName,
      avatarURL = attributes.avatarURL,
      avatarAlt = attributes.avatarAlt,
      avatarSize = attributes.avatarSize,
      avatarBorderWidth = attributes.avatarBorderWidth,
      avatarBorderRadius = attributes.avatarBorderRadius,
      text = attributes.text,
      balloonPosition = attributes.balloonPosition,
      balloonType = attributes.balloonType,
      verticalAlign = attributes.verticalAlign;
  var avatarNameColorClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('color', avatarNameColor);
  var avatarBorderColorClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('border-color', avatarBorderColor);
  var textClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('color', textColor);
  var fontSizeClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getFontSizeClass"])(fontSize);
  var backgroundColorClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('background-color', backgroundColor);
  var balloonBorderColorClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('border-color', balloonBorderColor);
  /**
   * 大枠
   *
   * @type {string}
   */

  var wrapClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'ystdb-balloon', (_classnames = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "is-vertically-aligned-".concat(verticalAlign), verticalAlign), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "is-balloon-position-".concat(balloonPosition), balloonPosition), _classnames));
  /**
   * アバター画像カラムクラス
   *
   * @type {string}
   */

  var avatarWrapClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-balloon__avatar', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "is-size-".concat(avatarSize), avatarSize));
  /**
   * アバター画像クラス
   *
   * @type {string}
   */

  var avatarClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-balloon__avatar-image', (_classnames3 = {
    'has-border-color': avatarBorderColorClass || customAvatarBorderColor
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames3, avatarBorderColorClass, avatarBorderColorClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames3, 'has-border', 0 < avatarBorderWidth), _classnames3));
  /**
   * アバター画像スタイル
   *
   * @type {{borderColor: *}}
   */

  var avatarStyle = {
    borderColor: customAvatarBorderColor,
    borderWidth: 0 < avatarBorderWidth ? avatarBorderWidth : undefined,
    borderRadius: avatarBorderRadius
  };
  /**
   * アバター画像ALT
   */

  var avatarAltText = avatarAlt ? avatarAlt : avatarName;
  /**
   * アバター名クラス
   *
   * @type {string}
   */

  var avatarNameClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-balloon__name', (_classnames4 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames4, avatarNameColorClass, avatarNameColorClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames4, 'has-text-color', customAvatarNameColor || avatarNameColorClass), _classnames4));
  /**
   * アバター名スタイル
   *
   * @type {{color: *}}
   */

  var avatarNameStyles = {
    color: customAvatarNameColor
  };
  /**
   * 吹き出しクラス
   *
   * @type {string}
   */

  var balloonBodyClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-balloon__body', (_classnames5 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames5, backgroundColorClass, backgroundColorClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames5, 'has-background', backgroundColorClass || customBackgroundColor), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames5, balloonBorderColorClass, balloonBorderColorClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames5, 'has-border-color', balloonBorderColorClass || customBalloonBorderColor), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames5, "is-".concat(verticalAlign), verticalAlign), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames5, "is-".concat(balloonPosition), balloonPosition), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames5, "is-".concat(balloonType), balloonType), _classnames5));
  /**
   * 吹き出しスタイル
   *
   * @type {{backgroundColor: *}}
   */

  var balloonBodyStyles = {
    backgroundColor: customBackgroundColor,
    borderColor: customBalloonBorderColor
  };
  /**
   * 吹き出しテキストクラス
   *
   * @type {string}
   */

  var textClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-balloon__text', (_classnames6 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames6, textClass, textClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames6, 'has-text-color', textColor || customTextColor), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames6, fontSizeClass, fontSizeClass), _classnames6));
  /**
   * 吹き出しテキストスタイル
   *
   * @type {{color: (*), fontSize: (string|*)}}
   */

  var textStyles = {
    color: textClass ? undefined : customTextColor,
    fontSize: !fontSizeClass && customFontSize ? customFontSize + 'px' : undefined
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: wrapClasses
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", {
    className: avatarWrapClasses
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
    className: avatarClasses,
    style: avatarStyle,
    src: avatarURL,
    alt: avatarAltText
  }), avatarName && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figcaption", {
    className: avatarNameClass,
    style: avatarNameStyles
  }, avatarName)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: balloonBodyClass,
    style: balloonBodyStyles
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: 'p',
    className: textClasses,
    style: textStyles,
    value: text
  })));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
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

/***/ "./src/js/config/config.js":
/*!*********************************!*\
  !*** ./src/js/config/config.js ***!
  \*********************************/
/*! exports provided: ystdbConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ystdbConfig", function() { return ystdbConfig; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

/**
 * 設定
 */

var ystdbConfig = {
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
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('小')
    }, {
      value: '',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('中')
    }, {
      value: 'is-large',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('大')
    }],
    animationTypes: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('なし', 'ystandard-blocks'),
      value: 'none'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('キラキラ', 'ystandard-blocks'),
      value: 'shine'
    }]
  },
  icon: {
    size: [{
      value: 'fa-xs',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('小')
    }, {
      value: '',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('中')
    }, {
      value: 'fa-2x',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('大')
    }]
  }
};

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=balloon.js.map