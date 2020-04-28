(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{111:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),c=(a(91),a(28)),l=a.n(c),s=a(43),m=a(48),u=a(66),h=a(67),d=a(72),g=a(73),v=a(68),f=a.n(v),E={fontFamily:["Comfortaa","cursive"].join(",")},p={typography:E},w={typography:E,palette:{type:"dark"}},b=a(32),y=a.n(b),k=y.a.create({baseURL:"https://api.covid19api.com"}),T=["f251266458e947ba94e465c731e10a2a","afbacd1a0f8a435e8971084223998783"],x=y.a.create({baseURL:"https://newsapi.org/v2"});x.interceptors.request.use((function(e){var t=Math.floor(Math.random()*T.length),a=T[t];return e.headers.Authorization="Bearer ".concat(a),e}));var S=x,C=a(172),A=a(170),O=a(171),D=(a(111),a(153)),R=a(156),j=a(120),N=function(e){return r.a.createElement(D.a,null,r.a.createElement(R.a,null,r.a.createElement(j.a,{align:"center",className:"text-".concat(e.variant),component:"p"},e.title),r.a.createElement(j.a,{align:"center",className:"text-".concat(e.variant),component:"p"},e.total?e.total.toLocaleString():e.total)))},U=a(157),I=a(158),L=function(e){var t=e.summary,a=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GLOBAL STATISTICS"),a?r.a.createElement(U.a,{container:!0,spacing:1},r.a.createElement(U.a,{item:!0,xs:!0},r.a.createElement(I.a,{variant:"rect",height:100})),r.a.createElement(U.a,{item:!0,xs:!0},r.a.createElement(I.a,{variant:"rect",height:100})),r.a.createElement(U.a,{item:!0,xs:!0},r.a.createElement(I.a,{variant:"rect",height:100})),r.a.createElement(U.a,{item:!0,xs:!0},r.a.createElement(I.a,{variant:"rect",height:100}))):function(){var e=[{variant:"confirmed",title:"CONFIRMED",total:t.TotalConfirmed},{variant:"active",title:"ACTIVE",total:t.TotalActive},{variant:"recovered",title:"RECOVERED",total:t.TotalRecovered},{variant:"deceased",title:"DECEASED",total:t.TotalDeaths}];return r.a.createElement(U.a,{container:!0,spacing:1},e.map((function(e){return r.a.createElement(U.a,{key:e.title,item:!0,xs:6,sm:6,md:!0},r.a.createElement(N,{animation:"wave",variant:e.variant,title:e.title,total:e.total}))})))}())},W=a(49),P=a(159),z=a(74),F=a(160),M=a(161),G=a(162),B=a(163),q=a(164),K=a(173);function V(e){var t=r.a.useState(0),a=Object(W.a)(t,2),n=a[0],i=a[1],o=r.a.useState(10),c=Object(W.a)(o,2),l=c[0],s=c[1],m=e.countries,u=e.loading,h=function(e,t){i(t)},d=function(e){s(parseInt(e.target.value,10)),i(0)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"COUNTRY-WISE STATISTICS"),u?r.a.createElement(U.a,{container:!0,spacing:1},r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(I.a,{animation:"wave",variant:"rect",height:50})),r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(I.a,{animation:"wave",variant:"rect",height:50})),r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(I.a,{animation:"wave",variant:"rect",height:50}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{component:z.a},r.a.createElement(F.a,{"aria-label":"country-wise covid-19 information"},r.a.createElement(M.a,null,r.a.createElement(G.a,null,r.a.createElement(B.a,null,"Country"),r.a.createElement(B.a,{align:"right"},"Confirmed"),r.a.createElement(B.a,{align:"right"},"Active"),r.a.createElement(B.a,{align:"right"},"Recovered"),r.a.createElement(B.a,{align:"right"},"Deceased"))),r.a.createElement(q.a,null,m.slice(n*l,n*l+l).map((function(e){return r.a.createElement(G.a,{key:e.CountryCode},r.a.createElement(B.a,{component:"th",scope:"row"},e.Country),r.a.createElement(B.a,{align:"right"},e.TotalConfirmed.toLocaleString()),r.a.createElement(B.a,{align:"right"},(e.TotalConfirmed-e.TotalRecovered-e.TotalDeaths).toLocaleString()),r.a.createElement(B.a,{align:"right"},e.TotalRecovered.toLocaleString()),r.a.createElement(B.a,{align:"right"},e.TotalDeaths.toLocaleString()))}))))),r.a.createElement(K.a,{rowsPerPageOptions:[5,10,15,20],component:"div",count:m.length,rowsPerPage:l,page:n,onChangePage:h,onChangeRowsPerPage:d})))}var _=a(21),H=a(41),J=a.n(H),Y=a(166),$=a(168),Q=a(167),X=a(69),Z=a.n(X),ee=a(70),te=a.n(ee),ae=a(165),ne=Object(Q.a)((function(e){return{rightContent:{marginLeft:"auto",marginRight:-1},lastUpdatedTitle:Object(_.a)({fontSize:"0.7rem",textTransform:"uppercase",textAlign:"right"},e.breakpoints.down("xs"),{fontSize:"0.6rem"}),lastUpdatedTime:Object(_.a)({fontSize:"0.8rem",textTransform:"uppercase"},e.breakpoints.down("xs"),{fontSize:"0.7rem"})}})),re=function(e){var t="dark"===e.theme?r.a.createElement(Z.a,null):r.a.createElement(te.a,null),a="dark"===e.theme?"default":"dark";return r.a.createElement(ae.a,{onClick:function(){return e.toggleTheme(a)},edge:"start",color:"inherit","aria-label":"theme-toggle"},t)};function ie(e){var t=ne();return r.a.createElement($.a,{position:"sticky",color:"default",elevation:0},r.a.createElement(Y.a,null,r.a.createElement(re,{theme:e.theme,toggleTheme:function(t){e.toggleTheme(t)}}),r.a.createElement(j.a,{component:"h1"},"COVID-19 TRACKER"),e.lastUpdatedAt?r.a.createElement("div",{className:t.rightContent},r.a.createElement(j.a,{className:t.lastUpdatedTitle,component:"h6"},"LAST UPDATED"),r.a.createElement(j.a,{className:t.lastUpdatedTime,component:"h6"},r.a.createElement(J.a,{fromNow:!0},e.lastUpdatedAt))):null))}var oe=a(169),ce=Object(Q.a)((function(e){return{source:Object(_.a)({color:"grey",fontSize:"0.9rem"},e.breakpoints.down("xs"),{fontSize:"0.7rem"}),readMore:{fontSize:"0.9rem",padding:e.spacing(0),margin:e.spacing(0),marginTop:e.spacing(1),color:e.palette.primary.main}}})),le=function(e){var t=e.article,a=ce();return r.a.createElement(D.a,null,r.a.createElement(R.a,null,r.a.createElement("h3",null,t.title),r.a.createElement("span",{className:a.source},t.source.name," - ",r.a.createElement(J.a,{fromNow:!0},t.publishedAt)),r.a.createElement("p",{className:a.readMore},r.a.createElement(oe.a,{rel:"noopener noreferrer",target:"_blank",href:t.url},"Read more"))))},se=a(174),me=function(e){var t=e.articles,a=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"RECENT NEWS"),r.a.createElement(U.a,{className:"RecentNews-container",container:!0,spacing:1},a?r.a.createElement(U.a,{container:!0,spacing:1},r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(I.a,{animation:"wave",variant:"rect",height:100})),r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(I.a,{animation:"wave",variant:"rect",height:100})),r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(I.a,{animation:"wave",variant:"rect",height:100}))):function(){var e=t.map((function(e,t){return r.a.createElement(U.a,{item:!0,xs:12,key:t},r.a.createElement(le,{article:e}))})),a=encodeURI('https://naganandakk.github.io/daily-news/#/search?q=corona covid covid19 "covid 19" "covid-19"');return r.a.createElement(r.a.Fragment,null,e,r.a.createElement(se.a,{style:{flexGrow:1,textAlign:"center",padding:"5px"}},r.a.createElement(j.a,{component:"h6"},"For more visit ",r.a.createElement(oe.a,{rel:"noopener noreferrer",target:"_blank",href:a},"Daily News"))))}()))};function ue(){return r.a.createElement("div",{style:{textAlign:"center",marginTop:"15px"}},r.a.createElement("p",null,"Developed by ",r.a.createElement(oe.a,{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/naganandakk"},"Nagananda K K")))}var he=a(71),de=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).toggleTheme=function(e){n.setState({theme:e})},n.state={summary:{},countries:[],articles:[],lastUpdatedAt:null,loading:{articles:!0,summary:!0,countries:!0},theme:"default"},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.fetchData(),this.refreshDataHandler=setInterval((function(){return e.fetchData()}),3e5)}},{key:"componentWillUnmount",value:function(){clearInterval(this.refreshDataHandler)}},{key:"render",value:function(){return r.a.createElement(A.a,{theme:"dark"===this.state.theme?Object(he.a)(w):Object(he.a)(p)},r.a.createElement(O.a,null),r.a.createElement(ie,{theme:this.state.theme,toggleTheme:this.toggleTheme,lastUpdatedAt:this.state.lastUpdatedAt}),r.a.createElement(C.a,{maxWidth:"xl"},r.a.createElement(U.a,{container:!0,spacing:2},r.a.createElement(U.a,{item:!0,xs:12,sm:7},r.a.createElement(L,{loading:this.state.loading.summary,summary:this.state.summary}),r.a.createElement(V,{loading:this.state.loading.countries,countries:this.state.countries})),r.a.createElement(U.a,{item:!0,xs:12,sm:5},r.a.createElement(me,{loading:this.state.loading.articles,articles:this.state.articles})))),r.a.createElement(ue,null))}},{key:"fetchData",value:function(){this.fetchCovidData(),this.fetchArticles()}},{key:"fetchCovidData",value:function(){var e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/summary");case 2:t=e.sent,this.setState({summary:Object(s.a)({},t.data.Global,{TotalActive:t.data.Global.TotalConfirmed-t.data.Global.TotalRecovered-t.data.Global.TotalDeaths}),countries:t.data.Countries,lastUpdatedAt:t.data.Date,loading:Object(s.a)({},this.state.loading,{summary:!1,countries:!1})});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchArticles",value:function(){var e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/everything",{params:{language:"en",q:'corona covid covid19 "covid 19" "covid-19"',pageSize:5}});case 2:t=e.sent,this.setState({articles:f.a.orderBy(t.data.articles,[function(e){return new Date(e.publishedAt)}],["desc"]),loading:Object(s.a)({},this.state.loading,{articles:!1})});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(r.a.Component),ge=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid-19-tracker",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/covid-19-tracker","/service-worker.js");ge?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ve(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ve(t,e)}))}}()},86:function(e,t,a){e.exports=a(117)}},[[86,1,2]]]);
//# sourceMappingURL=main.c09e21e5.chunk.js.map