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
/******/ 	return __webpack_require__(__webpack_require__.s = "./block/section/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./block/section/_deprecated.js":
/*!**************************************!*\
  !*** ./block/section/_deprecated.js ***!
  \**************************************/
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
/* harmony import */ var _src_js_util_getNum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/js/util/_getNum */ "./src/js/util/_getNum.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);





var deprecated = [{
  attributes: {
    wrapperTag: {
      type: 'string',
      default: 'div'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    margin: {
      type: 'string',
      default: 'normal' //normal,wide,narrow

    },
    marginTop: {
      type: 'integer',
      default: 24
    },
    marginBottom: {
      type: 'integer',
      default: 24
    },
    padding: {
      type: 'string',
      default: 'normal' //normal,wide,narrow

    },
    paddingTop: {
      type: 'integer',
      default: 32
    },
    paddingBottom: {
      type: 'integer',
      default: 32
    },
    innerWidth: {
      type: 'string',
      default: 'normal' //normal,narrow

    },
    innerCustomWidth: {
      type: 'integer',
      default: 0
    }
  },
  migrate: function migrate(_ref) {
    var marginTop = _ref.marginTop,
        marginBottom = _ref.marginBottom,
        paddingTop = _ref.paddingTop,
        paddingBottom = _ref.paddingBottom;
    return {
      marginTop: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_3__["default"])(marginTop, -10, 10, 0),
      marginBottom: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_3__["default"])(marginBottom, -10, 10, 0),
      paddingTop: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_3__["default"])(paddingTop, 0, 10),
      paddingBottom: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_3__["default"])(paddingBottom, 0, 10)
    };
  },
  save: function save(props) {
    var _classnames;

    var attributes = props.attributes;
    var backgroundColor = attributes.backgroundColor,
        textColor = attributes.textColor,
        customBackgroundColor = attributes.customBackgroundColor,
        customTextColor = attributes.customTextColor,
        wrapperTag = attributes.wrapperTag,
        marginTop = attributes.marginTop,
        marginBottom = attributes.marginBottom,
        paddingTop = attributes.paddingTop,
        paddingBottom = attributes.paddingBottom,
        innerCustomWidth = attributes.innerCustomWidth;
    var Wrapper = wrapperTag;
    var textClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["getColorClassName"])('color', textColor);
    var backgroundClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["getColorClassName"])('background-color', backgroundColor);
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section', (_classnames = {
      'has-text-color': textColor || customTextColor
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, textClass, textClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-background', backgroundColor || customBackgroundColor), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundClass, backgroundClass), _classnames));
    var innerClasses = 'ystdb-section__inner';
    var sectionStyles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      'margin-top': marginTop,
      'margin-bottom': marginBottom,
      'padding-top': paddingTop,
      'padding-bottom': paddingBottom
    };
    var innerStyles = {
      'max-width': innerCustomWidth !== 0 ? innerCustomWidth : undefined,
      'margin-right': 'auto',
      'margin-left': 'auto'
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classes,
      style: sectionStyles
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Wrapper, {
      className: innerClasses,
      style: innerStyles
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"].Content, null)));
  }
}];

/***/ }),

/***/ "./block/section/config.js":
/*!*********************************!*\
  !*** ./block/section/config.js ***!
  \*********************************/
/*! exports provided: attributes, supports, marginType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supports", function() { return supports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginType", function() { return marginType; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

/**
 * attributes
 */

var attributes = {
  wrapperTag: {
    type: 'string',
    default: 'div'
  },
  backgroundColor: {
    type: 'string'
  },
  customBackgroundColor: {
    type: 'string'
  },
  textColor: {
    type: 'string'
  },
  customTextColor: {
    type: 'string'
  },
  marginTop: {
    type: 'number',
    default: 2
  },
  marginBottom: {
    type: 'number',
    default: 2
  },
  paddingTop: {
    type: 'number',
    default: 3
  },
  paddingBottom: {
    type: 'number',
    default: 3
  },
  paddingLeft: {
    type: 'number',
    default: 0
  },
  paddingRight: {
    type: 'number',
    default: 0
  },
  innerCustomWidth: {
    type: 'integer',
    default: 960
  },
  backgroundImageURL: {
    type: 'string'
  },
  backgroundImageAlt: {
    type: 'string'
  },
  backgroundImageID: {
    type: 'integer',
    default: 0
  },
  backgroundImageOpacity: {
    type: 'integer',
    default: 50
  },
  backgroundSkew: {
    type: 'number',
    default: 0
  },
  backgroundSkewWidth: {
    type: 'number',
    default: 90
  }
};
var supports = {
  align: ['wide', 'full'],
  anchor: true,
  className: false
};
/**
 * マージン種類
 */

