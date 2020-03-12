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
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/card/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/card/config.js":
/*!*******************************!*\
  !*** ./blocks/card/config.js ***!
  \*******************************/
/*! exports provided: attributes, supports, cardTypes, imageSizes, imageTypes, imageAlignList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supports", function() { return supports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardTypes", function() { return cardTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageSizes", function() { return imageSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageTypes", function() { return imageTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageAlignList", function() { return imageAlignList; });
/**
 * attributes
 */
var attributes = {
  url: {
    type: 'string'
  },
  linkTarget: {
    type: 'string'
  },
  rel: {
    type: 'string'
  },
  cardType: {
    type: 'string',
    default: 'horizon'
  },
  title: {
    type: 'string'
  },
  showImage: {
    type: 'bool',
    default: true
  },
  imageSize: {
    type: 'string'
  },
  imageType: {
    type: 'string'
  },
  imageAlign: {
    type: 'string',
    default: 'left'
  },
  showDscr: {
    type: 'bool',
    default: true
  },
  dscrCharCount: {
    type: 'number',
    default: 80
  },
  dscr: {
    type: 'string'
  },
  showDomain: {
    type: 'bool',
    default: true
  },
  backgroundColor: {
    type: 'string'
  },
  customBackgroundColor: {
    type: 'string'
  },
  borderColor: {
    type: 'string'
  },
  customBorderColor: {
    type: 'string'
  },
  titleColor: {
    type: 'string'
  },
  customTitleColor: {
    type: 'string'
  },
  dscrColor: {
    type: 'string'
  },
  customDscrColor: {
    type: 'string'
  },
  domainColor: {
    type: 'string'
  },
  customDomainColor: {
    type: 'string'
  }
};
/**
 * supports
 */

var supports = {
  className: false,
  html: false,
  align: false
};
var cardTypes = [{
  label: '横型',
  value: 'horizon'
}, {
  label: '縦型',
  value: 'vertical'
}, {
  label: 'モバイルでも横型',
  value: 'fixed-horizon'
}];
var imageSizes = [{
  label: '小',
  value: 'small'
}, {
  label: '通常',
  value: 'normal'
}, {
  label: '大',
  value: 'large'
}];
var imageTypes = [{
  label: 'テキストに合わせる',
  value: 'fitText'
}, {
  label: '画像をすべて表示',
  value: 'showAll'
}];
var imageAlignList = [{
  label: '左',
  value: 'left'
}, {
  label: '右',
  value: 'right'
}];

/***/ }),

/***/ "./blocks/card/edit.js":
/*!*****************************!*\
  !*** ./blocks/card/edit.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_js_config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/js/config/config */ "./src/js/config/config.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./blocks/card/config.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);











