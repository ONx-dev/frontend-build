(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1952],{61952:function(e,a,s){"use strict";var r=s(7297),l=s(85893),c=s(67294),i=s(78580),n=s.n(i),d=s(55850),t=s(17283),o=s(69077),h=s(11163),m=s(77849),x=s(2593),g=s(41664),j=s.n(g);function v(){var e=(0,r.Z)(["\n        query($address: String) {\n            user(id: $address) {\n                name\n                role\n            }\n        }\n    "]);return v=function(){return e},e}a.Z=function(e){var a,s=function(){u(),i.push("/")},r=e.type,i=(0,h.useRouter)(),g=(0,o.yL)(),u=(0,o.qL)().disconnect,_=(0,o.mA)().address,p=(0,c.useState)(),N=p[0],b=p[1],f=(0,c.useState)(),T=f[0],O=f[1],W=(0,o.cq)({address:m.iF.onx,abi:m._p.onx,signerOrProvider:g}),I=(0,d.a)((0,t.Ps)(v()),{variables:{address:null===_||void 0===_?void 0:_.toLowerCase()}}).data;switch((0,c.useEffect)((function(){W.decimals().then((function(e){b(x.O$.from(10).pow(e))})),W.balanceOf(_).then((function(e){O(e)}))}),[_]),r){case"create-projects-or-no-projects":var y;a=(0,l.jsx)("header",{children:(0,l.jsxs)("div",{className:n().head,children:[(0,l.jsxs)("div",{className:n().signWrapper,children:[(0,l.jsx)("div",{className:n().sign,children:(0,l.jsx)("img",{src:"/currency.svg",alt:""})}),(0,l.jsxs)("p",{className:n().signText,children:["\u0426\u0435 \u0437\u043d\u0430\u043a",(0,l.jsx)("br",{}),"\u0432\u0430\u043b\u044e\u0442\u0438 ONx"]})]}),(0,l.jsx)("div",{className:e.transactionInProcess?n().created:n().createdClosed,children:(0,l.jsx)("div",{className:n().createdTitleWrapper,children:(0,l.jsx)("h3",{className:n().createdTitle,children:"\u041e\u043f\u0435\u0440\u0430\u0446\u0456\u044f \u043e\u0431\u0440\u043e\u0431\u043b\u044f\u0454\u0442\u044c\u0441\u044f..."})})}),(0,l.jsxs)("div",{className:n().rightSide,children:[(0,l.jsx)("p",{className:n().language,children:"english"}),(0,l.jsxs)("div",{className:n().profile,children:[(0,l.jsx)("div",{className:n().icon,children:(0,l.jsx)("img",{src:"/polygon-token.svg",alt:""})}),(0,l.jsx)("div",{className:n().name,children:null===I||void 0===I||null===(y=I.user)||void 0===y?void 0:y.name}),(0,l.jsx)("div",{className:n().logOut,title:"Logout",onClick:s,children:(0,l.jsx)("img",{src:"/logout.svg",alt:""})})]})]})]})});break;case"project":var C;a=(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("header",{children:(0,l.jsxs)("div",{className:n().head,children:["INVESTOR"==(null===I||void 0===I?void 0:I.user.role)&&(0,l.jsxs)("div",{className:n().balanceWrapper,children:[(0,l.jsx)("div",{className:n().balanceImageOne,children:(0,l.jsx)("img",{src:"/wallet.svg",alt:"Wallet Image"})}),(0,l.jsxs)("div",{className:n().balanceAmountWrapper,children:[(0,l.jsx)("p",{className:n().balanceDescription,children:"\u0411\u0430\u043b\u0430\u043d\u0441 ONx"}),(0,l.jsxs)("div",{className:n().balanceAmount,children:[(0,l.jsx)("p",{className:n().balanceAmountText,children:N&&T&&(null===T||void 0===T?void 0:T.mul(100).div(N).toNumber())/100}),(0,l.jsx)("div",{className:n().balanceImageCurrency,children:(0,l.jsx)("img",{src:"/currency.svg",alt:"ONx"})})]})]}),(0,l.jsx)(j(),{href:"/dashboard",children:(0,l.jsx)("a",{className:n().balanceImageTwo,children:(0,l.jsx)("img",{src:"/plus.svg",alt:"Add Money"})})})]}),(0,l.jsxs)("div",{className:n().signWrapper,children:[(0,l.jsx)("div",{className:n().sign,children:(0,l.jsx)("img",{src:"/currency.svg",alt:""})}),(0,l.jsxs)("p",{className:n().signText,children:["\u0426\u0435 \u0437\u043d\u0430\u043a",(0,l.jsx)("br",{}),"\u0432\u0430\u043b\u044e\u0442\u0438 ONx"]})]}),(0,l.jsx)("div",{className:e.transactionInProcess?n().created:n().createdClosed,children:(0,l.jsx)("div",{className:n().createdTitleWrapper,children:(0,l.jsx)("h3",{className:n().createdTitle,children:"\u041e\u043f\u0435\u0440\u0430\u0446\u0456\u044f \u043e\u0431\u0440\u043e\u0431\u043b\u044f\u0454\u0442\u044c\u0441\u044f..."})})}),(0,l.jsxs)("div",{className:n().rightSide,children:[(0,l.jsx)("p",{className:n().language,children:"english"}),(0,l.jsxs)("div",{className:n().profile,children:[(0,l.jsx)("div",{className:n().icon,children:(0,l.jsx)("img",{src:"/polygon-token.svg",alt:""})}),(0,l.jsx)("div",{className:n().name,children:null===I||void 0===I||null===(C=I.user)||void 0===C?void 0:C.name}),(0,l.jsx)("div",{className:n().logOut,title:"Logout",onClick:s,children:(0,l.jsx)("img",{src:"/logout.svg",alt:""})})]})]})]})})});break;case"dashboard":var A;a=(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("header",{children:(0,l.jsxs)("div",{className:n().head,children:[(0,l.jsxs)("div",{className:n().balanceWrapper,children:[(0,l.jsx)("div",{className:n().balanceImageOne,children:(0,l.jsx)("img",{src:"/wallet.svg",alt:"Wallet Image"})}),(0,l.jsxs)("div",{className:n().balanceAmountWrapper,children:[(0,l.jsx)("p",{className:n().balanceDescription,children:"\u0411\u0430\u043b\u0430\u043d\u0441 ONx"}),(0,l.jsxs)("div",{className:n().balanceAmount,children:[(0,l.jsx)("p",{className:n().balanceAmountText,children:N&&T&&(null===T||void 0===T?void 0:T.mul(100).div(N).toNumber())/100}),(0,l.jsx)(j(),{href:"/dashboard",children:(0,l.jsx)("div",{className:n().balanceImageCurrency,children:(0,l.jsx)("img",{src:"/currency.svg",alt:"ONx"})})})]})]}),(0,l.jsx)(j(),{href:"/dashboard",children:(0,l.jsx)("a",{className:n().balanceImageTwo,children:(0,l.jsx)("img",{src:"/plus.svg",alt:"Add Money"})})})]}),(0,l.jsxs)("div",{className:n().signWrapper,children:[(0,l.jsx)("div",{className:n().sign,children:(0,l.jsx)("img",{src:"/currency.svg",alt:""})}),(0,l.jsxs)("p",{className:n().signText,children:["\u0426\u0435 \u0437\u043d\u0430\u043a",(0,l.jsx)("br",{}),"\u0432\u0430\u043b\u044e\u0442\u0438 ONx"]})]}),(0,l.jsx)("div",{className:e.transactionInProcess?n().created:n().createdClosed,children:(0,l.jsx)("div",{className:n().createdTitleWrapper,children:(0,l.jsx)("h3",{className:n().createdTitle,children:"\u041e\u043f\u0435\u0440\u0430\u0446\u0456\u044f \u043e\u0431\u0440\u043e\u0431\u043b\u044f\u0454\u0442\u044c\u0441\u044f..."})})}),(0,l.jsxs)("div",{className:n().rightSide,children:[(0,l.jsx)("p",{className:n().language,children:"english"}),(0,l.jsxs)("div",{className:n().profile,children:[(0,l.jsx)("div",{className:n().icon,children:(0,l.jsx)("img",{src:"/polygon-token.svg",alt:""})}),(0,l.jsx)("div",{className:n().name,children:null===I||void 0===I||null===(A=I.user)||void 0===A?void 0:A.name}),(0,l.jsx)("div",{className:n().logOut,title:"Logout",onClick:s,children:(0,l.jsx)("img",{src:"/logout.svg",alt:""})})]})]})]})})});break;default:var k;a=(0,l.jsx)("header",{children:(0,l.jsxs)("div",{className:n().head,children:[(0,l.jsxs)("div",{className:n().signWrapper,children:[(0,l.jsx)("div",{className:n().sign,children:(0,l.jsx)("img",{src:"/currency.svg",alt:""})}),(0,l.jsxs)("p",{className:n().signText,children:["\u0426\u0435 \u0437\u043d\u0430\u043a",(0,l.jsx)("br",{}),"\u0432\u0430\u043b\u044e\u0442\u0438 ONx"]})]}),(0,l.jsxs)("div",{className:n().rightSide,children:[(0,l.jsx)("p",{className:n().language,children:"english"}),(0,l.jsxs)("div",{className:n().profile,children:[(0,l.jsx)("div",{className:n().icon,children:(0,l.jsx)("img",{src:"/polygon-token.svg",alt:""})}),(0,l.jsx)("div",{className:n().name,children:null===I||void 0===I||null===(k=I.user)||void 0===k?void 0:k.name}),(0,l.jsx)("div",{className:n().logOut,title:"Logout",onClick:s,children:(0,l.jsx)("img",{src:"/logout.svg",alt:""})})]})]})]})})}return(0,l.jsx)("div",{children:a})}},78580:function(e){e.exports={leftSide:"header_leftSide__dNFxW",wrapper:"header_wrapper__IvjF_",head:"header_head__pwqwO",signWrapper:"header_signWrapper__U_igX",signText:"header_signText__zebOh",signPurple:"header_signPurple__osmuP",rightSide:"header_rightSide__Rfk3I",language:"header_language__ITYRU",profile:"header_profile__GyPw6",icon:"header_icon__ihAL_",name:"header_name__LA96b",logOut:"header_logOut__e38NR",balanceWrapper:"header_balanceWrapper__NJMWi",balanceImageOne:"header_balanceImageOne___8jzz",balanceAmountWrapper:"header_balanceAmountWrapper__1Oc63",balanceDescription:"header_balanceDescription__2K0yR",balanceAmount:"header_balanceAmount__V_rfV",balanceAmountText:"header_balanceAmountText__s5oWY",balanceImageCurrency:"header_balanceImageCurrency__AVIv6",balanceImageTwo:"header_balanceImageTwo__XavP7","created-origin":"header_created-origin__u1h_R",created:"header_created__bLdjp",createdTitleWrapper:"header_createdTitleWrapper__duB_Q",createdTitle:"header_createdTitle__qTCl7",createdDescription:"header_createdDescription__Covou",createdClose:"header_createdClose__PyBIo",createdClosed:"header_createdClosed__iTcNg"}},11163:function(e,a,s){e.exports=s(90387)}}]);