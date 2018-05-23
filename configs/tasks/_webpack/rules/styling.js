const ExtractTextPlugin = require('extract-text-webpack-plugin');
const magicImporter = require('node-sass-magic-importer');

/**
 * Options
 */
const nanoOptions = {
	svgo: false,
	safe: true,
	normalizeUrl: false,
	mergeLonghand: false,
	autoprefixer: false,
	discardComments: {
		remove: function (comment) {
			return !(/@preserve|@license|[@#]\s*sourceURL|[#@]\s*sourceMappingURL|^!/).test(comment);
		}
	}
};

/**
 * Style Task
 */
module.exports = function () {
	const prod = process.env.NODE_ENV === 'production';
	let defaultPlugins = [];

	if (prod === true) {
		defaultPlugins.push(require('cssnano')(nanoOptions));
	}

	return {
		test: /\.(s*)css$/,
		use: ExtractTextPlugin.extract({
			fallback: 'style-loader',
			use: [
				{
					loader: 'css-loader',
					options: {
					    url: false,
						sourceMap: prod === false
					}
				},
				{
					loader: 'postcss-loader',
					options: {
						sourceMap: prod === false,
						ident: 'postcss',
						plugins: (loader) => defaultPlugins
					}
				},
				{
					loader: 'sass-loader',
					options: {
						importer: magicImporter(),
						sourceMap: prod === false
					}
				}
			],
		})
	}
};