/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/columns/item/deprecated/deprecated__3-4__migration-padding/index.js":
/*!************************************************************************************!*\
  !*** ./blocks/columns/item/deprecated/deprecated__3-4__migration-padding/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deprecated__34__migrationPadding": () => (/* binding */ deprecated__34__migrationPadding),
/* harmony export */   "migratePadding": () => (/* binding */ migratePadding)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/* eslint-disable camelcase */

const metadata = {
  $schema: "https://raw.githubusercontent.com/WordPress/gutenberg/trunk/schemas/json/block.json",
  apiVersion: 2,
  name: "ystdb/column",
  title: "\u30AB\u30E9\u30E0",
  description: "\u30AB\u30B9\u30BF\u30E0\u30AB\u30E9\u30E0\u7528\u30AB\u30E9\u30E0\u30D6\u30ED\u30C3\u30AF",
  attributes: {
    backgroundColor: {
      type: "string"
    },
    customBackgroundColor: {
      type: "string"
    },
    shadow: {
      type: "boolean"
    },
    paddingType: {
      type: "string",
      "default": ""
    }
  },
  supports: {
    align: false,
    className: false
  },
  parent: ["ystdb/columns"]
};

const deprecated__34__migrationPadding = [{
  ...metadata,
  migrate(attributes) {
    return migratePadding(attributes);
  },
  save(_ref) {
    let {
      attributes
    } = _ref;
    const {
      shadow,
      backgroundColor,
      customBackgroundColor,
      paddingType
    } = attributes;
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('background-color', backgroundColor);
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-column', {
        'has-background': backgroundClass || customBackgroundColor,
        [backgroundClass]: backgroundClass,
        'has-shadow': shadow,
        [paddingType]: paddingType
      }),
      style: {
        backgroundColor: customBackgroundColor ? customBackgroundColor : undefined
      }
    });
    const containerProps = {
      className: 'ystdb-column-block-container'
    };
    const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps.save(containerProps);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps));
  }
}];
function migratePadding(attributes) {
  if (!attributes?.paddingType) {
    return attributes;
  }
  let newAttributes = attributes;
  const oldPadding = {
    'is-padding-small': '1rem',
    'is-padding-large': '1.5rem'
  };
  Object.keys(oldPadding).map(key => {
    if (key === newAttributes?.paddingType) {
      newAttributes = {
        ...newAttributes,
        padding: {
          desktop: {
            top: oldPadding[key],
            right: oldPadding[key],
            bottom: oldPadding[key],
            left: oldPadding[key]
          }
        }
      };
      delete newAttributes.paddingType;
      if (newAttributes?.className) {
        newAttributes.className = newAttributes.className.replace(key, '').trim();
      }
    }
    return true;
  });
  return newAttributes;
}

/***/ }),

/***/ "./blocks/columns/item/deprecated/index.js":
/*!*************************************************!*\
  !*** ./blocks/columns/item/deprecated/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deprecated": () => (/* binding */ deprecated)
/* harmony export */ });
/* harmony import */ var _deprecated_3_4_migration_padding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deprecated__3-4__migration-padding */ "./blocks/columns/item/deprecated/deprecated__3-4__migration-padding/index.js");
/* eslint-disable camelcase */

const deprecated = [..._deprecated_3_4_migration_padding__WEBPACK_IMPORTED_MODULE_0__.deprecated__34__migrationPadding];

/***/ }),

/***/ "./blocks/columns/item/edit.js":
/*!*************************************!*\
  !*** ./blocks/columns/item/edit.js ***!
  \*************************************/
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
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aktk_components_responsive_spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aktk/components/responsive-spacing */ "./src/js/components/responsive-spacing/index.js");
/* harmony import */ var _aktk_components_responsive_values__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aktk/components/responsive-values */ "./src/js/components/responsive-values/index.js");
/* harmony import */ var _inspector_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector-controls */ "./blocks/columns/item/inspector-controls/index.js");
/* harmony import */ var _function_auto_width__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./function/auto-width */ "./blocks/columns/item/function/auto-width.js");


/**
 * WordPress.
 */


/**
 * yStandard.
 */


/**
 * Block.
 */


function ColumnEdit(props) {
  const {
    attributes,
    backgroundColor,
    className
  } = props;
  const {
    shadow,
    padding,
    width,
    isAutoWidth
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-column', className, {
      'has-background': backgroundColor.color,
      [backgroundColor.class]: backgroundColor.class,
      'has-shadow': shadow,
      'has-column-width': !!width,
      ...(0,_function_auto_width__WEBPACK_IMPORTED_MODULE_7__.getAutoWidthClasses)(isAutoWidth)
    }),
    style: {
      backgroundColor: backgroundColor.color,
      ...(0,_aktk_components_responsive_spacing__WEBPACK_IMPORTED_MODULE_4__.getResponsivePaddingStyle)(padding),
      ...(0,_aktk_components_responsive_values__WEBPACK_IMPORTED_MODULE_5__.getResponsiveWidthStyle)(width),
      ...(0,_aktk_components_responsive_values__WEBPACK_IMPORTED_MODULE_5__.getResponsiveValueStyle)('flex-basis', width)
    }
  });
  const containerProps = {
    className: 'ystdb-column-block-container'
  };
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)(containerProps, {
    templateLock: false,
    renderAppender: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.ButtonBlockAppender, null)
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_controls__WEBPACK_IMPORTED_MODULE_6__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.withColors)('backgroundColor')])(ColumnEdit));

/***/ }),

/***/ "./blocks/columns/item/function/auto-width.js":
/*!****************************************************!*\
  !*** ./blocks/columns/item/function/auto-width.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAutoWidthClasses": () => (/* binding */ getAutoWidthClasses)
/* harmony export */ });
/* harmony import */ var _aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aktk/helper/responsive */ "./src/js/helper/responsive.js");

const getAutoWidthClasses = isAutoWidth => {
  const desktop = (0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_0__.getResponsiveValue)(isAutoWidth, 'desktop');
  const tablet = (0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_0__.getResponsiveValue)(isAutoWidth, 'tablet');
  const mobile = (0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_0__.getResponsiveValue)(isAutoWidth, 'mobile');
  return {
    'is-auto-width-desktop': desktop,
    'is-auto-width-tablet': tablet,
    'is-auto-width-mobile': mobile
  };
};

/***/ }),

/***/ "./blocks/columns/item/inspector-controls/background/index.js":
/*!********************************************************************!*\
  !*** ./blocks/columns/item/inspector-controls/background/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



const PanelBackground = props => {
  const {
    backgroundColor,
    setBackgroundColor
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('背景設定', 'ystandard-blocks'),
    colorSettings: [{
      value: backgroundColor.color,
      onChange: color => {
        setBackgroundColor(color);
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('背景色', 'ystandard-blocks')
    }]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelBackground);

/***/ }),

