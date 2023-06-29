/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/section/attributes/attributes.js":
/*!*************************************************!*\
  !*** ./blocks/section/attributes/attributes.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const attributes = {
  align: {
    type: 'string',
    default: 'full'
  },
  marginTop: {
    type: 'number',
    default: 0
  },
  marginTopResponsive: {
    type: 'bool',
    default: false
  },
  marginTopMobile: {
    type: 'number',
    default: 0
  },
  marginBottom: {
    type: 'number',
    default: 0
  },
  marginBottomResponsive: {
    type: 'bool',
    default: false
  },
  marginBottomMobile: {
    type: 'number',
    default: 0
  },
  paddingTop: {
    type: 'number',
    default: 80
  },
  paddingTopResponsive: {
    type: 'bool',
    default: false
  },
  paddingTopMobile: {
    type: 'number',
    default: 0
  },
  paddingBottom: {
    type: 'number',
    default: 80
  },
  paddingBottomResponsive: {
    type: 'bool',
    default: false
  },
  paddingBottomMobile: {
    type: 'number',
    default: 0
  },
  paddingLeft: {
    type: 'number',
    default: 0
  },
  paddingLeftResponsive: {
    type: 'bool',
    default: false
  },
  paddingLeftMobile: {
    type: 'number',
    default: 0
  },
  paddingRight: {
    type: 'number',
    default: 0
  },
  paddingRightResponsive: {
    type: 'bool',
    default: false
  },
  paddingRightMobile: {
    type: 'number',
    default: 0
  },
  paddingRightPreferred: {
    type: 'number',
    default: 10
  },
  backgroundColor: {
    type: 'string'
  },
  customBackgroundColor: {
    type: 'string'
  },
  gradient: {
    type: 'string'
  },
  customGradient: {
    type: 'string'
  },
  useCustomOverlaySize: {
    type: 'bool',
    default: false
  },
  overlaySizeX: {
    type: 'string',
    default: '100'
  },
  overlaySizeUnitX: {
    type: 'string',
    default: '%'
  },
  overlaySizeY: {
    type: 'string',
    default: '100'
  },
  overlaySizeUnitY: {
    type: 'string',
    default: '%'
  },
  overlayPositionX: {
    type: 'string',
    default: 'top'
  },
  overlayPositionValueX: {
    type: 'string',
    default: '0'
  },
  overlayPositionUnitX: {
    type: 'string',
    default: '%'
  },
  overlayPositionY: {
    type: 'string',
    default: 'left'
  },
  overlayPositionValueY: {
    type: 'string',
    default: '0'
  },
  overlayPositionUnitY: {
    type: 'string',
    default: '%'
  },
  backgroundImageOpacity: {
    type: 'integer',
    default: 100
  },
  backgroundType: {
    type: 'string',
    default: 'image'
  },
  focalPoint: {
    type: 'object'
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
  backgroundImageParallax: {
    type: 'bool',
    default: false
  },
  backgroundImageSize: {
    type: 'string'
  },
  backgroundImageSizeX: {
    type: 'string'
  },
  backgroundImageSizeUnitX: {
    type: 'string',
    default: 'px'
  },
  backgroundImageSizeY: {
    type: 'string'
  },
  backgroundImageSizeUnitY: {
    type: 'string',
    default: 'px'
  },
  backgroundImageRepeat: {
    type: 'string',
    default: 'no-repeat'
  },
  backgroundImageOnOverlay: {
    type: 'bool',
    default: false
  },
  backgroundImageOnOverlayOpacity: {
    type: 'integer',
    default: 80
  },
  textColor: {
    type: 'string'
  },
  customTextColor: {
    type: 'string'
  },
  dividerTypeTop: {
    type: 'string',
    default: 'skew'
  },
  dividerTopReverse: {
    type: 'bool',
    default: false
  },
  dividerTopResponsive: {
    type: 'bool',
    default: false
  },
  dividerLevelTop: {
    type: 'number',
    default: 0
  },
  dividerLevelTopMobile: {
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
  dividerBottomReverse: {
    type: 'bool',
    default: false
  },
  dividerBottomResponsive: {
    type: 'bool',
    default: false
  },
  dividerLevelBottom: {
    type: 'number',
    default: 0
  },
  dividerLevelBottomMobile: {
    type: 'number',
    default: 0
  },
  dividerColorBottom: {
    type: 'string'
  },
  customDividerColorBottom: {
    type: 'string'
  },
  innerCustomWidth: {
    type: 'integer',
    default: 0
  },
  screenHeightMode: {
    type: 'bool',
    default: false
  },
  sectionMinHeight: {
    type: 'number',
    default: 0
  },
  animationType: {
    type: 'string',
    default: 'none'
  },
  animationSpeed: {
    type: 'number',
    default: 2
  },
  animationDelay: {
    type: 'number',
    default: 0
  },
  wrapperTag: {
    type: 'string',
    default: 'div'
  },
  containerFluid: {
    type: 'bool',
    default: false
  },
  borderColor: {
    type: 'string'
  },
  customBorderColor: {
    type: 'string'
  },
  borderSize: {
    type: 'string'
  },
  borderStyle: {
    type: 'string'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./blocks/section/block-controls/container-fluid.js":
/*!**********************************************************!*\
  !*** ./blocks/section/block-controls/container-fluid.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/maximize-2.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




const ContainerFluid = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    containerFluid,
    align
  } = attributes;
  if ('full' !== align) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_feather__WEBPACK_IMPORTED_MODULE_3__["default"], null),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('画面幅まで広げる', 'ystandard-blocks'),
    onClick: () => {
      setAttributes({
        containerFluid: !containerFluid
      });
    },
    isPressed: containerFluid
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContainerFluid);

/***/ }),

/***/ "./blocks/section/block-controls/index.js":
/*!************************************************!*\
  !*** ./blocks/section/block-controls/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContainerFluid: () => (/* reexport safe */ _container_fluid__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _container_fluid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container-fluid */ "./blocks/section/block-controls/container-fluid.js");


/***/ }),

/***/ "./blocks/section/config.js":
/*!**********************************!*\
  !*** ./blocks/section/config.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BACKGROUND_TYPE_IMAGE: () => (/* binding */ BACKGROUND_TYPE_IMAGE),
/* harmony export */   BACKGROUND_TYPE_VIDEO: () => (/* binding */ BACKGROUND_TYPE_VIDEO),
/* harmony export */   animationTypes: () => (/* binding */ animationTypes),
/* harmony export */   attributes: () => (/* reexport safe */ _attributes_attributes__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   backgroundImageRepeatOption: () => (/* binding */ backgroundImageRepeatOption),
/* harmony export */   backgroundImageSizeOption: () => (/* binding */ backgroundImageSizeOption),
/* harmony export */   backgroundImageSizeUnitOption: () => (/* binding */ backgroundImageSizeUnitOption),
/* harmony export */   dividerPath: () => (/* binding */ dividerPath),
/* harmony export */   dividerTypes: () => (/* binding */ dividerTypes),
/* harmony export */   marginType: () => (/* binding */ marginType),
/* harmony export */   overlayPositionXOption: () => (/* binding */ overlayPositionXOption),
/* harmony export */   overlayPositionYOption: () => (/* binding */ overlayPositionYOption),
/* harmony export */   overlaySizeUnitOption: () => (/* binding */ overlaySizeUnitOption),
/* harmony export */   supports: () => (/* binding */ supports),
/* harmony export */   wrapperTagNames: () => (/* binding */ wrapperTagNames)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_js_util_getNum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/js/util/_getNum */ "./src/js/util/_getNum.js");
/* harmony import */ var _attributes_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes/attributes */ "./blocks/section/attributes/attributes.js");



/**
 * attributes
 */

const supports = {
  align: ['wide', 'full'],
  anchor: true,
  className: false,
  lightBlockWrapper: true
};
const BACKGROUND_TYPE_IMAGE = 'image';
const BACKGROUND_TYPE_VIDEO = 'video';

/**
 * マージン種類
 */
const marginType = {
  margin: [{
    value: 'normal',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('リセット', 'ystandard-blocks'),
    num: 0
  }, {
    value: 'wide',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('大', 'ystandard-blocks'),
    num: 80
  }, {
    value: 'narrow',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('小', 'ystandard-blocks'),
    num: 40
  }, {
    value: 'none',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('なし', 'ystandard-blocks'),
    num: 0
  }],
  padding: [{
    value: 'normal',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('リセット', 'ystandard-blocks'),
    num: 80
  }, {
    value: 'wide',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('大', 'ystandard-blocks'),
    num: 120
  }, {
    value: 'narrow',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('小', 'ystandard-blocks'),
    num: 40
  }, {
    value: 'none',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('なし', 'ystandard-blocks'),
    num: 0
  }],
  innerWidth: [{
    value: 'wide',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('ワイド', 'ystandard-blocks'),
    num: 800
  }, {
    value: 'narrow',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('スリム', 'ystandard-blocks'),
    num: 560
  }, {
    value: 'none',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('なし', 'ystandard-blocks'),
    num: 0
  }]
};
/**
 * オーバーレイサイズ・位置
 */
const overlaySizeUnitOption = [{
  value: 'px',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('px', 'ystandard-blocks')
}, {
  value: '%',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('%', 'ystandard-blocks')
}];
/**
 * オーバーレイ位置-縦
 */
const overlayPositionXOption = [{
  value: 'top',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('上', 'ystandard-blocks')
}, {
  value: 'bottom',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('下', 'ystandard-blocks')
}];
/**
 * オーバーレイ位置-横
 */
const overlayPositionYOption = [{
  value: 'left',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('左', 'ystandard-blocks')
}, {
  value: 'right',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('右', 'ystandard-blocks')
}];
/**
 * 背景画像サイズ
 */
const backgroundImageSizeOption = [{
  value: 'cover',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('cover', 'ystandard-blocks')
}, {
  value: 'contain',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('contain', 'ystandard-blocks')
}, {
  value: 'custom',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('カスタム', 'ystandard-blocks')
}];
/**
 * 背景画像サイズ単位
 */
const backgroundImageSizeUnitOption = [{
  value: 'px',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('px', 'ystandard-blocks')
}, {
  value: 'em',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('em', 'ystandard-blocks')
}, {
  value: 'rem',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('rem', 'ystandard-blocks')
}, {
  value: '%',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('%', 'ystandard-blocks')
}, {
  value: 'vw',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('vw', 'ystandard-blocks')
}, {
  value: 'vh',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('vh', 'ystandard-blocks')
}];

/**
 * 背景画像リピート
 */
const backgroundImageRepeatOption = [{
  value: 'no-repeat',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('なし', 'ystandard-blocks')
}, {
  value: 'repeat',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('あり', 'ystandard-blocks')
}, {
  value: 'repeat-x',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('あり（横）', 'ystandard-blocks')
}, {
  value: 'repeat-y',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('あり（縦）', 'ystandard-blocks')
}];

/**
 * HTMLタグ
 */
const wrapperTagNames = [{
  tag: 'div'
}, {
  tag: 'section'
}, {
  tag: 'aside'
}];
const dividerTypes = [{
  value: 'skew',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('斜め', 'ystandard-blocks')
}, {
  value: 'wave',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('波線', 'ystandard-blocks')
}, {
  value: 'triangle',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('三角形', 'ystandard-blocks')
}];
const animationTypes = [{
  label: 'なし',
  value: 'none'
}, {
  label: 'フェードイン',
  value: 'fadein'
}, {
  label: '上からフェードイン',
  value: 'fadein-down'
}, {
  label: '下からフェードイン',
  value: 'fadein-up'
}, {
  label: '左からフェードイン',
  value: 'fadein-left'
}, {
  label: '右からフェードイン',
  value: 'fadein-right'
}, {
  label: '縮小しながらフェードイン',
  value: 'fadein-shrink'
}, {
  label: '拡大しながらフェードイン',
  value: 'fadein-grow'
}];
const dividerPath = (type, level) => {
  let level1 = level;
  let level2 = level;
  let level3 = level;
  /**
   * 波線
   */
  level1 = 0 > level ? (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_1__["default"])(`${90 + level / 2}`, 50, 90) : (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_1__["default"])(`${90 - level / 2}`, 50, 90);
  level2 = level * 3 / 4;
  if ('wave' === type) {
    return `m0,${level1} q20,${level2} 40,0 t50,0 t50,0 t50,0 t50,0 V100 L0,100 z`;
  }
  /**
   * 三角形
   */
  level1 = 10 + Math.abs(level) * 0.4;
  level2 = 10 + Math.abs(level) * 0.9;
  level3 = 50 - level1;
  if ('triangle' === type) {
    return `m${level3},100 l${level1},-${level2} l${level1},${level2} z`;
  }
  /**
   * 斜め
   */
  level1 = 0 > level ? 100 : 0;
  level2 = 0 > level ? 100 + level : 100 - level;
  return `m${level1},${level2} L100,100 L0,100 z`;
};

/***/ }),

/***/ "./blocks/section/deprecated/__deprecated.js":
/*!***************************************************!*\
  !*** ./blocks/section/deprecated/__deprecated.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __deprecated: () => (/* binding */ __deprecated)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_js_util_getNum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/js/util/_getNum */ "./src/js/util/_getNum.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./blocks/section/config.js");






const blockAttributes = {
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
};
const __deprecated = [{
  attributes: {
    ...blockAttributes,
    marginTop: {
      type: 'integer',
      default: 2
    },
    marginBottom: {
      type: 'integer',
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
  },
  supports: {
    align: ['wide', 'full'],
    anchor: true,
    className: false
  },
  migrate(attributes) {
    return {
      ...attributes,
      marginTop: attributes.marginTop * 16,
      marginBottom: attributes.marginBottom * 16,
      paddingTop: attributes.paddingTop * 16,
      paddingBottom: attributes.paddingBottom * 16,
      paddingLeft: attributes.paddingLeft * 16,
      paddingRight: attributes.paddingRight * 16
    };
  },
  save({
    attributes
  }) {
    const {
      wrapperTag,
      backgroundColor,
      customBackgroundColor,
      textColor,
      customTextColor,
      marginTop,
      marginBottom,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      backgroundImageURL,
      backgroundImageOpacity,
      backgroundImageParallax,
      innerCustomWidth,
      dividerTypeTop,
      dividerLevelTop,
      dividerColorTop,
      customDividerColorTop,
      dividerTypeBottom,
      dividerLevelBottom,
      dividerColorBottom,
      customDividerColorBottom,
      screenHeightMode,
      sectionMinHeight,
      animationType,
      animationSpeed
    } = attributes;

    /**
     * HTMLタグ
     */
    const Wrapper = wrapperTag;

    /**
     * 色設定
     */
    const textColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('color', textColor);
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('background-color', backgroundColor);
    const dividerColorTopClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('fill', dividerColorTop);
    const dividerColorBottomClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('fill', dividerColorBottom);

    /**
     * アニメーション
     */
    const hasAnimation = animationType && 'none' !== animationType;

    /**
     * 背景関連
     */
    const showBgMask = backgroundImageURL || backgroundColor || customBackgroundColor;

    /**
     * セクションクラス名
     */
    const sectionClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-section', {
      'has-background-image': backgroundImageURL,
      'is-screen-height': screenHeightMode,
      'has-animation': hasAnimation,
      'has-parallax': backgroundImageParallax
    });
    const dataAnimation = hasAnimation ? animationType : undefined;
    /**
     * セクションスタイル
     */
    const sectionStyles = {
      color: textColorClass ? undefined : customTextColor,
      paddingTop: 0 === paddingTop ? 0 : paddingTop + 'rem',
      paddingBottom: 0 === paddingBottom ? 0 : paddingBottom + 'rem',
      marginTop: marginTop + 'rem',
      marginBottom: marginBottom + 'rem',
      backgroundImage: backgroundImageURL ? `url("${backgroundImageURL}")` : undefined,
      minHeight: sectionMinHeight ? sectionMinHeight + 'px' : undefined,
      paddingLeft: 0 < innerCustomWidth ? '1rem' : undefined,
      paddingRight: 0 < innerCustomWidth ? '1rem' : undefined,
      animationDuration: hasAnimation ? `${animationSpeed}s` : undefined
    };

    /**
     * 背景マスク
     */
    const bgMaskClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-section__bg', {
      'has-background': backgroundColor || customBackgroundColor,
      [backgroundClass]: backgroundClass
    });
    const bgMaskStyle = {
      backgroundColor: !backgroundClass && !customBackgroundColor ? '#000' : customBackgroundColor,
      opacity: backgroundImageOpacity / 100
    };

    /**
     * インナー
     */
    const innerClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-section__inner', {
      'has-text-color': textColorClass || customTextColor,
      [textColorClass]: textColorClass
    });
    const innerStyles = {
      maxWidth: 0 < innerCustomWidth ? innerCustomWidth : undefined,
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingLeft: 0 === paddingLeft ? 0 : paddingLeft + 'rem',
      paddingRight: 0 === paddingRight ? 0 : paddingRight + 'rem'
    };
    const divider = (type, position, level, colorClass, customColor) => {
      const dividerClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-section__divider', `ystdb-section__divider--${position}`, `ystdb-section__divider--${type}`);
      const path = (0,_config__WEBPACK_IMPORTED_MODULE_5__.dividerPath)(type, level);
      const svgClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-section__divider-image', {
        [colorClass]: colorClass
      });
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: dividerClass
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SVG, {
        className: svgClass,
        viewBox: "0 0 100 100",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
        d: path,
        strokewidth: "0",
        fill: customColor
      })));
    };
    const dividerTop = 0 !== dividerLevelTop && (dividerColorTopClass || customDividerColorTop);
    const dividerBottom = 0 !== dividerLevelBottom && (dividerColorBottomClass || customDividerColorBottom);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: sectionClass,
      style: sectionStyles,
      "data-animation": dataAnimation
    }, showBgMask && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: bgMaskClass,
      "aria-hidden": "true",
      role: "img",
      style: bgMaskStyle
    }, "\xA0"), dividerTop && divider(dividerTypeTop, 'top', dividerLevelTop, dividerColorTopClass, customDividerColorTop), dividerBottom && divider(dividerTypeBottom, 'bottom', dividerLevelBottom, dividerColorBottomClass, customDividerColorBottom), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-section__container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Wrapper, {
      className: innerClasses,
      style: innerStyles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null))));
  }
}, {
  attributes: {
    ...blockAttributes,
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
  migrate(attributes) {
    return {
      ...attributes,
      dividerLevelTop: attributes.backgroundSkew,
      dividerLevelBottom: attributes.backgroundSkew,
      animationType: 'none',
      animationSpeed: 3,
      backgroundImageParallax: false
    };
  },
  save({
    attributes
  }) {
    const {
      backgroundColor,
      textColor,
      customBackgroundColor,
      customTextColor,
      wrapperTag,
      marginTop,
      marginBottom,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      backgroundImageURL,
      backgroundImageOpacity,
      backgroundSkew,
      backgroundSkewWidth,
      innerCustomWidth
    } = attributes;
    /**
     * HTMLタグ
     */
    const Wrapper = wrapperTag;

    /**
     * 色設定
     */
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('color', textColor);
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('background-color', backgroundColor);
    /**
     * 背景関連
     */
    const hasBackground = (backgroundColor || customBackgroundColor) && !backgroundSkew;
    const hasBackgroundClass = backgroundClass && !backgroundSkew;
    const hasBackgroundImage = backgroundImageURL && !backgroundSkew;
    const hasBackgroundDim = backgroundImageURL && !backgroundSkew;
    const backgroundDimClass = 'has-background-dim-' + 10 * Math.round(backgroundImageOpacity / 10);

    /**
     * メインクラス名
     */
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-section', {
      'has-text-color': textColor || customTextColor,
      [textClass]: textClass,
      'has-background': hasBackground,
      [backgroundClass]: hasBackgroundClass,
      'has-background-image': hasBackgroundImage,
      'has-background-dim': hasBackgroundDim,
      [backgroundDimClass]: hasBackgroundDim,
      'has-background-skew': backgroundSkew
    });
    /**
     * インナーブロックのクラス名
     */
    const innerClasses = 'ystdb-section__inner';
    /**
     * セクションスタイル
     */
    const sectionStyles = {
      backgroundColor: backgroundClass || backgroundSkew ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      marginTop: 0 === marginTop ? 0 : marginTop + 'rem',
      marginBottom: 0 === marginBottom ? 0 : marginBottom + 'rem',
      paddingTop: 0 === paddingTop ? 0 : paddingTop + 'rem',
      paddingBottom: 0 === paddingBottom ? 0 : paddingBottom + 'rem',
      backgroundImage: hasBackgroundImage ? `url("${backgroundImageURL}")` : undefined,
      paddingLeft: '1rem',
      paddingRight: '1rem'
    };
    /**
     * インナーのスタイル
     */
    const innerStyles = {
      maxWidth: innerCustomWidth !== 0 ? innerCustomWidth : undefined,
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingLeft: 0 === paddingLeft ? 0 : paddingLeft + 'rem',
      paddingRight: 0 === paddingRight ? 0 : paddingRight + 'rem'
    };
    /**
     * 背景斜めのマスク
     */
    const skewMask = () => {
      if (backgroundSkew) {
        const backgroundSkewValue = backgroundSkew + 'deg';
        const skewStyle = {
          height: backgroundSkewWidth ? backgroundSkewWidth + '%' : undefined,
          backgroundColor: backgroundClass ? undefined : customBackgroundColor,
          transform: `skewY(${backgroundSkewValue}) translateY(-50%)`
        };
        const skewClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-section__mask', {
          'has-background': backgroundColor || customBackgroundColor,
          [backgroundClass]: backgroundClass
        });
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: skewClass,
          style: skewStyle
        });
      }
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classes,
      style: sectionStyles
    }, skewMask(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Wrapper, {
      className: innerClasses,
      style: innerStyles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)));
  }
}, {
  attributes: blockAttributes,
  migrate({
    marginTop,
    marginBottom,
    paddingTop,
    paddingBottom
  }) {
    return {
      marginTop: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_2__["default"])(marginTop, -10, 10, 0),
      marginBottom: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_2__["default"])(marginBottom, -10, 10, 0),
      paddingTop: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_2__["default"])(paddingTop, 0, 10),
      paddingBottom: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_2__["default"])(paddingBottom, 0, 10)
    };
  },
  save(props) {
    const {
      attributes
    } = props;
    const {
      backgroundColor,
      textColor,
      customBackgroundColor,
      customTextColor,
      wrapperTag,
      marginTop,
      marginBottom,
      paddingTop,
      paddingBottom,
      innerCustomWidth
    } = attributes;
    const Wrapper = wrapperTag;
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('color', textColor);
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('background-color', backgroundColor);
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-section', {
      'has-text-color': textColor || customTextColor,
      [textClass]: textClass,
      'has-background': backgroundColor || customBackgroundColor,
      [backgroundClass]: backgroundClass
    });
    const innerClasses = 'ystdb-section__inner';
    const sectionStyles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      'margin-top': marginTop,
      'margin-bottom': marginBottom,
      'padding-top': paddingTop,
      'padding-bottom': paddingBottom
    };
    const innerStyles = {
      'max-width': innerCustomWidth !== 0 ? innerCustomWidth : undefined,
      'margin-right': 'auto',
      'margin-left': 'auto'
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classes,
      style: sectionStyles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Wrapper, {
      className: innerClasses,
      style: innerStyles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)));
  }
}];

