const path = require('path');
module.exports = {
    entry: {
        app: './src/app.ts'
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                use: {
                    loader: 'ts-loader'

                },
                include: [path.resolve(__dirname, 'src')],
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        publicPath: 'public', // for every change and save bundle will go here
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    mode: 'development',
   // mode: 'production',
    devServer: {
        devMiddleware: {
            writeToDisk: (filePath) => {
                return !/hot-update/i.test(filePath); // you can change it to whatever you need
            },
        },
    }

}