/***/ "./blocks/columns/item/inspector-controls/index.js":
/*!*********************************************************!*\
  !*** ./blocks/columns/item/inspector-controls/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background */ "./blocks/columns/item/inspector-controls/background/index.js");
/* harmony import */ var _padding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./padding */ "./blocks/columns/item/inspector-controls/padding/index.js");
/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shadow */ "./blocks/columns/item/inspector-controls/shadow/index.js");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./size */ "./blocks/columns/item/inspector-controls/size/index.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./link */ "./blocks/columns/item/inspector-controls/link/index.js");







const InspectorControls = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_background__WEBPACK_IMPORTED_MODULE_2__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_size__WEBPACK_IMPORTED_MODULE_5__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_padding__WEBPACK_IMPORTED_MODULE_3__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_shadow__WEBPACK_IMPORTED_MODULE_4__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_link__WEBPACK_IMPORTED_MODULE_6__["default"], props));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InspectorControls);

/***/ }),

/***/ "./blocks/columns/item/inspector-controls/link/index.js":
/*!**************************************************************!*\
  !*** ./blocks/columns/item/inspector-controls/link/index.js ***!
  \**************************************************************/
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aktk_components_link_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aktk/components/link-control */ "./src/js/components/link-control/index.js");
/* harmony import */ var _aktk_components_notice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aktk/components/notice */ "./src/js/components/notice/index.js");






const PanelLink = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    linkTarget,
    rel,
    url,
    screenReaderText
  } = attributes;
  const handleOnLinkChange = newValue => {
    setAttributes(newValue);
  };
  const onSetLinkRel = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(value => {
    setAttributes({
      rel: value
    });
  }, [setAttributes]);
  const onSetScreenReaderText = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(value => {
    setAttributes({
      screenReaderText: value
    });
  }, [setAttributes]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('リンク設定(β)', 'ystandard-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_notice__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: _aktk_components_notice__WEBPACK_IMPORTED_MODULE_4__.noticeType.warning,
    style: {
      fontSize: '12px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('リンクの設定をした場合、公開ページでカラム内のテキストを選択できない状態になります。', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('※この機能は現在β版機能です。', 'ystandard-blocks')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_link_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: {
      url,
      linkTarget,
      rel
    },
    onChange: handleOnLinkChange
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    className: 'ystdb-column-editor__link-rel',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('リンク rel 属性', 'ystandard-blocks'),
    value: rel || '',
    onChange: onSetLinkRel
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    className: 'ystdb-column-editor__link-rel',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('スクリーンリーダーテキスト', 'ystandard-blocks'),
    value: screenReaderText || '',
    onChange: onSetScreenReaderText
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelLink);

/***/ }),

/***/ "./blocks/columns/item/inspector-controls/padding/index.js":
/*!*****************************************************************!*\
  !*** ./blocks/columns/item/inspector-controls/padding/index.js ***!
  \*****************************************************************/
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aktk_controls_responsive_padding_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aktk/controls/responsive-padding-control */ "./src/js/controls/responsive-padding-control/index.js");

/**
 * WordPress.
 */


/**
 * yStandard.
 */

const PanelPadding = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    padding
  } = attributes;
  const handlePaddingOnChange = value => {
    setAttributes({
      padding: value
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('余白設定', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_controls_responsive_padding_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    values: padding,
    onChange: handlePaddingOnChange
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelPadding);

/***/ }),

/***/ "./blocks/columns/item/inspector-controls/shadow/index.js":
/*!****************************************************************!*\
  !*** ./blocks/columns/item/inspector-controls/shadow/index.js ***!
  \****************************************************************/
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress.
 */


const PanelShadow = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    shadow
  } = attributes;
  const handleOnClick = value => {
    setAttributes({
      shadow: value
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('影設定', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('影をつける', 'ystandard-blocks'),
    checked: shadow,
    onChange: () => {
      handleOnClick(!shadow);
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelShadow);

/***/ }),

/***/ "./blocks/columns/item/inspector-controls/size/auto-width.js":
/*!*******************************************************************!*\
  !*** ./blocks/columns/item/inspector-controls/size/auto-width.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aktk_components_responsive_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aktk/components/responsive-toggle */ "./src/js/components/responsive-toggle/index.js");
/* harmony import */ var _aktk_components_notice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aktk/components/notice */ "./src/js/components/notice/index.js");
/* harmony import */ var _aktk_helper_object_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aktk/helper/object.js */ "./src/js/helper/object.js");

/**
 * WordPress
 */

/**
 * yStandard.
 */



const AutoWidth = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    isAutoWidth,
    width
  } = attributes;
  const handleOnChange = value => {
    setAttributes({
      isAutoWidth: value
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_responsive_toggle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    panelLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('幅自動調整', 'ystandard-blocks'),
    toggleLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('幅を自動で伸縮する', 'ystandard-blocks'),
    values: isAutoWidth,
    onChange: handleOnChange
  }), (0,_aktk_helper_object_js__WEBPACK_IMPORTED_MODULE_4__.isObject)(isAutoWidth) && (0,_aktk_helper_object_js__WEBPACK_IMPORTED_MODULE_4__.isObject)(width) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_notice__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: _aktk_components_notice__WEBPACK_IMPORTED_MODULE_3__.noticeType.warning
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('「カラム幅」と「幅を自動で伸縮する」を両方指定した場合、「カラム幅」が優先されます。', 'ystandard-blocks'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoWidth);

/***/ }),

/***/ "./blocks/columns/item/inspector-controls/size/index.js":
/*!**************************************************************!*\
  !*** ./blocks/columns/item/inspector-controls/size/index.js ***!
  \**************************************************************/
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _width__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./width */ "./blocks/columns/item/inspector-controls/size/width.js");
/* harmony import */ var _auto_width__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auto-width */ "./blocks/columns/item/inspector-controls/size/auto-width.js");

/**
 * WordPress.
 */




const PanelSize = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('カラムサイズ設定', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_width__WEBPACK_IMPORTED_MODULE_3__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_auto_width__WEBPACK_IMPORTED_MODULE_4__["default"], props));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelSize);

/***/ }),

/***/ "./blocks/columns/item/inspector-controls/size/width.js":
/*!**************************************************************!*\
  !*** ./blocks/columns/item/inspector-controls/size/width.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aktk_components_responsive_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aktk/components/responsive-values */ "./src/js/components/responsive-values/index.js");

/**
 * WordPress.
 */

/**
 * yStandard.
 */

