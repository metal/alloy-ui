/* jshint ignore:start */
import Component from 'metal/src/component/Component';
import SoyAop from 'metal/src/soy/SoyAop';
import SoyRenderer from 'metal/src/soy/SoyRenderer';
import SoyTemplates from 'metal/src/soy/SoyTemplates';
var Templates = SoyTemplates.get();
// This file was automatically generated from Rating.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.Rating.
 */

if (typeof Templates.Rating == 'undefined') { Templates.Rating = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Rating.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="rating component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '"></div>');
};
if (goog.DEBUG) {
  Templates.Rating.render.soyTemplateName = 'Templates.Rating.render';
}

Templates.Rating.render.params = ["id"];

class Rating extends Component {}
Rating.RENDERER = SoyRenderer;
SoyAop.registerTemplates('Rating');
export default Rating;
/* jshint ignore:end */
