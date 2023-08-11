/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/heading/config.js":
/*!**********************************!*\
  !*** ./blocks/heading/config.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attributes: () => (/* binding */ attributes),
/* harmony export */   cssUnit: () => (/* binding */ cssUnit),
/* harmony export */   fontWeightList: () => (/* binding */ fontWeightList),
/* harmony export */   paths: () => (/* binding */ paths),
/* harmony export */   positions: () => (/* binding */ positions),
/* harmony export */   supports: () => (/* binding */ supports)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);


/**
 * attributes
 */
const attributes = {
  content: {
    type: 'string',
    source: 'html',
    selector: '.ystdb-heading__text',
    default: ''
  },
  level: {
    type: 'number',
    default: 2
  },
  align: {
    type: 'string',
    default: 'left'
  },
  subText: {
    type: 'string',
    default: ''
  },
  subTextPosition: {
    type: 'string',
    default: 'bottom'
  },
  subTextSize: {
    type: 'string'
  },
  customSubTextSize: {
    type: 'string'
  },
  useSubTextSizeResponsive: {
    type: 'bool',
    default: false
  },
  subTextSizeMobile: {
    type: 'number'
  },
  subTextSizeTablet: {
    type: 'number'
  },
  subTextSizeDesktop: {
    type: 'number'
  },
  subTextFontWeight: {
    type: 'string',
    default: ''
  },
  subTextLetterSpacing: {
    type: 'number'
  },
  subTextColor: {
    type: 'string'
  },
  customSubTextColor: {
    type: 'string'
  },
  subTextBorderWidth: {
    type: 'number',
    default: 50
  },
  subTextBorderHeight: {
    type: 'number',
    default: 0
  },
  dividerColor: {
    type: 'string'
  },
  customDividerColor: {
    type: 'string'
  },
  dividerMarginTop: {
    type: 'number',
    default: 4
  },
  dividerMarginBottom: {
    type: 'number',
    default: 4
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
  useFontSizeResponsive: {
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
  fontWeight: {
    type: 'string',
    default: ''
  },
  letterSpacing: {
    type: 'number'
  },
  clearStyle: {
    type: 'bool',
    default: true
  },
  dividerImageURL: {
    type: 'string'
  },
  dividerImageAlt: {
    type: 'string'
  },
  dividerImageID: {
    type: 'integer',
    default: 0
  },
  marginTop: {
    type: 'string',
    default: ''
  },
  marginTopUnit: {
    type: 'string',
    default: 'px'
  },
  marginRight: {
    type: 'string',
    default: ''
  },
  marginRightUnit: {
    type: 'string',
    default: 'px'
  },
  marginBottom: {
    type: 'string',
    default: ''
  },
  marginBottomUnit: {
    type: 'string',
    default: 'px'
  },
  marginLeft: {
    type: 'string',
    default: ''
  },
  marginLeftUnit: {
    type: 'string',
    default: 'px'
  }
};
const supports = {
  className: false,
  anchor: true,
  __unstablePasteTextInline: true
};
const positions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('下', 'ystandard-blocks'),
  value: 'bottom'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('上', 'ystandard-blocks'),
  value: 'top'
}];
const fontWeightList = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('指定なし', 'ystandard-blocks'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('bold', 'ystandard-blocks'),
  value: '700'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('normal', 'ystandard-blocks'),
  value: '400'
}];
const cssUnit = [{
  value: 'px',
  label: 'px'
}, {
  value: 'em',
  label: 'em'
}, {
  value: 'rem',
  label: 'rem'
}, {
  value: 'vw',
  label: 'vw'
}, {
  value: 'vh',
  label: 'vh'
}];
const paths = {
  1: 'M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z',
  2: 'M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z',
  3: 'M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z',
  4: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z',
  5: 'M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z',
  6: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z'
};

/***/ }),

/***/ "./blocks/heading/deprecated/2-10-1.js":
/*!*********************************************!*\
  !*** ./blocks/heading/deprecated/2-10-1.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deprecated2101: () => (/* binding */ deprecated2101)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aktk_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aktk/components/responsive-font-size/functions */ "./src/js/components/responsive-font-size/functions.js");
/* harmony import */ var _aktk_util_getResponsivPropertye__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aktk/util/_getResponsivPropertye */ "./src/js/util/_getResponsivPropertye.js");






const blockAttributes = {
  content: {
    type: 'string',
    source: 'html',
    selector: '.ystdb-heading__text',
    default: ''
  },
  level: {
    type: 'number',
    default: 2
  },
  align: {
    type: 'string',
    default: 'left'
  },
  subText: {
    type: 'string',
    default: ''
  },
  subTextPosition: {
    type: 'string',
    default: 'bottom'
  },
  subTextSize: {
    type: 'string'
  },
  customSubTextSize: {
    type: 'number'
  },
  useSubTextSizeResponsive: {
    type: 'bool',
    default: false
  },
  subTextSizeMobile: {
    type: 'number'
  },
  subTextSizeTablet: {
    type: 'number'
  },
  subTextSizeDesktop: {
    type: 'number'
  },
  subTextFontWeight: {
    type: 'string',
    default: ''
  },
  subTextLetterSpacing: {
    type: 'number'
  },
  subTextColor: {
    type: 'string'
  },
  customSubTextColor: {
    type: 'string'
  },
  subTextBorderWidth: {
    type: 'number',
    default: 50
  },
  subTextBorderHeight: {
    type: 'number',
    default: 0
  },
  dividerColor: {
    type: 'string'
  },
  customDividerColor: {
    type: 'string'
  },
  dividerMarginTop: {
    type: 'number',
    default: 4
  },
  dividerMarginBottom: {
    type: 'number',
    default: 4
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
  useFontSizeResponsive: {
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
  fontWeight: {
    type: 'string',
    default: ''
  },
  letterSpacing: {
    type: 'number'
  },
  clearStyle: {
    type: 'bool',
    default: true
  },
  dividerImageURL: {
    type: 'string'
  },
  dividerImageAlt: {
    type: 'string'
  },
  dividerImageID: {
    type: 'integer',
    default: 0
  },
  marginTop: {
    type: 'string',
    default: ''
  },
  marginTopUnit: {
    type: 'string',
    default: 'px'
  },
  marginRight: {
    type: 'string',
    default: ''
  },
  marginRightUnit: {
    type: 'string',
    default: 'px'
  },
  marginBottom: {
    type: 'string',
    default: ''
  },
  marginBottomUnit: {
    type: 'string',
    default: 'px'
  },
  marginLeft: {
    type: 'string',
    default: ''
  },
  marginLeftUnit: {
    type: 'string',
    default: 'px'
  }
};
const blockSupports = {
  className: false,
  anchor: true,
  __unstablePasteTextInline: true
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
    let newSubFontSize = attributes.customSubTextSize;
    if ('number' === typeof newFontSize) {
      newFontSize = newFontSize.toString().replace('px', '') + 'px';
    }
    if ('number' === typeof newSubFontSize) {
      newSubFontSize = newSubFontSize.toString().replace('px', '') + 'px';
    }
    return {
      ...attributes,
      customFontSize: newFontSize,
      customSubTextSize: newSubFontSize
    };
  },
  save({
    attributes
  }) {
    const {
      align,
      content,
      level,
      textColor,
      customTextColor,
      fontSize,
      customFontSize,
      useFontSizeResponsive,
      fontSizeDesktop,
      fontSizeTablet,
      fontSizeMobile,
      fontWeight,
      letterSpacing,
      subText,
      subTextSize,
      customSubTextSize,
      useSubTextSizeResponsive,
      subTextSizeMobile,
      subTextSizeTablet,
      subTextSizeDesktop,
      subTextFontWeight,
      subTextLetterSpacing,
      subTextColor,
      customSubTextColor,
      subTextBorderHeight,
      subTextBorderWidth,
      dividerColor,
      customDividerColor,
      dividerMarginTop,
      dividerMarginBottom,
      clearStyle,
      subTextPosition,
      dividerImageURL,
      dividerImageAlt,
      marginTop,
      marginTopUnit,
      marginRight,
      marginRightUnit,
      marginBottom,
      marginBottomUnit,
      marginLeft,
      marginLeftUnit
    } = attributes;
    const TagName = 'h' + level;
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', textColor);
    const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass)(fontSize);
    const subTextSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass)(subTextSize);
    const subTextColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', subTextColor);
    const dividerColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('fill', dividerColor);
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading', {
      [`has-text-align-${align}`]: align,
      'has-divider': subTextBorderHeight && subTextBorderWidth,
      'has-sub-text': subText,
      [`has-subtext--${subTextPosition}`]: subText || subTextBorderHeight && subTextBorderWidth,
      ...(0,_aktk_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_4__.getFontResponsiveClass)(useFontSizeResponsive, fontSizeDesktop, fontSizeTablet, fontSizeMobile)
    });
    const headingStyles = {
      marginTop: '' !== marginTop ? marginTop + marginTopUnit : undefined,
      marginRight: '' !== marginRight ? marginRight + marginRightUnit : undefined,
      marginBottom: '' !== marginBottom ? marginBottom + marginBottomUnit : undefined,
      marginLeft: '' !== marginLeft ? marginLeft + marginLeftUnit : undefined,
      ...(0,_aktk_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_4__.getFontResponsiveStyle)({
        isResponsive: useFontSizeResponsive,
        desktop: fontSizeDesktop,
        tablet: fontSizeTablet,
        mobile: fontSizeMobile
      })
    };
    const textClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__text', {
      'is-clear-style': clearStyle,
      [textClass]: textClass,
      'has-text-color': textColor || customTextColor,
      [fontSizeClass]: fontSizeClass && !useFontSizeResponsive
    });
    const textStyles = {
      color: textClass ? undefined : customTextColor,
      fontSize: !fontSizeClass && customFontSize && !useFontSizeResponsive ? customFontSize + 'px' : undefined,
      fontWeight: !!fontWeight ? fontWeight : undefined,
      letterSpacing: !!letterSpacing && 0 < letterSpacing ? `${letterSpacing}em` : undefined
    };

    /**
     * 線
     */
    const divider = () => {
      if (0 === subTextBorderHeight || 0 === subTextBorderWidth) {
        return null;
      }
      const lineClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__line', {
        [dividerColorClass]: dividerColorClass
      });
      const svg = () => {
        const borderColor = customDividerColor ? customDividerColor : '#222';
        const lineStyle = {
          fill: dividerColorClass ? undefined : borderColor,
          marginTop: 0 !== dividerMarginTop ? dividerMarginTop : undefined,
          marginBottom: 0 !== dividerMarginBottom ? dividerMarginBottom : undefined
        };
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SVG, {
          className: lineClass,
          width: subTextBorderWidth,
          height: subTextBorderHeight,
          viewBox: `0 0 ${subTextBorderWidth} ${subTextBorderHeight}`,
          xmlns: "http://www.w3.org/2000/svg",
          style: lineStyle
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Path, {
          d: `m0 0 h ${subTextBorderWidth} v ${subTextBorderHeight} h -${subTextBorderWidth} z`
        }));
      };
      const image = () => {
        const lineStyle = {
          display: 'block',
          width: subTextBorderWidth,
          height: subTextBorderHeight,
          marginTop: 0 !== dividerMarginTop ? dividerMarginTop : undefined,
          marginBottom: 0 !== dividerMarginBottom ? dividerMarginBottom : undefined,
          marginRight: 'left' === align || 'center' === align ? 'auto' : undefined,
          marginLeft: 'right' === align || 'center' === align ? 'auto' : undefined
        };
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          className: lineClass,
          src: dividerImageURL,
          width: subTextBorderWidth,
          height: subTextBorderHeight,
          alt: dividerImageAlt,
          style: lineStyle
        });
      };
      return !!dividerImageURL ? image() : svg();
    };
    /**
     * サブテキスト
     *
     * @return {null|*} サブテキスト.
     */
    const showSubText = () => {
      if (!subText) {
        return null;
      }
      const subTextClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__subtext', {
        'has-font-size': subTextSizeClass || customSubTextSize || useSubTextSizeResponsive,
        'has-color': subTextColorClass || customSubTextColor,
        [subTextColorClass]: subTextColorClass,
        [subTextSizeClass]: subTextSizeClass && !useSubTextSizeResponsive,
        ...(0,_aktk_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_4__.getFontResponsiveClass)(useSubTextSizeResponsive, subTextSizeDesktop, subTextSizeTablet, subTextSizeMobile)
      });
      let subTextStyle = {
        color: subTextColorClass ? undefined : customSubTextColor,
        fontWeight: !!subTextFontWeight ? subTextFontWeight : undefined,
        letterSpacing: !!subTextLetterSpacing && 0 < subTextLetterSpacing ? `${subTextLetterSpacing}em` : undefined
      };
      if (useSubTextSizeResponsive) {
        subTextStyle = {
          ...subTextStyle,
          ...(0,_aktk_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_4__.getFontResponsiveStyle)({
            isResponsive: useSubTextSizeResponsive,
            desktop: subTextSizeDesktop,
            tablet: subTextSizeTablet,
            mobile: subTextSizeMobile
          })
        };
      } else {
        subTextStyle = {
          ...subTextStyle,
          fontSize: customSubTextSize ? customSubTextSize + 'px' : undefined
        };
      }
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: subTextClasses,
        "aria-hidden": 'true',
        style: subTextStyle,
        "data-text": subText,
        ...(0,_aktk_util_getResponsivPropertye__WEBPACK_IMPORTED_MODULE_5__["default"])({
          'font-size': useSubTextSizeResponsive ? `${subTextSizeDesktop}px` : undefined
        })
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classes,
      style: headingStyles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `ystdb-heading__container`
    }, 'top' === subTextPosition && showSubText(), 'top' === subTextPosition && divider(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: TagName,
      className: textClasses,
      style: textStyles,
      value: content,
      ...(0,_aktk_util_getResponsivPropertye__WEBPACK_IMPORTED_MODULE_5__["default"])({
        'font-size': useFontSizeResponsive ? `${fontSizeDesktop}px` : undefined
      })
    }), 'bottom' === subTextPosition && divider(), 'bottom' === subTextPosition && showSubText()));
  }
}];

