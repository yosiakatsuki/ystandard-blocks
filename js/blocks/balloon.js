/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/balloon/config.js":
/*!**********************************!*\
  !*** ./blocks/balloon/config.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alignBottom: function() { return /* binding */ alignBottom; },
/* harmony export */   alignCenter: function() { return /* binding */ alignCenter; },
/* harmony export */   alignTop: function() { return /* binding */ alignTop; },
/* harmony export */   alignmentsControls: function() { return /* binding */ alignmentsControls; },
/* harmony export */   attributes: function() { return /* binding */ attributes; },
/* harmony export */   avatarSizes: function() { return /* binding */ avatarSizes; },
/* harmony export */   balloonPositions: function() { return /* binding */ balloonPositions; },
/* harmony export */   balloonTypes: function() { return /* binding */ balloonTypes; },
/* harmony export */   supports: function() { return /* binding */ supports; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aktk_helper_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aktk/helper/config */ "./src/js/helper/config.js");





/**
 * attributes
 */
const attributes = {
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
    default: (0,_aktk_helper_config__WEBPACK_IMPORTED_MODULE_3__.getComponentConfig)('defaultAvatar').url
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
  balloonBorderWidth: {
    type: 'integer',
    default: 1
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
    type: 'string'
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
const supports = {
  align: false,
  className: false
};
const balloonTypes = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('会話', 'ystandard-blocks'),
  value: 'serif'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('会話(枠線)', 'ystandard-blocks'),
  value: 'serif-border'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('考え中', 'ystandard-blocks'),
  value: 'think'
}];
const balloonPositions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('右', 'ystandard-blocks'),
  value: 'right'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('左', 'ystandard-blocks'),
  value: 'left'
}];
const avatarSizes = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('小', 'ystandard-blocks'),
  value: 'small'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('大', 'ystandard-blocks'),
  value: 'large'
}];
const alignBottom = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Path, {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"
}));
const alignCenter = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Path, {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"
}));
const alignTop = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Path, {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"
}));
const alignmentsControls = {
  top: {
    icon: alignTop,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('上揃え', 'ystandard-blocks')
  },
  center: {
    icon: alignCenter,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('中央揃え', 'ystandard-blocks')
  },
  bottom: {
    icon: alignBottom,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('下揃え', 'ystandard-blocks')
  }
};

/***/ }),

/***/ "./blocks/balloon/deprecated/2-10-1.js":
/*!*********************************************!*\
  !*** ./blocks/balloon/deprecated/2-10-1.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deprecated2101: function() { return /* binding */ deprecated2101; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aktk_helper_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aktk/helper/config */ "./src/js/helper/config.js");




