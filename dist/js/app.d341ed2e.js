(function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],l=0,p=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/Weather-App/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},1904:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-div"}},[n("Main")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main-div"}},[n("div",{attrs:{id:"temp-div"}},[n("div",{attrs:{id:"temp-summ-loc"}},[n("div",{attrs:{id:"big-temp-div"}},[n("p",{attrs:{id:"big-temp"}},[t._v(t._s(t.currentTemp)+"°")]),n("p",{attrs:{id:"location"}},[t._v(t._s(t.forecast.currently.summary)+" "+t._s(t.icons[t.forecast.currently.icon])+" "+t._s(t.address.name))])]),t._m(0)])]),n("div",{attrs:{id:"more-info-div"}},[n("div",{attrs:{id:"more-info-div1"}},[n("div",[n("b-input-group",{staticClass:"mb-3"},[n("b-form-input",{model:{value:t.location,callback:function(e){t.location=e},expression:"location"}}),n("b-input-group-append",[n("b-button",{attrs:{size:"sm",text:"Search",variant:"success"},on:{click:t.updateLocation}},[t._v("Seach")])],1)],1)],1),n("div",{attrs:{id:"majorCities"}},[n("p",{attrs:{id:"Los Angeles"},on:{click:function(e){return t.newPresetLocation(e)}}},[t._v("Los Angeles")]),n("p",{attrs:{id:"Toronto"},on:{click:function(e){return t.newPresetLocation(e)}}},[t._v("Toronto")]),n("p",{attrs:{id:"London"},on:{click:function(e){return t.newPresetLocation(e)}}},[t._v("London")]),n("p",{attrs:{id:"Istanbul"},on:{click:function(e){return t.newPresetLocation(e)}}},[t._v("Istanbul")]),n("p",{attrs:{id:"Dehli"},on:{click:function(e){return t.newPresetLocation(e)}}},[t._v("Dehli")]),n("p",{attrs:{id:"Shanghai"},on:{click:function(e){return t.newPresetLocation(e)}}},[t._v("Shanghai")]),n("p",{attrs:{id:"Tokyo"},on:{click:function(e){return t.newPresetLocation(e)}}},[t._v("Tokyo")]),n("p",{attrs:{id:"Sydney"},on:{click:function(e){return t.newPresetLocation(e)}}},[t._v("Sydney")]),n("div",{attrs:{id:"hr"}})])]),n("div",{attrs:{id:"more-info-div2"}},[n("p",{attrs:{id:"weatherdetails"}},[t._v("Weather Details")]),n("div",{staticClass:"weathericon"},[n("v-icon",{staticClass:"icons",attrs:{name:"wind",scale:"3"}}),n("p",[t._v(t._s(t.currentWind)+" km/h")])],1),n("div",{staticClass:"weathericon"},[n("v-icon",{staticClass:"icons",attrs:{name:"tint",scale:"3"}}),n("p",[t._v(t._s(t.precentpp)+"%")])],1),n("div",{staticClass:"weathericon"},[n("v-icon",{staticClass:"icons",attrs:{name:"sun",scale:"3"}}),n("p",[t._v(t._s(t.forecast.currently.uvIndex)+" UV Index")])],1),n("div",{attrs:{id:"hr2"}})]),n("div",{attrs:{id:"more-info-div3"}},[n("p",[t._v("Tomorrow")]),n("div",{attrs:{id:"thisWeek"}},[n("p",[t._v("Precipitation chance")]),n("p",[t._v(t._s(t.tomprecentpp)+"%")]),n("p",[t._v("Temperature High")]),n("p",[t._v(t._s(t.tomTempHigh))]),n("p",[t._v("Temperature Low")]),n("p",[t._v(t._s(t.tomTempLow))])])])])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"summ-loc"}},[n("span")])}],s=(n("5377"),n("99af"),n("d3b7"),"https://cors-anywhere.herokuapp.com/"),u="9aa8775e682a72dabd6309710e5c2c2f",d="".concat(s,"https://darksky.net/rgeo?hires=1"),l="".concat(s,"https://api.darksky.net/forecast/").concat(u,"/"),p="".concat(s,"https://darksky.net/geo?q=");function f(t){return fetch("".concat(p).concat(t)).then((function(t){return t.json()}))}function h(t,e){return fetch("".concat(l).concat(t,",").concat(e,"?units=auto")).then((function(t){return t.json()}))}function v(t,e){return fetch("".concat(d,"&lat=").concat(t,"&lon=").concat(e)).then((function(t){return t.json()}))}var m={getForecast:h,getCoordinates:f,getAddress:v},g={name:"HelloWorld",data:function(){return{precentpp:0,currentTemp:0,currentWind:0,tomTempHigh:0,tomTempLow:0,tomprecentpp:0,location:"",address:"",fc:"ca",forecast:null,icons:{"clear-day":"🌞","clear-night":"🌙",rain:"🌧",snow:"🌨",sleet:"⛷",wind:"💨",fog:"🌫",cloudy:"☁","partly-cloudy-day":"⛅","partly-cloudy-night":"🌚"},backgrounds:{"clear-day":"../assets/images/clear-day.jpg","clear-night":"🌙",rain:"🌧",snow:"🌨",sleet:"⛷",wind:"../assets/images/wind.jpg",fog:"🌫",cloudy:"../assets/images/cloudy.jpg","partly-cloudy-day":"⛅","partly-cloudy-night":"🌚"}}},methods:{newPresetLocation:function(t){this.location=t.srcElement.id,this.updateLocation()},changeBackground:function(t){console.log("changing background.. to: "+t);var e=document.getElementById("main-div"),n="./assets/images/x.jpg'";e.style.backgroundImage=n},forc:function(){this.fc=this.forecast.flags.units},updateLocation:function(){var t=this;m.getCoordinates(this.location).then((function(e){t.loadWeather(e.latitude,e.longitude)}))},loadWeather:function(t,e){var n=this;m.getAddress(t,e).then((function(t){n.address=t})),m.getForecast(t,e).then((function(t){n.forecast=t,n.currentTemp=Math.round(n.forecast.currently.temperature),n.currentWind=Math.round(n.forecast.currently.windSpeed),n.precentpp=Math.round(100*n.forecast.currently.precipProbability),n.tomTempHigh=Math.round(n.forecast.daily.data[0].temperatureHigh),n.tomTempLow=Math.round(n.forecast.daily.data[0].temperatureLow),n.tomprecentpp=Math.round(100*n.forecast.daily.data[0].precipProbability),n.forc()}))}},props:{msg:String},mounted:function(){this.loadWeather("34.070025","-118.294616")}},y=g,_=(n("94e3"),n("2877")),b=Object(_["a"])(y,i,c,!1,null,"3a3b3240",null),w=b.exports,k={name:"app",components:{Main:w}},L=k,j=(n("034f"),Object(_["a"])(L,o,a,!1,null,null,null)),P=j.exports,T=n("5f5b"),x=(n("d06d"),n("0874"));n("1904"),n("f9e3"),n("2dd8");r["default"].component("v-icon",x["a"]),r["default"].use(T["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(P)}}).$mount("#app")},"85ec":function(t,e,n){},"94e3":function(t,e,n){"use strict";var r=n("d832"),o=n.n(r);o.a},d832:function(t,e,n){}});
//# sourceMappingURL=app.d341ed2e.js.map