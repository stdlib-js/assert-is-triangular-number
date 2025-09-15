"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=t(function(y,n){
var f=require('@stdlib/assert-is-integer/dist').isPrimitive,m=require('@stdlib/math-base-special-sqrt/dist'),b=require('@stdlib/math-base-special-floor/dist');function l(e){var r,i;return f(e)?(i=8*e+1,r=b(m(i)+.5),r*r===i):!1}n.exports=l
});var u=t(function(R,v){
var x=require('@stdlib/assert-is-integer/dist').isObject,O=require('@stdlib/math-base-special-sqrt/dist'),g=require('@stdlib/math-base-special-floor/dist');function j(e){var r,i;return x(e)?(i=8*e.valueOf()+1,r=g(O(i)+.5),r*r===i):!1}v.exports=j
});var c=t(function(h,q){
var p=s(),P=u();function N(e){return p(e)||P(e)}q.exports=N
});var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),a=c(),T=s(),I=u();o(a,"isPrimitive",T);o(a,"isObject",I);module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
