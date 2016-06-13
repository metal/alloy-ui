'use strict';

import { core, object } from 'metal';
import templates from './ReadingProgress.soy';
import Component from 'metal-component';
import ReadingProgressTracker from './ReadingProgressTracker';
import Soy from 'metal-soy';

/**
 * This components renders a list of links to contents on the page. These links
 * show the reading progress for these contents, as well as the expected time
 * for reading them.
 */
class ReadingProgress extends Component {
	/**
	 * @inheritDoc
	 */
	disposed() {
		this.tracker_ && this.tracker_.dispose();
	}

	/**
	 * Generates any data that is missing from the given item config object.
	 * @param {!Object}
	 */
	generateItemMissingData_(item) {
		if (item.href[0] !== '#') {
			// We only generate data for items that use hash links, since we use
			// the contents of the referenced element for that.
			return;
		}

		var element = document.getElementById(item.href.substr(1));
		if (!item.title) {
			item.title = element.querySelector(this.titleSelector).textContent;
		}
		if (!item.time) {
			var charCount = element.textContent.length;
			item.time = Math.round((charCount * 60) / 1500); // Assumes 1500 chars/min
		}
	}

	/**
	 * Gets the `ReadingProgressTracker` instance being used.
	 * @return {ReadingProgressTracker}
	 */
	getTracker() {
		return this.tracker_;
	}

	/**
	 * Handles the `rendered` lifecycle. Creates the `ReadingProgressTracker`
	 * instance that will be used to calculate reading progress value used by the
	 * ui.
	 * @protected
	 */
	rendered(firstRender) {
		if (firstRender) {
			this.tracker_ = new ReadingProgressTracker(object.mixin({
				element: this.element
			}, this.trackerConfig));
			this.tracker_.on('progressChanged', this.updateProgress.bind(this));
			this.updateProgress();
		}
	}

	/**
	 * Setter function for the `items` attribute. Converts items to the expected
	 * format, generating any info that is not given.
	 * @param {!Array<string|!{href: string, title: ?string, time: ?string}>} items
	 * @return {!{href: string, title: string, time: string}}
	 * @protected
	 */
	setterItemsFn_(items) {
		for (var i = 0; i < items.length; i++) {
			if (core.isString(items[i])) {
				items[i] = {
					href: items[i]
				};
			}
			this.generateItemMissingData_(items[i]);
		}
		return items;
	}

	/**
	 * Updates the UI according to the new progress value.
	 */
	updateProgress() {
		var activeIndex = this.tracker_.activeIndex;
		if (activeIndex >= 0) {
			var link = this.tracker_.getElementForIndex(activeIndex);
			link.querySelector('circle').setAttribute(
				'stroke-dashoffset',
				100 - this.tracker_.progress
			);
		}
	}
}

Soy.register(ReadingProgress, templates);

/**
 * `ReadingProgress`'s state configuration.
 */
ReadingProgress.STATE = {
	/**
	 * An array of items representing links to the elements in the page that this
	 * component should track reading progress for. This can either be an array of
	 * href strings, or an object with more specific configuration for each item,
	 * as follows:
	 *   - href: The link this item refers to.
	 *   - title: Optional. The title of the item.
	 *   - time: Optional. The expected time, in seconds, for reading this item.
	 * Optional info that is not given will be generated by analizyng the contents
	 * of the elements that are being linked to.
	 * @type {!Array<string|!{href: string, title: ?string, time: ?string}>}
	 */
	items: {
		setter: 'setterItemsFn_',
		validator: Array.isArray
	},

	/**
	 * The DOM selector to be used for finding the titles to be used by the items,
	 * when they're not given via the `items` attribute.
	 * @type {string}
	 */
	titleSelector: {
		validator: core.isString,
		value: 'h1'
	},

	/**
	 * A configuration object to be used when creating the `ReadingProgressTracker`.
	 * @type {Object}
	 */
	trackerConfig: {
		validator: core.isObject,
		writeOnce: true
	}
};

export default ReadingProgress;
