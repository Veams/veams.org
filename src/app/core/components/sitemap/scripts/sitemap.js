/**
 * Description of SiteMap.
 * Class properties and decorators are supported.
 *
 * @module SiteMap
 * @version v1.0.0
 *
 * @author your_name
 */

// Imports
import $ from '@veams/query';
import Component from '@veams/component';

class SiteMap extends Component {
	/**
	 * Class Properties
	 */
	$el = $(this.el);
	$backButton = $(this.options.selectors.backButton);
	$sidebar = $(this.options.selectors.sidebar);
	$main = $(this.options.selectors.main);
	$links = $(this.options.selectors.links);


	/**
	 * Get and set the active state.
	 *
	 * @param {boolean} state - active state
	 */
	get active() {
		return this._active;
	}

	set active(state) {
		this._active = state;
	}
	/**
	 * Event & subscribe handling
	 */
	// global Handlers
	get subscribe() {
		return {
			'{{context.EVENTS.cta.toggle}}': 'toggle',
		}
	}

	// local Handlers
	get events() {
		return {
			'click {{this.options.selectors.links}}': 'handleClick'
		};
	}

	toggle() {
		if (this.active) {
			this.close();
		} else {
			this.open();
		}
	};

	handleClick = (evt, target) => {
		// evt.preventDefault();
		// return false;
	};

	close() {
		if (this.$sidebar.hasClass(this.options.classes.hidden)) {
			this.$sidebar.removeClass(this.options.classes.hidden);
		}

		this.$sidebar.addClass(this.options.classes.active);
		this.$main.removeClass(this.options.classes.contained);
		this.active = false;
	}

	open() {
		if (this.$sidebar.hasClass(this.options.classes.active)) {
			this.$sidebar.removeClass(this.options.classes.active);
		}

		this.$sidebar.addClass(this.options.classes.hidden);
		this.$main.addClass(this.options.classes.contained);
		this.active = true;
	}

	/**
	 * Constructor for our class
	 *
	 * @see module.js
	 *
	 * @param {Object} obj - Object which is passed to our class
	 * @param {Object} obj.el - element which will be saved in this.el
	 * @param {Object} obj.options - options which will be passed in as JSON object
	 */
	constructor(obj) {
		let options = {
			selectors: {
				backButton: '[data-js-item="toggle"]',
				sidebar: '[data-js-item="sidebar"]',
				main: '[data-js-item="main"]',
				links: '[class="sitemap__list-item-link"]'
			},
			classes: {
				active: 'is-active', // Active class
				hidden: 'is-hidden', // hidden class
				contained: 'is-contained'
			}
		};

		super(obj, options);
	}

	/**
	 * Render class
	 */
	render() {
		return this;
	}
}

export default SiteMap;
