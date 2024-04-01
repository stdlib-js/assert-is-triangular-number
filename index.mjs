// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as s,isObject as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.2-esm/index.mjs";function n(e){var t,n;return!!s(e)&&(t=r(i(n=8*e+1)+.5))*t===n}function m(e){var s,n;return!!t(e)&&(n=8*e.valueOf()+1,(s=r(i(n)+.5))*s===n)}function d(e){return n(e)||m(e)}e(d,"isPrimitive",n),e(d,"isObject",m);export{d as default,m as isObject,n as isPrimitive};
//# sourceMappingURL=index.mjs.map
