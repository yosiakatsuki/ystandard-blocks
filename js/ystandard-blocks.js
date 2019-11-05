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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/ystandard-blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./block/btn-link/_deprecated.js":
/*!***************************************!*\
  !*** ./block/btn-link/_deprecated.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var blockAttributes = {
  content: {
    type: "string"
  },
  backgroundColor: {
    type: "string"
  },
  textColor: {
    type: "string"
  },
  customBackgroundColor: {
    type: "string"
  },
  customTextColor: {
    type: "string"
  },
  icon: {
    type: "string"
  },
  align: {
    type: "string"
  },
  buttonType: {
    type: "string"
  },
  customIcon: {
    type: "string"
  },
  iconPosition: {
    type: "string",
    default: "right"
  },
  buttonSize: {
    type: "string",
    default: ""
  },
  fontSize: {
    type: "string"
  },
  customFontSize: {
    type: "integer"
  }
};
var deprecated = [{
  attributes: _objectSpread({}, blockAttributes),
  migrate: function migrate(attributes) {
    var newIcon = !!attributes.customIcon && 'custom' === attributes.icon ? attributes.customIcon : attributes.icon;
    return _objectSpread({}, attributes, {
      icon: newIcon
    });
  },
  save: function save() {
    return null;
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./block/btn-link/config.js":
/*!**********************************!*\
  !*** ./block/btn-link/config.js ***!
  \**********************************/
/*! exports provided: attributes, supports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supports", function() { return supports; });
/**
 * attributes
 */
var attributes = {
  content: {
    type: "string"
  },
  backgroundColor: {
    type: "string"
  },
  textColor: {
    type: "string"
  },
  customBackgroundColor: {
    type: "string"
  },
  customTextColor: {
    type: "string"
  },
  icon: {
    type: "string"
  },
  align: {
    type: "string"
  },
  buttonType: {
    type: "string"
  },
  iconPosition: {
    type: "string",
    default: "right"
  },
  buttonSize: {
    type: "string",
    default: ""
  },
  fontSize: {
    type: "string"
  },
  customFontSize: {
    type: "integer"
  }
};
/**
 * supports
 */

var supports = {
  className: false,
  html: false
};

/***/ }),

/***/ "./block/btn-link/edit.js":
/*!********************************!*\
  !*** ./block/btn-link/edit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_js_components_icon_select_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/js/components/icon-select/index */ "./src/js/components/icon-select/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);









var btnLinkEdit = function btnLinkEdit(props) {
  var backgroundColor = props.backgroundColor,
      textColor = props.textColor,
      setBackgroundColor = props.setBackgroundColor,
      setTextColor = props.setTextColor,
      attributes = props.attributes,
      setAttributes = props.setAttributes,
      setState = props.setState,
      isPreview = props.isPreview,
      styles = props.styles,
      className = props.className,
      fontSize = props.fontSize,
      setFontSize = props.setFontSize;
  var content = attributes.content,
      icon = attributes.icon,
      align = attributes.align,
      buttonType = attributes.buttonType,
      customIcon = attributes.customIcon,
      iconPosition = attributes.iconPosition,
      buttonSize = attributes.buttonSize;
  /**
   * 色設定
   */

  var bgColor = backgroundColor.color ? backgroundColor.color : '#222';
  var txtColor = textColor.color ? textColor.color : '#fff';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'wp-block-html'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["AlignmentToolbar"], {
    value: align,
    onChange: function onChange(nextAlign) {
      setAttributes({
        align: nextAlign
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "components-toolbar"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "components-tab-button ".concat(!isPreview ? 'is-active' : ''),
    onClick: function onClick() {
      setState({
        isPreview: false
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "HTML")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "components-tab-button ".concat(isPreview ? 'is-active' : ''),
    onClick: function onClick() {
      setState({
        isPreview: true
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Preview'))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Disabled"].Consumer, null, function () {
    return isPreview ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'ystdb-btn-link__preview'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ServerSideRender"], {
      block: "ystdb/btn-link",
      attributes: attributes
    })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["PlainText"], {
      value: content,
      onChange: function onChange(content) {
        return setAttributes({
          content: content
        });
      },
      placeholder: 'HTMLを入力...',
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('HTML')
    });
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["PanelColorSettings"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Color Settings'),
    initialOpen: true,
    colorSettings: [{
      value: backgroundColor.color,
      onChange: function onChange(color) {
        setBackgroundColor(color);
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Background Color')
    }, {
      value: textColor.color,
      onChange: function onChange(color) {
        setTextColor(color);
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Text Color')
    }]
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["ContrastChecker"], {
    backgroundColor: backgroundColor.color,
    textColor: textColor.color
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('テキスト設定', 'ystandard-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["FontSizePicker"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('文字サイズ', 'ystandard-blocks'),
    value: fontSize.size,
    onChange: function onChange(font) {
      setFontSize(font);
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_src_js_components_icon_select_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    panelTitle: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('アイコン設定', 'ystandard-blocks'),
    iconPosition: iconPosition,
    onChangePosition: function onChangePosition(option) {
      setAttributes({
        iconPosition: option
      });
    },
    selectedIcon: icon,
    onClickIcon: function onClickIcon(value) {
      setAttributes({
        icon: value
      });
      console.log(value);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('表示タイプ', 'ystandard-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('ブロック表示にする', 'ystandard-blocks'),
    checked: buttonType === 'full',
    onChange: function onChange() {
      setAttributes({
        buttonType: buttonType === 'full' ? '' : 'full'
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ystdb-inspectorcontrols__horizontal-radio"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('ボタンサイズ', 'ystandard-blocks'),
    selected: buttonSize,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('通常', 'ystandard-blocks'),
      value: ''
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('大', 'ystandard-blocks'),
      value: 'lg'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('小', 'ystandard-blocks'),
      value: 'sm'
    }],
    onChange: function onChange(option) {
      setAttributes({
        buttonSize: option
      });
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["compose"])([Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["withColors"])('backgroundColor', {
  textColor: 'color'
}), Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["withState"])({
  isPreview: false,
  styles: ''
}), Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["withFontSizes"])('fontSize')])(btnLinkEdit));

/***/ }),

/***/ "./block/btn-link/index.js":
/*!*********************************!*\
  !*** ./block/btn-link/index.js ***!
  \*********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _src_js_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/js/config/config */ "./src/js/config/config.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_deprecated */ "./block/btn-link/_deprecated.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./block/btn-link/edit.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./block/btn-link/config.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





var name = 'ystdb/btn-link';
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('ボタン型リンク', 'ystandard-blocks'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('入力したリンク(a)タグをボタン形式で表示するブロック', 'ystandard-blocks'),
  icon: 'embed-generic',
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('link'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('button'), 'button'],
  category: _src_js_config_config__WEBPACK_IMPORTED_MODULE_0__["ystdbConfig"].category.common,
  attributes: _config__WEBPACK_IMPORTED_MODULE_3__["attributes"],
  supports: _config__WEBPACK_IMPORTED_MODULE_3__["supports"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save() {
    return null;
  },
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_1__["default"]
};

/***/ }),

/***/ "./block/extend-core/button/_deprecated.js":
/*!*************************************************!*\
  !*** ./block/extend-core/button/_deprecated.js ***!
  \*************************************************/
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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var blockAttributes = {
  url: {
    type: 'string',
    source: 'attribute',
    selector: 'a',
    attribute: 'href'
  },
  title: {
    type: 'string',
    source: 'attribute',
    selector: 'a',
    attribute: 'title'
  },
  text: {
    type: 'string',
    source: 'html',
    selector: 'a'
  }
};
var deprecated = [{
  attributes: _objectSpread({}, blockAttributes, {
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    buttonBlock: {
      type: 'boolean'
    },
    icon: {
      type: "string"
    }
  }),
  migrate: function migrate(attributes) {
    var iconStyle = "margin-left:.5rem;";
    var iconHTML = "<i style=\"".concat(iconStyle, "\" class=\"").concat(attributes.icon, "\"> </i>");
    var newText = attributes.text ? attributes.text.replace(/<i.*?class=".+?">.*?<\/i>/g, '') + iconHTML : '';
    var newClassName = attributes.className ? attributes.className : undefined;
    return _objectSpread({}, attributes, {
      text: newText,
      className: newClassName,
      iconPosition: 'right'
    });
  },
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var url = attributes.url,
        text = attributes.text,
        title = attributes.title,
        backgroundColor = attributes.backgroundColor,
        textColor = attributes.textColor,
        customBackgroundColor = attributes.customBackgroundColor,
        customTextColor = attributes.customTextColor;
    var buttonText = text.replace(/<i.*?class=".+?">.*?<\/i>/g, '');
    var icon = '';

    if (attributes.icon) {
      icon = "<i class=\"".concat(attributes.icon, "\"> </i>");
    }

    buttonText = "".concat(buttonText).concat(icon);
    var textClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('color', textColor);
    var backgroundClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('background-color', backgroundColor);
    var buttonClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-button__link', (_classnames = {
      'has-text-color': textColor || customTextColor
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, textClass, textClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-background', backgroundColor || customBackgroundColor), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, backgroundClass, backgroundClass), _classnames));
    var buttonStyle = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "a",
      className: buttonClasses,
      href: url,
      title: title,
      style: buttonStyle,
      value: buttonText
    }));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./block/extend-core/button/block-edit.js":
/*!************************************************!*\
  !*** ./block/extend-core/button/block-edit.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_js_components_icon_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/js/components/icon-select */ "./src/js/components/icon-select/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config */ "./block/extend-core/button/config.js");












/**
 * 設定コントロール追加
 */

var addBtnCustomControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__["createHigherOrderComponent"])(function (BlockEdit) {
  return function (props) {
    if (_config__WEBPACK_IMPORTED_MODULE_10__["allowedBlocks"].includes(props.name)) {
      var _classnames;

      var attributes = props.attributes,
          setAttributes = props.setAttributes;
      var buttonBlock = attributes.buttonBlock,
          icon = attributes.icon,
          customIcon = attributes.customIcon,
          iconPosition = attributes.iconPosition,
          fontSize = attributes.fontSize,
          buttonSize = attributes.buttonSize;

      var _select$getSettings = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["select"])('core/block-editor').getSettings(),
          fontSizes = _select$getSettings.fontSizes;

      var selectedFontSize = fontSizes.find(function (item) {
        return item.size === fontSize;
      });
      var fontSizeClass = selectedFontSize ? Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["getFontSizeClass"])(selectedFontSize.slug) : '';
      /**
       * クラスの反映
       */

      var attrClassName = attributes.className ? attributes.className : '';
      /**
       * クラス初期化
       */

      var initClassName = function initClassName(className) {
        return className.replace(/\s?\-full\s?/g, '').replace(/has-.+-font-size/g, '').replace(/\s?\-sm\s?/g, '').replace(/\s?\-lg\s?/g, '');
      };

      attributes.className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(initClassName(attrClassName), (_classnames = {
        '-full': buttonBlock
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, fontSizeClass, fontSizeClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-custom-font-size', fontSizeClass), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, '-' + buttonSize, buttonSize), _classnames));
      /**
       * アイコンの反映
       */

      var text = attributes.text ? attributes.text.replace(/<i.*class=".*?">.*?<\/i>/g, '') : '';
      var leftIcon = '';
      var rightIcon = '';
      var iconClass = icon;

      if (iconClass) {
        if ('custom' === iconClass) {
          if (customIcon) {
            iconClass = customIcon;
          } else {
            iconClass = '';
          }
        }
      }

      var iconStyle = "margin-".concat('right' === iconPosition ? 'left' : 'right', ":.5rem;");

      if (iconClass) {
        var iconHTML = "<i style=\"".concat(iconStyle, "\" class=\"").concat(iconClass, "\"> </i>");
        leftIcon = 'left' === iconPosition ? iconHTML : '';
        rightIcon = 'right' === iconPosition ? iconHTML : '';
      }

      attributes.text = "".concat(leftIcon).concat(text).concat(rightIcon);

      if (props.isSelected) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
          title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('[ys]テキスト設定', 'ystandard-blocks')
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: 'ystdb-inspectorcontrols__disablecustomfont'
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["FontSizePicker"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('文字サイズ', 'ystandard-blocks'),
          disableCustomFontSizes: true,
          value: fontSize,
          onChange: function onChange(newFontSize) {
            setAttributes({
              fontSize: newFontSize
            });
          }
        }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_src_js_components_icon_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
          iconPosition: iconPosition,
          onChangePosition: function onChangePosition(option) {
            setAttributes({
              iconPosition: option
            });
          },
          selectedIcon: iconClass,
          onClickIcon: function onClickIcon(value) {
            setAttributes({
              icon: value
            });
          },
          onClickClear: function onClickClear() {
            setAttributes({
              icon: ''
            });
          },
          onChangeCustomIcon: function onChangeCustomIcon(content) {
            setAttributes({
              customIcon: content
            });

            if (content) {
              setAttributes({
                icon: 'custom'
              });
            } else {
              setAttributes({
                icon: ''
              });
            }
          },
          customIcon: customIcon,
          customInfo: "\u203B\u30DC\u30BF\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u7DE8\u96C6\u3059\u308B\u969B\u306F\u4E00\u5EA6\u30A2\u30A4\u30B3\u30F3\u3092\u30AF\u30EA\u30A2\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
          title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('[ys]表示タイプ', 'ystandard-blocks'),
          initialOpen: false
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ToggleControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('ブロック表示にする', 'ystandard-blocks'),
          checked: buttonBlock,
          onChange: function onChange() {
            setAttributes({
              buttonBlock: !buttonBlock
            });
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: "ystdb-inspectorcontrols__horizontal-radio"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RadioControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('ボタンサイズ', 'ystandard-blocks'),
          selected: buttonSize,
          options: [{
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('通常', 'ystandard-blocks'),
            value: ''
          }, {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('大', 'ystandard-blocks'),
            value: 'lg'
          }, {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('小', 'ystandard-blocks'),
            value: 'sm'
          }],
          onChange: function onChange(option) {
            setAttributes({
              buttonSize: option
            });
          }
        })))));
      }
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props);
  };
}, 'addBtnCustomControls');
/**
 * コントロール追加
 */

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__["addFilter"])('editor.BlockEdit', 'ystdb/ex-btn-edit', addBtnCustomControls);

/***/ }),

