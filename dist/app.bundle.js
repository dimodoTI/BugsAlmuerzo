/*! For license information please see app.bundle.js.LICENSE */
!function(e){var t={};function i(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./",i(i.s=35)}([function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=function(e,t){var i=e[1]||"",a=e[3];if(!a)return i;if(t&&"function"==typeof btoa){var r=(n=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),o=a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"});return[i].concat(o).concat([r]).join("\n")}var n;return[i].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(a[o]=!0)}for(r=0;r<e.length;r++){var n=e[r];"number"==typeof n[0]&&a[n[0]]||(i&&!n[2]?n[2]=i:i&&(n[2]="("+n[2]+") and ("+i+")"),t.push(n))}},t}},function(e,t,i){var a,r,o={},n=(a=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=a.apply(this,arguments)),r}),s=function(e){var t={};return function(e){return void 0===t[e]&&(t[e]=function(e){return document.querySelector(e)}.call(this,e)),t[e]}}(),c=null,d=0,l=[],u=i(23);function p(e,t){for(var i=0;i<e.length;i++){var a=e[i],r=o[a.id];if(r){r.refs++;for(var n=0;n<r.parts.length;n++)r.parts[n](a.parts[n]);for(;n<a.parts.length;n++)r.parts.push(b(a.parts[n],t))}else{var s=[];for(n=0;n<a.parts.length;n++)s.push(b(a.parts[n],t));o[a.id]={id:a.id,refs:1,parts:s}}}}function h(e,t){for(var i=[],a={},r=0;r<e.length;r++){var o=e[r],n=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};a[n]?a[n].parts.push(s):i.push(a[n]={id:n,parts:[s]})}return i}function m(e,t){var i=s(e.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=l[l.length-1];if("top"===e.insertAt)a?a.nextSibling?i.insertBefore(t,a.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),l.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(t)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function f(e){var t=document.createElement("style");return e.attrs.type="text/css",v(t,e.attrs),m(e,t),t}function v(e,t){Object.keys(t).forEach(function(i){e.setAttribute(i,t[i])})}function b(e,t){var i,a,r,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var n=d++;i=c||(c=f(t)),a=x.bind(null,i,n,!1),r=x.bind(null,i,n,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",v(t,e.attrs),m(e,t),t}(t),a=function(e,t,i){var a=i.css,r=i.sourceMap,o=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||o)&&(a=u(a));r&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var n=new Blob([a],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(n),s&&URL.revokeObjectURL(s)}.bind(null,i,t),r=function(){g(i),i.href&&URL.revokeObjectURL(i.href)}):(i=f(t),a=function(e,t){var i=t.css,a=t.media;a&&e.setAttribute("media",a);if(e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}.bind(null,i),r=function(){g(i)});return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=n()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var i=h(e,t);return p(i,t),function(e){for(var a=[],r=0;r<i.length;r++){var n=i[r];(s=o[n.id]).refs--,a.push(s)}e&&p(h(e,t),t);for(r=0;r<a.length;r++){var s;if(0===(s=a[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var y,w=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function x(e,t,i,a){var r=i?"":a.css;if(e.styleSheet)e.styleSheet.cssText=w(t,r);else{var o=document.createTextNode(r),n=e.childNodes;n[t]&&e.removeChild(n[t]),n.length?e.insertBefore(o,n[t]):e.appendChild(o)}}},function(e,t,i){"use strict";(function(e,a){var r,o=i(5);r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:a;var n=Object(o.a)(r);t.a=n}).call(this,i(4),i(34)(e))},function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){"use strict";function a(e){var t,i=e.Symbol;return"function"==typeof i?i.observable?t=i.observable:(t=i("observable"),i.observable=t):t="@@observable",t}i.d(t,"a",function(){return a})},function(e,t,i){var a=i(7);"string"==typeof a&&(a=[[e.i,a,""]]);var r={transform:void 0};i(1)(a,r);a.locals&&(e.exports=a.locals)},function(e,t,i){var a=i(3);(e.exports=i(0)(!1)).push([e.i,"html {\r\n    touch-action:none;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    overflow-y: hidden;\r\n    overflow-x: hidden;\r\n    font-size: 3vmin;\r\n    /* inicio */\r\n    --imagen-pantalla-fondo01: url("+a(i(8))+");\r\n    --imagen-pantalla-fondo02: url("+a(i(9))+");\r\n    /* tarjetachip */\r\n    --imagen-pantalla-fondo-tarjetachip: url("+a(i(10))+");\r\n    --imagen-pantalla-boquilla-tarjetachip: url("+a(i(11))+");\r\n    --imagen-pantalla-boquilla-baja-tarjetachip: url("+a(i(12))+");\r\n    --lectortarjetachip-tarjetachip: url("+a(i(13))+");\r\n    --tarjeta-visa-credito: url("+a(i(14))+");\r\n    --tarjeta-master-credito: url("+a(i(15))+");\r\n    --tarjeta-amex-credito: url("+a(i(16))+");\r\n    --ok-tarjetachip: url("+a(i(17))+");\r\n    /* vianda */\r\n    --imagen-pantalla-fondo-vianda: url("+a(i(18))+");\r\n    --imagen-pantalla-boquilla-vianda: url("+a(i(19))+");\r\n    --imagen-pantalla-boquilla-baja-vianda: url("+a(i(20))+");\r\n    --lectortarjetachip-vianda: url("+a(i(21))+");\r\n    --ok-vianda: url("+a(i(22))+");\r\n}\r\n\r\nbody {\r\n    overflow-y: hidden;\r\n    overflow-x: hidden;\r\n    -webkit-overflow-scrolling: touch;\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n\r\n}\r\n",""])},function(e,t,i){e.exports=i.p+"d0cb4f5ec624ac8a537225f6c6ad1fef.png"},function(e,t,i){e.exports=i.p+"67b4a8a9dbc3dfa0d10b17375f6a3cee.png"},function(e,t,i){e.exports=i.p+"d5dda18366b611cc4822debb7d027709.png"},function(e,t,i){e.exports=i.p+"da23e146a0e7287c9e2a59361eb4924d.png"},function(e,t,i){e.exports=i.p+"d7f744307c5b42fc4b33ce2445166f9b.png"},function(e,t,i){e.exports=i.p+"5121d8d224cc57f983813f3db0a19382.png"},function(e,t,i){e.exports=i.p+"3d0127f6ea7c606ba9c26a4b51e628a6.png"},function(e,t,i){e.exports=i.p+"1b24cad43c8ef7c5285ad55463cf696c.png"},function(e,t,i){e.exports=i.p+"38f15f024bdfbea5dd2590b3cb9dae28.png"},function(e,t,i){e.exports=i.p+"4fb94238914721a33fb076f3c3df7432.png"},function(e,t,i){e.exports=i.p+"d0cb4f5ec624ac8a537225f6c6ad1fef.png"},function(e,t,i){e.exports=i.p+"da23e146a0e7287c9e2a59361eb4924d.png"},function(e,t,i){e.exports=i.p+"d7f744307c5b42fc4b33ce2445166f9b.png"},function(e,t,i){e.exports=i.p+"5121d8d224cc57f983813f3db0a19382.png"},function(e,t,i){e.exports=i.p+"4fb94238914721a33fb076f3c3df7432.png"},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var i=t.protocol+"//"+t.host,a=i+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o)?e:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?i+o:a+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,i){var a=i(25);"string"==typeof a&&(a=[[e.i,a,""]]);var r={transform:void 0};i(1)(a,r);a.locals&&(e.exports=a.locals)},function(e,t,i){var a=i(3);(e.exports=i(0)(!1)).push([e.i,"@font-face {\r\n    font-family: 'Nunito', sans-serif;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    src: url("+a(i(26))+") format('ttf');\r\n}\r\nhtml{\r\n    font-family: 'Nunito',sans-serif;\r\n}\r\n    ",""])},function(e,t,i){e.exports=i.p+"dba92cb9dc60f9f35cbf62428afd3ac1.ttf"},function(e,t,i){var a=i(28);"string"==typeof a&&(a=[[e.i,a,""]]);var r={transform:void 0};i(1)(a,r);a.locals&&(e.exports=a.locals)},function(e,t,i){(e.exports=i(0)(!1)).push([e.i,"html {\r\n    \r\n    --font-display-1-family:inherit;\r\n    --font-display-1-size:9.33rem;\r\n    --font-display-1-weight:300;\r\n\r\n    --font-display-2-family:inherit;\r\n    --font-display-2-size:4.66rem;\r\n    --font-display-2-weight:normal;\r\n\r\n    --font-display-3-family:inherit;\r\n    --font-display-3-size:3.75rem;\r\n    --font-display-3-weight:normal;\r\n\r\n    --font-display-4-family:inherit;\r\n    --font-display-4-size:2.83rem;\r\n    --font-display-4-weight:normal;\r\n\r\n    --font-headline-family:inherit;\r\n    --font-headline-size:2rem;\r\n    --font-headline-weight:normal;\r\n\r\n    --font-title-family:inherit;            \r\n    --font-title-size:1.66rem;\r\n    --font-title-weight:500;\r\n\r\n    --font-subheading-family:inherit;\r\n    --font-subheading-size:1.25rem;\r\n    --font-subheading-weight:normal;\r\n\r\n    --font-body-2-family:inherit;\r\n    --font-body-2-size: 1.08rem;\r\n    --font-body-2-weight:500;\r\n\r\n    --font-body-1-family:inherit;\r\n    --font-body-1-size: 1.08rem;\r\n    --font-body-1-weight:normal;\r\n\r\n    --font-caption-family:inherit;\r\n    --font-caption-size: 1rem;\r\n    --font-caption-weight:normal;\r\n\r\n    --font-button-family:inherit;\r\n    --font-button-size: 1.16rem;\r\n    --font-button-weight:500;\r\n\r\n    --font-header-family:inherit;\r\n    --font-header-size: 1.16rem;\r\n    --font-header-weight:500;\r\n\r\n    --font-subcaption-family:inherit;\r\n    --font-subcaption-size: .8rem;\r\n    --font-subcaption-weight:500;\r\n\r\n    --font-subindex-family:inherit;\r\n    --font-subindex-size: .6rem;\r\n    --font-subindex-weight:600;\r\n}",""])},function(e,t,i){var a=i(30);"string"==typeof a&&(a=[[e.i,a,""]]);var r={transform:void 0};i(1)(a,r);a.locals&&(e.exports=a.locals)},function(e,t,i){(e.exports=i(0)(!1)).push([e.i,"html{\r\n    --letra-oscura:#000000;\r\n    --letra-clara:#ffffff;\r\n    --pantalla-fondo:#978f92;\r\n    --pantalla-fondo-claro:#ffffff;\r\n    --pantalla-fondo-oscuro:#000000;\r\n    --boton-fondo:#ffde03;\r\n    --boton-texto:#646473;  \r\n    --titulo-texto:hsl(0, 0%, 95%);\r\n    --texto-oscuro:#646473;\r\n    --fondo-etiqueta:#ececec;\r\n    --color-precio:#b12121;\r\n}",""])},function(e,t,i){var a=i(32);"string"==typeof a&&(a=[[e.i,a,""]]);var r={transform:void 0};i(1)(a,r);a.locals&&(e.exports=a.locals)},function(e,t,i){(e.exports=i(0)(!1)).push([e.i,"html {\r\n    --shadow-none-box: none;\r\n    --shadow-none-z: 0;\r\n\r\n    --shadow-elevation-2-box: 0 2px 2px 0 rgba(0, 0, 0, 0.14),0 1px 5px 0 rgba(0, 0, 0, 0.12),0 3px 1px -2px rgba(0, 0, 0, 0.2);\r\n    --shadow-elevation-2-z: 200;\r\n\r\n    --shadow-elevation-3-box: 0 3px 4px 0 rgba(0, 0, 0, 0.14),0 1px 8px 0 rgba(0, 0, 0, 0.12),0 3px 3px -2px rgba(0, 0, 0, 0.4);\r\n    --shadow-elevation-3-z: 300;\r\n\r\n    --shadow-elevation-4-box: 0 4px 5px 0 rgba(0, 0, 0, 0.14),0 1px 10px 0 rgba(0, 0, 0, 0.12),0 2px 4px -1px rgba(0, 0, 0, 0.4);\r\n    --shadow-elevation-4-z: 400;\r\n\r\n    --shadow-elevation-6-box: 0 6px 10px 0 rgba(0, 0, 0, 0.14),0 1px 18px 0 rgba(0, 0, 0, 0.12),0 3px 5px -1px rgba(0, 0, 0, 0.4);\r\n    --shadow-elevation-6-z: 600;\r\n\r\n    --shadow-elevation-8-box: 0 8px 10px 1px rgba(0, 0, 0, 0.14),0 3px 14px 2px rgba(0, 0, 0, 0.12),0 5px 5px -3px rgba(0, 0, 0, 0.4);\r\n    --shadow-elevation-8-z: 800;\r\n\r\n    --shadow-elevation-12-box: 0 12px 16px 1px rgba(0, 0, 0, 0.14),0 4px 22px 3px rgba(0, 0, 0, 0.12),0 6px 7px -4px rgba(0, 0, 0, 0.4);\r\n    --shadow-elevation-12-z: 1200;\r\n\r\n    --shadow-elevation-16-box: 0 16px 24px 2px rgba(0, 0, 0, 0.14),0  6px 30px 5px rgba(0, 0, 0, 0.12),0  8px 10px -5px rgba(0, 0, 0, 0.4);\r\n    --shadow-elevation-16-z: 1600;\r\n\r\n    --shadow-elevation-24-box: 0 24px 38px 3px rgba(0, 0, 0, 0.14),0 9px 46px 8px rgba(0, 0, 0, 0.12),0 11px 15px -7px rgba(0, 0, 0, 0.4);\r\n    --shadow-elevation-24-z: 2400;\r\n}",""])},function(e,t,i){(function(e){!function(t){"use strict";function i(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function a(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function r(e,t,i){r.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:i,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function n(e,t){n.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function s(e,t,i){s.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:i,enumerable:!0})}function c(e,t,i){var a=e.slice((i||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,a),e}function d(e){var t=void 0===e?"undefined":k(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,i,a,u,p,h){h=h||[];var m=(u=u||[]).slice(0);if(void 0!==p){if(a){if("function"==typeof a&&a(m,p))return;if("object"===(void 0===a?"undefined":k(a))){if(a.prefilter&&a.prefilter(m,p))return;if(a.normalize){var g=a.normalize(m,p,e,t);g&&(e=g[0],t=g[1])}}}m.push(p)}"regexp"===d(e)&&"regexp"===d(t)&&(e=e.toString(),t=t.toString());var f=void 0===e?"undefined":k(e),v=void 0===t?"undefined":k(t),b="undefined"!==f||h&&h[h.length-1].lhs&&h[h.length-1].lhs.hasOwnProperty(p),y="undefined"!==v||h&&h[h.length-1].rhs&&h[h.length-1].rhs.hasOwnProperty(p);if(!b&&y)i(new o(m,t));else if(!y&&b)i(new n(m,e));else if(d(e)!==d(t))i(new r(m,e,t));else if("date"===d(e)&&e-t!=0)i(new r(m,e,t));else if("object"===f&&null!==e&&null!==t)if(h.filter(function(t){return t.lhs===e}).length)e!==t&&i(new r(m,e,t));else{if(h.push({lhs:e,rhs:t}),Array.isArray(e)){var w;for(e.length,w=0;w<e.length;w++)w>=t.length?i(new s(m,w,new n(void 0,e[w]))):l(e[w],t[w],i,a,m,w,h);for(;w<t.length;)i(new s(m,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),j=Object.keys(t);x.forEach(function(r,o){var n=j.indexOf(r);n>=0?(l(e[r],t[r],i,a,m,r,h),j=c(j,n)):l(e[r],void 0,i,a,m,r,h)}),j.forEach(function(e){l(void 0,t[e],i,a,m,e,h)})}h.length=h.length-1}else e!==t&&("number"===f&&isNaN(e)&&isNaN(t)||i(new r(m,e,t)))}function u(e,t,i,a){return a=a||[],l(e,t,function(e){e&&a.push(e)},i),a.length?a:void 0}function p(e,t,i){if(e&&t&&i&&i.kind){for(var a=e,r=-1,o=i.path?i.path.length-1:0;++r<o;)void 0===a[i.path[r]]&&(a[i.path[r]]="number"==typeof i.path[r]?[]:{}),a=a[i.path[r]];switch(i.kind){case"A":!function e(t,i,a){if(a.path&&a.path.length){var r,o=t[i],n=a.path.length-1;for(r=0;r<n;r++)o=o[a.path[r]];switch(a.kind){case"A":e(o[a.path[r]],a.index,a.item);break;case"D":delete o[a.path[r]];break;case"E":case"N":o[a.path[r]]=a.rhs}}else switch(a.kind){case"A":e(t[i],a.index,a.item);break;case"D":t=c(t,i);break;case"E":case"N":t[i]=a.rhs}return t}(i.path?a[i.path[r]]:a,i.index,i.item);break;case"D":delete a[i.path[r]];break;case"E":case"N":a[i.path[r]]=i.rhs}}}function h(e){return"color: "+z[e].color+"; font-weight: bold"}function m(e,t,i,a){var r=u(e,t);try{a?i.groupCollapsed("diff"):i.group("diff")}catch(e){i.log("diff")}r?r.forEach(function(e){var t=e.kind,a=function(e){var t=e.kind,i=e.path,a=e.lhs,r=e.rhs,o=e.index,n=e.item;switch(t){case"E":return[i.join("."),a,"→",r];case"N":return[i.join("."),r];case"D":return[i.join(".")];case"A":return[i.join(".")+"["+o+"]",n];default:return[]}}(e);i.log.apply(i,["%c "+z[t].text,h(t)].concat(S(a)))}):i.log("—— no diff ——");try{i.groupEnd()}catch(e){i.log("—— diff end —— ")}}function g(e,t,i,a){switch(void 0===e?"undefined":k(e)){case"object":return"function"==typeof e[a]?e[a].apply(e,S(i)):e[a];case"function":return e(t);default:return e}}function f(e,t){var i=t.logger,a=t.actionTransformer,r=t.titleFormatter,o=void 0===r?function(e){var t=e.timestamp,i=e.duration;return function(e,a,r){var o=["action"];return o.push("%c"+String(e.type)),t&&o.push("%c@ "+a),i&&o.push("%c(in "+r.toFixed(2)+" ms)"),o.join(" ")}}(t):r,n=t.collapsed,s=t.colors,c=t.level,d=t.diff,l=void 0===t.titleFormatter;e.forEach(function(r,u){var p=r.started,h=r.startedTime,f=r.action,v=r.prevState,b=r.error,y=r.took,w=r.nextState,j=e[u+1];j&&(w=j.prevState,y=j.started-p);var k=a(f),S="function"==typeof n?n(function(){return w},f,r):n,_=x(h),z=s.title?"color: "+s.title(k)+";":"",E=["color: gray; font-weight: lighter;"];E.push(z),t.timestamp&&E.push("color: gray; font-weight: lighter;"),t.duration&&E.push("color: gray; font-weight: lighter;");var C=o(k,_,y);try{S?s.title&&l?i.groupCollapsed.apply(i,["%c "+C].concat(E)):i.groupCollapsed(C):s.title&&l?i.group.apply(i,["%c "+C].concat(E)):i.group(C)}catch(e){i.log(C)}var P=g(c,k,[v],"prevState"),A=g(c,k,[k],"action"),T=g(c,k,[b,v],"error"),R=g(c,k,[w],"nextState");if(P)if(s.prevState){var M="color: "+s.prevState(v)+"; font-weight: bold";i[P]("%c prev state",M,v)}else i[P]("prev state",v);if(A)if(s.action){var $="color: "+s.action(k)+"; font-weight: bold";i[A]("%c action    ",$,k)}else i[A]("action    ",k);if(b&&T)if(s.error){var N="color: "+s.error(b,v)+"; font-weight: bold;";i[T]("%c error     ",N,b)}else i[T]("error     ",b);if(R)if(s.nextState){var q="color: "+s.nextState(w)+"; font-weight: bold";i[R]("%c next state",q,w)}else i[R]("next state",w);d&&m(v,w,i,S);try{i.groupEnd()}catch(e){i.log("—— log end ——")}})}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},E,e),i=t.logger,a=t.stateTransformer,r=t.errorTransformer,o=t.predicate,n=t.logErrors,s=t.diffPredicate;if(void 0===i)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var c=[];return function(e){var i=e.getState;return function(e){return function(d){if("function"==typeof o&&!o(i,d))return e(d);var l={};c.push(l),l.started=j.now(),l.startedTime=new Date,l.prevState=a(i()),l.action=d;var u=void 0;if(n)try{u=e(d)}catch(e){l.error=r(e)}else u=e(d);l.took=j.now()-l.started,l.nextState=a(i());var p=t.diff&&"function"==typeof s?s(i,d):t.diff;if(f(c,Object.assign({},t,{diff:p})),c.length=0,l.error)throw l.error;return u}}}}var b,y,w=function(e,t){return function(e,t){return new Array(t+1).join(e)}("0",t-e.toString().length)+e},x=function(e){return w(e.getHours(),2)+":"+w(e.getMinutes(),2)+":"+w(e.getSeconds(),2)+"."+w(e.getMilliseconds(),3)},j="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S=function(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)},_=[];b="object"===(void 0===e?"undefined":k(e))&&e?e:"undefined"!=typeof window?window:{},(y=b.DeepDiff)&&_.push(function(){void 0!==y&&b.DeepDiff===u&&(b.DeepDiff=y,y=void 0)}),i(r,a),i(o,a),i(n,a),i(s,a),Object.defineProperties(u,{diff:{value:u,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:function(e,t,i){e&&t&&l(e,t,function(a){i&&!i(e,t,a)||p(e,t,a)})},enumerable:!0},applyChange:{value:p,enumerable:!0},revertChange:{value:function(e,t,i){if(e&&t&&i&&i.kind){var a,r,o=e;for(r=i.path.length-1,a=0;a<r;a++)void 0===o[i.path[a]]&&(o[i.path[a]]={}),o=o[i.path[a]];switch(i.kind){case"A":!function e(t,i,a){if(a.path&&a.path.length){var r,o=t[i],n=a.path.length-1;for(r=0;r<n;r++)o=o[a.path[r]];switch(a.kind){case"A":e(o[a.path[r]],a.index,a.item);break;case"D":case"E":o[a.path[r]]=a.lhs;break;case"N":delete o[a.path[r]]}}else switch(a.kind){case"A":e(t[i],a.index,a.item);break;case"D":case"E":t[i]=a.lhs;break;case"N":t=c(t,i)}return t}(o[i.path[a]],i.index,i.item);break;case"D":case"E":o[i.path[a]]=i.lhs;break;case"N":delete o[i.path[a]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==y},enumerable:!0},noConflict:{value:function(){return _&&(_.forEach(function(e){e()}),_=null),u},enumerable:!0}});var z={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},E={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,i=e.getState;return"function"==typeof t||"function"==typeof i?v()({dispatch:t,getState:i}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};t.defaults=E,t.createLogger=v,t.logger=C,t.default=C,Object.defineProperty(t,"__esModule",{value:!0})}(t)}).call(this,i(4))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,i){"use strict";i.r(t);i(6),i(24),i(27),i(29),i(31);const a="[servidorBugs] RECIBIR",r="[servidorBugs] ENVIAR",o=()=>({type:"[servidorBugs] CONECTAR"}),n=e=>({type:"[ui] MODO_PANTALLA",quePantalla:e}),s=(e,t,i)=>({type:"[ui] DISPARAR_TIMER",tiempo:e,target:t,pantallaQueLLamo:i}),c=()=>({type:"[ui] CANCELAR_TIMER"});var d=i(2),l={INIT:"@@redux/INIT"+Math.random().toString(36).substring(7).split("").join("."),REPLACE:"@@redux/REPLACE"+Math.random().toString(36).substring(7).split("").join(".")},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e};function h(e){if("object"!==(void 0===e?"undefined":u(e))||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function m(e,t){var i=t&&t.type;return"Given "+(i&&'action "'+String(i)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function g(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}i(33);const f=e=>({type:"[servidorWS] ENVIAR_MENSAJE",mensaje:e}),v={mensajeRecibido:null,recibidoTimeStamp:null},b={loading:0,errorVisible:!1,errorMessages:null,mediaSize:null,mediaOrientation:null,logged:"out",timeStampPantalla:null,quePantalla:null,timer:null,intervalo:null,tiempo:null,pantallaQueLLamo:null},y=e=>({type:"[tarjetaChipRecarga] GUARDAR_USUARIO",usuario:e}),w=e=>({type:"[tarjetaChipRecarga] GUARDAR_IMPORTE_SALDO",saldo:e}),x=e=>({type:"[tarjetaChipRecarga] GUARDAR_IMPORTE_RECARGA",recarga:e}),j=e=>({type:"[tarjetaChipRecarga] GUARDAR_TARJETA_CREDITO_RECARGA",tarjeta:e}),k={usuario:null,usuarioTimeStamp:null,saldo:null,saldoTimeStamp:null,recarga:null,recargaTimeStamp:null,tarjeta:null,tarjetaTimeStamp:null},S=e=>({type:"[vianda] GUARDAR_TIPO_MENU",tipoMenu:e}),_=e=>({type:"[vianda] GUARDAR_MENU",menu:e}),z={tipoMenu:null,tipoMenuTimeStamp:null,menu:null,menuTimeStamp:null},E="[posNet] INTERPRETAR",C="[posNet] COMANDO",P=(e,t)=>({type:C,comando:e,timeOut:t}),A=String.fromCharCode(3),T={respuesta:"",control:"",fin:!1,correcto:!1,respuestaTimeStamp:null,ultimoComando:null,reintentos:0},R=function(e){for(var t=Object.keys(e),i={},a=0;a<t.length;a++){var r=t[a];"function"==typeof e[r]&&(i[r]=e[r])}var o=Object.keys(i),n=void 0;try{!function(e){Object.keys(e).forEach(function(t){var i=e[t];if(void 0===i(void 0,{type:l.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===i(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+l.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(i)}catch(e){n=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(n)throw n;for(var a=!1,r={},s=0;s<o.length;s++){var c=o[s],d=i[c],l=e[c],u=d(l,t);if(void 0===u){var p=m(c,t);throw new Error(p)}r[c]=u,a=a||u!==l}return a?r:e}}({operadora:(e=v,t)=>{const i={...e};switch(t.type){case"[servidorWS] RECIBIR_MENSAJE":i.mensajeRecibido=t.mensaje,i.recibidoTimeStamp=(new Date).getTime()}return i},ui:(e=b,t)=>{const i={...e};switch(t.type){case"[ui] show spinner":i.loading+=1;break;case"[ui] hide spinner":i.loading-=1;break;case"[ui] show error":i.errorVisible=!0,i.errorMessages=t.message;break;case"[ui] hide error":i.errorVisible=!1,i.errorMessages="";break;case"[ui] media size change":i.mediaSize=t.media;break;case"[ui] media orientation change":i.mediaOrientation=t.media;break;case"[ui] LOGGED":i.logged=t.inOut;break;case"[ui] MODO_PANTALLA":i.timeStampPantalla=(new Date).getTime(),i.quePantalla=t.quePantalla;break;case"[ui] SET_TIMER":i.timer&&clearTimeout(i.timer),i.intervalo&&clearInterval(i.intervalo),i.timer=t.timer,i.intervalo=t.intervalo,i.tiempo=t.tiempo,i.pantallaQueLLamo=t.pantallaQueLLamo;break;case"[ui] CANCELAR_TIMER":i.timer&&clearTimeout(i.timer),i.intervalo&&clearInterval(i.intervalo);break;case"[ui] SET_CONTADOR":i.tiempo>0&&(i.tiempo-=1)}return i},tarjetachipRecarga:(e=k,t)=>{const i={...e};switch(t.type){case"[tarjetaChipRecarga] GUARDAR_USUARIO":i.usuario=t.usuario,i.usuarioTimeStamp=(new Date).getTime();break;case"[tarjetaChipRecarga] GUARDAR_IMPORTE_SALDO":i.saldo=t.saldo,i.saldoTimeStamp=(new Date).getTime();break;case"[tarjetaChipRecarga] GUARDAR_IMPORTE_RECARGA":i.recarga=t.recarga,i.recargaTimeStamp=(new Date).getTime();break;case"[tarjetaChipRecarga] GUARDAR_TARJETA_CREDITO_RECARGA":i.tarjeta=t.tarjeta,i.tarjetaTimeStamp=(new Date).getTime()}return i},vianda:(e=z,t)=>{const i={...e};switch(t.type){case"[vianda] GUARDAR_TIPO_MENU":i.tipoMenu=t.tipoMenu,i.tipoMenuTimeStamp=(new Date).getTime();break;case"[vianda] GUARDAR_MENU":i.menu=t.menu,i.menuTimeStamp=(new Date).getTime()}return i},postNet:(e=T,t)=>{const i={...e};switch(t.type){case C:i.respuestaTimeStamp=(new Date).getTime(),i.ultimoComando=t.comando,i.reintentos=0,i.respuesta="",i.control="",i.fin=!1,i.correcto=!1;break;case E:console.log(t.mensaje.split("")),t.mensaje.split("").forEach(e=>{i.fin?(i.control=e,i.correcto=(e=>{let t=0;for(let i=0;i<e.length;i++)console.log(e.substr(i,1).charCodeAt(0).toString(16)),t^=e.substr(i,1).charCodeAt(0);return console.log(String.fromCharCode(255&t)),String.fromCharCode(255&t)})(i.respuesta+A)==e,i.respuestaTimeStamp=(new Date).getTime()):e==A?i.fin=!0:i.respuesta+=e});break;case E:i.reintentos+=1}return i}}),M=[({dispatch:e})=>t=>i=>{t(i),"[servidorBugs] CONECTAR"===i.type&&e(f("connect"))},({dispatch:e})=>t=>i=>{t(i),i.type===r&&e(f("$send:"+i.mensaje))},({dispatch:e})=>t=>i=>{t(i),i.type===a&&"$PR01!"==i.mensaje&&e(n("importe"))}],$="postNet",N=[({dispatch:e})=>e=>t=>{e(t),"[servidorWS] ENVIAR_MENSAJE"===t.type&&jt.send(t.mensaje)},({dispatch:e})=>t=>i=>{if(t(i),"[servidorWS] RECIBIR_MENSAJE"===i.type){const t=i.mensaje.data;if(0==t.indexOf("#")){const i=t.split("#")[1],a=t.split("#")[2];switch(i){case"tarjetaChip":break;case $:e((e=>({type:E,mensaje:e}))(a))}}0==i.mensaje.data.indexOf("$")&&e((e=>({type:a,mensaje:e}))(i.mensaje.data))}}],q=[({dispatch:e})=>t=>i=>{if(t(i),"[ui] DISPARAR_TIMER"===i.type){const t=setTimeout(function(){e(n(i.target))},1e3*i.tiempo),a=setInterval(function(){e((e=>({type:"[ui] SET_CONTADOR",tiempo:e}))())},1e3);e(((e,t,i,a)=>({type:"[ui] SET_TIMER",timer:e,intervalo:t,tiempo:i,pantallaQueLLamo:a}))(t,a,i.tiempo,i.pantallaQueLLamo))}}],O=String.fromCharCode(6),V=(String.fromCharCode(21),String.fromCharCode(5)),D=String.fromCharCode(2),L=String.fromCharCode(3),I=[({dispatch:e})=>t=>i=>{if(t(i),i.type===C){const t=e=>{let t=0;for(let i=0;i<e.length;i++)t^=e.substr(i,1).charCodeAt(0);return String.fromCharCode(255&t)};e(f("#postNet#"+V)),setTimeout(function(){e(f("#postNet#"+D+i.comando+L+t(i.comando+L)))},5e3),setTimeout(function(){e(f("#postNet#"+O))},1e3)}},({dispatch:e})=>e=>t=>{e(t),t.type},({dispatch:e})=>e=>t=>{e(t),t.type}];const U=function e(t,i,a){var r;if("function"==typeof i&&void 0===a&&(a=i,i=void 0),void 0!==a){if("function"!=typeof a)throw new Error("Expected the enhancer to be a function.");return a(e)(t,i)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var o=t,n=i,s=[],c=s,p=!1;function m(){c===s&&(c=s.slice())}function g(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return n}function f(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return m(),c.push(e),function(){if(t){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,m();var i=c.indexOf(e);c.splice(i,1)}}}function v(e){if(!h(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,n=o(n,e)}finally{p=!1}for(var t=s=c,i=0;i<t.length;i++)(0,t[i])();return e}return v({type:l.INIT}),(r={dispatch:v,subscribe:f,getState:g,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");o=e,v({type:l.REPLACE})}})[d.a]=function(){var e,t=f;return(e={subscribe:function(e){if("object"!==(void 0===e?"undefined":u(e))||null===e)throw new TypeError("Expected the observer to be an object.");function i(){e.next&&e.next(g())}return i(),{unsubscribe:t(i)}}})[d.a]=function(){return this},e},r}(R,(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g)(function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return function(){for(var i=arguments.length,a=Array(i),r=0;r<i;r++)a[r]=arguments[r];var o=e.apply(void 0,a),n=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},s={getState:o.getState,dispatch:function(){return n.apply(void 0,arguments)}},c=t.map(function(e){return e(s)});return n=g.apply(void 0,c)(o.dispatch),p({},o,{dispatch:n})}}}(...[...M,...N,...q,...I]))),B=new WeakMap,H=e=>"function"==typeof e&&B.has(e),J=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,F=(e,t,i=null,a=null)=>{let r=t;for(;r!==i;){const t=r.nextSibling;e.insertBefore(r,a),r=t}},G=(e,t,i=null)=>{let a=t;for(;a!==i;){const t=a.nextSibling;e.removeChild(a),a=t}},W={},Q={},Y=`{{lit-${String(Math.random()).slice(2)}}}`,K=`\x3c!--${Y}--\x3e`,X=new RegExp(`${Y}|${K}`),Z="$lit$";class ee{constructor(e,t){this.parts=[],this.element=t;let i=-1,a=0;const r=[],o=t=>{const n=t.content,s=document.createTreeWalker(n,133,null,!1);let c=0;for(;s.nextNode();){i++;const t=s.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const r=t.attributes;let o=0;for(let e=0;e<r.length;e++)r[e].value.indexOf(Y)>=0&&o++;for(;o-- >0;){const r=e.strings[a],o=ae.exec(r)[2],n=o.toLowerCase()+Z,s=t.getAttribute(n).split(X);this.parts.push({type:"attribute",index:i,name:o,strings:s}),t.removeAttribute(n),a+=s.length-1}}"TEMPLATE"===t.tagName&&o(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(Y)>=0){const o=t.parentNode,n=e.split(X),s=n.length-1;for(let e=0;e<s;e++)o.insertBefore(""===n[e]?ie():document.createTextNode(n[e]),t),this.parts.push({type:"node",index:++i});""===n[s]?(o.insertBefore(ie(),t),r.push(t)):t.data=n[s],a+=s}}else if(8===t.nodeType)if(t.data===Y){const e=t.parentNode;null!==t.previousSibling&&i!==c||(i++,e.insertBefore(ie(),t)),c=i,this.parts.push({type:"node",index:i}),null===t.nextSibling?t.data="":(r.push(t),i--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(Y,e+1));)this.parts.push({type:"node",index:-1})}}};o(t);for(const e of r)e.parentNode.removeChild(e)}}const te=e=>-1!==e.index,ie=()=>document.createComment(""),ae=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class re{constructor(e,t,i){this._parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this._parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=J?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let i=0,a=0;const r=e=>{const o=document.createTreeWalker(e,133,null,!1);let n=o.nextNode();for(;i<t.length&&null!==n;){const e=t[i];if(te(e))if(a===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(n.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(n,e.name,e.strings,this.options));i++}else a++,"TEMPLATE"===n.nodeName&&r(n.content),n=o.nextNode();else this._parts.push(void 0),i++}};return r(e),J&&(document.adoptNode(e),customElements.upgrade(e)),e}}class oe{constructor(e,t,i,a){this.strings=e,this.values=t,this.type=i,this.processor=a}getHTML(){const e=this.strings.length-1;let t="";for(let i=0;i<e;i++){const e=this.strings[i],a=ae.exec(e);t+=a?e.substr(0,a.index)+a[1]+a[2]+Z+a[3]+Y:e+K}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class ne extends oe{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,i=t.firstChild;return t.removeChild(i),F(t,i.firstChild),e}}const se=e=>null===e||!("object"==typeof e||"function"==typeof e);class ce{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new de(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let a=0;a<t;a++){i+=e[a];const t=this.parts[a];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)i+="string"==typeof t?t:String(t);else i+="string"==typeof e?e:String(e)}}return i+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class de{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===W||se(e)&&e===this.value||(this.value=e,H(e)||(this.committer.dirty=!0))}commit(){for(;H(this.value);){const e=this.value;this.value=W,e(this)}this.value!==W&&this.committer.commit()}}class le{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(ie()),this.endNode=e.appendChild(ie())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=ie()),e._insert(this.endNode=ie())}insertAfterPart(e){e._insert(this.startNode=ie()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;H(this._pendingValue);){const e=this._pendingValue;this._pendingValue=W,e(this)}const e=this._pendingValue;e!==W&&(se(e)?e!==this.value&&this._commitText(e):e instanceof oe?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===Q?(this.value=Q,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof re&&this.value.template===t)this.value.update(e.values);else{const i=new re(t,e.processor,this.options),a=i._clone();i.update(e.values),this._commitNode(a),this.value=i}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,a=0;for(const r of e)void 0===(i=t[a])&&(i=new le(this.options),t.push(i),0===a?i.appendIntoPart(this):i.insertAfterPart(t[a-1])),i.setValue(r),i.commit(),a++;a<t.length&&(t.length=a,this.clear(i&&i.endNode))}clear(e=this.startNode){G(this.startNode.parentNode,e.nextSibling,this.endNode)}}class ue{constructor(e,t,i){if(this.value=void 0,this._pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this._pendingValue=e}commit(){for(;H(this._pendingValue);){const e=this._pendingValue;this._pendingValue=W,e(this)}if(this._pendingValue===W)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=W}}class pe extends ce{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new he(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class he extends de{}let me=!1;try{const e={get capture(){return me=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class ge{constructor(e,t,i){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this._boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this._pendingValue=e}commit(){for(;H(this._pendingValue);){const e=this._pendingValue;this._pendingValue=W,e(this)}if(this._pendingValue===W)return;const e=this._pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),a=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),a&&(this._options=fe(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=W}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const fe=e=>e&&(me?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);const ve=new class{handleAttributeExpressions(e,t,i,a){const r=t[0];return"."===r?new pe(e,t.slice(1),i).parts:"@"===r?[new ge(e,t.slice(1),a.eventContext)]:"?"===r?[new ue(e,t.slice(1),i)]:new ce(e,t,i).parts}handleTextExpression(e){return new le(e)}};function be(e){let t=ye.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},ye.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const a=e.strings.join(Y);return void 0===(i=t.keyString.get(a))&&(i=new ee(e,e.getTemplateElement()),t.keyString.set(a,i)),t.stringsArray.set(e.strings,i),i}const ye=new Map,we=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const xe=(e,...t)=>new oe(e,t,"html",ve),je=(e,...t)=>new ne(e,t,"svg",ve),ke=133;function Se(e,t){const{element:{content:i},parts:a}=e,r=document.createTreeWalker(i,ke,null,!1);let o=ze(a),n=a[o],s=-1,c=0;const d=[];let l=null;for(;r.nextNode();){s++;const e=r.currentNode;for(e.previousSibling===l&&(l=null),t.has(e)&&(d.push(e),null===l&&(l=e)),null!==l&&c++;void 0!==n&&n.index===s;)n.index=null!==l?-1:n.index-c,n=a[o=ze(a,o)]}d.forEach(e=>e.parentNode.removeChild(e))}const _e=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,ke,null,!1);for(;i.nextNode();)t++;return t},ze=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(te(t))return i}return-1};const Ee=(e,t)=>`${e}--${t}`;let Ce=!0;void 0===window.ShadyCSS?Ce=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),Ce=!1);const Pe=e=>t=>{const i=Ee(t.type,e);let a=ye.get(i);void 0===a&&(a={stringsArray:new WeakMap,keyString:new Map},ye.set(i,a));let r=a.stringsArray.get(t.strings);if(void 0!==r)return r;const o=t.strings.join(Y);if(void 0===(r=a.keyString.get(o))){const i=t.getTemplateElement();Ce&&window.ShadyCSS.prepareTemplateDom(i,e),r=new ee(t,i),a.keyString.set(o,r)}return a.stringsArray.set(t.strings,r),r},Ae=["html","svg"],Te=new Set,Re=(e,t,i)=>{Te.add(i);const a=e.querySelectorAll("style");if(0===a.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,i);const r=document.createElement("style");for(let e=0;e<a.length;e++){const t=a[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}if((e=>{Ae.forEach(t=>{const i=ye.get(Ee(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),Se(e,i)})})})(i),function(e,t,i=null){const{element:{content:a},parts:r}=e;if(null==i)return void a.appendChild(t);const o=document.createTreeWalker(a,ke,null,!1);let n=ze(r),s=0,c=-1;for(;o.nextNode();)for(c++,o.currentNode===i&&(s=_e(t),i.parentNode.insertBefore(t,i));-1!==n&&r[n].index===c;){if(s>0){for(;-1!==n;)r[n].index+=s,n=ze(r,n);return}n=ze(r,n)}}(t,r,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,i),window.ShadyCSS.nativeShadow){const i=t.element.content.querySelector("style");e.insertBefore(i.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(r,t.element.content.firstChild);const e=new Set;e.add(r),Se(t,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const Me={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},$e=(e,t)=>t!==e&&(t==t||e==e),Ne={attribute:!0,type:String,converter:Me,reflect:!1,hasChanged:$e},qe=Promise.resolve(!0),Oe=1,Ve=4,De=8,Le=16,Ie=32;class Ue extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=qe,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const a=this._attributeNameForProperty(i,t);void 0!==a&&(this._attributeToPropertyMap.set(a,i),e.push(a))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=Ne){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[i]},set(t){const a=this[e];this[i]=t,this._requestUpdate(e,a)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=$e){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,a=t.converter||Me,r="function"==typeof a?a:a.fromAttribute;return r?r(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,a=t.converter;return(a&&a.toAttribute||Me.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Ie,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=Ne){const a=this.constructor,r=a._attributeNameForProperty(e,i);if(void 0!==r){const e=a._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=this._updateState|De,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=this._updateState&~De}}_attributeToProperty(e,t){if(this._updateState&De)return;const i=this.constructor,a=i._attributeToPropertyMap.get(e);if(void 0!==a){const e=i._classProperties.get(a)||Ne;this._updateState=this._updateState|Le,this[a]=i._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~Le}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const a=this.constructor,r=a._classProperties.get(e)||Ne;a._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||this._updateState&Le||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|Ve;const i=this._updatePromise;this._updatePromise=new Promise((i,a)=>{e=i,t=a});try{await i}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Ie}get _hasRequestedUpdate(){return this._updateState&Ve}get hasUpdated(){return this._updateState&Oe}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&Oe||(this._updateState=this._updateState|Oe,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Ve}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Ue.finalized=!0;const Be="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,He=Symbol();class Je{constructor(e,t){if(t!==He)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Be?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Fe=(e,...t)=>{const i=t.reduce((t,i,a)=>t+(e=>{if(e instanceof Je)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[a+1],e[0]);return new Je(i,He)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.0");const Ge=e=>e.flat?e.flat(1/0):function e(t,i=[]){for(let a=0,r=t.length;a<r;a++){const r=t[a];Array.isArray(r)?e(r,i):i.push(r)}return i}(e);class We extends Ue{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){Ge(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Be?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof oe&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}We.finalized=!0,We.render=(e,t,i)=>{const a=i.scopeName,r=we.has(t),o=t instanceof ShadowRoot&&Ce&&e instanceof oe,n=o&&!Te.has(a),s=n?document.createDocumentFragment():t;if(((e,t,i)=>{let a=we.get(t);void 0===a&&(G(t,t.firstChild),we.set(t,a=new le(Object.assign({templateFactory:be},i))),a.appendInto(t)),a.setValue(e),a.commit()})(e,s,Object.assign({templateFactory:Pe(a)},i)),n){const e=we.get(s);we.delete(s),e.value instanceof re&&Re(s,e.value.template,a),G(t,t.firstChild),t.appendChild(s),we.set(t,e)}!r&&o&&window.ShadyCSS.styleElement(t.host)};Fe`
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
`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M 9 16.17 L 4.83 12 l -1.42 1.41 L 9 19 L 21 7 l -1.41 -1.41 Z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H23v16H3V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3-5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53c.09.2.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29-.17-.39-.4-.73-.7-1.01-.3-.28-.66-.5-1.08-.66-.42-.16-.88-.23-1.39-.23-.65 0-1.22.11-1.7.34-.48.23-.88.53-1.2.92s-.56.84-.71 1.36c-.15.52-.24 1.06-.24 1.64v.27c0 .58.08 1.12.23 1.64.15.52.39.97.71 1.35s.72.69 1.2.91c.48.22 1.05.34 1.7.34.47 0 .91-.08 1.32-.23.41-.15.77-.36 1.08-.63.31-.27.56-.58.74-.94.18-.36.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58-.09.18-.21.33-.36.46s-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88c-.05-.33-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 14V6H4v36h40V14H24zM12 38H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm8 24h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm20 24H24v-4h4v-4h-4v-4h4v-4h-4v-4h16v20zm-4-16h-4v4h4v-4zm0 8h-4v4h4v-4z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 17l3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4"/><path d="M15.47 20.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5h2v2h-.9L12 9.9V9h8v8.9l2 2V7H12V3H5.1L8 5.9zm8 6h2v2h-2zM1.3 1.8L.1 3.1 2 5v16h16l3 3 1.3-1.3-21-20.9zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm4 8H8v-2h2v2zm0-4H8v-2h2v2zm2 4v-2h2l2 2h-4z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="15" cy="8" r="4"/><path d="M23 20v-2c0-2.3-4.1-3.7-6.9-3.9l6 5.9h.9zm-11.6-5.5C9.2 15.1 7 16.3 7 18v2h9.9l4 4 1.3-1.3-21-20.9L0 3.1l4 4V10H1v2h3v3h2v-3h2.9l2.5 2.5zM6 10v-.9l.9.9H6z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 5H3c-1.1 0-2 .89-2 2v9h2c0 1.65 1.34 3 3 3s3-1.35 3-3h5.5c0 1.65 1.34 3 3 3s3-1.35 3-3H23v-5l-6-6zM3 11V7h4v4H3zm3 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7-6.5H9V7h4v4zm4.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM15 11V7h1l4 4h-5z"/></svg>`,je`<svg xmlns="http://www.w3.org/2000/svg"  width="24px" height="24px" viewBox="0 0 24 24"><path d="M17,11V3H7v4H3v14h8v-4h2v4h8V11H17z M7,19H5v-2h2V19z M7,15H5v-2h2V15z M7,11H5V9h2V11z M11,15H9v-2h2V15z M11,11H9V9h2   V11z M11,7H9V5h2V7z M15,15h-2v-2h2V15z M15,11h-2V9h2V11z M15,7h-2V5h2V7z M19,19h-2v-2h2V19z M19,15h-2v-2h2V15z"/></svg>`;const Qe=(...e)=>t=>e.reduce((e,t)=>null!=e&&null!=e[t]?e[t]:null,t),Ye=(e,...t)=>i=>(class extends i{constructor(){super(),this.__currentStates=[],this.__deepValues=[]}connectedCallback(){for(let i=0;i<t.length;i++){const a=t[i].split(".");this.__currentStates.push(null);let r=a.length>0?Qe(...a):null;this.__deepValues.push(r),this.__storeUnsubscribe=e.subscribe(()=>this.__stateChanged(i,e.getState())),this.__stateChanged(i,e.getState())}super.connectedCallback&&super.connectedCallback()}getCurrent(){return[...this.__currentStates]}disconnectedCallback(){this.__storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}__stateChanged(e,i){if(this.stateChanged){let a=!0;if(this.__deepValues[e]){let t=this.__currentStates[e];this.__currentStates[e]=this.__deepValues[e](i),a=t!=this.__currentStates[e]}a&&this.stateChanged(i,t[e])}}}),Ke=Ye,Xe={ES:{paginas:{inicio:{bienvenido:"Bienvenido",heceTuPedido:"Hace tu pedido de comida",cargaCredito:"Carga credito en tu tarjeta chip"},mensajeEspera:{mensaje:"Tiempo de espera agotado. Continua?",si:"Si",no:"No"}}}},Ze="ui.timeStampPantalla";window.customElements.define("pantalla-inicio",class extends(Ke(U,Ze)(We)){constructor(){super(),this.hidden=!1,this.idioma="ES"}static get styles(){return Fe`
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
        `}render(){return xe`
        <div id="fondoimagen01">
        </div>
        <div id="fondoimagen02">
        </div>  
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="titulo">
                ${Xe[this.idioma].paginas.inicio.bienvenido}
            </div>
            <div style="background-color:transparent;">
                <input type="button" class="button" opcion="viandatarjetachiplectura" value=${Xe[this.idioma].paginas.inicio.heceTuPedido} @click="${this.proximaPantalla}">
            </div>
            <div style="background-color:transparent;">
                <input type="button" class="button" opcion="tarjetachiplectura" value=${Xe[this.idioma].paginas.inicio.cargaCredito} @click="${this.proximaPantalla}">
            </div>
            <div style="background-color:var(--pantalla-fondo);">
            <input type="button" class="button"  @click="${this.test}">
            </div>        
        </div>
        `}test(){U.dispatch(P("TES"+String.fromCharCode(0)+String.fromCharCode(0),10))}stateChanged(e,t){t==Ze&&"inicio"==e.ui.quePantalla&&U.dispatch(c())}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}proximaPantalla(e){U.dispatch(n(e.currentTarget.getAttribute("opcion")))}});const et={ES:{paginas:{general:{nombreSistema:"Carga credito en tu tarjeta chip",volver:"Volver"},tarjetaChipLectura:{insertarTarjeta:"Inserta tu tarjeta chip en el lector que esta parpadeando y espera que sea leido."},seleccionImporte:{quienEs01:"Bienvenido ",quienEs02:", su saldo es $",titulo:"Seleccione el importe a cargar."},seleccionTarjetaCredito:{quienEs01:", saldo $",quienEs02:", a recargar $",titulo:"Seleccione tarjeta de credito."},cargaPosNet:{quienEs01:", saldo $",quienEs02:", a recargar $",titulo:"Coloque su tarjeta",leyenda:"En el PosNet y siga las instrucciones de la pantalla del PosNet"},recargaExito:{titulo:"Recarga Exitosa",leyenda:"Saldo Actual $",finalizar:"Finalizar"}}}},tt={tarjetachiplectura:{segundos:20},tarjetachipseleccionimporte:{segundos:25},tarjetachipselecciontarjetacredito:{segundos:30},cargatarjetacreditoposnet:{segundos:35},tarjetachiprecargaexito:{segundos:5}},it="ui.timeStampPantalla";window.customElements.define("pantalla-tarjetachiplectura",class extends(Ke(U,it)(We)){constructor(){super(),this.hidden=!0,this.idioma="ES"}static get styles(){return Fe`
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
        `}render(){return xe`
        <div id="fondoimagen01">
        </div>
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="MenuDescripcion">
              ${et[this.idioma].paginas.general.nombreSistema}
            </div>
            <div id="titulo">
                ${et[this.idioma].paginas.tarjetaChipLectura.insertarTarjeta}
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
                <input type="button" class="button" value=${et[this.idioma].paginas.general.volver} @click="${this.volver}">
            </div>
        </div>
        `}stateChanged(e,t){t==it&&"tarjetachiplectura"==e.ui.quePantalla&&U.dispatch(s(tt.tarjetachiplectura.segundos,"mensajeespera","tarjetachiplectura"))}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}volver(){U.dispatch(n("inicio"))}proximaPantalla(){U.dispatch(w(120)),U.dispatch(y({id:1,nombre:"Sergio Ferro"})),U.dispatch(n("tarjetachipseleccionimporte"))}});const at={precarga:{menor:{descripcion:"$200",importe:200},medio:{descripcion:"$500",importe:500},mayor:{descripcion:"$1.000",importe:1e3}}},rt="ui.timeStampPantalla";window.customElements.define("pantalla-tarjetachipseleccionimporte",class extends(Ke(U,rt)(We)){constructor(){super(),this.hidden=!0,this.idioma="ES"}static get styles(){return Fe`
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
        `}render(){return xe`
        <div id="fondoimagen01">
        </div>
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="MenuDescripcion">
                ${et[this.idioma].paginas.general.nombreSistema}
            </div>
            <div id="quienEs">
                ${et[this.idioma].paginas.seleccionImporte.quienEs01}
                ${U.getState().tarjetachipRecarga.usuario?U.getState().tarjetachipRecarga.usuario.nombre:""}
                ${et[this.idioma].paginas.seleccionImporte.quienEs02}
                ${U.getState().tarjetachipRecarga.saldo}
            </div>
            <div id="titulo">
                ${et[this.idioma].paginas.seleccionImporte.titulo}
            </div>
            <div>
                <input type="button" id="impMenor" class="buttonImporte" importe=${at.precarga.menor.importe} value=${at.precarga.menor.descripcion} @click="${this.proximaPantalla}">
            </div>
            <div>
                <input type="button" id="impMedio" class="buttonImporte" importe=${at.precarga.medio.importe} value=${at.precarga.medio.descripcion} @click="${this.proximaPantalla}">
            </div>
            <div>
                <input type="button" id="impMayor" class="buttonImporte" importe=${at.precarga.mayor.importe} value=${at.precarga.mayor.descripcion} @click="${this.proximaPantalla}">
            </div>
            <div id="pie">
                <input type="button" class="buttonAtras" value=${et.ES.paginas.general.volver} @click="${this.volver}">
            </div>
        </div>
        `}stateChanged(e,t){t==rt&&"tarjetachipseleccionimporte"==e.ui.quePantalla&&U.dispatch(s(tt.tarjetachipseleccionimporte.segundos,"mensajeespera","tarjetachipseleccionimporte"))}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}volver(){U.dispatch(n("tarjetachiplectura"))}proximaPantalla(e){U.dispatch(x(parseInt(e.currentTarget.getAttribute("importe"),10))),U.dispatch(n("tarjetachipselecciontarjetacredito"))}});const ot="ui.timeStampPantalla";window.customElements.define("pantalla-tarjetachipselecciontarjetacredito",class extends(Ke(U,ot)(We)){constructor(){super(),this.hidden=!0,this.idioma="ES"}static get styles(){return Fe`
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
            background-color:transparent;
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
        #tvisa{
            background-image:var(--tarjeta-visa-credito);
        }
        #tmaster{
            background-image:var(--tarjeta-master-credito);
        }
        #tamex{
            background-image:var(--tarjeta-amex-credito);
        }
        .t-credito{
            display: grid;
            height: 50%;
            width: 50%;            
            background-repeat: no-repeat;
            background-position: center;
            background-size: 12rem 7.5rem;
            box-shadow:var(--shadow-elevation-8-box);
            background-color:#2478bc;
            border-radius: 8%;
       }
        #pie{
            display: grid;
            justify-items: center;
            grid-column-start: 1;
            grid-column-end: 4;  
            background-color:transparent;
        }
        .contenedor{
            display: grid;
            justify-items: center;
            align-items: center;  
            height: 100%;
            width: 100%;            
        }
        @keyframes imacolor {
            from{opacity: 0;} to {opacity: 0.8;}
        }
        `}render(){return xe`
        <div id="fondoimagen01">
        </div>
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="MenuDescripcion">
                ${et[this.idioma].paginas.general.nombreSistema}
            </div>
            <div id="quienEs">
                ${U.getState().tarjetachipRecarga.usuario?U.getState().tarjetachipRecarga.usuario.nombre:""}
                ${et[this.idioma].paginas.seleccionTarjetaCredito.quienEs01}
                ${U.getState().tarjetachipRecarga.saldo}
                ${et[this.idioma].paginas.seleccionTarjetaCredito.quienEs02}
                ${U.getState().tarjetachipRecarga.recarga}
            </div>
            <div id="titulo">
                ${et[this.idioma].paginas.seleccionTarjetaCredito.titulo}
            </div>
            <div class="contenedor">
                <div id="tvisa" .tarjeta="${"visaCredito"}" class="t-credito" @click="${this.proximaPantalla}">
                </div>
            </div>
            <div class="contenedor">
                <div id="tmaster" .tarjeta="${"masterCredito"}" class="t-credito" @click="${this.proximaPantalla}">
                </div>
            </div>
            <div class="contenedor">
                <div id="tamex" .tarjeta="${"amexCredito"}" class="t-credito" @click="${this.proximaPantalla}">
                </div>
            </div>
            <div id="pie">
                <input type="button" class="buttonAtras" value=${et[this.idioma].paginas.general.volver} @click="${this.volver}">
            </div>
        </div>
        `}stateChanged(e,t){t==ot&&"tarjetachipselecciontarjetacredito"==e.ui.quePantalla&&(U.dispatch(s(tt.tarjetachipselecciontarjetacredito.segundos,"mensajeespera","tarjetachipselecciontarjetacredito")),this.update())}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}volver(){U.dispatch(n("tarjetachipseleccionimporte"))}proximaPantalla(e){U.dispatch(j(e.currentTarget.tarjeta)),U.dispatch(n("cargatarjetacreditoposnet"))}});const nt="ui.timeStampPantalla";window.customElements.define("pantalla-cargatarjetacreditoposnet",class extends(Ke(U,nt)(We)){constructor(){super(),this.hidden=!0,this.tarjeta="",this.idioma="ES"}static get styles(){return Fe`
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
        `}render(){return xe`
        <div id="fondoimagen01">
        </div>
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="MenuDescripcion">
                ${et[this.idioma].paginas.general.nombreSistema}
            </div>
            <div id="quienEs">    
                ${U.getState().tarjetachipRecarga.usuario?U.getState().tarjetachipRecarga.usuario.nombre:""}
                ${et[this.idioma].paginas.cargaPosNet.quienEs01}
                ${U.getState().tarjetachipRecarga.saldo}
                ${et[this.idioma].paginas.cargaPosNet.quienEs02}
                ${U.getState().tarjetachipRecarga.recarga}    
            </div>
            <div id="titulo">
                ${et[this.idioma].paginas.cargaPosNet.titulo}
            </div>
            <div class="contenedor">
                <div id="tarjeta" imagen="${this.tarjeta}" @click="${this.proximaPantalla}">
                </div>
            </div>
            <div id="descripcion">
                ${et[this.idioma].paginas.cargaPosNet.leyenda}
            </div>
            <div id="pie">
                <input type="button" class="buttonAtras" value=${et[this.idioma].paginas.general.volver} @click="${this.volver}">
            </div>
        </div>
        `}stateChanged(e,t){t==nt&&"cargatarjetacreditoposnet"==e.ui.quePantalla&&(U.dispatch(s(tt.cargatarjetacreditoposnet.segundos,"mensajeespera","cargatarjetacreditoposnet")),this.tarjeta=e.tarjetachipRecarga.tarjeta,this.update())}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}volver(){U.dispatch(n("tarjetachipselecciontarjetacredito"))}proximaPantalla(){U.dispatch(n("tarjetachiprecargaexito"))}});const st="ui.timeStampPantalla";window.customElements.define("pantalla-tarjetachiprecargaexito",class extends(Ke(U,st)(We)){constructor(){super(),this.hidden=!0,this.idioma="ES"}static get styles(){return Fe`
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
        `}render(){return xe`
        <div id="fondoimagen01">
        </div>
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="MenuDescripcion">
                ${et[this.idioma].paginas.general.nombreSistema}
            </div>
            <div id="quienEs">   
                ${U.getState().tarjetachipRecarga.usuario?U.getState().tarjetachipRecarga.usuario.nombre:""}
            </div>
            <div id="ok">    
            </div>
            <div id="titulo">
                ${et[this.idioma].paginas.recargaExito.titulo}
            </div>
            <div id="descripcion">
                ${et[this.idioma].paginas.recargaExito.leyenda}
                ${U.getState().tarjetachipRecarga.saldo+U.getState().tarjetachipRecarga.recarga}
            </div>
            <div id="pie">
                <input type="button" class="buttonAtras" value=${et[this.idioma].paginas.recargaExito.finalizar} @click="${this.volver}">
            </div>
        </div>
        `}stateChanged(e,t){t==st&&"tarjetachiprecargaexito"==e.ui.quePantalla&&(U.dispatch(s(tt.tarjetachiprecargaexito.segundos,"inicio","tarjetachiprecargaexito")),this.update())}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}volver(){U.dispatch(n("inicio"))}proximaPantalla(){U.dispatch(n("cargatarjetacreditoposnet"))}});const ct={ES:{paginas:{general:{nombreSistema:"Hace tu pedido de comidaxcvxcv.",volver:"Volver"},tarjetaChipLectura:{insertarTarjeta:"Inserta tu tarjeta chip en el lector que esta parpadeando y espera que sea leido."},seleccionTipoMenu:{quienEs01:"Bienvenido ",quienEs02:", su saldo es $",titulo:"Elegí tu menu.",dia:"Para el dia:"},seleccionMenu:{quienEs:", su saldo es $"},menuAceptacioin:{dia:"Para el dia:",confirmarCobrar:"Confirmar y Cobrar"},menuExito:{titulo:"Pedido Realizado",ticket:"Retira tu Ticket",finalizar:"Finalizar"}}}},dt={viandatarjetachiplectura:{segundos:3},viandaselecciontipomenu:{segundos:25},viandaseleccionmenu:{segundos:30},viandamenuaceptacion:{segundos:35},viandamenuexito:{segundos:5}},lt="ui.timeStampPantalla";window.customElements.define("pantalla-viandatarjetachiplectura",class extends(Ke(U,lt)(We)){constructor(){super(),this.hidden=!0,this.idioma="ES"}static get styles(){return Fe`
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
        `}render(){return xe`
        <div id="fondoimagen01">
        </div>
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="MenuDescripcion">
            ${ct[this.idioma].paginas.general.nombreSistema}
            </div>
            <div id="titulo">
                ${ct[this.idioma].paginas.tarjetaChipLectura.insertarTarjeta}
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
                <input type="button" class="button" value=${ct[this.idioma].paginas.general.volver} @click="${this.volver}">
            </div>
        </div>
        `}stateChanged(e,t){t==lt&&"viandatarjetachiplectura"==e.ui.quePantalla&&U.dispatch(s(dt.viandatarjetachiplectura.segundos,"mensajeespera","viandatarjetachiplectura"))}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}volver(){U.dispatch(n("inicio"))}proximaPantalla(){U.dispatch(w(1200)),U.dispatch(y({id:1,nombre:"Sergio Ferro"})),U.dispatch(n("viandaselecciontipomenu"))}});const ut=[{id:1,nombre:"Tartas"},{id:2,nombre:"Empanadas"},{id:3,nombre:"Sandwich"},{id:4,nombre:"Postres"}],pt=[{id:1,idTipo:1,titulo:"Jamon cocido y queso",descripcion:"Una porcion de tarta 200 gramos. Rellema con Jamon cocido natural y queso fresco Sancor.",precio:208,url:"http://www.zul.com.ar/bugs/image/tarta-jq.png"},{id:2,idTipo:1,titulo:"Caprese",descripcion:"Una porcion de tarta 200 gramos. Rellema con Jamon cocido natural y queso fresco Sancor.",precio:220,url:"http://www.zul.com.ar/bugs/image/tarta-caprese.png"},{id:3,idTipo:1,titulo:"Humita",descripcion:"Una porcion de tarta 200 gramos. Rellema con Jamon cocido natural y queso fresco Sancor.",precio:245,url:"http://www.zul.com.ar/bugs/image/tarta-humita.png"},{id:4,idTipo:2,titulo:"Jamon y queso",descripcion:"Una porcion de tarta 200 gramos. Rellema con Jamon cocido natural y queso fresco Sancor.",precio:60,url:"http://www.zul.com.ar/bugs/image/empanada-jq.png"},{id:5,idTipo:2,titulo:"Humita",descripcion:"Una porcion de tarta 200 gramos. Rellema con Jamon cocido natural y queso fresco Sancor.",precio:65,url:"http://www.zul.com.ar/bugs/image/empanada-humita.png"},{id:7,idTipo:3,titulo:"Completo de jamon y queso",descripcion:"Una porcion de tarta 200 gramos. Rellema con Jamon cocido natural y queso fresco Sancor.",precio:130,url:"http://www.zul.com.ar/bugs/image/sandwich-jq.png"},{id:8,idTipo:3,titulo:"Pollo con verduras",descripcion:"Una porcion de tarta 200 gramos. Rellema con Jamon cocido natural y queso fresco Sancor.",precio:145,url:"http://www.zul.com.ar/bugs/image/sandwich-pollo.png"},{id:9,idTipo:3,titulo:"Atun con verduras",descripcion:"Una porcion de tarta 200 gramos. Rellema con Jamon cocido natural y queso fresco Sancor.",precio:150,url:"http://www.zul.com.ar/bugs/image/sandwich-atun.png"},{id:10,idTipo:4,titulo:"Tarta helada",descripcion:"Una porcion de tarta 200 gramos. Rellema con Jamon cocido natural y queso fresco Sancor.",precio:130,url:"http://www.zul.com.ar/bugs/image/postre-tartahelada.png"}],ht="ui.timeStampPantalla";window.customElements.define("pantalla-viandaselecciontipomenu",class extends(Ke(U,ht)(We)){constructor(){super(),this.hidden=!0,this.idioma="ES";var e=new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"),t=new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"),i=new Date;i.setDate(i.getDate()+1),this.paraDia=t[i.getDay()]+", "+i.getDate()+" de "+e[i.getMonth()]+" de "+i.getFullYear()}static get styles(){return Fe`
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
        `}render(){return xe`
        <div id="fondoimagen01">
        </div>
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="MenuDescripcion">
              ${ct[this.idioma].paginas.general.nombreSistema} 
            </div>
            <div id="quienEs">
                ${ct[this.idioma].paginas.seleccionTipoMenu.quienEs01}
                ${U.getState().tarjetachipRecarga.usuario?U.getState().tarjetachipRecarga.usuario.nombre:""}
                ${ct[this.idioma].paginas.seleccionTipoMenu.quienEs02}
                ${U.getState().tarjetachipRecarga.saldo}
            </div>
            <div id="titulo">
                ${ct[this.idioma].paginas.seleccionTipoMenu.titulo} 
            </div>
            <div id="fecha">
                ${ct[this.idioma].paginas.seleccionTipoMenu.dia} 
                ${this.paraDia}
            </div>
            <div id="botonera">
                <input type="button" class="buttonImporte" .item="${ut[0]}" value="${ut[0].nombre}" @click="${this.proximaPantalla}">
                <input type="button" class="buttonImporte" .item="${ut[1]}" value="${ut[1].nombre}" @click="${this.proximaPantalla}">
                <input type="button" class="buttonImporte" .item="${ut[2]}" value="${ut[2].nombre}" @click="${this.proximaPantalla}">
                <input type="button" class="buttonImporte" .item="${ut[3]}" value="${ut[3].nombre}" @click="${this.proximaPantalla}">
            </div>
            <div id="pie">
                <input type="button" class="buttonAtras" value=${ct[this.idioma].paginas.general.volver} @click="${this.volver}">
            </div>
        </div>
        `}stateChanged(e,t){t==ht&&"viandaselecciontipomenu"==e.ui.quePantalla&&(U.dispatch(s(dt.viandaselecciontipomenu.segundos,"mensajeespera","viandaselecciontipomenu")),this.update())}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}volver(){U.dispatch(n("viandatarjetachiplectura"))}proximaPantalla(e){U.dispatch(S(e.currentTarget.item)),U.dispatch(n("viandaseleccionmenu"))}});window.customElements.define("tarjeta-vianda-nmenu",class extends We{constructor(){super(),this.item={}}static get styles(){return Fe`
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
        `}render(){return xe`
        <div id="etiquetaImagen" style="background-image:url('${this.item?this.item.url:""}')"></div>
        <div id="etiquetaTitulo">${this.item?this.item.titulo:""}</div>
        <div id="etiquetaPrecio">$${this.item?this.item.precio:""}.-</div>
        <div id="etiquetaDescripcion">${this.item?this.item.descripcion:""}</div>
        `}stateChanged(e,t){}static get properties(){return{item:{type:Object}}}});const mt="ui.timeStampPantalla";window.customElements.define("pantalla-viandaseleccionmenu",class extends(Ke(U,mt)(We)){constructor(){super(),this.hidden=!0,this.items=[],this.nombreMenu="",this.idioma="ES"}static get styles(){return Fe`
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
        `}render(){return xe`
        <div id="fondoimagen01">
        </div>
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="MenuDescripcion">
                ${ct[this.idioma].paginas.general.nombreSistema}
            </div>
            <div id="quienEs">      
                ${U.getState().tarjetachipRecarga.usuario?U.getState().tarjetachipRecarga.usuario.nombre:""}   
                ${ct[this.idioma].paginas.seleccionMenu.quienEs}
                ${U.getState().tarjetachipRecarga.saldo}
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
                <input type="button" class="buttonAtras" value=${ct[this.idioma].paginas.general.volver} @click="${this.volver}">
            </div>
        </div>
        `}stateChanged(e,t){t==mt&&"viandaseleccionmenu"==e.ui.quePantalla&&(U.dispatch(s(dt.viandaseleccionmenu.segundos,"mensajeespera","viandaseleccionmenu")),this.items=pt.filter(t=>t.idTipo==e.vianda.tipoMenu.id),this.nombreMenu=e.vianda.tipoMenu.nombre,this.update())}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}volver(){U.dispatch(n("viandaselecciontipomenu"))}proximaPantalla(e){U.dispatch(_(e.currentTarget.item)),U.dispatch(n("viandamenuaceptacion"))}});const gt="ui.timeStampPantalla";window.customElements.define("pantalla-viandamenuaceptacion",class extends(Ke(U,gt)(We)){constructor(){super(),this.hidden=!0,this.itemMenuTipo={},this.item={},this.idioma="ES";var e=new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"),t=new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"),i=new Date;i.setDate(i.getDate()+1),this.paraDia=t[i.getDay()]+", "+i.getDate()+" de "+e[i.getMonth()]+" de "+i.getFullYear()}static get styles(){return Fe`
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
        `}render(){return xe`
        <div id="fondoimagen01">
        </div>
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="MenuDescripcion">
                ${ct[this.idioma].paginas.general.nombreSistema}
            </div>
            <div id="fecha">
                ${ct[this.idioma].paginas.menuAceptacioin.dia}
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
                <input type="button" class="buttonAtras" value= ${ct[this.idioma].paginas.general.volver} @click="${this.volver}">
            </div>
            <div id="botonConfirmar">
                <input type="button" class="buttonAtras" value=${ct[this.idioma].paginas.menuAceptacioin.confirmarCobrar} @click="${this.proximaPantalla}">
            </div>

        </div>
        `}stateChanged(e,t){t==gt&&"viandamenuaceptacion"==e.ui.quePantalla&&(U.dispatch(s(dt.viandamenuaceptacion.segundos,"mensajeespera","viandamenuaceptacion")),this.itemMenuTipo=e.vianda.tipoMenu,this.item=e.vianda.menu,this.update())}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}volver(){U.dispatch(n("viandaseleccionmenu"))}proximaPantalla(e){U.dispatch(n("viandamenuexito"))}});const ft="ui.timeStampPantalla";window.customElements.define("pantalla-viandamenuexito",class extends(Ke(U,ft)(We)){constructor(){super(),this.hidden=!0,this.idioma="ES"}static get styles(){return Fe`
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
        `}render(){return xe`
        <div id="fondoimagen01">
        </div>
        <div id="fondocolor">
        </div>
        <div id="fondocuerpo">
            <div id="MenuDescripcion">
            ${ct[this.idioma].paginas.general.nombreSistema}
            </div>
            <div id="quienEs">    
               ${U.getState().tarjetachipRecarga.usuario?U.getState().tarjetachipRecarga.usuario.nombre:""}
            </div>
            <div id="ok">    
            </div>
            <div id="titulo">
                ${ct[this.idioma].paginas.menuExito.titulo}
            </div>
            <div id="descripcion">
                ${ct[this.idioma].paginas.menuExito.ticket}
            </div>
            <div id="pie">
                <input type="button" class="buttonAtras" value=${ct[this.idioma].paginas.menuExito.finalizar} @click="${this.volver}">
            </div>
        </div>
        `}stateChanged(e,t){t==ft&&"viandamenuexito"==e.ui.quePantalla&&(U.dispatch(s(dt.viandamenuexito.segundos,"inicio","viandamenuexito")),this.update())}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}volver(){U.dispatch(n("inicio"))}});const vt="ui.timeStampPantalla",bt="ui.tiempo";window.customElements.define("cuenta-regresiva",class extends(Ke(U,vt,bt)(We)){constructor(){super(),this.tiempo=0,this.hidden=!0}static get styles(){return Fe`
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
        `}render(){return xe`
            ${this.tiempo}
        `}stateChanged(e,t){t==bt&&(this.tiempo=e.ui.tiempo,this.update()),t==vt&&(this.hidden="inicio"==e.ui.quePantalla,this.update())}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}});const yt={mensajeespera:{segundos:10}},wt="ui.timeStampPantalla";window.customElements.define("mensaje-espera",class extends(Ke(U,wt)(We)){constructor(){super(),this.hidden=!0,this.pantallaQueLLamo=""}static get styles(){return Fe`
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
        `}render(){return xe`
        <div id="opacidad">
        </div>
        <div id="ventana">
            <div id="titulo">
                ${Xe.ES.paginas.mensajeEspera.mensaje}
            </div>
    <div id="botones">
        <input type="button" class="button" value=${Xe.ES.paginas.mensajeEspera.no} @click="${this.volver}">
                <input type="button" class="button" value=${Xe.ES.paginas.mensajeEspera.si} @click="${this.apagar}">
            </div>
        </div >
    `}volver(){U.dispatch(n("inicio"))}apagar(){U.dispatch(n(this.pantallaQueLLamo)),this.hidden=!0}stateChanged(e,t){t==wt&&"mensajeespera"==e.ui.quePantalla&&(U.dispatch(s(yt.mensajeespera.segundos,"inicio")),this.pantallaQueLLamo=e.ui.pantallaQueLLamo)}static get properties(){return{hidden:{type:Boolean,reflect:!0}}}});const xt="ui.timeStampPantalla";window.customElements.define("view-manager",class extends(Ye(U,xt)(We)){constructor(){super(),this.current="Titulo"}static get styles(){return Fe`
            :host {
                height: 100%;
                width: 100%;
            }
            #inicio{
                align-self:top;
                height: 100%;
                width: 100%;
            }            
            #status{
                align-self:end;
            }
        `}render(){return xe`
        <cuenta-regresiva></cuenta-regresiva>
        <mensaje-espera id="mensajeespera"></mensaje-espera>

        <pantalla-inicio id="inicio"></pantalla-inicio>
        <pantalla-tarjetachiplectura id="tarjetachiplectura"></pantalla-tarjetachiplectura>
        <pantalla-tarjetachipseleccionimporte id="tarjetachipseleccionimporte"></pantalla-tarjetachipseleccionimporte>
        <pantalla-tarjetachipselecciontarjetacredito id="tarjetachipselecciontarjetacredito"></pantalla-tarjetachipselecciontarjetacredito>
        <pantalla-cargatarjetacreditoposnet id="cargatarjetacreditoposnet"></pantalla-cargatarjetacreditoposnet>
        <pantalla-tarjetachiprecargaexito id="tarjetachiprecargaexito"></pantalla-tarjetachiprecargaexito>

        <pantalla-viandatarjetachiplectura id="viandatarjetachiplectura"></pantalla-viandatarjetachiplectura>
        <pantalla-viandaselecciontipomenu id="viandaselecciontipomenu"></pantalla-viandaselecciontipomenu>
        <pantalla-viandaseleccionmenu id="viandaseleccionmenu"></pantalla-viandaseleccionmenu>
        <pantalla-viandamenuaceptacion id="viandamenuaceptacion"></pantalla-viandamenuaceptacion>
        <pantalla-viandamenuexito id="viandamenuexito"></pantalla-viandamenuexito>
    
        `}conectar(){U.dispatch(o())}currentTitulo(){return this.current}stateChanged(e,t){t==xt&&("mensajeespera"!=e.ui.quePantalla&&(this.shadowRoot.querySelector("#inicio").hidden="inicio"!=e.ui.quePantalla,this.shadowRoot.querySelector("#tarjetachiplectura").hidden="tarjetachiplectura"!=e.ui.quePantalla,this.shadowRoot.querySelector("#tarjetachipseleccionimporte").hidden="tarjetachipseleccionimporte"!=e.ui.quePantalla,this.shadowRoot.querySelector("#tarjetachipselecciontarjetacredito").hidden="tarjetachipselecciontarjetacredito"!=e.ui.quePantalla,this.shadowRoot.querySelector("#cargatarjetacreditoposnet").hidden="cargatarjetacreditoposnet"!=e.ui.quePantalla,this.shadowRoot.querySelector("#tarjetachiprecargaexito").hidden="tarjetachiprecargaexito"!=e.ui.quePantalla,this.shadowRoot.querySelector("#viandatarjetachiplectura").hidden="viandatarjetachiplectura"!=e.ui.quePantalla,this.shadowRoot.querySelector("#viandaselecciontipomenu").hidden="viandaselecciontipomenu"!=e.ui.quePantalla,this.shadowRoot.querySelector("#viandaseleccionmenu").hidden="viandaseleccionmenu"!=e.ui.quePantalla,this.shadowRoot.querySelector("#viandamenuaceptacion").hidden="viandamenuaceptacion"!=e.ui.quePantalla,this.shadowRoot.querySelector("#viandamenuexito").hidden="viandamenuexito"!=e.ui.quePantalla),this.shadowRoot.querySelector("#mensajeespera").hidden="mensajeespera"!=e.ui.quePantalla,this.update())}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},orientation:{type:String,reflect:!0},logged:{type:String,reflect:!0}}}}),i.d(t,"connection",function(){return jt});const jt=new WebSocket("ws://10.1.6.47:9000/");jt.onopen=()=>{jt.send("webSocket Activo")},jt.onerror=e=>{console.log(`WebSocket error: ${e}`)},jt.onmessage=e=>{U.dispatch((e=>({type:"[servidorWS] RECIBIR_MENSAJE",mensaje:e}))(e))}}]);