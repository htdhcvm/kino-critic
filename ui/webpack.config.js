const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
console.log(__dirname);
module.exports = {
    entry: ['babel-polyfill', path.resolve(__dirname, 'src/index.jsx')],
    devtool: 'inline-source-map',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@axios': path.resolve(__dirname, 'helpers/axiosService'),
            '@features': path.resolve(__dirname, 'src/features'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new ReactRefreshWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3001,
        publicPath: 'http://localhost:3001/dist/',
        hot: true,
        historyApiFallback: true,
    },
};
