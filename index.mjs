// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function o(i){var d,l,m,u,p;if(!n(i))throw new TypeError(s("0Pd46,G5",i));for(d=[],p=1;p<arguments.length;p++)d.push(arguments[p]);return u=0,p=-1,e(l={},"next",h),e(l,"return",v),r&&t(i[r])&&e(l,r,a),l;function h(){var e;return 2===u?{done:!0}:1===u?(p+=1)>=d.length?(u=2,m):{value:d[p],done:!1}:(e=i.next()).done?(u=1,(p+=1)>=d.length?(u=2,e):(m=e,{value:d[p],done:!1})):{value:e.value,done:!1}}function v(e){return u=2,arguments.length?{value:e,done:!0}:{done:!0}}function a(){var e,t;for(e=[i[r]()],t=0;t<d.length;t++)e.push(d[t]);return o.apply(null,e)}}export{o as default};
//# sourceMappingURL=index.mjs.map
