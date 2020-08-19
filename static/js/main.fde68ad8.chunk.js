(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{280:function(e,t,a){e.exports=a(326)},286:function(e,t,a){},326:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),l=(a(285),a(99)),c=a(81),s={typography:{fontFamily:["Comfortaa","cursive"].join(",")},overrides:{MUIDataTable:{paper:{overflowX:"auto"}}}},m=Object(c.a)({},s),u=Object(c.a)({},s,{palette:{type:"dark"}}),d=a(354),h=a(357),v=(a(286),a(70)),p=a(170),f=a.n(p),g=a(258),E=a(259),b=a(260),w=a(269),C=a(270),k=a(261),y=a.n(k).a.create({baseURL:"https://api.covid19api.com"}),T=a(356),x=a(347),O=a(351),A=a(52),R=function(e){return r.a.createElement(x.a,null,r.a.createElement(O.a,null,r.a.createElement(A.a,{align:"center",className:"text-".concat(e.variant),component:"p"},e.title),r.a.createElement(A.a,{align:"center",className:"text-".concat(e.variant),component:"p"},e.total?e.total.toLocaleString():e.total)))},S=a(352),D=a(353),j=function(e){var t=e.summary,a=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Global Statistics"),a?r.a.createElement(S.a,{container:!0,spacing:1},r.a.createElement(S.a,{item:!0,xs:!0},r.a.createElement(D.a,{variant:"rect",height:100})),r.a.createElement(S.a,{item:!0,xs:!0},r.a.createElement(D.a,{variant:"rect",height:100})),r.a.createElement(S.a,{item:!0,xs:!0},r.a.createElement(D.a,{variant:"rect",height:100})),r.a.createElement(S.a,{item:!0,xs:!0},r.a.createElement(D.a,{variant:"rect",height:100}))):function(){var e=[{variant:"confirmed",title:"CONFIRMED",total:t.TotalConfirmed},{variant:"active",title:"ACTIVE",total:t.TotalActive},{variant:"recovered",title:"RECOVERED",total:t.TotalRecovered},{variant:"deceased",title:"DECEASED",total:t.TotalDeaths}];return r.a.createElement(S.a,{container:!0,spacing:1},e.map((function(e){return r.a.createElement(S.a,{key:e.title,item:!0,xs:6,sm:6,md:!0},r.a.createElement(R,{animation:"wave",variant:e.variant,title:e.title,total:e.total}))})))}())},U=a(262),I=a.n(U),N=function(e){return{style:{textAlign:"right"}}},P=function(e){return e.toLocaleString()},W=[{name:"COUNTRY"},{name:"CONFIRMED",options:{sortDirection:"desc",setCellProps:N,setCellHeaderProps:N,customBodyRender:function(e){return P(e)}}},{name:"ACTIVE",options:{setCellProps:N,setCellHeaderProps:N,customBodyRender:function(e){return P(e)}}},{name:"RECOVERED",options:{setCellProps:N,setCellHeaderProps:N,customBodyRender:function(e){return P(e)}}},{name:"DECEASED",options:{setCellProps:N,setCellHeaderProps:N,customBodyRender:function(e){return P(e)}}}],G={selectableRows:"none",print:!1,download:!1,elevation:2,responsive:"scrollFullHeight"},F=function(e){var t=[];return e&&e.forEach((function(e){t.push([e.Country,e.TotalConfirmed,e.TotalConfirmed-e.TotalRecovered-e.TotalDeaths,e.TotalRecovered,e.TotalDeaths])})),t};function H(e){var t=e.countries,a=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Country-wise Statistics"),a?r.a.createElement(S.a,{container:!0,spacing:1},r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(D.a,{animation:"wave",variant:"rect",height:50})),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(D.a,{animation:"wave",variant:"rect",height:50})),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(D.a,{animation:"wave",variant:"rect",height:50}))):r.a.createElement(I.a,{data:F(t),columns:W,options:G}))}var L=a(95),z=a(266),B=a.n(z),M=a(247),V=a(355),K=a(238),J=a(267),_=a.n(J),X=a(268),Y=a.n(X),$=a(164),q=Object(K.a)((function(e){return{rightContent:{marginLeft:"auto",marginRight:-1},lastUpdatedTitle:Object(L.a)({fontSize:"0.7rem",textTransform:"uppercase",textAlign:"right"},e.breakpoints.down("xs"),{fontSize:"0.6rem"}),lastUpdatedTime:Object(L.a)({fontSize:"0.8rem",textTransform:"uppercase"},e.breakpoints.down("xs"),{fontSize:"0.7rem"})}})),Q=function(e){var t="dark"===e.theme?r.a.createElement(_.a,null):r.a.createElement(Y.a,null),a="dark"===e.theme?"default":"dark";return r.a.createElement($.a,{onClick:function(){return e.toggleTheme(a)},edge:"start",color:"inherit","aria-label":"theme-toggle"},t)};function Z(e){var t=q();return r.a.createElement(V.a,{position:"sticky",color:"default",elevation:0},r.a.createElement(M.a,null,r.a.createElement(Q,{theme:e.theme,toggleTheme:function(t){e.toggleTheme(t)}}),r.a.createElement(A.a,{component:"h1"},"COVID-19 TRACKER"),e.lastUpdatedAt?r.a.createElement("div",{className:t.rightContent},r.a.createElement(A.a,{className:t.lastUpdatedTitle,component:"h6"},"LAST UPDATED"),r.a.createElement(A.a,{className:t.lastUpdatedTime,component:"h6"},r.a.createElement(B.a,{fromNow:!0},e.lastUpdatedAt))):null))}var ee=a(358);function te(){return r.a.createElement("div",{style:{textAlign:"center",marginTop:"15px"}},r.a.createElement("p",null,"Developed by ",r.a.createElement(ee.a,{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/naganandakk"},"Nagananda K K")))}var ae=function(e){Object(C.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={summary:{},countries:[],articles:[],lastUpdatedAt:null,loading:{articles:!0,summary:!0,countries:!0,chartData:!1}},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.fetchGlobalCovidStats(),this.refreshDataHandler=setInterval((function(){return e.fetchGlobalCovidStats()}),3e5)}},{key:"componentWillUnmount",value:function(){clearInterval(this.refreshDataHandler)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{theme:this.props.theme,toggleTheme:this.props.toggleTheme,lastUpdatedAt:this.state.lastUpdatedAt}),r.a.createElement(T.a,{maxWidth:"xl"},r.a.createElement(S.a,{container:!0,spacing:2},r.a.createElement(S.a,{item:!0,xs:12,md:3}),r.a.createElement(S.a,{item:!0,xs:12,md:6},r.a.createElement(j,{loading:this.state.loading.summary,summary:this.state.summary}),r.a.createElement(H,{loading:this.state.loading.countries,countries:this.state.countries})))),r.a.createElement(te,null))}},{key:"fetchGlobalCovidStats",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get("/summary");case 3:t=e.sent,this.setState({summary:Object(c.a)({},t.data.Global,{TotalActive:t.data.Global.TotalConfirmed-t.data.Global.TotalRecovered-t.data.Global.TotalDeaths}),countries:t.data.Countries,lastUpdatedAt:t.data.Date,loading:Object(c.a)({},this.state.loading,{summary:!1,countries:!1})}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}]),a}(r.a.Component),ne=a(359),re=a(248),oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e){if("serviceWorker"in navigator){if(new URL("/covid-19-tracker",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/covid-19-tracker","/service-worker.js");oe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):le(e,t)})).catch((function(){console.log("No internet connection found. Index is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):le(t,e)}))}}function le(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ce=function(){var e=r.a.useState(!1),t=Object(l.a)(e,2),a=t[0],o=t[1],i=r.a.useState(null),c=Object(l.a)(i,2),s=c[0],m=c[1],u=function(e){o(!0),m(e.waiting)};Object(n.useEffect)((function(){ie({onUpdate:u})}),[]);var d=function(){s&&s.postMessage({type:"SKIP_WAITING"}),o(!1),window.location.reload(!0)};return r.a.createElement(ne.a,{open:a,message:"A new version is available!",onClick:d,anchorOrigin:{vertical:"top",horizontal:"center"},action:r.a.createElement(re.a,{color:"inherit",size:"small",onClick:d},"Reload")})};function se(){var e=r.a.useState("dark"),t=Object(l.a)(e,2),a=t[0],n=t[1];return r.a.createElement(d.a,{theme:"dark"===a?Object(v.a)(u):Object(v.a)(m)},r.a.createElement(h.a,null),r.a.createElement(ae,{theme:a,toggleTheme:function(e){n(e)}}),r.a.createElement(ce,null))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),ie()}},[[280,1,2]]]);
//# sourceMappingURL=main.fde68ad8.chunk.js.map