"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[7525],{25537:(e,t,l)=>{l.d(t,{Gz:()=>c,kh:()=>p,rK:()=>r,vt:()=>m,xd:()=>h,zf:()=>u});l(96011);var s=l(14313),a=l(66345),n=l(54480),i=l(52867),o=l(41709),d=l(47208);const c=(e,t,l)=>{var o={name:e};return e=>{(new s.A).post(a.rrL,o).then((l=>{const{responseData:s,responseCode:a,responseStatus:o}=l.data;200==a&&(localStorage.setItem("emailCamp_id",null===s||void 0===s?void 0:s.id),(0,d.oU)({emailCamp_id:null===s||void 0===s?void 0:s.id}),(0,i.k1)(o),e({type:n.HdU,payload:s}),e({type:n.thu,payload:null===s||void 0===s?void 0:s.id}),t(a,o,"create"))})).catch((e=>{const{data:l}=e.response;(0,i.b)(),404==l.responseCode?((0,i.r$)(l.responseMessage),t(l.responseCode,l.responseMessage)):(0,i.r$)("Something went wrong!")}))}},r=(e,t,l)=>{const o={id:e,name:t};return t=>{(new s.A).post(a.y6g,o).then((s=>{const{responseData:a,responseCode:o,responseStatus:d}=s.data;200==o&&((0,i.k1)(d),t({type:n.MhL,payload:{id:e,responseData:a}}),l(o,d))})).catch((e=>{console.log(e)}))}},m=(e,t,l)=>l=>{(new s.A).post("".concat(a.KJe,"/").concat(e)).then((s=>{const{responseData:a,responseCode:c,responseMessage:r}=s.data;200==c&&((0,i.k1)(r),l({type:n.AEx,payload:e}),setTimeout((()=>{const{emailList:s}=o.A.getState().emailList,a=e==localStorage.getItem("emailCamp_id")?"delete":null;var i,m,u,h,p,v,x;s&&(null===s||void 0===s?void 0:s.length)>0?e==localStorage.getItem("emailCamp_id")&&((null===(i=s[0])||void 0===i?void 0:i.id)==e?(localStorage.setItem("emailCamp_id",null===(m=s[1])||void 0===m?void 0:m.id),l({type:n.thu,payload:null===(u=s[1])||void 0===u?void 0:u.id}),(0,d.oU)({emailCamp_id:null===(h=s[1])||void 0===h?void 0:h.id})):(localStorage.setItem("emailCamp_id",null===(p=s[0])||void 0===p?void 0:p.id),l({type:n.thu,payload:null===(v=s[0])||void 0===v?void 0:v.id}),(0,d.oU)({emailCamp_id:null===(x=s[0])||void 0===x?void 0:x.id}))):(localStorage.setItem("emailCamp_id",""),(0,d.oU)({emailCamp_id:""}),l({type:n.thu,payload:""}));t(c,r,a)}),1e3))})).catch((e=>{console.log(e)}))},u=()=>{var e,t,l;null===(e=o.A.getState())||void 0===e||null===(t=e.dashboardData)||void 0===t||null===(l=t.dashboarddata)||void 0===l||l.allWalls;return e=>{e({type:n.va4,payload:!0}),(new s.A).get(a.TkZ).then((t=>{const{responseData:l,responseCode:s}=t.data;if(200==s){null===l||void 0===l||l.filter((e=>e.id==localStorage.getItem("emailCamp_id")));e({type:n.ju,payload:l}),e({type:n.va4,payload:!1}),e({type:n.thu,payload:localStorage.getItem("emailCamp_id")})}}))}},h=e=>(new s.A).post(a.iTc,e),p=(e,t)=>l=>{(new s.A).post(a.y6g,{...e,id:localStorage.getItem("emailCamp_id")}).then((e=>{const{responseData:s,responseCode:a,responseStatus:o}=e.data;200==a&&((0,i.k1)(o),l({type:n.MhL,payload:{id:localStorage.getItem("emailCamp_id"),responseData:s}}),t())})).catch((e=>{console.log(e)}))}},18038:(e,t,l)=>{l.d(t,{A:()=>d});var s=l(9950),a=l(97937),n=l(54810),i=l(44414);class o extends s.Component{constructor(e){super(e),this.handleClose=()=>{this.props.filterToggleCallback(!1)},this.state={width:window.innerWidth,isSavedList:!1},this.handleWindowResize=this.handleWindowResize.bind(this)}handleWindowResize(){this.setState({width:window.innerWidth})}componentDidMount(){window.addEventListener("resize",this.handleWindowResize)}componentWillUnmount(){window.removeEventListener("resize",this.handleWindowResize)}render(){const{filterToggle:e,heading:t,redirectUrl:l,isHide:s,closeAside:o}=this.props,{width:d}=this.state;return(0,i.jsxs)("div",{className:"aside__ border-end ".concat(d<1280?"offcanvas offcanvas-start ".concat(e?"show":""):""),id:"aside__toggle",children:[(0,i.jsx)("div",{className:"d-flex justify-content-end d-xl-none p-3 border-bottom h-48px",children:(0,i.jsx)(a.A,{variant:"secondary",id:"toggle_aside",size:"sm",className:"d-flex border-0",onClick:()=>o(),children:(0,i.jsx)(n.gc,{icon:"xmark",iconClass:"me-0"})})}),(0,i.jsx)("div",{className:"aside__body w-100",children:this.props.children})]})}}const d=o},80692:(e,t,l)=>{l.d(t,{A:()=>N});var s=l(9950),a=l(34483),n=l(97937),i=l(21432),o=l(95942),d=l(54810),c=l(73878),r=l(28429),m=l(42074),u=l(44268),h=l(17595),p=l(44414);const v=e=>{let{show:t,title:l,apiError:a,setApiError:i,onCreate:o,onUpdate:d,editContent:c,handleClose:r,isStatus:m,deleteContent:v,spinner:x}=e;const[g,w]=(0,s.useState)(""),[j,b]=(0,s.useState)(1),[y,f]=(0,s.useState)(1),[C,N]=(0,s.useState)(!1),A=()=>{g&&g.length>0?(N(!1),o(g,j,y)):N(!0)},k=e=>{g&&g.length>0?(N(!1),d(e,g,y,j)):N(!0)};(0,s.useEffect)((()=>{c&&Object.keys(c).length>0?(w(c.name),b(Number(c.autoUpdate)),f(Number(c.status))):S()}),[c]);const S=()=>{w(""),b(1),f(1),N(!1)};return(0,p.jsxs)(u.A,{show:t,size:"sm",onHide:r,id:"cont_modal",centered:!0,children:[(0,p.jsx)(u.A.Header,{closeButton:!0,children:(0,p.jsxs)(u.A.Title,{children:[c&&Object.keys(c).length>0?"Edit":"Create"," ",l]})}),(0,p.jsxs)(u.A.Body,{children:[(0,p.jsxs)(h.A.Group,{className:"mb-4",children:[(0,p.jsx)(h.A.Control,{id:"g_name",className:"fw-semibold text-dark ".concat(C||a?"is-invalid":""),placeholder:"Enter Gallery Name",value:g,onChange:e=>{N(!1),i(""),w(e.target.value)},onKeyPress:e=>{"Enter"===e.key&&(c&&Object.keys(c).length>0?k(c.id):A())}}),(0,p.jsx)("span",{className:"invalid-feedback",children:C?"".concat(l," name is required"):a?"".concat(a):""})]}),(0,p.jsxs)(h.A.Group,{className:"f-between mb-4",children:[(0,p.jsx)(h.A.Label,{htmlFor:"cont_a_u",children:"Auto Update"}),(0,p.jsx)(h.A.Check,{type:"switch",id:"cont_a_u",checked:j,onChange:()=>b(Number(!j))})]}),(0,p.jsxs)(h.A.Group,{className:"f-between mb-4",children:[(0,p.jsx)(h.A.Label,{htmlFor:"cont_s",children:"Status"}),(0,p.jsx)(h.A.Check,{type:"switch",id:"cont_s",checked:y,onClick:()=>f(Number(!y))})]})]}),(0,p.jsx)(u.A.Footer,{children:c&&Object.keys(c).length>0?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n.A,{variant:"outline-danger",size:"sm",id:"con_delete_btn",onClick:()=>v(c),children:"Delete"}),(0,p.jsx)(n.A,{size:"sm",id:"con_update_btn",className:"".concat(x?"spinner":""),disabled:x,onClick:()=>k(c.id),children:"Update"})]}):(0,p.jsx)(n.A,{size:"sm",id:"con_save_btn",className:"".concat(x?"spinner":""),disabled:x,onClick:A,children:"Save"})})]})};var x=l(47208),g=l(54480),w=l(14919),j=l(64323),b=l(33127);var y=l(59074),f=l(4695),C=l.n(f);const N=e=>{var t;let{contentList:l,selectedContent:u,title:h,iswebsite:f,onlySwitcher:N,modifyContent:A,selectLoader:k}=e;const S=(0,c.d4)((e=>{var t,l;return null===(t=e.dashboardData)||void 0===t||null===(l=t.dashboarddata)||void 0===l?void 0:l.allWalls})),_=(0,c.d4)((e=>{var t,l;return null===(t=e.authorized)||void 0===t||null===(l=t.userData)||void 0===l?void 0:l.user_data})),{wallsLoader:I,addGalleryNow:W}=(0,c.d4)((e=>null===e||void 0===e?void 0:e.dashboardData)),[L,U]=(0,s.useState)(null),[z,E]=(0,s.useState)(!1),[D,O]=(0,s.useState)([]),[F,G]=(0,s.useState)(!0),[P,T]=(0,s.useState)(!1),[B,M]=(0,s.useState)(!1),H=(0,c.wA)(),K=(0,r.Zp)(),R=e=>{var t;(U(e),"Collaborator"==(null===_||void 0===_?void 0:_.role)?((0,x.oU)({wallId:e.wallId}),localStorage.setItem("wallId",e.wallId)):((0,x.oU)({wallId:e.id}),localStorage.setItem("wallId",e.id)),null!==h&&void 0!==h&&h.includes("Email")||null!==h&&void 0!==h&&h.includes("Shop")||null!==h&&void 0!==h&&h.includes("Website"))?A(e):null!==(t=window.location.pathname)&&void 0!==t&&t.includes("/moderation")?(H({type:g.A6,payload:!0}),H({type:g.vbo,payload:!0}),H((0,w.zI)()),H((0,w.ud)(!0)),H((0,j.LF)()),H((0,w.ww)(0)),K("/content/moderation/".concat(e.id)),(e=>{e((0,b.lk)(!1)),e((0,b.aS)(!1))})(H)):(H({type:g.A6,payload:!0}),H({type:g.vbo,payload:!0}),H((0,j.LF)()),setTimeout((()=>{(null===e||void 0===e?void 0:e.totalPost)>0?K("/content/managefeed/".concat(e.id)):K("/content/addfeed/".concat(e.id))}),1e3))},Y=e=>{e?(M(e),T(!1)):(Z(!1),O([]),T(!1))},Z=e=>{H({type:g.GSH,payload:e})};return(0,s.useEffect)((()=>{const e=null===S||void 0===S?void 0:S.find((e=>e.id==localStorage.getItem("wallId")));u&&Object.keys(u).length>0?(U(u),G(!1)):k?G(!0):(U(e||(S&&S[0]?S[0]:"")),G(!1))}),[,u,k,S]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"d-flex align-items-center",children:[(0,p.jsxs)(a.A,{className:"w-100",children:[I||F?(0,p.jsx)("div",{className:"w-100 sk_rect rounded-1 h-40px"}):L&&Object.keys(L).length>0?(0,p.jsx)(a.A.Toggle,{id:"content_btn",variant:"secondary",size:"sm",className:"d-flex align-items-center w-100 justify-content-between bg-white p-1",children:(0,p.jsxs)("div",{className:"d-flex align-items-center flex-grow-1",children:[(0,p.jsx)("div",{className:"symbol symbol-28 radius-2 flex-shrink-0 me-2",children:(0,p.jsx)("span",{className:"symbol-label bg-dark text-light fw-bold text-uppercase fs-8",children:null===L||void 0===L||null===(t=L.name)||void 0===t?void 0:t.charAt(0).toUpperCase()})}),(0,p.jsxs)("div",{className:"overflow-hidden w-100 text-start d-flex flex-column",style:{maxWidth:130},children:[(0,p.jsx)("p",{className:"text-gray-800 fw-semibold mb-0 text-ellipsis fs-10",children:null===L||void 0===L?void 0:L.name}),(0,p.jsx)("span",{className:"fs-10 text-muted",children:null!==L&&void 0!==L&&L.totalPost?"".concat(null===L||void 0===L?void 0:L.totalPost," Posts"):"0 Post"})]})]})}):(0,p.jsxs)(n.A,{variant:"secondary",size:"lg",className:"w-100",onClick:()=>window.location.href.includes("content/moderation")?Z(!0):K("/content/moderation/".concat(localStorage.getItem("wallId")?localStorage.getItem("wallId"):"")),children:[(0,p.jsx)(d.gc,{icon:"plus",iconClass:"me-1"}),"New Gallery"]}),S?(0,p.jsx)(a.A.Menu,{className:"w-100 p-0",children:(0,p.jsxs)("div",{className:"dropdown-height",children:[null===S||void 0===S?void 0:S.map(((e,t)=>{var l,s;const i=f?null===e||void 0===e||null===(l=e.wall)||void 0===l?void 0:l.Wall:e;return(0,p.jsxs)("div",{className:"position-relative",children:[(0,p.jsx)(a.A.Item,{eventKey:null===i||void 0===i?void 0:i.id,onClick:()=>R(i),className:"mb-1 rounded-0 ".concat((null===i||void 0===i?void 0:i.id)==(null===L||void 0===L?void 0:L.id)?"active":""),children:(0,p.jsxs)("div",{className:"d-flex align-items-center",children:[(0,p.jsx)("div",{className:"symbol symbol-28 radius-2 flex-shrink-0 me-2",children:(0,p.jsx)("span",{className:"symbol-label bg-dark text-light fw-bold text-uppercase fs-8",children:null===i||void 0===i||null===(s=i.name)||void 0===s?void 0:s.charAt(0).toUpperCase()})}),(0,p.jsxs)("div",{className:"overflow-hidden w-100 text-start d-flex flex-column",style:{maxWidth:130},children:[(0,p.jsx)("p",{className:"text-gray-800 fw-semibold mb-0 text-ellipsis fs-10",children:null===i||void 0===i?void 0:i.name}),(0,p.jsx)("span",{className:"fs-10 text-muted",children:null!==i&&void 0!==i&&i.totalPost?"".concat(null===i||void 0===i?void 0:i.totalPost," Posts"):"0 Post"})]}),(0,p.jsx)("div",{})]})}),!N&&(0,p.jsx)("div",{className:"dropdown-action pe-2",children:(0,p.jsx)(n.A,{variant:"dropdown-icon",className:"content_edit",onClick:()=>(e=>{O(e),Z(!0)})(e),children:(0,p.jsx)(d.gc,{icon:"ellipsis-vertical"})})})]},t)})),!N&&(0,p.jsx)("div",{className:"mt-2 p-2 border-top",children:(0,p.jsxs)(a.A.Item,{id:"add_web_btn",onClick:()=>Z(!0),className:"f-center",children:[(0,p.jsx)(d.gc,{icon:"plus",iconClass:"me-1"}),(0,p.jsxs)("span",{className:"menu-title flex-grow-0",children:["New ",h]})]})})]})}):null]}),L&&Object.keys(L).length>1&&/\/(moderation|addfeed|managefeed)/.test(window.location.pathname)?(0,p.jsx)(i.A,{placement:"bottom",overlay:(0,p.jsx)(o.A,{children:"Add more content"}),children:(0,p.jsx)(m.N_,{style:{cursor:"pointer"},to:"/content/addfeed/".concat(localStorage.getItem("wallId")?localStorage.getItem("wallId"):""),className:"btn btn-primary btn-lg ms-2 h-38px w-38px text-center px-3 py-2",children:(0,p.jsx)(d.gc,{icon:"plus"})})}):null]}),(0,p.jsx)(v,{show:W,apiError:B,setApiError:M,title:"Gallery",onCreate:(e,t,l)=>{if(e&&e.length>0){var s,a;let n=null===e||void 0===e||null===(s=e.trim())||void 0===s||null===(a=s.toLowerCase())||void 0===a?void 0:a.replace(/ /g,"-").replace(/[^\w-]+/g,"");T(!0),H((0,y.kg)({name:null===e||void 0===e?void 0:e.trim(),url:n,status:l,profanity:"0",autoUpdate:t,deleted:0,id:0},K,Y))}},onUpdate:(e,t,l,s)=>{if(t&&t.length>0){var a,n;let i=null===t||void 0===t||null===(a=t.trim())||void 0===a||null===(n=a.toLowerCase())||void 0===n?void 0:n.replace(/ /g,"-").replace(/[^\w-]+/g,"");T(!0),H((0,y.kg)({name:null===t||void 0===t?void 0:t.trim(),url:i,status:l,id:e,profanity:"0",autoUpdate:s,deleted:0},K,Y))}},editContent:D,handleClose:()=>{O([]),Z(!1),M("")},deleteContent:e=>{C().fire({title:"Are You Sure?",text:"Are you sure you want to permanently delete this Website template?",icon:"warning",showCancelButton:!0,cancelButtonText:"Cancel",confirmButtonText:"Yes, Delete it"}).then((t=>{t.value?H((0,y.kg)({name:e.name,url:e.url,profanity:e.url,status:e.status,autoUpdate:e.autoUpdate,id:e.id,deleted:1},K,Y)):t.dismiss}))},spinner:P})]})}},26806:(e,t,l)=>{l.d(t,{A:()=>o});var s=l(51960),a=l(97937),n=l(54810),i=l(44414);const o=e=>{let{title:t,desc:l,button:o,icon:d,isFullScreen:c}=e;const r=c?86:66;return(0,i.jsx)("div",{className:"mx-auto f-center w-100",children:(0,i.jsx)("div",{className:"py-5 text-center w-100 justify-content-center",children:(0,i.jsxs)("div",{className:"mx-auto px-4",style:{maxWidth:520},children:[d?(0,i.jsx)(s.A,{className:"mb-4",src:(0,n.pc)("media/icons/color-icons/".concat(d,".svg")),height:r,width:r,alt:"",fluid:!0}):null,t?(0,i.jsx)("h2",{className:"text-center h3",children:t}):null,l?(0,i.jsx)("p",{className:"fs-8 text-muted fw-medium",children:l}):null,o?(0,i.jsx)(a.A,{onClick:()=>o.action(),size:c?"lg":"md",className:"my-3",children:o.text}):null]})})})}},9676:(e,t,l)=>{l.d(t,{A:()=>j});var s=l(9950),a=l(34483),n=l(97937),i=l(54810),o=l(44268),d=l(17595),c=l(44414);const r=e=>{let{show:t,title:l,onCreate:a,onUpdate:i,editContent:r,handleClose:m,isStatus:u,contentList:h,spinner:p,onDelete:v}=e;const[x,g]=(0,s.useState)(null===r||void 0===r?void 0:r.name),[w,j]=(0,s.useState)(!1),[b,y]=(0,s.useState)(null===r||void 0===r?void 0:r.autoUpdate),[f,C]=(0,s.useState)(null===r||void 0===r?void 0:r.status),[N,A]=(0,s.useState)(!1),k=()=>{if(x&&x.length>0)if(h&&h.length>0){S(x).length>0?j(!0):a(x)}else a(x);else A(!0)},S=e=>h.filter((t=>String("Website"==l?t.wall.Wall.name:t.name).toLowerCase().trim()==String(e).toLowerCase().trim())),_=e=>{if(x&&x.length>0)if(h&&h.length>0){S(x).length>0?j(!0):i(e,x,f,b)}else i(e,x,f,b);else A(!0)};return(0,s.useEffect)((()=>{g(null===r||void 0===r?void 0:r.name),y(null===r||void 0===r?void 0:r.autoUpdate),C(null===r||void 0===r?void 0:r.status),A(!1),j(!1)}),[r]),(0,c.jsxs)(o.A,{show:t,size:"sm",onHide:m,id:"gallery_modal",centered:!0,children:[(0,c.jsx)(o.A.Header,{closeButton:!0,children:(0,c.jsxs)(o.A.Title,{children:[r&&Object.keys(r).length>0?"Edit":"Create"," ",l]})}),(0,c.jsxs)(o.A.Body,{children:[(0,c.jsxs)(d.A.Group,{className:"mb-4",children:[(0,c.jsx)(d.A.Control,{id:"g_name",className:"fw-semibold text-dark ".concat(N||w?"is-invalid":""),placeholder:"Enter ".concat(l," Name"),value:x,onChange:e=>g(e.target.value),onKeyPress:e=>{"Enter"===e.key&&(r&&Object.keys(r).length>0?_(r.id):k())}}),N||w?(0,c.jsx)("span",{className:"invalid-feedback",children:w?"Name already exists.":"".concat(l," name is required")}):""]}),u&&r&&Object.keys(r).length>0?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(d.A.Group,{className:"f-between mb-4",children:[(0,c.jsx)(d.A.Label,{htmlFor:"gallery_a_u",children:"Auto Update"}),(0,c.jsx)(d.A.Check,{type:"switch",id:"gallery_a_u",defaultChecked:b,onChange:()=>y(!b)})]}),(0,c.jsxs)(d.A.Group,{className:"f-between mb-4",children:[(0,c.jsx)(d.A.Label,{htmlFor:"gallery_s",children:"Status"}),(0,c.jsx)(d.A.Check,{type:"switch",id:"gallery_s",defaultChecked:f,onClick:()=>C(!f)})]})]}):null]}),(0,c.jsx)(o.A.Footer,{children:r&&Object.keys(r).length>0?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.A,{variant:"outline-danger",size:"sm",id:"web_close_btn",className:"me-3",onClick:()=>v(r.id),children:"Delete"}),(0,c.jsx)(n.A,{size:"sm",id:"web_update_btn",className:p?"spinner":"",onClick:()=>_(r.id),children:"Update"})]}):(0,c.jsx)(n.A,{size:"sm",id:"web_save_btn",className:p?"spinner":"",onClick:k,children:"Save"})})]})};var m=l(73878),u=l(28429),h=l(4695),p=l.n(h),v=l(22662),x=l(32417),g=l(25537),w=l(54480);const j=e=>{let{contentList:t,changeWebsite:l,selectedContent:o,title:d,isWebsite:h,method:j,addNew:b,noList:y}=e;const[f,C]=(0,s.useState)(!1),[N,A]=(0,s.useState)([]),[k,S]=(0,s.useState)(!1),_=(0,m.wA)(),I=(0,u.Zp)();(0,s.useEffect)((()=>{b&&C(!0)}),[b]);const W=(e,t,l)=>{C(!1),A([]),(d.includes("ShopOn")||d.includes("Email")||d.includes("Website"))&&(j&&j(l||""),L(),S(!1))},L=()=>{A([]),C(!1),d.includes("ShopOn")&&_({type:w.NBv,payload:!1}),d.includes("Email")&&_({type:w.uZc,payload:!1}),d.includes("Website")&&_({type:w.VtD,payload:!1})};return(0,c.jsxs)(c.Fragment,{children:[y?null:(0,c.jsxs)(a.A,{className:"w-100",children:[o?(0,c.jsx)(a.A.Toggle,{id:"web_switcher_btn",variant:"secondary",size:"sm",className:"d-flex align-items-center w-100 justify-content-between bg-white p-1",children:(0,c.jsxs)("div",{className:"d-flex align-items-center flex-grow-1",children:[(0,c.jsx)("div",{className:"symbol symbol-24 radius-2 flex-shrink-0 me-1 fs-5",children:(0,c.jsx)(i.gc,{icon:"browser"})}),(0,c.jsxs)("div",{className:"overflow-hidden",style:{maxWidth:130},children:[(0,c.jsx)("p",{className:"fw-semibold mb-0 text-ellipsis fs-9 text-start",children:null===o||void 0===o?void 0:o.name}),(null===o||void 0===o?void 0:o.totalPost)&&(0,c.jsxs)("p",{className:"mb-0 fs-10 text-muted",children:[null===o||void 0===o?void 0:o.totalPost," Posts"]})]})]})}):(0,c.jsx)("div",{className:"w-100 sk_rect rounded-1 h-34px"}),(0,c.jsx)(a.A.Menu,{className:"w-100",children:(0,c.jsxs)("div",{className:"dropdown-height",children:[null===t||void 0===t?void 0:t.map(((e,t)=>{var s;const d=h?null===e||void 0===e||null===(s=e.wall)||void 0===s?void 0:s.Wall:e;return(0,c.jsxs)("div",{className:"position-relative mb-1",children:[(0,c.jsx)(a.A.Item,{eventKey:null===d||void 0===d?void 0:d.id,onClick:()=>l(d),className:(null===d||void 0===d?void 0:d.id)==(null===o||void 0===o?void 0:o.id)?"active":"",children:(0,c.jsx)("div",{className:"menu-title",children:null===d||void 0===d?void 0:d.name})}),(0,c.jsx)("div",{className:"dropdown-action",children:(0,c.jsx)(n.A,{variant:"dropdown-icon",className:"web_edit",onClick:()=>{var t;return(e=>{A(e),C(!0)})(h?null===e||void 0===e||null===(t=e.wall)||void 0===t?void 0:t.Wall:e)},children:(0,c.jsx)(i.gc,{icon:"ellipsis-vertical"})})})]},t)})),(0,c.jsx)("div",{className:"mt-2 pt-2 border-top",children:(0,c.jsxs)(a.A.Item,{id:"add_web_btn",onClick:()=>C(!0),className:"f-center",children:[(0,c.jsx)(i.gc,{icon:"plus"}),(0,c.jsxs)("span",{className:"menu-title flex-grow-0 ms-1",children:["New ",d]})]})})]})})]}),(0,c.jsx)(r,{show:f,title:d,onCreate:e=>{S(!0),d.includes("Website")&&_((0,v.nE)(e,W,I)),d.includes("ShopOn")&&_((0,x.Lw)(e,W,I)),d.includes("Email")&&_((0,g.Gz)(e,W,I))},onUpdate:(e,t)=>{S(!0),d.includes("Website")&&_((0,v.G$)(e,t,W)),d.includes("ShopOn")&&_((0,x.wR)({id:e,name:t},W)),d.includes("Email")&&_((0,g.rK)(e,t,W))},editContent:N,handleClose:L,contentList:t,spinner:k,onDelete:e=>{p().fire({title:"Are You Sure?",text:"Are you sure you want to permanently delete this ".concat(d.toLowerCase()," template?"),icon:"warning",showCancelButton:!0,cancelButtonText:"Cancel",confirmButtonText:"Yes, Delete it"}).then((t=>{t.value&&(d.includes("Website")&&_((0,v.Q7)(e,W,I)),d.includes("ShopOn")&&_((0,x.IS)(e,W,I)),d.includes("Email")&&_((0,g.vt)(e,W,I)))}))}})]})}}}]);