/***/ }),

/***/ "./blocks/heading/deprecated/__deprecated.js":
/*!***************************************************!*\
  !*** ./blocks/heading/deprecated/__deprecated.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __deprecated: () => (/* binding */ __deprecated),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




const defaultAttributes = {
  content: {
    type: 'string',
    source: 'html',
    selector: '.ystdb-heading__text',
    default: ''
  },
  level: {
    type: 'number',
    default: 2
  },
  align: {
    type: 'string',
    default: 'left'
  },
  subText: {
    type: 'string',
    default: ''
  },
  subTextPosition: {
    type: 'string',
    default: 'bottom'
  },
  subTextSize: {
    type: 'string'
  },
  customSubTextSize: {
    type: 'number'
  },
  subTextColor: {
    type: 'string'
  },
  customSubTextColor: {
    type: 'string'
  },
  subTextBorderWidth: {
    type: 'number',
    default: 50
  },
  subTextBorderHeight: {
    type: 'number',
    default: 0
  },
  dividerColor: {
    type: 'string'
  },
  customDividerColor: {
    type: 'string'
  },
  dividerMarginTop: {
    type: 'number',
    default: 0
  },
  dividerMarginBottom: {
    type: 'number',
    default: 0
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
  clearStyle: {
    type: 'bool',
    default: true
  }
};
const attributes25 = {
  dividerImageURL: {
    type: 'string'
  },
  dividerImageAlt: {
    type: 'string'
  },
  dividerImageID: {
    type: 'integer',
    default: 0
  }
};
const attributes26 = {
  marginTop: {
    type: 'string',
    default: ''
  },
  marginTopUnit: {
    type: 'string',
    default: 'px'
  },
  marginRight: {
    type: 'string',
    default: ''
  },
  marginRightUnit: {
    type: 'string',
    default: 'px'
  },
  marginBottom: {
    type: 'string',
    default: ''
  },
  marginBottomUnit: {
    type: 'string',
    default: 'px'
  },
  marginLeft: {
    type: 'string',
    default: ''
  },
  marginLeftUnit: {
    type: 'string',
    default: 'px'
  }
};
const __deprecated = [{
  attributes: {
    ...defaultAttributes,
    ...attributes25,
    ...attributes26
  },
  supports: {
    className: false,
    anchor: true,
    __unstablePasteTextInline: true
  },
  save({
    attributes
  }) {
    const {
      align,
      content,
      level,
      textColor,
      customTextColor,
      fontSize,
      customFontSize,
      subText,
      subTextSize,
      customSubTextSize,
      subTextColor,
      customSubTextColor,
      subTextBorderHeight,
      subTextBorderWidth,
      dividerColor,
      customDividerColor,
      dividerMarginTop,
      dividerMarginBottom,
      clearStyle,
      subTextPosition,
      dividerImageURL,
      dividerImageAlt,
      marginTop,
      marginTopUnit,
      marginRight,
      marginRightUnit,
      marginBottom,
      marginBottomUnit,
      marginLeft,
      marginLeftUnit
    } = attributes;
    const TagName = 'h' + level;
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', textColor);
    const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass)(fontSize);
    const subTextSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass)(subTextSize);
    const subTextColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', subTextColor);
    const dividerColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('fill', dividerColor);
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading', {
      [`has-text-align-${align}`]: align,
      'has-divider': subTextBorderHeight && subTextBorderWidth,
      'has-sub-text': subText,
      [`has-subtext--${subTextPosition}`]: subText || subTextBorderHeight && subTextBorderWidth
    });
    const headingStyles = {
      marginTop: '' !== marginTop ? marginTop + marginTopUnit : undefined,
      marginRight: '' !== marginRight ? marginRight + marginRightUnit : undefined,
      marginBottom: '' !== marginBottom ? marginBottom + marginBottomUnit : undefined,
      marginLeft: '' !== marginLeft ? marginLeft + marginLeftUnit : undefined
    };
    const textClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__text', {
      'is-clear-style': clearStyle,
      [textClass]: textClass,
      'has-text-color': textColor || customTextColor,
      [fontSizeClass]: fontSizeClass
    });
    const textStyles = {
      color: textClass ? undefined : customTextColor,
      fontSize: !fontSizeClass && customFontSize ? customFontSize + 'px' : undefined
    };

    /**
     * 線
     */
    const divider = () => {
      if (0 === subTextBorderHeight || 0 === subTextBorderWidth) {
        return null;
      }
      const lineClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__line', {
        [dividerColorClass]: dividerColorClass
      });
      const svg = () => {
        const borderColor = customDividerColor ? customDividerColor : '#222';
        const lineStyle = {
          fill: dividerColorClass ? undefined : borderColor,
          marginTop: 0 !== dividerMarginTop ? dividerMarginTop : undefined,
          marginBottom: 0 !== dividerMarginBottom ? dividerMarginBottom : undefined
        };
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SVG, {
          className: lineClass,
          width: subTextBorderWidth,
          height: subTextBorderHeight,
          viewBox: `0 0 ${subTextBorderWidth} ${subTextBorderHeight}`,
          xmlns: "http://www.w3.org/2000/svg",
          style: lineStyle
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Path, {
          d: `m0 0 h ${subTextBorderWidth} v ${subTextBorderHeight} h -${subTextBorderWidth} z`
        }));
      };
      const image = () => {
        const lineStyle = {
          display: 'block',
          width: subTextBorderWidth,
          height: subTextBorderHeight,
          marginTop: 0 !== dividerMarginTop ? dividerMarginTop : undefined,
          marginBottom: 0 !== dividerMarginBottom ? dividerMarginBottom : undefined,
          marginRight: 'left' === align || 'center' === align ? 'auto' : undefined,
          marginLeft: 'right' === align || 'center' === align ? 'auto' : undefined
        };
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          className: lineClass,
          src: dividerImageURL,
          width: subTextBorderWidth,
          height: subTextBorderHeight,
          alt: dividerImageAlt,
          style: lineStyle
        });
      };
      return !!dividerImageURL ? image() : svg();
    };
    /**
     * サブテキスト
     *
     * @return {null|*} サブテキスト.
     */
    const showSubText = () => {
      if (!subText) {
        return null;
      }
      const subTextClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__subtext', {
        'has-font-size': subTextSizeClass || customSubTextSize,
        'has-color': subTextColorClass || customSubTextColor,
        [subTextColorClass]: subTextColorClass,
        [subTextSizeClass]: subTextSizeClass
      });
      const styles = {
        color: subTextColorClass ? undefined : customSubTextColor,
        fontSize: customSubTextSize ? customSubTextSize + 'px' : undefined
      };
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: subTextClasses,
        "aria-hidden": 'true',
        style: styles,
        "data-text": subText
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classes,
      style: headingStyles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `ystdb-heading__container`
    }, 'top' === subTextPosition && showSubText(), 'top' === subTextPosition && divider(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: TagName,
      className: textClasses,
      style: textStyles,
      value: content
    }), 'bottom' === subTextPosition && divider(), 'bottom' === subTextPosition && showSubText()));
  }
}, {
  attributes: {
    ...defaultAttributes,
    ...attributes25
  },
  supports: {
    className: false,
    anchor: true,
    __unstablePasteTextInline: true
  },
  save({
    attributes
  }) {
    const {
      align,
      content,
      level,
      textColor,
      customTextColor,
      fontSize,
      customFontSize,
      subText,
      subTextSize,
      customSubTextSize,
      subTextColor,
      customSubTextColor,
      subTextBorderHeight,
      subTextBorderWidth,
      dividerColor,
      customDividerColor,
      dividerMarginTop,
      dividerMarginBottom,
      clearStyle,
      subTextPosition,
      dividerImageURL,
      dividerImageAlt
    } = attributes;
    const TagName = 'h' + level;
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', textColor);
    const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass)(fontSize);
    const subTextSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass)(subTextSize);
    const subTextColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', subTextColor);
    const dividerColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('fill', dividerColor);
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading', {
      [`has-text-align-${align}`]: align,
      'has-divider': subTextBorderHeight && subTextBorderWidth,
      'has-sub-text': subText,
      [`has-subtext--${subTextPosition}`]: subText || subTextBorderHeight && subTextBorderWidth
    });
    const textClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__text', {
      'is-clear-style': clearStyle,
      [textClass]: textClass,
      'has-text-color': textColor || customTextColor,
      [fontSizeClass]: fontSizeClass
    });
    const textStyles = {
      color: textClass ? undefined : customTextColor,
      fontSize: !fontSizeClass && customFontSize ? customFontSize + 'px' : undefined
    };

    /**
     * 線
     */
    const divider = () => {
      if (0 === subTextBorderHeight || 0 === subTextBorderWidth) {
        return null;
      }
      const lineClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__line', {
        [dividerColorClass]: dividerColorClass
      });
      const svg = () => {
        const borderColor = customDividerColor ? customDividerColor : '#222';
        const lineStyle = {
          fill: dividerColorClass ? undefined : borderColor,
          marginTop: 0 !== dividerMarginTop ? dividerMarginTop : undefined,
          marginBottom: 0 !== dividerMarginBottom ? dividerMarginBottom : undefined
        };
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SVG, {
          className: lineClass,
          width: subTextBorderWidth,
          height: subTextBorderHeight,
          viewBox: `0 0 ${subTextBorderWidth} ${subTextBorderHeight}`,
          xmlns: "http://www.w3.org/2000/svg",
          style: lineStyle
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Path, {
          d: `m0 0 h ${subTextBorderWidth} v ${subTextBorderHeight} h -${subTextBorderWidth} z`
        }));
      };
      const image = () => {
        const lineStyle = {
          display: 'block',
          width: subTextBorderWidth,
          height: subTextBorderHeight,
          marginTop: 0 !== dividerMarginTop ? dividerMarginTop : undefined,
          marginBottom: 0 !== dividerMarginBottom ? dividerMarginBottom : undefined,
          marginRight: 'left' === align || 'center' === align ? 'auto' : undefined,
          marginLeft: 'right' === align || 'center' === align ? 'auto' : undefined
        };
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          className: lineClass,
          src: dividerImageURL,
          width: subTextBorderWidth,
          height: subTextBorderHeight,
          alt: dividerImageAlt,
          style: lineStyle
        });
      };
      return !!dividerImageURL ? image() : svg();
    };
    /**
     * サブテキスト
     *
     * @return {null|*} サブテキスト.
     */
    const showSubText = () => {
      if (!subText) {
        return null;
      }
      const subTextClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__subtext', {
        'has-font-size': subTextSizeClass || customSubTextSize,
        'has-color': subTextColorClass || customSubTextColor,
        [subTextColorClass]: subTextColorClass,
        [subTextSizeClass]: subTextSizeClass
      });
      const styles = {
        color: subTextColorClass ? undefined : customSubTextColor,
        fontSize: customSubTextSize ? customSubTextSize + 'px' : undefined
      };
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: subTextClasses,
        "aria-hidden": 'true',
        style: styles,
        "data-text": subText
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classes
    }, 'top' === subTextPosition && showSubText(), 'top' === subTextPosition && divider(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: TagName,
      className: textClasses,
      style: textStyles,
      value: content
    }), 'bottom' === subTextPosition && divider(), 'bottom' === subTextPosition && showSubText());
  }
}, {
  attributes: {
    ...defaultAttributes
  },
  supports: {
    className: false,
    anchor: true,
    __unstablePasteTextInline: true
  },
  save({
    attributes
  }) {
    const {
      align,
      content,
      level,
      textColor,
      customTextColor,
      fontSize,
      customFontSize,
      subText,
      subTextSize,
      customSubTextSize,
      subTextColor,
      customSubTextColor,
      subTextBorderHeight,
      subTextBorderWidth,
      dividerColor,
      customDividerColor,
      dividerMarginTop,
      dividerMarginBottom,
      clearStyle,
      subTextPosition
    } = attributes;
    const TagName = 'h' + level;
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', textColor);
    const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass)(fontSize);
    const subTextSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass)(subTextSize);
    const subTextColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', subTextColor);
    const dividerColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('fill', dividerColor);
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading', {
      'is-clear-style': clearStyle,
      [`has-text-align-${align}`]: align,
      'has-divider': subTextBorderHeight && subTextBorderWidth,
      'has-sub-text': subText,
      [`has-subtext--${subTextPosition}`]: subText || subTextBorderHeight && subTextBorderWidth
    });
    const textClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__text', {
      [textClass]: textClass,
      'has-text-color': textColor || customTextColor,
      [fontSizeClass]: fontSizeClass
    });
    const textStyles = {
      color: textClass ? undefined : customTextColor,
      fontSize: !fontSizeClass && customFontSize ? customFontSize + 'px' : undefined
    };

    /**
     * 線
     */
    const divider = () => {
      if (0 === subTextBorderHeight || 0 === subTextBorderWidth) {
        return null;
      }
      const borderColor = customDividerColor ? customDividerColor : '#222';
      const lineStyle = {
        fill: dividerColorClass ? undefined : borderColor,
        marginTop: 0 !== dividerMarginTop ? dividerMarginTop : undefined,
        marginBottom: 0 !== dividerMarginBottom ? dividerMarginBottom : undefined
      };
      const lineClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__line', {
        [dividerColorClass]: dividerColorClass
      });
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SVG, {
        className: lineClass,
        width: subTextBorderWidth,
        height: subTextBorderHeight,
        viewBox: `0 0 ${subTextBorderWidth} ${subTextBorderHeight}`,
        xmlns: "http://www.w3.org/2000/svg",
        style: lineStyle
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Path, {
        d: `m0 0 h ${subTextBorderWidth} v ${subTextBorderHeight} h -${subTextBorderWidth} z`
      }));
    };
    /**
     * サブテキスト
     *
     * @return {null|*} サブテキスト.
     */
    const showSubText = () => {
      if (!subText) {
        return null;
      }
      const subTextClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__subtext', {
        'has-font-size': subTextSizeClass || customSubTextSize,
        'has-color': subTextColorClass || customSubTextColor,
        [subTextColorClass]: subTextColorClass,
        [subTextSizeClass]: subTextSizeClass
      });
      const styles = {
        color: subTextColorClass ? undefined : customSubTextColor,
        fontSize: customSubTextSize ? customSubTextSize + 'px' : undefined
      };
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: subTextClasses,
        style: styles
      }, subText);
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, {
      className: classes
    }, 'top' === subTextPosition && showSubText(), 'top' === subTextPosition && divider(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: 'span',
      className: textClasses,
      style: textStyles,
      value: content
    }), 'bottom' === subTextPosition && divider(), 'bottom' === subTextPosition && showSubText());
  }
}, {
  attributes: {
    ...defaultAttributes
  },
  supports: {
    className: false,
    anchor: true,
    __unstablePasteTextInline: true
  },
  save({
    attributes
  }) {
    const {
      align,
      content,
      level,
      textColor,
      customTextColor,
      fontSize,
      customFontSize,
      subText,
      subTextSize,
      customSubTextSize,
      subTextColor,
      customSubTextColor,
      subTextBorderHeight,
      subTextBorderWidth,
      dividerColor,
      customDividerColor,
      dividerMarginTop,
      dividerMarginBottom,
      clearStyle,
      subTextPosition
    } = attributes;
    const TagName = 'h' + level;
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', textColor);
    const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass)(fontSize);
    const subTextSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass)(subTextSize);
    const subTextColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', subTextColor);
    const dividerColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('fill', dividerColor);
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading', {
      'is-clear-style': clearStyle,
      [`has-text-align-${align}`]: align,
      'has-divider': subTextBorderHeight && subTextBorderWidth,
      'has-sub-text': subText,
      [`has-subtext--${subTextPosition}`]: subText || subTextBorderHeight && subTextBorderWidth
    });
    const textClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__text', {
      [textClass]: textClass,
      'has-text-color': textColor || customTextColor,
      [fontSizeClass]: fontSizeClass
    });
    const textStyles = {
      color: textClass ? undefined : customTextColor,
      fontSize: !fontSizeClass && customFontSize ? customFontSize + 'px' : undefined
    };

    /**
     * 線
     */
    const divider = () => {
      if (0 === subTextBorderHeight || 0 === subTextBorderWidth) {
        return null;
      }
      const borderColor = customDividerColor ? customDividerColor : '#222';
      const lineStyle = {
        fill: dividerColorClass ? undefined : borderColor,
        marginTop: 0 !== dividerMarginTop ? dividerMarginTop : undefined,
        marginBottom: 0 !== dividerMarginBottom ? dividerMarginBottom : undefined
      };
      const lineClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__line', {
        [dividerColorClass]: dividerColorClass
      });
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: lineClass,
        width: subTextBorderWidth,
        height: subTextBorderHeight,
        viewbox: `0 0 ${subTextBorderWidth} ${subTextBorderHeight}`,
        xmlns: "http://www.w3.org/2000/svg",
        style: lineStyle
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: `m0 0 h ${subTextBorderWidth} v ${subTextBorderHeight} h -${subTextBorderWidth} z`
      }));
    };
    /**
     * サブテキスト
     *
     * @return {null|*} サブテキスト.
     */
    const showSubText = () => {
      if (!subText) {
        return null;
      }
      const subTextClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__subtext', {
        'has-font-size': subTextSizeClass || customSubTextSize,
        'has-color': subTextColorClass || customSubTextColor,
        [subTextColorClass]: subTextColorClass,
        [subTextSizeClass]: subTextSizeClass
      });
      const styles = {
        color: subTextColorClass ? undefined : customSubTextColor,
        fontSize: customSubTextSize ? customSubTextSize + 'px' : undefined
      };
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: subTextClasses,
        style: styles
      }, subText);
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, {
      className: classes
    }, 'top' === subTextPosition && showSubText(), 'top' === subTextPosition && divider(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: 'span',
      className: textClasses,
      style: textStyles,
      value: content
    }), 'bottom' === subTextPosition && divider(), 'bottom' === subTextPosition && showSubText());
  }
}, {
  attributes: {
    ...defaultAttributes
  },
  save({
    attributes
  }) {
    const {
      align,
      content,
      level,
      textColor,
      customTextColor,
      fontSize,
      customFontSize,
      subText,
      subTextSize,
      customSubTextSize,
      subTextColor,
      customSubTextColor,
      subTextBorderHeight,
      subTextBorderWidth,
      dividerColor,
      customDividerColor,
      dividerMarginTop,
      dividerMarginBottom,
      clearStyle,
      subTextPosition
    } = attributes;
    const TagName = 'h' + level;
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', textColor);
    const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass)(fontSize);
    const subTextSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass)(subTextSize);
    const subTextColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', subTextColor);
    const dividerColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('fill', dividerColor);
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading', {
      'is-clear-style': clearStyle,
      [`has-text-align-${align}`]: align,
      'has-divider': subTextBorderHeight && subTextBorderWidth,
      'has-sub-text': subText,
      [`has-subtext--${subTextPosition}`]: subText || subTextBorderHeight && subTextBorderWidth
    });
    const textClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__text', {
      [textClass]: textClass,
      'has-text-color': textColor || customTextColor,
      [fontSizeClass]: fontSizeClass
    });
    const textStyles = {
      color: textClass ? undefined : customTextColor,
      fontSize: !fontSizeClass && customFontSize ? customFontSize + 'px' : undefined
    };

    /**
     * 線
     */
    const divider = () => {
      if (0 === subTextBorderHeight || 0 === subTextBorderWidth) {
        return null;
      }
      const borderColor = customDividerColor ? customDividerColor : '#222';
      const lineStyle = {
        fill: dividerColorClass ? undefined : borderColor,
        marginTop: 0 !== dividerMarginTop ? dividerMarginTop : undefined,
        marginBottom: 0 !== dividerMarginBottom ? dividerMarginBottom : undefined
      };
      const lineClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__line', {
        [dividerColorClass]: dividerColorClass
      });
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SVG, {
        className: lineClass,
        width: subTextBorderWidth,
        height: subTextBorderHeight,
        viewBox: `0 0 ${subTextBorderWidth} ${subTextBorderHeight}`,
        xmlns: "http://www.w3.org/2000/svg",
        style: lineStyle
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Path, {
        d: `m0 0 h ${subTextBorderWidth} v ${subTextBorderHeight} h -${subTextBorderWidth} z`
      }));
    };
    /**
     * サブテキスト
     *
     * @return {null|*} サブテキスト.
     */
    const showSubText = () => {
      if (!subText) {
        return null;
      }
      const subTextClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__subtext', {
        'has-font-size': subTextSizeClass || customSubTextSize,
        'has-color': subTextColorClass || customSubTextColor,
        [subTextColorClass]: subTextColorClass,
        [subTextSizeClass]: subTextSizeClass
      });
      const styles = {
        color: subTextColorClass ? undefined : customSubTextColor,
        fontSize: customSubTextSize ? customSubTextSize + 'px' : undefined
      };
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: subTextClasses,
        style: styles
      }, subText);
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, {
      className: classes
    }, 'top' === subTextPosition && showSubText(), 'top' === subTextPosition && divider(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: 'span',
      className: textClasses,
      style: textStyles,
      value: content
    }), 'bottom' === subTextPosition && divider(), 'bottom' === subTextPosition && showSubText());
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__deprecated);