const Width = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    width
  } = attributes;
  const handleWidthOnChange = value => {
    setAttributes({
      width: value
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_responsive_values__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('カラム幅', 'ystandard-blocks'),
    values: width,
    onChange: handleWidthOnChange
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Width);

/***/ }),

/***/ "./blocks/columns/item/save.js":
/*!*************************************!*\
  !*** ./blocks/columns/item/save.js ***!
  \*************************************/
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
/* harmony import */ var _aktk_components_responsive_spacing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aktk/components/responsive-spacing */ "./src/js/components/responsive-spacing/index.js");
/* harmony import */ var _aktk_components_responsive_values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aktk/components/responsive-values */ "./src/js/components/responsive-values/index.js");
/* harmony import */ var _function_auto_width__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./function/auto-width */ "./blocks/columns/item/function/auto-width.js");


/**
 * WordPress.
 */

/**
 * yStandard.
 */



function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    shadow,
    backgroundColor,
    customBackgroundColor,
    padding,
    width,
    isAutoWidth,
    linkTarget,
    rel,
    url,
    screenReaderText
  } = attributes;
  const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('background-color', backgroundColor);
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-column', {
      'has-background': backgroundClass || customBackgroundColor,
      [backgroundClass]: backgroundClass,
      'has-shadow': shadow,
      'has-column-width': !!width,
      ...(0,_function_auto_width__WEBPACK_IMPORTED_MODULE_5__.getAutoWidthClasses)(isAutoWidth)
    }),
    style: {
      backgroundColor: customBackgroundColor ? customBackgroundColor : undefined,
      ...(0,_aktk_components_responsive_spacing__WEBPACK_IMPORTED_MODULE_3__.getResponsivePaddingStyle)(padding),
      ...(0,_aktk_components_responsive_values__WEBPACK_IMPORTED_MODULE_4__.getResponsiveWidthStyle)(width),
      ...(0,_aktk_components_responsive_values__WEBPACK_IMPORTED_MODULE_4__.getResponsiveValueStyle)('flex-basis', width)
    }
  });
  const containerProps = {
    className: 'ystdb-column-block-container'
  };
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps.save(containerProps);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps), !!url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: url,
    className: "ystdb-column__link",
    target: linkTarget,
    rel: rel
  }, screenReaderText && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ystdb-column__link-screen-reader-text"
  }, screenReaderText)));
}

/***/ }),

/***/ "./src/js/components/box-control/index.js":
/*!************************************************!*\
  !*** ./src/js/components/box-control/index.js ***!
  \************************************************/
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


const BoxControl = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, props);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxControl);

/***/ }),

/***/ "./src/js/components/button-reset/index.js":
/*!*************************************************!*\
  !*** ./src/js/components/button-reset/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const ButtonReset = _ref => {
  let {
    onClick,
    label,
    isDisable,
    ...props
  } = _ref;
  const _label = label !== null && label !== void 0 ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('リセット', 'ystandard-blocks');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    isSecondary: true,
    isSmall: true,
    disabled: !!isDisable,
    onClick: onClick
  }, props), _label));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonReset);

/***/ }),

/***/ "./src/js/components/flex/index.js":
/*!*****************************************!*\
  !*** ./src/js/components/flex/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Flex": () => (/* binding */ Flex),
/* harmony export */   "FlexItem": () => (/* binding */ FlexItem)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const Flex = _ref => {
  let {
    children,
    ...props
  } = _ref;
  const {
    justifyBetween,
    justifyCenter,
    justifyRight,
    justifyLeft,
    alignTop,
    alignCenter,
    alignBottom,
    gap,
    isGapSmall,
    isGapLarge
  } = props;
  let justifyContent;
  let alignItems;
  let _gap;
  if (justifyBetween) {
    justifyContent = 'space-between';
  }
  if (justifyCenter) {
    justifyContent = 'center';
  }
  if (justifyRight) {
    justifyContent = 'flex-end';
  }
  if (justifyLeft) {
    justifyContent = 'flex-start';
  }
  if (alignTop) {
    alignItems = 'flex-start';
  }
  if (alignCenter) {
    alignItems = 'center';
  }
  if (alignBottom) {
    alignItems = 'flex-end';
  }
  if (isGapSmall) {
    _gap = '0.5em';
  }
  if (isGapLarge) {
    _gap = '1em';
  }
  if (gap) {
    _gap = gap;
  }
  const blockProps = {
    style: {
      display: 'flex',
      justifyContent,
      alignItems,
      gap: _gap,
      ...props?.style
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, children);
};
const FlexItem = _ref2 => {
  let {
    children,
    ...props
  } = _ref2;
  const {
    flexGrow,
    flexShrink,
    flexBasis
  } = props;
  const blockProps = {
    style: {
      flexGrow,
      flexShrink,
      flexBasis,
      ...props?.style
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, children);
};

/***/ }),

/***/ "./src/js/components/link-control/index.js":
/*!*************************************************!*\
  !*** ./src/js/components/link-control/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_editor.scss */ "./src/js/components/link-control/_editor.scss");




const NEW_TAB_REL = 'noreferrer noopener';
const LinkControl = _ref => {
  let {
    value,
    onChange,
    ...props
  } = _ref;
  const {
    linkTarget,
    rel,
    url
  } = value;
  const opensInNewTab = linkTarget === '_blank';
  const handleOnChange = _ref2 => {
    let {
      url: newURL = '',
      opensInNewTab: newOpensInNewTab
    } = _ref2;
    let updatedRel = rel;
    let newLinkTarget = linkTarget;
    if (opensInNewTab !== newOpensInNewTab) {
      newLinkTarget = newOpensInNewTab ? '_blank' : undefined;
      if (newLinkTarget && !rel) {
        updatedRel = NEW_TAB_REL;
      } else if (!newLinkTarget && rel === NEW_TAB_REL) {
        updatedRel = undefined;
      }
    }
    onChange({
      url: newURL,
      linkTarget: newLinkTarget,
      rel: updatedRel
    });
  };
  function unlink() {
    onChange({
      url: undefined,
      linkTarget: undefined,
      rel: undefined
    });
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: 'aktk-link-control'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalLinkControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value: {
      url,
      opensInNewTab
    },
    onChange: handleOnChange,
    onRemove: () => {
      unlink();
    }
  }, props)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkControl);

/***/ }),

/***/ "./src/js/components/notice/index.js":
/*!*******************************************!*\
  !*** ./src/js/components/notice/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "noticeType": () => (/* binding */ noticeType)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


const noticeType = {
  info: 'info',
  warning: 'warning',
  error: 'error',
  help: 'help'
};
const Notice = _ref => {
  let {
    children,
    type,
    className,
    ...props
  } = _ref;
  const _noticeType = type || 'info';
  const wrapProps = {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystd-component-notice', className, `is-${_noticeType}`),
    ...props
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", wrapProps, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notice);

/***/ }),

