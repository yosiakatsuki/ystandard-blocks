!function(){var e={184:function(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var s=a.apply(null,n);s&&e.push(s)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var r in n)o.call(n,r)&&n[r]&&e.push(r);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},703:function(e,t,n){"use strict";var o=n(414);function a(){}function l(){}l.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,l,s){if(s!==o){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:a};return n.PropTypes=n,n}},697:function(e,t,n){e.exports=n(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,n),l.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=window.wp.element,t=window.wp.i18n;const o={category:{common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},color:{iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:(0,t.__)("小","ystandard-blocks")},{value:"",label:(0,t.__)("中","ystandard-blocks")},{value:"is-large",label:(0,t.__)("大","ystandard-blocks")}],animationTypes:[{label:(0,t.__)("なし","ystandard-blocks"),value:"none"},{label:(0,t.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"is-small",label:(0,t.__)("小","ystandard-blocks")},{value:"",label:(0,t.__)("中","ystandard-blocks")},{value:"is-large",label:(0,t.__)("大","ystandard-blocks")}]},component:{defaultAvatar:{url:"https://www.gravatar.com/avatar/000000000000000000000000000000?s=128&r=g&d=mp"},fontWeight:[{value:"",label:(0,t._x)("指定無し","component-config","ystandard-blocks")},{value:"normal",label:(0,t._x)("通常(normal)","component-config","ystandard-blocks")},{value:"bold",label:(0,t._x)("太字(bold)","component-config","ystandard-blocks")},{value:"100",label:(0,t._x)("100","component-config","ystandard-blocks")},{value:"200",label:(0,t._x)("200","component-config","ystandard-blocks")},{value:"300",label:(0,t._x)("300","component-config","ystandard-blocks")},{value:"400",label:(0,t._x)("400","component-config","ystandard-blocks")},{value:"500",label:(0,t._x)("500","component-config","ystandard-blocks")},{value:"600",label:(0,t._x)("600","component-config","ystandard-blocks")},{value:"700",label:(0,t._x)("700","component-config","ystandard-blocks")},{value:"800",label:(0,t._x)("800","component-config","ystandard-blocks")},{value:"900",label:(0,t._x)("900","component-config","ystandard-blocks")}],fontUnit:[{value:"px",label:"px"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"%",label:"%"}],fontStyle:[{value:"",label:(0,t._x)("指定無し","component-config","ystandard-blocks")},{value:"italic",label:(0,t._x)("イタリック体","component-config","ystandard-blocks")}],borderStyles:[{value:"solid",label:(0,t._x)("直線","component-config","ystandard-blocks")},{value:"dotted",label:(0,t._x)("点線","component-config","ystandard-blocks")},{value:"dashed",label:(0,t._x)("破線","component-config","ystandard-blocks")},{value:"double",label:(0,t._x)("二重線","component-config","ystandard-blocks")}]}};var a=n(184),l=n.n(a),s=window.wp.compose,r=window.wp.components;function i(){return window.ystdbIconList}function c(e){const t=function(e){if(!e)return e;const t=[{old:"sns-Twitter",new:"sns-twitter"},{old:"sns-Facebook",new:"sns-facebook"},{old:"sns-Hatena Bookmark",new:"sns-hatenabookmark"},{old:"sns-Pocket",new:"sns-pocket"},{old:"sns-Line",new:"sns-line"},{old:"sns-Feedly",new:"sns-feedly"},{old:"sns-RSS",new:"sns-rss"},{old:"sns-WordPress",new:"sns-wordpress"},{old:"sns-Pinterest",new:"sns-pinterest"},{old:"sns-Instagram",new:"sns-instagram"},{old:"sns-linkedIn",new:"sns-linkedin"},{old:"sns-YouTube",new:"sns-youtube"},{old:"sns-Twitch",new:"sns-twitch"},{old:"sns-Dribbble",new:"sns-dribbble"},{old:"sns-GitHub",new:"sns-github"},{old:"sns-Tumblr",new:"sns-tumblr"},{old:"sns-Amazon",new:"sns-amazon"}].find((t=>t.old===e));return t?t.new:e}(e),n=i().find((e=>e.name===t));if(n&&n.hasOwnProperty("icon"))return n.icon}class d extends e.Component{render(){const{name:t}=this.props;return t?(0,e.createElement)("span",{className:l()("ys-icon",{"sns-icon":-1!==t.indexOf("sns-")}),dangerouslySetInnerHTML:{__html:c(t)}}):""}}var u=d;class m extends e.Component{render(){const{selectedIcon:n,onChange:o,isOpen:a,previewIcon:s,setState:c}=this.props,d=i(),m=!1!==s||s;return(0,e.createElement)("div",{className:"ys-icon-picker"},(0,e.createElement)("div",{className:"ys-icon-picker__selected"},m&&(0,e.createElement)("div",{className:"ys-icon-picker__preview"},!!n&&(0,e.createElement)(u,{name:n})),(0,e.createElement)(r.Button,{className:l()({"is-open":a}),isSecondary:!0,onClick:()=>{c({isOpen:!a})},style:{minWidth:"110px",textAlign:"center",justifyContent:"center"}},a&&(0,e.createElement)("span",null,(0,t.__)("閉じる","ystandard-blocks")),!a&&(0,e.createElement)("span",null,(0,t.__)("アイコン選択","ystandard-blocks"))),(0,e.createElement)(r.Button,{className:"ys-icon-picker__remove",disabled:!n,isSmall:!0,isSecondary:!0,onClick:()=>{o(""),c({isOpen:!1})}},(0,t.__)("リセット","ystandard-blocks"))),(0,e.createElement)("div",{className:l()("ys-icon-picker__list",{"is-open":a})},(0,e.createElement)("div",{className:"ys-icon-picker__list-container"},d.map((t=>(0,e.createElement)(r.Button,{key:t.name,className:l()("ys-icon-picker__icon",{"is-selected":n===t.name}),onClick:()=>{n===t.name?(o(""),c({isOpen:!1})):o(t.name)}},(0,e.createElement)(u,{name:t.name})))))))}}var p=(0,s.compose)([(0,s.withState)({isOpen:!1})])(m);class b extends e.Component{render(){const{iconControlTitle:n,iconPosition:o,onChangePosition:a,selectedIcon:s,onClickIcon:i,customInfo:c,customInfoStyle:d,previewIcon:u,align:m,isFloat:b}=this.props,y=void 0===n?(0,t.__)("表示アイコン","ystandard-blocks"):n;return(0,e.createElement)("div",{className:l()("ystdb-icon-select",{[`align--${m}`]:m,"is-float":b})},c&&(0,e.createElement)("div",{style:d},c),!!a&&(0,e.createElement)(r.BaseControl,null,(0,e.createElement)("div",{className:"ystdb-inspector-controls__label"},(0,t.__)("アイコン表示位置","ystandard-blocks")),(0,e.createElement)("div",{className:"ystdb-icon-select__position"},(0,e.createElement)(r.RadioControl,{selected:o,options:[{label:(0,t.__)("左","ystandard-blocks"),value:"left"},{label:(0,t.__)("右","ystandard-blocks"),value:"right"}],onChange:a}))),(0,e.createElement)(r.BaseControl,null,(0,e.createElement)("div",{className:"ystdb-inspector-controls__label"},y),(0,e.createElement)("div",{className:"ystdb-icon-select__picker"},(0,e.createElement)(p,{selectedIcon:s,previewIcon:u,onChange:e=>{i(e)}}))))}}var y=b,g=window.wp.blockEditor,_=window.wp.serverSideRender,f=n.n(_),v=t=>{let{children:n}=t;return(0,e.createElement)("div",{className:"ystdb__horizon-buttons"},n)},k=(0,s.compose)([(0,g.withColors)("backgroundColor",{textColor:"color"}),(0,s.withState)({isPreview:!1,styles:""}),(0,g.withFontSizes)("fontSize")])((n=>{const{backgroundColor:a,textColor:l,setBackgroundColor:s,setTextColor:i,attributes:d,setAttributes:u,setState:m,isPreview:p,fontSize:b,setFontSize:_}=n,{content:k,borderRadius:h,iconLeft:w,iconSizeLeft:C,iconRight:E,iconSizeRight:x,align:S,paddingType:T,buttonType:R,maxWidth:P,maxUnit:z,animationType:B,animationInterval:O}=d,I="px"===z?1200:100,N="%"===z&&100<P?100:P,L=e=>"fa-xs"===e?"is-small":"fa-2x"===e?"is-large":e;return(0,e.createElement)("div",{className:"wp-block-html"},(0,e.createElement)(e.Fragment,null,(0,e.createElement)(g.BlockControls,null,(0,e.createElement)(g.AlignmentToolbar,{value:S,onChange:e=>{u({align:e})}}),(0,e.createElement)(r.ToolbarGroup,null,(0,e.createElement)(r.ToolbarButton,{className:"components-tab-button",isPressed:!p,onClick:()=>{m({isPreview:!1})}},(0,e.createElement)("span",null,"HTML")),(0,e.createElement)(r.ToolbarButton,{className:"components-tab-button",isPressed:p,onClick:()=>{m({isPreview:!0})}},(0,e.createElement)("span",null,(0,t.__)("Preview"))))),(0,e.createElement)(r.Disabled.Consumer,null,(()=>p?(0,e.createElement)("div",{className:"ystdb-btn-link__preview"},(0,e.createElement)(f(),{block:"ystdb/svg-button-link",attributes:d})):(0,e.createElement)(g.PlainText,{className:"ystdb-btn-link__input",value:k,onChange:e=>u({content:e}),placeholder:"HTMLを入力...","aria-label":(0,t.__)("HTML")}))),(0,e.createElement)(g.InspectorControls,null,(0,e.createElement)(g.PanelColorSettings,{title:(0,t.__)("Color settings","ystandard-blocks"),initialOpen:!0,colorSettings:[{value:a.color,onChange:e=>{u({customGradient:void 0}),s(e)},label:(0,t.__)("Background Color","ystandard-blocks")},{value:l.color,onChange:e=>{i(e)},label:(0,t.__)("Text Color","ystandard-blocks")}]}),(0,e.createElement)(r.PanelBody,{title:(0,t.__)("枠線設定","ystandard-blocks")},(0,e.createElement)(r.RangeControl,{value:h,label:(0,t.__)("枠線の角丸","ystandard-blocks"),min:o.button.borderRadiusMin,max:o.button.borderRadiusMax,initialPosition:o.button.borderRadiusInitialPosition,allowReset:!0,onChange:e=>{u({borderRadius:e})}})),(0,e.createElement)(r.PanelBody,{title:(0,t.__)("アイコン設定","ystandard-blocks")},(0,e.createElement)(y,{iconControlTitle:(0,t.__)("左アイコン","ystandard-blocks"),selectedIcon:w,onClickIcon:e=>{u({iconLeft:e}),u({iconLeftSVG:c(e)})}}),(0,e.createElement)(r.BaseControl,null,(0,e.createElement)("div",{className:"ystdb-inspector-controls__label"},(0,t._x)("左アイコンサイズ","ystandard-blocks")),(0,e.createElement)(v,null,o.icon.size.map((t=>(0,e.createElement)(r.Button,{key:t.value,isSecondary:L(C)!==t.value,isPrimary:L(C)===t.value,onClick:()=>{u({iconSizeLeft:t.value})}},(0,e.createElement)("span",null,t.label)))))),(0,e.createElement)(y,{iconControlTitle:(0,t.__)("右アイコン","ystandard-blocks"),selectedIcon:E,onClickIcon:e=>{u({iconRight:e}),u({iconRightSVG:c(e)})}}),(0,e.createElement)(r.BaseControl,null,(0,e.createElement)("div",{className:"ystdb-inspector-controls__label"},(0,t._x)("右アイコンサイズ","ystandard-blocks")),(0,e.createElement)(v,null,o.icon.size.map((t=>(0,e.createElement)(r.Button,{key:t.value,isSecondary:L(x)!==t.value,isPrimary:L(x)===t.value,onClick:()=>{u({iconSizeRight:t.value})}},(0,e.createElement)("span",null,t.label))))))),(0,e.createElement)(r.PanelBody,{title:(0,t.__)("文字設定","ystandard-blocks")},(0,e.createElement)(r.BaseControl,null,(0,e.createElement)(g.FontSizePicker,{label:(0,t.__)("文字サイズ","ystandard-blocks"),value:b.size,onChange:e=>{_(e)}}))),(0,e.createElement)(r.PanelBody,{title:(0,t.__)("余白設定","ystandard-blocks")},(0,e.createElement)(r.BaseControl,null,(0,e.createElement)("span",{className:"ystdb-info__small"},"ボタン内側の余白を設定できます。"),(0,e.createElement)("div",{className:"ystdb-btn-selector components-base-control"},o.button.paddingTypes.map((t=>(0,e.createElement)(r.Button,{key:t.value,isSecondary:T!==t.value,isPrimary:T===t.value,onClick:()=>{u({paddingType:t.value})}},(0,e.createElement)("span",null,t.label))))))),(0,e.createElement)(r.PanelBody,{title:(0,t.__)("ブロックボタン設定","ystandard-blocks")},(0,e.createElement)(r.BaseControl,null,(0,e.createElement)(r.ToggleControl,{label:(0,t.__)("ボタンをブロック型にする","ystandard-blocks"),onChange:()=>{u({buttonType:"is-block"===R?"":"is-block"})},checked:"is-block"===R}),(0,e.createElement)(r.RangeControl,{value:N,label:(0,t.__)("ボタン最大幅","ystandard-blocks"),min:0,max:I,initialPosition:100,allowReset:!0,onChange:e=>{u({maxWidth:e})}}),(0,e.createElement)(r.RadioControl,{label:(0,t.__)("最大幅単位","ystandard-blocks"),selected:z,options:[{label:(0,t.__)("%","ystandard-blocks"),value:"%"},{label:(0,t.__)("px","ystandard-blocks"),value:"px"}],onChange:e=>{u({maxUnit:e})}}))),(0,e.createElement)(r.PanelBody,{title:(0,t.__)("アニメーション設定","ystandard-blocks")},(0,e.createElement)(r.BaseControl,null,(0,e.createElement)(r.RadioControl,{label:(0,t.__)("アニメーション種類","ystandard-blocks"),selected:B,options:o.button.animationTypes,onChange:e=>{u({animationType:e})}}),(0,e.createElement)(r.RangeControl,{value:O,label:(0,t.__)("アニメーションの速さ(秒)","ystandard-blocks"),min:1,max:10,initialPosition:5,allowReset:!0,onChange:e=>{u({animationInterval:e})}}))))))})),h=window.React,w=n.n(h),C=n(697),E=n.n(C);function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},x.apply(this,arguments)}var S=(0,h.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,a=e.size,l=void 0===a?24:a,s=function(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["color","size"]);return w().createElement("svg",x({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),w().createElement("polyline",{points:"16 18 22 12 16 6"}),w().createElement("polyline",{points:"8 6 2 12 8 18"}))}));S.propTypes={color:E().string,size:E().oneOfType([E().string,E().number])},S.displayName="Code";var T=S,R=window.wp.blocks;var P={from:[{type:"block",blocks:["ystdb/btn-link"],transform:e=>(0,R.createBlock)("ystdb/svg-button-link",{className:e.className,content:e.content,borderRadius:e.borderRadius,iconSizeLeft:e.iconSizeLeft,iconSizeRight:e.iconSizeRight,align:e.align,backgroundColor:e.backgroundColor,customBackgroundColor:e.customBackgroundColor,textColor:e.textColor,customTextColor:e.customTextColor,fontSize:e.fontSize,customFontSize:e.customFontSize,paddingType:e.paddingType,buttonType:e.buttonType,maxWidth:e.maxWidth,maxUnit:e.maxUnit,animationType:e.animationType,animationInterval:e.animationInterval})}]};const z=[...[{attributes:{content:{type:"string"},borderRadius:{type:"number",default:4},iconLeft:{type:"string"},iconLeftSVG:{type:"string"},iconSizeLeft:{type:"string",default:""},iconRight:{type:"string"},iconRightSVG:{type:"string"},iconSizeRight:{type:"string",default:""},align:{type:"string"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"},paddingType:{type:"string",default:""},buttonType:{type:"string"},maxWidth:{type:"number",default:100},maxUnit:{type:"string",default:"%"},animationType:{type:"string",default:"none"},animationInterval:{type:"number",default:5}},supports:{className:!1,html:!1},migrate(e){let t=e.customFontSize;return"number"==typeof t&&(t=t.toString().replace("px","")+"px"),{...e,customFontSize:t}}}]];(0,R.registerBlockType)("ystdb/svg-button-link",{title:(0,t.__)("ボタン型リンク","ystandard-blocks"),description:(0,t.__)("入力したリンク(a)タグをボタン形式で表示するブロック","ystandard-blocks"),icon:(0,e.createElement)(T,{stroke:o.color.iconForeground,style:{fill:"none"}}),keywords:[(0,t.__)("link"),(0,t.__)("button"),"button"],category:o.category.common,attributes:{content:{type:"string"},borderRadius:{type:"number",default:4},iconLeft:{type:"string"},iconLeftSVG:{type:"string"},iconSizeLeft:{type:"string",default:""},iconRight:{type:"string"},iconRightSVG:{type:"string"},iconSizeRight:{type:"string",default:""},align:{type:"string"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"string"},paddingType:{type:"string",default:""},buttonType:{type:"string"},maxWidth:{type:"number",default:100},maxUnit:{type:"string",default:"%"},animationType:{type:"string",default:"none"},animationInterval:{type:"number",default:5}},supports:{className:!1,html:!1},edit:k,save:()=>null,styles:[{name:"fill",label:(0,t.__)("塗りつぶし"),isDefault:!0},{name:"outline",label:(0,t.__)("アウトライン")}],deprecated:z,transforms:P,example:{}})}()}();