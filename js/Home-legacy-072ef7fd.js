System.register(["./vendor-legacy-a7cc83b1.js","./index-legacy-04fb8111.js"],(function(q,A){"use strict";var e,o,a,t,n,i,s,l,d,g,r,c,u,m,v=document.createElement("style");return v.textContent=".home[data-v-eb04cd65]{min-height:66.666667vw;height:100vh;overflow:hidden auto;position:relative}.home .bg[data-v-eb04cd65]{position:absolute;top:0;right:0;left:0;bottom:0;z-index:-1;background-image:url("+new URL("../static/bg1-4888f4b6.jpg",A.meta.url).href+");background-position:top;background-repeat:no-repeat;background-size:cover;-webkit-filter:blur(.533333vw);filter:blur(.533333vw)}.home .muyu-img[data-v-eb04cd65]{margin:1vh auto 0;width:42.666667vw;height:42.666667vw;-webkit-transition:all .05s ease-out;transition:all .05s ease-out;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom}.home .muyu-img[data-v-eb04cd65]:active{-webkit-transform:scale(.98);-ms-transform:scale(.98);transform:scale(.98)}.home .center[data-v-eb04cd65]{text-align:center}.home .count-box[data-v-eb04cd65]{margin-top:35vh;font-size:4.8vw}.home .count-box .count[data-v-eb04cd65]{font-weight:700;color:#25202c}.home .reset[data-v-eb04cd65]{margin-top:10vh;color:#777;text-decoration:underline}.home .audio[data-v-eb04cd65]{display:none}\n",document.head.appendChild(v),{setters:[q=>{e=q.e,o=q.u,a=q.f,t=q.g,n=q.h,i=q.i,s=q.j,l=q.k,d=q.t,g=q.l,r=q.o,c=q.p,u=q.m},q=>{m=q._}],execute:function(){const A=q=>(c("data-v-eb04cd65"),q=q(),u(),q),v={class:"home"},b=A((()=>s("div",{class:"bg"},null,-1))),Q=A((()=>s("header",null,[s("h3",{class:"center"}," 敲木鱼攒功德 ")],-1))),I={class:"count-box center"},M={class:"count"},C={class:"center"},E=["src"];q("default",m(e({__name:"Home",setup(q){const A=o("count",0),e=a(!1),c=a();t((()=>{c.value&&(c.value.onended=()=>{e.value=!1})}));const u=n((()=>{c.value&&(e.value&&(c.value.pause(),c.value.load()),c.value.play(),A.value=(A.value||0)+1,e.value=!0)}),300),m=()=>{A.value=0};return(q,e)=>(r(),i("div",v,[b,Q,s("main",null,[s("div",I,[l(" 您的功德："),s("span",M,d(g(A)),1)]),s("div",C,[s("div",{onClick:e[0]||(e[0]=(...q)=>g(u)&&g(u)(...q)),class:"muyu-img"},[s("img",{src:q.$assets("images/muyu.webp"),alt:"",srcset:""},null,8,E)])]),s("div",{class:"reset center",onClick:m},"重新开始")]),s("audio",{class:"audio",ref_key:"audioRef",ref:c,src:"data:audio/mpeg;base64,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",loop:!1},null,512)]))}}),[["__scopeId","data-v-eb04cd65"]]))}}}));
