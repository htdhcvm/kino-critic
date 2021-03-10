const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.jsx'),
    devtool: 'inline-source-map',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
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
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3001,
        publicPath: 'http://localhost:3001/dist/',
        hot: true,
        historyApiFallback: true,
    },
};
