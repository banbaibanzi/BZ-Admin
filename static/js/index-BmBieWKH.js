import{_ as h,u as y,a as C}from"./index-CYfdo8ub.js";import{_ as I,S as $,a as A,M as E,T,U as D,A as L}from"./UserAvatar-DkKLpfzH.js";/* empty css                     *//* empty css                  *//* empty css                  */import{d as M,e as V,f as N,h as F}from"./element-BKD3LWCk.js";import{ax as P,ay as R,r as U,w as H,l as n,T as i,S as l,u as e,V as S,W as g,m as w,Q as O,a8 as Q,P as a,d as W,p as b,F as j}from"./vue-3R-0LehK.js";import"./el-tooltip-l0sNRNKZ.js";const q={__name:"BreadCrumb",setup(x){const r=P(),s=R(),u=y(),_=U([]);H(()=>s.name,t=>{_.value=p(u.menus,t)},{immediate:!0});function p(t,c,d=[]){for(const o of t){if(o.name===c)return[...d,o];if(o.children?.length){const m=p(o.children,c,[...d,o]);if(m)return m}}return null}function k(t=[]){return t.map(c=>({label:c.title,key:c.name}))}function v(t){t&&t!==s.name&&r.push({name:t})}return(t,c)=>{const d=M,o=I,m=V;return n(),i(m,{separator:"/",class:"flex-shrink-0"},{default:l(()=>[e(_)?.length?(n(!0),w(O,{key:1},Q(e(_),(f,B)=>(n(),i(d,{key:f.name,disabled:!!f.path},{default:l(()=>[a(o,{disabled:B>=e(_).length-1,options:k(f.children),onCallback:v},{title:l(()=>[S(g(f.title),1)]),_:2},1032,["disabled","options"])]),_:2},1032,["disabled"]))),128)):(n(),i(d,{key:0},{default:l(()=>[S(g(e(s).meta?.title),1)]),_:1}))]),_:1})}}},z=h(q,[["__scopeId","data-v-74780e01"]]),G={__name:"index",setup(x){const r=C(),s=W(()=>r.collapse);return(u,_)=>{const p=N;return n(),i(p,{id:"layout-side",width:e(s)===!0?"64px":"220px"},{default:l(()=>[a(e($)),a(e(A))]),_:1},8,["width"])}}},J=h(G,[["__scopeId","data-v-e2920d4b"]]),K={id:"header-page",class:"flex flex-center px-12"},X={class:"tool-wrap flex flex-center flex-shrink-0 px-12"},Y={__name:"index",setup(x){return(r,s)=>(n(),w("div",K,[a(e(E)),a(e(z),{class:"ml-6"}),b("div",X,[a(e(T)),a(e(D))])]))}},Z=h(Y,[["__scopeId","data-v-dda84f8b"]]),ee={class:"right-area w-full flex-1"},te={class:"p-12 sec-tabbar"},ae={__name:"index",setup(x){return(r,s)=>{const u=F;return n(),i(u,{class:"wh-full"},{default:l(()=>[a(e(J)),b("article",ee,[a(e(Z)),b("section",te,[a(e(L))]),j(r.$slots,"default",{},void 0,!0)])]),_:3})}}},ie=h(ae,[["__scopeId","data-v-26368379"]]);export{ie as default};
