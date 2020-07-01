/*! For license information please see app.bundle.js.LICENSE */
!function(e){var t={};function i(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(a,o,function(t){return e[t]}.bind(null,o));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./",i(i.s=37)}([function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=function(e,t){var i=e[1]||"",a=e[3];if(!a)return i;if(t&&"function"==typeof btoa){var o=(n=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),r=a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"});return[i].concat(r).concat([o]).join("\n")}var n;return[i].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(a[r]=!0)}for(o=0;o<e.length;o++){var n=e[o];"number"==typeof n[0]&&a[n[0]]||(i&&!n[2]?n[2]=i:i&&(n[2]="("+n[2]+") and ("+i+")"),t.push(n))}},t}},function(e,t,i){var a,o,r={},n=(a=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=a.apply(this,arguments)),o}),s=function(e){var t={};return function(e){return void 0===t[e]&&(t[e]=function(e){return document.querySelector(e)}.call(this,e)),t[e]}}(),c=null,d=0,l=[],p=i(25);function u(e,t){for(var i=0;i<e.length;i++){var a=e[i],o=r[a.id];if(o){o.refs++;for(var n=0;n<o.parts.length;n++)o.parts[n](a.parts[n]);for(;n<a.parts.length;n++)o.parts.push(b(a.parts[n],t))}else{var s=[];for(n=0;n<a.parts.length;n++)s.push(b(a.parts[n],t));r[a.id]={id:a.id,refs:1,parts:s}}}}function h(e,t){for(var i=[],a={},o=0;o<e.length;o++){var r=e[o],n=t.base?r[0]+t.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};a[n]?a[n].parts.push(s):i.push(a[n]={id:n,parts:[s]})}return i}function m(e,t){var i=s(e.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=l[l.length-1];if("top"===e.insertAt)a?a.nextSibling?i.insertBefore(t,a.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),l.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(t)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function f(e){var t=document.createElement("style");return e.attrs.type="text/css",v(t,e.attrs),m(e,t),t}function v(e,t){Object.keys(t).forEach(function(i){e.setAttribute(i,t[i])})}function b(e,t){var i,a,o,r;if(t.transform&&e.css){if(!(r=t.transform(e.css)))return function(){};e.css=r}if(t.singleton){var n=d++;i=c||(c=f(t)),a=x.bind(null,i,n,!1),o=x.bind(null,i,n,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",v(t,e.attrs),m(e,t),t}(t),a=function(e,t,i){var a=i.css,o=i.sourceMap,r=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||r)&&(a=p(a));o&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var n=new Blob([a],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(n),s&&URL.revokeObjectURL(s)}.bind(null,i,t),o=function(){g(i),i.href&&URL.revokeObjectURL(i.href)}):(i=f(t),a=function(e,t){var i=t.css,a=t.media;a&&e.setAttribute("media",a);if(e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}.bind(null,i),o=function(){g(i)});return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=n()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var i=h(e,t);return u(i,t),function(e){for(var a=[],o=0;o<i.length;o++){var n=i[o];(s=r[n.id]).refs--,a.push(s)}e&&u(h(e,t),t);for(o=0;o<a.length;o++){var s;if(0===(s=a[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var y,w=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function x(e,t,i,a){var o=i?"":a.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var r=document.createTextNode(o),n=e.childNodes;n[t]&&e.removeChild(n[t]),n.length?e.insertBefore(r,n[t]):e.appendChild(r)}}},function(e){e.exports=JSON.parse('{"a":[{"id":1,"nombre":"Daniel D"},{"id":1457,"nombre":"Sergio Ferro"},{"id":3,"nombre":"Bruno M"},{"id":5,"nombre":"Manuel D"}]}')},function(e,t,i){"use strict";(function(e,a){var o,r=i(6);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:a;var n=Object(r.a)(o);t.a=n}).call(this,i(5),i(36)(e))},function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){"use strict";function a(e){var t,i=e.Symbol;return"function"==typeof i?i.observable?t=i.observable:(t=i("observable"),i.observable=t):t="@@observable",t}i.d(t,"a",function(){return a})},function(e,t,i){var a=i(8);"string"==typeof a&&(a=[[e.i,a,""]]);var o={transform:void 0};i(1)(a,o);a.locals&&(e.exports=a.locals)},function(e,t,i){var a=i(4);(e.exports=i(0)(!1)).push([e.i,"html {\r\n    touch-action:none;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    overflow-y: hidden;\r\n    overflow-x: hidden;\r\n    font-size: 3vmin;\r\n    /* inicio */\r\n    --imagen-pantalla-fondo01: url("+a(i(9))+");\r\n    --imagen-pantalla-fondo02: url("+a(i(10))+");\r\n    --imagen-fuera-servicio: url("+a(i(11))+");\r\n    /* tarjetachip */\r\n    --imagen-pantalla-fondo-tarjetachip: url("+a(i(12))+");\r\n    --imagen-pantalla-boquilla-tarjetachip: url("+a(i(13))+");\r\n    --imagen-pantalla-boquilla-baja-tarjetachip: url("+a(i(14))+");\r\n    --lectortarjetachip-tarjetachip: url("+a(i(15))+");\r\n    --tarjeta-visa-credito: url("+a(i(16))+");\r\n    --tarjeta-master-credito: url("+a(i(17))+");\r\n    --tarjeta-amex-credito: url("+a(i(18))+");\r\n    --ok-tarjetachip: url("+a(i(19))+");\r\n    /* vianda */\r\n    --imagen-pantalla-fondo-vianda: url("+a(i(20))+");\r\n    --imagen-pantalla-boquilla-vianda: url("+a(i(21))+");\r\n    --imagen-pantalla-boquilla-baja-vianda: url("+a(i(22))+");\r\n    --lectortarjetachip-vianda: url("+a(i(23))+");\r\n    --ok-vianda: url("+a(i(24))+");\r\n}\r\n\r\nbody {\r\n    overflow-y: hidden;\r\n    overflow-x: hidden;\r\n    -webkit-overflow-scrolling: touch;\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n\r\n}\r\n",""])},function(e,t,i){e.exports=i.p+"d0cb4f5ec624ac8a537225f6c6ad1fef.png"},function(e,t,i){e.exports=i.p+"67b4a8a9dbc3dfa0d10b17375f6a3cee.png"},function(e,t,i){e.exports=i.p+"cb55bc12736c052bcd4f93b5aa9dd0d0.png"},function(e,t,i){e.exports=i.p+"d5dda18366b611cc4822debb7d027709.png"},function(e,t,i){e.exports=i.p+"da23e146a0e7287c9e2a59361eb4924d.png"},function(e,t,i){e.exports=i.p+"d7f744307c5b42fc4b33ce2445166f9b.png"},function(e,t,i){e.exports=i.p+"5121d8d224cc57f983813f3db0a19382.png"},function(e,t,i){e.exports=i.p+"9eb94de00537b9855093acba4615cc0d.png"},function(e,t,i){e.exports=i.p+"3d05dd18656302c8a7d239ec54aefa76.png"},function(e,t,i){e.exports=i.p+"38f15f024bdfbea5dd2590b3cb9dae28.png"},function(e,t,i){e.exports=i.p+"4fb94238914721a33fb076f3c3df7432.png"},function(e,t,i){e.exports=i.p+"d0cb4f5ec624ac8a537225f6c6ad1fef.png"},function(e,t,i){e.exports=i.p+"da23e146a0e7287c9e2a59361eb4924d.png"},function(e,t,i){e.exports=i.p+"d7f744307c5b42fc4b33ce2445166f9b.png"},function(e,t,i){e.exports=i.p+"5121d8d224cc57f983813f3db0a19382.png"},function(e,t,i){e.exports=i.p+"4fb94238914721a33fb076f3c3df7432.png"},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var i=t.protocol+"//"+t.host,a=i+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r)?e:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?i+r:a+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,i){var a=i(27);"string"==typeof a&&(a=[[e.i,a,""]]);var o={transform:void 0};i(1)(a,o);a.locals&&(e.exports=a.locals)},function(e,t,i){var a=i(4);(e.exports=i(0)(!1)).push([e.i,"@font-face {\r\n    font-family: 'Nunito', sans-serif;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    src: url("+a(i(28))+") format('ttf');\r\n}\r\nhtml{\r\n    font-family: 'Nunito',sans-serif;\r\n}\r\n    ",""])},function(e,t,i){e.exports=i.p+"dba92cb9dc60f9f35cbf62428afd3ac1.ttf"},function(e,t,i){var a=i(30);"string"==typeof a&&(a=[[e.i,a,""]]);var o={transform:void 0};i(1)(a,o);a.locals&&(e.exports=a.locals)},function(e,t,i){(e.exports=i(0)(!1)).push([e.i,"html {\r\n    \r\n    --font-display-1-family:inherit;\r\n    --font-display-1-size:9.33rem;\r\n    --font-display-1-weight:300;\r\n\r\n    --font-display-2-family:inherit;\r\n    --font-display-2-size:4.66rem;\r\n    --font-display-2-weight:normal;\r\n\r\n    --font-display-3-family:inherit;\r\n    --font-display-3-size:3.75rem;\r\n    --font-display-3-weight:normal;\r\n\r\n    --font-display-4-family:inherit;\r\n    --font-display-4-size:2.83rem;\r\n    --font-display-4-weight:normal;\r\n\r\n    --font-headline-family:inherit;\r\n    --font-headline-size:2rem;\r\n    --font-headline-weight:normal;\r\n\r\n    --font-title-family:inherit;            \r\n    --font-title-size:1.66rem;\r\n    --font-title-weight:500;\r\n\r\n    --font-subheading-family:inherit;\r\n    --font-subheading-size:1.25rem;\r\n    --font-subheading-weight:normal;\r\n\r\n    --font-body-2-family:inherit;\r\n    --font-body-2-size: 1.08rem;\r\n    --font-body-2-weight:500;\r\n\r\n    --font-body-1-family:inherit;\r\n    --font-body-1-size: 1.08rem;\r\n    --font-body-1-weight:normal;\r\n\r\n    --font-caption-family:inherit;\r\n    --font-caption-size: 1rem;\r\n    --font-caption-weight:normal;\r\n\r\n    --font-button-family:inherit;\r\n    --font-button-size: 1.16rem;\r\n    --font-button-weight:500;\r\n\r\n    --font-header-family:inherit;\r\n    --font-header-size: 1.16rem;\r\n    --font-header-weight:500;\r\n\r\n    --font-subcaption-family:inherit;\r\n    --font-subcaption-size: .8rem;\r\n    --font-subcaption-weight:500;\r\n\r\n    --font-subindex-family:inherit;\r\n    --font-subindex-size: .6rem;\r\n    --font-subindex-weight:600;\r\n}",""])},function(e,t,i){var a=i(32);"string"==typeof a&&(a=[[e.i,a,""]]);var o={transform:void 0};i(1)(a,o);a.locals&&(e.exports=a.locals)},function(e,t,i){(e.exports=i(0)(!1)).push([e.i,"html{\r\n    --letra-oscura:#000000;\r\n    --letra-clara:#ffffff;\r\n    --pantalla-fondo:#978f92;\r\n    --pantalla-fondo-claro:#ffffff;\r\n    --pantalla-fondo-oscuro:#000000;\r\n    --boton-fondo:#ffde03;\r\n    --boton-texto:#646473;  \r\n    --titulo-texto:hsl(0, 0%, 95%);\r\n    --texto-oscuro:#646473;\r\n    --fondo-etiqueta:#ececec;\r\n    --color-precio:#b12121;    \r\n    --color-error:#ec0404;\r\n}",""])},function(e,t,i){var a=i(34);"string"==typeof a&&(a=[[e.i,a,""]]);var o={transform:void 0};i(1)(a,o);a.locals&&(e.exports=a.locals)},function(e,t,i){(e.exports=i(0)(!1)).push([e.i,"html {\r\n    --shadow-none-box: none;\r\n    --shadow-none-z: 0;\r\n\r\n    --shadow-elevation-2-box: 0 2px 2px 0 rgba(0, 0, 0, 0.14),0 1px 5px 0 rgba(0, 0, 0, 0.12),0 3px 1px -2px rgba(0, 0, 0, 0.2);\r\n    --shadow-elevation-2-z: 200;\r\n\r\n    --shadow-elevation-3-box: 0 3px 4px 0 rgba(0, 0, 0, 0.14),0 1px 8px 0 rgba(0, 0, 0, 0.12),0 3px 3px -2px rgba(0, 0, 0, 0.4);\r\n    --shadow-elevation-3-z: 300;\r\n\r\n    --shadow-elevation-4-box: 0 4px 5px 0 rgba(0, 0, 0, 0.14),0 1px 10px 0 rgba(0, 0, 0, 0.12),0 2px 4px -1px rgba(0, 0, 0, 0.4);\r\n    --shadow-elevation-4-z: 400;\r\n\r\n    --shadow-elevation-6-box: 0 6px 10px 0 rgba(0, 0, 0, 0.14),0 1px 18px 0 rgba(0, 0, 0, 0.12),0 3px 5px -1px rgba(0, 0, 0, 0.4);\r\n    --shadow-elevation-6-z: 600;\r\n\r\n    --shadow-elevation-8-box: 0 8px 10px 1px rgba(0, 0, 0, 0.14),0 3px 14px 2px rgba(0, 0, 0, 0.12),0 5px 5px -3px rgba(0, 0, 0, 0.4);\r\n    --shadow-elevation-8-z: 800;\r\n\r\n    --shadow-elevation-12-box: 0 12px 16px 1px rgba(0, 0, 0, 0.14),0 4px 22px 3px rgba(0, 0, 0, 0.12),0 6px 7px -4px rgba(0, 0, 0, 0.4);\r\n    --shadow-elevation-12-z: 1200;\r\n\r\n    --shadow-elevation-16-box: 0 16px 24px 2px rgba(0, 0, 0, 0.14),0  6px 30px 5px rgba(0, 0, 0, 0.12),0  8px 10px -5px rgba(0, 0, 0, 0.4);\r\n    --shadow-elevation-16-z: 1600;\r\n\r\n    --shadow-elevation-24-box: 0 24px 38px 3px rgba(0, 0, 0, 0.14),0 9px 46px 8px rgba(0, 0, 0, 0.12),0 11px 15px -7px rgba(0, 0, 0, 0.4);\r\n    --shadow-elevation-24-z: 2400;\r\n}",""])},function(e,t,i){(function(e){!function(t){"use strict";function i(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function a(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,i){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:i,enumerable:!0})}function r(e,t){r.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function n(e,t){n.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function s(e,t,i){s.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:i,enumerable:!0})}function c(e,t,i){var a=e.slice((i||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,a),e}function d(e){var t=void 0===e?"undefined":S(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,i,a,p,u,h){h=h||[];var m=(p=p||[]).slice(0);if(void 0!==u){if(a){if("function"==typeof a&&a(m,u))return;if("object"===(void 0===a?"undefined":S(a))){if(a.prefilter&&a.prefilter(m,u))return;if(a.normalize){var g=a.normalize(m,u,e,t);g&&(e=g[0],t=g[1])}}}m.push(u)}"regexp"===d(e)&&"regexp"===d(t)&&(e=e.toString(),t=t.toString());var f=void 0===e?"undefined":S(e),v=void 0===t?"undefined":S(t),b="undefined"!==f||h&&h[h.length-1].lhs&&h[h.length-1].lhs.hasOwnProperty(u),y="undefined"!==v||h&&h[h.length-1].rhs&&h[h.length-1].rhs.hasOwnProperty(u);if(!b&&y)i(new r(m,t));else if(!y&&b)i(new n(m,e));else if(d(e)!==d(t))i(new o(m,e,t));else if("date"===d(e)&&e-t!=0)i(new o(m,e,t));else if("object"===f&&null!==e&&null!==t)if(h.filter(function(t){return t.lhs===e}).length)e!==t&&i(new o(m,e,t));else{if(h.push({lhs:e,rhs:t}),Array.isArray(e)){var w;for(e.length,w=0;w<e.length;w++)w>=t.length?i(new s(m,w,new n(void 0,e[w]))):l(e[w],t[w],i,a,m,w,h);for(;w<t.length;)i(new s(m,w,new r(void 0,t[w++])))}else{var x=Object.keys(e),j=Object.keys(t);x.forEach(function(o,r){var n=j.indexOf(o);n>=0?(l(e[o],t[o],i,a,m,o,h),j=c(j,n)):l(e[o],void 0,i,a,m,o,h)}),j.forEach(function(e){l(void 0,t[e],i,a,m,e,h)})}h.length=h.length-1}else e!==t&&("number"===f&&isNaN(e)&&isNaN(t)||i(new o(m,e,t)))}function p(e,t,i,a){return a=a||[],l(e,t,function(e){e&&a.push(e)},i),a.length?a:void 0}function u(e,t,i){if(e&&t&&i&&i.kind){for(var a=e,o=-1,r=i.path?i.path.length-1:0;++o<r;)void 0===a[i.path[o]]&&(a[i.path[o]]="number"==typeof i.path[o]?[]:{}),a=a[i.path[o]];switch(i.kind){case"A":!function e(t,i,a){if(a.path&&a.path.length){var o,r=t[i],n=a.path.length-1;for(o=0;o<n;o++)r=r[a.path[o]];switch(a.kind){case"A":e(r[a.path[o]],a.index,a.item);break;case"D":delete r[a.path[o]];break;case"E":case"N":r[a.path[o]]=a.rhs}}else switch(a.kind){case"A":e(t[i],a.index,a.item);break;case"D":t=c(t,i);break;case"E":case"N":t[i]=a.rhs}return t}(i.path?a[i.path[o]]:a,i.index,i.item);break;case"D":delete a[i.path[o]];break;case"E":case"N":a[i.path[o]]=i.rhs}}}function h(e){return"color: "+E[e].color+"; font-weight: bold"}function m(e,t,i,a){var o=p(e,t);try{a?i.groupCollapsed("diff"):i.group("diff")}catch(e){i.log("diff")}o?o.forEach(function(e){var t=e.kind,a=function(e){var t=e.kind,i=e.path,a=e.lhs,o=e.rhs,r=e.index,n=e.item;switch(t){case"E":return[i.join("."),a,"→",o];case"N":return[i.join("."),o];case"D":return[i.join(".")];case"A":return[i.join(".")+"["+r+"]",n];default:return[]}}(e);i.log.apply(i,["%c "+E[t].text,h(t)].concat(k(a)))}):i.log("—— no diff ——");try{i.groupEnd()}catch(e){i.log("—— diff end —— ")}}function g(e,t,i,a){switch(void 0===e?"undefined":S(e)){case"object":return"function"==typeof e[a]?e[a].apply(e,k(i)):e[a];case"function":return e(t);default:return e}}function f(e,t){var i=t.logger,a=t.actionTransformer,o=t.titleFormatter,r=void 0===o?function(e){var t=e.timestamp,i=e.duration;return function(e,a,o){var r=["action"];return r.push("%c"+String(e.type)),t&&r.push("%c@ "+a),i&&r.push("%c(in "+o.toFixed(2)+" ms)"),r.join(" ")}}(t):o,n=t.collapsed,s=t.colors,c=t.level,d=t.diff,l=void 0===t.titleFormatter;e.forEach(function(o,p){var u=o.started,h=o.startedTime,f=o.action,v=o.prevState,b=o.error,y=o.took,w=o.nextState,j=e[p+1];j&&(w=j.prevState,y=j.started-u);var S=a(f),k="function"==typeof n?n(function(){return w},f,o):n,C=x(h),E=s.title?"color: "+s.title(S)+";":"",_=["color: gray; font-weight: lighter;"];_.push(E),t.timestamp&&_.push("color: gray; font-weight: lighter;"),t.duration&&_.push("color: gray; font-weight: lighter;");var T=r(S,C,y);try{k?s.title&&l?i.groupCollapsed.apply(i,["%c "+T].concat(_)):i.groupCollapsed(T):s.title&&l?i.group.apply(i,["%c "+T].concat(_)):i.group(T)}catch(e){i.log(T)}var P=g(c,S,[v],"prevState"),R=g(c,S,[S],"action"),A=g(c,S,[b,v],"error"),z=g(c,S,[w],"nextState");if(P)if(s.prevState){var O="color: "+s.prevState(v)+"; font-weight: bold";i[P]("%c prev state",O,v)}else i[P]("prev state",v);if(R)if(s.action){var M="color: "+s.action(S)+"; font-weight: bold";i[R]("%c action    ",M,S)}else i[R]("action    ",S);if(b&&A)if(s.error){var N="color: "+s.error(b,v)+"; font-weight: bold;";i[A]("%c error     ",N,b)}else i[A]("error     ",b);if(z)if(s.nextState){var $="color: "+s.nextState(w)+"; font-weight: bold";i[z]("%c next state",$,w)}else i[z]("next state",w);d&&m(v,w,i,k);try{i.groupEnd()}catch(e){i.log("—— log end ——")}})}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},_,e),i=t.logger,a=t.stateTransformer,o=t.errorTransformer,r=t.predicate,n=t.logErrors,s=t.diffPredicate;if(void 0===i)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var c=[];return function(e){var i=e.getState;return function(e){return function(d){if("function"==typeof r&&!r(i,d))return e(d);var l={};c.push(l),l.started=j.now(),l.startedTime=new Date,l.prevState=a(i()),l.action=d;var p=void 0;if(n)try{p=e(d)}catch(e){l.error=o(e)}else p=e(d);l.took=j.now()-l.started,l.nextState=a(i());var u=t.diff&&"function"==typeof s?s(i,d):t.diff;if(f(c,Object.assign({},t,{diff:u})),c.length=0,l.error)throw l.error;return p}}}}var b,y,w=function(e,t){return function(e,t){return new Array(t+1).join(e)}("0",t-e.toString().length)+e},x=function(e){return w(e.getHours(),2)+":"+w(e.getMinutes(),2)+":"+w(e.getSeconds(),2)+"."+w(e.getMilliseconds(),3)},j="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k=function(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)},C=[];b="object"===(void 0===e?"undefined":S(e))&&e?e:"undefined"!=typeof window?window:{},(y=b.DeepDiff)&&C.push(function(){void 0!==y&&b.DeepDiff===p&&(b.DeepDiff=y,y=void 0)}),i(o,a),i(r,a),i(n,a),i(s,a),Object.defineProperties(p,{diff:{value:p,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:function(e,t,i){e&&t&&l(e,t,function(a){i&&!i(e,t,a)||u(e,t,a)})},enumerable:!0},applyChange:{value:u,enumerable:!0},revertChange:{value:function(e,t,i){if(e&&t&&i&&i.kind){var a,o,r=e;for(o=i.path.length-1,a=0;a<o;a++)void 0===r[i.path[a]]&&(r[i.path[a]]={}),r=r[i.path[a]];switch(i.kind){case"A":!function e(t,i,a){if(a.path&&a.path.length){var o,r=t[i],n=a.path.length-1;for(o=0;o<n;o++)r=r[a.path[o]];switch(a.kind){case"A":e(r[a.path[o]],a.index,a.item);break;case"D":case"E":r[a.path[o]]=a.lhs;break;case"N":delete r[a.path[o]]}}else switch(a.kind){case"A":e(t[i],a.index,a.item);break;case"D":case"E":t[i]=a.lhs;break;case"N":t=c(t,i)}return t}(r[i.path[a]],i.index,i.item);break;case"D":case"E":r[i.path[a]]=i.lhs;break;case"N":delete r[i.path[a]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==y},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),p},enumerable:!0}});var E={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},_={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,i=e.getState;return"function"==typeof t||"function"==typeof i?v()({dispatch:t,getState:i}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};t.defaults=_,t.createLogger=v,t.logger=T,t.default=T,Object.defineProperty(t,"__esModule",{value:!0})}(t)}).call(this,i(5))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,i){"use strict";i.r(t);i(7),i(26),i(29),i(31),i(33);const a="[servidorBugs] RECIBIR",o="[servidorBugs] ENVIAR",r=()=>({type:"[servidorBugs] CONECTAR"}),n=e=>({type:"[ui] show error",message:e}),s=e=>({type:"[ui] MODO_PANTALLA",quePantalla:e}),c=(e,t,i)=>({type:"[ui] DISPARAR_TIMER",tiempo:e,target:t,pantallaQueLLamo:i}),d=()=>({type:"[ui] CANCELAR_TIMER"}),l=(e,t,i,a)=>({type:"[ui] MOSTRAR_ERROR",titulo:e,mensaje:t,target:i,pantallaQueLLamo:a});var p=i(3),u=function(){return Math.random().toString(36).substring(7).split("").join(".")},h={INIT:"@@redux/INIT"+u(),REPLACE:"@@redux/REPLACE"+u(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+u()}};function m(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function g(e,t){var i=t&&t.type;return"Given "+(i&&'action "'+String(i)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function f(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function v(e,t){var i=Object.keys(e);return Object.getOwnPropertySymbols&&i.push.apply(i,Object.getOwnPropertySymbols(e)),t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i}function b(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?v(i,!0).forEach(function(t){f(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function y(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}i(35);const w=e=>({type:"[servidorWS] ENVIAR_MENSAJE",mensaje:JSON.stringify(e)}),x={mensajeRecibido:null,recibidoTimeStamp:null},j={loading:0,errorVisible:!1,errorMessages:null,mediaSize:null,mediaOrientation:null,logged:"out",timeStampPantalla:null,errorTitulo:"",errorMensaje:"",errorTimeStamp:null,quePantalla:null,timer:null,intervalo:null,tiempo:null,pantallaQueLLamo:null},S=e=>({type:"[tarjetaChipRecarga] GUARDAR_USUARIO",usuario:e}),k=e=>({type:"[tarjetaChipRecarga] GUARDAR_IMPORTE_SALDO",saldo:e}),C=e=>({type:"[tarjetaChipRecarga] GUARDAR_IMPORTE_RECARGA",recarga:e}),E=e=>({type:"[tarjetaChipRecarga] GUARDAR_TARJETA_CREDITO_RECARGA",tarjeta:e}),_={usuario:null,usuarioTimeStamp:null,saldo:null,saldoTimeStamp:null,recarga:null,recargaTimeStamp:null,tarjeta:null,tarjetaTimeStamp:null},T=e=>({type:"[vianda] GUARDAR_TIPO_MENU",tipoMenu:e}),P=e=>({type:"[vianda] GUARDAR_MENU",menu:e}),R={tipoMenu:null,tipoMenuTimeStamp:null,menu:null,menuTimeStamp:null},A=String.fromCharCode(6),z=(String.fromCharCode(21),String.fromCharCode(5)),O=String.fromCharCode(2),M=String.fromCharCode(3),N="TES"+String.fromCharCode(0)+String.fromCharCode(0),$="VEN"+String.fromCharCode(104)+String.fromCharCode(0),D="CIE"+String.fromCharCode(0)+String.fromCharCode(0),I=e=>{let t=0;for(let i=0;i<e.length;i++)t^=e.substr(i,1).charCodeAt(0);return String.fromCharCode(255&t)},V="[posNet] COMANDO",q=e=>({type:"[posNet] INTERPRETAR",mensaje:e}),L=(e,t,i)=>({type:V,comando:e,timeOut:t,operadorTimeOut:i}),U=()=>({type:"[posNet] COMANDO_TEST",comandos:[{comando:encodeURIComponent(z),fin:A,verificado:!1},{comando:encodeURIComponent(O+N+M+I(N+M)),fin:M,verificado:!0},{comando:encodeURIComponent(A),fin:null,verificado:!1}]}),B=({monto:e=0,numeroFactura:t=0,cuotas:i=0,codigoTarjeta:a="",codigoPlan:o="",montoPropina:r=0,codigoComercio:n="",nombreComercio:s="",cuitComercio:c="",modo:d=1}={})=>{let l=(100*e).toString().padStart(12,"0");return l+=t.toString().padEnd(12,"0"),l+=i.toString().padStart(2,"0"),l+="VVI",l+=o.padStart(1," "),l+=(100*r).toString().padStart(12,"0"),l+=n.padEnd(15," "),l+=s.padEnd(23," "),l+=c.padEnd(23," "),l+=String.fromCharCode(d),{type:"[posNet] COMANDO_VENTA",comandos:[{comando:encodeURIComponent(z),fin:A,verificado:!1},{comando:encodeURIComponent(O+$+l+M+I($+l+M)),fin:M,verificado:!0,timeOut:3e5},{comando:encodeURIComponent(A),fin:null,verificado:!1}]}},H=()=>({type:"[posNet] COMANDO_CIERRE",comandos:[{comando:encodeURIComponent(z),fin:A,verificado:!1},{comando:encodeURIComponent(O+D+M+I(D+M)),fin:M,verificado:!0,timeOut:6e4},{comando:encodeURIComponent(A),fin:null,verificado:!1}]}),F={respuesta:"",respuestaCodigo:"",respuestaMensaje:"",control:"",fin:!1,correcto:!1,respuestaTimeStamp:null,finDeMensaje:!1,ultimoComando:null,ultimoTimeOut:null,operadorTimeOut:null,finTimeOut:null,reintentos:0,comandos:[]},G="[tarjetaChip] GRABAR",J="[tarjetaChip] LEER",W="[tarjetaChip] SERVICIO",Q="[tarjetaChip] BUFFER",Y=(e,t)=>({type:G,importe:e,nextActions:t}),K=()=>({type:J}),X=e=>({type:W,activo:e}),Z={buffer:"",colocada:null,usuario:null,credito:null,enServicio:!1,enServicioTimeStamp:null,errorServicioTimeStamp:null,errorEnTarjeta:null,respuestaTimeStamp:null,conectado:!1,nextActions:[]},ee={prendidaTimeStamp:null,apagadaTimeStamp:null,onlineTimeStamp:null,offlineTimeStamp:null,on:!1,online:!1},te=e=>({type:"[aplicacion] Pedir Archivo",mensaje:e}),ie={timeStamp:null,entities:{menu:null,menuTipo:null}},ae=function(e){for(var t=Object.keys(e),i={},a=0;a<t.length;a++){var o=t[a];"function"==typeof e[o]&&(i[o]=e[o])}var r,n=Object.keys(i);try{!function(e){Object.keys(e).forEach(function(t){var i=e[t];if(void 0===i(void 0,{type:h.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===i(void 0,{type:h.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+h.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(i)}catch(e){r=e}return function(e,t){if(void 0===e&&(e={}),r)throw r;for(var a=!1,o={},s=0;s<n.length;s++){var c=n[s],d=i[c],l=e[c],p=d(l,t);if(void 0===p){var u=g(c,t);throw new Error(u)}o[c]=p,a=a||p!==l}return(a=a||n.length!==Object.keys(e).length)?o:e}}({operadora:(e=x,t)=>{const i={...e};switch(t.type){case"[servidorWS] RECIBIR_MENSAJE":i.mensajeRecibido=t.mensaje,i.recibidoTimeStamp=(new Date).getTime()}return i},ui:(e=j,t)=>{const i={...e};switch(t.type){case"[ui] show spinner":i.loading+=1;break;case"[ui] hide spinner":i.loading-=1;break;case"[ui] show error":i.errorVisible=!0,i.errorMessages=t.message;break;case"[ui] hide error":i.errorVisible=!1,i.errorMessages="";break;case"[ui] media size change":i.mediaSize=t.media;break;case"[ui] media orientation change":i.mediaOrientation=t.media;break;case"[ui] LOGGED":i.logged=t.inOut;break;case"[ui] MODO_PANTALLA":i.timeStampPantalla=(new Date).getTime(),i.quePantalla=t.quePantalla;break;case"[ui] ERROR_TITULO":i.errorTitulo=t.errorTitulo;break;case"[ui] ERROR_MENSAJE":i.errorMensaje=t.errorMensaje;break;case"[ui] SET_TIMER":i.timer&&clearTimeout(i.timer),i.intervalo&&clearInterval(i.intervalo),i.timer=t.timer,i.intervalo=t.intervalo,i.tiempo=t.tiempo,i.pantallaQueLLamo=t.pantallaQueLLamo;break;case"[ui] CANCELAR_TIMER":i.timer&&clearTimeout(i.timer),i.intervalo&&clearInterval(i.intervalo);break;case"[ui] SET_CONTADOR":i.tiempo>0&&(i.tiempo-=1);break;case"[ui] MOSTRAR_ERROR":i.errorTitulo=t.titulo,i.errorMensaje=t.mensaje,i.errorTimeStamp=(new Date).getTime()}return i},tarjetachipRecarga:(e=_,t)=>{const i={...e};switch(t.type){case"[tarjetaChipRecarga] GUARDAR_USUARIO":i.usuario=t.usuario,i.usuarioTimeStamp=(new Date).getTime();break;case"[tarjetaChipRecarga] GUARDAR_IMPORTE_SALDO":i.saldo=t.saldo,i.saldoTimeStamp=(new Date).getTime();break;case"[tarjetaChipRecarga] GUARDAR_IMPORTE_RECARGA":i.recarga=t.recarga,i.recargaTimeStamp=(new Date).getTime();break;case"[tarjetaChipRecarga] GUARDAR_TARJETA_CREDITO_RECARGA":i.tarjeta=t.tarjeta,i.tarjetaTimeStamp=(new Date).getTime()}return i},vianda:(e=R,t)=>{const i={...e};switch(t.type){case"[vianda] GUARDAR_TIPO_MENU":i.tipoMenu=t.tipoMenu,i.tipoMenuTimeStamp=(new Date).getTime();break;case"[vianda] GUARDAR_MENU":i.menu=t.menu,i.menuTimeStamp=(new Date).getTime()}return i},posNet:(e=F,t)=>{const i={...e};switch(t.type){case"[posNet] COMANDO_TEST":case"[posNet] COMANDO_VENTA":case"[posNet] COMANDO_CIERRE":i.reintentos=0,i.respuesta="",i.control="",i.fin=!1,i.correcto=!1,i.comandos=t.comandos,i.ultimoComando=0;break;case V:i.ultimoComando!=t.comando&&(i.reintentos=0),i.ultimoComando=t.comando,i.ultimoTimeOut=t.timeOut,i.operadorTimeOut=t.operadorTimeOut,i.comandos[t.comando].fin&&(i.respuesta="",i.respuestaCodigo="",i.respuestaMensaje=""),i.control="",i.fin=!1,i.correcto=!1,i.finDeMensaje=!1;break;case"[posNet] INTERPRETAR":"fallo"!=t.mensaje?decodeURIComponent(t.mensaje.data).split("").forEach(e=>{i.fin?(i.control=e,i.correcto=I(i.respuesta.substr(2))==e,i.respuestaTimeStamp=(new Date).getTime(),i.finDeMensaje=!0,0==i.respuesta.indexOf(A+O+"VEN2")&&(i.respuestaCodigo="ALERTA",i.respuestaMensaje=i.respuesta.substr(5,3)),0==i.respuesta.indexOf(A+O+"VEN3")&&(i.respuestaCodigo="ERROR",i.respuestaMensaje=i.respuesta.substr(5,3)),0==i.respuesta.indexOf(A+O+"VEN000")&&(i.respuestaCodigo="TERMINADO CON ALERTA",i.respuestaMensaje=i.respuesta.substr(10,2)),0==i.respuesta.indexOf(A+A+O+"VEN000")&&(i.respuestaCodigo="TERMINADO",i.respuestaMensaje="OK")):(i.respuesta+=e,i.comandos[i.ultimoComando].fin==e&&(i.comandos[i.ultimoComando].verificado?i.fin=!0:(i.correcto=!0,i.finDeMensaje=!0,i.fin=!1)))}):i.reintentos+=1}return i},tarjetaChip:(e=Z,t)=>{const i={...e};switch(t.type){case G:i.nextActions=t.nextActions;break;case J:i.nextActions=[];break;case W:i.buffer="",i.nextActions=[],i.enServicio=t.activo;break;case Q:i.buffer+=t.cadena;break;case"[tarjetaChip] SERVICIO_ACERTADO":i.buffer="",i.enServicioTimeStamp=(new Date).getTime();break;case"[tarjetaChip] SERVICIO_ERROR":i.nextActions=[],i.buffer="",i.errorServicioTimeStamp=(new Date).getTime();break;case"[tarjetaChip] ERROR_EN_TARJETA":i.nextActions=[],i.buffer="",i.errorEnTarjeta=(new Date).getTime();break;case"[tarjetaChip] SET_DATOS":i.nextActions=[],i.buffer="",i.usuario=t.usuario,i.credito=t.importe,i.colocada=t.colocada,i.respuestaTimeStamp=(new Date).getTime();break;case"[tarjetaChip] CONECTADO":i.conectado=!0;break;case"[tarjetaChip] DESCONECTADO":i.conectado=!1}return i},impresora:(e=ee,t)=>{const i={...e};switch(t.type){case"[impresora] PRENDIDA":i.prendidaTimeStamp=(new Date).getTime(),i.on=!0;break;case"[impresora] APAGADA":i.apagadaTimeStamp=(new Date).getTime(),i.on=!1;break;case"[impresora] ONLINE":i.onlineTimeStamp=(new Date).getTime(),i.online=!0;break;case"[impresora] OFFLINE":i.offlineTimeStamp=(new Date).getTime(),i.online=!1}return i},aplicacion:(e=ie,t)=>{const i={...e};switch(t.type){case"[aplicacion] Interpretar":"/data/menu.json"==t.mensaje.subComando&&(i.entities.menu=t.mensaje.data),"/data/menuTipo.json"==t.mensaje.subComando&&(i.entities.menuTipo=t.mensaje.data),i.entities.menu&&i.entities.menuTipo&&(i.timeStamp=(new Date).getTime())}return i}}),oe=[({dispatch:e})=>t=>i=>{t(i),"[servidorBugs] CONECTAR"===i.type&&e(w("connect"))},({dispatch:e})=>t=>i=>{t(i),i.type===o&&e(w("$send:"+i.mensaje))},({dispatch:e})=>t=>i=>{t(i),i.type===a&&"$PR01!"==i.mensaje&&e(s("importe"))}],re=[({dispatch:e})=>e=>t=>{e(t),"[servidorWS] ENVIAR_MENSAJE"===t.type&&xi.send(t.mensaje)},({dispatch:e})=>t=>i=>{if(t(i),"[servidorWS] RECIBIR_MENSAJE"===i.type){const t=i.mensaje;switch(t.periferico){case"tarjetaChip":e((e=>({type:"[tarjetaChip] INTERPRETAR",mensaje:e}))(t));break;case"posNet":e(q(t));break;case"lectorLed":break;case"impresora":e((e=>({type:"[impresora] INTERPRETAR",mensaje:e}))(t));break;case"aplicacion":e((e=>({type:"[aplicacion] Interpretar",mensaje:e}))(t))}}}],ne={mensajeespera:{segundos:10},error:{segundos:3}},se=[({dispatch:e})=>t=>i=>{if(t(i),"[ui] DISPARAR_TIMER"===i.type){const t=setTimeout(function(){e(s(i.target))},1e3*i.tiempo),a=setInterval(function(){e((e=>({type:"[ui] SET_CONTADOR",tiempo:e}))())},1e3);e(((e,t,i,a)=>({type:"[ui] SET_TIMER",timer:e,intervalo:t,tiempo:i,pantallaQueLLamo:a}))(t,a,i.tiempo,i.pantallaQueLLamo))}}],ce=(e,t,i)=>{if(e.comandos[e.ultimoComando+i].fin){const a=setTimeout(()=>{t(q("fallo"))},3e3);let o=null;e.comandos[e.ultimoComando+i].timeOut&&(o=setTimeout(()=>{t(n("El posNet no responde"))},e.comandos[e.ultimoComando+i].timeOut)),t(L(e.ultimoComando+i,a,o))}else t(L(e.ultimoComando+i))},de=[({dispatch:e,getState:t})=>i=>a=>{if(i(a),a.type===V){const i=t().posNet;e(w({periferico:"posNet",comando:"write",subComando:i.comandos[a.comando].comando}))}},({dispatch:e,getState:t})=>i=>a=>{if(i(a),"[posNet] INTERPRETAR"===a.type){const i=t().posNet;"fallo"==a.mensaje||!i.correcto&&i.finDeMensaje?i.reintentos<3?setTimeout(()=>{ce(i,e,0)},1e4):e(n("El posNet no responde")):(window.clearTimeout(i.ultimoTimeOut),i.finDeMensaje&&(i.operadorTimeOut&&window.clearTimeout(i.operadorTimeOut),i.ultimoComando<i.comandos.length-1&&ce(i,e,1)))}},({dispatch:e,getState:t})=>i=>a=>{i(a),"[posNet] COMANDO_TEST"!==a.type&&"[posNet] COMANDO_VENTA"!==a.type&&"[posNet] COMANDO_CIERRE"!==a.type||ce(t().posNet,e,0)}],le=(e,t)=>{t.forEach(t=>{e(t)})},pe=[({dispatch:e})=>t=>i=>{t(i),i.type===G&&e(w({periferico:"tarjetaChip",comando:"write",subComando:">G,"+i.importe.toString(16).toUpperCase().padStart(4,"0")}))},({dispatch:e})=>t=>i=>{t(i),i.type===J&&e(w({periferico:"tarjetaChip",comando:"write",subComando:">L"}))},({dispatch:e,getState:t})=>i=>a=>{i(a),"[tarjetaChip] INTERPRETAR"===a.type&&decodeURIComponent(a.mensaje.data).split("").forEach(i=>{if(16!=i.charCodeAt(0))e((e=>({type:Q,cadena:e}))(i));else{const i=t().tarjetaChip.buffer.split(",");if(3==i.length){let a=parseInt(i[0].substr(1),16),o=parseInt(i[1],16),r=parseInt(i[2],16),n=!1;switch(r){case 5:n=!1,le(e,t().tarjetaChip.nextActions);break;case 0:n=!0,le(e,t().tarjetaChip.nextActions);break;case 9:e({type:"[tarjetaChip] DESCONECTADO"});break;case 1:e({type:"[tarjetaChip] CONECTADO"});break;default:e((e=>({type:"[tarjetaChip] ERROR_EN_TARJETA",error:e}))(r))}e(((e,t,i)=>({type:"[tarjetaChip] SET_DATOS",usuario:e,importe:t,colocada:i}))(a,o,n))}1==i.length&&(JSON.parse(i[0])?e({type:"[tarjetaChip] SERVICIO_ACERTADO"}):e(servicioError()))}})},({dispatch:e})=>t=>i=>{t(i),i.type===W&&(i.activo?e(w({periferico:"tarjetaChip",comando:"set",subComando:"on"})):e(w({periferico:"tarjetaChip",comando:"set",subComando:"off"})))}],ue=[({dispatch:e,getState:t})=>e=>t=>{if(e(t),"[impresora] INTERPRETAR"===t.type)switch(t.mensaje.data){case"on":me.dispatch({type:"[impresora] PRENDIDA"});break;case"off":me.dispatch({type:"[impresora] APAGADA"});break;case"online":me.dispatch({type:"[impresora] ONLINE"});break;case"offline":me.dispatch({type:"[impresora] OFFLINE"})}}],he=[({dispatch:e,getState:t})=>e=>t=>{e(t),t.type},({dispatch:e,getState:t})=>t=>i=>{t(i),"[aplicacion] Pedir Archivo"===i.type&&e(w(i.mensaje))}];const me=function e(t,i,a){var o;if("function"==typeof i&&"function"==typeof a||"function"==typeof a&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof i&&void 0===a&&(a=i,i=void 0),void 0!==a){if("function"!=typeof a)throw new Error("Expected the enhancer to be a function.");return a(e)(t,i)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var r=t,n=i,s=[],c=s,d=!1;function l(){c===s&&(c=s.slice())}function u(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return n}function g(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return l(),c.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,l();var i=c.indexOf(e);c.splice(i,1),s=null}}}function f(e){if(!m(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,n=r(n,e)}finally{d=!1}for(var t=s=c,i=0;i<t.length;i++)(0,t[i])();return e}return f({type:h.INIT}),(o={dispatch:f,subscribe:g,getState:u,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");r=e,f({type:h.REPLACE})}})[p.a]=function(){var e,t=g;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function i(){e.next&&e.next(u())}return i(),{unsubscribe:t(i)}}})[p.a]=function(){return this},e},o}(ae,(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||y)(function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return function(){var i=e.apply(void 0,arguments),a=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:i.getState,dispatch:function(){return a.apply(void 0,arguments)}},r=t.map(function(e){return e(o)});return b({},i,{dispatch:a=y.apply(void 0,r)(i.dispatch)})}}}(...[...oe,...re,...se,...de,...pe,...ue,...he]))),ge="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,fe=(e,t,i=null,a=null)=>{for(;t!==i;){const i=t.nextSibling;e.insertBefore(t,a),t=i}},ve=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},be=`{{lit-${String(Math.random()).slice(2)}}}`,ye=`\x3c!--${be}--\x3e`,we=new RegExp(`${be}|${ye}`),xe="$lit$";class je{constructor(e,t){this.parts=[],this.element=t;const i=[],a=[],o=document.createTreeWalker(t.content,133,null,!1);let r=0,n=-1,s=0;const{strings:c,values:{length:d}}=e;for(;s<d;){const e=o.nextNode();if(null!==e){if(n++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let a=0;for(let e=0;e<i;e++)Se(t[e].name,xe)&&a++;for(;a-- >0;){const t=c[s],i=Ee.exec(t)[2],a=i.toLowerCase()+xe,o=e.getAttribute(a);e.removeAttribute(a);const r=o.split(we);this.parts.push({type:"attribute",index:n,name:i,strings:r}),s+=r.length-1}}"TEMPLATE"===e.tagName&&(a.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(be)>=0){const a=e.parentNode,o=t.split(we),r=o.length-1;for(let t=0;t<r;t++){let i,r=o[t];if(""===r)i=Ce();else{const e=Ee.exec(r);null!==e&&Se(e[2],xe)&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-xe.length)+e[3]),i=document.createTextNode(r)}a.insertBefore(i,e),this.parts.push({type:"node",index:++n})}""===o[r]?(a.insertBefore(Ce(),e),i.push(e)):e.data=o[r],s+=r}}else if(8===e.nodeType)if(e.data===be){const t=e.parentNode;null!==e.previousSibling&&n!==r||(n++,t.insertBefore(Ce(),e)),r=n,this.parts.push({type:"node",index:n}),null===e.nextSibling?e.data="":(i.push(e),n--),s++}else{let t=-1;for(;-1!==(t=e.data.indexOf(be,t+1));)this.parts.push({type:"node",index:-1}),s++}}else o.currentNode=a.pop()}for(const e of i)e.parentNode.removeChild(e)}}const Se=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},ke=e=>-1!==e.index,Ce=()=>document.createComment(""),Ee=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,_e=133;function Te(e,t){const{element:{content:i},parts:a}=e,o=document.createTreeWalker(i,_e,null,!1);let r=Re(a),n=a[r],s=-1,c=0;const d=[];let l=null;for(;o.nextNode();){s++;const e=o.currentNode;for(e.previousSibling===l&&(l=null),t.has(e)&&(d.push(e),null===l&&(l=e)),null!==l&&c++;void 0!==n&&n.index===s;)n.index=null!==l?-1:n.index-c,n=a[r=Re(a,r)]}d.forEach(e=>e.parentNode.removeChild(e))}const Pe=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,_e,null,!1);for(;i.nextNode();)t++;return t},Re=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(ke(t))return i}return-1};const Ae=new WeakMap,ze=e=>"function"==typeof e&&Ae.has(e),Oe={},Me={};class Ne{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=ge?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,a=document.createTreeWalker(e,133,null,!1);let o,r=0,n=0,s=a.nextNode();for(;r<i.length;)if(o=i[r],ke(o)){for(;n<o.index;)n++,"TEMPLATE"===s.nodeName&&(t.push(s),a.currentNode=s.content),null===(s=a.nextNode())&&(a.currentNode=t.pop(),s=a.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(s,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return ge&&(document.adoptNode(e),customElements.upgrade(e)),e}}const $e=` ${be} `;class De{constructor(e,t,i,a){this.strings=e,this.values=t,this.type=i,this.processor=a}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let a=0;a<e;a++){const e=this.strings[a],o=e.lastIndexOf("\x3c!--");i=(o>-1||i)&&-1===e.indexOf("--\x3e",o+1);const r=Ee.exec(e);t+=null===r?e+(i?$e:ye):e.substr(0,r.index)+r[1]+r[2]+xe+r[3]+be}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class Ie extends De{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,i=t.firstChild;return t.removeChild(i),fe(t,i.firstChild),e}}const Ve=e=>null===e||!("object"==typeof e||"function"==typeof e),qe=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Le{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Ue(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let a=0;a<t;a++){i+=e[a];const t=this.parts[a];if(void 0!==t){const e=t.value;if(Ve(e)||!qe(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Ue{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===Oe||Ve(e)&&e===this.value||(this.value=e,ze(e)||(this.committer.dirty=!0))}commit(){for(;ze(this.value);){const e=this.value;this.value=Oe,e(this)}this.value!==Oe&&this.committer.commit()}}class Be{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Ce()),this.endNode=e.appendChild(Ce())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Ce()),e.__insert(this.endNode=Ce())}insertAfterPart(e){e.__insert(this.startNode=Ce()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;ze(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Oe,e(this)}const e=this.__pendingValue;e!==Oe&&(Ve(e)?e!==this.value&&this.__commitText(e):e instanceof De?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):qe(e)?this.__commitIterable(e):e===Me?(this.value=Me,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Ne&&this.value.template===t)this.value.update(e.values);else{const i=new Ne(t,e.processor,this.options),a=i._clone();i.update(e.values),this.__commitNode(a),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,a=0;for(const o of e)void 0===(i=t[a])&&(i=new Be(this.options),t.push(i),0===a?i.appendIntoPart(this):i.insertAfterPart(t[a-1])),i.setValue(o),i.commit(),a++;a<t.length&&(t.length=a,this.clear(i&&i.endNode))}clear(e=this.startNode){ve(this.startNode.parentNode,e.nextSibling,this.endNode)}}class He{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;ze(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Oe,e(this)}if(this.__pendingValue===Oe)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=Oe}}class Fe extends Le{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new Ge(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Ge extends Ue{}let Je=!1;(()=>{try{const e={get capture(){return Je=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class We{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;ze(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Oe,e(this)}if(this.__pendingValue===Oe)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),a=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),a&&(this.__options=Qe(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=Oe}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Qe=e=>e&&(Je?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function Ye(e){let t=Ke.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Ke.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const a=e.strings.join(be);return void 0===(i=t.keyString.get(a))&&(i=new je(e,e.getTemplateElement()),t.keyString.set(a,i)),t.stringsArray.set(e.strings,i),i}const Ke=new Map,Xe=new WeakMap;const Ze=new class{handleAttributeExpressions(e,t,i,a){const o=t[0];return"."===o?new Fe(e,t.slice(1),i).parts:"@"===o?[new We(e,t.slice(1),a.eventContext)]:"?"===o?[new He(e,t.slice(1),i)]:new Le(e,t,i).parts}handleTextExpression(e){return new Be(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const et=(e,...t)=>new De(e,t,"html",Ze),tt=(e,...t)=>new Ie(e,t,"svg",Ze),it=(e,t)=>`${e}--${t}`;let at=!0;void 0===window.ShadyCSS?at=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),at=!1);const ot=e=>t=>{const i=it(t.type,e);let a=Ke.get(i);void 0===a&&(a={stringsArray:new WeakMap,keyString:new Map},Ke.set(i,a));let o=a.stringsArray.get(t.strings);if(void 0!==o)return o;const r=t.strings.join(be);if(void 0===(o=a.keyString.get(r))){const i=t.getTemplateElement();at&&window.ShadyCSS.prepareTemplateDom(i,e),o=new je(t,i),a.keyString.set(r,o)}return a.stringsArray.set(t.strings,o),o},rt=["html","svg"],nt=new Set,st=(e,t,i)=>{nt.add(e);const a=i?i.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:r}=o;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(a,e);const n=document.createElement("style");for(let e=0;e<r;e++){const t=o[e];t.parentNode.removeChild(t),n.textContent+=t.textContent}(e=>{rt.forEach(t=>{const i=Ke.get(it(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),Te(e,i)})})})(e);const s=a.content;i?function(e,t,i=null){const{element:{content:a},parts:o}=e;if(null==i)return void a.appendChild(t);const r=document.createTreeWalker(a,_e,null,!1);let n=Re(o),s=0,c=-1;for(;r.nextNode();)for(c++,r.currentNode===i&&(s=Pe(t),i.parentNode.insertBefore(t,i));-1!==n&&o[n].index===c;){if(s>0){for(;-1!==n;)o[n].index+=s,n=Re(o,n);return}n=Re(o,n)}}(i,n,s.firstChild):s.insertBefore(n,s.firstChild),window.ShadyCSS.prepareTemplateStyles(a,e);const c=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(i){s.insertBefore(n,s.firstChild);const e=new Set;e.add(n),Te(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const ct={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},dt=(e,t)=>t!==e&&(t==t||e==e),lt={attribute:!0,type:String,converter:ct,reflect:!1,hasChanged:dt},pt=1,ut=4,ht=8,mt=16,gt="finalized";class ft extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const a=this._attributeNameForProperty(i,t);void 0!==a&&(this._attributeToPropertyMap.set(a,i),e.push(a))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=lt){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`,a=this.getPropertyDescriptor(e,i,t);void 0!==a&&Object.defineProperty(this.prototype,e,a)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(i){const a=this[e];this[t]=i,this._requestUpdate(e,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||lt}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(gt)||e.finalize(),this[gt]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=dt){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,a=t.converter||ct,o="function"==typeof a?a:a.fromAttribute;return o?o(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,a=t.converter;return(a&&a.toAttribute||ct.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=lt){const a=this.constructor,o=a._attributeNameForProperty(e,i);if(void 0!==o){const e=a._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=this._updateState|ht,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=this._updateState&~ht}}_attributeToProperty(e,t){if(this._updateState&ht)return;const i=this.constructor,a=i._attributeToPropertyMap.get(e);if(void 0!==a){const e=i.getPropertyOptions(a);this._updateState=this._updateState|mt,this[a]=i._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~mt}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const a=this.constructor,o=a.getPropertyOptions(e);a._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||this._updateState&mt||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|ut;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&ut}get hasUpdated(){return this._updateState&pt}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(this._updateState&pt||(this._updateState=this._updateState|pt,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~ut}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}ft[gt]=!0;const vt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bt=Symbol();class yt{constructor(e,t){if(t!==bt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(vt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const wt=(e,...t)=>{const i=t.reduce((t,i,a)=>t+(e=>{if(e instanceof yt)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[a+1],e[0]);return new yt(i,bt)};(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const xt={};class jt extends ft{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),a=[];i.forEach(e=>a.unshift(e)),this._styles=a}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?vt?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==xt&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return xt}}jt.finalized=!0,jt.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const a=i.scopeName,o=Xe.has(t),r=at&&11===t.nodeType&&!!t.host,n=r&&!nt.has(a),s=n?document.createDocumentFragment():t;if(((e,t,i)=>{let a=Xe.get(t);void 0===a&&(ve(t,t.firstChild),Xe.set(t,a=new Be(Object.assign({templateFactory:Ye},i))),a.appendInto(t)),a.setValue(e),a.commit()})(e,s,Object.assign({templateFactory:ot(a)},i)),n){const e=Xe.get(s);Xe.delete(s);const i=e.value instanceof Ne?e.value.template:void 0;st(a,s,i),ve(t,t.firstChild),t.appendChild(s),Xe.set(t,e)}!o&&r&&window.ShadyCSS.styleElement(t.host)};wt`
.boton{
    display:grid;
    justify-content:center;
    align-items:center;
    grid-template-columns: auto auto;
    grid-gap: .5rem;
    cursor: pointer;
    padding:1rem;
    transition: all 0.5s;
    position: relative;

}
.boton::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255,255,255,0.1);
    transition: all 0.3s;
}
.boton:hover::before {
    opacity: 0 ;
    transform: scale(0.5,0.5);
}
.boton::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid rgba(255,255,255,0.5);
    transform: scale(1.2,1.2);
}
.boton:hover::after {
    opacity: 1;
    transform: scale(1,1);
}
.boton:focus::after {
    opacity: 1;
    transform: scale(1,1);
}
`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M 9 16.17 L 4.83 12 l -1.42 1.41 L 9 19 L 21 7 l -1.41 -1.41 Z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H23v16H3V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3-5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53c.09.2.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29-.17-.39-.4-.73-.7-1.01-.3-.28-.66-.5-1.08-.66-.42-.16-.88-.23-1.39-.23-.65 0-1.22.11-1.7.34-.48.23-.88.53-1.2.92s-.56.84-.71 1.36c-.15.52-.24 1.06-.24 1.64v.27c0 .58.08 1.12.23 1.64.15.52.39.97.71 1.35s.72.69 1.2.91c.48.22 1.05.34 1.7.34.47 0 .91-.08 1.32-.23.41-.15.77-.36 1.08-.63.31-.27.56-.58.74-.94.18-.36.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58-.09.18-.21.33-.36.46s-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88c-.05-.33-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 14V6H4v36h40V14H24zM12 38H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm8 24h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm20 24H24v-4h4v-4h-4v-4h4v-4h-4v-4h16v20zm-4-16h-4v4h4v-4zm0 8h-4v4h4v-4z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 17l3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4"/><path d="M15.47 20.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5h2v2h-.9L12 9.9V9h8v8.9l2 2V7H12V3H5.1L8 5.9zm8 6h2v2h-2zM1.3 1.8L.1 3.1 2 5v16h16l3 3 1.3-1.3-21-20.9zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm4 8H8v-2h2v2zm0-4H8v-2h2v2zm2 4v-2h2l2 2h-4z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="15" cy="8" r="4"/><path d="M23 20v-2c0-2.3-4.1-3.7-6.9-3.9l6 5.9h.9zm-11.6-5.5C9.2 15.1 7 16.3 7 18v2h9.9l4 4 1.3-1.3-21-20.9L0 3.1l4 4V10H1v2h3v3h2v-3h2.9l2.5 2.5zM6 10v-.9l.9.9H6z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 5H3c-1.1 0-2 .89-2 2v9h2c0 1.65 1.34 3 3 3s3-1.35 3-3h5.5c0 1.65 1.34 3 3 3s3-1.35 3-3H23v-5l-6-6zM3 11V7h4v4H3zm3 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7-6.5H9V7h4v4zm4.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM15 11V7h1l4 4h-5z"/></svg>`,tt`<svg xmlns="http://www.w3.org/2000/svg"  width="24px" height="24px" viewBox="0 0 24 24"><path d="M17,11V3H7v4H3v14h8v-4h2v4h8V11H17z M7,19H5v-2h2V19z M7,15H5v-2h2V15z M7,11H5V9h2V11z M11,15H9v-2h2V15z M11,11H9V9h2   V11z M11,7H9V5h2V7z M15,15h-2v-2h2V15z M15,11h-2V9h2V11z M15,7h-2V5h2V7z M19,19h-2v-2h2V19z M19,15h-2v-2h2V15z"/></svg>`;const St=(...e)=>t=>e.reduce((e,t)=>null!=e&&null!=e[t]?e[t]:null,t),kt=(e,...t)=>i=>(class extends i{constructor(){super(),this.__currentStates=[],this.__deepValues=[]}connectedCallback(){for(let i=0;i<t.length;i++){const a=t[i].split(".");this.__currentStates.push(null);let o=a.length>0?St(...a):null;this.__deepValues.push(o),this.__storeUnsubscribe=e.subscribe(()=>this.__stateChanged(i,e.getState())),this.__stateChanged(i,e.getState())}super.connectedCallback&&super.connectedCallback()}getCurrent(){return[...this.__currentStates]}disconnectedCallback(){this.__storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}__stateChanged(e,i){if(this.stateChanged){let a=!0;if(this.__deepValues[e]){let t=this.__currentStates[e];this.__currentStates[e]=this.__deepValues[e](i),a=t!=this.__currentStates[e]}a&&this.stateChanged(i,t[e])}}}),Ct=kt,Et={ES:{paginas:{inicio:{bienvenido:"Bienvenido",heceTuPedido:"Hace tu pedido de comida",cargaCredito:"Carga credito en tu tarjeta chip"},mensajeEspera:{mensaje:"Tiempo de espera agotado. Continua?",si:"Si",no:"No"},eTituloFueraDeLinea:{mensaje:"A T E N C I O N"},eMensajeFueraDeLinea:{mensaje:"Equipo Fuera de Servicio"},eTituloTarjetachipLectura:{mensaje:"ERROR"},eMensajeTarjetachipLectura:{mensaje:"TarjetaChip No Leida"}}}},_t="ui.timeStampPantalla",Tt="tarjetaChip.conectado",Pt="impresora.prendidaTimeStamp",Rt="impresora.apagadaTimeStamp",At="impresora.onlineTimeStamp",zt="impresora.offlineTimeStamp";window.customElements.define("pantalla-inicio",class extends(Ct(me,_t,Tt,Pt,Rt,At,zt)(jt)){constructor(){super(),this.hidden=!1,this.idioma="ES",this.testing=!1,this.tcConectado=!1}static get styles(){return wt`
        :host{
            position:relative;
            height: 100vh;
            width: 100vw;   
            background-image: var(--imagen-pantalla-fondo02);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            justify-items:center;
            align-items: center;  
        }
        :host([hidden]){
            display: none; 
        }
        :host(:not([testing])) .botoneraTest{
            display: none; 
        }
        
        .button {
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: .5rem 2rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 3rem;
            margin: 1rem .5rem;
            cursor: pointer;
            box-shadow:var(--shadow-elevation-8-box);
            animation-duration: 20s;
        	animation-timing-function: ease-in-out;
            animation-delay: 1s;
            animation-iteration-count: infinite;          
            animation-name: aniBoton;
        }
        #fondoimagen01{
            position:absolute;
            top:0;
            left:0;
            height: 100vh;
            width: 100vw;   
            background-image:var(--imagen-pantalla-fondo01);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            justify-items:center;
            align-items: center;          
        }
        #fondoimagen02{
            position:absolute;
            top:0;
            left:0;
            height: 100vh;
            width: 100vw;   
            background-image:var(--imagen-pantalla-fondo02);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            justify-items:center;
            align-items: center;   
            animation-duration: 15s;
            animation-iteration-count: infinite;          
            animation-delay: 2s;
            animation-name: imagen02;
        }
        #fondocolor{
            position:absolute;
            top:0;
            left:0;
            background-color: black;           
            opacity: 0.3;
            height: 100vh;
            width: 100vw;  
        }
        #fondocuerpo{
            position:absolute;
            top:0;
            left:0;
            display: grid;
            grid-template-columns: 100vw;
            grid-template-rows: 30% 25% 25% auto;
            justify-items:center;
            align-items: center;  
            height: 100vh;
            width: 100vw;             
        }
        #titulo{
            background-color:transparent;
            font-size:5rem;
            color:var(--titulo-texto);;
        }
        @keyframes imagen02 {
            50%{opacity: 0;}
        }
        @keyframes aniBoton {
            0% , 14% { font-size: 3rem;}
            14%, 28% { font-size: 3.4rem;}
            28%, 42% {  font-size: 2.4rem;}        
            42%, 56% { font-size: 3.6rem;}
            56%, 70% { font-size: 2.4rem;}
            70%, 84% { font-size: 3.4rem;}
            84%, 100% { font-size: 3rem;}
        }

        :host(:not([testing])) .botoneraTest{
            display:none
        }

        .botoneraTest{
            display:grid;
            grid-auto-flow:row;
            align-content:flex-start;
            position:absolute;
            top:0;
            left:0;
            height:100vh;
            background-color:rgba(0,0,0,.5);
            overflow-y:auto
        }
        .botoneraTest .button{
            font-size:1rem;
            background-color:#f6f6f6;
            animation-name: none;
        }
        .botoneraTest #TC ,.botoneraTest #impOff ,.botoneraTest #impOffline {
            position:absolute;
            top:0;
            right:0;
            background:red;
            color:white;
            padding:.3rem;
            border-radius:25%;


        }
        :host([tc-conectado]) #TC{
            display:none;
        }
        :host([impresora-prendida]) #impOff {
            display:none;
        }
        :host([impresora-online]) #impOffline {
            display:none;
        }
       
               `}render(){return et`
        <div id="fondoimagen01">
        </div>
        <div id="fondoimagen02">
        </div>  
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="titulo" @click="${this.error}">
                ${Et[this.idioma].paginas.inicio.bienvenido}
            </div>
            <div style="background-color:transparent;">
                <input type="button" class="button" opcion="viandatarjetachiplectura" value=${Et[this.idioma].paginas.inicio.heceTuPedido} @click="${this.proximaPantalla}">
            </div>
            <div style="background-color:transparent;">
                <input type="button" class="button" opcion="tarjetachiplectura" value=${Et[this.idioma].paginas.inicio.cargaCredito} @click="${this.proximaPantalla}">
            </div>
           
            <div class="botoneraTest">
                
                <input type="button" class="button" value="PosNet test"  @click="${this.test}">
                <input type="button" class="button" value="PosNet venta" @click="${this.venta}">
                <input type="button" class="button" value="PosNet cierre" @click="${this.cierre}">
                <div style="position:relative">
                    <input type="button" class="button" value="chip en servicio" @click="${this.servicioOn}">
                    <div id="TC">TC</div>
                </div>
                <input type="button" class="button" value="chip fuera de servicio" @click="${this.servicioOff}">
                <input type="button" class="button" value="chip Leer" @click="${this.chipLeer}">
                <input type="button" class="button" value="chip Grabar " @click="${this.chipGrabar}">
                <div style="position:relative">
                    <input type="button" class="button" value="Impresora test" @click="${this.imprimir}">
                    <div id="impOff">OFF</div>
                    <div id="impOffline">offline</div>
                </div>
                
            </div>
           
        </div>
        `}test(){me.dispatch(U())}venta(){me.dispatch(B({monto:125,numeroFactura:100000089012,cuotas:1,codigoTarjeta:"VVI",codigoPlan:"1",montoPropina:0,codigoComercio:"03659307",nombreComercio:"PRISMA MP",cuitComercio:"30-59891004-5",modo:1}))}cierre(){me.dispatch(H())}servicioOn(){me.dispatch(X(!0))}servicioOff(){me.dispatch(X(!1))}chipLeer(){me.dispatch(K())}chipGrabar(){me.dispatch(Y(2e3))}imprimir(){me.dispatch(w({periferico:"impresora",comando:"print",subComando:{usuario:241,nombre:"Sergio Ferro",fecha:"30-05-2020",descripcion:"Postre de queso $150",numero:2}}))}stateChanged(e,t){t==_t&&"inicio"==e.ui.quePantalla&&(me.dispatch(d()),me.dispatch(X(!1)),e.tarjetaChip.colocada),t==Tt&&(this.tcConectado=e.tarjetaChip.conectado,this.update()),t==Pt&&(this.impresoraPrendida=!0,this.update()),t==Rt&&(this.impresoraPrendida=!1,this.update()),t==At&&(this.impresoraOnline=!0,this.update()),t==zt&&(this.impresoraOnline=!1,this.update())}static get properties(){return{hidden:{type:Boolean,reflect:!0},testing:{type:Boolean,reflect:!0},tcConectado:{type:Boolean,reflect:!0,attribute:"tc-conectado"},impresoraPrendida:{type:Boolean,reflect:!0,attribute:"impresora-prendida"},impresoraOnline:{type:Boolean,reflect:!0,attribute:"impresora-online"}}}proximaPantalla(e){me.dispatch(s(e.currentTarget.getAttribute("opcion")))}error(e){me.dispatch(s("fueralinea"))}});const Ot="ui.timeStampPantalla",Mt="ui.tiempo";window.customElements.define("cuenta-regresiva",class extends(Ct(me,Ot,Mt)(jt)){constructor(){super(),this.tiempo=0,this.hidden=!0}static get styles(){return wt`
        :host{
            display: grid;
            position: absolute;
            justify-items: center;
            align-items: center;
            top: .8rem;
            right: 1rem;  
            height: 2rem;
            width: 2rem;
            background-color:var(--pantalla-fondo-oscuro);
            color: var(--letra-clara);
            z-index:1000; 
            font-size: 1rem;
            border-radius: 50%;
        }
        :host([hidden]){
            display: none;
        }
        `}render(){return et`
            ${this.tiempo}
        `}stateChanged(e,t){t==Mt&&(this.tiempo=e.ui.tiempo,this.update()),t==Ot&&("inicio"==e.ui.quePantalla||"fueralinea"==e.ui.quePantalla?this.hidden=!0:this.hidden=!1,this.update())}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}});const Nt="ui.timeStampPantalla";window.customElements.define("mensaje-espera",class extends(Ct(me,Nt)(jt)){constructor(){super(),this.hidden=!0,this.pantallaQueLLamo=""}static get styles(){return wt`
        :host{
            display: grid;
            position: absolute;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:transparent;
            z-index:500; 
        }
        :host([hidden]){
            display: none;
        }
        .button {
            width: 9rem;
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: .5rem 2rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 1.5rem;
            margin: 1rem .5rem;
            cursor: pointer;
            box-shadow:var(--shadow-elevation-8-box);
        }
        #opacidad{
            display: grid;
            position: absolute;
            justify-items: center;
            align-items: center;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:var(--pantalla-fondo-oscuro);
            opacity:0.6;           
        }
        #ventana{
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: 60% auto;
            position: absolute;
            justify-items: center;
            align-items: center;
            bottom: .8rem;
            right: 1rem;  
            height: 12rem;
            width: 24rem;
            background-color:var(--pantalla-fondo-claro);
            color: var(--letra-clara);
            font-size: .8rem;
            border-radius: 2rem;
            border-style: solid;
            border-color:var(--color-precio);
            opacity: 1;
        }
        #titulo{
            display: grid;  
            justify-items: center;
            align-items: center;
            text-align: center;
            background-color:transparent;
            color: var(--letra-oscura);
            font-size: 2rem;
        }
        #botones{
            display: grid;
            grid-template-columns: 50% 50%;
            justify-items: center;
            align-items: center;  
            background-color:transparent;
        }
        `}render(){return et`
        <div id="opacidad">
        </div>
        <div id="ventana">
            <div id="titulo">
                ${Et.ES.paginas.mensajeEspera.mensaje}
            </div>
    <div id="botones">
        <input type="button" class="button" value=${Et.ES.paginas.mensajeEspera.no} @click="${this.volver}">
                <input type="button" class="button" value=${Et.ES.paginas.mensajeEspera.si} @click="${this.apagar}">
            </div>
        </div >
    `}volver(){me.dispatch(s("inicio"))}apagar(){me.dispatch(s(this.pantallaQueLLamo)),this.hidden=!0}stateChanged(e,t){t==Nt&&"mensajeespera"==e.ui.quePantalla&&(me.dispatch(c(ne.mensajeespera.segundos,"inicio")),this.pantallaQueLLamo=e.ui.pantallaQueLLamo)}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}});const $t={ES:{paginas:{general:{nombreSistema:"Carga credito en tu tarjeta chip",volver:"Volver"},tarjetaChipLectura:{insertarTarjeta:"Inserta tu tarjeta chip en el lector que esta abajo y espera que sea leida."},seleccionImporte:{quienEs01:"Bienvenido ",quienEs02:", su saldo es $",titulo:"Seleccione el importe a cargar."},seleccionTarjetaCredito:{quienEs01:", saldo $",quienEs02:", a recargar $",titulo:"Seleccione tarjeta de credito."},cargaPosNet:{quienEs01:", saldo $",quienEs02:", a recargar $",titulo:"Coloque su tarjeta",leyenda:"En el PosNet y siga las instrucciones de la pantalla del PosNet"},recargaExito:{titulo:"Recarga Exitosa. Retire su ticket y tarjeta",leyenda:"Saldo Actual $",finalizar:"Finalizar"}}}},Dt="ui.timeStampPantalla",It="ui.errorTimeStamp";window.customElements.define("pantalla-mensajeerror",class extends(Ct(me,Dt,It)(jt)){constructor(){super(),this.hidden=!0,this.idioma="ES",this.titulo="",this.mensaje=""}static get styles(){return wt`
        :host{
            display: grid;
            position: absolute;
            top: 0rem;
            left: 0rem;  
            height:100vh;
            width: 100vw;
            background-color:transparent;
            z-index:500; 
        }
        :host([hidden]){
            display: none; 
        }
        .button {
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: .5rem 2rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 1.5rem;
            margin: 1rem .5rem;
            cursor: pointer;
            box-shadow:var(--shadow-elevation-8-box);
        }
        #opacidad{
            display: grid;
            position: absolute;
            justify-items: center;
            align-items: center;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:var(--pantalla-fondo-oscuro);
            opacity:0.6;           
        }
        #cuerpo{
            display: grid;
            position: absolute;
            top: 25vh;
            left: 30vw;  
            justify-items:center;
            align-items: center;  
            background-color:transparent;
            height: 50vh;
            width: 40vw;   
        }
        #fondoimagen01{
            position:absolute;
            top:0;
            left:0;
            height: 100%;
            width: 100%;   
            background-image:var(--imagen-pantalla-fondo-tarjetachip);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            justify-items:center;
            align-items: center;
            border-radius: 2rem;          
        }
        #fondocolor{
            position:absolute;
            top:0;
            left:0;
            background-color: var(--color-error);           
            opacity: 0.5;
            height: 100%;
            width: 100%;  
            animation-name: imacolor;
            animation-duration: 6s;
            opacity: 0.8;
            border-radius: 2rem;
        }
        #fondocuerpo{
            position:absolute;
            top:0;
            left:0;
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: 30% 45% auto;
            justify-items:center;
            align-items: center;  
            height: 100%;
            width: 100%;             
            border-radius: 2rem;
        }
        #titulo{
            background-color:transparent;
            padding-left:2rem;
            padding-right:1rem;
            font-size:2.5rem;
            text-align: center;
            color:var(--titulo-texto);
        }
        #mensaje{
            background-color:transparent;
            padding-left:1rem;
            padding-right:1rem;
            font-size:2rem;
            text-align: center;
            color:var(--titulo-texto);
        }
        #tarjetaChip{
            width: 100%;   
            height: 100%;
            display:grid;
            justify-items: start;
            align-items: center;
        }
        @keyframes lector {
            0% {top:16.8rem;}
            50% {top:14.2rem;opacity:1;}             
            100% {top:14.2rem;opacity:0;}  
        }
        @keyframes imacolor {
            from{opacity: 0.4;} to {opacity: 0.8;}
        }
        `}render(){return et`
        <div id="opacidad">
        </div>
        <div id="cuerpo">
            <div id="fondoimagen01">
            </div>
            <div id="fondocolor">
            </div>
            <div id="fondocuerpo">
                <div id="titulo">
                    ${this.titulo}
                </div>
                <div id="mensaje">
                    ${this.mensaje}
                </div>
                <div >
                    <input type="button" class="button" value=${$t[this.idioma].paginas.general.volver} @click="${this.volver}">
                </div>
            </div>
        </div>
        `}stateChanged(e,t){t==It&&(this.titulo=e.ui.errorTitulo,this.mensaje=e.ui.errorMensaje,this.hidden=!1,this.update())}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}volver(){this.hidden=!0,this.update()}});const Vt="ui.timeStampPantalla",qt="tarjetaChip.conectado",Lt="impresora.prendidaTimeStamp",Ut="impresora.apagadaTimeStamp",Bt="impresora.onlineTimeStamp",Ht="impresora.offlineTimeStamp";window.customElements.define("pantalla-mensajefueralinea",class extends(Ct(me,Vt,qt,Ht,Bt,Lt,Ut)(jt)){constructor(){super(),this.hidden=!0,this.idioma="ES",this.testing=!1}static get styles(){return wt`
        :host{
            display: grid;
            position: absolute;
            top: 0rem;
            left: 0rem;  
            height:100vh;
            width: 100vw;
            background-color:transparent;
            z-index:500; 
        }
        :host([hidden]){
            display: none; 
        }
        #opacidad{
            display: grid;
            position: absolute;
            justify-items: center;
            align-items: center;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:var(--pantalla-fondo-oscuro);
            opacity:0.6;           
        }
        #cuerpo{
            display: grid;
            position: absolute;
            top: 25vh;
            left: 20vw;  
            justify-items:center;
            align-items: center;  
            background-color:transparent;
            height: 40vh;
            width: 60vw;   
        }
        #fondoimagen01{
            position:absolute;
            top:0;
            left:0;
            height: 100%;
            width: 100%;   
            background-image:var(--imagen-fuera-servicio);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            justify-items:center;
            align-items: center;
            border-radius: 2rem;          
        }
        #fondocolor{
            position:absolute;
            top:0;
            left:0;
            background-color: var(--color-error);           
            opacity: 0.5;
            height: 100%;
            width: 100%;  
            animation-name: imacolor;
            animation-duration: 6s;
            opacity: 0.8;
            border-radius: 2rem;
        }
        #fondocuerpo{
            position:absolute;
            top:0;
            left:0;
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: 45% auto;
            justify-items:center;
            align-items: center;  
            height: 100%;
            width: 100%;             
            border-radius: 2rem;
        }
        #titulo{
            background-color:transparent;
            padding-left:2rem;
            padding-right:1rem;
            font-size:2.5rem;
            text-align: center;
            color:var(--titulo-texto);
        }
        #mensaje{
            background-color:transparent;
            padding-left:1rem;
            padding-right:1rem;
            font-size:3rem;
            text-align: center;
            color:var(--titulo-texto);
        }
        :host([testing]) {
            display: none; 
        }
        @keyframes imacolor {
            from{opacity: 0.6;} to {opacity: 0.8;}
        }
        `}render(){return et`
        <div id="opacidad">
        </div>
        <div id="cuerpo">
            <div id="fondoimagen01">
            </div>
            <div id="fondocolor">
            </div>
            <div id="fondocuerpo">
                <div id="titulo"  @click="${this.volver}">
                    ${Et[this.idioma].paginas.eTituloFueraDeLinea.mensaje}
                </div>
                <div id="mensaje">
                    ${Et[this.idioma].paginas.eMensajeFueraDeLinea.mensaje}
                </div>
            </div>
        </div>
        `}stateChanged(e,t){t==Vt&&"error"==e.ui.quePantalla&&me.dispatch(d()),t!=Vt&&(e.impresora.on&&e.impresora.online&&e.tarjetaChip.conectado?this.hidden=!0:this.hidden=!1,this.update())}static get properties(){return{hidden:{type:Boolean,reflect:!0},testing:{type:Boolean,reflect:!0}}}volver(){me.dispatch(s("inicio"))}});const Ft={tarjetachiplectura:{segundos:20},tarjetachipseleccionimporte:{segundos:25},tarjetachipselecciontarjetacredito:{segundos:30},cargatarjetacreditoposnet:{segundos:50},tarjetachiprecargaexito:{segundos:5}};var Gt=i(2);const Jt="ui.timeStampPantalla",Wt="tarjetaChip.respuestaTimeStamp",Qt="tarjetaChip.errorEnTarjeta";window.customElements.define("pantalla-tarjetachiplectura",class extends(Ct(me,Jt,Wt,Qt)(jt)){constructor(){super(),this.hidden=!0,this.idioma="ES"}static get styles(){return wt`
        :host{
            display: grid;
            justify-items:center;
            align-items: center;  
            background-color:transparent;
            height: 100vh;
            width: 100vw;   
        }
        :host([hidden]){
            display: none; 
        }
        .button {
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: .5rem 2rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 2rem;
            margin: 1rem .5rem;
            cursor: pointer;
            box-shadow:var(--shadow-elevation-8-box);
        }
        #fondoimagen01{
            position:absolute;
            top:0;
            left:0;
            height: 100vh;
            width: 100vw;   
            background-image:var(--imagen-pantalla-fondo02);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            justify-items:center;
            align-items: center;          
        }
        #fondocolor{
            position:absolute;
            top:0;
            left:0;
            background-color: var(--pantalla-fondo-oscuro);           
            opacity: 0;
            height: 100vh;
            width: 100vw;  
            animation-name: imacolor;
            animation-duration: 6s;
            opacity: 0.8;
        }
        #fondocuerpo{
            position:absolute;
            top:0;
            left:0;
            display: grid;
            grid-template-columns: 100vw;
            grid-template-rows: 10% 35% 35% auto;
            justify-items:center;
            align-items: center;  
            height: 100vh;
            width: 100vw;             
        }
        #titulo{
            background-color:transparent;
            padding-left:1rem;
            padding-right:1rem;
            font-size:3rem;
            text-align: center;
            color:var(--titulo-texto);
        }
        #MenuDescripcion{
            width: 100vw;   
            background-color:transparent;
            font-size:1rem;
            color:var(--titulo-texto);
            width:100%;
            text-align: left;
            padding-left:1rem;
        }
        #tarjetaChip{
            width: 100vw;   
            height: 100%;
            display:grid;
            justify-items: start;
            align-items: center;
        }
        #barra{
            height: 3rem;
            width:10rem;
            background-color:transparent;
            position: absolute;
            top:14.5rem;
            background-color:transparent;
            background-image:var(--imagen-pantalla-boquilla-tarjetachip);
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            z-index:300;
        }
        #mano{
            height: 12rem;
            width:12rem;
            background-color:transparent;
            background-image:var(--lectortarjetachip-tarjetachip);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 8rem 11rem;
            animation-delay: 1;
            animation-name: lector;
            animation-duration: 4s;
            animation-iteration-count: infinite;
            position: absolute;
            top:16.5rem;
            z-index: 200;
        }
        #barra-baja{
            height: 3rem;
            width:10rem;
            background-color:transparent;
            position: absolute;
            top:16.4rem;
            background-color:transparent;
            background-image:var(--imagen-pantalla-boquilla-baja-tarjetachip);
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            z-index:100;
        }
        @keyframes lector {
            0% {top:16.8rem;}
            50% {top:14.2rem;opacity:1;}             
            100% {top:14.2rem;opacity:0;}  
        }
        @keyframes imacolor {
            from{opacity: 0;} to {opacity: 0.8;}
        }
        `}render(){return et`
        <div id="fondoimagen01">
        </div>
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="MenuDescripcion">
              ${$t[this.idioma].paginas.general.nombreSistema}
            </div>
            <div id="titulo">
                ${$t[this.idioma].paginas.tarjetaChipLectura.insertarTarjeta}
            </div>
            <div id="tarjetaChip" @click="${this.proximaPantalla}">
                <div id="barra">
                </div>
                <div id="mano">
                </div>
                <div id="barra-baja">
                </div>
            </div>
            <div >
                <input type="button" class="button" value=${$t[this.idioma].paginas.general.volver} @click="${this.volver}">
            </div>
        </div>
        `}stateChanged(e,t){if(t==Jt&&"tarjetachiplectura"==e.ui.quePantalla&&(me.dispatch(c(Ft.tarjetachiplectura.segundos,"mensajeespera","tarjetachiplectura")),me.dispatch(X(!0))),t==Wt&&"tarjetachiplectura"==e.ui.quePantalla)if(e.tarjetaChip.colocada){const t=Gt.a.find(t=>t.id==e.tarjetaChip.usuario);t||me.dispatch(l("Tarjeta no registrada","Consulte con el proveedor de su tarjeta para que se habilte esta operación.")),me.dispatch(k(e.tarjetaChip.credito)),me.dispatch(S({id:e.tarjetaChip.usuario,nombre:t.nombre})),me.dispatch(s("tarjetachipseleccionimporte"))}else me.dispatch(s("inicio"));t==Qt&&me.dispatch(l("Error de lectura","Su tarjeta chip no se pudo leer. Podria estar dañada. Intente nuevamente."))}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}volver(){me.dispatch(s("inicio"))}proximaPantalla(){me.dispatch(k(120)),me.dispatch(S({id:1,nombre:"Sergio Ferro"})),me.dispatch(s("tarjetachipseleccionimporte"))}});const Yt={precarga:{menor:{descripcion:"$200",importe:200},medio:{descripcion:"$500",importe:500},mayor:{descripcion:"$1.000",importe:1e3}}},Kt="ui.timeStampPantalla",Xt="tarjetaChip.respuestaTimeStamp";window.customElements.define("pantalla-tarjetachipseleccionimporte",class extends(Ct(me,Kt,Xt)(jt)){constructor(){super(),this.hidden=!0,this.idioma="ES"}static get styles(){return wt`
        :host{
            display: grid;
            justify-items:center;
            align-items: center;  
            background-color:black;
            height: 100vh;
            width: 100vw;   
        }
        :host([hidden]){
            display: none; 
        }
        .buttonAtras {
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: .5rem 2rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 2rem;
            margin: 1rem .5rem;
            cursor: pointer;
            box-shadow:var(--shadow-elevation-8-box);
        }
        .buttonImporte {
            width: 26vw;
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: .5rem 2rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 2.6rem;
            margin: 1rem .5rem;
            cursor: pointer;
            box-shadow:var(--shadow-elevation-8-box);
        }
        #fondoimagen01{
            position:absolute;
            top:0;
            left:0;
            height: 100vh;
            width: 100vw;   
            background-image:var(--imagen-pantalla-fondo02);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            justify-items:center;
            align-items: center;          
        }
        #fondocolor{
            position:absolute;
            top:0;
            left:0;
            background-color: var(--pantalla-fondo-oscuro);           
            opacity: 0;
            height: 100vh;
            width: 100vw;  
            animation-name: imacolor;
            animation-duration: 6s;
            opacity: 0.8;
        }
        #fondocuerpo{
            position:absolute;
            top:0;
            left:0;
            display: grid;
            grid-template-rows: 10% 8% 20% 37% auto;
            grid-template-columns: 33% 33% auto;
            justify-items:center;
            align-items: center;   
            height: 100vh;
            width: 100vw;             
        }
        #MenuDescripcion{
            display: grid;
            grid-column-start: 1;
            grid-column-end: 4;
            background:-transparent;
            font-size:1rem;
            color:var(--titulo-texto);
            width:100%;
            text-align: left;
            padding-left:1rem;
        }
        #quienEs{
            display: grid;
            grid-column-start: 1;
            grid-column-end: 4;
            background-color:transparent;
            font-size:1.8rem;
            color:var(--boton-fondo);
            width:100%;
            text-align: left;
            padding-left:1rem;
        }
        #titulo{
            display: grid;
            grid-column-start: 1;
            grid-column-end: 4;
            background-color:transparent;
            font-size:3.5rem;
            color:var(--titulo-texto);;
        }
        #pie{
            display: grid;
            justify-items: center;
            grid-column-start: 1;
            grid-column-end: 4;  
            background-color:transparent;
        }
        @keyframes imacolor {
            from{opacity: 0;} to {opacity: 0.8;}
        }
        `}render(){return et`
        <div id="fondoimagen01">
        </div>
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="MenuDescripcion">
                ${$t[this.idioma].paginas.general.nombreSistema}
            </div>
            <div id="quienEs">
                ${$t[this.idioma].paginas.seleccionImporte.quienEs01}
                ${me.getState().tarjetachipRecarga.usuario?me.getState().tarjetachipRecarga.usuario.nombre:""}
                ${$t[this.idioma].paginas.seleccionImporte.quienEs02}
                ${me.getState().tarjetachipRecarga.saldo}

            
            </div>
            <div id="titulo">
                ${$t[this.idioma].paginas.seleccionImporte.titulo}
            </div>
            <div>
                <input type="button" id="impMenor" class="buttonImporte" importe=${Yt.precarga.menor.importe} value=${Yt.precarga.menor.descripcion} @click="${this.proximaPantalla}">
            </div>
            <div>
                <input type="button" id="impMedio" class="buttonImporte" importe=${Yt.precarga.medio.importe} value=${Yt.precarga.medio.descripcion} @click="${this.proximaPantalla}">
            </div>
            <div>
                <input type="button" id="impMayor" class="buttonImporte" importe=${Yt.precarga.mayor.importe} value=${Yt.precarga.mayor.descripcion} @click="${this.proximaPantalla}">
            </div>
            <div id="pie">
                <input type="button" class="buttonAtras" value=${$t.ES.paginas.general.volver} @click="${this.volver}">
            </div>
        </div>
        `}stateChanged(e,t){t==Kt&&"tarjetachipseleccionimporte"==e.ui.quePantalla&&me.dispatch(c(Ft.tarjetachipseleccionimporte.segundos,"mensajeespera","tarjetachipseleccionimporte")),t==Xt&&"tarjetachipseleccionimporte"==e.ui.quePantalla&&(e.tarjetaChip.colocada||me.dispatch(s("inicio")))}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}volver(){me.dispatch(s("tarjetachiplectura"))}proximaPantalla(e){me.dispatch(C(parseInt(e.currentTarget.getAttribute("importe"),10))),me.dispatch(s("tarjetachipselecciontarjetacredito"))}});const Zt=[{id:1,titulo:"Visa debito",telefono:"11",url:"http://www.zul.com.ar/bugs/image/tarjetas/t-visa-debito.png",codigo:"VVI"},{id:2,titulo:"Visa credito",telefono:"11",url:"http://www.zul.com.ar/bugs/image/tarjetas/t-visa-credito.png",codigo:"0VI"},{id:3,titulo:"Master debito",telefono:"11",url:"http://www.zul.com.ar/bugs/image/tarjetas/t-master-debito.png",codigo:"VVI"},{id:4,titulo:"Master credito",telefono:"11",url:"http://www.zul.com.ar/bugs/image/tarjetas/t-master-credito.png",codigo:"VVI"},{id:5,titulo:"Diners credito",telefono:"11",url:"http://www.zul.com.ar/bugs/image/tarjetas/t-diners-credito.png",codigo:"VVI"},{id:6,titulo:"Amex credito",telefono:"11",url:"http://www.zul.com.ar/bugs/image/tarjetas/t-amex-credito.png",codigo:"VVI"},{id:7,titulo:"Naranja credito",telefono:"11",url:"http://www.zul.com.ar/bugs/image/tarjetas/t-naranja-credito.png",codigo:"VVI"}],ei="ui.timeStampPantalla",ti="tarjetaChip.respuestaTimeStamp";window.customElements.define("pantalla-tarjetachipselecciontarjetacredito",class extends(Ct(me,ei,ti)(jt)){constructor(){super(),this.hidden=!0,this.idioma="ES"}static get styles(){return wt`
        :host{
            display: grid;
            justify-items:center;
            align-items: center;  
            background-color:var(--pantalla-fondo-oscuro);
            height: 100vh;
            width: 100vw;   
        }
        :host([hidden]){
            display: none; 
        }
        .buttonAtras {
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: .5rem 2rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 2rem;
            margin: 1rem .5rem;
            cursor: pointer;
            box-shadow:var(--shadow-elevation-8-box);
        }
        #fondoimagen01{
            position:absolute;
            top:0;
            left:0;
            height: 100vh;
            width: 100vw;   
            background-image:var(--imagen-pantalla-fondo-tarjetachip);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            justify-items:center;
            align-items: center;          
        }
        #fondocolor{
            position:absolute;
            top:0;
            left:0;
            background-color: black;           
            opacity: 0;
            height: 100vh;
            width: 100vw;  
            animation-name: imacolor;
            animation-duration: 6s;
            opacity: 0.8;
        }
        #fondocuerpo{
            position:absolute;
            top:0;
            left:0;
            display: grid;
            grid-template-rows: 10vh 8vh 20vh 45vh auto;
            grid-template-columns: 100%;
            justify-items:center;
            align-items: center;  
            height: 100vh;
            width: 100vw;             
        }
        #MenuDescripcion{
            display: grid;
            background-color:transparent;
            font-size:1rem;
            color:var(--titulo-texto);
            width:100%;
            text-align: left;
            padding-left:1rem;
        }
        #quienEs{
            display: grid;
            background-color:transparent;
            font-size:1.8rem;
            color:var(--boton-fondo);
            width:100%;
            text-align: left;
            padding-left:1rem;
        }
        #titulo{
            display: grid;  
            background-color:transparent;
            font-size:3.5rem;
            color:var(--titulo-texto);;
        }
        #pie{
            display: grid;
            justify-items: center;  
            background-color:transparent;
        }
        #tarjetasDIV{
            display: grid;
            grid-template-columns: auto auto auto auto auto;
            grid-gap: .2rem;
            justify-items: center;
            align-items: center;  
            height: 100%;
            width: 100%;             
        }
        .contenedor{ 
            display: grid;
            justify-items: center;
            align-items: center; 
        }
        .t-credito{
            height: calc(45vh/2.7);
            width: calc(45vh/2.7*1.6);
            background-repeat: no-repeat;
            background-position: center;
            background-size: calc(45vh/2.7*1.6) calc(45vh/2.7);
            box-shadow:var(--shadow-elevation-8-box);
            background-color:#2478bc;
            border-radius: 8%;
        }
        @keyframes imacolor {
            from{opacity: 0;} to {opacity: 0.8;}
        }
        `}render(){return et`
        <div id="fondoimagen01">
        </div>
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="MenuDescripcion">
                ${$t[this.idioma].paginas.general.nombreSistema}
            </div>
            <div id="quienEs">
                ${me.getState().tarjetachipRecarga.usuario?me.getState().tarjetachipRecarga.usuario.nombre:""}
                ${$t[this.idioma].paginas.seleccionTarjetaCredito.quienEs01}
                ${me.getState().tarjetachipRecarga.saldo}
                ${$t[this.idioma].paginas.seleccionTarjetaCredito.quienEs02}
                ${me.getState().tarjetachipRecarga.recarga}
            </div>
            <div id="titulo">
                ${$t[this.idioma].paginas.seleccionTarjetaCredito.titulo}
            </div>
            <div id="tarjetasDIV">
                    ${Zt.map(e=>et`
                    <div class="contenedor">
                    <div class="t-credito" .tarjeta="${e}" style="background-image:url('${e.url}')" @click="${this.proximaPantalla}"></div>
                    </div>
                    `)}
            </div>
            <div id="pie">
                <input type="button" class="buttonAtras" value=${$t[this.idioma].paginas.general.volver} @click="${this.volver}">
            </div>
        </div >
        `}stateChanged(e,t){t==ei&&"tarjetachipselecciontarjetacredito"==e.ui.quePantalla&&(me.dispatch(c(Ft.tarjetachipselecciontarjetacredito.segundos,"mensajeespera","tarjetachipselecciontarjetacredito")),this.update()),t==ti&&"tarjetachipselecciontarjetacredito"==e.ui.quePantalla&&(e.tarjetaChip.colocada||me.dispatch(s("inicio")))}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}volver(){me.dispatch(s("tarjetachipseleccionimporte"))}proximaPantalla(e){me.dispatch(E(e.currentTarget.tarjeta)),me.dispatch(s("cargatarjetacreditoposnet")),me.dispatch(B({monto:me.getState().tarjetachipRecarga.recarga,numeroFactura:100000089012,cuotas:1,codigoTarjeta:me.getState().tarjetachipRecarga.tarjeta.codigo,codigoPlan:"1",montoPropina:0,codigoComercio:"03659307",nombreComercio:"PRISMA MP",cuitComercio:"30-59891004-5",modo:1}))}});const ii="posNet.respuestaTimeStamp",ai="ui.timeStampPantalla",oi="tarjetaChip.respuestaTimeStamp";window.customElements.define("pantalla-cargatarjetacreditoposnet",class extends(Ct(me,ai,ii,oi)(jt)){constructor(){super(),this.hidden=!0,this.tarjeta="",this.idioma="ES"}static get styles(){return wt`
        :host{
            display: grid;
            grid-template-rows: 10% 8% 20% 20% 25% auto;
            grid-template-columns: 100%;
            justify-items:center;
            align-items: center;  
            background-color:var(--pantalla-fondo);
            height: 100vh;
            width: 100vw;   
        }
        :host([hidden]){
            display: none; 
        }
        .buttonAtras {
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: .5rem 2rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 2rem;
            margin: 1rem .5rem;
            cursor: pointer;
            box-shadow:var(--shadow-elevation-8-box);
        }
        #fondoimagen01{
            position:absolute;
            top:0;
            left:0;
            height: 100vh;
            width: 100vw;   
            background-image:var(--imagen-pantalla-fondo-tarjetachip);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            justify-items:center;
            align-items: center;          
        }
        #fondocolor{
            position:absolute;
            top:0;
            left:0;
            background-color: black;           
            opacity: 0;
            height: 100vh;
            width: 100vw;  
            animation-name: imacolor;
            animation-duration: 6s;
            opacity: 0.8;
        }
        #fondocuerpo{
            position:absolute;
            top:0;
            left:0;
            display: grid;
            grid-template-rows: 10% 8% 20% 20% 25% auto;
            grid-template-columns: 100%;
            justify-items:center;
            align-items: center;  
            height: 100vh;
            width: 100vw;             
        }
        #MenuDescripcion{
            display: grid;
            background-color:transparent;
            font-size:1rem;
            color:var(--titulo-texto);
            width:100%;
            text-align: left;
            padding-left:1rem;
        }
        #quienEs{
            display: grid;
            background-color:transparent;
            font-size:1.8rem;
            color:var(--boton-fondo);
            width:100%;
            text-align: left;
            padding-left:1rem;
        }
        #titulo{
            display: grid;  
            background-color:transparent;
            font-size:3rem;
            color:var(--titulo-texto);;
        }
        #tarjeta{
            display: grid;
            height: 6rem;
            width: 12rem;            
            background-repeat: no-repeat;
            background-position: center;
            background-size: 11rem 7.5rem;
            box-shadow:var(--shadow-elevation-8-box);
            background-color:#2478bc;
            border-radius: 8%;        
        }
        #tarjeta[imagen="visaCredito"]{
            background-image:var(--tarjeta-visa-credito);
        }
        #tarjeta[imagen="masterCredito"]{
            background-image:var(--tarjeta-master-credito);
        }
        #tarjeta[imagen="amexCredito"]{
            background-image:var(--tarjeta-amex-credito);
        }
        #descripcion{
            display: grid;
            justify-items: center;
            align-items: center;    
            text-align: center;
            background-color:transparent;
            font-size:2.5rem;
            color:var(--titulo-texto);;
        }
        #pie{
            display: grid;
            justify-items: center;
            background-color:transparent;
        }
        .contenedor{
            display: grid;
            justify-items: center;
            align-items: center;  
            height: 100%;
            width: 100%;            
            background-color:transparent;
        }
        @keyframes imacolor {
            from{opacity: 0;} to {opacity: 0.8;}
        }
        `}render(){return et`
        <div id="fondoimagen01">
        </div>
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="MenuDescripcion">
                ${$t[this.idioma].paginas.general.nombreSistema}
            </div>
            <div id="quienEs">    
                ${me.getState().tarjetachipRecarga.usuario?me.getState().tarjetachipRecarga.usuario.nombre:""}
                ${$t[this.idioma].paginas.cargaPosNet.quienEs01}
                ${me.getState().tarjetachipRecarga.saldo}
                ${$t[this.idioma].paginas.cargaPosNet.quienEs02}
                ${me.getState().tarjetachipRecarga.recarga}    
            </div>
            <div id="titulo">
                ${$t[this.idioma].paginas.cargaPosNet.titulo}
            </div>
            <div class="contenedor">
                <div id="tarjeta" style="background-image:url('${this.tarjeta.url}')">
                </div>
            </div>
            <div id="descripcion">
                ${$t[this.idioma].paginas.cargaPosNet.leyenda}
            </div>
            <div id="pie">
                <input type="button" class="buttonAtras" value=${$t[this.idioma].paginas.general.volver} @click="${this.volver}">
            </div>
        </div>
        `}stateChanged(e,t){t==ai&&"cargatarjetacreditoposnet"==e.ui.quePantalla&&(me.dispatch(c(Ft.cargatarjetacreditoposnet.segundos,"mensajeespera","cargatarjetacreditoposnet")),this.tarjeta=e.tarjetachipRecarga.tarjeta,this.update()),t==ii&&"cargatarjetacreditoposnet"==e.ui.quePantalla&&("TERMINADO"==e.posNet.respuestaCodigo&&e.posNet.respuestaMensaje,me.dispatch(Y(e.tarjetaChip.credito+e.tarjetachipRecarga.recarga)),me.dispatch(s("tarjetachiprecargaexito"))),t==oi&&"cargatarjetacreditoposnet"==e.ui.quePantalla&&(e.tarjetaChip.colocada||me.dispatch(s("inicio")))}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}volver(){me.dispatch(s("tarjetachipselecciontarjetacredito"))}});const ri="ui.timeStampPantalla";window.customElements.define("pantalla-tarjetachiprecargaexito",class extends(Ct(me,ri)(jt)){constructor(){super(),this.hidden=!0,this.idioma="ES"}static get styles(){return wt`
        :host{
            display: grid;
            justify-items:center;
            align-items: center;  
            background-color:var(--pantalla-fondo);
            height: 100vh;
            width: 100vw;   
        }
        :host([hidden]){
            display: none; 
        }
        .buttonAtras {
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: .5rem 2rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 2rem;
            margin: 1rem .5rem;
            cursor: pointer;
            box-shadow:var(--shadow-elevation-8-box);
        }
        #fondoimagen01{
            position:absolute;
            top:0;
            left:0;
            height: 100vh;
            width: 100vw;   
            background-image:var(--imagen-pantalla-fondo-tarjetachip);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            justify-items:center;
            align-items: center;          
        }
        #fondocolor{
            position:absolute;
            top:0;
            left:0;
            background-color: black;           
            opacity: 0;
            height: 100vh;
            width: 100vw;  
            animation-name: imacolor;
            animation-duration: 6s;
            opacity: 0.8;
        }
        #fondocuerpo{
            position:absolute;
            top:0;
            left:0;
            display: grid;
            grid-template-rows: 10% 10% 20% 20% 20% auto;
            grid-template-columns: 100%;
            justify-items:center;
            align-items: center;  
            height: 100vh;
            width: 100vw;             
        }
        #MenuDescripcion{
            display: grid;
            background-color:transparent;
            font-size:1rem;
            color:var(--titulo-texto);
            width:100%;
            text-align: left;
            padding-left:1rem;
        }
        #quienEs{
            display: grid;
            background-color:transparent;
            font-size:2.2rem;
            color:var(--titulo-texto);
            width:100%;
            text-align: center;
            padding-left:1rem;
        }
        #ok{
            display: grid; 
            height: 100%;
            width: 100%; 
            background-image:var(--ok-tarjetachip);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 6rem 6rem;
        }
        #titulo{
            display: grid;  
            background-color:transparent;
            font-size:3.5rem;
            color:var(--titulo-texto);;
        }
        #descripcion{
            display: grid;  
            background-color:transparent;
            font-size:3.5rem;
            color:var(--titulo-texto);;
        }
        #pie{
            display: grid;
            justify-items: center; 
            background-color:transparent;
        }
        @keyframes imacolor {
            from{opacity: 0;} to {opacity: 0.8;}
        }
        `}render(){return et`
        <div id="fondoimagen01">
        </div>
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="MenuDescripcion">
                ${$t[this.idioma].paginas.general.nombreSistema}
            </div>
            <div id="quienEs">   
                ${me.getState().tarjetachipRecarga.usuario?me.getState().tarjetachipRecarga.usuario.nombre:""}
            </div>
            <div id="ok">    
            </div>
            <div id="titulo">
                ${$t[this.idioma].paginas.recargaExito.titulo}
            </div>
            <div id="descripcion">
                ${$t[this.idioma].paginas.recargaExito.leyenda}
                ${me.getState().tarjetachipRecarga.saldo+me.getState().tarjetachipRecarga.recarga}
            </div>
            <div id="pie">
                <input type="button" class="buttonAtras" value=${$t[this.idioma].paginas.recargaExito.finalizar} @click="${this.volver}">
            </div>
        </div>
        `}stateChanged(e,t){t==ri&&"tarjetachiprecargaexito"==e.ui.quePantalla&&(me.dispatch(c(Ft.tarjetachiprecargaexito.segundos,"inicio","tarjetachiprecargaexito")),this.update())}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}volver(){me.dispatch(s("inicio"))}proximaPantalla(){me.dispatch(s("cargatarjetacreditoposnet"))}});const ni={ES:{paginas:{general:{nombreSistema:"Hace tu pedido de comida.",volver:"Volver"},tarjetaChipLectura:{insertarTarjeta:"Inserta tu tarjeta chip en el lector que esta abajo y espera que sea leida."},seleccionTipoMenu:{quienEs01:"Bienvenido ",quienEs02:", su saldo es $",titulo:"Elegí tu menu.",dia:"Para el dia:"},seleccionMenu:{quienEs:", su saldo es $"},menuAceptacioin:{dia:"Para el dia:",confirmarCobrar:"Confirmar y Cobrar"},menuExito:{titulo:"Pedido Realizado",ticket:"Retira tu Ticket y Tarjeta",finalizar:"Finalizar"}}}},si={viandatarjetachiplectura:{segundos:20},viandaselecciontipomenu:{segundos:25},viandaseleccionmenu:{segundos:30},viandamenuaceptacion:{segundos:35},viandamenuexito:{segundos:5}},ci="ui.timeStampPantalla",di="tarjetaChip.respuestaTimeStamp",li="tarjetaChip.errorEnTarjeta";window.customElements.define("pantalla-viandatarjetachiplectura",class extends(Ct(me,ci,di,li)(jt)){constructor(){super(),this.hidden=!0,this.idioma="ES"}static get styles(){return wt`
        :host{
            display: grid;
            justify-items:center;
            align-items: center;  
            background-color:transparent;
            height: 100vh;
            width: 100vw;   
        }
        :host([hidden]){
            display: none; 
        }
        .button {
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: .5rem 2rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 2rem;
            margin: 1rem .5rem;
            cursor: pointer;
            box-shadow:var(--shadow-elevation-8-box);
        }
        #fondoimagen01{
            position:absolute;
            top:0;
            left:0;
            height: 100vh;
            width: 100vw;   
            background-image:var(--imagen-pantalla-fondo-vianda);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            justify-items:center;
            align-items: center;          
        }
        #fondocolor{
            position:absolute;
            top:0;
            left:0;
            background-color: black;           
            opacity: 0;
            height: 100vh;
            width: 100vw;  
            animation-name: imacolor;
            animation-duration: 6s;
            opacity: 0.7;
        }
        #fondocuerpo{
            position:absolute;
            top:0;
            left:0;
            display: grid;
            grid-template-columns: 100vw;
            grid-template-rows: 10% 35% 35% auto;
            justify-items:center;
            align-items: center;  
            height: 100vh;
            width: 100vw;             
        }
        #titulo{
            background-color:transparent;
            padding-left:1rem;
            padding-right:1rem;
            font-size:3rem;
            text-align: center;
            color:var(--titulo-texto);
        }
        #MenuDescripcion{
            width: 100vw;   
            background-color:transparent;
            font-size:1rem;
            color:var(--titulo-texto);
            width:100%;
            text-align: left;
            padding-left:1rem;
        }
        #tarjetaChip{
            width: 100vw;   
            height: 100%;
            display:grid;
            justify-items: start;
            align-items: center; 
        }
        #barra{
            height: 3rem;
            width:10rem;
            background-color:transparent;
            position: absolute;
            top:14.5rem;
            background-color:transparent;
            background-image:var(--imagen-pantalla-boquilla-vianda);
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            z-index:300;
        }
        #mano{
            height: 12rem;
            width:12rem;
            background-color:transparent;
            background-image:var(--lectortarjetachip-vianda);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 8rem 11rem;
            animation-delay: 1;
            animation-name: example;
            animation-duration: 4s;
            animation-iteration-count: infinite;
            position: absolute;
            top:16.5rem;
            z-index: 200;
        }
        #barra-baja{
            height: 3rem;
            width:10rem;
            background-color:transparent;
            position: absolute;
            top:16.4rem;
            background-color:transparent;
            background-image:var(--imagen-pantalla-boquilla-baja-vianda);
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            z-index:100;
        }
        @keyframes example {
            0% {top:16.8rem;}
            50% {top:14.2rem;opacity:1;}             
            100% {top:14.2rem;opacity:0;}  
        }
        @keyframes imacolor {
            from{opacity: 0;} to {opacity: 0.7;}
        }
        `}render(){return et`
        <div id="fondoimagen01">
        </div>
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="MenuDescripcion">
            ${ni[this.idioma].paginas.general.nombreSistema}
            </div>
            <div id="titulo">
                ${ni[this.idioma].paginas.tarjetaChipLectura.insertarTarjeta}
            </div>
            <div id="tarjetaChip" @click="${this.proximaPantalla}">
                <div id="barra">
                </div>
                <div id="mano">
                </div>
                <div id="barra-baja">
                </div>
            </div>
            <div >
                <input type="button" class="button" value=${ni[this.idioma].paginas.general.volver} @click="${this.volver}">
            </div>
        </div>
        `}stateChanged(e,t){if(t==ci&&"viandatarjetachiplectura"==e.ui.quePantalla&&(me.dispatch(c(si.viandatarjetachiplectura.segundos,"mensajeespera","viandatarjetachiplectura")),me.dispatch(X(!0))),t==di&&"viandatarjetachiplectura"==e.ui.quePantalla)if(e.tarjetaChip.colocada){const t=Gt.a.find(t=>t.id==e.tarjetaChip.usuario);t||me.dispatch(l("Tarjeta no registrada","Consulte con el proveedor de su tarjeta para que se habilte esta operación.")),me.dispatch(k(e.tarjetaChip.credito)),me.dispatch(S({id:e.tarjetaChip.usuario,nombre:t.nombre})),me.dispatch(s("viandaselecciontipomenu"))}else me.dispatch(s("inicio"));t==li&&me.dispatch(l("Error de lectura","Su tarjeta chip no se pudo leer. Podria estar dañada. Intente nuevamente."))}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}volver(){me.dispatch(s("inicio"))}});const pi="ui.timeStampPantalla",ui="tarjetaChip.respuestaTimeStamp",hi="aplicacion.timeStamp";window.customElements.define("pantalla-viandaselecciontipomenu",class extends(Ct(me,pi,ui,hi)(jt)){constructor(){super(),this.hidden=!0,this.idioma="ES",this.tipoMenu=[{},{},{},{}];var e=new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"),t=new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"),i=new Date;i.setDate(i.getDate()+1),this.paraDia=t[i.getDay()]+", "+i.getDate()+" de "+e[i.getMonth()]+" de "+i.getFullYear()}static get styles(){return wt`
        :host{
            display: grid;
            justify-items:center;
            align-items: center;  
            background-color:black;
            height: 100vh;
            width: 100vw;   
        }
        :host([hidden]){
            display: none; 
        }
        .buttonAtras {
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: .5rem 2rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 2rem;
            margin: 1rem .5rem;
            cursor: pointer;
            box-shadow:var(--shadow-elevation-8-box);
        }
        .buttonImporte {
            width: 28vw;
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: 1rem 1rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 2.2rem;
            margin: 1rem .5rem;
            cursor: pointer;
            box-shadow:var(--shadow-elevation-8-box);
        }
        #fondoimagen01{
            position:absolute;
            top:0;
            left:0;
            height: 100vh;
            width: 100vw;   
            background-image:var(--imagen-pantalla-fondo-vianda);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            justify-items:center;
            align-items: center;          
        }
        #fondocolor{
            position:absolute;
            top:0;
            left:0;
            background-color: black;           
            opacity: 0;
            height: 100vh;
            width: 100vw;  
            animation-name: imacolor;
            animation-duration: 6s;
            opacity: 0.7;
        }
        #fondocuerpo{
            position:absolute;
            top:0;
            left:0;
            display: grid;
            grid-template-rows: 10% 6% 12% 12% 40% auto;
            justify-items:center;
            align-items: center;  
            height: 100vh;
            width: 100vw;             
        }
        #MenuDescripcion{
            display: grid;
            background:-transparent;
            font-size:1rem;
            color:var(--titulo-texto);
            width:100%;
            text-align: left;
            padding-left:1rem;
        }
        #quienEs{
            display: grid;
            background-color:transparent;
            font-size:1.8rem;
            color:var(--boton-fondo);
            width:100%;
            text-align: left;
            padding-left:1rem;
        }
        #titulo{
            display: grid;
            background-color:transparent;
            font-size:3.5rem;
            color:var(--titulo-texto);;
        }
        #fecha{
            display: grid;
            background-color:transparent;
            font-size:2rem;
            color:var(--titulo-texto);;
        }
        #botonera{
            display: grid;
            grid-template-columns: 50% 50%;
            grid-template-rows: 50% 50%;
            justify-items:center;
            align-items: center;  
            height: 100%;
            width: 85%;  
        }        
        #pie{
            display: grid;
            justify-items: center; 
            background-color:transparent;
        }
        @keyframes imacolor {
            from{opacity: 0;} to {opacity: 0.7;}
        }
        `}render(){return et`
        <div id="fondoimagen01">
        </div>
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="MenuDescripcion">
              ${ni[this.idioma].paginas.general.nombreSistema} 
            </div>
            <div id="quienEs">
                ${ni[this.idioma].paginas.seleccionTipoMenu.quienEs01}
                ${me.getState().tarjetachipRecarga.usuario?me.getState().tarjetachipRecarga.usuario.nombre:""}
                ${ni[this.idioma].paginas.seleccionTipoMenu.quienEs02}
                ${me.getState().tarjetachipRecarga.saldo}
            </div>
            <div id="titulo">
                ${ni[this.idioma].paginas.seleccionTipoMenu.titulo} 
            </div>
            <div id="fecha">
                ${ni[this.idioma].paginas.seleccionTipoMenu.dia} 
                ${this.paraDia}
            </div>
            <div id="botonera">
                <input type="button" class="buttonImporte" .item="${this.tipoMenu[0]}" value="${this.tipoMenu[0].nombre}" @click="${this.proximaPantalla}">
                <input type="button" class="buttonImporte" .item="${this.tipoMenu[1]}" value="${this.tipoMenu[1].nombre}" @click="${this.proximaPantalla}">
                <input type="button" class="buttonImporte" .item="${this.tipoMenu[2]}" value="${this.tipoMenu[2].nombre}" @click="${this.proximaPantalla}">
                <input type="button" class="buttonImporte" .item="${this.tipoMenu[3]}" value="${this.tipoMenu[3].nombre}" @click="${this.proximaPantalla}">
            </div>
            <div id="pie">
                <input type="button" class="buttonAtras" value=${ni[this.idioma].paginas.general.volver} @click="${this.volver}">
            </div>
        </div>
        `}stateChanged(e,t){t==pi&&"viandaselecciontipomenu"==e.ui.quePantalla&&(me.dispatch(c(si.viandaselecciontipomenu.segundos,"mensajeespera","viandaselecciontipomenu")),this.update()),t==ui&&"viandaselecciontipomenu"==e.ui.quePantalla&&(e.tarjetaChip.colocada||me.dispatch(s("inicio"))),t==hi&&(this.tipoMenu=e.aplicacion.entities.menuTipo,this.update())}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}volver(){me.dispatch(s("viandatarjetachiplectura"))}proximaPantalla(e){me.dispatch(T(e.currentTarget.item)),me.dispatch(s("viandaseleccionmenu"))}});window.customElements.define("tarjeta-vianda-nmenu",class extends jt{constructor(){super(),this.item={}}static get styles(){return wt`
        :host{
            display: grid;
            justify-items: center;
            align-items: center;  
            height: 95%;
            width: 80%;
            background-color:var(--fondo-etiqueta);
            border-radius: .5rem;
            grid-template-rows: 50% 10% 7% auto;
            grid-template-columns: 100%;  
        }
        #etiquetaImagen{
            display: grid;
            justify-items: center;
            align-items: flex-start;  
            height: 100%;
            width: 100%;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            /* -moz-box-shadow:inset 0px 0px 10px 8px rgba(255,255,255,1);
            -webkit-box-shadow:inset 0px 0px 10px 8px rgba(255,255,255,1);
            box-shadow:inset 0px 0px 10px 8px rgba(255,255,255,1); */
            border-top-left-radius : .5rem;
            border-top-right-radius : .5rem;
        }
        #etiquetaTitulo{
            display: grid;
            justify-items: left;
            align-items: center;  
            height: 100%;
            width: 90%;
            background-color:transparent;
            font-size:1rem;
            color:black;
            font-weight:bold;
        }
        #etiquetaPrecio{
            display: grid;
            justify-items: left;
            align-items: flex-end;  
            height: 100%;
            width: 90%;
            background-color:transparent;
            font-size:1.2rem;
            color:var(--color-precio);
            font-weight:bold;
        }
        #etiquetaDescripcionTitulo{
            display: grid;
            justify-items: left;
            align-items: center;  
            height: 100%;
            width: 90%;
            background-color:transparent;
            font-size:1.2rem;
            color:black;
            font-weight:bold;
        }
        #etiquetaDescripcion{
            display: grid;
            justify-items: left;
            align-items: start;  
            height: 80%;
            width: 95%;
            /* background-color:#dbdada; */
            font-size:0.8rem;
            color:#4b4a4a;
            /* border-radius: .5rem; */
            padding: .3rem;
        }
        `}render(){return et`
        <div id="etiquetaImagen" style="background-image:url('${this.item?this.item.url:""}')"></div>
        <div id="etiquetaTitulo">${this.item?this.item.titulo:""}</div>
        <div id="etiquetaPrecio">$${this.item?this.item.precio:""}.-</div>
        <div id="etiquetaDescripcion">${this.item?this.item.descripcion:""}</div>
        `}stateChanged(e,t){}static get properties(){return{item:{type:Object}}}});const mi="ui.timeStampPantalla",gi="tarjetaChip.respuestaTimeStamp",fi="aplicacion.timeStamp";window.customElements.define("pantalla-viandaseleccionmenu",class extends(Ct(me,mi,gi,fi)(jt)){constructor(){super(),this.hidden=!0,this.items=[],this.menues=[],this.nombreMenu="",this.idioma="ES"}static get styles(){return wt`
        :host{
            display: grid;
            justify-items:center;
            align-items: center;  
            background-color:black;
            height: 100vh;
            width: 100vw;   
        }
        :host([hidden]){
            display: none; 
        }
        .buttonAtras {
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: .5rem 2rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 2rem;
            margin: 1rem .5rem;
            cursor: pointer;
            box-shadow:var(--shadow-elevation-8-box);
        }
        .buttonImporte {
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: 1.5rem 1rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 2.6rem;
            margin: 1rem .5rem;
            cursor: pointer;
            box-shadow:var(--shadow-elevation-8-box);
        }
        #fondoimagen01{
            position:absolute;
            top:0;
            left:0;
            height: 100vh;
            width: 100vw;   
            background-image:var(--imagen-pantalla-fondo-vianda);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            justify-items:center;
            align-items: center;          
        }
        #fondocolor{
            position:absolute;
            top:0;
            left:0;
            background-color: black;           
            opacity: 0;
            height: 100vh;
            width: 100vw;  
            animation-name: imacolor;
            animation-duration: 6s;
            opacity: 0.7;
        }
        #fondocuerpo{
            position:absolute;
            top:0;
            left:0;
            display: grid;
            grid-template-rows: 5% 5% 10% 65% auto;
            grid-template-columns: 100%;
            justify-items:center;
            align-items: center;  
            height: 100vh;
            width: 100vw;             
        }
        #MenuDescripcion{
            display: grid;
            background-color:-transparent;
            font-size:1rem;
            color:var(--titulo-texto);
            width:100%;
            text-align: left;
            padding-left:1rem;
        }
        #quienEs{
            display: grid;
            background-color:transparent;
            font-size:1rem;
            color:var(--boton-fondo);
            width:100%;
            text-align: left;
            padding-left:1rem;
        }
        #titulo{
            display: grid;
            background-color:transparent;
            font-size:3rem;
            color:var(--titulo-texto);;
        }
        #etiquetas{
            justify-items:center;
            align-items: center;  
            height: 100%;             
        }
        #pie{
            display: grid;
            justify-items: center;
            background-color:transparent;
        }
        @keyframes imacolor {
            from{opacity: 0;} to {opacity: 0.7;}
        }
        .etiVer3{
            display:grid;
            grid-template-columns: 33% auto 33%;
            width: 100%;            
        }
        .etiVer2{
            display:grid;
            grid-template-columns: 50% auto;
            width: 68%;            
        }
        .etiVer1{
            display:grid;
            grid-template-columns: 100%; 
            width: 36%;           
        }
        .etiNoVer{
            display:none;
        }
        `}render(){return et`
        <div id="fondoimagen01">
        </div>
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="MenuDescripcion">
                ${ni[this.idioma].paginas.general.nombreSistema}
            </div>
            <div id="quienEs">      
                ${me.getState().tarjetachipRecarga.usuario?me.getState().tarjetachipRecarga.usuario.nombre:""}   
                ${ni[this.idioma].paginas.seleccionMenu.quienEs}
                ${me.getState().tarjetachipRecarga.saldo}
           </div>
            <div id="titulo">
                ${this.nombreMenu}
            </div>
            <div id="etiquetas" class="${3==this.items.length?"etiVer3":"etiNoVer"}">
                <tarjeta-vianda-nmenu .item="${this.items[0]}" @click="${this.proximaPantalla}"></tarjeta-vianda-nmenu>
                <tarjeta-vianda-nmenu .item="${this.items[1]}" @click="${this.proximaPantalla}"></tarjeta-vianda-nmenu>
                <tarjeta-vianda-nmenu .item="${this.items[2]}" @click="${this.proximaPantalla}"></tarjeta-vianda-nmenu>
            </div>
            <div id="etiquetas" class="${2==this.items.length?"etiVer2":"etiNoVer"}">
                <tarjeta-vianda-nmenu .item="${this.items[0]}" @click="${this.proximaPantalla}"></tarjeta-vianda-nmenu>
                <tarjeta-vianda-nmenu .item="${this.items[1]}" @click="${this.proximaPantalla}"></tarjeta-vianda-nmenu>
            </div>
            <div id="etiquetas" class="${1==this.items.length?"etiVer1":"etiNoVer"}">
                <tarjeta-vianda-nmenu .item="${this.items[0]}" @click="${this.proximaPantalla}"></tarjeta-vianda-nmenu>
            </div>
            <div id="pie">
                <input type="button" class="buttonAtras" value=${ni[this.idioma].paginas.general.volver} @click="${this.volver}">
            </div>
        </div>
        `}stateChanged(e,t){t==mi&&"viandaseleccionmenu"==e.ui.quePantalla&&(me.dispatch(c(si.viandaseleccionmenu.segundos,"mensajeespera","viandaseleccionmenu")),this.items=this.menues.filter(t=>t.idTipo==e.vianda.tipoMenu.id),this.nombreMenu=e.vianda.tipoMenu.nombre,this.update()),t==gi&&"viandaseleccionmenu"==e.ui.quePantalla&&(e.tarjetaChip.colocada||me.dispatch(s("inicio"))),t==fi&&(this.menues=e.aplicacion.entities.menu)}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}volver(){me.dispatch(s("viandaselecciontipomenu"))}proximaPantalla(e){me.dispatch(P(e.currentTarget.item)),me.dispatch(s("viandamenuaceptacion"))}});const vi="ui.timeStampPantalla",bi="tarjetaChip.respuestaTimeStamp";window.customElements.define("pantalla-viandamenuaceptacion",class extends(Ct(me,vi,bi)(jt)){constructor(){super(),this.hidden=!0,this.itemMenuTipo={},this.item={},this.idioma="ES";var e=new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"),t=new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"),i=new Date;i.setDate(i.getDate()+1),this.paraDia=t[i.getDay()]+", "+i.getDate()+" de "+e[i.getMonth()]+" de "+i.getFullYear()}static get styles(){return wt`
        :host{
            display: grid;
            justify-items:center;
            align-items: center;  
            background-color:black;
            height: 100vh;
            width: 100vw;   
        }
        :host([hidden]){
            display: none; 
        }
        .buttonAtras {
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: .5rem 2rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 2rem;
            margin: 1rem .5rem;
            cursor: pointer;
            box-shadow:var(--shadow-elevation-8-box);
        }
        .buttonAceptar {
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: 1.5rem 1rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 2.6rem;
            margin: 1rem .5rem;
            cursor: pointer;
            box-shadow:var(--shadow-elevation-8-box);
        }
        #fondoimagen01{
            position:absolute;
            top:0;
            left:0;
            height: 100vh;
            width: 100vw;   
            background-image:var(--imagen-pantalla-fondo-vianda);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            justify-items:center;
            align-items: center;          
        }
        #fondocolor{
            position:absolute;
            top:0;
            left:0;
            background-color: black;           
            opacity: 0;
            height: 100vh;
            width: 100vw;  
            animation-name: imacolor;
            animation-duration: 6s;
            opacity: 0.7;
        }
        #fondocuerpo{
            z-index: 10;
            display: grid;
            grid-template-rows: 8% 10% 10% 15% 19% 11% 10%  auto;
            grid-template-columns: 16fr 40fr 2fr 26fr 16fr;
            justify-items:center;
            align-items: center;  
            height: 100vh;              
            width: 100%;        
        }
        #MenuDescripcion{
            display: grid;
            grid-column-start: 1;
            grid-column-end: 6;
            background:-transparent;
            font-size:1rem;
            color:var(--titulo-texto);
            width:100%;
            height:100%;
            justify-items: left;
            align-items: center; 
            text-align: left;
            padding-left:1rem;
        }
        #fecha{
            display: grid;
            grid-column-start: 1;
            grid-column-end: 6;
            width: 100%;
            height: 100%;
            justify-items: left;
            align-items: center; 
            text-align: left;
            padding-left: 1rem;
            background-color:transparent;
            font-size: 1.5rem;
            color:var(--titulo-texto);
        }
        #titulo{
            display: grid;
            grid-column-start: 3;
            grid-column-end: 5;
            background-color:var(--fondo-etiqueta);
            justify-items: left;
            align-items: center; 
            text-align: left;
            height: 100%;
            width: 90%;
            padding-left: 5%;
            padding-right: 5%;
            font-size:1.2rem;
            font-weight:bold;
            color:black;
            border-top-right-radius: 1rem;
        }
        #botonVolver{
            display: grid;
            grid-column-start: 1;
            grid-column-end: 3;
            justify-items: center;
            align-items: center;   
            background-color:transparent;
            height: 100%;
            width: 100%;
        }
        #botonConfirmar{
            display: grid;
            grid-column-start: 3;
            grid-column-end: 6;
            justify-items: left;
            align-items: center;   
            background-color:transparent;
            height: 100%;
            width: 100%;
        }
        #fondoImgMenu{
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 4;
            grid-row-end: 7;
            display: grid;
            justify-items: center;
            align-items: center;   
            background-color:var(--fondo-etiqueta);
            height: 100%;
            width: 100%;
            border-top-left-radius: 2rem;
            border-bottom-left-radius: 2rem;
        }
        #imgMenu{
            display: grid;
            justify-items: center;
            align-items: center;   
            background-color:transparent;
            height: 100%;
            width: 100%;
            /* background-image:url("C:/Desarrollo/bugsVianda/recusrsos/imagenes/menu/tarta-jq-01.png"); */
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            border-top-left-radius: 1rem;
            border-bottom-left-radius: 1rem;
        }
        #descripcion{
            grid-column-start: 3;
            grid-column-end: 5;
            display: grid;
            justify-items: center;
            align-items: center;   
            background-color:var(--fondo-etiqueta);
            color:#4b4a4a;
            height: 90%;
            width: 90%;
            padding: 5%;
        }
        #fondoPrecio{
            grid-column-start: 3;
            grid-column-end: 5;
            display: grid;
            justify-items: center;
            align-items: center;   
            background-color:var(--fondo-etiqueta);
            height: 100%;
            width: 100%;
            border-bottom-right-radius: 1rem;
        }
        #precio{
            display: grid;
            justify-items: center;
            align-items: center;  
            background-color:transparent;
            height: 100%;
            width: auto;
            font-size:2rem;
            font-weight:bold;
            color:var(--color-precio);
        }
        #separacion{
            grid-column-start: 1;
            grid-column-end: 6;
            height: 100%;
            width: 100%;
        }
        @keyframes imacolor {
            from{opacity: 0;} to {opacity: 0.7;}
        }
        `}render(){return et`
        <div id="fondoimagen01">
        </div>
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="MenuDescripcion">
                ${ni[this.idioma].paginas.general.nombreSistema}
            </div>
            <div id="fecha">
                ${ni[this.idioma].paginas.menuAceptacioin.dia}
                ${this.paraDia}
            </div>
            <div id="separacion">
            </div>
            <div id="fondoImgMenu">
                <div id="imgMenu" style="background-image:url('${this.item.url}')">
                </div>
            </div>
            <div id="titulo">
                ${this.itemMenuTipo.nombre}
                <br/>
                ${this.item.titulo}
            </div>
            <div id="descripcion">
                ${this.item.descripcion} 
            </div>
            <div id="fondoPrecio">
                <div id=precio>$${this.item.precio}.-</div>
            </div>
            <div>                
            </div>
            <div id="separacion">
            </div>
            <div id="botonVolver">
                <input type="button" class="buttonAtras" value= ${ni[this.idioma].paginas.general.volver} @click="${this.volver}">
            </div>
            <div id="botonConfirmar">
                <input type="button" class="buttonAtras" value=${ni[this.idioma].paginas.menuAceptacioin.confirmarCobrar} @click="${this.proximaPantalla}">
            </div>

        </div>
        `}stateChanged(e,t){t==vi&&"viandamenuaceptacion"==e.ui.quePantalla&&(me.dispatch(c(si.viandamenuaceptacion.segundos,"mensajeespera","viandamenuaceptacion")),this.itemMenuTipo=e.vianda.tipoMenu,this.item=e.vianda.menu,this.update()),t==bi&&"viandamenuaceptacion"==e.ui.quePantalla&&(e.tarjetaChip.colocada||me.dispatch(s("inicio")))}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}volver(){me.dispatch(s("viandaseleccionmenu"))}proximaPantalla(e){const t=me.getState().vianda.menu,i=me.getState().tarjetachipRecarga.saldo,a=me.getState().tarjetachipRecarga.usuario,o=new Date,r=new Date(o.setDate(o.getDate()+1)),n=r.getDay().toString().padStart(2,"0")+"/"+(r.getMonth()+1).toString().padStart(2,"0")+"/"+r.getFullYear().toString();me.dispatch(Y(i-t.precio,[w({periferico:"impresora",comando:"print",subComando:{usuario:a.id,nombre:a.nombre,fecha:n,descripcion:t.titulo.substr(0,18)+" $"+t.precio,numero:t.id}}),s("viandamenuexito")]))}});const yi="ui.timeStampPantalla";window.customElements.define("pantalla-viandamenuexito",class extends(Ct(me,yi)(jt)){constructor(){super(),this.hidden=!0,this.idioma="ES"}static get styles(){return wt`
        :host{
            display: grid;
            justify-items:center;
            align-items: center;  
            background-color:var(--pantalla-fondo);
            height: 100vh;
            width: 100vw;   
        }
        :host([hidden]){
            display: none; 
        }
        .buttonAtras {
            border-radius: 2rem;
            background-color: var(--boton-fondo);
            border: none;
            color: var(--boton-texto);;
            padding: .5rem 2rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 2rem;
            margin: 1rem .5rem;
            cursor: pointer;
            box-shadow:var(--shadow-elevation-8-box);
        }
        #fondoimagen01{
            position:absolute;
            top:0;
            left:0;
            height: 100vh;
            width: 100vw;   
            background-image:var(--imagen-pantalla-fondo-vianda);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            justify-items:center;
            align-items: center;          
        }
        #fondocolor{
            position:absolute;
            top:0;
            left:0;
            background-color: black;           
            opacity: 0;
            height: 100vh;
            width: 100vw;  
            animation-name: imacolor;
            animation-duration: 6s;
            opacity: 0.8;
        }
        #fondocuerpo{
            position:absolute;
            top:0;
            left:0;
            display: grid;
            grid-template-rows: 10% 10% 20% 20% 20% auto;
            grid-template-columns: 100%;
            justify-items:center;
            align-items: center;  
            height: 100vh;
            width: 100vw;             
        }
        #MenuDescripcion{
            display: grid;
            background-color:transparent;
            font-size:1rem;
            color:var(--titulo-texto);
            width:100%;
            text-align: left;
            padding-left:1rem;
        }
        #quienEs{
            display: grid;
            background-color:transparent;
            font-size:2.2rem;
            color:var(--titulo-texto);
            width:100%;
            text-align: center;
            padding-left:1rem;
        }
        #ok{
            display: grid; 
            height: 100%;
            width: 100%; 
            background-image:var(--ok-vianda);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 6rem 6rem;
        }
        #titulo{
            display: grid;  
            background-color:transparent;
            font-size:3.5rem;
            color:var(--titulo-texto);;
        }
        #descripcion{
            display: grid;  
            background-color:transparent;
            font-size:3.5rem;
            color:var(--titulo-texto);;
        }
        #pie{
            display: grid;
            justify-items: center; 
            background-color:transparent;
        }
        @keyframes imacolor {
            from{opacity: 0;} to {opacity: 0.8;}
        }
        `}render(){return et`
        <div id="fondoimagen01">
        </div>
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="MenuDescripcion">
            ${ni[this.idioma].paginas.general.nombreSistema}
            </div>
            <div id="quienEs">    
               ${me.getState().tarjetachipRecarga.usuario?me.getState().tarjetachipRecarga.usuario.nombre:""}
            </div>
            <div id="ok">    
            </div>
            <div id="titulo">
                ${ni[this.idioma].paginas.menuExito.titulo}
            </div>
            <div id="descripcion">
                ${ni[this.idioma].paginas.menuExito.ticket}
            </div>
            <div id="pie">
                <input type="button" class="buttonAtras" value=${ni[this.idioma].paginas.menuExito.finalizar} @click="${this.volver}">
            </div>
        </div>
        `}stateChanged(e,t){t==yi&&"viandamenuexito"==e.ui.quePantalla&&(me.dispatch(c(si.viandamenuexito.segundos,"inicio","viandamenuexito")),this.update())}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}volver(){me.dispatch(s("inicio"))}});const wi="ui.timeStampPantalla";window.customElements.define("view-manager",class extends(kt(me,wi)(jt)){constructor(){super(),this.current="Titulo"}static get styles(){return wt`
      :host {
        height: 100%;
        width: 100%;
      }
      #inicio {
        align-self: top;
        height: 100%;
        width: 100%;
      }
      #status {
        align-self: end;
      }
    `}render(){return et`<cuenta-regresiva></cuenta-regresiva>
      <mensaje-espera id="mensajeespera"></mensaje-espera>
      <pantalla-mensajeerror id="mensajeerror"></pantalla-mensajeerror>
      <pantalla-mensajefueralinea id="fueralinea"></pantalla-mensajefueralinea>

      <pantalla-inicio id="inicio"></pantalla-inicio>
      <pantalla-tarjetachiplectura
        id="tarjetachiplectura"
      ></pantalla-tarjetachiplectura>
      <pantalla-tarjetachipseleccionimporte
        id="tarjetachipseleccionimporte"
      ></pantalla-tarjetachipseleccionimporte>
      <pantalla-tarjetachipselecciontarjetacredito
        id="tarjetachipselecciontarjetacredito"
      ></pantalla-tarjetachipselecciontarjetacredito>
      <pantalla-cargatarjetacreditoposnet
        id="cargatarjetacreditoposnet"
      ></pantalla-cargatarjetacreditoposnet>
      <pantalla-tarjetachiprecargaexito
        id="tarjetachiprecargaexito"
      ></pantalla-tarjetachiprecargaexito>

      <pantalla-viandatarjetachiplectura
        id="viandatarjetachiplectura"
      ></pantalla-viandatarjetachiplectura>
      <pantalla-viandaselecciontipomenu
        id="viandaselecciontipomenu"
      ></pantalla-viandaselecciontipomenu>
      <pantalla-viandaseleccionmenu
        id="viandaseleccionmenu"
      ></pantalla-viandaseleccionmenu>
      <pantalla-viandamenuaceptacion
        id="viandamenuaceptacion"
      ></pantalla-viandamenuaceptacion>
      <pantalla-viandamenuexito
        id="viandamenuexito"
      ></pantalla-viandamenuexito>`}conectar(){me.dispatch(r())}currentTitulo(){return this.current}stateChanged(e,t){t==wi&&("mensajeespera"!=e.ui.quePantalla&&"error"!=e.ui.quePantalla&&"fueralinea"!=e.ui.quePantalla&&(this.shadowRoot.querySelector("#inicio").hidden="inicio"!=e.ui.quePantalla,this.shadowRoot.querySelector("#tarjetachiplectura").hidden="tarjetachiplectura"!=e.ui.quePantalla,this.shadowRoot.querySelector("#tarjetachipseleccionimporte").hidden="tarjetachipseleccionimporte"!=e.ui.quePantalla,this.shadowRoot.querySelector("#tarjetachipselecciontarjetacredito").hidden="tarjetachipselecciontarjetacredito"!=e.ui.quePantalla,this.shadowRoot.querySelector("#cargatarjetacreditoposnet").hidden="cargatarjetacreditoposnet"!=e.ui.quePantalla,this.shadowRoot.querySelector("#tarjetachiprecargaexito").hidden="tarjetachiprecargaexito"!=e.ui.quePantalla,this.shadowRoot.querySelector("#viandatarjetachiplectura").hidden="viandatarjetachiplectura"!=e.ui.quePantalla,this.shadowRoot.querySelector("#viandaselecciontipomenu").hidden="viandaselecciontipomenu"!=e.ui.quePantalla,this.shadowRoot.querySelector("#viandaseleccionmenu").hidden="viandaseleccionmenu"!=e.ui.quePantalla,this.shadowRoot.querySelector("#viandamenuaceptacion").hidden="viandamenuaceptacion"!=e.ui.quePantalla,this.shadowRoot.querySelector("#viandamenuexito").hidden="viandamenuexito"!=e.ui.quePantalla),this.shadowRoot.querySelector("#fueralinea").hidden="fueralinea"!=e.ui.quePantalla,this.shadowRoot.querySelector("#mensajeespera").hidden="mensajeespera"!=e.ui.quePantalla,this.shadowRoot.querySelector("#mensajeerror").hidden="error"!=e.ui.quePantalla,this.update())}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},orientation:{type:String,reflect:!0},logged:{type:String,reflect:!0}}}}),i.d(t,"connection",function(){return xi});let xi=null;(xi=new WebSocket("ws://localhost:9000/")).onopen=()=>{me.dispatch(w({periferico:"aplicacion",comando:"info",data:"websocket conectado!!"})),me.dispatch(te({periferico:"aplicacion",comando:"getJsonFile",subComando:"/data/menu.json"})),me.dispatch(te({periferico:"aplicacion",comando:"getJsonFile",subComando:"/data/menuTipo.json"}))},xi.onerror=e=>{console.log(`WebSocket error: ${e}`)},xi.onmessage=e=>{me.dispatch((e=>({type:"[servidorWS] RECIBIR_MENSAJE",mensaje:JSON.parse(e.data)}))(e))}}]);