/***/ "./src/js/components/responsive-spacing/index.js":
/*!*******************************************************!*\
  !*** ./src/js/components/responsive-spacing/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getResponsiveGapStyle": () => (/* binding */ getResponsiveGapStyle),
/* harmony export */   "getResponsiveMarginStyle": () => (/* binding */ getResponsiveMarginStyle),
/* harmony export */   "getResponsivePaddingStyle": () => (/* binding */ getResponsivePaddingStyle),
/* harmony export */   "getResponsiveSpacingStyle": () => (/* binding */ getResponsiveSpacingStyle)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aktk_components_box_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aktk/components/box-control */ "./src/js/components/box-control/index.js");
/* harmony import */ var _aktk_components_responsive_tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aktk/components/responsive-tab */ "./src/js/components/responsive-tab/index.js");
/* harmony import */ var _aktk_components_responsive_values_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aktk/components/responsive-values-info */ "./src/js/components/responsive-values-info/index.js");
/* harmony import */ var _aktk_helper_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aktk/helper/config */ "./src/js/helper/config.js");
/* harmony import */ var _aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aktk/helper/responsive */ "./src/js/helper/responsive.js");
/* harmony import */ var _aktk_helper_spacing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @aktk/helper/spacing */ "./src/js/helper/spacing.js");
/* harmony import */ var _aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @aktk/helper/object */ "./src/js/helper/object.js");
/* harmony import */ var _aktk_helper_gap_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @aktk/helper/gap.js */ "./src/js/helper/gap.js");


/**
 * WordPress.
 */


/**
 * yStandard.
 */








const ResponsiveSpacing = props => {
  const {
    label,
    values,
    onChange,
    units,
    inputProps,
    splitOnAxis
  } = props;
  const _units = units !== null && units !== void 0 ? units : (0,_aktk_helper_config__WEBPACK_IMPORTED_MODULE_7__.getComponentConfig)('units');
  const valueDesktop = (0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_8__.getResponsiveValue)(values, 'desktop');
  const valueTablet = (0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_8__.getResponsiveValue)(values, 'tablet');
  const valueMobile = (0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_8__.getResponsiveValue)(values, 'mobile');
  const handleOnChangeDesktop = nextValues => {
    onChange((0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_8__.parseResponsiveValues)({
      ...values,
      desktop: (0,_aktk_helper_spacing__WEBPACK_IMPORTED_MODULE_9__.parseSpacing)(nextValues)
    }));
  };
  const handleOnChangeTablet = nextValues => {
    onChange((0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_8__.parseResponsiveValues)({
      ...values,
      tablet: (0,_aktk_helper_spacing__WEBPACK_IMPORTED_MODULE_9__.parseSpacing)(nextValues)
    }));
  };
  const handleOnChangeMobile = nextValues => {
    onChange((0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_8__.parseResponsiveValues)({
      ...values,
      mobile: (0,_aktk_helper_spacing__WEBPACK_IMPORTED_MODULE_9__.parseSpacing)(nextValues)
    }));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_responsive_tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: label
  }, tab => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, _aktk_components_responsive_tab__WEBPACK_IMPORTED_MODULE_5__.tabType.desktop === tab.name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'ystd-responsive-spacing-box-control'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_box_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('デスクトップ', 'responsive-component', 'ystandard-toolbox'),
      values: valueDesktop,
      onChange: handleOnChangeDesktop,
      units: _units,
      inputProps: inputProps,
      splitOnAxis: splitOnAxis
    })), _aktk_components_responsive_tab__WEBPACK_IMPORTED_MODULE_5__.tabType.tablet === tab.name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'ystd-responsive-spacing-box-control'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_box_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('タブレット', 'responsive-component', 'ystandard-toolbox'),
      values: valueTablet,
      onChange: handleOnChangeTablet,
      units: _units,
      inputProps: inputProps,
      splitOnAxis: splitOnAxis
    })), _aktk_components_responsive_tab__WEBPACK_IMPORTED_MODULE_5__.tabType.mobile === tab.name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'ystd-responsive-spacing-box-control'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_box_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('モバイル', 'responsive-component', 'ystandard-toolbox'),
      values: valueMobile,
      onChange: handleOnChangeMobile,
      units: _units,
      inputProps: inputProps,
      splitOnAxis: splitOnAxis
    })));
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_responsive_values_info__WEBPACK_IMPORTED_MODULE_6__["default"], {
    desktop: (0,_aktk_helper_spacing__WEBPACK_IMPORTED_MODULE_9__.getSpacingInfo)(valueDesktop),
    tablet: (0,_aktk_helper_spacing__WEBPACK_IMPORTED_MODULE_9__.getSpacingInfo)(valueTablet),
    mobile: (0,_aktk_helper_spacing__WEBPACK_IMPORTED_MODULE_9__.getSpacingInfo)(valueMobile),
    style: {
      marginTop: 0
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveSpacing);
const getCustomProperty = function (value, device) {
  let _isResponsive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  let suffix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  const prefix = '--ystdb';
  const _suffix = suffix ? `-${suffix}` : '';
  if (!(0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__.isObject)(value)) {
    return undefined;
  }
  let result = {};
  Object.keys(value).map(key => {
    const propertyName = _isResponsive ? `${prefix}-${key}${_suffix}-${device}` : (0,lodash__WEBPACK_IMPORTED_MODULE_1__.camelCase)(key);
    result = {
      ...result,
      [propertyName]: value[key]
    };
    return true;
  });
  return result;
};
const getResponsiveSpacingCustomProperty = function (value) {
  let suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (!(0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__.isObject)(value)) {
    return undefined;
  }
  return {
    ...getCustomProperty(value?.desktop, 'desktop', (0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_8__.isResponsive)(value), suffix),
    ...getCustomProperty(value?.tablet, 'tablet', (0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_8__.isResponsive)(value), suffix),
    ...getCustomProperty(value?.mobile, 'mobile', (0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_8__.isResponsive)(value), suffix)
  };
};
const getResponsiveGapCustomProperty = function (value) {
  let suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (!(0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__.isObject)(value)) {
    return undefined;
  }
  return {
    ...getCustomProperty((0,_aktk_helper_gap_js__WEBPACK_IMPORTED_MODULE_11__.getGapProperty)(value?.desktop), 'desktop', (0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_8__.isResponsive)(value), suffix),
    ...getCustomProperty((0,_aktk_helper_gap_js__WEBPACK_IMPORTED_MODULE_11__.getGapProperty)(value?.tablet), 'tablet', (0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_8__.isResponsive)(value), suffix),
    ...getCustomProperty((0,_aktk_helper_gap_js__WEBPACK_IMPORTED_MODULE_11__.getGapProperty)(value?.mobile), 'mobile', (0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_8__.isResponsive)(value), suffix)
  };
};
const getResponsiveSpacingStyle = function (type, values) {
  let suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  const parsedValue = (0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_8__.parseResponsiveValues)({
    desktop: (0,_aktk_helper_spacing__WEBPACK_IMPORTED_MODULE_9__.getSpacingProps)(type, values?.desktop),
    tablet: (0,_aktk_helper_spacing__WEBPACK_IMPORTED_MODULE_9__.getSpacingProps)(type, values?.tablet),
    mobile: (0,_aktk_helper_spacing__WEBPACK_IMPORTED_MODULE_9__.getSpacingProps)(type, values?.mobile)
  });
  return (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__.parseObject)(getResponsiveSpacingCustomProperty(parsedValue, suffix));
};
const getResponsiveGapStyle = function (values) {
  let suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_10__.parseObject)(getResponsiveGapCustomProperty(values, suffix));
};
const getResponsivePaddingStyle = function (values) {
  let suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return getResponsiveSpacingStyle('padding', values, suffix);
};
const getResponsiveMarginStyle = function (values) {
  let suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return getResponsiveSpacingStyle('margin', values, suffix);
};

