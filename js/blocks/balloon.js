!function(e){var t={};function o(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=32)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t,o){var a;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)){if(a.length){var n=r.apply(null,a);n&&e.push(n)}}else if("object"===l)if(a.toString===Object.prototype.toString)for(var c in a)o.call(a,c)&&a[c]&&e.push(c);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},,function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var a=o(1);const r={category:{common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},color:{iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:Object(a.__)("小","ystandard-blocks")},{value:"",label:Object(a.__)("中","ystandard-blocks")},{value:"is-large",label:Object(a.__)("大","ystandard-blocks")}],animationTypes:[{label:Object(a.__)("なし","ystandard-blocks"),value:"none"},{label:Object(a.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"is-small",label:Object(a.__)("小","ystandard-blocks")},{value:"",label:Object(a.__)("中","ystandard-blocks")},{value:"is-large",label:Object(a.__)("大","ystandard-blocks")}]},component:{defaultAvatar:{url:"https://www.gravatar.com/avatar/000000000000000000000000000000?s=128&r=g&d=mp"},fontWeight:[{value:"",label:Object(a._x)("指定無し","component-config","ystandard-blocks")},{value:"normal",label:Object(a._x)("通常(normal)","component-config","ystandard-blocks")},{value:"bold",label:Object(a._x)("太字(bold)","component-config","ystandard-blocks")},{value:"100",label:Object(a._x)("100","component-config","ystandard-blocks")},{value:"200",label:Object(a._x)("200","component-config","ystandard-blocks")},{value:"300",label:Object(a._x)("300","component-config","ystandard-blocks")},{value:"400",label:Object(a._x)("400","component-config","ystandard-blocks")},{value:"500",label:Object(a._x)("500","component-config","ystandard-blocks")},{value:"600",label:Object(a._x)("600","component-config","ystandard-blocks")},{value:"700",label:Object(a._x)("700","component-config","ystandard-blocks")},{value:"800",label:Object(a._x)("800","component-config","ystandard-blocks")},{value:"900",label:Object(a._x)("900","component-config","ystandard-blocks")}],fontUnit:[{value:"px",label:"px"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"%",label:"%"}],fontStyle:[{value:"",label:Object(a._x)("指定無し","component-config","ystandard-blocks")},{value:"italic",label:Object(a._x)("イタリック体","component-config","ystandard-blocks")}],borderStyles:[{value:"solid",label:Object(a._x)("直線","component-config","ystandard-blocks")},{value:"dotted",label:Object(a._x)("点線","component-config","ystandard-blocks")},{value:"dashed",label:Object(a._x)("破線","component-config","ystandard-blocks")},{value:"double",label:Object(a._x)("二重線","component-config","ystandard-blocks")}]}}},function(e,t){e.exports=window.React},function(e,t,o){e.exports=o(16)()},,function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.compose},,,,function(e,t){e.exports=window.wp.data},function(e,t,o){"use strict";var a=o(17);function r(){}function l(){}l.resetWarningCache=r,e.exports=function(){function e(e,t,o,r,l,n){if(n!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:r};return o.PropTypes=o,o}},function(e,t,o){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"a",(function(){return l}));var a=o(6);const r=e=>a.a.component[e],l=(e,t)=>window.ystdb&&"object"==typeof window.ystdb&&window.ystdb.hasOwnProperty(e)?window.ystdb[e]:t},function(e,t,o){"use strict";var a=o(0);t.a=({children:e})=>Object(a.createElement)("div",{className:"ystdb__horizon-buttons"},e)},,,,,,,,,,,,,function(e,t,o){"use strict";o.r(t);var a=o(0),r=o(6),l=o(4),n=o.n(l),c=o(1),s=o(2),i=o(18);const b={avatarName:{type:"string",source:"html",selector:".ystdb-balloon__name"},avatarNameColor:{type:"string"},customAvatarNameColor:{type:"string"},avatarURL:{type:"string",source:"attribute",selector:".ystdb-balloon__avatar-image",attribute:"src",default:Object(i.b)("defaultAvatar").url},avatarAlt:{type:"string",source:"attribute",selector:".ystdb-balloon__avatar-image",attribute:"alt"},avatarID:{type:"integer",default:0},avatarSize:{type:"string",default:"large"},avatarBorderColor:{type:"string"},customAvatarBorderColor:{type:"string"},avatarBorderWidth:{type:"integer",default:0},avatarBorderRadius:{type:"integer"},text:{type:"string",source:"html",selector:".ystdb-balloon__text"},balloonPosition:{type:"string",default:"right"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},balloonBorderColor:{type:"string"},customBalloonBorderColor:{type:"string"},balloonBorderWidth:{type:"integer",default:1},textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"string"},balloonType:{type:"string",default:"serif"},verticalAlign:{type:"string",default:"top"}},d=[{label:Object(c.__)("会話","ystandard-blocks"),value:"serif"},{label:Object(c.__)("会話(枠線)","ystandard-blocks"),value:"serif-border"},{label:Object(c.__)("考え中","ystandard-blocks"),value:"think"}],u=[{label:Object(c.__)("右","ystandard-blocks"),value:"right"},{label:Object(c.__)("左","ystandard-blocks"),value:"left"}],m=[{label:Object(c.__)("小","ystandard-blocks"),value:"small"},{label:Object(c.__)("大","ystandard-blocks"),value:"large"}],v=Object(a.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(a.createElement)(s.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(a.createElement)(s.Path,{d:"M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"})),y=Object(a.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(a.createElement)(s.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(a.createElement)(s.Path,{d:"M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"})),p={top:{icon:Object(a.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(a.createElement)(s.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(a.createElement)(s.Path,{d:"M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"})),title:Object(c._x)("上揃え","ystandard-blocks")},center:{icon:y,title:Object(c._x)("中央揃え","ystandard-blocks")},bottom:{icon:v,title:Object(c._x)("下揃え","ystandard-blocks")}};var g=o(3),O=o(15),j=o(11),f=o(7),_=o.n(f),C=o(8),h=o.n(C);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}var x=Object(f.forwardRef)((function(e,t){var o=e.color,a=void 0===o?"currentColor":o,r=e.size,l=void 0===r?24:r,n=function(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)o=l[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)o=l[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(e,["color","size"]);return _.a.createElement("svg",k({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),_.a.createElement("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),_.a.createElement("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}))}));x.propTypes={color:h.a.string,size:h.a.oneOfType([h.a.string,h.a.number])},x.displayName="Book";var E=x,B=e=>{const{url:t,target:o,text:r,topRight:l}=e,c=r||"マニュアルを見る",s=o||"_blank";return Object(a.createElement)("div",{className:n()("ystdb-component-manual-link",{"is-top-right":l})},Object(a.createElement)("a",{href:t,target:s},Object(a.createElement)("span",{className:"ystdb-component-manual-link__icon"},Object(a.createElement)(E,{size:12})),Object(a.createElement)("span",{className:"ystdb-component-manual-link__text"},c)))},N=o(19),w=Object(j.compose)([Object(g.withColors)("backgroundColor",{textColor:"color",avatarNameColor:"color",avatarBorderColor:"borderColor",balloonBorderColor:"borderColor"}),Object(g.withFontSizes)("fontSize")])((function(e){const{textColor:t,backgroundColor:o,balloonBorderColor:r,avatarNameColor:l,avatarBorderColor:b,setTextColor:v,setBackgroundColor:y,setBalloonBorderColor:j,setAvatarNameColor:f,setAvatarBorderColor:_,attributes:C,setAttributes:h,fontSize:k,setFontSize:x,className:E,isSelected:w}=e,{avatarName:S,avatarURL:z,avatarAlt:P,avatarID:A,avatarSize:R,avatarBorderWidth:T,avatarBorderRadius:W,text:F,balloonBorderWidth:M,balloonPosition:I,balloonType:L,verticalAlign:U}=C,H=["top","center","bottom"],V=Object(i.b)("defaultAvatar").url,D=Object(i.a)("balloonImages",[]),G=Object(i.a)("balloonOption",{}),$="serif-border"===L,q=p[U],Y=p.top,{colors:J}=Object(O.select)("core/block-editor").getSettings(),K=n()(E,"ystdb-balloon",{["is-vertically-aligned-"+U]:U,["is-balloon-position-"+I]:I}),Q=n()("ystdb-balloon__avatar",{["is-size-"+R]:R}),X=n()("ystdb-balloon__name",{"has-text-color":l.color,[l.class]:l.class}),Z={color:l.color},ee=n()("ystdb-balloon__avatar-image",{"has-border-color":b.color,[b.class]:b.class,"has-border":0<T}),te={borderColor:b.color,borderWidth:0<T?T:void 0,borderRadius:W},oe=n()("ystdb-balloon__body",{[o.class]:o.class,"has-background":o.color,[r.class]:r.class,"has-border-color":r.color,["is-"+U]:U,["is-"+I]:I,["is-"+L]:L}),ae={backgroundColor:o.color,borderColor:r.color,borderWidth:$?M:void 0},re=n()("ystdb-ystdb-balloon__text",{[t.class]:t.class,"has-text-color":t.color,[k.class]:k.class}),le={color:t.color,fontSize:k.size?k.size:void 0},ne=n()("ystdb-balloon__serif-triangle",{[o.class]:o.class,"has-background":o.color,[r.class]:r.class,"has-border-color":r.color}),ce=6-M,se={backgroundColor:o.color,borderColor:r.color,borderWidth:M,right:"right"===I?`calc(100% - ${ce}px)`:void 0,left:"left"===I?`calc(100% - ${ce}px)`:void 0};return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(g.BlockControls,null,Object(a.createElement)(s.ToolbarGroup,null,Object(a.createElement)(s.ToolbarItem,{label:Object(c._x)("縦位置の変更","ystandard-blocks")},e=>Object(a.createElement)(s.DropdownMenu,{toggleProps:e,isCollapsed:!0,icon:q?q.icon:Y.icon,controls:H.map(e=>({...p[e],isActive:U===e,onClick:()=>h({verticalAlign:U===e?void 0:e})}))})))),Object(a.createElement)(g.InspectorControls,null,Object(a.createElement)(s.PanelBody,{title:Object(c.__)("吹き出し設定","ystandard-blocks")},Object(a.createElement)(s.BaseControl,{id:"balloon-position",label:Object(c.__)("吹き出しの向き","ystandard-blocks")},Object(a.createElement)(N.a,null,u.map(e=>Object(a.createElement)(s.Button,{key:e.value,isSecondary:I!==e.value,isPrimary:I===e.value,onClick:()=>{h({balloonPosition:e.value})}},e.label)))),Object(a.createElement)(s.BaseControl,{id:"balloon-type",label:Object(c.__)("吹き出しタイプ","ystandard-blocks")},Object(a.createElement)(N.a,null,d.map(e=>Object(a.createElement)(s.Button,{key:e.value,isSecondary:L!==e.value,isPrimary:L===e.value,onClick:()=>{"serif-border"===e.value&&"serif-border"!==L&&y(G.contentBackground),"serif-border"!==e.value&&j(o.color),h({balloonType:e.value})}},e.label))))),Object(a.createElement)(s.PanelBody,{title:Object(c.__)("登録済みアバター画像","ystandard-blocks")},Object(a.createElement)(s.BaseControl,null,0>=D.length?Object(a.createElement)("div",null,Object(a.createElement)("p",null,"登録済みのアバター画像はありません。"),Object(a.createElement)("p",null,"「yStandard Blocks」設定画面の「吹き出し登録」からよく使うアバター画像を登録できます。"),Object(a.createElement)(B,{url:"https://wp-ystandard.com/manual/ystdb-balloon-avatar-setting/"})):Object(a.createElement)("div",{className:"ystdb-avatar-list"},D.map(e=>Object(a.createElement)(s.Button,{key:e.id,isPrimary:A===e.id&&S===e.name,onClick:()=>{h({avatarID:e.id,avatarName:e.name,avatarURL:e.url,avatarAlt:e.name})}},Object(a.createElement)("span",null,Object(a.createElement)("img",{className:"ystdb-avatar-list__image",src:e.url,alt:e.name}),!!e.name&&Object(a.createElement)("span",{className:"ystdb-avatar-list__name"},e.name))))))),Object(a.createElement)(s.PanelBody,{title:Object(c.__)("アバター設定","ystandard-blocks")},Object(a.createElement)(s.BaseControl,{id:"avatar-size",label:Object(c.__)("アバターサイズ","ystandard-blocks")},Object(a.createElement)(N.a,null,m.map(e=>Object(a.createElement)(s.Button,{key:e.value,isSecondary:R!==e.value,isPrimary:R===e.value,onClick:()=>{h({avatarSize:e.value})}},Object(a.createElement)("span",null,e.label))))),Object(a.createElement)(s.BaseControl,null,Object(a.createElement)(s.RangeControl,{value:W,label:Object(c.__)("アバター画像の角丸","ystandard-blocks"),min:0,max:100,initialPosition:40,allowReset:!0,onChange:e=>{h({avatarBorderRadius:e})}})),Object(a.createElement)(s.BaseControl,null,Object(a.createElement)(s.RangeControl,{value:T,label:Object(c.__)("アバター画像の枠線太さ","ystandard-blocks"),min:0,max:10,initialPosition:0,allowReset:!0,onChange:e=>{h({avatarBorderWidth:e})}})),Object(a.createElement)(s.BaseControl,{id:"avatar-border-color",label:Object(c.__)("アバター画像枠色","ystandard-blocks")},Object(a.createElement)(s.ColorPalette,{colors:J,disableCustomColors:!1,onChange:e=>{_(e)},value:b.color})),Object(a.createElement)(s.BaseControl,{id:"avatar-text-color",label:Object(c.__)("アバター名文字色","ystandard-blocks")},Object(a.createElement)(s.ColorPalette,{colors:J,disableCustomColors:!1,onChange:e=>{f(e)},value:l.color}))),Object(a.createElement)(s.PanelBody,{title:Object(c.__)("吹き出し設定","ystandard-blocks")},Object(a.createElement)(s.BaseControl,null,Object(a.createElement)(g.FontSizePicker,{label:Object(c.__)("文字サイズ","ystandard-blocks"),value:k.size,onChange:e=>{x(e)}})),Object(a.createElement)(s.BaseControl,{id:"balloon-background",label:Object(c.__)("吹き出し背景色","ystandard-blocks")},Object(a.createElement)(s.ColorPalette,{colors:J,disableCustomColors:!1,onChange:e=>{y(e),$||j(e)},value:o.color})),Object(a.createElement)(s.BaseControl,{id:"balloon-text-color",label:Object(c.__)("吹き出し文字色","ystandard-blocks")},Object(a.createElement)(s.ColorPalette,{colors:J,disableCustomColors:!1,onChange:e=>{v(e)},value:t.color}),Object(a.createElement)(g.ContrastChecker,{backgroundColor:o.color,textColor:t.color})),$&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)(s.BaseControl,{id:"serif-border-color",label:Object(c.__)("吹き出し枠線色","ystandard-blocks")},Object(a.createElement)(s.ColorPalette,{colors:J,disableCustomColors:!1,onChange:e=>{j(e)},value:r.color})),Object(a.createElement)(s.BaseControl,null,Object(a.createElement)(s.RangeControl,{value:M,label:Object(c.__)("吹き出し枠線太さ","ystandard-blocks"),min:1,max:4,initialPosition:1,allowReset:!0,onChange:e=>{h({balloonBorderWidth:e})}}))))),Object(a.createElement)("div",{className:K},Object(a.createElement)("figure",{className:Q},Object(a.createElement)(g.MediaUpload,{onSelect:e=>{h({avatarURL:e.url,avatarID:e.id,avatarAlt:e.alt})},type:["image"],value:A,render:e=>z&&V!==z?Object(a.createElement)("div",{className:ee,style:te},Object(a.createElement)(s.Button,{onClick:()=>{h({avatarID:0,avatarURL:"",avatarAlt:""})},className:"ystdb-mediaupload__preview is-show-text",style:{padding:0}},Object(a.createElement)("img",{src:z,alt:P}))):Object(a.createElement)("div",{className:ee,style:te},Object(a.createElement)(s.Button,{onClick:e.open,className:"ystdb-mediaupload__preview is-no-image"},Object(a.createElement)("img",{src:V,alt:""})))}),(w||S)&&Object(a.createElement)("figcaption",{className:X},Object(a.createElement)(s.TextControl,{value:S,className:"ystdb-balloon__name--edit",onChange:e=>{h({avatarName:e})},style:Z,placeholder:"名前...","aria-label":Object(c.__)("Name")}))),Object(a.createElement)("div",{className:oe,style:ae},Object(a.createElement)(g.RichText,{tagName:"p",placeholder:Object(c.__)("Add text…"),value:F,onChange:e=>h({text:e}),withoutInteractiveFormatting:!0,className:re,style:le}),$&&Object(a.createElement)("div",{className:ne,style:se,"aria-hidden":!0}))))}));function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}var z=Object(f.forwardRef)((function(e,t){var o=e.color,a=void 0===o?"currentColor":o,r=e.size,l=void 0===r?24:r,n=function(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)o=l[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)o=l[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(e,["color","size"]);return _.a.createElement("svg",S({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),_.a.createElement("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}))}));z.propTypes={color:h.a.string,size:h.a.oneOfType([h.a.string,h.a.number])},z.displayName="MessageSquare";var P=z;const A=[{attributes:{avatarName:{type:"string",source:"html",selector:".ystdb-balloon__name"},avatarNameColor:{type:"string"},customAvatarNameColor:{type:"string"},avatarURL:{type:"string",source:"attribute",selector:".ystdb-balloon__avatar-image",attribute:"src",default:Object(i.b)("defaultAvatar").url},avatarAlt:{type:"string",source:"attribute",selector:".ystdb-balloon__avatar-image",attribute:"alt"},avatarID:{type:"integer",default:0},avatarSize:{type:"string",default:"large"},avatarBorderColor:{type:"string"},customAvatarBorderColor:{type:"string"},avatarBorderWidth:{type:"integer",default:0},avatarBorderRadius:{type:"integer"},text:{type:"string",source:"html",selector:".ystdb-balloon__text"},balloonPosition:{type:"string",default:"right"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},balloonBorderColor:{type:"string"},customBalloonBorderColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"},balloonType:{type:"string",default:"serif"},verticalAlign:{type:"string",default:"top"}},supports:{align:!1,className:!1},migrate(e){let t=e.customFontSize;return"number"==typeof t&&(t=t.toString().replace("px","")+"px"),{...e,customFontSize:t}},save({attributes:e}){const{className:t,textColor:o,customTextColor:r,backgroundColor:l,customBackgroundColor:c,balloonBorderColor:s,customBalloonBorderColor:i,avatarNameColor:b,customAvatarNameColor:d,avatarBorderColor:u,customAvatarBorderColor:m,fontSize:v,customFontSize:y,avatarName:p,avatarURL:O,avatarAlt:j,avatarSize:f,avatarBorderWidth:_,avatarBorderRadius:C,text:h,balloonPosition:k,balloonType:x,verticalAlign:E}=e,B=Object(g.getColorClassName)("color",b),N=Object(g.getColorClassName)("border-color",u),w=Object(g.getColorClassName)("color",o),S=Object(g.getFontSizeClass)(v),z=Object(g.getColorClassName)("background-color",l),P=Object(g.getColorClassName)("border-color",s),A=n()(t,"ystdb-balloon",{["is-vertically-aligned-"+E]:E,["is-balloon-position-"+k]:k}),R=n()("ystdb-balloon__avatar",{["is-size-"+f]:f}),T=n()("ystdb-balloon__avatar-image",{"has-border-color":N||m,[N]:N,"has-border":0<_}),W={borderColor:m,borderWidth:0<_?_:void 0,borderRadius:C},F=j||p,M=n()("ystdb-balloon__name",{[B]:B,"has-text-color":d||B}),I={color:d},L=n()("ystdb-balloon__body",{[z]:z,"has-background":z||c,[P]:P,"has-border-color":P||i,["is-"+E]:E,["is-"+k]:k,["is-"+x]:x}),U={backgroundColor:c,borderColor:i},H=n()("ystdb-balloon__text",{[w]:w,"has-text-color":o||r,[S]:S}),V={color:w?void 0:r,fontSize:!S&&y?y+"px":void 0};return Object(a.createElement)("div",{className:A},Object(a.createElement)("figure",{className:R},Object(a.createElement)("img",{className:T,style:W,src:O,alt:F}),p&&Object(a.createElement)("figcaption",{className:M,style:I},p)),Object(a.createElement)("div",{className:L,style:U},Object(a.createElement)(g.RichText.Content,{tagName:"p",className:H,style:V,value:h})))}},{attributes:{avatarName:{type:"string",source:"html",selector:".ystdb-balloon__name"},avatarNameColor:{type:"string"},customAvatarNameColor:{type:"string"},avatarURL:{type:"string",source:"attribute",selector:".ystdb-balloon__avatar-image",attribute:"src",default:Object(i.b)("defaultAvatar").url},avatarAlt:{type:"string",source:"attribute",selector:".ystdb-balloon__avatar-image",attribute:"alt"},avatarID:{type:"integer",default:0},avatarSize:{type:"string",default:"large"},avatarBorderColor:{type:"string"},customAvatarBorderColor:{type:"string"},avatarBorderWidth:{type:"integer",default:0},avatarBorderRadius:{type:"integer"},text:{type:"string",source:"html",selector:".ystdb-balloon__text"},balloonPosition:{type:"string",default:"right"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},balloonBorderColor:{type:"string"},customBalloonBorderColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"string"},balloonType:{type:"string",default:"serif"},verticalAlign:{type:"string",default:"top"}},supports:{align:!1,className:!1},migrate(e){let t=e.customFontSize;return"number"==typeof t&&(t=t.toString().replace("px","")+"px"),{...e,customFontSize:t}},save({attributes:e}){const{className:t,textColor:o,customTextColor:r,backgroundColor:l,customBackgroundColor:c,balloonBorderColor:s,customBalloonBorderColor:i,avatarNameColor:b,customAvatarNameColor:d,avatarBorderColor:u,customAvatarBorderColor:m,fontSize:v,customFontSize:y,avatarName:p,avatarURL:O,avatarAlt:j,avatarSize:f,avatarBorderWidth:_,avatarBorderRadius:C,text:h,balloonPosition:k,balloonType:x,verticalAlign:E}=e,B=Object(g.getColorClassName)("color",b),N=Object(g.getColorClassName)("border-color",u),w=Object(g.getColorClassName)("color",o),S=Object(g.getFontSizeClass)(v),z=Object(g.getColorClassName)("background-color",l),P=Object(g.getColorClassName)("border-color",s),A=n()(t,"ystdb-balloon",{["is-vertically-aligned-"+E]:E,["is-balloon-position-"+k]:k}),R=n()("ystdb-balloon__avatar",{["is-size-"+f]:f}),T=n()("ystdb-balloon__avatar-image",{"has-border-color":N||m,[N]:N,"has-border":0<_}),W={borderColor:m,borderWidth:0<_?_:void 0,borderRadius:C},F=j||p,M=n()("ystdb-balloon__name",{[B]:B,"has-text-color":d||B}),I={color:d},L=n()("ystdb-balloon__body",{[z]:z,"has-background":z||c,[P]:P,"has-border-color":P||i,["is-"+E]:E,["is-"+k]:k,["is-"+x]:x}),U={backgroundColor:c,borderColor:i},H=n()("ystdb-balloon__text",{[w]:w,"has-text-color":o||r,[S]:S}),V={color:w?void 0:r,fontSize:!S&&y?y:void 0};return Object(a.createElement)("div",{className:A},Object(a.createElement)("figure",{className:R},Object(a.createElement)("img",{className:T,style:W,src:O,alt:F}),p&&Object(a.createElement)("figcaption",{className:M,style:I},p)),Object(a.createElement)("div",{className:L,style:U},Object(a.createElement)(g.RichText.Content,{tagName:"p",className:H,style:V,value:h})))}}];var R=o(10);Object(R.registerBlockType)("ystdb/balloon",{title:Object(c.__)("吹き出し","ystandard-blocks"),description:Object(c.__)("吹き出しブロック","ystandard-blocks"),icon:Object(a.createElement)(P,{stroke:r.a.color.iconForeground,style:{fill:"none"}}),keywords:[Object(c.__)("balloon"),Object(c.__)("吹き出し"),"balloon"],category:r.a.category.common,attributes:b,supports:{align:!1,className:!1},edit:w,save:function({attributes:e}){const{className:t,textColor:o,customTextColor:r,backgroundColor:l,customBackgroundColor:c,balloonBorderColor:s,customBalloonBorderColor:i,balloonBorderWidth:b,avatarNameColor:d,customAvatarNameColor:u,avatarBorderColor:m,customAvatarBorderColor:v,fontSize:y,customFontSize:p,avatarName:O,avatarURL:j,avatarAlt:f,avatarSize:_,avatarBorderWidth:C,avatarBorderRadius:h,text:k,balloonPosition:x,balloonType:E,verticalAlign:B}=e,N=Object(g.getColorClassName)("color",d),w=Object(g.getColorClassName)("border-color",m),S=Object(g.getColorClassName)("color",o),z=Object(g.getFontSizeClass)(y),P=Object(g.getColorClassName)("background-color",l),A=Object(g.getColorClassName)("border-color",s),R="serif-border"===E,T=n()(t,"ystdb-balloon",{["is-vertically-aligned-"+B]:B,["is-balloon-position-"+x]:x}),W=n()("ystdb-balloon__avatar",{["is-size-"+_]:_}),F=n()("ystdb-balloon__avatar-image",{"has-border-color":w||v,[w]:w,"has-border":0<C}),M={borderColor:v,borderWidth:0<C?C:void 0,borderRadius:h},I=f||O,L=n()("ystdb-balloon__name",{[N]:N,"has-text-color":u||N}),U={color:u},H=n()("ystdb-balloon__body",{[P]:P,"has-background":P||c,[A]:A,"has-border-color":A||i,["is-"+B]:B,["is-"+x]:x,["is-"+E]:E}),V={backgroundColor:c,borderColor:i,borderWidth:R?b:void 0},D=n()("ystdb-balloon__text",{[S]:S,"has-text-color":o||r,[z]:z}),G={color:S?void 0:r,fontSize:!z&&p?p:void 0},$=n()("ystdb-balloon__serif-triangle",{[P]:P,"has-background":P||c,[A]:A,"has-border-color":A||i}),q=6-b,Y={backgroundColor:c,borderColor:i,borderWidth:b,right:"right"===x?`calc(100% - ${q}px)`:void 0,left:"left"===x?`calc(100% - ${q}px)`:void 0};return Object(a.createElement)("div",{className:T},Object(a.createElement)("figure",{className:W},Object(a.createElement)("img",{className:F,style:M,src:j,alt:I}),O&&Object(a.createElement)("figcaption",{className:L,style:U},O)),Object(a.createElement)("div",{className:H,style:V},Object(a.createElement)(g.RichText.Content,{tagName:"p",className:D,style:G,value:k}),R&&Object(a.createElement)("div",{className:$,style:Y,"aria-hidden":!0})))},deprecated:A,example:{}})}]);