import{r as a,j as e,q as H,u as K,t as j,v as Q,w as T}from"./index-kJGUf367.js";const V=({setShowSignUp:c})=>{const[r,d]=a.useState(!1),u=a.useRef(),w=m=>{m.preventDefault();const x=u.current.email.value,p=u.current.password.value,y="https://saeedwebdev.ir/api/auth/login";if((x==""||p=="")&&d(!0),x!==""&&p!==""){async function v(){const g=await H(y,x,p);g&&(localStorage.setItem("token",g.token),localStorage.setItem("user",JSON.stringify([g.user])),d(!1),location.reload()),g||d(!0)}v()}};return e.jsxs("div",{className:"flex flex-col gap-3 w-full bg-white shadow-3xl py-4 md:px-4 px-3 rounded-[.5rem] z-10 max-w-[392px]",children:[e.jsxs("form",{onSubmit:m=>w(m),ref:u,className:"flex flex-col gap-3 w-full [&>input]:bg-bg-hover [&>input]:h-[52px] [&>input]:w-full [&>input]:max-w-[368px] [&>input]:px-3 [&>input]:pb-1",children:[e.jsx("input",{type:"name",id:"email",name:"email",placeholder:"ایمیل"}),e.jsx("input",{id:"password",name:"password",type:"password",placeholder:"رمز عبور"}),r&&e.jsx("span",{className:"text-text-error -my-2 text-[.95rem]",children:"ایمیل یا رمز عبور صحیح نیست"}),e.jsx("div",{className:"flex flex-col items-center justify-between w-full pt-2 gap-3",children:e.jsx("input",{type:"submit",value:"ورود",className:"bg-blue-600 w-full h-12 pb-1 text-white rounded-[.3rem] cursor-pointer"})})]}),e.jsxs("div",{className:"flex flex-col items-center justify-between pt-2 gap-3",children:[e.jsx("button",{className:"w-full h-10 text-[.8rem] text-blue-800 pb-1 border-b-2",children:"رمز عبور را فراموش کرده ام"}),e.jsx("button",{onClick:()=>c(!0),to:"/signup",className:"bg-green-500 hover:bg-green-600 w-[200px] h-12 text-white rounded-[.3rem] md:mt-4 mt-2",children:"تبت نام"})]})]})},X=({setShowSignUp:c})=>{const r=a.useRef();K();const[d,u]=a.useState(!1),[w,m]=a.useState(!1),[x,p]=a.useState(!1),[y,v]=a.useState(!1),[g,k]=a.useState(!1),[F,M]=a.useState(!1),[P,B]=a.useState(!1),[$,E]=a.useState(!1),[O,R]=a.useState(!1),[U,A]=a.useState(""),[_,I]=a.useState(""),t=(s,z)=>{s.preventDefault();const o=s.target.name,S=r.current.firstName.value,C=r.current.lastName.value,n=r.current.email.value,f=r.current.username.value,J=r.current.days.value,q=r.current.mounths.value,N=r.current.years.value,h=r.current.gender.value,i=r.current.password.value,b=r.current.confirmPassword.value,G="https://saeedwebdev.ir/api/auth/signup";if(z=="submit"&&(i==b&&R(!1),i!==b&&R(!0),S==""&&u(!0),C==""&&m(!0),(n.length<3||n.length>25||!n.includes("@"))&&p(!0),(f.length<3||f.length>15)&&v(!0),(i.length<8||i.length>18)&&B(!0),b==""&&E(!0),(h==""||h=="off")&&M(!0),N>=1384&&k(!0),i==b&&!d&&!w&&!x&&!P&&(h=="male"||h=="female")&&N<1384)){async function W(){const l=await T(G,S,C,n,f,J,q,N,h,i);l&&(l.ru!==""&&l.re!==""&&(A(l.ru),I(l.re)),l.ru!==""&&A(l.ru),l.re!==""&&I(l.re),l.user&&l.token&&(localStorage.setItem("token",l.token),localStorage.setItem("user",JSON.stringify([l.user])),location.reload()))}W()}o=="firstName"&&(S==""&&u(!0),S!==""&&u(!1)),o=="lastName"&&(C==""&&m(!0),C!==""&&m(!1)),o=="email"&&((n.length<=10||n.length>=25||!n.includes("@"))&&p(!0),n.length>=10&&n.length<=25&&n.includes("@")&&p(!1)),o=="username"&&((f.length<=3||f.length>=15)&&v(!0),f.length>=3&&f.length<=15&&v(!1)),o=="password"&&((i.length<=8||i.length>=18)&&B(!0),i.length>=8&&i.length<=18&&B(!1)),o=="confirmPassword"&&(b==""&&E(!0),b!==""&&E(!1)),o=="gender"&&(h=="off"&&M(!0),h=="on"&&M(!1)),o=="years"&&(N>=1384&&k(!0),N<1384&&k(!1))},L=[];for(let s=1;s<=31;s++)L.push(s);const D=[];for(let s=1402;s>=1302;s--)D.push(s);return e.jsxs("form",{onSubmit:s=>t(s,"submit"),ref:r,className:"flex flex-col bg-white md:gap-4 gap-3 [&>div]:relative [&>div]:flex [&>div]:items-center [&>div>input]:bg-bg-hover [&>div>input]:h-10 [&>div>input]:w-full [&>div>input]:px-2 [&>div>input]:pb-1 [&>div>i]:absolute [&>div>i]:left-2 [&>div>i]:text-text-error [&>div>i]:text-[1.3rem] [&>div>i]:cursor-pointer [&>div>div>i]:cursor-pointer shadow-3xl p-4 pt-2 w-[400px] rounded-[.5rem]",children:[e.jsxs("div",{className:"flex justify-between w-full",children:[e.jsx("h1",{className:"text-2xl pb-1",children:"تبت نام"}),e.jsxs("button",{onClick:()=>c(!1),className:"relative flex items-center justify-center font-normal w-10 h-10 rounded-full hover:bg-bg-hover",children:[e.jsx("i",{className:"absolute w-[.1rem] h-5 rotate-45 bg-black"}),e.jsx("i",{className:"absolute w-5 h-[.1rem] rotate-45 bg-black"})]})]}),e.jsxs("div",{className:"flex items-center w-full gap-2 [&>div]:relative [&>div]:flex [&>div]:items-center [&>div>input]:bg-bg-hover [&>div>input]:h-10 [&>div>input]:w-full [&>div>input]:px-2 [&>div>input]:pb-1 [&>div>i]:absolute [&>div>i]:left-2 [&>div>i]:text-text-error [&>div>i]:text-[1.3rem]",children:[e.jsxs("div",{children:[e.jsx("input",{onBlur:s=>t(s),onChange:s=>t(s),className:`${d?"border-text-error border-[1px]":""}`,type:"name",id:"firstName",name:"firstName",placeholder:"نام"}),d&&e.jsxs("i",{className:"group",children:[e.jsx(j,{}),e.jsx("span",{className:"group-hover:flex hidden absolute -left-1 -top-6 min-w-max bg-red-600 text-white rounded-full px-2 py-[.1rem] text-[.9rem]",children:"باید پر شود"})]})]}),e.jsxs("div",{children:[e.jsx("input",{onBlur:s=>t(s),onChange:s=>t(s),className:`${w?"border-text-error border-[1px]":""}`,type:"name",id:"lastName",name:"lastName",placeholder:"نام خوانوادگی"}),w&&e.jsxs("i",{className:"group",children:[e.jsx(j,{}),e.jsx("span",{className:"group-hover:flex hidden absolute -left-1 -top-6 min-w-max bg-red-600 text-white rounded-full px-2 py-[.1rem] text-[.9rem]",children:"باید پر شود"})]})]})]}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("input",{onBlur:s=>t(s),onChange:s=>t(s),className:`${x?"border-text-error border-[1px]":""}`,type:"email",id:"email",name:"email",placeholder:"ایمیل"}),x&&e.jsxs("i",{className:"group",children:[e.jsx(j,{}),e.jsx("span",{className:"group-hover:flex hidden absolute -left-1 -top-6 min-w-max bg-red-600 text-white rounded-full px-2 py-[.1rem] text-[.9rem]",children:"باید شامل @ و بیش از 10 حرف باشد"})]}),_&&e.jsx("span",{className:"flex w-full text-red-600 text-[.9rem]",children:"ایمیل تکراری است"})]}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("input",{onBlur:s=>t(s),onChange:s=>t(s),className:`${y?"border-text-error border-[1px]":""}`,type:"username",id:"username",name:"username",placeholder:"نام کاربری"}),y&&e.jsxs("i",{className:"group",children:[e.jsx(j,{}),e.jsx("span",{className:"group-hover:flex hidden absolute -left-1 -top-6 min-w-max bg-red-600 text-white rounded-full px-2 py-[.1rem] text-[.9rem]",children:"باید بین 3 تا 15 حرف باشد"})]}),U&&e.jsx("span",{className:"flex w-full text-red-600 text-[.9rem]",children:"نام کاربری تکراری است"})]}),e.jsxs("span",{className:"relative -my-2 -mb-3",children:[e.jsx("span",{className:"text-[.9rem]",children:"تاریخ تولد"}),g&&e.jsx("span",{className:"absolute top-1 pr-1 text-text-error -my-2 text-[1.5rem]",children:"*"})]}),e.jsxs("div",{className:"flex w-full md:gap-2 gap-1 [&>select]:h-10 [&>select]:w-full [&>select]:px-2 [&>select]:border-2 [&>select]:bg-white [&>select]:appearance-none [&>select]:bg-arrow [&>select]:bg-no-repeat [&>select]:bg-[length:12px_12px] [&>select]:bg-[center_left_.5rem]",children:[e.jsx("select",{onChange:s=>t(s),name:"days",id:"days",children:L.map(s=>e.jsx("option",{value:s,children:s}))}),e.jsx("select",{onChange:s=>t(s),name:"mounths",id:"mounths",children:Q.map(s=>e.jsx("option",{value:s,children:s}))}),e.jsx("select",{onChange:s=>t(s),name:"years",id:"years",children:D.map(s=>e.jsx("option",{value:s,children:s}))})]}),e.jsxs("span",{className:"relative -my-2 -mb-3",children:[e.jsx("span",{className:"text-[.9rem]",children:"جنسیت"}),F&&e.jsx("span",{className:"absolute top-1 pr-1 text-text-error -my-2 text-[1.5rem]",children:"*"})]}),e.jsxs("div",{className:"flex items-center w-full md:gap-2 gap-1 [&>span]:flex [&>span]:items-center [&>span]:justify-between [&>span>label]:w-full [&>span]:h-10 [&>span]:w-full [&>span]:px-4 [&>span]:border-2 [&>span]:border-bg-theme-darker [&>span]:bg-white",children:[e.jsxs("span",{children:[e.jsx("label",{htmlFor:"female",children:"زن"}),e.jsx("input",{onChange:s=>t(s),type:"radio",id:"female",name:"gender",value:"female"})]}),e.jsxs("span",{children:[e.jsx("label",{htmlFor:"male",children:"مرد"}),e.jsx("input",{onChange:s=>t(s),type:"radio",id:"male",name:"gender",value:"male"})]})]}),e.jsxs("div",{children:[e.jsx("input",{onBlur:s=>t(s),onChange:s=>t(s),className:`${P?"border-text-error border-[1px]":""}`,id:"password",name:"password",type:"password",placeholder:"رمز عبور"}),P&&e.jsxs("i",{className:"group",children:[e.jsx(j,{}),e.jsx("span",{className:"group-hover:flex hidden absolute -left-1 -top-6 min-w-max bg-red-600 text-white rounded-full px-2 py-[.1rem] text-[.9rem]",children:"باید بین 8 تا 18 حرف باشد"})]})]}),e.jsxs("div",{children:[e.jsx("input",{onBlur:s=>t(s),onChange:s=>t(s),className:`${$?"border-text-error border-[1px]":""}`,id:"confirmPassword",name:"confirmPassword",type:"password",placeholder:"تکرار رمز عبور"}),$&&e.jsxs("i",{className:"group",children:[e.jsx(j,{}),e.jsx("span",{className:"group-hover:flex hidden absolute -left-1 -top-6 min-w-max bg-red-600 text-white rounded-full px-2 py-[.1rem] text-[.9rem]",children:"رمز عبور باید تکرار شود"})]})]}),O&&e.jsx("span",{className:"text-text-error -my-2 text-[.95rem]",children:"رمز تکرار شده صحیح نیست"}),e.jsx("span",{className:"flex justify-center w-full",children:e.jsx("input",{type:"submit",value:"تبت نام",className:"bg-green-500 hover:bg-green-600 w-[200px] h-10 text-white rounded-[.3rem] md:mt-4 mt-2 cursor-pointer"})})]})},Y=({setShowSignUp:c})=>e.jsx("section",{className:"fixed right-0 flex justify-center items-center h-screen w-screen md:px-4 px-2 bg-gray-50/75 z-30",children:e.jsx(X,{setShowSignUp:c})}),ee=()=>{const[c,r]=a.useState("");return e.jsxs("section",{className:"relative flex flex-col justify-center items-center h-screen w-screen md:px-4 px-2",children:[e.jsxs("div",{className:"absolute top-0 flex flex-col justify-center m-10 mt-[10vh]",children:[e.jsx("h1",{className:"text-blue-700 md:text-3xl text-2xl min-w-max",children:"SMA - Social Media App"}),e.jsx("p",{className:"flex justify-center w-full text-2xl mt-3",children:"Welcome to SMA"})]}),e.jsx(V,{setShowSignUp:r}),c&&e.jsx(Y,{setShowSignUp:r})]})};export{ee as default};