/***/ }),

/***/ "./src/js/components/responsive-tab/index.js":
/*!***************************************************!*\
  !*** ./src/js/components/responsive-tab/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "tabType": () => (/* binding */ tabType)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/monitor.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/tablet.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/smartphone.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




const tabType = {
  desktop: 'desktop',
  tablet: 'tablet',
  mobile: 'mobile'
};
const ResponsiveTab = _ref => {
  let {
    label,
    activeClass,
    onSelect,
    children
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystd-responsive-tab"
  }, !!label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystd-responsive-tab__label')
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystd-responsive-tab__panel', {
      'has-label': !!label
    }),
    activeClass: activeClass,
    onSelect: onSelect,
    tabs: [{
      name: tabType.desktop,
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_feather__WEBPACK_IMPORTED_MODULE_3__["default"], null),
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystd-responsive-tab__tab-button')
    }, {
      name: tabType.tablet,
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_feather__WEBPACK_IMPORTED_MODULE_4__["default"], null),
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystd-responsive-tab__tab-button')
    }, {
      name: tabType.mobile,
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_feather__WEBPACK_IMPORTED_MODULE_5__["default"], null),
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystd-responsive-tab__tab-button')
    }]
  }, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveTab);

/***/ }),

/***/ "./src/js/components/responsive-toggle/index.js":
/*!******************************************************!*\
  !*** ./src/js/components/responsive-toggle/index.js ***!
  \******************************************************/
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aktk_components_responsive_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aktk/components/responsive-tab */ "./src/js/components/responsive-tab/index.js");
/* harmony import */ var _aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aktk/helper/responsive */ "./src/js/helper/responsive.js");
/* harmony import */ var _aktk_components_responsive_values_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aktk/components/responsive-values-info */ "./src/js/components/responsive-values-info/index.js");

/**
 * WordPress
 */


/**
 * yStandard.
 */



const ResponsiveToggle = _ref => {
  let {
    panelLabel,
    toggleLabel,
    values,
    onChange,
    valuesInfoLabel = undefined
  } = _ref;
  const _valuesInfoLabel = valuesInfoLabel !== null && valuesInfoLabel !== void 0 ? valuesInfoLabel : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('ON', 'responsive-toggle', 'ystandard-blocks');
  const valueDesktop = (0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_4__.getResponsiveValue)(values, 'desktop');
  const valueTablet = (0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_4__.getResponsiveValue)(values, 'tablet');
  const valueMobile = (0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_4__.getResponsiveValue)(values, 'mobile');
  const handleOnChangeDesktop = value => {
    onChange((0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_4__.parseResponsiveValues)({
      ...values,
      desktop: value || undefined
    }));
  };
  const handleOnChangeTablet = value => {
    onChange((0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_4__.parseResponsiveValues)({
      ...values,
      tablet: value || undefined
    }));
  };
  const handleOnChangeMobile = value => {
    onChange((0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_4__.parseResponsiveValues)({
      ...values,
      mobile: value || undefined
    }));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_responsive_tab__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: panelLabel
  }, tab => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, _aktk_components_responsive_tab__WEBPACK_IMPORTED_MODULE_3__.tabType.desktop === tab.name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
      label: toggleLabel,
      checked: !!valueDesktop,
      onChange: value => {
        handleOnChangeDesktop(value);
      }
    }), _aktk_components_responsive_tab__WEBPACK_IMPORTED_MODULE_3__.tabType.tablet === tab.name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
      label: toggleLabel,
      checked: !!valueTablet,
      onChange: value => {
        handleOnChangeTablet(value);
      }
    }), _aktk_components_responsive_tab__WEBPACK_IMPORTED_MODULE_3__.tabType.mobile === tab.name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
      label: toggleLabel,
      checked: !!valueMobile,
      onChange: value => {
        handleOnChangeMobile(value);
      }
    }));
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_responsive_values_info__WEBPACK_IMPORTED_MODULE_5__["default"], {
    desktop: !!valueDesktop ? _valuesInfoLabel : undefined,
    tablet: !!valueTablet ? _valuesInfoLabel : undefined,
    mobile: !!valueMobile ? _valuesInfoLabel : undefined
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveToggle);

/***/ }),

/***/ "./src/js/components/responsive-values-info/index.js":
/*!***********************************************************!*\
  !*** ./src/js/components/responsive-values-info/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/monitor.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/tablet.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/smartphone.js");



const ResponsiveValuesInfo = _ref => {
  let {
    desktop,
    tablet,
    mobile,
    ...props
  } = _ref;
  if (!tablet && !mobile) {
    return null;
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: 'ystd-responsive-values-info'
  }, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(react_feather__WEBPACK_IMPORTED_MODULE_2__["default"], null), desktop || '-'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(react_feather__WEBPACK_IMPORTED_MODULE_3__["default"], null), tablet || '-'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(react_feather__WEBPACK_IMPORTED_MODULE_4__["default"], null), mobile || '-'));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveValuesInfo);

/***/ }),

/***/ "./src/js/components/responsive-values/index.js":
/*!******************************************************!*\
  !*** ./src/js/components/responsive-values/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getResponsiveHeightStyle": () => (/* binding */ getResponsiveHeightStyle),
