define(["exports","metal/src/metal","metal-component/src/all/component","metal-soy/src/Soy","./ListItem.soy.js"],function(t,e,n,r,o){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(e),f=a(n),s=a(r),y=a(o),p=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),d=function(t){function e(){return i(this,e),c(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return u(e,t),p(e,[{key:"setterItemFn_",value:function(t){return t.textPrimary&&l["default"].isString(t.textPrimary)&&(t.textPrimary=s["default"].toIncDom(t.textPrimary)),t.textSecondary&&l["default"].isString(t.textSecondary)&&(t.textSecondary=s["default"].toIncDom(t.textSecondary)),t.avatar&&t.avatar.content&&l["default"].isString(t.avatar.content)&&(t.avatar.content=s["default"].toIncDom(t.avatar.content)),Array.isArray(t.iconsHtml)&&(t.iconsHtml=t.iconsHtml.map(s["default"].toIncDom)),t}}]),e}(f["default"]);s["default"].register(d,y["default"]),d.STATE={item:{validator:l["default"].isObject,setter:"setterItemFn_"},index:{value:-1}},t["default"]=d});