const blockAttributes = {
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
    default: (0,_aktk_helper_config__WEBPACK_IMPORTED_MODULE_3__.getComponentConfig)('defaultAvatar').url
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
const blockSupports = {
  align: false,
  className: false
};
const deprecated2101 = [{
  attributes: {
    ...blockAttributes
  },
  supports: {
    ...blockSupports
  },
  migrate(attributes) {
    let newFontSize = attributes.customFontSize;
    if ('number' === typeof newFontSize) {
      newFontSize = newFontSize.toString().replace('px', '') + 'px';
    }
    return {
      ...attributes,
      customFontSize: newFontSize
    };
  },
  save({
    attributes
  }) {
    const {
      className,
      textColor,
      customTextColor,
      backgroundColor,
      customBackgroundColor,
      balloonBorderColor,
      customBalloonBorderColor,
      avatarNameColor,
      customAvatarNameColor,
      avatarBorderColor,
      customAvatarBorderColor,
      fontSize,
      customFontSize,
      avatarName,
      avatarURL,
      avatarAlt,
      avatarSize,
      avatarBorderWidth,
      avatarBorderRadius,
      text,
      balloonPosition,
      balloonType,
      verticalAlign
    } = attributes;
    const avatarNameColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', avatarNameColor);
    const avatarBorderColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('border-color', avatarBorderColor);
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', textColor);
    const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass)(fontSize);
    const backgroundColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('background-color', backgroundColor);
    const balloonBorderColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('border-color', balloonBorderColor);

    /**
     * 大枠
     *
     * @type {string}
     */
    const wrapClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'ystdb-balloon', {
      [`is-vertically-aligned-${verticalAlign}`]: verticalAlign,
      [`is-balloon-position-${balloonPosition}`]: balloonPosition
    });

    /**
     * アバター画像カラムクラス
     *
     * @type {string}
     */
    const avatarWrapClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-balloon__avatar', {
      [`is-size-${avatarSize}`]: avatarSize
    });

    /**
     * アバター画像クラス
     *
     * @type {string}
     */
    const avatarClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-balloon__avatar-image', {
      'has-border-color': avatarBorderColorClass || customAvatarBorderColor,
      [avatarBorderColorClass]: avatarBorderColorClass,
      'has-border': 0 < avatarBorderWidth
    });

    /**
     * アバター画像スタイル
     *
     * @type {{borderColor: *}}
     */
    const avatarStyle = {
      borderColor: customAvatarBorderColor,
      borderWidth: 0 < avatarBorderWidth ? avatarBorderWidth : undefined,
      borderRadius: avatarBorderRadius
    };

    /**
     * アバター画像ALT
     */
    const avatarAltText = avatarAlt ? avatarAlt : avatarName;
    /**
     * アバター名クラス
     *
     * @type {string}
     */
    const avatarNameClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-balloon__name', {
      [avatarNameColorClass]: avatarNameColorClass,
      'has-text-color': customAvatarNameColor || avatarNameColorClass
    });
    /**
     * アバター名スタイル
     *
     * @type {{color: *}}
     */
    const avatarNameStyles = {
      color: customAvatarNameColor
    };

    /**
     * 吹き出しクラス
     *
     * @type {string}
     */
    const balloonBodyClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-balloon__body', {
      [backgroundColorClass]: backgroundColorClass,
      'has-background': backgroundColorClass || customBackgroundColor,
      [balloonBorderColorClass]: balloonBorderColorClass,
      'has-border-color': balloonBorderColorClass || customBalloonBorderColor,
      [`is-${verticalAlign}`]: verticalAlign,
      [`is-${balloonPosition}`]: balloonPosition,
      [`is-${balloonType}`]: balloonType
    });

    /**
     * 吹き出しスタイル
     *
     * @type {{backgroundColor: *}}
     */
    const balloonBodyStyles = {
      backgroundColor: customBackgroundColor,
      borderColor: customBalloonBorderColor
    };

    /**
     * 吹き出しテキストクラス
     *
     * @type {string}
     */
    const textClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-balloon__text', {
      [textClass]: textClass,
      'has-text-color': textColor || customTextColor,
      [fontSizeClass]: fontSizeClass
    });

    /**
     * 吹き出しテキストスタイル
     *
     * @type {{color: (*), fontSize: (string|*)}}
     */
    const textStyles = {
      color: textClass ? undefined : customTextColor,
      fontSize: !fontSizeClass && customFontSize ? customFontSize + 'px' : undefined
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: wrapClasses
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
      className: avatarWrapClasses
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: avatarClasses,
      style: avatarStyle,
      src: avatarURL,
      alt: avatarAltText
    }), avatarName && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
      className: avatarNameClass,
      style: avatarNameStyles
    }, avatarName)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: balloonBodyClass,
      style: balloonBodyStyles
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: 'p',
      className: textClasses,
      style: textStyles,
      value: text
    })));
  }
}];

/***/ }),

/***/ "./blocks/balloon/deprecated/2-10-3.js":
/*!*********************************************!*\
  !*** ./blocks/balloon/deprecated/2-10-3.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deprecated: function() { return /* binding */ deprecated; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aktk_helper_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aktk/helper/config */ "./src/js/helper/config.js");




