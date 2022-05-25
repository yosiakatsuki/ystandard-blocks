/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/svg-button/config.js":
/*!*************************************!*\
  !*** ./blocks/svg-button/config.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attributes": function() { return /* binding */ attributes; },
/* harmony export */   "supports": function() { return /* binding */ supports; }
/* harmony export */ });
/**
 * attributes
 */
const attributes = {
  text: {
    type: 'string',
    source: 'html',
    selector: '.ystdb-button__text'
  },
  borderRadius: {
    type: 'number',
    default: 4
  },
  iconLeft: {
    type: 'string'
  },
  iconSizeLeft: {
    type: 'string',
    default: ''
  },
  iconRight: {
    type: 'string'
  },
  iconSizeRight: {
    type: 'string',
    default: ''
  },
  align: {
    type: 'string'
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
  fontSize: {
    type: 'string'
  },
  customFontSize: {
    type: 'string'
  },
  isFontSizeResponsive: {
    type: 'bool',
    default: false
  },
  fontSizeMobile: {
    type: 'number'
  },
  fontSizeTablet: {
    type: 'number'
  },
  fontSizeDesktop: {
    type: 'number'
  },
  url: {
    type: 'string'
  },
  linkTarget: {
    type: 'string'
  },
  rel: {
    type: 'string',
    source: 'attribute',
    selector: 'a',
    attribute: 'rel'
  },
  paddingType: {
    type: 'string',
    default: ''
  },
  isPaddingVerticalResponsive: {
    type: 'bool'
  },
  paddingVerticalDesktop: {
    type: 'number'
  },
  paddingVerticalTablet: {
    type: 'number'
  },
  paddingVerticalMobile: {
    type: 'number'
  },
  isPaddingHorizontalResponsive: {
    type: 'bool'
  },
  paddingHorizontalDesktop: {
    type: 'number'
  },
  paddingHorizontalTablet: {
    type: 'number'
  },
  paddingHorizontalMobile: {
    type: 'number'
  },
  buttonBlockDesktop: {
    type: 'bool'
  },
  buttonBlockTablet: {
    type: 'bool'
  },
  buttonBlockMobile: {
    type: 'bool'
  },
  maxWidth: {
    type: 'number',
    default: 100
  },
  maxUnit: {
    type: 'string',
    default: '%'
  },
  animationType: {
    type: 'string',
    default: 'none'
  },
  animationInterval: {
    type: 'number',
    default: 5
  }
};
const supports = {
  align: false,
  className: false
};

/***/ }),

/***/ "./blocks/svg-button/deprecated/2-10-1.js":
/*!************************************************!*\
  !*** ./blocks/svg-button/deprecated/2-10-1.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blockAttributes": function() { return /* binding */ blockAttributes; },
/* harmony export */   "blockSupports": function() { return /* binding */ blockSupports; },
/* harmony export */   "deprecated2101": function() { return /* binding */ deprecated2101; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ystd_components_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ystd/components/svg-icon */ "./src/js/components/svg-icon/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ystd_components_responsive_number_control_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ystd/components/responsive-number-control/functions */ "./src/js/components/responsive-number-control/functions.js");
/* harmony import */ var _ystd_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ystd/components/responsive-font-size/functions */ "./src/js/components/responsive-font-size/functions.js");
/* harmony import */ var _ystd_util_getResponsivPropertye__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ystd/util/_getResponsivPropertye */ "./src/js/util/_getResponsivPropertye.js");








const blockAttributes = {
  text: {
    type: 'string',
    source: 'html',
    selector: '.ystdb-button__text'
  },
  borderRadius: {
    type: 'number',
    default: 4
  },
  iconLeft: {
    type: 'string'
  },
  iconSizeLeft: {
    type: 'string',
    default: ''
  },
  iconRight: {
    type: 'string'
  },
  iconSizeRight: {
    type: 'string',
    default: ''
  },
  align: {
    type: 'string'
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
  fontSize: {
    type: 'string'
  },
  customFontSize: {
    type: 'number'
  },
  isFontSizeResponsive: {
    type: 'bool',
    default: false
  },
  fontSizeMobile: {
    type: 'number'
  },
  fontSizeTablet: {
    type: 'number'
  },
  fontSizeDesktop: {
    type: 'number'
  },
  url: {
    type: 'string'
  },
  linkTarget: {
    type: 'string'
  },
  rel: {
    type: 'string',
    source: 'attribute',
    selector: 'a',
    attribute: 'rel'
  },
  paddingType: {
    type: 'string',
    default: ''
  },
  isPaddingVerticalResponsive: {
    type: 'bool'
  },
  paddingVerticalDesktop: {
    type: 'number'
  },
  paddingVerticalTablet: {
    type: 'number'
  },
  paddingVerticalMobile: {
    type: 'number'
  },
  isPaddingHorizontalResponsive: {
    type: 'bool'
  },
  paddingHorizontalDesktop: {
    type: 'number'
  },
  paddingHorizontalTablet: {
    type: 'number'
  },
  paddingHorizontalMobile: {
    type: 'number'
  },
  buttonBlockDesktop: {
    type: 'bool'
  },
  buttonBlockTablet: {
    type: 'bool'
  },
  buttonBlockMobile: {
    type: 'bool'
  },
  maxWidth: {
    type: 'number',
    default: 100
  },
  maxUnit: {
    type: 'string',
    default: '%'
  },
  animationType: {
    type: 'string',
    default: 'none'
  },
  animationInterval: {
    type: 'number',
    default: 5
  }
};
const blockSupports = {
  align: false,
  className: false
};
const deprecated2101 = [{
  attributes: { ...blockAttributes
  },
  supports: { ...blockSupports
  },

  migrate(attributes) {
    let newFontSize = attributes.customFontSize;

    if ('number' === typeof newFontSize) {
      newFontSize = newFontSize.toString().replace('px', '') + 'px';
    }

    return { ...attributes,
      customFontSize: newFontSize
    };
  },

  save(_ref) {
    let {
      attributes
    } = _ref;
    const {
      textColor,
      customTextColor,
      fontSize,
      customFontSize,
      backgroundColor,
      customBackgroundColor,
      text,
      borderRadius,
      iconLeft,
      iconSizeLeft,
      iconRight,
      iconSizeRight,
      isFontSizeResponsive,
      fontSizeMobile,
      fontSizeTablet,
      fontSizeDesktop,
      align,
      url,
      rel,
      linkTarget,
      isPaddingVerticalResponsive,
      paddingVerticalDesktop,
      paddingVerticalTablet,
      paddingVerticalMobile,
      isPaddingHorizontalResponsive,
      paddingHorizontalDesktop,
      paddingHorizontalTablet,
      paddingHorizontalMobile,
      buttonBlockDesktop,
      buttonBlockTablet,
      buttonBlockMobile,
      maxWidth,
      maxUnit,
      animationType,
      animationInterval
    } = attributes;
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.getColorClassName)('color', textColor);
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.getColorClassName)('background-color', backgroundColor);
    const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.getFontSizeClass)(fontSize);
    const wrapClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-button', {
      [`has-text-align-${align}`]: align,
      [fontSizeClass]: fontSizeClass && !isFontSizeResponsive,
      ...(0,_ystd_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_6__.getFontResponsiveClass)(isFontSizeResponsive, fontSizeDesktop, fontSizeTablet, fontSizeMobile)
    });
    const wrapStyles = {
      fontSize: !fontSizeClass && customFontSize && !isFontSizeResponsive ? customFontSize + 'px' : undefined,
      ...(0,_ystd_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_6__.getFontResponsiveStyle)({
        isResponsive: isFontSizeResponsive,
        desktop: fontSizeDesktop,
        tablet: fontSizeTablet,
        mobile: fontSizeMobile
      })
    };
    const linkClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-button__link', 'ystdb-button__link', {
      [textClass]: textClass,
      'has-text-color': textColor || customTextColor,
      [backgroundClass]: backgroundClass,
      'has-background': backgroundColor || customBackgroundColor,
      'no-border-radius': borderRadius === 0,
      'is-block': buttonBlockDesktop || buttonBlockTablet || buttonBlockMobile,
      'is-block--desktop': buttonBlockDesktop,
      'is-block--tablet': buttonBlockTablet,
      'is-block--mobile': buttonBlockMobile,
      'has-animation': animationType && 'none' !== animationType,
      [`has-animation--${animationType}`]: 'none' !== animationType,
      ...(0,_ystd_components_responsive_number_control_functions__WEBPACK_IMPORTED_MODULE_5__.getPaddingResponsiveClass)({
        isResponsive: isPaddingVerticalResponsive,
        desktop: paddingVerticalDesktop,
        tablet: paddingVerticalTablet,
        mobile: paddingVerticalMobile,
        prefix: 'vertical'
      }),
      ...(0,_ystd_components_responsive_number_control_functions__WEBPACK_IMPORTED_MODULE_5__.getPaddingResponsiveClass)({
        isResponsive: isPaddingHorizontalResponsive,
        desktop: paddingHorizontalDesktop,
        tablet: paddingHorizontalTablet,
        mobile: paddingHorizontalMobile,
        prefix: 'horizontal'
      })
    });
    const linkStyles = {
      color: textClass ? undefined : customTextColor,
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      borderRadius: borderRadius ? borderRadius + 'px' : undefined,
      maxWidth: (buttonBlockDesktop || buttonBlockTablet || buttonBlockMobile) && maxWidth ? `${maxWidth}${maxUnit}` : undefined,
      animationDuration: 'none' !== animationType && animationInterval ? `${animationInterval}s` : undefined,
      paddingTop: !isPaddingVerticalResponsive && paddingVerticalDesktop ? paddingVerticalDesktop : undefined,
      paddingBottom: !isPaddingVerticalResponsive && paddingVerticalDesktop ? paddingVerticalDesktop : undefined,
      paddingRight: !isPaddingHorizontalResponsive && paddingHorizontalDesktop ? paddingHorizontalDesktop : undefined,
      paddingLeft: !isPaddingHorizontalResponsive && paddingHorizontalDesktop ? paddingHorizontalDesktop : undefined,
      ...(0,_ystd_components_responsive_number_control_functions__WEBPACK_IMPORTED_MODULE_5__.getPaddingResponsiveStyle)({
        isResponsive: isPaddingVerticalResponsive,
        desktop: paddingVerticalDesktop,
        tablet: paddingVerticalTablet,
        mobile: paddingVerticalMobile,
        prefix: 'vertical'
      }),
      ...(0,_ystd_components_responsive_number_control_functions__WEBPACK_IMPORTED_MODULE_5__.getPaddingResponsiveStyle)({
        isResponsive: isPaddingHorizontalResponsive,
        desktop: paddingHorizontalDesktop,
        tablet: paddingHorizontalTablet,
        mobile: paddingHorizontalMobile,
        prefix: 'horizontal'
      })
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: wrapClasses,
      style: wrapStyles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      href: url,
      className: linkClasses,
      style: linkStyles,
      target: linkTarget,
      rel: rel
    }, (0,_ystd_util_getResponsivPropertye__WEBPACK_IMPORTED_MODULE_7__["default"])({
      'font-size': isFontSizeResponsive ? `${fontSizeDesktop}px` : undefined,
      'padding-top': isPaddingVerticalResponsive ? `${paddingVerticalDesktop}px` : undefined,
      'padding-bottom': isPaddingVerticalResponsive ? `${paddingVerticalDesktop}px` : undefined,
      'padding-right': isPaddingHorizontalResponsive ? `${paddingHorizontalDesktop}px` : undefined,
      'padding-left': isPaddingHorizontalResponsive ? `${paddingHorizontalDesktop}px` : undefined
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "ystdb-button__link-content"
    }, !!iconLeft && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-button__icon', 'ystdb-button__icon--left', {
        [iconSizeLeft]: iconSizeLeft
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_ystd_components_svg_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: iconLeft
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.Content, {
      tagName: 'span',
      value: text,
      className: 'ystdb-button__text'
    }), !!iconRight && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-button__icon', 'ystdb-button__icon--right', {
        [iconSizeRight]: iconSizeRight
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_ystd_components_svg_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: iconRight
    })))));
  }

}];

