const magicImporter = require('node-sass-magic-importer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const miniCssExtractPlugin = new MiniCssExtractPlugin({
	// Options similar to the same options in webpackOptions.output
	// both options are optional
	filename: '/css/[name].bundle.css'
});

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
		remove: function(comment) {
			return !/@preserve|@license|[@#]\s*sourceURL|[#@]\s*sourceMappingURL|^!/.test(comment);
		}
	}
};

/**
 * Style Task
 */
module.exports = function() {
	const prod = process.env.NODE_ENV === 'production';
	const local = process.env.NODE_ENV === 'local';
	let defaultPlugins = [require('postcss-cssnext')()];

	if (prod) {
		defaultPlugins.push(require('cssnano')(nanoOptions));
	}

	return {
		test: /\.(s*)css$/,
		use: [
			'css-hot-loader',
			MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					url: false,
					sourceMap: !prod
				}
			},
			{
				loader: 'postcss-loader',
				options: {
					sourceMap: !prod,
					ident: 'postcss',
					plugins: loader => defaultPlugins
				}
			},
			{
				loader: 'sass-loader',
				options: {
					importer: magicImporter(),
					sourceMap: !prod
				}
			}
		]
	};
};
