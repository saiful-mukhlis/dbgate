import{S as T,i as $,s as O,c as x,o as I,u as M,n as N,e as F,f as V,h as v,j,E as k,k as q,m as E,p as W,r as D,q as G}from"./index-632e4f1b.js";import"./lodash-29c9ec56.js";import"./dbgate-datalib-0d3b84db.js";function J(r,g,f){let l,d,p,h=N,y=()=>(h(),h=F(l,t=>f(1,p=t)),l);x(r,V,t=>f(3,d=t)),r.$$.on_destroy.push(()=>h());var _=this&&this.__awaiter||function(t,o,s,a){function c(e){return e instanceof s?e:new s(function(n){n(e)})}return new(s||(s=Promise))(function(e,n){function u(i){try{b(a.next(i))}catch(m){n(m)}}function C(i){try{b(a.throw(i))}catch(m){n(m)}}function b(i){i.done?e(i.value):c(i.value).then(u,C)}b((a=a.apply(t,o||[])).next())})};let w=!1;I(()=>{S(p)});function S(t){return _(this,void 0,void 0,function*(){if(!t||w)return;w=!0;const{hash:o}=document.location,s=o&&o.startsWith("#favorite=")?o.substring(10):null,a=o&&o.startsWith("#tabdata=")?o.substring(9):null;if(s){const n=t.find(u=>u.urlPath==s);n&&(v(n),window.history.replaceState(null,null," "))}else if(a)try{const n=JSON.parse(decodeURIComponent(a));v(n),window.history.replaceState(null,null," ")}catch(n){j(k,{message:n.message})}else if(!d.find(n=>n.closedTime==null))for(const n of t.filter(u=>u.openOnStartup))v(n);!d.find(n=>n.closedTime==null)&&!(yield q()).find(n=>!n.unsaved)&&E({title:"New Connection",icon:"img connection",tabComponent:"ConnectionTab"});const c=yield W(),e=localStorage.getItem("appVersion");e&&e!=c.version&&(D("tabs.changelog"),G(`DbGate upgraded from version ${e} to version ${c.version}`)),localStorage.setItem("appVersion",c.version)})}return r.$$.update=()=>{r.$$.dirty&2&&S(p)},y(f(0,l=M())),[l,p]}class z extends T{constructor(g){super(),$(this,g,J,null,O,{})}}export{z as default};
//# sourceMappingURL=OpenTabsOnStartup-f139c67f.js.map
