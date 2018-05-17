/**
 * Description of Navigation.
 * Class properties and decorators are supported.
 *
 * @module Navigation
 * @version v0.0.0
 *
 * @author your_name
 */

// Imports
import $ from '@veams/query';
import Component from '@veams/component';

class Navigation extends Component {
	/**
	* Class Properties
	*/
	$el = $(this.el);

    /**
     * Event & subscribe handling
     */

	// Local Handlers
    get events() {
        return {
            'click': 'handleClick'
        };
    }

	handleClick = (evt, target) => {
        console.log(`You clicked on: `, target);
        console.log('You got the following event: ', evt);
	};

	// Global Handlers
    get subscribe() {
        return {
            '{{context.EVENTS.resize}}': 'handleResize'
        };
    }

	handleResize = () => {
		console.log(`Browser was resized and catched by Navigation!`);
	};

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
			selectors: {},
			classes: {}
		};

		super(obj, options);
	}

	didMount() {
		console.log('Component Navigation mounted!');
	}

	/**
	 * Render class
	 */
	render() {
		return this;
	}
}

export default Navigation;