const blockAttributes = {
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
    default: (0,_aktk_helper_config__WEBPACK_IMPORTED_MODULE_3__.getComponentConfig)('defaultAvatar').url
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
    type: 'string'
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
const blockSupports = {
  align: false,
  className: false
};
const deprecated = [{
  attributes: {
    ...blockAttributes
  },
  supports: {
    ...blockSupports
  },
  migrate(attributes) {
    let newFontSize = attributes.customFontSize;
    if ('number' === typeof newFontSize) {
      newFontSize = newFontSize.toString().replace('px', '') + 'px';
    }
    return {
      ...attributes,
      customFontSize: newFontSize
    };
  },
  save({
    attributes
  }) {
    const {
      className,
      textColor,
      customTextColor,
      backgroundColor,
      customBackgroundColor,
      balloonBorderColor,
      customBalloonBorderColor,
      avatarNameColor,
      customAvatarNameColor,
      avatarBorderColor,
      customAvatarBorderColor,
      fontSize,
      customFontSize,
      avatarName,
      avatarURL,
      avatarAlt,
      avatarSize,
      avatarBorderWidth,
      avatarBorderRadius,
      text,
      balloonPosition,
      balloonType,
      verticalAlign
    } = attributes;
    const avatarNameColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', avatarNameColor);
    const avatarBorderColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('border-color', avatarBorderColor);
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', textColor);
    const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass)(fontSize);
    const backgroundColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('background-color', backgroundColor);
    const balloonBorderColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('border-color', balloonBorderColor);

    /**
     * 大枠
     *
     * @type {string}
     */
    const wrapClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'ystdb-balloon', {
      [`is-vertically-aligned-${verticalAlign}`]: verticalAlign,
      [`is-balloon-position-${balloonPosition}`]: balloonPosition
    });

    /**
     * アバター画像カラムクラス
     *
     * @type {string}
     */
    const avatarWrapClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-balloon__avatar', {
      [`is-size-${avatarSize}`]: avatarSize
    });

    /**
     * アバター画像クラス
     *
     * @type {string}
     */
    const avatarClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-balloon__avatar-image', {
      'has-border-color': avatarBorderColorClass || customAvatarBorderColor,
      [avatarBorderColorClass]: avatarBorderColorClass,
      'has-border': 0 < avatarBorderWidth
    });

    /**
     * アバター画像スタイル
     *
     * @type {{borderColor: *}}
     */
    const avatarStyle = {
      borderColor: customAvatarBorderColor,
      borderWidth: 0 < avatarBorderWidth ? avatarBorderWidth : undefined,
      borderRadius: avatarBorderRadius
    };

    /**
     * アバター画像ALT
     */
    const avatarAltText = avatarAlt ? avatarAlt : avatarName;
    /**
     * アバター名クラス
     *
     * @type {string}
     */
    const avatarNameClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-balloon__name', {
      [avatarNameColorClass]: avatarNameColorClass,
      'has-text-color': customAvatarNameColor || avatarNameColorClass
    });
    /**
     * アバター名スタイル
     *
     * @type {{color: *}}
     */
    const avatarNameStyles = {
      color: customAvatarNameColor
    };

    /**
     * 吹き出しクラス
     *
     * @type {string}
     */
    const balloonBodyClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-balloon__body', {
      [backgroundColorClass]: backgroundColorClass,
      'has-background': backgroundColorClass || customBackgroundColor,
      [balloonBorderColorClass]: balloonBorderColorClass,
      'has-border-color': balloonBorderColorClass || customBalloonBorderColor,
      [`is-${verticalAlign}`]: verticalAlign,
      [`is-${balloonPosition}`]: balloonPosition,
      [`is-${balloonType}`]: balloonType
    });

    /**
     * 吹き出しスタイル
     *
     * @type {{backgroundColor: *}}
     */
    const balloonBodyStyles = {
      backgroundColor: customBackgroundColor,
      borderColor: customBalloonBorderColor
    };

    /**
     * 吹き出しテキストクラス
     *
     * @type {string}
     */
    const textClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-balloon__text', {
      [textClass]: textClass,
      'has-text-color': textColor || customTextColor,
      [fontSizeClass]: fontSizeClass
    });

    /**
     * 吹き出しテキストスタイル
     *
     * @type {{color: (*), fontSize: (string|*)}}
     */
    const textStyles = {
      color: textClass ? undefined : customTextColor,
      fontSize: !fontSizeClass && customFontSize ? customFontSize : undefined
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: wrapClasses
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
      className: avatarWrapClasses
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: avatarClasses,
      style: avatarStyle,
      src: avatarURL,
      alt: avatarAltText
    }), avatarName && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
      className: avatarNameClass,
      style: avatarNameStyles
    }, avatarName)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: balloonBodyClass,
      style: balloonBodyStyles
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: 'p',
      className: textClasses,
      style: textStyles,
      value: text
    })));
  }
}];

/***/ }),

/***/ "./blocks/balloon/deprecated/index.js":
/*!********************************************!*\
  !*** ./blocks/balloon/deprecated/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deprecated: function() { return /* binding */ deprecated; }
/* harmony export */ });
/* harmony import */ var _2_10_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2-10-1 */ "./blocks/balloon/deprecated/2-10-1.js");
/* harmony import */ var _2_10_3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2-10-3 */ "./blocks/balloon/deprecated/2-10-3.js");


const deprecated = [..._2_10_1__WEBPACK_IMPORTED_MODULE_0__.deprecated2101, ..._2_10_3__WEBPACK_IMPORTED_MODULE_1__.deprecated];

/***/ }),

/***/ "./blocks/balloon/edit.js":
/*!********************************!*\
  !*** ./blocks/balloon/edit.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_js_admin_menu_components_manual_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/js/admin-menu/components/manual-link */ "./src/js/admin-menu/components/manual-link/index.js");
/* harmony import */ var _aktk_helper_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aktk/helper/config */ "./src/js/helper/config.js");
/* harmony import */ var _aktk_components_horizon_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @aktk/components/horizon-buttons */ "./src/js/components/horizon-buttons/index.js");
/* harmony import */ var _aktk_components_color_palette_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @aktk/components/color-palette-control */ "./src/js/components/color-palette-control/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config */ "./blocks/balloon/config.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./save */ "./blocks/balloon/save.js");


