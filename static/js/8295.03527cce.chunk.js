"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[8295],{88295:(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s(9950),a=s(73878),o=s(1391),i=s(44414);const d=n.lazy((()=>s.e(704).then(s.bind(s,50704))));class l extends n.Component{constructor(){super(...arguments),this.toggleMenu=()=>{var e=document.getElementById("rootDashoard");let t=document.getElementById("aside__toggle");if(e&&e.classList.toggle("aside-on"),t&&t.classList.contains("show")){let e=document.getElementById("toggle_aside");e&&e.click()}}}componentDidMount(){setTimeout((()=>{var e=document.getElementById("main_menu_toggle");e&&e.addEventListener("click",this.toggleMenu)}),100)}render(){const{authorized:e,navigate:t}=this.props;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("aside",{className:"sidebar-menu-main border-end bg-white",children:(0,i.jsx)(n.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:(0,i.jsx)(d,{navigate:t,authorized:e})})}),(0,i.jsx)("div",{className:"aside-overlay",onClick:this.toggleMenu})]})}}const r=(0,a.Ng)((e=>({authorized:e.authorized})))((0,o.A)(l))}}]);