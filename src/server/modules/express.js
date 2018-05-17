const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const deepExtend = require('deep-extend');
const Mangony = require('mangony');
const config = require('../configs/config');
const mangonyOptions = require('../../../configs/tasks/mangony/mangony.config');
const createMangony = (express) => {
	const mangonyDevOptions = deepExtend(mangonyOptions.dev.options, {
		devServer: {
			express: express,
			bsEnabled: true,
			usePort: false,
			useAssetsDir: false
		}
	});

	return new Mangony(deepExtend(mangonyOptions.options, mangonyDevOptions));
};

module.exports = (routes, apiRoutes) => {
	const app = express();
	const mangony = createMangony(app);
	
	app.use(express.static('app'));
	app.use(bodyParser.urlencoded({extended: false}));
	app.use(bodyParser.json());
	app.use(morgan('dev'));

	/**
	 * Register routes and start express server
	 *
	 */
	mangony.render();
	app.use(apiRoutes);
	app.use(routes);

	return app;
};
