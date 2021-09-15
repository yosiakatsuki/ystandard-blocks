!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=36)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var l=typeof o;if("string"===l||"number"===l)e.push(o);else if(Array.isArray(o)){if(o.length){var c=r.apply(null,o);c&&e.push(c)}}else if("object"===l)if(o.toString===Object.prototype.toString)for(var a in o)n.call(o,a)&&o[a]&&e.push(a);else e.push(o.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},,function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(1);const r={category:{common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},color:{iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:Object(o.__)("小","ystandard-blocks")},{value:"",label:Object(o.__)("中","ystandard-blocks")},{value:"is-large",label:Object(o.__)("大","ystandard-blocks")}],animationTypes:[{label:Object(o.__)("なし","ystandard-blocks"),value:"none"},{label:Object(o.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"is-small",label:Object(o.__)("小","ystandard-blocks")},{value:"",label:Object(o.__)("中","ystandard-blocks")},{value:"is-large",label:Object(o.__)("大","ystandard-blocks")}]},component:{defaultAvatar:{url:"https://www.gravatar.com/avatar/000000000000000000000000000000?s=128&r=g&d=mp"},fontWeight:[{value:"",label:Object(o._x)("指定無し","component-config","ystandard-blocks")},{value:"normal",label:Object(o._x)("normal","component-config","ystandard-blocks")},{value:"bold",label:Object(o._x)("bold","component-config","ystandard-blocks")},{value:"100",label:Object(o._x)("100","component-config","ystandard-blocks")},{value:"200",label:Object(o._x)("200","component-config","ystandard-blocks")},{value:"300",label:Object(o._x)("300","component-config","ystandard-blocks")},{value:"400",label:Object(o._x)("400","component-config","ystandard-blocks")},{value:"500",label:Object(o._x)("500","component-config","ystandard-blocks")},{value:"600",label:Object(o._x)("600","component-config","ystandard-blocks")},{value:"700",label:Object(o._x)("700","component-config","ystandard-blocks")},{value:"800",label:Object(o._x)("800","component-config","ystandard-blocks")},{value:"900",label:Object(o._x)("900","component-config","ystandard-blocks")}],fontUnit:[{value:"px",label:"px"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"%",label:"%"}],fontStyle:[{value:"",label:Object(o._x)("指定無し","component-config","ystandard-blocks")},{value:"italic",label:Object(o._x)("イタリック体","component-config","ystandard-blocks")}]}}},function(e,t){e.exports=window.React},function(e,t,n){e.exports=n(16)()},function(e,t,n){"use strict";var o=n(0),r=n(4),l=n.n(r),c=n(14);class a extends o.Component{render(){const{name:e}=this.props;return e?Object(o.createElement)("span",{className:l()("ys-icon",{"sns-icon":-1!==e.indexOf("sns-")}),dangerouslySetInnerHTML:{__html:Object(c.a)(e)}}):""}}t.a=a},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.compose},,,function(e,t,n){"use strict";function o(){return window.ystdbIconList}function r(e){const t=function(e){if(!e)return e;const t=[{old:"sns-Twitter",new:"sns-twitter"},{old:"sns-Facebook",new:"sns-facebook"},{old:"sns-Hatena Bookmark",new:"sns-hatenabookmark"},{old:"sns-Pocket",new:"sns-pocket"},{old:"sns-Line",new:"sns-line"},{old:"sns-Feedly",new:"sns-feedly"},{old:"sns-RSS",new:"sns-rss"},{old:"sns-WordPress",new:"sns-wordpress"},{old:"sns-Pinterest",new:"sns-pinterest"},{old:"sns-Instagram",new:"sns-instagram"},{old:"sns-linkedIn",new:"sns-linkedin"},{old:"sns-YouTube",new:"sns-youtube"},{old:"sns-Twitch",new:"sns-twitch"},{old:"sns-Dribbble",new:"sns-dribbble"},{old:"sns-GitHub",new:"sns-github"},{old:"sns-Tumblr",new:"sns-tumblr"},{old:"sns-Amazon",new:"sns-amazon"}].find(t=>t.old===e);return t?t.new:e}(e),n=o().find(e=>e.name===t);if(n&&n.hasOwnProperty("icon"))return n.icon}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}))},,function(e,t,n){"use strict";var o=n(17);function r(){}function l(){}l.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,l,c){if(c!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,,,function(e,t,n){"use strict";var o=n(0),r=n(4),l=n.n(r),c=n(11),a=n(2),s=n(14),i=n(9),b=n(1);class d extends o.Component{render(){const{selectedIcon:e,onChange:t,isOpen:n,previewIcon:r,setState:c}=this.props,d=Object(s.b)(),u=!1!==r||r;return Object(o.createElement)("div",{className:"ys-icon-picker"},Object(o.createElement)("div",{className:"ys-icon-picker__selected"},u&&Object(o.createElement)("div",{className:"ys-icon-picker__preview"},!!e&&Object(o.createElement)(i.a,{name:e})),Object(o.createElement)(a.Button,{className:l()({"is-open":n}),isSecondary:!0,onClick:()=>{c({isOpen:!n})},style:{minWidth:"110px",textAlign:"center",justifyContent:"center"}},n&&Object(o.createElement)("span",null,Object(b.__)("閉じる","ystandard-blocks")),!n&&Object(o.createElement)("span",null,Object(b.__)("アイコン選択","ystandard-blocks"))),Object(o.createElement)(a.Button,{className:"ys-icon-picker__remove",disabled:!e,isSmall:!0,isSecondary:!0,onClick:()=>{t(""),c({isOpen:!1})}},Object(b.__)("リセット","ystandard-blocks"))),Object(o.createElement)("div",{className:l()("ys-icon-picker__list",{"is-open":n})},Object(o.createElement)("div",{className:"ys-icon-picker__list-container"},d.map(n=>Object(o.createElement)(a.Button,{key:n.name,className:l()("ys-icon-picker__icon",{"is-selected":e===n.name}),onClick:()=>{e===n.name?(t(""),c({isOpen:!1})):t(n.name)}},Object(o.createElement)(i.a,{name:n.name}))))))}}var u=Object(c.compose)([Object(c.withState)({isOpen:!1})])(d);class p extends o.Component{render(){const{iconControlTitle:e,iconPosition:t,onChangePosition:n,selectedIcon:r,onClickIcon:c,customInfo:s,customInfoStyle:i,previewIcon:d,align:p,isFloat:m}=this.props,y=void 0===e?Object(b.__)("表示アイコン","ystandard-blocks"):e;return Object(o.createElement)("div",{className:l()("ystdb-icon-select",{["align--"+p]:p,"is-float":m})},s&&Object(o.createElement)("div",{style:i},s),!!n&&Object(o.createElement)(a.BaseControl,null,Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(b.__)("アイコン表示位置","ystandard-blocks")),Object(o.createElement)("div",{className:"ystdb-icon-select__position"},Object(o.createElement)(a.RadioControl,{selected:t,options:[{label:Object(b.__)("左","ystandard-blocks"),value:"left"},{label:Object(b.__)("右","ystandard-blocks"),value:"right"}],onChange:n}))),Object(o.createElement)(a.BaseControl,null,Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},y),Object(o.createElement)("div",{className:"ystdb-icon-select__picker"},Object(o.createElement)(u,{selectedIcon:r,previewIcon:d,onChange:e=>{c(e)}}))))}}t.a=p},,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(6),l=n(4),c=n.n(l),a=n(21),s=n(9),i=n(1);const b=[{value:"",label:Object(i.__)("1倍")},{value:"2",label:Object(i.__)("2倍")},{value:"5",label:Object(i.__)("5倍")}];var d=n(3),u=n(2),p=n(11),m=Object(p.compose)([Object(d.withColors)({textColor:"color"}),Object(d.withFontSizes)("fontSize")])((function(e){const{textColor:t,setTextColor:n,attributes:r,setAttributes:l,isSelected:p,fontSize:m,setFontSize:y,className:f}=e,{icon:O,iconSize:g,align:j,url:_,rel:v,linkTarget:k}=r,x=c()(f,"ystdb-icon",{["has-text-align-"+j]:j,[t.class]:t.class,[m.class]:m.class,["is-size--"+g]:g}),w={color:t.color,fontSize:m.size?m.size:void 0};return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(d.BlockControls,null,Object(o.createElement)(d.AlignmentToolbar,{value:j,onChange:e=>{l({align:e})}})),Object(o.createElement)(d.InspectorControls,null,Object(o.createElement)(d.PanelColorSettings,{title:Object(i.__)("Color settings","ystandard-blocks"),initialOpen:!0,colorSettings:[{value:t.color,onChange:e=>{n(e)},label:Object(i.__)("Text Color","ystandard-blocks")}]}),Object(o.createElement)(u.PanelBody,{title:Object(i.__)("サイズ設定","ystandard-blocks")},Object(o.createElement)(d.FontSizePicker,{label:Object(i.__)("アイコンサイズ","ystandard-blocks"),value:m.size,onChange:e=>{y(e)}}),Object(o.createElement)(u.SelectControl,{label:Object(i.__)("アイコン倍率","ystandard-blocks"),value:g,options:b,onChange:e=>{l({iconSize:e})}})),Object(o.createElement)(u.PanelBody,{title:Object(i.__)("Link settings")},Object(o.createElement)(u.ToggleControl,{label:Object(i.__)("Open in new tab"),onChange:e=>{const t=e?"_blank":void 0;let n=v;t&&!v?n="noreferrer noopener":t||"noreferrer noopener"!==v||(n=void 0),l({linkTarget:t,rel:n})},checked:"_blank"===k}),Object(o.createElement)(u.TextControl,{label:Object(i.__)("Link rel"),value:v||"",onChange:e=>{l({rel:e})}}))),Object(o.createElement)("div",{className:x,style:w},O?Object(o.createElement)(s.a,{name:O}):Object(o.createElement)("div",{className:"ystdb-icon__select--no-icon"},Object(o.createElement)(s.a,{name:"info"}),Object(o.createElement)("div",null,"アイコンを選択"))),!!p&&Object(o.createElement)("div",null,Object(o.createElement)("div",{className:"ystdb-icon__select-start"},Object(o.createElement)(a.a,{panelTitle:Object(i.__)("アイコン選択","ystandard-blocks"),iconControlTitle:"",selectedIcon:O,onClickIcon:e=>{l({icon:e})},align:"center",isFloat:!0})),Object(o.createElement)(d.URLInput,{label:Object(i.__)("Link"),className:"ystdb-icon__link",value:_,autoFocus:!1,onChange:e=>l({url:e}),disableSuggestions:!p,isFullWidth:!0,hasBorder:!0})))})),y=n(7),f=n.n(y),O=n(8),g=n.n(O);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var _=Object(y.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,l=void 0===r?24:r,c=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["color","size"]);return f.a.createElement("svg",j({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),f.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),f.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),f.a.createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}))}));_.propTypes={color:g.a.string,size:g.a.oneOfType([g.a.string,g.a.number])},_.displayName="Info";var v=_,k=n(10),x={from:[{type:"block",blocks:["ystdb/fa-icon"],transform:e=>Object(k.createBlock)("ystdb/svg-icon",{className:e.className,align:e.align,textColor:e.textColor,customTextColor:e.customTextColor,backgroundColor:e.backgroundColor,customBackgroundColor:e.customBackgroundColor,fontSize:e.fontSize,customFontSize:e.customFontSize,url:e.url,linkTarget:e.linkTarget,rel:e.rel})}]};const w=[{attributes:{icon:{type:"string"},iconSize:{type:"string",default:"5"},align:{type:"string",default:"center"},textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"},url:{type:"string"},linkTarget:{type:"string"},rel:{type:"string"}},supports:{align:!1,className:!1},migrate(e){let t=e.customFontSize;return"number"==typeof t&&(t=t.toString().replace("px","")+"px"),{...e,customFontSize:t}},save({attributes:e}){const{textColor:t,customTextColor:n,icon:r,iconSize:l,align:a,fontSize:i,customFontSize:b,url:u,rel:p,linkTarget:m}=e,y=Object(d.getColorClassName)("color",t),f=Object(d.getFontSizeClass)(i),O=c()("ystdb-icon",{"has-text-color":t||n,[y]:y,["has-text-align-"+a]:a,[f]:f,["is-size--"+l]:l}),g={color:y?void 0:n,fontSize:f?void 0:b};return Object(o.createElement)("div",{className:O,style:g},u?Object(o.createElement)("a",{className:"ystdb-icon__link",href:u,target:m,rel:p},Object(o.createElement)(s.a,{name:r})):Object(o.createElement)(s.a,{name:r}))}}];Object(k.registerBlockType)("ystdb/svg-icon",{title:Object(i.__)("アイコン","ystandard-blocks"),description:Object(i.__)("アイコン表示ブロック","ystandard-blocks"),icon:Object(o.createElement)(v,{stroke:r.a.color.iconForeground,style:{fill:"none"}}),keywords:[Object(i.__)("icon"),Object(i.__)("アイコン"),"icon","fa"],category:r.a.category.common,attributes:{icon:{type:"string"},iconSize:{type:"string",default:"5"},align:{type:"string",default:"center"},textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"string"},url:{type:"string"},linkTarget:{type:"string"},rel:{type:"string"}},supports:{align:!1,className:!1},edit:m,save:function({attributes:e}){const{textColor:t,customTextColor:n,icon:r,iconSize:l,align:a,fontSize:i,customFontSize:b,url:u,rel:p,linkTarget:m}=e,y=Object(d.getColorClassName)("color",t),f=Object(d.getFontSizeClass)(i),O=c()("ystdb-icon",{"has-text-color":t||n,[y]:y,["has-text-align-"+a]:a,[f]:f,["is-size--"+l]:l}),g={color:y?void 0:n,fontSize:f?void 0:b};return Object(o.createElement)("div",{className:O,style:g},u?Object(o.createElement)("a",{className:"ystdb-icon__link",href:u,target:m,rel:p},Object(o.createElement)(s.a,{name:r})):Object(o.createElement)(s.a,{name:r}))},deprecated:w,transforms:x,example:{}})}]);