!function(){var e={184:function(e,t){var a;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)){if(a.length){var n=r.apply(null,a);n&&e.push(n)}}else if("object"===l){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var s in a)o.call(a,s)&&a[s]&&e.push(s)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},703:function(e,t,a){"use strict";var o=a(414);function r(){}function l(){}l.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,l,n){if(n!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:r};return a.PropTypes=a,a}},697:function(e,t,a){e.exports=a(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,a),l.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=window.wp.element,t=window.wp.i18n;const o={category:{common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},color:{iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:(0,t.__)("小","ystandard-blocks")},{value:"",label:(0,t.__)("中","ystandard-blocks")},{value:"is-large",label:(0,t.__)("大","ystandard-blocks")}],animationTypes:[{label:(0,t.__)("なし","ystandard-blocks"),value:"none"},{label:(0,t.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"is-small",label:(0,t.__)("小","ystandard-blocks")},{value:"",label:(0,t.__)("中","ystandard-blocks")},{value:"is-large",label:(0,t.__)("大","ystandard-blocks")}]},component:{defaultAvatar:{url:"https://www.gravatar.com/avatar/000000000000000000000000000000?s=128&r=g&d=mp"},fontWeight:[{value:"",label:(0,t._x)("指定無し","component-config","ystandard-blocks")},{value:"normal",label:(0,t._x)("通常(normal)","component-config","ystandard-blocks")},{value:"bold",label:(0,t._x)("太字(bold)","component-config","ystandard-blocks")},{value:"100",label:(0,t._x)("100","component-config","ystandard-blocks")},{value:"200",label:(0,t._x)("200","component-config","ystandard-blocks")},{value:"300",label:(0,t._x)("300","component-config","ystandard-blocks")},{value:"400",label:(0,t._x)("400","component-config","ystandard-blocks")},{value:"500",label:(0,t._x)("500","component-config","ystandard-blocks")},{value:"600",label:(0,t._x)("600","component-config","ystandard-blocks")},{value:"700",label:(0,t._x)("700","component-config","ystandard-blocks")},{value:"800",label:(0,t._x)("800","component-config","ystandard-blocks")},{value:"900",label:(0,t._x)("900","component-config","ystandard-blocks")}],fontUnit:[{value:"px",label:"px"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"%",label:"%"}],fontStyle:[{value:"",label:(0,t._x)("指定無し","component-config","ystandard-blocks")},{value:"italic",label:(0,t._x)("イタリック体","component-config","ystandard-blocks")}],borderStyles:[{value:"solid",label:(0,t._x)("直線","component-config","ystandard-blocks")},{value:"dotted",label:(0,t._x)("点線","component-config","ystandard-blocks")},{value:"dashed",label:(0,t._x)("破線","component-config","ystandard-blocks")},{value:"double",label:(0,t._x)("二重線","component-config","ystandard-blocks")}]}};var r=a(184),l=a.n(r),n=window.wp.blockEditor,s=window.wp.components,i=window.wp.compose,c=window.React,d=a.n(c),b=a(697),m=a.n(b);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},u.apply(this,arguments)}var v=(0,c.forwardRef)((function(e,t){var a=e.color,o=void 0===a?"currentColor":a,r=e.size,l=void 0===r?24:r,n=function(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}(e,["color","size"]);return d().createElement("svg",u({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),d().createElement("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),d().createElement("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}))}));v.propTypes={color:m().string,size:m().oneOfType([m().string,m().number])},v.displayName="Book";var p=v,y=t=>{const{url:a,target:o,text:r,topRight:n}=t,s=r||"マニュアルを見る",i=o||"_blank";return(0,e.createElement)("div",{className:l()("ystdb-component-manual-link",{"is-top-right":n})},(0,e.createElement)("a",{href:a,target:i},(0,e.createElement)("span",{className:"ystdb-component-manual-link__icon"},(0,e.createElement)(p,{size:12})),(0,e.createElement)("span",{className:"ystdb-component-manual-link__text"},s)))};const g=e=>o.component[e],_=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return window.ystdb&&"object"==typeof window.ystdb&&window.ystdb.hasOwnProperty(e)?window.ystdb[e]:t};var C=t=>{let{children:a}=t;return(0,e.createElement)("div",{className:"ystdb__horizon-buttons"},a)};function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},f.apply(this,arguments)}var h=window.wp.data;var k=t=>{let{key:a,value:o,label:r,position:n="bottom left",renderContent:i}=t;const c=null!=r?r:"色";return(0,e.createElement)(s.__experimentalItemGroup,{isBordered:!0,isSeparated:!0,className:"block-editor-panel-color-gradient-settings__item-group"},(0,e.createElement)(s.Dropdown,{key:a,position:n,className:"block-editor-panel-color-gradient-settings__dropdown",contentClassName:"block-editor-panel-color-gradient-settings__dropdown-content",style:{display:"block"},renderToggle:t=>{let{isOpen:a,onToggle:r}=t;return(0,e.createElement)(s.__experimentalItem,{onClick:r,className:l()("block-editor-panel-color-gradient-settings__item",{"is-open":a})},(0,e.createElement)(s.__experimentalHStack,{justify:"flex-start"},(0,e.createElement)(s.ColorIndicator,{className:"block-editor-panel-color-gradient-settings__color-indicator",colorValue:o}),(0,e.createElement)(s.FlexItem,null,c)))},renderContent:i}))},E=t=>{let{value:a,onChange:o,colors:r,label:l,key:n,position:i="bottom left",...c}=t;const d=null!=r?r:(()=>{const{colors:e}=(0,h.select)("core/block-editor").getSettings();return e})(),b=e=>{o(e)};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(k,{key:n,label:l,value:a,position:i,renderContent:()=>(0,e.createElement)(s.ColorPalette,f({colors:d,onChange:b,value:a},c))}))};const x={avatarName:{type:"string",source:"html",selector:".ystdb-balloon__name"},avatarNameColor:{type:"string"},customAvatarNameColor:{type:"string"},avatarURL:{type:"string",source:"attribute",selector:".ystdb-balloon__avatar-image",attribute:"src",default:g("defaultAvatar").url},avatarAlt:{type:"string",source:"attribute",selector:".ystdb-balloon__avatar-image",attribute:"alt"},avatarID:{type:"integer",default:0},avatarSize:{type:"string",default:"large"},avatarBorderColor:{type:"string"},customAvatarBorderColor:{type:"string"},avatarBorderWidth:{type:"integer",default:0},avatarBorderRadius:{type:"integer"},text:{type:"string",source:"html",selector:".ystdb-balloon__text"},balloonPosition:{type:"string",default:"right"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},balloonBorderColor:{type:"string"},customBalloonBorderColor:{type:"string"},balloonBorderWidth:{type:"integer",default:1},textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"string"},balloonType:{type:"string",default:"serif"},verticalAlign:{type:"string",default:"top"}},B=[{label:(0,t.__)("会話","ystandard-blocks"),value:"serif"},{label:(0,t.__)("会話(枠線)","ystandard-blocks"),value:"serif-border"},{label:(0,t.__)("考え中","ystandard-blocks"),value:"think"}],N=[{label:(0,t.__)("右","ystandard-blocks"),value:"right"},{label:(0,t.__)("左","ystandard-blocks"),value:"left"}],w=[{label:(0,t.__)("小","ystandard-blocks"),value:"small"},{label:(0,t.__)("大","ystandard-blocks"),value:"large"}],z=(0,e.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},(0,e.createElement)(s.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),(0,e.createElement)(s.Path,{d:"M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"})),S=(0,e.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},(0,e.createElement)(s.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),(0,e.createElement)(s.Path,{d:"M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"})),A={top:{icon:(0,e.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},(0,e.createElement)(s.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),(0,e.createElement)(s.Path,{d:"M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"})),title:(0,t._x)("上揃え","ystandard-blocks")},center:{icon:S,title:(0,t._x)("中央揃え","ystandard-blocks")},bottom:{icon:z,title:(0,t._x)("下揃え","ystandard-blocks")}},O=(e,t)=>{const a=_("balloonOption",{});return"serif-border"!==e||t?t:a.contentBackground};var P=(0,i.compose)([(0,n.withColors)("backgroundColor",{textColor:"color",avatarNameColor:"color",avatarBorderColor:"borderColor",balloonBorderColor:"borderColor"}),(0,n.withFontSizes)("fontSize")])((function(a){const{textColor:o,backgroundColor:r,balloonBorderColor:i,avatarNameColor:c,avatarBorderColor:d,setTextColor:b,setBackgroundColor:m,setBalloonBorderColor:u,setAvatarNameColor:v,setAvatarBorderColor:p,attributes:f,setAttributes:h,fontSize:k,setFontSize:x,className:z,isSelected:S}=a,{avatarName:P,avatarURL:R,avatarAlt:T,avatarID:$,avatarSize:j,avatarBorderWidth:W,avatarBorderRadius:F,text:I,balloonBorderWidth:M,balloonPosition:L,balloonType:H,verticalAlign:U}=f,V=["top","center","bottom"],D=g("defaultAvatar").url,G=_("balloonImages",[]),q="serif-border"===H,Y=A[U],J=A.top,K=l()(z,"ystdb-balloon",{[`is-vertically-aligned-${U}`]:U,[`is-balloon-position-${L}`]:L}),Q=l()("ystdb-balloon__avatar",{[`is-size-${j}`]:j}),X=l()("ystdb-balloon__name",{"has-text-color":c.color,[c.class]:c.class}),Z={color:c.color},ee=l()("ystdb-balloon__avatar-image",{"has-border-color":d.color,[d.class]:d.class,"has-border":0<W}),te={borderColor:d.color,borderWidth:0<W?W:void 0,borderRadius:F},ae=l()("ystdb-balloon__body",{[r.class]:r.class,"has-background":r.color,[i.class]:i.class,"has-border-color":i.color,[`is-${U}`]:U,[`is-${L}`]:L,[`is-${H}`]:H}),oe={backgroundColor:O(H,r.color),borderColor:i.color,borderWidth:q?M:void 0},re=l()("ystdb-ystdb-balloon__text",{[o.class]:o.class,"has-text-color":o.color,[k.class]:k.class}),le={color:o.color,fontSize:k.size?k.size:void 0},ne=l()("ystdb-balloon__serif-triangle",{[r.class]:r.class,"has-background":r.color,[i.class]:i.class,"has-border-color":i.color}),se=6-M,ie={backgroundColor:O(H,r.color),borderColor:i.color,borderWidth:M,right:"right"===L?`calc(100% - ${se}px)`:void 0,left:"left"===L?`calc(100% - ${se}px)`:void 0};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.BlockControls,null,(0,e.createElement)(s.ToolbarGroup,null,(0,e.createElement)(s.ToolbarItem,{label:(0,t._x)("縦位置の変更","ystandard-blocks")},(t=>(0,e.createElement)(s.DropdownMenu,{toggleProps:t,isCollapsed:!0,icon:Y?Y.icon:J.icon,controls:V.map((e=>({...A[e],isActive:U===e,onClick:()=>h({verticalAlign:U===e?void 0:e})})))}))))),(0,e.createElement)(n.InspectorControls,null,(0,e.createElement)(s.PanelBody,{title:(0,t.__)("吹き出し設定","ystandard-blocks")},(0,e.createElement)(s.BaseControl,{id:"balloon-position",label:(0,t.__)("吹き出しの向き","ystandard-blocks")},(0,e.createElement)(C,null,N.map((t=>(0,e.createElement)(s.Button,{key:t.value,isSecondary:L!==t.value,isPrimary:L===t.value,onClick:()=>{h({balloonPosition:t.value})}},t.label))))),(0,e.createElement)(s.BaseControl,{id:"balloon-type",label:(0,t.__)("吹き出しタイプ","ystandard-blocks")},(0,e.createElement)(C,null,B.map((t=>(0,e.createElement)(s.Button,{key:t.value,isSecondary:H!==t.value,isPrimary:H===t.value,onClick:()=>{h({balloonType:t.value})}},t.label))))),(0,e.createElement)(s.BaseControl,{id:"balloon-font-size",label:(0,t.__)("文字サイズ","ystandard-blocks")},(0,e.createElement)(n.FontSizePicker,{__nextHasNoMarginBottom:!0,value:k.size,onChange:e=>{x(e)}})),(0,e.createElement)(s.BaseControl,{id:"balloon-background",label:(0,t.__)("吹き出し背景色","ystandard-blocks")},(0,e.createElement)(E,{label:(0,t.__)("吹き出し背景色","ystandard-blocks"),value:r.color,onChange:e=>{m(e),q||u(e)}})),(0,e.createElement)(s.BaseControl,{id:"balloon-text-color",label:(0,t.__)("吹き出し文字色","ystandard-blocks")},(0,e.createElement)(E,{label:(0,t.__)("吹き出し文字色","ystandard-blocks"),value:o.color,onChange:e=>{b(e)}}),(0,e.createElement)(n.ContrastChecker,{backgroundColor:r.color,textColor:o.color})),q&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(s.BaseControl,{id:"serif-border-color",label:(0,t.__)("吹き出し枠線色","ystandard-blocks")},(0,e.createElement)(E,{label:(0,t.__)("吹き出し枠線色","ystandard-blocks"),value:i.color,onChange:e=>{u(e)}})),(0,e.createElement)(s.BaseControl,null,(0,e.createElement)(s.RangeControl,{value:M,label:(0,t.__)("吹き出し枠線太さ","ystandard-blocks"),min:1,max:4,initialPosition:1,allowReset:!0,onChange:e=>{h({balloonBorderWidth:e})}})))),(0,e.createElement)(s.PanelBody,{title:(0,t.__)("登録済みアバター画像","ystandard-blocks")},(0,e.createElement)(s.BaseControl,null,0>=G.length?(0,e.createElement)("div",null,(0,e.createElement)("p",null,"登録済みのアバター画像はありません。"),(0,e.createElement)("p",null,"「yStandard Blocks」設定画面の「吹き出し登録」からよく使うアバター画像を登録できます。"),(0,e.createElement)(y,{url:"https://wp-ystandard.com/manual/ystdb-balloon-avatar-setting/"})):(0,e.createElement)("div",{className:"ystdb-avatar-list"},G.map((t=>(0,e.createElement)(s.Button,{key:t.id,isPrimary:$===t.id&&P===t.name,onClick:()=>{h({avatarID:t.id,avatarName:t.name,avatarURL:t.url,avatarAlt:t.name})}},(0,e.createElement)("span",null,(0,e.createElement)("img",{className:"ystdb-avatar-list__image",src:t.url,alt:t.name}),!!t.name&&(0,e.createElement)("span",{className:"ystdb-avatar-list__name"},t.name)))))))),(0,e.createElement)(s.PanelBody,{title:(0,t.__)("アバター設定","ystandard-blocks")},(0,e.createElement)(s.BaseControl,{id:"avatar-size",label:(0,t.__)("アバターサイズ","ystandard-blocks")},(0,e.createElement)(C,null,w.map((t=>(0,e.createElement)(s.Button,{key:t.value,isSecondary:j!==t.value,isPrimary:j===t.value,onClick:()=>{h({avatarSize:t.value})}},(0,e.createElement)("span",null,t.label)))))),(0,e.createElement)(s.BaseControl,null,(0,e.createElement)(s.RangeControl,{value:F,label:(0,t.__)("アバター画像の角丸","ystandard-blocks"),min:0,max:100,initialPosition:40,allowReset:!0,onChange:e=>{h({avatarBorderRadius:e})}})),(0,e.createElement)(s.BaseControl,null,(0,e.createElement)(s.RangeControl,{value:W,label:(0,t.__)("アバター画像の枠線太さ","ystandard-blocks"),min:0,max:10,initialPosition:0,allowReset:!0,onChange:e=>{h({avatarBorderWidth:e})}})),(0,e.createElement)(s.BaseControl,{id:"avatar-border-color",label:(0,t.__)("アバター画像枠色","ystandard-blocks")},(0,e.createElement)(E,{label:(0,t.__)("アバター画像枠色","ystandard-blocks"),value:d.color,onChange:e=>{p(e)}})),(0,e.createElement)(s.BaseControl,{id:"avatar-text-color",label:(0,t.__)("アバター名文字色","ystandard-blocks")},(0,e.createElement)(E,{label:(0,t.__)("アバター名文字色","ystandard-blocks"),value:c.color,onChange:e=>{v(e)}})))),(0,e.createElement)("div",{className:K},(0,e.createElement)("figure",{className:Q},(0,e.createElement)(n.MediaUpload,{onSelect:e=>{h({avatarURL:e.url,avatarID:e.id,avatarAlt:e.alt})},type:["image"],value:$,render:t=>R&&D!==R?(0,e.createElement)("div",{className:ee,style:te},(0,e.createElement)(s.Button,{onClick:()=>{h({avatarID:0,avatarURL:"",avatarAlt:""})},className:"ystdb-mediaupload__preview is-show-text",style:{padding:0}},(0,e.createElement)("img",{src:R,alt:T}))):(0,e.createElement)("div",{className:ee,style:te},(0,e.createElement)(s.Button,{onClick:t.open,className:"ystdb-mediaupload__preview is-no-image"},(0,e.createElement)("img",{src:D,alt:""})))}),(S||P)&&(0,e.createElement)("figcaption",{className:X},(0,e.createElement)(s.TextControl,{value:P,className:"ystdb-balloon__name--edit",onChange:e=>{h({avatarName:e})},style:Z,placeholder:"名前...","aria-label":(0,t.__)("Name")}))),(0,e.createElement)("div",{className:ae,style:oe},(0,e.createElement)(n.RichText,{tagName:"p",placeholder:(0,t.__)("Add text…"),value:I,onChange:e=>h({text:e}),className:re,style:le}),q&&(0,e.createElement)("div",{className:ne,style:ie,"aria-hidden":!0}))))}));function R(){return R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},R.apply(this,arguments)}var T=(0,c.forwardRef)((function(e,t){var a=e.color,o=void 0===a?"currentColor":a,r=e.size,l=void 0===r?24:r,n=function(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}(e,["color","size"]);return d().createElement("svg",R({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),d().createElement("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}))}));T.propTypes={color:m().string,size:m().oneOfType([m().string,m().number])},T.displayName="MessageSquare";var $=T;const j=[{attributes:{avatarName:{type:"string",source:"html",selector:".ystdb-balloon__name"},avatarNameColor:{type:"string"},customAvatarNameColor:{type:"string"},avatarURL:{type:"string",source:"attribute",selector:".ystdb-balloon__avatar-image",attribute:"src",default:g("defaultAvatar").url},avatarAlt:{type:"string",source:"attribute",selector:".ystdb-balloon__avatar-image",attribute:"alt"},avatarID:{type:"integer",default:0},avatarSize:{type:"string",default:"large"},avatarBorderColor:{type:"string"},customAvatarBorderColor:{type:"string"},avatarBorderWidth:{type:"integer",default:0},avatarBorderRadius:{type:"integer"},text:{type:"string",source:"html",selector:".ystdb-balloon__text"},balloonPosition:{type:"string",default:"right"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},balloonBorderColor:{type:"string"},customBalloonBorderColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"},balloonType:{type:"string",default:"serif"},verticalAlign:{type:"string",default:"top"}},supports:{align:!1,className:!1},migrate(e){let t=e.customFontSize;return"number"==typeof t&&(t=t.toString().replace("px","")+"px"),{...e,customFontSize:t}},save(t){let{attributes:a}=t;const{className:o,textColor:r,customTextColor:s,backgroundColor:i,customBackgroundColor:c,balloonBorderColor:d,customBalloonBorderColor:b,avatarNameColor:m,customAvatarNameColor:u,avatarBorderColor:v,customAvatarBorderColor:p,fontSize:y,customFontSize:g,avatarName:_,avatarURL:C,avatarAlt:f,avatarSize:h,avatarBorderWidth:k,avatarBorderRadius:E,text:x,balloonPosition:B,balloonType:N,verticalAlign:w}=a,z=(0,n.getColorClassName)("color",m),S=(0,n.getColorClassName)("border-color",v),A=(0,n.getColorClassName)("color",r),O=(0,n.getFontSizeClass)(y),P=(0,n.getColorClassName)("background-color",i),R=(0,n.getColorClassName)("border-color",d),T=l()(o,"ystdb-balloon",{[`is-vertically-aligned-${w}`]:w,[`is-balloon-position-${B}`]:B}),$=l()("ystdb-balloon__avatar",{[`is-size-${h}`]:h}),j=l()("ystdb-balloon__avatar-image",{"has-border-color":S||p,[S]:S,"has-border":0<k}),W={borderColor:p,borderWidth:0<k?k:void 0,borderRadius:E},F=f||_,I=l()("ystdb-balloon__name",{[z]:z,"has-text-color":u||z}),M={color:u},L=l()("ystdb-balloon__body",{[P]:P,"has-background":P||c,[R]:R,"has-border-color":R||b,[`is-${w}`]:w,[`is-${B}`]:B,[`is-${N}`]:N}),H={backgroundColor:c,borderColor:b},U=l()("ystdb-balloon__text",{[A]:A,"has-text-color":r||s,[O]:O}),V={color:A?void 0:s,fontSize:!O&&g?g+"px":void 0};return(0,e.createElement)("div",{className:T},(0,e.createElement)("figure",{className:$},(0,e.createElement)("img",{className:j,style:W,src:C,alt:F}),_&&(0,e.createElement)("figcaption",{className:I,style:M},_)),(0,e.createElement)("div",{className:L,style:H},(0,e.createElement)(n.RichText.Content,{tagName:"p",className:U,style:V,value:x})))}}],W=[{attributes:{avatarName:{type:"string",source:"html",selector:".ystdb-balloon__name"},avatarNameColor:{type:"string"},customAvatarNameColor:{type:"string"},avatarURL:{type:"string",source:"attribute",selector:".ystdb-balloon__avatar-image",attribute:"src",default:g("defaultAvatar").url},avatarAlt:{type:"string",source:"attribute",selector:".ystdb-balloon__avatar-image",attribute:"alt"},avatarID:{type:"integer",default:0},avatarSize:{type:"string",default:"large"},avatarBorderColor:{type:"string"},customAvatarBorderColor:{type:"string"},avatarBorderWidth:{type:"integer",default:0},avatarBorderRadius:{type:"integer"},text:{type:"string",source:"html",selector:".ystdb-balloon__text"},balloonPosition:{type:"string",default:"right"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},balloonBorderColor:{type:"string"},customBalloonBorderColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"string"},balloonType:{type:"string",default:"serif"},verticalAlign:{type:"string",default:"top"}},supports:{align:!1,className:!1},migrate(e){let t=e.customFontSize;return"number"==typeof t&&(t=t.toString().replace("px","")+"px"),{...e,customFontSize:t}},save(t){let{attributes:a}=t;const{className:o,textColor:r,customTextColor:s,backgroundColor:i,customBackgroundColor:c,balloonBorderColor:d,customBalloonBorderColor:b,avatarNameColor:m,customAvatarNameColor:u,avatarBorderColor:v,customAvatarBorderColor:p,fontSize:y,customFontSize:g,avatarName:_,avatarURL:C,avatarAlt:f,avatarSize:h,avatarBorderWidth:k,avatarBorderRadius:E,text:x,balloonPosition:B,balloonType:N,verticalAlign:w}=a,z=(0,n.getColorClassName)("color",m),S=(0,n.getColorClassName)("border-color",v),A=(0,n.getColorClassName)("color",r),O=(0,n.getFontSizeClass)(y),P=(0,n.getColorClassName)("background-color",i),R=(0,n.getColorClassName)("border-color",d),T=l()(o,"ystdb-balloon",{[`is-vertically-aligned-${w}`]:w,[`is-balloon-position-${B}`]:B}),$=l()("ystdb-balloon__avatar",{[`is-size-${h}`]:h}),j=l()("ystdb-balloon__avatar-image",{"has-border-color":S||p,[S]:S,"has-border":0<k}),W={borderColor:p,borderWidth:0<k?k:void 0,borderRadius:E},F=f||_,I=l()("ystdb-balloon__name",{[z]:z,"has-text-color":u||z}),M={color:u},L=l()("ystdb-balloon__body",{[P]:P,"has-background":P||c,[R]:R,"has-border-color":R||b,[`is-${w}`]:w,[`is-${B}`]:B,[`is-${N}`]:N}),H={backgroundColor:c,borderColor:b},U=l()("ystdb-balloon__text",{[A]:A,"has-text-color":r||s,[O]:O}),V={color:A?void 0:s,fontSize:!O&&g?g:void 0};return(0,e.createElement)("div",{className:T},(0,e.createElement)("figure",{className:$},(0,e.createElement)("img",{className:j,style:W,src:C,alt:F}),_&&(0,e.createElement)("figcaption",{className:I,style:M},_)),(0,e.createElement)("div",{className:L,style:H},(0,e.createElement)(n.RichText.Content,{tagName:"p",className:U,style:V,value:x})))}}],F=[...j,...W];(0,window.wp.blocks.registerBlockType)("ystdb/balloon",{title:(0,t.__)("吹き出し","ystandard-blocks"),description:(0,t.__)("吹き出しブロック","ystandard-blocks"),icon:(0,e.createElement)($,{stroke:o.color.iconForeground,style:{fill:"none"}}),keywords:[(0,t.__)("balloon"),(0,t.__)("吹き出し"),"balloon"],category:o.category.common,attributes:x,supports:{align:!1,className:!1},edit:P,save:function(t){let{attributes:a}=t;const{className:o,textColor:r,customTextColor:s,backgroundColor:i,customBackgroundColor:c,balloonBorderColor:d,customBalloonBorderColor:b,balloonBorderWidth:m,avatarNameColor:u,customAvatarNameColor:v,avatarBorderColor:p,customAvatarBorderColor:y,fontSize:g,customFontSize:_,avatarName:C,avatarURL:f,avatarAlt:h,avatarSize:k,avatarBorderWidth:E,avatarBorderRadius:x,text:B,balloonPosition:N,balloonType:w,verticalAlign:z}=a,S=(0,n.getColorClassName)("color",u),A=(0,n.getColorClassName)("border-color",p),P=(0,n.getColorClassName)("color",r),R=(0,n.getFontSizeClass)(g),T=(0,n.getColorClassName)("background-color",i),$=(0,n.getColorClassName)("border-color",d),j="serif-border"===w,W=l()(o,"ystdb-balloon",{[`is-vertically-aligned-${z}`]:z,[`is-balloon-position-${N}`]:N}),F=l()("ystdb-balloon__avatar",{[`is-size-${k}`]:k}),I=l()("ystdb-balloon__avatar-image",{"has-border-color":A||y,[A]:A,"has-border":0<E}),M={borderColor:y,borderWidth:0<E?E:void 0,borderRadius:x},L=h||C,H=l()("ystdb-balloon__name",{[S]:S,"has-text-color":v||S}),U={color:v},V=l()("ystdb-balloon__body",{[T]:T,"has-background":T||c,[$]:$,"has-border-color":$||b,[`is-${z}`]:z,[`is-${N}`]:N,[`is-${w}`]:w}),D={backgroundColor:O(w,c),borderColor:b,borderWidth:j?m:void 0},G=l()("ystdb-balloon__text",{[P]:P,"has-text-color":r||s,[R]:R}),q={color:P?void 0:s,fontSize:!R&&_?_:void 0},Y=l()("ystdb-balloon__serif-triangle",{[T]:T,"has-background":T||c,[$]:$,"has-border-color":$||b}),J=7-m,K={backgroundColor:O(w,c),borderColor:b,borderWidth:m,right:"right"===N?`calc(100% - ${J}px)`:void 0,left:"left"===N?`calc(100% - ${J}px)`:void 0};return(0,e.createElement)("div",{className:W},(0,e.createElement)("figure",{className:F},(0,e.createElement)("img",{className:I,style:M,src:f,alt:L}),C&&(0,e.createElement)("figcaption",{className:H,style:U},C)),(0,e.createElement)("div",{className:V,style:D},(0,e.createElement)(n.RichText.Content,{tagName:"p",className:G,style:q,value:B}),j&&(0,e.createElement)("div",{className:Y,style:K,"aria-hidden":!0})))},deprecated:F,example:{}})}()}();