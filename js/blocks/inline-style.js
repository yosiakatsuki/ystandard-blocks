/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps}                                 props icon is the SVG component to render
 *                                                          size is a number specifiying the icon size in pixels
 *                                                          Other props will be passed to wrapped SVG component
 * @param {import('react').ForwardedRef<HTMLElement>} ref   The forwarded ref to the SVG element.
 *
 * @return {JSX.Element}  Icon component
 */
function Icon({
  icon,
  size = 24,
  ...props
}, ref) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props,
    ref
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Icon));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/edit.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/edit.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pencil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pencil */ "./node_modules/@wordpress/icons/build-module/library/pencil.js");
/**
 * Internal dependencies
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_pencil__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=edit.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/pencil.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/pencil.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const pencil = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pencil);
//# sourceMappingURL=pencil.js.map

/***/ }),

/***/ "./blocks/inline-style/button-items/index.js":
/*!***************************************************!*\
  !*** ./blocks/inline-style/button-items/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aktk_helper_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aktk/helper/object */ "./src/js/helper/object.js");
/* harmony import */ var _aktk_helper_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aktk/helper/config */ "./src/js/helper/config.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/edit.js");
/* harmony import */ var _aktk_components_ystandard_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aktk/components/ystandard-icon */ "./src/js/components/ystandard-icon/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










const buttonTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('[ys]インラインスタイル', 'ystandard-blocks');
const SLOT_NAME = 'ystdb.InlineStyle.Items';
const items = (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_4__.getProperty)((0,_aktk_helper_config__WEBPACK_IMPORTED_MODULE_5__.getBlockEditorConfig)('inlineStyle', {}), 'items', []);
const POPOVER_PROPS = {
  position: 'bottom right',
  isAlternate: true
};
(0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.registerFormatType)('ystdb/inline-style-items', {
  title: buttonTitle,
  tagName: 'span',
  className: 'ystdb-inline-style-items',
  edit() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockFormatControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Slot, {
        name: SLOT_NAME,
        children: fills => {
          if (!fills.length) {
            return null;
          }
          const allProps = fills.map(([{
            props
          }]) => props);
          const hasActive = allProps.some(({
            isActive
          }) => isActive);
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToolbarItem, {
            children: toggleProps => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, {
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"], {
                icon: _aktk_components_ystandard_icon__WEBPACK_IMPORTED_MODULE_7__.yStandardIcon
              }),
              label: buttonTitle,
              toggleProps: {
                ...toggleProps,
                className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(toggleProps.className, {
                  'is-pressed': hasActive
                })
              },
              controls: fills.map(([{
                props
              }]) => props),
              popoverProps: POPOVER_PROPS
            })
          });
        }
      })
    });
  }
});
Object.keys(items).map(key => {
  const item = items[key];
  const name = `ystdb/inline-style-items-${key}`;
  const formatClassName = `ystdb-inline--${key}`;
  if (!(0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_4__.getProperty)(item, 'enable', true)) {
    return true;
  }
  (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.registerFormatType)(name, {
    title: item.label,
    tagName: 'span',
    className: formatClassName,
    edit({
      isActive,
      value,
      onChange
    }) {
      const onClick = () => onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.toggleFormat)(value, {
        type: name
      }));
      const titleClass = classnames__WEBPACK_IMPORTED_MODULE_6___default()('ystdb-inline-style-items-button', formatClassName);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Fill, {
          name: SLOT_NAME,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToolbarButton
          // @ts-ignore
          , {
            title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: titleClass,
              children: item.label
            }),
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"], {
              icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"]
            }),
            isActive: isActive,
            onClick: onClick
          })
        })
      });
    }
  });
  return true;
});

/***/ }),

/***/ "./blocks/inline-style/toolbar-buttons/index.js":
/*!******************************************************!*\
  !*** ./blocks/inline-style/toolbar-buttons/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aktk_helper_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aktk/helper/config */ "./src/js/helper/config.js");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aktk_helper_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aktk/helper/object */ "./src/js/helper/object.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const buttons = (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_4__.getProperty)((0,_aktk_helper_config__WEBPACK_IMPORTED_MODULE_0__.getBlockEditorConfig)('inlineStyle', {}), 'buttons', []);