/***/ "./block/extend-core/button/config.js":
/*!********************************************!*\
  !*** ./block/extend-core/button/config.js ***!
  \********************************************/
/*! exports provided: allowedBlocks, AttributesCoreBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowedBlocks", function() { return allowedBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributesCoreBtn", function() { return AttributesCoreBtn; });
var allowedBlocks = ['core/button'];
var AttributesCoreBtn = {
  buttonBlock: {
    type: 'boolean'
  },
  icon: {
    type: "string"
  },
  customIcon: {
    type: "string"
  },
  iconPosition: {
    type: "string",
    default: "right"
  },
  fontSize: {
    type: "integer",
    default: 16
  },
  buttonSize: {
    type: "string",
    default: ""
  }
};

/***/ }),

/***/ "./block/extend-core/button/index.js":
/*!*******************************************!*\
  !*** ./block/extend-core/button/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_block_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-block-type */ "./block/extend-core/button/register-block-type.js");
/* harmony import */ var _block_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-edit */ "./block/extend-core/button/block-edit.js");
/* harmony import */ var _save_extra_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save-extra-props */ "./block/extend-core/button/save-extra-props.js");




/***/ }),

/***/ "./block/extend-core/button/register-block-type.js":
/*!*********************************************************!*\
  !*** ./block/extend-core/button/register-block-type.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_deprecated */ "./block/extend-core/button/_deprecated.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./block/extend-core/button/config.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Attribute追加
 */

function addCoreBtnAttribute(settings) {
  if (typeof settings.attributes !== 'undefined' && _config__WEBPACK_IMPORTED_MODULE_1__["allowedBlocks"].includes(settings.name)) {
    /**
     * attributes
     */
    settings.attributes = Object.assign(settings.attributes, _config__WEBPACK_IMPORTED_MODULE_1__["AttributesCoreBtn"]);
    /**
     * deprecated
     */

    settings.deprecated = settings.deprecated.concat(_deprecated__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }

  return settings;
}
/**
 * 設定追加
 */


Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__["addFilter"])('blocks.registerBlockType', 'ystdb/ex-btn-attr', addCoreBtnAttribute);

/***/ }),

/***/ "./block/extend-core/button/save-extra-props.js":
/*!******************************************************!*\
  !*** ./block/extend-core/button/save-extra-props.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./block/extend-core/button/config.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);


/**
 * 設定保存機能追加
 */

function addCoreBtnSaveProps(extraProps, blockType, attributes) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__["allowedBlocks"].includes(blockType.name)) {
    var value = extraProps.children.props.value ? extraProps.children.props.value : '';
    value = value.replace(/<i.+class=".+?">.*?<\/i>/g, '');
    var icon = attributes.icon,
        customIcon = attributes.customIcon,
        iconPosition = attributes.iconPosition;
    var leftIcon = '';
    var rightIcon = '';
    var iconClass = icon;

    if (iconClass) {
      if ('custom' === iconClass) {
        if (customIcon) {
          iconClass = customIcon;
        } else {
          iconClass = '';
        }
      }
    }

    var iconStyle = "margin-".concat('right' === iconPosition ? 'left' : 'right', ":.5rem;");

    if (iconClass) {
      var iconHTML = "<i style=\"".concat(iconStyle, "\" class=\"").concat(iconClass, "\"> </i>");
      leftIcon = 'left' === iconPosition ? iconHTML : '';
      rightIcon = 'right' === iconPosition ? iconHTML : '';
    }

    extraProps.children.props.value = "".concat(leftIcon).concat(value).concat(rightIcon);
  }

  return extraProps;
}
/**
 * 設定保存
 */


Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["addFilter"])('blocks.getSaveContent.extraProps', 'ystdb/ex-btn-save', addCoreBtnSaveProps);

/***/ }),

/***/ "./block/format/inline-style/config.js":
/*!*********************************************!*\
  !*** ./block/format/inline-style/config.js ***!
  \*********************************************/
/*! exports provided: inlineStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inlineStyles", function() { return inlineStyles; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

/**
 * インラインスタイル
 */

var inlineStyles = [{
  name: 'ystdb/inline-style-1',
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('[ys]インラインスタイル 1', 'ystandard-blocks'),
  class: 'ystdb-inline--1',
  icon: 'admin-customizer'
}, {
  name: 'ystdb/inline-style-2',
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('[ys]インラインスタイル 2', 'ystandard-blocks'),
  class: 'ystdb-inline--2',
  icon: 'admin-customizer'
}, {
  name: 'ystdb/inline-style-3',
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('[ys]インラインスタイル 3', 'ystandard-blocks'),
  class: 'ystdb-inline--3',
  icon: 'admin-customizer'
}];

/***/ }),

/***/ "./block/format/inline-style/index.js":
/*!********************************************!*\
  !*** ./block/format/inline-style/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./block/format/inline-style/config.js");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);






/**
 * インラインスタイル追加
 */

_config__WEBPACK_IMPORTED_MODULE_1__["inlineStyles"].map(function (style, index) {
  Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__["registerFormatType"])(style.name, {
    title: style.title,
    tagName: 'span',
    className: style.class,
    edit: function edit(props) {
      var value = props.value,
          isActive = props.isActive,
          onChange = props.onChange;

      var onToggle = function onToggle() {
        return onChange(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__["toggleFormat"])(value, {
          type: style.name
        }));
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["BlockFormatControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "editor-format-toolbar block-editor-format-toolbar"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "ystdb-inline-style-toolbar inline-style-".concat(index + 1)
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToolbarButton"], {
        icon: style.icon,
        title: style.title,
        onClick: onToggle,
        isActive: isActive
      }))))));
    }
  });
});

/***/ }),

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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






