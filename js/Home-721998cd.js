import{e as p,u as v,f as i,g as m,h as f,i as h,j as e,k as g,t as y,l as n,o as k,p as b,m as S}from"./vendor-489bc5cc.js";import{_ as x}from"./index-7697e655.js";const d=a=>(b("data-v-3b16e2aa"),a=a(),S(),a),C={class:"home"},I=d(()=>e("div",{class:"bg"},null,-1)),B=d(()=>e("header",null,[e("h3",{class:"center"}," 敲木鱼攒功德 ")],-1)),H={class:"count-box center"},R={class:"count"},w={class:"center"},N=["src"],T=["src"],V=p({__name:"Home",setup(a){const o=v("count",0),t=i(!1),s=i();m(()=>{s.value&&(s.value.onended=()=>{t.value=!1})});const c=f(()=>{s.value&&(t.value&&(s.value.pause(),s.value.load()),s.value.play(),o.value=(o.value||0)+1,t.value=!0)},300),_=()=>{o.value=0};return(l,u)=>(k(),h("div",C,[I,B,e("main",null,[e("div",H,[g(" 您的功德："),e("span",R,y(n(o)),1)]),e("div",w,[e("div",{onClick:u[0]||(u[0]=(...r)=>n(c)&&n(c)(...r)),class:"muyu-img"},[e("img",{src:l.$assets("images/muyu.webp"),alt:"",srcset:""},null,8,N)])]),e("div",{class:"reset center",onClick:_},"重新开始")]),e("audio",{class:"audio",ref_key:"audioRef",ref:s,src:l.$assets("audio/muyu1.mp3"),loop:!1},null,8,T)]))}});const D=x(V,[["__scopeId","data-v-3b16e2aa"]]);export{D as default};