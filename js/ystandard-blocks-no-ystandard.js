!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,n){"use strict";var o=n(0),r=wp.element.Fragment,c=wp.i18n.__,l=wp.richText,i=l.registerFormatType,a=l.toggleFormat,s=wp.components,u=s.Toolbar,m=s.ToolbarButton,p=wp.editor.BlockFormatControls;[{name:"ystdb/inline-style-1",title:c("ユーザースタイル 1","ystandard-blocks"),class:"ystdb-inline--1",icon:"admin-customizer"}].map(function(e){console.log(e),i(e.name,{title:e.title,tagName:"span",className:e.class,edit:function(t){var n=t.value,c=t.isActive,l=t.onChange;return Object(o.createElement)(r,null,Object(o.createElement)(p,null,Object(o.createElement)("div",{className:"editor-format-toolbar block-editor-format-toolbar"},Object(o.createElement)(u,null,Object(o.createElement)(m,{icon:e.icon,title:e.title,onClick:function(){return l(a(n,{type:e.name}))},isActive:c})))))}})})},,,function(e,t,n){"use strict";n.r(t);n(1);console.log("yStandard Blocks")}]);