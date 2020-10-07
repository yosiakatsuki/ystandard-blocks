!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=79)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.wp.blocks}()},14:function(e,t){!function(){e.exports=this.wp.compose}()},19:function(e,t,n){"use strict";var o=n(20);function r(){}function c(){}c.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,c,a){if(a!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:r};return n.PropTypes=n,n}},2:function(e,t){!function(){e.exports=this.wp.components}()},20:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},22:function(e,t){!function(){e.exports=this.wp.data}()},3:function(e,t){!function(){e.exports=this.React}()},5:function(e,t){!function(){e.exports=this.wp.blockEditor}()},6:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var c=typeof o;if("string"===c||"number"===c)e.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&e.push(a)}else if("object"===c)for(var l in o)n.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},7:function(e,t,n){e.exports=n(19)()},79:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(9),c=n(6),a=n.n(c),l=n(5),i=n(2),s=n(1),u=n(22),b=n(14),d=Object(b.compose)([Object(u.withSelect)((function(e,t){var n=t.clientId,o=(0,e("core/block-editor").getBlock)(n);return{hasInnerBlocks:!(!o||!o.innerBlocks.length)}}))])((function(e){var t=e.attributes,n=e.setAttributes,r=e.className,c=e.hasInnerBlocks,u=t.hideSp,b=t.hideMd,d=t.hideLg,p=t.hideAMP,f=t.onlyAMP,y=a()(r,"ystdb-conditional-group",{}),O=a()("wp-block-group__inner-container","ystdb-conditional-group__inner",{});return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(l.InspectorControls,null,Object(o.createElement)(i.PanelBody,{title:Object(s.__)("画面サイズ別非表示設定","ystandard-blocks"),initialOpen:!0},Object(o.createElement)("div",{className:"ystdb-info__label"},"各デバイスの画面サイズでブロックを非表示にできます。"),Object(o.createElement)("div",{style:{marginTop:"1em"}},Object(o.createElement)(i.ToggleControl,{label:Object(s.__)("スマートフォンサイズで非表示","ystandard-blocks"),checked:u,onChange:function(e){n({hideSp:e})}}),Object(o.createElement)(i.ToggleControl,{label:Object(s.__)("タブレットサイズで非表示","ystandard-blocks"),checked:b,onChange:function(e){n({hideMd:e})}}),Object(o.createElement)(i.ToggleControl,{label:Object(s.__)("PCサイズで非表示","ystandard-blocks"),checked:d,onChange:function(e){n({hideLg:e})}}))),Object(o.createElement)(i.PanelBody,{title:Object(s.__)("AMP 表示・非表示 設定","ystandard-blocks"),initialOpen:!0},Object(o.createElement)("div",{className:"ystdb-info__label"},"AMPページでの表示・非表示設定"),Object(o.createElement)("div",{style:{marginTop:"1em"}},Object(o.createElement)(i.ToggleControl,{label:Object(s.__)("AMPページで非表示","ystandard-blocks"),checked:p,onChange:function(e){n({hideAMP:e})}}),Object(o.createElement)(i.ToggleControl,{label:Object(s.__)("AMPページのみ表示","ystandard-blocks"),checked:f,onChange:function(e){n({onlyAMP:e})}})))),Object(o.createElement)("div",{className:y},Object(o.createElement)("div",{className:O},Object(o.createElement)(l.InnerBlocks,{renderAppender:c?void 0:function(){return Object(o.createElement)(l.InnerBlocks.ButtonBlockAppender,null)}}))))})),p=n(3),f=n.n(p),y=n(7),O=n.n(y);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h=Object(p.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,c=void 0===r?24:r,a=m(e,["color","size"]);return f.a.createElement("svg",g({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),f.a.createElement("path",{d:"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"}))}));h.propTypes={color:O.a.string,size:O.a.oneOfType([O.a.string,O.a.number])},h.displayName="Maximize";var _=h,j=n(10);Object(j.registerBlockType)("ystdb/conditional-group-block",{title:Object(s.__)("条件付きグループブロック","ystandard-blocks"),description:Object(s.__)("条件により表示・非表示を切り替えできるグループブロック","ystandard-blocks"),icon:Object(o.createElement)(_,{stroke:r.a.color.iconForeground,style:{fill:"none"}}),keywords:[Object(s.__)("cgb","ystandard-blocks"),Object(s.__)("条件付きグループブロック","ystandard-blocks"),Object(s.__)("conditional group block","ystandard-blocks"),Object(s.__)("グループブロック","ystandard-blocks"),"cgb","conditional group block"],category:r.a.category.common,attributes:{hideSp:{type:"boolean",default:!1},hideMd:{type:"boolean",default:!1},hideLg:{type:"boolean",default:!1},hideAMP:{type:"boolean",default:!1},onlyAMP:{type:"boolean",default:!1}},supports:{className:!1,html:!1,align:!1},edit:d,save:function(){return Object(o.createElement)(l.InnerBlocks.Content,null)}})},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(1),r={category:{common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},color:{iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:Object(o.__)("小")},{value:"",label:Object(o.__)("中")},{value:"is-large",label:Object(o.__)("大")}],animationTypes:[{label:Object(o.__)("なし","ystandard-blocks"),value:"none"},{label:Object(o.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"is-small",label:Object(o.__)("小")},{value:"",label:Object(o.__)("中")},{value:"is-large",label:Object(o.__)("大")}]}}}});