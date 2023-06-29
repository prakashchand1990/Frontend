"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[879],{5862:function(){},5879:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(4165),r=n(5861),s=n(9439),c=n(390),o="SaasProjects_projects_wrapper__bhYGo",i="SaasProjects_project_box__gtodz",l=n(5545),d=n(5400),u=n(9134),m=n(2600),h=n(9432),p=n(5537),f=n(3599),x=(n(5862),n(2559)),j=function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"col-sm-6 mt-4",children:(0,x.jsxs)("div",{className:"bg-white text-center text-hover-underline d-block h-100 rounded-3 shadow-sm overflow-hidden",children:[(0,x.jsx)("figure",{className:"m-0 ratio ratio-4x3",children:(0,x.jsx)(f.Z,{className:"w-100 h-100 object-fit-cover"})}),(0,x.jsx)("h4",{className:"font-body p-3 mb-0",children:(0,x.jsx)(f.Z,{})})]})})})},v=function(){var e=(0,c.useState)([]),t=(0,s.Z)(e,2),n=t[0],v=t[1],b=(0,c.useState)([]),N=(0,s.Z)(b,2),Z=N[0],g=N[1],w=(0,c.useState)([]),y=(0,s.Z)(w,2),k=y[0],P=y[1],T=(0,l.s0)();(0,c.useEffect)((function(){function e(){return(e=(0,r.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(m.Z.BACKEND_URL,"/api/home-new?populate[SaasProject][populate]=*&populate[Button][populate]=*"));case 3:t=e.sent,setTimeout((function(){v(t.data.data.SaasProject.Header),g(t.data.data.SaasProject.Button)}),625),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function t(){return(t=(0,r.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(m.Z.BACKEND_URL,"/api/saas-projects?populate=*"));case 3:t=e.sent,setTimeout((function(){P(t.data.data)}),625),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[]);var C=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.R)(t,n);case 2:r=e.sent,T("/projects/".concat(r.data.data[0].PostURL),{state:r.data.data[0].Description});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("section",{className:"py-5",children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("div",{className:"row",children:(0,x.jsxs)("div",{className:"col-sm-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 mb-4",children:[(0,x.jsx)("h2",{className:"text-center fw-bold mb-4",children:n.Title?n.Title:(0,x.jsx)("div",{className:"col-sm-4 mx-auto",children:(0,x.jsx)(f.Z,{})})}),(0,x.jsx)("div",{className:"text-center",children:n.Description?(0,h.ZP)("".concat(n.Description)):(0,x.jsx)("div",{className:"col-sm-8 col-lg-10 mx-auto",children:(0,x.jsx)(f.Z,{count:3})})})]})}),(0,x.jsx)("div",{className:"row ".concat(o),children:k&&k.length>0?k.slice(0,4).map((function(e,t){return(0,x.jsx)("div",{className:"col-sm-6 mt-4 ".concat(i),children:(0,x.jsxs)(d.rU,{className:"bg-white text-center text-hover-underline d-block h-100 rounded-3 shadow-sm overflow-hidden",onClick:function(t){return C(e.PostURL,"saas-projects")},children:[e.ProjectThumbnailVideo&&e.ProjectThumbnailVideo.url.length>0?(0,x.jsx)("div",{className:"m-0 ratio ratio-4x3 ratio-16x999 overflow-hidden",children:(0,x.jsxs)("video",{width:"320",height:"240",autoPlay:!0,className:"bg-gray",style:{transform:"scale(1.4)"},children:[(0,x.jsx)("source",{src:"".concat(m.Z.BACKEND_URL).concat(e.ProjectThumbnailVideo.url),type:"video/mp4"}),"Your browser does not support the video tag."]})}):(0,x.jsx)("figure",{className:"m-0 ratio ratio-4x3",children:(0,x.jsx)("img",{src:"\n                                                    ".concat(m.Z.BACKEND_URL).concat(e.ProjectThumbnail.formats.medium.url,"\n                                                "),alt:e.ProjectThumbnail.alternativeText,loading:"lazy",className:"w-100 h-100 object-fit-cover"})}),(0,x.jsx)("h4",{className:"font-body p-3 mb-0",children:e.ProjectTitle})]})},e.id)})):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(j,{}),(0,x.jsx)(j,{}),(0,x.jsx)(j,{}),(0,x.jsx)(j,{})]})}),(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-sm-12 text-center mt-5",children:Z.Title?(0,x.jsx)(d.rU,{className:"btn btn-secondary",to:Z.URL,children:Z.Title}):(0,x.jsx)(f.Z,{className:"btn btn-outline btn-skeleton btn-min-w w-auto"})})})]})})})}},3599:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(9439),r=n(1413),s=n(5987),c=n(390),o=["count","wrapper","className","containerClassName","containerTestId","circle","style"],i=c.createContext({}),l=!0;function d(e){for(var t,n,d,u=e.count,m=void 0===u?1:u,h=e.wrapper,p=e.className,f=e.containerClassName,x=e.containerTestId,j=e.circle,v=void 0!==j&&j,b=e.style,N=(0,s.Z)(e,o),Z=c.useContext(i),g=(0,r.Z)({},N),w=0,y=Object.entries(N);w<y.length;w++){var k=(0,a.Z)(y[w],2),P=k[0];"undefined"===typeof k[1]&&delete g[P]}var T=(0,r.Z)((0,r.Z)((0,r.Z)({},Z),g),{},{circle:v}),C=(0,r.Z)((0,r.Z)({},b),function(e){var t=e.baseColor,n=e.highlightColor,a=e.width,r=e.height,s=e.borderRadius,c=e.circle,o=e.direction,i=e.duration,d=e.enableAnimation,u=void 0===d?l:d,m={};return"rtl"===o&&(m["--animation-direction"]="reverse"),"number"===typeof i&&(m["--animation-duration"]="".concat(i,"s")),u||(m["--pseudo-element-display"]="none"),"string"!==typeof a&&"number"!==typeof a||(m.width=a),"string"!==typeof r&&"number"!==typeof r||(m.height=r),"string"!==typeof s&&"number"!==typeof s||(m.borderRadius=s),c&&(m.borderRadius="50%"),"undefined"!==typeof t&&(m["--base-color"]=t),"undefined"!==typeof n&&(m["--highlight-color"]=n),m}(T)),_="react-loading-skeleton";p&&(_+=" ".concat(p));for(var R=null!==(t=T.inline)&&void 0!==t&&t,E=[],U=Math.ceil(m),S=0;S<U;S++){var D=C;if(U>m&&S===U-1){var L=null!==(n=D.width)&&void 0!==n?n:"100%",A=m%1,B="number"===typeof L?L*A:"calc(".concat(L," * ").concat(A,")");D=(0,r.Z)((0,r.Z)({},D),{},{width:B})}var F=c.createElement("span",{className:_,style:D,key:S},"\u200c");R?E.push(F):E.push(c.createElement(c.Fragment,{key:S},F,c.createElement("br",null)))}return c.createElement("span",{className:f,"data-testid":x,"aria-live":"polite","aria-busy":null!==(d=T.enableAnimation)&&void 0!==d?d:l},h?E.map((function(e,t){return c.createElement(h,{key:t},e)})):E)}}}]);
//# sourceMappingURL=879.dce283d8.chunk.js.map