/**
 * WordPress.
 */





/**
 * Plugin.
 */




/**
 * Block.
 */


function Balloon(props) {
  const {
    textColor,
    backgroundColor,
    balloonBorderColor,
    avatarNameColor,
    avatarBorderColor,
    setTextColor,
    setBackgroundColor,
    setBalloonBorderColor,
    setAvatarNameColor,
    setAvatarBorderColor,
    attributes,
    setAttributes,
    fontSize,
    setFontSize,
    className,
    isSelected
  } = props;
  const {
    avatarName,
    avatarURL,
    avatarAlt,
    avatarID,
    avatarSize,
    avatarBorderWidth,
    avatarBorderRadius,
    text,
    balloonBorderWidth,
    balloonPosition,
    balloonType,
    verticalAlign
  } = attributes;
  const ALLOWED_MEDIA_TYPES = ['image'];
  const DEFAULT_CONTROLS = ['top', 'center', 'bottom'];
  const DEFAULT_CONTROL = 'top';
  const defaultAvatar = (0,_aktk_helper_config__WEBPACK_IMPORTED_MODULE_8__.getComponentConfig)('defaultAvatar').url;
  const balloonImages = (0,_aktk_helper_config__WEBPACK_IMPORTED_MODULE_8__.getBlockEditorConfig)('balloonImages', []);
  const isSerifBorder = 'serif-border' === balloonType;
  const activeAlignment = _config__WEBPACK_IMPORTED_MODULE_11__.alignmentsControls[verticalAlign];
  const defaultAlignmentControl = _config__WEBPACK_IMPORTED_MODULE_11__.alignmentsControls[DEFAULT_CONTROL];
  const wrapClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'ystdb-balloon', {
    [`is-vertically-aligned-${verticalAlign}`]: verticalAlign,
    [`is-balloon-position-${balloonPosition}`]: balloonPosition
  });

  /**
   * アバター画像カラムクラス
   *
   * @type {string}
   */
  const avatarWrapClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-balloon__avatar', {
    [`is-size-${avatarSize}`]: avatarSize
  });

  /**
   * アバター名クラス
   *
   * @type {string}
   */
  const avatarNameClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-balloon__name', {
    'has-text-color': avatarNameColor.color,
    [avatarNameColor.class]: avatarNameColor.class
  });
  /**
   * アバター名スタイル
   *
   * @type {{color: *}}
   */
  const avatarNameStyles = {
    color: avatarNameColor.color
  };

  /**
   * アバター画像クラス
   *
   * @type {string}
   */
  const avatarClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-balloon__avatar-image', {
    'has-border-color': avatarBorderColor.color,
    [avatarBorderColor.class]: avatarBorderColor.class,
    'has-border': 0 < avatarBorderWidth
  });

  /**
   * アバター画像スタイル
   *
   * @type {{borderColor: *}}
   */
  const avatarStyle = {
    borderColor: avatarBorderColor.color,
    borderWidth: 0 < avatarBorderWidth ? avatarBorderWidth : undefined,
    borderRadius: avatarBorderRadius
  };

  /**
   * 吹き出しクラス
   *
   * @type {string}
   */
  const balloonBodyClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-balloon__body', {
    [backgroundColor.class]: backgroundColor.class,
    'has-background': backgroundColor.color,
    [balloonBorderColor.class]: balloonBorderColor.class,
    'has-border-color': balloonBorderColor.color,
    [`is-${verticalAlign}`]: verticalAlign,
    [`is-${balloonPosition}`]: balloonPosition,
    [`is-${balloonType}`]: balloonType
  });

  /**
   * 吹き出しスタイル
   *
   * @type {{backgroundColor: *}}
   */
  const balloonBodyStyles = {
    backgroundColor: (0,_save__WEBPACK_IMPORTED_MODULE_12__.getBalloonBackground)(balloonType, backgroundColor.color),
    borderColor: balloonBorderColor.color,
    borderWidth: isSerifBorder ? balloonBorderWidth : undefined
  };

  /**
   * 吹き出しテキストクラス
   *
   * @type {string}
   */
  const textClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-ystdb-balloon__text', {
    [textColor.class]: textColor.class,
    'has-text-color': textColor.color,
    [fontSize.class]: fontSize.class
  });

  /**
   * 吹き出しテキストスタイル
   *
   * @type {{color: (*), fontSize: (string|*)}}
   */
  const textStyles = {
    color: textColor.color,
    fontSize: fontSize.size ? fontSize.size : undefined
  };
  const serifTriangleClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-balloon__serif-triangle', {
    [backgroundColor.class]: backgroundColor.class,
    'has-background': backgroundColor.color,
    [balloonBorderColor.class]: balloonBorderColor.class,
    'has-border-color': balloonBorderColor.color
  });
  const serifTrianglePosition = 6 - balloonBorderWidth;
  const serifTriangleStyle = {
    backgroundColor: (0,_save__WEBPACK_IMPORTED_MODULE_12__.getBalloonBackground)(balloonType, backgroundColor.color),
    borderColor: balloonBorderColor.color,
    borderWidth: balloonBorderWidth,
    right: 'right' === balloonPosition ? `calc(100% - ${serifTrianglePosition}px)` : undefined,
    left: 'left' === balloonPosition ? `calc(100% - ${serifTrianglePosition}px)` : undefined
  };

  /**
   * 画像設定コントロール
   *
   * @param {Object} obj
   */
  const mediaUploadRender = obj => {
    if (!avatarURL || defaultAvatar === avatarURL) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: avatarClasses,
        style: avatarStyle
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: obj.open,
        className: 'ystdb-mediaupload__preview is-no-image'
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: defaultAvatar,
        alt: ''
      })));
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: avatarClasses,
      style: avatarStyle
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      onClick: () => {
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
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: avatarURL,
      alt: avatarAlt
    })));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarItem, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__._x)('縦位置の変更', 'ystandard-blocks')
  }, toolbarItemHTMLProps => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.DropdownMenu, {
    toggleProps: toolbarItemHTMLProps,
    isCollapsed: true,
    icon: activeAlignment ? activeAlignment.icon : defaultAlignmentControl.icon,
    controls: DEFAULT_CONTROLS.map(control => {
      return {
        ..._config__WEBPACK_IMPORTED_MODULE_11__.alignmentsControls[control],
        isActive: verticalAlign === control,
        onClick: () => setAttributes({
          verticalAlign: verticalAlign === control ? undefined : control
        })
      };
    })
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('吹き出し設定', 'ystandard-blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    id: 'balloon-position',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('吹き出しの向き', 'ystandard-blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_horizon_buttons__WEBPACK_IMPORTED_MODULE_9__["default"], null, _config__WEBPACK_IMPORTED_MODULE_11__.balloonPositions.map(item => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      key: item.value,
      isSecondary: balloonPosition !== item.value,
      isPrimary: balloonPosition === item.value,
      onClick: () => {
        setAttributes({
          balloonPosition: item.value
        });
      }
    }, item.label);
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    id: 'balloon-type',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('吹き出しタイプ', 'ystandard-blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_horizon_buttons__WEBPACK_IMPORTED_MODULE_9__["default"], null, _config__WEBPACK_IMPORTED_MODULE_11__.balloonTypes.map(item => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      key: item.value,
      isSecondary: balloonType !== item.value,
      isPrimary: balloonType === item.value,
      onClick: () => {
        // if (
        // 	'serif-border' === item.value &&
        // 	'serif-border' !== balloonType
        // ) {
        // 	setBackgroundColor(
        // 		balloonOption.contentBackground
        // 	);
        // }
        // if (
        // 	'serif-border' !== item.value
        // ) {
        // 	setBalloonBorderColor(
        // 		backgroundColor.color
        // 	);
        // }
        setAttributes({
          balloonType: item.value
        });
      }
    }, item.label);
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    id: 'balloon-font-size',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('文字サイズ', 'ystandard-blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.FontSizePicker, {
    __nextHasNoMarginBottom: true,
    value: fontSize.size,
    onChange: font => {
      setFontSize(font);
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    id: 'balloon-background',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('吹き出し背景色', 'ystandard-blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_color_palette_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('吹き出し背景色', 'ystandard-blocks'),
    value: backgroundColor.color,
    onChange: color => {
      setBackgroundColor(color);
      if (!isSerifBorder) {
        setBalloonBorderColor(color);
      }
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    id: 'balloon-text-color',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('吹き出し文字色', 'ystandard-blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_color_palette_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('吹き出し文字色', 'ystandard-blocks'),
    value: textColor.color,
    onChange: color => {
      setTextColor(color);
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ContrastChecker, {
    backgroundColor: backgroundColor.color,
    textColor: textColor.color
  })), isSerifBorder && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    id: 'serif-border-color',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('吹き出し枠線色', 'ystandard-blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_color_palette_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('吹き出し枠線色', 'ystandard-blocks'),
    value: balloonBorderColor.color,
    onChange: color => {
      setBalloonBorderColor(color);
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    value: balloonBorderWidth,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('吹き出し枠線太さ', 'ystandard-blocks'),
    min: 1,
    max: 4,
    initialPosition: 1,
    allowReset: true,
    onChange: value => {
      setAttributes({
        balloonBorderWidth: value
      });
    }
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('登録済みアバター画像', 'ystandard-blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, null, 0 >= balloonImages.length ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "\u767B\u9332\u6E08\u307F\u306E\u30A2\u30D0\u30BF\u30FC\u753B\u50CF\u306F\u3042\u308A\u307E\u305B\u3093\u3002"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "\u300CyStandard Blocks\u300D\u8A2D\u5B9A\u753B\u9762\u306E\u300C\u5439\u304D\u51FA\u3057\u767B\u9332\u300D\u304B\u3089\u3088\u304F\u4F7F\u3046\u30A2\u30D0\u30BF\u30FC\u753B\u50CF\u3092\u767B\u9332\u3067\u304D\u307E\u3059\u3002"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_js_admin_menu_components_manual_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
    url: 'https://wp-ystandard.com/manual/ystdb-balloon-avatar-setting/'
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'ystdb-avatar-list'
  }, balloonImages.map(item => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      key: item.id,
      isPrimary: avatarID === item.id && avatarName === item.name,
      onClick: () => {
        setAttributes({
          avatarID: item.id,
          avatarName: item.name,
          avatarURL: item.url,
          avatarAlt: item.name
        });
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: 'ystdb-avatar-list__image',
      src: item.url,
      alt: item.name
    }), !!item.name && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: 'ystdb-avatar-list__name'
    }, item.name)));
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('アバター設定', 'ystandard-blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    id: 'avatar-size',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('アバターサイズ', 'ystandard-blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_horizon_buttons__WEBPACK_IMPORTED_MODULE_9__["default"], null, _config__WEBPACK_IMPORTED_MODULE_11__.avatarSizes.map(item => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      key: item.value,
      isSecondary: avatarSize !== item.value,
      isPrimary: avatarSize === item.value,
      onClick: () => {
        setAttributes({
          avatarSize: item.value
        });
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, item.label));
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    value: avatarBorderRadius,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('アバター画像の角丸', 'ystandard-blocks'),
    min: 0,
    max: 100,
    initialPosition: 40,
    allowReset: true,
    onChange: value => {
      setAttributes({
        avatarBorderRadius: value
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    value: avatarBorderWidth,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('アバター画像の枠線太さ', 'ystandard-blocks'),
    min: 0,
    max: 10,
    initialPosition: 0,
    allowReset: true,
    onChange: value => {
      setAttributes({
        avatarBorderWidth: value
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    id: 'avatar-border-color',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('アバター画像枠色', 'ystandard-blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_color_palette_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('アバター画像枠色', 'ystandard-blocks'),
    value: avatarBorderColor.color,
    onChange: color => {
      setAvatarBorderColor(color);
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    id: 'avatar-text-color',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('アバター名文字色', 'ystandard-blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_color_palette_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('アバター名文字色', 'ystandard-blocks'),
    value: avatarNameColor.color,
    onChange: color => {
      setAvatarNameColor(color);
    }
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: wrapClasses
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: avatarWrapClasses
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      setAttributes({
        avatarURL: media.url,
        avatarID: media.id,
        avatarAlt: media.alt
      });
    },
    type: ALLOWED_MEDIA_TYPES,
    value: avatarID,
    render: mediaUploadRender
  }), (isSelected || avatarName) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
    className: avatarNameClass
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    value: avatarName,
    className: 'ystdb-balloon__name--edit',
    onChange: value => {
      setAttributes({
        avatarName: value
      });
    },
    style: avatarNameStyles,
    placeholder: '名前...',
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Name')
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: balloonBodyClass,
    style: balloonBodyStyles
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: 'p',
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Add text…'),
    value: text,
    onChange: value => setAttributes({
      text: value
    }),
    className: textClasses,
    style: textStyles
  }), isSerifBorder && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: serifTriangleClass,
    style: serifTriangleStyle,
    "aria-hidden": true
  }))));
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.withColors)('backgroundColor', {
  textColor: 'color',
  avatarNameColor: 'color',
  avatarBorderColor: 'borderColor',
  balloonBorderColor: 'borderColor'
}), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.withFontSizes)('fontSize')])(Balloon));