/***/ }),

/***/ "./blocks/svg-button/deprecated/deprecated_2-7.js":
/*!********************************************************!*\
  !*** ./blocks/svg-button/deprecated/deprecated_2-7.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deprecated27": function() { return /* binding */ deprecated27; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_js_components_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/js/components/svg-icon */ "./src/js/components/svg-icon/index.js");




const deprecated27 = [{
  attributes: {
    text: {
      type: 'string',
      source: 'html',
      selector: '.ystdb-button__text'
    },
    borderRadius: {
      type: 'number',
      default: 4
    },
    iconLeft: {
      type: 'string'
    },
    iconSizeLeft: {
      type: 'string',
      default: ''
    },
    iconRight: {
      type: 'string'
    },
    iconSizeRight: {
      type: 'string',
      default: ''
    },
    align: {
      type: 'string'
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
    fontSize: {
      type: 'string'
    },
    customFontSize: {
      type: 'number'
    },
    url: {
      type: 'string'
    },
    linkTarget: {
      type: 'string'
    },
    rel: {
      type: 'string'
    },
    paddingType: {
      type: 'string',
      default: ''
    },
    buttonType: {
      type: 'string'
    },
    maxWidth: {
      type: 'number',
      default: 100
    },
    maxUnit: {
      type: 'string',
      default: '%'
    },
    animationType: {
      type: 'string',
      default: 'none'
    },
    animationInterval: {
      type: 'number',
      default: 5
    }
  },

  migrate(attributes) {
    let newPaddingVertical;
    let newPaddingHorizontal;

    if ('is-small' === attributes.paddingType) {
      newPaddingVertical = 8;
      newPaddingHorizontal = 8;
    }

    if ('is-large' === attributes.paddingType) {
      newPaddingVertical = 48;
      newPaddingHorizontal = 48;
    }

    return { ...attributes,
      buttonBlockDesktop: 'is-block' === attributes.buttonType,
      buttonBlockTablet: 'is-block' === attributes.buttonType,
      buttonBlockMobile: 'is-block' === attributes.buttonType,
      paddingVerticalDesktop: newPaddingVertical,
      paddingHorizontalDesktop: newPaddingHorizontal,
      buttonType: undefined,
      paddingType: undefined
    };
  },

  supports: {
    align: false,
    className: false
  },

  save(_ref) {
    let {
      attributes
    } = _ref;
    const {
      textColor,
      customTextColor,
      fontSize,
      customFontSize,
      backgroundColor,
      customBackgroundColor,
      text,
      borderRadius,
      iconLeft,
      iconSizeLeft,
      iconRight,
      iconSizeRight,
      align,
      url,
      rel,
      linkTarget,
      paddingType,
      buttonType,
      maxWidth,
      maxUnit,
      animationType,
      animationInterval
    } = attributes;
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', textColor);
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('background-color', backgroundColor);
    const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass)(fontSize);
    const wrapClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-button', {
      [`has-text-align-${align}`]: align,
      [fontSizeClass]: fontSizeClass
    });
    const linkClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-button__link', 'ystdb-button__link', {
      [textClass]: textClass,
      'has-text-color': textColor || customTextColor,
      [backgroundClass]: backgroundClass,
      'has-background': backgroundColor || customBackgroundColor,
      'no-border-radius': borderRadius === 0,
      [paddingType]: paddingType,
      [buttonType]: buttonType,
      'has-animation': animationType && 'none' !== animationType,
      [`has-animation--${animationType}`]: 'none' !== animationType
    });
    const wrapStyles = {
      fontSize: !fontSizeClass && customFontSize ? customFontSize + 'px' : undefined
    };
    const linkStyles = {
      color: textClass ? undefined : customTextColor,
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      borderRadius: borderRadius ? borderRadius + 'px' : undefined,
      maxWidth: buttonType && maxWidth ? `${maxWidth}${maxUnit}` : undefined,
      animationDuration: 'none' !== animationType && animationInterval ? `${animationInterval}s` : undefined
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: wrapClasses,
      style: wrapStyles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: url,
      className: linkClasses,
      style: linkStyles,
      target: linkTarget,
      rel: rel
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "ystdb-button__link-content"
    }, !!iconLeft && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-button__icon', 'ystdb-button__icon--left', {
        [iconSizeLeft]: iconSizeLeft
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_js_components_svg_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: iconLeft
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: 'span',
      value: text,
      className: 'ystdb-button__text'
    }), !!iconRight && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-button__icon', 'ystdb-button__icon--right', {
        [iconSizeRight]: iconSizeRight
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_js_components_svg_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: iconRight
    })))));
  }

}];

/***/ }),

/***/ "./blocks/svg-button/deprecated/deprecated_2-9-3.js":
/*!**********************************************************!*\
  !*** ./blocks/svg-button/deprecated/deprecated_2-9-3.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deprecated293": function() { return /* binding */ deprecated293; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_js_components_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/js/components/svg-icon */ "./src/js/components/svg-icon/index.js");
/* harmony import */ var _src_js_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/js/components/responsive-font-size/functions */ "./src/js/components/responsive-font-size/functions.js");
/* harmony import */ var _src_js_components_responsive_number_control_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/js/components/responsive-number-control/functions */ "./src/js/components/responsive-number-control/functions.js");
/* harmony import */ var _src_js_util_getResponsivPropertye__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/js/util/_getResponsivPropertye */ "./src/js/util/_getResponsivPropertye.js");








