!function(){var t={148:function(){const t="card__button--loader",e=e=>{let{currentTarget:n}=e;n.classList.add(t),n.disabled=!0,fetch("https://jsonplaceholder.typicode.com/todos/1").then((()=>{n.classList.remove(t),n.disabled=!1,n.classList.add("card__button--incart"),n.textContent="В корзине"}))};window.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".card__button").forEach((t=>{t.addEventListener("click",e)}))}))},934:function(){const t="navigation__toggle--closed",e="navigation__toggle--open",n="menu--open",o=document.querySelector(".menu"),r=document.querySelector(".navigation__toggle-button"),s=document.querySelector(".navigation__toggle"),c=()=>{const r=s.classList.contains(t);s.classList.toggle(e,r),s.classList.toggle(t,!r),o.classList.toggle(n,r)};window.addEventListener("DOMContentLoaded",(()=>{r.addEventListener("click",c)}))},91:function(t){"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},75:function(t,e,n){"use strict";t.exports=n.p+"assets/adam-creation.b629db9d.jpg"},490:function(t,e,n){"use strict";t.exports=n.p+"assets/anathomy.b116d71e.jpg"},797:function(t,e,n){"use strict";t.exports=n.p+"assets/lords-supper.aca52fca.jpg"},322:function(t,e,n){"use strict";t.exports=n.p+"assets/venera.7dc96b26.jpg"},937:function(t,e,n){"use strict";t.exports=n.p+"assets/logo.2dc733fb.svg"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.m=t,n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t}(),n.b=document.baseURI||self.location.href,function(){"use strict";var t=n(91),e=n.n(t),o=new URL(n(937),n.b),r=new URL(n(322),n.b),s=new URL(n(797),n.b),c=new URL(n(75),n.b),i=new URL(n(490),n.b);e()(o);e()(r),e()(s),e()(c),e()(i),n(934),n(148)}()}();