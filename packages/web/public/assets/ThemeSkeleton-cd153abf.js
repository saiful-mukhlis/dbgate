import{S as P,i as V,s as E,F as j,A as m,B as C,D as g,C as L,G as r,H,bQ as J,I as M,J as n,K as b,l as U,a2 as W,O as N,Q as y,R as X,T,c as Y,bR as K,_ as Z}from"./index-632e4f1b.js";import{_ as x}from"./lodash-29c9ec56.js";import"./dbgate-datalib-0d3b84db.js";function ee(a){let t,s,u,c,v,d,l,w,i,o,q,k,p,z,S,$,B,O,D,A,_,F=a[0].themeName+"",Q,I,f,R,G;return c=new j({props:{icon:"icon database"}}),l=new j({props:{icon:"icon file"}}),o=new j({props:{icon:"icon history"}}),p=new j({props:{icon:"icon archive"}}),$=new j({props:{icon:"icon plugin"}}),{c(){t=m("div"),s=m("div"),u=m("div"),C(c.$$.fragment),v=g(),d=m("div"),C(l.$$.fragment),w=g(),i=m("div"),C(o.$$.fragment),q=g(),k=m("div"),C(p.$$.fragment),z=g(),S=m("div"),C($.$$.fragment),B=g(),O=m("div"),D=g(),A=m("div"),_=m("div"),Q=L(F),r(u,"class","icon svelte-1uijirt"),r(d,"class","icon svelte-1uijirt"),r(i,"class","icon svelte-1uijirt"),r(k,"class","icon svelte-1uijirt"),r(S,"class","icon svelte-1uijirt"),r(s,"class","iconbar-settings-modal svelte-1uijirt"),r(O,"class","titlebar-settings-modal svelte-1uijirt"),r(_,"class","svelte-1uijirt"),H(_,"current",a[2]==a[0].themeClassName),r(A,"class","content svelte-1uijirt"),r(t,"style",a[1]),r(t,"class",I=J(`container ${a[0].themeClassName}`)+" svelte-1uijirt")},m(e,h){M(e,t,h),n(t,s),n(s,u),b(c,u,null),n(s,v),n(s,d),b(l,d,null),n(s,w),n(s,i),b(o,i,null),n(s,q),n(s,k),b(p,k,null),n(s,z),n(s,S),b($,S,null),n(t,B),n(t,O),n(t,D),n(t,A),n(A,_),n(_,Q),f=!0,R||(G=U(t,"click",a[4]),R=!0)},p(e,[h]){(!f||h&1)&&F!==(F=e[0].themeName+"")&&W(Q,F),(!f||h&5)&&H(_,"current",e[2]==e[0].themeClassName),(!f||h&2)&&r(t,"style",e[1]),(!f||h&1&&I!==(I=J(`container ${e[0].themeClassName}`)+" svelte-1uijirt"))&&r(t,"class",I)},i(e){f||(N(c.$$.fragment,e),N(l.$$.fragment,e),N(o.$$.fragment,e),N(p.$$.fragment,e),N($.$$.fragment,e),f=!0)},o(e){y(c.$$.fragment,e),y(l.$$.fragment,e),y(o.$$.fragment,e),y(p.$$.fragment,e),y($.$$.fragment,e),f=!1},d(e){e&&X(t),T(c),T(l),T(o),T(p),T($),R=!1,G()}}}function te(a,t,s){let u,c,v;Y(a,K,i=>s(2,v=i));function d(i){return i.themeCss?x.fromPairs([...i.themeCss.matchAll(/(--theme-[a-z0-9\-]+)\s*\:\s*(\#[0-9a-fA-F]{6})/g)].map(o=>[o[1],o[2]])):{}}let{theme:l}=t;const w=()=>{Z(K,v=l.themeClassName,v)};return a.$$set=i=>{"theme"in i&&s(0,l=i.theme)},a.$$.update=()=>{a.$$.dirty&1&&s(3,u=d(l)),a.$$.dirty&8&&s(1,c=Object.entries(u).map(([i,o])=>`${i}:${o}`).join(";"))},[l,c,v,u,w]}class ae extends P{constructor(t){super(),V(this,t,te,ee,E,{theme:0})}}export{ae as default};
//# sourceMappingURL=ThemeSkeleton-cd153abf.js.map