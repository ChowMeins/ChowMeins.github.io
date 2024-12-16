import{a as $,t as C,n as it}from"../chunks/disclose-version.Dq0sCcJW.js";import"../chunks/legacy.CI7wVzwO.js";import{h as R,a as nt,E as lt,aH as ot,aI as ct,e as ft,u as ut,aJ as vt,R as P,aK as dt,q as mt,n as A,aL as _t,aM as pt,aA as j,$ as G,as as ht,z as X,aN as gt,aO as wt,B as D,C as Q,D as g,F as w,A as V,P as B,v as E,G as O,K as L}from"../chunks/runtime.C54dylD5.js";import{e as I}from"../chunks/events.kKpztpXt.js";import{i as bt}from"../chunks/if.DZoaFojv.js";import{a as xt}from"../chunks/render.Coku4NcK.js";import{b as U}from"../chunks/this.b0K__6uF.js";import{i as Y}from"../chunks/lifecycle.BYGTvVDS.js";import{o as Z}from"../chunks/index-client.BXAvXOh2.js";import{p as tt}from"../chunks/props.BmALSADD.js";import{s as yt,a as Ot}from"../chunks/store.9Ol4gXrP.js";import{w as kt}from"../chunks/index.CUROTygF.js";function Nt(e,t,r,a,n){var o;R&&nt();var s=(o=t.$$slots)==null?void 0:o[r],l=!1;s===!0&&(s=t.children,l=!0),s===void 0||s(e,l?()=>a:a)}function et(e,t){var r=e.__className,a=zt(t);R&&e.getAttribute("class")===a?e.__className=a:(r!==a||R&&e.getAttribute("class")!==a)&&(a===""?e.removeAttribute("class"):e.setAttribute("class",a),e.__className=a)}function zt(e){return e??""}const Tt=()=>performance.now(),x={tick:e=>requestAnimationFrame(e),now:()=>Tt(),tasks:new Set};function at(){const e=x.now();x.tasks.forEach(t=>{t.c(e)||(x.tasks.delete(t),t.f())}),x.tasks.size!==0&&x.tick(at)}function Et(e){let t;return x.tasks.size===0&&x.tick(at),{promise:new Promise(r=>{x.tasks.add(t={c:e,f:r})}),abort(){x.tasks.delete(t)}}}function S(e,t){e.dispatchEvent(new CustomEvent(t))}function Ft(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function q(e){const t={},r=e.split(";");for(const a of r){const[n,s]=a.split(":");if(!n||s===void 0)break;const l=Ft(n.trim());t[l]=s.trim()}return t}const At=e=>e;function K(e,t,r,a){var n=(e&vt)!==0,s=(e&_t)!==0,l=n&&s,o=(e&pt)!==0,p=l?"both":n?"in":"out",v,m=t.inert,c,f;function b(){var u=ht,N=P;j(null),G(null);try{return v??(v=r()(t,(a==null?void 0:a())??{},{direction:p}))}finally{j(u),G(N)}}var h={is_global:o,in(){var u;if(t.inert=m,!n){f==null||f.abort(),(u=f==null?void 0:f.reset)==null||u.call(f);return}s||c==null||c.abort(),S(t,"introstart"),c=H(t,b(),f,1,()=>{S(t,"introend"),c==null||c.abort(),c=v=void 0})},out(u){if(!s){u==null||u(),v=void 0;return}t.inert=!0,S(t,"outrostart"),f=H(t,b(),c,0,()=>{S(t,"outroend"),u==null||u()})},stop:()=>{c==null||c.abort(),f==null||f.abort()}},i=P;if((i.transitions??(i.transitions=[])).push(h),n&&xt){var d=o;if(!d){for(var _=i.parent;_&&_.f&lt;)for(;(_=_.parent)&&!(_.f&ot););d=!_||(_.f&ct)!==0}d&&ft(()=>{ut(()=>h.in())})}}function H(e,t,r,a,n){var s=a===1;if(dt(t)){var l,o=!1;return mt(()=>{if(!o){var d=t({direction:s?"in":"out"});l=H(e,d,r,a,n)}}),{abort:()=>{o=!0,l==null||l.abort()},deactivate:()=>l.deactivate(),reset:()=>l.reset(),t:()=>l.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return n(),{abort:A,deactivate:A,reset:A,t:()=>a};const{delay:p=0,css:v,tick:m,easing:c=At}=t;var f=[];if(s&&r===void 0&&(m&&m(0,1),v)){var b=q(v(0,1));f.push(b,b)}var h=()=>1-a,i=e.animate(f,{duration:p});return i.onfinish=()=>{var d=(r==null?void 0:r.t())??1-a;r==null||r.abort();var _=a-d,u=t.duration*Math.abs(_),N=[];if(u>0){if(v)for(var z=Math.ceil(u/16.666666666666668),F=0;F<=z;F+=1){var T=d+_*c(F/z),M=v(T,1-T);N.push(q(M))}h=()=>{var y=i.currentTime;return d+_*c(y/u)},m&&Et(()=>{if(i.playState!=="running")return!1;var y=h();return m(y,1-y),!0})}i=e.animate(N,{duration:u,fill:"forwards"}),i.onfinish=()=>{h=()=>a,m==null||m(a,1-a),n()}},{abort:()=>{i&&(i.cancel(),i.effect=null,i.onfinish=A)},deactivate:()=>{n=A},reset:()=>{a===0&&(m==null||m(1,0))},t:()=>h()}}const It=!0,$t="always",te=Object.freeze(Object.defineProperty({__proto__:null,prerender:It,trailingSlash:$t},Symbol.toStringTag,{value:"Module"})),k=kt(!1);var St=C('<button class="hamburger svelte-cu5xmw"><svg viewBox="0 0 75 50" fill="none" role="button" xmlns="http://www.w3.org/2000/svg"><title>Open Menu</title><rect id="box1" x="0.5" y="0.5" width="73" height="7" rx="3.5" fill="white" stroke="white" class="svelte-cu5xmw"></rect><rect id="box2" y="21" width="73" height="8" rx="4" fill="white" class="svelte-cu5xmw"></rect><rect id="box3" y="42" width="73" height="8" rx="4" fill="white" class="svelte-cu5xmw"></rect></svg></button>');function Ct(e,t){X(t,!1);const r=yt(),a=()=>Ot(k,"$open",r);let n=tt(t,"className",8,""),s=[];Z(()=>{s=[document.getElementById("box1"),document.getElementById("box2"),document.getElementById("box3")],k.subscribe(v=>{})});function l(v){v&&s[0]&&s[1]&&s[2]&&(s[0].style.transform="translateX(19px) rotate(45deg)",s[1].style.width="0",s[1].style.opacity="0",s[2].style.transform="translate(-18px, 22px) rotate(-45deg)"),v||s[0]&&s[1]&&s[2]&&(s[0].style.transform="rotate(0deg) translateX(0px) ",s[1].style.width="73",s[1].style.opacity="1",s[2].style.transform="rotate(0deg) translate(0px, 0px) ")}gt(()=>a(),()=>{l(a())}),wt(),Y();var o=St(),p=g(o);w(o),D(()=>et(p,`${n()??""} svelte-cu5xmw`)),I("click",o,()=>k.update(v=>!v)),$(e,o),Q()}function Mt(e){const t=e-1;return t*t*t+1}function J(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function W(e,{delay:t=0,duration:r=400,easing:a=Mt,x:n=0,y:s=0,opacity:l=0}={}){const o=getComputedStyle(e),p=+o.opacity,v=o.transform==="none"?"":o.transform,m=p*(1-l),[c,f]=J(n),[b,h]=J(s);return{delay:t,duration:r,easing:a,css:(i,d)=>`
			transform: ${v} translate(${(1-i)*c}${f}, ${(1-i)*b}${h});
			opacity: ${p-m*d}`}}var Bt=it('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>');function Lt(e,t){let r=tt(t,"className",8);var a=Bt();D(()=>et(a,r())),$(e,a)}var Rt=C('<div id="sidebar" class="oswald svelte-u2gzdu"><ul class="w-full flex flex-col"><li class="menu-bar svelte-u2gzdu"><a href="/" class="svelte-u2gzdu">HOME</a></li> <li class="menu-bar svelte-u2gzdu"><a href="/tools" class="svelte-u2gzdu">TOOLS</a></li> <li class="menu-bar svelte-u2gzdu"><a href="/portfolio.pdf" class="svelte-u2gzdu">PORTFOLIO</a></li> <li class="menu-bar svelte-u2gzdu"><a href="https://github.com/ChowMeins" class="svelte-u2gzdu">GITHUB</a></li></ul></div>'),Ht=C('<div class="w-full h-full flex gap-8 bg-[#151515] px-5 py-8 z-[1]"><ul class="navbar w-full h-full oswald text-white flex svelte-u2gzdu"><li class="w-fit text-[1.5rem] text-nowrap mr-auto my-auto"><a href="/">JASON CHAU</a></li> <li class="nav-item svelte-u2gzdu"><a href="/">HOME</a></li> <li class="nav-item svelte-u2gzdu"><a href="/tools">TOOLS</a></li> <li class="nav-item svelte-u2gzdu"><a href="/portfolio.pdf">PORTFOLIO</a></li></ul> <ul class="w-fit h-full gap-2 flex my-auto"><a href="https://github.com/ChowMeins"><!></a></ul> <li id="hamburger-icon" class="svelte-u2gzdu"><!></li></div> <!>',1);function Pt(e,t){X(t,!1);let r=L(null),a=L(null),n=L(!1);Z(()=>{k.subscribe(i=>{B(n,i)}),window.addEventListener("resize",()=>{window.innerWidth>900&&k.set(!1)}),window.addEventListener("click",i=>{E(a)&&!E(a).contains(i.target)&&E(n)==!0&&k.set(!1)})});function s(){k.set(!1)}Y();var l=Ht(),o=V(l),p=O(g(o),2),v=g(p),m=g(v);Lt(m,{className:"w-[24px] h-[24px]"}),w(v),w(p);var c=O(p,2),f=g(c);Ct(f,{className:"w-[32px] h-[32px]"}),w(c),U(c,i=>B(a,i),()=>E(a)),w(o);var b=O(o,2);{var h=i=>{var d=Rt(),_=g(d),u=g(_),N=g(u);w(u);var z=O(u,2),F=g(z);w(z);var T=O(z,2),M=g(T);w(T);var y=O(T,2),st=g(y);w(y),w(_),w(d),U(d,rt=>B(r,rt),()=>E(r)),I("click",N,s),I("click",F,s),I("click",M,s),I("click",st,s),K(1,d,()=>W,()=>({duration:500,y:0})),K(2,d,()=>W,()=>({duration:500,y:0})),$(i,d)};bt(b,i=>{E(n)&&i(h)})}$(e,l),Q()}var jt=C("<!> <!>",1);function ee(e,t){var r=jt(),a=V(r);Pt(a,{});var n=O(a,2);Nt(n,t,"default",{}),$(e,r)}export{ee as component,te as universal};