(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{188:function(t,n,o){var content=o(266);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("7388ab72",content,!0,{sourceMap:!1})},227:function(t,n,o){"use strict";var r={data:function(){return{right:!0,rightDrawer:!1,title:"RCL - Planner"}},methods:{reload:function(){location.reload()}}},e=o(66),l=o(92),c=o.n(l),f=o(340),d=o(346),A=o(341),v=o(347),h=o(342),O=o(343),T=o(345),H=o(344),L=o(223),component=Object(e.a)(r,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-app",{attrs:{dark:""}},[r("v-app-bar",{attrs:{fixed:"",app:""}},[r("v-toolbar-title",[r("img",{staticStyle:{height:"60px",width:"auto"},attrs:{src:o(271)}})]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"warning"},on:{click:t.reload}},[t._v("\n      RESET\n    ")])],1),t._v(" "),r("v-main",[r("v-container",{attrs:{fluid:""}},[r("nuxt")],1)],1),t._v(" "),r("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(n){t.rightDrawer=n},expression:"rightDrawer"}}),t._v(" "),r("v-footer",{attrs:{absolute:!0,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);n.a=component.exports;c()(component,{VApp:f.a,VAppBar:d.a,VBtn:A.a,VContainer:v.a,VFooter:h.a,VMain:O.a,VNavigationDrawer:T.a,VSpacer:H.a,VToolbarTitle:L.a})},239:function(t,n,o){o(240),t.exports=o(241)},265:function(t,n,o){"use strict";o(188)},266:function(t,n,o){var r=o(17)(!1);r.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=r},271:function(t,n,o){t.exports=o.p+"img/logo.85ec19e.png"},314:function(t,n,o){"use strict";o.r(n),o.d(n,"state",(function(){return r})),o.d(n,"mutations",(function(){return e}));var r=function(){return{skylineHeight:50,AllinL:0,AllinZ:0,Angolare:0,Basamento:0,ElementoCrocera:0,GiuntoAlto:0,GiuntoBasso:0,Lastra25X50:0,Lastra50X50:0,PiastraAngolare:0,PiastraL:0,PiastraLineare:0,SpinottoCorto:0,SquadrettaAncoraggio:0,TiranteObliquoH50:0,TiranteObliquoH75:0,TiranteObliquoH100:0,TiranteOrizzontale:0}},e={init:function(t){t.AllinL=0,t.AllinZ=0,t.Angolare=0,t.Basamento=0,t.ElementoCrocera=0,t.GiuntoAlto=0,t.GiuntoBasso=0,t.Lastra25X50=0,t.Lastra50X50=0,t.PiastraAngolare=0,t.PiastraL=0,t.PiastraLineare=0,t.SpinottoCorto=0,t.SquadrettaAncoraggio=0,t.TiranteObliquoH50=0,t.TiranteObliquoH75=0,t.TiranteObliquoH100=0,t.TiranteOrizzontale=0},skylineHeight:function(t,n){t.skylineHeight=n},AllinL:function(t,n){t.AllinL+=n},AllinZ:function(t,n){t.AllinZ+=n},Angolare:function(t,n){t.Angolare+=n},SetAngolare:function(t,n){t.Angolare=n},Basamento:function(t,n){t.Basamento+=n},ElementoCrocera:function(t,n){t.ElementoCrocera+=n},SetElementoCrocera:function(t,n){t.ElementoCrocera=n},GiuntoAlto:function(t,n){t.GiuntoAlto+=n/2,t.GiuntoAlto=t.GiuntoAlto},GiuntoBasso:function(t,n){t.GiuntoBasso+=n/2,t.GiuntoBasso=t.GiuntoBasso},SetGiuntoBasso:function(t,n){t.GiuntoBasso=n},Lastra25X50:function(t,n){t.Lastra25X50+=n},Lastra50X50:function(t,n){t.Lastra50X50+=n},PiastraAngolare:function(t,n){t.PiastraAngolare+=n},PiastraL:function(t,n){t.PiastraL+=n},PiastraLineare:function(t,n){t.PiastraLineare+=n/2},SpinottoCorto:function(t,n){t.SpinottoCorto+=n},SquadrettaAncoraggio:function(t,n){t.SquadrettaAncoraggio+=n},SetSquadrettaAncoraggio:function(t,n){t.SquadrettaAncoraggio=n},TiranteObliquoH50:function(t,n){t.TiranteObliquoH50+=n},SetTiranteObliquoH50:function(t,n){t.TiranteObliquoH50=n},TiranteObliquoH75:function(t,n){t.TiranteObliquoH75+=n},SetTiranteObliquoH75:function(t,n){t.TiranteObliquoH75=n},TiranteObliquoH100:function(t,n){t.TiranteObliquoH100+=n},SetTiranteObliquoH100:function(t,n){t.TiranteObliquoH100=n},TiranteOrizzontale:function(t,n){t.TiranteOrizzontale+=n/2}}},58:function(t,n,o){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},e=(o(265),o(66)),l=o(92),c=o.n(l),f=o(340),component=Object(e.a)(r,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-app",{attrs:{dark:""}},[404===t.error.statusCode?o("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):o("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);n.a=component.exports;c()(component,{VApp:f.a})}},[[239,12,4,13]]]);