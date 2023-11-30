import{U as Q,r as d,u as S,i as y,j as e,D as A,V as T,W as V,X as $,J,Y as B,g as F,Z as W,_ as X,$ as Y,a0 as M,t as Z,a1 as K,L as U,a2 as ee,a3 as te,a4 as se,a5 as le,a6 as ae,a7 as ie,a8 as ne,a9 as re,aa as ce,ab as de}from"./index-ZnidFIX4.js";import{l as G,v as _,G as oe}from"./index.esm-6gbWGAvM.js";import{b as me}from"./index.esm-RprHkUz5.js";function xe(t){return Q({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#E65100",d:"M41,42H13c-2.2,0-4-1.8-4-4V18c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v20C45,40.2,43.2,42,41,42z"}},{tag:"path",attr:{fill:"#F57C00",d:"M35,36H7c-2.2,0-4-1.8-4-4V12c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v20C39,34.2,37.2,36,35,36z"}},{tag:"circle",attr:{fill:"#FFF9C4",cx:"30",cy:"16",r:"3"}},{tag:"polygon",attr:{fill:"#942A09",points:"17,17.9 8,31 26,31"}},{tag:"polygon",attr:{fill:"#BF360C",points:"28,23.5 22,31 34,31"}}]})(t)}const Fe=()=>{const[t,s]=d.useState(""),[a,r]=d.useState(!1),l=S(),o=d.useRef(),c=y(n=>n.ui).loginUser,i=n=>{n.preventDefault(),r(!0);const m="https://saeedwebdev.ir/i",j=c[0].id,u=o.current.text.value,w=0,g=new FormData;g.append("image",t);const v=_();l($([{post:"empty",text:u,media:"",loading:!0,id:v}]));const N="https://saeedwebdev.ir/api/posts";async function L(){if(t){const k=await J(m,g);if(k){const x=k&&await B(N,j,u,k,w);x&&(l($([{post:x,loading:!1,id:v}])),r(!1))}}if(!t){const x=await B(N,j,u,"",w);x&&(l($([{post:x,loading:!1,id:v}])),r(!1))}}L()};return e.jsx("form",{enctype:"multipart/form-data",onSubmit:n=>i(n),ref:o,className:"flex justify-center w-full",children:e.jsxs("div",{className:"flex flex-col items-center justify-center w-full shadow-3xl rounded-[.6rem] max-w-[800px] bg-white",children:[e.jsxs("div",{className:"flex w-full md:p-4 px-[5%] py-2 md:gap-2 gap-1",children:[e.jsx("label",{htmlFor:"text",className:"md:max-w-[50px] max-w-[40px] md:h-[50px] h-[40px] bg-white rounded-full",children:e.jsx("img",{src:c[0].avatar?`https://saeedwebdev.ir/avatar/${c[0].avatar}`:A,className:"md:max-w-[50px] max-w-[40px] md:h-[50px] h-[40px] object-cover rounded-full"})}),e.jsx("input",{type:"text",name:"text",id:"text",placeholder:"به چه چیری فکر میکنید ؟",className:"w-full pr-2 md:text-[1rem] text-[.9rem]"})]}),e.jsx("div",{className:"flex items-center justify-center w-full md:px-10 px-[5%]",children:e.jsxs("div",{className:"flex items-center justify-between w-full border-t-[2px] py-4 ",children:[e.jsxs("div",{className:"flex w-full md:gap-5 gap-2 [&>div>label]:flex [&>div>label]:gap-1 [&>div>input]:hidden [&>div>label>span]:flex [&>div>label>span]:items-center md:[&>div>label>span]:text-[1.1rem] [&>div>label>span]:text-clamp1 [&>div>label>span]:text-orange-600",children:[e.jsxs("div",{className:"flex items-center gap-2 font-semibold cursor-pointer",children:[e.jsxs("label",{htmlFor:"image",children:[e.jsx("span",{children:e.jsx(xe,{})}),e.jsx("span",{children:"فیلم و عکس"})]}),e.jsx("input",{onChange:n=>s(n.target.files[0]),type:"file",name:"image",id:"image",accept:".jpg, .jpeg, .png"})]}),e.jsxs("div",{className:"flex items-center gap-2 font-semibold",children:[e.jsxs("label",{htmlFor:"location",children:[e.jsx("span",{children:e.jsx(T,{})}),e.jsx("span",{children:"مکان"})]}),e.jsx("input",{type:"location",name:"location",id:"location"})]}),e.jsxs("div",{className:"flex items-center gap-2 font-semibold",children:[e.jsxs("label",{children:[e.jsx("span",{children:e.jsx(V,{})}),e.jsx("span",{children:"تگها"})]}),e.jsx("input",{type:"file",name:"image",id:"image"})]})]}),e.jsx("div",{className:"flex justify-end w-[30%]",children:e.jsxs("div",{className:"flex items-center bg-green-500 hover:bg-green-600 rounded-[.4rem] text-white font-semibold",children:[a&&e.jsx("span",{className:"md:pr-4 pr-[.7rem]",children:e.jsx(G,{})}),e.jsx("input",{type:"submit",name:"submit",value:"اشتراک",className:"cursor-pointer md:py-2 py-[.4rem] md:px-4 px-[.7rem] md:text-[1rem] text-[.9rem]"})]})})]})})]})})},P=t=>F.get(t).then(({data:s})=>s).catch(s=>{console.log(s)}),ue=(t,s,a)=>F.post(t,{post_id:s,user_id:a}).then(({data:r})=>r).catch(r=>{console.log(r)}),fe=t=>F.delete(t).then(({data:s})=>(console.log(s),s)).catch(s=>{console.log(s)}),D=t=>F.get(t).then(({data:s})=>s).catch(s=>{console.log(s)}),he=(t,s,a,r)=>F.post(t,{text:s,post_id:a,user_id:r}).then(({data:l})=>(console.log("data"),console.log(l),l)).catch(l=>{console.log(l)}),pe=({comment:t,loginUser:s})=>{const l=y(o=>o.ui).allLoginUsers.find(o=>o.id==t.user_id);return e.jsx(e.Fragment,{children:l?e.jsxs("div",{className:`flex ${t.user_id==s[0].id?"justify-end":"justify-start gap-2"} min-w-max `,children:[t.user_id!==s[0].id?e.jsx("div",{className:"w-[40px] h-[40px] ",children:e.jsx("img",{src:l.avatar?`https://saeedwebdev.ir/avatar/${l.avatar}`:A,alt:"",className:"object-cover h-full w-full rounded-full"})}):e.jsx(e.Fragment,{}),e.jsxs("span",{className:`relative max-w-[22rem] px-3 py-2 rounded-[1.5rem] break-words ${t.user_id==s[0].id?"bg-blue-700 text-left text-white":"bg-gray-300"} overflow-visible`,children:[t.user_id==s[0].id&&e.jsx("span",{className:"absolute left-0 -top-4 text-black text-[.7rem] min-w-max",children:s[0]&&s[0].firstName+" "+s[0].lastName}),t.user_id!==s[0].id&&e.jsx("span",{className:"absolute right-3 -top-4 text-black text-[.7rem] min-w-max",children:l&&l.firstName+" "+l.lastName}),t.text]})]}):e.jsxs("div",{className:`flex justify-end items-center ${t.loading?"opacity-60":""}`,children:[t.loading&&e.jsx(G,{color:"black"}),e.jsxs("span",{className:"relative max-w-[22rem] px-3 py-2 rounded-[1.5rem] break-words bg-blue-700 text-left text-white",children:[e.jsx("span",{className:"absolute left-0 -top-4 text-black text-[.7rem] min-w-max",children:s[0]&&s[0].firstName+" "+s[0].lastName}),t.text]})]})})},je=({post:t})=>{const s=d.useRef(),[a,r]=d.useState(""),l=S(),p=y(i=>i.ui).loginUser,c=i=>{i.preventDefault(),r("");const n=_(),m=s.current.text.value;l(M([{text:m,loading:!0,id:n}]));const j="https://saeedwebdev.ir/api/comments";async function u(){await he(j,m,t.id,p[0].id)&&l(M([{text:m,loading:!1,id:n}]))}u()};return e.jsxs("form",{onSubmit:i=>c(i),ref:s,className:"relative flex items-center justify-center border-[2px] w-full h-11 rounded-full",children:[e.jsx("input",{onChange:i=>r(i.target.value),value:a,type:"text",name:"text",placeholder:"پیام ...",className:"h-full w-full rounded-full px-12"}),a?e.jsxs("div",{className:"absolute right-3 text-[1.5rem] text-blue-600",children:[e.jsx("label",{htmlFor:"submit",children:e.jsx(W,{})}),e.jsx("input",{type:"submit",id:"submit",className:"hidden"})]}):e.jsx("i",{className:"absolute right-3 text-[1.5rem]",children:e.jsx(X,{})}),e.jsxs("div",{className:"absolute left-6 flex text-[1.5rem] gap-4",children:[e.jsx("i",{children:e.jsx(Y,{})}),e.jsx("i",{children:e.jsx(oe,{})})]})]})},be=({post:t,targetUser:s})=>{const[a,r]=d.useState([]),[l,o]=d.useState(!1),p=y(m=>m.ui),c=p.loginUser,i=p.allPostComments,n=S();return d.useEffect(()=>{o(!0);const m=`https://saeedwebdev.ir/api/comments/${t.id}`;async function j(){const u=await D(m);u&&(r(u),o(!1),n(K(u))),u||o(!1)}j()},[]),e.jsx("div",{className:"relative flex items-start w-full h-full px-4 ",children:e.jsxs("div",{className:"sticky top-0 flex flex-col items-start justify-between w-full h-full border-t-2",children:[e.jsx("div",{className:"flex flex-col w-full gap-3 pt-4",children:l?e.jsx(Z,{}):i[0]?i.map(m=>e.jsx(pe,{comment:m,loginUser:c,targetUser:s})):e.jsx("div",{className:"flex items-center justify-center font-medium",children:"هیچ نظری وجود ندارد"})}),e.jsx("div",{className:"sticky bottom-0 flex items-center justify-center w-full bg-bg-theme-body py-3",children:e.jsx(je,{post:t})})]})})},we=({post:t,handleSetComment:s,targetUser:a})=>e.jsx("div",{className:"fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-gray-400/25 md:py-4 pt-4 pb-16 lg:px-10 md:px-6 px-4 z-40 ",children:e.jsxs("div",{className:"flex flex-col w-full h-full max-h-[800px] max-w-[700px] overflow-y-scroll rounded-[.6rem] bg-bg-theme-body",children:[e.jsxs("header",{className:"sticky top-0 bg-white flex justify-center items-center w-full md:px-4 px-2 md:min-h-[70px] min-h-[50px] text-[1.3rem] gap-3 border-b-[1px] z-30",children:[e.jsx("span",{className:"md:text-[1.3rem] text-[1rem] ",children:a&&a.firstName+" "+a.lastName}),e.jsx("div",{className:"absolute left-4",children:e.jsxs("button",{onClick:s,className:"relative flex items-center justify-center font-normal w-10 h-10 md:scale-100 scale-75 bg-gray-300 rounded-full hover:bg-bg-hover",children:[e.jsx("i",{className:"absolute w-[.1rem] h-5 rotate-45 bg-black"}),e.jsx("i",{className:"absolute w-5 h-[.1rem] rotate-45 bg-black"})]})})]}),e.jsx("div",{children:e.jsx(Ne,{post:t,edition:"comment",handleSetCommentCall:s})}),e.jsx("div",{className:"h-full bg-bg-theme-body",children:e.jsx(be,{post:t,targetUser:a})})]})}),ge=()=>{},ve=({handleNotIntrest:t})=>e.jsx("div",{className:"fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-gray-700/50 z-50",children:e.jsxs("div",{className:"flex flex-col items-center justify-between w-[20rem] border-t-2 border-x-2 bg-white rounded-[1rem] [&>*:last-child]:rounded-b-[1rem] [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:w-full [&>*]:p-2 [&>*]:h-[48px] [&>*]:border-b-2 [&>*]:cursor-pointer",children:[e.jsx("button",{children:"Report"}),e.jsx("button",{children:"Add favorites"}),e.jsx("button",{children:"Go to posts"}),e.jsx("button",{children:"About this acount"}),e.jsx("button",{onClick:t,children:"Cancel"})]})}),Ne=({post:t,isLoading:s,edition:a,handleSetCommentCall:r,targetUser:l})=>{const[o,p]=d.useState(!1),[c,i]=d.useState(!1),[n,m]=d.useState(!1),[j,u]=d.useState(""),[w,g]=d.useState(null),[v,N]=d.useState(null),L=S(),x=y(f=>f.ui).loginUser;d.useEffect(()=>{async function f(){const b=`https://saeedwebdev.ir/api/likes/${x[0]&&x[0].id}=${t.id}`,h=x[0]&&await P(b);h&&(N(h.isMyLike),g(h.quantity))}f()},[x[0]]),d.useEffect(()=>{async function f(){const b=`https://saeedwebdev.ir/api/comments/q/${t.id}`,h=await D(b);h&&u(h),h==0&&u(0)}f()},[t]);const E=()=>{async function f(){await ie(`https://saeedwebdev.ir/api/posts/${t.id}`)&&L(ne(t))}l&&x[0]&&l.id==x[0].id?f():p(!o)},I=()=>{const f="https://saeedwebdev.ir/api/likes",b=`https://saeedwebdev.ir/api/likes/${x[0].id}=${t.id}`;async function h(){if(await ue(f,t.id,x[0].id)){const C=await P(b);N(C.isMyLike),g(C.quantity)}}h()},R=()=>{const f=`https://saeedwebdev.ir/api/likes/${x[0].id}=${t.id}`,b=`https://saeedwebdev.ir/api/likes/${x[0].id}=${t.id}`;async function h(){if(await fe(f)){const C=await P(b);N(C.isMyLike),g(C.quantity)}}h()},z=()=>{m(!0)},q=()=>{m(!1)},H=()=>{p(!1)};return e.jsxs("div",{className:`relative flex justify-center w-full ${s=="empty"?"opacity-60":""}`,children:[e.jsxs("div",{className:`flex flex-col  w-full ${a?"":"md:rounded-[.6rem] rounded-[.3rem] shadow-3xl"} max-w-[800px] bg-white`,children:[a!=="comment"&&e.jsxs("header",{className:"flex justify-between md:pt-3 pt-2 md:px-4 px-2 h-[48px] md:mb-3 mb-1 gap-3",children:[e.jsxs(U,{to:`/sma/profile/${l&&l.id}`,className:"flex w-full md:gap-3 gap-2 cursor-pointer",children:[e.jsx("div",{className:"w-10 h-10 min-w-[40px]",children:e.jsx("img",{src:l.avatar?`https://saeedwebdev.ir/avatar/${l.avatar}`:A,alt:"profile picture",className:"object-cover h-full w-full rounded-full "})}),e.jsxs("div",{className:"relative h-9 w-full md:mt-0 mt-1 md:text-[1rem] text-[.9rem]",children:[e.jsx("span",{className:"absolute flex h-4 -top-1",children:l&&l.firstName+" "+l.lastName}),e.jsx("div",{className:"absolute flex h-4 top-5 gap-1",children:e.jsxs("small",{children:["@",l&&l.username]})})]})]}),e.jsxs("div",{className:"flex",children:[e.jsx("button",{className:"flex items-center justify-center md:text-2xl text-[1.7rem] min-w-[40px] min-h-[40px] rounded-full hover:bg-bg-hover",children:e.jsx(ee,{})}),e.jsxs("button",{onClick:E,className:"relative flex items-center justify-center font-normal min-w-[40px] min-h-[40px] rounded-full hover:bg-bg-hover",children:[e.jsx("i",{className:"absolute w-[.1rem] md:h-5 h-5 rotate-45 bg-black"}),e.jsx("i",{className:"absolute md:w-5 w-5 h-[.1rem] rotate-45 bg-black"})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-3 max-h-min",children:[e.jsx("div",{className:"md:px-4 px-2 md:text-[1rem] text-[.9rem]",children:e.jsx("p",{children:t.text})}),e.jsx("div",{className:"flex justify-center w-full",children:e.jsx("img",{src:`https://saeedwebdev.ir/avatar/${t.media}`,alt:""})})]}),e.jsxs("footer",{className:"flex flex-col md:px-4 px-2",children:[e.jsxs("div",{className:"flex items-center justify-between w-full py-2 border-b-[2px]",children:[e.jsxs("div",{className:"flex gap-1 h-[24px] md:mt-0 mt-1 md:text-[1rem] text-[.9rem]",children:[e.jsx("span",{children:"نظرات"}),e.jsx("span",{children:j&&j})]}),e.jsxs("button",{onClick:v&&v==1?R:I,className:"relative flex h-[24px]",children:[e.jsx("span",{className:"md:pl-12 pl-11",children:w&&w}),e.jsx("i",{className:"absolute left-5 md:top-0 top-[.1rem] flex items-center justify-center md:text-[.8rem] text-[.7rem] bg-red-400 [&>*]:text-white p-1 rounded-full border-2 border-white",children:e.jsx(te,{})}),e.jsx("i",{className:"absolute left-0 md:top-0 top-[.1rem] flex items-center justify-center md:text-[.8rem] text-[.7rem] bg-blue-400 text-white p-1 rounded-full border-2 border-white",children:e.jsx(se,{})})]})]}),e.jsxs("div",{className:"flex items-center justify-between w-full md:min-h-[44px] min-h-[34px] py-[.25rem]",children:[e.jsxs("button",{className:"flex items-center justify-center w-full h-full md:gap-2 gap-1 hover:bg-bg-hover rounded-[.3rem]",children:[e.jsx("i",{className:"md:text-2xl",children:e.jsx(le,{})}),e.jsx("span",{className:"md:text-[1rem] text-[.8rem]",children:"دوست داشتن"})]}),e.jsxs("button",{onClick:a!=="comment"?z:r,className:"flex items-center justify-center w-full h-full md:gap-2 gap-1 hover:bg-bg-hover rounded-[.3rem]",children:[e.jsx("i",{className:"md:text-2xl",children:e.jsx(me,{})}),e.jsx("span",{className:"md:text-[1rem] text-[.8rem]",children:"نظرات"})]}),e.jsxs("button",{onClick:()=>i(!c),className:"relative flex items-center justify-center w-full h-full md:gap-2 gap-1 hover:bg-bg-hover rounded-[.3rem]",children:[e.jsx("i",{className:"md:text-2xl",children:e.jsx(ae,{})}),e.jsx("span",{className:"md:text-[1rem] text-[.8rem]",children:"ارسال"}),c&&e.jsx(ge,{})]})]})]})]}),o&&e.jsx(ve,{handleNotIntrest:H}),n&&l&&a!=="comment"&&e.jsx(we,{post:t,handleSetComment:q,targetUser:l})]},t.id)},Se=()=>e.jsx("div",{className:"flex justify-center md:py-2 py-1 md:pb-3 pb-2 px-3 w-full shadow-3xl rounded-[.6rem] max-w-[800px] bg-white",children:"هیچ پستی وجود ندارد"}),Le=({targetUser:t})=>{const[s,a]=d.useState("دنبال کردن"),l=y(c=>c.ui).loginUser;d.useEffect(()=>{const c=t[0]&&l[0]&&`https://saeedwebdev.ir/api/friends/f/${l[0].id}=${t[0].id}`;async function i(){const n=t[0]&&l[0]&&await re(c);n[0]&&n[0].friend_id==t[0].id&&a("دنبال شده")}i()},[]);const o=()=>{const c="https://saeedwebdev.ir/api/friends",i=l[0]&&l[0].id,n=t[0]&&t[0].id;async function m(){(await ce(c,i,n))[0]&&a("دنبال شده")}m()},p=()=>{const c=`https://saeedwebdev.ir/api/friends/${t[0]&&t[0].id}`;async function i(){await de(c)&&a("دنبال کردن")}i()};return e.jsx("button",{onClick:s=="دنبال کردن"?o:p,className:"flex items-center justify-center min-w-max font-medium md:px-2 px-[.4rem] pt-1 pb-2 md:text-[.8rem] text-[.8rem] rounded-[.4rem] cursor-pointer bg-green-500 hover:bg-green-600 text-white",children:s})};export{Le as F,Se as N,Fe as P,Ne as a};