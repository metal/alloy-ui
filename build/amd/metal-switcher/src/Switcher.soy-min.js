define(["exports","metal-component/src/Component","metal-soy/src/Soy"],function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0}),e.templates=e.Switcher=void 0;var s,c=n(t),a=n(o);goog.loadModule(function(e){function t(e,t,o){n("div",null,null,"id",e.id,"class","switcher"+(e.elementClasses?" "+e.elementClasses:"")+(e.checked?" switcher-on":""),"data-onclick","handleClick"),n("div",null,null,"class","switcher-control"),i("div",null,null,"class","switcher-control-icon"),r("div"),r("div")}goog.module("Switcher.incrementaldom");goog.require("soy"),goog.require("soydata");goog.require("goog.i18n.bidi"),goog.require("goog.asserts");var o=goog.require("incrementaldom"),n=o.elementOpen,r=o.elementClose,i=o.elementVoid;o.elementOpenStart,o.elementOpenEnd,o.text,o.attr;return e.render=t,goog.DEBUG&&(t.soyTemplateName="Switcher.render"),e.render.params=["checked","elementClasses","id"],e.templates=s=e,e});var u=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return l(t,e),t}(c["default"]);u.prototype.registerMetalComponent&&u.prototype.registerMetalComponent(u,"Switcher"),a["default"].register(u,s),e["default"]=s,e.Switcher=u,e.templates=s});