/***/ }),

/***/ "./blocks/balloon/save.js":
/*!********************************!*\
  !*** ./blocks/balloon/save.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; },
/* harmony export */   getBalloonBackground: function() { return /* binding */ getBalloonBackground; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aktk_helper_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aktk/helper/config.js */ "./src/js/helper/config.js");




const getBalloonBackground = (type, backgroundColor) => {
  const balloonOption = (0,_aktk_helper_config_js__WEBPACK_IMPORTED_MODULE_3__.getBlockEditorConfig)('balloonOption', {});
  if ('serif-border' === type && !backgroundColor) {
    return balloonOption.contentBackground;
  }
  return backgroundColor;
};
function save({
  attributes
}) {
  const {
    className,
    textColor,
    customTextColor,
    backgroundColor,
    customBackgroundColor,
    balloonBorderColor,
    customBalloonBorderColor,
    balloonBorderWidth,
    avatarNameColor,
    customAvatarNameColor,
    avatarBorderColor,
    customAvatarBorderColor,
    fontSize,
    customFontSize,
    avatarName,
    avatarURL,
    avatarAlt,
    avatarSize,
    avatarBorderWidth,
    avatarBorderRadius,
    text,
    balloonPosition,
    balloonType,
    verticalAlign
  } = attributes;
  const avatarNameColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', avatarNameColor);
  const avatarBorderColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('border-color', avatarBorderColor);
  const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', textColor);
  const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass)(fontSize);
  const backgroundColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('background-color', backgroundColor);
  const balloonBorderColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('border-color', balloonBorderColor);
  const isSerifBorder = 'serif-border' === balloonType;

  /**
   * 大枠
   *
   * @type {string}
   */
  const wrapClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'ystdb-balloon', {
    [`is-vertically-aligned-${verticalAlign}`]: verticalAlign,
    [`is-balloon-position-${balloonPosition}`]: balloonPosition
  });

  /**
   * アバター画像カラムクラス
   *
   * @type {string}
   */
  const avatarWrapClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-balloon__avatar', {
    [`is-size-${avatarSize}`]: avatarSize
  });

  /**
   * アバター画像クラス
   *
   * @type {string}
   */
  const avatarClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-balloon__avatar-image', {
    'has-border-color': avatarBorderColorClass || customAvatarBorderColor,
    [avatarBorderColorClass]: avatarBorderColorClass,
    'has-border': 0 < avatarBorderWidth
  });

  /**
   * アバター画像スタイル
   *
   * @type {{borderColor: *}}
   */
  const avatarStyle = {
    borderColor: customAvatarBorderColor,
    borderWidth: 0 < avatarBorderWidth ? avatarBorderWidth : undefined,
    borderRadius: avatarBorderRadius
  };

  /**
   * アバター画像ALT
   */
  const avatarAltText = avatarAlt ? avatarAlt : avatarName;
  /**
   * アバター名クラス
   *
   * @type {string}
   */
  const avatarNameClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-balloon__name', {
    [avatarNameColorClass]: avatarNameColorClass,
    'has-text-color': customAvatarNameColor || avatarNameColorClass
  });
  /**
   * アバター名スタイル
   *
   * @type {{color: *}}
   */
  const avatarNameStyles = {
    color: customAvatarNameColor
  };

  /**
   * 吹き出しクラス
   *
   * @type {string}
   */
  const balloonBodyClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-balloon__body', {
    [backgroundColorClass]: backgroundColorClass,
    'has-background': backgroundColorClass || customBackgroundColor,
    [balloonBorderColorClass]: balloonBorderColorClass,
    'has-border-color': balloonBorderColorClass || customBalloonBorderColor,
    [`is-${verticalAlign}`]: verticalAlign,
    [`is-${balloonPosition}`]: balloonPosition,
    [`is-${balloonType}`]: balloonType
  });

  /**
   * 吹き出しスタイル
   *
   * @type {{backgroundColor: *}}
   */
  const balloonBodyStyles = {
    backgroundColor: getBalloonBackground(balloonType, customBackgroundColor),
    borderColor: customBalloonBorderColor,
    borderWidth: isSerifBorder ? balloonBorderWidth : undefined
  };

  /**
   * 吹き出しテキストクラス
   *
   * @type {string}
   */
  const textClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-balloon__text', {
    [textClass]: textClass,
    'has-text-color': textColor || customTextColor,
    [fontSizeClass]: fontSizeClass
  });

  /**
   * 吹き出しテキストスタイル
   *
   * @type {{color: (*), fontSize: (string|*)}}
   */
  const textStyles = {
    color: textClass ? undefined : customTextColor,
    fontSize: !fontSizeClass && customFontSize ? customFontSize : undefined
  };
  const serifTriangleClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-balloon__serif-triangle', {
    [backgroundColorClass]: backgroundColorClass,
    'has-background': backgroundColorClass || customBackgroundColor,
    [balloonBorderColorClass]: balloonBorderColorClass,
    'has-border-color': balloonBorderColorClass || customBalloonBorderColor
  });
  const serifTrianglePosition = 7 - balloonBorderWidth;
  const serifTriangleStyle = {
    backgroundColor: getBalloonBackground(balloonType, customBackgroundColor),
    borderColor: customBalloonBorderColor,
    borderWidth: balloonBorderWidth,
    right: 'right' === balloonPosition ? `calc(100% - ${serifTrianglePosition}px)` : undefined,
    left: 'left' === balloonPosition ? `calc(100% - ${serifTrianglePosition}px)` : undefined
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: wrapClasses
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: avatarWrapClasses
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: avatarClasses,
    style: avatarStyle,
    src: avatarURL,
    alt: avatarAltText
  }), avatarName && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
    className: avatarNameClass,
    style: avatarNameStyles
  }, avatarName)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: balloonBodyClass,
    style: balloonBodyStyles
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: 'p',
    className: textClasses,
    style: textStyles,
    value: text
  }), isSerifBorder && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: serifTriangleClass,
    style: serifTriangleStyle,
    "aria-hidden": true
  })));
}

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

