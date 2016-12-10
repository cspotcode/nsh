const WrapperPlugin = require('wrapper-webpack-plugin');

module.exports = {
    context: __dirname + '/lib',
    entry: {
        cli: ['./cli']
    },
    output: {
        path: __dirname + '/bin',
        filename: '[name].js',
        pathinfo: true
    },
    externals: {
        // Conditionally required by cross-spawn but usually not needed
        'spawn-sync': 'spawn-sync'
    },
    target: 'node',
    module: {
        loaders: [
            // Remove shebangs from input scripts; webpack can't parse them
            {
                loader: 'shebang'
            }
        ]
    },
    plugins: [
        // Prefix the cli script with a shebang
        new WrapperPlugin({
            header(fileName) {
                return fileName === 'cli.js' ? `#!/usr/bin/env node\n` : ``;
            }
        })
    ]
};