/***/ }),

/***/ "./blocks/section/deprecated/deprecated_2-4.js":
/*!*****************************************************!*\
  !*** ./blocks/section/deprecated/deprecated_2-4.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deprecated24: () => (/* binding */ deprecated24)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./blocks/section/config.js");





const deprecated24 = [{
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
      default: 0
    },
    marginBottom: {
      type: 'number',
      default: 0
    },
    paddingTop: {
      type: 'number',
      default: 80
    },
    paddingBottom: {
      type: 'number',
      default: 80
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
      default: 100
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
      default: 2
    }
  },
  migrate(attributes) {
    return {
      ...attributes,
      backgroundType: attributes.backgroundImageURL ? 'image' : undefined,
      dividerTopReverse: 0 > attributes.dividerLevelTop,
      dividerLevelTop: Math.abs(attributes.dividerLevelTop),
      dividerBottomReverse: 0 > attributes.dividerLevelBottom,
      dividerLevelBottom: Math.abs(attributes.dividerLevelBottom)
    };
  },
  supports: {
    align: ['wide', 'full'],
    anchor: true,
    className: false
  },
  save({
    attributes
  }) {
    const {
      wrapperTag,
      backgroundColor,
      customBackgroundColor,
      textColor,
      customTextColor,
      marginTop,
      marginBottom,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      backgroundImageURL,
      backgroundImageOpacity,
      backgroundImageParallax,
      innerCustomWidth,
      dividerTypeTop,
      dividerLevelTop,
      dividerColorTop,
      customDividerColorTop,
      dividerTypeBottom,
      dividerLevelBottom,
      dividerColorBottom,
      customDividerColorBottom,
      screenHeightMode,
      sectionMinHeight,
      animationType,
      animationSpeed
    } = attributes;

    /**
     * HTMLタグ
     */
    const Wrapper = wrapperTag;
    const marginUnit = 'px';
    const paddingUnit = 'px';

    /**
     * 色設定
     */
    const textColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', textColor);
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('background-color', backgroundColor);
    const dividerColorTopClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('fill', dividerColorTop);
    const dividerColorBottomClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('fill', dividerColorBottom);

    /**
     * アニメーション
     */
    const hasAnimation = animationType && 'none' !== animationType;

    /**
     * 背景関連
     */
    const showBgMask = backgroundImageURL || backgroundColor || customBackgroundColor;

    /**
     * セクションクラス名
     */
    const sectionClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-section', {
      'has-background-image': backgroundImageURL,
      'is-screen-height': screenHeightMode,
      'has-animation': hasAnimation,
      'has-parallax': backgroundImageParallax
    });
    const dataAnimation = hasAnimation ? animationType : undefined;
    /**
     * セクションスタイル
     */
    const sectionStyles = {
      color: textColorClass ? undefined : customTextColor,
      paddingTop: 0 === paddingTop ? 0 : paddingTop + paddingUnit,
      paddingBottom: 0 === paddingBottom ? 0 : paddingBottom + paddingUnit,
      marginTop: marginTop + marginUnit,
      marginBottom: marginBottom + marginUnit,
      backgroundImage: backgroundImageURL ? `url("${backgroundImageURL}")` : undefined,
      minHeight: sectionMinHeight ? sectionMinHeight + 'px' : undefined,
      paddingLeft: 0 < innerCustomWidth ? '1rem' : undefined,
      paddingRight: 0 < innerCustomWidth ? '1rem' : undefined,
      animationDuration: hasAnimation ? `${animationSpeed}s` : undefined
    };

    /**
     * 背景マスク
     */
    const bgMaskClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-section__bg', {
      'has-background': backgroundColor || customBackgroundColor,
      [backgroundClass]: backgroundClass
    });
    const bgMaskStyle = {
      backgroundColor: !backgroundClass && !customBackgroundColor ? '#000' : customBackgroundColor,
      opacity: backgroundImageOpacity / 100
    };

    /**
     * インナー
     */
    const innerClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-section__inner', {
      'has-text-color': textColorClass || customTextColor,
      [textColorClass]: textColorClass
    });
    const innerStyles = {
      maxWidth: 0 < innerCustomWidth ? innerCustomWidth : undefined,
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingLeft: 0 === paddingLeft ? 0 : paddingLeft + paddingUnit,
      paddingRight: 0 === paddingRight ? 0 : paddingRight + paddingUnit
    };
    const divider = (type, position, level, colorClass, customColor) => {
      const dividerClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-section__divider', `ystdb-section__divider--${position}`, `ystdb-section__divider--${type}`);
      const path = (0,_config__WEBPACK_IMPORTED_MODULE_4__.dividerPath)(type, level);
      const svgClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-section__divider-image', {
        [colorClass]: colorClass
      });
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: dividerClass
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SVG, {
        className: svgClass,
        viewBox: "0 0 100 100",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Path, {
        d: path,
        strokewidth: "0",
        fill: customColor
      })));
    };
    const dividerTop = 0 !== dividerLevelTop && (dividerColorTopClass || customDividerColorTop);
    const dividerBottom = 0 !== dividerLevelBottom && (dividerColorBottomClass || customDividerColorBottom);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: sectionClass,
      style: sectionStyles,
      "data-animation": dataAnimation
    }, showBgMask && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: bgMaskClass,
      "aria-hidden": "true",
      role: "img",
      style: bgMaskStyle
    }, "\xA0"), dividerTop && divider(dividerTypeTop, 'top', dividerLevelTop, dividerColorTopClass, customDividerColorTop), dividerBottom && divider(dividerTypeBottom, 'bottom', dividerLevelBottom, dividerColorBottomClass, customDividerColorBottom), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-section__container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Wrapper, {
      className: innerClasses,
      style: innerStyles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null))));
  }
}];

/***/ }),

/***/ "./blocks/section/deprecated/deprecated_2-5.js":
/*!*****************************************************!*\
  !*** ./blocks/section/deprecated/deprecated_2-5.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deprecated25: () => (/* binding */ deprecated25)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./blocks/section/config.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./blocks/section/shared.js");
/* harmony import */ var _src_js_util_getCssClamp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/js/util/_getCssClamp */ "./src/js/util/_getCssClamp.js");
/* harmony import */ var _src_js_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/js/util/_getDataClamp */ "./src/js/util/_getDataClamp.js");









const deprecated25 = [{
  attributes: {
    wrapperTag: {
      type: 'string',
      default: 'div'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    screenHeightMode: {
      type: 'bool',
      default: false
    },
    sectionMinHeight: {
      type: 'number',
      default: 0
    },
    paddingTop: {
      type: 'number',
      default: 80
    },
    paddingTopResponsive: {
      type: 'bool',
      default: false
    },
    paddingTopMobile: {
      type: 'number',
      default: 0
    },
    paddingBottom: {
      type: 'number',
      default: 80
    },
    paddingBottomResponsive: {
      type: 'bool',
      default: false
    },
    paddingBottomMobile: {
      type: 'number',
      default: 0
    },
    paddingLeft: {
      type: 'number',
      default: 0
    },
    paddingLeftResponsive: {
      type: 'bool',
      default: false
    },
    paddingLeftMobile: {
      type: 'number',
      default: 0
    },
    paddingRight: {
      type: 'number',
      default: 0
    },
    paddingRightResponsive: {
      type: 'bool',
      default: false
    },
    paddingRightMobile: {
      type: 'number',
      default: 0
    },
    paddingRightPreferred: {
      type: 'number',
      default: 10
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    gradient: {
      type: 'string'
    },
    customGradient: {
      type: 'string'
    },
    useCustomOverlaySize: {
      type: 'bool',
      default: false
    },
    overlaySizeX: {
      type: 'string',
      default: '100'
    },
    overlaySizeUnitX: {
      type: 'string',
      default: '%'
    },
    overlaySizeY: {
      type: 'string',
      default: '100'
    },
    overlaySizeUnitY: {
      type: 'string',
      default: '%'
    },
    overlayPositionX: {
      type: 'string',
      default: 'top'
    },
    overlayPositionValueX: {
      type: 'string',
      default: '0'
    },
    overlayPositionUnitX: {
      type: 'string',
      default: '%'
    },
    overlayPositionY: {
      type: 'string',
      default: 'left'
    },
    overlayPositionValueY: {
      type: 'string',
      default: '0'
    },
    overlayPositionUnitY: {
      type: 'string',
      default: '%'
    },
    backgroundImageOpacity: {
      type: 'integer',
      default: 100
    },
    marginTop: {
      type: 'number',
      default: 0
    },
    marginTopResponsive: {
      type: 'bool',
      default: false
    },
    marginTopMobile: {
      type: 'number',
      default: 0
    },
    marginBottom: {
      type: 'number',
      default: 0
    },
    marginBottomResponsive: {
      type: 'bool',
      default: false
    },
    marginBottomMobile: {
      type: 'number',
      default: 0
    },
    innerCustomWidth: {
      type: 'integer',
      default: 0
    },
    dividerTypeTop: {
      type: 'string',
      default: 'skew'
    },
    dividerTopReverse: {
      type: 'bool',
      default: false
    },
    dividerTopResponsive: {
      type: 'bool',
      default: false
    },
    dividerLevelTop: {
      type: 'number',
      default: 0
    },
    dividerLevelTopMobile: {
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
    dividerBottomReverse: {
      type: 'bool',
      default: false
    },
    dividerBottomResponsive: {
      type: 'bool',
      default: false
    },
    dividerLevelBottom: {
      type: 'number',
      default: 0
    },
    dividerLevelBottomMobile: {
      type: 'number',
      default: 0
    },
    dividerColorBottom: {
      type: 'string'
    },
    customDividerColorBottom: {
      type: 'string'
    },
    backgroundType: {
      type: 'string',
      default: 'image'
    },
    focalPoint: {
      type: 'object'
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
    backgroundImageParallax: {
      type: 'bool',
      default: false
    },
    backgroundImageSize: {
      type: 'string'
    },
    backgroundImageSizeX: {
      type: 'string'
    },
    backgroundImageSizeUnitX: {
      type: 'string',
      default: 'px'
    },
    backgroundImageSizeY: {
      type: 'string'
    },
    backgroundImageSizeUnitY: {
      type: 'string',
      default: 'px'
    },
    backgroundImageRepeat: {
      type: 'string',
      default: 'no-repeat'
    },
    backgroundImageOnOverlay: {
      type: 'bool',
      default: false
    },
    backgroundImageOnOverlayOpacity: {
      type: 'integer',
      default: 80
    },
    animationType: {
      type: 'string',
      default: 'none'
    },
    animationSpeed: {
      type: 'number',
      default: 2
    },
    animationDelay: {
      type: 'number',
      default: 0
    }
  },
  supports: {
    align: ['wide', 'full'],
    anchor: true,
    className: false
  },
  save({
    attributes
  }) {
    const {
      wrapperTag,
      backgroundColor,
      customBackgroundColor,
      textColor,
      customTextColor,
      marginTop,
      marginTopResponsive,
      marginTopMobile,
      marginBottom,
      marginBottomResponsive,
      marginBottomMobile,
      paddingTop,
      paddingTopResponsive,
      paddingTopMobile,
      paddingBottom,
      paddingBottomResponsive,
      paddingBottomMobile,
      paddingLeft,
      paddingLeftResponsive,
      paddingLeftMobile,
      paddingRight,
      paddingRightResponsive,
      paddingRightMobile,
      useCustomOverlaySize,
      overlaySizeX,
      overlaySizeUnitX,
      overlaySizeY,
      overlaySizeUnitY,
      overlayPositionX,
      overlayPositionValueX,
      overlayPositionUnitX,
      overlayPositionY,
      overlayPositionValueY,
      overlayPositionUnitY,
      gradient,
      customGradient,
      backgroundType,
      focalPoint,
      backgroundImageURL,
      backgroundImageOpacity,
      backgroundImageParallax,
      backgroundImageSize,
      backgroundImageSizeX,
      backgroundImageSizeUnitX,
      backgroundImageSizeY,
      backgroundImageSizeUnitY,
      backgroundImageRepeat,
      backgroundImageOnOverlay,
      backgroundImageOnOverlayOpacity,
      innerCustomWidth,
      dividerTypeTop,
      dividerTopReverse,
      dividerLevelTop,
      dividerTopResponsive,
      dividerLevelTopMobile,
      dividerColorTop,
      customDividerColorTop,
      dividerTypeBottom,
      dividerBottomReverse,
      dividerLevelBottom,
      dividerBottomResponsive,
      dividerLevelBottomMobile,
      dividerColorBottom,
      customDividerColorBottom,
      screenHeightMode,
      sectionMinHeight,
      animationType,
      animationSpeed,
      animationDelay
    } = attributes;

    /**
     * HTMLタグ
     */
    const Wrapper = wrapperTag;
    const marginUnit = 'px';
    const paddingUnit = 'px';
    const isImageBackground = _config__WEBPACK_IMPORTED_MODULE_5__.BACKGROUND_TYPE_IMAGE === backgroundType;
    const isVideoBackground = _config__WEBPACK_IMPORTED_MODULE_5__.BACKGROUND_TYPE_VIDEO === backgroundType;
    const showFocalPointPicker = isVideoBackground || isImageBackground && !backgroundImageParallax;
    const gradientClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalGetGradientClass)(gradient);

    /**
     * 色設定
     */
    const textColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('color', textColor);
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('background-color', backgroundColor);
    const dividerColorTopClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('fill', dividerColorTop);
    const dividerColorBottomClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('fill', dividerColorBottom);

    /**
     * アニメーション
     */
    const hasAnimation = animationType && 'none' !== animationType;

    /**
     * 背景画像
     */
    const backgroundImageStyles = {
      backgroundImage: backgroundImageURL && isImageBackground ? `url("${backgroundImageURL}")` : undefined,
      backgroundPosition: (0,_shared__WEBPACK_IMPORTED_MODULE_6__.getBackgroundPosition)(showFocalPointPicker, focalPoint),
      backgroundSize: (0,_shared__WEBPACK_IMPORTED_MODULE_6__.getBackgroundSize)(backgroundImageSize, backgroundImageSizeX, backgroundImageSizeY, backgroundImageSizeUnitX, backgroundImageSizeUnitY),
      backgroundRepeat: 'no-repeat' === backgroundImageRepeat ? undefined : backgroundImageRepeat
    };

    /**
     * 背景関連
     */
    const showBgMask = backgroundImageURL || backgroundColor || customBackgroundColor || gradientClass || customGradient;

    /**
     * セクションクラス名
     */
    const sectionClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section', {
      'has-background-image': backgroundImageURL,
      'is-screen-height': screenHeightMode,
      'has-animation': hasAnimation,
      'has-parallax': backgroundImageParallax
    });
    const dataAnimation = hasAnimation ? animationType : undefined;
    const getMargin = (useResponsive, desktop, mobile) => {
      if (!useResponsive) {
        if (0 === desktop) {
          return 0;
        }
        return undefined !== desktop ? `${desktop}px` : undefined;
      }
      return (0,_src_js_util_getCssClamp__WEBPACK_IMPORTED_MODULE_7__["default"])({
        desktop,
        mobile
      });
    };
    /**
     * セクションスタイル
     */
    let sectionStyles = {
      color: textColorClass ? undefined : customTextColor,
      paddingTop: getMargin(paddingTopResponsive, paddingTop, paddingTopMobile),
      paddingBottom: getMargin(paddingBottomResponsive, paddingBottom, paddingBottomMobile),
      paddingLeft: 0 < innerCustomWidth ? '1rem' : undefined,
      paddingRight: 0 < innerCustomWidth ? '1rem' : undefined,
      marginTop: getMargin(marginTopResponsive, marginTop, marginTopMobile),
      marginBottom: getMargin(marginBottomResponsive, marginBottom, marginBottomMobile),
      minHeight: sectionMinHeight ? sectionMinHeight + 'px' : undefined,
      animationDuration: hasAnimation ? `${animationSpeed}s` : undefined,
      animationDelay: hasAnimation && 0 < animationDelay ? `${animationDelay}s` : undefined
    };
    if (!backgroundImageOnOverlay) {
      sectionStyles = {
        ...sectionStyles,
        ...backgroundImageStyles
      };
    }
    const sectionClampData = {
      'margin-top': marginTopResponsive ? `${marginTop}${marginUnit}` : undefined,
      'margin-bottom': marginBottomResponsive ? `${marginBottom}${marginUnit}` : undefined,
      'padding-top': paddingTopResponsive ? `${paddingTop}${paddingUnit}` : undefined,
      'padding-bottom': paddingBottomResponsive ? `${paddingBottom}${paddingUnit}` : undefined
    };

    /**
     * 背景マスク
     */
    const bgMaskClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__bg', {
      'has-background': backgroundColor || customBackgroundColor,
      'has-background-gradient': gradient || customGradient,
      [backgroundClass]: backgroundClass,
      [gradientClass]: gradientClass,
      'is-custom-size': useCustomOverlaySize
    });
    const getMaskBackground = () => {
      if (customGradient) {
        return customGradient;
      }
      if (!backgroundClass && customBackgroundColor) {
        return customBackgroundColor;
      }
      return undefined;
    };
    const getMaskPosition = () => {
      if (!useCustomOverlaySize) {
        return {};
      }
      const posX = !!overlayPositionValueX ? `${overlayPositionValueX}${overlayPositionUnitX}` : 0;
      const posY = !!overlayPositionValueY ? `${overlayPositionValueY}${overlayPositionUnitY}` : 0;
      return {
        top: 'top' === overlayPositionX ? posX : undefined,
        bottom: 'bottom' === overlayPositionX ? posX : undefined,
        left: 'left' === overlayPositionY ? posY : undefined,
        right: 'right' === overlayPositionY ? posY : undefined
      };
    };
    const bgMaskStyle = {
      background: getMaskBackground(),
      opacity: backgroundImageOpacity / 100,
      width: useCustomOverlaySize && !!overlaySizeX ? `${overlaySizeX}${overlaySizeUnitX}` : undefined,
      height: useCustomOverlaySize && !!overlaySizeY ? `${overlaySizeY}${overlaySizeUnitY}` : undefined,
      ...getMaskPosition()
    };
    let overlayImageStyle = {
      opacity: backgroundImageOnOverlayOpacity / 100
    };
    if (backgroundImageOnOverlay) {
      overlayImageStyle = {
        ...overlayImageStyle,
        ...backgroundImageStyles
      };
    }

    /**
     * インナー
     */
    const innerClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__inner', {
      'has-text-color': textColorClass || customTextColor,
      [textColorClass]: textColorClass
    });
    const innerStyles = {
      maxWidth: 0 < innerCustomWidth ? innerCustomWidth : undefined,
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingLeft: getMargin(paddingLeftResponsive, paddingLeft, paddingLeftMobile),
      paddingRight: getMargin(paddingRightResponsive, paddingRight, paddingRightMobile)
    };
    const innerClampData = {
      'padding-left': paddingLeftResponsive ? `${paddingLeft}${paddingUnit}` : undefined,
      'padding-right': paddingRightResponsive ? `${paddingRight}${paddingUnit}` : undefined
    };
    const divider = attr => {
      const {
        type,
        reverse,
        position,
        level,
        colorClass,
        customColor,
        useResponsive,
        levelMobile
      } = attr;
      const dividerClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__divider', `ystdb-section__divider--${position}`, `ystdb-section__divider--${type}`);
      let pathLevel = level;
      if (reverse) {
        pathLevel = -1 * pathLevel;
      }
      if (useResponsive) {
        pathLevel = 0 > pathLevel ? -100 : 100;
      }
      const path = (0,_config__WEBPACK_IMPORTED_MODULE_5__.dividerPath)(type, pathLevel);
      const svgClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__divider-image', {
        [colorClass]: colorClass
      });
      const style = useResponsive ? {
        height: (0,_src_js_util_getCssClamp__WEBPACK_IMPORTED_MODULE_7__["default"])({
          desktop: Math.abs(level),
          mobile: Math.abs(levelMobile)
        })
      } : undefined;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: dividerClass
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: svgClass,
        viewBox: "0 0 100 100",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: 'none',
        style: style
      }, (0,_src_js_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__["default"])({
        height: useResponsive ? `${Math.abs(level)}px` : undefined
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
        d: path,
        fill: customColor
      })));
    };
    const dividerTop = 0 !== dividerLevelTop && (dividerColorTopClass || customDividerColorTop);
    const dividerBottom = 0 !== dividerLevelBottom && (dividerColorBottomClass || customDividerColorBottom);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: sectionClass,
      style: sectionStyles,
      "data-animation": dataAnimation
    }, (0,_src_js_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__["default"])(sectionClampData)), isVideoBackground && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("video", {
      className: "ystdb-section__video-background",
      autoPlay: true,
      muted: true,
      loop: true,
      src: backgroundImageURL,
      style: {
        objectPosition: (0,_shared__WEBPACK_IMPORTED_MODULE_6__.getBackgroundPosition)(showFocalPointPicker, focalPoint)
      }
    }), showBgMask && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: bgMaskClass,
      "aria-hidden": "true",
      role: "img",
      style: bgMaskStyle
    }, backgroundImageOnOverlay && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: 'ystdb-section__overlay-image',
      "aria-hidden": "true",
      role: "img",
      style: overlayImageStyle
    }, "\xA0"), "\xA0"), dividerTop && divider({
      type: dividerTypeTop,
      reverse: dividerTopReverse,
      position: 'top',
      level: Math.abs(dividerLevelTop),
      colorClass: dividerColorTopClass,
      customColor: customDividerColorTop,
      useResponsive: dividerTopResponsive,
      levelMobile: dividerLevelTopMobile
    }), dividerBottom && divider({
      type: dividerTypeBottom,
      reverse: dividerBottomReverse,
      position: 'bottom',
      level: Math.abs(dividerLevelBottom),
      colorClass: dividerColorBottomClass,
      customColor: customDividerColorBottom,
      useResponsive: dividerBottomResponsive,
      levelMobile: dividerLevelBottomMobile
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "ystdb-section__container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Wrapper, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: innerClasses,
      style: innerStyles
    }, (0,_src_js_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__["default"])(innerClampData)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null))));
  }
}];

/***/ }),

/***/ "./blocks/section/deprecated/deprecated_2-9-3.js":
/*!*******************************************************!*\
  !*** ./blocks/section/deprecated/deprecated_2-9-3.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deprecated293: () => (/* binding */ deprecated293)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./blocks/section/config.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./blocks/section/shared.js");
/* harmony import */ var _src_js_util_getCssClamp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/js/util/_getCssClamp */ "./src/js/util/_getCssClamp.js");
/* harmony import */ var _src_js_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/js/util/_getDataClamp */ "./src/js/util/_getDataClamp.js");









