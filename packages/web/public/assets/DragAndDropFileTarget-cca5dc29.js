import{S as I,i as L,s as R,F as A,A as u,B as C,D as $,C as F,G as m,I as q,J as n,K as T,l as B,a2 as E,O as Q,Q as j,R as J,T as k,c as w,bD as K,bS as G,g as N,_ as O}from"./index-632e4f1b.js";import{_ as z}from"./lodash-29c9ec56.js";import"./dbgate-datalib-0d3b84db.js";function H(l){let o,t,i,a,r,c,v,e,b,_=l[0].join(", ")+"",g,y,d,p,S,f,x,h;return a=new A({props:{icon:"icon cloud-upload"}}),p=new A({props:{icon:"icon close",padRight:!0}}),{c(){o=u("div"),t=u("div"),i=u("div"),C(a.$$.fragment),r=$(),c=u("div"),c.textContent="Drop the files to upload to DbGate",v=$(),e=u("div"),b=F("Supported file types: "),g=F(_),y=$(),d=u("div"),C(p.$$.fragment),S=F(`
      Close`),m(i,"class","icon svelte-1d5rlxt"),m(c,"class","title svelte-1d5rlxt"),m(e,"class","info svelte-1d5rlxt"),m(d,"class","class-button svelte-1d5rlxt"),m(o,"class","target svelte-1d5rlxt")},m(s,D){q(s,o,D),n(o,t),n(t,i),T(a,i,null),n(t,r),n(t,c),n(t,v),n(t,e),n(e,b),n(e,g),n(t,y),n(t,d),T(p,d,null),n(d,S),f=!0,x||(h=B(d,"click",l[3]),x=!0)},p(s,[D]){(!f||D&1)&&_!==(_=s[0].join(", ")+"")&&E(g,_)},i(s){f||(Q(a.$$.fragment,s),Q(p.$$.fragment,s),f=!0)},o(s){j(a.$$.fragment,s),j(p.$$.fragment,s),f=!1},d(s){s&&J(o),k(a),k(p),x=!1,h()}}}function M(l,o,t){let i,a,r;w(l,K,e=>t(2,a=e)),w(l,G,e=>t(1,r=e));const c=N(),v=()=>{O(G,r=!1,r)};return l.$$.update=()=>{l.$$.dirty&4&&t(0,i=z.compact([...a.fileFormats.filter(e=>e.readerFunc).map(e=>e.name),c?"SQL":null,c?"SQLite database":null]))},[i,r,a,v]}class W extends I{constructor(o){super(),L(this,o,M,H,R,{})}}export{W as default};
//# sourceMappingURL=DragAndDropFileTarget-cca5dc29.js.map