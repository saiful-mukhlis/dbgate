import{S as W,i as A,s as N,a9 as w,aa as I,B as m,K as d,ab as Q,ac as K,O as i,Q as c,T as $,ad as v,ae as L,f as g,aW as M,D as T,aF as R,I as _,Y as z,P as G,R as b,F as J,A as D,C as F,G as S,J as j,a2 as q,aw as Y,c as E,u as U,ax as k,aj as V,ar as X}from"./index-632e4f1b.js";import{_ as C}from"./lodash-29c9ec56.js";import{h as O}from"./dbgate-datalib-0d3b84db.js";import Z from"./QueryHistoryList-d359c5c7.js";function h(r){let e,n,s,a=r[0].props.database+"",t,o;return n=new J({props:{icon:"icon database"}}),{c(){e=D("div"),m(n.$$.fragment),s=T(),t=F(a),S(e,"class","info svelte-xmmjcw")},m(l,f){_(l,e,f),d(n,e,null),j(e,s),j(e,t),o=!0},p(l,f){(!o||f&1)&&a!==(a=l[0].props.database+"")&&q(t,a)},i(l){o||(i(n.$$.fragment,l),o=!0)},o(l){c(n.$$.fragment,l),o=!1},d(l){l&&b(e),$(n)}}}function y(r){let e,n=r[0].contentPreview+"",s;return{c(){e=D("div"),s=F(n),S(e,"class","info svelte-xmmjcw")},m(a,t){_(a,e,t),j(e,s)},p(a,t){t&1&&n!==(n=a[0].contentPreview+"")&&q(s,n)},d(a){a&&b(e)}}}function x(r){let e,n,s,a=r[0].props&&r[0].props.database&&h(r),t=r[0].contentPreview&&y(r);return{c(){a&&a.c(),e=T(),t&&t.c(),n=R()},m(o,l){a&&a.m(o,l),_(o,e,l),t&&t.m(o,l),_(o,n,l),s=!0},p(o,l){o[0].props&&o[0].props.database?a?(a.p(o,l),l&1&&i(a,1)):(a=h(o),a.c(),i(a,1),a.m(e.parentNode,e)):a&&(z(),c(a,1,1,()=>{a=null}),G()),o[0].contentPreview?t?t.p(o,l):(t=y(o),t.c(),t.m(n.parentNode,n)):t&&(t.d(1),t=null)},i(o){s||(i(a),s=!0)},o(o){c(a),s=!1},d(o){o&&(b(e),b(n)),a&&a.d(o),t&&t.d(o)}}}function ee(r){let e,n;const s=[r[3],{data:r[0]},{title:`${r[0].title} ${O(r[0].closedTime).fromNow()}`},{icon:r[0].icon},{isBold:!!r[0].selected},{isBusy:r[0].busy},{menu:r[2]}];let a={$$slots:{default:[x]},$$scope:{ctx:r}};for(let t=0;t<s.length;t+=1)a=w(a,s[t]);return e=new I({props:a}),e.$on("click",r[1]),{c(){m(e.$$.fragment)},m(t,o){d(e,t,o),n=!0},p(t,[o]){const l=o&13?Q(s,[o&8&&K(t[3]),o&1&&{data:t[0]},o&1&&{title:`${t[0].title} ${O(t[0].closedTime).fromNow()}`},o&1&&{icon:t[0].icon},o&1&&{isBold:!!t[0].selected},o&1&&{isBusy:t[0].busy},o&4&&{menu:t[2]}]):{};o&65&&(l.$$scope={dirty:o,ctx:t}),e.$set(l)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}const te=r=>r.tabid;function se(r,e,n){const s=["data"];let a=v(e,s),{data:t}=e;const o=()=>{g.update(u=>u.filter(p=>p.tabid!=t.tabid))},l=()=>{g.update(u=>u.filter(p=>!p.closedTime||p.closedTime>=t.closedTime))},f=()=>{g.update(u=>M(u.map(p=>Object.assign(Object.assign({},p),{closedTime:p.tabid==t.tabid?void 0:p.closedTime})),t.tabid))};function H(){return[{text:"Delete",onClick:o},{text:"Delete older",onClick:l}]}return r.$$set=u=>{e=w(w({},e),L(u)),n(3,a=v(e,s)),"data"in u&&n(0,t=u.data)},[t,f,H,a]}class ae extends W{constructor(e){super(),A(this,e,se,ee,N,{data:0})}}const ne=Object.freeze(Object.defineProperty({__proto__:null,default:ae,extractKey:te},Symbol.toStringTag,{value:"Module"}));function oe(r){let e,n;return e=new X({props:{list:C.sortBy(r[0].filter(B),P),module:ne}}),{c(){m(e.$$.fragment)},m(s,a){d(e,s,a),n=!0},p(s,a){const t={};a&1&&(t.list=C.sortBy(s[0].filter(B),P)),e.$set(t)},i(s){n||(i(e.$$.fragment,s),n=!0)},o(s){c(e.$$.fragment,s),n=!1},d(s){$(e,s)}}}function re(r){let e,n;return e=new V({props:{$$slots:{default:[oe]},$$scope:{ctx:r}}}),{c(){m(e.$$.fragment)},m(s,a){d(e,s,a),n=!0},p(s,a){const t={};a&5&&(t.$$scope={dirty:a,ctx:s}),e.$set(t)},i(s){n||(i(e.$$.fragment,s),n=!0)},o(s){c(e.$$.fragment,s),n=!1},d(s){$(e,s)}}}function le(r){let e,n;return e=new Z({}),{c(){m(e.$$.fragment)},m(s,a){d(e,s,a),n=!0},i(s){n||(i(e.$$.fragment,s),n=!0)},o(s){c(e.$$.fragment,s),n=!1},d(s){$(e,s)}}}function ie(r){let e,n,s,a;return e=new k({props:{title:"Recently closed tabs",name:"closedTabs",storageName:"closedTabsWidget",$$slots:{default:[re]},$$scope:{ctx:r}}}),s=new k({props:{title:"Query history",name:"queryHistory",storageName:"queryHistoryWidget",$$slots:{default:[le]},$$scope:{ctx:r}}}),{c(){m(e.$$.fragment),n=T(),m(s.$$.fragment)},m(t,o){d(e,t,o),_(t,n,o),d(s,t,o),a=!0},p(t,o){const l={};o&5&&(l.$$scope={dirty:o,ctx:t}),e.$set(l);const f={};o&4&&(f.$$scope={dirty:o,ctx:t}),s.$set(f)},i(t){a||(i(e.$$.fragment,t),i(s.$$.fragment,t),a=!0)},o(t){c(e.$$.fragment,t),c(s.$$.fragment,t),a=!1},d(t){t&&b(n),$(e,t),$(s,t)}}}function ce(r){let e,n;return e=new Y({props:{$$slots:{default:[ie]},$$scope:{ctx:r}}}),{c(){m(e.$$.fragment)},m(s,a){d(e,s,a),n=!0},p(s,[a]){const t={};a&5&&(t.$$scope={dirty:a,ctx:s}),e.$set(t)},i(s){n||(i(e.$$.fragment,s),n=!0)},o(s){c(e.$$.fragment,s),n=!1},d(s){$(e,s)}}}const B=r=>r.closedTime,P=r=>-r.closedTime;function ue(r,e,n){let s;return E(r,g,a=>n(0,s=a)),U(),[s]}class $e extends W{constructor(e){super(),A(this,e,ue,ce,N,{})}}export{$e as default};
//# sourceMappingURL=HistoryWidget-7188b389.js.map
