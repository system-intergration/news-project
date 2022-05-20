var X=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var $=(i,t,n)=>t in i?X(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n,d=(i,t)=>{for(var n in t||(t={}))te.call(t,n)&&$(i,n,t[n]);if(B)for(var n of B(t))ie.call(t,n)&&$(i,n,t[n]);return i},m=(i,t)=>Z(i,ee(t));import{s as a,I as ne,B as P,i as oe,g as re,S as ae,G as se,a as ce,b as L,e as le,c as de,R as H,u as A,d as x,r as M,j as c,M as C,f as e,F as he,h as pe,k as ue,l as me,A as ge,T as fe,m as p,D as ye,n as ve,o as G,L as we,p as be,q as xe,t as Ce,v as D,w as ke,x as Le,W as _,y as Ne,z as Ie,C as Se,E as Re,Q as _e,H as Pe,J as Ae,K as Fe,N as Te,O as w,P as Ue,U as Ee,V as je}from"./vendor.d79691cf.js";const Oe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};Oe();var Be="/news-project/assets/dropdown.c1099d5e.svg",$e="/news-project/assets/favorite.3499d438.svg",De="/news-project/assets/news.99869eef.svg",We="/news-project/assets/notebook.4e51e690.svg",Ke="/news-project/assets/search.ecf6cdae.svg",He="/news-project/assets/suitcase.6c146f5d.svg";const Me=a.div`
  width: 30%;
  height: 40px;
  margin: 0.9em 0 0.5em;
`,Ge=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,qe=a(ne)`
  background-color: var(--catskill-white);
  border-radius: 10px;
  color: var(--catskill-white);

  input::placeholder {
    color: #000;
  }

  .ant-input {
    background-color: var(--catskill-white);
  }
`,W=a(P)`
  margin-top: 0.2rem;
  margin-left: 1rem;
  width: 92px;
  height: 38px;
  border-radius: 12px;
`,ze=a.div`
  position: absolute;
  right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`,Je={apiKey:"AIzaSyB1PN-4xMhQAMeFO4ByCEE2L9mUfqJFJkI",authDomain:"news-project-b43fd.firebaseapp.com",projectId:"news-project-b43fd",storageBucket:"news-project-b43fd.appspot.com",messagingSenderId:"796968690859",appId:"1:796968690859:web:fa90e54e6a2d6269f9c3ee",measurementId:"G-BS7WNJ5V74"},q=oe(Je),z=re(q),N=ae(q),Ve=new se,F=async()=>{let i={uid:"",displayName:"",email:"",phoneNumber:"",photoURL:"",favorites:[]};return await ce(z,Ve).then(async t=>{const n=await L(N,"users",t.user.uid),r=await le(n);if(!r.exists())await de(L(N,"users",t.user.uid),{uid:t.user.uid,displayName:t.user.displayName,email:t.user.email,phoneNumber:t.user.phoneNumber,photoURL:t.user.photoURL,favorites:JSON.stringify([])}),i=m(d({},i),{uid:t.user.uid,displayName:t.user.displayName,email:t.user.email,phoneNumber:t.user.phoneNumber,photoURL:t.user.photoURL});else{const o=r.data();i={uid:o.uid,displayName:o.displayName,email:o.email,phoneNumber:o.phoneNumber,photoURL:o.photoURL,favorites:JSON.parse(o.favorites)}}}).catch(t=>{console.log(t)}),i},Ye="user_info",T=H({key:Ye,default:{uid:"",displayName:"",email:"",phoneNumber:"",photoURL:"",favorites:[]}}),Qe="SEARCH_KEY",J=H({key:Qe,default:{keyword:""}}),Xe=()=>{const i=A(),[t,n]=x(T),[r,o]=M.exports.useState(""),s=g=>{const{value:y}=g.target;o(y)},[l,u]=x(J),f=c(C,{style:{borderRadius:10},children:[e(C.Item,{children:t.uid.length===0?c("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:10},onClick:async()=>{let g=await F();n(d({},g))},children:[e(he,{}),e("div",{style:{marginLeft:10},children:"Login With Google"})]}):c("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e("div",{style:{marginRight:5},children:t.displayName}),e(pe,{})]})},1),t.uid.length!==0&&e(C.Item,{children:c("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},onClick:()=>{},children:[e("div",{children:"Setting"}),e(ue,{})]})},2),t.uid.length!==0&&e(C.Item,{children:c("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},onClick:async()=>{await z.signOut(),n({uid:"",displayName:"",email:"",phoneNumber:"",photoURL:""})},children:[e("div",{children:"Logout"}),e(me,{})]})},3)]});return e(ge,{position:"fixed",color:"inherit",children:c(Ge,{children:[e(fe,{variant:"dense",children:e(p,{variant:"h6",color:"inherit",component:"div",onClick:()=>i("/"),style:{cursor:"pointer"},children:"News"})}),e(Me,{className:"input-container",children:e(qe,{className:"round-search",value:r,size:"large",placeholder:"Article name or keywords...",prefix:e("img",{src:Ke,alt:"search-icon",width:20,height:20}),onChange:s,onKeyUp:g=>{g.key==="Enter"&&r.toLocaleLowerCase()!==l.keyword.toLocaleUpperCase()&&u({keyword:r})}})}),e(W,{type:"primary",onClick:()=>{r.toLocaleLowerCase()!==l.keyword.toLocaleUpperCase()&&u({keyword:r})},children:"Search"}),e(ye,{overlay:f,placement:"bottomRight",children:c(ze,{children:[t.uid.length!==0?e(ve,{alt:"Rose",src:t.photoURL}):e(W,{type:"primary",children:"Login"}),e(G,{size:"small",children:e("img",{src:Be,alt:"dropdown-icon",height:15,width:15})})]})})]})})},Ze=a.div`
  margin-top: 2rem;
  border-left: 3px solid "transparent";
  width: 100%;
  padding: 0.3rem;
  padding-left: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  transition: 0.2s all ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`,k=i=>e(we,{to:i.to,style:{color:"#000"},children:c(Ze,{children:[e("img",{src:i.icon,width:25,height:25}),e(p,{variant:"body1",style:{marginLeft:10,fontWeight:500},children:i.title})]})}),et=a.div`
  width: 16rem;
  position: fixed;
  align-items: center;
`,I=()=>c(et,{children:[e(k,{icon:De,title:"News",to:"/"}),e(k,{icon:$e,title:"Favorites",to:"/favorites"}),e(p,{variant:"h6",style:{marginLeft:10,marginBottom:10,marginTop:25},children:"Other"}),e(k,{icon:He,title:"Privacy Policy",to:"/"}),e(k,{icon:We,title:"Terms of use",to:"/"})]}),tt=a.div`
  position: relative;
  width: 340px;
  height: 418px;
  border-radius: 10px;
  margin-right: 2em;
  margin-bottom: 2em;
  cursor: pointer;

  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
  div {
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }
`,it=a(p)`
  position: absolute;
  bottom: 2.8em;
  left: 0.3em;
  color: var(--primary-white);
  font-weight: 700;
  font-family: "Roboto", sans-serif;
`,nt=a(p)`
  position: absolute;
  bottom: 0.5em;
  left: 0.5em;
  color: var(--primary-white);
  font-weight: 500;
  font-family: "Roboto", sans-serif;
`,ot=a(G)`
  position: absolute;
  top: 0.2em;
  right: 0.3em;
`,V=i=>{var j;const{article:t}=i,n=A(),[r,o]=x(T),[s,l]=M.exports.useState(!1),u=()=>{l(!0)},f=r.uid.length!==0,g=async()=>{l(!1);let h=await F();o(d({},h))},y=()=>{l(!1)},S=((j=r.favorites)==null?void 0:j.findIndex(h=>h.source_id===t.source_id&&h.title===t.title))!==-1,E=async()=>{var h,O;if(S){const v=(O=r.favorites)==null?void 0:O.filter(Q=>Q.source_id!==t.source_id);o(m(d({},r),{favorites:v}));const R=L(N,"users",r.uid);await D(R,{favorites:JSON.stringify(v)})}else{const v=(h=r.favorites)==null?void 0:h.concat(t);o(m(d({},r),{favorites:v}));const R=L(N,"users",r.uid);await D(R,{favorites:JSON.stringify(v)})}};return c(tt,{children:[e("img",{src:t.image_url?t.image_url:"https://d33wubrfki0l68.cloudfront.net/0b975db41c73858ff2f77fd2f8089709fe0c17b1/a94ba/images/event-images/newsgallery/tng_about_400w.jpg",style:{objectFit:"cover"},onClick:()=>n(`/article/detail/${t.source_id}`,{state:{article:t}})}),e("div",{}),e(it,{variant:"h5",onClick:()=>n(`/article/detail/${t.source_id}`,{state:{article:t}}),children:t.title}),e(nt,{onClick:()=>n(`/article/detail/${t.source_id}`,{state:{article:t}}),children:t.pubDate}),e(ot,{onClick:h=>{h.stopPropagation()},children:S?e(be,{style:{color:"red"},onClick:async h=>{if(h.stopPropagation(),f){E();return}u()}}):e(xe,{style:{color:"white"},onClick:async h=>{if(h.stopPropagation(),f){E();return}u()}})}),e(Ce,{title:"Login Required",visible:s,onOk:g,onCancel:y,children:e("h3",{children:"Please Login before using our functions"})})]})},K=a.div`
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem;

  .tags-list {
    display: flex;
    flex-wrap: wrap;
  }
`,rt=a.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-style: ridge;
  border-radius: 30px;
  width: 100px;
  height: 27px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  margin: 0 0.3em;
  margin-bottom: 0.7em;

  &:hover {
    background-color: var(--catskill-white);
  }
