import{j as e,D as U,r as d,i as p,z as j,E as v,F as A,_ as N,G as S,H as I,I as T,u as $,J as E,K as L,x as M,N as _}from"./index-tgzeSrcs.js";import{H as k}from"./index.esm-8F4p_sE_.js";import{I as H}from"./index.esm-aDVjc5m0.js";import{F as R,a as z,P as C}from"./FollowBottun-oBUzMZ0I.js";import"./index.esm-KDQMD6gg.js";const B=({targetUser:s})=>e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"-mt-1",children:s[0]&&s[0].firstName+" "+s[0].lastName}),e.jsx("span",{className:"flex gap-2",children:e.jsxs("small",{children:["@",s[0]&&s[0].username]})})]}),D=({targetUser:s})=>{const n=U();return e.jsxs("div",{className:"sticky top-0 flex items-center gap-3 py-2 px-3 w-full border-b-[2px] bg-white z-50",children:[e.jsx("button",{onClick:()=>n(-1),className:"flex border-[2px] rounded-full p-3 text-2xl hover:bg-bg-hover",children:e.jsx(H,{})}),e.jsx(B,{targetUser:s})]})},O=()=>{const[s,n]=d.useState(null),[t,a]=d.useState(null),[m,x]=d.useState(""),[f,i]=d.useState(""),w=p(r=>r.ui),h=w.isMyProfile,l=w.targetUser;d.useEffect(()=>{const r=`https://saeedwebdev.ir/api/friends/q/${l[0]&&l[0].id}`;async function c(){const o=l[0]&&await A(r);o&&(x(o.followers),i(o.followings))}c()},[l[0]]);const y=()=>{const r=l[0]&&l[0].email;console.log(r);const c=`https://saeedwebdev.ir/api/auth/logout/${r}`;async function o(){const u=r&&await S(c);console.log(u),u&&(location.reload("/"),location.reload("/"))}o()},P=r=>{const c=r.target.files[0],o="https://saeedwebdev.ir/i",u=`https://saeedwebdev.ir/api/users/${l[0].id}`,b=new FormData;b.append("image",c);async function F(){const g=await I(o,b);g&&await T(u,g)=="avatar added"&&(n(g),location.reload())}F()};return d.useEffect(()=>{function r(){const c=new URL(Object.assign({"../../../assets/avatar/testImg.png":N})[`../../../assets/avatar/${l&&l[0].avatar}`],import.meta.url).href,o=c.split("/").length,u=c.split("/")[o-1];u!=="undefined"&&a(c),u=="undefined"&&a(null)}r()},[l]),e.jsxs("header",{className:"relative flex flex-col w-full",children:[e.jsx("div",{className:"flex w-full max-w-none h-72",children:e.jsx("img",{src:j,alt:"",className:"object-cover h-full w-full"})}),e.jsx("div",{className:"flex items-center justify-end w-full lg:gap-5 gap-2 py-5 lg:px-8 md:px-4 px-2",children:h?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"flex md:px-5 px-2 pt-1 pb-2 rounded-[.4rem] text-white bg-green-500 gap-2",children:[e.jsx("i",{className:"text-[1.2rem] pt-1",children:e.jsx(v,{})}),e.jsx("span",{className:"md:flex hidden",children:"تغییر اطلاعات "})]}),e.jsx("button",{onClick:y,className:"flex md:px-5 px-2 pt-1 pb-2 rounded-[.4rem] text-white bg-green-500",children:e.jsx("span",{children:"خروج از حساب "})})]}):e.jsxs(e.Fragment,{children:[l&&e.jsx(R,{targetUser:l}),e.jsx("button",{className:"md:flex hidden md:px-5 px-2 pt-1 pb-2 rounded-[.4rem] text-white bg-green-500",children:"شبکهای اجتماعی"}),e.jsx("a",{href:`/sma/chat/${l[0]&&l[0].id}`,className:"md:px-5 px-2 pt-1 pb-2 rounded-[.4rem] text-white bg-green-500",children:"ارسال پیام"})]})}),e.jsxs("div",{className:"flex flex-col",children:[h&&e.jsxs(e.Fragment,{children:[e.jsxs("label",{htmlFor:"image",className:"absolute xl:right-20 lg:right-8 md:right-4 right-2 md:bottom-10 bottom-14 w-32 h-32 border-4 border-white rounded-full cursor-pointer z-40",children:[e.jsx("img",{src:t||j,alt:"",className:"object-cover bg-white  h-full w-full rounded-full"}),e.jsx("span",{className:"absolute right-0 bottom-0 text-2xl",children:e.jsx(v,{})})]}),e.jsx("input",{onChange:r=>P(r),className:"hidden",type:"file",name:"image",id:"image",accept:".jpg, .jpeg, .png"})]}),!h&&e.jsx("div",{className:"absolute xl:right-20 lg:right-8 md:right-4 right-2 md:bottom-10 bottom-14 w-32 h-32 border-4 border-white bg-white rounded-full z-50",children:e.jsx("img",{src:t||j,alt:"",className:"object-cover h-full w-full rounded-full"})}),e.jsx("div",{className:"relative flex flex-col w-full min-w-max px-3",children:e.jsxs("div",{className:"flex items-center md:justify-center justify-between h-full md:gap-8 gap-6 lg:px-6",children:[e.jsxs("div",{className:"flex justify-center  min-w-max ",children:[e.jsx("span",{className:"flex items-center",children:l[0]&&l[0].firstName+" "+l[0].lastName}),e.jsx("span",{children:l[0]&&l[0].dis})]}),e.jsxs("div",{className:"flex md:gap-4 gap-2 w-full",children:[e.jsxs("a",{href:"",className:"flex md:flex-row flex-col items-center min-w-max md:gap-1",children:[e.jsx("span",{children:f&&f}),e.jsx("span",{children:"دنبال کننده"})]}),e.jsxs("a",{href:"",className:"flex md:flex-row flex-col items-center min-w-max md:gap-1",children:[e.jsx("span",{children:m&&m}),e.jsx("span",{children:"دنبال شده"})]})]})]})})]})]})},q=({targetUser:s})=>e.jsxs("div",{className:"flex flex-col w-full max-w-[800px] gap-1 py-2 pb-4 px-3 shadow-3xl rounded-[.6rem] bg-white",children:[e.jsx("div",{children:e.jsx("span",{children:"درباره"})}),e.jsx("div",{children:e.jsx("span",{children:s[0]&&s[0].firstName+" "+s[0].lastName})})]}),G=()=>{const n=p(t=>t.ui).alltargetUserPosts;return e.jsx("div",{className:"flex flex-col w-full max-w-[800px] h-fit bg-white",children:e.jsxs("div",{className:"flex flex-col gap-4 py-2 pb-4 px-3 shadow-3xl rounded-[.6rem]",children:[e.jsx("span",{children:"داغ ترین اپلود ها"}),e.jsx("div",{className:"grid grid-cols-2 gap-2 rounded-[.4rem] overflow-hidden",children:n?n.map(t=>{let a="";function m(){const x=new URL(Object.assign({"../../../../assets/avatar/testImg.png":N})[`../../../../assets/avatar/${t&&t.media}`],import.meta.url).href,f=x.split("/").length,i=x.split("/")[f-1];i!=="undefined"&&(a=x),i=="undefined"&&(a=null)}return m(),e.jsx("img",{src:a,alt:""})}):e.jsx("div",{})}),e.jsx("button",{className:"h-10 w-full bg-bg-hover rounded-[.4rem]",children:"مشاهده همه"})]})})},J=({targetUser:s})=>e.jsxs("div",{className:"lg:sticky lg:top-20 flex flex-col justify-between items-center w-full h-fit px-3 md:gap-6 gap-4",children:[e.jsx(q,{targetUser:s}),e.jsx(G,{targetUser:s})]}),K=({targetUser:s})=>{const t=p(a=>a.ui).alltargetUserPosts;return e.jsx("div",{className:"flex flex-col w-full md:gap-6 gap-4",children:t[0]?t.map(a=>e.jsx(z,{post:a,targetUser:s[0]})):e.jsx("div",{className:"flex justify-center w-full",children:e.jsx("div",{className:"flex justify-center py-2 pb-4 px-3 w-full shadow-3xl rounded-[.6rem] max-w-[800px] bg-white",children:"هیچ پستی وجود ندارد"})})})},W=({targetUser:s})=>{const t=p(a=>a.ui).isMyProfile;return e.jsxs("div",{className:"flex flex-col justify-between w-full h-full px-3 md:gap-6 gap-4",children:[t&&e.jsx(C,{}),e.jsx("div",{className:"flex flex-col w-full gap-4 pb-6",children:e.jsx(K,{targetUser:s})})]})},Q=({targetUser:s})=>e.jsxs("div",{className:"flex flex-col justify-center items-center gap-6 w-full",children:[e.jsx(O,{targetUser:s}),e.jsxs("div",{className:"flex justify-center md:items-start items-center lg:flex-row flex-col-reverse w-full lg:gap-0 md:gap-6 gap-4 lg:pt-2 pt-0 lg:px-6 md:px-2 px-0",children:[e.jsx(W,{targetUser:s}),e.jsx(J,{targetUser:s})]})]}),V=()=>{const[s,n]=d.useState(""),t=$(),m=window.location.href.split("/"),x=m[m.length-1];return d.useEffect(()=>{async function f(){const i=await E(`https://saeedwebdev.ir/api/users/${x}`);i&&(n(i),t(L(i)))}f()},[x]),d.useEffect(()=>{async function f(){if(s[0]){const i=await M(`https://saeedwebdev.ir/api/posts/${s[0].id}`);i&&t(_(i))}}f()},[s]),e.jsxs("section",{className:"flex flex-col justify-start items-center w-full overflow-y-scroll md:pb-4 pb-16 max-h-screen h-full",children:[e.jsx(D,{targetUser:s}),e.jsx(Q,{targetUser:s})]})},te=k(V);export{te as default};
