/**
 * Main entry file for application.
 */
import './app.scss';
import { Veams } from './app.veams';
import Navigation from './core/components/navigation/scripts/navigation';
import Slider from './shared/components/slider/scripts/slider';
import Cta from './shared/components/cta/scripts/cta';
import SiteMap from './core/components/sitemap/scripts/sitemap';

// Initialize modules with Veams

Veams.modules.add({ namespace: 'navigation', module: Navigation });

// Init Slider
Veams.modules.add({ namespace: 'slider', module: Slider });

// Init Call-To-Action
Veams.modules.add({ namespace: 'cta', module: Cta });

// Init SiteMap
Veams.modules.add({ namespace: 'sitemap', module: SiteMap });

// @INSERTPOINT :: @ref: js-init-modules-@1, @keep: true //
// @INSERTPOINT :: @ref: js-init-once, @keep: true //
