!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=41)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.components}()},,function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t,n){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var c=typeof o;if("string"===c||"number"===c)e.push(o);else if(Array.isArray(o)&&o.length){var l=r.apply(null,o);l&&e.push(l)}else if("object"===c)for(var a in o)n.call(o,a)&&o[a]&&e.push(a)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(1),r={category:{common:"ystdb",pro:"ystdb_pro",beta:"ystdb_beta"},color:{iconForeground:"#4190be"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:Object(o.__)("小")},{value:"",label:Object(o.__)("中")},{value:"is-large",label:Object(o.__)("大")}],animationTypes:[{label:Object(o.__)("なし","ystandard-blocks"),value:"none"},{label:Object(o.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"fa-xs",label:Object(o.__)("小")},{value:"",label:Object(o.__)("中")},{value:"fa-2x",label:Object(o.__)("大")}]}}},function(e,t,n){"use strict";function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e=Number(e),(isNaN(e)||e<t)&&(e=null!==o?o:t),null!==n&&e>n&&(e=n),e}n.d(t,"a",(function(){return o}))},function(e,t){!function(){e.exports=this.wp.blocks}()},,,function(e,t){!function(){e.exports=this.wp.compose}()},,function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},function(e,t,n){var o=n(25),r=n(26);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){var o=n(27);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},function(e,t){!function(){e.exports=this.lodash}()},,,,,function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=o=function(e){return n(e)}:e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},o(t)}e.exports=o},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var o=n(7),r=n(4),c=n.n(r),l=n(0),a=n(6),i=n.n(a),s=n(5),u=n(9),b=n(14),d=n.n(b),f=n(15),p=n.n(f),m=n(16),v=n.n(m),y=n(17),h=n.n(y),g=n(18),O=n.n(g),j=n(19),_=n(1),x=n(2),C=[{label:Object(_.__)("下","ystandard-blocks"),value:"bottom"},{label:Object(_.__)("上","ystandard-blocks"),value:"top"}],T={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"},S=function(e){function t(){return d()(this,t),v()(this,h()(t).apply(this,arguments))}return O()(t,e),p()(t,[{key:"createLevelControl",value:function(e,t,n){var o=e===t;return{icon:this.getIcon(e,o),title:"".concat(Object(_.__)("Heading")," ").concat(e),isActive:o,onClick:function(){return n(e)}}}},{key:"render",value:function(){var e=this,t=this.props,n=t.isCollapsed,o=void 0===n||n,r=t.minLevel,c=t.maxLevel,a=t.selectedLevel,i=t.onChange;return Object(l.createElement)(x.Toolbar,{isCollapsed:o,icon:this.getIcon(a),controls:Object(j.range)(r,c).map((function(t){return e.createLevelControl(t,a,i)}))})}},{key:"getIcon",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return T.hasOwnProperty(e)?Object(l.createElement)(x.SVG,{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",isPressed:t},Object(l.createElement)(x.Path,{d:T[e]})):null}}]),t}(l.Component),E=n(24),k=n(12),w=n(8);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var P=Object(k.compose)([Object(s.withColors)({textColor:"color",subTextColor:"color",dividerColor:"fill"}),Object(s.withFontSizes)("fontSize","subTextSize")])((function(e){var t,n=e.textColor,o=e.setTextColor,r=e.subTextColor,a=e.setSubTextColor,b=e.dividerColor,d=e.setDividerColor,f=e.attributes,p=e.setAttributes,m=e.isSelected,v=e.fontSize,y=e.setFontSize,h=e.subTextSize,g=e.setSubTextSize,O=e.onReplace,j=e.mergeBlocks,T=f.content,k=f.level,P=f.align,B=f.subText,N=f.subTextPosition,H=f.subTextBorderWidth,M=f.subTextBorderHeight,V=f.dividerMarginTop,R=f.dividerMarginBottom,L=f.clearStyle,F="h"+k,D=Object(E.select)("core/block-editor").getSettings().colors,A=m||""!==B,I=i()("ystdb-heading__editor"),W=i()("ystdb-heading",(t={"is-clear-style":L},c()(t,"has-text-align-".concat(P),P),c()(t,n.class,n.class),c()(t,v.class,v.class),c()(t,"has-border",M&&H),c()(t,"has-sub-text",B),t)),G={color:n.color,fontSize:v.size?v.size+"px":void 0},q=i()("ystdb-heading__text"),J=function(){if(0===M||0===H)return null;var e={fill:b.color?b.color:"#222",marginTop:0!==V?V:void 0,marginBottom:0!==R?R:void 0,marginRight:"left"===P||"center"===P?"auto":void 0,marginLeft:"right"===P||"center"===P?"auto":void 0};return Object(l.createElement)(x.SVG,{className:"ystdb-heading__line",width:H,height:M,viewBox:"0 0 ".concat(H," ").concat(M),xmlns:"http://www.w3.org/2000/svg",style:e},Object(l.createElement)(x.Path,{d:"m0 0 h ".concat(H," v ").concat(M," h -").concat(H," z")}))},K=function(){var e="calc(.25em + ".concat(M,"px)"),t={marginBottom:"top"===N&&M?e:void 0,marginTop:"bottom"===N&&M?e:void 0,marginRight:"center"===P?"auto":void 0,marginLeft:"center"===P?"auto":void 0},n={fontSize:h.size?h.size+"px":"16px",color:r.color,textAlign:P,width:"auto"};return Object(l.createElement)(l.Fragment,null,Object(l.createElement)("div",{className:"ystdb-heading__subtext ystdb-heading__subtext-edit",style:t},A&&Object(l.createElement)(s.PlainText,{value:B,className:"ystdb-heading__subtext-textarea",style:n,onChange:function(e){p({subText:e})},placeholder:"サブテキスト...","aria-label":Object(_.__)("Sub Text")})))};return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(s.BlockControls,null,Object(l.createElement)(S,{minLevel:2,maxLevel:5,selectedLevel:k,onChange:function(e){return p({level:e})}}),Object(l.createElement)(s.AlignmentToolbar,{value:P,onChange:function(e){p({align:e})}})),Object(l.createElement)(s.InspectorControls,null,Object(l.createElement)(x.PanelBody,{title:Object(_.__)("見出しレベル","ystandard-blocks"),initialOpen:!0},Object(l.createElement)(S,{isCollapsed:!1,minLevel:1,maxLevel:7,selectedLevel:k,onChange:function(e){return p({level:e})}})),Object(l.createElement)(x.PanelBody,{title:Object(_.__)("見出しテキスト設定","ystandard-blocks"),initialOpen:!0},Object(l.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(_.__)("Text Color")),Object(l.createElement)(x.ColorPalette,{colors:D,disableCustomColors:!1,onChange:function(e){o(e)},value:n.color}),Object(l.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(_.__)("文字サイズ","ystandard-blocks")),Object(l.createElement)(s.FontSizePicker,{label:Object(_.__)("文字サイズ","ystandard-blocks"),value:v.size,onChange:function(e){y(e)}})),Object(l.createElement)(x.PanelBody,{title:Object(_.__)("サブテキスト設定","ystandard-blocks"),initialOpen:!1},Object(l.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(_.__)("サブテキストの位置","ystandard-blocks")),Object(l.createElement)("div",{className:"ystdb-btn-selector components-base-control"},C.map((function(e){return Object(l.createElement)(x.Button,{key:e.value,isDefault:!0,isPrimary:N===e.value,onClick:function(){p({subTextPosition:e.value})}},Object(l.createElement)("span",null,e.label))}))),Object(l.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(_.__)("サブテキスト文字の色","ystandard-blocks")),Object(l.createElement)(x.ColorPalette,{colors:D,disableCustomColors:!1,onChange:function(e){a(e)},value:r.color}),Object(l.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(_.__)("サブテキスト文字サイズ","ystandard-blocks")),Object(l.createElement)(s.FontSizePicker,{label:Object(_.__)("文字サイズ","ystandard-blocks"),value:h.size,onChange:function(e){g(e)}})),Object(l.createElement)(x.PanelBody,{title:Object(_.__)("区切り線設定","ystandard-blocks"),initialOpen:!1},Object(l.createElement)(x.RangeControl,{label:Object(_.__)("線の長さ(px)","ystandard-blocks"),value:H,onChange:function(e){return p({subTextBorderWidth:Object(w.a)(e,0,1e3,0)})},min:0,max:1e3,step:1}),Object(l.createElement)(x.RangeControl,{label:Object(_.__)("線の太さ(px)","ystandard-blocks"),value:M,onChange:function(e){return p({subTextBorderHeight:Object(w.a)(e,0,10,0)})},min:0,max:10,step:1}),Object(l.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(_.__)("区切り線の色","ystandard-blocks")),Object(l.createElement)(x.ColorPalette,{colors:D,disableCustomColors:!1,onChange:function(e){d(e)},value:b.color}),Object(l.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(_.__)("区切り線の上下余白","ystandard-blocks")),Object(l.createElement)(x.RangeControl,{label:Object(_.__)("上側の余白(px)","ystandard-blocks"),value:V,onChange:function(e){return p({dividerMarginTop:Object(w.a)(e,0,100,0)})},min:0,max:100,step:1,allowReset:!0}),Object(l.createElement)(x.RangeControl,{label:Object(_.__)("下側の余白(px)","ystandard-blocks"),value:R,onChange:function(e){return p({dividerMarginBottom:Object(w.a)(e,0,100,0)})},min:0,max:100,step:1,allowReset:!0})),Object(l.createElement)(x.PanelBody,{title:Object(_.__)("スタイル削除","ystandard-blocks"),initialOpen:!1},Object(l.createElement)(x.ToggleControl,{label:Object(_.__)("テーマの見出しスタイルをクリアする","ystandard-blocks"),checked:L,onChange:function(){p({clearStyle:!L})}}))),Object(l.createElement)("div",{className:I},Object(l.createElement)(F,{className:W,style:G},"top"===N&&K(),"top"===N&&J(),Object(l.createElement)(s.RichText,{identifier:"content",tagName:"span",className:q,placeholder:Object(_.__)("Write heading…"),value:T,onChange:function(e){p({content:e})},onMerge:j,onSplit:function(e){return e?Object(u.createBlock)("ystdb/heading",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},f,{content:e})):Object(u.createBlock)("core/paragraph")},onReplace:O,onRemove:function(){return O([])}}),"bottom"===N&&J(),"bottom"===N&&K())))}));var B={from:[{type:"block",blocks:["core/heading"],transform:function(e){return Object(u.createBlock)("ystdb/heading",{content:e.content,align:e.align,level:e.level,textColor:e.textColor,customTextColor:e.customTextColor})}}],to:[{type:"block",blocks:["core/heading"],transform:function(e){return Object(u.createBlock)("core/heading",{content:e.content,align:e.align,level:e.level,textColor:e.textColor,customTextColor:e.customTextColor})}}]};Object(u.registerBlockType)("ystdb/heading",{title:Object(_.__)("[ys]カスタム見出し","ystandard-blocks"),description:Object(_.__)("カスタム見出しブロック","ystandard-blocks"),icon:{src:"heading",foreground:o.a.color.iconForeground},keywords:[Object(_.__)("heading"),Object(_.__)("見出し"),"head","fa"],category:o.a.category.common,attributes:{content:{type:"string",source:"html",selector:".ystdb-heading__text",default:""},level:{type:"number",default:2},align:{type:"string",default:"left"},subText:{type:"string",default:""},subTextPosition:{type:"string",default:"bottom"},subTextSize:{type:"string"},customSubTextSize:{type:"number"},subTextColor:{type:"string"},customSubTextColor:{type:"string"},subTextBorderWidth:{type:"number",default:50},subTextBorderHeight:{type:"number",default:0},dividerColor:{type:"string"},customDividerColor:{type:"string"},dividerMarginTop:{type:"number",default:0},dividerMarginBottom:{type:"number",default:0},textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"},clearStyle:{type:"bool",default:!0}},supports:{className:!1,anchor:!0,__unstablePasteTextInline:!0},edit:P,save:function(e){var t,n,o=e.attributes,r=o.align,a=o.content,u=o.level,b=o.textColor,d=o.customTextColor,f=o.fontSize,p=o.customFontSize,m=o.subText,v=o.subTextSize,y=o.customSubTextSize,h=o.subTextColor,g=o.customSubTextColor,O=o.subTextBorderHeight,j=o.subTextBorderWidth,_=o.dividerColor,C=o.customDividerColor,T=o.dividerMarginTop,S=o.dividerMarginBottom,E=o.clearStyle,k=o.subTextPosition,w="h"+u,z=Object(s.getColorClassName)("color",b),P=Object(s.getFontSizeClass)(f),B=Object(s.getFontSizeClass)(v),N=Object(s.getColorClassName)("color",h),H=Object(s.getColorClassName)("fill",_),M=i()("ystdb-heading",(t={"is-clear-style":E},c()(t,"has-text-align-".concat(r),r),c()(t,"has-divider",O&&j),c()(t,"has-sub-text",m),c()(t,"has-subtext--".concat(k),m||O&&j),t)),V=i()("ystdb-heading__text",(n={},c()(n,z,z),c()(n,"has-text-color",b||d),c()(n,P,P),n)),R={color:z?void 0:d,fontSize:!P&&p?p+"px":void 0},L=function(){if(0===O||0===j)return null;var e={fill:H?void 0:C||"#222",marginTop:0!==T?T:void 0,marginBottom:0!==S?S:void 0},t=i()("ystdb-heading__line",c()({},H,H));return Object(l.createElement)(x.SVG,{className:t,width:j,height:O,viewBox:"0 0 ".concat(j," ").concat(O),xmlns:"http://www.w3.org/2000/svg",style:e},Object(l.createElement)(x.Path,{d:"m0 0 h ".concat(j," v ").concat(O," h -").concat(j," z")}))},F=function(){var e;if(!m)return null;var t=i()("ystdb-heading__subtext",(e={"has-font-size":B||y,"has-color":N||g},c()(e,N,N),c()(e,B,B),e)),n={color:N?void 0:g,fontSize:y?y+"px":void 0};return Object(l.createElement)("span",{className:t,style:n},m)};return Object(l.createElement)(w,{className:M},"top"===k&&F(),"top"===k&&L(),Object(l.createElement)(s.RichText.Content,{tagName:"span",className:V,style:R,value:a}),"bottom"===k&&L(),"bottom"===k&&F())},transforms:B})}]);