import{am as W,b as X,h as y,d as M,a as z,W as F,ak as Y,H as J,c as D,f as C,j as k,an as I,g as q,i as B,p as P,R as L,ao as Q,ap as Z,aj as $,aq as j,ar as ee,ac as re,ag as ae,as as se,a9 as ne,N as m,at as fe,au as ie,av as le,ae as te,aw as ve,V as O,ax as ue,ay as _e}from"./runtime.C54dylD5.js";import{b as oe}from"./events.kKpztpXt.js";function Ae(r,e){return e}function de(r,e,a,f){for(var l=[],v=e.length,u=0;u<v;u++)Z(e[u].e,l,!0);var h=v>0&&l.length===0&&a!==null;if(h){var c=a.parentNode;$(c),c.append(a),f.clear(),E(r,e[0].prev,e[v-1].next)}j(l,()=>{for(var o=0;o<v;o++){var s=e[o];h||(f.delete(s.k),E(r,s.prev,s.next)),ee(s.e,!h)}})}function Ee(r,e,a,f,l,v=null){var u=r,h={flags:e,items:new Map,first:null};{var c=r;u=y?M(re(c)):c.appendChild(W())}y&&z();var o=null,s=!1;X(()=>{var _=a(),i=F(_)?_:_==null?[]:Y(_),n=i.length;if(s&&n===0)return;s=n===0;let g=!1;if(y){var N=u.data===J;N!==(n===0)&&(u=D(),M(u),C(!1),g=!0)}if(y){for(var A=null,t,d=0;d<n;d++){if(k.nodeType===8&&k.data===ae){u=k,g=!0,C(!1);break}var x=i[d],T=f(x,d);t=G(k,h,A,null,x,T,d,l,e),h.items.set(T,t),A=t}n>0&&M(D())}if(!y){var p=se;ce(i,h,u,l,e,(p.f&I)!==0,f)}v!==null&&(n===0?o?q(o):o=B(()=>v(u)):o!==null&&P(o,()=>{o=null})),g&&C(!0),a()}),y&&(u=k)}function ce(r,e,a,f,l,v,u){var h=r.length,c=e.items,o=e.first,s=o,_,i=null,n=[],g=[],N,A,t,d;for(d=0;d<h;d+=1){if(N=r[d],A=u(N,d),t=c.get(A),t===void 0){var x=s?s.e.nodes_start:a;i=G(x,e,i,i===null?e.first:i.next,N,A,d,f,l),c.set(A,i),n=[],g=[],s=i.next;continue}if(he(t,N,d),t.e.f&I&&q(t.e),t!==s){if(_!==void 0&&_.has(t)){if(n.length<g.length){var T=g[0],p;i=T.prev;var H=n[0],w=n[n.length-1];for(p=0;p<n.length;p+=1)S(n[p],T,a);for(p=0;p<g.length;p+=1)_.delete(g[p]);E(e,H.prev,w.next),E(e,i,H),E(e,w,T),s=T,i=w,d-=1,n=[],g=[]}else _.delete(t),S(t,s,a),E(e,t.prev,t.next),E(e,t,i===null?e.first:i.next),E(e,i,t),i=t;continue}for(n=[],g=[];s!==null&&s.k!==A;)(v||!(s.e.f&I))&&(_??(_=new Set)).add(s),g.push(s),s=s.next;if(s===null)continue;t=s}n.push(t),i=t,s=t.next}if(s!==null||_!==void 0){for(var R=_===void 0?[]:Y(_);s!==null;)(v||!(s.e.f&I))&&R.push(s),s=s.next;var K=R.length;if(K>0){var U=h===0?a:null;de(e,R,U,c)}}L.first=e.first&&e.first.e,L.last=i&&i.e}function he(r,e,a,f){Q(r.v,e),r.i=a}function G(r,e,a,f,l,v,u,h,c){var o=(c&ie)!==0,s=(c&le)===0,_=o?s?ne(l):m(l):l,i=c&fe?m(u):u,n={i,v:_,k:v,a:null,e:null,prev:a,next:f};try{return n.e=B(()=>h(r,_,i),y),n.e.prev=a&&a.e,n.e.next=f&&f.e,a===null?e.first=n:(a.next=n,a.e.next=n.e),f!==null&&(f.prev=n,f.e.prev=n.e),n}finally{}}function S(r,e,a){for(var f=r.next?r.next.e.nodes_start:a,l=e?e.e.nodes_start:a,v=r.e.nodes_start;v!==f;){var u=te(v);l.before(v),v=u}}function E(r,e,a){e===null?r.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function Te(r){if(y){var e=!1,a=()=>{if(!e){if(e=!0,r.hasAttribute("value")){var f=r.value;b(r,"value",null),r.value=f}if(r.hasAttribute("checked")){var l=r.checked;b(r,"checked",null),r.checked=l}}};r.__on_r=a,ve(a),oe()}}function b(r,e,a,f){var l=r.__attributes??(r.__attributes={});y&&(l[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName==="LINK")||l[e]!==(l[e]=a)&&(e==="style"&&"__styles"in r&&(r.__styles={}),e==="loading"&&(r[ue]=a),a==null?r.removeAttribute(e):typeof a!="string"&&ge(r).includes(e)?r[e]=a:r.setAttribute(e,a))}var V=new Map;function ge(r){var e=V.get(r.nodeName);if(e)return e;V.set(r.nodeName,e=[]);for(var a,f=O(r),l=Element.prototype;l!==f;){a=_e(f);for(var v in a)a[v].set&&e.push(v);f=O(f)}return e}export{Ee as e,Ae as i,Te as r,b as s};