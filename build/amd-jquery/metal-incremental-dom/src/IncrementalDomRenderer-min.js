define(["exports","metal/src/metal","metal-dom/src/all/dom","metal-component/src/all/component","./IncrementalDomAop","./children/IncrementalDomChildren","./cleanup/IncrementalDomUnusedComponents","./utils/IncrementalDomUtils","./incremental-dom"],function(e,t,n,r,o,a,i,p){"use strict";function d(e){return e&&e.__esModule?e:{"default":e}}function s(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=d(n),_=d(o),m=d(a),f=d(i),C=d(p),g=function(e){function o(t){l(this,o);var n=c(this,e.call(this,t));return t.context={},n.config_=t.getInitialConfig(),n.childComponents_=[],n.clearChanges_(),t.on("attached",n.handleAttached_.bind(n)),n.handleInterceptedAttributesCall_=n.handleInterceptedAttributesCall_.bind(n),n.handleInterceptedCloseCall_=n.handleInterceptedCloseCall_.bind(n),n.handleInterceptedOpenCall_=n.handleInterceptedOpenCall_.bind(n),n.handleChildrenCaptured_=n.handleChildrenCaptured_.bind(n),n.handleChildRender_=n.handleChildRender_.bind(n),n.renderInsidePatchDontSkip_=n.renderInsidePatchDontSkip_.bind(n),n}return h(o,e),o.prototype.addElementClasses_=function(e,t){for(var n=3;n<t.length;n+=2)if("class"===t[n])return void(t[n+1]=this.removeDuplicateClasses_(t[n+1]+" "+e));for(;t.length<3;)t.push(null);t.push("class",e)},o.prototype.attachDecoratedListeners_=function(e,t){if(!this.component_.wasRendered)for(var n=(t[2]||[]).concat(t.slice(3)),r=0;r<n.length;r+=2){var o=this.getEventFromListenerAttr_(n[r]);o&&!e[o+"__handle__"]&&this.attachEvent_(e,n[r],o,n[r+1])}},o.prototype.attachEvent_=function(e,n,r,o){var a=r+"__handle__";e[a]&&(e[a].removeListener(),e[a]=null),e[n]=o,o?(t.core.isString(o)&&("d"===n[0]&&e.setAttribute(n,o),o=this.component_.getListenerFn(o)),e[a]=u["default"].delegate(document,r,e,o)):e.removeAttribute(n)},o.prototype.buildChildren_=function(e){return 0===e.length?v:e},o.prototype.buildShouldUpdateArgs_=function(){return[this.changes_]},o.prototype.clearChanges_=function(){this.changes_={}},o.prototype.disposeInternal=function(){e.prototype.disposeInternal.call(this);var t=this.component_,n=this.config_.ref,r=this.getOwner();r&&r.components&&r.components[n]===t&&delete r.components[n];for(var o=0;o<this.childComponents_.length;o++){var a=this.childComponents_[o];a.isDisposed()||(a.element=null,a.dispose())}this.childComponents_=null},o.finishedRenderingComponent=function(){y.pop(),0===y.length&&f["default"].disposeUnused()},o.getComponentBeingRendered=function(){return y[y.length-1]},o.getCurrentData=function(){var e=IncrementalDOM.currentElement(),t=o.getComponentBeingRendered(),r=t.getRenderer(),a=r;return r.rootElementReached_&&e!==t.element.parentNode&&(a=n.domData.get(e)),a.incDomData_=a.incDomData_||{currComps:{keys:{},order:{}},prevComps:{keys:{},order:{}}},a.incDomData_},o.prototype.getEventFromListenerAttr_=function(e){var t=o.LISTENER_REGEX.exec(e),n=t?t[1]?t[1]:t[2]:null;return n?n.toLowerCase():null},o.prototype.getOwner=function(){return this.owner_},o.prototype.getParent=function(){return this.parent_},o.prototype.getSubComponent_=function(e,n){var a=e;t.core.isString(a)&&(a=r.ComponentRegistry.getConstructor(e));var i,p=o.getCurrentData();if(t.core.isDef(n.ref))i=this.match_(this.component_.components[n.ref],a,n),this.component_.addSubComponent(n.ref,i);else if(t.core.isDef(n.key))i=this.match_(p.prevComps.keys[n.key],a,n),p.currComps.keys[n.key]=i;else{var d=t.core.getUid(a,!0);p.currComps.order[d]=p.currComps.order[d]||[];var s=p.currComps.order[d];i=this.match_((p.prevComps.order[d]||[])[s.length],a,n),s.push(i)}return i},o.prototype.guaranteeParent_=function(){var e=this.component_.element;if(!e||!e.parentNode){var t=document.createElement("div");return e&&u["default"].append(t,e),t}},o.prototype.handleAttached_=function(e){this.attachData_=e},o.prototype.handleChildrenCaptured_=function(e){var t=this.componentToRender_,n=t.props,r=t.tag;n.children=this.buildChildren_(e.props.children),this.componentToRender_=null,this.renderFromTag_(r,n)},o.prototype.handleChildRender_=function(e){if(e.tag&&C["default"].isComponentTag(e.tag))return e.props.children=this.buildChildren_(e.props.children),this.renderFromTag_(e.tag,e.props),!0},o.prototype.handleDataManagerCreated_=function(){e.prototype.handleDataManagerCreated_.call(this);var t=this.component_.getDataManager();this.component_.constructor.SYNC_UPDATES_MERGED||t.on("dataPropChanged",this.handleDataPropChanged_.bind(this)),t.add("children",{validator:Array.isArray,value:v},this.config_.children||v)},o.prototype.handleDataPropChanged_=function(e){this.changes_[e.key]=e},o.prototype.handleInterceptedAttributesCall_=function(e,n,r,o){var a=this.getEventFromListenerAttr_(r);return a?void this.attachEvent_(n,r,a,o):("checked"===r&&(o=t.core.isDefAndNotNull(o)&&o!==!1),"value"===r&&n.value!==o&&(n[r]=o),void(t.core.isBoolean(o)?(n[r]=o,o?n.setAttribute(r,""):n.removeAttribute(r)):e(n,r,o)))},o.prototype.handleInterceptedCloseCall_=function(e,t){var r=e(t);return this.resetData_(n.domData.get(r).incDomData_),r},o.prototype.handleInterceptedOpenCall_=function(e,t){return C["default"].isComponentTag(t)?this.handleSubComponentCall_.apply(this,arguments):this.handleRegularCall_.apply(this,arguments)},o.prototype.handleManagerDataPropChanged_=function(t){this.handleDataPropChanged_(t),e.prototype.handleManagerDataPropChanged_.call(this,t)},o.prototype.handleRegularCall_=function(e){for(var t=o.getComponentBeingRendered(),n=t.getRenderer(),r=arguments.length,a=Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];if(!n.rootElementReached_){n.config_.key&&(a[1]=n.config_.key);var p=t.getDataManager().get("elementClasses");p&&this.addElementClasses_(p,a)}var d=e.apply(null,a);return this.attachDecoratedListeners_(d,a),this.updateElementIfNotReached_(d),d},o.prototype.handleSubComponentCall_=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=C["default"].buildConfigFromCall(n);this.componentToRender_={props:o,tag:n[0]},m["default"].capture(this,this.handleChildrenCaptured_)},o.prototype.hasDataChanged_=function(){return Object.keys(this.changes_).length>0},o.prototype.intercept_=function(){_["default"].startInterception({attributes:this.handleInterceptedAttributesCall_,elementClose:this.handleInterceptedCloseCall_,elementOpen:this.handleInterceptedOpenCall_})},o.isIncDomNode=function(e){return!!e[m["default"].CHILD_OWNER]},o.prototype.match_=function(e,t,n){return e&&e.constructor===t||(e=new t(n,(!1))),e.wasRendered&&(e.getRenderer().startSkipUpdates(),e.getDataManager().replaceNonInternal(n),e.getRenderer().stopSkipUpdates()),e.getRenderer().config_=n,e},o.prototype.patch=function(){if(!this.component_.element&&this.parent_)return void this.parent_.getRenderer().patch();var e=this.guaranteeParent_();if(e)IncrementalDOM.patch(e,this.renderInsidePatchDontSkip_),u["default"].exitDocument(this.component_.element),this.component_.element&&this.component_.inDocument&&this.component_.renderElement_(this.attachData_.parent,this.attachData_.sibling);else{var t=this.component_.element;IncrementalDOM.patchOuter(t,this.renderInsidePatchDontSkip_),this.component_.element||u["default"].exitDocument(t)}},o.prototype.removeDuplicateClasses_=function(e){for(var t=[],n=e.split(/\s+/),r={},o=0;o<n.length;o++)r[n[o]]||(r[n[o]]=!0,t.push(n[o]));return t.join(" ")},o.render=function(e,t,n){if(!r.Component.isComponentCtor(e)){var a=e,i=function(e){function t(){return l(this,t),c(this,e.apply(this,arguments))}return h(t,e),t.prototype.created=function(){o.getComponentBeingRendered()&&this.getRenderer().updateContext_(this)},t.prototype.render=function(){a(this.getRenderer().config_)},t}(r.Component);i.RENDERER=o,e=i}return r.Component.render(e,t,n)},o.prototype.render=function(){this.patch()},o.renderChild=function(e){e[m["default"].CHILD_OWNER].renderChild(e)},o.prototype.renderChild=function(e){this.intercept_(),m["default"].render(e,this.handleChildRender_),_["default"].stopInterception()},o.prototype.renderFromTag_=function(e,n){if(t.core.isString(e)||e.prototype.getRenderer){var r=this.renderSubComponent_(e,n);return this.updateElementIfNotReached_(r.element),r.element}return e(n)},o.prototype.renderIncDom=function(){this.component_.render?this.component_.render():IncrementalDOM.elementVoid("div")},o.prototype.renderInsidePatch=function(){return this.component_.wasRendered&&!this.shouldUpdate()&&IncrementalDOM.currentPointer()===this.component_.element?void(this.component_.element&&IncrementalDOM.skipNode()):void this.renderInsidePatchDontSkip_()},o.prototype.renderInsidePatchDontSkip_=function(){o.startedRenderingComponent(this.component_),this.clearChanges_(),this.rootElementReached_=!1,f["default"].schedule(this.childComponents_),this.childComponents_=[],this.intercept_(),this.renderIncDom(),_["default"].stopInterception(),this.rootElementReached_||(this.component_.element=null),this.emit("rendered",!this.isRendered_),o.finishedRenderingComponent(),this.resetData_(this.incDomData_)},o.prototype.renderSubComponent_=function(e,t){var n=this.getSubComponent_(e,t);this.updateContext_(n);var r=n.getRenderer();if(r instanceof o){var a=o.getComponentBeingRendered();a.getRenderer().childComponents_.push(n),r.parent_=a,r.owner_=this.component_,r.renderInsidePatch()}return n.wasRendered||n.renderAsSubComponent(),n},o.prototype.resetData_=function(e){e&&(e.prevComps.keys=e.currComps.keys,e.prevComps.order=e.currComps.order,e.currComps.keys={},e.currComps.order={})},o.prototype.shouldUpdate=function(){if(!this.hasDataChanged_())return!1;if(this.component_.shouldUpdate){var e;return(e=this.component_).shouldUpdate.apply(e,s(this.buildShouldUpdateArgs_()))}return!0},o.prototype.skipNextChildrenDisposal=function(){this.childComponents_=[]},o.startedRenderingComponent=function(e){y.push(e)},o.prototype.update=function(){this.shouldUpdate()&&this.patch()},o.prototype.updateElementIfNotReached_=function(e){var t=o.getComponentBeingRendered(),n=t.getRenderer();n.rootElementReached_||(n.rootElementReached_=!0,t.element!==e&&(t.element=e))},o.prototype.updateContext_=function(e){var n=e.context,r=o.getComponentBeingRendered(),a=r.getChildContext?r.getChildContext():{};t.object.mixin(n,r.context,a),e.context=n},o}(r.ComponentRenderer),y=[],v=[];g.LISTENER_REGEX=/^(?:on([A-Z]\w+))|(?:data-on(\w+))$/,e["default"]=g});