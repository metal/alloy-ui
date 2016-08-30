define(["exports","metal/src/metal","metal-component/src/all/component","html2incdom/src/withParser","metal-incremental-dom/src/IncrementalDomRenderer","./SoyAop","metal-soy-bundle/build/bundle"],function(t,e,n,o,r,a){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(t,"__esModule",{value:!0}),t.SoyAop=t.Soy=void 0;var u=i(o),p=i(r),d=i(a),f={},m=function(t){function o(){return c(this,o),l(this,t.apply(this,arguments))}return s(o,t),o.prototype.addMissingStateKeys_=function(){var t=this.component_.constructor.TEMPLATE;if(e.core.isFunction(t)){t=d["default"].getOriginalFn(t),this.soyParamTypes_=t.types||{};for(var n=t.params||[],o=this.component_,r=o.getDataManager().getStateInstance(),a=0;a<n.length;a++)r.hasStateKey(n[a])||o[n[a]]||r.addToState(n[a],{},o.getInitialConfig()[n[a]])}},o.prototype.buildTemplateData_=function(t){var n=this,r=this.component_,a=e.object.mixin({},this.config_);r.getStateKeys().forEach(function(t){var e=r[t];n.isHtmlParam_(t)&&(e=o.toIncDom(e)),a[t]=e});for(var i=0;i<t.length;i++)!a[t[i]]&&e.core.isFunction(r[t[i]])&&(a[t[i]]=r[t[i]].bind(r));return a},o.getTemplate=function(t,e){return function(n,o,r){if(!goog.loadedModules_[t])throw new Error('No template with namespace "'+t+'" has been loaded yet.');return goog.loadedModules_[t][e](n,o,r)}},o.prototype.handleDataManagerCreated_=function(){t.prototype.handleDataManagerCreated_.call(this),this.addMissingStateKeys_()},o.handleInterceptedCall_=function(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=[t.componentCtor,null,[]];for(var o in e)n.push(o,e[o]);IncrementalDOM.elementVoid.apply(null,n)},o.prototype.isHtmlParam_=function(t){var e=this.component_.getDataManager().getStateInstance();if(e.getStateKeyConfig(t).isHtml)return!0;var n=this.soyParamTypes_[t]||"";return n.split("|").indexOf("html")!==-1},o.register=function(t,e){var r=arguments.length<=2||void 0===arguments[2]?"render":arguments[2];t.RENDERER=o,t.TEMPLATE=d["default"].getOriginalFn(e[r]),t.TEMPLATE.componentCtor=t,d["default"].registerForInterception(e,r),n.ComponentRegistry.register(t)},o.prototype.renderIncDom=function(){var n=this.component_.constructor.TEMPLATE;e.core.isFunction(n)&&!this.component_.render?(n=d["default"].getOriginalFn(n),d["default"].startInterception(o.handleInterceptedCall_),n(this.buildTemplateData_(n.params||[]),null,f),d["default"].stopInterception()):t.prototype.renderIncDom.call(this)},o.setInjectedData=function(t){f=t||{}},o.prototype.shouldUpdate=function(){var e=t.prototype.shouldUpdate.call(this);if(!e||this.component_.shouldUpdate)return e;for(var n=this.component_.constructor.TEMPLATE,o=n?d["default"].getOriginalFn(n).params:[],r=0;r<o.length;r++)if(this.changes_[o[r]])return!0;return!1},o.toHtmlString=function(t){var e=document.createElement("div");return IncrementalDOM.patch(e,t),e.innerHTML},o.toIncDom=function(t){return e.core.isObject(t)&&e.core.isString(t.content)&&"HTML"===t.contentKind&&(t=t.content),e.core.isString(t)&&(t=u["default"].buildFn(t)),t},o}(p["default"]);t["default"]=m,t.Soy=m,t.SoyAop=d["default"]});