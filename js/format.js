!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=46)}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},3:function(t,e){!function(){t.exports=this.wp.components}()},36:function(t,e){!function(){t.exports=this.wp.richText}()},46:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(1),i=[{name:"ystdb/inline-style-1",title:Object(r.__)("[ys]インラインスタイル 1","ystandard-blocks"),class:"ystdb-inline--1",icon:"admin-customizer"},{name:"ystdb/inline-style-2",title:Object(r.__)("[ys]インラインスタイル 2","ystandard-blocks"),class:"ystdb-inline--2",icon:"admin-customizer"},{name:"ystdb/inline-style-3",title:Object(r.__)("[ys]インラインスタイル 3","ystandard-blocks"),class:"ystdb-inline--3",icon:"admin-customizer"}],c=n(36),l=n(3),a=n(5);i.map((function(t,e){return Object(c.registerFormatType)(t.name,{title:t.title,tagName:"span",className:t.class,edit:function(n){var r=n.value,i=n.isActive,s=n.onChange;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(a.BlockFormatControls,null,Object(o.createElement)("div",{className:"editor-format-toolbar block-editor-format-toolbar"},Object(o.createElement)("div",{className:"ystdb-inline-style-toolbar inline-style-".concat(e+1)},Object(o.createElement)(l.Toolbar,null,Object(o.createElement)(l.ToolbarButton,{icon:t.icon,title:t.title,onClick:function(){return s(Object(c.toggleFormat)(r,{type:t.name}))},isActive:i}))))))}}),!0}))},5:function(t,e){!function(){t.exports=this.wp.blockEditor}()}});