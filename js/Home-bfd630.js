import{e as r,u as _,f as u,g as f,h as p,i as m,j as e,n as v,k as o,l as h,t as g,o as y,p as S,m as k}from"./vendor-ea780c.js";import{_ as b}from"./index-a3278c.js";const x="/woodfish/static/muyu-8a4c75.mp3",w="/woodfish/static/muyu-197792.png",C="/woodfish/static/bg1-80b78b.jpg",I=a=>(S("data-v-5f93f031"),a=a(),k(),a),B={class:"home"},H=I(()=>e("header",null,[e("h3",{class:"center"}," 敲木鱼攒功德 ")],-1)),R={class:"count-box center"},j={class:"count"},N={class:"center"},T=["src"],V=["src"],z=r({__name:"Home",setup(a){const t=_("count",0),c=u(!1),s=u();f(()=>{s.value&&(s.value.onended=()=>{c.value=!1})});const n=p(()=>{s.value&&(c.value&&(s.value.pause(),s.value.load()),s.value.play(),t.value=(t.value||0)+1,c.value=!0)},300),i=()=>{t.value=0};return(D,l)=>(y(),m("div",B,[e("div",{class:"bg",style:v(`background-image: url(${o(C)})`)},null,4),H,e("main",null,[e("div",R,[h(" 您的功德："),e("span",j,g(o(t)),1)]),e("div",N,[e("div",{onClick:l[0]||(l[0]=(...d)=>o(n)&&o(n)(...d)),class:"muyu-img"},[e("img",{src:o(w),alt:"",srcset:""},null,8,T)])]),e("div",{class:"reset center",onClick:i},"重新开始")]),e("audio",{class:"audio",ref_key:"audioRef",ref:s,src:o(x),loop:!1},null,8,V)]))}});const L=b(z,[["__scopeId","data-v-5f93f031"]]);export{L as default};