var deprecated = [{
  attributes: {
    wrapperTag: {
      type: "string",
      default: "div"
    },
    backgroundColor: {
      type: "string"
    },
    customBackgroundColor: {
      type: "string"
    },
    textColor: {
      type: "string"
    },
    customTextColor: {
      type: "string"
    },
    margin: {
      type: "string",
      default: "normal" //normal,wide,narrow

    },
    marginTop: {
      type: "integer",
      default: 24
    },
    marginBottom: {
      type: "integer",
      default: 24
    },
    padding: {
      type: "string",
      default: "normal" //normal,wide,narrow

    },
    paddingTop: {
      type: "integer",
      default: 32
    },
    paddingBottom: {
      type: "integer",
      default: 32
    },
    innerWidth: {
      type: "string",
      default: "normal" //normal,narrow

    },
    innerCustomWidth: {
      type: "integer",
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
    type: "string",
    default: "div"
  },
  backgroundColor: {
    type: "string"
  },
  customBackgroundColor: {
    type: "string"
  },
  textColor: {
    type: "string"
  },
  customTextColor: {
    type: "string"
  },
  marginTop: {
    type: "number",
    default: 2
  },
  marginBottom: {
    type: "number",
    default: 2
  },
  paddingTop: {
    type: "number",
    default: 3
  },
  paddingBottom: {
    type: "number",
    default: 3
  },
  paddingLeft: {
    type: "number",
    default: 0
  },
  paddingRight: {
    type: "number",
    default: 0
  },
  innerCustomWidth: {
    type: "integer",
    default: 960
  },
  backgroundImageURL: {
    type: "string"
  },
  backgroundImageAlt: {
    type: "string"
  },
  backgroundImageID: {
    type: "integer",
    default: 0
  },
  backgroundImageOpacity: {
    type: "integer",
    default: 50
  },
  backgroundSkew: {
    type: "number",
    default: 0
  },
  backgroundSkewWidth: {
    type: "number",
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
   */

  var mediaUploadRender = function mediaUploadRender(obj) {
    if (0 === backgroundImageID) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        isDefault: true,
        onClick: obj.open
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('背景画像を選択', 'ystandard-blocks'));
    } else {
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
    }
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
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('余白設定(外側)', 'ystandard-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-info__label"
  }, "\u304B\u3093\u305F\u3093\u8A2D\u5B9A"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'ystdb-btn-selector components-base-control'
  }, _config__WEBPACK_IMPORTED_MODULE_3__["marginType"].margin.map(function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
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
  }, "\u203B\u5358\u4F4D\u306Frem\u3067\u3059\u3002"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('余白設定(内側)', 'ystandard-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ystdb-info__label"
  }, "\u304B\u3093\u305F\u3093\u8A2D\u5B9A"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'ystdb-btn-selector components-base-control'
  }, _config__WEBPACK_IMPORTED_MODULE_3__["marginType"].padding.map(function (item) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
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
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _src_js_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/js/config/config */ "./src/js/config/config.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./block/section/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./block/section/save.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./block/section/config.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_deprecated */ "./block/section/_deprecated.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






var name = 'ystdb/section';
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('[ys]セクション', 'ystandard-blocks'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('yStandard Blocks汎用セクションブロック', 'ystandard-blocks'),
  icon: 'screenoptions',
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('section'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('セクション'), 'section'],
  category: _src_js_config_config__WEBPACK_IMPORTED_MODULE_0__["ystdbConfig"].category.common,
  attributes: _config__WEBPACK_IMPORTED_MODULE_3__["attributes"],
  supports: _config__WEBPACK_IMPORTED_MODULE_3__["supports"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_4__["deprecated"]
};

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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

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

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 * React FontIconPicker
 * 
 * React Component to show a picker element to pick font-icons & svg
 * 
 * @author Swashata Ghosh <swashata@wpquark.com>
 * @version 1.2.0
 * @link https://github.com/fontIconPicker/react-fonticonpicker
 * @license MIT
 * 
 * Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 * 
 */
!function(e,t){ true?module.exports=t(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),__webpack_require__(/*! react */ "react"),__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"),__webpack_require__(/*! react-dom */ "react-dom"),__webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js")):undefined}(window,function(e,t,r,n,a){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=15)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.flattenPossiblyCategorizedSource=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Array.isArray(e))return o(e);if(null!==t)return void 0!==e[t]?o(e[t]):[];var r=[],n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){a(e,t,r[t])})}return e}({},e);return Object.keys(n).forEach(function(e){r=o(r).concat(o(n[e]))}),r},t.getPossibleCategories=function(e){return Array.isArray(e)?null:Object.keys(e)},t.convertToHex=function(e){return String.fromCodePoint(parseInt(e,10))},t.isArrayEqual=function(e,t){if(!Array.isArray(e)||!Array.isArray(t))return!1;var r=o(e);r.sort();var n=o(t);return n.sort(),JSON.stringify(r)===JSON.stringify(n)},t.getOffset=function(e){var t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+r}},t.getSourceType=function(e){return null===e?"null":"object"!==n(e)||Array.isArray(e)?Array.isArray(e)?"array":n(e):"object"},t.InvalidSourceException=function(e,t){this.givenType=e,this.requiredType=t,this.message="Expected of type: ".concat(this.requiredType,", found: ").concat(this.givenType),this.toString=function(){return"Invalid Source Exception: ".concat(this.message)}},t.fuzzySearch=function(e,t){e=e.toLowerCase();var r=(t=t.toLowerCase()).length,n=e.length;if(n>r)return!1;if(n===r)return e===t;e:for(var a=0,o=0;a<n;a++){for(var l=e.codePointAt(a);o<r;)if(t.codePointAt(o++)===l)continue e;return!1}return!0},t.debounce=void 0,t.debounce=function(e,t){var r;return function(){var n=this,a=arguments;clearTimeout(r),r=setTimeout(function(){return e.apply(n,a)},t)}}},function(e,t){e.exports=r},,,function(e,t){e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(1)),a=r(6),o=u(r(0)),l=u(r(3)),i=r(2);function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==c(n)&&"function"!=typeof n?d(this):n,Object.defineProperty(d(r),"syncPortalPosition",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.resetPortalPosition(),r.fixWindowOverflow()}}),Object.defineProperty(d(r),"fixWindowOverflow",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=r.props.domRef.current.offsetWidth,t=r.props.domRef.current.offsetHeight,n=window,a=n.innerWidth,o=n.pageYOffset,l=document.documentElement.clientHeight,u=(0,i.getOffset)(r.props.domRef.current),c=u.left,s=u.top,f="self"===r.state.appendRoot?r.props.domRef.current:r.state.appendRoot,d=(0,i.getOffset)(f),p=r.props.btnRef.current,h=r.props.domRef.current,y=(0,i.getOffset)(p),b=getComputedStyle(p),g=(parseInt(b.borderTop,10)||0)+(parseInt(b.borderBottom,10)||0);if(c+e>a-20){var m=y.left+r.props.btnRef.current.offsetWidth-(e+d.left);m+d.left<0&&(m=10-d.left),h.style.left="".concat(m,"px")}t+s-o>l&&y.top-t>0&&("self"===r.state.appendRoot?h.style.top="-".concat(t-g,"px"):h.style.top="".concat(y.top+g-t,"px"))}}),r.state={},r.debouncedSyncPortalPosition=(0,i.debounce)(r.syncPortalPosition,250),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),f(t,null,[{key:"getDerivedStateFromProps",value:function(e){var r=t.calculateAppendAndClass(e.appendRoot);return{appendRoot:r.appendRoot,portalClasses:r.portalClasses}}},{key:"calculateAppendAndClass",value:function(e){var t="self",r=(0,l.default)({"rfipdropdown--portal":!1!==e});return!1!==e&&(t=document.querySelector(e)),{portalClasses:r,appendRoot:t}}}]),f(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.debouncedSyncPortalPosition),window.addEventListener("scroll",this.debouncedSyncPortalPosition),this.syncPortalPosition()}},{key:"componentDidUpdate",value:function(){this.syncPortalPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.debouncedSyncPortalPosition),window.removeEventListener("scroll",this.debouncedSyncPortalPosition)}},{key:"positionPortal",value:function(){var e=this.props.domRef.current.style.display;this.props.domRef.current.style.display="none";var t=this.props.btnRef.current,r=(0,i.getOffset)(t),n=(0,i.getOffset)(this.state.appendRoot),a=t.offsetHeight;this.props.domRef.current.style.left="".concat(r.left-n.left,"px"),this.props.domRef.current.style.top="".concat(r.top+a,"px"),this.props.domRef.current.style.display=e}},{key:"resetPortalPosition",value:function(){var e=this.props.domRef.current;"self"===this.state.appendRoot?e.style.top="":this.positionPortal()}},{key:"render",value:function(){var e=(0,l.default)(this.props.className,this.state.portalClasses),t=n.default.createElement("div",{className:e,ref:this.props.domRef},this.props.children);return"self"===this.state.appendRoot?t:(0,a.createPortal)(t,this.state.appendRoot)}}]),t}();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:o.default.oneOfType([o.default.bool,o.default.string]),children:o.default.node.isRequired,domRef:o.default.object.isRequired,btnRef:o.default.object.isRequired,className:o.default.string.isRequired}}),Object.defineProperty(p,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:!1}});var h=p;t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(1)),a=i(r(0)),o=i(r(3)),l=r(2);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==u(n)&&"function"!=typeof n?d(this):n,Object.defineProperty(d(r),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=r.props.currentPage,o=r.state.totalPage;null!==n?"next"===n?a+=1:a-=1:a=parseInt(e.target.value,10)-1,a<0&&(a=0),a>o-1&&(a=o-1),t=a+1,null===n&&Number.isNaN(a)&&(a=0,t=""),r.setState({viewPage:t}),r.props.handleChangePage(a)}}),Object.defineProperty(d(r),"handlePageKeyBoard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){13!==e.keyCode&&32!==e.keyCode||r.handleChangePage({},t)}}),Object.defineProperty(d(r),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.props.handleChangeValue(e)}}),Object.defineProperty(d(r),"handleValueKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){13!==e.keyCode&&32!==e.keyCode||r.handleChangeValue(t)}}),r.state={viewPage:r.props.currentPage+1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),f(t,null,[{key:"getDerivedStateFromProps",value:function(e,r){var n=t.getCategoryFilteredState(e.currentCategory,e.categories,e.icons),a=t.getCategoryFilteredState(e.currentCategory,e.categories,null===e.search?e.icons:e.search),o=t.getActiveIcons(n,a,e.currentSearch),l=o.activeIcons,i=o.activeTitles,u=e.currentPage,c=e.iconsPerPage,s={iconView:t.getCurrentViewIcons(l,c,u),titleView:t.getCurrentViewIcons(i,c,u),totalPage:Math.ceil(l.length/c)};return""!==r.viewPage&&(s.viewPage=e.currentPage+1),s}},{key:"getActiveIcons",value:function(e,t,r){var n=c(e),a=c(t);if(""===r||null===r)return{activeIcons:n,activeTitles:a};var o=[],i=[];return n.forEach(function(e,n){(0,l.fuzzySearch)(r,t[n])&&(o.push(e),i.push(t[n]))}),{activeIcons:o,activeTitles:i}}},{key:"getCategoryFilteredState",value:function(e,t,r){var n=null,a=(0,l.getSourceType)(r);if(Array.isArray(t)){if("object"!==a)throw new l.InvalidSourceException(a,"object")}else if("array"!==a)throw new l.InvalidSourceException(a,"array");return 0!==e&&Array.isArray(t)&&(n=t[e]||null),(0,l.flattenPossiblyCategorizedSource)(r,n)}},{key:"getCurrentViewIcons",value:function(e,t,r){var n=r*t,a=(r+1)*t;return e.slice(n,a)}}]),f(t,[{key:"renderPager",value:function(){var e=this;if(this.state.totalPage<1)return null;var t=this.props.currentPage>0?n.default.createElement("span",{className:"rfipicons__left",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"prev")},onClick:function(t){return e.handleChangePage(t,"prev")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Left"},n.default.createElement("i",{className:"fipicon-angle-left"}))):null,r=this.props.currentPage<this.state.totalPage-1?n.default.createElement("span",{className:"rfipicons__right",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"next")},onClick:function(t){return e.handleChangePage(t,"next")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Right"},n.default.createElement("i",{className:"fipicon-angle-right"}))):null;return n.default.createElement("div",{className:"rfipicons__pager"},n.default.createElement("div",{className:"rfipicons__num"},n.default.createElement("input",{value:this.state.viewPage,onChange:this.handleChangePage,className:"rfipicons__cp",type:"tel",min:1}),n.default.createElement("span",{className:"rfipicons__sp"},"/"),n.default.createElement("span",{className:"rfipicons__tp"},this.state.totalPage)),n.default.createElement("div",{className:"rfipicons__arrow"},t,r))}},{key:"renderIconView",value:function(){var e=this;return this.state.totalPage>0?this.state.iconView.map(function(t,r){var a=(0,o.default)("rfipicons__icon",{"rfipicons__icon--selected":e.props.value===t||Array.isArray(e.props.value)&&e.props.value.includes(t)});return n.default.createElement("span",{className:a,key:t,title:e.state.titleView[r]},n.default.createElement("span",{className:"rfipicons__ibox",tabIndex:0,role:"button",onClick:function(){return e.handleChangeValue(t)},onKeyDown:function(r){return e.handleValueKeyboard(r,t)}},e.props.renderIcon(t)))}):n.default.createElement("span",{className:"rfipicons__icon--error"},n.default.createElement("span",{className:"rfipicons__ibox--error"},this.props.noIconPlaceholder))}},{key:"render",value:function(){return n.default.createElement("div",{className:"rfipicons"},this.renderPager(),n.default.createElement("div",{className:"rfipicons__selector"},this.renderIconView()))}}]),t}();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{categories:a.default.arrayOf(a.default.string),currentCategory:a.default.number,isMulti:a.default.bool.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,currentSearch:a.default.string.isRequired,handleChangeValue:a.default.func.isRequired,currentPage:a.default.number.isRequired,iconsPerPage:a.default.number.isRequired,handleChangePage:a.default.func.isRequired,renderIcon:a.default.func.isRequired,noIconPlaceholder:a.default.string.isRequired}}),Object.defineProperty(p,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{categories:null,currentCategory:null,search:null}});var h=p;t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),a=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return n.default.createElement("div",{className:"rfipsearch"},n.default.createElement("input",{type:"text",className:"rfipsearch__input",value:e.value,onChange:e.handleSearch,placeholder:e.placeholder}))};l.propTypes={handleSearch:a.default.func.isRequired,value:a.default.string.isRequired,placeholder:a.default.string.isRequired};var i=l;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),a=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),r=t,(a=[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipcategory"},n.default.createElement("select",{className:"rfipcategory__select",onChange:this.props.handleCategory,value:this.props.value},this.props.categories.map(function(e,t){return n.default.createElement("option",{className:"rfipcategory__select__option",key:e,value:t},e)})),n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"}))}}])&&i(r.prototype,a),t}();Object.defineProperty(u,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{handleCategory:a.default.func.isRequired,value:a.default.number.isRequired,categories:a.default.arrayOf(a.default.string).isRequired}});var c=u;t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(1)),a=c(r(0)),o=c(r(10)),l=c(r(9)),i=c(r(8)),u=r(2);function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==s(n)&&"function"!=typeof n?p(this):n,Object.defineProperty(p(r),"handleCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=parseInt(e.target.value,10);Number.isNaN(t)&&(t=0),r.props.handleChangeCategory(t),r.props.handleChangePage(0)}}),Object.defineProperty(p(r),"handleSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target.value;r.props.handleChangeSearch(t)}}),r.state={},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),d(t,null,[{key:"getDerivedStateFromProps",value:function(e){var t=(0,u.getPossibleCategories)(e.icons);return null!==t&&(t=[e.allCatPlaceholder].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(t))),{categories:t,searchString:e.currentSearch}}}]),d(t,[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipdropdown__selector"},this.props.showSearch?n.default.createElement(l.default,{handleSearch:this.handleSearch,value:this.state.searchString,placeholder:this.props.searchPlaceholder}):null,this.props.showCategory&&this.state.categories&&this.state.categories.length?n.default.createElement(o.default,{handleCategory:this.handleCategory,value:this.props.currentCategory,categories:this.state.categories}):null,n.default.createElement(i.default,{categories:this.state.categories,currentCategory:this.props.currentCategory,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,value:this.props.value,currentSearch:this.props.currentSearch,handleChangeValue:this.props.handleChangeValue,currentPage:this.props.currentPage,iconsPerPage:this.props.iconsPerPage,handleChangePage:this.props.handleChangePage,renderIcon:this.props.renderIcon,noIconPlaceholder:this.props.noIconPlaceholder}))}}]),t}();Object.defineProperty(h,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.any)]).isRequired,currentCategory:a.default.number.isRequired,currentPage:a.default.number.isRequired,currentSearch:a.default.string.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.object,a.default.arrayOf(a.default.string)]),showCategory:a.default.bool.isRequired,showSearch:a.default.bool.isRequired,iconsPerPage:a.default.number.isRequired,allCatPlaceholder:a.default.string.isRequired,searchPlaceholder:a.default.string.isRequired,noIconPlaceholder:a.default.string.isRequired,renderIcon:a.default.func.isRequired,handleChangeValue:a.default.func.isRequired,handleChangeCategory:a.default.func.isRequired,handleChangePage:a.default.func.isRequired,handleChangeSearch:a.default.func.isRequired}}),Object.defineProperty(h,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null}});var y=h;t.default=y},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(1)),a=l(r(0)),o=l(r(3));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){function t(){var e,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return s(a,(r=a=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),Object.defineProperty(f(a),"handleClick",{configurable:!0,enumerable:!0,writable:!0,value:function(){a.props.onClick()}}),Object.defineProperty(f(a),"handleKeyDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){32!==e.keyCode&&13!==e.keyCode||a.props.onClick()}}),Object.defineProperty(f(a),"handleDelete",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){e.stopPropagation(),a.props.handleDeleteValue(t)}}),Object.defineProperty(f(a),"handleDeleteKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){32!==e.keyCode&&13!==e.keyCode||a.props.handleDeleteValue(t)}}),Object.defineProperty(f(a),"renderEmptyIcon",{configurable:!0,enumerable:!0,writable:!0,value:function(){return n.default.createElement("span",{className:"rfipbtn__icon--empty"},a.props.noSelectedPlaceholder)}}),r))}var r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),r=t,(a=[{key:"renderIcon",value:function(e){var t=this;return""===e||null===e||void 0===e?this.renderEmptyIcon():n.default.createElement("span",{className:"rfipbtn__icon",key:e},n.default.createElement("span",{className:"rfipbtn__elm"},this.props.renderIcon(e)),n.default.createElement("span",{className:"rfipbtn__del",onClick:function(r){return t.handleDelete(r,e)},onKeyDown:function(r){return t.handleDeleteKeyboard(r,e)},tabIndex:0,role:"button"},"×"))}},{key:"renderCurrentIcons",value:function(){var e=this;return this.props.isMulti?this.props.value.length?this.props.value.map(function(t){return e.renderIcon(t)}):this.renderEmptyIcon():this.renderIcon(this.props.value)}},{key:"render",value:function(){var e={onClick:this.handleClick,onKeyDown:this.handleKeyDown,onFocus:this.handleFocus,onBlur:this.handleBlur,tabIndex:0},t=(0,o.default)("rfipbtn__button","rfipbtn__button--".concat(this.props.isOpen?"open":"close")),r=(0,o.default)(this.props.className);return n.default.createElement("div",u({className:r,ref:this.props.domRef},e),n.default.createElement("div",{className:"rfipbtn__current"},this.renderCurrentIcons()),n.default.createElement("div",{className:t},n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"})))}}])&&c(r.prototype,a),t}();Object.defineProperty(d,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{className:a.default.string.isRequired,isOpen:a.default.bool.isRequired,onClick:a.default.func.isRequired,domRef:a.default.object.isRequired,isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,renderIcon:a.default.func.isRequired,handleDeleteValue:a.default.func.isRequired,noSelectedPlaceholder:a.default.string.isRequired}});var p=d;t.default=p},function(e,t){e.exports=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(1)),a=f(r(0)),o=f(r(3)),l=r(13),i=f(r(12)),u=f(r(11)),c=f(r(7)),s=r(2);function f(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,r){return t&&y(e.prototype,t),r&&y(e,r),e}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=[],v="",P=function(e){function t(e){var r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,a=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!a||"object"!==d(a)&&"function"!=typeof a?g(this):a,Object.defineProperty(g(r),"handleOuterClick",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target;r.isClickWithin(t)||r.closeDropdown()}}),Object.defineProperty(g(r),"handleEscapeKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e){27===e.keyCode&&r.closeDropdown()}}),Object.defineProperty(g(r),"isClickWithin",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return r.fipButtonRef.current.contains(e)||r.fipDropDownRef.current&&r.fipDropDownRef.current.contains(e)}}),Object.defineProperty(g(r),"handleToggle",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.setState(function(e){return r.handleDropDown(!e.isOpen,!1)})}}),Object.defineProperty(g(r),"closeDropdown",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.handleDropDown(!1)}}),Object.defineProperty(g(r),"handleDropDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a={isOpen:e};return a.elemClass=t.getDerivedClassName("rfip",r.props.theme,r.props.isMulti,e),a.btnClass=t.getDerivedClassName("rfipbtn",r.props.theme,r.props.isMulti,e),a.ddClass=t.getDerivedClassName("rfipdropdown",r.props.theme,r.props.isMulti,e),n&&r.setState(a),a}}),Object.defineProperty(g(r),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t;r.props.isMulti?(t=p(r.state.value)).includes(e)?(t=t.filter(function(t){return t!==e})).length||(t=m):t.push(e):t=e===r.state.value?v:e,r.setState({value:t,isOpen:!r.props.closeOnSelect}),r.props.onChange(t)}}),Object.defineProperty(g(r),"handleDeleteValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n;n=r.props.isMulti?r.state.value.filter(function(t){return t!==e}):t.getDerivedValue(n,r.props.isMulti),r.setState({value:n}),r.props.onChange(n)}}),Object.defineProperty(g(r),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentPage:e})}}),Object.defineProperty(g(r),"handleChangeCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentCategory:e,currentPage:0})}}),Object.defineProperty(g(r),"handleChangeSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentSearch:e,currentPage:0})}}),Object.defineProperty(g(r),"resetPortalStyle",{configurable:!0,enumerable:!0,writable:!0,value:function(e){["maxHeight","paddingTop","paddingBottom"].forEach(function(t){e.style[t]=null})}}),Object.defineProperty(g(r),"handlePortalEnter",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t);var n=getComputedStyle(t);r.fipPortalComputedStyle={height:n.height,paddingTop:n.paddingTop,paddingBottom:n.paddingBottom},["maxHeight","paddingTop","paddingBottom"].forEach(function(e){t.style[e]="0px"})}}),Object.defineProperty(g(r),"handlePortalEntering",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];t.style.maxHeight=r.fipPortalComputedStyle.height,t.style.paddingTop=r.fipPortalComputedStyle.paddingTop,t.style.paddingBottom=r.fipPortalComputedStyle.paddingBottom}}),Object.defineProperty(g(r),"handlePortalEntered",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t),r.props.showSearch&&void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")&&t.querySelector(".rfipsearch__input").focus()}}),Object.defineProperty(g(r),"handlePortalExit",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t);var n=getComputedStyle(t).height;t.style.maxHeight=n}}),Object.defineProperty(g(r),"handlePortalExiting",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];t.style.maxHeight="0px",t.style.paddingTop="0px",t.style.paddingBottom="0px"}}),Object.defineProperty(g(r),"renderIcon",{configurable:!0,enumerable:!0,writable:!0,value:function(e){if("function"==typeof r.props.renderFunc)return r.props.renderFunc(e);if("class"===r.props.renderUsing)return n.default.createElement("i",{className:e});var t=h({},r.props.renderUsing,r.props.convertHex?(0,s.convertToHex)(e):e);return n.default.createElement("i",t)}}),r.fipButtonRef=n.default.createRef(),r.fipDropDownRef=n.default.createRef(),r.state={currentCategory:0,currentPage:0,isOpen:!1,currentSearch:""},r.fipPortalComputedStyle=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),b(t,null,[{key:"getDerivedStateFromProps",value:function(e,r){var n={};return n.elemClass=t.getDerivedClassName("rfip",e.theme,e.isMulti,r.isOpen),n.btnClass=t.getDerivedClassName("rfipbtn",e.theme,e.isMulti,r.isOpen),n.ddClass=t.getDerivedClassName("rfipdropdown",e.theme,e.isMulti,r.isOpen),n.value=t.getDerivedValue(e.value,e.isMulti),e.showCategory||(n.currentCategory=0,n.currentPage=0),e.showSearch||(n.currentSearch="",n.currentPage=0),n}},{key:"getDerivedClassName",value:function(e,t,r,n){return(0,o.default)(e,"".concat(e,"--").concat(t),h({},"".concat(e,"--multi"),r),"".concat(e,"--").concat(n?"open":"close"))}},{key:"getDerivedValue",value:function(e,t){var r=e;return t?r=Array.isArray(e)?p(e):m:"number"!=typeof e&&"string"!=typeof e&&(r=v),r}}]),b(t,[{key:"componentDidMount",value:function(){var e=this;["click"].forEach(function(t){document.addEventListener(t,e.handleOuterClick,!1)}),document.addEventListener("keydown",this.handleEscapeKeyboard,!1),this.props.onChange(this.state.value)}},{key:"componentWillUnmount",value:function(){var e=this;["click"].forEach(function(t){document.removeEventListener(t,e.handleOuterClick,!1)}),document.removeEventListener("keydown",this.handleEscapeKeyboard,!1)}},{key:"render",value:function(){var e={currentCategory:this.state.currentCategory,currentPage:this.state.currentPage,currentSearch:this.state.currentSearch,value:this.state.value,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,showCategory:this.props.showCategory,showSearch:this.props.showSearch,iconsPerPage:this.props.iconsPerPage,allCatPlaceholder:this.props.allCatPlaceholder,searchPlaceholder:this.props.searchPlaceholder,noIconPlaceholder:this.props.noIconPlaceholder,renderIcon:this.renderIcon,handleChangeValue:this.handleChangeValue,handleChangeCategory:this.handleChangeCategory,handleChangePage:this.handleChangePage,handleChangeSearch:this.handleChangeSearch};return n.default.createElement("div",{className:this.state.elemClass,ref:this.fipRef},n.default.createElement(i.default,{className:this.state.btnClass,isOpen:this.state.isOpen,onClick:this.handleToggle,domRef:this.fipButtonRef,isMulti:this.props.isMulti,value:this.state.value,renderIcon:this.renderIcon,handleDeleteValue:this.handleDeleteValue,noSelectedPlaceholder:this.props.noSelectedPlaceholder}),n.default.createElement(l.CSSTransition,{classNames:"fipappear",timeout:300,in:this.state.isOpen,unmountOnExit:!0,onEnter:this.handlePortalEnter,onEntering:this.handlePortalEntering,onEntered:this.handlePortalEntered,onExit:this.handlePortalExit,onExiting:this.handlePortalExiting},n.default.createElement(c.default,{appendRoot:this.props.appendTo,domRef:this.fipDropDownRef,btnRef:this.fipButtonRef,className:this.state.ddClass},n.default.createElement(u.default,e))))}}]),t}();Object.defineProperty(P,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),iconsPerPage:a.default.number,theme:a.default.string,onChange:a.default.func.isRequired,showCategory:a.default.bool,showSearch:a.default.bool,value:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.number,a.default.string]),isMulti:a.default.bool,renderUsing:a.default.string,convertHex:a.default.bool,renderFunc:a.default.func,appendTo:a.default.oneOfType([a.default.bool,a.default.string]),allCatPlaceholder:a.default.string,searchPlaceholder:a.default.string,noIconPlaceholder:a.default.string,noSelectedPlaceholder:a.default.string,closeOnSelect:a.default.bool}}),Object.defineProperty(P,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null,iconsPerPage:20,theme:"default",showCategory:!0,showSearch:!0,value:null,isMulti:!1,renderUsing:"class",convertHex:!0,renderFunc:null,appendTo:!1,allCatPlaceholder:"Show from all",searchPlaceholder:"Search Icons",noIconPlaceholder:"No icons found",noSelectedPlaceholder:"Select icon",closeOnSelect:!1}}),Object.defineProperty(P,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"FontIconPicker"});var O=P;t.default=O},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(14))&&n.__esModule?n:{default:n}).default;t.default=a}]).default});


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

