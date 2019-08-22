!function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(t,n){!function(){t.exports=this.wp.element}()},function(t,n,e){"use strict";e.r(n);var o=e(0),r=(e(2),wp.i18n.__),l=[{class:"fas fa-angle-right",title:r("右矢印","ystandard-blocks")},{class:"fas fa-angle-double-right",title:r("右矢印(二重)","ystandard-blocks")},{class:"fas fa-chevron-circle-right",title:r("右矢印(丸)","ystandard-blocks")},{class:"far fa-hand-point-right",title:r("右指差し","ystandard-blocks")},{class:"fas fa-shopping-cart",title:r("カート","ystandard-blocks")},{class:"fas fa-check",title:r("チェック","ystandard-blocks")},{class:"fas fa-external-link-alt",title:r("外部リンク","ystandard-blocks")},{class:"far fa-file",title:r("ファイル","ystandard-blocks")}],a=wp.editor,c=a.BlockControls,i=a.PlainText,s=a.AlignmentToolbar,b=a.InspectorControls,u=a.PanelColorSettings,d=a.ContrastChecker,p=(a.getColorClassName,a.withColors,wp.element.Fragment),f=wp.components,m=f.Disabled,g=f.SandBox,k=f.PanelBody,y=f.BaseControl,h=f.Button,v=(wp.compose.withState,wp.i18n.__),w=wp.blocks.registerBlockType,C=wp.editor.withColors,x=wp.compose,O=x.compose,j=x.withState,E=wp.i18n.__;w("ystdb/btn-link",{title:E("ボタン型リンク","ystandard-blocks"),description:E("入力したリンク(a)タグをボタン形式で表示するブロック","ystandard-blocks"),icon:"embed-generic",keywords:[E("link"),E("button"),"button"],category:"ystdb",attributes:{content:{type:"string"},backgroundColor:{type:"string"},textColor:{type:"string"},customBackgroundColor:{type:"string"},customTextColor:{type:"string"},icon:{type:"string"},align:{type:"string"}},supports:{className:!1},edit:O([C("backgroundColor",{textColor:"color"}),j({isPreview:!1,styles:""})])(function(t){var n=t.backgroundColor,e=t.textColor,r=t.setBackgroundColor,a=t.setTextColor,f=t.attributes,w=t.setAttributes,C=t.setState,x=t.isPreview,O=t.styles,j=f.content,E=f.icon,P=f.align,_=n.color?n.color:"#222",B=e.color?e.color:"#fff",T="\n        .ystdb-btn-link {\n            background-color: ".concat(_,";\n            border-color: ").concat(_,";\n            color: ").concat(B,";\n        }\n    "),N=j||"",S="ystdb-btn-link";E&&(N="".concat(j,'<i class="').concat(E,'"></i>'),S="".concat(S," -has-icon"));var M=function(){x&&(C({isPreview:!1}),setTimeout(function(){C({isPreview:!0})},100))},A=P?"has-text-align-".concat(P):"";return Object(o.createElement)("div",{className:"wp-block-html"},Object(o.createElement)(p,null,Object(o.createElement)(c,null,Object(o.createElement)(s,{value:P,onChange:function(t){w({align:t}),M()}}),Object(o.createElement)("div",{className:"components-toolbar"},Object(o.createElement)("button",{className:"components-tab-button ".concat(x?"":"is-active"),onClick:function(){C({isPreview:!1})}},Object(o.createElement)("span",null,"HTML")),Object(o.createElement)("button",{className:"components-tab-button ".concat(x?"is-active":""),onClick:function(){C({isPreview:!0})}},Object(o.createElement)("span",null,v("Preview"))))),Object(o.createElement)(m.Consumer,null,function(){return x?Object(o.createElement)(g,{html:'\n                                    <div class="wp-block-button '.concat(A,'">\n                                        <div class="').concat(S,'">\n                                            ').concat(N,"\n                                        </div>\n                                    </div>"),styles:['\n    @import url("https://use.fontawesome.com/releases/v5.10.1/css/all.css");\n    html,body,:root {\n        margin: 0 !important;\n        padding: 0 !important;\n        overflow: visible !important;\n        min-height: auto !important;\n    }\n    .wp-block-button a {\n        display: inline-block;\n        padding: .5rem 1.5rem;\n        border-radius: 4px;\n        text-decoration: none;\n        -webkit-transition: all .3s;\n        transition: all .3s;\n        border-width: 1px;\n        border-style: solid;\n    }\n    .wp-block-button a:not(.has-background) {\n        background-color: #222;\n        border-color: #222;\n    }\n    .wp-block-button a:not(.has-text-color) {\n        color: #fff;\n    }\n    .ystdb-btn-link {\n      position: relative;\n      display: inline-block;\n      border-radius:4px;\n    }\n    .wp-block-button .ystdb-btn-link a {\n      display: block;\n      background-color: transparent;\n      border-color: inherit;\n      color: inherit;\n    }\n    .wp-block-button .ystdb-btn-link.-has-icon a {\n      padding-right: 2.5rem;\n      padding-left: 2.5rem;\n    }\n    .ystdb-btn-link i {\n      position: absolute;\n      top: 50%;\n      right: 1rem;\n      transform: translateY(-50%);\n    }\n    .ystdb-btn-link img {\n      position: absolute;\n      top:0;\n      left:0;\n    }\n    .has-text-align-center {\n        text-align: center;\n    }\n    .has-text-align-right {\n        text-align: right;\n    }\n',O,T]}):Object(o.createElement)(i,{value:j,onChange:function(t){return w({content:t})},placeholder:"HTMLを入力...","aria-label":v("HTML")})}),Object(o.createElement)(b,null,Object(o.createElement)(k,{title:v("アイコン設定","ystandard-blocks")},Object(o.createElement)(y,{label:v("アイコン","ystandard-blocks")},Object(o.createElement)("div",{className:"ystdb-btn-link--edit__icons"},l.map(function(t){return Object(o.createElement)(h,{isDefault:!0,isPrimary:E===t.class,onClick:function(){w({icon:t.class}),M()}},Object(o.createElement)("i",{className:t.class,title:t.title}))})),Object(o.createElement)("div",{className:"ystdb-btn-link--edit__icons-clear"},Object(o.createElement)(h,{isDefault:!0,onClick:function(){w({icon:""}),M()}},v("クリア","ystandard-blocks"))))),Object(o.createElement)(u,{title:v("Color Settings"),initialOpen:!0,colorSettings:[{value:n.color,onChange:function(t){r(t),M()},label:v("Background Color")},{value:e.color,onChange:function(t){a(t),M()},label:v("Text Color")}]},Object(o.createElement)(d,{backgroundColor:n.color,textColor:e.color})))))}),save:function(){return null}}),console.log("yStandard Blocks")},function(t,n,e){var o;
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
!function(){"use strict";var e={}.hasOwnProperty;function r(){for(var t=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var l=typeof o;if("string"===l||"number"===l)t.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&t.push(a)}else if("object"===l)for(var c in o)e.call(o,c)&&o[c]&&t.push(c)}}return t.join(" ")}void 0!==t&&t.exports?(r.default=r,t.exports=r):void 0===(o=function(){return r}.apply(n,[]))||(t.exports=o)}()}]);