// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/bro.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bro = void 0;

var bro = function bro(greeting) {
  return "".concat(greeting, ", bro");
};

exports.bro = bro;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/scroll.js":[function(require,module,exports) {
var header = document.querySelector('.main-header');
window.addEventListener('scroll', function () {
  var scrollPos = window.scrollY;

  if (scrollPos > 150) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

function myFunction() {
  document.getElementById('menu-btn').checked = false;
}

document.getElementById('logo-btn').addEventListener('click', function () {
  // console.log('click');
  document.getElementById('menu-btn').checked = false;
});
document.getElementById('myDIV').addEventListener('click', myFunction);
},{}],"images/svg/ava01.svg":[function(require,module,exports) {
module.exports = "/ava01.4d054c61.svg";
},{}],"images/svg/ava02.svg":[function(require,module,exports) {
module.exports = "/ava02.0b0b6f9c.svg";
},{}],"images/svg/ava03.svg":[function(require,module,exports) {
module.exports = "/ava03.bf8eaf42.svg";
},{}],"images/svg/ava04.svg":[function(require,module,exports) {
module.exports = "/ava04.1e5173c7.svg";
},{}],"images/svg/ava05.svg":[function(require,module,exports) {
module.exports = "/ava05.f3b70f85.svg";
},{}],"images/svg/ava06.svg":[function(require,module,exports) {
module.exports = "/ava06.0dbc8532.svg";
},{}],"images/svg/ava07.svg":[function(require,module,exports) {
module.exports = "/ava07.8425800f.svg";
},{}],"images/svg/ava08.svg":[function(require,module,exports) {
module.exports = "/ava08.b031a973.svg";
},{}],"images/svg/ava09.svg":[function(require,module,exports) {
module.exports = "/ava09.6c044392.svg";
},{}],"images/svg/ava11.svg":[function(require,module,exports) {
module.exports = "/ava11.2dfa909a.svg";
},{}],"images/svg/ava12.svg":[function(require,module,exports) {
module.exports = "/ava12.952462bf.svg";
},{}],"images/svg/ava13.svg":[function(require,module,exports) {
module.exports = "/ava13.15035cdc.svg";
},{}],"js/swap.js":[function(require,module,exports) {
"use strict";

var _ava = _interopRequireDefault(require("../images/svg/ava01.svg"));

var _ava2 = _interopRequireDefault(require("../images/svg/ava02.svg"));

var _ava3 = _interopRequireDefault(require("../images/svg/ava03.svg"));

var _ava4 = _interopRequireDefault(require("../images/svg/ava04.svg"));

var _ava5 = _interopRequireDefault(require("../images/svg/ava05.svg"));

var _ava6 = _interopRequireDefault(require("../images/svg/ava06.svg"));

var _ava7 = _interopRequireDefault(require("../images/svg/ava07.svg"));

var _ava8 = _interopRequireDefault(require("../images/svg/ava08.svg"));

var _ava9 = _interopRequireDefault(require("../images/svg/ava09.svg"));

var _ava10 = _interopRequireDefault(require("../images/svg/ava11.svg"));

var _ava11 = _interopRequireDefault(require("../images/svg/ava12.svg"));

var _ava12 = _interopRequireDefault(require("../images/svg/ava13.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function randomPick(arr) {
  var selected = arr[Math.floor(Math.random() * arr.length)];
  return selected;
}

var images = [_ava2.default, _ava3.default, _ava4.default, _ava5.default, _ava6.default, _ava7.default, _ava8.default, _ava9.default, _ava10.default, _ava11.default, _ava12.default];
var txt = ['Hallo', 'Hi', '안녕하세요', 'Hello', 'Hola', 'Moin', 'Yoo']; // function randomHover() {}

var test1 = document.getElementById('hover');
test1.addEventListener('mouseenter', function () {
  var myImage = document.getElementById('hover');
  var selImage = randomPick(images);
  myImage.src = selImage;
  var selText = randomPick(txt);
  document.getElementById('yoo').innerText = "".concat(selText, "!");
});
var test2 = document.getElementById('hover');
test2.addEventListener('mouseleave', function () {
  var myImage = document.getElementById('hover');
  myImage.src = _ava.default;
  var selText = randomPick(txt);
  document.getElementById('yoo').innerText = "YTK ".concat(selText, "!");
});
},{"../images/svg/ava01.svg":"images/svg/ava01.svg","../images/svg/ava02.svg":"images/svg/ava02.svg","../images/svg/ava03.svg":"images/svg/ava03.svg","../images/svg/ava04.svg":"images/svg/ava04.svg","../images/svg/ava05.svg":"images/svg/ava05.svg","../images/svg/ava06.svg":"images/svg/ava06.svg","../images/svg/ava07.svg":"images/svg/ava07.svg","../images/svg/ava08.svg":"images/svg/ava08.svg","../images/svg/ava09.svg":"images/svg/ava09.svg","../images/svg/ava11.svg":"images/svg/ava11.svg","../images/svg/ava12.svg":"images/svg/ava12.svg","../images/svg/ava13.svg":"images/svg/ava13.svg"}],"js/rerun.js":[function(require,module,exports) {
// This changes everything
// retrieve the element
var element = document.getElementById('logo'); // reset the transition by...

element.addEventListener('mouseover', function (e) {
  e.preventDefault; // -> removing the class

  element.classList.remove('run-animation'); // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  // This was, from the original tutorial, will no work in strict mode. Thanks Felis Phasma! The next uncommented line is the fix.
  // element.offsetWidth = element.offsetWidth;

  void element.offsetWidth; // -> and re-adding the class

  element.classList.add('run-animation');
}, false);
},{}],"js/custom-gsap.js":[function(require,module,exports) {
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
ScrollTrigger.defaults({
  toggleActions: 'restart pause resume pause'
});
gsap.utils.toArray('.nav-link a').forEach(function (a) {
  a.addEventListener('click', function (e) {
    e.preventDefault();
    gsap.to(window, {
      duration: 1,
      scrollTo: e.target.getAttribute('href')
    });
  });
});
},{}],"js/lightbox.js":[function(require,module,exports) {
// Portfolio Item Filter
var filterContainer = document.querySelector('.portfolio-filter');
var filterBtns = filterContainer.children;
var totalFilterBtn = filterBtns.length;
var portfolioItems = document.querySelectorAll('.portfolio-item');
var totalPortfolioItem = portfolioItems.length;
console.log(totalPortfolioItem);

for (var i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener('click', function () {
    filterContainer.querySelector('.active').classList.remove('active');
    this.classList.add('active');
    var filterValue = this.getAttribute('data-filter');
    console.log(filterValue);

    for (var k = 0; k < totalPortfolioItem; k++) {
      console.log("".concat(portfolioItems[k].getAttribute('data-category'), "ASdasd"));

      if (filterValue === portfolioItems[k].getAttribute('data-category')) {
        portfolioItems[k].classList.remove('hide');
        portfolioItems[k].classList.add('show');
      } else {
        portfolioItems[k].classList.remove('show');
        portfolioItems[k].classList.add('hide');
      }

      if (filterValue === 'all') {
        portfolioItems[k].classList.remove('hide');
        portfolioItems[k].classList.add('show');
      }
    }
  });
} // console.log(filterContainer);
// console.log(filterBtns);
// console.log(totalFilterBtn);
// console.log(portfolioItems);
// Portfolio Ligthbox


var lightbox = document.querySelector('.lightbox');
var lightboxImg = lightbox.querySelector('.lightbox-img');
var lightboxClose = lightbox.querySelector('.lightbox-close');
var lightboxText = lightbox.querySelector('.caption-text');
var lightboxCounter = lightbox.querySelector('.caption-counter');
var itemIndex = 0;

var _loop = function _loop(_i) {
  portfolioItems[_i].addEventListener('click', function () {
    itemIndex = _i;
    changeItem();
    toggleLightbox();
  });
};

for (var _i = 0; _i < totalPortfolioItem; _i++) {
  _loop(_i);
}

function nextItem() {
  if (itemIndex === totalPortfolioItem - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }

  changeItem();
}

function prevItem() {
  if (itemIndex === 0) {
    itemIndex = totalPortfolioItem - 1;
  } else {
    itemIndex--;
  }

  changeItem();
}

function toggleLightbox() {
  lightbox.classList.toggle('open');
}

function changeItem() {
  imgSrc = portfolioItems[itemIndex].querySelector('.portfolio-img img').getAttribute('src');
  lightboxImg.src = imgSrc;
  lightboxText.innerHTML = portfolioItems[itemIndex].querySelector('h4').innerHTML;
  lightboxCounter.innerHTML = "".concat(itemIndex + 1, " of ").concat(totalPortfolioItem);
} // close Lightbox


lightbox.addEventListener('click', function (event) {
  if (event.target === lightboxClose || event.target === lightbox) {
    toggleLightbox();
  }
});
},{}],"styles/glide.core.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/glide.theme.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

var _bro = require("./bro");

require("../styles/main.scss");

require("./scroll.js");

require("./swap.js");

require("./rerun.js");

require("./custom-gsap.js");

require("./lightbox.js");

require("../styles/glide.core.scss");

require("../styles/glide.theme.scss");

document.querySelector('h4').textContent = (0, _bro.bro)("How's it going");
},{"./bro":"js/bro.js","../styles/main.scss":"styles/main.scss","./scroll.js":"js/scroll.js","./swap.js":"js/swap.js","./rerun.js":"js/rerun.js","./custom-gsap.js":"js/custom-gsap.js","./lightbox.js":"js/lightbox.js","../styles/glide.core.scss":"styles/glide.core.scss","../styles/glide.theme.scss":"styles/glide.theme.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55652" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map