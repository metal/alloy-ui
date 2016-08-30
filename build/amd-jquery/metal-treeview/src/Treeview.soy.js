define(['exports', 'metal-component/src/all/component', 'metal-soy/src/Soy'], function (exports, _component, _Soy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.templates = exports.Treeview = undefined;

  var _component2 = _interopRequireDefault(_component);

  var _Soy2 = _interopRequireDefault(_Soy);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var templates;
  goog.loadModule(function (exports) {

    // This file was automatically generated from Treeview.soy.
    // Please don't edit this file by hand.

    /**
     * @fileoverview Templates in namespace Treeview.
     * @public
     */

    goog.module('Treeview.incrementaldom');

    /** @suppress {extraRequire} */
    var soy = goog.require('soy');
    /** @suppress {extraRequire} */
    var soydata = goog.require('soydata');
    /** @suppress {extraRequire} */
    goog.require('goog.i18n.bidi');
    /** @suppress {extraRequire} */
    goog.require('goog.asserts');
    var IncrementalDom = goog.require('incrementaldom');
    var ie_open = IncrementalDom.elementOpen;
    var ie_close = IncrementalDom.elementClose;
    var ie_void = IncrementalDom.elementVoid;
    var ie_open_start = IncrementalDom.elementOpenStart;
    var ie_open_end = IncrementalDom.elementOpenEnd;
    var itext = IncrementalDom.text;
    var iattr = IncrementalDom.attr;

    /**
     * @param {Object<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object<string, *>=} opt_ijData
     * @return {void}
     * @suppress {checkTypes}
     */
    function $render(opt_data, opt_ignored, opt_ijData) {
      ie_open('div', null, null, 'class', 'treeview' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
      $nodes(opt_data, null, opt_ijData);
      ie_close('div');
    }
    exports.render = $render;
    if (goog.DEBUG) {
      $render.soyTemplateName = 'Treeview.render';
    }

    /**
     * @param {Object<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object<string, *>=} opt_ijData
     * @return {void}
     * @suppress {checkTypes}
     */
    function $nodes(opt_data, opt_ignored, opt_ijData) {
      if (opt_data.nodes) {
        ie_open('ul', null, null, 'class', 'treeview-nodes', 'role', 'tree');
        var nodeList17 = opt_data.nodes;
        var nodeListLen17 = nodeList17.length;
        for (var nodeIndex17 = 0; nodeIndex17 < nodeListLen17; nodeIndex17++) {
          var nodeData17 = nodeList17[nodeIndex17];
          var index__soy13 = nodeIndex17;
          $node({ node: nodeData17, path: opt_data.parentPath != null ? opt_data.parentPath + '-' + index__soy13 : index__soy13 }, null, opt_ijData);
        }
        ie_close('ul');
      }
    }
    exports.nodes = $nodes;
    if (goog.DEBUG) {
      $nodes.soyTemplateName = 'Treeview.nodes';
    }

    /**
     * @param {Object<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object<string, *>=} opt_ijData
     * @return {void}
     * @suppress {checkTypes}
     */
    function $node(opt_data, opt_ignored, opt_ijData) {
      ie_open_start('li');
      iattr('class', 'treeview-node');
      iattr('data-treeview-path', opt_data.path);
      iattr('data-onkeyup', 'handleNodeKeyUp_');
      $ariaExpanded(opt_data, null, opt_ijData);
      iattr('role', 'treeitem');
      iattr('tabindex', '0');
      ie_open_end();
      if (opt_data.node) {
        ie_open('div', null, null, 'class', 'treeview-node-wrapper' + (opt_data.node.expanded ? ' expanded' : ''));
        ie_open('div', null, null, 'class', 'treeview-node-main clearfix' + (opt_data.node.children ? ' hasChildren' : ''), 'data-onclick', 'handleNodeClicked_');
        if (opt_data.node.children) {
          ie_void('div', null, null, 'class', 'treeview-node-toggler');
        }
        ie_open('span', null, null, 'class', 'treeview-node-name');
        itext((goog.asserts.assert(opt_data.node.name != null), opt_data.node.name));
        ie_close('span');
        ie_close('div');
        $nodes({ nodes: opt_data.node.children, parentPath: opt_data.path }, null, opt_ijData);
        ie_close('div');
      }
      ie_close('li');
    }
    exports.node = $node;
    if (goog.DEBUG) {
      $node.soyTemplateName = 'Treeview.node';
    }

    /**
     * @param {Object<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object<string, *>=} opt_ijData
     * @return {void}
     * @suppress {checkTypes}
     */
    function $ariaExpanded(opt_data, opt_ignored, opt_ijData) {
      if (opt_data.node.children) {
        iattr('aria-expanded', opt_data.node.expanded ? 'true' : 'false');
      }
    }
    exports.ariaExpanded = $ariaExpanded;
    if (goog.DEBUG) {
      $ariaExpanded.soyTemplateName = 'Treeview.ariaExpanded';
    }

    exports.render.params = ["elementClasses", "nodes"];
    exports.render.types = { "elementClasses": "any", "nodes": "any" };
    exports.nodes.params = ["nodes", "parentPath"];
    exports.nodes.types = { "nodes": "any", "parentPath": "any" };
    exports.node.params = ["node", "path"];
    exports.node.types = { "node": "any", "path": "any" };
    exports.ariaExpanded.params = ["node"];
    exports.ariaExpanded.types = { "node": "any" };
    exports.templates = templates = exports;
    return exports;
  });

  var Treeview = function (_Component) {
    _inherits(Treeview, _Component);

    function Treeview() {
      _classCallCheck(this, Treeview);

      return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    return Treeview;
  }(_component2.default);

  _Soy2.default.register(Treeview, templates);
  exports.Treeview = Treeview;
  exports.templates = templates;
  exports.default = templates;
});
//# sourceMappingURL=Treeview.soy.js.map