const deprecated293 = [{
  attributes: {
    animationType: {
      type: 'string',
      default: 'none'
    },
    animationSpeed: {
      type: 'number',
      default: 2
    },
    animationDelay: {
      type: 'number',
      default: 0
    },
    backgroundType: {
      type: 'string',
      default: 'image'
    },
    focalPoint: {
      type: 'object'
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
    backgroundImageParallax: {
      type: 'bool',
      default: false
    },
    backgroundImageSize: {
      type: 'string'
    },
    backgroundImageSizeX: {
      type: 'string'
    },
    backgroundImageSizeUnitX: {
      type: 'string',
      default: 'px'
    },
    backgroundImageSizeY: {
      type: 'string'
    },
    backgroundImageSizeUnitY: {
      type: 'string',
      default: 'px'
    },
    backgroundImageRepeat: {
      type: 'string',
      default: 'no-repeat'
    },
    backgroundImageOnOverlay: {
      type: 'bool',
      default: false
    },
    backgroundImageOnOverlayOpacity: {
      type: 'integer',
      default: 80
    },
    dividerTypeTop: {
      type: 'string',
      default: 'skew'
    },
    dividerTopReverse: {
      type: 'bool',
      default: false
    },
    dividerTopResponsive: {
      type: 'bool',
      default: false
    },
    dividerLevelTop: {
      type: 'number',
      default: 0
    },
    dividerLevelTopMobile: {
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
    dividerBottomReverse: {
      type: 'bool',
      default: false
    },
    dividerBottomResponsive: {
      type: 'bool',
      default: false
    },
    dividerLevelBottom: {
      type: 'number',
      default: 0
    },
    dividerLevelBottomMobile: {
      type: 'number',
      default: 0
    },
    dividerColorBottom: {
      type: 'string'
    },
    customDividerColorBottom: {
      type: 'string'
    },
    innerCustomWidth: {
      type: 'integer',
      default: 0
    },
    marginTop: {
      type: 'number',
      default: 0
    },
    marginTopResponsive: {
      type: 'bool',
      default: false
    },
    marginTopMobile: {
      type: 'number',
      default: 0
    },
    marginBottom: {
      type: 'number',
      default: 0
    },
    marginBottomResponsive: {
      type: 'bool',
      default: false
    },
    marginBottomMobile: {
      type: 'number',
      default: 0
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    gradient: {
      type: 'string'
    },
    customGradient: {
      type: 'string'
    },
    useCustomOverlaySize: {
      type: 'bool',
      default: false
    },
    overlaySizeX: {
      type: 'string',
      default: '100'
    },
    overlaySizeUnitX: {
      type: 'string',
      default: '%'
    },
    overlaySizeY: {
      type: 'string',
      default: '100'
    },
    overlaySizeUnitY: {
      type: 'string',
      default: '%'
    },
    overlayPositionX: {
      type: 'string',
      default: 'top'
    },
    overlayPositionValueX: {
      type: 'string',
      default: '0'
    },
    overlayPositionUnitX: {
      type: 'string',
      default: '%'
    },
    overlayPositionY: {
      type: 'string',
      default: 'left'
    },
    overlayPositionValueY: {
      type: 'string',
      default: '0'
    },
    overlayPositionUnitY: {
      type: 'string',
      default: '%'
    },
    backgroundImageOpacity: {
      type: 'integer',
      default: 100
    },
    paddingTop: {
      type: 'number',
      default: 80
    },
    paddingTopResponsive: {
      type: 'bool',
      default: false
    },
    paddingTopMobile: {
      type: 'number',
      default: 0
    },
    paddingBottom: {
      type: 'number',
      default: 80
    },
    paddingBottomResponsive: {
      type: 'bool',
      default: false
    },
    paddingBottomMobile: {
      type: 'number',
      default: 0
    },
    paddingLeft: {
      type: 'number',
      default: 0
    },
    paddingLeftResponsive: {
      type: 'bool',
      default: false
    },
    paddingLeftMobile: {
      type: 'number',
      default: 0
    },
    paddingRight: {
      type: 'number',
      default: 0
    },
    paddingRightResponsive: {
      type: 'bool',
      default: false
    },
    paddingRightMobile: {
      type: 'number',
      default: 0
    },
    paddingRightPreferred: {
      type: 'number',
      default: 10
    },
    screenHeightMode: {
      type: 'bool',
      default: false
    },
    sectionMinHeight: {
      type: 'number',
      default: 0
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    wrapperTag: {
      type: 'string',
      default: 'div'
    }
  },
  supports: {
    align: ['wide', 'full'],
    anchor: true,
    className: false,
    lightBlockWrapper: true
  },
  save({
    attributes
  }) {
    const {
      wrapperTag,
      backgroundColor,
      customBackgroundColor,
      textColor,
      customTextColor,
      marginTop,
      marginTopResponsive,
      marginTopMobile,
      marginBottom,
      marginBottomResponsive,
      marginBottomMobile,
      paddingTop,
      paddingTopResponsive,
      paddingTopMobile,
      paddingBottom,
      paddingBottomResponsive,
      paddingBottomMobile,
      paddingLeft,
      paddingLeftResponsive,
      paddingLeftMobile,
      paddingRight,
      paddingRightResponsive,
      paddingRightMobile,
      useCustomOverlaySize,
      overlaySizeX,
      overlaySizeUnitX,
      overlaySizeY,
      overlaySizeUnitY,
      overlayPositionX,
      overlayPositionValueX,
      overlayPositionUnitX,
      overlayPositionY,
      overlayPositionValueY,
      overlayPositionUnitY,
      gradient,
      customGradient,
      backgroundType,
      focalPoint,
      backgroundImageURL,
      backgroundImageOpacity,
      backgroundImageParallax,
      backgroundImageSize,
      backgroundImageSizeX,
      backgroundImageSizeUnitX,
      backgroundImageSizeY,
      backgroundImageSizeUnitY,
      backgroundImageRepeat,
      backgroundImageOnOverlay,
      backgroundImageOnOverlayOpacity,
      innerCustomWidth,
      dividerTypeTop,
      dividerTopReverse,
      dividerLevelTop,
      dividerTopResponsive,
      dividerLevelTopMobile,
      dividerColorTop,
      customDividerColorTop,
      dividerTypeBottom,
      dividerBottomReverse,
      dividerLevelBottom,
      dividerBottomResponsive,
      dividerLevelBottomMobile,
      dividerColorBottom,
      customDividerColorBottom,
      screenHeightMode,
      sectionMinHeight,
      animationType,
      animationSpeed,
      animationDelay
    } = attributes;

    /**
     * HTMLタグ
     */
    const Wrapper = wrapperTag;
    const marginUnit = 'px';
    const paddingUnit = 'px';
    const isImageBackground = _config__WEBPACK_IMPORTED_MODULE_5__.BACKGROUND_TYPE_IMAGE === backgroundType;
    const isVideoBackground = _config__WEBPACK_IMPORTED_MODULE_5__.BACKGROUND_TYPE_VIDEO === backgroundType;
    const showFocalPointPicker = isVideoBackground || isImageBackground && !backgroundImageParallax;
    const gradientClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalGetGradientClass)(gradient);

    /**
     * 色設定
     */
    const textColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('color', textColor);
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('background-color', backgroundColor);
    const dividerColorTopClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('fill', dividerColorTop);
    const dividerColorBottomClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('fill', dividerColorBottom);

    /**
     * アニメーション
     */
    const hasAnimation = animationType && 'none' !== animationType;

    /**
     * 背景画像
     */
    const backgroundImageStyles = {
      backgroundImage: backgroundImageURL && isImageBackground ? `url("${backgroundImageURL}")` : undefined,
      backgroundPosition: (0,_shared__WEBPACK_IMPORTED_MODULE_6__.getBackgroundPosition)(showFocalPointPicker, focalPoint),
      backgroundRepeat: 'no-repeat' === backgroundImageRepeat ? undefined : backgroundImageRepeat,
      backgroundSize: (0,_shared__WEBPACK_IMPORTED_MODULE_6__.getBackgroundSize)(backgroundImageSize, backgroundImageSizeX, backgroundImageSizeY, backgroundImageSizeUnitX, backgroundImageSizeUnitY)
    };

    /**
     * 背景関連
     */
    const showBgMask = backgroundImageURL || backgroundColor || customBackgroundColor || gradientClass || customGradient;

    /**
     * セクションクラス名
     */
    const sectionClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section', {
      'has-background-image': backgroundImageURL,
      'is-screen-height': screenHeightMode,
      'has-animation': hasAnimation,
      'has-parallax': backgroundImageParallax
    });
    const dataAnimation = hasAnimation ? animationType : undefined;
    const getMargin = (useResponsive, desktop, mobile) => {
      if (!useResponsive) {
        if (0 === desktop) {
          return 0;
        }
        return undefined !== desktop ? `${desktop}px` : undefined;
      }
      return (0,_src_js_util_getCssClamp__WEBPACK_IMPORTED_MODULE_7__["default"])({
        desktop,
        mobile
      });
    };
    /**
     * セクションスタイル
     */
    let sectionStyles = {
      color: textColorClass ? undefined : customTextColor,
      paddingTop: getMargin(paddingTopResponsive, paddingTop, paddingTopMobile),
      paddingBottom: getMargin(paddingBottomResponsive, paddingBottom, paddingBottomMobile),
      marginTop: getMargin(marginTopResponsive, marginTop, marginTopMobile),
      marginBottom: getMargin(marginBottomResponsive, marginBottom, marginBottomMobile),
      minHeight: sectionMinHeight ? sectionMinHeight + 'px' : undefined,
      animationDuration: hasAnimation ? `${animationSpeed}s` : undefined,
      animationDelay: hasAnimation && 0 < animationDelay ? `${animationDelay}s` : undefined
    };
    if (!backgroundImageOnOverlay) {
      sectionStyles = {
        ...sectionStyles,
        ...backgroundImageStyles
      };
    }
    const sectionClampData = {
      'margin-top': marginTopResponsive ? `${marginTop}${marginUnit}` : undefined,
      'margin-bottom': marginBottomResponsive ? `${marginBottom}${marginUnit}` : undefined,
      'padding-top': paddingTopResponsive ? `${paddingTop}${paddingUnit}` : undefined,
      'padding-bottom': paddingBottomResponsive ? `${paddingBottom}${paddingUnit}` : undefined
    };

    /**
     * 背景マスク
     */
    const bgMaskClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__bg', {
      'has-background': backgroundColor || customBackgroundColor,
      'has-background-gradient': gradient || customGradient,
      [backgroundClass]: backgroundClass,
      [gradientClass]: gradientClass,
      'is-custom-size': useCustomOverlaySize
    });
    const getMaskBackground = () => {
      if (customGradient) {
        return customGradient;
      }
      if (!backgroundClass && customBackgroundColor) {
        return customBackgroundColor;
      }
      return undefined;
    };
    const getMaskPosition = () => {
      if (!useCustomOverlaySize) {
        return {};
      }
      const posX = !!overlayPositionValueX ? `${overlayPositionValueX}${overlayPositionUnitX}` : 0;
      const posY = !!overlayPositionValueY ? `${overlayPositionValueY}${overlayPositionUnitY}` : 0;
      return {
        top: 'top' === overlayPositionX ? posX : undefined,
        bottom: 'bottom' === overlayPositionX ? posX : undefined,
        left: 'left' === overlayPositionY ? posY : undefined,
        right: 'right' === overlayPositionY ? posY : undefined
      };
    };
    const bgMaskStyle = {
      background: getMaskBackground(),
      opacity: backgroundImageOpacity / 100,
      width: useCustomOverlaySize && !!overlaySizeX ? `${overlaySizeX}${overlaySizeUnitX}` : undefined,
      height: useCustomOverlaySize && !!overlaySizeY ? `${overlaySizeY}${overlaySizeUnitY}` : undefined,
      ...getMaskPosition()
    };
    let overlayImageStyle = {
      opacity: backgroundImageOnOverlayOpacity / 100
    };
    if (backgroundImageOnOverlay) {
      overlayImageStyle = {
        ...overlayImageStyle,
        ...backgroundImageStyles
      };
    }

    /**
     * インナー
     */
    const innerClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__inner', {
      'has-text-color': textColorClass || customTextColor,
      [textColorClass]: textColorClass
    });
    const innerStyles = {
      maxWidth: 0 < innerCustomWidth ? innerCustomWidth : undefined,
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingLeft: getMargin(paddingLeftResponsive, paddingLeft, paddingLeftMobile),
      paddingRight: getMargin(paddingRightResponsive, paddingRight, paddingRightMobile)
    };
    const innerClampData = {
      'padding-left': paddingLeftResponsive ? `${paddingLeft}${paddingUnit}` : undefined,
      'padding-right': paddingRightResponsive ? `${paddingRight}${paddingUnit}` : undefined
    };
    const divider = attr => {
      const {
        type,
        reverse,
        position,
        level,
        colorClass,
        customColor,
        useResponsive,
        levelMobile
      } = attr;
      const dividerClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__divider', `ystdb-section__divider--${position}`, `ystdb-section__divider--${type}`);
      let pathLevel = level;
      if (reverse) {
        pathLevel = -1 * pathLevel;
      }
      if (useResponsive) {
        pathLevel = 0 > pathLevel ? -100 : 100;
      }
      const path = (0,_config__WEBPACK_IMPORTED_MODULE_5__.dividerPath)(type, pathLevel);
      const svgClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__divider-image', {
        [colorClass]: colorClass
      });
      const style = useResponsive ? {
        height: (0,_src_js_util_getCssClamp__WEBPACK_IMPORTED_MODULE_7__["default"])({
          desktop: Math.abs(level),
          mobile: Math.abs(levelMobile)
        })
      } : undefined;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: dividerClass
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: svgClass,
        viewBox: "0 0 100 100",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: 'none',
        style: style
      }, (0,_src_js_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__["default"])({
        height: useResponsive ? `${Math.abs(level)}px` : undefined
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
        d: path,
        fill: customColor
      })));
    };
    const dividerTop = 0 !== dividerLevelTop && (dividerColorTopClass || customDividerColorTop);
    const dividerBottom = 0 !== dividerLevelBottom && (dividerColorBottomClass || customDividerColorBottom);
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: sectionClass,
      style: sectionStyles,
      'data-animation': dataAnimation,
      ...(0,_src_js_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__["default"])(sectionClampData)
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, isVideoBackground && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("video", {
      className: "ystdb-section__video-background",
      autoPlay: true,
      muted: true,
      loop: true,
      src: backgroundImageURL,
      style: {
        objectPosition: (0,_shared__WEBPACK_IMPORTED_MODULE_6__.getBackgroundPosition)(showFocalPointPicker, focalPoint)
      }
    }), showBgMask && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: bgMaskClass,
      "aria-hidden": "true",
      role: "img",
      style: bgMaskStyle
    }, backgroundImageOnOverlay && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: 'ystdb-section__overlay-image',
      "aria-hidden": "true",
      role: "img",
      style: overlayImageStyle
    }, "\xA0"), "\xA0"), dividerTop && divider({
      type: dividerTypeTop,
      reverse: dividerTopReverse,
      position: 'top',
      level: Math.abs(dividerLevelTop),
      colorClass: dividerColorTopClass,
      customColor: customDividerColorTop,
      useResponsive: dividerTopResponsive,
      levelMobile: dividerLevelTopMobile
    }), dividerBottom && divider({
      type: dividerTypeBottom,
      reverse: dividerBottomReverse,
      position: 'bottom',
      level: Math.abs(dividerLevelBottom),
      colorClass: dividerColorBottomClass,
      customColor: customDividerColorBottom,
      useResponsive: dividerBottomResponsive,
      levelMobile: dividerLevelBottomMobile
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "ystdb-section__container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Wrapper, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: innerClasses,
      style: innerStyles
    }, (0,_src_js_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__["default"])(innerClampData)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null))));
  }
}];

/***/ }),

/***/ "./blocks/section/deprecated/deprecated_2-9-4.js":
/*!*******************************************************!*\
  !*** ./blocks/section/deprecated/deprecated_2-9-4.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deprecated294: () => (/* binding */ deprecated294)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./blocks/section/config.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./blocks/section/shared.js");
/* harmony import */ var _src_js_util_getCssClamp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/js/util/_getCssClamp */ "./src/js/util/_getCssClamp.js");
/* harmony import */ var _src_js_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/js/util/_getDataClamp */ "./src/js/util/_getDataClamp.js");









