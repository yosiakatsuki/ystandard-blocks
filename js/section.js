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



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




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
  },
  supports: {
    align: ['wide', 'full'],
    anchor: true,
    className: false
  },
  migrate: function migrate(attributes) {
    return _objectSpread({}, attributes, {
      dividerLevelTop: attributes.backgroundSkew,
      dividerLevelBottom: attributes.backgroundSkew,
      animationType: 'none',
      animationSpeed: 3,
      backgroundImageParallax: false
    });
  },
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
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

    var textClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["getColorClassName"])('color', textColor);
    var backgroundClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["getColorClassName"])('background-color', backgroundColor);
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
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"].Content, null)));
  }
}, {
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
      default: 'normal'
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
      default: 'normal'
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
      default: 'normal'
    },
    innerCustomWidth: {
      type: 'integer',
      default: 0
    }
  },
  migrate: function migrate(_ref2) {
    var marginTop = _ref2.marginTop,
        marginBottom = _ref2.marginBottom,
        paddingTop = _ref2.paddingTop,
        paddingBottom = _ref2.paddingBottom;
    return {
      marginTop: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_3__["default"])(marginTop, -10, 10, 0),
      marginBottom: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_3__["default"])(marginBottom, -10, 10, 0),
      paddingTop: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_3__["default"])(paddingTop, 0, 10),
      paddingBottom: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_3__["default"])(paddingBottom, 0, 10)
    };
  },
  save: function save(props) {
    var _classnames3;

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
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section', (_classnames3 = {
      'has-text-color': textColor || customTextColor
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames3, textClass, textClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames3, 'has-background', backgroundColor || customBackgroundColor), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames3, backgroundClass, backgroundClass), _classnames3));
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
/*! exports provided: attributes, supports, marginType, wrapperTagNames, dividerTypes, animationTypes, dividerPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supports", function() { return supports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginType", function() { return marginType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapperTagNames", function() { return wrapperTagNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dividerTypes", function() { return dividerTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationTypes", function() { return animationTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dividerPath", function() { return dividerPath; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_js_util_getNum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/js/util/_getNum */ "./src/js/util/_getNum.js");


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
    default: 0
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
  backgroundImageParallax: {
    type: 'bool',
    default: false
  },
  screenHeightMode: {
    type: 'bool',
    default: false
  },
  sectionMinHeight: {
    type: 'number',
    default: 0
  },
  dividerTypeTop: {
    type: 'string',
    default: 'skew'
  },
  dividerLevelTop: {
    type: 'number',
    default: 0
  },
  dividerColorTop: {
    type: 'string'
  },
  customDividerColorTop: {
    type: 'string'
  },
  dividerTypeBottom: {
    type: 'string',
    default: 'skew'
  },
  dividerLevelBottom: {
    type: 'number',
    default: 0
  },
  dividerColorBottom: {
    type: 'string'
  },
  customDividerColorBottom: {
    type: 'string'
  },
  animationType: {
    type: 'string',
    default: 'none'
  },
  animationSpeed: {
    type: 'number',
    default: 3
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
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('リセット', 'ystandard-blocks'),
    num: 2
  }, {
    value: 'wide',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('大', 'ystandard-blocks'),
    num: 4
  }, {
    value: 'narrow',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('小', 'ystandard-blocks'),
    num: 1
  }, {
    value: 'none',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('なし', 'ystandard-blocks'),
    num: 0
  }],
  padding: [{
    value: 'normal',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('リセット', 'ystandard-blocks'),
    num: 3
  }, {
    value: 'wide',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('大', 'ystandard-blocks'),
    num: 5
  }, {
    value: 'narrow',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('小', 'ystandard-blocks'),
    num: 1
  }, {
    value: 'none',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('なし', 'ystandard-blocks'),
    num: 0
  }],
  innerWidth: [{
    value: 'wide',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('ワイド', 'ystandard-blocks'),
    num: 1232
  }, {
    value: 'narrow',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('スリム', 'ystandard-blocks'),
    num: 560
  }, {
    value: 'none',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('なし', 'ystandard-blocks'),
    num: 0
  }]
};
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
var dividerTypes = [{
  value: 'skew',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('斜め', 'ystandard-blocks')
}, {
  value: 'wave',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('波線', 'ystandard-blocks')
}, {
  value: 'triangle',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('三角形', 'ystandard-blocks')
}];
var animationTypes = [{
  label: 'なし',
  value: 'none'
}, {
  label: 'フェードイン',
  value: 'fadein'
}, {
  label: '下からフェードイン',
  value: 'fadein-up'
}, {
  label: '縮小しながらフェードイン',
  value: 'fadein-shrink'
}];
var dividerPath = function dividerPath(type, level) {
  var level1 = level;
  var level2 = level;
  var level3 = level;
  /**
   * 波線
   */

  level1 = 0 > level ? Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_1__["default"])("".concat(90 + level / 2), 50, 90) : Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_1__["default"])("".concat(90 - level / 2), 50, 90);
  level2 = level * 3 / 4;

  if ('wave' === type) {
    return "m0,".concat(level1, " q20,").concat(level2, " 40,0 t50,0 t50,0 t50,0 t50,0 V100 L0,100 z");
  }
  /**
   * 三角形
   */


  level1 = 10 + Math.abs(level) * 0.4;
  level2 = 10 + Math.abs(level) * 0.9;
  level3 = 50 - level1;

  if ('triangle' === type) {
    return "m".concat(level3, ",100 l").concat(level1, ",-").concat(level2, " l").concat(level1, ",").concat(level2, " z");
  }
  /**
   * 斜め
   */


  level1 = 0 > level ? 100 : 0;
  level2 = 0 > level ? 100 + level : 100 - level;
  return "m".concat(level1, ",").concat(level2, " L100,100 L0,100 z");
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
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);












