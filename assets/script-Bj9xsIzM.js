(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const gd=()=>{};var Ca={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},_d=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],l=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Us={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,h=i+2<n.length,f=h?n[i+2]:0,_=o>>2,I=(o&3)<<4|l>>4;let A=(l&15)<<2|f>>6,P=f&63;h||(P=64,a||(A=64)),r.push(t[_],t[I],t[A],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ou(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):_d(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const f=i<n.length?t[n.charAt(i)]:64;++i;const I=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||l==null||f==null||I==null)throw new yd;const A=o<<2|l>>4;if(r.push(A),f!==64){const P=l<<4&240|f>>2;if(r.push(P),I!==64){const C=f<<6&192|I;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class yd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ed=function(n){const e=ou(n);return Us.encodeByteArray(e,!0)},Gr=function(n){return Ed(n).replace(/\./g,"")},au=function(n){try{return Us.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=()=>cu().__FIREBASE_DEFAULTS__,Id=()=>{if(typeof process>"u"||typeof Ca>"u")return;const n=Ca.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&au(n[1]);return e&&JSON.parse(e)},fi=()=>{try{return gd()||Td()||Id()||wd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},uu=n=>fi()?.emulatorHosts?.[n],lu=n=>{const e=uu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},hu=()=>fi()?.config,du=n=>fi()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Fs(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Gr(JSON.stringify(t)),Gr(JSON.stringify(a)),""].join(".")}const Ln={};function vd(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ln))Ln[e]?n.emulator.push(e):n.prod.push(e);return n}function Ad(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Na=!1;function Bs(n,e){if(typeof window>"u"||typeof document>"u"||!Rt(window.location.host)||Ln[n]===e||Ln[n]||Na)return;Ln[n]=e;function t(A){return`__firebase__banner__${A}`}const r="__firebase__banner",o=vd().prod.length>0;function a(){const A=document.getElementById(r);A&&A.remove()}function l(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function h(A,P){A.setAttribute("width","24"),A.setAttribute("id",P),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function f(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{Na=!0,a()},A}function _(A,P){A.setAttribute("id",P),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function I(){const A=Ad(r),P=t("text"),C=document.getElementById(P)||document.createElement("span"),O=t("learnmore"),k=document.getElementById(O)||document.createElement("a"),V=t("preprendIcon"),L=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const D=A.element;l(D),_(k,O);const U=f();h(L,V),D.append(L,C,k,U),document.body.appendChild(D)}o?(C.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function Rd(){const n=fi()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Sd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Pd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cd(){const n=we();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Nd(){return!Rd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function js(){try{return typeof indexedDB=="object"}catch{return!1}}function Od(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="FirebaseError";class We extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Dd,Object.setPrototypeOf(this,We.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hn.prototype.create)}}class hn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?Vd(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new We(i,l,r)}}function Vd(n,e){return n.replace(Md,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Md=/\{\$([^}]+)}/g;function Ld(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Lt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(Oa(o)&&Oa(a)){if(!Lt(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Oa(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xd(n,e){const t=new Ud(n,e);return t.subscribe.bind(t)}class Ud{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Fd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=es),i.error===void 0&&(i.error=es),i.complete===void 0&&(i.complete=es);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function es(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=1e3,jd=2,$d=14400*1e3,zd=.5;function Hd(n,e=Bd,t=jd){const r=e*Math.pow(t,n),i=Math.round(zd*r*(Math.random()-.5)*2);return Math.min($d,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(n){return n&&n._delegate?n._delegate:n}class Ke{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Hn;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gd(e))try{this.getOrInitializeService({instanceIdentifier:Nt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nt){return this.instances.has(e)}getOptions(e=Nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nt){return this.component?this.component.multipleInstances?e:Nt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qd(n){return n===Nt?void 0:n}function Gd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Kd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const Qd={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Xd=$.INFO,Jd={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Yd=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Jd[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pi{constructor(e){this.name=e,this._logLevel=Xd,this._logHandler=Yd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const Zd=(n,e)=>e.some(t=>n instanceof t);let Da,Va;function ef(){return Da||(Da=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tf(){return Va||(Va=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pu=new WeakMap,ms=new WeakMap,mu=new WeakMap,ts=new WeakMap,$s=new WeakMap;function nf(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(_t(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&pu.set(t,n)}).catch(()=>{}),$s.set(e,n),e}function rf(n){if(ms.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ms.set(n,e)}let gs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ms.get(n);if(e==="objectStoreNames")return n.objectStoreNames||mu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _t(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function sf(n){gs=n(gs)}function of(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ns(this),e,...t);return mu.set(r,e.sort?e.sort():[e]),_t(r)}:tf().includes(n)?function(...e){return n.apply(ns(this),e),_t(pu.get(this))}:function(...e){return _t(n.apply(ns(this),e))}}function af(n){return typeof n=="function"?of(n):(n instanceof IDBTransaction&&rf(n),Zd(n,ef())?new Proxy(n,gs):n)}function _t(n){if(n instanceof IDBRequest)return nf(n);if(ts.has(n))return ts.get(n);const e=af(n);return e!==n&&(ts.set(n,e),$s.set(e,n)),e}const ns=n=>$s.get(n);function cf(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),l=_t(a);return r&&a.addEventListener("upgradeneeded",h=>{r(_t(a.result),h.oldVersion,h.newVersion,_t(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const uf=["get","getKey","getAll","getAllKeys","count"],lf=["put","add","delete","clear"],rs=new Map;function Ma(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(rs.get(e))return rs.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=lf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uf.includes(t)))return;const o=async function(a,...l){const h=this.transaction(a,i?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[t](...l),i&&h.done]))[0]};return rs.set(e,o),o}sf(n=>({...n,get:(e,t,r)=>Ma(e,t)||n.get(e,t,r),has:(e,t)=>!!Ma(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(df(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function df(n){return n.getComponent()?.type==="VERSION"}const _s="@firebase/app",La="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=new pi("@firebase/app"),ff="@firebase/app-compat",pf="@firebase/analytics-compat",mf="@firebase/analytics",gf="@firebase/app-check-compat",_f="@firebase/app-check",yf="@firebase/auth",Ef="@firebase/auth-compat",Tf="@firebase/database",If="@firebase/data-connect",wf="@firebase/database-compat",vf="@firebase/functions",Af="@firebase/functions-compat",bf="@firebase/installations",Rf="@firebase/installations-compat",Sf="@firebase/messaging",kf="@firebase/messaging-compat",Pf="@firebase/performance",Cf="@firebase/performance-compat",Nf="@firebase/remote-config",Of="@firebase/remote-config-compat",Df="@firebase/storage",Vf="@firebase/storage-compat",Mf="@firebase/firestore",Lf="@firebase/ai",xf="@firebase/firestore-compat",Uf="firebase",Ff="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="[DEFAULT]",Bf={[_s]:"fire-core",[ff]:"fire-core-compat",[mf]:"fire-analytics",[pf]:"fire-analytics-compat",[_f]:"fire-app-check",[gf]:"fire-app-check-compat",[yf]:"fire-auth",[Ef]:"fire-auth-compat",[Tf]:"fire-rtdb",[If]:"fire-data-connect",[wf]:"fire-rtdb-compat",[vf]:"fire-fn",[Af]:"fire-fn-compat",[bf]:"fire-iid",[Rf]:"fire-iid-compat",[Sf]:"fire-fcm",[kf]:"fire-fcm-compat",[Pf]:"fire-perf",[Cf]:"fire-perf-compat",[Nf]:"fire-rc",[Of]:"fire-rc-compat",[Df]:"fire-gcs",[Vf]:"fire-gcs-compat",[Mf]:"fire-fst",[xf]:"fire-fst-compat",[Lf]:"fire-vertex","fire-js":"fire-js",[Uf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new Map,jf=new Map,Es=new Map;function xa(n,e){try{n.container.addComponent(e)}catch(t){nt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function rt(n){const e=n.name;if(Es.has(e))return nt.debug(`There were multiple attempts to register component ${e}.`),!1;Es.set(e,n);for(const t of Wr.values())xa(t,n);for(const t of jf.values())xa(t,n);return!0}function dn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function De(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yt=new hn("app","Firebase",$f);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ke("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=Ff;function gu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:ys,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw yt.create("bad-app-name",{appName:String(i)});if(t||(t=hu()),!t)throw yt.create("no-options");const o=Wr.get(i);if(o){if(Lt(t,o.options)&&Lt(r,o.config))return o;throw yt.create("duplicate-app",{appName:i})}const a=new Wd(i);for(const h of Es.values())a.addComponent(h);const l=new zf(t,r,a);return Wr.set(i,l),l}function mi(n=ys){const e=Wr.get(n);if(!e&&n===ys&&hu())return gu();if(!e)throw yt.create("no-app",{appName:n});return e}function Be(n,e,t){let r=Bf[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nt.warn(a.join(" "));return}rt(new Ke(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf="firebase-heartbeat-database",Kf=1,Kn="firebase-heartbeat-store";let is=null;function _u(){return is||(is=cf(Hf,Kf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Kn)}catch(t){console.warn(t)}}}}).catch(n=>{throw yt.create("idb-open",{originalErrorMessage:n.message})})),is}async function qf(n){try{const t=(await _u()).transaction(Kn),r=await t.objectStore(Kn).get(yu(n));return await t.done,r}catch(e){if(e instanceof We)nt.warn(e.message);else{const t=yt.create("idb-get",{originalErrorMessage:e?.message});nt.warn(t.message)}}}async function Ua(n,e){try{const r=(await _u()).transaction(Kn,"readwrite");await r.objectStore(Kn).put(e,yu(n)),await r.done}catch(t){if(t instanceof We)nt.warn(t.message);else{const r=yt.create("idb-set",{originalErrorMessage:t?.message});nt.warn(r.message)}}}function yu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=1024,Wf=30;class Qf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Jf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fa();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>Wf){const i=Yf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){nt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fa(),{heartbeatsToSend:t,unsentEntries:r}=Xf(this._heartbeatsCache.heartbeats),i=Gr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return nt.warn(e),""}}}function Fa(){return new Date().toISOString().substring(0,10)}function Xf(n,e=Gf){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Ba(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ba(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Jf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return js()?Od().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qf(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ua(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ua(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ba(n){return Gr(JSON.stringify({version:2,heartbeats:n})).length}function Yf(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(n){rt(new Ke("platform-logger",e=>new hf(e),"PRIVATE")),rt(new Ke("heartbeat",e=>new Qf(e),"PRIVATE")),Be(_s,La,n),Be(_s,La,"esm2020"),Be("fire-js","")}Zf("");function Eu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ep=Eu,Tu=new hn("auth","Firebase",Eu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new pi("@firebase/auth");function tp(n,...e){Qr.logLevel<=$.WARN&&Qr.warn(`Auth (${zt}): ${n}`,...e)}function Ur(n,...e){Qr.logLevel<=$.ERROR&&Qr.error(`Auth (${zt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(n,...e){throw zs(n,...e)}function ze(n,...e){return zs(n,...e)}function Iu(n,e,t){const r={...ep(),[e]:t};return new hn("auth","Firebase",r).create(e,{appName:n.name})}function Et(n){return Iu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zs(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Tu.create(n,...e)}function F(n,e,...t){if(!n)throw zs(e,...t)}function Je(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ur(e),new Error(e)}function st(n,e){n||Je(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(){return typeof self<"u"&&self.location?.href||""}function np(){return ja()==="http:"||ja()==="https:"}function ja(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(np()||kd()||"connection"in navigator)?navigator.onLine:!0}function ip(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t){this.shortDelay=e,this.longDelay=t,st(t>e,"Short delay should be less than long delay!"),this.isMobile=bd()||Pd()}get(){return rp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(n,e){st(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ap=new Zn(3e4,6e4);function gi(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function fn(n,e,t,r,i={}){return vu(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const l=Yn({key:n.config.apiKey,...a}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const f={method:e,headers:h,...o};return Sd()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&Rt(n.emulatorConfig.host)&&(f.credentials="include"),wu.fetch()(await bu(n,n.config.apiHost,t,l),f)})}async function vu(n,e,t){n._canInitEmulator=!1;const r={...sp,...e};try{const i=new cp(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Sr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[h,f]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sr(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Sr(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Sr(n,"user-disabled",a);const _=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Iu(n,_,f);it(n,_)}}catch(i){if(i instanceof We)throw i;it(n,"network-request-failed",{message:String(i)})}}async function Au(n,e,t,r,i={}){const o=await fn(n,e,t,r,i);return"mfaPendingCredential"in o&&it(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function bu(n,e,t,r){const i=`${e}${t}?${r}`,o=n,a=o.config.emulator?Hs(n.config,i):`${n.config.apiScheme}://${i}`;return op.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class cp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),ap.get())})}}function Sr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ze(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function up(n,e){return fn(n,"POST","/v1/accounts:delete",e)}async function Xr(n,e){return fn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lp(n,e=!1){const t=ve(n),r=await t.getIdToken(e),i=Ks(r);F(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o?.sign_in_provider;return{claims:i,token:r,authTime:xn(ss(i.auth_time)),issuedAtTime:xn(ss(i.iat)),expirationTime:xn(ss(i.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function ss(n){return Number(n)*1e3}function Ks(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ur("JWT malformed, contained fewer than 3 sections"),null;try{const i=au(t);return i?JSON.parse(i):(Ur("Failed to decode base64 JWT payload"),null)}catch(i){return Ur("Caught error parsing JWT payload as JSON",i?.toString()),null}}function $a(n){const e=Ks(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof We&&hp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function hp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=xn(this.lastLoginAt),this.creationTime=xn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(n){const e=n.auth,t=await n.getIdToken(),r=await qn(n,Xr(e,{idToken:t}));F(r?.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=i.providerUserInfo?.length?Ru(i.providerUserInfo):[],a=pp(n.providerData,o),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!a?.length,f=l?h:!1,_={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Is(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,_)}async function fp(n){const e=ve(n);await Jr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pp(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ru(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mp(n,e){const t=await vu(n,{},async()=>{const r=Yn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=await bu(n,i,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:l,body:r};return n.emulatorConfig&&Rt(n.emulatorConfig.host)&&(h.credentials="include"),wu.fetch()(a,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function gp(n,e){return fn(n,"POST","/v2/accounts:revokeToken",gi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$a(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=$a(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await mp(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new en;return r&&(F(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(F(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new en,this.toJSON())}_performRefresh(){return Je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ue{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new dp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Is(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await qn(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return lp(this,e)}reload(){return fp(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ue({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Jr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(De(this.auth.app))return Promise.reject(Et(this.auth));const e=await this.getIdToken();return await qn(this,up(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,h=t._redirectEventId??void 0,f=t.createdAt??void 0,_=t.lastLoginAt??void 0,{uid:I,emailVerified:A,isAnonymous:P,providerData:C,stsTokenManager:O}=t;F(I&&O,e,"internal-error");const k=en.fromJSON(this.name,O);F(typeof I=="string",e,"internal-error"),lt(r,e.name),lt(i,e.name),F(typeof A=="boolean",e,"internal-error"),F(typeof P=="boolean",e,"internal-error"),lt(o,e.name),lt(a,e.name),lt(l,e.name),lt(h,e.name),lt(f,e.name),lt(_,e.name);const V=new Ue({uid:I,auth:e,email:i,emailVerified:A,displayName:r,isAnonymous:P,photoURL:a,phoneNumber:o,tenantId:l,stsTokenManager:k,createdAt:f,lastLoginAt:_});return C&&Array.isArray(C)&&(V.providerData=C.map(L=>({...L}))),h&&(V._redirectEventId=h),V}static async _fromIdTokenResponse(e,t,r=!1){const i=new en;i.updateFromServerResponse(t);const o=new Ue({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Jr(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];F(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Ru(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!o?.length,l=new en;l.updateFromIdToken(r);const h=new Ue({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Is(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!o?.length};return Object.assign(h,f),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new Map;function Ye(n){st(n instanceof Function,"Expected a class definition");let e=za.get(n);return e?(st(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,za.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Su.type="NONE";const Ha=Su;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n,e,t){return`firebase:${n}:${e}:${t}`}class tn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Fr(this.userKey,i.apiKey,o),this.fullPersistenceKey=Fr("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Xr(this.auth,{idToken:e}).catch(()=>{});return t?Ue._fromGetAccountInfoResponse(this.auth,t,e):null}return Ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new tn(Ye(Ha),e,r);const i=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||Ye(Ha);const a=Fr(r,e.config.apiKey,e.name);let l=null;for(const f of t)try{const _=await f._get(a);if(_){let I;if(typeof _=="string"){const A=await Xr(e,{idToken:_}).catch(()=>{});if(!A)break;I=await Ue._fromGetAccountInfoResponse(e,A,_)}else I=Ue._fromJSON(e,_);f!==o&&(l=I),o=f;break}}catch{}const h=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new tn(o,e,r):(o=h[0],l&&await o._set(a,l.toJSON()),await Promise.all(t.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new tn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ku(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Du(e))return"Blackberry";if(Vu(e))return"Webos";if(Pu(e))return"Safari";if((e.includes("chrome/")||Cu(e))&&!e.includes("edge/"))return"Chrome";if(Ou(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function ku(n=we()){return/firefox\//i.test(n)}function Pu(n=we()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cu(n=we()){return/crios\//i.test(n)}function Nu(n=we()){return/iemobile/i.test(n)}function Ou(n=we()){return/android/i.test(n)}function Du(n=we()){return/blackberry/i.test(n)}function Vu(n=we()){return/webos/i.test(n)}function qs(n=we()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function _p(n=we()){return qs(n)&&!!window.navigator?.standalone}function yp(){return Cd()&&document.documentMode===10}function Mu(n=we()){return qs(n)||Ou(n)||Vu(n)||Du(n)||/windows phone/i.test(n)||Nu(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(n,e=[]){let t;switch(n){case"Browser":t=Ka(we());break;case"Worker":t=`${Ka(we())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${zt}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,l)=>{try{const h=e(o);a(h)}catch(h){l(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tp(n,e={}){return fn(n,"GET","/v2/passwordPolicy",gi(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=6;class wp{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Ip,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qa(this),this.idTokenSubscription=new qa(this),this.beforeStateQueue=new Ep(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ye(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await tn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xr(this,{idToken:e}),r=await Ue._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(De(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=this.redirectUser?._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&l?.user&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Jr(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ip()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(De(this.app))return Promise.reject(Et(this));const t=e?ve(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return De(this.app)?Promise.reject(Et(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return De(this.app)?Promise.reject(Et(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ye(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Tp(this),t=new wp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new hn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await gp(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ye(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await tn.create(this,[Ye(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(De(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&tp(`Error while retrieving App Check token: ${e.error}`),e?.token}}function _i(n){return ve(n)}class qa{constructor(e){this.auth=e,this.observer=null,this.addObserver=xd(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ap(n){Gs=n}function bp(n){return Gs.loadJS(n)}function Rp(){return Gs.gapiScript}function Sp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(n,e){const t=dn(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(Lt(o,e??{}))return i;it(i,"already-initialized")}return t.initialize({options:e})}function Pp(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Ye);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Cp(n,e,t){const r=_i(n);F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=xu(e),{host:a,port:l}=Np(e),h=l===null?"":`:${l}`,f={url:`${o}//${a}${h}/`},_=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){F(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),F(Lt(f,r.config.emulator)&&Lt(_,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=_,r.settings.appVerificationDisabledForTesting=!0,Rt(a)?(Fs(`${o}//${a}${h}`),Bs("Auth",!0)):Op()}function xu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Np(n){const e=xu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Ga(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Ga(a)}}}function Ga(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Op(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Je("not implemented")}_getIdTokenResponse(e){return Je("not implemented")}_linkToIdToken(e,t){return Je("not implemented")}_getReauthenticationResolver(e){return Je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(n,e){return Au(n,"POST","/v1/accounts:signInWithIdp",gi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="http://localhost";class xt extends Uu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):it("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...o}=t;if(!r||!i)return null;const a=new xt(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return nn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,nn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nn(e,t)}buildRequest(){const e={requestUri:Dp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Yn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Fu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends er{constructor(){super("facebook.com")}static credential(e){return xt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends er{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return xt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return dt.credential(t,r)}catch{return null}}}dt.GOOGLE_SIGN_IN_METHOD="google.com";dt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends er{constructor(){super("github.com")}static credential(e){return xt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.GITHUB_SIGN_IN_METHOD="github.com";ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends er{constructor(){super("twitter.com")}static credential(e,t){return xt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return pt.credential(t,r)}catch{return null}}}pt.TWITTER_SIGN_IN_METHOD="twitter.com";pt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vp(n,e){return Au(n,"POST","/v1/accounts:signUp",gi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await Ue._fromIdTokenResponse(e,r,i),a=Wa(r);return new It({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Wa(r);return new It({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Wa(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mp(n){if(De(n.app))return Promise.reject(Et(n));const e=_i(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new It({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await Vp(e,{returnSecureToken:!0}),r=await It._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends We{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Yr(e,t,r,i)}}function Bu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Yr._fromErrorAndOperation(n,o,e,r):o})}async function Lp(n,e,t=!1){const r=await qn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return It._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xp(n,e,t=!1){const{auth:r}=n;if(De(r.app))return Promise.reject(Et(r));const i="reauthenticate";try{const o=await qn(n,Bu(r,i,e,n),t);F(o.idToken,r,"internal-error");const a=Ks(o.idToken);F(a,r,"internal-error");const{sub:l}=a;return F(n.uid===l,r,"user-mismatch"),It._forOperation(n,i,o)}catch(o){throw o?.code==="auth/user-not-found"&&it(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Up(n,e,t=!1){if(De(n.app))return Promise.reject(Et(n));const r="signIn",i=await Bu(n,r,e),o=await It._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}function Fp(n,e,t,r){return ve(n).onIdTokenChanged(e,t,r)}function Bp(n,e,t){return ve(n).beforeAuthStateChanged(e,t)}const Zr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zr,"1"),this.storage.removeItem(Zr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=1e3,$p=10;class $u extends ju{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);yp()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$p):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},jp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$u.type="LOCAL";const zp=$u;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends ju{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zu.type="SESSION";const Hu=zu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new yi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async f=>f(t.origin,o)),h=await Hp(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,h)=>{const f=Ws("",20);i.port1.start();const _=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(I){const A=I;if(A.data.eventId===f)switch(A.data.status){case"ack":clearTimeout(_),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(A.data.response);break;default:clearTimeout(_),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return window}function qp(n){He().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(){return typeof He().WorkerGlobalScope<"u"&&typeof He().importScripts=="function"}async function Gp(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wp(){return navigator?.serviceWorker?.controller||null}function Qp(){return Ku()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="firebaseLocalStorageDb",Xp=1,ei="firebaseLocalStorage",Gu="fbase_key";class tr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ei(n,e){return n.transaction([ei],e?"readwrite":"readonly").objectStore(ei)}function Jp(){const n=indexedDB.deleteDatabase(qu);return new tr(n).toPromise()}function ws(){const n=indexedDB.open(qu,Xp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ei,{keyPath:Gu})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ei)?e(r):(r.close(),await Jp(),e(await ws()))})})}async function Qa(n,e,t){const r=Ei(n,!0).put({[Gu]:e,value:t});return new tr(r).toPromise()}async function Yp(n,e){const t=Ei(n,!1).get(e),r=await new tr(t).toPromise();return r===void 0?null:r.value}function Xa(n,e){const t=Ei(n,!0).delete(e);return new tr(t).toPromise()}const Zp=800,em=3;class Wu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ws(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>em)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ku()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yi._getInstance(Qp()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Gp(),!this.activeServiceWorker)return;this.sender=new Kp(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ws();return await Qa(e,Zr,"1"),await Xa(e,Zr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qa(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Yp(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xa(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Ei(i,!1).getAll();return new tr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wu.type="LOCAL";const tm=Wu;new Zn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(n,e){return e?Ye(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends Uu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rm(n){return Up(n.auth,new Qs(n),n.bypassAuthState)}function im(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),xp(t,new Qs(n),n.bypassAuthState)}async function sm(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Lp(t,new Qs(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rm;case"linkViaPopup":case"linkViaRedirect":return sm;case"reauthViaPopup":case"reauthViaRedirect":return im;default:it(this.auth,"internal-error")}}resolve(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=new Zn(2e3,1e4);class Yt extends Qu{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Yt.currentPopupAction&&Yt.currentPopupAction.cancel(),Yt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){st(this.filter.length===1,"Popup operations only handle one event");const e=Ws();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yt.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,om.get())};e()}}Yt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="pendingRedirect",Br=new Map;class cm extends Qu{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Br.get(this.auth._key());if(!e){try{const r=await um(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Br.set(this.auth._key(),e)}return this.bypassAuthState||Br.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function um(n,e){const t=dm(e),r=hm(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function lm(n,e){Br.set(n._key(),e)}function hm(n){return Ye(n._redirectPersistence)}function dm(n){return Fr(am,n.config.apiKey,n.name)}async function fm(n,e,t=!1){if(De(n.app))return Promise.reject(Et(n));const r=_i(n),i=nm(r,e),a=await new cm(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=600*1e3;class mm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Xu(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ze(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ja(e))}saveEventToCache(e){this.cachedEventUids.add(Ja(e)),this.lastProcessedEventTime=Date.now()}}function Ja(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Xu({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function gm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _m(n,e={}){return fn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Em=/^https?/;async function Tm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await _m(n);for(const t of e)try{if(Im(t))return}catch{}it(n,"unauthorized-domain")}function Im(n){const e=Ts(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Em.test(t))return!1;if(ym.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=new Zn(3e4,6e4);function Ya(){const n=He().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function vm(n){return new Promise((e,t)=>{function r(){Ya(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ya(),t(ze(n,"network-request-failed"))},timeout:wm.get()})}if(He().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(He().gapi?.load)r();else{const i=Sp("iframefcb");return He()[i]=()=>{gapi.load?r():t(ze(n,"network-request-failed"))},bp(`${Rp()}?onload=${i}`).catch(o=>t(o))}}).catch(e=>{throw jr=null,e})}let jr=null;function Am(n){return jr=jr||vm(n),jr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=new Zn(5e3,15e3),Rm="__/auth/iframe",Sm="emulator/auth/iframe",km={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cm(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Hs(e,Sm):`https://${n.config.authDomain}/${Rm}`,r={apiKey:e.apiKey,appName:n.name,v:zt},i=Pm.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Yn(r).slice(1)}`}async function Nm(n){const e=await Am(n),t=He().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:Cm(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:km,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=ze(n,"network-request-failed"),l=He().setTimeout(()=>{o(a)},bm.get());function h(){He().clearTimeout(l),i(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dm=500,Vm=600,Mm="_blank",Lm="http://localhost";class Za{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xm(n,e,t,r=Dm,i=Vm){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const h={...Om,width:r.toString(),height:i.toString(),top:o,left:a},f=we().toLowerCase();t&&(l=Cu(f)?Mm:t),ku(f)&&(e=e||Lm,h.scrollbars="yes");const _=Object.entries(h).reduce((A,[P,C])=>`${A}${P}=${C},`,"");if(_p(f)&&l!=="_self")return Um(e||"",l),new Za(null);const I=window.open(e||"",l,_);F(I,n,"popup-blocked");try{I.focus()}catch{}return new Za(I)}function Um(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm="__/auth/handler",Bm="emulator/auth/handler",jm=encodeURIComponent("fac");async function ec(n,e,t,r,i,o){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:zt,eventId:i};if(e instanceof Fu){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Ld(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,I]of Object.entries({}))a[_]=I}if(e instanceof er){const _=e.getScopes().filter(I=>I!=="");_.length>0&&(a.scopes=_.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const _ of Object.keys(l))l[_]===void 0&&delete l[_];const h=await n._getAppCheckToken(),f=h?`#${jm}=${encodeURIComponent(h)}`:"";return`${$m(n)}?${Yn(l).slice(1)}${f}`}function $m({config:n}){return n.emulator?Hs(n,Bm):`https://${n.authDomain}/${Fm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="webStorageSupport";class zm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hu,this._completeRedirectFn=fm,this._overrideRedirectResult=lm}async _openPopup(e,t,r,i){st(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const o=await ec(e,t,r,Ts(),i);return xm(e,o,Ws())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await ec(e,t,r,Ts(),i);return qp(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(st(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Nm(e),r=new mm(e);return t.register("authEvent",i=>(F(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(os,{type:os},i=>{const o=i?.[0]?.[os];o!==void 0&&t(!!o),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Tm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Mu()||Pu()||qs()}}const Hm=zm;var tc="@firebase/auth",nc="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Gm(n){rt(new Ke("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lu(n)},f=new vp(r,i,o,h);return Pp(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),rt(new Ke("auth-internal",e=>{const t=_i(e.getProvider("auth").getImmediate());return(r=>new Km(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Be(tc,nc,qm(n)),Be(tc,nc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=300,Qm=du("authIdTokenMaxAge")||Wm;let rc=null;const Xm=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Qm)return;const i=t?.token;rc!==i&&(rc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Jm(n=mi()){const e=dn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=kp(n,{popupRedirectResolver:Hm,persistence:[tm,zp,Hu]}),r=du("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Xm(o.toString());Bp(t,a,()=>a(t.currentUser)),Fp(t,l=>a(l))}}const i=uu("auth");return i&&Cp(t,`http://${i}`),t}function Ym(){return document.getElementsByTagName("head")?.[0]??document}Ap({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=ze("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",Ym().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Gm("Browser");var Zm="firebase",eg="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Be(Zm,eg,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new Map,Ju={activated:!1,tokenObservers:[]},tg={initialized:!1,enabled:!1};function ie(n){return vs.get(n)||{...Ju}}function ng(n,e){return vs.set(n,e),vs.get(n)}function Ti(){return tg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="https://content-firebaseappcheck.googleapis.com/v1",rg="exchangeRecaptchaV3Token",ig="exchangeDebugToken",ic={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3},sg=1440*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,t,r,i,o){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=o,this.pending=null,this.nextErrorWaitInterval=i,i>o)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Hn,this.pending.promise.catch(t=>{}),await ag(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Hn,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function ag(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},Pe=new hn("appCheck","AppCheck",cg);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(n=!1){return n?self.grecaptcha?.enterprise:self.grecaptcha}function Xs(n){if(!ie(n).activated)throw Pe.create("use-before-activation",{appName:n.name})}function Zu(n){const e=Math.round(n/1e3),t=Math.floor(e/(3600*24)),r=Math.floor((e-t*3600*24)/3600),i=Math.floor((e-t*3600*24-r*3600)/60),o=e-t*3600*24-r*3600-i*60;let a="";return t&&(a+=kr(t)+"d:"),r&&(a+=kr(r)+"h:"),a+=kr(i)+"m:"+kr(o)+"s",a}function kr(n){return n===0?"00":n>=10?n.toString():"0"+n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js({url:n,body:e},t){const r={"Content-Type":"application/json"},i=t.getImmediate({optional:!0});if(i){const I=await i.getHeartbeatsHeader();I&&(r["X-Firebase-Client"]=I)}const o={method:"POST",body:JSON.stringify(e),headers:r};let a;try{a=await fetch(n,o)}catch(I){throw Pe.create("fetch-network-error",{originalErrorMessage:I?.message})}if(a.status!==200)throw Pe.create("fetch-status-error",{httpStatus:a.status});let l;try{l=await a.json()}catch(I){throw Pe.create("fetch-parse-error",{originalErrorMessage:I?.message})}const h=l.ttl.match(/^([\d.]+)(s)$/);if(!h||!h[2]||isNaN(Number(h[1])))throw Pe.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${l.ttl}`});const f=Number(h[1])*1e3,_=Date.now();return{token:l.token,expireTimeMillis:_+f,issuedAtTimeMillis:_}}function ug(n,e){const{projectId:t,appId:r,apiKey:i}=n.options;return{url:`${Yu}/projects/${t}/apps/${r}:${rg}?key=${i}`,body:{recaptcha_v3_token:e}}}function el(n,e){const{projectId:t,appId:r,apiKey:i}=n.options;return{url:`${Yu}/projects/${t}/apps/${r}:${ig}?key=${i}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="firebase-app-check-database",hg=1,Gn="firebase-app-check-store",tl="debug-token";let Pr=null;function nl(){return Pr||(Pr=new Promise((n,e)=>{try{const t=indexedDB.open(lg,hg);t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{e(Pe.create("storage-open",{originalErrorMessage:r.target.error?.message}))},t.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(Gn,{keyPath:"compositeKey"})}}}catch(t){e(Pe.create("storage-open",{originalErrorMessage:t?.message}))}}),Pr)}function dg(n){return il(sl(n))}function fg(n,e){return rl(sl(n),e)}function pg(n){return rl(tl,n)}function mg(){return il(tl)}async function rl(n,e){const r=(await nl()).transaction(Gn,"readwrite"),o=r.objectStore(Gn).put({compositeKey:n,value:e});return new Promise((a,l)=>{o.onsuccess=h=>{a()},r.onerror=h=>{l(Pe.create("storage-set",{originalErrorMessage:h.target.error?.message}))}})}async function il(n){const t=(await nl()).transaction(Gn,"readonly"),i=t.objectStore(Gn).get(n);return new Promise((o,a)=>{i.onsuccess=l=>{const h=l.target.result;o(h?h.value:void 0)},t.onerror=l=>{a(Pe.create("storage-get",{originalErrorMessage:l.target.error?.message}))}})}function sl(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=new pi("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gg(n){if(js()){let e;try{e=await dg(n)}catch(t){gt.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return e}}function as(n,e){return js()?fg(n,e).catch(t=>{gt.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}async function _g(){let n;try{n=await mg()}catch{}if(n)return n;{const e=crypto.randomUUID();return pg(e).catch(t=>gt.warn(`Failed to persist debug token to IndexedDB. Error: ${t}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(){return Ti().enabled}async function Zs(){const n=Ti();if(n.enabled&&n.token)return n.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function yg(){const n=cu(),e=Ti();if(e.initialized=!0,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&n.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const t=new Hn;e.token=t,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?t.resolve(n.FIREBASE_APPCHECK_DEBUG_TOKEN):t.resolve(_g())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg={error:"UNKNOWN_ERROR"};function Tg(n){return Us.encodeString(JSON.stringify(n),!1)}async function As(n,e=!1,t=!1){const r=n.app;Xs(r);const i=ie(r);let o=i.token,a;if(o&&!Zt(o)&&(i.token=void 0,o=void 0),!o){const f=await i.cachedTokenPromise;f&&(Zt(f)?o=f:await as(r,void 0))}if(!e&&o&&Zt(o))return{token:o.token};let l=!1;if(Ys())try{i.exchangeTokenPromise||(i.exchangeTokenPromise=Js(el(r,await Zs()),n.heartbeatServiceProvider).finally(()=>{i.exchangeTokenPromise=void 0}),l=!0);const f=await i.exchangeTokenPromise;return await as(r,f),i.token=f,{token:f.token}}catch(f){return f.code==="appCheck/throttled"||f.code==="appCheck/initial-throttle"?gt.warn(f.message):t&&gt.error(f),cs(f)}try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),l=!0),o=await ie(r).exchangeTokenPromise}catch(f){f.code==="appCheck/throttled"||f.code==="appCheck/initial-throttle"?gt.warn(f.message):t&&gt.error(f),a=f}let h;return o?a?Zt(o)?h={token:o.token,internalError:a}:h=cs(a):(h={token:o.token},i.token=o,await as(r,o)):h=cs(a),l&&cl(r,h),h}async function Ig(n){const e=n.app;Xs(e);const{provider:t}=ie(e);if(Ys()){const r=await Zs(),{token:i}=await Js(el(e,r),n.heartbeatServiceProvider);return{token:i}}else{const{token:r}=await t.getToken();return{token:r}}}function ol(n,e,t,r){const{app:i}=n,o=ie(i),a={next:t,error:r,type:e};if(o.tokenObservers=[...o.tokenObservers,a],o.token&&Zt(o.token)){const l=o.token;Promise.resolve().then(()=>{t({token:l.token}),oc(n)}).catch(()=>{})}o.cachedTokenPromise.then(()=>oc(n))}function al(n,e){const t=ie(n),r=t.tokenObservers.filter(i=>i.next!==e);r.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=r}function oc(n){const{app:e}=n,t=ie(e);let r=t.tokenRefresher;r||(r=wg(n),t.tokenRefresher=r),!r.isRunning()&&t.isTokenAutoRefreshEnabled&&r.start()}function wg(n){const{app:e}=n;return new og(async()=>{const t=ie(e);let r;if(t.token?r=await As(n,!0):r=await As(n),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const t=ie(e);if(t.token){let r=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const i=t.token.expireTimeMillis-300*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},ic.RETRIAL_MIN_WAIT,ic.RETRIAL_MAX_WAIT)}function cl(n,e){const t=ie(n).tokenObservers;for(const r of t)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Zt(n){return n.expireTimeMillis-Date.now()>0}function cs(n){return{token:Tg(Eg),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=ie(this.app);for(const t of e)al(this.app,t.next);return Promise.resolve()}}function Ag(n,e){return new vg(n,e)}function bg(n){return{getToken:e=>As(n,e),getLimitedUseToken:()=>Ig(n),addTokenListener:e=>ol(n,"INTERNAL",e),removeTokenListener:e=>al(n.app,e)}}const Rg="@firebase/app-check",Sg="0.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg="https://www.google.com/recaptcha/api.js";function Pg(n,e){const t=new Hn,r=ie(n);r.reCAPTCHAState={initialized:t};const i=Cg(n),o=sc(!1);return o?ac(n,e,o,i,t):Dg(()=>{const a=sc(!1);if(!a)throw new Error("no recaptcha");ac(n,e,a,i,t)}),t.promise}function ac(n,e,t,r,i){t.ready(()=>{Og(n,e,t,r),i.resolve(t)})}function Cg(n){const e=`fire_app_check_${n.name}`,t=document.createElement("div");return t.id=e,t.style.display="none",document.body.appendChild(t),e}async function Ng(n){Xs(n);const t=await ie(n).reCAPTCHAState.initialized.promise;return new Promise((r,i)=>{const o=ie(n).reCAPTCHAState;t.ready(()=>{r(t.execute(o.widgetId,{action:"fire_app_check"}))})})}function Og(n,e,t,r){const i=t.render(r,{sitekey:e,size:"invisible",callback:()=>{ie(n).reCAPTCHAState.succeeded=!0},"error-callback":()=>{ie(n).reCAPTCHAState.succeeded=!1}}),o=ie(n);o.reCAPTCHAState={...o.reCAPTCHAState,widgetId:i}}function Dg(n){const e=document.createElement("script");e.src=kg,e.onload=n,document.head.appendChild(e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){Mg(this._throttleData);const e=await Ng(this._app).catch(r=>{throw Pe.create("recaptcha-error")});if(!ie(this._app).reCAPTCHAState?.succeeded)throw Pe.create("recaptcha-error");let t;try{t=await Js(ug(this._app,e),this._heartbeatServiceProvider)}catch(r){throw r.code?.includes("fetch-status-error")?(this._throttleData=Vg(Number(r.customData?.httpStatus),this._throttleData),Pe.create("initial-throttle",{time:Zu(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):r}return this._throttleData=null,t}initialize(e){this._app=e,this._heartbeatServiceProvider=dn(e,"heartbeat"),Pg(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof eo?this._siteKey===e._siteKey:!1}}function Vg(n,e){if(n===404||n===403)return{backoffCount:1,allowRequestsAfter:Date.now()+sg,httpStatus:n};{const t=e?e.backoffCount:0,r=Hd(t,1e3,2);return{backoffCount:t+1,allowRequestsAfter:Date.now()+r,httpStatus:n}}}function Mg(n){if(n&&Date.now()-n.allowRequestsAfter<=0)throw Pe.create("throttled",{time:Zu(n.allowRequestsAfter-Date.now()),httpStatus:n.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(n=mi(),e){n=ve(n);const t=dn(n,"app-check");if(Ti().initialized||yg(),Ys()&&Zs().then(i=>console.log(`App Check debug token: ${i}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(o.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&o.provider.isEqual(e.provider))return i;throw Pe.create("already-initialized",{appName:n.name})}const r=t.initialize({options:e});return xg(n,e.provider,e.isTokenAutoRefreshEnabled),ie(n).isTokenAutoRefreshEnabled&&ol(r,"INTERNAL",()=>{}),r}function xg(n,e,t=!1){const r=ng(n,{...Ju});r.activated=!0,r.provider=e,r.cachedTokenPromise=gg(n).then(i=>(i&&Zt(i)&&(r.token=i,cl(n,{token:i.token})),i)),r.isTokenAutoRefreshEnabled=t&&n.automaticDataCollectionEnabled,!n.automaticDataCollectionEnabled&&t&&gt.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),r.provider.initialize(n)}function Ug(n,e){const t=n.app,r=ie(t);r.tokenRefresher&&r.tokenRefresher.start(),r.isTokenAutoRefreshEnabled=e}const Fg="app-check",cc="app-check-internal";function Bg(){rt(new Ke(Fg,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return Ag(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(cc).initialize()})),rt(new Ke(cc,n=>{const e=n.getProvider("app-check").getImmediate();return bg(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Be(Rg,Sg)}Bg();var uc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var to;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,p){function g(){}g.prototype=p.prototype,T.D=p.prototype,T.prototype=new g,T.prototype.constructor=T,T.C=function(y,E,w){for(var m=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)m[fe-2]=arguments[fe];return p.prototype[E].apply(y,m)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,p,g){g||(g=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(E=0;16>E;++E)y[E]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=T.g[0],g=T.g[1],E=T.g[2];var w=T.g[3],m=p+(w^g&(E^w))+y[0]+3614090360&4294967295;p=g+(m<<7&4294967295|m>>>25),m=w+(E^p&(g^E))+y[1]+3905402710&4294967295,w=p+(m<<12&4294967295|m>>>20),m=E+(g^w&(p^g))+y[2]+606105819&4294967295,E=w+(m<<17&4294967295|m>>>15),m=g+(p^E&(w^p))+y[3]+3250441966&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(w^g&(E^w))+y[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=w+(E^p&(g^E))+y[5]+1200080426&4294967295,w=p+(m<<12&4294967295|m>>>20),m=E+(g^w&(p^g))+y[6]+2821735955&4294967295,E=w+(m<<17&4294967295|m>>>15),m=g+(p^E&(w^p))+y[7]+4249261313&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(w^g&(E^w))+y[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=w+(E^p&(g^E))+y[9]+2336552879&4294967295,w=p+(m<<12&4294967295|m>>>20),m=E+(g^w&(p^g))+y[10]+4294925233&4294967295,E=w+(m<<17&4294967295|m>>>15),m=g+(p^E&(w^p))+y[11]+2304563134&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(w^g&(E^w))+y[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=w+(E^p&(g^E))+y[13]+4254626195&4294967295,w=p+(m<<12&4294967295|m>>>20),m=E+(g^w&(p^g))+y[14]+2792965006&4294967295,E=w+(m<<17&4294967295|m>>>15),m=g+(p^E&(w^p))+y[15]+1236535329&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(E^w&(g^E))+y[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=w+(g^E&(p^g))+y[6]+3225465664&4294967295,w=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(w^p))+y[11]+643717713&4294967295,E=w+(m<<14&4294967295|m>>>18),m=g+(w^p&(E^w))+y[0]+3921069994&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^w&(g^E))+y[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=w+(g^E&(p^g))+y[10]+38016083&4294967295,w=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(w^p))+y[15]+3634488961&4294967295,E=w+(m<<14&4294967295|m>>>18),m=g+(w^p&(E^w))+y[4]+3889429448&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^w&(g^E))+y[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=w+(g^E&(p^g))+y[14]+3275163606&4294967295,w=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(w^p))+y[3]+4107603335&4294967295,E=w+(m<<14&4294967295|m>>>18),m=g+(w^p&(E^w))+y[8]+1163531501&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^w&(g^E))+y[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=w+(g^E&(p^g))+y[2]+4243563512&4294967295,w=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(w^p))+y[7]+1735328473&4294967295,E=w+(m<<14&4294967295|m>>>18),m=g+(w^p&(E^w))+y[12]+2368359562&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(g^E^w)+y[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=w+(p^g^E)+y[8]+2272392833&4294967295,w=p+(m<<11&4294967295|m>>>21),m=E+(w^p^g)+y[11]+1839030562&4294967295,E=w+(m<<16&4294967295|m>>>16),m=g+(E^w^p)+y[14]+4259657740&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^w)+y[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=w+(p^g^E)+y[4]+1272893353&4294967295,w=p+(m<<11&4294967295|m>>>21),m=E+(w^p^g)+y[7]+4139469664&4294967295,E=w+(m<<16&4294967295|m>>>16),m=g+(E^w^p)+y[10]+3200236656&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^w)+y[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=w+(p^g^E)+y[0]+3936430074&4294967295,w=p+(m<<11&4294967295|m>>>21),m=E+(w^p^g)+y[3]+3572445317&4294967295,E=w+(m<<16&4294967295|m>>>16),m=g+(E^w^p)+y[6]+76029189&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^w)+y[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=w+(p^g^E)+y[12]+3873151461&4294967295,w=p+(m<<11&4294967295|m>>>21),m=E+(w^p^g)+y[15]+530742520&4294967295,E=w+(m<<16&4294967295|m>>>16),m=g+(E^w^p)+y[2]+3299628645&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(E^(g|~w))+y[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=w+(g^(p|~E))+y[7]+1126891415&4294967295,w=p+(m<<10&4294967295|m>>>22),m=E+(p^(w|~g))+y[14]+2878612391&4294967295,E=w+(m<<15&4294967295|m>>>17),m=g+(w^(E|~p))+y[5]+4237533241&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~w))+y[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=w+(g^(p|~E))+y[3]+2399980690&4294967295,w=p+(m<<10&4294967295|m>>>22),m=E+(p^(w|~g))+y[10]+4293915773&4294967295,E=w+(m<<15&4294967295|m>>>17),m=g+(w^(E|~p))+y[1]+2240044497&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~w))+y[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=w+(g^(p|~E))+y[15]+4264355552&4294967295,w=p+(m<<10&4294967295|m>>>22),m=E+(p^(w|~g))+y[6]+2734768916&4294967295,E=w+(m<<15&4294967295|m>>>17),m=g+(w^(E|~p))+y[13]+1309151649&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~w))+y[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=w+(g^(p|~E))+y[11]+3174756917&4294967295,w=p+(m<<10&4294967295|m>>>22),m=E+(p^(w|~g))+y[2]+718787259&4294967295,E=w+(m<<15&4294967295|m>>>17),m=g+(w^(E|~p))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(E+(m<<21&4294967295|m>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+w&4294967295}r.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var g=p-this.blockSize,y=this.B,E=this.h,w=0;w<p;){if(E==0)for(;w<=g;)i(this,T,w),w+=this.blockSize;if(typeof T=="string"){for(;w<p;)if(y[E++]=T.charCodeAt(w++),E==this.blockSize){i(this,y),E=0;break}}else for(;w<p;)if(y[E++]=T[w++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var g=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=g&255,g/=256;for(this.u(T),T=Array(16),p=g=0;4>p;++p)for(var y=0;32>y;y+=8)T[g++]=this.g[p]>>>y&255;return T};function o(T,p){var g=l;return Object.prototype.hasOwnProperty.call(g,T)?g[T]:g[T]=p(T)}function a(T,p){this.h=p;for(var g=[],y=!0,E=T.length-1;0<=E;E--){var w=T[E]|0;y&&w==p||(g[E]=w,y=!1)}this.g=g}var l={};function h(T){return-128<=T&&128>T?o(T,function(p){return new a([p|0],0>p?-1:0)}):new a([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return I;if(0>T)return k(f(-T));for(var p=[],g=1,y=0;T>=g;y++)p[y]=T/g|0,g*=4294967296;return new a(p,0)}function _(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return k(_(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(p,8)),y=I,E=0;E<T.length;E+=8){var w=Math.min(8,T.length-E),m=parseInt(T.substring(E,E+w),p);8>w?(w=f(Math.pow(p,w)),y=y.j(w).add(f(m))):(y=y.j(g),y=y.add(f(m)))}return y}var I=h(0),A=h(1),P=h(16777216);n=a.prototype,n.m=function(){if(O(this))return-k(this).m();for(var T=0,p=1,g=0;g<this.g.length;g++){var y=this.i(g);T+=(0<=y?y:4294967296+y)*p,p*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(O(this))return"-"+k(this).toString(T);for(var p=f(Math.pow(T,6)),g=this,y="";;){var E=U(g,p).g;g=V(g,E.j(p));var w=((0<g.g.length?g.g[0]:g.h)>>>0).toString(T);if(g=E,C(g))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function O(T){return T.h==-1}n.l=function(T){return T=V(this,T),O(T)?-1:C(T)?0:1};function k(T){for(var p=T.g.length,g=[],y=0;y<p;y++)g[y]=~T.g[y];return new a(g,~T.h).add(A)}n.abs=function(){return O(this)?k(this):this},n.add=function(T){for(var p=Math.max(this.g.length,T.g.length),g=[],y=0,E=0;E<=p;E++){var w=y+(this.i(E)&65535)+(T.i(E)&65535),m=(w>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=m>>>16,w&=65535,m&=65535,g[E]=m<<16|w}return new a(g,g[g.length-1]&-2147483648?-1:0)};function V(T,p){return T.add(k(p))}n.j=function(T){if(C(this)||C(T))return I;if(O(this))return O(T)?k(this).j(k(T)):k(k(this).j(T));if(O(T))return k(this.j(k(T)));if(0>this.l(P)&&0>T.l(P))return f(this.m()*T.m());for(var p=this.g.length+T.g.length,g=[],y=0;y<2*p;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var w=this.i(y)>>>16,m=this.i(y)&65535,fe=T.i(E)>>>16,gn=T.i(E)&65535;g[2*y+2*E]+=m*gn,L(g,2*y+2*E),g[2*y+2*E+1]+=w*gn,L(g,2*y+2*E+1),g[2*y+2*E+1]+=m*fe,L(g,2*y+2*E+1),g[2*y+2*E+2]+=w*fe,L(g,2*y+2*E+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new a(g,0)};function L(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function D(T,p){this.g=T,this.h=p}function U(T,p){if(C(p))throw Error("division by zero");if(C(T))return new D(I,I);if(O(T))return p=U(k(T),p),new D(k(p.g),k(p.h));if(O(p))return p=U(T,k(p)),new D(k(p.g),p.h);if(30<T.g.length){if(O(T)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var g=A,y=p;0>=y.l(T);)g=Ae(g),y=Ae(y);var E=se(g,1),w=se(y,1);for(y=se(y,2),g=se(g,2);!C(y);){var m=w.add(y);0>=m.l(T)&&(E=E.add(g),w=m),y=se(y,1),g=se(g,1)}return p=V(T,E.j(p)),new D(E,p)}for(E=I;0<=T.l(p);){for(g=Math.max(1,Math.floor(T.m()/p.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=f(g),m=w.j(p);O(m)||0<m.l(T);)g-=y,w=f(g),m=w.j(p);C(w)&&(w=A),E=E.add(w),T=V(T,m)}return new D(E,T)}n.A=function(T){return U(this,T).h},n.and=function(T){for(var p=Math.max(this.g.length,T.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)&T.i(y);return new a(g,this.h&T.h)},n.or=function(T){for(var p=Math.max(this.g.length,T.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)|T.i(y);return new a(g,this.h|T.h)},n.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)^T.i(y);return new a(g,this.h^T.h)};function Ae(T){for(var p=T.g.length+1,g=[],y=0;y<p;y++)g[y]=T.i(y)<<1|T.i(y-1)>>>31;return new a(g,T.h)}function se(T,p){var g=p>>5;p%=32;for(var y=T.g.length-g,E=[],w=0;w<y;w++)E[w]=0<p?T.i(w+g)>>>p|T.i(w+g+1)<<32-p:T.i(w+g);return new a(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=_,to=a}).apply(typeof uc<"u"?uc:typeof self<"u"?self:typeof window<"u"?window:{});var Cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ul,Mn,ll,$r,bs,hl,dl,fl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,u){return s==Array.prototype||s==Object.prototype||(s[c]=u.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cr=="object"&&Cr];for(var c=0;c<s.length;++c){var u=s[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=t(this);function i(s,c){if(c)e:{var u=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var v=s[d];if(!(v in u))break e;u=u[v]}s=s[s.length-1],d=u[s],c=c(d),c!=d&&c!=null&&e(u,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var u=0,d=!1,v={next:function(){if(!d&&u<s.length){var b=u++;return{value:c(b,s[b]),done:!1}}return d=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function f(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function _(s,c,u){return s.call.apply(s.bind,arguments)}function I(s,c,u){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,d),s.apply(c,v)}}return function(){return s.apply(c,arguments)}}function A(s,c,u){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:I,A.apply(null,arguments)}function P(s,c){var u=Array.prototype.slice.call(arguments,1);return function(){var d=u.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function C(s,c){function u(){}u.prototype=c.prototype,s.aa=c.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(d,v,b){for(var N=Array(arguments.length-2),q=2;q<arguments.length;q++)N[q-2]=arguments[q];return c.prototype[v].apply(d,N)}}function O(s){const c=s.length;if(0<c){const u=Array(c);for(let d=0;d<c;d++)u[d]=s[d];return u}return[]}function k(s,c){for(let u=1;u<arguments.length;u++){const d=arguments[u];if(h(d)){const v=s.length||0,b=d.length||0;s.length=v+b;for(let N=0;N<b;N++)s[v+N]=d[N]}else s.push(d)}}class V{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(s){return/^[\s\xa0]*$/.test(s)}function D(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function U(s){return U[" "](s),s}U[" "]=function(){};var Ae=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function se(s,c,u){for(const d in s)c.call(u,s[d],d,s)}function T(s,c){for(const u in s)c.call(void 0,s[u],u,s)}function p(s){const c={};for(const u in s)c[u]=s[u];return c}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,c){let u,d;for(let v=1;v<arguments.length;v++){d=arguments[v];for(u in d)s[u]=d[u];for(let b=0;b<g.length;b++)u=g[b],Object.prototype.hasOwnProperty.call(d,u)&&(s[u]=d[u])}}function E(s){var c=1;s=s.split(":");const u=[];for(;0<c&&s.length;)u.push(s.shift()),c--;return s.length&&u.push(s.join(":")),u}function w(s){l.setTimeout(()=>{throw s},0)}function m(){var s=Ci;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class fe{constructor(){this.h=this.g=null}add(c,u){const d=gn.get();d.set(c,u),this.h?this.h.next=d:this.g=d,this.h=d}}var gn=new V(()=>new Mh,s=>s.reset());class Mh{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let _n,yn=!1,Ci=new fe,Co=()=>{const s=l.Promise.resolve(void 0);_n=()=>{s.then(Lh)}};var Lh=()=>{for(var s;s=m();){try{s.h.call(s.g)}catch(u){w(u)}var c=gn;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}yn=!1};function ot(){this.s=this.s,this.C=this.C}ot.prototype.s=!1,ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var xh=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};l.addEventListener("test",u,c),l.removeEventListener("test",u,c)}catch{}return s})();function En(s,c){if(pe.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(Ae){e:{try{U(c.nodeName);var v=!0;break e}catch{}v=!1}v||(c=null)}}else u=="mouseover"?c=s.fromElement:u=="mouseout"&&(c=s.toElement);this.relatedTarget=c,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Uh[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&En.aa.h.call(this)}}C(En,pe);var Uh={2:"touch",3:"pen",4:"mouse"};En.prototype.h=function(){En.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var cr="closure_listenable_"+(1e6*Math.random()|0),Fh=0;function Bh(s,c,u,d,v){this.listener=s,this.proxy=null,this.src=c,this.type=u,this.capture=!!d,this.ha=v,this.key=++Fh,this.da=this.fa=!1}function ur(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function lr(s){this.src=s,this.g={},this.h=0}lr.prototype.add=function(s,c,u,d,v){var b=s.toString();s=this.g[b],s||(s=this.g[b]=[],this.h++);var N=Oi(s,c,d,v);return-1<N?(c=s[N],u||(c.fa=!1)):(c=new Bh(c,this.src,b,!!d,v),c.fa=u,s.push(c)),c};function Ni(s,c){var u=c.type;if(u in s.g){var d=s.g[u],v=Array.prototype.indexOf.call(d,c,void 0),b;(b=0<=v)&&Array.prototype.splice.call(d,v,1),b&&(ur(c),s.g[u].length==0&&(delete s.g[u],s.h--))}}function Oi(s,c,u,d){for(var v=0;v<s.length;++v){var b=s[v];if(!b.da&&b.listener==c&&b.capture==!!u&&b.ha==d)return v}return-1}var Di="closure_lm_"+(1e6*Math.random()|0),Vi={};function No(s,c,u,d,v){if(Array.isArray(c)){for(var b=0;b<c.length;b++)No(s,c[b],u,d,v);return null}return u=Vo(u),s&&s[cr]?s.K(c,u,f(d)?!!d.capture:!1,v):jh(s,c,u,!1,d,v)}function jh(s,c,u,d,v,b){if(!c)throw Error("Invalid event type");var N=f(v)?!!v.capture:!!v,q=Li(s);if(q||(s[Di]=q=new lr(s)),u=q.add(c,u,d,N,b),u.proxy)return u;if(d=$h(),u.proxy=d,d.src=s,d.listener=u,s.addEventListener)xh||(v=N),v===void 0&&(v=!1),s.addEventListener(c.toString(),d,v);else if(s.attachEvent)s.attachEvent(Do(c.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return u}function $h(){function s(u){return c.call(s.src,s.listener,u)}const c=zh;return s}function Oo(s,c,u,d,v){if(Array.isArray(c))for(var b=0;b<c.length;b++)Oo(s,c[b],u,d,v);else d=f(d)?!!d.capture:!!d,u=Vo(u),s&&s[cr]?(s=s.i,c=String(c).toString(),c in s.g&&(b=s.g[c],u=Oi(b,u,d,v),-1<u&&(ur(b[u]),Array.prototype.splice.call(b,u,1),b.length==0&&(delete s.g[c],s.h--)))):s&&(s=Li(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Oi(c,u,d,v)),(u=-1<s?c[s]:null)&&Mi(u))}function Mi(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[cr])Ni(c.i,s);else{var u=s.type,d=s.proxy;c.removeEventListener?c.removeEventListener(u,d,s.capture):c.detachEvent?c.detachEvent(Do(u),d):c.addListener&&c.removeListener&&c.removeListener(d),(u=Li(c))?(Ni(u,s),u.h==0&&(u.src=null,c[Di]=null)):ur(s)}}}function Do(s){return s in Vi?Vi[s]:Vi[s]="on"+s}function zh(s,c){if(s.da)s=!0;else{c=new En(c,this);var u=s.listener,d=s.ha||s.src;s.fa&&Mi(s),s=u.call(d,c)}return s}function Li(s){return s=s[Di],s instanceof lr?s:null}var xi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vo(s){return typeof s=="function"?s:(s[xi]||(s[xi]=function(c){return s.handleEvent(c)}),s[xi])}function me(){ot.call(this),this.i=new lr(this),this.M=this,this.F=null}C(me,ot),me.prototype[cr]=!0,me.prototype.removeEventListener=function(s,c,u,d){Oo(this,s,c,u,d)};function be(s,c){var u,d=s.F;if(d)for(u=[];d;d=d.F)u.push(d);if(s=s.M,d=c.type||c,typeof c=="string")c=new pe(c,s);else if(c instanceof pe)c.target=c.target||s;else{var v=c;c=new pe(d,s),y(c,v)}if(v=!0,u)for(var b=u.length-1;0<=b;b--){var N=c.g=u[b];v=hr(N,d,!0,c)&&v}if(N=c.g=s,v=hr(N,d,!0,c)&&v,v=hr(N,d,!1,c)&&v,u)for(b=0;b<u.length;b++)N=c.g=u[b],v=hr(N,d,!1,c)&&v}me.prototype.N=function(){if(me.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var u=s.g[c],d=0;d<u.length;d++)ur(u[d]);delete s.g[c],s.h--}}this.F=null},me.prototype.K=function(s,c,u,d){return this.i.add(String(s),c,!1,u,d)},me.prototype.L=function(s,c,u,d){return this.i.add(String(s),c,!0,u,d)};function hr(s,c,u,d){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var v=!0,b=0;b<c.length;++b){var N=c[b];if(N&&!N.da&&N.capture==u){var q=N.listener,ce=N.ha||N.src;N.fa&&Ni(s.i,N),v=q.call(ce,d)!==!1&&v}}return v&&!d.defaultPrevented}function Mo(s,c,u){if(typeof s=="function")u&&(s=A(s,u));else if(s&&typeof s.handleEvent=="function")s=A(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(s,c||0)}function Lo(s){s.g=Mo(()=>{s.g=null,s.i&&(s.i=!1,Lo(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class Hh extends ot{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Lo(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tn(s){ot.call(this),this.h=s,this.g={}}C(Tn,ot);var xo=[];function Uo(s){se(s.g,function(c,u){this.g.hasOwnProperty(u)&&Mi(c)},s),s.g={}}Tn.prototype.N=function(){Tn.aa.N.call(this),Uo(this)},Tn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ui=l.JSON.stringify,Kh=l.JSON.parse,qh=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function Fi(){}Fi.prototype.h=null;function Fo(s){return s.h||(s.h=s.i())}function Bo(){}var In={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bi(){pe.call(this,"d")}C(Bi,pe);function ji(){pe.call(this,"c")}C(ji,pe);var St={},jo=null;function dr(){return jo=jo||new me}St.La="serverreachability";function $o(s){pe.call(this,St.La,s)}C($o,pe);function wn(s){const c=dr();be(c,new $o(c))}St.STAT_EVENT="statevent";function zo(s,c){pe.call(this,St.STAT_EVENT,s),this.stat=c}C(zo,pe);function Re(s){const c=dr();be(c,new zo(c,s))}St.Ma="timingevent";function Ho(s,c){pe.call(this,St.Ma,s),this.size=c}C(Ho,pe);function vn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},c)}function An(){this.g=!0}An.prototype.xa=function(){this.g=!1};function Gh(s,c,u,d,v,b){s.info(function(){if(s.g)if(b)for(var N="",q=b.split("&"),ce=0;ce<q.length;ce++){var H=q[ce].split("=");if(1<H.length){var ge=H[0];H=H[1];var _e=ge.split("_");N=2<=_e.length&&_e[1]=="type"?N+(ge+"="+H+"&"):N+(ge+"=redacted&")}}else N=null;else N=b;return"XMLHTTP REQ ("+d+") [attempt "+v+"]: "+c+`
`+u+`
`+N})}function Wh(s,c,u,d,v,b,N){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+v+"]: "+c+`
`+u+`
`+b+" "+N})}function qt(s,c,u,d){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+Xh(s,u)+(d?" "+d:"")})}function Qh(s,c){s.info(function(){return"TIMEOUT: "+c})}An.prototype.info=function(){};function Xh(s,c){if(!s.g)return c;if(!c)return null;try{var u=JSON.parse(c);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var d=u[s];if(!(2>d.length)){var v=d[1];if(Array.isArray(v)&&!(1>v.length)){var b=v[0];if(b!="noop"&&b!="stop"&&b!="close")for(var N=1;N<v.length;N++)v[N]=""}}}}return Ui(u)}catch{return c}}var fr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ko={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$i;function pr(){}C(pr,Fi),pr.prototype.g=function(){return new XMLHttpRequest},pr.prototype.i=function(){return{}},$i=new pr;function at(s,c,u,d){this.j=s,this.i=c,this.l=u,this.R=d||1,this.U=new Tn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qo}function qo(){this.i=null,this.g="",this.h=!1}var Go={},zi={};function Hi(s,c,u){s.L=1,s.v=yr(Qe(c)),s.m=u,s.P=!0,Wo(s,null)}function Wo(s,c){s.F=Date.now(),mr(s),s.A=Qe(s.v);var u=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),ca(u.i,"t",d),s.C=0,u=s.j.J,s.h=new qo,s.g=Ra(s.j,u?c:null,!s.m),0<s.O&&(s.M=new Hh(A(s.Y,s,s.g),s.O)),c=s.U,u=s.g,d=s.ca;var v="readystatechange";Array.isArray(v)||(v&&(xo[0]=v.toString()),v=xo);for(var b=0;b<v.length;b++){var N=No(u,v[b],d||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),wn(),Gh(s.i,s.u,s.A,s.l,s.R,s.m)}at.prototype.ca=function(s){s=s.target;const c=this.M;c&&Xe(s)==3?c.j():this.Y(s)},at.prototype.Y=function(s){try{if(s==this.g)e:{const _e=Xe(this.g);var c=this.g.Ba();const Qt=this.g.Z();if(!(3>_e)&&(_e!=3||this.g&&(this.h.h||this.g.oa()||ma(this.g)))){this.J||_e!=4||c==7||(c==8||0>=Qt?wn(3):wn(2)),Ki(this);var u=this.g.Z();this.X=u;t:if(Qo(this)){var d=ma(this.g);s="";var v=d.length,b=Xe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kt(this),bn(this);var N="";break t}this.h.i=new l.TextDecoder}for(c=0;c<v;c++)this.h.h=!0,s+=this.h.i.decode(d[c],{stream:!(b&&c==v-1)});d.length=0,this.h.g+=s,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=u==200,Wh(this.i,this.u,this.A,this.l,this.R,_e,u),this.o){if(this.T&&!this.K){t:{if(this.g){var q,ce=this.g;if((q=ce.g?ce.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(q)){var H=q;break t}}H=null}if(u=H)qt(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qi(this,u);else{this.o=!1,this.s=3,Re(12),kt(this),bn(this);break e}}if(this.P){u=!0;let Ve;for(;!this.J&&this.C<N.length;)if(Ve=Jh(this,N),Ve==zi){_e==4&&(this.s=4,Re(14),u=!1),qt(this.i,this.l,null,"[Incomplete Response]");break}else if(Ve==Go){this.s=4,Re(15),qt(this.i,this.l,N,"[Invalid Chunk]"),u=!1;break}else qt(this.i,this.l,Ve,null),qi(this,Ve);if(Qo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||N.length!=0||this.h.h||(this.s=1,Re(16),u=!1),this.o=this.o&&u,!u)qt(this.i,this.l,N,"[Invalid Chunked Response]"),kt(this),bn(this);else if(0<N.length&&!this.W){this.W=!0;var ge=this.j;ge.g==this&&ge.ba&&!ge.M&&(ge.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),Yi(ge),ge.M=!0,Re(11))}}else qt(this.i,this.l,N,null),qi(this,N);_e==4&&kt(this),this.o&&!this.J&&(_e==4?wa(this.j,this):(this.o=!1,mr(this)))}else pd(this.g),u==400&&0<N.indexOf("Unknown SID")?(this.s=3,Re(12)):(this.s=0,Re(13)),kt(this),bn(this)}}}catch{}finally{}};function Qo(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Jh(s,c){var u=s.C,d=c.indexOf(`
`,u);return d==-1?zi:(u=Number(c.substring(u,d)),isNaN(u)?Go:(d+=1,d+u>c.length?zi:(c=c.slice(d,d+u),s.C=d+u,c)))}at.prototype.cancel=function(){this.J=!0,kt(this)};function mr(s){s.S=Date.now()+s.I,Xo(s,s.I)}function Xo(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=vn(A(s.ba,s),c)}function Ki(s){s.B&&(l.clearTimeout(s.B),s.B=null)}at.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Qh(this.i,this.A),this.L!=2&&(wn(),Re(17)),kt(this),this.s=2,bn(this)):Xo(this,this.S-s)};function bn(s){s.j.G==0||s.J||wa(s.j,s)}function kt(s){Ki(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,Uo(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function qi(s,c){try{var u=s.j;if(u.G!=0&&(u.g==s||Gi(u.h,s))){if(!s.K&&Gi(u.h,s)&&u.G==3){try{var d=u.Da.g.parse(c)}catch{d=null}if(Array.isArray(d)&&d.length==3){var v=d;if(v[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)Ar(u),wr(u);else break e;Ji(u),Re(18)}}else u.za=v[1],0<u.za-u.T&&37500>v[2]&&u.F&&u.v==0&&!u.C&&(u.C=vn(A(u.Za,u),6e3));if(1>=Zo(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Ct(u,11)}else if((s.K||u.g==s)&&Ar(u),!L(c))for(v=u.Da.g.parse(c),c=0;c<v.length;c++){let H=v[c];if(u.T=H[0],H=H[1],u.G==2)if(H[0]=="c"){u.K=H[1],u.ia=H[2];const ge=H[3];ge!=null&&(u.la=ge,u.j.info("VER="+u.la));const _e=H[4];_e!=null&&(u.Aa=_e,u.j.info("SVER="+u.Aa));const Qt=H[5];Qt!=null&&typeof Qt=="number"&&0<Qt&&(d=1.5*Qt,u.L=d,u.j.info("backChannelRequestTimeoutMs_="+d)),d=u;const Ve=s.g;if(Ve){const Rr=Ve.g?Ve.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rr){var b=d.h;b.g||Rr.indexOf("spdy")==-1&&Rr.indexOf("quic")==-1&&Rr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Wi(b,b.h),b.h=null))}if(d.D){const Zi=Ve.g?Ve.g.getResponseHeader("X-HTTP-Session-Id"):null;Zi&&(d.ya=Zi,W(d.I,d.D,Zi))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),d=u;var N=s;if(d.qa=ba(d,d.J?d.ia:null,d.W),N.K){ea(d.h,N);var q=N,ce=d.L;ce&&(q.I=ce),q.B&&(Ki(q),mr(q)),d.g=N}else Ta(d);0<u.i.length&&vr(u)}else H[0]!="stop"&&H[0]!="close"||Ct(u,7);else u.G==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?Ct(u,7):Xi(u):H[0]!="noop"&&u.l&&u.l.ta(H),u.v=0)}}wn(4)}catch{}}var Yh=class{constructor(s,c){this.g=s,this.map=c}};function Jo(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yo(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Zo(s){return s.h?1:s.g?s.g.size:0}function Gi(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Wi(s,c){s.g?s.g.add(c):s.h=c}function ea(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Jo.prototype.cancel=function(){if(this.i=ta(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ta(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const u of s.g.values())c=c.concat(u.D);return c}return O(s.i)}function Zh(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var c=[],u=s.length,d=0;d<u;d++)c.push(s[d]);return c}c=[],u=0;for(d in s)c[u++]=s[d];return c}function ed(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var c=[];s=s.length;for(var u=0;u<s;u++)c.push(u);return c}c=[],u=0;for(const d in s)c[u++]=d;return c}}}function na(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var u=ed(s),d=Zh(s),v=d.length,b=0;b<v;b++)c.call(void 0,d[b],u&&u[b],s)}var ra=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function td(s,c){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var d=s[u].indexOf("="),v=null;if(0<=d){var b=s[u].substring(0,d);v=s[u].substring(d+1)}else b=s[u];c(b,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Pt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Pt){this.h=s.h,gr(this,s.j),this.o=s.o,this.g=s.g,_r(this,s.s),this.l=s.l;var c=s.i,u=new kn;u.i=c.i,c.g&&(u.g=new Map(c.g),u.h=c.h),ia(this,u),this.m=s.m}else s&&(c=String(s).match(ra))?(this.h=!1,gr(this,c[1]||"",!0),this.o=Rn(c[2]||""),this.g=Rn(c[3]||"",!0),_r(this,c[4]),this.l=Rn(c[5]||"",!0),ia(this,c[6]||"",!0),this.m=Rn(c[7]||"")):(this.h=!1,this.i=new kn(null,this.h))}Pt.prototype.toString=function(){var s=[],c=this.j;c&&s.push(Sn(c,sa,!0),":");var u=this.g;return(u||c=="file")&&(s.push("//"),(c=this.o)&&s.push(Sn(c,sa,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(Sn(u,u.charAt(0)=="/"?id:rd,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",Sn(u,od)),s.join("")};function Qe(s){return new Pt(s)}function gr(s,c,u){s.j=u?Rn(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function _r(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function ia(s,c,u){c instanceof kn?(s.i=c,ad(s.i,s.h)):(u||(c=Sn(c,sd)),s.i=new kn(c,s.h))}function W(s,c,u){s.i.set(c,u)}function yr(s){return W(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Rn(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Sn(s,c,u){return typeof s=="string"?(s=encodeURI(s).replace(c,nd),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function nd(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var sa=/[#\/\?@]/g,rd=/[#\?:]/g,id=/[#\?]/g,sd=/[#\?@]/g,od=/#/g;function kn(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function ct(s){s.g||(s.g=new Map,s.h=0,s.i&&td(s.i,function(c,u){s.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=kn.prototype,n.add=function(s,c){ct(this),this.i=null,s=Gt(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(c),this.h+=1,this};function oa(s,c){ct(s),c=Gt(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function aa(s,c){return ct(s),c=Gt(s,c),s.g.has(c)}n.forEach=function(s,c){ct(this),this.g.forEach(function(u,d){u.forEach(function(v){s.call(c,v,d,this)},this)},this)},n.na=function(){ct(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),u=[];for(let d=0;d<c.length;d++){const v=s[d];for(let b=0;b<v.length;b++)u.push(c[d])}return u},n.V=function(s){ct(this);let c=[];if(typeof s=="string")aa(this,s)&&(c=c.concat(this.g.get(Gt(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)c=c.concat(s[u])}return c},n.set=function(s,c){return ct(this),this.i=null,s=Gt(this,s),aa(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function ca(s,c,u){oa(s,c),0<u.length&&(s.i=null,s.g.set(Gt(s,c),O(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var u=0;u<c.length;u++){var d=c[u];const b=encodeURIComponent(String(d)),N=this.V(d);for(d=0;d<N.length;d++){var v=b;N[d]!==""&&(v+="="+encodeURIComponent(String(N[d]))),s.push(v)}}return this.i=s.join("&")};function Gt(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function ad(s,c){c&&!s.j&&(ct(s),s.i=null,s.g.forEach(function(u,d){var v=d.toLowerCase();d!=v&&(oa(this,d),ca(this,v,u))},s)),s.j=c}function cd(s,c){const u=new An;if(l.Image){const d=new Image;d.onload=P(ut,u,"TestLoadImage: loaded",!0,c,d),d.onerror=P(ut,u,"TestLoadImage: error",!1,c,d),d.onabort=P(ut,u,"TestLoadImage: abort",!1,c,d),d.ontimeout=P(ut,u,"TestLoadImage: timeout",!1,c,d),l.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else c(!1)}function ud(s,c){const u=new An,d=new AbortController,v=setTimeout(()=>{d.abort(),ut(u,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:d.signal}).then(b=>{clearTimeout(v),b.ok?ut(u,"TestPingServer: ok",!0,c):ut(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(v),ut(u,"TestPingServer: error",!1,c)})}function ut(s,c,u,d,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),d(u)}catch{}}function ld(){this.g=new qh}function hd(s,c,u){const d=u||"";try{na(s,function(v,b){let N=v;f(v)&&(N=Ui(v)),c.push(d+b+"="+encodeURIComponent(N))})}catch(v){throw c.push(d+"type="+encodeURIComponent("_badmap")),v}}function Er(s){this.l=s.Ub||null,this.j=s.eb||!1}C(Er,Fi),Er.prototype.g=function(){return new Tr(this.l,this.j)},Er.prototype.i=(function(s){return function(){return s}})({});function Tr(s,c){me.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Tr,me),n=Tr.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,Cn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ua(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function ua(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Pn(this):Cn(this),this.readyState==3&&ua(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Pn(this))},n.Qa=function(s){this.g&&(this.response=s,Pn(this))},n.ga=function(){this.g&&Pn(this)};function Pn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Cn(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=c.next();return s.join(`\r
`)};function Cn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Tr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function la(s){let c="";return se(s,function(u,d){c+=d,c+=":",c+=u,c+=`\r
`}),c}function Qi(s,c,u){e:{for(d in u){var d=!1;break e}d=!0}d||(u=la(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):W(s,c,u))}function Y(s){me.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Y,me);var dd=/^https?$/i,fd=["POST","PUT"];n=Y.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,u,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$i.g(),this.v=this.o?Fo(this.o):Fo($i),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(b){ha(this,b);return}if(s=u||"",u=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var v in d)u.set(v,d[v]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const b of d.keys())u.set(b,d.get(b));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(u.keys()).find(b=>b.toLowerCase()=="content-type"),v=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fd,c,void 0))||d||v||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,N]of u)this.g.setRequestHeader(b,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{pa(this),this.u=!0,this.g.send(s),this.u=!1}catch(b){ha(this,b)}};function ha(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,da(s),Ir(s)}function da(s){s.A||(s.A=!0,be(s,"complete"),be(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,be(this,"complete"),be(this,"abort"),Ir(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ir(this,!0)),Y.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?fa(this):this.bb())},n.bb=function(){fa(this)};function fa(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Xe(s)!=4||s.Z()!=2)){if(s.u&&Xe(s)==4)Mo(s.Ea,0,s);else if(be(s,"readystatechange"),Xe(s)==4){s.h=!1;try{const N=s.Z();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var u;if(!(u=c)){var d;if(d=N===0){var v=String(s.D).match(ra)[1]||null;!v&&l.self&&l.self.location&&(v=l.self.location.protocol.slice(0,-1)),d=!dd.test(v?v.toLowerCase():"")}u=d}if(u)be(s,"complete"),be(s,"success");else{s.m=6;try{var b=2<Xe(s)?s.g.statusText:""}catch{b=""}s.l=b+" ["+s.Z()+"]",da(s)}}finally{Ir(s)}}}}function Ir(s,c){if(s.g){pa(s);const u=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||be(s,"ready");try{u.onreadystatechange=d}catch{}}}function pa(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Xe(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Xe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),Kh(c)}};function ma(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function pd(s){const c={};s=(s.g&&2<=Xe(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(L(s[d]))continue;var u=E(s[d]);const v=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const b=c[v]||[];c[v]=b,b.push(u)}T(c,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Nn(s,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||c}function ga(s){this.Aa=0,this.i=[],this.j=new An,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Nn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Nn("baseRetryDelayMs",5e3,s),this.cb=Nn("retryDelaySeedMs",1e4,s),this.Wa=Nn("forwardChannelMaxRetries",2,s),this.wa=Nn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Jo(s&&s.concurrentRequestLimit),this.Da=new ld,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ga.prototype,n.la=8,n.G=1,n.connect=function(s,c,u,d){Re(0),this.W=s,this.H=c||{},u&&d!==void 0&&(this.H.OSID=u,this.H.OAID=d),this.F=this.X,this.I=ba(this,null,this.W),vr(this)};function Xi(s){if(_a(s),s.G==3){var c=s.U++,u=Qe(s.I);if(W(u,"SID",s.K),W(u,"RID",c),W(u,"TYPE","terminate"),On(s,u),c=new at(s,s.j,c),c.L=2,c.v=yr(Qe(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=c.v,u=!0),u||(c.g=Ra(c.j,null),c.g.ea(c.v)),c.F=Date.now(),mr(c)}Aa(s)}function wr(s){s.g&&(Yi(s),s.g.cancel(),s.g=null)}function _a(s){wr(s),s.u&&(l.clearTimeout(s.u),s.u=null),Ar(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function vr(s){if(!Yo(s.h)&&!s.s){s.s=!0;var c=s.Ga;_n||Co(),yn||(_n(),yn=!0),Ci.add(c,s),s.B=0}}function md(s,c){return Zo(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=vn(A(s.Ga,s,c),va(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const v=new at(this,this.j,s);let b=this.o;if(this.S&&(b?(b=p(b),y(b,this.S)):b=this.S),this.m!==null||this.O||(v.H=b,b=null),this.P)e:{for(var c=0,u=0;u<this.i.length;u++){t:{var d=this.i[u];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(c+=d,4096<c){c=u;break e}if(c===4096||u===this.i.length-1){c=u+1;break e}}c=1e3}else c=1e3;c=Ea(this,v,c),u=Qe(this.I),W(u,"RID",s),W(u,"CVER",22),this.D&&W(u,"X-HTTP-Session-Id",this.D),On(this,u),b&&(this.O?c="headers="+encodeURIComponent(String(la(b)))+"&"+c:this.m&&Qi(u,this.m,b)),Wi(this.h,v),this.Ua&&W(u,"TYPE","init"),this.P?(W(u,"$req",c),W(u,"SID","null"),v.T=!0,Hi(v,u,null)):Hi(v,u,c),this.G=2}}else this.G==3&&(s?ya(this,s):this.i.length==0||Yo(this.h)||ya(this))};function ya(s,c){var u;c?u=c.l:u=s.U++;const d=Qe(s.I);W(d,"SID",s.K),W(d,"RID",u),W(d,"AID",s.T),On(s,d),s.m&&s.o&&Qi(d,s.m,s.o),u=new at(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),c&&(s.i=c.D.concat(s.i)),c=Ea(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Wi(s.h,u),Hi(u,d,c)}function On(s,c){s.H&&se(s.H,function(u,d){W(c,d,u)}),s.l&&na({},function(u,d){W(c,d,u)})}function Ea(s,c,u){u=Math.min(s.i.length,u);var d=s.l?A(s.l.Na,s.l,s):null;e:{var v=s.i;let b=-1;for(;;){const N=["count="+u];b==-1?0<u?(b=v[0].g,N.push("ofs="+b)):b=0:N.push("ofs="+b);let q=!0;for(let ce=0;ce<u;ce++){let H=v[ce].g;const ge=v[ce].map;if(H-=b,0>H)b=Math.max(0,v[ce].g-100),q=!1;else try{hd(ge,N,"req"+H+"_")}catch{d&&d(ge)}}if(q){d=N.join("&");break e}}}return s=s.i.splice(0,u),c.D=s,d}function Ta(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;_n||Co(),yn||(_n(),yn=!0),Ci.add(c,s),s.v=0}}function Ji(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=vn(A(s.Fa,s),va(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Ia(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=vn(A(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Re(10),wr(this),Ia(this))};function Yi(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function Ia(s){s.g=new at(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=Qe(s.qa);W(c,"RID","rpc"),W(c,"SID",s.K),W(c,"AID",s.T),W(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&W(c,"TO",s.ja),W(c,"TYPE","xmlhttp"),On(s,c),s.m&&s.o&&Qi(c,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=yr(Qe(c)),u.m=null,u.P=!0,Wo(u,s)}n.Za=function(){this.C!=null&&(this.C=null,wr(this),Ji(this),Re(19))};function Ar(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function wa(s,c){var u=null;if(s.g==c){Ar(s),Yi(s),s.g=null;var d=2}else if(Gi(s.h,c))u=c.D,ea(s.h,c),d=1;else return;if(s.G!=0){if(c.o)if(d==1){u=c.m?c.m.length:0,c=Date.now()-c.F;var v=s.B;d=dr(),be(d,new Ho(d,u)),vr(s)}else Ta(s);else if(v=c.s,v==3||v==0&&0<c.X||!(d==1&&md(s,c)||d==2&&Ji(s)))switch(u&&0<u.length&&(c=s.h,c.i=c.i.concat(u)),v){case 1:Ct(s,5);break;case 4:Ct(s,10);break;case 3:Ct(s,6);break;default:Ct(s,2)}}}function va(s,c){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*c}function Ct(s,c){if(s.j.info("Error code "+c),c==2){var u=A(s.fb,s),d=s.Xa;const v=!d;d=new Pt(d||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||gr(d,"https"),yr(d),v?cd(d.toString(),u):ud(d.toString(),u)}else Re(2);s.G=0,s.l&&s.l.sa(c),Aa(s),_a(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function Aa(s){if(s.G=0,s.ka=[],s.l){const c=ta(s.h);(c.length!=0||s.i.length!=0)&&(k(s.ka,c),k(s.ka,s.i),s.h.i.length=0,O(s.i),s.i.length=0),s.l.ra()}}function ba(s,c,u){var d=u instanceof Pt?Qe(u):new Pt(u);if(d.g!="")c&&(d.g=c+"."+d.g),_r(d,d.s);else{var v=l.location;d=v.protocol,c=c?c+"."+v.hostname:v.hostname,v=+v.port;var b=new Pt(null);d&&gr(b,d),c&&(b.g=c),v&&_r(b,v),u&&(b.l=u),d=b}return u=s.D,c=s.ya,u&&c&&W(d,u,c),W(d,"VER",s.la),On(s,d),d}function Ra(s,c,u){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new Y(new Er({eb:u})):new Y(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sa(){}n=Sa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function br(){}br.prototype.g=function(s,c){return new Ne(s,c)};function Ne(s,c){me.call(this),this.g=new ga(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!L(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!L(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new Wt(this)}C(Ne,me),Ne.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ne.prototype.close=function(){Xi(this.g)},Ne.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=Ui(s),s=u);c.i.push(new Yh(c.Ya++,s)),c.G==3&&vr(c)},Ne.prototype.N=function(){this.g.l=null,delete this.j,Xi(this.g),delete this.g,Ne.aa.N.call(this)};function ka(s){Bi.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(const u in c){s=u;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}C(ka,Bi);function Pa(){ji.call(this),this.status=1}C(Pa,ji);function Wt(s){this.g=s}C(Wt,Sa),Wt.prototype.ua=function(){be(this.g,"a")},Wt.prototype.ta=function(s){be(this.g,new ka(s))},Wt.prototype.sa=function(s){be(this.g,new Pa)},Wt.prototype.ra=function(){be(this.g,"b")},br.prototype.createWebChannel=br.prototype.g,Ne.prototype.send=Ne.prototype.o,Ne.prototype.open=Ne.prototype.m,Ne.prototype.close=Ne.prototype.close,fl=function(){return new br},dl=function(){return dr()},hl=St,bs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fr.NO_ERROR=0,fr.TIMEOUT=8,fr.HTTP_ERROR=6,$r=fr,Ko.COMPLETE="complete",ll=Ko,Bo.EventType=In,In.OPEN="a",In.CLOSE="b",In.ERROR="c",In.MESSAGE="d",me.prototype.listen=me.prototype.K,Mn=Bo,Y.prototype.listenOnce=Y.prototype.L,Y.prototype.getLastError=Y.prototype.Ka,Y.prototype.getLastErrorCode=Y.prototype.Ba,Y.prototype.getStatus=Y.prototype.Z,Y.prototype.getResponseJson=Y.prototype.Oa,Y.prototype.getResponseText=Y.prototype.oa,Y.prototype.send=Y.prototype.ea,Y.prototype.setWithCredentials=Y.prototype.Ha,ul=Y}).apply(typeof Cr<"u"?Cr:typeof self<"u"?self:typeof window<"u"?window:{});const lc="@firebase/firestore",hc="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new pi("@firebase/firestore");function Xt(){return Ut.logLevel}function M(n,...e){if(Ut.logLevel<=$.DEBUG){const t=e.map(no);Ut.debug(`Firestore (${pn}): ${n}`,...t)}}function Ft(n,...e){if(Ut.logLevel<=$.ERROR){const t=e.map(no);Ut.error(`Firestore (${pn}): ${n}`,...t)}}function Ii(n,...e){if(Ut.logLevel<=$.WARN){const t=e.map(no);Ut.warn(`Firestore (${pn}): ${n}`,...t)}}function no(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,pl(n,r,t)}function pl(n,e,t){let r=`FIRESTORE (${pn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ft(r),new Error(r)}function Z(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||pl(e,i,r)}function G(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends We{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ee.UNAUTHENTICATED)))}shutdown(){}}class $g{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class zg{constructor(e){this.t=e,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new Dt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Dt,e.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const h=o;e.enqueueRetryable((async()=>{await h.promise,await i(this.currentUser)}))},l=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Dt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string",31837,{l:r}),new ml(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string",2055,{h:e}),new Ee(e)}}class Hg{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Kg{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Hg(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ee.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class dc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qg{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,De(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Z(this.o===void 0,3512);const r=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>r(o)))};const i=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new dc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Z(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new dc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Gg(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function K(n,e){return n<e?-1:n>e?1:0}function Rs(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),o=e.charAt(r);if(i!==o)return us(i)===us(o)?K(i,o):us(i)?1:-1}return K(n.length,e.length)}const Wg=55296,Qg=57343;function us(n){const e=n.charCodeAt(0);return e>=Wg&&e<=Qg}function on(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc="__name__";class je{constructor(e,t,r){t===void 0?t=0:t>e.length&&j(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&j(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return je.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof je?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=je.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return K(e.length,t.length)}static compareSegments(e,t){const r=je.isNumericId(e),i=je.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?je.extractNumericId(e).compare(je.extractNumericId(t)):Rs(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return to.fromString(e.substring(4,e.length-2))}}class J extends je{construct(e,t,r){return new J(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new J(t)}static emptyPath(){return new J([])}}const Xg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class he extends je{construct(e,t,r){return new he(e,t,r)}static isValidIdentifier(e){return Xg.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),he.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===fc}static keyField(){return new he([fc])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new x(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new x(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new x(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new he(t)}static emptyPath(){return new he([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(J.fromString(e))}static fromName(e){return new B(J.fromString(e).popFirst(5))}static empty(){return new B(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&J.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new J(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(n,e,t){if(!t)throw new x(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Jg(n,e,t,r){if(e===!0&&r===!0)throw new x(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function pc(n){if(!B.isDocumentKey(n))throw new x(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function mc(n){if(B.isDocumentKey(n))throw new x(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function _l(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function io(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":j(12329,{type:typeof n})}function yl(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new x(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=io(n);throw new x(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(n,e){const t={typeString:n};return e&&(t.value=e),t}function nr(n,e){if(!_l(n))throw new x(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${r}' field to equal '${o.value}'`;break}}if(t)throw new x(S.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=-62135596800,_c=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(e){return X.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*_c);return new X(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<gc)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_c}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(nr(e,X._jsonSchema))return new X(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-gc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:re("string",X._jsonSchemaVersion),seconds:re("number"),nanoseconds:re("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new X(0,0))}static max(){return new Q(new X(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=-1;function Yg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new X(t+1,0):new X(t,r));return new wt(i,B.empty(),e)}function Zg(n){return new wt(n.readTime,n.key,Wn)}class wt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new wt(Q.min(),B.empty(),Wn)}static max(){return new wt(Q.max(),B.empty(),Wn)}}function e_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:K(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class n_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==t_)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&j(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):R.reject(t)}static resolve(e){return new R(((t,r)=>{t(e)}))}static reject(e){return new R(((t,r)=>{r(e)}))}static waitFor(e){return new R(((t,r)=>{let i=0,o=0,a=!1;e.forEach((l=>{++i,l.next((()=>{++o,a&&o===i&&t()}),(h=>r(h)))})),a=!0,o===i&&t()}))}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next((i=>i?R.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,o)=>{r.push(t.call(this,i,o))})),this.waitFor(r)}static mapArray(e,t){return new R(((r,i)=>{const o=e.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;t(e[f]).next((_=>{a[f]=_,++l,l===o&&r(a)}),(_=>i(_)))}}))}static doWhile(e,t){return new R(((r,i)=>{const o=()=>{e()===!0?t().next((()=>{o()}),i):r()};o()}))}}function r_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function rr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}oo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=-1;function co(n){return n==null}function ti(n){return n===0&&1/n==-1/0}function i_(n){return typeof n=="number"&&Number.isInteger(n)&&!ti(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="";function s_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=yc(e)),e=o_(n.get(t),e);return yc(e)}function o_(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case El:t+="";break;default:t+=o}}return t}function yc(n){return n+El+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function mn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Tl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t){this.comparator=e,this.root=t||ue.EMPTY}insert(e,t){return new Ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ue.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ue.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nr(this.root,e,this.comparator,!0)}}class Nr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ue{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??ue.RED,this.left=i??ue.EMPTY,this.right=o??ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new ue(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw j(43730,{key:this.key,value:this.value});if(this.right.isRed())throw j(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw j(27949);return e+(this.isRed()?0:1)}}ue.EMPTY=null,ue.RED=!0,ue.BLACK=!1;ue.EMPTY=new class{constructor(){this.size=0}get key(){throw j(57766)}get value(){throw j(16141)}get color(){throw j(16727)}get left(){throw j(29726)}get right(){throw j(36894)}copy(e,t,r,i,o){return this}insert(e,t,r){return new ue(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Tc(this.data.getIterator())}getIteratorFrom(e){return new Tc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof de)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new de(this.comparator);return t.data=e,t}}class Tc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.fields=e,e.sort(he.comparator)}static empty(){return new Fe([])}unionWith(e){let t=new de(he.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Fe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return on(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new a_("Invalid base64 string: "+o):o}})(e);return new qe(t)}static fromUint8Array(e){const t=(function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o})(e);return new qe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const c_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bt(n){if(Z(!!n,39018),typeof n=="string"){let e=0;const t=c_.exec(n);if(Z(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:le(n.seconds),nanos:le(n.nanos)}}function le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function an(n){return typeof n=="string"?qe.fromBase64String(n):qe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="server_timestamp",wl="__type__",vl="__previous_value__",Al="__local_write_time__";function uo(n){return(n?.mapValue?.fields||{})[wl]?.stringValue===Il}function lo(n){const e=n.mapValue.fields[vl];return uo(e)?lo(e):e}function ni(n){const e=Bt(n.mapValue.fields[Al].timestampValue);return new X(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,t,r,i,o,a,l,h,f,_){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=_}}const ri="(default)";class ii{constructor(e,t){this.projectId=e,this.database=t||ri}static empty(){return new ii("","")}get isDefaultDatabase(){return this.database===ri}isEqual(e){return e instanceof ii&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="__type__",l_="__max__",Or={mapValue:{}},Rl="__vector__",Ss="value";function jt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?uo(n)?4:d_(n)?9007199254740991:h_(n)?10:11:j(28295,{value:n})}function Ge(n,e){if(n===e)return!0;const t=jt(n);if(t!==jt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ni(n).isEqual(ni(e));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Bt(i.timestampValue),l=Bt(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,o){return an(i.bytesValue).isEqual(an(o.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,o){return le(i.geoPointValue.latitude)===le(o.geoPointValue.latitude)&&le(i.geoPointValue.longitude)===le(o.geoPointValue.longitude)})(n,e);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return le(i.integerValue)===le(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=le(i.doubleValue),l=le(o.doubleValue);return a===l?ti(a)===ti(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return on(n.arrayValue.values||[],e.arrayValue.values||[],Ge);case 10:case 11:return(function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Ec(a)!==Ec(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Ge(a[h],l[h])))return!1;return!0})(n,e);default:return j(52216,{left:n})}}function Qn(n,e){return(n.values||[]).find((t=>Ge(t,e)))!==void 0}function cn(n,e){if(n===e)return 0;const t=jt(n),r=jt(e);if(t!==r)return K(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,e.booleanValue);case 2:return(function(o,a){const l=le(o.integerValue||o.doubleValue),h=le(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,e);case 3:return Ic(n.timestampValue,e.timestampValue);case 4:return Ic(ni(n),ni(e));case 5:return Rs(n.stringValue,e.stringValue);case 6:return(function(o,a){const l=an(o),h=an(a);return l.compareTo(h)})(n.bytesValue,e.bytesValue);case 7:return(function(o,a){const l=o.split("/"),h=a.split("/");for(let f=0;f<l.length&&f<h.length;f++){const _=K(l[f],h[f]);if(_!==0)return _}return K(l.length,h.length)})(n.referenceValue,e.referenceValue);case 8:return(function(o,a){const l=K(le(o.latitude),le(a.latitude));return l!==0?l:K(le(o.longitude),le(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return wc(n.arrayValue,e.arrayValue);case 10:return(function(o,a){const l=o.fields||{},h=a.fields||{},f=l[Ss]?.arrayValue,_=h[Ss]?.arrayValue,I=K(f?.values?.length||0,_?.values?.length||0);return I!==0?I:wc(f,_)})(n.mapValue,e.mapValue);case 11:return(function(o,a){if(o===Or.mapValue&&a===Or.mapValue)return 0;if(o===Or.mapValue)return 1;if(a===Or.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),f=a.fields||{},_=Object.keys(f);h.sort(),_.sort();for(let I=0;I<h.length&&I<_.length;++I){const A=Rs(h[I],_[I]);if(A!==0)return A;const P=cn(l[h[I]],f[_[I]]);if(P!==0)return P}return K(h.length,_.length)})(n.mapValue,e.mapValue);default:throw j(23264,{he:t})}}function Ic(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return K(n,e);const t=Bt(n),r=Bt(e),i=K(t.seconds,r.seconds);return i!==0?i:K(t.nanos,r.nanos)}function wc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=cn(t[i],r[i]);if(o)return o}return K(t.length,r.length)}function un(n){return ks(n)}function ks(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Bt(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return an(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return B.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=ks(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ks(t.fields[a])}`;return i+"}"})(n.mapValue):j(61005,{value:n})}function zr(n){switch(jt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=lo(n);return e?16+zr(e):16;case 5:return 2*n.stringValue.length;case 6:return an(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,o)=>i+zr(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return mn(r.fields,((o,a)=>{i+=o.length+zr(a)})),i})(n.mapValue);default:throw j(13486,{value:n})}}function Ps(n){return!!n&&"integerValue"in n}function ho(n){return!!n&&"arrayValue"in n}function Hr(n){return!!n&&"mapValue"in n}function h_(n){return(n?.mapValue?.fields||{})[bl]?.stringValue===Rl}function Un(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return mn(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Un(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Un(n.arrayValue.values[t]);return e}return{...n}}function d_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===l_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.value=e}static empty(){return new Le({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Hr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Un(t)}setAll(e){let t=he.emptyPath(),r={},i=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=Un(a):i.push(l.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Hr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ge(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Hr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){mn(t,((i,o)=>e[i]=o));for(const i of r)delete e[i]}clone(){return new Le(Un(this.value))}}function Sl(n){const e=[];return mn(n.fields,((t,r)=>{const i=new he([t]);if(Hr(r)){const o=Sl(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)})),new Fe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t,r,i,o,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Me(e,0,Q.min(),Q.min(),Q.min(),Le.empty(),0)}static newFoundDocument(e,t,r,i){return new Me(e,1,t,Q.min(),r,i,0)}static newNoDocument(e,t){return new Me(e,2,t,Q.min(),Q.min(),Le.empty(),0)}static newUnknownDocument(e,t){return new Me(e,3,t,Q.min(),Q.min(),Le.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Le.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Le.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t){this.position=e,this.inclusive=t}}function vc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=B.comparator(B.fromName(a.referenceValue),t.key):r=cn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ac(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ge(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t="asc"){this.field=e,this.dir=t}}function f_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{}class ae extends kl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new m_(e,t,r):t==="array-contains"?new y_(e,r):t==="in"?new E_(e,r):t==="not-in"?new T_(e,r):t==="array-contains-any"?new I_(e,r):new ae(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new g_(e,r):new __(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(cn(t,this.value)):t!==null&&jt(this.value)===jt(t)&&this.matchesComparison(cn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vt extends kl{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new vt(e,t)}matches(e){return Pl(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Pl(n){return n.op==="and"}function Cl(n){return p_(n)&&Pl(n)}function p_(n){for(const e of n.filters)if(e instanceof vt)return!1;return!0}function Cs(n){if(n instanceof ae)return n.field.canonicalString()+n.op.toString()+un(n.value);if(Cl(n))return n.filters.map((e=>Cs(e))).join(",");{const e=n.filters.map((t=>Cs(t))).join(",");return`${n.op}(${e})`}}function Nl(n,e){return n instanceof ae?(function(r,i){return i instanceof ae&&r.op===i.op&&r.field.isEqual(i.field)&&Ge(r.value,i.value)})(n,e):n instanceof vt?(function(r,i){return i instanceof vt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,a,l)=>o&&Nl(a,i.filters[l])),!0):!1})(n,e):void j(19439)}function Ol(n){return n instanceof ae?(function(t){return`${t.field.canonicalString()} ${t.op} ${un(t.value)}`})(n):n instanceof vt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Ol).join(" ,")+"}"})(n):"Filter"}class m_ extends ae{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class g_ extends ae{constructor(e,t){super(e,"in",t),this.keys=Dl("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class __ extends ae{constructor(e,t){super(e,"not-in",t),this.keys=Dl("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Dl(n,e){return(e.arrayValue?.values||[]).map((t=>B.fromName(t.referenceValue)))}class y_ extends ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ho(t)&&Qn(t.arrayValue,this.value)}}class E_ extends ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qn(this.value.arrayValue,t)}}class T_ extends ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Qn(this.value.arrayValue,t)}}class I_ extends ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ho(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Qn(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t=null,r=[],i=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function bc(n,e=null,t=[],r=[],i=null,o=null,a=null){return new w_(n,e,t,r,i,o,a)}function fo(n){const e=G(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Cs(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),co(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>un(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>un(r))).join(",")),e.Te=t}return e.Te}function po(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!f_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Nl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ac(n.startAt,e.startAt)&&Ac(n.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t=null,r=[],i=[],o=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function v_(n,e,t,r,i,o,a,l){return new wi(n,e,t,r,i,o,a,l)}function A_(n){return new wi(n)}function Rc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function b_(n){return n.collectionGroup!==null}function Fn(n){const e=G(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new de(he.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((f=>{f.isInequality()&&(l=l.add(f.field))}))})),l})(e).forEach((o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new oi(o,r))})),t.has(he.keyField().canonicalString())||e.Ie.push(new oi(he.keyField(),r))}return e.Ie}function Vt(n){const e=G(n);return e.Ee||(e.Ee=R_(e,Fn(n))),e.Ee}function R_(n,e){if(n.limitType==="F")return bc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new oi(i.field,o)}));const t=n.endAt?new si(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new si(n.startAt.position,n.startAt.inclusive):null;return bc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ns(n,e,t){return new wi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Vl(n,e){return po(Vt(n),Vt(e))&&n.limitType===e.limitType}function Ml(n){return`${fo(Vt(n))}|lt:${n.limitType}`}function Dn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>Ol(i))).join(", ")}]`),co(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>un(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>un(i))).join(",")),`Target(${r})`})(Vt(n))}; limitType=${n.limitType})`}function mo(n,e){return e.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):B.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,e)&&(function(r,i){for(const o of Fn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(a,l,h){const f=vc(a,l,h);return a.inclusive?f<=0:f<0})(r.startAt,Fn(r),i)||r.endAt&&!(function(a,l,h){const f=vc(a,l,h);return a.inclusive?f>=0:f>0})(r.endAt,Fn(r),i))})(n,e)}function S_(n){return(e,t)=>{let r=!1;for(const i of Fn(n)){const o=k_(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function k_(n,e,t){const r=n.field.isKeyField()?B.comparator(e.key,t.key):(function(o,a,l){const h=a.data.field(o),f=l.data.field(o);return h!==null&&f!==null?cn(h,f):j(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return j(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){mn(this.inner,((t,r)=>{for(const[i,o]of r)e(i,o)}))}isEmpty(){return Tl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=new Ce(B.comparator);function ai(){return P_}const Ll=new Ce(B.comparator);function Dr(...n){let e=Ll;for(const t of n)e=e.insert(t.key,t);return e}function xl(n){let e=Ll;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Ot(){return Bn()}function Ul(){return Bn()}function Bn(){return new Ht((n=>n.toString()),((n,e)=>n.isEqual(e)))}const C_=new Ce(B.comparator),N_=new de(B.comparator);function Te(...n){let e=N_;for(const t of n)e=e.add(t);return e}const O_=new de(K);function D_(){return O_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ti(e)?"-0":e}}function Fl(n){return{integerValue:""+n}}function V_(n,e){return i_(e)?Fl(e):go(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this._=void 0}}function M_(n,e,t){return n instanceof ci?(function(i,o){const a={fields:{[wl]:{stringValue:Il},[Al]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&uo(o)&&(o=lo(o)),o&&(a.fields[vl]=o),{mapValue:a}})(t,e):n instanceof Xn?jl(n,e):n instanceof Jn?$l(n,e):(function(i,o){const a=Bl(i,o),l=Sc(a)+Sc(i.Ae);return Ps(a)&&Ps(i.Ae)?Fl(l):go(i.serializer,l)})(n,e)}function L_(n,e,t){return n instanceof Xn?jl(n,e):n instanceof Jn?$l(n,e):t}function Bl(n,e){return n instanceof ui?(function(r){return Ps(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(e)?e:{integerValue:0}:null}class ci extends vi{}class Xn extends vi{constructor(e){super(),this.elements=e}}function jl(n,e){const t=zl(e);for(const r of n.elements)t.some((i=>Ge(i,r)))||t.push(r);return{arrayValue:{values:t}}}class Jn extends vi{constructor(e){super(),this.elements=e}}function $l(n,e){let t=zl(e);for(const r of n.elements)t=t.filter((i=>!Ge(i,r)));return{arrayValue:{values:t}}}class ui extends vi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Sc(n){return le(n.integerValue||n.doubleValue)}function zl(n){return ho(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function x_(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof Xn&&i instanceof Xn||r instanceof Jn&&i instanceof Jn?on(r.elements,i.elements,Ge):r instanceof ui&&i instanceof ui?Ge(r.Ae,i.Ae):r instanceof ci&&i instanceof ci})(n.transform,e.transform)}class U_{constructor(e,t){this.version=e,this.transformResults=t}}class Ze{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ze}static exists(e){return new Ze(void 0,e)}static updateTime(e){return new Ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ai{}function Hl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ql(n.key,Ze.none()):new ir(n.key,n.data,Ze.none());{const t=n.data,r=Le.empty();let i=new de(he.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Kt(n.key,r,new Fe(i.toArray()),Ze.none())}}function F_(n,e,t){n instanceof ir?(function(i,o,a){const l=i.value.clone(),h=Pc(i.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof Kt?(function(i,o,a){if(!Kr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Pc(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Kl(i)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,e,t):(function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function jn(n,e,t,r){return n instanceof ir?(function(o,a,l,h){if(!Kr(o.precondition,a))return l;const f=o.value.clone(),_=Cc(o.fieldTransforms,h,a);return f.setAll(_),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null})(n,e,t,r):n instanceof Kt?(function(o,a,l,h){if(!Kr(o.precondition,a))return l;const f=Cc(o.fieldTransforms,h,a),_=a.data;return _.setAll(Kl(o)),_.setAll(f),a.convertToFoundDocument(a.version,_).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((I=>I.field)))})(n,e,t,r):(function(o,a,l){return Kr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function B_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=Bl(r.transform,i||null);o!=null&&(t===null&&(t=Le.empty()),t.set(r.field,o))}return t||null}function kc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&on(r,i,((o,a)=>x_(o,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ir extends Ai{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Kt extends Ai{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Kl(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Pc(n,e,t){const r=new Map;Z(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,l=e.data.field(o.field);r.set(o.field,L_(a,l,t[i]))}return r}function Cc(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,M_(o,a,e))}return r}class ql extends Ai{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class j_ extends Ai{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&F_(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=jn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=jn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Ul();return this.mutations.forEach((i=>{const o=e.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(i.key)?null:l;const h=Hl(a,l);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(Q.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Te())}isEqual(e){return this.batchId===e.batchId&&on(this.mutations,e.mutations,((t,r)=>kc(t,r)))&&on(this.baseMutations,e.baseMutations,((t,r)=>kc(t,r)))}}class _o{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Z(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=(function(){return C_})();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new _o(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne,z;function H_(n){switch(n){case S.OK:return j(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return j(15467,{code:n})}}function K_(n){if(n===void 0)return Ft("GRPC error has no .code"),S.UNKNOWN;switch(n){case ne.OK:return S.OK;case ne.CANCELLED:return S.CANCELLED;case ne.UNKNOWN:return S.UNKNOWN;case ne.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ne.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ne.INTERNAL:return S.INTERNAL;case ne.UNAVAILABLE:return S.UNAVAILABLE;case ne.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ne.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ne.NOT_FOUND:return S.NOT_FOUND;case ne.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ne.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ne.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ne.ABORTED:return S.ABORTED;case ne.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ne.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ne.DATA_LOSS:return S.DATA_LOSS;default:return j(39323,{code:n})}}(z=ne||(ne={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new to([4294967295,4294967295],0);class q_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Os(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function G_(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function W_(n,e){return Os(n,e.toTimestamp())}function rn(n){return Z(!!n,49232),Q.fromTimestamp((function(t){const r=Bt(t);return new X(r.seconds,r.nanos)})(n))}function Gl(n,e){return Ds(n,e).canonicalString()}function Ds(n,e){const t=(function(i){return new J(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Q_(n){const e=J.fromString(n);return Z(ry(e),10190,{key:e.toString()}),e}function Vs(n,e){return Gl(n.databaseId,e.path)}function X_(n){const e=Q_(n);return e.length===4?J.emptyPath():Y_(e)}function J_(n){return new J(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Y_(n){return Z(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Nc(n,e,t){return{name:Vs(n,e),fields:t.value.mapValue.fields}}function Z_(n,e){let t;if(e instanceof ir)t={update:Nc(n,e.key,e.value)};else if(e instanceof ql)t={delete:Vs(n,e.key)};else if(e instanceof Kt)t={update:Nc(n,e.key,e.data),updateMask:ny(e.fieldMask)};else{if(!(e instanceof j_))return j(16599,{Vt:e.type});t={verify:Vs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(o,a){const l=a.transform;if(l instanceof ci)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Xn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Jn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ui)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw j(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:W_(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:j(27497)})(n,e.precondition)),t}function ey(n,e){return n&&n.length>0?(Z(e!==void 0,14353),n.map((t=>(function(i,o){let a=i.updateTime?rn(i.updateTime):rn(o);return a.isEqual(Q.min())&&(a=rn(o)),new U_(a,i.transformResults||[])})(t,e)))):[]}function ty(n){let e=X_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Z(r===1,65062);const _=t.from[0];_.allDescendants?i=_.collectionId:e=e.child(_.collectionId)}let o=[];t.where&&(o=(function(I){const A=Wl(I);return A instanceof vt&&Cl(A)?A.getFilters():[A]})(t.where));let a=[];t.orderBy&&(a=(function(I){return I.map((A=>(function(C){return new oi(Jt(C.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(A)))})(t.orderBy));let l=null;t.limit&&(l=(function(I){let A;return A=typeof I=="object"?I.value:I,co(A)?null:A})(t.limit));let h=null;t.startAt&&(h=(function(I){const A=!!I.before,P=I.values||[];return new si(P,A)})(t.startAt));let f=null;return t.endAt&&(f=(function(I){const A=!I.before,P=I.values||[];return new si(P,A)})(t.endAt)),v_(e,i,a,o,l,"F",h,f)}function Wl(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Jt(t.unaryFilter.field);return ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Jt(t.unaryFilter.field);return ae.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Jt(t.unaryFilter.field);return ae.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Jt(t.unaryFilter.field);return ae.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return j(61313);default:return j(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ae.create(Jt(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return j(58110);default:return j(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return vt.create(t.compositeFilter.filters.map((r=>Wl(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return j(1026)}})(t.compositeFilter.op))})(n):j(30097,{filter:n})}function Jt(n){return he.fromServerFormat(n.fieldPath)}function ny(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ry(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){this.yt=e}}function sy(n){const e=ty({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ns(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.Cn=new ay}addToCollectionParentIndex(e,t){return this.Cn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(wt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(wt.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class ay{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new de(J.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new de(J.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ql=41943040;class ke{static withCacheSize(e){return new ke(e,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ke.DEFAULT_COLLECTION_PERCENTILE=10,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ke.DEFAULT=new ke(Ql,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ke.DISABLED=new ke(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ln(0)}static cr(){return new ln(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="LruGarbageCollector",cy=1048576;function Vc([n,e],[t,r]){const i=K(n,t);return i===0?K(e,r):i}class uy{constructor(e){this.Ir=e,this.buffer=new de(Vc),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Vc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ly{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){M(Dc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rr(t)?M(Dc,"Ignoring IndexedDB error during garbage collection: ",t):await so(t)}await this.Vr(3e5)}))}}class hy{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return R.resolve(oo.ce);const r=new uy(t);return this.mr.forEachTarget(e,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Oc)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Oc):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,i,o,a,l,h,f;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),i=this.params.maximumSequenceNumbersToCollect):i=I,a=Date.now(),this.nthSequenceNumber(e,i)))).next((I=>(r=I,l=Date.now(),this.removeTargets(e,r,t)))).next((I=>(o=I,h=Date.now(),this.removeOrphanedDocuments(e,r)))).next((I=>(f=Date.now(),Xt()<=$.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-_}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${I} documents in `+(f-h)+`ms
Total Duration: ${f-_}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:I}))))}}function dy(n,e){return new hy(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(){this.changes=new Ht((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&jn(r.mutation,i,Fe.empty(),X.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Te()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Te()){const i=Ot();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((o=>{let a=Dr();return o.forEach(((l,h)=>{a=a.insert(l,h.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=Ot();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Te())))}populateOverlays(e,t,r){const i=[];return r.forEach((o=>{t.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(e,i).next((o=>{o.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,r,i){let o=ai();const a=Bn(),l=(function(){return Bn()})();return t.forEach(((h,f)=>{const _=r.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof Kt)?o=o.insert(f.key,f):_!==void 0?(a.set(f.key,_.mutation.getFieldMask()),jn(_.mutation,f,_.mutation.getFieldMask(),X.now())):a.set(f.key,Fe.empty())})),this.recalculateAndSaveOverlays(e,o).next((h=>(h.forEach(((f,_)=>a.set(f,_))),t.forEach(((f,_)=>l.set(f,new py(_,a.get(f)??null)))),l)))}recalculateAndSaveOverlays(e,t){const r=Bn();let i=new Ce(((a,l)=>a-l)),o=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((h=>{const f=t.get(h);if(f===null)return;let _=r.get(h)||Fe.empty();_=l.applyToLocalView(f,_),r.set(h,_);const I=(i.get(l.batchId)||Te()).add(h);i=i.insert(l.batchId,I)}))})).next((()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,_=h.value,I=Ul();_.forEach((A=>{if(!o.has(A)){const P=Hl(t.get(A),r.get(A));P!==null&&I.set(A,P),o=o.add(A)}})),a.push(this.documentOverlayCache.saveOverlays(e,f,I))}return R.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(a){return B.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):b_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):R.resolve(Ot());let l=Wn,h=o;return a.next((f=>R.forEach(f,((_,I)=>(l<I.largestBatchId&&(l=I.largestBatchId),o.get(_)?R.resolve():this.remoteDocumentCache.getEntry(e,_).next((A=>{h=h.insert(_,A)}))))).next((()=>this.populateOverlays(e,f,o))).next((()=>this.computeViews(e,h,f,Te()))).next((_=>({batchId:l,changes:xl(_)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next((r=>{let i=Dr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=Dr();return this.indexManager.getCollectionParents(e,o).next((l=>R.forEach(l,(h=>{const f=(function(I,A){return new wi(A,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next((_=>{_.forEach(((I,A)=>{a=a.insert(I,A)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i)))).next((a=>{o.forEach(((h,f)=>{const _=f.getKey();a.get(_)===null&&(a=a.insert(_,Me.newInvalidDocument(_)))}));let l=Dr();return a.forEach(((h,f)=>{const _=o.get(h);_!==void 0&&jn(_.mutation,f,Fe.empty(),X.now()),mo(t,f)&&(l=l.insert(h,f))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return R.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:rn(i.createTime)}})(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:sy(i.bundledQuery),readTime:rn(i.readTime)}})(t)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(){this.overlays=new Ce(B.comparator),this.qr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ot();return R.forEach(t,(i=>this.getOverlay(e,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,o)=>{this.St(e,t,o)})),R.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const i=Ot(),o=t.length+1,a=new B(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return R.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new Ce(((f,_)=>f-_));const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=Ot(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const l=Ot(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((f,_)=>l.set(f,_))),!(l.size()>=i)););return R.resolve(l)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new z_(t,r));let o=this.qr.get(t);o===void 0&&(o=Te(),this.qr.set(t,o)),this.qr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.Qr=new de(oe.$r),this.Ur=new de(oe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new oe(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new oe(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new B(new J([])),r=new oe(t,e),i=new oe(t,e+1),o=[];return this.Ur.forEachInRange([r,i],(a=>{this.Gr(a),o.push(a.key)})),o}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new B(new J([])),r=new oe(t,e),i=new oe(t,e+1);let o=Te();return this.Ur.forEachInRange([r,i],(a=>{o=o.add(a.key)})),o}containsKey(e){const t=new oe(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class oe{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return B.comparator(e.key,t.key)||K(e.Yr,t.Yr)}static Kr(e,t){return K(e.Yr,t.Yr)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new de(oe.$r)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new $_(o,t,r,i);this.mutationQueue.push(a);for(const l of i)this.Zr=this.Zr.add(new oe(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return R.resolve(a)}lookupMutationBatch(e,t){return R.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ei(r),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?ao:this.tr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new oe(t,0),i=new oe(t,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,i],(a=>{const l=this.Xr(a.Yr);o.push(l)})),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new de(K);return t.forEach((i=>{const o=new oe(i,0),a=new oe(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],(l=>{r=r.add(l.Yr)}))})),R.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;B.isDocumentKey(o)||(o=o.child(""));const a=new oe(new B(o),0);let l=new de(K);return this.Zr.forEachWhile((h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(l=l.add(h.Yr)),!0)}),a),R.resolve(this.ti(l))}ti(e){const t=[];return e.forEach((r=>{const i=this.Xr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){Z(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return R.forEach(t.mutations,(i=>{const o=new oe(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new oe(t,0),i=this.Zr.firstAfterOrEqual(r);return R.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){this.ri=e,this.docs=(function(){return new Ce(B.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():Me.newInvalidDocument(t))}getEntries(e,t){let r=ai();return t.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Me.newInvalidDocument(i))})),R.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=ai();const a=t.path,l=new B(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:_}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||e_(Zg(_),r)<=0||(i.has(_.key)||mo(t,_))&&(o=o.insert(_.key,_.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(e,t,r,i){j(9500)}ii(e,t){return R.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Iy(this)}getSize(e){return R.resolve(this.size)}}class Iy extends fy{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)})),R.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this.persistence=e,this.si=new Ht((t=>fo(t)),po),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.oi=0,this._i=new yo,this.targetCount=0,this.ai=ln.ur()}forEachTarget(e,t){return this.si.forEach(((r,i)=>t(i))),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),R.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ln(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Pr(t),R.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)})),R.waitFor(o).next((()=>i))}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),R.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach((a=>{o.push(i.markPotentiallyOrphaned(e,a))})),R.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,t){this.ui={},this.overlays={},this.ci=new oo(0),this.li=!1,this.li=!0,this.hi=new yy,this.referenceDelegate=e(this),this.Pi=new wy(this),this.indexManager=new oy,this.remoteDocumentCache=(function(i){return new Ty(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new iy(t),this.Ii=new gy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _y,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new Ey(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const i=new vy(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ai(e,t){return R.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class vy extends n_{constructor(e){super(),this.currentSequenceNumber=e}}class Eo{constructor(e){this.persistence=e,this.Ri=new yo,this.Vi=null}static mi(e){return new Eo(e)}get fi(){if(this.Vi)return this.Vi;throw j(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,(r=>{const i=B.fromPath(r);return this.gi(e,i).next((o=>{o||t.removeEntry(i,Q.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class li{constructor(e,t){this.persistence=e,this.pi=new Ht((r=>s_(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=dy(this,t)}static mi(e,t){return new li(e,t)}Ei(){}di(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return R.forEach(this.pi,((r,i)=>this.br(e,r,i).next((o=>o?R.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(e,(a=>this.br(e,a,t).next((l=>{l||(r++,o.removeEntry(a,Q.min()))})))).next((()=>o.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),R.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=zr(e.data.value)),t}br(e,t,r){return R.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return R.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=i}static As(e,t){let r=Te(),i=Te();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new To(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Nd()?8:r_(we())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.ys(e,t).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ws(e,t,i,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new Ay;return this.Ss(e,t,a).next((l=>{if(o.result=l,this.Vs)return this.bs(e,t,a,l.size)}))})).next((()=>o.result))}bs(e,t,r,i){return r.documentReadCount<this.fs?(Xt()<=$.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Dn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(Xt()<=$.DEBUG&&M("QueryEngine","Query:",Dn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Xt()<=$.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Dn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vt(t))):R.resolve())}ys(e,t){if(Rc(t))return R.resolve(null);let r=Vt(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=Ns(t,null,"F"),r=Vt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((o=>{const a=Te(...o);return this.ps.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((h=>{const f=this.Ds(t,l);return this.Cs(t,f,a,h.readTime)?this.ys(e,Ns(t,null,"F")):this.vs(e,f,t,h)}))))})))))}ws(e,t,r,i){return Rc(t)||i.isEqual(Q.min())?R.resolve(null):this.ps.getDocuments(e,r).next((o=>{const a=this.Ds(t,o);return this.Cs(t,a,r,i)?R.resolve(null):(Xt()<=$.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Dn(t)),this.vs(e,a,t,Yg(i,Wn)).next((l=>l)))}))}Ds(e,t){let r=new de(S_(e));return t.forEach(((i,o)=>{mo(e,o)&&(r=r.add(o))})),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(e,t,r){return Xt()<=$.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Dn(t)),this.ps.getDocumentsMatchingQuery(e,t,wt.min(),r)}vs(e,t,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next((o=>(t.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="LocalStore";class Sy{constructor(e,t,r,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new Ce(K),this.xs=new Ht((o=>fo(o)),po),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new my(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function ky(n,e,t,r){return new Sy(n,e,t,r)}async function Jl(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],l=[];let h=Te();for(const f of i){a.push(f.batchId);for(const _ of f.mutations)h=h.add(_.key)}for(const f of o){l.push(f.batchId);for(const _ of f.mutations)h=h.add(_.key)}return t.localDocuments.getDocuments(r,h).next((f=>({Ls:f,removedBatchIds:a,addedBatchIds:l})))}))}))}function Py(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),o=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,h,f,_){const I=f.batch,A=I.keys();let P=R.resolve();return A.forEach((C=>{P=P.next((()=>_.getEntry(h,C))).next((O=>{const k=f.docVersions.get(C);Z(k!==null,48541),O.version.compareTo(k)<0&&(I.applyToRemoteDocument(O,f),O.isValidDocument()&&(O.setReadTime(f.commitVersion),_.addEntry(O)))}))})),P.next((()=>l.mutationQueue.removeMutationBatch(h,I)))})(t,r,e,o).next((()=>o.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let h=Te();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function Cy(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function Ny(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=ao),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}class Mc{constructor(){this.activeTargetIds=D_()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Oy{constructor(){this.Mo=new Mc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Mc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="ConnectivityMonitor";class xc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){M(Lc,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){M(Lc,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vr=null;function Ms(){return Vr===null?Vr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Vr++,"0x"+Vr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="RestConnection",Vy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class My{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===ri?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,t,r,i,o){const a=Ms(),l=this.zo(e,t.toUriEncodedString());M(ls,`Sending RPC '${e}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,i,o);const{host:f}=new URL(l),_=Rt(f);return this.Jo(e,l,h,r,_).then((I=>(M(ls,`Received RPC '${e}' ${a}: `,I),I)),(I=>{throw Ii(ls,`RPC '${e}' ${a} failed with error: `,I,"url: ",l,"request:",r),I}))}Ho(e,t,r,i,o,a){return this.Go(e,t,r,i,o)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+pn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,o)=>e[o]=i)),r&&r.headers.forEach(((i,o)=>e[o]=i))}zo(e,t){const r=Vy[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="WebChannelConnection";class xy extends My{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,o){const a=Ms();return new Promise(((l,h)=>{const f=new ul;f.setWithCredentials(!0),f.listenOnce(ll.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case $r.NO_ERROR:const I=f.getResponseJson();M(ye,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(I)),l(I);break;case $r.TIMEOUT:M(ye,`RPC '${e}' ${a} timed out`),h(new x(S.DEADLINE_EXCEEDED,"Request time out"));break;case $r.HTTP_ERROR:const A=f.getStatus();if(M(ye,`RPC '${e}' ${a} failed with status:`,A,"response text:",f.getResponseText()),A>0){let P=f.getResponseJson();Array.isArray(P)&&(P=P[0]);const C=P?.error;if(C&&C.status&&C.message){const O=(function(V){const L=V.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(L)>=0?L:S.UNKNOWN})(C.status);h(new x(O,C.message))}else h(new x(S.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new x(S.UNAVAILABLE,"Connection failed."));break;default:j(9055,{l_:e,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{M(ye,`RPC '${e}' ${a} completed.`)}}));const _=JSON.stringify(i);M(ye,`RPC '${e}' ${a} sending request:`,i),f.send(t,"POST",_,r,15)}))}T_(e,t,r){const i=Ms(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=fl(),l=dl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const _=o.join("");M(ye,`Creating RPC '${e}' stream ${i}: ${_}`,h);const I=a.createWebChannel(_,h);this.I_(I);let A=!1,P=!1;const C=new Ly({Yo:k=>{P?M(ye,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(A||(M(ye,`Opening RPC '${e}' stream ${i} transport.`),I.open(),A=!0),M(ye,`RPC '${e}' stream ${i} sending:`,k),I.send(k))},Zo:()=>I.close()}),O=(k,V,L)=>{k.listen(V,(D=>{try{L(D)}catch(U){setTimeout((()=>{throw U}),0)}}))};return O(I,Mn.EventType.OPEN,(()=>{P||(M(ye,`RPC '${e}' stream ${i} transport opened.`),C.o_())})),O(I,Mn.EventType.CLOSE,(()=>{P||(P=!0,M(ye,`RPC '${e}' stream ${i} transport closed`),C.a_(),this.E_(I))})),O(I,Mn.EventType.ERROR,(k=>{P||(P=!0,Ii(ye,`RPC '${e}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),C.a_(new x(S.UNAVAILABLE,"The operation could not be completed")))})),O(I,Mn.EventType.MESSAGE,(k=>{if(!P){const V=k.data[0];Z(!!V,16349);const L=V,D=L?.error||L[0]?.error;if(D){M(ye,`RPC '${e}' stream ${i} received error:`,D);const U=D.status;let Ae=(function(p){const g=ne[p];if(g!==void 0)return K_(g)})(U),se=D.message;Ae===void 0&&(Ae=S.INTERNAL,se="Unknown error status: "+U+" with message "+D.message),P=!0,C.a_(new x(Ae,se)),I.close()}else M(ye,`RPC '${e}' stream ${i} received:`,V),C.u_(V)}})),O(l,hl.STAT_EVENT,(k=>{k.stat===bs.PROXY?M(ye,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===bs.NOPROXY&&M(ye,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{C.__()}),0),C}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function hs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(n){return new q_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,t,r=1e3,i=1.5,o=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="PersistentStream";class Uy{constructor(e,t,r,i,o,a,l,h){this.Mi=e,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Yl(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(Ft(t.toString()),Ft("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===t&&this.G_(r,i)}),(r=>{e((()=>{const i=new x(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return M(Uc,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(M(Uc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Fy extends Uy{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Z(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Z(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=ey(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=J_(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Z_(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{}class jy extends By{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Go(e,Ds(t,r),i,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(S.UNKNOWN,o.toString())}))}Ho(e,t,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(e,Ds(t,r),i,a,l,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(S.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class $y{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ft(t),this.aa=!1):M("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="RemoteStore";class zy{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{ar(this)&&(M(sr,"Restarting streams for network reachability change."),await(async function(h){const f=G(h);f.Ea.add(4),await or(f),f.Ra.set("Unknown"),f.Ea.delete(4),await Ri(f)})(this))}))})),this.Ra=new $y(r,i)}}async function Ri(n){if(ar(n))for(const e of n.da)await e(!0)}async function or(n){for(const e of n.da)await e(!1)}function ar(n){return G(n).Ea.size===0}async function Zl(n,e,t){if(!rr(e))throw e;n.Ea.add(1),await or(n),n.Ra.set("Offline"),t||(t=()=>Cy(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{M(sr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ri(n)}))}function eh(n,e){return e().catch((t=>Zl(n,t,e)))}async function Si(n){const e=G(n),t=At(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ao;for(;Hy(e);)try{const i=await Ny(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,Ky(e,i)}catch(i){await Zl(e,i)}th(e)&&nh(e)}function Hy(n){return ar(n)&&n.Ta.length<10}function Ky(n,e){n.Ta.push(e);const t=At(n);t.O_()&&t.X_&&t.ea(e.mutations)}function th(n){return ar(n)&&!At(n).x_()&&n.Ta.length>0}function nh(n){At(n).start()}async function qy(n){At(n).ra()}async function Gy(n){const e=At(n);for(const t of n.Ta)e.ea(t.mutations)}async function Wy(n,e,t){const r=n.Ta.shift(),i=_o.from(r,e,t);await eh(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await Si(n)}async function Qy(n,e){e&&At(n).X_&&await(async function(r,i){if((function(a){return H_(a)&&a!==S.ABORTED})(i.code)){const o=r.Ta.shift();At(r).B_(),await eh(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i))),await Si(r)}})(n,e),th(n)&&nh(n)}async function Fc(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),M(sr,"RemoteStore received new credentials");const r=ar(t);t.Ea.add(3),await or(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ri(t)}async function Xy(n,e){const t=G(n);e?(t.Ea.delete(2),await Ri(t)):e||(t.Ea.add(2),await or(t),t.Ra.set("Unknown"))}function At(n){return n.fa||(n.fa=(function(t,r,i){const o=G(t);return o.sa(),new Fy(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:qy.bind(null,n),r_:Qy.bind(null,n),ta:Gy.bind(null,n),na:Wy.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Si(n)):(await n.fa.stop(),n.Ta.length>0&&(M(sr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,l=new Io(e,t,a,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rh(n,e){if(Ft("AsyncQueue",`${e}: ${n}`),rr(n))return new x(S.UNAVAILABLE,`${e}: ${n}`);throw n}class Jy{constructor(){this.queries=Bc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=G(t),o=i.queries;i.queries=Bc(),o.forEach(((a,l)=>{for(const h of l.Sa)h.onError(r)}))})(this,new x(S.ABORTED,"Firestore shutting down"))}}function Bc(){return new Ht((n=>Ml(n)),Vl)}function Yy(n){n.Ca.forEach((e=>{e.next()}))}var jc,$c;($c=jc||(jc={})).Ma="default",$c.Cache="cache";const Zy="SyncEngine";class eE{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Ht((l=>Ml(l)),Vl),this.Iu=new Map,this.Eu=new Set,this.du=new Ce(B.comparator),this.Au=new Map,this.Ru=new yo,this.Vu={},this.mu=new Map,this.fu=ln.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function tE(n,e,t){const r=sE(n);try{const i=await(function(a,l){const h=G(a),f=X.now(),_=l.reduce(((P,C)=>P.add(C.key)),Te());let I,A;return h.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let C=ai(),O=Te();return h.Ns.getEntries(P,_).next((k=>{C=k,C.forEach(((V,L)=>{L.isValidDocument()||(O=O.add(V))}))})).next((()=>h.localDocuments.getOverlayedDocuments(P,C))).next((k=>{I=k;const V=[];for(const L of l){const D=B_(L,I.get(L.key).overlayedDocument);D!=null&&V.push(new Kt(L.key,D,Sl(D.value.mapValue),Ze.exists(!0)))}return h.mutationQueue.addMutationBatch(P,f,V,l)})).next((k=>{A=k;const V=k.applyToLocalDocumentSet(I,O);return h.documentOverlayCache.saveOverlays(P,k.batchId,V)}))})).then((()=>({batchId:A.batchId,changes:xl(I)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(a,l,h){let f=a.Vu[a.currentUser.toKey()];f||(f=new Ce(K)),f=f.insert(l,h),a.Vu[a.currentUser.toKey()]=f})(r,i.batchId,t),await ki(r,i.changes),await Si(r.remoteStore)}catch(i){const o=rh(i,"Failed to persist write");t.reject(o)}}function zc(n,e,t){const r=G(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach(((o,a)=>{const l=a.view.va(e);l.snapshot&&i.push(l.snapshot)})),(function(a,l){const h=G(a);h.onlineState=l;let f=!1;h.queries.forEach(((_,I)=>{for(const A of I.Sa)A.va(l)&&(f=!0)})),f&&Yy(h)})(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nE(n,e){const t=G(n),r=e.batch.batchId;try{const i=await Py(t.localStore,e);sh(t,r,null),ih(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ki(t,i)}catch(i){await so(i)}}async function rE(n,e,t){const r=G(n);try{const i=await(function(a,l){const h=G(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let _;return h.mutationQueue.lookupMutationBatch(f,l).next((I=>(Z(I!==null,37113),_=I.keys(),h.mutationQueue.removeMutationBatch(f,I)))).next((()=>h.mutationQueue.performConsistencyCheck(f))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(f,_,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,_))).next((()=>h.localDocuments.getDocuments(f,_)))}))})(r.localStore,e);sh(r,e,t),ih(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ki(r,i)}catch(i){await so(i)}}function ih(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function sh(n,e,t){const r=G(n);let i=r.Vu[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}async function ki(n,e,t){const r=G(n),i=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,h)=>{a.push(r.pu(h,e,t).then((f=>{if((f||t)&&r.isPrimaryClient){const _=f?!f.fromCache:t?.targetChanges.get(h.targetId)?.current;r.sharedClientState.updateQueryState(h.targetId,_?"current":"not-current")}if(f){i.push(f);const _=To.As(h.targetId,f);o.push(_)}})))})),await Promise.all(a),r.Pu.H_(i),await(async function(h,f){const _=G(h);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>R.forEach(f,(A=>R.forEach(A.Es,(P=>_.persistence.referenceDelegate.addReference(I,A.targetId,P))).next((()=>R.forEach(A.ds,(P=>_.persistence.referenceDelegate.removeReference(I,A.targetId,P)))))))))}catch(I){if(!rr(I))throw I;M(Ry,"Failed to update sequence numbers: "+I)}for(const I of f){const A=I.targetId;if(!I.fromCache){const P=_.Ms.get(A),C=P.snapshotVersion,O=P.withLastLimboFreeSnapshotVersion(C);_.Ms=_.Ms.insert(A,O)}}})(r.localStore,o))}async function iE(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){M(Zy,"User change. New user:",e.toKey());const r=await Jl(t.localStore,e);t.currentUser=e,(function(o,a){o.mu.forEach((l=>{l.forEach((h=>{h.reject(new x(S.CANCELLED,a))}))})),o.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ki(t,r.Ls)}}function sE(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rE.bind(null,e),e}class hi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return ky(this.persistence,new by,e.initialUser,this.serializer)}Cu(e){return new Xl(Eo.mi,this.serializer)}Du(e){return new Oy}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hi.provider={build:()=>new hi};class oE extends hi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Z(this.persistence.referenceDelegate instanceof li,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ly(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ke.withCacheSize(this.cacheSizeBytes):ke.DEFAULT;return new Xl((r=>li.mi(r,t)),this.serializer)}}class Ls{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iE.bind(null,this.syncEngine),await Xy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Jy})()}createDatastore(e){const t=bi(e.databaseInfo.databaseId),r=(function(o){return new xy(o)})(e.databaseInfo);return(function(o,a,l,h){return new jy(o,a,l,h)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,o,a,l){return new zy(r,i,o,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>zc(this.syncEngine,t,0)),(function(){return xc.v()?new xc:new Dy})())}createSyncEngine(e,t){return(function(i,o,a,l,h,f,_){const I=new eE(i,o,a,l,h,f);return _&&(I.gu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=G(t);M(sr,"RemoteStore shutting down."),r.Ea.add(5),await or(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ls.provider={build:()=>new Ls};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="FirestoreClient";class aE{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Ee.UNAUTHENTICATED,this.clientId=ro.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{M(bt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(M(bt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=rh(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function ds(n,e){n.asyncQueue.verifyOperationInProgress(),M(bt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Jl(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Hc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await cE(n);M(bt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Fc(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Fc(e.remoteStore,i))),n._onlineComponents=e}async function cE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(bt,"Using user provided OfflineComponentProvider");try{await ds(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;Ii("Error using user provided cache. Falling back to memory cache: "+t),await ds(n,new hi)}}else M(bt,"Using default OfflineComponentProvider"),await ds(n,new oE(void 0));return n._offlineComponents}async function uE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(bt,"Using user provided OnlineComponentProvider"),await Hc(n,n._uninitializedComponentsProvider._online)):(M(bt,"Using default OnlineComponentProvider"),await Hc(n,new Ls))),n._onlineComponents}function lE(n){return uE(n).then((e=>e.syncEngine))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="firestore.googleapis.com",qc=!0;class Gc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new x(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ah,this.ssl=qc}else this.host=e.host,this.ssl=e.ssl??qc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ql;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cy)throw new x(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Jg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oh(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pi{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new jg;switch(r.type){case"firstParty":return new Kg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Kc.get(t);r&&(M("ComponentProvider","Removing Datastore"),Kc.delete(t),r.terminate())})(this),Promise.resolve()}}function hE(n,e,t,r={}){n=yl(n,Pi);const i=Rt(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;i&&(Fs(`https://${l}`),Bs("Firestore",!0)),o.host!==ah&&o.host!==l&&Ii("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:i,emulatorOptions:r};if(!Lt(h,a)&&(n._setSettings(h),r.mockUserToken)){let f,_;if(typeof r.mockUserToken=="string")f=r.mockUserToken,_=Ee.MOCK_USER;else{f=fu(r.mockUserToken,n._app?.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new x(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new Ee(I)}n._authCredentials=new $g(new ml(f,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wo(this.firestore,e,this._query)}}class Ie{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ie(this.firestore,e,this._key)}toJSON(){return{type:Ie._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(nr(t,Ie._jsonSchema))return new Ie(e,r||null,new B(J.fromString(t.referencePath)))}}Ie._jsonSchemaVersion="firestore/documentReference/1.0",Ie._jsonSchema={type:re("string",Ie._jsonSchemaVersion),referencePath:re("string")};class Tt extends wo{constructor(e,t,r){super(e,t,A_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ie(this.firestore,null,new B(e))}withConverter(e){return new Tt(this.firestore,e,this._path)}}function dE(n,e,...t){if(n=ve(n),gl("collection","path",e),n instanceof Pi){const r=J.fromString(e,...t);return mc(r),new Tt(n,null,r)}{if(!(n instanceof Ie||n instanceof Tt))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return mc(r),new Tt(n.firestore,null,r)}}function fE(n,e,...t){if(n=ve(n),arguments.length===1&&(e=ro.newId()),gl("doc","path",e),n instanceof Pi){const r=J.fromString(e,...t);return pc(r),new Ie(n,null,new B(r))}{if(!(n instanceof Ie||n instanceof Tt))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return pc(r),new Ie(n.firestore,n instanceof Tt?n.converter:null,new B(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="AsyncQueue";class Qc{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Yl(this,"async_queue_retry"),this._c=()=>{const r=hs();r&&M(Wc,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=hs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=hs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Dt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!rr(e))throw e;M(Wc,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Ft("INTERNAL UNHANDLED ERROR: ",Xc(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Io.createAndSchedule(this,e,t,r,(o=>this.hc(o)));return this.tc.push(i),i}uc(){this.nc&&j(47125,{Pc:Xc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Xc(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ch extends Pi{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Qc,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qc(e),this._firestoreClient=void 0,await e}}}function pE(n,e){const t=typeof n=="object"?n:mi(),r=typeof n=="string"?n:ri,i=dn(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=lu("firestore");o&&hE(i,...o)}return i}function mE(n){if(n._terminated)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||gE(n),n._firestoreClient}function gE(n){const e=n._freezeSettings(),t=(function(i,o,a,l){return new u_(i,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,oh(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new aE(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(i){const o=i?._online.build();return{_offline:i?._offline.build(o),_online:o}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xe(qe.fromBase64String(e))}catch(t){throw new x(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new xe(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(nr(e,xe._jsonSchema))return xe.fromBase64String(e.bytes)}}xe._jsonSchemaVersion="firestore/bytes/1.0",xe._jsonSchema={type:re("string",xe._jsonSchemaVersion),bytes:re("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new he(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:et._jsonSchemaVersion}}static fromJSON(e){if(nr(e,et._jsonSchema))return new et(e.latitude,e.longitude)}}et._jsonSchemaVersion="firestore/geoPoint/1.0",et._jsonSchema={type:re("string",et._jsonSchemaVersion),latitude:re("number"),longitude:re("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:tt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(nr(e,tt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new tt(e.vectorValues);throw new x(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}tt._jsonSchemaVersion="firestore/vectorValue/1.0",tt._jsonSchema={type:re("string",tt._jsonSchemaVersion),vectorValues:re("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=/^__.*__$/;class yE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Kt(e,this.data,this.fieldMask,t,this.fieldTransforms):new ir(e,this.data,t,this.fieldTransforms)}}function lh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j(40011,{Ac:n})}}class Ao{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ao({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return di(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(lh(this.Ac)&&_E.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class EE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||bi(e)}Cc(e,t,r,i=!1){return new Ao({Ac:e,methodName:t,Dc:r,path:he.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function TE(n){const e=n._freezeSettings(),t=bi(n._databaseId);return new EE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function IE(n,e,t,r,i,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,e,t,i);ph("Data must be an object, but it was:",a,r);const l=dh(r,a);let h,f;if(o.merge)h=new Fe(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const _=[];for(const I of o.mergeFields){const A=wE(e,I,t);if(!a.contains(A))throw new x(S.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);AE(_,A)||_.push(A)}h=new Fe(_),f=a.fieldTransforms.filter((I=>h.covers(I.field)))}else h=null,f=a.fieldTransforms;return new yE(new Le(l),h,f)}function hh(n,e){if(fh(n=ve(n)))return ph("Unsupported field value:",e,n),dh(n,e);if(n instanceof uh)return(function(r,i){if(!lh(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,i){const o=[];let a=0;for(const l of r){let h=hh(l,i.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,e)}return(function(r,i){if((r=ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return V_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=X.fromDate(r);return{timestampValue:Os(i.serializer,o)}}if(r instanceof X){const o=new X(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Os(i.serializer,o)}}if(r instanceof et)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xe)return{bytesValue:G_(i.serializer,r._byteString)};if(r instanceof Ie){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Gl(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof tt)return(function(a,l){return{mapValue:{fields:{[bl]:{stringValue:Rl},[Ss]:{arrayValue:{values:a.toArray().map((f=>{if(typeof f!="number")throw l.Sc("VectorValues must only contain numeric values.");return go(l.serializer,f)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${io(r)}`)})(n,e)}function dh(n,e){const t={};return Tl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mn(n,((r,i)=>{const o=hh(i,e.mc(r));o!=null&&(t[r]=o)})),{mapValue:{fields:t}}}function fh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof X||n instanceof et||n instanceof xe||n instanceof Ie||n instanceof uh||n instanceof tt)}function ph(n,e,t){if(!fh(t)||!_l(t)){const r=io(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function wE(n,e,t){if((e=ve(e))instanceof vo)return e._internalPath;if(typeof e=="string")return mh(n,e);throw di("Field path arguments must be of type string or ",n,!1,void 0,t)}const vE=new RegExp("[~\\*/\\[\\]]");function mh(n,e,t){if(e.search(vE)>=0)throw di(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new vo(...e.split("."))._internalPath}catch{throw di(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function di(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new x(S.INVALID_ARGUMENT,l+n+h)}function AE(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(_h("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class bE extends gh{data(){return super.data()}}function _h(n,e){return typeof e=="string"?mh(n,e):e instanceof vo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Mr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sn extends gh{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(_h("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new x(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=sn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}sn._jsonSchemaVersion="firestore/documentSnapshot/1.0",sn._jsonSchema={type:re("string",sn._jsonSchemaVersion),bundleSource:re("string","DocumentSnapshot"),bundleName:re("string"),bundle:re("string")};class qr extends sn{data(e={}){return super.data(e)}}class $n{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Mr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new qr(this._firestore,this._userDataWriter,r.key,r,new Mr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((l=>{const h=new qr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Mr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const h=new qr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Mr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,_=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),_=a.indexOf(l.doc.key)),{type:SE(l.type),doc:h,oldIndex:f,newIndex:_}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new x(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=$n._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ro.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(t.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function SE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j(61501,{type:n})}}$n._jsonSchemaVersion="firestore/querySnapshot/1.0",$n._jsonSchema={type:re("string",$n._jsonSchemaVersion),bundleSource:re("string","QuerySnapshot"),bundleName:re("string"),bundle:re("string")};function kE(n,e){const t=yl(n.firestore,ch),r=fE(n),i=RE(n.converter,e);return PE(t,[IE(TE(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ze.exists(!1))]).then((()=>r))}function PE(n,e){return(function(r,i){const o=new Dt;return r.asyncQueue.enqueueAndForget((async()=>tE(await lE(r),i,o))),o.promise})(mE(n),e)}(function(e,t=!0){(function(i){pn=i})(zt),rt(new Ke("firestore",((r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new ch(new zg(r.getProvider("auth-internal")),new qg(a,r.getProvider("app-check-internal")),(function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new x(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ii(f.options.projectId,_)})(a,i),a);return o={useFetchStreams:t,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),Be(lc,hc,e),Be(lc,hc,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="firebasestorage.googleapis.com",Eh="storageBucket",CE=120*1e3,NE=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te extends We{constructor(e,t,r=0){super(fs(e),`Firebase Storage: ${t} (${fs(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,te.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fs(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ee;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ee||(ee={}));function fs(n){return"storage/"+n}function bo(){const n="An unknown error occurred, please check the error payload for server response.";return new te(ee.UNKNOWN,n)}function OE(n){return new te(ee.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function DE(n){return new te(ee.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function VE(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new te(ee.UNAUTHENTICATED,n)}function ME(){return new te(ee.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function LE(n){return new te(ee.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function xE(){return new te(ee.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function UE(){return new te(ee.CANCELED,"User canceled the upload/download.")}function FE(n){return new te(ee.INVALID_URL,"Invalid URL '"+n+"'.")}function BE(n){return new te(ee.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function jE(){return new te(ee.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Eh+"' property when initializing the app?")}function $E(){return new te(ee.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function zE(){return new te(ee.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function HE(n){return new te(ee.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function xs(n){return new te(ee.INVALID_ARGUMENT,n)}function Th(){return new te(ee.APP_DELETED,"The Firebase app was deleted.")}function KE(n){return new te(ee.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function zn(n,e){return new te(ee.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Vn(n){throw new te(ee.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Oe.makeFromUrl(e,t)}catch{return new Oe(e,"")}if(r.path==="")return r;throw BE(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+i+a,"i"),h={bucket:1,path:3};function f(U){U.path_=decodeURIComponent(U.path)}const _="v[A-Za-z0-9_]+",I=t.replace(/[.]/g,"\\."),A="(/([^?#]*).*)?$",P=new RegExp(`^https?://${I}/${_}/b/${i}/o${A}`,"i"),C={bucket:1,path:3},O=t===yh?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",V=new RegExp(`^https?://${O}/${i}/${k}`,"i"),D=[{regex:l,indices:h,postModify:o},{regex:P,indices:C,postModify:f},{regex:V,indices:{bucket:1,path:2},postModify:f}];for(let U=0;U<D.length;U++){const Ae=D[U],se=Ae.regex.exec(e);if(se){const T=se[Ae.indices.bucket];let p=se[Ae.indices.path];p||(p=""),r=new Oe(T,p),Ae.postModify(r);break}}if(r==null)throw FE(e);return r}}class qE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(n,e,t){let r=1,i=null,o=null,a=!1,l=0;function h(){return l===2}let f=!1;function _(...k){f||(f=!0,e.apply(null,k))}function I(k){i=setTimeout(()=>{i=null,n(P,h())},k)}function A(){o&&clearTimeout(o)}function P(k,...V){if(f){A();return}if(k){A(),_.call(null,k,...V);return}if(h()||a){A(),_.call(null,k,...V);return}r<64&&(r*=2);let D;l===1?(l=2,D=0):D=(r+Math.random())*1e3,I(D)}let C=!1;function O(k){C||(C=!0,A(),!f&&(i!==null?(k||(l=2),clearTimeout(i),I(0)):k||(l=1)))}return I(0),o=setTimeout(()=>{a=!0,O(!0)},t),O}function WE(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(n){return n!==void 0}function XE(n){return typeof n=="object"&&!Array.isArray(n)}function Ro(n){return typeof n=="string"||n instanceof String}function Jc(n){return So()&&n instanceof Blob}function So(){return typeof Blob<"u"}function Yc(n,e,t,r){if(r<e)throw xs(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw xs(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Ih(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var Mt;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Mt||(Mt={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,o=e.indexOf(n)!==-1;return t||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,t,r,i,o,a,l,h,f,_,I,A=!0,P=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=h,this.timeout_=f,this.progressCallback_=_,this.connectionFactory_=I,this.retry=A,this.isUsingEmulator=P,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,O)=>{this.resolve_=C,this.reject_=O,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Lr(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=l=>{const h=l.loaded,f=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,f)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const l=o.getErrorCode()===Mt.NO_ERROR,h=o.getStatus();if(!l||JE(h,this.additionalRetryCodes_)&&this.retry){const _=o.getErrorCode()===Mt.ABORT;r(!1,new Lr(!1,null,_));return}const f=this.successCodes_.indexOf(h)!==-1;r(!0,new Lr(f,o))})},t=(r,i)=>{const o=this.resolve_,a=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const h=this.callback_(l,l.getResponse());QE(h)?o(h):o()}catch(h){a(h)}else if(l!==null){const h=bo();h.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,h)):a(h)}else if(i.canceled){const h=this.appDelete_?Th():UE();a(h)}else{const h=xE();a(h)}};this.canceled_?t(!1,new Lr(!1,null,!0)):this.backoffId_=GE(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&WE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Lr{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function ZE(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function eT(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tT(n,e){e&&(n["X-Firebase-GMPID"]=e)}function nT(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function rT(n,e,t,r,i,o,a=!0,l=!1){const h=Ih(n.urlParams),f=n.url+h,_=Object.assign({},n.headers);return tT(_,e),ZE(_,t),eT(_,o),nT(_,r),new YE(f,n.method,_,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,a,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function sT(...n){const e=iT();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(So())return new Blob(n);throw new te(ee.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function oT(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(n){if(typeof atob>"u")throw HE("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ps{constructor(e,t){this.data=e,this.contentType=t||null}}function cT(n,e){switch(n){case $e.RAW:return new ps(wh(e));case $e.BASE64:case $e.BASE64URL:return new ps(vh(n,e));case $e.DATA_URL:return new ps(lT(e),hT(e))}throw bo()}function wh(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const o=r,a=n.charCodeAt(++t);r=65536|(o&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function uT(n){let e;try{e=decodeURIComponent(n)}catch{throw zn($e.DATA_URL,"Malformed data URL.")}return wh(e)}function vh(n,e){switch(n){case $e.BASE64:{const i=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(i||o)throw zn(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case $e.BASE64URL:{const i=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(i||o)throw zn(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=aT(e)}catch(i){throw i.message.includes("polyfill")?i:zn(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class Ah{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw zn($e.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=dT(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function lT(n){const e=new Ah(n);return e.base64?vh($e.BASE64,e.rest):uT(e.rest)}function hT(n){return new Ah(n).contentType}function dT(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t){let r=0,i="";Jc(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(Jc(this.data_)){const r=this.data_,i=oT(r,e,t);return i===null?null:new mt(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new mt(r,!0)}}static getBlob(...e){if(So()){const t=e.map(r=>r instanceof mt?r.data_:r);return new mt(sT.apply(null,t))}else{const t=e.map(a=>Ro(a)?cT($e.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const i=new Uint8Array(r);let o=0;return t.forEach(a=>{for(let l=0;l<a.length;l++)i[o++]=a[l]}),new mt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(n){let e;try{e=JSON.parse(n)}catch{return null}return XE(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function pT(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Rh(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(n,e){return e}class Se{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||mT}}let xr=null;function gT(n){return!Ro(n)||n.length<2?n:Rh(n)}function Sh(){if(xr)return xr;const n=[];n.push(new Se("bucket")),n.push(new Se("generation")),n.push(new Se("metageneration")),n.push(new Se("name","fullPath",!0));function e(o,a){return gT(a)}const t=new Se("name");t.xform=e,n.push(t);function r(o,a){return a!==void 0?Number(a):a}const i=new Se("size");return i.xform=r,n.push(i),n.push(new Se("timeCreated")),n.push(new Se("updated")),n.push(new Se("md5Hash",null,!0)),n.push(new Se("cacheControl",null,!0)),n.push(new Se("contentDisposition",null,!0)),n.push(new Se("contentEncoding",null,!0)),n.push(new Se("contentLanguage",null,!0)),n.push(new Se("contentType",null,!0)),n.push(new Se("metadata","customMetadata",!0)),xr=n,xr}function _T(n,e){function t(){const r=n.bucket,i=n.fullPath,o=new Oe(r,i);return e._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:t})}function yT(n,e,t){const r={};r.type="file";const i=t.length;for(let o=0;o<i;o++){const a=t[o];r[a.local]=a.xform(r,e[a.server])}return _T(r,n),r}function kh(n,e,t){const r=bh(e);return r===null?null:yT(n,r,t)}function ET(n,e,t,r){const i=bh(e);if(i===null||!Ro(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(f=>{const _=n.bucket,I=n.fullPath,A="/b/"+a(_)+"/o/"+a(I),P=ko(A,t,r),C=Ih({alt:"media",token:f});return P+C})[0]}function TT(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const o=e[i];o.writable&&(t[o.server]=n[o.local])}return JSON.stringify(t)}class Ph{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(n){if(!n)throw bo()}function IT(n,e){function t(r,i){const o=kh(n,i,e);return Ch(o!==null),o}return t}function wT(n,e){function t(r,i){const o=kh(n,i,e);return Ch(o!==null),ET(o,i,n.host,n._protocol)}return t}function Nh(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=ME():i=VE():t.getStatus()===402?i=DE(n.bucket):t.getStatus()===403?i=LE(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function vT(n){const e=Nh(n);function t(r,i){let o=e(r,i);return r.getStatus()===404&&(o=OE(n.path)),o.serverResponse=i.serverResponse,o}return t}function AT(n,e,t){const r=e.fullServerUrl(),i=ko(r,n.host,n._protocol),o="GET",a=n.maxOperationRetryTime,l=new Ph(i,o,wT(n,t),a);return l.errorHandler=vT(e),l}function bT(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function RT(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=bT(null,e)),r}function ST(n,e,t,r,i){const o=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let D="";for(let U=0;U<2;U++)D=D+Math.random().toString().slice(2);return D}const h=l();a["Content-Type"]="multipart/related; boundary="+h;const f=RT(e,r,i),_=TT(f,t),I="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+_+`\r
--`+h+`\r
Content-Type: `+f.contentType+`\r
\r
`,A=`\r
--`+h+"--",P=mt.getBlob(I,r,A);if(P===null)throw $E();const C={name:f.fullPath},O=ko(o,n.host,n._protocol),k="POST",V=n.maxUploadRetryTime,L=new Ph(O,k,IT(n,t),V);return L.urlParams=C,L.headers=a,L.body=P.uploadData(),L.errorHandler=Nh(e),L}class kT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Mt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Mt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Mt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i,o){if(this.sent_)throw Vn("cannot .send() more than once");if(Rt(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const a in o)o.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,o[a].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Vn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Vn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Vn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Vn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class PT extends kT{initXhr(){this.xhr_.responseType="text"}}function Oh(){return new PT}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t){this._service=e,t instanceof Oe?this._location=t:this._location=Oe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new $t(e,t)}get root(){const e=new Oe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Rh(this._location.path)}get storage(){return this._service}get parent(){const e=fT(this._location.path);if(e===null)return null;const t=new Oe(this._location.bucket,e);return new $t(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw KE(e)}}function CT(n,e,t){n._throwIfRoot("uploadBytes");const r=ST(n.storage,n._location,Sh(),new mt(e,!0),t);return n.storage.makeRequestWithTokens(r,Oh).then(i=>({metadata:i,ref:n}))}function NT(n){n._throwIfRoot("getDownloadURL");const e=AT(n.storage,n._location,Sh());return n.storage.makeRequestWithTokens(e,Oh).then(t=>{if(t===null)throw zE();return t})}function OT(n,e){const t=pT(n._location.path,e),r=new Oe(n._location.bucket,t);return new $t(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(n){return/^[A-Za-z]+:\/\//.test(n)}function VT(n,e){return new $t(n,e)}function Dh(n,e){if(n instanceof Po){const t=n;if(t._bucket==null)throw jE();const r=new $t(t,t._bucket);return e!=null?Dh(r,e):r}else return e!==void 0?OT(n,e):n}function MT(n,e){if(e&&DT(e)){if(n instanceof Po)return VT(n,e);throw xs("To use ref(service, url), the first argument must be a Storage instance.")}else return Dh(n,e)}function Zc(n,e){const t=e?.[Eh];return t==null?null:Oe.makeFromBucketSpec(t,n)}function LT(n,e,t,r={}){n.host=`${e}:${t}`;const i=Rt(e);i&&(Fs(`https://${n.host}/b`),Bs("Storage",!0)),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:o}=r;o&&(n._overrideAuthToken=typeof o=="string"?o:fu(o,n.app.options.projectId))}class Po{constructor(e,t,r,i,o,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._isUsingEmulator=a,this._bucket=null,this._host=yh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CE,this._maxUploadRetryTime=NE,this._requests=new Set,i!=null?this._bucket=Oe.makeFromBucketSpec(i,this._host):this._bucket=Zc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Oe.makeFromBucketSpec(this._url,e):this._bucket=Zc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Yc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Yc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(De(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $t(this,e)}_makeRequest(e,t,r,i,o=!0){if(this._deleted)return new qE(Th());{const a=rT(e,this._appId,r,i,t,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const eu="@firebase/storage",tu="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh="storage";function nu(n,e,t){return n=ve(n),CT(n,e,t)}function ru(n){return n=ve(n),NT(n)}function iu(n,e){return n=ve(n),MT(n,e)}function xT(n=mi(),e){n=ve(n);const r=dn(n,Vh).getImmediate({identifier:e}),i=lu("storage");return i&&UT(r,...i),r}function UT(n,e,t,r={}){LT(n,e,t,r)}function FT(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Po(t,r,i,e,zt)}function BT(){rt(new Ke(Vh,FT,"PUBLIC").setMultipleInstances(!0)),Be(eu,tu,""),Be(eu,tu,"esm2020")}BT();const su={Abia:["Aba North","Aba South","Arochukwu","Bende","Ikwuano","Isiala Ngwa North","Isiala Ngwa South","Isuikwuato","Obi Ngwa","Ohafia","Osisioma","Ugwunagbo","Ukwa East","Ukwa West","Umuahia North","Umuahia South","Umu Nneochi"],Adamawa:["Demsa","Fufore","Ganye","Girei","Gombi","Guyuk","Hong","Jada","Lamurde","Madagali","Maiha","Mayo Belwa","Michika","Mubi North","Mubi South","Numan","Shelleng","Song","Toungo","Yola North","Yola South"],"Akwa Ibom":["Abak","Eastern Obolo","Eket","Esit Eket","Essien Udim","Etim Ekpo","Etinan","Ibeno","Ibesikpo Asutan","Ibiono‑Ibom","Ika","Ikono","Ikot Abasi","Ikot Ekpene","Ini","Itu","Mbo","Mkpat Enin","Nsit Atai","Nsit Ibom","Nsit Ubium","Obot Akara","Okobo","Onna","Oron","Oruk Anam","Udung Uko","Ukanafun","Uruan","Urue‑Offong/Oruko","Uyo"],Anambra:["Aguata","Anambra East","Anambra West","Anaocha","Awka North","Awka South","Ayamelum","Dunukofia","Ekwusigo","Idemili North","Idemili South","Ihiala","Njikoka","Nnewi North","Nnewi South","Ogbaru","Onitsha North","Onitsha South","Orumba North","Orumba South","Oyi"],Bauchi:["Alkaleri","Bauchi","Bogoro","Damban","Darazo","Dass","Gamawa","Ganjuwa","Giade","Itas/Gadau","Jama'are","Katagum","Kirfi","Misau","Ningi","Shira","Tafawa Balewa","Toro","Warji","Zaki"],Bayelsa:["Brass","Ekeremor","Kolokuma/Opokuma","Nembe","Ogbia","Sagbama","Southern Ijaw","Yenagoa"],Benue:["Ado","Agatu","Apa","Buruku","Gboko","Guma","Gwer East","Gwer West","Katsina‑Ala","Konshisha","Kwande","Logo","Makurdi","Obi","Ogbadibo","Ohimini","Oju","Okpokwu","Otukpo","Tarka","Ukum","Ushongo","Vandeikya"],Borno:["Abadam","Askira/Uba","Bama","Bayo","Biu","Chibok","Damboa","Dikwa","Gubio","Guzamala","Gwoza","Hawul","Jere","Kaga","Kala/Balge","Konduga","Kukawa","Kwaya Kusar","Mafa","Magumeri","Maiduguri","Marte","Mobbar","Monguno","Ngala","Nganzai","Shani"],"Cross River":["Abi","Akamkpa","Akpabuyo","Bakassi","Bekwarra","Biase","Boki","Calabar Municipal","Calabar South","Etung","Ikom","Obanliku","Obubra","Obudu","Odukpani","Ogoja","Yakurr","Yala"],Delta:["Aniocha North","Aniocha South","Bomadi","Burutu","Ethiope East","Ethiope West","Ika North East","Ika South","Isoko North","Isoko South","Ndokwa East","Ndokwa West","Okpe","Oshimili North","Oshimili South","Patani","Sapele","Udu","Ughelli North","Ughelli South","Ukwuani","Uvwie","Warri North","Warri South","Warri South West"],Ebonyi:["Abakaliki","Afikpo North","Afikpo South","Ebonyi","Ezza North","Ezza South","Ikwo","Ishielu","Ivo","Izzi","Ohaozara","Ohaukwu","Onicha"],Edo:["Akoko‑Edo","Egor","Esan Central","Esan North‑East","Esan South‑East","Esan West","Etsako Central","Etsako East","Etsako West","Igueben","Ikpoba‑Okha","Orhionmwon","Oredo","Ovia North‑East","Ovia South‑West","Uhunmwonde"],Ekiti:["Ado Ekiti","Efon","Ekiti East","Ekiti South‑West","Ekiti West","Emure","Gbonyin","Ido Osi","Ijero","Ikere","Ikole","Ilejemeje","Irepodun/Ifelodun","Ise/Orun","Moba","Oye"],Enugu:["Aninri","Awgu","Enugu East","Enugu North","Enugu South","Ezeagu","Igbo Etiti","Igbo Eze North","Igbo Eze South","Isi Uzo","Nkanu East","Nkanu West","Nsukka","Oji River","Udenu","Udi","Uzo Uwani"],Gombe:["Akko","Balanga","Billiri","Dukku","Funakaye","Gombe","Kaltungo","Kwami","Nafada","Shongom","Yamaltu/Deba"],Imo:["Aboh Mbaise","Ahiazu Mbaise","Ehime Mbano","Ezinihitte","Ideato North","Ideato South","Ihitte/Uboma","Ikeduru","Isiala Mbano","Isu","Mbaitoli","Ngor Okpala","Njaba","Nkwerre","Nwangele","Obowo","Oguta","Ohaji/Egbema","Okigwe","Orlu","Orsu","Oru East","Oru West","Owerri Municipal","Owerri North","Owerri West"],Jigawa:["Auyo","Babura","Biriniwa","Birnin Kudu","Buji","Dutse","Gagarawa","Garki","Gumel","Guri","Gwaram","Gwiwa","Hadejia","Jahun","Kafin Hausa","Kaugama","Kazaure","Kiri Kasama","Kiyawa","Maigatari","Malam Madori","Miga","Ringim","Roni","Sule-Tankarkar","Taura","Yankwashi"],Kaduna:["Birnin Gwari","Chikun","Giwa","Igabi","Ikara","Jaba","Jema'a","Kachia","Kaduna North","Kaduna South","Kagarko","Kajuru","Kaura","Kauru","Kubau","Kudan","Lere","Makarfi","Sabon Gari","Sanga","Soba","Zangon Kataf","Zaria"],Kano:["Ajingi","Albasu","Bagwai","Bebeji","Bichi","Bunkure","Dala","Dambatta","Dawakin Kudu","Dawakin Tofa","Doguwa","Fagge","Gabasawa","Garko","Garun Mallam","Gaya","Gezawa","Gwale","Gwarzo","Kabo","Kano Municipal","Karaye","Kibiya","Kiru","Kumbotso","Kunchi","Kura","Madobi","Makoda","Minjibir","Nasarawa","Rano","Rimin Gado","Rogo","Shanono","Sumaila","Takai","Tarauni","Tofa","Tsanyawa","Tudun Wada","Ungogo","Warawa","Wudil"],Katsina:["Bakori","Batagarawa","Batsari","Baure","Bindawa","Charanchi","Dandume","Danja","Dan Musa","Daura","Dutsi","Dutsin Ma","Faskari","Funtua","Ingawa","Jibia","Kafur","Kaita","Kankara","Kankia","Katsina","Kurfi","Kusada","Mai’Adua","Malumfashi","Mani","Mashi","Matazu","Musawa","Rimi","Sabuwa","Safana","Sandamu","Zango"],Kebbi:["Aleiro","Arewa Dandi","Argungu","Augie","Bagudo","Birnin Kebbi","Bunza","Dandi","Fakai","Gwandu","Jega","Kalgo","Koko/Besse","Maiyama","Ngaski","Sakaba","Shanga","Suru","Wasagu/Danko","Yauri","Zuru"],Kogi:["Adavi","Ajaokuta","Ankpa","Bassa","Dekina","Ibaji","Idah","Igalamela‑Odolu","Ijumu","Kabba/Bunu","Kogi","Lokoja","Mopa‑Muro","Ofu","Ogori/Magongo","Okehi","Okene","Olamaboro","Omala","Yagba East","Yagba West"],Kwara:["Asa","Baruten","Edu","Ekiti","Ifelodun","Ilorin East","Ilorin South","Ilorin West","Irepodun","Isin","Kaiama","Moro","Offa","Oke Ero","Oyun","Pategi"],Lagos:["Agege","Ajeromi-Ifelodun","Alimosho","Amuwo-Odofin","Apapa","Badagry","Epe","Eti-Osa","Ibeju-Lekki","Ifako-Ijaiye","Ikeja","Ikorodu","Kosofe","Lagos Island","Lagos Mainland","Mushin","Ojo","Oshodi-Isolo","Shomolu","Surulere"],Nasarawa:["Akwanga","Awe","Doma","Karu","Keana","Keffi","Kokona","Lafia","Nasarawa","Nasarawa Egon","Obi","Toto","Wamba"],Niger:["Agaie","Agwara","Bida","Borgu","Bosso","Chanchaga","Edati","Gbako","Gurara","Katcha","Kontagora","Lapai","Lavun","Magama","Mariga","Mashegu","Mokwa","Muya","Paikoro","Rafi","Rijau","Shiroro","Suleja","Tafa","Wushishi"],Ogun:["Abeokuta North","Abeokuta South","Ado-Odo/Ota","Egbado North","Egbado South","Ewekoro","Ifo","Ijebu East","Ijebu North","Ijebu North East","Ijebu Ode","Ikenne","Imeko Afon","Ipokia","Obafemi Owode","Odeda","Odogbolu","Ogun Waterside","Remo North","Sagamu"],Ondo:["Akoko North-East","Akoko North-West","Akoko South-East","Akoko South-West","Akure North","Akure South","Ese Odo","Idanre","Ifedore","Ilaje","Ile Oluji/Okeigbo","Irele","Odigbo","Okitipupa","Ondo East","Ondo West","Ose","Owo"],Osun:["Aiyedaade","Aiyedire","Atakunmosa East","Atakunmosa West","Boluwaduro","Boripe","Ede North","Ede South","Egbedore","Ejigbo","Ife Central","Ife East","Ife North","Ife South","Ifedayo","Ifelodun","Ila","Ilesa East","Ilesa West","Irepodun","Irewole","Isokan","Iwo","Obokun","Odo Otin","Ola Oluwa","Olorunda","Oriade","Orolu","Osogbo"],Oyo:["Afijio","Akinyele","Atiba","Atisbo","Egbeda","Ibadan North","Ibadan North-East","Ibadan North-West","Ibadan South-East","Ibadan South-West","Ibarapa Central","Ibarapa East","Ibarapa North","Ido","Irepo","Iseyin","Itesiwaju","Iwajowa","Kajola","Lagelu","Ogbomosho North","Ogbomosho South","Ogo Oluwa","Olorunsogo","Oluyole","Ona Ara","Orelope","Ori Ire","Oyo East","Oyo West","Saki East","Saki West","Surulere"],Plateau:["Barkin Ladi","Bassa","Bokkos","Jos East","Jos North","Jos South","Kanam","Kanke","Langtang North","Langtang South","Mangu","Mikang","Pankshin","Qua’an Pan","Riyom","Shendam","Wase"],Rivers:["Abua/Odual","Ahoada East","Ahoada West","Akuku-Toru","Andoni","Asari-Toru","Bonny","Degema","Eleme","Emuoha","Etche","Gokana","Ikwerre","Khana","Obio/Akpor","Ogba/Egbema/Ndoni","Ogu/Bolo","Okrika","Omuma","Opobo/Nkoro","Oyigbo","Port Harcourt","Tai"],Sokoto:["Binji","Bodinga","Dange Shuni","Gada","Goronyo","Gudu","Gwadabawa","Illela","Isa","Kebbe","Kware","Rabah","Sabon Birni","Shagari","Silame","Sokoto North","Sokoto South","Tambuwal","Tangaza","Tureta","Wamako","Wurno","Yabo"],Taraba:["Ardo Kola","Bali","Donga","Gashaka","Gassol","Ibi","Jalingo","Karim Lamido","Kumi","Lau","Sardauna","Takum","Ussa","Wukari","Yorro","Zing"],Yobe:["Bade","Bursari","Damaturu","Fika","Fune","Geidam","Gujba","Gulani","Jakusko","Karasuwa","Machina","Nangere","Nguru","Potiskum","Tarmuwa","Yunusari","Yusufari"],Zamfara:["Anka","Bakura","Birnin Magaji/Kiyaw","Bukkuyum","Bungudu","Gummi","Gusau","Kaura Namoda","Maradun","Maru","Shinkafi","Talata Mafara","Tsafe","Zurmi"]};document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("state");n?Object.keys(su).forEach(k=>{const V=document.createElement("option");V.value=k,V.textContent=k,n.appendChild(V)}):console.error("State dropdown element not found!");const e=document.getElementById("state"),t=document.getElementById("lga");e&&t?e.addEventListener("change",()=>{t.innerHTML='<option value="">Select LGA</option>',(su[e.value]||[]).forEach(V=>{const L=document.createElement("option");L.value=V,L.textContent=V,t.appendChild(L)})}):console.error("State or LGA dropdown element not found!");const i=gu({apiKey:"AIzaSyDpERMUEG6z7JsFuz-0K_106v5pZamLSVk",authDomain:"fmyd-circular-eco-registration.firebaseapp.com",projectId:"fmyd-circular-eco-registration",storageBucket:"fmyd-circular-eco-registration.firebasestorage.app",messagingSenderId:"75870394524",appId:"1:75870394524:web:98ec8481ac5f5820a87559",measurementId:"G-0NNZQMP7TB"}),o=xT(i),a=pE(i),l=Jm();Mp(l).then(()=>console.log("Signed in anonymously")).catch(k=>console.error(k));const h=Lg(i,{provider:new eo("6LdnMKYrAAAAABFmUxHLpIv9VagA73xNakZmWp_i"),isDevDebugMode:!1});Ug(h,!0);const f=document.getElementById("passport"),_=document.getElementById("passport-error"),I=document.getElementById("nin"),A=document.getElementById("nin-error");f&&_?f.addEventListener("change",()=>{const k=f.files[0],V=document.getElementById("passport-box"),L=V.querySelector("img");if(L&&L.remove(),k){if(k.size>100*1024){_.style.display="block",f.value="";return}else _.style.display="none";if(V){const D=document.createElement("img");D.src=URL.createObjectURL(k),D.style.width="100%",D.style.height="100%",D.style.objectFit="cover",D.style.position="absolute",D.style.top="0",D.style.left="0",D.style.zIndex="1",V.appendChild(D);const U=V.querySelector(".plus-sign");U&&(U.style.position="absolute",U.style.top="5px",U.style.right="5px",U.style.zIndex="10")}else console.error("Passport box element not found!")}}):console.error("Passport input or error display element not found!"),I&&A?I.addEventListener("change",()=>{const k=I.files[0],V=document.getElementById("nin-box"),L=V.querySelector("img");if(L&&L.remove(),k){if(k.size>100*1024){A.style.display="block",I.value="";return}else A.style.display="none";if(V){const D=document.createElement("img");D.src=URL.createObjectURL(k),D.style.width="100%",D.style.height="100%",D.style.objectFit="cover",D.style.position="absolute",D.style.top="0",D.style.left="0",D.style.zIndex="1",V.appendChild(D);const U=V.querySelector(".plus-sign");U&&(U.style.position="absolute",U.style.top="5px",U.style.right="5px",U.style.zIndex="10")}else console.error("NIN box element not found!")}}):console.error("NIN input or error display element not found!");const P=document.getElementById("dob"),C=document.getElementById("age-display");P&&C?P.addEventListener("change",()=>{const k=P.value;if(k){const V=new Date,L=new Date(k);let D=V.getFullYear()-L.getFullYear();const U=V.getMonth()-L.getMonth();(U<0||U===0&&V.getDate()<L.getDate())&&D--,C.textContent=`Age: ${D}`}else C.textContent=""}):console.error("Date of Birth input or Age Display element not found!");const O=document.getElementById("registration-form");O?O.addEventListener("submit",async k=>{k.preventDefault(),console.log("Form submission triggered!");const V=O.passport.files[0],L=O.nin.files[0];if(!V||!L){alert("Please select both Passport and NIN files.");return}const D=iu(o,`passport/${Date.now()}_${V.name}`),U=iu(o,`nin/${Date.now()}_${L.name}`),Ae=await nu(D,V),se=await nu(U,L),T=await ru(Ae.ref),p=await ru(se.ref),g=O.dob.value;let y="";if(g){const w=new Date,m=new Date(g);y=w.getFullYear()-m.getFullYear();const fe=w.getMonth()-m.getMonth();(fe<0||fe===0&&w.getDate()<m.getDate())&&y--}const E={firstName:O.first_name.value.trim(),middleName:O.middle_name.value.trim(),lastName:O.last_name.value.trim(),phone:O.phone.value.trim(),email:O.email.value.trim(),dob:g,age:y,state:O.state.value,lga:O.lga.value,address:O.address.value.trim(),areaOfTraining:O.training_area.value,sex:O.sex.value,passportURL:T,ninURL:p,timestamp:new Date};try{await kE(dE(a,"registrations"),E);const w=document.getElementById("form-status"),m=document.getElementById("loading-spinner"),fe=document.getElementById("success-check");w&&m&&fe?(w.style.display="block",m.style.display="inline-block",fe.style.display="none",setTimeout(()=>{m.style.display="none",fe.style.display="block",O.reset(),setTimeout(()=>{w.style.display="none"},3e3)},2500)):console.error("Form status elements (form-status, loading-spinner, success-check) not found!")}catch(w){console.error("Error writing to Firestore:",w),alert("Error: registration not saved.")}}):console.error("Registration form element not found!")});
