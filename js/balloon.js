!function(e){var t={};function a(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=t,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)a.d(o,l,function(t){return e[t]}.bind(null,l));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=53)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},12:function(e,t){!function(){e.exports=this.wp.compose}()},15:function(e,t){!function(){e.exports=this.wp.data}()},2:function(e,t){!function(){e.exports=this.wp.components}()},4:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},5:function(e,t){!function(){e.exports=this.wp.blockEditor}()},53:function(e,t,a){"use strict";a.r(t);var o=a(8),l=a(4),r=a.n(l),n=a(0),c=a(7),s=a.n(c),i=a(1),b=a(2),d="https://www.gravatar.com/avatar/000000000000000000000000000000?s=128&r=g&d=mp",u={avatarName:{type:"string",source:"html",selector:".ystdb-balloon__name"},avatarNameColor:{type:"string"},customAvatarNameColor:{type:"string"},avatarURL:{type:"string",source:"attribute",selector:".ystdb-balloon__avatar-image",attribute:"src",default:d},avatarAlt:{type:"string",source:"attribute",selector:".ystdb-balloon__avatar-image",attribute:"alt"},avatarID:{type:"integer",default:0},avatarSize:{type:"string",default:"large"},avatarBorderColor:{type:"string"},customAvatarBorderColor:{type:"string"},avatarBorderWidth:{type:"integer",default:0},avatarBorderRadius:{type:"integer"},text:{type:"string",source:"html",selector:".ystdb-balloon__text"},balloonPosition:{type:"string",default:"right"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},balloonBorderColor:{type:"string"},customBalloonBorderColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"},balloonType:{type:"string",default:"serif"},verticalAlign:{type:"string",default:"top"}},m=[{label:Object(i.__)("会話","ystandard-blocks"),value:"serif"},{label:Object(i.__)("考え中","ystandard-blocks"),value:"think"}],v=[{label:Object(i.__)("右","ystandard-blocks"),value:"right"},{label:Object(i.__)("左","ystandard-blocks"),value:"left"}],y=[{label:Object(i.__)("小","ystandard-blocks"),value:"small"},{label:Object(i.__)("大","ystandard-blocks"),value:"large"}],O=Object(n.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(n.createElement)(b.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)(b.Path,{d:"M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"})),p=Object(n.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(n.createElement)(b.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)(b.Path,{d:"M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"})),j={top:{icon:Object(n.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(n.createElement)(b.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)(b.Path,{d:"M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"})),title:Object(i._x)("Vertically Align Top","Block vertical alignment setting")},center:{icon:p,title:Object(i._x)("Vertically Align Middle","Block vertical alignment setting")},bottom:{icon:O,title:Object(i._x)("Vertically Align Bottom","Block vertical alignment setting")}},_=a(5),g=a(15),f=a(12);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}var h=Object(f.compose)([Object(_.withColors)("backgroundColor",{textColor:"color",avatarNameColor:"color",avatarBorderColor:"borderColor",balloonBorderColor:"borderColor"}),Object(_.withFontSizes)("fontSize")])((function(e){var t,a,o,l,c=e.textColor,u=e.backgroundColor,O=e.balloonBorderColor,p=e.avatarNameColor,f=e.avatarBorderColor,h=e.setTextColor,E=e.setBackgroundColor,k=e.setBalloonBorderColor,B=e.setAvatarNameColor,N=e.setAvatarBorderColor,x=e.attributes,w=e.setAttributes,P=e.fontSize,z=e.setFontSize,S=e.className,A=e.isSelected,R=x.avatarName,T=x.avatarURL,M=x.avatarAlt,V=x.avatarID,D=x.avatarSize,F=x.avatarBorderWidth,I=x.avatarBorderRadius,H=x.text,U=x.balloonPosition,L=x.balloonType,W=x.verticalAlign,G=j[W],q=j.top,J=Object(g.select)("core/block-editor").getSettings().colors,K=s()(S,"ystdb-balloon",(t={},r()(t,"is-vertically-aligned-".concat(W),W),r()(t,"is-balloon-position-".concat(U),U),t)),Q=s()("ystdb-balloon__avatar",r()({},"is-size-".concat(D),D)),X=s()("ystdb-balloon__name",r()({"has-text-color":p.color},p.class,p.class)),Y={color:p.color},Z=s()("ystdb-balloon__avatar-image",(a={"has-border-color":f.color},r()(a,f.class,f.class),r()(a,"has-border",0<F),a)),$={borderColor:f.color,borderWidth:0<F?F:void 0,borderRadius:I},ee=s()("ystdb-balloon__body",(o={},r()(o,u.class,u.class),r()(o,O.class,O.class),r()(o,"has-background",u.color),r()(o,"is-".concat(W),W),r()(o,"is-".concat(U),U),r()(o,"is-".concat(L),L),o)),te={backgroundColor:u.color,borderColor:O.color},ae=s()("ystdb-ystdb-balloon__text",(l={},r()(l,c.class,c.class),r()(l,"has-text-color",c.color),r()(l,P.class,P.class),l)),oe={color:c.color,fontSize:P.size?P.size+"px":void 0};return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(_.BlockControls,null,Object(n.createElement)(b.Toolbar,{isCollapsed:!0,icon:G?G.icon:q.icon,label:Object(i._x)("Change vertical alignment","Block vertical alignment setting label"),controls:["top","center","bottom"].map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},j[e],{isActive:W===e,onClick:function(){return w({verticalAlign:W===e?void 0:e})}})}))})),Object(n.createElement)(_.InspectorControls,null,Object(n.createElement)(b.PanelBody,{title:Object(i.__)("吹き出し設定","ystandard-blocks")},Object(n.createElement)(b.BaseControl,null,Object(n.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(i.__)("吹き出しの位置","ystandard-blocks")),Object(n.createElement)("div",{className:"ystdb-balloon-selector"},v.map((function(e){return Object(n.createElement)(b.Button,{key:e.value,isDefault:!0,isPrimary:U===e.value,onClick:function(){w({balloonPosition:e.value})}},Object(n.createElement)("span",{className:"ystdb-balloon-selector__container is-".concat(e.value," is-").concat(L)},Object(n.createElement)("span",{className:"ystdb-balloon-selector__image"}," "),Object(n.createElement)("span",{className:"ystdb-balloon-selector__body"},e.label)))})))),Object(n.createElement)(b.BaseControl,null,Object(n.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(i.__)("吹き出しタイプ","ystandard-blocks")),Object(n.createElement)("div",{className:"ystdb-balloon-selector"},m.map((function(e){return Object(n.createElement)(b.Button,{key:e.value,isDefault:!0,isPrimary:L===e.value,onClick:function(){w({balloonType:e.value})}},Object(n.createElement)("span",{className:"ystdb-balloon-selector__container is-".concat(e.value," is-").concat(U)},Object(n.createElement)("span",{className:"ystdb-balloon-selector__image"}," "),Object(n.createElement)("span",{className:"ystdb-balloon-selector__body"},e.label)))}))))),"1"===ystdb.yStandard&&Object(n.createElement)(b.PanelBody,{title:Object(i.__)("登録済みアバター画像","ystandard-blocks")},Object(n.createElement)(b.BaseControl,null,0>=ystdb.balloonImages.length?Object(n.createElement)("div",null,Object(n.createElement)("p",null,"登録済みのアバター画像はありません。"),Object(n.createElement)("p",null,"カスタマイザーの「[ys]拡張機能設定」→「[ys blocks]吹き出しブロック画像設定」から登録してください。")):Object(n.createElement)("div",{className:"ystdb-avatar-list"},ystdb.balloonImages.map((function(e){return Object(n.createElement)(b.Button,{key:e.id,isPrimary:V===e.id&&R===e.name,onClick:function(){w({avatarID:e.id,avatarName:e.name,avatarURL:e.url,avatarAlt:e.name})}},Object(n.createElement)("span",null,Object(n.createElement)("img",{className:"ystdb-avatar-list__image",src:e.url,alt:e.name}),!!e.name&&Object(n.createElement)("span",{className:"ystdb-avatar-list__name"},e.name)))}))))),Object(n.createElement)(b.PanelBody,{title:Object(i.__)("アバター設定","ystandard-blocks")},Object(n.createElement)(b.BaseControl,null,Object(n.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(i.__)("アバターサイズ","ystandard-blocks")),Object(n.createElement)("div",{className:"ystdb-btn-selector components-base-control"},y.map((function(e){return Object(n.createElement)(b.Button,{key:e.value,isDefault:!0,isPrimary:D===e.value,onClick:function(){w({avatarSize:e.value})}},Object(n.createElement)("span",null,e.label))})))),Object(n.createElement)(b.BaseControl,null,Object(n.createElement)(b.RangeControl,{value:I,label:Object(i.__)("アバター画像の角丸","ystandard-blocks"),min:0,max:40,initialPosition:40,allowReset:!0,onChange:function(e){w({avatarBorderRadius:e})}})),Object(n.createElement)(b.BaseControl,null,Object(n.createElement)(b.RangeControl,{value:F,label:Object(i.__)("アバター画像の枠線太さ","ystandard-blocks"),min:0,max:10,initialPosition:0,allowReset:!0,onChange:function(e){w({avatarBorderWidth:e})}})),Object(n.createElement)(b.BaseControl,null,Object(n.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(i.__)("アバター画像枠色","ystandard-blocks")),Object(n.createElement)(b.ColorPalette,{colors:J,disableCustomColors:!1,onChange:function(e){N(e)},value:f.color})),Object(n.createElement)(b.BaseControl,null,Object(n.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(i.__)("アバター名文字色","ystandard-blocks")),Object(n.createElement)(b.ColorPalette,{colors:J,disableCustomColors:!1,onChange:function(e){B(e)},value:p.color}))),Object(n.createElement)(b.PanelBody,{title:Object(i.__)("テキスト設定","ystandard-blocks")},Object(n.createElement)(b.BaseControl,null,Object(n.createElement)(_.FontSizePicker,{label:Object(i.__)("文字サイズ","ystandard-blocks"),value:P.size,onChange:function(e){z(e)}})),Object(n.createElement)(b.BaseControl,null,Object(n.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(i.__)("吹き出し背景色","ystandard-blocks")),Object(n.createElement)(b.ColorPalette,{colors:J,disableCustomColors:!1,onChange:function(e){E(e),k(e)},value:u.color}),Object(n.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(i.__)("吹き出し文字色","ystandard-blocks")),Object(n.createElement)(b.ColorPalette,{colors:J,disableCustomColors:!1,onChange:function(e){h(e)},value:c.color}),Object(n.createElement)(_.ContrastChecker,{backgroundColor:u.color,textColor:c.color})))),Object(n.createElement)("div",{className:K},Object(n.createElement)("figure",{className:Q},Object(n.createElement)(_.MediaUpload,{onSelect:function(e){w({avatarURL:e.url,avatarID:e.id,avatarAlt:e.alt})},type:["image"],value:V,render:function(e){return T&&d!==T?Object(n.createElement)("div",{className:Z,style:$},Object(n.createElement)(b.Button,{onClick:function(){w({avatarID:0,avatarURL:"",avatarAlt:""})},className:"ystdb-mediaupload__preview is-show-text",style:{padding:0}},Object(n.createElement)("img",{src:T,alt:M}))):Object(n.createElement)("div",{className:Z,style:$},Object(n.createElement)(b.Button,{onClick:e.open,className:"ystdb-mediaupload__preview is-no-image"},Object(n.createElement)("img",{src:d,alt:""})))}}),(A||R)&&Object(n.createElement)("figcaption",{className:X},Object(n.createElement)(_.PlainText,{value:R,className:"ystdb-balloon__name--edit",onChange:function(e){w({avatarName:e})},style:Y,placeholder:"名前...","aria-label":Object(i.__)("Name")}))),Object(n.createElement)("div",{className:ee,style:te},Object(n.createElement)(_.RichText,{tagName:"p",placeholder:Object(i.__)("Add text…"),value:H,onChange:function(e){return w({text:e})},withoutInteractiveFormatting:!0,className:ae,style:oe}))))}));var E=a(9);Object(E.registerBlockType)("ystdb/balloon",{title:Object(i.__)("[ys]吹き出し","ystandard-blocks"),description:Object(i.__)("yStandard Blocks 吹き出しブロック","ystandard-blocks"),icon:{src:"format-chat",foreground:o.a.color.iconForeground},keywords:[Object(i.__)("balloon"),Object(i.__)("吹き出し"),"balloon"],category:o.a.category.common,attributes:u,supports:{align:!1,className:!1},edit:h,save:function(e){var t,a,o,l,c,i=e.attributes,b=i.className,d=i.textColor,u=i.customTextColor,m=i.backgroundColor,v=i.customBackgroundColor,y=i.balloonBorderColor,O=i.customBalloonBorderColor,p=i.avatarNameColor,j=i.customAvatarNameColor,g=i.avatarBorderColor,f=i.customAvatarBorderColor,C=i.fontSize,h=i.customFontSize,E=i.avatarName,k=i.avatarURL,B=i.avatarAlt,N=i.avatarSize,x=i.avatarBorderWidth,w=i.avatarBorderRadius,P=i.text,z=i.balloonPosition,S=i.balloonType,A=i.verticalAlign,R=Object(_.getColorClassName)("color",p),T=Object(_.getColorClassName)("border-color",g),M=Object(_.getColorClassName)("color",d),V=Object(_.getFontSizeClass)(C),D=Object(_.getColorClassName)("background-color",m),F=Object(_.getColorClassName)("border-color",y),I=s()(b,"ystdb-balloon",(t={},r()(t,"is-vertically-aligned-".concat(A),A),r()(t,"is-balloon-position-".concat(z),z),t)),H=s()("ystdb-balloon__avatar",r()({},"is-size-".concat(N),N)),U=s()("ystdb-balloon__avatar-image",(a={"has-border-color":T||f},r()(a,T,T),r()(a,"has-border",0<x),a)),L={borderColor:f,borderWidth:0<x?x:void 0,borderRadius:w},W=B||E,G=s()("ystdb-balloon__name",(o={},r()(o,R,R),r()(o,"has-text-color",j||R),o)),q={color:j},J=s()("ystdb-balloon__body",(l={},r()(l,D,D),r()(l,"has-background",D||v),r()(l,"has-border-color",F||O),r()(l,"is-".concat(A),A),r()(l,"is-".concat(z),z),r()(l,"is-".concat(S),S),l)),K={backgroundColor:v,borderColor:O},Q=s()("ystdb-balloon__text",(c={},r()(c,M,M),r()(c,"has-text-color",d||u),r()(c,V,V),c)),X={color:M?void 0:u,fontSize:!V&&h?h+"px":void 0};return Object(n.createElement)("div",{className:I},Object(n.createElement)("figure",{className:H},Object(n.createElement)("img",{className:U,style:L,src:k,alt:W}),E&&Object(n.createElement)("figcaption",{className:G,style:q},E)),Object(n.createElement)("div",{className:J,style:K},Object(n.createElement)(_.RichText.Content,{tagName:"p",className:Q,style:X,value:P})))}})},7:function(e,t,a){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)&&o.length){var n=l.apply(null,o);n&&e.push(n)}else if("object"===r)for(var c in o)a.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(o=function(){return l}.apply(t,[]))||(e.exports=o)}()},8:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var o=a(1),l={category:{common:"ystdb",pro:"ystdb_pro",beta:"ystdb_beta"},color:{iconForeground:"#4190be"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:Object(o.__)("小")},{value:"",label:Object(o.__)("中")},{value:"is-large",label:Object(o.__)("大")}],animationTypes:[{label:Object(o.__)("なし","ystandard-blocks"),value:"none"},{label:Object(o.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"fa-xs",label:Object(o.__)("小")},{value:"",label:Object(o.__)("中")},{value:"fa-2x",label:Object(o.__)("大")}]}}},9:function(e,t){!function(){e.exports=this.wp.blocks}()}});