import{j as t,a as e,r as n,s as f}from"./index-b4548d58.js";import{H as m}from"./hoc-9ab5022a.js";import{S as d}from"./loading-bf127eed.js";const i="/assets/perres-69303b3a.png",c=()=>t("div",{className:"flex w-full h-full",children:[e(d,{}),e("img",{src:i,alt:"persian resume"})]}),a="/assets/resume-df5e0dcd.pdf",h=()=>{const[u,l]=n.useState(!1);return n.useEffect(()=>{const r=window.matchMedia("(max-width: 540px)");l(r.matches);const o=s=>{l(s.matches)};return r.addEventListener("change",o),()=>{r.removeEventListener("change",o)}},[]),t("section",{className:"flex flex-col items-center justify-center w-screen h-full min-h-screen pt-[80px] ",children:[t("div",{className:"flex lg:flex-row flex-col items-center md:justify-center w-full max-w-[1400px] h-full lg:gap-20 sm:gap-10 gap-[5vw]",children:[t("div",{className:"flex flex-col w-full sm:gap-6 gap-[2vw]",children:[e("h1",{className:"sm:text-5xl text-4xl font-[600]",children:"Get to know me"}),e("p",{className:"sm:text-2xl text-[1.3rem]",children:"Im 21 Years old and started web porogramming 1year ago and im learning more about it everyday.Im looking for job opportunitys that i can grow more. i have some projects to show you more my skills and expriences."}),e("a",{href:a,download:!0,className:"relative lg:flex sm:hidden flex items-center justify-center sm:w-56 sm:h-14 w-[40vw] h-[10vw] min-w-[10rem] max-w-[14rem] min-h-[2.8rem] max-h-[3.5rem] border-[1px] before:content-['_'] before:absolute before:w-full before:h-full before:bg-g_Background_Shaded before:-left-[108%] hover:before:left-0 before:transition-all before:duration-700 before:z-0 after:content-['_'] after:absolute after:w-20 after:h-full after:bg-g_Background_Shaded after:right-[87%] after:top-5 after:rotate-[50deg] hover:after:-right-12 after:transition-all after:duration-700 after:z-0 overflow-hidden",children:e("p",{className:"sm:text-2xl text-clamp3 z-20",children:"Resume"})})]}),e("ul",{className:"flex flex-wrap justify-center sm:w-[40rem] w-full md:gap-4 gap-2",children:f.map(r=>t("li",{className:"group relative flex items-center justify-center md:p-4 p-3 bg-g_Background_Shaded rounded-2xl",children:[e("img",{src:r.img,alt:r.name,className:"object-contain md:w-[48px] md:h-[48px] w-[40px] h-[40px]"}),e("span",{className:"group absolute -top-7 bg-g_Border_Shaded px-2 rotate-x-90 group-hover:rotate-x-0 transition-all duration-300",children:r.name})]}))}),e("a",{href:a,download:!0,className:"relative lg:hidden sm:flex hidden items-center justify-center sm:w-56 sm:h-14 w-[40vw] h-[10vw] min-w-[10rem] max-w-[14rem] min-h-[2.8rem] max-h-[3.5rem] border-[1px] before:content-['_'] before:absolute before:w-full before:h-full before:bg-g_Background_Shaded before:-left-[108%] hover:before:left-0 before:transition-all before:duration-700 before:z-0 after:content-['_'] after:absolute after:w-20 after:h-full after:bg-g_Background_Shaded after:right-[87%] after:top-5 after:rotate-[50deg] hover:after:-right-12 after:transition-all after:duration-700 after:z-0 overflow-hidden",children:e("p",{className:"sm:text-2xl text-clamp3 z-20",children:"Resume"})})]}),t("div",{className:"hidden lg:flex-row flex-col w-full max-w-[1400px] gap-8",children:[t("div",{className:"flex flex-col w-full gap-8",children:[e("h1",{className:"sm:text-4xl text-3xl font-[600] ",children:"Download my Resume"}),e("a",{href:a,download:!0,className:"relative flex items-center justify-center sm:w-56 sm:h-14 w-[40vw] h-[10vw] min-w-[10rem] max-w-[14rem] min-h-[2.8rem] max-h-[3.5rem] border-[1px] before:content-['_'] before:absolute before:w-full before:h-full before:bg-g_Background_Shaded before:-left-[108%] hover:before:left-0 before:transition-all before:duration-700 before:z-0 after:content-['_'] after:absolute after:w-20 after:h-full after:bg-g_Background_Shaded after:right-[87%] after:top-5 after:rotate-[50deg] hover:after:-right-12 after:transition-all after:duration-700 after:z-0 overflow-hidden",children:e("p",{className:"sm:text-2xl text-clamp3 z-20",children:"Download"})})]}),e("div",{className:"w-full ",children:e(c,{})})]})]})},w=m(h);export{w as default};
