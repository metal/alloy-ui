define(["exports","metal/src/metal","metal-dom/src/all/dom","metal-anim/src/Anim","metal-component/src/all/component","metal-events/src/events","metal-soy/src/Soy","./Alert.soy.js","metal-jquery-adapter/src/JQueryAdapter"],function(e,t,i,n,o,s,l,r,a){"use strict";function c(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var f=c(i),y=c(n),p=c(o),v=c(l),m=c(r),b=c(a),_=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),O=function j(e,t,i){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var o=Object.getPrototypeOf(e);return null===o?void 0:j(o,t,i)}if("value"in n)return n.value;var s=n.get;if(void 0!==s)return s.call(i)},g=function(e){function i(){return u(this,i),d(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return h(i,e),_(i,[{key:"created",value:function(){this.eventHandler_=new s.EventHandler}},{key:"detached",value:function(){O(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"detached",this).call(this),this.eventHandler_.removeAllListeners(),clearTimeout(this.delay_)}},{key:"close",value:function(){f["default"].once(this.element,"animationend",this.dispose.bind(this)),f["default"].once(this.element,"transitionend",this.dispose.bind(this)),this.eventHandler_.removeAllListeners(),this.syncVisible(!1)}},{key:"handleDocClick_",value:function(e){this.element.contains(e.target)||this.hide()}},{key:"hide",value:function(){this.visible=!1}},{key:"hideCompletely_",value:function(){this.isDisposed()||this.visible||O(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"syncVisible",this).call(this,!1)}},{key:"toggle",value:function(){this.visible=!this.visible}},{key:"show",value:function(){this.visible=!0}},{key:"syncDismissible",value:function(e){e?this.eventHandler_.add(f["default"].on(document,"click",this.handleDocClick_.bind(this))):this.eventHandler_.removeAllListeners()}},{key:"syncHideDelay",value:function(e){t.core.isNumber(e)&&this.visible&&(clearTimeout(this.delay_),this.delay_=setTimeout(this.hide.bind(this),e))}},{key:"syncVisible",value:function(e,n){var o=this,s=!1;e?t.core.isDef(n)&&(s=!0,O(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"syncVisible",this).call(this,!0)):(f["default"].once(this.element,"animationend",this.hideCompletely_.bind(this)),f["default"].once(this.element,"transitionend",this.hideCompletely_.bind(this)));var l=function(){o.isDisposed()||(f["default"].removeClasses(o.element,o.animClasses[e?"hide":"show"]),f["default"].addClasses(o.element,o.animClasses[e?"show":"hide"]),y["default"].emulateEnd(o.element),e&&t.core.isNumber(o.hideDelay)&&o.syncHideDelay(o.hideDelay))};s?setTimeout(l,0):l()}}]),i}(p["default"]);v["default"].register(g,m["default"]),g.STATE={animClasses:{validator:t.core.isObject,value:{show:"fade in",hide:"fade"}},body:{},dismissible:{validator:t.core.isBoolean,value:!0},elementClasses:{value:"alert-success"},hideDelay:{},visible:{value:!1}},e["default"]=g,b["default"].register("alert",g)});