!function(t){var e={};function n(i){if(e[i])return e[i].exports;var l=e[i]={i:i,l:!1,exports:{}};return t[i].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)n.d(i,l,function(e){return t[e]}.bind(null,l));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=79)}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},2:function(t,e){!function(){t.exports=this.wp.components}()},5:function(t,e){!function(){t.exports=this.wp.blockEditor}()},57:function(t,e){!function(){t.exports=this.wp.richText}()},79:function(t,e,n){"use strict";n.r(e);var i=n(0),l=n(1),r=[{name:"ystdb/inline-style-1",title:Object(l.__)("[ys]インラインスタイル 1","ystandard-blocks"),class:"ystdb-inline--1",icon:"admin-customizer"},{name:"ystdb/inline-style-2",title:Object(l.__)("[ys]インラインスタイル 2","ystandard-blocks"),class:"ystdb-inline--2",icon:"admin-customizer"},{name:"ystdb/inline-style-3",title:Object(l.__)("[ys]インラインスタイル 3","ystandard-blocks"),class:"ystdb-inline--3",icon:"admin-customizer"}],o=n(57),c=n(2),s=n(5);r.map((function(t,e){return Object(o.registerFormatType)(t.name,{title:t.title,tagName:"span",className:t.class,edit:function(n){var l=n.value,r=n.isActive,a=n.onChange;return Object(i.createElement)(i.Fragment,null,Object(i.createElement)(s.BlockFormatControls,null,Object(i.createElement)("div",{className:"editor-format-toolbar block-editor-format-toolbar"},Object(i.createElement)("div",{className:"ystdb-inline-style-toolbar inline-style-".concat(e+1)},Object(i.createElement)(c.Toolbar,null,Object(i.createElement)(c.ToolbarButton,{icon:t.icon,title:t.title,onClick:function(){return a(Object(o.toggleFormat)(l,{type:t.name}))},isActive:r}))))))}}),!0})),[{name:"ystdb/inline-larger",title:Object(l.__)("[ys]少し大きく","ystandard-blocks"),class:"ystdb-inline--larger",icon:"edit"},{name:"ystdb/inline-smaller",title:Object(l.__)("[ys]少し小さく","ystandard-blocks"),class:"ystdb-inline--smaller",icon:"edit"},{name:"ystdb/inline-larger-sp",title:Object(l.__)("[ys]少し大きく(SP)","ystandard-blocks"),class:"ystdb-inline--larger-sp",icon:"edit"},{name:"ystdb/inline-smaller-sp",title:Object(l.__)("[ys]少し小さく(SP)","ystandard-blocks"),class:"ystdb-inline--smaller-sp",icon:"edit"}].map((function(t){return Object(o.registerFormatType)(t.name,{title:t.title,tagName:"span",className:t.class,edit:function(e){return Object(i.createElement)(s.RichTextToolbarButton,{icon:t.icon,title:t.title,onClick:function(){e.onChange(Object(o.toggleFormat)(e.value,{type:t.name}))},isActive:e.isActive})}}),!0}))}});