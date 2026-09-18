function eh(o,d){for(var c=0;c<d.length;c++){const m=d[c];if(typeof m!="string"&&!Array.isArray(m)){for(const h in m)if(h!=="default"&&!(h in o)){const g=Object.getOwnPropertyDescriptor(m,h);g&&Object.defineProperty(o,h,g.get?g:{enumerable:!0,get:()=>m[h]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))m(h);new MutationObserver(h=>{for(const g of h)if(g.type==="childList")for(const w of g.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&m(w)}).observe(document,{childList:!0,subtree:!0});function c(h){const g={};return h.integrity&&(g.integrity=h.integrity),h.referrerPolicy&&(g.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?g.credentials="include":h.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function m(h){if(h.ep)return;h.ep=!0;const g=c(h);fetch(h.href,g)}})();function Td(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ks={exports:{}},Lr={},Js={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dd;function th(){if(dd)return Z;dd=1;var o=Symbol.for("react.element"),d=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),w=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),C=Symbol.iterator;function M(v){return v===null||typeof v!="object"?null:(v=C&&v[C]||v["@@iterator"],typeof v=="function"?v:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,q={};function I(v,E,X){this.props=v,this.context=E,this.refs=q,this.updater=X||G}I.prototype.isReactComponent={},I.prototype.setState=function(v,E){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,E,"setState")},I.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function te(){}te.prototype=I.prototype;function le(v,E,X){this.props=v,this.context=E,this.refs=q,this.updater=X||G}var re=le.prototype=new te;re.constructor=le,J(re,I.prototype),re.isPureReactComponent=!0;var ie=Array.isArray,Pe=Object.prototype.hasOwnProperty,Be={current:null},$e={key:!0,ref:!0,__self:!0,__source:!0};function at(v,E,X){var ee,ae={},se=null,me=null;if(E!=null)for(ee in E.ref!==void 0&&(me=E.ref),E.key!==void 0&&(se=""+E.key),E)Pe.call(E,ee)&&!$e.hasOwnProperty(ee)&&(ae[ee]=E[ee]);var ce=arguments.length-2;if(ce===1)ae.children=X;else if(1<ce){for(var ge=Array(ce),et=0;et<ce;et++)ge[et]=arguments[et+2];ae.children=ge}if(v&&v.defaultProps)for(ee in ce=v.defaultProps,ce)ae[ee]===void 0&&(ae[ee]=ce[ee]);return{$$typeof:o,type:v,key:se,ref:me,props:ae,_owner:Be.current}}function Ot(v,E){return{$$typeof:o,type:v.type,key:E,ref:v.ref,props:v.props,_owner:v._owner}}function Pt(v){return typeof v=="object"&&v!==null&&v.$$typeof===o}function cn(v){var E={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(X){return E[X]})}var jt=/\/+/g;function Ze(v,E){return typeof v=="object"&&v!==null&&v.key!=null?cn(""+v.key):E.toString(36)}function mt(v,E,X,ee,ae){var se=typeof v;(se==="undefined"||se==="boolean")&&(v=null);var me=!1;if(v===null)me=!0;else switch(se){case"string":case"number":me=!0;break;case"object":switch(v.$$typeof){case o:case d:me=!0}}if(me)return me=v,ae=ae(me),v=ee===""?"."+Ze(me,0):ee,ie(ae)?(X="",v!=null&&(X=v.replace(jt,"$&/")+"/"),mt(ae,E,X,"",function(et){return et})):ae!=null&&(Pt(ae)&&(ae=Ot(ae,X+(!ae.key||me&&me.key===ae.key?"":(""+ae.key).replace(jt,"$&/")+"/")+v)),E.push(ae)),1;if(me=0,ee=ee===""?".":ee+":",ie(v))for(var ce=0;ce<v.length;ce++){se=v[ce];var ge=ee+Ze(se,ce);me+=mt(se,E,X,ge,ae)}else if(ge=M(v),typeof ge=="function")for(v=ge.call(v),ce=0;!(se=v.next()).done;)se=se.value,ge=ee+Ze(se,ce++),me+=mt(se,E,X,ge,ae);else if(se==="object")throw E=String(v),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.");return me}function wt(v,E,X){if(v==null)return v;var ee=[],ae=0;return mt(v,ee,"","",function(se){return E.call(X,se,ae++)}),ee}function Ge(v){if(v._status===-1){var E=v._result;E=E(),E.then(function(X){(v._status===0||v._status===-1)&&(v._status=1,v._result=X)},function(X){(v._status===0||v._status===-1)&&(v._status=2,v._result=X)}),v._status===-1&&(v._status=0,v._result=E)}if(v._status===1)return v._result.default;throw v._result}var je={current:null},A={transition:null},Q={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:A,ReactCurrentOwner:Be};function F(){throw Error("act(...) is not supported in production builds of React.")}return Z.Children={map:wt,forEach:function(v,E,X){wt(v,function(){E.apply(this,arguments)},X)},count:function(v){var E=0;return wt(v,function(){E++}),E},toArray:function(v){return wt(v,function(E){return E})||[]},only:function(v){if(!Pt(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},Z.Component=I,Z.Fragment=c,Z.Profiler=h,Z.PureComponent=le,Z.StrictMode=m,Z.Suspense=N,Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,Z.act=F,Z.cloneElement=function(v,E,X){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var ee=J({},v.props),ae=v.key,se=v.ref,me=v._owner;if(E!=null){if(E.ref!==void 0&&(se=E.ref,me=Be.current),E.key!==void 0&&(ae=""+E.key),v.type&&v.type.defaultProps)var ce=v.type.defaultProps;for(ge in E)Pe.call(E,ge)&&!$e.hasOwnProperty(ge)&&(ee[ge]=E[ge]===void 0&&ce!==void 0?ce[ge]:E[ge])}var ge=arguments.length-2;if(ge===1)ee.children=X;else if(1<ge){ce=Array(ge);for(var et=0;et<ge;et++)ce[et]=arguments[et+2];ee.children=ce}return{$$typeof:o,type:v.type,key:ae,ref:se,props:ee,_owner:me}},Z.createContext=function(v){return v={$$typeof:w,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:g,_context:v},v.Consumer=v},Z.createElement=at,Z.createFactory=function(v){var E=at.bind(null,v);return E.type=v,E},Z.createRef=function(){return{current:null}},Z.forwardRef=function(v){return{$$typeof:b,render:v}},Z.isValidElement=Pt,Z.lazy=function(v){return{$$typeof:k,_payload:{_status:-1,_result:v},_init:Ge}},Z.memo=function(v,E){return{$$typeof:T,type:v,compare:E===void 0?null:E}},Z.startTransition=function(v){var E=A.transition;A.transition={};try{v()}finally{A.transition=E}},Z.unstable_act=F,Z.useCallback=function(v,E){return je.current.useCallback(v,E)},Z.useContext=function(v){return je.current.useContext(v)},Z.useDebugValue=function(){},Z.useDeferredValue=function(v){return je.current.useDeferredValue(v)},Z.useEffect=function(v,E){return je.current.useEffect(v,E)},Z.useId=function(){return je.current.useId()},Z.useImperativeHandle=function(v,E,X){return je.current.useImperativeHandle(v,E,X)},Z.useInsertionEffect=function(v,E){return je.current.useInsertionEffect(v,E)},Z.useLayoutEffect=function(v,E){return je.current.useLayoutEffect(v,E)},Z.useMemo=function(v,E){return je.current.useMemo(v,E)},Z.useReducer=function(v,E,X){return je.current.useReducer(v,E,X)},Z.useRef=function(v){return je.current.useRef(v)},Z.useState=function(v){return je.current.useState(v)},Z.useSyncExternalStore=function(v,E,X){return je.current.useSyncExternalStore(v,E,X)},Z.useTransition=function(){return je.current.useTransition()},Z.version="18.3.1",Z}var ud;function so(){return ud||(ud=1,Js.exports=th()),Js.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function nh(){if(md)return Lr;md=1;var o=so(),d=Symbol.for("react.element"),c=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,h=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function w(b,N,T){var k,C={},M=null,G=null;T!==void 0&&(M=""+T),N.key!==void 0&&(M=""+N.key),N.ref!==void 0&&(G=N.ref);for(k in N)m.call(N,k)&&!g.hasOwnProperty(k)&&(C[k]=N[k]);if(b&&b.defaultProps)for(k in N=b.defaultProps,N)C[k]===void 0&&(C[k]=N[k]);return{$$typeof:d,type:b,key:M,ref:G,props:C,_owner:h.current}}return Lr.Fragment=c,Lr.jsx=w,Lr.jsxs=w,Lr}var hd;function rh(){return hd||(hd=1,Ks.exports=nh()),Ks.exports}var n=rh(),P=so();const _d=Td(P),ih=eh({__proto__:null,default:_d},[P]);var Ki={},Xs={exports:{}},Xe={},Zs={exports:{}},eo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd;function ah(){return pd||(pd=1,(function(o){function d(A,Q){var F=A.length;A.push(Q);e:for(;0<F;){var v=F-1>>>1,E=A[v];if(0<h(E,Q))A[v]=Q,A[F]=E,F=v;else break e}}function c(A){return A.length===0?null:A[0]}function m(A){if(A.length===0)return null;var Q=A[0],F=A.pop();if(F!==Q){A[0]=F;e:for(var v=0,E=A.length,X=E>>>1;v<X;){var ee=2*(v+1)-1,ae=A[ee],se=ee+1,me=A[se];if(0>h(ae,F))se<E&&0>h(me,ae)?(A[v]=me,A[se]=F,v=se):(A[v]=ae,A[ee]=F,v=ee);else if(se<E&&0>h(me,F))A[v]=me,A[se]=F,v=se;else break e}}return Q}function h(A,Q){var F=A.sortIndex-Q.sortIndex;return F!==0?F:A.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var g=performance;o.unstable_now=function(){return g.now()}}else{var w=Date,b=w.now();o.unstable_now=function(){return w.now()-b}}var N=[],T=[],k=1,C=null,M=3,G=!1,J=!1,q=!1,I=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function re(A){for(var Q=c(T);Q!==null;){if(Q.callback===null)m(T);else if(Q.startTime<=A)m(T),Q.sortIndex=Q.expirationTime,d(N,Q);else break;Q=c(T)}}function ie(A){if(q=!1,re(A),!J)if(c(N)!==null)J=!0,Ge(Pe);else{var Q=c(T);Q!==null&&je(ie,Q.startTime-A)}}function Pe(A,Q){J=!1,q&&(q=!1,te(at),at=-1),G=!0;var F=M;try{for(re(Q),C=c(N);C!==null&&(!(C.expirationTime>Q)||A&&!cn());){var v=C.callback;if(typeof v=="function"){C.callback=null,M=C.priorityLevel;var E=v(C.expirationTime<=Q);Q=o.unstable_now(),typeof E=="function"?C.callback=E:C===c(N)&&m(N),re(Q)}else m(N);C=c(N)}if(C!==null)var X=!0;else{var ee=c(T);ee!==null&&je(ie,ee.startTime-Q),X=!1}return X}finally{C=null,M=F,G=!1}}var Be=!1,$e=null,at=-1,Ot=5,Pt=-1;function cn(){return!(o.unstable_now()-Pt<Ot)}function jt(){if($e!==null){var A=o.unstable_now();Pt=A;var Q=!0;try{Q=$e(!0,A)}finally{Q?Ze():(Be=!1,$e=null)}}else Be=!1}var Ze;if(typeof le=="function")Ze=function(){le(jt)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,wt=mt.port2;mt.port1.onmessage=jt,Ze=function(){wt.postMessage(null)}}else Ze=function(){I(jt,0)};function Ge(A){$e=A,Be||(Be=!0,Ze())}function je(A,Q){at=I(function(){A(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(A){A.callback=null},o.unstable_continueExecution=function(){J||G||(J=!0,Ge(Pe))},o.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ot=0<A?Math.floor(1e3/A):5},o.unstable_getCurrentPriorityLevel=function(){return M},o.unstable_getFirstCallbackNode=function(){return c(N)},o.unstable_next=function(A){switch(M){case 1:case 2:case 3:var Q=3;break;default:Q=M}var F=M;M=Q;try{return A()}finally{M=F}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(A,Q){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var F=M;M=A;try{return Q()}finally{M=F}},o.unstable_scheduleCallback=function(A,Q,F){var v=o.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?v+F:v):F=v,A){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=F+E,A={id:k++,callback:Q,priorityLevel:A,startTime:F,expirationTime:E,sortIndex:-1},F>v?(A.sortIndex=F,d(T,A),c(N)===null&&A===c(T)&&(q?(te(at),at=-1):q=!0,je(ie,F-v))):(A.sortIndex=E,d(N,A),J||G||(J=!0,Ge(Pe))),A},o.unstable_shouldYield=cn,o.unstable_wrapCallback=function(A){var Q=M;return function(){var F=M;M=Q;try{return A.apply(this,arguments)}finally{M=F}}}})(eo)),eo}var fd;function sh(){return fd||(fd=1,Zs.exports=ah()),Zs.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd;function oh(){if(gd)return Xe;gd=1;var o=so(),d=sh();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,h={};function g(e,t){w(e,t),w(e+"Capture",t)}function w(e,t){for(h[e]=t,e=0;e<t.length;e++)m.add(t[e])}var b=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),N=Object.prototype.hasOwnProperty,T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},C={};function M(e){return N.call(C,e)?!0:N.call(k,e)?!1:T.test(e)?C[e]=!0:(k[e]=!0,!1)}function G(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function J(e,t,r,i){if(t===null||typeof t>"u"||G(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function q(e,t,r,i,a,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){I[e]=new q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];I[t]=new q(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){I[e]=new q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){I[e]=new q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){I[e]=new q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){I[e]=new q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){I[e]=new q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){I[e]=new q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){I[e]=new q(e,5,!1,e.toLowerCase(),null,!1,!1)});var te=/[\-:]([a-z])/g;function le(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(te,le);I[t]=new q(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(te,le);I[t]=new q(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(te,le);I[t]=new q(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){I[e]=new q(e,1,!1,e.toLowerCase(),null,!1,!1)}),I.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){I[e]=new q(e,1,!1,e.toLowerCase(),null,!0,!0)});function re(e,t,r,i){var a=I.hasOwnProperty(t)?I[t]:null;(a!==null?a.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(J(t,r,a,i)&&(r=null),i||a===null?M(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,i=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var ie=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pe=Symbol.for("react.element"),Be=Symbol.for("react.portal"),$e=Symbol.for("react.fragment"),at=Symbol.for("react.strict_mode"),Ot=Symbol.for("react.profiler"),Pt=Symbol.for("react.provider"),cn=Symbol.for("react.context"),jt=Symbol.for("react.forward_ref"),Ze=Symbol.for("react.suspense"),mt=Symbol.for("react.suspense_list"),wt=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),A=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=A&&e[A]||e["@@iterator"],typeof e=="function"?e:null)}var F=Object.assign,v;function E(e){if(v===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);v=t&&t[1]||""}return`
`+v+e}var X=!1;function ee(e,t){if(!e||X)return"";X=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(j){var i=j}Reflect.construct(e,[],t)}else{try{t.call()}catch(j){i=j}e.call(t.prototype)}else{try{throw Error()}catch(j){i=j}e()}}catch(j){if(j&&i&&typeof j.stack=="string"){for(var a=j.stack.split(`
`),s=i.stack.split(`
`),l=a.length-1,u=s.length-1;1<=l&&0<=u&&a[l]!==s[u];)u--;for(;1<=l&&0<=u;l--,u--)if(a[l]!==s[u]){if(l!==1||u!==1)do if(l--,u--,0>u||a[l]!==s[u]){var p=`
`+a[l].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=l&&0<=u);break}}}finally{X=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?E(e):""}function ae(e){switch(e.tag){case 5:return E(e.type);case 16:return E("Lazy");case 13:return E("Suspense");case 19:return E("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $e:return"Fragment";case Be:return"Portal";case Ot:return"Profiler";case at:return"StrictMode";case Ze:return"Suspense";case mt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cn:return(e.displayName||"Context")+".Consumer";case Pt:return(e._context.displayName||"Context")+".Provider";case jt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wt:return t=e.displayName||null,t!==null?t:se(e.type)||"Memo";case Ge:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}function me(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(t);case 8:return t===at?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ge(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function et(e){var t=ge(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){i=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wr(e){e._valueTracker||(e._valueTracker=et(e))}function go(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=ge(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ra(e,t){var r=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function vo(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=ce(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yo(e,t){t=t.checked,t!=null&&re(e,"checked",t,!1)}function ia(e,t){yo(e,t);var r=ce(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?aa(e,t.type,r):t.hasOwnProperty("defaultValue")&&aa(e,t.type,ce(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xo(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function aa(e,t,r){(t!=="number"||Br(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Jn=Array.isArray;function bn(e,t,r,i){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&i&&(e[r].defaultSelected=!0)}else{for(r=""+ce(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function sa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function jo(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(c(92));if(Jn(r)){if(1<r.length)throw Error(c(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ce(r)}}function wo(e,t){var r=ce(t.value),i=ce(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function No(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ko(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ko(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hr,bo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hr=Hr||document.createElement("div"),Hr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iu=["Webkit","ms","Moz","O"];Object.keys(Zn).forEach(function(e){iu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zn[t]=Zn[e]})});function Co(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Zn.hasOwnProperty(e)&&Zn[e]?(""+t).trim():t+"px"}function So(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,a=Co(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,a):e[r]=a}}var au=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function la(e,t){if(t){if(au[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function ca(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var da=null;function ua(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ma=null,Cn=null,Sn=null;function Eo(e){if(e=wr(e)){if(typeof ma!="function")throw Error(c(280));var t=e.stateNode;t&&(t=ui(t),ma(e.stateNode,e.type,t))}}function zo(e){Cn?Sn?Sn.push(e):Sn=[e]:Cn=e}function Po(){if(Cn){var e=Cn,t=Sn;if(Sn=Cn=null,Eo(e),t)for(e=0;e<t.length;e++)Eo(t[e])}}function To(e,t){return e(t)}function _o(){}var ha=!1;function Mo(e,t,r){if(ha)return e(t,r);ha=!0;try{return To(e,t,r)}finally{ha=!1,(Cn!==null||Sn!==null)&&(_o(),Po())}}function er(e,t){var r=e.stateNode;if(r===null)return null;var i=ui(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(c(231,t,typeof r));return r}var pa=!1;if(b)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){pa=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{pa=!1}function su(e,t,r,i,a,s,l,u,p){var j=Array.prototype.slice.call(arguments,3);try{t.apply(r,j)}catch(z){this.onError(z)}}var nr=!1,qr=null,Ur=!1,fa=null,ou={onError:function(e){nr=!0,qr=e}};function lu(e,t,r,i,a,s,l,u,p){nr=!1,qr=null,su.apply(ou,arguments)}function cu(e,t,r,i,a,s,l,u,p){if(lu.apply(this,arguments),nr){if(nr){var j=qr;nr=!1,qr=null}else throw Error(c(198));Ur||(Ur=!0,fa=j)}}function dn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ro(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Io(e){if(dn(e)!==e)throw Error(c(188))}function du(e){var t=e.alternate;if(!t){if(t=dn(e),t===null)throw Error(c(188));return t!==e?null:e}for(var r=e,i=t;;){var a=r.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){r=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===r)return Io(a),e;if(s===i)return Io(a),t;s=s.sibling}throw Error(c(188))}if(r.return!==i.return)r=a,i=s;else{for(var l=!1,u=a.child;u;){if(u===r){l=!0,r=a,i=s;break}if(u===i){l=!0,i=a,r=s;break}u=u.sibling}if(!l){for(u=s.child;u;){if(u===r){l=!0,r=s,i=a;break}if(u===i){l=!0,i=s,r=a;break}u=u.sibling}if(!l)throw Error(c(189))}}if(r.alternate!==i)throw Error(c(190))}if(r.tag!==3)throw Error(c(188));return r.stateNode.current===r?e:t}function Ao(e){return e=du(e),e!==null?Lo(e):null}function Lo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Lo(e);if(t!==null)return t;e=e.sibling}return null}var Do=d.unstable_scheduleCallback,Fo=d.unstable_cancelCallback,uu=d.unstable_shouldYield,mu=d.unstable_requestPaint,Ne=d.unstable_now,hu=d.unstable_getCurrentPriorityLevel,ga=d.unstable_ImmediatePriority,Oo=d.unstable_UserBlockingPriority,$r=d.unstable_NormalPriority,pu=d.unstable_LowPriority,Wo=d.unstable_IdlePriority,Gr=null,Nt=null;function fu(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Gr,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:yu,gu=Math.log,vu=Math.LN2;function yu(e){return e>>>=0,e===0?32:31-(gu(e)/vu|0)|0}var Vr=64,Qr=4194304;function rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,s=e.pingedLanes,l=r&268435455;if(l!==0){var u=l&~a;u!==0?i=rr(u):(s&=l,s!==0&&(i=rr(s)))}else l=r&~a,l!==0?i=rr(l):s!==0&&(i=rr(s));if(i===0)return 0;if(t!==0&&t!==i&&(t&a)===0&&(a=i&-i,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if((i&4)!==0&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-ht(t),a=1<<r,i|=e[r],t&=~a;return i}function xu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ju(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-ht(s),u=1<<l,p=a[l];p===-1?((u&r)===0||(u&i)!==0)&&(a[l]=xu(u,t)):p<=t&&(e.expiredLanes|=u),s&=~u}}function va(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bo(){var e=Vr;return Vr<<=1,(Vr&4194240)===0&&(Vr=64),e}function ya(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ir(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=r}function wu(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-ht(r),s=1<<a;t[a]=0,i[a]=-1,e[a]=-1,r&=~s}}function xa(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-ht(r),a=1<<i;a&t|e[i]&t&&(e[i]|=t),r&=~a}}var de=0;function Ho(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var qo,ja,Uo,$o,Go,wa=!1,Kr=[],Wt=null,Bt=null,Ht=null,ar=new Map,sr=new Map,qt=[],Nu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vo(e,t){switch(e){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":sr.delete(t.pointerId)}}function or(e,t,r,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=wr(t),t!==null&&ja(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function ku(e,t,r,i,a){switch(t){case"focusin":return Wt=or(Wt,e,t,r,i,a),!0;case"dragenter":return Bt=or(Bt,e,t,r,i,a),!0;case"mouseover":return Ht=or(Ht,e,t,r,i,a),!0;case"pointerover":var s=a.pointerId;return ar.set(s,or(ar.get(s)||null,e,t,r,i,a)),!0;case"gotpointercapture":return s=a.pointerId,sr.set(s,or(sr.get(s)||null,e,t,r,i,a)),!0}return!1}function Qo(e){var t=un(e.target);if(t!==null){var r=dn(t);if(r!==null){if(t=r.tag,t===13){if(t=Ro(r),t!==null){e.blockedOn=t,Go(e.priority,function(){Uo(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ka(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);da=i,r.target.dispatchEvent(i),da=null}else return t=wr(r),t!==null&&ja(t),e.blockedOn=r,!1;t.shift()}return!0}function Yo(e,t,r){Jr(e)&&r.delete(t)}function bu(){wa=!1,Wt!==null&&Jr(Wt)&&(Wt=null),Bt!==null&&Jr(Bt)&&(Bt=null),Ht!==null&&Jr(Ht)&&(Ht=null),ar.forEach(Yo),sr.forEach(Yo)}function lr(e,t){e.blockedOn===t&&(e.blockedOn=null,wa||(wa=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,bu)))}function cr(e){function t(a){return lr(a,e)}if(0<Kr.length){lr(Kr[0],e);for(var r=1;r<Kr.length;r++){var i=Kr[r];i.blockedOn===e&&(i.blockedOn=null)}}for(Wt!==null&&lr(Wt,e),Bt!==null&&lr(Bt,e),Ht!==null&&lr(Ht,e),ar.forEach(t),sr.forEach(t),r=0;r<qt.length;r++)i=qt[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<qt.length&&(r=qt[0],r.blockedOn===null);)Qo(r),r.blockedOn===null&&qt.shift()}var En=ie.ReactCurrentBatchConfig,Xr=!0;function Cu(e,t,r,i){var a=de,s=En.transition;En.transition=null;try{de=1,Na(e,t,r,i)}finally{de=a,En.transition=s}}function Su(e,t,r,i){var a=de,s=En.transition;En.transition=null;try{de=4,Na(e,t,r,i)}finally{de=a,En.transition=s}}function Na(e,t,r,i){if(Xr){var a=ka(e,t,r,i);if(a===null)Wa(e,t,i,Zr,r),Vo(e,i);else if(ku(a,e,t,r,i))i.stopPropagation();else if(Vo(e,i),t&4&&-1<Nu.indexOf(e)){for(;a!==null;){var s=wr(a);if(s!==null&&qo(s),s=ka(e,t,r,i),s===null&&Wa(e,t,i,Zr,r),s===a)break;a=s}a!==null&&i.stopPropagation()}else Wa(e,t,i,null,r)}}var Zr=null;function ka(e,t,r,i){if(Zr=null,e=ua(i),e=un(e),e!==null)if(t=dn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ro(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zr=e,null}function Ko(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hu()){case ga:return 1;case Oo:return 4;case $r:case pu:return 16;case Wo:return 536870912;default:return 16}default:return 16}}var Ut=null,ba=null,ei=null;function Jo(){if(ei)return ei;var e,t=ba,r=t.length,i,a="value"in Ut?Ut.value:Ut.textContent,s=a.length;for(e=0;e<r&&t[e]===a[e];e++);var l=r-e;for(i=1;i<=l&&t[r-i]===a[s-i];i++);return ei=a.slice(e,1<i?1-i:void 0)}function ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ni(){return!0}function Xo(){return!1}function tt(e){function t(r,i,a,s,l){this._reactName=r,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(r=e[u],this[u]=r?r(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ni:Xo,this.isPropagationStopped=Xo,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ca=tt(zn),dr=F({},zn,{view:0,detail:0}),Eu=tt(dr),Sa,Ea,ur,ri=F({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ur&&(ur&&e.type==="mousemove"?(Sa=e.screenX-ur.screenX,Ea=e.screenY-ur.screenY):Ea=Sa=0,ur=e),Sa)},movementY:function(e){return"movementY"in e?e.movementY:Ea}}),Zo=tt(ri),zu=F({},ri,{dataTransfer:0}),Pu=tt(zu),Tu=F({},dr,{relatedTarget:0}),za=tt(Tu),_u=F({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Mu=tt(_u),Ru=F({},zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Iu=tt(Ru),Au=F({},zn,{data:0}),el=tt(Au),Lu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Du={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ou(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fu[e])?!!t[e]:!1}function Pa(){return Ou}var Wu=F({},dr,{key:function(e){if(e.key){var t=Lu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Du[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pa,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bu=tt(Wu),Hu=F({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tl=tt(Hu),qu=F({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pa}),Uu=tt(qu),$u=F({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gu=tt($u),Vu=F({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qu=tt(Vu),Yu=[9,13,27,32],Ta=b&&"CompositionEvent"in window,mr=null;b&&"documentMode"in document&&(mr=document.documentMode);var Ku=b&&"TextEvent"in window&&!mr,nl=b&&(!Ta||mr&&8<mr&&11>=mr),rl=" ",il=!1;function al(e,t){switch(e){case"keyup":return Yu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pn=!1;function Ju(e,t){switch(e){case"compositionend":return sl(t);case"keypress":return t.which!==32?null:(il=!0,rl);case"textInput":return e=t.data,e===rl&&il?null:e;default:return null}}function Xu(e,t){if(Pn)return e==="compositionend"||!Ta&&al(e,t)?(e=Jo(),ei=ba=Ut=null,Pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nl&&t.locale!=="ko"?null:t.data;default:return null}}var Zu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zu[e.type]:t==="textarea"}function ll(e,t,r,i){zo(i),t=li(t,"onChange"),0<t.length&&(r=new Ca("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var hr=null,pr=null;function em(e){Sl(e,0)}function ii(e){var t=In(e);if(go(t))return e}function tm(e,t){if(e==="change")return t}var cl=!1;if(b){var _a;if(b){var Ma="oninput"in document;if(!Ma){var dl=document.createElement("div");dl.setAttribute("oninput","return;"),Ma=typeof dl.oninput=="function"}_a=Ma}else _a=!1;cl=_a&&(!document.documentMode||9<document.documentMode)}function ul(){hr&&(hr.detachEvent("onpropertychange",ml),pr=hr=null)}function ml(e){if(e.propertyName==="value"&&ii(pr)){var t=[];ll(t,pr,e,ua(e)),Mo(em,t)}}function nm(e,t,r){e==="focusin"?(ul(),hr=t,pr=r,hr.attachEvent("onpropertychange",ml)):e==="focusout"&&ul()}function rm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ii(pr)}function im(e,t){if(e==="click")return ii(t)}function am(e,t){if(e==="input"||e==="change")return ii(t)}function sm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:sm;function fr(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var a=r[i];if(!N.call(t,a)||!pt(e[a],t[a]))return!1}return!0}function hl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pl(e,t){var r=hl(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=hl(r)}}function fl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gl(){for(var e=window,t=Br();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Br(e.document)}return t}function Ra(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function om(e){var t=gl(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&fl(r.ownerDocument.documentElement,r)){if(i!==null&&Ra(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,s=Math.min(i.start,a);i=i.end===void 0?s:Math.min(i.end,a),!e.extend&&s>i&&(a=i,i=s,s=a),a=pl(r,s);var l=pl(r,i);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>i?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lm=b&&"documentMode"in document&&11>=document.documentMode,Tn=null,Ia=null,gr=null,Aa=!1;function vl(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Aa||Tn==null||Tn!==Br(i)||(i=Tn,"selectionStart"in i&&Ra(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),gr&&fr(gr,i)||(gr=i,i=li(Ia,"onSelect"),0<i.length&&(t=new Ca("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=Tn)))}function ai(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var _n={animationend:ai("Animation","AnimationEnd"),animationiteration:ai("Animation","AnimationIteration"),animationstart:ai("Animation","AnimationStart"),transitionend:ai("Transition","TransitionEnd")},La={},yl={};b&&(yl=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);function si(e){if(La[e])return La[e];if(!_n[e])return e;var t=_n[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in yl)return La[e]=t[r];return e}var xl=si("animationend"),jl=si("animationiteration"),wl=si("animationstart"),Nl=si("transitionend"),kl=new Map,bl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $t(e,t){kl.set(e,t),g(t,[e])}for(var Da=0;Da<bl.length;Da++){var Fa=bl[Da],cm=Fa.toLowerCase(),dm=Fa[0].toUpperCase()+Fa.slice(1);$t(cm,"on"+dm)}$t(xl,"onAnimationEnd"),$t(jl,"onAnimationIteration"),$t(wl,"onAnimationStart"),$t("dblclick","onDoubleClick"),$t("focusin","onFocus"),$t("focusout","onBlur"),$t(Nl,"onTransitionEnd"),w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),g("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),g("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),g("onBeforeInput",["compositionend","keypress","textInput","paste"]),g("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),um=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function Cl(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,cu(i,t,void 0,e),e.currentTarget=null}function Sl(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],a=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var l=i.length-1;0<=l;l--){var u=i[l],p=u.instance,j=u.currentTarget;if(u=u.listener,p!==s&&a.isPropagationStopped())break e;Cl(a,u,j),s=p}else for(l=0;l<i.length;l++){if(u=i[l],p=u.instance,j=u.currentTarget,u=u.listener,p!==s&&a.isPropagationStopped())break e;Cl(a,u,j),s=p}}}if(Ur)throw e=fa,Ur=!1,fa=null,e}function pe(e,t){var r=t[Ga];r===void 0&&(r=t[Ga]=new Set);var i=e+"__bubble";r.has(i)||(El(t,e,2,!1),r.add(i))}function Oa(e,t,r){var i=0;t&&(i|=4),El(r,e,i,t)}var oi="_reactListening"+Math.random().toString(36).slice(2);function yr(e){if(!e[oi]){e[oi]=!0,m.forEach(function(r){r!=="selectionchange"&&(um.has(r)||Oa(r,!1,e),Oa(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oi]||(t[oi]=!0,Oa("selectionchange",!1,t))}}function El(e,t,r,i){switch(Ko(t)){case 1:var a=Cu;break;case 4:a=Su;break;default:a=Na}r=a.bind(null,t,r,e),a=void 0,!pa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Wa(e,t,r,i,a){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var u=i.stateNode.containerInfo;if(u===a||u.nodeType===8&&u.parentNode===a)break;if(l===4)for(l=i.return;l!==null;){var p=l.tag;if((p===3||p===4)&&(p=l.stateNode.containerInfo,p===a||p.nodeType===8&&p.parentNode===a))return;l=l.return}for(;u!==null;){if(l=un(u),l===null)return;if(p=l.tag,p===5||p===6){i=s=l;continue e}u=u.parentNode}}i=i.return}Mo(function(){var j=s,z=ua(r),_=[];e:{var S=kl.get(e);if(S!==void 0){var L=Ca,O=e;switch(e){case"keypress":if(ti(r)===0)break e;case"keydown":case"keyup":L=Bu;break;case"focusin":O="focus",L=za;break;case"focusout":O="blur",L=za;break;case"beforeblur":case"afterblur":L=za;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Pu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Uu;break;case xl:case jl:case wl:L=Mu;break;case Nl:L=Gu;break;case"scroll":L=Eu;break;case"wheel":L=Qu;break;case"copy":case"cut":case"paste":L=Iu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=tl}var W=(t&4)!==0,ke=!W&&e==="scroll",y=W?S!==null?S+"Capture":null:S;W=[];for(var f=j,x;f!==null;){x=f;var R=x.stateNode;if(x.tag===5&&R!==null&&(x=R,y!==null&&(R=er(f,y),R!=null&&W.push(xr(f,R,x)))),ke)break;f=f.return}0<W.length&&(S=new L(S,O,null,r,z),_.push({event:S,listeners:W}))}}if((t&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",S&&r!==da&&(O=r.relatedTarget||r.fromElement)&&(un(O)||O[Tt]))break e;if((L||S)&&(S=z.window===z?z:(S=z.ownerDocument)?S.defaultView||S.parentWindow:window,L?(O=r.relatedTarget||r.toElement,L=j,O=O?un(O):null,O!==null&&(ke=dn(O),O!==ke||O.tag!==5&&O.tag!==6)&&(O=null)):(L=null,O=j),L!==O)){if(W=Zo,R="onMouseLeave",y="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(W=tl,R="onPointerLeave",y="onPointerEnter",f="pointer"),ke=L==null?S:In(L),x=O==null?S:In(O),S=new W(R,f+"leave",L,r,z),S.target=ke,S.relatedTarget=x,R=null,un(z)===j&&(W=new W(y,f+"enter",O,r,z),W.target=x,W.relatedTarget=ke,R=W),ke=R,L&&O)t:{for(W=L,y=O,f=0,x=W;x;x=Mn(x))f++;for(x=0,R=y;R;R=Mn(R))x++;for(;0<f-x;)W=Mn(W),f--;for(;0<x-f;)y=Mn(y),x--;for(;f--;){if(W===y||y!==null&&W===y.alternate)break t;W=Mn(W),y=Mn(y)}W=null}else W=null;L!==null&&zl(_,S,L,W,!1),O!==null&&ke!==null&&zl(_,ke,O,W,!0)}}e:{if(S=j?In(j):window,L=S.nodeName&&S.nodeName.toLowerCase(),L==="select"||L==="input"&&S.type==="file")var H=tm;else if(ol(S))if(cl)H=am;else{H=rm;var U=nm}else(L=S.nodeName)&&L.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(H=im);if(H&&(H=H(e,j))){ll(_,H,r,z);break e}U&&U(e,S,j),e==="focusout"&&(U=S._wrapperState)&&U.controlled&&S.type==="number"&&aa(S,"number",S.value)}switch(U=j?In(j):window,e){case"focusin":(ol(U)||U.contentEditable==="true")&&(Tn=U,Ia=j,gr=null);break;case"focusout":gr=Ia=Tn=null;break;case"mousedown":Aa=!0;break;case"contextmenu":case"mouseup":case"dragend":Aa=!1,vl(_,r,z);break;case"selectionchange":if(lm)break;case"keydown":case"keyup":vl(_,r,z)}var $;if(Ta)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Pn?al(e,r)&&(Y="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Y="onCompositionStart");Y&&(nl&&r.locale!=="ko"&&(Pn||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Pn&&($=Jo()):(Ut=z,ba="value"in Ut?Ut.value:Ut.textContent,Pn=!0)),U=li(j,Y),0<U.length&&(Y=new el(Y,e,null,r,z),_.push({event:Y,listeners:U}),$?Y.data=$:($=sl(r),$!==null&&(Y.data=$)))),($=Ku?Ju(e,r):Xu(e,r))&&(j=li(j,"onBeforeInput"),0<j.length&&(z=new el("onBeforeInput","beforeinput",null,r,z),_.push({event:z,listeners:j}),z.data=$))}Sl(_,t)})}function xr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function li(e,t){for(var r=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=er(e,r),s!=null&&i.unshift(xr(e,s,a)),s=er(e,t),s!=null&&i.push(xr(e,s,a))),e=e.return}return i}function Mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zl(e,t,r,i,a){for(var s=t._reactName,l=[];r!==null&&r!==i;){var u=r,p=u.alternate,j=u.stateNode;if(p!==null&&p===i)break;u.tag===5&&j!==null&&(u=j,a?(p=er(r,s),p!=null&&l.unshift(xr(r,p,u))):a||(p=er(r,s),p!=null&&l.push(xr(r,p,u)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var mm=/\r\n?/g,hm=/\u0000|\uFFFD/g;function Pl(e){return(typeof e=="string"?e:""+e).replace(mm,`
`).replace(hm,"")}function ci(e,t,r){if(t=Pl(t),Pl(e)!==t&&r)throw Error(c(425))}function di(){}var Ba=null,Ha=null;function qa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ua=typeof setTimeout=="function"?setTimeout:void 0,pm=typeof clearTimeout=="function"?clearTimeout:void 0,Tl=typeof Promise=="function"?Promise:void 0,fm=typeof queueMicrotask=="function"?queueMicrotask:typeof Tl<"u"?function(e){return Tl.resolve(null).then(e).catch(gm)}:Ua;function gm(e){setTimeout(function(){throw e})}function $a(e,t){var r=t,i=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(i===0){e.removeChild(a),cr(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=a}while(r);cr(t)}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _l(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Rn=Math.random().toString(36).slice(2),kt="__reactFiber$"+Rn,jr="__reactProps$"+Rn,Tt="__reactContainer$"+Rn,Ga="__reactEvents$"+Rn,vm="__reactListeners$"+Rn,ym="__reactHandles$"+Rn;function un(e){var t=e[kt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Tt]||r[kt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=_l(e);e!==null;){if(r=e[kt])return r;e=_l(e)}return t}e=r,r=e.parentNode}return null}function wr(e){return e=e[kt]||e[Tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function ui(e){return e[jr]||null}var Va=[],An=-1;function Vt(e){return{current:e}}function fe(e){0>An||(e.current=Va[An],Va[An]=null,An--)}function he(e,t){An++,Va[An]=e.current,e.current=t}var Qt={},De=Vt(Qt),Ve=Vt(!1),mn=Qt;function Ln(e,t){var r=e.type.contextTypes;if(!r)return Qt;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in r)a[s]=t[s];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Qe(e){return e=e.childContextTypes,e!=null}function mi(){fe(Ve),fe(De)}function Ml(e,t,r){if(De.current!==Qt)throw Error(c(168));he(De,t),he(Ve,r)}function Rl(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var a in i)if(!(a in t))throw Error(c(108,me(e)||"Unknown",a));return F({},r,i)}function hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,mn=De.current,he(De,e),he(Ve,Ve.current),!0}function Il(e,t,r){var i=e.stateNode;if(!i)throw Error(c(169));r?(e=Rl(e,t,mn),i.__reactInternalMemoizedMergedChildContext=e,fe(Ve),fe(De),he(De,e)):fe(Ve),he(Ve,r)}var _t=null,pi=!1,Qa=!1;function Al(e){_t===null?_t=[e]:_t.push(e)}function xm(e){pi=!0,Al(e)}function Yt(){if(!Qa&&_t!==null){Qa=!0;var e=0,t=de;try{var r=_t;for(de=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}_t=null,pi=!1}catch(a){throw _t!==null&&(_t=_t.slice(e+1)),Do(ga,Yt),a}finally{de=t,Qa=!1}}return null}var Dn=[],Fn=0,fi=null,gi=0,st=[],ot=0,hn=null,Mt=1,Rt="";function pn(e,t){Dn[Fn++]=gi,Dn[Fn++]=fi,fi=e,gi=t}function Ll(e,t,r){st[ot++]=Mt,st[ot++]=Rt,st[ot++]=hn,hn=e;var i=Mt;e=Rt;var a=32-ht(i)-1;i&=~(1<<a),r+=1;var s=32-ht(t)+a;if(30<s){var l=a-a%5;s=(i&(1<<l)-1).toString(32),i>>=l,a-=l,Mt=1<<32-ht(t)+a|r<<a|i,Rt=s+e}else Mt=1<<s|r<<a|i,Rt=e}function Ya(e){e.return!==null&&(pn(e,1),Ll(e,1,0))}function Ka(e){for(;e===fi;)fi=Dn[--Fn],Dn[Fn]=null,gi=Dn[--Fn],Dn[Fn]=null;for(;e===hn;)hn=st[--ot],st[ot]=null,Rt=st[--ot],st[ot]=null,Mt=st[--ot],st[ot]=null}var nt=null,rt=null,ve=!1,ft=null;function Dl(e,t){var r=ut(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Fl(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,rt=Gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=hn!==null?{id:Mt,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=ut(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,nt=e,rt=null,!0):!1;default:return!1}}function Ja(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xa(e){if(ve){var t=rt;if(t){var r=t;if(!Fl(e,t)){if(Ja(e))throw Error(c(418));t=Gt(r.nextSibling);var i=nt;t&&Fl(e,t)?Dl(i,r):(e.flags=e.flags&-4097|2,ve=!1,nt=e)}}else{if(Ja(e))throw Error(c(418));e.flags=e.flags&-4097|2,ve=!1,nt=e}}}function Ol(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function vi(e){if(e!==nt)return!1;if(!ve)return Ol(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qa(e.type,e.memoizedProps)),t&&(t=rt)){if(Ja(e))throw Wl(),Error(c(418));for(;t;)Dl(e,t),t=Gt(t.nextSibling)}if(Ol(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){rt=Gt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=nt?Gt(e.stateNode.nextSibling):null;return!0}function Wl(){for(var e=rt;e;)e=Gt(e.nextSibling)}function On(){rt=nt=null,ve=!1}function Za(e){ft===null?ft=[e]:ft.push(e)}var jm=ie.ReactCurrentBatchConfig;function Nr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(c(309));var i=r.stateNode}if(!i)throw Error(c(147,e));var a=i,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var u=a.refs;l===null?delete u[s]:u[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(c(284));if(!r._owner)throw Error(c(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bl(e){var t=e._init;return t(e._payload)}function Hl(e){function t(y,f){if(e){var x=y.deletions;x===null?(y.deletions=[f],y.flags|=16):x.push(f)}}function r(y,f){if(!e)return null;for(;f!==null;)t(y,f),f=f.sibling;return null}function i(y,f){for(y=new Map;f!==null;)f.key!==null?y.set(f.key,f):y.set(f.index,f),f=f.sibling;return y}function a(y,f){return y=rn(y,f),y.index=0,y.sibling=null,y}function s(y,f,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<f?(y.flags|=2,f):x):(y.flags|=2,f)):(y.flags|=1048576,f)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function u(y,f,x,R){return f===null||f.tag!==6?(f=Us(x,y.mode,R),f.return=y,f):(f=a(f,x),f.return=y,f)}function p(y,f,x,R){var H=x.type;return H===$e?z(y,f,x.props.children,R,x.key):f!==null&&(f.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ge&&Bl(H)===f.type)?(R=a(f,x.props),R.ref=Nr(y,f,x),R.return=y,R):(R=Hi(x.type,x.key,x.props,null,y.mode,R),R.ref=Nr(y,f,x),R.return=y,R)}function j(y,f,x,R){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=$s(x,y.mode,R),f.return=y,f):(f=a(f,x.children||[]),f.return=y,f)}function z(y,f,x,R,H){return f===null||f.tag!==7?(f=Nn(x,y.mode,R,H),f.return=y,f):(f=a(f,x),f.return=y,f)}function _(y,f,x){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Us(""+f,y.mode,x),f.return=y,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Pe:return x=Hi(f.type,f.key,f.props,null,y.mode,x),x.ref=Nr(y,null,f),x.return=y,x;case Be:return f=$s(f,y.mode,x),f.return=y,f;case Ge:var R=f._init;return _(y,R(f._payload),x)}if(Jn(f)||Q(f))return f=Nn(f,y.mode,x,null),f.return=y,f;yi(y,f)}return null}function S(y,f,x,R){var H=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return H!==null?null:u(y,f,""+x,R);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Pe:return x.key===H?p(y,f,x,R):null;case Be:return x.key===H?j(y,f,x,R):null;case Ge:return H=x._init,S(y,f,H(x._payload),R)}if(Jn(x)||Q(x))return H!==null?null:z(y,f,x,R,null);yi(y,x)}return null}function L(y,f,x,R,H){if(typeof R=="string"&&R!==""||typeof R=="number")return y=y.get(x)||null,u(f,y,""+R,H);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Pe:return y=y.get(R.key===null?x:R.key)||null,p(f,y,R,H);case Be:return y=y.get(R.key===null?x:R.key)||null,j(f,y,R,H);case Ge:var U=R._init;return L(y,f,x,U(R._payload),H)}if(Jn(R)||Q(R))return y=y.get(x)||null,z(f,y,R,H,null);yi(f,R)}return null}function O(y,f,x,R){for(var H=null,U=null,$=f,Y=f=0,Me=null;$!==null&&Y<x.length;Y++){$.index>Y?(Me=$,$=null):Me=$.sibling;var oe=S(y,$,x[Y],R);if(oe===null){$===null&&($=Me);break}e&&$&&oe.alternate===null&&t(y,$),f=s(oe,f,Y),U===null?H=oe:U.sibling=oe,U=oe,$=Me}if(Y===x.length)return r(y,$),ve&&pn(y,Y),H;if($===null){for(;Y<x.length;Y++)$=_(y,x[Y],R),$!==null&&(f=s($,f,Y),U===null?H=$:U.sibling=$,U=$);return ve&&pn(y,Y),H}for($=i(y,$);Y<x.length;Y++)Me=L($,y,Y,x[Y],R),Me!==null&&(e&&Me.alternate!==null&&$.delete(Me.key===null?Y:Me.key),f=s(Me,f,Y),U===null?H=Me:U.sibling=Me,U=Me);return e&&$.forEach(function(an){return t(y,an)}),ve&&pn(y,Y),H}function W(y,f,x,R){var H=Q(x);if(typeof H!="function")throw Error(c(150));if(x=H.call(x),x==null)throw Error(c(151));for(var U=H=null,$=f,Y=f=0,Me=null,oe=x.next();$!==null&&!oe.done;Y++,oe=x.next()){$.index>Y?(Me=$,$=null):Me=$.sibling;var an=S(y,$,oe.value,R);if(an===null){$===null&&($=Me);break}e&&$&&an.alternate===null&&t(y,$),f=s(an,f,Y),U===null?H=an:U.sibling=an,U=an,$=Me}if(oe.done)return r(y,$),ve&&pn(y,Y),H;if($===null){for(;!oe.done;Y++,oe=x.next())oe=_(y,oe.value,R),oe!==null&&(f=s(oe,f,Y),U===null?H=oe:U.sibling=oe,U=oe);return ve&&pn(y,Y),H}for($=i(y,$);!oe.done;Y++,oe=x.next())oe=L($,y,Y,oe.value,R),oe!==null&&(e&&oe.alternate!==null&&$.delete(oe.key===null?Y:oe.key),f=s(oe,f,Y),U===null?H=oe:U.sibling=oe,U=oe);return e&&$.forEach(function(Zm){return t(y,Zm)}),ve&&pn(y,Y),H}function ke(y,f,x,R){if(typeof x=="object"&&x!==null&&x.type===$e&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Pe:e:{for(var H=x.key,U=f;U!==null;){if(U.key===H){if(H=x.type,H===$e){if(U.tag===7){r(y,U.sibling),f=a(U,x.props.children),f.return=y,y=f;break e}}else if(U.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ge&&Bl(H)===U.type){r(y,U.sibling),f=a(U,x.props),f.ref=Nr(y,U,x),f.return=y,y=f;break e}r(y,U);break}else t(y,U);U=U.sibling}x.type===$e?(f=Nn(x.props.children,y.mode,R,x.key),f.return=y,y=f):(R=Hi(x.type,x.key,x.props,null,y.mode,R),R.ref=Nr(y,f,x),R.return=y,y=R)}return l(y);case Be:e:{for(U=x.key;f!==null;){if(f.key===U)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){r(y,f.sibling),f=a(f,x.children||[]),f.return=y,y=f;break e}else{r(y,f);break}else t(y,f);f=f.sibling}f=$s(x,y.mode,R),f.return=y,y=f}return l(y);case Ge:return U=x._init,ke(y,f,U(x._payload),R)}if(Jn(x))return O(y,f,x,R);if(Q(x))return W(y,f,x,R);yi(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,f!==null&&f.tag===6?(r(y,f.sibling),f=a(f,x),f.return=y,y=f):(r(y,f),f=Us(x,y.mode,R),f.return=y,y=f),l(y)):r(y,f)}return ke}var Wn=Hl(!0),ql=Hl(!1),xi=Vt(null),ji=null,Bn=null,es=null;function ts(){es=Bn=ji=null}function ns(e){var t=xi.current;fe(xi),e._currentValue=t}function rs(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function Hn(e,t){ji=e,es=Bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ye=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(es!==e)if(e={context:e,memoizedValue:t,next:null},Bn===null){if(ji===null)throw Error(c(308));Bn=e,ji.dependencies={lanes:0,firstContext:e}}else Bn=Bn.next=e;return t}var fn=null;function is(e){fn===null?fn=[e]:fn.push(e)}function Ul(e,t,r,i){var a=t.interleaved;return a===null?(r.next=r,is(t)):(r.next=a.next,a.next=r),t.interleaved=r,It(e,i)}function It(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Kt=!1;function as(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $l(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ne&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,It(e,r)}return a=i.interleaved,a===null?(t.next=t,is(i)):(t.next=a.next,a.next=t),i.interleaved=t,It(e,r)}function wi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,xa(e,r)}}function Gl(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var a=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?a=s=l:s=s.next=l,r=r.next}while(r!==null);s===null?a=s=t:s=s.next=t}else a=s=t;r={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ni(e,t,r,i){var a=e.updateQueue;Kt=!1;var s=a.firstBaseUpdate,l=a.lastBaseUpdate,u=a.shared.pending;if(u!==null){a.shared.pending=null;var p=u,j=p.next;p.next=null,l===null?s=j:l.next=j,l=p;var z=e.alternate;z!==null&&(z=z.updateQueue,u=z.lastBaseUpdate,u!==l&&(u===null?z.firstBaseUpdate=j:u.next=j,z.lastBaseUpdate=p))}if(s!==null){var _=a.baseState;l=0,z=j=p=null,u=s;do{var S=u.lane,L=u.eventTime;if((i&S)===S){z!==null&&(z=z.next={eventTime:L,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var O=e,W=u;switch(S=t,L=r,W.tag){case 1:if(O=W.payload,typeof O=="function"){_=O.call(L,_,S);break e}_=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=W.payload,S=typeof O=="function"?O.call(L,_,S):O,S==null)break e;_=F({},_,S);break e;case 2:Kt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,S=a.effects,S===null?a.effects=[u]:S.push(u))}else L={eventTime:L,lane:S,tag:u.tag,payload:u.payload,callback:u.callback,next:null},z===null?(j=z=L,p=_):z=z.next=L,l|=S;if(u=u.next,u===null){if(u=a.shared.pending,u===null)break;S=u,u=S.next,S.next=null,a.lastBaseUpdate=S,a.shared.pending=null}}while(!0);if(z===null&&(p=_),a.baseState=p,a.firstBaseUpdate=j,a.lastBaseUpdate=z,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);yn|=l,e.lanes=l,e.memoizedState=_}}function Vl(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=r,typeof a!="function")throw Error(c(191,a));a.call(i)}}}var kr={},bt=Vt(kr),br=Vt(kr),Cr=Vt(kr);function gn(e){if(e===kr)throw Error(c(174));return e}function ss(e,t){switch(he(Cr,t),he(br,e),he(bt,kr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=oa(t,e)}fe(bt),he(bt,t)}function qn(){fe(bt),fe(br),fe(Cr)}function Ql(e){gn(Cr.current);var t=gn(bt.current),r=oa(t,e.type);t!==r&&(he(br,e),he(bt,r))}function os(e){br.current===e&&(fe(bt),fe(br))}var ye=Vt(0);function ki(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ls=[];function cs(){for(var e=0;e<ls.length;e++)ls[e]._workInProgressVersionPrimary=null;ls.length=0}var bi=ie.ReactCurrentDispatcher,ds=ie.ReactCurrentBatchConfig,vn=0,xe=null,Se=null,Te=null,Ci=!1,Sr=!1,Er=0,wm=0;function Fe(){throw Error(c(321))}function us(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!pt(e[r],t[r]))return!1;return!0}function ms(e,t,r,i,a,s){if(vn=s,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bi.current=e===null||e.memoizedState===null?Cm:Sm,e=r(i,a),Sr){s=0;do{if(Sr=!1,Er=0,25<=s)throw Error(c(301));s+=1,Te=Se=null,t.updateQueue=null,bi.current=Em,e=r(i,a)}while(Sr)}if(bi.current=zi,t=Se!==null&&Se.next!==null,vn=0,Te=Se=xe=null,Ci=!1,t)throw Error(c(300));return e}function hs(){var e=Er!==0;return Er=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?xe.memoizedState=Te=e:Te=Te.next=e,Te}function ct(){if(Se===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Te===null?xe.memoizedState:Te.next;if(t!==null)Te=t,Se=e;else{if(e===null)throw Error(c(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Te===null?xe.memoizedState=Te=e:Te=Te.next=e}return Te}function zr(e,t){return typeof t=="function"?t(e):t}function ps(e){var t=ct(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var i=Se,a=i.baseQueue,s=r.pending;if(s!==null){if(a!==null){var l=a.next;a.next=s.next,s.next=l}i.baseQueue=a=s,r.pending=null}if(a!==null){s=a.next,i=i.baseState;var u=l=null,p=null,j=s;do{var z=j.lane;if((vn&z)===z)p!==null&&(p=p.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),i=j.hasEagerState?j.eagerState:e(i,j.action);else{var _={lane:z,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};p===null?(u=p=_,l=i):p=p.next=_,xe.lanes|=z,yn|=z}j=j.next}while(j!==null&&j!==s);p===null?l=i:p.next=u,pt(i,t.memoizedState)||(Ye=!0),t.memoizedState=i,t.baseState=l,t.baseQueue=p,r.lastRenderedState=i}if(e=r.interleaved,e!==null){a=e;do s=a.lane,xe.lanes|=s,yn|=s,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function fs(e){var t=ct(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var i=r.dispatch,a=r.pending,s=t.memoizedState;if(a!==null){r.pending=null;var l=a=a.next;do s=e(s,l.action),l=l.next;while(l!==a);pt(s,t.memoizedState)||(Ye=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,i]}function Yl(){}function Kl(e,t){var r=xe,i=ct(),a=t(),s=!pt(i.memoizedState,a);if(s&&(i.memoizedState=a,Ye=!0),i=i.queue,gs(Zl.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||Te!==null&&Te.memoizedState.tag&1){if(r.flags|=2048,Pr(9,Xl.bind(null,r,i,a,t),void 0,null),_e===null)throw Error(c(349));(vn&30)!==0||Jl(r,t,a)}return a}function Jl(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Xl(e,t,r,i){t.value=r,t.getSnapshot=i,ec(t)&&tc(e)}function Zl(e,t,r){return r(function(){ec(t)&&tc(e)})}function ec(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!pt(e,r)}catch{return!0}}function tc(e){var t=It(e,1);t!==null&&xt(t,e,1,-1)}function nc(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zr,lastRenderedState:e},t.queue=e,e=e.dispatch=bm.bind(null,xe,e),[t.memoizedState,e]}function Pr(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function rc(){return ct().memoizedState}function Si(e,t,r,i){var a=Ct();xe.flags|=e,a.memoizedState=Pr(1|t,r,void 0,i===void 0?null:i)}function Ei(e,t,r,i){var a=ct();i=i===void 0?null:i;var s=void 0;if(Se!==null){var l=Se.memoizedState;if(s=l.destroy,i!==null&&us(i,l.deps)){a.memoizedState=Pr(t,r,s,i);return}}xe.flags|=e,a.memoizedState=Pr(1|t,r,s,i)}function ic(e,t){return Si(8390656,8,e,t)}function gs(e,t){return Ei(2048,8,e,t)}function ac(e,t){return Ei(4,2,e,t)}function sc(e,t){return Ei(4,4,e,t)}function oc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lc(e,t,r){return r=r!=null?r.concat([e]):null,Ei(4,4,oc.bind(null,t,e),r)}function vs(){}function cc(e,t){var r=ct();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&us(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function dc(e,t){var r=ct();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&us(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function uc(e,t,r){return(vn&21)===0?(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=r):(pt(r,t)||(r=Bo(),xe.lanes|=r,yn|=r,e.baseState=!0),t)}function Nm(e,t){var r=de;de=r!==0&&4>r?r:4,e(!0);var i=ds.transition;ds.transition={};try{e(!1),t()}finally{de=r,ds.transition=i}}function mc(){return ct().memoizedState}function km(e,t,r){var i=tn(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},hc(e))pc(t,r);else if(r=Ul(e,t,r,i),r!==null){var a=qe();xt(r,e,i,a),fc(r,t,i)}}function bm(e,t,r){var i=tn(e),a={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(hc(e))pc(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,u=s(l,r);if(a.hasEagerState=!0,a.eagerState=u,pt(u,l)){var p=t.interleaved;p===null?(a.next=a,is(t)):(a.next=p.next,p.next=a),t.interleaved=a;return}}catch{}finally{}r=Ul(e,t,a,i),r!==null&&(a=qe(),xt(r,e,i,a),fc(r,t,i))}}function hc(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function pc(e,t){Sr=Ci=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function fc(e,t,r){if((r&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,xa(e,r)}}var zi={readContext:lt,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},Cm={readContext:lt,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:ic,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Si(4194308,4,oc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Si(4194308,4,e,t)},useInsertionEffect:function(e,t){return Si(4,2,e,t)},useMemo:function(e,t){var r=Ct();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=Ct();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=km.bind(null,xe,e),[i.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:nc,useDebugValue:vs,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=nc(!1),t=e[0];return e=Nm.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=xe,a=Ct();if(ve){if(r===void 0)throw Error(c(407));r=r()}else{if(r=t(),_e===null)throw Error(c(349));(vn&30)!==0||Jl(i,t,r)}a.memoizedState=r;var s={value:r,getSnapshot:t};return a.queue=s,ic(Zl.bind(null,i,s,e),[e]),i.flags|=2048,Pr(9,Xl.bind(null,i,s,r,t),void 0,null),r},useId:function(){var e=Ct(),t=_e.identifierPrefix;if(ve){var r=Rt,i=Mt;r=(i&~(1<<32-ht(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=Er++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=wm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sm={readContext:lt,useCallback:cc,useContext:lt,useEffect:gs,useImperativeHandle:lc,useInsertionEffect:ac,useLayoutEffect:sc,useMemo:dc,useReducer:ps,useRef:rc,useState:function(){return ps(zr)},useDebugValue:vs,useDeferredValue:function(e){var t=ct();return uc(t,Se.memoizedState,e)},useTransition:function(){var e=ps(zr)[0],t=ct().memoizedState;return[e,t]},useMutableSource:Yl,useSyncExternalStore:Kl,useId:mc,unstable_isNewReconciler:!1},Em={readContext:lt,useCallback:cc,useContext:lt,useEffect:gs,useImperativeHandle:lc,useInsertionEffect:ac,useLayoutEffect:sc,useMemo:dc,useReducer:fs,useRef:rc,useState:function(){return fs(zr)},useDebugValue:vs,useDeferredValue:function(e){var t=ct();return Se===null?t.memoizedState=e:uc(t,Se.memoizedState,e)},useTransition:function(){var e=fs(zr)[0],t=ct().memoizedState;return[e,t]},useMutableSource:Yl,useSyncExternalStore:Kl,useId:mc,unstable_isNewReconciler:!1};function gt(e,t){if(e&&e.defaultProps){t=F({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ys(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:F({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Pi={isMounted:function(e){return(e=e._reactInternals)?dn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=qe(),a=tn(e),s=At(i,a);s.payload=t,r!=null&&(s.callback=r),t=Jt(e,s,a),t!==null&&(xt(t,e,a,i),wi(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=qe(),a=tn(e),s=At(i,a);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=Jt(e,s,a),t!==null&&(xt(t,e,a,i),wi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=qe(),i=tn(e),a=At(r,i);a.tag=2,t!=null&&(a.callback=t),t=Jt(e,a,i),t!==null&&(xt(t,e,i,r),wi(t,e,i))}};function gc(e,t,r,i,a,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,l):t.prototype&&t.prototype.isPureReactComponent?!fr(r,i)||!fr(a,s):!0}function vc(e,t,r){var i=!1,a=Qt,s=t.contextType;return typeof s=="object"&&s!==null?s=lt(s):(a=Qe(t)?mn:De.current,i=t.contextTypes,s=(i=i!=null)?Ln(e,a):Qt),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pi,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function yc(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&Pi.enqueueReplaceState(t,t.state,null)}function xs(e,t,r,i){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},as(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=lt(s):(s=Qe(t)?mn:De.current,a.context=Ln(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ys(e,t,s,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Pi.enqueueReplaceState(a,a.state,null),Ni(e,r,a,i),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Un(e,t){try{var r="",i=t;do r+=ae(i),i=i.return;while(i);var a=r}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function js(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ws(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var zm=typeof WeakMap=="function"?WeakMap:Map;function xc(e,t,r){r=At(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){Li||(Li=!0,Ls=i),ws(e,t)},r}function jc(e,t,r){r=At(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var a=t.value;r.payload=function(){return i(a)},r.callback=function(){ws(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){ws(e,t),typeof i!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function wc(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new zm;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(r)||(a.add(r),e=Hm.bind(null,e,t,r),t.then(e,e))}function Nc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kc(e,t,r,i,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=At(-1,1),t.tag=2,Jt(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Pm=ie.ReactCurrentOwner,Ye=!1;function He(e,t,r,i){t.child=e===null?ql(t,null,r,i):Wn(t,e.child,r,i)}function bc(e,t,r,i,a){r=r.render;var s=t.ref;return Hn(t,a),i=ms(e,t,r,i,s,a),r=hs(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Lt(e,t,a)):(ve&&r&&Ya(t),t.flags|=1,He(e,t,i,a),t.child)}function Cc(e,t,r,i,a){if(e===null){var s=r.type;return typeof s=="function"&&!qs(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,Sc(e,t,s,i,a)):(e=Hi(r.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&a)===0){var l=s.memoizedProps;if(r=r.compare,r=r!==null?r:fr,r(l,i)&&e.ref===t.ref)return Lt(e,t,a)}return t.flags|=1,e=rn(s,i),e.ref=t.ref,e.return=t,t.child=e}function Sc(e,t,r,i,a){if(e!==null){var s=e.memoizedProps;if(fr(s,i)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=i=s,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,Lt(e,t,a)}return Ns(e,t,r,i,a)}function Ec(e,t,r){var i=t.pendingProps,a=i.children,s=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Gn,it),it|=r;else{if((r&1073741824)===0)return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(Gn,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:r,he(Gn,it),it|=i}else s!==null?(i=s.baseLanes|r,t.memoizedState=null):i=r,he(Gn,it),it|=i;return He(e,t,a,r),t.child}function zc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ns(e,t,r,i,a){var s=Qe(r)?mn:De.current;return s=Ln(t,s),Hn(t,a),r=ms(e,t,r,i,s,a),i=hs(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Lt(e,t,a)):(ve&&i&&Ya(t),t.flags|=1,He(e,t,r,a),t.child)}function Pc(e,t,r,i,a){if(Qe(r)){var s=!0;hi(t)}else s=!1;if(Hn(t,a),t.stateNode===null)_i(e,t),vc(t,r,i),xs(t,r,i,a),i=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var p=l.context,j=r.contextType;typeof j=="object"&&j!==null?j=lt(j):(j=Qe(r)?mn:De.current,j=Ln(t,j));var z=r.getDerivedStateFromProps,_=typeof z=="function"||typeof l.getSnapshotBeforeUpdate=="function";_||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==i||p!==j)&&yc(t,l,i,j),Kt=!1;var S=t.memoizedState;l.state=S,Ni(t,i,l,a),p=t.memoizedState,u!==i||S!==p||Ve.current||Kt?(typeof z=="function"&&(ys(t,r,z,i),p=t.memoizedState),(u=Kt||gc(t,r,u,i,S,p,j))?(_||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=p),l.props=i,l.state=p,l.context=j,i=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{l=t.stateNode,$l(e,t),u=t.memoizedProps,j=t.type===t.elementType?u:gt(t.type,u),l.props=j,_=t.pendingProps,S=l.context,p=r.contextType,typeof p=="object"&&p!==null?p=lt(p):(p=Qe(r)?mn:De.current,p=Ln(t,p));var L=r.getDerivedStateFromProps;(z=typeof L=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==_||S!==p)&&yc(t,l,i,p),Kt=!1,S=t.memoizedState,l.state=S,Ni(t,i,l,a);var O=t.memoizedState;u!==_||S!==O||Ve.current||Kt?(typeof L=="function"&&(ys(t,r,L,i),O=t.memoizedState),(j=Kt||gc(t,r,j,i,S,O,p)||!1)?(z||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,O,p),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,O,p)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=O),l.props=i,l.state=O,l.context=p,i=j):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),i=!1)}return ks(e,t,r,i,s,a)}function ks(e,t,r,i,a,s){zc(e,t);var l=(t.flags&128)!==0;if(!i&&!l)return a&&Il(t,r,!1),Lt(e,t,s);i=t.stateNode,Pm.current=t;var u=l&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&l?(t.child=Wn(t,e.child,null,s),t.child=Wn(t,null,u,s)):He(e,t,u,s),t.memoizedState=i.state,a&&Il(t,r,!0),t.child}function Tc(e){var t=e.stateNode;t.pendingContext?Ml(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ml(e,t.context,!1),ss(e,t.containerInfo)}function _c(e,t,r,i,a){return On(),Za(a),t.flags|=256,He(e,t,r,i),t.child}var bs={dehydrated:null,treeContext:null,retryLane:0};function Cs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mc(e,t,r){var i=t.pendingProps,a=ye.current,s=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(a&2)!==0),u?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),he(ye,a&1),e===null)return Xa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=l):s=qi(l,i,0,null),e=Nn(e,i,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Cs(r),t.memoizedState=bs,e):Ss(t,l));if(a=e.memoizedState,a!==null&&(u=a.dehydrated,u!==null))return Tm(e,t,l,i,u,a,r);if(s){s=i.fallback,l=t.mode,a=e.child,u=a.sibling;var p={mode:"hidden",children:i.children};return(l&1)===0&&t.child!==a?(i=t.child,i.childLanes=0,i.pendingProps=p,t.deletions=null):(i=rn(a,p),i.subtreeFlags=a.subtreeFlags&14680064),u!==null?s=rn(u,s):(s=Nn(s,l,r,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=e.child.memoizedState,l=l===null?Cs(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~r,t.memoizedState=bs,i}return s=e.child,e=s.sibling,i=rn(s,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function Ss(e,t){return t=qi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ti(e,t,r,i){return i!==null&&Za(i),Wn(t,e.child,null,r),e=Ss(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tm(e,t,r,i,a,s,l){if(r)return t.flags&256?(t.flags&=-257,i=js(Error(c(422))),Ti(e,t,l,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=i.fallback,a=t.mode,i=qi({mode:"visible",children:i.children},a,0,null),s=Nn(s,a,l,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,(t.mode&1)!==0&&Wn(t,e.child,null,l),t.child.memoizedState=Cs(l),t.memoizedState=bs,s);if((t.mode&1)===0)return Ti(e,t,l,null);if(a.data==="$!"){if(i=a.nextSibling&&a.nextSibling.dataset,i)var u=i.dgst;return i=u,s=Error(c(419)),i=js(s,i,void 0),Ti(e,t,l,i)}if(u=(l&e.childLanes)!==0,Ye||u){if(i=_e,i!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|l))!==0?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,It(e,a),xt(i,e,a,-1))}return Hs(),i=js(Error(c(421))),Ti(e,t,l,i)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=qm.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,rt=Gt(a.nextSibling),nt=t,ve=!0,ft=null,e!==null&&(st[ot++]=Mt,st[ot++]=Rt,st[ot++]=hn,Mt=e.id,Rt=e.overflow,hn=t),t=Ss(t,i.children),t.flags|=4096,t)}function Rc(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),rs(e.return,t,r)}function Es(e,t,r,i,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=r,s.tailMode=a)}function Ic(e,t,r){var i=t.pendingProps,a=i.revealOrder,s=i.tail;if(He(e,t,i.children,r),i=ye.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rc(e,r,t);else if(e.tag===19)Rc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(he(ye,i),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&ki(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Es(t,!1,a,r,s);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ki(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Es(t,!0,r,null,s);break;case"together":Es(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _i(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,r=rn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=rn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function _m(e,t,r){switch(t.tag){case 3:Tc(t),On();break;case 5:Ql(t);break;case 1:Qe(t.type)&&hi(t);break;case 4:ss(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,a=t.memoizedProps.value;he(xi,i._currentValue),i._currentValue=a;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(he(ye,ye.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Mc(e,t,r):(he(ye,ye.current&1),e=Lt(e,t,r),e!==null?e.sibling:null);he(ye,ye.current&1);break;case 19:if(i=(r&t.childLanes)!==0,(e.flags&128)!==0){if(i)return Ic(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),he(ye,ye.current),i)break;return null;case 22:case 23:return t.lanes=0,Ec(e,t,r)}return Lt(e,t,r)}var Ac,zs,Lc,Dc;Ac=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},zs=function(){},Lc=function(e,t,r,i){var a=e.memoizedProps;if(a!==i){e=t.stateNode,gn(bt.current);var s=null;switch(r){case"input":a=ra(e,a),i=ra(e,i),s=[];break;case"select":a=F({},a,{value:void 0}),i=F({},i,{value:void 0}),s=[];break;case"textarea":a=sa(e,a),i=sa(e,i),s=[];break;default:typeof a.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=di)}la(r,i);var l;r=null;for(j in a)if(!i.hasOwnProperty(j)&&a.hasOwnProperty(j)&&a[j]!=null)if(j==="style"){var u=a[j];for(l in u)u.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(h.hasOwnProperty(j)?s||(s=[]):(s=s||[]).push(j,null));for(j in i){var p=i[j];if(u=a!=null?a[j]:void 0,i.hasOwnProperty(j)&&p!==u&&(p!=null||u!=null))if(j==="style")if(u){for(l in u)!u.hasOwnProperty(l)||p&&p.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in p)p.hasOwnProperty(l)&&u[l]!==p[l]&&(r||(r={}),r[l]=p[l])}else r||(s||(s=[]),s.push(j,r)),r=p;else j==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,u=u?u.__html:void 0,p!=null&&u!==p&&(s=s||[]).push(j,p)):j==="children"?typeof p!="string"&&typeof p!="number"||(s=s||[]).push(j,""+p):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(h.hasOwnProperty(j)?(p!=null&&j==="onScroll"&&pe("scroll",e),s||u===p||(s=[])):(s=s||[]).push(j,p))}r&&(s=s||[]).push("style",r);var j=s;(t.updateQueue=j)&&(t.flags|=4)}},Dc=function(e,t,r,i){r!==i&&(t.flags|=4)};function Tr(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,i|=a.subtreeFlags&14680064,i|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function Mm(e,t,r){var i=t.pendingProps;switch(Ka(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Qe(t.type)&&mi(),Oe(t),null;case 3:return i=t.stateNode,qn(),fe(Ve),fe(De),cs(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(vi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ft!==null&&(Os(ft),ft=null))),zs(e,t),Oe(t),null;case 5:os(t);var a=gn(Cr.current);if(r=t.type,e!==null&&t.stateNode!=null)Lc(e,t,r,i,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(c(166));return Oe(t),null}if(e=gn(bt.current),vi(t)){i=t.stateNode,r=t.type;var s=t.memoizedProps;switch(i[kt]=t,i[jr]=s,e=(t.mode&1)!==0,r){case"dialog":pe("cancel",i),pe("close",i);break;case"iframe":case"object":case"embed":pe("load",i);break;case"video":case"audio":for(a=0;a<vr.length;a++)pe(vr[a],i);break;case"source":pe("error",i);break;case"img":case"image":case"link":pe("error",i),pe("load",i);break;case"details":pe("toggle",i);break;case"input":vo(i,s),pe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pe("invalid",i);break;case"textarea":jo(i,s),pe("invalid",i)}la(r,s),a=null;for(var l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="children"?typeof u=="string"?i.textContent!==u&&(s.suppressHydrationWarning!==!0&&ci(i.textContent,u,e),a=["children",u]):typeof u=="number"&&i.textContent!==""+u&&(s.suppressHydrationWarning!==!0&&ci(i.textContent,u,e),a=["children",""+u]):h.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&pe("scroll",i)}switch(r){case"input":Wr(i),xo(i,s,!0);break;case"textarea":Wr(i),No(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=di)}i=a,t.updateQueue=i,i!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ko(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=l.createElement(r,{is:i.is}):(e=l.createElement(r),r==="select"&&(l=e,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):e=l.createElementNS(e,r),e[kt]=t,e[jr]=i,Ac(e,t,!1,!1),t.stateNode=e;e:{switch(l=ca(r,i),r){case"dialog":pe("cancel",e),pe("close",e),a=i;break;case"iframe":case"object":case"embed":pe("load",e),a=i;break;case"video":case"audio":for(a=0;a<vr.length;a++)pe(vr[a],e);a=i;break;case"source":pe("error",e),a=i;break;case"img":case"image":case"link":pe("error",e),pe("load",e),a=i;break;case"details":pe("toggle",e),a=i;break;case"input":vo(e,i),a=ra(e,i),pe("invalid",e);break;case"option":a=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},a=F({},i,{value:void 0}),pe("invalid",e);break;case"textarea":jo(e,i),a=sa(e,i),pe("invalid",e);break;default:a=i}la(r,a),u=a;for(s in u)if(u.hasOwnProperty(s)){var p=u[s];s==="style"?So(e,p):s==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&bo(e,p)):s==="children"?typeof p=="string"?(r!=="textarea"||p!=="")&&Xn(e,p):typeof p=="number"&&Xn(e,""+p):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(h.hasOwnProperty(s)?p!=null&&s==="onScroll"&&pe("scroll",e):p!=null&&re(e,s,p,l))}switch(r){case"input":Wr(e),xo(e,i,!1);break;case"textarea":Wr(e),No(e);break;case"option":i.value!=null&&e.setAttribute("value",""+ce(i.value));break;case"select":e.multiple=!!i.multiple,s=i.value,s!=null?bn(e,!!i.multiple,s,!1):i.defaultValue!=null&&bn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=di)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)Dc(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(c(166));if(r=gn(Cr.current),gn(bt.current),vi(t)){if(i=t.stateNode,r=t.memoizedProps,i[kt]=t,(s=i.nodeValue!==r)&&(e=nt,e!==null))switch(e.tag){case 3:ci(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ci(i.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[kt]=t,t.stateNode=i}return Oe(t),null;case 13:if(fe(ye),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&rt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Wl(),On(),t.flags|=98560,s=!1;else if(s=vi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(c(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));s[kt]=t}else On(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),s=!1}else ft!==null&&(Os(ft),ft=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ye.current&1)!==0?Ee===0&&(Ee=3):Hs())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return qn(),zs(e,t),e===null&&yr(t.stateNode.containerInfo),Oe(t),null;case 10:return ns(t.type._context),Oe(t),null;case 17:return Qe(t.type)&&mi(),Oe(t),null;case 19:if(fe(ye),s=t.memoizedState,s===null)return Oe(t),null;if(i=(t.flags&128)!==0,l=s.rendering,l===null)if(i)Tr(s,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ki(e),l!==null){for(t.flags|=128,Tr(s,!1),i=l.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)s=r,e=i,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return he(ye,ye.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ne()>Vn&&(t.flags|=128,i=!0,Tr(s,!1),t.lanes=4194304)}else{if(!i)if(e=ki(l),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Tr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!ve)return Oe(t),null}else 2*Ne()-s.renderingStartTime>Vn&&r!==1073741824&&(t.flags|=128,i=!0,Tr(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(r=s.last,r!==null?r.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ne(),t.sibling=null,r=ye.current,he(ye,i?r&1|2:r&1),t):(Oe(t),null);case 22:case 23:return Bs(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(it&1073741824)!==0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function Rm(e,t){switch(Ka(t),t.tag){case 1:return Qe(t.type)&&mi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qn(),fe(Ve),fe(De),cs(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return os(t),null;case 13:if(fe(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));On()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(ye),null;case 4:return qn(),null;case 10:return ns(t.type._context),null;case 22:case 23:return Bs(),null;case 24:return null;default:return null}}var Mi=!1,We=!1,Im=typeof WeakSet=="function"?WeakSet:Set,D=null;function $n(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){we(e,t,i)}else r.current=null}function Ps(e,t,r){try{r()}catch(i){we(e,t,i)}}var Fc=!1;function Am(e,t){if(Ba=Xr,e=gl(),Ra(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var l=0,u=-1,p=-1,j=0,z=0,_=e,S=null;t:for(;;){for(var L;_!==r||a!==0&&_.nodeType!==3||(u=l+a),_!==s||i!==0&&_.nodeType!==3||(p=l+i),_.nodeType===3&&(l+=_.nodeValue.length),(L=_.firstChild)!==null;)S=_,_=L;for(;;){if(_===e)break t;if(S===r&&++j===a&&(u=l),S===s&&++z===i&&(p=l),(L=_.nextSibling)!==null)break;_=S,S=_.parentNode}_=L}r=u===-1||p===-1?null:{start:u,end:p}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ha={focusedElem:e,selectionRange:r},Xr=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var O=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var W=O.memoizedProps,ke=O.memoizedState,y=t.stateNode,f=y.getSnapshotBeforeUpdate(t.elementType===t.type?W:gt(t.type,W),ke);y.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(R){we(t,t.return,R)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return O=Fc,Fc=!1,O}function _r(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&Ps(t,r,s)}a=a.next}while(a!==i)}}function Ri(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function Ts(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Oc(e){var t=e.alternate;t!==null&&(e.alternate=null,Oc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[jr],delete t[Ga],delete t[vm],delete t[ym])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wc(e){return e.tag===5||e.tag===3||e.tag===4}function Bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _s(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=di));else if(i!==4&&(e=e.child,e!==null))for(_s(e,t,r),e=e.sibling;e!==null;)_s(e,t,r),e=e.sibling}function Ms(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Ms(e,t,r),e=e.sibling;e!==null;)Ms(e,t,r),e=e.sibling}var Re=null,vt=!1;function Xt(e,t,r){for(r=r.child;r!==null;)Hc(e,t,r),r=r.sibling}function Hc(e,t,r){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Gr,r)}catch{}switch(r.tag){case 5:We||$n(r,t);case 6:var i=Re,a=vt;Re=null,Xt(e,t,r),Re=i,vt=a,Re!==null&&(vt?(e=Re,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Re.removeChild(r.stateNode));break;case 18:Re!==null&&(vt?(e=Re,r=r.stateNode,e.nodeType===8?$a(e.parentNode,r):e.nodeType===1&&$a(e,r),cr(e)):$a(Re,r.stateNode));break;case 4:i=Re,a=vt,Re=r.stateNode.containerInfo,vt=!0,Xt(e,t,r),Re=i,vt=a;break;case 0:case 11:case 14:case 15:if(!We&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){a=i=i.next;do{var s=a,l=s.destroy;s=s.tag,l!==void 0&&((s&2)!==0||(s&4)!==0)&&Ps(r,t,l),a=a.next}while(a!==i)}Xt(e,t,r);break;case 1:if(!We&&($n(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(u){we(r,t,u)}Xt(e,t,r);break;case 21:Xt(e,t,r);break;case 22:r.mode&1?(We=(i=We)||r.memoizedState!==null,Xt(e,t,r),We=i):Xt(e,t,r);break;default:Xt(e,t,r)}}function qc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Im),t.forEach(function(i){var a=Um.bind(null,e,i);r.has(i)||(r.add(i),i.then(a,a))})}}function yt(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var a=r[i];try{var s=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:Re=u.stateNode,vt=!1;break e;case 3:Re=u.stateNode.containerInfo,vt=!0;break e;case 4:Re=u.stateNode.containerInfo,vt=!0;break e}u=u.return}if(Re===null)throw Error(c(160));Hc(s,l,a),Re=null,vt=!1;var p=a.alternate;p!==null&&(p.return=null),a.return=null}catch(j){we(a,t,j)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Uc(t,e),t=t.sibling}function Uc(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yt(t,e),St(e),i&4){try{_r(3,e,e.return),Ri(3,e)}catch(W){we(e,e.return,W)}try{_r(5,e,e.return)}catch(W){we(e,e.return,W)}}break;case 1:yt(t,e),St(e),i&512&&r!==null&&$n(r,r.return);break;case 5:if(yt(t,e),St(e),i&512&&r!==null&&$n(r,r.return),e.flags&32){var a=e.stateNode;try{Xn(a,"")}catch(W){we(e,e.return,W)}}if(i&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,l=r!==null?r.memoizedProps:s,u=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{u==="input"&&s.type==="radio"&&s.name!=null&&yo(a,s),ca(u,l);var j=ca(u,s);for(l=0;l<p.length;l+=2){var z=p[l],_=p[l+1];z==="style"?So(a,_):z==="dangerouslySetInnerHTML"?bo(a,_):z==="children"?Xn(a,_):re(a,z,_,j)}switch(u){case"input":ia(a,s);break;case"textarea":wo(a,s);break;case"select":var S=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var L=s.value;L!=null?bn(a,!!s.multiple,L,!1):S!==!!s.multiple&&(s.defaultValue!=null?bn(a,!!s.multiple,s.defaultValue,!0):bn(a,!!s.multiple,s.multiple?[]:"",!1))}a[jr]=s}catch(W){we(e,e.return,W)}}break;case 6:if(yt(t,e),St(e),i&4){if(e.stateNode===null)throw Error(c(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(W){we(e,e.return,W)}}break;case 3:if(yt(t,e),St(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{cr(t.containerInfo)}catch(W){we(e,e.return,W)}break;case 4:yt(t,e),St(e);break;case 13:yt(t,e),St(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(As=Ne())),i&4&&qc(e);break;case 22:if(z=r!==null&&r.memoizedState!==null,e.mode&1?(We=(j=We)||z,yt(t,e),We=j):yt(t,e),St(e),i&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!z&&(e.mode&1)!==0)for(D=e,z=e.child;z!==null;){for(_=D=z;D!==null;){switch(S=D,L=S.child,S.tag){case 0:case 11:case 14:case 15:_r(4,S,S.return);break;case 1:$n(S,S.return);var O=S.stateNode;if(typeof O.componentWillUnmount=="function"){i=S,r=S.return;try{t=i,O.props=t.memoizedProps,O.state=t.memoizedState,O.componentWillUnmount()}catch(W){we(i,r,W)}}break;case 5:$n(S,S.return);break;case 22:if(S.memoizedState!==null){Vc(_);continue}}L!==null?(L.return=S,D=L):Vc(_)}z=z.sibling}e:for(z=null,_=e;;){if(_.tag===5){if(z===null){z=_;try{a=_.stateNode,j?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(u=_.stateNode,p=_.memoizedProps.style,l=p!=null&&p.hasOwnProperty("display")?p.display:null,u.style.display=Co("display",l))}catch(W){we(e,e.return,W)}}}else if(_.tag===6){if(z===null)try{_.stateNode.nodeValue=j?"":_.memoizedProps}catch(W){we(e,e.return,W)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===e)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===e)break e;for(;_.sibling===null;){if(_.return===null||_.return===e)break e;z===_&&(z=null),_=_.return}z===_&&(z=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:yt(t,e),St(e),i&4&&qc(e);break;case 21:break;default:yt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Wc(r)){var i=r;break e}r=r.return}throw Error(c(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Xn(a,""),i.flags&=-33);var s=Bc(e);Ms(e,s,a);break;case 3:case 4:var l=i.stateNode.containerInfo,u=Bc(e);_s(e,u,l);break;default:throw Error(c(161))}}catch(p){we(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lm(e,t,r){D=e,$c(e)}function $c(e,t,r){for(var i=(e.mode&1)!==0;D!==null;){var a=D,s=a.child;if(a.tag===22&&i){var l=a.memoizedState!==null||Mi;if(!l){var u=a.alternate,p=u!==null&&u.memoizedState!==null||We;u=Mi;var j=We;if(Mi=l,(We=p)&&!j)for(D=a;D!==null;)l=D,p=l.child,l.tag===22&&l.memoizedState!==null?Qc(a):p!==null?(p.return=l,D=p):Qc(a);for(;s!==null;)D=s,$c(s),s=s.sibling;D=a,Mi=u,We=j}Gc(e)}else(a.subtreeFlags&8772)!==0&&s!==null?(s.return=a,D=s):Gc(e)}}function Gc(e){for(;D!==null;){var t=D;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:We||Ri(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!We)if(r===null)i.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:gt(t.type,r.memoizedProps);i.componentDidUpdate(a,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Vl(t,s,i);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Vl(t,l,r)}break;case 5:var u=t.stateNode;if(r===null&&t.flags&4){r=u;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&r.focus();break;case"img":p.src&&(r.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var j=t.alternate;if(j!==null){var z=j.memoizedState;if(z!==null){var _=z.dehydrated;_!==null&&cr(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}We||t.flags&512&&Ts(t)}catch(S){we(t,t.return,S)}}if(t===e){D=null;break}if(r=t.sibling,r!==null){r.return=t.return,D=r;break}D=t.return}}function Vc(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var r=t.sibling;if(r!==null){r.return=t.return,D=r;break}D=t.return}}function Qc(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ri(4,t)}catch(p){we(t,r,p)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var a=t.return;try{i.componentDidMount()}catch(p){we(t,a,p)}}var s=t.return;try{Ts(t)}catch(p){we(t,s,p)}break;case 5:var l=t.return;try{Ts(t)}catch(p){we(t,l,p)}}}catch(p){we(t,t.return,p)}if(t===e){D=null;break}var u=t.sibling;if(u!==null){u.return=t.return,D=u;break}D=t.return}}var Dm=Math.ceil,Ii=ie.ReactCurrentDispatcher,Rs=ie.ReactCurrentOwner,dt=ie.ReactCurrentBatchConfig,ne=0,_e=null,Ce=null,Ie=0,it=0,Gn=Vt(0),Ee=0,Mr=null,yn=0,Ai=0,Is=0,Rr=null,Ke=null,As=0,Vn=1/0,Dt=null,Li=!1,Ls=null,Zt=null,Di=!1,en=null,Fi=0,Ir=0,Ds=null,Oi=-1,Wi=0;function qe(){return(ne&6)!==0?Ne():Oi!==-1?Oi:Oi=Ne()}function tn(e){return(e.mode&1)===0?1:(ne&2)!==0&&Ie!==0?Ie&-Ie:jm.transition!==null?(Wi===0&&(Wi=Bo()),Wi):(e=de,e!==0||(e=window.event,e=e===void 0?16:Ko(e.type)),e)}function xt(e,t,r,i){if(50<Ir)throw Ir=0,Ds=null,Error(c(185));ir(e,r,i),((ne&2)===0||e!==_e)&&(e===_e&&((ne&2)===0&&(Ai|=r),Ee===4&&nn(e,Ie)),Je(e,i),r===1&&ne===0&&(t.mode&1)===0&&(Vn=Ne()+500,pi&&Yt()))}function Je(e,t){var r=e.callbackNode;ju(e,t);var i=Yr(e,e===_e?Ie:0);if(i===0)r!==null&&Fo(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&Fo(r),t===1)e.tag===0?xm(Kc.bind(null,e)):Al(Kc.bind(null,e)),fm(function(){(ne&6)===0&&Yt()}),r=null;else{switch(Ho(i)){case 1:r=ga;break;case 4:r=Oo;break;case 16:r=$r;break;case 536870912:r=Wo;break;default:r=$r}r=id(r,Yc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Yc(e,t){if(Oi=-1,Wi=0,(ne&6)!==0)throw Error(c(327));var r=e.callbackNode;if(Qn()&&e.callbackNode!==r)return null;var i=Yr(e,e===_e?Ie:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=Bi(e,i);else{t=i;var a=ne;ne|=2;var s=Xc();(_e!==e||Ie!==t)&&(Dt=null,Vn=Ne()+500,jn(e,t));do try{Wm();break}catch(u){Jc(e,u)}while(!0);ts(),Ii.current=s,ne=a,Ce!==null?t=0:(_e=null,Ie=0,t=Ee)}if(t!==0){if(t===2&&(a=va(e),a!==0&&(i=a,t=Fs(e,a))),t===1)throw r=Mr,jn(e,0),nn(e,i),Je(e,Ne()),r;if(t===6)nn(e,i);else{if(a=e.current.alternate,(i&30)===0&&!Fm(a)&&(t=Bi(e,i),t===2&&(s=va(e),s!==0&&(i=s,t=Fs(e,s))),t===1))throw r=Mr,jn(e,0),nn(e,i),Je(e,Ne()),r;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(c(345));case 2:wn(e,Ke,Dt);break;case 3:if(nn(e,i),(i&130023424)===i&&(t=As+500-Ne(),10<t)){if(Yr(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){qe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ua(wn.bind(null,e,Ke,Dt),t);break}wn(e,Ke,Dt);break;case 4:if(nn(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var l=31-ht(i);s=1<<l,l=t[l],l>a&&(a=l),i&=~s}if(i=a,i=Ne()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Dm(i/1960))-i,10<i){e.timeoutHandle=Ua(wn.bind(null,e,Ke,Dt),i);break}wn(e,Ke,Dt);break;case 5:wn(e,Ke,Dt);break;default:throw Error(c(329))}}}return Je(e,Ne()),e.callbackNode===r?Yc.bind(null,e):null}function Fs(e,t){var r=Rr;return e.current.memoizedState.isDehydrated&&(jn(e,t).flags|=256),e=Bi(e,t),e!==2&&(t=Ke,Ke=r,t!==null&&Os(t)),e}function Os(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function Fm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var a=r[i],s=a.getSnapshot;a=a.value;try{if(!pt(s(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t){for(t&=~Is,t&=~Ai,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ht(t),i=1<<r;e[r]=-1,t&=~i}}function Kc(e){if((ne&6)!==0)throw Error(c(327));Qn();var t=Yr(e,0);if((t&1)===0)return Je(e,Ne()),null;var r=Bi(e,t);if(e.tag!==0&&r===2){var i=va(e);i!==0&&(t=i,r=Fs(e,i))}if(r===1)throw r=Mr,jn(e,0),nn(e,t),Je(e,Ne()),r;if(r===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wn(e,Ke,Dt),Je(e,Ne()),null}function Ws(e,t){var r=ne;ne|=1;try{return e(t)}finally{ne=r,ne===0&&(Vn=Ne()+500,pi&&Yt())}}function xn(e){en!==null&&en.tag===0&&(ne&6)===0&&Qn();var t=ne;ne|=1;var r=dt.transition,i=de;try{if(dt.transition=null,de=1,e)return e()}finally{de=i,dt.transition=r,ne=t,(ne&6)===0&&Yt()}}function Bs(){it=Gn.current,fe(Gn)}function jn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,pm(r)),Ce!==null)for(r=Ce.return;r!==null;){var i=r;switch(Ka(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&mi();break;case 3:qn(),fe(Ve),fe(De),cs();break;case 5:os(i);break;case 4:qn();break;case 13:fe(ye);break;case 19:fe(ye);break;case 10:ns(i.type._context);break;case 22:case 23:Bs()}r=r.return}if(_e=e,Ce=e=rn(e.current,null),Ie=it=t,Ee=0,Mr=null,Is=Ai=yn=0,Ke=Rr=null,fn!==null){for(t=0;t<fn.length;t++)if(r=fn[t],i=r.interleaved,i!==null){r.interleaved=null;var a=i.next,s=r.pending;if(s!==null){var l=s.next;s.next=a,i.next=l}r.pending=i}fn=null}return e}function Jc(e,t){do{var r=Ce;try{if(ts(),bi.current=zi,Ci){for(var i=xe.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Ci=!1}if(vn=0,Te=Se=xe=null,Sr=!1,Er=0,Rs.current=null,r===null||r.return===null){Ee=1,Mr=t,Ce=null;break}e:{var s=e,l=r.return,u=r,p=t;if(t=Ie,u.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var j=p,z=u,_=z.tag;if((z.mode&1)===0&&(_===0||_===11||_===15)){var S=z.alternate;S?(z.updateQueue=S.updateQueue,z.memoizedState=S.memoizedState,z.lanes=S.lanes):(z.updateQueue=null,z.memoizedState=null)}var L=Nc(l);if(L!==null){L.flags&=-257,kc(L,l,u,s,t),L.mode&1&&wc(s,j,t),t=L,p=j;var O=t.updateQueue;if(O===null){var W=new Set;W.add(p),t.updateQueue=W}else O.add(p);break e}else{if((t&1)===0){wc(s,j,t),Hs();break e}p=Error(c(426))}}else if(ve&&u.mode&1){var ke=Nc(l);if(ke!==null){(ke.flags&65536)===0&&(ke.flags|=256),kc(ke,l,u,s,t),Za(Un(p,u));break e}}s=p=Un(p,u),Ee!==4&&(Ee=2),Rr===null?Rr=[s]:Rr.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var y=xc(s,p,t);Gl(s,y);break e;case 1:u=p;var f=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Zt===null||!Zt.has(x)))){s.flags|=65536,t&=-t,s.lanes|=t;var R=jc(s,u,t);Gl(s,R);break e}}s=s.return}while(s!==null)}ed(r)}catch(H){t=H,Ce===r&&r!==null&&(Ce=r=r.return);continue}break}while(!0)}function Xc(){var e=Ii.current;return Ii.current=zi,e===null?zi:e}function Hs(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),_e===null||(yn&268435455)===0&&(Ai&268435455)===0||nn(_e,Ie)}function Bi(e,t){var r=ne;ne|=2;var i=Xc();(_e!==e||Ie!==t)&&(Dt=null,jn(e,t));do try{Om();break}catch(a){Jc(e,a)}while(!0);if(ts(),ne=r,Ii.current=i,Ce!==null)throw Error(c(261));return _e=null,Ie=0,Ee}function Om(){for(;Ce!==null;)Zc(Ce)}function Wm(){for(;Ce!==null&&!uu();)Zc(Ce)}function Zc(e){var t=rd(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?ed(e):Ce=t,Rs.current=null}function ed(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Mm(r,t,it),r!==null){Ce=r;return}}else{if(r=Rm(r,t),r!==null){r.flags&=32767,Ce=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,Ce=null;return}}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Ee===0&&(Ee=5)}function wn(e,t,r){var i=de,a=dt.transition;try{dt.transition=null,de=1,Bm(e,t,r,i)}finally{dt.transition=a,de=i}return null}function Bm(e,t,r,i){do Qn();while(en!==null);if((ne&6)!==0)throw Error(c(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(wu(e,s),e===_e&&(Ce=_e=null,Ie=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Di||(Di=!0,id($r,function(){return Qn(),null})),s=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||s){s=dt.transition,dt.transition=null;var l=de;de=1;var u=ne;ne|=4,Rs.current=null,Am(e,r),Uc(r,e),om(Ha),Xr=!!Ba,Ha=Ba=null,e.current=r,Lm(r),mu(),ne=u,de=l,dt.transition=s}else e.current=r;if(Di&&(Di=!1,en=e,Fi=a),s=e.pendingLanes,s===0&&(Zt=null),fu(r.stateNode),Je(e,Ne()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],i(a.value,{componentStack:a.stack,digest:a.digest});if(Li)throw Li=!1,e=Ls,Ls=null,e;return(Fi&1)!==0&&e.tag!==0&&Qn(),s=e.pendingLanes,(s&1)!==0?e===Ds?Ir++:(Ir=0,Ds=e):Ir=0,Yt(),null}function Qn(){if(en!==null){var e=Ho(Fi),t=dt.transition,r=de;try{if(dt.transition=null,de=16>e?16:e,en===null)var i=!1;else{if(e=en,en=null,Fi=0,(ne&6)!==0)throw Error(c(331));var a=ne;for(ne|=4,D=e.current;D!==null;){var s=D,l=s.child;if((D.flags&16)!==0){var u=s.deletions;if(u!==null){for(var p=0;p<u.length;p++){var j=u[p];for(D=j;D!==null;){var z=D;switch(z.tag){case 0:case 11:case 15:_r(8,z,s)}var _=z.child;if(_!==null)_.return=z,D=_;else for(;D!==null;){z=D;var S=z.sibling,L=z.return;if(Oc(z),z===j){D=null;break}if(S!==null){S.return=L,D=S;break}D=L}}}var O=s.alternate;if(O!==null){var W=O.child;if(W!==null){O.child=null;do{var ke=W.sibling;W.sibling=null,W=ke}while(W!==null)}}D=s}}if((s.subtreeFlags&2064)!==0&&l!==null)l.return=s,D=l;else e:for(;D!==null;){if(s=D,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:_r(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,D=y;break e}D=s.return}}var f=e.current;for(D=f;D!==null;){l=D;var x=l.child;if((l.subtreeFlags&2064)!==0&&x!==null)x.return=l,D=x;else e:for(l=f;D!==null;){if(u=D,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:Ri(9,u)}}catch(H){we(u,u.return,H)}if(u===l){D=null;break e}var R=u.sibling;if(R!==null){R.return=u.return,D=R;break e}D=u.return}}if(ne=a,Yt(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Gr,e)}catch{}i=!0}return i}finally{de=r,dt.transition=t}}return!1}function td(e,t,r){t=Un(r,t),t=xc(e,t,1),e=Jt(e,t,1),t=qe(),e!==null&&(ir(e,1,t),Je(e,t))}function we(e,t,r){if(e.tag===3)td(e,e,r);else for(;t!==null;){if(t.tag===3){td(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zt===null||!Zt.has(i))){e=Un(r,e),e=jc(t,e,1),t=Jt(t,e,1),e=qe(),t!==null&&(ir(t,1,e),Je(t,e));break}}t=t.return}}function Hm(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&r,_e===e&&(Ie&r)===r&&(Ee===4||Ee===3&&(Ie&130023424)===Ie&&500>Ne()-As?jn(e,0):Is|=r),Je(e,t)}function nd(e,t){t===0&&((e.mode&1)===0?t=1:(t=Qr,Qr<<=1,(Qr&130023424)===0&&(Qr=4194304)));var r=qe();e=It(e,t),e!==null&&(ir(e,t,r),Je(e,r))}function qm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),nd(e,r)}function Um(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(c(314))}i!==null&&i.delete(t),nd(e,r)}var rd;rd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ve.current)Ye=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Ye=!1,_m(e,t,r);Ye=(e.flags&131072)!==0}else Ye=!1,ve&&(t.flags&1048576)!==0&&Ll(t,gi,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;_i(e,t),e=t.pendingProps;var a=Ln(t,De.current);Hn(t,r),a=ms(null,t,i,e,a,r);var s=hs();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(i)?(s=!0,hi(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,as(t),a.updater=Pi,t.stateNode=a,a._reactInternals=t,xs(t,i,e,r),t=ks(null,t,i,!0,s,r)):(t.tag=0,ve&&s&&Ya(t),He(null,t,a,r),t=t.child),t;case 16:i=t.elementType;e:{switch(_i(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Gm(i),e=gt(i,e),a){case 0:t=Ns(null,t,i,e,r);break e;case 1:t=Pc(null,t,i,e,r);break e;case 11:t=bc(null,t,i,e,r);break e;case 14:t=Cc(null,t,i,gt(i.type,e),r);break e}throw Error(c(306,i,""))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:gt(i,a),Ns(e,t,i,a,r);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:gt(i,a),Pc(e,t,i,a,r);case 3:e:{if(Tc(t),e===null)throw Error(c(387));i=t.pendingProps,s=t.memoizedState,a=s.element,$l(e,t),Ni(t,i,null,r);var l=t.memoizedState;if(i=l.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=Un(Error(c(423)),t),t=_c(e,t,i,r,a);break e}else if(i!==a){a=Un(Error(c(424)),t),t=_c(e,t,i,r,a);break e}else for(rt=Gt(t.stateNode.containerInfo.firstChild),nt=t,ve=!0,ft=null,r=ql(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(On(),i===a){t=Lt(e,t,r);break e}He(e,t,i,r)}t=t.child}return t;case 5:return Ql(t),e===null&&Xa(t),i=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,l=a.children,qa(i,a)?l=null:s!==null&&qa(i,s)&&(t.flags|=32),zc(e,t),He(e,t,l,r),t.child;case 6:return e===null&&Xa(t),null;case 13:return Mc(e,t,r);case 4:return ss(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Wn(t,null,i,r):He(e,t,i,r),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:gt(i,a),bc(e,t,i,a,r);case 7:return He(e,t,t.pendingProps,r),t.child;case 8:return He(e,t,t.pendingProps.children,r),t.child;case 12:return He(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,a=t.pendingProps,s=t.memoizedProps,l=a.value,he(xi,i._currentValue),i._currentValue=l,s!==null)if(pt(s.value,l)){if(s.children===a.children&&!Ve.current){t=Lt(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var u=s.dependencies;if(u!==null){l=s.child;for(var p=u.firstContext;p!==null;){if(p.context===i){if(s.tag===1){p=At(-1,r&-r),p.tag=2;var j=s.updateQueue;if(j!==null){j=j.shared;var z=j.pending;z===null?p.next=p:(p.next=z.next,z.next=p),j.pending=p}}s.lanes|=r,p=s.alternate,p!==null&&(p.lanes|=r),rs(s.return,r,t),u.lanes|=r;break}p=p.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(c(341));l.lanes|=r,u=l.alternate,u!==null&&(u.lanes|=r),rs(l,r,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}He(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Hn(t,r),a=lt(a),i=i(a),t.flags|=1,He(e,t,i,r),t.child;case 14:return i=t.type,a=gt(i,t.pendingProps),a=gt(i.type,a),Cc(e,t,i,a,r);case 15:return Sc(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:gt(i,a),_i(e,t),t.tag=1,Qe(i)?(e=!0,hi(t)):e=!1,Hn(t,r),vc(t,i,a),xs(t,i,a,r),ks(null,t,i,!0,e,r);case 19:return Ic(e,t,r);case 22:return Ec(e,t,r)}throw Error(c(156,t.tag))};function id(e,t){return Do(e,t)}function $m(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,r,i){return new $m(e,t,r,i)}function qs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gm(e){if(typeof e=="function")return qs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jt)return 11;if(e===wt)return 14}return 2}function rn(e,t){var r=e.alternate;return r===null?(r=ut(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Hi(e,t,r,i,a,s){var l=2;if(i=e,typeof e=="function")qs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case $e:return Nn(r.children,a,s,t);case at:l=8,a|=8;break;case Ot:return e=ut(12,r,t,a|2),e.elementType=Ot,e.lanes=s,e;case Ze:return e=ut(13,r,t,a),e.elementType=Ze,e.lanes=s,e;case mt:return e=ut(19,r,t,a),e.elementType=mt,e.lanes=s,e;case je:return qi(r,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pt:l=10;break e;case cn:l=9;break e;case jt:l=11;break e;case wt:l=14;break e;case Ge:l=16,i=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=ut(l,r,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function Nn(e,t,r,i){return e=ut(7,e,i,t),e.lanes=r,e}function qi(e,t,r,i){return e=ut(22,e,i,t),e.elementType=je,e.lanes=r,e.stateNode={isHidden:!1},e}function Us(e,t,r){return e=ut(6,e,null,t),e.lanes=r,e}function $s(e,t,r){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vm(e,t,r,i,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ya(0),this.expirationTimes=ya(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ya(0),this.identifierPrefix=i,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Gs(e,t,r,i,a,s,l,u,p){return e=new Vm(e,t,r,u,p),t===1?(t=1,s===!0&&(t|=8)):t=0,s=ut(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},as(s),e}function Qm(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Be,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function ad(e){if(!e)return Qt;e=e._reactInternals;e:{if(dn(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var r=e.type;if(Qe(r))return Rl(e,r,t)}return t}function sd(e,t,r,i,a,s,l,u,p){return e=Gs(r,i,!0,e,a,s,l,u,p),e.context=ad(null),r=e.current,i=qe(),a=tn(r),s=At(i,a),s.callback=t??null,Jt(r,s,a),e.current.lanes=a,ir(e,a,i),Je(e,i),e}function Ui(e,t,r,i){var a=t.current,s=qe(),l=tn(a);return r=ad(r),t.context===null?t.context=r:t.pendingContext=r,t=At(s,l),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Jt(a,t,l),e!==null&&(xt(e,a,l,s),wi(e,a,l)),l}function $i(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function od(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Vs(e,t){od(e,t),(e=e.alternate)&&od(e,t)}function Ym(){return null}var ld=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qs(e){this._internalRoot=e}Gi.prototype.render=Qs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));Ui(e,t,null,null)},Gi.prototype.unmount=Qs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){Ui(null,e,null,null)}),t[Tt]=null}};function Gi(e){this._internalRoot=e}Gi.prototype.unstable_scheduleHydration=function(e){if(e){var t=$o();e={blockedOn:null,target:e,priority:t};for(var r=0;r<qt.length&&t!==0&&t<qt[r].priority;r++);qt.splice(r,0,e),r===0&&Qo(e)}};function Ys(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cd(){}function Km(e,t,r,i,a){if(a){if(typeof i=="function"){var s=i;i=function(){var j=$i(l);s.call(j)}}var l=sd(t,i,e,0,null,!1,!1,"",cd);return e._reactRootContainer=l,e[Tt]=l.current,yr(e.nodeType===8?e.parentNode:e),xn(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof i=="function"){var u=i;i=function(){var j=$i(p);u.call(j)}}var p=Gs(e,0,!1,null,null,!1,!1,"",cd);return e._reactRootContainer=p,e[Tt]=p.current,yr(e.nodeType===8?e.parentNode:e),xn(function(){Ui(t,p,r,i)}),p}function Qi(e,t,r,i,a){var s=r._reactRootContainer;if(s){var l=s;if(typeof a=="function"){var u=a;a=function(){var p=$i(l);u.call(p)}}Ui(t,l,e,a)}else l=Km(r,t,e,a,i);return $i(l)}qo=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=rr(t.pendingLanes);r!==0&&(xa(t,r|1),Je(t,Ne()),(ne&6)===0&&(Vn=Ne()+500,Yt()))}break;case 13:xn(function(){var i=It(e,1);if(i!==null){var a=qe();xt(i,e,1,a)}}),Vs(e,1)}},ja=function(e){if(e.tag===13){var t=It(e,134217728);if(t!==null){var r=qe();xt(t,e,134217728,r)}Vs(e,134217728)}},Uo=function(e){if(e.tag===13){var t=tn(e),r=It(e,t);if(r!==null){var i=qe();xt(r,e,t,i)}Vs(e,t)}},$o=function(){return de},Go=function(e,t){var r=de;try{return de=e,t()}finally{de=r}},ma=function(e,t,r){switch(t){case"input":if(ia(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var a=ui(i);if(!a)throw Error(c(90));go(i),ia(i,a)}}}break;case"textarea":wo(e,r);break;case"select":t=r.value,t!=null&&bn(e,!!r.multiple,t,!1)}},To=Ws,_o=xn;var Jm={usingClientEntryPoint:!1,Events:[wr,In,ui,zo,Po,Ws]},Ar={findFiberByHostInstance:un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xm={bundleType:Ar.bundleType,version:Ar.version,rendererPackageName:Ar.rendererPackageName,rendererConfig:Ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ao(e),e===null?null:e.stateNode},findFiberByHostInstance:Ar.findFiberByHostInstance||Ym,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yi.isDisabled&&Yi.supportsFiber)try{Gr=Yi.inject(Xm),Nt=Yi}catch{}}return Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jm,Xe.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ys(t))throw Error(c(200));return Qm(e,t,null,r)},Xe.createRoot=function(e,t){if(!Ys(e))throw Error(c(299));var r=!1,i="",a=ld;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Gs(e,1,!1,null,null,r,!1,i,a),e[Tt]=t.current,yr(e.nodeType===8?e.parentNode:e),new Qs(t)},Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=Ao(t),e=e===null?null:e.stateNode,e},Xe.flushSync=function(e){return xn(e)},Xe.hydrate=function(e,t,r){if(!Vi(t))throw Error(c(200));return Qi(null,e,t,!0,r)},Xe.hydrateRoot=function(e,t,r){if(!Ys(e))throw Error(c(405));var i=r!=null&&r.hydratedSources||null,a=!1,s="",l=ld;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=sd(t,null,e,1,r??null,a,!1,s,l),e[Tt]=t.current,yr(e),i)for(e=0;e<i.length;e++)r=i[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Gi(t)},Xe.render=function(e,t,r){if(!Vi(t))throw Error(c(200));return Qi(null,e,t,!1,r)},Xe.unmountComponentAtNode=function(e){if(!Vi(e))throw Error(c(40));return e._reactRootContainer?(xn(function(){Qi(null,null,e,!1,function(){e._reactRootContainer=null,e[Tt]=null})}),!0):!1},Xe.unstable_batchedUpdates=Ws,Xe.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!Vi(r))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return Qi(e,t,r,!1,i)},Xe.version="18.3.1-next-f1338f8080-20240426",Xe}var vd;function Md(){if(vd)return Xs.exports;vd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Xs.exports=oh(),Xs.exports}var yd;function lh(){if(yd)return Ki;yd=1;var o=Md();return Ki.createRoot=o.createRoot,Ki.hydrateRoot=o.hydrateRoot,Ki}var ch=lh();const dh=Td(ch);Md();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dr(){return Dr=Object.assign?Object.assign.bind():function(o){for(var d=1;d<arguments.length;d++){var c=arguments[d];for(var m in c)({}).hasOwnProperty.call(c,m)&&(o[m]=c[m])}return o},Dr.apply(null,arguments)}var sn;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(sn||(sn={}));const xd="popstate";function uh(o){o===void 0&&(o={});function d(m,h){let{pathname:g,search:w,hash:b}=m.location;return no("",{pathname:g,search:w,hash:b},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function c(m,h){return typeof h=="string"?h:Ji(h)}return hh(d,c,null,o)}function be(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}function Rd(o,d){if(!o){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function mh(){return Math.random().toString(36).substr(2,8)}function jd(o,d){return{usr:o.state,key:o.key,idx:d}}function no(o,d,c,m){return c===void 0&&(c=null),Dr({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof d=="string"?Yn(d):d,{state:c,key:d&&d.key||m||mh()})}function Ji(o){let{pathname:d="/",search:c="",hash:m=""}=o;return c&&c!=="?"&&(d+=c.charAt(0)==="?"?c:"?"+c),m&&m!=="#"&&(d+=m.charAt(0)==="#"?m:"#"+m),d}function Yn(o){let d={};if(o){let c=o.indexOf("#");c>=0&&(d.hash=o.substr(c),o=o.substr(0,c));let m=o.indexOf("?");m>=0&&(d.search=o.substr(m),o=o.substr(0,m)),o&&(d.pathname=o)}return d}function hh(o,d,c,m){m===void 0&&(m={});let{window:h=document.defaultView,v5Compat:g=!1}=m,w=h.history,b=sn.Pop,N=null,T=k();T==null&&(T=0,w.replaceState(Dr({},w.state,{idx:T}),""));function k(){return(w.state||{idx:null}).idx}function C(){b=sn.Pop;let I=k(),te=I==null?null:I-T;T=I,N&&N({action:b,location:q.location,delta:te})}function M(I,te){b=sn.Push;let le=no(q.location,I,te);T=k()+1;let re=jd(le,T),ie=q.createHref(le);try{w.pushState(re,"",ie)}catch(Pe){if(Pe instanceof DOMException&&Pe.name==="DataCloneError")throw Pe;h.location.assign(ie)}g&&N&&N({action:b,location:q.location,delta:1})}function G(I,te){b=sn.Replace;let le=no(q.location,I,te);T=k();let re=jd(le,T),ie=q.createHref(le);w.replaceState(re,"",ie),g&&N&&N({action:b,location:q.location,delta:0})}function J(I){let te=h.location.origin!=="null"?h.location.origin:h.location.href,le=typeof I=="string"?I:Ji(I);return le=le.replace(/ $/,"%20"),be(te,"No window.location.(origin|href) available to create URL for href: "+le),new URL(le,te)}let q={get action(){return b},get location(){return o(h,w)},listen(I){if(N)throw new Error("A history only accepts one active listener");return h.addEventListener(xd,C),N=I,()=>{h.removeEventListener(xd,C),N=null}},createHref(I){return d(h,I)},createURL:J,encodeLocation(I){let te=J(I);return{pathname:te.pathname,search:te.search,hash:te.hash}},push:M,replace:G,go(I){return w.go(I)}};return q}var wd;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(wd||(wd={}));function ph(o,d,c){return c===void 0&&(c="/"),fh(o,d,c)}function fh(o,d,c,m){let h=typeof d=="string"?Yn(d):d,g=oo(h.pathname||"/",c);if(g==null)return null;let w=Id(o);gh(w);let b=null,N=zh(g);for(let T=0;b==null&&T<w.length;++T)b=Ch(w[T],N);return b}function Id(o,d,c,m){d===void 0&&(d=[]),c===void 0&&(c=[]),m===void 0&&(m="");let h=(g,w,b)=>{let N={relativePath:b===void 0?g.path||"":b,caseSensitive:g.caseSensitive===!0,childrenIndex:w,route:g};N.relativePath.startsWith("/")&&(be(N.relativePath.startsWith(m),'Absolute route path "'+N.relativePath+'" nested under path '+('"'+m+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),N.relativePath=N.relativePath.slice(m.length));let T=on([m,N.relativePath]),k=c.concat(N);g.children&&g.children.length>0&&(be(g.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+T+'".')),Id(g.children,d,k,T)),!(g.path==null&&!g.index)&&d.push({path:T,score:kh(T,g.index),routesMeta:k})};return o.forEach((g,w)=>{var b;if(g.path===""||!((b=g.path)!=null&&b.includes("?")))h(g,w);else for(let N of Ad(g.path))h(g,w,N)}),d}function Ad(o){let d=o.split("/");if(d.length===0)return[];let[c,...m]=d,h=c.endsWith("?"),g=c.replace(/\?$/,"");if(m.length===0)return h?[g,""]:[g];let w=Ad(m.join("/")),b=[];return b.push(...w.map(N=>N===""?g:[g,N].join("/"))),h&&b.push(...w),b.map(N=>o.startsWith("/")&&N===""?"/":N)}function gh(o){o.sort((d,c)=>d.score!==c.score?c.score-d.score:bh(d.routesMeta.map(m=>m.childrenIndex),c.routesMeta.map(m=>m.childrenIndex)))}const vh=/^:[\w-]+$/,yh=3,xh=2,jh=1,wh=10,Nh=-2,Nd=o=>o==="*";function kh(o,d){let c=o.split("/"),m=c.length;return c.some(Nd)&&(m+=Nh),d&&(m+=xh),c.filter(h=>!Nd(h)).reduce((h,g)=>h+(vh.test(g)?yh:g===""?jh:wh),m)}function bh(o,d){return o.length===d.length&&o.slice(0,-1).every((m,h)=>m===d[h])?o[o.length-1]-d[d.length-1]:0}function Ch(o,d,c){let{routesMeta:m}=o,h={},g="/",w=[];for(let b=0;b<m.length;++b){let N=m[b],T=b===m.length-1,k=g==="/"?d:d.slice(g.length)||"/",C=Sh({path:N.relativePath,caseSensitive:N.caseSensitive,end:T},k),M=N.route;if(!C)return null;Object.assign(h,C.params),w.push({params:h,pathname:on([g,C.pathname]),pathnameBase:_h(on([g,C.pathnameBase])),route:M}),C.pathnameBase!=="/"&&(g=on([g,C.pathnameBase]))}return w}function Sh(o,d){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[c,m]=Eh(o.path,o.caseSensitive,o.end),h=d.match(c);if(!h)return null;let g=h[0],w=g.replace(/(.)\/+$/,"$1"),b=h.slice(1);return{params:m.reduce((T,k,C)=>{let{paramName:M,isOptional:G}=k;if(M==="*"){let q=b[C]||"";w=g.slice(0,g.length-q.length).replace(/(.)\/+$/,"$1")}const J=b[C];return G&&!J?T[M]=void 0:T[M]=(J||"").replace(/%2F/g,"/"),T},{}),pathname:g,pathnameBase:w,pattern:o}}function Eh(o,d,c){d===void 0&&(d=!1),c===void 0&&(c=!0),Rd(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let m=[],h="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(w,b,N)=>(m.push({paramName:b,isOptional:N!=null}),N?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(m.push({paramName:"*"}),h+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?h+="\\/*$":o!==""&&o!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,d?void 0:"i"),m]}function zh(o){try{return o.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Rd(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+d+").")),o}}function oo(o,d){if(d==="/")return o;if(!o.toLowerCase().startsWith(d.toLowerCase()))return null;let c=d.endsWith("/")?d.length-1:d.length,m=o.charAt(c);return m&&m!=="/"?null:o.slice(c)||"/"}function Ph(o,d){d===void 0&&(d="/");let{pathname:c,search:m="",hash:h=""}=typeof o=="string"?Yn(o):o,g;return c?(c=Ld(c),c.startsWith("/")?g=kd(c.substring(1),"/"):g=kd(c,d)):g=d,{pathname:g,search:Mh(m),hash:Rh(h)}}function kd(o,d){let c=d.replace(/\/+$/,"").split("/");return o.split("/").forEach(h=>{h===".."?c.length>1&&c.pop():h!=="."&&c.push(h)}),c.length>1?c.join("/"):"/"}function to(o,d,c,m){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+d+"` field ["+JSON.stringify(m)+"].  Please separate it out to the ")+("`to."+c+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Th(o){return o.filter((d,c)=>c===0||d.route.path&&d.route.path.length>0)}function lo(o,d){let c=Th(o);return d?c.map((m,h)=>h===c.length-1?m.pathname:m.pathnameBase):c.map(m=>m.pathnameBase)}function co(o,d,c,m){m===void 0&&(m=!1);let h;typeof o=="string"?h=Yn(o):(h=Dr({},o),be(!h.pathname||!h.pathname.includes("?"),to("?","pathname","search",h)),be(!h.pathname||!h.pathname.includes("#"),to("#","pathname","hash",h)),be(!h.search||!h.search.includes("#"),to("#","search","hash",h)));let g=o===""||h.pathname==="",w=g?"/":h.pathname,b;if(w==null)b=c;else{let C=d.length-1;if(!m&&w.startsWith("..")){let M=w.split("/");for(;M[0]==="..";)M.shift(),C-=1;h.pathname=M.join("/")}b=C>=0?d[C]:"/"}let N=Ph(h,b),T=w&&w!=="/"&&w.endsWith("/"),k=(g||w===".")&&c.endsWith("/");return!N.pathname.endsWith("/")&&(T||k)&&(N.pathname+="/"),N}const Ld=o=>o.replace(/\/\/+/g,"/"),on=o=>Ld(o.join("/")),_h=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Mh=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Rh=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Ih(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const Dd=["post","put","patch","delete"];new Set(Dd);const Ah=["get",...Dd];new Set(Ah);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fr(){return Fr=Object.assign?Object.assign.bind():function(o){for(var d=1;d<arguments.length;d++){var c=arguments[d];for(var m in c)({}).hasOwnProperty.call(c,m)&&(o[m]=c[m])}return o},Fr.apply(null,arguments)}const uo=P.createContext(null),Lh=P.createContext(null),ln=P.createContext(null),Xi=P.createContext(null),Ft=P.createContext({outlet:null,matches:[],isDataRoute:!1}),Fd=P.createContext(null);function Dh(o,d){let{relative:c}=d===void 0?{}:d;Kn()||be(!1);let{basename:m,navigator:h}=P.useContext(ln),{hash:g,pathname:w,search:b}=Bd(o,{relative:c}),N=w;return m!=="/"&&(N=w==="/"?m:on([m,w])),h.createHref({pathname:N,search:b,hash:g})}function Kn(){return P.useContext(Xi)!=null}function kn(){return Kn()||be(!1),P.useContext(Xi).location}function Od(o){P.useContext(ln).static||P.useLayoutEffect(o)}function Wd(){let{isDataRoute:o}=P.useContext(Ft);return o?Jh():Fh()}function Fh(){Kn()||be(!1);let o=P.useContext(uo),{basename:d,future:c,navigator:m}=P.useContext(ln),{matches:h}=P.useContext(Ft),{pathname:g}=kn(),w=JSON.stringify(lo(h,c.v7_relativeSplatPath)),b=P.useRef(!1);return Od(()=>{b.current=!0}),P.useCallback(function(T,k){if(k===void 0&&(k={}),!b.current)return;if(typeof T=="number"){m.go(T);return}let C=co(T,JSON.parse(w),g,k.relative==="path");o==null&&d!=="/"&&(C.pathname=C.pathname==="/"?d:on([d,C.pathname])),(k.replace?m.replace:m.push)(C,k.state,k)},[d,m,w,g,o])}function Oh(){let{matches:o}=P.useContext(Ft),d=o[o.length-1];return d?d.params:{}}function Bd(o,d){let{relative:c}=d===void 0?{}:d,{future:m}=P.useContext(ln),{matches:h}=P.useContext(Ft),{pathname:g}=kn(),w=JSON.stringify(lo(h,m.v7_relativeSplatPath));return P.useMemo(()=>co(o,JSON.parse(w),g,c==="path"),[o,w,g,c])}function Wh(o,d){return Bh(o,d)}function Bh(o,d,c,m){Kn()||be(!1);let{navigator:h}=P.useContext(ln),{matches:g}=P.useContext(Ft),w=g[g.length-1],b=w?w.params:{};w&&w.pathname;let N=w?w.pathnameBase:"/";w&&w.route;let T=kn(),k;if(d){var C;let I=typeof d=="string"?Yn(d):d;N==="/"||(C=I.pathname)!=null&&C.startsWith(N)||be(!1),k=I}else k=T;let M=k.pathname||"/",G=M;if(N!=="/"){let I=N.replace(/^\//,"").split("/");G="/"+M.replace(/^\//,"").split("/").slice(I.length).join("/")}let J=ph(o,{pathname:G}),q=Gh(J&&J.map(I=>Object.assign({},I,{params:Object.assign({},b,I.params),pathname:on([N,h.encodeLocation?h.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?N:on([N,h.encodeLocation?h.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),g,c,m);return d&&q?P.createElement(Xi.Provider,{value:{location:Fr({pathname:"/",search:"",hash:"",state:null,key:"default"},k),navigationType:sn.Pop}},q):q}function Hh(){let o=Kh(),d=Ih(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),c=o instanceof Error?o.stack:null,h={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},d),c?P.createElement("pre",{style:h},c):null,null)}const qh=P.createElement(Hh,null);class Uh extends P.Component{constructor(d){super(d),this.state={location:d.location,revalidation:d.revalidation,error:d.error}}static getDerivedStateFromError(d){return{error:d}}static getDerivedStateFromProps(d,c){return c.location!==d.location||c.revalidation!=="idle"&&d.revalidation==="idle"?{error:d.error,location:d.location,revalidation:d.revalidation}:{error:d.error!==void 0?d.error:c.error,location:c.location,revalidation:d.revalidation||c.revalidation}}componentDidCatch(d,c){console.error("React Router caught the following error during render",d,c)}render(){return this.state.error!==void 0?P.createElement(Ft.Provider,{value:this.props.routeContext},P.createElement(Fd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $h(o){let{routeContext:d,match:c,children:m}=o,h=P.useContext(uo);return h&&h.static&&h.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(h.staticContext._deepestRenderedBoundaryId=c.route.id),P.createElement(Ft.Provider,{value:d},m)}function Gh(o,d,c,m){var h;if(d===void 0&&(d=[]),c===void 0&&(c=null),m===void 0&&(m=null),o==null){var g;if(!c)return null;if(c.errors)o=c.matches;else if((g=m)!=null&&g.v7_partialHydration&&d.length===0&&!c.initialized&&c.matches.length>0)o=c.matches;else return null}let w=o,b=(h=c)==null?void 0:h.errors;if(b!=null){let k=w.findIndex(C=>C.route.id&&(b==null?void 0:b[C.route.id])!==void 0);k>=0||be(!1),w=w.slice(0,Math.min(w.length,k+1))}let N=!1,T=-1;if(c&&m&&m.v7_partialHydration)for(let k=0;k<w.length;k++){let C=w[k];if((C.route.HydrateFallback||C.route.hydrateFallbackElement)&&(T=k),C.route.id){let{loaderData:M,errors:G}=c,J=C.route.loader&&M[C.route.id]===void 0&&(!G||G[C.route.id]===void 0);if(C.route.lazy||J){N=!0,T>=0?w=w.slice(0,T+1):w=[w[0]];break}}}return w.reduceRight((k,C,M)=>{let G,J=!1,q=null,I=null;c&&(G=b&&C.route.id?b[C.route.id]:void 0,q=C.route.errorElement||qh,N&&(T<0&&M===0?(Xh("route-fallback"),J=!0,I=null):T===M&&(J=!0,I=C.route.hydrateFallbackElement||null)));let te=d.concat(w.slice(0,M+1)),le=()=>{let re;return G?re=q:J?re=I:C.route.Component?re=P.createElement(C.route.Component,null):C.route.element?re=C.route.element:re=k,P.createElement($h,{match:C,routeContext:{outlet:k,matches:te,isDataRoute:c!=null},children:re})};return c&&(C.route.ErrorBoundary||C.route.errorElement||M===0)?P.createElement(Uh,{location:c.location,revalidation:c.revalidation,component:q,error:G,children:le(),routeContext:{outlet:null,matches:te,isDataRoute:!0}}):le()},null)}var Hd=(function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o})(Hd||{}),qd=(function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o})(qd||{});function Vh(o){let d=P.useContext(uo);return d||be(!1),d}function Qh(o){let d=P.useContext(Lh);return d||be(!1),d}function Yh(o){let d=P.useContext(Ft);return d||be(!1),d}function Ud(o){let d=Yh(),c=d.matches[d.matches.length-1];return c.route.id||be(!1),c.route.id}function Kh(){var o;let d=P.useContext(Fd),c=Qh(),m=Ud();return d!==void 0?d:(o=c.errors)==null?void 0:o[m]}function Jh(){let{router:o}=Vh(Hd.UseNavigateStable),d=Ud(qd.UseNavigateStable),c=P.useRef(!1);return Od(()=>{c.current=!0}),P.useCallback(function(h,g){g===void 0&&(g={}),c.current&&(typeof h=="number"?o.navigate(h):o.navigate(h,Fr({fromRouteId:d},g)))},[o,d])}const bd={};function Xh(o,d,c){bd[o]||(bd[o]=!0)}function Zh(o,d){o==null||o.v7_startTransition,o==null||o.v7_relativeSplatPath}function $d(o){let{to:d,replace:c,state:m,relative:h}=o;Kn()||be(!1);let{future:g,static:w}=P.useContext(ln),{matches:b}=P.useContext(Ft),{pathname:N}=kn(),T=Wd(),k=co(d,lo(b,g.v7_relativeSplatPath),N,h==="path"),C=JSON.stringify(k);return P.useEffect(()=>T(JSON.parse(C),{replace:c,state:m,relative:h}),[T,C,h,c,m]),null}function ze(o){be(!1)}function ep(o){let{basename:d="/",children:c=null,location:m,navigationType:h=sn.Pop,navigator:g,static:w=!1,future:b}=o;Kn()&&be(!1);let N=d.replace(/^\/*/,"/"),T=P.useMemo(()=>({basename:N,navigator:g,static:w,future:Fr({v7_relativeSplatPath:!1},b)}),[N,b,g,w]);typeof m=="string"&&(m=Yn(m));let{pathname:k="/",search:C="",hash:M="",state:G=null,key:J="default"}=m,q=P.useMemo(()=>{let I=oo(k,N);return I==null?null:{location:{pathname:I,search:C,hash:M,state:G,key:J},navigationType:h}},[N,k,C,M,G,J,h]);return q==null?null:P.createElement(ln.Provider,{value:T},P.createElement(Xi.Provider,{children:c,value:q}))}function tp(o){let{children:d,location:c}=o;return Wh(ro(d),c)}new Promise(()=>{});function ro(o,d){d===void 0&&(d=[]);let c=[];return P.Children.forEach(o,(m,h)=>{if(!P.isValidElement(m))return;let g=[...d,h];if(m.type===P.Fragment){c.push.apply(c,ro(m.props.children,g));return}m.type!==ze&&be(!1),!m.props.index||!m.props.children||be(!1);let w={id:m.props.id||g.join("-"),caseSensitive:m.props.caseSensitive,element:m.props.element,Component:m.props.Component,index:m.props.index,path:m.props.path,loader:m.props.loader,action:m.props.action,errorElement:m.props.errorElement,ErrorBoundary:m.props.ErrorBoundary,hasErrorBoundary:m.props.ErrorBoundary!=null||m.props.errorElement!=null,shouldRevalidate:m.props.shouldRevalidate,handle:m.props.handle,lazy:m.props.lazy};m.props.children&&(w.children=ro(m.props.children,g)),c.push(w)}),c}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function io(){return io=Object.assign?Object.assign.bind():function(o){for(var d=1;d<arguments.length;d++){var c=arguments[d];for(var m in c)({}).hasOwnProperty.call(c,m)&&(o[m]=c[m])}return o},io.apply(null,arguments)}function np(o,d){if(o==null)return{};var c={};for(var m in o)if({}.hasOwnProperty.call(o,m)){if(d.indexOf(m)!==-1)continue;c[m]=o[m]}return c}function rp(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function ip(o,d){return o.button===0&&(!d||d==="_self")&&!rp(o)}const ap=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],sp="6";try{window.__reactRouterVersion=sp}catch{}const op="startTransition",Cd=ih[op];function lp(o){let{basename:d,children:c,future:m,window:h}=o,g=P.useRef();g.current==null&&(g.current=uh({window:h,v5Compat:!0}));let w=g.current,[b,N]=P.useState({action:w.action,location:w.location}),{v7_startTransition:T}=m||{},k=P.useCallback(C=>{T&&Cd?Cd(()=>N(C)):N(C)},[N,T]);return P.useLayoutEffect(()=>w.listen(k),[w,k]),P.useEffect(()=>Zh(m),[m]),P.createElement(ep,{basename:d,children:c,location:b.location,navigationType:b.action,navigator:w,future:m})}const cp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,B=P.forwardRef(function(d,c){let{onClick:m,relative:h,reloadDocument:g,replace:w,state:b,target:N,to:T,preventScrollReset:k,viewTransition:C}=d,M=np(d,ap),{basename:G}=P.useContext(ln),J,q=!1;if(typeof T=="string"&&dp.test(T)&&(J=T,cp))try{let re=new URL(window.location.href),ie=T.startsWith("//")?new URL(re.protocol+T):new URL(T),Pe=oo(ie.pathname,G);ie.origin===re.origin&&Pe!=null?T=Pe+ie.search+ie.hash:q=!0}catch{}let I=Dh(T,{relative:h}),te=up(T,{replace:w,state:b,target:N,preventScrollReset:k,relative:h,viewTransition:C});function le(re){m&&m(re),re.defaultPrevented||te(re)}return P.createElement("a",io({},M,{href:J||I,onClick:q||g?m:le,ref:c,target:N}))});var Sd;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})(Sd||(Sd={}));var Ed;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(Ed||(Ed={}));function up(o,d){let{target:c,replace:m,state:h,preventScrollReset:g,relative:w,viewTransition:b}=d===void 0?{}:d,N=Wd(),T=kn(),k=Bd(o,{relative:w});return P.useCallback(C=>{if(ip(C,c)){C.preventDefault();let M=m!==void 0?m:Ji(T)===Ji(k);N(o,{replace:M,state:h,preventScrollReset:g,relative:w,viewTransition:b})}},[T,N,k,m,h,c,o,g,w,b])}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gd=(...o)=>o.filter((d,c,m)=>!!d&&d.trim()!==""&&m.indexOf(d)===c).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=P.forwardRef(({color:o="currentColor",size:d=24,strokeWidth:c=2,absoluteStrokeWidth:m,className:h="",children:g,iconNode:w,...b},N)=>P.createElement("svg",{ref:N,...hp,width:d,height:d,stroke:o,strokeWidth:m?Number(c)*24/Number(d):c,className:Gd("lucide",h),...b},[...w.map(([T,k])=>P.createElement(T,k)),...Array.isArray(g)?g:[g]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=(o,d)=>{const c=P.forwardRef(({className:m,...h},g)=>P.createElement(pp,{ref:g,iconNode:d,className:Gd(`lucide-${mp(o)}`,m),...h}));return c.displayName=`${o}`,c};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],gp=V("Activity",fp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],yp=V("ArrowLeft",vp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ae=V("ArrowRight",xp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],wp=V("Award",jp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],kp=V("BookOpen",Np);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],Cp=V("Brain",bp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],Ep=V("Building2",Sp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Pp=V("Calendar",zp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Vd=V("ChevronDown",Tp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Qd=V("ChevronUp",_p);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Zi=V("CircleAlert",Mp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ue=V("CircleCheck",Rp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Or=V("Clock",Ip);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Yd=V("CreditCard",Ap);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Dp=V("ExternalLink",Lp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]],Op=V("FileCheck",Fp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Kd=V("FileText",Wp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],Hp=V("Flame",Bp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],mo=V("GraduationCap",qp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]],$p=V("HeartHandshake",Up);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],Vp=V("Heart",Gp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]],Yp=V("Laptop",Qp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Jp=V("Layers",Kp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],zd=V("Leaf",Xp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]],ef=V("LifeBuoy",Zp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],nf=V("Lightbulb",tf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ea=V("Lock",rf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Jd=V("Mail",af);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Xd=V("MapPin",sf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],lf=V("Menu",of);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],df=V("MessageSquare",cf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],mf=V("Music",uf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],pf=V("Palette",hf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Zd=V("Phone",ff);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],vf=V("Scale",gf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],eu=V("Search",yf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],jf=V("Send",xf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],ho=V("ShieldAlert",wf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ta=V("ShieldCheck",Nf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],bf=V("Shield",kf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]],Sf=V("SmilePlus",Cf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],zf=V("Sparkles",Ef);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]],tu=V("Sprout",Pf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],na=V("TriangleAlert",Tf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]],Pd=V("UserCheck",_f);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],nu=V("User",Mf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],If=V("Users",Rf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Lf=V("Video",Af);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ru=V("X",Df);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Of=V("Zap",Ff),K={practiceName:"GroWell Therapy Collective LLC",clinicianName:"Jessica Mouzon",clinicianTitle:"Mental Health Counselor & Educational Specialist",experienceYears:"Approximately 11 Years of Professional Experience",clientPortalUrl:"",contact:{phone:"[PHONE TO BE ADDED]",email:"[EMAIL TO BE ADDED]",officeAddress:"[OFFICE ADDRESS TO BE ADDED]",city:"[CITY / REGION TO BE ADDED]",state:"NC",serviceArea:"[SERVICE AREA TO BE ADDED]",hours:"Monday – Friday | By Appointment"},credentials:{clinicalCounseling:"Clinical Mental Health Counseling",exactLicenseDesignation:"[EXACT LICENSE DESIGNATION TO BE CONFIRMED]",ncLicenseNumber:"[NC LICENSE NUMBER TO BE ADDED]",educationLicense:"Exceptional Children's General Curriculum K–12 Educator License",emdrCertified:"EMDR Certified Therapist",reikiTraining:"Reiki Level II Practitioner (Complementary Wellness)"},insurance:{statusNotice:"Insurance participation and private-pay options are being finalized. Contact GroWell for current network status and payment options."}};function ue(o,d={}){const c={...d,timestamp:new Date().toISOString()};if(typeof window<"u"){const m=new CustomEvent("growell_analytics_event",{detail:{event:o,data:c}});window.dispatchEvent(m);const h=window;h.dataLayer&&Array.isArray(h.dataLayer)&&h.dataLayer.push({event:o,...c})}}const Wf=()=>{const[o,d]=P.useState(!1),[c,m]=P.useState(!1),h=kn();P.useEffect(()=>{const N=()=>{window.scrollY>24?d(!0):d(!1)};return window.addEventListener("scroll",N,{passive:!0}),()=>window.removeEventListener("scroll",N)},[]),P.useEffect(()=>{m(!1)},[h.pathname]),P.useEffect(()=>(c?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[c]);const g=[{label:"Home",path:"/"},{label:"About",path:"/about"},{label:"Therapy",path:"/therapy"},{label:"Educational Advocacy",path:"/educational-advocacy"},{label:"Our Approach",path:"/our-approach"},{label:"Resources",path:"/resources"},{label:"FAQ",path:"/faq"},{label:"Contact",path:"/contact"}],w=()=>{ue("consultation_cta_clicked",{source:"header_nav"})},b=()=>{ue("client_portal_clicked",{source:"header_nav"})};return n.jsxs("header",{className:`site-header ${o?"is-scrolled":""}`,children:[n.jsxs("div",{className:"container header-container",children:[n.jsxs(B,{to:"/",className:"brand-logo","aria-label":"GroWell Therapy Collective - Home",children:[n.jsx("div",{className:"logo-icon-wrap","aria-hidden":"true",children:n.jsx(tu,{className:"logo-sprout-icon",size:24})}),n.jsxs("div",{className:"logo-text-group",children:[n.jsx("span",{className:"logo-title",children:"GroWell"}),n.jsx("span",{className:"logo-subtitle",children:"Therapy Collective"})]})]}),n.jsx("nav",{className:"desktop-nav","aria-label":"Main Navigation",children:n.jsx("ul",{className:"nav-list",children:g.map(N=>{const T=h.pathname===N.path;return n.jsx("li",{className:"nav-item",children:n.jsx(B,{to:N.path,className:`nav-link ${T?"active":""}`,"aria-current":T?"page":void 0,children:N.label})},N.path)})})}),n.jsxs("div",{className:"header-actions",children:[n.jsxs(B,{to:"/client-portal",className:"portal-link-btn",onClick:b,title:"Existing Client Portal Access",children:[n.jsx(Pd,{size:16,"aria-hidden":"true"}),n.jsx("span",{children:"Client Portal"})]}),n.jsxs(B,{to:"/consultation",className:"btn btn-primary btn-sm header-consult-btn",onClick:w,children:[n.jsx("span",{children:"Book a Consultation"}),n.jsx(Ae,{size:15,"aria-hidden":"true"})]}),n.jsx("button",{type:"button",className:"mobile-toggle-btn",onClick:()=>m(!c),"aria-expanded":c,"aria-label":c?"Close navigation menu":"Open navigation menu",children:c?n.jsx(ru,{size:26}):n.jsx(lf,{size:26})})]})]}),n.jsx("div",{className:`mobile-nav-drawer ${c?"is-open":""}`,"aria-hidden":!c,children:n.jsxs("div",{className:"mobile-drawer-inner",children:[n.jsx("div",{className:"mobile-links-list",children:g.map(N=>{const T=h.pathname===N.path;return n.jsx(B,{to:N.path,className:`mobile-nav-link ${T?"active":""}`,onClick:()=>m(!1),children:N.label},N.path)})}),n.jsxs("div",{className:"mobile-drawer-footer",children:[n.jsxs(B,{to:"/consultation",className:"btn btn-primary btn-lg full-width-btn",onClick:()=>{w(),m(!1)},children:["Book a Consultation",n.jsx(Ae,{size:18})]}),n.jsxs(B,{to:"/client-portal",className:"btn btn-portal full-width-btn",onClick:()=>{b(),m(!1)},children:[n.jsx(Pd,{size:18}),"Existing Client Portal"]}),n.jsxs("p",{className:"mobile-drawer-disclaimer",children:[K.clinicianName," • ",K.credentials.educationLicense," • EMDR Certified"]})]})]})}),n.jsx("style",{children:`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: rgba(251, 249, 245, 0.94);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--color-border);
          transition: all var(--transition-normal);
        }

        .site-header.is-scrolled {
          background-color: rgba(251, 249, 245, 0.98);
          box-shadow: 0 4px 20px rgba(32, 51, 40, 0.06);
          border-bottom-color: rgba(230, 222, 211, 0.8);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          padding-bottom: 1rem;
          transition: padding var(--transition-normal);
        }

        .site-header.is-scrolled .header-container {
          padding-top: 0.7rem;
          padding-bottom: 0.7rem;
        }

        /* Brand Logo */
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--color-forest);
        }

        .logo-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background-color: var(--color-sage-tint);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-sage);
          transition: transform var(--transition-fast);
        }

        .brand-logo:hover .logo-icon-wrap {
          transform: scale(1.05);
          background-color: var(--color-terracotta-tint);
          color: var(--color-terracotta);
        }

        .logo-text-group {
          display: flex;
          flex-direction: column;
        }

        .logo-title {
          font-family: var(--font-serif);
          font-size: 1.42rem;
          font-weight: 600;
          line-height: 1.1;
          color: var(--color-forest);
          letter-spacing: -0.01em;
        }

        .logo-subtitle {
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--color-text-light);
        }

        /* Desktop Nav */
        .desktop-nav {
          display: flex;
          align-items: center;
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
        }

        .nav-link {
          font-size: 0.94rem;
          font-weight: 500;
          color: var(--color-forest-light);
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-sm);
          transition: color var(--transition-fast), background-color var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--color-forest);
          background-color: rgba(32, 51, 40, 0.04);
        }

        .nav-link.active {
          color: var(--color-forest);
          font-weight: 600;
          background-color: var(--color-sage-tint);
        }

        /* Actions */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .portal-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-forest);
          padding: 0.5rem 0.85rem;
          border-radius: var(--radius-full);
          background-color: var(--color-sand-tint);
          border: 1px solid rgba(209, 184, 157, 0.4);
          transition: all var(--transition-fast);
        }

        .portal-link-btn:hover {
          background-color: #eeddc9;
          color: var(--color-forest-dark);
          transform: translateY(-1px);
        }

        .mobile-toggle-btn {
          display: none;
          color: var(--color-forest);
          padding: 0.4rem;
          border-radius: var(--radius-sm);
        }

        /* Mobile Drawer */
        .mobile-nav-drawer {
          display: none;
        }

        @media (max-width: 1120px) {
          .desktop-nav {
            display: none;
          }

          .portal-link-btn {
            display: none;
          }

          .header-consult-btn {
            display: none;
          }

          .mobile-toggle-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mobile-nav-drawer {
            display: block;
            position: fixed;
            top: 72px;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--color-linen);
            transform: translateY(-100%);
            opacity: 0;
            pointer-events: none;
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
            overflow-y: auto;
            border-top: 1px solid var(--color-border);
            z-index: 999;
          }

          .mobile-nav-drawer.is-open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }

          .mobile-drawer-inner {
            padding: 1.5rem 1.5rem 3rem;
            display: flex;
            flex-direction: column;
            min-height: calc(100vh - 80px);
            justify-content: space-between;
          }

          .mobile-links-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .mobile-nav-link {
            font-size: 1.25rem;
            font-weight: 500;
            color: var(--color-forest);
            padding: 0.85rem 1rem;
            border-radius: var(--radius-md);
            border-bottom: 1px solid var(--color-border-subtle);
          }

          .mobile-nav-link.active {
            background-color: var(--color-sage-tint);
            font-weight: 600;
            color: var(--color-sage);
          }

          .mobile-drawer-footer {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-top: 2rem;
            padding-top: 1.5rem;
            border-top: 1px solid var(--color-border);
          }

          .full-width-btn {
            width: 100%;
            text-align: center;
          }

          .mobile-drawer-disclaimer {
            font-size: 0.78rem;
            text-align: center;
            color: var(--color-text-light);
            margin: 0;
          }
        }
      `})]})},Bf=()=>{const o=new Date().getFullYear();return n.jsxs("footer",{className:"site-footer","aria-label":"Footer Navigation",children:[n.jsx("div",{className:"footer-crisis-bar",children:n.jsxs("div",{className:"container footer-crisis-inner",children:[n.jsx(ef,{className:"crisis-footer-icon",size:20,"aria-hidden":"true"}),n.jsxs("p",{className:"crisis-footer-text",children:[n.jsx("strong",{children:"Emergency & Crisis Support:"})," GroWell Therapy Collective is not an emergency medical service. If you are experiencing a medical or psychiatric emergency, please call ",n.jsx("strong",{children:"911"})," or visit the nearest emergency room. For immediate 24/7 mental health crisis support, call or text ",n.jsxs("a",{href:"tel:988",className:"footer-crisis-link",children:[n.jsx("strong",{children:"988"})," (Suicide & Crisis Lifeline)"]}),"."]})]})}),n.jsxs("div",{className:"container footer-main-content",children:[n.jsxs("div",{className:"footer-grid",children:[n.jsxs("div",{className:"footer-col brand-col",children:[n.jsxs(B,{to:"/",className:"footer-logo",children:[n.jsx("div",{className:"footer-logo-icon",children:n.jsx(tu,{size:24})}),n.jsxs("div",{children:[n.jsx("span",{className:"footer-logo-title",children:"GroWell"}),n.jsx("span",{className:"footer-logo-sub",children:"Therapy Collective LLC"})]})]}),n.jsx("p",{className:"footer-tagline",children:"Compassionate mental health therapy, trauma-informed care, and K–12 educational advocacy—empowering adolescents, adults, and families to grow through life's challenges."}),n.jsxs("div",{className:"footer-clinician-info",children:[n.jsx("p",{className:"clinician-name",children:K.clinicianName}),n.jsx("p",{className:"clinician-meta",children:K.credentials.clinicalCounseling}),n.jsx("p",{className:"clinician-meta",children:K.credentials.educationLicense}),n.jsx("p",{className:"clinician-meta",children:"EMDR Certified • Reiki Level II"})]})]}),n.jsxs("div",{className:"footer-col",children:[n.jsx("h4",{className:"footer-heading",children:"Services"}),n.jsxs("ul",{className:"footer-links",children:[n.jsx("li",{children:n.jsx(B,{to:"/therapy",children:"Therapy Services"})}),n.jsx("li",{children:n.jsx(B,{to:"/emdr-therapy",children:"EMDR Therapy"})}),n.jsx("li",{children:n.jsx(B,{to:"/therapy",children:"Adolescent Therapy (11+)"})}),n.jsx("li",{children:n.jsx(B,{to:"/therapy",children:"Adult & Trauma Care"})}),n.jsx("li",{children:n.jsx(B,{to:"/educational-advocacy",children:"IEP & 504 Advocacy"})}),n.jsx("li",{children:n.jsx(B,{to:"/our-approach",children:"Whole-Person Approach"})}),n.jsx("li",{children:n.jsx(B,{to:"/workshops",children:"Workshops & Organizations"})})]})]}),n.jsxs("div",{className:"footer-col",children:[n.jsx("h4",{className:"footer-heading",children:"Explore"}),n.jsxs("ul",{className:"footer-links",children:[n.jsx("li",{children:n.jsx(B,{to:"/about",children:"Meet Jessica Mouzon"})}),n.jsx("li",{children:n.jsx(B,{to:"/resources",children:"Resource & Article Library"})}),n.jsx("li",{children:n.jsx(B,{to:"/faq",children:"Frequently Asked Questions"})}),n.jsx("li",{children:n.jsx(B,{to:"/insurance-fees",children:"Insurance & Fees"})}),n.jsx("li",{children:n.jsx(B,{to:"/contact",children:"Contact & Locations"})}),n.jsx("li",{children:n.jsx(B,{to:"/client-portal",className:"portal-footer-link",onClick:()=>ue("client_portal_clicked",{source:"footer"}),children:"Existing Client Portal →"})})]})]}),n.jsxs("div",{className:"footer-col action-col",children:[n.jsx("h4",{className:"footer-heading",children:"Get in Touch"}),n.jsx("p",{className:"footer-contact-note",children:"Begin with a free, confidential consultation to determine how we can best support your journey."}),n.jsxs(B,{to:"/consultation",className:"btn btn-primary btn-sm footer-cta-btn",onClick:()=>ue("consultation_cta_clicked",{source:"footer"}),children:[n.jsx("span",{children:"Book a Consultation"}),n.jsx(Ae,{size:16})]}),n.jsxs("div",{className:"footer-contact-details",children:[n.jsxs("div",{className:"contact-item",children:[n.jsx(Xd,{size:16,className:"contact-item-icon"}),n.jsx("span",{children:"Hybrid: In-Person & Virtual across NC"})]}),n.jsxs("div",{className:"contact-item",children:[n.jsx(Jd,{size:16,className:"contact-item-icon"}),n.jsx("span",{children:K.contact.email})]}),n.jsxs("div",{className:"contact-item",children:[n.jsx(Zd,{size:16,className:"contact-item-icon"}),n.jsx("span",{children:K.contact.phone})]})]})]})]}),n.jsx("div",{className:"footer-disclaimers",children:n.jsxs("p",{className:"legal-disclaimer",children:[n.jsx("strong",{children:"Legal & Professional Disclaimers:"})," GroWell Therapy Collective LLC provides licensed mental health counseling and educational consultation. Educational advocacy services do not constitute legal advice or formal legal representation. Reiki Level II is an optional complementary wellness practice and is not presented as an equivalent substitute for evidence-based psychotherapy or medical intervention. This public website does not collect sensitive health information."]})}),n.jsxs("div",{className:"footer-bottom",children:[n.jsxs("p",{className:"copyright-text",children:["© ",o," GroWell Therapy Collective LLC. All rights reserved."]}),n.jsxs("div",{className:"footer-legal-links",children:[n.jsx(B,{to:"/privacy-policy",children:"Privacy Policy"}),n.jsx("span",{className:"dot-sep",children:"•"}),n.jsx(B,{to:"/terms",children:"Website Terms"}),n.jsx("span",{className:"dot-sep",children:"•"}),n.jsx(B,{to:"/notice-of-privacy-practices",children:"Notice of Privacy Practices"}),n.jsx("span",{className:"dot-sep",children:"•"}),n.jsx(B,{to:"/client-portal",children:"Client Portal"})]})]})]}),n.jsx("style",{children:`
        .site-footer {
          background-color: var(--color-forest);
          color: #d2ddd6;
          margin-top: auto;
          font-size: 0.94rem;
        }

        .footer-crisis-bar {
          background-color: #16241c;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 1rem 0;
        }

        .footer-crisis-inner {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }

        .crisis-footer-icon {
          color: #d4a373;
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .crisis-footer-text {
          font-size: 0.86rem;
          color: #c0cfc6;
          line-height: 1.55;
          margin: 0;
        }

        .crisis-footer-text strong {
          color: #ffffff;
        }

        .footer-crisis-link {
          color: #f7d299;
          text-decoration: underline;
          text-underline-offset: 3px;
          font-weight: 600;
        }

        .footer-crisis-link:hover {
          color: #ffffff;
        }

        .footer-main-content {
          padding-top: 4.5rem;
          padding-bottom: 2.5rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.3fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        /* Brand col */
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: #ffffff;
          margin-bottom: 1.25rem;
        }

        .footer-logo-icon {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          background-color: #2e4738;
          color: #79a68e;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-logo-title {
          display: block;
          font-family: var(--font-serif);
          font-size: 1.45rem;
          font-weight: 600;
          line-height: 1.1;
          color: #ffffff;
        }

        .footer-logo-sub {
          display: block;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #92a89c;
        }

        .footer-tagline {
          font-size: 0.92rem;
          color: #b5c7bd;
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }

        .footer-clinician-info {
          border-left: 2px solid #3c5948;
          padding-left: 0.85rem;
        }

        .clinician-name {
          font-weight: 600;
          color: #ffffff;
          font-size: 0.92rem;
          margin-bottom: 0.15rem;
        }

        .clinician-meta {
          font-size: 0.8rem;
          color: #97aca1;
          margin-bottom: 0.1rem;
        }

        /* Nav Columns */
        .footer-heading {
          font-size: 1.05rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1.25rem;
          letter-spacing: -0.01em;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-links a {
          color: #b5c7bd;
          font-size: 0.92rem;
          transition: color var(--transition-fast), transform var(--transition-fast);
          display: inline-block;
        }

        .footer-links a:hover {
          color: #ffffff;
          transform: translateX(3px);
        }

        .portal-footer-link {
          color: #f7d299 !important;
          font-weight: 600;
        }

        .portal-footer-link:hover {
          color: #ffffff !important;
        }

        /* Action Column */
        .footer-contact-note {
          font-size: 0.88rem;
          color: #b5c7bd;
          margin-bottom: 1rem;
          line-height: 1.55;
        }

        .footer-cta-btn {
          margin-bottom: 1.5rem;
          width: 100%;
          justify-content: center;
        }

        .footer-contact-details {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: #9eb1a6;
        }

        .contact-item-icon {
          color: #79a68e;
          flex-shrink: 0;
        }

        /* Disclaimers */
        .footer-disclaimers {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1.5rem;
          margin-bottom: 2rem;
        }

        .legal-disclaimer {
          font-size: 0.78rem;
          line-height: 1.6;
          color: #8c9e94;
        }

        .legal-disclaimer strong {
          color: #b5c7bd;
        }

        /* Bottom */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright-text {
          font-size: 0.84rem;
          color: #8c9e94;
          margin: 0;
        }

        .footer-legal-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .footer-legal-links a {
          font-size: 0.82rem;
          color: #9eb1a6;
        }

        .footer-legal-links a:hover {
          color: #ffffff;
        }

        .dot-sep {
          color: #4a6354;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `})]})},Hf=()=>n.jsxs("aside",{"aria-label":"Crisis and Emergency Resources",className:"crisis-banner",children:[n.jsx("div",{className:"container crisis-banner-inner",children:n.jsxs("div",{className:"crisis-text-group",children:[n.jsx(Zi,{className:"crisis-icon",size:18,"aria-hidden":"true"}),n.jsxs("p",{className:"crisis-message",children:[n.jsx("strong",{children:"Mental Health Emergency?"})," If you or someone you know is in immediate danger, call ",n.jsx("strong",{children:"911"}),". For 24/7 confidential crisis support, call or text ",n.jsxs("a",{href:"tel:988",className:"crisis-tel-link",children:[n.jsx("strong",{children:"988"})," (Suicide & Crisis Lifeline)"]}),"."]})]})}),n.jsx("style",{children:`
        .crisis-banner {
          background-color: var(--color-forest-dark);
          color: #d1ded7;
          font-size: 0.82rem;
          padding: 0.45rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .crisis-banner-inner {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .crisis-text-group {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          text-align: center;
        }
        .crisis-icon {
          color: #d4a373;
          flex-shrink: 0;
        }
        .crisis-message {
          margin: 0;
          color: #d1ded7;
          font-size: 0.82rem;
          line-height: 1.4;
        }
        .crisis-message strong {
          color: #ffffff;
          font-weight: 600;
        }
        .crisis-tel-link {
          color: #f7d299;
          text-decoration: underline;
          text-underline-offset: 2px;
          font-weight: 600;
        }
        .crisis-tel-link:hover {
          color: #ffffff;
        }
        @media (max-width: 768px) {
          .crisis-banner {
            font-size: 0.76rem;
            padding: 0.4rem 0;
          }
          .crisis-message {
            font-size: 0.76rem;
          }
          .crisis-icon {
            display: none;
          }
        }
      `})]}),qf=()=>{const{pathname:o}=kn();return P.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[o]),null};function Et(o){if(o.startsWith("http://")||o.startsWith("https://"))return o;const d=o.startsWith("/")?o.slice(1):o,c="/growell-therapy-collective/";return c.endsWith("/")?`${c}${d}`:`${c}/${d}`}const Le=({title:o,description:d,canonicalPath:c="",ogType:m="website",ogImage:h="/images/hero-space.jpg",schema:g})=>{const w=o?`${o} | ${K.practiceName}`:`${K.practiceName} | Mental Health, Educational Advocacy & Whole-Person Support`,b=d||"GroWell Therapy Collective provides compassionate, individualized mental health counseling, trauma therapy (EMDR, TF-CBT), and K-12 educational & IEP advocacy for adolescents (11+), adults, and families.",N="https://growelltherapycollective.com",T=`${N}${c}`,k=Et(h),C=k.startsWith("http")?k:`${N}${k}`;return P.useEffect(()=>{document.title=w;const M=(te,le,re)=>{let ie=document.querySelector(`meta[${te}="${le}"]`);ie||(ie=document.createElement("meta"),ie.setAttribute(te,le),document.head.appendChild(ie)),ie.setAttribute("content",re)};M("name","description",b),M("property","og:title",w),M("property","og:description",b),M("property","og:type",m),M("property","og:url",T),M("property","og:image",C),M("property","og:site_name",K.practiceName),M("name","twitter:card","summary_large_image"),M("name","twitter:title",w),M("name","twitter:description",b),M("name","twitter:image",C);let G=document.querySelector('link[rel="canonical"]');G||(G=document.createElement("link"),G.setAttribute("rel","canonical"),document.head.appendChild(G)),G.setAttribute("href",T);const J={"@context":"https://schema.org","@type":"MedicalBusiness",name:K.practiceName,description:b,url:N,founder:{"@type":"Person",name:K.clinicianName,jobTitle:K.clinicianTitle,hasCredential:[K.credentials.educationLicense,K.credentials.emdrCertified,K.credentials.reikiTraining]},medicalSpecialty:["Psychotherapy","Trauma & EMDR","Adolescent Counseling","Educational Consultation"],areaServed:{"@type":"AdministrativeArea",name:K.contact.state}},q=g||J;let I=document.getElementById("jsonld-schema");I||(I=document.createElement("script"),I.setAttribute("type","application/ld+json"),I.setAttribute("id","jsonld-schema"),document.head.appendChild(I)),I.textContent=JSON.stringify(q)},[w,b,T,C,m,g]),null},zt=({title:o="Your Next Step Can Start With a Conversation.",subtitle:d="Whether you're exploring therapy for yourself or your adolescent, or seeking experienced advocacy to navigate school challenges, we are here to support your growth.",badge:c="Free Initial Consultation"})=>n.jsxs("section",{className:"consult-cta-section","aria-labelledby":"consult-cta-heading",children:[n.jsx("div",{className:"container",children:n.jsx("div",{className:"consult-cta-card",children:n.jsxs("div",{className:"consult-cta-content",children:[n.jsx("span",{className:"badge badge-terracotta",children:c}),n.jsx("h2",{id:"consult-cta-heading",className:"consult-cta-title",children:o}),n.jsx("p",{className:"consult-cta-desc",children:d}),n.jsxs("div",{className:"consult-cta-highlights",children:[n.jsxs("div",{className:"highlight-item",children:[n.jsx(ta,{size:18,className:"highlight-icon"}),n.jsx("span",{children:"No pressure, confidential discussion"})]}),n.jsxs("div",{className:"highlight-item",children:[n.jsx($p,{size:18,className:"highlight-icon"}),n.jsx("span",{children:"Explore fit & personalized support options"})]})]}),n.jsxs("div",{className:"consult-cta-actions",children:[n.jsxs(B,{to:"/consultation",className:"btn btn-primary btn-lg",onClick:()=>ue("consultation_cta_clicked",{source:"cta_banner"}),children:[n.jsx("span",{children:"Book a Consultation"}),n.jsx(Ae,{size:18})]}),n.jsxs(B,{to:"/contact",className:"btn btn-outline",onClick:()=>ue("consultation_cta_clicked",{source:"cta_contact_secondary"}),children:[n.jsx(df,{size:17}),n.jsx("span",{children:"Contact GroWell"})]})]})]})})}),n.jsx("style",{children:`
        .consult-cta-section {
          padding: 4.5rem 0 5.5rem;
          background-color: var(--color-linen);
        }

        .consult-cta-card {
          background: linear-gradient(145deg, #ffffff 0%, #f4eee7 100%);
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 4.5rem 3.5rem;
          text-align: center;
          box-shadow: var(--shadow-md);
          position: relative;
          overflow: hidden;
        }

        .consult-cta-card::before {
          content: '';
          position: absolute;
          top: -80px;
          right: -80px;
          width: 240px;
          height: 240px;
          background: radial-gradient(circle, rgba(192, 119, 88, 0.12) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .consult-cta-card::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(78, 114, 96, 0.12) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .consult-cta-content {
          max-width: 760px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .consult-cta-title {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          color: var(--color-forest);
          margin-top: 1.25rem;
          margin-bottom: 1.25rem;
          line-height: 1.2;
        }

        .consult-cta-desc {
          font-size: 1.15rem;
          color: var(--color-text-muted);
          line-height: 1.65;
          margin-bottom: 2rem;
        }

        .consult-cta-highlights {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-forest-light);
        }

        .highlight-icon {
          color: var(--color-sage);
        }

        .consult-cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .consult-cta-card {
            padding: 3rem 1.75rem;
            border-radius: var(--radius-lg);
          }
          .consult-cta-highlights {
            flex-direction: column;
            gap: 0.75rem;
            align-items: flex-start;
          }
          .consult-cta-actions {
            flex-direction: column;
            width: 100%;
          }
          .consult-cta-actions .btn {
            width: 100%;
          }
        }
      `})]}),Uf=()=>n.jsxs("div",{className:"home-page",children:[n.jsx(Le,{title:"Helping You Grow Through Life's Challenges",description:"Compassionate, individualized mental health counseling, trauma therapy (EMDR, TF-CBT), and K-12 educational & IEP advocacy for adolescents (11+), adults, and families.",canonicalPath:"/"}),n.jsx("section",{className:"hero-section","aria-labelledby":"hero-title",children:n.jsxs("div",{className:"container hero-container",children:[n.jsxs("div",{className:"hero-content",children:[n.jsxs("div",{className:"badge badge-sage hero-badge",children:[n.jsx(zd,{size:14}),n.jsx("span",{children:"Hybrid In-Person & Telehealth Options"})]}),n.jsx("h1",{id:"hero-title",className:"hero-title",children:"Helping You Grow Through Life’s Challenges."}),n.jsx("p",{className:"lead hero-lead",children:"GroWell Therapy Collective provides compassionate, individualized mental health support for adolescents (11+), adults, and families—combining evidence-based therapy, educational expertise, student advocacy, and whole-person care."}),n.jsxs("div",{className:"hero-actions",children:[n.jsxs(B,{to:"/consultation",className:"btn btn-primary btn-lg",onClick:()=>ue("consultation_cta_clicked",{source:"hero_primary"}),children:[n.jsx("span",{children:"Book a Consultation"}),n.jsx(Ae,{size:18})]}),n.jsx(B,{to:"/therapy",className:"btn btn-outline btn-lg",onClick:()=>ue("therapy_service_viewed",{source:"hero_secondary"}),children:n.jsx("span",{children:"Explore Our Services"})})]}),n.jsxs("div",{className:"hero-trust-indicators",children:[n.jsxs("div",{className:"trust-pill",children:[n.jsx(Ue,{size:16,className:"trust-icon"}),n.jsx("span",{children:"EMDR Certified"})]}),n.jsxs("div",{className:"trust-pill",children:[n.jsx(Ue,{size:16,className:"trust-icon"}),n.jsx("span",{children:"K–12 Educator Licensed"})]}),n.jsxs("div",{className:"trust-pill",children:[n.jsx(Ue,{size:16,className:"trust-icon"}),n.jsx("span",{children:"Trauma-Informed Whole Person"})]})]})]}),n.jsx("div",{className:"hero-media",children:n.jsxs("div",{className:"hero-image-frame",children:[n.jsx("img",{src:Et("/images/hero-space.jpg"),alt:"A warm, sunlit, tranquil therapy and consultation room with lush green plants and comfortable linen chairs",className:"hero-img",loading:"eager"}),n.jsxs("div",{className:"hero-floating-card",children:[n.jsx(zf,{size:20,className:"floating-card-icon"}),n.jsxs("div",{children:[n.jsx("p",{className:"floating-card-title",children:"Individualized Pathways"}),n.jsx("p",{className:"floating-card-sub",children:"Growth happens through more than one way."})]})]})]})})]})}),n.jsx("section",{className:"section section-bg-muted","aria-labelledby":"paths-title",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header text-center",children:[n.jsx("span",{className:"badge badge-terracotta",children:"Our Philosophy"}),n.jsx("h2",{id:"paths-title",className:"section-title",children:"There Is More Than One Way to Grow."}),n.jsx("p",{className:"section-subtitle",children:"Traditional conversation-based therapy is deeply valuable, but human beings connect, process, learn, and heal in diverse ways. We honor the whole person by tailoring our approach to your unique needs, nervous system, and life context."})]}),n.jsxs("div",{className:"grid-3 paths-grid",children:[n.jsxs("div",{className:"card card-hover path-card",children:[n.jsx("div",{className:"path-icon-box icon-sage",children:n.jsx(Cp,{size:28})}),n.jsx("h3",{className:"path-card-title",children:"Therapy & Mental Health"}),n.jsx("p",{className:"path-card-desc",children:"Evidence-based psychotherapy for adolescents, adults, and families navigating trauma, anxiety, life transitions, emotional regulation, and stress."}),n.jsxs("ul",{className:"path-features-list",children:[n.jsx("li",{children:"EMDR & Trauma-Informed Care"}),n.jsx("li",{children:"TF-CBT & Cognitive Behavioral Therapy"}),n.jsx("li",{children:"Person-Centered Collaboration"})]}),n.jsxs(B,{to:"/therapy",className:"path-card-link",children:[n.jsx("span",{children:"Explore Therapy"}),n.jsx(Ae,{size:16})]})]}),n.jsxs("div",{className:"card card-hover path-card",children:[n.jsx("div",{className:"path-icon-box icon-terracotta",children:n.jsx(mo,{size:28})}),n.jsx("h3",{className:"path-card-title",children:"Education & Advocacy"}),n.jsx("p",{className:"path-card-desc",children:"Bridging clinical understanding with K–12 Exceptional Children’s expertise to guide parents through IEPs, 504 plans, and school meetings with confidence."}),n.jsxs("ul",{className:"path-features-list",children:[n.jsx("li",{children:"IEP & 504 Plan Navigation"}),n.jsx("li",{children:"School Meeting Preparation & Support"}),n.jsx("li",{children:"Educational Document Review"})]}),n.jsxs(B,{to:"/educational-advocacy",className:"path-card-link",children:[n.jsx("span",{children:"Explore Advocacy"}),n.jsx(Ae,{size:16})]})]}),n.jsxs("div",{className:"card card-hover path-card",children:[n.jsx("div",{className:"path-icon-box icon-sand",children:n.jsx(Vp,{size:28})}),n.jsx("h3",{className:"path-card-title",children:"Whole-Person Support"}),n.jsx("p",{className:"path-card-desc",children:"Integrating complementary wellness practices when appropriate—including Reiki Level II, creative expression, mindfulness, and nature-informed grounding."}),n.jsxs("ul",{className:"path-features-list",children:[n.jsx("li",{children:"Reiki Level II (Complementary)"}),n.jsx("li",{children:"Creative & Art-Informed Activities"}),n.jsx("li",{children:"Somatic & Mindfulness Grounding"})]}),n.jsxs(B,{to:"/our-approach",className:"path-card-link",children:[n.jsx("span",{children:"Our Approach"}),n.jsx(Ae,{size:16})]})]})]})]})}),n.jsx("section",{className:"section","aria-labelledby":"therapy-heading",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"grid-2 align-center",children:[n.jsxs("div",{className:"therapy-highlight-content",children:[n.jsx("span",{className:"badge badge-sage",children:"Clinical Mental Health"}),n.jsx("h2",{id:"therapy-heading",className:"section-title",children:"Compassionate, Grounded & Trauma-Informed Psychotherapy."}),n.jsx("p",{className:"lead",children:"Therapy at GroWell is a collaborative partnership designed to foster nervous system regulation, self-compassion, and sustainable emotional resilience."}),n.jsx("p",{children:"We specialize in supporting adolescents (approximately age 11+), adults, and families working through trauma, anxiety, academic pressures, and life adjustments. Rather than simply managing surface symptoms, we focus on identifying root causes and building practical tools for lasting change."}),n.jsxs("div",{className:"modality-badges-group",children:[n.jsx("span",{className:"modality-tag",children:"EMDR Certified"}),n.jsx("span",{className:"modality-tag",children:"TF-CBT"}),n.jsx("span",{className:"modality-tag",children:"Cognitive Behavioral Therapy (CBT)"}),n.jsx("span",{className:"modality-tag",children:"Person-Centered"})]}),n.jsxs("div",{className:"section-cta-row",children:[n.jsxs(B,{to:"/therapy",className:"btn btn-forest",onClick:()=>ue("therapy_service_viewed",{source:"home_section"}),children:[n.jsx("span",{children:"Explore Therapy Services"}),n.jsx(Ae,{size:16})]}),n.jsx(B,{to:"/emdr-therapy",className:"btn btn-outline",onClick:()=>ue("emdr_service_viewed",{source:"home_section"}),children:n.jsx("span",{children:"Learn About EMDR"})})]})]}),n.jsx("div",{className:"therapy-highlight-visual",children:n.jsx("div",{className:"rounded-image-wrapper",children:n.jsx("img",{src:Et("/images/emdr-pathway.jpg"),alt:"A tranquil stone path winding through lush green ferns and peaceful sunlight",className:"rounded-feature-img",loading:"lazy"})})})]})})}),n.jsx("section",{className:"section section-bg-sage","aria-labelledby":"advocacy-heading",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"grid-2 align-center",children:[n.jsx("div",{className:"advocacy-visual-col",children:n.jsx("div",{className:"rounded-image-wrapper",children:n.jsx("img",{src:Et("/images/educational-advocacy.jpg"),alt:"A warm, organized educational consultation workspace with an open notebook, tea, and plant",className:"rounded-feature-img",loading:"lazy"})})}),n.jsxs("div",{className:"advocacy-text-col",children:[n.jsx("span",{className:"badge badge-terracotta",children:"Educational Advocacy"}),n.jsx("h2",{id:"advocacy-heading",className:"section-title",children:"When Emotional, Behavioral, and Educational Needs Intersect."}),n.jsx("p",{className:"lead",children:"Jessica Mouzon brings a rare dual perspective: a licensed mental health clinician holding an Exceptional Children’s General Curriculum K–12 Educator License."}),n.jsx("p",{children:"Navigating the school system can feel like learning a second language. When your child is facing academic stress, learning differences, ADHD, or emotional barriers, GroWell helps parents understand their rights, review school documentation, and advocate effectively."}),n.jsxs("div",{className:"advocacy-checklist",children:[n.jsxs("div",{className:"check-row",children:[n.jsx(Ue,{size:18,className:"check-row-icon"}),n.jsx("span",{children:"Understanding IEP evaluations, goals, and accommodations"})]}),n.jsxs("div",{className:"check-row",children:[n.jsx(Ue,{size:18,className:"check-row-icon"}),n.jsx("span",{children:"504 Plan navigation and classroom modifications"})]}),n.jsxs("div",{className:"check-row",children:[n.jsx(Ue,{size:18,className:"check-row-icon"}),n.jsx("span",{children:"Preparing for difficult school and eligibility meetings"})]}),n.jsxs("div",{className:"check-row",children:[n.jsx(Ue,{size:18,className:"check-row-icon"}),n.jsx("span",{children:"Bridging emotional health with academic executive functioning"})]})]}),n.jsxs("div",{className:"notice-box notice-sage",style:{marginTop:"1.25rem",marginBottom:"1.5rem"},children:[n.jsx(ho,{size:20,className:"notice-icon"}),n.jsx("div",{className:"notice-content",children:n.jsxs("p",{children:[n.jsx("strong",{children:"Please Note:"})," GroWell Therapy Collective provides educational consultation and parent advocacy. These services do not constitute legal advice or formal legal representation."]})})]}),n.jsxs(B,{to:"/educational-advocacy",className:"btn btn-primary",onClick:()=>ue("advocacy_service_viewed",{source:"home_section"}),children:[n.jsx("span",{children:"Explore Educational Advocacy"}),n.jsx(Ae,{size:16})]})]})]})})}),n.jsx("section",{className:"section","aria-labelledby":"jessica-heading",children:n.jsx("div",{className:"container",children:n.jsx("div",{className:"clinician-feature-box",children:n.jsxs("div",{className:"grid-2 align-center",children:[n.jsx("div",{className:"clinician-portrait-wrap",children:n.jsx("img",{src:Et("/images/jessica-mouzon.jpg"),alt:"Jessica Mouzon, Clinical Mental Health Counselor and Educational Advocate",className:"clinician-portrait",loading:"lazy"})}),n.jsxs("div",{className:"clinician-bio-wrap",children:[n.jsx("span",{className:"badge badge-sand",children:"Meet Your Clinician & Advocate"}),n.jsx("h2",{id:"jessica-heading",className:"clinician-name-title",children:"Jessica Mouzon"}),n.jsx("p",{className:"clinician-creds-line",children:"Clinical Mental Health Counseling • Exceptional Children’s K–12 Educator • EMDR Certified"}),n.jsx("p",{children:"With approximately 11 years of professional experience across mental health counseling and educational environments, Jessica Mouzon founded GroWell Therapy Collective to provide a truly whole-person space where adolescents, adults, and families can find grounded support."}),n.jsx("p",{children:"Jessica believes that effective healing is never one-size-fits-all. By honoring the complex interplay between emotional health, learning styles, family systems, and life experiences, she helps clients build meaningful insight, confidence, and self-advocacy."}),n.jsxs("div",{className:"credentials-summary-grid",children:[n.jsxs("div",{className:"cred-badge-item",children:[n.jsx("span",{className:"cred-title",children:"~11 Years Experience"}),n.jsx("span",{className:"cred-desc",children:"Mental health counseling & education"})]}),n.jsxs("div",{className:"cred-badge-item",children:[n.jsx("span",{className:"cred-title",children:"EMDR Certified"}),n.jsx("span",{className:"cred-desc",children:"Advanced trauma reprocessing"})]}),n.jsxs("div",{className:"cred-badge-item",children:[n.jsx("span",{className:"cred-title",children:"K–12 Educator License"}),n.jsx("span",{className:"cred-desc",children:"Exceptional Children's curriculum"})]}),n.jsxs("div",{className:"cred-badge-item",children:[n.jsx("span",{className:"cred-title",children:"Reiki Level II"}),n.jsx("span",{className:"cred-desc",children:"Complementary wellness & relaxation"})]})]}),n.jsxs("div",{className:"section-cta-row",children:[n.jsxs(B,{to:"/about",className:"btn btn-forest",children:[n.jsx("span",{children:"Read Jessica’s Full Bio"}),n.jsx(Ae,{size:16})]}),n.jsx(B,{to:"/consultation",className:"btn btn-outline",children:n.jsx("span",{children:"Book a Consultation"})})]})]})]})})})}),n.jsx("section",{className:"section section-bg-muted","aria-labelledby":"pillars-heading",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header text-center",children:[n.jsx("span",{className:"badge badge-forest",children:"Our Core Process"}),n.jsx("h2",{id:"pillars-heading",className:"section-title",children:"The GroWell Approach"}),n.jsx("p",{className:"section-subtitle",children:"Four intentional pillars guiding every therapy relationship, family consultation, and student advocacy plan."})]}),n.jsxs("div",{className:"grid-4 pillars-grid",children:[n.jsxs("div",{className:"card pillar-card",children:[n.jsx("div",{className:"pillar-step",children:"01"}),n.jsx("h3",{className:"pillar-title",children:"Understand"}),n.jsx("p",{className:"pillar-desc",children:"We take time to deeply understand your unique circumstances, strengths, history, school or work environment, and personal goals."})]}),n.jsxs("div",{className:"card pillar-card",children:[n.jsx("div",{className:"pillar-step",children:"02"}),n.jsx("h3",{className:"pillar-title",children:"Connect"}),n.jsx("p",{className:"pillar-desc",children:"We establish a safe, transparent, and collaborative therapeutic relationship centered on mutual respect, empathy, and safety."})]}),n.jsxs("div",{className:"card pillar-card",children:[n.jsx("div",{className:"pillar-step",children:"03"}),n.jsx("h3",{className:"pillar-title",children:"Grow"}),n.jsx("p",{className:"pillar-desc",children:"We apply evidence-based strategies (EMDR, CBT, TF-CBT) alongside personalized modalities to foster meaningful internal progress."})]}),n.jsxs("div",{className:"card pillar-card",children:[n.jsx("div",{className:"pillar-step",children:"04"}),n.jsx("h3",{className:"pillar-title",children:"Thrive"}),n.jsx("p",{className:"pillar-desc",children:"You develop practical tools, nervous system regulation, self-advocacy skills, and support systems that extend into daily life."})]})]})]})}),n.jsx("section",{className:"section","aria-labelledby":"mediums-heading",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"grid-2 align-center",children:[n.jsxs("div",{className:"mediums-text",children:[n.jsx("span",{className:"badge badge-terracotta",children:"Complementary Wellness"}),n.jsx("h2",{id:"mediums-heading",className:"section-title",children:"More Than One Medium: Creative & Experiential Engagement."}),n.jsx("p",{className:"lead",children:"Therapeutic engagement does not need to look identical for every individual."}),n.jsx("p",{children:"When words alone feel insufficient, we may incorporate complementary, tactile, and experiential experiences—tailored to your interests and comfort level."}),n.jsxs("div",{className:"mediums-list",children:[n.jsxs("div",{className:"medium-item",children:[n.jsx(pf,{size:20,className:"medium-icon"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Creative & Art-Informed Expression:"})," Sketching, collage, and journaling to explore feelings visually."]})]}),n.jsxs("div",{className:"medium-item",children:[n.jsx(mf,{size:20,className:"medium-icon"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Music-Informed Exploration:"})," Rhythm, playlist reflection, and sound grounding for mood support."]})]}),n.jsxs("div",{className:"medium-item",children:[n.jsx(zd,{size:20,className:"medium-icon"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Nature & Botanical Metaphors:"})," Connecting with natural cycles to foster emotional groundedness."]})]}),n.jsxs("div",{className:"medium-item",children:[n.jsx(gp,{size:20,className:"medium-icon"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Mindfulness & Somatic Awareness:"})," Gentle breathwork and nervous system regulating techniques."]})]})]}),n.jsx("p",{className:"disclaimer-text",style:{marginTop:"1.25rem"},children:"*Note: The incorporation of any creative or complementary activity depends entirely on client goals, clinical appropriateness, and mutual consent within a broader treatment plan."})]}),n.jsx("div",{className:"mediums-visual",children:n.jsx("div",{className:"rounded-image-wrapper",children:n.jsx("img",{src:Et("/images/whole-person-creative.jpg"),alt:"Mindful journal, botanical elements, teacup, and watercolor palette on linen fabric",className:"rounded-feature-img",loading:"lazy"})})})]})})}),n.jsx("section",{className:"section section-bg-sage","aria-labelledby":"hybrid-heading",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header text-center",children:[n.jsx("span",{className:"badge badge-sage",children:"Flexible Access"}),n.jsx("h2",{id:"hybrid-heading",className:"section-title",children:"In-Person & Secure Telehealth Options"}),n.jsx("p",{className:"section-subtitle",children:"We offer flexible care models designed to fit your family's schedule and clinical needs."})]}),n.jsxs("div",{className:"grid-3 hybrid-grid",children:[n.jsxs("div",{className:"card hybrid-card",children:[n.jsx("div",{className:"hybrid-icon-wrap",children:n.jsx(Ep,{size:32})}),n.jsx("h3",{children:"In-Person Care"}),n.jsx("p",{children:"In-person sessions in a warm, welcoming, sunlit office environment designed for connection, comfort, and focus."}),n.jsxs("div",{className:"hybrid-location-tag",children:["Serving ",K.contact.city]})]}),n.jsxs("div",{className:"card hybrid-card",children:[n.jsx("div",{className:"hybrid-icon-wrap",children:n.jsx(Yp,{size:32})}),n.jsx("h3",{children:"Virtual Telehealth"}),n.jsxs("p",{children:["Convenient, encrypted, HIPAA-compliant video therapy sessions accessible from the comfort of your home across ",K.contact.state,"."]}),n.jsx("div",{className:"hybrid-location-tag",children:"Statewide Virtual Access"})]}),n.jsxs("div",{className:"card hybrid-card",children:[n.jsx("div",{className:"hybrid-icon-wrap",children:n.jsx(Jp,{size:32})}),n.jsx("h3",{children:"Hybrid Flexibility"}),n.jsx("p",{children:"Combine in-person sessions with telehealth appointments as needed to support busy school, work, and family schedules."}),n.jsx("div",{className:"hybrid-location-tag",children:"Personalized Scheduling"})]})]})]})}),n.jsx(zt,{}),n.jsx("style",{children:`
        /* Hero Section */
        .hero-section {
          padding: 4.5rem 0 5rem;
          background: linear-gradient(180deg, var(--color-linen) 0%, #f4eee7 100%);
          border-bottom: 1px solid var(--color-border);
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .hero-badge {
          margin-bottom: 1.25rem;
        }

        .hero-title {
          margin-bottom: 1.25rem;
          letter-spacing: -0.025em;
        }

        .hero-lead {
          margin-bottom: 2rem;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.25rem;
          flex-wrap: wrap;
        }

        .hero-trust-indicators {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          padding-top: 1.25rem;
          border-top: 1px solid var(--color-border);
        }

        .trust-pill {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-forest);
        }

        .trust-icon {
          color: var(--color-sage);
        }

        /* Hero Media Frame */
        .hero-image-frame {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: visible;
          box-shadow: var(--shadow-lg);
        }

        .hero-img {
          width: 100%;
          height: auto;
          border-radius: var(--radius-xl);
          display: block;
          object-fit: cover;
          aspect-ratio: 16 / 11;
        }

        .hero-floating-card {
          position: absolute;
          bottom: -20px;
          left: -20px;
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          box-shadow: var(--shadow-md);
          max-width: 320px;
          animation: floatSlow 4s ease-in-out infinite alternate;
        }

        @keyframes floatSlow {
          from { transform: translateY(0px); }
          to { transform: translateY(-8px); }
        }

        .floating-card-icon {
          color: var(--color-terracotta);
          flex-shrink: 0;
        }

        .floating-card-title {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--color-forest);
          margin: 0;
        }

        .floating-card-sub {
          font-size: 0.78rem;
          color: var(--color-text-muted);
          margin: 0;
        }

        /* Section Header */
        .section-header {
          max-width: 780px;
          margin: 0 auto 3.5rem;
        }

        .section-header .badge {
          margin-bottom: 1rem;
        }

        .section-title {
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.15rem;
          color: var(--color-text-muted);
        }

        .text-center {
          text-align: center;
        }

        .align-center {
          align-items: center;
        }

        /* Paths Grid */
        .path-card {
          padding: 2.5rem 2rem;
          justify-content: space-between;
        }

        .path-icon-box {
          width: 54px;
          height: 54px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .icon-sage { background-color: var(--color-sage-tint); color: var(--color-sage); }
        .icon-terracotta { background-color: var(--color-terracotta-tint); color: var(--color-terracotta); }
        .icon-sand { background-color: var(--color-sand-tint); color: #855e34; }

        .path-card-title {
          font-size: 1.35rem;
          margin-bottom: 0.85rem;
          color: var(--color-forest);
        }

        .path-card-desc {
          font-size: 0.98rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .path-features-list {
          list-style: none;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-subtle);
        }

        .path-features-list li {
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--color-forest-light);
          position: relative;
          padding-left: 1.25rem;
        }

        .path-features-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--color-terracotta);
          font-size: 1.2rem;
          line-height: 1;
        }

        .path-card-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--color-terracotta);
          margin-top: auto;
        }

        .path-card-link:hover {
          color: var(--color-terracotta-hover);
          gap: 0.65rem;
        }

        /* Highlight Sections */
        .modality-badges-group {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin: 1.5rem 0 2rem;
        }

        .modality-tag {
          background-color: var(--color-sage-tint);
          color: var(--color-forest);
          font-size: 0.86rem;
          font-weight: 600;
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(78, 114, 96, 0.2);
        }

        .section-cta-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .rounded-image-wrapper {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-border);
        }

        .rounded-feature-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          aspect-ratio: 16 / 10;
          transition: transform 0.6s ease;
        }

        .rounded-image-wrapper:hover .rounded-feature-img {
          transform: scale(1.02);
        }

        /* Advocacy Checklist */
        .advocacy-checklist {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin: 1.5rem 0;
        }

        .check-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.96rem;
          font-weight: 500;
          color: var(--color-forest);
        }

        .check-row-icon {
          color: var(--color-terracotta);
          flex-shrink: 0;
        }

        /* Clinician Feature Box */
        .clinician-feature-box {
          background-color: #ffffff;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 3.5rem;
          box-shadow: var(--shadow-md);
        }

        .clinician-portrait-wrap {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }

        .clinician-portrait {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          aspect-ratio: 3 / 4;
        }

        .clinician-name-title {
          font-family: var(--font-serif);
          font-size: 2.25rem;
          margin-top: 0.5rem;
          margin-bottom: 0.25rem;
        }

        .clinician-creds-line {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--color-sage);
          margin-bottom: 1.25rem;
        }

        .credentials-summary-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin: 1.5rem 0 2rem;
          padding: 1.25rem;
          background-color: var(--color-linen);
          border-radius: var(--radius-md);
        }

        .cred-badge-item {
          display: flex;
          flex-direction: column;
        }

        .cred-title {
          font-weight: 700;
          font-size: 0.92rem;
          color: var(--color-forest);
        }

        .cred-desc {
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }

        /* Pillars Grid */
        .pillar-card {
          padding: 2.25rem 1.75rem;
          position: relative;
        }

        .pillar-step {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          font-weight: 400;
          color: var(--color-sand);
          line-height: 1;
          margin-bottom: 1rem;
        }

        .pillar-title {
          font-size: 1.25rem;
          margin-bottom: 0.65rem;
          color: var(--color-forest);
        }

        .pillar-desc {
          font-size: 0.92rem;
          line-height: 1.6;
        }

        /* Mediums List */
        .mediums-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .medium-item {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          font-size: 0.95rem;
          color: var(--color-text-muted);
        }

        .medium-icon {
          color: var(--color-terracotta);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .medium-item strong {
          color: var(--color-forest);
        }

        /* Hybrid Grid */
        .hybrid-card {
          text-align: center;
          padding: 2.75rem 2rem;
          align-items: center;
        }

        .hybrid-icon-wrap {
          width: 68px;
          height: 68px;
          border-radius: var(--radius-full);
          background-color: var(--color-sage-tint);
          color: var(--color-sage);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .hybrid-card h3 {
          margin-bottom: 0.75rem;
          font-size: 1.3rem;
        }

        .hybrid-card p {
          font-size: 0.94rem;
          margin-bottom: 1.5rem;
        }

        .hybrid-location-tag {
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-forest);
          background-color: var(--color-sand-tint);
          padding: 0.4rem 0.95rem;
          border-radius: var(--radius-full);
          margin-top: auto;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .hero-floating-card {
            display: none;
          }
          .clinician-feature-box {
            padding: 2.25rem;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 3rem 0 3.5rem;
          }
          .credentials-summary-grid {
            grid-template-columns: 1fr;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions .btn {
            width: 100%;
          }
        }
      `})]}),$f=()=>n.jsxs("div",{className:"about-page",children:[n.jsx(Le,{title:"Meet Jessica Mouzon | Clinician & Educational Specialist",description:"Learn about Jessica Mouzon, founder of GroWell Therapy Collective. Clinical mental health counselor, licensed K-12 educator, and EMDR certified therapist with ~11 years of experience.",canonicalPath:"/about"}),n.jsx("section",{className:"section section-bg-muted","aria-labelledby":"about-hero-title",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"grid-2 align-center",children:[n.jsxs("div",{className:"about-hero-text",children:[n.jsx("span",{className:"badge badge-sage",children:"Founder & Clinician"}),n.jsx("h1",{id:"about-hero-title",className:"about-title",children:"Meet Jessica Mouzon"}),n.jsx("p",{className:"lead",children:"Bridging clinical psychotherapy, trauma-informed healing, and K–12 educational advocacy to support the whole person."}),n.jsx("p",{children:"Jessica Mouzon founded GroWell Therapy Collective with a foundational belief: growth is not a rigid, linear formula. Human beings thrive when their mental health, learning differences, family systems, and life environments are understood collaboratively."}),n.jsxs("div",{className:"about-experience-badge",children:[n.jsx(Or,{size:20,className:"exp-icon"}),n.jsxs("span",{children:[n.jsx("strong",{children:K.experienceYears})," across clinical and educational settings."]})]})]}),n.jsx("div",{className:"about-hero-portrait-frame",children:n.jsx("img",{src:Et("/images/jessica-mouzon.jpg"),alt:"Jessica Mouzon in a calm, modern, sunlit consultation office",className:"about-portrait-img"})})]})})}),n.jsx("section",{className:"section","aria-labelledby":"creds-heading",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header text-center",children:[n.jsx("span",{className:"badge badge-terracotta",children:"Professional Standards"}),n.jsx("h2",{id:"creds-heading",className:"section-title",children:"Credentials & Professional Licensure"}),n.jsx("p",{className:"section-subtitle",children:"Grounded in rigorous clinical training, trauma-informed methodologies, and specialized educator licensure."})]}),n.jsxs("div",{className:"grid-3 creds-grid",children:[n.jsxs("div",{className:"card cred-card",children:[n.jsx("div",{className:"cred-icon-wrap icon-sage",children:n.jsx(Op,{size:28})}),n.jsx("span",{className:"cred-category",children:"Clinical Psychotherapy"}),n.jsx("h3",{className:"cred-card-title",children:K.credentials.clinicalCounseling}),n.jsxs("div",{className:"cred-status-box",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"License Designation:"})," ",K.credentials.exactLicenseDesignation]}),n.jsxs("p",{children:[n.jsx("strong",{children:"NC License Number:"})," ",K.credentials.ncLicenseNumber]})]}),n.jsx("p",{className:"cred-card-desc",children:"Dedicated to evidence-based psychotherapy, emotional regulation, and compassionate mental health support for individuals from adolescence through adulthood."})]}),n.jsxs("div",{className:"card cred-card",children:[n.jsx("div",{className:"cred-icon-wrap icon-terracotta",children:n.jsx(mo,{size:28})}),n.jsx("span",{className:"cred-category",children:"Specialized Education"}),n.jsx("h3",{className:"cred-card-title",children:K.credentials.educationLicense}),n.jsxs("div",{className:"cred-status-box",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Curriculum Scope:"})," K–12 Exceptional Children"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Focus:"})," Learning differences, accommodations & IEPs"]})]}),n.jsx("p",{className:"cred-card-desc",children:"Deep working knowledge of school systems, specialized instruction, 504 plans, behavioral supports, and collaborative parent advocacy."})]}),n.jsxs("div",{className:"card cred-card",children:[n.jsx("div",{className:"cred-icon-wrap icon-sand",children:n.jsx(wp,{size:28})}),n.jsx("span",{className:"cred-category",children:"Advanced Modalities"}),n.jsx("h3",{className:"cred-card-title",children:K.credentials.emdrCertified}),n.jsxs("div",{className:"cred-status-box",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Trauma Modalities:"})," EMDR & TF-CBT"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Complementary:"})," ",K.credentials.reikiTraining]})]}),n.jsx("p",{className:"cred-card-desc",children:"Certified in Eye Movement Desensitization and Reprocessing to help clients safely process trauma, alongside Level II Reiki training for complementary relaxation."})]})]})]})}),n.jsx("section",{className:"section section-bg-sage","aria-labelledby":"journey-heading",children:n.jsx("div",{className:"container container-narrow",children:n.jsxs("div",{className:"about-story-flow",children:[n.jsx("span",{className:"badge badge-forest",children:"The Story Behind GroWell"}),n.jsx("h2",{id:"journey-heading",className:"section-title",style:{marginTop:"0.75rem"},children:"Why GroWell Therapy Collective?"}),n.jsxs("div",{className:"story-paragraphs",children:[n.jsx("p",{className:"lead",children:"Throughout over a decade of working with students, parents, and adults, one theme repeatedly emerged: people are rarely struggling in isolation."}),n.jsx("p",{children:"A teenager struggling with school attendance might be battling an undiagnosed learning difference, sensory overload, or social anxiety. A parent trying to support their child might feel overwhelmed by confusing educational paperwork and adversarial school meetings. An adult navigating trauma might feel that traditional talk therapy alone hasn't helped their body feel truly calm."}),n.jsx("p",{children:"Jessica created GroWell to tear down the silos between clinical psychotherapy, educational navigation, and whole-person wellness. At GroWell, treatment plans are tailored to your real life—integrating practical strategies, deep trauma reprocessing, and collaborative advocacy when needed."}),n.jsx("h3",{style:{marginTop:"2.5rem",marginBottom:"1rem"},children:"Jessica’s Clinical & Educational Approach"}),n.jsxs("ul",{className:"approach-bullet-list",children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Trauma-Informed & Safe:"})," Grounded in the understanding of how traumatic stress impacts the nervous system, memory, and relationships."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Developmentally Attuned:"})," Tailoring communication, pacing, and therapeutic mediums to adolescents (11+), emerging young adults, and mature adults."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Strengths-Based & Collaborative:"})," You are the expert on your own lived experience; Jessica acts as a skilled guide, clinician, and advocate."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Transparent & Grounded:"})," Free of clinical pretense and medical jargon, focusing on practical tools and authentic connection."]})]})]})]})})}),n.jsx(zt,{title:"Connect With Jessica Mouzon",subtitle:"Schedule a free consultation to discuss your needs, explore therapy or advocacy options, and determine if GroWell is the right fit."}),n.jsx("style",{children:`
        .about-hero-text {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .about-title {
          margin: 0;
        }

        .about-experience-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.25rem;
          background-color: var(--color-sand-tint);
          border: 1px solid #dfcfbc;
          border-radius: var(--radius-md);
          font-size: 0.94rem;
          color: var(--color-forest);
        }

        .exp-icon {
          color: var(--color-terracotta);
          flex-shrink: 0;
        }

        .about-hero-portrait-frame {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-border);
        }

        .about-portrait-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          aspect-ratio: 4 / 5;
        }

        /* Creds Grid */
        .cred-card {
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
        }

        .cred-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .cred-category {
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-text-light);
          margin-bottom: 0.35rem;
        }

        .cred-card-title {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--color-forest);
          line-height: 1.3;
        }

        .cred-status-box {
          background-color: var(--color-linen);
          border-radius: var(--radius-sm);
          padding: 0.85rem;
          margin-bottom: 1.25rem;
          font-size: 0.84rem;
          border-left: 3px solid var(--color-sage);
        }

        .cred-status-box p {
          margin: 0;
          font-size: 0.82rem;
          color: var(--color-text-main);
          line-height: 1.5;
        }

        .cred-status-box p strong {
          color: var(--color-forest);
        }

        .cred-card-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          margin-top: auto;
        }

        /* Story Flow */
        .about-story-flow {
          padding: 1rem 0;
        }

        .story-paragraphs p {
          margin-bottom: 1.5rem;
        }

        .approach-bullet-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1rem;
        }

        .approach-bullet-list li {
          font-size: 1.02rem;
          color: var(--color-text-muted);
          position: relative;
          padding-left: 1.75rem;
          line-height: 1.6;
        }

        .approach-bullet-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-sage);
          font-weight: 700;
          font-size: 1.1rem;
        }

        .approach-bullet-list strong {
          color: var(--color-forest);
        }

        @media (max-width: 900px) {
          .about-hero-text {
            order: 2;
          }
          .about-hero-portrait-frame {
            order: 1;
            max-width: 480px;
            margin: 0 auto;
          }
        }
      `})]}),Gf=()=>n.jsxs("div",{className:"therapy-page",children:[n.jsx(Le,{title:"Therapy Services & Clinical Modalities",description:"Individual adolescent therapy (11+), adult counseling, trauma recovery, and family support using EMDR, TF-CBT, CBT, and Person-Centered Therapy.",canonicalPath:"/therapy"}),n.jsx("section",{className:"section section-bg-muted","aria-labelledby":"therapy-hero-title",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"section-header text-center",children:[n.jsx("span",{className:"badge badge-sage",children:"Clinical Services"}),n.jsx("h1",{id:"therapy-hero-title",className:"section-title",children:"Therapy for Adolescents, Adults & Families."}),n.jsx("p",{className:"section-subtitle",children:"Evidence-based psychotherapy tailored to your nervous system, life history, and individual goals—creating a grounded space to heal, process, and build resilience."}),n.jsx("div",{style:{marginTop:"1.75rem"},children:n.jsxs(B,{to:"/consultation",className:"btn btn-primary btn-lg",onClick:()=>ue("consultation_cta_clicked",{source:"therapy_hero"}),children:[n.jsx("span",{children:"Book a Consultation"}),n.jsx(Ae,{size:18})]})})]})})}),n.jsx("section",{className:"section","aria-labelledby":"service-areas-heading",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header text-center",children:[n.jsx("span",{className:"badge badge-terracotta",children:"Who We Help"}),n.jsx("h2",{id:"service-areas-heading",className:"section-title",children:"Our Core Service Areas"}),n.jsx("p",{className:"section-subtitle",children:"We may be able to help with trauma, anxiety, stress, emotional regulation, academic pressure, and life transitions."})]}),n.jsxs("div",{className:"grid-2 service-areas-grid",children:[n.jsxs("div",{className:"card card-hover service-category-card",children:[n.jsxs("div",{className:"service-card-header",children:[n.jsx("div",{className:"service-icon-box icon-sage",children:n.jsx(Sf,{size:26})}),n.jsxs("div",{children:[n.jsx("span",{className:"badge badge-sage",children:"Ages ~11+"}),n.jsx("h3",{className:"service-category-title",children:"Adolescent & Teen Therapy"})]})]}),n.jsx("p",{className:"service-category-desc",children:"Adolescence is a vital window of identity formation, brain development, and social stress. We provide teens with a safe, confidential space free of judgment to explore their feelings, manage anxiety, navigate peer dynamics, and build effective coping mechanisms."}),n.jsxs("div",{className:"service-focus-list",children:[n.jsx("p",{className:"focus-label",children:"Common Areas of Support:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"School anxiety, perfectionism & academic burnout"}),n.jsx("li",{children:"Emotional regulation, impulsivity & mood fluctuations"}),n.jsx("li",{children:"Low self-esteem, identity exploration & social stress"}),n.jsx("li",{children:"Navigating family transitions and peer challenges"})]})]}),n.jsx("div",{className:"service-card-footer",children:n.jsx(B,{to:"/consultation",className:"btn btn-forest btn-sm",onClick:()=>ue("consultation_cta_clicked",{source:"therapy_teen_card"}),children:"Book Teen Consultation →"})})]}),n.jsxs("div",{className:"card card-hover service-category-card",children:[n.jsxs("div",{className:"service-card-header",children:[n.jsx("div",{className:"service-icon-box icon-terracotta",children:n.jsx(nu,{size:26})}),n.jsxs("div",{children:[n.jsx("span",{className:"badge badge-terracotta",children:"Individual Care"}),n.jsx("h3",{className:"service-category-title",children:"Adult Therapy & Young Adults"})]})]}),n.jsx("p",{className:"service-category-desc",children:"Support for emerging adults and mature adults navigating major life transitions, relationship patterns, chronic stress, workplace burnout, and personal growth. We work collaboratively to unhook from unhelpful patterns and rediscover personal clarity."}),n.jsxs("div",{className:"service-focus-list",children:[n.jsx("p",{className:"focus-label",children:"Common Areas of Support:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Generalized anxiety, panic & chronic stress"}),n.jsx("li",{children:"Life transitions (college, career, relationships, parenting)"}),n.jsx("li",{children:"Setting boundaries, self-advocacy & values alignment"}),n.jsx("li",{children:"Depression, grief, and unhelpful behavioral loops"})]})]}),n.jsx("div",{className:"service-card-footer",children:n.jsx(B,{to:"/consultation",className:"btn btn-forest btn-sm",onClick:()=>ue("consultation_cta_clicked",{source:"therapy_adult_card"}),children:"Book Adult Consultation →"})})]}),n.jsxs("div",{className:"card card-hover service-category-card",children:[n.jsxs("div",{className:"service-card-header",children:[n.jsx("div",{className:"service-icon-box icon-sand",children:n.jsx(ta,{size:26})}),n.jsxs("div",{children:[n.jsx("span",{className:"badge badge-sand",children:"Specialized Modality"}),n.jsx("h3",{className:"service-category-title",children:"Trauma-Informed & PTSD Care"})]})]}),n.jsx("p",{className:"service-category-desc",children:"Trauma lives not just in our thoughts, but in our nervous system and physiological responses. Jessica utilizes EMDR and trauma-focused modalities to help clients safely reprocess single-incident traumas, complex relational wounds, and chronic distress without having to re-live every detail."}),n.jsxs("div",{className:"service-focus-list",children:[n.jsx("p",{className:"focus-label",children:"Common Areas of Support:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Single-incident trauma (accidents, medical events, loss)"}),n.jsx("li",{children:"Developmental, childhood, or relational trauma"}),n.jsx("li",{children:"Hypervigilance, flashbacks & physiological triggers"}),n.jsx("li",{children:'Negative core beliefs ("I am not safe", "It was my fault")'})]})]}),n.jsx("div",{className:"service-card-footer",children:n.jsx(B,{to:"/emdr-therapy",className:"btn btn-outline btn-sm",onClick:()=>ue("emdr_service_viewed",{source:"therapy_trauma_card"}),children:"Explore EMDR Therapy →"})})]}),n.jsxs("div",{className:"card card-hover service-category-card",children:[n.jsxs("div",{className:"service-card-header",children:[n.jsx("div",{className:"service-icon-box icon-forest",children:n.jsx(If,{size:26})}),n.jsxs("div",{children:[n.jsx("span",{className:"badge badge-forest",children:"Systemic Care"}),n.jsx("h3",{className:"service-category-title",children:"Family & Parent Support"})]})]}),n.jsx("p",{className:"service-category-desc",children:"When an adolescent is struggling, the entire family system feels the strain. We provide collaborative parent consultation and family support sessions to enhance communication, establish healthy boundaries, and equip caregivers with neurodivergent-affirming parenting strategies."}),n.jsxs("div",{className:"service-focus-list",children:[n.jsx("p",{className:"focus-label",children:"Common Areas of Support:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Co-regulation strategies for dysregulated adolescents"}),n.jsx("li",{children:"Navigating school-related tensions at home"}),n.jsx("li",{children:"Improving parent-teen communication and trust"}),n.jsx("li",{children:"Supporting siblings and establishing balanced household dynamics"})]})]}),n.jsx("div",{className:"service-card-footer",children:n.jsx(B,{to:"/consultation",className:"btn btn-forest btn-sm",onClick:()=>ue("consultation_cta_clicked",{source:"therapy_family_card"}),children:"Book Family Consultation →"})})]})]})]})}),n.jsx("section",{className:"section section-bg-sage","aria-labelledby":"modalities-heading",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header text-center",children:[n.jsx("span",{className:"badge badge-forest",children:"Evidence-Based Approaches"}),n.jsx("h2",{id:"modalities-heading",className:"section-title",children:"Our Therapeutic Modalities"}),n.jsx("p",{className:"section-subtitle",children:"We integrate proven clinical methodologies with a warm, human-centered framework."})]}),n.jsxs("div",{className:"modalities-stack",children:[n.jsxs("div",{className:"card modality-card",children:[n.jsxs("div",{className:"modality-card-top",children:[n.jsxs("div",{className:"modality-tag-group",children:[n.jsx("span",{className:"badge badge-terracotta",children:"Certified Modality"}),n.jsx("span",{className:"badge badge-sand",children:"Trauma Reprocessing"})]}),n.jsx("h3",{children:"Eye Movement Desensitization and Reprocessing (EMDR)"})]}),n.jsx("p",{className:"modality-p",children:"EMDR is a structured, research-supported psychotherapy method that enables people to heal from the symptoms and emotional distress resulting from disturbing life experiences. Repeated studies show that by using bilateral stimulation (such as side-to-side eye movements or alternating taps), EMDR helps the brain resume its natural healing process."}),n.jsx("div",{className:"modality-link-row",children:n.jsx(B,{to:"/emdr-therapy",className:"modality-deep-link",children:"Learn how EMDR works, session structure, and FAQs →"})})]}),n.jsxs("div",{className:"card modality-card",children:[n.jsxs("div",{className:"modality-card-top",children:[n.jsx("div",{className:"modality-tag-group",children:n.jsx("span",{className:"badge badge-sage",children:"Youth & Caregiver"})}),n.jsx("h3",{children:"Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)"})]}),n.jsx("p",{className:"modality-p",children:"TF-CBT is an evidence-based treatment model specifically developed for children, adolescents, and their caregivers who have been impacted by traumatic events. It combines cognitive-behavioral principles with trauma-sensitive interventions, empowering youth with practical emotional regulation skills, cognitive processing tools, and caregiver collaboration."})]}),n.jsxs("div",{className:"card modality-card",children:[n.jsxs("div",{className:"modality-card-top",children:[n.jsx("div",{className:"modality-tag-group",children:n.jsx("span",{className:"badge badge-sand",children:"Cognitive & Behavioral"})}),n.jsx("h3",{children:"Cognitive Behavioral Therapy (CBT)"})]}),n.jsx("p",{className:"modality-p",children:"CBT focuses on uncovering the interconnected cycle between our thoughts, emotions, and behaviors. By identifying cognitive distortions (such as catastrophizing or black-and-white thinking), clients learn practical tools to reframe unhelpful patterns, reduce anxiety, and develop healthier coping mechanisms."})]}),n.jsxs("div",{className:"card modality-card",children:[n.jsxs("div",{className:"modality-card-top",children:[n.jsx("div",{className:"modality-tag-group",children:n.jsx("span",{className:"badge badge-forest",children:"Humanistic Foundation"})}),n.jsx("h3",{children:"Person-Centered Therapy (PCT)"})]}),n.jsx("p",{className:"modality-p",children:"Rooted in unconditional positive regard, genuine authenticity, and deep empathy, Person-Centered Therapy creates a secure, non-judgmental environment. Rather than treating you as a passive patient, we collaborate with you as an active partner in your self-directed growth."})]})]})]})}),n.jsx(zt,{title:"Ready to Begin Your Therapy Journey?",subtitle:"Schedule a free consultation to discuss your goals, ask questions about our modalities, and find the right path forward."}),n.jsx("style",{children:`
        .service-areas-grid {
          margin-top: 2rem;
        }

        .service-category-card {
          padding: 2.5rem 2.25rem;
          display: flex;
          flex-direction: column;
        }

        .service-card-header {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .service-icon-box {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .icon-sage { background-color: var(--color-sage-tint); color: var(--color-sage); }
        .icon-terracotta { background-color: var(--color-terracotta-tint); color: var(--color-terracotta); }
        .icon-sand { background-color: var(--color-sand-tint); color: #855e34; }
        .icon-forest { background-color: #2e4437; color: #e5eee8; }

        .service-category-title {
          font-size: 1.35rem;
          color: var(--color-forest);
          margin-top: 0.35rem;
          margin-bottom: 0;
        }

        .service-category-desc {
          font-size: 0.96rem;
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }

        .service-focus-list {
          background-color: var(--color-linen);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          margin-bottom: 2rem;
          margin-top: auto;
        }

        .focus-label {
          font-size: 0.84rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-forest);
          margin-bottom: 0.5rem;
        }

        .service-focus-list ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .service-focus-list li {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          position: relative;
          padding-left: 1.15rem;
        }

        .service-focus-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--color-terracotta);
          font-weight: 700;
        }

        .service-card-footer {
          display: flex;
          justify-content: flex-start;
        }

        /* Modalities Stack */
        .modalities-stack {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          max-width: 960px;
          margin: 0 auto;
        }

        .modality-card {
          padding: 2.25rem 2.5rem;
        }

        .modality-card-top {
          margin-bottom: 1rem;
        }

        .modality-tag-group {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .modality-card-top h3 {
          font-size: 1.35rem;
          color: var(--color-forest);
          margin: 0;
        }

        .modality-p {
          font-size: 0.98rem;
          line-height: 1.65;
          margin-bottom: 1rem;
        }

        .modality-deep-link {
          font-size: 0.94rem;
          font-weight: 600;
          color: var(--color-terracotta);
          display: inline-flex;
          align-items: center;
        }

        .modality-deep-link:hover {
          color: var(--color-terracotta-hover);
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .service-category-card {
            padding: 1.75rem;
          }
          .modality-card {
            padding: 1.75rem;
          }
        }
      `})]}),Vf=()=>{const[o,d]=P.useState(0),c=h=>{d(o===h?null:h)},m=[{q:"Do I have to describe every traumatic detail out loud?",a:"No. One of the most compassionate aspects of EMDR is that you do not need to verbally recount every distressing detail to heal. You hold the memory and associated physical sensations in mind while engaging in bilateral stimulation, allowing your brain's adaptive neurobiology to reprocess the experience safely."},{q:"How does EMDR differ from traditional talk therapy?",a:"Traditional talk therapy primarily engages the conscious, verbal prefrontal cortex through discussion and cognitive insights. EMDR directly targets the deeper emotional and somatic memory networks in the brain where trauma is stored, enabling physiological relief and cognitive reframing often in fewer sessions."},{q:"What is Bilateral Stimulation (BLS)?",a:"Bilateral stimulation refers to alternating sensory input on the left and right sides of the body. This can include tracking a moving visual light or therapist's hand, holding gentle alternating pulsating hand tappers, or listening to alternating tones through headphones."},{q:"Is EMDR suitable for adolescents and teens?",a:"Yes. EMDR is widely utilized and researched for adolescents (approx. age 11+) experiencing trauma, school-related panic, bullying, sports performance blocks, or grief. Sessions are adapted developmentally with age-appropriate resourcing and pacing."},{q:"How many sessions are typically required?",a:"The number of sessions varies depending on whether we are processing a single-incident event (e.g., a car accident) or complex developmental history. We always begin with preparation and nervous system resourcing to ensure you feel secure before processing memories."}];return n.jsxs("div",{className:"emdr-page",children:[n.jsx(Le,{title:"EMDR Therapy | Trauma Reprocessing & Nervous System Healing",description:"Learn about EMDR therapy with certified clinician Jessica Mouzon. Evidence-based trauma reprocessing for adolescents (11+) and adults in North Carolina.",canonicalPath:"/emdr-therapy",schema:{"@context":"https://schema.org","@type":"MedicalWebPage",name:"EMDR Therapy at GroWell Therapy Collective",description:"Evidence-based EMDR psychotherapy for trauma, anxiety, and PTSD.",medicalAudience:"Patients and Caregivers"}}),n.jsx("section",{className:"section section-bg-muted","aria-labelledby":"emdr-title",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"grid-2 align-center",children:[n.jsxs("div",{className:"emdr-hero-text",children:[n.jsx("span",{className:"badge badge-terracotta",children:"Evidence-Based Trauma Care"}),n.jsx("h1",{id:"emdr-title",className:"emdr-main-title",children:"EMDR Therapy: Healing Beyond Words."}),n.jsx("p",{className:"lead",children:"Eye Movement Desensitization and Reprocessing (EMDR) is a proven, evidence-based psychotherapy modality that helps the brain naturally reprocess traumatic memories, emotional distress, and negative core beliefs."}),n.jsx("div",{className:"emdr-hero-actions",children:n.jsxs(B,{to:"/consultation",className:"btn btn-primary btn-lg",onClick:()=>ue("consultation_cta_clicked",{source:"emdr_hero"}),children:[n.jsx("span",{children:"Schedule an EMDR Consultation"}),n.jsx(Ae,{size:18})]})})]}),n.jsx("div",{className:"emdr-hero-visual",children:n.jsx("div",{className:"rounded-image-wrapper",children:n.jsx("img",{src:Et("/images/emdr-pathway.jpg"),alt:"Tranquil stone pathway through sunlit ferns evoking mental clarity and trauma recovery",className:"rounded-feature-img",loading:"eager"})})})]})})}),n.jsx("section",{className:"section","aria-labelledby":"how-it-works-title",children:n.jsxs("div",{className:"container container-narrow",children:[n.jsxs("div",{className:"text-center",style:{marginBottom:"3rem"},children:[n.jsx("span",{className:"badge badge-sage",children:"Neurobiology of Healing"}),n.jsx("h2",{id:"how-it-works-title",className:"section-title",children:"What Is EMDR Therapy?"}),n.jsx("p",{className:"section-subtitle",children:"When a person experiences overwhelming stress or trauma, the nervous system can become overwhelmed, preventing the brain from properly encoding the memory into the past."})]}),n.jsxs("div",{className:"emdr-explanation-body",children:[n.jsx("p",{children:'As a result, sights, sounds, or emotional triggers in the present moment can activate the same intense fear, shame, physical tension, or panic that was felt during the original event. The memory remains "stuck" in its raw, unprocessed state.'}),n.jsxs("p",{children:[n.jsx("strong",{children:"EMDR activates your brain's Adaptive Information Processing (AIP) system."})," By utilizing alternating bilateral stimulation (BLS)—such as guided eye movements, gentle alternating tactile tappers, or auditory tones—EMDR helps the left and right hemispheres of the brain communicate. This allows distressing memories to be desensitized and integrated as resolved past events, rather than active present threats."]}),n.jsxs("div",{className:"emdr-highlights-grid grid-2",style:{marginTop:"2.5rem",marginBottom:"2.5rem"},children:[n.jsxs("div",{className:"card card-tint",children:[n.jsx("h4",{style:{color:"var(--color-forest)",marginBottom:"0.75rem"},children:"Traditional Talk Therapy"}),n.jsxs("ul",{className:"emdr-comparison-list",children:[n.jsx("li",{children:"Focuses primarily on verbal discussion and cognitive insights"}),n.jsx("li",{children:"Can sometimes inadvertently re-trigger emotional overwhelm"}),n.jsx("li",{children:"Relies on conscious prefrontal cortex processing"})]})]}),n.jsxs("div",{className:"card card-sage",children:[n.jsx("h4",{style:{color:"var(--color-forest)",marginBottom:"0.75rem"},children:"EMDR Psychotherapy"}),n.jsxs("ul",{className:"emdr-comparison-list",children:[n.jsx("li",{children:"Does not require sharing every detail out loud"}),n.jsx("li",{children:"Directly engages deeper emotional and somatic memory networks"}),n.jsx("li",{children:'Installs empowering, positive beliefs ("I am safe now", "I can handle this")'})]})]})]})]})]})}),n.jsx("section",{className:"section section-bg-sage","aria-labelledby":"phases-title",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header text-center",children:[n.jsx("span",{className:"badge badge-forest",children:"Structured Protocol"}),n.jsx("h2",{id:"phases-title",className:"section-title",children:"The 8 Phases of EMDR Treatment"}),n.jsx("p",{className:"section-subtitle",children:"EMDR is not a random technique—it is a standardized, carefully paced 8-phase clinical process prioritizing your psychological safety at every step."})]}),n.jsxs("div",{className:"grid-4 phases-grid",children:[n.jsxs("div",{className:"card phase-card",children:[n.jsx("span",{className:"phase-num",children:"01"}),n.jsx("h4",{children:"History & Planning"}),n.jsx("p",{children:"Identifying target memories, life themes, and establishing treatment goals."})]}),n.jsxs("div",{className:"card phase-card",children:[n.jsx("span",{className:"phase-num",children:"02"}),n.jsx("h4",{children:"Preparation & Resourcing"}),n.jsx("p",{children:"Developing internal calm place, grounding tools, and nervous system regulation skills."})]}),n.jsxs("div",{className:"card phase-card",children:[n.jsx("span",{className:"phase-num",children:"03"}),n.jsx("h4",{children:"Assessment"}),n.jsx("p",{children:"Pinpointing specific target images, negative cognitions, emotions, and bodily sensations."})]}),n.jsxs("div",{className:"card phase-card",children:[n.jsx("span",{className:"phase-num",children:"04"}),n.jsx("h4",{children:"Desensitization"}),n.jsx("p",{children:"Applying bilateral stimulation sets while processing the memory until distress neutralizes."})]}),n.jsxs("div",{className:"card phase-card",children:[n.jsx("span",{className:"phase-num",children:"05"}),n.jsx("h4",{children:"Installation"}),n.jsx("p",{children:"Strengthening a positive, adaptive core belief to replace the old negative thought."})]}),n.jsxs("div",{className:"card phase-card",children:[n.jsx("span",{className:"phase-num",children:"06"}),n.jsx("h4",{children:"Body Scan"}),n.jsx("p",{children:"Checking the body for lingering somatic tension or distress connected to the memory."})]}),n.jsxs("div",{className:"card phase-card",children:[n.jsx("span",{className:"phase-num",children:"07"}),n.jsx("h4",{children:"Closure"}),n.jsx("p",{children:"Grounding and stabilizing the client at the end of every active processing session."})]}),n.jsxs("div",{className:"card phase-card",children:[n.jsx("span",{className:"phase-num",children:"08"}),n.jsx("h4",{children:"Re-Evaluation"}),n.jsx("p",{children:"Assessing treatment progress and maintaining positive adaptive integration over time."})]})]})]})}),n.jsx("section",{className:"section","aria-labelledby":"formats-title",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header text-center",children:[n.jsx("span",{className:"badge badge-sand",children:"Session Structure"}),n.jsx("h2",{id:"formats-title",className:"section-title",children:"EMDR Session Options"}),n.jsx("p",{className:"section-subtitle",children:"We offer multiple session formats to accommodate different processing styles and pacing needs."})]}),n.jsxs("div",{className:"grid-3 format-grid",children:[n.jsxs("div",{className:"card format-card",children:[n.jsx("div",{className:"format-icon-wrap",children:n.jsx(Or,{size:28})}),n.jsx("h3",{children:"Standard EMDR Sessions"}),n.jsx("p",{className:"format-duration",children:"50–60 Minutes"}),n.jsx("p",{className:"format-desc",children:"Weekly or bi-weekly ongoing psychotherapy sessions balancing resourcing, cognitive integration, and memory reprocessing sets."}),n.jsx("div",{className:"format-pricing-badge",children:"Contact for Availability & Rates"})]}),n.jsxs("div",{className:"card format-card",children:[n.jsx("div",{className:"format-icon-wrap",children:n.jsx(Of,{size:28})}),n.jsx("h3",{children:"Extended EMDR Sessions"}),n.jsx("p",{className:"format-duration",children:"90 Minutes"}),n.jsx("p",{className:"format-desc",children:"Extended session blocks allowing deeper reprocessing time without feeling rushed during active bilateral stimulation phases."}),n.jsx("div",{className:"format-pricing-badge",children:"Contact for Current Openings"})]}),n.jsxs("div",{className:"card format-card",children:[n.jsx("div",{className:"format-icon-wrap",children:n.jsx(Hp,{size:28})}),n.jsx("h3",{children:"EMDR Intensives"}),n.jsx("p",{className:"format-duration",children:"Multi-Hour / Multi-Day Blocks"}),n.jsx("p",{className:"format-desc",children:"Focused, accelerated therapeutic immersions designed to process targeted traumas in a condensed timeframe without months of weekly appointments."}),n.jsx("div",{className:"format-pricing-badge badge-future",children:"Coming Soon • Inquire for Waitlist"})]})]})]})}),n.jsx("section",{className:"section section-bg-muted","aria-labelledby":"emdr-faq-title",children:n.jsxs("div",{className:"container container-narrow",children:[n.jsxs("div",{className:"section-header text-center",children:[n.jsx("span",{className:"badge badge-forest",children:"Common Questions"}),n.jsx("h2",{id:"emdr-faq-title",className:"section-title",children:"Frequently Asked Questions About EMDR"})]}),n.jsx("div",{className:"faq-accordion-list",children:m.map((h,g)=>{const w=o===g;return n.jsxs("div",{className:`faq-accordion-item ${w?"is-open":""}`,children:[n.jsxs("button",{type:"button",className:"faq-question-btn",onClick:()=>c(g),"aria-expanded":w,children:[n.jsx("span",{children:h.q}),w?n.jsx(Qd,{size:20}):n.jsx(Vd,{size:20})]}),w&&n.jsx("div",{className:"faq-answer-pane animate-fade-in",children:n.jsx("p",{children:h.a})})]},g)})})]})}),n.jsx(zt,{title:"Explore If EMDR Is Right For You",subtitle:"Book a free consultation with EMDR certified clinician Jessica Mouzon to discuss your symptoms, goals, and customized treatment planning."}),n.jsx("style",{children:`
        .emdr-main-title {
          font-size: clamp(2.15rem, 3.8vw, 3.25rem);
          margin-top: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .emdr-hero-actions {
          margin-top: 2rem;
        }

        .emdr-explanation-body p {
          font-size: 1.08rem;
          line-height: 1.75;
          margin-bottom: 1.25rem;
        }

        .emdr-comparison-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-top: 0.75rem;
        }

        .emdr-comparison-list li {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          position: relative;
          padding-left: 1.25rem;
        }

        .emdr-comparison-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--color-forest);
          font-weight: 700;
        }

        /* Phases Grid */
        .phases-grid {
          gap: 1.25rem;
        }

        .phase-card {
          padding: 1.75rem 1.5rem;
          position: relative;
        }

        .phase-num {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 500;
          color: var(--color-sand);
          display: block;
          line-height: 1;
          margin-bottom: 0.65rem;
        }

        .phase-card h4 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: var(--color-forest);
        }

        .phase-card p {
          font-size: 0.86rem;
          line-height: 1.5;
          margin: 0;
        }

        /* Format Grid */
        .format-card {
          padding: 2.5rem 2rem;
          text-align: center;
          align-items: center;
        }

        .format-icon-wrap {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-full);
          background-color: var(--color-sage-tint);
          color: var(--color-sage);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .format-card h3 {
          font-size: 1.3rem;
          margin-bottom: 0.35rem;
        }

        .format-duration {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--color-terracotta);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .format-desc {
          font-size: 0.94rem;
          margin-bottom: 1.5rem;
        }

        .format-pricing-badge {
          margin-top: auto;
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--color-forest);
          background-color: var(--color-sand-tint);
          padding: 0.45rem 1rem;
          border-radius: var(--radius-full);
        }

        .format-pricing-badge.badge-future {
          background-color: var(--color-terracotta-tint);
          color: var(--color-terracotta);
        }

        /* FAQ Accordion */
        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .faq-accordion-item {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color var(--transition-fast);
        }

        .faq-accordion-item.is-open {
          border-color: var(--color-sage);
        }

        .faq-question-btn {
          width: 100%;
          text-align: left;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-forest);
          gap: 1rem;
        }

        .faq-question-btn:hover {
          color: var(--color-terracotta);
        }

        .faq-answer-pane {
          padding: 0 1.5rem 1.5rem;
          font-size: 0.96rem;
          line-height: 1.65;
          color: var(--color-text-muted);
        }
      `})]})},Qf=()=>{const o=[{title:"IEP Support & Goal Analysis",desc:"Comprehensive review of current Individualized Education Programs, analyzing whether annual goals are measurable, appropriate, and adequately supported with specialized instruction."},{title:"504 Plan Navigation & Accommodations",desc:"Guiding parents on designing meaningful classroom, testing, and environmental accommodations for students with ADHD, anxiety, sensory needs, or health conditions."},{title:"Educational Document & Psychoed Review",desc:"Translating complex psychoeducational testing, psychological evaluations, and school progress reports into plain English with actionable takeaways."},{title:"School Meeting Preparation & Strategy",desc:"Collaborative pre-meeting sessions to define your family's priorities, prepare a concise parent statement, and construct a targeted meeting agenda."},{title:"Meeting Attendance & Support",desc:"Joining parents at IEP, 504, or Student Support Team (SST) meetings as an experienced educational specialist to ensure a collaborative, focused dialogue."},{title:"Student Self-Advocacy & Coaching",desc:"Equipping adolescents and teens with the confidence and self-awareness to understand their learning profile and voice their accommodation needs directly."}],d=[{num:"01",title:"Initial Consultation",desc:"We discuss your child's educational background, current challenges, and specific school concerns."},{num:"02",title:"Understand the Concern",desc:"We evaluate the intersection of your student's emotional well-being, cognitive style, and classroom dynamics."},{num:"03",title:"Review Available Records",desc:"We analyze evaluations, report cards, prior IEP/504 documents, and communication logs."},{num:"04",title:"Develop a Strategy",desc:"We outline concrete accommodations, measurable goals, and a collaborative communication plan."},{num:"05",title:"Support Next Steps",desc:"We assist through meeting attendance, implementation check-ins, and ongoing parent coaching."}];return n.jsxs("div",{className:"advocacy-page",children:[n.jsx(Le,{title:"Educational & Student Advocacy | IEP & 504 Navigation",description:"Exceptional Children's K-12 educator and mental health clinician Jessica Mouzon helps parents navigate IEPs, 504 plans, and school meetings with confidence.",canonicalPath:"/educational-advocacy"}),n.jsx("section",{className:"section section-bg-muted","aria-labelledby":"advocacy-hero-title",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"grid-2 align-center",children:[n.jsxs("div",{className:"advocacy-hero-text",children:[n.jsx("span",{className:"badge badge-terracotta",children:"Educational Consultation"}),n.jsx("h1",{id:"advocacy-hero-title",className:"advocacy-main-title",children:"Helping Families Navigate Educational Challenges With Confidence."}),n.jsx("p",{className:"lead",children:"Jessica Mouzon combines an Exceptional Children’s General Curriculum K–12 Educator License with over a decade of mental health counseling to help parents advocate effectively for their children."}),n.jsxs("div",{className:"notice-box notice-warning",style:{margin:"1.5rem 0"},children:[n.jsx(ho,{size:22,className:"notice-icon"}),n.jsx("div",{className:"notice-content",children:n.jsxs("p",{children:[n.jsx("strong",{children:"Important Legal Notice:"})," GroWell Therapy Collective provides educational consultation and parent advocacy services. These services do not constitute legal advice or formal legal representation."]})})]}),n.jsx("div",{className:"advocacy-hero-actions",children:n.jsxs(B,{to:"/consultation",className:"btn btn-primary btn-lg",onClick:()=>ue("consultation_cta_clicked",{source:"advocacy_hero"}),children:[n.jsx("span",{children:"Book an Advocacy Consultation"}),n.jsx(Ae,{size:18})]})})]}),n.jsx("div",{className:"advocacy-hero-visual",children:n.jsx("div",{className:"rounded-image-wrapper",children:n.jsx("img",{src:Et("/images/educational-advocacy.jpg"),alt:"An organized, welcoming educational consultation workspace with an open notebook, planner, and warm lighting",className:"rounded-feature-img",loading:"eager"})})})]})})}),n.jsx("section",{className:"section","aria-labelledby":"why-dual-heading",children:n.jsxs("div",{className:"container container-narrow",children:[n.jsxs("div",{className:"text-center",style:{marginBottom:"3rem"},children:[n.jsx("span",{className:"badge badge-sage",children:"The Dual Perspective"}),n.jsx("h2",{id:"why-dual-heading",className:"section-title",children:"Bridging Mental Health & Special Education"}),n.jsx("p",{className:"section-subtitle",children:"Most therapists do not hold K–12 special education licenses, and most school advocates lack clinical mental health training. GroWell sits at the unique intersection of both."})]}),n.jsxs("div",{className:"dual-perspective-cards grid-2",children:[n.jsxs("div",{className:"card card-tint",children:[n.jsx("div",{className:"dual-card-icon",children:n.jsx(mo,{size:28,className:"icon-terracotta"})}),n.jsx("h3",{style:{color:"var(--color-forest)",marginBottom:"0.75rem"},children:"Inside the School System"}),n.jsx("p",{children:"As a licensed Exceptional Children's educator, Jessica understands school district hierarchies, IDEA legal timelines, accommodation feasibility, and how educators assess progress behind closed doors."})]}),n.jsxs("div",{className:"card card-sage",children:[n.jsx("div",{className:"dual-card-icon",children:n.jsx(nf,{size:28,className:"icon-sage"})}),n.jsx("h3",{style:{color:"var(--color-forest)",marginBottom:"0.75rem"},children:"Inside the Nervous System"}),n.jsx("p",{children:"As a mental health counselor, Jessica understands how anxiety, trauma, sensory overload, ADHD, and emotional dysregulation directly affect executive functioning, classroom participation, and test performance."})]})]})]})}),n.jsx("section",{className:"section section-bg-sage","aria-labelledby":"services-list-title",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header text-center",children:[n.jsx("span",{className:"badge badge-forest",children:"Service Offerings"}),n.jsx("h2",{id:"services-list-title",className:"section-title",children:"How We Can Support Your Family"}),n.jsx("p",{className:"section-subtitle",children:"Customized support packages tailored to where your family is in the educational planning process."})]}),n.jsx("div",{className:"grid-3 services-cards-grid",children:o.map((c,m)=>n.jsxs("div",{className:"card card-hover advocacy-item-card",children:[n.jsxs("div",{className:"advocacy-item-num",children:["0",m+1]}),n.jsx("h3",{className:"advocacy-item-title",children:c.title}),n.jsx("p",{className:"advocacy-item-desc",children:c.desc})]},m))})]})}),n.jsx("section",{className:"section","aria-labelledby":"process-title",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header text-center",children:[n.jsx("span",{className:"badge badge-sand",children:"Step-by-Step"}),n.jsx("h2",{id:"process-title",className:"section-title",children:"Our 5-Step Advocacy Process"}),n.jsx("p",{className:"section-subtitle",children:"A structured, transparent pathway designed to replace confusion with clarity and teamwork."})]}),n.jsx("div",{className:"process-timeline",children:d.map((c,m)=>n.jsxs("div",{className:"timeline-step",children:[n.jsx("div",{className:"timeline-badge",children:c.num}),n.jsxs("div",{className:"timeline-content card",children:[n.jsx("h4",{children:c.title}),n.jsx("p",{children:c.desc})]})]},m))})]})}),n.jsx(zt,{title:"Need Guidance Navigating School Support?",subtitle:"Book a consultation to discuss your child's educational needs, review available options, and build a collaborative plan.",badge:"Educational Advocacy Consultation"}),n.jsx("style",{children:`
        .advocacy-main-title {
          font-size: clamp(2.15rem, 3.8vw, 3.25rem);
          margin-top: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .advocacy-hero-actions {
          margin-top: 1.5rem;
        }

        .dual-card-icon {
          margin-bottom: 1rem;
        }

        .advocacy-item-card {
          padding: 2.25rem 2rem;
        }

        .advocacy-item-num {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-sand);
          margin-bottom: 0.75rem;
        }

        .advocacy-item-title {
          font-size: 1.2rem;
          color: var(--color-forest);
          margin-bottom: 0.75rem;
        }

        .advocacy-item-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          margin: 0;
        }

        /* Timeline */
        .process-timeline {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          max-width: 820px;
          margin: 0 auto;
        }

        .timeline-step {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .timeline-badge {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-full);
          background-color: var(--color-forest);
          color: #ffffff;
          font-family: var(--font-serif);
          font-size: 1.2rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 0.5rem;
        }

        .timeline-content {
          flex: 1;
          padding: 1.5rem 1.75rem;
        }

        .timeline-content h4 {
          font-size: 1.15rem;
          color: var(--color-forest);
          margin-bottom: 0.35rem;
        }

        .timeline-content p {
          font-size: 0.94rem;
          line-height: 1.55;
          margin: 0;
        }

        @media (max-width: 640px) {
          .timeline-step {
            flex-direction: column;
            gap: 0.75rem;
          }
          .timeline-badge {
            width: 36px;
            height: 36px;
            font-size: 1rem;
          }
        }
      `})]})},Yf=()=>n.jsxs("div",{className:"approach-page",children:[n.jsx(Le,{title:"Our Approach | Whole-Person & Integrative Philosophy",description:"Discover how GroWell Therapy Collective integrates evidence-based clinical psychotherapy with complementary experiential wellness to support the whole person.",canonicalPath:"/our-approach"}),n.jsx("section",{className:"section section-bg-muted","aria-labelledby":"approach-hero-title",children:n.jsxs("div",{className:"container container-narrow text-center",children:[n.jsx("span",{className:"badge badge-sage",children:"Our Philosophy"}),n.jsx("h1",{id:"approach-hero-title",className:"approach-hero-title",children:"You Are More Than a Diagnosis."}),n.jsx("p",{className:"lead",children:"At GroWell Therapy Collective, we see the whole human being. True healing, self-awareness, and emotional growth happen when we honor the intricate connections between your mind, body, environment, and history."})]})}),n.jsx("section",{className:"section","aria-labelledby":"ecosystem-heading",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"grid-2 align-center",children:[n.jsxs("div",{className:"ecosystem-text",children:[n.jsx("span",{className:"badge badge-terracotta",children:"Holistic Framework"}),n.jsx("h2",{id:"ecosystem-heading",className:"section-title",children:"Mental Health Exists Within an Ecosystem."}),n.jsx("p",{children:"Symptoms like anxiety, chronic fatigue, emotional shutdown, or difficulty focusing rarely occur in a vacuum. Your mental well-being is constantly shaped by a dynamic web of factors:"}),n.jsxs("div",{className:"intersect-tags-grid",children:[n.jsx("span",{className:"intersect-tag",children:"Family & Attachment"}),n.jsx("span",{className:"intersect-tag",children:"School & Classroom Pressures"}),n.jsx("span",{className:"intersect-tag",children:"Work & Career Stress"}),n.jsx("span",{className:"intersect-tag",children:"Nervous System & Trauma"}),n.jsx("span",{className:"intersect-tag",children:"Learning & Neurodivergence"}),n.jsx("span",{className:"intersect-tag",children:"Identity & Values"}),n.jsx("span",{className:"intersect-tag",children:"Physical Health & Rest"}),n.jsx("span",{className:"intersect-tag",children:"Major Life Transitions"})]}),n.jsx("p",{style:{marginTop:"1.5rem"},children:"Instead of simply trying to suppress a single symptom, we work together to understand what your mind and nervous system are communicating, helping you cultivate sustainable internal resources."})]}),n.jsx("div",{className:"ecosystem-visual",children:n.jsx("div",{className:"rounded-image-wrapper",children:n.jsx("img",{src:Et("/images/whole-person-creative.jpg"),alt:"Mindful journaling, botanicals, and watercolor paints reflecting whole-person healing",className:"rounded-feature-img",loading:"lazy"})})})]})})}),n.jsx("section",{className:"section section-bg-sage","aria-labelledby":"framework-heading",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header text-center",children:[n.jsx("span",{className:"badge badge-forest",children:"Integrative Balance"}),n.jsx("h2",{id:"framework-heading",className:"section-title",children:"Two Pillars of Care"}),n.jsx("p",{className:"section-subtitle",children:"We maintain clear, transparent distinctions between evidence-based psychotherapy and complementary wellness practices."})]}),n.jsxs("div",{className:"grid-2 pillars-framework-grid",children:[n.jsxs("div",{className:"card framework-pillar-card",children:[n.jsx("div",{className:"framework-badge-row",children:n.jsx("span",{className:"badge badge-forest",children:"Category 1"})}),n.jsx("h3",{className:"pillar-header-title",children:"Evidence-Based & Clinical Approaches"}),n.jsx("p",{className:"pillar-header-sub",children:"Grounded in empirical clinical research, psychology, and neuroscience."}),n.jsxs("div",{className:"framework-items-stack",children:[n.jsxs("div",{className:"framework-item",children:[n.jsx("h4",{children:"Eye Movement Desensitization & Reprocessing (EMDR)"}),n.jsx("p",{children:"Certified trauma psychotherapy using bilateral stimulation to facilitate neural memory reprocessing."})]}),n.jsxs("div",{className:"framework-item",children:[n.jsx("h4",{children:"Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)"}),n.jsx("p",{children:"Structured, research-backed model empowering youth and caregivers to process trauma and build emotional regulation."})]}),n.jsxs("div",{className:"framework-item",children:[n.jsx("h4",{children:"Cognitive Behavioral Therapy (CBT)"}),n.jsx("p",{children:"Identifying and reframing automatic cognitive distortions, behavioral avoidance, and unhelpful emotional loops."})]}),n.jsxs("div",{className:"framework-item",children:[n.jsx("h4",{children:"Person-Centered Therapy (PCT)"}),n.jsx("p",{children:"Humanistic collaboration fostering psychological safety, self-trust, and internal empowerment."})]})]})]}),n.jsxs("div",{className:"card framework-pillar-card",children:[n.jsx("div",{className:"framework-badge-row",children:n.jsx("span",{className:"badge badge-sand",children:"Category 2"})}),n.jsx("h3",{className:"pillar-header-title",children:"Complementary & Experiential Support"}),n.jsx("p",{className:"pillar-header-sub",children:"Optional sensory and creative modalities integrated collaboratively when appropriate."}),n.jsxs("div",{className:"framework-items-stack",children:[n.jsxs("div",{className:"framework-item",children:[n.jsx("h4",{children:"Reiki Level II Training"}),n.jsx("p",{children:"Gentle complementary energy wellness practice focused on relaxation and somatic stress reduction."})]}),n.jsxs("div",{className:"framework-item",children:[n.jsx("h4",{children:"Creative & Art-Informed Expression"}),n.jsx("p",{children:"Sketching, collage, and journaling to explore feelings and themes when verbal articulation feels challenging."})]}),n.jsxs("div",{className:"framework-item",children:[n.jsx("h4",{children:"Nature & Botanical Metaphors"}),n.jsx("p",{children:"Drawing on grounding outdoor elements and plant growth cycles to foster nervous system calm."})]}),n.jsxs("div",{className:"framework-item",children:[n.jsx("h4",{children:"Music & Sound Reflection"}),n.jsx("p",{children:"Utilizing music listening, playlists, and rhythm to access emotional expression and mood regulation."})]}),n.jsxs("div",{className:"framework-item",children:[n.jsx("h4",{children:"Mindfulness & Breathwork"}),n.jsx("p",{children:"Somatic grounding and nervous system calming practices for daily stress reduction."})]})]})]})]}),n.jsxs("div",{className:"notice-box notice-warning",style:{marginTop:"2.5rem"},children:[n.jsx(Zi,{size:22,className:"notice-icon"}),n.jsx("div",{className:"notice-content",children:n.jsxs("p",{children:[n.jsx("strong",{children:"Clinical & Complementary Disclaimer:"})," Complementary approaches (such as Reiki Level II, art-informed activities, and nature metaphors) are offered strictly as optional wellness practices for relaxation and self-reflection. They are not presented as equivalent in evidence base to clinical psychotherapy modalities (EMDR, CBT, TF-CBT) nor as replacements for medically necessary psychiatric treatment. Incorporating any experiential medium is entirely voluntary and tailored to client consent within a broader clinical treatment plan."]})})]})]})}),n.jsx(zt,{title:"Experience a Whole-Person Approach",subtitle:"Book a consultation to talk with Jessica Mouzon about your goals and design a collaborative path toward growth."}),n.jsx("style",{children:`
        .approach-hero-title {
          font-size: clamp(2.35rem, 4.2vw, 3.65rem);
          margin-top: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .intersect-tags-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-top: 1.25rem;
        }

        .intersect-tag {
          background-color: var(--color-sand-tint);
          border: 1px solid #dfd2c0;
          color: var(--color-forest);
          font-size: 0.88rem;
          font-weight: 600;
          padding: 0.45rem 0.95rem;
          border-radius: var(--radius-full);
        }

        /* Framework Pillar Cards */
        .framework-pillar-card {
          padding: 2.75rem 2.25rem;
        }

        .framework-badge-row {
          margin-bottom: 0.85rem;
        }

        .pillar-header-title {
          font-size: 1.35rem;
          color: var(--color-forest);
          margin-bottom: 0.35rem;
        }

        .pillar-header-sub {
          font-size: 0.92rem;
          color: var(--color-text-light);
          margin-bottom: 1.75rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-border);
        }

        .framework-items-stack {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .framework-item h4 {
          font-size: 1.05rem;
          color: var(--color-forest);
          margin-bottom: 0.25rem;
        }

        .framework-item p {
          font-size: 0.9rem;
          line-height: 1.55;
          margin: 0;
        }

        @media (max-width: 768px) {
          .framework-pillar-card {
            padding: 2rem 1.5rem;
          }
        }
      `})]}),po=({show:o,type:d="success",title:c,message:m,onClose:h,duration:g=7e3})=>(P.useEffect(()=>{if(o&&g>0){const w=setTimeout(()=>{h()},g);return()=>clearTimeout(w)}},[o,g,h]),o?n.jsxs("div",{className:`toast-notification toast-${d}`,role:"alert","aria-live":"assertive",children:[n.jsx("div",{className:"toast-icon-wrap",children:d==="success"?n.jsx(Ue,{size:22,className:"toast-icon-success"}):n.jsx(na,{size:22,className:"toast-icon-warning"})}),n.jsxs("div",{className:"toast-content",children:[n.jsx("h4",{className:"toast-title",children:c}),n.jsx("p",{className:"toast-message",children:m})]}),n.jsx("button",{type:"button",className:"toast-close-btn",onClick:h,"aria-label":"Close notification",children:n.jsx(ru,{size:18})}),n.jsx("style",{children:`
        .toast-notification {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          max-width: 440px;
          background-color: #ffffff;
          border-radius: var(--radius-md);
          box-shadow: 0 12px 32px rgba(32, 51, 40, 0.18);
          padding: 1.25rem;
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          z-index: 9999;
          border: 1px solid var(--color-border);
          animation: toastSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes toastSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .toast-success {
          border-left: 4px solid var(--color-sage);
        }

        .toast-warning {
          border-left: 4px solid var(--color-amber-gold);
        }

        .toast-icon-wrap {
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .toast-icon-success {
          color: var(--color-sage);
        }

        .toast-icon-warning {
          color: var(--color-amber-gold);
        }

        .toast-content {
          flex: 1;
        }

        .toast-title {
          font-size: 0.96rem;
          font-weight: 600;
          color: var(--color-forest);
          margin-bottom: 0.25rem;
        }

        .toast-message {
          font-size: 0.86rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin: 0;
        }

        .toast-close-btn {
          color: var(--color-text-light);
          padding: 0.2rem;
          border-radius: 4px;
          transition: color var(--transition-fast);
        }

        .toast-close-btn:hover {
          color: var(--color-forest);
        }

        @media (max-width: 640px) {
          .toast-notification {
            left: 1rem;
            right: 1rem;
            bottom: 1rem;
            max-width: none;
          }
        }
      `})]}):null),Kf=()=>{const[o,d]=P.useState({firstName:"",lastName:"",email:"",phone:"",preferredContactMethod:"Email",clientRole:"Adult",serviceInterest:"Therapy",consultationFormat:"Phone",generalAvailability:"Flexible",briefGoal:"",privacyConfirmed:!1}),[c,m]=P.useState(!1),[h,g]=P.useState(!1),[w,b]=P.useState(!1),[N,T]=P.useState(""),k=M=>{const{name:G,value:J,type:q}=M.target;if(q==="checkbox"){const I=M.target.checked;d(te=>({...te,[G]:I}))}else d(I=>({...I,[G]:J}))},C=M=>{if(M.preventDefault(),T(""),!o.firstName.trim()||!o.lastName.trim()||!o.email.trim()||!o.phone.trim()){T("Please fill in all required contact fields.");return}if(!o.privacyConfirmed){T("Please confirm that you have not included sensitive medical or health details.");return}m(!0),ue("consultation_started",{service:o.serviceInterest,format:o.consultationFormat}),setTimeout(()=>{m(!1),g(!0),b(!0),ue("consultation_submitted",{service:o.serviceInterest,role:o.clientRole,format:o.consultationFormat})},800)};return n.jsxs("div",{className:"consultation-page",children:[n.jsx(Le,{title:"Start With a Conversation | Book a Free Consultation",description:"Schedule a complimentary initial consultation with Jessica Mouzon to discuss therapy or educational advocacy support. Privacy-safe and confidential.",canonicalPath:"/consultation"}),n.jsx("section",{className:"section section-bg-muted",style:{paddingBottom:"2.5rem"},children:n.jsxs("div",{className:"container container-narrow text-center",children:[n.jsx("span",{className:"badge badge-terracotta",children:"Complimentary Consultation"}),n.jsx("h1",{className:"consultation-title",children:"Start With a Conversation."}),n.jsx("p",{className:"lead",children:"Taking the first step toward therapy or educational advocacy can feel significant. We offer a free, 15-minute consultation to answer your questions, understand your needs, and explore whether GroWell is the right fit."})]})}),n.jsx("section",{className:"section",style:{paddingTop:"1.5rem"},children:n.jsxs("div",{className:"container container-narrow",children:[n.jsxs("div",{className:"card card-tint what-to-expect-card",children:[n.jsx("h3",{className:"expect-title",children:"What Happens During the Consultation?"}),n.jsxs("div",{className:"grid-3 expect-grid",children:[n.jsxs("div",{className:"expect-item",children:[n.jsx(Ue,{size:18,className:"expect-icon"}),n.jsx("span",{children:"Discuss what kind of support you are looking for"})]}),n.jsxs("div",{className:"expect-item",children:[n.jsx(Ue,{size:18,className:"expect-icon"}),n.jsx("span",{children:"Explore scheduling & hybrid availability"})]}),n.jsxs("div",{className:"expect-item",children:[n.jsx(Ue,{size:18,className:"expect-icon"}),n.jsx("span",{children:"Review fee structures & determine next steps"})]})]})]}),n.jsx("div",{className:"consultation-form-wrapper card",children:h?n.jsxs("div",{className:"submission-success-view text-center animate-fade-in",children:[n.jsx("div",{className:"success-icon-wrap",children:n.jsx(Ue,{size:48,className:"success-check-icon"})}),n.jsxs("h2",{children:["Thank You, ",o.firstName,"!"]}),n.jsxs("p",{className:"lead",style:{marginTop:"0.75rem",marginBottom:"1.5rem"},children:["Your consultation request has been received. Jessica Mouzon will review your message and reach out via your preferred method (",o.preferredContactMethod,") within 1–2 business days."]}),n.jsxs("div",{className:"success-summary-box",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Selected Focus:"})," ",o.serviceInterest]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Format:"})," ",o.consultationFormat," Consultation"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Contact:"})," ",o.email," • ",o.phone]})]}),n.jsx("div",{className:"success-actions",children:n.jsx("button",{type:"button",className:"btn btn-outline",onClick:()=>{g(!1),d({firstName:"",lastName:"",email:"",phone:"",preferredContactMethod:"Email",clientRole:"Adult",serviceInterest:"Therapy",consultationFormat:"Phone",generalAvailability:"Flexible",briefGoal:"",privacyConfirmed:!1})},children:"Submit Another Request"})})]}):n.jsxs("form",{onSubmit:C,noValidate:!0,children:[n.jsxs("div",{className:"notice-box notice-warning",children:[n.jsx(ea,{size:22,className:"notice-icon"}),n.jsx("div",{className:"notice-content",children:n.jsxs("p",{children:[n.jsx("strong",{children:"Privacy Notice:"})," This public form is for initial consultation scheduling only. ",n.jsx("strong",{children:"Do not submit medical records, detailed health history, diagnoses, medication lists, insurance IDs, or school records through this form."})," Clinical details will be gathered later through our encrypted, HIPAA-compliant patient portal."]})})]}),N&&n.jsxs("div",{className:"notice-box notice-danger animate-fade-in",children:[n.jsx(na,{size:20,className:"notice-icon"}),n.jsx("div",{className:"notice-content",children:n.jsx("p",{children:N})})]}),n.jsx("h3",{className:"form-section-title",children:"1. Your Contact Information"}),n.jsxs("div",{className:"grid-2",children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"firstName",children:["First Name ",n.jsx("span",{className:"required-mark",children:"*"})]}),n.jsx("input",{type:"text",id:"firstName",name:"firstName",className:"form-control",placeholder:"e.g. Sarah",value:o.firstName,onChange:k,required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"lastName",children:["Last Name ",n.jsx("span",{className:"required-mark",children:"*"})]}),n.jsx("input",{type:"text",id:"lastName",name:"lastName",className:"form-control",placeholder:"e.g. Jenkins",value:o.lastName,onChange:k,required:!0})]})]}),n.jsxs("div",{className:"grid-2",children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"email",children:["Email Address ",n.jsx("span",{className:"required-mark",children:"*"})]}),n.jsx("input",{type:"email",id:"email",name:"email",className:"form-control",placeholder:"name@example.com",value:o.email,onChange:k,required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"phone",children:["Phone Number ",n.jsx("span",{className:"required-mark",children:"*"})]}),n.jsx("input",{type:"tel",id:"phone",name:"phone",className:"form-control",placeholder:"(555) 000-0000",value:o.phone,onChange:k,required:!0})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Preferred Contact Method"}),n.jsx("div",{className:"pill-grid",children:["Email","Phone Call","Text Message"].map(M=>n.jsxs("label",{className:"pill-option",children:[n.jsx("input",{type:"radio",name:"preferredContactMethod",value:M,checked:o.preferredContactMethod===M,onChange:k}),n.jsx("span",{className:"pill-label",children:M})]},M))})]}),n.jsxs("div",{className:"form-group",style:{marginTop:"1.5rem"},children:[n.jsx("label",{className:"form-label",children:"I am seeking support as:"}),n.jsx("div",{className:"pill-grid",children:[{val:"Adult",label:"An Adult for Myself"},{val:"Parent",label:"A Parent / Guardian for My Child (11+)"},{val:"Family",label:"A Family Together"},{val:"Organization",label:"A School or Organization"}].map(M=>n.jsxs("label",{className:"pill-option",children:[n.jsx("input",{type:"radio",name:"clientRole",value:M.val,checked:o.clientRole===M.val,onChange:k}),n.jsx("span",{className:"pill-label",children:M.label})]},M.val))})]}),n.jsx("hr",{className:"form-divider"}),n.jsx("h3",{className:"form-section-title",children:"2. Service of Interest"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"What general area would you like to discuss?"}),n.jsx("div",{className:"pill-grid",children:["Therapy (General)","Trauma / EMDR Therapy","Educational & IEP Advocacy","Adolescent / Teen Therapy","Parent Consultation","Workshops / Organization Training","Not Sure Yet"].map(M=>n.jsxs("label",{className:"pill-option",children:[n.jsx("input",{type:"radio",name:"serviceInterest",value:M,checked:o.serviceInterest===M,onChange:k}),n.jsx("span",{className:"pill-label",children:M})]},M))})]}),n.jsxs("div",{className:"grid-2",style:{marginTop:"1.25rem"},children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Preferred Consultation Format"}),n.jsxs("select",{name:"consultationFormat",className:"form-control",value:o.consultationFormat,onChange:k,children:[n.jsx("option",{value:"Phone",children:"Phone Call (15 min)"}),n.jsx("option",{value:"Video",children:"Secure Video Telehealth (15 min)"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Best Time of Day for a Call"}),n.jsxs("select",{name:"generalAvailability",className:"form-control",value:o.generalAvailability,onChange:k,children:[n.jsx("option",{value:"Flexible",children:"Flexible / Any Time"}),n.jsx("option",{value:"Mornings",children:"Mornings (9am – 12pm)"}),n.jsx("option",{value:"Afternoons",children:"Afternoons (12pm – 4pm)"}),n.jsx("option",{value:"Late Afternoons",children:"Late Afternoons (4pm – 6pm)"})]})]})]}),n.jsxs("div",{className:"form-group",style:{marginTop:"1.25rem"},children:[n.jsx("label",{className:"form-label",htmlFor:"briefGoal",children:"What would you like help with? (Optional)"}),n.jsx("textarea",{id:"briefGoal",name:"briefGoal",className:"form-control",placeholder:"Brief high-level description (e.g., 'Looking for EMDR therapy for anxiety' or 'Seeking help preparing for an upcoming IEP meeting'). Please do NOT include medical records or sensitive health details.",rows:3,value:o.briefGoal,onChange:k}),n.jsx("span",{className:"form-helper",children:"Keep descriptions high-level. Detailed clinical background is collected during confidential intake."})]}),n.jsx("div",{className:"privacy-checkbox-row",style:{marginTop:"1.75rem"},children:n.jsxs("label",{className:"checkbox-label-container",children:[n.jsx("input",{type:"checkbox",name:"privacyConfirmed",checked:o.privacyConfirmed,onChange:k,required:!0}),n.jsxs("span",{className:"checkbox-text",children:["I understand that this form is for general consultation scheduling and I have not submitted confidential medical records, diagnostic histories, or protected health information (PHI). ",n.jsx("span",{className:"required-mark",children:"*"})]})]})}),n.jsxs("div",{className:"form-submit-row",style:{marginTop:"2rem"},children:[n.jsx("button",{type:"submit",className:"btn btn-primary btn-lg full-width-btn",disabled:c,children:c?n.jsx("span",{children:"Submitting Request..."}):n.jsxs(n.Fragment,{children:[n.jsx("span",{children:"Submit Consultation Request"}),n.jsx(jf,{size:18})]})}),n.jsxs("p",{className:"privacy-assurance-note",children:[n.jsx(ta,{size:16,className:"shield-icon"}),n.jsx("span",{children:"Your contact information is kept strictly confidential and will never be shared."})]})]})]})})]})}),n.jsx(po,{show:w,type:"success",title:"Consultation Request Received",message:"Thank you for reaching out to GroWell Therapy Collective. We will contact you within 1–2 business days.",onClose:()=>b(!1)}),n.jsx("style",{children:`
        .consultation-title {
          font-size: clamp(2.35rem, 4.2vw, 3.65rem);
          margin-top: 0.75rem;
          margin-bottom: 1rem;
        }

        .what-to-expect-card {
          margin-bottom: 2rem;
          padding: 2rem;
        }

        .expect-title {
          font-size: 1.15rem;
          color: var(--color-forest);
          margin-bottom: 1.25rem;
        }

        .expect-grid {
          gap: 1.25rem;
        }

        .expect-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.9rem;
          color: var(--color-forest-light);
          font-weight: 500;
        }

        .expect-icon {
          color: var(--color-sage);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .consultation-form-wrapper {
          padding: 3rem 2.5rem;
        }

        .form-section-title {
          font-size: 1.25rem;
          color: var(--color-forest);
          margin-bottom: 1.25rem;
        }

        .form-divider {
          border: 0;
          border-top: 1px solid var(--color-border);
          margin: 2.25rem 0;
        }

        .checkbox-label-container {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          cursor: pointer;
        }

        .checkbox-label-container input {
          margin-top: 0.25rem;
          width: 18px;
          height: 18px;
          accent-color: var(--color-terracotta);
        }

        .checkbox-text {
          font-size: 0.88rem;
          line-height: 1.5;
          color: var(--color-text-main);
        }

        .full-width-btn {
          width: 100%;
          justify-content: center;
        }

        .privacy-assurance-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: var(--color-text-light);
          margin-top: 1rem;
          text-align: center;
        }

        .shield-icon {
          color: var(--color-sage);
        }

        /* Success View */
        .submission-success-view {
          padding: 2rem 1rem;
        }

        .success-icon-wrap {
          width: 80px;
          height: 80px;
          border-radius: var(--radius-full);
          background-color: var(--color-sage-tint);
          color: var(--color-sage);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .success-summary-box {
          background-color: var(--color-linen);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          max-width: 480px;
          margin: 0 auto 2rem;
          text-align: left;
        }

        .success-summary-box p {
          margin: 0.4rem 0;
          font-size: 0.92rem;
        }

        @media (max-width: 768px) {
          .consultation-form-wrapper {
            padding: 2rem 1.5rem;
          }
          .expect-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Jf=()=>{const o=!!K.clientPortalUrl,d=()=>{ue("client_portal_clicked",{destination:"external_portal"})};return n.jsxs("div",{className:"client-portal-page",children:[n.jsx(Le,{title:"Client Portal Access | Existing Clients",description:"Secure portal gateway for existing GroWell clients to access appointments, telehealth, intake forms, billing, and clinical communication.",canonicalPath:"/client-portal"}),n.jsx("section",{className:"section section-bg-muted",style:{minHeight:"80vh",display:"flex",alignItems:"center"},children:n.jsx("div",{className:"container container-narrow",children:n.jsxs("div",{className:"portal-card card animate-fade-in",children:[n.jsxs("div",{className:"portal-header text-center",children:[n.jsx("div",{className:"portal-lock-icon",children:n.jsx(ea,{size:32})}),n.jsx("span",{className:"badge badge-forest",children:"Secure Client Gateway"}),n.jsx("h1",{className:"portal-title",children:"GroWell Client Portal"}),n.jsx("p",{className:"portal-lead",children:"Existing GroWell clients can access secure scheduling, intake paperwork, billing statements, telehealth sessions, and HIPAA-compliant messaging through our centralized client platform."})]}),n.jsxs("div",{className:"portal-features-grid grid-2",children:[n.jsxs("div",{className:"portal-feature-item",children:[n.jsx(Pp,{size:20,className:"pf-icon"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Appointment Management"}),n.jsx("p",{children:"View upcoming appointments, request reschedules, and check availability."})]})]}),n.jsxs("div",{className:"portal-feature-item",children:[n.jsx(Lf,{size:20,className:"pf-icon"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Telehealth Access"}),n.jsx("p",{children:"Join secure, encrypted 1-on-1 video therapy sessions directly from your device."})]})]}),n.jsxs("div",{className:"portal-feature-item",children:[n.jsx(Kd,{size:20,className:"pf-icon"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Secure Intake & Records"}),n.jsx("p",{children:"Complete confidential clinical forms and access treatment summaries."})]})]}),n.jsxs("div",{className:"portal-feature-item",children:[n.jsx(Yd,{size:20,className:"pf-icon"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Billing & Superbills"}),n.jsx("p",{children:"Pay invoices, manage cards on file, and download superbills for insurance."})]})]})]}),n.jsx("div",{className:"portal-action-box text-center",children:o?n.jsxs("div",{children:[n.jsxs("a",{href:K.clientPortalUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary btn-lg portal-launch-btn",onClick:d,children:[n.jsx("span",{children:"Access Secure Client Portal"}),n.jsx(Dp,{size:18})]}),n.jsxs("p",{className:"portal-security-tag",children:[n.jsx(ta,{size:16}),n.jsx("span",{children:"256-Bit SSL Encrypted • HIPAA-Compliant External System"})]})]}):n.jsxs("div",{className:"portal-placeholder-box",children:[n.jsx(Zi,{size:24,className:"placeholder-alert-icon"}),n.jsx("h3",{children:"Client Portal Access Available Soon"}),n.jsx("p",{children:"Our integrated electronic health record (EHR) and client portal are currently being configured for launch. Current clients needing to schedule, cancel, or request records may reach out directly:"}),n.jsx("div",{className:"portal-direct-contact",children:n.jsx(B,{to:"/contact",className:"btn btn-forest btn-sm",children:"Contact Jessica Mouzon →"})})]})}),n.jsx("div",{className:"portal-footer-note text-center",children:n.jsxs("p",{children:["Not an existing client yet?"," ",n.jsx(B,{to:"/consultation",className:"consult-inline-link",children:"Book an initial consultation to get started →"})]})})]})})}),n.jsx("style",{children:`
        .portal-card {
          padding: 3.5rem 3rem;
          box-shadow: var(--shadow-lg);
          border-radius: var(--radius-xl);
          border: 1.5px solid var(--color-border);
        }

        .portal-lock-icon {
          width: 68px;
          height: 68px;
          border-radius: var(--radius-full);
          background-color: var(--color-sage-tint);
          color: var(--color-sage);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem;
        }

        .portal-title {
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          margin-top: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .portal-lead {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.65;
          max-width: 650px;
          margin: 0 auto 2.5rem;
        }

        .portal-features-grid {
          background-color: var(--color-linen);
          border-radius: var(--radius-lg);
          padding: 2rem;
          gap: 1.75rem;
          margin-bottom: 2.5rem;
        }

        .portal-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }

        .pf-icon {
          color: var(--color-terracotta);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .portal-feature-item strong {
          display: block;
          font-size: 0.96rem;
          color: var(--color-forest);
          margin-bottom: 0.2rem;
        }

        .portal-feature-item p {
          font-size: 0.86rem;
          margin: 0;
          line-height: 1.45;
        }

        .portal-launch-btn {
          width: 100%;
          max-width: 420px;
          margin: 0 auto;
        }

        .portal-security-tag {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: var(--color-text-light);
          margin-top: 1rem;
        }

        .portal-placeholder-box {
          background-color: var(--color-sand-tint);
          border: 1px solid #dfcfbc;
          border-radius: var(--radius-md);
          padding: 2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .placeholder-alert-icon {
          color: var(--color-amber-gold);
          margin-bottom: 0.75rem;
        }

        .portal-placeholder-box h3 {
          font-size: 1.2rem;
          color: var(--color-forest);
          margin-bottom: 0.5rem;
        }

        .portal-placeholder-box p {
          font-size: 0.92rem;
          margin-bottom: 1.25rem;
        }

        .portal-footer-note {
          margin-top: 2.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border);
        }

        .portal-footer-note p {
          font-size: 0.94rem;
          margin: 0;
        }

        .consult-inline-link {
          font-weight: 600;
          color: var(--color-terracotta);
        }

        .consult-inline-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .portal-card {
            padding: 2.25rem 1.5rem;
          }
          .portal-features-grid {
            grid-template-columns: 1fr;
            padding: 1.5rem;
          }
        }
      `})]})},Xf=["All Resources","Mental Health","Educational Advocacy","IEPs & 504 Plans","Parents & Families","Teens","Trauma & Recovery"],ao=[{id:"iep-checklist",slug:"what-should-i-bring-to-an-iep-meeting",title:"What Should I Bring to an IEP Meeting? A Parent's Practical Guide",category:"IEPs & 504 Plans",author:"Jessica Mouzon",publishedDate:"September 2026",readTime:"5 min read",excerpt:"Navigating an Individualized Education Program (IEP) meeting can feel overwhelming. Here is a clear, organized checklist of what to prepare and bring to advocate effectively for your child.",keyTakeaways:["Keep educational records, psychoeducational evaluations, and recent work samples organized chronologically in one binder.","Write down your core concerns and prioritized goals in advance so nothing gets overlooked during discussion.","Remember that you are an equal, essential member of the IEP team with unique expertise on your child."],tags:["IEP","Special Education","Parent Advocacy","School Support"],content:["Walking into an IEP (Individualized Education Program) meeting can feel intimidating. Between the specialized acronyms, multiple school specialists, and structured legal timelines, parents often feel placed at a disadvantage.","However, parents are vital, legally mandated members of the IEP team. Your insights regarding your child's learning style, strengths, anxieties, and home environment are indispensable in creating an authentic plan that works.","### Essential Documents to Organize Before the Meeting","1. **Recent Evaluations & Progress Reports**: Bring copies of the most recent multi-disciplinary evaluation (M-Team report), standardized testing, and quarterly IEP progress goals.","2. **Work Samples & Homework Logs**: Tangible examples demonstrating where your child is struggling (or thriving) provide objective data during accommodations discussions.","3. **Private Specialist Documentation**: If your child works with an outside therapist, tutor, or medical provider, bring relevant letters of support or summary recommendations.","4. **Prior IEP Document with Notes**: Mark sections of the current plan that feel effective versus accommodations that have not been implemented consistently.","### Preparing Your Parent Statement","Before the meeting, take 20 minutes to write down three to five bullet points summarizing your child's primary strengths, current challenges, and goals for the upcoming school term. Reading this during the opening of the meeting centers the conversation around your child as a whole human being.","### Professional Advocacy Support","If you feel uncertain navigating complex educational jargon, having an educational advocate review documentation beforehand or attend the meeting can provide clarity and peace of mind."]},{id:"iep-vs-504",slug:"understanding-the-difference-between-an-iep-and-a-504-plan",title:"Understanding the Difference Between an IEP and a 504 Plan",category:"Educational Advocacy",author:"Jessica Mouzon",publishedDate:"September 2026",readTime:"6 min read",excerpt:"Both IEPs and 504 Plans support students with diverse learning and mental health needs, but their legal frameworks, qualification criteria, and service scopes differ significantly.",keyTakeaways:["An IEP provides specialized individualized instruction under IDEA for qualifying disability categories that impact learning.","A 504 Plan provides equal environmental and academic accommodations under civil rights law (Section 504 of the Rehabilitation Act).","Students with anxiety, ADHD, or medical conditions may qualify for either plan depending on whether direct specialized instruction is required."],tags:["504 Plan","IEP","Educational Rights","Accommodations"],content:["When a child experiences academic struggles, attention differences, trauma, or mental health challenges, parents often hear recommendations for either a '504 Plan' or an 'IEP'. While both provide crucial school supports, understanding the distinction is key to securing appropriate services.","### What is an IEP?","An Individualized Education Program (IEP) is governed by the federal **Individuals with Disabilities Education Act (IDEA)**. It is designed for students whose disability adversely impacts their educational performance to the point where they require **specialized instruction** (modified curriculum, co-teaching, speech therapy, occupational therapy, or specialized behavioral intervention).","### What is a 504 Plan?","A 504 Plan is governed by **Section 504 of the Rehabilitation Act of 1973**, a civil rights law prohibiting discrimination against individuals with disabilities in programs receiving federal funds. It is designed to provide **equal access** to learning through accommodations (such as extended test time, sensory breaks, preferential seating, or reduced distractions) without modifying the curriculum.","### Summary Comparison","| Feature | IEP (IDEA) | 504 Plan (Section 504) |","|---|---|---|","| **Governing Law** | Federal Special Education Law | Federal Civil Rights Law |","| **Core Purpose** | Specialized instruction & related services | Equal access & reasonable accommodations |","| **Eligibility** | Must meet 1 of 13 specific disability categories + need specialized instruction | Broad physical or mental impairment substantially limiting a major life activity |","| **Measurable Annual Goals** | Required and measured quarterly | Not typically required (focuses on accommodations) |","### Which is Right for Your Child?","Determining the best pathway depends on your child's specific educational profile, psychological evaluation results, and classroom needs. A comprehensive educational consultation can help identify which framework best protects your student's learning."]},{id:"mental-health-school-performance",slug:"how-mental-health-can-affect-school-performance",title:"How Mental Health Intersects With School Performance",category:"Mental Health",author:"Jessica Mouzon",publishedDate:"September 2026",readTime:"5 min read",excerpt:"When a student experiences anxiety, depression, or chronic stress, their cognitive executive functions and emotional regulation directly impact their classroom engagement.",keyTakeaways:["Chronic emotional distress impairs working memory, processing speed, and cognitive flexibility.","Behavioral avoidance (school refusal, skipping assignments) is frequently an adaptive coping mechanism for underlying anxiety.","Effective intervention addresses both the internal emotional state and school accommodations simultaneously."],tags:["Adolescent Therapy","School Stress","Executive Functioning","Anxiety"],content:["Educators and parents often observe sudden drops in grades, missing assignments, or behavioral changes in adolescents and assume motivation is the issue. In reality, emotional regulation and cognitive learning share the same neurological circuitry.","### The Brain Under Stress","When an adolescent experiences acute stress, social anxiety, or trauma triggers, the brain's amygdala triggers a fight, flight, or freeze response. This temporarily down-regulates the prefrontal cortex—the exact region responsible for executive functions like:","- Planning and organizing assignments","- Retaining new academic concepts in working memory","- Regulating emotional responses to academic frustration","- Sustaining attention during lectures","### Recognizing the Subtle Signs","Students experiencing internal mental health challenges rarely announce their distress directly. Instead, distress manifests through:","- Somatic complaints (frequent stomachaches or headaches on school mornings)","- Perfectionistic paralysis (inability to begin an essay due to fear of failure)","- Irritability or withdrawal in the classroom","- Disproportionate exhaustion after the school day concludes","### Bridging Therapy and Educational Support","Because mental health and academic success are interconnected, therapeutic support is most powerful when it takes into account the student's daily classroom environment, peer dynamics, and academic expectations."]},{id:"what-is-emdr",slug:"what-is-emdr-therapy-and-how-does-it-work",title:"What Is EMDR Therapy and How Does It Work?",category:"Trauma & Recovery",author:"Jessica Mouzon",publishedDate:"September 2026",readTime:"7 min read",excerpt:"Eye Movement Desensitization and Reprocessing (EMDR) is a proven, evidence-based psychotherapy method. Discover how bilateral stimulation facilitates deep trauma resolution.",keyTakeaways:["EMDR does not require clients to talk in exhaustive detail about traumatic events to achieve healing.","Bilateral stimulation helps reprocess stuck emotional memories into adaptive, integrated narrative memories.","Treatment involves structured phases including preparation, resourcing, desensitization, and positive cognitive installation."],tags:["EMDR","Trauma Therapy","Evidence-Based","Nervous System"],content:["When we experience overwhelming stress or traumatic events, our normal memory processing system can be disrupted. Rather than becoming resolved past memories, traumatic experiences can remain 'stuck' in their raw, emotional form, easily triggered in the present day.","### What Makes EMDR Different?","Unlike traditional talk therapies that rely primarily on verbal analysis, **Eye Movement Desensitization and Reprocessing (EMDR)** engages the brain's innate neurobiological processing mechanisms using **Bilateral Stimulation (BLS)**.","Bilateral stimulation involves alternating left-right sensory input—such as following a therapist's fingers, holding vibrating tappers, or listening to alternating tones. While focusing briefly on a distressing memory, this stimulation lowers emotional arousal and enables the brain to form new, adaptive neural connections.","### The 8 Phases of EMDR Therapy","1. **History Taking & Treatment Planning**: Identifying core targets and understanding personal history.","2. **Preparation & Resourcing**: Establishing internal safety tools, grounding exercises, and calm place techniques before processing.","3. **Assessment**: Identifying specific images, negative core beliefs, emotions, and physical sensations connected to the target memory.","4. **Desensitization**: Engaging in bilateral stimulation sets until the emotional distress of the memory drops to neutral.","5. **Installation**: Strengthening a positive, empowering belief (e.g., 'I am safe now', 'I am capable').","6. **Body Scan**: Ensuring that no residual physical tension remains when recalling the event.","7. **Closure**: Grounding the client at the end of every session.","8. **Re-evaluation**: Reviewing progress at the start of subsequent sessions.","### Who Can Benefit from EMDR?","EMDR is widely recognized by organizations like the American Psychological Association (APA) and the World Health Organization (WHO) for the treatment of PTSD, single-incident traumas, childhood relational wounds, phobias, performance anxiety, and chronic grief."]},{id:"when-teen-needs-support",slug:"when-a-teen-may-need-additional-mental-health-support",title:"When a Teen May Need Additional Mental Health Support",category:"Teens",author:"Jessica Mouzon",publishedDate:"September 2026",readTime:"5 min read",excerpt:"Adolescence involves natural emotional ups and downs. Learn how to differentiate normal developmental milestones from signs that professional support is warranted.",keyTakeaways:["Watch for persistent changes in sleep, appetite, social withdrawal, or school engagement lasting more than two weeks.","Approaching your teen with curiosity, active listening, and validation builds trust before suggesting therapy.","Early therapeutic intervention equips adolescents with lifelong emotional regulation and coping tools."],tags:["Teen Therapy","Parenting","Adolescence","Emotional Regulation"],content:["Adolescence is a profound period of brain remodeling, identity exploration, and emotional development. It is completely normal for teenagers to seek increased independence, experience fluctuating moods, or occasionally feel stressed about school and peer dynamics.","However, when emotional struggles begin to interfere with daily functioning, early compassionate support can make all the difference.","### Key Signs That Professional Support May Be Helpful","- **Persistent Mood Shifts**: Irritability, sadness, or hopelessness that lasts consistently for more than two weeks.","- **Withdrawal from Valued Activities**: Dropping sports, creative hobbies, or social friendships that previously brought joy.","- **Significant Changes in Sleep or Energy**: Chronic insomnia, excessive sleeping, or persistent physical fatigue.","- **Intense Self-Criticism**: Expressions of worthlessness, intense perfectionism, or catastrophic thinking.","- **Dramatic Academic Changes**: Sudden decline in school engagement or extreme avoidance of school attendance.","### How to Talk to Your Teen About Therapy","Frame counseling not as a consequence or a sign that something is 'wrong' with them, but rather as an individualized toolbox—a confidential, neutral space where they can unpack stress and learn practical strategies on their own terms."]},{id:"understanding-cbt",slug:"understanding-cognitive-behavioral-therapy",title:"Understanding Cognitive Behavioral Therapy (CBT)",category:"Mental Health",author:"Jessica Mouzon",publishedDate:"September 2026",readTime:"4 min read",excerpt:"Cognitive Behavioral Therapy helps uncover the cyclical relationship between thoughts, emotions, and behaviors to replace unhelpful loops with grounded clarity.",keyTakeaways:["Our interpretations of situations—not just the situations themselves—shape how we feel and act.","CBT identifies common cognitive distortions such as catastrophizing, black-and-white thinking, and mind reading.","Clients learn actionable behavioral experiments and thought reframing tools they can use for life."],tags:["CBT","Cognitive Behavioral","Evidence-Based","Mental Health"],content:["Cognitive Behavioral Therapy (CBT) is one of the most thoroughly researched therapeutic approaches in modern psychology. At its core is a simple yet transformative principle: **It is not external events themselves that upset us, but rather the meaning and interpretations we attach to them.**","### The Cognitive Triangle","CBT illustrates how three interconnected components influence our daily lives:","1. **Thoughts**: What we tell ourselves about a situation.","2. **Emotions**: The physical and emotional sensations that arise.","3. **Behaviors**: The actions we take (or avoid taking) in response.","When an automatic negative thought arises (e.g., 'If I don't do this perfectly, I'm a failure'), it triggers anxiety, which may lead to avoidance, which subsequently reinforces the original belief.","### Practical, Collaborative Tools","In CBT, client and therapist work as active partners to identify cognitive patterns, examine evidence for and against automatic thoughts, and develop practical behavioral strategies that foster confidence and resilience."]},{id:"preparing-for-school-meeting",slug:"how-parents-can-prepare-for-a-school-support-meeting",title:"How Parents Can Prepare for a School Support Meeting",category:"Parents & Families",author:"Jessica Mouzon",publishedDate:"September 2026",readTime:"5 min read",excerpt:"Practical strategies for parents to foster collaborative, productive conversations with teachers, counselors, and school administrators.",keyTakeaways:["Frame concerns around specific observable behaviors rather than general frustration.","Establish a collaborative tone by acknowledging the school team's efforts while maintaining clear expectations for support.","Request written summaries and agreed-upon action timelines following every meeting."],tags:["Parent Advocacy","School Meetings","Collaboration","Family Support"],content:["School meetings—whether a routine parent-teacher conference, a Student Support Team (SST) meeting, or a 504 evaluation—are most successful when approached as a collaborative partnership.","### 1. Establish an Agenda in Advance","Email the school team 48 hours before the meeting with a brief 3-point agenda of what you hope to discuss. This allows staff to gather relevant attendance, academic, or behavioral data in advance.","### 2. Focus on Objective Observations","Instead of saying 'My child is miserable in math class', share observable data: 'It currently takes my child 90 minutes to complete 10 math problems at home, and they experience physical panic symptoms before tests. What modifications can we explore?'","### 3. Ask Clarifying, Open-Ended Questions","- 'What interventions have been attempted in the classroom so far, and what were the outcomes?'","- 'What strategies seem to help my child re-engage when they feel overwhelmed?'","- 'How will we measure whether this new accommodation is effective over the next 30 days?'","### 4. Follow Up in Writing","Within 24 hours of concluding the meeting, send a brief email thanking the team and summarizing the agreed-upon next steps, who is responsible for each action item, and the date for the follow-up check-in."]}],Zf=()=>{const[o,d]=P.useState("All Resources"),[c,m]=P.useState(""),h=ao.filter(g=>{const w=o==="All Resources"||g.category===o,b=c.trim()===""||g.title.toLowerCase().includes(c.toLowerCase())||g.excerpt.toLowerCase().includes(c.toLowerCase())||g.tags.some(N=>N.toLowerCase().includes(c.toLowerCase()));return w&&b});return n.jsxs("div",{className:"resources-page",children:[n.jsx(Le,{title:"Resources & Educational Library | Mental Health & Advocacy",description:"Educational guides and practical resources on IEPs, 504 plans, EMDR therapy, teen mental health, and parent advocacy by Jessica Mouzon.",canonicalPath:"/resources"}),n.jsx("section",{className:"section section-bg-muted",style:{paddingBottom:"3rem"},children:n.jsxs("div",{className:"container container-narrow text-center",children:[n.jsx("span",{className:"badge badge-sage",children:"Knowledge & Tools"}),n.jsx("h1",{className:"resources-title",children:"Resources & Educational Guides"}),n.jsx("p",{className:"lead",children:"Practical insights, actionable parent guides, and evidence-based mental health articles written to empower adolescents, adults, and families."}),n.jsxs("div",{className:"resources-search-wrap",children:[n.jsx(eu,{className:"search-icon",size:20}),n.jsx("input",{type:"text",className:"search-input",placeholder:"Search by keyword, topic (e.g., IEP, EMDR, Anxiety, Teen)...",value:c,onChange:g=>m(g.target.value),"aria-label":"Search resources"}),c&&n.jsx("button",{type:"button",className:"clear-search-btn",onClick:()=>m(""),children:"Clear"})]})]})}),n.jsx("section",{className:"section",style:{paddingTop:"2rem"},children:n.jsxs("div",{className:"container",children:[n.jsx("div",{className:"category-filter-bar",role:"tablist","aria-label":"Resource Categories",children:Xf.map(g=>n.jsx("button",{type:"button",role:"tab","aria-selected":o===g,className:`filter-pill ${o===g?"active":""}`,onClick:()=>d(g),children:g},g))}),h.length>0?n.jsx("div",{className:"grid-3 articles-grid",children:h.map(g=>n.jsxs("article",{className:"card card-hover article-card",children:[n.jsxs("div",{className:"article-meta-row",children:[n.jsx("span",{className:"badge badge-sand",children:g.category}),n.jsxs("span",{className:"read-time-tag",children:[n.jsx(Or,{size:14}),g.readTime]})]}),n.jsx("h3",{className:"article-card-title",children:n.jsx(B,{to:`/resources/${g.slug}`,onClick:()=>ue("resource_article_viewed",{articleId:g.id}),children:g.title})}),n.jsx("p",{className:"article-card-excerpt",children:g.excerpt}),n.jsx("div",{className:"article-tags-row",children:g.tags.slice(0,3).map((w,b)=>n.jsxs("span",{className:"article-mini-tag",children:["#",w]},b))}),n.jsx("div",{className:"article-card-footer",children:n.jsxs(B,{to:`/resources/${g.slug}`,className:"read-article-link",onClick:()=>ue("resource_article_viewed",{articleId:g.id}),children:[n.jsx("span",{children:"Read Article"}),n.jsx(Ae,{size:16})]})})]},g.id))}):n.jsxs("div",{className:"no-results-box card text-center",children:[n.jsx(kp,{size:40,className:"no-results-icon"}),n.jsx("h3",{children:"No Articles Found"}),n.jsx("p",{children:"We couldn't find any resources matching your search. Try adjusting your keywords or category filter."}),n.jsx("button",{type:"button",className:"btn btn-outline btn-sm",onClick:()=>{d("All Resources"),m("")},children:"Reset Filters"})]})]})}),n.jsx(zt,{title:"Have Questions About School or Therapy?",subtitle:"We provide individualized consultation to help you apply these strategies to your specific situation."}),n.jsx("style",{children:`
        .resources-title {
          font-size: clamp(2.35rem, 4.2vw, 3.65rem);
          margin-top: 0.75rem;
          margin-bottom: 1rem;
        }

        .resources-search-wrap {
          position: relative;
          max-width: 580px;
          margin: 2rem auto 0;
        }

        .search-icon {
          position: absolute;
          left: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-light);
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          padding: 0.95rem 1.25rem 0.95rem 3.25rem;
          font-family: var(--font-sans);
          font-size: 1rem;
          border-radius: var(--radius-full);
          border: 1.5px solid var(--color-border);
          background-color: #ffffff;
          box-shadow: var(--shadow-sm);
        }

        .search-input:focus {
          border-color: var(--color-sage);
          outline: none;
          box-shadow: 0 0 0 3px rgba(78, 114, 96, 0.15);
        }

        .clear-search-btn {
          position: absolute;
          right: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.85rem;
          color: var(--color-text-light);
          font-weight: 600;
        }

        /* Filter Pills */
        .category-filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-bottom: 2.5rem;
        }

        .filter-pill {
          padding: 0.55rem 1.15rem;
          border-radius: var(--radius-full);
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          color: var(--color-forest-light);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .filter-pill:hover {
          background-color: var(--color-sage-tint);
          color: var(--color-forest);
        }

        .filter-pill.active {
          background-color: var(--color-forest);
          border-color: var(--color-forest);
          color: #ffffff;
          font-weight: 600;
        }

        /* Articles Grid */
        .articles-grid {
          gap: 2rem;
        }

        .article-card {
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
        }

        .article-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .read-time-tag {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: var(--color-text-light);
          font-weight: 500;
        }

        .article-card-title {
          font-size: 1.25rem;
          margin-bottom: 0.85rem;
          line-height: 1.35;
        }

        .article-card-title a {
          color: var(--color-forest);
          text-decoration: none;
        }

        .article-card-title a:hover {
          color: var(--color-terracotta);
        }

        .article-card-excerpt {
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .article-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: auto;
          margin-bottom: 1.5rem;
        }

        .article-mini-tag {
          font-size: 0.76rem;
          color: var(--color-text-light);
          background-color: var(--color-linen);
          padding: 0.25rem 0.55rem;
          border-radius: var(--radius-sm);
        }

        .article-card-footer {
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-subtle);
        }

        .read-article-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--color-terracotta);
        }

        .read-article-link:hover {
          color: var(--color-terracotta-hover);
          gap: 0.65rem;
        }

        .no-results-box {
          padding: 4rem 2rem;
          max-width: 540px;
          margin: 0 auto;
        }

        .no-results-icon {
          color: var(--color-sand);
          margin: 0 auto 1rem;
        }
      `})]})},eg=()=>{const{slug:o}=Oh(),d=ao.find(h=>h.slug===o);if(!d)return n.jsx($d,{to:"/resources",replace:!0});const c=ao.filter(h=>h.id!==d.id).slice(0,3),m={"@context":"https://schema.org","@type":"Article",headline:d.title,description:d.excerpt,author:{"@type":"Person",name:d.author},publisher:{"@type":"Organization",name:K.practiceName},datePublished:"2026-09-01"};return n.jsxs("div",{className:"resource-detail-page",children:[n.jsx(Le,{title:d.title,description:d.excerpt,canonicalPath:`/resources/${d.slug}`,ogType:"article",schema:m}),n.jsx("section",{className:"section section-bg-muted",style:{paddingBottom:"3rem"},children:n.jsxs("div",{className:"container container-narrow",children:[n.jsxs(B,{to:"/resources",className:"back-to-resources-link",children:[n.jsx(yp,{size:16}),n.jsx("span",{children:"Back to All Resources"})]}),n.jsxs("div",{className:"article-header-meta",children:[n.jsx("span",{className:"badge badge-terracotta",children:d.category}),n.jsxs("span",{className:"article-meta-pill",children:[n.jsx(Or,{size:14}),d.readTime]})]}),n.jsx("h1",{className:"article-main-title",children:d.title}),n.jsxs("div",{className:"article-author-strip",children:[n.jsx("div",{className:"author-avatar",children:n.jsx(nu,{size:20})}),n.jsxs("div",{children:[n.jsx("p",{className:"author-name",children:d.author}),n.jsxs("p",{className:"author-meta",children:[K.credentials.clinicalCounseling," • ",K.credentials.educationLicense]})]})]})]})}),n.jsx("section",{className:"section",style:{paddingTop:"2.5rem"},children:n.jsxs("div",{className:"container container-narrow",children:[d.keyTakeaways&&d.keyTakeaways.length>0&&n.jsxs("div",{className:"key-takeaways-box card card-sage",children:[n.jsxs("h3",{className:"takeaways-heading",children:[n.jsx(Ue,{size:20,className:"takeaways-icon"}),n.jsx("span",{children:"Key Takeaways"})]}),n.jsx("ul",{className:"takeaways-list",children:d.keyTakeaways.map((h,g)=>n.jsx("li",{children:h},g))})]}),n.jsx("div",{className:"article-rich-content",children:d.content.map((h,g)=>h.startsWith("### ")?n.jsx("h2",{className:"content-h2",children:h.replace("### ","")},g):h.startsWith("1. ")||h.startsWith("2. ")||h.startsWith("3. ")||h.startsWith("4. ")?n.jsx("div",{className:"content-numbered-item",children:n.jsx("p",{children:h})},g):h.startsWith("- ")?n.jsx("li",{className:"content-list-item",children:h.replace("- ","")},g):h.includes("| **")?null:n.jsx("p",{children:h},g))}),n.jsxs("div",{className:"notice-box notice-sage",style:{marginTop:"3.5rem"},children:[n.jsx(ho,{size:20,className:"notice-icon"}),n.jsx("div",{className:"notice-content",children:n.jsxs("p",{children:[n.jsx("strong",{children:"Educational Notice:"})," The articles published in the GroWell Resource Library are for informational and educational purposes only and do not constitute formal medical advice, clinical psychotherapy, or legal counsel. For individualized support, schedule a consultation."]})})]})]})}),n.jsx("section",{className:"section section-bg-muted","aria-labelledby":"related-heading",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header text-center",children:[n.jsx("span",{className:"badge badge-sand",children:"Keep Reading"}),n.jsx("h2",{id:"related-heading",className:"section-title",children:"Related Resources"})]}),n.jsx("div",{className:"grid-3",children:c.map(h=>n.jsxs("div",{className:"card card-hover article-card",children:[n.jsxs("div",{className:"article-meta-row",style:{marginBottom:"0.75rem"},children:[n.jsx("span",{className:"badge badge-sage",children:h.category}),n.jsx("span",{className:"read-time-tag",children:h.readTime})]}),n.jsx("h3",{className:"article-card-title",children:n.jsx(B,{to:`/resources/${h.slug}`,children:h.title})}),n.jsx("p",{className:"article-card-excerpt",children:h.excerpt}),n.jsx("div",{className:"article-card-footer",style:{marginTop:"auto"},children:n.jsxs(B,{to:`/resources/${h.slug}`,className:"read-article-link",children:[n.jsx("span",{children:"Read Guide"}),n.jsx(Ae,{size:16})]})})]},h.id))})]})}),n.jsx(zt,{}),n.jsx("style",{children:`
        .back-to-resources-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-terracotta);
          margin-bottom: 1.5rem;
        }

        .back-to-resources-link:hover {
          text-decoration: underline;
        }

        .article-header-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .article-meta-pill {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.84rem;
          color: var(--color-text-light);
        }

        .article-main-title {
          font-size: clamp(2rem, 3.6vw, 2.85rem);
          line-height: 1.25;
          margin-bottom: 1.5rem;
        }

        .article-author-strip {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--color-border);
        }

        .author-avatar {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-full);
          background-color: var(--color-sand-tint);
          color: var(--color-forest);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .author-name {
          font-weight: 700;
          font-size: 0.94rem;
          color: var(--color-forest);
          margin: 0;
        }

        .author-meta {
          font-size: 0.8rem;
          color: var(--color-text-light);
          margin: 0;
        }

        /* Key Takeaways */
        .key-takeaways-box {
          padding: 2rem;
          margin-bottom: 2.5rem;
        }

        .takeaways-heading {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.15rem;
          color: var(--color-forest);
          margin-bottom: 1rem;
        }

        .takeaways-icon {
          color: var(--color-sage);
        }

        .takeaways-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .takeaways-list li {
          font-size: 0.95rem;
          color: var(--color-forest-light);
          position: relative;
          padding-left: 1.35rem;
          line-height: 1.55;
        }

        .takeaways-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-sage);
          font-weight: 700;
        }

        /* Rich Content */
        .article-rich-content p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          color: var(--color-text-main);
        }

        .content-h2 {
          font-family: var(--font-serif);
          font-size: 1.75rem;
          color: var(--color-forest);
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }

        .content-numbered-item p {
          background-color: var(--color-linen);
          border-left: 3px solid var(--color-terracotta);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-sm);
          font-size: 1.02rem;
        }

        .content-list-item {
          font-size: 1.05rem;
          margin-bottom: 0.5rem;
          margin-left: 1.5rem;
          color: var(--color-text-muted);
        }
      `})]})},tg=()=>{const[o,d]=P.useState({orgName:"",contactName:"",email:"",phone:"",orgType:"School / District",estimatedAudience:"20–50 People",topicInterest:"Trauma-Informed Classroom Strategies",eventFormat:"In-Person",targetDate:"",details:""}),[c,m]=P.useState(!1),[h,g]=P.useState(!1),[w,b]=P.useState(!1),[N,T]=P.useState(""),k=G=>{const{name:J,value:q}=G.target;d(I=>({...I,[J]:q}))},C=G=>{if(G.preventDefault(),T(""),!o.orgName.trim()||!o.contactName.trim()||!o.email.trim()){T("Please complete all required fields.");return}m(!0),setTimeout(()=>{m(!1),g(!0),b(!0),ue("workshop_inquiry",{orgType:o.orgType,topic:o.topicInterest,format:o.eventFormat})},750)},M=[{title:"Trauma-Informed School Environments",audience:"Teachers, Administrators & School Staff",desc:"Understanding the neurobiology of trauma and stress in adolescents, with practical de-escalation, sensory accommodation, and nervous-system calming tools for the classroom."},{title:"Demystifying IEPs & 504 Plans for Parents",audience:"PTAs, Parent Coalitions & Community Groups",desc:"An empowering, accessible breakdown of special education rights, how to read evaluations, and how to build positive collaborative partnerships with school teams."},{title:"Adolescent Mental Health & Emotional Regulation",audience:"Youth Mentors, Community Leaders & Counselors",desc:"Recognizing early warning signs of anxiety, depression, and executive dysfunction in youth, and implementing neurodivergent-affirming communication strategies."},{title:"Bridging Counseling & Classroom Accommodations",audience:"Mental Health Clinicians & Educational Specialists",desc:"A professional development workshop on aligning clinical outpatient therapy goals with school-based accommodations and 504 planning."}];return n.jsxs("div",{className:"workshops-page",children:[n.jsx(Le,{title:"Workshops & Organizational Training | Mental Health & Education",description:"Professional development, school staff training, and parent workshops on trauma-informed practices and special education advocacy by Jessica Mouzon.",canonicalPath:"/workshops"}),n.jsx("section",{className:"section section-bg-muted",style:{paddingBottom:"3rem"},children:n.jsxs("div",{className:"container container-narrow text-center",children:[n.jsx("span",{className:"badge badge-terracotta",children:"Community & Professional Training"}),n.jsx("h1",{className:"workshops-title",children:"Workshops & Speaking Engagements"}),n.jsx("p",{className:"lead",children:"Engaging, evidence-based presentations and professional development designed for schools, parent organizations, youth programs, and community leaders."})]})}),n.jsx("section",{className:"section",style:{paddingTop:"2.5rem"},children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header text-center",children:[n.jsx("span",{className:"badge badge-sage",children:"Popular Programs"}),n.jsx("h2",{className:"section-title",children:"Core Workshop Topics"}),n.jsx("p",{className:"section-subtitle",children:"All presentations can be tailored for keynote speeches, half-day professional development, or interactive evening parent seminars."})]}),n.jsx("div",{className:"grid-2 topics-grid",children:M.map((G,J)=>n.jsxs("div",{className:"card card-hover topic-card",children:[n.jsx("div",{className:"topic-badge-row",children:n.jsx("span",{className:"badge badge-forest",children:G.audience})}),n.jsx("h3",{className:"topic-card-title",children:G.title}),n.jsx("p",{className:"topic-card-desc",children:G.desc})]},J))})]})}),n.jsx("section",{className:"section section-bg-sage",id:"request-form","aria-labelledby":"inquiry-heading",children:n.jsx("div",{className:"container container-narrow",children:n.jsxs("div",{className:"card inquiry-form-card",children:[n.jsxs("div",{className:"text-center",style:{marginBottom:"2rem"},children:[n.jsx("span",{className:"badge badge-sand",children:"Organizational Inquiries"}),n.jsx("h2",{id:"inquiry-heading",className:"section-title",style:{marginTop:"0.5rem"},children:"Request a Workshop or Presentation"}),n.jsx("p",{className:"section-subtitle",children:"Share a few details about your organization and event goals to check availability and request a custom proposal."})]}),h?n.jsxs("div",{className:"submission-success-view text-center animate-fade-in",children:[n.jsx("div",{className:"success-icon-wrap",children:n.jsx(Ue,{size:48,className:"success-check-icon"})}),n.jsxs("h2",{children:["Thank You, ",o.contactName,"!"]}),n.jsxs("p",{className:"lead",style:{marginTop:"0.75rem",marginBottom:"1.5rem"},children:["Your organizational workshop inquiry for ",n.jsx("strong",{children:o.orgName})," has been received. We will be in touch with proposal options within 2 business days."]}),n.jsx("button",{type:"button",className:"btn btn-outline",onClick:()=>g(!1),children:"Send Another Inquiry"})]}):n.jsxs("form",{onSubmit:C,noValidate:!0,children:[N&&n.jsxs("div",{className:"notice-box notice-danger",children:[n.jsx(na,{size:20,className:"notice-icon"}),n.jsx("div",{className:"notice-content",children:n.jsx("p",{children:N})})]}),n.jsxs("div",{className:"grid-2",children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"orgName",children:["Organization / School Name ",n.jsx("span",{className:"required-mark",children:"*"})]}),n.jsx("input",{type:"text",id:"orgName",name:"orgName",className:"form-control",placeholder:"e.g. Oakridge Middle School PTA",value:o.orgName,onChange:k,required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"contactName",children:["Contact Person & Title ",n.jsx("span",{className:"required-mark",children:"*"})]}),n.jsx("input",{type:"text",id:"contactName",name:"contactName",className:"form-control",placeholder:"e.g. David Vance, Principal",value:o.contactName,onChange:k,required:!0})]})]}),n.jsxs("div",{className:"grid-2",children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"email",children:["Email Address ",n.jsx("span",{className:"required-mark",children:"*"})]}),n.jsx("input",{type:"email",id:"email",name:"email",className:"form-control",placeholder:"contact@school.org",value:o.email,onChange:k,required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",htmlFor:"phone",children:"Phone Number"}),n.jsx("input",{type:"tel",id:"phone",name:"phone",className:"form-control",placeholder:"(555) 000-0000",value:o.phone,onChange:k})]})]}),n.jsxs("div",{className:"grid-3",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Organization Type"}),n.jsxs("select",{name:"orgType",className:"form-control",value:o.orgType,onChange:k,children:[n.jsx("option",{value:"School / District",children:"K–12 School / District"}),n.jsx("option",{value:"Parent Group / PTA",children:"Parent Group / PTA"}),n.jsx("option",{value:"Nonprofit / Youth Program",children:"Nonprofit / Youth Program"}),n.jsx("option",{value:"Clinical Practice",children:"Clinical Practice"}),n.jsx("option",{value:"Other Organization",children:"Other Organization"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Estimated Audience"}),n.jsxs("select",{name:"estimatedAudience",className:"form-control",value:o.estimatedAudience,onChange:k,children:[n.jsx("option",{value:"Under 20 People",children:"Under 20 People"}),n.jsx("option",{value:"20–50 People",children:"20–50 People"}),n.jsx("option",{value:"50–150 People",children:"50–150 People"}),n.jsx("option",{value:"150+ Keynote",children:"150+ Keynote / Assembly"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Event Format"}),n.jsxs("select",{name:"eventFormat",className:"form-control",value:o.eventFormat,onChange:k,children:[n.jsx("option",{value:"In-Person",children:"In-Person"}),n.jsx("option",{value:"Virtual Webinar",children:"Virtual Webinar"}),n.jsx("option",{value:"Hybrid",children:"Hybrid"})]})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",htmlFor:"details",children:"Tell us about your event and goals"}),n.jsx("textarea",{id:"details",name:"details",className:"form-control",placeholder:"Provide details such as desired date ranges, key objectives for your audience, or custom topic ideas...",rows:3,value:o.details,onChange:k})]}),n.jsx("button",{type:"submit",className:"btn btn-primary btn-lg full-width-btn",disabled:c,style:{marginTop:"1.25rem"},children:c?"Sending Request...":"Submit Workshop Request"})]})]})})}),n.jsx(po,{show:w,type:"success",title:"Workshop Request Submitted",message:"Thank you! We will review your event details and respond within 2 business days.",onClose:()=>b(!1)}),n.jsx("style",{children:`
        .workshops-title {
          font-size: clamp(2.35rem, 4.2vw, 3.65rem);
          margin-top: 0.75rem;
          margin-bottom: 1rem;
        }

        .topics-grid {
          gap: 2rem;
        }

        .topic-card {
          padding: 2.5rem 2.25rem;
        }

        .topic-badge-row {
          margin-bottom: 1rem;
        }

        .topic-card-title {
          font-size: 1.35rem;
          color: var(--color-forest);
          margin-bottom: 0.75rem;
        }

        .topic-card-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }

        .inquiry-form-card {
          padding: 3.5rem 3rem;
          box-shadow: var(--shadow-md);
        }

        .full-width-btn {
          width: 100%;
          justify-content: center;
        }

        .success-icon-wrap {
          width: 72px;
          height: 72px;
          border-radius: var(--radius-full);
          background-color: var(--color-sage-tint);
          color: var(--color-sage);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        @media (max-width: 768px) {
          .inquiry-form-card {
            padding: 2rem 1.5rem;
          }
        }
      `})]})},ng=()=>{const[o,d]=P.useState({"insurance-accept":!0,"ages-served":!0}),[c,m]=P.useState("All"),[h,g]=P.useState(""),w=k=>{d(C=>({...C,[k]:!C[k]}))},b=[{id:"insurance-accept",category:"Insurance & Billing",question:"Do you accept insurance?",answer:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:n.jsx("strong",{children:K.insurance.statusNotice})}),n.jsxs("p",{children:["In the interim, we provide itemized ",n.jsx("strong",{children:"Superbills"})," (detailed medical receipts) that you may submit to your insurance carrier for potential out-of-network reimbursement. We encourage clients to call their insurance provider and ask about their out-of-network behavioral health coverage benefits."]})]})},{id:"private-pay",category:"Insurance & Billing",question:"Do you offer private-pay services?",answer:n.jsx("p",{children:"Yes. Many clients choose private-pay (self-pay) to maintain maximum privacy, avoid mandatory diagnostic codes on permanent medical records, and have full flexibility regarding session frequency and treatment duration. Detailed self-pay fee schedules are available upon request."})},{id:"ages-served",category:"Therapy Services",question:"What ages do you serve? Do you see younger children?",answer:n.jsxs("p",{children:["GroWell Therapy Collective primarily serves ",n.jsx("strong",{children:"adolescents approximately age 11 through adulthood"})," (including middle schoolers, high schoolers, college students, young adults, and mature adults). For younger children under age 11, we offer specialized ",n.jsx("strong",{children:"Parent Consultation & Educational Advocacy"})," to help families implement behavioral and educational supports."]})},{id:"in-person-virtual",category:"Therapy Services",question:"Do you offer in-person therapy or virtual telehealth?",answer:n.jsxs("p",{children:["We offer a flexible hybrid model! We provide in-person sessions in our welcoming, tranquil office in ",K.contact.city,", as well as encrypted, HIPAA-compliant telehealth video appointments for eligible clients residing anywhere across ",K.contact.state,"."]})},{id:"what-is-emdr",category:"Therapy Services",question:"What is EMDR therapy, and who is it for?",answer:n.jsxs("p",{children:["Eye Movement Desensitization and Reprocessing (EMDR) is an extensively researched psychotherapy that helps the brain reprocess traumatic memories and distress. By using bilateral stimulation (such as visual tracking or alternating tactile taps), EMDR allows memories to be integrated safely without having to talk through every painful detail. Visit our ",n.jsx(B,{to:"/emdr-therapy",children:"dedicated EMDR page"})," to learn more."]})},{id:"what-is-tfcbt",category:"Therapy Services",question:"What is TF-CBT (Trauma-Focused Cognitive Behavioral Therapy)?",answer:n.jsx("p",{children:"TF-CBT is a structured, evidence-based model specifically designed for children and adolescents (and their caregivers) who are overcoming the emotional impact of trauma. It combines cognitive-behavioral skills with trauma-processing and caregiver co-regulation."})},{id:"advocacy-iep-504",category:"Educational Advocacy",question:"How can you help with IEPs and 504 Plans?",answer:n.jsx("p",{children:"Jessica Mouzon holds an Exceptional Children’s General Curriculum K–12 Educator License alongside her mental health background. She reviews psychoeducational evaluations, analyzes whether IEP annual goals are measurable and appropriate, helps parents prepare for school meetings, and attends school meetings to support collaborative advocacy."})},{id:"advocacy-is-not-therapy",category:"Educational Advocacy",question:"Are educational advocacy services considered clinical therapy?",answer:n.jsx("p",{children:"No. Educational advocacy and parent consultation are distinct educational advisory services, not clinical psychotherapy. While informed by clinical insight into child development and emotional regulation, educational advocacy focuses on school systems, accommodation planning, and parent guidance."})},{id:"advocacy-insurance-covered",category:"Educational Advocacy",question:"Is educational advocacy covered by health insurance?",answer:n.jsx("p",{children:"No. Health insurance plans only cover medically necessary clinical psychotherapy. Educational advocacy, school meeting attendance, and document review are non-clinical consultation services offered under transparent private-pay rates or structured service packages."})},{id:"what-is-consultation",category:"Getting Started",question:"What happens during an initial consultation?",answer:n.jsx("p",{children:"The free 15-minute consultation is a relaxed, no-pressure phone or video conversation. We discuss what brings you to GroWell, explore what kind of support you need, answer basic service and scheduling questions, and determine whether our practice is the best fit for your goals."})},{id:"portal-access",category:"Getting Started",question:"How do existing clients access the Client Portal?",answer:n.jsxs("p",{children:["Existing clients can visit our ",n.jsx(B,{to:"/client-portal",children:"Client Portal Page"})," to log in to our secure EHR platform, manage appointments, complete intake paperwork, access telehealth links, and review billing statements."]})},{id:"prescribe-medication",category:"Therapy Services",question:"Do you prescribe medication?",answer:n.jsx("p",{children:"No. GroWell provides psychotherapy, counseling, and educational advocacy. We are not medical doctors or psychiatric nurse practitioners. However, if medication is appropriate, we are happy to provide referrals and coordinate care with your prescribing physician or pediatrician with your written consent."})},{id:"mental-health-crisis",category:"Getting Started",question:"What should I do in a mental health crisis or emergency?",answer:n.jsxs("p",{children:["GroWell Therapy Collective is not an emergency response provider and does not monitor communications 24/7. If you or your child are in immediate physical danger, call ",n.jsx("strong",{children:"911"})," or go to the nearest emergency department. For immediate 24/7 confidential crisis support, call or text ",n.jsx("strong",{children:"988"})," to connect with the national Suicide & Crisis Lifeline."]})}],N=["All","Insurance & Billing","Therapy Services","Educational Advocacy","Getting Started"],T=b.filter(k=>{const C=c==="All"||k.category===c,M=h.trim()===""||k.question.toLowerCase().includes(h.toLowerCase());return C&&M});return n.jsxs("div",{className:"faq-page",children:[n.jsx(Le,{title:"Frequently Asked Questions | GroWell Therapy Collective",description:"Find clear answers regarding insurance, private-pay rates, age ranges (11+), virtual telehealth, EMDR, TF-CBT, and IEP educational advocacy.",canonicalPath:"/faq"}),n.jsx("section",{className:"section section-bg-muted",style:{paddingBottom:"3rem"},children:n.jsxs("div",{className:"container container-narrow text-center",children:[n.jsx("span",{className:"badge badge-sage",children:"Help & Information"}),n.jsx("h1",{className:"faq-title",children:"Frequently Asked Questions"}),n.jsx("p",{className:"lead",children:"Find transparent answers about our clinical approach, age ranges, insurance status, and educational advocacy services."}),n.jsxs("div",{className:"resources-search-wrap",children:[n.jsx(eu,{className:"search-icon",size:20}),n.jsx("input",{type:"text",className:"search-input",placeholder:"Search questions (e.g. insurance, EMDR, ages, 504 plan)...",value:h,onChange:k=>g(k.target.value),"aria-label":"Search FAQs"})]})]})}),n.jsx("section",{className:"section",style:{paddingTop:"2.5rem"},children:n.jsxs("div",{className:"container container-narrow",children:[n.jsx("div",{className:"category-filter-bar",role:"tablist",children:N.map(k=>n.jsx("button",{type:"button",role:"tab","aria-selected":c===k,className:`filter-pill ${c===k?"active":""}`,onClick:()=>m(k),children:k},k))}),n.jsx("div",{className:"faq-accordion-list",style:{marginTop:"2rem"},children:T.map(k=>{const C=!!o[k.id];return n.jsxs("div",{className:`faq-accordion-item ${C?"is-open":""}`,children:[n.jsxs("button",{type:"button",className:"faq-question-btn",onClick:()=>w(k.id),"aria-expanded":C,children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[n.jsx("span",{className:"badge badge-sand faq-item-badge",children:k.category}),n.jsx("span",{children:k.question})]}),C?n.jsx(Qd,{size:20}):n.jsx(Vd,{size:20})]}),C&&n.jsx("div",{className:"faq-answer-pane animate-fade-in",children:k.answer})]},k.id)})})]})}),n.jsx(zt,{title:"Still Have Questions?",subtitle:"We would love to talk through your specific questions during a free, 15-minute consultation."}),n.jsx("style",{children:`
        .faq-title {
          font-size: clamp(2.35rem, 4.2vw, 3.65rem);
          margin-top: 0.75rem;
          margin-bottom: 1rem;
        }

        .faq-item-badge {
          font-size: 0.7rem;
          padding: 0.2rem 0.55rem;
        }

        @media (max-width: 640px) {
          .faq-item-badge {
            display: none;
          }
        }
      `})]})},rg=()=>n.jsxs("div",{className:"insurance-fees-page",children:[n.jsx(Le,{title:"Insurance & Fees | Transparent Financial Policies",description:"Learn about GroWell Therapy Collective's financial policies, pending insurance participation, superbill out-of-network reimbursement, and self-pay options.",canonicalPath:"/insurance-fees"}),n.jsx("section",{className:"section section-bg-muted",style:{paddingBottom:"3rem"},children:n.jsxs("div",{className:"container container-narrow text-center",children:[n.jsx("span",{className:"badge badge-sand",children:"Financial Transparency"}),n.jsx("h1",{className:"fees-title",children:"Insurance & Fee Structure"}),n.jsx("p",{className:"lead",children:"We believe in complete financial clarity and transparency so you can make informed decisions about your mental health and educational investments."})]})}),n.jsx("section",{className:"section",style:{paddingTop:"2.5rem"},children:n.jsxs("div",{className:"container container-narrow",children:[n.jsxs("div",{className:"notice-box notice-warning",children:[n.jsx(Zi,{size:24,className:"notice-icon"}),n.jsxs("div",{className:"notice-content",children:[n.jsx("h4",{style:{color:"inherit",marginBottom:"0.25rem"},children:"Current Insurance Network Status"}),n.jsxs("p",{children:[n.jsx("strong",{children:K.insurance.statusNotice})," Please contact us directly during your consultation to verify whether credentialing has finalized for your specific health plan."]})]})]}),n.jsxs("div",{className:"grid-3 payment-pathways-grid",style:{marginTop:"2.5rem",marginBottom:"3.5rem"},children:[n.jsxs("div",{className:"card card-hover pathway-card",children:[n.jsx("div",{className:"pathway-icon-box icon-sage",children:n.jsx(Kd,{size:26})}),n.jsx("h3",{children:"Out-of-Network & Superbills"}),n.jsx("p",{children:"If your insurance is out-of-network, we provide itemized Superbill receipts containing all required clinical coding (CPT and ICD-10) for you to submit to your insurer for potential reimbursement."}),n.jsx("div",{className:"pathway-tag",children:"Reimbursement Support"})]}),n.jsxs("div",{className:"card card-hover pathway-card",children:[n.jsx("div",{className:"pathway-icon-box icon-terracotta",children:n.jsx(Yd,{size:26})}),n.jsx("h3",{children:"Private-Pay (Self-Pay)"}),n.jsx("p",{children:"Many clients prefer private pay for enhanced confidentiality, no required psychiatric diagnoses on permanent records, and unrestricted treatment flexibility."}),n.jsx("div",{className:"pathway-tag",children:"Maximum Privacy"})]}),n.jsxs("div",{className:"card card-hover pathway-card",children:[n.jsx("div",{className:"pathway-icon-box icon-sand",children:n.jsx(vf,{size:26})}),n.jsx("h3",{children:"Educational Advocacy"}),n.jsx("p",{children:"Educational advocacy and school meeting support are non-clinical advisory services. They are offered via hourly rates or structured flat-rate package options."}),n.jsx("div",{className:"pathway-tag",children:"Custom Packages"})]})]}),n.jsxs("div",{className:"financial-policies-stack",children:[n.jsxs("div",{className:"card policy-card",children:[n.jsx("h3",{children:"Questions to Ask Your Insurance Provider About Out-of-Network Benefits"}),n.jsx("p",{style:{marginTop:"0.5rem",marginBottom:"1rem"},children:"We recommend calling the member services number on the back of your insurance card and asking the following:"}),n.jsxs("ul",{className:"policy-questions-list",children:[n.jsx("li",{children:'"Do I have out-of-network behavioral health outpatient coverage?"'}),n.jsx("li",{children:'"What is my annual out-of-network deductible, and how much has been met so far?"'}),n.jsx("li",{children:'"What percentage or allowable amount is reimbursed for routine psychotherapy (CPT codes 90834 and 90837)?"'}),n.jsx("li",{children:'"Is prior authorization or a referral required from my primary care doctor?"'}),n.jsx("li",{children:'"How do I submit an itemized Superbill for direct reimbursement?"'})]})]}),n.jsxs("div",{className:"card policy-card",children:[n.jsx("h3",{children:"Good Faith Estimate & The No Surprises Act"}),n.jsxs("p",{children:["Under Section 2799B-6 of the Public Health Service Act, healthcare providers must provide uninsured and private-pay individuals with a ",n.jsx("strong",{children:"Good Faith Estimate (GFE)"})," of expected charges for non-emergency medical and psychotherapy services."]}),n.jsxs("p",{style:{marginTop:"0.75rem"},children:["You have the right to receive a Good Faith Estimate in writing at least one business day prior to your scheduled service. For questions or more information about your right to a Good Faith Estimate, visit ",n.jsx("a",{href:"https://www.cms.gov/nosurprises",target:"_blank",rel:"noopener noreferrer",children:"www.cms.gov/nosurprises"}),"."]})]}),n.jsxs("div",{className:"card policy-card",children:[n.jsx("h3",{children:"Attendance & Cancellation Policy"}),n.jsxs("p",{children:["Therapy and educational advocacy appointments are dedicated, reserved times for you. We kindly request at least ",n.jsx("strong",{children:"24 to 48 business hours notice"})," for cancellations or rescheduling requests to allow other waiting clients access to that time slot."]})]})]})]})}),n.jsx(zt,{title:"Questions About Fees or Scheduling?",subtitle:"Schedule a consultation to discuss our current rates, payment methods (HSA/FSA cards accepted), and package options."}),n.jsx("style",{children:`
        .fees-title {
          font-size: clamp(2.35rem, 4.2vw, 3.65rem);
          margin-top: 0.75rem;
          margin-bottom: 1rem;
        }

        .pathway-card {
          padding: 2.25rem 1.75rem;
          display: flex;
          flex-direction: column;
        }

        .pathway-icon-box {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .pathway-card h3 {
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
        }

        .pathway-card p {
          font-size: 0.9rem;
          line-height: 1.55;
          margin-bottom: 1.5rem;
        }

        .pathway-tag {
          margin-top: auto;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-forest);
          background-color: var(--color-linen);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
          align-self: flex-start;
        }

        .financial-policies-stack {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .policy-card {
          padding: 2.25rem 2rem;
        }

        .policy-card h3 {
          font-size: 1.25rem;
          color: var(--color-forest);
        }

        .policy-questions-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .policy-questions-list li {
          font-size: 0.94rem;
          color: var(--color-text-muted);
          position: relative;
          padding-left: 1.35rem;
          line-height: 1.5;
        }

        .policy-questions-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--color-terracotta);
          font-weight: 700;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .payment-pathways-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]}),ig=()=>{const[o,d]=P.useState({name:"",email:"",phone:"",subject:"General Question",message:"",privacyConfirmed:!1}),[c,m]=P.useState(!1),[h,g]=P.useState(!1),[w,b]=P.useState(!1),[N,T]=P.useState(""),k=M=>{const{name:G,value:J,type:q}=M.target;if(q==="checkbox"){const I=M.target.checked;d(te=>({...te,[G]:I}))}else d(I=>({...I,[G]:J}))},C=M=>{if(M.preventDefault(),T(""),!o.name.trim()||!o.email.trim()||!o.message.trim()){T("Please complete all required fields.");return}if(!o.privacyConfirmed){T("Please confirm that you have not included confidential health details.");return}m(!0),setTimeout(()=>{m(!1),g(!0),b(!0),ue("consultation_submitted",{source:"contact_form",subject:o.subject})},750)};return n.jsxs("div",{className:"contact-page",children:[n.jsx(Le,{title:"Contact GroWell Therapy Collective | Jessica Mouzon",description:"Get in touch with GroWell Therapy Collective. In-person therapy in North Carolina and secure telehealth across the state.",canonicalPath:"/contact"}),n.jsx("section",{className:"section section-bg-muted",style:{paddingBottom:"3rem"},children:n.jsxs("div",{className:"container container-narrow text-center",children:[n.jsx("span",{className:"badge badge-sage",children:"Get In Touch"}),n.jsx("h1",{className:"contact-title",children:"Contact & Locations"}),n.jsx("p",{className:"lead",children:"We are here to answer your questions and help you explore whether therapy, educational advocacy, or parent consultation is right for your family."})]})}),n.jsx("section",{className:"section",style:{paddingTop:"2.5rem"},children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"grid-2 contact-main-grid",children:[n.jsx("div",{className:"contact-info-col",children:n.jsxs("div",{className:"card card-tint contact-details-card",children:[n.jsx("h2",{className:"contact-col-heading",children:"Practice Information"}),n.jsx("p",{className:"contact-col-sub",children:"GroWell Therapy Collective operates on a hybrid care model offering both in-person appointments and statewide virtual telehealth."}),n.jsxs("div",{className:"contact-items-stack",children:[n.jsxs("div",{className:"contact-detail-row",children:[n.jsx("div",{className:"cd-icon-box",children:n.jsx(Xd,{size:22})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Office Location"}),n.jsx("p",{children:K.contact.officeAddress}),n.jsxs("p",{children:[K.contact.city,", ",K.contact.state]}),n.jsxs("span",{className:"cd-subtag",children:["Serving ",K.contact.serviceArea]})]})]}),n.jsxs("div",{className:"contact-detail-row",children:[n.jsx("div",{className:"cd-icon-box",children:n.jsx(Jd,{size:22})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Direct Email"}),n.jsx("p",{children:n.jsx("a",{href:`mailto:${K.contact.email}`,onClick:()=>ue("email_clicked",{source:"contact_page"}),children:K.contact.email})})]})]}),n.jsxs("div",{className:"contact-detail-row",children:[n.jsx("div",{className:"cd-icon-box",children:n.jsx(Zd,{size:22})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Phone & Inquiries"}),n.jsx("p",{children:n.jsx("a",{href:`tel:${K.contact.phone}`,onClick:()=>ue("phone_clicked",{source:"contact_page"}),children:K.contact.phone})})]})]}),n.jsxs("div",{className:"contact-detail-row",children:[n.jsx("div",{className:"cd-icon-box",children:n.jsx(Or,{size:22})}),n.jsxs("div",{children:[n.jsx("strong",{children:"Practice Hours"}),n.jsx("p",{children:K.contact.hours})]})]})]}),n.jsxs("div",{className:"consult-callout-box",children:[n.jsx("h4",{children:"Ready to schedule a free 15-min consultation?"}),n.jsx("p",{children:"Book directly through our streamlined consultation scheduling form."}),n.jsxs(B,{to:"/consultation",className:"btn btn-primary btn-sm",style:{marginTop:"0.75rem"},children:[n.jsx("span",{children:"Book a Consultation"}),n.jsx(Ae,{size:15})]})]})]})}),n.jsx("div",{className:"contact-form-col",children:n.jsxs("div",{className:"card form-container-card",children:[n.jsx("h2",{className:"contact-col-heading",children:"Send a General Message"}),n.jsx("p",{className:"contact-col-sub",children:"Have a quick question about our practice or services? Send us a note below."}),n.jsxs("div",{className:"notice-box notice-warning",style:{margin:"1.25rem 0 1.75rem"},children:[n.jsx(ea,{size:20,className:"notice-icon"}),n.jsx("div",{className:"notice-content",children:n.jsxs("p",{children:[n.jsx("strong",{children:"Privacy Notice:"})," Please do NOT submit sensitive medical records, detailed psychiatric history, or school documents through this general contact form."]})})]}),h?n.jsxs("div",{className:"submission-success-view text-center animate-fade-in",children:[n.jsx("div",{className:"success-icon-wrap",children:n.jsx(Ue,{size:44,className:"success-check-icon"})}),n.jsx("h3",{children:"Message Received!"}),n.jsxs("p",{style:{margin:"0.75rem 0 1.5rem"},children:["Thank you for reaching out, ",o.name,". We will get back to you within 1–2 business days."]}),n.jsx("button",{type:"button",className:"btn btn-outline btn-sm",onClick:()=>g(!1),children:"Send Another Note"})]}):n.jsxs("form",{onSubmit:C,noValidate:!0,children:[N&&n.jsxs("div",{className:"notice-box notice-danger",children:[n.jsx(na,{size:18,className:"notice-icon"}),n.jsx("div",{className:"notice-content",children:n.jsx("p",{children:N})})]}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"name",children:["Your Full Name ",n.jsx("span",{className:"required-mark",children:"*"})]}),n.jsx("input",{type:"text",id:"name",name:"name",className:"form-control",placeholder:"e.g. Alex Morgan",value:o.name,onChange:k,required:!0})]}),n.jsxs("div",{className:"grid-2",children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"email",children:["Email Address ",n.jsx("span",{className:"required-mark",children:"*"})]}),n.jsx("input",{type:"email",id:"email",name:"email",className:"form-control",placeholder:"name@example.com",value:o.email,onChange:k,required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",htmlFor:"phone",children:"Phone Number"}),n.jsx("input",{type:"tel",id:"phone",name:"phone",className:"form-control",placeholder:"(555) 000-0000",value:o.phone,onChange:k})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Subject"}),n.jsxs("select",{name:"subject",className:"form-control",value:o.subject,onChange:k,children:[n.jsx("option",{value:"General Question",children:"General Practice Question"}),n.jsx("option",{value:"Therapy Inquiry",children:"Therapy Services (Adolescent / Adult)"}),n.jsx("option",{value:"Advocacy Inquiry",children:"Educational / IEP Advocacy"}),n.jsx("option",{value:"Workshops",children:"Workshops & Speaking"}),n.jsx("option",{value:"Other",children:"Other Inquiry"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",htmlFor:"message",children:["Message ",n.jsx("span",{className:"required-mark",children:"*"})]}),n.jsx("textarea",{id:"message",name:"message",className:"form-control",placeholder:"How can we assist you? Please keep descriptions non-clinical...",rows:4,value:o.message,onChange:k,required:!0})]}),n.jsx("div",{className:"privacy-checkbox-row",style:{marginTop:"1.25rem"},children:n.jsxs("label",{className:"checkbox-label-container",children:[n.jsx("input",{type:"checkbox",name:"privacyConfirmed",checked:o.privacyConfirmed,onChange:k,required:!0}),n.jsxs("span",{className:"checkbox-text",children:["I understand that this form is for general inquiries and I have not included confidential medical or health history. ",n.jsx("span",{className:"required-mark",children:"*"})]})]})}),n.jsx("button",{type:"submit",className:"btn btn-primary btn-lg full-width-btn",disabled:c,style:{marginTop:"1.5rem"},children:c?"Sending Message...":"Send Message"})]})]})})]})})}),n.jsx(po,{show:w,type:"success",title:"Message Sent",message:"Thank you! Jessica Mouzon will respond within 1–2 business days.",onClose:()=>b(!1)}),n.jsx("style",{children:`
        .contact-title {
          font-size: clamp(2.35rem, 4.2vw, 3.65rem);
          margin-top: 0.75rem;
          margin-bottom: 1rem;
        }

        .contact-col-heading {
          font-size: 1.45rem;
          color: var(--color-forest);
          margin-bottom: 0.5rem;
        }

        .contact-col-sub {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin-bottom: 2rem;
        }

        .contact-details-card, .form-container-card {
          padding: 3rem 2.5rem;
        }

        .contact-items-stack {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          margin-bottom: 2.5rem;
        }

        .contact-detail-row {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .cd-icon-box {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          background-color: var(--color-sage-tint);
          color: var(--color-sage);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-detail-row strong {
          display: block;
          font-size: 0.96rem;
          color: var(--color-forest);
          margin-bottom: 0.15rem;
        }

        .contact-detail-row p {
          font-size: 0.92rem;
          margin: 0;
        }

        .cd-subtag {
          display: inline-block;
          font-size: 0.78rem;
          color: var(--color-text-light);
          font-style: italic;
          margin-top: 0.2rem;
        }

        .consult-callout-box {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1.5rem;
        }

        .consult-callout-box h4 {
          font-size: 1.05rem;
          color: var(--color-forest);
          margin-bottom: 0.35rem;
        }

        .consult-callout-box p {
          font-size: 0.88rem;
          margin: 0;
        }

        .checkbox-label-container {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          cursor: pointer;
        }

        .checkbox-label-container input {
          margin-top: 0.2rem;
          accent-color: var(--color-terracotta);
        }

        .checkbox-text {
          font-size: 0.84rem;
          line-height: 1.45;
          color: var(--color-text-main);
        }

        .full-width-btn {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .contact-details-card, .form-container-card {
            padding: 2rem 1.5rem;
          }
        }
      `})]})},ag=()=>n.jsxs("div",{className:"legal-page",children:[n.jsx(Le,{title:"Website Privacy Policy | GroWell Therapy Collective",description:"Public website privacy policy outlining data collection, cookie usage, analytics, and non-collection of protected health information on the marketing site.",canonicalPath:"/privacy-policy"}),n.jsx("section",{className:"section section-bg-muted",style:{paddingBottom:"3rem"},children:n.jsxs("div",{className:"container container-narrow",children:[n.jsx(B,{to:"/",className:"back-link",children:"← Return to Home"}),n.jsx("span",{className:"badge badge-forest",style:{marginTop:"1rem"},children:"Compliance & Privacy"}),n.jsx("h1",{className:"legal-title",children:"Website Privacy Policy"}),n.jsx("p",{className:"legal-updated",children:"Last Updated: September 2026"})]})}),n.jsx("section",{className:"section",style:{paddingTop:"2.5rem"},children:n.jsxs("div",{className:"container container-narrow legal-body-content",children:[n.jsxs("div",{className:"notice-box notice-sage",children:[n.jsx(ea,{size:22,className:"notice-icon"}),n.jsx("div",{className:"notice-content",children:n.jsxs("p",{children:[n.jsx("strong",{children:"Public Website Scope:"})," This Privacy Policy applies strictly to information collected through this public marketing website (growelltherapycollective.com). It does not govern protected health information (PHI) collected within our external, HIPAA-compliant client portal."]})})]}),n.jsx("h2",{children:"1. Information We Collect on This Website"}),n.jsx("p",{children:"When you interact with our public website, we may collect general, non-clinical information that you voluntarily provide when submitting an initial consultation request, contact inquiry, or workshop request. This information is limited to:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Contact details: First and last name, email address, phone number"}),n.jsx("li",{children:"Communication preferences and general availability"}),n.jsx("li",{children:'High-level, non-sensitive service interests (e.g. "Therapy", "Educational Advocacy")'})]}),n.jsx("p",{children:n.jsx("strong",{children:"We expressly request that you DO NOT submit sensitive personal health information (PHI), diagnostic histories, medications, or educational records through public website forms."})}),n.jsx("h2",{children:"2. How Information Is Used"}),n.jsx("p",{children:"We use the information provided solely to:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Respond to your direct inquiries and schedule initial consultation conversations"}),n.jsx("li",{children:"Coordinate organizational training and workshop proposals"}),n.jsx("li",{children:"Improve the functionality, accessibility, and navigation of our public website"})]}),n.jsx("h2",{children:"3. Cookies & Marketing Analytics"}),n.jsx("p",{children:"Our public website may utilize privacy-conscious, non-identifiable analytics cookies to analyze traffic patterns and page views. These analytics tools do not track or store sensitive clinical data. You can configure your browser to decline cookies if preferred."}),n.jsx("h2",{children:"4. Third-Party Client Portal & Clinical EHR"}),n.jsxs("p",{children:["When you become an active client, your clinical documentation, intake paperwork, telehealth video sessions, and billing records are managed through an external, HIPAA-compliant electronic health records (EHR) platform. That system is governed by our formal ",n.jsx(B,{to:"/notice-of-privacy-practices",children:"Notice of Privacy Practices"}),"."]}),n.jsx("h2",{children:"5. Contact Regarding Privacy"}),n.jsxs("p",{children:["If you have questions regarding this Website Privacy Policy, please reach out to:",n.jsx("br",{}),n.jsx("strong",{children:"GroWell Therapy Collective LLC"}),n.jsx("br",{}),"Attention: Privacy Officer",n.jsx("br",{}),"Email: ",K.contact.email]})]})}),n.jsx(fo,{})]}),sg=()=>n.jsxs("div",{className:"legal-page",children:[n.jsx(Le,{title:"Website Terms of Use | GroWell Therapy Collective",description:"Terms of Use for the public website of GroWell Therapy Collective LLC.",canonicalPath:"/terms"}),n.jsx("section",{className:"section section-bg-muted",style:{paddingBottom:"3rem"},children:n.jsxs("div",{className:"container container-narrow",children:[n.jsx(B,{to:"/",className:"back-link",children:"← Return to Home"}),n.jsx("span",{className:"badge badge-sand",style:{marginTop:"1rem"},children:"Legal Agreement"}),n.jsx("h1",{className:"legal-title",children:"Website Terms of Use"}),n.jsx("p",{className:"legal-updated",children:"Last Updated: September 2026"})]})}),n.jsx("section",{className:"section",style:{paddingTop:"2.5rem"},children:n.jsxs("div",{className:"container container-narrow legal-body-content",children:[n.jsx("h2",{children:"1. Acceptance of Terms"}),n.jsx("p",{children:"By accessing or using the website of GroWell Therapy Collective LLC, you agree to be bound by these Terms of Use and all applicable laws and regulations."}),n.jsx("h2",{children:"2. No Medical or Legal Advice"}),n.jsx("p",{children:"The content, articles, and resources provided on this website are for educational and informational purposes only. Website content does not establish a therapist-client or advocate-client relationship and should not be relied upon as professional psychological, psychiatric, or legal advice."}),n.jsx("h2",{children:"3. Emergency Situations"}),n.jsxs("p",{children:["This website is not monitored 24/7 and does not provide emergency medical services. If you are experiencing a mental health crisis or physical emergency, immediately call ",n.jsx("strong",{children:"911"})," or text/call ",n.jsx("strong",{children:"988"}),"."]}),n.jsx("h2",{children:"4. Intellectual Property"}),n.jsx("p",{children:"All original text, graphics, logos, and materials created by GroWell Therapy Collective LLC are protected by copyright and intellectual property laws."})]})}),n.jsx(fo,{})]}),og=()=>n.jsxs("div",{className:"legal-page",children:[n.jsx(Le,{title:"Notice of Privacy Practices (HIPAA) | GroWell Therapy Collective",description:"HIPAA Notice of Privacy Practices placeholder outlining clinical record confidentiality and rights.",canonicalPath:"/notice-of-privacy-practices"}),n.jsx("section",{className:"section section-bg-muted",style:{paddingBottom:"3rem"},children:n.jsxs("div",{className:"container container-narrow",children:[n.jsx(B,{to:"/",className:"back-link",children:"← Return to Home"}),n.jsx("span",{className:"badge badge-forest",style:{marginTop:"1rem"},children:"HIPAA Compliance"}),n.jsx("h1",{className:"legal-title",children:"Notice of Privacy Practices"}),n.jsx("p",{className:"legal-updated",children:"Effective Date: September 2026"})]})}),n.jsx("section",{className:"section",style:{paddingTop:"2.5rem"},children:n.jsxs("div",{className:"container container-narrow legal-body-content",children:[n.jsxs("div",{className:"notice-box notice-sage",children:[n.jsx(bf,{size:22,className:"notice-icon"}),n.jsx("div",{className:"notice-content",children:n.jsxs("p",{children:[n.jsx("strong",{children:"Summary of Patient Rights:"})," THIS NOTICE DESCRIBES HOW MEDICAL AND BEHAVIORAL HEALTH INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY."]})})]}),n.jsx("h2",{children:"1. Our Commitment to Your Health Information"}),n.jsx("p",{children:"GroWell Therapy Collective LLC is committed to maintaining the confidentiality of your Protected Health Information (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA) and state privacy regulations."}),n.jsx("h2",{children:"2. Permitted Uses and Disclosures"}),n.jsx("p",{children:"Your health information may be used and disclosed for purposes of:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Treatment:"})," Providing, coordinating, or managing mental health psychotherapy and clinical care."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Payment:"})," Generating billing statements or superbills for third-party insurance reimbursement with your consent."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Healthcare Operations:"})," Quality assessment, administrative audits, and compliance with licensing boards."]})]}),n.jsx("h2",{children:"3. Mandated Exceptions to Confidentiality"}),n.jsx("p",{children:"Under state and federal law, licensed mental health professionals are legally mandated to disclose confidential information without your consent in limited safety circumstances:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Reasonable suspicion of child abuse, elder abuse, or dependent adult abuse"}),n.jsx("li",{children:"Evidence of imminent, serious physical danger to yourself or an identifiable other person"}),n.jsx("li",{children:"Compliance with a valid court order or legally binding subpoena"})]}),n.jsx("h2",{children:"4. Client Portal Access to Full Document"}),n.jsxs("p",{children:["Current clients receive and sign the comprehensive, state-specific Notice of Privacy Practices and Informed Consent documentation during electronic onboarding in the secure ",n.jsx(B,{to:"/client-portal",children:"GroWell Client Portal"}),"."]})]})}),n.jsx(fo,{})]}),fo=()=>n.jsx("style",{children:`
    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--color-terracotta);
    }
    .back-link:hover {
      text-decoration: underline;
    }
    .legal-title {
      font-size: clamp(2.15rem, 3.8vw, 3.25rem);
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
    .legal-updated {
      font-size: 0.88rem;
      color: var(--color-text-light);
      margin: 0;
    }
    .legal-body-content h2 {
      font-family: var(--font-serif);
      font-size: 1.55rem;
      color: var(--color-forest);
      margin-top: 2rem;
      margin-bottom: 0.75rem;
    }
    .legal-body-content p {
      font-size: 1.02rem;
      line-height: 1.7;
      margin-bottom: 1.25rem;
      color: var(--color-text-main);
    }
    .legal-body-content ul {
      margin-bottom: 1.5rem;
      padding-left: 1.5rem;
    }
    .legal-body-content li {
      font-size: 0.98rem;
      line-height: 1.65;
      margin-bottom: 0.5rem;
      color: var(--color-text-muted);
    }
  `}),lg=()=>n.jsxs(lp,{basename:"/growell-therapy-collective/",children:[n.jsx(qf,{}),n.jsxs("div",{className:"app-layout",children:[n.jsx(Hf,{}),n.jsx(Wf,{}),n.jsx("main",{id:"main-content",className:"main-viewport",children:n.jsxs(tp,{children:[n.jsx(ze,{path:"/",element:n.jsx(Uf,{})}),n.jsx(ze,{path:"/about",element:n.jsx($f,{})}),n.jsx(ze,{path:"/therapy",element:n.jsx(Gf,{})}),n.jsx(ze,{path:"/emdr-therapy",element:n.jsx(Vf,{})}),n.jsx(ze,{path:"/educational-advocacy",element:n.jsx(Qf,{})}),n.jsx(ze,{path:"/our-approach",element:n.jsx(Yf,{})}),n.jsx(ze,{path:"/consultation",element:n.jsx(Kf,{})}),n.jsx(ze,{path:"/client-portal",element:n.jsx(Jf,{})}),n.jsx(ze,{path:"/resources",element:n.jsx(Zf,{})}),n.jsx(ze,{path:"/resources/:slug",element:n.jsx(eg,{})}),n.jsx(ze,{path:"/workshops",element:n.jsx(tg,{})}),n.jsx(ze,{path:"/faq",element:n.jsx(ng,{})}),n.jsx(ze,{path:"/insurance-fees",element:n.jsx(rg,{})}),n.jsx(ze,{path:"/contact",element:n.jsx(ig,{})}),n.jsx(ze,{path:"/privacy-policy",element:n.jsx(ag,{})}),n.jsx(ze,{path:"/terms",element:n.jsx(sg,{})}),n.jsx(ze,{path:"/notice-of-privacy-practices",element:n.jsx(og,{})}),n.jsx(ze,{path:"*",element:n.jsx($d,{to:"/",replace:!0})})]})}),n.jsx(Bf,{})]}),n.jsx("style",{children:`
        .app-layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .main-viewport {
          flex: 1 0 auto;
        }
      `})]});dh.createRoot(document.getElementById("root")).render(n.jsx(_d.StrictMode,{children:n.jsx(lg,{})}));
