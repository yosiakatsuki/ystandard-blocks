!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=26)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.React},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.primitives},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)){if(a.length){var s=o.apply(null,a);s&&e.push(s)}}else if("object"===r)if(a.toString===Object.prototype.toString)for(var c in a)n.call(a,c)&&a[c]&&e.push(c);else e.push(a.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(5),o=n.n(a),r=n(0),s=n(2),c=n(6),i=n.n(c);const l=e=>{const t=i()("ystdb-component-admin-menu-button","is-update",e.className);return Object(r.createElement)(s.Button,o()({className:t},e),e.children)},u=e=>{const t=i()("ystdb-component-admin-menu-button","is-cancel",e.className);return Object(r.createElement)(s.Button,o()({className:t},e),e.children)},d=e=>{const t=i()("ystdb-component-admin-menu-button","is-delete",e.className);return Object(r.createElement)(s.Button,o()({className:t},e),e.children)}},function(e,t,n){"use strict";function a(e,t){if(!window.ystdbAdminMenuConfig)return t;if(!window.ystdbAdminMenuConfig.hasOwnProperty("config"))return t;const n=window.ystdbAdminMenuConfig.config;return n.hasOwnProperty(e)?n[e]:t}function o(e,t,n){if(!window.ystdbAdminMenuOptions)return n;if(!window.ystdbAdminMenuOptions.hasOwnProperty("options"))return n;const a=window.ystdbAdminMenuOptions.options;return a.hasOwnProperty(e)?t?a[e].hasOwnProperty(t)?a[e][t]:n:a[e]:n}function r(e){return"success"===e}function s(e){const t=a("endpointNamespace");if(t)return t+"/"+function(e){const t=a("route");if(t.hasOwnProperty(e))return t[e]}(e);console.error("Namespaceが見つかりません")}n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return s}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(3);const o={category:{common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},color:{iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:Object(a.__)("小","ystandard-blocks")},{value:"",label:Object(a.__)("中","ystandard-blocks")},{value:"is-large",label:Object(a.__)("大","ystandard-blocks")}],animationTypes:[{label:Object(a.__)("なし","ystandard-blocks"),value:"none"},{label:Object(a.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"is-small",label:Object(a.__)("小","ystandard-blocks")},{value:"",label:Object(a.__)("中","ystandard-blocks")},{value:"is-large",label:Object(a.__)("大","ystandard-blocks")}]},component:{defaultAvatar:{url:"https://www.gravatar.com/avatar/000000000000000000000000000000?s=128&r=g&d=mp"},fontWeight:[{value:"",label:Object(a._x)("指定無し","component-config","ystandard-blocks")},{value:"normal",label:Object(a._x)("normal","component-config","ystandard-blocks")},{value:"bold",label:Object(a._x)("bold","component-config","ystandard-blocks")},{value:"100",label:Object(a._x)("100","component-config","ystandard-blocks")},{value:"200",label:Object(a._x)("200","component-config","ystandard-blocks")},{value:"300",label:Object(a._x)("300","component-config","ystandard-blocks")},{value:"400",label:Object(a._x)("400","component-config","ystandard-blocks")},{value:"500",label:Object(a._x)("500","component-config","ystandard-blocks")},{value:"600",label:Object(a._x)("600","component-config","ystandard-blocks")},{value:"700",label:Object(a._x)("700","component-config","ystandard-blocks")},{value:"800",label:Object(a._x)("800","component-config","ystandard-blocks")},{value:"900",label:Object(a._x)("900","component-config","ystandard-blocks")}],fontUnit:[{value:"px",label:"px"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"%",label:"%"}],fontStyle:[{value:"",label:Object(a._x)("指定無し","component-config","ystandard-blocks")},{value:"italic",label:Object(a._x)("イタリック体","component-config","ystandard-blocks")}]}},r=e=>o.component[e]},function(e,t,n){e.exports=n(19)()},function(e,t,n){"use strict";n.d(t,"a",(function(){return $})),n.d(t,"c",(function(){return K})),n.d(t,"b",(function(){return J}));var a=n(5),o=n.n(a),r=n(0),s=n(1),c=n.n(s);function i(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}var l=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a},u=n(16);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}function b(e){return"number"==typeof e&&!isNaN(e)}function p(e){return"boolean"==typeof e}function f(e){return"string"==typeof e}function g(e){return"function"==typeof e}function v(e){return f(e)||g(e)?e:null}function O(e){return 0===e||e}var y=!("undefined"==typeof window||!window.document||!window.document.createElement);function h(e){return Object(s.isValidElement)(e)||f(e)||g(e)||b(e)}var j={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},E={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function _(e){var t=e.enter,n=e.exit,a=e.appendPosition,o=void 0!==a&&a,r=e.collapse,i=void 0===r||r,l=e.collapseDuration,u=void 0===l?300:l;return function(e){var a=e.children,r=e.position,l=e.preventExitTransition,d=e.done,m=e.nodeRef,b=e.isIn,p=o?t+"--"+r:t,f=o?n+"--"+r:n,g=Object(s.useRef)(),v=Object(s.useRef)(0);function O(e){if(e.target===m.current){var t=m.current;t.removeEventListener("animationend",O),0===v.current&&(t.className=g.current)}}function y(){var e=m.current;e.removeEventListener("animationend",y),i?function(e,t,n){void 0===n&&(n=300);var a=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=a+"px",o.transition="all "+n+"ms",requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,d,u):d()}return Object(s.useLayoutEffect)((function(){var e;e=m.current,g.current=e.className,e.className+=" "+p,e.addEventListener("animationend",O)}),[]),Object(s.useEffect)((function(){b||(l?y():function(){v.current=1;var e=m.current;e.className+=" "+f,e.addEventListener("animationend",y)}())}),[b]),c.a.createElement(c.a.Fragment,null,a)}}var w={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){for(var t=this,n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];this.list.has(e)&&this.list.get(e).forEach((function(n){var o=setTimeout((function(){n.apply(void 0,a)}),0);t.emitQueue.has(e)||t.emitQueue.set(e,[]),t.emitQueue.get(e).push(o)}))}};function T(e,t){void 0===t&&(t=!1);var n=Object(s.useRef)(e);return Object(s.useEffect)((function(){t&&(n.current=e)})),n.current}function C(e,t){switch(t.type){case 0:return[].concat(e,[t.toastId]).filter((function(e){return e!==t.staleId}));case 1:return O(t.toastId)?e.filter((function(e){return e!==t.toastId})):[]}}var x=["delay","staleId"];function N(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function k(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function I(e){var t=e.closeToast,n=e.theme,a=e.ariaLabel,o=void 0===a?"close":a;return Object(s.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},Object(s.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Object(s.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function P(e){var t,n,a=e.delay,o=e.isRunning,r=e.closeToast,c=e.type,i=e.hide,u=e.className,m=e.style,b=e.controlledProgress,p=e.progress,f=e.rtl,v=e.isIn,O=e.theme,y=d({},m,{animationDuration:a+"ms",animationPlayState:o?"running":"paused",opacity:i?0:1});b&&(y.transform="scaleX("+p+")");var h=l("Toastify__progress-bar",b?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+O,"Toastify__progress-bar--"+c,((t={})["Toastify__progress-bar--rtl"]=f,t)),j=g(u)?u({rtl:f,type:c,defaultClassName:h}):l(h,u),E=((n={})[b&&p>=1?"onTransitionEnd":"onAnimationEnd"]=b&&p<1?null:function(){v&&r()},n);return Object(s.createElement)("div",Object.assign({role:"progressbar","aria-hidden":i?"true":"false","aria-label":"notification timer",className:j,style:y},E))}P.defaultProps={type:E.DEFAULT,hide:!1};var L=["theme","type"],S=function(e){var t=e.theme,n=e.type,a=m(e,L);return c.a.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},a))},B={info:function(e){return c.a.createElement(S,Object.assign({},e),c.a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return c.a.createElement(S,Object.assign({},e),c.a.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return c.a.createElement(S,Object.assign({},e),c.a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return c.a.createElement(S,Object.assign({},e),c.a.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.a.createElement("div",{className:"Toastify__spinner"})}},R=function(e){var t,n,a=function(e){var t=Object(s.useState)(!0),n=t[0],a=t[1],o=Object(s.useState)(!1),r=o[0],c=o[1],i=Object(s.useRef)(null),l=T({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null}),u=T(e,!0),d=e.autoClose,m=e.pauseOnHover,b=e.closeToast,p=e.onClick,f=e.closeOnClick;function v(t){if(e.draggable){var n=i.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=n.getBoundingClientRect(),n.style.transition="",l.x=N(t.nativeEvent),l.y=k(t.nativeEvent),"x"===e.draggableDirection?(l.start=l.x,l.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=n.offsetHeight*(e.draggablePercent/100))}}function O(){if(l.boundingRect){var t=l.boundingRect,n=t.top,a=t.bottom,o=t.left,r=t.right;e.pauseOnHover&&l.x>=o&&l.x<=r&&l.y>=n&&l.y<=a?h():y()}}function y(){a(!0)}function h(){a(!1)}function j(t){if(l.canDrag){t.preventDefault();var a=i.current;n&&h(),l.x=N(t),l.y=k(t),"x"===e.draggableDirection?l.delta=l.x-l.start:l.delta=l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),a.style.transform="translate"+e.draggableDirection+"("+l.delta+"px)",a.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance))}}function E(){var t=i.current;if(l.canDrag){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return c(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}Object(s.useEffect)((function(){return g(e.onOpen)&&e.onOpen(Object(s.isValidElement)(e.children)&&e.children.props),function(){g(u.onClose)&&u.onClose(Object(s.isValidElement)(u.children)&&u.children.props)}}),[]),Object(s.useEffect)((function(){return e.draggable&&(document.addEventListener("mousemove",j),document.addEventListener("mouseup",E),document.addEventListener("touchmove",j),document.addEventListener("touchend",E)),function(){e.draggable&&(document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",j),document.removeEventListener("touchend",E))}}),[e.draggable]),Object(s.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||h(),window.addEventListener("focus",y),window.addEventListener("blur",h)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",h))}}),[e.pauseOnFocusLoss]);var _={onMouseDown:v,onTouchStart:v,onMouseUp:O,onTouchEnd:O};return d&&m&&(_.onMouseEnter=h,_.onMouseLeave=y),f&&(_.onClick=function(e){p&&p(e),l.canCloseOnClick&&b()}),{playToast:y,pauseToast:h,isRunning:n,preventExitTransition:r,toastRef:i,eventHandlers:_}}(e),o=a.isRunning,r=a.preventExitTransition,c=a.toastRef,i=a.eventHandlers,u=e.closeButton,d=e.children,m=e.autoClose,b=e.onClick,p=e.type,v=e.hideProgressBar,O=e.closeToast,y=e.transition,h=e.position,j=e.className,E=e.style,_=e.bodyClassName,w=e.bodyStyle,C=e.progressClassName,x=e.progressStyle,I=e.updateId,L=e.role,S=e.progress,R=e.rtl,M=e.toastId,A=e.deleteToast,D=e.isIn,z=e.isLoading,F=e.icon,H=e.theme,U=l("Toastify__toast","Toastify__toast-theme--"+H,"Toastify__toast--"+p,((t={})["Toastify__toast--rtl"]=R,t)),V=g(j)?j({rtl:R,position:h,type:p,defaultClassName:U}):l(U,j),G=!!S,W=B[p],Q={theme:H,type:p},q=W&&W(Q);return!1===F?q=void 0:g(F)?q=F(Q):Object(s.isValidElement)(F)?q=Object(s.cloneElement)(F,Q):f(F)?q=F:z&&(q=B.spinner()),Object(s.createElement)(y,{isIn:D,done:A,position:h,preventExitTransition:r,nodeRef:c},Object(s.createElement)("div",Object.assign({id:M,onClick:b,className:V},i,{style:E,ref:c}),Object(s.createElement)("div",Object.assign({},D&&{role:L},{className:g(_)?_({type:p}):l("Toastify__toast-body",_),style:w}),q&&Object(s.createElement)("div",{className:l("Toastify__toast-icon",(n={},n["Toastify--animate-icon Toastify__zoom-enter"]=!z,n))},q),Object(s.createElement)("div",null,d)),function(e){if(e){var t={closeToast:O,type:p,theme:H};return g(e)?e(t):Object(s.isValidElement)(e)?Object(s.cloneElement)(e,t):void 0}}(u),(m||G)&&Object(s.createElement)(P,Object.assign({},I&&!G?{key:"pb-"+I}:{},{rtl:R,theme:H,delay:m,isRunning:o,isIn:D,closeToast:O,hide:v,type:p,style:x,className:C,controlledProgress:G,progress:S}))))},M=function(e){var t=function(e){var t=Object(s.useReducer)((function(e){return e+1}),0)[1],n=Object(s.useReducer)(C,[]),a=n[0],o=n[1],r=Object(s.useRef)(null),c=T(0),i=T([]),l=T({}),u=T({toastKey:1,displayedToast:0,props:e,containerId:null,isToastActive:d,getToast:function(e){return l[e]||null}});function d(e){return-1!==a.indexOf(e)}function y(e){var t=e.containerId;!u.props.limit||t&&u.containerId!==t||(c-=i.length,i=[])}function j(e){o({type:1,toastId:e})}function E(){var e=i.shift();N(e.toastContent,e.toastProps,e.staleId)}function _(e,n){var a=n.delay,o=n.staleId,d=m(n,x);if(h(e)&&!function(e){var t=e.containerId,n=e.toastId,a=e.updateId;return!!(!r.current||u.props.enableMultiContainer&&t!==u.props.containerId||l[n]&&null==a)}(d)){var y=d.toastId,_=d.updateId,w=d.data,T=u.props,C=function(){return j(y)},k=null==d.updateId;k&&c++;var I,P,L={toastId:y,updateId:_,isLoading:d.isLoading,theme:d.theme||T.theme,icon:d.icon||T.icon,isIn:!1,key:d.key||u.toastKey++,type:d.type,closeToast:C,closeButton:d.closeButton,rtl:T.rtl,position:d.position||T.position,transition:d.transition||T.transition,className:v(d.className||T.toastClassName),bodyClassName:v(d.bodyClassName||T.bodyClassName),style:d.style||T.toastStyle,bodyStyle:d.bodyStyle||T.bodyStyle,onClick:d.onClick||T.onClick,pauseOnHover:p(d.pauseOnHover)?d.pauseOnHover:T.pauseOnHover,pauseOnFocusLoss:p(d.pauseOnFocusLoss)?d.pauseOnFocusLoss:T.pauseOnFocusLoss,draggable:p(d.draggable)?d.draggable:T.draggable,draggablePercent:b(d.draggablePercent)?d.draggablePercent:T.draggablePercent,draggableDirection:d.draggableDirection||T.draggableDirection,closeOnClick:p(d.closeOnClick)?d.closeOnClick:T.closeOnClick,progressClassName:v(d.progressClassName||T.progressClassName),progressStyle:d.progressStyle||T.progressStyle,autoClose:!d.isLoading&&(I=d.autoClose,P=T.autoClose,!1===I||b(I)&&I>0?I:P),hideProgressBar:p(d.hideProgressBar)?d.hideProgressBar:T.hideProgressBar,progress:d.progress,role:f(d.role)?d.role:T.role,deleteToast:function(){!function(e){delete l[e];var n=i.length;if((c=O(e)?c-1:c-u.displayedToast)<0&&(c=0),n>0){var a=O(e)?1:u.props.limit;if(1===n||1===a)u.displayedToast++,E();else{var o=a>n?n:a;u.displayedToast=o;for(var r=0;r<o;r++)E()}}else t()}(y)}};g(d.onOpen)&&(L.onOpen=d.onOpen),g(d.onClose)&&(L.onClose=d.onClose),"y"===L.draggableDirection&&80===L.draggablePercent&&(L.draggablePercent*=1.5);var S=T.closeButton;!1===d.closeButton||h(d.closeButton)?S=d.closeButton:!0===d.closeButton&&(S=!h(T.closeButton)||T.closeButton),L.closeButton=S;var B=e;Object(s.isValidElement)(e)&&!f(e.type)?B=Object(s.cloneElement)(e,{closeToast:C,toastProps:L,data:w}):g(e)&&(B=e({closeToast:C,toastProps:L,data:w})),T.limit&&T.limit>0&&c>T.limit&&k?i.push({toastContent:B,toastProps:L,staleId:o}):b(a)&&a>0?setTimeout((function(){N(B,L,o)}),a):N(B,L,o)}}function N(e,t,n){var a=t.toastId;n&&delete l[n],l[a]={content:e,props:t},o({type:0,toastId:a,staleId:n})}return Object(s.useEffect)((function(){return u.containerId=e.containerId,w.cancelEmit(3).on(0,_).on(1,(function(e){return r.current&&j(e)})).on(5,y).emit(2,u),function(){return w.emit(3,u)}}),[]),Object(s.useEffect)((function(){u.isToastActive=d,u.displayedToast=a.length,w.emit(4,a.length,e.containerId)}),[a]),Object(s.useEffect)((function(){u.props=e})),{getToastToRender:function(t){for(var n={},a=e.newestOnTop?Object.keys(l).reverse():Object.keys(l),o=0;o<a.length;o++){var r=l[a[o]],s=r.props.position;n[s]||(n[s]=[]),n[s].push(r)}return Object.keys(n).map((function(e){return t(e,n[e])}))},collection:l,containerRef:r,isToastActive:d}}(e),n=t.getToastToRender,a=t.containerRef,o=t.isToastActive,r=e.className,c=e.style,i=e.rtl,u=e.containerId;function y(e){var t,n=l("Toastify__toast-container","Toastify__toast-container--"+e,((t={})["Toastify__toast-container--rtl"]=i,t));return g(r)?r({position:e,rtl:i,defaultClassName:n}):l(n,v(r))}return Object(s.createElement)("div",{ref:a,className:"Toastify",id:u},n((function(e,t){var n=0===t.length?d({},c,{pointerEvents:"none"}):d({},c);return Object(s.createElement)("div",{className:y(e),style:n,key:"container-"+e},t.map((function(e){var t=e.content,n=e.props;return Object(s.createElement)(R,Object.assign({},n,{isIn:o(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?I:n.closeButton}),t)})))})))};M.defaultProps={position:j.TOP_RIGHT,transition:_({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:I,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var A,D,z,F=new Map,H=[],U=!1;function V(){return Math.random().toString(36).substr(2,9)}function G(e){return e&&(f(e.toastId)||b(e.toastId))?e.toastId:V()}function W(e,t){return F.size>0?w.emit(0,e,t):(H.push({content:e,options:t}),U&&y&&(U=!1,D=document.createElement("div"),document.body.appendChild(D),Object(u.render)(Object(s.createElement)(M,Object.assign({},z)),D))),t.toastId}function Q(e,t){return d({},t,{type:t&&t.type||e,toastId:G(t)})}var q=function(e){return function(t,n){return W(t,Q(e,n))}},Y=function(e,t){return W(e,Q(E.DEFAULT,t))};Y.loading=function(e,t){return W(e,Q(E.DEFAULT,d({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},Y.promise=function(e,t,n){var a=t.pending,o=t.error,r=t.success,s=f(a)?Y.loading(a,n):Y.loading(a.render,d({},n,a)),c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},i=function(e,t,a){var o=f(t)?{render:t}:t;return Y.update(s,d({type:e},c,n,o,{data:a})),a};return e.then((function(e){return i("success",r,e)})).catch((function(e){return i("error",o,e)})),e},Y.success=q(E.SUCCESS),Y.info=q(E.INFO),Y.error=q(E.ERROR),Y.warn=Y.warning=q(E.WARNING),Y.dark=function(e,t){return W(e,Q(E.DEFAULT,d({theme:"dark"},t)))},Y.dismiss=function(e){return w.emit(1,e)},Y.clearWaitingQueue=function(e){return void 0===e&&(e={}),w.emit(5,e)},Y.isActive=function(e){var t=!1;return F.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},Y.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,a=F.get(n||A);return a?a.getToast(e):null}(e,t);if(n){var a=n.props,o=n.content,r=d({},a,t,{toastId:t.toastId||e,updateId:V()});r.toastId!==e&&(r.staleId=e);var s=r.render||o;delete r.render,W(s,r)}}),0)},Y.done=function(e){Y.update(e,{progress:1})},Y.onChange=function(e){return g(e)&&w.on(4,e),function(){g(e)&&w.off(4,e)}},Y.configure=function(e){void 0===e&&(e={}),U=!0,z=e},Y.POSITION=j,Y.TYPE=E,w.on(2,(function(e){A=e.containerId||e,F.set(A,e),H.forEach((function(e){w.emit(0,e.content,e.options)})),H=[]})).on(3,(function(e){F.delete(e.containerId||e),0===F.size&&w.off(0).off(1).off(5),y&&D&&document.body.removeChild(D)}));const $=e=>Object(r.createElement)(M,o()({position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0},e)),X={position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0},K=e=>{Y.success(null!=e?e:"更新しました。",X)},J=e=>{Y.error(null!=e?e:"問題が発生しました。",X)}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(5),o=n.n(a),r=n(0),s=n(6),c=n.n(s);const i=e=>{const{children:t,type:n,isShow:a}=e,o=c()("ystdb-component-message","is-"+n,{"is-hide":!1===a});return Object(r.createElement)("div",{className:o},t)},l=e=>{const{children:t}=e;return Object(r.createElement)(i,o()({type:"error"},e),t)}},,function(e,t){e.exports=window.wp.apiFetch},function(e,t){e.exports=window.ReactDOM},function(e,t,n){"use strict";var a=n(0),o=n(1),r=n.n(o),s=n(10),c=n.n(s);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=Object(o.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,o=e.size,s=void 0===o?24:o,c=function(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return r.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.a.createElement("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),r.a.createElement("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="Book";var u=l,d=n(6),m=n.n(d);t.a=e=>{const{url:t,target:n,text:o,topRight:r}=e,s=o||"マニュアルを見る",c=n||"_blank";return Object(a.createElement)("div",{className:m()("ystdb-component-manual-link",{"is-top-right":r})},Object(a.createElement)("a",{href:t,target:c},Object(a.createElement)("span",{className:"ystdb-component-manual-link__icon"},Object(a.createElement)(u,{size:12})),Object(a.createElement)("span",{className:"ystdb-component-manual-link__text"},s)))}},function(e,t,n){},function(e,t,n){"use strict";var a=n(20);function o(){}function r(){}r.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,r,s){if(s!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,function(e,t){e.exports=window.wp.mediaUtils},,,function(e,t,n){"use strict";var a=n(0);t.a=function({icon:e,size:t=24,...n}){return Object(a.cloneElement)(e,{width:t,height:t,...n})}},function(e,t,n){"use strict";n.r(t),n.d(t,"BalloonContext",(function(){return I}));var a=n(0),o=n(25),r=n(4),s=Object(a.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(a.createElement)(r.Path,{d:"M10.2 3.28c3.53 0 6.43 2.61 6.92 6h2.08l-3.5 4-3.5-4h2.32c-.45-1.97-2.21-3.45-4.32-3.45-1.45 0-2.73.71-3.54 1.78L4.95 5.66C6.23 4.2 8.11 3.28 10.2 3.28zm-.4 13.44c-3.52 0-6.43-2.61-6.92-6H.8l3.5-4c1.17 1.33 2.33 2.67 3.5 4H5.48c.45 1.97 2.21 3.45 4.32 3.45 1.45 0 2.73-.71 3.54-1.78l1.71 1.95c-1.28 1.46-3.15 2.38-5.25 2.38z"})),c=n(2),i=n(15),l=n.n(i),u=n(8),d=n(11);n(18);const m={image:"",imageId:0,name:"",enable:!0,index:0},b=e=>[...e].sort((e,t)=>e.index-t.index);var p=Object(a.createElement)(r.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(a.createElement)(r.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})),f=Object(a.createElement)(r.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(a.createElement)(r.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})),g=Object(a.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)(r.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})),v=n(9),O=n(7),y=e=>{const{index:t,item:n}=e,{balloons:r,setBalloons:s,isUpdating:i,updateOption:l}=Object(a.useContext)(I),u=null!=n&&n.image?n.image:Object(v.a)("defaultAvatar").url,[d,m]=Object(a.useState)(!1),b=()=>m(!1);return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{className:"ystdb-menu-balloon__item-delete"},Object(a.createElement)(c.Button,{className:"ystdb-menu-balloon__item-delete-button",onClick:()=>m(!0),disabled:i},Object(a.createElement)(o.a,{icon:g})),d&&Object(a.createElement)(c.Modal,{title:"吹き出し設定を削除しますか？",onRequestClose:b,shouldCloseOnClickOutside:!1,isDismissible:!1},Object(a.createElement)("div",{className:"ystdb-menu-balloon__delete-modal"},Object(a.createElement)("figure",{className:"ystdb-menu-balloon__delete-modal-image"},Object(a.createElement)("img",{src:u,alt:""})),Object(a.createElement)("p",{className:"ystdb-menu-balloon__delete-modal-name"},null==n?void 0:n.name),Object(a.createElement)("div",{className:"ystdb-components-section"},Object(a.createElement)("div",{className:"ystdb-menu-component-columns"},Object(a.createElement)("div",{className:"ystdb-menu-component-columns__item"},Object(a.createElement)(O.b,{isPrimary:!0,onClick:()=>{(()=>{let e=[...r];e.splice(t,1),e=e.map((e,t)=>({...e,index:t})),s(e),l(e,{success:"吹き出し設定を削除しました。",error:"吹き出設定の削除に失敗しました。"})})(),b()},disabled:i},"削除")),Object(a.createElement)("div",{className:"ystdb-menu-component-columns__item"},Object(a.createElement)(O.a,{isSecondary:!0,onClick:b},"キャンセル"))))))))},h=n(6),j=n.n(h),E=n(22),_=e=>{const{onSelect:t,onClickAvatarDelete:n,type:o,imageId:r,imageUrl:s,name:i}=e,l=Object(v.a)("defaultAvatar").url;return Object(a.createElement)("figure",{className:"ystdb-menu-balloon__avatar-media-upload"},Object(a.createElement)(E.MediaUpload,{onSelect:e=>{t(e)},type:o,value:r,render:({open:e})=>s&&l!==s?Object(a.createElement)(c.Button,{className:"ystdb-menu-balloon__avatar-media-upload-select",onClick:n},Object(a.createElement)("img",{src:s,alt:i}),Object(a.createElement)("span",{className:"ystdb-menu-balloon__avatar-media-upload-select-hover"},"画像を削除")):Object(a.createElement)(c.Button,{className:"ystdb-menu-balloon__avatar-media-upload-select",onClick:e},Object(a.createElement)("img",{src:l,alt:""}),Object(a.createElement)("span",{className:"ystdb-menu-balloon__avatar-media-upload-select-hover"},"画像を選択"))}))},w=e=>{const{index:t}=e,{balloons:n,setBalloons:r}=Object(a.useContext)(I),s=n.length,i=n[t],l=`${i.image}-${i.name}-up`,u=`${i.image}-${i.name}-down`,d=e=>{let a=[...n];a[t]={...a[t],...e},r(a)};return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{className:j()("ystdb-menu-balloon__item",{"is-disable":!i.enable})},Object(a.createElement)("div",{className:"ystdb-menu-balloon__item-container"},Object(a.createElement)("div",{className:"ystdb-menu-balloon__item-sort"},Object(a.createElement)(c.Button,{key:l,className:"ystdb-menu-balloon__item-sort-button",onClick:()=>{if(0>=t)return;let e=[...n];e[t].index=t-1,e[t-1].index=t,r(b(e))}},Object(a.createElement)(o.a,{icon:p})),Object(a.createElement)(c.Button,{key:u,className:"ystdb-menu-balloon__item-sort-button",onClick:()=>{if(s<=t+1)return;let e=[...n];e[t].index=t+1,e[t+1].index=t,r(b(e))}},Object(a.createElement)(o.a,{icon:f}))),Object(a.createElement)("div",{className:"ystdb-menu-balloon__item-content"},Object(a.createElement)("div",{className:"ystdb-menu-balloon__item-image"},Object(a.createElement)(_,{onSelect:e=>{d({image:e.url,imageId:e.id})},onClickAvatarDelete:()=>{d({image:"",imageId:0})},type:["image"],imageId:i.imageId,imageUrl:i.image,name:i.name})),Object(a.createElement)("div",{className:"ystdb-menu-balloon__item-name"},Object(a.createElement)(c.TextControl,{value:i.name,onChange:e=>{d({name:e})}})),Object(a.createElement)("div",{className:"ystdb-menu-balloon__item-enable"},Object(a.createElement)(c.ToggleControl,{checked:!0===(m=void 0===(null==i?void 0:i.enable)||i.enable)||"true"===m||1===m||"1"===m,onChange:e=>{d({enable:!0===e?1:0})}})),Object(a.createElement)(y,{index:t,item:i})))));var m},T=()=>Object(a.createElement)("div",{className:"ystdb-menu-balloon__list-header"},Object(a.createElement)("div",{className:"ystdb-menu-balloon__item"},Object(a.createElement)("div",{className:"ystdb-menu-balloon__item-container"},Object(a.createElement)("div",{className:"ystdb-menu-balloon__item-sort"}," "),Object(a.createElement)("div",{className:"ystdb-menu-balloon__item-content"},Object(a.createElement)("div",{className:"ystdb-menu-balloon__item-image"},"画像"),Object(a.createElement)("div",{className:"ystdb-menu-balloon__item-name"},"名前"),Object(a.createElement)("div",{className:"ystdb-menu-balloon__item-enable"},"有効/無効"))))),C=Object(a.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(a.createElement)(r.Path,{d:"M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"})),x=n(13),N=()=>{const{balloons:e,setBalloons:t,isUpdating:n}=Object(a.useContext)(I),[r,s]=Object(a.useState)(!1),[i,l]=Object(a.useState)({image:"",imageId:0,name:""}),[u,d]=Object(a.useState)(!1),b=()=>s(!1);return Object(a.createElement)("div",{className:"ystdb-menu-balloon__add-item"},Object(a.createElement)(c.Button,{isSecondary:!0,onClick:()=>s(!0),disabled:n},Object(a.createElement)(o.a,{icon:C})," 追加"),r&&Object(a.createElement)(c.Modal,{title:"吹き出し設定の追加",onRequestClose:b,shouldCloseOnClickOutside:!1,isDismissible:!1},Object(a.createElement)("div",{className:"ystdb-menu-balloon__add-modal"},Object(a.createElement)("div",{className:"ystdb-menu-balloon__add-modal-image"},Object(a.createElement)(_,{onSelect:e=>{l(t=>({...t,image:e.url,imageId:e.id})),d(!1)},onClickAvatarDelete:()=>{l(e=>({...e,image:"",imageId:0}))},type:["image"],imageId:i.imageId,imageUrl:i.image,name:i.name})),Object(a.createElement)("div",{className:"ystdb-menu-balloon__add-modal-name"},Object(a.createElement)(c.TextControl,{value:i.name,onChange:e=>{l(t=>({...t,name:e})),d(!1)}})),Object(a.createElement)(x.a,{isShow:u},"画像 または 名前を入力してください。"),Object(a.createElement)("div",{className:"ystdb-components-section"},Object(a.createElement)("div",{className:"ystdb-menu-component-columns"},Object(a.createElement)("div",{className:"ystdb-menu-component-columns__item"},Object(a.createElement)(O.c,{isPrimary:!0,onClick:()=>{(i.image||i.name||(d(!0),0))&&(e.push({...m,...i,index:e.length-1}),t([...e]),b())},disabled:u},"追加")),Object(a.createElement)("div",{className:"ystdb-menu-component-columns__item"},Object(a.createElement)(O.a,{isSecondary:!0,onClick:b},"キャンセル")))))))},k=n(17);const I=Object(a.createContext)();Object(a.render)(Object(a.createElement)(()=>{const e=Object(u.c)("balloon",!1,[]),[t,n]=Object(a.useState)(b(e.map((e,t)=>e?(e.hasOwnProperty("index")||(e.index=t),e.hasOwnProperty("imageId")||(e.imageId=0),e.hasOwnProperty("enable")||(e.enable=!0),e):e))),[r,i]=Object(a.useState)(!1),m=(e,t)=>{r||(i(!0),setTimeout(()=>{l()({path:Object(u.b)("update"),method:"POST",data:e}).then(e=>{Object(u.d)(e.status)?Object(d.c)(null==t?void 0:t.success):(console.error("設定の更新に失敗しました。"),console.log(e),Object(d.b)(null==t?void 0:t.error))}).catch(e=>{console.error("エラーが発生しました。"),console.log(e),Object(d.b)(null==t?void 0:t.error)}),i(!1)},500))};return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{className:"ystdb-menu__wrap "},Object(a.createElement)(k.a,{url:"https://wp-ystandard.com/manual/ystdb-balloon/",topRight:!0}),Object(a.createElement)("h1",{className:"ystdb-menu__content-title"},"吹き出し登録"),Object(a.createElement)(d.a,null),Object(a.createElement)("div",{className:"ystdb-menu-balloon"},Object(a.createElement)(I.Provider,{value:{balloons:t,setBalloons:n,isUpdating:r,setIsUpdating:i,updateOption:m}},Object(a.createElement)("div",{className:"ystdb-menu-balloon__list"},Object(a.createElement)(T,null),t.map((e,t)=>Object(a.createElement)(w,{index:t}))),Object(a.createElement)("div",{className:"ystdb-menu-balloon__update"},Object(a.createElement)(c.Button,{isPrimary:!0,onClick:()=>{m(t)},disabled:r},Object(a.createElement)(o.a,{icon:s})," 更新"),Object(a.createElement)(N,null))))))},null),document.getElementById(Object(u.a)("pageId")))}]);