const deprecated294 = [{
  attributes: {
    animationType: {
      type: 'string',
      default: 'none'
    },
    animationSpeed: {
      type: 'number',
      default: 2
    },
    animationDelay: {
      type: 'number',
      default: 0
    },
    backgroundType: {
      type: 'string',
      default: 'image'
    },
    focalPoint: {
      type: 'object'
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
    backgroundImageParallax: {
      type: 'bool',
      default: false
    },
    backgroundImageSize: {
      type: 'string'
    },
    backgroundImageSizeX: {
      type: 'string'
    },
    backgroundImageSizeUnitX: {
      type: 'string',
      default: 'px'
    },
    backgroundImageSizeY: {
      type: 'string'
    },
    backgroundImageSizeUnitY: {
      type: 'string',
      default: 'px'
    },
    backgroundImageRepeat: {
      type: 'string',
      default: 'no-repeat'
    },
    backgroundImageOnOverlay: {
      type: 'bool',
      default: false
    },
    backgroundImageOnOverlayOpacity: {
      type: 'integer',
      default: 80
    },
    dividerTypeTop: {
      type: 'string',
      default: 'skew'
    },
    dividerTopReverse: {
      type: 'bool',
      default: false
    },
    dividerTopResponsive: {
      type: 'bool',
      default: false
    },
    dividerLevelTop: {
      type: 'number',
      default: 0
    },
    dividerLevelTopMobile: {
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
    dividerBottomReverse: {
      type: 'bool',
      default: false
    },
    dividerBottomResponsive: {
      type: 'bool',
      default: false
    },
    dividerLevelBottom: {
      type: 'number',
      default: 0
    },
    dividerLevelBottomMobile: {
      type: 'number',
      default: 0
    },
    dividerColorBottom: {
      type: 'string'
    },
    customDividerColorBottom: {
      type: 'string'
    },
    innerCustomWidth: {
      type: 'integer',
      default: 0
    },
    marginTop: {
      type: 'number',
      default: 0
    },
    marginTopResponsive: {
      type: 'bool',
      default: false
    },
    marginTopMobile: {
      type: 'number',
      default: 0
    },
    marginBottom: {
      type: 'number',
      default: 0
    },
    marginBottomResponsive: {
      type: 'bool',
      default: false
    },
    marginBottomMobile: {
      type: 'number',
      default: 0
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    gradient: {
      type: 'string'
    },
    customGradient: {
      type: 'string'
    },
    useCustomOverlaySize: {
      type: 'bool',
      default: false
    },
    overlaySizeX: {
      type: 'string',
      default: '100'
    },
    overlaySizeUnitX: {
      type: 'string',
      default: '%'
    },
    overlaySizeY: {
      type: 'string',
      default: '100'
    },
    overlaySizeUnitY: {
      type: 'string',
      default: '%'
    },
    overlayPositionX: {
      type: 'string',
      default: 'top'
    },
    overlayPositionValueX: {
      type: 'string',
      default: '0'
    },
    overlayPositionUnitX: {
      type: 'string',
      default: '%'
    },
    overlayPositionY: {
      type: 'string',
      default: 'left'
    },
    overlayPositionValueY: {
      type: 'string',
      default: '0'
    },
    overlayPositionUnitY: {
      type: 'string',
      default: '%'
    },
    backgroundImageOpacity: {
      type: 'integer',
      default: 100
    },
    paddingTop: {
      type: 'number',
      default: 80
    },
    paddingTopResponsive: {
      type: 'bool',
      default: false
    },
    paddingTopMobile: {
      type: 'number',
      default: 0
    },
    paddingBottom: {
      type: 'number',
      default: 80
    },
    paddingBottomResponsive: {
      type: 'bool',
      default: false
    },
    paddingBottomMobile: {
      type: 'number',
      default: 0
    },
    paddingLeft: {
      type: 'number',
      default: 0
    },
    paddingLeftResponsive: {
      type: 'bool',
      default: false
    },
    paddingLeftMobile: {
      type: 'number',
      default: 0
    },
    paddingRight: {
      type: 'number',
      default: 0
    },
    paddingRightResponsive: {
      type: 'bool',
      default: false
    },
    paddingRightMobile: {
      type: 'number',
      default: 0
    },
    paddingRightPreferred: {
      type: 'number',
      default: 10
    },
    screenHeightMode: {
      type: 'bool',
      default: false
    },
    sectionMinHeight: {
      type: 'number',
      default: 0
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    wrapperTag: {
      type: 'string',
      default: 'div'
    }
  },
  supports: {
    align: ['wide', 'full'],
    anchor: true,
    className: false,
    lightBlockWrapper: true
  },
  save({
    attributes
  }) {
    const {
      wrapperTag,
      backgroundColor,
      customBackgroundColor,
      textColor,
      customTextColor,
      marginTop,
      marginTopResponsive,
      marginTopMobile,
      marginBottom,
      marginBottomResponsive,
      marginBottomMobile,
      paddingTop,
      paddingTopResponsive,
      paddingTopMobile,
      paddingBottom,
      paddingBottomResponsive,
      paddingBottomMobile,
      paddingLeft,
      paddingLeftResponsive,
      paddingLeftMobile,
      paddingRight,
      paddingRightResponsive,
      paddingRightMobile,
      useCustomOverlaySize,
      overlaySizeX,
      overlaySizeUnitX,
      overlaySizeY,
      overlaySizeUnitY,
      overlayPositionX,
      overlayPositionValueX,
      overlayPositionUnitX,
      overlayPositionY,
      overlayPositionValueY,
      overlayPositionUnitY,
      gradient,
      customGradient,
      backgroundType,
      focalPoint,
      backgroundImageURL,
      backgroundImageOpacity,
      backgroundImageParallax,
      backgroundImageSize,
      backgroundImageSizeX,
      backgroundImageSizeUnitX,
      backgroundImageSizeY,
      backgroundImageSizeUnitY,
      backgroundImageRepeat,
      backgroundImageOnOverlay,
      backgroundImageOnOverlayOpacity,
      innerCustomWidth,
      dividerTypeTop,
      dividerTopReverse,
      dividerLevelTop,
      dividerTopResponsive,
      dividerLevelTopMobile,
      dividerColorTop,
      customDividerColorTop,
      dividerTypeBottom,
      dividerBottomReverse,
      dividerLevelBottom,
      dividerBottomResponsive,
      dividerLevelBottomMobile,
      dividerColorBottom,
      customDividerColorBottom,
      screenHeightMode,
      sectionMinHeight,
      animationType,
      animationSpeed,
      animationDelay
    } = attributes;

    /**
     * HTMLタグ
     */
    const Wrapper = wrapperTag;
    const marginUnit = 'px';
    const paddingUnit = 'px';
    const isImageBackground = _config__WEBPACK_IMPORTED_MODULE_5__.BACKGROUND_TYPE_IMAGE === backgroundType;
    const isVideoBackground = _config__WEBPACK_IMPORTED_MODULE_5__.BACKGROUND_TYPE_VIDEO === backgroundType;
    const showFocalPointPicker = isVideoBackground || isImageBackground && !backgroundImageParallax;
    const gradientClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalGetGradientClass)(gradient);

    /**
     * 色設定
     */
    const textColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('color', textColor);
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('background-color', backgroundColor);
    const dividerColorTopClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('fill', dividerColorTop);
    const dividerColorBottomClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('fill', dividerColorBottom);

    /**
     * アニメーション
     */
    const hasAnimation = animationType && 'none' !== animationType;

    /**
     * 背景画像
     */
    const backgroundImageStyles = {
      backgroundImage: backgroundImageURL && isImageBackground ? `url('${backgroundImageURL}')` : undefined,
      backgroundPosition: (0,_shared__WEBPACK_IMPORTED_MODULE_6__.getBackgroundPosition)(showFocalPointPicker, focalPoint),
      backgroundRepeat: 'no-repeat' === backgroundImageRepeat ? undefined : backgroundImageRepeat,
      backgroundSize: (0,_shared__WEBPACK_IMPORTED_MODULE_6__.getBackgroundSize)(backgroundImageSize, backgroundImageSizeX, backgroundImageSizeY, backgroundImageSizeUnitX, backgroundImageSizeUnitY)
    };

    /**
     * 背景関連
     */
    const showBgMask = backgroundImageURL || backgroundColor || customBackgroundColor || gradientClass || customGradient;

    /**
     * セクションクラス名
     */
    const sectionClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section', {
      'has-background-image': backgroundImageURL,
      'is-screen-height': screenHeightMode,
      'has-animation': hasAnimation,
      'has-parallax': backgroundImageParallax
    });
    const dataAnimation = hasAnimation ? animationType : undefined;
    const getMargin = (useResponsive, desktop, mobile) => {
      if (!useResponsive) {
        if (0 === desktop) {
          return 0;
        }
        return undefined !== desktop ? `${desktop}px` : undefined;
      }
      return (0,_src_js_util_getCssClamp__WEBPACK_IMPORTED_MODULE_7__["default"])({
        desktop,
        mobile
      });
    };
    /**
     * セクションスタイル
     */
    let sectionStyles = {
      color: textColorClass ? undefined : customTextColor,
      paddingTop: getMargin(paddingTopResponsive, paddingTop, paddingTopMobile),
      paddingBottom: getMargin(paddingBottomResponsive, paddingBottom, paddingBottomMobile),
      marginTop: getMargin(marginTopResponsive, marginTop, marginTopMobile),
      marginBottom: getMargin(marginBottomResponsive, marginBottom, marginBottomMobile),
      minHeight: sectionMinHeight ? sectionMinHeight + 'px' : undefined,
      animationDuration: hasAnimation ? `${animationSpeed}s` : undefined,
      animationDelay: hasAnimation && 0 < animationDelay ? `${animationDelay}s` : undefined
    };
    if (!backgroundImageOnOverlay) {
      sectionStyles = {
        ...sectionStyles,
        ...backgroundImageStyles
      };
    }
    const sectionClampData = {
      'margin-top': marginTopResponsive ? `${marginTop}${marginUnit}` : undefined,
      'margin-bottom': marginBottomResponsive ? `${marginBottom}${marginUnit}` : undefined,
      'padding-top': paddingTopResponsive ? `${paddingTop}${paddingUnit}` : undefined,
      'padding-bottom': paddingBottomResponsive ? `${paddingBottom}${paddingUnit}` : undefined
    };

    /**
     * 背景マスク
     */
    const bgMaskClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__bg', {
      'has-background': backgroundColor || customBackgroundColor,
      'has-background-gradient': gradient || customGradient,
      [backgroundClass]: backgroundClass,
      [gradientClass]: gradientClass,
      'is-custom-size': useCustomOverlaySize
    });
    const getMaskBackground = () => {
      if (customGradient) {
        return customGradient;
      }
      if (!backgroundClass && customBackgroundColor) {
        return customBackgroundColor;
      }
      return undefined;
    };
    const getMaskPosition = () => {
      if (!useCustomOverlaySize) {
        return {};
      }
      const posX = !!overlayPositionValueX ? `${overlayPositionValueX}${overlayPositionUnitX}` : 0;
      const posY = !!overlayPositionValueY ? `${overlayPositionValueY}${overlayPositionUnitY}` : 0;
      return {
        top: 'top' === overlayPositionX ? posX : undefined,
        bottom: 'bottom' === overlayPositionX ? posX : undefined,
        left: 'left' === overlayPositionY ? posY : undefined,
        right: 'right' === overlayPositionY ? posY : undefined
      };
    };
    const bgMaskStyle = {
      background: getMaskBackground(),
      opacity: backgroundImageOpacity / 100,
      width: useCustomOverlaySize && !!overlaySizeX ? `${overlaySizeX}${overlaySizeUnitX}` : undefined,
      height: useCustomOverlaySize && !!overlaySizeY ? `${overlaySizeY}${overlaySizeUnitY}` : undefined,
      ...getMaskPosition()
    };
    let overlayImageStyle = {
      opacity: backgroundImageOnOverlayOpacity / 100
    };
    if (backgroundImageOnOverlay) {
      overlayImageStyle = {
        ...overlayImageStyle,
        ...backgroundImageStyles
      };
    }

    /**
     * インナー
     */
    const innerClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__inner', {
      'has-text-color': textColorClass || customTextColor,
      [textColorClass]: textColorClass
    });
    const innerStyles = {
      maxWidth: 0 < innerCustomWidth ? innerCustomWidth : undefined,
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingLeft: getMargin(paddingLeftResponsive, paddingLeft, paddingLeftMobile),
      paddingRight: getMargin(paddingRightResponsive, paddingRight, paddingRightMobile)
    };
    const innerClampData = {
      'padding-left': paddingLeftResponsive ? `${paddingLeft}${paddingUnit}` : undefined,
      'padding-right': paddingRightResponsive ? `${paddingRight}${paddingUnit}` : undefined
    };
    const divider = attr => {
      const {
        type,
        reverse,
        position,
        level,
        colorClass,
        customColor,
        useResponsive,
        levelMobile
      } = attr;
      const dividerClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__divider', `ystdb-section__divider--${position}`, `ystdb-section__divider--${type}`);
      let pathLevel = level;
      if (reverse) {
        pathLevel = -1 * pathLevel;
      }
      if (useResponsive) {
        pathLevel = 0 > pathLevel ? -100 : 100;
      }
      const path = (0,_config__WEBPACK_IMPORTED_MODULE_5__.dividerPath)(type, pathLevel);
      const svgClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__divider-image', {
        [colorClass]: colorClass
      });
      const style = useResponsive ? {
        height: (0,_src_js_util_getCssClamp__WEBPACK_IMPORTED_MODULE_7__["default"])({
          desktop: Math.abs(level),
          mobile: Math.abs(levelMobile)
        })
      } : undefined;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: dividerClass
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: svgClass,
        viewBox: "0 0 100 100",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: 'none',
        style: style
      }, (0,_src_js_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__["default"])({
        height: useResponsive ? `${Math.abs(level)}px` : undefined
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
        d: path,
        fill: customColor
      })));
    };
    const dividerTop = 0 !== dividerLevelTop && (dividerColorTopClass || customDividerColorTop);
    const dividerBottom = 0 !== dividerLevelBottom && (dividerColorBottomClass || customDividerColorBottom);
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: sectionClass,
      style: sectionStyles,
      'data-animation': dataAnimation,
      ...(0,_src_js_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__["default"])(sectionClampData)
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, isVideoBackground && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("video", {
      className: "ystdb-section__video-background",
      autoPlay: true,
      muted: true,
      loop: true,
      src: backgroundImageURL,
      style: {
        objectPosition: (0,_shared__WEBPACK_IMPORTED_MODULE_6__.getBackgroundPosition)(showFocalPointPicker, focalPoint)
      }
    }), showBgMask && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: bgMaskClass,
      "aria-hidden": "true",
      role: "img",
      style: bgMaskStyle
    }, backgroundImageOnOverlay && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: 'ystdb-section__overlay-image',
      "aria-hidden": "true",
      role: "img",
      style: overlayImageStyle
    }, "\xA0"), "\xA0"), dividerTop && divider({
      type: dividerTypeTop,
      reverse: dividerTopReverse,
      position: 'top',
      level: Math.abs(dividerLevelTop),
      colorClass: dividerColorTopClass,
      customColor: customDividerColorTop,
      useResponsive: dividerTopResponsive,
      levelMobile: dividerLevelTopMobile
    }), dividerBottom && divider({
      type: dividerTypeBottom,
      reverse: dividerBottomReverse,
      position: 'bottom',
      level: Math.abs(dividerLevelBottom),
      colorClass: dividerColorBottomClass,
      customColor: customDividerColorBottom,
      useResponsive: dividerBottomResponsive,
      levelMobile: dividerLevelBottomMobile
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "ystdb-section__container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Wrapper, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: innerClasses,
      style: innerStyles
    }, (0,_src_js_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__["default"])(innerClampData)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null))));
  }
}];

/***/ }),

/***/ "./blocks/section/deprecated/deprecated_3-1.js":
/*!*****************************************************!*\
  !*** ./blocks/section/deprecated/deprecated_3-1.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deprecated31: () => (/* binding */ deprecated31)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./blocks/section/config.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./blocks/section/shared.js");
/* harmony import */ var _aktk_util_getCssClamp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aktk/util/_getCssClamp */ "./src/js/util/_getCssClamp.js");
/* harmony import */ var _aktk_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aktk/util/_getDataClamp */ "./src/js/util/_getDataClamp.js");









const deprecated31 = [{
  attributes: {
    align: {
      type: 'string',
      default: 'full'
    },
    marginTop: {
      type: 'number',
      default: 0
    },
    marginTopResponsive: {
      type: 'bool',
      default: false
    },
    marginTopMobile: {
      type: 'number',
      default: 0
    },
    marginBottom: {
      type: 'number',
      default: 0
    },
    marginBottomResponsive: {
      type: 'bool',
      default: false
    },
    marginBottomMobile: {
      type: 'number',
      default: 0
    },
    paddingTop: {
      type: 'number',
      default: 80
    },
    paddingTopResponsive: {
      type: 'bool',
      default: false
    },
    paddingTopMobile: {
      type: 'number',
      default: 0
    },
    paddingBottom: {
      type: 'number',
      default: 80
    },
    paddingBottomResponsive: {
      type: 'bool',
      default: false
    },
    paddingBottomMobile: {
      type: 'number',
      default: 0
    },
    paddingLeft: {
      type: 'number',
      default: 0
    },
    paddingLeftResponsive: {
      type: 'bool',
      default: false
    },
    paddingLeftMobile: {
      type: 'number',
      default: 0
    },
    paddingRight: {
      type: 'number',
      default: 0
    },
    paddingRightResponsive: {
      type: 'bool',
      default: false
    },
    paddingRightMobile: {
      type: 'number',
      default: 0
    },
    paddingRightPreferred: {
      type: 'number',
      default: 10
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    gradient: {
      type: 'string'
    },
    customGradient: {
      type: 'string'
    },
    useCustomOverlaySize: {
      type: 'bool',
      default: false
    },
    overlaySizeX: {
      type: 'string',
      default: '100'
    },
    overlaySizeUnitX: {
      type: 'string',
      default: '%'
    },
    overlaySizeY: {
      type: 'string',
      default: '100'
    },
    overlaySizeUnitY: {
      type: 'string',
      default: '%'
    },
    overlayPositionX: {
      type: 'string',
      default: 'top'
    },
    overlayPositionValueX: {
      type: 'string',
      default: '0'
    },
    overlayPositionUnitX: {
      type: 'string',
      default: '%'
    },
    overlayPositionY: {
      type: 'string',
      default: 'left'
    },
    overlayPositionValueY: {
      type: 'string',
      default: '0'
    },
    overlayPositionUnitY: {
      type: 'string',
      default: '%'
    },
    backgroundImageOpacity: {
      type: 'integer',
      default: 100
    },
    backgroundType: {
      type: 'string',
      default: 'image'
    },
    focalPoint: {
      type: 'object'
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
    backgroundImageParallax: {
      type: 'bool',
      default: false
    },
    backgroundImageSize: {
      type: 'string'
    },
    backgroundImageSizeX: {
      type: 'string'
    },
    backgroundImageSizeUnitX: {
      type: 'string',
      default: 'px'
    },
    backgroundImageSizeY: {
      type: 'string'
    },
    backgroundImageSizeUnitY: {
      type: 'string',
      default: 'px'
    },
    backgroundImageRepeat: {
      type: 'string',
      default: 'no-repeat'
    },
    backgroundImageOnOverlay: {
      type: 'bool',
      default: false
    },
    backgroundImageOnOverlayOpacity: {
      type: 'integer',
      default: 80
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    dividerTypeTop: {
      type: 'string',
      default: 'skew'
    },
    dividerTopReverse: {
      type: 'bool',
      default: false
    },
    dividerTopResponsive: {
      type: 'bool',
      default: false
    },
    dividerLevelTop: {
      type: 'number',
      default: 0
    },
    dividerLevelTopMobile: {
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
    dividerBottomReverse: {
      type: 'bool',
      default: false
    },
    dividerBottomResponsive: {
      type: 'bool',
      default: false
    },
    dividerLevelBottom: {
      type: 'number',
      default: 0
    },
    dividerLevelBottomMobile: {
      type: 'number',
      default: 0
    },
    dividerColorBottom: {
      type: 'string'
    },
    customDividerColorBottom: {
      type: 'string'
    },
    innerCustomWidth: {
      type: 'integer',
      default: 0
    },
    screenHeightMode: {
      type: 'bool',
      default: false
    },
    sectionMinHeight: {
      type: 'number',
      default: 0
    },
    animationType: {
      type: 'string',
      default: 'none'
    },
    animationSpeed: {
      type: 'number',
      default: 2
    },
    animationDelay: {
      type: 'number',
      default: 0
    },
    wrapperTag: {
      type: 'string',
      default: 'div'
    }
  },
  supports: {
    align: ['wide', 'full'],
    anchor: true,
    className: false
  },
  save({
    attributes
  }) {
    const {
      wrapperTag,
      backgroundColor,
      customBackgroundColor,
      textColor,
      customTextColor,
      marginTop,
      marginTopResponsive,
      marginTopMobile,
      marginBottom,
      marginBottomResponsive,
      marginBottomMobile,
      paddingTop,
      paddingTopResponsive,
      paddingTopMobile,
      paddingBottom,
      paddingBottomResponsive,
      paddingBottomMobile,
      paddingLeft,
      paddingLeftResponsive,
      paddingLeftMobile,
      paddingRight,
      paddingRightResponsive,
      paddingRightMobile,
      useCustomOverlaySize,
      overlaySizeX,
      overlaySizeUnitX,
      overlaySizeY,
      overlaySizeUnitY,
      overlayPositionX,
      overlayPositionValueX,
      overlayPositionUnitX,
      overlayPositionY,
      overlayPositionValueY,
      overlayPositionUnitY,
      gradient,
      customGradient,
      backgroundType,
      focalPoint,
      backgroundImageURL,
      backgroundImageOpacity,
      backgroundImageParallax,
      backgroundImageSize,
      backgroundImageSizeX,
      backgroundImageSizeUnitX,
      backgroundImageSizeY,
      backgroundImageSizeUnitY,
      backgroundImageRepeat,
      backgroundImageOnOverlay,
      backgroundImageOnOverlayOpacity,
      innerCustomWidth,
      dividerTypeTop,
      dividerTopReverse,
      dividerLevelTop,
      dividerTopResponsive,
      dividerLevelTopMobile,
      dividerColorTop,
      customDividerColorTop,
      dividerTypeBottom,
      dividerBottomReverse,
      dividerLevelBottom,
      dividerBottomResponsive,
      dividerLevelBottomMobile,
      dividerColorBottom,
      customDividerColorBottom,
      screenHeightMode,
      sectionMinHeight,
      animationType,
      animationSpeed,
      animationDelay
    } = attributes;

    /**
     * HTMLタグ
     */
    const Wrapper = wrapperTag;
    const marginUnit = 'px';
    const paddingUnit = 'px';
    const isImageBackground = _config__WEBPACK_IMPORTED_MODULE_5__.BACKGROUND_TYPE_IMAGE === backgroundType;
    const isVideoBackground = _config__WEBPACK_IMPORTED_MODULE_5__.BACKGROUND_TYPE_VIDEO === backgroundType;
    const showFocalPointPicker = isVideoBackground || isImageBackground && !backgroundImageParallax;
    const gradientClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalGetGradientClass)(gradient);

    /**
     * 色設定
     */
    const textColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('color', textColor);
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('background-color', backgroundColor);
    const dividerColorTopClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('fill', dividerColorTop);
    const dividerColorBottomClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('fill', dividerColorBottom);

    /**
     * アニメーション
     */
    const hasAnimation = animationType && 'none' !== animationType;

    /**
     * 背景画像
     */
    const backgroundImageStyles = {
      backgroundImage: backgroundImageURL && isImageBackground ? `url('${backgroundImageURL}')` : undefined,
      backgroundPosition: (0,_shared__WEBPACK_IMPORTED_MODULE_6__.getBackgroundPosition)(showFocalPointPicker, focalPoint),
      backgroundRepeat: 'no-repeat' === backgroundImageRepeat ? undefined : backgroundImageRepeat,
      backgroundSize: (0,_shared__WEBPACK_IMPORTED_MODULE_6__.getBackgroundSize)(backgroundImageSize, backgroundImageSizeX, backgroundImageSizeY, backgroundImageSizeUnitX, backgroundImageSizeUnitY)
    };

    /**
     * 背景関連
     */
    const showBgMask = backgroundImageURL || backgroundColor || customBackgroundColor || gradientClass || customGradient;

    /**
     * セクションクラス名
     */
    const sectionClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section', {
      'has-background-image': backgroundImageURL,
      'is-screen-height': screenHeightMode,
      'has-animation': hasAnimation,
      'has-parallax': backgroundImageParallax
    });
    const dataAnimation = hasAnimation ? animationType : undefined;
    const getMargin = (useResponsive, desktop, mobile) => {
      if (!useResponsive) {
        if (0 === desktop) {
          return 0;
        }
        return undefined !== desktop ? `${desktop}px` : undefined;
      }
      return (0,_aktk_util_getCssClamp__WEBPACK_IMPORTED_MODULE_7__["default"])({
        desktop,
        mobile
      });
    };
    /**
     * セクションスタイル
     */
    let sectionStyles = {
      color: textColorClass ? undefined : customTextColor,
      paddingTop: getMargin(paddingTopResponsive, paddingTop, paddingTopMobile),
      paddingBottom: getMargin(paddingBottomResponsive, paddingBottom, paddingBottomMobile),
      marginTop: getMargin(marginTopResponsive, marginTop, marginTopMobile),
      marginBottom: getMargin(marginBottomResponsive, marginBottom, marginBottomMobile),
      minHeight: sectionMinHeight ? sectionMinHeight + 'px' : undefined,
      animationDuration: hasAnimation ? `${animationSpeed}s` : undefined,
      animationDelay: hasAnimation && 0 < animationDelay ? `${animationDelay}s` : undefined
    };
    if (!backgroundImageOnOverlay) {
      sectionStyles = {
        ...sectionStyles,
        ...backgroundImageStyles
      };
    }
    const sectionClampData = {
      'margin-top': marginTopResponsive ? `${marginTop}${marginUnit}` : undefined,
      'margin-bottom': marginBottomResponsive ? `${marginBottom}${marginUnit}` : undefined,
      'padding-top': paddingTopResponsive ? `${paddingTop}${paddingUnit}` : undefined,
      'padding-bottom': paddingBottomResponsive ? `${paddingBottom}${paddingUnit}` : undefined
    };

    /**
     * 背景マスク
     */
    const bgMaskClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__bg', {
      'has-background': backgroundColor || customBackgroundColor,
      'has-background-gradient': gradient || customGradient,
      [backgroundClass]: backgroundClass,
      [gradientClass]: gradientClass,
      'is-custom-size': useCustomOverlaySize
    });
    const getMaskBackground = () => {
      if (customGradient) {
        return customGradient;
      }
      if (!backgroundClass && customBackgroundColor) {
        return customBackgroundColor;
      }
      return undefined;
    };
    const getMaskPosition = () => {
      if (!useCustomOverlaySize) {
        return {};
      }
      const posX = !!overlayPositionValueX ? `${overlayPositionValueX}${overlayPositionUnitX}` : 0;
      const posY = !!overlayPositionValueY ? `${overlayPositionValueY}${overlayPositionUnitY}` : 0;
      return {
        top: 'top' === overlayPositionX ? posX : undefined,
        bottom: 'bottom' === overlayPositionX ? posX : undefined,
        left: 'left' === overlayPositionY ? posY : undefined,
        right: 'right' === overlayPositionY ? posY : undefined
      };
    };
    const bgMaskStyle = {
      background: getMaskBackground(),
      opacity: backgroundImageOpacity / 100,
      width: useCustomOverlaySize && !!overlaySizeX ? `${overlaySizeX}${overlaySizeUnitX}` : undefined,
      height: useCustomOverlaySize && !!overlaySizeY ? `${overlaySizeY}${overlaySizeUnitY}` : undefined,
      ...getMaskPosition()
    };
    let overlayImageStyle = {
      opacity: backgroundImageOnOverlayOpacity / 100
    };
    if (backgroundImageOnOverlay) {
      overlayImageStyle = {
        ...overlayImageStyle,
        ...backgroundImageStyles
      };
    }

    /**
     * インナー
     */
    const innerClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__inner', {
      'has-text-color': textColorClass || customTextColor,
      [textColorClass]: textColorClass
    });
    const innerStyles = {
      maxWidth: 0 < innerCustomWidth ? innerCustomWidth : undefined,
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingLeft: getMargin(paddingLeftResponsive, paddingLeft, paddingLeftMobile),
      paddingRight: getMargin(paddingRightResponsive, paddingRight, paddingRightMobile)
    };
    const innerClampData = {
      'padding-left': paddingLeftResponsive ? `${paddingLeft}${paddingUnit}` : undefined,
      'padding-right': paddingRightResponsive ? `${paddingRight}${paddingUnit}` : undefined
    };
    const divider = attr => {
      const {
        type,
        reverse,
        position,
        level,
        colorClass,
        customColor,
        useResponsive,
        levelMobile
      } = attr;
      const dividerClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__divider', `ystdb-section__divider--${position}`, `ystdb-section__divider--${type}`);
      let pathLevel = level;
      if (reverse) {
        pathLevel = -1 * pathLevel;
      }
      if (useResponsive) {
        pathLevel = 0 > pathLevel ? -100 : 100;
      }
      const path = (0,_config__WEBPACK_IMPORTED_MODULE_5__.dividerPath)(type, pathLevel);
      const svgClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__divider-image', {
        [colorClass]: colorClass
      });
      const style = useResponsive ? {
        height: (0,_aktk_util_getCssClamp__WEBPACK_IMPORTED_MODULE_7__["default"])({
          desktop: Math.abs(level),
          mobile: Math.abs(levelMobile)
        })
      } : undefined;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: dividerClass
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: svgClass,
        viewBox: "0 0 100 100",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: 'none',
        style: style
      }, (0,_aktk_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__["default"])({
        height: useResponsive ? `${Math.abs(level)}px` : undefined
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
        d: path,
        fill: customColor
      })));
    };
    const dividerTop = 0 !== dividerLevelTop && (dividerColorTopClass || customDividerColorTop);
    const dividerBottom = 0 !== dividerLevelBottom && (dividerColorBottomClass || customDividerColorBottom);
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: sectionClass,
      style: sectionStyles,
      'data-animation': dataAnimation,
      ...(0,_aktk_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__["default"])(sectionClampData)
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, isVideoBackground && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("video", {
      className: "ystdb-section__video-background",
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      src: backgroundImageURL,
      style: {
        objectPosition: (0,_shared__WEBPACK_IMPORTED_MODULE_6__.getBackgroundPosition)(showFocalPointPicker, focalPoint)
      }
    }), showBgMask && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: bgMaskClass,
      "aria-hidden": "true",
      role: "img",
      style: bgMaskStyle
    }, backgroundImageOnOverlay && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: 'ystdb-section__overlay-image',
      "aria-hidden": "true",
      role: "img",
      style: overlayImageStyle
    }, "\xA0"), "\xA0"), dividerTop && divider({
      type: dividerTypeTop,
      reverse: dividerTopReverse,
      position: 'top',
      level: Math.abs(dividerLevelTop),
      colorClass: dividerColorTopClass,
      customColor: customDividerColorTop,
      useResponsive: dividerTopResponsive,
      levelMobile: dividerLevelTopMobile
    }), dividerBottom && divider({
      type: dividerTypeBottom,
      reverse: dividerBottomReverse,
      position: 'bottom',
      level: Math.abs(dividerLevelBottom),
      colorClass: dividerColorBottomClass,
      customColor: customDividerColorBottom,
      useResponsive: dividerBottomResponsive,
      levelMobile: dividerLevelBottomMobile
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "ystdb-section__container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Wrapper, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: innerClasses,
      style: innerStyles
    }, (0,_aktk_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__["default"])(innerClampData)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null))));
  }
}];

