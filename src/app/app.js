/**
* Main entry file for application.
*/
import { Veams } from './app.veams';
import Navigation from './core/components/navigation/scripts/navigation';

// Initialize modules with Veams

Veams.modules.add({namespace: 'navigation', module: Navigation});

// @INSERTPOINT :: @ref: js-init-modules-@1, @keep: true //
// @INSERTPOINT :: @ref: js-init-once, @keep: true //