!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=73)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.wp.blocks}()},12:function(e,t){!function(){e.exports=this.wp.compose}()},13:function(e,t,n){"use strict";function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e=Number(e),(isNaN(e)||e<t)&&(e=null!==a?a:t),null!==n&&e>n&&(e=n),e}n.d(t,"a",(function(){return a}))},15:function(e,t,n){"use strict";var a=n(16);function o(){}function r(){}r.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,r,l){if(l!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n,n}},16:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2:function(e,t){!function(){e.exports=this.wp.components}()},22:function(e,t){!function(){e.exports=this.wp.data}()},3:function(e,t){!function(){e.exports=this.React}()},4:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},5:function(e,t){!function(){e.exports=this.wp.blockEditor}()},6:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var l=o.apply(null,a);l&&e.push(l)}else if("object"===r)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},73:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(9),r=n(4),l=n.n(r),c=n(6),i=n.n(c),d=n(1),s=n(13),b={margin:[{value:"normal",label:Object(d.__)("リセット","ystandard-blocks"),num:0},{value:"wide",label:Object(d.__)("大","ystandard-blocks"),num:80},{value:"narrow",label:Object(d.__)("小","ystandard-blocks"),num:32},{value:"none",label:Object(d.__)("なし","ystandard-blocks"),num:0}],padding:[{value:"normal",label:Object(d.__)("リセット","ystandard-blocks"),num:80},{value:"wide",label:Object(d.__)("大","ystandard-blocks"),num:128},{value:"narrow",label:Object(d.__)("小","ystandard-blocks"),num:40},{value:"none",label:Object(d.__)("なし","ystandard-blocks"),num:0}],innerWidth:[{value:"wide",label:Object(d.__)("ワイド","ystandard-blocks"),num:1232},{value:"narrow",label:Object(d.__)("スリム","ystandard-blocks"),num:560},{value:"none",label:Object(d.__)("なし","ystandard-blocks"),num:0}]},m=[{tag:"div"},{tag:"section"},{tag:"aside"}],u=[{value:"skew",label:Object(d.__)("斜め","ystandard-blocks")},{value:"wave",label:Object(d.__)("波線","ystandard-blocks")},{value:"triangle",label:Object(d.__)("三角形","ystandard-blocks")}],p=[{label:"なし",value:"none"},{label:"フェードイン",value:"fadein"},{label:"下からフェードイン",value:"fadein-up"},{label:"縮小しながらフェードイン",value:"fadein-shrink"}],g=function(e,t){var n=t,a=t;return n=0>t?Object(s.a)("".concat(90+t/2),50,90):Object(s.a)("".concat(90-t/2),50,90),a=3*t/4,"wave"===e?"m0,".concat(n," q20,").concat(a," 40,0 t50,0 t50,0 t50,0 t50,0 V100 L0,100 z"):(n=10+.4*Math.abs(t),a=10+.9*Math.abs(t),"triangle"===e?"m".concat(50-n,",100 l").concat(n,",-").concat(a," l").concat(n,",").concat(a," z"):(a=0>t?100+t:100-t,"m".concat(n=0>t?100:0,",").concat(a," L100,100 L0,100 z")))},y=n(22),O=n(5),v=n(2),f=n(12),j=Object(f.compose)([Object(O.withColors)("backgroundColor",{textColor:"color",dividerColorTop:"fill",dividerColorBottom:"fill"})])((function(e){var t=e.attributes,n=e.setAttributes,o=e.backgroundColor,r=e.textColor,c=e.dividerColorTop,f=e.dividerColorBottom,j=e.setBackgroundColor,_=e.setTextColor,k=e.setDividerColorTop,h=e.setDividerColorBottom,C=e.className,E=t.wrapperTag,T=t.marginTop,B=t.marginBottom,x=t.paddingTop,w=t.paddingBottom,N=t.paddingLeft,R=t.paddingRight,I=t.backgroundImageURL,L=t.backgroundImageAlt,P=t.backgroundImageID,S=t.backgroundImageOpacity,D=t.backgroundImageParallax,M=t.innerCustomWidth,W=t.dividerTypeTop,H=t.dividerLevelTop,A=t.dividerTypeBottom,U=t.dividerLevelBottom,z=t.screenHeightMode,F=t.sectionMinHeight,V=t.animationType,G=t.animationSpeed,Y=Object(y.select)("core/block-editor").getSettings().colors,q=E,J=I||o.color,K={paddingTop:0===T?0:T+"px",paddingBottom:0===B?0:B+"px"},Q=i()(C,"ystdb-section",{"has-background-image":I,"is-screen-height":z}),X={color:r.color,paddingTop:0===x?0:x+"px",paddingBottom:0===w?0:w+"px",backgroundImage:I?'url("'.concat(I,'")'):void 0,minHeight:F?F+"px":void 0},Z=i()("ystdb-section__bg",l()({"has-background":o.color},o.class,o.class)),$={backgroundColor:o.color?o.color:"#000",opacity:S/100},ee=i()("ystdb-section__inner",l()({"has-text-color":r.color},r.class,r.class)),te={maxWidth:0!==M?M:void 0,marginRight:"auto",marginLeft:"auto",paddingLeft:0===N?0:N+"px",paddingRight:0===R?0:R+"px"},ne=function(e,t,n,o){var r=i()("ystdb-section__divider","ystdb-section__divider--".concat(t),"ystdb-section__divider--".concat(e)),l=g(e,n);return Object(a.createElement)("div",{className:r},Object(a.createElement)(v.SVG,{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},Object(a.createElement)(v.Path,{d:l,strokewidth:"0",fill:o})))};return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(O.InspectorControls,null,Object(a.createElement)("div",{className:"ystdb-inspectorcontrols"},Object(a.createElement)(v.PanelBody,{title:Object(d.__)("余白設定","ystandard-blocks")},Object(a.createElement)(v.BaseControl,null,Object(a.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(d.__)("余白設定(外側)","ystandard-blocks")),Object(a.createElement)("div",{className:"ystdb-info__label"},"かんたん設定"),Object(a.createElement)("div",{className:"ystdb-btn-selector components-base-control"},b.margin.map((function(e){return Object(a.createElement)(v.Button,{key:e.value,isDefault:!0,onClick:function(){n({marginTop:e.num,marginBottom:e.num})}},Object(a.createElement)("span",null,e.label))}))),Object(a.createElement)(v.RangeControl,{label:Object(d.__)("上側","ystandard-blocks"),value:T,onChange:function(e){return n({marginTop:Object(s.a)(e,-200,200,0)})},min:-200,max:200,step:1}),Object(a.createElement)(v.RangeControl,{label:Object(d.__)("下側","ystandard-blocks"),value:B,onChange:function(e){return n({marginBottom:Object(s.a)(e,-200,200,0)})},min:-200,max:200,step:1}),Object(a.createElement)("p",null,Object(a.createElement)("span",{className:"ystdb-info__small"},"※数字が大きいほど余白が大きくなります。"))),Object(a.createElement)(v.BaseControl,null,Object(a.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(d.__)("余白設定(内側)","ystandard-blocks")),Object(a.createElement)("div",{className:"ystdb-info__label"},"かんたん設定"),Object(a.createElement)("div",{className:"ystdb-btn-selector components-base-control"},b.padding.map((function(e){return Object(a.createElement)(v.Button,{key:e.value,isDefault:!0,onClick:function(){n({paddingTop:e.num,paddingBottom:e.num})}},Object(a.createElement)("span",null,e.label))})),Object(a.createElement)("br",null),Object(a.createElement)("div",null,Object(a.createElement)("span",{className:"ystdb-info__small"},"※上下余白のかんたん設定"))),Object(a.createElement)(v.RangeControl,{label:Object(d.__)("上側","ystandard-blocks"),value:x,onChange:function(e){return n({paddingTop:Object(s.a)(e,0,200)})},min:0,max:200,step:1}),Object(a.createElement)(v.RangeControl,{label:Object(d.__)("下側","ystandard-blocks"),value:w,onChange:function(e){return n({paddingBottom:Object(s.a)(e,0,200)})},min:0,max:200,step:1}),Object(a.createElement)(v.RangeControl,{label:Object(d.__)("左側","ystandard-blocks"),value:N,onChange:function(e){return n({paddingLeft:Object(s.a)(e,0,200)})},min:0,max:200,step:1}),Object(a.createElement)(v.RangeControl,{label:Object(d.__)("右側","ystandard-blocks"),value:R,onChange:function(e){return n({paddingRight:Object(s.a)(e,0,200)})},min:0,max:200,step:1}),Object(a.createElement)("div",null,Object(a.createElement)("span",{className:"ystdb-info__small"},"※数字が大きいほど余白が大きくなります。")))),Object(a.createElement)(v.PanelBody,{title:Object(d.__)("背景設定","ystandard-blocks"),initialOpen:!1},Object(a.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(d.__)("背景画像","ystandard-blocks")),Object(a.createElement)(O.MediaUpload,{onSelect:function(e){n({backgroundImageURL:e.url,backgroundImageID:e.id,backgroundImageAlt:e.alt}),100===S&&n({backgroundImageOpacity:50})},type:["image"],value:P,render:function(e){return 0===P?Object(a.createElement)(v.Button,{isDefault:!0,onClick:e.open},Object(d.__)("背景画像を選択","ystandard-blocks")):Object(a.createElement)("div",null,Object(a.createElement)(v.Button,{onClick:e.open,className:"ystdb-mediaupload__preview",style:{padding:0}},Object(a.createElement)("img",{src:I,alt:L})),Object(a.createElement)(v.Button,{isDefault:!0,onClick:function(){n({backgroundImageURL:"",backgroundImageID:0})}},Object(d.__)("背景画像をクリア","ystandard-blocks")))}}),Object(a.createElement)("br",null),Object(a.createElement)("br",null),Object(a.createElement)(v.RangeControl,{label:Object(d.__)("背景色の濃さ","ystandard-blocks"),value:S,onChange:function(e){return n({backgroundImageOpacity:Object(s.a)(e,0,100)})},min:0,max:100,step:1}),Object(a.createElement)("p",null,Object(a.createElement)("span",{className:"ystdb-info__small"},"※数値が大きいほど背景画像が見えづらくなります。"),Object(a.createElement)("span",{className:"ystdb-info__small"},"※画像の上に重ねる色は、色設定の「背景色」で変更できます。")),Object(a.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(d.__)("固定背景","ystandard-blocks")),Object(a.createElement)(v.ToggleControl,{label:Object(d.__)("背景を固定する","ystandard-blocks"),checked:D,onChange:function(){n({backgroundImageParallax:!D})}})),Object(a.createElement)(O.PanelColorSettings,{title:Object(d.__)("Background & Text Color"),initialOpen:!1,colorSettings:[{value:o.color,onChange:function(e){j(e)},label:Object(d.__)("Background Color")},{value:r.color,onChange:function(e){_(e)},label:Object(d.__)("Text Color")}]},Object(a.createElement)(O.ContrastChecker,{backgroundColor:o.color,textColor:r.color})),Object(a.createElement)(v.PanelBody,{title:Object(d.__)("区切り線設定","ystandard-blocks"),initialOpen:!1},Object(a.createElement)("div",{className:"ystdb-inspector-controls__dscr"},"タイプ・レベル・色をすべて設定すると表示されます。",Object(a.createElement)("br",null),"上下のブロックの背景色と色を合わせることをオススメします。",Object(a.createElement)("br",null),Object(a.createElement)("br",null)),Object(a.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(d.__)("上側の区切り設定","ystandard-blocks")),Object(a.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(d.__)("区切りタイプ","ystandard-blocks")),Object(a.createElement)("div",{className:"ystdb-btn-selector components-base-control"},u.map((function(e){return Object(a.createElement)(v.Button,{key:e.value,isDefault:!0,isPrimary:W===e.value,onClick:function(){n({dividerTypeTop:e.value})}},Object(a.createElement)("span",null,e.label))}))),Object(a.createElement)(v.RangeControl,{label:Object(d.__)("レベル","ystandard-blocks"),value:H,onChange:function(e){return n({dividerLevelTop:Object(s.a)(e,-100,100,0)})},min:-100,max:100,allowReset:!0}),Object(a.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(d.__)("色","ystandard-blocks")),Object(a.createElement)(v.ColorPalette,{colors:Y,disableCustomColors:!1,onChange:function(e){k(e)},value:c.color}),Object(a.createElement)("br",null),Object(a.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(d.__)("下側の区切り設定","ystandard-blocks")),Object(a.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(d.__)("区切りタイプ","ystandard-blocks")),Object(a.createElement)("div",{className:"ystdb-btn-selector components-base-control"},u.map((function(e){return Object(a.createElement)(v.Button,{key:e.value,isDefault:!0,isPrimary:A===e.value,onClick:function(){n({dividerTypeBottom:e.value})}},Object(a.createElement)("span",null,e.label))}))),Object(a.createElement)(v.RangeControl,{label:Object(d.__)("レベル","ystandard-blocks"),value:U,onChange:function(e){return n({dividerLevelBottom:Object(s.a)(e,-100,100,0)})},min:-100,max:100,allowReset:!0}),Object(a.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(d.__)("色","ystandard-blocks")),Object(a.createElement)(v.ColorPalette,{colors:Y,disableCustomColors:!1,onChange:function(e){h(e)},value:f.color})),Object(a.createElement)(v.PanelBody,{title:Object(d.__)("コンテンツ幅設定","ystandard-blocks"),initialOpen:!1},Object(a.createElement)("div",{className:"ystdb-info__label"},"かんたん設定"),Object(a.createElement)("div",{className:"ystdb-btn-selector components-base-control"},b.innerWidth.map((function(e){return Object(a.createElement)(v.Button,{key:e.value,isDefault:!0,onClick:function(){n({innerCustomWidth:e.num})}},Object(a.createElement)("span",null,e.label))}))),Object(a.createElement)(v.RangeControl,{label:Object(d.__)("コンテンツ部分の最大幅","ystandard-blocks"),value:M,onChange:function(e){return n({innerCustomWidth:Object(s.a)(e,0,1920,0)})},min:0,max:1920,step:16,allowReset:!0}),Object(a.createElement)("p",null,Object(a.createElement)("span",{className:"ystdb-info__small"},"※最大幅の指定をしない場合は0にしてください。"))),Object(a.createElement)(v.PanelBody,{title:Object(d.__)("セクション高さ設定","ystandard-blocks"),initialOpen:!1},Object(a.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(d.__)("高さ設定","ystandard-blocks")),Object(a.createElement)(v.ToggleControl,{label:Object(d.__)("画面と同じ高さにする","ystandard-blocks"),checked:z,onChange:function(){n({screenHeightMode:!z})}}),Object(a.createElement)(v.RangeControl,{label:Object(d.__)("セクション最小高さ","ystandard-blocks"),value:F,onChange:function(e){return n({sectionMinHeight:Object(s.a)(e,0,1e3,0)})},min:0,max:1e3,allowReset:!0}),Object(a.createElement)("div",{className:"ystdb-inspector-controls__dscr"},"※「画面と同じ高さにする」をONにした場合、セクション最小高さも合わせて設定してください。（例：500）")),Object(a.createElement)(v.PanelBody,{title:Object(d.__)("アニメーション設定","ystandard-blocks"),initialOpen:!1},Object(a.createElement)(v.SelectControl,{label:Object(d.__)("アニメーション種類","ystandard-blocks"),value:V,options:p,onChange:function(e){n({animationType:e})}}),Object(a.createElement)(v.RangeControl,{label:Object(d.__)("アニメーション速度","ystandard-blocks"),value:Object(s.a)(G,1,10,3),onChange:function(e){return n({animationSpeed:Object(s.a)(e,1,10,3)})},min:1,max:10,allowReset:!0})),Object(a.createElement)(v.PanelBody,{title:Object(d.__)("HTMLタグ設定","ystandard-blocks"),initialOpen:!1},Object(a.createElement)("p",null,Object(a.createElement)("span",{className:"ystdb-info__small"},"コンテンツを囲むHTMLタグを選択できます。")),Object(a.createElement)("div",{className:"ystdb-btn-selector components-base-control"},m.map((function(e){return Object(a.createElement)(v.Button,{key:e.tag,isDefault:!0,isPrimary:E===e.tag,onClick:function(){n({wrapperTag:e.tag})}},Object(a.createElement)("span",null,e.tag))})))))),Object(a.createElement)(O.__experimentalBlock.div,{className:"ystdb-section__edit-wrap",style:K},Object(a.createElement)("div",{className:Q,style:X},J&&Object(a.createElement)("div",{className:Z,"aria-hidden":"true",role:"img",style:$}," "),0!==H&&c.color&&ne(W,"top",H,c.color),0!==U&&f.color&&ne(A,"bottom",U,f.color),Object(a.createElement)("div",{className:"ystdb-section__container"},Object(a.createElement)(q,{className:ee,style:te},Object(a.createElement)(O.InnerBlocks,null))))))}));var _=n(3),k=n.n(_),h=n(8),C=n.n(h);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var B=Object(_.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,l=T(e,["color","size"]);return k.a.createElement("svg",E({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),k.a.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),k.a.createElement("polyline",{points:"2 17 12 22 22 17"}),k.a.createElement("polyline",{points:"2 12 12 17 22 12"}))}));B.propTypes={color:C.a.string,size:C.a.oneOfType([C.a.string,C.a.number])},B.displayName="Layers";var x=B;function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R={wrapperTag:{type:"string",default:"div"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},margin:{type:"string",default:"normal"},marginTop:{type:"integer",default:24},marginBottom:{type:"integer",default:24},padding:{type:"string",default:"normal"},paddingTop:{type:"integer",default:32},paddingBottom:{type:"integer",default:32},innerWidth:{type:"string",default:"normal"},innerCustomWidth:{type:"integer",default:0}},I=[{attributes:N(N({},R),{},{marginTop:{type:"integer",default:2},marginBottom:{type:"integer",default:2},paddingTop:{type:"number",default:3},paddingBottom:{type:"number",default:3},paddingLeft:{type:"number",default:0},paddingRight:{type:"number",default:0},backgroundImageURL:{type:"string"},backgroundImageAlt:{type:"string"},backgroundImageID:{type:"integer",default:0},backgroundImageOpacity:{type:"integer",default:50},backgroundImageParallax:{type:"bool",default:!1},screenHeightMode:{type:"bool",default:!1},sectionMinHeight:{type:"number",default:0},dividerTypeTop:{type:"string",default:"skew"},dividerLevelTop:{type:"number",default:0},dividerColorTop:{type:"string"},customDividerColorTop:{type:"string"},dividerTypeBottom:{type:"string",default:"skew"},dividerLevelBottom:{type:"number",default:0},dividerColorBottom:{type:"string"},customDividerColorBottom:{type:"string"},animationType:{type:"string",default:"none"},animationSpeed:{type:"number",default:3}}),supports:{align:["wide","full"],anchor:!0,className:!1},migrate:function(e){return N(N({},e),{},{marginTop:16*e.marginTop,marginBottom:16*e.marginBottom,paddingTop:16*e.paddingTop,paddingBottom:16*e.paddingBottom,paddingLeft:16*e.paddingLeft,paddingRight:16*e.paddingRight})},save:function(e){var t=e.attributes,n=t.wrapperTag,o=t.backgroundColor,r=t.customBackgroundColor,c=t.textColor,d=t.customTextColor,s=t.marginTop,b=t.marginBottom,m=t.paddingTop,u=t.paddingBottom,p=t.paddingLeft,y=t.paddingRight,f=t.backgroundImageURL,j=t.backgroundImageOpacity,_=t.backgroundImageParallax,k=t.innerCustomWidth,h=t.dividerTypeTop,C=t.dividerLevelTop,E=t.dividerColorTop,T=t.customDividerColorTop,B=t.dividerTypeBottom,x=t.dividerLevelBottom,w=t.dividerColorBottom,N=t.customDividerColorBottom,R=t.screenHeightMode,I=t.sectionMinHeight,L=t.animationType,P=t.animationSpeed,S=n,D=Object(O.getColorClassName)("color",c),M=Object(O.getColorClassName)("background-color",o),W=Object(O.getColorClassName)("fill",E),H=Object(O.getColorClassName)("fill",w),A=L&&"none"!==L,U=f||o||r,z=i()("ystdb-section",{"has-background-image":f,"is-screen-height":R,"has-animation":A,"has-parallax":_}),F=A?L:void 0,V={color:D?void 0:d,paddingTop:0===m?0:m+"rem",paddingBottom:0===u?0:u+"rem",marginTop:s+"rem",marginBottom:b+"rem",backgroundImage:f?'url("'.concat(f,'")'):void 0,minHeight:I?I+"px":void 0,paddingLeft:0<k?"1rem":void 0,paddingRight:0<k?"1rem":void 0,animationDuration:A?"".concat(P,"s"):void 0},G=i()("ystdb-section__bg",l()({"has-background":o||r},M,M)),Y={backgroundColor:M||r?r:"#000",opacity:j/100},q=i()("ystdb-section__inner",l()({"has-text-color":D||d},D,D)),J={maxWidth:0<k?k:void 0,marginRight:"auto",marginLeft:"auto",paddingLeft:0===p?0:p+"rem",paddingRight:0===y?0:y+"rem"},K=function(e,t,n,o,r){var c=i()("ystdb-section__divider","ystdb-section__divider--".concat(t),"ystdb-section__divider--".concat(e)),d=g(e,n),s=i()("ystdb-section__divider-image",l()({},o,o));return Object(a.createElement)("div",{className:c},Object(a.createElement)(v.SVG,{className:s,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},Object(a.createElement)(v.Path,{d:d,strokewidth:"0",fill:r})))},Q=0!==C&&(W||T),X=0!==x&&(H||N);return Object(a.createElement)("div",{className:z,style:V,"data-animation":F},U&&Object(a.createElement)("div",{className:G,"aria-hidden":"true",role:"img",style:Y}," "),Q&&K(h,"top",C,W,T),X&&K(B,"bottom",x,H,N),Object(a.createElement)("div",{className:"ystdb-section__container"},Object(a.createElement)(S,{className:q,style:J},Object(a.createElement)(O.InnerBlocks.Content,null))))}},{attributes:N(N({},R),{},{paddingLeft:{type:"number",default:0},paddingRight:{type:"number",default:0},innerCustomWidth:{type:"integer",default:960},backgroundImageURL:{type:"string"},backgroundImageAlt:{type:"string"},backgroundImageID:{type:"integer",default:0},backgroundImageOpacity:{type:"integer",default:50},backgroundSkew:{type:"number",default:0},backgroundSkewWidth:{type:"number",default:90}}),supports:{align:["wide","full"],anchor:!0,className:!1},migrate:function(e){return N(N({},e),{},{dividerLevelTop:e.backgroundSkew,dividerLevelBottom:e.backgroundSkew,animationType:"none",animationSpeed:3,backgroundImageParallax:!1})},save:function(e){var t,n=e.attributes,o=n.backgroundColor,r=n.textColor,c=n.customBackgroundColor,d=n.customTextColor,s=n.wrapperTag,b=n.marginTop,m=n.marginBottom,u=n.paddingTop,p=n.paddingBottom,g=n.paddingLeft,y=n.paddingRight,v=n.backgroundImageURL,f=n.backgroundImageOpacity,j=n.backgroundSkew,_=n.backgroundSkewWidth,k=n.innerCustomWidth,h=s,C=Object(O.getColorClassName)("color",r),E=Object(O.getColorClassName)("background-color",o),T=(o||c)&&!j,B=E&&!j,x=v&&!j,w=v&&!j,N="has-background-dim-"+10*Math.round(f/10),R=i()("ystdb-section",(t={"has-text-color":r||d},l()(t,C,C),l()(t,"has-background",T),l()(t,E,B),l()(t,"has-background-image",x),l()(t,"has-background-dim",w),l()(t,N,w),l()(t,"has-background-skew",j),t)),I={backgroundColor:E||j?void 0:c,color:C?void 0:d,marginTop:0===b?0:b+"rem",marginBottom:0===m?0:m+"rem",paddingTop:0===u?0:u+"rem",paddingBottom:0===p?0:p+"rem",backgroundImage:x?'url("'.concat(v,'")'):void 0,paddingLeft:"1rem",paddingRight:"1rem"},L={maxWidth:0!==k?k:void 0,marginRight:"auto",marginLeft:"auto",paddingLeft:0===g?0:g+"rem",paddingRight:0===y?0:y+"rem"};return Object(a.createElement)("div",{className:R,style:I},function(){if(j){var e={height:_?_+"%":void 0,backgroundColor:E?void 0:c,transform:"skewY(".concat(j+"deg",") translateY(-50%)")},t=i()("ystdb-section__mask",l()({"has-background":o||c},E,E));return Object(a.createElement)("div",{className:t,style:e})}}(),Object(a.createElement)(h,{className:"ystdb-section__inner",style:L},Object(a.createElement)(O.InnerBlocks.Content,null)))}},{attributes:R,migrate:function(e){var t=e.marginTop,n=e.marginBottom,a=e.paddingTop,o=e.paddingBottom;return{marginTop:Object(s.a)(t,-10,10,0),marginBottom:Object(s.a)(n,-10,10,0),paddingTop:Object(s.a)(a,0,10),paddingBottom:Object(s.a)(o,0,10)}},save:function(e){var t,n=e.attributes,o=n.backgroundColor,r=n.textColor,c=n.customBackgroundColor,d=n.customTextColor,s=n.wrapperTag,b=n.marginTop,m=n.marginBottom,u=n.paddingTop,p=n.paddingBottom,g=n.innerCustomWidth,y=s,v=Object(O.getColorClassName)("color",r),f=Object(O.getColorClassName)("background-color",o),j=i()("ystdb-section",(t={"has-text-color":r||d},l()(t,v,v),l()(t,"has-background",o||c),l()(t,f,f),t)),_={backgroundColor:f?void 0:c,color:v?void 0:d,"margin-top":b,"margin-bottom":m,"padding-top":u,"padding-bottom":p},k={"max-width":0!==g?g:void 0,"margin-right":"auto","margin-left":"auto"};return Object(a.createElement)("div",{className:j,style:_},Object(a.createElement)(y,{className:"ystdb-section__inner",style:k},Object(a.createElement)(O.InnerBlocks.Content,null)))}}],L=n(10);Object(L.registerBlockType)("ystdb/section",{title:Object(d.__)("セクション","ystandard-blocks"),description:Object(d.__)("yStandard Blocks汎用セクションブロック","ystandard-blocks"),icon:Object(a.createElement)(x,{stroke:o.a.color.iconForeground,style:{fill:"none"}}),keywords:[Object(d.__)("section"),Object(d.__)("セクション"),"section"],category:o.a.category.common,attributes:{wrapperTag:{type:"string",default:"div"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},marginTop:{type:"number",default:0},marginBottom:{type:"number",default:0},paddingTop:{type:"number",default:80},paddingBottom:{type:"number",default:80},paddingLeft:{type:"number",default:0},paddingRight:{type:"number",default:0},innerCustomWidth:{type:"integer",default:0},backgroundImageURL:{type:"string"},backgroundImageAlt:{type:"string"},backgroundImageID:{type:"integer",default:0},backgroundImageOpacity:{type:"integer",default:100},backgroundImageParallax:{type:"bool",default:!1},screenHeightMode:{type:"bool",default:!1},sectionMinHeight:{type:"number",default:0},dividerTypeTop:{type:"string",default:"skew"},dividerLevelTop:{type:"number",default:0},dividerColorTop:{type:"string"},customDividerColorTop:{type:"string"},dividerTypeBottom:{type:"string",default:"skew"},dividerLevelBottom:{type:"number",default:0},dividerColorBottom:{type:"string"},customDividerColorBottom:{type:"string"},animationType:{type:"string",default:"none"},animationSpeed:{type:"number",default:2}},supports:{align:["wide","full"],anchor:!0,className:!1,lightBlockWrapper:!0},edit:j,save:function(e){var t=e.attributes,n=t.wrapperTag,o=t.backgroundColor,r=t.customBackgroundColor,c=t.textColor,d=t.customTextColor,s=t.marginTop,b=t.marginBottom,m=t.paddingTop,u=t.paddingBottom,p=t.paddingLeft,y=t.paddingRight,f=t.backgroundImageURL,j=t.backgroundImageOpacity,_=t.backgroundImageParallax,k=t.innerCustomWidth,h=t.dividerTypeTop,C=t.dividerLevelTop,E=t.dividerColorTop,T=t.customDividerColorTop,B=t.dividerTypeBottom,x=t.dividerLevelBottom,w=t.dividerColorBottom,N=t.customDividerColorBottom,R=t.screenHeightMode,I=t.sectionMinHeight,L=t.animationType,P=t.animationSpeed,S=n,D=Object(O.getColorClassName)("color",c),M=Object(O.getColorClassName)("background-color",o),W=Object(O.getColorClassName)("fill",E),H=Object(O.getColorClassName)("fill",w),A=L&&"none"!==L,U=f||o||r,z=i()("ystdb-section",{"has-background-image":f,"is-screen-height":R,"has-animation":A,"has-parallax":_}),F=A?L:void 0,V={color:D?void 0:d,paddingTop:0===m?0:m+"px",paddingBottom:0===u?0:u+"px",marginTop:s+"px",marginBottom:b+"px",backgroundImage:f?'url("'.concat(f,'")'):void 0,minHeight:I?I+"px":void 0,paddingLeft:0<k?"1rem":void 0,paddingRight:0<k?"1rem":void 0,animationDuration:A?"".concat(P,"s"):void 0},G=i()("ystdb-section__bg",l()({"has-background":o||r},M,M)),Y={backgroundColor:M||r?r:"#000",opacity:j/100},q=i()("ystdb-section__inner",l()({"has-text-color":D||d},D,D)),J={maxWidth:0<k?k:void 0,marginRight:"auto",marginLeft:"auto",paddingLeft:0===p?0:p+"px",paddingRight:0===y?0:y+"px"},K=function(e,t,n,o,r){var c=i()("ystdb-section__divider","ystdb-section__divider--".concat(t),"ystdb-section__divider--".concat(e)),d=g(e,n),s=i()("ystdb-section__divider-image",l()({},o,o));return Object(a.createElement)("div",{className:c},Object(a.createElement)(v.SVG,{className:s,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},Object(a.createElement)(v.Path,{d:d,strokewidth:"0",fill:r})))},Q=0!==C&&(W||T),X=0!==x&&(H||N);return Object(a.createElement)("div",{className:z,style:V,"data-animation":F},U&&Object(a.createElement)("div",{className:G,"aria-hidden":"true",role:"img",style:Y}," "),Q&&K(h,"top",C,W,T),X&&K(B,"bottom",x,H,N),Object(a.createElement)("div",{className:"ystdb-section__container"},Object(a.createElement)(S,{className:q,style:J},Object(a.createElement)(O.InnerBlocks.Content,null))))},deprecated:I})},8:function(e,t,n){e.exports=n(15)()},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(1),o={category:{common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},color:{iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:Object(a.__)("小")},{value:"",label:Object(a.__)("中")},{value:"is-large",label:Object(a.__)("大")}],animationTypes:[{label:Object(a.__)("なし","ystandard-blocks"),value:"none"},{label:Object(a.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"is-small",label:Object(a.__)("小")},{value:"",label:Object(a.__)("中")},{value:"is-large",label:Object(a.__)("大")}]}}}});