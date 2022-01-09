const path = require('path')

module.exports = {
    entry: ['./index.ts'],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader'},
            {test: /\.json$/, exclude: /node_modules/, loader: 'json-loader'}
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.json', '.jsx']
    },
    target: 'node',
    node: {
        __dirname: true
    },
    plugins: [],
    mode: 'development'
}

