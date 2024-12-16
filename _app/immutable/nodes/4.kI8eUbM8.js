import{a as y,t as x}from"../chunks/disclose-version.Dq0sCcJW.js";import"../chunks/legacy.CI7wVzwO.js";import{az as R,h as U,u as X,r as Y,z as Z,K as g,B as M,C as ee,v as t,J as v,D as m,A as ae,F as c,G as p,P as W}from"../chunks/runtime.C54dylD5.js";import{s as j}from"../chunks/render.Coku4NcK.js";import{i as z}from"../chunks/if.DZoaFojv.js";import{e as te,r as V,s as D,i as le}from"../chunks/attributes.BENIBPQD.js";import{l as re,e as G}from"../chunks/events.kKpztpXt.js";import{i as se}from"../chunks/lifecycle.BYGTvVDS.js";import{o as ie}from"../chunks/index-client.BXAvXOh2.js";function J(a,o,i=o){var f=R();re(a,"input",r=>{var s=r?a.defaultValue:a.value;s=A(a)?S(s):s,i(s),f&&s!==(s=o())&&(a.value=s??"")}),(U&&a.defaultValue!==a.value||X(o)==null&&a.value)&&i(A(a)?S(a.value):a.value),Y(()=>{var r=o();A(a)&&r===S(a.value)||a.type==="date"&&!r&&!a.value||r!==a.value&&(a.value=r??"")})}function A(a){var o=a.type;return o==="number"||o==="range"}function S(a){return a===""?null:+a}var ne=x('<p class="warning svelte-11p65gx">⚠ Warning: Input is invalid. Please use digits up to 2 decimal places. Calculation may be incorrect</p>'),ue=x('<p class="warning svelte-11p65gx">⚠ Warning: Invalid Input. Please use digits up to 2 decimal places. Calculation may be incorrect</p>'),oe=x('<h1 class="day svelte-11p65gx"> </h1> <div class="w-full flex justify-between"><div class="w-full flex flex-col gap-1 mx-auto"><p class="w-[85%] mx-auto font-semibold">Cash</p> <input class="w-fit svelte-11p65gx" type="number" pattern="[0-9]*" inputmode="decimal" placeholder="Enter the total here"> <!></div> <div class="w-full flex flex-col gap-1 mx-auto"><p class="w-[85%] mx-auto font-semibold">Credit</p> <input class="w-fit svelte-11p65gx" type="number" pattern="[0-9]*" inputmode="decimal" placeholder="Enter the total here"> <!></div></div>',1),fe=x('<div class="w-full h-[100%]"><ul class="w-full bg-[#1d1d1d] text-white flex flex-wrap"></ul> <p class="day svelte-11p65gx"> </p></div>');function xe(a,o){Z(o,!1);let i=g(Array(7).fill("")),f=g(Array(7).fill("")),r=g(Array(7).fill([null,!0])),s=g(Array(7).fill([null,!0])),K=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],w=g("$0");ie(()=>{for(let l=0;l<t(r).length;++l)v(r,t(r)[l]=[document.getElementById("cash-"+l),!0]),v(s,t(s)[l]=[document.getElementById("credit-"+l),!0])});function $(l,n,e){l==null&&(l="0");let d=l.toString().split(".");return d.length===1||d.length===2&&d[1].length<=2?(e==="cash"?v(r,t(r)[n][1]=!0):e==="credit"&&v(s,t(s)[n][1]=!0),!0):d.length===2&&d[1].length>2?(e==="cash"?v(r,t(r)[n][1]=!1):e==="credit"&&v(s,t(s)[n][1]=!1),!1):!0}function E(){let l=0;W(w,"");for(let e=0;e<t(i).length;++e)l+=(t(i)[e]===null||t(i)[e]===""?0:parseFloat(parseFloat(t(i)[e]).toFixed(2)))+(t(f)[e]===null||t(f)[e]===""?0:parseFloat(parseFloat(t(f)[e]).toFixed(2)));l=Math.trunc(l*100)/100;let n=l.toString().split(".");n.length===2&&n[1].length===1&&(n[1]+="0"),W(w,"$"+n.join("."))}se();var b=fe(),F=m(b);te(F,5,()=>K,le,(l,n,e)=>{var d=oe(),C=ae(d),H=m(C,!0);c(C);var T=p(C,2),I=m(T),h=p(m(I),2);V(h),D(h,"id",`cash-${e??""}`);var L=p(h,2);{var N=u=>{var k=ne();y(u,k)};z(L,u=>{t(r)[e][1]===!1&&u(N)})}c(I);var B=p(I,2),_=p(m(B),2);V(_),D(_,"id",`credit-${e??""}`);var O=p(_,2);{var Q=u=>{var k=ue();y(u,k)};z(O,u=>{t(s)[e][1]===!1&&u(Q)})}c(B),c(T),M(()=>j(H,t(n))),J(h,()=>t(i)[e],u=>v(i,t(i)[e]=u)),G("input",h,()=>{$(t(i)[e],e,"cash"),E()}),J(_,()=>t(f)[e],u=>v(f,t(f)[e]=u)),G("input",_,()=>{$(t(f)[e],e,"credit"),E()}),y(l,d)}),c(F);var P=p(F,2),q=m(P);c(P),c(b),M(()=>j(q,`Total: ${t(w)??""}`)),y(a,b),ee()}export{xe as component};