const deprecated293 = [{
  attributes: {
    text: {
      type: 'string',
      source: 'html',
      selector: '.ystdb-button__text'
    },
    borderRadius: {
      type: 'number',
      default: 4
    },
    iconLeft: {
      type: 'string'
    },
    iconSizeLeft: {
      type: 'string',
      default: ''
    },
    iconRight: {
      type: 'string'
    },
    iconSizeRight: {
      type: 'string',
      default: ''
    },
    align: {
      type: 'string'
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
    fontSize: {
      type: 'string'
    },
    customFontSize: {
      type: 'number'
    },
    isFontSizeResponsive: {
      type: 'bool',
      default: false
    },
    fontSizeMobile: {
      type: 'number'
    },
    fontSizeTablet: {
      type: 'number'
    },
    fontSizeDesktop: {
      type: 'number'
    },
    url: {
      type: 'string'
    },
    linkTarget: {
      type: 'string'
    },
    rel: {
      type: 'string'
    },
    paddingType: {
      type: 'string',
      default: ''
    },
    isPaddingVerticalResponsive: {
      type: 'bool'
    },
    paddingVerticalDesktop: {
      type: 'number'
    },
    paddingVerticalTablet: {
      type: 'number'
    },
    paddingVerticalMobile: {
      type: 'number'
    },
    isPaddingHorizontalResponsive: {
      type: 'bool'
    },
    paddingHorizontalDesktop: {
      type: 'number'
    },
    paddingHorizontalTablet: {
      type: 'number'
    },
    paddingHorizontalMobile: {
      type: 'number'
    },
    buttonBlockDesktop: {
      type: 'bool'
    },
    buttonBlockTablet: {
      type: 'bool'
    },
    buttonBlockMobile: {
      type: 'bool'
    },
    maxWidth: {
      type: 'number',
      default: 100
    },
    maxUnit: {
      type: 'string',
      default: '%'
    },
    animationType: {
      type: 'string',
      default: 'none'
    },
    animationInterval: {
      type: 'number',
      default: 5
    }
  },

  migrate(attributes) {
    let newPaddingVertical;
    let newPaddingHorizontal;

    if ('is-small' === attributes.paddingType) {
      newPaddingVertical = 8;
      newPaddingHorizontal = 8;
    }

    if ('is-large' === attributes.paddingType) {
      newPaddingVertical = 48;
      newPaddingHorizontal = 48;
    }

    return { ...attributes,
      buttonBlockDesktop: 'is-block' === attributes.buttonType,
      buttonBlockTablet: 'is-block' === attributes.buttonType,
      buttonBlockMobile: 'is-block' === attributes.buttonType,
      paddingVerticalDesktop: newPaddingVertical,
      paddingHorizontalDesktop: newPaddingHorizontal,
      buttonType: undefined,
      paddingType: undefined
    };
  },

  supports: {
    align: false,
    className: false
  },

  save(_ref) {
    let {
      attributes
    } = _ref;
    const {
      textColor,
      customTextColor,
      fontSize,
      customFontSize,
      backgroundColor,
      customBackgroundColor,
      text,
      borderRadius,
      iconLeft,
      iconSizeLeft,
      iconRight,
      iconSizeRight,
      isFontSizeResponsive,
      fontSizeMobile,
      fontSizeTablet,
      fontSizeDesktop,
      align,
      url,
      rel,
      linkTarget,
      isPaddingVerticalResponsive,
      paddingVerticalDesktop,
      paddingVerticalTablet,
      paddingVerticalMobile,
      isPaddingHorizontalResponsive,
      paddingHorizontalDesktop,
      paddingHorizontalTablet,
      paddingHorizontalMobile,
      buttonBlockDesktop,
      buttonBlockTablet,
      buttonBlockMobile,
      maxWidth,
      maxUnit,
      animationType,
      animationInterval
    } = attributes;
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('color', textColor);
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('background-color', backgroundColor);
    const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getFontSizeClass)(fontSize);
    const wrapClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-button', {
      [`has-text-align-${align}`]: align,
      [fontSizeClass]: fontSizeClass && !isFontSizeResponsive,
      ...(0,_src_js_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_5__.getFontResponsiveClass)(isFontSizeResponsive, fontSizeDesktop, fontSizeTablet, fontSizeMobile)
    });
    const wrapStyles = {
      fontSize: !fontSizeClass && customFontSize && !isFontSizeResponsive ? customFontSize + 'px' : undefined,
      ...(0,_src_js_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_5__.getFontResponsiveStyle)({
        isResponsive: isFontSizeResponsive,
        desktop: fontSizeDesktop,
        tablet: fontSizeTablet,
        mobile: fontSizeMobile
      })
    };
    const linkClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-button__link', 'ystdb-button__link', {
      [textClass]: textClass,
      'has-text-color': textColor || customTextColor,
      [backgroundClass]: backgroundClass,
      'has-background': backgroundColor || customBackgroundColor,
      'no-border-radius': borderRadius === 0,
      'is-block': buttonBlockDesktop || buttonBlockTablet || buttonBlockMobile,
      'is-block--desktop': buttonBlockDesktop,
      'is-block--tablet': buttonBlockTablet,
      'is-block--mobile': buttonBlockMobile,
      'has-animation': animationType && 'none' !== animationType,
      [`has-animation--${animationType}`]: 'none' !== animationType,
      ...(0,_src_js_components_responsive_number_control_functions__WEBPACK_IMPORTED_MODULE_6__.getPaddingResponsiveClass)({
        isResponsive: isPaddingVerticalResponsive,
        desktop: paddingVerticalDesktop,
        tablet: paddingVerticalTablet,
        mobile: paddingVerticalMobile,
        prefix: 'vertical'
      }),
      ...(0,_src_js_components_responsive_number_control_functions__WEBPACK_IMPORTED_MODULE_6__.getPaddingResponsiveClass)({
        isResponsive: isPaddingHorizontalResponsive,
        desktop: paddingHorizontalDesktop,
        tablet: paddingHorizontalTablet,
        mobile: paddingHorizontalMobile,
        prefix: 'horizontal'
      })
    });
    const linkStyles = {
      color: textClass ? undefined : customTextColor,
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      borderRadius: borderRadius ? borderRadius + 'px' : undefined,
      maxWidth: (buttonBlockDesktop || buttonBlockTablet || buttonBlockMobile) && maxWidth ? `${maxWidth}${maxUnit}` : undefined,
      animationDuration: 'none' !== animationType && animationInterval ? `${animationInterval}s` : undefined,
      paddingTop: !isPaddingVerticalResponsive && paddingVerticalDesktop ? paddingVerticalDesktop : undefined,
      paddingBottom: !isPaddingVerticalResponsive && paddingVerticalDesktop ? paddingVerticalDesktop : undefined,
      paddingRight: !isPaddingHorizontalResponsive && paddingHorizontalDesktop ? paddingHorizontalDesktop : undefined,
      paddingLeft: !isPaddingHorizontalResponsive && paddingHorizontalDesktop ? paddingHorizontalDesktop : undefined,
      ...(0,_src_js_components_responsive_number_control_functions__WEBPACK_IMPORTED_MODULE_6__.getPaddingResponsiveStyle)({
        isResponsive: isPaddingVerticalResponsive,
        desktop: paddingVerticalDesktop,
        tablet: paddingVerticalTablet,
        mobile: paddingVerticalMobile,
        prefix: 'vertical'
      }),
      ...(0,_src_js_components_responsive_number_control_functions__WEBPACK_IMPORTED_MODULE_6__.getPaddingResponsiveStyle)({
        isResponsive: isPaddingHorizontalResponsive,
        desktop: paddingHorizontalDesktop,
        tablet: paddingHorizontalTablet,
        mobile: paddingHorizontalMobile,
        prefix: 'horizontal'
      })
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: wrapClasses,
      style: wrapStyles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      href: url,
      className: linkClasses,
      style: linkStyles,
      target: linkTarget,
      rel: rel
    }, (0,_src_js_util_getResponsivPropertye__WEBPACK_IMPORTED_MODULE_7__["default"])({
      'font-size': isFontSizeResponsive ? `${fontSizeDesktop}px` : undefined,
      'padding-top': isPaddingVerticalResponsive ? `${paddingVerticalDesktop}px` : undefined,
      'padding-bottom': isPaddingVerticalResponsive ? `${paddingVerticalDesktop}px` : undefined,
      'padding-right': isPaddingHorizontalResponsive ? `${paddingHorizontalDesktop}px` : undefined,
      'padding-left': isPaddingHorizontalResponsive ? `${paddingHorizontalDesktop}px` : undefined
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "ystdb-button__link-content"
    }, !!iconLeft && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-button__icon', 'ystdb-button__icon--left', {
        [iconSizeLeft]: iconSizeLeft
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_src_js_components_svg_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: iconLeft
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      tagName: 'span',
      value: text,
      className: 'ystdb-button__text'
    }), !!iconRight && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-button__icon', 'ystdb-button__icon--right', {
        [iconSizeRight]: iconSizeRight
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_src_js_components_svg_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: iconRight
    })))));
  }

}];

/***/ }),

/***/ "./blocks/svg-button/deprecated/index.js":
/*!***********************************************!*\
  !*** ./blocks/svg-button/deprecated/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deprecated": function() { return /* binding */ deprecated; }
/* harmony export */ });
/* harmony import */ var _deprecated_2_7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deprecated_2-7 */ "./blocks/svg-button/deprecated/deprecated_2-7.js");
/* harmony import */ var _deprecated_2_9_3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deprecated_2-9-3 */ "./blocks/svg-button/deprecated/deprecated_2-9-3.js");
/* harmony import */ var _2_10_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./2-10-1 */ "./blocks/svg-button/deprecated/2-10-1.js");



const deprecated = [..._deprecated_2_7__WEBPACK_IMPORTED_MODULE_0__.deprecated27, ..._deprecated_2_9_3__WEBPACK_IMPORTED_MODULE_1__.deprecated293, ..._2_10_1__WEBPACK_IMPORTED_MODULE_2__.deprecated2101];

/***/ }),

/***/ "./blocks/svg-button/edit.js":
/*!***********************************!*\
  !*** ./blocks/svg-button/edit.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ystd_components_svg_icon_select_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ystd/components/svg-icon-select/index */ "./src/js/components/svg-icon-select/index.js");