/***/ "./node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addClass; });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!Object(_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasClass; });
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeClass; });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    ;
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

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
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
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
  function PropTypeError(message) {
    this.message = message;
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
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
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

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
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
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
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
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
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

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
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
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.9.0
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

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
// TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

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
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
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

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
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

exports.typeOf = typeOf;
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
exports.isValidElementType = isValidElementType;
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
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/CSSTransition.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__["default"])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__["default"])(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (node, appearing) {
      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    if (type === 'appear' && phase === 'done') {
      className += " " + this.getClassNames('enter').doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    this.appliedClasses[type][phase] = className;

    _addClass(node, className);
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["classNames"]);

    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Transition__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Transition__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided and it
   * will be suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-appear`, `fade-appear-active`,
   * `fade-appear-done`, `fade-enter`, `fade-enter-active`, `fade-enter-done`,
   * `fade-exit`, `fade-exit-active`, and `fade-exit-done`.
   *
   * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
   * This allows you to define different behavior for when appearing is done and
   * when regular entering is done, using selectors like
   * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
   * epic entrance animation when element first appears in the DOM using
   * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   * simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__["classNamesShape"],

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
}) : undefined;
/* harmony default export */ __webpack_exports__["default"] = (CSSTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/ReplaceTransition.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");






/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler](react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in"]);

    var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroup__WEBPACK_IMPORTED_MODULE_5__["default"], props, inProp ? react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

ReplaceTransition.propTypes =  true ? {
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  children: function children(props, propName) {
    if (react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (ReplaceTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/SwitchTransition.js ***!
  \*********************************************************************/
/*! exports provided: modes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modes", function() { return modes; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");


var _leaveRenders, _enterRenders;






function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(oldChildren) && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"], null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child
 *
 * ```jsx
 *
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <FadeTransition key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade' >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </FadeTransition>
 *    </SwitchTransition>
 *  )
 * }
 * ```
 */

var SwitchTransition =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"],
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"] && props.mode === modes.in) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]
      };
    }

    return {
      current: react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]:
        component = enterRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]:
        component = leaveRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"]:
        component = current;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

SwitchTransition.propTypes =  true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out: New element transitions in first, then when complete, the current element transitions out.`
   *
   * @type {'out-in'|'in-out'}
   */
  mode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired])
} : undefined;
SwitchTransition.defaultProps = {
  mode: modes.out
};
/* harmony default export */ __webpack_exports__["default"] = (SwitchTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/*! exports provided: UNMOUNTED, EXITED, ENTERING, ENTERED, EXITING, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMOUNTED", function() { return UNMOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITED", function() { return EXITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERING", function() { return ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERED", function() { return ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITING", function() { return EXITING; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();
      var node = react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      // allows for nested Transitions
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null
      }, children(status, childProps));
    }

    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children);
    return (// allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(child, childProps))
    );
  };

  return Transition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"];
Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Normally a component is not transitioned if it is shown when the
   * `<Transition>` component mounts. If you want to transition on the first
   * mount set `appear` to `true`, and the component will transition in as soon
   * as the `<Transition>` mounts.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__["timeoutsShape"];
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func // Name the function so it is clearer in the documentation

} : undefined;

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;
/* harmony default export */ __webpack_exports__["default"] = (Transition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroup.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/esm/utils/ChildMapping.js");









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getInitialChildMapping"])(nextProps, handleExited) : Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getNextChildMapping"])(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getChildMapping"])(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: contextValue
      }, children);
    }

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
      value: contextValue
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (TransitionGroup);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/react-transition-group/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/index.js ***!
  \**********************************************************/
/*! exports provided: CSSTransition, ReplaceTransition, SwitchTransition, TransitionGroup, Transition, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSTransition", function() { return _CSSTransition__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/esm/ReplaceTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaceTransition", function() { return _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchTransition */ "./node_modules/react-transition-group/esm/SwitchTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchTransition", function() { return _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionGroup", function() { return _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _Transition__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _config__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/ChildMapping.js ***!
  \***********************************************************************/
/*! exports provided: getChildMapping, mergeChildMappings, getInitialChildMapping, getNextChildMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildMapping", function() { return getChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildMappings", function() { return mergeChildMappings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialChildMapping", function() { return getInitialChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextChildMapping", function() { return getNextChildMapping; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \********************************************************************/
/*! exports provided: timeoutsShape, classNamesShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutsShape", function() { return timeoutsShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNamesShape", function() { return classNamesShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  appear: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
}).isRequired]) : undefined;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
})]) : undefined;

/***/ }),

/***/ "./src/js/components/icon-select/icons.json":
/*!**************************************************!*\
  !*** ./src/js/components/icon-select/icons.json ***!
  \**************************************************/
