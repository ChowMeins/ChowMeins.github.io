import{S as A,ag as Z,ah as $,a1 as P,ai as C,t as y,U as _,aj as o,ak as L,Z as G,al as z,aa as V,a2 as F,am as H,an as J,K as B,a0 as K,ao as Q,ap as W,B as X,aq as k,ae as p,ar as ee,w as M,as as re,u as Y,at as ne,au as ae,av as te,aw as ie}from"./5Pmru3ik.js";import{s as fe,g as ue}from"./CU8BseEa.js";function O(r,s=null,d){if(typeof r!="object"||r===null||A in r)return r;const l=V(r);if(l!==Z&&l!==$)return r;var i=new Map,c=F(r),I=P(0);c&&i.set("length",P(r.length));var w;return new Proxy(r,{defineProperty(f,e,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&z();var t=i.get(e);return t===void 0?(t=P(n.value),i.set(e,t)):o(t,O(n.value,w)),!0},deleteProperty(f,e){var n=i.get(e);if(n===void 0)e in f&&i.set(e,P(_));else{if(c&&typeof e=="string"){var t=i.get("length"),a=Number(e);Number.isInteger(a)&&a<t.v&&o(t,a)}o(n,_),j(I)}return!0},get(f,e,n){var b;if(e===A)return r;var t=i.get(e),a=e in f;if(t===void 0&&(!a||(b=L(f,e))!=null&&b.writable)&&(t=P(O(a?f[e]:_,w)),i.set(e,t)),t!==void 0){var u=y(t);return u===_?void 0:u}return Reflect.get(f,e,n)},getOwnPropertyDescriptor(f,e){var n=Reflect.getOwnPropertyDescriptor(f,e);if(n&&"value"in n){var t=i.get(e);t&&(n.value=y(t))}else if(n===void 0){var a=i.get(e),u=a==null?void 0:a.v;if(a!==void 0&&u!==_)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return n},has(f,e){var u;if(e===A)return!0;var n=i.get(e),t=n!==void 0&&n.v!==_||Reflect.has(f,e);if(n!==void 0||G!==null&&(!t||(u=L(f,e))!=null&&u.writable)){n===void 0&&(n=P(t?O(f[e],w):_),i.set(e,n));var a=y(n);if(a===_)return!1}return t},set(f,e,n,t){var m;var a=i.get(e),u=e in f;if(c&&e==="length")for(var b=n;b<a.v;b+=1){var S=i.get(b+"");S!==void 0?o(S,_):b in f&&(S=P(_),i.set(b+"",S))}a===void 0?(!u||(m=L(f,e))!=null&&m.writable)&&(a=P(void 0),o(a,O(n,w)),i.set(e,a)):(u=a.v!==_,o(a,O(n,w)));var g=Reflect.getOwnPropertyDescriptor(f,e);if(g!=null&&g.set&&g.set.call(t,n),!u){if(c&&typeof e=="string"){var h=i.get("length"),E=Number(e);Number.isInteger(E)&&E>=h.v&&o(h,E+1)}j(I)}return!0},ownKeys(f){y(I);var e=Reflect.ownKeys(f).filter(a=>{var u=i.get(a);return u===void 0||u.v!==_});for(var[n,t]of i)t.v!==_&&!(n in f)&&e.push(n);return e},setPrototypeOf(){C()}})}function j(r,s=1){o(r,r.v+s)}let D=!1,U=Symbol();function de(r,s,d){const l=d[s]??(d[s]={store:null,source:K(void 0),unsubscribe:B});if(l.store!==r&&!(U in d))if(l.unsubscribe(),l.store=r??null,r==null)l.source.v=void 0,l.unsubscribe=B;else{var i=!0;l.unsubscribe=fe(r,c=>{i?l.source.v=c:o(l.source,c)}),i=!1}return r&&U in d?ue(r):y(l.source)}function _e(){const r={};function s(){H(()=>{for(var d in r)r[d].unsubscribe();J(r,U,{enumerable:!1,value:!0})})}return[r,s]}function se(r){var s=D;try{return D=!1,[r(),D]}finally{D=s}}function ce(r,s,d,l){var q;var i=(d&ie)!==0,c=!p||(d&ee)!==0,I=(d&re)!==0,w=(d&te)!==0,f=!1,e;I?[e,f]=se(()=>r[s]):e=r[s];var n=A in r||k in r,t=I&&(((q=L(r,s))==null?void 0:q.set)??(n&&s in r&&(v=>r[s]=v)))||void 0,a=l,u=!0,b=!1,S=()=>(b=!0,u&&(u=!1,w?a=Y(l):a=l),a);e===void 0&&l!==void 0&&(t&&c&&Q(),e=S(),t&&t(e));var g;if(c)g=()=>{var v=r[s];return v===void 0?S():(u=!0,b=!1,v)};else{var h=(i?M:X)(()=>r[s]);h.f|=W,g=()=>{var v=y(h);return v!==void 0&&(a=void 0),v===void 0?a:v}}if(!(d&ne))return g;if(t){var E=r.$$legacy;return function(v,R){return arguments.length>0?((!c||!R||E||f)&&t(R?g():v),v):g()}}var m=!1,x=K(e),N=M(()=>{var v=g(),R=y(x);return m?(m=!1,R):x.v=v});return i||(N.equals=ae),function(v,R){if(arguments.length>0){const T=R?y(N):c&&I?O(v):v;return N.equals(T)||(m=!0,o(x,T),b&&a!==void 0&&(a=T),Y(()=>y(N))),v}return y(N)}}export{O as a,de as b,ce as p,_e as s};
