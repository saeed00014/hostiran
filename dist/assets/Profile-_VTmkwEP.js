import{j as s,ao as xs,r as p,i as x,z as f,ap as j,aq as hs,_ as w,C as S,D as N,E as P,F as y,G as F,H as U,I as A,J as T,K as $,N as E,O as I,P as C,Q as L,S as M,U as k,V as H,W as R,X as z,Y as B,Z as D,$ as O,a0 as q,a1 as W,a2 as G,a3 as J,a4 as K,a5 as Q,a6 as V,a7 as X,a8 as Y,a9 as Z,aa as ss,ab as as,ac as es,ad as ts,ae as ls,af as rs,ag as ns,ah as os,ai as is,aj as cs,ak as ps,al as gs,ar as ms,as as fs,at as us,u as bs,au as js,av as ws,x as Ss,aw as Ns}from"./index-rh96lnhm.js";import{H as Ps}from"./index.esm-JewEfPaj.js";import{I as ys}from"./index.esm-OPJfJmgn.js";import{F as Fs,a as Us,P as As}from"./FollowBottun-r-zWF2Hy.js";import"./index.esm-Dotkj72i.js";const Ts=({targetUser:a})=>s.jsxs("div",{className:"flex flex-col",children:[s.jsx("span",{className:"-mt-1",children:a[0]&&a[0].firstName+" "+a[0].lastName}),s.jsx("span",{className:"flex gap-2",children:s.jsxs("small",{children:["@",a[0]&&a[0].username]})})]}),$s=({targetUser:a})=>{const n=xs();return s.jsxs("div",{className:"sticky top-0 flex items-center gap-3 py-2 px-3 w-full border-b-[2px] bg-white z-50",children:[s.jsx("button",{onClick:()=>n(-1),className:"flex border-[2px] rounded-full p-3 text-2xl hover:bg-bg-hover",children:s.jsx(ys,{})}),s.jsx(Ts,{targetUser:a})]})},Es=()=>{const[a,n]=p.useState(null),[t,l]=p.useState(null),[_,g]=p.useState(""),[d,r]=p.useState(""),u=x(o=>o.ui),h=u.isMyProfile,e=u.targetUser;p.useEffect(()=>{const o=`https://saeedwebdev.ir/api/friends/q/${e[0]&&e[0].id}`;async function i(){const c=e[0]&&await hs(o);c&&(g(c.followers),r(c.followings))}i()},[e[0]]);const ds=()=>{const i=`https://saeedwebdev.ir/api/auth/logout/${e[0]&&e[0].email}`;async function c(){await ms(i)&&location.reload("/")}c()},_s=o=>{const i=o.target.files[0],c="https://saeedwebdev.ir/i",v=`https://saeedwebdev.ir/api/users/${e[0].id}`,b=new FormData;b.append("image",i);async function vs(){const m=await fs(c,b);m&&await us(v,m)=="avatar added"&&(n(m),location.reload())}vs()};return p.useEffect(()=>{function o(){const i=new URL(Object.assign({"../../../assets/avatar/1700021175455-Screenshot (3).png":w,"../../../assets/avatar/1700021380995-laptopP1.png":S,"../../../assets/avatar/1700022766143-Screenshot (1).png":N,"../../../assets/avatar/1700026203021-laptopP1.png":P,"../../../assets/avatar/1700026672914-Screenshot (3).png":y,"../../../assets/avatar/1700026718463-Screenshot (5).png":F,"../../../assets/avatar/1700026730172-Screenshot (4).png":U,"../../../assets/avatar/1700026739207-Screenshot (6).png":A,"../../../assets/avatar/1700026851107-Screenshot (4).png":T,"../../../assets/avatar/1700026900991-Screenshot (5).png":$,"../../../assets/avatar/1700027014952-Screenshot (6).png":E,"../../../assets/avatar/1700027098382-Screenshot (5).png":I,"../../../assets/avatar/1700027241065-Screenshot (3).png":C,"../../../assets/avatar/1700027368448-Favion.png":L,"../../../assets/avatar/1700027406405-laptopP1.png":M,"../../../assets/avatar/1700027419360-Favivon.png":k,"../../../assets/avatar/1700027464646-bodyForm.png":H,"../../../assets/avatar/1700027554968-laptopP1.png":R,"../../../assets/avatar/1700027691969-Screenshot (3).png":z,"../../../assets/avatar/1700027773846-Favion.png":B,"../../../assets/avatar/1700027884185-Screenshot (5).png":D,"../../../assets/avatar/1700027930931-laptopP1.png":O,"../../../assets/avatar/1700027974019-Screenshot (6).png":q,"../../../assets/avatar/1700027994400-Screenshot (5).png":W,"../../../assets/avatar/1700028071397-laptopP1.png":G,"../../../assets/avatar/1700028097989-bodySign.png":J,"../../../assets/avatar/1700028183435-Screenshot (5).png":K,"../../../assets/avatar/1700028191265-Screenshot (3).png":Q,"../../../assets/avatar/1700028279413-Favion.png":V,"../../../assets/avatar/1700028317628-Screenshot (3).png":X,"../../../assets/avatar/1700028419543-laptopP1.png":Y,"../../../assets/avatar/1700028513423-Screenshot (6).png":Z,"../../../assets/avatar/1700028652992-Favivon.png":ss,"../../../assets/avatar/1700028867853-laptopP1.png":as,"../../../assets/avatar/1700028960535-Screenshot (5).png":es,"../../../assets/avatar/1700028975192-perresume.png":ts,"../../../assets/avatar/1700029004313-Screenshot (20).png":ls,"../../../assets/avatar/1700029375605-laptopP1.png":rs,"../../../assets/avatar/1700029411873-Screenshot (6).png":ns,"../../../assets/avatar/1700029865432-laptopP1.png":os,"../../../assets/avatar/1700040216132-Screenshot (76).png":is,"../../../assets/avatar/1700040248940-Screenshot (36).png":cs,"../../../assets/avatar/1700283463526-Screenshot (46).png":ps,"../../../assets/avatar/1700283571206-bodyCard.png":gs})[`../../../assets/avatar/${e&&e[0].avatar}`],import.meta.url).href,c=i.split("/").length,v=i.split("/")[c-1];v!=="undefined"&&l(i),v=="undefined"&&l(null)}o()},[e]),s.jsxs("header",{className:"relative flex flex-col w-full",children:[s.jsx("div",{className:"flex w-full max-w-none h-72",children:s.jsx("img",{src:f,alt:"",className:"object-cover h-full w-full"})}),s.jsx("div",{className:"flex items-center justify-end w-full lg:gap-5 gap-2 py-5 lg:px-8 md:px-4 px-2",children:h?s.jsxs(s.Fragment,{children:[s.jsxs("button",{className:"flex md:px-5 px-2 pt-1 pb-2 rounded-[.4rem] text-white bg-green-500 gap-2",children:[s.jsx("i",{className:"text-[1.2rem] pt-1",children:s.jsx(j,{})}),s.jsx("span",{className:"md:flex hidden",children:"تغییر اطلاعات "})]}),s.jsx("button",{onClick:ds,className:"flex md:px-5 px-2 pt-1 pb-2 rounded-[.4rem] text-white bg-green-500",children:s.jsx("span",{children:"خروج از حساب "})})]}):s.jsxs(s.Fragment,{children:[e&&s.jsx(Fs,{targetUser:e}),s.jsx("button",{className:"md:flex hidden md:px-5 px-2 pt-1 pb-2 rounded-[.4rem] text-white bg-green-500",children:"شبکهای اجتماعی"}),s.jsx("a",{href:`/sma/chat/${e[0]&&e[0].id}`,className:"md:px-5 px-2 pt-1 pb-2 rounded-[.4rem] text-white bg-green-500",children:"ارسال پیام"})]})}),s.jsxs("div",{className:"flex flex-col",children:[h&&s.jsxs(s.Fragment,{children:[s.jsxs("label",{htmlFor:"image",className:"absolute xl:right-20 lg:right-8 md:right-4 right-2 md:bottom-10 bottom-14 w-32 h-32 border-4 border-white rounded-full cursor-pointer z-40",children:[s.jsx("img",{src:t||f,alt:"",className:"object-cover bg-white  h-full w-full rounded-full"}),s.jsx("span",{className:"absolute right-0 bottom-0 text-2xl",children:s.jsx(j,{})})]}),s.jsx("input",{onChange:o=>_s(o),className:"hidden",type:"file",name:"image",id:"image",accept:".jpg, .jpeg, .png"})]}),!h&&s.jsx("div",{className:"absolute xl:right-20 lg:right-8 md:right-4 right-2 md:bottom-10 bottom-14 w-32 h-32 border-4 border-white bg-white rounded-full z-50",children:s.jsx("img",{src:t||f,alt:"",className:"object-cover h-full w-full rounded-full"})}),s.jsx("div",{className:"relative flex flex-col w-full min-w-max px-3",children:s.jsxs("div",{className:"flex items-center md:justify-center justify-between h-full md:gap-8 gap-6 lg:px-6",children:[s.jsxs("div",{className:"flex justify-center  min-w-max ",children:[s.jsx("span",{className:"flex items-center",children:e[0]&&e[0].firstName+" "+e[0].lastName}),s.jsx("span",{children:e[0]&&e[0].dis})]}),s.jsxs("div",{className:"flex md:gap-4 gap-2 w-full",children:[s.jsxs("a",{href:"",className:"flex md:flex-row flex-col items-center min-w-max md:gap-1",children:[s.jsx("span",{children:d&&d}),s.jsx("span",{children:"دنبال کننده"})]}),s.jsxs("a",{href:"",className:"flex md:flex-row flex-col items-center min-w-max md:gap-1",children:[s.jsx("span",{children:_&&_}),s.jsx("span",{children:"دنبال شده"})]})]})]})})]})]})},Is=({targetUser:a})=>s.jsxs("div",{className:"flex flex-col w-full max-w-[800px] gap-1 py-2 pb-4 px-3 shadow-3xl rounded-[.6rem] bg-white",children:[s.jsx("div",{children:s.jsx("span",{children:"درباره"})}),s.jsx("div",{children:s.jsx("span",{children:a[0]&&a[0].firstName+" "+a[0].lastName})})]}),Cs=()=>{const n=x(t=>t.ui).alltargetUserPosts;return s.jsx("div",{className:"flex flex-col w-full max-w-[800px] h-fit bg-white",children:s.jsxs("div",{className:"flex flex-col gap-4 py-2 pb-4 px-3 shadow-3xl rounded-[.6rem]",children:[s.jsx("span",{children:"داغ ترین اپلود ها"}),s.jsx("div",{className:"grid grid-cols-2 gap-2 rounded-[.4rem] overflow-hidden",children:n?n.map(t=>{let l="";function _(){const g=new URL(Object.assign({"../../../../assets/avatar/1700021175455-Screenshot (3).png":w,"../../../../assets/avatar/1700021380995-laptopP1.png":S,"../../../../assets/avatar/1700022766143-Screenshot (1).png":N,"../../../../assets/avatar/1700026203021-laptopP1.png":P,"../../../../assets/avatar/1700026672914-Screenshot (3).png":y,"../../../../assets/avatar/1700026718463-Screenshot (5).png":F,"../../../../assets/avatar/1700026730172-Screenshot (4).png":U,"../../../../assets/avatar/1700026739207-Screenshot (6).png":A,"../../../../assets/avatar/1700026851107-Screenshot (4).png":T,"../../../../assets/avatar/1700026900991-Screenshot (5).png":$,"../../../../assets/avatar/1700027014952-Screenshot (6).png":E,"../../../../assets/avatar/1700027098382-Screenshot (5).png":I,"../../../../assets/avatar/1700027241065-Screenshot (3).png":C,"../../../../assets/avatar/1700027368448-Favion.png":L,"../../../../assets/avatar/1700027406405-laptopP1.png":M,"../../../../assets/avatar/1700027419360-Favivon.png":k,"../../../../assets/avatar/1700027464646-bodyForm.png":H,"../../../../assets/avatar/1700027554968-laptopP1.png":R,"../../../../assets/avatar/1700027691969-Screenshot (3).png":z,"../../../../assets/avatar/1700027773846-Favion.png":B,"../../../../assets/avatar/1700027884185-Screenshot (5).png":D,"../../../../assets/avatar/1700027930931-laptopP1.png":O,"../../../../assets/avatar/1700027974019-Screenshot (6).png":q,"../../../../assets/avatar/1700027994400-Screenshot (5).png":W,"../../../../assets/avatar/1700028071397-laptopP1.png":G,"../../../../assets/avatar/1700028097989-bodySign.png":J,"../../../../assets/avatar/1700028183435-Screenshot (5).png":K,"../../../../assets/avatar/1700028191265-Screenshot (3).png":Q,"../../../../assets/avatar/1700028279413-Favion.png":V,"../../../../assets/avatar/1700028317628-Screenshot (3).png":X,"../../../../assets/avatar/1700028419543-laptopP1.png":Y,"../../../../assets/avatar/1700028513423-Screenshot (6).png":Z,"../../../../assets/avatar/1700028652992-Favivon.png":ss,"../../../../assets/avatar/1700028867853-laptopP1.png":as,"../../../../assets/avatar/1700028960535-Screenshot (5).png":es,"../../../../assets/avatar/1700028975192-perresume.png":ts,"../../../../assets/avatar/1700029004313-Screenshot (20).png":ls,"../../../../assets/avatar/1700029375605-laptopP1.png":rs,"../../../../assets/avatar/1700029411873-Screenshot (6).png":ns,"../../../../assets/avatar/1700029865432-laptopP1.png":os,"../../../../assets/avatar/1700040216132-Screenshot (76).png":is,"../../../../assets/avatar/1700040248940-Screenshot (36).png":cs,"../../../../assets/avatar/1700283463526-Screenshot (46).png":ps,"../../../../assets/avatar/1700283571206-bodyCard.png":gs})[`../../../../assets/avatar/${t&&t.media}`],import.meta.url).href,d=g.split("/").length,r=g.split("/")[d-1];r!=="undefined"&&(l=g),r=="undefined"&&(l=null)}return _(),s.jsx("img",{src:l,alt:""})}):s.jsx("div",{})}),s.jsx("button",{className:"h-10 w-full bg-bg-hover rounded-[.4rem]",children:"مشاهده همه"})]})})},Ls=({targetUser:a})=>s.jsxs("div",{className:"lg:sticky lg:top-20 flex flex-col justify-between items-center w-full h-fit px-3 md:gap-6 gap-4",children:[s.jsx(Is,{targetUser:a}),s.jsx(Cs,{targetUser:a})]}),Ms=({targetUser:a})=>{const t=x(l=>l.ui).alltargetUserPosts;return s.jsx("div",{className:"flex flex-col w-full md:gap-6 gap-4",children:t[0]?t.map(l=>s.jsx(Us,{post:l,targetUser:a[0]})):s.jsx("div",{className:"flex justify-center w-full",children:s.jsx("div",{className:"flex justify-center py-2 pb-4 px-3 w-full shadow-3xl rounded-[.6rem] max-w-[800px] bg-white",children:"هیچ پستی وجود ندارد"})})})},ks=({targetUser:a})=>{const t=x(l=>l.ui).isMyProfile;return s.jsxs("div",{className:"flex flex-col justify-between w-full h-full px-3 md:gap-6 gap-4",children:[t&&s.jsx(As,{}),s.jsx("div",{className:"flex flex-col w-full gap-4 pb-6",children:s.jsx(Ms,{targetUser:a})})]})},Hs=({targetUser:a})=>s.jsxs("div",{className:"flex flex-col justify-center items-center gap-6 w-full",children:[s.jsx(Es,{targetUser:a}),s.jsxs("div",{className:"flex justify-center md:items-start items-center lg:flex-row flex-col-reverse w-full lg:gap-0 md:gap-6 gap-4 lg:pt-2 pt-0 lg:px-6 md:px-2 px-0",children:[s.jsx(ks,{targetUser:a}),s.jsx(Ls,{targetUser:a})]})]}),Rs=()=>{const[a,n]=p.useState(""),t=bs(),_=window.location.href.split("/"),g=_[_.length-1];return p.useEffect(()=>{async function d(){const r=await js(`https://saeedwebdev.ir/api/users/${g}`);r&&(n(r),t(ws(r)))}d()},[g]),p.useEffect(()=>{async function d(){if(a[0]){const r=await Ss(`https://saeedwebdev.ir/api/posts/${a[0].id}`);r&&t(Ns(r))}}d()},[a]),s.jsxs("section",{className:"flex flex-col justify-start items-center w-full overflow-y-scroll md:pb-4 pb-16 max-h-screen h-full",children:[s.jsx($s,{targetUser:a}),s.jsx(Hs,{targetUser:a})]})},Gs=Ps(Rs);export{Gs as default};