/* harmony import */ var _ystd_components_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ystd/components/svg-icon */ "./src/js/components/svg-icon/index.js");
/* harmony import */ var _src_js_config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/js/config/config */ "./src/js/config/config.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ystd_components_responsive_font_size_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ystd/components/responsive-font-size/index */ "./src/js/components/responsive-font-size/index.js");
/* harmony import */ var _ystd_components_responsive_number_control_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ystd/components/responsive-number-control/index */ "./src/js/components/responsive-number-control/index.js");
/* harmony import */ var _ystd_components_responsive_number_control_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ystd/components/responsive-number-control/functions */ "./src/js/components/responsive-number-control/functions.js");
/* harmony import */ var _src_js_util_getNum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/js/util/_getNum */ "./src/js/util/_getNum.js");
/* harmony import */ var _ystd_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ystd/components/responsive-font-size/functions */ "./src/js/components/responsive-font-size/functions.js");
/* harmony import */ var _ystd_components_horizon_buttons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ystd/components/horizon-buttons */ "./src/js/components/horizon-buttons/index.js");

















function svgButton(props) {
  const {
    textColor,
    backgroundColor,
    setTextColor,
    setBackgroundColor,
    attributes,
    setAttributes,
    isSelected,
    fontSize,
    setFontSize,
    className
  } = props;
  const {
    borderRadius,
    text,
    iconLeft,
    iconSizeLeft,
    iconRight,
    iconSizeRight,
    isFontSizeResponsive,
    fontSizeMobile,
    fontSizeTablet,
    fontSizeDesktop,
    align,
    url,
    rel,
    linkTarget,
    isPaddingVerticalResponsive,
    paddingVerticalDesktop,
    paddingVerticalTablet,
    paddingVerticalMobile,
    isPaddingHorizontalResponsive,
    paddingHorizontalDesktop,
    paddingHorizontalTablet,
    paddingHorizontalMobile,
    buttonBlockDesktop,
    buttonBlockTablet,
    buttonBlockMobile,
    maxWidth,
    maxUnit,
    animationType,
    animationInterval
  } = attributes;
  const wrapClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'wp-block-button', {
    [`has-text-align-${align}`]: align,
    [fontSize.class]: fontSize.class && !isFontSizeResponsive,
    ...(0,_ystd_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_13__.getFontResponsiveClass)(isFontSizeResponsive, fontSizeDesktop, fontSizeTablet, fontSizeMobile)
  });
  const wrapStyles = {
    fontSize: fontSize.size && !isFontSizeResponsive ? fontSize.size : undefined,
    ...(0,_ystd_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_13__.getFontResponsiveStyle)({
      isResponsive: isFontSizeResponsive,
      desktop: fontSizeDesktop,
      tablet: fontSizeTablet,
      mobile: fontSizeMobile
    })
  };
  const linkClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-button__link', 'ystdb-button__link', {
    [textColor.class]: textColor.class,
    'has-text-color': textColor.class,
    [backgroundColor.class]: backgroundColor.class,
    'has-background': backgroundColor.class,
    'is-block': buttonBlockDesktop || buttonBlockTablet || buttonBlockMobile,
    'is-block--desktop': buttonBlockDesktop,
    'is-block--tablet': buttonBlockTablet,
    'is-block--mobile': buttonBlockMobile,
    'is-vertical-padding-responsive': isPaddingVerticalResponsive,
    'is-horizontal-padding-responsive': isPaddingHorizontalResponsive,
    'has-animation': animationType && 'none' !== animationType,
    [`has-animation--${animationType}`]: 'none' !== animationType,
    ...(0,_ystd_components_responsive_number_control_functions__WEBPACK_IMPORTED_MODULE_11__.getPaddingResponsiveClass)({
      isResponsive: isPaddingVerticalResponsive,
      desktop: paddingVerticalDesktop,
      tablet: paddingVerticalTablet,
      mobile: paddingVerticalMobile,
      prefix: 'vertical'
    }),
    ...(0,_ystd_components_responsive_number_control_functions__WEBPACK_IMPORTED_MODULE_11__.getPaddingResponsiveClass)({
      isResponsive: isPaddingHorizontalResponsive,
      desktop: paddingHorizontalDesktop,
      tablet: paddingHorizontalTablet,
      mobile: paddingHorizontalMobile,
      prefix: 'horizontal'
    })
  });
  const linkStyles = {
    color: textColor.color,
    backgroundColor: backgroundColor.color,
    borderRadius,
    maxWidth: (buttonBlockDesktop || buttonBlockTablet || buttonBlockMobile) && maxWidth ? `${maxWidth}${maxUnit}` : undefined,
    animationDuration: 'none' !== animationType && animationInterval ? `${animationInterval}s` : undefined,
    paddingTop: !isPaddingVerticalResponsive && paddingVerticalDesktop ? paddingVerticalDesktop : undefined,
    paddingBottom: !isPaddingVerticalResponsive && paddingVerticalDesktop ? paddingVerticalDesktop : undefined,
    paddingRight: !isPaddingHorizontalResponsive && paddingHorizontalDesktop ? paddingHorizontalDesktop : undefined,
    paddingLeft: !isPaddingHorizontalResponsive && paddingHorizontalDesktop ? paddingHorizontalDesktop : undefined,
    ...(0,_ystd_components_responsive_number_control_functions__WEBPACK_IMPORTED_MODULE_11__.getPaddingResponsiveStyle)({
      isResponsive: isPaddingVerticalResponsive,
      desktop: paddingVerticalDesktop,
      tablet: paddingVerticalTablet,
      mobile: paddingVerticalMobile,
      prefix: 'vertical'
    }),
    ...(0,_ystd_components_responsive_number_control_functions__WEBPACK_IMPORTED_MODULE_11__.getPaddingResponsiveStyle)({
      isResponsive: isPaddingHorizontalResponsive,
      desktop: paddingHorizontalDesktop,
      tablet: paddingHorizontalTablet,
      mobile: paddingHorizontalMobile,
      prefix: 'horizontal'
    })
  };
  const maxWidthUnitMaximum = 'px' === maxUnit ? 1200 : 100;
  const maxWidthValue = '%' === maxUnit && 100 < maxWidth ? 100 : maxWidth;

  const convertIconSize = size => {
    if ('fa-xs' === size) {
      return 'is-small';
    }

    if ('fa-2x' === size) {
      return 'is-large';
    }

    return size;
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.AlignmentToolbar, {
    value: align,
    onChange: nextAlign => {
      setAttributes({
        align: nextAlign
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Color settings', 'ystandard-blocks'),
    initialOpen: true,
    colorSettings: [{
      value: backgroundColor.color,
      onChange: newColor => {
        setAttributes({
          customGradient: undefined
        });
        setBackgroundColor(newColor);
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Background Color', 'ystandard-blocks')
    }, {
      value: textColor.color,
      onChange: color => {
        setTextColor(color);
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Text Color', 'ystandard-blocks')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('枠線設定', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    value: borderRadius,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('枠線の角丸', 'ystandard-blocks'),
    min: _src_js_config_config__WEBPACK_IMPORTED_MODULE_4__.ystdbConfig.button.borderRadiusMin,
    max: _src_js_config_config__WEBPACK_IMPORTED_MODULE_4__.ystdbConfig.button.borderRadiusMax,
    initialPosition: _src_js_config_config__WEBPACK_IMPORTED_MODULE_4__.ystdbConfig.button.borderRadiusInitialPosition,
    allowReset: true,
    onChange: value => {
      setAttributes({
        borderRadius: value
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('アイコン設定', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ystd_components_svg_icon_select_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    iconControlTitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('左アイコン', 'ystandard-blocks'),
    selectedIcon: iconLeft,
    onClickIcon: value => {
      setAttributes({
        iconLeft: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__._x)('左アイコンサイズ', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ystd_components_horizon_buttons__WEBPACK_IMPORTED_MODULE_14__["default"], null, _src_js_config_config__WEBPACK_IMPORTED_MODULE_4__.ystdbConfig.icon.size.map(item => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      key: item.value,
      isSecondary: convertIconSize(iconSizeLeft) !== item.value,
      isPrimary: convertIconSize(iconSizeLeft) === item.value,
      onClick: () => {
        setAttributes({
          iconSizeLeft: item.value
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, item.label));
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ystd_components_svg_icon_select_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    iconControlTitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('右アイコン', 'ystandard-blocks'),
    selectedIcon: iconRight,
    onClickIcon: value => {
      setAttributes({
        iconRight: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__._x)('右アイコンサイズ', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ystd_components_horizon_buttons__WEBPACK_IMPORTED_MODULE_14__["default"], null, _src_js_config_config__WEBPACK_IMPORTED_MODULE_4__.ystdbConfig.icon.size.map(item => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      key: item.value,
      isSecondary: convertIconSize(iconSizeRight) !== item.value,
      isPrimary: convertIconSize(iconSizeRight) === item.value,
      onClick: () => {
        setAttributes({
          iconSizeRight: item.value
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, item.label));
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('文字設定', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ystd_components_responsive_font_size_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: 'font-size',
    useResponsive: isFontSizeResponsive,
    fontSize: fontSize,
    onChangeFontSizePicker: font => {
      setFontSize(font);
    },
    changeResponsiveMode: value => {
      if (value) {
        setAttributes({
          fontSizeDesktop: !fontSizeDesktop && fontSize.size ? fontSize.size : (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_12__["default"])(fontSizeDesktop, 0, 200, null),
          fontSizeTablet: !fontSizeTablet && fontSize.size ? fontSize.size : (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_12__["default"])(fontSizeTablet, 0, 200, null),
          fontSizeMobile: !fontSizeMobile && fontSize.size ? fontSize.size : (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_12__["default"])(fontSizeMobile, 0, 200, null)
        });
      }

      setAttributes({
        isFontSizeResponsive: value
      });
    },
    desktopValue: fontSizeDesktop,
    desktopOnChange: value => {
      setAttributes({
        fontSizeDesktop: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_12__["default"])(value, 0, 200, null)
      });
    },
    desktopUnit: 'px',
    tabletValue: fontSizeTablet,
    tabletOnChange: value => setAttributes({
      fontSizeTablet: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_12__["default"])(value, 0, 200, null)
    }),
    tabletUnit: 'px',
    mobileValue: fontSizeMobile,
    mobileOnChange: value => setAttributes({
      fontSizeMobile: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_12__["default"])(value, 0, 200, null)
    }),
    mobileUnit: 'px'
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('余白設定', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `ystdb-info__small`
  }, "\u30DC\u30BF\u30F3\u5185\u5074\u306E\u4F59\u767D\u8A2D\u5B9A"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ystd_components_responsive_number_control_index__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('上下', 'ystandard-blocks'),
    useResponsive: isPaddingVerticalResponsive,
    changeResponsiveMode: value => {
      setAttributes({
        isPaddingVerticalResponsive: value
      });
    },
    desktopValue: paddingVerticalDesktop,
    desktopOnChange: value => {
      setAttributes({
        paddingVerticalDesktop: value
      });
    },
    tabletValue: paddingVerticalTablet,
    tabletOnChange: value => {
      setAttributes({
        paddingVerticalTablet: value
      });
    },
    mobileValue: paddingVerticalMobile,
    mobileOnChange: value => {
      setAttributes({
        paddingVerticalMobile: value
      });
    },
    min: 1,
    max: 500,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ystd_components_responsive_number_control_index__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('左右', 'ystandard-blocks'),
    useResponsive: isPaddingHorizontalResponsive,
    changeResponsiveMode: value => {
      setAttributes({
        isPaddingHorizontalResponsive: value
      });
    },
    desktopValue: paddingHorizontalDesktop,
    desktopOnChange: value => {
      setAttributes({
        paddingHorizontalDesktop: value
      });
    },
    tabletValue: paddingHorizontalTablet,
    tabletOnChange: value => {
      setAttributes({
        paddingHorizontalTablet: value
      });
    },
    mobileValue: paddingHorizontalMobile,
    mobileOnChange: value => {
      setAttributes({
        paddingHorizontalMobile: value
      });
    },
    min: 1,
    max: 500,
    step: 1
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('ブロックタイプ設定', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('デスクトップ', 'ystandard-blocks'),
    onChange: () => {
      setAttributes({
        buttonBlockDesktop: !buttonBlockDesktop
      });
    },
    checked: buttonBlockDesktop
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('タブレット', 'ystandard-blocks'),
    onChange: () => {
      setAttributes({
        buttonBlockTablet: !buttonBlockTablet
      });
    },
    checked: buttonBlockTablet
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('モバイル', 'ystandard-blocks'),
    onChange: () => {
      setAttributes({
        buttonBlockMobile: !buttonBlockMobile
      });
    },
    checked: buttonBlockMobile
  })), (buttonBlockDesktop || buttonBlockTablet || buttonBlockMobile) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    value: maxWidthValue,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('ボタン最大幅', 'ystandard-blocks'),
    min: 0,
    max: maxWidthUnitMaximum,
    initialPosition: 100,
    allowReset: true,
    onChange: value => {
      setAttributes({
        maxWidth: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('最大幅単位', 'ystandard-blocks'),
    selected: maxUnit,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('%', 'ystandard-blocks'),
      value: '%'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('px', 'ystandard-blocks'),
      value: 'px'
    }],
    onChange: option => {
      setAttributes({
        maxUnit: option
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('アニメーション設定', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('アニメーション種類', 'ystandard-blocks'),
    selected: animationType,
    options: _src_js_config_config__WEBPACK_IMPORTED_MODULE_4__.ystdbConfig.button.animationTypes,
    onChange: option => {
      setAttributes({
        animationType: option
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    value: animationInterval,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('アニメーションの速さ(秒)', 'ystandard-blocks'),
    min: 1,
    max: 10,
    initialPosition: 5,
    allowReset: true,
    onChange: value => {
      setAttributes({
        animationInterval: value
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Link settings')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Open in new tab'),
    onChange: value => {
      const newLinkTarget = value ? '_blank' : undefined;
      let updatedRel = rel;

      if (newLinkTarget && !rel) {
        updatedRel = _src_js_config_config__WEBPACK_IMPORTED_MODULE_4__.ystdbConfig.button.newTabRel;
      } else if (!newLinkTarget && rel === _src_js_config_config__WEBPACK_IMPORTED_MODULE_4__.ystdbConfig.button.newTabRel) {
        updatedRel = undefined;
      }

      setAttributes({
        linkTarget: newLinkTarget,
        rel: updatedRel
      });
    },
    checked: linkTarget === '_blank'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Link rel'),
    value: rel || '',
    onChange: value => {
      setAttributes({
        rel: value
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: wrapClasses,
    style: wrapStyles
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: linkClasses,
    style: linkStyles
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ystdb-button__link-content"
  }, !!iconLeft && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-button__icon', 'ystdb-button__icon--left', {
      [iconSizeLeft]: iconSizeLeft
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ystd_components_svg_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: iconLeft
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    tagName: 'span',
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Add text…'),
    value: text,
    onChange: value => setAttributes({
      text: value
    }),
    withoutInteractiveFormatting: true,
    className: 'ystdb-button__text'
  }), !!iconRight && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-button__icon', 'ystdb-button__icon--right', {
      [iconSizeRight]: iconSizeRight
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ystd_components_svg_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: iconRight
  }))))), !!isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'ystdb-button__link-container'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.URLInput, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Link'),
    className: "ystdb-button__link",
    value: url
    /* eslint-disable jsx-a11y/no-autofocus */
    ,
    autoFocus: false
    /* eslint-enable jsx-a11y/no-autofocus */
    ,
    onChange: value => setAttributes({
      url: value
    }),
    disableSuggestions: !isSelected,
    isFullWidth: true,
    hasBorder: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Open in new tab'),
    onChange: value => {
      const newLinkTarget = value ? '_blank' : undefined;
      let updatedRel = rel;

      if (newLinkTarget && !rel) {
        updatedRel = _src_js_config_config__WEBPACK_IMPORTED_MODULE_4__.ystdbConfig.button.newTabRel;
      } else if (!newLinkTarget && rel === _src_js_config_config__WEBPACK_IMPORTED_MODULE_4__.ystdbConfig.button.newTabRel) {
        updatedRel = undefined;
      }

      setAttributes({
        linkTarget: newLinkTarget,
        rel: updatedRel
      });
    },
    checked: linkTarget === '_blank'
  })));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.withColors)('backgroundColor', {
  textColor: 'color'
}), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.withFontSizes)('fontSize')])(svgButton));

/***/ }),

/***/ "./blocks/svg-button/save.js":
/*!***********************************!*\
  !*** ./blocks/svg-button/save.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ystd_components_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ystd/components/svg-icon */ "./src/js/components/svg-icon/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ystd_components_responsive_number_control_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ystd/components/responsive-number-control/functions */ "./src/js/components/responsive-number-control/functions.js");
/* harmony import */ var _ystd_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ystd/components/responsive-font-size/functions */ "./src/js/components/responsive-font-size/functions.js");
/* harmony import */ var _ystd_util_getResponsivPropertye__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ystd/util/_getResponsivPropertye */ "./src/js/util/_getResponsivPropertye.js");








function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    textColor,
    customTextColor,
    fontSize,
    customFontSize,
    backgroundColor,
    customBackgroundColor,
    text,
    borderRadius,
    iconLeft,
    iconSizeLeft,
    iconRight,
    iconSizeRight,
    isFontSizeResponsive,
    fontSizeMobile,
    fontSizeTablet,
    fontSizeDesktop,
    align,
    url,
    rel,
    linkTarget,
    isPaddingVerticalResponsive,
    paddingVerticalDesktop,
    paddingVerticalTablet,
    paddingVerticalMobile,
    isPaddingHorizontalResponsive,
    paddingHorizontalDesktop,
    paddingHorizontalTablet,
    paddingHorizontalMobile,
    buttonBlockDesktop,
    buttonBlockTablet,
    buttonBlockMobile,
    maxWidth,
    maxUnit,
    animationType,
    animationInterval
  } = attributes;
  const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.getColorClassName)('color', textColor);
  const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.getColorClassName)('background-color', backgroundColor);
  const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.getFontSizeClass)(fontSize);
  const wrapClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-button', {
    [`has-text-align-${align}`]: align,
    [fontSizeClass]: fontSizeClass && !isFontSizeResponsive,
    ...(0,_ystd_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_6__.getFontResponsiveClass)(isFontSizeResponsive, fontSizeDesktop, fontSizeTablet, fontSizeMobile)
  });
  const wrapStyles = {
    fontSize: !fontSizeClass && customFontSize && !isFontSizeResponsive ? customFontSize : undefined,
    ...(0,_ystd_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_6__.getFontResponsiveStyle)({
      isResponsive: isFontSizeResponsive,
      desktop: fontSizeDesktop,
      tablet: fontSizeTablet,
      mobile: fontSizeMobile
    })
  };
  const linkClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-button__link', 'ystdb-button__link', {
    [textClass]: textClass,
    'has-text-color': textColor || customTextColor,
    [backgroundClass]: backgroundClass,
    'has-background': backgroundColor || customBackgroundColor,
    'no-border-radius': borderRadius === 0,
    'is-block': buttonBlockDesktop || buttonBlockTablet || buttonBlockMobile,
    'is-block--desktop': buttonBlockDesktop,
    'is-block--tablet': buttonBlockTablet,
    'is-block--mobile': buttonBlockMobile,
    'has-animation': animationType && 'none' !== animationType,
    [`has-animation--${animationType}`]: 'none' !== animationType,
    ...(0,_ystd_components_responsive_number_control_functions__WEBPACK_IMPORTED_MODULE_5__.getPaddingResponsiveClass)({
      isResponsive: isPaddingVerticalResponsive,
      desktop: paddingVerticalDesktop,
      tablet: paddingVerticalTablet,
      mobile: paddingVerticalMobile,
      prefix: 'vertical'
    }),
    ...(0,_ystd_components_responsive_number_control_functions__WEBPACK_IMPORTED_MODULE_5__.getPaddingResponsiveClass)({
      isResponsive: isPaddingHorizontalResponsive,
      desktop: paddingHorizontalDesktop,
      tablet: paddingHorizontalTablet,
      mobile: paddingHorizontalMobile,
      prefix: 'horizontal'
    })
  });
  const linkStyles = {
    color: textClass ? undefined : customTextColor,
    backgroundColor: backgroundClass ? undefined : customBackgroundColor,
    borderRadius: borderRadius ? borderRadius + 'px' : undefined,
    maxWidth: (buttonBlockDesktop || buttonBlockTablet || buttonBlockMobile) && maxWidth ? `${maxWidth}${maxUnit}` : undefined,
    animationDuration: 'none' !== animationType && animationInterval ? `${animationInterval}s` : undefined,
    paddingTop: !isPaddingVerticalResponsive && paddingVerticalDesktop ? paddingVerticalDesktop : undefined,
    paddingBottom: !isPaddingVerticalResponsive && paddingVerticalDesktop ? paddingVerticalDesktop : undefined,
    paddingRight: !isPaddingHorizontalResponsive && paddingHorizontalDesktop ? paddingHorizontalDesktop : undefined,
    paddingLeft: !isPaddingHorizontalResponsive && paddingHorizontalDesktop ? paddingHorizontalDesktop : undefined,
    ...(0,_ystd_components_responsive_number_control_functions__WEBPACK_IMPORTED_MODULE_5__.getPaddingResponsiveStyle)({
      isResponsive: isPaddingVerticalResponsive,
      desktop: paddingVerticalDesktop,
      tablet: paddingVerticalTablet,
      mobile: paddingVerticalMobile,
      prefix: 'vertical'
    }),
    ...(0,_ystd_components_responsive_number_control_functions__WEBPACK_IMPORTED_MODULE_5__.getPaddingResponsiveStyle)({
      isResponsive: isPaddingHorizontalResponsive,
      desktop: paddingHorizontalDesktop,
      tablet: paddingHorizontalTablet,
      mobile: paddingHorizontalMobile,
      prefix: 'horizontal'
    })
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: wrapClasses,
    style: wrapStyles
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    href: url,
    className: linkClasses,
    style: linkStyles,
    target: linkTarget,
    rel: rel
  }, (0,_ystd_util_getResponsivPropertye__WEBPACK_IMPORTED_MODULE_7__["default"])({
    'font-size': isFontSizeResponsive ? `${fontSizeDesktop}px` : undefined,
    'padding-top': isPaddingVerticalResponsive ? `${paddingVerticalDesktop}px` : undefined,
    'padding-bottom': isPaddingVerticalResponsive ? `${paddingVerticalDesktop}px` : undefined,
    'padding-right': isPaddingHorizontalResponsive ? `${paddingHorizontalDesktop}px` : undefined,
    'padding-left': isPaddingHorizontalResponsive ? `${paddingHorizontalDesktop}px` : undefined
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "ystdb-button__link-content"
  }, !!iconLeft && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-button__icon', 'ystdb-button__icon--left', {
      [iconSizeLeft]: iconSizeLeft
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_ystd_components_svg_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: iconLeft
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.Content, {
    tagName: 'span',
    value: text,
    className: 'ystdb-button__text'
  }), !!iconRight && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-button__icon', 'ystdb-button__icon--right', {
      [iconSizeRight]: iconSizeRight
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_ystd_components_svg_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: iconRight
  })))));
}