/***/ }),

/***/ "./blocks/section/deprecated/deprecated_wp_6_0.js":
/*!********************************************************!*\
  !*** ./blocks/section/deprecated/deprecated_wp_6_0.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deprecated_wp60: () => (/* binding */ deprecated_wp60)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./blocks/section/config.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./blocks/section/shared.js");
/* harmony import */ var _aktk_util_getCssClamp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aktk/util/_getCssClamp */ "./src/js/util/_getCssClamp.js");
/* harmony import */ var _aktk_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aktk/util/_getDataClamp */ "./src/js/util/_getDataClamp.js");
/* harmony import */ var _function_border__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../function/border */ "./blocks/section/function/border.js");










const deprecated_wp60 = [{
  attributes: {
    align: {
      type: 'string',
      default: 'full'
    },
    marginTop: {
      type: 'number',
      default: 0
    },
    marginTopResponsive: {
      type: 'bool',
      default: false
    },
    marginTopMobile: {
      type: 'number',
      default: 0
    },
    marginBottom: {
      type: 'number',
      default: 0
    },
    marginBottomResponsive: {
      type: 'bool',
      default: false
    },
    marginBottomMobile: {
      type: 'number',
      default: 0
    },
    paddingTop: {
      type: 'number',
      default: 80
    },
    paddingTopResponsive: {
      type: 'bool',
      default: false
    },
    paddingTopMobile: {
      type: 'number',
      default: 0
    },
    paddingBottom: {
      type: 'number',
      default: 80
    },
    paddingBottomResponsive: {
      type: 'bool',
      default: false
    },
    paddingBottomMobile: {
      type: 'number',
      default: 0
    },
    paddingLeft: {
      type: 'number',
      default: 0
    },
    paddingLeftResponsive: {
      type: 'bool',
      default: false
    },
    paddingLeftMobile: {
      type: 'number',
      default: 0
    },
    paddingRight: {
      type: 'number',
      default: 0
    },
    paddingRightResponsive: {
      type: 'bool',
      default: false
    },
    paddingRightMobile: {
      type: 'number',
      default: 0
    },
    paddingRightPreferred: {
      type: 'number',
      default: 10
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    gradient: {
      type: 'string'
    },
    customGradient: {
      type: 'string'
    },
    useCustomOverlaySize: {
      type: 'bool',
      default: false
    },
    overlaySizeX: {
      type: 'string',
      default: '100'
    },
    overlaySizeUnitX: {
      type: 'string',
      default: '%'
    },
    overlaySizeY: {
      type: 'string',
      default: '100'
    },
    overlaySizeUnitY: {
      type: 'string',
      default: '%'
    },
    overlayPositionX: {
      type: 'string',
      default: 'top'
    },
    overlayPositionValueX: {
      type: 'string',
      default: '0'
    },
    overlayPositionUnitX: {
      type: 'string',
      default: '%'
    },
    overlayPositionY: {
      type: 'string',
      default: 'left'
    },
    overlayPositionValueY: {
      type: 'string',
      default: '0'
    },
    overlayPositionUnitY: {
      type: 'string',
      default: '%'
    },
    backgroundImageOpacity: {
      type: 'integer',
      default: 100
    },
    backgroundType: {
      type: 'string',
      default: 'image'
    },
    focalPoint: {
      type: 'object'
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
    backgroundImageParallax: {
      type: 'bool',
      default: false
    },
    backgroundImageSize: {
      type: 'string'
    },
    backgroundImageSizeX: {
      type: 'string'
    },
    backgroundImageSizeUnitX: {
      type: 'string',
      default: 'px'
    },
    backgroundImageSizeY: {
      type: 'string'
    },
    backgroundImageSizeUnitY: {
      type: 'string',
      default: 'px'
    },
    backgroundImageRepeat: {
      type: 'string',
      default: 'no-repeat'
    },
    backgroundImageOnOverlay: {
      type: 'bool',
      default: false
    },
    backgroundImageOnOverlayOpacity: {
      type: 'integer',
      default: 80
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    dividerTypeTop: {
      type: 'string',
      default: 'skew'
    },
    dividerTopReverse: {
      type: 'bool',
      default: false
    },
    dividerTopResponsive: {
      type: 'bool',
      default: false
    },
    dividerLevelTop: {
      type: 'number',
      default: 0
    },
    dividerLevelTopMobile: {
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
    dividerBottomReverse: {
      type: 'bool',
      default: false
    },
    dividerBottomResponsive: {
      type: 'bool',
      default: false
    },
    dividerLevelBottom: {
      type: 'number',
      default: 0
    },
    dividerLevelBottomMobile: {
      type: 'number',
      default: 0
    },
    dividerColorBottom: {
      type: 'string'
    },
    customDividerColorBottom: {
      type: 'string'
    },
    innerCustomWidth: {
      type: 'integer',
      default: 0
    },
    screenHeightMode: {
      type: 'bool',
      default: false
    },
    sectionMinHeight: {
      type: 'number',
      default: 0
    },
    animationType: {
      type: 'string',
      default: 'none'
    },
    animationSpeed: {
      type: 'number',
      default: 2
    },
    animationDelay: {
      type: 'number',
      default: 0
    },
    wrapperTag: {
      type: 'string',
      default: 'div'
    },
    containerFluid: {
      type: 'bool',
      default: false
    },
    borderColor: {
      type: 'string'
    },
    customBorderColor: {
      type: 'string'
    },
    borderSize: {
      type: 'string'
    },
    borderStyle: {
      type: 'string'
    }
  },
  supports: {
    align: ['wide', 'full'],
    anchor: true,
    className: false
  },
  save({
    attributes
  }) {
    const {
      align,
      wrapperTag,
      backgroundColor,
      customBackgroundColor,
      textColor,
      customTextColor,
      marginTop,
      marginTopResponsive,
      marginTopMobile,
      marginBottom,
      marginBottomResponsive,
      marginBottomMobile,
      paddingTop,
      paddingTopResponsive,
      paddingTopMobile,
      paddingBottom,
      paddingBottomResponsive,
      paddingBottomMobile,
      paddingLeft,
      paddingLeftResponsive,
      paddingLeftMobile,
      paddingRight,
      paddingRightResponsive,
      paddingRightMobile,
      useCustomOverlaySize,
      overlaySizeX,
      overlaySizeUnitX,
      overlaySizeY,
      overlaySizeUnitY,
      overlayPositionX,
      overlayPositionValueX,
      overlayPositionUnitX,
      overlayPositionY,
      overlayPositionValueY,
      overlayPositionUnitY,
      gradient,
      customGradient,
      backgroundType,
      focalPoint,
      backgroundImageURL,
      backgroundImageOpacity,
      backgroundImageParallax,
      backgroundImageSize,
      backgroundImageSizeX,
      backgroundImageSizeUnitX,
      backgroundImageSizeY,
      backgroundImageSizeUnitY,
      backgroundImageRepeat,
      backgroundImageOnOverlay,
      backgroundImageOnOverlayOpacity,
      innerCustomWidth,
      dividerTypeTop,
      dividerTopReverse,
      dividerLevelTop,
      dividerTopResponsive,
      dividerLevelTopMobile,
      dividerColorTop,
      customDividerColorTop,
      dividerTypeBottom,
      dividerBottomReverse,
      dividerLevelBottom,
      dividerBottomResponsive,
      dividerLevelBottomMobile,
      dividerColorBottom,
      customDividerColorBottom,
      screenHeightMode,
      sectionMinHeight,
      animationType,
      animationSpeed,
      animationDelay,
      containerFluid,
      borderColor
    } = attributes;

    /**
     * HTMLタグ
     */
    const Wrapper = wrapperTag;
    const isContainerFluid = 'full' === align && containerFluid;
    const marginUnit = 'px';
    const paddingUnit = 'px';
    const isImageBackground = _config__WEBPACK_IMPORTED_MODULE_5__.BACKGROUND_TYPE_IMAGE === backgroundType;
    const isVideoBackground = _config__WEBPACK_IMPORTED_MODULE_5__.BACKGROUND_TYPE_VIDEO === backgroundType;
    const showFocalPointPicker = isVideoBackground || isImageBackground && !backgroundImageParallax;
    const gradientClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalGetGradientClass)(gradient);

    /**
     * 色設定
     */
    const textColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('color', textColor);
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('background-color', backgroundColor);
    const dividerColorTopClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('fill', dividerColorTop);
    const dividerColorBottomClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('fill', dividerColorBottom);
    const borderColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('border-color', borderColor);

    /**
     * アニメーション
     */
    const hasAnimation = animationType && 'none' !== animationType;

    /**
     * 背景画像
     */
    const backgroundImageStyles = {
      backgroundImage: backgroundImageURL && isImageBackground ? `url('${backgroundImageURL}')` : undefined,
      backgroundPosition: (0,_shared__WEBPACK_IMPORTED_MODULE_6__.getBackgroundPosition)(showFocalPointPicker, focalPoint),
      backgroundRepeat: 'no-repeat' === backgroundImageRepeat ? undefined : backgroundImageRepeat,
      backgroundSize: (0,_shared__WEBPACK_IMPORTED_MODULE_6__.getBackgroundSize)(backgroundImageSize, backgroundImageSizeX, backgroundImageSizeY, backgroundImageSizeUnitX, backgroundImageSizeUnitY),
      ...(0,_function_border__WEBPACK_IMPORTED_MODULE_9__.getBorderProperty)(attributes)
    };

    /**
     * 背景関連
     */
    const showBgMask = backgroundImageURL || backgroundColor || customBackgroundColor || gradientClass || customGradient;

    /**
     * セクションクラス名
     */
    const sectionClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section', {
      'has-background-image': backgroundImageURL,
      'is-screen-height': screenHeightMode,
      'has-animation': hasAnimation,
      'has-parallax': backgroundImageParallax,
      'is-container-fluid': isContainerFluid,
      [borderColorClass]: borderColorClass
    });
    const dataAnimation = hasAnimation ? animationType : undefined;
    const getMargin = (useResponsive, desktop, mobile) => {
      if (!useResponsive) {
        if (0 === desktop) {
          return 0;
        }
        return undefined !== desktop ? `${desktop}px` : undefined;
      }
      return (0,_aktk_util_getCssClamp__WEBPACK_IMPORTED_MODULE_7__["default"])({
        desktop,
        mobile
      });
    };
    /**
     * セクションスタイル
     */
    let sectionStyles = {
      color: textColorClass ? undefined : customTextColor,
      paddingTop: getMargin(paddingTopResponsive, paddingTop, paddingTopMobile),
      paddingBottom: getMargin(paddingBottomResponsive, paddingBottom, paddingBottomMobile),
      marginTop: getMargin(marginTopResponsive, marginTop, marginTopMobile),
      marginBottom: getMargin(marginBottomResponsive, marginBottom, marginBottomMobile),
      minHeight: sectionMinHeight ? sectionMinHeight + 'px' : undefined,
      animationDuration: hasAnimation ? `${animationSpeed}s` : undefined,
      animationDelay: hasAnimation && 0 < animationDelay ? `${animationDelay}s` : undefined
    };
    if (!backgroundImageOnOverlay) {
      sectionStyles = {
        ...sectionStyles,
        ...backgroundImageStyles
      };
    }
    const sectionClampData = {
      'margin-top': marginTopResponsive ? `${marginTop}${marginUnit}` : undefined,
      'margin-bottom': marginBottomResponsive ? `${marginBottom}${marginUnit}` : undefined,
      'padding-top': paddingTopResponsive ? `${paddingTop}${paddingUnit}` : undefined,
      'padding-bottom': paddingBottomResponsive ? `${paddingBottom}${paddingUnit}` : undefined
    };

    /**
     * 背景マスク
     */
    const bgMaskClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__bg', {
      'has-background': backgroundColor || customBackgroundColor,
      'has-background-gradient': gradient || customGradient,
      [backgroundClass]: backgroundClass,
      [gradientClass]: gradientClass,
      'is-custom-size': useCustomOverlaySize
    });
    const getMaskBackground = () => {
      if (customGradient) {
        return customGradient;
      }
      if (!backgroundClass && customBackgroundColor) {
        return customBackgroundColor;
      }
      return undefined;
    };
    const getMaskPosition = () => {
      if (!useCustomOverlaySize) {
        return {};
      }
      const posX = !!overlayPositionValueX ? `${overlayPositionValueX}${overlayPositionUnitX}` : 0;
      const posY = !!overlayPositionValueY ? `${overlayPositionValueY}${overlayPositionUnitY}` : 0;
      return {
        top: 'top' === overlayPositionX ? posX : undefined,
        bottom: 'bottom' === overlayPositionX ? posX : undefined,
        left: 'left' === overlayPositionY ? posY : undefined,
        right: 'right' === overlayPositionY ? posY : undefined
      };
    };
    const bgMaskStyle = {
      background: getMaskBackground(),
      opacity: backgroundImageOpacity / 100,
      width: useCustomOverlaySize && !!overlaySizeX ? `${overlaySizeX}${overlaySizeUnitX}` : undefined,
      height: useCustomOverlaySize && !!overlaySizeY ? `${overlaySizeY}${overlaySizeUnitY}` : undefined,
      ...getMaskPosition()
    };
    let overlayImageStyle = {
      opacity: backgroundImageOnOverlayOpacity / 100
    };
    if (backgroundImageOnOverlay) {
      overlayImageStyle = {
        ...overlayImageStyle,
        ...backgroundImageStyles
      };
    }
    const innerClampData = {
      'padding-left': paddingLeftResponsive ? `${paddingLeft}${paddingUnit}` : undefined,
      'padding-right': paddingRightResponsive ? `${paddingRight}${paddingUnit}` : undefined
    };
    const divider = attr => {
      const {
        type,
        reverse,
        position,
        level,
        colorClass,
        customColor,
        useResponsive,
        levelMobile
      } = attr;
      const dividerClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__divider', `ystdb-section__divider--${position}`, `ystdb-section__divider--${type}`);
      let pathLevel = level;
      if (reverse) {
        pathLevel = -1 * pathLevel;
      }
      if (useResponsive) {
        pathLevel = 0 > pathLevel ? -100 : 100;
      }
      const path = (0,_config__WEBPACK_IMPORTED_MODULE_5__.dividerPath)(type, pathLevel);
      const svgClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__divider-image', {
        [colorClass]: colorClass
      });
      const style = useResponsive ? {
        height: (0,_aktk_util_getCssClamp__WEBPACK_IMPORTED_MODULE_7__["default"])({
          desktop: Math.abs(level),
          mobile: Math.abs(levelMobile)
        })
      } : undefined;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: dividerClass
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: svgClass,
        viewBox: "0 0 100 100",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: 'none',
        style: style,
        role: "img"
      }, (0,_aktk_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__["default"])({
        height: useResponsive ? `${Math.abs(level)}px` : undefined
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
        d: path,
        fill: customColor
      })));
    };
    const dividerTop = 0 !== dividerLevelTop && (dividerColorTopClass || customDividerColorTop);
    const dividerBottom = 0 !== dividerLevelBottom && (dividerColorBottomClass || customDividerColorBottom);
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: sectionClass,
      style: sectionStyles,
      'data-animation': dataAnimation,
      ...(0,_aktk_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__["default"])(sectionClampData)
    });

    /**
     * インナー
     */
    const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useInnerBlocksProps.save({
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__inner', {
        'has-text-color': textColorClass || customTextColor,
        [textColorClass]: textColorClass
      }),
      style: {
        maxWidth: 0 < innerCustomWidth ? innerCustomWidth : undefined,
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingLeft: getMargin(paddingLeftResponsive, paddingLeft, paddingLeftMobile),
        paddingRight: getMargin(paddingRightResponsive, paddingRight, paddingRightMobile)
      },
      ...(0,_aktk_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__["default"])(innerClampData)
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, isVideoBackground && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("video", {
      className: "ystdb-section__video-background",
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      src: backgroundImageURL,
      style: {
        objectPosition: (0,_shared__WEBPACK_IMPORTED_MODULE_6__.getBackgroundPosition)(showFocalPointPicker, focalPoint)
      }
    }), showBgMask && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: bgMaskClass,
      "aria-hidden": "true",
      role: "img",
      style: bgMaskStyle
    }, backgroundImageOnOverlay && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: 'ystdb-section__overlay-image',
      "aria-hidden": "true",
      role: "img",
      style: overlayImageStyle
    }, "\xA0"), "\xA0"), dividerTop && divider({
      type: dividerTypeTop,
      reverse: dividerTopReverse,
      position: 'top',
      level: Math.abs(dividerLevelTop),
      colorClass: dividerColorTopClass,
      customColor: customDividerColorTop,
      useResponsive: dividerTopResponsive,
      levelMobile: dividerLevelTopMobile
    }), dividerBottom && divider({
      type: dividerTypeBottom,
      reverse: dividerBottomReverse,
      position: 'bottom',
      level: Math.abs(dividerLevelBottom),
      colorClass: dividerColorBottomClass,
      customColor: customDividerColorBottom,
      useResponsive: dividerBottomResponsive,
      levelMobile: dividerLevelBottomMobile
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "ystdb-section__container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Wrapper, innerBlocksProps)));
  }
}];

/***/ }),

/***/ "./blocks/section/deprecated/index.js":
/*!********************************************!*\
  !*** ./blocks/section/deprecated/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deprecated: () => (/* binding */ deprecated)
/* harmony export */ });
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./__deprecated */ "./blocks/section/deprecated/__deprecated.js");
/* harmony import */ var _deprecated_2_4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deprecated_2-4 */ "./blocks/section/deprecated/deprecated_2-4.js");
/* harmony import */ var _deprecated_2_5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deprecated_2-5 */ "./blocks/section/deprecated/deprecated_2-5.js");
/* harmony import */ var _deprecated_2_9_3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deprecated_2-9-3 */ "./blocks/section/deprecated/deprecated_2-9-3.js");
/* harmony import */ var _deprecated_2_9_4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deprecated_2-9-4 */ "./blocks/section/deprecated/deprecated_2-9-4.js");
/* harmony import */ var _deprecated_3_1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deprecated_3-1 */ "./blocks/section/deprecated/deprecated_3-1.js");
/* harmony import */ var _deprecated_wp_6_0__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deprecated_wp_6_0 */ "./blocks/section/deprecated/deprecated_wp_6_0.js");







const deprecated = [..._deprecated_wp_6_0__WEBPACK_IMPORTED_MODULE_6__.deprecated_wp60, ..._deprecated_3_1__WEBPACK_IMPORTED_MODULE_5__.deprecated31, ..._deprecated_2_9_4__WEBPACK_IMPORTED_MODULE_4__.deprecated294, ..._deprecated_2_9_3__WEBPACK_IMPORTED_MODULE_3__.deprecated293, ..._deprecated_2_5__WEBPACK_IMPORTED_MODULE_2__.deprecated25, ..._deprecated_2_4__WEBPACK_IMPORTED_MODULE_1__.deprecated24, ..._deprecated__WEBPACK_IMPORTED_MODULE_0__.__deprecated];

/***/ }),

/***/ "./blocks/section/edit.js":
/*!********************************!*\
  !*** ./blocks/section/edit.js ***!
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
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ "./blocks/section/config.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared */ "./blocks/section/shared.js");
/* harmony import */ var _src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/js/util/_getNum */ "./src/js/util/_getNum.js");
/* harmony import */ var _src_js_util_getNumberInputStep__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/js/util/_getNumberInputStep */ "./src/js/util/_getNumberInputStep.js");
/* harmony import */ var _src_js_components_responsive_range__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/js/components/responsive-range */ "./src/js/components/responsive-range/index.js");
/* harmony import */ var _src_js_util_getCssClamp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/js/util/_getCssClamp */ "./src/js/util/_getCssClamp.js");
/* harmony import */ var _src_js_util_convertPHPObject2JS__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/js/util/_convertPHPObject2JS */ "./src/js/util/_convertPHPObject2JS.js");
/* harmony import */ var _inspector_controls__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inspector-controls */ "./blocks/section/inspector-controls/index.js");
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./block-controls */ "./blocks/section/block-controls/index.js");
/* harmony import */ var _function_border__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./function/border */ "./blocks/section/function/border.js");
/* harmony import */ var _inspector_controls_content_width__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./inspector-controls/content-width */ "./blocks/section/inspector-controls/content-width/index.js");
/* harmony import */ var _aktk_components_color_palette_control__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @aktk/components/color-palette-control */ "./src/js/components/color-palette-control/index.js");


