var marginType = {
  margin: [{
    value: 'normal',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('リセット'),
    num: 2
  }, {
    value: 'wide',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('大'),
    num: 4
  }, {
    value: 'narrow',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('小'),
    num: 1
  }, {
    value: 'none',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('なし'),
    num: 0
  }],
  padding: [{
    value: 'normal',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('リセット'),
    num: 3
  }, {
    value: 'wide',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('大'),
    num: 5
  }, {
    value: 'narrow',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('小'),
    num: 1
  }, {
    value: 'none',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('なし'),
    num: 0
  }],
  innerWidth: [{
    value: 'wide',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('ワイド'),
    num: 1232
  }, {
    value: 'narrow',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('スリム'),
    num: 560
  }, {
    value: 'none',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('なし'),
    num: 0
  }]
};

/***/ }),

/***/ "./block/section/edit.js":
/*!*******************************!*\
  !*** ./block/section/edit.js ***!
  \*******************************/
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./block/section/config.js");
/* harmony import */ var _src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/js/util/_getNum */ "./src/js/util/_getNum.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);











var sectionEdit = function sectionEdit(props) {
  var _classnames;

  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      backgroundColor = props.backgroundColor,
      textColor = props.textColor,
      setBackgroundColor = props.setBackgroundColor,
      setTextColor = props.setTextColor;
  var wrapperTag = attributes.wrapperTag,
      marginTop = attributes.marginTop,
      marginBottom = attributes.marginBottom,
      paddingTop = attributes.paddingTop,
      paddingBottom = attributes.paddingBottom,
      paddingLeft = attributes.paddingLeft,
      paddingRight = attributes.paddingRight,
      backgroundImageURL = attributes.backgroundImageURL,
      backgroundImageAlt = attributes.backgroundImageAlt,
      backgroundImageID = attributes.backgroundImageID,
      backgroundImageOpacity = attributes.backgroundImageOpacity,
      backgroundSkew = attributes.backgroundSkew,
      backgroundSkewWidth = attributes.backgroundSkewWidth,
      innerCustomWidth = attributes.innerCustomWidth;
  var rangeStep = 0.5;
  /**
   * HTMLタグ
   */

  var wrapperTagNames = [{
    tag: 'div'
  }, {
    tag: 'section'
  }, {
    tag: 'aside'
  }];
  var Wrapper = wrapperTag;
  /**
   * 背景画像関連
   */

  var ALLOWED_MEDIA_TYPES = ['image'];
  var hasBackgroundImage = backgroundImageURL && !backgroundSkew;
  var hasBackgroundDim = backgroundImageURL && !backgroundSkew;
  var backgroundDimClass = 'has-background-dim-' + 10 * Math.round(backgroundImageOpacity / 10);
  /**
   * メインクラス名
   */

  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section', (_classnames = {
    'has-background': backgroundColor.color
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundColor.class, backgroundColor.class), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-text-color', textColor.color), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, textColor.class, textColor.class), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-background-image', hasBackgroundImage), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-background-dim', hasBackgroundDim), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundDimClass, hasBackgroundDim), _classnames));
  /**
   * インナーブロックのクラス名
   */

  var innerClasses = 'ystdb-section__inner';
  /**
   * 編集画面のラッパースタイル
   */

  var editWrapStyle = {
    paddingTop: 0 === marginTop ? 0 : marginTop + 'rem',
    paddingBottom: 0 === marginBottom ? 0 : marginBottom + 'rem'
  };
  /**
   * セクションスタイル
   */

  var sectionStyles = {
    backgroundColor: backgroundColor.color && !backgroundSkew ? backgroundColor.color : undefined,
    color: textColor.color,
    paddingTop: 0 === paddingTop ? 0 : paddingTop + 'rem',
    paddingBottom: 0 === paddingBottom ? 0 : paddingBottom + 'rem',
    backgroundImage: hasBackgroundImage ? "url(\"".concat(backgroundImageURL, "\")") : undefined,
    paddingLeft: '1rem',
    paddingRight: '1rem'
  };
  /**
   * インナーのスタイル
   */

  var innerStyles = {
    maxWidth: innerCustomWidth !== 0 ? innerCustomWidth : undefined,
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingLeft: 0 === paddingLeft ? 0 : paddingLeft + 'rem',
    paddingRight: 0 === paddingRight ? 0 : paddingRight + 'rem'
  };
  /**
   * 画像設定コントロール
   *
   * @param {Object} obj
   */

  var mediaUploadRender = function mediaUploadRender(obj) {
    if (0 === backgroundImageID) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        isDefault: true,
        onClick: obj.open
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('背景画像を選択', 'ystandard-blocks'));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onClick: obj.open,
      className: 'ystdb-mediaupload__preview',
      style: {
        padding: 0
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: backgroundImageURL,
      alt: backgroundImageAlt
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      isDefault: true,
      onClick: function onClick() {
        setAttributes({
          backgroundImageURL: '',
          backgroundImageID: 0
        });
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('背景画像をクリア', 'ystandard-blocks')));
  };
  /**
   * 背景斜めのマスク
   */


  var skewMask = function skewMask() {
    if (backgroundSkew) {
      var backgroundSkewValue = backgroundSkew + 'deg';
      var skewStyle = {
        height: backgroundSkewWidth ? backgroundSkewWidth + '%' : undefined,
        backgroundColor: backgroundColor.color,
        transform: "skewY(".concat(backgroundSkewValue, ") translateY(-50%)")
      };
      var skewClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__mask');
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: skewClass,
        style: skewStyle
      });
    }
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspectorcontrols"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('余白設定', 'ystandard-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('余白設定(外側)', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-info__label"
  }, "\u304B\u3093\u305F\u3093\u8A2D\u5B9A"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'ystdb-btn-selector components-base-control'
  }, _config__WEBPACK_IMPORTED_MODULE_3__["marginType"].margin.map(function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      key: item.value,
      isDefault: true,
      onClick: function onClick() {
        setAttributes({
          marginTop: item.num,
          marginBottom: item.num
        });
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, item.label));
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('上側', 'ystandard-blocks'),
    value: marginTop,
    onChange: function onChange(value) {
      return setAttributes({
        marginTop: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, -10, 10, 0)
      });
    },
    min: -10,
    max: 10,
    step: rangeStep
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('下側', 'ystandard-blocks'),
    value: marginBottom,
    onChange: function onChange(value) {
      return setAttributes({
        marginBottom: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, -10, 10, 0)
      });
    },
    min: -10,
    max: 10,
    step: rangeStep
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ystdb-info__small"
  }, "\u203B\u6570\u5B57\u304C\u5927\u304D\u3044\u307B\u3069\u4F59\u767D\u304C\u5927\u304D\u304F\u306A\u308A\u307E\u3059\u3002"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ystdb-info__small"
  }, "\u203B\u5358\u4F4D\u306Frem\u3067\u3059\u3002"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('余白設定(内側)', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-info__label"
  }, "\u304B\u3093\u305F\u3093\u8A2D\u5B9A"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'ystdb-btn-selector components-base-control'
  }, _config__WEBPACK_IMPORTED_MODULE_3__["marginType"].padding.map(function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      key: item.value,
      isDefault: true,
      onClick: function onClick() {
        setAttributes({
          paddingTop: item.num,
          paddingBottom: item.num
        });
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, item.label));
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ystdb-info__small"
  }, "\u203B\u4E0A\u4E0B\u4F59\u767D\u306E\u304B\u3093\u305F\u3093\u8A2D\u5B9A"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('上側', 'ystandard-blocks'),
    value: paddingTop,
    onChange: function onChange(value) {
      return setAttributes({
        paddingTop: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, 0, 10)
      });
    },
    min: 0,
    max: 10,
    step: rangeStep
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('下側', 'ystandard-blocks'),
    value: paddingBottom,
    onChange: function onChange(value) {
      return setAttributes({
        paddingBottom: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, 0, 10)
      });
    },
    min: 0,
    max: 10,
    step: rangeStep
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('左側', 'ystandard-blocks'),
    value: paddingLeft,
    onChange: function onChange(value) {
      return setAttributes({
        paddingLeft: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, 0, 5)
      });
    },
    min: 0,
    max: 5,
    step: rangeStep
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('右側', 'ystandard-blocks'),
    value: paddingRight,
    onChange: function onChange(value) {
      return setAttributes({
        paddingRight: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, 0, 5)
      });
    },
    min: 0,
    max: 5,
    step: rangeStep
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ystdb-info__small"
  }, "\u203B\u6570\u5B57\u304C\u5927\u304D\u3044\u307B\u3069\u4F59\u767D\u304C\u5927\u304D\u304F\u306A\u308A\u307E\u3059\u3002"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ystdb-info__small"
  }, "\u203B\u5358\u4F4D\u306Frem\u3067\u3059\u3002")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('セクションコンテンツ幅設定', 'ystandard-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-info__label"
  }, "\u304B\u3093\u305F\u3093\u8A2D\u5B9A"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'ystdb-btn-selector components-base-control'
  }, _config__WEBPACK_IMPORTED_MODULE_3__["marginType"].innerWidth.map(function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      key: item.value,
      isDefault: true,
      onClick: function onClick() {
        setAttributes({
          innerCustomWidth: item.num
        });
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, item.label));
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('コンテンツ部分の最大幅', 'ystandard-blocks'),
    value: innerCustomWidth,
    onChange: function onChange(value) {
      return setAttributes({
        innerCustomWidth: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, 0, 1920, 960)
      });
    },
    min: 0,
    max: 1920,
    step: 16,
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ystdb-info__small"
  }, "\u203B\u6700\u5927\u5E45\u6307\u5B9A\u306A\u3057\u306B\u3057\u305F\u3044\u5834\u54080\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('HTMLタグ設定', 'ystandard-blocks'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ystdb-info__small"
  }, "\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u56F2\u3080HTML\u30BF\u30B0\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'ystdb-btn-selector components-base-control'
  }, wrapperTagNames.map(function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      key: item.tag,
      isDefault: true,
      isPrimary: wrapperTag === item.tag,
      onClick: function onClick() {
        setAttributes({
          wrapperTag: item.tag
        });
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, item.tag));
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('背景画像設定', 'ystandard-blocks'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["MediaUpload"], {
    onSelect: function onSelect(media) {
      setAttributes({
        backgroundImageURL: media.url,
        backgroundImageID: media.id,
        backgroundImageAlt: media.alt
      });
    },
    type: ALLOWED_MEDIA_TYPES,
    value: backgroundImageID,
    render: mediaUploadRender
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('画像の上に重ねる色の濃さ', 'ystandard-blocks'),
    value: backgroundImageOpacity,
    onChange: function onChange(value) {
      return setAttributes({
        backgroundImageOpacity: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, 0, 100)
      });
    },
    min: 0,
    max: 100,
    step: 10
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ystdb-info__small"
  }, "\u203B\u6570\u5024\u304C\u5927\u304D\u3044\u307B\u3069\u80CC\u666F\u753B\u50CF\u304C\u898B\u3048\u3065\u3089\u304F\u306A\u308A\u307E\u3059\u3002"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ystdb-info__small"
  }, "\u203B\u753B\u50CF\u306E\u4E0A\u306B\u91CD\u306D\u308B\u8272\u306F\u3001\u8272\u8A2D\u5B9A\u306E\u300C\u80CC\u666F\u8272\u300D\u3067\u5909\u66F4\u3067\u304D\u307E\u3059\u3002"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('背景の傾き設定', 'ystandard-blocks'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ystdb-info__small ystdb-info__bold"
  }, "\u203B\u50BE\u304D\u306E\u8A2D\u5B9A\u3092\u3059\u308B\u5834\u5408\u3001\u80CC\u666F\u753B\u50CF\u8A2D\u5B9A\u304C\u7121\u8996\u3055\u308C\u307E\u3059\u3002")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('背景の傾き具合', 'ystandard-blocks'),
    value: backgroundSkew,
    onChange: function onChange(value) {
      return setAttributes({
        backgroundSkew: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, -3, 3, 0)
      });
    },
    min: -3,
    max: 3,
    step: 0.5,
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('背景の太さ', 'ystandard-blocks'),
    value: backgroundSkewWidth,
    onChange: function onChange(value) {
      return setAttributes({
        backgroundSkewWidth: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, 70, 100, 90)
      });
    },
    min: 70,
    max: 100,
    step: 1,
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ystdb-info__small"
  }, "\u203B\u30B3\u30F3\u30C6\u30F3\u30C4\u304C\u306F\u307F\u51FA\u308B\u30FB\u4F59\u767D\u304C\u5C11\u306A\u304F\u611F\u3058\u308B\u5834\u5408\u3001\u300C\u80CC\u666F\u306E\u592A\u3055\u300D\u3068\u300C\u4F59\u767D\u8A2D\u5B9A(\u5185\u5074)\u300D\u306E\u4E0A\u4E0B\u3092\u5927\u304D\u304F\u3057\u3066\u8ABF\u6574\u3057\u3066\u4E0B\u3055\u3044\u3002"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ystdb-info__small"
  }, "\u203B\u80CC\u666F\u8272\u306F\u3001\u8272\u8A2D\u5B9A\u306E\u300C\u80CC\u666F\u8272\u300D\u3067\u5909\u66F4\u3067\u304D\u307E\u3059\u3002"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["PanelColorSettings"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Color Settings'),
    initialOpen: true,
    colorSettings: [{
      value: backgroundColor.color,
      onChange: function onChange(color) {
        setBackgroundColor(color);
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Background Color')
    }, {
      value: textColor.color,
      onChange: function onChange(color) {
        setTextColor(color);
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Text Color')
    }]
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["ContrastChecker"], {
    backgroundColor: backgroundColor.color,
    textColor: textColor.color
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'ystdb-section__edit-wrap',
    style: editWrapStyle
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classes,
    style: sectionStyles
  }, skewMask(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Wrapper, {
    className: innerClasses,
    style: innerStyles
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"], null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__["compose"])([Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["withColors"])('backgroundColor', {
  textColor: 'color'
})])(sectionEdit));

