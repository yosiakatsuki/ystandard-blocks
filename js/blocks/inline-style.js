!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=37)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},18:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return a}));var o=n(6);const l=e=>o.a.component[e],a=(e,t)=>window.ystdb&&"object"==typeof window.ystdb&&window.ystdb.hasOwnProperty(e)?window.ystdb[e]:t},2:function(e,t){e.exports=window.wp.components},24:function(e,t){e.exports=window.wp.richText},27:function(e,t){e.exports=window.wp.primitives},3:function(e,t){e.exports=window.wp.blockEditor},37:function(e,t,n){"use strict";n.r(t);var o=n(0),l=n(18),a=n(24),r=n(2),c=n(3);const s=(e,t,n)=>((e,t)=>!(!e||"object"!=typeof e)&&e.hasOwnProperty(t))(e,t)?e[t]:n;var i=n(4),b=n.n(i),d=n(1);s(Object(l.a)("inlineStyle",{}),"buttons",[]).map((e,t)=>{const n=s(e,"enable",!0),l=t+1,i=Object(d.__)("[ys]マーカー","ystandard-blocks"),u="ystdb/inline-style-"+l,p="ystdb-inline--"+l;return n&&Object(a.registerFormatType)(u,{title:`${i} ${l}`,tagName:"span",className:p,edit(e){const{value:t,isActive:n,onChange:s}=e;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(c.BlockFormatControls,null,Object(o.createElement)("div",{className:"editor-format-toolbar block-editor-format-toolbar"},Object(o.createElement)("div",{className:b()("ystdb-inline-style-toolbar","inline-style-"+l,p)},Object(o.createElement)(r.ToolbarGroup,null,Object(o.createElement)(r.ToolbarButton,{icon:"admin-customizer",title:`${i} ${l}`,onClick:()=>s(Object(a.toggleFormat)(t,{type:u})),isActive:n}))))))}}),!0});var u=function({icon:e,size:t=24,...n}){return Object(o.cloneElement)(e,{width:t,height:t,...n})},p=n(27),m=Object(o.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(p.Path,{d:"M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"}));const y=Object(d.__)("[ys]インラインスタイル","ystandard-blocks"),f=s(Object(l.a)("inlineStyle",{}),"items",[]),v={position:"bottom right",isAlternate:!0};Object(a.registerFormatType)("ystdb/inline-style-items",{title:y,tagName:"span",className:"ystdb-inline-style-items",edit:()=>Object(o.createElement)(c.BlockFormatControls,null,Object(o.createElement)(r.Slot,{name:"ystdb.InlineStyle.Items"},e=>{if(!e.length)return null;const t=e.map(([{props:e}])=>e).some(({isActive:e})=>e);return Object(o.createElement)(r.ToolbarItem,null,n=>Object(o.createElement)(r.DropdownMenu,{icon:"edit",label:y,toggleProps:{...n,className:b()(n.className,{"is-pressed":t})},controls:e.map(([{props:e}])=>e),popoverProps:v}))}))}),Object.keys(f).map(e=>{const t=f[e],n="ystdb/inline-style-items-"+e,l="ystdb-inline--"+e;return!s(t,"enable",!0)||(Object(a.registerFormatType)(n,{title:t.label,tagName:"span",className:l,edit({isActive:e,value:c,onChange:s}){const i=b()("ystdb-inline-style-items-button",l);return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(r.Fill,{name:"ystdb.InlineStyle.Items"},Object(o.createElement)(r.ToolbarButton,{title:Object(o.createElement)("span",{className:i},t.label),icon:Object(o.createElement)(u,{icon:m}),isActive:e,onClick:()=>s(Object(a.toggleFormat)(c,{type:n}))})))}}),!0)})},4:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)){if(o.length){var r=l.apply(null,o);r&&e.push(r)}}else if("object"===a)if(o.toString===Object.prototype.toString)for(var c in o)n.call(o,c)&&o[c]&&e.push(c);else e.push(o.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(o=function(){return l}.apply(t,[]))||(e.exports=o)}()},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(1);const l={category:{common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},color:{iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:Object(o.__)("小","ystandard-blocks")},{value:"",label:Object(o.__)("中","ystandard-blocks")},{value:"is-large",label:Object(o.__)("大","ystandard-blocks")}],animationTypes:[{label:Object(o.__)("なし","ystandard-blocks"),value:"none"},{label:Object(o.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"is-small",label:Object(o.__)("小","ystandard-blocks")},{value:"",label:Object(o.__)("中","ystandard-blocks")},{value:"is-large",label:Object(o.__)("大","ystandard-blocks")}]},component:{defaultAvatar:{url:"https://www.gravatar.com/avatar/000000000000000000000000000000?s=128&r=g&d=mp"},fontWeight:[{value:"",label:Object(o._x)("指定無し","component-config","ystandard-blocks")},{value:"normal",label:Object(o._x)("通常(normal)","component-config","ystandard-blocks")},{value:"bold",label:Object(o._x)("太字(bold)","component-config","ystandard-blocks")},{value:"100",label:Object(o._x)("100","component-config","ystandard-blocks")},{value:"200",label:Object(o._x)("200","component-config","ystandard-blocks")},{value:"300",label:Object(o._x)("300","component-config","ystandard-blocks")},{value:"400",label:Object(o._x)("400","component-config","ystandard-blocks")},{value:"500",label:Object(o._x)("500","component-config","ystandard-blocks")},{value:"600",label:Object(o._x)("600","component-config","ystandard-blocks")},{value:"700",label:Object(o._x)("700","component-config","ystandard-blocks")},{value:"800",label:Object(o._x)("800","component-config","ystandard-blocks")},{value:"900",label:Object(o._x)("900","component-config","ystandard-blocks")}],fontUnit:[{value:"px",label:"px"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"%",label:"%"}],fontStyle:[{value:"",label:Object(o._x)("指定無し","component-config","ystandard-blocks")},{value:"italic",label:Object(o._x)("イタリック体","component-config","ystandard-blocks")}],borderStyles:[{value:"solid",label:Object(o._x)("直線","component-config","ystandard-blocks")},{value:"dotted",label:Object(o._x)("点線","component-config","ystandard-blocks")},{value:"dashed",label:Object(o._x)("破線","component-config","ystandard-blocks")},{value:"double",label:Object(o._x)("二重線","component-config","ystandard-blocks")}]}}}});