/* harmony export */   "getResponsiveValueStyle": () => (/* binding */ getResponsiveValueStyle),
/* harmony export */   "getResponsiveWidthStyle": () => (/* binding */ getResponsiveWidthStyle)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aktk_components_responsive_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aktk/components/responsive-tab */ "./src/js/components/responsive-tab/index.js");
/* harmony import */ var _aktk_helper_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aktk/helper/config */ "./src/js/helper/config.js");
/* harmony import */ var _aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aktk/helper/responsive */ "./src/js/helper/responsive.js");
/* harmony import */ var _aktk_components_unit_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aktk/components/unit-control */ "./src/js/components/unit-control/index.js");
/* harmony import */ var _aktk_components_responsive_values_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aktk/components/responsive-values-info */ "./src/js/components/responsive-values-info/index.js");
/* harmony import */ var _aktk_components_button_reset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @aktk/components/button-reset */ "./src/js/components/button-reset/index.js");
/* harmony import */ var _aktk_components_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @aktk/components/flex */ "./src/js/components/flex/index.js");
/* harmony import */ var _aktk_helper_object_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @aktk/helper/object.js */ "./src/js/helper/object.js");


/**
 * WordPress
 */


/**
 * yStandard
 */








const ResponsiveValues = _ref => {
  let {
    label,
    values,
    onChange,
    units = undefined
  } = _ref;
  const _units = units !== null && units !== void 0 ? units : (0,_aktk_helper_config__WEBPACK_IMPORTED_MODULE_5__.getComponentConfig)('units');
  const valueDesktop = (0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_6__.getResponsiveValue)(values, 'desktop');
  const valueTablet = (0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_6__.getResponsiveValue)(values, 'tablet');
  const valueMobile = (0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_6__.getResponsiveValue)(values, 'mobile');
  const handleOnChangeDesktop = value => {
    onChange((0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_6__.parseResponsiveValues)({
      ...values,
      desktop: value || undefined
    }));
  };
  const handleOnChangeTablet = value => {
    onChange((0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_6__.parseResponsiveValues)({
      ...values,
      tablet: value || undefined
    }));
  };
  const handleOnChangeMobile = value => {
    onChange((0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_6__.parseResponsiveValues)({
      ...values,
      mobile: value || undefined
    }));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_responsive_tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: label
  }, tab => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, _aktk_components_responsive_tab__WEBPACK_IMPORTED_MODULE_4__.tabType.desktop === tab.name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_flex__WEBPACK_IMPORTED_MODULE_10__.Flex, {
      isGapSmall: true,
      alignBottom: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: 'ystd-responsive-values-unit-control',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__._x)('デスクトップ', 'responsive-component', 'ystandard-toolbox'),
      value: valueDesktop,
      onChange: handleOnChangeDesktop,
      units: _units
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_button_reset__WEBPACK_IMPORTED_MODULE_9__["default"], {
      isDisable: !valueDesktop,
      onClick: () => {
        handleOnChangeDesktop(undefined);
      }
    })), _aktk_components_responsive_tab__WEBPACK_IMPORTED_MODULE_4__.tabType.tablet === tab.name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_flex__WEBPACK_IMPORTED_MODULE_10__.Flex, {
      isGapSmall: true,
      alignBottom: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: 'ystd-responsive-values-unit-control',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__._x)('タブレット', 'responsive-component', 'ystandard-toolbox'),
      value: valueTablet,
      onChange: handleOnChangeTablet,
      units: _units
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_button_reset__WEBPACK_IMPORTED_MODULE_9__["default"], {
      isDisable: !valueTablet,
      onClick: () => {
        handleOnChangeTablet(undefined);
      }
    })), _aktk_components_responsive_tab__WEBPACK_IMPORTED_MODULE_4__.tabType.mobile === tab.name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_flex__WEBPACK_IMPORTED_MODULE_10__.Flex, {
      isGapSmall: true,
      alignBottom: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: 'ystd-responsive-values-unit-control',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__._x)('モバイル', 'responsive-component', 'ystandard-toolbox'),
      value: valueMobile,
      onChange: handleOnChangeMobile,
      units: _units
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_button_reset__WEBPACK_IMPORTED_MODULE_9__["default"], {
      isDisable: !valueMobile,
      onClick: () => {
        handleOnChangeMobile(undefined);
      }
    })));
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_responsive_values_info__WEBPACK_IMPORTED_MODULE_8__["default"], {
    desktop: valueDesktop,
    tablet: valueTablet,
    mobile: valueMobile
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveValues);
const getCustomProperties = function (propertyName, values) {
  let suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  const prefix = '--ystdb';
  const _suffix = suffix ? `-${suffix}` : '';
  if (!(0,_aktk_helper_object_js__WEBPACK_IMPORTED_MODULE_11__.isObject)(values)) {
    return undefined;
  }
  if (!(0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_6__.isResponsive)(values)) {
    return {
      [(0,lodash__WEBPACK_IMPORTED_MODULE_1__.camelCase)(propertyName)]: values?.desktop
    };
  }
  let result = {};
  Object.keys(values).map(key => {
    const _propertyName = `${prefix}-${propertyName}${_suffix}-${key}`;
    result = {
      ...result,
      [_propertyName]: values[key]
    };
    return true;
  });
  return result;
};
const getResponsiveValueStyle = function (propertyName, values) {
  let suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  const parsedValue = (0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_6__.parseResponsiveValues)({
    desktop: values?.desktop,
    tablet: values?.tablet,
    mobile: values?.mobile
  });
  return (0,_aktk_helper_object_js__WEBPACK_IMPORTED_MODULE_11__.parseObject)(getCustomProperties(propertyName, parsedValue, suffix));
};
const getResponsiveWidthStyle = function (values) {
  let suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return getResponsiveValueStyle('width', values, suffix);
};
const getResponsiveHeightStyle = function (values) {
  let suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return getResponsiveValueStyle('height', values, suffix);
};

/***/ }),

/***/ "./src/js/components/unit-control/index.js":
/*!*************************************************!*\
  !*** ./src/js/components/unit-control/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



const UnitControl = _ref => {
  let {
    label,
    value,
    onChange,
    units,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: label,
    value: value,
    onChange: onChange,
    units: units
  }, props));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnitControl);

/***/ }),

/***/ "./src/js/config/config.js":
/*!*********************************!*\
  !*** ./src/js/config/config.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ystdbConfig": () => (/* reexport safe */ _index__WEBPACK_IMPORTED_MODULE_0__.ystdbConfig)
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
/* harmony export */   "ystdbConfig": () => (/* binding */ ystdbConfig)
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

/***/ "./src/js/controls/responsive-padding-control/index.js":
/*!*************************************************************!*\
  !*** ./src/js/controls/responsive-padding-control/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aktk_components_responsive_spacing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aktk/components/responsive-spacing */ "./src/js/components/responsive-spacing/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aktk/helper/responsive */ "./src/js/helper/responsive.js");