/***/ "./src/js/components/color-dropdown/index.js":
/*!***************************************************!*\
  !*** ./src/js/components/color-dropdown/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



const ColorDropdown = ({
  key,
  value,
  label,
  position = 'bottom-start',
  renderContent
}) => {
  const _buttonLabel = label !== null && label !== void 0 ? label : '色';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalItemGroup, {
    isBordered: true,
    isSeparated: true,
    className: "block-editor-panel-color-gradient-settings__item-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    key: key,
    popoverProps: {
      placement: position
    },
    className: "block-editor-panel-color-gradient-settings__dropdown",
    contentClassName: "block-editor-panel-color-gradient-settings__dropdown-content",
    style: {
      display: 'block'
    },
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalItem, {
      onClick: onToggle,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('block-editor-panel-color-gradient-settings__item', {
        'is-open': isOpen
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
      justify: "flex-start"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
      className: "block-editor-panel-color-gradient-settings__color-indicator",
      colorValue: value
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, _buttonLabel))),
    renderContent: renderContent
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ColorDropdown);

/***/ }),

/***/ "./src/js/components/color-palette-control/index.js":
/*!**********************************************************!*\
  !*** ./src/js/components/color-palette-control/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aktk_helper_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aktk/helper/color */ "./src/js/helper/color.js");