/***/ }),

/***/ "./blocks/heading/deprecated/index.js":
/*!********************************************!*\
  !*** ./blocks/heading/deprecated/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deprecated: () => (/* binding */ deprecated)
/* harmony export */ });
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./__deprecated */ "./blocks/heading/deprecated/__deprecated.js");
/* harmony import */ var _2_10_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2-10-1 */ "./blocks/heading/deprecated/2-10-1.js");
/* harmony import */ var _wp_6_0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wp-6_0 */ "./blocks/heading/deprecated/wp-6_0.js");



const deprecated = [..._wp_6_0__WEBPACK_IMPORTED_MODULE_2__.deprecated_wp6_0, ..._2_10_1__WEBPACK_IMPORTED_MODULE_1__.deprecated2101, ..._deprecated__WEBPACK_IMPORTED_MODULE_0__.__deprecated];

/***/ }),

/***/ "./blocks/heading/deprecated/wp-6_0.js":
/*!*********************************************!*\
  !*** ./blocks/heading/deprecated/wp-6_0.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deprecated_wp6_0: () => (/* binding */ deprecated_wp6_0)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aktk_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aktk/components/responsive-font-size/functions */ "./src/js/components/responsive-font-size/functions.js");
/* harmony import */ var _aktk_util_getResponsivPropertye__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aktk/util/_getResponsivPropertye */ "./src/js/util/_getResponsivPropertye.js");