/***/ }),

/***/ "./blocks/svg-button/transforms.js":
/*!*****************************************!*\
  !*** ./blocks/svg-button/transforms.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);

const transforms = {
  from: [{
    type: 'block',
    blocks: ['core/button'],
    transform: attributes => {
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('ystdb/svg-button', {
        text: attributes.text,
        borderRadius: attributes.borderRadius,
        align: attributes.align,
        backgroundColor: attributes.backgroundColor,
        customBackgroundColor: attributes.customBackgroundColor,
        textColor: attributes.textColor,
        customTextColor: attributes.customTextColor,
        url: attributes.url,
        linkTarget: attributes.linkTarget,
        rel: attributes.rel,
        fontSize: attributes.fontSize,
        customFontSize: attributes.customFontSize
      });
    }
  }, {
    type: 'block',
    blocks: ['ystdb/ys-btn'],
    transform: attributes => {
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('ystdb/svg-button', {
        text: attributes.text,
        borderRadius: attributes.borderRadius,
        iconSizeLeft: attributes.iconSizeLeft,
        iconSizeRight: attributes.iconSizeRight,
        align: attributes.align,
        backgroundColor: attributes.backgroundColor,
        customBackgroundColor: attributes.customBackgroundColor,
        textColor: attributes.textColor,
        customTextColor: attributes.customTextColor,
        fontSize: attributes.fontSize,
        customFontSize: attributes.customFontSize,
        url: attributes.url,
        linkTarget: attributes.linkTarget,
        rel: attributes.rel,
        paddingType: attributes.paddingType,
        buttonType: attributes.buttonType,
        maxWidth: attributes.maxWidth,
        maxUnit: attributes.maxUnit,
        animationType: attributes.animationType,
        animationInterval: attributes.animationInterval
      });
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/button'],
    transform: attributes => {
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/button', {
        text: attributes.text,
        borderRadius: attributes.borderRadius,
        align: attributes.align,
        backgroundColor: attributes.backgroundColor,
        customBackgroundColor: attributes.customBackgroundColor,
        textColor: attributes.textColor,
        customTextColor: attributes.customTextColor,
        url: attributes.url,
        linkTarget: attributes.linkTarget,
        rel: attributes.rel
      });
    }
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (transforms);

/***/ }),

