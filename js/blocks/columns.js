(()=>{var e={184:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var a=l.apply(null,n);a&&e.push(a)}}else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)o.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},703:(e,t,n)=>{"use strict";var o=n(414);function l(){}function r(){}r.resetWarningCache=l,e.exports=function(){function e(e,t,n,l,r,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:l};return n.PropTypes=n,n}},697:(e,t,n)=>{e.exports=n(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.element,t=window.React;var o=n.n(t),l=n(697),r=n.n(l);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}var s=(0,t.forwardRef)((function(e,t){var n=e.color,l=void 0===n?"currentColor":n,r=e.size,s=void 0===r?24:r,i=function(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return o().createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),o().createElement("rect",{x:"3",y:"3",width:"7",height:"7"}),o().createElement("rect",{x:"14",y:"3",width:"7",height:"7"}),o().createElement("rect",{x:"14",y:"14",width:"7",height:"7"}),o().createElement("rect",{x:"3",y:"14",width:"7",height:"7"}))}));s.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},s.displayName="Grid";const i=s,c=window.wp.blocks,d=window.wp.i18n,u={category:{common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},color:{iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:(0,d.__)("小","ystandard-blocks")},{value:"",label:(0,d.__)("中","ystandard-blocks")},{value:"is-large",label:(0,d.__)("大","ystandard-blocks")}],animationTypes:[{label:(0,d.__)("なし","ystandard-blocks"),value:"none"},{label:(0,d.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"is-small",label:(0,d.__)("小","ystandard-blocks")},{value:"",label:(0,d.__)("中","ystandard-blocks")},{value:"is-large",label:(0,d.__)("大","ystandard-blocks")}]},component:{defaultAvatar:{url:"https://www.gravatar.com/avatar/000000000000000000000000000000?s=128&r=g&d=mp"},fontWeight:[{value:"",label:(0,d._x)("指定無し","component-config","ystandard-blocks")},{value:"normal",label:(0,d._x)("通常(normal)","component-config","ystandard-blocks")},{value:"bold",label:(0,d._x)("太字(bold)","component-config","ystandard-blocks")},{value:"100",label:(0,d._x)("100","component-config","ystandard-blocks")},{value:"200",label:(0,d._x)("200","component-config","ystandard-blocks")},{value:"300",label:(0,d._x)("300","component-config","ystandard-blocks")},{value:"400",label:(0,d._x)("400","component-config","ystandard-blocks")},{value:"500",label:(0,d._x)("500","component-config","ystandard-blocks")},{value:"600",label:(0,d._x)("600","component-config","ystandard-blocks")},{value:"700",label:(0,d._x)("700","component-config","ystandard-blocks")},{value:"800",label:(0,d._x)("800","component-config","ystandard-blocks")},{value:"900",label:(0,d._x)("900","component-config","ystandard-blocks")}],fontUnit:[{value:"px",label:"px"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"%",label:"%"}],fontStyle:[{value:"",label:(0,d._x)("指定無し","component-config","ystandard-blocks")},{value:"italic",label:(0,d._x)("イタリック体","component-config","ystandard-blocks")}],borderStyles:[{value:"solid",label:(0,d._x)("直線","component-config","ystandard-blocks")},{value:"dotted",label:(0,d._x)("点線","component-config","ystandard-blocks")},{value:"dashed",label:(0,d._x)("破線","component-config","ystandard-blocks")},{value:"double",label:(0,d._x)("二重線","component-config","ystandard-blocks")}]}};var m=n(184),b=n.n(m);const p=window.wp.data,y=window.wp.blockEditor,v=window.wp.components,g=t=>(0,e.createElement)(v.__experimentalBoxControl,t);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},h.apply(this,arguments)}var f=(0,t.forwardRef)((function(e,t){var n=e.color,l=void 0===n?"currentColor":n,r=e.size,a=void 0===r?24:r,s=function(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return o().createElement("svg",h({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o().createElement("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),o().createElement("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),o().createElement("line",{x1:"12",y1:"17",x2:"12",y2:"21"}))}));f.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},f.displayName="Monitor";const k=f;function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},w.apply(this,arguments)}var _=(0,t.forwardRef)((function(e,t){var n=e.color,l=void 0===n?"currentColor":n,r=e.size,a=void 0===r?24:r,s=function(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return o().createElement("svg",w({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o().createElement("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",ry:"2"}),o().createElement("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"}))}));_.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},_.displayName="Tablet";const E=_;function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},x.apply(this,arguments)}var O=(0,t.forwardRef)((function(e,t){var n=e.color,l=void 0===n?"currentColor":n,r=e.size,a=void 0===r?24:r,s=function(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return o().createElement("svg",x({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o().createElement("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),o().createElement("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"}))}));O.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},O.displayName="Smartphone";const P=O,j="desktop",B="tablet",C="mobile",$=t=>{let{label:n,activeClass:o,onSelect:l,children:r}=t;return(0,e.createElement)("div",{className:"ystd-responsive-tab"},!!n&&(0,e.createElement)("div",{className:b()("ystd-responsive-tab__label")},n),(0,e.createElement)(v.TabPanel,{className:b()("ystd-responsive-tab__panel",{"has-label":!!n}),activeClass:o,onSelect:l,tabs:[{name:j,title:(0,e.createElement)(k,null),className:b()("ystd-responsive-tab__tab-button")},{name:B,title:(0,e.createElement)(E,null),className:b()("ystd-responsive-tab__tab-button")},{name:C,title:(0,e.createElement)(P,null),className:b()("ystd-responsive-tab__tab-button")}]},r))};function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},z.apply(this,arguments)}const T=t=>{let{desktop:n,tablet:o,mobile:l,...r}=t;return o||l?(0,e.createElement)("div",z({className:"ystd-responsive-values-info"},r),(0,e.createElement)("div",null,(0,e.createElement)(k,null),n||"-"),(0,e.createElement)("div",null,(0,e.createElement)(E,null),o||"-"),(0,e.createElement)("div",null,(0,e.createElement)(P,null),l||"-")):null},M={desktop:"desktop",tablet:"tablet",mobile:"mobile"},A=e=>!(!e||"object"!=typeof e)&&(e.hasOwnProperty("tablet")||e.hasOwnProperty("mobile")),N=(e,t)=>{if(!e||"object"!=typeof e)return;let n=e.hasOwnProperty(t)?e[t]:{};return"object"==typeof n&&(n=0<Object.keys(n).length?n:void 0),n},S=e=>{if(!e||"object"!=typeof e)return;let t={};return e?.desktop&&(t={...t,desktop:e.desktop}),e?.tablet&&(t={...t,tablet:e.tablet}),e?.mobile&&(t={...t,mobile:e.mobile}),0<Object.keys(t).length?t:void 0},V=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e||"object"!=typeof e)return;let n={};return Object.keys(M).map((o=>(e.hasOwnProperty(o)&&(t?n={...n,[o]:e[o]}:e[o]&&(n={...n,[o]:e[o]})),!0))),0<Object.keys(n).length?n:void 0},I=(e,t)=>{if(!t||"object"!=typeof t)return;const n=t?.top||"",o=t?.right||"",l=t?.bottom||"",r=t?.left||"";if(n&&[o,l,r].every((e=>e===n)))return{[`${e}`]:n};if(n&&n===l&&o&&o===r)return{[`${e}`]:`${n} ${o}`};if(n&&o&&o===r&&l)return{[`${e}`]:`${n} ${o} ${l}`};if(n&&o&&r&&l)return{[`${e}`]:`${n} ${o} ${l} ${r}`};let a={};return n&&(a={...a,[`${e}-top`]:n}),o&&(a={...a,[`${e}-right`]:o}),l&&(a={...a,[`${e}-bottom`]:l}),r&&(a={...a,[`${e}-left`]:r}),a},H=e=>{if(e&&"object"==typeof e&&(e?.top||e?.right||e?.bottom||e?.left))return e},R=e=>{if(!e||"object"!=typeof e)return;const t=e?.top||"-",n=e?.right||"-",o=e?.bottom||"-",l=e?.left||"-";return[n,o,l].every((e=>e===t))?`${t}`:t===o&&l===n?`${t} ${n}`:t&&l===n&&o?`${t} ${n} ${o}`:`${t} ${n} ${o} ${l}`},F=window.lodash,G=e=>"object"==typeof e,L=e=>{if(e&&G(e))return 0<Object.keys(e).length?{...e}:void 0};function W(e){if(!e||"object"!=typeof e)return;const t=e?.top,n=e?.right;return t&&n?t===n?{gap:t}:{"row-gap":t,"column-gap":n}:void 0}const D=function(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";const l=o?`-${o}`:"";if(!G(e))return;let r={};return Object.keys(e).map((o=>{const a=n?`--ystdb-${o}${l}-${t}`:(0,F.camelCase)(o);return r={...r,[a]:e[o]},!0})),r},U=function(e){return L(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(G(e))return{...D(W(e?.desktop),"desktop",A(e),t),...D(W(e?.tablet),"tablet",A(e),t),...D(W(e?.mobile),"mobile",A(e),t)}}(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:""))},q=function(e){return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const o=V({desktop:I(e,t?.desktop),tablet:I(e,t?.tablet),mobile:I(e,t?.mobile)});return L(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(G(e))return{...D(e?.desktop,"desktop",A(e),t),...D(e?.tablet,"tablet",A(e),t),...D(e?.mobile,"mobile",A(e),t)}}(o,n))}("margin",e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")},Y=t=>{const{label:n,values:o,onChange:l,units:r,inputProps:a,splitOnAxis:s}=t,i=null!=r?r:("units",u.component.units);const c=N(o,"desktop"),m=N(o,"tablet"),b=N(o,"mobile"),p=e=>{l(V({...o,desktop:H(e)}))},y=e=>{l(V({...o,tablet:H(e)}))},h=e=>{l(V({...o,mobile:H(e)}))};return(0,e.createElement)(v.BaseControl,null,(0,e.createElement)($,{label:n},(t=>(0,e.createElement)(e.Fragment,null,j===t.name&&(0,e.createElement)("div",{className:"ystd-responsive-spacing-box-control"},(0,e.createElement)(g,{label:(0,d._x)("デスクトップ","responsive-component","ystandard-toolbox"),values:c,onChange:p,units:i,inputProps:a,splitOnAxis:s})),B===t.name&&(0,e.createElement)("div",{className:"ystd-responsive-spacing-box-control"},(0,e.createElement)(g,{label:(0,d._x)("タブレット","responsive-component","ystandard-toolbox"),values:m,onChange:y,units:i,inputProps:a,splitOnAxis:s})),C===t.name&&(0,e.createElement)("div",{className:"ystd-responsive-spacing-box-control"},(0,e.createElement)(g,{label:(0,d._x)("モバイル","responsive-component","ystandard-toolbox"),values:b,onChange:h,units:i,inputProps:a,splitOnAxis:s}))))),(0,e.createElement)(T,{desktop:R(c),tablet:R(m),mobile:R(b),style:{marginTop:0}}))},J=t=>(0,e.createElement)(y.__experimentalBlockVariationPicker,t),K=()=>(0,e.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},(0,e.createElement)(v.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),(0,e.createElement)(v.Path,{d:"M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"})),Q=()=>(0,e.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},(0,e.createElement)(v.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),(0,e.createElement)(v.Path,{d:"M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"})),X=()=>(0,e.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},(0,e.createElement)(v.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),(0,e.createElement)(v.Path,{d:"M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"})),Z=()=>(0,e.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},(0,e.createElement)(v.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),(0,e.createElement)(v.Path,{d:"M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v1h16v-1H4zM4 21v1h16v-1H4z"})),ee=t=>{let{attributes:n,setAttributes:o}=t;const l=[{name:"top",title:(0,d.__)("上揃え","ystandard-blocks"),icon:K,default:!0},{name:"center",title:(0,d.__)("中央揃え","ystandard-blocks"),icon:Q},{name:"bottom",title:(0,d.__)("下揃え","ystandard-blocks"),icon:X},{name:"last",title:(0,d.__)("最後のブロックを下に揃える","ystandard-blocks"),icon:Z}],{verticalAlignment:r}=n,a=l.filter((e=>r===e.name)),s=l.filter((e=>!0===e.default))[0];return(0,e.createElement)(v.ToolbarGroup,null,(0,e.createElement)(v.ToolbarItem,null,(t=>(0,e.createElement)(v.DropdownMenu,{toggleProps:t,isCollapsed:!0,icon:a.length>0?a[0].icon:s.icon,label:(0,d.__)("縦揃え位置の変更","ystandard-blocks"),controls:l.map((e=>({...l.filter((t=>e.name===t.name))[0],isActive:r===e.name,onClick:()=>o({verticalAlignment:r===e.name?void 0:e.name})})))}))))},te=window.wp.primitives,ne=(0,e.createElement)(te.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(te.Path,{d:"M9 9v6h11V9H9zM4 20h1.5V4H4v16z"})),oe=(0,e.createElement)(te.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(te.Path,{d:"M20 9h-7.2V4h-1.6v5H4v6h7.2v5h1.6v-5H20z"})),le=(0,e.createElement)(te.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(te.Path,{d:"M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"})),re=(0,e.createElement)(te.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(te.Path,{d:"M9 15h6V9H9v6zm-5 5h1.5V4H4v16zM18.5 4v16H20V4h-1.5z"})),ae=t=>{let{attributes:n,setAttributes:o}=t;const l=[{name:"left",title:(0,d.__)("左揃え","ystandard-blocks"),icon:ne,default:!0},{name:"center",title:(0,d.__)("中央揃え","ystandard-blocks"),icon:oe},{name:"right",title:(0,d.__)("右揃え","ystandard-blocks"),icon:le},{name:"between",title:(0,d.__)("両端に揃える","ystandard-blocks"),icon:re}],{horizonAlignment:r}=n,a=l.filter((e=>r===e.name)),s=l.filter((e=>!0===e.default))[0];return(0,e.createElement)(v.ToolbarGroup,null,(0,e.createElement)(v.ToolbarItem,null,(t=>(0,e.createElement)(v.DropdownMenu,{toggleProps:t,isCollapsed:!0,icon:a.length>0?a[0].icon:s.icon,label:(0,d.__)("横位置","ystandard-blocks"),controls:l.map((e=>({...l.filter((t=>e.name===t.name))[0],isActive:r===e.name,onClick:()=>o({horizonAlignment:r===e.name?void 0:e.name})})))}))))},se=t=>(0,e.createElement)(y.BlockControls,null,(0,e.createElement)(ee,t),(0,e.createElement)(ae,t)),ie=e=>!Number.isNaN(Number(e)),ce=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;const n=parseFloat(e);return ie(n)?n:t}(e,t);return ie(l)?(ie(n)&&n>=l&&(l=n),ie(o)&&o<=l&&(l=o),l):t},de=t=>{let{attributes:n,setAttributes:o}=t;const{colPc:l,colTablet:r,colMobile:a}=n;return(0,e.createElement)(v.PanelBody,{title:(0,d.__)("カラム数","ystandard-blocks")},(0,e.createElement)(v.BaseControl,null,(0,e.createElement)(v.RangeControl,{label:(0,d.__)("デスクトップ","ystandard-blocks"),beforeIcon:"desktop",value:l,onChange:e=>{o({colPc:ce(e,3,1,6)})},min:1,max:6}),(0,e.createElement)(v.RangeControl,{label:(0,d.__)("タブレット","ystandard-blocks"),beforeIcon:"tablet",value:r,onChange:e=>{o({colTablet:ce(e,3,1,6)})},min:1,max:6}),(0,e.createElement)(v.RangeControl,{label:(0,d.__)("モバイル","ystandard-blocks"),beforeIcon:"smartphone",value:a,onChange:e=>{o({colMobile:ce(e,1,1,6)})},min:1,max:6})))},ue=t=>{let{label:n,values:o,onChange:l,...r}=t;return(0,e.createElement)(v.BaseControl,null,(0,e.createElement)(Y,z({label:n||(0,d.__)("余白(gap)","ystandard-toolbox"),values:o,onChange:e=>{l(S(e))},splitOnAxis:!0},r)))},me=t=>{let{attributes:n,setAttributes:o}=t;const{gap:l}=n;return(0,e.createElement)(v.PanelBody,{title:(0,d.__)("カラム間余白","ystandard-blocks")},(0,e.createElement)(ue,{label:(0,d.__)("カラム間の余白(gap)","ystandard-blocks"),onChange:e=>{o({gap:e})},values:l}))},be=t=>{let{children:n,type:o,className:l,...r}=t;const a=o||"info",s={className:b()("ystd-component-notice",l,`is-${a}`),...r};return(0,e.createElement)("div",s,n)},pe=t=>{let{attributes:n,setAttributes:o}=t;const{reverse:l}=n;return(0,e.createElement)(v.PanelBody,{title:(0,d.__)("レイアウト","ystandard-blocks")},(0,e.createElement)(v.BaseControl,{id:"column-reverse",label:(0,d.__)("表示順序を逆順にする","ystandard-blocks")},(0,e.createElement)(v.ToggleControl,{label:(0,d.__)("逆順にする","ystandard-blocks"),checked:l,onChange:()=>{o({reverse:!l})}}),(0,e.createElement)(be,{type:"help",style:{marginTop:"-24px"}},"※行内での表示が逆順になります。1行で複数列のカラムを表示するときに便利な設定です。",(0,e.createElement)("br",null),"※公開ページのみ逆順で表示され、編集画面では追加した順で表示されます。")))},ye=t=>{let{label:n,values:o,onChange:l,...r}=t;return(0,e.createElement)(v.BaseControl,null,(0,e.createElement)(Y,z({label:n||(0,d.__)("内側余白(padding)","ystandard-toolbox"),values:o,onChange:e=>{l(S(e))}},r)))},ve=t=>{const{updateColumnAttributes:n}=t,[o,l]=(0,e.useState)();return(0,e.createElement)(ye,{label:(0,d.__)("内側余白(padding)","ystandard-blocks"),values:o,onChange:e=>{n({padding:e}),l(e)}})},ge=t=>{let{children:n}=t;return(0,e.createElement)("div",{className:"ystdb__horizon-buttons"},n)},he=t=>{const{updateColumnAttributes:n}=t,o=e=>{n({shadow:e})};return(0,e.createElement)(v.BaseControl,{id:"shadow",label:(0,d.__)("影","ystandard-blocks")},(0,e.createElement)(ge,null,(0,e.createElement)(v.Button,{key:"shadow-on",isSecondary:!0,onClick:()=>{o(!0)}},(0,d.__)("ON","ystandard-blocks")),(0,e.createElement)(v.Button,{key:"shadow-off",isSecondary:!0,onClick:()=>{o(!1)}},(0,d.__)("OFF","ystandard-blocks"))))},fe=t=>(0,e.createElement)(v.PanelBody,{title:(0,d.__)("一括設定","ystandard-blocks")},(0,e.createElement)(ve,t),(0,e.createElement)(he,t)),ke=t=>{let{label:n,values:o,onChange:l,min:r=-9999,...a}=t;return(0,e.createElement)(v.BaseControl,null,(0,e.createElement)(Y,z({},a,{label:n||(0,d.__)("外側余白(margin)","ystandard-toolbox"),values:o,onChange:e=>{l(S(e))},inputProps:{min:r}})))},we=t=>{let{attributes:n,setAttributes:o}=t;const{margin:l}=n;return(0,e.createElement)(v.PanelBody,{title:(0,d.__)("余白","ystandard-blocks")},(0,e.createElement)(ke,{label:(0,d.__)("外側余白(margin)","ystandard-blocks"),onChange:e=>{o({margin:e})},values:l}))},_e=t=>(0,e.createElement)(y.InspectorControls,null,(0,e.createElement)(de,t),(0,e.createElement)(me,t),(0,e.createElement)(pe,t),(0,e.createElement)(we,t),(0,e.createElement)(fe,t));function Ee(e){if(A(e)||!e?.desktop)return;const t=W(e.desktop);return t?{"--ystdb-column-row-gap":t?.gap?t.gap:t?.["row-gap"],"--ystdb-column-column-gap":t?.gap?t.gap:t?.["column-gap"]}:void 0}const xe=["ystdb/column"],Oe=[["ystdb/column",{}],["ystdb/column",{}],["ystdb/column",{}]],Pe=(0,p.withDispatch)(((e,t,n)=>({updateColumnAttributes(o){const{clientId:l}=t,{updateBlockAttributes:r}=e("core/block-editor"),{getBlockOrder:a}=n.select("core/block-editor");a(l).forEach((e=>{r(e,o)}))}})))((function(t){const{attributes:n,className:o}=t,{colPc:l,colTablet:r,colMobile:a,verticalAlignment:s,horizonAlignment:i,gap:c,margin:d}=n,u=(0,y.useBlockProps)({className:b()(o,"ystdb-columns-wrap"),style:{...q(d)}}),m={className:b()("ystdb-columns",{[`has-${a}-columns`]:a,[`has-${r}-columns--tablet`]:r,[`has-${l}-columns--pc`]:l,[`is-vertically-aligned-${s}`]:s,[`is-horizontally-aligned-${i}`]:i}),style:{...Ee(c),...U(c)}},p=(0,y.useInnerBlocksProps)(m,{allowedBlocks:xe,template:Oe,templateLock:!1,orientation:"horizontal"});return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(se,t),(0,e.createElement)(_e,t),(0,e.createElement)("div",u,(0,e.createElement)("div",p)))}));function je(t){let{clientId:n,name:o,setAttributes:l}=t;const{blockType:r,defaultVariation:a,variations:s}=(0,p.useSelect)((e=>{const{getBlockVariations:t,getBlockType:n,getDefaultBlockVariation:l}=e(c.store);return{blockType:n(o),defaultVariation:l(o,"block"),variations:t(o,"block")}}),[o]),{replaceInnerBlocks:i}=(0,p.useDispatch)(y.store),d=(0,y.useBlockProps)();return(0,e.createElement)("div",d,(0,e.createElement)(J,{icon:r?.icon?.src,label:r?.title,variations:s,onSelect:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;e.attributes&&l(e.attributes),e.innerBlocks&&i(n,(0,c.createBlocksFromInnerBlocksTemplate)(e.innerBlocks),!0)},allowSkip:!0}))}const Be=t=>{const{clientId:n}=t,o=(0,p.useSelect)((e=>e(y.store).getBlocks(n).length>0),[n])?Pe:je;return(0,e.createElement)(o,t)};function Ce(t){let{attributes:n}=t;const{colPc:o,colTablet:l,colMobile:r,verticalAlignment:a,horizonAlignment:s,reverse:i,gap:c,margin:d}=n,u=y.useBlockProps.save({className:"ystdb-columns-wrap",style:{...q(d)}}),m={className:b()("ystdb-columns",{[`has-${r}-columns`]:r,[`has-${l}-columns--tablet`]:l,[`has-${o}-columns--pc`]:o,[`is-vertically-aligned-${a}`]:a,[`is-horizontally-aligned-${s}`]:s,"is-reverse":i}),style:{...Ee(c),...U(c)}},p=y.useInnerBlocksProps.save(m);return(0,e.createElement)("div",u,(0,e.createElement)("div",p))}const $e={attributes:{colPc:{type:"number",default:3},colTablet:{type:"number",default:3},colMobile:{type:"number",default:1},verticalAlignment:{type:"string"},horizonAlignment:{type:"string"},reverse:{type:"boolean",default:!1},removeMargin:{type:"boolean",default:!1},gap:{type:"object"}},supports:{align:["wide","full"],className:!1}},ze={attributes:{colPc:{type:"number",default:3},colTablet:{type:"number",default:3},colMobile:{type:"number",default:1},verticalAlignment:{type:"string"},horizonAlignment:{type:"string"},reverse:{type:"boolean",default:!1},removeMargin:{type:"boolean",default:!1},gap:{type:"object"},margin:{type:"object"}},supports:{align:["wide","full"],className:!1}},Te=[{attributes:ze.attributes,supports:ze.supports,save(t){let{attributes:n}=t;const{colPc:o,colTablet:l,colMobile:r,verticalAlignment:a,horizonAlignment:s,reverse:i,gap:c,margin:d}=n,u=y.useBlockProps.save({className:"ystdb-columns-wrap"}),m={className:b()("ystdb-columns",{[`has-${r}-columns`]:r,[`has-${l}-columns--tablet`]:l,[`has-${o}-columns--pc`]:o,[`is-vertically-aligned-${a}`]:a,[`is-horizontally-aligned-${s}`]:s,"is-reverse":i}),style:{...Ee(c),...U(c),...q(d)}},p=y.useInnerBlocksProps.save(m);return(0,e.createElement)("div",u,(0,e.createElement)("div",p))}}],Me=[{attributes:$e.attributes,supports:$e.supports,migrate(e){let t=e;return t=function(e){let t=e;return t?.removeMargin&&(t={...t,gap:{desktop:{top:"0px",right:"0px",bottom:"0px",left:"0px"}}},delete t.removeMargin),t?.className&&(t={...t,className:t.className.replace("is-no-margin","")}),t}(t),t},save(t){let{attributes:n}=t;const{colPc:o,colTablet:l,colMobile:r,verticalAlignment:a,horizonAlignment:s,reverse:i,removeMargin:c}=n,d=y.useBlockProps.save({className:"ystdb-columns-wrap"}),u={className:b()("ystdb-columns",{[`has-${r}-columns`]:r,[`has-${l}-columns--tablet`]:l,[`has-${o}-columns--pc`]:o,[`is-vertically-aligned-${a}`]:a,[`is-horizontally-aligned-${s}`]:s,"is-reverse":i,"is-no-margin":c})},m=y.useInnerBlocksProps.save(u);return(0,e.createElement)("div",d,(0,e.createElement)("div",m))}},...Te],Ae=(0,e.createElement)(i,{stroke:u.color.iconForeground,strokeWidth:"1px",style:{fill:"none"}}),Ne=[{name:"column-2",title:(0,d.__)("2列","ystandard-toolbox"),description:(0,d.__)("2列","ystandard-toolbox"),icon:Ae,attributes:{colPc:2,colTablet:2,colMobile:1},innerBlocks:[["ystdb/column"],["ystdb/column"]],scope:["block"]},{name:"column-3",title:(0,d.__)("3列","ystandard-toolbox"),description:(0,d.__)("3列","ystandard-toolbox"),isDefault:!0,icon:Ae,attributes:{colPc:3,colTablet:3,colMobile:1},innerBlocks:[["ystdb/column"],["ystdb/column"],["ystdb/column"]],scope:["block"]},{name:"column-4",title:(0,d.__)("4列","ystandard-toolbox"),description:(0,d.__)("4列","ystandard-toolbox"),icon:Ae,attributes:{colPc:4,colTablet:2,colMobile:1},innerBlocks:[["ystdb/column"],["ystdb/column"],["ystdb/column"],["ystdb/column"]],scope:["block"]}],Se={$schema:"https://raw.githubusercontent.com/WordPress/gutenberg/trunk/schemas/json/block.json",apiVersion:2,name:"ystdb/columns",title:"カスタムカラム",description:"モバイル・タブレット・PCでカラム数を変更できるカラムブロック",keywords:["column","カラム","col"],attributes:{colPc:{type:"number",default:3},colTablet:{type:"number",default:3},colMobile:{type:"number",default:1},verticalAlignment:{type:"string"},horizonAlignment:{type:"string"},reverse:{type:"boolean",default:!1},removeMargin:{type:"boolean",default:!1},gap:{type:"object"},margin:{type:"object"}},supports:{align:["wide","full"],className:!1}};!function(){const t=((e,t)=>{const n=window.ystdtbBlockEditor&&"object"==typeof window.ystdtbBlockEditor&&window.ystdtbBlockEditor.hasOwnProperty("defaultAttributes")?window.ystdtbBlockEditor.defaultAttributes:{};if(!n)return t;if(!n.hasOwnProperty(e))return t;const o=n[e];return Object.keys(o).map((e=>(t.hasOwnProperty(e)&&(t[e].default=o[e]),o))),t})(Se.name,Se.attributes);(0,c.registerBlockType)(Se.name,{...Se,title:(0,d.__)("カスタムカラム","ystandard-blocks"),description:(0,d.__)("モバイル・タブレット・PCでカラム数を変更できるカラムブロック","ystandard-blocks"),icon:(0,e.createElement)(i,{stroke:u.color.iconForeground,style:{fill:"none"}}),category:u.category.common,attributes:t,edit:Be,save:Ce,deprecated:Me,example:{},variations:Ne})}()})()})();