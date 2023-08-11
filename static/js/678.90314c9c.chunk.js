/*! For license information please see 678.90314c9c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[678],{3252:function(t,r){var e={position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"};r.Z=e},2678:function(t,r,e){e.r(r),e.d(r,{default:function(){return R}});var n,o,i,a,c,u,s,f,h,l=e(1413),p=e(4925),v=e(5861),d=e(9439),y=e(2791),g=e(7689),m=e(9085),w=e(3252),x=e(4783),b=e(4227),L=e(168),E=e(5867),j=E.ZP.div(n||(n=(0,L.Z)(["\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 10px;\n"]))),_=E.ZP.img(o||(o=(0,L.Z)(["\n  display: block;\n  min-height: 100%;\n  height: 240px;\n  width: 100%;\n\n  border-radius: 12px;\n  transition: transform 250ms linear;\n  transform: scale(1);\n\n  object-fit: cover;\n  object-position: center;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),Z=E.ZP.div(i||(i=(0,L.Z)(["\n  flex-direction: column;\n  align-items: center;\n  flex: 1 0 auto;\n  padding: 4px;\n"]))),k=E.ZP.h3(a||(a=(0,L.Z)(["\n  margin-bottom: 8px;\n  text-align: center;\n  color: ",";\n  font-size: 20px;\n  font-weight: 500;\n"])),(function(t){return t.theme.colors.accent})),O=E.ZP.p(c||(c=(0,L.Z)(["\n  margin-bottom: 6px;\n  text-align: center;\n  color: ",";\n  font-size: 16px;\n  font-weight: 500;\n"])),(function(t){return t.theme.colors.white})),P=E.ZP.span(u||(u=(0,L.Z)(["\n  color: ",";\n"])),(function(t){return t.theme.colors.text})),S=e(184),G=function(t){var r=t.profile_path,e=t.name,n=t.character;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(j,{children:(0,S.jsx)(_,{src:r?"https://image.tmdb.org/t/p/original".concat(r):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;",alt:e,width:"120"})}),(0,S.jsxs)(Z,{children:[(0,S.jsx)(k,{children:e}),n&&(0,S.jsxs)(O,{children:["Character: ",(0,S.jsx)(P,{children:n})]})]})]})},N=E.ZP.ul(s||(s=(0,L.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 16px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n"]))),F=E.ZP.li(f||(f=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  max-width: 100%;\n  width: 180px;\n  height: 100%;\n\n  border: none;\n  outline: none;\n\n  font-size: 12px;\n  font-weight: 700;\n  overflow: hidden;\n"]))),T=E.ZP.p(h||(h=(0,L.Z)(["\n  text-align: center;\n  margin-top: 20px;\n  color: ",";\n"])),(function(t){return t.theme.colors.text})),U=["id"];function I(){I=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(O){u=function(t,r,e){return t[r]=e}}function s(t,r,e,o){var i=r&&r.prototype instanceof l?r:l,a=Object.create(i.prototype),c=new _(o||[]);return n(a,"_invoke",{value:b(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}t.wrap=s;var h={};function l(){}function p(){}function v(){}var d={};u(d,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(Z([])));g&&g!==r&&e.call(g,i)&&(d=g);var m=v.prototype=l.prototype=Object.create(d);function w(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function x(t,r){function o(n,i,a,c){var u=f(t[n],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function b(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=f(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function L(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function Z(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=v,n(m,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new x(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(m),u(m,c,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=Z,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:Z(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}var R=function(){var t=(0,g.UO)().movieId,r=(0,y.useState)([]),e=(0,d.Z)(r,2),n=e[0],o=e[1],i=(0,y.useState)(null),a=(0,d.Z)(i,2),c=a[0],u=a[1],s=(0,y.useState)(!1),f=(0,d.Z)(s,2),h=f[0],L=f[1];return(0,y.useEffect)((function(){var r=function(){var t=(0,v.Z)(I().mark((function t(r){var e,n;return I().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,L(!0),t.next=4,(0,x.xc)(r);case 4:e=t.sent,n=e.cast,o(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),u(t.t0);case 12:return t.prev=12,L(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(r){return t.apply(this,arguments)}}();r(t)}),[t]),(0,S.jsxs)(S.Fragment,{children:[h&&(0,S.jsx)(b.Z,{}),c&&m.Am.error("Ooops... Something went wrong. Please try again later!",w.Z),n.length?(0,S.jsx)(N,{children:n.map((function(t){var r=t.id,e=(0,p.Z)(t,U);return(0,S.jsx)(F,{children:(0,S.jsx)(G,(0,l.Z)({},e))},r)}))}):(0,S.jsx)(T,{children:"We don't have any information about cast for this movie"})]})}},4783:function(t,r,e){e.d(r,{Y5:function(){return s},bI:function(){return u},mJ:function(){return l},sv:function(){return h},wr:function(){return c},xc:function(){return f}});var n=e(5861),o=e(1243);function i(){i=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(P){s=function(t,r,e){return t[r]=e}}function f(t,r,e,o){var i=r&&r.prototype instanceof p?r:p,a=Object.create(i.prototype),c=new Z(o||[]);return n(a,"_invoke",{value:L(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=f;var l={};function p(){}function v(){}function d(){}var y={};s(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(k([])));m&&m!==r&&e.call(m,a)&&(y=m);var w=d.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function o(n,i,a,c){var u=h(t[n],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function L(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=E(a,e);if(c){if(c===l)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=h(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function E(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,E(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),l;var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,l;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,l):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,l)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function Z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return v.prototype=d,n(w,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:v,configurable:!0}),v.displayName=s(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new b(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,u,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,Z.prototype={constructor:Z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),l},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),l}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:k(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),l}},t}var a="a0a6c6bb266cce33636e335501d23546";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var t=(0,n.Z)(i().mark((function t(){var r,e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URLSearchParams({api_key:a,page:1}),t.next=3,o.Z.get("/trending/movie/week",{params:r});case 3:return e=t.sent,n=e.data,t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams({api_key:a,page:1,query:r}),t.next=3,o.Z.get("/search/movie",{params:e});case 3:return n=t.sent,c=n.data,t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams({api_key:a}),t.next=3,o.Z.get("/movie/".concat(r),{params:e});case 3:return n=t.sent,c=n.data,t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams({api_key:a}),t.next=3,o.Z.get("/movie/".concat(r,"/credits"),{params:e});case 3:return n=t.sent,c=n.data,t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams({api_key:a}),t.next=3,o.Z.get("/movie/".concat(r,"/reviews"),{params:e});case 3:return n=t.sent,c=n.data,t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams({api_key:a,id:r}),t.next=3,o.Z.get("/genre/movie/list",{params:e});case 3:return n=t.sent,c=n.data,t.abrupt("return",c.genres);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=678.90314c9c.chunk.js.map