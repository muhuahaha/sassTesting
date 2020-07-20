parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"AcXG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.bro=void 0;var e=function(e){return"".concat(e)};exports.bro=e;
},{}],"LDUH":[function(require,module,exports) {

},{}],"N8YO":[function(require,module,exports) {
var e=document.querySelector(".main-header"),t=document.querySelector(".bottomrightup");function o(){document.getElementById("menu-btn").checked=!1}window.addEventListener("scroll",function(){window.scrollY>150?(e.classList.add("scrolled"),t.classList.remove("up"),gsap.to("#yoo",{color:"white",text:"YTK",duration:.5}),gsap.to(".nav-link a",{color:"white",duration:.5}),document.getElementById("yoo").innerText="YTK"):(e.classList.remove("scrolled"),t.classList.add("up"),gsap.to("#yoo",{color:"#040c26",text:"Young-Tae Kim",duration:.5}),gsap.to(".nav-link a",{color:"#040c26",duration:.5}))}),document.getElementById("logo-btn").addEventListener("click",function(){document.getElementById("menu-btn").checked=!1}),document.getElementById("myDIV").addEventListener("click",o);
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
},{}],"h91y":[function(require,module,exports) {
module.exports="ebay.62ebb4b5.jpg";
},{}],"ZR1b":[function(require,module,exports) {
module.exports="amazon.80e75afb.jpg";
},{}],"oIAL":[function(require,module,exports) {
module.exports="skins.df65d053.jpg";
},{}],"v9B8":[function(require,module,exports) {
module.exports="amazon1.094beb28.jpg";
},{}],"jAMM":[function(require,module,exports) {
module.exports="amazon2.9f030a9c.jpg";
},{}],"Qxrk":[function(require,module,exports) {
module.exports="amazon3.51e82f84.jpg";
},{}],"se6b":[function(require,module,exports) {
module.exports="amazon4.a148dddb.jpg";
},{}],"IfTf":[function(require,module,exports) {
module.exports="amazon5.2b571f38.jpg";
},{}],"ZGpK":[function(require,module,exports) {
"use strict";var e=p(require("../images/svg/ava01.svg")),a=p(require("../images/svg/ava02.svg")),t=p(require("../images/svg/ava03.svg")),r=p(require("../images/svg/ava04.svg")),n=p(require("../images/svg/ava05.svg")),o=p(require("../images/svg/ava06.svg")),u=p(require("../images/svg/ava07.svg")),s=p(require("../images/svg/ava08.svg")),i=p(require("../images/svg/ava09.svg")),v=p(require("../images/svg/ava11.svg")),g=p(require("../images/svg/ava12.svg")),d=p(require("../images/svg/ava13.svg")),m=p(require("../images/ebay.jpg")),l=p(require("../images/amazon.jpg")),c=p(require("../images/skins.jpg")),f=p(require("../images/amazon1.jpg")),q=p(require("../images/amazon2.jpg")),E=p(require("../images/amazon3.jpg")),y=p(require("../images/amazon4.jpg")),h=p(require("../images/amazon5.jpg"));function p(e){return e&&e.__esModule?e:{default:e}}function B(e){return e[Math.floor(Math.random()*e.length)]}var I=[a.default,t.default,r.default,n.default,o.default,u.default,s.default,i.default,v.default,g.default,d.default],j=[m.default,l.default,c.default,f.default,q.default,E.default,y.default,h.default],L=["Hallo","Hi","안녕하세요","Hello","Hola","Moin","Yoo"],z=document.getElementById("hover");z.addEventListener("mouseenter",function(){var e=document.getElementById("hover"),a=B(I);e.src=a;var t=B(L);document.getElementById("yoo").innerText="".concat(t,"!")}),z.addEventListener("mouseleave",function(){document.getElementById("hover").src=e.default;var a=B(L);document.getElementById("yoo").innerText="YTK ".concat(a,"!")});var T=document.getElementById("hover1");T.addEventListener("mouseenter",function(){var e=document.getElementById("hover1"),a=B(I);e.src=a;var t=B(L);document.getElementById("yoo").innerText="".concat(t,"!")}),T.addEventListener("mouseleave",function(){var e=document.getElementById("hover1"),a=B(I);e.src=a;var t=B(L);document.getElementById("yoo").innerText="YTK ".concat(t,"!")});var x=document.querySelector("#hover2");x.addEventListener("click",function(){var e=document.getElementById("hover2"),a=B(j);e.src=a,gsap.to("#hover2",{scale:1.3,duration:.4,ease:"power4"})}),x.addEventListener("mouseenter",function(){gsap.to("#hover2",{scale:1.3,duration:.4,ease:"power4"})}),x.addEventListener("mouseout",function(){gsap.to("#hover2",{scale:1,duration:.6,ease:"power4"})});
},{"../images/svg/ava01.svg":"U3kL","../images/svg/ava02.svg":"RM8J","../images/svg/ava03.svg":"GZl1","../images/svg/ava04.svg":"ZgAE","../images/svg/ava05.svg":"SftP","../images/svg/ava06.svg":"Uv72","../images/svg/ava07.svg":"YZJt","../images/svg/ava08.svg":"twa3","../images/svg/ava09.svg":"kWwJ","../images/svg/ava11.svg":"Hio3","../images/svg/ava12.svg":"aXuL","../images/svg/ava13.svg":"StXS","../images/ebay.jpg":"h91y","../images/amazon.jpg":"ZR1b","../images/skins.jpg":"oIAL","../images/amazon1.jpg":"v9B8","../images/amazon2.jpg":"jAMM","../images/amazon3.jpg":"Qxrk","../images/amazon4.jpg":"se6b","../images/amazon5.jpg":"IfTf"}],"YnV0":[function(require,module,exports) {
var e=document.getElementById("logo");e.addEventListener("mouseover",function(t){t.preventDefault,e.classList.remove("run-animation"),e.offsetWidth,e.classList.add("run-animation")},!1);
},{}],"OXPI":[function(require,module,exports) {
module.exports="1.937dea2e.jpg";
},{}],"aEiB":[function(require,module,exports) {
module.exports="2.d21dbd97.jpg";
},{}],"kdLI":[function(require,module,exports) {
module.exports="3.e679c62f.jpg";
},{}],"ugxK":[function(require,module,exports) {
module.exports="4.45f262d8.jpg";
},{}],"q7Ku":[function(require,module,exports) {
module.exports="5.1c88730f.jpg";
},{}],"of7Z":[function(require,module,exports) {
module.exports="6.2d693e7a.jpg";
},{}],"daMF":[function(require,module,exports) {
module.exports="7.895f817e.jpg";
},{}],"teXA":[function(require,module,exports) {
module.exports="8.cd3a2623.jpg";
},{}],"kBYf":[function(require,module,exports) {
module.exports="9.019a2722.jpg";
},{}],"KfYD":[function(require,module,exports) {
module.exports="10.b80e7d5c.jpg";
},{}],"wSU1":[function(require,module,exports) {
module.exports="11.5cab1d57.jpg";
},{}],"eFen":[function(require,module,exports) {
module.exports="12.39841399.jpg";
},{}],"bLn9":[function(require,module,exports) {
"use strict";var e=f(require("../images/portfolio/1.jpg")),t=f(require("../images/portfolio/2.jpg")),r=f(require("../images/portfolio/3.jpg")),o=f(require("../images/portfolio/4.jpg")),c=f(require("../images/portfolio/5.jpg")),i=f(require("../images/portfolio/6.jpg")),l=f(require("../images/portfolio/7.jpg")),u=f(require("../images/portfolio/8.jpg")),n=f(require("../images/portfolio/9.jpg")),a=f(require("../images/portfolio/10.jpg")),s=f(require("../images/portfolio/11.jpg")),d=f(require("../images/portfolio/12.jpg"));function f(e){return e&&e.__esModule?e:{default:e}}document.querySelector("#pic1").src=e.default,document.querySelector("#pic2").src=t.default,document.querySelector("#pic3").src=r.default,document.querySelector("#pic4").src=o.default,document.querySelector("#pic5").src=c.default,document.querySelector("#pic6").src=i.default,document.querySelector("#pic7").src=l.default,document.querySelector("#pic8").src=u.default,document.querySelector("#pic9").src=n.default,document.querySelector("#pic10").src=a.default,document.querySelector("#pic11").src=s.default,document.querySelector("#pic12").src=d.default;for(var g=document.querySelector(".portfolio-filter"),p=g.children,m=p.length,q=document.querySelectorAll(".portfolio-item"),y=q.length,v=0;v<m;v++)p[v].addEventListener("click",function(){g.querySelector(".active").classList.remove("active"),this.classList.add("active");for(var e=this.getAttribute("data-filter"),t=0;t<y;t++)e===q[t].getAttribute("data-category")?(q[t].classList.remove("hide"),q[t].classList.add("show")):(q[t].classList.remove("show"),q[t].classList.add("hide")),"all"===e&&(q[t].classList.remove("hide"),q[t].classList.add("show"))});var S=document.querySelector(".lightbox"),L=S.querySelector(".lightbox-img"),h=S.querySelector(".lightbox-close"),j=S.querySelector(".caption-text"),E=S.querySelector(".caption-counter"),b=0;function k(){S.classList.toggle("open")}function x(){var e=q[b].querySelector(".portfolio-img img").getAttribute("src");L.src=e,j.innerHTML=q[b].querySelector("h4").innerHTML,E.innerHTML="".concat(b+1," of ").concat(y)}for(var A=function(e){q[e].addEventListener("click",function(){b=e,x(),k()})},M=0;M<y;M++)A(M);S.addEventListener("click",function(e){e.target!==h&&e.target!==S||k()});var w=document.getElementById("prev");w.addEventListener("click",function(){b===y-1?b=0:b+=1,x()});var B=document.getElementById("next");B.addEventListener("click",function(){0===b?b=y-1:b-=1,x()});var H=document.getElementById("nextPic");H.addEventListener("click",function(){b===y-1?b=0:b+=1,x()});
},{"../images/portfolio/1.jpg":"OXPI","../images/portfolio/2.jpg":"aEiB","../images/portfolio/3.jpg":"kdLI","../images/portfolio/4.jpg":"ugxK","../images/portfolio/5.jpg":"q7Ku","../images/portfolio/6.jpg":"of7Z","../images/portfolio/7.jpg":"daMF","../images/portfolio/8.jpg":"teXA","../images/portfolio/9.jpg":"kBYf","../images/portfolio/10.jpg":"KfYD","../images/portfolio/11.jpg":"wSU1","../images/portfolio/12.jpg":"eFen"}],"YDqA":[function(require,module,exports) {
module.exports="callme0.078fbe0d.png";
},{}],"ryYw":[function(require,module,exports) {
module.exports="callme1.14f41685.png";
},{}],"e4vr":[function(require,module,exports) {
module.exports="callme2.9a530749.png";
},{}],"noJE":[function(require,module,exports) {
module.exports="callme4.3d338d45.png";
},{}],"OaBS":[function(require,module,exports) {
module.exports="callme6.896eaf63.png";
},{}],"QwsT":[function(require,module,exports) {
module.exports="callme7.99bd10d6.png";
},{}],"ACvr":[function(require,module,exports) {
module.exports="callme11.47c372df.png";
},{}],"H6Pk":[function(require,module,exports) {
module.exports="bg_purple2.683067c1.svg";
},{}],"yCUT":[function(require,module,exports) {
"use strict";var e=i(require("../images/portfolio/callme0.png")),t=i(require("../images/portfolio/callme1.png")),r=i(require("../images/portfolio/callme2.png")),c=i(require("../images/portfolio/callme4.png")),o=i(require("../images/portfolio/callme6.png")),n=i(require("../images/portfolio/callme7.png")),u=i(require("../images/portfolio/callme11.png")),l=i(require("../images/svg/bg_purple2.svg"));function i(e){return e&&e.__esModule?e:{default:e}}function a(i,a){var m,d,f,p=Date.now();function s(){if(m=i-((Date.now()-p)/1e3|0),f=m%60|0,d=(d=m/60|0)<10?"0".concat(d):d,f=f<10?"0".concat(f):f,a.textContent="".concat(d,":").concat(f),m<=0){document.querySelector("#time").innerText="Oh Yeah!",document.querySelectorAll(".portfolio .portfolio-item").forEach(function(e){e.style.flexBasis="25%"}),document.querySelector("#pic1").src=e.default,document.querySelector("#pic2").src=t.default,document.querySelector("#pic3").src=n.default,document.querySelector("#pic4").src=r.default,document.querySelector("#pic5").src=u.default,document.querySelector("#pic6").src=r.default,document.querySelector("#pic7").src=t.default,document.querySelector("#pic8").src=e.default,document.querySelector("#pic9").src=n.default,document.querySelector("#pic10").src=c.default,document.querySelector("#pic11").src=o.default,document.querySelector("#pic12").src=r.default;var s=document.querySelectorAll(".test7, test6"),q=document.querySelectorAll("h2, h4, .marquee span");document.getElementById("hi").innerText="Hi!",document.getElementById("ruf").innerText="Ruf",document.getElementById("mich").innerText="mich",document.getElementById("an").innerText="an 🚀",document.getElementById("tel").innerText="0172/541541",document.getElementById("tooltip").setAttribute("data-tooltip","HI#RUF#MICH#AN");var y="url(".concat(l.default,")");document.querySelector(".purple").style.backgroundImage=y,document.querySelectorAll("h5").forEach(function(e){e.innerText="0172/54154154"}),s.forEach(function(e){e.innerText="#Oh#YEAH#HI#RUF#MICH#AN"}),q.forEach(function(e){e.innerText="HI! RUF MICH AN!"}),document.title="HI#RUF#MICH#AN"}}s(),setInterval(s,1e3)}window.onload=function(){a(300,document.querySelector("#time"))};
},{"../images/portfolio/callme0.png":"YDqA","../images/portfolio/callme1.png":"ryYw","../images/portfolio/callme2.png":"e4vr","../images/portfolio/callme4.png":"noJE","../images/portfolio/callme6.png":"OaBS","../images/portfolio/callme7.png":"QwsT","../images/portfolio/callme11.png":"ACvr","../images/svg/bg_purple2.svg":"H6Pk"}],"wzuc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.config=void 0;var e={type:"carousel",animationDuration:400,animationTimingFunc:"ease-in-out",autoplay:4500,startAt:1,perView:1,gap:"40",breakpoints:{800:{perView:1}}};exports.config=e;
},{}],"QvaY":[function(require,module,exports) {
"use strict";var e=require("./bro");require("../styles/main.scss"),require("../styles/_about.scss"),require("./scroll.js"),require("./swap.js"),require("./rerun.js"),require("./lightbox.js"),require("../styles/glide.core.scss"),require("../styles/glide.theme.scss"),require("./timer.js");var t,n=require("./slider.js");function r(){var e=new Date,t=e.getHours(),n=e.getMinutes(),c=e.getSeconds();t=o(t),n=o(n),c=o(c),document.getElementById("clock").innerHTML="".concat(t,"<br />").concat(n,"<br />").concat(c),setTimeout(r,500)}function o(e){return e<10&&(e="0".concat(e)),e}function c(){var e=(new Date).toLocaleDateString("ko-KR",{weekday:"long",year:"numeric",month:"long",day:"numeric"});document.getElementById("datum").innerHTML=e}window.addEventListener("resize",function(e){clearTimeout(t),t=setTimeout(function(){window.location.reload()},1500)}),document.querySelector("h4").textContent=(0,e.bro)("#Nice#Skills"),new Glide(".glide",n.config).mount(),document.getElementById("clock").addEventListener("DOMContentLoaded",r()),document.getElementById("datum").addEventListener("load",c());var s,i=new Date,u=i.getHours();u<12?s="Guten Morgen":u>=12&&u<=17?s="Guten Tag":u>=17&&u<=24&&(s="Guten Abend"),document.getElementById("lblGreetings").innerHTML="<b>".concat(s),gsap.set(".wrapper1",{xPercent:-50,yPercent:-50}),gsap.set("#no02",{y:10}),gsap.set("#no03",{y:0});var a=400,d=7*a,l=document.querySelectorAll("#no01 .boxT"),m=document.querySelectorAll("#no02 .boxT"),g=document.querySelectorAll("#no03 .boxT"),y="+=".concat(d),q="-=".concat(d),p=gsap.utils.wrap(0,d);function b(e,t,n){return gsap.set(e,{x:function(e){return e*a}}),gsap.timeline().to(e,{x:n,modifiers:{x:function(e){return"".concat(p(parseFloat(e)),"px")}},duration:t,ease:"none",repeat:-1})}gsap.timeline().add(b(l,20,y),1).add(b(m,30,y),2).add(b(g,30,q),3);
},{"./bro":"AcXG","../styles/main.scss":"LDUH","../styles/_about.scss":"LDUH","./scroll.js":"N8YO","./swap.js":"ZGpK","./rerun.js":"YnV0","./lightbox.js":"bLn9","../styles/glide.core.scss":"LDUH","../styles/glide.theme.scss":"LDUH","./timer.js":"yCUT","./slider.js":"wzuc"}]},{},["QvaY"], null)
//# sourceMappingURL=js.638adc14.js.map