const blockAttributes = {
  content: {
    type: 'string',
    source: 'html',
    selector: '.ystdb-heading__text',
    default: ''
  },
  level: {
    type: 'number',
    default: 2
  },
  align: {
    type: 'string',
    default: 'left'
  },
  subText: {
    type: 'string',
    default: ''
  },
  subTextPosition: {
    type: 'string',
    default: 'bottom'
  },
  subTextSize: {
    type: 'string'
  },
  customSubTextSize: {
    type: 'string'
  },
  useSubTextSizeResponsive: {
    type: 'bool',
    default: false
  },
  subTextSizeMobile: {
    type: 'number'
  },
  subTextSizeTablet: {
    type: 'number'
  },
  subTextSizeDesktop: {
    type: 'number'
  },
  subTextFontWeight: {
    type: 'string',
    default: ''
  },
  subTextLetterSpacing: {
    type: 'number'
  },
  subTextColor: {
    type: 'string'
  },
  customSubTextColor: {
    type: 'string'
  },
  subTextBorderWidth: {
    type: 'number',
    default: 50
  },
  subTextBorderHeight: {
    type: 'number',
    default: 0
  },
  dividerColor: {
    type: 'string'
  },
  customDividerColor: {
    type: 'string'
  },
  dividerMarginTop: {
    type: 'number',
    default: 4
  },
  dividerMarginBottom: {
    type: 'number',
    default: 4
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
  useFontSizeResponsive: {
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
  fontWeight: {
    type: 'string',
    default: ''
  },
  letterSpacing: {
    type: 'number'
  },
  clearStyle: {
    type: 'bool',
    default: true
  },
  dividerImageURL: {
    type: 'string'
  },
  dividerImageAlt: {
    type: 'string'
  },
  dividerImageID: {
    type: 'integer',
    default: 0
  },
  marginTop: {
    type: 'string',
    default: ''
  },
  marginTopUnit: {
    type: 'string',
    default: 'px'
  },
  marginRight: {
    type: 'string',
    default: ''
  },
  marginRightUnit: {
    type: 'string',
    default: 'px'
  },
  marginBottom: {
    type: 'string',
    default: ''
  },
  marginBottomUnit: {
    type: 'string',
    default: 'px'
  },
  marginLeft: {
    type: 'string',
    default: ''
  },
  marginLeftUnit: {
    type: 'string',
    default: 'px'
  }
};
const blockSupports = {
  className: false,
  anchor: true,
  __unstablePasteTextInline: true
};
const deprecated_wp6_0 = [{
  attributes: {
    ...blockAttributes
  },
  supports: {
    ...blockSupports
  },
  save({
    attributes
  }) {
    const {
      align,
      content,
      level,
      textColor,
      customTextColor,
      fontSize,
      customFontSize,
      useFontSizeResponsive,
      fontSizeDesktop,
      fontSizeTablet,
      fontSizeMobile,
      fontWeight,
      letterSpacing,
      subText,
      subTextSize,
      customSubTextSize,
      useSubTextSizeResponsive,
      subTextSizeMobile,
      subTextSizeTablet,
      subTextSizeDesktop,
      subTextFontWeight,
      subTextLetterSpacing,
      subTextColor,
      customSubTextColor,
      subTextBorderHeight,
      subTextBorderWidth,
      dividerColor,
      customDividerColor,
      dividerMarginTop,
      dividerMarginBottom,
      clearStyle,
      subTextPosition,
      dividerImageURL,
      dividerImageAlt,
      marginTop,
      marginTopUnit,
      marginRight,
      marginRightUnit,
      marginBottom,
      marginBottomUnit,
      marginLeft,
      marginLeftUnit
    } = attributes;
    const TagName = 'h' + level;
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', textColor);
    const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass)(fontSize);
    const subTextSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass)(subTextSize);
    const subTextColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', subTextColor);
    const dividerColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('fill', dividerColor);
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading', {
      [`has-text-align-${align}`]: align,
      'has-divider': subTextBorderHeight && subTextBorderWidth,
      'has-sub-text': subText,
      [`has-subtext--${subTextPosition}`]: subText || subTextBorderHeight && subTextBorderWidth,
      ...(0,_aktk_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_4__.getFontResponsiveClass)(useFontSizeResponsive, fontSizeDesktop, fontSizeTablet, fontSizeMobile)
    });
    const headingStyles = {
      marginTop: '' !== marginTop ? marginTop + marginTopUnit : undefined,
      marginRight: '' !== marginRight ? marginRight + marginRightUnit : undefined,
      marginBottom: '' !== marginBottom ? marginBottom + marginBottomUnit : undefined,
      marginLeft: '' !== marginLeft ? marginLeft + marginLeftUnit : undefined,
      ...(0,_aktk_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_4__.getFontResponsiveStyle)({
        isResponsive: useFontSizeResponsive,
        desktop: fontSizeDesktop,
        tablet: fontSizeTablet,
        mobile: fontSizeMobile
      })
    };
    const textClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__text', {
      'is-clear-style': clearStyle,
      [textClass]: textClass,
      'has-text-color': textColor || customTextColor,
      [fontSizeClass]: fontSizeClass && !useFontSizeResponsive
    });
    const textStyles = {
      color: textClass ? undefined : customTextColor,
      fontSize: !fontSizeClass && customFontSize && !useFontSizeResponsive ? customFontSize : undefined,
      fontWeight: !!fontWeight ? fontWeight : undefined,
      letterSpacing: !!letterSpacing && 0 < letterSpacing ? `${letterSpacing}em` : undefined
    };

    /**
     * 線
     */
    const divider = () => {
      if (0 === subTextBorderHeight || 0 === subTextBorderWidth) {
        return null;
      }
      const lineClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__line', {
        [dividerColorClass]: dividerColorClass
      });
      const svg = () => {
        const borderColor = customDividerColor ? customDividerColor : '#222';
        const lineStyle = {
          fill: dividerColorClass ? undefined : borderColor,
          marginTop: 0 !== dividerMarginTop ? dividerMarginTop : undefined,
          marginBottom: 0 !== dividerMarginBottom ? dividerMarginBottom : undefined
        };
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SVG, {
          className: lineClass,
          width: subTextBorderWidth,
          height: subTextBorderHeight,
          viewBox: `0 0 ${subTextBorderWidth} ${subTextBorderHeight}`,
          xmlns: "http://www.w3.org/2000/svg",
          role: "img",
          style: lineStyle
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Path, {
          d: `m0 0 h ${subTextBorderWidth} v ${subTextBorderHeight} h -${subTextBorderWidth} z`
        }));
      };
      const image = () => {
        const lineStyle = {
          display: 'block',
          width: subTextBorderWidth,
          height: subTextBorderHeight,
          marginTop: 0 !== dividerMarginTop ? dividerMarginTop : undefined,
          marginBottom: 0 !== dividerMarginBottom ? dividerMarginBottom : undefined,
          marginRight: 'left' === align || 'center' === align ? 'auto' : undefined,
          marginLeft: 'right' === align || 'center' === align ? 'auto' : undefined
        };
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          className: lineClass,
          src: dividerImageURL,
          width: subTextBorderWidth,
          height: subTextBorderHeight,
          alt: dividerImageAlt,
          style: lineStyle
        });
      };
      return !!dividerImageURL ? image() : svg();
    };
    /**
     * サブテキスト
     *
     * @return {null|*} サブテキスト.
     */
    const showSubText = () => {
      if (!subText) {
        return null;
      }
      const subTextClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__subtext', {
        'has-font-size': subTextSizeClass || customSubTextSize || useSubTextSizeResponsive,
        'has-color': subTextColorClass || customSubTextColor,
        [subTextColorClass]: subTextColorClass,
        [subTextSizeClass]: subTextSizeClass && !useSubTextSizeResponsive,
        ...(0,_aktk_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_4__.getFontResponsiveClass)(useSubTextSizeResponsive, subTextSizeDesktop, subTextSizeTablet, subTextSizeMobile)
      });
      let subTextStyle = {
        color: subTextColorClass ? undefined : customSubTextColor,
        fontWeight: !!subTextFontWeight ? subTextFontWeight : undefined,
        letterSpacing: !!subTextLetterSpacing && 0 < subTextLetterSpacing ? `${subTextLetterSpacing}em` : undefined
      };
      if (useSubTextSizeResponsive) {
        subTextStyle = {
          ...subTextStyle,
          ...(0,_aktk_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_4__.getFontResponsiveStyle)({
            isResponsive: useSubTextSizeResponsive,
            desktop: subTextSizeDesktop,
            tablet: subTextSizeTablet,
            mobile: subTextSizeMobile
          })
        };
      } else {
        subTextStyle = {
          ...subTextStyle,
          fontSize: customSubTextSize ? customSubTextSize : undefined
        };
      }
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: subTextClasses,
        "aria-hidden": 'true',
        style: subTextStyle,
        "data-text": subText,
        ...(0,_aktk_util_getResponsivPropertye__WEBPACK_IMPORTED_MODULE_5__["default"])({
          'font-size': useSubTextSizeResponsive ? `${subTextSizeDesktop}px` : undefined
        })
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classes,
      style: headingStyles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `ystdb-heading__container`
    }, 'top' === subTextPosition && showSubText(), 'top' === subTextPosition && divider(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: TagName,
      className: textClasses,
      style: textStyles,
      value: content,
      ...(0,_aktk_util_getResponsivPropertye__WEBPACK_IMPORTED_MODULE_5__["default"])({
        'font-size': useFontSizeResponsive ? `${fontSizeDesktop}px` : undefined
      })
    }), 'bottom' === subTextPosition && divider(), 'bottom' === subTextPosition && showSubText()));
  }
}];

