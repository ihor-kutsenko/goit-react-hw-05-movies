/*! For license information please see 539.bbf7cfe8.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[539],{7328:function(t,r,e){e.d(r,{Z:function(){return l}});var n,o=e(8617),i=e(168),a=e(1087),c=(0,e(5867).ZP)(a.rU)(n||(n=(0,i.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: ",";\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(t){return t.theme.colors.white}),(function(t){return t.theme.colors.accent})),u=e(184),l=function(t){var r=t.to,e=t.children;return(0,u.jsxs)(c,{to:r,children:[(0,u.jsx)(o.jTe,{size:"24"})," Go to back",e]})}},6539:function(t,r,e){e.r(r),e.d(r,{default:function(){return g}});var n=e(5861),o=e(9439),i=e(2791),a=e(7689),c=e(9085),u=e(3252),l=e(4227),s=e(4783),h=e(7328),f=e(1147),p=e(184),d=function(t){var r=t.detail,e=r.profile_path,n=r.name,o=r.birthday,i=r.place_of_birth,a=r.popularity,c=e?"https://image.tmdb.org/t/p/original".concat(e):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;";return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(f.Dx,{children:" BIOGRAPHY, MOVIES AND FACTS"}),(0,p.jsxs)(f._K,{children:[(0,p.jsx)(f.Ee,{src:c,alt:n,width:350}),(0,p.jsxs)(f.lU,{children:[(0,p.jsx)(f.es,{children:n}),(0,p.jsxs)(f.OP,{children:[(0,p.jsx)(f.wC,{children:"Date of birth: "}),(0,p.jsx)(f.pS,{children:o})]}),(0,p.jsxs)(f.OP,{children:[(0,p.jsx)(f.wC,{children:"Place of birth: "}),(0,p.jsx)(f.pS,{children:i})]}),(0,p.jsxs)(f.OP,{children:[(0,p.jsx)(f.wC,{children:"Popularity: "}),(0,p.jsx)(f.pS,{children:a})]}),(0,p.jsx)(f.XU,{children:"Additional information"}),(0,p.jsxs)(f.Q4,{children:[(0,p.jsx)("li",{children:(0,p.jsx)(f.bW,{to:"biography",children:"Biography"})}),(0,p.jsx)("li",{children:(0,p.jsx)(f.bW,{to:"actors-movie",children:"Movie"})})]})]})]})]})},v=e(9576);function y(){y=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function l(t,r,e,o){var i=r&&r.prototype instanceof f?r:f,a=Object.create(i.prototype),c=new O(o||[]);return n(a,"_invoke",{value:b(t,e,c)}),a}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=l;var h={};function f(){}function p(){}function d(){}var v={};u(v,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(k([])));m&&m!==r&&e.call(m,i)&&(v=m);var x=d.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function j(t,r){function o(n,i,a,c){var u=s(t[n],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function b(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=s(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function L(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=d,n(x,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(j.prototype),u(j.prototype,a,(function(){return this})),t.AsyncIterator=j,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new j(l(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:k(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}var g=function(){var t,r,e=(0,i.useState)(!1),f=(0,o.Z)(e,2),g=f[0],m=f[1],x=(0,i.useState)(null),w=(0,o.Z)(x,2),j=w[0],b=w[1],L=(0,i.useState)({}),E=(0,o.Z)(L,2),_=E[0],O=E[1],k=(0,a.UO)().actorId,S=(0,a.TH)(),P=(0,i.useRef)(null!==(t=null===(r=S.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/");return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(y().mark((function t(r){var e;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,(0,s.a9)(r);case 4:e=t.sent,O(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),b(t.t0);case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(r){return t.apply(this,arguments)}}();t(k)}),[k]),(0,p.jsxs)(p.Fragment,{children:[g&&(0,p.jsx)(l.Z,{}),j&&c.Am.error("Ooops... Something went wrong. Please try again later!",u.Z),(0,p.jsxs)(v.W,{children:[(0,p.jsx)(h.Z,{to:P.current}),(0,p.jsx)(d,{detail:_}),(0,p.jsx)(i.Suspense,{fallback:(0,p.jsx)(l.Z,{}),children:(0,p.jsx)(a.j3,{})})]})]})}}}]);
//# sourceMappingURL=539.bbf7cfe8.chunk.js.map