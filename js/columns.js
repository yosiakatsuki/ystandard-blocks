!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=82)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t,n){"use strict";function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;if(!isFinite(e)||""===e||e<t){if(null===o&&(""===e||void 0===e))return;e=void 0!==o?o:t}return e=Number(e),null!==n&&e>n&&(e=n),e}n.d(t,"a",(function(){return o}))},13:function(e,t){!function(){e.exports=this.wp.blocks}()},19:function(e,t,n){var o=n(54),r=n(55),c=n(35),l=n(56);e.exports=function(e){return o(e)||r(e)||c(e)||l()}},2:function(e,t){!function(){e.exports=this.wp.components}()},21:function(e,t,n){"use strict";var o=n(22);function r(){}function c(){}c.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,c,l){if(l!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:r};return n.PropTypes=n,n}},22:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},25:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},26:function(e,t){!function(){e.exports=this.wp.data}()},3:function(e,t){!function(){e.exports=this.React}()},35:function(e,t,n){var o=n(25);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},4:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},5:function(e,t){!function(){e.exports=this.wp.blockEditor}()},54:function(e,t,n){var o=n(25);e.exports=function(e){if(Array.isArray(e))return o(e)}},55:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},56:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},6:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var c=typeof o;if("string"===c||"number"===c)e.push(o);else if(Array.isArray(o)&&o.length){var l=r.apply(null,o);l&&e.push(l)}else if("object"===c)for(var a in o)n.call(o,a)&&o[a]&&e.push(a)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return l}));var o=n(1),r={backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},shadow:{type:"bool"},paddingType:{type:"string",default:""}},c={align:!1,className:!1},l=[{value:"",label:Object(o.__)("なし")},{value:"is-padding-small",label:Object(o.__)("小")},{value:"is-padding-large",label:Object(o.__)("大")}]},7:function(e,t,n){e.exports=n(21)()},82:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(9),c=n(4),l=n.n(c),a=n(6),i=n.n(a),s=n(10),u=n(1),b=n(2),d=Object(o.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(o.createElement)(b.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(o.createElement)(b.Path,{d:"M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"})),m=Object(o.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(o.createElement)(b.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(o.createElement)(b.Path,{d:"M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"})),p=Object(o.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(o.createElement)(b.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(o.createElement)(b.Path,{d:"M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"})),f=Object(o.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(o.createElement)(b.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(o.createElement)(b.Path,{d:"M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v1h16v-1H4zM4 21v1h16v-1H4z"})),y={colPc:{type:"number",default:3},colTablet:{type:"number",default:3},colMobile:{type:"number",default:1},verticalAlignment:{type:"string",default:void 0},horizonAlignment:{type:"string",default:void 0},reverse:{type:"bool",default:!1},removeMargin:{type:"bool",default:!1}},g=["ystdb/column"],v=[["ystdb/column",{}],["ystdb/column",{}],["ystdb/column",{}]],O={top:{icon:p,title:Object(u._x)("Vertically Align Top","Block vertical alignment setting")},center:{icon:m,title:Object(u._x)("Vertically Align Middle","Block vertical alignment setting")},bottom:{icon:d,title:Object(u._x)("Vertically Align Bottom","Block vertical alignment setting")},last:{icon:f,title:Object(u._x)("最後のブロックを下に揃える","ystandard-blocks")}},h={left:{icon:Object(o.createElement)(b.Dashicon,{icon:"align-left"}),title:Object(u.__)("左寄せ","ystandard-blocks")},center:{icon:Object(o.createElement)(b.Dashicon,{icon:"align-center"}),title:Object(u.__)("中央","ystandard-blocks")},right:{icon:Object(o.createElement)(b.Dashicon,{icon:"align-right"}),title:Object(u.__)("右寄せ","ystandard-blocks")},between:{icon:Object(o.createElement)(b.Dashicon,{icon:"align-wide"}),title:Object(u.__)("両端に揃える","ystandard-blocks")}},j=n(26),_=n(5),w=n(62);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=Object(j.withDispatch)((function(e,t,n){return{updatePadding:function(o){var r=t.clientId,c=e("core/block-editor").updateBlockAttributes;(0,n.select("core/block-editor").getBlockOrder)(r).forEach((function(e){c(e,o)}))},updateBoxShadow:function(o){var r=t.clientId,c=e("core/block-editor").updateBlockAttributes;(0,n.select("core/block-editor").getBlockOrder)(r).forEach((function(e){c(e,{shadow:o})}))}}}))((function(e){var t,n=e.attributes,r=e.setAttributes,c=e.className,a=e.updatePadding,d=e.updateBoxShadow,m=n.colPc,p=n.colTablet,f=n.colMobile,y=n.verticalAlignment,j=n.horizonAlignment,k=n.reverse,x=n.removeMargin,P=i()("ystdb-columns",(t={},l()(t,"has-".concat(f,"-columns"),f),l()(t,"has-".concat(p,"-columns--tablet"),p),l()(t,"has-".concat(m,"-columns--pc"),m),l()(t,"is-vertically-aligned-".concat(y),y),l()(t,"is-horizontally-aligned-".concat(j),j),l()(t,"is-no-margin",x),t)),B=Object(_.useBlockProps)({className:i()(c,"ystdb-columns-wrap")}),C=["top","center","bottom","last"],M=["left","center","right","between"],T=O[y],A=O.top,z=h[j],S=h.left;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(_.BlockControls,null,Object(o.createElement)(b.ToolbarGroup,null,Object(o.createElement)(b.ToolbarItem,null,(function(e){return Object(o.createElement)(b.DropdownMenu,{toggleProps:e,isCollapsed:!0,icon:T?T.icon:A.icon,label:Object(u._x)("Change vertical alignment","Block vertical alignment setting label"),controls:C.map((function(e){return E(E({},O[e]),{},{isActive:y===e,onClick:function(){return r({verticalAlignment:y===e?void 0:e})}})}))})}))),Object(o.createElement)(b.ToolbarGroup,null,Object(o.createElement)(b.ToolbarItem,null,(function(e){return Object(o.createElement)(b.DropdownMenu,{toggleProps:e,isCollapsed:!0,icon:z?z.icon:S.icon,label:Object(u.__)("横位置","ystandard-blocks"),controls:M.map((function(e){return E(E({},h[e]),{},{isActive:j===e,onClick:function(){return r({horizonAlignment:j===e?void 0:e})}})}))})})))),Object(o.createElement)(_.InspectorControls,null,Object(o.createElement)(b.PanelBody,{title:Object(u.__)("カラム設定","ystandard-blocks")},Object(o.createElement)(b.BaseControl,{id:"column-count",label:Object(u.__)("カラム数","ystandard-blocks")},Object(o.createElement)(b.RangeControl,{label:Object(u.__)("デスクトップ","ystandard-blocks"),beforeIcon:"desktop",value:m,onChange:function(e){r({colPc:Object(s.a)(e,1,6,3)})},min:1,max:6}),Object(o.createElement)(b.RangeControl,{label:Object(u.__)("タブレット","ystandard-blocks"),beforeIcon:"tablet",value:p,onChange:function(e){r({colTablet:Object(s.a)(e,1,6,3)})},min:1,max:6}),Object(o.createElement)(b.RangeControl,{label:Object(u.__)("モバイル","ystandard-blocks"),beforeIcon:"smartphone",value:f,onChange:function(e){r({colMobile:Object(s.a)(e,1,6,1)})},min:1,max:6})),Object(o.createElement)(b.BaseControl,{id:"remove-margin",label:Object(u.__)("カラム間の余白を削除","ystandard-blocks")},Object(o.createElement)(b.ToggleControl,{label:Object(u.__)("余白なし","ystandard-blocks"),checked:x,onChange:function(){r({removeMargin:!x})}})),Object(o.createElement)(b.BaseControl,{id:"column-reverse",label:Object(u.__)("表示順序を逆順にする","ystandard-blocks")},Object(o.createElement)("div",{className:"ystdb-inspector-controls__dscr margin-bottom"},"※行内での表示が逆順になります。1行で複数列のカラムを表示するときに便利な設定です。",Object(o.createElement)("br",null),"※公開ページのみ逆順で表示され、編集画面では追加した順で表示されます。"),Object(o.createElement)(b.ToggleControl,{label:Object(u.__)("逆順にする","ystandard-blocks"),checked:k,onChange:function(){r({reverse:!k})}}))),Object(o.createElement)(b.PanelBody,{title:Object(u.__)("デザイン 一括設定","ystandard-blocks")},Object(o.createElement)(b.BaseControl,{id:"padding",label:Object(u.__)("余白","ystandard-blocks")},Object(o.createElement)("div",{className:"ystdb-btn-selector components-base-control"},Object(o.createElement)("div",{className:"ystdb-inspector-controls__horizon-buttons"},w.b.map((function(e){return Object(o.createElement)(b.Button,{key:e.value,isSecondary:!0,onClick:function(){a({paddingType:e.value})}},Object(o.createElement)("span",null,e.label))}))))),Object(o.createElement)(b.BaseControl,{id:"shadow",label:Object(u.__)("影","ystandard-blocks")},Object(o.createElement)("div",{className:"ystdb-inspector-controls__horizon-buttons"},Object(o.createElement)(b.Button,{key:"shadow-on",isSecondary:!0,onClick:function(){d(!0)}},Object(u.__)("ON","ystandard-blocks")),Object(o.createElement)(b.Button,{key:"shadow-off",isSecondary:!0,onClick:function(){d(!1)}},Object(u.__)("OFF","ystandard-blocks")))))),Object(o.createElement)("div",B,Object(o.createElement)("div",{className:P},Object(o.createElement)(_.InnerBlocks,{allowedBlocks:g,template:v,templateLock:!1}))))})),P=n(3),B=n.n(P),C=n(7),M=n.n(C);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var z=Object(P.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,c=void 0===r?24:r,l=A(e,["color","size"]);return B.a.createElement("svg",T({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),B.a.createElement("rect",{x:"3",y:"3",width:"7",height:"7"}),B.a.createElement("rect",{x:"14",y:"3",width:"7",height:"7"}),B.a.createElement("rect",{x:"14",y:"14",width:"7",height:"7"}),B.a.createElement("rect",{x:"3",y:"14",width:"7",height:"7"}))}));z.propTypes={color:M.a.string,size:M.a.oneOfType([M.a.string,M.a.number])},z.displayName="Grid";var S=z,I=n(13),N=n(19),V=[{attributes:{colPc:{type:"number",default:3},colTablet:{type:"number",default:3},colMobile:{type:"number",default:1},verticalAlignment:{type:"string",default:void 0},horizonAlignment:{type:"string",default:void 0},reverse:{type:"bool",default:!1},removeMargin:{type:"bool",default:!1}},supports:{align:["wide","full"],className:!1,lightBlockWrapper:!0},save:function(e){var t,n=e.attributes,r=n.colPc,c=n.colTablet,a=n.colMobile,s=n.verticalAlignment,u=n.horizonAlignment,b=n.reverse,d=n.removeMargin,m=i()("ystdb-columns",(t={},l()(t,"has-".concat(a,"-columns"),a),l()(t,"has-".concat(c,"-columns--tablet"),c),l()(t,"has-".concat(r,"-columns--pc"),r),l()(t,"is-vertically-aligned-".concat(s),s),l()(t,"is-horizontally-aligned-".concat(u),u),l()(t,"is-reverse",b),l()(t,"is-no-margin",d),t));return Object(o.createElement)("div",{className:"ystdb-columns-wrap"},Object(o.createElement)("div",{className:m},Object(o.createElement)(_.InnerBlocks.Content,null)))}}],D=n.n(N)()(V);Object(I.registerBlockType)("ystdb/columns",{apiVersion:2,title:Object(u.__)("カスタムカラム","ystandard-blocks"),description:Object(u.__)("yStandard Blocks カラムブロック","ystandard-blocks"),icon:Object(o.createElement)(S,{stroke:r.a.color.iconForeground,style:{fill:"none"}}),keywords:[Object(u.__)("column"),Object(u.__)("カラム"),"column","col"],category:r.a.category.common,attributes:y,supports:{align:["wide","full"],className:!1,lightBlockWrapper:!0},edit:x,save:function(e){var t,n=e.attributes,r=n.colPc,c=n.colTablet,a=n.colMobile,s=n.verticalAlignment,u=n.horizonAlignment,b=n.reverse,d=n.removeMargin,m=i()("ystdb-columns",(t={},l()(t,"has-".concat(a,"-columns"),a),l()(t,"has-".concat(c,"-columns--tablet"),c),l()(t,"has-".concat(r,"-columns--pc"),r),l()(t,"is-vertically-aligned-".concat(s),s),l()(t,"is-horizontally-aligned-".concat(u),u),l()(t,"is-reverse",b),l()(t,"is-no-margin",d),t)),p=_.useBlockProps.save({className:"ystdb-columns-wrap"});return Object(o.createElement)("div",p,Object(o.createElement)("div",{className:m},Object(o.createElement)(_.InnerBlocks.Content,null)))},deprecated:D})},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(1),r={category:{common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},color:{iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:Object(o.__)("小")},{value:"",label:Object(o.__)("中")},{value:"is-large",label:Object(o.__)("大")}],animationTypes:[{label:Object(o.__)("なし","ystandard-blocks"),value:"none"},{label:Object(o.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"is-small",label:Object(o.__)("小")},{value:"",label:Object(o.__)("中")},{value:"is-large",label:Object(o.__)("大")}]}}}});