`,at=a.div`
  display: flex;
  flex-wrap: wrap;
`;var Y=(i=>(i.news="news",i))(Y||{});const st={apiVersion:Y.news},ct=i=>localStorage.getItem(i)||"",U=ke.create({paramsSerializer:i=>Le.stringify(i)});U.interceptors.request.use(async i=>i);U.interceptors.response.use(i=>{var t;return i&&i.data?((t=i.data.data)!=null&&t.token&&localStorage.setItem("token",i.data.data.token),i.data.data||i.data):i},i=>{var t,n;throw((t=i.response)==null?void 0:t.status)===404&&_.error("Not found api"),((n=i.response)==null?void 0:n.status)===401?localStorage.clear():(_.dismiss(),_.error("An error occurred")),new Error("An error occurred")});const lt={news:"/api/news"},dt=i=>lt[i],b=async(i,t,n)=>{const{apiVersion:r,headers:o}=i,{body:s,params:l,method:u}=n,f=dt(r);ct("token");const y={"content-type":s instanceof FormData?"multipart/form-data":"application/json"};return await U(t,{baseURL:f,params:l,headers:d(d({},y),o),data:s,method:u})};class ht{async get(t,n,r){return b(t,n,m(d({},r),{method:"GET"}))}async post(t,n,r){return b(t,n,m(d({},r),{method:"POST"}))}async put(t,n,r){return b(t,n,m(d({},r),{method:"PUT"}))}async delete(t,n,r){return b(t,n,m(d({},r),{method:"DELETE"}))}async patch(t,n,r){return b(t,n,m(d({},r),{method:"PATCH"}))}}let pt=new ht;const ut="FETCH_NEWS_LIST",mt="pub_7561164032d09b282c0c3c6911aaa3f43947",gt=i=>pt.get(st,`/api/1/news?apikey=${mt}&q=${i}&language=en`),ft=i=>Ne([ut,i],()=>gt(i),{keepPreviousData:!0,refetchOnWindowFocus:!0,retry:2,enabled:Boolean(i)}),yt=()=>e("div",{style:{textAlign:"center"},children:e(Ie,{style:{fontSize:35},spin:!0})}),vt=()=>{const[i,t]=x(J),n=ft(i.keyword.length===0?"all":i.keyword),r=["Technology","Cooking","Business","Economic","Crypto","Food","Politic","Beauty","Weather","Stock","Sport","Human","Weather","Disaster","Terrorism","Hollywood","Sea Game"];return n.isError?e(K,{children:e("div",{style:{height:"100vh",textAlign:"center"},children:"An error occurred"})}):(console.log("news: ",n),c(K,{children:[e("div",{className:"tags-list",children:r.map((o,s)=>e(rt,{onClick:()=>{t({keyword:o})},children:o},s))}),e(p,{variant:"h3",style:{fontWeight:500,marginTop:40,marginBottom:40},children:"Common articles"}),n.isLoading||n.data===void 0||n.isRefetching?e(yt,{}):e(at,{children:n.data.results.map((o,s)=>e(V,{article:o},s))})]}))},wt=a.div`
  padding-top: 5rem;
