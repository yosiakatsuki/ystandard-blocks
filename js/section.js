!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=39)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t,n){"use strict";function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e=Number(e),(isNaN(e)||e<t)&&(e=null!==a?a:t),null!==n&&e>n&&(e=n),e}n.d(t,"a",(function(){return a}))},11:function(e,t){!function(){e.exports=this.wp.blocks}()},12:function(e,t){!function(){e.exports=this.wp.compose}()},3:function(e,t){!function(){e.exports=this.wp.components}()},39:function(e,t,n){"use strict";n.r(t);var a=n(8),o=n(4),r=n.n(o),l=n(0),c=n(6),i=n.n(c),s=n(1),d={margin:[{value:"normal",label:Object(s.__)("リセット"),num:2},{value:"wide",label:Object(s.__)("大"),num:4},{value:"narrow",label:Object(s.__)("小"),num:1},{value:"none",label:Object(s.__)("なし"),num:0}],padding:[{value:"normal",label:Object(s.__)("リセット"),num:3},{value:"wide",label:Object(s.__)("大"),num:5},{value:"narrow",label:Object(s.__)("小"),num:1},{value:"none",label:Object(s.__)("なし"),num:0}],innerWidth:[{value:"wide",label:Object(s.__)("ワイド"),num:1232},{value:"narrow",label:Object(s.__)("スリム"),num:560},{value:"none",label:Object(s.__)("なし"),num:0}]},u=n(10),b=n(5),m=n(3),g=n(12),p=Object(g.compose)([Object(b.withColors)("backgroundColor",{textColor:"color"})])((function(e){var t,n=e.attributes,a=e.setAttributes,o=e.backgroundColor,c=e.textColor,g=e.setBackgroundColor,p=e.setTextColor,O=n.wrapperTag,f=n.marginTop,j=n.marginBottom,y=n.paddingTop,_=n.paddingBottom,k=n.paddingLeft,v=n.paddingRight,C=n.backgroundImageURL,E=n.backgroundImageAlt,h=n.backgroundImageID,B=n.backgroundImageOpacity,x=n.backgroundSkew,w=n.backgroundSkewWidth,N=n.innerCustomWidth,T=O,R=C&&!x,I=C&&!x,S="has-background-dim-"+10*Math.round(B/10),L=i()("ystdb-section",(t={"has-background":o.color},r()(t,o.class,o.class),r()(t,"has-text-color",c.color),r()(t,c.class,c.class),r()(t,"has-background-image",R),r()(t,"has-background-dim",I),r()(t,S,I),t)),W={paddingTop:0===f?0:f+"rem",paddingBottom:0===j?0:j+"rem"},P={backgroundColor:o.color&&!x?o.color:void 0,color:c.color,paddingTop:0===y?0:y+"rem",paddingBottom:0===_?0:_+"rem",backgroundImage:R?'url("'.concat(C,'")'):void 0,paddingLeft:"1rem",paddingRight:"1rem"},D={maxWidth:0!==N?N:void 0,marginRight:"auto",marginLeft:"auto",paddingLeft:0===k?0:k+"rem",paddingRight:0===v?0:v+"rem"};return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(b.InspectorControls,null,Object(l.createElement)("div",{className:"ystdb-inspectorcontrols"},Object(l.createElement)(m.PanelBody,{title:Object(s.__)("余白設定","ystandard-blocks")},Object(l.createElement)(m.BaseControl,null,Object(l.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(s.__)("余白設定(外側)","ystandard-blocks")),Object(l.createElement)("div",{className:"ystdb-info__label"},"かんたん設定"),Object(l.createElement)("div",{className:"ystdb-btn-selector components-base-control"},d.margin.map((function(e){return Object(l.createElement)(m.Button,{key:e.value,isDefault:!0,onClick:function(){a({marginTop:e.num,marginBottom:e.num})}},Object(l.createElement)("span",null,e.label))}))),Object(l.createElement)(m.RangeControl,{label:Object(s.__)("上側","ystandard-blocks"),value:f,onChange:function(e){return a({marginTop:Object(u.a)(e,-10,10,0)})},min:-10,max:10,step:.5}),Object(l.createElement)(m.RangeControl,{label:Object(s.__)("下側","ystandard-blocks"),value:j,onChange:function(e){return a({marginBottom:Object(u.a)(e,-10,10,0)})},min:-10,max:10,step:.5}),Object(l.createElement)("p",null,Object(l.createElement)("span",{className:"ystdb-info__small"},"※数字が大きいほど余白が大きくなります。"),Object(l.createElement)("span",{className:"ystdb-info__small"},"※単位はremです。"))),Object(l.createElement)(m.BaseControl,null,Object(l.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(s.__)("余白設定(内側)","ystandard-blocks")),Object(l.createElement)("div",{className:"ystdb-info__label"},"かんたん設定"),Object(l.createElement)("div",{className:"ystdb-btn-selector components-base-control"},d.padding.map((function(e){return Object(l.createElement)(m.Button,{key:e.value,isDefault:!0,onClick:function(){a({paddingTop:e.num,paddingBottom:e.num})}},Object(l.createElement)("span",null,e.label))})),Object(l.createElement)("br",null),Object(l.createElement)("div",null,Object(l.createElement)("span",{className:"ystdb-info__small"},"※上下余白のかんたん設定"))),Object(l.createElement)(m.RangeControl,{label:Object(s.__)("上側","ystandard-blocks"),value:y,onChange:function(e){return a({paddingTop:Object(u.a)(e,0,10)})},min:0,max:10,step:.5}),Object(l.createElement)(m.RangeControl,{label:Object(s.__)("下側","ystandard-blocks"),value:_,onChange:function(e){return a({paddingBottom:Object(u.a)(e,0,10)})},min:0,max:10,step:.5}),Object(l.createElement)(m.RangeControl,{label:Object(s.__)("左側","ystandard-blocks"),value:k,onChange:function(e){return a({paddingLeft:Object(u.a)(e,0,5)})},min:0,max:5,step:.5}),Object(l.createElement)(m.RangeControl,{label:Object(s.__)("右側","ystandard-blocks"),value:v,onChange:function(e){return a({paddingRight:Object(u.a)(e,0,5)})},min:0,max:5,step:.5}),Object(l.createElement)("div",null,Object(l.createElement)("span",{className:"ystdb-info__small"},"※数字が大きいほど余白が大きくなります。"),Object(l.createElement)("span",{className:"ystdb-info__small"},"※単位はremです。")))),Object(l.createElement)(m.PanelBody,{title:Object(s.__)("セクションコンテンツ幅設定","ystandard-blocks")},Object(l.createElement)("div",{className:"ystdb-info__label"},"かんたん設定"),Object(l.createElement)("div",{className:"ystdb-btn-selector components-base-control"},d.innerWidth.map((function(e){return Object(l.createElement)(m.Button,{key:e.value,isDefault:!0,onClick:function(){a({innerCustomWidth:e.num})}},Object(l.createElement)("span",null,e.label))}))),Object(l.createElement)(m.RangeControl,{label:Object(s.__)("コンテンツ部分の最大幅","ystandard-blocks"),value:N,onChange:function(e){return a({innerCustomWidth:Object(u.a)(e,0,1920,960)})},min:0,max:1920,step:16,allowReset:!0}),Object(l.createElement)("p",null,Object(l.createElement)("span",{className:"ystdb-info__small"},"※最大幅指定なしにしたい場合0にしてください。"))),Object(l.createElement)(m.PanelBody,{title:Object(s.__)("HTMLタグ設定","ystandard-blocks"),initialOpen:!1},Object(l.createElement)("p",null,Object(l.createElement)("span",{className:"ystdb-info__small"},"コンテンツを囲むHTMLタグを選択できます。")),Object(l.createElement)("div",{className:"ystdb-btn-selector components-base-control"},[{tag:"div"},{tag:"section"},{tag:"aside"}].map((function(e){return Object(l.createElement)(m.Button,{key:e.tag,isDefault:!0,isPrimary:O===e.tag,onClick:function(){a({wrapperTag:e.tag})}},Object(l.createElement)("span",null,e.tag))})))),Object(l.createElement)(m.PanelBody,{title:Object(s.__)("背景画像設定","ystandard-blocks"),initialOpen:!1},Object(l.createElement)(b.MediaUpload,{onSelect:function(e){a({backgroundImageURL:e.url,backgroundImageID:e.id,backgroundImageAlt:e.alt})},type:["image"],value:h,render:function(e){return 0===h?Object(l.createElement)(m.Button,{isDefault:!0,onClick:e.open},Object(s.__)("背景画像を選択","ystandard-blocks")):Object(l.createElement)("div",null,Object(l.createElement)(m.Button,{onClick:e.open,className:"ystdb-mediaupload__preview",style:{padding:0}},Object(l.createElement)("img",{src:C,alt:E})),Object(l.createElement)(m.Button,{isDefault:!0,onClick:function(){a({backgroundImageURL:"",backgroundImageID:0})}},Object(s.__)("背景画像をクリア","ystandard-blocks")))}}),Object(l.createElement)("br",null),Object(l.createElement)("br",null),Object(l.createElement)(m.RangeControl,{label:Object(s.__)("画像の上に重ねる色の濃さ","ystandard-blocks"),value:B,onChange:function(e){return a({backgroundImageOpacity:Object(u.a)(e,0,100)})},min:0,max:100,step:10}),Object(l.createElement)("p",null,Object(l.createElement)("span",{className:"ystdb-info__small"},"※数値が大きいほど背景画像が見えづらくなります。"),Object(l.createElement)("span",{className:"ystdb-info__small"},"※画像の上に重ねる色は、色設定の「背景色」で変更できます。"))),Object(l.createElement)(m.PanelBody,{title:Object(s.__)("背景の傾き設定","ystandard-blocks"),initialOpen:!1},Object(l.createElement)("p",null,Object(l.createElement)("span",{className:"ystdb-info__small ystdb-info__bold"},"※傾きの設定をする場合、背景画像設定が無視されます。")),Object(l.createElement)(m.RangeControl,{label:Object(s.__)("背景の傾き具合","ystandard-blocks"),value:x,onChange:function(e){return a({backgroundSkew:Object(u.a)(e,-3,3,0)})},min:-3,max:3,step:.5,allowReset:!0}),Object(l.createElement)(m.RangeControl,{label:Object(s.__)("背景の太さ","ystandard-blocks"),value:w,onChange:function(e){return a({backgroundSkewWidth:Object(u.a)(e,70,100,90)})},min:70,max:100,step:1,allowReset:!0}),Object(l.createElement)("p",null,Object(l.createElement)("span",{className:"ystdb-info__small"},"※コンテンツがはみ出る・余白が少なく感じる場合、「背景の太さ」と「余白設定(内側)」の上下を大きくして調整して下さい。"),Object(l.createElement)("span",{className:"ystdb-info__small"},"※背景色は、色設定の「背景色」で変更できます。"))),Object(l.createElement)(b.PanelColorSettings,{title:Object(s.__)("Color Settings"),initialOpen:!0,colorSettings:[{value:o.color,onChange:function(e){g(e)},label:Object(s.__)("Background Color")},{value:c.color,onChange:function(e){p(e)},label:Object(s.__)("Text Color")}]},Object(l.createElement)(b.ContrastChecker,{backgroundColor:o.color,textColor:c.color})))),Object(l.createElement)("div",{className:"ystdb-section__edit-wrap",style:W},Object(l.createElement)("div",{className:L,style:P},function(){if(x){var e=x+"deg",t={height:w?w+"%":void 0,backgroundColor:o.color,transform:"skewY(".concat(e,") translateY(-50%)")},n=i()("ystdb-section__mask");return Object(l.createElement)("div",{className:n,style:t})}}(),Object(l.createElement)(T,{className:"ystdb-section__inner",style:D},Object(l.createElement)(b.InnerBlocks,null)))))}));var O=[{attributes:{wrapperTag:{type:"string",default:"div"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},margin:{type:"string",default:"normal"},marginTop:{type:"integer",default:24},marginBottom:{type:"integer",default:24},padding:{type:"string",default:"normal"},paddingTop:{type:"integer",default:32},paddingBottom:{type:"integer",default:32},innerWidth:{type:"string",default:"normal"},innerCustomWidth:{type:"integer",default:0}},migrate:function(e){var t=e.marginTop,n=e.marginBottom,a=e.paddingTop,o=e.paddingBottom;return{marginTop:Object(u.a)(t,-10,10,0),marginBottom:Object(u.a)(n,-10,10,0),paddingTop:Object(u.a)(a,0,10),paddingBottom:Object(u.a)(o,0,10)}},save:function(e){var t,n=e.attributes,a=n.backgroundColor,o=n.textColor,c=n.customBackgroundColor,s=n.customTextColor,d=n.wrapperTag,u=n.marginTop,m=n.marginBottom,g=n.paddingTop,p=n.paddingBottom,O=n.innerCustomWidth,f=d,j=Object(b.getColorClassName)("color",o),y=Object(b.getColorClassName)("background-color",a),_=i()("ystdb-section",(t={"has-text-color":o||s},r()(t,j,j),r()(t,"has-background",a||c),r()(t,y,y),t)),k={backgroundColor:y?void 0:c,color:j?void 0:s,"margin-top":u,"margin-bottom":m,"padding-top":g,"padding-bottom":p},v={"max-width":0!==O?O:void 0,"margin-right":"auto","margin-left":"auto"};return Object(l.createElement)("div",{className:_,style:k},Object(l.createElement)(f,{className:"ystdb-section__inner",style:v},Object(l.createElement)(b.InnerBlocks.Content,null)))}}],f=n(11);Object(f.registerBlockType)("ystdb/section",{title:Object(s.__)("[ys]セクション","ystandard-blocks"),description:Object(s.__)("yStandard Blocks汎用セクションブロック","ystandard-blocks"),icon:{src:"screenoptions",foreground:a.a.color.iconForeground},keywords:[Object(s.__)("section"),Object(s.__)("セクション"),"section"],category:a.a.category.common,attributes:{wrapperTag:{type:"string",default:"div"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},marginTop:{type:"number",default:2},marginBottom:{type:"number",default:2},paddingTop:{type:"number",default:3},paddingBottom:{type:"number",default:3},paddingLeft:{type:"number",default:0},paddingRight:{type:"number",default:0},innerCustomWidth:{type:"integer",default:960},backgroundImageURL:{type:"string"},backgroundImageAlt:{type:"string"},backgroundImageID:{type:"integer",default:0},backgroundImageOpacity:{type:"integer",default:50},backgroundSkew:{type:"number",default:0},backgroundSkewWidth:{type:"number",default:90}},supports:{align:["wide","full"],anchor:!0,className:!1},edit:p,save:function(e){var t,n=e.attributes,a=n.backgroundColor,o=n.textColor,c=n.customBackgroundColor,s=n.customTextColor,d=n.wrapperTag,u=n.marginTop,m=n.marginBottom,g=n.paddingTop,p=n.paddingBottom,O=n.paddingLeft,f=n.paddingRight,j=n.backgroundImageURL,y=n.backgroundImageOpacity,_=n.backgroundSkew,k=n.backgroundSkewWidth,v=n.innerCustomWidth,C=d,E=Object(b.getColorClassName)("color",o),h=Object(b.getColorClassName)("background-color",a),B=(a||c)&&!_,x=h&&!_,w=j&&!_,N=j&&!_,T="has-background-dim-"+10*Math.round(y/10),R=i()("ystdb-section",(t={"has-text-color":o||s},r()(t,E,E),r()(t,"has-background",B),r()(t,h,x),r()(t,"has-background-image",w),r()(t,"has-background-dim",N),r()(t,T,N),r()(t,"has-background-skew",_),t)),I={backgroundColor:h||_?void 0:c,color:E?void 0:s,marginTop:0===u?0:u+"rem",marginBottom:0===m?0:m+"rem",paddingTop:0===g?0:g+"rem",paddingBottom:0===p?0:p+"rem",backgroundImage:w?'url("'.concat(j,'")'):void 0,paddingLeft:"1rem",paddingRight:"1rem"},S={maxWidth:0!==v?v:void 0,marginRight:"auto",marginLeft:"auto",paddingLeft:0===O?0:O+"rem",paddingRight:0===f?0:f+"rem"};return Object(l.createElement)("div",{className:R,style:I},function(){if(_){var e={height:k?k+"%":void 0,backgroundColor:h?void 0:c,transform:"skewY(".concat(_+"deg",") translateY(-50%)")},t=i()("ystdb-section__mask",r()({"has-background":a||c},h,h));return Object(l.createElement)("div",{className:t,style:e})}}(),Object(l.createElement)(C,{className:"ystdb-section__inner",style:S},Object(l.createElement)(b.InnerBlocks.Content,null)))},deprecated:O})},4:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},5:function(e,t){!function(){e.exports=this.wp.blockEditor}()},6:function(e,t,n){var a;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var l=o.apply(null,a);l&&e.push(l)}else if("object"===r)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={category:{common:"ystdb",pro:"ystdb_pro",beta:"ystdb_beta"},color:{iconForeground:"#4190be"}}}});