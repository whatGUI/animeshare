import{_ as c,o as u,c as l,t as d,l as f,n as m,a2 as o,V as r,a3 as _,a4 as y,a5 as h,a6 as A,a7 as g,a8 as v,a9 as T,aa as P,ab as C,ac as b,ad as w,d as S,u as D,j as E,A as L,ae as R,af as x,ag as O}from"./chunks/framework.27035955.js";import{t as i}from"./chunks/theme.f24f9117.js";const $=JSON.parse('"2024/3/1 17:14:07"'),j="_syncTime_h183b_2",V={syncTime:j},B={__name:"LastSycnTime",setup(e){return(t,a)=>(u(),l("div",{class:m(t.$style.syncTime)},"上次同步时间："+d(f($)),3))}},F={$style:V},M=c(B,[["__cssModules",F]]),k={extends:i,Layout:()=>o(i.Layout,null,{"nav-bar-title-after":()=>o(M)}),enhanceApp({app:e,router:t,siteData:a}){}};function p(e){if(e.extends){const t=p(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=p(k),I=S({name:"VitePressApp",setup(){const{site:e}=D();return E(()=>{L(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),R(),x(),O(),s.setup&&s.setup(),()=>o(s.Layout)}});async function N(){const e=G(),t=z();t.provide(y,e);const a=h(e.route);return t.provide(A,a),t.component("Content",g),t.component("ClientOnly",v),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:T}),{app:t,router:e,data:a}}function z(){return P(I)}function G(){let e=r,t;return C(a=>{let n=b(a);return n?(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r&&(e=!1),w(()=>import(n),[])):null},s.NotFound)}r&&N().then(({app:e,router:t,data:a})=>{t.go().then(()=>{_(t.route,a.site),e.mount("#app")})});export{N as createApp};
