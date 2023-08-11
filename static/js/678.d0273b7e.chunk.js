/*! For license information please see 678.d0273b7e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[678],{2678:function(t,e,n){n.r(e),n.d(e,{default:function(){return z}});var r,o,i,a,c,u,l,s,h,f=n(1413),p=n(4925),d=n(5861),v=n(9439),g=n(2791),m=n(7689),y=n(9085),x=n(3252),w=n(4956),b=n(4227),j=n(168),L=n(5867),Z=L.ZP.div(r||(r=(0,j.Z)(["\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 10px;\n"]))),E=L.ZP.img(o||(o=(0,j.Z)(["\n  display: block;\n  min-height: 100%;\n  height: 240px;\n  width: 100%;\n\n  border-radius: 12px;\n  transition: transform 250ms linear;\n  transform: scale(1);\n\n  object-fit: cover;\n  object-position: center;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),_=L.ZP.div(i||(i=(0,j.Z)(["\n  flex-direction: column;\n  align-items: center;\n  flex: 1 0 auto;\n  padding: 4px;\n"]))),k=L.ZP.h3(a||(a=(0,j.Z)(["\n  margin-bottom: 8px;\n  text-align: center;\n  color: ",";\n  font-size: 20px;\n  font-weight: 500;\n"])),(function(t){return t.theme.colors.accent})),P=L.ZP.p(c||(c=(0,j.Z)(["\n  margin-bottom: 6px;\n  text-align: center;\n  color: ",";\n  font-size: 16px;\n  font-weight: 500;\n"])),(function(t){return t.theme.colors.white})),O=L.ZP.span(u||(u=(0,j.Z)(["\n  color: ",";\n"])),(function(t){return t.theme.colors.text})),S=n(184),G=function(t){var e=t.profile_path,n=t.name,r=t.character;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Z,{children:(0,S.jsx)(E,{src:e?"https://image.tmdb.org/t/p/original".concat(e):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;",alt:n,width:"120"})}),(0,S.jsxs)(_,{children:[(0,S.jsx)(k,{children:n}),r&&(0,S.jsxs)(P,{children:["Character: ",(0,S.jsx)(O,{children:r})]})]})]})},N=L.ZP.ul(l||(l=(0,j.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 16px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n"]))),F=L.ZP.li(s||(s=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  max-width: 100%;\n  width: 180px;\n  height: 100%;\n\n  border: none;\n  outline: none;\n\n  font-size: 12px;\n  font-weight: 700;\n  overflow: hidden;\n"]))),T=L.ZP.p(h||(h=(0,j.Z)(["\n  text-align: center;\n  margin-top: 20px;\n  color: ",";\n"])),(function(t){return t.theme.colors.text})),A=["id"];function I(){I=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,n){return t[e]=n}}function l(t,e,n,o){var i=e&&e.prototype instanceof f?e:f,a=Object.create(i.prototype),c=new E(o||[]);return r(a,"_invoke",{value:b(t,n,c)}),a}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}t.wrap=l;var h={};function f(){}function p(){}function d(){}var v={};u(v,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(_([])));m&&m!==e&&n.call(m,i)&&(v=m);var y=d.prototype=f.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(r,i,a,c){var u=s(t[r],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function b(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function j(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=s(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function Z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function _(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=d,r(y,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},x(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new w(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(y),u(y,c,"Generator"),u(y,i,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=_,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Z),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),Z(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;Z(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}var z=function(){var t=(0,m.UO)().movieId,e=(0,g.useState)([]),n=(0,v.Z)(e,2),r=n[0],o=n[1],i=(0,g.useState)(null),a=(0,v.Z)(i,2),c=a[0],u=a[1],l=(0,g.useState)(!1),s=(0,v.Z)(l,2),h=s[0],j=s[1];return(0,g.useEffect)((function(){var e=function(){var t=(0,d.Z)(I().mark((function t(e){var n,r;return I().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,j(!0),t.next=4,(0,w.xc)(e);case 4:n=t.sent,r=n.cast,o(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),u(t.t0);case 12:return t.prev=12,j(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(e){return t.apply(this,arguments)}}();e(t)}),[t]),(0,S.jsxs)(S.Fragment,{children:[h&&(0,S.jsx)(b.Z,{}),c&&y.Am.error("Ooops... Something went wrong. Please try again later!",x.Z),r.length?(0,S.jsx)(N,{children:r.map((function(t){var e=t.id,n=(0,p.Z)(t,A);return(0,S.jsx)(F,{children:(0,S.jsx)(G,(0,f.Z)({},n))},e)}))}):(0,S.jsx)(T,{children:"We don't have any information about cast for this movie"})]})}}}]);
//# sourceMappingURL=678.d0273b7e.chunk.js.map