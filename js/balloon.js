!function(e){var t={};function a(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=72)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.wp.blocks}()},11:function(e,t){!function(){e.exports=this.wp.compose}()},15:function(e,t,a){"use strict";var o=a(16);function r(){}function l(){}l.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,l,n){if(n!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:r};return a.PropTypes=a,a}},16:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2:function(e,t){!function(){e.exports=this.wp.components}()},22:function(e,t){!function(){e.exports=this.wp.data}()},3:function(e,t){!function(){e.exports=this.React}()},4:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},5:function(e,t){!function(){e.exports=this.wp.blockEditor}()},6:function(e,t,a){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var l=typeof o;if("string"===l||"number"===l)e.push(o);else if(Array.isArray(o)&&o.length){var n=r.apply(null,o);n&&e.push(n)}else if("object"===l)for(var c in o)a.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},72:function(e,t,a){"use strict";a.r(t);var o=a(0),r=a(9),l=a(4),n=a.n(l),c=a(6),s=a.n(c),i=a(1),b=a(2),d="https://www.gravatar.com/avatar/000000000000000000000000000000?s=128&r=g&d=mp",u={avatarName:{type:"string",source:"html",selector:".ystdb-balloon__name"},avatarNameColor:{type:"string"},customAvatarNameColor:{type:"string"},avatarURL:{type:"string",source:"attribute",selector:".ystdb-balloon__avatar-image",attribute:"src",default:d},avatarAlt:{type:"string",source:"attribute",selector:".ystdb-balloon__avatar-image",attribute:"alt"},avatarID:{type:"integer",default:0},avatarSize:{type:"string",default:"large"},avatarBorderColor:{type:"string"},customAvatarBorderColor:{type:"string"},avatarBorderWidth:{type:"integer",default:0},avatarBorderRadius:{type:"integer"},text:{type:"string",source:"html",selector:".ystdb-balloon__text"},balloonPosition:{type:"string",default:"right"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},balloonBorderColor:{type:"string"},customBalloonBorderColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"},balloonType:{type:"string",default:"serif"},verticalAlign:{type:"string",default:"top"}},m=[{label:Object(i.__)("会話","ystandard-blocks"),value:"serif"},{label:Object(i.__)("考え中","ystandard-blocks"),value:"think"}],y=[{label:Object(i.__)("右","ystandard-blocks"),value:"right"},{label:Object(i.__)("左","ystandard-blocks"),value:"left"}],p=[{label:Object(i.__)("小","ystandard-blocks"),value:"small"},{label:Object(i.__)("大","ystandard-blocks"),value:"large"}],v=Object(o.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(o.createElement)(b.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(o.createElement)(b.Path,{d:"M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"})),g=Object(o.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(o.createElement)(b.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(o.createElement)(b.Path,{d:"M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"})),O={top:{icon:Object(o.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(o.createElement)(b.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(o.createElement)(b.Path,{d:"M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"})),title:Object(i._x)("Vertically Align Top","Block vertical alignment setting")},center:{icon:g,title:Object(i._x)("Vertically Align Middle","Block vertical alignment setting")},bottom:{icon:v,title:Object(i._x)("Vertically Align Bottom","Block vertical alignment setting")}},f=a(5),j=a(22),_=a(11);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}var h=Object(_.compose)([Object(f.withColors)("backgroundColor",{textColor:"color",avatarNameColor:"color",avatarBorderColor:"borderColor",balloonBorderColor:"borderColor"}),Object(f.withFontSizes)("fontSize")])((function(e){var t,a,r,l,c=e.textColor,u=e.backgroundColor,v=e.balloonBorderColor,g=e.avatarNameColor,_=e.avatarBorderColor,h=e.setTextColor,E=e.setBackgroundColor,k=e.setBalloonBorderColor,N=e.setAvatarNameColor,x=e.setAvatarBorderColor,B=e.attributes,w=e.setAttributes,P=e.fontSize,S=e.setFontSize,z=e.className,R=e.isSelected,T=B.avatarName,A=B.avatarURL,D=B.avatarAlt,M=B.avatarID,I=B.avatarSize,F=B.avatarBorderWidth,V=B.avatarBorderRadius,W=B.text,L=B.balloonPosition,U=B.balloonType,H=B.verticalAlign,G=O[H],q=O.top,Y=Object(j.select)("core/block-editor").getSettings().colors,J=s()(z,"ystdb-balloon",(t={},n()(t,"is-vertically-aligned-".concat(H),H),n()(t,"is-balloon-position-".concat(L),L),t)),K=s()("ystdb-balloon__avatar",n()({},"is-size-".concat(I),I)),Q=s()("ystdb-balloon__name",n()({"has-text-color":g.color},g.class,g.class)),X={color:g.color},Z=s()("ystdb-balloon__avatar-image",(a={"has-border-color":_.color},n()(a,_.class,_.class),n()(a,"has-border",0<F),a)),$={borderColor:_.color,borderWidth:0<F?F:void 0,borderRadius:V},ee=s()("ystdb-balloon__body",(r={},n()(r,u.class,u.class),n()(r,v.class,v.class),n()(r,"has-background",u.color),n()(r,"is-".concat(H),H),n()(r,"is-".concat(L),L),n()(r,"is-".concat(U),U),r)),te={backgroundColor:u.color,borderColor:v.color},ae=s()("ystdb-ystdb-balloon__text",(l={},n()(l,c.class,c.class),n()(l,"has-text-color",c.color),n()(l,P.class,P.class),l)),oe={color:c.color,fontSize:P.size?P.size+"px":void 0};return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(f.BlockControls,null,Object(o.createElement)(b.Toolbar,{isCollapsed:!0,icon:G?G.icon:q.icon,label:Object(i._x)("Change vertical alignment","Block vertical alignment setting label"),controls:["top","center","bottom"].map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},O[e],{isActive:H===e,onClick:function(){return w({verticalAlign:H===e?void 0:e})}})}))})),Object(o.createElement)(f.InspectorControls,null,Object(o.createElement)(b.PanelBody,{title:Object(i.__)("吹き出し設定","ystandard-blocks")},Object(o.createElement)(b.BaseControl,null,Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(i.__)("吹き出しの位置","ystandard-blocks")),Object(o.createElement)("div",{className:"ystdb-balloon-selector"},y.map((function(e){return Object(o.createElement)(b.Button,{key:e.value,isDefault:!0,isPrimary:L===e.value,onClick:function(){w({balloonPosition:e.value})}},Object(o.createElement)("span",{className:"ystdb-balloon-selector__container is-".concat(e.value," is-").concat(U)},Object(o.createElement)("span",{className:"ystdb-balloon-selector__image"}," "),Object(o.createElement)("span",{className:"ystdb-balloon-selector__body"},e.label)))})))),Object(o.createElement)(b.BaseControl,null,Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(i.__)("吹き出しタイプ","ystandard-blocks")),Object(o.createElement)("div",{className:"ystdb-balloon-selector"},m.map((function(e){return Object(o.createElement)(b.Button,{key:e.value,isDefault:!0,isPrimary:U===e.value,onClick:function(){w({balloonType:e.value})}},Object(o.createElement)("span",{className:"ystdb-balloon-selector__container is-".concat(e.value," is-").concat(L)},Object(o.createElement)("span",{className:"ystdb-balloon-selector__image"}," "),Object(o.createElement)("span",{className:"ystdb-balloon-selector__body"},e.label)))}))))),"1"===ystdb.yStandard&&Object(o.createElement)(b.PanelBody,{title:Object(i.__)("登録済みアバター画像","ystandard-blocks")},Object(o.createElement)(b.BaseControl,null,0>=ystdb.balloonImages.length?Object(o.createElement)("div",null,Object(o.createElement)("p",null,"登録済みのアバター画像はありません。"),Object(o.createElement)("p",null,"カスタマイザーの「[ys]拡張機能設定」→「[ys blocks]吹き出しブロック画像設定」から登録してください。")):Object(o.createElement)("div",{className:"ystdb-avatar-list"},ystdb.balloonImages.map((function(e){return Object(o.createElement)(b.Button,{key:e.id,isPrimary:M===e.id&&T===e.name,onClick:function(){w({avatarID:e.id,avatarName:e.name,avatarURL:e.url,avatarAlt:e.name})}},Object(o.createElement)("span",null,Object(o.createElement)("img",{className:"ystdb-avatar-list__image",src:e.url,alt:e.name}),!!e.name&&Object(o.createElement)("span",{className:"ystdb-avatar-list__name"},e.name)))}))))),Object(o.createElement)(b.PanelBody,{title:Object(i.__)("アバター設定","ystandard-blocks")},Object(o.createElement)(b.BaseControl,null,Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(i.__)("アバターサイズ","ystandard-blocks")),Object(o.createElement)("div",{className:"ystdb-btn-selector components-base-control"},p.map((function(e){return Object(o.createElement)(b.Button,{key:e.value,isDefault:!0,isPrimary:I===e.value,onClick:function(){w({avatarSize:e.value})}},Object(o.createElement)("span",null,e.label))})))),Object(o.createElement)(b.BaseControl,null,Object(o.createElement)(b.RangeControl,{value:V,label:Object(i.__)("アバター画像の角丸","ystandard-blocks"),min:0,max:40,initialPosition:40,allowReset:!0,onChange:function(e){w({avatarBorderRadius:e})}})),Object(o.createElement)(b.BaseControl,null,Object(o.createElement)(b.RangeControl,{value:F,label:Object(i.__)("アバター画像の枠線太さ","ystandard-blocks"),min:0,max:10,initialPosition:0,allowReset:!0,onChange:function(e){w({avatarBorderWidth:e})}})),Object(o.createElement)(b.BaseControl,null,Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(i.__)("アバター画像枠色","ystandard-blocks")),Object(o.createElement)(b.ColorPalette,{colors:Y,disableCustomColors:!1,onChange:function(e){x(e)},value:_.color})),Object(o.createElement)(b.BaseControl,null,Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(i.__)("アバター名文字色","ystandard-blocks")),Object(o.createElement)(b.ColorPalette,{colors:Y,disableCustomColors:!1,onChange:function(e){N(e)},value:g.color}))),Object(o.createElement)(b.PanelBody,{title:Object(i.__)("テキスト設定","ystandard-blocks")},Object(o.createElement)(b.BaseControl,null,Object(o.createElement)(f.FontSizePicker,{label:Object(i.__)("文字サイズ","ystandard-blocks"),value:P.size,onChange:function(e){S(e)}})),Object(o.createElement)(b.BaseControl,null,Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(i.__)("吹き出し背景色","ystandard-blocks")),Object(o.createElement)(b.ColorPalette,{colors:Y,disableCustomColors:!1,onChange:function(e){E(e),k(e)},value:u.color}),Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(i.__)("吹き出し文字色","ystandard-blocks")),Object(o.createElement)(b.ColorPalette,{colors:Y,disableCustomColors:!1,onChange:function(e){h(e)},value:c.color}),Object(o.createElement)(f.ContrastChecker,{backgroundColor:u.color,textColor:c.color})))),Object(o.createElement)("div",{className:J},Object(o.createElement)("figure",{className:K},Object(o.createElement)(f.MediaUpload,{onSelect:function(e){w({avatarURL:e.url,avatarID:e.id,avatarAlt:e.alt})},type:["image"],value:M,render:function(e){return A&&d!==A?Object(o.createElement)("div",{className:Z,style:$},Object(o.createElement)(b.Button,{onClick:function(){w({avatarID:0,avatarURL:"",avatarAlt:""})},className:"ystdb-mediaupload__preview is-show-text",style:{padding:0}},Object(o.createElement)("img",{src:A,alt:D}))):Object(o.createElement)("div",{className:Z,style:$},Object(o.createElement)(b.Button,{onClick:e.open,className:"ystdb-mediaupload__preview is-no-image"},Object(o.createElement)("img",{src:d,alt:""})))}}),(R||T)&&Object(o.createElement)("figcaption",{className:Q},Object(o.createElement)(f.PlainText,{value:T,className:"ystdb-balloon__name--edit",onChange:function(e){w({avatarName:e})},style:X,placeholder:"名前...","aria-label":Object(i.__)("Name")}))),Object(o.createElement)("div",{className:ee,style:te},Object(o.createElement)(f.RichText,{tagName:"p",placeholder:Object(i.__)("Add text…"),value:W,onChange:function(e){return w({text:e})},withoutInteractiveFormatting:!0,className:ae,style:oe}))))}));var E=a(3),k=a.n(E),N=a(8),x=a.n(N);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var P=Object(E.forwardRef)((function(e,t){var a=e.color,o=void 0===a?"currentColor":a,r=e.size,l=void 0===r?24:r,n=w(e,["color","size"]);return k.a.createElement("svg",B({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),k.a.createElement("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}))}));P.propTypes={color:x.a.string,size:x.a.oneOfType([x.a.string,x.a.number])},P.displayName="MessageSquare";var S=P;function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}var R=[{attributes:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},{avatarName:{type:"string",source:"html",selector:".ystdb-balloon__name"},avatarNameColor:{type:"string"},customAvatarNameColor:{type:"string"},avatarURL:{type:"string",source:"attribute",selector:".ystdb-balloon__avatar-image",attribute:"src",default:d},avatarAlt:{type:"string",source:"attribute",selector:".ystdb-balloon__avatar-image",attribute:"alt"},avatarID:{type:"integer",default:0},avatarSize:{type:"string",default:"large"},avatarBorderColor:{type:"string"},customAvatarBorderColor:{type:"string"},avatarBorderWidth:{type:"integer",default:0},avatarBorderRadius:{type:"integer"},text:{type:"string",source:"html",selector:".ystdb-balloon__text"},balloonPosition:{type:"string",default:"right"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},balloonBorderColor:{type:"string"},customBalloonBorderColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"},balloonType:{type:"string",default:"serif"},verticalAlign:{type:"string",default:"top"}}),supports:{align:!1,className:!1},save:function(e){var t,a,r,l,c,i=e.attributes,b=i.className,d=i.textColor,u=i.customTextColor,m=i.backgroundColor,y=i.customBackgroundColor,p=i.balloonBorderColor,v=i.customBalloonBorderColor,g=i.avatarNameColor,O=i.customAvatarNameColor,j=i.avatarBorderColor,_=i.customAvatarBorderColor,C=i.fontSize,h=i.customFontSize,E=i.avatarName,k=i.avatarURL,N=i.avatarAlt,x=i.avatarSize,B=i.avatarBorderWidth,w=i.avatarBorderRadius,P=i.text,S=i.balloonPosition,z=i.balloonType,R=i.verticalAlign,T=Object(f.getColorClassName)("color",g),A=Object(f.getColorClassName)("border-color",j),D=Object(f.getColorClassName)("color",d),M=Object(f.getFontSizeClass)(C),I=Object(f.getColorClassName)("background-color",m),F=Object(f.getColorClassName)("border-color",p),V=s()(b,"ystdb-balloon",(t={},n()(t,"is-vertically-aligned-".concat(R),R),n()(t,"is-balloon-position-".concat(S),S),t)),W=s()("ystdb-balloon__avatar",n()({},"is-size-".concat(x),x)),L=s()("ystdb-balloon__avatar-image",(a={"has-border-color":A||_},n()(a,A,A),n()(a,"has-border",0<B),a)),U={borderColor:_,borderWidth:0<B?B:void 0,borderRadius:w},H=N||E,G=s()("ystdb-balloon__name",(r={},n()(r,T,T),n()(r,"has-text-color",O||T),r)),q={color:O},Y=s()("ystdb-balloon__body",(l={},n()(l,I,I),n()(l,"has-background",I||y),n()(l,"has-border-color",F||v),n()(l,"is-".concat(R),R),n()(l,"is-".concat(S),S),n()(l,"is-".concat(z),z),l)),J={backgroundColor:y,borderColor:v},K=s()("ystdb-balloon__text",(c={},n()(c,D,D),n()(c,"has-text-color",d||u),n()(c,M,M),c)),Q={color:D?void 0:u,fontSize:!M&&h?h+"px":void 0};return Object(o.createElement)("div",{className:V},Object(o.createElement)("figure",{className:W},Object(o.createElement)("img",{className:L,style:U,src:k,alt:H}),E&&Object(o.createElement)("figcaption",{className:G,style:q},E)),Object(o.createElement)("div",{className:Y,style:J},Object(o.createElement)(f.RichText.Content,{tagName:"p",className:K,style:Q,value:P})))}}],T=a(10);Object(T.registerBlockType)("ystdb/balloon",{title:Object(i.__)("[ys]吹き出し","ystandard-blocks"),description:Object(i.__)("yStandard Blocks 吹き出しブロック","ystandard-blocks"),icon:Object(o.createElement)(S,{stroke:r.a.color.iconForeground,style:{fill:"none"}}),keywords:[Object(i.__)("balloon"),Object(i.__)("吹き出し"),"balloon"],category:r.a.category.common,attributes:u,supports:{align:!1,className:!1},edit:h,save:function(e){var t,a,r,l,c,i=e.attributes,b=i.className,d=i.textColor,u=i.customTextColor,m=i.backgroundColor,y=i.customBackgroundColor,p=i.balloonBorderColor,v=i.customBalloonBorderColor,g=i.avatarNameColor,O=i.customAvatarNameColor,j=i.avatarBorderColor,_=i.customAvatarBorderColor,C=i.fontSize,h=i.customFontSize,E=i.avatarName,k=i.avatarURL,N=i.avatarAlt,x=i.avatarSize,B=i.avatarBorderWidth,w=i.avatarBorderRadius,P=i.text,S=i.balloonPosition,z=i.balloonType,R=i.verticalAlign,T=Object(f.getColorClassName)("color",g),A=Object(f.getColorClassName)("border-color",j),D=Object(f.getColorClassName)("color",d),M=Object(f.getFontSizeClass)(C),I=Object(f.getColorClassName)("background-color",m),F=Object(f.getColorClassName)("border-color",p),V=s()(b,"ystdb-balloon",(t={},n()(t,"is-vertically-aligned-".concat(R),R),n()(t,"is-balloon-position-".concat(S),S),t)),W=s()("ystdb-balloon__avatar",n()({},"is-size-".concat(x),x)),L=s()("ystdb-balloon__avatar-image",(a={"has-border-color":A||_},n()(a,A,A),n()(a,"has-border",0<B),a)),U={borderColor:_,borderWidth:0<B?B:void 0,borderRadius:w},H=N||E,G=s()("ystdb-balloon__name",(r={},n()(r,T,T),n()(r,"has-text-color",O||T),r)),q={color:O},Y=s()("ystdb-balloon__body",(l={},n()(l,I,I),n()(l,"has-background",I||y),n()(l,F,F),n()(l,"has-border-color",F||v),n()(l,"is-".concat(R),R),n()(l,"is-".concat(S),S),n()(l,"is-".concat(z),z),l)),J={backgroundColor:y,borderColor:v},K=s()("ystdb-balloon__text",(c={},n()(c,D,D),n()(c,"has-text-color",d||u),n()(c,M,M),c)),Q={color:D?void 0:u,fontSize:!M&&h?h+"px":void 0};return Object(o.createElement)("div",{className:V},Object(o.createElement)("figure",{className:W},Object(o.createElement)("img",{className:L,style:U,src:k,alt:H}),E&&Object(o.createElement)("figcaption",{className:G,style:q},E)),Object(o.createElement)("div",{className:Y,style:J},Object(o.createElement)(f.RichText.Content,{tagName:"p",className:K,style:Q,value:P})))},deprecated:R})},8:function(e,t,a){e.exports=a(15)()},9:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var o=a(1),r={category:{common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},color:{iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:Object(o.__)("小")},{value:"",label:Object(o.__)("中")},{value:"is-large",label:Object(o.__)("大")}],animationTypes:[{label:Object(o.__)("なし","ystandard-blocks"),value:"none"},{label:Object(o.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"fa-xs",label:Object(o.__)("小")},{value:"",label:Object(o.__)("中")},{value:"fa-2x",label:Object(o.__)("大")}]}}}});