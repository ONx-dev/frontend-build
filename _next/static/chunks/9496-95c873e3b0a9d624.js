(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9496],{4798:function(t,e,o){"use strict";o.d(e,{ZP:function(){return y}});var r=o(67294),n=o(50088),s=(t,e)=>{(0,r.useEffect)((()=>{const o=o=>{const r=t.current;o&&r&&!r.contains(o.target)&&e(o)};return document.addEventListener("click",o),()=>document.removeEventListener("click",o)}),[t,e])},l=o(73935),a=o(12532);const i=t=>{const e=document.createElement("div");return e.setAttribute("id",t),e};var c=(t=(()=>Math.random().toString(32).slice(2,10))(),e)=>{const o=`nextui-${t}`,{isBrowser:n}=(0,a.Z)(),[s,l]=(0,r.useState)(n?i(o):null);return(0,r.useEffect)((()=>{const t=(e?e():null)||document.body,r=null==t?void 0:t.querySelector(`#${o}`),n=r||i(o);r||t.appendChild(n),l(n)}),[]),s},d=(t,e=!0)=>{(0,r.useEffect)((()=>{const o=()=>t();return e&&o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)}),[])},m=o(61309);var u=r.memo((({children:t,onExited:e,onEntered:o,className:n,childrenRef:s,enterTime:l=60,leaveTime:a=60,clearTime:i=60,visible:c=!1,name:d="transition",...u})=>{const[p,f]=(0,r.useState)(""),[$,h]=(0,r.useState)(c);return(0,r.useLayoutEffect)((()=>{const t=c?"enter":"leave";c&&!$&&h(!0),f(`${d}-${t}`);const r=c?l:a,n=setTimeout((()=>{f(`${d}-${t} ${d}-${t}-active`),"leave"===t?null==e||e():null==o||o(),clearTimeout(n)}),r),s=setTimeout((()=>{c||(f(""),h(!1)),clearTimeout(s)}),r+i);return()=>{clearTimeout(n),clearTimeout(s)}}),[c,$]),(0,r.useEffect)((()=>{if(null==s||!s.current)return;const t=p.split(" "),e=s.current.className.split(" ").filter((t=>!t.includes(d)));s.current.className=(0,m.Z)(e,t)}),[s,p]),r.isValidElement(t)&&$?r.cloneElement(t,{...u,className:(0,m.Z)(t.props.className,n,!(null!=s&&s.current)&&p)}):null})),p=t=>{(0,r.useEffect)((()=>{const e=e=>t(e);return document.addEventListener("click",e),()=>document.removeEventListener("click",e)}),[t])},f=o(60275);const $=(0,f.zo)("div",{width:"max-content",display:"inherit"}),h=(0,f.zo)("span",{display:"none",content:"",size:"$5",zIndex:"-2",background:"$$tooltipColor",br:"0px 0px 2px 0px",position:"absolute"}),x=(0,f.zo)("div",{position:"relative",fs:"$sm",padding:0,variants:{hideArrow:{false:{[`& ${h}`]:{display:"block"}}}}}),g=(0,f.zo)("div",{position:"absolute",width:"auto",padding:"$3 $sm",opacity:0,zIndex:"$10",br:"$lg","@motion":{transition:"none"},variants:{color:{default:{$$tooltipColor:"$colors$background",bg:"$$tooltipColor"},primary:{$$tooltipColor:"$colors$primary",bg:"$$tooltipColor"},secondary:{$$tooltipColor:"$colors$secondary",bg:"$$tooltipColor"},success:{$$tooltipColor:"$colors$success",bg:"$$tooltipColor"},warning:{$$tooltipColor:"$colors$warning",bg:"$$tooltipColor"},error:{$$tooltipColor:"$colors$error",bg:"$$tooltipColor"},invert:{$$tooltipColor:"$colors$foreground",bg:"$$tooltipColor"}},contentColor:{default:{$$tooltipTextColor:"$colors$text",color:"$$tooltipTextColor"},primary:{$$tooltipTextColor:"$colors$primary",color:"$$tooltipTextColor"},secondary:{$$tooltipTextColor:"$colors$secondary",color:"$$tooltipTextColor"},success:{$$tooltipTextColor:"$colors$success",color:"$$tooltipTextColor"},warning:{$$tooltipTextColor:"$colors$warning",color:"$$tooltipTextColor"},error:{$$tooltipTextColor:"$colors$error",color:"$$tooltipTextColor"},invert:{$$tooltipTextColor:"$colors$invert",color:"$$tooltipTextColor"}},rounded:{true:{br:"$pill"}},shadow:{true:{bs:"$md"}},animated:{true:{transition:"opacity 0.25s ease 0s, top 0.25s ease 0s"},false:{transition:"none"}}},compoundVariants:[{color:"primary",contentColor:"default",css:{$$tooltipTextColor:"$colors$white"}},{color:"secondary",contentColor:"default",css:{$$tooltipTextColor:"$colors$white"}},{color:"success",contentColor:"default",css:{$$tooltipTextColor:"$colors$white"}},{color:"error",contentColor:"default",css:{$$tooltipTextColor:"$colors$white"}},{color:"invert",contentColor:"default",css:{$$tooltipTextColor:"$colors$background"}}],defaultVariants:{color:"default",contentColor:"default"}}),b={top:-1e3,left:-1e3,right:-1e3,bottom:-1e3,width:0,height:0},j=t=>{if(!t||!t.current)return b;const e=t.current.getBoundingClientRect();return{...e,width:e.width||e.right-e.left,height:e.height||e.bottom-e.top,top:e.top+document.documentElement.scrollTop,bottom:e.bottom+document.documentElement.scrollTop,left:e.left+document.documentElement.scrollLeft,right:e.right+document.documentElement.scrollLeft}},v={top:"-1000px",left:"-1000px",transform:"none"};var C=o(85893);const E="nextui-tooltip",w=({children:t,parent:e,visible:o,offset:n,placement:s,rounded:a,animated:i,className:f,hideArrow:$,css:b,...w})=>{const T=c("tooltip"),N=(0,r.useRef)(null),[y,_]=(0,r.useState)(v);if(!e)return null;const P=()=>{const t=((t,e,o)=>{const r={top:{top:e.top-o+"px",left:`${e.left+e.width/2}px`,transform:"translate(-50%, -100%)"},topStart:{top:e.top-o+"px",left:`${e.left}px`,transform:"translate(0, -100%)"},topEnd:{top:e.top-o+"px",left:`${e.left+e.width}px`,transform:"translate(-100%, -100%)"},bottom:{top:`${e.bottom+o}px`,left:`${e.left+e.width/2}px`,transform:"translate(-50%, 0)"},bottomStart:{top:`${e.bottom+o}px`,left:`${e.left}px`,transform:"translate(0, 0)"},bottomEnd:{top:`${e.bottom+o}px`,left:`${e.left+e.width}px`,transform:"translate(-100%, 0)"},left:{top:`${e.top+e.height/2}px`,left:e.left-o+"px",transform:"translate(-100%, -50%)"},leftStart:{top:`${e.top}px`,left:e.left-o+"px",transform:"translate(-100%, 0)"},leftEnd:{top:`${e.top+e.height}px`,left:e.left-o+"px",transform:"translate(-100%, -100%)"},right:{top:`${e.top+e.height/2}px`,left:`${e.right+o}px`,transform:"translate(0, -50%)"},rightStart:{top:`${e.top}px`,left:`${e.right+o}px`,transform:"translate(0, 0)"},rightEnd:{top:`${e.top+e.height}px`,left:`${e.right+o}px`,transform:"translate(0, -100%)"}};return r[t]||r.top})(s,j(e),n);_(t)},{transform:R,top:S,left:I,right:k,bottom:O}=(0,r.useMemo)((()=>((t,e)=>{const o={top:{top:"auto",right:"auto",left:"50%",bottom:"0px",transform:"translate(-50%, 100%) rotate(45deg)"},topStart:{top:"auto",right:"auto",left:"8%",bottom:"0px",transform:"translate(8%, 100%) rotate(45deg)"},topEnd:{top:"auto",right:"8%",left:"auto",bottom:"0px",transform:"translate(8%, 100%) rotate(45deg)"},bottom:{top:"0px",right:"auto",left:"50%",bottom:"auto",transform:"translate(-50%, -100%) rotate(225deg)"},bottomStart:{top:"0px",right:"auto",left:"8%",bottom:"auto",transform:"translate(8%, -100%) rotate(225deg)"},bottomEnd:{top:"0px",right:"8%",left:"auto",bottom:"auto",transform:"translate(8%, -100%) rotate(225deg)"},left:{top:"50%",right:`-${e-1}px`,left:"auto",bottom:"auto",transform:"translate(100%, -50%) rotate(-45deg)"},leftStart:{top:"calc(15% + 1px)",right:`-${e-1}px`,left:"auto",bottom:"auto",transform:"translate(100%, 0) rotate(-45deg)"},leftEnd:{top:"auto",right:`-${e-1}px`,left:"auto",bottom:"calc(15% + 1px)",transform:"translate(100%, 0) rotate(-45deg)"},right:{top:"50%",right:"auto",left:`-${e-1}px`,bottom:"auto",transform:"translate(-100%, -50%) rotate(135deg)"},rightStart:{top:"calc(15% + 1px)",right:"auto",left:`-${e-1}px`,bottom:"auto",transform:"translate(-100%, 0) rotate(135deg)"},rightEnd:{top:"auto",right:"auto",left:`-${e-1}px`,bottom:"calc(15% + 1px)",transform:"translate(-100%, 0) rotate(135deg)"}};return o[t]||o.top})(s,5)),[s]);d(P),p((()=>P())),(0,r.useEffect)((()=>{P()}),[o]);const Z=(0,r.useMemo)((()=>o?"open":"closed"),[o]);return T?(0,l.createPortal)((0,C.jsx)(u,{enterTime:20,leaveTime:20,name:`${E}-wrapper`,visible:o,children:(0,C.jsx)(g,{ref:N,animated:i,className:(0,m.Z)(`${E}-content`,`${E}--${Z}`,f),css:{left:y.left,top:`calc(${y.top} + 6px)`,transform:y.transform,[`&.${E}-wrapper-enter-active`]:{opacity:1,top:y.top},...b},"data-state":Z,onClick:t=>{t.stopPropagation(),t.nativeEvent.stopImmediatePropagation()},...w,children:(0,C.jsxs)(x,{className:(0,m.Z)(E,{[`${E}--with-arrow`]:!$}),"data-state":Z,hideArrow:$,role:"tooltip",children:[(0,C.jsx)(h,{className:`${E}-arrow`,css:{left:I,top:S,right:k,bottom:O,transform:R}}),t]})})}),T):null};w.toString=()=>".nextui-tooltip-content";var T=(0,n.Z)(w,{placement:"top",offset:12,className:""});const N=({children:t,initialVisible:e,content:o,offset:n,placement:l,portalClassName:a,enterDelay:i,leaveDelay:c,trigger:d,rounded:m,animated:u,shadow:p,className:f,color:h,contentColor:x,onVisibleChange:g,hideArrow:b,css:j,triggerCss:v,onClick:E,keepMounted:w,visible:N,isDisabled:y,..._})=>{const P=(0,r.useRef)(),R=(0,r.useRef)(null),[S,I]=(0,r.useState)(e),k={animated:u,visible:S,css:j,shadow:p,offset:n,placement:l,rounded:m,color:h,contentColor:x,hideArrow:b,parent:R,className:a},O=t=>{const e=()=>{clearTimeout(P.current),P.current=void 0},o=t=>{I(t),g(t),e()};e(),P.current=t?window.setTimeout((()=>o(!0)),i):window.setTimeout((()=>o(!1)),c)},Z=t=>{"hover"===d&&O(t)};return s(R,(()=>"click"===d&&!w&&O(!1))),(0,r.useEffect)((()=>{void 0!==N&&O(N)}),[N]),(0,C.jsxs)($,{ref:R,className:`nextui-tooltip-button ${f}`,css:v,role:"button",tabIndex:-1,onBlur:()=>Z(!1),onClickCapture:()=>{"click"===d&&O(!S),null==E||E()},onFocus:()=>Z(!0),onKeyUp:()=>Z(!0),onMouseEnter:()=>Z(!0),onMouseLeave:()=>Z(!1),..._,children:[t,o&&!y?(0,C.jsx)(T,{...k,children:o}):null]})};N.toString=()=>".nextui-tooltip";var y=(0,n.Z)(N,{initialVisible:!1,hideArrow:!1,animated:!0,shadow:!0,rounded:!1,keepMounted:!1,isDisabled:!1,trigger:"hover",enterDelay:0,leaveDelay:0,className:"",portalClassName:"",onVisibleChange:()=>{}})},89496:function(t,e,o){"use strict";o.d(e,{Z:function(){return v}});var r=o(7297),n=o(85893),s=o(41664),l=o.n(s),a=o(69077),i=o(55850),c=o(17283),d="/_next/static/media/logo.54a0954b.svg",m="/_next/static/media/task.78ad119d.svg",u="/_next/static/media/dass.693c0f1a.svg",p=o(19202),f=o.n(p),$="/_next/static/media/setting.71908ead.svg",h="/_next/static/media/chart-histogram.7d9196c7.svg",x="/_next/static/media/pres.c5d7511c.svg",g="/_next/static/media/store.33e9b76f.svg",b=o(4798);function j(){var t=(0,r.Z)(["\n        query($address: String) {\n            user(id: $address) {\n                name\n                role\n                ownerOfProject { id }\n            }\n        }\n    "]);return j=function(){return t},t}function v(){var t=(0,a.mA)().address,e=(0,i.a)((0,c.Ps)(j()),{variables:{address:null===t||void 0===t?void 0:t.toLowerCase()}}).data;return(0,n.jsx)("nav",{className:f().leftSide,children:(0,n.jsxs)("ul",{className:f().linksBar,children:[(0,n.jsx)(l(),{href:"/dashboard",children:(0,n.jsx)("li",{className:f().menuItem,children:(0,n.jsx)("img",{src:d})})}),e&&e.user&&"PROJECT_OWNER"==e.user.role&&!e.user.ownerOfProject&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l(),{href:"/dashboard",children:(0,n.jsx)("li",{className:f().menuItemReady,children:(0,n.jsx)("img",{src:x})})})}),e&&e.user&&"PROJECT_OWNER"==e.user.role&&!e.user.ownerOfProject&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l(),{href:"/create-project",children:(0,n.jsx)("li",{className:f().menuItemReady,children:(0,n.jsx)("img",{src:m,className:f().menuItemReady})})})}),e&&e.user&&"PROJECT_OWNER"==e.user.role&&e.user.ownerOfProject&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l(),{href:"/project",children:(0,n.jsx)("li",{className:f().menuItemReady,children:(0,n.jsx)("img",{src:x})})})}),e&&e.user&&"PROJECT_OWNER"==e.user.role&&e.user.ownerOfProject&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(b.ZP,{content:"\u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435",placement:"rightEnd",children:(0,n.jsx)(l(),{href:"/dashboard",children:(0,n.jsx)("li",{className:f().menuItem,children:(0,n.jsx)("img",{src:g})})})})}),e&&e.user&&"PROJECT_OWNER"==e.user.role&&e.user.ownerOfProject&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(b.ZP,{content:"\u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435",placement:"rightEnd",children:(0,n.jsx)(l(),{href:"/project",children:(0,n.jsx)("li",{className:f().menuItem,children:(0,n.jsx)("img",{src:h})})})})}),e&&e.user&&"PROJECT_OWNER"==e.user.role&&e.user.ownerOfProject&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(b.ZP,{content:"\u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435",placement:"rightEnd",children:(0,n.jsx)(l(),{href:"/project",children:(0,n.jsx)("li",{className:f().menuItem,children:(0,n.jsx)("img",{src:$})})})})}),e&&e.user&&"INVESTOR"==e.user.role&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b.ZP,{content:"dashboard",placement:"rightEnd",children:(0,n.jsx)(l(),{href:"/dashboard",children:(0,n.jsx)("li",{className:f().menuItemReady,children:(0,n.jsx)("img",{src:u})})})}),(0,n.jsx)("div",{className:f().menu,children:(0,n.jsx)(b.ZP,{content:"project",placement:"rightEnd",children:(0,n.jsx)(l(),{href:"/project",children:(0,n.jsx)("li",{className:f().menuItemReady,children:(0,n.jsx)("img",{src:x})})})})}),(0,n.jsx)(b.ZP,{content:"\u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435",placement:"rightEnd",children:(0,n.jsx)(l(),{href:"/dashboard",children:(0,n.jsx)("li",{className:f().menuItem,children:(0,n.jsx)("img",{src:g})})})}),(0,n.jsx)(b.ZP,{content:"\u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435",placement:"rightEnd",children:(0,n.jsx)(l(),{href:"/project",children:(0,n.jsx)("li",{className:f().menuItem,children:(0,n.jsx)("img",{src:h})})})}),(0,n.jsx)(b.ZP,{content:"\u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435",placement:"rightEnd",children:(0,n.jsx)(l(),{href:"/project",children:(0,n.jsx)("li",{className:f().menuItem,children:(0,n.jsx)("img",{src:$})})})})]})]})})}},19202:function(t){t.exports={logo:"navbar_logo__rxU3h",leftSide:"navbar_leftSide__1vxi_",menuItem:"navbar_menuItem__EyQsE",menuItemReady:"navbar_menuItemReady__Dvw1i",active:"navbar_active__BSQ3J"}}}]);