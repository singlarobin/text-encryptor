(this["webpackJsonptext-encryptor"]=this["webpackJsonptext-encryptor"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={selectContainer:"styles_selectContainer__2J6aO",selectContent:"styles_selectContent__2YgRY",selectInput:"styles_selectInput__1_Y3U",selectListContainer:"styles_selectListContainer__2h0km",selectListItem:"styles_selectListItem__11PkM"}},function(e,t,n){e.exports={descriptionContainer:"styles_descriptionContainer__23U9u",descriptionHeading:"styles_descriptionHeading__gN2qJ",descriptionLabel:"styles_descriptionLabel__25sK3",descriptionContent:"styles_descriptionContent__1aMeQ"}},function(e,t,n){e.exports={errorContainer:"styles_errorContainer__3sMBV",errorStatus:"styles_errorStatus__2kJqV",errorContent:"styles_errorContent__3Z7ON"}},,,,,function(e,t,n){e.exports={snackbarContainer:"styles_snackbarContainer__1SpBV",message:"styles_message__2dawB"}},function(e,t,n){e.exports={container:"styles_container__344pv",buttonContainer:"styles_buttonContainer__DxwJB",urlContent:"styles_urlContent__YrOVe"}},,,,,function(e,t,n){e.exports={iconButton:"styles_iconButton__3lGUI"}},function(e,t,n){e.exports={page:"styles_page__229xo"}},function(e,t,n){e.exports={headerContent:"styles_headerContent__1hAlc"}},function(e,t,n){e.exports={inputContent:"styles_inputContent__X9QFY"}},function(e,t,n){e.exports={buttonContent:"styles_buttonContent__38_um"}},function(e,t,n){e.exports={loader:"styles_loader__3QW4r",changeSize:"styles_changeSize__8-IZj"}},function(e,t,n){e.exports={messageContent:"styles_messageContent__1SmNT"}},,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),o=n(23),a=n.n(o),c=(n(37),n(4)),i=(n(38),n(24)),l=n.n(i),u=n(1),j=s.a.memo((function(e){var t=e.children,n=e.style,r=e.onClick;return Object(u.jsx)("button",{className:l.a.iconButton,style:n,onClick:r,children:t})})),d=n(25),h=n.n(d),b=function(e){var t=e.height,n=e.width,r=e.fill,s=e.stroke,o=e.strokeWidth;return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:t,width:n,viewBox:"0 0 24 24",children:Object(u.jsx)("path",{fill:r,stroke:s,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})})},O=b;b.defaultProps={height:"1.5rem",width:"1.5rem",fill:"none",stroke:"#f7f7f7",strokeWidth:1.5};var f=function(e){var t=e.height,n=e.width,r=e.fill,s=e.stroke,o=e.strokeWidth;return Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:t,width:n,viewBox:"0 0 24 24",fill:r,stroke:s,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(u.jsx)("path",{fill:"none",stroke:"none",d:"M0 0h24v24H0z"}),Object(u.jsx)("path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"}),Object(u.jsx)("path",{d:"M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"}),Object(u.jsx)("path",{d:"M19 11h2m-1 -1v2"})]})},m=f;f.defaultProps={height:"1.5rem",width:"1.5rem",fill:"none",stroke:"#666",strokeWidth:1.5};var p=function(e){return!e||"string"===typeof e&&""===e.trim()},g=Object.freeze({DARK:"dark",LIGHT:"light"}),x=function(){return p(localStorage.getItem("swooshTheme"))?g.LIGHT:localStorage.getItem("swooshTheme")},C=function(e){localStorage.setItem("swooshTheme",e),document.documentElement.setAttribute("theme-mode",e)},v=function(e,t){return x()===g.LIGHT?e:t},k=function(e){var t=Object(r.useState)(!1),n=Object(c.a)(t,2),s=n[0],o=n[1];Object(r.useEffect)((function(){return a()}),[]);var a=function(){var e=x();o(e===g.DARK),C(e)};return Object(u.jsxs)("div",{className:h.a.page,children:[Object(u.jsx)(j,{onClick:function(){var t=x();o(t!==g.DARK),C(t===g.DARK?g.LIGHT:g.DARK),"function"===typeof e.shouldComponentUpdate&&e.shouldComponentUpdate((new Date).getTime())},style:{display:"flex",alignItems:"center",position:"absolute",top:"16px",right:"16px",padding:"0rem",cursor:"pointer"},children:s?Object(u.jsx)(O,{}):Object(u.jsx)(m,{})}),e.children]})},y=n(16),w=n(6),_=n(26),S=n.n(_),N=function(){return Object(u.jsxs)("div",{className:S.a.headerContent,children:["Sw",Object(u.jsx)("span",{children:"oo"}),"sh"]})},I=n(12),M=n.n(I),L="https://swoosh-server.herokuapp.com/api/v1/messages/",W=Object.freeze({MINUTE:"Minute",HOUR:"Hour",DAY:"Day"}),H=function(e,t){var n=36e5;switch(e){case W.MINUTE:return 6e4*t;case W.HOUR:return t*n;case W.DAY:return 864e5*t}},F=Object.freeze({MIN_15:{name:"15 Minutes",value:H(W.MINUTE,15)},MIN_30:{name:"30 Minutes",value:H(W.MINUTE,30)},HOUR_1:{name:"1 Hour",value:H(W.HOUR,1)},HOUR_3:{name:"3 Hours",value:H(W.HOUR,3)},HOUR_6:{name:"6 Hours",value:H(W.HOUR,6)},HOUR_12:{name:"12 Hours",value:H(W.HOUR,12)},DAY_1:{name:"1 Day",value:H(W.DAY,1)}}),R=Object.freeze({INFO:1,WARNING:2,ERROR:3,SUCCESS:4}),T=function(e){var t=e.height,n=e.width,r=e.fill,s=e.strokeColor,o=e.strokeWidth,a=e.style;return Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:a,height:t,width:n,viewBox:"0 0 24 24",fill:r,stroke:s,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(u.jsx)("path",{fill:"none",stroke:"none",d:"M0 0h24v24H0z"}),Object(u.jsx)("polyline",{points:"6 9 12 15 18 9"})]})},E=T;T.defaultProps={height:"1rem",width:"1rem",fill:"none",strokeColor:"#666",strokeWidth:1.5};var U=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],s=t[1];return Object(u.jsxs)("div",{className:M.a.descriptionContainer,children:[Object(u.jsxs)("div",{className:M.a.descriptionHeading,children:[Object(u.jsx)("div",{className:M.a.descriptionLabel,children:"How it Works?"}),Object(u.jsx)(j,{onClick:function(){return s(!n)},style:{padding:"0rem",cursor:"pointer"},children:Object(u.jsx)(E,{strokeColor:v("#666","#f7f7f7"),style:{transform:n?"rotate(180deg)":"rotate(0)",transition:"transform 0.5s ease-in-out"}})})]}),n&&Object(u.jsx)("p",{className:M.a.descriptionContent,children:"Excepteur pariatur nulla in ulla\nmco aliqua ea cupidatat incididunt proident culpa sint non exercitation deserunt dolor."})]})},B=n(27),P=n.n(B),D=s.a.memo((function(e){var t=e.inputVal,n=e.handleInputChange,r=e.placeholderValue,s=e.rows,o=e.style;return Object(u.jsx)("textarea",{className:P.a.inputContent,style:o,onChange:function(e){return n(e.target.value)},placeholder:r,rows:s,value:t})})),V=n(10),z=n(32),A=n(11),K=n.n(A),Y=function(e){var t=e.validity,n=e.handleValidityChange;return Object(u.jsx)(z.a,{onChange:function(e){return n(e)},selectedItem:t,itemToString:function(e){return e?e.name.toString():""},children:function(e){var t=e.isOpen,n=e.inputValue,r=e.selectedItem,s=e.highlightedIndex,o=e.getInputProps,a=e.getToggleButtonProps,c=e.getMenuProps,i=e.getItemProps;return Object(u.jsxs)("div",{className:K.a.selectContainer,children:[Object(u.jsxs)("div",{className:K.a.selectContent,children:[Object(u.jsx)("input",Object(V.a)({className:K.a.selectInput},o({placeholder:"Validity Duration",value:n}))),Object(u.jsx)(j,Object(V.a)(Object(V.a)({},a()),{},{style:{padding:"0rem",cursor:"pointer"},children:Object(u.jsx)(E,{strokeColor:v("#666","#f7f7f7"),style:{transform:t?"rotate(180deg)":"rotate(0)",transition:"transform 0.5s ease-in-out"}})}))]}),t?Object(u.jsx)("div",Object(V.a)(Object(V.a)({className:K.a.selectListContainer},c()),{},{children:Object.entries(F).filter((function(e){return p(n)||e[1].name.toLowerCase().includes(n.toLowerCase())})).map((function(e,t){return Object(u.jsx)("div",Object(V.a)(Object(V.a)({className:K.a.selectListItem},i({item:e[1],index:t,key:t})),{},{style:{color:r===e[1]&&"#36b6ab",filter:s===t&&"brightness(90%)"},children:e[1].name}))}))})):null]})}})},G=n(28),J=n.n(G),q=s.a.memo((function(e){var t=e.children,n=e.style,r=e.onClick;return Object(u.jsx)("button",{className:J.a.buttonContent,style:n,onClick:r,children:t})})),Q=n(18),Z=n.n(Q),X=function(e){var t=e.height,n=e.width,r=e.fillColor,s=e.strokeColor,o=e.strokeWidth;return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:t,width:n,viewBox:"0 0 24 24",children:Object(u.jsx)("path",{fill:r,stroke:s,strokeWidth:o,d:"M6 18L18 6M6 6l12 12"})})},$=X;X.defaultProps={height:"1.5rem",width:"1.5rem",fillColor:"none",strokeColor:"#fff",strokeWidth:1.5};var ee=function(e){var t=e.height,n=e.width,r=e.fillColor,s=e.strokeColor,o=e.strokeWidth;return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:t,width:n,viewBox:"0 0 24 24",children:Object(u.jsx)("path",{fill:r,stroke:s,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})},te=ee;ee.defaultProps={height:"1.5rem",width:"1.5rem",fillColor:"none",strokeColor:"#fff",strokeWidth:1.5};var ne=function(e){var t=e.height,n=e.width,r=e.fillColor,s=e.strokeColor,o=e.strokeWidth;return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:t,width:n,viewBox:"0 0 24 24",children:Object(u.jsx)("path",{fill:r,stroke:s,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})},re=ne;ne.defaultProps={height:"1.5rem",width:"1.5rem",fillColor:"none",strokeColor:"#fff",strokeWidth:1.5};var se=function(e){var t=e.height,n=e.width,r=e.fillColor,s=e.strokeColor,o=e.strokeWidth;return Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:t,width:n,viewBox:"0 0 24 24",fill:r,stroke:s,strokeWidth:o,children:[Object(u.jsx)("polyline",{points:"9 11 12 14 20 6"}),Object(u.jsx)("path",{d:"M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"})]})},oe=se;se.defaultProps={height:"1.5rem",width:"1.5rem",fillColor:"none",strokeColor:"#fff",strokeWidth:1.5};var ae=function(e){var t=e.height,n=e.width,r=e.fillColor,s=e.strokeColor,o=e.strokeWidth;return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:t,width:n,viewBox:"0 0 24 24",children:Object(u.jsx)("path",{fill:r,stroke:s,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})},ce=ae;ae.defaultProps={height:"1.5rem",width:"1.5rem",fillColor:"none",strokeColor:"#fff",strokeWidth:1.5};var ie=function(e,t){return setTimeout(e,t)},le=ie;ie.defaultProps={delay:0};var ue=function(e){var t=e.message,n=e.severity,s=e.handleClose,o=Object(r.useState)(0),a=Object(c.a)(o,2),i=a[0],l=a[1];Object(r.useEffect)((function(){return l(le(s,3e3))}),[]);var d=Object(r.useMemo)((function(){switch(n){case R.INFO:return Object(u.jsx)(re,{});case R.WARNING:return Object(u.jsx)(ce,{});case R.ERROR:return Object(u.jsx)(te,{});default:return Object(u.jsx)(oe,{})}}),[n]);return Object(u.jsxs)("div",{className:Z.a.snackbarContainer,children:[d,Object(u.jsx)("div",{className:Z.a.message,children:t}),Object(u.jsx)(j,{onClick:function(){clearTimeout(i),s()},style:{padding:"0rem",cursor:"pointer"},children:Object(u.jsx)($,{})})]})},je=n(29),de=n.n(je),he=function(e){var t=e.loading;return Object(u.jsx)(r.Fragment,{children:t?Object(u.jsx)("div",{className:de.a.loader}):null})},be=n(13),Oe=n.n(be),fe=function(e){var t=e.error,n=t.message,s=t.status,o=e.buttonLabel,a=e.onClick;return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsxs)("div",{className:Oe.a.errorContainer,children:[Object(u.jsx)("div",{className:Oe.a.errorStatus,children:s}),Object(u.jsxs)("div",{className:Oe.a.errorContent,children:[n,Object(u.jsx)("br",{}),"Click on the button below to create a message."]})]}),"function"===typeof a&&Object(u.jsx)(q,{onClick:a,style:{margin:"1rem auto",padding:"0.5rem 0.75rem"},children:o})]})},me=n(19),pe=n.n(me),ge=function(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),n=t[0],s=t[1],o=Object(r.useState)(""),a=Object(c.a)(o,2),i=a[0],l=a[1],j=Object(r.useState)(F.MIN_15),d=Object(c.a)(j,2),h=d[0],b=d[1],O=Object(r.useState)(!1),f=Object(c.a)(O,2),m=f[0],g=f[1],x=Object(r.useState)(!1),C=Object(c.a)(x,2),v=C[0],k=C[1],y=Object(r.useState)(null),w=Object(c.a)(y,2),_=w[0],S=w[1],N=Object(r.useState)(""),I=Object(c.a)(N,2),M=I[0],W=I[1],H=Object(r.useState)(R.INFO),T=Object(c.a)(H,2),E=T[0],U=T[1],B=Object(r.useState)(!1),P=Object(c.a)(B,2),V=P[0],z=P[1],A=Object(r.useState)(""),K=Object(c.a)(A,2),G=K[0],J=K[1],Q=Object(r.useState)(!1),Z=Object(c.a)(Q,2),X=Z[0],$=Z[1],ee=Object(r.useCallback)((function(e){return s(e)}),[]),te=Object(r.useCallback)((function(e){return l(e)}),[]),ne=Object(r.useCallback)((function(e){return b(e)}),[]),re=Object(r.useCallback)((function(){return k(!1)}),[]),se=Object(r.useCallback)((function(){S(null),J("")}),[]),oe=Object(r.useCallback)((function(){var e=window.open(G,"_blank","noopener,noreferrer");e&&(e.opener=null)}),[G]),ae=Object(r.useCallback)((function(){var e=p(n)||p(i)||p(h)?"Missing either Text to Encrypt or Secret Key or Validity Duration!":"",t=(p(n)||p(i))&&R.INFO;W(e),U(t),k(!p(e)),z(!!p(e)),le((function(){z(!1),ee(""),te(""),ne(F.MIN_15)}))}),[n,i,h]),ce=Object(r.useCallback)((function(){g(!0),fetch(L,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:n,validFor:h.value,secretKey:i})}).then((function(e){return e.json()})).then((function(e){var t;e.error&&S({message:e.error.message,status:e.status}),J((null===(t=e.data)||void 0===t?void 0:t.url)||"")})).catch((function(e){S({message:e.message,status:"500"})})).finally((function(){g(!1)}))}),[n,i,h]);Object(r.useEffect)((function(){return V&&ce()}),[V,ce]);var ie=Object(r.useCallback)((function(){p(G)||p(function(e){var t=document.createElement("textarea"),n=null;t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}catch(r){n=r}return document.body.removeChild(t),n}(G))&&($(!0),le((function(){return $(!1)}),2e3))}),[G]);return Object(u.jsxs)(r.Fragment,{children:[p(_)?Object(u.jsx)(r.Fragment,{children:p(G)?Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)(D,{inputVal:n,handleInputChange:ee,placeholderValue:"Enter Text",rows:4}),Object(u.jsxs)("div",{className:pe.a.container,children:[Object(u.jsx)(D,{inputVal:i,handleInputChange:te,placeholderValue:"Enter Secret Key",rows:1,style:{marginTop:"0rem"}}),Object(u.jsx)(Y,{validity:h,handleValidityChange:ne})]}),Object(u.jsx)(q,{onClick:ae,style:{margin:"1rem auto",padding:"0.5rem 0.75rem"},children:"Encrypt"})]}):Object(u.jsxs)(r.Fragment,{children:[Object(u.jsxs)("p",{className:pe.a.urlContent,onClick:oe,children:[" ",G," "]}),Object(u.jsxs)(q,{onClick:ie,style:{margin:"0 auto",padding:"0.25rem 0.5rem"},children:["Cop",X?"ied!":"y"]}),Object(u.jsx)(q,{onClick:se,style:{margin:"1rem auto",padding:"0.5rem 0.75rem"},children:"Create Message"})]})}):Object(u.jsx)(fe,{error:_,buttonLabel:"Create Message",onClick:se}),Object(u.jsx)(he,{loading:m}),v&&Object(u.jsx)(ue,{message:M,severity:E,handleClose:re})]})},xe=n(30),Ce=n.n(xe),ve=function(e){var t=Object(w.f)().id,n=Object(r.useState)(L),s=Object(c.a)(n,2),o=s[0],a=s[1],i=Object(r.useState)(!1),l=Object(c.a)(i,2),j=l[0],d=l[1],h=Object(r.useState)(null),b=Object(c.a)(h,2),O=b[0],f=b[1],m=Object(r.useState)(""),g=Object(c.a)(m,2),x=g[0],C=g[1],v=Object(r.useState)(""),k=Object(c.a)(v,2),y=k[0],_=k[1],S=Object(r.useState)(!1),N=Object(c.a)(S,2),I=N[0],M=N[1],W=Object(r.useState)(""),H=Object(c.a)(W,2),F=H[0],T=H[1],E=Object(r.useState)(R.INFO),U=Object(c.a)(E,2),B=U[0],P=U[1],V=Object(r.useState)(!1),z=Object(c.a)(V,2),A=z[0],K=z[1],Y=Object(r.useCallback)((function(e){f({message:e.error.message,status:e.status})}),[]);Object(r.useEffect)((function(){d(!0),fetch(o+t).then((function(e){return e.json()})).then((function(e){p(e.error)||Y(e),a(e.data?o+t+"/decrypt":o)})).catch((function(e){f({message:e.message,status:"500"})})).finally((function(){d(!1)}))}),[]);var G=Object(r.useCallback)((function(e){return _(e)}),[]),J=Object(r.useCallback)((function(){return M(!1)}),[]),Q=Object(r.useCallback)((function(){return e.history.replace("/")}),[]),Z=Object(r.useCallback)((function(){var e=p(y)?"Missing Secret Key!":"",t=p(y)&&R.INFO;T(e),P(t),M(!p(e)),K(!!p(e)),le((function(){K(!1),G("")}))}),[y]),X=Object(r.useCallback)((function(){d(!0),fetch(o+"?secretKey="+y).then((function(e){return e.json()})).then((function(e){var t;p(e.error)||Y(e),C((null===(t=e.data)||void 0===t?void 0:t.message)||"")})).catch((function(e){f({message:e.message,status:"500"})})).finally((function(){d(!1)}))}),[o,y]);return Object(r.useEffect)((function(){return A&&X()}),[A,X]),Object(u.jsx)(r.Fragment,{children:p(O)?Object(u.jsxs)(r.Fragment,{children:[p(x)?Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)(D,{inputVal:y,placeholderValue:"Enter Secret Key",rows:1,handleInputChange:G}),Object(u.jsx)(q,{onClick:Z,style:{margin:"1rem auto",padding:"0.5rem 0.75rem"},children:"Decrypt"})]}):Object(u.jsxs)(r.Fragment,{children:[Object(u.jsxs)("p",{className:Ce.a.messageContent,children:[" ",x," "]}),Object(u.jsx)(q,{onClick:Q,style:{margin:"1rem auto",padding:"0.5rem 0.75rem"},children:"Create Message"})]}),Object(u.jsx)(he,{loading:j}),I&&Object(u.jsx)(ue,{message:F,severity:B,handleClose:J})]}):Object(u.jsx)(r.Fragment,{children:Object(u.jsx)(fe,{error:O,buttonLabel:"Create Message",onClick:Q})})})},ke=function(e){var t=Object(r.useCallback)((function(){return e.history.replace("/")}),[]);return Object(u.jsx)(fe,{error:{message:"Page Not Found!",status:"404"},buttonLabel:"Create Message",onClick:t})},ye=function(){return Object(u.jsxs)(y.a,{children:[Object(u.jsx)(N,{}),Object(u.jsx)(U,{}),Object(u.jsxs)(w.c,{children:[Object(u.jsx)(w.a,{exact:!0,path:"/text-encryptor/",component:ge}),Object(u.jsx)(w.a,{exact:!0,path:"/messages/:id",component:ve}),Object(u.jsx)(w.a,{path:"*",component:ke})]})]})},we=function(){var e=Object(r.useState)(),t=Object(c.a)(e,2)[1];return Object(u.jsx)(k,{shouldComponentUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e&&t(e)},children:Object(u.jsx)("div",{className:"appContainer",children:Object(u.jsx)(ye,{})})})},_e=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),o(e),a(e)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(we,{})}),document.getElementById("root")),_e()}],[[46,1,2]]]);
//# sourceMappingURL=main.2a02afa1.chunk.js.map