import{b as p,h as n,a as y,E as g,H as A,c as R,d as N,f as _,g as o,i as u,p as h,j as S}from"./runtime.C54dylD5.js";function x(d,b,v=!1){n&&y();var e=d,a=null,s=null,f=null,m=v?g:0,l=!1;const E=(r,t=!0)=>{l=!0,i(t,r)},i=(r,t)=>{if(f===(f=r))return;let c=!1;if(n){const T=e.data===A;f===T&&(e=R(),N(e),_(!1),c=!0)}f?(a?o(a):t&&(a=u(()=>t(e))),s&&h(s,()=>{s=null})):(s?o(s):t&&(s=u(()=>t(e))),a&&h(a,()=>{a=null})),c&&_(!0)};p(()=>{l=!1,b(E),l||i(null,null)},m),n&&(e=S)}export{x as i};