!function(){var e={184:function(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var s=a.apply(null,n);s&&e.push(s)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var l in n)o.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},703:function(e,t,n){"use strict";var o=n(414);function a(){}function r(){}r.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,r,s){if(s!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:a};return n.PropTypes=n,n}},697:function(e,t,n){e.exports=n(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var o={};!function(){"use strict";n.d(o,{u:function(){return Me}});var e=window.wp.element,t=window.React,a=n.n(t),r=n(697),s=n.n(r);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}var i=(0,t.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,s=void 0===r?24:r,i=function(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["color","size"]);return a().createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),a().createElement("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),a().createElement("polyline",{points:"17 21 17 13 7 13 7 21"}),a().createElement("polyline",{points:"7 3 7 8 15 8"}))}));i.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},i.displayName="Save";var c=i,u=window.wp.components,d=window.wp.apiFetch,m=n.n(d);function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(!window.ystdbAdminMenuConfig)return t;if(!window.ystdbAdminMenuConfig.hasOwnProperty("config"))return t;const n=window.ystdbAdminMenuConfig.config;return n.hasOwnProperty(e)?n[e]:t}function f(e){return"success"===e}function v(e){const t=p("endpointNamespace");if(!t)return void console.error("Namespaceが見つかりません");const n=function(e){const t=p("route");if(t.hasOwnProperty(e))return t[e]}(e);return t+"/"+n}function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},g.apply(this,arguments)}function b(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=b(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function y(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=b(e))&&(o&&(o+=" "),o+=t);return o}var h=window.ReactDOM;function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},E.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}function O(e){return"number"==typeof e&&!isNaN(e)}function w(e){return"boolean"==typeof e}function T(e){return"string"==typeof e}function C(e){return"function"==typeof e}function N(e){return T(e)||C(e)?e:null}function k(e){return 0===e||e}var x=!("undefined"==typeof window||!window.document||!window.document.createElement);function I(e){return(0,t.isValidElement)(e)||T(e)||C(e)||O(e)}var P={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},L={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function R(e){var n=e.enter,o=e.exit,r=e.appendPosition,s=void 0!==r&&r,l=e.collapse,i=void 0===l||l,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,l=e.position,c=e.preventExitTransition,d=e.done,m=e.nodeRef,p=e.isIn,f=s?n+"--"+l:n,v=s?o+"--"+l:o,g=(0,t.useRef)(),b=(0,t.useRef)(0);function y(e){if(e.target===m.current){var t=m.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",y),t.removeEventListener("animationcancel",y),0===b.current&&(t.className=g.current)}}function h(){var e=m.current;e.removeEventListener("animationend",h),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,a=e.style;requestAnimationFrame((function(){a.minHeight="initial",a.height=o+"px",a.transition="all "+n+"ms",requestAnimationFrame((function(){a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)}))}))}(e,d,u):d()}return(0,t.useLayoutEffect)((function(){var e;e=m.current,g.current=e.className,e.className+=" "+f,e.addEventListener("animationend",y),e.addEventListener("animationcancel",y)}),[]),(0,t.useEffect)((function(){p||(c?h():function(){b.current=1;var e=m.current;e.className+=" "+v,e.addEventListener("animationend",h)}())}),[p]),a().createElement(a().Fragment,null,r)}}var B={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){for(var t=this,n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];this.list.has(e)&&this.list.get(e).forEach((function(n){var a=setTimeout((function(){n.apply(void 0,o)}),0);t.emitQueue.has(e)||t.emitQueue.set(e,[]),t.emitQueue.get(e).push(a)}))}},S=["delay","staleId"];function M(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function A(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function j(e){var n=e.closeToast,o=e.theme,a=e.ariaLabel,r=void 0===a?"close":a;return(0,t.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+o,type:"button",onClick:function(e){e.stopPropagation(),n(e)},"aria-label":r},(0,t.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},(0,t.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function z(e){var n,o,a=e.delay,r=e.isRunning,s=e.closeToast,l=e.type,i=e.hide,c=e.className,u=e.style,d=e.controlledProgress,m=e.progress,p=e.rtl,f=e.isIn,v=e.theme,g=E({},u,{animationDuration:a+"ms",animationPlayState:r?"running":"paused",opacity:i?0:1});d&&(g.transform="scaleX("+m+")");var b=y("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+v,"Toastify__progress-bar--"+l,((n={})["Toastify__progress-bar--rtl"]=p,n)),h=C(c)?c({rtl:p,type:l,defaultClassName:b}):y(b,c),_=((o={})[d&&m>=1?"onTransitionEnd":"onAnimationEnd"]=d&&m<1?null:function(){f&&s()},o);return(0,t.createElement)("div",Object.assign({role:"progressbar","aria-hidden":i?"true":"false","aria-label":"notification timer",className:h,style:g},_))}z.defaultProps={type:L.DEFAULT,hide:!1};var D=["theme","type"],F=function(e){var n=e.theme,o=e.type,a=_(e,D);return(0,t.createElement)("svg",Object.assign({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===n?"currentColor":"var(--toastify-icon-color-"+o+")"},a))},H={info:function(e){return(0,t.createElement)(F,Object.assign({},e),(0,t.createElement)("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return(0,t.createElement)(F,Object.assign({},e),(0,t.createElement)("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return(0,t.createElement)(F,Object.assign({},e),(0,t.createElement)("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return(0,t.createElement)(F,Object.assign({},e),(0,t.createElement)("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return(0,t.createElement)("div",{className:"Toastify__spinner"})}},U=function(e){var n,o,a=function(e){var n=(0,t.useState)(!1),o=n[0],a=n[1],r=(0,t.useState)(!1),s=r[0],l=r[1],i=(0,t.useRef)(null),c=(0,t.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,u=(0,t.useRef)(e),d=e.autoClose,m=e.pauseOnHover,p=e.closeToast,f=e.onClick,v=e.closeOnClick;function g(t){if(e.draggable){c.didMove=!1,document.addEventListener("mousemove",E),document.addEventListener("mouseup",_),document.addEventListener("touchmove",E),document.addEventListener("touchend",_);var n=i.current;c.canCloseOnClick=!0,c.canDrag=!0,c.boundingRect=n.getBoundingClientRect(),n.style.transition="",c.x=M(t.nativeEvent),c.y=A(t.nativeEvent),"x"===e.draggableDirection?(c.start=c.x,c.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(c.start=c.y,c.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(){if(c.boundingRect){var t=c.boundingRect,n=t.top,o=t.bottom,a=t.left,r=t.right;e.pauseOnHover&&c.x>=a&&c.x<=r&&c.y>=n&&c.y<=o?h():y()}}function y(){a(!0)}function h(){a(!1)}function E(t){var n=i.current;c.canDrag&&n&&(c.didMove=!0,o&&h(),c.x=M(t),c.y=A(t),"x"===e.draggableDirection?c.delta=c.x-c.start:c.delta=c.y-c.start,c.start!==c.x&&(c.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+c.delta+"px)",n.style.opacity=""+(1-Math.abs(c.delta/c.removalDistance)))}function _(){document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",_),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",_);var t=i.current;if(c.canDrag&&c.didMove&&t){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,t.useEffect)((function(){u.current=e})),(0,t.useEffect)((function(){return i.current&&i.current.addEventListener("d",y,{once:!0}),C(e.onOpen)&&e.onOpen((0,t.isValidElement)(e.children)&&e.children.props),function(){var e=u.current;C(e.onClose)&&e.onClose((0,t.isValidElement)(e.children)&&e.children.props)}}),[]),(0,t.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||h(),window.addEventListener("focus",y),window.addEventListener("blur",h)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",h))}}),[e.pauseOnFocusLoss]);var O={onMouseDown:g,onTouchStart:g,onMouseUp:b,onTouchEnd:b};return d&&m&&(O.onMouseEnter=h,O.onMouseLeave=y),v&&(O.onClick=function(e){f&&f(e),c.canCloseOnClick&&p()}),{playToast:y,pauseToast:h,isRunning:o,preventExitTransition:s,toastRef:i,eventHandlers:O}}(e),r=a.isRunning,s=a.preventExitTransition,l=a.toastRef,i=a.eventHandlers,c=e.closeButton,u=e.children,d=e.autoClose,m=e.onClick,p=e.type,f=e.hideProgressBar,v=e.closeToast,g=e.transition,b=e.position,h=e.className,E=e.style,_=e.bodyClassName,O=e.bodyStyle,w=e.progressClassName,N=e.progressStyle,k=e.updateId,x=e.role,I=e.progress,P=e.rtl,L=e.toastId,R=e.deleteToast,B=e.isIn,S=e.isLoading,j=e.icon,D=e.theme,F=y("Toastify__toast","Toastify__toast-theme--"+D,"Toastify__toast--"+p,((n={})["Toastify__toast--rtl"]=P,n)),U=C(h)?h({rtl:P,position:b,type:p,defaultClassName:F}):y(F,h),V=!!I,q=H[p],W={theme:D,type:p},G=q&&q(W);return!1===j?G=void 0:C(j)?G=j(W):(0,t.isValidElement)(j)?G=(0,t.cloneElement)(j,W):T(j)?G=j:S&&(G=H.spinner()),(0,t.createElement)(g,{isIn:B,done:R,position:b,preventExitTransition:s,nodeRef:l},(0,t.createElement)("div",Object.assign({id:L,onClick:m,className:U},i,{style:E,ref:l}),(0,t.createElement)("div",Object.assign({},B&&{role:x},{className:C(_)?_({type:p}):y("Toastify__toast-body",_),style:O}),G&&(0,t.createElement)("div",{className:y("Toastify__toast-icon",(o={},o["Toastify--animate-icon Toastify__zoom-enter"]=!S,o))},G),(0,t.createElement)("div",null,u)),function(e){if(e){var n={closeToast:v,type:p,theme:D};return C(e)?e(n):(0,t.isValidElement)(e)?(0,t.cloneElement)(e,n):void 0}}(c),(d||V)&&(0,t.createElement)(z,Object.assign({},k&&!V?{key:"pb-"+k}:{},{rtl:P,theme:D,delay:d,isRunning:r,isIn:B,closeToast:v,hide:f,type:p,style:N,className:w,controlledProgress:V,progress:I}))))},V=function(e){var n=function(e){var n=(0,t.useReducer)((function(e){return e+1}),0)[1],o=(0,t.useState)([]),a=o[0],r=o[1],s=(0,t.useRef)(null),l=(0,t.useRef)(new Map).current,i=function(e){return-1!==a.indexOf(e)},c=(0,t.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:i,getToast:function(e){return l.get(e)}}).current;function u(e){var t=e.containerId;!c.props.limit||t&&c.containerId!==t||(c.count-=c.queue.length,c.queue=[])}function d(e){r((function(t){return k(e)?t.filter((function(t){return t!==e})):[]}))}function m(){var e=c.queue.shift();f(e.toastContent,e.toastProps,e.staleId)}function p(e,o){var a=o.delay,r=o.staleId,i=_(o,S);if(I(e)&&!function(e){return!s.current||c.props.enableMultiContainer&&e.containerId!==c.props.containerId||l.has(e.toastId)&&null==e.updateId}(i)){var u=i.toastId,p=i.updateId,v=i.data,g=c.props,b=function(){return d(u)},y=null==p;y&&c.count++;var h,E,x={toastId:u,updateId:p,isLoading:i.isLoading,theme:i.theme||g.theme,icon:null!=i.icon?i.icon:g.icon,isIn:!1,key:i.key||c.toastKey++,type:i.type,closeToast:b,closeButton:i.closeButton,rtl:g.rtl,position:i.position||g.position,transition:i.transition||g.transition,className:N(i.className||g.toastClassName),bodyClassName:N(i.bodyClassName||g.bodyClassName),style:i.style||g.toastStyle,bodyStyle:i.bodyStyle||g.bodyStyle,onClick:i.onClick||g.onClick,pauseOnHover:w(i.pauseOnHover)?i.pauseOnHover:g.pauseOnHover,pauseOnFocusLoss:w(i.pauseOnFocusLoss)?i.pauseOnFocusLoss:g.pauseOnFocusLoss,draggable:w(i.draggable)?i.draggable:g.draggable,draggablePercent:i.draggablePercent||g.draggablePercent,draggableDirection:i.draggableDirection||g.draggableDirection,closeOnClick:w(i.closeOnClick)?i.closeOnClick:g.closeOnClick,progressClassName:N(i.progressClassName||g.progressClassName),progressStyle:i.progressStyle||g.progressStyle,autoClose:!i.isLoading&&(h=i.autoClose,E=g.autoClose,!1===h||O(h)&&h>0?h:E),hideProgressBar:w(i.hideProgressBar)?i.hideProgressBar:g.hideProgressBar,progress:i.progress,role:i.role||g.role,deleteToast:function(){l.delete(u);var e=c.queue.length;if(c.count=k(u)?c.count-1:c.count-c.displayedToast,c.count<0&&(c.count=0),e>0){var t=k(u)?1:c.props.limit;if(1===e||1===t)c.displayedToast++,m();else{var o=t>e?e:t;c.displayedToast=o;for(var a=0;a<o;a++)m()}}else n()}};C(i.onOpen)&&(x.onOpen=i.onOpen),C(i.onClose)&&(x.onClose=i.onClose),x.closeButton=g.closeButton,!1===i.closeButton||I(i.closeButton)?x.closeButton=i.closeButton:!0===i.closeButton&&(x.closeButton=!I(g.closeButton)||g.closeButton);var P=e;(0,t.isValidElement)(e)&&!T(e.type)?P=(0,t.cloneElement)(e,{closeToast:b,toastProps:x,data:v}):C(e)&&(P=e({closeToast:b,toastProps:x,data:v})),g.limit&&g.limit>0&&c.count>g.limit&&y?c.queue.push({toastContent:P,toastProps:x,staleId:r}):O(a)&&a>0?setTimeout((function(){f(P,x,r)}),a):f(P,x,r)}}function f(e,t,n){var o=t.toastId;n&&l.delete(n),l.set(o,{content:e,props:t}),r((function(e){return[].concat(e,[o]).filter((function(e){return e!==n}))}))}return(0,t.useEffect)((function(){return c.containerId=e.containerId,B.cancelEmit(3).on(0,p).on(1,(function(e){return s.current&&d(e)})).on(5,u).emit(2,c),function(){return B.emit(3,c)}}),[]),(0,t.useEffect)((function(){c.isToastActive=i,c.displayedToast=a.length,B.emit(4,a.length,e.containerId)}),[a]),(0,t.useEffect)((function(){c.props=e})),{getToastToRender:function(t){var n=new Map,o=Array.from(l.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:s,isToastActive:i}}(e),o=n.getToastToRender,a=n.containerRef,r=n.isToastActive,s=e.className,l=e.style,i=e.rtl,c=e.containerId;function u(e){var t,n=y("Toastify__toast-container","Toastify__toast-container--"+e,((t={})["Toastify__toast-container--rtl"]=i,t));return C(s)?s({position:e,rtl:i,defaultClassName:n}):y(n,N(s))}return(0,t.createElement)("div",{ref:a,className:"Toastify",id:c},o((function(e,n){var o=n.length?E({},l):E({},l,{pointerEvents:"none"});return(0,t.createElement)("div",{className:u(e),style:o,key:"container-"+e},n.map((function(e){var n=e.content,o=e.props;return(0,t.createElement)(U,Object.assign({},o,{isIn:r(o.toastId),key:"toast-"+o.key,closeButton:!0===o.closeButton?j:o.closeButton}),n)})))})))};V.defaultProps={position:P.TOP_RIGHT,transition:R({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:j,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var q,W,G,Q=new Map,$=[],Y=!1;function X(){return Math.random().toString(36).substring(2,9)}function K(e){return e&&(T(e.toastId)||O(e.toastId))?e.toastId:X()}function J(e,n){return Q.size>0?B.emit(0,e,n):($.push({content:e,options:n}),Y&&x&&(Y=!1,W=document.createElement("div"),document.body.appendChild(W),(0,h.render)((0,t.createElement)(V,Object.assign({},G)),W))),n.toastId}function Z(e,t){return E({},t,{type:t&&t.type||e,toastId:K(t)})}function ee(e){return function(t,n){return J(t,Z(e,n))}}function te(e,t){return J(e,Z(L.DEFAULT,t))}te.loading=function(e,t){return J(e,Z(L.DEFAULT,E({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},te.promise=function(e,t,n){var o,a=t.pending,r=t.error,s=t.success;a&&(o=T(a)?te.loading(a,n):te.loading(a.render,E({},n,a)));var l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},i=function(e,t,a){if(null!=t){var r=E({type:e},l,n,{data:a}),s=T(t)?{render:t}:t;return o?te.update(o,E({},r,s)):te(s.render,E({},r,s)),a}te.dismiss(o)},c=C(e)?e():e;return c.then((function(e){return i("success",s,e)})).catch((function(e){return i("error",r,e)})),c},te.success=ee(L.SUCCESS),te.info=ee(L.INFO),te.error=ee(L.ERROR),te.warning=ee(L.WARNING),te.warn=te.warning,te.dark=function(e,t){return J(e,Z(L.DEFAULT,E({theme:"dark"},t)))},te.dismiss=function(e){return B.emit(1,e)},te.clearWaitingQueue=function(e){return void 0===e&&(e={}),B.emit(5,e)},te.isActive=function(e){var t=!1;return Q.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},te.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=Q.get(n||q);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,a=n.content,r=E({},o,t,{toastId:t.toastId||e,updateId:X()});r.toastId!==e&&(r.staleId=e);var s=r.render||a;delete r.render,J(s,r)}}),0)},te.done=function(e){te.update(e,{progress:1})},te.onChange=function(e){return C(e)&&B.on(4,e),function(){C(e)&&B.off(4,e)}},te.configure=function(e){void 0===e&&(e={}),Y=!0,G=e},te.POSITION=P,te.TYPE=L,B.on(2,(function(e){q=e.containerId||e,Q.set(q,e),$.forEach((function(e){B.emit(0,e.content,e.options)})),$=[]})).on(3,(function(e){Q.delete(e.containerId||e),0===Q.size&&B.off(0).off(1).off(5),x&&W&&document.body.removeChild(W)}));const ne=t=>(0,e.createElement)(V,g({position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0},t)),oe={position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0},ae=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;const t=null!=e?e:"更新しました。";te.success(t,oe)},re=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;const t=null!=e?e:"問題が発生しました。";te.error(t,oe)},se={image:"",imageId:0,name:"",enable:!0,index:0},le=e=>[...e].sort(((e,t)=>e.index-t.index));var ie=function(t){let{icon:n,size:o=24,...a}=t;return(0,e.cloneElement)(n,{width:o,height:o,...a})},ce=window.wp.primitives,ue=(0,e.createElement)(ce.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(ce.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})),de=(0,e.createElement)(ce.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(ce.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})),me=(0,e.createElement)(ce.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(ce.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})),pe=window.wp.i18n;const fe={category:{common:"ystdb",beta:"ystdb_beta",deprecated:"ystdb_deprecated"},color:{iconForeground:"#4190be",iconDeprecatedForeground:"#be4141"},button:{newTabRel:"noreferrer noopener",borderRadiusMin:0,borderRadiusMax:50,borderRadiusInitialPosition:4,paddingTypes:[{value:"is-small",label:(0,pe.__)("小","ystandard-blocks")},{value:"",label:(0,pe.__)("中","ystandard-blocks")},{value:"is-large",label:(0,pe.__)("大","ystandard-blocks")}],animationTypes:[{label:(0,pe.__)("なし","ystandard-blocks"),value:"none"},{label:(0,pe.__)("キラキラ","ystandard-blocks"),value:"shine"}]},icon:{size:[{value:"is-small",label:(0,pe.__)("小","ystandard-blocks")},{value:"",label:(0,pe.__)("中","ystandard-blocks")},{value:"is-large",label:(0,pe.__)("大","ystandard-blocks")}]},component:{defaultAvatar:{url:"https://www.gravatar.com/avatar/000000000000000000000000000000?s=128&r=g&d=mp"},fontWeight:[{value:"",label:(0,pe._x)("指定無し","component-config","ystandard-blocks")},{value:"normal",label:(0,pe._x)("通常(normal)","component-config","ystandard-blocks")},{value:"bold",label:(0,pe._x)("太字(bold)","component-config","ystandard-blocks")},{value:"100",label:(0,pe._x)("100","component-config","ystandard-blocks")},{value:"200",label:(0,pe._x)("200","component-config","ystandard-blocks")},{value:"300",label:(0,pe._x)("300","component-config","ystandard-blocks")},{value:"400",label:(0,pe._x)("400","component-config","ystandard-blocks")},{value:"500",label:(0,pe._x)("500","component-config","ystandard-blocks")},{value:"600",label:(0,pe._x)("600","component-config","ystandard-blocks")},{value:"700",label:(0,pe._x)("700","component-config","ystandard-blocks")},{value:"800",label:(0,pe._x)("800","component-config","ystandard-blocks")},{value:"900",label:(0,pe._x)("900","component-config","ystandard-blocks")}],fontUnit:[{value:"px",label:"px"},{value:"em",label:"em"},{value:"rem",label:"rem"},{value:"%",label:"%"}],fontStyle:[{value:"",label:(0,pe._x)("指定無し","component-config","ystandard-blocks")},{value:"italic",label:(0,pe._x)("イタリック体","component-config","ystandard-blocks")}],borderStyles:[{value:"solid",label:(0,pe._x)("直線","component-config","ystandard-blocks")},{value:"dotted",label:(0,pe._x)("点線","component-config","ystandard-blocks")},{value:"dashed",label:(0,pe._x)("破線","component-config","ystandard-blocks")},{value:"double",label:(0,pe._x)("二重線","component-config","ystandard-blocks")}]}},ve=e=>fe.component[e];var ge=n(184),be=n.n(ge);const ye=t=>{const n=be()("ystdb-component-admin-menu-button","is-update",t.className);return(0,e.createElement)(u.Button,g({className:n},t),t.children)},he=t=>{const n=be()("ystdb-component-admin-menu-button","is-cancel",t.className);return(0,e.createElement)(u.Button,g({className:n},t),t.children)},Ee=t=>{const n=be()("ystdb-component-admin-menu-button","is-delete",t.className);return(0,e.createElement)(u.Button,g({className:n},t),t.children)};var _e=t=>{const{index:n,item:o}=t,{balloons:a,setBalloons:r,isUpdating:s,updateOption:l}=(0,e.useContext)(Me),i=null!=o&&o.image?o.image:ve("defaultAvatar").url,[c,d]=(0,e.useState)(!1),m=()=>d(!1);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{className:"ystdb-menu-balloon__item-delete"},(0,e.createElement)(u.Button,{className:"ystdb-menu-balloon__item-delete-button",onClick:()=>d(!0),disabled:s},(0,e.createElement)(ie,{icon:me})),c&&(0,e.createElement)(u.Modal,{title:"吹き出し設定を削除しますか？",onRequestClose:m,shouldCloseOnClickOutside:!1,isDismissible:!1},(0,e.createElement)("div",{className:"ystdb-menu-balloon__delete-modal"},(0,e.createElement)("figure",{className:"ystdb-menu-balloon__delete-modal-image"},(0,e.createElement)("img",{src:i,alt:""})),(0,e.createElement)("p",{className:"ystdb-menu-balloon__delete-modal-name"},null==o?void 0:o.name),(0,e.createElement)("div",{className:"ystdb-components-section"},(0,e.createElement)("div",{className:"ystdb-menu-component-columns"},(0,e.createElement)("div",{className:"ystdb-menu-component-columns__item"},(0,e.createElement)(Ee,{isPrimary:!0,onClick:()=>{(()=>{let e=[...a];e.splice(n,1),e=e.map(((e,t)=>({...e,newIndex:t}))),r(e),l(e,{success:"吹き出し設定を削除しました。",error:"吹き出設定の削除に失敗しました。"})})(),m()},disabled:s},"削除")),(0,e.createElement)("div",{className:"ystdb-menu-component-columns__item"},(0,e.createElement)(he,{isSecondary:!0,onClick:m},"キャンセル"))))))))},Oe=window.wp.mediaUtils,we=t=>{const{onSelect:n,onClickAvatarDelete:o,type:a,imageId:r,imageUrl:s,name:l}=t,i=ve("defaultAvatar").url;return(0,e.createElement)("figure",{className:"ystdb-menu-balloon__avatar-media-upload"},(0,e.createElement)(Oe.MediaUpload,{onSelect:e=>{n(e)},type:a,value:r,render:t=>{let{open:n}=t;return s&&i!==s?(0,e.createElement)(u.Button,{className:"ystdb-menu-balloon__avatar-media-upload-select",onClick:o},(0,e.createElement)("img",{src:s,alt:l}),(0,e.createElement)("span",{className:"ystdb-menu-balloon__avatar-media-upload-select-hover"},"画像を削除")):(0,e.createElement)(u.Button,{className:"ystdb-menu-balloon__avatar-media-upload-select",onClick:n},(0,e.createElement)("img",{src:i,alt:""}),(0,e.createElement)("span",{className:"ystdb-menu-balloon__avatar-media-upload-select-hover"},"画像を選択"))}}))},Te=t=>{const{index:n}=t,{balloons:o,setBalloons:a}=(0,e.useContext)(Me),r=o.length,s=o[n],l=`${s.image}-${s.name}-up`,i=`${s.image}-${s.name}-down`,c=e=>{const t=[...o];t[n]={...t[n],...e},a(t)};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{className:be()("ystdb-menu-balloon__item",{"is-disable":!s.enable})},(0,e.createElement)("div",{className:"ystdb-menu-balloon__item-container"},(0,e.createElement)("div",{className:"ystdb-menu-balloon__item-sort"},(0,e.createElement)(u.Button,{key:l,className:"ystdb-menu-balloon__item-sort-button",onClick:()=>{if(0>=n)return;const e=[...o];e[n].index=n-1,e[n-1].index=n,a(le(e))}},(0,e.createElement)(ie,{icon:ue})),(0,e.createElement)(u.Button,{key:i,className:"ystdb-menu-balloon__item-sort-button",onClick:()=>{if(r<=n+1)return;const e=[...o];e[n].index=n+1,e[n+1].index=n,a(le(e))}},(0,e.createElement)(ie,{icon:de}))),(0,e.createElement)("div",{className:"ystdb-menu-balloon__item-content"},(0,e.createElement)("div",{className:"ystdb-menu-balloon__item-image"},(0,e.createElement)(we,{onSelect:e=>{c({image:e.url,imageId:e.id})},onClickAvatarDelete:()=>{c({image:"",imageId:0})},type:["image"],imageId:s.imageId,imageUrl:s.image,name:s.name})),(0,e.createElement)("div",{className:"ystdb-menu-balloon__item-name"},(0,e.createElement)(u.TextControl,{value:s.name,onChange:e=>{c({name:e})}})),(0,e.createElement)("div",{className:"ystdb-menu-balloon__item-enable"},(0,e.createElement)(u.ToggleControl,{checked:!0===(d=void 0===(null==s?void 0:s.enable)||s.enable)||"true"===d||1===d||"1"===d,onChange:e=>{c({enable:!0===e?1:0})}})),(0,e.createElement)(_e,{index:n,item:s})))));var d},Ce=()=>(0,e.createElement)("div",{className:"ystdb-menu-balloon__list-header"},(0,e.createElement)("div",{className:"ystdb-menu-balloon__item"},(0,e.createElement)("div",{className:"ystdb-menu-balloon__item-container"},(0,e.createElement)("div",{className:"ystdb-menu-balloon__item-sort"}," "),(0,e.createElement)("div",{className:"ystdb-menu-balloon__item-content"},(0,e.createElement)("div",{className:"ystdb-menu-balloon__item-image"},"画像"),(0,e.createElement)("div",{className:"ystdb-menu-balloon__item-name"},"名前"),(0,e.createElement)("div",{className:"ystdb-menu-balloon__item-enable"},"有効/無効"))))),Ne=(0,e.createElement)(ce.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,e.createElement)(ce.Path,{d:"M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"}));const ke=t=>{const{children:n,type:o,isShow:a}=t,r=be()("ystdb-component-message",`is-${o}`,{"is-hide":!1===a});return(0,e.createElement)("div",{className:r},n)},xe=t=>{const{children:n}=t;return(0,e.createElement)(ke,g({type:"error"},t),n)};var Ie=()=>{const{balloons:t,setBalloons:n,updateOption:o,isUpdating:a}=(0,e.useContext)(Me),[r,s]=(0,e.useState)(!1),l={image:"",imageId:0,name:""},[i,c]=(0,e.useState)(l),[d,m]=(0,e.useState)(!1),p=()=>s(!1);return(0,e.createElement)("div",{className:"ystdb-menu-balloon__add-item"},(0,e.createElement)(u.Button,{isSecondary:!0,onClick:()=>s(!0),disabled:a},(0,e.createElement)(ie,{className:"ystdb-button-icon",icon:Ne})," ","追加"),r&&(0,e.createElement)(u.Modal,{title:"吹き出し設定の追加",onRequestClose:p,shouldCloseOnClickOutside:!1,isDismissible:!1},(0,e.createElement)("div",{className:"ystdb-menu-balloon__add-modal"},(0,e.createElement)("div",{className:"ystdb-menu-balloon__add-modal-image"},(0,e.createElement)(we,{onSelect:e=>{c((t=>({...t,image:e.url,imageId:e.id}))),m(!1)},onClickAvatarDelete:()=>{c((e=>({...e,image:"",imageId:0})))},type:["image"],imageId:i.imageId,imageUrl:i.image,name:i.name})),(0,e.createElement)("div",{className:"ystdb-menu-balloon__add-modal-name"},(0,e.createElement)(u.TextControl,{value:i.name,onChange:e=>{c((t=>({...t,name:e}))),m(!1)}})),(0,e.createElement)(xe,{isShow:d},"画像 または 名前を入力してください。"),(0,e.createElement)("div",{className:"ystdb-components-section"},(0,e.createElement)("div",{className:"ystdb-menu-component-columns"},(0,e.createElement)("div",{className:"ystdb-menu-component-columns__item"},(0,e.createElement)(ye,{isPrimary:!0,onClick:()=>{(i.image||i.name||(m(!0),0))&&(t.push({...se,...i,index:t.length-1}),n([...t]),o([...t]),c(l),p())},disabled:d},"追加")),(0,e.createElement)("div",{className:"ystdb-menu-component-columns__item"},(0,e.createElement)(he,{isSecondary:!0,onClick:p},"キャンセル")))))))},Pe=()=>(0,e.createElement)("div",{className:"ystdb-menu-balloon__item ystdb-menu-balloon__start"},(0,e.createElement)("p",null,"「追加」ボタンをクリックして吹き出し設定を追加しましょう"),(0,e.createElement)("div",{className:"ystdb-menu-balloon__start-button"},(0,e.createElement)(Ie,null)));function Le(){return Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Le.apply(this,arguments)}var Re=(0,t.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,s=void 0===r?24:r,l=function(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["color","size"]);return a().createElement("svg",Le({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a().createElement("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),a().createElement("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}))}));Re.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},Re.displayName="Book";var Be=Re,Se=t=>{const{url:n,target:o,text:a,topRight:r}=t,s=a||"マニュアルを見る",l=o||"_blank";return(0,e.createElement)("div",{className:be()("ystdb-component-manual-link",{"is-top-right":r})},(0,e.createElement)("a",{href:n,target:l},(0,e.createElement)("span",{className:"ystdb-component-manual-link__icon"},(0,e.createElement)(Be,{size:12})),(0,e.createElement)("span",{className:"ystdb-component-manual-link__text"},s)))};const Me=(0,e.createContext)();(0,e.render)((0,e.createElement)((()=>{const t=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(!window.ystdbAdminMenuOptions)return n;if(!window.ystdbAdminMenuOptions.hasOwnProperty("options"))return n;const o=window.ystdbAdminMenuOptions.options;return o.hasOwnProperty(e)?t?o[e].hasOwnProperty(t)?o[e][t]:n:o[e]:n}("balloon",!1,[]),[n,o]=(0,e.useState)(le(t.map(((e,t)=>e?(e.hasOwnProperty("index")||(e.index=t),e.hasOwnProperty("imageId")||(e.imageId=0),e.hasOwnProperty("enable")||(e.enable=!0),e):e)))),[a,r]=(0,e.useState)(!1),s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;a||(r(!0),m()({path:v("update"),method:"POST",data:e}).then((e=>{f(e.status)?ae(null==t?void 0:t.success):(console.error("設定の更新に失敗しました。"),console.log(e),re(null==t?void 0:t.error))})).catch((e=>{console.error("エラーが発生しました。"),console.log(e),re(null==t?void 0:t.error)})),setTimeout((()=>{r(!1)}),500))};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{className:"ystdb-menu__wrap "},(0,e.createElement)(Se,{url:"https://wp-ystandard.com/manual/ystdb-balloon-avatar-setting/",topRight:!0}),(0,e.createElement)("h1",{className:"ystdb-menu__content-title"},"吹き出し登録"),(0,e.createElement)(ne,null),(0,e.createElement)("div",{className:"ystdb-menu-balloon"},(0,e.createElement)(Me.Provider,{value:{balloons:n,setBalloons:o,isUpdating:a,setIsUpdating:r,updateOption:s}},(0,e.createElement)("div",{className:"ystdb-menu-balloon__list"},0<n.length&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(Ce,null),n.map(((t,n)=>(0,e.createElement)(Te,{key:n,index:n})))),0>=n.length&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(Pe,null))),(0,e.createElement)("div",{className:"ystdb-menu-balloon__update"},(0,e.createElement)(u.Button,{isPrimary:!0,onClick:()=>{s(n)},disabled:a},(0,e.createElement)(c,{className:"ystdb-button-icon",style:{fill:"none"}})," ","設定を保存"),(0,e.createElement)(Ie,null))))))}),null),document.getElementById(p("pageId")))}()}();