`,bt=()=>c(wt,{children:[e(I,{}),e(vt,{})]}),xt=a.div`
  padding-top: 5rem;
`,Ct=a.div`
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem;
`,kt=a.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Lt=a.div`
  width: 100%;
`,Nt=()=>{var o,s;const[i,t]=x(T),n=A(),r=i.uid.length!==0;return c(xt,{children:[e(I,{}),e(Ct,{children:r?c(Se,{children:[e(p,{variant:"h3",style:{fontWeight:500,marginTop:40,marginBottom:40},children:`${i.displayName}'s favorite news`}),e("div",{style:{display:"flex",flexWrap:"wrap"},children:((o=i.favorites)==null?void 0:o.length)===0?c(Lt,{children:[e("h4",{children:"You have no favorite news! Let's pick one"}),e("div",{style:{textAlign:"center"},children:e(P,{type:"primary",onClick:()=>{n("/")},children:"Go to Home"})})]}):(s=i.favorites)==null?void 0:s.map((l,u)=>e(V,{article:l},u))})]}):c(kt,{children:[e("h2",{children:"Please Login"}),e(P,{type:"primary",onClick:async()=>{let l=await F();t(d({},l))},children:"Login"})]})})]})},It=a.div`
  padding-top: 5rem;
`,St=()=>c(It,{children:[e(I,{}),e("div",{children:"PrivacyPolicyPage"})]}),Rt=a.div`
  padding-top: 5rem;