/***/ }),

/***/ "./blocks/heading/edit.js":
/*!********************************!*\
  !*** ./blocks/heading/edit.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aktk/util/_getNum */ "./src/js/util/_getNum.js");
/* harmony import */ var _aktk_components_responsive_font_size_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aktk/components/responsive-font-size/index */ "./src/js/components/responsive-font-size/index.js");
/* harmony import */ var _aktk_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @aktk/components/responsive-font-size/functions */ "./src/js/components/responsive-font-size/functions.js");
/* harmony import */ var _aktk_components_horizon_buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @aktk/components/horizon-buttons */ "./src/js/components/horizon-buttons/index.js");
/* harmony import */ var _aktk_components_color_palette_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @aktk/components/color-palette-control */ "./src/js/components/color-palette-control/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./config */ "./blocks/heading/config.js");
/* harmony import */ var _heading_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./heading-toolbar */ "./blocks/heading/heading-toolbar.js");

// @ts-nocheck

/**
 * WordPress.
 */






/**
 * Plugin.
 */





/**
 * Blocks.
 */


function customHeading(props) {
  const {
    textColor,
    setTextColor,
    subTextColor,
    setSubTextColor,
    dividerColor,
    setDividerColor,
    attributes,
    setAttributes,
    isSelected,
    fontSize,
    setFontSize,
    subTextSize,
    setSubTextSize,
    onReplace,
    mergeBlocks,
    className
  } = props;
  const {
    content,
    level,
    align,
    useFontSizeResponsive,
    fontSizeMobile,
    fontSizeTablet,
    fontSizeDesktop,
    fontWeight,
    letterSpacing,
    subText,
    subTextPosition,
    subTextBorderWidth,
    subTextBorderHeight,
    useSubTextSizeResponsive,
    subTextSizeMobile,
    subTextSizeTablet,
    subTextSizeDesktop,
    subTextFontWeight,
    subTextLetterSpacing,
    dividerMarginTop,
    dividerMarginBottom,
    clearStyle,
    dividerImageURL,
    dividerImageAlt,
    dividerImageID,
    marginTop,
    marginTopUnit,
    marginRight,
    marginRightUnit,
    marginBottom,
    marginBottomUnit,
    marginLeft,
    marginLeftUnit
  } = attributes;
  const TagName = 'h' + level;
  const showSubText = isSelected || '' !== subText;
  const MARGIN_MIN_SIZE = -120;
  const MARGIN_NEGATIVE_ADD = '28px';

  /**
   * 編集画面の余白調整
   *
   * @type {string}
   */
  const dividerEditorMarginTop = 'bottom' === subTextPosition ? dividerMarginTop + 2 + 'px' : dividerMarginTop - 1 + 'px';
  const dividerEditorMarginBottom = 'bottom' === subTextPosition ? dividerMarginBottom + 'px' : dividerMarginBottom + 2 + 'px';
  /**
   * 編集領域
   *
   * @type {string}
   */
  const editorClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__editor');

  /**
   * 見出し
   *
   * @type {string}
   */
  const headingClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'ystdb-heading', {
    [`has-text-align-${align}`]: align,
    [textColor.class]: textColor.class,
    [fontSize.class]: fontSize.class && !useFontSizeResponsive,
    'has-border': subTextBorderHeight && subTextBorderWidth,
    'has-sub-text': subText,
    ...(0,_aktk_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_9__.getFontResponsiveClass)(useFontSizeResponsive, fontSizeDesktop, fontSizeTablet, fontSizeMobile)
  });
  const getVerticalMargin = (margin, unit) => {
    if ('' === margin || !parseFloat(margin)) {
      return undefined;
    }
    if (0 > parseFloat(margin)) {
      return `calc(${margin}${unit} - ${MARGIN_NEGATIVE_ADD})`;
    }
    return `${margin}${unit}`;
  };
  const headingStyles = {
    marginTop: getVerticalMargin(marginTop, marginTopUnit),
    marginRight: '' !== marginRight ? marginRight + marginRightUnit : undefined,
    marginBottom: getVerticalMargin(marginBottom, marginBottomUnit),
    marginLeft: '' !== marginLeft ? marginLeft + marginLeftUnit : undefined,
    ...(0,_aktk_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_9__.getFontResponsiveStyle)({
      isResponsive: useFontSizeResponsive,
      desktop: fontSizeDesktop,
      tablet: fontSizeTablet,
      mobile: fontSizeMobile
    })
  };
  const styles = {
    color: textColor.color,
    fontSize: fontSize.size && !useFontSizeResponsive ? fontSize.size : undefined,
    fontWeight: !!fontWeight ? fontWeight : undefined,
    letterSpacing: !!letterSpacing && 0 < letterSpacing ? `${letterSpacing}em` : undefined
  };
  const textClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__text', {
    'is-clear-style': clearStyle
  });

  /**
   * 線
   */
  const divider = () => {
    if (0 === subTextBorderHeight || 0 === subTextBorderWidth) {
      return null;
    }
    const svg = () => {
      const lineStyle = {
        fill: dividerColor.color ? dividerColor.color : '#222',
        marginTop: 0 !== dividerMarginTop ? dividerEditorMarginTop : undefined,
        marginBottom: 0 !== dividerMarginBottom ? dividerEditorMarginBottom : undefined,
        marginRight: 'left' === align || 'center' === align ? 'auto' : undefined,
        marginLeft: 'right' === align || 'center' === align ? 'auto' : undefined
      };
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SVG, {
        className: 'ystdb-heading__line',
        width: subTextBorderWidth,
        height: subTextBorderHeight,
        viewBox: `0 0 ${subTextBorderWidth} ${subTextBorderHeight}`,
        xmlns: "http://www.w3.org/2000/svg",
        style: lineStyle
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
        d: `m0 0 h ${subTextBorderWidth} v ${subTextBorderHeight} h -${subTextBorderWidth} z`
      }));
    };
    const image = () => {
      const lineStyle = {
        display: 'block',
        width: subTextBorderWidth,
        height: subTextBorderHeight,
        marginTop: 0 !== dividerMarginTop ? dividerEditorMarginTop : undefined,
        marginBottom: 0 !== dividerMarginBottom ? dividerEditorMarginBottom : undefined,
        marginRight: 'left' === align || 'center' === align ? 'auto' : undefined,
        marginLeft: 'right' === align || 'center' === align ? 'auto' : undefined
      };
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        className: 'ystdb-heading__line',
        src: dividerImageURL,
        width: subTextBorderWidth,
        height: subTextBorderHeight,
        alt: dividerImageAlt,
        style: lineStyle
      });
    };
    return !!dividerImageURL ? image() : svg();
  };

  /**
   * サブテキスト
   *
   * @return {*} サブテキスト.
   */
  const editSubText = () => {
    const padding = `calc(.25em + ${subTextBorderHeight}px)`;
    const wrapStyle = {
      marginBottom: 'top' === subTextPosition && subTextBorderHeight ? padding : undefined,
      marginTop: 'bottom' === subTextPosition && subTextBorderHeight ? padding : undefined,
      marginRight: 'center' === align ? 'auto' : undefined,
      marginLeft: 'center' === align ? 'auto' : undefined
    };
    let textStyle = {
      color: subTextColor.color,
      textAlign: align,
      width: 'auto',
      height: 'auto',
      fontWeight: !!subTextFontWeight ? subTextFontWeight : undefined,
      letterSpacing: !!subTextLetterSpacing && 0 < subTextLetterSpacing ? `${subTextLetterSpacing}em` : undefined
    };
    if (useSubTextSizeResponsive) {
      textStyle = {
        ...textStyle,
        ...(0,_aktk_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_9__.getFontResponsiveStyle)({
          isResponsive: useSubTextSizeResponsive,
          desktop: subTextSizeDesktop,
          tablet: subTextSizeTablet,
          mobile: subTextSizeMobile
        })
      };
    } else {
      textStyle = {
        ...textStyle,
        fontSize: subTextSize.size ? subTextSize.size : '14px'
      };
    }
    const subTextClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__subtext', 'ystdb-heading__subtext-edit', {
      ...(0,_aktk_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_9__.getFontResponsiveClass)(useSubTextSizeResponsive, subTextSizeDesktop, subTextSizeTablet, subTextSizeMobile)
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: subTextClass,
      style: wrapStyle
    }, showSubText && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      value: subText,
      style: textStyle,
      onChange: value => {
        setAttributes({
          subText: value
        });
      },
      placeholder: 'サブテキスト...',
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Sub Text')
    })));
  };
  /**
   * 画像設定コントロール
   *
   * @param {Object} obj
   */
  const mediaUploadRender = obj => {
    if (0 === dividerImageID) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        variant: "secondary",
        onClick: obj.open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('画像を選択', 'ystandard-blocks'));
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      onClick: obj.open,
      className: 'ystdb-mediaupload__preview',
      style: {
        padding: 0
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: dividerImageURL,
      alt: dividerImageAlt
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      variant: "secondary",
      onClick: () => {
        setAttributes({
          dividerImageURL: '',
          dividerImageID: 0
        });
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('画像をクリア', 'ystandard-blocks')));
  };
  const getMarginStep = unit => {
    if ('em' === unit || 'rem' === unit) {
      return 0.1;
    }
    return 1;
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heading_toolbar__WEBPACK_IMPORTED_MODULE_13__["default"], {
    minLevel: 2,
    maxLevel: 5,
    selectedLevel: level,
    onChange: newLevel => setAttributes({
      level: newLevel
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.AlignmentToolbar, {
    value: align,
    onChange: nextAlign => {
      setAttributes({
        align: nextAlign
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('見出しレベル', 'ystandard-blocks'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heading_toolbar__WEBPACK_IMPORTED_MODULE_13__["default"], {
    isCollapsed: false,
    minLevel: 1,
    maxLevel: 7,
    selectedLevel: level,
    onChange: newLevel => setAttributes({
      level: newLevel
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('色・サイズ', 'ystandard-blocks'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('文字色', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_color_palette_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('文字色', 'ystandard-blocks'),
    value: textColor.color,
    onChange: color => {
      setTextColor(color);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('文字サイズ', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_responsive_font_size_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: 'font-size',
    useResponsive: useFontSizeResponsive,
    fontSize: fontSize,
    onChangeFontSizePicker: font => {
      setFontSize(font);
    },
    changeResponsiveMode: value => {
      if (value) {
        setAttributes({
          fontSizeDesktop: !fontSizeDesktop && fontSize.size ? fontSize.size : (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(fontSizeDesktop, 0, 200, null),
          fontSizeTablet: !fontSizeTablet && fontSize.size ? fontSize.size : (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(fontSizeTablet, 0, 200, null),
          fontSizeMobile: !fontSizeMobile && fontSize.size ? fontSize.size : (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(fontSizeMobile, 0, 200, null)
        });
      }
      setAttributes({
        useFontSizeResponsive: value
      });
    },
    desktopValue: fontSizeDesktop,
    desktopOnChange: value => {
      setAttributes({
        fontSizeDesktop: (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(value, 0, 200, null)
      });
    },
    desktopUnit: 'px',
    tabletValue: fontSizeTablet,
    tabletOnChange: value => setAttributes({
      fontSizeTablet: (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(value, 0, 200, null)
    }),
    tabletUnit: 'px',
    mobileValue: fontSizeMobile,
    mobileOnChange: value => setAttributes({
      fontSizeMobile: (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(value, 0, 200, null)
    }),
    mobileUnit: 'px'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('太さ', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    value: fontWeight,
    options: _config__WEBPACK_IMPORTED_MODULE_12__.fontWeightList,
    onChange: type => {
      setAttributes({
        fontWeight: type
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Letter Spacing', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalNumberControl, {
    value: letterSpacing,
    onChange: value => {
      setAttributes({
        letterSpacing: (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(value, 0, 1, null)
      });
    },
    min: 0,
    max: 1,
    step: 0.01
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('余白', 'ystandard-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__columns has-unit-select"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('上', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalNumberControl, {
    value: marginTop,
    onChange: value => {
      const newValue = '' === value ? '' : (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(value, -120, 120, 0);
      setAttributes({
        marginTop: newValue.toString()
      });
    },
    min: MARGIN_MIN_SIZE,
    max: 120,
    step: getMarginStep(marginTopUnit),
    style: {
      flexGrow: 1
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    value: marginTopUnit,
    options: _config__WEBPACK_IMPORTED_MODULE_12__.cssUnit,
    onChange: type => {
      setAttributes({
        marginTopUnit: type
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__columns has-unit-select"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('右', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalNumberControl, {
    value: marginRight,
    onChange: value => {
      const newValue = '' === value ? '' : (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(value, -120, 120, 0);
      setAttributes({
        marginRight: newValue.toString()
      });
    },
    min: MARGIN_MIN_SIZE,
    max: 120,
    step: getMarginStep(marginRightUnit),
    style: {
      flexGrow: 1
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    value: marginRightUnit,
    options: _config__WEBPACK_IMPORTED_MODULE_12__.cssUnit,
    onChange: type => {
      setAttributes({
        marginRightUnit: type
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__columns has-unit-select"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('下', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalNumberControl, {
    value: marginBottom,
    onChange: value => {
      const newValue = '' === value ? '' : (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(value, -120, 120, 0);
      setAttributes({
        marginBottom: newValue.toString()
      });
    },
    min: MARGIN_MIN_SIZE,
    max: 120,
    step: getMarginStep(marginBottomUnit),
    style: {
      flexGrow: 1
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    value: marginBottomUnit,
    options: _config__WEBPACK_IMPORTED_MODULE_12__.cssUnit,
    onChange: type => {
      setAttributes({
        marginBottomUnit: type
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__columns has-unit-select"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('左', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalNumberControl, {
    value: marginLeft,
    onChange: value => {
      const newValue = '' === value ? '' : (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(value, -120, 120, 0);
      setAttributes({
        marginLeft: newValue.toString()
      });
    },
    min: MARGIN_MIN_SIZE,
    max: 120,
    step: getMarginStep(marginLeftUnit),
    style: {
      flexGrow: 1
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    value: marginLeftUnit,
    options: _config__WEBPACK_IMPORTED_MODULE_12__.cssUnit,
    onChange: type => {
      setAttributes({
        marginLeftUnit: type
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('サブテキスト', 'ystandard-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('サブテキストの位置', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_horizon_buttons__WEBPACK_IMPORTED_MODULE_10__["default"], null, _config__WEBPACK_IMPORTED_MODULE_12__.positions.map(item => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      key: item.value,
      isSecondary: subTextPosition !== item.value,
      isPrimary: subTextPosition === item.value,
      onClick: () => {
        setAttributes({
          subTextPosition: item.value
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, item.label));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('サブテキスト文字の色', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_color_palette_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('サブテキスト文字の色', 'ystandard-blocks'),
    value: subTextColor.color,
    onChange: color => {
      setSubTextColor(color);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('サブテキスト文字サイズ', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_responsive_font_size_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: 'sub-text-size',
    useResponsive: useSubTextSizeResponsive,
    fontSize: subTextSize,
    onChangeFontSizePicker: font => {
      setSubTextSize(font);
    },
    changeResponsiveMode: value => {
      if (value) {
        setAttributes({
          subTextSizeDesktop: !subTextSizeDesktop && subTextSize.size ? subTextSize.size : (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(subTextSizeDesktop, 0, 200, null),
          subTextSizeTablet: !subTextSizeTablet && subTextSize.size ? subTextSize.size : (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(subTextSizeTablet, 0, 200, null),
          subTextSizeMobile: !subTextSizeMobile && subTextSize.size ? subTextSize.size : (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(subTextSizeMobile, 0, 200, null)
        });
      }
      setAttributes({
        useSubTextSizeResponsive: value
      });
    },
    desktopValue: subTextSizeDesktop,
    desktopOnChange: value => setAttributes({
      subTextSizeDesktop: (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(value, 0, 200, null)
    }),
    desktopUnit: 'px',
    tabletValue: subTextSizeTablet,
    tabletOnChange: value => setAttributes({
      subTextSizeTablet: (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(value, 0, 200, null)
    }),
    tabletUnit: 'px',
    mobileValue: subTextSizeMobile,
    mobileOnChange: value => setAttributes({
      subTextSizeMobile: (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(value, 0, 200, null)
    }),
    mobileUnit: 'px'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('太さ', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    value: subTextFontWeight,
    options: _config__WEBPACK_IMPORTED_MODULE_12__.fontWeightList,
    onChange: type => {
      setAttributes({
        subTextFontWeight: type
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Letter Spacing', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalNumberControl, {
    value: subTextLetterSpacing,
    onChange: value => {
      setAttributes({
        subTextLetterSpacing: (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(value, 0, 1, null)
      });
    },
    min: 0,
    max: 1,
    step: 0.01
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('区切り線', 'ystandard-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('線の長さ(px)', 'ystandard-blocks'),
    value: subTextBorderWidth,
    onChange: value => setAttributes({
      subTextBorderWidth: (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(value, 0, 1000, 0)
    }),
    min: 0,
    max: 1000,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('線の太さ(px)', 'ystandard-blocks'),
    value: subTextBorderHeight,
    onChange: value => setAttributes({
      subTextBorderHeight: (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(value, 0, 10, 0)
    }),
    min: 0,
    max: 10,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('区切り線の色', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_color_palette_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('区切り線の色', 'ystandard-blocks'),
    value: dividerColor.color,
    onChange: color => {
      setDividerColor(color);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('区切り線用画像', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      setAttributes({
        dividerImageURL: media.url,
        dividerImageID: media.id,
        dividerImageAlt: media.alt
      });
    },
    type: ['image'],
    value: dividerImageID,
    render: mediaUploadRender
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `ystdb-info__small`
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('※画像を指定した場合、区切り線の色設定は無視されます。', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('区切り線の上下余白', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('上側の余白(px)', 'ystandard-blocks'),
    value: dividerMarginTop,
    onChange: value => setAttributes({
      dividerMarginTop: (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(value, 0, 100, 0)
    }),
    min: 0,
    max: 100,
    step: 1,
    allowReset: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('下側の余白(px)', 'ystandard-blocks'),
    value: dividerMarginBottom,
    onChange: value => setAttributes({
      dividerMarginBottom: (0,_aktk_util_getNum__WEBPACK_IMPORTED_MODULE_7__["default"])(value, 0, 100, 0)
    }),
    min: 0,
    max: 100,
    step: 1,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('スタイル削除', 'ystandard-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('テーマの見出しスタイルをクリアする', 'ystandard-blocks'),
    checked: clearStyle,
    onChange: () => {
      setAttributes({
        clearStyle: !clearStyle
      });
    }
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: editorClasses
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: headingClasses,
    style: headingStyles
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `ystdb-heading__container`
  }, 'top' === subTextPosition && editSubText(), 'top' === subTextPosition && divider(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    identifier: "content",
    tagName: TagName,
    className: textClass,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('見出しテキスト…', 'ystandard-blocks'),
    value: content,
    style: styles,
    onChange: value => {
      setAttributes({
        content: value
      });
    },
    onMerge: mergeBlocks,
    onSplit: value => {
      if (!value) {
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)('core/paragraph');
      }
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)('ystdb/heading', {
        ...attributes,
        content: value
      });
    },
    onReplace: onReplace,
    onRemove: () => onReplace([])
  }), 'bottom' === subTextPosition && divider(), 'bottom' === subTextPosition && editSubText()))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.withColors)({
  textColor: 'color',
  subTextColor: 'color',
  dividerColor: 'fill'
}), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.withFontSizes)('fontSize', 'subTextSize')])(customHeading));

/***/ }),

/***/ "./blocks/heading/heading-toolbar.js":
/*!*******************************************!*\
  !*** ./blocks/heading/heading-toolbar.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./blocks/heading/config.js");






class HeadingToolbar extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  createLevelControl(targetLevel, selectedLevel, onChange) {
    const isActive = targetLevel === selectedLevel;
    return {
      icon: this.getIcon(targetLevel, isActive),
      title: `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('見出し', 'ystandard-blocks')} ${targetLevel}`,
      isActive,
      onClick: () => onChange(targetLevel)
    };
  }
  render() {
    const {
      isCollapsed = true,
      minLevel,
      maxLevel,
      selectedLevel,
      onChange
    } = this.props;
    const dropdownMenu = () => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarItem, null, toolbarItemHTMLProps => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu, {
        toggleProps: toolbarItemHTMLProps,
        isCollapsed: isCollapsed,
        icon: this.getIcon(selectedLevel),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('見出しレベル', 'ystandard-blocks'),
        controls: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.range)(minLevel, maxLevel).map(index => this.createLevelControl(index, selectedLevel, onChange))
      }));
    };
    const buttons = () => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.range)(minLevel, maxLevel).map(index => {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
          key: index,
          ...this.createLevelControl(index, selectedLevel, onChange)
        });
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, null, isCollapsed ? dropdownMenu() : buttons());
  }
  getIcon(level = 2, isPressed = false) {
    if (!_config__WEBPACK_IMPORTED_MODULE_4__.paths.hasOwnProperty(level)) {
      return null;
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SVG, {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg",
      isPressed: isPressed
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Path, {
      d: _config__WEBPACK_IMPORTED_MODULE_4__.paths[level]
    }));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeadingToolbar);

/***/ }),

/***/ "./blocks/heading/save.js":
/*!********************************!*\
  !*** ./blocks/heading/save.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aktk_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aktk/components/responsive-font-size/functions */ "./src/js/components/responsive-font-size/functions.js");
/* harmony import */ var _aktk_util_getResponsivPropertye__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aktk/util/_getResponsivPropertye */ "./src/js/util/_getResponsivPropertye.js");






function save({
  attributes
}) {
  const {
    align,
    content,
    level,
    textColor,
    customTextColor,
    fontSize,
    customFontSize,
    useFontSizeResponsive,
    fontSizeDesktop,
    fontSizeTablet,
    fontSizeMobile,
    fontWeight,
    letterSpacing,
    subText,
    subTextSize,
    customSubTextSize,
    useSubTextSizeResponsive,
    subTextSizeMobile,
    subTextSizeTablet,
    subTextSizeDesktop,
    subTextFontWeight,
    subTextLetterSpacing,
    subTextColor,
    customSubTextColor,
    subTextBorderHeight,
    subTextBorderWidth,
    dividerColor,
    customDividerColor,
    dividerMarginTop,
    dividerMarginBottom,
    clearStyle,
    subTextPosition,
    dividerImageURL,
    dividerImageAlt,
    marginTop,
    marginTopUnit,
    marginRight,
    marginRightUnit,
    marginBottom,
    marginBottomUnit,
    marginLeft,
    marginLeftUnit
  } = attributes;
  const TagName = 'h' + level;
  const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', textColor);
  const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass)(fontSize);
  const subTextSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass)(subTextSize);
  const subTextColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', subTextColor);
  const dividerColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('fill', dividerColor);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading', {
    [`has-text-align-${align}`]: align,
    'has-divider': subTextBorderHeight && subTextBorderWidth,
    'has-sub-text': subText,
    [`has-subtext--${subTextPosition}`]: subText || subTextBorderHeight && subTextBorderWidth,
    ...(0,_aktk_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_4__.getFontResponsiveClass)(useFontSizeResponsive, fontSizeDesktop, fontSizeTablet, fontSizeMobile)
  });
  const headingStyles = {
    marginTop: '' !== marginTop ? marginTop + marginTopUnit : undefined,
    marginRight: '' !== marginRight ? marginRight + marginRightUnit : undefined,
    marginBottom: '' !== marginBottom ? marginBottom + marginBottomUnit : undefined,
    marginLeft: '' !== marginLeft ? marginLeft + marginLeftUnit : undefined,
    ...(0,_aktk_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_4__.getFontResponsiveStyle)({
      isResponsive: useFontSizeResponsive,
      desktop: fontSizeDesktop,
      tablet: fontSizeTablet,
      mobile: fontSizeMobile
    })
  };
  const textClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__text', {
    'is-clear-style': clearStyle,
    [textClass]: textClass,
    'has-text-color': textColor || customTextColor,
    [fontSizeClass]: fontSizeClass && !useFontSizeResponsive
  });
  const textStyles = {
    color: textClass ? undefined : customTextColor,
    fontSize: !fontSizeClass && customFontSize && !useFontSizeResponsive ? customFontSize : undefined,
    fontWeight: !!fontWeight ? fontWeight : undefined,
    letterSpacing: !!letterSpacing && 0 < letterSpacing ? `${letterSpacing}em` : undefined
  };

  /**
   * 線
   */
  const divider = () => {
    if (0 === subTextBorderHeight || 0 === subTextBorderWidth) {
      return null;
    }
    const lineClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__line', {
      [dividerColorClass]: dividerColorClass
    });
    const svg = () => {
      const borderColor = customDividerColor ? customDividerColor : '#222';
      const lineStyle = {
        fill: dividerColorClass ? undefined : borderColor,
        marginTop: 0 !== dividerMarginTop ? dividerMarginTop : undefined,
        marginBottom: 0 !== dividerMarginBottom ? dividerMarginBottom : undefined
      };
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SVG, {
        className: lineClass,
        width: subTextBorderWidth,
        height: subTextBorderHeight,
        viewBox: `0 0 ${subTextBorderWidth} ${subTextBorderHeight}`,
        xmlns: "http://www.w3.org/2000/svg",
        style: lineStyle
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Path, {
        d: `m0 0 h ${subTextBorderWidth} v ${subTextBorderHeight} h -${subTextBorderWidth} z`
      }));
    };
    const image = () => {
      const lineStyle = {
        display: 'block',
        width: subTextBorderWidth,
        height: subTextBorderHeight,
        marginTop: 0 !== dividerMarginTop ? dividerMarginTop : undefined,
        marginBottom: 0 !== dividerMarginBottom ? dividerMarginBottom : undefined,
        marginRight: 'left' === align || 'center' === align ? 'auto' : undefined,
        marginLeft: 'right' === align || 'center' === align ? 'auto' : undefined
      };
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        className: lineClass,
        src: dividerImageURL,
        width: subTextBorderWidth,
        height: subTextBorderHeight,
        alt: dividerImageAlt,
        style: lineStyle
      });
    };
    return !!dividerImageURL ? image() : svg();
  };
  /**
   * サブテキスト
   *
   * @return {null|*} サブテキスト.
   */
  const showSubText = () => {
    if (!subText) {
      return null;
    }
    const subTextClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-heading__subtext', {
      'has-font-size': subTextSizeClass || customSubTextSize || useSubTextSizeResponsive,
      'has-color': subTextColorClass || customSubTextColor,
      [subTextColorClass]: subTextColorClass,
      [subTextSizeClass]: subTextSizeClass && !useSubTextSizeResponsive,
      ...(0,_aktk_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_4__.getFontResponsiveClass)(useSubTextSizeResponsive, subTextSizeDesktop, subTextSizeTablet, subTextSizeMobile)
    });
    let subTextStyle = {
      color: subTextColorClass ? undefined : customSubTextColor,
      fontWeight: !!subTextFontWeight ? subTextFontWeight : undefined,
      letterSpacing: !!subTextLetterSpacing && 0 < subTextLetterSpacing ? `${subTextLetterSpacing}em` : undefined
    };
    if (useSubTextSizeResponsive) {
      subTextStyle = {
        ...subTextStyle,
        ...(0,_aktk_components_responsive_font_size_functions__WEBPACK_IMPORTED_MODULE_4__.getFontResponsiveStyle)({
          isResponsive: useSubTextSizeResponsive,
          desktop: subTextSizeDesktop,
          tablet: subTextSizeTablet,
          mobile: subTextSizeMobile
        })
      };
    } else {
      subTextStyle = {
        ...subTextStyle,
        fontSize: customSubTextSize ? customSubTextSize : undefined
      };
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: subTextClasses,
      "aria-hidden": 'true',
      style: subTextStyle,
      "data-text": subText,
      ...(0,_aktk_util_getResponsivPropertye__WEBPACK_IMPORTED_MODULE_5__["default"])({
        'font-size': useSubTextSizeResponsive ? `${subTextSizeDesktop}px` : undefined
      })
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes,
    style: headingStyles
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `ystdb-heading__container`
  }, 'top' === subTextPosition && showSubText(), 'top' === subTextPosition && divider(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: TagName,
    className: textClasses,
    style: textStyles,
    value: content,
    ...(0,_aktk_util_getResponsivPropertye__WEBPACK_IMPORTED_MODULE_5__["default"])({
      'font-size': useFontSizeResponsive ? `${fontSizeDesktop}px` : undefined
    })
  }), 'bottom' === subTextPosition && divider(), 'bottom' === subTextPosition && showSubText()));
}

/***/ }),

/***/ "./blocks/heading/transforms.js":
/*!**************************************!*\
  !*** ./blocks/heading/transforms.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);

const transforms = {
  from: [{
    type: 'block',
    blocks: ['core/heading'],
    transform: attributes => {
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('ystdb/heading', {
        content: attributes.content,
        align: attributes.align,
        level: attributes.level,
        textColor: attributes.textColor,
        customTextColor: attributes.customTextColor
      });
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/heading'],
    transform: attributes => {
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/heading', {
        content: attributes.content,
        align: attributes.align,
        level: attributes.level,
        textColor: attributes.textColor,
        customTextColor: attributes.customTextColor
      });
    }
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (transforms);

/***/ }),

/***/ "./src/js/components/color-dropdown/index.js":
/*!***************************************************!*\
  !*** ./src/js/components/color-dropdown/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



const ColorDropdown = ({
  key,
  value,
  label,
  position = 'bottom left',
  renderContent
}) => {
  const _buttonLabel = label !== null && label !== void 0 ? label : '色';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalItemGroup, {
    isBordered: true,
    isSeparated: true,
    className: "block-editor-panel-color-gradient-settings__item-group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    key: key,
    position: position,
    className: "block-editor-panel-color-gradient-settings__dropdown",
    contentClassName: "block-editor-panel-color-gradient-settings__dropdown-content",
    style: {
      display: 'block'
    },
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalItem, {
      onClick: onToggle,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('block-editor-panel-color-gradient-settings__item', {
        'is-open': isOpen
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
      justify: "flex-start"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
      className: "block-editor-panel-color-gradient-settings__color-indicator",
      colorValue: value
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, _buttonLabel))),
    renderContent: renderContent
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorDropdown);

/***/ }),

/***/ "./src/js/components/color-palette-control/index.js":
/*!**********************************************************!*\
  !*** ./src/js/components/color-palette-control/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
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
  position = 'bottom left',
  ...props
}) => {
  const _colors = colors !== null && colors !== void 0 ? colors : (0,_aktk_helper_color__WEBPACK_IMPORTED_MODULE_3__.getColorSetting)();
  const handleOnChange = color => {
    onChange(color);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_color_dropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: key,
    label: label,
    value: value,
    position: position,
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
      colors: _colors,
      onChange: handleOnChange,
      value: value,
      ...props
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorPaletteControl);

/***/ }),

/***/ "./src/js/components/horizon-buttons/index.js":
/*!****************************************************!*\
  !*** ./src/js/components/horizon-buttons/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const HorizonButtons = ({
  children
}) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb__horizon-buttons"
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HorizonButtons);

/***/ }),

/***/ "./src/js/components/responsive-font-size/functions.js":
/*!*************************************************************!*\
  !*** ./src/js/components/responsive-font-size/functions.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFontResponsiveClass: () => (/* binding */ getFontResponsiveClass),
/* harmony export */   getFontResponsiveStyle: () => (/* binding */ getFontResponsiveStyle)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../svg-icon */ "./src/js/components/svg-icon/index.js");







/**
 * @deprecated
 */
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
    } = this.props;

    // 単位によって変えるかもしれない.
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveFontSizeControl);

/***/ }),

/***/ "./src/js/components/svg-icon/index.js":
/*!*********************************************!*\
  !*** ./src/js/components/svg-icon/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aktk_util_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aktk/util/icons */ "./src/js/util/icons.js");





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
        __html: (0,_aktk_util_icons__WEBPACK_IMPORTED_MODULE_2__.getIconSvg)(name)
      }
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SVGIcon);

/***/ }),

/***/ "./src/js/config/config.js":
/*!*********************************!*\
  !*** ./src/js/config/config.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ystdbConfig: () => (/* reexport safe */ _index__WEBPACK_IMPORTED_MODULE_0__.ystdbConfig)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/js/config/index.js");
//TODO: 直接このファイルを参照している部分を ./index.jsを参照するように変更する.


/***/ }),

/***/ "./src/js/config/index.js":
/*!********************************!*\
  !*** ./src/js/config/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ystdbConfig: () => (/* binding */ ystdbConfig)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBackGroundStyle: () => (/* binding */ getBackGroundStyle),
/* harmony export */   getColorSetting: () => (/* binding */ getColorSetting),
/* harmony export */   getColorSlug: () => (/* binding */ getColorSlug),
/* harmony export */   hex2rgb: () => (/* binding */ hex2rgb)
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

/***/ "./src/js/util/_getNum.js":
/*!********************************!*\
  !*** ./src/js/util/_getNum.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNum)
/* harmony export */ });
// @ts-nocheck
/**
 * 数字変換
 *
 * @param {string} value
 * @param {number} min
 * @param {number} max
 * @param {number} defaultValue
 * @deprecated
 */
function getNum(value, min = 0, max = null, defaultValue = undefined) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDataProperty)
/* harmony export */ });
// @ts-nocheck
/**
 * @param props
 * @deprecated
 */
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getIconSvg: () => (/* binding */ getIconSvg),
/* harmony export */   getIcons: () => (/* binding */ getIcons),
/* harmony export */   migrateOldSNSIconName: () => (/* binding */ migrateOldSNSIconName)
/* harmony export */ });
/**
 * アイコンのリストを取得
 *
 * @return {Array} アイコン一覧.
 * @deprecated @aktk/components/icon に移行.
 */
function getIcons() {
  return window.ystdbIconList;
}

/**
 * アイコンSVG取得
 *
 * @param {string} iconName アイコン名.
 * @return {undefined|string} アイコンSVG.
 * @deprecated @aktk/components/icon に移行.
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
 * @deprecated 旧SNSアイコン名は使用しない.
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
/***/ ((module, exports) => {

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

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

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
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-feather/dist/icons/bookmark.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/bookmark.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Bookmark = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
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
    d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
  }));
});
Bookmark.propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])
};
Bookmark.displayName = 'Bookmark';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bookmark);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./blocks/heading/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_js_config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/js/config/config */ "./src/js/config/config.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/heading/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./blocks/heading/save.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/bookmark.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transforms */ "./blocks/heading/transforms.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./blocks/heading/config.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _deprecated_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deprecated/index */ "./blocks/heading/deprecated/index.js");










(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__.registerBlockType)('ystdb/heading', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('カスタム見出し', 'ystandard-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('カスタム見出しブロック', 'ystandard-blocks'),
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_feather__WEBPACK_IMPORTED_MODULE_9__["default"], {
    stroke: _src_js_config_config__WEBPACK_IMPORTED_MODULE_1__.ystdbConfig.color.iconForeground,
    style: {
      fill: 'none'
    }
  }),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('heading'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('見出し'), 'head'],
  category: _src_js_config_config__WEBPACK_IMPORTED_MODULE_1__.ystdbConfig.category.common,
  attributes: _config__WEBPACK_IMPORTED_MODULE_5__.attributes,
  supports: _config__WEBPACK_IMPORTED_MODULE_5__.supports,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_4__["default"],
  deprecated: _deprecated_index__WEBPACK_IMPORTED_MODULE_8__.deprecated,
  example: {}
});
})();

/******/ })()
;
//# sourceMappingURL=heading.js.map