/***/ "./src/js/components/horizon-buttons/index.js":
/*!****************************************************!*\
  !*** ./src/js/components/horizon-buttons/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const HorizonButtons = _ref => {
  let {
    children
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb__horizon-buttons"
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (HorizonButtons);

/***/ }),

/***/ "./src/js/components/responsive-font-size/functions.js":
/*!*************************************************************!*\
  !*** ./src/js/components/responsive-font-size/functions.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFontResponsiveClass": function() { return /* binding */ getFontResponsiveClass; },
/* harmony export */   "getFontResponsiveStyle": function() { return /* binding */ getFontResponsiveStyle; }
/* harmony export */ });
function getFontResponsiveClass(isResponsive, desktop, tablet, mobile) {
  let addClass = true;

  if (!isResponsive) {
    addClass = false;
  }

  desktop = !desktop ? 0 : desktop;
  tablet = !tablet ? 0 : tablet;
  mobile = !mobile ? 0 : mobile;

  if (0 === desktop && 0 === tablet && 0 === mobile) {
    addClass = false;
  }

  return {
    'ys-is-font-responsive': addClass
  };
}
function getFontResponsiveStyle(props) {
  if (!props.isResponsive) {
    return undefined;
  }

  const desktop = !props.desktop ? 0 : props.desktop;
  const tablet = !props.tablet ? 0 : props.tablet;
  const mobile = !props.mobile ? 0 : props.mobile;

  if (0 === desktop && 0 === tablet && 0 === mobile) {
    return undefined;
  }

  const desktopUnit = !props.desktopUnit ? 'px' : props.desktopUnit;
  const tabletUnit = !props.tabletUnit ? 'px' : props.tabletUnit;
  const mobileUnit = !props.mobileUnit ? 'px' : props.mobileUnit;
  return {
    '--ys-font-desktop': 0 === desktop ? undefined : `${desktop}${desktopUnit}`,
    '--ys-font-tablet': 0 === tablet ? undefined : `${tablet}${tabletUnit}`,
    '--ys-font-mobile': 0 === mobile ? undefined : `${mobile}${mobileUnit}`
  };
}

