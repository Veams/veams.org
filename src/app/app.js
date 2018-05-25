/**
* Main entry file for application.
*/
import { Veams } from './app.veams';
import Navigation from './core/components/navigation/scripts/navigation';
import Slider from './shared/components/slider/scripts/slider';

// Initialize modules with Veams

Veams.modules.add({ namespace: 'navigation', module: Navigation });


// Init Slider
Veams.modules.add({ namespace: 'slider', module: Slider });

// @INSERTPOINT :: @ref: js-init-modules-@1, @keep: true //
// @INSERTPOINT :: @ref: js-init-once, @keep: true //