const SectionEdit = props => {
  const {
    attributes,
    setAttributes,
    backgroundColor,
    setBackgroundColor,
    textColor,
    setTextColor,
    dividerColorTop,
    setDividerColorTop,
    dividerColorBottom,
    setDividerColorBottom,
    borderColor,
    setState,
    previewAnimation,
    useDarkImagePreview,
    className
  } = props;
  const {
    align,
    wrapperTag,
    marginTop,
    marginTopResponsive,
    marginTopMobile,
    marginBottom,
    marginBottomResponsive,
    marginBottomMobile,
    paddingTop,
    paddingTopResponsive,
    paddingTopMobile,
    paddingBottom,
    paddingBottomResponsive,
    paddingBottomMobile,
    paddingLeft,
    paddingLeftResponsive,
    paddingLeftMobile,
    paddingRight,
    paddingRightResponsive,
    paddingRightMobile,
    useCustomOverlaySize,
    overlaySizeX,
    overlaySizeUnitX,
    overlaySizeY,
    overlaySizeUnitY,
    overlayPositionX,
    overlayPositionValueX,
    overlayPositionUnitX,
    overlayPositionY,
    overlayPositionValueY,
    overlayPositionUnitY,
    backgroundType,
    focalPoint,
    backgroundImageURL,
    backgroundImageOpacity,
    backgroundImageParallax,
    backgroundImageSize,
    backgroundImageSizeX,
    backgroundImageSizeUnitX,
    backgroundImageSizeY,
    backgroundImageSizeUnitY,
    backgroundImageRepeat,
    backgroundImageOnOverlay,
    backgroundImageOnOverlayOpacity,
    innerCustomWidth,
    dividerTypeTop,
    dividerTopReverse,
    dividerLevelTop,
    dividerTopResponsive,
    dividerLevelTopMobile,
    dividerTypeBottom,
    dividerBottomReverse,
    dividerLevelBottom,
    dividerBottomResponsive,
    dividerLevelBottomMobile,
    screenHeightMode,
    sectionMinHeight,
    animationType,
    animationSpeed,
    animationDelay,
    containerFluid
  } = attributes;
  const {
    gradientClass,
    gradientValue,
    setGradient
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.__experimentalUseGradient)();
  const rangeStep = 1;
  const rangeMax = 200;
  const rangeMin = 0;
  const Wrapper = wrapperTag;
  const isContainerFluid = 'full' === align && containerFluid;

  /**
   * 背景画像関連
   */
  const DARK_IMAGE_PREVIEW_COLOR = '#313131';
  const showBgMask = backgroundImageURL || backgroundColor.color || gradientValue;
  const isImageBackground = _config__WEBPACK_IMPORTED_MODULE_6__.BACKGROUND_TYPE_IMAGE === backgroundType;
  const isVideoBackground = _config__WEBPACK_IMPORTED_MODULE_6__.BACKGROUND_TYPE_VIDEO === backgroundType;
  const showFocalPointPicker = !isVideoBackground || isImageBackground && !backgroundImageParallax;
  const getMargin = (useResponsive, desktop, mobile) => {
    if (!useResponsive) {
      if (0 === desktop) {
        return 0;
      }
      return undefined !== desktop ? `${desktop}px` : undefined;
    }
    return (0,_src_js_util_getCssClamp__WEBPACK_IMPORTED_MODULE_11__["default"])({
      desktop,
      mobile
    });
  };
  const hasAnimation = previewAnimation && 'none' !== animationType;

  /**
   * 背景画像
   */
  const backgroundImageStyles = {
    backgroundImage: backgroundImageURL && isImageBackground ? `url('${backgroundImageURL}')` : undefined,
    backgroundPosition: (0,_shared__WEBPACK_IMPORTED_MODULE_7__.getBackgroundPosition)(showFocalPointPicker, focalPoint),
    backgroundSize: (0,_shared__WEBPACK_IMPORTED_MODULE_7__.getBackgroundSize)(backgroundImageSize, backgroundImageSizeX, backgroundImageSizeY, backgroundImageSizeUnitX, backgroundImageSizeUnitY),
    backgroundRepeat: 'no-repeat' === backgroundImageRepeat ? undefined : backgroundImageRepeat
  };

  /**
   * セクションクラス名
   */
  const sectionClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'ystdb-section', {
    'has-background-image': isImageBackground,
    'has-background-video': isVideoBackground,
    'is-screen-height': screenHeightMode,
    'has-animation': hasAnimation,
    [`animation--${animationType}`]: hasAnimation,
    'is-container-fluid': isContainerFluid
  });

  /**
   * セクションスタイル
   */
  let sectionStyles = {
    paddingTop: getMargin(paddingTopResponsive, paddingTop, paddingTopMobile),
    paddingBottom: getMargin(paddingBottomResponsive, paddingBottom, paddingBottomMobile),
    marginTop: getMargin(marginTopResponsive, marginTop, marginTopMobile),
    marginBottom: getMargin(marginBottomResponsive, marginBottom, marginBottomMobile),
    color: textColor.color,
    minHeight: sectionMinHeight ? sectionMinHeight + 'px' : undefined,
    animationDuration: hasAnimation ? `${animationSpeed}s` : undefined,
    animationDelay: hasAnimation && 0 < animationDelay ? `${animationDelay}s` : undefined,
    ...(0,_function_border__WEBPACK_IMPORTED_MODULE_15__.getBorderProperty)({
      ...attributes,
      ...{
        customBorderColor: borderColor.color
      }
    })
  };
  if (!backgroundImageOnOverlay) {
    sectionStyles = {
      ...sectionStyles,
      ...backgroundImageStyles
    };
  }
  /**
   * 背景マスク
   */
  const bgMaskClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-section__bg', {
    'has-background': backgroundColor.color,
    [backgroundColor.class]: backgroundColor.class,
    'has-background-gradient': gradientValue,
    [gradientClass]: gradientClass,
    'is-custom-size': useCustomOverlaySize
  });
  const getMaskBackground = () => {
    if (gradientValue) {
      return gradientValue;
    }
    if (backgroundColor.color) {
      return backgroundColor.color;
    }
    return undefined;
  };
  const getMaskPosition = () => {
    if (!useCustomOverlaySize) {
      return {};
    }
    const posX = !!overlayPositionValueX ? `${overlayPositionValueX}${overlayPositionUnitX}` : 0;
    const posY = !!overlayPositionValueY ? `${overlayPositionValueY}${overlayPositionUnitY}` : 0;
    return {
      top: 'top' === overlayPositionX ? posX : undefined,
      bottom: 'bottom' === overlayPositionX ? posX : undefined,
      left: 'left' === overlayPositionY ? posY : undefined,
      right: 'right' === overlayPositionY ? posY : undefined
    };
  };
  const bgMaskStyle = {
    background: getMaskBackground(),
    opacity: backgroundImageOpacity / 100,
    width: useCustomOverlaySize && !!overlaySizeX ? `${overlaySizeX}${overlaySizeUnitX}` : undefined,
    height: useCustomOverlaySize && !!overlaySizeY ? `${overlaySizeY}${overlaySizeUnitY}` : undefined,
    ...getMaskPosition()
  };
  let overlayImageStyle = {
    opacity: backgroundImageOnOverlayOpacity / 100
  };
  if (backgroundImageOnOverlay) {
    overlayImageStyle = {
      ...overlayImageStyle,
      ...backgroundImageStyles
    };
  }
  const divider = attr => {
    const {
      type,
      reverse,
      position,
      level,
      color,
      useResponsive,
      levelMobile
    } = attr;
    const dividerClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-section__divider', `ystdb-section__divider--${position}`, `ystdb-section__divider--${type}`);
    let pathLevel = level;
    if (reverse) {
      pathLevel = -1 * pathLevel;
    }
    if (useResponsive) {
      pathLevel = 0 > pathLevel ? -100 : 100;
    }
    const path = (0,_config__WEBPACK_IMPORTED_MODULE_6__.dividerPath)(type, pathLevel);
    const style = useResponsive ? {
      height: (0,_src_js_util_getCssClamp__WEBPACK_IMPORTED_MODULE_11__["default"])({
        desktop: Math.abs(level),
        mobile: Math.abs(levelMobile)
      })
    } : undefined;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: dividerClass
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SVG, {
      viewBox: "0 0 100 100",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: 'none',
      style: style
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Path, {
      d: path,
      fill: color
    })));
  };

  /**
   * Block Props.
   */
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
    className: sectionClass,
    style: sectionStyles
  });
  /**
   * InnerBlocks Props.
   */
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useInnerBlocksProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystdb-section__inner', {
      'has-text-color': textColor.color,
      [textColor.class]: textColor.class
    }),
    style: {
      maxWidth: innerCustomWidth !== 0 ? innerCustomWidth : undefined,
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingLeft: 0 === paddingLeft && !paddingLeftResponsive ? undefined : getMargin(paddingLeftResponsive, paddingLeft, paddingLeftMobile),
      paddingRight: 0 === paddingRight && !paddingRightResponsive ? undefined : getMargin(paddingRightResponsive, paddingRight, paddingRightMobile)
    }
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_controls__WEBPACK_IMPORTED_MODULE_14__.ContainerFluid, props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspectorcontrols"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('余白設定', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    id: 'margin',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('余白設定(外側)', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    id: 'margin-preset',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('かんたん設定', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'ystdb-btn-selector components-base-control'
  }, _config__WEBPACK_IMPORTED_MODULE_6__.marginType.margin.map(item => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
      key: item.value,
      isSecondary: true,
      onClick: () => {
        setAttributes({
          marginTop: item.num,
          marginBottom: item.num
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, item.label));
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    "data-control": "margin-top"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_js_components_responsive_range__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: 'margin-top',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('上側', 'ystandard-blocks'),
    useResponsive: marginTopResponsive,
    changeResponsiveMode: value => {
      setAttributes({
        marginTopResponsive: value
      });
    },
    desktopValue: marginTop,
    desktopOnChange: value => setAttributes({
      marginTop: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, -1 * rangeMax, rangeMax, 0)
    }),
    desktopControl: () => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
        value: marginTop,
        onChange: value => setAttributes({
          marginTop: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, -1 * rangeMax, rangeMax, 0)
        }),
        min: -1 * rangeMax,
        max: rangeMax,
        step: rangeStep
      });
    },
    min: -1 * rangeMax,
    max: rangeMax,
    step: rangeStep,
    mobileValue: marginTopMobile,
    mobileUnit: '',
    mobileOnChange: value => setAttributes({
      marginTopMobile: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, -1 * rangeMax, rangeMax, 0)
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    "data-control": "margin-bottom"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_js_components_responsive_range__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: 'margin-bottom',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('下側', 'ystandard-blocks'),
    useResponsive: marginBottomResponsive,
    changeResponsiveMode: value => {
      setAttributes({
        marginBottomResponsive: value
      });
    },
    desktopValue: marginBottom,
    desktopOnChange: value => setAttributes({
      marginBottom: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, -1 * rangeMax, rangeMax, 0)
    }),
    desktopControl: () => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
        value: marginBottom,
        onChange: value => setAttributes({
          marginBottom: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, -1 * rangeMax, rangeMax, 0)
        }),
        min: -1 * rangeMax,
        max: rangeMax,
        step: rangeStep
      });
    },
    min: -1 * rangeMax,
    max: rangeMax,
    step: rangeStep,
    mobileValue: marginBottomMobile,
    mobileUnit: '',
    mobileOnChange: value => setAttributes({
      marginBottomMobile: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, -1 * rangeMax, rangeMax, 0)
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `ystdb-info__small`
  }, "\u203B\u6570\u5B57\u304C\u5927\u304D\u3044\u307B\u3069\u4F59\u767D\u304C\u5927\u304D\u304F\u306A\u308A\u307E\u3059\u3002"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    id: 'padding',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('余白設定(内側)', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    id: 'padding-preset',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('かんたん設定', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'ystdb-btn-selector components-base-control'
  }, _config__WEBPACK_IMPORTED_MODULE_6__.marginType.padding.map(item => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
      key: item.value,
      isSecondary: true,
      onClick: () => {
        setAttributes({
          paddingTop: item.num,
          paddingBottom: item.num
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, item.label));
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `ystdb-info__small`
  }, "\u203B\u4E0A\u4E0B\u4F59\u767D\u306E\u304B\u3093\u305F\u3093\u8A2D\u5B9A")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    "data-control": "padding-top"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_js_components_responsive_range__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: 'padding-top',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('上側', 'ystandard-blocks'),
    useResponsive: paddingTopResponsive,
    changeResponsiveMode: value => {
      setAttributes({
        paddingTopResponsive: value
      });
    },
    desktopValue: paddingTop,
    desktopOnChange: value => setAttributes({
      paddingTop: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, rangeMin, rangeMax)
    }),
    desktopControl: () => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
        value: paddingTop,
        onChange: value => setAttributes({
          paddingTop: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, rangeMin, rangeMax)
        }),
        min: rangeMin,
        max: rangeMax,
        step: rangeStep
      });
    },
    min: rangeMin,
    max: rangeMax,
    step: rangeStep,
    mobileValue: paddingTopMobile,
    mobileUnit: '',
    mobileOnChange: value => setAttributes({
      paddingTopMobile: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, rangeMin, rangeMax)
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    "data-control": "padding-bottom"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_js_components_responsive_range__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: 'padding-bottom',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('下側', 'ystandard-blocks'),
    useResponsive: paddingBottomResponsive,
    changeResponsiveMode: value => {
      setAttributes({
        paddingBottomResponsive: value
      });
    },
    desktopValue: paddingBottom,
    desktopOnChange: value => setAttributes({
      paddingBottom: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, rangeMin, rangeMax)
    }),
    desktopControl: () => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
        value: paddingBottom,
        onChange: value => setAttributes({
          paddingBottom: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, rangeMin, rangeMax)
        }),
        min: rangeMin,
        max: rangeMax,
        step: rangeStep
      });
    },
    min: rangeMin,
    max: rangeMax,
    step: rangeStep,
    mobileValue: paddingBottomMobile,
    mobileUnit: '',
    mobileOnChange: value => setAttributes({
      paddingBottomMobile: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, rangeMin, rangeMax)
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    "data-control": "padding-left"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_js_components_responsive_range__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: 'padding-left',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('左側', 'ystandard-blocks'),
    useResponsive: paddingLeftResponsive,
    changeResponsiveMode: value => {
      setAttributes({
        paddingLeftResponsive: value
      });
    },
    desktopValue: paddingLeft,
    desktopOnChange: value => setAttributes({
      paddingLeft: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, rangeMin, rangeMax)
    }),
    desktopControl: () => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
        value: paddingLeft,
        onChange: value => setAttributes({
          paddingLeft: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, rangeMin, rangeMax)
        }),
        min: rangeMin,
        max: rangeMax,
        step: rangeStep
      });
    },
    min: rangeMin,
    max: rangeMax,
    step: rangeStep,
    mobileValue: paddingLeftMobile,
    mobileUnit: '',
    mobileOnChange: value => setAttributes({
      paddingLeftMobile: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, rangeMin, rangeMax)
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    "data-control": "padding-right"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_js_components_responsive_range__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: 'padding-right',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('右側', 'ystandard-blocks'),
    useResponsive: paddingRightResponsive,
    changeResponsiveMode: value => {
      setAttributes({
        paddingRightResponsive: value
      });
    },
    desktopValue: paddingRight,
    desktopOnChange: value => setAttributes({
      paddingRight: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, rangeMin, rangeMax)
    }),
    desktopControl: () => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
        value: paddingRight,
        onChange: value => setAttributes({
          paddingRight: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, rangeMin, rangeMax)
        }),
        min: rangeMin,
        max: rangeMax,
        step: rangeStep
      });
    },
    min: rangeMin,
    max: rangeMax,
    step: rangeStep,
    mobileValue: paddingRightMobile,
    mobileUnit: '',
    mobileOnChange: value => setAttributes({
      paddingRightMobile: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, rangeMin, rangeMax)
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `ystdb-info__small`
  }, "\u203B\u6570\u5B57\u304C\u5927\u304D\u3044\u307B\u3069\u4F59\u767D\u304C\u5927\u304D\u304F\u306A\u308A\u307E\u3059\u3002")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.__experimentalPanelColorGradientSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('背景色・オーバーレイ', 'ystandard-blocks'),
    initialOpen: false,
    settings: [{
      colorValue: backgroundColor.color,
      gradientValue,
      onColorChange: setBackgroundColor,
      onGradientChange: setGradient,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('背景色', 'ystandard-blocks')
    }]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    id: 'overlay-opacity',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('不透明度', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    value: backgroundImageOpacity,
    onChange: value => setAttributes({
      backgroundImageOpacity: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, 0, 100)
    }),
    min: 0,
    max: 100,
    step: 1
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    id: 'overlay-custom-size',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('サイズ・配置', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('サイズ・配置を指定する', 'ystandard-blocks'),
    checked: useCustomOverlaySize,
    onChange: () => {
      if (useCustomOverlaySize) {
        setAttributes({
          overlaySizeX: undefined,
          overlaySizeUnitX: undefined,
          overlaySizeY: undefined,
          overlaySizeUnitY: undefined,
          overlayPositionX: undefined,
          overlayPositionValueX: undefined,
          overlayPositionUnitX: undefined,
          overlayPositionY: undefined,
          overlayPositionValueY: undefined,
          overlayPositionUnitY: undefined
        });
      }
      setAttributes({
        useCustomOverlaySize: !useCustomOverlaySize
      });
    }
  })), useCustomOverlaySize && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    id: 'overlay-size',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('サイズ', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__columns"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('幅　', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalNumberControl, {
    value: overlaySizeX,
    onChange: value => {
      const newValue = '' === value ? '' : (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, 0, 9999, 0);
      setAttributes({
        overlaySizeX: newValue.toString()
      });
    },
    min: 0,
    max: 9999,
    step: (0,_src_js_util_getNumberInputStep__WEBPACK_IMPORTED_MODULE_9__["default"])(overlaySizeUnitX),
    style: {
      flexGrow: 1
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    value: overlaySizeUnitX,
    options: _config__WEBPACK_IMPORTED_MODULE_6__.overlaySizeUnitOption,
    onChange: type => {
      setAttributes({
        overlaySizeUnitX: type
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__columns"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('高さ', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalNumberControl, {
    value: overlaySizeY,
    onChange: value => {
      const newValue = '' === value ? '' : (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, 0, 9999, 0);
      setAttributes({
        overlaySizeY: newValue.toString()
      });
    },
    min: 0,
    max: 9999,
    step: (0,_src_js_util_getNumberInputStep__WEBPACK_IMPORTED_MODULE_9__["default"])(overlaySizeUnitY),
    style: {
      flexGrow: 1
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    value: overlaySizeUnitY,
    options: _config__WEBPACK_IMPORTED_MODULE_6__.overlaySizeUnitOption,
    onChange: type => {
      setAttributes({
        overlaySizeUnitY: type
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    id: 'overlay-position',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('配置', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__columns"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    value: overlayPositionX,
    options: _config__WEBPACK_IMPORTED_MODULE_6__.overlayPositionXOption,
    onChange: type => {
      setAttributes({
        overlayPositionX: type
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalNumberControl, {
    value: overlayPositionValueX,
    onChange: value => {
      const newValue = '' === value ? '' : (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, 0, 9999, 0);
      setAttributes({
        overlayPositionValueX: newValue.toString()
      });
    },
    min: 0,
    max: 9999,
    step: (0,_src_js_util_getNumberInputStep__WEBPACK_IMPORTED_MODULE_9__["default"])(overlayPositionUnitX),
    style: {
      flexGrow: 1
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    value: overlayPositionUnitX,
    options: _config__WEBPACK_IMPORTED_MODULE_6__.overlaySizeUnitOption,
    onChange: type => {
      setAttributes({
        overlayPositionUnitX: type
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__columns"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    value: overlayPositionY,
    options: _config__WEBPACK_IMPORTED_MODULE_6__.overlayPositionYOption,
    onChange: type => {
      setAttributes({
        overlayPositionY: type
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalNumberControl, {
    value: overlayPositionValueY,
    onChange: value => {
      const newValue = '' === value ? '' : (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, 0, 9999, 0);
      setAttributes({
        overlayPositionValueY: newValue.toString()
      });
    },
    min: 0,
    max: 9999,
    step: (0,_src_js_util_getNumberInputStep__WEBPACK_IMPORTED_MODULE_9__["default"])(overlayPositionUnitY),
    style: {
      flexGrow: 1
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    value: overlayPositionUnitY,
    options: _config__WEBPACK_IMPORTED_MODULE_6__.overlaySizeUnitOption,
    onChange: type => {
      setAttributes({
        overlayPositionUnitY: type
      });
    }
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('背景画像・動画', 'ystandard-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_controls__WEBPACK_IMPORTED_MODULE_13__.BackgroundImage, props), backgroundImageURL && _config__WEBPACK_IMPORTED_MODULE_6__.BACKGROUND_TYPE_IMAGE === backgroundType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('プレビューの背景を暗くする', 'ystandard-blocks'),
    checked: useDarkImagePreview,
    onChange: () => {
      setState({
        useDarkImagePreview: !useDarkImagePreview
      });
    }
  })), showFocalPointPicker && backgroundImageURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    id: 'background-point',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('表示位置', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.FocalPointPicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Focal point picker'),
    url: backgroundImageURL,
    value: focalPoint,
    onChange: newFocalPoint => {
      setAttributes({
        focalPoint: newFocalPoint
      });
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'dark-focal-point-picker': useDarkImagePreview
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    id: 'background-size',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('サイズ', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    value: backgroundImageSize,
    options: _config__WEBPACK_IMPORTED_MODULE_6__.backgroundImageSizeOption,
    onChange: type => {
      setAttributes({
        backgroundImageSize: type
      });
      if ('custom' !== type) {
        setAttributes({
          backgroundImageSizeX: undefined,
          backgroundImageSizeY: undefined,
          backgroundImageSizeUnitX: 'px',
          backgroundImageSizeUnitY: 'px'
        });
      }
    }
  }), 'custom' === backgroundImageSize && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__columns"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('幅　', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalNumberControl, {
    value: backgroundImageSizeX,
    onChange: value => {
      const newValue = '' === value ? '' : (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, 0, 9999, 0);
      setAttributes({
        backgroundImageSizeX: newValue.toString()
      });
    },
    min: 0,
    max: 9999,
    step: (0,_src_js_util_getNumberInputStep__WEBPACK_IMPORTED_MODULE_9__["default"])(backgroundImageSizeUnitX),
    style: {
      flexGrow: 1
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    value: backgroundImageSizeUnitX,
    options: _config__WEBPACK_IMPORTED_MODULE_6__.backgroundImageSizeUnitOption,
    onChange: type => {
      setAttributes({
        backgroundImageSizeUnitX: type
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__columns"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('高さ', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalNumberControl, {
    value: backgroundImageSizeY,
    onChange: value => {
      const newValue = '' === value ? '' : (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, 0, 9999, 0);
      setAttributes({
        backgroundImageSizeY: newValue.toString()
      });
    },
    min: 0,
    max: 9999,
    step: (0,_src_js_util_getNumberInputStep__WEBPACK_IMPORTED_MODULE_9__["default"])(backgroundImageSizeUnitY),
    style: {
      flexGrow: 1
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    value: backgroundImageSizeUnitY,
    options: _config__WEBPACK_IMPORTED_MODULE_6__.backgroundImageSizeUnitOption,
    onChange: type => {
      setAttributes({
        backgroundImageSizeUnitY: type
      });
    }
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    id: 'background-repeat',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('繰り返し', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    value: backgroundImageRepeat,
    options: _config__WEBPACK_IMPORTED_MODULE_6__.backgroundImageRepeatOption,
    onChange: type => {
      setAttributes({
        backgroundImageRepeat: type
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    id: 'background-opacity',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('固定背景', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('背景を固定する', 'ystandard-blocks'),
    checked: backgroundImageParallax,
    onChange: () => {
      setAttributes({
        backgroundImageParallax: !backgroundImageParallax
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('背景パターン', 'ystandard-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__dscr"
  }, "\u80CC\u666F\u30D1\u30BF\u30FC\u30F3\u753B\u50CF\u3092\u4F7F\u3046\u3068\u304D\u306B\u4FBF\u5229\u306A\u8A2D\u5B9A\u3067\u3059\u3002")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    id: 'background-pattern-overlay',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('オーバーレイ', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('背景画像をオーバーレイより前に重ねる', 'ystandard-blocks'),
    checked: backgroundImageOnOverlay,
    onChange: () => {
      if (backgroundImageOnOverlay) {
        setAttributes({
          backgroundImageOnOverlayOpacity: 80
        });
      }
      setAttributes({
        backgroundImageOnOverlay: !backgroundImageOnOverlay
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__dscr"
  }, "\u767D\u306A\u3069\u660E\u308B\u3044\u8272\u306E\u30D1\u30BF\u30FC\u30F3\u753B\u50CF\u3092\u4F7F\u3046\u5834\u5408\u306F\u3053\u306E\u8A2D\u5B9A\u3092ON\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002")), backgroundImageOnOverlay && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    id: 'background-pattern-overlay-opacity',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('背景画像の不透明度', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    value: backgroundImageOnOverlayOpacity,
    onChange: value => setAttributes({
      backgroundImageOnOverlayOpacity: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, 0, 100)
    }),
    min: 0,
    max: 100,
    step: 1
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    id: 'background-pattern-preset',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('サンプル背景パターン', 'ystandard-blocks')
  }, !!ystdb.sectionBackgroundPatterns ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__dscr"
  }, "\u80CC\u666F\u30D1\u30BF\u30FC\u30F3\u306E\u30B5\u30F3\u30D7\u30EB\u30C7\u30B6\u30A4\u30F3\u3067\u3059\u3002\u30C7\u30B6\u30A4\u30F3\u3092\u9078\u629E\u3059\u308B\u3068\u3001\u5FC5\u8981\u306A\u8A2D\u5B9A\u304C\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059\u3002"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb__design-select"
  }, ystdb.sectionBackgroundPatterns.map(item => {
    const imageUrl = item.image;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
      key: item.name,
      onClick: () => {
        setAttributes({
          ...(0,_src_js_util_convertPHPObject2JS__WEBPACK_IMPORTED_MODULE_12__["default"])(item.value),
          backgroundImageURL: imageUrl
        });
        setState({
          useDarkImagePreview: item.useDarkPreview
        });
      },
      style: {
        ...item.style,
        backgroundImage: `url('${imageUrl}')`,
        backgroundColor: item.useDarkPreview ? DARK_IMAGE_PREVIEW_COLOR : undefined
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        opacity: 0
      }
    }, item.name));
  }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-premium-feature"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ExternalLink, {
    herf: 'https://wp-ystandard.com/plugins/ystandard-toolbox/'
  }, "yStandard Toolbox"), "\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u30FB\u6709\u52B9\u5316\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u30B5\u30F3\u30D7\u30EB\u80CC\u666F\u30D1\u30BF\u30FC\u30F3\u3092\u5229\u7528\u3067\u304D\u307E\u3059\u3002"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('枠線設定', 'ystandard-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_controls__WEBPACK_IMPORTED_MODULE_13__.BorderSize, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_controls__WEBPACK_IMPORTED_MODULE_13__.BorderStyle, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_controls__WEBPACK_IMPORTED_MODULE_13__.BorderColor, props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('文字設定', 'ystandard-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    id: 'text-color',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('文字色', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_color_palette_control__WEBPACK_IMPORTED_MODULE_17__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('文字色', 'ystandard-blocks'),
    value: textColor.color,
    onChange: color => {
      setTextColor(color);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.ContrastChecker, {
    backgroundColor: backgroundColor.color,
    textColor: textColor.color
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('区切り線（上）', 'ystandard-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__dscr"
  }, "\u30BF\u30A4\u30D7\u30FB\u30EC\u30D9\u30EB\u30FB\u8272\u3092\u3059\u3079\u3066\u8A2D\u5B9A\u3059\u308B\u3068\u8868\u793A\u3055\u308C\u307E\u3059\u3002", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    id: 'divider-top-type',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('タイプ', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'ystdb-btn-selector components-base-control'
  }, _config__WEBPACK_IMPORTED_MODULE_6__.dividerTypes.map(item => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
      key: item.value,
      isSecondary: dividerTypeTop !== item.value,
      isPrimary: dividerTypeTop === item.value,
      onClick: () => {
        setAttributes({
          dividerTypeTop: item.value
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, item.label));
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('左右反転させる', 'ystandard-blocks'),
    checked: dividerTopReverse || 0 > dividerLevelTop,
    onChange: () => {
      setAttributes({
        dividerTopReverse: !dividerTopReverse
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_js_components_responsive_range__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: 'divider-level-top',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('レベル', 'ystandard-blocks'),
    useResponsive: dividerTopResponsive,
    changeResponsiveMode: value => {
      setAttributes({
        dividerTopResponsive: value
      });
    },
    desktopValue: Math.abs(dividerLevelTop),
    desktopUnit: '',
    desktopOnChange: value => setAttributes({
      dividerLevelTop: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, 0, 100, 0)
    }),
    min: 0,
    max: 100,
    mobileValue: dividerLevelTopMobile,
    mobileUnit: '',
    mobileOnChange: value => setAttributes({
      dividerLevelTopMobile: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, 0, 100, 0)
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    id: 'divider-top-color',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('色', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_color_palette_control__WEBPACK_IMPORTED_MODULE_17__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('色', 'ystandard-blocks'),
    value: dividerColorTop.color,
    onChange: color => {
      setDividerColorTop(color);
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('区切り線（下）', 'ystandard-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__dscr"
  }, "\u30BF\u30A4\u30D7\u30FB\u30EC\u30D9\u30EB\u30FB\u8272\u3092\u3059\u3079\u3066\u8A2D\u5B9A\u3059\u308B\u3068\u8868\u793A\u3055\u308C\u307E\u3059\u3002", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    id: 'divider-bottom-type',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('タイプ', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'ystdb-btn-selector components-base-control'
  }, _config__WEBPACK_IMPORTED_MODULE_6__.dividerTypes.map(item => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
      key: item.value,
      isSecondary: dividerTypeBottom !== item.value,
      isPrimary: dividerTypeBottom === item.value,
      onClick: () => {
        setAttributes({
          dividerTypeBottom: item.value
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, item.label));
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('左右反転させる', 'ystandard-blocks'),
    checked: dividerBottomReverse || 0 > dividerLevelBottom,
    onChange: () => {
      setAttributes({
        dividerBottomReverse: !dividerBottomReverse
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_js_components_responsive_range__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('レベル', 'ystandard-blocks'),
    useResponsive: dividerBottomResponsive,
    changeResponsiveMode: value => {
      setAttributes({
        dividerBottomResponsive: value
      });
    },
    desktopValue: Math.abs(dividerLevelBottom),
    desktopUnit: '',
    desktopOnChange: value => setAttributes({
      dividerLevelBottom: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, 0, 100, 0)
    }),
    min: 0,
    max: 100,
    mobileValue: dividerLevelBottomMobile,
    mobileUnit: '',
    mobileOnChange: value => setAttributes({
      dividerLevelBottomMobile: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, -100, 100, 0)
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    id: 'divider-bottom-color',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('色', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_color_palette_control__WEBPACK_IMPORTED_MODULE_17__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('色', 'ystandard-blocks'),
    value: dividerColorBottom.color,
    onChange: color => {
      setDividerColorBottom(color);
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_controls_content_width__WEBPACK_IMPORTED_MODULE_16__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('セクション高さ設定', 'ystandard-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('高さ設定', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('画面と同じ高さにする', 'ystandard-blocks'),
    checked: screenHeightMode,
    onChange: () => {
      setAttributes({
        screenHeightMode: !screenHeightMode
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('セクション最小高さ', 'ystandard-blocks'),
    value: sectionMinHeight,
    onChange: value => setAttributes({
      sectionMinHeight: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, 0, 1000, 0)
    }),
    min: 0,
    max: 1000,
    allowReset: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-inspector-controls__dscr"
  }, "\u203B\u300C\u753B\u9762\u3068\u540C\u3058\u9AD8\u3055\u306B\u3059\u308B\u300D\u3092ON\u306B\u3057\u305F\u5834\u5408\u3001\u30BB\u30AF\u30B7\u30E7\u30F3\u6700\u5C0F\u9AD8\u3055\u3082\u5408\u308F\u305B\u3066\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002\uFF08\u4F8B\uFF1A500\uFF09")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('アニメーション設定', 'ystandard-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('アニメーション種類', 'ystandard-blocks'),
    value: animationType,
    options: _config__WEBPACK_IMPORTED_MODULE_6__.animationTypes,
    onChange: type => {
      setAttributes({
        animationType: type
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('アニメーション速度', 'ystandard-blocks'),
    value: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(animationSpeed, 1, 10, 2),
    onChange: value => setAttributes({
      animationSpeed: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, 1, 10, 2)
    }),
    min: 1,
    max: 10,
    step: 0.1,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('アニメーション開始までの時間', 'ystandard-blocks'),
    value: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(animationDelay, 0, 10, 0),
    onChange: value => setAttributes({
      animationDelay: (0,_src_js_util_getNum__WEBPACK_IMPORTED_MODULE_8__["default"])(value, 0, 10, 0)
    }),
    min: 0,
    max: 10,
    step: 0.1,
    allowReset: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    key: 'check-animation',
    isPrimary: true,
    onClick: () => {
      setState({
        previewAnimation: !previewAnimation
      });
      if (!previewAnimation) {
        setTimeout(() => {
          setState({
            previewAnimation: false
          });
        }, (animationDelay + animationSpeed) * 1000);
      }
    }
  }, previewAnimation ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('アニメーションの停止', 'ystandard-blocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('アニメーションの確認', 'ystandard-blocks')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('HTMLタグ設定', 'ystandard-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `ystdb-info__small`
  }, "\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u56F2\u3080HTML\u30BF\u30B0\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'ystdb-btn-selector components-base-control'
  }, _config__WEBPACK_IMPORTED_MODULE_6__.wrapperTagNames.map(item => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
      key: item.tag,
      isSecondary: wrapperTag !== item.tag,
      isPrimary: wrapperTag === item.tag,
      onClick: () => {
        setAttributes({
          wrapperTag: item.tag
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, item.tag));
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, isVideoBackground && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
    className: "ystdb-section__video-background",
    autoPlay: true,
    muted: true,
    loop: true,
    src: backgroundImageURL,
    style: {
      objectPosition: (0,_shared__WEBPACK_IMPORTED_MODULE_7__.getBackgroundPosition)(showFocalPointPicker, focalPoint)
    }
  }), showBgMask && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: bgMaskClass,
    "aria-hidden": "true",
    role: "img",
    style: bgMaskStyle
  }, backgroundImageOnOverlay && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'ystdb-section__overlay-image',
    "aria-hidden": "true",
    role: "img",
    style: overlayImageStyle
  }, "\xA0"), "\xA0"), 0 !== dividerLevelTop && dividerColorTop.color && divider({
    type: dividerTypeTop,
    reverse: dividerTopReverse,
    position: 'top',
    level: dividerLevelTop,
    color: dividerColorTop.color,
    useResponsive: dividerTopResponsive,
    levelMobile: dividerLevelTopMobile
  }), 0 !== dividerLevelBottom && dividerColorBottom.color && divider({
    type: dividerTypeBottom,
    reverse: dividerBottomReverse,
    position: 'bottom',
    level: dividerLevelBottom,
    color: dividerColorBottom.color,
    useResponsive: dividerBottomResponsive,
    levelMobile: dividerLevelBottomMobile
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-section__container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Wrapper, innerBlocksProps))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.withColors)('backgroundColor', {
  textColor: 'color',
  dividerColorTop: 'fill',
  dividerColorBottom: 'fill',
  borderColor: 'borderColor'
}), (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.withState)({
  previewAnimation: false,
  useDarkImagePreview: false
})])(SectionEdit));

/***/ }),

/***/ "./blocks/section/function/border.js":
/*!*******************************************!*\
  !*** ./blocks/section/function/border.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBorderProperty: () => (/* binding */ getBorderProperty)
/* harmony export */ });
/* harmony import */ var _aktk_helper_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aktk/helper/number */ "./src/js/helper/number.js");

const getBorderProperty = attributes => {
  const {
    borderSize,
    borderStyle,
    customBorderColor
  } = attributes;
  const borderSizeNum = (0,_aktk_helper_number__WEBPACK_IMPORTED_MODULE_0__.toNumber)(parseInt(borderSize), undefined);
  const style = borderStyle !== null && borderStyle !== void 0 ? borderStyle : 'solid';
  if (!borderSizeNum) {
    return undefined;
  }
  if (!customBorderColor) {
    return {
      borderWidth: borderSize,
      borderStyle: style
    };
  }
  return {
    border: `${borderSize} ${style} ${customBorderColor}`.trim()
  };
};

/***/ }),

/***/ "./blocks/section/inspector-controls/background-image.js":
/*!***************************************************************!*\
  !*** ./blocks/section/inspector-controls/background-image.js ***!
  \***************************************************************/
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
/* harmony import */ var _aktk_components_media_upload_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aktk/components/media-upload-control */ "./src/js/components/media-upload-control/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./blocks/section/config.js");





const BackgroundImage = props => {
  const {
    attributes,
    setAttributes,
    setState
  } = props;
  const {
    backgroundImageURL,
    backgroundImageID,
    backgroundImageAlt,
    backgroundType,
    backgroundImageOpacity
  } = attributes;
  const ALLOWED_MEDIA_TYPES = ['image', 'video'];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    id: 'background-image',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('背景画像・動画', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_media_upload_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    media: {
      url: backgroundImageURL,
      id: backgroundImageID,
      alt: backgroundImageAlt,
      type: backgroundType
    },
    mediaTypes: ALLOWED_MEDIA_TYPES,
    onSelect: media => {
      let mediaType;
      if (media.media_type) {
        if (media.media_type === _config__WEBPACK_IMPORTED_MODULE_4__.BACKGROUND_TYPE_IMAGE) {
          mediaType = _config__WEBPACK_IMPORTED_MODULE_4__.BACKGROUND_TYPE_IMAGE;
        } else {
          mediaType = _config__WEBPACK_IMPORTED_MODULE_4__.BACKGROUND_TYPE_VIDEO;
        }
      } else {
        if (media.type !== _config__WEBPACK_IMPORTED_MODULE_4__.BACKGROUND_TYPE_IMAGE && media.type !== _config__WEBPACK_IMPORTED_MODULE_4__.BACKGROUND_TYPE_VIDEO) {
          return;
        }
        mediaType = media.type;
      }
      setAttributes({
        backgroundImageURL: media.url,
        backgroundImageID: media.id,
        backgroundImageAlt: media.alt,
        backgroundType: mediaType
      });
      if (mediaType === _config__WEBPACK_IMPORTED_MODULE_4__.BACKGROUND_TYPE_VIDEO) {
        setAttributes({
          backgroundImageOnOverlay: false,
          backgroundImageOnOverlayOpacity: 80
        });
        setState({
          useDarkImagePreview: false
        });
      }
      if (100 === backgroundImageOpacity) {
        setAttributes({
          backgroundImageOpacity: 50
        });
      }
    },
    onClear: () => {
      setAttributes({
        backgroundImageURL: '',
        backgroundImageID: 0,
        focalPoint: undefined,
        backgroundType: undefined,
        backgroundImageParallax: undefined,
        backgroundImageSize: undefined,
        backgroundImageSizeX: undefined,
        backgroundImageSizeUnitX: undefined,
        backgroundImageSizeY: undefined,
        backgroundImageSizeUnitY: undefined,
        backgroundImageRepeat: undefined,
        backgroundImageOnOverlay: undefined,
        backgroundImageOnOverlayOpacity: undefined
      });
      setState({
        useDarkImagePreview: false
      });
    },
    value: backgroundImageID
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackgroundImage);

/***/ }),

/***/ "./blocks/section/inspector-controls/border-color.js":
/*!***********************************************************!*\
  !*** ./blocks/section/inspector-controls/border-color.js ***!
  \***********************************************************/
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
/* harmony import */ var _aktk_components_color_palette_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aktk/components/color-palette-control */ "./src/js/components/color-palette-control/index.js");




const BorderColor = props => {
  const {
    borderColor,
    setBorderColor
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    id: 'border-color',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('枠線色', 'ystandard-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_color_palette_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('枠線色', 'ystandard-blocks'),
    value: borderColor.color,
    onChange: color => {
      setBorderColor(color);
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BorderColor);

/***/ }),

/***/ "./blocks/section/inspector-controls/border-size.js":
/*!**********************************************************!*\
  !*** ./blocks/section/inspector-controls/border-size.js ***!
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aktk_helper_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aktk/helper/number */ "./src/js/helper/number.js");




const BorderSize = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    borderSize
  } = attributes;
  const handleOnChange = value => {
    setAttributes({
      borderSize: `${value}px`
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('枠線サイズ', 'ystandard-blocks'),
    value: (0,_aktk_helper_number__WEBPACK_IMPORTED_MODULE_3__.toNumber)(parseInt(borderSize)),
    onChange: handleOnChange,
    min: 0,
    max: 50,
    step: 1,
    initialPosition: 0,
    allowReset: true
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BorderSize);

/***/ }),

/***/ "./blocks/section/inspector-controls/border-style.js":
/*!***********************************************************!*\
  !*** ./blocks/section/inspector-controls/border-style.js ***!
  \***********************************************************/
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
/* harmony import */ var _aktk_helper_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aktk/helper/config */ "./src/js/helper/config.js");




const BorderStyle = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    borderStyle
  } = attributes;
  const borderStyles = (0,_aktk_helper_config__WEBPACK_IMPORTED_MODULE_3__.getComponentConfig)('borderStyles');
  const handleOnChange = value => {
    setAttributes({
      borderStyle: value
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('枠線スタイル', 'ystandard-blocks'),
    value: borderStyle,
    options: borderStyles,
    onChange: handleOnChange
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BorderStyle);

/***/ }),

/***/ "./blocks/section/inspector-controls/content-width/content-width.js":
/*!**************************************************************************!*\
  !*** ./blocks/section/inspector-controls/content-width/content-width.js ***!
  \**************************************************************************/
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
/* harmony import */ var _aktk_components_control_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aktk/components/control-label */ "./src/js/components/control-label/index.js");
/* harmony import */ var _aktk_components_horizon_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aktk/components/horizon-buttons */ "./src/js/components/horizon-buttons/index.js");
/* harmony import */ var _aktk_helper_number_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aktk/helper/number.js */ "./src/js/helper/number.js");

/**
 * WordPress
 */


/**
 * yStandard
 */


/**
 * Block
 */

const PRESET = [{
  value: 'container',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('1200', 'section block content width', 'ystandard-blocks'),
  num: 1200
}, {
  value: 'wide',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('800', 'section block content width', 'ystandard-blocks'),
  num: 800
}, {
  value: 'narrow',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('500', 'section block content width', 'ystandard-blocks'),
  num: 500
}];
const ContentWidth = ({
  attributes,
  setAttributes
}) => {
  const {
    innerCustomWidth
  } = attributes;
  const handleOnChange = newValue => {
    setAttributes({
      innerCustomWidth: (0,_aktk_helper_number_js__WEBPACK_IMPORTED_MODULE_5__.getNumber)(newValue, 0, 0, 1920)
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('コンテンツ幅', 'ystandard-blocks'),
    id: 'content-width'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_control_label__WEBPACK_IMPORTED_MODULE_3__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('かんたん設定', 'ystandard-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_horizon_buttons__WEBPACK_IMPORTED_MODULE_4__["default"], null, PRESET.map(item => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      key: item.value,
      isSecondary: true,
      onClick: () => {
        setAttributes({
          innerCustomWidth: item.num
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, item.label));
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('コンテンツ部分の最大幅', 'ystandard-blocks'),
    value: innerCustomWidth,
    onChange: handleOnChange,
    min: 0,
    max: 1920,
    step: 1,
    allowReset: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_aktk_components_control_label__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isSmall: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('※最大幅の指定をしない場合は0にしてください。', 'ystandard-blocks'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentWidth);

/***/ }),

/***/ "./blocks/section/inspector-controls/content-width/index.js":
/*!******************************************************************!*\
  !*** ./blocks/section/inspector-controls/content-width/index.js ***!
  \******************************************************************/
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
/* harmony import */ var _content_width__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-width */ "./blocks/section/inspector-controls/content-width/content-width.js");

/**
 * WordPress.
 */


/**
 * yStandard
 */

const PanelContentWidth = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('コンテンツ幅設定', 'ystandard-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_content_width__WEBPACK_IMPORTED_MODULE_3__["default"], props));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelContentWidth);

/***/ }),

/***/ "./blocks/section/inspector-controls/index.js":
/*!****************************************************!*\
  !*** ./blocks/section/inspector-controls/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundImage: () => (/* reexport safe */ _background_image__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   BorderColor: () => (/* reexport safe */ _border_color__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   BorderSize: () => (/* reexport safe */ _border_size__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   BorderStyle: () => (/* reexport safe */ _border_style__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _background_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background-image */ "./blocks/section/inspector-controls/background-image.js");
/* harmony import */ var _border_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./border-color */ "./blocks/section/inspector-controls/border-color.js");
/* harmony import */ var _border_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./border-size */ "./blocks/section/inspector-controls/border-size.js");
/* harmony import */ var _border_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./border-style */ "./blocks/section/inspector-controls/border-style.js");





/***/ }),

/***/ "./blocks/section/save.js":
/*!********************************!*\
  !*** ./blocks/section/save.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./blocks/section/config.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared */ "./blocks/section/shared.js");
/* harmony import */ var _src_js_util_getCssClamp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/js/util/_getCssClamp */ "./src/js/util/_getCssClamp.js");
/* harmony import */ var _src_js_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/js/util/_getDataClamp */ "./src/js/util/_getDataClamp.js");
/* harmony import */ var _function_border__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./function/border */ "./blocks/section/function/border.js");










function save(props) {
  const {
    attributes
  } = props;
  const {
    align,
    wrapperTag,
    backgroundColor,
    customBackgroundColor,
    textColor,
    customTextColor,
    marginTop,
    marginTopResponsive,
    marginTopMobile,
    marginBottom,
    marginBottomResponsive,
    marginBottomMobile,
    paddingTop,
    paddingTopResponsive,
    paddingTopMobile,
    paddingBottom,
    paddingBottomResponsive,
    paddingBottomMobile,
    paddingLeft,
    paddingLeftResponsive,
    paddingLeftMobile,
    paddingRight,
    paddingRightResponsive,
    paddingRightMobile,
    useCustomOverlaySize,
    overlaySizeX,
    overlaySizeUnitX,
    overlaySizeY,
    overlaySizeUnitY,
    overlayPositionX,
    overlayPositionValueX,
    overlayPositionUnitX,
    overlayPositionY,
    overlayPositionValueY,
    overlayPositionUnitY,
    gradient,
    customGradient,
    backgroundType,
    focalPoint,
    backgroundImageURL,
    backgroundImageOpacity,
    backgroundImageParallax,
    backgroundImageSize,
    backgroundImageSizeX,
    backgroundImageSizeUnitX,
    backgroundImageSizeY,
    backgroundImageSizeUnitY,
    backgroundImageRepeat,
    backgroundImageOnOverlay,
    backgroundImageOnOverlayOpacity,
    innerCustomWidth,
    dividerTypeTop,
    dividerTopReverse,
    dividerLevelTop,
    dividerTopResponsive,
    dividerLevelTopMobile,
    dividerColorTop,
    customDividerColorTop,
    dividerTypeBottom,
    dividerBottomReverse,
    dividerLevelBottom,
    dividerBottomResponsive,
    dividerLevelBottomMobile,
    dividerColorBottom,
    customDividerColorBottom,
    screenHeightMode,
    sectionMinHeight,
    animationType,
    animationSpeed,
    animationDelay,
    containerFluid,
    borderColor
  } = attributes;

  /**
   * HTMLタグ
   */
  const Wrapper = wrapperTag;
  const isContainerFluid = 'full' === align && containerFluid;
  const marginUnit = 'px';
  const paddingUnit = 'px';
  const isImageBackground = _config__WEBPACK_IMPORTED_MODULE_5__.BACKGROUND_TYPE_IMAGE === backgroundType;
  const isVideoBackground = _config__WEBPACK_IMPORTED_MODULE_5__.BACKGROUND_TYPE_VIDEO === backgroundType;
  const showFocalPointPicker = isVideoBackground || isImageBackground && !backgroundImageParallax;
  const gradientClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalGetGradientClass)(gradient);

  /**
   * 色設定
   */
  const textColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('color', textColor);
  const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('background-color', backgroundColor);
  const dividerColorTopClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('fill', dividerColorTop);
  const dividerColorBottomClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('fill', dividerColorBottom);
  const borderColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('border-color', borderColor);

  /**
   * アニメーション
   */
  const hasAnimation = animationType && 'none' !== animationType;

  /**
   * 背景画像
   */
  const backgroundImageStyles = {
    backgroundImage: backgroundImageURL && isImageBackground ? `url('${backgroundImageURL}')` : undefined,
    backgroundPosition: (0,_shared__WEBPACK_IMPORTED_MODULE_6__.getBackgroundPosition)(showFocalPointPicker, focalPoint),
    backgroundRepeat: 'no-repeat' === backgroundImageRepeat ? undefined : backgroundImageRepeat,
    backgroundSize: (0,_shared__WEBPACK_IMPORTED_MODULE_6__.getBackgroundSize)(backgroundImageSize, backgroundImageSizeX, backgroundImageSizeY, backgroundImageSizeUnitX, backgroundImageSizeUnitY),
    ...(0,_function_border__WEBPACK_IMPORTED_MODULE_9__.getBorderProperty)(attributes)
  };

  /**
   * 背景関連
   */
  const showBgMask = backgroundImageURL || backgroundColor || customBackgroundColor || gradientClass || customGradient;

  /**
   * セクションクラス名
   */
  const sectionClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section', {
    'has-background-image': backgroundImageURL,
    'is-screen-height': screenHeightMode,
    'has-animation': hasAnimation,
    'has-parallax': backgroundImageParallax,
    'is-container-fluid': isContainerFluid,
    [borderColorClass]: borderColorClass
  });
  const dataAnimation = hasAnimation ? animationType : undefined;
  const getMargin = (useResponsive, desktop, mobile) => {
    if (!useResponsive) {
      if (0 === desktop) {
        return 0;
      }
      return undefined !== desktop ? `${desktop}px` : undefined;
    }
    return (0,_src_js_util_getCssClamp__WEBPACK_IMPORTED_MODULE_7__["default"])({
      desktop,
      mobile
    });
  };
  /**
   * セクションスタイル
   */
  let sectionStyles = {
    color: textColorClass ? undefined : customTextColor,
    paddingTop: getMargin(paddingTopResponsive, paddingTop, paddingTopMobile),
    paddingBottom: getMargin(paddingBottomResponsive, paddingBottom, paddingBottomMobile),
    marginTop: getMargin(marginTopResponsive, marginTop, marginTopMobile),
    marginBottom: getMargin(marginBottomResponsive, marginBottom, marginBottomMobile),
    minHeight: sectionMinHeight ? sectionMinHeight + 'px' : undefined,
    animationDuration: hasAnimation ? `${animationSpeed}s` : undefined,
    animationDelay: hasAnimation && 0 < animationDelay ? `${animationDelay}s` : undefined
  };
  if (!backgroundImageOnOverlay) {
    sectionStyles = {
      ...sectionStyles,
      ...backgroundImageStyles
    };
  }
  const sectionClampData = {
    'margin-top': marginTopResponsive ? `${marginTop}${marginUnit}` : undefined,
    'margin-bottom': marginBottomResponsive ? `${marginBottom}${marginUnit}` : undefined,
    'padding-top': paddingTopResponsive ? `${paddingTop}${paddingUnit}` : undefined,
    'padding-bottom': paddingBottomResponsive ? `${paddingBottom}${paddingUnit}` : undefined
  };

  /**
   * 背景マスク
   */
  const bgMaskClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__bg', {
    'has-background': backgroundColor || customBackgroundColor,
    'has-background-gradient': gradient || customGradient,
    [backgroundClass]: backgroundClass,
    [gradientClass]: gradientClass,
    'is-custom-size': useCustomOverlaySize
  });
  const getMaskBackground = () => {
    if (customGradient) {
      return customGradient;
    }
    if (!backgroundClass && customBackgroundColor) {
      return customBackgroundColor;
    }
    return undefined;
  };
  const getMaskPosition = () => {
    if (!useCustomOverlaySize) {
      return {};
    }
    const posX = !!overlayPositionValueX ? `${overlayPositionValueX}${overlayPositionUnitX}` : 0;
    const posY = !!overlayPositionValueY ? `${overlayPositionValueY}${overlayPositionUnitY}` : 0;
    return {
      top: 'top' === overlayPositionX ? posX : undefined,
      bottom: 'bottom' === overlayPositionX ? posX : undefined,
      left: 'left' === overlayPositionY ? posY : undefined,
      right: 'right' === overlayPositionY ? posY : undefined
    };
  };
  const bgMaskStyle = {
    background: getMaskBackground(),
    opacity: backgroundImageOpacity / 100,
    width: useCustomOverlaySize && !!overlaySizeX ? `${overlaySizeX}${overlaySizeUnitX}` : undefined,
    height: useCustomOverlaySize && !!overlaySizeY ? `${overlaySizeY}${overlaySizeUnitY}` : undefined,
    ...getMaskPosition()
  };
  let overlayImageStyle = {
    opacity: backgroundImageOnOverlayOpacity / 100
  };
  if (backgroundImageOnOverlay) {
    overlayImageStyle = {
      ...overlayImageStyle,
      ...backgroundImageStyles
    };
  }
  const innerClampData = {
    'padding-left': paddingLeftResponsive ? `${paddingLeft}${paddingUnit}` : undefined,
    'padding-right': paddingRightResponsive ? `${paddingRight}${paddingUnit}` : undefined
  };
  const divider = attr => {
    const {
      type,
      reverse,
      position,
      level,
      colorClass,
      customColor,
      useResponsive,
      levelMobile
    } = attr;
    const dividerClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__divider', `ystdb-section__divider--${position}`, `ystdb-section__divider--${type}`);
    let pathLevel = level;
    if (reverse) {
      pathLevel = -1 * pathLevel;
    }
    if (useResponsive) {
      pathLevel = 0 > pathLevel ? -100 : 100;
    }
    const path = (0,_config__WEBPACK_IMPORTED_MODULE_5__.dividerPath)(type, pathLevel);
    const svgClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__divider-image', {
      [colorClass]: colorClass
    });
    const style = useResponsive ? {
      height: (0,_src_js_util_getCssClamp__WEBPACK_IMPORTED_MODULE_7__["default"])({
        desktop: Math.abs(level),
        mobile: Math.abs(levelMobile)
      })
    } : undefined;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: dividerClass
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SVG, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: svgClass,
      viewBox: "0 0 100 100",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: 'none',
      style: style
    }, (0,_src_js_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__["default"])({
      height: useResponsive ? `${Math.abs(level)}px` : undefined
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
      d: path,
      fill: customColor
    })));
  };
  const dividerTop = 0 !== dividerLevelTop && (dividerColorTopClass || customDividerColorTop);
  const dividerBottom = 0 !== dividerLevelBottom && (dividerColorBottomClass || customDividerColorBottom);
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
    className: sectionClass,
    style: sectionStyles,
    'data-animation': dataAnimation,
    ...(0,_src_js_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__["default"])(sectionClampData)
  });

  /**
   * インナー
   */
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useInnerBlocksProps.save({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ystdb-section__inner', {
      'has-text-color': textColorClass || customTextColor,
      [textColorClass]: textColorClass
    }),
    style: {
      maxWidth: 0 < innerCustomWidth ? innerCustomWidth : undefined,
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingLeft: getMargin(paddingLeftResponsive, paddingLeft, paddingLeftMobile),
      paddingRight: getMargin(paddingRightResponsive, paddingRight, paddingRightMobile)
    },
    ...(0,_src_js_util_getDataClamp__WEBPACK_IMPORTED_MODULE_8__["default"])(innerClampData)
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, isVideoBackground && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("video", {
    className: "ystdb-section__video-background",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    src: backgroundImageURL,
    style: {
      objectPosition: (0,_shared__WEBPACK_IMPORTED_MODULE_6__.getBackgroundPosition)(showFocalPointPicker, focalPoint)
    }
  }), showBgMask && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: bgMaskClass,
    "aria-hidden": "true",
    role: "img",
    style: bgMaskStyle
  }, backgroundImageOnOverlay && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: 'ystdb-section__overlay-image',
    "aria-hidden": "true",
    role: "img",
    style: overlayImageStyle
  }, "\xA0"), "\xA0"), dividerTop && divider({
    type: dividerTypeTop,
    reverse: dividerTopReverse,
    position: 'top',
    level: Math.abs(dividerLevelTop),
    colorClass: dividerColorTopClass,
    customColor: customDividerColorTop,
    useResponsive: dividerTopResponsive,
    levelMobile: dividerLevelTopMobile
  }), dividerBottom && divider({
    type: dividerTypeBottom,
    reverse: dividerBottomReverse,
    position: 'bottom',
    level: Math.abs(dividerLevelBottom),
    colorClass: dividerColorBottomClass,
    customColor: customDividerColorBottom,
    useResponsive: dividerBottomResponsive,
    levelMobile: dividerLevelBottomMobile
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "ystdb-section__container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Wrapper, innerBlocksProps)));
}

/***/ }),

/***/ "./blocks/section/shared.js":
/*!**********************************!*\
  !*** ./blocks/section/shared.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBackgroundPosition: () => (/* binding */ getBackgroundPosition),
/* harmony export */   getBackgroundSize: () => (/* binding */ getBackgroundSize)
/* harmony export */ });
const getBackgroundPosition = (showFocalPointPicker, focalPoint) => {
  if (!focalPoint || !showFocalPointPicker) {
    return undefined;
  }
  return `${focalPoint.x * 100}% ${focalPoint.y * 100}%`;
};
const getBackgroundSize = (size, sizeX, sizeY, unitX, unitY) => {
  if ('custom' !== size) {
    return 'cover' === size ? undefined : size;
  }
  const x = isFinite(sizeX) ? `${sizeX}${unitX}` : 'auto';
  const y = isFinite(sizeY) ? `${sizeY}${unitY}` : 'auto';
  return `${x} ${y}`;
};

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
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aktk_helper_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aktk/helper/color */ "./src/js/helper/color.js");
/* harmony import */ var _aktk_components_color_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aktk/components/color-dropdown */ "./src/js/components/color-dropdown/index.js");






