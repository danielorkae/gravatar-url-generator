(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],p=0,f=[];p<s.length;p++)o=s[p],r[o]&&f.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={1:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/gravatar-url-generator/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([4,0]),n()})({4:function(t,e,n){t.exports=n("Vtdi")},Bq0k:function(t,e,n){"use strict";var a=n("oHt2"),r=n.n(a);r.a},RorB:function(t,e,n){},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var a=n("Kw5r"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container ml-auto mr-auto",attrs:{id:"app"}},[n("div",{staticClass:"flex h-screen w-full content-center flex-wrap"},[n("div",{staticClass:"p-2 ml-auto mr-auto"},[n("div",{staticClass:"bg-white max-w-5xl shadow-md rounded px-4 pt-3 pb-4 mb-4"},[n("h1",{staticClass:"text-3xl text-center mb-5 text-indigo-darkest"},[t._v("\n          Gravatar URL Generator\n        ")]),n("div",{staticClass:"mb-4"},[n("InputEmail",{model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t.loading?t._e():n("div",{staticClass:"mb-4"},[n("GravatarImage",t._b({},"GravatarImage",{email:t.email},!1))],1)]),n("PageFooter",{staticClass:"text-center text-white text-xs mb-5"})],1)])])},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",t._b({staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight text-2xl text-center",attrs:{type:"text",placeholder:"Gravatar e-mail"},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",{value:t.value},!1))},s=[],l={name:"inpu-email",props:{value:String}},c=l,u=(n("w212"),n("KHd+")),p=Object(u["a"])(c,o,s,!1,null,null,null),f=p.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"max-w-full relative"},[n("img",t._b({staticClass:"w-full max-w-full"},"img",{src:t.src,alt:t.email,title:t.email},!1)),n("div",{staticClass:"flex items-center border-b border-b-2 border-teal py-2"},[n("input",t._b({ref:"input",staticClass:"appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight",attrs:{readonly:"",type:"text"}},"input",{value:t.src},!1)),n("a",{staticClass:"flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded cursor-pointer",on:{click:t.copy}},[n("i",{staticClass:"fas fa-copy"})])]),n("br"),n("br"),n("Options",{attrs:{fallback:t.fallback,size:t.size,rating:t.rating},on:{"update:fallback":function(e){t.fallback=e},"update:size":function(e){t.size=e},"update:rating":function(e){t.rating=e}}})],1)},m=[],v=n("jYEY"),b=n.n(v),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap -mx-3 mb-2"},[n("v-select",{staticClass:"w-full md:w-1/3 px-3 mb-6 md:mb-0",attrs:{options:t.$options.sizes,name:"size",label:"size",value:t.size},on:{input:function(e){return t.$emit("update:size",e)}}}),n("v-select",{staticClass:"w-full md:w-1/3 px-3 mb-6 md:mb-0",attrs:{options:t.$options.fallbacks,name:"fallback",label:"default",value:t.fallback},on:{input:function(e){return t.$emit("update:fallback",e)}}}),n("v-select",{staticClass:"w-full md:w-1/3 px-3 mb-6 md:mb-0",attrs:{options:t.$options.ratings,name:"ratings",label:"rating",value:t.rating},on:{input:function(e){return t.$emit("update:rating",e)}}})],1)},h=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticClass:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",attrs:{for:t.name}},[t._v("\n    "+t._s(t.label)+"\n  ")]),n("div",{staticClass:"relative"},[n("select",{staticClass:"block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight",attrs:{id:t.name},domProps:{value:t.value},on:{change:function(e){return t.$emit("input",e.target.value)}}},t._l(t.options,function(e){return n("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.label||e.value))])})),n("div",{staticClass:"pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"},[n("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])])},w=[],_=(n("xfY5"),{name:"v-select",props:{options:Array,name:String,label:String,value:[String,Number]}}),y=_,k=(n("aBrV"),Object(u["a"])(y,x,w,!1,null,null,null)),C=k.exports,j=function(t){return t.map(function(t){return{value:t}})},O=j(["404","mp","identicon","monsterid","wavatar","retro","robohash","blank"]),$=j(["g","pg","r","x"]),z=j(["200","400","600","800"]),E={name:"gravatar-options",components:{VSelect:C},fallbacks:O,sizes:z,ratings:$,props:["rating","size","fallback"]},P=E,S=Object(u["a"])(P,g,h,!1,null,null,null),L=S.exports,M={name:"gravatar-image",components:{Options:L},props:{email:String},data:function(){return{fallback:"robohash",rating:"x",size:"400"}},computed:{hash:function(){return b()(this.email)},src:function(){var t=this.hash,e=this.fallback,n=this.size,a=this.rating;return"//gravatar.com/avatar/".concat(t,"?s=").concat(n,"&d=").concat(e,"&r=").concat(a)}},methods:{copy:function(t){var e=this.$refs.input;e.focus(),e.select(),document.execCommand("copy")?this.opened=!1:console.warn("FAIL_TO_COPY")}}},V=M,B=Object(u["a"])(V,d,m,!1,null,null,null),I=B.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-lg"},[t._v("\n  Made with\n  "),t._m(0),t._v("\n  by\n  "),n("a",{staticClass:"no-underline",attrs:{target:"_blank",href:"https://github.com/vinicius73"}},[t._v("@vinicius73")]),n("br"),n("a",{staticClass:"text-sm",attrs:{target:"_blank",href:"https://github.com/vinicius73/gravatar-url-generator"}},[t._v("\n    fork it "),n("i",{staticClass:"fas fa-code-branch"}),t._v(" v"+t._s(t.$options.version)+"\n  ")])])},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"no-underline",attrs:{href:"https://vuejs.org",target:"_blank"}},[n("i",{staticClass:"fab fa-vuejs",attrs:{title:"Vue.js","aria-label":"Vue.js"}})])}],Y={name:"page-footer",version:"1.0.0-47y9vk"},q=Y,R=(n("Bq0k"),Object(u["a"])(q,G,T,!1,null,"15c702c7",null)),Z=R.exports,A=function(){return fetch("https://jsonplaceholder.typicode.com/users").then(function(t){return t.json()}).then(function(t){return t[Math.floor(Math.random()*t.length)]}).then(function(t){return t.email.toLowerCase()}).catch(function(t){return console.warn(t),"vinicius73@mail.com"})},F=A,H={name:"root",components:{InputEmail:f,GravatarImage:I,PageFooter:Z},data:function(){return{email:"",loading:!0}},mounted:function(){var t=this;F().then(function(e){t.email=e,t.loading=!1})}},J=H,K=(n("ZL7j"),Object(u["a"])(J,r,i,!1,null,null,null)),N=K.exports,D=n("yT7P"),U=n("lIOY"),Q=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8e3;setTimeout(function(){document.dispatchEvent(new Event(t))},e)};window.addEventListener("beforeinstallprompt",function(t){t.preventDefault(),t.prompt(),t.userChoice.then(function(t){Q("install:".concat(t.outcome))})});var W={updated:function(t){Q("sw:update"),Q("sw:update",4e4)},registered:function(t){t.update()},error:function(t){Q("sw:error"),console.error("Error during service worker registration:",t)}};Object(U["a"])("".concat("/gravatar-url-generator/","service-worker.js"),Object(D["a"])({},W,{ready:function(){},cached:function(t){},offline:function(){console.log("No internet connection found. App is running in offline mode.")}})),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(N)}}).$mount("#app")},ZL7j:function(t,e,n){"use strict";var a=n("slcd"),r=n.n(a);r.a},aBrV:function(t,e,n){"use strict";var a=n("sZqr"),r=n.n(a);r.a},oHt2:function(t,e,n){},sZqr:function(t,e,n){},slcd:function(t,e,n){},w212:function(t,e,n){"use strict";var a=n("RorB"),r=n.n(a);r.a}});
//# sourceMappingURL=app-legacy.9e504805.js.map