/*! exports provided: icons, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"icons\":[\"fab fa-500px\",\"fab fa-accessible-icon\",\"fab fa-accusoft\",\"fab fa-acquisitions-incorporated\",\"fab fa-adn\",\"fab fa-adobe\",\"fab fa-adversal\",\"fab fa-affiliatetheme\",\"fab fa-airbnb\",\"fab fa-algolia\",\"fab fa-alipay\",\"fab fa-amazon-pay\",\"fab fa-amazon\",\"fab fa-amilia\",\"fab fa-android\",\"fab fa-angellist\",\"fab fa-angrycreative\",\"fab fa-angular\",\"fab fa-app-store-ios\",\"fab fa-app-store\",\"fab fa-apper\",\"fab fa-apple-pay\",\"fab fa-apple\",\"fab fa-artstation\",\"fab fa-asymmetrik\",\"fab fa-atlassian\",\"fab fa-audible\",\"fab fa-autoprefixer\",\"fab fa-avianex\",\"fab fa-aviato\",\"fab fa-aws\",\"fab fa-bandcamp\",\"fab fa-battle-net\",\"fab fa-behance-square\",\"fab fa-behance\",\"fab fa-bimobject\",\"fab fa-bitbucket\",\"fab fa-bitcoin\",\"fab fa-bity\",\"fab fa-black-tie\",\"fab fa-blackberry\",\"fab fa-blogger-b\",\"fab fa-blogger\",\"fab fa-bluetooth-b\",\"fab fa-bluetooth\",\"fab fa-bootstrap\",\"fab fa-btc\",\"fab fa-buffer\",\"fab fa-buromobelexperte\",\"fab fa-buysellads\",\"fab fa-canadian-maple-leaf\",\"fab fa-cc-amazon-pay\",\"fab fa-cc-amex\",\"fab fa-cc-apple-pay\",\"fab fa-cc-diners-club\",\"fab fa-cc-discover\",\"fab fa-cc-jcb\",\"fab fa-cc-mastercard\",\"fab fa-cc-paypal\",\"fab fa-cc-stripe\",\"fab fa-cc-visa\",\"fab fa-centercode\",\"fab fa-centos\",\"fab fa-chrome\",\"fab fa-chromecast\",\"fab fa-cloudscale\",\"fab fa-cloudsmith\",\"fab fa-cloudversify\",\"fab fa-codepen\",\"fab fa-codiepie\",\"fab fa-confluence\",\"fab fa-connectdevelop\",\"fab fa-contao\",\"fab fa-cotton-bureau\",\"fab fa-cpanel\",\"fab fa-creative-commons-by\",\"fab fa-creative-commons-nc-eu\",\"fab fa-creative-commons-nc-jp\",\"fab fa-creative-commons-nc\",\"fab fa-creative-commons-nd\",\"fab fa-creative-commons-pd-alt\",\"fab fa-creative-commons-pd\",\"fab fa-creative-commons-remix\",\"fab fa-creative-commons-sa\",\"fab fa-creative-commons-sampling-plus\",\"fab fa-creative-commons-sampling\",\"fab fa-creative-commons-share\",\"fab fa-creative-commons-zero\",\"fab fa-creative-commons\",\"fab fa-critical-role\",\"fab fa-css3-alt\",\"fab fa-css3\",\"fab fa-cuttlefish\",\"fab fa-d-and-d-beyond\",\"fab fa-d-and-d\",\"fab fa-dashcube\",\"fab fa-delicious\",\"fab fa-deploydog\",\"fab fa-deskpro\",\"fab fa-dev\",\"fab fa-deviantart\",\"fab fa-dhl\",\"fab fa-diaspora\",\"fab fa-digg\",\"fab fa-digital-ocean\",\"fab fa-discord\",\"fab fa-discourse\",\"fab fa-dochub\",\"fab fa-docker\",\"fab fa-draft2digital\",\"fab fa-dribbble-square\",\"fab fa-dribbble\",\"fab fa-dropbox\",\"fab fa-drupal\",\"fab fa-dyalog\",\"fab fa-earlybirds\",\"fab fa-ebay\",\"fab fa-edge\",\"fab fa-elementor\",\"fab fa-ello\",\"fab fa-ember\",\"fab fa-empire\",\"fab fa-envira\",\"fab fa-erlang\",\"fab fa-ethereum\",\"fab fa-etsy\",\"fab fa-evernote\",\"fab fa-expeditedssl\",\"fab fa-facebook-f\",\"fab fa-facebook-messenger\",\"fab fa-facebook-square\",\"fab fa-facebook\",\"fab fa-fantasy-flight-games\",\"fab fa-fedex\",\"fab fa-fedora\",\"fab fa-figma\",\"fab fa-firefox\",\"fab fa-first-order-alt\",\"fab fa-first-order\",\"fab fa-firstdraft\",\"fab fa-flickr\",\"fab fa-flipboard\",\"fab fa-fly\",\"fab fa-font-awesome-alt\",\"fab fa-font-awesome-flag\",\"fab fa-font-awesome-logo-full\",\"fab fa-font-awesome\",\"fab fa-fonticons-fi\",\"fab fa-fonticons\",\"fab fa-fort-awesome-alt\",\"fab fa-fort-awesome\",\"fab fa-forumbee\",\"fab fa-foursquare\",\"fab fa-free-code-camp\",\"fab fa-freebsd\",\"fab fa-fulcrum\",\"fab fa-galactic-republic\",\"fab fa-galactic-senate\",\"fab fa-get-pocket\",\"fab fa-gg-circle\",\"fab fa-gg\",\"fab fa-git-alt\",\"fab fa-git-square\",\"fab fa-git\",\"fab fa-github-alt\",\"fab fa-github-square\",\"fab fa-github\",\"fab fa-gitkraken\",\"fab fa-gitlab\",\"fab fa-gitter\",\"fab fa-glide-g\",\"fab fa-glide\",\"fab fa-gofore\",\"fab fa-goodreads-g\",\"fab fa-goodreads\",\"fab fa-google-drive\",\"fab fa-google-play\",\"fab fa-google-plus-g\",\"fab fa-google-plus-square\",\"fab fa-google-plus\",\"fab fa-google-wallet\",\"fab fa-google\",\"fab fa-gratipay\",\"fab fa-grav\",\"fab fa-gripfire\",\"fab fa-grunt\",\"fab fa-gulp\",\"fab fa-hacker-news-square\",\"fab fa-hacker-news\",\"fab fa-hackerrank\",\"fab fa-hips\",\"fab fa-hire-a-helper\",\"fab fa-hooli\",\"fab fa-hornbill\",\"fab fa-hotjar\",\"fab fa-houzz\",\"fab fa-html5\",\"fab fa-hubspot\",\"fab fa-imdb\",\"fab fa-instagram\",\"fab fa-intercom\",\"fab fa-internet-explorer\",\"fab fa-invision\",\"fab fa-ioxhost\",\"fab fa-itch-io\",\"fab fa-itunes-note\",\"fab fa-itunes\",\"fab fa-java\",\"fab fa-jedi-order\",\"fab fa-jenkins\",\"fab fa-jira\",\"fab fa-joget\",\"fab fa-joomla\",\"fab fa-js-square\",\"fab fa-js\",\"fab fa-jsfiddle\",\"fab fa-kaggle\",\"fab fa-keybase\",\"fab fa-keycdn\",\"fab fa-kickstarter-k\",\"fab fa-kickstarter\",\"fab fa-korvue\",\"fab fa-laravel\",\"fab fa-lastfm-square\",\"fab fa-lastfm\",\"fab fa-leanpub\",\"fab fa-less\",\"fab fa-line\",\"fab fa-linkedin-in\",\"fab fa-linkedin\",\"fab fa-linode\",\"fab fa-linux\",\"fab fa-lyft\",\"fab fa-magento\",\"fab fa-mailchimp\",\"fab fa-mandalorian\",\"fab fa-markdown\",\"fab fa-mastodon\",\"fab fa-maxcdn\",\"fab fa-medapps\",\"fab fa-medium-m\",\"fab fa-medium\",\"fab fa-medrt\",\"fab fa-meetup\",\"fab fa-megaport\",\"fab fa-mendeley\",\"fab fa-microsoft\",\"fab fa-mix\",\"fab fa-mixcloud\",\"fab fa-mizuni\",\"fab fa-modx\",\"fab fa-monero\",\"fab fa-napster\",\"fab fa-neos\",\"fab fa-nimblr\",\"fab fa-node-js\",\"fab fa-node\",\"fab fa-npm\",\"fab fa-ns8\",\"fab fa-nutritionix\",\"fab fa-odnoklassniki-square\",\"fab fa-odnoklassniki\",\"fab fa-old-republic\",\"fab fa-opencart\",\"fab fa-openid\",\"fab fa-opera\",\"fab fa-optin-monster\",\"fab fa-osi\",\"fab fa-page4\",\"fab fa-pagelines\",\"fab fa-palfed\",\"fab fa-patreon\",\"fab fa-paypal\",\"fab fa-penny-arcade\",\"fab fa-periscope\",\"fab fa-phabricator\",\"fab fa-phoenix-framework\",\"fab fa-phoenix-squadron\",\"fab fa-php\",\"fab fa-pied-piper-alt\",\"fab fa-pied-piper-hat\",\"fab fa-pied-piper-pp\",\"fab fa-pied-piper\",\"fab fa-pinterest-p\",\"fab fa-pinterest-square\",\"fab fa-pinterest\",\"fab fa-playstation\",\"fab fa-product-hunt\",\"fab fa-pushed\",\"fab fa-python\",\"fab fa-qq\",\"fab fa-quinscape\",\"fab fa-quora\",\"fab fa-r-project\",\"fab fa-raspberry-pi\",\"fab fa-ravelry\",\"fab fa-react\",\"fab fa-reacteurope\",\"fab fa-readme\",\"fab fa-rebel\",\"fab fa-red-river\",\"fab fa-reddit-alien\",\"fab fa-reddit-square\",\"fab fa-reddit\",\"fab fa-redhat\",\"fab fa-renren\",\"fab fa-replyd\",\"fab fa-researchgate\",\"fab fa-resolving\",\"fab fa-rev\",\"fab fa-rocketchat\",\"fab fa-rockrms\",\"fab fa-safari\",\"fab fa-salesforce\",\"fab fa-sass\",\"fab fa-schlix\",\"fab fa-scribd\",\"fab fa-searchengin\",\"fab fa-sellcast\",\"fab fa-sellsy\",\"fab fa-servicestack\",\"fab fa-shirtsinbulk\",\"fab fa-shopware\",\"fab fa-simplybuilt\",\"fab fa-sistrix\",\"fab fa-sith\",\"fab fa-sketch\",\"fab fa-skyatlas\",\"fab fa-skype\",\"fab fa-slack-hash\",\"fab fa-slack\",\"fab fa-slideshare\",\"fab fa-snapchat-ghost\",\"fab fa-snapchat-square\",\"fab fa-snapchat\",\"fab fa-soundcloud\",\"fab fa-sourcetree\",\"fab fa-speakap\",\"fab fa-speaker-deck\",\"fab fa-spotify\",\"fab fa-squarespace\",\"fab fa-stack-exchange\",\"fab fa-stack-overflow\",\"fab fa-stackpath\",\"fab fa-staylinked\",\"fab fa-steam-square\",\"fab fa-steam-symbol\",\"fab fa-steam\",\"fab fa-sticker-mule\",\"fab fa-strava\",\"fab fa-stripe-s\",\"fab fa-stripe\",\"fab fa-studiovinari\",\"fab fa-stumbleupon-circle\",\"fab fa-stumbleupon\",\"fab fa-superpowers\",\"fab fa-supple\",\"fab fa-suse\",\"fab fa-symfony\",\"fab fa-teamspeak\",\"fab fa-telegram-plane\",\"fab fa-telegram\",\"fab fa-tencent-weibo\",\"fab fa-the-red-yeti\",\"fab fa-themeco\",\"fab fa-themeisle\",\"fab fa-think-peaks\",\"fab fa-trade-federation\",\"fab fa-trello\",\"fab fa-tripadvisor\",\"fab fa-tumblr-square\",\"fab fa-tumblr\",\"fab fa-twitch\",\"fab fa-twitter-square\",\"fab fa-twitter\",\"fab fa-typo3\",\"fab fa-uber\",\"fab fa-ubuntu\",\"fab fa-uikit\",\"fab fa-uniregistry\",\"fab fa-untappd\",\"fab fa-ups\",\"fab fa-usb\",\"fab fa-usps\",\"fab fa-ussunnah\",\"fab fa-vaadin\",\"fab fa-viacoin\",\"fab fa-viadeo-square\",\"fab fa-viadeo\",\"fab fa-viber\",\"fab fa-vimeo-square\",\"fab fa-vimeo-v\",\"fab fa-vimeo\",\"fab fa-vine\",\"fab fa-vk\",\"fab fa-vnv\",\"fab fa-vuejs\",\"fab fa-waze\",\"fab fa-weebly\",\"fab fa-weibo\",\"fab fa-weixin\",\"fab fa-whatsapp-square\",\"fab fa-whatsapp\",\"fab fa-whmcs\",\"fab fa-wikipedia-w\",\"fab fa-windows\",\"fab fa-wix\",\"fab fa-wizards-of-the-coast\",\"fab fa-wolf-pack-battalion\",\"fab fa-wordpress-simple\",\"fab fa-wordpress\",\"fab fa-wpbeginner\",\"fab fa-wpexplorer\",\"fab fa-wpforms\",\"fab fa-wpressr\",\"fab fa-xbox\",\"fab fa-xing-square\",\"fab fa-xing\",\"fab fa-y-combinator\",\"fab fa-yahoo\",\"fab fa-yammer\",\"fab fa-yandex-international\",\"fab fa-yandex\",\"fab fa-yarn\",\"fab fa-yelp\",\"fab fa-yoast\",\"fab fa-youtube-square\",\"fab fa-youtube\",\"fab fa-zhihu\",\"far fa-address-book\",\"far fa-address-card\",\"far fa-angry\",\"far fa-arrow-alt-circle-down\",\"far fa-arrow-alt-circle-left\",\"far fa-arrow-alt-circle-right\",\"far fa-arrow-alt-circle-up\",\"far fa-bell-slash\",\"far fa-bell\",\"far fa-bookmark\",\"far fa-building\",\"far fa-calendar-alt\",\"far fa-calendar-check\",\"far fa-calendar-minus\",\"far fa-calendar-plus\",\"far fa-calendar-times\",\"far fa-calendar\",\"far fa-caret-square-down\",\"far fa-caret-square-left\",\"far fa-caret-square-right\",\"far fa-caret-square-up\",\"far fa-chart-bar\",\"far fa-check-circle\",\"far fa-check-square\",\"far fa-circle\",\"far fa-clipboard\",\"far fa-clock\",\"far fa-clone\",\"far fa-closed-captioning\",\"far fa-comment-alt\",\"far fa-comment-dots\",\"far fa-comment\",\"far fa-comments\",\"far fa-compass\",\"far fa-copy\",\"far fa-copyright\",\"far fa-credit-card\",\"far fa-dizzy\",\"far fa-dot-circle\",\"far fa-edit\",\"far fa-envelope-open\",\"far fa-envelope\",\"far fa-eye-slash\",\"far fa-eye\",\"far fa-file-alt\",\"far fa-file-archive\",\"far fa-file-audio\",\"far fa-file-code\",\"far fa-file-excel\",\"far fa-file-image\",\"far fa-file-pdf\",\"far fa-file-powerpoint\",\"far fa-file-video\",\"far fa-file-word\",\"far fa-file\",\"far fa-flag\",\"far fa-flushed\",\"far fa-folder-open\",\"far fa-folder\",\"far fa-font-awesome-logo-full\",\"far fa-frown-open\",\"far fa-frown\",\"far fa-futbol\",\"far fa-gem\",\"far fa-grimace\",\"far fa-grin-alt\",\"far fa-grin-beam-sweat\",\"far fa-grin-beam\",\"far fa-grin-hearts\",\"far fa-grin-squint-tears\",\"far fa-grin-squint\",\"far fa-grin-stars\",\"far fa-grin-tears\",\"far fa-grin-tongue-squint\",\"far fa-grin-tongue-wink\",\"far fa-grin-tongue\",\"far fa-grin-wink\",\"far fa-grin\",\"far fa-hand-lizard\",\"far fa-hand-paper\",\"far fa-hand-peace\",\"far fa-hand-point-down\",\"far fa-hand-point-left\",\"far fa-hand-point-right\",\"far fa-hand-point-up\",\"far fa-hand-pointer\",\"far fa-hand-rock\",\"far fa-hand-scissors\",\"far fa-hand-spock\",\"far fa-handshake\",\"far fa-hdd\",\"far fa-heart\",\"far fa-hospital\",\"far fa-hourglass\",\"far fa-id-badge\",\"far fa-id-card\",\"far fa-image\",\"far fa-images\",\"far fa-keyboard\",\"far fa-kiss-beam\",\"far fa-kiss-wink-heart\",\"far fa-kiss\",\"far fa-laugh-beam\",\"far fa-laugh-squint\",\"far fa-laugh-wink\",\"far fa-laugh\",\"far fa-lemon\",\"far fa-life-ring\",\"far fa-lightbulb\",\"far fa-list-alt\",\"far fa-map\",\"far fa-meh-blank\",\"far fa-meh-rolling-eyes\",\"far fa-meh\",\"far fa-minus-square\",\"far fa-money-bill-alt\",\"far fa-moon\",\"far fa-newspaper\",\"far fa-object-group\",\"far fa-object-ungroup\",\"far fa-paper-plane\",\"far fa-pause-circle\",\"far fa-play-circle\",\"far fa-plus-square\",\"far fa-question-circle\",\"far fa-registered\",\"far fa-sad-cry\",\"far fa-sad-tear\",\"far fa-save\",\"far fa-share-square\",\"far fa-smile-beam\",\"far fa-smile-wink\",\"far fa-smile\",\"far fa-snowflake\",\"far fa-square\",\"far fa-star-half\",\"far fa-star\",\"far fa-sticky-note\",\"far fa-stop-circle\",\"far fa-sun\",\"far fa-surprise\",\"far fa-thumbs-down\",\"far fa-thumbs-up\",\"far fa-times-circle\",\"far fa-tired\",\"far fa-trash-alt\",\"far fa-user-circle\",\"far fa-user\",\"far fa-window-close\",\"far fa-window-maximize\",\"far fa-window-minimize\",\"far fa-window-restore\",\"fas fa-ad\",\"fas fa-address-book\",\"fas fa-address-card\",\"fas fa-adjust\",\"fas fa-air-freshener\",\"fas fa-align-center\",\"fas fa-align-justify\",\"fas fa-align-left\",\"fas fa-align-right\",\"fas fa-allergies\",\"fas fa-ambulance\",\"fas fa-american-sign-language-interpreting\",\"fas fa-anchor\",\"fas fa-angle-double-down\",\"fas fa-angle-double-left\",\"fas fa-angle-double-right\",\"fas fa-angle-double-up\",\"fas fa-angle-down\",\"fas fa-angle-left\",\"fas fa-angle-right\",\"fas fa-angle-up\",\"fas fa-angry\",\"fas fa-ankh\",\"fas fa-apple-alt\",\"fas fa-archive\",\"fas fa-archway\",\"fas fa-arrow-alt-circle-down\",\"fas fa-arrow-alt-circle-left\",\"fas fa-arrow-alt-circle-right\",\"fas fa-arrow-alt-circle-up\",\"fas fa-arrow-circle-down\",\"fas fa-arrow-circle-left\",\"fas fa-arrow-circle-right\",\"fas fa-arrow-circle-up\",\"fas fa-arrow-down\",\"fas fa-arrow-left\",\"fas fa-arrow-right\",\"fas fa-arrow-up\",\"fas fa-arrows-alt-h\",\"fas fa-arrows-alt-v\",\"fas fa-arrows-alt\",\"fas fa-assistive-listening-systems\",\"fas fa-asterisk\",\"fas fa-at\",\"fas fa-atlas\",\"fas fa-atom\",\"fas fa-audio-description\",\"fas fa-award\",\"fas fa-baby-carriage\",\"fas fa-baby\",\"fas fa-backspace\",\"fas fa-backward\",\"fas fa-bacon\",\"fas fa-balance-scale-left\",\"fas fa-balance-scale-right\",\"fas fa-balance-scale\",\"fas fa-ban\",\"fas fa-band-aid\",\"fas fa-barcode\",\"fas fa-bars\",\"fas fa-baseball-ball\",\"fas fa-basketball-ball\",\"fas fa-bath\",\"fas fa-battery-empty\",\"fas fa-battery-full\",\"fas fa-battery-half\",\"fas fa-battery-quarter\",\"fas fa-battery-three-quarters\",\"fas fa-bed\",\"fas fa-beer\",\"fas fa-bell-slash\",\"fas fa-bell\",\"fas fa-bezier-curve\",\"fas fa-bible\",\"fas fa-bicycle\",\"fas fa-biking\",\"fas fa-binoculars\",\"fas fa-biohazard\",\"fas fa-birthday-cake\",\"fas fa-blender-phone\",\"fas fa-blender\",\"fas fa-blind\",\"fas fa-blog\",\"fas fa-bold\",\"fas fa-bolt\",\"fas fa-bomb\",\"fas fa-bone\",\"fas fa-bong\",\"fas fa-book-dead\",\"fas fa-book-medical\",\"fas fa-book-open\",\"fas fa-book-reader\",\"fas fa-book\",\"fas fa-bookmark\",\"fas fa-border-all\",\"fas fa-border-none\",\"fas fa-border-style\",\"fas fa-bowling-ball\",\"fas fa-box-open\",\"fas fa-box\",\"fas fa-boxes\",\"fas fa-braille\",\"fas fa-brain\",\"fas fa-bread-slice\",\"fas fa-briefcase-medical\",\"fas fa-briefcase\",\"fas fa-broadcast-tower\",\"fas fa-broom\",\"fas fa-brush\",\"fas fa-bug\",\"fas fa-building\",\"fas fa-bullhorn\",\"fas fa-bullseye\",\"fas fa-burn\",\"fas fa-bus-alt\",\"fas fa-bus\",\"fas fa-business-time\",\"fas fa-calculator\",\"fas fa-calendar-alt\",\"fas fa-calendar-check\",\"fas fa-calendar-day\",\"fas fa-calendar-minus\",\"fas fa-calendar-plus\",\"fas fa-calendar-times\",\"fas fa-calendar-week\",\"fas fa-calendar\",\"fas fa-camera-retro\",\"fas fa-camera\",\"fas fa-campground\",\"fas fa-candy-cane\",\"fas fa-cannabis\",\"fas fa-capsules\",\"fas fa-car-alt\",\"fas fa-car-battery\",\"fas fa-car-crash\",\"fas fa-car-side\",\"fas fa-car\",\"fas fa-caret-down\",\"fas fa-caret-left\",\"fas fa-caret-right\",\"fas fa-caret-square-down\",\"fas fa-caret-square-left\",\"fas fa-caret-square-right\",\"fas fa-caret-square-up\",\"fas fa-caret-up\",\"fas fa-carrot\",\"fas fa-cart-arrow-down\",\"fas fa-cart-plus\",\"fas fa-cash-register\",\"fas fa-cat\",\"fas fa-certificate\",\"fas fa-chair\",\"fas fa-chalkboard-teacher\",\"fas fa-chalkboard\",\"fas fa-charging-station\",\"fas fa-chart-area\",\"fas fa-chart-bar\",\"fas fa-chart-line\",\"fas fa-chart-pie\",\"fas fa-check-circle\",\"fas fa-check-double\",\"fas fa-check-square\",\"fas fa-check\",\"fas fa-cheese\",\"fas fa-chess-bishop\",\"fas fa-chess-board\",\"fas fa-chess-king\",\"fas fa-chess-knight\",\"fas fa-chess-pawn\",\"fas fa-chess-queen\",\"fas fa-chess-rook\",\"fas fa-chess\",\"fas fa-chevron-circle-down\",\"fas fa-chevron-circle-left\",\"fas fa-chevron-circle-right\",\"fas fa-chevron-circle-up\",\"fas fa-chevron-down\",\"fas fa-chevron-left\",\"fas fa-chevron-right\",\"fas fa-chevron-up\",\"fas fa-child\",\"fas fa-church\",\"fas fa-circle-notch\",\"fas fa-circle\",\"fas fa-city\",\"fas fa-clinic-medical\",\"fas fa-clipboard-check\",\"fas fa-clipboard-list\",\"fas fa-clipboard\",\"fas fa-clock\",\"fas fa-clone\",\"fas fa-closed-captioning\",\"fas fa-cloud-download-alt\",\"fas fa-cloud-meatball\",\"fas fa-cloud-moon-rain\",\"fas fa-cloud-moon\",\"fas fa-cloud-rain\",\"fas fa-cloud-showers-heavy\",\"fas fa-cloud-sun-rain\",\"fas fa-cloud-sun\",\"fas fa-cloud-upload-alt\",\"fas fa-cloud\",\"fas fa-cocktail\",\"fas fa-code-branch\",\"fas fa-code\",\"fas fa-coffee\",\"fas fa-cog\",\"fas fa-cogs\",\"fas fa-coins\",\"fas fa-columns\",\"fas fa-comment-alt\",\"fas fa-comment-dollar\",\"fas fa-comment-dots\",\"fas fa-comment-medical\",\"fas fa-comment-slash\",\"fas fa-comment\",\"fas fa-comments-dollar\",\"fas fa-comments\",\"fas fa-compact-disc\",\"fas fa-compass\",\"fas fa-compress-arrows-alt\",\"fas fa-compress\",\"fas fa-concierge-bell\",\"fas fa-cookie-bite\",\"fas fa-cookie\",\"fas fa-copy\",\"fas fa-copyright\",\"fas fa-couch\",\"fas fa-credit-card\",\"fas fa-crop-alt\",\"fas fa-crop\",\"fas fa-cross\",\"fas fa-crosshairs\",\"fas fa-crow\",\"fas fa-crown\",\"fas fa-crutch\",\"fas fa-cube\",\"fas fa-cubes\",\"fas fa-cut\",\"fas fa-database\",\"fas fa-deaf\",\"fas fa-democrat\",\"fas fa-desktop\",\"fas fa-dharmachakra\",\"fas fa-diagnoses\",\"fas fa-dice-d20\",\"fas fa-dice-d6\",\"fas fa-dice-five\",\"fas fa-dice-four\",\"fas fa-dice-one\",\"fas fa-dice-six\",\"fas fa-dice-three\",\"fas fa-dice-two\",\"fas fa-dice\",\"fas fa-digital-tachograph\",\"fas fa-directions\",\"fas fa-divide\",\"fas fa-dizzy\",\"fas fa-dna\",\"fas fa-dog\",\"fas fa-dollar-sign\",\"fas fa-dolly-flatbed\",\"fas fa-dolly\",\"fas fa-donate\",\"fas fa-door-closed\",\"fas fa-door-open\",\"fas fa-dot-circle\",\"fas fa-dove\",\"fas fa-download\",\"fas fa-drafting-compass\",\"fas fa-dragon\",\"fas fa-draw-polygon\",\"fas fa-drum-steelpan\",\"fas fa-drum\",\"fas fa-drumstick-bite\",\"fas fa-dumbbell\",\"fas fa-dumpster-fire\",\"fas fa-dumpster\",\"fas fa-dungeon\",\"fas fa-edit\",\"fas fa-egg\",\"fas fa-eject\",\"fas fa-ellipsis-h\",\"fas fa-ellipsis-v\",\"fas fa-envelope-open-text\",\"fas fa-envelope-open\",\"fas fa-envelope-square\",\"fas fa-envelope\",\"fas fa-equals\",\"fas fa-eraser\",\"fas fa-ethernet\",\"fas fa-euro-sign\",\"fas fa-exchange-alt\",\"fas fa-exclamation-circle\",\"fas fa-exclamation-triangle\",\"fas fa-exclamation\",\"fas fa-expand-arrows-alt\",\"fas fa-expand\",\"fas fa-external-link-alt\",\"fas fa-external-link-square-alt\",\"fas fa-eye-dropper\",\"fas fa-eye-slash\",\"fas fa-eye\",\"fas fa-fan\",\"fas fa-fast-backward\",\"fas fa-fast-forward\",\"fas fa-fax\",\"fas fa-feather-alt\",\"fas fa-feather\",\"fas fa-female\",\"fas fa-fighter-jet\",\"fas fa-file-alt\",\"fas fa-file-archive\",\"fas fa-file-audio\",\"fas fa-file-code\",\"fas fa-file-contract\",\"fas fa-file-csv\",\"fas fa-file-download\",\"fas fa-file-excel\",\"fas fa-file-export\",\"fas fa-file-image\",\"fas fa-file-import\",\"fas fa-file-invoice-dollar\",\"fas fa-file-invoice\",\"fas fa-file-medical-alt\",\"fas fa-file-medical\",\"fas fa-file-pdf\",\"fas fa-file-powerpoint\",\"fas fa-file-prescription\",\"fas fa-file-signature\",\"fas fa-file-upload\",\"fas fa-file-video\",\"fas fa-file-word\",\"fas fa-file\",\"fas fa-fill-drip\",\"fas fa-fill\",\"fas fa-film\",\"fas fa-filter\",\"fas fa-fingerprint\",\"fas fa-fire-alt\",\"fas fa-fire-extinguisher\",\"fas fa-fire\",\"fas fa-first-aid\",\"fas fa-fish\",\"fas fa-fist-raised\",\"fas fa-flag-checkered\",\"fas fa-flag-usa\",\"fas fa-flag\",\"fas fa-flask\",\"fas fa-flushed\",\"fas fa-folder-minus\",\"fas fa-folder-open\",\"fas fa-folder-plus\",\"fas fa-folder\",\"fas fa-font-awesome-logo-full\",\"fas fa-font\",\"fas fa-football-ball\",\"fas fa-forward\",\"fas fa-frog\",\"fas fa-frown-open\",\"fas fa-frown\",\"fas fa-funnel-dollar\",\"fas fa-futbol\",\"fas fa-gamepad\",\"fas fa-gas-pump\",\"fas fa-gavel\",\"fas fa-gem\",\"fas fa-genderless\",\"fas fa-ghost\",\"fas fa-gift\",\"fas fa-gifts\",\"fas fa-glass-cheers\",\"fas fa-glass-martini-alt\",\"fas fa-glass-martini\",\"fas fa-glass-whiskey\",\"fas fa-glasses\",\"fas fa-globe-africa\",\"fas fa-globe-americas\",\"fas fa-globe-asia\",\"fas fa-globe-europe\",\"fas fa-globe\",\"fas fa-golf-ball\",\"fas fa-gopuram\",\"fas fa-graduation-cap\",\"fas fa-greater-than-equal\",\"fas fa-greater-than\",\"fas fa-grimace\",\"fas fa-grin-alt\",\"fas fa-grin-beam-sweat\",\"fas fa-grin-beam\",\"fas fa-grin-hearts\",\"fas fa-grin-squint-tears\",\"fas fa-grin-squint\",\"fas fa-grin-stars\",\"fas fa-grin-tears\",\"fas fa-grin-tongue-squint\",\"fas fa-grin-tongue-wink\",\"fas fa-grin-tongue\",\"fas fa-grin-wink\",\"fas fa-grin\",\"fas fa-grip-horizontal\",\"fas fa-grip-lines-vertical\",\"fas fa-grip-lines\",\"fas fa-grip-vertical\",\"fas fa-guitar\",\"fas fa-h-square\",\"fas fa-hamburger\",\"fas fa-hammer\",\"fas fa-hamsa\",\"fas fa-hand-holding-heart\",\"fas fa-hand-holding-usd\",\"fas fa-hand-holding\",\"fas fa-hand-lizard\",\"fas fa-hand-middle-finger\",\"fas fa-hand-paper\",\"fas fa-hand-peace\",\"fas fa-hand-point-down\",\"fas fa-hand-point-left\",\"fas fa-hand-point-right\",\"fas fa-hand-point-up\",\"fas fa-hand-pointer\",\"fas fa-hand-rock\",\"fas fa-hand-scissors\",\"fas fa-hand-spock\",\"fas fa-hands-helping\",\"fas fa-hands\",\"fas fa-handshake\",\"fas fa-hanukiah\",\"fas fa-hard-hat\",\"fas fa-hashtag\",\"fas fa-hat-wizard\",\"fas fa-haykal\",\"fas fa-hdd\",\"fas fa-heading\",\"fas fa-headphones-alt\",\"fas fa-headphones\",\"fas fa-headset\",\"fas fa-heart-broken\",\"fas fa-heart\",\"fas fa-heartbeat\",\"fas fa-helicopter\",\"fas fa-highlighter\",\"fas fa-hiking\",\"fas fa-hippo\",\"fas fa-history\",\"fas fa-hockey-puck\",\"fas fa-holly-berry\",\"fas fa-home\",\"fas fa-horse-head\",\"fas fa-horse\",\"fas fa-hospital-alt\",\"fas fa-hospital-symbol\",\"fas fa-hospital\",\"fas fa-hot-tub\",\"fas fa-hotdog\",\"fas fa-hotel\",\"fas fa-hourglass-end\",\"fas fa-hourglass-half\",\"fas fa-hourglass-start\",\"fas fa-hourglass\",\"fas fa-house-damage\",\"fas fa-hryvnia\",\"fas fa-i-cursor\",\"fas fa-ice-cream\",\"fas fa-icicles\",\"fas fa-icons\",\"fas fa-id-badge\",\"fas fa-id-card-alt\",\"fas fa-id-card\",\"fas fa-igloo\",\"fas fa-image\",\"fas fa-images\",\"fas fa-inbox\",\"fas fa-indent\",\"fas fa-industry\",\"fas fa-infinity\",\"fas fa-info-circle\",\"fas fa-info\",\"fas fa-italic\",\"fas fa-jedi\",\"fas fa-joint\",\"fas fa-journal-whills\",\"fas fa-kaaba\",\"fas fa-key\",\"fas fa-keyboard\",\"fas fa-khanda\",\"fas fa-kiss-beam\",\"fas fa-kiss-wink-heart\",\"fas fa-kiss\",\"fas fa-kiwi-bird\",\"fas fa-landmark\",\"fas fa-language\",\"fas fa-laptop-code\",\"fas fa-laptop-medical\",\"fas fa-laptop\",\"fas fa-laugh-beam\",\"fas fa-laugh-squint\",\"fas fa-laugh-wink\",\"fas fa-laugh\",\"fas fa-layer-group\",\"fas fa-leaf\",\"fas fa-lemon\",\"fas fa-less-than-equal\",\"fas fa-less-than\",\"fas fa-level-down-alt\",\"fas fa-level-up-alt\",\"fas fa-life-ring\",\"fas fa-lightbulb\",\"fas fa-link\",\"fas fa-lira-sign\",\"fas fa-list-alt\",\"fas fa-list-ol\",\"fas fa-list-ul\",\"fas fa-list\",\"fas fa-location-arrow\",\"fas fa-lock-open\",\"fas fa-lock\",\"fas fa-long-arrow-alt-down\",\"fas fa-long-arrow-alt-left\",\"fas fa-long-arrow-alt-right\",\"fas fa-long-arrow-alt-up\",\"fas fa-low-vision\",\"fas fa-luggage-cart\",\"fas fa-magic\",\"fas fa-magnet\",\"fas fa-mail-bulk\",\"fas fa-male\",\"fas fa-map-marked-alt\",\"fas fa-map-marked\",\"fas fa-map-marker-alt\",\"fas fa-map-marker\",\"fas fa-map-pin\",\"fas fa-map-signs\",\"fas fa-map\",\"fas fa-marker\",\"fas fa-mars-double\",\"fas fa-mars-stroke-h\",\"fas fa-mars-stroke-v\",\"fas fa-mars-stroke\",\"fas fa-mars\",\"fas fa-mask\",\"fas fa-medal\",\"fas fa-medkit\",\"fas fa-meh-blank\",\"fas fa-meh-rolling-eyes\",\"fas fa-meh\",\"fas fa-memory\",\"fas fa-menorah\",\"fas fa-mercury\",\"fas fa-meteor\",\"fas fa-microchip\",\"fas fa-microphone-alt-slash\",\"fas fa-microphone-alt\",\"fas fa-microphone-slash\",\"fas fa-microphone\",\"fas fa-microscope\",\"fas fa-minus-circle\",\"fas fa-minus-square\",\"fas fa-minus\",\"fas fa-mitten\",\"fas fa-mobile-alt\",\"fas fa-mobile\",\"fas fa-money-bill-alt\",\"fas fa-money-bill-wave-alt\",\"fas fa-money-bill-wave\",\"fas fa-money-bill\",\"fas fa-money-check-alt\",\"fas fa-money-check\",\"fas fa-monument\",\"fas fa-moon\",\"fas fa-mortar-pestle\",\"fas fa-mosque\",\"fas fa-motorcycle\",\"fas fa-mountain\",\"fas fa-mouse-pointer\",\"fas fa-mug-hot\",\"fas fa-music\",\"fas fa-network-wired\",\"fas fa-neuter\",\"fas fa-newspaper\",\"fas fa-not-equal\",\"fas fa-notes-medical\",\"fas fa-object-group\",\"fas fa-object-ungroup\",\"fas fa-oil-can\",\"fas fa-om\",\"fas fa-otter\",\"fas fa-outdent\",\"fas fa-pager\",\"fas fa-paint-brush\",\"fas fa-paint-roller\",\"fas fa-palette\",\"fas fa-pallet\",\"fas fa-paper-plane\",\"fas fa-paperclip\",\"fas fa-parachute-box\",\"fas fa-paragraph\",\"fas fa-parking\",\"fas fa-passport\",\"fas fa-pastafarianism\",\"fas fa-paste\",\"fas fa-pause-circle\",\"fas fa-pause\",\"fas fa-paw\",\"fas fa-peace\",\"fas fa-pen-alt\",\"fas fa-pen-fancy\",\"fas fa-pen-nib\",\"fas fa-pen-square\",\"fas fa-pen\",\"fas fa-pencil-alt\",\"fas fa-pencil-ruler\",\"fas fa-people-carry\",\"fas fa-pepper-hot\",\"fas fa-percent\",\"fas fa-percentage\",\"fas fa-person-booth\",\"fas fa-phone-alt\",\"fas fa-phone-slash\",\"fas fa-phone-square-alt\",\"fas fa-phone-square\",\"fas fa-phone-volume\",\"fas fa-phone\",\"fas fa-photo-video\",\"fas fa-piggy-bank\",\"fas fa-pills\",\"fas fa-pizza-slice\",\"fas fa-place-of-worship\",\"fas fa-plane-arrival\",\"fas fa-plane-departure\",\"fas fa-plane\",\"fas fa-play-circle\",\"fas fa-play\",\"fas fa-plug\",\"fas fa-plus-circle\",\"fas fa-plus-square\",\"fas fa-plus\",\"fas fa-podcast\",\"fas fa-poll-h\",\"fas fa-poll\",\"fas fa-poo-storm\",\"fas fa-poo\",\"fas fa-poop\",\"fas fa-portrait\",\"fas fa-pound-sign\",\"fas fa-power-off\",\"fas fa-pray\",\"fas fa-praying-hands\",\"fas fa-prescription-bottle-alt\",\"fas fa-prescription-bottle\",\"fas fa-prescription\",\"fas fa-print\",\"fas fa-procedures\",\"fas fa-project-diagram\",\"fas fa-puzzle-piece\",\"fas fa-qrcode\",\"fas fa-question-circle\",\"fas fa-question\",\"fas fa-quidditch\",\"fas fa-quote-left\",\"fas fa-quote-right\",\"fas fa-quran\",\"fas fa-radiation-alt\",\"fas fa-radiation\",\"fas fa-rainbow\",\"fas fa-random\",\"fas fa-receipt\",\"fas fa-recycle\",\"fas fa-redo-alt\",\"fas fa-redo\",\"fas fa-registered\",\"fas fa-remove-format\",\"fas fa-reply-all\",\"fas fa-reply\",\"fas fa-republican\",\"fas fa-restroom\",\"fas fa-retweet\",\"fas fa-ribbon\",\"fas fa-ring\",\"fas fa-road\",\"fas fa-robot\",\"fas fa-rocket\",\"fas fa-route\",\"fas fa-rss-square\",\"fas fa-rss\",\"fas fa-ruble-sign\",\"fas fa-ruler-combined\",\"fas fa-ruler-horizontal\",\"fas fa-ruler-vertical\",\"fas fa-ruler\",\"fas fa-running\",\"fas fa-rupee-sign\",\"fas fa-sad-cry\",\"fas fa-sad-tear\",\"fas fa-satellite-dish\",\"fas fa-satellite\",\"fas fa-save\",\"fas fa-school\",\"fas fa-screwdriver\",\"fas fa-scroll\",\"fas fa-sd-card\",\"fas fa-search-dollar\",\"fas fa-search-location\",\"fas fa-search-minus\",\"fas fa-search-plus\",\"fas fa-search\",\"fas fa-seedling\",\"fas fa-server\",\"fas fa-shapes\",\"fas fa-share-alt-square\",\"fas fa-share-alt\",\"fas fa-share-square\",\"fas fa-share\",\"fas fa-shekel-sign\",\"fas fa-shield-alt\",\"fas fa-ship\",\"fas fa-shipping-fast\",\"fas fa-shoe-prints\",\"fas fa-shopping-bag\",\"fas fa-shopping-basket\",\"fas fa-shopping-cart\",\"fas fa-shower\",\"fas fa-shuttle-van\",\"fas fa-sign-in-alt\",\"fas fa-sign-language\",\"fas fa-sign-out-alt\",\"fas fa-sign\",\"fas fa-signal\",\"fas fa-signature\",\"fas fa-sim-card\",\"fas fa-sitemap\",\"fas fa-skating\",\"fas fa-skiing-nordic\",\"fas fa-skiing\",\"fas fa-skull-crossbones\",\"fas fa-skull\",\"fas fa-slash\",\"fas fa-sleigh\",\"fas fa-sliders-h\",\"fas fa-smile-beam\",\"fas fa-smile-wink\",\"fas fa-smile\",\"fas fa-smog\",\"fas fa-smoking-ban\",\"fas fa-smoking\",\"fas fa-sms\",\"fas fa-snowboarding\",\"fas fa-snowflake\",\"fas fa-snowman\",\"fas fa-snowplow\",\"fas fa-socks\",\"fas fa-solar-panel\",\"fas fa-sort-alpha-down-alt\",\"fas fa-sort-alpha-down\",\"fas fa-sort-alpha-up-alt\",\"fas fa-sort-alpha-up\",\"fas fa-sort-amount-down-alt\",\"fas fa-sort-amount-down\",\"fas fa-sort-amount-up-alt\",\"fas fa-sort-amount-up\",\"fas fa-sort-down\",\"fas fa-sort-numeric-down-alt\",\"fas fa-sort-numeric-down\",\"fas fa-sort-numeric-up-alt\",\"fas fa-sort-numeric-up\",\"fas fa-sort-up\",\"fas fa-sort\",\"fas fa-spa\",\"fas fa-space-shuttle\",\"fas fa-spell-check\",\"fas fa-spider\",\"fas fa-spinner\",\"fas fa-splotch\",\"fas fa-spray-can\",\"fas fa-square-full\",\"fas fa-square-root-alt\",\"fas fa-square\",\"fas fa-stamp\",\"fas fa-star-and-crescent\",\"fas fa-star-half-alt\",\"fas fa-star-half\",\"fas fa-star-of-david\",\"fas fa-star-of-life\",\"fas fa-star\",\"fas fa-step-backward\",\"fas fa-step-forward\",\"fas fa-stethoscope\",\"fas fa-sticky-note\",\"fas fa-stop-circle\",\"fas fa-stop\",\"fas fa-stopwatch\",\"fas fa-store-alt\",\"fas fa-store\",\"fas fa-stream\",\"fas fa-street-view\",\"fas fa-strikethrough\",\"fas fa-stroopwafel\",\"fas fa-subscript\",\"fas fa-subway\",\"fas fa-suitcase-rolling\",\"fas fa-suitcase\",\"fas fa-sun\",\"fas fa-superscript\",\"fas fa-surprise\",\"fas fa-swatchbook\",\"fas fa-swimmer\",\"fas fa-swimming-pool\",\"fas fa-synagogue\",\"fas fa-sync-alt\",\"fas fa-sync\",\"fas fa-syringe\",\"fas fa-table-tennis\",\"fas fa-table\",\"fas fa-tablet-alt\",\"fas fa-tablet\",\"fas fa-tablets\",\"fas fa-tachometer-alt\",\"fas fa-tag\",\"fas fa-tags\",\"fas fa-tape\",\"fas fa-tasks\",\"fas fa-taxi\",\"fas fa-teeth-open\",\"fas fa-teeth\",\"fas fa-temperature-high\",\"fas fa-temperature-low\",\"fas fa-tenge\",\"fas fa-terminal\",\"fas fa-text-height\",\"fas fa-text-width\",\"fas fa-th-large\",\"fas fa-th-list\",\"fas fa-th\",\"fas fa-theater-masks\",\"fas fa-thermometer-empty\",\"fas fa-thermometer-full\",\"fas fa-thermometer-half\",\"fas fa-thermometer-quarter\",\"fas fa-thermometer-three-quarters\",\"fas fa-thermometer\",\"fas fa-thumbs-down\",\"fas fa-thumbs-up\",\"fas fa-thumbtack\",\"fas fa-ticket-alt\",\"fas fa-times-circle\",\"fas fa-times\",\"fas fa-tint-slash\",\"fas fa-tint\",\"fas fa-tired\",\"fas fa-toggle-off\",\"fas fa-toggle-on\",\"fas fa-toilet-paper\",\"fas fa-toilet\",\"fas fa-toolbox\",\"fas fa-tools\",\"fas fa-tooth\",\"fas fa-torah\",\"fas fa-torii-gate\",\"fas fa-tractor\",\"fas fa-trademark\",\"fas fa-traffic-light\",\"fas fa-train\",\"fas fa-tram\",\"fas fa-transgender-alt\",\"fas fa-transgender\",\"fas fa-trash-alt\",\"fas fa-trash-restore-alt\",\"fas fa-trash-restore\",\"fas fa-trash\",\"fas fa-tree\",\"fas fa-trophy\",\"fas fa-truck-loading\",\"fas fa-truck-monster\",\"fas fa-truck-moving\",\"fas fa-truck-pickup\",\"fas fa-truck\",\"fas fa-tshirt\",\"fas fa-tty\",\"fas fa-tv\",\"fas fa-umbrella-beach\",\"fas fa-umbrella\",\"fas fa-underline\",\"fas fa-undo-alt\",\"fas fa-undo\",\"fas fa-universal-access\",\"fas fa-university\",\"fas fa-unlink\",\"fas fa-unlock-alt\",\"fas fa-unlock\",\"fas fa-upload\",\"fas fa-user-alt-slash\",\"fas fa-user-alt\",\"fas fa-user-astronaut\",\"fas fa-user-check\",\"fas fa-user-circle\",\"fas fa-user-clock\",\"fas fa-user-cog\",\"fas fa-user-edit\",\"fas fa-user-friends\",\"fas fa-user-graduate\",\"fas fa-user-injured\",\"fas fa-user-lock\",\"fas fa-user-md\",\"fas fa-user-minus\",\"fas fa-user-ninja\",\"fas fa-user-nurse\",\"fas fa-user-plus\",\"fas fa-user-secret\",\"fas fa-user-shield\",\"fas fa-user-slash\",\"fas fa-user-tag\",\"fas fa-user-tie\",\"fas fa-user-times\",\"fas fa-user\",\"fas fa-users-cog\",\"fas fa-users\",\"fas fa-utensil-spoon\",\"fas fa-utensils\",\"fas fa-vector-square\",\"fas fa-venus-double\",\"fas fa-venus-mars\",\"fas fa-venus\",\"fas fa-vial\",\"fas fa-vials\",\"fas fa-video-slash\",\"fas fa-video\",\"fas fa-vihara\",\"fas fa-voicemail\",\"fas fa-volleyball-ball\",\"fas fa-volume-down\",\"fas fa-volume-mute\",\"fas fa-volume-off\",\"fas fa-volume-up\",\"fas fa-vote-yea\",\"fas fa-vr-cardboard\",\"fas fa-walking\",\"fas fa-wallet\",\"fas fa-warehouse\",\"fas fa-water\",\"fas fa-wave-square\",\"fas fa-weight-hanging\",\"fas fa-weight\",\"fas fa-wheelchair\",\"fas fa-wifi\",\"fas fa-wind\",\"fas fa-window-close\",\"fas fa-window-maximize\",\"fas fa-window-minimize\",\"fas fa-window-restore\",\"fas fa-wine-bottle\",\"fas fa-wine-glass-alt\",\"fas fa-wine-glass\",\"fas fa-won-sign\",\"fas fa-wrench\",\"fas fa-x-ray\",\"fas fa-yen-sign\",\"fas fa-yin-yang\"]}");

/***/ }),

