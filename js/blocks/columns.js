!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=38)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)){if(o.length){var c=l.apply(null,o);c&&e.push(c)}}else if("object"===a)if(o.toString===Object.prototype.toString)for(var r in o)n.call(o,r)&&o[r]&&e.push(r);else e.push(o.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(o=function(){return l}.apply(t,[]))||(e.exports=o)}()},function(e,t,n){"use strict";function o(e,t=0,n=null,o){if(!isFinite(e)||""===e||e<t){if(null===o&&(""===e||void 0===e))return;e=void 0!==o?o:t}return e=Number(e),null!==n&&e>n&&(e=n),e}n.d(t,"a",(function(){return o}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(1);const l={category:{common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},color:{iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:Object(o.__)("小","ystandard-blocks")},{value:"",label:Object(o.__)("中","ystandard-blocks")},{value:"is-large",label:Object(o.__)("大","ystandard-blocks")}],animationTypes:[{label:Object(o.__)("なし","ystandard-blocks"),value:"none"},{label:Object(o.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"is-small",label:Object(o.__)("小","ystandard-blocks")},{value:"",label:Object(o.__)("中","ystandard-blocks")},{value:"is-large",label:Object(o.__)("大","ystandard-blocks")}]},component:{defaultAvatar:{url:"https://www.gravatar.com/avatar/000000000000000000000000000000?s=128&r=g&d=mp"},fontWeight:[{value:"",label:Object(o._x)("指定無し","component-config","ystandard-blocks")},{value:"normal",label:Object(o._x)("通常(normal)","component-config","ystandard-blocks")},{value:"bold",label:Object(o._x)("太字(bold)","component-config","ystandard-blocks")},{value:"100",label:Object(o._x)("100","component-config","ystandard-blocks")},{value:"200",label:Object(o._x)("200","component-config","ystandard-blocks")},{value:"300",label:Object(o._x)("300","component-config","ystandard-blocks")},{value:"400",label:Object(o._x)("400","component-config","ystandard-blocks")},{value:"500",label:Object(o._x)("500","component-config","ystandard-blocks")},{value:"600",label:Object(o._x)("600","component-config","ystandard-blocks")},{value:"700",label:Object(o._x)("700","component-config","ystandard-blocks")},{value:"800",label:Object(o._x)("800","component-config","ystandard-blocks")},{value:"900",label:Object(o._x)("900","component-config","ystandard-blocks")}],fontUnit:[{value:"px",label:"px"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"%",label:"%"}],fontStyle:[{value:"",label:Object(o._x)("指定無し","component-config","ystandard-blocks")},{value:"italic",label:Object(o._x)("イタリック体","component-config","ystandard-blocks")}]}}},function(e,t){e.exports=window.React},function(e,t,n){e.exports=n(16)()},,function(e,t){e.exports=window.wp.blocks},,,,,function(e,t){e.exports=window.wp.data},function(e,t,n){"use strict";var o=n(17);function l(){}function a(){}a.resetWarningCache=l,e.exports=function(){function e(e,t,n,l,a,c){if(c!==o){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:l};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c}));var o=n(1);const l={backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},shadow:{type:"bool"},paddingType:{type:"string",default:""}},a={align:!1,className:!1},c=[{value:"",label:Object(o.__)("なし")},{value:"is-padding-small",label:Object(o.__)("小")},{value:"is-padding-large",label:Object(o.__)("大")}]},,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var o=n(0),l=n(6),a=n(4),c=n.n(a),r=n(5),s=n(1),i=n(2);const b=Object(o.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(o.createElement)(i.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(o.createElement)(i.Path,{d:"M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"})),d=Object(o.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(o.createElement)(i.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(o.createElement)(i.Path,{d:"M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"})),u=Object(o.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(o.createElement)(i.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(o.createElement)(i.Path,{d:"M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"})),m=Object(o.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(o.createElement)(i.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(o.createElement)(i.Path,{d:"M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v1h16v-1H4zM4 21v1h16v-1H4z"})),p=["ystdb/column"],y=[["ystdb/column",{}],["ystdb/column",{}],["ystdb/column",{}]],g={top:{icon:u,title:Object(s._x)("上揃え","ystandard-blocks")},center:{icon:d,title:Object(s._x)("中央揃え","ystandard-blocks")},bottom:{icon:b,title:Object(s._x)("下揃え","ystandard-blocks")},last:{icon:m,title:Object(s._x)("最後のブロックを下に揃える","ystandard-blocks")}},v={left:{icon:Object(o.createElement)(i.Dashicon,{icon:"align-left"}),title:Object(s.__)("左寄せ","ystandard-blocks")},center:{icon:Object(o.createElement)(i.Dashicon,{icon:"align-center"}),title:Object(s.__)("中央","ystandard-blocks")},right:{icon:Object(o.createElement)(i.Dashicon,{icon:"align-right"}),title:Object(s.__)("右寄せ","ystandard-blocks")},between:{icon:Object(o.createElement)(i.Dashicon,{icon:"align-wide"}),title:Object(s.__)("両端に揃える","ystandard-blocks")}};var O=n(15),f=n(3),h=n(23),j=Object(O.withDispatch)((e,t,n)=>({updatePadding(o){const{clientId:l}=t,{updateBlockAttributes:a}=e("core/block-editor"),{getBlockOrder:c}=n.select("core/block-editor");c(l).forEach(e=>{a(e,o)})},updateBoxShadow(o){const{clientId:l}=t,{updateBlockAttributes:a}=e("core/block-editor"),{getBlockOrder:c}=n.select("core/block-editor");c(l).forEach(e=>{a(e,{shadow:o})})}}))((function(e){const{attributes:t,setAttributes:n,className:l,updatePadding:a,updateBoxShadow:b}=e,{colPc:d,colTablet:u,colMobile:m,verticalAlignment:O,horizonAlignment:j,reverse:_,removeMargin:k}=t,w=c()("ystdb-columns",{[`has-${m}-columns`]:m,[`has-${u}-columns--tablet`]:u,[`has-${d}-columns--pc`]:d,["is-vertically-aligned-"+O]:O,["is-horizontally-aligned-"+j]:j,"is-no-margin":k}),E=Object(f.useBlockProps)({className:c()(l,"ystdb-columns-wrap")}),x=["top","center","bottom","last"],P=["left","center","right","between"],B=g[O],C=g.top,M=v[j],T=v.left;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(f.BlockControls,null,Object(o.createElement)(i.ToolbarGroup,null,Object(o.createElement)(i.ToolbarItem,null,e=>Object(o.createElement)(i.DropdownMenu,{toggleProps:e,isCollapsed:!0,icon:B?B.icon:C.icon,label:Object(s._x)("Change vertical alignment","Block vertical alignment setting label"),controls:x.map(e=>({...g[e],isActive:O===e,onClick:()=>n({verticalAlignment:O===e?void 0:e})}))}))),Object(o.createElement)(i.ToolbarGroup,null,Object(o.createElement)(i.ToolbarItem,null,e=>Object(o.createElement)(i.DropdownMenu,{toggleProps:e,isCollapsed:!0,icon:M?M.icon:T.icon,label:Object(s.__)("横位置","ystandard-blocks"),controls:P.map(e=>({...v[e],isActive:j===e,onClick:()=>n({horizonAlignment:j===e?void 0:e})}))})))),Object(o.createElement)(f.InspectorControls,null,Object(o.createElement)(i.PanelBody,{title:Object(s.__)("カラム設定","ystandard-blocks")},Object(o.createElement)(i.BaseControl,{id:"column-count",label:Object(s.__)("カラム数","ystandard-blocks")},Object(o.createElement)(i.RangeControl,{label:Object(s.__)("デスクトップ","ystandard-blocks"),beforeIcon:"desktop",value:d,onChange:e=>{n({colPc:Object(r.a)(e,1,6,3)})},min:1,max:6}),Object(o.createElement)(i.RangeControl,{label:Object(s.__)("タブレット","ystandard-blocks"),beforeIcon:"tablet",value:u,onChange:e=>{n({colTablet:Object(r.a)(e,1,6,3)})},min:1,max:6}),Object(o.createElement)(i.RangeControl,{label:Object(s.__)("モバイル","ystandard-blocks"),beforeIcon:"smartphone",value:m,onChange:e=>{n({colMobile:Object(r.a)(e,1,6,1)})},min:1,max:6})),Object(o.createElement)(i.BaseControl,{id:"remove-margin",label:Object(s.__)("カラム間の余白を削除","ystandard-blocks")},Object(o.createElement)(i.ToggleControl,{label:Object(s.__)("余白なし","ystandard-blocks"),checked:k,onChange:()=>{n({removeMargin:!k})}})),Object(o.createElement)(i.BaseControl,{id:"column-reverse",label:Object(s.__)("表示順序を逆順にする","ystandard-blocks")},Object(o.createElement)("div",{className:"ystdb-inspector-controls__dscr margin-bottom"},"※行内での表示が逆順になります。1行で複数列のカラムを表示するときに便利な設定です。",Object(o.createElement)("br",null),"※公開ページのみ逆順で表示され、編集画面では追加した順で表示されます。"),Object(o.createElement)(i.ToggleControl,{label:Object(s.__)("逆順にする","ystandard-blocks"),checked:_,onChange:()=>{n({reverse:!_})}}))),Object(o.createElement)(i.PanelBody,{title:Object(s.__)("デザイン 一括設定","ystandard-blocks")},Object(o.createElement)(i.BaseControl,{id:"padding",label:Object(s.__)("余白","ystandard-blocks")},Object(o.createElement)("div",{className:"ystdb-btn-selector components-base-control"},Object(o.createElement)("div",{className:"ystdb-inspector-controls__horizon-buttons"},h.b.map(e=>Object(o.createElement)(i.Button,{key:e.value,isSecondary:!0,onClick:()=>{a({paddingType:e.value})}},Object(o.createElement)("span",null,e.label)))))),Object(o.createElement)(i.BaseControl,{id:"shadow",label:Object(s.__)("影","ystandard-blocks")},Object(o.createElement)("div",{className:"ystdb-inspector-controls__horizon-buttons"},Object(o.createElement)(i.Button,{key:"shadow-on",isSecondary:!0,onClick:()=>{b(!0)}},Object(s.__)("ON","ystandard-blocks")),Object(o.createElement)(i.Button,{key:"shadow-off",isSecondary:!0,onClick:()=>{b(!1)}},Object(s.__)("OFF","ystandard-blocks")))))),Object(o.createElement)("div",E,Object(o.createElement)("div",{className:w},Object(o.createElement)(f.InnerBlocks,{allowedBlocks:p,template:y,templateLock:!1}))))})),_=n(7),k=n.n(_),w=n(8),E=n.n(w);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var P=Object(_.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,l=e.size,a=void 0===l?24:l,c=function(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return k.a.createElement("svg",x({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),k.a.createElement("rect",{x:"3",y:"3",width:"7",height:"7"}),k.a.createElement("rect",{x:"14",y:"3",width:"7",height:"7"}),k.a.createElement("rect",{x:"14",y:"14",width:"7",height:"7"}),k.a.createElement("rect",{x:"3",y:"14",width:"7",height:"7"}))}));P.propTypes={color:E.a.string,size:E.a.oneOfType([E.a.string,E.a.number])},P.displayName="Grid";var B=P,C=n(10);const M=[{attributes:{colPc:{type:"number",default:3},colTablet:{type:"number",default:3},colMobile:{type:"number",default:1},verticalAlignment:{type:"string",default:void 0},horizonAlignment:{type:"string",default:void 0},reverse:{type:"bool",default:!1},removeMargin:{type:"bool",default:!1}},supports:{align:["wide","full"],className:!1,lightBlockWrapper:!0},save({attributes:e}){const{colPc:t,colTablet:n,colMobile:l,verticalAlignment:a,horizonAlignment:r,reverse:s,removeMargin:i}=e,b=c()("ystdb-columns",{[`has-${l}-columns`]:l,[`has-${n}-columns--tablet`]:n,[`has-${t}-columns--pc`]:t,["is-vertically-aligned-"+a]:a,["is-horizontally-aligned-"+r]:r,"is-reverse":s,"is-no-margin":i});return Object(o.createElement)("div",{className:"ystdb-columns-wrap"},Object(o.createElement)("div",{className:b},Object(o.createElement)(f.InnerBlocks.Content,null)))}}];Object(C.registerBlockType)("ystdb/columns",{apiVersion:2,title:Object(s.__)("カスタムカラム","ystandard-blocks"),description:Object(s.__)("yStandard Blocks カラムブロック","ystandard-blocks"),icon:Object(o.createElement)(B,{stroke:l.a.color.iconForeground,style:{fill:"none"}}),keywords:[Object(s.__)("column"),Object(s.__)("カラム"),"column","col"],category:l.a.category.common,attributes:{colPc:{type:"number",default:3},colTablet:{type:"number",default:3},colMobile:{type:"number",default:1},verticalAlignment:{type:"string",default:void 0},horizonAlignment:{type:"string",default:void 0},reverse:{type:"bool",default:!1},removeMargin:{type:"bool",default:!1}},supports:{align:["wide","full"],className:!1,lightBlockWrapper:!0},edit:j,save:function({attributes:e}){const{colPc:t,colTablet:n,colMobile:l,verticalAlignment:a,horizonAlignment:r,reverse:s,removeMargin:i}=e,b=c()("ystdb-columns",{[`has-${l}-columns`]:l,[`has-${n}-columns--tablet`]:n,[`has-${t}-columns--pc`]:t,["is-vertically-aligned-"+a]:a,["is-horizontally-aligned-"+r]:r,"is-reverse":s,"is-no-margin":i}),d=f.useBlockProps.save({className:"ystdb-columns-wrap"});return Object(o.createElement)("div",d,Object(o.createElement)("div",{className:b},Object(o.createElement)(f.InnerBlocks.Content,null)))},deprecated:M,example:{}})}]);