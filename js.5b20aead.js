parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"AcXG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.bro=void 0;var e=function(e){return"".concat(e,", bro")};exports.bro=e;
},{}],"LDUH":[function(require,module,exports) {

},{}],"N8YO":[function(require,module,exports) {
var e=document.querySelector(".main-header");function n(){document.getElementById("menu-btn").checked=!1}window.addEventListener("scroll",function(){window.scrollY>150?e.classList.add("scrolled"):e.classList.remove("scrolled")}),document.getElementById("logo-btn").addEventListener("click",function(){document.getElementById("menu-btn").checked=!1}),document.getElementById("myDIV").addEventListener("click",n);
},{}],"U3kL":[function(require,module,exports) {
module.exports="ava01.3e3270dd.svg";
},{}],"RM8J":[function(require,module,exports) {
module.exports="ava02.c53d9bc5.svg";
},{}],"GZl1":[function(require,module,exports) {
module.exports="ava03.1a2a6259.svg";
},{}],"ZgAE":[function(require,module,exports) {
module.exports="ava04.4be22941.svg";
},{}],"SftP":[function(require,module,exports) {
module.exports="ava05.fa4a041a.svg";
},{}],"Uv72":[function(require,module,exports) {
module.exports="ava06.b6fa43a6.svg";
},{}],"YZJt":[function(require,module,exports) {
module.exports="ava07.50c91fa1.svg";
},{}],"twa3":[function(require,module,exports) {
module.exports="ava08.960cdbf9.svg";
},{}],"kWwJ":[function(require,module,exports) {
module.exports="ava09.1bc0983e.svg";
},{}],"Hio3":[function(require,module,exports) {
module.exports="ava11.285fc9cc.svg";
},{}],"aXuL":[function(require,module,exports) {
module.exports="ava12.ee54b6dc.svg";
},{}],"StXS":[function(require,module,exports) {
module.exports="ava13.aa6d41fd.svg";
},{}],"ZGpK":[function(require,module,exports) {
"use strict";var e=l(require("../images/svg/ava01.svg")),a=l(require("../images/svg/ava02.svg")),t=l(require("../images/svg/ava03.svg")),v=l(require("../images/svg/ava04.svg")),r=l(require("../images/svg/ava05.svg")),s=l(require("../images/svg/ava06.svg")),g=l(require("../images/svg/ava07.svg")),u=l(require("../images/svg/ava08.svg")),n=l(require("../images/svg/ava09.svg")),i=l(require("../images/svg/ava11.svg")),o=l(require("../images/svg/ava12.svg")),d=l(require("../images/svg/ava13.svg"));function l(e){return e&&e.__esModule?e:{default:e}}function m(e){return e[Math.floor(Math.random()*e.length)]}var f=[a.default,t.default,v.default,r.default,s.default,g.default,u.default,n.default,i.default,o.default,d.default],c=["Hallo","Hi","안녕하세요","Hello","Hola","Moin","Yoo"],q=document.getElementById("hover");q.addEventListener("mouseenter",function(){var e=document.getElementById("hover"),a=m(f);e.src=a;var t=m(c);document.getElementById("yoo").innerText="".concat(t,"!")});var y=document.getElementById("hover");y.addEventListener("mouseleave",function(){document.getElementById("hover").src=e.default;var a=m(c);document.getElementById("yoo").innerText="YTK ".concat(a,"!")});
},{"../images/svg/ava01.svg":"U3kL","../images/svg/ava02.svg":"RM8J","../images/svg/ava03.svg":"GZl1","../images/svg/ava04.svg":"ZgAE","../images/svg/ava05.svg":"SftP","../images/svg/ava06.svg":"Uv72","../images/svg/ava07.svg":"YZJt","../images/svg/ava08.svg":"twa3","../images/svg/ava09.svg":"kWwJ","../images/svg/ava11.svg":"Hio3","../images/svg/ava12.svg":"aXuL","../images/svg/ava13.svg":"StXS"}],"YnV0":[function(require,module,exports) {
var e=document.getElementById("logo");e.addEventListener("mouseover",function(t){t.preventDefault,e.classList.remove("run-animation"),e.offsetWidth,e.classList.add("run-animation")},!1);
},{}],"AKWh":[function(require,module,exports) {
gsap.registerPlugin(ScrollTrigger,ScrollToPlugin),ScrollTrigger.defaults({toggleActions:"restart pause resume pause"}),gsap.utils.toArray(".nav-link a").forEach(function(r){r.addEventListener("click",function(r){r.preventDefault(),gsap.to(window,{duration:1,scrollTo:r.target.getAttribute("href")})})});
},{}],"bLn9":[function(require,module,exports) {
var t=document.querySelector(".portfolio-filter"),e=t.children,o=e.length,c=document.querySelectorAll(".portfolio-item"),r=c.length;console.log(r);for(var i=0;i<o;i++)e[i].addEventListener("click",function(){t.querySelector(".active").classList.remove("active"),this.classList.add("active");var e=this.getAttribute("data-filter");console.log(e);for(var o=0;o<r;o++)console.log("".concat(c[o].getAttribute("data-category"),"ASdasd")),e===c[o].getAttribute("data-category")?(c[o].classList.remove("hide"),c[o].classList.add("show")):(c[o].classList.remove("show"),c[o].classList.add("hide")),"all"===e&&(c[o].classList.remove("hide"),c[o].classList.add("show"))});for(var l=document.querySelector(".lightbox"),n=l.querySelector(".lightbox-img"),s=l.querySelector(".lightbox-close"),a=l.querySelector(".caption-text"),d=l.querySelector(".caption-counter"),u=0,g=function(t){c[t].addEventListener("click",function(){u=t,m(),L()})},f=0;f<r;f++)g(f);function h(){u===r-1?u=0:u++,m()}function v(){0===u?u=r-1:u--,m()}function L(){l.classList.toggle("open")}function m(){imgSrc=c[u].querySelector(".portfolio-img img").getAttribute("src"),n.src=imgSrc,a.innerHTML=c[u].querySelector("h4").innerHTML,d.innerHTML="".concat(u+1," of ").concat(r)}l.addEventListener("click",function(t){t.target!==s&&t.target!==l||L()});
},{}],"QvaY":[function(require,module,exports) {
"use strict";var e=require("./bro");require("../styles/main.scss"),require("./scroll.js"),require("./swap.js"),require("./rerun.js"),require("./custom-gsap.js"),require("./lightbox.js"),require("../styles/glide.core.scss"),require("../styles/glide.theme.scss"),document.querySelector("h4").textContent=(0,e.bro)("How's it going");
},{"./bro":"AcXG","../styles/main.scss":"LDUH","./scroll.js":"N8YO","./swap.js":"ZGpK","./rerun.js":"YnV0","./custom-gsap.js":"AKWh","./lightbox.js":"bLn9","../styles/glide.core.scss":"LDUH","../styles/glide.theme.scss":"LDUH"}]},{},["QvaY"], null)
//# sourceMappingURL=js.5b20aead.js.map