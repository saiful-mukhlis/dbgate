import{S as p,i as d,s as _,aw as w,B as i,K as l,O as m,Q as $,T as f,ax as g,D as h,I as v,R as b}from"./index-632e4f1b.js";import F from"./ArchiveFilesList-778892be.js";import W from"./ArchiveFolderList-aafa3a8e.js";import"./lodash-29c9ec56.js";import"./dbgate-datalib-0d3b84db.js";function A(o){let t,s;return t=new W({}),{c(){i(t.$$.fragment)},m(e,n){l(t,e,n),s=!0},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){$(t.$$.fragment,e),s=!1},d(e){f(t,e)}}}function B(o){let t,s;return t=new F({}),{c(){i(t.$$.fragment)},m(e,n){l(t,e,n),s=!0},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){$(t.$$.fragment,e),s=!1},d(e){f(t,e)}}}function x(o){let t,s,e,n;return t=new g({props:{title:"Archive folders, DB models",name:"folders",height:"50%",storageName:"archiveFoldersWidget",$$slots:{default:[A]},$$scope:{ctx:o}}}),e=new g({props:{title:"Files, Tables, Views, Functions",name:"files",storageName:"archiveFilesWidget",$$slots:{default:[B]},$$scope:{ctx:o}}}),{c(){i(t.$$.fragment),s=h(),i(e.$$.fragment)},m(r,a){l(t,r,a),v(r,s,a),l(e,r,a),n=!0},p(r,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:r}),t.$set(c);const u={};a&1&&(u.$$scope={dirty:a,ctx:r}),e.$set(u)},i(r){n||(m(t.$$.fragment,r),m(e.$$.fragment,r),n=!0)},o(r){$(t.$$.fragment,r),$(e.$$.fragment,r),n=!1},d(r){r&&b(s),f(t,r),f(e,r)}}}function C(o){let t,s;return t=new w({props:{$$slots:{default:[x]},$$scope:{ctx:o}}}),{c(){i(t.$$.fragment)},m(e,n){l(t,e,n),s=!0},p(e,[n]){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){$(t.$$.fragment,e),s=!1},d(e){f(t,e)}}}class T extends p{constructor(t){super(),d(this,t,null,C,_,{})}}export{T as default};
//# sourceMappingURL=ArchiveWidget-af909828.js.map