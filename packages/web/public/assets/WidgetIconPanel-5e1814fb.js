import{S as Y,i as N,s as G,z as P,A as b,D as B,G as k,I as A,J as _,l as W,O as S,P as J,Q as j,R as D,U as K,V as U,c as x,n as M,H as V,Y as Z,bm as q,bc as F,bn as X,bo as $,bp as E,_ as z,bk as I,a0 as L,aS as ee,F as te,B as ie,K as ne,T as le,aF as se,a3 as oe}from"./index-632e4f1b.js";import{m as ae}from"./mainMenuDefinition-8f53d26e.js";import"./lodash-29c9ec56.js";import"./dbgate-datalib-0d3b84db.js";function O(i,e,l){const n=i.slice();return n[16]=e[l],n}function Q(i){let e,l,n;return{c(){e=b("div"),e.innerHTML='<div class="c-nav-menu"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-chevron-down" style="stroke-width: 1.75px; width: 18px; height: 18px;"><polyline points="6 9 12 15 18 9"></polyline></svg></div>',k(e,"class","wrapper svelte-1m6lz1n")},m(o,u){A(o,e,u),i[9](e),l||(n=W(e,"click",i[8]),l=!0)},p:M,d(o){o&&D(e),i[9](null),l=!1,n()}}}function re(i){let e,l;return e=new te({props:{icon:i[16].icon,title:i[16].title}}),{c(){ie(e.$$.fragment)},m(n,o){ne(e,n,o),l=!0},p:M,i(n){l||(S(e.$$.fragment,n),l=!0)},o(n){j(e.$$.fragment,n),l=!1},d(n){le(e,n)}}}function ce(i){let e,l=i[16].iconSvg+"",n;return{c(){e=new oe(!1),n=se(),e.a=n},m(o,u){e.m(l,o,u),A(o,n,u)},p:M,i:M,o:M,d(o){o&&(D(n),e.d())}}}function R(i){let e,l,n,o,u,h;const g=[ce,re],v=[];function m(c,p){return c[16].iconSvg?0:1}l=m(i),n=v[l]=g[l](i);function f(){return i[11](i[16])}return{c(){e=b("div"),n.c(),k(e,"class","wrapper svelte-1m6lz1n"),V(e,"selected",i[16].name==i[2])},m(c,p){A(c,e,p),v[l].m(e,null),o=!0,u||(h=W(e,"click",f),u=!0)},p(c,p){i=c,n.p(i,p),(!o||p&36)&&V(e,"selected",i[16].name==i[2])},i(c){o||(S(n),o=!0)},o(c){j(n),o=!1},d(c){c&&D(e),v[l].d(),u=!1,h()}}}function de(i){let e,l,n,o,u,h,g,v,m,f,c,p,C,d=i[3]&&Q(i),w=P(i[5].filter(i[10])),a=[];for(let s=0;s<w.length;s+=1)a[s]=R(O(i,w,s));const H=s=>j(a[s],1,1,()=>{a[s]=null});return{c(){e=b("div"),d&&d.c(),l=B();for(let s=0;s<a.length;s+=1)a[s].c();n=B(),o=b("div"),o.textContent=" ",u=B(),h=b("div"),g=b("div"),g.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-table"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="12" y1="3" x2="12" y2="21"></line></svg>',m=B(),f=b("div"),f.innerHTML='<div class="c-nav-menu"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg></div>',k(o,"class","flex1"),k(g,"class","c-nav-menu"),k(h,"class","wrapper svelte-1m6lz1n"),k(h,"title",v=`Toggle whether tabs from all databases are visible. Currently - ${i[4]?"NO":"YES"}`),k(f,"class","wrapper svelte-1m6lz1n"),k(e,"class","main svelte-1m6lz1n")},m(s,t){A(s,e,t),d&&d.m(e,null),_(e,l);for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(e,null);_(e,n),_(e,o),_(e,u),_(e,h),_(h,g),_(e,m),_(e,f),i[13](f),c=!0,p||(C=[W(h,"click",i[12]),W(f,"click",i[7])],p=!0)},p(s,[t]){if(s[3]?d?d.p(s,t):(d=Q(s),d.c(),d.m(e,l)):d&&(d.d(1),d=null),t&100){w=P(s[5].filter(s[10]));let r;for(r=0;r<w.length;r+=1){const y=O(s,w,r);a[r]?(a[r].p(y,t),S(a[r],1)):(a[r]=R(y),a[r].c(),S(a[r],1),a[r].m(e,n))}for(Z(),r=w.length;r<a.length;r+=1)H(r);J()}(!c||t&16&&v!==(v=`Toggle whether tabs from all databases are visible. Currently - ${s[4]?"NO":"YES"}`))&&k(h,"title",v)},i(s){if(!c){for(let t=0;t<w.length;t+=1)S(a[t]);c=!0}},o(s){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)j(a[t]);c=!1},d(s){s&&D(e),d&&d.d(),K(a,s),i[13](null),p=!1,U(C)}}}function ue(i,e,l){let n,o,u,h,g;x(i,q,t=>l(14,n=t)),x(i,F,t=>l(15,o=t)),x(i,X,t=>l(2,u=t)),x(i,$,t=>l(3,h=t)),x(i,E,t=>l(4,g=t));let v,m;const f=[{iconSvg:`
<div class="c-nav-menu" title="Database connections"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="1.75" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg></div>
      `,icon:"icon database",name:"database",title:"Database connections"},{icon:"icon file",iconSvg:`
<div class="c-nav-menu" title="Favorites & Saved files"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-folder-closed"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path><path d="M2 10h20"></path></svg></div>
      `,name:"file",title:"Favorites & Saved files"},{icon:"icon history",iconSvg:`
<div class="c-nav-menu" title="Query history & Closed tabs"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
      `,name:"history",title:"Query history & Closed tabs"},{icon:"icon archive",iconSvg:`
<div class="c-nav-menu" title="Archive (saved tabular data)"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg></div>
      `,name:"archive",title:"Archive (saved tabular data)"},{icon:"icon plugin",iconSvg:`
      <div class="c-nav-menu" title="Extensions & Plugins"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></div>
      `,name:"plugins",title:"Extensions & Plugins"},{icon:"icon cell-data",iconSvg:`
      <div class="c-nav-menu" title="Selected cell data detail view"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></div>
      `,name:"cell-data",title:"Selected cell data detail view"},{icon:"icon app",iconSvg:`
      <div class="c-nav-menu" title="Application layers"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></div>
      `,name:"app",title:"Application layers"}];function c(t){u==t?z(q,n=!1,n):(z(F,o=t,o),z(q,n=!0,n))}function p(){const t=v.getBoundingClientRect(),r=t.right,y=t.bottom,T=[{command:"settings.show"},{command:"theme.changeTheme"},{command:"settings.commands"}];I.set({left:r,top:y,items:T})}function C(){const t=m.getBoundingClientRect(),r=t.right,y=t.top,T=ae({editMenu:!1});I.set({left:r,top:y,items:T})}function d(t){L[t?"unshift":"push"](()=>{m=t,l(1,m)})}const w=t=>ee(`widgets/${t.name}`),a=t=>c(t.name),H=()=>{z(E,g=!g,g)};function s(t){L[t?"unshift":"push"](()=>{v=t,l(0,v)})}return[v,m,u,h,g,f,c,p,C,d,w,a,H,s]}class fe extends Y{constructor(e){super(),N(this,e,ue,de,G,{})}}export{fe as default};
//# sourceMappingURL=WidgetIconPanel-5e1814fb.js.map
