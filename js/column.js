!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=74)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},11:function(e,t){!function(){e.exports=this.wp.compose}()},2:function(e,t){!function(){e.exports=this.wp.components}()},20:function(e,t){!function(){e.exports=this.wp.data}()},4:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},5:function(e,t){!function(){e.exports=this.wp.blockEditor}()},6:function(e,t,n){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var l=typeof o;if("string"===l||"number"===l)e.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&e.push(a)}else if("object"===l)for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},74:function(e,t,n){"use strict";n.r(t);var o=n(8),r=n(4),l=n.n(r),a=n(0),c=n(6),s=n.n(c),i=n(5),u=n(2),b=n(20),d=n(11),p=n(1),f=[{value:"",label:Object(p.__)("内側余白なし")},{value:"is-padding-small",label:Object(p.__)("小")},{value:"is-padding-large",label:Object(p.__)("大")}];var m=Object(d.compose)([Object(i.withColors)("backgroundColor"),Object(b.withSelect)((function(e,t){var n=t.clientId;return{hasChildBlocks:(0,e("core/block-editor").getBlockOrder)(n).length>0}}))])((function(e){var t,n=e.attributes,o=e.setAttributes,r=e.setBackgroundColor,c=e.backgroundColor,b=e.hasChildBlocks,d=e.className,m=n.shadow,y=n.paddingType,g=s()(d,"ystdb-column",(t={"has-background":c.color},l()(t,c.class,c.class),l()(t,"has-shadow",m),l()(t,y,y),t));return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(i.InspectorControls,null,Object(a.createElement)(i.PanelColorSettings,{title:Object(p.__)("Background & Text Color"),colorSettings:[{value:c.color,onChange:function(e){r(e)},label:Object(p.__)("Background Color")}]}),Object(a.createElement)(u.PanelBody,{title:Object(p.__)("余白設定","ystandard-blocks")},Object(a.createElement)(u.BaseControl,null,Object(a.createElement)("span",{className:"ystdb-info__small"},"カラム内側の余白を設定できます。"),Object(a.createElement)("div",{className:"ystdb-btn-selector components-base-control"},f.map((function(e){return Object(a.createElement)(u.Button,{key:e.value,isDefault:!0,isPrimary:y===e.value,onClick:function(){o({paddingType:e.value})}},Object(a.createElement)("span",null,e.label))}))))),Object(a.createElement)(u.PanelBody,{title:Object(p.__)("ボックス設定","ystandard-blocks")},Object(a.createElement)(u.ToggleControl,{label:Object(p.__)("影をつける","ystandard-blocks"),checked:m,onChange:function(){o({shadow:!m})}}))),Object(a.createElement)("div",{className:g},Object(a.createElement)("div",{className:"ystdb-column-block-container"},Object(a.createElement)(i.InnerBlocks,{templateLock:!1,renderAppender:b?void 0:function(){return Object(a.createElement)(i.InnerBlocks.ButtonBlockAppender,null)}}))))}));var y=Object(a.createElement)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)(u.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(a.createElement)(u.Path,{fill:o.a.color.iconForeground,d:"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z"})),g=n(9);Object(g.registerBlockType)("ystdb/column",{title:Object(p.__)("カラム","ystandard-blocks"),description:Object(p.__)("yStandard Blocks カラムブロック","ystandard-blocks"),icon:y,category:o.a.category.common,attributes:{backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},shadow:{type:"bool"},paddingType:{type:"string",default:""}},supports:{align:!1,className:!1},parent:["ystdb/columns"],edit:m,save:function(e){var t,n=e.attributes,o=n.shadow,r=n.backgroundColor,c=n.customBackgroundColor,u=n.paddingType,b=Object(i.getColorClassName)("background-color",r),d=s()("ystdb-column",(t={"has-background":b||c},l()(t,b,b),l()(t,"has-shadow",o),l()(t,u,u),t)),p={backgroundColor:c||void 0};return Object(a.createElement)("div",{className:d,style:p},Object(a.createElement)("div",{className:"ystdb-column-block-container"},Object(a.createElement)(i.InnerBlocks.Content,null)))}})},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(1),r={category:{common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},color:{iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:Object(o.__)("小")},{value:"",label:Object(o.__)("中")},{value:"is-large",label:Object(o.__)("大")}],animationTypes:[{label:Object(o.__)("なし","ystandard-blocks"),value:"none"},{label:Object(o.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"fa-xs",label:Object(o.__)("小")},{value:"",label:Object(o.__)("中")},{value:"fa-2x",label:Object(o.__)("大")}]}}},9:function(e,t){!function(){e.exports=this.wp.blocks}()}});