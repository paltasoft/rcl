(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{376:function(t,e,r){"use strict";r.r(e);var n={},l=r(68),o=r(92),c=r.n(o),d=r(340),v=r(400),h=r(401),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-btn",{attrs:{block:"",color:"primary"}},[t._v("STAMPA")])],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-btn",{attrs:{block:"",color:"primary"}},[t._v("ESPORTA")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCol:v.a,VRow:h.a})},397:function(t,e,r){"use strict";r.r(e);r(44);var n={data:function(){return{}},computed:{totalPrice:function(){return this.accessori.map((function(a){return a.quantity*a.unitPrice})).reduce((function(t,e){return t+e}),0)},accessori:function(){var t=[];return t.push({id:"AllinL",label:"AllinL",quantity:this.$store.state.AllinL,unitPrice:1}),t.push({id:"AllinZ",label:"AllinZ",quantity:this.$store.state.AllinZ,unitPrice:1}),t.push({id:"Angolare",label:"Angolare",quantity:this.$store.state.Angolare,unitPrice:1}),t.push({id:"Basamento",label:"Basamento",quantity:this.$store.state.Basamento,unitPrice:1}),t.push({id:"ElementoCrocera",label:"ElementoCrocera",quantity:this.$store.state.ElementoCrocera,unitPrice:1}),t.push({id:"GiuntoAlto",label:"GiuntoAlto",quantity:this.$store.state.GiuntoAlto,unitPrice:1}),t.push({id:"GiuntoBasso",label:"GiuntoBasso",quantity:this.$store.state.GiuntoBasso,unitPrice:1}),t.push({id:"Lastra25X50",label:"Lastra25X50",quantity:this.$store.state.Lastra25X50,unitPrice:1}),t.push({id:"Lastra50X50",label:"Lastra50X50",quantity:this.$store.state.Lastra50X50,unitPrice:1}),t.push({id:"PiastraAngolare",label:"PiastraAngolare",quantity:this.$store.state.PiastraAngolare,unitPrice:1}),t.push({id:"PiastraL",label:"PiastraL",quantity:this.$store.state.PiastraL,unitPrice:1}),t.push({id:"PiastraLineare",label:"PiastraLineare",quantity:this.$store.state.PiastraLineare,unitPrice:1}),t.push({id:"SpinottoCorto",label:"SpinottoCorto",quantity:this.$store.state.SpinottoCorto,unitPrice:1}),t.push({id:"SquadrettaAncoraggio",label:"SquadrettaAncoraggio",quantity:this.$store.state.SquadrettaAncoraggio,unitPrice:1}),t.push({id:"TiranteObliquo",label:"TiranteObliquo",quantity:this.$store.state.TiranteObliquo,unitPrice:1}),t.push({id:"TiranteOrizzontale",label:"TiranteOrizzontale",quantity:this.$store.state.TiranteOrizzontale,unitPrice:1}),t}}},l=r(68),o=r(92),c=r.n(o),d=r(398),v=r(353),h=r(400),P=r(375),m=r(354),_=r(401),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto",attrs:{tile:""}},[r("v-card-title",[t._v("\n      Risultato Elaborazione\n  ")]),t._v(" "),r("v-card-subtitle",[r("span",{staticStyle:{"font-weight":"bold"}},[t._v("Prezzo Totale: "+t._s(t.totalPrice)+" €")])]),t._v(" "),r("v-card-text",[r("v-row",{attrs:{"no-gutters":""}},t._l(t.accessori,(function(a,e){return r("v-col",{key:e,attrs:{cols:"4"}},[r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(a.label))]),t._v(" "),r("v-list-item-subtitle",[t._v("\n                          "+t._s(a.quantity)+" x "+t._s(a.unitPrice)+" = "),r("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(a.quantity*a.unitPrice)+" €")])])],1)],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VCardSubtitle:v.a,VCardText:v.b,VCardTitle:v.c,VCol:h.a,VListItem:P.a,VListItemContent:m.a,VListItemSubtitle:m.b,VListItemTitle:m.c,VRow:_.a})},425:function(t,e,r){"use strict";r.r(e);var n={components:{Actions:r(376).default}},l=r(68),o=r(92),c=r.n(o),d=r(400),v=r(401),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[r("Plan")],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("Result")],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("Actions")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{Plan:r(424).default,Result:r(397).default,Actions:r(376).default}),c()(component,{VCol:d.a,VRow:v.a})}}]);