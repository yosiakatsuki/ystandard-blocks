!function(){var e={184:function(e,t){var n;!function(){"use strict";var l={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)l.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},703:function(e,t,n){"use strict";var l=n(414);function o(){}function r(){}r.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,r,a){if(a!==l){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n,n}},697:function(e,t,n){e.exports=n(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function n(l){var o=t[l];if(void 0!==o)return o.exports;var r=t[l]={exports:{}};return e[l](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=window.wp.element,t=window.React,l=n.n(t),o=n(697),r=n.n(o);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},a.apply(this,arguments)}var s=(0,t.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,s=void 0===r?24:r,i=function(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return l().createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),l().createElement("path",{d:"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"}))}));s.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},s.displayName="Columns";var i=s,c=window.wp.blocks,d=window.wp.i18n;const u={category:{common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},color:{iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:(0,d.__)("小","ystandard-blocks")},{value:"",label:(0,d.__)("中","ystandard-blocks")},{value:"is-large",label:(0,d.__)("大","ystandard-blocks")}],animationTypes:[{label:(0,d.__)("なし","ystandard-blocks"),value:"none"},{label:(0,d.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"is-small",label:(0,d.__)("小","ystandard-blocks")},{value:"",label:(0,d.__)("中","ystandard-blocks")},{value:"is-large",label:(0,d.__)("大","ystandard-blocks")}]},component:{defaultAvatar:{url:"https://www.gravatar.com/avatar/000000000000000000000000000000?s=128&r=g&d=mp"},fontWeight:[{value:"",label:(0,d._x)("指定無し","component-config","ystandard-blocks")},{value:"normal",label:(0,d._x)("通常(normal)","component-config","ystandard-blocks")},{value:"bold",label:(0,d._x)("太字(bold)","component-config","ystandard-blocks")},{value:"100",label:(0,d._x)("100","component-config","ystandard-blocks")},{value:"200",label:(0,d._x)("200","component-config","ystandard-blocks")},{value:"300",label:(0,d._x)("300","component-config","ystandard-blocks")},{value:"400",label:(0,d._x)("400","component-config","ystandard-blocks")},{value:"500",label:(0,d._x)("500","component-config","ystandard-blocks")},{value:"600",label:(0,d._x)("600","component-config","ystandard-blocks")},{value:"700",label:(0,d._x)("700","component-config","ystandard-blocks")},{value:"800",label:(0,d._x)("800","component-config","ystandard-blocks")},{value:"900",label:(0,d._x)("900","component-config","ystandard-blocks")}],fontUnit:[{value:"px",label:"px"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"%",label:"%"}],fontStyle:[{value:"",label:(0,d._x)("指定無し","component-config","ystandard-blocks")},{value:"italic",label:(0,d._x)("イタリック体","component-config","ystandard-blocks")}],borderStyles:[{value:"solid",label:(0,d._x)("直線","component-config","ystandard-blocks")},{value:"dotted",label:(0,d._x)("点線","component-config","ystandard-blocks")},{value:"dashed",label:(0,d._x)("破線","component-config","ystandard-blocks")},{value:"double",label:(0,d._x)("二重線","component-config","ystandard-blocks")}]}};var b=n(184),p=n.n(b),m=window.wp.blockEditor,y=window.wp.compose,v=window.lodash,g=window.wp.components,f=t=>(0,e.createElement)(g.__experimentalBoxControl,t);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},h.apply(this,arguments)}var k=(0,t.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,a=void 0===r?24:r,s=function(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return l().createElement("svg",h({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),l().createElement("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),l().createElement("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),l().createElement("line",{x1:"12",y1:"17",x2:"12",y2:"21"}))}));k.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},k.displayName="Monitor";var _=k;function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},E.apply(this,arguments)}var w=(0,t.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,a=void 0===r?24:r,s=function(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return l().createElement("svg",E({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),l().createElement("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",ry:"2"}),l().createElement("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"}))}));w.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},w.displayName="Tablet";var x=w;function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},C.apply(this,arguments)}var O=(0,t.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,a=void 0===r?24:r,s=function(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return l().createElement("svg",C({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),l().createElement("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),l().createElement("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"}))}));O.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},O.displayName="Smartphone";var j=O;const T="desktop",P="tablet",B="mobile";var N=t=>{let{label:n,activeClass:l,onSelect:o,children:r}=t;return(0,e.createElement)("div",{className:"ystd-responsive-tab"},!!n&&(0,e.createElement)("div",{className:p()("ystd-responsive-tab__label")},n),(0,e.createElement)(g.TabPanel,{className:p()("ystd-responsive-tab__panel",{"has-label":!!n}),activeClass:l,onSelect:o,tabs:[{name:T,title:(0,e.createElement)(_,null),className:p()("ystd-responsive-tab__tab-button")},{name:P,title:(0,e.createElement)(x,null),className:p()("ystd-responsive-tab__tab-button")},{name:B,title:(0,e.createElement)(j,null),className:p()("ystd-responsive-tab__tab-button")}]},r))};function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},$.apply(this,arguments)}var S=t=>{let{desktop:n,tablet:l,mobile:o,...r}=t;return l||o?(0,e.createElement)("div",$({className:"ystd-responsive-values-info"},r),(0,e.createElement)("div",null,(0,e.createElement)(_,null),n||"-"),(0,e.createElement)("div",null,(0,e.createElement)(x,null),l||"-"),(0,e.createElement)("div",null,(0,e.createElement)(j,null),o||"-")):null};const A=e=>u.component[e],R={desktop:"desktop",tablet:"tablet",mobile:"mobile"},L=e=>!(!e||"object"!=typeof e)&&(e.hasOwnProperty("tablet")||e.hasOwnProperty("mobile")),I=(e,t)=>{if(!e||"object"!=typeof e)return;let n=e.hasOwnProperty(t)?e[t]:{};return"object"==typeof n&&(n=0<Object.keys(n).length?n:void 0),n},W=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e||"object"!=typeof e)return;let n={};return Object.keys(R).map((l=>(e.hasOwnProperty(l)&&(t?n={...n,[l]:e[l]}:e[l]&&(n={...n,[l]:e[l]})),!0))),0<Object.keys(n).length?n:void 0},z=(e,t)=>{if(!t||"object"!=typeof t)return;const n=(null==t?void 0:t.top)||"",l=(null==t?void 0:t.right)||"",o=(null==t?void 0:t.bottom)||"",r=(null==t?void 0:t.left)||"";if(n&&[l,o,r].every((e=>e===n)))return{[`${e}`]:n};if(n&&n===o&&l&&l===r)return{[`${e}`]:`${n} ${l}`};if(n&&l&&l===r&&o)return{[`${e}`]:`${n} ${l} ${o}`};if(n&&l&&r&&o)return{[`${e}`]:`${n} ${l} ${o} ${r}`};let a={};return n&&(a={...a,[`${e}-top`]:n}),l&&(a={...a,[`${e}-right`]:l}),o&&(a={...a,[`${e}-bottom`]:o}),r&&(a={...a,[`${e}-left`]:r}),a},F=e=>{if(e&&"object"==typeof e&&(null!=e&&e.top||null!=e&&e.right||null!=e&&e.bottom||null!=e&&e.left))return e},D=e=>{if(!e||"object"!=typeof e)return;const t=(null==e?void 0:e.top)||"-",n=(null==e?void 0:e.right)||"-",l=(null==e?void 0:e.bottom)||"-",o=(null==e?void 0:e.left)||"-";return[n,l,o].every((e=>e===t))?`${t}`:t===l&&o===n?`${t} ${n}`:t&&o===n&&l?`${t} ${n} ${l}`:`${t} ${n} ${l} ${o}`},G=e=>"object"==typeof e,M=e=>{if(e&&G(e))return 0<Object.keys(e).length?{...e}:void 0};var U=t=>{const{label:n,values:l,onChange:o,units:r,inputProps:a,splitOnAxis:s}=t,i=null!=r?r:A("units"),c=I(l,"desktop"),u=I(l,"tablet"),b=I(l,"mobile"),p=e=>{o(W({...l,desktop:F(e)}))},m=e=>{o(W({...l,tablet:F(e)}))},y=e=>{o(W({...l,mobile:F(e)}))};return(0,e.createElement)(g.BaseControl,null,(0,e.createElement)(N,{label:n},(t=>(0,e.createElement)(e.Fragment,null,T===t.name&&(0,e.createElement)("div",{className:"ystd-responsive-spacing-box-control"},(0,e.createElement)(f,{label:(0,d._x)("デスクトップ","responsive-component","ystandard-toolbox"),values:c,onChange:p,units:i,inputProps:a,splitOnAxis:s})),P===t.name&&(0,e.createElement)("div",{className:"ystd-responsive-spacing-box-control"},(0,e.createElement)(f,{label:(0,d._x)("タブレット","responsive-component","ystandard-toolbox"),values:u,onChange:m,units:i,inputProps:a,splitOnAxis:s})),B===t.name&&(0,e.createElement)("div",{className:"ystd-responsive-spacing-box-control"},(0,e.createElement)(f,{label:(0,d._x)("モバイル","responsive-component","ystandard-toolbox"),values:b,onChange:y,units:i,inputProps:a,splitOnAxis:s}))))),(0,e.createElement)(S,{desktop:D(c),tablet:D(u),mobile:D(b),style:{marginTop:0}}))};const V=function(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";const o="--ystdb",r=l?`-${l}`:"";if(!G(e))return;let a={};return Object.keys(e).map((l=>{const s=n?`${o}-${l}${r}-${t}`:(0,v.camelCase)(l);return a={...a,[s]:e[l]},!0})),a},H=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(G(e))return{...V(null==e?void 0:e.desktop,"desktop",L(e),t),...V(null==e?void 0:e.tablet,"tablet",L(e),t),...V(null==e?void 0:e.mobile,"mobile",L(e),t)}},q=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const l=W({desktop:z(e,null==t?void 0:t.desktop),tablet:z(e,null==t?void 0:t.tablet),mobile:z(e,null==t?void 0:t.mobile)});return M(H(l,n))},Y=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return q("padding",e,t)};var J=t=>{let{label:n,value:l,onChange:o,units:r,...a}=t;return(0,e.createElement)(g.__experimentalUnitControl,$({label:n,value:l,onChange:o,units:r},a))},K=t=>{let{onClick:n,label:l,isDisable:o,...r}=t;const a=null!=l?l:(0,d.__)("リセット","ystandard-blocks");return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(g.Button,$({isSecondary:!0,isSmall:!0,disabled:!!o,onClick:n},r),a))};const Q=t=>{let{children:n,...l}=t;const{justifyBetween:o,justifyCenter:r,justifyRight:a,justifyLeft:s,alignTop:i,alignCenter:c,alignBottom:d,gap:u,isGapSmall:b,isGapLarge:p}=l;let m,y,v;o&&(m="space-between"),r&&(m="center"),a&&(m="flex-end"),s&&(m="flex-start"),i&&(y="flex-start"),c&&(y="center"),d&&(y="flex-end"),b&&(v="0.5em"),p&&(v="1em"),u&&(v=u);const g={style:{display:"flex",justifyContent:m,alignItems:y,gap:v,...null==l?void 0:l.style}};return(0,e.createElement)("div",g,n)};var X=t=>{let{label:n,values:l,onChange:o,units:r}=t;const a=null!=r?r:A("units"),s=I(l,"desktop"),i=I(l,"tablet"),c=I(l,"mobile"),u=e=>{o(W({...l,desktop:e||void 0}))},b=e=>{o(W({...l,tablet:e||void 0}))},p=e=>{o(W({...l,mobile:e||void 0}))};return(0,e.createElement)(g.BaseControl,null,(0,e.createElement)(N,{label:n},(t=>(0,e.createElement)(e.Fragment,null,T===t.name&&(0,e.createElement)(Q,{isGapSmall:!0,alignBottom:!0},(0,e.createElement)(J,{className:"ystd-responsive-values-unit-control",label:(0,d._x)("デスクトップ","responsive-component","ystandard-toolbox"),value:s,onChange:u,units:a}),(0,e.createElement)(K,{isDisable:!s,onClick:()=>{u(void 0)}})),P===t.name&&(0,e.createElement)(Q,{isGapSmall:!0,alignBottom:!0},(0,e.createElement)(J,{className:"ystd-responsive-values-unit-control",label:(0,d._x)("タブレット","responsive-component","ystandard-toolbox"),value:i,onChange:b,units:a}),(0,e.createElement)(K,{isDisable:!i,onClick:()=>{b(void 0)}})),B===t.name&&(0,e.createElement)(Q,{isGapSmall:!0,alignBottom:!0},(0,e.createElement)(J,{className:"ystd-responsive-values-unit-control",label:(0,d._x)("モバイル","responsive-component","ystandard-toolbox"),value:c,onChange:p,units:a}),(0,e.createElement)(K,{isDisable:!c,onClick:()=>{p(void 0)}}))))),(0,e.createElement)(S,{desktop:s,tablet:i,mobile:c}))};const Z=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const l="--ystdb",o=n?`-${n}`:"";if(!G(t))return;if(!L(t))return{[(0,v.camelCase)(e)]:null==t?void 0:t.desktop};let r={};return Object.keys(t).map((n=>{const a=`${l}-${e}${o}-${n}`;return r={...r,[a]:t[n]},!0})),r},ee=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const l=W({desktop:null==t?void 0:t.desktop,tablet:null==t?void 0:t.tablet,mobile:null==t?void 0:t.mobile});return M(Z(e,l,n))},te=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return ee("width",e,t)};var ne=t=>{const{backgroundColor:n,setBackgroundColor:l}=t;return(0,e.createElement)(m.PanelColorSettings,{title:(0,d.__)("背景設定","ystandard-blocks"),colorSettings:[{value:n.color,onChange:e=>{l(e)},label:(0,d.__)("背景色","ystandard-blocks")}]})},le=t=>{let{label:n,values:l,onChange:o,...r}=t;return(0,e.createElement)(g.BaseControl,null,(0,e.createElement)(U,$({label:n||(0,d.__)("内側余白(padding)","ystandard-toolbox"),values:l,onChange:e=>{o((e=>{if(!e||"object"!=typeof e)return;let t={};return null!=e&&e.desktop&&(t={...t,desktop:e.desktop}),null!=e&&e.tablet&&(t={...t,tablet:e.tablet}),null!=e&&e.mobile&&(t={...t,mobile:e.mobile}),0<Object.keys(t).length?t:void 0})(e))}},r)))},oe=t=>{let{attributes:n,setAttributes:l}=t;const{padding:o}=n;return(0,e.createElement)(g.PanelBody,{title:(0,d.__)("余白設定","ystandard-blocks")},(0,e.createElement)(le,{values:o,onChange:e=>{l({padding:e})}}))},re=t=>{let{attributes:n,setAttributes:l}=t;const{shadow:o}=n;return(0,e.createElement)(g.PanelBody,{title:(0,d.__)("影設定","ystandard-blocks")},(0,e.createElement)(g.BaseControl,null,(0,e.createElement)(g.ToggleControl,{label:(0,d.__)("影をつける","ystandard-blocks"),checked:o,onChange:()=>{l({shadow:!o})}})))},ae=t=>{let{attributes:n,setAttributes:l}=t;const{width:o}=n;return(0,e.createElement)(X,{label:(0,d.__)("カラム幅","ystandard-blocks"),values:o,onChange:e=>{l({width:e})}})},se=t=>{let{panelLabel:n,toggleLabel:l,values:o,onChange:r,valuesInfoLabel:a}=t;const s=null!=a?a:(0,d._x)("ON","responsive-toggle","ystandard-blocks"),i=I(o,"desktop"),c=I(o,"tablet"),u=I(o,"mobile");return(0,e.createElement)(g.BaseControl,null,(0,e.createElement)(N,{label:n},(t=>(0,e.createElement)(e.Fragment,null,T===t.name&&(0,e.createElement)(g.ToggleControl,{label:l,checked:!!i,onChange:e=>{(e=>{r(W({...o,desktop:e||void 0}))})(e)}}),P===t.name&&(0,e.createElement)(g.ToggleControl,{label:l,checked:!!c,onChange:e=>{(e=>{r(W({...o,tablet:e||void 0}))})(e)}}),B===t.name&&(0,e.createElement)(g.ToggleControl,{label:l,checked:!!u,onChange:e=>{(e=>{r(W({...o,mobile:e||void 0}))})(e)}})))),(0,e.createElement)(S,{desktop:i?s:void 0,tablet:c?s:void 0,mobile:u?s:void 0}))};const ie="warning";var ce=t=>{let{children:n,type:l,className:o,...r}=t;const a=l||"info",s={className:p()("ystd-component-notice",o,`is-${a}`),...r};return(0,e.createElement)("div",s,n)},de=t=>{let{attributes:n,setAttributes:l}=t;const{isAutoWidth:o,width:r}=n;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(se,{panelLabel:(0,d.__)("幅自動調整","ystandard-blocks"),toggleLabel:(0,d.__)("幅を自動で伸縮する","ystandard-blocks"),values:o,onChange:e=>{l({isAutoWidth:e})}}),G(o)&&G(r)&&(0,e.createElement)(ce,{type:ie},(0,e.createElement)("div",null,(0,d.__)("「カラム幅」と「幅を自動で伸縮する」を両方指定した場合、「カラム幅」が優先されます。","ystandard-blocks"))))},ue=t=>(0,e.createElement)(g.PanelBody,{title:(0,d.__)("カラムサイズ設定","ystandard-blocks")},(0,e.createElement)(ae,t),(0,e.createElement)(de,t));const be="noreferrer noopener";var pe=t=>{let{value:n,onChange:l,...o}=t;const{linkTarget:r,rel:a,url:s}=n,i="_blank"===r;return(0,e.createElement)("div",{className:"aktk-link-control"},(0,e.createElement)(m.__experimentalLinkControl,$({value:{url:s,opensInNewTab:i},onChange:e=>{let{url:t="",opensInNewTab:n}=e,o=a,s=r;i!==n&&(s=n?"_blank":void 0,s&&!a?o=be:s||a!==be||(o=void 0)),l({url:t,linkTarget:s,rel:o})},onRemove:()=>{l({url:void 0,linkTarget:void 0,rel:void 0})}},o)))},me=t=>{let{attributes:n,setAttributes:l}=t;const{linkTarget:o,rel:r,url:a,screenReaderText:s}=n,i=(0,e.useCallback)((e=>{l({rel:e})}),[l]),c=(0,e.useCallback)((e=>{l({screenReaderText:e})}),[l]);return(0,e.createElement)(g.PanelBody,{title:(0,d.__)("リンク設定(β)","ystandard-blocks"),initialOpen:!1},(0,e.createElement)(g.BaseControl,null,(0,e.createElement)(ce,{type:ie,style:{fontSize:"12px"}},(0,e.createElement)("div",null,(0,d.__)("リンクの設定をした場合、公開ページでカラム内のテキストを選択できない状態になります。","ystandard-blocks")),(0,e.createElement)("div",null,(0,d.__)("※この機能は現在β版機能です。","ystandard-blocks")))),(0,e.createElement)(g.BaseControl,null,(0,e.createElement)(pe,{value:{url:a,linkTarget:o,rel:r},onChange:e=>{l(e)}})),(0,e.createElement)(g.BaseControl,null,(0,e.createElement)(g.TextControl,{className:"ystdb-column-editor__link-rel",label:(0,d.__)("リンク rel 属性","ystandard-blocks"),value:r||"",onChange:i})),(0,e.createElement)(g.BaseControl,null,(0,e.createElement)(g.TextControl,{className:"ystdb-column-editor__link-rel",label:(0,d.__)("スクリーンリーダーテキスト","ystandard-blocks"),value:s||"",onChange:c})))},ye=t=>(0,e.createElement)(m.InspectorControls,null,(0,e.createElement)(ne,t),(0,e.createElement)(ue,t),(0,e.createElement)(oe,t),(0,e.createElement)(re,t),(0,e.createElement)(me,t));const ve=e=>({"is-auto-width-desktop":I(e,"desktop"),"is-auto-width-tablet":I(e,"tablet"),"is-auto-width-mobile":I(e,"mobile")});var ge=(0,y.compose)([(0,m.withColors)("backgroundColor")])((function(t){const{attributes:n,backgroundColor:l,className:o}=t,{shadow:r,padding:a,width:s,isAutoWidth:i}=n,c=(0,m.useBlockProps)({className:p()("ystdb-column",o,{"has-background":l.color,[l.class]:l.class,"has-shadow":r,"has-column-width":!!s,...ve(i)}),style:{backgroundColor:l.color,...Y(a),...te(s),...ee("flex-basis",s)}}),d=(0,m.useInnerBlocksProps)({className:"ystdb-column-block-container"},{templateLock:!1,renderAppender:()=>(0,e.createElement)(m.InnerBlocks.ButtonBlockAppender,null)});return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(ye,t),(0,e.createElement)("div",c,(0,e.createElement)("div",d)))}));function fe(t){let{attributes:n}=t;const{shadow:l,backgroundColor:o,customBackgroundColor:r,padding:a,width:s,isAutoWidth:i,linkTarget:c,rel:d,url:u,screenReaderText:b}=n,y=(0,m.getColorClassName)("background-color",o),v=m.useBlockProps.save({className:p()("ystdb-column",{"has-background":y||r,[y]:y,"has-shadow":l,"has-column-width":!!s,...ve(i)}),style:{backgroundColor:r||void 0,...Y(a),...te(s),...ee("flex-basis",s)}}),g=m.useInnerBlocksProps.save({className:"ystdb-column-block-container"});return(0,e.createElement)("div",v,(0,e.createElement)("div",g),!!u&&(0,e.createElement)("a",{href:u,className:"ystdb-column__link",target:c,rel:d},b&&(0,e.createElement)("span",{className:"ystdb-column__link-screen-reader-text"},b)))}const he=[{$schema:"https://raw.githubusercontent.com/WordPress/gutenberg/trunk/schemas/json/block.json",apiVersion:2,name:"ystdb/column",title:"カラム",description:"カスタムカラム用カラムブロック",attributes:{backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},shadow:{type:"boolean"},paddingType:{type:"string",default:""}},supports:{align:!1,className:!1},parent:["ystdb/columns"],migrate(e){return function(e){if(null==e||!e.paddingType)return e;let t=e;const n={"is-padding-small":"1rem","is-padding-large":"1.5rem"};return Object.keys(n).map((e=>{var l,o;return e===(null===(l=t)||void 0===l?void 0:l.paddingType)&&(t={...t,padding:{desktop:{top:n[e],right:n[e],bottom:n[e],left:n[e]}}},delete t.paddingType,null!==(o=t)&&void 0!==o&&o.className&&(t.className=t.className.replace(e,"").trim())),!0})),t}(e)},save(t){let{attributes:n}=t;const{shadow:l,backgroundColor:o,customBackgroundColor:r,paddingType:a}=n,s=(0,m.getColorClassName)("background-color",o),i=m.useBlockProps.save({className:p()("ystdb-column",{"has-background":s||r,[s]:s,"has-shadow":l,[a]:a}),style:{backgroundColor:r||void 0}}),c=m.useInnerBlocksProps.save({className:"ystdb-column-block-container"});return(0,e.createElement)("div",i,(0,e.createElement)("div",c))}}],ke=[...he],_e={$schema:"https://raw.githubusercontent.com/WordPress/gutenberg/trunk/schemas/json/block.json",apiVersion:2,name:"ystdb/column",title:"カラム",description:"カスタムカラム用カラムブロック",attributes:{backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},shadow:{type:"boolean"},padding:{type:"object"},width:{type:"object"},isAutoWidth:{type:"object"},url:{type:"string",source:"attribute",selector:".ystdb-column__link",attribute:"href"},linkTarget:{type:"string",source:"attribute",selector:".ystdb-column__link",attribute:"target"},rel:{type:"string",source:"attribute",selector:".ystdb-column__link",attribute:"rel"},screenReaderText:{type:"string",source:"text",selector:".ystdb-column__link-screen-reader-text"}},supports:{align:!1,className:!1},parent:["ystdb/columns"]};!function(){const t=((e,t)=>{const n=window.ystdtbBlockEditor&&"object"==typeof window.ystdtbBlockEditor&&window.ystdtbBlockEditor.hasOwnProperty("defaultAttributes")?window.ystdtbBlockEditor.defaultAttributes:{};if(!n)return t;if(!n.hasOwnProperty(e))return t;const l=n[e];return Object.keys(l).map((e=>(t.hasOwnProperty(e)&&(t[e].default=l[e]),l))),t})(_e.name,_e.attributes);(0,c.registerBlockType)(_e.name,{..._e,title:(0,d.__)("カラム","ystandard-blocks"),description:(0,d.__)("yStandard Blocks カラムブロック","ystandard-blocks"),icon:(0,e.createElement)(i,{stroke:u.color.iconForeground,style:{fill:"none"}}),category:u.category.common,attributes:t,edit:ge,save:fe,example:{},deprecated:ke})}()}()}();