import{j as e,r as s}from"./index-dDx1fjhJ.js";import{S as p}from"./loading-j_I727pp.js";import{H as f}from"./hoc-lL1oqUvY.js";const h=({text:a})=>e.jsxs(e.Fragment,{children:[a&&e.jsx("div",{className:"AlertContainer",children:e.jsxs("div",{className:"AlertOKcontainer",children:[e.jsxs("div",{children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),ui.language=="persian"?e.jsx("p",{children:" عملیات با موفقیت انجام شد"}):e.jsx("p",{children:"process done successfuly"})]})}),!a&&e.jsx("div",{className:"AlertContainer",children:e.jsxs("div",{className:"AlertFailedcontainer",children:[e.jsxs("div",{children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),ui.language=="persian"?e.jsx("p",{children:" عملیات انجام نشد"}):e.jsx("p",{children:"process failed"})]})})]}),j=({homeedition:a})=>{const[l,m]=s.useState(""),[x,v]=s.useState(""),d=s.useRef(),[o,n]=s.useState(!1),[u,c]=s.useState(!1),[g,i]=s.useState(!1);s.useEffect(()=>{setTimeout(()=>{m("")},2500)},[l]);const r=t=>{t.target.name=="message"&&t.target.value.length<9?i(!0):t.target.name=="user_email"&&!t.target.value.includes("@")&&t.target.value.length<3?c(!0):t.target.name=="user_name"&&t.target.value.length<3&&n(!0),t.target.name=="message"&&t.target.value.length>=9?i(!1):t.target.name=="user_email"&&t.target.value.includes("@")&&t.target.value.length>=3?c(!1):t.target.name=="user_name"&&t.target.value.length>=3&&n(!1)};return e.jsx("section",{className:"flex md:items-center justify-center w-screen min-h-screen h-full lg:pt-44 md:pt-40 pt-36",children:e.jsxs("div",{className:"flex flex-col items-center justify-center w-full lg:gap-10 md:gap-8 gap-6",children:[e.jsxs("div",{className:"flex flex-col items-start justify-center w-full max-w-[750px] -mt-20 gap-2",children:[e.jsx("span",{className:"lg:text-5xl md:text-4xl text-3xl font-[600]",children:"contact me ."}),e.jsx("span",{className:"lg:text-2xl md:text-[1.4rem] text-[1.3rem]",children:"send me a massage"})]}),e.jsxs("form",{homeedition:a,ref:d,className:"flex flex-col w-full max-w-[750px] gap-10 [&_textarea]:bg-g_Background_Shaded [&_input]:bg-g_Background_Shaded ",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col w-full gap-2",children:[e.jsx("label",{htmlFor:"name",className:"lg:text-2xl md:text-[1.4rem] text-[1.3rem]",children:"Name"}),e.jsx("input",{onChange:t=>r(t),className:"h-12 w-full pl-4",id:"name",type:"text",name:"user_name",pattern:"^[A-Za-z0-9]{3,12}$",required:!0}),o&&e.jsx("p",{children:"must contain 3-12 characters"})]}),e.jsxs("div",{className:"flex flex-col w-full gap-2",children:[e.jsx("label",{htmlFor:"email",className:"lg:text-2xl md:text-[1.4rem] text-[1.3rem]",children:"Email"}),e.jsx("input",{onChange:t=>r(t),className:"h-12 w-full pl-4",id:"email",type:"email",name:"user_email",required:!0}),u&&e.jsx("p",{children:"not valid email"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"text",className:"lg:text-2xl md:text-[1.4rem] text-[1.3rem]",children:"Message"}),e.jsx("textarea",{onChange:t=>r(t),className:"h-32 w-full pl-4 md:pt-2",id:"text",type:"text",name:"message",pattern:"^[A-Za-z0-9]{9,212}$",required:!0}),g&&e.jsx("p",{children:"must contain 9-212 characters"})]}),e.jsxs("div",{className:"relative w-full h-14",children:[x&&e.jsx("span",{children:e.jsx(p,{})}),e.jsx("input",{type:"submit",value:"Send",className:"gruop absolute flex items-center justify-center lg:w-56 md:w-52 w-44 lg:h-14 h-12 lg:text-2xl md:text-[1.4rem] text-[1.3rem] z-20 cursor-pointer bg-g_Background_Shaded"})]})]}),l&&e.jsx(h,{result:l.text,content:"contact"})]})})},S=f(j);export{S as default};
