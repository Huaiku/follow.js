!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("follow",[],t):"object"==typeof exports?exports.follow=t():e.follow=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.defaults={selector:".follow-el",areas:8}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.followEl=function(e){return document.querySelectorAll(e)}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.followElArray=[]},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var r=(o(0),o(1),o(4)),n=o(8);t.init=function(e){(0,n.mergeOptions)(e),document.addEventListener("mousemove",r.mouseMoveHandler)}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mouseMoveHandler=void 0;var r=o(2),n=o(5);t.mouseMoveHandler=function(e){r.followElArray.map(function(t){(0,n.updateEl)(t,e)})}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.updateEl=void 0;var r=o(6),n=o(0),u=o(7);t.updateEl=function(e,t){var o=(0,r.getCenterPoint)(e),l=180*Math.atan2(t.pageY-o.y,t.pageX-o.x)/Math.PI,i=180/n.defaults.areas;(0,u.propertyUpdateCondition)(e,l,i)}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getCenterPoint=function(e){var t=e.getBoundingClientRect();return{x:(t.left+t.right)/2,y:(t.bottom+t.top)/2}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.propertyUpdateCondition=void 0;var r=o(0),n=["right","top-right","top","top-left","left","bottom-left","bottom","bottom-right"];t.propertyUpdateCondition=function(e,t,o){for(var u=o,l=o-2*o,i=0;i<r.defaults.areas;i++)u<0&&l>0?(t>l||t<u)&&(e.innerHTML=n[i]):t<u&&t>l&&(e.innerHTML=n[i]),u=l,(l-=2*o)<-180&&(l=-u)}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mergeOptions=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=o(0),u=o(1),l=o(2);t.mergeOptions=function(e){"string"==typeof e?(n.defaults.selector=e,Array.from((0,u.followEl)(n.defaults.selector)).map(function(e){return l.followElArray.push(e)})):"object"===(void 0===e?"undefined":r(e))?(Object.assign(n.defaults,e),Array.from((0,u.followEl)(n.defaults.selector)).map(function(e){return l.followElArray.push(e)})):void 0===(void 0===e?"undefined":r(e))&&Array.from((0,u.followEl)(n.defaults.selector)).map(function(e){return l.followElArray.push(e)})}}])});