const ColorPaletteControl = ({
  value,
  onChange,
  colors,
  label,
  key,
  position = 'bottom left',
  ...props
}) => {
  const _colors = colors !== null && colors !== void 0 ? colors : (0,_aktk_helper_color__WEBPACK_IMPORTED_MODULE_4__.getColorSetting)();
  const handleOnChange = color => {
    onChange(color);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_aktk_components_color_dropdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: key,
    label: label,
    value: value,
    position: position,
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      colors: _colors,
      onChange: handleOnChange,
      value: value
    }, props))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorPaletteControl);

/***/ }),

/***/ "./src/js/components/control-label/index.js":
/*!**************************************************!*\
  !*** ./src/js/components/control-label/index.js ***!
  \**************************************************/
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


const ControlLabel = ({
  children,
  isSmall,
  isBold,
  ...props
}) => {
  const controlProps = {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ystd-control-label', {
      'is-small': isSmall,
      'is-bold': isBold
    }),
    ...props
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", controlProps, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlLabel);

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

/***/ "./src/js/components/media-upload-control/index.js":
/*!*********************************************************!*\
  !*** ./src/js/components/media-upload-control/index.js ***!
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const MediaUploadControl = props => {
  const MEDIA_TYPES = ['image'];
  const {
    media,
    mediaTypes,
    onSelect,
    onClear,
    value,
    clearLabel,
    selectLabel
  } = props;
  const _mediaTypes = mediaTypes || MEDIA_TYPES;
  const _clearLabel = clearLabel || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('画像をクリア', 'ystandard-blocks');
  const _selectLabel = selectLabel || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('画像を選択', 'ystandard-blocks');
  const _render = obj => {
    const mediaType = media?.type || 'image';
    const mediaId = media?.id || 0;
    if (!mediaId || 0 === mediaId) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: 'ystdb-media-upload-control__select',
        isSecondary: true,
        onClick: obj.open
      }, _selectLabel);
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-media-upload-control__render"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: obj.open,
      className: 'ystdb-media-upload-control__preview'
    }, 'image' === mediaType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: media?.url,
      alt: media?.alt
    }), 'video' === mediaType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      src: media?.url
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: 'ystdb-media-upload-control__clear',
      isDestructive: true,
      onClick: onClear
    }, _clearLabel));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ystdb-media-upload-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: onSelect,
    type: _mediaTypes,
    value: value,
    render: _render
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaUploadControl);

/***/ }),

