(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{348:function(t,e,r){var n=r(42),o=r(231);t.exports=n?o:function(t){return Map.prototype.entries.call(t)}},352:function(t,e,r){"use strict";var n=r(4),o=r(8),c=r(95),l=r(31),f=r(230),v=r(228),d=r(121),h=r(20),y=r(7),O=r(151),S=r(69),E=r(152);t.exports=function(t,e,r){var j=-1!==t.indexOf("Map"),R=-1!==t.indexOf("Weak"),T=j?"set":"add",w=o[t],I=w&&w.prototype,m=w,x={},_=function(t){var e=I[t];l(I,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(R&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return R&&!h(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(R&&!h(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(c(t,"function"!=typeof w||!(R||I.forEach&&!y((function(){(new w).entries().next()})))))m=r.getConstructor(e,t,j,T),f.REQUIRED=!0;else if(c(t,!0)){var A=new m,N=A[T](R?{}:-0,1)!=A,P=y((function(){A.has(1)})),k=O((function(t){new w(t)})),M=!R&&y((function(){for(var t=new w,e=5;e--;)t[T](e,e);return!t.has(-0)}));k||((m=e((function(e,r){d(e,m,t);var n=E(new w,e,m);return null!=r&&v(r,n[T],{that:n,AS_ENTRIES:j}),n}))).prototype=I,I.constructor=m),(P||M)&&(_("delete"),_("has"),j&&_("get")),(M||N)&&_(T),R&&I.clear&&delete I.clear}return x[t]=m,n({global:!0,forced:m!=w},x),S(m,t),R||r.setStrong(m,t,j),m}},353:function(t,e,r){"use strict";var n=r(28).f,o=r(78),c=r(149),l=r(65),f=r(121),v=r(228),d=r(148),h=r(150),y=r(27),O=r(230).fastKey,S=r(50),E=S.set,j=S.getterFor;t.exports={getConstructor:function(t,e,r,d){var h=t((function(t,n){f(t,h,e),E(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),y||(t.size=0),null!=n&&v(n,t[d],{that:t,AS_ENTRIES:r})})),S=j(e),R=function(t,e,r){var n,o,c=S(t),l=T(t,e);return l?l.value=r:(c.last=l={index:o=O(e,!0),key:e,value:r,previous:n=c.last,next:void 0,removed:!1},c.first||(c.first=l),n&&(n.next=l),y?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},T=function(t,e){var r,n=S(t),o=O(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return c(h.prototype,{clear:function(){for(var t=S(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,y?t.size=0:this.size=0},delete:function(t){var e=this,r=S(e),n=T(e,t);if(n){var o=n.next,c=n.previous;delete r.index[n.index],n.removed=!0,c&&(c.next=o),o&&(o.previous=c),r.first==n&&(r.first=o),r.last==n&&(r.last=c),y?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=S(this),n=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!T(this,t)}}),c(h.prototype,r?{get:function(t){var e=T(this,t);return e&&e.value},set:function(t,e){return R(this,0===t?0:t,e)}}:{add:function(t){return R(this,t=0===t?0:t,t)}}),y&&n(h.prototype,"size",{get:function(){return S(this).size}}),h},setStrong:function(t,e,r){var n=e+" Iterator",o=j(e),c=j(n);d(t,e,(function(t,e){E(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),h(e)}}},354:function(t,e,r){"use strict";var n=r(16),o=r(91);t.exports=function(){for(var t,e=n(this),r=o(e.delete),c=!0,l=0,f=arguments.length;l<f;l++)t=r.call(e,arguments[l]),c=c&&t;return!!c}},359:function(t,e,r){"use strict";var n=r(352),o=r(353);t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},360:function(t,e,r){"use strict";var n=r(4),o=r(42),c=r(354);n({target:"Map",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},361:function(t,e,r){"use strict";var n=r(4),o=r(42),c=r(16),l=r(65),f=r(348),v=r(228);n({target:"Map",proto:!0,real:!0,forced:o},{every:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return!v(e,(function(t,e,n){if(!r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},362:function(t,e,r){"use strict";var n=r(4),o=r(42),c=r(48),l=r(16),f=r(91),v=r(65),d=r(120),h=r(348),y=r(228);n({target:"Map",proto:!0,real:!0,forced:o},{filter:function(t){var map=l(this),e=h(map),r=v(t,arguments.length>1?arguments[1]:void 0,3),n=new(d(map,c("Map"))),o=f(n.set);return y(e,(function(t,e){r(e,t,map)&&o.call(n,t,e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},363:function(t,e,r){"use strict";var n=r(4),o=r(42),c=r(16),l=r(65),f=r(348),v=r(228);n({target:"Map",proto:!0,real:!0,forced:o},{find:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return v(e,(function(t,e,n){if(r(e,t,map))return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},364:function(t,e,r){"use strict";var n=r(4),o=r(42),c=r(16),l=r(65),f=r(348),v=r(228);n({target:"Map",proto:!0,real:!0,forced:o},{findKey:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return v(e,(function(t,e,n){if(r(e,t,map))return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},365:function(t,e,r){"use strict";var n=r(4),o=r(42),c=r(16),l=r(348),f=r(373),v=r(228);n({target:"Map",proto:!0,real:!0,forced:o},{includes:function(t){return v(l(c(this)),(function(e,r,n){if(f(r,t))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},366:function(t,e,r){"use strict";var n=r(4),o=r(42),c=r(16),l=r(348),f=r(228);n({target:"Map",proto:!0,real:!0,forced:o},{keyOf:function(t){return f(l(c(this)),(function(e,r,n){if(r===t)return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},367:function(t,e,r){"use strict";var n=r(4),o=r(42),c=r(48),l=r(16),f=r(91),v=r(65),d=r(120),h=r(348),y=r(228);n({target:"Map",proto:!0,real:!0,forced:o},{mapKeys:function(t){var map=l(this),e=h(map),r=v(t,arguments.length>1?arguments[1]:void 0,3),n=new(d(map,c("Map"))),o=f(n.set);return y(e,(function(t,e){o.call(n,r(e,t,map),e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},368:function(t,e,r){"use strict";var n=r(4),o=r(42),c=r(48),l=r(16),f=r(91),v=r(65),d=r(120),h=r(348),y=r(228);n({target:"Map",proto:!0,real:!0,forced:o},{mapValues:function(t){var map=l(this),e=h(map),r=v(t,arguments.length>1?arguments[1]:void 0,3),n=new(d(map,c("Map"))),o=f(n.set);return y(e,(function(t,e){o.call(n,t,r(e,t,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},369:function(t,e,r){"use strict";var n=r(4),o=r(42),c=r(16),l=r(91),f=r(228);n({target:"Map",proto:!0,real:!0,forced:o},{merge:function(t){for(var map=c(this),e=l(map.set),i=0;i<arguments.length;)f(arguments[i++],e,{that:map,AS_ENTRIES:!0});return map}})},370:function(t,e,r){"use strict";var n=r(4),o=r(42),c=r(16),l=r(91),f=r(348),v=r(228);n({target:"Map",proto:!0,real:!0,forced:o},{reduce:function(t){var map=c(this),e=f(map),r=arguments.length<2,n=r?void 0:arguments[1];if(l(t),v(e,(function(e,o){r?(r=!1,n=o):n=t(n,o,e,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r)throw TypeError("Reduce of empty map with no initial value");return n}})},371:function(t,e,r){"use strict";var n=r(4),o=r(42),c=r(16),l=r(65),f=r(348),v=r(228);n({target:"Map",proto:!0,real:!0,forced:o},{some:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return v(e,(function(t,e,n){if(r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},372:function(t,e,r){"use strict";var n=r(4),o=r(42),c=r(16),l=r(91);n({target:"Map",proto:!0,real:!0,forced:o},{update:function(t,e){var map=c(this),r=arguments.length;l(e);var n=map.has(t);if(!n&&r<3)throw TypeError("Updating absent value");var o=n?map.get(t):l(r>2?arguments[2]:void 0)(t,map);return map.set(t,e(o,t,map)),map}})},373:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},417:function(t,e,r){"use strict";r.r(e);var n={},o=r(66),c=r(92),l=r.n(c),f=r(341),v=r(425),d=r(426),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-btn",{attrs:{block:"",color:"primary"}},[t._v("STAMPA")])],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-btn",{attrs:{block:"",color:"primary"}},[t._v("ESPORTA")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:f.a,VCol:v.a,VRow:d.a})},425:function(t,e,r){"use strict";r(44),r(359),r(21),r(51),r(13),r(25),r(68),r(52),r(45),r(360),r(361),r(362),r(363),r(364),r(365),r(366),r(367),r(368),r(369),r(370),r(371),r(372),r(67),r(75);var n=r(2),o=(r(233),r(0)),c=r(93),l=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],h=d.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=d.reduce((function(t,e){return t["offset"+Object(l.t)(e)]={type:[String,Number],default:null},t}),{}),O=d.reduce((function(t,e){return t["order"+Object(l.t)(e)]={type:[String,Number],default:null},t}),{}),S={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(O)};function E(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var j=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var v=j.get(l);return v||function(){var t,e;for(e in v=[],S)S[e].forEach((function(t){var n=r[t],o=E(e,t,n);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),j.set(l,v)}(),t(r.tag,Object(c.a)(data,{class:v}),o)}})},426:function(t,e,r){"use strict";r(19),r(44),r(359),r(51),r(13),r(25),r(61),r(68),r(52),r(360),r(361),r(362),r(363),r(364),r(365),r(366),r(367),r(368),r(369),r(370),r(371),r(372),r(67),r(75);var n=r(2),o=(r(233),r(0)),c=r(93),l=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],h=["start","end","center"];function y(t,e){return d.reduce((function(r,n){return r[t+Object(l.t)(n)]=e(),r}),{})}var O=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},S=y("align",(function(){return{type:String,default:null,validator:O}})),E=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},j=y("justify",(function(){return{type:String,default:null,validator:E}})),R=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},T=y("alignContent",(function(){return{type:String,default:null,validator:R}})),w={align:Object.keys(S),justify:Object.keys(j),alignContent:Object.keys(T)},I={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,r){var n=I[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var x=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},S),{},{justify:{type:String,default:null,validator:E}},j),{},{alignContent:{type:String,default:null,validator:R}},T),render:function(t,e){var r=e.props,data=e.data,o=e.children,l="";for(var f in r)l+=String(r[f]);var v=x.get(l);return v||function(){var t,e;for(e in v=[],w)w[e].forEach((function(t){var n=r[t],o=m(e,t,n);o&&v.push(o)}));v.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),x.set(l,v)}(),t(r.tag,Object(c.a)(data,{staticClass:"row",class:v}),o)}})}}]);