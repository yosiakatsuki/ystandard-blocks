!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=41)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},11:function(e,t){!function(){e.exports=this.wp.blocks}()},12:function(e,t){!function(){e.exports=this.wp.compose}()},24:function(e,t){!function(){e.exports=this.wp.data}()},3:function(e,t){!function(){e.exports=this.wp.components}()},4:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},41:function(e,t,n){"use strict";n.r(t);var a=n(7),o=n(4),r=n.n(o),l=n(0),c=n(6),i=n.n(c),s=n(1),d=n(9),b={margin:[{value:"normal",label:Object(s.__)("リセット","ystandard-blocks"),num:2},{value:"wide",label:Object(s.__)("大","ystandard-blocks"),num:4},{value:"narrow",label:Object(s.__)("小","ystandard-blocks"),num:1},{value:"none",label:Object(s.__)("なし","ystandard-blocks"),num:0}],padding:[{value:"normal",label:Object(s.__)("リセット","ystandard-blocks"),num:3},{value:"wide",label:Object(s.__)("大","ystandard-blocks"),num:5},{value:"narrow",label:Object(s.__)("小","ystandard-blocks"),num:1},{value:"none",label:Object(s.__)("なし","ystandard-blocks"),num:0}],innerWidth:[{value:"wide",label:Object(s.__)("ワイド","ystandard-blocks"),num:1232},{value:"narrow",label:Object(s.__)("スリム","ystandard-blocks"),num:560},{value:"none",label:Object(s.__)("なし","ystandard-blocks"),num:0}]},m=[{tag:"div"},{tag:"section"},{tag:"aside"}],u=[{value:"skew",label:Object(s.__)("斜め","ystandard-blocks")},{value:"wave",label:Object(s.__)("波線","ystandard-blocks")},{value:"triangle",label:Object(s.__)("三角形","ystandard-blocks")}],g=[{label:"なし",value:"none"},{label:"フェードイン",value:"fadein"},{label:"下からフェードイン",value:"fadein-up"},{label:"縮小しながらフェードイン",value:"fadein-shrink"}],p=function(e,t){var n=t,a=t;return n=0>t?Object(d.a)("".concat(90+t/2),50,90):Object(d.a)("".concat(90-t/2),50,90),a=3*t/4,"wave"===e?"m0,".concat(n," q20,").concat(a," 40,0 t50,0 t50,0 t50,0 t50,0 V100 L0,100 z"):(n=10+.4*Math.abs(t),a=10+.9*Math.abs(t),"triangle"===e?"m".concat(50-n,",100 l").concat(n,",-").concat(a," l").concat(n,",").concat(a," z"):(a=0>t?100+t:100-t,"m".concat(n=0>t?100:0,",").concat(a," L100,100 L0,100 z")))},y=n(24),O=n(5),j=n(3),_=n(12),v=Object(_.compose)([Object(O.withColors)("backgroundColor",{textColor:"color",dividerColorTop:"fill",dividerColorBottom:"fill"})])((function(e){var t=e.attributes,n=e.setAttributes,a=e.backgroundColor,o=e.textColor,c=e.dividerColorTop,_=e.dividerColorBottom,v=e.setBackgroundColor,f=e.setTextColor,k=e.setDividerColorTop,C=e.setDividerColorBottom,h=t.wrapperTag,E=t.marginTop,T=t.marginBottom,B=t.paddingTop,w=t.paddingBottom,N=t.paddingLeft,x=t.paddingRight,R=t.backgroundImageURL,I=t.backgroundImageAlt,L=t.backgroundImageID,P=t.backgroundImageOpacity,S=t.innerCustomWidth,D=t.dividerTypeTop,M=t.dividerLevelTop,W=t.dividerTypeBottom,H=t.dividerLevelBottom,A=t.screenHeightMode,U=t.sectionMinHeight,z=t.animationType,F=t.animationSpeed,V=Object(y.select)("core/block-editor").getSettings().colors,G=h,Y=R||a.color,q={paddingTop:0===E?0:E+"rem",paddingBottom:0===T?0:T+"rem"},J=i()("ystdb-section",{"has-background-image":R,"is-screen-height":A}),K={color:o.color,paddingTop:0===B?0:B+"rem",paddingBottom:0===w?0:w+"rem",backgroundImage:R?'url("'.concat(R,'")'):void 0,minHeight:U?U+"px":void 0},Q=i()("ystdb-section__bg",r()({"has-background":a.color},a.class,a.class)),X={backgroundColor:a.color?a.color:"#000",opacity:P/100},Z=i()("ystdb-section__inner",r()({"has-text-color":o.color},o.class,o.class)),$={maxWidth:0!==S?S:void 0,marginRight:"auto",marginLeft:"auto",paddingLeft:0===N?0:N+"rem",paddingRight:0===x?0:x+"rem"},ee=function(e,t,n,a){var o=i()("ystdb-section__divider","ystdb-section__divider--".concat(t),"ystdb-section__divider--".concat(e)),r=p(e,n);return Object(l.createElement)("div",{className:o},Object(l.createElement)(j.SVG,{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},Object(l.createElement)(j.Path,{d:r,strokewidth:"0",fill:a})))};return Object(l.createElement)(l.Fragment,null,Object(l.createElement)("div",{className:"ystdb-section__edit-wrap",style:q},Object(l.createElement)("div",{className:J,style:K},Y&&Object(l.createElement)("div",{className:Q,"aria-hidden":"true",role:"img",style:X}," "),0!==M&&c.color&&ee(D,"top",M,c.color),0!==H&&_.color&&ee(W,"bottom",H,_.color),Object(l.createElement)("div",{className:"ystdb-section__container"},Object(l.createElement)(G,{className:Z,style:$},Object(l.createElement)(O.InnerBlocks,null))))),Object(l.createElement)(O.InspectorControls,null,Object(l.createElement)("div",{className:"ystdb-inspectorcontrols"},Object(l.createElement)(j.PanelBody,{title:Object(s.__)("余白設定","ystandard-blocks")},Object(l.createElement)(j.BaseControl,null,Object(l.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(s.__)("余白設定(外側)","ystandard-blocks")),Object(l.createElement)("div",{className:"ystdb-info__label"},"かんたん設定"),Object(l.createElement)("div",{className:"ystdb-btn-selector components-base-control"},b.margin.map((function(e){return Object(l.createElement)(j.Button,{key:e.value,isDefault:!0,onClick:function(){n({marginTop:e.num,marginBottom:e.num})}},Object(l.createElement)("span",null,e.label))}))),Object(l.createElement)(j.RangeControl,{label:Object(s.__)("上側","ystandard-blocks"),value:E,onChange:function(e){return n({marginTop:Object(d.a)(e,-10,10,0)})},min:-10,max:10,step:.5}),Object(l.createElement)(j.RangeControl,{label:Object(s.__)("下側","ystandard-blocks"),value:T,onChange:function(e){return n({marginBottom:Object(d.a)(e,-10,10,0)})},min:-10,max:10,step:.5}),Object(l.createElement)("p",null,Object(l.createElement)("span",{className:"ystdb-info__small"},"※数字が大きいほど余白が大きくなります。"),Object(l.createElement)("span",{className:"ystdb-info__small"},"※単位はremです。"))),Object(l.createElement)(j.BaseControl,null,Object(l.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(s.__)("余白設定(内側)","ystandard-blocks")),Object(l.createElement)("div",{className:"ystdb-info__label"},"かんたん設定"),Object(l.createElement)("div",{className:"ystdb-btn-selector components-base-control"},b.padding.map((function(e){return Object(l.createElement)(j.Button,{key:e.value,isDefault:!0,onClick:function(){n({paddingTop:e.num,paddingBottom:e.num})}},Object(l.createElement)("span",null,e.label))})),Object(l.createElement)("br",null),Object(l.createElement)("div",null,Object(l.createElement)("span",{className:"ystdb-info__small"},"※上下余白のかんたん設定"))),Object(l.createElement)(j.RangeControl,{label:Object(s.__)("上側","ystandard-blocks"),value:B,onChange:function(e){return n({paddingTop:Object(d.a)(e,0,10)})},min:0,max:10,step:.5}),Object(l.createElement)(j.RangeControl,{label:Object(s.__)("下側","ystandard-blocks"),value:w,onChange:function(e){return n({paddingBottom:Object(d.a)(e,0,10)})},min:0,max:10,step:.5}),Object(l.createElement)(j.RangeControl,{label:Object(s.__)("左側","ystandard-blocks"),value:N,onChange:function(e){return n({paddingLeft:Object(d.a)(e,0,5)})},min:0,max:5,step:.5}),Object(l.createElement)(j.RangeControl,{label:Object(s.__)("右側","ystandard-blocks"),value:x,onChange:function(e){return n({paddingRight:Object(d.a)(e,0,5)})},min:0,max:5,step:.5}),Object(l.createElement)("div",null,Object(l.createElement)("span",{className:"ystdb-info__small"},"※数字が大きいほど余白が大きくなります。"),Object(l.createElement)("span",{className:"ystdb-info__small"},"※単位はremです。")))),Object(l.createElement)(j.PanelBody,{title:Object(s.__)("背景設定","ystandard-blocks"),initialOpen:!1},Object(l.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(s.__)("背景画像","ystandard-blocks")),Object(l.createElement)(O.MediaUpload,{onSelect:function(e){n({backgroundImageURL:e.url,backgroundImageID:e.id,backgroundImageAlt:e.alt})},type:["image"],value:L,render:function(e){return 0===L?Object(l.createElement)(j.Button,{isDefault:!0,onClick:e.open},Object(s.__)("背景画像を選択","ystandard-blocks")):Object(l.createElement)("div",null,Object(l.createElement)(j.Button,{onClick:e.open,className:"ystdb-mediaupload__preview",style:{padding:0}},Object(l.createElement)("img",{src:R,alt:I})),Object(l.createElement)(j.Button,{isDefault:!0,onClick:function(){n({backgroundImageURL:"",backgroundImageID:0})}},Object(s.__)("背景画像をクリア","ystandard-blocks")))}}),Object(l.createElement)("br",null),Object(l.createElement)("br",null),Object(l.createElement)(j.RangeControl,{label:Object(s.__)("背景色の濃さ","ystandard-blocks"),value:P,onChange:function(e){return n({backgroundImageOpacity:Object(d.a)(e,0,100)})},min:0,max:100,step:1}),Object(l.createElement)("p",null,Object(l.createElement)("span",{className:"ystdb-info__small"},"※数値が大きいほど背景画像が見えづらくなります。"),Object(l.createElement)("span",{className:"ystdb-info__small"},"※画像の上に重ねる色は、色設定の「背景色」で変更できます。"))),Object(l.createElement)(O.PanelColorSettings,{title:Object(s.__)("Color Settings"),initialOpen:!1,colorSettings:[{value:a.color,onChange:function(e){v(e)},label:Object(s.__)("Background Color")},{value:o.color,onChange:function(e){f(e)},label:Object(s.__)("Text Color")}]},Object(l.createElement)(O.ContrastChecker,{backgroundColor:a.color,textColor:o.color})),Object(l.createElement)(j.PanelBody,{title:Object(s.__)("区切り線設定","ystandard-blocks"),initialOpen:!1},Object(l.createElement)("div",{className:"ystdb-inspector-controls__dscr"},"タイプ・レベル・色をすべて設定すると表示されます。",Object(l.createElement)("br",null),"上下のブロックの背景色と色を合わせることをオススメします。",Object(l.createElement)("br",null),Object(l.createElement)("br",null)),Object(l.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(s.__)("上側の区切り設定","ystandard-blocks")),Object(l.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(s.__)("区切りタイプ","ystandard-blocks")),Object(l.createElement)("div",{className:"ystdb-btn-selector components-base-control"},u.map((function(e){return Object(l.createElement)(j.Button,{key:e.value,isDefault:!0,isPrimary:D===e.value,onClick:function(){n({dividerTypeTop:e.value})}},Object(l.createElement)("span",null,e.label))}))),Object(l.createElement)(j.RangeControl,{label:Object(s.__)("レベル","ystandard-blocks"),value:M,onChange:function(e){return n({dividerLevelTop:Object(d.a)(e,-100,100,0)})},min:-100,max:100,allowReset:!0}),Object(l.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(s.__)("色","ystandard-blocks")),Object(l.createElement)(j.ColorPalette,{colors:V,disableCustomColors:!1,onChange:function(e){k(e)},value:c.color}),Object(l.createElement)("br",null),Object(l.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(s.__)("下側の区切り設定","ystandard-blocks")),Object(l.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(s.__)("区切りタイプ","ystandard-blocks")),Object(l.createElement)("div",{className:"ystdb-btn-selector components-base-control"},u.map((function(e){return Object(l.createElement)(j.Button,{key:e.value,isDefault:!0,isPrimary:W===e.value,onClick:function(){n({dividerTypeBottom:e.value})}},Object(l.createElement)("span",null,e.label))}))),Object(l.createElement)(j.RangeControl,{label:Object(s.__)("レベル","ystandard-blocks"),value:H,onChange:function(e){return n({dividerLevelBottom:Object(d.a)(e,-100,100,0)})},min:-100,max:100,allowReset:!0}),Object(l.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(s.__)("色","ystandard-blocks")),Object(l.createElement)(j.ColorPalette,{colors:V,disableCustomColors:!1,onChange:function(e){C(e)},value:_.color})),Object(l.createElement)(j.PanelBody,{title:Object(s.__)("コンテンツ幅設定","ystandard-blocks"),initialOpen:!1},Object(l.createElement)("div",{className:"ystdb-info__label"},"かんたん設定"),Object(l.createElement)("div",{className:"ystdb-btn-selector components-base-control"},b.innerWidth.map((function(e){return Object(l.createElement)(j.Button,{key:e.value,isDefault:!0,onClick:function(){n({innerCustomWidth:e.num})}},Object(l.createElement)("span",null,e.label))}))),Object(l.createElement)(j.RangeControl,{label:Object(s.__)("コンテンツ部分の最大幅","ystandard-blocks"),value:S,onChange:function(e){return n({innerCustomWidth:Object(d.a)(e,0,1920,0)})},min:0,max:1920,step:16,allowReset:!0}),Object(l.createElement)("p",null,Object(l.createElement)("span",{className:"ystdb-info__small"},"※最大幅の指定をしない場合は0にしてください。"))),Object(l.createElement)(j.PanelBody,{title:Object(s.__)("セクション高さ設定","ystandard-blocks"),initialOpen:!1},Object(l.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(s.__)("高さ設定","ystandard-blocks")),Object(l.createElement)(j.ToggleControl,{label:Object(s.__)("画面と同じ高さにする","ystandard-blocks"),checked:A,onChange:function(){n({screenHeightMode:!A})}}),Object(l.createElement)(j.RangeControl,{label:Object(s.__)("セクション最小高さ","ystandard-blocks"),value:U,onChange:function(e){return n({sectionMinHeight:Object(d.a)(e,0,1e3,0)})},min:0,max:1e3,allowReset:!0}),Object(l.createElement)("div",{className:"ystdb-inspector-controls__dscr"},"※「画面と同じ高さにする」をONにした場合、セクション最小高さも合わせて設定してください。（例：500）")),Object(l.createElement)(j.PanelBody,{title:Object(s.__)("アニメーション設定","ystandard-blocks"),initialOpen:!1},Object(l.createElement)(j.SelectControl,{label:Object(s.__)("アニメーション種類","ystandard-blocks"),value:z,options:g,onChange:function(e){n({animationType:e})}}),Object(l.createElement)(j.RangeControl,{label:Object(s.__)("アニメーション速度","ystandard-blocks"),value:F,onChange:function(e){return n({animationSpeed:Object(d.a)(e,1,10,3)})},min:1,max:10,allowReset:!0})),Object(l.createElement)(j.PanelBody,{title:Object(s.__)("HTMLタグ設定","ystandard-blocks"),initialOpen:!1},Object(l.createElement)("p",null,Object(l.createElement)("span",{className:"ystdb-info__small"},"コンテンツを囲むHTMLタグを選択できます。")),Object(l.createElement)("div",{className:"ystdb-btn-selector components-base-control"},m.map((function(e){return Object(l.createElement)(j.Button,{key:e.tag,isDefault:!0,isPrimary:h===e.tag,onClick:function(){n({wrapperTag:e.tag})}},Object(l.createElement)("span",null,e.tag))})))))))}));function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var k=[{attributes:{wrapperTag:{type:"string",default:"div"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},marginTop:{type:"number",default:2},marginBottom:{type:"number",default:2},paddingTop:{type:"number",default:3},paddingBottom:{type:"number",default:3},paddingLeft:{type:"number",default:0},paddingRight:{type:"number",default:0},innerCustomWidth:{type:"integer",default:960},backgroundImageURL:{type:"string"},backgroundImageAlt:{type:"string"},backgroundImageID:{type:"integer",default:0},backgroundImageOpacity:{type:"integer",default:50},backgroundSkew:{type:"number",default:0},backgroundSkewWidth:{type:"number",default:90}},supports:{align:["wide","full"],anchor:!0,className:!1},migrate:function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{dividerLevelTop:e.backgroundSkew,dividerLevelBottom:e.backgroundSkew})},save:function(e){var t,n=e.attributes,a=n.backgroundColor,o=n.textColor,c=n.customBackgroundColor,s=n.customTextColor,d=n.wrapperTag,b=n.marginTop,m=n.marginBottom,u=n.paddingTop,g=n.paddingBottom,p=n.paddingLeft,y=n.paddingRight,j=n.backgroundImageURL,_=n.backgroundImageOpacity,v=n.backgroundSkew,f=n.backgroundSkewWidth,k=n.innerCustomWidth,C=d,h=Object(O.getColorClassName)("color",o),E=Object(O.getColorClassName)("background-color",a),T=(a||c)&&!v,B=E&&!v,w=j&&!v,N=j&&!v,x="has-background-dim-"+10*Math.round(_/10),R=i()("ystdb-section",(t={"has-text-color":o||s},r()(t,h,h),r()(t,"has-background",T),r()(t,E,B),r()(t,"has-background-image",w),r()(t,"has-background-dim",N),r()(t,x,N),r()(t,"has-background-skew",v),t)),I={backgroundColor:E||v?void 0:c,color:h?void 0:s,marginTop:0===b?0:b+"rem",marginBottom:0===m?0:m+"rem",paddingTop:0===u?0:u+"rem",paddingBottom:0===g?0:g+"rem",backgroundImage:w?'url("'.concat(j,'")'):void 0,paddingLeft:"1rem",paddingRight:"1rem"},L={maxWidth:0!==k?k:void 0,marginRight:"auto",marginLeft:"auto",paddingLeft:0===p?0:p+"rem",paddingRight:0===y?0:y+"rem"};return Object(l.createElement)("div",{className:R,style:I},function(){if(v){var e={height:f?f+"%":void 0,backgroundColor:E?void 0:c,transform:"skewY(".concat(v+"deg",") translateY(-50%)")},t=i()("ystdb-section__mask",r()({"has-background":a||c},E,E));return Object(l.createElement)("div",{className:t,style:e})}}(),Object(l.createElement)(C,{className:"ystdb-section__inner",style:L},Object(l.createElement)(O.InnerBlocks.Content,null)))}},{attributes:{wrapperTag:{type:"string",default:"div"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},margin:{type:"string",default:"normal"},marginTop:{type:"integer",default:24},marginBottom:{type:"integer",default:24},padding:{type:"string",default:"normal"},paddingTop:{type:"integer",default:32},paddingBottom:{type:"integer",default:32},innerWidth:{type:"string",default:"normal"},innerCustomWidth:{type:"integer",default:0}},migrate:function(e){var t=e.marginTop,n=e.marginBottom,a=e.paddingTop,o=e.paddingBottom;return{marginTop:Object(d.a)(t,-10,10,0),marginBottom:Object(d.a)(n,-10,10,0),paddingTop:Object(d.a)(a,0,10),paddingBottom:Object(d.a)(o,0,10)}},save:function(e){var t,n=e.attributes,a=n.backgroundColor,o=n.textColor,c=n.customBackgroundColor,s=n.customTextColor,d=n.wrapperTag,b=n.marginTop,m=n.marginBottom,u=n.paddingTop,g=n.paddingBottom,p=n.innerCustomWidth,y=d,j=Object(O.getColorClassName)("color",o),_=Object(O.getColorClassName)("background-color",a),v=i()("ystdb-section",(t={"has-text-color":o||s},r()(t,j,j),r()(t,"has-background",a||c),r()(t,_,_),t)),f={backgroundColor:_?void 0:c,color:j?void 0:s,"margin-top":b,"margin-bottom":m,"padding-top":u,"padding-bottom":g},k={"max-width":0!==p?p:void 0,"margin-right":"auto","margin-left":"auto"};return Object(l.createElement)("div",{className:v,style:f},Object(l.createElement)(y,{className:"ystdb-section__inner",style:k},Object(l.createElement)(O.InnerBlocks.Content,null)))}}],C=n(11);Object(C.registerBlockType)("ystdb/section",{title:Object(s.__)("[ys]セクション","ystandard-blocks"),description:Object(s.__)("yStandard Blocks汎用セクションブロック","ystandard-blocks"),icon:{src:"screenoptions",foreground:a.a.color.iconForeground},keywords:[Object(s.__)("section"),Object(s.__)("セクション"),"section"],category:a.a.category.common,attributes:{wrapperTag:{type:"string",default:"div"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},marginTop:{type:"number",default:2},marginBottom:{type:"number",default:2},paddingTop:{type:"number",default:3},paddingBottom:{type:"number",default:3},paddingLeft:{type:"number",default:0},paddingRight:{type:"number",default:0},innerCustomWidth:{type:"integer",default:960},backgroundImageURL:{type:"string"},backgroundImageAlt:{type:"string"},backgroundImageID:{type:"integer",default:0},backgroundImageOpacity:{type:"integer",default:50},screenHeightMode:{type:"bool",default:!1},sectionMinHeight:{type:"number",default:0},dividerTypeTop:{type:"string",default:"skew"},dividerLevelTop:{type:"number",default:0},dividerColorTop:{type:"string"},customDividerColorTop:{type:"string"},dividerTypeBottom:{type:"string",default:"skew"},dividerLevelBottom:{type:"number",default:0},dividerColorBottom:{type:"string"},customDividerColorBottom:{type:"string"},animationType:{type:"string",default:"none"},animationSpeed:{type:"number",default:3}},supports:{align:["wide","full"],anchor:!0,className:!1},edit:v,save:function(e){var t=e.attributes,n=t.wrapperTag,a=t.backgroundColor,o=t.customBackgroundColor,c=t.textColor,s=t.customTextColor,d=t.marginTop,b=t.marginBottom,m=t.paddingTop,u=t.paddingBottom,g=t.paddingLeft,y=t.paddingRight,_=t.backgroundImageURL,v=t.backgroundImageOpacity,f=t.innerCustomWidth,k=t.dividerTypeTop,C=t.dividerLevelTop,h=t.dividerColorTop,E=t.customDividerColorTop,T=t.dividerTypeBottom,B=t.dividerLevelBottom,w=t.dividerColorBottom,N=t.customDividerColorBottom,x=t.screenHeightMode,R=t.sectionMinHeight,I=t.animationType,L=t.animationSpeed,P=n,S=Object(O.getColorClassName)("color",c),D=Object(O.getColorClassName)("background-color",a),M=Object(O.getColorClassName)("fill",h),W=Object(O.getColorClassName)("fill",w),H=_||a||o,A=i()("ystdb-section",{"has-background-image":_,"is-screen-height":x,"has-animation":"none"!==I}),U="none"!==I?I:void 0,z={color:c.color,paddingTop:0===m?0:m+"rem",paddingBottom:0===u?0:u+"rem",marginTop:d+"rem",marginBottom:b+"rem",backgroundImage:_?'url("'.concat(_,'")'):void 0,minHeight:R?R+"px":void 0,paddingLeft:0<f?"1rem":void 0,paddingRight:0<f?"1rem":void 0,animationDuration:"none"!==I?"".concat(L,"s"):void 0},F=i()("ystdb-section__bg",r()({"has-background":a||o},D,D)),V={backgroundColor:D||o?o:"#000",opacity:v/100},G=i()("ystdb-section__inner",r()({"has-text-color":S||s},S,S)),Y={maxWidth:0<f?f:void 0,marginRight:"auto",marginLeft:"auto",paddingLeft:0===g?0:g+"rem",paddingRight:0===y?0:y+"rem"},q=function(e,t,n,a,o){var c=i()("ystdb-section__divider","ystdb-section__divider--".concat(t),"ystdb-section__divider--".concat(e)),s=p(e,n),d=i()("ystdb-section__divider-image",r()({},a,a));return Object(l.createElement)("div",{className:c},Object(l.createElement)(j.SVG,{className:d,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},Object(l.createElement)(j.Path,{d:s,strokewidth:"0",fill:o})))},J=0!==C&&(M||E),K=0!==B&&(W||N);return Object(l.createElement)("div",{className:A,style:z,"data-animation":U},H&&Object(l.createElement)("div",{className:F,"aria-hidden":"true",role:"img",style:V}," "),J&&q(k,"top",C,M,E),K&&q(T,"bottom",B,W,N),Object(l.createElement)("div",{className:"ystdb-section__container"},Object(l.createElement)(P,{className:G,style:Y},Object(l.createElement)(O.InnerBlocks.Content,null))))},deprecated:k})},5:function(e,t){!function(){e.exports=this.wp.blockEditor}()},6:function(e,t,n){var a;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var l=o.apply(null,a);l&&e.push(l)}else if("object"===r)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(1),o={category:{common:"ystdb",pro:"ystdb_pro",beta:"ystdb_beta"},color:{iconForeground:"#4190be"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:Object(a.__)("小")},{value:"",label:Object(a.__)("中")},{value:"is-large",label:Object(a.__)("大")}],animationTypes:[{label:Object(a.__)("なし","ystandard-blocks"),value:"none"},{label:Object(a.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"fa-xs",label:Object(a.__)("小")},{value:"",label:Object(a.__)("中")},{value:"fa-2x",label:Object(a.__)("大")}]}}},9:function(e,t,n){"use strict";function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e=Number(e),(isNaN(e)||e<t)&&(e=null!==a?a:t),null!==n&&e>n&&(e=n),e}n.d(t,"a",(function(){return a}))}});