!function(e){var t={};function l(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=t,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(o,a,function(t){return e[t]}.bind(null,a));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=40)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t,l){var o;!function(){"use strict";var l={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var n=typeof o;if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)){if(o.length){var r=a.apply(null,o);r&&e.push(r)}}else if("object"===n)if(o.toString===Object.prototype.toString)for(var c in o)l.call(o,c)&&o[c]&&e.push(c);else e.push(o.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o)}()},,function(e,t,l){"use strict";l.d(t,"a",(function(){return a}));var o=l(1);const a={category:{common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},color:{iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:Object(o.__)("小","ystandard-blocks")},{value:"",label:Object(o.__)("中","ystandard-blocks")},{value:"is-large",label:Object(o.__)("大","ystandard-blocks")}],animationTypes:[{label:Object(o.__)("なし","ystandard-blocks"),value:"none"},{label:Object(o.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"is-small",label:Object(o.__)("小","ystandard-blocks")},{value:"",label:Object(o.__)("中","ystandard-blocks")},{value:"is-large",label:Object(o.__)("大","ystandard-blocks")}]},component:{defaultAvatar:{url:"https://www.gravatar.com/avatar/000000000000000000000000000000?s=128&r=g&d=mp"},fontWeight:[{value:"",label:Object(o._x)("指定無し","component-config","ystandard-blocks")},{value:"normal",label:Object(o._x)("normal","component-config","ystandard-blocks")},{value:"bold",label:Object(o._x)("bold","component-config","ystandard-blocks")},{value:"100",label:Object(o._x)("100","component-config","ystandard-blocks")},{value:"200",label:Object(o._x)("200","component-config","ystandard-blocks")},{value:"300",label:Object(o._x)("300","component-config","ystandard-blocks")},{value:"400",label:Object(o._x)("400","component-config","ystandard-blocks")},{value:"500",label:Object(o._x)("500","component-config","ystandard-blocks")},{value:"600",label:Object(o._x)("600","component-config","ystandard-blocks")},{value:"700",label:Object(o._x)("700","component-config","ystandard-blocks")},{value:"800",label:Object(o._x)("800","component-config","ystandard-blocks")},{value:"900",label:Object(o._x)("900","component-config","ystandard-blocks")}],fontUnit:[{value:"px",label:"px"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"%",label:"%"}],fontStyle:[{value:"",label:Object(o._x)("指定無し","component-config","ystandard-blocks")},{value:"italic",label:Object(o._x)("イタリック体","component-config","ystandard-blocks")}]}}},function(e,t){e.exports=window.React},function(e,t,l){e.exports=l(16)()},,function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.compose},,,,function(e,t){e.exports=window.wp.data},function(e,t,l){"use strict";var o=l(17);function a(){}function n(){}n.resetWarningCache=a,e.exports=function(){function e(e,t,l,a,n,r){if(r!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var l={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:a};return l.PropTypes=l,l}},function(e,t,l){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,,,,,,,,,,,,,,,,,,,,,,function(e,t,l){"use strict";l.r(t);var o=l(0),a=l(6),n=l(4),r=l.n(n),c=l(3),s=l(2);const i=[{label:"横型",value:"horizon"},{label:"縦型",value:"vertical"},{label:"モバイルでも横型",value:"fixed-horizon"}],b=[{label:"小",value:"small"},{label:"通常",value:"normal"},{label:"大",value:"large"}],d=[{label:"テキストに合わせる",value:"fitText"},{label:"画像をすべて表示",value:"showAll"}],u=[{label:"左",value:"left"},{label:"右",value:"right"}];var m=l(11),p=l(15),y=l(1),O=Object(m.compose)([Object(c.withColors)("backgroundColor","borderColor",{titleColor:"color",dscrColor:"color",domainColor:"color"})])(e=>{const{attributes:t,setAttributes:l,isSelected:n,backgroundColor:m,setBackgroundColor:O,borderColor:g,setBorderColor:_,titleColor:j,setTitleColor:f,dscrColor:v,setDscrColor:C,domainColor:k,setDomainColor:h}=e,{url:E,linkTarget:w,rel:x,cardType:T,title:B,showImage:P,imageSize:S,imageType:R,imageAlign:N,imageURL:D,imageAlt:I,imageID:z,showDscr:L,dscrCharCount:A,dscr:U,showDomain:F}=t,{colors:M}=Object(p.select)("core/block-editor").getSettings(),W=T||"horizon",q=R||"fitText",H="horizon"===W||"fixed-horizon"===W,V=e=>{l({url:e}),e&&-1===e.indexOf(ystdb.homeUrl)?l({linkTarget:"_blank",rel:a.a.button.newTabRel}):l({linkTarget:void 0,rel:void 0})};return Object(o.createElement)("div",{className:"wp-block-html"},Object(o.createElement)(o.Fragment,null,Object(o.createElement)(c.InspectorControls,null,Object(o.createElement)(s.PanelBody,{title:Object(y.__)("リンク設定","ystandard-blocks")},Object(o.createElement)(s.BaseControl,null,Object(o.createElement)(c.URLInput,{label:Object(y.__)("Link"),className:"ystdb-card__url-input",value:E,autoFocus:!1,onChange:e=>{V(e)},disableSuggestions:!n,isFullWidth:!0,hasBorder:!0})),Object(o.createElement)(s.BaseControl,null,Object(o.createElement)(s.ToggleControl,{label:Object(y.__)("Open in new tab"),onChange:e=>{const t=e?"_blank":void 0;let o=x;t&&!x?o=a.a.button.newTabRel:t||x!==a.a.button.newTabRel||(o=void 0),l({linkTarget:t,rel:o})},checked:"_blank"===w}),Object(o.createElement)(s.TextControl,{label:Object(y.__)("Link rel"),value:x||"",onChange:e=>{l({rel:e})}}))),Object(o.createElement)(s.PanelBody,{title:Object(y.__)("カード表示設定","ystandard-blocks")},Object(o.createElement)(s.BaseControl,null,Object(o.createElement)(s.RadioControl,{label:Object(y.__)("カード表示タイプ","ystandard-blocks"),selected:W,options:i,onChange:e=>{l({cardType:e})}}),Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(y.__)("カード背景色","ystandard-blocks")),Object(o.createElement)(s.ColorPalette,{colors:M,disableCustomColors:!1,onChange:e=>{O(e)},value:m.color}),Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(y.__)("カード枠線","ystandard-blocks")),Object(o.createElement)(s.ColorPalette,{colors:M,disableCustomColors:!1,onChange:e=>{_(e)},value:g.color}))),Object(o.createElement)(s.PanelBody,{initialOpen:!1,title:Object(y.__)("タイトル","ystandard-blocks")},Object(o.createElement)(s.BaseControl,null,Object(o.createElement)(s.TextareaControl,{label:Object(y.__)("タイトル","ystandard-blocks"),value:B,onChange:e=>{l({title:e})},help:Object(o.createElement)("div",{className:"ystdb-info__small"},"表示されるタイトルを指定できます。",Object(o.createElement)("br",null),"何も入力しなければ自動で取得されます。")}),Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(y.__)("タイトル文字色","ystandard-blocks")),Object(o.createElement)(s.ColorPalette,{colors:M,disableCustomColors:!1,onChange:e=>{f(e)},value:j.color}))),Object(o.createElement)(s.PanelBody,{initialOpen:!1,title:Object(y.__)("画像設定","ystandard-blocks")},Object(o.createElement)(s.BaseControl,null,Object(o.createElement)(s.ToggleControl,{label:Object(y.__)("画像を表示する","ystandard-blocks"),onChange:()=>{l({showImage:!P})},checked:P})),Object(o.createElement)(s.BaseControl,null,Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(y.__)("カスタム画像","ystandard-blocks")),Object(o.createElement)(c.MediaUpload,{onSelect:e=>{l({imageURL:e.url,imageID:e.id,imageAlt:e.alt})},type:["image"],value:z,render:e=>0===z?Object(o.createElement)(s.Button,{isSecondary:!0,onClick:e.open},Object(y.__)("画像を選択","ystandard-blocks")):Object(o.createElement)("div",null,Object(o.createElement)(s.Button,{onClick:e.open,className:"ystdb-mediaupload__preview",style:{padding:0}},Object(o.createElement)("img",{src:D,alt:I})),Object(o.createElement)(s.Button,{isSecondary:!0,onClick:()=>{l({imageURL:"",imageID:0})}},Object(y.__)("画像をクリア","ystandard-blocks")))})),H&&Object(o.createElement)(o.Fragment,null,Object(o.createElement)(s.BaseControl,null,Object(o.createElement)("div",{className:"ystdb-info__small"},"「カード表示タイプ」が「横型」のときに有効な設定です。"),Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(y.__)("画像サイズ","ystandard-blocks")),Object(o.createElement)("div",{className:"ystdb-btn-selector components-base-control"},b.map(e=>{const t=S||"normal";return Object(o.createElement)(s.Button,{key:e.value,isSecondary:t!==e.value,isPrimary:t===e.value,onClick:()=>{l({imageSize:e.value})}},Object(o.createElement)("span",null,e.label))}))),Object(o.createElement)(s.BaseControl,null,Object(o.createElement)(s.RadioControl,{label:Object(y.__)("画像表示タイプ","ystandard-blocks"),selected:q,options:d,onChange:e=>{l({imageType:e})}})),Object(o.createElement)(s.BaseControl,null,Object(o.createElement)(s.RadioControl,{label:Object(y.__)("画像表示位置","ystandard-blocks"),selected:N,options:u,onChange:e=>{l({imageAlign:e})}})))),Object(o.createElement)(s.PanelBody,{initialOpen:!1,title:Object(y.__)("概要文設定","ystandard-blocks")},Object(o.createElement)(s.BaseControl,null,Object(o.createElement)(s.ToggleControl,{label:Object(y.__)("概要文を表示する","ystandard-blocks"),onChange:()=>{l({showDscr:!L})},checked:L}),Object(o.createElement)(s.RangeControl,{value:A,label:Object(y.__)("概要文の字数","ystandard-blocks"),min:0,max:160,initialPosition:40,allowReset:!0,onChange:e=>{l({dscrCharCount:e||40})}}),Object(o.createElement)(s.TextareaControl,{label:Object(y.__)("概要文","ystandard-blocks"),value:U,onChange:e=>{l({dscr:e})},help:Object(o.createElement)("div",{className:"ystdb-info__small"},"表示される概要文を指定できます。",Object(o.createElement)("br",null),"何も入力しなければ自動で取得されます。")}),Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(y.__)("概要 文字色","ystandard-blocks")),Object(o.createElement)(s.ColorPalette,{colors:M,disableCustomColors:!1,onChange:e=>{C(e)},value:v.color}))),Object(o.createElement)(s.PanelBody,{initialOpen:!1,title:Object(y.__)("ドメイン表示設定","ystandard-blocks")},Object(o.createElement)(s.BaseControl,null,Object(o.createElement)(s.ToggleControl,{label:Object(y.__)("ドメインを表示する","ystandard-blocks"),onChange:()=>{l({showDomain:!F})},checked:F}),Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(y.__)("ドメイン 文字色","ystandard-blocks")),Object(o.createElement)(s.ColorPalette,{colors:M,disableCustomColors:!1,onChange:e=>{h(e)},value:k.color})))),Object(o.createElement)("div",{className:r()("ystdb-card__edit")},(n||!E)&&Object(o.createElement)(o.Fragment,null,Object(o.createElement)(c.URLInput,{label:Object(y.__)("リンクを作成するURLを入力","ystandard-blocks"),className:"ystdb-card__url-input",value:E,autoFocus:!1,onChange:e=>{V(e)},disableSuggestions:!n,isFullWidth:!0,hasBorder:!0})),!!E&&Object(o.createElement)("div",{className:r()("ystdb-card__preview",{"is-rendered":E})},Object(o.createElement)(s.ServerSideRender,{block:"ystdb/card",attributes:t})))))}),g=l(7),_=l.n(g),j=l(8),f=l.n(j);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o])}return e}).apply(this,arguments)}var C=Object(g.forwardRef)((function(e,t){var l=e.color,o=void 0===l?"currentColor":l,a=e.size,n=void 0===a?24:a,r=function(e,t){if(null==e)return{};var l,o,a=function(e,t){if(null==e)return{};var l,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)l=n[o],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)l=n[o],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}(e,["color","size"]);return _.a.createElement("svg",v({ref:t,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),_.a.createElement("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),_.a.createElement("line",{x1:"1",y1:"10",x2:"23",y2:"10"}))}));C.propTypes={color:f.a.string,size:f.a.oneOfType([f.a.string,f.a.number])},C.displayName="CreditCard";var k=C,h=l(10),E={from:[{type:"block",blocks:["core-embed/wordpress","core/embed"],transform:e=>Object(h.createBlock)("ystdb/card",{url:e.url})}]};Object(h.registerBlockType)("ystdb/card",{title:Object(y.__)("カード","ystandard-blocks"),description:Object(y.__)("カード型リンクを作成するブロック","ystandard-blocks"),icon:Object(o.createElement)(k,{stroke:a.a.color.iconForeground,style:{fill:"none"}}),keywords:[Object(y.__)("card"),Object(y.__)("カード"),Object(y.__)("blogcard"),Object(y.__)("ブログカード"),"card","blogcard"],category:a.a.category.common,attributes:{url:{type:"string"},linkTarget:{type:"string"},rel:{type:"string"},cardType:{type:"string",default:"horizon"},title:{type:"string"},showImage:{type:"bool",default:!0},imageSize:{type:"string"},imageType:{type:"string"},imageAlign:{type:"string",default:"left"},imageURL:{type:"string"},imageAlt:{type:"string"},imageID:{type:"integer",default:0},showDscr:{type:"bool",default:!0},dscrCharCount:{type:"number",default:80},dscr:{type:"string"},showDomain:{type:"bool",default:!0},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},borderColor:{type:"string"},customBorderColor:{type:"string"},titleColor:{type:"string"},customTitleColor:{type:"string"},dscrColor:{type:"string"},customDscrColor:{type:"string"},domainColor:{type:"string"},customDomainColor:{type:"string"}},supports:{className:!1,html:!1,align:!1},edit:O,save:()=>null,transforms:E,example:{attributes:{url:"https://wp-ystandard.com/"}}})}]);