const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	resolve: {
		fallback: {
			buffer: require.resolve('buffer'),
			stream: require.resolve('stream'),
			crypto: require.resolve('crypto-browserify')
		}
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'crypto.js',
		library: 'crypto',
		libraryTarget: 'umd',
		globalObject: 'this',
		umdNamedDefine: true
	}
};