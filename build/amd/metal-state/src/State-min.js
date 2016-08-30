define(["exports","metal/src/metal","metal-events/src/events"],function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(t){function i(e,o,s,r){n(this,i);var c=a(this,t.call(this));return c.commonOpts_=r,c.context_=s||c,c.keysBlacklist_={},c.obj_=o||c,c.scheduledBatchData_=null,c.stateInfo_={},c.setShouldUseFacade(!0),c.mergeInvalidKeys_(),c.addToStateFromStaticHint_(e),c}return o(i,t),i.prototype.addKeyToState=function(t,e,i){this.buildKeyInfo_(t,e,i,arguments.length>2),Object.defineProperty(this.obj_,t,this.buildKeyPropertyDef_(t)),this.assertGivenIfRequired_(t)},i.prototype.addToState=function(t,i,n){if(e.core.isString(t))return this.addKeyToState.apply(this,arguments);for(var a=i||{},o=Object.keys(t),s={},r=0;r<o.length;r++){var c=o[r];this.buildKeyInfo_(c,t[c],a[c],a.hasOwnProperty(c)),s[c]=this.buildKeyPropertyDef_(c,n),this.assertGivenIfRequired_(c)}n!==!1&&Object.defineProperties(n||this.obj_,s)},i.prototype.addToStateFromStaticHint_=function(t){var e,n=this.constructor,a=i.mergeStateStatic(n);this.obj_===this&&(e=!!a&&n.prototype),this.addToState(n.STATE_MERGED,t,e)},i.prototype.assertGivenIfRequired_=function(t){var n=this.stateInfo_[t];if(n.config.required){var a=n.state===i.KeyStates.INITIALIZED?this.get(t):n.initialValue;!e.core.isDefAndNotNull(a)}},i.prototype.assertValidStateKeyName_=function(t){if(this.constructor.INVALID_KEYS_MERGED[t]||this.keysBlacklist_[t])throw new Error("It's not allowed to create a state key with the name \""+t+'".')},i.prototype.buildKeyInfo_=function(t,n,a,o){this.assertValidStateKeyName_(t),n=n&&n.config?n.config:n||{},this.commonOpts_&&(n=e.object.mixin({},n,this.commonOpts_)),this.stateInfo_[t]={config:n,state:i.KeyStates.UNINITIALIZED},o&&this.callValidator_(t,a)&&(this.stateInfo_[t].initialValue=a)},i.prototype.buildKeyPropertyDef_=function(t,e){var i=e===this.constructor.prototype?null:this;return{configurable:!0,enumerable:!0,get:function(){return(i||this).getStateKeyValue_(t)},set:function(e){(i||this).setStateKeyValue_(t,e)}}},i.prototype.callFunction_=function(t,i){return e.core.isString(t)?this.context_[t].apply(this.context_,i):e.core.isFunction(t)?t.apply(this.context_,i):void 0},i.prototype.callSetter_=function(t,e,i){var n=this.stateInfo_[t],a=n.config;return a.setter&&(e=this.callFunction_(a.setter,[e,i])),e},i.prototype.callValidator_=function(t,e){var i=this.stateInfo_[t],n=i.config;if(n.validator){var a=this.callFunction_(n.validator,[e,t,this.context_]);return a instanceof Error,a}return!0},i.prototype.canSetState=function(t){var e=this.stateInfo_[t];return!e.config.writeOnce||!e.written},i.prototype.disposeInternal=function(){t.prototype.disposeInternal.call(this),this.stateInfo_=null,this.scheduledBatchData_=null},i.prototype.emitBatchEvent_=function(){if(!this.isDisposed()){var t=this.scheduledBatchData_;this.scheduledBatchData_=null,this.emit("stateChanged",t)}},i.prototype.get=function(t){return this.obj_[t]},i.prototype.getState=function(t){for(var e={},i=t||this.getStateKeys(),n=0;n<i.length;n++)e[i[n]]=this.get(i[n]);return e},i.prototype.getStateKeyConfig=function(t){return(this.stateInfo_[t]||{}).config},i.prototype.getStateKeys=function(){return this.stateInfo_?Object.keys(this.stateInfo_):[]},i.prototype.getStateKeyValue_=function(t){if(!this.warnIfDisposed_(t))return this.initStateKey_(t),this.stateInfo_[t].value},i.prototype.hasBeenSet=function(t){var e=this.stateInfo_[t];return e.state===i.KeyStates.INITIALIZED||this.hasInitialValue_(t)},i.prototype.hasInitialValue_=function(t){return this.stateInfo_[t].hasOwnProperty("initialValue")},i.prototype.hasStateKey=function(t){if(!this.warnIfDisposed_(t))return!!this.stateInfo_[t]},i.prototype.informChange_=function(t,e){if(this.shouldInformChange_(t,e)){var i={key:t,newVal:this.get(t),prevVal:e};this.emit(t+"Changed",i),this.emit("stateKeyChanged",i),this.scheduleBatchEvent_(i)}},i.prototype.initStateKey_=function(t){var e=this.stateInfo_[t];e.state===i.KeyStates.UNINITIALIZED&&(e.state=i.KeyStates.INITIALIZING,this.setInitialValue_(t),e.written||this.setDefaultValue(t),e.state=i.KeyStates.INITIALIZED)},i.mergeState=function(t){return e.object.mixin.apply(null,[{}].concat(t.reverse()))},i.mergeStateStatic=function(t){return e.core.mergeSuperClassesProperty(t,"STATE",i.mergeState)},i.prototype.mergeInvalidKeys_=function(){e.core.mergeSuperClassesProperty(this.constructor,"INVALID_KEYS",function(t){return e.array.flatten(t).reduce(function(t,e){return e&&(t[e]=!0),t},{})})},i.prototype.removeStateKey=function(t){this.stateInfo_[t]=null,delete this.obj_[t]},i.prototype.scheduleBatchEvent_=function(t){this.scheduledBatchData_||(e.async.nextTick(this.emitBatchEvent_,this),this.scheduledBatchData_={changes:{}});var i=t.key,n=this.scheduledBatchData_.changes;n[i]?n[i].newVal=t.newVal:n[i]=t},i.prototype.set=function(t,e){this.hasStateKey(t)&&(this.obj_[t]=e)},i.prototype.setDefaultValue=function(t){var e=this.stateInfo_[t].config;void 0!==e.value?this.set(t,e.value):this.set(t,this.callFunction_(e.valueFn))},i.prototype.setInitialValue_=function(t){if(this.hasInitialValue_(t)){var e=this.stateInfo_[t];this.set(t,e.initialValue),e.initialValue=void 0}},i.prototype.setKeysBlacklist_=function(t){this.keysBlacklist_=t},i.prototype.setState=function(t,e){var i=this;Object.keys(t).forEach(function(e){return i.set(e,t[e])}),e&&this.scheduledBatchData_&&this.once("stateChanged",e)},i.prototype.setStateKeyValue_=function(t,e){if(!this.warnIfDisposed_(t)&&this.canSetState(t)&&this.validateKeyValue_(t,e)){var n=this.stateInfo_[t];this.hasInitialValue_(t)||n.state!==i.KeyStates.UNINITIALIZED||(n.state=i.KeyStates.INITIALIZED);var a=this.get(t);n.value=this.callSetter_(t,e,a),this.assertGivenIfRequired_(t),n.written=!0,this.informChange_(t,a)}},i.prototype.shouldInformChange_=function(t,n){var a=this.stateInfo_[t];return a.state===i.KeyStates.INITIALIZED&&(e.core.isObject(n)||n!==this.get(t))},i.prototype.validateKeyValue_=function(t,e){var n=this.stateInfo_[t];return n.state===i.KeyStates.INITIALIZING||this.callValidator_(t,e)},i.prototype.warnIfDisposed_=function(t){var e=this.isDisposed();return e},i}(i.EventEmitter);s.INVALID_KEYS=["state","stateKey"],s.KeyStates={UNINITIALIZED:0,INITIALIZING:1,INITIALIZED:2},t["default"]=s});