!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=36)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var l=typeof o;if("string"===l||"number"===l)e.push(o);else if(Array.isArray(o)){if(o.length){var c=a.apply(null,o);c&&e.push(c)}}else if("object"===l)if(o.toString===Object.prototype.toString)for(var r in o)n.call(o,r)&&o[r]&&e.push(r);else e.push(o.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o)}()},,function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(1);const a={category:{common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},color:{iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:Object(o.__)("小","ystandard-blocks")},{value:"",label:Object(o.__)("中","ystandard-blocks")},{value:"is-large",label:Object(o.__)("大","ystandard-blocks")}],animationTypes:[{label:Object(o.__)("なし","ystandard-blocks"),value:"none"},{label:Object(o.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"is-small",label:Object(o.__)("小","ystandard-blocks")},{value:"",label:Object(o.__)("中","ystandard-blocks")},{value:"is-large",label:Object(o.__)("大","ystandard-blocks")}]},component:{defaultAvatar:{url:"https://www.gravatar.com/avatar/000000000000000000000000000000?s=128&r=g&d=mp"},fontWeight:[{value:"",label:Object(o._x)("指定無し","component-config","ystandard-blocks")},{value:"normal",label:Object(o._x)("通常(normal)","component-config","ystandard-blocks")},{value:"bold",label:Object(o._x)("太字(bold)","component-config","ystandard-blocks")},{value:"100",label:Object(o._x)("100","component-config","ystandard-blocks")},{value:"200",label:Object(o._x)("200","component-config","ystandard-blocks")},{value:"300",label:Object(o._x)("300","component-config","ystandard-blocks")},{value:"400",label:Object(o._x)("400","component-config","ystandard-blocks")},{value:"500",label:Object(o._x)("500","component-config","ystandard-blocks")},{value:"600",label:Object(o._x)("600","component-config","ystandard-blocks")},{value:"700",label:Object(o._x)("700","component-config","ystandard-blocks")},{value:"800",label:Object(o._x)("800","component-config","ystandard-blocks")},{value:"900",label:Object(o._x)("900","component-config","ystandard-blocks")}],fontUnit:[{value:"px",label:"px"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"%",label:"%"}],fontStyle:[{value:"",label:Object(o._x)("指定無し","component-config","ystandard-blocks")},{value:"italic",label:Object(o._x)("イタリック体","component-config","ystandard-blocks")}],borderStyles:[{value:"solid",label:Object(o._x)("直線","component-config","ystandard-blocks")},{value:"dotted",label:Object(o._x)("点線","component-config","ystandard-blocks")},{value:"dashed",label:Object(o._x)("破線","component-config","ystandard-blocks")},{value:"double",label:Object(o._x)("二重線","component-config","ystandard-blocks")}]}}},function(e,t){e.exports=window.React},function(e,t,n){e.exports=n(16)()},function(e,t,n){"use strict";var o=n(0),a=n(4),l=n.n(a),c=n(14);class r extends o.Component{render(){const{name:e}=this.props;return e?Object(o.createElement)("span",{className:l()("ys-icon",{"sns-icon":-1!==e.indexOf("sns-")}),dangerouslySetInnerHTML:{__html:Object(c.a)(e)}}):""}}t.a=r},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.compose},,,function(e,t,n){"use strict";function o(){return window.ystdbIconList}function a(e){const t=function(e){if(!e)return e;const t=[{old:"sns-Twitter",new:"sns-twitter"},{old:"sns-Facebook",new:"sns-facebook"},{old:"sns-Hatena Bookmark",new:"sns-hatenabookmark"},{old:"sns-Pocket",new:"sns-pocket"},{old:"sns-Line",new:"sns-line"},{old:"sns-Feedly",new:"sns-feedly"},{old:"sns-RSS",new:"sns-rss"},{old:"sns-WordPress",new:"sns-wordpress"},{old:"sns-Pinterest",new:"sns-pinterest"},{old:"sns-Instagram",new:"sns-instagram"},{old:"sns-linkedIn",new:"sns-linkedin"},{old:"sns-YouTube",new:"sns-youtube"},{old:"sns-Twitch",new:"sns-twitch"},{old:"sns-Dribbble",new:"sns-dribbble"},{old:"sns-GitHub",new:"sns-github"},{old:"sns-Tumblr",new:"sns-tumblr"},{old:"sns-Amazon",new:"sns-amazon"}].find(t=>t.old===e);return t?t.new:e}(e),n=o().find(e=>e.name===t);if(n&&n.hasOwnProperty("icon"))return n.icon}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}))},,function(e,t,n){"use strict";var o=n(17);function a(){}function l(){}l.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,l,c){if(c!==o){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:a};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,function(e,t,n){"use strict";var o=n(0);t.a=({children:e})=>Object(o.createElement)("div",{className:"ystdb__horizon-buttons"},e)},,,function(e,t,n){"use strict";var o=n(0),a=n(4),l=n.n(a),c=n(11),r=n(2),s=n(14),i=n(9),b=n(1);class d extends o.Component{render(){const{selectedIcon:e,onChange:t,isOpen:n,previewIcon:a,setState:c}=this.props,d=Object(s.b)(),u=!1!==a||a;return Object(o.createElement)("div",{className:"ys-icon-picker"},Object(o.createElement)("div",{className:"ys-icon-picker__selected"},u&&Object(o.createElement)("div",{className:"ys-icon-picker__preview"},!!e&&Object(o.createElement)(i.a,{name:e})),Object(o.createElement)(r.Button,{className:l()({"is-open":n}),isSecondary:!0,onClick:()=>{c({isOpen:!n})},style:{minWidth:"110px",textAlign:"center",justifyContent:"center"}},n&&Object(o.createElement)("span",null,Object(b.__)("閉じる","ystandard-blocks")),!n&&Object(o.createElement)("span",null,Object(b.__)("アイコン選択","ystandard-blocks"))),Object(o.createElement)(r.Button,{className:"ys-icon-picker__remove",disabled:!e,isSmall:!0,isSecondary:!0,onClick:()=>{t(""),c({isOpen:!1})}},Object(b.__)("リセット","ystandard-blocks"))),Object(o.createElement)("div",{className:l()("ys-icon-picker__list",{"is-open":n})},Object(o.createElement)("div",{className:"ys-icon-picker__list-container"},d.map(n=>Object(o.createElement)(r.Button,{key:n.name,className:l()("ys-icon-picker__icon",{"is-selected":e===n.name}),onClick:()=>{e===n.name?(t(""),c({isOpen:!1})):t(n.name)}},Object(o.createElement)(i.a,{name:n.name}))))))}}var u=Object(c.compose)([Object(c.withState)({isOpen:!1})])(d);class p extends o.Component{render(){const{iconControlTitle:e,iconPosition:t,onChangePosition:n,selectedIcon:a,onClickIcon:c,customInfo:s,customInfoStyle:i,previewIcon:d,align:p,isFloat:m}=this.props,y=void 0===e?Object(b.__)("表示アイコン","ystandard-blocks"):e;return Object(o.createElement)("div",{className:l()("ystdb-icon-select",{["align--"+p]:p,"is-float":m})},s&&Object(o.createElement)("div",{style:i},s),!!n&&Object(o.createElement)(r.BaseControl,null,Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(b.__)("アイコン表示位置","ystandard-blocks")),Object(o.createElement)("div",{className:"ystdb-icon-select__position"},Object(o.createElement)(r.RadioControl,{selected:t,options:[{label:Object(b.__)("左","ystandard-blocks"),value:"left"},{label:Object(b.__)("右","ystandard-blocks"),value:"right"}],onChange:n}))),Object(o.createElement)(r.BaseControl,null,Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},y),Object(o.createElement)("div",{className:"ystdb-icon-select__picker"},Object(o.createElement)(u,{selectedIcon:a,previewIcon:d,onChange:e=>{c(e)}}))))}}t.a=p},,,,,,function(e,t){e.exports=window.wp.serverSideRender},,,,,,,,function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(6),l=n(22),c=n(14),r=n(3),s=n(28),i=n.n(s),b=n(2),d=n(11),u=n(1),p=n(19),m=Object(d.compose)([Object(r.withColors)("backgroundColor",{textColor:"color"}),Object(d.withState)({isPreview:!1,styles:""}),Object(r.withFontSizes)("fontSize")])(e=>{const{backgroundColor:t,textColor:n,setBackgroundColor:s,setTextColor:d,attributes:m,setAttributes:y,setState:O,isPreview:f,fontSize:g,setFontSize:j}=e,{content:_,borderRadius:v,iconLeft:k,iconSizeLeft:x,iconRight:h,iconSizeRight:w,align:C,paddingType:E,buttonType:S,maxWidth:T,maxUnit:P,animationType:R,animationInterval:z}=m,B="px"===P?1200:100,I="%"===P&&100<T?100:T,N=e=>"fa-xs"===e?"is-small":"fa-2x"===e?"is-large":e;return Object(o.createElement)("div",{className:"wp-block-html"},Object(o.createElement)(o.Fragment,null,Object(o.createElement)(r.BlockControls,null,Object(o.createElement)(r.AlignmentToolbar,{value:C,onChange:e=>{y({align:e})}}),Object(o.createElement)(b.ToolbarGroup,null,Object(o.createElement)(b.ToolbarButton,{className:"components-tab-button",isPressed:!f,onClick:()=>{O({isPreview:!1})}},Object(o.createElement)("span",null,"HTML")),Object(o.createElement)(b.ToolbarButton,{className:"components-tab-button",isPressed:f,onClick:()=>{O({isPreview:!0})}},Object(o.createElement)("span",null,Object(u.__)("Preview"))))),Object(o.createElement)(b.Disabled.Consumer,null,()=>f?Object(o.createElement)("div",{className:"ystdb-btn-link__preview"},Object(o.createElement)(i.a,{block:"ystdb/svg-button-link",attributes:m})):Object(o.createElement)(r.PlainText,{className:"ystdb-btn-link__input",value:_,onChange:e=>y({content:e}),placeholder:"HTMLを入力...","aria-label":Object(u.__)("HTML")})),Object(o.createElement)(r.InspectorControls,null,Object(o.createElement)(r.PanelColorSettings,{title:Object(u.__)("Color settings","ystandard-blocks"),initialOpen:!0,colorSettings:[{value:t.color,onChange:e=>{y({customGradient:void 0}),s(e)},label:Object(u.__)("Background Color","ystandard-blocks")},{value:n.color,onChange:e=>{d(e)},label:Object(u.__)("Text Color","ystandard-blocks")}]}),Object(o.createElement)(b.PanelBody,{title:Object(u.__)("枠線設定","ystandard-blocks")},Object(o.createElement)(b.RangeControl,{value:v,label:Object(u.__)("枠線の角丸","ystandard-blocks"),min:a.a.button.borderRadiusMin,max:a.a.button.borderRadiusMax,initialPosition:a.a.button.borderRadiusInitialPosition,allowReset:!0,onChange:e=>{y({borderRadius:e})}})),Object(o.createElement)(b.PanelBody,{title:Object(u.__)("アイコン設定","ystandard-blocks")},Object(o.createElement)(l.a,{iconControlTitle:Object(u.__)("左アイコン","ystandard-blocks"),selectedIcon:k,onClickIcon:e=>{y({iconLeft:e}),y({iconLeftSVG:Object(c.a)(e)})}}),Object(o.createElement)(b.BaseControl,null,Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(u._x)("左アイコンサイズ","ystandard-blocks")),Object(o.createElement)(p.a,null,a.a.icon.size.map(e=>Object(o.createElement)(b.Button,{key:e.value,isSecondary:N(x)!==e.value,isPrimary:N(x)===e.value,onClick:()=>{y({iconSizeLeft:e.value})}},Object(o.createElement)("span",null,e.label))))),Object(o.createElement)(l.a,{iconControlTitle:Object(u.__)("右アイコン","ystandard-blocks"),selectedIcon:h,onClickIcon:e=>{y({iconRight:e}),y({iconRightSVG:Object(c.a)(e)})}}),Object(o.createElement)(b.BaseControl,null,Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(u._x)("右アイコンサイズ","ystandard-blocks")),Object(o.createElement)(p.a,null,a.a.icon.size.map(e=>Object(o.createElement)(b.Button,{key:e.value,isSecondary:N(w)!==e.value,isPrimary:N(w)===e.value,onClick:()=>{y({iconSizeRight:e.value})}},Object(o.createElement)("span",null,e.label)))))),Object(o.createElement)(b.PanelBody,{title:Object(u.__)("文字設定","ystandard-blocks")},Object(o.createElement)(b.BaseControl,null,Object(o.createElement)(r.FontSizePicker,{label:Object(u.__)("文字サイズ","ystandard-blocks"),value:g.size,onChange:e=>{j(e)}}))),Object(o.createElement)(b.PanelBody,{title:Object(u.__)("余白設定","ystandard-blocks")},Object(o.createElement)(b.BaseControl,null,Object(o.createElement)("span",{className:"ystdb-info__small"},"ボタン内側の余白を設定できます。"),Object(o.createElement)("div",{className:"ystdb-btn-selector components-base-control"},a.a.button.paddingTypes.map(e=>Object(o.createElement)(b.Button,{key:e.value,isSecondary:E!==e.value,isPrimary:E===e.value,onClick:()=>{y({paddingType:e.value})}},Object(o.createElement)("span",null,e.label)))))),Object(o.createElement)(b.PanelBody,{title:Object(u.__)("ブロックボタン設定","ystandard-blocks")},Object(o.createElement)(b.BaseControl,null,Object(o.createElement)(b.ToggleControl,{label:Object(u.__)("ボタンをブロック型にする","ystandard-blocks"),onChange:()=>{y({buttonType:"is-block"===S?"":"is-block"})},checked:"is-block"===S}),Object(o.createElement)(b.RangeControl,{value:I,label:Object(u.__)("ボタン最大幅","ystandard-blocks"),min:0,max:B,initialPosition:100,allowReset:!0,onChange:e=>{y({maxWidth:e})}}),Object(o.createElement)(b.RadioControl,{label:Object(u.__)("最大幅単位","ystandard-blocks"),selected:P,options:[{label:Object(u.__)("%","ystandard-blocks"),value:"%"},{label:Object(u.__)("px","ystandard-blocks"),value:"px"}],onChange:e=>{y({maxUnit:e})}}))),Object(o.createElement)(b.PanelBody,{title:Object(u.__)("アニメーション設定","ystandard-blocks")},Object(o.createElement)(b.BaseControl,null,Object(o.createElement)(b.RadioControl,{label:Object(u.__)("アニメーション種類","ystandard-blocks"),selected:R,options:a.a.button.animationTypes,onChange:e=>{y({animationType:e})}}),Object(o.createElement)(b.RangeControl,{value:z,label:Object(u.__)("アニメーションの速さ(秒)","ystandard-blocks"),min:1,max:10,initialPosition:5,allowReset:!0,onChange:e=>{y({animationInterval:e})}}))))))}),y=n(7),O=n.n(y),f=n(8),g=n.n(f);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var _=Object(y.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,a=e.size,l=void 0===a?24:a,c=function(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["color","size"]);return O.a.createElement("svg",j({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),O.a.createElement("polyline",{points:"16 18 22 12 16 6"}),O.a.createElement("polyline",{points:"8 6 2 12 8 18"}))}));_.propTypes={color:g.a.string,size:g.a.oneOfType([g.a.string,g.a.number])},_.displayName="Code";var v=_,k=n(10),x={from:[{type:"block",blocks:["ystdb/btn-link"],transform:e=>Object(k.createBlock)("ystdb/svg-button-link",{className:e.className,content:e.content,borderRadius:e.borderRadius,iconSizeLeft:e.iconSizeLeft,iconSizeRight:e.iconSizeRight,align:e.align,backgroundColor:e.backgroundColor,customBackgroundColor:e.customBackgroundColor,textColor:e.textColor,customTextColor:e.customTextColor,fontSize:e.fontSize,customFontSize:e.customFontSize,paddingType:e.paddingType,buttonType:e.buttonType,maxWidth:e.maxWidth,maxUnit:e.maxUnit,animationType:e.animationType,animationInterval:e.animationInterval})}]};const h=[{attributes:{content:{type:"string"},borderRadius:{type:"number",default:4},iconLeft:{type:"string"},iconLeftSVG:{type:"string"},iconSizeLeft:{type:"string",default:""},iconRight:{type:"string"},iconRightSVG:{type:"string"},iconSizeRight:{type:"string",default:""},align:{type:"string"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"},paddingType:{type:"string",default:""},buttonType:{type:"string"},maxWidth:{type:"number",default:100},maxUnit:{type:"string",default:"%"},animationType:{type:"string",default:"none"},animationInterval:{type:"number",default:5}},supports:{className:!1,html:!1},migrate(e){let t=e.customFontSize;return"number"==typeof t&&(t=t.toString().replace("px","")+"px"),{...e,customFontSize:t}}}];Object(k.registerBlockType)("ystdb/svg-button-link",{title:Object(u.__)("ボタン型リンク","ystandard-blocks"),description:Object(u.__)("入力したリンク(a)タグをボタン形式で表示するブロック","ystandard-blocks"),icon:Object(o.createElement)(v,{stroke:a.a.color.iconForeground,style:{fill:"none"}}),keywords:[Object(u.__)("link"),Object(u.__)("button"),"button"],category:a.a.category.common,attributes:{content:{type:"string"},borderRadius:{type:"number",default:4},iconLeft:{type:"string"},iconLeftSVG:{type:"string"},iconSizeLeft:{type:"string",default:""},iconRight:{type:"string"},iconRightSVG:{type:"string"},iconSizeRight:{type:"string",default:""},align:{type:"string"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"string"},paddingType:{type:"string",default:""},buttonType:{type:"string"},maxWidth:{type:"number",default:100},maxUnit:{type:"string",default:"%"},animationType:{type:"string",default:"none"},animationInterval:{type:"number",default:5}},supports:{className:!1,html:!1},edit:m,save:()=>null,styles:[{name:"fill",label:Object(u.__)("塗りつぶし"),isDefault:!0},{name:"outline",label:Object(u.__)("アウトライン")}],deprecated:h,transforms:x,example:{}})}]);