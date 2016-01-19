'use strict';

import core from 'bower:metal/src/core';
import dom from 'bower:metal/src/dom/dom';
import CancellablePromise from 'bower:metal-promise/src/promise/Promise';
import Component from 'bower:metal/src/component/Component';
import EventHandler from 'bower:metal/src/events/EventHandler';

/*
 * AutocompleteBase component.
 */
class AutocompleteBase extends Component {
	/**
	 * @inheritDoc
	 */
	constructor(opt_config) {
		super(opt_config);

		this.eventHandler_ = new EventHandler();
		this.on('select', this.select);
	}

	/**
	 * @inheritDoc
	 */
	attached() {
		if (this.inputElement) {
			this.eventHandler_.add(dom.on(this.inputElement, 'input', this.handleUserInput_.bind(this)));
		}
	}

	/**
	 * @inheritDoc
	 */
	detached() {
		this.eventHandler_.removeAllListeners();
	}

	/**
	 * Handles the user input.
	 * @param {!Event} event
	 * @protected
	 */
	handleUserInput_() {
		this.request(this.inputElement.value);
	}

	/**
	 * Cancels pending request and starts a request for the user input.
	 * @param {string} query
	 * @return {!CancellablePromise} Deferred request.
	 */
	request(query) {
		var self = this;

		if (this.pendingRequest) {
			this.pendingRequest.cancel('Cancelled by another request');
		}

		var deferredData = self.data(query);
		if (!core.isPromise(deferredData)) {
			deferredData = CancellablePromise.resolve(deferredData);
		}

		this.pendingRequest = deferredData.then(function(data) {
			if (Array.isArray(data)) {
				return data.map(self.format.bind(self)).filter(val => core.isDefAndNotNull(val));
			}
		});

		return this.pendingRequest;
	}

	/**
	 * Normalizes the provided data value. If the value is not a function, the
	 * value will be wrapped in a function which returns the provided value.
	 * @param {Array.<object>|Promise|function} val The provided value which
	 *     have to be normalized.
	 * @protected
	 */
	setData_(val) {
		if (!core.isFunction(val)) {
			return function() {
				return val;
			};
		}
		return val;
	}
}

/**
 * AutocompleteBase attributes definition.
 * @type {!Object}
 * @static
 */
AutocompleteBase.ATTRS = {
	/**
	 * Function or array, which have to return the results from the query.
	 * If function, it should return an `array` or a `Promise`. In case of
	 * Promise, it should be resolved with an array containing the results.
	 * @type {Array.<object>|function}
	 */
	data: {
		setter: 'setData_'
	},

	/**
	 * Function that formats each item of the data.
	 * @type {function}
	 * @default Identity function.
	 */
	format: {
		value: core.identityFunction,
		validator: core.isFunction
	},

	/**
	 * The element which will be used source for the data queries.
	 * @type {DOMElement|string}
	 */
	inputElement: {
		setter: dom.toElement
	},

	/**
	 * Handles item selection. It will receive two parameters - the selected
	 * value from the user and the current value from the input element.
	 * @type {function}
	 * @default
	 *   function(selectedValue) {
	 *	   this.inputElement.value = selectedValue;
	 *	   this.inputElement.focus();
	 *   }
	 */
	select: {
		value: function(selectedValue) {
			this.inputElement.value = selectedValue.textPrimary;
			this.inputElement.focus();
		},
		validator: core.isFunction
	},

	/**
	 * Indicates if the component is visible or not.
	 * @type {boolean}
	 */
	visible: {
		validator: core.isBoolean,
		value: false
	}
};

export default AutocompleteBase;