'use strict';

import dom from 'metal-dom';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './ListItem';
import templates from './List.soy.js';

/**
 * List component.
 */
class List extends Component {
	/**
	 * Handles click event on the list. The function fires an
	 * {@code itemSelected} event.
	 * @param {!Event} event The native click event
	 */
	handleClick(event) {
		var target = event.target;
		while (target) {
			if (dom.match(target, '.listitem')) {
				break;
			}
			target = target.parentNode;
		}
		this.emit('itemSelected', target);
	}
}
Soy.register(List, templates);

/**
 * List state definition.
 * @type {!Object}
 * @static
 */
List.STATE = {
	/**
	 * The list items. Each is represented by an object that can have the following keys:
	 *   - textPrimary: The item's main content.
	 *   - textSecondary: (Optional) The item's help content.
	 *   - icons: (Optional) A list of icon css classes to render on the right side.
	 *   - iconsHtml: (Optional) A list of icon css classes to render on the right side.
	 *   - avatar: (Optional) An object that specifies the avatar's content and, optionally, a css
	 *       class it should use.
	 * @type {!Array<!Object>}
	 * @default []
	 */
	items: {
		validator: Array.isArray,
		valueFn: function() {
			return [];
		}
	},

	/**
	 * The list items as HTML to be added directly to the list.
	 * @type {string}
	 */
	itemsHtml: {
		isHtml: true
	}
};

export default List;
