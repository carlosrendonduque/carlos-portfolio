(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))c(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function o(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(u){if(u.ep)return;u.ep=!0;const d=o(u);fetch(u.href,d)}})();function Gg(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var gc={exports:{}},rl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh;function Vg(){if(Xh)return rl;Xh=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function o(c,u,d){var p=null;if(d!==void 0&&(p=""+d),u.key!==void 0&&(p=""+u.key),"key"in u){d={};for(var y in u)y!=="key"&&(d[y]=u[y])}else d=u;return u=d.ref,{$$typeof:a,type:c,key:p,ref:u!==void 0?u:null,props:d}}return rl.Fragment=s,rl.jsx=o,rl.jsxs=o,rl}var Qh;function Xg(){return Qh||(Qh=1,gc.exports=Vg()),gc.exports}var h=Xg(),yc={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zh;function Qg(){if(Zh)return re;Zh=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),E=Symbol.iterator;function N(S){return S===null||typeof S!="object"?null:(S=E&&S[E]||S["@@iterator"],typeof S=="function"?S:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,V={};function I(S,M,B){this.props=S,this.context=M,this.refs=V,this.updater=B||U}I.prototype.isReactComponent={},I.prototype.setState=function(S,M){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,M,"setState")},I.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function le(){}le.prototype=I.prototype;function J(S,M,B){this.props=S,this.context=M,this.refs=V,this.updater=B||U}var W=J.prototype=new le;W.constructor=J,L(W,I.prototype),W.isPureReactComponent=!0;var X=Array.isArray,Y={H:null,A:null,T:null,S:null,V:null},Q=Object.prototype.hasOwnProperty;function k(S,M,B,q,K,fe){return B=fe.ref,{$$typeof:a,type:S,key:M,ref:B!==void 0?B:null,props:fe}}function _e(S,M){return k(S.type,M,void 0,void 0,void 0,S.props)}function Ne(S){return typeof S=="object"&&S!==null&&S.$$typeof===a}function Qe(S){var M={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(B){return M[B]})}var vt=/\/+/g;function Ye(S,M){return typeof S=="object"&&S!==null&&S.key!=null?Qe(""+S.key):M.toString(36)}function ke(){}function Le(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(ke,ke):(S.status="pending",S.then(function(M){S.status==="pending"&&(S.status="fulfilled",S.value=M)},function(M){S.status==="pending"&&(S.status="rejected",S.reason=M)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function He(S,M,B,q,K){var fe=typeof S;(fe==="undefined"||fe==="boolean")&&(S=null);var ee=!1;if(S===null)ee=!0;else switch(fe){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(S.$$typeof){case a:case s:ee=!0;break;case x:return ee=S._init,He(ee(S._payload),M,B,q,K)}}if(ee)return K=K(S),ee=q===""?"."+Ye(S,0):q,X(K)?(B="",ee!=null&&(B=ee.replace(vt,"$&/")+"/"),He(K,M,B,"",function(lt){return lt})):K!=null&&(Ne(K)&&(K=_e(K,B+(K.key==null||S&&S.key===K.key?"":(""+K.key).replace(vt,"$&/")+"/")+ee)),M.push(K)),1;ee=0;var Je=q===""?".":q+":";if(X(S))for(var be=0;be<S.length;be++)q=S[be],fe=Je+Ye(q,be),ee+=He(q,M,B,fe,K);else if(be=N(S),typeof be=="function")for(S=be.call(S),be=0;!(q=S.next()).done;)q=q.value,fe=Je+Ye(q,be++),ee+=He(q,M,B,fe,K);else if(fe==="object"){if(typeof S.then=="function")return He(Le(S),M,B,q,K);throw M=String(S),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return ee}function C(S,M,B){if(S==null)return S;var q=[],K=0;return He(S,q,"","",function(fe){return M.call(B,fe,K++)}),q}function H(S){if(S._status===-1){var M=S._result;M=M(),M.then(function(B){(S._status===0||S._status===-1)&&(S._status=1,S._result=B)},function(B){(S._status===0||S._status===-1)&&(S._status=2,S._result=B)}),S._status===-1&&(S._status=0,S._result=M)}if(S._status===1)return S._result.default;throw S._result}var Z=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function se(){}return re.Children={map:C,forEach:function(S,M,B){C(S,function(){M.apply(this,arguments)},B)},count:function(S){var M=0;return C(S,function(){M++}),M},toArray:function(S){return C(S,function(M){return M})||[]},only:function(S){if(!Ne(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},re.Component=I,re.Fragment=o,re.Profiler=u,re.PureComponent=J,re.StrictMode=c,re.Suspense=v,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,re.__COMPILER_RUNTIME={__proto__:null,c:function(S){return Y.H.useMemoCache(S)}},re.cache=function(S){return function(){return S.apply(null,arguments)}},re.cloneElement=function(S,M,B){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var q=L({},S.props),K=S.key,fe=void 0;if(M!=null)for(ee in M.ref!==void 0&&(fe=void 0),M.key!==void 0&&(K=""+M.key),M)!Q.call(M,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&M.ref===void 0||(q[ee]=M[ee]);var ee=arguments.length-2;if(ee===1)q.children=B;else if(1<ee){for(var Je=Array(ee),be=0;be<ee;be++)Je[be]=arguments[be+2];q.children=Je}return k(S.type,K,void 0,void 0,fe,q)},re.createContext=function(S){return S={$$typeof:p,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:d,_context:S},S},re.createElement=function(S,M,B){var q,K={},fe=null;if(M!=null)for(q in M.key!==void 0&&(fe=""+M.key),M)Q.call(M,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(K[q]=M[q]);var ee=arguments.length-2;if(ee===1)K.children=B;else if(1<ee){for(var Je=Array(ee),be=0;be<ee;be++)Je[be]=arguments[be+2];K.children=Je}if(S&&S.defaultProps)for(q in ee=S.defaultProps,ee)K[q]===void 0&&(K[q]=ee[q]);return k(S,fe,void 0,void 0,null,K)},re.createRef=function(){return{current:null}},re.forwardRef=function(S){return{$$typeof:y,render:S}},re.isValidElement=Ne,re.lazy=function(S){return{$$typeof:x,_payload:{_status:-1,_result:S},_init:H}},re.memo=function(S,M){return{$$typeof:g,type:S,compare:M===void 0?null:M}},re.startTransition=function(S){var M=Y.T,B={};Y.T=B;try{var q=S(),K=Y.S;K!==null&&K(B,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(se,Z)}catch(fe){Z(fe)}finally{Y.T=M}},re.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},re.use=function(S){return Y.H.use(S)},re.useActionState=function(S,M,B){return Y.H.useActionState(S,M,B)},re.useCallback=function(S,M){return Y.H.useCallback(S,M)},re.useContext=function(S){return Y.H.useContext(S)},re.useDebugValue=function(){},re.useDeferredValue=function(S,M){return Y.H.useDeferredValue(S,M)},re.useEffect=function(S,M,B){var q=Y.H;if(typeof B=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return q.useEffect(S,M)},re.useId=function(){return Y.H.useId()},re.useImperativeHandle=function(S,M,B){return Y.H.useImperativeHandle(S,M,B)},re.useInsertionEffect=function(S,M){return Y.H.useInsertionEffect(S,M)},re.useLayoutEffect=function(S,M){return Y.H.useLayoutEffect(S,M)},re.useMemo=function(S,M){return Y.H.useMemo(S,M)},re.useOptimistic=function(S,M){return Y.H.useOptimistic(S,M)},re.useReducer=function(S,M,B){return Y.H.useReducer(S,M,B)},re.useRef=function(S){return Y.H.useRef(S)},re.useState=function(S){return Y.H.useState(S)},re.useSyncExternalStore=function(S,M,B){return Y.H.useSyncExternalStore(S,M,B)},re.useTransition=function(){return Y.H.useTransition()},re.version="19.1.0",re}var Kh;function Vc(){return Kh||(Kh=1,yc.exports=Qg()),yc.exports}var ae=Vc();const Bt=Gg(ae);var vc={exports:{}},ol={},bc={exports:{}},xc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function Zg(){return Jh||(Jh=1,function(a){function s(C,H){var Z=C.length;C.push(H);e:for(;0<Z;){var se=Z-1>>>1,S=C[se];if(0<u(S,H))C[se]=H,C[Z]=S,Z=se;else break e}}function o(C){return C.length===0?null:C[0]}function c(C){if(C.length===0)return null;var H=C[0],Z=C.pop();if(Z!==H){C[0]=Z;e:for(var se=0,S=C.length,M=S>>>1;se<M;){var B=2*(se+1)-1,q=C[B],K=B+1,fe=C[K];if(0>u(q,Z))K<S&&0>u(fe,q)?(C[se]=fe,C[K]=Z,se=K):(C[se]=q,C[B]=Z,se=B);else if(K<S&&0>u(fe,Z))C[se]=fe,C[K]=Z,se=K;else break e}}return H}function u(C,H){var Z=C.sortIndex-H.sortIndex;return Z!==0?Z:C.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var p=Date,y=p.now();a.unstable_now=function(){return p.now()-y}}var v=[],g=[],x=1,E=null,N=3,U=!1,L=!1,V=!1,I=!1,le=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function X(C){for(var H=o(g);H!==null;){if(H.callback===null)c(g);else if(H.startTime<=C)c(g),H.sortIndex=H.expirationTime,s(v,H);else break;H=o(g)}}function Y(C){if(V=!1,X(C),!L)if(o(v)!==null)L=!0,Q||(Q=!0,Ye());else{var H=o(g);H!==null&&He(Y,H.startTime-C)}}var Q=!1,k=-1,_e=5,Ne=-1;function Qe(){return I?!0:!(a.unstable_now()-Ne<_e)}function vt(){if(I=!1,Q){var C=a.unstable_now();Ne=C;var H=!0;try{e:{L=!1,V&&(V=!1,J(k),k=-1),U=!0;var Z=N;try{t:{for(X(C),E=o(v);E!==null&&!(E.expirationTime>C&&Qe());){var se=E.callback;if(typeof se=="function"){E.callback=null,N=E.priorityLevel;var S=se(E.expirationTime<=C);if(C=a.unstable_now(),typeof S=="function"){E.callback=S,X(C),H=!0;break t}E===o(v)&&c(v),X(C)}else c(v);E=o(v)}if(E!==null)H=!0;else{var M=o(g);M!==null&&He(Y,M.startTime-C),H=!1}}break e}finally{E=null,N=Z,U=!1}H=void 0}}finally{H?Ye():Q=!1}}}var Ye;if(typeof W=="function")Ye=function(){W(vt)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,Le=ke.port2;ke.port1.onmessage=vt,Ye=function(){Le.postMessage(null)}}else Ye=function(){le(vt,0)};function He(C,H){k=le(function(){C(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(C){C.callback=null},a.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<C?Math.floor(1e3/C):5},a.unstable_getCurrentPriorityLevel=function(){return N},a.unstable_next=function(C){switch(N){case 1:case 2:case 3:var H=3;break;default:H=N}var Z=N;N=H;try{return C()}finally{N=Z}},a.unstable_requestPaint=function(){I=!0},a.unstable_runWithPriority=function(C,H){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var Z=N;N=C;try{return H()}finally{N=Z}},a.unstable_scheduleCallback=function(C,H,Z){var se=a.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?se+Z:se):Z=se,C){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=Z+S,C={id:x++,callback:H,priorityLevel:C,startTime:Z,expirationTime:S,sortIndex:-1},Z>se?(C.sortIndex=Z,s(g,C),o(v)===null&&C===o(g)&&(V?(J(k),k=-1):V=!0,He(Y,Z-se))):(C.sortIndex=S,s(v,C),L||U||(L=!0,Q||(Q=!0,Ye()))),C},a.unstable_shouldYield=Qe,a.unstable_wrapCallback=function(C){var H=N;return function(){var Z=N;N=H;try{return C.apply(this,arguments)}finally{N=Z}}}}(xc)),xc}var Fh;function Kg(){return Fh||(Fh=1,bc.exports=Zg()),bc.exports}var Sc={exports:{}},ot={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function Jg(){if(Wh)return ot;Wh=1;var a=Vc();function s(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)g+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var c={d:{f:o,r:function(){throw Error(s(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(v,g,x){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:E==null?null:""+E,children:v,containerInfo:g,implementation:x}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ot.createPortal=function(v,g){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(s(299));return d(v,g,null,x)},ot.flushSync=function(v){var g=p.T,x=c.p;try{if(p.T=null,c.p=2,v)return v()}finally{p.T=g,c.p=x,c.d.f()}},ot.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(v,g))},ot.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},ot.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var x=g.as,E=y(x,g.crossOrigin),N=typeof g.integrity=="string"?g.integrity:void 0,U=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;x==="style"?c.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:N,fetchPriority:U}):x==="script"&&c.d.X(v,{crossOrigin:E,integrity:N,fetchPriority:U,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ot.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var x=y(g.as,g.crossOrigin);c.d.M(v,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(v)},ot.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var x=g.as,E=y(x,g.crossOrigin);c.d.L(v,x,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ot.preloadModule=function(v,g){if(typeof v=="string")if(g){var x=y(g.as,g.crossOrigin);c.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(v)},ot.requestFormReset=function(v){c.d.r(v)},ot.unstable_batchedUpdates=function(v,g){return v(g)},ot.useFormState=function(v,g,x){return p.H.useFormState(v,g,x)},ot.useFormStatus=function(){return p.H.useHostTransitionStatus()},ot.version="19.1.0",ot}var Ih;function Fg(){if(Ih)return Sc.exports;Ih=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),Sc.exports=Jg(),Sc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph;function Wg(){if(Ph)return ol;Ph=1;var a=Kg(),s=Vc(),o=Fg();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(d(e)!==e)throw Error(c(188))}function v(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,i=t;;){var l=n.return;if(l===null)break;var r=l.alternate;if(r===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===n)return y(l),e;if(r===i)return y(l),t;r=r.sibling}throw Error(c(188))}if(n.return!==i.return)n=l,i=r;else{for(var f=!1,m=l.child;m;){if(m===n){f=!0,n=l,i=r;break}if(m===i){f=!0,i=l,n=r;break}m=m.sibling}if(!f){for(m=r.child;m;){if(m===n){f=!0,n=r,i=l;break}if(m===i){f=!0,i=r,n=l;break}m=m.sibling}if(!f)throw Error(c(189))}}if(n.alternate!==i)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,E=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),le=Symbol.for("react.provider"),J=Symbol.for("react.consumer"),W=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),Ne=Symbol.for("react.activity"),Qe=Symbol.for("react.memo_cache_sentinel"),vt=Symbol.iterator;function Ye(e){return e===null||typeof e!="object"?null:(e=vt&&e[vt]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Symbol.for("react.client.reference");function Le(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ke?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case I:return"Profiler";case V:return"StrictMode";case Y:return"Suspense";case Q:return"SuspenseList";case Ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case U:return"Portal";case W:return(e.displayName||"Context")+".Provider";case J:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case k:return t=e.displayName||null,t!==null?t:Le(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return Le(e(t))}catch{}}return null}var He=Array.isArray,C=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},se=[],S=-1;function M(e){return{current:e}}function B(e){0>S||(e.current=se[S],se[S]=null,S--)}function q(e,t){S++,se[S]=e.current,e.current=t}var K=M(null),fe=M(null),ee=M(null),Je=M(null);function be(e,t){switch(q(ee,t),q(fe,e),q(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=bh(t),e=xh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(K),q(K,e)}function lt(){B(K),B(fe),B(ee)}function ka(e){e.memoizedState!==null&&q(Je,e);var t=K.current,n=xh(t,e.type);t!==n&&(q(fe,e),q(K,n))}function Pt(e){fe.current===e&&(B(K),B(fe)),Je.current===e&&(B(Je),al._currentValue=Z)}var Rt=Object.prototype.hasOwnProperty,ar=a.unstable_scheduleCallback,nr=a.unstable_cancelCallback,Sp=a.unstable_shouldYield,$p=a.unstable_requestPaint,Xt=a.unstable_now,zp=a.unstable_getCurrentPriorityLevel,Ic=a.unstable_ImmediatePriority,Pc=a.unstable_UserBlockingPriority,yl=a.unstable_NormalPriority,Ep=a.unstable_LowPriority,eu=a.unstable_IdlePriority,Tp=a.log,Ap=a.unstable_setDisableYieldValue,ui=null,bt=null;function ga(e){if(typeof Tp=="function"&&Ap(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(ui,e)}catch{}}var xt=Math.clz32?Math.clz32:Rp,jp=Math.log,Op=Math.LN2;function Rp(e){return e>>>=0,e===0?32:31-(jp(e)/Op|0)|0}var vl=256,bl=4194304;function Ga(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xl(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var m=i&134217727;return m!==0?(i=m&~r,i!==0?l=Ga(i):(f&=m,f!==0?l=Ga(f):n||(n=m&~e,n!==0&&(l=Ga(n))))):(m=i&~r,m!==0?l=Ga(m):f!==0?l=Ga(f):n||(n=i&~e,n!==0&&(l=Ga(n)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:l}function fi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Cp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tu(){var e=vl;return vl<<=1,(vl&4194048)===0&&(vl=256),e}function au(){var e=bl;return bl<<=1,(bl&62914560)===0&&(bl=4194304),e}function ir(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function di(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Np(e,t,n,i,l,r){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,b=e.expirationTimes,A=e.hiddenUpdates;for(n=f&~n;0<n;){var _=31-xt(n),D=1<<_;m[_]=0,b[_]=-1;var j=A[_];if(j!==null)for(A[_]=null,_=0;_<j.length;_++){var R=j[_];R!==null&&(R.lane&=-536870913)}n&=~D}i!==0&&nu(e,i,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function nu(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-xt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function iu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-xt(n),l=1<<i;l&t|e[i]&t&&(e[i]|=t),n&=~l}}function lr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function sr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function lu(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Bh(e.type))}function Mp(e,t){var n=H.p;try{return H.p=e,t()}finally{H.p=n}}var ya=Math.random().toString(36).slice(2),st="__reactFiber$"+ya,dt="__reactProps$"+ya,pn="__reactContainer$"+ya,rr="__reactEvents$"+ya,_p="__reactListeners$"+ya,wp="__reactHandles$"+ya,su="__reactResources$"+ya,hi="__reactMarker$"+ya;function or(e){delete e[st],delete e[dt],delete e[rr],delete e[_p],delete e[wp]}function gn(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pn]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Eh(e);e!==null;){if(n=e[st])return n;e=Eh(e)}return t}e=n,n=e.parentNode}return null}function yn(e){if(e=e[st]||e[pn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function mi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function vn(e){var t=e[su];return t||(t=e[su]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Fe(e){e[hi]=!0}var ru=new Set,ou={};function Va(e,t){bn(e,t),bn(e+"Capture",t)}function bn(e,t){for(ou[e]=t,e=0;e<t.length;e++)ru.add(t[e])}var Dp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cu={},uu={};function Up(e){return Rt.call(uu,e)?!0:Rt.call(cu,e)?!1:Dp.test(e)?uu[e]=!0:(cu[e]=!0,!1)}function Sl(e,t,n){if(Up(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function $l(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ea(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var cr,fu;function xn(e){if(cr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);cr=t&&t[1]||"",fu=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cr+e+fu}var ur=!1;function fr(e,t){if(!e||ur)return"";ur=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(R){var j=R}Reflect.construct(e,[],D)}else{try{D.call()}catch(R){j=R}e.call(D.prototype)}}else{try{throw Error()}catch(R){j=R}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(R){if(R&&j&&typeof R.stack=="string")return[R.stack,j.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),f=r[0],m=r[1];if(f&&m){var b=f.split(`
`),A=m.split(`
`);for(l=i=0;i<b.length&&!b[i].includes("DetermineComponentFrameRoot");)i++;for(;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;if(i===b.length||l===A.length)for(i=b.length-1,l=A.length-1;1<=i&&0<=l&&b[i]!==A[l];)l--;for(;1<=i&&0<=l;i--,l--)if(b[i]!==A[l]){if(i!==1||l!==1)do if(i--,l--,0>l||b[i]!==A[l]){var _=`
`+b[i].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=i&&0<=l);break}}}finally{ur=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?xn(n):""}function Lp(e){switch(e.tag){case 26:case 27:case 5:return xn(e.type);case 16:return xn("Lazy");case 13:return xn("Suspense");case 19:return xn("SuspenseList");case 0:case 15:return fr(e.type,!1);case 11:return fr(e.type.render,!1);case 1:return fr(e.type,!0);case 31:return xn("Activity");default:return""}}function du(e){try{var t="";do t+=Lp(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hp(e){var t=hu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(f){i=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(f){i=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zl(e){e._valueTracker||(e._valueTracker=Hp(e))}function mu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=hu(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function El(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bp=/[\n"\\]/g;function Nt(e){return e.replace(Bp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function dr(e,t,n,i,l,r,f,m){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ct(t)):e.value!==""+Ct(t)&&(e.value=""+Ct(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?hr(e,f,Ct(t)):n!=null?hr(e,f,Ct(n)):i!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Ct(m):e.removeAttribute("name")}function pu(e,t,n,i,l,r,f,m){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+Ct(n):"",t=t!=null?""+Ct(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=m?e.checked:!!i,e.defaultChecked=!!i,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function hr(e,t,n){t==="number"&&El(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Sn(e,t,n,i){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Ct(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function gu(e,t,n){if(t!=null&&(t=""+Ct(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ct(n):""}function yu(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(c(92));if(He(i)){if(1<i.length)throw Error(c(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Ct(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function $n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vu(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||qp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function bu(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&n[l]!==i&&vu(e,l,i)}else for(var r in t)t.hasOwnProperty(r)&&vu(e,r,t[r])}function mr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tl(e){return kp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var pr=null;function gr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zn=null,En=null;function xu(e){var t=yn(e);if(t&&(e=t.stateNode)){var n=e[dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(dr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Nt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var l=i[dt]||null;if(!l)throw Error(c(90));dr(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&mu(i)}break e;case"textarea":gu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}}}var yr=!1;function Su(e,t,n){if(yr)return e(t,n);yr=!0;try{var i=e(t);return i}finally{if(yr=!1,(zn!==null||En!==null)&&(us(),zn&&(t=zn,e=En,En=zn=null,xu(t),e)))for(t=0;t<e.length;t++)xu(e[t])}}function pi(e,t){var n=e.stateNode;if(n===null)return null;var i=n[dt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vr=!1;if(ta)try{var gi={};Object.defineProperty(gi,"passive",{get:function(){vr=!0}}),window.addEventListener("test",gi,gi),window.removeEventListener("test",gi,gi)}catch{vr=!1}var va=null,br=null,Al=null;function $u(){if(Al)return Al;var e,t=br,n=t.length,i,l="value"in va?va.value:va.textContent,r=l.length;for(e=0;e<n&&t[e]===l[e];e++);var f=n-e;for(i=1;i<=f&&t[n-i]===l[r-i];i++);return Al=l.slice(e,1<i?1-i:void 0)}function jl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ol(){return!0}function zu(){return!1}function ht(e){function t(n,i,l,r,f){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(r):r[m]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ol:zu,this.isPropagationStopped=zu,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),t}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=ht(Xa),yi=x({},Xa,{view:0,detail:0}),Gp=ht(yi),xr,Sr,vi,Cl=x({},yi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vi&&(vi&&e.type==="mousemove"?(xr=e.screenX-vi.screenX,Sr=e.screenY-vi.screenY):Sr=xr=0,vi=e),xr)},movementY:function(e){return"movementY"in e?e.movementY:Sr}}),Eu=ht(Cl),Vp=x({},Cl,{dataTransfer:0}),Xp=ht(Vp),Qp=x({},yi,{relatedTarget:0}),$r=ht(Qp),Zp=x({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),Kp=ht(Zp),Jp=x({},Xa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fp=ht(Jp),Wp=x({},Xa,{data:0}),Tu=ht(Wp),Ip={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=e0[e])?!!t[e]:!1}function zr(){return t0}var a0=x({},yi,{key:function(e){if(e.key){var t=Ip[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zr,charCode:function(e){return e.type==="keypress"?jl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),n0=ht(a0),i0=x({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Au=ht(i0),l0=x({},yi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zr}),s0=ht(l0),r0=x({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),o0=ht(r0),c0=x({},Cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),u0=ht(c0),f0=x({},Xa,{newState:0,oldState:0}),d0=ht(f0),h0=[9,13,27,32],Er=ta&&"CompositionEvent"in window,bi=null;ta&&"documentMode"in document&&(bi=document.documentMode);var m0=ta&&"TextEvent"in window&&!bi,ju=ta&&(!Er||bi&&8<bi&&11>=bi),Ou=" ",Ru=!1;function Cu(e,t){switch(e){case"keyup":return h0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tn=!1;function p0(e,t){switch(e){case"compositionend":return Nu(t);case"keypress":return t.which!==32?null:(Ru=!0,Ou);case"textInput":return e=t.data,e===Ou&&Ru?null:e;default:return null}}function g0(e,t){if(Tn)return e==="compositionend"||!Er&&Cu(e,t)?(e=$u(),Al=br=va=null,Tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ju&&t.locale!=="ko"?null:t.data;default:return null}}var y0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!y0[e.type]:t==="textarea"}function _u(e,t,n,i){zn?En?En.push(i):En=[i]:zn=i,t=gs(t,"onChange"),0<t.length&&(n=new Rl("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var xi=null,Si=null;function v0(e){mh(e,0)}function Nl(e){var t=mi(e);if(mu(t))return e}function wu(e,t){if(e==="change")return t}var Du=!1;if(ta){var Tr;if(ta){var Ar="oninput"in document;if(!Ar){var Uu=document.createElement("div");Uu.setAttribute("oninput","return;"),Ar=typeof Uu.oninput=="function"}Tr=Ar}else Tr=!1;Du=Tr&&(!document.documentMode||9<document.documentMode)}function Lu(){xi&&(xi.detachEvent("onpropertychange",Hu),Si=xi=null)}function Hu(e){if(e.propertyName==="value"&&Nl(Si)){var t=[];_u(t,Si,e,gr(e)),Su(v0,t)}}function b0(e,t,n){e==="focusin"?(Lu(),xi=t,Si=n,xi.attachEvent("onpropertychange",Hu)):e==="focusout"&&Lu()}function x0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nl(Si)}function S0(e,t){if(e==="click")return Nl(t)}function $0(e,t){if(e==="input"||e==="change")return Nl(t)}function z0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:z0;function $i(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!Rt.call(t,l)||!St(e[l],t[l]))return!1}return!0}function Bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qu(e,t){var n=Bu(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bu(n)}}function Yu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ku(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=El(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=El(e.document)}return t}function jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var E0=ta&&"documentMode"in document&&11>=document.documentMode,An=null,Or=null,zi=null,Rr=!1;function Gu(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rr||An==null||An!==El(i)||(i=An,"selectionStart"in i&&jr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),zi&&$i(zi,i)||(zi=i,i=gs(Or,"onSelect"),0<i.length&&(t=new Rl("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=An)))}function Qa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jn={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},Cr={},Vu={};ta&&(Vu=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function Za(e){if(Cr[e])return Cr[e];if(!jn[e])return e;var t=jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vu)return Cr[e]=t[n];return e}var Xu=Za("animationend"),Qu=Za("animationiteration"),Zu=Za("animationstart"),T0=Za("transitionrun"),A0=Za("transitionstart"),j0=Za("transitioncancel"),Ku=Za("transitionend"),Ju=new Map,Nr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nr.push("scrollEnd");function Yt(e,t){Ju.set(e,t),Va(t,[e])}var Fu=new WeakMap;function Mt(e,t){if(typeof e=="object"&&e!==null){var n=Fu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:du(t)},Fu.set(e,t),t)}return{value:e,source:t,stack:du(t)}}var _t=[],On=0,Mr=0;function Ml(){for(var e=On,t=Mr=On=0;t<e;){var n=_t[t];_t[t++]=null;var i=_t[t];_t[t++]=null;var l=_t[t];_t[t++]=null;var r=_t[t];if(_t[t++]=null,i!==null&&l!==null){var f=i.pending;f===null?l.next=l:(l.next=f.next,f.next=l),i.pending=l}r!==0&&Wu(n,l,r)}}function _l(e,t,n,i){_t[On++]=e,_t[On++]=t,_t[On++]=n,_t[On++]=i,Mr|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function _r(e,t,n,i){return _l(e,t,n,i),wl(e)}function Rn(e,t){return _l(e,null,null,t),wl(e)}function Wu(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var l=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-xt(n),e=r.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=n|536870912),r):null}function wl(e){if(50<Ki)throw Ki=0,qo=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Cn={};function O0(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(e,t,n,i){return new O0(e,t,n,i)}function wr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aa(e,t){var n=e.alternate;return n===null?(n=$t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Iu(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Dl(e,t,n,i,l,r){var f=0;if(i=e,typeof e=="function")wr(e)&&(f=1);else if(typeof e=="string")f=Cg(e,n,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ne:return e=$t(31,n,t,l),e.elementType=Ne,e.lanes=r,e;case L:return Ka(n.children,l,r,t);case V:f=8,l|=24;break;case I:return e=$t(12,n,t,l|2),e.elementType=I,e.lanes=r,e;case Y:return e=$t(13,n,t,l),e.elementType=Y,e.lanes=r,e;case Q:return e=$t(19,n,t,l),e.elementType=Q,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case le:case W:f=10;break e;case J:f=9;break e;case X:f=11;break e;case k:f=14;break e;case _e:f=16,i=null;break e}f=29,n=Error(c(130,e===null?"null":typeof e,"")),i=null}return t=$t(f,n,t,l),t.elementType=e,t.type=i,t.lanes=r,t}function Ka(e,t,n,i){return e=$t(7,e,i,t),e.lanes=n,e}function Dr(e,t,n){return e=$t(6,e,null,t),e.lanes=n,e}function Ur(e,t,n){return t=$t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Nn=[],Mn=0,Ul=null,Ll=0,wt=[],Dt=0,Ja=null,na=1,ia="";function Fa(e,t){Nn[Mn++]=Ll,Nn[Mn++]=Ul,Ul=e,Ll=t}function Pu(e,t,n){wt[Dt++]=na,wt[Dt++]=ia,wt[Dt++]=Ja,Ja=e;var i=na;e=ia;var l=32-xt(i)-1;i&=~(1<<l),n+=1;var r=32-xt(t)+l;if(30<r){var f=l-l%5;r=(i&(1<<f)-1).toString(32),i>>=f,l-=f,na=1<<32-xt(t)+l|n<<l|i,ia=r+e}else na=1<<r|n<<l|i,ia=e}function Lr(e){e.return!==null&&(Fa(e,1),Pu(e,1,0))}function Hr(e){for(;e===Ul;)Ul=Nn[--Mn],Nn[Mn]=null,Ll=Nn[--Mn],Nn[Mn]=null;for(;e===Ja;)Ja=wt[--Dt],wt[Dt]=null,ia=wt[--Dt],wt[Dt]=null,na=wt[--Dt],wt[Dt]=null}var ft=null,De=null,ve=!1,Wa=null,Qt=!1,Br=Error(c(519));function Ia(e){var t=Error(c(418,""));throw Ai(Mt(t,e)),Br}function ef(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[st]=e,t[dt]=i,n){case"dialog":he("cancel",t),he("close",t);break;case"iframe":case"object":case"embed":he("load",t);break;case"video":case"audio":for(n=0;n<Fi.length;n++)he(Fi[n],t);break;case"source":he("error",t);break;case"img":case"image":case"link":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"input":he("invalid",t),pu(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),zl(t);break;case"select":he("invalid",t);break;case"textarea":he("invalid",t),yu(t,i.value,i.defaultValue,i.children),zl(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||vh(t.textContent,n)?(i.popover!=null&&(he("beforetoggle",t),he("toggle",t)),i.onScroll!=null&&he("scroll",t),i.onScrollEnd!=null&&he("scrollend",t),i.onClick!=null&&(t.onclick=ys),t=!0):t=!1,t||Ia(e)}function tf(e){for(ft=e.return;ft;)switch(ft.tag){case 5:case 13:Qt=!1;return;case 27:case 3:Qt=!0;return;default:ft=ft.return}}function Ei(e){if(e!==ft)return!1;if(!ve)return tf(e),ve=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ac(e.type,e.memoizedProps)),n=!n),n&&De&&Ia(e),tf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){De=Gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}De=null}}else t===27?(t=De,wa(e.type)?(e=sc,sc=null,De=e):De=t):De=ft?Gt(e.stateNode.nextSibling):null;return!0}function Ti(){De=ft=null,ve=!1}function af(){var e=Wa;return e!==null&&(gt===null?gt=e:gt.push.apply(gt,e),Wa=null),e}function Ai(e){Wa===null?Wa=[e]:Wa.push(e)}var qr=M(null),Pa=null,la=null;function ba(e,t,n){q(qr,t._currentValue),t._currentValue=n}function sa(e){e._currentValue=qr.current,B(qr)}function Yr(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function kr(e,t,n,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var f=l.child;r=r.firstContext;e:for(;r!==null;){var m=r;r=l;for(var b=0;b<t.length;b++)if(m.context===t[b]){r.lanes|=n,m=r.alternate,m!==null&&(m.lanes|=n),Yr(r.return,n,e),i||(f=null);break e}r=m.next}}else if(l.tag===18){if(f=l.return,f===null)throw Error(c(341));f.lanes|=n,r=f.alternate,r!==null&&(r.lanes|=n),Yr(f,n,e),f=null}else f=l.child;if(f!==null)f.return=l;else for(f=l;f!==null;){if(f===e){f=null;break}if(l=f.sibling,l!==null){l.return=f.return,f=l;break}f=f.return}l=f}}function ji(e,t,n,i){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var f=l.alternate;if(f===null)throw Error(c(387));if(f=f.memoizedProps,f!==null){var m=l.type;St(l.pendingProps.value,f.value)||(e!==null?e.push(m):e=[m])}}else if(l===Je.current){if(f=l.alternate,f===null)throw Error(c(387));f.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(al):e=[al])}l=l.return}e!==null&&kr(t,e,n,i),t.flags|=262144}function Hl(e){for(e=e.firstContext;e!==null;){if(!St(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function en(e){Pa=e,la=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return nf(Pa,e)}function Bl(e,t){return Pa===null&&en(e),nf(e,t)}function nf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},la===null){if(e===null)throw Error(c(308));la=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else la=la.next=t;return n}var R0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},C0=a.unstable_scheduleCallback,N0=a.unstable_NormalPriority,Ze={$$typeof:W,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gr(){return{controller:new R0,data:new Map,refCount:0}}function Oi(e){e.refCount--,e.refCount===0&&C0(N0,function(){e.controller.abort()})}var Ri=null,Vr=0,_n=0,wn=null;function M0(e,t){if(Ri===null){var n=Ri=[];Vr=0,_n=Zo(),wn={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Vr++,t.then(lf,lf),t}function lf(){if(--Vr===0&&Ri!==null){wn!==null&&(wn.status="fulfilled");var e=Ri;Ri=null,_n=0,wn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _0(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),i}var sf=C.S;C.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&M0(e,t),sf!==null&&sf(e,t)};var tn=M(null);function Xr(){var e=tn.current;return e!==null?e:je.pooledCache}function ql(e,t){t===null?q(tn,tn.current):q(tn,t.pool)}function rf(){var e=Xr();return e===null?null:{parent:Ze._currentValue,pool:e}}var Ci=Error(c(460)),of=Error(c(474)),Yl=Error(c(542)),Qr={then:function(){}};function cf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function kl(){}function uf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(kl,kl),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,df(e),e;default:if(typeof t.status=="string")t.then(kl,kl);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,df(e),e}throw Ni=t,Ci}}var Ni=null;function ff(){if(Ni===null)throw Error(c(459));var e=Ni;return Ni=null,e}function df(e){if(e===Ci||e===Yl)throw Error(c(483))}var xa=!1;function Zr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $a(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Se&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=wl(e),Wu(e,null,n),t}return _l(e,i,t,n),wl(e)}function Mi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,iu(e,n)}}function Jr(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?l=r=f:r=r.next=f,n=n.next}while(n!==null);r===null?l=r=t:r=r.next=t}else l=r=t;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Fr=!1;function _i(){if(Fr){var e=wn;if(e!==null)throw e}}function wi(e,t,n,i){Fr=!1;var l=e.updateQueue;xa=!1;var r=l.firstBaseUpdate,f=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var b=m,A=b.next;b.next=null,f===null?r=A:f.next=A,f=b;var _=e.alternate;_!==null&&(_=_.updateQueue,m=_.lastBaseUpdate,m!==f&&(m===null?_.firstBaseUpdate=A:m.next=A,_.lastBaseUpdate=b))}if(r!==null){var D=l.baseState;f=0,_=A=b=null,m=r;do{var j=m.lane&-536870913,R=j!==m.lane;if(R?(pe&j)===j:(i&j)===j){j!==0&&j===_n&&(Fr=!0),_!==null&&(_=_.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var ne=e,P=m;j=t;var Te=n;switch(P.tag){case 1:if(ne=P.payload,typeof ne=="function"){D=ne.call(Te,D,j);break e}D=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=P.payload,j=typeof ne=="function"?ne.call(Te,D,j):ne,j==null)break e;D=x({},D,j);break e;case 2:xa=!0}}j=m.callback,j!==null&&(e.flags|=64,R&&(e.flags|=8192),R=l.callbacks,R===null?l.callbacks=[j]:R.push(j))}else R={lane:j,tag:m.tag,payload:m.payload,callback:m.callback,next:null},_===null?(A=_=R,b=D):_=_.next=R,f|=j;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;R=m,m=R.next,R.next=null,l.lastBaseUpdate=R,l.shared.pending=null}}while(!0);_===null&&(b=D),l.baseState=b,l.firstBaseUpdate=A,l.lastBaseUpdate=_,r===null&&(l.shared.lanes=0),Ca|=f,e.lanes=f,e.memoizedState=D}}function hf(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function mf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)hf(n[e],t)}var Dn=M(null),Gl=M(0);function pf(e,t){e=ha,q(Gl,e),q(Dn,t),ha=e|t.baseLanes}function Wr(){q(Gl,ha),q(Dn,Dn.current)}function Ir(){ha=Gl.current,B(Dn),B(Gl)}var za=0,ce=null,ze=null,Ge=null,Vl=!1,Un=!1,an=!1,Xl=0,Di=0,Ln=null,w0=0;function Be(){throw Error(c(321))}function Pr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function eo(e,t,n,i,l,r){return za=r,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?If:Pf,an=!1,r=n(i,l),an=!1,Un&&(r=yf(t,n,i,l)),gf(e),r}function gf(e){C.H=Wl;var t=ze!==null&&ze.next!==null;if(za=0,Ge=ze=ce=null,Vl=!1,Di=0,Ln=null,t)throw Error(c(300));e===null||We||(e=e.dependencies,e!==null&&Hl(e)&&(We=!0))}function yf(e,t,n,i){ce=e;var l=0;do{if(Un&&(Ln=null),Di=0,Un=!1,25<=l)throw Error(c(301));if(l+=1,Ge=ze=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}C.H=Y0,r=t(n,i)}while(Un);return r}function D0(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?Ui(t):t,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(ce.flags|=1024),t}function to(){var e=Xl!==0;return Xl=0,e}function ao(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function no(e){if(Vl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Vl=!1}za=0,Ge=ze=ce=null,Un=!1,Di=Xl=0,Ln=null}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?ce.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Ve(){if(ze===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Ge===null?ce.memoizedState:Ge.next;if(t!==null)Ge=t,ze=e;else{if(e===null)throw ce.alternate===null?Error(c(467)):Error(c(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Ge===null?ce.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ui(e){var t=Di;return Di+=1,Ln===null&&(Ln=[]),e=uf(Ln,e,t),t=ce,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?If:Pf),e}function Ql(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ui(e);if(e.$$typeof===W)return rt(e)}throw Error(c(438,String(e)))}function lo(e){var t=null,n=ce.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=ce.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=io(),ce.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Qe;return t.index++,n}function ra(e,t){return typeof t=="function"?t(e):t}function Zl(e){var t=Ve();return so(t,ze,e)}function so(e,t,n){var i=e.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=n;var l=e.baseQueue,r=i.pending;if(r!==null){if(l!==null){var f=l.next;l.next=r.next,r.next=f}t.baseQueue=l=r,i.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var m=f=null,b=null,A=t,_=!1;do{var D=A.lane&-536870913;if(D!==A.lane?(pe&D)===D:(za&D)===D){var j=A.revertLane;if(j===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),D===_n&&(_=!0);else if((za&j)===j){A=A.next,j===_n&&(_=!0);continue}else D={lane:0,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},b===null?(m=b=D,f=r):b=b.next=D,ce.lanes|=j,Ca|=j;D=A.action,an&&n(r,D),r=A.hasEagerState?A.eagerState:n(r,D)}else j={lane:D,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},b===null?(m=b=j,f=r):b=b.next=j,ce.lanes|=D,Ca|=D;A=A.next}while(A!==null&&A!==t);if(b===null?f=r:b.next=m,!St(r,e.memoizedState)&&(We=!0,_&&(n=wn,n!==null)))throw n;e.memoizedState=r,e.baseState=f,e.baseQueue=b,i.lastRenderedState=r}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function ro(e){var t=Ve(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var i=n.dispatch,l=n.pending,r=t.memoizedState;if(l!==null){n.pending=null;var f=l=l.next;do r=e(r,f.action),f=f.next;while(f!==l);St(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function vf(e,t,n){var i=ce,l=Ve(),r=ve;if(r){if(n===void 0)throw Error(c(407));n=n()}else n=t();var f=!St((ze||l).memoizedState,n);f&&(l.memoizedState=n,We=!0),l=l.queue;var m=Sf.bind(null,i,l,e);if(Li(2048,8,m,[e]),l.getSnapshot!==t||f||Ge!==null&&Ge.memoizedState.tag&1){if(i.flags|=2048,Hn(9,Kl(),xf.bind(null,i,l,n,t),null),je===null)throw Error(c(349));r||(za&124)!==0||bf(i,t,n)}return n}function bf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t=io(),ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xf(e,t,n,i){t.value=n,t.getSnapshot=i,$f(t)&&zf(e)}function Sf(e,t,n){return n(function(){$f(t)&&zf(e)})}function $f(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function zf(e){var t=Rn(e,2);t!==null&&jt(t,e,2)}function oo(e){var t=mt();if(typeof e=="function"){var n=e;if(e=n(),an){ga(!0);try{n()}finally{ga(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},t}function Ef(e,t,n,i){return e.baseState=n,so(e,ze,typeof i=="function"?i:ra)}function U0(e,t,n,i,l){if(Fl(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};C.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,Tf(t,r)):(r.next=n.next,t.pending=n.next=r)}}function Tf(e,t){var n=t.action,i=t.payload,l=e.state;if(t.isTransition){var r=C.T,f={};C.T=f;try{var m=n(l,i),b=C.S;b!==null&&b(f,m),Af(e,t,m)}catch(A){co(e,t,A)}finally{C.T=r}}else try{r=n(l,i),Af(e,t,r)}catch(A){co(e,t,A)}}function Af(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){jf(e,t,i)},function(i){return co(e,t,i)}):jf(e,t,n)}function jf(e,t,n){t.status="fulfilled",t.value=n,Of(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Tf(e,n)))}function co(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Of(t),t=t.next;while(t!==i)}e.action=null}function Of(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Rf(e,t){return t}function Cf(e,t){if(ve){var n=je.formState;if(n!==null){e:{var i=ce;if(ve){if(De){t:{for(var l=De,r=Qt;l.nodeType!==8;){if(!r){l=null;break t}if(l=Gt(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){De=Gt(l.nextSibling),i=l.data==="F!";break e}}Ia(i)}i=!1}i&&(t=n[0])}}return n=mt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rf,lastRenderedState:t},n.queue=i,n=Jf.bind(null,ce,i),i.dispatch=n,i=oo(!1),r=po.bind(null,ce,!1,i.queue),i=mt(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,n=U0.bind(null,ce,l,r,n),l.dispatch=n,i.memoizedState=e,[t,n,!1]}function Nf(e){var t=Ve();return Mf(t,ze,e)}function Mf(e,t,n){if(t=so(e,t,Rf)[0],e=Zl(ra)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ui(t)}catch(f){throw f===Ci?Yl:f}else i=t;t=Ve();var l=t.queue,r=l.dispatch;return n!==t.memoizedState&&(ce.flags|=2048,Hn(9,Kl(),L0.bind(null,l,n),null)),[i,r,e]}function L0(e,t){e.action=t}function _f(e){var t=Ve(),n=ze;if(n!==null)return Mf(t,n,e);Ve(),t=t.memoizedState,n=Ve();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Hn(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=ce.updateQueue,t===null&&(t=io(),ce.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Kl(){return{destroy:void 0,resource:void 0}}function wf(){return Ve().memoizedState}function Jl(e,t,n,i){var l=mt();i=i===void 0?null:i,ce.flags|=e,l.memoizedState=Hn(1|t,Kl(),n,i)}function Li(e,t,n,i){var l=Ve();i=i===void 0?null:i;var r=l.memoizedState.inst;ze!==null&&i!==null&&Pr(i,ze.memoizedState.deps)?l.memoizedState=Hn(t,r,n,i):(ce.flags|=e,l.memoizedState=Hn(1|t,r,n,i))}function Df(e,t){Jl(8390656,8,e,t)}function Uf(e,t){Li(2048,8,e,t)}function Lf(e,t){return Li(4,2,e,t)}function Hf(e,t){return Li(4,4,e,t)}function Bf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qf(e,t,n){n=n!=null?n.concat([e]):null,Li(4,4,Bf.bind(null,t,e),n)}function uo(){}function Yf(e,t){var n=Ve();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Pr(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function kf(e,t){var n=Ve();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Pr(t,i[1]))return i[0];if(i=e(),an){ga(!0);try{e()}finally{ga(!1)}}return n.memoizedState=[i,t],i}function fo(e,t,n){return n===void 0||(za&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Xd(),ce.lanes|=e,Ca|=e,n)}function Gf(e,t,n,i){return St(n,t)?n:Dn.current!==null?(e=fo(e,n,i),St(e,t)||(We=!0),e):(za&42)===0?(We=!0,e.memoizedState=n):(e=Xd(),ce.lanes|=e,Ca|=e,t)}function Vf(e,t,n,i,l){var r=H.p;H.p=r!==0&&8>r?r:8;var f=C.T,m={};C.T=m,po(e,!1,t,n);try{var b=l(),A=C.S;if(A!==null&&A(m,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var _=_0(b,i);Hi(e,t,_,At(e))}else Hi(e,t,i,At(e))}catch(D){Hi(e,t,{then:function(){},status:"rejected",reason:D},At())}finally{H.p=r,C.T=f}}function H0(){}function ho(e,t,n,i){if(e.tag!==5)throw Error(c(476));var l=Xf(e).queue;Vf(e,l,t,Z,n===null?H0:function(){return Qf(e),n(i)})}function Xf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:Z},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Qf(e){var t=Xf(e).next.queue;Hi(e,t,{},At())}function mo(){return rt(al)}function Zf(){return Ve().memoizedState}function Kf(){return Ve().memoizedState}function B0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=At();e=Sa(n);var i=$a(t,e,n);i!==null&&(jt(i,t,n),Mi(i,t,n)),t={cache:Gr()},e.payload=t;return}t=t.return}}function q0(e,t,n){var i=At();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Fl(e)?Ff(t,n):(n=_r(e,t,n,i),n!==null&&(jt(n,e,i),Wf(n,t,i)))}function Jf(e,t,n){var i=At();Hi(e,t,n,i)}function Hi(e,t,n,i){var l={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fl(e))Ff(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,m=r(f,n);if(l.hasEagerState=!0,l.eagerState=m,St(m,f))return _l(e,t,l,0),je===null&&Ml(),!1}catch{}finally{}if(n=_r(e,t,l,i),n!==null)return jt(n,e,i),Wf(n,t,i),!0}return!1}function po(e,t,n,i){if(i={lane:2,revertLane:Zo(),action:i,hasEagerState:!1,eagerState:null,next:null},Fl(e)){if(t)throw Error(c(479))}else t=_r(e,n,i,2),t!==null&&jt(t,e,2)}function Fl(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Ff(e,t){Un=Vl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wf(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,iu(e,n)}}var Wl={readContext:rt,use:Ql,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be},If={readContext:rt,use:Ql,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Df,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Jl(4194308,4,Bf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jl(4194308,4,e,t)},useInsertionEffect:function(e,t){Jl(4,2,e,t)},useMemo:function(e,t){var n=mt();t=t===void 0?null:t;var i=e();if(an){ga(!0);try{e()}finally{ga(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=mt();if(n!==void 0){var l=n(t);if(an){ga(!0);try{n(t)}finally{ga(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=q0.bind(null,ce,e),[i.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:function(e){e=oo(e);var t=e.queue,n=Jf.bind(null,ce,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:uo,useDeferredValue:function(e,t){var n=mt();return fo(n,e,t)},useTransition:function(){var e=oo(!1);return e=Vf.bind(null,ce,e.queue,!0,!1),mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=ce,l=mt();if(ve){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),je===null)throw Error(c(349));(pe&124)!==0||bf(i,t,n)}l.memoizedState=n;var r={value:n,getSnapshot:t};return l.queue=r,Df(Sf.bind(null,i,r,e),[e]),i.flags|=2048,Hn(9,Kl(),xf.bind(null,i,r,n,t),null),n},useId:function(){var e=mt(),t=je.identifierPrefix;if(ve){var n=ia,i=na;n=(i&~(1<<32-xt(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=Xl++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=w0++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:mo,useFormState:Cf,useActionState:Cf,useOptimistic:function(e){var t=mt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=po.bind(null,ce,!0,n),n.dispatch=t,[e,t]},useMemoCache:lo,useCacheRefresh:function(){return mt().memoizedState=B0.bind(null,ce)}},Pf={readContext:rt,use:Ql,useCallback:Yf,useContext:rt,useEffect:Uf,useImperativeHandle:qf,useInsertionEffect:Lf,useLayoutEffect:Hf,useMemo:kf,useReducer:Zl,useRef:wf,useState:function(){return Zl(ra)},useDebugValue:uo,useDeferredValue:function(e,t){var n=Ve();return Gf(n,ze.memoizedState,e,t)},useTransition:function(){var e=Zl(ra)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:Ui(e),t]},useSyncExternalStore:vf,useId:Zf,useHostTransitionStatus:mo,useFormState:Nf,useActionState:Nf,useOptimistic:function(e,t){var n=Ve();return Ef(n,ze,e,t)},useMemoCache:lo,useCacheRefresh:Kf},Y0={readContext:rt,use:Ql,useCallback:Yf,useContext:rt,useEffect:Uf,useImperativeHandle:qf,useInsertionEffect:Lf,useLayoutEffect:Hf,useMemo:kf,useReducer:ro,useRef:wf,useState:function(){return ro(ra)},useDebugValue:uo,useDeferredValue:function(e,t){var n=Ve();return ze===null?fo(n,e,t):Gf(n,ze.memoizedState,e,t)},useTransition:function(){var e=ro(ra)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:Ui(e),t]},useSyncExternalStore:vf,useId:Zf,useHostTransitionStatus:mo,useFormState:_f,useActionState:_f,useOptimistic:function(e,t){var n=Ve();return ze!==null?Ef(n,ze,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:lo,useCacheRefresh:Kf},Bn=null,Bi=0;function Il(e){var t=Bi;return Bi+=1,Bn===null&&(Bn=[]),uf(Bn,e,t)}function qi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Pl(e,t){throw t.$$typeof===E?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ed(e){var t=e._init;return t(e._payload)}function td(e){function t(z,$){if(e){var T=z.deletions;T===null?(z.deletions=[$],z.flags|=16):T.push($)}}function n(z,$){if(!e)return null;for(;$!==null;)t(z,$),$=$.sibling;return null}function i(z){for(var $=new Map;z!==null;)z.key!==null?$.set(z.key,z):$.set(z.index,z),z=z.sibling;return $}function l(z,$){return z=aa(z,$),z.index=0,z.sibling=null,z}function r(z,$,T){return z.index=T,e?(T=z.alternate,T!==null?(T=T.index,T<$?(z.flags|=67108866,$):T):(z.flags|=67108866,$)):(z.flags|=1048576,$)}function f(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function m(z,$,T,w){return $===null||$.tag!==6?($=Dr(T,z.mode,w),$.return=z,$):($=l($,T),$.return=z,$)}function b(z,$,T,w){var G=T.type;return G===L?_(z,$,T.props.children,w,T.key):$!==null&&($.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===_e&&ed(G)===$.type)?($=l($,T.props),qi($,T),$.return=z,$):($=Dl(T.type,T.key,T.props,null,z.mode,w),qi($,T),$.return=z,$)}function A(z,$,T,w){return $===null||$.tag!==4||$.stateNode.containerInfo!==T.containerInfo||$.stateNode.implementation!==T.implementation?($=Ur(T,z.mode,w),$.return=z,$):($=l($,T.children||[]),$.return=z,$)}function _(z,$,T,w,G){return $===null||$.tag!==7?($=Ka(T,z.mode,w,G),$.return=z,$):($=l($,T),$.return=z,$)}function D(z,$,T){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=Dr(""+$,z.mode,T),$.return=z,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case N:return T=Dl($.type,$.key,$.props,null,z.mode,T),qi(T,$),T.return=z,T;case U:return $=Ur($,z.mode,T),$.return=z,$;case _e:var w=$._init;return $=w($._payload),D(z,$,T)}if(He($)||Ye($))return $=Ka($,z.mode,T,null),$.return=z,$;if(typeof $.then=="function")return D(z,Il($),T);if($.$$typeof===W)return D(z,Bl(z,$),T);Pl(z,$)}return null}function j(z,$,T,w){var G=$!==null?$.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return G!==null?null:m(z,$,""+T,w);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case N:return T.key===G?b(z,$,T,w):null;case U:return T.key===G?A(z,$,T,w):null;case _e:return G=T._init,T=G(T._payload),j(z,$,T,w)}if(He(T)||Ye(T))return G!==null?null:_(z,$,T,w,null);if(typeof T.then=="function")return j(z,$,Il(T),w);if(T.$$typeof===W)return j(z,$,Bl(z,T),w);Pl(z,T)}return null}function R(z,$,T,w,G){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return z=z.get(T)||null,m($,z,""+w,G);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case N:return z=z.get(w.key===null?T:w.key)||null,b($,z,w,G);case U:return z=z.get(w.key===null?T:w.key)||null,A($,z,w,G);case _e:var ue=w._init;return w=ue(w._payload),R(z,$,T,w,G)}if(He(w)||Ye(w))return z=z.get(T)||null,_($,z,w,G,null);if(typeof w.then=="function")return R(z,$,T,Il(w),G);if(w.$$typeof===W)return R(z,$,T,Bl($,w),G);Pl($,w)}return null}function ne(z,$,T,w){for(var G=null,ue=null,F=$,te=$=0,Pe=null;F!==null&&te<T.length;te++){F.index>te?(Pe=F,F=null):Pe=F.sibling;var ye=j(z,F,T[te],w);if(ye===null){F===null&&(F=Pe);break}e&&F&&ye.alternate===null&&t(z,F),$=r(ye,$,te),ue===null?G=ye:ue.sibling=ye,ue=ye,F=Pe}if(te===T.length)return n(z,F),ve&&Fa(z,te),G;if(F===null){for(;te<T.length;te++)F=D(z,T[te],w),F!==null&&($=r(F,$,te),ue===null?G=F:ue.sibling=F,ue=F);return ve&&Fa(z,te),G}for(F=i(F);te<T.length;te++)Pe=R(F,z,te,T[te],w),Pe!==null&&(e&&Pe.alternate!==null&&F.delete(Pe.key===null?te:Pe.key),$=r(Pe,$,te),ue===null?G=Pe:ue.sibling=Pe,ue=Pe);return e&&F.forEach(function(Ba){return t(z,Ba)}),ve&&Fa(z,te),G}function P(z,$,T,w){if(T==null)throw Error(c(151));for(var G=null,ue=null,F=$,te=$=0,Pe=null,ye=T.next();F!==null&&!ye.done;te++,ye=T.next()){F.index>te?(Pe=F,F=null):Pe=F.sibling;var Ba=j(z,F,ye.value,w);if(Ba===null){F===null&&(F=Pe);break}e&&F&&Ba.alternate===null&&t(z,F),$=r(Ba,$,te),ue===null?G=Ba:ue.sibling=Ba,ue=Ba,F=Pe}if(ye.done)return n(z,F),ve&&Fa(z,te),G;if(F===null){for(;!ye.done;te++,ye=T.next())ye=D(z,ye.value,w),ye!==null&&($=r(ye,$,te),ue===null?G=ye:ue.sibling=ye,ue=ye);return ve&&Fa(z,te),G}for(F=i(F);!ye.done;te++,ye=T.next())ye=R(F,z,te,ye.value,w),ye!==null&&(e&&ye.alternate!==null&&F.delete(ye.key===null?te:ye.key),$=r(ye,$,te),ue===null?G=ye:ue.sibling=ye,ue=ye);return e&&F.forEach(function(kg){return t(z,kg)}),ve&&Fa(z,te),G}function Te(z,$,T,w){if(typeof T=="object"&&T!==null&&T.type===L&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case N:e:{for(var G=T.key;$!==null;){if($.key===G){if(G=T.type,G===L){if($.tag===7){n(z,$.sibling),w=l($,T.props.children),w.return=z,z=w;break e}}else if($.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===_e&&ed(G)===$.type){n(z,$.sibling),w=l($,T.props),qi(w,T),w.return=z,z=w;break e}n(z,$);break}else t(z,$);$=$.sibling}T.type===L?(w=Ka(T.props.children,z.mode,w,T.key),w.return=z,z=w):(w=Dl(T.type,T.key,T.props,null,z.mode,w),qi(w,T),w.return=z,z=w)}return f(z);case U:e:{for(G=T.key;$!==null;){if($.key===G)if($.tag===4&&$.stateNode.containerInfo===T.containerInfo&&$.stateNode.implementation===T.implementation){n(z,$.sibling),w=l($,T.children||[]),w.return=z,z=w;break e}else{n(z,$);break}else t(z,$);$=$.sibling}w=Ur(T,z.mode,w),w.return=z,z=w}return f(z);case _e:return G=T._init,T=G(T._payload),Te(z,$,T,w)}if(He(T))return ne(z,$,T,w);if(Ye(T)){if(G=Ye(T),typeof G!="function")throw Error(c(150));return T=G.call(T),P(z,$,T,w)}if(typeof T.then=="function")return Te(z,$,Il(T),w);if(T.$$typeof===W)return Te(z,$,Bl(z,T),w);Pl(z,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,$!==null&&$.tag===6?(n(z,$.sibling),w=l($,T),w.return=z,z=w):(n(z,$),w=Dr(T,z.mode,w),w.return=z,z=w),f(z)):n(z,$)}return function(z,$,T,w){try{Bi=0;var G=Te(z,$,T,w);return Bn=null,G}catch(F){if(F===Ci||F===Yl)throw F;var ue=$t(29,F,null,z.mode);return ue.lanes=w,ue.return=z,ue}finally{}}}var qn=td(!0),ad=td(!1),Ut=M(null),Zt=null;function Ea(e){var t=e.alternate;q(Ke,Ke.current&1),q(Ut,e),Zt===null&&(t===null||Dn.current!==null||t.memoizedState!==null)&&(Zt=e)}function nd(e){if(e.tag===22){if(q(Ke,Ke.current),q(Ut,e),Zt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Zt=e)}}else Ta()}function Ta(){q(Ke,Ke.current),q(Ut,Ut.current)}function oa(e){B(Ut),Zt===e&&(Zt=null),B(Ke)}var Ke=M(0);function es(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||lc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function go(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yo={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=At(),l=Sa(i);l.payload=t,n!=null&&(l.callback=n),t=$a(e,l,i),t!==null&&(jt(t,e,i),Mi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=At(),l=Sa(i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=$a(e,l,i),t!==null&&(jt(t,e,i),Mi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=At(),i=Sa(n);i.tag=2,t!=null&&(i.callback=t),t=$a(e,i,n),t!==null&&(jt(t,e,n),Mi(t,e,n))}};function id(e,t,n,i,l,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,f):t.prototype&&t.prototype.isPureReactComponent?!$i(n,i)||!$i(l,r):!0}function ld(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&yo.enqueueReplaceState(t,t.state,null)}function nn(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=x({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var ts=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function sd(e){ts(e)}function rd(e){console.error(e)}function od(e){ts(e)}function as(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function cd(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function vo(e,t,n){return n=Sa(n),n.tag=3,n.payload={element:null},n.callback=function(){as(e,t)},n}function ud(e){return e=Sa(e),e.tag=3,e}function fd(e,t,n,i){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var r=i.value;e.payload=function(){return l(r)},e.callback=function(){cd(t,n,i)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){cd(t,n,i),typeof l!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})})}function k0(e,t,n,i,l){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ji(t,n,l,!0),n=Ut.current,n!==null){switch(n.tag){case 13:return Zt===null?ko():n.alternate===null&&Ue===0&&(Ue=3),n.flags&=-257,n.flags|=65536,n.lanes=l,i===Qr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Vo(e,i,l)),!1;case 22:return n.flags|=65536,i===Qr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Vo(e,i,l)),!1}throw Error(c(435,n.tag))}return Vo(e,i,l),ko(),!1}if(ve)return t=Ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==Br&&(e=Error(c(422),{cause:i}),Ai(Mt(e,n)))):(i!==Br&&(t=Error(c(423),{cause:i}),Ai(Mt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Mt(i,n),l=vo(e.stateNode,i,l),Jr(e,l),Ue!==4&&(Ue=2)),!1;var r=Error(c(520),{cause:i});if(r=Mt(r,n),Zi===null?Zi=[r]:Zi.push(r),Ue!==4&&(Ue=2),t===null)return!0;i=Mt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=vo(n.stateNode,i,e),Jr(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Na===null||!Na.has(r))))return n.flags|=65536,l&=-l,n.lanes|=l,l=ud(l),fd(l,e,n,i),Jr(n,l),!1}n=n.return}while(n!==null);return!1}var dd=Error(c(461)),We=!1;function at(e,t,n,i){t.child=e===null?ad(t,null,n,i):qn(t,e.child,n,i)}function hd(e,t,n,i,l){n=n.render;var r=t.ref;if("ref"in i){var f={};for(var m in i)m!=="ref"&&(f[m]=i[m])}else f=i;return en(t),i=eo(e,t,n,f,r,l),m=to(),e!==null&&!We?(ao(e,t,l),ca(e,t,l)):(ve&&m&&Lr(t),t.flags|=1,at(e,t,i,l),t.child)}function md(e,t,n,i,l){if(e===null){var r=n.type;return typeof r=="function"&&!wr(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,pd(e,t,r,i,l)):(e=Dl(n.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ao(e,l)){var f=r.memoizedProps;if(n=n.compare,n=n!==null?n:$i,n(f,i)&&e.ref===t.ref)return ca(e,t,l)}return t.flags|=1,e=aa(r,i),e.ref=t.ref,e.return=t,t.child=e}function pd(e,t,n,i,l){if(e!==null){var r=e.memoizedProps;if($i(r,i)&&e.ref===t.ref)if(We=!1,t.pendingProps=i=r,Ao(e,l))(e.flags&131072)!==0&&(We=!0);else return t.lanes=e.lanes,ca(e,t,l)}return bo(e,t,n,i,l)}function gd(e,t,n){var i=t.pendingProps,l=i.children,r=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=r!==null?r.baseLanes|n:n,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;t.childLanes=r&~i}else t.childLanes=0,t.child=null;return yd(e,t,i,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ql(t,r!==null?r.cachePool:null),r!==null?pf(t,r):Wr(),nd(t);else return t.lanes=t.childLanes=536870912,yd(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(ql(t,r.cachePool),pf(t,r),Ta(),t.memoizedState=null):(e!==null&&ql(t,null),Wr(),Ta());return at(e,t,l,n),t.child}function yd(e,t,n,i){var l=Xr();return l=l===null?null:{parent:Ze._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&ql(t,null),Wr(),nd(t),e!==null&&ji(e,t,i,!0),null}function ns(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function bo(e,t,n,i,l){return en(t),n=eo(e,t,n,i,void 0,l),i=to(),e!==null&&!We?(ao(e,t,l),ca(e,t,l)):(ve&&i&&Lr(t),t.flags|=1,at(e,t,n,l),t.child)}function vd(e,t,n,i,l,r){return en(t),t.updateQueue=null,n=yf(t,i,n,l),gf(e),i=to(),e!==null&&!We?(ao(e,t,r),ca(e,t,r)):(ve&&i&&Lr(t),t.flags|=1,at(e,t,n,r),t.child)}function bd(e,t,n,i,l){if(en(t),t.stateNode===null){var r=Cn,f=n.contextType;typeof f=="object"&&f!==null&&(r=rt(f)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=yo,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},Zr(t),f=n.contextType,r.context=typeof f=="object"&&f!==null?rt(f):Cn,r.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(go(t,n,f,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&yo.enqueueReplaceState(r,r.state,null),wi(t,i,r,l),_i(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var m=t.memoizedProps,b=nn(n,m);r.props=b;var A=r.context,_=n.contextType;f=Cn,typeof _=="object"&&_!==null&&(f=rt(_));var D=n.getDerivedStateFromProps;_=typeof D=="function"||typeof r.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,_||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(m||A!==f)&&ld(t,r,i,f),xa=!1;var j=t.memoizedState;r.state=j,wi(t,i,r,l),_i(),A=t.memoizedState,m||j!==A||xa?(typeof D=="function"&&(go(t,n,D,i),A=t.memoizedState),(b=xa||id(t,n,b,i,j,A,f))?(_||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=A),r.props=i,r.state=A,r.context=f,i=b):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Kr(e,t),f=t.memoizedProps,_=nn(n,f),r.props=_,D=t.pendingProps,j=r.context,A=n.contextType,b=Cn,typeof A=="object"&&A!==null&&(b=rt(A)),m=n.getDerivedStateFromProps,(A=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==D||j!==b)&&ld(t,r,i,b),xa=!1,j=t.memoizedState,r.state=j,wi(t,i,r,l),_i();var R=t.memoizedState;f!==D||j!==R||xa||e!==null&&e.dependencies!==null&&Hl(e.dependencies)?(typeof m=="function"&&(go(t,n,m,i),R=t.memoizedState),(_=xa||id(t,n,_,i,j,R,b)||e!==null&&e.dependencies!==null&&Hl(e.dependencies))?(A||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,R,b),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,R,b)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=R),r.props=i,r.state=R,r.context=b,i=_):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,ns(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=qn(t,e.child,null,l),t.child=qn(t,null,n,l)):at(e,t,n,l),t.memoizedState=r.state,e=t.child):e=ca(e,t,l),e}function xd(e,t,n,i){return Ti(),t.flags|=256,at(e,t,n,i),t.child}var xo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function So(e){return{baseLanes:e,cachePool:rf()}}function $o(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Lt),e}function Sd(e,t,n){var i=t.pendingProps,l=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),f&&(l=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(l?Ea(t):Ta(),ve){var m=De,b;if(b=m){e:{for(b=m,m=Qt;b.nodeType!==8;){if(!m){m=null;break e}if(b=Gt(b.nextSibling),b===null){m=null;break e}}m=b}m!==null?(t.memoizedState={dehydrated:m,treeContext:Ja!==null?{id:na,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},b=$t(18,null,null,0),b.stateNode=m,b.return=t,t.child=b,ft=t,De=null,b=!0):b=!1}b||Ia(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return lc(m)?t.lanes=32:t.lanes=536870912,null;oa(t)}return m=i.children,i=i.fallback,l?(Ta(),l=t.mode,m=is({mode:"hidden",children:m},l),i=Ka(i,l,n,null),m.return=t,i.return=t,m.sibling=i,t.child=m,l=t.child,l.memoizedState=So(n),l.childLanes=$o(e,f,n),t.memoizedState=xo,i):(Ea(t),zo(t,m))}if(b=e.memoizedState,b!==null&&(m=b.dehydrated,m!==null)){if(r)t.flags&256?(Ea(t),t.flags&=-257,t=Eo(e,t,n)):t.memoizedState!==null?(Ta(),t.child=e.child,t.flags|=128,t=null):(Ta(),l=i.fallback,m=t.mode,i=is({mode:"visible",children:i.children},m),l=Ka(l,m,n,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,qn(t,e.child,null,n),i=t.child,i.memoizedState=So(n),i.childLanes=$o(e,f,n),t.memoizedState=xo,t=l);else if(Ea(t),lc(m)){if(f=m.nextSibling&&m.nextSibling.dataset,f)var A=f.dgst;f=A,i=Error(c(419)),i.stack="",i.digest=f,Ai({value:i,source:null,stack:null}),t=Eo(e,t,n)}else if(We||ji(e,t,n,!1),f=(n&e.childLanes)!==0,We||f){if(f=je,f!==null&&(i=n&-n,i=(i&42)!==0?1:lr(i),i=(i&(f.suspendedLanes|n))!==0?0:i,i!==0&&i!==b.retryLane))throw b.retryLane=i,Rn(e,i),jt(f,e,i),dd;m.data==="$?"||ko(),t=Eo(e,t,n)}else m.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,De=Gt(m.nextSibling),ft=t,ve=!0,Wa=null,Qt=!1,e!==null&&(wt[Dt++]=na,wt[Dt++]=ia,wt[Dt++]=Ja,na=e.id,ia=e.overflow,Ja=t),t=zo(t,i.children),t.flags|=4096);return t}return l?(Ta(),l=i.fallback,m=t.mode,b=e.child,A=b.sibling,i=aa(b,{mode:"hidden",children:i.children}),i.subtreeFlags=b.subtreeFlags&65011712,A!==null?l=aa(A,l):(l=Ka(l,m,n,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,m=e.child.memoizedState,m===null?m=So(n):(b=m.cachePool,b!==null?(A=Ze._currentValue,b=b.parent!==A?{parent:A,pool:A}:b):b=rf(),m={baseLanes:m.baseLanes|n,cachePool:b}),l.memoizedState=m,l.childLanes=$o(e,f,n),t.memoizedState=xo,i):(Ea(t),n=e.child,e=n.sibling,n=aa(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function zo(e,t){return t=is({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function is(e,t){return e=$t(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Eo(e,t,n){return qn(t,e.child,null,n),e=zo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $d(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Yr(e.return,t,n)}function To(e,t,n,i,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=l)}function zd(e,t,n){var i=t.pendingProps,l=i.revealOrder,r=i.tail;if(at(e,t,i.children,n),i=Ke.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$d(e,n,t);else if(e.tag===19)$d(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(q(Ke,i),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&es(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),To(t,!1,l,n,r);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&es(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}To(t,!0,n,null,r);break;case"together":To(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ca(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ca|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ji(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=aa(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=aa(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ao(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Hl(e)))}function G0(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ba(t,Ze,e.memoizedState.cache),Ti();break;case 27:case 5:ka(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ba(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ea(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Sd(e,t,n):(Ea(t),e=ca(e,t,n),e!==null?e.sibling:null);Ea(t);break;case 19:var l=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ji(e,t,n,!1),i=(n&t.childLanes)!==0),l){if(i)return zd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),q(Ke,Ke.current),i)break;return null;case 22:case 23:return t.lanes=0,gd(e,t,n);case 24:ba(t,Ze,e.memoizedState.cache)}return ca(e,t,n)}function Ed(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)We=!0;else{if(!Ao(e,n)&&(t.flags&128)===0)return We=!1,G0(e,t,n);We=(e.flags&131072)!==0}else We=!1,ve&&(t.flags&1048576)!==0&&Pu(t,Ll,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,l=i._init;if(i=l(i._payload),t.type=i,typeof i=="function")wr(i)?(e=nn(i,e),t.tag=1,t=bd(null,t,i,e,n)):(t.tag=0,t=bo(null,t,i,e,n));else{if(i!=null){if(l=i.$$typeof,l===X){t.tag=11,t=hd(null,t,i,e,n);break e}else if(l===k){t.tag=14,t=md(null,t,i,e,n);break e}}throw t=Le(i)||i,Error(c(306,t,""))}}return t;case 0:return bo(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,l=nn(i,t.pendingProps),bd(e,t,i,l,n);case 3:e:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(c(387));i=t.pendingProps;var r=t.memoizedState;l=r.element,Kr(e,t),wi(t,i,null,n);var f=t.memoizedState;if(i=f.cache,ba(t,Ze,i),i!==r.cache&&kr(t,[Ze],n,!0),_i(),i=f.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=xd(e,t,i,n);break e}else if(i!==l){l=Mt(Error(c(424)),t),Ai(l),t=xd(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(De=Gt(e.firstChild),ft=t,ve=!0,Wa=null,Qt=!0,n=ad(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ti(),i===l){t=ca(e,t,n);break e}at(e,t,i,n)}t=t.child}return t;case 26:return ns(e,t),e===null?(n=Oh(t.type,null,t.pendingProps,null))?t.memoizedState=n:ve||(n=t.type,e=t.pendingProps,i=vs(ee.current).createElement(n),i[st]=t,i[dt]=e,it(i,n,e),Fe(i),t.stateNode=i):t.memoizedState=Oh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ka(t),e===null&&ve&&(i=t.stateNode=Th(t.type,t.pendingProps,ee.current),ft=t,Qt=!0,l=De,wa(t.type)?(sc=l,De=Gt(i.firstChild)):De=l),at(e,t,t.pendingProps.children,n),ns(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((l=i=De)&&(i=yg(i,t.type,t.pendingProps,Qt),i!==null?(t.stateNode=i,ft=t,De=Gt(i.firstChild),Qt=!1,l=!0):l=!1),l||Ia(t)),ka(t),l=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,i=r.children,ac(l,r)?i=null:f!==null&&ac(l,f)&&(t.flags|=32),t.memoizedState!==null&&(l=eo(e,t,D0,null,null,n),al._currentValue=l),ns(e,t),at(e,t,i,n),t.child;case 6:return e===null&&ve&&((e=n=De)&&(n=vg(n,t.pendingProps,Qt),n!==null?(t.stateNode=n,ft=t,De=null,e=!0):e=!1),e||Ia(t)),null;case 13:return Sd(e,t,n);case 4:return be(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=qn(t,null,i,n):at(e,t,i,n),t.child;case 11:return hd(e,t,t.type,t.pendingProps,n);case 7:return at(e,t,t.pendingProps,n),t.child;case 8:return at(e,t,t.pendingProps.children,n),t.child;case 12:return at(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ba(t,t.type,i.value),at(e,t,i.children,n),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,en(t),l=rt(l),i=i(l),t.flags|=1,at(e,t,i,n),t.child;case 14:return md(e,t,t.type,t.pendingProps,n);case 15:return pd(e,t,t.type,t.pendingProps,n);case 19:return zd(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=is(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=aa(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return gd(e,t,n);case 24:return en(t),i=rt(Ze),e===null?(l=Xr(),l===null&&(l=je,r=Gr(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=n),l=r),t.memoizedState={parent:i,cache:l},Zr(t),ba(t,Ze,l)):((e.lanes&n)!==0&&(Kr(e,t),wi(t,null,null,n),_i()),l=e.memoizedState,r=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ba(t,Ze,i)):(i=r.cache,ba(t,Ze,i),i!==l.cache&&kr(t,[Ze],n,!0))),at(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function ua(e){e.flags|=4}function Td(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_h(t)){if(t=Ut.current,t!==null&&((pe&4194048)===pe?Zt!==null:(pe&62914560)!==pe&&(pe&536870912)===0||t!==Zt))throw Ni=Qr,of;e.flags|=8192}}function ls(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?au():536870912,e.lanes|=t,Vn|=t)}function Yi(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function V0(e,t,n){var i=t.pendingProps;switch(Hr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return we(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),sa(Ze),lt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ei(t)?ua(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,af())),we(t),null;case 26:return n=t.memoizedState,e===null?(ua(t),n!==null?(we(t),Td(t,n)):(we(t),t.flags&=-16777217)):n?n!==e.memoizedState?(ua(t),we(t),Td(t,n)):(we(t),t.flags&=-16777217):(e.memoizedProps!==i&&ua(t),we(t),t.flags&=-16777217),null;case 27:Pt(t),n=ee.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ua(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return we(t),null}e=K.current,Ei(t)?ef(t):(e=Th(l,i,n),t.stateNode=e,ua(t))}return we(t),null;case 5:if(Pt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ua(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return we(t),null}if(e=K.current,Ei(t))ef(t);else{switch(l=vs(ee.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?l.createElement("select",{is:i.is}):l.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?l.createElement(n,{is:i.is}):l.createElement(n)}}e[st]=t,e[dt]=i;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(it(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ua(t)}}return we(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ua(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(c(166));if(e=ee.current,Ei(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,l=ft,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[st]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||vh(e.nodeValue,n)),e||Ia(t)}else e=vs(e).createTextNode(i),e[st]=t,t.stateNode=e}return we(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ei(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[st]=t}else Ti(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),l=!1}else l=af(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(oa(t),t):(oa(t),null)}if(oa(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool);var r=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==l&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),ls(t,t.updateQueue),we(t),null;case 4:return lt(),e===null&&Wo(t.stateNode.containerInfo),we(t),null;case 10:return sa(t.type),we(t),null;case 19:if(B(Ke),l=t.memoizedState,l===null)return we(t),null;if(i=(t.flags&128)!==0,r=l.rendering,r===null)if(i)Yi(l,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=es(e),r!==null){for(t.flags|=128,Yi(l,!1),e=r.updateQueue,t.updateQueue=e,ls(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Iu(n,e),n=n.sibling;return q(Ke,Ke.current&1|2),t.child}e=e.sibling}l.tail!==null&&Xt()>os&&(t.flags|=128,i=!0,Yi(l,!1),t.lanes=4194304)}else{if(!i)if(e=es(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,ls(t,e),Yi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!ve)return we(t),null}else 2*Xt()-l.renderingStartTime>os&&n!==536870912&&(t.flags|=128,i=!0,Yi(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Xt(),t.sibling=null,e=Ke.current,q(Ke,i?e&1|2:e&1),t):(we(t),null);case 22:case 23:return oa(t),Ir(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),n=t.updateQueue,n!==null&&ls(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&B(tn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),sa(Ze),we(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function X0(e,t){switch(Hr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sa(Ze),lt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Pt(t),null;case 13:if(oa(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Ti()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Ke),null;case 4:return lt(),null;case 10:return sa(t.type),null;case 22:case 23:return oa(t),Ir(),e!==null&&B(tn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return sa(Ze),null;case 25:return null;default:return null}}function Ad(e,t){switch(Hr(t),t.tag){case 3:sa(Ze),lt();break;case 26:case 27:case 5:Pt(t);break;case 4:lt();break;case 13:oa(t);break;case 19:B(Ke);break;case 10:sa(t.type);break;case 22:case 23:oa(t),Ir(),e!==null&&B(tn);break;case 24:sa(Ze)}}function ki(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){i=void 0;var r=n.create,f=n.inst;i=r(),f.destroy=i}n=n.next}while(n!==l)}}catch(m){Ae(t,t.return,m)}}function Aa(e,t,n){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var r=l.next;i=r;do{if((i.tag&e)===e){var f=i.inst,m=f.destroy;if(m!==void 0){f.destroy=void 0,l=t;var b=n,A=m;try{A()}catch(_){Ae(l,b,_)}}}i=i.next}while(i!==r)}}catch(_){Ae(t,t.return,_)}}function jd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{mf(t,n)}catch(i){Ae(e,e.return,i)}}}function Od(e,t,n){n.props=nn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ae(e,t,i)}}function Gi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(l){Ae(e,t,l)}}function Kt(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(l){Ae(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Ae(e,t,l)}else n.current=null}function Rd(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(l){Ae(e,e.return,l)}}function jo(e,t,n){try{var i=e.stateNode;dg(i,e.type,n,t),i[dt]=t}catch(l){Ae(e,e.return,l)}}function Cd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function Oo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ro(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ys));else if(i!==4&&(i===27&&wa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Ro(e,t,n),e=e.sibling;e!==null;)Ro(e,t,n),e=e.sibling}function ss(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&wa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ss(e,t,n),e=e.sibling;e!==null;)ss(e,t,n),e=e.sibling}function Nd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);it(t,i,n),t[st]=e,t[dt]=n}catch(r){Ae(e,e.return,r)}}var fa=!1,qe=!1,Co=!1,Md=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Q0(e,t){if(e=e.containerInfo,ec=Es,e=ku(e),jr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var l=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var f=0,m=-1,b=-1,A=0,_=0,D=e,j=null;t:for(;;){for(var R;D!==n||l!==0&&D.nodeType!==3||(m=f+l),D!==r||i!==0&&D.nodeType!==3||(b=f+i),D.nodeType===3&&(f+=D.nodeValue.length),(R=D.firstChild)!==null;)j=D,D=R;for(;;){if(D===e)break t;if(j===n&&++A===l&&(m=f),j===r&&++_===i&&(b=f),(R=D.nextSibling)!==null)break;D=j,j=D.parentNode}D=R}n=m===-1||b===-1?null:{start:m,end:b}}else n=null}n=n||{start:0,end:0}}else n=null;for(tc={focusedElem:e,selectionRange:n},Es=!1,Ie=t;Ie!==null;)if(t=Ie,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ie=e;else for(;Ie!==null;){switch(t=Ie,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,l=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var ne=nn(n.type,l,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(ne,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(P){Ae(n,n.return,P)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ic(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ic(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ie=e;break}Ie=t.return}}function _d(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ja(e,n),i&4&&ki(5,n);break;case 1:if(ja(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){Ae(n,n.return,f)}else{var l=nn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Ae(n,n.return,f)}}i&64&&jd(n),i&512&&Gi(n,n.return);break;case 3:if(ja(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{mf(e,t)}catch(f){Ae(n,n.return,f)}}break;case 27:t===null&&i&4&&Nd(n);case 26:case 5:ja(e,n),t===null&&i&4&&Rd(n),i&512&&Gi(n,n.return);break;case 12:ja(e,n);break;case 13:ja(e,n),i&4&&Ud(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=tg.bind(null,n),bg(e,n))));break;case 22:if(i=n.memoizedState!==null||fa,!i){t=t!==null&&t.memoizedState!==null||qe,l=fa;var r=qe;fa=i,(qe=t)&&!r?Oa(e,n,(n.subtreeFlags&8772)!==0):ja(e,n),fa=l,qe=r}break;case 30:break;default:ja(e,n)}}function wd(e){var t=e.alternate;t!==null&&(e.alternate=null,wd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&or(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,pt=!1;function da(e,t,n){for(n=n.child;n!==null;)Dd(e,t,n),n=n.sibling}function Dd(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(ui,n)}catch{}switch(n.tag){case 26:qe||Kt(n,t),da(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qe||Kt(n,t);var i=Me,l=pt;wa(n.type)&&(Me=n.stateNode,pt=!1),da(e,t,n),Ii(n.stateNode),Me=i,pt=l;break;case 5:qe||Kt(n,t);case 6:if(i=Me,l=pt,Me=null,da(e,t,n),Me=i,pt=l,Me!==null)if(pt)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(n.stateNode)}catch(r){Ae(n,t,r)}else try{Me.removeChild(n.stateNode)}catch(r){Ae(n,t,r)}break;case 18:Me!==null&&(pt?(e=Me,zh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),sl(e)):zh(Me,n.stateNode));break;case 4:i=Me,l=pt,Me=n.stateNode.containerInfo,pt=!0,da(e,t,n),Me=i,pt=l;break;case 0:case 11:case 14:case 15:qe||Aa(2,n,t),qe||Aa(4,n,t),da(e,t,n);break;case 1:qe||(Kt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Od(n,t,i)),da(e,t,n);break;case 21:da(e,t,n);break;case 22:qe=(i=qe)||n.memoizedState!==null,da(e,t,n),qe=i;break;default:da(e,t,n)}}function Ud(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{sl(e)}catch(n){Ae(t,t.return,n)}}function Z0(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Md),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Md),t;default:throw Error(c(435,e.tag))}}function No(e,t){var n=Z0(e);t.forEach(function(i){var l=ag.bind(null,e,i);n.has(i)||(n.add(i),i.then(l,l))})}function zt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i],r=e,f=t,m=f;e:for(;m!==null;){switch(m.tag){case 27:if(wa(m.type)){Me=m.stateNode,pt=!1;break e}break;case 5:Me=m.stateNode,pt=!1;break e;case 3:case 4:Me=m.stateNode.containerInfo,pt=!0;break e}m=m.return}if(Me===null)throw Error(c(160));Dd(r,f,l),Me=null,pt=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Ld(t,e),t=t.sibling}var kt=null;function Ld(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:zt(t,e),Et(e),i&4&&(Aa(3,e,e.return),ki(3,e),Aa(5,e,e.return));break;case 1:zt(t,e),Et(e),i&512&&(qe||n===null||Kt(n,n.return)),i&64&&fa&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var l=kt;if(zt(t,e),Et(e),i&512&&(qe||n===null||Kt(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":r=l.getElementsByTagName("title")[0],(!r||r[hi]||r[st]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(i),l.head.insertBefore(r,l.querySelector("head > title"))),it(r,i,n),r[st]=e,Fe(r),i=r;break e;case"link":var f=Nh("link","href",l).get(i+(n.href||""));if(f){for(var m=0;m<f.length;m++)if(r=f[m],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(m,1);break t}}r=l.createElement(i),it(r,i,n),l.head.appendChild(r);break;case"meta":if(f=Nh("meta","content",l).get(i+(n.content||""))){for(m=0;m<f.length;m++)if(r=f[m],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(m,1);break t}}r=l.createElement(i),it(r,i,n),l.head.appendChild(r);break;default:throw Error(c(468,i))}r[st]=e,Fe(r),i=r}e.stateNode=i}else Mh(l,e.type,e.stateNode);else e.stateNode=Ch(l,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?Mh(l,e.type,e.stateNode):Ch(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&jo(e,e.memoizedProps,n.memoizedProps)}break;case 27:zt(t,e),Et(e),i&512&&(qe||n===null||Kt(n,n.return)),n!==null&&i&4&&jo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(zt(t,e),Et(e),i&512&&(qe||n===null||Kt(n,n.return)),e.flags&32){l=e.stateNode;try{$n(l,"")}catch(R){Ae(e,e.return,R)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,jo(e,l,n!==null?n.memoizedProps:l)),i&1024&&(Co=!0);break;case 6:if(zt(t,e),Et(e),i&4){if(e.stateNode===null)throw Error(c(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(R){Ae(e,e.return,R)}}break;case 3:if(Ss=null,l=kt,kt=bs(t.containerInfo),zt(t,e),kt=l,Et(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{sl(t.containerInfo)}catch(R){Ae(e,e.return,R)}Co&&(Co=!1,Hd(e));break;case 4:i=kt,kt=bs(e.stateNode.containerInfo),zt(t,e),Et(e),kt=i;break;case 12:zt(t,e),Et(e);break;case 13:zt(t,e),Et(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Lo=Xt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,No(e,i)));break;case 22:l=e.memoizedState!==null;var b=n!==null&&n.memoizedState!==null,A=fa,_=qe;if(fa=A||l,qe=_||b,zt(t,e),qe=_,fa=A,Et(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||b||fa||qe||ln(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){b=n=t;try{if(r=b.stateNode,l)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{m=b.stateNode;var D=b.memoizedProps.style,j=D!=null&&D.hasOwnProperty("display")?D.display:null;m.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(R){Ae(b,b.return,R)}}}else if(t.tag===6){if(n===null){b=t;try{b.stateNode.nodeValue=l?"":b.memoizedProps}catch(R){Ae(b,b.return,R)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,No(e,n))));break;case 19:zt(t,e),Et(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,No(e,i)));break;case 30:break;case 21:break;default:zt(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Cd(i)){n=i;break}i=i.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var l=n.stateNode,r=Oo(e);ss(e,r,l);break;case 5:var f=n.stateNode;n.flags&32&&($n(f,""),n.flags&=-33);var m=Oo(e);ss(e,m,f);break;case 3:case 4:var b=n.stateNode.containerInfo,A=Oo(e);Ro(e,A,b);break;default:throw Error(c(161))}}catch(_){Ae(e,e.return,_)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Hd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ja(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)_d(e,t.alternate,t),t=t.sibling}function ln(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Aa(4,t,t.return),ln(t);break;case 1:Kt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Od(t,t.return,n),ln(t);break;case 27:Ii(t.stateNode);case 26:case 5:Kt(t,t.return),ln(t);break;case 22:t.memoizedState===null&&ln(t);break;case 30:ln(t);break;default:ln(t)}e=e.sibling}}function Oa(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:Oa(l,r,n),ki(4,r);break;case 1:if(Oa(l,r,n),i=r,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(A){Ae(i,i.return,A)}if(i=r,l=i.updateQueue,l!==null){var m=i.stateNode;try{var b=l.shared.hiddenCallbacks;if(b!==null)for(l.shared.hiddenCallbacks=null,l=0;l<b.length;l++)hf(b[l],m)}catch(A){Ae(i,i.return,A)}}n&&f&64&&jd(r),Gi(r,r.return);break;case 27:Nd(r);case 26:case 5:Oa(l,r,n),n&&i===null&&f&4&&Rd(r),Gi(r,r.return);break;case 12:Oa(l,r,n);break;case 13:Oa(l,r,n),n&&f&4&&Ud(l,r);break;case 22:r.memoizedState===null&&Oa(l,r,n),Gi(r,r.return);break;case 30:break;default:Oa(l,r,n)}t=t.sibling}}function Mo(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Oi(n))}function _o(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Oi(e))}function Jt(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bd(e,t,n,i),t=t.sibling}function Bd(e,t,n,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Jt(e,t,n,i),l&2048&&ki(9,t);break;case 1:Jt(e,t,n,i);break;case 3:Jt(e,t,n,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Oi(e)));break;case 12:if(l&2048){Jt(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,m=r.onPostCommit;typeof m=="function"&&m(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Ae(t,t.return,b)}}else Jt(e,t,n,i);break;case 13:Jt(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?Jt(e,t,n,i):Vi(e,t):r._visibility&2?Jt(e,t,n,i):(r._visibility|=2,Yn(e,t,n,i,(t.subtreeFlags&10256)!==0)),l&2048&&Mo(f,t);break;case 24:Jt(e,t,n,i),l&2048&&_o(t.alternate,t);break;default:Jt(e,t,n,i)}}function Yn(e,t,n,i,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,f=t,m=n,b=i,A=f.flags;switch(f.tag){case 0:case 11:case 15:Yn(r,f,m,b,l),ki(8,f);break;case 23:break;case 22:var _=f.stateNode;f.memoizedState!==null?_._visibility&2?Yn(r,f,m,b,l):Vi(r,f):(_._visibility|=2,Yn(r,f,m,b,l)),l&&A&2048&&Mo(f.alternate,f);break;case 24:Yn(r,f,m,b,l),l&&A&2048&&_o(f.alternate,f);break;default:Yn(r,f,m,b,l)}t=t.sibling}}function Vi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,l=i.flags;switch(i.tag){case 22:Vi(n,i),l&2048&&Mo(i.alternate,i);break;case 24:Vi(n,i),l&2048&&_o(i.alternate,i);break;default:Vi(n,i)}t=t.sibling}}var Xi=8192;function kn(e){if(e.subtreeFlags&Xi)for(e=e.child;e!==null;)qd(e),e=e.sibling}function qd(e){switch(e.tag){case 26:kn(e),e.flags&Xi&&e.memoizedState!==null&&Mg(kt,e.memoizedState,e.memoizedProps);break;case 5:kn(e);break;case 3:case 4:var t=kt;kt=bs(e.stateNode.containerInfo),kn(e),kt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Xi,Xi=16777216,kn(e),Xi=t):kn(e));break;default:kn(e)}}function Yd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Qi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ie=i,Gd(i,e)}Yd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)kd(e),e=e.sibling}function kd(e){switch(e.tag){case 0:case 11:case 15:Qi(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:Qi(e);break;case 12:Qi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,rs(e)):Qi(e);break;default:Qi(e)}}function rs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ie=i,Gd(i,e)}Yd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Aa(8,t,t.return),rs(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,rs(t));break;default:rs(t)}e=e.sibling}}function Gd(e,t){for(;Ie!==null;){var n=Ie;switch(n.tag){case 0:case 11:case 15:Aa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Oi(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ie=i;else e:for(n=e;Ie!==null;){i=Ie;var l=i.sibling,r=i.return;if(wd(i),i===n){Ie=null;break e}if(l!==null){l.return=r,Ie=l;break e}Ie=r}}}var K0={getCacheForType:function(e){var t=rt(Ze),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},J0=typeof WeakMap=="function"?WeakMap:Map,Se=0,je=null,de=null,pe=0,$e=0,Tt=null,Ra=!1,Gn=!1,wo=!1,ha=0,Ue=0,Ca=0,sn=0,Do=0,Lt=0,Vn=0,Zi=null,gt=null,Uo=!1,Lo=0,os=1/0,cs=null,Na=null,nt=0,Ma=null,Xn=null,Qn=0,Ho=0,Bo=null,Vd=null,Ki=0,qo=null;function At(){if((Se&2)!==0&&pe!==0)return pe&-pe;if(C.T!==null){var e=_n;return e!==0?e:Zo()}return lu()}function Xd(){Lt===0&&(Lt=(pe&536870912)===0||ve?tu():536870912);var e=Ut.current;return e!==null&&(e.flags|=32),Lt}function jt(e,t,n){(e===je&&($e===2||$e===9)||e.cancelPendingCommit!==null)&&(Zn(e,0),_a(e,pe,Lt,!1)),di(e,n),((Se&2)===0||e!==je)&&(e===je&&((Se&2)===0&&(sn|=n),Ue===4&&_a(e,pe,Lt,!1)),Ft(e))}function Qd(e,t,n){if((Se&6)!==0)throw Error(c(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||fi(e,t),l=i?I0(e,t):Go(e,t,!0),r=i;do{if(l===0){Gn&&!i&&_a(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!F0(n)){l=Go(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var m=e;l=Zi;var b=m.current.memoizedState.isDehydrated;if(b&&(Zn(m,f).flags|=256),f=Go(m,f,!1),f!==2){if(wo&&!b){m.errorRecoveryDisabledLanes|=r,sn|=r,l=4;break e}r=gt,gt=l,r!==null&&(gt===null?gt=r:gt.push.apply(gt,r))}l=f}if(r=!1,l!==2)continue}}if(l===1){Zn(e,0),_a(e,t,0,!0);break}e:{switch(i=e,r=l,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:_a(i,t,Lt,!Ra);break e;case 2:gt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Lo+300-Xt(),10<l)){if(_a(i,t,Lt,!Ra),xl(i,0,!0)!==0)break e;i.timeoutHandle=Sh(Zd.bind(null,i,n,gt,cs,Uo,t,Lt,sn,Vn,Ra,r,2,-0,0),l);break e}Zd(i,n,gt,cs,Uo,t,Lt,sn,Vn,Ra,r,0,-0,0)}}break}while(!0);Ft(e)}function Zd(e,t,n,i,l,r,f,m,b,A,_,D,j,R){if(e.timeoutHandle=-1,D=t.subtreeFlags,(D&8192||(D&16785408)===16785408)&&(tl={stylesheets:null,count:0,unsuspend:Ng},qd(t),D=_g(),D!==null)){e.cancelPendingCommit=D(eh.bind(null,e,t,r,n,i,l,f,m,b,_,1,j,R)),_a(e,r,f,!A);return}eh(e,t,r,n,i,l,f,m,b)}function F0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var l=n[i],r=l.getSnapshot;l=l.value;try{if(!St(r(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _a(e,t,n,i){t&=~Do,t&=~sn,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var r=31-xt(l),f=1<<r;i[r]=-1,l&=~f}n!==0&&nu(e,n,t)}function us(){return(Se&6)===0?(Ji(0),!1):!0}function Yo(){if(de!==null){if($e===0)var e=de.return;else e=de,la=Pa=null,no(e),Bn=null,Bi=0,e=de;for(;e!==null;)Ad(e.alternate,e),e=e.return;de=null}}function Zn(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,mg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Yo(),je=e,de=n=aa(e.current,null),pe=t,$e=0,Tt=null,Ra=!1,Gn=fi(e,t),wo=!1,Vn=Lt=Do=sn=Ca=Ue=0,gt=Zi=null,Uo=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-xt(i),r=1<<l;t|=e[l],i&=~r}return ha=t,Ml(),n}function Kd(e,t){ce=null,C.H=Wl,t===Ci||t===Yl?(t=ff(),$e=3):t===of?(t=ff(),$e=4):$e=t===dd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,de===null&&(Ue=1,as(e,Mt(t,e.current)))}function Jd(){var e=C.H;return C.H=Wl,e===null?Wl:e}function Fd(){var e=C.A;return C.A=K0,e}function ko(){Ue=4,Ra||(pe&4194048)!==pe&&Ut.current!==null||(Gn=!0),(Ca&134217727)===0&&(sn&134217727)===0||je===null||_a(je,pe,Lt,!1)}function Go(e,t,n){var i=Se;Se|=2;var l=Jd(),r=Fd();(je!==e||pe!==t)&&(cs=null,Zn(e,t)),t=!1;var f=Ue;e:do try{if($e!==0&&de!==null){var m=de,b=Tt;switch($e){case 8:Yo(),f=6;break e;case 3:case 2:case 9:case 6:Ut.current===null&&(t=!0);var A=$e;if($e=0,Tt=null,Kn(e,m,b,A),n&&Gn){f=0;break e}break;default:A=$e,$e=0,Tt=null,Kn(e,m,b,A)}}W0(),f=Ue;break}catch(_){Kd(e,_)}while(!0);return t&&e.shellSuspendCounter++,la=Pa=null,Se=i,C.H=l,C.A=r,de===null&&(je=null,pe=0,Ml()),f}function W0(){for(;de!==null;)Wd(de)}function I0(e,t){var n=Se;Se|=2;var i=Jd(),l=Fd();je!==e||pe!==t?(cs=null,os=Xt()+500,Zn(e,t)):Gn=fi(e,t);e:do try{if($e!==0&&de!==null){t=de;var r=Tt;t:switch($e){case 1:$e=0,Tt=null,Kn(e,t,r,1);break;case 2:case 9:if(cf(r)){$e=0,Tt=null,Id(t);break}t=function(){$e!==2&&$e!==9||je!==e||($e=7),Ft(e)},r.then(t,t);break e;case 3:$e=7;break e;case 4:$e=5;break e;case 7:cf(r)?($e=0,Tt=null,Id(t)):($e=0,Tt=null,Kn(e,t,r,7));break;case 5:var f=null;switch(de.tag){case 26:f=de.memoizedState;case 5:case 27:var m=de;if(!f||_h(f)){$e=0,Tt=null;var b=m.sibling;if(b!==null)de=b;else{var A=m.return;A!==null?(de=A,fs(A)):de=null}break t}}$e=0,Tt=null,Kn(e,t,r,5);break;case 6:$e=0,Tt=null,Kn(e,t,r,6);break;case 8:Yo(),Ue=6;break e;default:throw Error(c(462))}}P0();break}catch(_){Kd(e,_)}while(!0);return la=Pa=null,C.H=i,C.A=l,Se=n,de!==null?0:(je=null,pe=0,Ml(),Ue)}function P0(){for(;de!==null&&!Sp();)Wd(de)}function Wd(e){var t=Ed(e.alternate,e,ha);e.memoizedProps=e.pendingProps,t===null?fs(e):de=t}function Id(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vd(n,t,t.pendingProps,t.type,void 0,pe);break;case 11:t=vd(n,t,t.pendingProps,t.type.render,t.ref,pe);break;case 5:no(t);default:Ad(n,t),t=de=Iu(t,ha),t=Ed(n,t,ha)}e.memoizedProps=e.pendingProps,t===null?fs(e):de=t}function Kn(e,t,n,i){la=Pa=null,no(t),Bn=null,Bi=0;var l=t.return;try{if(k0(e,l,t,n,pe)){Ue=1,as(e,Mt(n,e.current)),de=null;return}}catch(r){if(l!==null)throw de=l,r;Ue=1,as(e,Mt(n,e.current)),de=null;return}t.flags&32768?(ve||i===1?e=!0:Gn||(pe&536870912)!==0?e=!1:(Ra=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ut.current,i!==null&&i.tag===13&&(i.flags|=16384))),Pd(t,e)):fs(t)}function fs(e){var t=e;do{if((t.flags&32768)!==0){Pd(t,Ra);return}e=t.return;var n=V0(t.alternate,t,ha);if(n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);Ue===0&&(Ue=5)}function Pd(e,t){do{var n=X0(e.alternate,e);if(n!==null){n.flags&=32767,de=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=n}while(e!==null);Ue=6,de=null}function eh(e,t,n,i,l,r,f,m,b){e.cancelPendingCommit=null;do ds();while(nt!==0);if((Se&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=Mr,Np(e,n,r,f,m,b),e===je&&(de=je=null,pe=0),Xn=t,Ma=e,Qn=n,Ho=r,Bo=l,Vd=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ng(yl,function(){return lh(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=C.T,C.T=null,l=H.p,H.p=2,f=Se,Se|=4;try{Q0(e,t,n)}finally{Se=f,H.p=l,C.T=i}}nt=1,th(),ah(),nh()}}function th(){if(nt===1){nt=0;var e=Ma,t=Xn,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=C.T,C.T=null;var i=H.p;H.p=2;var l=Se;Se|=4;try{Ld(t,e);var r=tc,f=ku(e.containerInfo),m=r.focusedElem,b=r.selectionRange;if(f!==m&&m&&m.ownerDocument&&Yu(m.ownerDocument.documentElement,m)){if(b!==null&&jr(m)){var A=b.start,_=b.end;if(_===void 0&&(_=A),"selectionStart"in m)m.selectionStart=A,m.selectionEnd=Math.min(_,m.value.length);else{var D=m.ownerDocument||document,j=D&&D.defaultView||window;if(j.getSelection){var R=j.getSelection(),ne=m.textContent.length,P=Math.min(b.start,ne),Te=b.end===void 0?P:Math.min(b.end,ne);!R.extend&&P>Te&&(f=Te,Te=P,P=f);var z=qu(m,P),$=qu(m,Te);if(z&&$&&(R.rangeCount!==1||R.anchorNode!==z.node||R.anchorOffset!==z.offset||R.focusNode!==$.node||R.focusOffset!==$.offset)){var T=D.createRange();T.setStart(z.node,z.offset),R.removeAllRanges(),P>Te?(R.addRange(T),R.extend($.node,$.offset)):(T.setEnd($.node,$.offset),R.addRange(T))}}}}for(D=[],R=m;R=R.parentNode;)R.nodeType===1&&D.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<D.length;m++){var w=D[m];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}Es=!!ec,tc=ec=null}finally{Se=l,H.p=i,C.T=n}}e.current=t,nt=2}}function ah(){if(nt===2){nt=0;var e=Ma,t=Xn,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=C.T,C.T=null;var i=H.p;H.p=2;var l=Se;Se|=4;try{_d(e,t.alternate,t)}finally{Se=l,H.p=i,C.T=n}}nt=3}}function nh(){if(nt===4||nt===3){nt=0,$p();var e=Ma,t=Xn,n=Qn,i=Vd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?nt=5:(nt=0,Xn=Ma=null,ih(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Na=null),sr(n),t=t.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(ui,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=C.T,l=H.p,H.p=2,C.T=null;try{for(var r=e.onRecoverableError,f=0;f<i.length;f++){var m=i[f];r(m.value,{componentStack:m.stack})}}finally{C.T=t,H.p=l}}(Qn&3)!==0&&ds(),Ft(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===qo?Ki++:(Ki=0,qo=e):Ki=0,Ji(0)}}function ih(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Oi(t)))}function ds(e){return th(),ah(),nh(),lh()}function lh(){if(nt!==5)return!1;var e=Ma,t=Ho;Ho=0;var n=sr(Qn),i=C.T,l=H.p;try{H.p=32>n?32:n,C.T=null,n=Bo,Bo=null;var r=Ma,f=Qn;if(nt=0,Xn=Ma=null,Qn=0,(Se&6)!==0)throw Error(c(331));var m=Se;if(Se|=4,kd(r.current),Bd(r,r.current,f,n),Se=m,Ji(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(ui,r)}catch{}return!0}finally{H.p=l,C.T=i,ih(e,t)}}function sh(e,t,n){t=Mt(n,t),t=vo(e.stateNode,t,2),e=$a(e,t,2),e!==null&&(di(e,2),Ft(e))}function Ae(e,t,n){if(e.tag===3)sh(e,e,n);else for(;t!==null;){if(t.tag===3){sh(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Na===null||!Na.has(i))){e=Mt(n,e),n=ud(2),i=$a(t,n,2),i!==null&&(fd(n,i,t,e),di(i,2),Ft(i));break}}t=t.return}}function Vo(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new J0;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(n)||(wo=!0,l.add(n),e=eg.bind(null,e,t,n),t.then(e,e))}function eg(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,je===e&&(pe&n)===n&&(Ue===4||Ue===3&&(pe&62914560)===pe&&300>Xt()-Lo?(Se&2)===0&&Zn(e,0):Do|=n,Vn===pe&&(Vn=0)),Ft(e)}function rh(e,t){t===0&&(t=au()),e=Rn(e,t),e!==null&&(di(e,t),Ft(e))}function tg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rh(e,n)}function ag(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(c(314))}i!==null&&i.delete(t),rh(e,n)}function ng(e,t){return ar(e,t)}var hs=null,Jn=null,Xo=!1,ms=!1,Qo=!1,rn=0;function Ft(e){e!==Jn&&e.next===null&&(Jn===null?hs=Jn=e:Jn=Jn.next=e),ms=!0,Xo||(Xo=!0,lg())}function Ji(e,t){if(!Qo&&ms){Qo=!0;do for(var n=!1,i=hs;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var r=0;else{var f=i.suspendedLanes,m=i.pingedLanes;r=(1<<31-xt(42|e)+1)-1,r&=l&~(f&~m),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,fh(i,r))}else r=pe,r=xl(i,i===je?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||fi(i,r)||(n=!0,fh(i,r));i=i.next}while(n);Qo=!1}}function ig(){oh()}function oh(){ms=Xo=!1;var e=0;rn!==0&&(hg()&&(e=rn),rn=0);for(var t=Xt(),n=null,i=hs;i!==null;){var l=i.next,r=ch(i,t);r===0?(i.next=null,n===null?hs=l:n.next=l,l===null&&(Jn=n)):(n=i,(e!==0||(r&3)!==0)&&(ms=!0)),i=l}Ji(e)}function ch(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-xt(r),m=1<<f,b=l[f];b===-1?((m&n)===0||(m&i)!==0)&&(l[f]=Cp(m,t)):b<=t&&(e.expiredLanes|=m),r&=~m}if(t=je,n=pe,n=xl(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&($e===2||$e===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&nr(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||fi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&nr(i),sr(n)){case 2:case 8:n=Pc;break;case 32:n=yl;break;case 268435456:n=eu;break;default:n=yl}return i=uh.bind(null,e),n=ar(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&nr(i),e.callbackPriority=2,e.callbackNode=null,2}function uh(e,t){if(nt!==0&&nt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ds()&&e.callbackNode!==n)return null;var i=pe;return i=xl(e,e===je?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Qd(e,i,t),ch(e,Xt()),e.callbackNode!=null&&e.callbackNode===n?uh.bind(null,e):null)}function fh(e,t){if(ds())return null;Qd(e,t,!0)}function lg(){pg(function(){(Se&6)!==0?ar(Ic,ig):oh()})}function Zo(){return rn===0&&(rn=tu()),rn}function dh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Tl(""+e)}function hh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function sg(e,t,n,i,l){if(t==="submit"&&n&&n.stateNode===l){var r=dh((l[dt]||null).action),f=i.submitter;f&&(t=(t=f[dt]||null)?dh(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var m=new Rl("action","action",null,i,l);e.push({event:m,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(rn!==0){var b=f?hh(l,f):new FormData(l);ho(n,{pending:!0,data:b,method:l.method,action:r},null,b)}}else typeof r=="function"&&(m.preventDefault(),b=f?hh(l,f):new FormData(l),ho(n,{pending:!0,data:b,method:l.method,action:r},r,b))},currentTarget:l}]})}}for(var Ko=0;Ko<Nr.length;Ko++){var Jo=Nr[Ko],rg=Jo.toLowerCase(),og=Jo[0].toUpperCase()+Jo.slice(1);Yt(rg,"on"+og)}Yt(Xu,"onAnimationEnd"),Yt(Qu,"onAnimationIteration"),Yt(Zu,"onAnimationStart"),Yt("dblclick","onDoubleClick"),Yt("focusin","onFocus"),Yt("focusout","onBlur"),Yt(T0,"onTransitionRun"),Yt(A0,"onTransitionStart"),Yt(j0,"onTransitionCancel"),Yt(Ku,"onTransitionEnd"),bn("onMouseEnter",["mouseout","mouseover"]),bn("onMouseLeave",["mouseout","mouseover"]),bn("onPointerEnter",["pointerout","pointerover"]),bn("onPointerLeave",["pointerout","pointerover"]),Va("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Va("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Va("onBeforeInput",["compositionend","keypress","textInput","paste"]),Va("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Va("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Va("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fi));function mh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],l=i.event;i=i.listeners;e:{var r=void 0;if(t)for(var f=i.length-1;0<=f;f--){var m=i[f],b=m.instance,A=m.currentTarget;if(m=m.listener,b!==r&&l.isPropagationStopped())break e;r=m,l.currentTarget=A;try{r(l)}catch(_){ts(_)}l.currentTarget=null,r=b}else for(f=0;f<i.length;f++){if(m=i[f],b=m.instance,A=m.currentTarget,m=m.listener,b!==r&&l.isPropagationStopped())break e;r=m,l.currentTarget=A;try{r(l)}catch(_){ts(_)}l.currentTarget=null,r=b}}}}function he(e,t){var n=t[rr];n===void 0&&(n=t[rr]=new Set);var i=e+"__bubble";n.has(i)||(ph(t,e,2,!1),n.add(i))}function Fo(e,t,n){var i=0;t&&(i|=4),ph(n,e,i,t)}var ps="_reactListening"+Math.random().toString(36).slice(2);function Wo(e){if(!e[ps]){e[ps]=!0,ru.forEach(function(n){n!=="selectionchange"&&(cg.has(n)||Fo(n,!1,e),Fo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ps]||(t[ps]=!0,Fo("selectionchange",!1,t))}}function ph(e,t,n,i){switch(Bh(t)){case 2:var l=Ug;break;case 8:l=Lg;break;default:l=fc}n=l.bind(null,t,n,e),l=void 0,!vr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Io(e,t,n,i,l){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var f=i.tag;if(f===3||f===4){var m=i.stateNode.containerInfo;if(m===l)break;if(f===4)for(f=i.return;f!==null;){var b=f.tag;if((b===3||b===4)&&f.stateNode.containerInfo===l)return;f=f.return}for(;m!==null;){if(f=gn(m),f===null)return;if(b=f.tag,b===5||b===6||b===26||b===27){i=r=f;continue e}m=m.parentNode}}i=i.return}Su(function(){var A=r,_=gr(n),D=[];e:{var j=Ju.get(e);if(j!==void 0){var R=Rl,ne=e;switch(e){case"keypress":if(jl(n)===0)break e;case"keydown":case"keyup":R=n0;break;case"focusin":ne="focus",R=$r;break;case"focusout":ne="blur",R=$r;break;case"beforeblur":case"afterblur":R=$r;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Eu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Xp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=s0;break;case Xu:case Qu:case Zu:R=Kp;break;case Ku:R=o0;break;case"scroll":case"scrollend":R=Gp;break;case"wheel":R=u0;break;case"copy":case"cut":case"paste":R=Fp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Au;break;case"toggle":case"beforetoggle":R=d0}var P=(t&4)!==0,Te=!P&&(e==="scroll"||e==="scrollend"),z=P?j!==null?j+"Capture":null:j;P=[];for(var $=A,T;$!==null;){var w=$;if(T=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||T===null||z===null||(w=pi($,z),w!=null&&P.push(Wi($,w,T))),Te)break;$=$.return}0<P.length&&(j=new R(j,ne,null,n,_),D.push({event:j,listeners:P}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",j&&n!==pr&&(ne=n.relatedTarget||n.fromElement)&&(gn(ne)||ne[pn]))break e;if((R||j)&&(j=_.window===_?_:(j=_.ownerDocument)?j.defaultView||j.parentWindow:window,R?(ne=n.relatedTarget||n.toElement,R=A,ne=ne?gn(ne):null,ne!==null&&(Te=d(ne),P=ne.tag,ne!==Te||P!==5&&P!==27&&P!==6)&&(ne=null)):(R=null,ne=A),R!==ne)){if(P=Eu,w="onMouseLeave",z="onMouseEnter",$="mouse",(e==="pointerout"||e==="pointerover")&&(P=Au,w="onPointerLeave",z="onPointerEnter",$="pointer"),Te=R==null?j:mi(R),T=ne==null?j:mi(ne),j=new P(w,$+"leave",R,n,_),j.target=Te,j.relatedTarget=T,w=null,gn(_)===A&&(P=new P(z,$+"enter",ne,n,_),P.target=T,P.relatedTarget=Te,w=P),Te=w,R&&ne)t:{for(P=R,z=ne,$=0,T=P;T;T=Fn(T))$++;for(T=0,w=z;w;w=Fn(w))T++;for(;0<$-T;)P=Fn(P),$--;for(;0<T-$;)z=Fn(z),T--;for(;$--;){if(P===z||z!==null&&P===z.alternate)break t;P=Fn(P),z=Fn(z)}P=null}else P=null;R!==null&&gh(D,j,R,P,!1),ne!==null&&Te!==null&&gh(D,Te,ne,P,!0)}}e:{if(j=A?mi(A):window,R=j.nodeName&&j.nodeName.toLowerCase(),R==="select"||R==="input"&&j.type==="file")var G=wu;else if(Mu(j))if(Du)G=$0;else{G=x0;var ue=b0}else R=j.nodeName,!R||R.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?A&&mr(A.elementType)&&(G=wu):G=S0;if(G&&(G=G(e,A))){_u(D,G,n,_);break e}ue&&ue(e,j,A),e==="focusout"&&A&&j.type==="number"&&A.memoizedProps.value!=null&&hr(j,"number",j.value)}switch(ue=A?mi(A):window,e){case"focusin":(Mu(ue)||ue.contentEditable==="true")&&(An=ue,Or=A,zi=null);break;case"focusout":zi=Or=An=null;break;case"mousedown":Rr=!0;break;case"contextmenu":case"mouseup":case"dragend":Rr=!1,Gu(D,n,_);break;case"selectionchange":if(E0)break;case"keydown":case"keyup":Gu(D,n,_)}var F;if(Er)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Tn?Cu(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(ju&&n.locale!=="ko"&&(Tn||te!=="onCompositionStart"?te==="onCompositionEnd"&&Tn&&(F=$u()):(va=_,br="value"in va?va.value:va.textContent,Tn=!0)),ue=gs(A,te),0<ue.length&&(te=new Tu(te,e,null,n,_),D.push({event:te,listeners:ue}),F?te.data=F:(F=Nu(n),F!==null&&(te.data=F)))),(F=m0?p0(e,n):g0(e,n))&&(te=gs(A,"onBeforeInput"),0<te.length&&(ue=new Tu("onBeforeInput","beforeinput",null,n,_),D.push({event:ue,listeners:te}),ue.data=F)),sg(D,e,A,n,_)}mh(D,t)})}function Wi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gs(e,t){for(var n=t+"Capture",i=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=pi(e,n),l!=null&&i.unshift(Wi(e,l,r)),l=pi(e,t),l!=null&&i.push(Wi(e,l,r))),e.tag===3)return i;e=e.return}return[]}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gh(e,t,n,i,l){for(var r=t._reactName,f=[];n!==null&&n!==i;){var m=n,b=m.alternate,A=m.stateNode;if(m=m.tag,b!==null&&b===i)break;m!==5&&m!==26&&m!==27||A===null||(b=A,l?(A=pi(n,r),A!=null&&f.unshift(Wi(n,A,b))):l||(A=pi(n,r),A!=null&&f.push(Wi(n,A,b)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var ug=/\r\n?/g,fg=/\u0000|\uFFFD/g;function yh(e){return(typeof e=="string"?e:""+e).replace(ug,`
`).replace(fg,"")}function vh(e,t){return t=yh(t),yh(e)===t}function ys(){}function Ee(e,t,n,i,l,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||$n(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&$n(e,""+i);break;case"className":$l(e,"class",i);break;case"tabIndex":$l(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":$l(e,n,i);break;case"style":bu(e,i,r);break;case"data":if(t!=="object"){$l(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Tl(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Ee(e,t,"name",l.name,l,null),Ee(e,t,"formEncType",l.formEncType,l,null),Ee(e,t,"formMethod",l.formMethod,l,null),Ee(e,t,"formTarget",l.formTarget,l,null)):(Ee(e,t,"encType",l.encType,l,null),Ee(e,t,"method",l.method,l,null),Ee(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Tl(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ys);break;case"onScroll":i!=null&&he("scroll",e);break;case"onScrollEnd":i!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Tl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":he("beforetoggle",e),he("toggle",e),Sl(e,"popover",i);break;case"xlinkActuate":ea(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ea(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ea(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ea(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ea(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ea(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ea(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ea(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ea(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Sl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Yp.get(n)||n,Sl(e,n,i))}}function Po(e,t,n,i,l,r){switch(n){case"style":bu(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof i=="string"?$n(e,i):(typeof i=="number"||typeof i=="bigint")&&$n(e,""+i);break;case"onScroll":i!=null&&he("scroll",e);break;case"onScrollEnd":i!=null&&he("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ys);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ou.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),r=e[dt]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,l);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Sl(e,n,i)}}}function it(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var i=!1,l=!1,r;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ee(e,t,r,f,n,null)}}l&&Ee(e,t,"srcSet",n.srcSet,n,null),i&&Ee(e,t,"src",n.src,n,null);return;case"input":he("invalid",e);var m=r=f=l=null,b=null,A=null;for(i in n)if(n.hasOwnProperty(i)){var _=n[i];if(_!=null)switch(i){case"name":l=_;break;case"type":f=_;break;case"checked":b=_;break;case"defaultChecked":A=_;break;case"value":r=_;break;case"defaultValue":m=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(c(137,t));break;default:Ee(e,t,i,_,n,null)}}pu(e,r,m,b,A,f,l,!1),zl(e);return;case"select":he("invalid",e),i=f=r=null;for(l in n)if(n.hasOwnProperty(l)&&(m=n[l],m!=null))switch(l){case"value":r=m;break;case"defaultValue":f=m;break;case"multiple":i=m;default:Ee(e,t,l,m,n,null)}t=r,n=f,e.multiple=!!i,t!=null?Sn(e,!!i,t,!1):n!=null&&Sn(e,!!i,n,!0);return;case"textarea":he("invalid",e),r=l=i=null;for(f in n)if(n.hasOwnProperty(f)&&(m=n[f],m!=null))switch(f){case"value":i=m;break;case"defaultValue":l=m;break;case"children":r=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:Ee(e,t,f,m,n,null)}yu(e,i,l,r),zl(e);return;case"option":for(b in n)if(n.hasOwnProperty(b)&&(i=n[b],i!=null))switch(b){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ee(e,t,b,i,n,null)}return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(i=0;i<Fi.length;i++)he(Fi[i],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(i=n[A],i!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ee(e,t,A,i,n,null)}return;default:if(mr(t)){for(_ in n)n.hasOwnProperty(_)&&(i=n[_],i!==void 0&&Po(e,t,_,i,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(i=n[m],i!=null&&Ee(e,t,m,i,n,null))}function dg(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,f=null,m=null,b=null,A=null,_=null;for(R in n){var D=n[R];if(n.hasOwnProperty(R)&&D!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":b=D;default:i.hasOwnProperty(R)||Ee(e,t,R,null,i,D)}}for(var j in i){var R=i[j];if(D=n[j],i.hasOwnProperty(j)&&(R!=null||D!=null))switch(j){case"type":r=R;break;case"name":l=R;break;case"checked":A=R;break;case"defaultChecked":_=R;break;case"value":f=R;break;case"defaultValue":m=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:R!==D&&Ee(e,t,j,R,i,D)}}dr(e,f,m,b,A,_,r,l);return;case"select":R=f=m=j=null;for(r in n)if(b=n[r],n.hasOwnProperty(r)&&b!=null)switch(r){case"value":break;case"multiple":R=b;default:i.hasOwnProperty(r)||Ee(e,t,r,null,i,b)}for(l in i)if(r=i[l],b=n[l],i.hasOwnProperty(l)&&(r!=null||b!=null))switch(l){case"value":j=r;break;case"defaultValue":m=r;break;case"multiple":f=r;default:r!==b&&Ee(e,t,l,r,i,b)}t=m,n=f,i=R,j!=null?Sn(e,!!n,j,!1):!!i!=!!n&&(t!=null?Sn(e,!!n,t,!0):Sn(e,!!n,n?[]:"",!1));return;case"textarea":R=j=null;for(m in n)if(l=n[m],n.hasOwnProperty(m)&&l!=null&&!i.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Ee(e,t,m,null,i,l)}for(f in i)if(l=i[f],r=n[f],i.hasOwnProperty(f)&&(l!=null||r!=null))switch(f){case"value":j=l;break;case"defaultValue":R=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==r&&Ee(e,t,f,l,i,r)}gu(e,j,R);return;case"option":for(var ne in n)if(j=n[ne],n.hasOwnProperty(ne)&&j!=null&&!i.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Ee(e,t,ne,null,i,j)}for(b in i)if(j=i[b],R=n[b],i.hasOwnProperty(b)&&j!==R&&(j!=null||R!=null))switch(b){case"selected":e.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:Ee(e,t,b,j,i,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in n)j=n[P],n.hasOwnProperty(P)&&j!=null&&!i.hasOwnProperty(P)&&Ee(e,t,P,null,i,j);for(A in i)if(j=i[A],R=n[A],i.hasOwnProperty(A)&&j!==R&&(j!=null||R!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(c(137,t));break;default:Ee(e,t,A,j,i,R)}return;default:if(mr(t)){for(var Te in n)j=n[Te],n.hasOwnProperty(Te)&&j!==void 0&&!i.hasOwnProperty(Te)&&Po(e,t,Te,void 0,i,j);for(_ in i)j=i[_],R=n[_],!i.hasOwnProperty(_)||j===R||j===void 0&&R===void 0||Po(e,t,_,j,i,R);return}}for(var z in n)j=n[z],n.hasOwnProperty(z)&&j!=null&&!i.hasOwnProperty(z)&&Ee(e,t,z,null,i,j);for(D in i)j=i[D],R=n[D],!i.hasOwnProperty(D)||j===R||j==null&&R==null||Ee(e,t,D,j,i,R)}var ec=null,tc=null;function vs(e){return e.nodeType===9?e:e.ownerDocument}function bh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ac(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nc=null;function hg(){var e=window.event;return e&&e.type==="popstate"?e===nc?!1:(nc=e,!0):(nc=null,!1)}var Sh=typeof setTimeout=="function"?setTimeout:void 0,mg=typeof clearTimeout=="function"?clearTimeout:void 0,$h=typeof Promise=="function"?Promise:void 0,pg=typeof queueMicrotask=="function"?queueMicrotask:typeof $h<"u"?function(e){return $h.resolve(null).then(e).catch(gg)}:Sh;function gg(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function zh(e,t){var n=t,i=0,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<i&&8>i){n=i;var f=e.ownerDocument;if(n&1&&Ii(f.documentElement),n&2&&Ii(f.body),n&4)for(n=f.head,Ii(n),f=n.firstChild;f;){var m=f.nextSibling,b=f.nodeName;f[hi]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=m}}if(l===0){e.removeChild(r),sl(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:i=n.charCodeAt(0)-48;else i=0;n=r}while(n);sl(t)}function ic(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ic(n),or(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function yg(e,t,n,i){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[hi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Gt(e.nextSibling),e===null)break}return null}function vg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Gt(e.nextSibling),e===null))return null;return e}function lc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function bg(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var sc=null;function Eh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Th(e,t,n){switch(t=vs(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ii(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);or(e)}var Ht=new Map,Ah=new Set;function bs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ma=H.d;H.d={f:xg,r:Sg,D:$g,C:zg,L:Eg,m:Tg,X:jg,S:Ag,M:Og};function xg(){var e=ma.f(),t=us();return e||t}function Sg(e){var t=yn(e);t!==null&&t.tag===5&&t.type==="form"?Qf(t):ma.r(e)}var Wn=typeof document>"u"?null:document;function jh(e,t,n){var i=Wn;if(i&&typeof t=="string"&&t){var l=Nt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Ah.has(l)||(Ah.add(l),e={rel:e,crossOrigin:n,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),it(t,"link",e),Fe(t),i.head.appendChild(t)))}}function $g(e){ma.D(e),jh("dns-prefetch",e,null)}function zg(e,t){ma.C(e,t),jh("preconnect",e,t)}function Eg(e,t,n){ma.L(e,t,n);var i=Wn;if(i&&e&&t){var l='link[rel="preload"][as="'+Nt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Nt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Nt(n.imageSizes)+'"]')):l+='[href="'+Nt(e)+'"]';var r=l;switch(t){case"style":r=In(e);break;case"script":r=Pn(e)}Ht.has(r)||(e=x({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ht.set(r,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(Pi(r))||t==="script"&&i.querySelector(el(r))||(t=i.createElement("link"),it(t,"link",e),Fe(t),i.head.appendChild(t)))}}function Tg(e,t){ma.m(e,t);var n=Wn;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Nt(i)+'"][href="'+Nt(e)+'"]',r=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Pn(e)}if(!Ht.has(r)&&(e=x({rel:"modulepreload",href:e},t),Ht.set(r,e),n.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(el(r)))return}i=n.createElement("link"),it(i,"link",e),Fe(i),n.head.appendChild(i)}}}function Ag(e,t,n){ma.S(e,t,n);var i=Wn;if(i&&e){var l=vn(i).hoistableStyles,r=In(e);t=t||"default";var f=l.get(r);if(!f){var m={loading:0,preload:null};if(f=i.querySelector(Pi(r)))m.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ht.get(r))&&rc(e,n);var b=f=i.createElement("link");Fe(b),it(b,"link",e),b._p=new Promise(function(A,_){b.onload=A,b.onerror=_}),b.addEventListener("load",function(){m.loading|=1}),b.addEventListener("error",function(){m.loading|=2}),m.loading|=4,xs(f,t,i)}f={type:"stylesheet",instance:f,count:1,state:m},l.set(r,f)}}}function jg(e,t){ma.X(e,t);var n=Wn;if(n&&e){var i=vn(n).hoistableScripts,l=Pn(e),r=i.get(l);r||(r=n.querySelector(el(l)),r||(e=x({src:e,async:!0},t),(t=Ht.get(l))&&oc(e,t),r=n.createElement("script"),Fe(r),it(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function Og(e,t){ma.M(e,t);var n=Wn;if(n&&e){var i=vn(n).hoistableScripts,l=Pn(e),r=i.get(l);r||(r=n.querySelector(el(l)),r||(e=x({src:e,async:!0,type:"module"},t),(t=Ht.get(l))&&oc(e,t),r=n.createElement("script"),Fe(r),it(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function Oh(e,t,n,i){var l=(l=ee.current)?bs(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=In(n.href),n=vn(l).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=In(n.href);var r=vn(l).hoistableStyles,f=r.get(e);if(f||(l=l.ownerDocument||l,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=l.querySelector(Pi(e)))&&!r._p&&(f.instance=r,f.state.loading=5),Ht.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ht.set(e,n),r||Rg(l,e,n,f.state))),t&&i===null)throw Error(c(528,""));return f}if(t&&i!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Pn(n),n=vn(l).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function In(e){return'href="'+Nt(e)+'"'}function Pi(e){return'link[rel="stylesheet"]['+e+"]"}function Rh(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Rg(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),it(t,"link",n),Fe(t),e.head.appendChild(t))}function Pn(e){return'[src="'+Nt(e)+'"]'}function el(e){return"script[async]"+e}function Ch(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Nt(n.href)+'"]');if(i)return t.instance=i,Fe(i),i;var l=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Fe(i),it(i,"style",l),xs(i,n.precedence,e),t.instance=i;case"stylesheet":l=In(n.href);var r=e.querySelector(Pi(l));if(r)return t.state.loading|=4,t.instance=r,Fe(r),r;i=Rh(n),(l=Ht.get(l))&&rc(i,l),r=(e.ownerDocument||e).createElement("link"),Fe(r);var f=r;return f._p=new Promise(function(m,b){f.onload=m,f.onerror=b}),it(r,"link",i),t.state.loading|=4,xs(r,n.precedence,e),t.instance=r;case"script":return r=Pn(n.src),(l=e.querySelector(el(r)))?(t.instance=l,Fe(l),l):(i=n,(l=Ht.get(r))&&(i=x({},n),oc(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),Fe(l),it(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,xs(i,n.precedence,e));return t.instance}function xs(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,r=l,f=0;f<i.length;f++){var m=i[f];if(m.dataset.precedence===t)r=m;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function rc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function oc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ss=null;function Nh(e,t,n){if(Ss===null){var i=new Map,l=Ss=new Map;l.set(n,i)}else l=Ss,i=l.get(n),i||(i=new Map,l.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var r=n[l];if(!(r[hi]||r[st]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var m=i.get(f);m?m.push(r):i.set(f,[r])}}return i}function Mh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Cg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function _h(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var tl=null;function Ng(){}function Mg(e,t,n){if(tl===null)throw Error(c(475));var i=tl;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=In(n.href),r=e.querySelector(Pi(l));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=$s.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=r,Fe(r);return}r=e.ownerDocument||e,n=Rh(n),(l=Ht.get(l))&&rc(n,l),r=r.createElement("link"),Fe(r);var f=r;f._p=new Promise(function(m,b){f.onload=m,f.onerror=b}),it(r,"link",n),t.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=$s.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function _g(){if(tl===null)throw Error(c(475));var e=tl;return e.stylesheets&&e.count===0&&cc(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function $s(){if(this.count--,this.count===0){if(this.stylesheets)cc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var zs=null;function cc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zs=new Map,t.forEach(wg,e),zs=null,$s.call(e))}function wg(e,t){if(!(t.state.loading&4)){var n=zs.get(e);if(n)var i=n.get(null);else{n=new Map,zs.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var f=l[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),i=f)}i&&n.set(null,i)}l=t.instance,f=l.getAttribute("data-precedence"),r=n.get(f)||i,r===i&&n.set(null,l),n.set(f,l),this.count++,i=$s.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var al={$$typeof:W,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Dg(e,t,n,i,l,r,f,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ir(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ir(0),this.hiddenUpdates=ir(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function wh(e,t,n,i,l,r,f,m,b,A,_,D){return e=new Dg(e,t,n,f,m,b,A,D),t=1,r===!0&&(t|=24),r=$t(3,null,null,t),e.current=r,r.stateNode=e,t=Gr(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},Zr(r),e}function Dh(e){return e?(e=Cn,e):Cn}function Uh(e,t,n,i,l,r){l=Dh(l),i.context===null?i.context=l:i.pendingContext=l,i=Sa(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=$a(e,i,t),n!==null&&(jt(n,e,t),Mi(n,e,t))}function Lh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function uc(e,t){Lh(e,t),(e=e.alternate)&&Lh(e,t)}function Hh(e){if(e.tag===13){var t=Rn(e,67108864);t!==null&&jt(t,e,67108864),uc(e,67108864)}}var Es=!0;function Ug(e,t,n,i){var l=C.T;C.T=null;var r=H.p;try{H.p=2,fc(e,t,n,i)}finally{H.p=r,C.T=l}}function Lg(e,t,n,i){var l=C.T;C.T=null;var r=H.p;try{H.p=8,fc(e,t,n,i)}finally{H.p=r,C.T=l}}function fc(e,t,n,i){if(Es){var l=dc(i);if(l===null)Io(e,t,i,Ts,n),qh(e,i);else if(Bg(l,e,t,n,i))i.stopPropagation();else if(qh(e,i),t&4&&-1<Hg.indexOf(e)){for(;l!==null;){var r=yn(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=Ga(r.pendingLanes);if(f!==0){var m=r;for(m.pendingLanes|=2,m.entangledLanes|=2;f;){var b=1<<31-xt(f);m.entanglements[1]|=b,f&=~b}Ft(r),(Se&6)===0&&(os=Xt()+500,Ji(0))}}break;case 13:m=Rn(r,2),m!==null&&jt(m,r,2),us(),uc(r,2)}if(r=dc(i),r===null&&Io(e,t,i,Ts,n),r===l)break;l=r}l!==null&&i.stopPropagation()}else Io(e,t,i,null,n)}}function dc(e){return e=gr(e),hc(e)}var Ts=null;function hc(e){if(Ts=null,e=gn(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ts=e,null}function Bh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zp()){case Ic:return 2;case Pc:return 8;case yl:case Ep:return 32;case eu:return 268435456;default:return 32}default:return 32}}var mc=!1,Da=null,Ua=null,La=null,nl=new Map,il=new Map,Ha=[],Hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qh(e,t){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":nl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":il.delete(t.pointerId)}}function ll(e,t,n,i,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[l]},t!==null&&(t=yn(t),t!==null&&Hh(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Bg(e,t,n,i,l){switch(t){case"focusin":return Da=ll(Da,e,t,n,i,l),!0;case"dragenter":return Ua=ll(Ua,e,t,n,i,l),!0;case"mouseover":return La=ll(La,e,t,n,i,l),!0;case"pointerover":var r=l.pointerId;return nl.set(r,ll(nl.get(r)||null,e,t,n,i,l)),!0;case"gotpointercapture":return r=l.pointerId,il.set(r,ll(il.get(r)||null,e,t,n,i,l)),!0}return!1}function Yh(e){var t=gn(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,Mp(e.priority,function(){if(n.tag===13){var i=At();i=lr(i);var l=Rn(n,i);l!==null&&jt(l,n,i),uc(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function As(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);pr=i,n.target.dispatchEvent(i),pr=null}else return t=yn(n),t!==null&&Hh(t),e.blockedOn=n,!1;t.shift()}return!0}function kh(e,t,n){As(e)&&n.delete(t)}function qg(){mc=!1,Da!==null&&As(Da)&&(Da=null),Ua!==null&&As(Ua)&&(Ua=null),La!==null&&As(La)&&(La=null),nl.forEach(kh),il.forEach(kh)}function js(e,t){e.blockedOn===t&&(e.blockedOn=null,mc||(mc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,qg)))}var Os=null;function Gh(e){Os!==e&&(Os=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Os===e&&(Os=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(hc(i||n)===null)continue;break}var r=yn(n);r!==null&&(e.splice(t,3),t-=3,ho(r,{pending:!0,data:l,method:n.method,action:i},i,l))}}))}function sl(e){function t(b){return js(b,e)}Da!==null&&js(Da,e),Ua!==null&&js(Ua,e),La!==null&&js(La,e),nl.forEach(t),il.forEach(t);for(var n=0;n<Ha.length;n++){var i=Ha[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ha.length&&(n=Ha[0],n.blockedOn===null);)Yh(n),n.blockedOn===null&&Ha.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var l=n[i],r=n[i+1],f=l[dt]||null;if(typeof r=="function")f||Gh(n);else if(f){var m=null;if(r&&r.hasAttribute("formAction")){if(l=r,f=r[dt]||null)m=f.formAction;else if(hc(l)!==null)continue}else m=f.action;typeof m=="function"?n[i+1]=m:(n.splice(i,3),i-=3),Gh(n)}}}function pc(e){this._internalRoot=e}Rs.prototype.render=pc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,i=At();Uh(n,i,e,t,null,null)},Rs.prototype.unmount=pc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Uh(e.current,2,null,e,null,null),us(),t[pn]=null}};function Rs(e){this._internalRoot=e}Rs.prototype.unstable_scheduleHydration=function(e){if(e){var t=lu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ha.length&&t!==0&&t<Ha[n].priority;n++);Ha.splice(n,0,e),n===0&&Yh(e)}};var Vh=s.version;if(Vh!=="19.1.0")throw Error(c(527,Vh,"19.1.0"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=v(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Yg={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cs.isDisabled&&Cs.supportsFiber)try{ui=Cs.inject(Yg),bt=Cs}catch{}}return ol.createRoot=function(e,t){if(!u(e))throw Error(c(299));var n=!1,i="",l=sd,r=rd,f=od,m=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=wh(e,1,!1,null,null,n,i,l,r,f,m,null),e[pn]=t.current,Wo(e),new pc(t)},ol.hydrateRoot=function(e,t,n){if(!u(e))throw Error(c(299));var i=!1,l="",r=sd,f=rd,m=od,b=null,A=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks),n.formState!==void 0&&(A=n.formState)),t=wh(e,1,!0,t,n??null,i,l,r,f,m,b,A),t.context=Dh(null),n=t.current,i=At(),i=lr(i),l=Sa(i),l.callback=null,$a(n,l,i),n=i,t.current.lanes=n,di(t,n),Ft(t),e[pn]=t.current,Wo(e),new Rs(t)},ol.version="19.1.0",ol}var em;function Ig(){if(em)return vc.exports;em=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),vc.exports=Wg(),vc.exports}var Pg=Ig(),tt=function(){return tt=Object.assign||function(s){for(var o,c=1,u=arguments.length;c<u;c++){o=arguments[c];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},tt.apply(this,arguments)};function ni(a,s,o){if(o||arguments.length===2)for(var c=0,u=s.length,d;c<u;c++)(d||!(c in s))&&(d||(d=Array.prototype.slice.call(s,0,c)),d[c]=s[c]);return a.concat(d||Array.prototype.slice.call(s))}var Ce="-ms-",fl="-moz-",xe="-webkit-",km="comm",Js="rule",Xc="decl",e1="@import",Gm="@keyframes",t1="@layer",Vm=Math.abs,Qc=String.fromCharCode,Oc=Object.assign;function a1(a,s){return et(a,0)^45?(((s<<2^et(a,0))<<2^et(a,1))<<2^et(a,2))<<2^et(a,3):0}function Xm(a){return a.trim()}function pa(a,s){return(a=s.exec(a))?a[0]:a}function oe(a,s,o){return a.replace(s,o)}function Ds(a,s,o){return a.indexOf(s,o)}function et(a,s){return a.charCodeAt(s)|0}function ii(a,s,o){return a.slice(s,o)}function Wt(a){return a.length}function Qm(a){return a.length}function ul(a,s){return s.push(a),a}function n1(a,s){return a.map(s).join("")}function tm(a,s){return a.filter(function(o){return!pa(o,s)})}var Fs=1,li=1,Zm=0,qt=0,Xe=0,oi="";function Ws(a,s,o,c,u,d,p,y){return{value:a,root:s,parent:o,type:c,props:u,children:d,line:Fs,column:li,length:p,return:"",siblings:y}}function qa(a,s){return Oc(Ws("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},s)}function ei(a){for(;a.root;)a=qa(a.root,{children:[a]});ul(a,a.siblings)}function i1(){return Xe}function l1(){return Xe=qt>0?et(oi,--qt):0,li--,Xe===10&&(li=1,Fs--),Xe}function Vt(){return Xe=qt<Zm?et(oi,qt++):0,li++,Xe===10&&(li=1,Fs++),Xe}function un(){return et(oi,qt)}function Us(){return qt}function Is(a,s){return ii(oi,a,s)}function Rc(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function s1(a){return Fs=li=1,Zm=Wt(oi=a),qt=0,[]}function r1(a){return oi="",a}function $c(a){return Xm(Is(qt-1,Cc(a===91?a+2:a===40?a+1:a)))}function o1(a){for(;(Xe=un())&&Xe<33;)Vt();return Rc(a)>2||Rc(Xe)>3?"":" "}function c1(a,s){for(;--s&&Vt()&&!(Xe<48||Xe>102||Xe>57&&Xe<65||Xe>70&&Xe<97););return Is(a,Us()+(s<6&&un()==32&&Vt()==32))}function Cc(a){for(;Vt();)switch(Xe){case a:return qt;case 34:case 39:a!==34&&a!==39&&Cc(Xe);break;case 40:a===41&&Cc(a);break;case 92:Vt();break}return qt}function u1(a,s){for(;Vt()&&a+Xe!==57;)if(a+Xe===84&&un()===47)break;return"/*"+Is(s,qt-1)+"*"+Qc(a===47?a:Vt())}function f1(a){for(;!Rc(un());)Vt();return Is(a,qt)}function d1(a){return r1(Ls("",null,null,null,[""],a=s1(a),0,[0],a))}function Ls(a,s,o,c,u,d,p,y,v){for(var g=0,x=0,E=p,N=0,U=0,L=0,V=1,I=1,le=1,J=0,W="",X=u,Y=d,Q=c,k=W;I;)switch(L=J,J=Vt()){case 40:if(L!=108&&et(k,E-1)==58){Ds(k+=oe($c(J),"&","&\f"),"&\f",Vm(g?y[g-1]:0))!=-1&&(le=-1);break}case 34:case 39:case 91:k+=$c(J);break;case 9:case 10:case 13:case 32:k+=o1(L);break;case 92:k+=c1(Us()-1,7);continue;case 47:switch(un()){case 42:case 47:ul(h1(u1(Vt(),Us()),s,o,v),v);break;default:k+="/"}break;case 123*V:y[g++]=Wt(k)*le;case 125*V:case 59:case 0:switch(J){case 0:case 125:I=0;case 59+x:le==-1&&(k=oe(k,/\f/g,"")),U>0&&Wt(k)-E&&ul(U>32?nm(k+";",c,o,E-1,v):nm(oe(k," ","")+";",c,o,E-2,v),v);break;case 59:k+=";";default:if(ul(Q=am(k,s,o,g,x,u,y,W,X=[],Y=[],E,d),d),J===123)if(x===0)Ls(k,s,Q,Q,X,d,E,y,Y);else switch(N===99&&et(k,3)===110?100:N){case 100:case 108:case 109:case 115:Ls(a,Q,Q,c&&ul(am(a,Q,Q,0,0,u,y,W,u,X=[],E,Y),Y),u,Y,E,y,c?X:Y);break;default:Ls(k,Q,Q,Q,[""],Y,0,y,Y)}}g=x=U=0,V=le=1,W=k="",E=p;break;case 58:E=1+Wt(k),U=L;default:if(V<1){if(J==123)--V;else if(J==125&&V++==0&&l1()==125)continue}switch(k+=Qc(J),J*V){case 38:le=x>0?1:(k+="\f",-1);break;case 44:y[g++]=(Wt(k)-1)*le,le=1;break;case 64:un()===45&&(k+=$c(Vt())),N=un(),x=E=Wt(W=k+=f1(Us())),J++;break;case 45:L===45&&Wt(k)==2&&(V=0)}}return d}function am(a,s,o,c,u,d,p,y,v,g,x,E){for(var N=u-1,U=u===0?d:[""],L=Qm(U),V=0,I=0,le=0;V<c;++V)for(var J=0,W=ii(a,N+1,N=Vm(I=p[V])),X=a;J<L;++J)(X=Xm(I>0?U[J]+" "+W:oe(W,/&\f/g,U[J])))&&(v[le++]=X);return Ws(a,s,o,u===0?Js:y,v,g,x,E)}function h1(a,s,o,c){return Ws(a,s,o,km,Qc(i1()),ii(a,2,-2),0,c)}function nm(a,s,o,c,u){return Ws(a,s,o,Xc,ii(a,0,c),ii(a,c+1,-1),c,u)}function Km(a,s,o){switch(a1(a,s)){case 5103:return xe+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return xe+a+a;case 4789:return fl+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return xe+a+fl+a+Ce+a+a;case 5936:switch(et(a,s+11)){case 114:return xe+a+Ce+oe(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return xe+a+Ce+oe(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return xe+a+Ce+oe(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return xe+a+Ce+a+a;case 6165:return xe+a+Ce+"flex-"+a+a;case 5187:return xe+a+oe(a,/(\w+).+(:[^]+)/,xe+"box-$1$2"+Ce+"flex-$1$2")+a;case 5443:return xe+a+Ce+"flex-item-"+oe(a,/flex-|-self/g,"")+(pa(a,/flex-|baseline/)?"":Ce+"grid-row-"+oe(a,/flex-|-self/g,""))+a;case 4675:return xe+a+Ce+"flex-line-pack"+oe(a,/align-content|flex-|-self/g,"")+a;case 5548:return xe+a+Ce+oe(a,"shrink","negative")+a;case 5292:return xe+a+Ce+oe(a,"basis","preferred-size")+a;case 6060:return xe+"box-"+oe(a,"-grow","")+xe+a+Ce+oe(a,"grow","positive")+a;case 4554:return xe+oe(a,/([^-])(transform)/g,"$1"+xe+"$2")+a;case 6187:return oe(oe(oe(a,/(zoom-|grab)/,xe+"$1"),/(image-set)/,xe+"$1"),a,"")+a;case 5495:case 3959:return oe(a,/(image-set\([^]*)/,xe+"$1$`$1");case 4968:return oe(oe(a,/(.+:)(flex-)?(.*)/,xe+"box-pack:$3"+Ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+xe+a+a;case 4200:if(!pa(a,/flex-|baseline/))return Ce+"grid-column-align"+ii(a,s)+a;break;case 2592:case 3360:return Ce+oe(a,"template-","")+a;case 4384:case 3616:return o&&o.some(function(c,u){return s=u,pa(c.props,/grid-\w+-end/)})?~Ds(a+(o=o[s].value),"span",0)?a:Ce+oe(a,"-start","")+a+Ce+"grid-row-span:"+(~Ds(o,"span",0)?pa(o,/\d+/):+pa(o,/\d+/)-+pa(a,/\d+/))+";":Ce+oe(a,"-start","")+a;case 4896:case 4128:return o&&o.some(function(c){return pa(c.props,/grid-\w+-start/)})?a:Ce+oe(oe(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return oe(a,/(.+)-inline(.+)/,xe+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Wt(a)-1-s>6)switch(et(a,s+1)){case 109:if(et(a,s+4)!==45)break;case 102:return oe(a,/(.+:)(.+)-([^]+)/,"$1"+xe+"$2-$3$1"+fl+(et(a,s+3)==108?"$3":"$2-$3"))+a;case 115:return~Ds(a,"stretch",0)?Km(oe(a,"stretch","fill-available"),s,o)+a:a}break;case 5152:case 5920:return oe(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,u,d,p,y,v,g){return Ce+u+":"+d+g+(p?Ce+u+"-span:"+(y?v:+v-+d)+g:"")+a});case 4949:if(et(a,s+6)===121)return oe(a,":",":"+xe)+a;break;case 6444:switch(et(a,et(a,14)===45?18:11)){case 120:return oe(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+xe+(et(a,14)===45?"inline-":"")+"box$3$1"+xe+"$2$3$1"+Ce+"$2box$3")+a;case 100:return oe(a,":",":"+Ce)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return oe(a,"scroll-","scroll-snap-")+a}return a}function qs(a,s){for(var o="",c=0;c<a.length;c++)o+=s(a[c],c,a,s)||"";return o}function m1(a,s,o,c){switch(a.type){case t1:if(a.children.length)break;case e1:case Xc:return a.return=a.return||a.value;case km:return"";case Gm:return a.return=a.value+"{"+qs(a.children,c)+"}";case Js:if(!Wt(a.value=a.props.join(",")))return""}return Wt(o=qs(a.children,c))?a.return=a.value+"{"+o+"}":""}function p1(a){var s=Qm(a);return function(o,c,u,d){for(var p="",y=0;y<s;y++)p+=a[y](o,c,u,d)||"";return p}}function g1(a){return function(s){s.root||(s=s.return)&&a(s)}}function y1(a,s,o,c){if(a.length>-1&&!a.return)switch(a.type){case Xc:a.return=Km(a.value,a.length,o);return;case Gm:return qs([qa(a,{value:oe(a.value,"@","@"+xe)})],c);case Js:if(a.length)return n1(o=a.props,function(u){switch(pa(u,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ei(qa(a,{props:[oe(u,/:(read-\w+)/,":"+fl+"$1")]})),ei(qa(a,{props:[u]})),Oc(a,{props:tm(o,c)});break;case"::placeholder":ei(qa(a,{props:[oe(u,/:(plac\w+)/,":"+xe+"input-$1")]})),ei(qa(a,{props:[oe(u,/:(plac\w+)/,":"+fl+"$1")]})),ei(qa(a,{props:[oe(u,/:(plac\w+)/,Ce+"input-$1")]})),ei(qa(a,{props:[u]})),Oc(a,{props:tm(o,c)});break}return""})}}var v1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ot={},si=typeof process<"u"&&Ot!==void 0&&(Ot.REACT_APP_SC_ATTR||Ot.SC_ATTR)||"data-styled",Jm="active",Fm="data-styled-version",Ps="6.1.19",Zc=`/*!sc*/
`,Ys=typeof window<"u"&&typeof document<"u",b1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ot!==void 0&&Ot.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ot.REACT_APP_SC_DISABLE_SPEEDY!==""?Ot.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ot.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ot!==void 0&&Ot.SC_DISABLE_SPEEDY!==void 0&&Ot.SC_DISABLE_SPEEDY!==""&&Ot.SC_DISABLE_SPEEDY!=="false"&&Ot.SC_DISABLE_SPEEDY),x1={},er=Object.freeze([]),ri=Object.freeze({});function Wm(a,s,o){return o===void 0&&(o=ri),a.theme!==o.theme&&a.theme||s||o.theme}var Im=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),S1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$1=/(^-|-$)/g;function im(a){return a.replace(S1,"-").replace($1,"")}var z1=/(a)(d)/gi,Ns=52,lm=function(a){return String.fromCharCode(a+(a>25?39:97))};function Nc(a){var s,o="";for(s=Math.abs(a);s>Ns;s=s/Ns|0)o=lm(s%Ns)+o;return(lm(s%Ns)+o).replace(z1,"$1-$2")}var zc,Pm=5381,ai=function(a,s){for(var o=s.length;o;)a=33*a^s.charCodeAt(--o);return a},ep=function(a){return ai(Pm,a)};function Kc(a){return Nc(ep(a)>>>0)}function E1(a){return a.displayName||a.name||"Component"}function Ec(a){return typeof a=="string"&&!0}var tp=typeof Symbol=="function"&&Symbol.for,ap=tp?Symbol.for("react.memo"):60115,T1=tp?Symbol.for("react.forward_ref"):60112,A1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},j1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},np={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},O1=((zc={})[T1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zc[ap]=np,zc);function sm(a){return("type"in(s=a)&&s.type.$$typeof)===ap?np:"$$typeof"in a?O1[a.$$typeof]:A1;var s}var R1=Object.defineProperty,C1=Object.getOwnPropertyNames,rm=Object.getOwnPropertySymbols,N1=Object.getOwnPropertyDescriptor,M1=Object.getPrototypeOf,om=Object.prototype;function ip(a,s,o){if(typeof s!="string"){if(om){var c=M1(s);c&&c!==om&&ip(a,c,o)}var u=C1(s);rm&&(u=u.concat(rm(s)));for(var d=sm(a),p=sm(s),y=0;y<u.length;++y){var v=u[y];if(!(v in j1||o&&o[v]||p&&v in p||d&&v in d)){var g=N1(s,v);try{R1(a,v,g)}catch{}}}}return a}function dn(a){return typeof a=="function"}function Jc(a){return typeof a=="object"&&"styledComponentId"in a}function cn(a,s){return a&&s?"".concat(a," ").concat(s):a||s||""}function ks(a,s){if(a.length===0)return"";for(var o=a[0],c=1;c<a.length;c++)o+=a[c];return o}function hl(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function Mc(a,s,o){if(o===void 0&&(o=!1),!o&&!hl(a)&&!Array.isArray(a))return s;if(Array.isArray(s))for(var c=0;c<s.length;c++)a[c]=Mc(a[c],s[c]);else if(hl(s))for(var c in s)a[c]=Mc(a[c],s[c]);return a}function Fc(a,s){Object.defineProperty(a,"toString",{value:s})}function hn(a){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var _1=function(){function a(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return a.prototype.indexOfGroup=function(s){for(var o=0,c=0;c<s;c++)o+=this.groupSizes[c];return o},a.prototype.insertRules=function(s,o){if(s>=this.groupSizes.length){for(var c=this.groupSizes,u=c.length,d=u;s>=d;)if((d<<=1)<0)throw hn(16,"".concat(s));this.groupSizes=new Uint32Array(d),this.groupSizes.set(c),this.length=d;for(var p=u;p<d;p++)this.groupSizes[p]=0}for(var y=this.indexOfGroup(s+1),v=(p=0,o.length);p<v;p++)this.tag.insertRule(y,o[p])&&(this.groupSizes[s]++,y++)},a.prototype.clearGroup=function(s){if(s<this.length){var o=this.groupSizes[s],c=this.indexOfGroup(s),u=c+o;this.groupSizes[s]=0;for(var d=c;d<u;d++)this.tag.deleteRule(c)}},a.prototype.getGroup=function(s){var o="";if(s>=this.length||this.groupSizes[s]===0)return o;for(var c=this.groupSizes[s],u=this.indexOfGroup(s),d=u+c,p=u;p<d;p++)o+="".concat(this.tag.getRule(p)).concat(Zc);return o},a}(),Hs=new Map,Gs=new Map,Bs=1,Ms=function(a){if(Hs.has(a))return Hs.get(a);for(;Gs.has(Bs);)Bs++;var s=Bs++;return Hs.set(a,s),Gs.set(s,a),s},w1=function(a,s){Bs=s+1,Hs.set(a,s),Gs.set(s,a)},D1="style[".concat(si,"][").concat(Fm,'="').concat(Ps,'"]'),U1=new RegExp("^".concat(si,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),L1=function(a,s,o){for(var c,u=o.split(","),d=0,p=u.length;d<p;d++)(c=u[d])&&a.registerName(s,c)},H1=function(a,s){for(var o,c=((o=s.textContent)!==null&&o!==void 0?o:"").split(Zc),u=[],d=0,p=c.length;d<p;d++){var y=c[d].trim();if(y){var v=y.match(U1);if(v){var g=0|parseInt(v[1],10),x=v[2];g!==0&&(w1(x,g),L1(a,x,v[3]),a.getTag().insertRules(g,u)),u.length=0}else u.push(y)}}},cm=function(a){for(var s=document.querySelectorAll(D1),o=0,c=s.length;o<c;o++){var u=s[o];u&&u.getAttribute(si)!==Jm&&(H1(a,u),u.parentNode&&u.parentNode.removeChild(u))}};function B1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var lp=function(a){var s=document.head,o=a||s,c=document.createElement("style"),u=function(y){var v=Array.from(y.querySelectorAll("style[".concat(si,"]")));return v[v.length-1]}(o),d=u!==void 0?u.nextSibling:null;c.setAttribute(si,Jm),c.setAttribute(Fm,Ps);var p=B1();return p&&c.setAttribute("nonce",p),o.insertBefore(c,d),c},q1=function(){function a(s){this.element=lp(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var c=document.styleSheets,u=0,d=c.length;u<d;u++){var p=c[u];if(p.ownerNode===o)return p}throw hn(17)}(this.element),this.length=0}return a.prototype.insertRule=function(s,o){try{return this.sheet.insertRule(o,s),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},a.prototype.getRule=function(s){var o=this.sheet.cssRules[s];return o&&o.cssText?o.cssText:""},a}(),Y1=function(){function a(s){this.element=lp(s),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(s,o){if(s<=this.length&&s>=0){var c=document.createTextNode(o);return this.element.insertBefore(c,this.nodes[s]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},a.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},a}(),k1=function(){function a(s){this.rules=[],this.length=0}return a.prototype.insertRule=function(s,o){return s<=this.length&&(this.rules.splice(s,0,o),this.length++,!0)},a.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},a.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},a}(),um=Ys,G1={isServer:!Ys,useCSSOMInjection:!b1},Vs=function(){function a(s,o,c){s===void 0&&(s=ri),o===void 0&&(o={});var u=this;this.options=tt(tt({},G1),s),this.gs=o,this.names=new Map(c),this.server=!!s.isServer,!this.server&&Ys&&um&&(um=!1,cm(this)),Fc(this,function(){return function(d){for(var p=d.getTag(),y=p.length,v="",g=function(E){var N=function(le){return Gs.get(le)}(E);if(N===void 0)return"continue";var U=d.names.get(N),L=p.getGroup(E);if(U===void 0||!U.size||L.length===0)return"continue";var V="".concat(si,".g").concat(E,'[id="').concat(N,'"]'),I="";U!==void 0&&U.forEach(function(le){le.length>0&&(I+="".concat(le,","))}),v+="".concat(L).concat(V,'{content:"').concat(I,'"}').concat(Zc)},x=0;x<y;x++)g(x);return v}(u)})}return a.registerId=function(s){return Ms(s)},a.prototype.rehydrate=function(){!this.server&&Ys&&cm(this)},a.prototype.reconstructWithOptions=function(s,o){return o===void 0&&(o=!0),new a(tt(tt({},this.options),s),this.gs,o&&this.names||void 0)},a.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(s=function(o){var c=o.useCSSOMInjection,u=o.target;return o.isServer?new k1(u):c?new q1(u):new Y1(u)}(this.options),new _1(s)));var s},a.prototype.hasNameForId=function(s,o){return this.names.has(s)&&this.names.get(s).has(o)},a.prototype.registerName=function(s,o){if(Ms(s),this.names.has(s))this.names.get(s).add(o);else{var c=new Set;c.add(o),this.names.set(s,c)}},a.prototype.insertRules=function(s,o,c){this.registerName(s,o),this.getTag().insertRules(Ms(s),c)},a.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},a.prototype.clearRules=function(s){this.getTag().clearGroup(Ms(s)),this.clearNames(s)},a.prototype.clearTag=function(){this.tag=void 0},a}(),V1=/&/g,X1=/^\s*\/\/.*$/gm;function sp(a,s){return a.map(function(o){return o.type==="rule"&&(o.value="".concat(s," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(s," ")),o.props=o.props.map(function(c){return"".concat(s," ").concat(c)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=sp(o.children,s)),o})}function Q1(a){var s,o,c,u=ri,d=u.options,p=d===void 0?ri:d,y=u.plugins,v=y===void 0?er:y,g=function(N,U,L){return L.startsWith(o)&&L.endsWith(o)&&L.replaceAll(o,"").length>0?".".concat(s):N},x=v.slice();x.push(function(N){N.type===Js&&N.value.includes("&")&&(N.props[0]=N.props[0].replace(V1,o).replace(c,g))}),p.prefix&&x.push(y1),x.push(m1);var E=function(N,U,L,V){U===void 0&&(U=""),L===void 0&&(L=""),V===void 0&&(V="&"),s=V,o=U,c=new RegExp("\\".concat(o,"\\b"),"g");var I=N.replace(X1,""),le=d1(L||U?"".concat(L," ").concat(U," { ").concat(I," }"):I);p.namespace&&(le=sp(le,p.namespace));var J=[];return qs(le,p1(x.concat(g1(function(W){return J.push(W)})))),J};return E.hash=v.length?v.reduce(function(N,U){return U.name||hn(15),ai(N,U.name)},Pm).toString():"",E}var Z1=new Vs,_c=Q1(),rp=Bt.createContext({shouldForwardProp:void 0,styleSheet:Z1,stylis:_c});rp.Consumer;Bt.createContext(void 0);function wc(){return ae.useContext(rp)}var op=function(){function a(s,o){var c=this;this.inject=function(u,d){d===void 0&&(d=_c);var p=c.name+d.hash;u.hasNameForId(c.id,p)||u.insertRules(c.id,p,d(c.rules,p,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=o,Fc(this,function(){throw hn(12,String(c.name))})}return a.prototype.getName=function(s){return s===void 0&&(s=_c),this.name+s.hash},a}(),K1=function(a){return a>="A"&&a<="Z"};function fm(a){for(var s="",o=0;o<a.length;o++){var c=a[o];if(o===1&&c==="-"&&a[0]==="-")return a;K1(c)?s+="-"+c.toLowerCase():s+=c}return s.startsWith("ms-")?"-"+s:s}var cp=function(a){return a==null||a===!1||a===""},up=function(a){var s,o,c=[];for(var u in a){var d=a[u];a.hasOwnProperty(u)&&!cp(d)&&(Array.isArray(d)&&d.isCss||dn(d)?c.push("".concat(fm(u),":"),d,";"):hl(d)?c.push.apply(c,ni(ni(["".concat(u," {")],up(d),!1),["}"],!1)):c.push("".concat(fm(u),": ").concat((s=u,(o=d)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||s in v1||s.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return c};function Ya(a,s,o,c){if(cp(a))return[];if(Jc(a))return[".".concat(a.styledComponentId)];if(dn(a)){if(!dn(d=a)||d.prototype&&d.prototype.isReactComponent||!s)return[a];var u=a(s);return Ya(u,s,o,c)}var d;return a instanceof op?o?(a.inject(o,c),[a.getName(c)]):[a]:hl(a)?up(a):Array.isArray(a)?Array.prototype.concat.apply(er,a.map(function(p){return Ya(p,s,o,c)})):[a.toString()]}function fp(a){for(var s=0;s<a.length;s+=1){var o=a[s];if(dn(o)&&!Jc(o))return!1}return!0}var J1=ep(Ps),F1=function(){function a(s,o,c){this.rules=s,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&fp(s),this.componentId=o,this.baseHash=ai(J1,o),this.baseStyle=c,Vs.registerId(o)}return a.prototype.generateAndInjectStyles=function(s,o,c){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,o,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))u=cn(u,this.staticRulesId);else{var d=ks(Ya(this.rules,s,o,c)),p=Nc(ai(this.baseHash,d)>>>0);if(!o.hasNameForId(this.componentId,p)){var y=c(d,".".concat(p),void 0,this.componentId);o.insertRules(this.componentId,p,y)}u=cn(u,p),this.staticRulesId=p}else{for(var v=ai(this.baseHash,c.hash),g="",x=0;x<this.rules.length;x++){var E=this.rules[x];if(typeof E=="string")g+=E;else if(E){var N=ks(Ya(E,s,o,c));v=ai(v,N+x),g+=N}}if(g){var U=Nc(v>>>0);o.hasNameForId(this.componentId,U)||o.insertRules(this.componentId,U,c(g,".".concat(U),void 0,this.componentId)),u=cn(u,U)}}return u},a}(),ml=Bt.createContext(void 0);ml.Consumer;function W1(a){var s=Bt.useContext(ml),o=ae.useMemo(function(){return function(c,u){if(!c)throw hn(14);if(dn(c)){var d=c(u);return d}if(Array.isArray(c)||typeof c!="object")throw hn(8);return u?tt(tt({},u),c):c}(a.theme,s)},[a.theme,s]);return a.children?Bt.createElement(ml.Provider,{value:o},a.children):null}var Tc={};function I1(a,s,o){var c=Jc(a),u=a,d=!Ec(a),p=s.attrs,y=p===void 0?er:p,v=s.componentId,g=v===void 0?function(X,Y){var Q=typeof X!="string"?"sc":im(X);Tc[Q]=(Tc[Q]||0)+1;var k="".concat(Q,"-").concat(Kc(Ps+Q+Tc[Q]));return Y?"".concat(Y,"-").concat(k):k}(s.displayName,s.parentComponentId):v,x=s.displayName,E=x===void 0?function(X){return Ec(X)?"styled.".concat(X):"Styled(".concat(E1(X),")")}(a):x,N=s.displayName&&s.componentId?"".concat(im(s.displayName),"-").concat(s.componentId):s.componentId||g,U=c&&u.attrs?u.attrs.concat(y).filter(Boolean):y,L=s.shouldForwardProp;if(c&&u.shouldForwardProp){var V=u.shouldForwardProp;if(s.shouldForwardProp){var I=s.shouldForwardProp;L=function(X,Y){return V(X,Y)&&I(X,Y)}}else L=V}var le=new F1(o,N,c?u.componentStyle:void 0);function J(X,Y){return function(Q,k,_e){var Ne=Q.attrs,Qe=Q.componentStyle,vt=Q.defaultProps,Ye=Q.foldedComponentIds,ke=Q.styledComponentId,Le=Q.target,He=Bt.useContext(ml),C=wc(),H=Q.shouldForwardProp||C.shouldForwardProp,Z=Wm(k,He,vt)||ri,se=function(fe,ee,Je){for(var be,lt=tt(tt({},ee),{className:void 0,theme:Je}),ka=0;ka<fe.length;ka+=1){var Pt=dn(be=fe[ka])?be(lt):be;for(var Rt in Pt)lt[Rt]=Rt==="className"?cn(lt[Rt],Pt[Rt]):Rt==="style"?tt(tt({},lt[Rt]),Pt[Rt]):Pt[Rt]}return ee.className&&(lt.className=cn(lt.className,ee.className)),lt}(Ne,k,Z),S=se.as||Le,M={};for(var B in se)se[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&se.theme===Z||(B==="forwardedAs"?M.as=se.forwardedAs:H&&!H(B,S)||(M[B]=se[B]));var q=function(fe,ee){var Je=wc(),be=fe.generateAndInjectStyles(ee,Je.styleSheet,Je.stylis);return be}(Qe,se),K=cn(Ye,ke);return q&&(K+=" "+q),se.className&&(K+=" "+se.className),M[Ec(S)&&!Im.has(S)?"class":"className"]=K,_e&&(M.ref=_e),ae.createElement(S,M)}(W,X,Y)}J.displayName=E;var W=Bt.forwardRef(J);return W.attrs=U,W.componentStyle=le,W.displayName=E,W.shouldForwardProp=L,W.foldedComponentIds=c?cn(u.foldedComponentIds,u.styledComponentId):"",W.styledComponentId=N,W.target=c?u.target:a,Object.defineProperty(W,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(X){this._foldedDefaultProps=c?function(Y){for(var Q=[],k=1;k<arguments.length;k++)Q[k-1]=arguments[k];for(var _e=0,Ne=Q;_e<Ne.length;_e++)Mc(Y,Ne[_e],!0);return Y}({},u.defaultProps,X):X}}),Fc(W,function(){return".".concat(W.styledComponentId)}),d&&ip(W,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),W}function dm(a,s){for(var o=[a[0]],c=0,u=s.length;c<u;c+=1)o.push(s[c],a[c+1]);return o}var hm=function(a){return Object.assign(a,{isCss:!0})};function Oe(a){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];if(dn(a)||hl(a))return hm(Ya(dm(er,ni([a],s,!0))));var c=a;return s.length===0&&c.length===1&&typeof c[0]=="string"?Ya(c):hm(Ya(dm(c,s)))}function Dc(a,s,o){if(o===void 0&&(o=ri),!s)throw hn(1,s);var c=function(u){for(var d=[],p=1;p<arguments.length;p++)d[p-1]=arguments[p];return a(s,o,Oe.apply(void 0,ni([u],d,!1)))};return c.attrs=function(u){return Dc(a,s,tt(tt({},o),{attrs:Array.prototype.concat(o.attrs,u).filter(Boolean)}))},c.withConfig=function(u){return Dc(a,s,tt(tt({},o),u))},c}var dp=function(a){return Dc(I1,a)},O=dp;Im.forEach(function(a){O[a]=dp(a)});var P1=function(){function a(s,o){this.rules=s,this.componentId=o,this.isStatic=fp(s),Vs.registerId(this.componentId+1)}return a.prototype.createStyles=function(s,o,c,u){var d=u(ks(Ya(this.rules,o,c,u)),""),p=this.componentId+s;c.insertRules(p,p,d)},a.prototype.removeStyles=function(s,o){o.clearRules(this.componentId+s)},a.prototype.renderStyles=function(s,o,c,u){s>2&&Vs.registerId(this.componentId+s),this.removeStyles(s,c),this.createStyles(s,o,c,u)},a}();function ey(a){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];var c=Oe.apply(void 0,ni([a],s,!1)),u="sc-global-".concat(Kc(JSON.stringify(c))),d=new P1(c,u),p=function(v){var g=wc(),x=Bt.useContext(ml),E=Bt.useRef(g.styleSheet.allocateGSInstance(u)).current;return g.styleSheet.server&&y(E,v,g.styleSheet,x,g.stylis),Bt.useLayoutEffect(function(){if(!g.styleSheet.server)return y(E,v,g.styleSheet,x,g.stylis),function(){return d.removeStyles(E,g.styleSheet)}},[E,v,g.styleSheet,x,g.stylis]),null};function y(v,g,x,E,N){if(d.isStatic)d.renderStyles(v,x1,x,N);else{var U=tt(tt({},g),{theme:Wm(g,E,p.defaultProps)});d.renderStyles(v,U,x,N)}}return Bt.memo(p)}function ge(a){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];var c=ks(Oe.apply(void 0,ni([a],s,!1))),u=Kc(c);return new op(u,c)}const ty=ey`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${a=>a.theme.fonts.sans};
    background: ${a=>a.theme.colors.bg.primary};
    color: ${a=>a.theme.colors.white};
    line-height: ${a=>a.theme.lineHeights.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, textarea {
    font-family: inherit;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${a=>a.theme.colors.gray900};
  }

  ::-webkit-scrollbar-thumb {
    background: ${a=>a.theme.colors.primary};
    border-radius: ${a=>a.theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${a=>a.theme.colors.primaryLight};
  }

  /* Selection */
  ::selection {
    background: ${a=>a.theme.colors.primary};
    color: ${a=>a.theme.colors.black};
  }

  /* Focus styles */
  *:focus {
    outline: 2px solid ${a=>a.theme.colors.primary};
    outline-offset: 2px;
  }

  /* Hide focus for mouse users */
  .js-focus-visible *:focus:not(.focus-visible) {
    outline: none;
  }
`,on={colors:{black:"#000000",white:"#ffffff",primary:"#10b981",primaryLight:"#34d399",primaryDark:"#059669",gray50:"#f9fafb",gray100:"#f3f4f6",gray200:"#e5e7eb",gray300:"#d1d5db",gray400:"#9ca3af",gray500:"#6b7280",gray600:"#4b5563",gray700:"#374151",gray800:"#1f2937",gray900:"#111827",success:"#10b981",warning:"#fbbf24",error:"#ef4444",info:"#3b82f6",bg:{primary:"#000000",secondary:"rgba(17, 24, 39, 0.5)",card:"rgba(17, 24, 39, 0.3)",overlay:"rgba(0, 0, 0, 0.9)"}},fonts:{mono:'"Courier New", "SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace',sans:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',serif:'"Times New Roman", "Times", serif'},fontSizes:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem"},fontWeights:{thin:"100",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},lineHeights:{none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},space:{0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem",32:"8rem",40:"10rem",48:"12rem",56:"14rem",64:"16rem"},breakpoints:{xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",base:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",glow:"0 0 20px rgba(16, 185, 129, 0.3)",glowStrong:"0 0 40px rgba(16, 185, 129, 0.5)"},borderRadius:{none:"0",sm:"0.125rem",base:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},transitions:{fast:"0.15s ease-in-out",base:"0.3s ease-in-out",slow:"0.5s ease-in-out",slowest:"1s ease-in-out"},zIndex:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},me={xs:`@media (min-width: ${on.breakpoints.xs})`,sm:`@media (min-width: ${on.breakpoints.sm})`,md:`@media (min-width: ${on.breakpoints.md})`,lg:`@media (min-width: ${on.breakpoints.lg})`,xl:`@media (min-width: ${on.breakpoints.xl})`,"2xl":`@media (min-width: ${on.breakpoints["2xl"]})`},mn={typewriter:ge`
    from { width: 0 }
    to { width: 100% }
  `,blink:ge`
    0%, 50% { opacity: 1 }
    51%, 100% { opacity: 0 }
  `,fadeIn:ge`
    from { 
      opacity: 0;
      transform: translateY(20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  `,slideInLeft:ge`
    from { 
      opacity: 0;
      transform: translateX(-30px);
    }
    to { 
      opacity: 1;
      transform: translateX(0);
    }
  `,glitch:ge`
    0% { transform: translate(0) }
    20% { transform: translate(-2px, 2px) }
    40% { transform: translate(-2px, -2px) }
    60% { transform: translate(2px, 2px) }
    80% { transform: translate(2px, -2px) }
    100% { transform: translate(0) }
  `,pulseGlow:ge`
    0%, 100% { 
      box-shadow: 0 0 5px rgba(16, 185, 129, 0.3);
    }
    50% { 
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.8);
    }
  `,float:ge`
    0%, 100% { transform: translateY(0px) }
    50% { transform: translateY(-10px) }
  `,matrixRain:ge`
    0% { transform: translateY(-100vh) }
    100% { transform: translateY(100vh) }
  `},ct={flexCenter:`
    display: flex;
    align-items: center;
    justify-content: center;
  `,terminalText:`
    font-family: 'Courier New', monospace;
    color: #10b981;
    text-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
  `,cardBase:`
    background: rgba(17, 24, 39, 0.5);
    border: 1px solid #374151;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    
    &:hover {
      border-color: #10b981;
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
    }
  `},ay={primary:Oe`
    background: ${a=>a.theme.colors.primary};
    color: ${a=>a.theme.colors.black};
    border: 1px solid ${a=>a.theme.colors.primary};
    
    &:hover:not(:disabled) {
      background: ${a=>a.theme.colors.primaryLight};
      box-shadow: ${a=>a.theme.shadows.glow};
      transform: translateY(-2px);
    }
  `,secondary:Oe`
    background: transparent;
    color: ${a=>a.theme.colors.primary};
    border: 1px solid ${a=>a.theme.colors.primary};
    
    &:hover:not(:disabled) {
      background: ${a=>a.theme.colors.primary};
      color: ${a=>a.theme.colors.black};
      box-shadow: ${a=>a.theme.shadows.glow};
    }
  `,ghost:Oe`
    background: transparent;
    color: ${a=>a.theme.colors.white};
    border: 1px solid transparent;
    
    &:hover:not(:disabled) {
      color: ${a=>a.theme.colors.primary};
      background: rgba(16, 185, 129, 0.1);
    }
  `},ny={small:Oe`
    padding: ${a=>a.theme.space[2]} ${a=>a.theme.space[4]};
    font-size: ${a=>a.theme.fontSizes.sm};
  `,medium:Oe`
    padding: ${a=>a.theme.space[3]} ${a=>a.theme.space[6]};
    font-size: ${a=>a.theme.fontSizes.base};
  `,large:Oe`
    padding: ${a=>a.theme.space[4]} ${a=>a.theme.space[8]};
    font-size: ${a=>a.theme.fontSizes.lg};
  `},iy=O.button`
  ${ct.flexCenter};
  font-family: ${a=>a.theme.fonts.mono};
  font-weight: ${a=>a.theme.fontWeights.bold};
  border-radius: ${a=>a.theme.borderRadius.base};
  transition: ${a=>a.theme.transitions.base};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  ${a=>ay[a.$variant]};
  ${a=>ny[a.$size]};
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
`,ly=O.span`
  ${ct.flexCenter};
  gap: ${a=>a.theme.space[2]};
`,mm=O.span`
  ${ct.flexCenter};
  
  ${a=>a.$position==="left"&&Oe`
    margin-right: ${s=>s.theme.space[2]};
    margin-left: -${s=>s.theme.space[1]};
  `}
  
  ${a=>a.$position==="right"&&Oe`
    margin-left: ${s=>s.theme.space[2]};
    margin-right: -${s=>s.theme.space[1]};
  `}
`,yt=({children:a,variant:s="primary",size:o="medium",icon:c,iconPosition:u="right",loading:d=!1,disabled:p=!1,onClick:y,...v})=>h.jsx(iy,{$variant:s,$size:o,disabled:p||d,onClick:y,...v,children:h.jsxs(ly,{children:[c&&u==="left"&&h.jsx(mm,{$position:"left",children:c}),a,c&&u==="right"&&h.jsx(mm,{$position:"right",children:c})]})});/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ry=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,o,c)=>c?c.toUpperCase():o.toLowerCase()),pm=a=>{const s=ry(a);return s.charAt(0).toUpperCase()+s.slice(1)},hp=(...a)=>a.filter((s,o,c)=>!!s&&s.trim()!==""&&c.indexOf(s)===o).join(" ").trim(),oy=a=>{for(const s in a)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=ae.forwardRef(({color:a="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:c,className:u="",children:d,iconNode:p,...y},v)=>ae.createElement("svg",{ref:v,...cy,width:s,height:s,stroke:a,strokeWidth:c?Number(o)*24/Number(s):o,className:hp("lucide",u),...!d&&!oy(y)&&{"aria-hidden":"true"},...y},[...p.map(([g,x])=>ae.createElement(g,x)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=(a,s)=>{const o=ae.forwardRef(({className:c,...u},d)=>ae.createElement(uy,{ref:d,iconNode:s,className:hp(`lucide-${sy(pm(a))}`,`lucide-${a}`,c),...u}));return o.displayName=pm(a),o};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],dy=Re("arrow-down",fy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],my=Re("arrow-right",hy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],mp=Re("award",py);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],gm=Re("briefcase",gy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],vy=Re("calendar",yy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],xy=Re("chevron-right",by);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Xs=Re("code",Sy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],Uc=Re("coffee",$y);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Ey=Re("external-link",zy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ay=Re("eye",Ty);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Oy=Re("funnel",jy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Cy=Re("github",Ry);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Lc=Re("globe",Ny);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],_y=Re("graduation-cap",My);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Dy=Re("grid-3x3",wy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],Hc=Re("heart",Uy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Hy=Re("linkedin",Ly);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],qy=Re("list",By);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],ym=Re("mail",Yy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Wc=Re("map-pin",ky);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],Vy=Re("plane",Gy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Qy=Re("play",Xy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],vm=Re("quote",Zy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Jy=Re("sparkles",Ky);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Wy=Re("star",Fy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],bm=Re("zap",Iy),Py=(a,s,o,c)=>{const u=[o,{code:s,...c||{}}];if(a?.services?.logger?.forward)return a.services.logger.forward(u,"warn","react-i18next::",!0);fn(u[0])&&(u[0]=`react-i18next:: ${u[0]}`),a?.services?.logger?.warn?a.services.logger.warn(...u):console?.warn&&console.warn(...u)},xm={},Bc=(a,s,o,c)=>{fn(o)&&xm[o]||(fn(o)&&(xm[o]=new Date),Py(a,s,o,c))},pp=(a,s)=>()=>{if(a.isInitialized)s();else{const o=()=>{setTimeout(()=>{a.off("initialized",o)},0),s()};a.on("initialized",o)}},qc=(a,s,o)=>{a.loadNamespaces(s,pp(a,o))},Sm=(a,s,o,c)=>{if(fn(o)&&(o=[o]),a.options.preload&&a.options.preload.indexOf(s)>-1)return qc(a,o,c);o.forEach(u=>{a.options.ns.indexOf(u)<0&&a.options.ns.push(u)}),a.loadLanguages(s,pp(a,c))},ev=(a,s,o={})=>!s.languages||!s.languages.length?(Bc(s,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:s.languages}),!0):s.hasLoadedNamespace(a,{lng:o.lng,precheck:(c,u)=>{if(o.bindI18n?.indexOf("languageChanging")>-1&&c.services.backendConnector.backend&&c.isLanguageChangingTo&&!u(c.isLanguageChangingTo,a))return!1}}),fn=a=>typeof a=="string",tv=a=>typeof a=="object"&&a!==null,av=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,nv={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},iv=a=>nv[a],lv=a=>a.replace(av,iv);let Yc={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:lv};const sv=(a={})=>{Yc={...Yc,...a}},rv=()=>Yc;let gp;const ov=a=>{gp=a},cv=()=>gp,uv={type:"3rdParty",init(a){sv(a.options.react),ov(a)}},fv=ae.createContext();class dv{constructor(){this.usedNamespaces={}}addUsedNamespaces(s){s.forEach(o=>{this.usedNamespaces[o]||(this.usedNamespaces[o]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const hv=(a,s)=>{const o=ae.useRef();return ae.useEffect(()=>{o.current=a},[a,s]),o.current},yp=(a,s,o,c)=>a.getFixedT(s,o,c),mv=(a,s,o,c)=>ae.useCallback(yp(a,s,o,c),[a,s,o,c]),pv=(a,s={})=>{const{i18n:o}=s,{i18n:c,defaultNS:u}=ae.useContext(fv)||{},d=o||c||cv();if(d&&!d.reportNamespaces&&(d.reportNamespaces=new dv),!d){Bc(d,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const X=(Q,k)=>fn(k)?k:tv(k)&&fn(k.defaultValue)?k.defaultValue:Array.isArray(Q)?Q[Q.length-1]:Q,Y=[X,{},!1];return Y.t=X,Y.i18n={},Y.ready=!1,Y}d.options.react?.wait&&Bc(d,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const p={...rv(),...d.options.react,...s},{useSuspense:y,keyPrefix:v}=p;let g=u||d.options?.defaultNS;g=fn(g)?[g]:g||["translation"],d.reportNamespaces.addUsedNamespaces?.(g);const x=(d.isInitialized||d.initializedStoreOnce)&&g.every(X=>ev(X,d,p)),E=mv(d,s.lng||null,p.nsMode==="fallback"?g:g[0],v),N=()=>E,U=()=>yp(d,s.lng||null,p.nsMode==="fallback"?g:g[0],v),[L,V]=ae.useState(N);let I=g.join();s.lng&&(I=`${s.lng}${I}`);const le=hv(I),J=ae.useRef(!0);ae.useEffect(()=>{const{bindI18n:X,bindI18nStore:Y}=p;J.current=!0,!x&&!y&&(s.lng?Sm(d,s.lng,g,()=>{J.current&&V(U)}):qc(d,g,()=>{J.current&&V(U)})),x&&le&&le!==I&&J.current&&V(U);const Q=()=>{J.current&&V(U)};return X&&d?.on(X,Q),Y&&d?.store.on(Y,Q),()=>{J.current=!1,d&&X?.split(" ").forEach(k=>d.off(k,Q)),Y&&d&&Y.split(" ").forEach(k=>d.store.off(k,Q))}},[d,I]),ae.useEffect(()=>{J.current&&x&&V(N)},[d,v,x]);const W=[L,d,x];if(W.t=L,W.i18n=d,W.ready=x,x||!x&&!y)return W;throw new Promise(X=>{s.lng?Sm(d,s.lng,g,()=>X()):qc(d,g,()=>X())})},ci=()=>{const{t:a,i18n:s}=pv(),o=u=>{s.changeLanguage(u)},c=s.language;return{t:a,changeLanguage:o,currentLanguage:c,isSpanish:c==="es",isEnglish:c==="en"}},gv=O.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${a=>a.theme.colors.gray800};
  z-index: ${a=>a.theme.zIndex.sticky};
  transition: ${a=>a.theme.transitions.base};
  
  &:hover {
    background: rgba(0, 0, 0, 0.95);
  }
`,yv=O.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${a=>a.theme.space[4]} ${a=>a.theme.space[6]};
`,vv=O.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,bv=O.button`
  ${ct.terminalText};
  font-family: ${a=>a.theme.fonts.mono};
  font-weight: ${a=>a.theme.fontWeights.bold};
  font-size: ${a=>a.theme.fontSizes.lg};
  transition: ${a=>a.theme.transitions.base};
  cursor: pointer;
  
  &:hover {
    color: ${a=>a.theme.colors.primaryLight};
    text-shadow: 0 0 15px rgba(16, 185, 129, 0.8);
    animation: ${mn.glitch} 0.3s ease-in-out;
  }
`,xv=O.div`
  display: flex;
  align-items: center;
  gap: ${a=>a.theme.space[8]};
  
  ${me.md} {
    gap: ${a=>a.theme.space[6]};
  }
`,Sv=O.button`
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes.sm};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: ${a=>a.theme.transitions.base};
  position: relative;
  padding: ${a=>a.theme.space[2]} 0;
  
  color: ${a=>a.$active?a.theme.colors.primary:a.theme.colors.gray400};
  
  &:hover {
    color: ${a=>a.theme.colors.white};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${a=>a.$active?"100%":"0"};
    height: 2px;
    background: ${a=>a.theme.colors.primary};
    transition: ${a=>a.theme.transitions.base};
  }
  
  &:hover::after {
    width: 100%;
  }
`,$v=O.button`
  ${ct.flexCenter};
  gap: ${a=>a.theme.space[2]};
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes.xs};
  color: ${a=>a.theme.colors.gray400};
  transition: ${a=>a.theme.transitions.base};
  padding: ${a=>a.theme.space[2]};
  border-radius: ${a=>a.theme.borderRadius.base};
  
  &:hover {
    color: ${a=>a.theme.colors.primary};
    background: rgba(16, 185, 129, 0.1);
  }
`,zv=({currentSection:a,onSectionChange:s})=>{const{t:o,changeLanguage:c,currentLanguage:u}=ci(),d=[{key:"home",label:o("navigation.home")},{key:"laboratory",label:o("navigation.laboratory")},{key:"manifesto",label:o("navigation.manifesto")},{key:"about",label:o("navigation.about")}],p=()=>{c(u==="es"?"en":"es")};return h.jsx(gv,{children:h.jsx(yv,{children:h.jsxs(vv,{children:[h.jsx(bv,{onClick:()=>s("home"),children:"CARLOS_RENDÓN"}),h.jsxs(xv,{children:[d.map(({key:y,label:v})=>h.jsx(Sv,{$active:a===y,onClick:()=>s(y),children:v},y)),h.jsxs($v,{onClick:p,children:[h.jsx(Lc,{size:16}),u.toUpperCase()]})]})]})})})},Ev=O.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,Tv=O.main`
  flex: 1;
  padding-top: 5rem; /* Account for fixed navigation */
  padding-left: ${a=>a.theme.space[6]};
  padding-right: ${a=>a.theme.space[6]};
  
  ${me.lg} {
    padding-left: ${a=>a.theme.space[8]};
    padding-right: ${a=>a.theme.space[8]};
  }
`,Av=O.footer`
  border-top: 1px solid ${a=>a.theme.colors.gray800};
  margin-top: ${a=>a.theme.space[20]};
  padding: ${a=>a.theme.space[8]} ${a=>a.theme.space[6]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ${me.md} {
    flex-direction: row;
  }
  
  flex-direction: column;
  gap: ${a=>a.theme.space[4]};
`,$m=O.div`
  font-family: ${a=>a.theme.fonts.mono};
  color: ${a=>a.theme.colors.gray500};
  font-size: ${a=>a.theme.fontSizes.sm};
`,jv=({children:a,currentSection:s,onSectionChange:o})=>(ci(),h.jsxs(Ev,{children:[h.jsx(zv,{currentSection:s,onSectionChange:o}),h.jsx(Tv,{children:a}),h.jsxs(Av,{children:[h.jsx($m,{children:'$ echo "2024 - Carlos Rendón"'}),h.jsx($m,{children:"construyendo_puentes_narrativos.exe"})]})]})),Ov=(a,s=100,o=0)=>{const[c,u]=ae.useState(""),[d,p]=ae.useState(!1),[y,v]=ae.useState(!1);return ae.useEffect(()=>{u(""),p(!1),v(!1);const x=setTimeout(()=>{p(!0);let E=0;const N=setInterval(()=>{E<a.length?(u(a.slice(0,E+1)),E++):(p(!1),v(!0),clearInterval(N))},s);return()=>clearInterval(N)},o);return()=>clearTimeout(x)},[a,s,o]),{displayedText:c,isTyping:d,isComplete:y}},Rv=ge`
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
`,Cv=O.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
`,Nv=O.div.attrs(a=>({style:{left:`${a.$left}%`,width:`${a.$size}px`,height:`${a.$size}px`,opacity:a.$opacity,animationDelay:`${a.$delay}s`,animationDuration:`${a.$duration}s`}}))`
  position: absolute;
  background: ${a=>a.theme.colors.primary};
  border-radius: 50%;
  animation: ${Rv} linear infinite;
  box-shadow: 0 0 6px ${a=>a.theme.colors.primary};
`,Mv=({count:a=30})=>{const s=ae.useMemo(()=>Array.from({length:a},(o,c)=>({id:c,delay:Math.random()*20,duration:15+Math.random()*15,size:1+Math.random()*2,left:Math.random()*100,opacity:.2+Math.random()*.5})),[a]);return h.jsx(Cv,{children:s.map(o=>h.jsx(Nv,{$delay:o.delay,$duration:o.duration,$size:o.size,$left:o.left,$opacity:o.opacity},o.id))})},_v=O.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`,wv=()=>{const a=ae.useRef(null),s=ae.useRef(null),o=ae.useRef([]);return ae.useEffect(()=>{const c=a.current;if(!c)return;const u=c.getContext("2d");let d,p;const y=()=>{d=c.width=window.innerWidth,p=c.height=window.innerHeight,o.current=Array.from({length:15},()=>({x:Math.random()*d,y:Math.random()*p,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,radius:1.5+Math.random()*2}))};let v=0;const g=()=>{if(v++,v%2!==0){s.current=requestAnimationFrame(g);return}u.clearRect(0,0,d,p),o.current.forEach((E,N)=>{E.x+=E.vx,E.y+=E.vy,(E.x<0||E.x>d)&&(E.vx*=-1),(E.y<0||E.y>p)&&(E.vy*=-1),E.x=Math.max(0,Math.min(d,E.x)),E.y=Math.max(0,Math.min(p,E.y)),o.current.slice(N+1,N+4).forEach(U=>{const L=E.x-U.x,V=E.y-U.y,I=Math.sqrt(L*L+V*V);if(I<120){const le=(120-I)/120*.2;u.strokeStyle=`rgba(16, 185, 129, ${le})`,u.lineWidth=.5,u.beginPath(),u.moveTo(E.x,E.y),u.lineTo(U.x,U.y),u.stroke()}}),u.fillStyle="rgba(16, 185, 129, 0.4)",u.beginPath(),u.arc(E.x,E.y,E.radius,0,Math.PI*2),u.fill()}),s.current=requestAnimationFrame(g)};y(),g();const x=()=>y();return window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x),s.current&&cancelAnimationFrame(s.current)}},[]),h.jsx(_v,{ref:a})},Dv=ge`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
`,Uv=ge`
  0%, 90%, 100% { transform: translate(0); }
  10% { transform: translate(-2px, -1px); }
  20% { transform: translate(2px, 1px); }
  30% { transform: translate(-1px, 2px); }
  40% { transform: translate(1px, -2px); }
  50% { transform: translate(-2px, 1px); }
  60% { transform: translate(2px, -1px); }
  70% { transform: translate(-1px, -2px); }
  80% { transform: translate(1px, 2px); }
`,Lv=O.section`
  position: relative;
  min-height: 100vh;
  ${ct.flexCenter};
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  padding: ${a=>a.theme.space[8]} 0;
`,Hv=O.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`,Bv=O.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  width: 100%;
  padding: 0 ${a=>a.theme.space[6]};
  
  animation: ${mn.fadeIn} 1s ease-out;
`,qv=O.div`
  ${ct.terminalText};
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes.lg};
  margin-bottom: ${a=>a.theme.space[4]};
  animation: ${mn.fadeIn} 0.8s ease-out 0.2s both;
  
  ${me.md} {
    font-size: ${a=>a.theme.fontSizes.xl};
  }
`,Yv=O.h1`
  font-size: ${a=>a.theme.fontSizes["4xl"]};
  font-weight: ${a=>a.theme.fontWeights.bold};
  color: ${a=>a.theme.colors.white};
  margin-bottom: ${a=>a.theme.space[6]};
  animation: ${mn.fadeIn} 1s ease-out 0.4s both;
  transition: ${a=>a.theme.transitions.base};
  
  ${me.md} {
    font-size: ${a=>a.theme.fontSizes["6xl"]};
  }
  
  &:hover {
    animation: ${Uv} 0.3s ease-in-out;
    text-shadow: 
      0 0 5px ${a=>a.theme.colors.primary},
      0 0 10px ${a=>a.theme.colors.primary},
      0 0 15px ${a=>a.theme.colors.primary};
  }
`,kv=O.div`
  ${ct.flexCenter};
  margin-bottom: ${a=>a.theme.space[8]};
  min-height: 3rem;
  
  ${me.md} {
    min-height: 4rem;
  }
`,Gv=O.span`
  ${ct.terminalText};
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes.xl};
  font-weight: ${a=>a.theme.fontWeights.medium};
  
  ${me.md} {
    font-size: ${a=>a.theme.fontSizes["2xl"]};
  }
`,Vv=O.span`
  ${ct.terminalText};
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes.xl};
  animation: ${a=>a.$isTyping?mn.blink:"none"} 1s infinite;
  
  ${me.md} {
    font-size: ${a=>a.theme.fontSizes["2xl"]};
  }
`,Xv=O.p`
  font-size: ${a=>a.theme.fontSizes.lg};
  color: ${a=>a.theme.colors.gray300};
  line-height: ${a=>a.theme.lineHeights.relaxed};
  margin-bottom: ${a=>a.theme.space[8]};
  animation: ${mn.fadeIn} 1s ease-out 0.8s both;
  
  ${me.md} {
    font-size: ${a=>a.theme.fontSizes.xl};
  }
`,Qv=O.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.theme.space[4]};
  animation: ${mn.fadeIn} 1s ease-out 1s both;
  
  ${me.sm} {
    flex-direction: row;
    justify-content: center;
  }
`,Zv=O.div`
  position: absolute;
  bottom: ${a=>a.theme.space[8]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  
  div {
    width: 2px;
    height: 30px;
    background: ${a=>a.theme.colors.primary};
    border-radius: ${a=>a.theme.borderRadius.full};
    animation: ${Dv} 2s infinite;
    box-shadow: 0 0 10px ${a=>a.theme.colors.primary};
  }
`,zm=({onNavigate:a})=>{const{t:s}=ci(),{displayedText:o,isTyping:c}=Ov(s("hero.tagline"),80,1e3);return h.jsxs(Lv,{children:[h.jsxs(Hv,{children:[h.jsx(wv,{}),h.jsx(Mv,{count:20})," "]}),h.jsxs(Bv,{children:[h.jsx(qv,{children:s("hero.whoami")}),h.jsx(Yv,{children:s("hero.name")}),h.jsxs(kv,{children:[h.jsx(Gv,{children:o}),h.jsx(Vv,{$isTyping:c,children:"_"})]}),h.jsx(Xv,{children:s("hero.description")}),h.jsxs(Qv,{children:[h.jsx(yt,{variant:"primary",size:"large",icon:h.jsx(my,{size:20}),onClick:()=>a("laboratory"),children:s("hero.exploreButton")}),h.jsx(yt,{variant:"secondary",size:"large",onClick:()=>a("manifesto"),children:s("hero.bridgesButton")})]})]}),h.jsx(Zv,{children:h.jsx("div",{})})]})},Kv=ge`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,Jv=ge`
  0%, 100% {
    box-shadow: 0 0 5px rgba(16, 185, 129, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
  }
`,Fv=O.div`
  ${ct.cardBase};
  position: relative;
  height: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
  overflow: hidden;
  
  ${a=>a.$isHovered&&Oe`
    transform: translateY(-8px);
    border-color: ${s=>s.$primaryColor};
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 0 30px ${s=>s.$primaryColor}40;
  `}
`,Wv=O.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: ${a=>a.$color};
  opacity: 0.8;
`,Iv=O.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${a=>a.theme.space[6]};
  padding-bottom: ${a=>a.theme.space[4]};
`,Pv=O.h3`
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes.xl};
  font-weight: ${a=>a.theme.fontWeights.bold};
  color: ${a=>a.theme.colors.white};
  margin-bottom: ${a=>a.theme.space[1]};
`,eb=O.p`
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes.sm};
  color: ${a=>a.theme.colors.primary};
`,tb=O.span`
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes.xs};
  padding: ${a=>a.theme.space[1]} ${a=>a.theme.space[2]};
  border-radius: ${a=>a.theme.borderRadius.base};
  border: 1px solid currentColor;
  
  ${a=>{switch(a.$status){case"LIVE":return Oe`
          color: ${s=>s.theme.colors.success};
          background: rgba(16, 185, 129, 0.1);
          animation: ${Jv} 2s infinite;
        `;case"BETA":return Oe`
          color: ${s=>s.theme.colors.warning};
          background: rgba(251, 191, 36, 0.1);
        `;case"PRÓXIMAMENTE":case"DESARROLLO":return Oe`
          color: ${s=>s.theme.colors.info};
          background: rgba(59, 130, 246, 0.1);
        `;default:return Oe`
          color: ${s=>s.theme.colors.gray400};
          background: rgba(156, 163, 175, 0.1);
        `}}}
`,ab=O.div`
  padding: 0 ${a=>a.theme.space[6]};
  flex: 1;
`,nb=O.p`
  color: ${a=>a.theme.colors.gray300};
  line-height: ${a=>a.theme.lineHeights.relaxed};
  margin-bottom: ${a=>a.theme.space[4]};
`,ib=O.div`
  height: ${a=>a.$isVisible?"120px":"0"};
  opacity: ${a=>a.$isVisible?1:0};
  margin-bottom: ${a=>a.$isVisible?a.theme.space[4]:0};
  transition: all 0.3s ease;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${a=>a.theme.borderRadius.base};
  border: 1px solid ${a=>a.theme.colors.gray700};
`,lb=O.div`
  padding: ${a=>a.theme.space[3]};
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes.sm};
  color: ${a=>a.theme.colors.primary};
  height: 100%;
  overflow: auto;
  
  pre {
    margin: 0;
    white-space: pre-wrap;
  }
  
  .form-line {
    margin-bottom: ${a=>a.theme.space[1]};
    
    &:last-child {
      color: ${a=>a.theme.colors.gray400};
      font-style: italic;
    }
  }
  
  .poetry-line {
    margin-bottom: ${a=>a.theme.space[2]};
    animation: ${Kv} 0.5s ease-out;
    
    &:last-child {
      color: ${a=>a.theme.colors.gray400};
      cursor: pointer;
      
      &:hover {
        color: ${a=>a.theme.colors.primary};
      }
    }
  }
  
  .bridges-preview {
    ${ct.flexCenter};
    height: 100%;
    font-size: ${a=>a.theme.fontSizes.lg};
  }
`,sb=O.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${a=>a.theme.space[2]};
  margin-bottom: ${a=>a.theme.space[4]};
`,rb=O.span`
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes.xs};
  color: ${a=>a.theme.colors.gray400};
  background: ${a=>a.theme.colors.gray800};
  padding: ${a=>a.theme.space[1]} ${a=>a.theme.space[2]};
  border-radius: ${a=>a.theme.borderRadius.base};
  transition: ${a=>a.theme.transitions.base};
  
  &:hover {
    background: ${a=>a.theme.colors.gray700};
    color: ${a=>a.theme.colors.primary};
  }
`,ob=O.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${a=>a.theme.space[6]};
  padding-top: ${a=>a.theme.space[4]};
  border-top: 1px solid ${a=>a.theme.colors.gray800};
`,cb=O.span`
  font-family: ${a=>a.theme.fonts.mono};
  color: ${a=>a.theme.colors.gray500};
  font-size: ${a=>a.theme.fontSizes.sm};
`,ub=O.div`
  display: flex;
  gap: ${a=>a.theme.space[2]};
  
  ${me.sm} {
    gap: ${a=>a.theme.space[3]};
  }
`,fb=O.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(16, 185, 129, 0.05) 0%,
    transparent 50%,
    rgba(16, 185, 129, 0.02) 100%
  );
  opacity: ${a=>a.$isVisible?1:0};
  transition: opacity 0.3s ease;
  pointer-events: none;
`,db=({project:a,onViewDetails:s})=>{const[o,c]=ae.useState(!1),u=()=>{switch(a.preview.type){case"text":return h.jsx("pre",{children:a.preview.content});case"form":return h.jsx("div",{className:"form-preview",children:a.preview.content.split(`
`).map((d,p)=>h.jsx("div",{className:"form-line",children:d},p))});case"poetry":return h.jsx("div",{className:"poetry-preview",children:a.preview.content.split(`
`).map((d,p)=>h.jsx("div",{className:"poetry-line",children:d},p))});case"bridges":return h.jsx("div",{className:"bridges-preview",children:h.jsx("pre",{children:a.preview.content})});default:return h.jsx("div",{children:"Preview not available"})}};return h.jsxs(Fv,{onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),$isHovered:o,$primaryColor:a.colors.primary,children:[h.jsx(Wv,{$color:a.colors.primary}),h.jsxs(Iv,{children:[h.jsxs("div",{children:[h.jsx(Pv,{children:a.title}),h.jsx(eb,{children:a.subtitle})]}),h.jsx(tb,{$status:a.status,children:a.status})]}),h.jsxs(ab,{children:[h.jsx(nb,{children:a.description}),h.jsx(ib,{$isVisible:o,children:h.jsx(lb,{$previewType:a.preview.type,children:u()})}),h.jsx(sb,{children:a.tech.map(d=>h.jsx(rb,{children:d},d))})]}),h.jsxs(ob,{children:[h.jsx(cb,{children:a.year}),h.jsxs(ub,{children:[a.status==="LIVE"&&h.jsx(yt,{variant:"ghost",size:"small",icon:h.jsx(Qy,{size:16}),onClick:()=>window.open("#","_blank"),children:"Demo"}),h.jsx(yt,{variant:"ghost",size:"small",icon:h.jsx(Ay,{size:16}),onClick:()=>s(a),children:"Ver más"}),a.status==="LIVE"&&h.jsx(yt,{variant:"primary",size:"small",icon:h.jsx(Ey,{size:16}),onClick:()=>window.open("#","_blank"),children:"Explorar"})]})]}),h.jsx(fb,{$isVisible:o})]})},hb={fragmentado:{id:"fragmentado",title:"FRAGMENTADO",subtitle:"Novela Interactiva",description:"Una historia en tres actos sobre la pérdida de la humanidad. Narrativa interactiva que explora el control, la memoria implantada y el genocidio tecnológico.",longDescription:"Fragmentado es una exploración profunda sobre qué significa ser humano en una era donde la tecnología redefine la existencia. A través de decisiones interactivas, el lector navega un futuro distópico donde las corporaciones han fragmentado la humanidad.",status:"LIVE",category:"interactive-fiction",tech:["React","Interactive Fiction","AI Themes"],year:"2024",featured:!0,colors:{primary:"#ef4444",secondary:"#dc2626"},preview:{type:"text",content:`> Iniciar sesión...
> Cargando memoria...
> ERROR: Fragmento corrupto
> ¿Continuar?`}},form80:{id:"form80",title:"FORM 80",subtitle:"Poema Interactivo",description:"Transformación de un formulario migratorio en poesía interactiva. Los versos emergen de la interacción con campos burocráticos.",longDescription:"Form 80 convierte la experiencia migratoria en una poesía viva. Cada campo del formulario se transforma en verso, cada click revela la humanidad detrás de la burocracia.",status:"BETA",category:"interactive-poetry",tech:["React","Interactive Poetry","Multimedia"],year:"2024",featured:!1,colors:{primary:"#f59e0b",secondary:"#d97706"},preview:{type:"form",content:`Nombre: [________]
Apellido: [________]
> Los espacios en blanco
> son poemas esperando
> a ser escritos...`}},bridges:{id:"4puentes",title:"4 PUENTES",subtitle:"Framework Conceptual",description:"Manifiesto creativo donde cada puente conecta mundos: Crear, Conectar, Transformar, Expandir.",longDescription:"Los 4 Puentes es más que un manifiesto: es una filosofía de vida aplicada al arte digital. Cada puente representa una forma de resistencia contra la fragmentación del mundo contemporáneo.",status:"CONCEPT",category:"philosophy",tech:["Philosophy","Narrative Framework","Transmedia"],year:"2024",featured:!1,colors:{primary:"#10b981",secondary:"#059669"},preview:{type:"bridges",content:`CREAR → CONECTAR
   ↑         ↓
EXPANDIR ← TRANSFORMAR`}},merma:{id:"merma",title:"ÍNDICE DE MERMA",subtitle:"Obra Transmedia",description:"Formulario de evaluación residual en un futuro donde la vida se contabiliza por partes. Múltiples finales en diferentes formatos.",longDescription:"Índice de Merma es una experiencia transmedia que cuestiona el valor humano en un sistema que cuantifica la existencia. QR codes llevan a finales alternativos en diferentes medios.",status:"PRÓXIMAMENTE",category:"transmedia",tech:["Transmedia","Interactive Fiction","QR Integration"],year:"2025",featured:!0,colors:{primary:"#3b82f6",secondary:"#2563eb"},preview:{type:"form",content:`EVALUACIÓN RESIDUAL
□ Útil
□ Parcialmente útil
□ Sin valor
> Procesando...`}},zonaTrasito:{id:"zona-transito",title:"ZONA DE TRÁNSITO",subtitle:"Poemario Interactivo",description:"Poemas que exploran la experiencia migratoria, el estar entre mundos, la identidad fragmentada.",longDescription:"Zona de Tránsito captura la experiencia del inmigrante en versos interactivos. Cada poema puede ser explorado de múltiples formas, reflejando la naturaleza fragmentaria de la identidad en movimiento.",status:"DESARROLLO",category:"interactive-poetry",tech:["Interactive Poetry","Multimedia","Animation"],year:"2024",featured:!1,colors:{primary:"#8b5cf6",secondary:"#7c3aed"},preview:{type:"poetry",content:`En los ojos negros
de los cuervos
veo a Medellín...

[Click para continuar]`}}},mb={all:{name:"Todos",icon:"∀"},"interactive-fiction":{name:"Ficción Interactiva",icon:"📖"},"interactive-poetry":{name:"Poesía Interactiva",icon:"✨"},transmedia:{name:"Transmedia",icon:"🌐"},philosophy:{name:"Filosofía",icon:"🧠"}},pb=ge`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,gb=ge`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;ge`
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
`;const yb=O.section`
  padding: ${a=>a.theme.space[16]} 0;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`,vb=O.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${a=>a.theme.space[12]};
  gap: ${a=>a.theme.space[8]};
  
  ${me.md} {
    flex-direction: column;
    align-items: flex-start;
  }
`,bb=O.h1`
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes["4xl"]};
  font-weight: ${a=>a.theme.fontWeights.bold};
  color: ${a=>a.theme.colors.white};
  margin-bottom: ${a=>a.theme.space[4]};
  
  ${me.lg} {
    font-size: ${a=>a.theme.fontSizes["5xl"]};
  }
`,xb=O.p`
  font-size: ${a=>a.theme.fontSizes.lg};
  color: ${a=>a.theme.colors.gray300};
  line-height: ${a=>a.theme.lineHeights.relaxed};
  max-width: 600px;
  
  ${me.xl} {
    font-size: ${a=>a.theme.fontSizes.xl};
  }
`,Sb=O.div`
  display: flex;
  gap: ${a=>a.theme.space[6]};
  
  ${me.md} {
    margin-top: ${a=>a.theme.space[6]};
  }
`,_s=O.div`
  text-align: center;
  
  .number {
    display: block;
    font-family: ${a=>a.theme.fonts.mono};
    font-size: ${a=>a.theme.fontSizes["2xl"]};
    font-weight: ${a=>a.theme.fontWeights.bold};
    color: ${a=>a.theme.colors.primary};
    line-height: 1;
  }
  
  .label {
    display: block;
    font-family: ${a=>a.theme.fonts.mono};
    font-size: ${a=>a.theme.fontSizes.xs};
    color: ${a=>a.theme.colors.gray400};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: ${a=>a.theme.space[1]};
  }
`,$b=O.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${a=>a.theme.space[8]};
  gap: ${a=>a.theme.space[4]};
  
  ${me.lg} {
    flex-direction: column;
    align-items: stretch;
  }
`,zb=O.div`
  display: flex;
  gap: ${a=>a.theme.space[2]};
  flex-wrap: wrap;
  
  ${me.lg} {
    justify-content: center;
    margin-bottom: ${a=>a.theme.space[4]};
  }
`,Eb=O.button`
  ${ct.flexCenter};
  gap: ${a=>a.theme.space[2]};
  padding: ${a=>a.theme.space[3]} ${a=>a.theme.space[4]};
  border-radius: ${a=>a.theme.borderRadius.lg};
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes.sm};
  transition: ${a=>a.theme.transitions.base};
  position: relative;
  overflow: hidden;
  
  ${a=>a.$isActive?Oe`
    background: ${s=>s.theme.colors.primary};
    color: ${s=>s.theme.colors.black};
    box-shadow: ${s=>s.theme.shadows.glow};
  `:Oe`
    background: transparent;
    color: ${s=>s.theme.colors.gray400};
    border: 1px solid ${s=>s.theme.colors.gray700};
    
    &:hover {
      color: ${s=>s.theme.colors.white};
      border-color: ${s=>s.theme.colors.primary};
      background: rgba(16, 185, 129, 0.1);
    }
  `}
  
  .icon {
    font-size: ${a=>a.theme.fontSizes.lg};
  }
  
  .name {
    font-weight: ${a=>a.theme.fontWeights.medium};
  }
  
  .count {
    background: ${a=>a.$isActive?"rgba(0, 0, 0, 0.2)":"rgba(16, 185, 129, 0.2)"};
    color: ${a=>a.$isActive?a.theme.colors.black:a.theme.colors.primary};
    padding: ${a=>a.theme.space[1]} ${a=>a.theme.space[2]};
    border-radius: ${a=>a.theme.borderRadius.full};
    font-size: ${a=>a.theme.fontSizes.xs};
    min-width: 20px;
  }
`,Tb=O.div`
  display: flex;
  gap: ${a=>a.theme.space[2]};
  background: ${a=>a.theme.colors.gray800};
  padding: ${a=>a.theme.space[1]};
  border-radius: ${a=>a.theme.borderRadius.lg};
`,Ab=O.div`
  display: grid;
  gap: ${a=>a.theme.space[6]};
  
  ${a=>a.$viewMode==="grid"?Oe`
    grid-template-columns: 1fr;
    
    ${me.md} {
      grid-template-columns: repeat(2, 1fr);
    }
    
    ${me.xl} {
      grid-template-columns: repeat(3, 1fr);
    }
  `:Oe`
    grid-template-columns: 1fr;
    gap: ${s=>s.theme.space[4]};
  `}
  
  > * {
    animation: ${pb} 0.6s ease-out both;
  }
`,jb=O.div`
  ${ct.flexCenter};
  flex-direction: column;
  padding: ${a=>a.theme.space[16]} ${a=>a.theme.space[8]};
  
  .spinner {
    width: 40px;
    height: 40px;
    border: 3px solid ${a=>a.theme.colors.gray700};
    border-top: 3px solid ${a=>a.theme.colors.primary};
    border-radius: 50%;
    animation: ${gb} 1s linear infinite;
    margin-bottom: ${a=>a.theme.space[4]};
  }
  
  p {
    color: ${a=>a.theme.colors.gray400};
    font-family: ${a=>a.theme.fonts.mono};
  }
`,Ob=O.div`
  ${ct.flexCenter};
  flex-direction: column;
  padding: ${a=>a.theme.space[16]} ${a=>a.theme.space[8]};
  text-align: center;
  
  svg {
    color: ${a=>a.theme.colors.gray600};
    margin-bottom: ${a=>a.theme.space[4]};
  }
  
  h3 {
    color: ${a=>a.theme.colors.white};
    font-size: ${a=>a.theme.fontSizes["2xl"]};
    margin-bottom: ${a=>a.theme.space[2]};
  }
  
  p {
    color: ${a=>a.theme.colors.gray400};
    margin-bottom: ${a=>a.theme.space[6]};
    max-width: 400px;
  }
`,Rb=({onProjectSelect:a})=>{ci();const[s,o]=ae.useState("all"),[c,u]=ae.useState("grid"),[d,p]=ae.useState(!1),y=Object.values(hb),v=ae.useMemo(()=>s==="all"?y:y.filter(N=>N.category===s),[y,s]),g=ae.useMemo(()=>({total:y.length,live:y.filter(U=>U.status==="LIVE").length,development:y.filter(U=>["BETA","DESARROLLO"].includes(U.status)).length,upcoming:y.filter(U=>U.status==="PRÓXIMAMENTE").length}),[y]),x=N=>{p(!0),o(N),setTimeout(()=>{p(!1)},300)},E=N=>{console.log("Ver detalles:",N),a&&a(N)};return h.jsxs(yb,{children:[h.jsxs(vb,{children:[h.jsxs("div",{children:[h.jsx(bb,{children:"LABORATORIO"}),h.jsx(xb,{children:"Espacio experimental donde nacen las ideas que luego se convierten en proyectos. Aquí la narrativa se vuelve laboratorio de posibilidades."})]}),h.jsxs(Sb,{children:[h.jsxs(_s,{children:[h.jsx("span",{className:"number",children:g.total}),h.jsx("span",{className:"label",children:"Proyectos"})]}),h.jsxs(_s,{children:[h.jsx("span",{className:"number",children:g.live}),h.jsx("span",{className:"label",children:"Live"})]}),h.jsxs(_s,{children:[h.jsx("span",{className:"number",children:g.development}),h.jsx("span",{className:"label",children:"Beta"})]}),h.jsxs(_s,{children:[h.jsx("span",{className:"number",children:g.upcoming}),h.jsx("span",{className:"label",children:"Próximos"})]})]})]}),h.jsxs($b,{children:[h.jsx(zb,{children:Object.entries(mb).map(([N,U])=>h.jsxs(Eb,{$isActive:s===N,onClick:()=>x(N),children:[h.jsx("span",{className:"icon",children:U.icon}),h.jsx("span",{className:"name",children:U.name}),h.jsx("span",{className:"count",children:N==="all"?y.length:y.filter(L=>L.category===N).length})]},N))}),h.jsxs(Tb,{children:[h.jsx(yt,{variant:c==="grid"?"primary":"ghost",size:"small",icon:h.jsx(Dy,{size:16}),onClick:()=>u("grid"),children:"Grid"}),h.jsx(yt,{variant:c==="list"?"primary":"ghost",size:"small",icon:h.jsx(qy,{size:16}),onClick:()=>u("list"),children:"Lista"})]})]}),d?h.jsxs(jb,{children:[h.jsx("div",{className:"spinner"}),h.jsx("p",{children:"Cargando proyectos..."})]}):v.length>0?h.jsx(Ab,{$viewMode:c,children:v.map((N,U)=>h.jsx(db,{project:N,onViewDetails:E,style:{animationDelay:`${U*.1}s`}},N.id))}):h.jsxs(Ob,{children:[h.jsx(Oy,{size:48}),h.jsx("h3",{children:"No hay proyectos en esta categoría"}),h.jsx("p",{children:"Prueba seleccionando otra categoría o explora todos los proyectos."}),h.jsx(yt,{variant:"primary",onClick:()=>x("all"),children:"Ver todos los proyectos"})]})]})},Cb=ge`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,Nb=ge`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;ge`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
  }
`;const Mb=O.div`
  background: rgba(17, 24, 39, 0.5);
  border: 1px solid ${a=>a.theme.colors.gray700};
  border-radius: ${a=>a.theme.borderRadius.lg};
  margin-bottom: ${a=>a.theme.space[6]};
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  opacity: ${a=>a.$hasAnimated?1:0};
  transform: translateX(${a=>a.$hasAnimated?"0":"-30px"});
  animation: ${a=>a.$hasAnimated?Cb:"none"} 0.6s ease-out;
  
  ${a=>a.$isActive&&Oe`
    border-color: ${a.$color};
    background: rgba(17, 24, 39, 0.8);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 0 0 1px ${a.$color}40;
  `}
  
  &:hover {
    border-color: ${a=>a.$color};
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`,_b=O.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: ${a=>a.$color};
  opacity: 0.8;
`,wb=O.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${a=>a.theme.space[6]};
`,Db=O.div`
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes["2xl"]};
  font-weight: ${a=>a.theme.fontWeights.bold};
  color: ${a=>a.$color};
  min-width: 3rem;
`,Ub=O.h3`
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes["2xl"]};
  font-weight: ${a=>a.theme.fontWeights.bold};
  color: ${a=>a.theme.colors.white};
  margin-bottom: ${a=>a.theme.space[1]};
  
  ${me.lg} {
    font-size: ${a=>a.theme.fontSizes["3xl"]};
  }
`,Lb=O.p`
  font-size: ${a=>a.theme.fontSizes.lg};
  color: ${a=>a.theme.colors.gray300};
  line-height: ${a=>a.theme.lineHeights.snug};
`,Hb=O.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: ${a=>a.$color}20;
  border: 2px solid ${a=>a.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`,Bb=O.div`
  max-height: ${a=>a.$isExpanded?"none":"0"};
  opacity: ${a=>a.$isExpanded?1:0};
  overflow: hidden;
  transition: all 0.3s ease;
  
  ${a=>a.$isExpanded&&Oe`
    padding: 0 ${s=>s.theme.space[6]} ${s=>s.theme.space[6]};
    animation: ${Nb} 0.5s ease-out;
  `}
`,qb=O.p`
  font-size: ${a=>a.theme.fontSizes.lg};
  color: ${a=>a.theme.colors.gray300};
  line-height: ${a=>a.theme.lineHeights.relaxed};
  margin-bottom: ${a=>a.theme.space[6]};
`,Yb=O.p`
  font-size: ${a=>a.theme.fontSizes.base};
  color: ${a=>a.theme.colors.gray400};
  line-height: ${a=>a.theme.lineHeights.relaxed};
  margin-bottom: ${a=>a.theme.space[6]};
  font-style: italic;
`,kb=O.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${a=>a.theme.space[2]};
  margin-bottom: ${a=>a.theme.space[6]};
`,Gb=O.span`
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes.sm};
  color: ${a=>a.$color};
  background: ${a=>a.$color}20;
  border: 1px solid ${a=>a.$color};
  padding: ${a=>a.theme.space[1]} ${a=>a.theme.space[3]};
  border-radius: ${a=>a.theme.borderRadius.full};
  transition: ${a=>a.theme.transitions.base};
  
  &:hover {
    background: ${a=>a.$color}40;
    transform: scale(1.05);
  }
`,Vb=O.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${a=>a.theme.borderRadius.lg};
  margin-bottom: ${a=>a.theme.space[6]};
  border: 1px solid ${a=>a.theme.colors.gray700};
`,Xb=O.div``,Qb=O.div`
  background: ${a=>a.$color}10;
  border-left: 3px solid ${a=>a.$color};
  padding: ${a=>a.theme.space[3]} ${a=>a.theme.space[4]};
  margin-bottom: ${a=>a.theme.space[2]};
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes.sm};
  color: ${a=>a.theme.colors.gray300};
  
  &:last-child {
    margin-bottom: 0;
  }
`;O.button`
  display: flex;
  align-items: center;
  gap: ${a=>a.theme.space[2]};
  color: ${a=>a.$color};
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes.sm};
  background: none;
  border: none;
  cursor: pointer;
  transition: ${a=>a.theme.transitions.base};
  
  &:hover {
    color: ${a=>a.theme.colors.white};
  }
`;const Zb=({bridge:a,isActive:s,onToggle:o,delay:c=0})=>{const[u,d]=ae.useState(!1),[p,y]=ae.useState(!1);ae.useEffect(()=>{const g=setTimeout(()=>{y(!0)},c);return()=>clearTimeout(g)},[c]);const v=()=>{switch(a.interactiveElement.type){case"code-generation":return h.jsx("pre",{style:{fontFamily:"monospace",fontSize:"0.875rem",color:a.color,background:"rgba(0,0,0,0.3)",padding:"1rem",borderRadius:"0.5rem",overflow:"auto"},children:a.interactiveElement.placeholder});case"network-visualization":return h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"0.5rem",padding:"1rem"},children:a.interactiveElement.nodes.map((g,x)=>h.jsx("div",{style:{padding:"0.5rem",background:`${a.color}20`,border:`1px solid ${a.color}`,borderRadius:"0.25rem",textAlign:"center",fontSize:"0.75rem",color:a.color},children:g},x))});case"transformation-demo":return h.jsx("div",{style:{display:"flex",alignItems:"center",gap:"1rem",padding:"1rem"},children:a.interactiveElement.stages.map((g,x)=>h.jsxs(Bt.Fragment,{children:[h.jsx("div",{style:{padding:"0.5rem",background:x===1?`${a.color}40`:`${a.color}20`,border:`1px solid ${a.color}`,borderRadius:"0.25rem",fontSize:"0.75rem",color:a.color,textAlign:"center",flex:1},children:g}),x<a.interactiveElement.stages.length-1&&h.jsx(xy,{size:16,style:{color:a.color}})]},x))});case"growth-simulation":return h.jsxs("div",{style:{padding:"1rem"},children:[h.jsxs("div",{style:{marginBottom:"1rem",fontSize:"0.875rem",color:a.color},children:["💡 ",a.interactiveElement.seedIdea]}),h.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:a.interactiveElement.growthStages.map((g,x)=>h.jsxs("div",{style:{padding:"0.5rem",background:`${a.color}${Math.max(20,60-x*10)}`,border:`1px solid ${a.color}`,borderRadius:"0.25rem",fontSize:"0.75rem",color:a.color,marginLeft:`${x*1}rem`,position:"relative"},children:[g,x>0&&h.jsx("div",{style:{position:"absolute",left:"-1rem",top:"50%",transform:"translateY(-50%)",color:a.color},children:"↳"})]},x))})]});default:return h.jsx("div",{children:"Interactive element"})}};return h.jsxs(Mb,{$color:a.color,$isActive:s,$hasAnimated:p,onClick:o,children:[h.jsx(_b,{$color:a.color}),h.jsxs(wb,{children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[h.jsx(Db,{$color:a.color,children:a.number}),h.jsxs("div",{children:[h.jsx(Ub,{children:a.title}),h.jsx(Lb,{children:a.subtitle})]})]}),h.jsx(Hb,{$color:a.color,children:h.jsx("span",{style:{fontSize:"1.5rem"},children:a.icon})})]}),h.jsxs(Bb,{$isExpanded:s,children:[h.jsx(qb,{children:a.description}),s&&h.jsxs(h.Fragment,{children:[h.jsx(Yb,{children:a.fullDescription}),h.jsx(kb,{children:a.keywords.map((g,x)=>h.jsx(Gb,{$color:a.color,children:g},x))}),h.jsxs(Vb,{children:[h.jsx("h4",{style:{color:a.color,marginBottom:"1rem",fontFamily:"monospace",fontSize:"0.875rem"},children:"// Elemento interactivo"}),v()]}),h.jsxs(Xb,{children:[h.jsx("h4",{style:{color:a.color,marginBottom:"1rem",fontFamily:"monospace",fontSize:"0.875rem"},children:"// Ejemplos en acción"}),a.examples.map((g,x)=>h.jsx(Qb,{$color:a.color,children:g},x))]})]})]})]})},Kb={crear:{id:"crear",number:"01",title:"CREAR",subtitle:"Del impulso íntimo a la forma visible",description:"Desde el impulso íntimo hasta la forma visible, cada puente es un acto de resistencia contra la fragmentación del mundo digital.",fullDescription:"Crear es el primer puente, el momento donde la nada se convierte en algo. Es el acto más radical en un mundo que privilegia el consumo sobre la producción. Aquí nace la resistencia: en cada línea de código que escribes, en cada verso que emerge, en cada conexión que estableces entre ideas aparentemente incompatibles.",keywords:["impulso","resistencia","materialización","origen"],color:"#ef4444",icon:"⚡",examples:["Fragmentado: De la idea de control tecnológico a la narrativa interactiva","Form 80: Del formulario burocrático a la poesía viva","Este portfolio: Del CV tradicional a la experiencia inmersiva"],interactiveElement:{type:"code-generation",placeholder:`function crear() {
  // Tu idea aquí
  return realidad;
}`}},conectar:{id:"conectar",number:"02",title:"CONECTAR",subtitle:"Vínculos vivos entre mundos distantes",description:"Conectar va más allá de la simple unión. Es crear vínculos que respiren, que evolucionen, que transformen tanto el origen como el destino.",fullDescription:"En un mundo fragmentado, conectar se vuelve un acto político. No se trata solo de tender cables entre puntos A y B. Es crear vínculos vivos que respiren, que evolucionen, que transformen tanto el origen como el destino. Cada conexión es un puente que permite que las ideas migren, se hibriden, se vuelvan algo nuevo.",keywords:["vínculos","hibridación","migración","transformación"],color:"#f59e0b",icon:"🌉",examples:["Narrativa + IA: Fusión de storytelling humano con inteligencia artificial","Poesía + Código: Transformar formularios en experiencias poéticas","Brisbane + Medellín: Conectar geografías a través de la creación digital"],interactiveElement:{type:"network-visualization",nodes:["Ideas","Tecnología","Narrativa","Poesía","IA","Humanidad"]}},transformar:{id:"transformar",number:"03",title:"TRANSFORMAR",subtitle:"Narrar como gesto de cambio",description:"Transformar no es solo cambiar la forma. Es alterar la naturaleza misma de las cosas, crear nuevas posibilidades de existencia.",fullDescription:"Transformar es el puente más radical. No se trata solo de cambiar la forma de algo, sino de alterar su naturaleza misma. Cuando transformas un formulario migratorio en poesía, no solo cambias su apariencia: cambias su función, su significado, su relación con quien lo experimenta. Crear nuevas posibilidades de existencia.",keywords:["metamorfosis","radical","naturaleza","posibilidades"],color:"#8b5cf6",icon:"🔄",examples:["Burocracia → Poesía: Form 80 transforma la experiencia migratoria","Formulario → Narrativa: Índice de Merma cuestiona el valor humano","Portfolio → Experiencia: Este sitio transforma el CV en arte interactivo"],interactiveElement:{type:"transformation-demo",stages:["Forma Original","Proceso","Nueva Naturaleza"]}},expandir:{id:"expandir",number:"04",title:"EXPANDIR",subtitle:"Del lenguaje a la inteligencia viva",description:"Expandir es llevar las ideas más allá de sus límites naturales, crear ecosistemas narrativos que vivan y evolucionen por sí mismos.",fullDescription:"Expandir es el puente hacia el futuro. Es llevar las ideas más allá de sus límites naturales, crear ecosistemas narrativos que vivan y evolucionen por sí mismos. No se trata solo de hacer algo más grande, sino de dotarlo de vida propia, de permitir que genere sus propias conexiones, sus propias transformaciones.",keywords:["ecosistemas","evolución","autonomía","futuro"],color:"#10b981",icon:"🌱",examples:["Narrativas que se ramifican en múltiples medios y formatos","Proyectos que inspiran nuevas creaciones en otros creadores","Ideas que evolucionan más allá de la intención original del autor"],interactiveElement:{type:"growth-simulation",seedIdea:"Una historia simple",growthStages:["Narrativa","Interactiva","Transmedia","Ecosistema"]}}},Em=["En la intersección de la inteligencia artificial, las narrativas expandidas y la interactividad, construimos puentes hacia futuros posibles.","Cada proyecto es una exploración de cómo la tecnología puede amplificar la experiencia humana sin reemplazarla.","Los puentes no son solo conexiones: son actos de resistencia contra la fragmentación del mundo digital.","Crear, conectar, transformar, expandir: cuatro gestos que redefinen lo que significa ser humano en la era digital."],Jb=ge`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Fb=ge`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Wb=ge`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`,Ib=ge`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`,Pb=O.section`
  padding: ${a=>a.theme.space[16]} 0;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  position: relative;
`,ex=O.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${a=>a.$progress}%;
  height: 3px;
  background: linear-gradient(90deg, #10b981, #ef4444, #f59e0b, #8b5cf6);
  z-index: 1000;
  transition: width 0.1s ease;
`,tx=O.div`
  text-align: center;
  margin-bottom: ${a=>a.theme.space[20]};
  animation: ${Jb} 1s ease-out;
`,ax=O.h1`
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes["4xl"]};
  font-weight: ${a=>a.theme.fontWeights.bold};
  color: ${a=>a.theme.colors.white};
  margin-bottom: ${a=>a.theme.space[6]};
  
  background: linear-gradient(90deg, #10b981, #ef4444, #f59e0b, #8b5cf6);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${Ib} 3s linear infinite;
  
  ${me.lg} {
    font-size: ${a=>a.theme.fontSizes["6xl"]};
  }
`,nx=O.p`
  font-size: ${a=>a.theme.fontSizes.xl};
  color: ${a=>a.theme.colors.gray300};
  line-height: ${a=>a.theme.lineHeights.relaxed};
  margin-bottom: ${a=>a.theme.space[8]};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`,ix=O.div`
  margin-bottom: ${a=>a.theme.space[20]};
  ${ct.flexCenter};
`,lx=O.div`
  text-align: center;
  max-width: 800px;
  padding: ${a=>a.theme.space[8]};
  background: rgba(17, 24, 39, 0.5);
  border: 1px solid ${a=>a.theme.colors.gray700};
  border-radius: ${a=>a.theme.borderRadius.xl};
  position: relative;
  
  svg {
    color: ${a=>a.theme.colors.primary};
    margin-bottom: ${a=>a.theme.space[4]};
  }
`,sx=O.blockquote`
  font-size: ${a=>a.theme.fontSizes["2xl"]};
  color: ${a=>a.theme.colors.white};
  line-height: ${a=>a.theme.lineHeights.relaxed};
  margin-bottom: ${a=>a.theme.space[4]};
  font-style: italic;
  animation: ${Fb} 0.8s ease-out;
  
  ${me.lg} {
    font-size: ${a=>a.theme.fontSizes["3xl"]};
  }
`,rx=O.cite`
  font-family: ${a=>a.theme.fonts.mono};
  color: ${a=>a.theme.colors.primary};
  font-size: ${a=>a.theme.fontSizes.lg};
  font-style: normal;
`,ox=O.div`
  margin-bottom: ${a=>a.theme.space[20]};
`,cx=O.div`
  display: flex;
  flex-direction: column;
  gap: ${a=>a.theme.space[4]};
`,ux=O.div`
  margin-bottom: ${a=>a.theme.space[20]};
`,Ac=O.div`
  background: rgba(17, 24, 39, 0.3);
  border: 1px solid ${a=>a.theme.colors.gray700};
  border-radius: ${a=>a.theme.borderRadius.lg};
  padding: ${a=>a.theme.space[6]};
  transition: ${a=>a.theme.transitions.base};
  
  &:hover {
    border-color: ${a=>a.theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  h3 {
    font-family: ${a=>a.theme.fonts.mono};
    font-size: ${a=>a.theme.fontSizes.xl};
    font-weight: ${a=>a.theme.fontWeights.bold};
  }
  
  p {
    color: ${a=>a.theme.colors.gray300};
    line-height: ${a=>a.theme.lineHeights.relaxed};
  }
`,fx=O.div`
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid ${a=>a.theme.colors.gray700};
  border-left: 4px solid ${a=>a.theme.colors.primary};
  border-radius: ${a=>a.theme.borderRadius.lg};
  padding: ${a=>a.theme.space[8]};
  
  h3 {
    font-family: ${a=>a.theme.fonts.mono};
    color: ${a=>a.theme.colors.primary};
    font-size: ${a=>a.theme.fontSizes.xl};
    margin-bottom: ${a=>a.theme.space[4]};
  }
  
  p {
    color: ${a=>a.theme.colors.gray300};
    line-height: ${a=>a.theme.lineHeights.relaxed};
    margin-bottom: ${a=>a.theme.space[4]};
    font-size: ${a=>a.theme.fontSizes.lg};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`,dx=O.div`
  text-align: center;
  padding: ${a=>a.theme.space[12]} ${a=>a.theme.space[8]};
  background: rgba(17, 24, 39, 0.5);
  border: 1px solid ${a=>a.theme.colors.gray700};
  border-radius: ${a=>a.theme.borderRadius.xl};
  margin-bottom: ${a=>a.theme.space[16]};
  
  h2 {
    font-size: ${a=>a.theme.fontSizes["3xl"]};
    color: ${a=>a.theme.colors.white};
    margin-bottom: ${a=>a.theme.space[4]};
  }
  
  p {
    font-size: ${a=>a.theme.fontSizes.xl};
    color: ${a=>a.theme.colors.gray300};
    line-height: ${a=>a.theme.lineHeights.relaxed};
    margin-bottom: ${a=>a.theme.space[8]};
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`,hx=O.div`
  position: fixed;
  bottom: ${a=>a.theme.space[8]};
  right: ${a=>a.theme.space[8]};
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid ${a=>a.theme.colors.primary};
  border-radius: ${a=>a.theme.borderRadius.lg};
  padding: ${a=>a.theme.space[4]};
  display: flex;
  align-items: center;
  gap: ${a=>a.theme.space[3]};
  max-width: 300px;
  backdrop-filter: blur(10px);
  animation: ${Wb} 3s ease-in-out infinite;
  z-index: 100;
  
  svg {
    color: ${a=>a.theme.colors.primary};
    flex-shrink: 0;
  }
  
  span {
    font-family: ${a=>a.theme.fonts.mono};
    color: ${a=>a.theme.colors.white};
    font-size: ${a=>a.theme.fontSizes.sm};
    line-height: ${a=>a.theme.lineHeights.tight};
  }
  
  ${me.md} {
    display: none;
  }
`,mx=()=>{ci();const[a,s]=ae.useState(null),[o,c]=ae.useState(0),[u,d]=ae.useState(0),p=Object.values(Kb);ae.useEffect(()=>{const g=setInterval(()=>{c(x=>(x+1)%Em.length)},5e3);return()=>clearInterval(g)},[]),ae.useEffect(()=>{const g=()=>{const x=document.body.scrollTop||document.documentElement.scrollTop,E=document.documentElement.scrollHeight-document.documentElement.clientHeight,N=x/E*100;d(N)};return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]);const y=g=>{s(a===g?null:g)},v=()=>{a?s(null):p.forEach((g,x)=>{setTimeout(()=>{s(g.id)},x*500)})};return h.jsxs(Pb,{children:[h.jsx(ex,{$progress:u}),h.jsxs(tx,{children:[h.jsx(ax,{children:"LOS_4_PUENTES"}),h.jsx(nx,{children:"Manifiesto creativo donde cada puente conecta mundos que parecían separados. La filosofía detrás de crear, conectar, transformar y expandir como visión del mundo."}),h.jsx(yt,{variant:"secondary",icon:h.jsx(dy,{size:20}),onClick:()=>document.getElementById("bridges-section").scrollIntoView({behavior:"smooth"}),children:"Explorar Filosofía"})]}),h.jsx(ix,{children:h.jsxs(lx,{children:[h.jsx(vm,{size:32}),h.jsx(sx,{children:Em[o]},o),h.jsx(rx,{children:"— Carlos Rendón"})]})}),h.jsxs(ox,{id:"bridges-section",children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"3rem"},children:[h.jsx("h2",{style:{fontSize:"2rem",fontFamily:"monospace",color:"#ffffff",margin:0},children:"// Los Cuatro Puentes"}),h.jsx(yt,{variant:"ghost",size:"small",icon:h.jsx(Jy,{size:16}),onClick:v,children:a?"Colapsar Todo":"Expandir Todo"})]}),h.jsx(cx,{children:p.map((g,x)=>h.jsx(Zb,{bridge:g,isActive:a===g.id,onToggle:()=>y(g.id),delay:x*200},g.id))})]}),h.jsxs(ux,{children:[h.jsx("h2",{style:{fontSize:"2rem",fontFamily:"monospace",color:"#ffffff",marginBottom:"2rem",textAlign:"center"},children:"// Filosofía en Acción"}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem",marginBottom:"4rem"},children:[h.jsxs(Ac,{children:[h.jsx("h3",{style:{color:"#10b981",marginBottom:"1rem"},children:"Intersección"}),h.jsx("p",{children:"En la intersección de la inteligencia artificial, las narrativas expandidas y la interactividad, construimos puentes hacia futuros posibles."})]}),h.jsxs(Ac,{children:[h.jsx("h3",{style:{color:"#ef4444",marginBottom:"1rem"},children:"Amplificación"}),h.jsx("p",{children:"Cada proyecto es una exploración de cómo la tecnología puede amplificar la experiencia humana sin reemplazarla."})]}),h.jsxs(Ac,{children:[h.jsx("h3",{style:{color:"#f59e0b",marginBottom:"1rem"},children:"Resistencia"}),h.jsx("p",{children:"Los puentes no son solo conexiones: son actos de resistencia contra la fragmentación del mundo digital."})]})]}),h.jsxs(fx,{children:[h.jsx("h3",{children:'$ echo "visión_del_futuro"'}),h.jsx("p",{children:"En un mundo donde la tecnología amenaza con fragmentar la experiencia humana, construimos puentes. No cables, no conexiones mecánicas: puentes vivos que respiran, que evolucionan, que transforman tanto el origen como el destino."}),h.jsx("p",{children:"Cada línea de código es un verso. Cada interacción es una conversación. Cada proyecto es una invitación a imaginar futuros donde la humanidad y la tecnología dansen juntas, sin que una devore a la otra."})]})]}),h.jsxs(dx,{children:[h.jsx("h2",{children:"¿Construimos un puente juntos?"}),h.jsx("p",{children:"Si estas ideas resuenan contigo, si ves posibilidades donde otros ven problemas, conversemos. Los mejores puentes se construyen en colaboración."}),h.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:[h.jsx(yt,{variant:"primary",size:"large",onClick:()=>window.location.href="mailto:carlos.rendon.duque@gmail.com",children:"Iniciar Conversación"}),h.jsx(yt,{variant:"secondary",size:"large",onClick:()=>window.open("https://linkedin.com/in/carlosrendonduque","_blank"),children:"Conectar en LinkedIn"})]})]}),h.jsxs(hx,{children:[h.jsx(vm,{size:24}),h.jsx("span",{children:'"Construyo puentes donde otros ven abismos"'})]})]})},px=ge`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
`,gx=ge`
  0%, 100% {
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(16, 185, 129, 0.6);
  }
`,yx=O.div`
  position: relative;
  display: inline-block;
  width: ${a=>a.size}px;
  height: ${a=>a.size}px;
  cursor: pointer;
  animation: ${px} 3s ease-in-out infinite;
`,vx=O.div`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  opacity: ${a=>a.$isActive?1:0};
  transition: opacity 0.3s ease;
  animation: ${a=>a.$isActive?gx:"none"} 2s infinite;
`,bx=O.svg`
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
  
  ${a=>a.$isHovered&&`
    transform: scale(1.05);
  `}
`,xx=({size:a=120,showAnimation:s=!0,className:o=""})=>{const[c,u]=ae.useState(!1);return h.jsxs(yx,{className:o,size:a,onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[h.jsx(vx,{$isActive:c&&s}),h.jsxs(bx,{width:a,height:a,viewBox:"0 0 120 120",xmlns:"http://www.w3.org/2000/svg",$isHovered:c,children:[h.jsx("circle",{cx:"60",cy:"60",r:"58",fill:"#1a1a1a",stroke:"#10b981",strokeWidth:"2"}),h.jsx("ellipse",{cx:"60",cy:"65",rx:"28",ry:"32",fill:"#d4a574"}),h.jsx("ellipse",{cx:"60",cy:"45",rx:"30",ry:"18",fill:"#8b6f3a"}),h.jsx("rect",{x:"30",y:"42",width:"60",height:"12",fill:"#8b6f3a"}),h.jsx("rect",{x:"35",y:"35",width:"3",height:"8",fill:"#a0804d"}),h.jsx("rect",{x:"40",y:"33",width:"3",height:"10",fill:"#a0804d"}),h.jsx("rect",{x:"45",y:"34",width:"3",height:"9",fill:"#a0804d"}),h.jsx("rect",{x:"50",y:"32",width:"3",height:"11",fill:"#a0804d"}),h.jsx("rect",{x:"55",y:"33",width:"3",height:"10",fill:"#a0804d"}),h.jsx("rect",{x:"60",y:"31",width:"3",height:"12",fill:"#a0804d"}),h.jsx("rect",{x:"65",y:"33",width:"3",height:"10",fill:"#a0804d"}),h.jsx("rect",{x:"70",y:"32",width:"3",height:"11",fill:"#a0804d"}),h.jsx("rect",{x:"75",y:"34",width:"3",height:"9",fill:"#a0804d"}),h.jsx("rect",{x:"80",y:"35",width:"3",height:"8",fill:"#a0804d"}),h.jsx("rect",{x:"85",y:"36",width:"3",height:"7",fill:"#a0804d"}),h.jsx("rect",{x:"40",y:"58",width:"18",height:"14",fill:"none",stroke:"#4a5568",strokeWidth:"2",rx:"3"}),h.jsx("rect",{x:"62",y:"58",width:"18",height:"14",fill:"none",stroke:"#4a5568",strokeWidth:"2",rx:"3"}),h.jsx("rect",{x:"58",y:"64",width:"4",height:"2",fill:"#4a5568"}),h.jsx("rect",{x:"42",y:"60",width:"14",height:"10",fill:"rgba(99, 179, 237, 0.3)",rx:"2"}),h.jsx("rect",{x:"64",y:"60",width:"14",height:"10",fill:"rgba(99, 179, 237, 0.3)",rx:"2"}),h.jsx("rect",{x:"43",y:"61",width:"4",height:"3",fill:"rgba(255, 255, 255, 0.6)"}),h.jsx("rect",{x:"65",y:"61",width:"4",height:"3",fill:"rgba(255, 255, 255, 0.6)"}),h.jsx("circle",{cx:"49",cy:"65",r:"3",fill:"#2d2d2d"}),h.jsx("circle",{cx:"71",cy:"65",r:"3",fill:"#2d2d2d"}),h.jsx("circle",{cx:"50",cy:"64",r:"1",fill:"#ffffff"}),h.jsx("circle",{cx:"72",cy:"64",r:"1",fill:"#ffffff"}),h.jsx("ellipse",{cx:"60",cy:"72",rx:"2",ry:"4",fill:"#c19660"}),h.jsx("ellipse",{cx:"60",cy:"82",rx:"6",ry:"3",fill:"#8b4513"}),h.jsx("ellipse",{cx:"60",cy:"81",rx:"4",ry:"2",fill:"#d4a574"}),h.jsx("rect",{x:"35",y:"95",width:"50",height:"25",fill:"#1e3a8a"}),h.jsx("rect",{x:"20",y:"20",width:"2",height:"2",fill:"#10b981",children:s&&h.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"2s",repeatCount:"indefinite"})}),h.jsx("rect",{x:"25",y:"15",width:"2",height:"2",fill:"#10b981",children:s&&h.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"1.5s",repeatCount:"indefinite"})}),h.jsx("rect",{x:"93",y:"18",width:"2",height:"2",fill:"#10b981",children:s&&h.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"1.8s",repeatCount:"indefinite"})}),h.jsx("rect",{x:"98",y:"25",width:"2",height:"2",fill:"#10b981",children:s&&h.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"2.2s",repeatCount:"indefinite"})}),h.jsx("rect",{x:"105",y:"35",width:"8",height:"2",fill:"#10b981",children:s&&h.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"1s",repeatCount:"indefinite"})}),h.jsx("text",{x:"15",y:"40",fill:"#10b981",fontFamily:"monospace",fontSize:"12",children:"{"}),h.jsx("text",{x:"100",y:"90",fill:"#10b981",fontFamily:"monospace",fontSize:"12",children:"}"}),h.jsx("rect",{x:"25",y:"95",width:"1",height:"1",fill:"#10b981"}),h.jsx("rect",{x:"27",y:"97",width:"1",height:"1",fill:"#10b981"}),h.jsx("rect",{x:"92",y:"95",width:"1",height:"1",fill:"#10b981"}),h.jsx("rect",{x:"94",y:"97",width:"1",height:"1",fill:"#10b981"})]})]})},Sx=ge`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,$x=ge`
  from {
    width: 0%;
  }
`,zx=O.div`
  margin-top: ${a=>a.theme.space[8]};
`,Ex=O.h3`
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes.lg};
  color: ${a=>a.theme.colors.primary};
  margin-bottom: ${a=>a.theme.space[6]};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Tx=O.div`
  display: flex;
  gap: ${a=>a.theme.space[2]};
  margin-bottom: ${a=>a.theme.space[6]};
  flex-wrap: wrap;
`,Ax=O.button`
  display: flex;
  align-items: center;
  gap: ${a=>a.theme.space[2]};
  padding: ${a=>a.theme.space[2]} ${a=>a.theme.space[4]};
  border-radius: ${a=>a.theme.borderRadius.base};
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes.sm};
  transition: ${a=>a.theme.transitions.base};
  
  ${a=>a.$isActive?Oe`
    background: ${s=>s.theme.colors.primary};
    color: ${s=>s.theme.colors.black};
    border: 1px solid ${s=>s.theme.colors.primary};
  `:Oe`
    background: transparent;
    color: ${s=>s.theme.colors.gray400};
    border: 1px solid ${s=>s.theme.colors.gray700};
    
    &:hover {
      color: ${s=>s.theme.colors.white};
      border-color: ${s=>s.theme.colors.primary};
    }
  `}
  
  .icon {
    font-size: 1rem;
  }
`,jx=O.div`
  display: grid;
  gap: ${a=>a.theme.space[4]};
  grid-template-columns: 1fr;
  
  ${me.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`,Ox=O.div`
  background: rgba(17, 24, 39, 0.3);
  border: 1px solid ${a=>a.theme.colors.gray700};
  border-radius: ${a=>a.theme.borderRadius.base};
  padding: ${a=>a.theme.space[4]};
  transition: ${a=>a.theme.transitions.base};
  animation: ${Sx} 0.6s ease-out both;
  animation-delay: ${a=>a.$delay}s;
  
  &:hover {
    border-color: ${a=>a.theme.colors.primary};
    transform: translateY(-2px);
  }
  
  .tech-header {
    display: flex;
    align-items: center;
    gap: ${a=>a.theme.space[3]};
    margin-bottom: ${a=>a.theme.space[3]};
  }
`,Rx=O.div`
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(16, 185, 129, 0.1);
  border-radius: ${a=>a.theme.borderRadius.base};
`,Cx=O.div`
  font-weight: ${a=>a.theme.fontWeights.semibold};
  color: ${a=>a.theme.colors.white};
  font-size: ${a=>a.theme.fontSizes.base};
`,Nx=O.div`
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes.xs};
  color: ${a=>a.theme.colors.gray400};
`,Mx=O.div`
  width: 100%;
  height: 4px;
  background: ${a=>a.theme.colors.gray700};
  border-radius: ${a=>a.theme.borderRadius.full};
  overflow: hidden;
`,_x=O.div`
  height: 100%;
  background: linear-gradient(90deg, ${a=>a.theme.colors.primary}, ${a=>a.theme.colors.primaryLight});
  border-radius: ${a=>a.theme.borderRadius.full};
  width: ${a=>a.$experience}%;
  animation: ${$x} 1.5s ease-out both;
  animation-delay: ${a=>a.$delay+.5}s;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 4px;
    height: 100%;
    background: ${a=>a.theme.colors.white};
    border-radius: 50%;
    box-shadow: 0 0 6px ${a=>a.theme.colors.primary};
  }
`,wx=()=>{const[a,s]=ae.useState("frontend"),o={frontend:[{name:"React",experience:90,years:"5+",icon:"⚛️"},{name:"JavaScript",experience:95,years:"8+",icon:"🟨"},{name:"TypeScript",experience:80,years:"3+",icon:"🔷"},{name:"Styled Components",experience:85,years:"4+",icon:"💅"},{name:"HTML/CSS",experience:95,years:"8+",icon:"🎨"},{name:"Vue.js",experience:70,years:"2+",icon:"💚"}],backend:[{name:"Node.js",experience:80,years:"4+",icon:"🟢"},{name:"Python",experience:75,years:"3+",icon:"🐍"},{name:"APIs REST",experience:90,years:"6+",icon:"🔗"},{name:"GraphQL",experience:70,years:"2+",icon:"📊"},{name:"Databases",experience:80,years:"5+",icon:"🗄️"}],salesforce:[{name:"OmniStudio",experience:95,years:"4+",icon:"☁️"},{name:"Lightning Web Components",experience:90,years:"4+",icon:"⚡"},{name:"Apex",experience:85,years:"3+",icon:"🔺"},{name:"SOQL/SOSL",experience:90,years:"4+",icon:"🔍"},{name:"Flow Builder",experience:95,years:"4+",icon:"🌊"},{name:"Integration",experience:85,years:"3+",icon:"🔌"}],creative:[{name:"Digital Narratives",experience:95,years:"2+",icon:"📖"},{name:"Interactive Fiction",experience:90,years:"2+",icon:"🎮"},{name:"AI Storytelling",experience:80,years:"1+",icon:"🤖"},{name:"Transmedia",experience:85,years:"2+",icon:"🌐"},{name:"UX Writing",experience:80,years:"3+",icon:"✍️"}]},c={frontend:{name:"Frontend",icon:"🎨"},backend:{name:"Backend",icon:"⚙️"},salesforce:{name:"Salesforce",icon:"☁️"},creative:{name:"Creative Tech",icon:"✨"}};return h.jsxs(zx,{children:[h.jsx(Ex,{children:"TECH STACK"}),h.jsx(Tx,{children:Object.entries(c).map(([u,d])=>h.jsxs(Ax,{$isActive:a===u,onClick:()=>s(u),children:[h.jsx("span",{className:"icon",children:d.icon}),h.jsx("span",{className:"name",children:d.name})]},u))}),h.jsx(jx,{children:o[a].map((u,d)=>h.jsxs(Ox,{$delay:d*.1,children:[h.jsxs("div",{className:"tech-header",children:[h.jsx(Rx,{children:u.icon}),h.jsxs("div",{children:[h.jsx(Cx,{children:u.name}),h.jsxs(Nx,{children:[u.years," años"]})]})]}),h.jsx(Mx,{children:h.jsx(_x,{$experience:u.experience,$delay:d*.1})})]},u.name))})]})},Dx=ge`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,Ux=ge`
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 200px;
  }
`,Lx=O.div`
  margin-top: ${a=>a.theme.space[16]};
  margin-bottom: ${a=>a.theme.space[8]};
`,Hx=O.h2`
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes["2xl"]};
  color: ${a=>a.theme.colors.white};
  margin-bottom: ${a=>a.theme.space[8]};
  text-align: center;
`,Bx=O.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`,qx=O.div`
  position: absolute;
  left: 2rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    ${a=>a.theme.colors.primary},
    ${a=>a.theme.colors.primaryLight},
    ${a=>a.theme.colors.primary}
  );
  
  ${me.md} {
    left: 50%;
    transform: translateX(-50%);
  }
`,kc=O.div`
  position: absolute;
  left: 1rem;
  top: 1rem;
  width: 2rem;
  height: 2rem;
  background: ${a=>a.$color};
  border: 3px solid ${a=>a.theme.colors.black};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${a=>a.theme.colors.black};
  transform: translateX(-50%);
  z-index: 2;
  
  ${me.md} {
    top: 1.5rem;
  }
`,Yx=O.div`
  position: relative;
  margin-bottom: ${a=>a.theme.space[8]};
  animation: ${Dx} 0.8s ease-out both;
  animation-delay: ${a=>a.$delay}s;
  cursor: pointer;
  
  ${me.md} {
    width: 50%;
    
    &:nth-child(even) {
      margin-left: 50%;
      
      ${kc} {
        left: -2.5rem;
      }
    }
    
    &:nth-child(odd) {
      
      ${kc} {
        right: -2.5rem;
      }
    }
  }
`,kx=O.div`
  background: rgba(17, 24, 39, 0.5);
  border: 1px solid ${a=>a.theme.colors.gray700};
  border-radius: ${a=>a.theme.borderRadius.lg};
  padding: ${a=>a.theme.space[6]};
  margin-left: ${a=>a.theme.space[16]};
  transition: ${a=>a.theme.transitions.base};
  
  ${a=>a.$isActive&&Oe`
    border-color: ${s=>s.theme.colors.primary};
    background: rgba(17, 24, 39, 0.8);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  `}
  
  &:hover {
    border-color: ${a=>a.theme.colors.primary};
    transform: translateY(-2px);
  }
  
  ${me.md} {
    margin-left: 0;
  }
`,Gx=O.div`
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes.sm};
  color: ${a=>a.theme.colors.primary};
  margin-bottom: ${a=>a.theme.space[2]};
  font-weight: ${a=>a.theme.fontWeights.bold};
`,Vx=O.h3`
  font-size: ${a=>a.theme.fontSizes.lg};
  color: ${a=>a.theme.colors.white};
  margin-bottom: ${a=>a.theme.space[2]};
  font-weight: ${a=>a.theme.fontWeights.semibold};
`,Xx=O.div`
  display: flex;
  align-items: center;
  gap: ${a=>a.theme.space[1]};
  font-size: ${a=>a.theme.fontSizes.sm};
  color: ${a=>a.theme.colors.gray400};
  margin-bottom: ${a=>a.theme.space[3]};
`,Qx=O.p`
  color: ${a=>a.theme.colors.gray300};
  line-height: ${a=>a.theme.lineHeights.relaxed};
  font-size: ${a=>a.theme.fontSizes.sm};
  
  ${a=>a.$isExpanded&&Oe`
    animation: ${Ux} 0.3s ease-out;
  `}
`,Zx=({activeItem:a,onItemSelect:s})=>{const o=[{id:"current",date:"2023 - Presente",title:"Creative Technologist & Digital Narratives",location:"Brisbane, Australia",type:"work",description:"Maestría en Creative Writing y Digital Narratives mientras desarrollo proyectos que exploran la intersección entre IA y storytelling. Creación de Fragmentado, Form 80 y otros experimentos narrativos.",icon:h.jsx(mp,{size:20})},{id:"migration",date:"2022",title:"El Gran Salto: Colombia → Australia",location:"Brisbane, Australia",type:"personal",description:"Migración que transformó no solo mi geografía sino mi perspectiva sobre la identidad, el lenguaje y la tecnología como puentes entre mundos. Esta experiencia se convierte en el núcleo de mis narrativas.",icon:h.jsx(Vy,{size:20})},{id:"salesforce-senior",date:"2020 - 2022",title:"Senior Salesforce Developer",location:"Medellín, Colombia",type:"work",description:"Especialización en OmniStudio y desarrollo de soluciones complejas de integración. Liderazgo de proyectos de transformación digital para grandes corporaciones.",icon:h.jsx(gm,{size:20})},{id:"salesforce-start",date:"2018 - 2020",title:"Inmersión en el Ecosistema Salesforce",location:"Medellín, Colombia",type:"work",description:"Transición desde desarrollo tradicional hacia el ecosistema Salesforce. Certificaciones múltiples y especialización en Lightning Platform.",icon:h.jsx(_y,{size:20})},{id:"early-career",date:"2016 - 2018",title:"Primeros Pasos en Desarrollo",location:"Medellín, Colombia",type:"work",description:"Inicio en desarrollo web con JavaScript, React y Node.js. Proyectos freelance y pequeñas startups. Descubrimiento de la pasión por crear experiencias digitales.",icon:h.jsx(gm,{size:20})}],c=u=>{switch(u){case"work":return"#10b981";case"personal":return"#ef4444";case"education":return"#3b82f6";default:return"#10b981"}};return h.jsxs(Lx,{children:[h.jsx(Hx,{children:"JOURNEY"}),h.jsxs(Bx,{children:[h.jsx(qx,{}),o.map((u,d)=>h.jsxs(Yx,{$isActive:a===u.id,$delay:d*.2,onClick:()=>s(a===u.id?null:u.id),children:[h.jsx(kc,{$color:c(u.type),children:u.icon}),h.jsxs(kx,{$isActive:a===u.id,children:[h.jsx(Gx,{children:u.date}),h.jsx(Vx,{children:u.title}),h.jsxs(Xx,{children:[h.jsx(Wc,{size:14}),u.location]}),(a===u.id||!a)&&h.jsx(Qx,{$isExpanded:a===u.id,children:u.description})]})]},u.id))]})]})},Kx=ge`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Jx=ge`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`,Fx=ge`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,Wx=O.div`
  margin-top: ${a=>a.theme.space[16]};
  margin-bottom: ${a=>a.theme.space[8]};
`,Ix=O.h2`
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes["2xl"]};
  color: ${a=>a.theme.colors.white};
  margin-bottom: ${a=>a.theme.space[8]};
  text-align: center;
`,Px=O.div`
  display: grid;
  gap: ${a=>a.theme.space[6]};
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-bottom: ${a=>a.theme.space[12]};
  
  ${me.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`,vp=O.div`
  width: 4rem;
  height: 4rem;
  margin: 0 auto ${a=>a.theme.space[4]};
  background: ${a=>a.$color}20;
  border: 2px solid ${a=>a.$color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${a=>a.$color};
  transition: ${a=>a.theme.transitions.base};
`,eS=O.div`
  background: rgba(17, 24, 39, 0.5);
  border: 1px solid ${a=>a.theme.colors.gray700};
  border-radius: ${a=>a.theme.borderRadius.lg};
  padding: ${a=>a.theme.space[6]};
  text-align: center;
  transition: ${a=>a.theme.transitions.base};
  position: relative;
  overflow: hidden;
  
  opacity: ${a=>a.$isVisible?1:0};
  transform: translateY(${a=>a.$isVisible?"0":"30px"});
  animation: ${a=>a.$isVisible?Kx:"none"} 0.8s ease-out both;
  animation-delay: ${a=>a.$delay}s;
  
  &:hover {
    border-color: ${a=>a.$color};
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    
    ${vp} {
      animation: ${Jx} 0.6s ease-in-out;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${a=>a.$color}, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`,tS=O.div`
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes["4xl"]};
  font-weight: ${a=>a.theme.fontWeights.bold};
  color: ${a=>a.$color};
  line-height: 1;
  margin-bottom: ${a=>a.theme.space[2]};
  
  ${me.lg} {
    font-size: ${a=>a.theme.fontSizes["5xl"]};
  }
`,aS=O.div`
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes.lg};
  color: ${a=>a.theme.colors.white};
  font-weight: ${a=>a.theme.fontWeights.semibold};
  margin-bottom: ${a=>a.theme.space[2]};
`,nS=O.p`
  font-size: ${a=>a.theme.fontSizes.sm};
  color: ${a=>a.theme.colors.gray400};
  line-height: ${a=>a.theme.lineHeights.relaxed};
`,iS=O.div`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid ${a=>a.theme.colors.gray700};
  border-radius: ${a=>a.theme.borderRadius.xl};
  padding: ${a=>a.theme.space[8]};
`,lS=O.div`
  display: flex;
  align-items: flex-start;
  gap: ${a=>a.theme.space[3]};
  padding: ${a=>a.theme.space[4]};
  background: rgba(17, 24, 39, 0.5);
  border-radius: ${a=>a.theme.borderRadius.base};
  transition: ${a=>a.theme.transitions.base};
  animation: ${Fx} 0.6s ease-out both;
  animation-delay: ${a=>a.$delay}s;
  
  &:hover {
    background: rgba(17, 24, 39, 0.8);
    transform: translateX(5px);
  }
`,sS=O.div`
  color: ${a=>a.theme.colors.primary};
  margin-top: ${a=>a.theme.space[1]};
  flex-shrink: 0;
`,rS=O.p`
  color: ${a=>a.theme.colors.gray300};
  font-size: ${a=>a.theme.fontSizes.sm};
  line-height: ${a=>a.theme.lineHeights.relaxed};
`,oS=()=>{const[a,s]=ae.useState({}),[o,c]=ae.useState(!1),u=[{id:"experience",icon:h.jsx(Xs,{size:24}),number:8,suffix:"+",label:"Años Programando",description:"Desde JavaScript vanilla hasta ecosistemas complejos",color:"#10b981"},{id:"projects",icon:h.jsx(bm,{size:24}),number:150,suffix:"+",label:"Proyectos Entregados",description:"Entre Salesforce, web development y narrativas digitales",color:"#f59e0b"},{id:"countries",icon:h.jsx(Lc,{size:24}),number:2,suffix:"",label:"Países",description:"Colombia → Australia: el journey que cambió todo",color:"#ef4444"},{id:"coffee",icon:h.jsx(Uc,{size:24}),number:2847,suffix:"+",label:"Cafés Tomados",description:"Combustible principal para la creatividad y el código",color:"#8b5cf6"},{id:"languages",icon:h.jsx(Hc,{size:24}),number:2,suffix:"",label:"Idiomas",description:"Español nativo, English fluent, Code universal",color:"#3b82f6"},{id:"certifications",icon:h.jsx(Wy,{size:24}),number:12,suffix:"+",label:"Certificaciones",description:"Salesforce, Cloud, y otras tecnologías",color:"#06b6d4"}],d=[{icon:h.jsx(Wc,{size:16}),text:"Nací en Medellín, ciudad de la eterna primavera y cuna de grandes innovadores"},{icon:h.jsx(Uc,{size:16}),text:"Mi setup perfecto: café colombiano + música instrumental + código limpio"},{icon:h.jsx(Xs,{size:16}),text:'Mi primer "Hello World" fue en Python, pero mi corazón se quedó con JavaScript'},{icon:h.jsx(Lc,{size:16}),text:"Brisbane me enseñó que el mejor código surge cuando sales de tu zona de comfort"},{icon:h.jsx(Hc,{size:16}),text:"Creo que la tecnología debe amplificar la humanidad, no reemplazarla"},{icon:h.jsx(bm,{size:16}),text:"Fragmentado nació de una pesadilla sobre IA controlando humanos"}];return ae.useEffect(()=>{const p=new IntersectionObserver(([v])=>{v.isIntersecting&&c(!0)},{threshold:.3}),y=document.getElementById("personal-stats");return y&&p.observe(y),()=>p.disconnect()},[]),ae.useEffect(()=>{o&&u.forEach(p=>{let y=0;const v=p.number/50,g=setInterval(()=>{y+=v,y>=p.number&&(y=p.number,clearInterval(g)),s(x=>({...x,[p.id]:Math.floor(y)}))},30)})},[o]),h.jsxs(Wx,{id:"personal-stats",children:[h.jsx(Ix,{children:"DATOS_PERSONALES"}),h.jsx(Px,{children:u.map((p,y)=>h.jsxs(eS,{$color:p.color,$delay:y*.1,$isVisible:o,children:[h.jsx(vp,{$color:p.color,children:p.icon}),h.jsxs(tS,{$color:p.color,children:[a[p.id]||0,p.suffix]}),h.jsx(aS,{children:p.label}),h.jsx(nS,{children:p.description})]},p.id))}),h.jsxs(iS,{children:[h.jsx("h3",{style:{fontFamily:"monospace",color:"#10b981",marginBottom:"1.5rem",textAlign:"center"},children:"// Fun Facts"}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"1rem"},children:d.map((p,y)=>h.jsxs(lS,{$delay:y*.1,children:[h.jsx(sS,{children:p.icon}),h.jsx(rS,{children:p.text})]},y))})]})]})},cS=ge`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,uS=ge`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,fS=O.section`
  padding: ${a=>a.theme.space[16]} 0;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`,dS=O.div`
  margin-bottom: ${a=>a.theme.space[16]};
  animation: ${cS} 1s ease-out;
`,hS=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${a=>a.theme.space[8]};
  text-align: center;
  
  ${me.lg} {
    flex-direction: row;
    text-align: left;
    gap: ${a=>a.theme.space[12]};
  }
`,mS=O.div`
  flex-shrink: 0;
`,pS=O.div`
  flex: 1;
`,gS=O.h1`
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes["4xl"]};
  font-weight: ${a=>a.theme.fontWeights.bold};
  color: ${a=>a.theme.colors.white};
  margin-bottom: ${a=>a.theme.space[4]};
  
  ${me.lg} {
    font-size: ${a=>a.theme.fontSizes["5xl"]};
  }
`,yS=O.p`
  font-size: ${a=>a.theme.fontSizes.xl};
  color: ${a=>a.theme.colors.gray300};
  line-height: ${a=>a.theme.lineHeights.relaxed};
  margin-bottom: ${a=>a.theme.space[6]};
  
  ${me.lg} {
    font-size: ${a=>a.theme.fontSizes["2xl"]};
  }
`,vS=O.div`
  display: grid;
  gap: ${a=>a.theme.space[3]};
  
  ${me.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`,bS=O.div`
  display: flex;
  align-items: center;
  gap: ${a=>a.theme.space[3]};
  padding: ${a=>a.theme.space[3]};
  background: rgba(17, 24, 39, 0.3);
  border-radius: ${a=>a.theme.borderRadius.base};
  border: 1px solid ${a=>a.theme.colors.gray700};
  transition: ${a=>a.theme.transitions.base};
  
  &:hover {
    border-color: ${a=>a.theme.colors.primary};
    background: rgba(17, 24, 39, 0.5);
  }
`,xS=O.div`
  color: ${a=>a.theme.colors.primary};
  flex-shrink: 0;
`,SS=O.span`
  color: ${a=>a.theme.colors.gray300};
  font-size: ${a=>a.theme.fontSizes.sm};
  line-height: ${a=>a.theme.lineHeights.snug};
`,$S=O.div`
  animation: ${uS} 1s ease-out 0.3s both;
`,zS=O.div`
  display: grid;
  gap: ${a=>a.theme.space[12]};
  margin-bottom: ${a=>a.theme.space[16]};
  
  ${me.lg} {
    grid-template-columns: 2fr 1fr;
    gap: ${a=>a.theme.space[16]};
  }
`,Tm=O.div``,Am=O.h2`
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes["2xl"]};
  color: ${a=>a.theme.colors.white};
  margin-bottom: ${a=>a.theme.space[6]};
  font-weight: ${a=>a.theme.fontWeights.bold};
`,jm=O.p`
  color: ${a=>a.theme.colors.gray300};
  line-height: ${a=>a.theme.lineHeights.relaxed};
  margin-bottom: ${a=>a.theme.space[6]};
  font-size: ${a=>a.theme.fontSizes.base};
`,ES=O.div`
  display: grid;
  gap: ${a=>a.theme.space[4]};
  margin-bottom: ${a=>a.theme.space[8]};
`,TS=O.div`
  display: flex;
  align-items: center;
  gap: ${a=>a.theme.space[4]};
  padding: ${a=>a.theme.space[4]};
  background: rgba(17, 24, 39, 0.3);
  border: 1px solid ${a=>a.theme.colors.gray700};
  border-radius: ${a=>a.theme.borderRadius.base};
  transition: ${a=>a.theme.transitions.base};
  cursor: ${a=>a.$isClickable?"pointer":"default"};
  
  &:hover {
    border-color: ${a=>a.theme.colors.primary};
    background: rgba(17, 24, 39, 0.5);
    transform: ${a=>a.$isClickable?"translateX(5px)":"none"};
  }
`,AS=O.div`
  color: ${a=>a.theme.colors.primary};
  flex-shrink: 0;
`,jS=O.div`
  flex: 1;
`,OS=O.div`
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes.xs};
  color: ${a=>a.theme.colors.gray400};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: ${a=>a.theme.space[1]};
`,RS=O.div`
  color: ${a=>a.$isActive?a.theme.colors.white:a.theme.colors.gray300};
  font-size: ${a=>a.theme.fontSizes.base};
  transition: ${a=>a.theme.transitions.base};
`,CS=O.div`
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid ${a=>a.theme.colors.gray700};
  border-left: 4px solid ${a=>a.theme.colors.primary};
  border-radius: ${a=>a.theme.borderRadius.lg};
  padding: ${a=>a.theme.space[6]};
`,NS=O.div`
  display: flex;
  align-items: center;
  gap: ${a=>a.theme.space[2]};
  font-family: ${a=>a.theme.fonts.mono};
  font-size: ${a=>a.theme.fontSizes.sm};
  color: ${a=>a.theme.colors.primary};
  margin-bottom: ${a=>a.theme.space[4]};
`,MS=O.p`
  color: ${a=>a.theme.colors.gray300};
  line-height: ${a=>a.theme.lineHeights.relaxed};
  font-size: ${a=>a.theme.fontSizes.sm};
`,_S=()=>{ci();const[a,s]=ae.useState(null),o=[{icon:h.jsx(ym,{size:20}),label:"Email",value:"carlos.rendon.duque@gmail.com",link:"mailto:carlos.rendon.duque@gmail.com",copyable:!0},{icon:h.jsx(Hy,{size:20}),label:"LinkedIn",value:"/in/carlosrendonduque",link:"https://linkedin.com/in/carlosrendonduque",copyable:!1},{icon:h.jsx(Cy,{size:20}),label:"GitHub",value:"Coming soon...",link:null,copyable:!1},{icon:h.jsx(Wc,{size:20}),label:"Location",value:"Brisbane, Queensland, Australia",link:null,copyable:!1}],c=[{icon:h.jsx(Xs,{size:20}),text:"8+ años desarrollando soluciones tecnológicas"},{icon:h.jsx(mp,{size:20}),text:"Maestría en Creative Writing & Digital Narratives"},{icon:h.jsx(Hc,{size:20}),text:"Especialista en narrativas interactivas y IA"},{icon:h.jsx(Uc,{size:20}),text:"Del bypass a ecosistemas narrativos vivos"}],u=async d=>{try{await navigator.clipboard.writeText(d),console.log("Copiado al portapapeles:",d)}catch(p){console.error("Error al copiar:",p)}};return h.jsxs(fS,{children:[h.jsx(dS,{children:h.jsxs(hS,{children:[h.jsx(mS,{children:h.jsx(xx,{size:200,showAnimation:!0})}),h.jsxs(pS,{children:[h.jsx(gS,{children:"ABOUT"}),h.jsx(yS,{children:"Del bypass a un ecosistema narrativo vivo que conecta historias, cuerpos y futuros."}),h.jsx(vS,{children:c.map((d,p)=>h.jsxs(bS,{children:[h.jsx(xS,{children:d.icon}),h.jsx(SS,{children:d.text})]},p))})]})]})}),h.jsxs($S,{children:[h.jsxs(zS,{children:[h.jsxs(Tm,{children:[h.jsx(Am,{children:"BACKGROUND"}),h.jsx(jm,{children:"Salesforce OmniStudio Engineer con más de 8 años de experiencia, actualmente completando una Maestría en Creative Writing y Digital Narratives. Mi trabajo explora la intersección entre tecnología y narrativa, con especial interés en la aplicación de IA en storytelling e interactive media."}),h.jsx(jm,{children:"Mi journey comenzó en Medellín, Colombia, y me ha llevado hasta Brisbane, Australia. Esta experiencia migratoria no solo cambió mi geografía, sino que transformó profundamente mi perspectiva sobre la identidad, el lenguaje y la tecnología como puentes entre mundos."}),h.jsx(wx,{})]}),h.jsxs(Tm,{children:[h.jsx(Am,{children:"CONTACTO"}),h.jsx(ES,{children:o.map((d,p)=>h.jsxs(TS,{$isClickable:d.link||d.copyable,onClick:()=>{d.copyable?u(d.value):d.link&&window.open(d.link,"_blank")},children:[h.jsx(AS,{children:d.icon}),h.jsxs(jS,{children:[h.jsx(OS,{children:d.label}),h.jsx(RS,{$isActive:d.link||d.copyable,children:d.value})]})]},p))}),h.jsxs(CS,{children:[h.jsxs(NS,{children:[h.jsx(Xs,{size:16}),"// Colaboraciones y proyectos"]}),h.jsx(MS,{children:"Abierto a colaboraciones en narrativas digitales, proyectos transmedia y exploración de nuevas formas de storytelling interactivo. Si tienes una idea que desafía los límites entre tecnología y humanidad, hablemos."}),h.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1.5rem",flexWrap:"wrap"},children:[h.jsx(yt,{variant:"primary",icon:h.jsx(ym,{size:16}),onClick:()=>window.location.href="mailto:carlos.rendon.duque@gmail.com",children:"Iniciar Conversación"}),h.jsx(yt,{variant:"secondary",icon:h.jsx(vy,{size:16}),onClick:()=>window.open("https://calendly.com/carlosrendon","_blank"),children:"Agendar Call"})]})]})]})]}),h.jsx(Zx,{activeItem:a,onItemSelect:s}),h.jsx(oS,{})]})]})},ie=a=>typeof a=="string",cl=()=>{let a,s;const o=new Promise((c,u)=>{a=c,s=u});return o.resolve=a,o.reject=s,o},Om=a=>a==null?"":""+a,wS=(a,s,o)=>{a.forEach(c=>{s[c]&&(o[c]=s[c])})},DS=/###/g,Rm=a=>a&&a.indexOf("###")>-1?a.replace(DS,"."):a,Cm=a=>!a||ie(a),dl=(a,s,o)=>{const c=ie(s)?s.split("."):s;let u=0;for(;u<c.length-1;){if(Cm(a))return{};const d=Rm(c[u]);!a[d]&&o&&(a[d]=new o),Object.prototype.hasOwnProperty.call(a,d)?a=a[d]:a={},++u}return Cm(a)?{}:{obj:a,k:Rm(c[u])}},Nm=(a,s,o)=>{const{obj:c,k:u}=dl(a,s,Object);if(c!==void 0||s.length===1){c[u]=o;return}let d=s[s.length-1],p=s.slice(0,s.length-1),y=dl(a,p,Object);for(;y.obj===void 0&&p.length;)d=`${p[p.length-1]}.${d}`,p=p.slice(0,p.length-1),y=dl(a,p,Object),y?.obj&&typeof y.obj[`${y.k}.${d}`]<"u"&&(y.obj=void 0);y.obj[`${y.k}.${d}`]=o},US=(a,s,o,c)=>{const{obj:u,k:d}=dl(a,s,Object);u[d]=u[d]||[],u[d].push(o)},Qs=(a,s)=>{const{obj:o,k:c}=dl(a,s);if(o&&Object.prototype.hasOwnProperty.call(o,c))return o[c]},LS=(a,s,o)=>{const c=Qs(a,o);return c!==void 0?c:Qs(s,o)},bp=(a,s,o)=>{for(const c in s)c!=="__proto__"&&c!=="constructor"&&(c in a?ie(a[c])||a[c]instanceof String||ie(s[c])||s[c]instanceof String?o&&(a[c]=s[c]):bp(a[c],s[c],o):a[c]=s[c]);return a},ti=a=>a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var HS={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const BS=a=>ie(a)?a.replace(/[&<>"'\/]/g,s=>HS[s]):a;class qS{constructor(s){this.capacity=s,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(s){const o=this.regExpMap.get(s);if(o!==void 0)return o;const c=new RegExp(s);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(s,c),this.regExpQueue.push(s),c}}const YS=[" ",",","?","!",";"],kS=new qS(20),GS=(a,s,o)=>{s=s||"",o=o||"";const c=YS.filter(p=>s.indexOf(p)<0&&o.indexOf(p)<0);if(c.length===0)return!0;const u=kS.getRegExp(`(${c.map(p=>p==="?"?"\\?":p).join("|")})`);let d=!u.test(a);if(!d){const p=a.indexOf(o);p>0&&!u.test(a.substring(0,p))&&(d=!0)}return d},Gc=(a,s,o=".")=>{if(!a)return;if(a[s])return Object.prototype.hasOwnProperty.call(a,s)?a[s]:void 0;const c=s.split(o);let u=a;for(let d=0;d<c.length;){if(!u||typeof u!="object")return;let p,y="";for(let v=d;v<c.length;++v)if(v!==d&&(y+=o),y+=c[v],p=u[y],p!==void 0){if(["string","number","boolean"].indexOf(typeof p)>-1&&v<c.length-1)continue;d+=v-d+1;break}u=p}return u},pl=a=>a?.replace("_","-"),VS={type:"logger",log(a){this.output("log",a)},warn(a){this.output("warn",a)},error(a){this.output("error",a)},output(a,s){console?.[a]?.apply?.(console,s)}};class Zs{constructor(s,o={}){this.init(s,o)}init(s,o={}){this.prefix=o.prefix||"i18next:",this.logger=s||VS,this.options=o,this.debug=o.debug}log(...s){return this.forward(s,"log","",!0)}warn(...s){return this.forward(s,"warn","",!0)}error(...s){return this.forward(s,"error","")}deprecate(...s){return this.forward(s,"warn","WARNING DEPRECATED: ",!0)}forward(s,o,c,u){return u&&!this.debug?null:(ie(s[0])&&(s[0]=`${c}${this.prefix} ${s[0]}`),this.logger[o](s))}create(s){return new Zs(this.logger,{prefix:`${this.prefix}:${s}:`,...this.options})}clone(s){return s=s||this.options,s.prefix=s.prefix||this.prefix,new Zs(this.logger,s)}}var It=new Zs;class tr{constructor(){this.observers={}}on(s,o){return s.split(" ").forEach(c=>{this.observers[c]||(this.observers[c]=new Map);const u=this.observers[c].get(o)||0;this.observers[c].set(o,u+1)}),this}off(s,o){if(this.observers[s]){if(!o){delete this.observers[s];return}this.observers[s].delete(o)}}emit(s,...o){this.observers[s]&&Array.from(this.observers[s].entries()).forEach(([u,d])=>{for(let p=0;p<d;p++)u(...o)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([u,d])=>{for(let p=0;p<d;p++)u.apply(u,[s,...o])})}}class Mm extends tr{constructor(s,o={ns:["translation"],defaultNS:"translation"}){super(),this.data=s||{},this.options=o,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(s){this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}removeNamespaces(s){const o=this.options.ns.indexOf(s);o>-1&&this.options.ns.splice(o,1)}getResource(s,o,c,u={}){const d=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator,p=u.ignoreJSONStructure!==void 0?u.ignoreJSONStructure:this.options.ignoreJSONStructure;let y;s.indexOf(".")>-1?y=s.split("."):(y=[s,o],c&&(Array.isArray(c)?y.push(...c):ie(c)&&d?y.push(...c.split(d)):y.push(c)));const v=Qs(this.data,y);return!v&&!o&&!c&&s.indexOf(".")>-1&&(s=y[0],o=y[1],c=y.slice(2).join(".")),v||!p||!ie(c)?v:Gc(this.data?.[s]?.[o],c,d)}addResource(s,o,c,u,d={silent:!1}){const p=d.keySeparator!==void 0?d.keySeparator:this.options.keySeparator;let y=[s,o];c&&(y=y.concat(p?c.split(p):c)),s.indexOf(".")>-1&&(y=s.split("."),u=o,o=y[1]),this.addNamespaces(o),Nm(this.data,y,u),d.silent||this.emit("added",s,o,c,u)}addResources(s,o,c,u={silent:!1}){for(const d in c)(ie(c[d])||Array.isArray(c[d]))&&this.addResource(s,o,d,c[d],{silent:!0});u.silent||this.emit("added",s,o,c)}addResourceBundle(s,o,c,u,d,p={silent:!1,skipCopy:!1}){let y=[s,o];s.indexOf(".")>-1&&(y=s.split("."),u=c,c=o,o=y[1]),this.addNamespaces(o);let v=Qs(this.data,y)||{};p.skipCopy||(c=JSON.parse(JSON.stringify(c))),u?bp(v,c,d):v={...v,...c},Nm(this.data,y,v),p.silent||this.emit("added",s,o,c)}removeResourceBundle(s,o){this.hasResourceBundle(s,o)&&delete this.data[s][o],this.removeNamespaces(o),this.emit("removed",s,o)}hasResourceBundle(s,o){return this.getResource(s,o)!==void 0}getResourceBundle(s,o){return o||(o=this.options.defaultNS),this.getResource(s,o)}getDataByLanguage(s){return this.data[s]}hasLanguageSomeTranslations(s){const o=this.getDataByLanguage(s);return!!(o&&Object.keys(o)||[]).find(u=>o[u]&&Object.keys(o[u]).length>0)}toJSON(){return this.data}}var xp={processors:{},addPostProcessor(a){this.processors[a.name]=a},handle(a,s,o,c,u){return a.forEach(d=>{s=this.processors[d]?.process(s,o,c,u)??s}),s}};const _m={},wm=a=>!ie(a)&&typeof a!="boolean"&&typeof a!="number";class Ks extends tr{constructor(s,o={}){super(),wS(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],s,this),this.options=o,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=It.create("translator")}changeLanguage(s){s&&(this.language=s)}exists(s,o={interpolation:{}}){const c={...o};return s==null?!1:this.resolve(s,c)?.res!==void 0}extractFromKey(s,o){let c=o.nsSeparator!==void 0?o.nsSeparator:this.options.nsSeparator;c===void 0&&(c=":");const u=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let d=o.ns||this.options.defaultNS||[];const p=c&&s.indexOf(c)>-1,y=!this.options.userDefinedKeySeparator&&!o.keySeparator&&!this.options.userDefinedNsSeparator&&!o.nsSeparator&&!GS(s,c,u);if(p&&!y){const v=s.match(this.interpolator.nestingRegexp);if(v&&v.length>0)return{key:s,namespaces:ie(d)?[d]:d};const g=s.split(c);(c!==u||c===u&&this.options.ns.indexOf(g[0])>-1)&&(d=g.shift()),s=g.join(u)}return{key:s,namespaces:ie(d)?[d]:d}}translate(s,o,c){let u=typeof o=="object"?{...o}:o;if(typeof u!="object"&&this.options.overloadTranslationOptionHandler&&(u=this.options.overloadTranslationOptionHandler(arguments)),typeof options=="object"&&(u={...u}),u||(u={}),s==null)return"";Array.isArray(s)||(s=[String(s)]);const d=u.returnDetails!==void 0?u.returnDetails:this.options.returnDetails,p=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator,{key:y,namespaces:v}=this.extractFromKey(s[s.length-1],u),g=v[v.length-1];let x=u.nsSeparator!==void 0?u.nsSeparator:this.options.nsSeparator;x===void 0&&(x=":");const E=u.lng||this.language,N=u.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(E?.toLowerCase()==="cimode")return N?d?{res:`${g}${x}${y}`,usedKey:y,exactUsedKey:y,usedLng:E,usedNS:g,usedParams:this.getUsedParamsDetails(u)}:`${g}${x}${y}`:d?{res:y,usedKey:y,exactUsedKey:y,usedLng:E,usedNS:g,usedParams:this.getUsedParamsDetails(u)}:y;const U=this.resolve(s,u);let L=U?.res;const V=U?.usedKey||y,I=U?.exactUsedKey||y,le=["[object Number]","[object Function]","[object RegExp]"],J=u.joinArrays!==void 0?u.joinArrays:this.options.joinArrays,W=!this.i18nFormat||this.i18nFormat.handleAsObject,X=u.count!==void 0&&!ie(u.count),Y=Ks.hasDefaultValue(u),Q=X?this.pluralResolver.getSuffix(E,u.count,u):"",k=u.ordinal&&X?this.pluralResolver.getSuffix(E,u.count,{ordinal:!1}):"",_e=X&&!u.ordinal&&u.count===0,Ne=_e&&u[`defaultValue${this.options.pluralSeparator}zero`]||u[`defaultValue${Q}`]||u[`defaultValue${k}`]||u.defaultValue;let Qe=L;W&&!L&&Y&&(Qe=Ne);const vt=wm(Qe),Ye=Object.prototype.toString.apply(Qe);if(W&&Qe&&vt&&le.indexOf(Ye)<0&&!(ie(J)&&Array.isArray(Qe))){if(!u.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const ke=this.options.returnedObjectHandler?this.options.returnedObjectHandler(V,Qe,{...u,ns:v}):`key '${y} (${this.language})' returned an object instead of string.`;return d?(U.res=ke,U.usedParams=this.getUsedParamsDetails(u),U):ke}if(p){const ke=Array.isArray(Qe),Le=ke?[]:{},He=ke?I:V;for(const C in Qe)if(Object.prototype.hasOwnProperty.call(Qe,C)){const H=`${He}${p}${C}`;Y&&!L?Le[C]=this.translate(H,{...u,defaultValue:wm(Ne)?Ne[C]:void 0,joinArrays:!1,ns:v}):Le[C]=this.translate(H,{...u,joinArrays:!1,ns:v}),Le[C]===H&&(Le[C]=Qe[C])}L=Le}}else if(W&&ie(J)&&Array.isArray(L))L=L.join(J),L&&(L=this.extendTranslation(L,s,u,c));else{let ke=!1,Le=!1;!this.isValidLookup(L)&&Y&&(ke=!0,L=Ne),this.isValidLookup(L)||(Le=!0,L=y);const C=(u.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&Le?void 0:L,H=Y&&Ne!==L&&this.options.updateMissing;if(Le||ke||H){if(this.logger.log(H?"updateKey":"missingKey",E,g,y,H?Ne:L),p){const M=this.resolve(y,{...u,keySeparator:!1});M&&M.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let Z=[];const se=this.languageUtils.getFallbackCodes(this.options.fallbackLng,u.lng||this.language);if(this.options.saveMissingTo==="fallback"&&se&&se[0])for(let M=0;M<se.length;M++)Z.push(se[M]);else this.options.saveMissingTo==="all"?Z=this.languageUtils.toResolveHierarchy(u.lng||this.language):Z.push(u.lng||this.language);const S=(M,B,q)=>{const K=Y&&q!==L?q:C;this.options.missingKeyHandler?this.options.missingKeyHandler(M,g,B,K,H,u):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(M,g,B,K,H,u),this.emit("missingKey",M,g,B,L)};this.options.saveMissing&&(this.options.saveMissingPlurals&&X?Z.forEach(M=>{const B=this.pluralResolver.getSuffixes(M,u);_e&&u[`defaultValue${this.options.pluralSeparator}zero`]&&B.indexOf(`${this.options.pluralSeparator}zero`)<0&&B.push(`${this.options.pluralSeparator}zero`),B.forEach(q=>{S([M],y+q,u[`defaultValue${q}`]||Ne)})}):S(Z,y,Ne))}L=this.extendTranslation(L,s,u,U,c),Le&&L===y&&this.options.appendNamespaceToMissingKey&&(L=`${g}${x}${y}`),(Le||ke)&&this.options.parseMissingKeyHandler&&(L=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${g}${x}${y}`:y,ke?L:void 0,u))}return d?(U.res=L,U.usedParams=this.getUsedParamsDetails(u),U):L}extendTranslation(s,o,c,u,d){if(this.i18nFormat?.parse)s=this.i18nFormat.parse(s,{...this.options.interpolation.defaultVariables,...c},c.lng||this.language||u.usedLng,u.usedNS,u.usedKey,{resolved:u});else if(!c.skipInterpolation){c.interpolation&&this.interpolator.init({...c,interpolation:{...this.options.interpolation,...c.interpolation}});const v=ie(s)&&(c?.interpolation?.skipOnVariables!==void 0?c.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let g;if(v){const E=s.match(this.interpolator.nestingRegexp);g=E&&E.length}let x=c.replace&&!ie(c.replace)?c.replace:c;if(this.options.interpolation.defaultVariables&&(x={...this.options.interpolation.defaultVariables,...x}),s=this.interpolator.interpolate(s,x,c.lng||this.language||u.usedLng,c),v){const E=s.match(this.interpolator.nestingRegexp),N=E&&E.length;g<N&&(c.nest=!1)}!c.lng&&u&&u.res&&(c.lng=this.language||u.usedLng),c.nest!==!1&&(s=this.interpolator.nest(s,(...E)=>d?.[0]===E[0]&&!c.context?(this.logger.warn(`It seems you are nesting recursively key: ${E[0]} in key: ${o[0]}`),null):this.translate(...E,o),c)),c.interpolation&&this.interpolator.reset()}const p=c.postProcess||this.options.postProcess,y=ie(p)?[p]:p;return s!=null&&y?.length&&c.applyPostProcessor!==!1&&(s=xp.handle(y,s,o,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...u,usedParams:this.getUsedParamsDetails(c)},...c}:c,this)),s}resolve(s,o={}){let c,u,d,p,y;return ie(s)&&(s=[s]),s.forEach(v=>{if(this.isValidLookup(c))return;const g=this.extractFromKey(v,o),x=g.key;u=x;let E=g.namespaces;this.options.fallbackNS&&(E=E.concat(this.options.fallbackNS));const N=o.count!==void 0&&!ie(o.count),U=N&&!o.ordinal&&o.count===0,L=o.context!==void 0&&(ie(o.context)||typeof o.context=="number")&&o.context!=="",V=o.lngs?o.lngs:this.languageUtils.toResolveHierarchy(o.lng||this.language,o.fallbackLng);E.forEach(I=>{this.isValidLookup(c)||(y=I,!_m[`${V[0]}-${I}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(y)&&(_m[`${V[0]}-${I}`]=!0,this.logger.warn(`key "${u}" for languages "${V.join(", ")}" won't get resolved as namespace "${y}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),V.forEach(le=>{if(this.isValidLookup(c))return;p=le;const J=[x];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(J,x,le,I,o);else{let X;N&&(X=this.pluralResolver.getSuffix(le,o.count,o));const Y=`${this.options.pluralSeparator}zero`,Q=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(N&&(J.push(x+X),o.ordinal&&X.indexOf(Q)===0&&J.push(x+X.replace(Q,this.options.pluralSeparator)),U&&J.push(x+Y)),L){const k=`${x}${this.options.contextSeparator}${o.context}`;J.push(k),N&&(J.push(k+X),o.ordinal&&X.indexOf(Q)===0&&J.push(k+X.replace(Q,this.options.pluralSeparator)),U&&J.push(k+Y))}}let W;for(;W=J.pop();)this.isValidLookup(c)||(d=W,c=this.getResource(le,I,W,o))}))})}),{res:c,usedKey:u,exactUsedKey:d,usedLng:p,usedNS:y}}isValidLookup(s){return s!==void 0&&!(!this.options.returnNull&&s===null)&&!(!this.options.returnEmptyString&&s==="")}getResource(s,o,c,u={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(s,o,c,u):this.resourceStore.getResource(s,o,c,u)}getUsedParamsDetails(s={}){const o=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],c=s.replace&&!ie(s.replace);let u=c?s.replace:s;if(c&&typeof s.count<"u"&&(u.count=s.count),this.options.interpolation.defaultVariables&&(u={...this.options.interpolation.defaultVariables,...u}),!c){u={...u};for(const d of o)delete u[d]}return u}static hasDefaultValue(s){const o="defaultValue";for(const c in s)if(Object.prototype.hasOwnProperty.call(s,c)&&o===c.substring(0,o.length)&&s[c]!==void 0)return!0;return!1}}class Dm{constructor(s){this.options=s,this.supportedLngs=this.options.supportedLngs||!1,this.logger=It.create("languageUtils")}getScriptPartFromCode(s){if(s=pl(s),!s||s.indexOf("-")<0)return null;const o=s.split("-");return o.length===2||(o.pop(),o[o.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(o.join("-"))}getLanguagePartFromCode(s){if(s=pl(s),!s||s.indexOf("-")<0)return s;const o=s.split("-");return this.formatLanguageCode(o[0])}formatLanguageCode(s){if(ie(s)&&s.indexOf("-")>-1){let o;try{o=Intl.getCanonicalLocales(s)[0]}catch{}return o&&this.options.lowerCaseLng&&(o=o.toLowerCase()),o||(this.options.lowerCaseLng?s.toLowerCase():s)}return this.options.cleanCode||this.options.lowerCaseLng?s.toLowerCase():s}isSupportedCode(s){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(s=this.getLanguagePartFromCode(s)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(s)>-1}getBestMatchFromCodes(s){if(!s)return null;let o;return s.forEach(c=>{if(o)return;const u=this.formatLanguageCode(c);(!this.options.supportedLngs||this.isSupportedCode(u))&&(o=u)}),!o&&this.options.supportedLngs&&s.forEach(c=>{if(o)return;const u=this.getScriptPartFromCode(c);if(this.isSupportedCode(u))return o=u;const d=this.getLanguagePartFromCode(c);if(this.isSupportedCode(d))return o=d;o=this.options.supportedLngs.find(p=>{if(p===d)return p;if(!(p.indexOf("-")<0&&d.indexOf("-")<0)&&(p.indexOf("-")>0&&d.indexOf("-")<0&&p.substring(0,p.indexOf("-"))===d||p.indexOf(d)===0&&d.length>1))return p})}),o||(o=this.getFallbackCodes(this.options.fallbackLng)[0]),o}getFallbackCodes(s,o){if(!s)return[];if(typeof s=="function"&&(s=s(o)),ie(s)&&(s=[s]),Array.isArray(s))return s;if(!o)return s.default||[];let c=s[o];return c||(c=s[this.getScriptPartFromCode(o)]),c||(c=s[this.formatLanguageCode(o)]),c||(c=s[this.getLanguagePartFromCode(o)]),c||(c=s.default),c||[]}toResolveHierarchy(s,o){const c=this.getFallbackCodes((o===!1?[]:o)||this.options.fallbackLng||[],s),u=[],d=p=>{p&&(this.isSupportedCode(p)?u.push(p):this.logger.warn(`rejecting language code not found in supportedLngs: ${p}`))};return ie(s)&&(s.indexOf("-")>-1||s.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&d(this.formatLanguageCode(s)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&d(this.getScriptPartFromCode(s)),this.options.load!=="currentOnly"&&d(this.getLanguagePartFromCode(s))):ie(s)&&d(this.formatLanguageCode(s)),c.forEach(p=>{u.indexOf(p)<0&&d(this.formatLanguageCode(p))}),u}}const Um={zero:0,one:1,two:2,few:3,many:4,other:5},Lm={select:a=>a===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class XS{constructor(s,o={}){this.languageUtils=s,this.options=o,this.logger=It.create("pluralResolver"),this.pluralRulesCache={}}addRule(s,o){this.rules[s]=o}clearCache(){this.pluralRulesCache={}}getRule(s,o={}){const c=pl(s==="dev"?"en":s),u=o.ordinal?"ordinal":"cardinal",d=JSON.stringify({cleanedCode:c,type:u});if(d in this.pluralRulesCache)return this.pluralRulesCache[d];let p;try{p=new Intl.PluralRules(c,{type:u})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Lm;if(!s.match(/-|_/))return Lm;const v=this.languageUtils.getLanguagePartFromCode(s);p=this.getRule(v,o)}return this.pluralRulesCache[d]=p,p}needsPlural(s,o={}){let c=this.getRule(s,o);return c||(c=this.getRule("dev",o)),c?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(s,o,c={}){return this.getSuffixes(s,c).map(u=>`${o}${u}`)}getSuffixes(s,o={}){let c=this.getRule(s,o);return c||(c=this.getRule("dev",o)),c?c.resolvedOptions().pluralCategories.sort((u,d)=>Um[u]-Um[d]).map(u=>`${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${u}`):[]}getSuffix(s,o,c={}){const u=this.getRule(s,c);return u?`${this.options.prepend}${c.ordinal?`ordinal${this.options.prepend}`:""}${u.select(o)}`:(this.logger.warn(`no plural rule found for: ${s}`),this.getSuffix("dev",o,c))}}const Hm=(a,s,o,c=".",u=!0)=>{let d=LS(a,s,o);return!d&&u&&ie(o)&&(d=Gc(a,o,c),d===void 0&&(d=Gc(s,o,c))),d},jc=a=>a.replace(/\$/g,"$$$$");class QS{constructor(s={}){this.logger=It.create("interpolator"),this.options=s,this.format=s?.interpolation?.format||(o=>o),this.init(s)}init(s={}){s.interpolation||(s.interpolation={escapeValue:!0});const{escape:o,escapeValue:c,useRawValueToEscape:u,prefix:d,prefixEscaped:p,suffix:y,suffixEscaped:v,formatSeparator:g,unescapeSuffix:x,unescapePrefix:E,nestingPrefix:N,nestingPrefixEscaped:U,nestingSuffix:L,nestingSuffixEscaped:V,nestingOptionsSeparator:I,maxReplaces:le,alwaysFormat:J}=s.interpolation;this.escape=o!==void 0?o:BS,this.escapeValue=c!==void 0?c:!0,this.useRawValueToEscape=u!==void 0?u:!1,this.prefix=d?ti(d):p||"{{",this.suffix=y?ti(y):v||"}}",this.formatSeparator=g||",",this.unescapePrefix=x?"":E||"-",this.unescapeSuffix=this.unescapePrefix?"":x||"",this.nestingPrefix=N?ti(N):U||ti("$t("),this.nestingSuffix=L?ti(L):V||ti(")"),this.nestingOptionsSeparator=I||",",this.maxReplaces=le||1e3,this.alwaysFormat=J!==void 0?J:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const s=(o,c)=>o?.source===c?(o.lastIndex=0,o):new RegExp(c,"g");this.regexp=s(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=s(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=s(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(s,o,c,u){let d,p,y;const v=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},g=U=>{if(U.indexOf(this.formatSeparator)<0){const le=Hm(o,v,U,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(le,void 0,c,{...u,...o,interpolationkey:U}):le}const L=U.split(this.formatSeparator),V=L.shift().trim(),I=L.join(this.formatSeparator).trim();return this.format(Hm(o,v,V,this.options.keySeparator,this.options.ignoreJSONStructure),I,c,{...u,...o,interpolationkey:V})};this.resetRegExp();const x=u?.missingInterpolationHandler||this.options.missingInterpolationHandler,E=u?.interpolation?.skipOnVariables!==void 0?u.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:U=>jc(U)},{regex:this.regexp,safeValue:U=>this.escapeValue?jc(this.escape(U)):jc(U)}].forEach(U=>{for(y=0;d=U.regex.exec(s);){const L=d[1].trim();if(p=g(L),p===void 0)if(typeof x=="function"){const I=x(s,d,u);p=ie(I)?I:""}else if(u&&Object.prototype.hasOwnProperty.call(u,L))p="";else if(E){p=d[0];continue}else this.logger.warn(`missed to pass in variable ${L} for interpolating ${s}`),p="";else!ie(p)&&!this.useRawValueToEscape&&(p=Om(p));const V=U.safeValue(p);if(s=s.replace(d[0],V),E?(U.regex.lastIndex+=p.length,U.regex.lastIndex-=d[0].length):U.regex.lastIndex=0,y++,y>=this.maxReplaces)break}}),s}nest(s,o,c={}){let u,d,p;const y=(v,g)=>{const x=this.nestingOptionsSeparator;if(v.indexOf(x)<0)return v;const E=v.split(new RegExp(`${x}[ ]*{`));let N=`{${E[1]}`;v=E[0],N=this.interpolate(N,p);const U=N.match(/'/g),L=N.match(/"/g);((U?.length??0)%2===0&&!L||L.length%2!==0)&&(N=N.replace(/'/g,'"'));try{p=JSON.parse(N),g&&(p={...g,...p})}catch(V){return this.logger.warn(`failed parsing options string in nesting for key ${v}`,V),`${v}${x}${N}`}return p.defaultValue&&p.defaultValue.indexOf(this.prefix)>-1&&delete p.defaultValue,v};for(;u=this.nestingRegexp.exec(s);){let v=[];p={...c},p=p.replace&&!ie(p.replace)?p.replace:p,p.applyPostProcessor=!1,delete p.defaultValue;const g=/{.*}/.test(u[1])?u[1].lastIndexOf("}")+1:u[1].indexOf(this.formatSeparator);if(g!==-1&&(v=u[1].slice(g).split(this.formatSeparator).map(x=>x.trim()).filter(Boolean),u[1]=u[1].slice(0,g)),d=o(y.call(this,u[1].trim(),p),p),d&&u[0]===s&&!ie(d))return d;ie(d)||(d=Om(d)),d||(this.logger.warn(`missed to resolve ${u[1]} for nesting ${s}`),d=""),v.length&&(d=v.reduce((x,E)=>this.format(x,E,c.lng,{...c,interpolationkey:u[1].trim()}),d.trim())),s=s.replace(u[0],d),this.regexp.lastIndex=0}return s}}const ZS=a=>{let s=a.toLowerCase().trim();const o={};if(a.indexOf("(")>-1){const c=a.split("(");s=c[0].toLowerCase().trim();const u=c[1].substring(0,c[1].length-1);s==="currency"&&u.indexOf(":")<0?o.currency||(o.currency=u.trim()):s==="relativetime"&&u.indexOf(":")<0?o.range||(o.range=u.trim()):u.split(";").forEach(p=>{if(p){const[y,...v]=p.split(":"),g=v.join(":").trim().replace(/^'+|'+$/g,""),x=y.trim();o[x]||(o[x]=g),g==="false"&&(o[x]=!1),g==="true"&&(o[x]=!0),isNaN(g)||(o[x]=parseInt(g,10))}})}return{formatName:s,formatOptions:o}},Bm=a=>{const s={};return(o,c,u)=>{let d=u;u&&u.interpolationkey&&u.formatParams&&u.formatParams[u.interpolationkey]&&u[u.interpolationkey]&&(d={...d,[u.interpolationkey]:void 0});const p=c+JSON.stringify(d);let y=s[p];return y||(y=a(pl(c),u),s[p]=y),y(o)}},KS=a=>(s,o,c)=>a(pl(o),c)(s);class JS{constructor(s={}){this.logger=It.create("formatter"),this.options=s,this.init(s)}init(s,o={interpolation:{}}){this.formatSeparator=o.interpolation.formatSeparator||",";const c=o.cacheInBuiltFormats?Bm:KS;this.formats={number:c((u,d)=>{const p=new Intl.NumberFormat(u,{...d});return y=>p.format(y)}),currency:c((u,d)=>{const p=new Intl.NumberFormat(u,{...d,style:"currency"});return y=>p.format(y)}),datetime:c((u,d)=>{const p=new Intl.DateTimeFormat(u,{...d});return y=>p.format(y)}),relativetime:c((u,d)=>{const p=new Intl.RelativeTimeFormat(u,{...d});return y=>p.format(y,d.range||"day")}),list:c((u,d)=>{const p=new Intl.ListFormat(u,{...d});return y=>p.format(y)})}}add(s,o){this.formats[s.toLowerCase().trim()]=o}addCached(s,o){this.formats[s.toLowerCase().trim()]=Bm(o)}format(s,o,c,u={}){const d=o.split(this.formatSeparator);if(d.length>1&&d[0].indexOf("(")>1&&d[0].indexOf(")")<0&&d.find(y=>y.indexOf(")")>-1)){const y=d.findIndex(v=>v.indexOf(")")>-1);d[0]=[d[0],...d.splice(1,y)].join(this.formatSeparator)}return d.reduce((y,v)=>{const{formatName:g,formatOptions:x}=ZS(v);if(this.formats[g]){let E=y;try{const N=u?.formatParams?.[u.interpolationkey]||{},U=N.locale||N.lng||u.locale||u.lng||c;E=this.formats[g](y,U,{...x,...u,...N})}catch(N){this.logger.warn(N)}return E}else this.logger.warn(`there was no format function for ${g}`);return y},s)}}const FS=(a,s)=>{a.pending[s]!==void 0&&(delete a.pending[s],a.pendingCount--)};class WS extends tr{constructor(s,o,c,u={}){super(),this.backend=s,this.store=o,this.services=c,this.languageUtils=c.languageUtils,this.options=u,this.logger=It.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=u.maxParallelReads||10,this.readingCalls=0,this.maxRetries=u.maxRetries>=0?u.maxRetries:5,this.retryTimeout=u.retryTimeout>=1?u.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(c,u.backend,u)}queueLoad(s,o,c,u){const d={},p={},y={},v={};return s.forEach(g=>{let x=!0;o.forEach(E=>{const N=`${g}|${E}`;!c.reload&&this.store.hasResourceBundle(g,E)?this.state[N]=2:this.state[N]<0||(this.state[N]===1?p[N]===void 0&&(p[N]=!0):(this.state[N]=1,x=!1,p[N]===void 0&&(p[N]=!0),d[N]===void 0&&(d[N]=!0),v[E]===void 0&&(v[E]=!0)))}),x||(y[g]=!0)}),(Object.keys(d).length||Object.keys(p).length)&&this.queue.push({pending:p,pendingCount:Object.keys(p).length,loaded:{},errors:[],callback:u}),{toLoad:Object.keys(d),pending:Object.keys(p),toLoadLanguages:Object.keys(y),toLoadNamespaces:Object.keys(v)}}loaded(s,o,c){const u=s.split("|"),d=u[0],p=u[1];o&&this.emit("failedLoading",d,p,o),!o&&c&&this.store.addResourceBundle(d,p,c,void 0,void 0,{skipCopy:!0}),this.state[s]=o?-1:2,o&&c&&(this.state[s]=0);const y={};this.queue.forEach(v=>{US(v.loaded,[d],p),FS(v,s),o&&v.errors.push(o),v.pendingCount===0&&!v.done&&(Object.keys(v.loaded).forEach(g=>{y[g]||(y[g]={});const x=v.loaded[g];x.length&&x.forEach(E=>{y[g][E]===void 0&&(y[g][E]=!0)})}),v.done=!0,v.errors.length?v.callback(v.errors):v.callback())}),this.emit("loaded",y),this.queue=this.queue.filter(v=>!v.done)}read(s,o,c,u=0,d=this.retryTimeout,p){if(!s.length)return p(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:s,ns:o,fcName:c,tried:u,wait:d,callback:p});return}this.readingCalls++;const y=(g,x)=>{if(this.readingCalls--,this.waitingReads.length>0){const E=this.waitingReads.shift();this.read(E.lng,E.ns,E.fcName,E.tried,E.wait,E.callback)}if(g&&x&&u<this.maxRetries){setTimeout(()=>{this.read.call(this,s,o,c,u+1,d*2,p)},d);return}p(g,x)},v=this.backend[c].bind(this.backend);if(v.length===2){try{const g=v(s,o);g&&typeof g.then=="function"?g.then(x=>y(null,x)).catch(y):y(null,g)}catch(g){y(g)}return}return v(s,o,y)}prepareLoading(s,o,c={},u){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),u&&u();ie(s)&&(s=this.languageUtils.toResolveHierarchy(s)),ie(o)&&(o=[o]);const d=this.queueLoad(s,o,c,u);if(!d.toLoad.length)return d.pending.length||u(),null;d.toLoad.forEach(p=>{this.loadOne(p)})}load(s,o,c){this.prepareLoading(s,o,{},c)}reload(s,o,c){this.prepareLoading(s,o,{reload:!0},c)}loadOne(s,o=""){const c=s.split("|"),u=c[0],d=c[1];this.read(u,d,"read",void 0,void 0,(p,y)=>{p&&this.logger.warn(`${o}loading namespace ${d} for language ${u} failed`,p),!p&&y&&this.logger.log(`${o}loaded namespace ${d} for language ${u}`,y),this.loaded(s,p,y)})}saveMissing(s,o,c,u,d,p={},y=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(o)){this.logger.warn(`did not save key "${c}" as the namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(c==null||c==="")){if(this.backend?.create){const v={...p,isUpdate:d},g=this.backend.create.bind(this.backend);if(g.length<6)try{let x;g.length===5?x=g(s,o,c,u,v):x=g(s,o,c,u),x&&typeof x.then=="function"?x.then(E=>y(null,E)).catch(y):y(null,x)}catch(x){y(x)}else g(s,o,c,u,y,v)}!s||!s[0]||this.store.addResource(s[0],o,c,u)}}}const qm=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:a=>{let s={};if(typeof a[1]=="object"&&(s=a[1]),ie(a[1])&&(s.defaultValue=a[1]),ie(a[2])&&(s.tDescription=a[2]),typeof a[2]=="object"||typeof a[3]=="object"){const o=a[3]||a[2];Object.keys(o).forEach(c=>{s[c]=o[c]})}return s},interpolation:{escapeValue:!0,format:a=>a,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Ym=a=>(ie(a.ns)&&(a.ns=[a.ns]),ie(a.fallbackLng)&&(a.fallbackLng=[a.fallbackLng]),ie(a.fallbackNS)&&(a.fallbackNS=[a.fallbackNS]),a.supportedLngs?.indexOf?.("cimode")<0&&(a.supportedLngs=a.supportedLngs.concat(["cimode"])),typeof a.initImmediate=="boolean"&&(a.initAsync=a.initImmediate),a),ws=()=>{},IS=a=>{Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach(o=>{typeof a[o]=="function"&&(a[o]=a[o].bind(a))})};class gl extends tr{constructor(s={},o){if(super(),this.options=Ym(s),this.services={},this.logger=It,this.modules={external:[]},IS(this),o&&!this.isInitialized&&!s.isClone){if(!this.options.initAsync)return this.init(s,o),this;setTimeout(()=>{this.init(s,o)},0)}}init(s={},o){this.isInitializing=!0,typeof s=="function"&&(o=s,s={}),s.defaultNS==null&&s.ns&&(ie(s.ns)?s.defaultNS=s.ns:s.ns.indexOf("translation")<0&&(s.defaultNS=s.ns[0]));const c=qm();this.options={...c,...this.options,...Ym(s)},this.options.interpolation={...c.interpolation,...this.options.interpolation},s.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=s.keySeparator),s.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=s.nsSeparator);const u=g=>g?typeof g=="function"?new g:g:null;if(!this.options.isClone){this.modules.logger?It.init(u(this.modules.logger),this.options):It.init(null,this.options);let g;this.modules.formatter?g=this.modules.formatter:g=JS;const x=new Dm(this.options);this.store=new Mm(this.options.resources,this.options);const E=this.services;E.logger=It,E.resourceStore=this.store,E.languageUtils=x,E.pluralResolver=new XS(x,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),g&&(!this.options.interpolation.format||this.options.interpolation.format===c.interpolation.format)&&(E.formatter=u(g),E.formatter.init(E,this.options),this.options.interpolation.format=E.formatter.format.bind(E.formatter)),E.interpolator=new QS(this.options),E.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},E.backendConnector=new WS(u(this.modules.backend),E.resourceStore,E,this.options),E.backendConnector.on("*",(N,...U)=>{this.emit(N,...U)}),this.modules.languageDetector&&(E.languageDetector=u(this.modules.languageDetector),E.languageDetector.init&&E.languageDetector.init(E,this.options.detection,this.options)),this.modules.i18nFormat&&(E.i18nFormat=u(this.modules.i18nFormat),E.i18nFormat.init&&E.i18nFormat.init(this)),this.translator=new Ks(this.services,this.options),this.translator.on("*",(N,...U)=>{this.emit(N,...U)}),this.modules.external.forEach(N=>{N.init&&N.init(this)})}if(this.format=this.options.interpolation.format,o||(o=ws),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const g=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);g.length>0&&g[0]!=="dev"&&(this.options.lng=g[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(g=>{this[g]=(...x)=>this.store[g](...x)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(g=>{this[g]=(...x)=>(this.store[g](...x),this)});const y=cl(),v=()=>{const g=(x,E)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),y.resolve(E),o(x,E)};if(this.languages&&!this.isInitialized)return g(null,this.t.bind(this));this.changeLanguage(this.options.lng,g)};return this.options.resources||!this.options.initAsync?v():setTimeout(v,0),y}loadResources(s,o=ws){let c=o;const u=ie(s)?s:this.language;if(typeof s=="function"&&(c=s),!this.options.resources||this.options.partialBundledLanguages){if(u?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return c();const d=[],p=y=>{if(!y||y==="cimode")return;this.services.languageUtils.toResolveHierarchy(y).forEach(g=>{g!=="cimode"&&d.indexOf(g)<0&&d.push(g)})};u?p(u):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(v=>p(v)),this.options.preload?.forEach?.(y=>p(y)),this.services.backendConnector.load(d,this.options.ns,y=>{!y&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),c(y)})}else c(null)}reloadResources(s,o,c){const u=cl();return typeof s=="function"&&(c=s,s=void 0),typeof o=="function"&&(c=o,o=void 0),s||(s=this.languages),o||(o=this.options.ns),c||(c=ws),this.services.backendConnector.reload(s,o,d=>{u.resolve(),c(d)}),u}use(s){if(!s)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!s.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return s.type==="backend"&&(this.modules.backend=s),(s.type==="logger"||s.log&&s.warn&&s.error)&&(this.modules.logger=s),s.type==="languageDetector"&&(this.modules.languageDetector=s),s.type==="i18nFormat"&&(this.modules.i18nFormat=s),s.type==="postProcessor"&&xp.addPostProcessor(s),s.type==="formatter"&&(this.modules.formatter=s),s.type==="3rdParty"&&this.modules.external.push(s),this}setResolvedLanguage(s){if(!(!s||!this.languages)&&!(["cimode","dev"].indexOf(s)>-1)){for(let o=0;o<this.languages.length;o++){const c=this.languages[o];if(!(["cimode","dev"].indexOf(c)>-1)&&this.store.hasLanguageSomeTranslations(c)){this.resolvedLanguage=c;break}}!this.resolvedLanguage&&this.languages.indexOf(s)<0&&this.store.hasLanguageSomeTranslations(s)&&(this.resolvedLanguage=s,this.languages.unshift(s))}}changeLanguage(s,o){this.isLanguageChangingTo=s;const c=cl();this.emit("languageChanging",s);const u=y=>{this.language=y,this.languages=this.services.languageUtils.toResolveHierarchy(y),this.resolvedLanguage=void 0,this.setResolvedLanguage(y)},d=(y,v)=>{v?this.isLanguageChangingTo===s&&(u(v),this.translator.changeLanguage(v),this.isLanguageChangingTo=void 0,this.emit("languageChanged",v),this.logger.log("languageChanged",v)):this.isLanguageChangingTo=void 0,c.resolve((...g)=>this.t(...g)),o&&o(y,(...g)=>this.t(...g))},p=y=>{!s&&!y&&this.services.languageDetector&&(y=[]);const v=ie(y)?y:y&&y[0],g=this.store.hasLanguageSomeTranslations(v)?v:this.services.languageUtils.getBestMatchFromCodes(ie(y)?[y]:y);g&&(this.language||u(g),this.translator.language||this.translator.changeLanguage(g),this.services.languageDetector?.cacheUserLanguage?.(g)),this.loadResources(g,x=>{d(x,g)})};return!s&&this.services.languageDetector&&!this.services.languageDetector.async?p(this.services.languageDetector.detect()):!s&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(p):this.services.languageDetector.detect(p):p(s),c}getFixedT(s,o,c){const u=(d,p,...y)=>{let v;typeof p!="object"?v=this.options.overloadTranslationOptionHandler([d,p].concat(y)):v={...p},v.lng=v.lng||u.lng,v.lngs=v.lngs||u.lngs,v.ns=v.ns||u.ns,v.keyPrefix!==""&&(v.keyPrefix=v.keyPrefix||c||u.keyPrefix);const g=this.options.keySeparator||".";let x;return v.keyPrefix&&Array.isArray(d)?x=d.map(E=>`${v.keyPrefix}${g}${E}`):x=v.keyPrefix?`${v.keyPrefix}${g}${d}`:d,this.t(x,v)};return ie(s)?u.lng=s:u.lngs=s,u.ns=o,u.keyPrefix=c,u}t(...s){return this.translator?.translate(...s)}exists(...s){return this.translator?.exists(...s)}setDefaultNamespace(s){this.options.defaultNS=s}hasLoadedNamespace(s,o={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const c=o.lng||this.resolvedLanguage||this.languages[0],u=this.options?this.options.fallbackLng:!1,d=this.languages[this.languages.length-1];if(c.toLowerCase()==="cimode")return!0;const p=(y,v)=>{const g=this.services.backendConnector.state[`${y}|${v}`];return g===-1||g===0||g===2};if(o.precheck){const y=o.precheck(this,p);if(y!==void 0)return y}return!!(this.hasResourceBundle(c,s)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||p(c,s)&&(!u||p(d,s)))}loadNamespaces(s,o){const c=cl();return this.options.ns?(ie(s)&&(s=[s]),s.forEach(u=>{this.options.ns.indexOf(u)<0&&this.options.ns.push(u)}),this.loadResources(u=>{c.resolve(),o&&o(u)}),c):(o&&o(),Promise.resolve())}loadLanguages(s,o){const c=cl();ie(s)&&(s=[s]);const u=this.options.preload||[],d=s.filter(p=>u.indexOf(p)<0&&this.services.languageUtils.isSupportedCode(p));return d.length?(this.options.preload=u.concat(d),this.loadResources(p=>{c.resolve(),o&&o(p)}),c):(o&&o(),Promise.resolve())}dir(s){if(s||(s=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!s)return"rtl";if(Intl.Locale){const u=new Intl.Locale(s);if(u&&u.getTextInfo){const d=u.getTextInfo();if(d&&d.direction)return d.direction}}const o=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],c=this.services?.languageUtils||new Dm(qm());return s.toLowerCase().indexOf("-latn")>1?"ltr":o.indexOf(c.getLanguagePartFromCode(s))>-1||s.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(s={},o){return new gl(s,o)}cloneInstance(s={},o=ws){const c=s.forkResourceStore;c&&delete s.forkResourceStore;const u={...this.options,...s,isClone:!0},d=new gl(u);if((s.debug!==void 0||s.prefix!==void 0)&&(d.logger=d.logger.clone(s)),["store","services","language"].forEach(y=>{d[y]=this[y]}),d.services={...this.services},d.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},c){const y=Object.keys(this.store.data).reduce((v,g)=>(v[g]={...this.store.data[g]},v[g]=Object.keys(v[g]).reduce((x,E)=>(x[E]={...v[g][E]},x),v[g]),v),{});d.store=new Mm(y,u),d.services.resourceStore=d.store}return d.translator=new Ks(d.services,u),d.translator.on("*",(y,...v)=>{d.emit(y,...v)}),d.init(u,o),d.translator.options=u,d.translator.backendConnector.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ut=gl.createInstance();ut.createInstance=gl.createInstance;ut.createInstance;ut.dir;ut.init;ut.loadResources;ut.reloadResources;ut.use;ut.changeLanguage;ut.getFixedT;ut.t;ut.exists;ut.setDefaultNamespace;ut.hasLoadedNamespace;ut.loadNamespaces;ut.loadLanguages;const PS={home:"home",laboratory:"laboratory",manifesto:"manifesto",about:"about"},e2={whoami:"$ whoami",name:"CARLOS RENDÓN",tagline:"i_build_bridges_where_others_see_chasms",description:"Between worlds that seemed separate, I create connections that transform ideas into experiences and experiences into narrative universes. Digital narratives, AI and interactivity.",exploreButton:"EXPLORE NARRATIVES",bridgesButton:"THE 4 BRIDGES"},t2={title:"FEATURED_PROJECTS",fragmentado:{title:"FRAGMENTADO",subtitle:"Interactive Novel",description:"A three-act story about the loss of humanity. Interactive narrative exploring control, implanted memory and technological genocide."}},a2={navigation:PS,hero:e2,projects:t2},n2={home:"inicio",laboratory:"laboratorio",manifesto:"manifiesto",about:"about"},i2={whoami:"$ whoami",name:"CARLOS RENDÓN",tagline:"construyo_puentes_donde_otros_ven_abismos",description:"Entre mundos que parecían separados, creo conexiones que transforman ideas en experiencias y experiencias en universos narrativos. Narrativas digitales, IA e interactividad.",exploreButton:"EXPLORAR NARRATIVAS",bridgesButton:"LOS 4 PUENTES"},l2={title:"PROYECTOS_DESTACADOS",fragmentado:{title:"FRAGMENTADO",subtitle:"Novela Interactiva",description:"Una historia en tres actos sobre la pérdida de la humanidad. Narrativa interactiva que explora el control, la memoria implantada y el genocidio tecnológico."}},s2={navigation:n2,hero:i2,projects:l2},r2={en:{translation:a2},es:{translation:s2}};ut.use(uv).init({resources:r2,lng:"es",fallbackLng:"en",interpolation:{escapeValue:!1}});function o2(){const[a,s]=ae.useState("home"),o=u=>{s(u)},c=()=>{switch(a){case"home":return h.jsx(zm,{onNavigate:o});case"laboratory":return h.jsx(Rb,{onProjectSelect:u=>console.log("Selected:",u)});case"manifesto":return h.jsx(mx,{});case"about":return h.jsx(_S,{});default:return h.jsx(zm,{onNavigate:o})}};return h.jsxs(W1,{theme:on,children:[h.jsx(ty,{}),h.jsx(jv,{currentSection:a,onSectionChange:s,children:c()})]})}Pg.createRoot(document.getElementById("root")).render(h.jsx(ae.StrictMode,{children:h.jsx(o2,{})}));