/***/ }),

/***/ "./block/section/index.js":
/*!********************************!*\
  !*** ./block/section/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_js_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/js/config/config */ "./src/js/config/config.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./block/section/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./block/section/save.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./block/section/config.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_deprecated */ "./block/section/_deprecated.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);







Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__["registerBlockType"])('ystdb/section', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('[ys]セクション', 'ystandard-blocks'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('yStandard Blocks汎用セクションブロック', 'ystandard-blocks'),
  icon: {
    src: 'screenoptions',
    foreground: _src_js_config_config__WEBPACK_IMPORTED_MODULE_0__["ystdbConfig"].color.iconForeground
  },
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('section'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('セクション'), 'section'],
  category: _src_js_config_config__WEBPACK_IMPORTED_MODULE_0__["ystdbConfig"].category.common,
  attributes: _config__WEBPACK_IMPORTED_MODULE_3__["attributes"],
  supports: _config__WEBPACK_IMPORTED_MODULE_3__["supports"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_4__["deprecated"]
});

/***/ }),

/***/ "./block/section/save.js":
/*!*******************************!*\
  !*** ./block/section/save.js ***!
  \*******************************/
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




function save(props) {
  var _classnames;

  var attributes = props.attributes;
  var backgroundColor = attributes.backgroundColor,
      textColor = attributes.textColor,
      customBackgroundColor = attributes.customBackgroundColor,
      customTextColor = attributes.customTextColor,
      wrapperTag = attributes.wrapperTag,
      marginTop = attributes.marginTop,
      marginBottom = attributes.marginBottom,
      paddingTop = attributes.paddingTop,
      paddingBottom = attributes.paddingBottom,
      paddingLeft = attributes.paddingLeft,
      paddingRight = attributes.paddingRight,
      backgroundImageURL = attributes.backgroundImageURL,
      backgroundImageOpacity = attributes.backgroundImageOpacity,
      backgroundSkew = attributes.backgroundSkew,
      backgroundSkewWidth = attributes.backgroundSkewWidth,
      innerCustomWidth = attributes.innerCustomWidth;
  /**
   * HTMLタグ
   */

  var Wrapper = wrapperTag;
  /**
   * 色設定
   */

  var textClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('color', textColor);
  var backgroundClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('background-color', backgroundColor);
  /**
   * 背景関連
   */

  var hasBackground = (backgroundColor || customBackgroundColor) && !backgroundSkew;
  var hasBackgroundClass = backgroundClass && !backgroundSkew;
  var hasBackgroundImage = backgroundImageURL && !backgroundSkew;
  var hasBackgroundDim = backgroundImageURL && !backgroundSkew;
  var backgroundDimClass = 'has-background-dim-' + 10 * Math.round(backgroundImageOpacity / 10);
  /**
   * メインクラス名
   */

  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section', (_classnames = {
    'has-text-color': textColor || customTextColor
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, textClass, textClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-background', hasBackground), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundClass, hasBackgroundClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-background-image', hasBackgroundImage), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-background-dim', hasBackgroundDim), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundDimClass, hasBackgroundDim), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-background-skew', backgroundSkew), _classnames));
  /**
   * インナーブロックのクラス名
   */

  var innerClasses = 'ystdb-section__inner';
  /**
   * セクションスタイル
   */

  var sectionStyles = {
    backgroundColor: backgroundClass || backgroundSkew ? undefined : customBackgroundColor,
    color: textClass ? undefined : customTextColor,
    marginTop: 0 === marginTop ? 0 : marginTop + 'rem',
    marginBottom: 0 === marginBottom ? 0 : marginBottom + 'rem',
    paddingTop: 0 === paddingTop ? 0 : paddingTop + 'rem',
    paddingBottom: 0 === paddingBottom ? 0 : paddingBottom + 'rem',
    backgroundImage: hasBackgroundImage ? "url(\"".concat(backgroundImageURL, "\")") : undefined,
    paddingLeft: '1rem',
    paddingRight: '1rem'
  };
  /**
   * インナーのスタイル
   */

  var innerStyles = {
    maxWidth: innerCustomWidth !== 0 ? innerCustomWidth : undefined,
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingLeft: 0 === paddingLeft ? 0 : paddingLeft + 'rem',
    paddingRight: 0 === paddingRight ? 0 : paddingRight + 'rem'
  };
  /**
   * 背景斜めのマスク
   */

  var skewMask = function skewMask() {
    if (backgroundSkew) {
      var backgroundSkewValue = backgroundSkew + 'deg';
      var skewStyle = {
        height: backgroundSkewWidth ? backgroundSkewWidth + '%' : undefined,
        backgroundColor: backgroundClass ? undefined : customBackgroundColor,
        transform: "skewY(".concat(backgroundSkewValue, ") translateY(-50%)")
      };
      var skewClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__mask', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
        'has-background': backgroundColor || customBackgroundColor
      }, backgroundClass, backgroundClass));
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: skewClass,
        style: skewStyle
      });
    }
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classes,
    style: sectionStyles
  }, skewMask(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Wrapper, {
    className: innerClasses,
    style: innerStyles
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null)));
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
    pro: 'ystdb_pro',
    beta: 'ystdb_beta'
  },
  color: {
    iconForeground: '#4190be'
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

/***/ "./src/js/util/_getNum.js":
/*!********************************!*\
  !*** ./src/js/util/_getNum.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNum; });
/**
 * 数字変換
 *
 * @param {string} value
 * @param {number} min
 * @param {number} max
 * @param {number} defaultNum
 */
function getNum(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var defaultNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  value = Number(value);

  if (isNaN(value) || value < min) {
    if (null !== defaultNum) {
      value = defaultNum;
    } else {
      value = min;
    }
  }

  if (null !== max && value > max) {
    value = max;
  }

  return value;
}

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
//# sourceMappingURL=section.js.map