var sectionEdit = function sectionEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      backgroundColor = props.backgroundColor,
      textColor = props.textColor,
      dividerColorTop = props.dividerColorTop,
      dividerColorBottom = props.dividerColorBottom,
      setBackgroundColor = props.setBackgroundColor,
      setTextColor = props.setTextColor,
      setDividerColorTop = props.setDividerColorTop,
      setDividerColorBottom = props.setDividerColorBottom,
      className = props.className;
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
      backgroundImageParallax = attributes.backgroundImageParallax,
      innerCustomWidth = attributes.innerCustomWidth,
      dividerTypeTop = attributes.dividerTypeTop,
      dividerLevelTop = attributes.dividerLevelTop,
      dividerTypeBottom = attributes.dividerTypeBottom,
      dividerLevelBottom = attributes.dividerLevelBottom,
      screenHeightMode = attributes.screenHeightMode,
      sectionMinHeight = attributes.sectionMinHeight,
      animationType = attributes.animationType,
      animationSpeed = attributes.animationSpeed;

  var _select$getSettings = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["select"])('core/block-editor').getSettings(),
      colors = _select$getSettings.colors;

  var rangeStep = 0.5;
  var Wrapper = wrapperTag;
  /**
   * 背景画像関連
   */

  var ALLOWED_MEDIA_TYPES = ['image'];
  var showBgMask = backgroundImageURL || backgroundColor.color;
  /**
   * 編集画面のラッパー
   */

  var editWrapStyle = {
    paddingTop: 0 === marginTop ? 0 : marginTop + 'rem',
    paddingBottom: 0 === marginBottom ? 0 : marginBottom + 'rem'
  };
  /**
   * セクションクラス名
   */

  var sectionClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'ystdb-section', {
    'has-background-image': backgroundImageURL,
    'is-screen-height': screenHeightMode
  });
  /**
   * セクションスタイル
   */

  var sectionStyles = {
    color: textColor.color,
    paddingTop: 0 === paddingTop ? 0 : paddingTop + 'rem',
    paddingBottom: 0 === paddingBottom ? 0 : paddingBottom + 'rem',
    backgroundImage: backgroundImageURL ? "url(\"".concat(backgroundImageURL, "\")") : undefined,
    minHeight: sectionMinHeight ? sectionMinHeight + 'px' : undefined
  };
  /**
   * 背景マスク
   */

  var bgMaskClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__bg', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
    'has-background': backgroundColor.color
  }, backgroundColor.class, backgroundColor.class));
  var bgMaskStyle = {
    backgroundColor: backgroundColor.color ? backgroundColor.color : '#000',
    opacity: backgroundImageOpacity / 100
  };
  /**
   * インナー
   */

  var innerClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__inner', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
    'has-text-color': textColor.color
  }, textColor.class, textColor.class));
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
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        isDefault: true,
        onClick: obj.open
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('背景画像を選択', 'ystandard-blocks'));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      onClick: obj.open,
      className: 'ystdb-mediaupload__preview',
      style: {
        padding: 0
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: backgroundImageURL,
      alt: backgroundImageAlt
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      isDefault: true,
      onClick: function onClick() {
        setAttributes({
          backgroundImageURL: '',
          backgroundImageID: 0
        });
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('背景画像をクリア', 'ystandard-blocks')));
  };

  var divider = function divider(type, position, level, color) {
    var dividerClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__divider', "ystdb-section__divider--".concat(position), "ystdb-section__divider--".concat(type));
    var path = Object(_config__WEBPACK_IMPORTED_MODULE_3__["dividerPath"])(type, level);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: dividerClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SVG"], {
      viewBox: "0 0 100 100",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "none"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Path"], {
      d: path,
      strokewidth: "0",
      fill: color
    })));
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'ystdb-section__edit-wrap',
    style: editWrapStyle
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: sectionClass,
    style: sectionStyles
  }, showBgMask && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: bgMaskClass,
    "aria-hidden": "true",
    role: "img",
    style: bgMaskStyle
  }, "\xA0"), 0 !== dividerLevelTop && dividerColorTop.color && divider(dividerTypeTop, 'top', dividerLevelTop, dividerColorTop.color), 0 !== dividerLevelBottom && dividerColorBottom.color && divider(dividerTypeBottom, 'bottom', dividerLevelBottom, dividerColorBottom.color), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-section__container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Wrapper, {
    className: innerClasses,
    style: innerStyles
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InnerBlocks"], null))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspectorcontrols"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('余白設定', 'ystandard-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('余白設定(外側)', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-info__label"
  }, "\u304B\u3093\u305F\u3093\u8A2D\u5B9A"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'ystdb-btn-selector components-base-control'
  }, _config__WEBPACK_IMPORTED_MODULE_3__["marginType"].margin.map(function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      key: item.value,
      isDefault: true,
      onClick: function onClick() {
        setAttributes({
          marginTop: item.num,
          marginBottom: item.num
        });
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, item.label));
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('上側', 'ystandard-blocks'),
    value: marginTop,
    onChange: function onChange(value) {
      return setAttributes({
        marginTop: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, -10, 10, 0)
      });
    },
    min: -10,
    max: 10,
    step: rangeStep
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('下側', 'ystandard-blocks'),
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
  }, "\u203B\u5358\u4F4D\u306Frem\u3067\u3059\u3002"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('余白設定(内側)', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-info__label"
  }, "\u304B\u3093\u305F\u3093\u8A2D\u5B9A"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'ystdb-btn-selector components-base-control'
  }, _config__WEBPACK_IMPORTED_MODULE_3__["marginType"].padding.map(function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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
  }, "\u203B\u4E0A\u4E0B\u4F59\u767D\u306E\u304B\u3093\u305F\u3093\u8A2D\u5B9A"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('上側', 'ystandard-blocks'),
    value: paddingTop,
    onChange: function onChange(value) {
      return setAttributes({
        paddingTop: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, 0, 10)
      });
    },
    min: 0,
    max: 10,
    step: rangeStep
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('下側', 'ystandard-blocks'),
    value: paddingBottom,
    onChange: function onChange(value) {
      return setAttributes({
        paddingBottom: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, 0, 10)
      });
    },
    min: 0,
    max: 10,
    step: rangeStep
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('左側', 'ystandard-blocks'),
    value: paddingLeft,
    onChange: function onChange(value) {
      return setAttributes({
        paddingLeft: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, 0, 5)
      });
    },
    min: 0,
    max: 5,
    step: rangeStep
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('右側', 'ystandard-blocks'),
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
  }, "\u203B\u5358\u4F4D\u306Frem\u3067\u3059\u3002")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('背景設定', 'ystandard-blocks'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('背景画像', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["MediaUpload"], {
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
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('背景色の濃さ', 'ystandard-blocks'),
    value: backgroundImageOpacity,
    onChange: function onChange(value) {
      return setAttributes({
        backgroundImageOpacity: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, 0, 100)
      });
    },
    min: 0,
    max: 100,
    step: 1
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ystdb-info__small"
  }, "\u203B\u6570\u5024\u304C\u5927\u304D\u3044\u307B\u3069\u80CC\u666F\u753B\u50CF\u304C\u898B\u3048\u3065\u3089\u304F\u306A\u308A\u307E\u3059\u3002"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ystdb-info__small"
  }, "\u203B\u753B\u50CF\u306E\u4E0A\u306B\u91CD\u306D\u308B\u8272\u306F\u3001\u8272\u8A2D\u5B9A\u306E\u300C\u80CC\u666F\u8272\u300D\u3067\u5909\u66F4\u3067\u304D\u307E\u3059\u3002")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('固定背景', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('背景を固定する', 'ystandard-blocks'),
    checked: backgroundImageParallax,
    onChange: function onChange() {
      setAttributes({
        backgroundImageParallax: !backgroundImageParallax
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["PanelColorSettings"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Color Settings'),
    initialOpen: false,
    colorSettings: [{
      value: backgroundColor.color,
      onChange: function onChange(color) {
        setBackgroundColor(color);
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Background Color')
    }, {
      value: textColor.color,
      onChange: function onChange(color) {
        setTextColor(color);
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Text Color')
    }]
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ContrastChecker"], {
    backgroundColor: backgroundColor.color,
    textColor: textColor.color
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('区切り線設定', 'ystandard-blocks'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__dscr"
  }, "\u30BF\u30A4\u30D7\u30FB\u30EC\u30D9\u30EB\u30FB\u8272\u3092\u3059\u3079\u3066\u8A2D\u5B9A\u3059\u308B\u3068\u8868\u793A\u3055\u308C\u307E\u3059\u3002", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), "\u4E0A\u4E0B\u306E\u30D6\u30ED\u30C3\u30AF\u306E\u80CC\u666F\u8272\u3068\u8272\u3092\u5408\u308F\u305B\u308B\u3053\u3068\u3092\u30AA\u30B9\u30B9\u30E1\u3057\u307E\u3059\u3002", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('上側の区切り設定', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('区切りタイプ', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'ystdb-btn-selector components-base-control'
  }, _config__WEBPACK_IMPORTED_MODULE_3__["dividerTypes"].map(function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      key: item.value,
      isDefault: true,
      isPrimary: dividerTypeTop === item.value,
      onClick: function onClick() {
        setAttributes({
          dividerTypeTop: item.value
        });
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, item.label));
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('レベル', 'ystandard-blocks'),
    value: dividerLevelTop,
    onChange: function onChange(value) {
      return setAttributes({
        dividerLevelTop: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, -100, 100, 0)
      });
    },
    min: -100,
    max: 100,
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('色', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
    colors: colors,
    disableCustomColors: false,
    onChange: function onChange(color) {
      setDividerColorTop(color);
    },
    value: dividerColorTop.color
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('下側の区切り設定', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('区切りタイプ', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'ystdb-btn-selector components-base-control'
  }, _config__WEBPACK_IMPORTED_MODULE_3__["dividerTypes"].map(function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      key: item.value,
      isDefault: true,
      isPrimary: dividerTypeBottom === item.value,
      onClick: function onClick() {
        setAttributes({
          dividerTypeBottom: item.value
        });
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, item.label));
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('レベル', 'ystandard-blocks'),
    value: dividerLevelBottom,
    onChange: function onChange(value) {
      return setAttributes({
        dividerLevelBottom: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, -100, 100, 0)
      });
    },
    min: -100,
    max: 100,
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('色', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
    colors: colors,
    disableCustomColors: false,
    onChange: function onChange(color) {
      setDividerColorBottom(color);
    },
    value: dividerColorBottom.color
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('コンテンツ幅設定', 'ystandard-blocks'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-info__label"
  }, "\u304B\u3093\u305F\u3093\u8A2D\u5B9A"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'ystdb-btn-selector components-base-control'
  }, _config__WEBPACK_IMPORTED_MODULE_3__["marginType"].innerWidth.map(function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      key: item.value,
      isDefault: true,
      onClick: function onClick() {
        setAttributes({
          innerCustomWidth: item.num
        });
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, item.label));
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('コンテンツ部分の最大幅', 'ystandard-blocks'),
    value: innerCustomWidth,
    onChange: function onChange(value) {
      return setAttributes({
        innerCustomWidth: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, 0, 1920, 0)
      });
    },
    min: 0,
    max: 1920,
    step: 16,
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ystdb-info__small"
  }, "\u203B\u6700\u5927\u5E45\u306E\u6307\u5B9A\u3092\u3057\u306A\u3044\u5834\u5408\u306F0\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('セクション高さ設定', 'ystandard-blocks'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('高さ設定', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('画面と同じ高さにする', 'ystandard-blocks'),
    checked: screenHeightMode,
    onChange: function onChange() {
      setAttributes({
        screenHeightMode: !screenHeightMode
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('セクション最小高さ', 'ystandard-blocks'),
    value: sectionMinHeight,
    onChange: function onChange(value) {
      return setAttributes({
        sectionMinHeight: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, 0, 1000, 0)
      });
    },
    min: 0,
    max: 1000,
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-inspector-controls__dscr"
  }, "\u203B\u300C\u753B\u9762\u3068\u540C\u3058\u9AD8\u3055\u306B\u3059\u308B\u300D\u3092ON\u306B\u3057\u305F\u5834\u5408\u3001\u30BB\u30AF\u30B7\u30E7\u30F3\u6700\u5C0F\u9AD8\u3055\u3082\u5408\u308F\u305B\u3066\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002\uFF08\u4F8B\uFF1A500\uFF09")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('アニメーション設定', 'ystandard-blocks'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('アニメーション種類', 'ystandard-blocks'),
    value: animationType,
    options: _config__WEBPACK_IMPORTED_MODULE_3__["animationTypes"],
    onChange: function onChange(type) {
      setAttributes({
        animationType: type
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('アニメーション速度', 'ystandard-blocks'),
    value: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(animationSpeed, 1, 10, 3),
    onChange: function onChange(value) {
      return setAttributes({
        animationSpeed: Object(_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, 1, 10, 3)
      });
    },
    min: 1,
    max: 10,
    allowReset: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('HTMLタグ設定', 'ystandard-blocks'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ystdb-info__small"
  }, "\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u56F2\u3080HTML\u30BF\u30B0\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'ystdb-btn-selector components-base-control'
  }, _config__WEBPACK_IMPORTED_MODULE_3__["wrapperTagNames"].map(function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      key: item.tag,
      isDefault: true,
      isPrimary: wrapperTag === item.tag,
      onClick: function onClick() {
        setAttributes({
          wrapperTag: item.tag
        });
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, item.tag));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__["compose"])([Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["withColors"])('backgroundColor', {
  textColor: 'color',
  dividerColorTop: 'fill',
  dividerColorBottom: 'fill'
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./block/section/config.js");






function save(props) {
  var attributes = props.attributes;
  var wrapperTag = attributes.wrapperTag,
      backgroundColor = attributes.backgroundColor,
      customBackgroundColor = attributes.customBackgroundColor,
      textColor = attributes.textColor,
      customTextColor = attributes.customTextColor,
      marginTop = attributes.marginTop,
      marginBottom = attributes.marginBottom,
      paddingTop = attributes.paddingTop,
      paddingBottom = attributes.paddingBottom,
      paddingLeft = attributes.paddingLeft,
      paddingRight = attributes.paddingRight,
      backgroundImageURL = attributes.backgroundImageURL,
      backgroundImageOpacity = attributes.backgroundImageOpacity,
      backgroundImageParallax = attributes.backgroundImageParallax,
      innerCustomWidth = attributes.innerCustomWidth,
      dividerTypeTop = attributes.dividerTypeTop,
      dividerLevelTop = attributes.dividerLevelTop,
      dividerColorTop = attributes.dividerColorTop,
      customDividerColorTop = attributes.customDividerColorTop,
      dividerTypeBottom = attributes.dividerTypeBottom,
      dividerLevelBottom = attributes.dividerLevelBottom,
      dividerColorBottom = attributes.dividerColorBottom,
      customDividerColorBottom = attributes.customDividerColorBottom,
      screenHeightMode = attributes.screenHeightMode,
      sectionMinHeight = attributes.sectionMinHeight,
      animationType = attributes.animationType,
      animationSpeed = attributes.animationSpeed;
  /**
   * HTMLタグ
   */

  var Wrapper = wrapperTag;
  /**
   * 色設定
   */

  var textColorClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('color', textColor);
  var backgroundClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('background-color', backgroundColor);
  var dividerColorTopClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('fill', dividerColorTop);
  var dividerColorBottomClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('fill', dividerColorBottom);
  /**
   * アニメーション
   */

  var hasAnimation = animationType && 'none' !== animationType;
  /**
   * 背景関連
   */

  var showBgMask = backgroundImageURL || backgroundColor || customBackgroundColor;
  /**
   * セクションクラス名
   */

  var sectionClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section', {
    'has-background-image': backgroundImageURL,
    'is-screen-height': screenHeightMode,
    'has-animation': hasAnimation,
    'has-parallax': backgroundImageParallax
  });
  var dataAnimation = hasAnimation ? animationType : undefined;
  /**
   * セクションスタイル
   */

  var sectionStyles = {
    color: textColorClass ? undefined : customTextColor,
    paddingTop: 0 === paddingTop ? 0 : paddingTop + 'rem',
    paddingBottom: 0 === paddingBottom ? 0 : paddingBottom + 'rem',
    marginTop: marginTop + 'rem',
    marginBottom: marginBottom + 'rem',
    backgroundImage: backgroundImageURL ? "url(\"".concat(backgroundImageURL, "\")") : undefined,
    minHeight: sectionMinHeight ? sectionMinHeight + 'px' : undefined,
    paddingLeft: 0 < innerCustomWidth ? '1rem' : undefined,
    paddingRight: 0 < innerCustomWidth ? '1rem' : undefined,
    animationDuration: hasAnimation ? "".concat(animationSpeed, "s") : undefined
  };
  /**
   * 背景マスク
   */

  var bgMaskClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__bg', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
    'has-background': backgroundColor || customBackgroundColor
  }, backgroundClass, backgroundClass));
  var bgMaskStyle = {
    backgroundColor: !backgroundClass && !customBackgroundColor ? '#000' : customBackgroundColor,
    opacity: backgroundImageOpacity / 100
  };
  /**
   * インナー
   */

  var innerClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__inner', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
    'has-text-color': textColorClass || customTextColor
  }, textColorClass, textColorClass));
  var innerStyles = {
    maxWidth: 0 < innerCustomWidth ? innerCustomWidth : undefined,
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingLeft: 0 === paddingLeft ? 0 : paddingLeft + 'rem',
    paddingRight: 0 === paddingRight ? 0 : paddingRight + 'rem'
  };

  var divider = function divider(type, position, level, colorClass, customColor) {
    var dividerClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__divider', "ystdb-section__divider--".concat(position), "ystdb-section__divider--".concat(type));
    var path = Object(_config__WEBPACK_IMPORTED_MODULE_5__["dividerPath"])(type, level);
    var svgClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__divider-image', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, colorClass, colorClass));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: dividerClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SVG"], {
      className: svgClass,
      viewBox: "0 0 100 100",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "none"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Path"], {
      d: path,
      strokewidth: "0",
      fill: customColor
    })));
  };

  var dividerTop = 0 !== dividerLevelTop && (dividerColorTopClass || customDividerColorTop);
  var dividerBottom = 0 !== dividerLevelBottom && (dividerColorBottomClass || customDividerColorBottom);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: sectionClass,
    style: sectionStyles,
    "data-animation": dataAnimation
  }, showBgMask && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: bgMaskClass,
    "aria-hidden": "true",
    role: "img",
    style: bgMaskStyle
  }, "\xA0"), dividerTop && divider(dividerTypeTop, 'top', dividerLevelTop, dividerColorTopClass, customDividerColorTop), dividerBottom && divider(dividerTypeBottom, 'bottom', dividerLevelBottom, dividerColorBottomClass, customDividerColorBottom), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-section__container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Wrapper, {
    className: innerClasses,
    style: innerStyles
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null))));
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
//# sourceMappingURL=section.js.map