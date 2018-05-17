// Global Packages 
import 'lazysizes';
import { environment } from 'env';

// Veams & Veams Plugins
import Veams from '@veams/core';
import VeamsLogger from '@veams/plugin-logger';
import VeamsVent from '@veams/plugin-vent';
import VeamsMediaQueryHandler from '@veams/plugin-media-query-handler';
import VeamsDOM from '@veams/plugin-dom';
import VeamsModules from '@veams/plugin-modules';
// import VeamsStore from '@veams/plugin-store';
// import VeamsTemplater from '@veams/plugin-templater';

// Dom Handler 
import $ from '@veams/query';

// Veams Helpers
import throttle from '@veams/helpers/lib/operator/throttle';

// Project Specific Events
import EVENTS from './app.events';

// Veams
Veams.onInitialize(() => {
    /**
    * Veams Plugins
    */
    
    // Dom Plugin
    Veams.use(VeamsDOM, {
     DOM: $
    });

    // Store Plugin
    // Veams.use(VeamsStore, {
    // 	reducer: rootReducer,
    // 	state: INITIAL_STATE,
    // 	subjects: subjects
    // });
    
    // Vent Plugin
    Veams.use(VeamsVent, {
        furtherEvents: EVENTS
    });

    // Logger Plugin for devmode and logger
    Veams.use(VeamsLogger);

    // Media Query Handler Plugin
    Veams.use(VeamsMediaQueryHandler);
    
    // Module System Plugin
    Veams.use(VeamsModules, {
        internalCacheOnly: false
    });
    
    // Trigger global scroll event
    window.onscroll = throttle((e) => {
        Veams.Vent.trigger(Veams.EVENTS.scroll, e);
    }, 200);
});

export { Veams };