'use strict';

const config = require('../../../veams-cli');

module.exports = {
	options: {
		allow: {
			YFMContextData: true,
			YFMLayout: true
		},
		collections: [
			'docs',
			'subcategory',
			'examples',
			'tutorial',
			'sitemap',
			'type'
		],
		cwd: config.paths.app,
		dest: config.paths.dest,
		exportData: true,
		flatten: false,
		types: {
			data: {
				dir: '',
				createDeepIds: false,
				pathDelimiter: '_',
				files: [
					'core/**/*.hjson',
					'core/**/*.json',
					// 'app/features/**/*.hjson',
					// 'app/features/**/*.json',
					'shared/components/**/*.hjson',
					'shared/components/**/*.json',
					'pages/**/*.hjson',
					'shared/utilities/**/*.hjson',
					'shared/utilities/**/*.json'
				]
			},
			partials: {
				dir: '',
				files: [
					'shared/components/**/*.hbs',
					'core/components/**/*.hbs',
					// 'app/features/**/*.hbs',
					'shared/utilities/**/*.hbs'
				]
			},
			pages: {
				dir: 'pages',
				files: [
					'**/*.hbs'
				]
			},
			layouts: {
				dir: '',
				files: [
					'core/layouts/**/*.hbs'
				]
			}
		},
		helpers: [
			'shared/utilities/template-helpers/*.js'
		]
	},
	dev: {
		options: {
			compileStaticFiles: false,
			devServer: {
				start: true,
				injectScript: false,
				useExt: true,
				port: config.ports.server,
				bsOptions: {
					proxy: 'localhost:' + config.ports.server,
					port: config.ports.app,
					files: [
						config.paths.dest + '/**/*.html',
						config.paths.dest + '/css/**/*.css',
						config.paths.dest + '/scripts/**/*.js'
					]
				}
			},
			watch: true
		}
	},
	dist: {
		options: {
			compileStaticFiles: true,
			watch: false
		}
	}
};