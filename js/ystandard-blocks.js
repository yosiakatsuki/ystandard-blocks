!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){var a;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)&&a.length){var r=o.apply(null,a);r&&e.push(r)}else if("object"===l)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}void 0!==e&&e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=wp.i18n.__,o=[{class:"fas fa-angle-right",title:a("右矢印","ystandard-blocks")},{class:"fas fa-angle-double-right",title:a("右矢印(二重)","ystandard-blocks")},{class:"fas fa-chevron-circle-right",title:a("右矢印(丸)","ystandard-blocks")},{class:"far fa-hand-point-right",title:a("右指差し","ystandard-blocks")},{class:"fas fa-shopping-cart",title:a("カート","ystandard-blocks")},{class:"fas fa-check",title:a("チェック","ystandard-blocks")},{class:"fas fa-external-link-alt",title:a("外部リンク","ystandard-blocks")},{class:"far fa-file",title:a("ファイル","ystandard-blocks")},{class:"fas fa-download",title:a("ファイル","ystandard-blocks")}]},function(e,t,n){"use strict";var a=n(0),o=n(2),l=n.n(o),r=n(3),c=wp.editor,s=c.BlockControls,i=c.PlainText,d=c.AlignmentToolbar,b=c.InspectorControls,m=c.PanelColorSettings,u=c.ContrastChecker,g=(c.getColorClassName,c.withColors,wp.element.Fragment),p=wp.components,y=p.Disabled,k=p.SandBox,f=p.PanelBody,v=p.BaseControl,O=p.Button,j=p.ToggleControl,C=(wp.compose.withState,wp.i18n.__),E=wp.blocks.registerBlockType,h=wp.editor.withColors,w=wp.compose,_=w.compose,x=w.withState,N=wp.i18n.__;E("ystdb/btn-link",{title:N("ボタン型リンク","ystandard-blocks"),description:N("入力したリンク(a)タグをボタン形式で表示するブロック","ystandard-blocks"),icon:"embed-generic",keywords:[N("link"),N("button"),"button"],category:"ystdb",attributes:{content:{type:"string"},backgroundColor:{type:"string"},textColor:{type:"string"},customBackgroundColor:{type:"string"},customTextColor:{type:"string"},icon:{type:"string"},align:{type:"string"},buttonType:{type:"string"}},supports:{className:!1,html:!1},edit:_([h("backgroundColor",{textColor:"color"}),x({isPreview:!1,styles:""})])(function(e){var t=e.backgroundColor,n=e.textColor,o=e.setBackgroundColor,c=e.setTextColor,p=e.attributes,E=e.setAttributes,h=e.setState,w=e.isPreview,_=e.styles,x=e.className,N=p.content,B=p.icon,T=p.align,I=p.buttonType,P=t.color?t.color:"#222",S=n.color?n.color:"#fff",D="\n        .ystdb-btn-link {\n            background-color: ".concat(P,";\n            border-color: ").concat(P,";\n            color: ").concat(S,";\n        }\n    "),L=N||"",R=T?"has-text-align-".concat(T):"",A=l()("ystdb-btn-link",{"-has-icon":B,"-block":"block"===I}),W=l()("wp-block-button",x,R);B&&(L="".concat(N,'<i class="ystdb-btn-link__icon ').concat(B,'"></i>'));var M=function(){w&&(h({isPreview:!1}),setTimeout(function(){h({isPreview:!0})},100))};return Object(a.createElement)("div",{className:"wp-block-html"},Object(a.createElement)(g,null,Object(a.createElement)(s,null,Object(a.createElement)(d,{value:T,onChange:function(e){E({align:e}),M()}}),Object(a.createElement)("div",{className:"components-toolbar"},Object(a.createElement)("button",{className:"components-tab-button ".concat(w?"":"is-active"),onClick:function(){h({isPreview:!1})}},Object(a.createElement)("span",null,"HTML")),Object(a.createElement)("button",{className:"components-tab-button ".concat(w?"is-active":""),onClick:function(){h({isPreview:!0})}},Object(a.createElement)("span",null,C("Preview"))))),Object(a.createElement)(y.Consumer,null,function(){return w?Object(a.createElement)(k,{html:'\n                                    <div class="'.concat(W,'">\n                                        <div class="').concat(A,'">\n                                            ').concat(L,"\n                                        </div>\n                                    </div>"),styles:['\n    @import url("https://use.fontawesome.com/releases/v5.10.1/css/all.css");\n    html,body,:root {\n        margin: 0 !important;\n        padding: 0 !important;\n        overflow: visible !important;\n        min-height: auto !important;\n    }\n    .wp-block-button a {\n        display: inline-block;\n        padding: .5rem 1.5rem;\n        border-radius: 4px;\n        text-decoration: none;\n        -webkit-transition: all .3s;\n        transition: all .3s;\n        border-width: 1px;\n        border-style: solid;\n    }\n    .wp-block-button a:not(.has-background) {\n        background-color: #222;\n        border-color: #222;\n    }\n    .wp-block-button a:not(.has-text-color) {\n        color: #fff;\n    }\n    .has-text-align-center {\n        text-align: center;\n    }\n    .has-text-align-right {\n        text-align: right;\n    }\n    .ystdb-btn-link {\n      position: relative;\n      display: inline-block;\n      border-radius: 4px;\n    }\n    .ystdb-btn-link.-block {\n      display: block;\n    }\n    .wp-block-button .ystdb-btn-link a {\n      display: block;\n      background-color: transparent;\n      border-color: inherit;\n      color: inherit;\n    }\n    .wp-block-button .ystdb-btn-link.-has-icon a {\n      padding-right: 2.5rem;\n      padding-left: 2.5rem;\n    }\n    .wp-block-button .ystdb-btn-link.-block.-has-icon a {\n      padding-right: 3.5rem;\n      padding-left: 3.5rem;\n    }\n    .ystdb-btn-link__icon {\n      position: absolute;\n      font-size: 1.25rem;\n      top: 50%;\n      right: 1rem;\n      transform: translateY(-50%);\n      height: auto;\n    }\n    .ystdb-btn-link.-block .ystdb-btn-link__icon {\n      right: 2rem;\n    }\n    .ystdb-btn-link img {\n      position: absolute;\n    }\n',_,D]}):Object(a.createElement)(i,{value:N,onChange:function(e){return E({content:e})},placeholder:"HTMLを入力...","aria-label":C("HTML")})}),Object(a.createElement)(b,null,Object(a.createElement)(f,{title:C("アイコン設定","ystandard-blocks")},Object(a.createElement)(v,{label:C("アイコン","ystandard-blocks")},Object(a.createElement)("div",{className:"ystdb-btn-selector -icons"},r.a.map(function(e){return Object(a.createElement)(O,{isDefault:!0,isPrimary:B===e.class,onClick:function(){E({icon:e.class}),M()}},Object(a.createElement)("i",{className:e.class,title:e.title}))})),Object(a.createElement)("div",{className:"ystdb-btn-selector__clear"},Object(a.createElement)(O,{isDefault:!0,onClick:function(){E({icon:""}),M()}},C("クリア","ystandard-blocks"))))),Object(a.createElement)(f,{title:C("表示タイプ","ystandard-blocks")},Object(a.createElement)(v,{label:C("表示タイプ","ystandard-blocks")},Object(a.createElement)(j,{label:C("ブロック表示にする","ystandard-blocks"),checked:"block"===I,onChange:function(){E({buttonType:"block"===I?"":"block"}),M()}}))),Object(a.createElement)(m,{title:C("Color Settings"),initialOpen:!0,colorSettings:[{value:t.color,onChange:function(e){o(e),M()},label:C("Background Color")},{value:n.color,onChange:function(e){c(e),M()},label:C("Text Color")}]},Object(a.createElement)(u,{backgroundColor:t.color,textColor:n.color})))))}),save:function(){return null}})},function(e,t,n){"use strict";var a=n(1),o=n.n(a),l=n(0),r=n(2),c=n.n(r),s=wp.i18n.__,i={margin:[{value:"normal",label:s("リセット"),num:2},{value:"wide",label:s("大"),num:4},{value:"narrow",label:s("小"),num:1},{value:"none",label:s("なし"),num:0}],padding:[{value:"normal",label:s("リセット"),num:3},{value:"wide",label:s("大"),num:5},{value:"narrow",label:s("小"),num:1},{value:"none",label:s("なし"),num:0}],innerWidth:[{value:"wide",label:s("ワイド"),num:1232},{value:"narrow",label:s("スリム"),num:560},{value:"none",label:s("なし"),num:0}]};function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e=Number(e),(isNaN(e)||e<t)&&(e=null!==a?a:t),null!==n&&e>n&&(e=n),e}var b=wp.editor,m=(b.BlockControls,b.InspectorControls),u=b.PanelColorSettings,g=b.ContrastChecker,p=(b.getColorClassName,b.withColors,b.InnerBlocks),y=b.MediaUpload,k=wp.components,f=k.PanelBody,v=k.BaseControl,O=(k.SelectControl,k.RangeControl),j=k.Button,C=(k.ToggleControl,wp.element.Fragment),E=wp.i18n.__,h=wp.editor,w=h.getColorClassName,_=h.InnerBlocks;wp.i18n.__;var x=wp.editor,N=x.getColorClassName,B=x.InnerBlocks,T=(wp.i18n.__,[{attributes:{wrapperTag:{type:"string",default:"div"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},margin:{type:"string",default:"normal"},marginTop:{type:"integer",default:24},marginBottom:{type:"integer",default:24},padding:{type:"string",default:"normal"},paddingTop:{type:"integer",default:32},paddingBottom:{type:"integer",default:32},innerWidth:{type:"string",default:"normal"},innerCustomWidth:{type:"integer",default:0}},migrate:function(e){var t=e.marginTop,n=e.marginBottom,a=e.paddingTop,o=e.paddingBottom;return{marginTop:d(t,-10,10,0),marginBottom:d(n,-10,10,0),paddingTop:d(a,0,10),paddingBottom:d(o,0,10)}},save:function(e){var t,n=e.attributes,a=n.backgroundColor,r=n.textColor,s=n.customBackgroundColor,i=n.customTextColor,d=n.wrapperTag,b=n.marginTop,m=n.marginBottom,u=n.paddingTop,g=n.paddingBottom,p=n.innerCustomWidth,y=d,k=N("color",r),f=N("background-color",a),v=c()("ystdb-section",(t={"has-text-color":r||i},o()(t,k,k),o()(t,"has-background",a||s),o()(t,f,f),t)),O={backgroundColor:f?void 0:s,color:k?void 0:i,"margin-top":b,"margin-bottom":m,"padding-top":u,"padding-bottom":g},j={"max-width":0!==p?p:void 0,"margin-right":"auto","margin-left":"auto"};return Object(l.createElement)("div",{className:v,style:O},Object(l.createElement)(y,{className:"ystdb-section__inner",style:j},Object(l.createElement)(B.Content,null)))}}]),I=wp.blocks.registerBlockType,P=wp.editor.withColors,S=wp.compose.compose,D=wp.i18n.__;I("ystdb/section",{title:D("[ys]セクション","ystandard-blocks"),description:D("yStandard Blocks汎用セクションブロック","ystandard-blocks"),icon:"screenoptions",keywords:[D("section"),D("セクション"),"section"],category:"ystdb",attributes:{wrapperTag:{type:"string",default:"div"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},marginTop:{type:"number",default:2},marginBottom:{type:"number",default:2},paddingTop:{type:"number",default:3},paddingBottom:{type:"number",default:3},paddingLeft:{type:"number",default:0},paddingRight:{type:"number",default:0},innerCustomWidth:{type:"integer",default:960},backgroundImageURL:{type:"string"},backgroundImageAlt:{type:"string"},backgroundImageID:{type:"integer",default:0},backgroundImageOpacity:{type:"integer",default:50},backgroundSkew:{type:"number",default:0}},supports:{align:["wide","full"],anchor:!0,className:!1},edit:S([P("backgroundColor",{textColor:"color"})])(function(e){var t,n=e.attributes,a=e.setAttributes,r=e.backgroundColor,s=e.textColor,b=e.setBackgroundColor,k=e.setTextColor,h=n.wrapperTag,w=n.marginTop,_=n.marginBottom,x=n.paddingTop,N=n.paddingBottom,B=n.paddingLeft,T=n.paddingRight,I=n.backgroundImageURL,P=n.backgroundImageAlt,S=n.backgroundImageID,D=n.backgroundImageOpacity,L=n.backgroundSkew,R=n.innerCustomWidth,A=h,W=I&&!L,M=I&&!L,F="has-background-dim-"+10*Math.round(D/10),U=c()("ystdb-section",(t={"has-background":r.color},o()(t,r.class,r.class),o()(t,"has-text-color",s.color),o()(t,s.class,s.class),o()(t,"has-background-image",W),o()(t,"has-background-dim",M),o()(t,F,M),t)),H={"padding-top":0===w?0:w+"rem","padding-bottom":0===_?0:_+"rem"},Y={backgroundColor:r.color&&!L?r.color:void 0,color:s.color,"padding-top":0===x?0:x+"rem","padding-bottom":0===N?0:N+"rem",backgroundImage:W?'url("'.concat(I,'")'):void 0,"padding-left":"1rem","padding-right":"1rem"},z={"max-width":0!==R?R:void 0,"margin-right":"auto","margin-left":"auto","padding-left":0===B?0:B+"rem","padding-right":0===T?0:T+"rem"};return Object(l.createElement)(C,null,Object(l.createElement)(m,null,Object(l.createElement)("div",{className:"ystdb-inspectorcontrols"},Object(l.createElement)(f,{title:E("ブロック設定","ystandard-blocks")},Object(l.createElement)(v,{label:E("HTMLタグ","ystandard-blocks")},Object(l.createElement)("div",{className:"ystdb-btn-selector components-base-control"},[{tag:"div"},{tag:"section"},{tag:"aside"}].map(function(e){return Object(l.createElement)(j,{isDefault:!0,isPrimary:h===e.tag,onClick:function(){a({wrapperTag:e.tag})}},Object(l.createElement)("span",null,e.tag))}))),Object(l.createElement)(v,{label:E("余白設定(外側)","ystandard-blocks")},Object(l.createElement)("div",{className:"ystdb-info__label"},"かんたん設定"),Object(l.createElement)("div",{className:"ystdb-btn-selector components-base-control"},i.margin.map(function(e){return Object(l.createElement)(j,{isDefault:!0,onClick:function(){a({marginTop:e.num,marginBottom:e.num})}},Object(l.createElement)("span",null,e.label))})),Object(l.createElement)(O,{label:E("数値 上側","ystandard-blocks"),value:w,onChange:function(e){return a({marginTop:d(e,-10,10,0)})},min:-10,max:10,step:.5}),Object(l.createElement)(O,{label:E("数値 下側","ystandard-blocks"),value:_,onChange:function(e){return a({marginBottom:d(e,-10,10,0)})},min:-10,max:10,step:.5}),Object(l.createElement)("p",null,Object(l.createElement)("span",{className:"ystdb-info__small"},"※数字が大きいほど余白が大きくなります。"),Object(l.createElement)("span",{className:"ystdb-info__small"},"※単位はremです。"))),Object(l.createElement)(v,{label:E("余白設定(内側)","ystandard-blocks")},Object(l.createElement)("div",{className:"ystdb-info__label"},"かんたん設定"),Object(l.createElement)("div",{className:"ystdb-btn-selector components-base-control"},i.padding.map(function(e){return Object(l.createElement)(j,{isDefault:!0,onClick:function(){a({paddingTop:e.num,paddingBottom:e.num})}},Object(l.createElement)("span",null,e.label))}),Object(l.createElement)("br",null),Object(l.createElement)("div",null,Object(l.createElement)("span",{className:"ystdb-info__small"},"※上下余白のかんたん設定"))),Object(l.createElement)(O,{label:E("数値 上側","ystandard-blocks"),value:x,onChange:function(e){return a({paddingTop:d(e,0,10)})},min:0,max:10,step:.5}),Object(l.createElement)(O,{label:E("数値 下側","ystandard-blocks"),value:N,onChange:function(e){return a({paddingBottom:d(e,0,10)})},min:0,max:10,step:.5}),Object(l.createElement)(O,{label:E("数値 左側","ystandard-blocks"),value:B,onChange:function(e){return a({paddingLeft:d(e,0,5)})},min:0,max:5,step:.5}),Object(l.createElement)(O,{label:E("数値 右側","ystandard-blocks"),value:T,onChange:function(e){return a({paddingRight:d(e,0,5)})},min:0,max:5,step:.5}),Object(l.createElement)("div",null,Object(l.createElement)("span",{className:"ystdb-info__small"},"※数字が大きいほど余白が大きくなります。"),Object(l.createElement)("span",{className:"ystdb-info__small"},"※単位はremです。"))),Object(l.createElement)(v,{label:E("セクション内コンテンツの最大幅","ystandard-blocks")},Object(l.createElement)("div",{className:"ystdb-info__label"},"かんたん設定"),Object(l.createElement)("div",{className:"ystdb-btn-selector components-base-control"},i.innerWidth.map(function(e){return Object(l.createElement)(j,{isDefault:!0,onClick:function(){a({innerCustomWidth:e.num})}},Object(l.createElement)("span",null,e.label))})),Object(l.createElement)(O,{label:E("数値","ystandard-blocks"),value:R,onChange:function(e){return a({innerCustomWidth:d(e,0,1920,960)})},min:0,max:1920,step:16,allowReset:!0}),Object(l.createElement)("p",null,Object(l.createElement)("span",{className:"ystdb-info__small"},"※最大幅指定なしにしたい場合0にしてください。"))),Object(l.createElement)(v,{label:E("背景画像","ystandard-blocks")},Object(l.createElement)(y,{onSelect:function(e){a({backgroundImageURL:e.url,backgroundImageID:e.id,backgroundImageAlt:e.alt})},type:["image"],value:S,render:function(e){return 0===S?Object(l.createElement)(j,{isDefault:!0,onClick:e.open},E("背景画像を選択","ystandard-blocks")):Object(l.createElement)("div",null,Object(l.createElement)(j,{onClick:e.open,className:"ystdb-mediaupload__preview",style:{padding:0}},Object(l.createElement)("img",{src:I,alt:P})),Object(l.createElement)(j,{isDefault:!0,onClick:function(){a({backgroundImageURL:"",backgroundImageID:0})}},E("背景画像をクリア","ystandard-blocks")))}}),Object(l.createElement)("br",null),Object(l.createElement)("br",null),Object(l.createElement)(O,{label:E("画像の上に重ねる色の濃さ","ystandard-blocks"),value:D,onChange:function(e){return a({backgroundImageOpacity:d(e,0,100)})},min:0,max:100,step:10}),Object(l.createElement)("p",null,Object(l.createElement)("span",{className:"ystdb-info__small"},"※数値が大きいほど背景画像が見えづらくなります。"),Object(l.createElement)("span",{className:"ystdb-info__small"},"※画像の上に重ねる色は、色設定の「背景色」で変更できます。"))),Object(l.createElement)(v,{label:E("背景を傾ける","ystandard-blocks")},Object(l.createElement)(O,{label:E("背景の傾き具合","ystandard-blocks")+"(-3 ~ 3)",value:L,onChange:function(e){return a({backgroundSkew:d(e,-3,3,0)})},min:-3,max:3,step:.5,allowReset:!0}),Object(l.createElement)("p",null,Object(l.createElement)("span",{className:"ystdb-info__small ystdb-info__bold"},"※傾きの設定をする場合、背景画像設定が無視されます。"),Object(l.createElement)("span",{className:"ystdb-info__small"},"※コンテンツがはみ出る・余白が少なく感じる場合、「余白設定(内側)」の上下を大きくして調整して下さい。"),Object(l.createElement)("span",{className:"ystdb-info__small"},"※背景色は、色設定の「背景色」で変更できます。")))),Object(l.createElement)(u,{title:E("Color Settings"),initialOpen:!0,colorSettings:[{value:r.color,onChange:function(e){b(e)},label:E("Background Color")},{value:s.color,onChange:function(e){k(e)},label:E("Text Color")}]},Object(l.createElement)(g,{backgroundColor:r.color,textColor:s.color})))),Object(l.createElement)("div",{className:"ystdb-section__edit-wrap",style:H},Object(l.createElement)("div",{className:U,style:Y},function(){if(L){var e=L+"deg",t={backgroundColor:r.color,transform:"skewY(".concat(e,") translateY(-50%)")},n=c()("ystdb-section__mask");return Object(l.createElement)("div",{className:n,style:t})}}(),Object(l.createElement)(A,{className:"ystdb-section__inner",style:z},Object(l.createElement)(p,null)))))}),save:function(e){var t,n=e.attributes,a=n.backgroundColor,r=n.textColor,s=n.customBackgroundColor,i=n.customTextColor,d=n.wrapperTag,b=n.marginTop,m=n.marginBottom,u=n.paddingTop,g=n.paddingBottom,p=n.paddingLeft,y=n.paddingRight,k=n.backgroundImageURL,f=n.backgroundImageOpacity,v=n.backgroundSkew,O=n.innerCustomWidth,j=d,C=w("color",r),E=w("background-color",a),h=(a||s)&&!v,x=E&&!v,N=k&&!v,B=k&&!v,T="has-background-dim-"+10*Math.round(f/10),I=c()("ystdb-section",(t={"has-text-color":r||i},o()(t,C,C),o()(t,"has-background",h),o()(t,E,x),o()(t,"has-background-image",N),o()(t,"has-background-dim",B),o()(t,T,B),o()(t,"has-background-skew",v),t)),P={backgroundColor:E||v?void 0:s,color:C?void 0:i,"margin-top":0===b?0:b+"rem","margin-bottom":0===m?0:m+"rem","padding-top":0===u?0:u+"rem","padding-bottom":0===g?0:g+"rem",backgroundImage:N?'url("'.concat(k,'")'):void 0,"padding-left":"1rem","padding-right":"1rem"},S={"max-width":0!==O?O:void 0,"margin-right":"auto","margin-left":"auto","padding-left":0===p?0:p+"rem","padding-right":0===y?0:y+"rem"};return Object(l.createElement)("div",{className:I,style:P},function(){if(v){var e={backgroundColor:E?void 0:s,transform:"skewY(".concat(v+"deg",") translateY(-50%)")},t=c()("ystdb-section__mask",o()({"has-background":a||s},E,E));return Object(l.createElement)("div",{className:t,style:e})}}(),Object(l.createElement)(j,{className:"ystdb-section__inner",style:S},Object(l.createElement)(_.Content,null)))},deprecated:T})},function(e,t,n){"use strict";var a=n(0),o=wp.element.Fragment,l=wp.i18n.__,r=wp.richText,c=r.registerFormatType,s=r.toggleFormat,i=wp.components,d=i.Toolbar,b=i.ToolbarButton,m=wp.editor.BlockFormatControls;[{name:"ystdb/inline-style-1",title:l("[ys]インラインスタイル 1","ystandard-blocks"),class:"ystdb-inline--1",icon:"admin-customizer"},{name:"ystdb/inline-style-2",title:l("[ys]インラインスタイル 2","ystandard-blocks"),class:"ystdb-inline--2",icon:"admin-customizer"},{name:"ystdb/inline-style-3",title:l("[ys]インラインスタイル 3","ystandard-blocks"),class:"ystdb-inline--3",icon:"admin-customizer"}].map(function(e,t){c(e.name,{title:e.title,tagName:"span",className:e.class,edit:function(n){var l=n.value,r=n.isActive,c=n.onChange;return Object(a.createElement)(o,null,Object(a.createElement)(m,null,Object(a.createElement)("div",{className:"editor-format-toolbar block-editor-format-toolbar"},Object(a.createElement)("div",{className:"ystdb-inline-style-toolbar inline-style-".concat(t+1)},Object(a.createElement)(d,null,Object(a.createElement)(b,{icon:e.icon,title:e.title,onClick:function(){return c(s(l,{type:e.name}))},isActive:r}))))))}})})},function(e,t,n){"use strict";var a=n(0),o=n(2),l=n.n(o),r=n(3),c=wp.i18n.__,s=wp.hooks.addFilter,i=wp.element.Fragment,d=wp.editor.InspectorControls,b=wp.compose.createHigherOrderComponent,m=wp.components,u=m.PanelBody,g=m.ToggleControl,p=m.BaseControl,y=m.Button,k=["core/button"];s("blocks.registerBlockType","ystdb/exblock-add-attr",function(e){return void 0!==e.attributes&&k.includes(e.name)&&(e.attributes=Object.assign(e.attributes,{buttonBlock:{type:"boolean"},icon:{type:"string"}})),e}),s("editor.BlockEdit","ystdb/ex-block-edit",b(function(e){return function(t){if(k.includes(t.name)){var n=t.attributes,o=t.setAttributes,s=n.buttonBlock,b=n.icon;console.log(n);var m=n.className?n.className:"";n.className=l()(m.replace(/\s?\-full\s?/g,""),{"-full":s});var f=n.text?n.text.replace(/<i.+?>/g,"").replace(/<\/i>/g,""):"",v="";if(b&&(v='<i class="'.concat(b,'"></i>')),n.text="".concat(f).concat(v),t.isSelected)return Object(a.createElement)(i,null,Object(a.createElement)(e,t),Object(a.createElement)(d,null,Object(a.createElement)(u,{title:c("[ys]アイコン設定","ystandard-blocks")},Object(a.createElement)(p,{label:c("アイコン","ystandard-blocks")},Object(a.createElement)("div",{className:"ystdb-btn-selector -icons"},r.a.map(function(e){return Object(a.createElement)(y,{isDefault:!0,isPrimary:b===e.class,onClick:function(){o({icon:e.class})}},Object(a.createElement)("i",{className:e.class,title:e.title}))})),Object(a.createElement)("div",{className:"ystdb-btn-selector -notice"},"※ボタンテキストを編集する際は一度アイコンをクリアしてください。"),Object(a.createElement)("div",{className:"ystdb-btn-selector__clear"},Object(a.createElement)(y,{isDefault:!0,onClick:function(){o({icon:""})}},c("クリア","ystandard-blocks"))))),Object(a.createElement)(u,{title:c("[ys]ブロック表示","ystandard-blocks"),initialOpen:!1},Object(a.createElement)(p,{label:c("表示タイプ","ystandard-blocks")},Object(a.createElement)(g,{label:c("ブロック表示にする","ystandard-blocks"),checked:s,onChange:function(){o({buttonBlock:!s})}})))))}return Object(a.createElement)(e,t)}},"addBlockControls")),s("blocks.getSaveContent.extraProps","ystdb/ex-block-save-props",function(e,t,n){if(k.includes(t.name)){var a=e.children.props.value.replace(/<i class=".+?"><\/i>/g,""),o="";n.icon&&(o='<i class="'.concat(n.icon,'"></i>')),e.children.props.value="".concat(a).concat(o)}return e})},,function(e,t,n){"use strict";n.r(t);n(4),n(5),n(7),n(6);console.log("yStandard Blocks")}]);