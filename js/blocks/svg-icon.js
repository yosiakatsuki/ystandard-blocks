(()=>{var e={703:(e,t,n)=>{"use strict";var o=n(414);function s(){}function r(){}r.resetWarningCache=s,e.exports=function(){function e(e,t,n,s,r,a){if(a!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:s};return n.PropTypes=n,n}},697:(e,t,n)=>{e.exports=n(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},967:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,r(n)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)o.call(e,n)&&e[n]&&(t=a(t,n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.React;var t=n.n(e);const o=window.wp.i18n;(0,o.__)("小","ystandard-blocks"),(0,o.__)("中","ystandard-blocks"),(0,o.__)("大","ystandard-blocks"),(0,o.__)("なし","ystandard-blocks"),(0,o.__)("キラキラ","ystandard-blocks"),(0,o.__)("小","ystandard-blocks"),(0,o.__)("中","ystandard-blocks"),(0,o.__)("大","ystandard-blocks"),(0,o._x)("指定無し","component-config","ystandard-blocks"),(0,o._x)("通常(normal)","component-config","ystandard-blocks"),(0,o._x)("太字(bold)","component-config","ystandard-blocks"),(0,o._x)("100","component-config","ystandard-blocks"),(0,o._x)("200","component-config","ystandard-blocks"),(0,o._x)("300","component-config","ystandard-blocks"),(0,o._x)("400","component-config","ystandard-blocks"),(0,o._x)("500","component-config","ystandard-blocks"),(0,o._x)("600","component-config","ystandard-blocks"),(0,o._x)("700","component-config","ystandard-blocks"),(0,o._x)("800","component-config","ystandard-blocks"),(0,o._x)("900","component-config","ystandard-blocks"),(0,o._x)("指定無し","component-config","ystandard-blocks"),(0,o._x)("イタリック体","component-config","ystandard-blocks"),(0,o._x)("直線","component-config","ystandard-blocks"),(0,o._x)("点線","component-config","ystandard-blocks"),(0,o._x)("破線","component-config","ystandard-blocks"),(0,o._x)("二重線","component-config","ystandard-blocks");var s=n(967),r=n.n(s);const a=window.wp.element,l=window.wp.components;function c(){return window.ystdbIconList}function i(e){const t=function(e){if(!e)return e;const t=[{old:"sns-Twitter",new:"sns-twitter"},{old:"sns-Facebook",new:"sns-facebook"},{old:"sns-Hatena Bookmark",new:"sns-hatenabookmark"},{old:"sns-Pocket",new:"sns-pocket"},{old:"sns-Line",new:"sns-line"},{old:"sns-Feedly",new:"sns-feedly"},{old:"sns-RSS",new:"sns-rss"},{old:"sns-WordPress",new:"sns-wordpress"},{old:"sns-Pinterest",new:"sns-pinterest"},{old:"sns-Instagram",new:"sns-instagram"},{old:"sns-linkedIn",new:"sns-linkedin"},{old:"sns-YouTube",new:"sns-youtube"},{old:"sns-Twitch",new:"sns-twitch"},{old:"sns-Dribbble",new:"sns-dribbble"},{old:"sns-GitHub",new:"sns-github"},{old:"sns-Tumblr",new:"sns-tumblr"},{old:"sns-Amazon",new:"sns-amazon"}].find((t=>t.old===e));return t?t.new:e}(e),n=c().find((e=>e.name===t));if(n&&n.hasOwnProperty("icon"))return n.icon}class d extends a.Component{render(){const{name:t}=this.props;return t?(0,e.createElement)("span",{className:r()("ys-icon",{"sns-icon":-1!==t.indexOf("sns-")}),dangerouslySetInnerHTML:{__html:i(t)}}):""}}const m=d,p=t=>{const{selectedIcon:n,onChange:s,previewIcon:i}=t,[d,p]=(0,a.useState)(!1),y=c(),u=!1!==i||i;return(0,e.createElement)("div",{className:"ys-icon-picker"},(0,e.createElement)("div",{className:"ys-icon-picker__selected"},u&&(0,e.createElement)("div",{className:"ys-icon-picker__preview"},!!n&&(0,e.createElement)(m,{name:n})),(0,e.createElement)(l.Button,{className:r()({"is-open":d}),isSecondary:!0,onClick:()=>{p(!d)},style:{minWidth:"110px",textAlign:"center",justifyContent:"center"}},d&&(0,e.createElement)("span",null,(0,o.__)("閉じる","ystandard-blocks")),!d&&(0,e.createElement)("span",null,(0,o.__)("アイコン選択","ystandard-blocks"))),(0,e.createElement)(l.Button,{className:"ys-icon-picker__remove",disabled:!n,isSmall:!0,isSecondary:!0,onClick:()=>{s(""),p(!1)}},(0,o.__)("リセット","ystandard-blocks"))),(0,e.createElement)("div",{className:r()("ys-icon-picker__list",{"is-open":d})},(0,e.createElement)("div",{className:"ys-icon-picker__list-container"},y.map((t=>(0,e.createElement)(l.Button,{key:t.name,className:r()("ys-icon-picker__icon",{"is-selected":n===t.name}),onClick:()=>{n===t.name?(s(""),p(!1)):s(t.name)}},(0,e.createElement)(m,{name:t.name})))))))};class y extends a.Component{render(){const{iconControlTitle:t,iconPosition:n,onChangePosition:s,selectedIcon:a,onClickIcon:c,customInfo:i,customInfoStyle:d,previewIcon:m,align:y,isFloat:u}=this.props,b=void 0===t?(0,o.__)("表示アイコン","ystandard-blocks"):t;return(0,e.createElement)("div",{className:r()("ystdb-icon-select",{[`align--${y}`]:y,"is-float":u})},i&&(0,e.createElement)("div",{style:d},i),!!s&&(0,e.createElement)(l.BaseControl,null,(0,e.createElement)("div",{className:"ystdb-inspector-controls__label"},(0,o.__)("アイコン表示位置","ystandard-blocks")),(0,e.createElement)("div",{className:"ystdb-icon-select__position"},(0,e.createElement)(l.RadioControl,{selected:n,options:[{label:(0,o.__)("左","ystandard-blocks"),value:"left"},{label:(0,o.__)("右","ystandard-blocks"),value:"right"}],onChange:s}))),(0,e.createElement)(l.BaseControl,null,(0,e.createElement)("div",{className:"ystdb-inspector-controls__label"},b),(0,e.createElement)("div",{className:"ystdb-icon-select__picker"},(0,e.createElement)(p,{selectedIcon:a,previewIcon:m,onChange:e=>{c(e)}}))))}}const u=y,b=[{value:"",label:(0,o.__)("1倍")},{value:"2",label:(0,o.__)("2倍")},{value:"5",label:(0,o.__)("5倍")}],g=window.wp.blockEditor,_=window.wp.compose,f="noreferrer noopener",k=(0,_.compose)([(0,g.withColors)({textColor:"color"}),(0,g.withFontSizes)("fontSize")])((function(t){const{textColor:n,setTextColor:s,attributes:c,setAttributes:i,isSelected:d,fontSize:p,setFontSize:y,className:_}=t,{icon:k,iconSize:v,align:x,url:w,rel:E,linkTarget:C}=c,h=r()(_,"ystdb-icon",{[`has-text-align-${x}`]:x,[n.class]:n.class,[p.class]:p.class,[`is-size--${v}`]:v}),S={color:n.color,fontSize:p.size?p.size:void 0};return(0,e.createElement)(a.Fragment,null,(0,e.createElement)(g.BlockControls,null,(0,e.createElement)(g.AlignmentToolbar,{value:x,onChange:e=>{i({align:e})}})),(0,e.createElement)(g.InspectorControls,null,(0,e.createElement)(g.PanelColorSettings,{title:(0,o.__)("色設定","ystandard-blocks"),initialOpen:!0,colorSettings:[{value:n.color,onChange:e=>{s(e)},label:(0,o.__)("文字色","ystandard-blocks")}]}),(0,e.createElement)(l.PanelBody,{title:(0,o.__)("アイコン設定","ystandard-blocks")},(0,e.createElement)(l.BaseControl,{id:"icon",label:(0,o.__)("アイコン","ystandard-blocks")},(0,e.createElement)(u,{panelTitle:(0,o.__)("アイコン選択","ystandard-blocks"),iconControlTitle:"",selectedIcon:k,onClickIcon:e=>{i({icon:e})},align:"center",isFloat:!0})),(0,e.createElement)(g.FontSizePicker,{__nextHasNoMarginBottom:!0,label:(0,o.__)("アイコンサイズ","ystandard-blocks"),value:p.size,onChange:e=>{y(e)}}),(0,e.createElement)("div",{style:{marginTop:"1.5em"}},(0,e.createElement)(l.SelectControl,{label:(0,o.__)("アイコン倍率","ystandard-blocks"),value:v,options:b,onChange:e=>{i({iconSize:e})}}))),(0,e.createElement)(l.PanelBody,{title:(0,o.__)("リンク設定","ystandard-blocks")},(0,e.createElement)(g.URLInput,{label:(0,o.__)("リンク","ystandard-blocks"),className:"ystdb-icon__link",value:w,autoFocus:!1,onChange:e=>i({url:e}),disableSuggestions:!d,isFullWidth:!0,hasBorder:!0,__nextHasNoMarginBottom:!0}),(0,e.createElement)(l.ToggleControl,{label:(0,o.__)("新しいタブで開く","ystandard-blocks"),onChange:e=>{const t=e?"_blank":void 0;let n=E;t&&!E?n=f:t||E!==f||(n=void 0),i({linkTarget:t,rel:n})},checked:"_blank"===C}),(0,e.createElement)(l.TextControl,{label:(0,o.__)("リンクrel","ystandard-blocks"),value:E||"",onChange:e=>{i({rel:e})}}))),(0,e.createElement)("div",{className:h,style:S},k?(0,e.createElement)(m,{name:k}):(0,e.createElement)("div",{className:"ystdb-icon__select--no-icon"},(0,e.createElement)(m,{name:"info"}),(0,e.createElement)("div",{style:{fontSize:"12px",lineHeight:1.2,marginTop:"0.5em"}},"「アイコン設定」から",(0,e.createElement)("br",null),"アイコンを選択"))))}));var v=n(697),x=n.n(v);function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},w.apply(this,arguments)}var E=(0,e.forwardRef)((function(e,n){var o=e.color,s=void 0===o?"currentColor":o,r=e.size,a=void 0===r?24:r,l=function(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,["color","size"]);return t().createElement("svg",w({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),t().createElement("circle",{cx:"12",cy:"12",r:"10"}),t().createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),t().createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}))}));E.propTypes={color:x().string,size:x().oneOfType([x().string,x().number])},E.displayName="Info";const C=E,h=window.wp.blocks,S={from:[{type:"block",blocks:["ystdb/fa-icon"],transform:e=>(0,h.createBlock)("ystdb/svg-icon",{className:e.className,align:e.align,textColor:e.textColor,customTextColor:e.customTextColor,backgroundColor:e.backgroundColor,customBackgroundColor:e.customBackgroundColor,fontSize:e.fontSize,customFontSize:e.customFontSize,url:e.url,linkTarget:e.linkTarget,rel:e.rel})}]},z=[...[{attributes:{icon:{type:"string"},iconSize:{type:"string",default:"5"},align:{type:"string",default:"center"},textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"},url:{type:"string"},linkTarget:{type:"string"},rel:{type:"string"}},supports:{align:!1,className:!1},migrate(e){let t=e.customFontSize;return"number"==typeof t&&(t=t.toString().replace("px","")+"px"),{...e,customFontSize:t}},save({attributes:t}){const{textColor:n,customTextColor:o,icon:s,iconSize:a,align:l,fontSize:c,customFontSize:i,url:d,rel:p,linkTarget:y}=t,u=(0,g.getColorClassName)("color",n),b=(0,g.getFontSizeClass)(c),_=r()("ystdb-icon",{"has-text-color":n||o,[u]:u,[`has-text-align-${l}`]:l,[b]:b,[`is-size--${a}`]:a}),f={color:u?void 0:o,fontSize:b?void 0:i};return(0,e.createElement)("div",{className:_,style:f},d?(0,e.createElement)("a",{className:"ystdb-icon__link",href:d,target:y,rel:p},(0,e.createElement)(m,{name:s})):(0,e.createElement)(m,{name:s}))}}]];(0,h.registerBlockType)("ystdb/svg-icon",{title:(0,o.__)("アイコン","ystandard-blocks"),description:(0,o.__)("アイコン表示ブロック","ystandard-blocks"),icon:(0,e.createElement)(C,{stroke:"#4190be",style:{fill:"none"}}),keywords:[(0,o.__)("icon"),(0,o.__)("アイコン"),"icon","fa"],category:"ystdb",attributes:{icon:{type:"string"},iconSize:{type:"string",default:"5"},align:{type:"string",default:"center"},textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"string"},url:{type:"string"},linkTarget:{type:"string"},rel:{type:"string"}},supports:{align:!1,className:!1},edit:k,save:function({attributes:t}){const{textColor:n,customTextColor:o,icon:s,iconSize:a,align:l,fontSize:c,customFontSize:i,url:d,rel:p,linkTarget:y}=t,u=(0,g.getColorClassName)("color",n),b=(0,g.getFontSizeClass)(c),_=r()("ystdb-icon",{"has-text-color":n||o,[u]:u,[`has-text-align-${l}`]:l,[b]:b,[`is-size--${a}`]:a}),f={color:u?void 0:o,fontSize:b?void 0:i};return(0,e.createElement)("div",{className:_,style:f},d?(0,e.createElement)("a",{className:"ystdb-icon__link",href:d,target:y,rel:p},(0,e.createElement)(m,{name:s})):(0,e.createElement)(m,{name:s}))},deprecated:z,transforms:S,example:{}})})()})();