define(["exports","metal/src/metal"],function(t,e){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(t){function o(e,n,s,p){r(this,o);var a=i(this,t.call(this));return a.blacklist_=s||{},a.originEmitter_=e,a.proxiedEvents_={},a.targetEmitter_=n,a.whitelist_=p,a.startProxy_(),a}return n(o,t),o.prototype.addListener_=function(t,e){return this.originEmitter_.on(t,e)},o.prototype.addListenerForEvent_=function(t){return this.addListener_(t,this.emitOnTarget_.bind(this,t))},o.prototype.disposeInternal=function(){this.removeListeners_(),this.proxiedEvents_=null,this.originEmitter_=null,this.targetEmitter_=null},o.prototype.emitOnTarget_=function(t){var r=[t].concat(e.array.slice(arguments,1));this.targetEmitter_.emit.apply(this.targetEmitter_,r)},o.prototype.proxyEvent=function(t){this.shouldProxyEvent_(t)&&(this.proxiedEvents_[t]=this.addListenerForEvent_(t))},o.prototype.removeListeners_=function(){for(var t=Object.keys(this.proxiedEvents_),e=0;e<t.length;e++)this.proxiedEvents_[t[e]].removeListener();this.proxiedEvents_={}},o.prototype.setOriginEmitter=function(t){var e=this.proxiedEvents_;this.removeListeners_(),this.originEmitter_=t;for(var r=Object.keys(e),i=0;i<r.length;i++)this.proxiedEvents_[r[i]]=this.addListenerForEvent_(r[i])},o.prototype.shouldProxyEvent_=function(t){return this.whitelist_&&!this.whitelist_[t]?!1:this.blacklist_[t]?!1:!this.proxiedEvents_[t]},o.prototype.startProxy_=function(){this.targetEmitter_.on("newListener",this.proxyEvent.bind(this))},o}(e.Disposable);o.prototype.registerMetalComponent&&o.prototype.registerMetalComponent(o,"EventEmitterProxy"),t["default"]=o});