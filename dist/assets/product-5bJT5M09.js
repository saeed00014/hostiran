import{u as x,i as m,e as o,j as e,k as f,g as h}from"./index-dDx1fjhJ.js";import{S as p}from"./hoc-0Tcu2qEj.js";import{R as u}from"./rateHandler-eBZJpPhU.js";const j=()=>{const l=x(),n=m(s=>s.data),t=window.location.href,c=t.slice(t.length-1,t.length),a=o.find(s=>s.id==c),r=async s=>{const i=n.cards.find(d=>d.id==s.id);l(f(s)),await h.post("https://saeed-main-portfolio-api.cyclic.cloud/products",{id:s.id,img:s.img,title:s.title,isAvailable:s.isAvailable,remaining:s.remaining,rate:s.rate,price:s.price,discountPrecent:s.discountPrecent,quantity:s.isAvailable?i?i.quantity<9?i.quantity+1:i.quantity:1:0})};return e.jsx("section",{className:"flex flex-col items-center justify-start w-screen min-h-screen ",children:e.jsx("div",{className:"flex flex-col gap-6 w-full max-w-[1450px]",children:e.jsxs("div",{className:"flex justify-between gap-4 w-full",children:[e.jsxs("div",{className:"flex justify-between h-full gap-4",children:[e.jsx("div",{className:"min-w-max",children:e.jsx("img",{src:a.img,alt:"",className:"h-[250px]"})}),e.jsxs("div",{className:"flex flex-col gap-3 w-full",children:[e.jsx("h1",{className:"text-[24px]",children:a.title}),e.jsxs("span",{style:{direction:"initial"},className:"relative flex items-center justify-end pr-[85px] h-5 text-black gap-1",children:[e.jsx(u,{product:a}),e.jsxs("small",{children:["(",a.rateCount,")"]}),e.jsx("span",{children:a.rate})]}),e.jsxs("span",{className:"w-full",children:["قیمت: ",a.price," تومان"]}),a.isAvailable?e.jsx("span",{className:"flex items-center w-full font-[500] text-green-600",children:"موجود"}):e.jsx("span",{className:"flex items-center w-full font-[500] text-red-600",children:"نا موجود"})]})]}),e.jsx("div",{className:"min-w-max",children:e.jsx("div",{className:"flex items-center justify-center w-[250px] h-[160px] border-[1px] border-black rounded-[.5rem]",children:e.jsx("button",{onClick:()=>r(a),className:"px-6 py-2 rounded-[1.5rem] bg-red-400 text-g_Text_White",children:"افزودن به سبد خرید"})})})]})})})},y=p(j,"product");export{y as default};
