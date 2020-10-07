!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=78)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.wp.blocks}()},14:function(e,t){!function(){e.exports=this.wp.compose}()},19:function(e,t,n){"use strict";var o=n(20);function l(){}function r(){}r.resetWarningCache=l,e.exports=function(){function e(e,t,n,l,r,a){if(a!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:l};return n.PropTypes=n,n}},2:function(e,t){!function(){e.exports=this.wp.components}()},20:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},22:function(e,t){!function(){e.exports=this.wp.data}()},3:function(e,t){!function(){e.exports=this.React}()},5:function(e,t){!function(){e.exports=this.wp.blockEditor}()},6:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)&&o.length){var a=l.apply(null,o);a&&e.push(a)}else if("object"===r)for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(o=function(){return l}.apply(t,[]))||(e.exports=o)}()},7:function(e,t,n){e.exports=n(19)()},78:function(e,t,n){"use strict";n.r(t);var o=n(0),l=n(9),r=n(6),a=n.n(r),c=n(5),s=n(2),i=[{label:"横型",value:"horizon"},{label:"縦型",value:"vertical"},{label:"モバイルでも横型",value:"fixed-horizon"}],b=[{label:"小",value:"small"},{label:"通常",value:"normal"},{label:"大",value:"large"}],u=[{label:"テキストに合わせる",value:"fitText"},{label:"画像をすべて表示",value:"showAll"}],d=[{label:"左",value:"left"},{label:"右",value:"right"}],m=n(14),p=n(22),y=n(1),O=Object(m.compose)([Object(c.withColors)("backgroundColor","borderColor",{titleColor:"color",dscrColor:"color",domainColor:"color"})])((function(e){var t=e.attributes,n=e.setAttributes,r=e.isSelected,m=e.backgroundColor,O=e.setBackgroundColor,f=e.borderColor,g=e.setBorderColor,_=e.titleColor,j=e.setTitleColor,C=e.dscrColor,v=e.setDscrColor,h=e.domainColor,E=e.setDomainColor,k=t.url,w=t.linkTarget,T=t.rel,x=t.cardType,B=t.title,P=t.showImage,R=t.imageSize,S=t.imageType,D=t.imageAlign,N=t.imageURL,I=t.imageAlt,z=t.imageID,L=t.showDscr,A=t.dscrCharCount,F=t.dscr,U=t.showDomain,M=Object(p.select)("core/block-editor").getSettings().colors,W=x||"horizon",q=S||"fitText",H="horizon"===W||"fixed-horizon"===W,V=function(e){n({url:e}),e&&-1===e.indexOf(ystdb.homeUrl)?n({linkTarget:"_blank",rel:l.a.button.newTabRel}):n({linkTarget:void 0,rel:void 0})};return Object(o.createElement)("div",{className:"wp-block-html"},Object(o.createElement)(o.Fragment,null,Object(o.createElement)(c.InspectorControls,null,Object(o.createElement)(s.PanelBody,{title:Object(y.__)("リンク設定","ystandard-blocks")},Object(o.createElement)(s.BaseControl,null,Object(o.createElement)(c.URLInput,{label:Object(y.__)("Link"),className:"ystdb-card__url-input",value:k,autoFocus:!1,onChange:function(e){V(e)},disableSuggestions:!r,isFullWidth:!0,hasBorder:!0})),Object(o.createElement)(s.BaseControl,null,Object(o.createElement)(s.ToggleControl,{label:Object(y.__)("Open in new tab"),onChange:function(e){var t=e?"_blank":void 0,o=T;t&&!T?o=l.a.button.newTabRel:t||T!==l.a.button.newTabRel||(o=void 0),n({linkTarget:t,rel:o})},checked:"_blank"===w}),Object(o.createElement)(s.TextControl,{label:Object(y.__)("Link rel"),value:T||"",onChange:function(e){n({rel:e})}}))),Object(o.createElement)(s.PanelBody,{title:Object(y.__)("カード表示設定","ystandard-blocks")},Object(o.createElement)(s.BaseControl,null,Object(o.createElement)(s.RadioControl,{label:Object(y.__)("カード表示タイプ","ystandard-blocks"),selected:W,options:i,onChange:function(e){n({cardType:e})}}),Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(y.__)("カード背景色","ystandard-blocks")),Object(o.createElement)(s.ColorPalette,{colors:M,disableCustomColors:!1,onChange:function(e){O(e)},value:m.color}),Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(y.__)("カード枠線","ystandard-blocks")),Object(o.createElement)(s.ColorPalette,{colors:M,disableCustomColors:!1,onChange:function(e){g(e)},value:f.color}))),Object(o.createElement)(s.PanelBody,{initialOpen:!1,title:Object(y.__)("タイトル","ystandard-blocks")},Object(o.createElement)(s.BaseControl,null,Object(o.createElement)(s.TextareaControl,{label:Object(y.__)("タイトル","ystandard-blocks"),value:B,onChange:function(e){n({title:e})},help:Object(o.createElement)("div",{className:"ystdb-info__small"},"表示されるタイトルを指定できます。",Object(o.createElement)("br",null),"何も入力しなければ自動で取得されます。")}),Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(y.__)("タイトル文字色","ystandard-blocks")),Object(o.createElement)(s.ColorPalette,{colors:M,disableCustomColors:!1,onChange:function(e){j(e)},value:_.color}))),Object(o.createElement)(s.PanelBody,{initialOpen:!1,title:Object(y.__)("画像設定","ystandard-blocks")},Object(o.createElement)(s.BaseControl,null,Object(o.createElement)(s.ToggleControl,{label:Object(y.__)("画像を表示する","ystandard-blocks"),onChange:function(){n({showImage:!P})},checked:P})),Object(o.createElement)(s.BaseControl,null,Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(y.__)("カスタム画像","ystandard-blocks")),Object(o.createElement)(c.MediaUpload,{onSelect:function(e){n({imageURL:e.url,imageID:e.id,imageAlt:e.alt})},type:["image"],value:z,render:function(e){return 0===z?Object(o.createElement)(s.Button,{isDefault:!0,onClick:e.open},Object(y.__)("画像を選択","ystandard-blocks")):Object(o.createElement)("div",null,Object(o.createElement)(s.Button,{onClick:e.open,className:"ystdb-mediaupload__preview",style:{padding:0}},Object(o.createElement)("img",{src:N,alt:I})),Object(o.createElement)(s.Button,{isDefault:!0,onClick:function(){n({imageURL:"",imageID:0})}},Object(y.__)("画像をクリア","ystandard-blocks")))}})),H&&Object(o.createElement)(o.Fragment,null,Object(o.createElement)(s.BaseControl,null,Object(o.createElement)("div",{className:"ystdb-info__small"},"「カード表示タイプ」が「横型」のときに有効な設定です。"),Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(y.__)("画像サイズ","ystandard-blocks")),Object(o.createElement)("div",{className:"ystdb-btn-selector components-base-control"},b.map((function(e){var t=R||"normal";return Object(o.createElement)(s.Button,{key:e.value,isDefault:!0,isPrimary:t===e.value,onClick:function(){n({imageSize:e.value})}},Object(o.createElement)("span",null,e.label))})))),Object(o.createElement)(s.BaseControl,null,Object(o.createElement)(s.RadioControl,{label:Object(y.__)("画像表示タイプ","ystandard-blocks"),selected:q,options:u,onChange:function(e){n({imageType:e})}})),Object(o.createElement)(s.BaseControl,null,Object(o.createElement)(s.RadioControl,{label:Object(y.__)("画像表示位置","ystandard-blocks"),selected:D,options:d,onChange:function(e){n({imageAlign:e})}})))),Object(o.createElement)(s.PanelBody,{initialOpen:!1,title:Object(y.__)("概要文設定","ystandard-blocks")},Object(o.createElement)(s.BaseControl,null,Object(o.createElement)(s.ToggleControl,{label:Object(y.__)("概要文を表示する","ystandard-blocks"),onChange:function(){n({showDscr:!L})},checked:L}),Object(o.createElement)(s.RangeControl,{value:A,label:Object(y.__)("概要文の字数","ystandard-blocks"),min:0,max:160,initialPosition:40,allowReset:!0,onChange:function(e){n({dscrCharCount:e||40})}}),Object(o.createElement)(s.TextareaControl,{label:Object(y.__)("概要文","ystandard-blocks"),value:F,onChange:function(e){n({dscr:e})},help:Object(o.createElement)("div",{className:"ystdb-info__small"},"表示される概要文を指定できます。",Object(o.createElement)("br",null),"何も入力しなければ自動で取得されます。")}),Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(y.__)("概要 文字色","ystandard-blocks")),Object(o.createElement)(s.ColorPalette,{colors:M,disableCustomColors:!1,onChange:function(e){v(e)},value:C.color}))),Object(o.createElement)(s.PanelBody,{initialOpen:!1,title:Object(y.__)("ドメイン表示設定","ystandard-blocks")},Object(o.createElement)(s.BaseControl,null,Object(o.createElement)(s.ToggleControl,{label:Object(y.__)("ドメインを表示する","ystandard-blocks"),onChange:function(){n({showDomain:!U})},checked:U}),Object(o.createElement)("div",{className:"ystdb-inspector-controls__label"},Object(y.__)("ドメイン 文字色","ystandard-blocks")),Object(o.createElement)(s.ColorPalette,{colors:M,disableCustomColors:!1,onChange:function(e){E(e)},value:h.color})))),Object(o.createElement)("div",{className:a()("ystdb-card__edit")},(r||!k)&&Object(o.createElement)(o.Fragment,null,Object(o.createElement)(c.URLInput,{label:Object(y.__)("リンクを作成するURLを入力","ystandard-blocks"),className:"ystdb-card__url-input",value:k,autoFocus:!1,onChange:function(e){V(e)},disableSuggestions:!r,isFullWidth:!0,hasBorder:!0})),!!k&&Object(o.createElement)("div",{className:a()("ystdb-card__preview",{"is-rendered":k})},Object(o.createElement)(s.ServerSideRender,{block:"ystdb/card",attributes:t})))))})),f=n(3),g=n.n(f),_=n(7),j=n.n(_);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var h=Object(f.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,l=e.size,r=void 0===l?24:l,a=v(e,["color","size"]);return g.a.createElement("svg",C({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),g.a.createElement("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),g.a.createElement("line",{x1:"1",y1:"10",x2:"23",y2:"10"}))}));h.propTypes={color:j.a.string,size:j.a.oneOfType([j.a.string,j.a.number])},h.displayName="CreditCard";var E=h,k=n(10),w={from:[{type:"block",blocks:["core-embed/wordpress","core/embed"],transform:function(e){return Object(k.createBlock)("ystdb/card",{url:e.url})}}]};Object(k.registerBlockType)("ystdb/card",{title:Object(y.__)("カード","ystandard-blocks"),description:Object(y.__)("カード型リンクを作成するブロック","ystandard-blocks"),icon:Object(o.createElement)(E,{stroke:l.a.color.iconForeground,style:{fill:"none"}}),keywords:[Object(y.__)("card"),Object(y.__)("カード"),Object(y.__)("blogcard"),Object(y.__)("ブログカード"),"card","blogcard"],category:l.a.category.common,attributes:{url:{type:"string"},linkTarget:{type:"string"},rel:{type:"string"},cardType:{type:"string",default:"horizon"},title:{type:"string"},showImage:{type:"bool",default:!0},imageSize:{type:"string"},imageType:{type:"string"},imageAlign:{type:"string",default:"left"},imageURL:{type:"string"},imageAlt:{type:"string"},imageID:{type:"integer",default:0},showDscr:{type:"bool",default:!0},dscrCharCount:{type:"number",default:80},dscr:{type:"string"},showDomain:{type:"bool",default:!0},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},borderColor:{type:"string"},customBorderColor:{type:"string"},titleColor:{type:"string"},customTitleColor:{type:"string"},dscrColor:{type:"string"},customDscrColor:{type:"string"},domainColor:{type:"string"},customDomainColor:{type:"string"}},supports:{className:!1,html:!1,align:!1},edit:O,save:function(){return null},transforms:w})},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(1),l={category:{common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},color:{iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:Object(o.__)("小")},{value:"",label:Object(o.__)("中")},{value:"is-large",label:Object(o.__)("大")}],animationTypes:[{label:Object(o.__)("なし","ystandard-blocks"),value:"none"},{label:Object(o.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"is-small",label:Object(o.__)("小")},{value:"",label:Object(o.__)("中")},{value:"is-large",label:Object(o.__)("大")}]}}}});