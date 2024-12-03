import{a as y,t as x}from"../chunks/disclose-version.BDJmg0py.js";import"../chunks/legacy.Cc3iakGF.js";import{ar as O,r as Q,h as R,z as U,as as _,B as P,C as X,v as a,at as d,D as m,A as Y,F as c,G as p,N as W}from"../chunks/runtime.B5vIoYlz.js";import{l as Z,e as j,s as z}from"../chunks/render.CXev-I4e.js";import{i as D}from"../chunks/if.D8OfZShd.js";import{e as ee,r as G,s as N,i as ae}from"../chunks/attributes.Cl5Ua_VC.js";import{i as te}from"../chunks/lifecycle.BQSpjDN3.js";import{o as le}from"../chunks/index-client.CA02tr4n.js";function V(t,u,s=u){var n=O();Z(t,"input",()=>{var l=S(t)?k(t.value):t.value;s(l),n&&l!==(l=u())&&(t.value=l??"")}),Q(()=>{var l=u();if(R&&t.defaultValue!==t.value){s(S(t)?k(t.value):t.value);return}S(t)&&l===k(t.value)||t.type==="date"&&!l&&!t.value||l!==t.value&&(t.value=l??"")})}function S(t){var u=t.type;return u==="number"||u==="range"}function k(t){return t===""?null:+t}var re=x('<p class="warning svelte-11p65gx">⚠ Warning: Input is invalid. Please use digits up to 2 decimal places. Calculation may be incorrect</p>'),se=x('<p class="warning svelte-11p65gx">⚠ Warning: Invalid Input. Please use digits up to 2 decimal places. Calculation may be incorrect</p>'),ie=x('<h1 class="day svelte-11p65gx"> </h1> <div class="w-full flex justify-between"><div class="w-full flex flex-col gap-1 mx-auto"><p class="w-[85%] mx-auto font-semibold">Cash</p> <input class="w-fit svelte-11p65gx" type="number" pattern="[0-9]*" inputmode="decimal" placeholder="Enter the total here"> <!></div> <div class="w-full flex flex-col gap-1 mx-auto"><p class="w-[85%] mx-auto font-semibold">Credit</p> <input class="w-fit svelte-11p65gx" type="number" pattern="[0-9]*" inputmode="decimal" placeholder="Enter the total here"> <!></div></div>',1),ne=x('<div class="w-full h-[100%]"><ul class="w-full bg-[#1d1d1d] text-white flex flex-wrap"></ul> <p class="day svelte-11p65gx"> </p></div>');function he(t,u){U(u,!1);let s=_(Array(7).fill("")),n=_(Array(7).fill("")),l=_(Array(7).fill([null,!0])),f=_(Array(7).fill([null,!0])),q=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],w=_("$0");le(()=>{for(let r=0;r<a(l).length;r+=1)d(l,a(l)[r]=[document.getElementById("cash-"+r),!0]),d(f,a(f)[r]=[document.getElementById("credit-"+r),!0])});function $(r,i,e){r==null&&(r="0");let o=r.toString().split(".");return o.length===1||o.length===2&&o[1].length<=2?(e==="cash"?d(l,a(l)[i][1]=!0):e==="credit"&&d(f,a(f)[i][1]=!0),!0):o.length===2&&o[1].length>2?(e==="cash"?d(l,a(l)[i][1]=!1):e==="credit"&&d(f,a(f)[i][1]=!1),!1):!0}function E(){let r=0;W(w,"");for(let e=0;e<a(s).length;e+=1)r+=(a(s)[e]===null||a(s)[e]===""?0:parseFloat(parseFloat(a(s)[e]).toFixed(2)))+(a(n)[e]===null||a(n)[e]===""?0:parseFloat(parseFloat(a(n)[e]).toFixed(2)));r=Math.trunc(r*100)/100;let i=r.toString().split(".");i.length===2&&i[1].length===1&&(i[1]+="0"),W(w,"$"+i.join("."))}te();var b=ne(),F=m(b);ee(F,5,()=>q,ae,(r,i,e)=>{var o=ie(),C=Y(o),J=m(C,!0);c(C);var B=p(C,2),I=m(B),h=p(m(I),2);G(h),N(h,"id",`cash-${e??""}`);var K=p(h,2);D(K,()=>a(l)[e][1]===!1,v=>{var A=re();y(v,A)}),c(I);var M=p(I,2),g=p(m(M),2);G(g),N(g,"id",`credit-${e??""}`);var L=p(g,2);D(L,()=>a(f)[e][1]===!1,v=>{var A=se();y(v,A)}),c(M),c(B),P(()=>z(J,a(i))),V(h,()=>a(s)[e],v=>d(s,a(s)[e]=v)),j("input",h,()=>{$(a(s)[e],e,"cash"),E()}),V(g,()=>a(n)[e],v=>d(n,a(n)[e]=v)),j("input",g,()=>{$(a(n)[e],e,"credit"),E()}),y(r,o)}),c(F);var T=p(F,2),H=m(T);c(T),c(b),P(()=>z(H,`Total: ${a(w)??""}`)),y(t,b),X()}export{he as component};
