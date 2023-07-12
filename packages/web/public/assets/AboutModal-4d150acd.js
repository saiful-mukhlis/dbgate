import{S as re,i as ce,s as ie,a9 as N,be as ue,B as w,K as M,ab as fe,ac as $e,O as Y,Q as D,T as q,ad as ae,bq as me,c as de,ae as pe,br as I,A as f,D as k,C as r,aN as _e,G as m,I as C,J as a,a2 as oe,R as S,b4 as ge,bs as be,n as ve}from"./index-632e4f1b.js";import{h as le}from"./dbgate-datalib-0d3b84db.js";import"./lodash-29c9ec56.js";function he(o){let e;return{c(){e=r("dbgate.org")},m(t,n){C(t,e,n)},d(t){t&&S(e)}}}function ke(o){let e;return{c(){e=r("github")},m(t,n){C(t,e,n)},d(t){t&&S(e)}}}function we(o){let e;return{c(){e=r("docker hub")},m(t,n){C(t,e,n)},d(t){t&&S(e)}}}function Me(o){let e;return{c(){e=r("demo.dbgate.org")},m(t,n){C(t,e,n)},d(t){t&&S(e)}}}function Ye(o){let e;return{c(){e=r("npmjs.com")},m(t,n){C(t,e,n)},d(t){t&&S(e)}}}function De(o){let e,t,n,$,s,c,i,d,p,P,B,Q,J,K=le(o[0]).format("YYYY-MM-DD")+"",L,R,j,V,_,W,T,x,g,z,G,E,b,H,O,U,v,X,F,Z,h,A;return _=new I({props:{href:"https://dbgate.org",$$slots:{default:[he]},$$scope:{ctx:o}}}),g=new I({props:{href:"https://github.com/dbgate/dbgate/",$$slots:{default:[ke]},$$scope:{ctx:o}}}),b=new I({props:{href:"https://hub.docker.com/r/dbgate/dbgate",$$slots:{default:[we]},$$scope:{ctx:o}}}),v=new I({props:{href:"https://demo.dbgate.org",$$slots:{default:[Me]},$$scope:{ctx:o}}}),h=new I({props:{href:"https://www.npmjs.com/search?q=keywords:dbgateplugin",$$slots:{default:[Ye]},$$scope:{ctx:o}}}),{c(){e=f("div"),t=f("img"),$=k(),s=f("div"),c=f("div"),i=r("Version: "),d=f("span"),p=r(o[1]),P=k(),B=f("div"),Q=r("Build date: "),J=f("span"),L=r(K),R=k(),j=f("div"),V=r("Web: "),w(_.$$.fragment),W=k(),T=f("div"),x=r("Source codes: "),w(g.$$.fragment),z=k(),G=f("div"),E=r("Docker container: "),w(b.$$.fragment),H=k(),O=f("div"),U=r("Online demo: "),w(v.$$.fragment),X=k(),F=f("div"),Z=r("Search plugins: "),w(h.$$.fragment),_e(t.src,n="logo192.png")||m(t,"src",n),m(d,"class","svelte-143q17x"),m(c,"class","m-1"),m(J,"class","svelte-143q17x"),m(B,"class","m-1"),m(j,"class","m-1"),m(T,"class","m-1"),m(G,"class","m-1"),m(O,"class","m-1"),m(F,"class","m-1"),m(e,"class","flex")},m(l,u){C(l,e,u),a(e,t),a(e,$),a(e,s),a(s,c),a(c,i),a(c,d),a(d,p),a(s,P),a(s,B),a(B,Q),a(B,J),a(J,L),a(s,R),a(s,j),a(j,V),M(_,j,null),a(s,W),a(s,T),a(T,x),M(g,T,null),a(s,z),a(s,G),a(G,E),M(b,G,null),a(s,H),a(s,O),a(O,U),M(v,O,null),a(s,X),a(s,F),a(F,Z),M(h,F,null),A=!0},p(l,u){(!A||u&2)&&oe(p,l[1]),(!A||u&1)&&K!==(K=le(l[0]).format("YYYY-MM-DD")+"")&&oe(L,K);const y={};u&32&&(y.$$scope={dirty:u,ctx:l}),_.$set(y);const ee={};u&32&&(ee.$$scope={dirty:u,ctx:l}),g.$set(ee);const te={};u&32&&(te.$$scope={dirty:u,ctx:l}),b.$set(te);const se={};u&32&&(se.$$scope={dirty:u,ctx:l}),v.$set(se);const ne={};u&32&&(ne.$$scope={dirty:u,ctx:l}),h.$set(ne)},i(l){A||(Y(_.$$.fragment,l),Y(g.$$.fragment,l),Y(b.$$.fragment,l),Y(v.$$.fragment,l),Y(h.$$.fragment,l),A=!0)},o(l){D(_.$$.fragment,l),D(g.$$.fragment,l),D(b.$$.fragment,l),D(v.$$.fragment,l),D(h.$$.fragment,l),A=!1},d(l){l&&S(e),q(_),q(g),q(b),q(v),q(h)}}}function qe(o){let e;return{c(){e=r("About DbGate")},m(t,n){C(t,e,n)},d(t){t&&S(e)}}}function Ce(o){let e,t;return e=new ge({props:{value:"Close"}}),e.$on("click",be),{c(){w(e.$$.fragment)},m(n,$){M(e,n,$),t=!0},p:ve,i(n){t||(Y(e.$$.fragment,n),t=!0)},o(n){D(e.$$.fragment,n),t=!1},d(n){q(e,n)}}}function Se(o){let e,t;const n=[o[3]];let $={$$slots:{footer:[Ce],header:[qe],default:[De]},$$scope:{ctx:o}};for(let s=0;s<n.length;s+=1)$=N($,n[s]);return e=new ue({props:$}),{c(){w(e.$$.fragment)},m(s,c){M(e,s,c),t=!0},p(s,[c]){const i=c&8?fe(n,[$e(s[3])]):{};c&35&&(i.$$scope={dirty:c,ctx:s}),e.$set(i)},i(s){t||(Y(e.$$.fragment,s),t=!0)},o(s){D(e.$$.fragment,s),t=!1},d(s){q(e,s)}}}function Ae(o,e,t){let n,$;const s=[];let c=ae(e,s),i;const d=me();return de(o,d,p=>t(4,i=p)),o.$$set=p=>{e=N(N({},e),pe(p)),t(3,c=ae(e,s))},o.$$.update=()=>{o.$$.dirty&16&&t(1,n=i==null?void 0:i.version),o.$$.dirty&16&&t(0,$=i==null?void 0:i.buildTime)},[$,n,d,c,i]}class Ge extends re{constructor(e){super(),ce(this,e,Ae,Se,ie,{})}}export{Ge as default};
//# sourceMappingURL=AboutModal-4d150acd.js.map