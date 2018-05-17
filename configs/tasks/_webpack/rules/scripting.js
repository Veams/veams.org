module.exports = function () {
	return {
		test: /\.js$/,
		loader: 'babel-loader',
		exclude: /node_modules/,
		options: {
			// This is a feature of `babel-loader` for webpack (not Babel itself).
			// It enables caching results in ./node_modules/.cache/babel-loader/
			// directory for faster rebuilds.
			cacheDirectory: true,
			// Let's add babel presets ...
			presets: [
				'stage-0',
				'stage-1',
				[ 'env', {
					targets: {
						'browsers': [ 'last 2 versions', 'ie >= 11' ]
					}
				} ]
			],
			// ... and plugins.
			plugins: [
				'transform-class-properties',
				'transform-decorators-legacy'
			]
		}
	}
};