(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))S(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&S(c)}).observe(document,{childList:!0,subtree:!0});function w(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function S(i){if(i.ep)return;i.ep=!0;const s=w(i);fetch(i.href,s)}})();var G=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I={exports:{}};(function(p,d){(function(w,S){p.exports=S()})(G,function(){return(()=>{var w={870:(s,c,f)=>{f.r(c),f.d(c,{createEndpoint:()=>P,expose:()=>N,proxy:()=>H,proxyMarker:()=>M,releaseProxy:()=>O,transfer:()=>x,transferHandlers:()=>v,windowEndpoint:()=>F,wrap:()=>t});const M=Symbol("Comlink.proxy"),P=Symbol("Comlink.endpoint"),O=Symbol("Comlink.releaseProxy"),g=Symbol("Comlink.thrown"),b=e=>typeof e=="object"&&e!==null||typeof e=="function",v=new Map([["proxy",{canHandle:e=>b(e)&&e[M],serialize(e){const{port1:o,port2:h}=new MessageChannel;return N(e,o),[h,[h]]},deserialize:e=>(e.start(),t(e))}],["throw",{canHandle:e=>b(e)&&g in e,serialize({value:e}){let o;return o=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[o,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}}]]);function N(e,o=self){o.addEventListener("message",function h(u){if(!u||!u.data)return;const{id:L,type:_,path:m}=Object.assign({path:[]},u.data),k=(u.data.argumentList||[]).map(q);let y;try{const E=m.slice(0,-1).reduce((j,C)=>j[C],e),$=m.reduce((j,C)=>j[C],e);switch(_){case 0:y=$;break;case 1:E[m.slice(-1)[0]]=q(u.data.value),y=!0;break;case 2:y=$.apply(E,k);break;case 3:y=H(new $(...k));break;case 4:{const{port1:j,port2:C}=new MessageChannel;N(e,C),y=x(j,[j])}break;case 5:y=void 0}}catch(E){y={value:E,[g]:0}}Promise.resolve(y).catch(E=>({value:E,[g]:0})).then(E=>{const[$,j]=R(E);o.postMessage(Object.assign(Object.assign({},$),{id:L}),j),_===5&&(o.removeEventListener("message",h),T(o))})}),o.start&&o.start()}function T(e){(function(o){return o.constructor.name==="MessagePort"})(e)&&e.close()}function t(e,o){return a(e,[],o)}function n(e){if(e)throw new Error("Proxy has been released and is not useable")}function a(e,o=[],h=function(){}){let u=!1;const L=new Proxy(h,{get(_,m){if(n(u),m===O)return()=>A(e,{type:5,path:o.map(k=>k.toString())}).then(()=>{T(e),u=!0});if(m==="then"){if(o.length===0)return{then:()=>L};const k=A(e,{type:0,path:o.map(y=>y.toString())}).then(q);return k.then.bind(k)}return a(e,[...o,m])},set(_,m,k){n(u);const[y,E]=R(k);return A(e,{type:1,path:[...o,m].map($=>$.toString()),value:y},E).then(q)},apply(_,m,k){n(u);const y=o[o.length-1];if(y===P)return A(e,{type:4}).then(q);if(y==="bind")return a(e,o.slice(0,-1));const[E,$]=r(k);return A(e,{type:2,path:o.map(j=>j.toString()),argumentList:E},$).then(q)},construct(_,m){n(u);const[k,y]=r(m);return A(e,{type:3,path:o.map(E=>E.toString()),argumentList:k},y).then(q)}});return L}function r(e){const o=e.map(R);return[o.map(u=>u[0]),(h=o.map(u=>u[1]),Array.prototype.concat.apply([],h))];var h}const l=new WeakMap;function x(e,o){return l.set(e,o),e}function H(e){return Object.assign(e,{[M]:!0})}function F(e,o=self,h="*"){return{postMessage:(u,L)=>e.postMessage(u,h,L),addEventListener:o.addEventListener.bind(o),removeEventListener:o.removeEventListener.bind(o)}}function R(e){for(const[o,h]of v)if(h.canHandle(e)){const[u,L]=h.serialize(e);return[{type:3,name:o,value:u},L]}return[{type:0,value:e},l.get(e)||[]]}function q(e){switch(e.type){case 3:return v.get(e.name).deserialize(e.value);case 0:return e.value}}function A(e,o,h){return new Promise(u=>{const L=new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");e.addEventListener("message",function _(m){m.data&&m.data.id&&m.data.id===L&&(e.removeEventListener("message",_),u(m.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:L},o),h)})}},162:function(s,c,f){var M=this&&this.__createBinding||(Object.create?function(t,n,a,r){r===void 0&&(r=a),Object.defineProperty(t,r,{enumerable:!0,get:function(){return n[a]}})}:function(t,n,a,r){r===void 0&&(r=a),t[r]=n[a]}),P=this&&this.__setModuleDefault||(Object.create?function(t,n){Object.defineProperty(t,"default",{enumerable:!0,value:n})}:function(t,n){t.default=n}),O=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(t!=null)for(var a in t)a!=="default"&&Object.prototype.hasOwnProperty.call(t,a)&&M(n,t,a);return P(n,t),n};Object.defineProperty(c,"__esModule",{value:!0}),c.createDbWorker=void 0;const g=O(f(870));async function b(t){if(t.data&&t.data.action==="eval"){const n=new Int32Array(t.data.notify,0,2),a=new Uint8Array(t.data.notify,8);let r;try{r={ok:await T(t.data.request)}}catch(x){console.error("worker request error",t.data.request,x),r={err:String(x)}}const l=new TextEncoder().encode(JSON.stringify(r));a.set(l,0),n[1]=l.length,Atomics.notify(n,0)}}function v(t){if(t.tagName==="BODY")return"body";const n=[];for(;t.parentElement&&t.tagName!=="BODY";){if(t.id){n.unshift("#"+t.id);break}{let a=1,r=t;for(;r.previousElementSibling;)r=r.previousElementSibling,a++;n.unshift(t.tagName.toLowerCase()+":nth-child("+a+")")}t=t.parentElement}return n.join(" > ")}function N(t){return Object.keys(t)}async function T(t){if(console.log("dom vtable request",t),t.type==="select")return[...document.querySelectorAll(t.selector)].map(n=>{const a={};for(const r of t.columns)r==="selector"?a.selector=v(n):r==="parent"?n.parentElement&&(a.parent=n.parentElement?v(n.parentElement):null):r==="idx"||(a[r]=n[r]);return a});if(t.type==="insert"){if(!t.value.parent)throw Error('"parent" column must be set when inserting');const n=document.querySelectorAll(t.value.parent);if(n.length===0)throw Error(`Parent element ${t.value.parent} could not be found`);if(n.length>1)throw Error(`Parent element ${t.value.parent} ambiguous (${n.length} results)`);const a=n[0];if(!t.value.tagName)throw Error("tagName must be set for inserting");const r=document.createElement(t.value.tagName);for(const l of N(t.value))if(t.value[l]!==null){if(l==="tagName"||l==="parent")continue;if(l==="idx"||l==="selector")throw Error(`${l} can't be set`);r[l]=t.value[l]}return a.appendChild(r),null}if(t.type==="update"){const n=document.querySelector(t.value.selector);if(!n)throw Error(`Element ${t.value.selector} not found!`);const a=[];for(const r of N(t.value)){const l=t.value[r];if(r!=="parent"){if(r!=="idx"&&r!=="selector"&&l!==n[r]){if(console.log("SETTING ",r,n[r],"->",l),r==="tagName")throw Error("can't change tagName");a.push(r)}}else if(l!==v(n.parentElement)){const x=document.querySelectorAll(l);if(x.length!==1)throw Error(`Invalid target parent: found ${x.length} matches`);x[0].appendChild(n)}}for(const r of a)n[r]=t.value[r];return null}throw Error(`unknown request ${t.type}`)}g.transferHandlers.set("WORKERSQLPROXIES",{canHandle:t=>!1,serialize(t){throw Error("no")},deserialize:t=>(t.start(),g.wrap(t))}),c.createDbWorker=async function(t,n,a,r=1/0){const l=new Worker(n),x=g.wrap(l),H=await x.SplitFileHttpDatabase(a,t,void 0,r);return l.addEventListener("message",b),{db:H,worker:x,configs:t}}},432:function(s,c,f){var M=this&&this.__createBinding||(Object.create?function(O,g,b,v){v===void 0&&(v=b),Object.defineProperty(O,v,{enumerable:!0,get:function(){return g[b]}})}:function(O,g,b,v){v===void 0&&(v=b),O[v]=g[b]}),P=this&&this.__exportStar||function(O,g){for(var b in O)b==="default"||Object.prototype.hasOwnProperty.call(g,b)||M(g,O,b)};Object.defineProperty(c,"__esModule",{value:!0}),P(f(162),c)}},S={};function i(s){var c=S[s];if(c!==void 0)return c.exports;var f=S[s]={exports:{}};return w[s].call(f.exports,f,f.exports,i),f.exports}return i.d=(s,c)=>{for(var f in c)i.o(c,f)&&!i.o(s,f)&&Object.defineProperty(s,f,{enumerable:!0,get:c[f]})},i.o=(s,c)=>Object.prototype.hasOwnProperty.call(s,c),i.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},i(432)})()})})(I);const K=new URL("/assets/sqlite.worker.e48eea05.js",self.location),Q=new URL("/assets/sql-wasm.f71cee54.wasm",self.location);async function X(p){return(await I.exports.createDbWorker([{from:"inline",config:{serverMode:"full",url:"/ecdict.db",requestChunkSize:32768}}],K.toString(),Q.toString())).db.query("SELECT * FROM stardict WHERE word=?",[p])}function W(p){return p.split(`
`).reduce((d,w)=>(d+=`<p class="divide">${w}</p>`,d),"")}function D(p,d){return p.split(d).reduce((w,S)=>(w+=`<span class="separator">${S}</span>`,w),"")}function Y(p){const{word:d,phonetic:w,tag:S,translation:i,definition:s,exchange:c}=p,f=w&&`<p class="voice-wrap">
      <span>[${w||"-"}]</span>
      <img id="voice" data-text=${d} class="icon" src="/Speaker.svg"/>
    </p>`,M=i&&`<div>${W(i)}</div>`,P=s&&`<div>${W(s)}</div>`,O=c&&`<p class="sep-wrap ex-wrap">${D(c,"/")}</p>`,g=S&&`<p class="sep-wrap tag-wrap">${D(S," ")}</p>`;return`<h2>${d}</h2>${f}${M}${P}${O}${g}`}const U=document.querySelector("#wordInput"),J=document.querySelector("#btn"),z=document.querySelector("#result");async function B(){z.innerHTML="loading...";const p=U.value||"hello world",[d]=await X(p);d?z.innerHTML=Y(d):z.innerHTML="Query is empty!"}U.addEventListener("keydown",p=>{p.keyCode===13&&B()});J.addEventListener("click",async()=>{B()});z.addEventListener("click",p=>{if(p.target.id==="voice"){const{text:d}=p.target.dataset,w=`https://dict.youdao.com/dictvoice?audio=${d}&type=1`;new Audio(w).play()}});
