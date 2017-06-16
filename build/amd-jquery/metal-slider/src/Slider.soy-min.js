define(["exports","metal-component/src/all/component","metal-soy/src/Soy"],function(e,n,t){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(e,"__esModule",{value:!0}),e.templates=e.Slider=void 0;var i,u=l(n),s=l(t);goog.loadModule(function(e){function n(e,n,t){var i;e=e||{};var u=null==(i=e.max)?100:i,s=null==(i=e.min)?0:i,c=null==(i=e.value)?0:i;l("div",null,null,"class","slider "+(null==(i=e.elementClasses)?"":i)),l("input",null,null,"name",null==(i=e.inputName)?"":i,"type","hidden","value",c),o("input"),l("span");var d=c;"function"==typeof d?d():null!=d&&a(d),o("span");var p=100*(c-s)/(u-s)+"%";l("div",null,null,"class","rail","data-onclick","onRailClick_"),r("div",null,null,"class","rail-active","style","width: "+p),l("div",null,null,"class","rail-handle","style","left: "+p),r("div",null,null,"class","handle","tabindex","0","role","slider","aria-valuemin",s,"aria-valuemax",u,"aria-valuenow",c),o("div"),o("div"),o("div")}goog.module("Slider.incrementaldom");goog.require("soy"),goog.require("soydata");goog.require("goog.i18n.bidi"),goog.require("goog.asserts"),goog.require("goog.string");var t=goog.require("incrementaldom"),l=t.elementOpen,o=t.elementClose,r=t.elementVoid,a=(t.elementOpenStart,t.elementOpenEnd,t.text);t.attr;return e.render=n,goog.DEBUG&&(n.soyTemplateName="Slider.render"),e.render.params=["elementClasses","inputName","max","min","value"],e.render.types={elementClasses:"any",inputName:"any",max:"any",min:"any",value:"any"},e.templates=i=e,e});var c=function(e){function n(){return o(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,e),n}(u["default"]);s["default"].register(c,i),e.Slider=c,e.templates=i,e["default"]=i});