`,_t=()=>e(Rt,{children:e(I,{})}),Pt=a.div`
  padding: 7rem;

  width: 100%;
  height: 100%;

  .article-detail__content {
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
  }
`,At=a(p)`
  font-weight: 700;
  letter-spacing: 0em;
`,Ft=a.img`
  width: 100%;
  height: 600px;
  border-radius: 10px;
  margin: 2em 0;
  object-fit: cover;
`,Tt=a(p)`
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0em;
`,Ut=a(p)`
  font-family: Overlock;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  margin: 1.5em 0;
`,Et=a(p)`
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0em;
  margin-bottom: 1.5em;
`,jt=()=>{const i=window.location.href.split("/").pop(),{state:t}=Re(),{article:n}=t;return console.log(i),c(Pt,{children:[c(At,{variant:"h3",children:[n.title,"."]}),e(Ft,{src:n.image_url?n.image_url:"https://cdn.pixabay.com/photo/2016/11/22/19/17/buildings-1850129__340.jpg",alt:"article-image"}),e(Tt,{children:n.description}),e(Ut,{children:n.pubDate}),c(Et,{children:["By ",n.creator?n.creator[0]:"Author"]}),e("p",{className:"article-detail__content",children:n.content})]})};const Ot=new _e;function Bt(){return e(Pe,{client:Ot,children:e(Ae,{children:e("div",{className:"App",children:c(Fe,{children:[e(Xe,{}),c(Te,{children:[e(w,{path:"/",element:e(bt,{})}),e(w,{path:"/favorites",element:e(Nt,{})}),e(w,{path:"/privacyPolicy",element:e(St,{})}),e(w,{path:"/termsOfUse",element:e(_t,{})}),e(w,{path:"/article/detail/:id",element:e(jt,{})})]})]})})})})}const $t=Ue`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: var(--background-white-alpha);
    color: var(--primary-text-color);
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    transition: all 0.25s linear;
  }

  .ant-btn {
    border-radius: 10px !important;
  }

  .ant-modal-content, .ant-modal-header{
    border-radius: 10px !important;

  }
`,Dt=document.getElementById("root");Ee.render(c(je.StrictMode,{children:[e($t,{}),e(Bt,{})]}),Dt);