/***/ }),

/***/ "./src/js/components/responsive-font-size/index.js":
/*!*********************************************************!*\
  !*** ./src/js/components/responsive-font-size/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../svg-icon */ "./src/js/components/svg-icon/index.js");







class ResponsiveFontSizeControl extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      label,
      useResponsive,
      changeResponsiveMode,
      fontSize,
      onChangeFontSizePicker,
      unitOptions,
      desktopValue,
      desktopOnChange,
      desktopUnit,
      desktopUnitOnChange,
      tabletValue,
      tabletOnChange,
      tabletUnit,
      tabletUnitOnChange,
      mobileValue,
      mobileOnChange,
      mobileUnit,
      mobileUnitOnChange
    } = this.props; // 単位によって変えるかもしれない.

    const min = 0;
    const max = 200;
    const step = 1;

    const toggleUseResponsive = () => {
      changeResponsiveMode(!useResponsive);
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-responsive-range"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-responsive-range__title"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "components-base-control__label"
    }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-responsive-range__toggle"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'is-use-responsive': useResponsive
      }),
      onClick: toggleUseResponsive
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_svg_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: 'settings'
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-responsive-range__content"
    }, !useResponsive ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
      label: label,
      value: fontSize.size,
      onChange: font => {
        onChangeFontSizePicker(font);
      }
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-inspector-controls__columns is-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      icon: 'desktop'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
      value: desktopValue,
      onChange: value => {
        desktopOnChange(value);
      },
      min: min,
      max: max,
      step: undefined === step ? 1 : step,
      style: {
        flexGrow: 1
      }
    }), !!unitOptions ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: desktopUnit,
      options: unitOptions,
      onChange: value => {
        desktopUnitOnChange(value);
      }
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, desktopUnit)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-inspector-controls__columns is-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      icon: 'tablet'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
      value: tabletValue,
      onChange: value => {
        tabletOnChange(value);
      },
      min: min,
      max: max,
      step: undefined === step ? 1 : step,
      style: {
        flexGrow: 1
      }
    }), !!unitOptions ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: tabletUnit,
      options: unitOptions,
      onChange: value => {
        tabletUnitOnChange(value);
      }
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, tabletUnit)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-inspector-controls__columns is-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      icon: 'smartphone'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
      value: mobileValue,
      onChange: value => {
        mobileOnChange(value);
      },
      min: min,
      max: max,
      step: undefined === step ? 1 : step,
      style: {
        flexGrow: 1
      }
    }), !!unitOptions ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: mobileUnit,
      options: unitOptions,
      onChange: value => {
        mobileUnitOnChange(value);
      }
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, mobileUnit))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ResponsiveFontSizeControl);

/***/ }),

/***/ "./src/js/components/responsive-number-control/functions.js":
/*!******************************************************************!*\
  !*** ./src/js/components/responsive-number-control/functions.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPaddingResponsiveClass": function() { return /* binding */ getPaddingResponsiveClass; },
/* harmony export */   "getPaddingResponsiveStyle": function() { return /* binding */ getPaddingResponsiveStyle; }
/* harmony export */ });
function getPaddingResponsiveClass(props) {
  const isResponsive = props.isResponsive || false;
  const desktop = props.desktop || 0;
  const tablet = props.tablet || 0;
  const mobile = props.mobile || 0;
  const prefix = props.prefix ? `-${props.prefix}` : '';
  let addClass = true;

  if (!isResponsive) {
    addClass = false;
  }

  if (0 === desktop && 0 === tablet && 0 === mobile) {
    addClass = false;
  }

  return {
    [`is${prefix}-padding-responsive`]: addClass
  };
}
function getPaddingResponsiveStyle(props) {
  const isResponsive = props.isResponsive || false;
  const desktop = props.desktop || 0;
  const desktopUnit = props.desktopUnit || 'px';
  const tablet = props.tablet || 0;
  const tabletUnit = props.tabletUnit || 'px';
  const mobile = props.mobile || 0;
  const mobileUnit = props.mobileUnit || 'px';
  const prefix = props.prefix ? `-${props.prefix}` : '';

  if (!isResponsive) {
    return undefined;
  }

  if (0 === desktop && 0 === tablet && 0 === mobile) {
    return undefined;
  }

  return {
    [`--ys-padding${prefix}-desktop`]: 0 === desktop ? undefined : `${desktop}${desktopUnit}`,
    [`--ys-padding${prefix}-tablet`]: 0 === tablet ? undefined : `${tablet}${tabletUnit}`,
    [`--ys-padding${prefix}-mobile`]: 0 === mobile ? undefined : `${mobile}${mobileUnit}`
  };
}

/***/ }),

/***/ "./src/js/components/responsive-number-control/index.js":
/*!**************************************************************!*\
  !*** ./src/js/components/responsive-number-control/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg-icon */ "./src/js/components/svg-icon/index.js");
/* harmony import */ var _util_getNum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/_getNum */ "./src/js/util/_getNum.js");







class ResponsiveNumberControl extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  getUnit(unit) {
    const DEFAULT_UNIT = 'px';
    return undefined === unit ? DEFAULT_UNIT : unit;
  }

  render() {
    const {
      label,
      useResponsive,
      changeResponsiveMode,
      unitOptions,
      desktopValue,
      desktopOnChange,
      desktopUnit,
      desktopUnitOnChange,
      tabletValue,
      tabletOnChange,
      tabletUnit,
      tabletUnitOnChange,
      mobileValue,
      mobileOnChange,
      mobileUnit,
      mobileUnitOnChange,
      min,
      max,
      step
    } = this.props; // 単位によって変えるかもしれない.

    const controlMin = undefined === min ? 0 : min;
    const controlMax = undefined === max ? 200 : max;
    const controlStep = undefined === step ? 1 : step;

    const toggleUseResponsive = () => {
      changeResponsiveMode(!useResponsive);
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-responsive-range"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-responsive-range__title"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "components-base-control__label"
    }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-responsive-range__toggle"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'is-use-responsive': useResponsive
      }),
      onClick: toggleUseResponsive
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_svg_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: 'settings'
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-responsive-range__content"
    }, !useResponsive ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-inspector-controls__columns is-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
      value: desktopValue,
      onChange: value => {
        const newValue = (0,_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, controlMin, controlMax, null);
        desktopOnChange(newValue);
      },
      min: controlMin,
      max: controlMax,
      step: undefined === controlStep ? 1 : controlStep,
      style: {
        flexGrow: 1
      }
    }), !!unitOptions ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: desktopUnit,
      options: unitOptions,
      onChange: value => {
        desktopUnitOnChange(value);
      }
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, this.getUnit(desktopUnit)))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-inspector-controls__columns is-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      icon: 'desktop'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
      value: desktopValue,
      onChange: value => {
        const newValue = (0,_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, controlMin, controlMax, null);
        desktopOnChange(newValue);
      },
      min: controlMin,
      max: controlMax,
      step: undefined === controlStep ? 1 : controlStep,
      style: {
        flexGrow: 1
      }
    }), !!unitOptions ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: desktopUnit,
      options: unitOptions,
      onChange: value => {
        desktopUnitOnChange(value);
      }
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, this.getUnit(desktopUnit))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-inspector-controls__columns is-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      icon: 'tablet'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
      value: tabletValue,
      onChange: value => {
        const newValue = (0,_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, controlMin, controlMax, null);
        tabletOnChange(newValue);
      },
      min: controlMin,
      max: controlMax,
      step: undefined === controlStep ? 1 : controlStep,
      style: {
        flexGrow: 1
      }
    }), !!unitOptions ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: tabletUnit,
      options: unitOptions,
      onChange: value => {
        tabletUnitOnChange(value);
      }
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, this.getUnit(tabletUnit))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-inspector-controls__columns is-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      icon: 'smartphone'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
      value: mobileValue,
      onChange: value => {
        const newValue = (0,_util_getNum__WEBPACK_IMPORTED_MODULE_4__["default"])(value, controlMin, controlMax, null);
        mobileOnChange(newValue);
      },
      min: controlMin,
      max: controlMax,
      step: undefined === controlStep ? 1 : controlStep,
      style: {
        flexGrow: 1
      }
    }), !!unitOptions ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: mobileUnit,
      options: unitOptions,
      onChange: value => {
        mobileUnitOnChange(value);
      }
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, this.getUnit(mobileUnit)))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ResponsiveNumberControl);

/***/ }),

/***/ "./src/js/components/svg-icon-select/icon-select.js":
/*!**********************************************************!*\
  !*** ./src/js/components/svg-icon-select/icon-select.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ystd_util_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ystd/util/icons */ "./src/js/util/icons.js");
/* harmony import */ var _ystd_components_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ystd/components/svg-icon */ "./src/js/components/svg-icon/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);