/***/ "./src/js/components/icon-select/index.js":
/*!************************************************!*\
  !*** ./src/js/components/icon-select/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _icons_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons.json */ "./src/js/components/icon-select/icons.json");
var _icons_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./icons.json */ "./src/js/components/icon-select/icons.json", 1);
/* harmony import */ var _reccomend_icons_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reccomend-icons.json */ "./src/js/components/icon-select/reccomend-icons.json");
var _reccomend_icons_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./reccomend-icons.json */ "./src/js/components/icon-select/reccomend-icons.json", 1);
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__);















var IconSelect =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(IconSelect, _Component);

  function IconSelect(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, IconSelect);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(IconSelect).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(IconSelect, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          panelTitle = _this$props.panelTitle,
          iconPosition = _this$props.iconPosition,
          onChangePosition = _this$props.onChangePosition,
          selectedIcon = _this$props.selectedIcon,
          onClickIcon = _this$props.onClickIcon;
      var controlPanelTitle = panelTitle ? panelTitle : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('[ys]アイコン設定', 'ystandard-blocks');

      var icons = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.uniq([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_reccomend_icons_json__WEBPACK_IMPORTED_MODULE_9__.icons), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_icons_json__WEBPACK_IMPORTED_MODULE_8__.icons)));

      var pickerProps = {
        icons: icons,
        theme: 'bluegrey',
        renderUsing: 'class',
        value: selectedIcon,
        onChange: function onChange(value) {
          onClickIcon(value);
        },
        isMulti: false
      };
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelBody"], {
        title: controlPanelTitle
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('アイコン表示位置', 'ystandard-blocks')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: 'ystdb-icon-select__position'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["RadioControl"], {
        selected: iconPosition,
        options: [{
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('右', 'ystandard-blocks'),
          value: 'right'
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('左', 'ystandard-blocks'),
          value: 'left'
        }],
        onChange: onChangePosition
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('表示アイコン', 'ystandard-blocks')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: 'ystdb-icon-select__picker'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_10___default.a, pickerProps))));
    }
  }]);

  return IconSelect;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (IconSelect);