buttons.map((button, index) => {
  const isEnable = (0,_aktk_helper_object__WEBPACK_IMPORTED_MODULE_4__.getProperty)(button, 'enable', true);
  const buttonNo = index + 1;
  const title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('[ys]マーカー', 'ystandard-blocks');
  const name = `ystdb/inline-style-${buttonNo}`;
  const className = `ystdb-inline--${buttonNo}`;
  const icon = 'admin-customizer';
  if (isEnable) {
    (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.registerFormatType)(name, {
      title: `${title} ${buttonNo}`,
      tagName: 'span',
      className,
      edit(props) {
        const {
          value,
          isActive,
          onChange
        } = props;
        const onToggle = () => onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.toggleFormat)(value, {
          type: name
        }));
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockFormatControls, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "editor-format-toolbar block-editor-format-toolbar",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('ystdb-inline-style-toolbar', `inline-style-${buttonNo}`),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
                    icon: icon,
                    title: `${title} ${buttonNo}`,
                    onClick: onToggle,
                    isActive: isActive
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('ystdb-inline-style-toolbar__marker', className)
                })]
              })
            })
          })
        });
      }
    });
  }
  return true;
});

/***/ }),

/***/ "./src/js/components/ystandard-icon/index.js":
/*!***************************************************!*\
  !*** ./src/js/components/ystandard-icon/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   yStandardIcon: () => (/* binding */ yStandardIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const yStandardIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  role: "img",
  focusable: "false",
  "aria-hidden": "true",
  width: "24",
  height: "24",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "data-icon-name": "ystdtb-panel-icon",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M11.48,17.78c0,.69-.24,1.28-.73,1.77s-1.07,.74-1.77,.74H2.53v-2.4h6.46c.07,0,.11-.04,.11-.11v-1.67H3.28c-.69,0-1.28-.25-1.77-.74-.49-.49-.74-1.08-.74-1.77V5.59H3.15V13.59c0,.08,.04,.13,.13,.13h5.71c.07,0,.11-.04,.11-.13V5.59h2.38v12.19Z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M23.11,8.06v.45h-2.38v-.45c0-.08-.04-.13-.13-.13h-5.69c-.09,0-.13,.04-.13,.13v1.46c0,.07,.04,.11,.13,.11h5.69c.7,0,1.3,.25,1.78,.74s.73,1.08,.73,1.77v1.46c0,.69-.24,1.28-.73,1.77s-1.08,.74-1.78,.74h-5.69c-.69,0-1.28-.25-1.77-.74s-.74-1.08-.74-1.77v-.46h2.38v.46c0,.08,.04,.13,.13,.13h5.69c.08,0,.13-.04,.13-.13v-1.46c0-.07-.04-.11-.13-.11h-5.69c-.69,0-1.28-.25-1.77-.74s-.74-1.08-.74-1.77v-1.46c0-.69,.25-1.28,.74-1.77s1.08-.74,1.77-.74h5.69c.7,0,1.3,.25,1.78,.74s.73,1.08,.73,1.77Z"
    })]
  })
});

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

/***/ "./src/js/helper/object.js":
/*!*********************************!*\
  !*** ./src/js/helper/object.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProperty: () => (/* binding */ getProperty),
/* harmony export */   hasKey: () => (/* binding */ hasKey),
/* harmony export */   hasObjectKey: () => (/* binding */ hasObjectKey),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   object2Array: () => (/* binding */ object2Array),
/* harmony export */   objectCopy: () => (/* binding */ objectCopy),
/* harmony export */   parseObject: () => (/* binding */ parseObject)
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
const getProperty = (obj, key, defaultValue = undefined) => {
  if (!hasKey(obj, key)) {
    return defaultValue;
  }
  return obj[key];
};
const objectCopy = obj => {
  return JSON.parse(JSON.stringify(obj));
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

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

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/rich-text":
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["richText"];

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

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
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
  !*** ./blocks/inline-style/index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toolbar_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar-buttons */ "./blocks/inline-style/toolbar-buttons/index.js");
/* harmony import */ var _button_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-items */ "./blocks/inline-style/button-items/index.js");


})();

/******/ })()
;
//# sourceMappingURL=inline-style.js.map