(()=>{var e={184:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var l=r.apply(null,n);l&&e.push(l)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)o.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},703:(e,t,n)=>{"use strict";var o=n(414);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,a,l){if(l!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return n.PropTypes=n,n}},697:(e,t,n)=>{e.exports=n(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.element,t=window.React;var o=n.n(t),r=n(697),a=n.n(r);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}var s=(0,t.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,s=void 0===a?24:a,c=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["color","size"]);return o().createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o().createElement("path",{d:"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"}))}));s.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},s.displayName="Maximize";const c=s,i=window.wp.blocks,d=window.wp.i18n,u={common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},p={iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"};(0,d.__)("小","ystandard-blocks"),(0,d.__)("中","ystandard-blocks"),(0,d.__)("大","ystandard-blocks"),(0,d.__)("なし","ystandard-blocks"),(0,d.__)("キラキラ","ystandard-blocks"),(0,d.__)("小","ystandard-blocks"),(0,d.__)("中","ystandard-blocks"),(0,d.__)("大","ystandard-blocks"),(0,d._x)("指定無し","component-config","ystandard-blocks"),(0,d._x)("通常(normal)","component-config","ystandard-blocks"),(0,d._x)("太字(bold)","component-config","ystandard-blocks"),(0,d._x)("100","component-config","ystandard-blocks"),(0,d._x)("200","component-config","ystandard-blocks"),(0,d._x)("300","component-config","ystandard-blocks"),(0,d._x)("400","component-config","ystandard-blocks"),(0,d._x)("500","component-config","ystandard-blocks"),(0,d._x)("600","component-config","ystandard-blocks"),(0,d._x)("700","component-config","ystandard-blocks"),(0,d._x)("800","component-config","ystandard-blocks"),(0,d._x)("900","component-config","ystandard-blocks"),(0,d._x)("指定無し","component-config","ystandard-blocks"),(0,d._x)("イタリック体","component-config","ystandard-blocks"),(0,d._x)("直線","component-config","ystandard-blocks"),(0,d._x)("点線","component-config","ystandard-blocks"),(0,d._x)("破線","component-config","ystandard-blocks"),(0,d._x)("二重線","component-config","ystandard-blocks");var y=n(184),m=n.n(y);const b=window.wp.blockEditor,h=window.wp.data,g=window.wp.components,f=t=>{let{children:n,type:o,className:r,...a}=t;const l=o||"info",s={className:m()("ystd-component-notice",r,`is-${l}`),...a};return(0,e.createElement)("div",s,n)},k=t=>{let{title:n,initialOpen:o,children:r}=t;const a=(0,e.useMemo)((()=>"function"==typeof o?o():o),[]);return(0,e.createElement)(g.PanelBody,{title:n,initialOpen:a},r)},_=t=>{let{attributes:n,setAttributes:o}=t;const{hideSp:r,hideMd:a,hideLg:l}=n;return(0,e.createElement)(k,{title:(0,d.__)("画面サイズ別非表示設定","ystandard-blocks"),initialOpen:r||a||l},(0,e.createElement)(g.BaseControl,null,(0,e.createElement)(f,{type:"help"},(0,d.__)("各デバイスの画面サイズでブロックを非表示にできます。","ystandard-blocks"))),(0,e.createElement)(g.BaseControl,null,(0,e.createElement)(g.ToggleControl,{label:(0,d.__)("スマートフォンサイズで非表示","ystandard-blocks"),checked:r,onChange:e=>{o({hideSp:e})}}),(0,e.createElement)(g.ToggleControl,{label:(0,d.__)("タブレットサイズで非表示","ystandard-blocks"),checked:a,onChange:e=>{o({hideMd:e})}}),(0,e.createElement)(g.ToggleControl,{label:(0,d.__)("PCサイズで非表示","ystandard-blocks"),checked:l,onChange:e=>{o({hideLg:e})}})))},v=t=>{let{attributes:n,setAttributes:o}=t;const{hideAMP:r,onlyAMP:a}=n,l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return window.ystdb&&"object"==typeof window.ystdb&&window.ystdb.hasOwnProperty(e)?window.ystdb[e]:t}("useAmp");return(0,e.createElement)(e.Fragment,null,!!l&&(0,e.createElement)(k,{title:(0,d.__)("AMP 表示・非表示 設定","ystandard-blocks"),initialOpen:r||a},(0,e.createElement)(g.BaseControl,null,(0,e.createElement)(f,{type:"help"},(0,d.__)("AMPページでの表示・非表示設定","ystandard-blocks"))),(0,e.createElement)(g.BaseControl,null,(0,e.createElement)(g.ToggleControl,{label:(0,d.__)("AMPページで非表示","ystandard-blocks"),checked:r,onChange:e=>{o({hideAMP:e})}}),(0,e.createElement)(g.ToggleControl,{label:(0,d.__)("AMPページのみ表示","ystandard-blocks"),checked:a,onChange:e=>{o({onlyAMP:e})}}))))},E=t=>{let{children:n}=t;return(0,e.createElement)("div",{className:"ystdb__horizon-buttons"},n)},w=[{label:(0,d.__)("表示","ystandard-blocks"),value:"only"},{label:(0,d.__)("非表示","ystandard-blocks"),value:"hide"}],x=t=>{const{attributes:n,setAttributes:o}=t,{taxFilterType:r}=n,a=r||"only";return(0,e.createElement)(g.BaseControl,{id:"filter-type",label:(0,d.__)("表示・非表示タイプ","ystandard-blocks")},(0,e.createElement)(E,null,w.map((t=>(0,e.createElement)(g.Button,{key:t.value,isSecondary:t.value!==a,isPrimary:t.value===a,onClick:()=>{o({taxFilterType:t.value})}},(0,e.createElement)("span",null,t.label))))),(0,e.createElement)(f,{type:"help"},(0,d.__)("選択したカテゴリー・タグ・タクソノミーがついたページのみでこのブロックが表示されるか、非表示になるか選択します","ystandard-blocks")))},O=window.wp.coreData;function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},C.apply(this,arguments)}const P=t=>{let{value:n,options:o,onChange:r,label:a,...l}=t;const s=o.find((e=>e.key===n));return(0,e.createElement)(g.CustomSelectControl,C({label:a,options:o,value:s,onChange:e=>{let{selectedItem:t}=e;r(t.key)}},l))},T=t=>{let{label:n,value:o,postType:r,onChange:a,allTaxonomies:l}=t;const{selectedPostType:s,taxonomy:c}=(0,h.useSelect)((e=>{const{getPostType:t,getTaxonomies:n}=e(O.store),o=n({per_page:-1})||[];return{selectedPostType:t(r),taxonomy:o.filter((e=>e?.visibility?.show_ui))}})),i=function(e){const t=[{key:"",name:(0,d.__)("--選択--","ystandard-toolbox"),style:{fontSize:"1em"}}];return e?[...t,...e]:t}([...(!0===l?(u=c,u.map((e=>e?.slug))||[]):s?.taxonomies||[]).map((e=>{const t=c.filter((t=>e===t?.slug));return t?{key:t[0].slug,name:t[0].name,style:{fontSize:"1em"}}:{}}))]);var u;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(P,{className:"aktk-taxonomy-select",label:n,value:o,options:i,onChange:e=>{a(e)}}),1>=i.length&&(0,e.createElement)(f,{type:"help"},(0,d.__)("分類の取得・表示には時間がかかることがあります。「選択」以外の分類が表示されない場合、この案内が消えるまで少しお待ち下さい。","ystandard-blocks")))},B=t=>{let{attributes:n,setAttributes:o}=t;const{taxonomy:r}=n;return(0,e.createElement)(g.BaseControl,null,(0,e.createElement)(T,{label:(0,d.__)("分類","ystandard-blocks"),value:r,onChange:e=>{o({taxonomy:e,terms:void 0})},allTaxonomies:!0}))},A=window.lodash;function S(e){return!!Array.isArray(e)&&0===e.length}const j=t=>{let{taxonomy:n,selectedTerms:o,onChange:r}=t;const a=o||[],{availableTerms:l}=(0,h.useSelect)((e=>{const{getEntityRecords:t}=e(O.store);return{availableTerms:t("taxonomy",n,{per_page:-1})||[]||[]}})),s=(0,e.useMemo)((()=>function(e,t){if(!e)return;const n=e=>-1!==t.indexOf(e.id)||void 0!==e.children&&e.children.map(n).filter((e=>e)).length>0,o=[...e];return o.sort(((e,t)=>{const o=n(e),r=n(t);return o===r?0:o&&!r?-1:!o&&r?1:0})),o}(function(e){if(!e)return;const t=e.map((e=>({children:[],parent:null,...e}))),n=(0,A.groupBy)(t,"parent");if(n.null&&n.null.length)return t;const o=e=>e.map((e=>{const t=n[e.id];return{...e,children:t&&t.length?o(t):[]}}));return o(n[0]||[])}(l),a)),[l]),c=t=>t.map((t=>(0,e.createElement)("div",{key:t.id,className:"aktk-hierarchical-terms-list__choice"},(0,e.createElement)(g.CheckboxControl,{checked:-1!==a.indexOf(t.id),onChange:()=>{(e=>{const t=a.includes(e)?(0,A.without)(a,e):[...a,e];r(t)})(parseInt(t.id,10))},label:(0,A.unescape)(t.name)}),!!t.children.length&&(0,e.createElement)("div",{className:"aktk-hierarchical-terms-list__subchoices"},c(t.children))))),i=s;return(0,e.createElement)(e.Fragment,null,!!n&&(0,e.createElement)("div",{className:"aktk-hierarchical-terms-list",tabIndex:"0",role:"group","aria-label":"Terms"},!S(i)&&c(i),S(i)&&(0,e.createElement)(f,{type:"help"},(0,d.__)("選択できる項目がありません。","ystandard-blocks"))))},M=(0,d.__)("カテゴリー・タグ","ystandard-blocks"),I=t=>{let{attributes:n,setAttributes:o}=t;const{taxonomy:r,terms:a}=n,{taxonomyLabel:l}=(0,h.useSelect)((e=>{const{getTaxonomy:t}=e(O.store),n=t(r);return n&&n.hasOwnProperty(r)?{taxonomyLabel:n[r]?.label||M}:{taxonomyLabel:M}}));return(0,e.createElement)(e.Fragment,null,!!r&&(0,e.createElement)(g.BaseControl,{id:"hierarchical-term-selector",label:l},(0,e.createElement)(j,{taxonomy:r,selectedTerms:a,onChange:e=>{o({terms:e})}})))},F=t=>{const{attributes:n}=t,{taxonomy:o}=n;return(0,e.createElement)(k,{title:(0,d.__)("カテゴリー・タグ別非表示設定","ystandard-blocks"),initialOpen:!!o},(0,e.createElement)(x,t),(0,e.createElement)(B,t),(0,e.createElement)(I,t))},N=t=>(0,e.createElement)(b.InspectorControls,null,(0,e.createElement)(_,t),(0,e.createElement)(F,t),(0,e.createElement)(v,t)),L=t=>{const{hasInnerBlocks:n}=(0,h.useSelect)((e=>{const{getBlock:n}=e("core/block-editor"),o=n(t?.clientId);return{hasInnerBlocks:o&&o.innerBlocks.length}})),o=(0,b.useBlockProps)({className:m()("ystdb-conditional-group")}),r=(0,b.useInnerBlocksProps)({className:m()("ystdb-conditional-group__inner")},{renderAppender:n?void 0:()=>(0,e.createElement)(b.InnerBlocks.ButtonBlockAppender,null)});return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(N,t),(0,e.createElement)("div",o,(0,e.createElement)("div",r)))};function z(){return(0,e.createElement)(b.InnerBlocks.Content,null)}const R={$schema:"https://raw.githubusercontent.com/WordPress/gutenberg/trunk/schemas/json/block.json",apiVersion:2,name:"ystdb/conditional-group-block",title:"条件付きグループブロック",description:"条件により表示・非表示を切り替えできるグループブロック",keywords:["cgb","条件付きグループブロック","conditional group block","グループブロック"],attributes:{hideSp:{type:"boolean",default:!1},hideMd:{type:"boolean",default:!1},hideLg:{type:"boolean",default:!1},taxFilterType:{type:"string",default:"only"},taxonomy:{type:"string"},terms:{type:"array"},hideAMP:{type:"boolean",default:!1},onlyAMP:{type:"boolean",default:!1}},supports:{className:!1,html:!1,align:!1,ystdtdHiddenBySize:!1}};!function(){const t=((e,t)=>{const n=window.ystdtbBlockEditor&&"object"==typeof window.ystdtbBlockEditor&&window.ystdtbBlockEditor.hasOwnProperty("defaultAttributes")?window.ystdtbBlockEditor.defaultAttributes:{};if(!n)return t;if(!n.hasOwnProperty(e))return t;const o=n[e];return Object.keys(o).map((e=>(t.hasOwnProperty(e)&&(t[e].default=o[e]),o))),t})(R.name,R.attributes);(0,i.registerBlockType)(R.name,{...R,icon:(0,e.createElement)(c,{stroke:p.iconForeground,style:{fill:"none"}}),category:u.common,attributes:t,edit:L,save:z,example:{}})}()})()})();