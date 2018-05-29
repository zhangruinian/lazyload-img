!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.LazyLoad=t():e.LazyLoad=t()}(this,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={dataSrc:"src",root:null,rootMargin:0,threshold:[0]},this.io=null,this._elements=[],Object.assign(this.options,t),this._init()}return n(e,[{key:"_init",value:function(){console.log(this.options);var e=this.options.dataSrc,t=this.options.root||document;this._setObserver(),this._elements=Array.prototype.slice.call(t.querySelectorAll("img[data-"+e+"]")),this._checkImgs()}},{key:"_setObserver",value:function(){var e=this;if(!("IntersectionObserver"in window))return console.warn("当前浏览器不支持IntersectionObserver或没有加入相应polyfill ");this.io=new IntersectionObserver(function(t){console.log(t);var o=!0,n=!1,r=void 0;try{for(var i,s=t[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){var u=i.value,a=u.target,l=u.intersectionRatio;l>0&&l<=1&&(console.log(a.dataset.src+"进入可视区.."),e._loadImg(a))}}catch(e){n=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(n)throw r}}},this.options)}},{key:"_loadImg",value:function(e){var t=this,o=e.dataset.src;e.src=o,e.onload=e.onerror=function(){console.log(this.dataset.src+"图片加载完成"),t.io&&t.io.unobserve(e)}}},{key:"_checkImgs",value:function(){var e=this;this._io||this.update(),this._elements.forEach(function(t){e.io.observe(t)})}},{key:"update",value:function(){var e=this;this.io||this._elements.forEach(function(t){e._loadImg(t)})}},{key:"destroy",value:function(){this.io.disconnect(),this.io=null,this.options=null}}]),e}();t.default=r}]).default});
//# sourceMappingURL=lazyLoadImg.js.map