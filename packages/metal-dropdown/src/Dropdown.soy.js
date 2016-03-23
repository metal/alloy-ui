/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Dropdown.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Dropdown.
 * @public
 */

goog.module('Dropdown.incrementaldom');

var soy = goog.require('soy');
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {{
 *    alignedPosition: (?),
 *    classMap: (?),
 *    elementClasses: (?),
 *    expanded: (?),
 *    id: (?),
 *    position: (?),
 *    positionClassOnMenu: (?),
 *    body: (?soydata.SanitizedHtml|string|undefined),
 *    header: (?soydata.SanitizedHtml|string|undefined)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  soy.asserts.assertType(opt_data.body == null || (opt_data.body instanceof Function) || (opt_data.body instanceof soydata.UnsanitizedText) || goog.isString(opt_data.body), 'body', opt_data.body, '?soydata.SanitizedHtml|string|undefined');
  var body = /** @type {?soydata.SanitizedHtml|string|undefined} */ (opt_data.body);
  soy.asserts.assertType(opt_data.header == null || (opt_data.header instanceof Function) || (opt_data.header instanceof soydata.UnsanitizedText) || goog.isString(opt_data.header), 'header', opt_data.header, '?soydata.SanitizedHtml|string|undefined');
  var header = /** @type {?soydata.SanitizedHtml|string|undefined} */ (opt_data.header);
  var classes__soy3 = opt_data.classMap ? opt_data.classMap : ['dropup', 'dropup', 'dropright', 'dropdown', 'dropdown', 'dropdown', 'dropleft', 'dropup'];
  var currentPosition__soy4 = opt_data.alignedPosition != null ? opt_data.alignedPosition : opt_data.position;
  var positionClass__soy5 = currentPosition__soy4 != null ? classes__soy3[currentPosition__soy4] : 'dropdown';
  ie_open('div', null, null,
      'id', opt_data.id,
      'class', (opt_data.positionClassOnMenu ? 'dropdown' : positionClass__soy5) + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + (opt_data.expanded ? ' open' : ''));
    if (header) {
      header();
    }
    ie_open('ul', null, null,
        'class', 'dropdown-menu' + (opt_data.positionClassOnMenu ? ' ' + positionClass__soy5 : ''));
      if (body) {
        body();
      }
    ie_close('ul');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Dropdown.render';
}

exports.render.params = ["body","header","alignedPosition","classMap","elementClasses","expanded","id","position","positionClassOnMenu"];
templates = exports;
return exports;

});

class Dropdown extends Component {}
Soy.register(Dropdown, templates);
export default templates;
export { Dropdown, templates };
/* jshint ignore:end */