const ResponsivePaddingControl = _ref => {
  let {
    label,
    values,
    onChange,
    ...props
  } = _ref;
  const handleOnChange = newValue => {
    onChange((0,_aktk_helper_responsive__WEBPACK_IMPORTED_MODULE_5__.getResponsiveValues)(newValue));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_aktk_components_responsive_spacing__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('内側余白(padding)', 'ystandard-toolbox'),
    values: values,
    onChange: handleOnChange
  }, props)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsivePaddingControl);

/***/ }),

/***/ "./src/js/helper/attribute.js":
/*!************************************!*\
  !*** ./src/js/helper/attribute.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultAttributes": () => (/* binding */ getDefaultAttributes),
/* harmony export */   "mergeDefaultAttributes": () => (/* binding */ mergeDefaultAttributes)
/* harmony export */ });
const getDefaultAttributes = () => {
  if (!window.ystdtbBlockEditor || 'object' !== typeof window.ystdtbBlockEditor) {
    return {};
  }
  if (!window.ystdtbBlockEditor.hasOwnProperty('defaultAttributes')) {
    return {};
  }
  return window.ystdtbBlockEditor.defaultAttributes;
};
const mergeDefaultAttributes = (name, attributes) => {
  const defaultAttributes = getDefaultAttributes();
  if (!defaultAttributes) {
    return attributes;
  }
  if (!defaultAttributes.hasOwnProperty(name)) {
    return attributes;
  }
  const blockDefaultAttr = defaultAttributes[name];
  Object.keys(blockDefaultAttr).map(key => {
    if (attributes.hasOwnProperty(key)) {
      attributes[key].default = blockDefaultAttr[key];
    }
    return blockDefaultAttr;
  });
  return attributes;
};

/***/ }),

/***/ "./src/js/helper/config.js":
/*!*********************************!*\
  !*** ./src/js/helper/config.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBlockEditorConfig": () => (/* binding */ getBlockEditorConfig),
/* harmony export */   "getComponentConfig": () => (/* binding */ getComponentConfig),
/* harmony export */   "getConfig": () => (/* binding */ getConfig)
/* harmony export */ });
/* harmony import */ var _aktk_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aktk/config/config */ "./src/js/config/config.js");

const getConfig = name => {
  return _aktk_config_config__WEBPACK_IMPORTED_MODULE_0__.ystdbConfig[name];
};
const getComponentConfig = name => {
  return _aktk_config_config__WEBPACK_IMPORTED_MODULE_0__.ystdbConfig.component[name];
};
const getBlockEditorConfig = function (name) {
  let defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  if (!window.ystdb || 'object' !== typeof window.ystdb) {
    return defaultValue;
  }
  if (!window.ystdb.hasOwnProperty(name)) {
    return defaultValue;
  }
  return window.ystdb[name];
};

/***/ }),

/***/ "./src/js/helper/gap.js":
/*!******************************!*\
  !*** ./src/js/helper/gap.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGapProperty": () => (/* binding */ getGapProperty)
/* harmony export */ });
function getGapProperty(value) {
  if (!value || 'object' !== typeof value) {
    return undefined;
  }
  const top = value?.top;
  const right = value?.right;
  if (!top || !right) {
    return undefined;
  }
  if (top === right) {
    return {
      gap: top
    };
  }
  return {
    'row-gap': top,
    'column-gap': right
  };
}

/***/ }),

/***/ "./src/js/helper/object.js":
/*!*********************************!*\
  !*** ./src/js/helper/object.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProperty": () => (/* binding */ getProperty),
/* harmony export */   "hasKey": () => (/* binding */ hasKey),
/* harmony export */   "hasObjectKey": () => (/* binding */ hasObjectKey),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "object2Array": () => (/* binding */ object2Array),
/* harmony export */   "objectCopy": () => (/* binding */ objectCopy),
/* harmony export */   "parseObject": () => (/* binding */ parseObject)
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
const getProperty = function (obj, key) {
  let defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  if (!hasKey(obj, key)) {
    return defaultValue;
  }
  return obj[key];
};
const objectCopy = obj => {
  return JSON.parse(JSON.stringify(obj));
};

/***/ }),

/***/ "./src/js/helper/responsive.js":
/*!*************************************!*\
  !*** ./src/js/helper/responsive.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResponsiveValue": () => (/* binding */ getResponsiveValue),
/* harmony export */   "getResponsiveValues": () => (/* binding */ getResponsiveValues),
/* harmony export */   "isResponsive": () => (/* binding */ isResponsive),
/* harmony export */   "parseResponsiveValues": () => (/* binding */ parseResponsiveValues),
/* harmony export */   "responsiveKeys": () => (/* binding */ responsiveKeys)
/* harmony export */ });
const responsiveKeys = {
  desktop: 'desktop',
  tablet: 'tablet',
  mobile: 'mobile'
};
const isResponsive = values => {
  if (!values || 'object' !== typeof values) {
    return false;
  }
  return values.hasOwnProperty('tablet') || values.hasOwnProperty('mobile');
};
const getResponsiveValue = (values, key) => {
  if (!values || 'object' !== typeof values) {
    return undefined;
  }
  let result = values.hasOwnProperty(key) ? values[key] : {};
  if ('object' === typeof result) {
    result = 0 < Object.keys(result).length ? result : undefined;
  }
  return result;
};
const getResponsiveValues = values => {
  if (!values || 'object' !== typeof values) {
    return undefined;
  }
  let result = {};
  if (values?.desktop) {
    result = {
      ...result,
      desktop: values.desktop
    };
  }
  if (values?.tablet) {
    result = {
      ...result,
      tablet: values.tablet
    };
  }
  if (values?.mobile) {
    result = {
      ...result,
      mobile: values.mobile
    };
  }
  return 0 < Object.keys(result).length ? result : undefined;
};
const parseResponsiveValues = function (values) {
  let arrowFalsy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!values || 'object' !== typeof values) {
    return undefined;
  }
  let result = {};
  Object.keys(responsiveKeys).map(key => {
    if (values.hasOwnProperty(key)) {
      if (arrowFalsy) {
        result = {
          ...result,
          [key]: values[key]
        };
      } else if (!!values[key]) {
        result = {
          ...result,
          [key]: values[key]
        };
      }
    }
    return true;
  });
  return 0 < Object.keys(result).length ? result : undefined;
};

/***/ }),

/***/ "./src/js/helper/spacing.js":
/*!**********************************!*\
  !*** ./src/js/helper/spacing.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSpacingInfo": () => (/* binding */ getSpacingInfo),