/* harmony import */ var _aktk_components_color_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aktk/components/color-dropdown */ "./src/js/components/color-dropdown/index.js");





const ColorPaletteControl = ({
  value,
  onChange,
  colors,
  label,
  key,
  position = 'bottom-start',
  ...props
}) => {
  const _colors = colors !== null && colors !== void 0 ? colors : (0,_aktk_helper_color__WEBPACK_IMPORTED_MODULE_3__.getColorSetting)();
  const handleOnChange = color => {
    onChange(color);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_color_dropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: key,
    label: label,
    value: value,
    position: position,
    renderContent: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
      colors: _colors,
      onChange: handleOnChange,
      value: value,
      ...props
    })
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ColorPaletteControl);

/***/ }),

/***/ "./src/js/components/horizon-buttons/index.js":
/*!****************************************************!*\
  !*** ./src/js/components/horizon-buttons/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const HorizonButtons = ({
  children
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb__horizon-buttons"
  }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (HorizonButtons);

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

/***/ "./src/js/admin-menu/components/manual-link/_manual-link.scss":
/*!********************************************************************!*\
  !*** ./src/js/admin-menu/components/manual-link/_manual-link.scss ***!
  \********************************************************************/
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

/***/ "./node_modules/react-feather/dist/icons/message-square.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/message-square.js ***!
  \*****************************************************************/
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



