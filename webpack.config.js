const path = require('path');
const webpack = require('webpack');

// TODO: Function to test if previous window was open

module.exports = {
    entry:  './src/index.js',
    mode:   'development',
    module: {
        rules: [
            {
                test:    /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader:  'babel-loader',
                options: { presets: ['@babel/preset-react'] },

            },
            {
                test:   /\.(png|svg|jpg|gif)$/,
                loader: 'url-loader',
            },
            {
                test:    /\.(png|jpe?g|gif)$/i,
                loader:  'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\.scss$/,
                use:  ['style-loader', 'css-loader?url=false', 'sass-loader'],
            },

        ],
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output:  {
        path:       path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename:   'index.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port:        3006,
        publicPath:  'http://localhost:3006/dist/',
        hotOnly:     true,
        open:        true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
};
