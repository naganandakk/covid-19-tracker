(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{38:function(e,t,a){e.exports=a(75)},44:function(e,t,a){},45:function(e,t,a){},63:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),c=a.n(o),s=(a(43),a(44),a(3)),l=a(4),i=a(5),u=a(6),d=(a(45),a(29)),m=a.n(d).a.create({baseURL:"https://covid-193.p.rapidapi.com"});m.interceptors.request.use((function(e){return e.headers["x-rapidapi-host"]="covid-193.p.rapidapi.com",e.headers["x-rapidapi-key"]="c70fc1a073msha3436ddc701e093p1fa48fjsncc32806fee38",e}));var h=m,p=a(11),f=a.n(p),v=a(30),E=a.n(v),y=(a(63),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return this.renderText()}},{key:"renderText",value:function(){var e="color-"+this.props.title.toLowerCase();return r.a.createElement("div",{className:"totals-card ".concat(e)},r.a.createElement("p",{className:"totals-card-title"},this.props.title),r.a.createElement("p",{className:"totals-card-count"},this.formatCount(this.props.count)))}},{key:"formatCount",value:function(e){return e?e.toLocaleString():e}}]),a}(r.a.Component)),g=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.prepareCards();return r.a.createElement("div",{className:"row totals-card-table"},t.map((function(t){return e.renderTotalsCard(t)})))}},{key:"prepareCards",value:function(){return[{title:"CONFIRMED",count:this.props.totals.cases.total},{title:"ACTIVE",count:this.props.totals.cases.active},{title:"RECOVERED",count:this.props.totals.cases.recovered},{title:"DECEASED",count:this.props.totals.deaths.total}]}},{key:"renderTotalsCard",value:function(e){return r.a.createElement("div",{key:e.title,className:"col-xs-3 col-sm-3 col-md-3 col-lg-3 totals-card-container"},r.a.createElement(y,{title:e.title,count:e.count}))}}]),a}(r.a.Component),C=a(31),b=a.n(C),k=(a(66),function(e){return e&&(e=e.toLocaleString()),r.a.createElement("div",{className:"country-table-cell count"},e)}),N=function(e){return r.a.createElement("div",{className:"country-table-header"},e)},O=[{name:N("COUNTRY"),selector:"country",sortable:!0,compact:!0,cell:function(e){return t=e.country,r.a.createElement("div",{className:"country-table-cell country-name"},t.toUpperCase());var t}},{name:N("CONFIRMED"),selector:"cases.total",sortable:!0,right:!0,compact:!0,cell:function(e){return k(e.cases.total)}},{name:N("ACTIVE"),selector:"cases.active",sortable:!0,right:!0,compact:!0,cell:function(e){return k(e.cases.active)}},{name:N("RECOVERED"),selector:"cases.recovered",sortable:!0,right:!0,compact:!0,cell:function(e){return k(e.cases.recovered)}},{name:N("DECEASED"),selector:"deaths.total",sortable:!0,right:!0,compact:!0,cell:function(e){return k(e.deaths.total)}}],A=(a(67),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},this.renderAffectedCountriesCount(),this.renderTable()))}},{key:"renderAffectedCountriesCount",value:function(){return r.a.createElement("div",{className:"text-right"},r.a.createElement("p",{className:"affected-countries-count"},this.props.statistics.length," COUNTRIES AFFECTED"))}},{key:"renderTable",value:function(){return r.a.createElement("div",{className:"country-table-wrapper"},r.a.createElement(b.a,{className:"country-table",columns:O,data:this.props.statistics,defaultSortField:"cases.total",defaultSortAsc:!1,highlightOnHover:!0,dense:!0,noHeader:!0}))}}]),a}(r.a.Component));a(68),a(69);var w=function(e){var t="color-"+e.title.toLowerCase();return r.a.createElement("div",{className:"".concat(t," country-stats-card")},r.a.createElement("p",{className:"country-stats-card-title"},e.title),r.a.createElement("p",{className:"country-stats-card-count"},e.count.toLocaleString()))},S=(a(70),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.prepareCards();return r.a.createElement("div",{className:"row country-stats"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("h6",{className:"color-confirmed stats-card-country-name"},this.props.selectedCountry.country.toUpperCase())),t.map((function(t){return e.renderCard(t)})))}},{key:"prepareCards",value:function(){return[{title:"CONFIRMED",count:this.props.selectedCountry.cases.total},{title:"ACTIVE",count:this.props.selectedCountry.cases.active},{title:"RECOVERED",count:this.props.selectedCountry.cases.recovered},{title:"DECEASED",count:this.props.selectedCountry.deaths.total}]}},{key:"renderCard",value:function(e){return r.a.createElement("div",{key:e.title,className:"col-xs-3 col-sm-3 col-md-3 col-lg-3 country-stats-card-wrapper"},r.a.createElement(w,{title:e.title,count:e.count}))}}]),a}(r.a.Component)),j=a(78),D=a(77),L=a(35),R=a.n(L),T=(a(72),a(73),function(e){var t={"united states":"USA","united kingdom":"UK","united arab emirates":"UAE","dominican rep.":"Dominican-Republic","central african rep.":"CAR","dem. rep. congo":"DRC",korea:"S.-Korea","eq. guinea":"Equatorial-Guinea","bosnia and herz.":"Bosnia-and-Herzegovina","czech rep.":"Czechia","lao pdr":"Laos",macedonia:"North-Macedonia","s. sudan":"South-Sudan","w. sahara":"Western-Sahara","trinidad and tobago":"Trinidad-and-Tobago"}[e=e.toLowerCase().trim()];if(t)e=t;else{var a=(e=(e=e.replace(/ /g,"-")).replace(/is.$/g,"islands")).split("-").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)}));null!==(e=a.join("-"))&&""!==e||(e="India")}return e}),U="#BD302A",F="#CA4F4A",I="#D76E6A",x="#E48D8A",W="#F1ACAA",B="#FFCCCB",M=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).handleMouseOver=function(e){var t=T(e.properties.name),a=r.stats[t];a?r.setState({selectedCountry:a}):r.setState({selectedCountry:{country:t,cases:{total:"NA",active:"NA",recovered:"NA"},deaths:{total:"NA"}}})},r.handleEventsOnCountries=function(e,t){var a=r.handleMouseOver;t.on("mouseover",(function(){a(e)})),t.on("click",(function(){a(e)}))},r.state={selectedCountry:e.stats[0],center:{lat:40.8471,lng:14.0625},zoom:1},r.mapRef=Object(n.createRef)(),r.stats=f.a.keyBy(e.stats,"country"),r}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"world-map-header"},r.a.createElement("h4",null,"STATISTICS BY COUNTRY"),r.a.createElement("h6",null,"Hover over a country for more details")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 selected-country-stats"},r.a.createElement(S,{selectedCountry:this.state.selectedCountry})),r.a.createElement("div",{className:"col-lg-12 map-container"},this.renderMap())))}},{key:"renderMap",value:function(){var e=this;return r.a.createElement(j.a,{animate:!0,className:"world-map",center:this.state.center,zoom:this.state.zoom,zoomControl:!1,draggable:!1,ref:this.mapRef},r.a.createElement(D.a,{data:R.a,style:function(t){return e.getCountryStyle(t.properties.name)},onEachFeature:this.handleEventsOnCountries}))}},{key:"getColorByContribution",value:function(e){return e>=25e3?U:e>=15e3?F:e>=1e4?I:e>=3e3?x:e>500?W:B}},{key:"getCountryStyle",value:function(e){var t=this.stats[T(e)],a="#FFFFFF";if(t){var n=t.cases.total;a=this.getColorByContribution(n)}return{color:"#D3D3D3",weight:.5,fillColor:a,fillOpacity:1}}}]),a}(r.a.Component);function z(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-7 dashboard-header-col title"},r.a.createElement("h4",{className:"dashboard-header"},"COVID-19 TRACKER")),r.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-5 text-right dashboard-header-col time"},r.a.createElement("h6",{className:"last-updated-header"},"LAST UPDATED"),r.a.createElement("h6",{className:"last-updated-time"},"ABOUT ",r.a.createElement(E.a,{fromNow:!0},e.lastUpdatedAt))))}var P=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={statistics:[],totals:{cases:{},deaths:{}},lastUpdatedAt:null,isLoading:!0},n}return Object(l.a)(a,[{key:"setIsLoading",value:function(e){this.setState({isLoading:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},this.isPageLoading()&&this.renderLoader(),this.isStatsReady()&&this.renderStats())}},{key:"isStatsReady",value:function(){return!this.state.isLoading}},{key:"isPageLoading",value:function(){return this.state.isLoading}},{key:"renderLoader",value:function(){return r.a.createElement("div",{className:"col-lg-12 text-center"},r.a.createElement("h4",null,"Loading..."))}},{key:"renderStats",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6"},r.a.createElement(z,{lastUpdatedAt:this.state.lastUpdatedAt}),r.a.createElement(g,{totals:this.state.totals}),r.a.createElement(A,{statistics:this.state.statistics})),r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6"},r.a.createElement(M,{stats:this.state.statistics,overallStats:this.state.totals})))}},{key:"componentDidMount",value:function(){var e=this;this.enableLoader(),this.fetchData(),this.refreshDashboardHandler=setInterval((function(){return e.fetchData()}),3e5)}},{key:"componentWillUnmount",value:function(){clearInterval(this.refreshDashboardHandler)}},{key:"enableLoader",value:function(){this.setIsLoading(!0)}},{key:"disableLoader",value:function(){this.setIsLoading(!1)}},{key:"fetchData",value:function(){var e=this;h.get("/statistics").then((function(t){var a=t.data.response,n=f.a.find(a,{country:"All"});n||(n=f.a.find(a,{country:"World"})),f.a.remove(a,{country:"All"}),f.a.remove(a,{country:"World"}),e.updateStats(a,n),e.disableLoader()})).catch((function(t){console.log(t),e.disableLoader()}))}},{key:"updateStats",value:function(e,t){this.setState({statistics:e,totals:t,lastUpdatedAt:t.time})}}]),a}(r.a.Component),V=(a(74),function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("p",null,"Developed by ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/naganandakk"},"Nagananda K K")),r.a.createElement("p",null,"Powered by ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://rapidapi.com"},"Rapid API")))}),H=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-fluid page-container"},r.a.createElement(P,null)),r.a.createElement(V,null))}}]),a}(r.a.Component),K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid-19-tracker",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/covid-19-tracker","/service-worker.js");K?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):q(t,e)}))}}()}},[[38,1,2]]]);
//# sourceMappingURL=main.227e6223.chunk.js.map