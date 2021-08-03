!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=59)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},11:function(e,t){!function(){e.exports=this.wp.blocks}()},13:function(e,t){!function(){e.exports=this.wp.compose}()},2:function(e,t){!function(){e.exports=this.wp.components}()},22:function(e,t){!function(){e.exports=this.wp.data}()},23:function(e,t,n){"use strict";var r=n(24);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,c){if(c!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},24:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c}));var r=n(1),o={backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},shadow:{type:"bool"},paddingType:{type:"string",default:""}},a={align:!1,className:!1},c=[{value:"",label:Object(r.__)("なし")},{value:"is-padding-small",label:Object(r.__)("小")},{value:"is-padding-large",label:Object(r.__)("大")}]},4:function(e,t){!function(){e.exports=this.wp.blockEditor}()},5:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&e.push(c)}else if("object"===a)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},59:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(7),a=n(3),c=n.n(a),l=n(5),s=n.n(l),i=n(4),u=n(2),b=n(22),d=n(13),p=n(1),f=n(36);var y=Object(d.compose)([Object(i.withColors)("backgroundColor"),Object(b.withSelect)((function(e,t){var n=t.clientId;return{hasChildBlocks:(0,e("core/block-editor").getBlockOrder)(n).length>0}}))])((function(e){var t,n=e.attributes,o=e.setAttributes,a=e.setBackgroundColor,l=e.backgroundColor,b=e.hasChildBlocks,d=e.className,y=n.shadow,m=n.paddingType,O=s()(d,"ystdb-column",(t={"has-background":l.color},c()(t,l.class,l.class),c()(t,"has-shadow",y),c()(t,m,m),t));return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(i.InspectorControls,null,Object(r.createElement)(i.PanelColorSettings,{title:Object(p.__)("色設定","ystandard-blocks"),colorSettings:[{value:l.color,onChange:function(e){a(e)},label:Object(p.__)("背景色","ystandard-blocks")}]}),Object(r.createElement)(u.PanelBody,{title:Object(p.__)("デザイン","ystandard-blocks")},Object(r.createElement)(u.BaseControl,{id:"padding",label:Object(p.__)("余白","ystandard-blocks")},Object(r.createElement)("div",{className:"ystdb-inspector-controls__horizon-buttons"},f.b.map((function(e){return Object(r.createElement)(u.Button,{key:e.value,isSecondary:m!==e.value,isPrimary:m===e.value,onClick:function(){o({paddingType:e.value})}},Object(r.createElement)("span",null,e.label))})))),Object(r.createElement)(u.BaseControl,{id:"shadow",label:Object(p.__)("影","ystandard-blocks")},Object(r.createElement)(u.ToggleControl,{label:Object(p.__)("影をつける","ystandard-blocks"),checked:y,onChange:function(){o({shadow:!y})}})))),Object(r.createElement)("div",{className:O},Object(r.createElement)("div",{className:"ystdb-column-block-container"},Object(r.createElement)(i.InnerBlocks,{templateLock:!1,renderAppender:b?void 0:function(){return Object(r.createElement)(i.InnerBlocks.ButtonBlockAppender,null)}}))))}));var m=n(8),O=n.n(m),v=n(9),g=n.n(v);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var _=Object(m.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,a=void 0===o?24:o,c=j(e,["color","size"]);return O.a.createElement("svg",h({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),O.a.createElement("path",{d:"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"}))}));_.propTypes={color:g.a.string,size:g.a.oneOfType([g.a.string,g.a.number])},_.displayName="Columns";var k=_,w=n(11);Object(w.registerBlockType)("ystdb/column",{title:Object(p.__)("カラム","ystandard-blocks"),description:Object(p.__)("yStandard Blocks カラムブロック","ystandard-blocks"),icon:Object(r.createElement)(k,{stroke:o.a.color.iconForeground,style:{fill:"none"}}),category:o.a.category.common,attributes:f.a,supports:f.c,parent:["ystdb/columns"],edit:y,save:function(e){var t,n=e.attributes,o=n.shadow,a=n.backgroundColor,l=n.customBackgroundColor,u=n.paddingType,b=Object(i.getColorClassName)("background-color",a),d=s()("ystdb-column",(t={"has-background":b||l},c()(t,b,b),c()(t,"has-shadow",o),c()(t,u,u),t)),p={backgroundColor:l||void 0};return Object(r.createElement)("div",{className:d,style:p},Object(r.createElement)("div",{className:"ystdb-column-block-container"},Object(r.createElement)(i.InnerBlocks.Content,null)))}})},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1),o={category:{common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},color:{iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:Object(r.__)("小")},{value:"",label:Object(r.__)("中")},{value:"is-large",label:Object(r.__)("大")}],animationTypes:[{label:Object(r.__)("なし","ystandard-blocks"),value:"none"},{label:Object(r.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"is-small",label:Object(r.__)("小")},{value:"",label:Object(r.__)("中")},{value:"is-large",label:Object(r.__)("大")}]}}},8:function(e,t){!function(){e.exports=this.React}()},9:function(e,t,n){e.exports=n(23)()}});