class IconSelect extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      selectedIcon,
      onChange,
      isOpen,
      previewIcon,
      setState
    } = this.props;
    const iconList = (0,_ystd_util_icons__WEBPACK_IMPORTED_MODULE_4__.getIcons)();
    const isPreview = false === previewIcon ? previewIcon : true;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'ys-icon-picker'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'ys-icon-picker__selected'
    }, isPreview && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'ys-icon-picker__preview'
    }, !!selectedIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ystd_components_svg_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: selectedIcon
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        'is-open': isOpen
      }),
      isSecondary: true,
      onClick: () => {
        setState({
          isOpen: !isOpen
        });
      },
      style: {
        minWidth: '110px',
        textAlign: 'center',
        justifyContent: 'center'
      }
    }, isOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('閉じる', 'ystandard-blocks')), !isOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('アイコン選択', 'ystandard-blocks'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: 'ys-icon-picker__remove',
      disabled: !selectedIcon,
      isSmall: true,
      isSecondary: true,
      onClick: () => {
        onChange('');
        setState({
          isOpen: false
        });
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('リセット', 'ystandard-blocks'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ys-icon-picker__list', {
        'is-open': isOpen
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ys-icon-picker__list-container"
    }, iconList.map(icon => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: icon.name,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(`ys-icon-picker__icon`, {
          'is-selected': selectedIcon === icon.name
        }),
        onClick: () => {
          if (selectedIcon === icon.name) {
            onChange('');
            setState({
              isOpen: false
            });
          } else {
            onChange(icon.name);
          }
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ystd_components_svg_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: icon.name
      }));
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.compose)([(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.withState)({
  isOpen: false
})])(IconSelect));

/***/ }),

/***/ "./src/js/components/svg-icon-select/index.js":
/*!****************************************************!*\
  !*** ./src/js/components/svg-icon-select/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon-select */ "./src/js/components/svg-icon-select/icon-select.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);







class SVGIconSelect extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      iconControlTitle,
      iconPosition,
      onChangePosition,
      selectedIcon,
      onClickIcon,
      customInfo,
      customInfoStyle,
      previewIcon,
      align,
      isFloat
    } = this.props;
    const iconBaseControlTitle = iconControlTitle === undefined ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('表示アイコン', 'ystandard-blocks') : iconControlTitle;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-icon-select', {
        [`align--${align}`]: align,
        'is-float': isFloat
      })
    }, customInfo && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: customInfoStyle
    }, customInfo), !!onChangePosition && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-inspector-controls__label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('アイコン表示位置', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'ystdb-icon-select__position'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RadioControl, {
      selected: iconPosition,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('左', 'ystandard-blocks'),
        value: 'left'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('右', 'ystandard-blocks'),
        value: 'right'
      }],
      onChange: onChangePosition
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-inspector-controls__label"
    }, iconBaseControlTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'ystdb-icon-select__picker'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icon_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
      selectedIcon: selectedIcon,
      previewIcon: previewIcon,
      onChange: value => {
        onClickIcon(value);
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SVGIconSelect);

/***/ }),

/***/ "./src/js/components/svg-icon/index.js":
/*!*********************************************!*\
  !*** ./src/js/components/svg-icon/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ystd_util_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ystd/util/icons */ "./src/js/util/icons.js");




/**
 * SVGIcon
 */

class SVGIcon extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      name
    } = this.props;

    if (!name) {
      return '';
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ys-icon', {
        'sns-icon': -1 !== name.indexOf('sns-')
      }),
      dangerouslySetInnerHTML: {
        __html: (0,_ystd_util_icons__WEBPACK_IMPORTED_MODULE_2__.getIconSvg)(name)
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SVGIcon);

/***/ }),

/***/ "./src/js/config/config.js":
/*!*********************************!*\
  !*** ./src/js/config/config.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ystdbConfig": function() { return /* reexport safe */ _index__WEBPACK_IMPORTED_MODULE_0__.ystdbConfig; }
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
/* harmony export */   "ystdbConfig": function() { return /* binding */ ystdbConfig; }
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

/***/ "./src/js/util/_getNum.js":
/*!********************************!*\
  !*** ./src/js/util/_getNum.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getNum; }
/* harmony export */ });
/**
 * 数字変換
 *
 * @param {string} value
 * @param {number} min
 * @param {number} max
 * @param {number} defaultValue
 */
function getNum(value) {
  let min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let defaultValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

  if (!isFinite(value) || '' === value || value < min) {
    if (null === defaultValue && ('' === value || undefined === value)) {
      return undefined;
    }

    if (undefined !== defaultValue) {
      value = defaultValue;
    } else {
      value = min;
    }
  }

  value = Number(value);

  if (null !== max && value > max) {
    value = max;
  }

  return value;
}

/***/ }),

/***/ "./src/js/util/_getResponsivPropertye.js":
/*!***********************************************!*\
  !*** ./src/js/util/_getResponsivPropertye.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getDataProperty; }
/* harmony export */ });
function getDataProperty(props) {
  for (const key in props) {
    if (undefined === props[key] || null === props[key]) {
      delete props[key];
    }
  }

  return !Object.keys(props).length ? undefined : {
    'data-ys-responsive-property': `${JSON.stringify(props)}`
  };
}

/***/ }),

/***/ "./src/js/util/icons.js":
/*!******************************!*\
  !*** ./src/js/util/icons.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIconSvg": function() { return /* binding */ getIconSvg; },
/* harmony export */   "getIcons": function() { return /* binding */ getIcons; },
/* harmony export */   "migrateOldSNSIconName": function() { return /* binding */ migrateOldSNSIconName; }
/* harmony export */ });
/**
 * アイコンのリストを取得
 *
 * @return {Array} アイコン一覧.
 */
function getIcons() {
  return window.ystdbIconList;
}
/**
 * アイコンSVG取得
 *
 * @param {string} iconName アイコン名.
 * @return {undefined|string} アイコンSVG.
 */

function getIconSvg(iconName) {
  const name = migrateOldSNSIconName(iconName);
  const targetIcon = getIcons().find(icon => {
    return icon.name === name;
  });

  if (!targetIcon || !targetIcon.hasOwnProperty('icon')) {
    return undefined;
  }

  return targetIcon.icon;
}
/**
 * 旧SNSアイコン名を新SNSアイコン名に変換
 *
 * @param {string} name SNSアイコン名
 * @return {string} アイコン名.
 */

function migrateOldSNSIconName(name) {
  if (!name) {
    return name;
  }

  const snsIcons = [{
    old: 'sns-Twitter',
    new: 'sns-twitter'
  }, {
    old: 'sns-Facebook',
    new: 'sns-facebook'
  }, {
    old: 'sns-Hatena Bookmark',
    new: 'sns-hatenabookmark'
  }, {
    old: 'sns-Pocket',
    new: 'sns-pocket'
  }, {
    old: 'sns-Line',
    new: 'sns-line'
  }, {
    old: 'sns-Feedly',
    new: 'sns-feedly'
  }, {
    old: 'sns-RSS',
    new: 'sns-rss'
  }, {
    old: 'sns-WordPress',
    new: 'sns-wordpress'
  }, {
    old: 'sns-Pinterest',
    new: 'sns-pinterest'
  }, {
    old: 'sns-Instagram',
    new: 'sns-instagram'
  }, {
    old: 'sns-linkedIn',
    new: 'sns-linkedin'
  }, {
    old: 'sns-YouTube',
    new: 'sns-youtube'
  }, {
    old: 'sns-Twitch',
    new: 'sns-twitch'
  }, {
    old: 'sns-Dribbble',
    new: 'sns-dribbble'
  }, {
    old: 'sns-GitHub',
    new: 'sns-github'
  }, {
    old: 'sns-Tumblr',
    new: 'sns-tumblr'
  }, {
    old: 'sns-Amazon',
    new: 'sns-amazon'
  }];
  const migrate = snsIcons.find(icon => {
    return icon.old === name;
  });

  if (!migrate) {
    return name;
  }

  return migrate.new;
}

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
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
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

/***/ "./node_modules/react-feather/dist/icons/link-2.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/link-2.js ***!
  \*********************************************************/
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



var Link2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
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
    d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }));
});
Link2.propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])
};
Link2.displayName = 'Link2';
/* harmony default export */ __webpack_exports__["default"] = (Link2);

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

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
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
/*!************************************!*\
  !*** ./blocks/svg-button/index.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_js_config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/js/config/config */ "./src/js/config/config.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/svg-button/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./blocks/svg-button/save.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/link-2.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transforms */ "./blocks/svg-button/transforms.js");
/* harmony import */ var _deprecated_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deprecated/index */ "./blocks/svg-button/deprecated/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ "./blocks/svg-button/config.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);










(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__.registerBlockType)('ystdb/svg-button', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('カスタムボタン', 'ystandard-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('yStandard Blocks カスタムボタン', 'ystandard-blocks'),
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_feather__WEBPACK_IMPORTED_MODULE_9__["default"], {
    stroke: _src_js_config_config__WEBPACK_IMPORTED_MODULE_1__.ystdbConfig.color.iconForeground,
    style: {
      fill: 'none'
    }
  }),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('button'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('ボタン'), 'btn', 'button'],
  category: _src_js_config_config__WEBPACK_IMPORTED_MODULE_1__.ystdbConfig.category.common,
  attributes: _config__WEBPACK_IMPORTED_MODULE_6__.attributes,
  supports: _config__WEBPACK_IMPORTED_MODULE_6__.supports,
  styles: [{
    name: 'fill',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('塗りつぶし'),
    isDefault: true
  }, {
    name: 'outline',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('アウトライン')
  }],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_4__["default"],
  deprecated: _deprecated_index__WEBPACK_IMPORTED_MODULE_5__.deprecated,
  example: {}
});
}();
/******/ })()
;
//# sourceMappingURL=svg-button.js.map