/***/ }),

/***/ "./src/js/components/icon-select/reccomend-icons.json":
/*!************************************************************!*\
  !*** ./src/js/components/icon-select/reccomend-icons.json ***!
  \************************************************************/
/*! exports provided: icons, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"icons\":[\"fas fa-angle-right\",\"fas fa-angle-double-right\",\"fas fa-chevron-circle-right\",\"far fa-hand-point-right\",\"fas fa-shopping-cart\",\"fas fa-check\",\"fas fa-external-link-alt\",\"far fa-file\",\"fas fa-download\",\"far fa-envelope\",\"fab fa-twitter\",\"fab fa-facebook-square\",\"fab fa-youtube\"]}");

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
/**
 * 設定
 */
var ystdbConfig = {
  category: {
    common: 'ystdb',
    pro: 'ystdb_pro',
    beta: 'ystdb_beta'
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

/***/ "./src/js/ystandard-blocks.js":
/*!************************************!*\
  !*** ./src/js/ystandard-blocks.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_btn_link_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../block/btn-link/index */ "./block/btn-link/index.js");
/* harmony import */ var _block_section_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../block/section/index */ "./block/section/index.js");
/* harmony import */ var _block_extend_core_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../block/extend-core/button */ "./block/extend-core/button/index.js");
/* harmony import */ var _block_format_inline_style_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../block/format/inline-style/index */ "./block/format/inline-style/index.js");
 //





/**
 * registerBlockType
 */

[_block_btn_link_index__WEBPACK_IMPORTED_MODULE_1__, _block_section_index__WEBPACK_IMPORTED_MODULE_2__].forEach(function (block) {
  if (!block) {
    return;
  }

  var name = block.name,
      settings = block.settings;
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(name, settings);
});

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

/***/ "@wordpress/hooks":
/*!****************************************!*\
  !*** external {"this":["wp","hooks"]} ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/rich-text":
/*!*******************************************!*\
  !*** external {"this":["wp","richText"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["richText"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!************************************!*\
  !*** external {"this":"ReactDOM"} ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=ystandard-blocks.js.map