var MessageSquare = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
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
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
  }));
});
MessageSquare.propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])
};
MessageSquare.displayName = 'MessageSquare';
/* harmony default export */ __webpack_exports__["default"] = (MessageSquare);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*********************************!*\
  !*** ./blocks/balloon/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_js_config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/js/config/config */ "./src/js/config/config.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/balloon/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./blocks/balloon/save.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/message-square.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./blocks/balloon/config.js");
/* harmony import */ var _deprecated_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deprecated/index */ "./blocks/balloon/deprecated/index.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);









(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__.registerBlockType)('ystdb/balloon', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('吹き出し', 'ystandard-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('吹き出しブロック', 'ystandard-blocks'),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_feather__WEBPACK_IMPORTED_MODULE_8__["default"], {
    stroke: _src_js_config_config__WEBPACK_IMPORTED_MODULE_1__.ystdbConfig.color.iconForeground,
    style: {
      fill: 'none'
    }
  }),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('balloon'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('吹き出し'), 'balloon'],
  category: _src_js_config_config__WEBPACK_IMPORTED_MODULE_1__.ystdbConfig.category.common,
  attributes: _config__WEBPACK_IMPORTED_MODULE_4__.attributes,
  supports: _config__WEBPACK_IMPORTED_MODULE_4__.supports,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  deprecated: _deprecated_index__WEBPACK_IMPORTED_MODULE_5__.deprecated,
  example: {}
});
}();
/******/ })()
;
//# sourceMappingURL=balloon.js.map