/* harmony export */   "getSpacingProps": () => (/* binding */ getSpacingProps),
/* harmony export */   "parseSpacing": () => (/* binding */ parseSpacing)
/* harmony export */ });
const getSpacingProps = (type, value) => {
  if (!value || 'object' !== typeof value) {
    return undefined;
  }
  const top = value?.top || '';
  const right = value?.right || '';
  const bottom = value?.bottom || '';
  const left = value?.left || '';
  // 全部共通.
  if (!!top && [right, bottom, left].every(x => x === top)) {
    return {
      [`${type}`]: top
    };
  }
  // 上下・左右.
  if (!!top && top === bottom && !!right && right === left) {
    return {
      [`${type}`]: `${top} ${right}`
    };
  }
  // 上・左右・下
  if (!!top && !!right && right === left && !!bottom) {
    return {
      [`${type}`]: `${top} ${right} ${bottom}`
    };
  }
  // 全部あるけどバラバラ.
  if (!!top && !!right && !!left && !!bottom) {
    return {
      [`${type}`]: `${top} ${right} ${bottom} ${left}`
    };
  }
  let result = {};
  if (top) {
    result = {
      ...result,
      [`${type}-top`]: top
    };
  }
  if (right) {
    result = {
      ...result,
      [`${type}-right`]: right
    };
  }
  if (bottom) {
    result = {
      ...result,
      [`${type}-bottom`]: bottom
    };
  }
  if (left) {
    result = {
      ...result,
      [`${type}-left`]: left
    };
  }
  return result;
};
const parseSpacing = spacing => {
  if (!spacing || 'object' !== typeof spacing) {
    return undefined;
  }
  if (!spacing?.top && !spacing?.right && !spacing?.bottom && !spacing?.left) {
    return undefined;
  }
  return spacing;
};
const getSpacingInfo = spacing => {
  if (!spacing || 'object' !== typeof spacing) {
    return undefined;
  }
  const top = spacing?.top || '-';
  const right = spacing?.right || '-';
  const bottom = spacing?.bottom || '-';
  const left = spacing?.left || '-';
  if ([right, bottom, left].every(x => x === top)) {
    return `${top}`;
  }
  if (top === bottom && left === right) {
    return `${top} ${right}`;
  }
  if (top && left === right && bottom) {
    return `${top} ${right} ${bottom}`;
  }
  return `${top} ${right} ${bottom} ${left}`;
};

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

/***/ "./src/js/components/link-control/_editor.scss":
/*!*****************************************************!*\
  !*** ./src/js/components/link-control/_editor.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./node_modules/react-feather/dist/icons/columns.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/columns.js ***!
  \**********************************************************/
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



var Columns = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
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
    d: "M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"
  }));
});
Columns.propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])
};
Columns.displayName = 'Columns';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Columns);

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/monitor.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/monitor.js ***!
  \**********************************************************/
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



var Monitor = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
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
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "2",
    y: "3",
    width: "20",
    height: "14",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "8",
    y1: "21",
    x2: "16",
    y2: "21"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12",
    y2: "21"
  }));
});
Monitor.propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])
};
Monitor.displayName = 'Monitor';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Monitor);

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/smartphone.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/smartphone.js ***!
  \*************************************************************/
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



var Smartphone = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
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
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "5",
    y: "2",
    width: "14",
    height: "20",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  }));
});
Smartphone.propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])
};
Smartphone.displayName = 'Smartphone';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Smartphone);

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/tablet.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/tablet.js ***!
  \*********************************************************/
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



var Tablet = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
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
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "4",
    y: "2",
    width: "16",
    height: "20",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  }));
});
Tablet.propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])
};
Tablet.displayName = 'Tablet';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tablet);

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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
/*!**************************************!*\
  !*** ./blocks/columns/item/index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerColumn": () => (/* binding */ registerColumn)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/columns.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aktk_config_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aktk/config/config.js */ "./src/js/config/config.js");
/* harmony import */ var _aktk_helper_attribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aktk/helper/attribute */ "./src/js/helper/attribute.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./blocks/columns/item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save */ "./blocks/columns/item/save.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deprecated */ "./blocks/columns/item/deprecated/index.js");


/**
 * WordPress.
 */


/**
 * yStandard.
 */


/**
 * Block.
 */


const metadata = {
  $schema: "https://raw.githubusercontent.com/WordPress/gutenberg/trunk/schemas/json/block.json",
  apiVersion: 2,
  name: "ystdb/column",
  title: "\u30AB\u30E9\u30E0",
  description: "\u30AB\u30B9\u30BF\u30E0\u30AB\u30E9\u30E0\u7528\u30AB\u30E9\u30E0\u30D6\u30ED\u30C3\u30AF",
  attributes: {
    backgroundColor: {
      type: "string"
    },
    customBackgroundColor: {
      type: "string"
    },
    shadow: {
      type: "boolean"
    },
    padding: {
      type: "object"
    },
    width: {
      type: "object"
    },
    isAutoWidth: {
      type: "object"
    },
    url: {
      type: "string",
      source: "attribute",
      selector: ".ystdb-column__link",
      attribute: "href"
    },
    linkTarget: {
      type: "string",
      source: "attribute",
      selector: ".ystdb-column__link",
      attribute: "target"
    },
    rel: {
      type: "string",
      source: "attribute",
      selector: ".ystdb-column__link",
      attribute: "rel"
    },
    screenReaderText: {
      type: "string",
      source: "text",
      selector: ".ystdb-column__link-screen-reader-text"
    }
  },
  supports: {
    align: false,
    className: false
  },
  parent: ["ystdb/columns"]
};

function registerColumn() {
  const attributes = (0,_aktk_helper_attribute__WEBPACK_IMPORTED_MODULE_4__.mergeDefaultAttributes)(metadata.name, metadata.attributes);
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(metadata.name, {
    ...metadata,
    ...{
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('カラム', 'ystandard-blocks'),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('yStandard Blocks カラムブロック', 'ystandard-blocks'),
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_feather__WEBPACK_IMPORTED_MODULE_8__["default"], {
        stroke: _aktk_config_config_js__WEBPACK_IMPORTED_MODULE_3__.ystdbConfig.color.iconForeground,
        style: {
          fill: 'none'
        }
      }),
      category: _aktk_config_config_js__WEBPACK_IMPORTED_MODULE_3__.ystdbConfig.category.common,
      attributes,
      edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],
      save: _save__WEBPACK_IMPORTED_MODULE_6__["default"],
      example: {},
      deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_7__.deprecated
    }
  });
}
registerColumn();
})();

/******/ })()
;
//# sourceMappingURL=column.js.map