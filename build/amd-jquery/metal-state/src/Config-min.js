define(["exports","metal/src/metal","./validators"],function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t,r){var n=t;return n===a&&(n=Object.create(a),n.config={}),e.object.mixin(n.config,r),n}Object.defineProperty(t,"__esModule",{value:!0});var i=n(r),a={required:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];return u(this,{required:t})},setter:function(t){return u(this,{setter:t})},validator:function(t){return u(this,{validator:t})},value:function(t){return u(this,{value:t})}},o=Object.keys(i["default"]);o.forEach(function(t){return a[t]=function(){return this.validator(i["default"][t])}}),t["default"]=a});