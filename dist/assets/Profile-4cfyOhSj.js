import{j as e,F as N,r as x,i as u,D as p,G as w,L as y,H as P,I as U,J as F,K as S,u as T,N as A,O as $,Q as k,z as I,S as M}from"./index-gAXOsWvj.js";import{H as E,l as z}from"./index.esm-ZEqgX0kW.js";import{I as H}from"./index.esm-zwg-LJeG.js";import{F as L,a as C,N as B,P as D}from"./FollowBottun-gl5tGnJS.js";import"./index.esm-eauOvjz6.js";const R=({targetUser:s})=>e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"-mt-1",children:s[0]&&s[0].firstName+" "+s[0].lastName}),e.jsx("span",{className:"flex gap-2",children:e.jsx("small",{children:s[0]&&"@"+s[0].username})})]}),q=({targetUser:s})=>{const a=N();return e.jsxs("div",{className:"sticky top-0 flex items-center gap-3 py-2 px-3 w-full border-b-[2px] bg-white z-20",children:[e.jsx("button",{onClick:()=>a(-1),className:"flex border-[2px] rounded-full p-3 text-2xl hover:bg-bg-hover",children:e.jsx(H,{})}),e.jsx(R,{targetUser:s})]})},G=()=>{const[s,a]=x.useState(""),[t,i]=x.useState(""),n=u(r=>r.ui),o=n.isMyProfile,l=n.targetUser,m=n.loginUser;x.useEffect(()=>{const r=`https://saeedwebdev.ir/api/friends/q/${l[0]&&l[0].id}`;async function f(){const d=l[0]&&await P(r);d&&(a(d.followers),i(d.followings))}f()},[l[0]]);const c=()=>{const r=l[0]&&l[0].email,f=`https://saeedwebdev.ir/api/auth/logout/${r}`;async function d(){r&&await U(f)&&(localStorage.setItem("token",""),localStorage.setItem("user",""),location.reload("/"))}d()},v=r=>{const f=r.target.files[0],d="https://saeedwebdev.ir/i",h=`https://saeedwebdev.ir/api/users/${l[0].id}`,g=new FormData;g.append("image",f);async function b(){const j=await F(d,g);j&&await S(h,j)}b()};return e.jsxs("header",{className:"relative flex flex-col w-full z-10",children:[e.jsx("div",{className:"flex w-full max-w-none h-72",children:e.jsx("img",{src:l[0].avatar?`https://saeedwebdev.ir/avatar/${l[0].avatar}`:p,alt:"",className:"object-cover h-full w-full"})}),e.jsx("div",{className:"flex items-center justify-end w-full lg:gap-5 gap-2 py-5 lg:px-8 md:px-4 px-2",children:o==""?"":o!==m[0].id?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"flex md:px-5 px-2 pt-1 pb-2 rounded-[.4rem] text-white bg-green-500 gap-2",children:[e.jsx("i",{className:"text-[1.2rem] pt-1",children:e.jsx(w,{})}),e.jsx("span",{className:"md:flex hidden",children:"تغییر اطلاعات "})]}),e.jsx("button",{onClick:c,className:"flex md:px-5 px-2 pt-1 pb-2 rounded-[.4rem] text-white bg-green-500",children:e.jsx("span",{children:"خروج از حساب "})})]}):e.jsxs(e.Fragment,{children:[l&&e.jsx(L,{targetUser:l}),e.jsx("button",{className:"md:flex hidden md:px-5 px-2 pt-1 pb-2 rounded-[.4rem] text-white bg-green-500",children:"شبکهای اجتماعی"}),e.jsx(y,{to:`/sma/chat/${l[0]&&l[0].id}`,className:"md:px-5 px-2 pt-1 pb-2 rounded-[.4rem] text-white bg-green-500",children:"ارسال پیام"})]})}),e.jsxs("div",{className:"flex flex-col",children:[o==""?"":o!==m[0].id?e.jsxs(e.Fragment,{children:[e.jsxs("label",{htmlFor:"image",className:"absolute xl:right-20 lg:right-8 md:right-4 right-2 md:bottom-10 bottom-14 w-32 h-32 border-2 border-white rounded-full cursor-pointer z-30",children:[e.jsx("img",{src:l[0].avatar?`https://saeedwebdev.ir/avatar/${l[0].avatar}`:p,alt:"",className:"object-cover bg-white  h-full w-full rounded-full"}),e.jsx("span",{className:"absolute right-0 bottom-0 text-2xl",children:e.jsx(w,{})})]}),e.jsx("input",{onChange:r=>v(r),className:"hidden",type:"file",name:"image",id:"image",accept:".jpg, .jpeg, .png"})]}):e.jsx("div",{className:"absolute xl:right-20 lg:right-8 md:right-4 right-2 md:bottom-10 bottom-14 w-32 h-32 border-2 border-white bg-white rounded-full z-50",children:e.jsx("img",{src:l[0].avatar?`https://saeedwebdev.ir/avatar/${l[0].avatar}`:p,alt:"",className:"object-cover h-full w-full rounded-full"})}),e.jsx("div",{className:"relative flex flex-col w-full min-w-max px-3",children:e.jsxs("div",{className:"flex items-center md:justify-center justify-between h-full md:gap-8 gap-6 lg:px-6",children:[e.jsxs("div",{className:"flex justify-center  min-w-max ",children:[e.jsx("span",{className:"flex items-center",children:l[0]&&l[0].firstName+" "+l[0].lastName}),e.jsx("span",{children:l[0]&&l[0].dis})]}),e.jsxs("div",{className:"flex md:gap-4 gap-2 w-full",children:[e.jsxs("a",{href:"",className:"flex md:flex-row flex-col items-center min-w-max md:gap-1",children:[e.jsx("span",{children:t&&t}),e.jsx("span",{children:"دنبال کننده"})]}),e.jsxs("a",{href:"",className:"flex md:flex-row flex-col items-center min-w-max md:gap-1",children:[e.jsx("span",{children:s&&s}),e.jsx("span",{children:"دنبال شده"})]})]})]})})]})]})},J=({targetUser:s})=>e.jsxs("div",{className:"flex flex-col w-full max-w-[800px] gap-1 py-2 pb-4 px-3 shadow-3xl rounded-[.6rem] bg-white",children:[e.jsx("div",{children:e.jsx("span",{children:"درباره"})}),e.jsx("div",{children:e.jsx("span",{children:s[0]&&s[0].firstName+" "+s[0].lastName})})]}),K=()=>{const a=u(t=>t.ui).alltargetUserPosts;return e.jsx("div",{className:"flex flex-col w-full max-w-[800px] h-fit bg-white",children:e.jsxs("div",{className:"flex flex-col gap-4 py-2 pb-4 px-3 shadow-3xl rounded-[.6rem]",children:[e.jsx("span",{children:"داغ ترین اپلود ها"}),e.jsx("div",{className:"grid grid-cols-2 gap-2 rounded-[.4rem] overflow-hidden",children:a?a.map(t=>e.jsx("img",{src:`https://saeedwebdev.ir/avatar/${t.media}`,alt:""})):e.jsx("div",{})}),e.jsx("button",{className:"h-10 w-full bg-bg-hover rounded-[.4rem]",children:"مشاهده همه"})]})})},O=({targetUser:s})=>e.jsxs("div",{className:"lg:sticky lg:top-20 flex flex-col justify-between items-center w-full h-fit px-3 md:gap-6 gap-4",children:[e.jsx(J,{targetUser:s}),e.jsx(K,{targetUser:s})]}),Q=({targetUser:s})=>{const t=u(i=>i.ui).alltargetUserPosts;return e.jsx("div",{className:"flex flex-col w-full md:gap-6 gap-4",children:t[0]==""?"":t[0]!=="no post"?t.map(i=>e.jsx(C,{post:i,targetUser:s[0]})):e.jsx("div",{className:"flex justify-center w-full",children:e.jsx(B,{})})})},W=({targetUser:s})=>{const a=u(n=>n.ui),t=a.loginUser,i=a.isMyProfile;return e.jsxs("div",{className:"flex flex-col justify-between w-full h-full px-3 md:gap-6 gap-4",children:[i==""||i==t[0].id?"":e.jsx(D,{}),e.jsx("div",{className:"flex flex-col w-full gap-4 pb-6",children:e.jsx(Q,{targetUser:s,loginUser:t})})]})},V=({targetUser:s})=>e.jsxs("div",{className:"flex flex-col justify-center items-center gap-6 w-full",children:[e.jsx(G,{targetUser:s}),e.jsxs("div",{className:"flex justify-center md:items-start items-center lg:flex-row flex-col-reverse w-full lg:gap-0 md:gap-6 gap-4 lg:pt-2 pt-0 lg:px-6 md:px-2 px-0",children:[e.jsx(W,{targetUser:s}),e.jsx(O,{targetUser:s})]})]}),X=()=>{const[s,a]=x.useState(""),[t,i]=x.useState(window.location.href),n=T(),o=t.split("/"),l=o[o.length-1];return x.useEffect(()=>{async function m(){const c=await $(`https://saeedwebdev.ir/api/users/${l}`);c&&(a(c),n(k(c)))}m()},[t]),x.useEffect(()=>{n(A());async function m(){if(s[0]){const c=await I(`https://saeedwebdev.ir/api/posts/${s[0].id}`);c&&n(M(c))}}m()},[s,t]),e.jsx("section",{className:"flex flex-col justify-start items-center w-full overflow-y-scroll md:pb-4 pb-16 max-h-screen h-full",children:s?e.jsxs(e.Fragment,{children:[e.jsx(q,{targetUser:s}),e.jsx(V,{targetUser:s})]}):e.jsx("div",{className:"h-screen flex items-center",children:e.jsx(z,{color:"black"})})})},le=E(X);export{le as default};
