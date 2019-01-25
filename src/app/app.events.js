/**
 * Const for events (pub/sub)
 */

/**
 * Events Global
 */
const EVENTS = {};


/**
 * Events for Navigation
 */
EVENTS.navigation = {
	eventName: 'navigation:eventName'
};


/**
 * Events for Slider
 */
EVENTS.slider = {
	slideStart: 'slide:start'
};

/**
 * Events for CTA
 */
EVENTS.cta = {
	click: 'cta:click',
	toggle: 'sitemap:toggle'
};
// @INSERTPOINT :: @ref: js-events

export default EVENTS;