var cardEdit = function cardEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      backgroundColor = props.backgroundColor,
      setBackgroundColor = props.setBackgroundColor,
      borderColor = props.borderColor,
      setBorderColor = props.setBorderColor,
      titleColor = props.titleColor,
      setTitleColor = props.setTitleColor,
      dscrColor = props.dscrColor,
      setDscrColor = props.setDscrColor,
      domainColor = props.domainColor,
      setDomainColor = props.setDomainColor;
  var url = attributes.url,
      linkTarget = attributes.linkTarget,
      rel = attributes.rel,
      cardType = attributes.cardType,
      title = attributes.title,
      showImage = attributes.showImage,
      imageSize = attributes.imageSize,
      imageType = attributes.imageType,
      imageAlign = attributes.imageAlign,
      showDscr = attributes.showDscr,
      dscrCharCount = attributes.dscrCharCount,
      dscr = attributes.dscr,
      showDomain = attributes.showDomain;

  var _select$getSettings = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["select"])('core/block-editor').getSettings(),
      colors = _select$getSettings.colors;

  var selectedCardType = cardType ? cardType : 'horizon';
  var selectedImageType = imageType ? imageType : 'fitText';
  var isCardHorizon = 'horizon' === selectedCardType || 'fixed-horizon' === selectedCardType;

  var updateUrl = function updateUrl(value) {
    setAttributes({
      url: value
    });

    if (!!value && -1 === value.indexOf(ystdb.homeUrl)) {
      setAttributes({
        linkTarget: '_blank',
        rel: _src_js_config_config__WEBPACK_IMPORTED_MODULE_1__["ystdbConfig"].button.newTabRel
      });
    } else {
      setAttributes({
        linkTarget: undefined,
        rel: undefined
      });
    }
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'wp-block-html'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('リンク設定', 'ystandard-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["URLInput"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Link'),
    className: "ystdb-card__url-input",
    value: url
    /* eslint-disable jsx-a11y/no-autofocus */
    ,
    autoFocus: false
    /* eslint-enable jsx-a11y/no-autofocus */
    ,
    onChange: function onChange(value) {
      updateUrl(value);
    },
    disableSuggestions: !isSelected,
    isFullWidth: true,
    hasBorder: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Open in new tab'),
    onChange: function onChange(value) {
      var newLinkTarget = value ? '_blank' : undefined;
      var updatedRel = rel;

      if (newLinkTarget && !rel) {
        updatedRel = _src_js_config_config__WEBPACK_IMPORTED_MODULE_1__["ystdbConfig"].button.newTabRel;
      } else if (!newLinkTarget && rel === _src_js_config_config__WEBPACK_IMPORTED_MODULE_1__["ystdbConfig"].button.newTabRel) {
        updatedRel = undefined;
      }

      setAttributes({
        linkTarget: newLinkTarget,
        rel: updatedRel
      });
    },
    checked: linkTarget === '_blank'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Link rel'),
    value: rel || '',
    onChange: function onChange(value) {
      setAttributes({
        rel: value
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('カード表示設定', 'ystandard-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('カード表示タイプ', 'ystandard-blocks'),
    selected: selectedCardType,
    options: _config__WEBPACK_IMPORTED_MODULE_5__["cardTypes"],
    onChange: function onChange(option) {
      setAttributes({
        cardType: option
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('カード背景色', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
    colors: colors,
    disableCustomColors: false,
    onChange: function onChange(color) {
      setBackgroundColor(color);
    },
    value: backgroundColor.color
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('カード枠線', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
    colors: colors,
    disableCustomColors: false,
    onChange: function onChange(color) {
      setBorderColor(color);
    },
    value: borderColor.color
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    initialOpen: false,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('タイトル', 'ystandard-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextareaControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('タイトル', 'ystandard-blocks'),
    value: title,
    onChange: function onChange(value) {
      setAttributes({
        title: value
      });
    },
    help: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "ystdb-info__small"
    }, "\u8868\u793A\u3055\u308C\u308B\u30BF\u30A4\u30C8\u30EB\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), "\u4F55\u3082\u5165\u529B\u3057\u306A\u3051\u308C\u3070\u81EA\u52D5\u3067\u53D6\u5F97\u3055\u308C\u307E\u3059\u3002")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('タイトル文字色', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
    colors: colors,
    disableCustomColors: false,
    onChange: function onChange(color) {
      setTitleColor(color);
    },
    value: titleColor.color
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    initialOpen: false,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('画像設定', 'ystandard-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('画像を表示する', 'ystandard-blocks'),
    onChange: function onChange() {
      setAttributes({
        showImage: !showImage
      });
    },
    checked: showImage
  })), isCardHorizon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ystdb-info__small"
  }, "\u300C\u30AB\u30FC\u30C9\u8868\u793A\u30BF\u30A4\u30D7\u300D\u304C\u300C\u6A2A\u578B\u300D\u306E\u3068\u304D\u306B\u6709\u52B9\u306A\u8A2D\u5B9A\u3067\u3059\u3002"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('画像サイズ', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'ystdb-btn-selector components-base-control'
  }, _config__WEBPACK_IMPORTED_MODULE_5__["imageSizes"].map(function (item) {
    var selectedImageSize = imageSize ? imageSize : 'normal';
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      key: item.value,
      isDefault: true,
      isPrimary: selectedImageSize === item.value,
      onClick: function onClick() {
        setAttributes({
          imageSize: item.value
        });
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, item.label));
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('画像表示タイプ', 'ystandard-blocks'),
    selected: selectedImageType,
    options: _config__WEBPACK_IMPORTED_MODULE_5__["imageTypes"],
    onChange: function onChange(option) {
      setAttributes({
        imageType: option
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('画像表示位置', 'ystandard-blocks'),
    selected: imageAlign,
    options: _config__WEBPACK_IMPORTED_MODULE_5__["imageAlignList"],
    onChange: function onChange(option) {
      setAttributes({
        imageAlign: option
      });
    }
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    initialOpen: false,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('概要文設定', 'ystandard-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('概要文を表示する', 'ystandard-blocks'),
    onChange: function onChange() {
      setAttributes({
        showDscr: !showDscr
      });
    },
    checked: showDscr
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    value: dscrCharCount,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('概要文の字数', 'ystandard-blocks'),
    min: 0,
    max: 160,
    initialPosition: 40,
    allowReset: true,
    onChange: function onChange(value) {
      setAttributes({
        dscrCharCount: !value ? 40 : value
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextareaControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('概要文', 'ystandard-blocks'),
    value: dscr,
    onChange: function onChange(value) {
      setAttributes({
        dscr: value
      });
    },
    help: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "ystdb-info__small"
    }, "\u8868\u793A\u3055\u308C\u308B\u6982\u8981\u6587\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), "\u4F55\u3082\u5165\u529B\u3057\u306A\u3051\u308C\u3070\u81EA\u52D5\u3067\u53D6\u5F97\u3055\u308C\u307E\u3059\u3002")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('概要 文字色', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
    colors: colors,
    disableCustomColors: false,
    onChange: function onChange(color) {
      setDscrColor(color);
    },
    value: dscrColor.color
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    initialOpen: false,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('ドメイン表示設定', 'ystandard-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('ドメインを表示する', 'ystandard-blocks'),
    onChange: function onChange() {
      setAttributes({
        showDomain: !showDomain
      });
    },
    checked: showDomain
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ystdb-inspector-controls__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('ドメイン 文字色', 'ystandard-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
    colors: colors,
    disableCustomColors: false,
    onChange: function onChange(color) {
      setDomainColor(color);
    },
    value: domainColor.color
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-card__edit')
  }, (isSelected || !url) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'ystdb-card__edit-text'
  }, "\u30EA\u30F3\u30AF\u3092\u4F5C\u6210\u3059\u308BURL\u3092\u5165\u529B"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["URLInput"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Link'),
    className: "ystdb-card__url-input",
    value: url
    /* eslint-disable jsx-a11y/no-autofocus */
    ,
    autoFocus: false
    /* eslint-enable jsx-a11y/no-autofocus */
    ,
    onChange: function onChange(value) {
      updateUrl(value);
    },
    disableSuggestions: !isSelected,
    isFullWidth: true,
    hasBorder: true
  })), !!url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-card__preview', {
      'is-rendered': url
    })
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ServerSideRender"], {
    block: "ystdb/card",
    attributes: attributes
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["compose"])([Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["withColors"])('backgroundColor', 'borderColor', {
  titleColor: 'color',
  dscrColor: 'color',
  domainColor: 'color'
})])(cardEdit));

/***/ }),

/***/ "./blocks/card/index.js":
/*!******************************!*\
  !*** ./blocks/card/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_js_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/js/config/config */ "./src/js/config/config.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/card/edit.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./blocks/card/config.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])('ystdb/card', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('[ys]カード', 'ystandard-blocks'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('カード型リンクを作成するブロック', 'ystandard-blocks'),
  icon: {
    src: 'share-alt2',
    foreground: _src_js_config_config__WEBPACK_IMPORTED_MODULE_0__["ystdbConfig"].color.iconForeground
  },
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('card'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('カード'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('blogcard'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('ブログカード'), 'card', 'blogcard'],
  category: _src_js_config_config__WEBPACK_IMPORTED_MODULE_0__["ystdbConfig"].category.common,
  attributes: _config__WEBPACK_IMPORTED_MODULE_2__["attributes"],
  supports: _config__WEBPACK_IMPORTED_MODULE_2__["supports"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function save() {
    return null;
  }
});

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
//# sourceMappingURL=card.js.map