!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=43)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)){if(o.length){var l=r.apply(null,o);l&&e.push(l)}}else if("object"===a)if(o.toString===Object.prototype.toString)for(var c in o)n.call(o,c)&&o[c]&&e.push(c);else e.push(o.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},,function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(1);const r={category:{common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},color:{iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:Object(o.__)("小","ystandard-blocks")},{value:"",label:Object(o.__)("中","ystandard-blocks")},{value:"is-large",label:Object(o.__)("大","ystandard-blocks")}],animationTypes:[{label:Object(o.__)("なし","ystandard-blocks"),value:"none"},{label:Object(o.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"is-small",label:Object(o.__)("小","ystandard-blocks")},{value:"",label:Object(o.__)("中","ystandard-blocks")},{value:"is-large",label:Object(o.__)("大","ystandard-blocks")}]},component:{defaultAvatar:{url:"https://www.gravatar.com/avatar/000000000000000000000000000000?s=128&r=g&d=mp"},fontWeight:[{value:"",label:Object(o._x)("指定無し","component-config","ystandard-blocks")},{value:"normal",label:Object(o._x)("通常(normal)","component-config","ystandard-blocks")},{value:"bold",label:Object(o._x)("太字(bold)","component-config","ystandard-blocks")},{value:"100",label:Object(o._x)("100","component-config","ystandard-blocks")},{value:"200",label:Object(o._x)("200","component-config","ystandard-blocks")},{value:"300",label:Object(o._x)("300","component-config","ystandard-blocks")},{value:"400",label:Object(o._x)("400","component-config","ystandard-blocks")},{value:"500",label:Object(o._x)("500","component-config","ystandard-blocks")},{value:"600",label:Object(o._x)("600","component-config","ystandard-blocks")},{value:"700",label:Object(o._x)("700","component-config","ystandard-blocks")},{value:"800",label:Object(o._x)("800","component-config","ystandard-blocks")},{value:"900",label:Object(o._x)("900","component-config","ystandard-blocks")}],fontUnit:[{value:"px",label:"px"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"%",label:"%"}],fontStyle:[{value:"",label:Object(o._x)("指定無し","component-config","ystandard-blocks")},{value:"italic",label:Object(o._x)("イタリック体","component-config","ystandard-blocks")}]}}},function(e,t){e.exports=window.React},function(e,t,n){e.exports=n(16)()},,function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.compose},,,,function(e,t){e.exports=window.wp.data},function(e,t,n){"use strict";var o=n(17);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,a,l){if(l!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return l}));var o=n(1);const r={backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},shadow:{type:"bool"},paddingType:{type:"string",default:""}},a={align:!1,className:!1},l=[{value:"",label:Object(o.__)("なし")},{value:"is-padding-small",label:Object(o.__)("小")},{value:"is-padding-large",label:Object(o.__)("大")}]},,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(6),a=n(4),l=n.n(a),c=n(3),s=n(2),i=n(15),b=n(11),d=n(1),u=n(22),p=Object(b.compose)([Object(c.withColors)("backgroundColor"),Object(i.withSelect)((e,t)=>{const{clientId:n}=t,{getBlockOrder:o}=e("core/block-editor");return{hasChildBlocks:o(n).length>0}})])((function(e){const{attributes:t,setAttributes:n,setBackgroundColor:r,backgroundColor:a,hasChildBlocks:i,className:b}=e,{shadow:p,paddingType:f}=t,y=l()(b,"ystdb-column",{"has-background":a.color,[a.class]:a.class,"has-shadow":p,[f]:f}),m={backgroundColor:a.color};return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(c.InspectorControls,null,Object(o.createElement)(c.PanelColorSettings,{title:Object(d.__)("色設定","ystandard-blocks"),colorSettings:[{value:a.color,onChange:e=>{r(e)},label:Object(d.__)("背景色","ystandard-blocks")}]}),Object(o.createElement)(s.PanelBody,{title:Object(d.__)("デザイン","ystandard-blocks")},Object(o.createElement)(s.BaseControl,{id:"padding",label:Object(d.__)("余白","ystandard-blocks")},Object(o.createElement)("div",{className:"ystdb-inspector-controls__horizon-buttons"},u.b.map(e=>Object(o.createElement)(s.Button,{key:e.value,isSecondary:f!==e.value,isPrimary:f===e.value,onClick:()=>{n({paddingType:e.value})}},Object(o.createElement)("span",null,e.label))))),Object(o.createElement)(s.BaseControl,{id:"shadow",label:Object(d.__)("影","ystandard-blocks")},Object(o.createElement)(s.ToggleControl,{label:Object(d.__)("影をつける","ystandard-blocks"),checked:p,onChange:()=>{n({shadow:!p})}})))),Object(o.createElement)("div",{className:y,style:m},Object(o.createElement)("div",{className:"ystdb-column-block-container"},Object(o.createElement)(c.InnerBlocks,{templateLock:!1,renderAppender:i?void 0:()=>Object(o.createElement)(c.InnerBlocks.ButtonBlockAppender,null)}))))})),f=n(7),y=n.n(f),m=n(8),g=n.n(m);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var v=Object(f.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,a=void 0===r?24:r,l=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["color","size"]);return y.a.createElement("svg",O({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),y.a.createElement("path",{d:"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"}))}));v.propTypes={color:g.a.string,size:g.a.oneOfType([g.a.string,g.a.number])},v.displayName="Columns";var j=v,_=n(10);Object(_.registerBlockType)("ystdb/column",{title:Object(d.__)("カラム","ystandard-blocks"),description:Object(d.__)("yStandard Blocks カラムブロック","ystandard-blocks"),icon:Object(o.createElement)(j,{stroke:r.a.color.iconForeground,style:{fill:"none"}}),category:r.a.category.common,attributes:u.a,supports:u.c,parent:["ystdb/columns"],edit:p,save:function({attributes:e}){const{shadow:t,backgroundColor:n,customBackgroundColor:r,paddingType:a}=e,s=Object(c.getColorClassName)("background-color",n),i=l()("ystdb-column",{"has-background":s||r,[s]:s,"has-shadow":t,[a]:a}),b={backgroundColor:r||void 0};return Object(o.createElement)("div",{className:i,style:b},Object(o.createElement)("div",{className:"ystdb-column-block-container"},Object(o.createElement)(c.InnerBlocks.Content,null)))}})}]);