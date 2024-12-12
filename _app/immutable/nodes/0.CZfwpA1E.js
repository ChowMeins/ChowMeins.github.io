import{a as S,t as M,n as et}from"../chunks/disclose-version.Dq0sCcJW.js";import"../chunks/legacy.CI7wVzwO.js";import{h as z,a as st,E as rt,aH as it,aI as nt,e as ot,u as lt,aJ as ft,R as P,aK as ct,q as ut,n as I,aL as vt,aM as dt,aA as j,$ as G,as as pt,z as X,aN as _t,aO as mt,C as D,B as ht,A as Q,P as L,v as F,G as k,D as w,F as b,K as R}from"../chunks/runtime.C54dylD5.js";import{e as $}from"../chunks/events.kKpztpXt.js";import{i as wt}from"../chunks/if.DZoaFojv.js";import{a as bt}from"../chunks/render.Coku4NcK.js";import{b as U}from"../chunks/this.b0K__6uF.js";import{i as V}from"../chunks/lifecycle.BYGTvVDS.js";import{o as Y}from"../chunks/index-client.BXAvXOh2.js";import{s as gt,a as yt}from"../chunks/store.9Ol4gXrP.js";import{w as xt}from"../chunks/index.CUROTygF.js";import{p as kt}from"../chunks/props.BmALSADD.js";function Ot(a,t,r,e,s){var l;z&&st();var n=(l=t.$$slots)==null?void 0:l[r],o=!1;n===!0&&(n=t.children,o=!0),n===void 0||n(a,o?()=>e:e)}function Nt(a,t){var r=a.__className,e=Tt(t);z&&a.getAttribute("class")===e?a.__className=e:(r!==e||z&&a.getAttribute("class")!==e)&&(e===""?a.removeAttribute("class"):a.setAttribute("class",e),a.__className=e)}function Tt(a){return a??""}const Et=()=>performance.now(),y={tick:a=>requestAnimationFrame(a),now:()=>Et(),tasks:new Set};function Z(){const a=y.now();y.tasks.forEach(t=>{t.c(a)||(y.tasks.delete(t),t.f())}),y.tasks.size!==0&&y.tick(Z)}function Ft(a){let t;return y.tasks.size===0&&y.tick(Z),{promise:new Promise(r=>{y.tasks.add(t={c:a,f:r})}),abort(){y.tasks.delete(t)}}}function C(a,t){a.dispatchEvent(new CustomEvent(t))}function At(a){if(a==="float")return"cssFloat";if(a==="offset")return"cssOffset";if(a.startsWith("--"))return a;const t=a.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function q(a){const t={},r=a.split(";");for(const e of r){const[s,n]=e.split(":");if(!s||n===void 0)break;const o=At(s.trim());t[o]=n.trim()}return t}const It=a=>a;function K(a,t,r,e){var s=(a&ft)!==0,n=(a&vt)!==0,o=s&&n,l=(a&dt)!==0,h=o?"both":s?"in":"out",_,d=t.inert,f,c;function g(){var u=pt,N=P;j(null),G(null);try{return _??(_=r()(t,(e==null?void 0:e())??{},{direction:h}))}finally{j(u),G(N)}}var m={is_global:l,in(){var u;if(t.inert=d,!s){c==null||c.abort(),(u=c==null?void 0:c.reset)==null||u.call(c);return}n||f==null||f.abort(),C(t,"introstart"),f=H(t,g(),c,1,()=>{C(t,"introend"),f==null||f.abort(),f=_=void 0})},out(u){if(!n){u==null||u(),_=void 0;return}t.inert=!0,C(t,"outrostart"),c=H(t,g(),f,0,()=>{C(t,"outroend"),u==null||u()})},stop:()=>{f==null||f.abort(),c==null||c.abort()}},i=P;if((i.transitions??(i.transitions=[])).push(m),s&&bt){var v=l;if(!v){for(var p=i.parent;p&&p.f&rt;)for(;(p=p.parent)&&!(p.f&it););v=!p||(p.f&nt)!==0}v&&ot(()=>{lt(()=>m.in())})}}function H(a,t,r,e,s){var n=e===1;if(ct(t)){var o,l=!1;return ut(()=>{if(!l){var v=t({direction:n?"in":"out"});o=H(a,v,r,e,s)}}),{abort:()=>{l=!0,o==null||o.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return s(),{abort:I,deactivate:I,reset:I,t:()=>e};const{delay:h=0,css:_,tick:d,easing:f=It}=t;var c=[];if(n&&r===void 0&&(d&&d(0,1),_)){var g=q(_(0,1));c.push(g,g)}var m=()=>1-e,i=a.animate(c,{duration:h});return i.onfinish=()=>{var v=(r==null?void 0:r.t())??1-e;r==null||r.abort();var p=e-v,u=t.duration*Math.abs(p),N=[];if(u>0){if(_)for(var T=Math.ceil(u/16.666666666666668),A=0;A<=T;A+=1){var E=v+p*f(A/T),B=_(E,1-E);N.push(q(B))}m=()=>{var x=i.currentTime;return v+p*f(x/u)},d&&Ft(()=>{if(i.playState!=="running")return!1;var x=m();return d(x,1-x),!0})}i=a.animate(N,{duration:u,fill:"forwards"}),i.onfinish=()=>{m=()=>e,d==null||d(e,1-e),s()}},{abort:()=>{i&&(i.cancel(),i.effect=null,i.onfinish=I)},deactivate:()=>{s=I},reset:()=>{e===0&&(d==null||d(1,0))},t:()=>m()}}const $t=!0,St="always",ta=Object.freeze(Object.defineProperty({__proto__:null,prerender:$t,trailingSlash:St},Symbol.toStringTag,{value:"Module"})),O=xt(!1);var Ct=M('<button class="hamburger svelte-cu5xmw"><svg class="w-[5vh] h-[5vh] ml-auto" viewBox="0 0 75 50" fill="none" role="button" xmlns="http://www.w3.org/2000/svg"><rect id="box1" x="0.5" y="0.5" width="73" height="7" rx="3.5" fill="white" stroke="white" class="svelte-cu5xmw"></rect><rect id="box2" y="21" width="73" height="8" rx="4" fill="white" class="svelte-cu5xmw"></rect><rect id="box3" y="42" width="73" height="8" rx="4" fill="white" class="svelte-cu5xmw"></rect></svg></button>');function Mt(a,t){X(t,!1);const r=gt(),e=()=>yt(O,"$open",r);let s=[];Y(()=>{s=[document.getElementById("box1"),document.getElementById("box2"),document.getElementById("box3")],O.subscribe(l=>{})});function n(l){l&&s[0]&&s[1]&&s[2]&&(s[0].style.transform="translateX(19px) rotate(45deg)",s[1].style.width="0",s[1].style.opacity="0",s[2].style.transform="translate(-18px, 22px) rotate(-45deg)"),l||s[0]&&s[1]&&s[2]&&(s[0].style.transform="rotate(0deg) translateX(0px) ",s[1].style.width="73",s[1].style.opacity="1",s[2].style.transform="rotate(0deg) translate(0px, 0px) ")}_t(()=>e(),()=>{n(e())}),mt(),V();var o=Ct();$("click",o,()=>O.update(l=>!l)),S(a,o),D()}function Bt(a){const t=a-1;return t*t*t+1}function J(a){const t=typeof a=="string"&&a.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[a,"px"]}function W(a,{delay:t=0,duration:r=400,easing:e=Bt,x:s=0,y:n=0,opacity:o=0}={}){const l=getComputedStyle(a),h=+l.opacity,_=l.transform==="none"?"":l.transform,d=h*(1-o),[f,c]=J(s),[g,m]=J(n);return{delay:t,duration:r,easing:e,css:(i,v)=>`
			transform: ${_} translate(${(1-i)*f}${c}, ${(1-i)*g}${m});
			opacity: ${h-d*v}`}}var Lt=et('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>');function Rt(a,t){let r=kt(t,"className",8);var e=Lt();ht(()=>Nt(e,r())),S(a,e)}var zt=M('<div id="sidebar" class="oswald svelte-uoapdk"><ul class="w-full block"><li class="menu-bar svelte-uoapdk"><a href="/" class="svelte-uoapdk">HOME</a></li> <li class="menu-bar svelte-uoapdk"><a href="/tools" class="svelte-uoapdk">TOOLS</a></li> <li class="menu-bar svelte-uoapdk"><a href="/portfolio.pdf" class="svelte-uoapdk">PORTFOLIO</a></li> <li class="menu-bar svelte-uoapdk"><a href="https://github.com/ChowMeins" class="svelte-uoapdk">GITHUB</a></li></ul></div>'),Ht=M('<div class="w-full h-full flex gap-8 bg-[#151515] p-8 z-[1]"><ul class="navbar w-full h-full oswald text-white flex svelte-uoapdk"><li class="w-fit text-[1.5rem] text-nowrap mr-auto my-auto"><a href="/">JASON CHAU</a></li> <li class="nav-item svelte-uoapdk"><a href="/">HOME</a></li> <li class="nav-item svelte-uoapdk"><a href="/tools">TOOLS</a></li> <li class="nav-item svelte-uoapdk"><a href="/portfolio.pdf">PORTFOLIO</a></li></ul> <ul class="w-fit h-full gap-2 flex my-auto"><a href="https://github.com/ChowMeins"><!></a></ul> <li id="hamburger-icon" class="svelte-uoapdk"><!></li></div> <!>',1);function Pt(a,t){X(t,!1);let r=R(null),e=R(null),s=R(!1);Y(()=>{O.subscribe(i=>{L(s,i)}),window.addEventListener("resize",()=>{window.innerWidth>900&&O.set(!1)}),window.addEventListener("click",i=>{F(e)&&!F(e).contains(i.target)&&F(s)==!0&&O.set(!1)})});function n(){O.set(!1)}V();var o=Ht(),l=Q(o),h=k(w(l),2),_=w(h),d=w(_);Rt(d,{className:"w-[24px] h-[24px]"}),b(_),b(h);var f=k(h,2),c=w(f);Mt(c,{}),b(f),U(f,i=>L(e,i),()=>F(e)),b(l);var g=k(l,2);{var m=i=>{var v=zt(),p=w(v),u=w(p),N=w(u);b(u);var T=k(u,2),A=w(T);b(T);var E=k(T,2),B=w(E);b(E);var x=k(E,2),tt=w(x);b(x),b(p),b(v),U(v,at=>L(r,at),()=>F(r)),$("click",N,n),$("click",A,n),$("click",B,n),$("click",tt,n),K(1,v,()=>W,()=>({duration:500,y:0})),K(2,v,()=>W,()=>({duration:500,y:0})),S(i,v)};wt(g,i=>{F(s)&&i(m)})}S(a,o),D()}var jt=M("<!> <!>",1);function aa(a,t){var r=jt(),e=Q(r);Pt(e,{});var s=k(e,2);Ot(s,t,"default",{}),S(a,r)}export{aa as component,ta as universal};
