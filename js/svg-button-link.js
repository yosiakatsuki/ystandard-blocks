!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=55)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var c=typeof o;if("string"===c||"number"===c)e.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&e.push(a)}else if("object"===c)for(var i in o)n.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},,function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(1),r={category:{common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},color:{iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:Object(o.__)("小")},{value:"",label:Object(o.__)("中")},{value:"is-large",label:Object(o.__)("大")}],animationTypes:[{label:Object(o.__)("なし","ystandard-blocks"),value:"none"},{label:Object(o.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"is-small",label:Object(o.__)("小")},{value:"",label:Object(o.__)("中")},{value:"is-large",label:Object(o.__)("大")}]}}},function(e,t){!function(){e.exports=this.React}()},function(e,t,n){e.exports=n(22)()},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t,n){"use strict";var o=n(14),r=n.n(o),c=n(15),a=n.n(c),i=n(16),l=n.n(i),s=n(17),u=n.n(s),b=n(10),f=n.n(b),d=n(0),p=n(5),m=n.n(p),y=n(19);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=f()(e);if(t){var r=f()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return u()(this,n)}}var j=function(e){l()(n,e);var t=O(n);function n(){return r()(this,n),t.apply(this,arguments)}return a()(n,[{key:"render",value:function(){var e=this.props.name;return e?Object(d.createElement)("span",{className:m()("ys-icon",{"sns-icon":-1!==e.indexOf("sns-")}),dangerouslySetInnerHTML:{__html:Object(y.a)(e)}}):""}}]),n}(d.Component);t.a=j},function(e,t){!function(){e.exports=this.wp.compose}()},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},function(e,t,n){var o=n(28);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},function(e,t,n){var o=n(29),r=n(30);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},,function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));n(5),n(0);function o(){return window.ystdbIconList}function r(e){var t=function(e){if(!e)return e;var t=[{old:"sns-Twitter",new:"sns-twitter"},{old:"sns-Facebook",new:"sns-facebook"},{old:"sns-Hatena Bookmark",new:"sns-hatenabookmark"},{old:"sns-Pocket",new:"sns-pocket"},{old:"sns-Line",new:"sns-line"},{old:"sns-Feedly",new:"sns-feedly"},{old:"sns-RSS",new:"sns-rss"},{old:"sns-WordPress",new:"sns-wordpress"},{old:"sns-Pinterest",new:"sns-pinterest"},{old:"sns-Instagram",new:"sns-instagram"},{old:"sns-linkedIn",new:"sns-linkedin"},{old:"sns-YouTube",new:"sns-youtube"},{old:"sns-Twitch",new:"sns-twitch"},{old:"sns-Dribbble",new:"sns-dribbble"},{old:"sns-GitHub",new:"sns-github"},{old:"sns-Tumblr",new:"sns-tumblr"},{old:"sns-Amazon",new:"sns-amazon"}].find((function(t){return t.old===e}));if(!t)return e;return t.new}(e),n=o().find((function(e){return e.name===t}));if(n&&n.hasOwnProperty("icon"))return n.icon}},,,function(e,t,n){"use strict";var o=n(23);function r(){}function c(){}c.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,c,a){if(a!==o){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,,function(e,t,n){"use strict";var o=n(3),r=n.n(o),c=n(14),a=n.n(c),i=n(15),l=n.n(i),s=n(16),u=n.n(s),b=n(17),f=n.n(b),d=n(10),p=n.n(d),m=n(0),y=n(5),O=n.n(y),j=n(13),v=n(2),_=n(19),g=n(12),h=n(1);function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=p()(e);if(t){var r=p()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f()(this,n)}}var E=function(e){u()(n,e);var t=k(n);function n(){return a()(this,n),t.apply(this,arguments)}return l()(n,[{key:"render",value:function(){var e=this.props,t=e.selectedIcon,n=e.onChange,o=e.isOpen,r=e.previewIcon,c=e.setState,a=Object(_.b)(),i=!1!==r||r;return Object(m.createElement)("div",{className:"ys-icon-picker"},Object(m.createElement)("div",{className:"ys-icon-picker__selected"},i&&Object(m.createElement)("div",{className:"ys-icon-picker__preview"},!!t&&Object(m.createElement)(g.a,{name:t})),Object(m.createElement)(v.Button,{className:O()({"is-open":o}),isSecondary:!0,onClick:function(){c({isOpen:!o})}},Object(m.createElement)("span",null,Object(h.__)("アイコン選択","ystandard-blocks"))),Object(m.createElement)(v.Button,{className:"ys-icon-picker__remove",disabled:!t,isSmall:!0,isSecondary:!0,onClick:function(){n(""),c({isOpen:!1})}},Object(h.__)("リセット","ystandard-blocks"))),Object(m.createElement)("div",{className:O()("ys-icon-picker__list",{"is-open":o})},Object(m.createElement)("div",{className:"ys-icon-picker__list-container"},a.map((function(e){return Object(m.createElement)(v.Button,{className:O()("ys-icon-picker__icon",{"is-selected":t===e.name}),onClick:function(){t===e.name?(n(""),c({isOpen:!1})):n(e.name)}},Object(m.createElement)(g.a,{name:e.name}))})))))}}]),n}(m.Component),C=Object(j.compose)([Object(j.withState)({isOpen:!1})])(E);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=p()(e);if(t){var r=p()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f()(this,n)}}var x=function(e){u()(n,e);var t=w(n);function n(){return a()(this,n),t.apply(this,arguments)}return l()(n,[{key:"render",value:function(){var e,t=this.props,n=t.iconControlTitle,o=t.iconPosition,c=t.onChangePosition,a=t.selectedIcon,i=t.onClickIcon,l=t.customInfo,s=t.customInfoStyle,u=t.previewIcon,b=t.align,f=t.isFloat,d=void 0===n?Object(h.__)("表示アイコン","ystandard-blocks"):n;return Object(m.createElement)("div",{className:O()("ystdb-icon-select",(e={},r()(e,"align--".concat(b),b),r()(e,"is-float",f),e))},l&&Object(m.createElement)("div",{style:s},l),!!c&&Object(m.createElement)(v.BaseControl,null,Object(m.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(h.__)("アイコン表示位置","ystandard-blocks")),Object(m.createElement)("div",{className:"ystdb-icon-select__position"},Object(m.createElement)(v.RadioControl,{selected:o,options:[{label:Object(h.__)("左","ystandard-blocks"),value:"left"},{label:Object(h.__)("右","ystandard-blocks"),value:"right"}],onChange:c}))),Object(m.createElement)(v.BaseControl,null,Object(m.createElement)("div",{className:"ystdb-inspector-controls__label"},d),Object(m.createElement)("div",{className:"ystdb-icon-select__picker"},Object(m.createElement)(C,{selectedIcon:a,previewIcon:u,onChange:function(e){i(e)}}))))}}]),n}(m.Component);t.a=x},,function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},,,,,,,,,,function(e,t){!function(){e.exports=this.wp.serverSideRender}()},,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(7),c=n(26),a=n(19),i=n(4),l=n(40),s=n.n(l),u=n(2),b=n(13),f=n(1),d=Object(b.compose)([Object(i.withColors)("backgroundColor",{textColor:"color"}),Object(b.withState)({isPreview:!1,styles:""}),Object(i.withFontSizes)("fontSize")])((function(e){var t=e.backgroundColor,n=e.textColor,l=e.setBackgroundColor,b=e.setTextColor,d=e.attributes,p=e.setAttributes,m=e.setState,y=e.isPreview,O=e.fontSize,j=e.setFontSize,v=d.content,_=d.borderRadius,g=d.iconLeft,h=d.iconSizeLeft,k=d.iconRight,E=d.iconSizeRight,C=d.align,w=d.paddingType,x=d.buttonType,S=d.maxWidth,T=d.maxUnit,R=d.animationType,P=d.animationInterval,B="px"===T?1200:100,z="%"===T&&100<S?100:S,I=function(e){return"fa-xs"===e?"is-small":"fa-2x"===e?"is-large":e};return Object(o.createElement)("div",{className:"wp-block-html"},Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i.BlockControls,null,Object(o.createElement)(i.AlignmentToolbar,{value:C,onChange:function(e){p({align:e})}}),Object(o.createElement)(u.ToolbarGroup,null,Object(o.createElement)(u.ToolbarButton,{className:"components-tab-button",isPressed:!y,onClick:function(){m({isPreview:!1})}},Object(o.createElement)("span",null,"HTML")),Object(o.createElement)(u.ToolbarButton,{className:"components-tab-button",isPressed:y,onClick:function(){m({isPreview:!0})}},Object(o.createElement)("span",null,Object(f.__)("Preview"))))),Object(o.createElement)(u.Disabled.Consumer,null,(function(){return y?Object(o.createElement)("div",{className:"ystdb-btn-link__preview"},Object(o.createElement)(s.a,{block:"ystdb/svg-button-link",attributes:d})):Object(o.createElement)(i.PlainText,{className:"ystdb-btn-link__input",value:v,onChange:function(e){return p({content:e})},placeholder:"HTMLを入力...","aria-label":Object(f.__)("HTML")})})),Object(o.createElement)(i.InspectorControls,null,Object(o.createElement)(i.PanelColorSettings,{title:Object(f.__)("Color settings"),initialOpen:!0,colorSettings:[{value:t.color,onChange:function(e){p({customGradient:void 0}),l(e)},label:Object(f.__)("Background Color")},{value:n.color,onChange:function(e){b(e)},label:Object(f.__)("Text Color")}]}),Object(o.createElement)(u.PanelBody,{title:Object(f.__)("枠線設定","ystandard-blocks")},Object(o.createElement)(u.RangeControl,{value:_,label:Object(f.__)("枠線の角丸","ystandard-blocks"),min:r.a.button.borderRadiusMin,max:r.a.button.borderRadiusMax,initialPosition:r.a.button.borderRadiusInitialPosition,allowReset:!0,onChange:function(e){p({borderRadius:e})}})),Object(o.createElement)(u.PanelBody,{title:Object(f.__)("アイコン設定","ystandard-blocks")},Object(o.createElement)(c.a,{iconControlTitle:Object(f.__)("左アイコン","ystandard-blocks"),selectedIcon:g,onClickIcon:function(e){p({iconLeft:e}),p({iconLeftSVG:Object(a.a)(e)})}}),Object(o.createElement)(u.BaseControl,null,Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(f._x)("左アイコンサイズ","ystandard-blocks")),Object(o.createElement)("div",{className:"ystdb-btn-selector components-base-control"},r.a.icon.size.map((function(e){return Object(o.createElement)(u.Button,{key:e.value,isSecondary:I(h)!==e.value,isPrimary:I(h)===e.value,onClick:function(){p({iconSizeLeft:e.value})}},Object(o.createElement)("span",null,e.label))})))),Object(o.createElement)(c.a,{iconControlTitle:Object(f.__)("右アイコン","ystandard-blocks"),selectedIcon:k,onClickIcon:function(e){p({iconRight:e}),p({iconRightSVG:Object(a.a)(e)})}}),Object(o.createElement)(u.BaseControl,null,Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(f._x)("右アイコンサイズ","ystandard-blocks")),Object(o.createElement)("div",{className:"ystdb-btn-selector components-base-control"},r.a.icon.size.map((function(e){return Object(o.createElement)(u.Button,{key:e.value,isSecondary:I(E)!==e.value,isPrimary:I(E)===e.value,onClick:function(){p({iconSizeRight:e.value})}},Object(o.createElement)("span",null,e.label))}))))),Object(o.createElement)(u.PanelBody,{title:Object(f.__)("文字設定","ystandard-blocks")},Object(o.createElement)(u.BaseControl,null,Object(o.createElement)(i.FontSizePicker,{label:Object(f.__)("文字サイズ","ystandard-blocks"),value:O.size,onChange:function(e){j(e)}}))),Object(o.createElement)(u.PanelBody,{title:Object(f.__)("余白設定","ystandard-blocks")},Object(o.createElement)(u.BaseControl,null,Object(o.createElement)("span",{className:"ystdb-info__small"},"ボタン内側の余白を設定できます。"),Object(o.createElement)("div",{className:"ystdb-btn-selector components-base-control"},r.a.button.paddingTypes.map((function(e){return Object(o.createElement)(u.Button,{key:e.value,isSecondary:w!==e.value,isPrimary:w===e.value,onClick:function(){p({paddingType:e.value})}},Object(o.createElement)("span",null,e.label))}))))),Object(o.createElement)(u.PanelBody,{title:Object(f.__)("ブロックボタン設定","ystandard-blocks")},Object(o.createElement)(u.BaseControl,null,Object(o.createElement)(u.ToggleControl,{label:Object(f.__)("ボタンをブロック型にする","ystandard-blocks"),onChange:function(){p({buttonType:"is-block"===x?"":"is-block"})},checked:"is-block"===x}),Object(o.createElement)(u.RangeControl,{value:z,label:Object(f.__)("ボタン最大幅","ystandard-blocks"),min:0,max:B,initialPosition:100,allowReset:!0,onChange:function(e){p({maxWidth:e})}}),Object(o.createElement)(u.RadioControl,{label:Object(f.__)("最大幅単位","ystandard-blocks"),selected:T,options:[{label:Object(f.__)("%","ystandard-blocks"),value:"%"},{label:Object(f.__)("px","ystandard-blocks"),value:"px"}],onChange:function(e){p({maxUnit:e})}}))),Object(o.createElement)(u.PanelBody,{title:Object(f.__)("アニメーション設定","ystandard-blocks")},Object(o.createElement)(u.BaseControl,null,Object(o.createElement)(u.RadioControl,{label:Object(f.__)("アニメーション種類","ystandard-blocks"),selected:R,options:r.a.button.animationTypes,onChange:function(e){p({animationType:e})}}),Object(o.createElement)(u.RangeControl,{value:P,label:Object(f.__)("アニメーションの速さ(秒)","ystandard-blocks"),min:1,max:10,initialPosition:5,allowReset:!0,onChange:function(e){p({animationInterval:e})}}))))))})),p=n(8),m=n.n(p),y=n(9),O=n.n(y);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=Object(p.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,c=void 0===r?24:r,a=v(e,["color","size"]);return m.a.createElement("svg",j({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),m.a.createElement("polyline",{points:"16 18 22 12 16 6"}),m.a.createElement("polyline",{points:"8 6 2 12 8 18"}))}));_.propTypes={color:O.a.string,size:O.a.oneOfType([O.a.string,O.a.number])},_.displayName="Code";var g=_,h=n(11),k={from:[{type:"block",blocks:["ystdb/btn-link"],transform:function(e){return Object(h.createBlock)("ystdb/svg-button-link",{className:e.className,content:e.content,borderRadius:e.borderRadius,iconSizeLeft:e.iconSizeLeft,iconSizeRight:e.iconSizeRight,align:e.align,backgroundColor:e.backgroundColor,customBackgroundColor:e.customBackgroundColor,textColor:e.textColor,customTextColor:e.customTextColor,fontSize:e.fontSize,customFontSize:e.customFontSize,paddingType:e.paddingType,buttonType:e.buttonType,maxWidth:e.maxWidth,maxUnit:e.maxUnit,animationType:e.animationType,animationInterval:e.animationInterval})}}]};Object(h.registerBlockType)("ystdb/svg-button-link",{title:Object(f.__)("ボタン型リンク","ystandard-blocks"),description:Object(f.__)("入力したリンク(a)タグをボタン形式で表示するブロック","ystandard-blocks"),icon:Object(o.createElement)(g,{stroke:r.a.color.iconForeground,style:{fill:"none"}}),keywords:[Object(f.__)("link"),Object(f.__)("button"),"button"],category:r.a.category.common,attributes:{content:{type:"string"},borderRadius:{type:"number",default:4},iconLeft:{type:"string"},iconLeftSVG:{type:"string"},iconSizeLeft:{type:"string",default:""},iconRight:{type:"string"},iconRightSVG:{type:"string"},iconSizeRight:{type:"string",default:""},align:{type:"string"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"},paddingType:{type:"string",default:""},buttonType:{type:"string"},maxWidth:{type:"number",default:100},maxUnit:{type:"string",default:"%"},animationType:{type:"string",default:"none"},animationInterval:{type:"number",default:5}},supports:{className:!1,html:!1},edit:d,save:function(){return null},styles:[{name:"fill",label:Object(f.__)("塗りつぶし"),isDefault:!0},{name:"outline",label:Object(f.__)("アウトライン")}],transforms:k,example:{}})}]);