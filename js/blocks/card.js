(()=>{var e={694:(e,t,n)=>{"use strict";var o=n(925);function l(){}function r(){}r.resetWarningCache=l,e.exports=function(){function e(e,t,n,l,r,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:l};return n.PropTypes=n,n}},556:(e,t,n)=>{e.exports=n(694)()},925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},942:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function l(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,r(n)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return l.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)o.call(e,n)&&e[n]&&(t=a(t,n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.React;var t=n.n(e);const o=window.wp.i18n,l="noreferrer noopener";(0,o.__)("小","ystandard-blocks"),(0,o.__)("中","ystandard-blocks"),(0,o.__)("大","ystandard-blocks"),(0,o.__)("なし","ystandard-blocks"),(0,o.__)("キラキラ","ystandard-blocks");(0,o.__)("小","ystandard-blocks"),(0,o.__)("中","ystandard-blocks"),(0,o.__)("大","ystandard-blocks"),(0,o._x)("指定無し","component-config","ystandard-blocks"),(0,o._x)("通常(normal)","component-config","ystandard-blocks"),(0,o._x)("太字(bold)","component-config","ystandard-blocks"),(0,o._x)("100","component-config","ystandard-blocks"),(0,o._x)("200","component-config","ystandard-blocks"),(0,o._x)("300","component-config","ystandard-blocks"),(0,o._x)("400","component-config","ystandard-blocks"),(0,o._x)("500","component-config","ystandard-blocks"),(0,o._x)("600","component-config","ystandard-blocks"),(0,o._x)("700","component-config","ystandard-blocks"),(0,o._x)("800","component-config","ystandard-blocks"),(0,o._x)("900","component-config","ystandard-blocks"),(0,o._x)("指定無し","component-config","ystandard-blocks"),(0,o._x)("イタリック体","component-config","ystandard-blocks"),(0,o._x)("直線","component-config","ystandard-blocks"),(0,o._x)("点線","component-config","ystandard-blocks"),(0,o._x)("破線","component-config","ystandard-blocks"),(0,o._x)("二重線","component-config","ystandard-blocks");var r=n(942),a=n.n(r);const s=window.wp.blockEditor,c=window.wp.element,i=window.wp.components,d=window.wp.serverSideRender;var m=n.n(d);const p=window.wp.compose,b=window.wp.data,y=({key:t,value:n,label:o,position:l="bottom-start",renderContent:r})=>{const s=null!=o?o:"色";return(0,e.createElement)(i.__experimentalItemGroup,{isBordered:!0,isSeparated:!0,className:"block-editor-panel-color-gradient-settings__item-group"},(0,e.createElement)(i.Dropdown,{key:t,popoverProps:{placement:l},className:"block-editor-panel-color-gradient-settings__dropdown",contentClassName:"block-editor-panel-color-gradient-settings__dropdown-content",style:{display:"block"},renderToggle:({isOpen:t,onToggle:o})=>(0,e.createElement)(i.__experimentalItem,{onClick:o,className:a()("block-editor-panel-color-gradient-settings__item",{"is-open":t})},(0,e.createElement)(i.__experimentalHStack,{justify:"flex-start"},(0,e.createElement)(i.ColorIndicator,{className:"block-editor-panel-color-gradient-settings__color-indicator",colorValue:n}),(0,e.createElement)(i.FlexItem,null,s))),renderContent:r}))},_=({value:t,onChange:n,colors:o,label:l,key:r,position:a="bottom-start",...s})=>{const c=null!=o?o:(()=>{const{colors:e}=(0,b.select)("core/block-editor").getSettings();return e})(),d=e=>{n(e)};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(y,{key:r,label:l,value:t,position:a,renderContent:()=>(0,e.createElement)(i.ColorPalette,{colors:c,onChange:d,value:t,...s})}))},u=[{label:"横型",value:"horizon"},{label:"縦型",value:"vertical"},{label:"モバイルでも横型",value:"fixed-horizon"}],g=[{label:"小",value:"small"},{label:"通常",value:"normal"},{label:"大",value:"large"}],k=[{label:"テキストに合わせる",value:"fitText"},{label:"画像をすべて表示",value:"showAll"}],C=[{label:"左",value:"left"},{label:"右",value:"right"}],f=(0,p.compose)([(0,s.withColors)("backgroundColor","borderColor",{titleColor:"color",dscrColor:"color",domainColor:"color"})])((t=>{const{attributes:n,setAttributes:r,isSelected:d,backgroundColor:p,setBackgroundColor:b,borderColor:y,setBorderColor:f,titleColor:v,setTitleColor:E,dscrColor:h,setDscrColor:w,domainColor:x,setDomainColor:T}=t,{url:B,linkTarget:O,rel:N,cardType:S,title:P,showImage:R,imageSize:I,imageType:D,imageAlign:L,imageURL:j,imageAlt:z,imageID:A,showDscr:U,dscrCharCount:F,dscr:H,showDomain:M,caption:W}=n,V=S||"horizon",q=D||"fitText",G="horizon"===V||"fixed-horizon"===V,Y=e=>{r({url:e}),e&&-1===e.indexOf(ystdb.homeUrl)?r({linkTarget:"_blank",rel:l}):r({linkTarget:void 0,rel:void 0})};return(0,e.createElement)("div",{className:"wp-block-html"},(0,e.createElement)(c.Fragment,null,(0,e.createElement)(s.InspectorControls,null,(0,e.createElement)(i.PanelBody,{title:(0,o.__)("リンク設定","ystandard-blocks")},(0,e.createElement)(i.BaseControl,null,(0,e.createElement)(s.URLInput,{label:(0,o.__)("Link"),className:"ystdb-card__url-input is-use-inspector-control",value:B,autoFocus:!1,onChange:e=>{Y(e)},disableSuggestions:!d,isFullWidth:!0,hasBorder:!0,__nextHasNoMarginBottom:!0})),(0,e.createElement)(i.BaseControl,null,(0,e.createElement)(i.ToggleControl,{label:(0,o.__)("Open in new tab"),onChange:e=>{const t=e?"_blank":void 0;let n=N;t&&!N?n=l:t||N!==l||(n=void 0),r({linkTarget:t,rel:n})},checked:"_blank"===O}),(0,e.createElement)(i.TextControl,{label:(0,o.__)("Link rel"),value:N||"",onChange:e=>{r({rel:e})}}))),(0,e.createElement)(i.PanelBody,{title:(0,o.__)("カード表示設定","ystandard-blocks")},(0,e.createElement)(i.BaseControl,null,(0,e.createElement)(i.RadioControl,{label:(0,o.__)("カード表示タイプ","ystandard-blocks"),selected:V,options:u,onChange:e=>{r({cardType:e})}}),(0,e.createElement)("div",{className:"ystdb-inspector-controls__label"},(0,o.__)("カード背景色","ystandard-blocks")),(0,e.createElement)(_,{label:(0,o.__)("カード背景色","ystandard-blocks"),value:p.color,onChange:e=>{b(e)}}),(0,e.createElement)("div",{className:"ystdb-inspector-controls__label"},(0,o.__)("カード枠線","ystandard-blocks")),(0,e.createElement)(_,{label:(0,o.__)("カード枠線色","ystandard-blocks"),value:y.color,onChange:e=>{f(e)}}))),(0,e.createElement)(i.PanelBody,{initialOpen:!1,title:(0,o.__)("タイトル","ystandard-blocks")},(0,e.createElement)(i.BaseControl,null,(0,e.createElement)(i.TextareaControl,{label:(0,o.__)("タイトル","ystandard-blocks"),value:P,onChange:e=>{r({title:e})},help:(0,e.createElement)("div",{className:"ystdb-info__small"},"表示されるタイトルを指定できます。",(0,e.createElement)("br",null),"何も入力しなければ自動で取得されます。")}),(0,e.createElement)("div",{className:"ystdb-inspector-controls__label"},(0,o.__)("タイトル文字色","ystandard-blocks")),(0,e.createElement)(_,{label:(0,o.__)("タイトル文字色","ystandard-blocks"),value:v.color,onChange:e=>{E(e)}}))),(0,e.createElement)(i.PanelBody,{initialOpen:!1,title:(0,o.__)("画像設定","ystandard-blocks")},(0,e.createElement)(i.BaseControl,null,(0,e.createElement)(i.ToggleControl,{label:(0,o.__)("画像を表示する","ystandard-blocks"),onChange:()=>{r({showImage:!R})},checked:R})),(0,e.createElement)(i.BaseControl,null,(0,e.createElement)("div",{className:"ystdb-inspector-controls__label"},(0,o.__)("カスタム画像","ystandard-blocks")),(0,e.createElement)(s.MediaUpload,{onSelect:e=>{r({imageURL:e.url,imageID:e.id,imageAlt:e.alt})},type:["image"],value:A,render:t=>0===A?(0,e.createElement)(i.Button,{isSecondary:!0,onClick:t.open},(0,o.__)("画像を選択","ystandard-blocks")):(0,e.createElement)("div",null,(0,e.createElement)(i.Button,{onClick:t.open,className:"ystdb-mediaupload__preview",style:{padding:0}},(0,e.createElement)("img",{src:j,alt:z})),(0,e.createElement)(i.Button,{isSecondary:!0,onClick:()=>{r({imageURL:"",imageID:0})}},(0,o.__)("画像をクリア","ystandard-blocks")))})),G&&(0,e.createElement)(c.Fragment,null,(0,e.createElement)(i.BaseControl,null,(0,e.createElement)("div",{className:"ystdb-info__small"},"「カード表示タイプ」が「横型」のときに有効な設定です。"),(0,e.createElement)("div",{className:"ystdb-inspector-controls__label"},(0,o.__)("画像サイズ","ystandard-blocks")),(0,e.createElement)("div",{className:"ystdb-btn-selector components-base-control"},g.map((t=>{const n=I||"normal";return(0,e.createElement)(i.Button,{key:t.value,isSecondary:n!==t.value,isPrimary:n===t.value,onClick:()=>{r({imageSize:t.value})}},(0,e.createElement)("span",null,t.label))})))),(0,e.createElement)(i.BaseControl,null,(0,e.createElement)(i.RadioControl,{label:(0,o.__)("画像表示タイプ","ystandard-blocks"),selected:q,options:k,onChange:e=>{r({imageType:e})}})),(0,e.createElement)(i.BaseControl,null,(0,e.createElement)(i.RadioControl,{label:(0,o.__)("画像表示位置","ystandard-blocks"),selected:L,options:C,onChange:e=>{r({imageAlign:e})}})))),(0,e.createElement)(i.PanelBody,{initialOpen:!1,title:(0,o.__)("概要文設定","ystandard-blocks")},(0,e.createElement)(i.BaseControl,null,(0,e.createElement)(i.ToggleControl,{label:(0,o.__)("概要文を表示する","ystandard-blocks"),onChange:()=>{r({showDscr:!U})},checked:U}),(0,e.createElement)(i.RangeControl,{value:F,label:(0,o.__)("概要文の字数","ystandard-blocks"),min:0,max:160,initialPosition:40,allowReset:!0,onChange:e=>{r({dscrCharCount:e||40})}}),(0,e.createElement)(i.TextareaControl,{label:(0,o.__)("概要文","ystandard-blocks"),value:H,onChange:e=>{r({dscr:e})},help:(0,e.createElement)("div",{className:"ystdb-info__small"},"表示される概要文を指定できます。",(0,e.createElement)("br",null),"何も入力しなければ自動で取得されます。")}),(0,e.createElement)("div",{className:"ystdb-inspector-controls__label"},(0,o.__)("概要 文字色","ystandard-blocks")),(0,e.createElement)(_,{label:(0,o.__)("概要 文字色","ystandard-blocks"),value:h.color,onChange:e=>{w(e)}}))),(0,e.createElement)(i.PanelBody,{initialOpen:!1,title:(0,o.__)("ドメイン表示設定","ystandard-blocks")},(0,e.createElement)(i.BaseControl,null,(0,e.createElement)(i.ToggleControl,{label:(0,o.__)("ドメインを表示する","ystandard-blocks"),onChange:()=>{r({showDomain:!M})},checked:M}),(0,e.createElement)("div",{className:"ystdb-inspector-controls__label"},(0,o.__)("ドメイン 文字色","ystandard-blocks")),(0,e.createElement)(_,{label:(0,o.__)("ドメイン 文字色","ystandard-blocks"),value:x.color,onChange:e=>{T(e)}}))),(0,e.createElement)(i.PanelBody,{initialOpen:!1,title:(0,o.__)("キャプション","ystandard-blocks")},(0,e.createElement)(i.BaseControl,null,(0,e.createElement)(i.TextareaControl,{value:W,onChange:e=>{r({caption:e})},help:(0,e.createElement)("div",{className:"ystdb-info__small"},"カード下に表示されるキャプションテキストを設定できます。",(0,e.createElement)("br",null),"※HTMLは使用できません。HTMLを入力しても表示時に削除されます。")})))),(0,e.createElement)("div",{className:a()("ystdb-card__edit")},(d||!B)&&(0,e.createElement)("div",{className:"ystdb-card__edit-container"},(0,e.createElement)(s.URLInput,{label:(0,o.__)("リンクを作成するURLを入力","ystandard-blocks"),className:"ystdb-card__url-input",value:B,autoFocus:!1,onChange:e=>{Y(e)},disableSuggestions:!d,isFullWidth:!0,hasBorder:!0,__nextHasNoMarginBottom:!0})),!!B&&(0,e.createElement)(c.Fragment,null,(0,e.createElement)("div",{className:a()("ystdb-card__preview",{"is-rendered":B})},(0,e.createElement)(m(),{block:"ystdb/card",attributes:n}))))))}));var v=n(556),E=n.n(v);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},h.apply(this,arguments)}var w=(0,e.forwardRef)((function(e,n){var o=e.color,l=void 0===o?"currentColor":o,r=e.size,a=void 0===r?24:r,s=function(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return t().createElement("svg",h({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),t().createElement("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),t().createElement("line",{x1:"1",y1:"10",x2:"23",y2:"10"}))}));w.propTypes={color:E().string,size:E().oneOfType([E().string,E().number])},w.displayName="CreditCard";const x=w,T=window.wp.blocks,B={from:[{type:"block",blocks:["core-embed/wordpress","core/embed"],transform:e=>(0,T.createBlock)("ystdb/card",{url:e.url})}]};(0,T.registerBlockType)("ystdb/card",{title:(0,o.__)("カード","ystandard-blocks"),description:(0,o.__)("カード型リンクを作成するブロック","ystandard-blocks"),icon:(0,e.createElement)(x,{stroke:"#4190be",style:{fill:"none"}}),keywords:[(0,o.__)("card"),(0,o.__)("カード"),(0,o.__)("blogcard"),(0,o.__)("ブログカード"),"card","blogcard"],category:"ystdb",attributes:{url:{type:"string"},linkTarget:{type:"string"},rel:{type:"string"},cardType:{type:"string",default:"horizon"},title:{type:"string"},showImage:{type:"bool",default:!0},imageSize:{type:"string"},imageType:{type:"string"},imageAlign:{type:"string",default:"left"},imageURL:{type:"string"},imageAlt:{type:"string"},imageID:{type:"integer",default:0},showDscr:{type:"bool",default:!0},dscrCharCount:{type:"number",default:80},dscr:{type:"string"},showDomain:{type:"bool",default:!0},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},borderColor:{type:"string"},customBorderColor:{type:"string"},titleColor:{type:"string"},customTitleColor:{type:"string"},dscrColor:{type:"string"},customDscrColor:{type:"string"},domainColor:{type:"string"},customDomainColor:{type:"string"},caption:{type:"string"}},supports:{className:!1,html:!1,align:!1},edit:f,save:()=>null,transforms:B,example:{attributes:{url:"https://wp-ystandard.com/"}}})})()})();