/***/ "./src/js/components/responsive-range/index.js":
/*!*****************************************************!*\
  !*** ./src/js/components/responsive-range/index.js ***!
  \*****************************************************/
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
/* harmony import */ var _svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg-icon */ "./src/js/components/svg-icon/index.js");
/* harmony import */ var _util_calcClamp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/_calcClamp */ "./src/js/util/_calcClamp.js");






class ResponsiveRangeControl extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      label,
      useResponsive,
      changeResponsiveMode,
      desktopLabel,
      desktopValue,
      desktopOnChange,
      desktopUnit,
      desktopUnitOnChange,
      desktopControl,
      min,
      max,
      step,
      unitOptions,
      mobileValue,
      mobileOnChange,
      mobileUnit,
      mobileUnitOnChange,
      showDeviceSize
    } = this.props;
    const showDeviceSizeValue = undefined === showDeviceSize ? true : showDeviceSize;
    const toggleUseResponsive = () => {
      changeResponsiveMode(!useResponsive);
    };
    const customRangeControl = () => {
      return desktopControl ? desktopControl() : undefined;
    };
    const calcSize = {
      mobile: (0,_util_calcClamp__WEBPACK_IMPORTED_MODULE_4__.calcClamp)({
        size: 320,
        mobile: mobileValue,
        desktop: desktopValue
      }),
      tablet: (0,_util_calcClamp__WEBPACK_IMPORTED_MODULE_4__.calcClamp)({
        size: 768,
        mobile: mobileValue,
        desktop: desktopValue
      }),
      desktop: (0,_util_calcClamp__WEBPACK_IMPORTED_MODULE_4__.calcClamp)({
        size: 1200,
        mobile: mobileValue,
        desktop: desktopValue
      })
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
    }, !useResponsive ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, undefined !== desktopControl ? customRangeControl() : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-inspector-controls__columns is-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: 'label'
    }, desktopLabel), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
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
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, desktopUnit))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, mobileUnit)), showDeviceSizeValue && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-responsive-range__info"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ystdb-inspector-controls__columns is-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'ystdb-responsive-range__info-label'
    }, "\u53C2\u8003\u5024", ' '), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_svg_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: 'smartphone'
    }), calcSize.mobile), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_svg_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: 'tablet'
    }), calcSize.tablet), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_svg_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: 'monitor'
    }), calcSize.desktop)))))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveRangeControl);

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

/***/ "./src/js/helper/config.js":
/*!*********************************!*\
  !*** ./src/js/helper/config.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBlockEditorConfig: () => (/* binding */ getBlockEditorConfig),
/* harmony export */   getComponentConfig: () => (/* binding */ getComponentConfig),
/* harmony export */   getConfig: () => (/* binding */ getConfig)
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

/***/ "./src/js/helper/number.js":
/*!*********************************!*\
  !*** ./src/js/helper/number.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNumber: () => (/* binding */ getNumber),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   toInt: () => (/* binding */ toInt),
/* harmony export */   toNumber: () => (/* binding */ toNumber)
/* harmony export */ });
const isNumber = value => {
  return !Number.isNaN(Number(value));
};
const toNumber = (value, defaultValue = undefined) => {
  const newValue = parseFloat(value);
  if (!isNumber(newValue)) {
    return defaultValue;
  }
  return newValue;
};
const toInt = (value, defaultValue = undefined) => {
  const newValue = parseInt(value);
  if (!isNumber(newValue)) {
    return defaultValue;
  }
  return newValue;
};
const getNumber = (value, defaultValue = undefined, min = undefined, max = undefined) => {
  let _value = toNumber(value, defaultValue);
  if (!isNumber(_value)) {
    return defaultValue;
  }
  if (isNumber(min) && min >= _value) {
    _value = min;
  }
  if (isNumber(max) && max <= _value) {
    _value = max;
  }
  return _value;
};

/***/ }),

/***/ "./src/js/util/_calcClamp.js":
/*!***********************************!*\
  !*** ./src/js/util/_calcClamp.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcClamp: () => (/* binding */ calcClamp)
/* harmony export */ });
function calcClamp({
  size,
  desktop,
  mobile,
  preferred
}) {
  if (!isFinite(desktop) || !isFinite(mobile)) {
    return '';
  }
  if (desktop === mobile) {
    return desktop;
  }
  if (undefined !== preferred) {
    return Math.round(size * preferred);
  }
  const a = (desktop - mobile) / 825;
  const b = mobile - 375 * (desktop - mobile) / 825;
  const min = mobile < desktop ? mobile : desktop;
  const max = mobile < desktop ? desktop : mobile;
  let value = Math.round(a * size + b);
  if (value < min) {
    value = min;
  }
  if (value > max) {
    value = max;
  }
  return value;
}

/***/ }),

/***/ "./src/js/util/_convertPHPObject2JS.js":
/*!*********************************************!*\
  !*** ./src/js/util/_convertPHPObject2JS.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ convertPHPObject2JS)
/* harmony export */ });
/**
 * PHP側で作ったオブジェクトをJS用に変換
 *
 * @param {Object} object オブジェクト.
 */
function convertPHPObject2JS(object) {
  return Object.fromEntries(Object.entries(object).map(([key, val]) => [key, null === val ? undefined : val]));
}

/***/ }),

/***/ "./src/js/util/_getCssClamp.js":
/*!*************************************!*\
  !*** ./src/js/util/_getCssClamp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCssClamp)
/* harmony export */ });
function getCssClamp(attribute) {
  const {
    desktop,
    mobile,
    unit,
    preferredValue,
    preferredUnit
  } = attribute;
  if (desktop === mobile) {
    return `${desktop}px`;
  }
  const min = mobile < desktop ? mobile : desktop;
  const max = mobile < desktop ? desktop : mobile;
  const clampUnit = undefined === unit ? 'px' : unit;
  let a = (desktop - mobile) / 825;
  let b = mobile - 375 * (desktop - mobile) / 825;
  const calc = 0 > b ? '-' : '+';
  const aUnit = undefined === preferredUnit ? 'vw' : preferredUnit;
  const bUnit = 'px';
  if ('vw' === aUnit || 'vh' === aUnit) {
    a = a * 100;
    a = Math.round(a * 100) / 100;
  }
  if (0 > mobile) {
    b = Math.ceil(b);
  } else {
    b = Math.floor(b);
  }
  const minValue = `${min}${clampUnit}`;
  const maxValue = `${max}${clampUnit}`;
  const preferred = undefined === preferredValue ? `${a}${aUnit} ${calc} ${Math.abs(b)}${bUnit}` : `${preferredValue}${aUnit}`;
  return `clamp( ${minValue}, ${preferred}, ${maxValue} )`;
}

/***/ }),

/***/ "./src/js/util/_getDataClamp.js":
/*!**************************************!*\
  !*** ./src/js/util/_getDataClamp.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDataClamp)
/* harmony export */ });
function getDataClamp(props) {
  for (const key in props) {
    if (undefined === props[key] || null === props[key]) {
      delete props[key];
    }
  }
  return !Object.keys(props).length ? undefined : {
    'data-responsive-clamp': `${JSON.stringify(props)}`
  };
}

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
/**
 * 数字変換
 *
 * @param {string} value
 * @param {number} min
 * @param {number} max
 * @param {number} defaultValue
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

/***/ "./src/js/util/_getNumberInputStep.js":
/*!********************************************!*\
  !*** ./src/js/util/_getNumberInputStep.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNumberInputStep)
/* harmony export */ });
function getNumberInputStep(unit) {
  if ('em' === unit || 'rem' === unit) {
    return 0.1;
  }
  return 1;
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

/***/ "./node_modules/react-feather/dist/icons/layers.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/layers.js ***!
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



var Layers = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
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
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polygon", {
    points: "12 2 2 7 12 12 22 7 12 2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "2 17 12 22 22 17"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "2 12 12 17 22 12"
  }));
});
Layers.propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])
};
Layers.displayName = 'Layers';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layers);

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/maximize-2.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/maximize-2.js ***!
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



var Maximize2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
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
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "15 3 21 3 21 9"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "9 21 3 21 3 15"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "21",
    y1: "3",
    x2: "14",
    y2: "10"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "3",
    y1: "21",
    x2: "10",
    y2: "14"
  }));
});
Maximize2.propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])
};
Maximize2.displayName = 'Maximize2';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Maximize2);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

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
/*!*********************************!*\
  !*** ./blocks/section/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_js_config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/js/config/config */ "./src/js/config/config.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/section/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./blocks/section/save.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/layers.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./blocks/section/config.js");
/* harmony import */ var _deprecated_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deprecated/index */ "./blocks/section/deprecated/index.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);









(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__.registerBlockType)('ystdb/section', {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('セクション', 'ystandard-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('yStandard Blocks汎用セクションブロック', 'ystandard-blocks'),
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_feather__WEBPACK_IMPORTED_MODULE_8__["default"], {
    stroke: _src_js_config_config__WEBPACK_IMPORTED_MODULE_1__.ystdbConfig.color.iconForeground,
    style: {
      fill: 'none'
    }
  }),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('section'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('セクション'), 'section'],
  category: _src_js_config_config__WEBPACK_IMPORTED_MODULE_1__.ystdbConfig.category.common,
  attributes: _config__WEBPACK_IMPORTED_MODULE_4__.attributes,
  supports: _config__WEBPACK_IMPORTED_MODULE_4__.supports,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  deprecated: _deprecated_index__WEBPACK_IMPORTED_MODULE_5__.deprecated,
  example: {}
});
})();

/******/ })()
;
//# sourceMappingURL=section.js.map