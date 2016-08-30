define(["exports","metal/src/metal","./Pagination.soy.js","metal-component/src/all/component","metal-soy/src/Soy"],function(t,e,a,o,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(a),c=n(o),p=n(r),f=function(t){function e(){return i(this,e),s(this,t.apply(this,arguments))}return u(e,t),e.prototype.created=function(){this.lastState_={page:this.page},this.on(e.Events.CHANGE_REQUEST,this.defaultChangeRequestFn_,!0)},e.prototype.defaultChangeRequestFn_=function(t){this.setState_(t.state)},e.prototype.dispatchRequest_=function(t){this.emit(e.Events.CHANGE_REQUEST,{lastState:this.lastState_,offset:this.offset,state:t,total:this.total})},e.prototype.getOffsetPageNumber=function(){return this.offset+this.page},e.prototype.getOffsetTotalPages=function(){return this.offset+this.total},e.prototype.next=function(){var t=this.page,e=this.total;this.dispatchRequest_({page:this.circular&&t===e-1?0:Math.min(e,++t)})},e.prototype.onClickItem=function(t){var e=t.delegateTarget;t.preventDefault();var a=parseInt(e.getAttribute("data-index"));this.dispatchRequest_({page:a})},e.prototype.onClickControls=function(t){var e=t.delegateTarget;t.preventDefault();var a=parseInt(e.getAttribute("data-control-index"));switch(a){case 0:this.prev();break;case 1:this.next()}},e.prototype.prev=function(){var t=this.page,e=this.total;this.dispatchRequest_({page:this.circular&&0===t?e-1:Math.max(0,--t)})},e.prototype.setState_=function(t){this.page=t.page,this.lastState_=t},e}(c["default"]);p["default"].register(f,l["default"]),f.STATE={circular:{validator:e.core.isBoolean,value:!0},offset:{validator:e.core.isNumber,value:1},page:{validator:e.core.isNumber,value:0},showControls:{validator:e.core.isBoolean,value:!0},strings:{validator:e.core.isObject,setter:function(t){return e.object.mixin({next:"Next",nextAriaLabel:"Next",prev:"Prev",prevAriaLabel:"Previous"},t)},valueFn:function(){}},total:{validator:e.core.isNumber,value:0}},f.Events={CHANGE_REQUEST:"changeRequest"},t["default"]=f});